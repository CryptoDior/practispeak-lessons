'use client';
import { useState } from 'react';
import { MenuReading as MenuReadingData } from '@/types/lesson';

/**
 * Read the Menu — a menu (or price list) to read, then multiple-choice questions about it.
 * Turn it on for a lesson with  menuReading: { title, sections, questions }
 */
export default function MenuReading({ menu }: { menu: MenuReadingData }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const done = Object.keys(picked).length;
  const score = menu.questions.filter((q, i) => picked[i] === q.correctIndex).length;

  return (
    <div className="space-y-6">
      {menu.intro && <p className="text-gray-600 font-semibold">{menu.intro}</p>}

      {/* The menu card */}
      <div className="max-w-xl mx-auto bg-[#FFFDF8] rounded-[20px] border border-amber-100 shadow-[0_2px_16px_rgba(120,80,20,0.08)] p-6 md:p-8">
        <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-center text-slate-900 mb-6">{menu.title}</h3>
        <div className="space-y-6">
          {menu.sections.map((s) => (
            <div key={s.heading}>
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-amber-700 border-b border-amber-200 pb-1.5 mb-3">{s.heading}</p>
              <ul className="space-y-2.5">
                {s.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-3">
                    <div className="flex-1 min-w-0">
                      <span className="font-bold text-slate-900">{it.name}</span>
                      {it.note && <span className="block text-sm text-slate-500 italic">{it.note}</span>}
                    </div>
                    <span className="flex-shrink-0 font-bold text-slate-800">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        {menu.questions.map((q, i) => {
          const choice = picked[i];
          return (
            <div key={q.question} className="bg-white rounded-[20px] border border-gray-100 shadow-[0_2px_16px_rgba(6,110,245,0.06)] p-5 md:p-6">
              <p className="font-bold text-gray-900 mb-4">
                <span className="text-[#066EF5] mr-2">{i + 1}.</span>
                {q.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {q.options.map((opt, o) => {
                  const isPicked = choice === o;
                  const isRight = o === q.correctIndex;
                  const style =
                    choice === undefined
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
                      disabled={choice !== undefined}
                      onClick={() => setPicked((p) => ({ ...p, [i]: o }))}
                      className={`px-4 py-3 rounded-full border-2 text-base font-bold transition-all ${style}`}
                    >
                      {opt}
                      {choice !== undefined && isRight && <span className="ml-2">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {done === menu.questions.length && (
        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg">
            {score} / {menu.questions.length} correct{score === menu.questions.length ? ' — perfect! 🎉' : ''}
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
