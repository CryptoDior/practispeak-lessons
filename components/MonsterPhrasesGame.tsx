'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { MONSTER_SETS, MonsterSet } from '@/data/monsterPhrases';
import { SiteHeader, SiteFooter, ArrowLeftIcon } from '@/components/SiteChrome';

type Mood = 'idle' | 'happy' | 'sad';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.95;
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

/* ---------- Monster character ---------- */
function Monster({ mood }: { mood: Mood }) {
  const bob = mood === 'happy' ? 'animate-bounce' : '';
  return (
    <svg viewBox="0 0 120 120" className={`w-24 h-24 sm:w-28 sm:h-28 ${bob}`} aria-hidden="true">
      <defs>
        <linearGradient id="mp-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* body */}
      <path
        d="M20 62c0-22 18-40 40-40s40 18 40 40v14c0 14-11 24-24 22-3 3-9 3-12 0-3 3-9 3-12 0-11 2-24-8-24-22V62z"
        fill="url(#mp-body)"
      />
      {/* horns */}
      <path d="M32 30l-6-12 16 8z" fill="#4F46E5" />
      <path d="M88 30l6-12-16 8z" fill="#4F46E5" />
      {/* eyes */}
      {mood === 'sad' ? (
        <>
          <path d="M40 52l12 4M80 52l-12 4" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="46" cy="58" r="5" fill="#fff" />
          <circle cx="74" cy="58" r="5" fill="#fff" />
          <circle cx="46" cy="59" r="2.5" fill="#312E81" />
          <circle cx="74" cy="59" r="2.5" fill="#312E81" />
        </>
      ) : (
        <>
          <circle cx="46" cy="54" r="9" fill="#fff" />
          <circle cx="74" cy="54" r="9" fill="#fff" />
          <circle cx={mood === 'happy' ? 48 : 46} cy="55" r="4" fill="#312E81" />
          <circle cx={mood === 'happy' ? 76 : 74} cy="55" r="4" fill="#312E81" />
        </>
      )}
      {/* mouth */}
      {mood === 'happy' ? (
        <path d="M48 74c4 6 20 6 24 0" stroke="#fff" strokeWidth="4" fill="#312E81" strokeLinecap="round" />
      ) : mood === 'sad' ? (
        <path d="M50 82c3-6 17-6 20 0" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M50 78h20" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
      )}
    </svg>
  );
}

function SceneImage({ image, scene, sentence }: { image: string; scene: string; sentence: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [image]);
  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center text-6xl sm:text-7xl select-none" aria-label={sentence}>
        {scene}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt=""
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

/* ---------- Game ---------- */
interface Tile {
  id: number;
  word: string;
}

export default function MonsterPhrasesGame() {
  const [set, setSet] = useState<MonsterSet | null>(null);
  const [mode, setMode] = useState<'review' | 'play' | null>(null);
  const [index, setIndex] = useState(0);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [placed, setPlaced] = useState<number[]>([]); // tile ids in order
  const [usedIds, setUsedIds] = useState<Set<number>>(new Set());
  const [status, setStatus] = useState<'building' | 'correct' | 'wrong'>('building');
  const [mood, setMood] = useState<Mood>('idle');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const item = set?.items[index];

  const loadItem = useCallback((s: MonsterSet, i: number) => {
    const words = s.items[i].sentence.split(' ');
    setTiles(shuffle(words.map((word, id) => ({ id, word }))));
    setPlaced([]);
    setUsedIds(new Set());
    setStatus('building');
    setMood('idle');
  }, []);

  const openSet = (s: MonsterSet) => {
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
    loadItem(set, 0);
  };
  const backToSets = () => {
    setSet(null);
    setMode(null);
    setFinished(false);
  };

  const placedWords = useMemo(
    () => placed.map((id) => tiles.find((t) => t.id === id)?.word ?? ''),
    [placed, tiles]
  );

  // Check when the tray is full
  useEffect(() => {
    if (!item || status !== 'building') return;
    const total = item.sentence.split(' ').length;
    if (placed.length !== total) return;
    const attempt = placedWords.join(' ');
    if (attempt === item.sentence) {
      setStatus('correct');
      setMood('happy');
      setScore((s) => s + 10);
      speak(item.sentence);
    } else {
      setStatus('wrong');
      setMood('sad');
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      wrongTimer.current = setTimeout(() => {
        // return tiles to the bank so they can retry
        setPlaced([]);
        setUsedIds(new Set());
        setStatus('building');
        setMood('idle');
      }, 900);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placed.length]);

  useEffect(() => {
    return () => {
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  const tapTile = (t: Tile) => {
    if (status !== 'building' || usedIds.has(t.id)) return;
    setPlaced((p) => [...p, t.id]);
    setUsedIds((u) => new Set(u).add(t.id));
  };

  const removePlaced = (posIdx: number) => {
    if (status !== 'building') return;
    const id = placed[posIdx];
    setPlaced((p) => p.filter((_, i) => i !== posIdx));
    setUsedIds((u) => {
      const n = new Set(u);
      n.delete(id);
      return n;
    });
  };

  const clearTray = () => {
    if (status !== 'building') return;
    setPlaced([]);
    setUsedIds(new Set());
  };

  const nextItem = () => {
    if (!set) return;
    if (index + 1 >= set.items.length) {
      setFinished(true);
      setMood('happy');
      return;
    }
    const ni = index + 1;
    setIndex(ni);
    loadItem(set, ni);
  };

  /* ---------- Set picker ---------- */
  if (!set) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Game</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">Monster Phrases</h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Look at the picture, then tap the words in the right order to build the sentence. Keep the
            monster happy!
          </p>
        </div>
        <p className="text-center text-sm font-semibold text-slate-500 mb-4">Choose a grammar set</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {MONSTER_SETS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => openSet(s)}
              className="group text-left bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all p-5 flex items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              <span className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <Monster mood="idle" />
              </span>
              <span className="min-w-0">
                <span className="block font-playfair text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {s.label}
                </span>
                <span className="block text-sm text-slate-500">{s.blurb}</span>
                <span className="block text-xs text-slate-400 mt-0.5">{s.items.length} sentences</span>
              </span>
            </button>
          ))}
        </div>
      </Shell>
    );
  }

  /* ---------- Set menu: Review or Play ---------- */
  if (mode === null) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">
            Grammar Set
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">
            {set.label}
          </h1>
          <p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">{set.blurb}</p>
        </div>
        <div className="max-w-xs mx-auto flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setMode('review')}
            className="h-13 py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 text-[15px] font-semibold hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            📖 Review sentences first
          </button>
          <button
            type="button"
            onClick={startPlay}
            className="h-13 py-3.5 rounded-2xl bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 active:scale-95 shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            ▶ Play
          </button>
        </div>
      </Shell>
    );
  }

  /* ---------- Review: read & hear every sentence ---------- */
  if (mode === 'review') {
    return (
      <Shell>
        <div className="text-center mb-6">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-2">
            Review — {set.label}
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
            Read the sentences
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Look at each picture and read the sentence out loud. Tap the speaker to hear it. When you
            are ready, play!
          </p>
        </div>

        <div className="space-y-3">
          {set.items.map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] p-3"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                <SceneImage image={it.image} scene={it.scene} sentence={it.sentence} />
              </div>
              <p className="flex-1 font-playfair text-lg sm:text-xl text-slate-900 leading-snug">
                {it.sentence}
              </p>
              <button
                type="button"
                onClick={() => speak(it.sentence)}
                aria-label={`Listen to: ${it.sentence}`}
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
          <div className="flex justify-center mb-4">
            <Monster mood="happy" />
          </div>
          <h2 className="font-playfair text-3xl font-semibold text-slate-900 mb-2">Great job!</h2>
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
      {/* Top bar */}
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
        {/* Scene + monster */}
        <div className="relative bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] p-6 flex items-center justify-center gap-4">
          <div
            className={`w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-white/70 border border-white shadow-sm flex-shrink-0 ${
              status === 'wrong' ? 'animate-shake' : ''
            }`}
          >
            {item && <SceneImage image={item.image} scene={item.scene} sentence={item.sentence} />}
          </div>
          <div className="hidden sm:block">
            <Monster mood={mood} />
          </div>
        </div>

        {/* Sentence tray */}
        <div className="px-5 sm:px-8 pt-6">
          <div
            className={`min-h-[3.5rem] flex flex-wrap items-center gap-2 rounded-xl border-2 border-dashed px-3 py-3 transition-colors ${
              status === 'correct'
                ? 'border-emerald-300 bg-emerald-50'
                : status === 'wrong'
                ? 'border-red-300 bg-red-50'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            {placed.length === 0 && (
              <span className="text-sm text-slate-400 px-1">Tap the words below in the correct order…</span>
            )}
            {placed.map((id, i) => {
              const word = tiles.find((t) => t.id === id)?.word ?? '';
              return (
                <button
                  key={`${id}-${i}`}
                  type="button"
                  onClick={() => removePlaced(i)}
                  className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold text-sm shadow-sm hover:border-red-300 transition-colors cursor-pointer"
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>

        {/* Word bank */}
        <div className="px-5 sm:px-8 py-6">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {tiles.map((t) => {
              const used = usedIds.has(t.id);
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => tapTile(t)}
                  disabled={used || status !== 'building'}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-[15px] border-2 transition-all cursor-pointer ${
                    used
                      ? 'opacity-0 pointer-events-none'
                      : 'bg-white border-blue-500 text-blue-700 hover:bg-blue-50 active:scale-95'
                  }`}
                >
                  {t.word}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-5 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {status === 'correct' ? (
            <>
              <button
                type="button"
                onClick={() => item && speak(item.sentence)}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                🔊 Hear it again
              </button>
              <button
                type="button"
                onClick={nextItem}
                className="h-11 px-7 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
              >
                {index + 1 >= total ? 'Finish →' : 'Next →'}
              </button>
            </>
          ) : (
            <>
              <span className={`text-sm font-semibold ${status === 'wrong' ? 'text-red-500' : 'text-slate-400'}`}>
                {status === 'wrong' ? 'Not quite — try again!' : 'Build the sentence'}
              </span>
              <button
                type="button"
                onClick={clearTray}
                disabled={placed.length === 0}
                className="text-sm font-semibold text-slate-500 hover:text-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-default px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                ↺ Clear
              </button>
            </>
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
