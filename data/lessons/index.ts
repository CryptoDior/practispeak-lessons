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
import { gamingCultureIdentity } from './gaming-culture-identity';
import { advancedVocabularyEtymologyCollocations } from './advanced-vocabulary-etymology-collocations';
import { theGamingIndustry } from './the-gaming-industry';
import { gamingEthicsSociety } from './gaming-ethics-society';
import { esportsAsAProfession } from './esports-as-a-profession';
import { gameDesignLanguage } from './game-design-language';
import { streamingRhetoric } from './streaming-rhetoric';
import { languageInGamingCommunities } from './language-in-gaming-communities';
import { salesVocabularyBasics } from './sales-vocabulary-basics';
import { introducingYourselfSalesperson } from './introducing-yourself-salesperson';
import { talkingAboutProducts } from './talking-about-products';
import { askingWhatTheCustomerWants } from './asking-what-the-customer-wants';
import { describingProductFeatures } from './describing-product-features';
import { talkingAboutPrices } from './talking-about-prices';
import { offeringHelp } from './offering-help';
import { simpleCustomerQuestions } from './simple-customer-questions';
import { givingSimpleAnswers } from './giving-simple-answers';
import { colorsSizesAndTypes } from './colors-sizes-and-types';
import { theSalesProcess } from './the-sales-process';
import { salesCallStructure } from './sales-call-structure';
import { buildingRapport } from './building-rapport';
import { askingNeedsBasedQuestions } from './asking-needs-based-questions';
import { identifyingCustomerPainPoints } from './identifying-customer-pain-points';
import { presentingBenefitsVsFeatures } from './presenting-benefits-vs-features';
import { makingPersuasiveRecommendations } from './making-persuasive-recommendations';
import { handlingBasicObjections } from './handling-basic-objections';
import { talkingAboutValueNotPrice } from './talking-about-value-not-price';
import { explainingPackagesAndPlans } from './explaining-packages-and-plans';
import { advancedPersuasiveLanguage } from './advanced-persuasive-language';
import { consultativeSelling } from './consultative-selling';

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
  gamingCultureIdentity,
  advancedVocabularyEtymologyCollocations,
  theGamingIndustry,
  gamingEthicsSociety,
  esportsAsAProfession,
  gameDesignLanguage,
  streamingRhetoric,
  languageInGamingCommunities,
  salesVocabularyBasics,
  introducingYourselfSalesperson,
  talkingAboutProducts,
  askingWhatTheCustomerWants,
  describingProductFeatures,
  talkingAboutPrices,
  offeringHelp,
  simpleCustomerQuestions,
  givingSimpleAnswers,
  colorsSizesAndTypes,
  theSalesProcess,
  salesCallStructure,
  buildingRapport,
  askingNeedsBasedQuestions,
  identifyingCustomerPainPoints,
  presentingBenefitsVsFeatures,
  makingPersuasiveRecommendations,
  handlingBasicObjections,
  talkingAboutValueNotPrice,
  explainingPackagesAndPlans,
  advancedPersuasiveLanguage,
  consultativeSelling,
];
export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
