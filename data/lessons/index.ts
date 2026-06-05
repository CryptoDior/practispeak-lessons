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
import { onlineToxicityCommunication } from './online-toxicity-communication';
import { esportsCompetitiveGaming } from './esports-competitive-gaming';
import { narrativeTensesStorytelling } from './narrative-tenses-storytelling';
import { socialGamingMakingFriends } from './social-gaming-making-friends';
import { techTalkLagTroubleshooting } from './tech-talk-lag-troubleshooting';
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
  onlineToxicityCommunication,
  esportsCompetitiveGaming,
  narrativeTensesStorytelling,
  socialGamingMakingFriends,
  techTalkLagTroubleshooting,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
