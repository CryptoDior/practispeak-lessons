'use client';
import { useState } from 'react';
import { ReadingPassage, ProductionPrompt } from '@/types/lesson';

function highlightText(text: string, terms: string[]) {
  if (!terms.length) return text;
  const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part)
      ? <mark key={i} className="bg-[#EEF3FF] text-[#066EF5] font-bold rounded px-0.5 not-italic">{part}</mark>
      : part
  );
}

export default function ReadingPassageSection({
  passage,
  prompts,
}: {
  passage: ReadingPassage;
  prompts?: ProductionPrompt[];
}) {
  const [activePrompt, setActivePrompt] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">

      {/* Reading card */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-50">
          <h3 className="text-base font-extrabold text-gray-900">{passage.title}</h3>
          <p className="text-sm text-gray-400 font-medium mt-0.5">{passage.context}</p>
        </div>
        <div className="px-6 py-6">
          {/* Key terms legend */}
          <div className="flex flex-wrap gap-2 mb-5">
            {passage.highlightTerms.map(term => (
              <span key={term} className="bg-[#EEF3FF] text-[#066EF5] font-bold text-xs px-2.5 py-1 rounded-full">
                {term}
              </span>
            ))}
          </div>

          {/* Passage */}
          <blockquote className="text-gray-700 text-[15px] leading-relaxed italic border-l-4 border-[#066EF5] pl-4 bg-gray-50 rounded-r-xl py-4 pr-4">
            {highlightText(passage.text, passage.highlightTerms)}
          </blockquote>
        </div>
      </div>

      {/* Comprehension questions */}
      {passage.questions.length > 0 && (
        <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] p-6">
          <h3 className="text-base font-extrabold text-gray-900 mb-4">Comprehension Questions</h3>
          <ol className="flex flex-col gap-4">
            {passage.questions.map((q, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 bg-[#066EF5] text-white rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 font-medium leading-relaxed pt-1">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Production practice */}
      {prompts && prompts.length > 0 && (
        <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] p-6">
          <h3 className="text-base font-extrabold text-gray-900 mb-1">Production Practice</h3>
          <p className="text-sm text-gray-400 font-medium mb-4">Write 2–3 sentences using today&apos;s vocabulary. Choose a prompt:</p>
          <div className="flex flex-col gap-3">
            {prompts.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePrompt(activePrompt === i ? null : i)}
                className={`w-full text-left rounded-xl px-4 py-3.5 border transition-all ${
                  activePrompt === i
                    ? 'border-[#066EF5] bg-[#EEF3FF]'
                    : 'border-gray-200 bg-gray-50 hover:border-[#066EF5]/40'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{p.icon}</span>
                  <span className="text-xs font-extrabold text-[#066EF5] uppercase tracking-wide">
                    Option {p.label}
                  </span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{p.prompt}</p>
              </button>
            ))}
          </div>
          {activePrompt !== null && (
            <div className="mt-4">
              <textarea
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#066EF5] resize-none"
                rows={4}
                placeholder="Write your answer here..."
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
