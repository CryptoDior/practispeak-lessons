'use client';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { login, signup } from '@/app/auth/actions';

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition';

export default function AuthForm({
  mode,
  next = '/',
  initialError,
}: {
  mode: 'login' | 'signup';
  next?: string;
  initialError?: string;
}) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(initialError);
  const [message, setMessage] = useState<string | undefined>();
  const isLogin = mode === 'login';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setError(undefined);
    setMessage(undefined);
    startTransition(async () => {
      const res = await (isLogin ? login(formData) : signup(formData));
      if (res?.error) setError(res.error);
      if (res?.message) setMessage(res.message);
    });
  };

  const otherHref = `${isLogin ? '/signup' : '/login'}${next !== '/' ? `?next=${encodeURIComponent(next)}` : ''}`;

  if (message) {
    return (
      <div className="text-center" role="status">
        <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[15px] text-slate-700 leading-relaxed">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input type="hidden" name="next" value={next} />

      {!isLogin && (
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Your name
          </label>
          <input id="full_name" name="full_name" type="text" autoComplete="name" className={inputClass} />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          minLength={isLogin ? undefined : 8}
          required
          className={inputClass}
        />
        {!isLogin && <p className="mt-1.5 text-xs text-slate-500">At least 8 characters.</p>}
      </div>

      {/* Marketing consent: must stay unticked by default (GDPR / POPIA) */}
      {!isLogin && (
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="marketing_opt_in"
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-blue-600 cursor-pointer"
          />
          <span className="text-sm text-slate-600 leading-snug">
            Email me discounts on 1-on-1 and group lessons, plus new lesson updates. Unsubscribe anytime.
          </span>
        </label>
      )}

      {error && (
        <p role="alert" className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-blue-600 px-4 py-3 text-[15px] font-semibold text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-wait transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
      >
        {pending ? 'Please wait…' : isLogin ? 'Log in' : 'Create account'}
      </button>

      <p className="text-center text-sm text-slate-600">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link href={otherHref} className="font-semibold text-blue-600 hover:text-blue-700">
          {isLogin ? 'Sign up' : 'Log in'}
        </Link>
      </p>
    </form>
  );
}
