'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { markStudyDay } from '@/lib/progress';

export interface ReviewCard {
  id: string;
  word: string;
  partOfSpeech: string | null;
  definition: string;
  example: string | null;
  image: string | null;
  isNew: boolean;
}

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function whenText(iso: string) {
  const d = new Date(iso);
  const days = Math.round((d.getTime() - Date.now()) / 86_400_000);
  if (days <= 0) return 'later today';
  if (days === 1) return 'tomorrow';
  return `in ${days} days (${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })})`;
}

/**
 * Flashcards: see the word, try to remember the meaning, then flip.
 * "I knew it" → comes back later; "Not yet" → shown again at the end of this session.
 */
export default function FlashcardReview({ cards, nextDue }: { cards: ReviewCard[]; nextDue: string | null }) {
  const [queue, setQueue] = useState(cards);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const card = queue[0];

  useEffect(() => setImageFailed(false), [card?.id]);
  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  // Keyboard: space/enter flips, 1 = not yet, 2 = knew it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!card) return;
      if (!flipped && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        setFlipped(true);
      } else if (flipped && e.key === '1') answer(false);
      else if (flipped && e.key === '2') answer(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const answer = (knew: boolean) => {
    if (!card) return;
    createClient().rpc('review_word', { p_entry: card.id, p_knew: knew });
    markStudyDay();
    setFlipped(false);
    if (knew) {
      setKnown((n) => n + 1);
      setQueue((q) => q.slice(1));
    } else {
      // Again at the end of this session
      setQueue((q) => [...q.slice(1), { ...q[0], isNew: false }]);
    }
  };

  if (!cards.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        <p className="text-3xl mb-2" aria-hidden="true">✅</p>
        <p className="text-[15px] text-slate-700">
          {nextDue ? `All caught up! Your next words are due ${whenText(nextDue)}.` : 'Save words from lessons to review them here.'}
        </p>
        <Link
          href={nextDue ? '/dictionary' : '/#categories'}
          className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {nextDue ? 'Back to My Dictionary' : 'Browse lessons'}
        </Link>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
        <p className="text-4xl mb-3" aria-hidden="true">🎉</p>
        <h2 className="font-playfair text-3xl font-semibold text-slate-900">Review done!</h2>
        <p className="mt-2 text-[15px] text-slate-600">
          You reviewed {known} {known === 1 ? 'word' : 'words'}. They&rsquo;ll come back when it&rsquo;s time to review them again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/dictionary" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Back to My Dictionary
          </Link>
          <Link
            href="/games"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600"
          >
            Play games with my words
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-3">
        <span className="font-semibold text-slate-500">
          {queue.length} {queue.length === 1 ? 'card' : 'cards'} left
        </span>
        <span className="text-emerald-700 font-semibold">✓ {known} known</span>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] overflow-hidden">
        {/* Front: the word */}
        <div className="px-6 pt-8 pb-6 text-center">
          {card.isNew && (
            <span className="inline-block mb-3 rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              New word
            </span>
          )}
          <div className="flex items-center justify-center gap-3">
            <h2 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 break-words">{card.word}</h2>
            <button
              type="button"
              onClick={() => speak(card.word)}
              aria-label={`Listen to ${card.word}`}
              className="w-10 h-10 rounded-full border border-slate-200 text-blue-600 hover:bg-blue-50 flex items-center justify-center flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" aria-hidden="true">
                <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" strokeLinejoin="round" />
                <path d="M15.5 9.2a4 4 0 010 5.6M18 6.8a7.5 7.5 0 010 10.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {card.partOfSpeech && <p className="mt-1 text-sm italic text-slate-500">{card.partOfSpeech}</p>}
        </div>

        {/* Back: meaning, picture, example */}
        {flipped ? (
          <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-6">
            {card.image && !imageFailed && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={card.image}
                alt=""
                onError={() => setImageFailed(true)}
                className="mx-auto mb-4 max-h-48 rounded-xl object-contain"
              />
            )}
            <p className="text-[17px] text-slate-900 leading-relaxed text-center">{card.definition}</p>
            {card.example && <p className="mt-3 text-[15px] italic text-slate-600 text-center">&ldquo;{card.example}&rdquo;</p>}
          </div>
        ) : (
          <div className="border-t border-slate-100 px-6 py-6 text-center">
            <p className="text-sm text-slate-500 mb-4">Do you remember what it means?</p>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              className="rounded-xl bg-blue-600 px-6 py-3 text-[15px] font-semibold text-white hover:bg-blue-700"
            >
              Show the answer
            </button>
          </div>
        )}
      </div>

      {flipped && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => answer(false)}
            className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-3 text-[15px] font-semibold text-amber-800 hover:bg-amber-100"
          >
            Not yet
            <span className="block text-xs font-normal text-amber-700">See it again soon</span>
          </button>
          <button
            type="button"
            onClick={() => answer(true)}
            className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-[15px] font-semibold text-emerald-800 hover:bg-emerald-100"
          >
            I knew it
            <span className="block text-xs font-normal text-emerald-700">See it again later</span>
          </button>
        </div>
      )}
    </div>
  );
}
