'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  BANDS,
  Band,
  LEVEL_MIN,
  LEVEL_MAX,
  bandForLevel,
  bandOfIndex,
  codeOfIndex,
  describeRange,
  levelToRange,
} from '@/lib/levels';
import LevelRangeSlider from '@/components/LevelRangeSlider';
import FallbackImage from '@/components/FallbackImage';
import {
  SiteHeader,
  SiteFooter,
  ArrowLeftIcon,
  ChevronDownIcon,
  SearchIcon,
} from '@/components/SiteChrome';

/* Serializable shapes passed from the server route (see app/categories/[slug]/page.tsx) */
export interface CategoryLesson {
  slug: string;
  title: string;
  description: string;
  level: string;
  externalUrl?: string;
  heroImage?: string;
  words: number;
  phrasals: number;
}

export interface CategoryData {
  id: string;
  name: string;
  cardTitle: string;
  description: string;
  image: string;
  stockImage: string;
  imageAlt: string;
  range: [number, number];
  lessons: CategoryLesson[];
}

export interface CategoryPromo {
  id: string;
  cardTitle: string;
  description: string;
  image: string;
  stockImage: string;
  imageAlt: string;
  range: [number, number];
  count: number;
}

const INITIAL_CARDS = 6;

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

/* Engoo-style compact "Level ▾" button that opens the range slider in a popover */
function LevelDropdown({
  value,
  onChange,
}: {
  value: [number, number];
  onChange: (v: [number, number]) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [lo, hi] = value;
  const active = lo !== LEVEL_MIN || hi !== LEVEL_MAX;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`h-9 px-3 rounded-lg border text-sm font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
          active
            ? 'border-blue-300 bg-blue-50 text-blue-700'
            : 'border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-300'
        }`}
      >
        {active ? `${codeOfIndex(lo)}–${codeOfIndex(hi)}` : 'Level'}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-[min(90vw,340px)] bg-white rounded-xl border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.14)] p-5 z-30">
          <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
            <span className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
              Level
            </span>
            <RangeLabel range={value} />
          </div>
          <LevelRangeSlider value={value} onChange={onChange} />
          {active && (
            <button
              type="button"
              onClick={() => onChange([LEVEL_MIN, LEVEL_MAX])}
              className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded"
            >
              Reset to all levels
            </button>
          )}
        </div>
      )}
    </div>
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

function LessonCard({ lesson, fallbacks }: { lesson: CategoryLesson; fallbacks: string[] }) {
  const band = bandForLevel(lesson.level);
  const srcs = [lesson.heroImage, ...fallbacks].filter(Boolean) as string[];
  return (
    <Link
      id={`ls-${lesson.slug}`}
      href={lesson.externalUrl ?? `/lessons/${lesson.slug}`}
      onClick={() => {
        try {
          sessionStorage.setItem('ps-return-lesson', lesson.slug);
        } catch {}
      }}
      className="group scroll-mt-24 bg-white rounded-xl overflow-hidden border border-slate-200 transition-all duration-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 flex flex-col"
    >
      <div className="aspect-[16/9] overflow-hidden bg-slate-100">
        <FallbackImage
          srcs={srcs}
          alt=""
          width={640}
          height={360}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[15px] font-semibold text-slate-900 leading-snug mb-4 group-hover:text-blue-700 transition-colors">
          {lesson.title}
        </h3>
        <div className="mt-auto flex items-center gap-2">
          <span
            className={`inline-flex items-center justify-center min-w-[1.75rem] h-7 px-1.5 rounded-lg border text-xs font-bold ${
              BAND_CHIP[band.id] ?? BAND_CHIP.intermediate
            }`}
          >
            {lesson.level}
          </span>
          <span className="text-[13px] font-medium text-slate-600">{band.label}</span>
        </div>
      </div>
    </Link>
  );
}

function CourseSection({
  title,
  blurb,
  lessons,
  fallbacks,
  forceExpanded = false,
}: {
  title: string;
  blurb: string;
  lessons: CategoryLesson[];
  fallbacks: string[];
  forceExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = !forceExpanded && lessons.length > INITIAL_CARDS;
  const shown = expanded || !collapsible ? lessons : lessons.slice(0, INITIAL_CARDS);
  const hidden = lessons.length - shown.length;

  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
        <span className="block w-10 h-0.5 bg-blue-600 mt-2.5 mb-3" aria-hidden="true" />
        <p className="text-sm text-slate-500">{blurb}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((l) => (
          <LessonCard key={l.slug} lesson={l} fallbacks={fallbacks} />
        ))}
      </div>

      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-blue-600 hover:bg-blue-50/60 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:-outline-offset-2"
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
  const [search, setSearch] = useState('');
  const [levelRange, setLevelRange] = useState<[number, number]>([LEVEL_MIN, LEVEL_MAX]);

  // When returning from a lesson (browser back), jump back to the lesson we came
  // from so it's easy to pick the next one — instead of landing at the bottom.
  const [returnSlug, setReturnSlug] = useState<string | null>(null);
  useEffect(() => {
    let slug: string | null = null;
    try {
      slug = sessionStorage.getItem('ps-return-lesson');
    } catch {}
    if (slug && category.lessons.some((l) => l.slug === slug)) {
      setReturnSlug(slug);
      try {
        sessionStorage.removeItem('ps-return-lesson');
      } catch {}
    }
  }, [category.lessons]);

  useEffect(() => {
    if (!returnSlug) return;
    const scrollToLesson = () => {
      document.getElementById(`ls-${returnSlug}`)?.scrollIntoView({ block: 'center' });
    };
    // Run after paint (and once more) so it wins over the browser's own
    // scroll-restoration, which otherwise lands at the bottom of the page.
    const raf = requestAnimationFrame(() => requestAnimationFrame(scrollToLesson));
    const timer = setTimeout(scrollToLesson, 140);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [returnSlug]);

  const query = search.trim().toLowerCase();
  const [selLo, selHi] = levelRange;
  const filtersActive = query !== '' || selLo !== LEVEL_MIN || selHi !== LEVEL_MAX;

  const clearFilters = () => {
    setSearch('');
    setLevelRange([LEVEL_MIN, LEVEL_MAX]);
  };

  const visibleLessons = category.lessons.filter((l) => {
    const [a, b] = levelToRange(l.level);
    if (a > selHi || b < selLo) return false;
    if (query && !l.title.toLowerCase().includes(query)) return false;
    return true;
  });

  const sections = BANDS.map((band) => ({
    band,
    lessons: visibleLessons.filter((l) => bandForLevel(l.level).id === band.id),
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
                  <FallbackImage
                    srcs={[category.image, category.stockImage]}
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

        {/* ---------- Compact filter bar: search + level dropdown ---------- */}
        <div className="flex items-center justify-end gap-2 mb-6">
          <div className="relative">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="lesson-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search lessons"
              aria-label="Search lessons"
              className="w-40 sm:w-56 h-9 pl-9 pr-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>
          <LevelDropdown value={levelRange} onChange={setLevelRange} />
          <p className="sr-only" aria-live="polite">
            {visibleLessons.length} lesson{visibleLessons.length !== 1 ? 's' : ''} shown
          </p>
        </div>

        {/* ---------- Empty state ---------- */}
        {sections.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl py-16 px-6 text-center mb-8">
            <p className="text-lg font-semibold text-slate-900 mb-2">No lessons found</p>
            <p className="text-sm text-slate-500 mb-6">
              Try a different search term, or widen the level range to see everything.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center h-11 px-6 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ---------- Course sections ---------- */}
        {sections.map(({ band, lessons: ls }) => (
          <CourseSection
            key={band.id}
            title={band.label}
            blurb={BAND_BLURBS[band.id] ?? ''}
            lessons={ls}
            fallbacks={[category.image, category.stockImage]}
            forceExpanded={filtersActive || (returnSlug != null && ls.some((l) => l.slug === returnSlug))}
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
                      <FallbackImage
                        srcs={[o.image, o.stockImage]}
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
