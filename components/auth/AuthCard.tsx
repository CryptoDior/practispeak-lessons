import { SiteHeader, SiteFooter, LogoIcon } from '@/components/SiteChrome';

/** Page shell for the account pages (log in, sign up, forgot/reset password). */
export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="" />
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] p-6 sm:p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <LogoIcon className="w-11 h-11 mb-3" />
            <h1 className="font-playfair text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h1>
            <p className="mt-1.5 text-sm text-slate-600">{subtitle}</p>
          </div>
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
