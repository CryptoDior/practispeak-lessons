import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import { getWixMember, type WixPackageStatus } from '@/lib/wix';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

const fail = (reason = 'wix') => NextResponse.json({ redirect: `/login?error=${reason}` });

/**
 * Premium from a Wix lesson package: active package -> pro until it ends; package gone ->
 * back to free. Premium you set by hand (plan_source not 'wix') is never touched.
 */
async function syncPlanFromWix(
  admin: ReturnType<typeof createAdminClient>,
  userId: string,
  packages: WixPackageStatus
) {
  const { data: profile } = await admin.from('profiles').select('*').eq('id', userId).maybeSingle();
  if (!profile) return;
  if (profile.plan === 'pro' && profile.plan_source !== 'wix') return; // set manually — leave it

  let update: Record<string, unknown> | null = null;
  if (packages.active) update = { plan: 'pro', plan_source: 'wix', pro_until: packages.until };
  else if (profile.plan_source === 'wix') update = { plan: 'free', pro_until: null };
  if (!update) return;

  const { error } = await admin.from('profiles').update(update).eq('id', userId);
  if (error) console.error('[wix] plan sync failed', error.message);
  else console.log(`[wix] plan sync: ${packages.active ? `pro until ${packages.until ?? 'open-ended'}` : 'package ended -> free'}`);
}

/**
 * Step 3: confirm the Wix login, then log the student into Supabase under the
 * same email — creating their lessons account the first time.
 */
export async function POST(request: NextRequest) {
  const { origin } = new URL(request.url);
  const store = cookies();
  const saved = store.get('wix_oauth')?.value;
  store.set('wix_oauth', '', { path: '/auth/wix', maxAge: 0 }); // single use

  let oauth: { verifier: string; state: string; next: string };
  let body: { code?: string; state?: string };
  try {
    oauth = JSON.parse(saved ?? '');
    body = await request.json();
  } catch {
    return fail();
  }
  if (!body.code || !body.state || body.state !== oauth.state) return fail();

  try {
    const member = await getWixMember({
      code: body.code,
      verifier: oauth.verifier,
      redirectUri: `${origin}/auth/wix/callback`,
    });
    if (!member.email) return fail();

    const admin = createAdminClient();

    // First Wix login: create their lessons account (email already confirmed by being a Wix member).
    const created = await admin.auth.admin.createUser({
      email: member.email,
      email_confirm: true,
      user_metadata: { full_name: member.name, login_via: 'wix' },
    });
    const isNewAccount = !created.error;
    if (created.error && created.error.status !== 422) throw created.error; // 422 = account already exists

    // Create a one-time login token for that email (redeemed below to set the session cookies).
    const link = await admin.auth.admin.generateLink({ type: 'magiclink', email: member.email });
    if (link.error) throw link.error;

    // Safety: an account someone made with email + password is only opened through Wix if Wix
    // has verified the email — otherwise anyone could register that email on Wix and get in.
    const madeViaWix = link.data.user?.user_metadata?.login_via === 'wix';
    if (!isNewAccount && !madeViaWix && !member.emailVerified) return fail('wix-unverified');

    // Students with a current Wix lesson package are unlocked automatically.
    const userId = link.data.user?.id;
    if (userId && member.packages) await syncPlanFromWix(admin, userId, member.packages);

    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({
      type: 'email',
      token_hash: link.data.properties.hashed_token,
    });
    if (error) throw error;

    const next = oauth.next?.startsWith('/') && !oauth.next.startsWith('//') ? oauth.next : '/';
    return NextResponse.json({ redirect: next });
  } catch (err) {
    console.error('[wix] finish failed', err);
    return fail();
  }
}
