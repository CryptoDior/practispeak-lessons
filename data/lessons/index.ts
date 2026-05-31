import { Lesson } from '@/types/lesson';
import { teamCommunication } from './team-communication';
import { gameOnFirstWords } from './game-on-first-words';

/**
 * Add new lessons here by importing the lesson file and adding it to this array.
 * The lesson page routing and home page listing are automatic.
 */
export const lessons: Lesson[] = [
  teamCommunication,
  gameOnFirstWords,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
