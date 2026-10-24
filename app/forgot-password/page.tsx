import type { Metadata } from 'next';
import AuthCard from '@/components/auth/AuthCard';
import { ForgotPasswordForm } from '@/components/auth/PasswordForms';

export const metadata: Metadata = { title: 'Forgot password | Practispeak' };

export default function ForgotPasswordPage() {
  return (
    <AuthCard title="Forgot your password?" subtitle="Enter your email and we'll send you a link to choose a new one.">
      <ForgotPasswordForm />
      <p className="mt-6 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-600 leading-relaxed">
        Log in with your <strong>Practispeak account</strong> (practispeak.com, Google or Facebook)? Then reset your
        password on practispeak.com instead — this page is for accounts made here with email and password.
      </p>
    </AuthCard>
  );
}
