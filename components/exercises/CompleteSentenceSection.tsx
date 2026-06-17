'use client';
import { useState, useCallback } from 'react';
import { CompleteSentenceExercise } from '@/types/lesson';

const OPTION_LABELS = ['A', 'B', 'C'];

interface Props {
  exercise: CompleteSentenceExercise;
  onComplete?: (score: number, total: number) => void;
}

export default function CompleteSentenceSection({ exercise, onComplete }: Props) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => exercise.items.map(() => null)
  );
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.filter((a, i) => a === exercise.items[i].correctIndex).length;

  const handleSelect = (itemIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === itemIdx ? optIdx : a)));
  };

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    onComplete?.(score, exercise.items.length);
  }, [score, exercise.items.length, onComplete]);

  const handleReset = () => {
    setAnswers(exercise.items.map(() => null));
    setSubmitted(false);
  };

  return (
    <div>
      {/* Instructions */}
      <div className="bg-[#F0F7E6] border border-[#C8E6A0] rounded-xl px-4 py-3 mb-8">
        <p className="text-sm font-semibold text-[#3B6E1A]">{exercise.instructions}</p>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-8">
        {exercise.items.map((item, i) => {
          const selected = answers[i];
          const isCorrect = submitted && selected === item.correctIndex;
          const isWrong = submitted && selected !== null && selected !== item.correctIndex;

          // Split sentence at blank
          const [before, after] = item.sentence.split('_____');

          return (
            <div key={i}>
              {/* Sentence with blank */}
              <p className="text-base font-semibold text-gray-800 mb-3">
                <span className="font-extrabold text-gray-500 mr-2">{i + 1}.</span>
                {before}
                <span className={`inline-block min-w-[80px] border-b-2 text-center px-2 mx-1 font-extrabold ${
                  submitted
                    ? isCorrect
                      ? 'border-emerald-400 text-emerald-700'
                      : 'border-red-300 text-red-600'
                    : selected !== null
                    ? 'border-[#066EF5] text-[#066EF5]'
                    : 'border-gray-300 text-transparent'
                }`}>
                  {selected !== null ? item.options[selected] : '        '}
                </span>
                {after}
              </p>

              {/* Options */}
              <div className="flex flex-col gap-2 pl-6">
                {item.options.map((option, j) => {
                  const isSelected = selected === j;
                  let style = 'border border-gray-200 bg-white text-gray-700 hover:border-[#066EF5] hover:bg-[#F5F8FF]';
                  if (isSelected && !submitted) style = 'border border-[#066EF5] bg-[#EEF3FF] text-[#066EF5]';
                  if (submitted && j === item.correctIndex) style = 'border border-emerald-300 bg-emerald-50 text-emerald-800';
                  if (submitted && isSelected && isWrong) style = 'border border-red-200 bg-red-50 text-red-700';
                  if (submitted && !isSelected && j !== item.correctIndex) style = 'border border-gray-100 bg-gray-50 text-gray-400';

                  return (
                    <button
                      key={j}
                      disabled={submitted}
                      onClick={() => handleSelect(i, j)}
                      className={`text-left rounded-xl px-4 py-2.5 text-sm font-semibold transition-all flex items-center gap-3 ${style} disabled:cursor-default`}
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-extrabold">
                        {OPTION_LABELS[j]}
                      </span>
                      <span>{option}</span>
                      {submitted && j === item.correctIndex && (
                        <span className="ml-auto text-emerald-500 font-extrabold">✓</span>
                      )}
                      {submitted && isSelected && isWrong && j !== item.correctIndex && (
                        <span className="ml-auto text-red-400 font-extrabold">✗</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {submitted && (
                <div className={`mt-3 ml-6 px-4 py-3 rounded-xl text-xs font-semibold leading-relaxed ${
                  isCorrect
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                    : 'bg-amber-50 text-amber-800 border border-amber-100'
                }`}>
                  <span className="font-extrabold">{isCorrect ? '✓ Correct! ' : '✗ Not quite. '}</span>
                  {item.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / score */}
      <div className="mt-8 text-center">
        {!submitted ? (
          <button
            disabled={!allAnswered}
            onClick={handleSubmit}
            className="px-8 py-3 bg-[#066EF5] text-white font-extrabold text-sm rounded-xl hover:bg-blue-600 transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check Answers
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className={`text-2xl font-extrabold ${
              score === exercise.items.length ? 'text-emerald-600' : score >= exercise.items.length / 2 ? 'text-[#066EF5]' : 'text-amber-600'
            }`}>
              {score} / {exercise.items.length}
            </div>
            <p className="text-sm font-semibold text-gray-500">
              {score === exercise.items.length
                ? 'Perfect score! 🎉'
                : score >= exercise.items.length / 2
                ? 'Good work — review the explanations above.'
                : 'Keep practising — read the explanations carefully.'}
            </p>
            <button onClick={handleReset} className="text-xs text-[#066EF5] font-bold hover:underline mt-1">
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
