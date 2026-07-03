import Link from 'next/link';
import { lessons } from '@/data/lessons';
import LevelBadge from '@/components/LevelBadge';

const SERIES = [
  {
    id: 'roblox',
    name: 'Roblox English',
    emoji: '🎮',
    description: 'Learn English through Roblox — avatars, games, chat, and more.',
    match: (slug: string) => slug.startsWith('roblox-'),
  },
  {
    id: 'football-c1',
    name: 'Football English · C1',
    emoji: '⚽',
    description: 'Advanced football vocabulary for coaches, analysts, and journalists.',
    match: (slug: string) => slug.startsWith('c1-'),
  },
  {
    id: 'football-c2',
    name: 'Football English · C2',
    emoji: '⚽',
    description: 'Expert-level football English — punditry and tactical mastery.',
    match: (slug: string) => slug.startsWith('c2-'),
  },
  {
    id: 'general',
    name: 'All Other Lessons',
    emoji: '📚',
    description: 'Marketing, sales, football basics, and more.',
    match: () => true,
  },
];

export default function Home() {
  // Bucket lessons into series (first match wins; 'general' is the catch-all)
  const assigned = new Set<string>();
  const grouped = SERIES.map((series) => {
    const sl = lessons.filter((l) => !assigned.has(l.slug) && series.match(l.slug));
    sl.forEach((l) => assigned.add(l.slug));
    return { ...series, lessons: sl };
  }).filter((g) => g.lessons.length > 0);

  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#066EF5] rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-extrabold text-lg leading-none">P</span>
          </div>
          <div>
            <p className="text-lg font-extrabold text-[#066EF5] leading-tight">Practispeak</p>
            <p className="text-xs text-gray-400 font-semibold leading-tight">practispeak.com</p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1245CE] to-[#066EF5] text-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Learn English Through What You Love
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-semibold">
            Master real-world English through gaming, football, and more. Interactive lessons packed
            with vocabulary, phrasal verbs, and dialogue.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Series nav pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {grouped.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm text-sm font-extrabold text-gray-700 hover:bg-[#066EF5] hover:text-white hover:border-[#066EF5] transition-all duration-150"
            >
              <span>{g.emoji}</span>
              <span>{g.name}</span>
              <span className="ml-1 text-xs font-semibold opacity-50">{g.lessons.length}</span>
            </a>
          ))}
        </div>

        {/* Series sections */}
        {grouped.map((series) => (
          <section key={series.id} id={series.id} className="mb-16 scroll-mt-8">
            {/* Section header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                  <span>{series.emoji}</span>
                  <span>{series.name}</span>
                </h2>
                <p className="text-sm text-gray-400 font-semibold mt-0.5">{series.description}</p>
              </div>
              <span className="text-sm text-gray-400 font-semibold">
                {series.lessons.length} lesson{series.lessons.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Lesson cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {series.lessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={lesson.externalUrl ?? `/lessons/${lesson.slug}`}
                  className="group bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.07)] p-6 hover:shadow-[0_6px_28px_rgba(6,110,245,0.14)] hover:-translate-y-0.5 transition-all duration-200 block"
                >
                  <div className="mb-3">
                    <LevelBadge level={lesson.level} />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-[#066EF5] transition-colors leading-snug">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed font-semibold">
                    {lesson.description}
                  </p>

                  <div className="flex gap-3 text-xs text-gray-400 font-semibold mb-5">
                    {lesson.externalUrl ? (
                      <span>8 phrases · 3 exercises · Speaking</span>
                    ) : (
                      <>
                        <span>{lesson.vocabulary.length} words</span>
                        <span>·</span>
                        <span>{lesson.phrasalVerbs.length} phrasal verbs</span>
                        <span>·</span>
                        <span>3 exercises</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-extrabold text-[#066EF5]">
                    Start Lesson
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-blue-100 mt-16 py-8 text-center text-gray-400 text-sm font-semibold">
        © {new Date().getFullYear()} Practispeak · practispeak.com
      </footer>
    </div>
  );
}
