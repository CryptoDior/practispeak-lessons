'use client';
import { useState } from 'react';
import { TasteMeterData } from '@/types/lesson';
import { resolveImageUrl } from '@/lib/images';

/**
 * Taste Meter — drag a slider between two taste words (e.g. mild ↔ robust), then check.
 * Turn it on for a lesson with  tasteMeter: { items: [...] }
 */
export default function TasteMeter({ data }: { data: TasteMeterData }) {
  const [vals, setVals] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const done = Object.keys(checked).length;
  // slider 0-100 → zone 0-4 (five equal zones)
  const zone = (v: number) => Math.min(4, Math.floor(v / 20));
  const score = data.items.filter((it, i) => checked[i] && zone(vals[i] ?? 50) === it.answer).length;

  return (
    <div className="space-y-5">
      {data.intro && <p className="text-gray-600 font-semibold">{data.intro}</p>}
      {data.items.map((it, i) => {
        const v = vals[i] ?? 50;
        const isChecked = !!checked[i];
        const ok = isChecked && zone(v) === it.answer;
        const src = it.imageSlug ? resolveImageUrl(it.imageSlug) : null;
        return (
          <div key={it.prompt} className="bg-white rounded-[20px] border border-gray-100 shadow-[0_2px_16px_rgba(6,110,245,0.06)] p-5 md:p-6">
            <div className="flex items-center gap-4">
              {src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="" className="w-20 h-20 rounded-2xl object-cover flex-shrink-0" />
              )}
              <p className="font-bold text-gray-900">
                <span className="text-[#066EF5] mr-2">{i + 1}.</span>
                {it.prompt}
              </p>
            </div>

            <div className="mt-6 px-1">
              <div className="flex justify-between text-sm font-extrabold uppercase tracking-wide mb-2">
                <span className="text-sky-600">{it.left}</span>
                <span className="text-rose-600">{it.right}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={v}
                disabled={isChecked}
                onChange={(e) => setVals((p) => ({ ...p, [i]: Number(e.target.value) }))}
                aria-label={`${it.left} to ${it.right}`}
                className="w-full h-3 rounded-full appearance-none cursor-pointer accent-[#066EF5] bg-gradient-to-r from-sky-300 via-amber-200 to-rose-400"
              />
              <div className="flex justify-between mt-1 text-xs text-gray-400 font-semibold">
                <span>very</span><span>a bit</span><span>in the middle</span><span>a bit</span><span>very</span>
              </div>
            </div>

            {!isChecked ? (
              <button
                type="button"
                onClick={() => setChecked((p) => ({ ...p, [i]: true }))}
                className="mt-4 px-5 py-2 rounded-full bg-[#066EF5] text-white font-bold hover:bg-[#0557C7]"
              >
                Check
              </button>
            ) : (
              <div className={`mt-4 p-4 rounded-xl border ${ok ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                <p className="font-extrabold">{ok ? '✓ Right!' : 'Not quite.'}</p>
                <p className="font-semibold">{it.explain}</p>
              </div>
            )}
          </div>
        );
      })}

      {done === data.items.length && (
        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
          <p className="text-emerald-700 font-extrabold text-lg">
            {score} / {data.items.length} correct{score === data.items.length ? ' — perfect! 🎉' : ''}
          </p>
          <button
            type="button"
            onClick={() => { setVals({}); setChecked({}); }}
            className="mt-3 px-5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-700 font-bold hover:bg-emerald-100"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
