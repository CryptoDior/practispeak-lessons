'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import WordEntryCard from '@/components/WordEntryCard';
import { DictionaryProvider } from '@/components/dictionary/DictionaryProvider';
import { SearchIcon } from '@/components/SiteChrome';

export interface DictionaryItem {
  id: string;
  word: string;
  word_key: string;
  part_of_speech: string | null;
  definition: string;
  example: string | null;
  in_game: string | null;
  in_real_life: string | null;
  image_slug: string | null;
  audio_slugs: string[] | null;
  lesson_slug: string | null;
  created_at: string;
  source: { label: string; href: string; category: string } | null;
}

/** The student's saved words: search, filter by category, listen, open the lesson, remove. */
export default function DictionaryView({ entries }: { entries: DictionaryItem[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');

  const categories = useMemo(
    () => Array.from(new Set(entries.map((e) => e.source?.category).filter(Boolean) as string[])).sort(),
    [entries]
  );

  const q = query.trim().toLowerCase();
  const shown = entries.filter(
    (e) =>
      (category === 'all' || e.source?.category === category) &&
      (!q || e.word.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q))
  );

  return (
    <DictionaryProvider initialKeys={entries.map((e) => e.word_key)}>
      <div className="font-poppins max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <header className="mb-6">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-2">Your words</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-slate-900">My Dictionary</h1>
          <p className="mt-2 text-[15px] text-slate-600">
            {entries.length === 0
              ? 'Words you save from lessons appear here.'
              : `${entries.length} saved ${entries.length === 1 ? 'word' : 'words'} — with meanings, examples and audio.`}
          </p>
        </header>

        {entries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="text-[15px] text-slate-700">
              Open any lesson and tap <strong>Save</strong> on a vocabulary or phrase card to keep it here.
            </p>
            <Link
              href="/#categories"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Browse lessons
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center">
              <label className="relative flex-1">
                <span className="sr-only">Search your words</span>
                <SearchIcon className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search your words"
                  className="w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 py-2.5 text-[15px] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </label>
              {categories.length > 1 && (
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                  {['all', ...categories].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      aria-pressed={category === c}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        category === c
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-300 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600'
                      }`}
                    >
                      {c === 'all' ? 'All' : c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {shown.length === 0 ? (
              <p className="text-[15px] text-slate-600">No saved words match “{query}”.</p>
            ) : (
              <div className="space-y-6">
                {shown.map((e) => (
                  <WordEntryCard
                    key={e.id}
                    title={e.word}
                    tag={e.part_of_speech ?? undefined}
                    definition={e.definition}
                    example={e.example ?? ''}
                    inGame={e.in_game ?? undefined}
                    inRealLife={e.in_real_life ?? undefined}
                    imageSlug={e.image_slug ?? ''}
                    audioSlugs={e.audio_slugs ?? []}
                    lessonSlug={e.lesson_slug ?? undefined}
                    listenLabel="Listen to word"
                    source={e.source ?? undefined}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </DictionaryProvider>
  );
}
