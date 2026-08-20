import type { Metadata } from 'next';
import FastVocabGame from '@/components/FastVocabGame';

export const metadata: Metadata = {
  title: 'Fast Vocab | Practispeak Games',
  description: 'Match the words to the pictures as fast as you can. A quick ESL vocabulary game.',
};

export default function FastVocabPage() {
  return <FastVocabGame />;
}
