import { Lesson } from '@/types/lesson';
import { teamCommunication } from './team-communication';
import { gameOnFirstWords } from './game-on-first-words';
import { actionVerbsMoveYourCharacter } from './action-verbs-move-your-character';
import { describingCharacters } from './describing-characters';
import { gamingJargonDeepDive } from './gaming-jargon-deep-dive';
import { talkingStrategy } from './talking-strategy';
import { streamingContentCreation } from './streaming-content-creation';
import { iAmAPlayer } from './i-am-a-player';
import { gameGenres } from './game-genres';
import { inventory } from './inventory';
import { ggBasicGamingChat } from './gg-basic-gaming-chat';
import { questionsWhatWhoWhere } from './questions-what-who-where';
/**
 * Add new lessons here by importing the lesson file and adding it to this array.
 * The lesson page routing and home page listing are automatic.
 */
export const lessons: Lesson[] = [
  teamCommunication,
  gameOnFirstWords,
  actionVerbsMoveYourCharacter,
  describingCharacters,
  gamingJargonDeepDive,
  talkingStrategy,
  streamingContentCreation,
  iAmAPlayer,
  gameGenres,
  inventory,
  ggBasicGamingChat,
  questionsWhatWhoWhere,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
