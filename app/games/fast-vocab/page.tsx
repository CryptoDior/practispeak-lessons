import type { Metadata } from 'next';
import FastVocabGame from '@/components/FastVocabGame';
import { lessonWordSets, EVERYDAY_A1_A2, SHORT_TERM } from '@/lib/gameSets';

export const metadata: Metadata = {
  title: 'Fast Vocab | Practispeak Games',
  description: 'Match the words to the pictures as fast as you can. A quick ESL vocabulary game.',
};

// Lesson topics follow newly uploaded pictures, refreshed hourly.
export const revalidate = 3600;

export default async function FastVocabPage() {
  const lessonSets = await lessonWordSets({
    ...EVERYDAY_A1_A2,
    wordPattern: SHORT_TERM, // matching game: two-word items like "nail polish" work too
    minWords: 6, // at least two rounds of three
    blurb: (title) => `Match the words from “${title}”.`,
  });
  return <FastVocabGame lessonSets={lessonSets} />;
}
