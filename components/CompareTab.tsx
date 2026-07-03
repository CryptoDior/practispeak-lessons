'use client';
import { useState } from 'react';
import { VocabWord } from '@/types/lesson';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ImageCard({
  src,
  label,
  state,
  onClick,
  disabled,
}: {
  src: string;
  label: string;
  state: 'idle' | 'selected' | 'matched' | 'wrong';
  onClick: () => void;
  disabled: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgFailed, setImgFailed] = useState(false);

  const handleError = () => {
    if (!imgSrc.endsWith('.svg')) {
      setImgSrc(src.replace(/\.[^.]+$/, '.svg'));
    } else {
      setImgFailed(true);
    }
  };

  const borderClass = {
    idle:     'border-gray-200 hover:border-[#066EF5]/60 hover:shadow-md',
    selected: 'border-[#066EF5] shadow-[0_0_0_3px_rgba(6,110,245,0.2)] scale-[1.03]',
    matched:  'border-emerald-400 cursor-default opacity-70',
    wrong:    'border-red-400 scale-[0.97]',
  }[state];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 w-full bg-[#0b1120] aspect-square ${borderClass}`}
    >
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={label}
          className="w-full h-full object-cover"
          onError={handleError}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span
            className="font-extrabold text-[#066EF5] select-none leading-none"
            style={{ fontSize: 'clamp(20px, 5vw, 40px)', opacity: 0.12 }}
          >
            {label[0]}
          </span>
        </div>
      )}

      {/* Matched overlay */}
      {state === 'matched' && (
        <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-extrabold text-sm leading-none">✓</span>
          </div>
        </div>
      )}

      {/* Wrong flash */}
      {state === 'wrong' && (
        <div className="absolute inset-0 bg-red-500/20" />
      )}

      {/* Word label pinned to bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-black/50 px-1 py-0.5">
        <p className="text-white font-bold text-center leading-tight truncate"
           style={{ fontSize: 'clamp(8px, 1.6vw, 11px)' }}>
          {label}
        </p>
      </div>
    </button>
  );
}

export default function CompareTab({
  vocabulary,
  irlVocabulary,
}: {
  vocabulary: VocabWord[];
  irlVocabulary: VocabWord[];
}) {
  const [gameCards] = useState(() =>
    shuffle(vocabulary.map((w) => ({ word: w.word, src: w.imageSlug })))
  );
  const [irlCards] = useState(() =>
    shuffle(irlVocabulary.map((w) => ({ word: w.word, src: w.imageSlug })))
  );

  const [selGame, setSelGame] = useState<number | null>(null);
  const [selIrl, setSelIrl] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<[number, number] | null>(null);
  const [allDone, setAllDone] = useState(false);

  const attempt = (gIdx: number | null, iIdx: number | null) => {
    if (gIdx === null || iIdx === null) return;
    if (gameCards[gIdx].word === irlCards[iIdx].word) {
      const next = new Set(matched);
      next.add(gameCards[gIdx].word);
      setMatched(next);
      setSelGame(null);
      setSelIrl(null);
      if (next.size === vocabulary.length) setAllDone(true);
    } else {
      setWrongPair([gIdx, iIdx]);
      setTimeout(() => {
        setWrongPair(null);
        setSelGame(null);
        setSelIrl(null);
      }, 700);
    }
  };

  const clickGame = (idx: number) => {
    if (matched.has(gameCards[idx].word) || wrongPair) return;
    const next = idx === selGame ? null : idx;
    setSelGame(next);
    if (next !== null && selIrl !== null) attempt(next, selIrl);
  };

  const clickIrl = (idx: number) => {
    if (matched.has(irlCards[idx].word) || wrongPair) return;
    const next = idx === selIrl ? null : idx;
    setSelIrl(next);
    if (selGame !== null && next !== null) attempt(selGame, next);
  };

  const cardState = (
    word: string,
    idx: number,
    side: 'game' | 'irl'
  ): 'idle' | 'selected' | 'matched' | 'wrong' => {
    if (matched.has(word)) return 'matched';
    if (wrongPair) {
      if (side === 'game' && wrongPair[0] === idx) return 'wrong';
      if (side === 'irl' && wrongPair[1] === idx) return 'wrong';
    }
    if (side === 'game' && selGame === idx) return 'selected';
    if (side === 'irl' && selIrl === idx) return 'selected';
    return 'idle';
  };

  const remaining = vocabulary.length - matched.size;

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-0.5">Compare</h2>
          <p className="text-xs text-gray-400 font-semibold">
            Tap one image from each side to match the same word
          </p>
        </div>
        {!allDone && (
          <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-2xl px-3 py-1.5 shadow-sm">
            <span className="text-xl font-extrabold text-[#066EF5]">{remaining}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">left</span>
          </div>
        )}
      </div>

      {/* Celebration */}
      {allDone && (
        <div className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg mb-0.5">Amazing! All matched! 🎉</p>
          <p className="text-emerald-600 text-sm font-semibold">You know your in-game and real-life words!</p>
        </div>
      )}

      {/* Column headers */}
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="text-center">
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#066EF5] uppercase px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
            🎮 In Game
          </span>
        </div>
        <div className="text-center">
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-emerald-600 uppercase px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
            🌍 In Real Life
          </span>
        </div>
      </div>

      {/* Card grid — 2 cols per side so 8 cards fit in 2 rows */}
      <div className="grid grid-cols-2 gap-4">
        {/* In Game column: 2×4 grid of small squares */}
        <div className="grid grid-cols-2 gap-2">
          {gameCards.map((card, idx) => (
            <ImageCard
              key={`game-${card.word}`}
              src={card.src}
              label={card.word}
              state={cardState(card.word, idx, 'game')}
              onClick={() => clickGame(idx)}
              disabled={matched.has(card.word) || !!wrongPair}
            />
          ))}
        </div>

        {/* IRL column: 2×4 grid of small squares */}
        <div className="grid grid-cols-2 gap-2">
          {irlCards.map((card, idx) => (
            <ImageCard
              key={`irl-${card.word}`}
              src={card.src}
              label={card.word}
              state={cardState(card.word, idx, 'irl')}
              onClick={() => clickIrl(idx)}
              disabled={matched.has(card.word) || !!wrongPair}
            />
          ))}
        </div>
      </div>

      {/* Matched words */}
      {matched.size > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {Array.from(matched).map((word) => (
            <span
              key={word}
              className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full tracking-wide"
            >
              ✓ {word}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
