import type { Metadata } from 'next';
import HangmanGame from '@/components/HangmanGame';

export const metadata: Metadata = {
  title: 'Hangman | Practispeak Games',
  description:
    'Guess the hidden word one letter at a time. A classic ESL vocabulary and spelling game with themed word lists.',
};

export default function HangmanPage() {
  return <HangmanGame />;
}
