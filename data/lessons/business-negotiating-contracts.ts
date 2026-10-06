import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-negotiating-contracts-${s}.png`;

export const businessNegotiatingContracts: Lesson = {
  slug: 'business-negotiating-contracts',
  title: 'Negotiating Contracts and Agreements',
  subtitle: 'C1-C2 · Meetings & Negotiation · Lesson 2',
  level: 'C1-C2',
  description:
    'Learn the language of contract negotiation: discussing clauses, proposing amendments, making concessions and reaching a mutually acceptable, binding agreement.',
  heroImage: img('hero'),

  objectives: [
    'Discuss specific clauses and terms precisely.',
    'Propose amendments and trade concessions.',
    'Confirm final terms and next steps.',
  ],

  vocabulary: [
    { word: 'NEGOTIATION', partOfSpeech: 'noun', definition: 'A formal discussion to reach an agreement.', example: 'The negotiation ended with a fair deal.', imageSlug: img('negotiation') },
    { word: 'CLAUSE', partOfSpeech: 'noun', definition: 'A specific rule or condition in a contract.', example: 'The penalty clause is too strict.', imageSlug: img('clause') },
    { word: 'CONCESSION', partOfSpeech: 'noun', definition: 'Something you agree to give up or change to reach a deal.', example: 'They made a concession on delivery time.', imageSlug: img('concession') },
    { word: 'MUTUAL', partOfSpeech: 'adjective', definition: 'Shared equally by both sides.', example: 'We reached a mutual understanding.', imageSlug: img('mutual') },
    { word: 'AMEND', partOfSpeech: 'verb', definition: 'To make changes to a document.', example: 'We amended the contract after review.', imageSlug: img('amend') },
    { word: 'BINDING', partOfSpeech: 'adjective', definition: 'Legally required; it must be obeyed.', example: 'Once signed, the contract is legally binding.', imageSlug: img('binding') },
  ],

  phrasalVerbs: [
    { phrase: 'BACK OUT (OF)', definition: 'To withdraw from something you had agreed to.', example: 'The supplier backed out of the deal at the last minute.', imageSlug: img('back-out') },
    { phrase: 'DRAW UP', definition: 'To prepare a document or contract.', example: 'Legal will draw up the final version.', imageSlug: img('draw-up') },
    { phrase: 'GO OVER', definition: 'To review something carefully.', example: "Let's go over the new terms together.", imageSlug: img('go-over') },
    { phrase: "We'd like to propose an amendment to clause…", tag: 'phrase', definition: 'Formally suggest a change.', example: '"We\'d like to propose an amendment to clause 7 regarding penalties."', imageSlug: img('propose-amendment') },
    { phrase: 'We could accept that, provided that…', tag: 'phrase', definition: 'Make a conditional concession.', example: '"We could accept a longer payment term, provided that the volume increases."', inAction: '"Provided that", "on condition that" and "as long as" let you trade concessions — never give something without getting something back.', imageSlug: img('provided-that') },
    { phrase: "That's a deal-breaker for us.", tag: 'phrase', definition: 'Say a term is completely unacceptable.', example: '"An exclusivity clause is a deal-breaker for us."', imageSlug: img('deal-breaker') },
    { phrase: 'So, to confirm the terms we\'ve agreed…', tag: 'phrase', definition: 'Summarise agreed points before closing.', example: '"So, to confirm the terms we\'ve agreed: 60-day payment, 5% discount."', imageSlug: img('confirm-terms') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Thank you for sending the draft. Before we sign, we'd like to go over a few points." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Of course. Which [[clause:rule or condition in the contract]]s concern you?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Clause 7. A 10% penalty for late delivery is very strict. We'd like to propose an [[amendment:change]]: 5%, with a two-day grace period." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "We could accept that, provided that you commit to a minimum order of 2,000 units per quarter." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That's reasonable. In return, we'd ask for 60-day payment terms instead of 30." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Sixty days is difficult. Could we meet at 45? That would be a significant [[concession:something we give up]] on our side." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "45 works. And the exclusivity clause — that's a deal-breaker for us." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Understood, we'll remove it. So, to confirm: 5% penalty with grace period, 2,000 units minimum, 45-day payment, no exclusivity. I'll ask legal to [[draw up:prepare]] the [[binding:legally required]] version by Friday." },
  ],

  matchingExercise: [
    { word: 'CLAUSE', definition: 'A specific condition in a contract' },
    { word: 'CONCESSION', definition: 'Something you give up to reach a deal' },
    { word: 'AMEND', definition: 'To change a document' },
    { word: 'BINDING', definition: 'Legally required' },
    { word: 'MUTUAL', definition: 'Shared equally by both sides' },
    { word: 'BACK OUT', definition: 'To withdraw from an agreement' },
  ],

  fillBlankExercise: [
    { before: "We'd like to propose an", after: 'to clause 7.', answer: 'amendment' },
    { before: 'We could accept that,', after: 'that you increase the volume.', answer: 'provided' },
    { before: "That's a", after: '-breaker for us.', answer: 'deal' },
    { before: 'Legal will', after: 'up the final version.', answer: 'draw' },
    { before: 'Once signed, the contract is legally', after: '.', answer: 'binding' },
    { before: 'The supplier backed', after: 'of the deal at the last minute.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "deal-breaker"?', options: ['A good offer', 'A term that is completely unacceptable', 'A signed contract', 'A discount'], correctIndex: 1 },
    { question: 'Which phrase makes a conditional concession?', options: ['We could accept that, provided that…', 'No way.', 'Let\'s sign.', 'I disagree.'], correctIndex: 0 },
    { question: 'What does "binding" mean?', options: ['Optional', 'Legally required', 'Temporary', 'Cancelled'], correctIndex: 1 },
    { question: 'In the dialogue, what payment terms are agreed?', options: ['30 days', '45 days', '60 days', '90 days'], correctIndex: 1 },
    { question: 'What clause is removed?', options: ['The penalty clause', 'The exclusivity clause', 'The payment clause', 'The delivery clause'], correctIndex: 1 },
  ],
};
