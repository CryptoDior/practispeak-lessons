/*
 * Server-only: build game word sets from lesson vocabulary, reusing the lessons' words and
 * pictures (no separate game images). Lessons are loaded here, never in the browser bundle.
 */
import { getLessonBySlug } from '@/data/lessons';
import { getCatalog, bandForLevel } from '@/lib/series';
import { resolveImageUrl } from '@/lib/images';
import { listR2Keys, imageExists } from '@/lib/imageStatus';
import type { SpellSet } from '@/data/spellingBee';

/** Fewest pictured, spellable words a lesson needs to become a game topic. */
const MIN_WORDS = 4;

/**
 * One Spelling Bee topic per lesson in a category and level band (e.g. Everyday Life, A1–A2).
 * Only single words (a–z) whose picture is actually uploaded are used, so the game never shows
 * an empty or emoji picture. If the uploads can't be checked, any word with a picture link counts.
 */
export async function spellSetsFromCategory(
  categoryId: string,
  bandId: string,
  group: string
): Promise<SpellSet[]> {
  const category = getCatalog().find((c) => c.id === categoryId);
  if (!category) return [];
  const keys = await listR2Keys();

  const sets: SpellSet[] = [];
  for (const summary of category.lessons) {
    if (bandForLevel(summary.level).id !== bandId) continue;
    const lesson = getLessonBySlug(summary.slug);
    if (!lesson) continue;

    const seen = new Set<string>();
    const items = lesson.vocabulary
      .map((v) => ({ word: v.word.trim().toLowerCase(), imageSlug: v.imageSlug }))
      .filter((v) => /^[a-z]+$/.test(v.word) && !seen.has(v.word) && seen.add(v.word))
      .filter((v) => (keys ? imageExists(keys, v.imageSlug) : !!resolveImageUrl(v.imageSlug)))
      .map((v) => ({ word: v.word, image: resolveImageUrl(v.imageSlug)!, scene: '🖼️', fit: 'contain' as const }));

    if (items.length < MIN_WORDS) continue;
    sets.push({
      id: `lesson-${lesson.slug}`,
      label: lesson.title,
      blurb: `Words from the “${lesson.title}” lesson.`,
      items,
      lessonSlug: lesson.slug,
      group,
    });
  }
  return sets;
}
