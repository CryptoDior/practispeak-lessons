'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MAX_TRANSLATE_CHARS, type TranslateLangCode } from '@/lib/translateLanguages';

interface Bubble {
  text: string;
  /** Viewport position: centred under (or above) the highlight */
  x: number;
  y: number;
  above: boolean;
  status: 'loading' | 'done' | 'error';
  translation?: string;
  note?: string;
  error?: string;
}

const BUBBLE_W = 320;

/** The sentence/paragraph around the highlight, so a single word is translated as it's used. */
function contextFor(range: Range): string {
  const node = range.commonAncestorContainer;
  const el = (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement) as Element | null;
  const block = el?.closest('p, li, td, th, h1, h2, h3, h4, blockquote, dd, figcaption, label') ?? el;
  return (block?.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 600);
}

/** Ignore highlights in form fields and in our own UI. */
function ignorable(range: Range): boolean {
  const node = range.commonAncestorContainer;
  const el = (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement) as Element | null;
  return !!el?.closest('input, textarea, select, [contenteditable="true"], [data-translate-ignore]');
}

/**
 * When the Translate tool is on: highlight a word or sentence anywhere on the page and a
 * bubble shows its translation. Mounted from the account menu (students only).
 */
export default function TranslateBrush({ lang }: { lang: TranslateLangCode }) {
  const [bubble, setBubble] = useState<Bubble | null>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const lastKey = useRef('');
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const requestId = useRef(0);

  const close = useCallback(() => {
    requestId.current++; // ignore any in-flight answer
    lastKey.current = '';
    setBubble(null);
  }, []);

  const translateSelection = useCallback(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    const text = sel.toString().replace(/\s+/g, ' ').trim();
    if (!text || !/[a-z]/i.test(text) || ignorable(range)) return;
    if (bubbleRef.current?.contains(range.commonAncestorContainer)) return;

    const key = `${lang}|${text}`;
    if (key === lastKey.current) return; // same highlight, already shown
    lastKey.current = key;

    const rect = range.getBoundingClientRect();
    const above = rect.bottom + 180 > window.innerHeight && rect.top > 180;
    const x = Math.min(Math.max(rect.left + rect.width / 2, BUBBLE_W / 2 + 12), window.innerWidth - BUBBLE_W / 2 - 12);
    const y = above ? rect.top - 10 : rect.bottom + 10;

    if (text.length > MAX_TRANSLATE_CHARS) {
      setBubble({ text, x, y, above, status: 'error', error: 'That’s a lot of text — highlight a sentence or two at a time.' });
      return;
    }

    const id = ++requestId.current;
    setBubble({ text, x, y, above, status: 'loading' });
    fetch('/api/translate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text, context: contextFor(range), lang }),
    })
      .then(async (r) => ({ ok: r.ok, body: await r.json().catch(() => ({})) }))
      .then(({ ok, body }) => {
        if (id !== requestId.current) return;
        setBubble((b) =>
          b && ok
            ? { ...b, status: 'done', translation: body.translation, note: body.note || undefined }
            : b && { ...b, status: 'error', error: body.error ?? 'Couldn’t translate that. Please try again.' }
        );
      })
      .catch(() => {
        if (id !== requestId.current) return;
        setBubble((b) => b && { ...b, status: 'error', error: 'Couldn’t translate that. Please try again.' });
      });
  }, [lang]);

  useEffect(() => {
    // Mouse: translate as soon as the button is released. Touch/keyboard: wait for the
    // highlight to settle (selection handles keep changing it while dragging).
    const onMouseUp = (e: MouseEvent) => {
      if (bubbleRef.current?.contains(e.target as Node)) return;
      clearTimeout(timer.current);
      timer.current = setTimeout(translateSelection, 10);
    };
    const onSelectionChange = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(translateSelection, 700);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!bubbleRef.current?.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('selectionchange', onSelectionChange);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', close, { passive: true });
    window.addEventListener('resize', close);
    return () => {
      clearTimeout(timer.current);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('selectionchange', onSelectionChange);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, [translateSelection, close]);

  // A new language: forget the last highlight so it can be translated again.
  useEffect(() => close(), [lang, close]);

  // Magic wand cursor while the tool is on (styles in globals.css).
  useEffect(() => {
    document.documentElement.classList.add('ps-translate-on');
    return () => document.documentElement.classList.remove('ps-translate-on');
  }, []);

  if (!bubble) return null;
  const isWord = !/\s/.test(bubble.text);

  return (
    <div
      ref={bubbleRef}
      data-translate-ignore
      role="dialog"
      aria-label="Translation"
      className="fixed z-[60] font-poppins"
      style={{
        left: bubble.x,
        top: bubble.y,
        width: BUBBLE_W,
        maxWidth: 'calc(100vw - 24px)',
        transform: `translate(-50%, ${bubble.above ? '-100%' : '0'})`,
      }}
    >
      <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.18)] p-4">
        <div className="flex items-start justify-between gap-3">
          <p className={`text-xs text-slate-500 ${isWord ? '' : 'line-clamp-2'}`}>
            <span className="font-semibold uppercase tracking-wider text-blue-600 mr-1.5">{lang}</span>
            {bubble.text}
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close translation"
            className="-mt-1 -mr-1 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {bubble.status === 'loading' && (
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500" role="status">
            <span className="w-4 h-4 rounded-full border-2 border-blue-100 border-t-blue-600 animate-spin" />
            Translating…
          </div>
        )}
        {bubble.status === 'done' && (
          <>
            <p className={`mt-2 font-semibold text-slate-900 leading-snug ${isWord ? 'text-lg' : 'text-[15px]'}`}>
              {bubble.translation}
            </p>
            {bubble.note && <p className="mt-1.5 text-[13px] text-slate-600 leading-snug">{bubble.note}</p>}
          </>
        )}
        {bubble.status === 'error' && <p className="mt-2 text-sm text-red-600">{bubble.error}</p>}
      </div>
    </div>
  );
}
