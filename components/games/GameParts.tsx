'use client';
import { useEffect, useState } from 'react';
import type { GameSet } from '@/data/gameTypes';
import { createClient } from '@/lib/supabase/client';
import { resolveImageUrl } from '@/lib/images';

/** Which saved words a game can use: `pattern` (e.g. single words only) and whether it needs pictures. */
export interface MyWordsOptions {
  pattern: RegExp;
  needsImage: boolean;
}

const MY_WORDS_MIN = 4;
const MY_WORDS_MAX = 15;

/**
 * A topic made from the student's own My Dictionary words (logged-in students only).
 * null while loading, when logged out, or with fewer than 4 usable words.
 */
function useMyWordsSet(opts: MyWordsOptions | undefined): GameSet | null {
  const [set, setSet] = useState<GameSet | null>(null);
  const pattern = opts?.pattern.source;
  const needsImage = opts?.needsImage;
  useEffect(() => {
    if (!pattern || !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return;
    const re = new RegExp(pattern);
    let cancelled = false;
    (async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) return;
      // Row Level Security returns only this student's words.
      const { data } = await supabase.from('dictionary_entries').select('word, image_slug');
      if (cancelled || !data) return;
      const seen = new Set<string>();
      const items = data
        .map((r) => ({ word: (r.word as string).trim().toLowerCase(), image: r.image_slug ? resolveImageUrl(r.image_slug) : null }))
        .filter((r) => re.test(r.word) && (!needsImage || r.image) && !seen.has(r.word) && seen.add(r.word))
        .map((r) => ({ word: r.word, image: r.image ?? '', scene: '⭐', fit: 'contain' as const }));
      if (items.length < MY_WORDS_MIN) return;
      // A different mix of up to 15 words each time
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      setSet({
        id: 'my-dictionary',
        label: 'My Dictionary',
        blurb: 'Words you saved from lessons.',
        items: items.slice(0, MY_WORDS_MAX),
        group: 'My Dictionary',
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [pattern, needsImage]);
  return set;
}

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
  myWords,
}: {
  lessonSets: T[];
  sets: T[];
  onOpen: (s: T) => void;
  /** round icons (Fast Vocab) instead of rounded squares */
  round?: boolean;
  /** background behind the emoji icons */
  emojiBg?: string;
  /** Also offer a topic made from the student's saved words */
  myWords?: MyWordsOptions;
}) {
  const open = onOpen as (s: GameSet) => void;
  const mySet = useMyWordsSet(myWords);
  const groups = Array.from(new Set(lessonSets.map((s) => s.group ?? 'Lesson words')));
  return (
    <>
      {mySet && (
        <section className="mb-10">
          <p className="text-center text-sm font-semibold text-slate-500 mb-1">Your words</p>
          <h2 className="text-center font-playfair text-2xl font-semibold text-slate-900 mb-4">My Dictionary</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <TopicCard s={mySet} onOpen={open} round={round} emojiBg={emojiBg} />
          </div>
        </section>
      )}
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
