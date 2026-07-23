'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { getCatalog, describeRange, LEVEL_MIN, LEVEL_MAX } from '@/lib/series';
import LevelRangeSlider from '@/components/LevelRangeSlider';
import FallbackImage from '@/components/FallbackImage';
import { SiteHeader, SiteFooter, SearchIcon } from '@/components/SiteChrome';

/* ---------- feature icons ---------- */

function BookIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M12 6.5C10.4 5 8.2 4.5 5.5 4.5c-.8 0-1.5.1-2 .2v13.6c.5-.1 1.2-.2 2-.2 2.7 0 4.9.5 6.5 2 1.6-1.5 3.8-2 6.5-2 .8 0 1.5.1 2 .2V4.7c-.5-.1-1.2-.2-2-.2-2.7 0-4.9.5-6.5 2zM12 6.5v13.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldCheckIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6L12 3z" strokeLinejoin="round" />
      <path d="M9 12l2.2 2.2L15.5 9.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <path d="M18 6l3-3M18 6h2.5M18 6V3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparklesIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M12 4l1.8 4.7L18.5 10l-4.7 1.8L12 16.5l-1.8-4.7L5.5 10l4.7-1.3L12 4z" strokeLinejoin="round" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" strokeLinejoin="round" />
      <path d="M5 15.5l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7.7-1.6z" strokeLinejoin="round" />
    </svg>
  );
}

function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 340" fill="none" className={className} aria-hidden="true">
      <text
        x="150"
        y="230"
        textAnchor="middle"
        fontFamily="var(--font-playfair), 'Playfair Display', serif"
        fontSize="290"
        fill="#EDF0F5"
      >
        P
      </text>
      <g stroke="#E2E7EF" strokeWidth="3" strokeLinecap="round">
        <path d="M70 320c50-40 110-60 180-55" fill="none" />
        <path d="M120 295c-2-14 6-26 20-30 2 14-6 26-20 30zM165 282c-1-13 7-24 20-27 1 13-7 24-20 27zM212 274c0-12 8-22 20-24 0 12-8 22-20 24z" fill="#EDF0F5" stroke="none" />
      </g>
    </svg>
  );
}

const FEATURES = [
  {
    icon: BookIcon,
    title: 'Expertly Curated',
    text: 'Lessons created by experienced teachers and language experts.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Practical & Relevant',
    text: 'Real-life topics and tasks you can use immediately.',
  },
  {
    icon: TargetIcon,
    title: 'Progress with Purpose',
    text: 'Level-based learning that helps you grow step by step.',
  },
  {
    icon: SparklesIcon,
    title: 'Premium Experience',
    text: 'Beautiful design, no distractions — just effective learning.',
  },
];

function RangeLabel({ range }: { range: [number, number] }) {
  const r = describeRange(range);
  return (
    <span className="flex items-center gap-1.5 text-xs flex-wrap">
      <span className="font-bold text-blue-600">{r.minCode}</span>
      <span className="text-slate-500 font-medium">{r.minBand}</span>
      {!r.same && (
        <>
          <span className="text-slate-300" aria-hidden="true">
            –
          </span>
          <span className="font-bold text-blue-600">{r.maxCode}</span>
          <span className="text-slate-500 font-medium">{r.maxBand}</span>
        </>
      )}
    </span>
  );
}

export default function Home() {
  const catalog = useMemo(() => getCatalog(), []);
  const [levelRange, setLevelRange] = useState<[number, number]>([LEVEL_MIN, LEVEL_MAX]);
  const [search, setSearch] = useState('');

  const query = search.trim().toLowerCase();
  const [selLo, selHi] = levelRange;

  const visible = catalog.filter((c) => {
    if (c.range[0] > selHi || c.range[1] < selLo) return false;
    if (
      query &&
      !c.name.toLowerCase().includes(query) &&
      !c.cardTitle.toLowerCase().includes(query) &&
      !c.description.toLowerCase().includes(query)
    )
      return false;
    return true;
  });

  const totalLessons = visible.reduce((n, c) => n + c.lessons.length, 0);
  const filtersActive = query !== '' || selLo !== LEVEL_MIN || selHi !== LEVEL_MAX;

  return (
    <div id="top" className="min-h-screen bg-[#F6F8FB] font-poppins text-slate-900">
      <SiteHeader active="Home" />

      {/* ---------- Hero ---------- */}
      <section className="relative bg-white overflow-hidden">
        <LeafMark className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[300px] h-auto pointer-events-none select-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-9 relative">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-3">
            Curated English Lessons
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 uppercase mb-4">
            Lesson Materials
          </h1>
          <p className="text-base text-slate-500 max-w-xl leading-relaxed">
            Thoughtfully designed lessons to help you learn English with clarity, confidence, and
            real-world purpose. Search by level or interests.
          </p>
        </div>
      </section>

      {/* ---------- Filter bar ---------- */}
      <div id="levels" className="max-w-7xl mx-auto px-4 sm:px-6 -mb-2 relative z-10 scroll-mt-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {/* Level range slider */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
                Level
              </span>
              <RangeLabel range={levelRange} />
            </div>
            <LevelRangeSlider value={levelRange} onChange={setLevelRange} />
          </div>

          {/* Category search */}
          <div className="px-6 py-4">
            <label
              htmlFor="category-search"
              className="block text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase mb-3"
            >
              Search Materials
            </label>
            <div className="relative">
              <SearchIcon className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="category-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Football or Marketing"
                className="w-full h-11 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50/60 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />
            </div>
            <p className="mt-2.5 text-xs text-slate-400" aria-live="polite">
              {visible.length} categor{visible.length === 1 ? 'y' : 'ies'} · {totalLessons} lesson
              {totalLessons !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Category cards ---------- */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 pt-9 pb-12 scroll-mt-20">
        {visible.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl py-16 px-6 text-center">
            <p className="text-lg font-semibold text-slate-900 mb-2">No materials found</p>
            <p className="text-sm text-slate-500 mb-6">
              Try a different search term, or widen the level range to see everything.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setLevelRange([LEVEL_MIN, LEVEL_MAX]);
              }}
              className="inline-flex items-center h-11 px-6 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((c) => (
              <Link
                key={c.id}
                href={`/categories/${c.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 transition-all duration-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <FallbackImage
                    srcs={[c.image, c.stockImage]}
                    alt={c.imageAlt}
                    width={900}
                    height={506}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">
                    {c.cardTitle}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{c.description}</p>
                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 flex-wrap">
                    <RangeLabel range={c.range} />
                    <span className="text-xs text-slate-400 font-medium">
                      {c.lessons.length} lessons
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filtersActive && visible.length > 0 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setLevelRange([LEVEL_MIN, LEVEL_MAX]);
              }}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded-lg px-3 py-2"
            >
              Clear filters — show all materials
            </button>
          </div>
        )}
      </section>

      {/* ---------- Features strip ---------- */}
      <section id="about" className="bg-white border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:divide-x lg:divide-slate-100">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0">
              <span className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                <f.icon className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
