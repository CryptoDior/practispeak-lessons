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
  const initialError =
    searchParams.error === 'confirm' ? 'That confirmation link is invalid or has expired. Please try again.' : undefined;

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
          <AuthForm mode={mode} next={next} initialError={initialError} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
