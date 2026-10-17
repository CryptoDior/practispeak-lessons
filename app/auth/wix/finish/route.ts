import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import { getWixMember } from '@/lib/wix';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

const fail = (reason = 'wix') => NextResponse.json({ redirect: `/login?error=${reason}` });

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
