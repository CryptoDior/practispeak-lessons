'use client';
import { useEffect, useState } from 'react';
import type { GameSet } from '@/data/gameTypes';

/**
 * Game picture with an emoji fallback. fit="contain" (lesson pictures) shows the whole image,
 * with a blurred copy filling the box so nothing important gets cropped.
 */
export function SceneImage({
  image,
  scene,
  word,
  fit = 'cover',
  emojiClass = 'text-6xl sm:text-7xl',
}: {
  image: string;
  scene: string;
  word: string;
  fit?: 'cover' | 'contain';
  emojiClass?: string;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [image]);
  if (failed) {
    return (
      <div className={`w-full h-full flex items-center justify-center select-none ${emojiClass}`} aria-label={word}>
        {scene}
      </div>
    );
  }
  if (fit === 'contain') {
    return (
      <div className="relative w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-80" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-contain" onError={() => setFailed(true)} />
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={image} alt="" className="w-full h-full object-cover" onError={() => setFailed(true)} />;
}

function TopicCard({
  s,
  onOpen,
  round,
  emojiBg,
}: {
  s: GameSet;
  onOpen: (s: GameSet) => void;
  round: boolean;
  emojiBg: string;
}) {
  const shape = round ? 'rounded-full' : 'rounded-xl';
  return (
    <button
      type="button"
      onClick={() => onOpen(s)}
      className="group text-left bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all p-5 flex items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
    >
      {s.lessonSlug ? (
        // Lesson topics: a thumbnail of their first picture
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.items[0].image} alt="" loading="lazy" className={`w-12 h-12 ${shape} object-cover flex-shrink-0 bg-slate-100`} />
      ) : (
        <span className={`w-12 h-12 ${shape} ${emojiBg} flex items-center justify-center flex-shrink-0 text-2xl`}>
          {s.items[0].scene}
        </span>
      )}
      <span className="min-w-0">
        <span className="block font-playfair text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
          {s.label}
        </span>
        <span className="block text-sm text-slate-500">{s.blurb}</span>
        <span className="block text-xs text-slate-400 mt-0.5">{s.items.length} words</span>
      </span>
    </button>
  );
}

/**
 * Topic picker: topics made from lessons first (grouped, e.g. "Everyday Life · A1–A2"),
 * then the game's own topics.
 */
export function TopicPicker<T extends GameSet>({
  lessonSets,
  sets,
  onOpen,
  round = false,
  emojiBg = 'bg-amber-50',
}: {
  lessonSets: T[];
  sets: T[];
  onOpen: (s: T) => void;
  /** round icons (Fast Vocab) instead of rounded squares */
  round?: boolean;
  /** background behind the emoji icons */
  emojiBg?: string;
}) {
  const open = onOpen as (s: GameSet) => void;
  const groups = Array.from(new Set(lessonSets.map((s) => s.group ?? 'Lesson words')));
  return (
    <>
      {groups.map((group) => (
        <section key={group} className="mb-10">
          <p className="text-center text-sm font-semibold text-slate-500 mb-1">From your lessons</p>
          <h2 className="text-center font-playfair text-2xl font-semibold text-slate-900 mb-4">{group}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {lessonSets
              .filter((s) => (s.group ?? 'Lesson words') === group)
              .map((s) => (
                <TopicCard key={s.id} s={s} onOpen={open} round={round} emojiBg={emojiBg} />
              ))}
          </div>
        </section>
      ))}
      <p className="text-center text-sm font-semibold text-slate-500 mb-4">
        {lessonSets.length ? 'More topics' : 'Choose a topic'}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {sets.map((s) => (
          <TopicCard key={s.id} s={s} onOpen={open} round={round} emojiBg={emojiBg} />
        ))}
      </div>
    </>
  );
}
