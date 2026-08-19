import type { Metadata } from 'next';
import QuestionGenerator from '@/components/QuestionGenerator';

export const metadata: Metadata = {
  title: 'Conversation Questions | Practispeak',
  description:
    'A random conversation question generator for English practice. Pick a topic and get questions to talk about — great for speaking practice, ESL classes, and warm-ups.',
};

export default function QuestionsPage() {
  return <QuestionGenerator />;
}
