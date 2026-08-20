import type { Metadata } from 'next';
import SpellingBeeGame from '@/components/SpellingBeeGame';

export const metadata: Metadata = {
  title: 'Spelling Bee | Practispeak Games',
  description:
    'Look at the picture and spell the word. A fun ESL spelling game with topics like animals, food, home, and more.',
};

export default function SpellingBeePage() {
  return <SpellingBeeGame />;
}
