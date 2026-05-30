'use client';
import { useState } from 'react';
import { MultipleChoiceItem } from '@/types/lesson';

interface Props {
  items: MultipleChoiceItem[];
  onComplete: (score: number, total: number) => void;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export default function MultipleChoiceExercise({ items, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted || answers[qIdx] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
  };

  const handleSubmit = () => {
    const score = items.filter((item, i) => answers[i] === item.correctIndex).length;
    setSubmitted(true);
    onComplete(score, items.length);
  };

  const allAnswered = items.every((_, i) => answers[i] !== undefined);
  const score = submitted
    ? items.filter((item, i) => answers[i] === item.correctIndex).length
    : 0;

  const optionCardStyle = (qIdx: number, oIdx: number): string => {
    const isSelected = answers[qIdx] === oIdx;
    const isCorrect = items[qIdx].correctIndex === oIdx;

    if (!submitted) {
      return isSelected
        ? 'border-[#066EF5] bg-[#EEF3FF]'
        : 'border-gray-200 bg-white hover:border-[#066EF5]/40 hover:bg-blue-50/30 cursor-pointer';
    }
    if (isCorrect) return 'border-emerald-300 bg-emerald-50';
    if (isSelected && !isCorrect) return 'border-red-300 bg-red-50';
    return 'border-gray-100 bg-white opacity-40';
  };

  const letterBadgeStyle = (qIdx: number, oIdx: number): string => {
    const isSelected = answers[qIdx] === oIdx;
    const isCorrect = items[qIdx].correctIndex === oIdx;

    if (!submitted) {
      return isSelected ? 'bg-[#066EF5] text-white' : 'bg-gray-100 text-gray-500';
    }
    if (isCorrect) return 'bg-emerald-500 text-white';
    if (isSelected && !isCorrect) return 'bg-red-400 text-white';
    return 'bg-gray-100 text-gray-400';
  };

  return (
    <div className="space-y-5">
      {items.map((item, qIdx) => (
        <div key={qIdx} className="bg-[#F8FAFF] rounded-[20px] border border-blue-50 p-5 md:p-6">
          <p className="font-extrabold text-gray-900 mb-4 leading-snug flex items-start gap-2">
            <span className="text-[#066EF5] font-extrabold flex-shrink-0">{qIdx + 1}.</span>
            <span>{item.question}</span>
          </p>
          <div className="space-y-2">
            {item.options.map((opt, oIdx) => (
              <button
                key={oIdx}
                onClick={() => handleSelect(qIdx, oIdx)}
                disabled={submitted || answers[qIdx] !== undefined}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-150 ${optionCardStyle(qIdx, oIdx)}`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 transition-all ${letterBadgeStyle(qIdx, oIdx)}`}>
                  {LETTERS[oIdx]}
                </span>
                <span className={`flex-1 ${submitted && answers[qIdx] === oIdx && items[qIdx].correctIndex !== oIdx ? 'line-through opacity-70' : ''}`}>
                  {opt}
                </span>
                <span className="flex-shrink-0 w-4 text-right">
                  {submitted && items[qIdx].correctIndex === oIdx && (
                    <span className="text-emerald-500 font-extrabold">✓</span>
                  )}
                  {submitted && answers[qIdx] === oIdx && items[qIdx].correctIndex !== oIdx && (
                    <span className="text-red-500 font-extrabold">✗</span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="px-6 py-3 bg-[#066EF5] text-white font-extrabold rounded-xl hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          Submit Answers
        </button>
      )}

      {submitted && (
        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg">Submitted! ✓</p>
          <p className="text-emerald-600 text-sm font-semibold">Score: {score}/{items.length}</p>
        </div>
      )}
    </div>
  );
}
