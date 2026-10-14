import type { Metadata } from 'next';
import AuthPage from '@/components/auth/AuthPage';

export const metadata: Metadata = { title: 'Sign up | Practispeak' };

export default function SignupPage({ searchParams }: { searchParams: { next?: string; error?: string } }) {
  return <AuthPage mode="signup" searchParams={searchParams} />;
}
