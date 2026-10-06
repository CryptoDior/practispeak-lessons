import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-negotiating-international-partners-${s}.png`;

export const businessNegotiatingInternationalPartners: Lesson = {
  slug: 'business-negotiating-international-partners',
  title: 'Negotiating with International Partners',
  subtitle: 'C1-C2 · Global Business · Lesson 3',
  level: 'C1-C2',
  description:
    'Negotiate effectively across borders: justify positions with data, explore options without confrontation, break a stalemate and build a foundation for mutual benefit.',
  heroImage: img('hero'),

  objectives: [
    'Justify your position professionally with data.',
    'Invite flexibility and explore alternatives.',
    'Break a stalemate and secure agreement on key points.',
  ],

  vocabulary: [
    { word: 'BARGAINING', partOfSpeech: 'noun', definition: 'Discussing terms to reach an agreement, often about price.', example: 'Bargaining is expected in some markets.', imageSlug: img('bargaining') },
    { word: 'CONCESSION', partOfSpeech: 'noun', definition: 'Something you give up to reach a deal.', example: 'Both sides made concessions.', imageSlug: img('concession') },
    { word: 'COMPROMISE', partOfSpeech: 'noun / verb', definition: 'An agreement where each side accepts less than it wanted.', example: 'We compromised on the delivery date.', imageSlug: img('compromise') },
    { word: 'LEVERAGE', partOfSpeech: 'noun', definition: 'The power or advantage that strengthens your position.', example: 'Our exclusive technology gives us leverage.', imageSlug: img('leverage') },
    { word: 'STALEMATE', partOfSpeech: 'noun', definition: 'A situation where neither side can progress.', example: 'After two hours, talks reached a stalemate.', imageSlug: img('stalemate') },
    { word: 'MUTUAL BENEFIT', partOfSpeech: 'noun', definition: 'A result that helps both sides.', example: 'The deal was designed for mutual benefit.', imageSlug: img('mutual-benefit') },
  ],

  phrasalVerbs: [
    { phrase: "Let's look for a solution that works for both sides.", tag: 'phrase', definition: 'Keep the tone collaborative.', example: '"We\'re both under pressure. Let\'s look for a solution that works for both sides."', imageSlug: img('both-sides') },
    { phrase: 'From our end, this figure reflects current market realities.', tag: 'phrase', definition: 'Justify your position with data.', example: '"From our end, this figure reflects current market realities — raw material costs rose 12%."', imageSlug: img('market-realities') },
    { phrase: 'Would you be open to exploring other options?', tag: 'phrase', definition: 'Invite flexibility without confrontation.', example: '"If the price is fixed, would you be open to exploring other options?"', imageSlug: img('open-to-exploring') },
    { phrase: 'We understand your concerns; perhaps we can adjust the timeline.', tag: 'phrase', definition: 'Balance empathy and negotiation.', example: '"We understand your concerns; perhaps we can adjust the timeline instead of the price."', imageSlug: img('adjust-timeline') },
    { phrase: "If we can agree on this point, we'll have a strong foundation.", tag: 'phrase', definition: 'Secure agreement step by step to break a stalemate.', example: '"If we can agree on quality standards, we\'ll have a strong foundation to move forward."', inAction: 'When talks stall, agree on small points first. Momentum from small "yeses" often unlocks the big issues.', imageSlug: img('strong-foundation') },
    { phrase: 'MEET (SOMEONE) HALFWAY', tag: 'idiom', definition: 'To compromise by each giving up part of what you want.', example: 'You want 60 days, we want 30 — can we meet halfway at 45?', imageSlug: img('meet-halfway') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Your price increase of 12% is not acceptable for us. Our budget is fixed for this year." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I understand. From our end, this figure reflects current market realities — our steel costs alone rose by 15%." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "We have alternative suppliers in Vietnam who are cheaper." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's fair, but our quality and delivery times give us some [[leverage:power that strengthens our position]]. It seems we're at a [[stalemate:situation where no one can progress]] on price. Would you be open to exploring other options?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Such as?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "We could keep the increase at 6% if you commit to a two-year contract. And perhaps we can adjust the timeline — the increase starts in July, not January." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That's a real [[concession:something given up]]. Could we meet halfway on the contract — eighteen months?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Eighteen months works. If we can agree on this point, we'll have a strong foundation. That's a good [[compromise:agreement where both accept less]] — real [[mutual benefit:help for both sides]]." },
  ],

  matchingExercise: [
    { word: 'BARGAINING', definition: 'Discussing terms to reach a deal' },
    { word: 'CONCESSION', definition: 'Something you give up' },
    { word: 'LEVERAGE', definition: 'Power that strengthens your position' },
    { word: 'STALEMATE', definition: 'A situation where no one can progress' },
    { word: 'MUTUAL BENEFIT', definition: 'Help for both sides' },
    { word: 'MEET HALFWAY', definition: 'Each give up part of what you want' },
  ],

  fillBlankExercise: [
    { before: "Let's look for a solution that works for both", after: '.', answer: 'sides' },
    { before: 'From our end, this figure reflects current market', after: '.', answer: 'realities' },
    { before: 'Would you be open to', after: 'other options?', answer: 'exploring' },
    { before: 'Perhaps we can adjust the', after: '.', answer: 'timeline' },
    { before: 'Can we meet', after: 'at 45 days?', answer: 'halfway' },
    { before: 'After two hours, talks reached a', after: '.', answer: 'stalemate' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "stalemate"?', options: ['A quick agreement', 'A situation where neither side can progress', 'A contract', 'A discount'], correctIndex: 1 },
    { question: 'How can you break a stalemate?', options: ['Walk out', 'Agree on small points first to build momentum', 'Raise your voice', 'Repeat your offer'], correctIndex: 1 },
    { question: 'What does "meet halfway" mean?', options: ['Meet in the middle of a city', 'Compromise by each giving up part', 'Arrive late', 'Cancel the deal'], correctIndex: 1 },
    { question: 'In the dialogue, what increase does Kira finally offer?', options: ['12%', '15%', '6%', '0%'], correctIndex: 2 },
    { question: 'How long is the agreed contract?', options: ['One year', 'Eighteen months', 'Two years', 'Three years'], correctIndex: 1 },
  ],
};
