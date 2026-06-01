import { Lesson } from '@/types/lesson';
import { teamCommunication } from './team-communication';
import { gameOnFirstWords } from './game-on-first-words';
import { actionVerbsMoveYourCharacter } from './action-verbs-move-your-character';
import { describingCharacters } from './describing-characters';
/**
 * Add new lessons here by importing the lesson file and adding it to this array.
 * The lesson page routing and home page listing are automatic.
 */
export const lessons: Lesson[] = [
  teamCommunication,
  gameOnFirstWords,
  actionVerbsMoveYourCharacter,
  describingCharacters,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
