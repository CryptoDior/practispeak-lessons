'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { effectivePlan, type Plan } from '@/lib/plan';

/**
 * The logged-in student's plan, looked up in the browser (null while loading or logged out).
 * Cosmetic only — e.g. hiding "Students only" tags on pre-built pages. Real access is
 * always checked on the server.
 */
export function usePlan(): Plan | null {
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return;
    const supabase = createClient();
    let cancelled = false;
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) return;
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
      if (!cancelled) setPlan(effectivePlan(data));
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return plan;
}
