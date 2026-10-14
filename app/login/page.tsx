import type { Metadata } from 'next';
import AuthPage from '@/components/auth/AuthPage';

export const metadata: Metadata = { title: 'Log in | Practispeak' };

export default function LoginPage({ searchParams }: { searchParams: { next?: string; error?: string } }) {
  return <AuthPage mode="login" searchParams={searchParams} />;
}
