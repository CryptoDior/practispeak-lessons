import Link from 'next/link';
import { lessons } from '@/data/lessons';
import LevelBadge from '@/components/LevelBadge';

export default function Home() {
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
            Learn English Through Gaming
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-semibold">
            Master real-world English the way gamers actually speak. Interactive lessons packed
            with gaming vocabulary, phrasal verbs, and dialogue.
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900">Available Lessons</h2>
          <span className="text-sm text-gray-400 font-semibold">
            {lessons.length} lesson{lessons.length !== 1 ? 's' : ''} available
          </span>
        </div>

        {lessons.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-4 select-none">🎮</p>
            <p className="text-lg font-semibold">No lessons yet — check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
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
        )}
      </main>

      <footer className="border-t border-blue-100 mt-16 py-8 text-center text-gray-400 text-sm font-semibold">
        © {new Date().getFullYear()} Practispeak · practispeak.com
      </footer>
    </div>
  );
}
