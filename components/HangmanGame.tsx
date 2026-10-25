'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HANGMAN_SETS, HangmanItem, HangmanSet } from '@/data/hangman';
import { SiteHeader, SiteFooter, ArrowLeftIcon } from '@/components/SiteChrome';
import { SceneImage, TopicPicker } from '@/components/games/GameParts';

const MAX_WRONG = 6;
/** Consonants only, in QWERTY order — vowels have their own column. */
const KEY_ROWS = ['QWRTYP', 'SDFGHJKL', 'ZXCVBNM'];
const VOWELS = ['A', 'E', 'I', 'O', 'U'];
const isVowel = (ch: string) => 'aeiou'.includes(ch);

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

function SpeakerIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" strokeLinejoin="round" />
      <path d="M15.5 9.2a4 4 0 010 5.6M18 6.8a7.5 7.5 0 010 10.4" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Hangman drawing ---------- */
function Gallows({ wrong }: { wrong: number }) {
  const s = '#334155';
  return (
    <svg viewBox="0 0 140 160" className="w-40 h-44 mx-auto" aria-hidden="true">
      <line x1="20" y1="150" x2="110" y2="150" stroke={s} strokeWidth="4" strokeLinecap="round" />
      <line x1="40" y1="150" x2="40" y2="16" stroke={s} strokeWidth="4" strokeLinecap="round" />
      <line x1="40" y1="16" x2="95" y2="16" stroke={s} strokeWidth="4" strokeLinecap="round" />
      <line x1="95" y1="16" x2="95" y2="32" stroke={s} strokeWidth="4" strokeLinecap="round" />
      {wrong >= 1 && <circle cx="95" cy="44" r="12" fill="none" stroke={s} strokeWidth="4" />}
      {wrong >= 2 && <line x1="95" y1="56" x2="95" y2="96" stroke={s} strokeWidth="4" strokeLinecap="round" />}
      {wrong >= 3 && <line x1="95" y1="66" x2="80" y2="84" stroke={s} strokeWidth="4" strokeLinecap="round" />}
      {wrong >= 4 && <line x1="95" y1="66" x2="110" y2="84" stroke={s} strokeWidth="4" strokeLinecap="round" />}
      {wrong >= 5 && <line x1="95" y1="96" x2="82" y2="118" stroke={s} strokeWidth="4" strokeLinecap="round" />}
      {wrong >= 6 && <line x1="95" y1="96" x2="108" y2="118" stroke={s} strokeWidth="4" strokeLinecap="round" />}
    </svg>
  );
}

/** lessonSets: topics built on the server from lesson vocabulary (lib/gameSets.ts). */
export default function HangmanGame({ lessonSets = [] }: { lessonSets?: HangmanSet[] }) {
  const [set, setSet] = useState<HangmanSet | null>(null);
  const [mode, setMode] = useState<'review' | 'play' | null>(null);
  const [items, setItems] = useState<HangmanItem[]>([]);
  const [index, setIndex] = useState(0);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState(0);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const guessedRef = useRef<Set<string>>(new Set());
  const wrongRef = useRef(0);
  const statusRef = useRef<'playing' | 'won' | 'lost'>('playing');

  const word = items[index]?.word ?? '';

  const resetRound = () => {
    guessedRef.current = new Set();
    wrongRef.current = 0;
    statusRef.current = 'playing';
    setGuessed(new Set());
    setWrong(0);
    setStatus('playing');
  };

  const openSet = (s: HangmanSet) => {
    setSet(s);
    setMode(null);
    setFinished(false);
  };
  const startPlay = () => {
    if (!set) return;
    setItems(shuffle(set.items));
    setMode('play');
    setIndex(0);
    setScore(0);
    setFinished(false);
    resetRound();
  };
  const backToSets = () => {
    setSet(null);
    setMode(null);
    setFinished(false);
  };

  const guess = useCallback(
    (chRaw: string) => {
      if (statusRef.current !== 'playing' || !word) return;
      const ch = chRaw.toLowerCase();
      if (guessedRef.current.has(ch)) return;
      const ng = new Set(guessedRef.current).add(ch);
      guessedRef.current = ng;
      setGuessed(ng);
      if (word.includes(ch)) {
        if ([...word].every((c) => ng.has(c))) {
          statusRef.current = 'won';
          setStatus('won');
          setScore((s) => s + 10);
          speak(word);
        }
      } else if (!isVowel(ch)) {
        // Vowels are free tips: a missing vowel doesn't draw anything.
        const nw = wrongRef.current + 1;
        wrongRef.current = nw;
        setWrong(nw);
        if (nw >= MAX_WRONG) {
          statusRef.current = 'lost';
          setStatus('lost');
        }
      }
    },
    [word]
  );

  useEffect(() => {
    if (mode !== 'play' || status !== 'playing') return;
    const onKey = (e: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(e.key)) guess(e.key);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, status, guess]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  const nextWord = () => {
    if (index + 1 >= items.length) {
      setFinished(true);
      return;
    }
    setIndex(index + 1);
    resetRound();
  };

  /* ---------- Set picker ---------- */
  if (!set) {
    return (
      <Shell>
        <div className="text-center mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Game</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">Hangman</h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Guess the hidden word one letter at a time. Vowels are free tips — six wrong consonants and it&rsquo;s game
            over. Type on your keyboard or tap the letters.
          </p>
        </div>
        <TopicPicker lessonSets={lessonSets} sets={HANGMAN_SETS} onOpen={openSet} emojiBg="bg-slate-100" />
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
                <SceneImage image={s.image} scene={s.scene} word={s.word} fit={s.fit} emojiClass="text-4xl sm:text-5xl" />
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
    const max = items.length * 10;
    return (
      <Shell>
        <div className="max-w-md mx-auto text-center bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-10">
          <div className="text-5xl mb-3">🎯</div>
          <h2 className="font-playfair text-3xl font-semibold text-slate-900 mb-2">Game over!</h2>
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
  const total = items.length;
  const over = status !== 'playing';
  const vowelButtons = (
    <>
      {VOWELS.map((v) => {
        const g = guessed.has(v.toLowerCase());
        const inWord = word.includes(v.toLowerCase());
        return (
          <button
            key={v}
            type="button"
            onClick={() => guess(v)}
            disabled={g || over}
            aria-label={`Vowel ${v} (free)`}
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 text-xl sm:text-2xl font-extrabold transition-all cursor-pointer active:scale-95 disabled:cursor-default shadow-[inset_0_-3px_0_rgba(15,23,42,0.08)] ${
              g
                ? inWord
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                  : 'bg-slate-100 border-slate-200 text-slate-300'
                : 'bg-white border-slate-300 text-[#8B1414] hover:border-[#8B1414]/50'
            }`}
          >
            {v}
          </button>
        );
      })}
    </>
  );

  return (
    <Shell wide>
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

      <div className="lg:flex lg:items-start lg:gap-6">
        {/* Vowels (free tips) — left column on wide screens */}
        <div className="hidden lg:flex flex-col items-center gap-3 pt-6 w-16 flex-shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Free</span>
          {vowelButtons}
        </div>

        <div className="flex-1 min-w-0">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden">
        {/* Drawing + lives */}
        <div className="bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] p-5 sm:p-6">
          <Gallows wrong={wrong} />
          <p className="text-center text-sm font-medium text-slate-500 mt-1">
            {Math.max(0, MAX_WRONG - wrong)} guesses left
          </p>
        </div>

        {/* Word blanks */}
        <div className="px-3 sm:px-8 pt-7">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {word.split('').map((letter, i) => {
              const revealed = guessed.has(letter);
              const showLost = status === 'lost' && !revealed;
              return (
                <span
                  key={i}
                  className={`w-7 sm:w-9 flex flex-col items-center justify-end h-11 sm:h-12 border-b-4 rounded-sm transition-colors ${
                    status === 'won'
                      ? 'border-emerald-400'
                      : showLost
                      ? 'border-red-300'
                      : 'border-slate-300'
                  }`}
                >
                  <span
                    className={`text-xl sm:text-2xl font-bold uppercase ${
                      showLost ? 'text-red-400' : status === 'won' ? 'text-emerald-600' : 'text-slate-800'
                    }`}
                  >
                    {revealed || showLost ? letter : ''}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Keyboard or result */}
        <div className="px-2 sm:px-6 py-6">
          {over ? (
            <div className="text-center">
              {status === 'won' ? (
                <p className="text-emerald-600 font-bold text-lg mb-1">You got it! 🎉</p>
              ) : (
                <p className="text-red-500 font-bold text-lg mb-1">Out of guesses!</p>
              )}
              <p className="text-slate-500 mb-3">
                The word was <span className="font-bold text-slate-800 capitalize">{word}</span>.
                <button
                  type="button"
                  onClick={() => speak(word)}
                  className="ml-2 text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
                >
                  🔊 Hear it
                </button>
              </p>
              <button
                type="button"
                onClick={nextWord}
                className="h-11 px-7 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
              >
                {index + 1 >= total ? 'Finish →' : 'Next word →'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1.5">
              {/* Vowels as a row on small screens */}
              <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Free</span>
                {vowelButtons}
              </div>
              {KEY_ROWS.map((row) => (
                <div key={row} className="flex gap-1 sm:gap-1.5 justify-center">
                  {row.split('').map((k) => {
                    const g = guessed.has(k.toLowerCase());
                    const inWord = word.includes(k.toLowerCase());
                    return (
                      <button
                        key={k}
                        type="button"
                        onClick={() => guess(k)}
                        disabled={g}
                        className={`w-[8.5vw] max-w-[2.75rem] h-11 sm:h-12 rounded-lg font-semibold text-sm sm:text-base border-2 transition-all cursor-pointer active:scale-95 disabled:cursor-default ${
                          g
                            ? inWord
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                              : 'bg-slate-100 border-slate-200 text-slate-300'
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
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-poppins text-slate-900">
      <SiteHeader active="Games" />
      <main className={`${wide ? 'max-w-2xl lg:max-w-3xl' : 'max-w-2xl'} mx-auto px-4 sm:px-6 pt-8 pb-16`}>
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
