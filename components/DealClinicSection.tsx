'use client';
import { useState } from 'react';
import { DealClinic } from '@/types/lesson';

const SPEAKER_COLORS: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-700',
  blue:   'bg-blue-100  text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  green:  'bg-emerald-100 text-emerald-700',
  red:    'bg-red-100   text-red-700',
};

type Guess = 'good' | 'weak';

function ThumbUpIcon({ active }: { active: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
    </svg>
  );
}

function ThumbDownIcon({ active }: { active: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10zM17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
    </svg>
  );
}

export default function DealClinicSection({
  dealClinic,
  onComplete,
}: {
  dealClinic: DealClinic;
  onComplete?: (score: number, total: number) => void;
}) {
  const evaluatedIndices = dealClinic.transcript
    .map((line, i) => (line.verdict ? i : -1))
    .filter((i) => i !== -1);
  const total = evaluatedIndices.length;

  const [guesses, setGuesses] = useState<Record<number, Guess>>({});
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);

  const guess = (lineIndex: number, pick: Guess) => {
    if (revealed.has(lineIndex)) return;
    const next = { ...guesses, [lineIndex]: pick };
    const nextRevealed = new Set(revealed).add(lineIndex);
    setGuesses(next);
    setRevealed(nextRevealed);
    if (nextRevealed.size === total && !done) {
      setDone(true);
      const score = evaluatedIndices.filter(
        (i) =>
          (dealClinic.transcript[i].verdict!.isGood && next[i] === 'good') ||
          (!dealClinic.transcript[i].verdict!.isGood && next[i] === 'weak')
      ).length;
      onComplete?.(score, total);
    }
  };

  const score = evaluatedIndices.filter(
    (i) =>
      (dealClinic.transcript[i].verdict!.isGood && guesses[i] === 'good') ||
      (!dealClinic.transcript[i].verdict!.isGood && guesses[i] === 'weak')
  ).length;

  return (
    <div>
      {/* ── Progress ── */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-400 font-semibold">
          Evaluate each highlighted move — is it effective or not?
        </p>
        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
          revealed.size > 0
            ? 'border-emerald-200 bg-emerald-50 text-emerald-600'
            : 'border-gray-200 bg-gray-50 text-gray-400'
        }`}>
          ✓ {revealed.size} of {total} evaluated
        </span>
      </div>

      {/* ── Context banner ── */}
      <div className="mb-5 flex items-start gap-3 px-4 py-3.5 bg-[#F8FAFF] rounded-xl border border-blue-50">
        <span className="text-lg flex-shrink-0">📋</span>
        <div>
          <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#066EF5] mb-0.5">Context</p>
          <p className="text-sm text-gray-600 font-medium leading-relaxed">{dealClinic.context}</p>
        </div>
      </div>

      {/* ── Transcript ── */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden mb-4">
        {dealClinic.transcript.map((line, i) => {
          const colorClass = SPEAKER_COLORS[line.speakerColor] ?? SPEAKER_COLORS.blue;
          const isEvaluated = !!line.verdict;
          const userGuess = guesses[i];
          const isRevealed = revealed.has(i);
          const correct = line.verdict?.isGood;

          // Verdict state for styling
          const guessWasCorrect =
            isRevealed &&
            ((correct && userGuess === 'good') || (!correct && userGuess === 'weak'));

          return (
            <div
              key={i}
              className={`px-5 py-4 ${i < dealClinic.transcript.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              {/* Speaker + bubble */}
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0 mt-0.5 ${colorClass}`}>
                  {line.speaker[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">
                    {line.speaker}
                  </p>
                  <p className={`text-[15px] leading-relaxed ${
                    isEvaluated
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600'
                  }`}>
                    {isEvaluated && (
                      <span className="inline-block w-2 h-2 rounded-full bg-[#066EF5] mr-2 mb-0.5 flex-shrink-0 align-middle" />
                    )}
                    {line.text}
                  </p>
                </div>
              </div>

              {/* Evaluation zone — only for rated moves */}
              {isEvaluated && (
                <div className="mt-3 ml-12">
                  {!isRevealed ? (
                    /* ── Pre-guess: two buttons ── */
                    <div className="flex gap-2">
                      <button
                        onClick={() => guess(i, 'good')}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-semibold text-sm transition-all"
                      >
                        <ThumbUpIcon active={false} />
                        Good move
                      </button>
                      <button
                        onClick={() => guess(i, 'weak')}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-red-100 text-red-500 bg-red-50 hover:bg-red-100 font-semibold text-sm transition-all"
                      >
                        <ThumbDownIcon active={false} />
                        Weak move
                      </button>
                    </div>
                  ) : (
                    /* ── Post-guess: verdict + explanation ── */
                    <div className={`rounded-xl border px-4 py-3 ${
                      guessWasCorrect
                        ? 'bg-emerald-50 border-emerald-100'
                        : 'bg-red-50 border-red-100'
                    }`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-sm font-extrabold">
                          {guessWasCorrect ? '✓ Correct' : '✗ Not quite'}
                        </span>
                        <span className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                          correct
                            ? 'bg-emerald-200 text-emerald-800'
                            : 'bg-red-200 text-red-800'
                        }`}>
                          {correct ? 'Good move' : 'Weak move'}
                        </span>
                      </div>
                      <p className={`text-sm font-medium leading-relaxed ${
                        guessWasCorrect ? 'text-emerald-700' : 'text-red-700'
                      }`}>
                        {line.verdict!.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Legend ── */}
      <div className="flex items-center gap-4 px-4 py-3 bg-amber-50 border border-amber-100 rounded-xl mb-4">
        <span className="text-sm" aria-hidden="true">💡</span>
        <p className="text-sm text-amber-700 font-medium">
          <span className="font-extrabold">How to read it:</span> The blue dot marks a move you need to evaluate. Prospect lines are context only.
        </p>
      </div>

      {/* ── Final score ── */}
      {done && (
        <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-[20px] text-center">
          <p className="text-emerald-700 font-extrabold text-lg mb-1">
            Deal Clinic complete! {score}/{total} correct
          </p>
          <p className="text-emerald-600 text-sm font-semibold">
            {score === total
              ? 'Perfect read — you spotted every move.'
              : score >= total * 0.7
              ? 'Strong analysis. Review the explanations you missed.'
              : 'Keep going — re-read the dialogue and try again on a second lesson.'}
          </p>
        </div>
      )}
    </div>
  );
}
