import type { Metadata } from 'next';
import SpellingBeeGame from '@/components/SpellingBeeGame';
import { lessonWordSets, EVERYDAY_A1_A2, SINGLE_WORD } from '@/lib/gameSets';

export const metadata: Metadata = {
  title: 'Spelling Bee | Practispeak Games',
  description:
    'Look at the picture and spell the word. A fun ESL spelling game with topics like animals, food, home, and more.',
};

// Lesson topics follow newly uploaded pictures, refreshed hourly (like the 🚧 triangles).
export const revalidate = 3600;

export default async function SpellingBeePage() {
  const lessonSets = await lessonWordSets({
    ...EVERYDAY_A1_A2,
    wordPattern: SINGLE_WORD,
    blurb: (title) => `Words from the “${title}” lesson.`,
  });
  return <SpellingBeeGame lessonSets={lessonSets} />;
}
