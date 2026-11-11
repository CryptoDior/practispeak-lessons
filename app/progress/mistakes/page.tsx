import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import MistakesQuiz, { type MistakeQuestion } from '@/components/progress/MistakesQuiz';
import { createClient } from '@/lib/supabase/server';
import { getLessonBySlug } from '@/data/lessons';
import { resolveImageUrl } from '@/lib/images';

export const metadata: Metadata = { title: 'Fix your mistakes | Practispeak' };
export const dynamic = 'force-dynamic';

const MAX_QUESTIONS = 20;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** The right answer plus up to 3 (or howManyWrong) others from the same exercise, in random order. */
function choices(correct: string, others: string[], howManyWrong = 3) {
  const wrong = shuffle(Array.from(new Set(others.filter((o) => o !== correct)))).slice(0, howManyWrong);
  const options = shuffle([correct, ...wrong]);
  return { options, correctIndex: options.indexOf(correct) };
}

/** Turn a saved mistake back into a question, from the lesson's own exercise. null if it no longer exists. */
function toQuestion(m: { lesson_slug: string; exercise: string; item_key: string }): MistakeQuestion | null {
  const lesson = getLessonBySlug(m.lesson_slug);
  if (!lesson) return null;
  const base = { lessonSlug: m.lesson_slug, lessonTitle: lesson.title, exercise: m.exercise as MistakeQuestion['exercise'], itemKey: m.item_key };

  if (m.exercise === 'multipleChoice') {
    const item = lesson.multipleChoiceExercise?.[Number(m.item_key)];
    if (!item) return null;
    // Keep the lesson's own order (options like "All of the above" depend on it).
    return { ...base, prompt: item.question, options: item.options, correctIndex: item.correctIndex };
  }
  if (m.exercise === 'fillBlank') {
    const items = lesson.fillBlankExercise ?? [];
    const item = items[Number(m.item_key)];
    if (!item) return null;
    return {
      ...base,
      prompt: 'Choose the word that fills the gap.',
      sentence: { before: item.before, after: item.after },
      ...choices(item.answer, items.map((i) => i.answer)),
    };
  }
  if (m.exercise === 'completeSentence') {
    const item = lesson.completeSentenceExercise?.items[Number(m.item_key)];
    if (!item) return null;
    const [before, after = ''] = item.sentence.split('_____');
    return {
      ...base,
      prompt: 'Choose the answer that completes the sentence.',
      sentence: { before, after },
      options: item.options,
      correctIndex: item.correctIndex,
      explanation: item.explanation,
    };
  }
  if (m.exercise === 'menuReading') {
    const item = lesson.menuReading?.questions[Number(m.item_key)];
    if (!item) return null;
    return { ...base, prompt: item.question, options: item.options, correctIndex: item.correctIndex };
  }
  if (m.exercise === 'pictureQuiz') {
    const withPictures = lesson.vocabulary.filter((v) => v.imageSlug);
    const word = withPictures.find((v) => v.word === m.item_key);
    const image = word ? resolveImageUrl(word.imageSlug) : null;
    if (!word || !image) return null;
    // Wrong options: other words from the lesson that aren't too similar (COAT / RAINCOAT)
    const head = (s: string) => s.toLowerCase().split(/[\s-]+/).pop() ?? s;
    const fair = withPictures
      .map((v) => v.word)
      .filter((w) => w !== word.word && !w.toLowerCase().includes(word.word.toLowerCase()) && !word.word.toLowerCase().includes(w.toLowerCase()) && head(w) !== head(word.word));
    const nice = (w: string) => w.charAt(0) + w.slice(1).toLowerCase();
    const c = choices(word.word, fair.length >= 2 ? fair : withPictures.map((v) => v.word), 2);
    return { ...base, prompt: 'Which word matches this picture?', image, options: c.options, correctIndex: c.correctIndex, display: c.options.map(nice) };
  }
  if (m.exercise === 'matching') {
    const pairs = lesson.matchingExercise ?? [];
    const pair = pairs.find((p) => p.word === m.item_key);
    if (!pair) return null;
    return {
      ...base,
      prompt: `What does “${pair.word}” mean?`,
      ...choices(pair.definition, pairs.map((p) => p.definition)),
    };
  }
  return null;
}

export default async function MistakesPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/progress/mistakes');

  // Row Level Security returns only this user's mistakes.
  const { data } = await supabase
    .from('exercise_mistakes')
    .select('lesson_slug, exercise, item_key')
    .order('created_at', { ascending: false })
    .limit(100);
  const questions = (data ?? [])
    .map(toQuestion)
    .filter((q): q is MistakeQuestion => !!q)
    .slice(0, MAX_QUESTIONS);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FB]">
      <SiteHeader active="" />
      <main className="flex-1 font-poppins max-w-3xl w-full mx-auto px-4 sm:px-6 pt-8 pb-16">
        <Link href="/progress" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          ← My Progress
        </Link>
        <header className="mt-4 mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-2">Practice</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-slate-900">Fix your mistakes</h1>
          <p className="mt-2 text-[15px] text-slate-600">
            Questions you got wrong in lesson exercises. Answer one correctly and it leaves your list.
          </p>
        </header>
        {questions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="text-3xl mb-2" aria-hidden="true">🎉</p>
            <p className="text-[15px] text-slate-700">
              No mistakes to fix. Questions you get wrong in lesson exercises will appear here.
            </p>
            <Link
              href="/#categories"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Start a lesson
            </Link>
          </div>
        ) : (
          <MistakesQuiz questions={questions} />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
