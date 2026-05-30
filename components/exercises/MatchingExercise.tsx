'use client';
import { useState, useEffect, useRef } from 'react';
import { MatchPair } from '@/types/lesson';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface Props {
  pairs: MatchPair[];
  onComplete: (score: number, total: number) => void;
}

type FlashState = { word: string; def: string; correct: boolean } | null;

export default function MatchingExercise({ pairs, onComplete }: Props) {
  const [shuffledDefs, setShuffledDefs] = useState<string[]>(pairs.map((p) => p.definition));
  useEffect(() => {
    setShuffledDefs(shuffle(pairs.map((p) => p.definition)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matched, setMatched] = useState<Map<string, string>>(new Map());
  const [flash, setFlash] = useState<FlashState>(null);
  const [done, setDone] = useState(false);
  const calledRef = useRef(false);

  useEffect(() => {
    if (matched.size === pairs.length && pairs.length > 0 && !calledRef.current) {
      calledRef.current = true;
      setDone(true);
      onComplete(matched.size, pairs.length);
    }
  }, [matched.size, pairs.length, onComplete]);

  const handleWordClick = (word: string) => {
    if (done || matched.has(word) || flash) return;
    setSelectedWord((prev) => (prev === word ? null : word));
  };

  const handleDefClick = (def: string) => {
    if (done || !selectedWord || flash) return;
    const matchedDefs = [...matched.values()];
    if (matchedDefs.includes(def)) return;

    const correct = pairs.find((p) => p.word === selectedWord)?.definition === def;
    setFlash({ word: selectedWord, def, correct });

    setTimeout(() => {
      if (correct) {
        setMatched((prev) => new Map(prev).set(selectedWord, def));
      }
      setFlash(null);
      setSelectedWord(null);
    }, 700);
  };

  const matchedDefs = [...matched.values()];

  const wordStyle = (word: string): string => {
    if (matched.has(word))
      return 'bg-emerald-50 border-emerald-200 text-emerald-700 cursor-default';
    if (flash?.word === word)
      return flash.correct
        ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
        : 'bg-red-50 border-red-300 text-red-600';
    if (selectedWord === word)
      return 'bg-[#066EF5] border-[#066EF5] text-white shadow-[0_2px_12px_rgba(6,110,245,0.35)] scale-[1.01]';
    return 'bg-white border-gray-200 hover:border-[#066EF5] hover:bg-blue-50/50 cursor-pointer';
  };

  const defStyle = (def: string): string => {
    if (matchedDefs.includes(def))
      return 'bg-emerald-50 border-emerald-200 text-emerald-700 cursor-default';
    if (flash?.def === def)
      return flash.correct
        ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
        : 'bg-red-50 border-red-300 text-red-600';
    if (selectedWord)
      return 'bg-white border-gray-200 hover:border-[#066EF5] hover:bg-blue-50/50 cursor-pointer';
    return 'bg-white border-gray-100 opacity-60';
  };

  const numStyle = (word: string, selected: boolean): string => {
    if (matched.has(word)) return 'bg-emerald-500 text-white';
    if (selected) return 'bg-white/25 text-white';
    return 'bg-[#066EF5]/10 text-[#066EF5]';
  };

  return (
    <div>
      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-5">
        {pairs.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i < matched.size ? 'bg-[#066EF5]' : 'bg-gray-200'
            }`}
          />
        ))}
        <span className="text-xs text-gray-400 font-semibold ml-1">
          {matched.size}/{pairs.length} matched
        </span>
      </div>

      {/* Hint */}
      <div className="mb-4 h-5">
        {!done && !selectedWord && (
          <p className="text-sm text-gray-400 font-semibold">Click a word on the left, then its definition on the right.</p>
        )}
        {!done && selectedWord && (
          <p className="text-sm text-[#066EF5] font-bold">
            &ldquo;{selectedWord}&rdquo; selected — now click its definition →
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Words column */}
        <div className="space-y-2">
          <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">Words</p>
          {pairs.map((pair, idx) => (
            <button
              key={pair.word}
              onClick={() => handleWordClick(pair.word)}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border-2 font-extrabold text-sm transition-all duration-150 ${wordStyle(pair.word)}`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 transition-all ${numStyle(pair.word, selectedWord === pair.word)}`}>
                {matched.has(pair.word) ? '✓' : idx + 1}
              </span>
              {pair.word}
            </button>
          ))}
        </div>

        {/* Definitions column */}
        <div className="space-y-2">
          <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">Definitions</p>
          {shuffledDefs.map((def) => (
            <button
              key={def}
              onClick={() => handleDefClick(def)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all duration-150 leading-snug font-medium ${defStyle(def)}`}
            >
              {matchedDefs.includes(def) && <span className="mr-1.5 text-emerald-500 font-bold">✓</span>}
              {def}
            </button>
          ))}
        </div>
      </div>

      {done && (
        <div className="mt-5 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg">All matched! ✓</p>
          <p className="text-emerald-600 text-sm font-semibold">Score: {matched.size}/{pairs.length}</p>
        </div>
      )}
    </div>
  );
}
