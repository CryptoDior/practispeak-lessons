'use client';
import { GrammarFocus } from '@/types/lesson';

export default function GrammarFocusSection({ grammar }: { grammar: GrammarFocus }) {
  const isStyleB = !!grammar.singlePattern;
  const useArrows = grammar.arrowStyle ?? isStyleB;

  return (
    <div className="mt-8 mb-2">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[#EEF3FF] rounded-xl flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#066EF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 leading-tight">Grammar focus</h3>
        </div>
      </div>

      {/* Card */}
      <div className={`bg-white rounded-[20px] overflow-hidden ${
        isStyleB
          ? 'border-l-4 border-[#066EF5] shadow-[0_2px_16px_rgba(6,110,245,0.06)]'
          : 'border border-blue-100/60 shadow-[0_2px_16px_rgba(6,110,245,0.06)]'
      }`}>
        <div className="p-6">

          {/* Focus title + description */}
          <p className="font-extrabold text-[#066EF5] text-base mb-1">{grammar.focusTitle}</p>
          <p className="text-sm text-gray-500 font-medium mb-4">{grammar.description}</p>

          {/* ── Style A: two pattern rows ── */}
          {!isStyleB && grammar.positivePattern && grammar.negativePattern && (
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex items-center gap-3 bg-[#F0F9FF] border border-blue-100 rounded-xl px-4 py-3">
                <div className="w-7 h-7 bg-[#066EF5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2.5,8 6,11.5 13.5,4"/>
                  </svg>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 text-sm font-bold text-[#066EF5]">
                  <span>{grammar.positivePattern}</span>
                  <span className="text-gray-300">→</span>
                  <span>{grammar.positiveExample}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                <div className="w-7 h-7 bg-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="3" y1="3" x2="13" y2="13"/><line x1="13" y1="3" x2="3" y2="13"/>
                  </svg>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 text-sm font-bold text-red-500">
                  <span>{grammar.negativePattern}</span>
                  <span className="text-gray-300">→</span>
                  <span>{grammar.negativeExample}</span>
                </div>
              </div>
            </div>
          )}

          {/* ── Style B: single pattern row ── */}
          {isStyleB && grammar.singlePattern && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 mb-5 text-center">
              <span className="text-sm font-extrabold text-[#066EF5]">{grammar.singlePattern}</span>
              <span className="text-sm text-gray-400 font-bold mx-3">→</span>
              <span className="text-sm font-extrabold text-[#066EF5]">{grammar.singlePatternExample}</span>
            </div>
          )}

          {/* Divider (Style A only) */}
          {!isStyleB && <div className="border-t border-gray-100 mb-4" />}

          {/* Positive examples */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold tracking-widest text-gray-700 uppercase">Positive</span>
              {!isStyleB && (
                <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="#066EF5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2.5,8 6,11.5 13.5,4"/>
                </svg>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              {grammar.positiveExamples.map((ex, i) => (
                <div key={i} className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-bold text-[#066EF5]">{ex.sentence}</span>
                  {useArrows ? (
                    <>
                      <span className="text-sm text-gray-400">→</span>
                      <span className="text-sm text-gray-500 font-medium">{ex.note}</span>
                    </>
                  ) : (
                    <span className="text-xs text-gray-400 font-medium italic">{ex.note}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Negative examples */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold tracking-widest text-gray-700 uppercase">Negative</span>
              {grammar.negativeSubtitle && (
                <span className="text-xs text-gray-400 font-semibold">{grammar.negativeSubtitle}</span>
              )}
              {!isStyleB && (
                <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="3" x2="13" y2="13"/><line x1="13" y1="3" x2="3" y2="13"/>
                </svg>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              {grammar.negativeExamples.map((ex, i) => (
                <div key={i} className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-bold text-red-500">{ex.sentence}</span>
                  {useArrows ? (
                    <>
                      <span className="text-sm text-gray-400">→</span>
                      <span className="text-sm text-gray-500 font-medium">{ex.note}</span>
                    </>
                  ) : (
                    <span className="text-xs text-gray-400 font-medium italic">{ex.note}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
