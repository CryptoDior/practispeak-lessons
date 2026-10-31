'use client';
import { useEffect, useState } from 'react';
import { MenuReading as MenuReadingData } from '@/types/lesson';

/**
 * Read the Menu — a menu (or price list) to read, then multiple-choice questions about it.
 * Turn it on for a lesson with  menuReading: { title, sections, questions }
 */
export default function MenuReading({ menu }: { menu: MenuReadingData }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  // Keep the menu on screen while the student scrolls through the questions:
  // stick it just below the site header + lesson tabs.
  const [top, setTop] = useState(124);
  useEffect(() => {
    const measure = () => {
      const header = document.querySelector('header')?.getBoundingClientRect().height ?? 64;
      const tabs = document.getElementById('lesson-tabs')?.getBoundingClientRect().height ?? 56;
      setTop(Math.round(header + tabs + 8));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  const done = Object.keys(picked).length;
  const score = menu.questions.filter((q, i) => picked[i] === q.correctIndex).length;

  return (
    <div className="space-y-6">
      {menu.intro && <p className="text-gray-600 font-semibold">{menu.intro}</p>}

      {/* Menu on the left, questions on the right (stacked on small screens) */}
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      {/* The menu card: paper look, double border, dotted price lines, notes shown as small tags */}
      <div
        className="lg:sticky rounded-[22px] p-2 shadow-[0_10px_36px_rgba(120,70,20,0.16)] bg-gradient-to-br from-[#7A4A22] via-[#5E3718] to-[#3F230E] lg:max-h-[calc(100vh-9rem)]"
        style={{ top }}
      >
        <div className="rounded-[16px] border border-[#E9C98A]/70 bg-[#FBF4E4] bg-[radial-gradient(circle_at_top,#FFFDF6,#F6EBD2)] px-6 py-7 md:px-9 md:py-9 lg:max-h-[calc(100vh-10.5rem)] lg:overflow-y-auto">
          <div className="text-center mb-7">
            <p className="text-[#B7791F] tracking-[0.5em] text-xs mb-2" aria-hidden="true">✦ ✦ ✦</p>
            <h3 className="font-playfair text-2xl md:text-[1.9rem] font-semibold text-[#3F230E] leading-tight">{menu.title}</h3>
            <div className="mt-3 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px w-12 bg-[#C99A4B]" />
              <span className="text-[#C99A4B] text-sm">❦</span>
              <span className="h-px w-12 bg-[#C99A4B]" />
            </div>
          </div>

          <div className="space-y-7">
            {menu.sections.map((s) => (
              <div key={s.heading}>
                <p className="font-playfair italic text-lg text-[#8A4B16] text-center mb-3">— {s.heading} —</p>
                <ul className="space-y-4">
                  {s.items.map((it) => {
                    const tags = it.note ? it.note.split('·').map((x) => x.trim()).filter(Boolean) : [];
                    return (
                      <li key={it.name}>
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-[#2B1A0B] text-[17px] leading-snug">{it.name}</span>
                          {it.price && <span className="flex-1 border-b-2 border-dotted border-[#C9A56B]/70 translate-y-[-3px] min-w-[1rem]" aria-hidden="true" />}
                          {it.price && <span className="font-bold text-[#8A4B16] text-[17px] whitespace-nowrap">{it.price}</span>}
                        </div>
                        {tags.length > 0 && (
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {tags.map((tg) => (
                              <span key={tg} className="text-[12.5px] italic text-[#6B4A2A] bg-[#F1E2BF]/70 border border-[#E2C88F] rounded-full px-2.5 py-0.5">
                                {tg}
                              </span>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[#C99A4B] text-xs tracking-[0.5em]" aria-hidden="true">✦ ✦ ✦</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
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
