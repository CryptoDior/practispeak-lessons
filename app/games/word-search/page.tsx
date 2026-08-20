import type { Metadata } from 'next';
import WordSearchGame from '@/components/WordSearchGame';

export const metadata: Metadata = {
  title: 'Word Search | Practispeak Games',
  description:
    'Find the hidden words that match the pictures. A fun ESL vocabulary and spelling game.',
};

export default function WordSearchPage() {
  return <WordSearchGame />;
}
