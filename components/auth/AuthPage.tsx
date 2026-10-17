import { redirect } from 'next/navigation';
import { SiteHeader, SiteFooter, LogoIcon } from '@/components/SiteChrome';
import AuthForm from '@/components/auth/AuthForm';
import { createClient } from '@/lib/supabase/server';

/** Shared shell for /login and /signup. */
export default async function AuthPage({
  mode,
  searchParams,
}: {
  mode: 'login' | 'signup';
  searchParams: { next?: string; error?: string };
}) {
  const rawNext = searchParams.next ?? '/';
  const next = rawNext.startsWith('/') && !rawNext.startsWith('//') ? rawNext : '/';

  // Already logged in? Skip the form.
  const {
    data: { user },
  } = await createClient().auth.getUser();
  if (user) redirect(next);

  const isLogin = mode === 'login';
  const ERRORS: Record<string, string> = {
    confirm: 'That confirmation link is invalid or has expired. Please try again.',
    wix: "We couldn't log you in with your Practispeak account. Please try again, or use your email below.",
    'wix-unverified':
      'Please confirm your email address on practispeak.com first — or log in with your email and password below.',
  };
  const initialError = searchParams.error ? ERRORS[searchParams.error] : undefined;
  // Only offer the practispeak.com (Wix) login once it's configured.
  const wixEnabled = !!process.env.WIX_CLIENT_ID;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="" />
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] p-6 sm:p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <LogoIcon className="w-11 h-11 mb-3" />
            <h1 className="font-playfair text-2xl sm:text-3xl font-semibold text-slate-900">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="mt-1.5 text-sm text-slate-600">
              {isLogin ? 'Log in to continue learning.' : 'Join Practispeak and start learning.'}
            </p>
          </div>
          {wixEnabled && (
            <>
              <a
                href={`/auth/wix/start?next=${encodeURIComponent(next)}`}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-4 py-3 text-[15px] font-semibold text-white hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              >
                <LogoIcon className="w-6 h-6 [&_rect]:fill-white [&_path]:fill-white [&_circle]:fill-blue-600" />
                {isLogin ? 'Log in with your Practispeak account' : 'Sign up with your Practispeak account'}
              </a>
              <p className="mt-2 text-center text-xs text-slate-500">
                Same email and password as on practispeak.com
              </p>
              <div className="my-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                or use email
                <span className="h-px flex-1 bg-slate-200" />
              </div>
            </>
          )}
          <AuthForm mode={mode} next={next} initialError={initialError} secondary={wixEnabled} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
