import { NextResponse, type NextRequest } from 'next/server';
import { createPkce, createWixLoginUrl } from '@/lib/wix';

export const dynamic = 'force-dynamic';

/** Step 1: send the student to the practispeak.com (Wix) login page. */
export async function GET(request: NextRequest) {
  const { origin, searchParams } = new URL(request.url);
  const rawNext = searchParams.get('next') ?? '/';
  const next = rawNext.startsWith('/') && !rawNext.startsWith('//') ? rawNext : '/';

  const { verifier, challenge, state } = createPkce();
  const redirectUri = `${origin}/auth/wix/callback`;

  let loginUrl: string;
  try {
    loginUrl = await createWixLoginUrl({ redirectUri, challenge, state });
  } catch (err) {
    console.error('[wix] start failed', err);
    return NextResponse.redirect(`${origin}/login?error=wix&next=${encodeURIComponent(next)}`);
  }

  const response = NextResponse.redirect(loginUrl);
  // Kept server-side only (httpOnly) until Wix sends the student back.
  response.cookies.set('wix_oauth', JSON.stringify({ verifier, state, next }), {
    httpOnly: true,
    secure: origin.startsWith('https://'),
    sameSite: 'lax',
    path: '/auth/wix',
    maxAge: 600,
  });
  return response;
}
