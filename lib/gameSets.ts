/*
 * Server-only: build game topics from lesson vocabulary, reusing the lessons' words and pictures
 * (no separate game images). Lessons are loaded here, never in the browser bundle.
 */
import { getLessonBySlug } from '@/data/lessons';
import { getCatalog, bandForLevel } from '@/lib/series';
import { resolveImageUrl } from '@/lib/images';
import { listR2Keys, imageExists } from '@/lib/imageStatus';
import type { GameSet } from '@/data/gameTypes';

/** One word, letters only — for games where you spell or guess letters. */
export const SINGLE_WORD = /^[a-z]+$/;
/** Short words or two-word items (e.g. "nail polish") — for matching games. */
export const SHORT_TERM = /^[a-z]+(?:[ -][a-z]+)?$/;

/**
 * One topic per lesson in a category and level band (e.g. Everyday Life, A1–A2).
 * Only words whose picture is actually uploaded are used, so a game never shows an empty or
 * emoji picture; lessons with fewer than `minWords` such words are skipped. If the uploads can't
 * be checked, any word with a picture link counts.
 */
export async function lessonWordSets(opts: {
  categoryId: string;
  bandId: string;
  group: string;
  blurb: (lessonTitle: string) => string;
  wordPattern?: RegExp;
  minWords?: number;
}): Promise<GameSet[]> {
  const { categoryId, bandId, group, blurb, wordPattern = SINGLE_WORD, minWords = 4 } = opts;
  const category = getCatalog().find((c) => c.id === categoryId);
  if (!category) return [];
  const keys = await listR2Keys();

  const sets: GameSet[] = [];
  for (const summary of category.lessons) {
    if (bandForLevel(summary.level).id !== bandId) continue;
    const lesson = getLessonBySlug(summary.slug);
    if (!lesson) continue;

    const seen = new Set<string>();
    const items = lesson.vocabulary
      .map((v) => ({ word: v.word.trim().toLowerCase(), imageSlug: v.imageSlug }))
      .filter((v) => wordPattern.test(v.word) && !seen.has(v.word) && seen.add(v.word))
      .filter((v) => (keys ? imageExists(keys, v.imageSlug) : !!resolveImageUrl(v.imageSlug)))
      .map((v) => ({ word: v.word, image: resolveImageUrl(v.imageSlug)!, scene: '🖼️', fit: 'contain' as const }));

    if (items.length < minWords) continue;
    sets.push({
      id: `lesson-${lesson.slug}`,
      label: lesson.title,
      blurb: blurb(lesson.title),
      items,
      lessonSlug: lesson.slug,
      group,
    });
  }
  return sets;
}

/** The lessons currently used as game topics. Add a category here to add it to every game. */
export const EVERYDAY_A1_A2 = { categoryId: 'everyday', bandId: 'beginner', group: 'Everyday Life · A1–A2' };
