import { createClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client with the secret key: bypasses Row Level Security.
 * Only used to log in students who were verified by Wix. Never import this into
 * a client component, and never expose SUPABASE_SECRET_KEY to the browser.
 */
export function createAdminClient() {
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!key) throw new Error('SUPABASE_SECRET_KEY is not set');
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
