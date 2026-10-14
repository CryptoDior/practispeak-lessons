'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { logout } from '@/app/auth/actions';

type Account = { email: string; name: string; plan: 'free' | 'pro'; marketing: boolean };

function UserIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 19.5c1.6-3 4.1-4.5 7-4.5s5.4 1.5 7 4.5" strokeLinecap="round" />
    </svg>
  );
}

function CrownIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M3 17h18M4 17l-1-9 5.5 4L12 5l3.5 7L21 8l-1 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ring =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2';

/**
 * Header plan label: Premium for pro members and logged-out visitors (as an upsell),
 * Free for logged-in free members. Hidden while the session is still loading.
 */
function PlanLabel({ account }: { account: Account | null | undefined }) {
  if (account === undefined) return null;
  const isFree = account?.plan === 'free';
  return (
    <>
      <Link
        href="/#about"
        className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors rounded-lg px-1 py-2 ${ring} ${
          isFree ? 'text-slate-500 hover:text-blue-600' : 'text-blue-600 hover:text-blue-700'
        }`}
      >
        {!isFree && <CrownIcon className="w-5 h-5" />}
        {isFree ? 'Free' : 'Premium'}
      </Link>
      <span className="hidden sm:block w-px h-6 bg-slate-200" aria-hidden="true" />
    </>
  );
}

export default function AccountMenu() {
  const pathname = usePathname();
  // undefined = still checking, null = logged out
  const [account, setAccount] = useState<Account | null | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [savingConsent, setSavingConsent] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Optimistic toggle; reverts if Supabase rejects it.
  const toggleMarketing = async () => {
    if (!account || savingConsent) return;
    const next = !account.marketing;
    setAccount({ ...account, marketing: next });
    setSavingConsent(true);
    const { error } = await createClient().rpc('set_marketing_opt_in', { opt_in: next });
    setSavingConsent(false);
    if (error) setAccount((a) => (a ? { ...a, marketing: !next } : a));
  };

  useEffect(() => {
    // Supabase keys missing (e.g. not yet added in Vercel): show "Log in" instead of crashing every page.
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setAccount(null);
      return;
    }
    const supabase = createClient();
    let cancelled = false;

    const load = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (cancelled) return;
      if (!user) return setAccount(null);
      const { data } = await supabase
        .from('profiles')
        .select('plan, marketing_opt_in')
        .eq('id', user.id)
        .maybeSingle();
      if (cancelled) return;
      setAccount({
        email: user.email ?? '',
        name: (user.user_metadata?.full_name as string | undefined) || '',
        plan: data?.plan === 'pro' ? 'pro' : 'free',
        marketing: data?.marketing_opt_in === true,
      });
    };

    load();
    const { data: sub } = supabase.auth.onAuthStateChange(() => load());
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (account === undefined) {
    return <span className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50" aria-hidden="true" />;
  }

  if (account === null) {
    const next = pathname && pathname !== '/login' && pathname !== '/signup' ? pathname : '/';
    return (
      <>
        <PlanLabel account={account} />
        <Link
          href={next === '/' ? '/login' : `/login?next=${encodeURIComponent(next)}`}
          className={`flex items-center justify-center gap-2 rounded-full border border-slate-300 pl-3 pr-4 h-10 md:w-10 md:px-0 lg:w-auto lg:pl-3 lg:pr-4 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors ${ring}`}
        >
          <UserIcon className="w-5 h-5 flex-shrink-0" />
          {/* Icon-only on tablet widths, where the nav links need the room */}
          <span className="md:sr-only lg:not-sr-only">Log in</span>
        </Link>
      </>
    );
  }

  const initial = (account.name || account.email).charAt(0).toUpperCase();

  return (
    <>
      <PlanLabel account={account} />
      <div ref={wrapRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Account menu"
          aria-expanded={open}
          className={`w-10 h-10 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors ${ring}`}
        >
          {initial}
        </button>

        {open && (
          <div
            className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.12)] p-2 z-50"
          >
            <div className="px-3 py-2.5">
              {account.name && <p className="text-sm font-semibold text-slate-900 truncate">{account.name}</p>}
              <p className="text-sm text-slate-600 truncate">{account.email}</p>
              <span
                className={`mt-2 inline-block rounded-lg px-2.5 py-1 text-xs font-semibold ${
                  account.plan === 'pro'
                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {account.plan === 'pro' ? 'Premium member' : 'Free plan'}
              </span>
            </div>
            <div className="my-1 h-px bg-slate-100" />
            <label className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={account.marketing}
                onChange={toggleMarketing}
                disabled={savingConsent}
                className="mt-0.5 h-4 w-4 flex-shrink-0 accent-blue-600 cursor-pointer"
              />
              <span className="text-sm text-slate-700 leading-snug">Email me lesson discounts &amp; updates</span>
            </label>
            <div className="my-1 h-px bg-slate-100" />
            <form action={logout}>
              <button
                type="submit"
                className={`w-full text-left rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors ${ring}`}
              >
                Log out
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
