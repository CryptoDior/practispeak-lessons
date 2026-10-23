'use client';
import { useState } from 'react';
import { VocabWord } from '@/types/lesson';
import { resolveImageUrl } from '@/lib/images';

/**
 * Name This — each vocabulary picture is shown on its own. The student says the word,
 * then taps the card (or "Reveal") and it flips over to show the word behind the photo.
 * Turn it on for a lesson with  nameThis: true   (leave words out with nameThisSkip).
 */

const nice = (w: string) => w.charAt(0) + w.slice(1).toLowerCase();

export default function NameThis({ vocabulary, skip = [] }: { vocabulary: VocabWord[]; skip?: string[] }) {
  const skipSet = new Set(skip.map((s) => s.toUpperCase()));
  const words = vocabulary.filter((w) => w.imageSlug && !skipSet.has(w.word.toUpperCase()));
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  const allOpen = open.size === words.length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <p className="text-gray-600 font-semibold">Look at each picture and say the word. Tap the card to check.</p>
        <button
          type="button"
          onClick={() => setOpen(allOpen ? new Set() : new Set(words.map((_, i) => i)))}
          className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:border-[#066EF5] hover:text-[#066EF5] transition-all"
        >
          {allOpen ? 'Hide all' : 'Reveal all'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {words.map((w, i) => {
          const src = resolveImageUrl(w.imageSlug) ?? '';
          const flipped = open.has(i);
          return (
            <div key={w.word} className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-label={flipped ? w.word : `Picture ${i + 1} — tap to reveal the word`}
                className="relative w-full aspect-square"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500"
                  style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'none' }}
                >
                  {/* Front: the picture */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-[0_2px_16px_rgba(6,110,245,0.08)]"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-contain" />
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 text-[#066EF5] font-extrabold flex items-center justify-center shadow">
                      {i + 1}
                    </span>
                  </div>
                  {/* Back: the word */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#066EF5] to-blue-700 text-white flex flex-col items-center justify-center p-4 shadow-[0_4px_20px_rgba(6,110,245,0.3)]"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <span className="text-xs font-extrabold tracking-[0.2em] uppercase opacity-70 mb-2">{i + 1}</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-center leading-tight">{nice(w.word)}</span>
                    {w.partOfSpeech && <span className="mt-3 text-sm font-semibold opacity-80">{w.partOfSpeech}</span>}
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => toggle(i)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  flipped ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-[#066EF5] text-white hover:bg-blue-600'
                }`}
              >
                {flipped ? 'Show picture' : 'Reveal'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
