import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import FlashcardReview, { type ReviewCard } from '@/components/dictionary/FlashcardReview';
import { createClient, getUserAndPlan } from '@/lib/supabase/server';
import { resolveImageUrl } from '@/lib/images';

export const metadata: Metadata = { title: 'Review my words | Practispeak' };
export const dynamic = 'force-dynamic';

const PER_SESSION = 20;

export default async function ReviewPage() {
  const { user, plan } = await getUserAndPlan();
  if (!user) redirect('/login?next=/dictionary/review');
  if (plan !== 'pro') redirect('/dictionary');

  const supabase = createClient();
  // Row Level Security returns only this student's words.
  const { data } = await supabase
    .from('dictionary_entries')
    .select('id, word, part_of_speech, definition, example, image_slug, review_box, audio_slugs, lesson_slug')
    .lte('next_review_at', new Date().toISOString())
    .order('next_review_at', { ascending: true })
    .limit(PER_SESSION);

  const cards: ReviewCard[] = (data ?? []).map((r) => ({
    id: r.id,
    word: r.word,
    partOfSpeech: r.part_of_speech,
    definition: r.definition,
    example: r.example,
    image: r.image_slug ? resolveImageUrl(r.image_slug) : null,
    isNew: r.review_box === 0,
    audioSlugs: r.audio_slugs ?? [],
    lessonSlug: r.lesson_slug ?? undefined,
  }));

  // When the next word is due (shown when nothing is due now)
  let nextDue: string | null = null;
  if (!cards.length) {
    const { data: next } = await supabase
      .from('dictionary_entries')
      .select('next_review_at')
      .order('next_review_at', { ascending: true })
      .limit(1)
      .maybeSingle();
    nextDue = next?.next_review_at ?? null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FB]">
      <SiteHeader active="" />
      <main className="flex-1 font-poppins max-w-2xl w-full mx-auto px-4 sm:px-6 pt-8 pb-16">
        <Link href="/dictionary" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          ← My Dictionary
        </Link>
        <header className="mt-4 mb-8">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-blue-600 uppercase mb-2">Flashcards</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-slate-900">Review my words</h1>
          <p className="mt-2 text-[15px] text-slate-600">
            Words you know come back later and later (1 day, 3 days, a week…). Words you forget come back sooner.
          </p>
        </header>
        <FlashcardReview cards={cards} nextDue={nextDue} />
      </main>
      <SiteFooter />
    </div>
  );
}
