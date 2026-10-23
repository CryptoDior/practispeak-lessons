'use client';
import { useMemo, useState } from 'react';
import { VocabWord } from '@/types/lesson';
import { resolveImageUrl } from '@/lib/images';

/**
 * Picture Quiz — shows each vocabulary image and 3 word options (the right word + 2 others
 * from the same lesson). Uses the vocab images that already exist, so no new images are needed.
 * Turn it on for a lesson with  pictureQuiz: true
 */

const LETTERS = ['a', 'b', 'c'];

/** Small seeded random, so the options are the same on the server and in the browser. */
function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const nice = (w: string) => w.charAt(0) + w.slice(1).toLowerCase();

/** Two words are "too close" to be a fair wrong option, e.g. COAT / LEATHER COAT / RAINCOAT, or FLORAL SHIRT / POLO SHIRT. */
function tooClose(a: string, b: string): boolean {
  const A = a.toLowerCase(), B = b.toLowerCase();
  if (A.includes(B) || B.includes(A)) return true;
  const head = (s: string) => s.split(/[\s-]+/).pop() ?? s;
  return head(A) === head(B);
}

export default function PictureQuiz({
  vocabulary,
  lessonSlug,
  skip = [],
}: {
  vocabulary: VocabWord[];
  lessonSlug: string;
  /** Words to leave out of the quiz (e.g. adjectives that are hard to show in one picture). */
  skip?: string[];
}) {
  const questions = useMemo(() => {
    const skipSet = new Set(skip.map((s) => s.toUpperCase()));
    const words = vocabulary.filter((w) => w.imageSlug && !skipSet.has(w.word.toUpperCase()));
    return words.map((w) => {
      const rand = seeded(`${lessonSlug}-${w.word}`);
      const pool = words.filter((o) => o.word !== w.word);
      const fair = pool.filter((o) => !tooClose(o.word, w.word));
      const others = shuffle(fair.length >= 2 ? fair : pool, rand).slice(0, 2).map((o) => o.word);
      const options = shuffle([w.word, ...others], rand);
      return { src: resolveImageUrl(w.imageSlug) ?? '', answer: w.word, options };
    });
  }, [vocabulary, lessonSlug, skip]);

  const [picked, setPicked] = useState<Record<number, string>>({});
  const done = Object.keys(picked).length;
  const score = questions.filter((q, i) => picked[i] === q.answer).length;

  if (questions.length < 3) return null;

  return (
    <div className="space-y-6">
      {questions.map((q, i) => {
        const choice = picked[i];
        return (
          <div key={q.answer} className="bg-white rounded-[20px] border border-gray-100 shadow-[0_2px_16px_rgba(6,110,245,0.06)] p-5 md:p-6">
            <div className="flex items-start gap-3">
              <span className="text-[#066EF5] font-extrabold text-lg flex-shrink-0">{i + 1}.</span>
              <div className="flex-1">
                <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={q.src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-80" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={q.src} alt="Which word matches this picture?" loading="lazy" className="absolute inset-0 w-full h-full object-contain" />
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {q.options.map((opt, o) => {
                    const isPicked = choice === opt;
                    const isRight = opt === q.answer;
                    const style = !choice
                      ? 'border-gray-200 bg-white hover:border-[#066EF5]/50 hover:bg-blue-50/40 cursor-pointer'
                      : isRight
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-800'
                        : isPicked
                          ? 'border-red-300 bg-red-50 text-red-700 line-through'
                          : 'border-gray-100 bg-white opacity-50';
                    return (
                      <button
                        key={opt}
                        type="button"
                        disabled={!!choice}
                        onClick={() => setPicked((p) => ({ ...p, [i]: opt }))}
                        className={`flex items-center gap-2 px-4 py-3 rounded-full border-2 text-base font-bold transition-all ${style}`}
                      >
                        <span className="text-gray-400 font-extrabold">{LETTERS[o]})</span>
                        <span>{nice(opt)}</span>
                        {choice && isRight && <span className="ml-auto">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {done === questions.length && (
        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg">
            {score} / {questions.length} correct{score === questions.length ? ' — perfect! 🎉' : ''}
          </p>
          <button
            type="button"
            onClick={() => setPicked({})}
            className="mt-3 px-5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-700 font-bold hover:bg-emerald-100"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
