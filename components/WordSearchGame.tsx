'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { WORDSEARCH_SETS, WordSearchItem, WordSearchSet } from '@/data/wordSearch';
import { SiteHeader, SiteFooter, ArrowLeftIcon } from '@/components/SiteChrome';

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.9;
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

const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIRS = [
  [0, 1],
  [1, 0],
  [1, 1],
  [-1, 1],
];

interface Placement {
  word: string; // lowercase original
  cells: number[]; // grid indices, in placement order
}
interface Puzzle {
  size: number;
  grid: string[]; // uppercase letters
  placements: Placement[];
}

function generatePuzzle(words: string[]): Puzzle {
  const size = Math.max(8, ...words.map((w) => w.length));
  const idx = (r: number, c: number) => r * size + c;

  for (let attempt = 0; attempt < 40; attempt++) {
    const grid: string[] = new Array(size * size).fill('');
    const placements: Placement[] = [];
    let ok = true;

    for (const wordLc of [...words].sort((a, b) => b.length - a.length)) {
      const upper = wordLc.toUpperCase();
      let placed = false;
      for (let t = 0; t < 120 && !placed; t++) {
        const reversed = Math.random() < 0.5;
        const seq = reversed ? [...upper].reverse().join('') : upper;
        const [dr, dc] = DIRS[Math.floor(Math.random() * DIRS.length)];
        const len = seq.length;
        // valid start range for this direction
        const rMin = dr < 0 ? (len - 1) * -dr : 0;
        const rMax = dr > 0 ? size - 1 - (len - 1) * dr : size - 1;
        const cMax = size - 1 - Math.max(0, (len - 1) * dc);
        const r0 = rMin + Math.floor(Math.random() * (rMax - rMin + 1));
        const c0 = Math.floor(Math.random() * (cMax + 1));
        // check fit
        const cells: number[] = [];
        let fits = true;
        for (let i = 0; i < len; i++) {
          const r = r0 + i * dr;
          const c = c0 + i * dc;
          if (r < 0 || r >= size || c < 0 || c >= size) {
            fits = false;
            break;
          }
          const g = grid[idx(r, c)];
          if (g !== '' && g !== seq[i]) {
            fits = false;
            break;
          }
          cells.push(idx(r, c));
        }
        if (!fits) continue;
        for (let i = 0; i < len; i++) grid[cells[i]] = seq[i];
        placements.push({ word: wordLc, cells });
        placed = true;
      }
      if (!placed) {
        ok = false;
        break;
      }
    }

    if (ok) {
      for (let i = 0; i < grid.length; i++) {
        if (grid[i] === '') grid[i] = ALPHA[Math.floor(Math.random() * 26)];
      }
      return { size, grid, placements };
    }
  }
  // Extremely unlikely fallback: empty grid of filler
  const grid = Array.from({ length: size * size }, () => ALPHA[Math.floor(Math.random() * 26)]);
  return { size, grid, placements: [] };
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

/* line of grid indices between two cells if they form a straight run */
function lineBetween(a: number, b: number, size: number): number[] | null {
  const r0 = Math.floor(a / size);
  const c0 = a % size;
  const r1 = Math.floor(b / size);
  const c1 = b % size;
  const dr = r1 - r0;
  const dc = c1 - c0;
  const aligned = dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc);
  if (!aligned) return null;
  const steps = Math.max(Math.abs(dr), Math.abs(dc));
  const sr = Math.sign(dr);
  const sc = Math.sign(dc);
  const cells: number[] = [];
  for (let i = 0; i <= steps; i++) cells.push((r0 + i * sr) * size + (c0 + i * sc));
  return cells;
}

export default function WordSearchGame() {
  const [set, setSet] = useState<WordSearchSet | null>(null);
  const [mode, setMode] = useState<'review' | 'play' | null>(null);
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [foundCells, setFoundCells] = useState<Set<number>>(new Set());
  const [start, setStart] = useState<number | null>(null);
  const [flash, setFlash] = useState<{ cells: number[]; ok: boolean } | null>(null);
  const [clueCells, setClueCells] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const startRef = useRef<number | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clueTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const items = set?.items ?? [];
  const allFound = !!set && foundWords.size === set.items.length;

  const openSet = (s: WordSearchSet) => {
    setSet(s);
    setMode(null);
  };
  const startPlay = () => {
    if (!set) return;
    setPuzzle(generatePuzzle(set.items.map((i) => i.word)));
    setFoundWords(new Set());
    setFoundCells(new Set());
    startRef.current = null;
    setStart(null);
    setFlash(null);
    setClueCells([]);
    setScore(0);
    setMode('play');
  };
  const backToSets = () => {
    setSet(null);
    setMode(null);
  };

  useEffect(() => {
    return () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
      if (clueTimer.current) clearTimeout(clueTimer.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  const setStartCell = (v: number | null) => {
    startRef.current = v;
    setStart(v);
  };

  const tapCell = useCallback(
    (cell: number) => {
      if (!puzzle) return;
      const cur = startRef.current;
      if (cur === null) {
        setStartCell(cell);
        return;
      }
      if (cell === cur) {
        setStartCell(null);
        return;
      }
      const line = lineBetween(cur, cell, puzzle.size);
      if (!line) {
        setStartCell(cell); // restart from the new cell
        return;
      }
      const s = line.map((c) => puzzle.grid[c]).join('');
      const rev = [...s].reverse().join('');
      const match = set?.items.find(
        (i) => !foundWords.has(i.word) && (i.word.toUpperCase() === s || i.word.toUpperCase() === rev)
      );
      if (match) {
        setFoundWords((f) => new Set(f).add(match.word));
        setFoundCells((fc) => {
          const n = new Set(fc);
          line.forEach((c) => n.add(c));
          return n;
        });
        setScore((v) => v + 10);
        speak(match.word);
      } else {
        setFlash({ cells: line, ok: false });
        if (flashTimer.current) clearTimeout(flashTimer.current);
        flashTimer.current = setTimeout(() => setFlash(null), 400);
      }
      setStartCell(null);
    },
    [puzzle, set, foundWords]
  );

  const showClue = () => {
    if (!puzzle) return;
    const remaining = puzzle.placements.filter((p) => !foundWords.has(p.word));
    if (remaining.length === 0) return;
    const p = remaining[Math.floor(Math.random() * remaining.length)];
    setClueCells(p.cells);
    if (clueTimer.current) clearTimeout(clueTimer.current);
    clueTimer.current = setTimeout(() => setClueCells([]), 1300);
  };

  /* ---------- Set picker ---------- */
  if (!set) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Game</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">Word Search</h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Find the hidden words that match the pictures. Tap the first and last letter of each word —
            words go across, down, or diagonally.
          </p>
        </div>
        <p className="text-center text-sm font-semibold text-slate-500 mb-4">Choose a topic</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {WORDSEARCH_SETS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => openSet(s)}
              className="group text-left bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all p-5 flex items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              <span className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-2xl">
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
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
  if (allFound) {
    const max = set.items.length * 10;
    return (
      <Shell>
        <div className="max-w-md mx-auto text-center bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-10">
          <div className="text-5xl mb-3">🔎</div>
          <h2 className="font-playfair text-3xl font-semibold text-slate-900 mb-2">All found!</h2>
          <p className="text-slate-500 mb-1">You solved {set.label}.</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            {score} <span className="text-base font-medium text-slate-400">/ {max} points</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={startPlay}
              className="h-12 px-6 rounded-full bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
            >
              New puzzle
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
  if (!puzzle) return <Shell>{null}</Shell>;
  const flashSet = new Set(flash?.cells ?? []);
  const clueSet = new Set(clueCells);

  return (
    <Shell>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => setMode(null)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon className="w-4 h-4" /> Menu
        </button>
        <span className="text-sm font-medium text-slate-500">
          {foundWords.size} / {set.items.length} found
        </span>
        <span className="text-sm font-bold text-blue-600">{score} pts</span>
      </div>

      {/* Picture targets */}
      <div className="grid grid-cols-6 gap-2 mb-4">
        {items.map((t) => {
          const done = foundWords.has(t.word);
          return (
            <div
              key={t.word}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 bg-white transition-all ${
                done ? 'border-emerald-400 ring-2 ring-emerald-100' : 'border-slate-200'
              }`}
            >
              <div className={done ? 'opacity-40' : ''}>
                <SceneImage image={t.image} scene={t.scene} word={t.word} />
              </div>
              {done && (
                <span className="absolute inset-0 flex items-center justify-center text-emerald-500 text-xl font-bold">
                  ✓
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Letter grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] p-2 sm:p-3">
        <div
          className="grid gap-0.5 sm:gap-1"
          style={{ gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))` }}
        >
          {puzzle.grid.map((letter, i) => {
            const isFound = foundCells.has(i);
            const isStart = start === i;
            const isFlash = flashSet.has(i);
            const isClue = clueSet.has(i);
            return (
              <button
                key={i}
                type="button"
                onClick={() => tapCell(i)}
                className={`aspect-square rounded-md flex items-center justify-center font-bold text-[3.4vw] sm:text-base uppercase transition-colors cursor-pointer ${
                  isFound
                    ? 'bg-emerald-100 text-emerald-700'
                    : isFlash
                    ? 'bg-red-100 text-red-500'
                    : isClue
                    ? 'bg-amber-100 text-amber-600'
                    : isStart
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-blue-50'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-slate-400">Tap the first &amp; last letter of a word.</p>
        <button
          type="button"
          onClick={showClue}
          className="h-10 px-5 rounded-full bg-amber-400 text-amber-950 text-sm font-bold hover:bg-amber-300 active:scale-95 transition-all cursor-pointer"
        >
          💡 Clue
        </button>
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
