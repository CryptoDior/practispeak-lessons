'use client';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { requestPasswordReset, updatePassword, type AuthResult } from '@/app/auth/actions';
import PasswordInput from '@/components/auth/PasswordInput';

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition';
const buttonClass =
  'w-full rounded-xl bg-blue-600 px-4 py-3 text-[15px] font-semibold text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-wait transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2';

function useAction(action: (fd: FormData) => Promise<AuthResult>) {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<AuthResult>();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setResult(undefined);
    startTransition(async () => setResult(await action(formData)));
  };
  return { pending, result, onSubmit };
}

function ErrorBox({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p role="alert" className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
      {text}
    </p>
  );
}

/** "Forgot password?" — ask for the email and send the reset link. */
export function ForgotPasswordForm() {
  const { pending, result, onSubmit } = useAction(requestPasswordReset);

  if (result?.message) {
    return (
      <div className="text-center" role="status">
        <p className="text-[15px] text-slate-700 leading-relaxed">{result.message}</p>
        <Link href="/login" className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">
          Back to log in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </div>
      <ErrorBox text={result?.error} />
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? 'Sending…' : 'Send reset link'}
      </button>
      <p className="text-center text-sm text-slate-600">
        Remembered it?{' '}
        <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Log in
        </Link>
      </p>
    </form>
  );
}

/** Reached from the emailed link: choose a new password. */
export function ResetPasswordForm() {
  const { pending, result, onSubmit } = useAction(updatePassword);

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
          New password
        </label>
        <PasswordInput id="password" name="password" autoComplete="new-password" minLength={8} className={inputClass} />
        <p className="mt-1.5 text-xs text-slate-500">At least 8 characters.</p>
      </div>
      <div>
        <label htmlFor="confirm" className="block text-sm font-medium text-slate-700 mb-1.5">
          Type it again
        </label>
        <PasswordInput id="confirm" name="confirm" autoComplete="new-password" className={inputClass} />
      </div>
      <ErrorBox text={result?.error} />
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? 'Saving…' : 'Save new password'}
      </button>
    </form>
  );
}
