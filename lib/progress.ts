'use client';
/*
 * Lesson progress:
 *  - public.lesson_progress  — completed lessons (best score), saved at the final score screen
 *  - public.lesson_activity  — lessons in progress (exercises finished so far), saved per exercise
 *  - public.exercise_mistakes — questions answered wrongly ("Fix your mistakes")
 *  - public.study_days        — days the student studied (daily streak)
 */
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export interface LessonResult {
  best_score: number;
  best_total: number;
}

export type ExerciseKey = 'pitchCorner' | 'completeSentence' | 'matching' | 'fillBlank' | 'multipleChoice';
export type SavedExercises = Partial<Record<ExerciseKey, { score: number; total: number }>>;

export interface InProgress {
  done: number;
  required: number;
}

const configured = () => !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

/** Percentage helper for a saved result. */
export const percentOf = (r: { best_score: number; best_total: number }) =>
  r.best_total > 0 ? Math.round((r.best_score / r.best_total) * 100) : 0;

async function loggedInClient() {
  if (!configured()) return null;
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user ? supabase : null;
}

/**
 * Save a finished lesson for the logged-in user (best score is kept by the database, and the
 * lesson's in-progress record is cleared). Resolves to 'saved', 'anon' (not logged in) or 'error'.
 */
export async function recordLessonCompletion(lessonSlug: string, score: number, total: number) {
  const supabase = await loggedInClient();
  if (!supabase) return 'anon' as const;
  const { error } = await supabase.rpc('record_lesson_completion', {
    p_lesson_slug: lessonSlug,
    p_score: score,
    p_total: total,
  });
  if (!error) markStudyDay(supabase);
  return error ? ('error' as const) : ('saved' as const);
}

type Client = ReturnType<typeof createClient>;

/** Mark today as a study day (for the streak) — once per browser session per day. */
export async function markStudyDay(client?: Client) {
  const supabase = client ?? (await loggedInClient());
  if (!supabase) return;
  const today = new Date().toDateString();
  try {
    if (sessionStorage.getItem('ps-study-day') === today) return;
  } catch {}
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  const { error } = await supabase.rpc('log_study_day', { p_tz: tz });
  if (error) return;
  try {
    sessionStorage.setItem('ps-study-day', today);
  } catch {}
}

export type MistakeExercise =
  | 'matching'
  | 'fillBlank'
  | 'multipleChoice'
  | 'pictureQuiz'
  | 'completeSentence'
  | 'menuReading';

/** Save questions answered wrongly, and clear ones now answered correctly (logged-in users only). */
export async function recordMistakes(lessonSlug: string, exercise: MistakeExercise, wrong: string[], right: string[]) {
  const supabase = await loggedInClient();
  if (!supabase || (!wrong.length && !right.length)) return;
  await supabase.rpc('record_mistakes', {
    p_lesson_slug: lessonSlug,
    p_exercise: exercise,
    p_wrong: wrong.slice(0, 100),
    p_right: right.slice(0, 100),
  });
}

/** Save one finished exercise (logged-in users only; silently skipped otherwise). */
export async function saveExerciseProgress(
  lessonSlug: string,
  exercise: ExerciseKey,
  score: number,
  total: number,
  required: number
) {
  const supabase = await loggedInClient();
  if (!supabase || total < 1) return;
  const { error } = await supabase.rpc('save_lesson_exercise', {
    p_lesson_slug: lessonSlug,
    p_exercise: exercise,
    p_score: score,
    p_total: total,
    p_required: required,
  });
  if (!error) markStudyDay(supabase);
}

/** Exercises already finished in this lesson (for "Welcome back" / resume). null if none or logged out. */
export async function loadSavedExercises(lessonSlug: string): Promise<SavedExercises | null> {
  const supabase = await loggedInClient();
  if (!supabase) return null;
  const { data } = await supabase
    .from('lesson_activity')
    .select('exercises')
    .eq('lesson_slug', lessonSlug)
    .maybeSingle();
  const ex = (data?.exercises ?? null) as SavedExercises | null;
  return ex && Object.keys(ex).length ? ex : null;
}

/**
 * The logged-in user's completed lessons (slug → best result) and lessons in progress
 * (slug → exercises done), loaded once per page. null while loading or when logged out.
 */
export function useLessonProgress(): { completed: Map<string, LessonResult>; inProgress: Map<string, InProgress> } | null {
  const [state, setState] = useState<{ completed: Map<string, LessonResult>; inProgress: Map<string, InProgress> } | null>(
    null
  );
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const supabase = await loggedInClient();
      if (!supabase || cancelled) return;
      const [done, active] = await Promise.all([
        supabase.from('lesson_progress').select('lesson_slug, best_score, best_total'),
        supabase.from('lesson_activity').select('lesson_slug, exercises, exercises_required'),
      ]);
      if (cancelled) return;
      const completed = new Map((done.data ?? []).map((r) => [r.lesson_slug as string, r as LessonResult]));
      const inProgress = new Map(
        (active.data ?? []).map((r) => [
          r.lesson_slug as string,
          { done: Object.keys(r.exercises ?? {}).length, required: r.exercises_required as number },
        ])
      );
      setState({ completed, inProgress });
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return state;
}
