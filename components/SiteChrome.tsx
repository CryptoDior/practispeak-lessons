import Link from 'next/link';

/* ---------- shared inline icons (1.5-1.8px stroke) ---------- */

export function LogoIcon({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="4" width="36" height="28" rx="9" fill="#2563EB" />
      <path d="M13 32l-1 7 9-7h-8z" fill="#2563EB" />
      <circle cx="13" cy="18" r="2.6" fill="white" />
      <circle cx="20" cy="18" r="2.6" fill="white" />
      <circle cx="27" cy="18" r="2.6" fill="white" />
    </svg>
  );
}

export function CrownIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M3 17h18M4 17l-1-9 5.5 4L12 5l3.5 7L21 8l-1 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UserIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 19.5c1.6-3 4.1-4.5 7-4.5s5.4 1.5 7 4.5" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M19 12H5m0 0l6-6m-6 6l6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- header / footer ---------- */

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Questions', href: '/questions' },
  { label: 'About', href: '/#about' },
];

export function SiteHeader({ active = 'Home' }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded-lg"
        >
          <LogoIcon className="w-9 h-9" />
          <span className="text-xl font-bold text-blue-600 tracking-tight">Practispeak</span>
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium py-5 border-b-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
                link.label === active
                  ? 'text-blue-600 border-blue-600'
                  : 'text-slate-600 border-transparent hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#about"
            className="hidden sm:flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded-lg px-1 py-2"
          >
            <CrownIcon className="w-5 h-5" />
            Premium
          </Link>
          <span className="hidden sm:block w-px h-6 bg-slate-200" aria-hidden="true" />
          <button
            type="button"
            aria-label="Account"
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
          >
            <UserIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8 text-center text-slate-400 text-sm">
      &copy; {new Date().getFullYear()} Practispeak &middot; practispeak.com
    </footer>
  );
}
