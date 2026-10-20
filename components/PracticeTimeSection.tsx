'use client';
import { useEffect, useState } from 'react';
import { PracticeTime } from '@/types/lesson';

/**
 * Practice Time — a Teacher / Student role-play with blanks.
 * In the lesson file, write a blank as {{answer}} or {{answer1/answer2}} for several good answers.
 * The student fills the blanks out loud; "Show example answers" reveals them.
 */

function renderLine(text: string, show: boolean) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return parts.map((p, i) => {
    const m = p.match(/^\{\{([^}]+)\}\}$/);
    if (!m) return <span key={i}>{p}</span>;
    const answers = m[1].split('/').map((s) => s.trim());
    return show ? (
      <span key={i} className="inline-block px-2 mx-0.5 rounded-md bg-emerald-50 border-b-2 border-emerald-400 text-emerald-700 font-bold">
        {answers.join(' / ')}
      </span>
    ) : (
      <span key={i} className="inline-block min-w-[5.5rem] mx-1 border-b-2 border-dashed border-[#066EF5] align-baseline">&nbsp;</span>
    );
  });
}

export default function PracticeTimeSection({ practice, wordBank }: { practice: PracticeTime; wordBank: string[] }) {
  const [show, setShow] = useState(false);
  // Keep the word bank visible while scrolling: stick it just below the site header + lesson tabs.
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
  const words = practice.wordBank ?? wordBank;

  return (
    <div className="space-y-5">
      {practice.instructions && <p className="text-gray-600 font-semibold">{practice.instructions}</p>}

      {words.length > 0 && (
        <div className="sticky z-20 bg-white/95 backdrop-blur rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(6,110,245,0.08)] p-4" style={{ top }}>
          <p className="text-xs font-extrabold tracking-[0.15em] uppercase text-gray-400 mb-3">Word bank</p>
          <div className="flex flex-wrap gap-2">
            {words.map((w) => (
              <span key={w} className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#066EF5] font-bold text-sm">
                {w}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
        {practice.lines.map((line, i) => {
          const isTeacher = line.speaker === 'Teacher';
          return (
            <div
              key={i}
              className={`flex items-start gap-4 px-5 py-5 border-l-[3px] ${isTeacher ? 'border-l-blue-400 bg-white' : 'border-l-emerald-400 bg-[#F8FFFB]'} ${
                i < practice.lines.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-extrabold flex-shrink-0 ${
                  isTeacher ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                }`}
              >
                {isTeacher ? 'T' : 'S'}
              </div>
              <div>
                <span className={`font-extrabold text-base ${isTeacher ? 'text-blue-600' : 'text-emerald-600'}`}>{line.speaker}</span>
                <p className="text-gray-800 text-lg sm:text-xl leading-relaxed mt-0.5">{renderLine(line.text, show)}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="px-6 py-3 rounded-2xl bg-[#066EF5] text-white font-extrabold hover:bg-blue-600 shadow-[0_4px_16px_rgba(6,110,245,0.3)] transition-all active:scale-95"
        >
          {show ? 'Hide answers' : 'Show example answers'}
        </button>
      </div>
    </div>
  );
}
