import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import { createClient } from '@/lib/supabase/server';
import { getCatalog, findLessonInCatalog, bandForLevel } from '@/lib/series';
import WeeklyGoalPicker from '@/components/progress/WeeklyGoalPicker';

export const metadata: Metadata = { title: 'My Progress | Practispeak' };
export const dynamic = 'force-dynamic';

interface Row {
  lesson_slug: string;
  best_score: number;
  best_total: number;
  attempts: number;
  last_completed_at: string;
}

const pct = (score: number, total: number) => (total > 0 ? Math.round((score / total) * 100) : 0);
const LEVEL_GROUPS = [
  { label: 'A1–A2', bands: ['beginner'] },
  { label: 'B1–B2', bands: ['intermediate'] },
  { label: 'C1–C2', bands: ['advanced', 'proficient'] },
];

/* ---------- Dates in the student's own time zone, as YYYY-MM-DD ---------- */
function ymdIn(tz: string, date: Date = new Date()) {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}
function addDays(ymd: string, n: number) {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}
/** 0 = Monday … 6 = Sunday */
function weekdayIndex(ymd: string) {
  const [y, m, d] = ymd.split('-').map(Number);
  return (new Date(Date.UTC(y, m - 1, d)).getUTCDay() + 6) % 7;
}
const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function Bar({ done, total }: { done: number; total: number }) {
  return (
    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
      <div className="h-full rounded-full bg-emerald-500" style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
    </div>
  );
}

export default async function ProgressPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/progress');

  // Row Level Security returns only this user's progress.
  const { data } = await supabase
    .from('lesson_progress')
    .select('lesson_slug, best_score, best_total, attempts, last_completed_at')
    .order('last_completed_at', { ascending: false });
  const rows = (data ?? []) as Row[];
  const done = new Map(rows.map((r) => [r.lesson_slug, r]));

  // Lessons started but not finished (exercises saved one by one)
  const { data: activity } = await supabase
    .from('lesson_activity')
    .select('lesson_slug, exercises, exercises_required, updated_at')
    .order('updated_at', { ascending: false });
  const continueLessons = (activity ?? [])
    .map((a) => {
      const found = findLessonInCatalog(a.lesson_slug as string);
      if (!found) return null;
      return {
        slug: a.lesson_slug as string,
        title: found.summary.title,
        category: found.category.name,
        level: found.summary.level,
        doneCount: Object.keys(a.exercises ?? {}).length,
        required: a.exercises_required as number,
        href: found.summary.externalUrl ?? `/lessons/${a.lesson_slug}`,
      };
    })
    .filter((x): x is NonNullable<typeof x> => !!x);

  /* ---------- Streak, this week, practice ---------- */
  const [{ data: dayRows }, { data: settings }, { count: mistakeCount }, { count: wordCount }, { count: dueCount }] =
    await Promise.all([
      supabase.from('study_days').select('day').order('day', { ascending: false }).limit(400),
      supabase.from('learner_settings').select('weekly_goal, timezone').maybeSingle(),
      supabase.from('exercise_mistakes').select('*', { count: 'exact', head: true }),
      supabase.from('dictionary_entries').select('id', { count: 'exact', head: true }),
      supabase
        .from('dictionary_entries')
        .select('id', { count: 'exact', head: true })
        .lte('next_review_at', new Date().toISOString()),
    ]);
  const tz = (settings?.timezone as string | undefined) || 'UTC';
  const goal = (settings?.weekly_goal as number | undefined) ?? 3;
  const studied = new Set((dayRows ?? []).map((r) => r.day as string));
  const today = ymdIn(tz);
  // Streak: days in a row up to today (or up to yesterday, if not studied yet today)
  let streak = 0;
  for (let d = studied.has(today) ? today : addDays(today, -1); studied.has(d); d = addDays(d, -1)) streak++;
  const weekStart = addDays(today, -weekdayIndex(today));
  const week = WEEKDAYS.map((label, i) => {
    const day = addDays(weekStart, i);
    return { label, day, studied: studied.has(day), isToday: day === today, future: day > today };
  });
  const lessonsThisWeek = rows.filter((r) => ymdIn(tz, new Date(r.last_completed_at)) >= weekStart).length;
  const goalMet = lessonsThisWeek >= goal;
  const mistakes = mistakeCount ?? 0;
  const words = wordCount ?? 0;
  const due = dueCount ?? 0;

  const catalog = getCatalog();
  const allLessons = catalog.flatMap((c) => c.lessons);
  const completedCount = allLessons.filter((l) => done.has(l.slug)).length;
  const avg = rows.length ? Math.round(rows.reduce((n, r) => n + pct(r.best_score, r.best_total), 0) / rows.length) : 0;

  const categories = catalog
    .map((c) => ({ id: c.id, name: c.name, total: c.lessons.length, done: c.lessons.filter((l) => done.has(l.slug)).length }))
    .sort((a, b) => b.done - a.done || a.name.localeCompare(b.name));

  const levels = LEVEL_GROUPS.map((g) => {
    const inGroup = allLessons.filter((l) => g.bands.includes(bandForLevel(l.level).id));
    return { label: g.label, total: inGroup.length, done: inGroup.filter((l) => done.has(l.slug)).length };
  });

  const recent = rows.slice(0, 15).map((r) => {
    const found = findLessonInCatalog(r.lesson_slug);
    return {
      ...r,
      title: found?.summary.title ?? r.lesson_slug,
      category: found?.category.name ?? '',
      level: found?.summary.level ?? '',
      href: found ? found.summary.externalUrl ?? `/lessons/${r.lesson_slug}` : null,
    };
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FB]">
      <SiteHeader active="" />
      <main className="flex-1 font-poppins max-w-5xl w-full mx-auto px-4 sm:px-6 pt-8 pb-16">
        <header className="mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-2">Your learning</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-slate-900">My Progress</h1>
          <p className="mt-2 text-[15px] text-slate-600">
            A lesson counts as completed when you finish its exercises. Your best score is kept.
          </p>
        </header>

        {/* ---------- Streak + weekly goal ---------- */}
        <section className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#F9C9BD] bg-gradient-to-br from-[#FFD8CC] via-[#F6E4F0] to-[#D6E4FF] p-5 sm:p-6 shadow-[0_8px_30px_rgba(250,128,114,0.25)]">
            <p className="font-playfair text-4xl font-semibold text-slate-900">
              <span aria-hidden="true">🔥 </span>
              {streak} {streak === 1 ? 'day' : 'days'}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {streak === 0
                ? 'Study today to start a streak: finish an exercise, review words or fix a mistake.'
                : studied.has(today)
                ? 'Study streak. You’ve studied today, see you tomorrow!'
                : 'Study streak. Study today to keep it going!'}
            </p>
            <div className="mt-4 flex gap-1.5 sm:gap-2" aria-label="Days studied this week">
              {week.map((d) => (
                <div key={d.day} className="flex flex-col items-center gap-1">
                  <span
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                      d.studied
                        ? 'bg-gradient-to-br from-[#FA8072] to-blue-500 text-white shadow-[0_0_12px_rgba(250,128,114,0.6)]'
                        : d.future
                        ? 'bg-white/60 text-slate-300 border border-white'
                        : 'bg-white text-slate-400 border border-[#F9C9BD]'
                    } ${d.isToday ? 'ring-2 ring-[#FA8072] ring-offset-2 ring-offset-[#F6E4F0]' : ''}`}
                    title={d.day}
                  >
                    {d.studied ? '✓' : ''}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-playfair text-4xl font-semibold text-slate-900">
                  {lessonsThisWeek} <span className="text-2xl text-slate-500">of {goal}</span>
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {goalMet ? '🎯 Weekly goal reached. Well done!' : 'lessons completed this week'}
                </p>
              </div>
              <WeeklyGoalPicker goal={goal} />
            </div>
            <div className="mt-5 h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${goalMet ? 'bg-emerald-500' : 'bg-blue-600'}`}
                style={{ width: `${Math.min(100, (lessonsThisWeek / goal) * 100)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">The week starts on Monday.</p>
          </div>
        </section>

        {/* ---------- Practice: fix mistakes, review words ---------- */}
        {(mistakes > 0 || words > 0) && (
          <section className="mb-8 grid gap-4 sm:grid-cols-2">
            {mistakes > 0 && (
              <Link
                href="/progress/mistakes"
                className="flex items-center justify-between gap-3 rounded-2xl border border-red-200 bg-red-50/60 px-5 py-4 hover:border-red-300 hover:shadow-sm transition"
              >
                <span>
                  <span className="block font-semibold text-slate-900">✏️ Fix your mistakes</span>
                  <span className="block text-sm text-slate-600">
                    {mistakes} {mistakes === 1 ? 'question' : 'questions'} to practise again
                  </span>
                </span>
                <span className="text-sm font-semibold text-blue-600 flex-shrink-0">Start →</span>
              </Link>
            )}
            {words > 0 && (
              <Link
                href={due > 0 ? '/dictionary/review' : '/dictionary'}
                className="flex items-center justify-between gap-3 rounded-2xl border border-blue-200 bg-blue-50/60 px-5 py-4 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span>
                  <span className="block font-semibold text-slate-900">🧠 Review my words</span>
                  <span className="block text-sm text-slate-600">
                    {due > 0 ? `${due} ${due === 1 ? 'word' : 'words'} due for review` : 'All caught up for now'}
                  </span>
                </span>
                <span className="text-sm font-semibold text-blue-600 flex-shrink-0">{due > 0 ? 'Review →' : 'Open →'}</span>
              </Link>
            )}
          </section>
        )}

        {/* ---------- Continue where you left off ---------- */}
        {continueLessons.length > 0 && (
          <section className="mb-8 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
            <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-4">Continue where you left off</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {continueLessons.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={c.href}
                    className="flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-white px-4 py-3 hover:border-blue-300 hover:shadow-sm transition"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium text-slate-900 truncate">{c.title}</span>
                      <span className="block text-xs text-slate-500 mt-0.5">
                        {c.category} · {c.level} · {c.doneCount} of {c.required} exercises done
                      </span>
                    </span>
                    <span className="flex-shrink-0 text-sm font-semibold text-blue-600">Continue →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {rows.length === 0 && continueLessons.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="text-[15px] text-slate-700">
              No completed lessons yet. Finish the exercises at the end of any lesson and it will appear here.
            </p>
            <Link
              href="/#categories"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Start a lesson
            </Link>
          </div>
        ) : rows.length === 0 ? null : (
          <>
            {/* ---------- Totals ---------- */}
            <section className="grid gap-4 sm:grid-cols-3 mb-8">
              {[
                { value: completedCount, label: completedCount === 1 ? 'lesson completed' : 'lessons completed' },
                { value: `${avg}%`, label: 'average best score' },
                { value: categories.filter((c) => c.done > 0).length, label: 'categories started' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
                  <p className="font-playfair text-4xl font-semibold text-slate-900">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </section>

            <div className="grid gap-6 lg:grid-cols-2 mb-8">
              {/* ---------- By category ---------- */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
                <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-4">By category</h2>
                <ul className="space-y-4">
                  {categories.map((c) => (
                    <li key={c.id}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <Link href={`/categories/${c.id}`} className="font-medium text-slate-800 hover:text-blue-600">
                          {c.name}
                        </Link>
                        <span className="text-slate-500">
                          {c.done} / {c.total}
                        </span>
                      </div>
                      <Bar done={c.done} total={c.total} />
                    </li>
                  ))}
                </ul>
              </section>

              {/* ---------- By level ---------- */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.05)] self-start">
                <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-4">By level</h2>
                <ul className="space-y-4">
                  {levels.map((l) => (
                    <li key={l.label}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium text-slate-800">{l.label}</span>
                        <span className="text-slate-500">
                          {l.done} / {l.total}
                        </span>
                      </div>
                      <Bar done={l.done} total={l.total} />
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* ---------- Recently completed ---------- */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
              <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-4">Recently completed</h2>
              <ul className="divide-y divide-slate-100">
                {recent.map((r) => (
                  <li key={r.lesson_slug} className="flex items-center justify-between gap-4 py-3">
                    <div className="min-w-0">
                      {r.href ? (
                        <Link href={r.href} className="font-medium text-slate-900 hover:text-blue-600">
                          {r.title}
                        </Link>
                      ) : (
                        <span className="font-medium text-slate-900">{r.title}</span>
                      )}
                      <p className="text-xs text-slate-500 mt-0.5">
                        {[r.category, r.level, new Date(r.last_completed_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })]
                          .filter(Boolean)
                          .join(' · ')}
                        {r.attempts > 1 && ` · ${r.attempts} attempts`}
                      </p>
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-bold text-emerald-700">
                      {pct(r.best_score, r.best_total)}%
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
