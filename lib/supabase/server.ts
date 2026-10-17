import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { effectivePlan, type Plan } from '@/lib/plan';

/**
 * Supabase client for server components, route handlers and server actions.
 * Create a new one per request — never share it between requests.
 */
export function createClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // Called from a server component, which can't set cookies.
            // Safe to ignore: middleware refreshes the session on every request.
          }
        },
      },
    }
  );
}

export type { Plan } from '@/lib/plan';

/** The signed-in user (or null) and their plan. Missing profile = free; ended Wix packages = free. */
export async function getUserAndPlan() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { user: null, plan: 'free' as Plan };
  // select('*') so this keeps working whether or not the pro_until column exists yet.
  const { data } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
  return { user, plan: effectivePlan(data) };
}
