import type { Metadata } from 'next';
import SpellingBeeGame from '@/components/SpellingBeeGame';
import { spellSetsFromCategory } from '@/lib/gameSets';

export const metadata: Metadata = {
  title: 'Spelling Bee | Practispeak Games',
  description:
    'Look at the picture and spell the word. A fun ESL spelling game with topics like animals, food, home, and more.',
};

// Lesson topics follow newly uploaded pictures, refreshed hourly (like the 🚧 triangles).
export const revalidate = 3600;

export default async function SpellingBeePage() {
  const lessonSets = await spellSetsFromCategory('everyday', 'beginner', 'Everyday Life · A1–A2');
  return <SpellingBeeGame lessonSets={lessonSets} />;
}
