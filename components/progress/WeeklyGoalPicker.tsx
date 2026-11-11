'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

/** Lets the student choose how many lessons a week they aim for. */
export default function WeeklyGoalPicker({ goal }: { goal: number }) {
  const router = useRouter();
  const [value, setValue] = useState(goal);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  const change = async (next: number) => {
    setValue(next);
    setSaving(true);
    setError(false);
    const { error } = await createClient().rpc('set_weekly_goal', { p_goal: next });
    setSaving(false);
    if (error) {
      setValue(goal);
      setError(true);
    } else router.refresh();
  };

  return (
    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
      Goal:
      <select
        value={value}
        disabled={saving}
        onChange={(e) => change(Number(e.target.value))}
        className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <option key={n} value={n}>
            {n} {n === 1 ? 'lesson' : 'lessons'} a week
          </option>
        ))}
      </select>
      {error && <span className="text-red-600">Couldn&rsquo;t save</span>}
    </label>
  );
}
