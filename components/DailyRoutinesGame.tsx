'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ROUTINE_SETS, RoutineItem, RoutineSet } from '@/data/dailyRoutines';
import { SiteHeader, SiteFooter, ArrowLeftIcon } from '@/components/SiteChrome';

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.95;
  window.speechSynthesis.speak(u);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function SpeakerIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" strokeLinejoin="round" />
      <path d="M15.5 9.2a4 4 0 010 5.6M18 6.8a7.5 7.5 0 010 10.4" strokeLinecap="round" />
    </svg>
  );
}

function CircleImage({ image, scene, phrase }: { image: string; scene: string; phrase: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [image]);
  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl select-none" aria-label={phrase}>
        {scene}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={image} alt="" className="w-full h-full object-cover" onError={() => setFailed(true)} />;
}

export default function DailyRoutinesGame() {
  const [set, setSet] = useState<RoutineSet | null>(null);
  const [mode, setMode] = useState<'review' | 'play' | null>(null);
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState<RoutineItem[]>([]);
  const [status, setStatus] = useState<'choosing' | 'correct'>('choosing');
  const [wrongPhrase, setWrongPhrase] = useState<string | null>(null);
  const [showText, setShowText] = useState(true);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const target = set?.items[index];

  const buildRound = useCallback((s: RoutineSet, i: number, autoSpeak: boolean) => {
    const tgt = s.items[i];
    const distractors = shuffle(s.items.filter((x) => x.phrase !== tgt.phrase)).slice(0, 2);
    setOptions(shuffle([tgt, ...distractors]));
    setStatus('choosing');
    setWrongPhrase(null);
    if (autoSpeak) setTimeout(() => speak(tgt.phrase), 250);
  }, []);

  const openSet = (s: RoutineSet) => {
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
    buildRound(set, 0, true);
  };
  const backToSets = () => {
    setSet(null);
    setMode(null);
    setFinished(false);
  };

  const pick = (choice: RoutineItem) => {
    if (status !== 'choosing' || !target) return;
    if (choice.phrase === target.phrase) {
      setStatus('correct');
      setScore((s) => s + 10);
      speak(target.phrase);
    } else {
      setWrongPhrase(choice.phrase);
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      wrongTimer.current = setTimeout(() => setWrongPhrase(null), 500);
    }
  };

  const nextItem = () => {
    if (!set) return;
    if (index + 1 >= set.items.length) {
      setFinished(true);
      return;
    }
    const ni = index + 1;
    setIndex(ni);
    buildRound(set, ni, true);
  };

  useEffect(() => {
    return () => {
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  /* ---------- Set picker ---------- */
  if (!set) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Game</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">Daily Routines</h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Listen to the phrase, then tap the picture that matches. Tap <span className="font-semibold">T</span> to
            hide the words and play by listening.
          </p>
        </div>
        <p className="text-center text-sm font-semibold text-slate-500 mb-4">Choose a time of day</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {ROUTINE_SETS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => openSet(s)}
              className="group text-left bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all p-5 flex items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              <span className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-2xl">
                {s.items[0].scene}
              </span>
              <span className="min-w-0">
                <span className="block font-playfair text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {s.label}
                </span>
                <span className="block text-sm text-slate-500">{s.blurb}</span>
                <span className="block text-xs text-slate-400 mt-0.5">{s.items.length} phrases</span>
              </span>
            </button>
          ))}
        </div>
      </Shell>
    );
  }

  /* ---------- Menu ---------- */
  if (mode === null) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Set</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">{set.label}</h1>
          <p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">{set.blurb}</p>
        </div>
        <div className="max-w-xs mx-auto flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setMode('review')}
            className="py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 text-[15px] font-semibold hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            📖 Review phrases first
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
          <h1 className="font-playfair text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">Learn the phrases</h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Look at each picture and read the phrase. Tap the speaker to hear it, then play!
          </p>
        </div>
        <div className="space-y-3">
          {set.items.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] p-3"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                <CircleImage image={s.image} scene={s.scene} phrase={s.phrase} />
              </div>
              <p className="flex-1 font-playfair text-xl sm:text-2xl text-slate-900">{s.phrase}</p>
              <button
                type="button"
                onClick={() => speak(s.phrase)}
                aria-label={`Listen to: ${s.phrase}`}
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
          <div className="text-5xl mb-3">🌅</div>
          <h2 className="font-playfair text-3xl font-semibold text-slate-900 mb-2">All done!</h2>
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
              Choose another set
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

      <div className="bg-gradient-to-b from-[#FFF7E6] to-[#FFEFC7] rounded-3xl border border-amber-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-5 sm:p-8">
        {/* Three circular options */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-6">
          {options.map((opt) => {
            const isTarget = target && opt.phrase === target.phrase;
            const isWrong = wrongPhrase === opt.phrase;
            const done = status === 'correct';
            return (
              <button
                key={opt.phrase}
                type="button"
                onClick={() => pick(opt)}
                disabled={done}
                aria-label={`Choose picture ${options.indexOf(opt) + 1}`}
                className={`aspect-square rounded-full overflow-hidden bg-white border-4 transition-all cursor-pointer ${
                  done && isTarget
                    ? 'border-emerald-400 ring-4 ring-emerald-100 scale-105'
                    : isWrong
                    ? 'border-red-400 animate-shake'
                    : 'border-white shadow-[0_4px_14px_rgba(15,23,42,0.12)] hover:border-blue-300 hover:-translate-y-0.5 active:scale-95'
                }`}
              >
                <CircleImage image={opt.image} scene={opt.scene} phrase={opt.phrase} />
              </button>
            );
          })}
        </div>

        {/* Prompt pill: T | phrase | speaker */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setShowText((s) => !s)}
            aria-label="Show or hide the phrase"
            aria-pressed={!showText}
            className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-lg transition-all cursor-pointer flex-shrink-0 ${
              !showText
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            T
          </button>

          <div className="flex-1 max-w-sm h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center px-4">
            {showText ? (
              <span
                className={`font-playfair text-xl sm:text-2xl ${
                  status === 'correct' ? 'text-emerald-600' : 'text-slate-900'
                }`}
              >
                {target?.phrase}
              </span>
            ) : (
              <span className="text-slate-300 text-2xl tracking-[0.4em] select-none" aria-hidden="true">
                • • •
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => target && speak(target.phrase)}
            aria-label="Listen to the phrase"
            className="w-12 h-12 rounded-full border border-slate-200 bg-white text-blue-600 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer flex-shrink-0"
          >
            <SpeakerIcon className="w-5 h-5" />
          </button>
        </div>

        {status === 'correct' && (
          <div className="text-center mt-6">
            <p className="text-emerald-600 font-bold text-lg mb-3">Correct! 🎉</p>
            <button
              type="button"
              onClick={nextItem}
              className="h-11 px-7 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
            >
              {index + 1 >= total ? 'Finish →' : 'Next →'}
            </button>
          </div>
        )}
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
