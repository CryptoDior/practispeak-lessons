import { Lesson } from '@/types/lesson';
import { teamCommunication } from './team-communication';

/**
 * Add new lessons here by importing the lesson file and adding it to this array.
 * The lesson page routing and home page listing are automatic.
 */
export const lessons: Lesson[] = [
  teamCommunication,
  // Add new lessons below this line:
  // myNewLesson,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
