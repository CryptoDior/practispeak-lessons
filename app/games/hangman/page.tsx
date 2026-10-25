import type { Metadata } from 'next';
import HangmanGame from '@/components/HangmanGame';
import { lessonWordSets, EVERYDAY_A1_A2, SINGLE_WORD } from '@/lib/gameSets';

export const metadata: Metadata = {
  title: 'Hangman | Practispeak Games',
  description:
    'Guess the hidden word one letter at a time. A classic ESL vocabulary and spelling game with themed word lists.',
};

// Lesson topics follow newly uploaded pictures, refreshed hourly.
export const revalidate = 3600;

export default async function HangmanPage() {
  const lessonSets = await lessonWordSets({
    ...EVERYDAY_A1_A2,
    wordPattern: SINGLE_WORD,
    blurb: (title) => `Guess the words from “${title}”.`,
  });
  return <HangmanGame lessonSets={lessonSets} />;
}
