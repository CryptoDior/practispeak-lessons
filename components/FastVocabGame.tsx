'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FASTVOCAB_SETS, FastVocabItem, FastVocabSet } from '@/data/fastVocab';
import { SiteHeader, SiteFooter, ArrowLeftIcon } from '@/components/SiteChrome';

const BATCH = 3;

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

function SceneImage({ image, scene, word }: { image: string; scene: string; word: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [image]);
  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl select-none" aria-label={word}>
        {scene}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={image} alt="" className="w-full h-full object-cover" onError={() => setFailed(true)} />;
}

export default function FastVocabGame() {
  const [set, setSet] = useState<FastVocabSet | null>(null);
  const [mode, setMode] = useState<'review' | 'play' | null>(null);
  const [pool, setPool] = useState<FastVocabItem[]>([]);
  const [batchStart, setBatchStart] = useState(0);
  const [chips, setChips] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<string | null>(null);
  const [wrong, setWrong] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const poolRef = useRef<FastVocabItem[]>([]);
  const startRef = useRef(0);
  const matchedRef = useRef<Set<string>>(new Set());
  const selectedRef = useRef<string | null>(null);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const advTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSet = (s: FastVocabSet) => {
    setSet(s);
    setMode(null);
  };

  const loadBatch = (p: FastVocabItem[], start: number) => {
    const items = p.slice(start, start + BATCH);
    matchedRef.current = new Set();
    selectedRef.current = null;
    setMatched(new Set());
    setSelected(null);
    setChips(shuffle(items.map((i) => i.word)));
  };

  const startPlay = () => {
    if (!set) return;
    const p = shuffle(set.items);
    poolRef.current = p;
    startRef.current = 0;
    setPool(p);
    setBatchStart(0);
    setScore(0);
    setDone(false);
    setWrong(null);
    setMode('play');
    loadBatch(p, 0);
  };
  const backToSets = () => {
    setSet(null);
    setMode(null);
    setDone(false);
  };

  const advance = () => {
    const next = startRef.current + BATCH;
    if (next >= poolRef.current.length) {
      setDone(true);
      return;
    }
    startRef.current = next;
    setBatchStart(next);
    loadBatch(poolRef.current, next);
  };

  const tapChip = (word: string) => {
    if (matchedRef.current.has(word)) return;
    const nv = selectedRef.current === word ? null : word;
    selectedRef.current = nv;
    setSelected(nv);
  };

  const tapImage = useCallback((item: FastVocabItem) => {
    if (matchedRef.current.has(item.word)) return;
    const sel = selectedRef.current;
    if (!sel) return;
    if (sel === item.word) {
      const nm = new Set(matchedRef.current).add(item.word);
      matchedRef.current = nm;
      setMatched(nm);
      setScore((s) => s + 10);
      speak(item.word);
      selectedRef.current = null;
      setSelected(null);
      if (nm.size >= Math.min(BATCH, poolRef.current.length - startRef.current)) {
        if (advTimer.current) clearTimeout(advTimer.current);
        advTimer.current = setTimeout(advance, 550);
      }
    } else {
      setWrong(item.word);
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      wrongTimer.current = setTimeout(() => setWrong(null), 400);
      selectedRef.current = null;
      setSelected(null);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      if (advTimer.current) clearTimeout(advTimer.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  /* ---------- Set picker ---------- */
  if (!set) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Game</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">Fast Vocab</h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Match each word to the right picture. Tap a word, then tap its picture — clear the board to
            move on to the next set.
          </p>
        </div>
        <p className="text-center text-sm font-semibold text-slate-500 mb-4">Choose a topic</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {FASTVOCAB_SETS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => openSet(s)}
              className="group text-left bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all p-5 flex items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              <span className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-2xl">
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

  /* ---------- Menu ---------- */
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
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
  if (done) {
    const max = pool.length * 10;
    return (
      <Shell>
        <div className="max-w-md mx-auto text-center bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-10">
          <div className="text-5xl mb-3">⚡</div>
          <h2 className="font-playfair text-3xl font-semibold text-slate-900 mb-2">All matched!</h2>
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
  const batch = pool.slice(batchStart, batchStart + BATCH);
  const progress = batchStart + matched.size;
  return (
    <Shell>
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={() => setMode(null)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon className="w-4 h-4" /> Menu
        </button>
        <span className="text-sm font-medium text-slate-500">
          {progress} / {pool.length}
        </span>
        <span className="text-sm font-bold text-blue-600">{score} pts</span>
      </div>

      {/* Picture circles */}
      <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-8">
        {batch.map((item) => {
          const isMatched = matched.has(item.word);
          const isWrong = wrong === item.word;
          return (
            <button
              key={item.word}
              type="button"
              onClick={() => tapImage(item)}
              disabled={isMatched}
              aria-label={`Picture ${batch.indexOf(item) + 1}`}
              className={`aspect-square rounded-full overflow-hidden bg-white border-4 transition-all ${
                isMatched
                  ? 'border-emerald-400 ring-4 ring-emerald-100 opacity-60'
                  : isWrong
                  ? 'border-red-400 animate-shake'
                  : selected
                  ? 'border-blue-300 shadow-[0_4px_14px_rgba(15,23,42,0.12)] hover:border-blue-400 cursor-pointer'
                  : 'border-white shadow-[0_4px_14px_rgba(15,23,42,0.12)] cursor-pointer'
              }`}
            >
              <SceneImage image={item.image} scene={item.scene} word={item.word} />
            </button>
          );
        })}
      </div>

      {/* Word chips */}
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {chips.map((word) => {
          const isMatched = matched.has(word);
          const isSel = selected === word;
          return (
            <button
              key={word}
              type="button"
              onClick={() => tapChip(word)}
              disabled={isMatched}
              className={`h-14 rounded-full font-semibold text-[15px] sm:text-base capitalize border-2 transition-all ${
                isMatched
                  ? 'opacity-0 pointer-events-none'
                  : isSel
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md cursor-pointer'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 active:scale-95 cursor-pointer'
              }`}
            >
              {word}
            </button>
          );
        })}
      </div>

      <p className="text-center text-sm text-slate-400 mt-6">Tap a word, then tap its picture.</p>
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
