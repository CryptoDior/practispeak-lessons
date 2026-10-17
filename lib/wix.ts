/*
 * Server-only: log students in with their existing practispeak.com (Wix) account.
 * Flow (Wix Headless "Wix login page", OAuth 2.0 + PKCE):
 *   /auth/wix/start    -> get a Wix login URL and send the student there
 *   /auth/wix/callback -> Wix sends them back with ?code in the URL fragment
 *   /auth/wix/finish   -> swap the code for member tokens, read their email,
 *                         and log them into Supabase under that email
 * Docs: https://dev.wix.com/docs/go-headless/authentication/members/wix-login-page/add-a-wix-login-page-rest
 */
import { createHash, randomBytes } from 'crypto';

const WIX_API = 'https://www.wixapis.com';

export function wixClientId(): string | undefined {
  return process.env.WIX_CLIENT_ID || undefined;
}

const base64url = (buf: Buffer) => buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

/** PKCE verifier/challenge pair plus a random state value. */
export function createPkce() {
  const verifier = base64url(randomBytes(32));
  const challenge = base64url(createHash('sha256').update(verifier).digest());
  const state = base64url(randomBytes(24));
  return { verifier, challenge, state };
}

async function wixPost<T>(path: string, body: unknown, token?: string): Promise<T> {
  const res = await fetch(`${WIX_API}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(token ? { authorization: token } : {}) },
    body: JSON.stringify(body),
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Wix ${path} failed (${res.status}): ${JSON.stringify(json).slice(0, 200)}`);
  return json as T;
}

/** URL of the Wix-hosted login page for this site. */
export async function createWixLoginUrl(opts: { redirectUri: string; challenge: string; state: string }) {
  const clientId = wixClientId();
  if (!clientId) throw new Error('WIX_CLIENT_ID is not set');
  // The redirect-session call is made as an anonymous visitor.
  const visitor = await wixPost<{ access_token: string }>('/oauth2/token', { clientId, grantType: 'anonymous' });
  const session = await wixPost<{ redirectSession: { fullUrl: string } }>(
    '/_api/redirects-api/v1/redirect-session',
    {
      auth: {
        authRequest: {
          redirectUri: opts.redirectUri,
          clientId,
          codeChallenge: opts.challenge,
          codeChallengeMethod: 'S256',
          responseMode: 'fragment',
          responseType: 'code',
          scope: 'offline_access',
          state: opts.state,
        },
      },
    },
    visitor.access_token
  );
  return session.redirectSession.fullUrl;
}

export interface WixMember {
  email: string;
  emailVerified: boolean;
  name: string;
}

/** Exchange the login code for member tokens and read who logged in. */
export async function getWixMember(opts: { code: string; verifier: string; redirectUri: string }): Promise<WixMember> {
  const clientId = wixClientId();
  if (!clientId) throw new Error('WIX_CLIENT_ID is not set');
  const tokens = await wixPost<{ access_token: string }>('/oauth2/token', {
    clientId,
    grantType: 'authorization_code',
    redirectUri: opts.redirectUri,
    code: opts.code,
    codeVerifier: opts.verifier,
  });

  const res = await fetch(`${WIX_API}/members/v1/members/my?fieldSet=FULL`, {
    headers: { authorization: tokens.access_token },
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.member) throw new Error(`Wix members/my failed (${res.status})`);

  const m = json.member;
  const first = m.contact?.firstName ?? '';
  const last = m.contact?.lastName ?? '';
  return {
    email: String(m.loginEmail ?? '').trim().toLowerCase(),
    emailVerified: m.loginEmailVerified === true,
    name: `${first} ${last}`.trim() || m.profile?.nickname || '',
  };
}
