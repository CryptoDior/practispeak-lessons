'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SPELL_SETS, SpellSet } from '@/data/spellingBee';
import { SiteHeader, SiteFooter, ArrowLeftIcon } from '@/components/SiteChrome';

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function SpeakerIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" strokeLinejoin="round" />
      <path d="M15.5 9.2a4 4 0 010 5.6M18 6.8a7.5 7.5 0 010 10.4" strokeLinecap="round" />
    </svg>
  );
}

function SceneImage({ image, scene, word }: { image: string; scene: string; word: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [image]);
  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center text-6xl sm:text-7xl select-none" aria-label={word}>
        {scene}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={image} alt="" className="w-full h-full object-cover" onError={() => setFailed(true)} />;
}

const KEY_ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export default function SpellingBeeGame() {
  const [set, setSet] = useState<SpellSet | null>(null);
  const [mode, setMode] = useState<'review' | 'play' | null>(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [status, setStatus] = useState<'spelling' | 'correct'>('spelling');
  const [wrongKey, setWrongKey] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typedRef = useRef('');

  const it = set?.items[index];
  const word = it?.word ?? '';

  const loadItem = useCallback(() => {
    typedRef.current = '';
    setTyped('');
    setStatus('spelling');
    setWrongKey(null);
  }, []);

  const openSet = (s: SpellSet) => {
    setSet(s);
    setMode(null);
    setFinished(false);
  };
  const startPlay = () => {
    if (!set) return;
    setMode('play');
    setIndex(0);
    setScore(0);
    setFinished(false);
    typedRef.current = '';
    setTyped('');
    setStatus('spelling');
    setWrongKey(null);
  };
  const backToSets = () => {
    setSet(null);
    setMode(null);
    setFinished(false);
  };

  const inputLetter = useCallback(
    (chRaw: string) => {
      if (status !== 'spelling' || !word) return;
      const cur = typedRef.current;
      if (cur.length >= word.length) return;
      const ch = chRaw.toLowerCase();
      if (ch === word[cur.length]) {
        const nt = cur + ch;
        typedRef.current = nt;
        setTyped(nt);
        if (nt.length === word.length) {
          setStatus('correct');
          setScore((s) => s + 10);
          speak(word);
        }
      } else {
        setWrongKey(ch);
        if (wrongTimer.current) clearTimeout(wrongTimer.current);
        wrongTimer.current = setTimeout(() => setWrongKey(null), 350);
      }
    },
    [status, word]
  );

  // Physical keyboard support while playing
  useEffect(() => {
    if (mode !== 'play' || status !== 'spelling') return;
    const onKey = (e: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(e.key)) inputLetter(e.key);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, status, inputLetter]);

  useEffect(() => {
    return () => {
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  const revealHint = () => {
    if (status !== 'spelling' || !word) return;
    inputLetter(word[typed.length]);
  };

  const nextItem = () => {
    if (!set) return;
    if (index + 1 >= set.items.length) {
      setFinished(true);
      return;
    }
    setIndex(index + 1);
    loadItem();
  };

  /* ---------- Set picker ---------- */
  if (!set) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Game</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">Spelling Bee</h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Look at the picture, then spell the word. Type on your keyboard or tap the letters below.
          </p>
        </div>
        <p className="text-center text-sm font-semibold text-slate-500 mb-4">Choose a topic</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {SPELL_SETS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => openSet(s)}
              className="group text-left bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all p-5 flex items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              <span className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-2xl">
                {s.items[0].scene}
              </span>
              <span className="min-w-0">
                <span className="block font-playfair text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {s.label}
                </span>
                <span className="block text-sm text-slate-500">{s.blurb}</span>
                <span className="block text-xs text-slate-400 mt-0.5">{s.items.length} words</span>
              </span>
            </button>
          ))}
        </div>
      </Shell>
    );
  }

  /* ---------- Menu: Review or Play ---------- */
  if (mode === null) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Topic</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">{set.label}</h1>
          <p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">{set.blurb}</p>
        </div>
        <div className="max-w-xs mx-auto flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setMode('review')}
            className="py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 text-[15px] font-semibold hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            📖 Review words first
          </button>
          <button
            type="button"
            onClick={startPlay}
            className="py-3.5 rounded-2xl bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 active:scale-95 shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            ▶ Play
          </button>
        </div>
      </Shell>
    );
  }

  /* ---------- Review list ---------- */
  if (mode === 'review') {
    return (
      <Shell>
        <div className="text-center mb-6">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-2">
            Review — {set.label}
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">Learn the words</h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Look at each picture and read the word. Tap the speaker to hear it, then play!
          </p>
        </div>
        <div className="space-y-3">
          {set.items.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] p-3"
            >
              <div className="w-28 sm:w-36 aspect-video rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                <SceneImage image={s.image} scene={s.scene} word={s.word} />
              </div>
              <p className="flex-1 font-playfair text-xl sm:text-2xl text-slate-900 capitalize">{s.word}</p>
              <button
                type="button"
                onClick={() => speak(s.word)}
                aria-label={`Listen to: ${s.word}`}
                className="w-11 h-11 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer flex-shrink-0"
              >
                <SpeakerIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => setMode(null)}
            className="h-12 px-6 rounded-full border border-slate-200 bg-white text-slate-600 text-[15px] font-semibold hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={startPlay}
            className="h-12 px-8 rounded-full bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 active:scale-95 shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all cursor-pointer"
          >
            Play →
          </button>
        </div>
      </Shell>
    );
  }

  /* ---------- End screen ---------- */
  if (finished) {
    const max = set.items.length * 10;
    return (
      <Shell>
        <div className="max-w-md mx-auto text-center bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-10">
          <div className="text-5xl mb-3">🐝</div>
          <h2 className="font-playfair text-3xl font-semibold text-slate-900 mb-2">Well spelled!</h2>
          <p className="text-slate-500 mb-1">You finished {set.label}.</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            {score} <span className="text-base font-medium text-slate-400">/ {max} points</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={startPlay}
              className="h-12 px-6 rounded-full bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
            >
              Play again
            </button>
            <button
              type="button"
              onClick={backToSets}
              className="h-12 px-6 rounded-full border border-slate-200 bg-white text-slate-600 text-[15px] font-semibold hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer"
            >
              Choose another topic
            </button>
          </div>
        </div>
      </Shell>
    );
  }

  /* ---------- Playing ---------- */
  const total = set.items.length;
  return (
    <Shell>
      <div className="flex items-center justify-between mb-5">
        <button
          type="button"
          onClick={() => setMode(null)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon className="w-4 h-4" /> Menu
        </button>
        <span className="text-sm font-medium text-slate-500">
          {index + 1} / {total}
        </span>
        <span className="text-sm font-bold text-blue-600">{score} pts</span>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden">
        {/* Scene (16:9) */}
        <div className="bg-gradient-to-br from-[#FFF7E6] to-[#FFEFC7] p-4 sm:p-6">
          <div className="w-full max-w-md mx-auto aspect-video rounded-2xl overflow-hidden bg-white border border-white shadow-sm">
            {it && <SceneImage image={it.image} scene={it.scene} word={it.word} />}
          </div>
        </div>

        {/* Word blanks */}
        <div className="px-4 sm:px-8 pt-6">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {word.split('').map((letter, i) => {
              const filled = i < typed.length;
              const current = i === typed.length && status === 'spelling';
              return (
                <span
                  key={i}
                  className={`w-9 h-12 sm:w-11 sm:h-14 rounded-lg flex items-center justify-center text-xl sm:text-2xl font-bold uppercase transition-colors ${
                    filled
                      ? status === 'correct'
                        ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-300'
                        : 'bg-blue-50 text-blue-700 border-2 border-blue-300'
                      : current
                      ? 'bg-white border-2 border-blue-400'
                      : 'bg-slate-50 border-2 border-slate-200'
                  }`}
                >
                  {filled ? letter : ''}
                </span>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={() => speak(word)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <SpeakerIcon className="w-4 h-4" /> Hear word
            </button>
            {status === 'spelling' && (
              <button
                type="button"
                onClick={revealHint}
                className="text-sm font-semibold text-slate-500 hover:text-blue-600 cursor-pointer"
              >
                💡 Hint
              </button>
            )}
          </div>
        </div>

        {/* Keyboard */}
        <div className="px-2 sm:px-6 py-6">
          {status === 'correct' ? (
            <div className="text-center">
              <p className="text-emerald-600 font-bold text-lg mb-3">Correct! 🎉</p>
              <button
                type="button"
                onClick={nextItem}
                className="h-11 px-7 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
              >
                {index + 1 >= total ? 'Finish →' : 'Next →'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1.5">
              {KEY_ROWS.map((row) => (
                <div key={row} className="flex gap-1 sm:gap-1.5 justify-center">
                  {row.split('').map((k) => {
                    const isWrong = wrongKey === k.toLowerCase();
                    return (
                      <button
                        key={k}
                        type="button"
                        onClick={() => inputLetter(k)}
                        className={`w-[8.5vw] max-w-[2.75rem] h-11 sm:h-12 rounded-lg font-semibold text-sm sm:text-base border-2 transition-all cursor-pointer active:scale-95 ${
                          isWrong
                            ? 'bg-red-50 border-red-300 text-red-500 animate-shake'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600'
                        }`}
                      >
                        {k}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-poppins text-slate-900">
      <SiteHeader active="Games" />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-5"
        >
          <ArrowLeftIcon className="w-4 h-4" /> All games
        </Link>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
