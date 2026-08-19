'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { QUESTION_TOPICS, allQuestions } from '@/data/questions';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';

function SpeakerIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" strokeLinejoin="round" />
      <path d="M15.5 9.2a4 4 0 010 5.6M18 6.8a7.5 7.5 0 010 10.4" strokeLinecap="round" />
    </svg>
  );
}

function ShuffleIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ALL = 'all';

export default function QuestionGenerator() {
  const [topic, setTopic] = useState<string>(ALL);
  const [question, setQuestion] = useState<string>('Pick a topic, then tap the button for a question to talk about.');
  const [speaking, setSpeaking] = useState(false);
  const lastRef = useRef<string | null>(null);

  const pool = useMemo(() => {
    if (topic === ALL) return allQuestions().map((q) => q.text);
    return QUESTION_TOPICS.find((t) => t.id === topic)?.questions ?? [];
  }, [topic]);

  const next = useCallback(() => {
    if (pool.length === 0) return;
    let pick = pool[Math.floor(Math.random() * pool.length)];
    // avoid repeating the same question twice in a row
    if (pool.length > 1) {
      let guard = 0;
      while (pick === lastRef.current && guard < 8) {
        pick = pool[Math.floor(Math.random() * pool.length)];
        guard++;
      }
    }
    lastRef.current = pick;
    setQuestion(pick);
  }, [pool]);

  // First real question on mount + whenever the topic changes.
  useEffect(() => {
    next();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  const listen = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(question);
    u.lang = 'en-GB';
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F8FB] font-poppins text-slate-900">
      <SiteHeader active="Questions" />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        {/* ---------- Intro ---------- */}
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">
            Speaking Practice
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">
            Conversation Questions
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Hundreds of questions to get you talking. Pick a topic, generate a question, and practise
            your English out loud — on your own or with a partner.
          </p>
        </div>

        {/* ---------- Topic pills ---------- */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[{ id: ALL, label: 'All Topics' }, ...QUESTION_TOPICS].map((t) => {
            const active = topic === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTopic(t.id)}
                aria-pressed={active}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
                  active
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* ---------- Question card ---------- */}
        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] px-6 sm:px-12 py-12 sm:py-16 text-center overflow-hidden">
          <svg
            viewBox="0 0 48 48"
            className="w-12 h-12 mx-auto mb-6 text-blue-100"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 24c0-7 4-13 11-15l1.4 3.2C15.6 14.4 13.4 17.6 13 21c.6-.2 1.4-.4 2.2-.4 3.4 0 6 2.6 6 6s-2.8 6.2-6.2 6.2C11 32.8 8 29 8 24zm18.6 0c0-7 4-13 11-15L39 12.2c-4.8 1.6-7 4.8-7.4 8.2.6-.2 1.4-.4 2.2-.4 3.4 0 6 2.6 6 6s-2.8 6.2-6.2 6.2c-4.2 0-7.2-3.8-7.2-8.6z" />
          </svg>

          <p
            key={question}
            aria-live="polite"
            className="font-playfair text-2xl sm:text-[32px] leading-snug text-slate-900 max-w-2xl mx-auto animate-q-in"
          >
            {question}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 active:scale-95 shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 w-full sm:w-auto"
            >
              <ShuffleIcon className="w-5 h-5" />
              New Question
            </button>
            <button
              type="button"
              onClick={listen}
              aria-label="Listen to the question"
              className={`inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border text-[15px] font-semibold transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 w-full sm:w-auto ${
                speaking
                  ? 'border-blue-300 bg-blue-50 text-blue-700 animate-pulse'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              <SpeakerIcon className="w-5 h-5" />
              Listen
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-6">
          Tip: try to answer in full sentences, and ask a follow-up question back.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
