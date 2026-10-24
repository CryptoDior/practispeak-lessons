import type { Metadata } from 'next';
import Link from 'next/link';
import AuthCard from '@/components/auth/AuthCard';
import { ResetPasswordForm } from '@/components/auth/PasswordForms';
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = { title: 'Choose a new password | Practispeak' };
export const dynamic = 'force-dynamic';

/** Reached from the reset email: /auth/confirm logs them in, then sends them here. */
export default async function ResetPasswordPage() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!user) {
    return (
      <AuthCard title="Link expired" subtitle="This password reset link is invalid or has already been used.">
        <Link
          href="/forgot-password"
          className="block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-[15px] font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Send me a new link
        </Link>
      </AuthCard>
    );
  }

  return (
    <AuthCard title="Choose a new password" subtitle={`For ${user.email ?? 'your account'}`}>
      <ResetPasswordForm />
    </AuthCard>
  );
}
