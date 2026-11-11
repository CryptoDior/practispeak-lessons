'use client';
import Link from 'next/link';
import { useState } from 'react';
import { recordMistakes, markStudyDay, type MistakeExercise } from '@/lib/progress';

export interface MistakeQuestion {
  lessonSlug: string;
  lessonTitle: string;
  exercise: MistakeExercise;
  itemKey: string;
  prompt: string;
  /** Gap-fill sentence (fill the blank) */
  sentence?: { before: string; after: string };
  options: string[];
  correctIndex: number;
  /** Picture to name (Picture Quiz) */
  image?: string;
  /** How the options are written on screen, if different (e.g. "Coat" for COAT) */
  display?: string[];
  /** Shown after answering (Complete the Sentence) */
  explanation?: string;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/** One question at a time. Right → removed from the list; wrong → stays for next time. */
export default function MistakesQuiz({ questions }: { questions: MistakeQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [fixed, setFixed] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[index];

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const right = i === q.correctIndex;
    if (right) setFixed((n) => n + 1);
    recordMistakes(q.lessonSlug, q.exercise, right ? [] : [q.itemKey], right ? [q.itemKey] : []);
    markStudyDay();
  };

  const next = () => {
    if (index + 1 >= questions.length) return setFinished(true);
    setIndex(index + 1);
    setPicked(null);
  };

  if (finished) {
    const left = questions.length - fixed;
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
        <p className="text-4xl mb-3" aria-hidden="true">{left === 0 ? '🎉' : '💪'}</p>
        <h2 className="font-playfair text-3xl font-semibold text-slate-900">
          You fixed {fixed} of {questions.length}
        </h2>
        <p className="mt-2 text-[15px] text-slate-600">
          {left === 0
            ? 'Every mistake is fixed. Great work!'
            : `${left} ${left === 1 ? 'question stays' : 'questions stay'} on your list. Try again later.`}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {left > 0 && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Try again
            </button>
          )}
          <Link
            href="/progress"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600"
          >
            Back to My Progress
          </Link>
        </div>
      </div>
    );
  }

  const right = picked !== null && picked === q.correctIndex;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between gap-3 mb-4 text-sm">
        <span className="font-semibold text-slate-500">
          Question {index + 1} of {questions.length}
        </span>
        <Link href={`/lessons/${q.lessonSlug}`} className="truncate text-blue-600 hover:text-blue-700">
          {q.lessonTitle}
        </Link>
      </div>
      <div className="h-1.5 rounded-full bg-slate-100 mb-6 overflow-hidden">
        <div className="h-full bg-blue-600 transition-all" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>

      <p className="font-semibold text-slate-900 text-lg leading-snug mb-3">{q.prompt}</p>
      {q.image && (
        <div className="relative w-full max-w-xs mx-auto aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={q.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-80" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={q.image} alt="Which word matches this picture?" className="absolute inset-0 w-full h-full object-contain" />
        </div>
      )}
      {q.sentence && (
        <p className="mb-5 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-[15px] text-slate-800 leading-relaxed">
          {q.sentence.before}{' '}
          <span
            className={`inline-block min-w-[6rem] border-b-2 px-1 text-center font-semibold ${
              picked === null ? 'border-slate-400 text-transparent' : right ? 'border-emerald-500 text-emerald-700' : 'border-red-400 text-red-600'
            }`}
          >
            {picked === null ? '_' : (q.display ?? q.options)[picked]}
          </span>{' '}
          {q.sentence.after}
        </p>
      )}

      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const isRight = i === q.correctIndex;
          const isPicked = i === picked;
          const style =
            picked === null
              ? 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/40 cursor-pointer'
              : isRight
              ? 'border-emerald-300 bg-emerald-50'
              : isPicked
              ? 'border-red-300 bg-red-50'
              : 'border-slate-100 bg-white opacity-50';
          return (
            <button
              key={i}
              type="button"
              onClick={() => choose(i)}
              disabled={picked !== null}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-[15px] font-medium transition-colors ${style}`}
            >
              <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">
                {LETTERS[i]}
              </span>
              <span className="flex-1">{q.display?.[i] ?? opt}</span>
              {picked !== null && isRight && <span className="text-emerald-600 font-bold">✓</span>}
              {isPicked && !isRight && <span className="text-red-500 font-bold">✗</span>}
            </button>
          );
        })}
      </div>

      {picked !== null && q.explanation && (
        <p className="mt-4 rounded-xl bg-amber-50 border border-amber-100 px-4 py-3 text-sm text-amber-900">{q.explanation}</p>
      )}

      {picked !== null && (
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className={`text-[15px] font-semibold ${right ? 'text-emerald-700' : 'text-red-600'}`}>
            {right ? '✓ Fixed! This one leaves your list.' : '✗ Not quite. It stays on your list for next time.'}
          </p>
          <button
            type="button"
            onClick={next}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {index + 1 >= questions.length ? 'See results' : 'Next question →'}
          </button>
        </div>
      )}
    </div>
  );
}
