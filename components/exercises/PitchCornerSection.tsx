'use client';
import { useState, useEffect } from 'react';
import { PitchCorner } from '@/types/lesson';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
    <svg width="11" height="11" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path d="M1.5 7L4.5 10L11.5 3" stroke="#066EF5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface Props {
  pitchCorner: PitchCorner;
  onComplete: (score: number, total: number) => void;
}

export default function PitchCornerSection({ pitchCorner, onComplete }: Props) {
  const answers = pitchCorner.passage.map((s) => s.answer);

  // Hydration-safe shuffle
  const [wordBank, setWordBank] = useState<string[]>(answers);
  useEffect(() => {
    setWordBank(shuffle(answers));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [placements, setPlacements] = useState<Record<number, string>>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [dragWord, setDragWord]  = useState<string | null>(null);
  const [dragOver, setDragOver]  = useState<number | null>(null);
  const [shakingWord, setShakingWord] = useState<{ index: number; word: string } | null>(null);
  const [completed, setCompleted] = useState(false);

  const usedWords = new Set(Object.values(placements));
  const completedCount = Object.keys(placements).length;
  const isActive = selectedWord !== null || dragWord !== null;

  const placeWord = (word: string, index: number) => {
    if (placements[index] !== undefined) return;
    const isCorrect =
      word.toLowerCase().trim() === answers[index].toLowerCase().trim();
    if (isCorrect) {
      const next = { ...placements, [index]: word };
      setPlacements(next);
      if (Object.keys(next).length === answers.length && !completed) {
        setCompleted(true);
        onComplete(answers.length, answers.length);
      }
    } else {
      setShakingWord({ index, word });
      setTimeout(() => setShakingWord(null), 600);
    }
    setSelectedWord(null);
    setDragWord(null);
  };

  const handleReset = () => {
    setPlacements({});
    setSelectedWord(null);
    setShakingWord(null);
    setDragWord(null);
    setDragOver(null);
    setCompleted(false);
  };

  return (
    <div>
      {/* ── Completion counter ── */}
      <div className="flex items-center justify-end mb-4">
        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
          completedCount > 0
            ? 'border-emerald-200 bg-emerald-50 text-emerald-600'
            : 'border-gray-200 bg-gray-50 text-gray-400'
        }`}>
          ✓ {completedCount} of {answers.length} filled
        </span>
      </div>

      {/* ── Word Bank ── */}
      <div className="mb-5 bg-[#F8FAFF] rounded-2xl border border-blue-50 p-4">
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
                onDragStart={() => { setDragWord(word); setSelectedWord(null); }}
                onDragEnd={() => setDragWord(null)}
                onClick={() => {
                  if (isUsed) return;
                  setSelectedWord((prev) => (prev === word ? null : word));
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border font-semibold
                  text-sm transition-all select-none
                  ${isUsed
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
            <span className="text-gray-400"> — click a blank in the passage to place it</span>
          </p>
        )}
      </div>

      {/* ── Pitch document ── */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden mb-4">
        {/* Document header */}
        <div className="px-6 py-5 border-b border-gray-50">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[#066EF5] bg-[#EEF3FF] px-2.5 py-0.5 rounded-full">
              Pitch Corner
            </span>
          </div>
          <h3 className="text-base font-extrabold text-gray-900">{pitchCorner.title}</h3>
          <p className="text-sm text-gray-400 font-medium mt-0.5">{pitchCorner.context}</p>
        </div>

        {/* Passage body — flowing text with inline blanks */}
        <div className="px-6 py-6">
          <p className="text-gray-700 text-[15px] leading-[1.9] flex flex-wrap items-baseline gap-x-[0.3em]">
            {pitchCorner.passage.map((seg, i) => {
              const isPlaced = placements[i] !== undefined;
              const isShaking = shakingWord?.index === i;
              const isDragOverHere = dragOver === i && !isPlaced;

              return (
                <span key={i} className="inline-flex items-baseline gap-x-[0.3em] flex-wrap">
                  {/* Text before the blank */}
                  {seg.before && <span>{seg.before}</span>}

                  {/* Inline blank */}
                  <span
                    role="button"
                    tabIndex={isActive && !isPlaced ? 0 : -1}
                    onClick={() => {
                      if (selectedWord && !isPlaced) placeWord(selectedWord, i);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && selectedWord && !isPlaced) placeWord(selectedWord, i);
                    }}
                    onDragOver={(e) => { e.preventDefault(); if (!isPlaced) setDragOver(i); }}
                    onDragLeave={() => { if (dragOver === i) setDragOver(null); }}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(null);
                      if (dragWord && !isPlaced) placeWord(dragWord, i);
                    }}
                    className={`inline-flex items-center justify-center gap-1 px-2.5 py-0.5 rounded-lg
                      border-2 min-w-[7rem] font-semibold text-sm transition-all select-none align-baseline
                      ${isPlaced
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
                      <><span>{placements[i]}</span><CheckIcon /></>
                    ) : isShaking ? (
                      <span>{shakingWord!.word}</span>
                    ) : (
                      <span className="text-gray-300 font-normal tracking-wider text-xs">— — —</span>
                    )}
                  </span>

                  {/* Text after the blank */}
                  {seg.after && <span>{seg.after}</span>}
                </span>
              );
            })}
          </p>
        </div>
      </div>

      {/* ── Tip + reset ── */}
      <div className="flex items-start justify-between gap-4 px-4 py-3 bg-amber-50 border border-amber-100 rounded-xl">
        <div className="flex items-start gap-2.5 text-sm text-amber-700 min-w-0">
          <span className="flex-shrink-0 mt-px" aria-hidden="true">💡</span>
          <p className="leading-snug">
            <span className="font-bold">Tip:</span>{' '}
            <span className="font-medium">
              Read the whole passage first to understand the context, then fill in the blanks.
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
      {completed && (
        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg">Pitch complete! ✓</p>
          <p className="text-emerald-600 text-sm font-semibold">
            All {answers.length} blanks filled correctly
          </p>
        </div>
      )}
    </div>
  );
}
