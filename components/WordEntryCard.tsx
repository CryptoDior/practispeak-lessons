'use client';
import { useEffect, useRef, useState } from 'react';
import ImageLightbox from '@/components/ImageLightbox';
import { r2Audio, exclusiveAudio } from '@/lib/audio';
import { resolveImageUrl, svgVariant } from '@/lib/images';
import SaveWordButton from '@/components/dictionary/SaveWordButton';
import { ukSlugVariant } from '@/lib/spelling';

/**
 * Word title that never breaks mid-word: multi-word terms wrap at spaces,
 * and the font shrinks just enough for the longest word to fit on one line.
 */
function FitTitle({ children }: { children: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      el.style.fontSize = '';
      if (el.clientWidth === 0) return; // hidden tab — refit when shown
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.scrollWidth > el.clientWidth && size > 18) {
        size -= 1;
        el.style.fontSize = `${size}px`;
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (el.parentElement) ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, [children]);

  return (
    <h3
      ref={ref}
      className="font-playfair text-xl sm:text-2xl font-semibold text-slate-900 leading-tight break-words min-w-0"
    >
      {children}
    </h3>
  );
}

function SpeakerIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" strokeLinejoin="round" />
      <path d="M15.5 9.2a4 4 0 010 5.6M18 6.8a7.5 7.5 0 010 10.4" strokeLinecap="round" />
    </svg>
  );
}

/** Audio filename convention: the slugified word/phrase, e.g. "PENALTY SPOT" -> penalty-spot */
export function audioSlugOf(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function AudioButton({
  srcs,
  label,
  showLabel = false,
}: {
  /** Candidate files, tried in order until one plays */
  srcs: string[];
  label: string;
  showLabel?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const current = useRef<HTMLAudioElement | null>(null);
  const play = () => {
    // Stop anything this button is already playing, so clicks never overlap.
    if (current.current) {
      current.current.pause();
      current.current = null;
    }
    const tryPlay = (i: number) => {
      if (i >= srcs.length) {
        setPlaying(false);
        return;
      }
      const audio = exclusiveAudio(srcs[i]); // stops any other sound on the page
      current.current = audio;
      audio.addEventListener('stopped', () => setPlaying(false));
      // A missing file fires BOTH onerror and a rejected play() — only move on once,
      // otherwise the next file is started twice and you hear double audio.
      let movedOn = false;
      const next = () => {
        if (movedOn || current.current !== audio) return;
        movedOn = true;
        tryPlay(i + 1);
      };
      audio.onended = () => setPlaying(false);
      audio.onerror = next;
      audio.play().catch(next);
    };
    setPlaying(true);
    tryPlay(0);
  };
  return (
    <button
      type="button"
      onClick={play}
      aria-label={label}
      className={`inline-flex items-center gap-2 flex-shrink-0 text-blue-600 hover:text-blue-700 active:scale-95 transition-all cursor-pointer p-2 -m-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
        playing ? 'animate-pulse' : ''
      }`}
    >
      <SpeakerIcon className="w-5 h-5" />
      {showLabel && <span className="text-sm font-semibold">{label}</span>}
    </button>
  );
}

function QuoteBox({
  text,
  audioSrcs,
  tagLabel,
  tagClass = 'text-blue-600',
}: {
  text: string;
  audioSrcs?: string[];
  tagLabel?: string;
  tagClass?: string;
}) {
  return (
    <div>
      {tagLabel && (
        <span className={`block text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 ${tagClass}`}>
          {tagLabel}
        </span>
      )}
      <div className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
        <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M4 12c0-3.5 2-6.5 5.5-7.5l.7 1.6C7.9 7.2 6.8 8.8 6.6 10.4c.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3s-1.4 3.1-3.1 3.1C5.5 16.3 4 14.5 4 12zm9.3 0c0-3.5 2-6.5 5.5-7.5l.7 1.6c-2.3 1.1-3.4 2.7-3.6 4.3.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3s-1.4 3.1-3.1 3.1c-2.1 0-3.6-1.8-3.6-4.3z" />
        </svg>
        <p className="flex-1 text-[14px] text-slate-700 leading-relaxed">{text}</p>
        {audioSrcs && (
          <div className="self-center">
            <AudioButton srcs={audioSrcs} label="Listen to example" />
          </div>
        )}
      </div>
    </div>
  );
}

export interface WordEntryProps {
  title: string;
  /** part-of-speech / tag pill; empty string hides the pill */
  tag?: string;
  definition: string;
  example: string;
  inGame?: string;
  inRealLife?: string;
  imageSlug: string;
  /** candidate basenames for {slug}.mp3 and {slug}-example.mp3, tried in order */
  audioSlugs: string[];
  listenLabel: string;
  /** lesson slug, so lesson-specific audio ({lesson}-{word}.mp3) is tried first */
  lessonSlug?: string;
  /** "From: <lesson>" link under the card (My Dictionary page) */
  source?: { label: string; href: string };
}

export default function WordEntryCard({
  title,
  tag,
  definition,
  example,
  inGame,
  inRealLife,
  imageSlug,
  audioSlugs,
  listenLabel,
  lessonSlug,
  source,
}: WordEntryProps) {
  // Try R2 first (lesson-specific, then shared names), then the old local /audio files.
  // Words that now use US spelling may have been recorded under the UK spelling, so try both.
  const wordSlug = audioSlugOf(title);
  const ukWordSlug = ukSlugVariant(wordSlug);
  const slugsWithUk = audioSlugs.flatMap((s) => {
    const uk = ukSlugVariant(s);
    return uk ? [s, uk] : [s];
  });
  const r2Bases = [
    ...(lessonSlug ? [`${lessonSlug}-${wordSlug}`, ...(ukWordSlug ? [`${lessonSlug}-${ukWordSlug}`] : [])] : []),
    ...slugsWithUk,
  ];
  const srcsFor = (suffix: string) => [
    ...r2Bases.map((s) => r2Audio(`${s}${suffix}.mp3`)),
    ...slugsWithUk.map((s) => `/audio/${s}${suffix}.mp3`),
  ];
  const wordSrcs = srcsFor('');
  const exampleSrcs = srcsFor('-example');
  const resolvedSrc = resolveImageUrl(imageSlug);
  const [imgSrc, setImgSrc] = useState(resolvedSrc ?? '');
  const [imgFailed, setImgFailed] = useState(!resolvedSrc);
  const [expanded, setExpanded] = useState(false);

  const handleImgError = () => {
    if (!imgSrc.endsWith('.svg')) {
      setImgSrc(svgVariant(imgSrc));
    } else {
      setImgFailed(true);
    }
  };

  const hasSplitExamples = !!(inGame || inRealLife);

  return (
    <div className="font-poppins flex flex-col lg:flex-row gap-5 items-start">
      {/* ---------- Card: vertical text stack ---------- */}
      <div className="flex-1 min-w-0 bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col justify-center">
        {/* Word + listen */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <FitTitle>{title}</FitTitle>
          <AudioButton srcs={wordSrcs} label={listenLabel} />
          {/* Only shows inside a DictionaryProvider (lesson pages, My Dictionary) */}
          <SaveWordButton
            entry={{
              word: title,
              part_of_speech: tag || null,
              definition,
              example: example || null,
              in_game: inGame || null,
              in_real_life: inRealLife || null,
              image_slug: imageSlug || null,
              audio_slugs: audioSlugs,
              lesson_slug: lessonSlug || null,
            }}
          />
        </div>

        {/* Part of speech */}
        {tag && (
          <span className="inline-block self-start text-[13px] font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg capitalize mb-3.5">
            {tag}
          </span>
        )}

        {/* Definition */}
        <p className="text-[15px] text-slate-800 leading-relaxed mb-3.5">{definition}</p>

        {/* Example(s) */}
        {hasSplitExamples ? (
          <div className="space-y-3">
            {inGame && <QuoteBox text={inGame} tagLabel="In Game" tagClass="text-blue-600" />}
            {inRealLife && (
              <QuoteBox text={inRealLife} tagLabel="In Real Life" tagClass="text-emerald-600" />
            )}
            <AudioButton srcs={exampleSrcs} label="Listen to example" showLabel />
          </div>
        ) : (
          <QuoteBox text={example} audioSrcs={exampleSrcs} />
        )}

        {source && (
          <a href={source.href} className="mt-4 self-start text-xs font-medium text-slate-500 hover:text-blue-600">
            From: <span className="underline underline-offset-2">{source.label}</span>
          </a>
        )}
      </div>

      {/* ---------- Side image (click to expand) ---------- */}
      {!imgFailed && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-label={`Expand image for ${title}`}
          className="group/img relative w-full aspect-square lg:w-56 xl:w-60 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 order-first lg:order-none cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
        >
          {/* Blurred copy fills the square, so wide (16:9) images have no grey bars */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-80"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain group-hover/img:scale-[1.03] transition-transform duration-300"
            onError={handleImgError}
          />
          <span
            className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg bg-slate-900/55 text-white flex items-center justify-center opacity-80 group-hover/img:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      )}

      {expanded && !imgFailed && (
        <ImageLightbox src={imgSrc} alt={title} onClose={() => setExpanded(false)} />
      )}
    </div>
  );
}
