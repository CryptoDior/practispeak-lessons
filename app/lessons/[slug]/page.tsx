import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '@/data/lessons';
import { findLessonInCatalog } from '@/lib/series';
import { bandForLevel } from '@/lib/levels';
import { getUserAndPlan } from '@/lib/supabase/server';
import LessonView, { type LessonCategoryInfo } from '@/components/lesson/LessonView';
import LockedLesson from '@/components/lesson/LockedLesson';
import { DictionaryProvider } from '@/components/dictionary/DictionaryProvider';

// Depends on who is logged in, so never cache one student's page for another.
export const dynamic = 'force-dynamic';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lesson = getLessonBySlug(params.slug);
  return { title: lesson ? `${lesson.title} | Practispeak` : 'Lesson | Practispeak' };
}

function categoryInfo(slug: string, level: string): LessonCategoryInfo | null {
  const found = findLessonInCatalog(slug);
  if (!found) return null;
  const { category } = found;
  const bandId = bandForLevel(level).id;
  const lessonNo =
    category.lessons.filter((l) => bandForLevel(l.level).id === bandId).findIndex((l) => l.slug === slug) + 1;
  return { id: category.id, name: category.name, image: category.image, imageAlt: category.imageAlt, lessonNo };
}

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) notFound();

  const found = findLessonInCatalog(lesson.slug);
  const category = categoryInfo(lesson.slug, lesson.level);
  const premium = found?.summary.premium ?? true;

  if (premium) {
    const { user, plan } = await getUserAndPlan();
    if (plan !== 'pro') {
      // Only the lesson's title card goes to the browser — none of its content.
      return (
        <LockedLesson
          slug={lesson.slug}
          title={lesson.title}
          level={lesson.level}
          description={lesson.description}
          heroImage={lesson.heroImage}
          words={lesson.vocabulary.length}
          phrases={lesson.phrasalVerbs.length}
          category={category}
          loggedIn={!!user}
        />
      );
    }
  }

  return (
    // Gives every vocab/phrase card its ☆ Save to My Dictionary button.
    <DictionaryProvider>
      <LessonView lesson={lesson} category={category} />
    </DictionaryProvider>
  );
}
