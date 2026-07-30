'use client';
import { useState, useEffect, useRef } from 'react';
import { FillBlankItem } from '@/types/lesson';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CHARACTERS = [
  { initial: 'Z', bg: 'bg-purple-100', text: 'text-purple-700' },
  { initial: 'J', bg: 'bg-emerald-100', text: 'text-emerald-700' },
  { initial: 'M', bg: 'bg-orange-100',  text: 'text-orange-600'  },
];

function GridIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <rect x="0"   y="0"   width="5.5" height="5.5" rx="1.2" fill="#9CA3AF"/>
      <rect x="7.5" y="0"   width="5.5" height="5.5" rx="1.2" fill="#9CA3AF"/>
      <rect x="0"   y="7.5" width="5.5" height="5.5" rx="1.2" fill="#9CA3AF"/>
      <rect x="7.5" y="7.5" width="5.5" height="5.5" rx="1.2" fill="#9CA3AF"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path d="M1.5 7L4.5 10L11.5 3" stroke="#066EF5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface Props {
  items: FillBlankItem[];
  onComplete: (score: number, total: number) => void;
}

export default function FillBlankExercise({ items, onComplete }: Props) {
  // Hydration-safe shuffle
  const [wordBank, setWordBank] = useState<string[]>(items.map((i) => i.answer));
  useEffect(() => {
    setWordBank(shuffle(items.map((i) => i.answer)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Only correct placements are stored here
  const [placements, setPlacements] = useState<Record<number, string>>({});
  // Word currently selected from bank (click interaction)
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  // Word currently being dragged
  const [dragWord, setDragWord] = useState<string | null>(null);
  // Which blank is being dragged over
  const [dragOver, setDragOver] = useState<number | null>(null);
  // Wrong-answer shake: brief display of wrong word + animation
  const [shakingWord, setShakingWord] = useState<{ index: number; word: string } | null>(null);

  const calledRef = useRef(false);
  const usedWords = new Set(Object.values(placements));
  const completedCount = Object.keys(placements).length;

  const placeWord = (word: string, index: number) => {
    if (placements[index] !== undefined) return; // already locked
    const isCorrect =
      word.toLowerCase().trim() === items[index].answer.toLowerCase().trim();

    if (isCorrect) {
      setPlacements((prev) => ({ ...prev, [index]: word }));
    } else {
      setShakingWord({ index, word });
      setTimeout(() => setShakingWord(null), 600);
    }
    setSelectedWord(null);
    setDragWord(null);
  };

  // Auto-complete when every blank is correctly filled
  useEffect(() => {
    if (completedCount === items.length && items.length > 0 && !calledRef.current) {
      calledRef.current = true;
      onComplete(items.length, items.length);
    }
  }, [completedCount, items.length, onComplete]);

  const handleReset = () => {
    setPlacements({});
    setSelectedWord(null);
    setShakingWord(null);
    setDragWord(null);
    setDragOver(null);
    calledRef.current = false;
  };

  const isActive = selectedWord !== null || dragWord !== null;

  return (
    <div>
      {/* ── Completion counter ── */}
      <div className="flex items-center justify-end mb-4">
        <span
          className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
            completedCount > 0
              ? 'border-emerald-200 bg-emerald-50 text-emerald-600'
              : 'border-gray-200 bg-gray-50 text-gray-400'
          }`}
        >
          ✓ {completedCount} of {items.length} completed
        </span>
      </div>

      {/* ── Word Bank (sticks below the header + tabs while scrolling the sentences) ── */}
      <div className="sticky top-[124px] z-20 mb-5 bg-[#F8FAFF] rounded-2xl border border-blue-100 p-4 shadow-[0_4px_12px_rgba(6,110,245,0.06)]">
        <div className="flex items-center gap-2 mb-3">
          <GridIcon />
          <span className="text-[10px] font-extrabold tracking-[0.16em] text-gray-400 uppercase">
            Word Bank
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {wordBank.map((word) => {
            const isUsed = usedWords.has(word);
            const isSelected = selectedWord === word;
            return (
              <button
                key={word}
                draggable={!isUsed}
                onDragStart={() => {
                  setDragWord(word);
                  setSelectedWord(null);
                }}
                onDragEnd={() => setDragWord(null)}
                onClick={() => {
                  if (isUsed) return;
                  setSelectedWord((prev) => (prev === word ? null : word));
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border font-semibold
                  text-sm transition-all select-none
                  ${
                    isUsed
                      ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                      : isSelected
                      ? 'bg-[#066EF5] border-[#066EF5] text-white shadow-sm cursor-grab active:cursor-grabbing'
                      : 'bg-white border-[#066EF5] text-[#066EF5] hover:bg-[#EEF3FF] cursor-grab active:cursor-grabbing'
                  }`}
              >
                {isUsed && <span className="text-emerald-500 text-xs">✓</span>}
                <span className={isUsed ? 'opacity-40' : ''}>{word}</span>
              </button>
            );
          })}
        </div>

        {selectedWord && (
          <p className="mt-2.5 text-xs font-semibold text-[#066EF5]">
            <span className="font-bold">&ldquo;{selectedWord}&rdquo;</span>
            <span className="text-gray-400"> — click a blank below to place it</span>
          </p>
        )}
      </div>

      {/* ── Sentences ── */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden mb-4">
        {items.map((item, i) => {
          const char = CHARACTERS[i % CHARACTERS.length];
          const isPlaced = placements[i] !== undefined;
          const isShaking = shakingWord?.index === i;
          const shakingText = isShaking ? shakingWord!.word : null;
          const isDragOverHere = dragOver === i && !isPlaced;

          return (
            <div
              key={i}
              className={`flex items-start gap-4 px-5 py-4 ${
                i < items.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              {/* Character avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm
                  font-extrabold flex-shrink-0 mt-1.5 ${char.bg} ${char.text}`}
              >
                {char.initial}
              </div>

              {/* Sentence */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1.5">
                  Sentence {i + 1}
                </p>
                <p className="text-gray-800 text-[15px] leading-relaxed flex flex-wrap items-center gap-x-1.5 gap-y-2">
                  <span>{item.before}</span>

                  {/* Drop target */}
                  <span
                    role="button"
                    tabIndex={isActive && !isPlaced ? 0 : -1}
                    onClick={() => {
                      if (selectedWord && !isPlaced) placeWord(selectedWord, i);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && selectedWord && !isPlaced) placeWord(selectedWord, i);
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      if (!isPlaced) setDragOver(i);
                    }}
                    onDragLeave={() => {
                      if (dragOver === i) setDragOver(null);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(null);
                      if (dragWord && !isPlaced) placeWord(dragWord, i);
                    }}
                    className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg
                      border-2 min-w-[9rem] font-semibold text-sm transition-all select-none
                      ${
                        isPlaced
                          ? 'border-[#066EF5] bg-[#EEF3FF] text-[#066EF5] cursor-default'
                          : isShaking
                          ? 'border-red-400 bg-red-50 text-red-600 animate-shake cursor-default'
                          : isDragOverHere
                          ? 'border-[#066EF5] bg-[#EEF3FF] cursor-copy'
                          : isActive
                          ? 'border-dashed border-[#066EF5] bg-blue-50/60 cursor-pointer hover:bg-[#EEF3FF]'
                          : 'border-dashed border-gray-200 bg-gray-50 cursor-default'
                      }`}
                  >
                    {isPlaced ? (
                      <>
                        <span>{placements[i]}</span>
                        <CheckIcon />
                      </>
                    ) : isShaking ? (
                      <span>{shakingText}</span>
                    ) : (
                      <span className="text-gray-300 font-normal tracking-wider">— — —</span>
                    )}
                  </span>

                  <span>{item.after}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Tip bar ── */}
      <div className="flex items-start justify-between gap-4 px-4 py-3 bg-amber-50 border border-amber-100 rounded-xl">
        <div className="flex items-start gap-2.5 text-sm text-amber-700 min-w-0">
          <span className="flex-shrink-0 mt-px" aria-hidden="true">💡</span>
          <p className="leading-snug">
            <span className="font-bold">Tip:</span>{' '}
            <span className="font-medium">
              Think about the meaning of each word and what makes sense in the sentence.
            </span>
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex-shrink-0 text-sm text-gray-500 hover:text-gray-700 font-semibold px-3 py-1.5 rounded-lg hover:bg-white/70 transition-all whitespace-nowrap"
        >
          ↺ Reset
        </button>
      </div>

      {/* ── All done ── */}
      {completedCount === items.length && (
        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg">All filled correctly! ✓</p>
          <p className="text-emerald-600 text-sm font-semibold">
            Score: {items.length}/{items.length}
          </p>
        </div>
      )}
    </div>
  );
}
