import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import AuthCard from '@/components/auth/AuthCard';
import DictionaryView, { type DictionaryItem } from '@/components/dictionary/DictionaryView';
import { createClient, getUserAndPlan } from '@/lib/supabase/server';
import { findLessonInCatalog } from '@/lib/series';
import { BECOME_STUDENT_URL } from '@/lib/site';

export const metadata: Metadata = { title: 'My Dictionary | Practispeak' };
export const dynamic = 'force-dynamic';

/** Where a saved word came from ("In real life" cards use a "-irl" slug for their audio). */
function sourceFor(lessonSlug: string | null): DictionaryItem['source'] {
  if (!lessonSlug) return null;
  const slug = lessonSlug.replace(/-irl$/, '');
  const found = findLessonInCatalog(slug);
  if (!found) return null;
  return {
    label: `${found.summary.title} · ${found.category.name}`,
    href: found.summary.externalUrl ?? `/lessons/${slug}`,
    category: found.category.name,
  };
}

export default async function DictionaryPage() {
  const { user, plan } = await getUserAndPlan();
  if (!user) redirect('/login?next=/dictionary');

  if (plan !== 'pro') {
    return (
      <AuthCard title="My Dictionary" subtitle="Save new words from any lesson — with meanings, examples, pictures and audio.">
        <p className="text-center text-sm text-slate-600">My Dictionary is for Practispeak students.</p>
        <a
          href={BECOME_STUDENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-[15px] font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Become a student
        </a>
      </AuthCard>
    );
  }

  // Row Level Security returns only this student's words.
  const { data } = await createClient()
    .from('dictionary_entries')
    .select('*')
    .order('created_at', { ascending: false });

  const entries: DictionaryItem[] = (data ?? []).map((row) => ({ ...row, source: sourceFor(row.lesson_slug) }));

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FB]">
      <SiteHeader active="" />
      <main className="flex-1">
        <DictionaryView entries={entries} />
      </main>
      <SiteFooter />
    </div>
  );
}
