import type { Metadata } from 'next';
import DailyRoutinesGame from '@/components/DailyRoutinesGame';

export const metadata: Metadata = {
  title: 'Daily Routines | Practispeak Games',
  description:
    'Listen to a daily-routine phrase and tap the matching picture. A fun ESL listening and vocabulary game.',
};

export default function DailyRoutinesPage() {
  return <DailyRoutinesGame />;
}
