import type { Metadata } from 'next';
import MonsterPhrasesGame from '@/components/MonsterPhrasesGame';

export const metadata: Metadata = {
  title: 'Monster Phrases | Practispeak Games',
  description:
    'Build English sentences from word tiles to match the picture. A fun ESL sentence-building game covering is/are, tenses, can/can’t, and more.',
};

export default function MonsterPhrasesPage() {
  return <MonsterPhrasesGame />;
}
