import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'Games | Practispeak',
  description:
    'Play free English learning games. Build sentences, practise grammar, and have fun improving your English.',
};

interface GameCard {
  id: string;
  href: string;
  title: string;
  blurb: string;
  tags: string[];
  emoji: string;
  ready: boolean;
}

const GAMES: GameCard[] = [
  {
    id: 'monster-phrases',
    href: '/games/monster-phrases',
    title: 'Monster Phrases',
    blurb:
      'Look at the picture, then tap the words in the right order to build the sentence. Keep the monster happy!',
    tags: ['Grammar', 'Sentence building', 'A1–A2'],
    emoji: '👾',
    ready: true,
  },
  {
    id: 'spelling-bee',
    href: '/games/spelling-bee',
    title: 'Spelling Bee',
    blurb: 'Look at the picture and spell the word, letter by letter, on the keyboard.',
    tags: ['Spelling', 'Vocabulary', 'A1–A2'],
    emoji: '🐝',
    ready: true,
  },
  {
    id: 'daily-routines',
    href: '/games/daily-routines',
    title: 'Daily Routines',
    blurb: 'Listen to the phrase, then tap the matching picture out of three.',
    tags: ['Listening', 'Vocabulary', 'A1–A2'],
    emoji: '🌅',
    ready: true,
  },
  {
    id: 'hangman',
    href: '/games/hangman',
    title: 'Hangman',
    blurb: 'Guess the hidden word one letter at a time before the drawing is finished.',
    tags: ['Spelling', 'Vocabulary', 'A2–B1'],
    emoji: '🎯',
    ready: true,
  },
  {
    id: 'word-search',
    href: '/games/word-search',
    title: 'Word Search',
    blurb: 'Find the hidden words that match the pictures, hidden across, down, and diagonally.',
    tags: ['Spelling', 'Vocabulary', 'A1–A2'],
    emoji: '🔎',
    ready: true,
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-poppins text-slate-900">
      <SiteHeader active="Games" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        <div className="mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">Play & Learn</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-3">Games</h1>
          <p className="text-base text-slate-500 max-w-xl leading-relaxed">
            Practise your English by playing. Quick, fun games to build grammar and vocabulary — no
            pressure, just play.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g) => (
            <Link
              key={g.id}
              href={g.href}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_40px_rgba(37,99,235,0.14)] hover:-translate-y-1 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 flex flex-col"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {g.emoji}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-playfair text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {g.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{g.blurb}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {/* Coming soon placeholder */}
          <div className="rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center p-6 text-center min-h-[220px]">
            <div>
              <p className="text-2xl mb-2" aria-hidden="true">✨</p>
              <p className="text-sm font-semibold text-slate-500">More games coming soon</p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
