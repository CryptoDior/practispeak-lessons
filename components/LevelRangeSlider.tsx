'use client';

import { useEffect, useRef } from 'react';
import { BANDS, LEVEL_MAX, LEVEL_MIN, bandOfIndex, codeOfIndex } from '@/lib/levels';

interface Props {
  value: [number, number];
  onChange: (v: [number, number]) => void;
}

/**
 * Dual-handle range slider over the 1-6 level scale (A1-C2), Engoo-style.
 * Drag either handle, click the track to move the nearest handle, use arrow
 * keys on a focused handle, or click a band label to select that band.
 */
export default function LevelRangeSlider({ value, onChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef(value);
  const dragRef = useRef<'lo' | 'hi' | null>(null);
  const [lo, hi] = value;

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const pct = (i: number) => ((i - LEVEL_MIN) / (LEVEL_MAX - LEVEL_MIN)) * 100;

  const indexFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return LEVEL_MIN;
    const r = track.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    return Math.round(t * (LEVEL_MAX - LEVEL_MIN)) + LEVEL_MIN;
  };

  const moveHandle = (handle: 'lo' | 'hi', idx: number) => {
    const [curLo, curHi] = valueRef.current;
    const i = Math.min(Math.max(idx, LEVEL_MIN), LEVEL_MAX);
    if (handle === 'lo') onChange([Math.min(i, curHi), curHi]);
    else onChange([curLo, Math.max(i, curLo)]);
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (dragRef.current) moveHandle(dragRef.current, indexFromClientX(e.clientX));
    };
    const onUp = () => {
      dragRef.current = null;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startDrag = (handle: 'lo' | 'hi') => (e: React.PointerEvent) => {
    e.preventDefault();
    dragRef.current = handle;
    moveHandle(handle, indexFromClientX(e.clientX));
  };

  const onTrackPointerDown = (e: React.PointerEvent) => {
    const i = indexFromClientX(e.clientX);
    const [curLo, curHi] = valueRef.current;
    const handle: 'lo' | 'hi' = Math.abs(i - curLo) <= Math.abs(i - curHi) ? 'lo' : 'hi';
    dragRef.current = handle;
    moveHandle(handle, i);
  };

  const onKey = (handle: 'lo' | 'hi') => (e: React.KeyboardEvent) => {
    const cur = handle === 'lo' ? valueRef.current[0] : valueRef.current[1];
    let next: number | null = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = cur - 1;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = cur + 1;
    else if (e.key === 'Home') next = LEVEL_MIN;
    else if (e.key === 'End') next = LEVEL_MAX;
    if (next !== null) {
      e.preventDefault();
      moveHandle(handle, next);
    }
  };

  const handleEls = (
    [
      { key: 'lo' as const, idx: lo, label: 'Minimum level' },
      { key: 'hi' as const, idx: hi, label: 'Maximum level' },
    ] as const
  ).map((h) => (
    <button
      key={h.key}
      type="button"
      role="slider"
      aria-label={h.label}
      aria-valuemin={LEVEL_MIN}
      aria-valuemax={LEVEL_MAX}
      aria-valuenow={h.idx}
      aria-valuetext={`${codeOfIndex(h.idx)} · ${bandOfIndex(h.idx).label}`}
      onPointerDown={startDrag(h.key)}
      onKeyDown={onKey(h.key)}
      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-blue-600 shadow-[0_1px_4px_rgba(15,23,42,0.25)] cursor-grab active:cursor-grabbing touch-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
      style={{ left: `${pct(h.idx)}%`, zIndex: h.key === 'lo' && lo === LEVEL_MAX ? 2 : 1 }}
    >
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-md px-1.5 py-0.5 pointer-events-none">
        {codeOfIndex(h.idx)}
      </span>
    </button>
  ));

  return (
    <div>
      <div
        ref={trackRef}
        onPointerDown={onTrackPointerDown}
        className="relative h-8 flex items-center touch-none cursor-pointer mt-6"
      >
        <div className="absolute inset-x-0 h-1 rounded-full bg-slate-200" aria-hidden="true" />
        <div
          className="absolute h-1 rounded-full bg-blue-600"
          style={{ left: `${pct(lo)}%`, width: `${pct(hi) - pct(lo)}%` }}
          aria-hidden="true"
        />
        {Array.from({ length: LEVEL_MAX - LEVEL_MIN + 1 }, (_, k) => k + LEVEL_MIN).map((i) => (
          <span
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 ${
              i >= lo && i <= hi ? 'bg-blue-700' : 'bg-slate-300'
            }`}
            style={{ left: `${pct(i)}%` }}
            aria-hidden="true"
          />
        ))}
        {handleEls}
      </div>

      <div className="flex justify-between mt-1.5">
        {BANDS.map((b) => {
          const active = lo <= b.range[1] && hi >= b.range[0];
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => onChange([b.range[0], b.range[1]])}
              title={`Show only ${b.label} materials`}
              className={`text-[13px] font-medium px-1 py-1.5 rounded-md cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-1 ${
                active ? 'text-blue-700' : 'text-slate-400 hover:text-blue-600'
              }`}
            >
              {b.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
