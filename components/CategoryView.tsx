'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BANDS, Band, bandForLevel, bandOfIndex, codeOfIndex } from '@/lib/levels';
import { SiteHeader, SiteFooter, ArrowLeftIcon, ChevronDownIcon } from '@/components/SiteChrome';

/* Serializable shapes passed from the server route (see app/categories/[slug]/page.tsx) */
export interface CategoryLesson {
  slug: string;
  title: string;
  description: string;
  level: string;
  externalUrl?: string;
  words: number;
  phrasals: number;
}

export interface CategoryData {
  id: string;
  name: string;
  cardTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  range: [number, number];
  lessons: CategoryLesson[];
}

export interface CategoryPromo {
  id: string;
  cardTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  range: [number, number];
  count: number;
}

const INITIAL_ROWS = 5;

/* Descriptions for each course-style level section, Engoo-style */
const BAND_BLURBS: Record<string, string> = {
  beginner: 'Foundation lessons to build core vocabulary and speak with confidence.',
  intermediate: 'Grow your fluency with richer vocabulary and real conversations.',
  advanced: 'Sharpen precision and nuance for demanding, real-world situations.',
  proficient: 'Master subtle, near-native language for the most complex contexts.',
};

/* Square level chips, coloured by band — same palette as the lesson badges */
const BAND_CHIP: Record<string, string> = {
  beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  intermediate: 'bg-blue-50 text-blue-700 border-blue-200',
  advanced: 'bg-purple-50 text-purple-700 border-purple-200',
  proficient: 'bg-purple-50 text-purple-700 border-purple-200',
};

function ChevronRightIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LevelChip({ code, band }: { code: string; band: Band }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`inline-flex items-center justify-center min-w-[2rem] h-8 px-1.5 rounded-lg border text-sm font-bold ${
          BAND_CHIP[band.id] ?? BAND_CHIP.intermediate
        }`}
      >
        {code}
      </span>
      <span className="text-[15px] font-medium text-slate-700">{band.label}</span>
    </span>
  );
}

function CourseSection({
  title,
  blurb,
  lessons,
}: {
  title: string;
  blurb: string;
  lessons: CategoryLesson[];
}) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = lessons.length > INITIAL_ROWS + 1;
  const shown = expanded || !collapsible ? lessons : lessons.slice(0, INITIAL_ROWS);
  const hidden = lessons.length - shown.length;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] overflow-hidden mb-8">
      <div className="px-6 sm:px-8 pt-7 pb-5">
        <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
        <span className="block w-10 h-0.5 bg-blue-600 mt-2.5 mb-3" aria-hidden="true" />
        <p className="text-sm text-slate-500">{blurb}</p>
      </div>

      <ol className="divide-y divide-slate-100 border-t border-slate-100">
        {shown.map((l, i) => {
          const band = bandForLevel(l.level);
          return (
            <li key={l.slug}>
              <Link
                href={l.externalUrl ?? `/lessons/${l.slug}`}
                className="group flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 hover:bg-blue-50/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:-outline-offset-2"
              >
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] w-24 flex-shrink-0">
                  Lesson {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 min-w-0 text-[16px] text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                  {l.title}
                </span>
                <span className="hidden sm:inline-flex">
                  <LevelChip code={l.level} band={band} />
                </span>
                <span
                  className={`sm:hidden inline-flex items-center justify-center min-w-[2rem] h-7 px-1.5 rounded-lg border text-xs font-bold ${
                    BAND_CHIP[band.id] ?? BAND_CHIP.intermediate
                  }`}
                >
                  {l.level}
                </span>
                <ChevronRightIcon className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            </li>
          );
        })}
      </ol>

      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 border-t border-slate-100 text-sm font-semibold text-blue-600 hover:bg-blue-50/60 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:-outline-offset-2"
        >
          {expanded ? 'Show less' : `Show more (${hidden})`}
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      )}
    </section>
  );
}

export default function CategoryView({
  category,
  others,
}: {
  category: CategoryData;
  others: CategoryPromo[];
}) {
  const sections = BANDS.map((band) => ({
    band,
    lessons: category.lessons.filter((l) => bandForLevel(l.level).id === band.id),
  })).filter((s) => s.lessons.length > 0);

  const [lo, hi] = category.range;
  const loBand = bandOfIndex(lo);
  const hiBand = bandOfIndex(hi);

  return (
    <div className="min-h-screen bg-[#F6F8FB] font-poppins text-slate-900">
      <SiteHeader active="Categories" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <Link
          href="/#categories"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded-lg"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          All materials
        </Link>

        {/* ---------- Category header card ---------- */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div className="relative flex-shrink-0 w-full md:w-[46%] p-4 md:p-5 md:pr-9 md:min-h-[290px]">
              <div className="relative h-48 md:h-full">
                <div
                  className="hidden md:block absolute inset-0 translate-x-2.5 border-0 border-r-2 border-b-2 border-blue-300 pointer-events-none [border-radius:1rem_1rem_62%_1rem/1rem_1rem_95%_1rem]"
                  aria-hidden="true"
                />
                <div className="relative h-full overflow-hidden rounded-2xl md:[border-radius:1rem_1rem_62%_1rem/1rem_1rem_95%_1rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    width={900}
                    height={563}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-8 md:py-10">
              <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-slate-900 mb-5">
                {category.name}
              </h1>
              <div className="flex items-center gap-4 flex-wrap mb-5">
                <LevelChip code={codeOfIndex(lo)} band={loBand} />
                {(lo !== hi || loBand.id !== hiBand.id) && (
                  <>
                    <span className="w-px h-6 bg-slate-200" aria-hidden="true" />
                    <LevelChip code={codeOfIndex(hi)} band={hiBand} />
                  </>
                )}
              </div>
              <p className="text-slate-500 leading-relaxed">{category.description}</p>
            </div>
          </div>
        </section>

        {/* ---------- Course sections ---------- */}
        {sections.map(({ band, lessons: ls }) => (
          <CourseSection
            key={band.id}
            title={band.label}
            blurb={BAND_BLURBS[band.id] ?? ''}
            lessons={ls}
          />
        ))}

        {/* ---------- Cross-promo ---------- */}
        {others.length > 0 && (
          <section className="mt-14">
            <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-1">
              Want more materials?
            </h2>
            <p className="text-sm text-slate-500 mb-6">Explore our other lesson categories.</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 3).map((o) => {
                const oLoBand = bandOfIndex(o.range[0]);
                const oHiBand = bandOfIndex(o.range[1]);
                return (
                  <Link
                    key={o.id}
                    href={`/categories/${o.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.1)] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                  >
                    <div className="aspect-[16/7] overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={o.image}
                        alt={o.imageAlt}
                        width={900}
                        height={394}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-playfair text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {o.cardTitle}
                      </h3>
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs">
                          <span className="font-bold text-blue-600">{codeOfIndex(o.range[0])}</span>
                          <span className="text-slate-500 font-medium">{oLoBand.label}</span>
                          {o.range[0] !== o.range[1] && (
                            <>
                              <span className="text-slate-300" aria-hidden="true">
                                –
                              </span>
                              <span className="font-bold text-blue-600">
                                {codeOfIndex(o.range[1])}
                              </span>
                              <span className="text-slate-500 font-medium">{oHiBand.label}</span>
                            </>
                          )}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {o.count} lessons
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
