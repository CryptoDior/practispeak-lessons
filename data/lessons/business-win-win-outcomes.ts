import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-win-win-outcomes-${s}.png`;

export const businessWinWinOutcomes: Lesson = {
  slug: 'business-win-win-outcomes',
  title: 'Achieving Win-Win Outcomes',
  subtitle: 'C1-C2 · Meetings & Negotiation · Lesson 6',
  level: 'C1-C2',
  description:
    'Move from "who wins?" to "how can we both win?". Learn collaborative negotiation language: uncovering interests, creating value, trading what matters and building long-term partnerships.',
  heroImage: img('hero'),

  objectives: [
    'Explore the other side\'s interests, not just their position.',
    'Propose creative options that create mutual benefit.',
    'Build reciprocal trust for a long-term partnership.',
  ],

  vocabulary: [
    { word: 'WIN-WIN', partOfSpeech: 'adjective', definition: 'Benefiting all sides.', example: 'Our goal is a win-win agreement.', imageSlug: img('win-win') },
    { word: 'MUTUAL BENEFIT', partOfSpeech: 'noun', definition: 'An advantage for both sides.', example: 'The partnership works because of mutual benefit.', imageSlug: img('mutual-benefit') },
    { word: 'SYNERGY', partOfSpeech: 'noun', definition: 'Extra value created when people or teams work well together.', example: "There's real synergy between our two companies.", imageSlug: img('synergy') },
    { word: 'LEVERAGE', partOfSpeech: 'verb', definition: 'To use something to gain an advantage.', example: "We can leverage each other's networks.", imageSlug: img('leverage') },
    { word: 'RECIPROCAL', partOfSpeech: 'adjective', definition: 'Given and received equally by both sides.', example: 'A good partnership is based on reciprocal trust.', imageSlug: img('reciprocal') },
    { word: 'INTERESTS', partOfSpeech: 'noun', definition: 'The underlying needs behind what someone asks for.', example: 'Focus on interests, not positions.', imageSlug: img('interests') },
  ],

  phrasalVerbs: [
    { phrase: 'WORK OUT', definition: 'To find a solution together.', example: 'We can work out a plan that suits both sides.', imageSlug: img('work-out') },
    { phrase: 'GIVE UP', definition: 'To let go of something to gain something else.', example: 'We gave up one clause to secure a better deal.', imageSlug: img('give-up') },
    { phrase: 'COME AROUND', definition: 'To eventually agree after discussion.', example: 'The client came around after hearing our proposal.', imageSlug: img('come-around') },
    { phrase: "What's most important to you in this deal?", tag: 'phrase', definition: "Uncover the other side's real interests.", example: '"Before we talk numbers — what\'s most important to you in this deal?"', inAction: 'POSITION = what they ask for ("a lower price"). INTEREST = why ("cash flow is tight"). Win-win deals solve interests, not positions.', imageSlug: img('most-important') },
    { phrase: 'What if we approached it differently?', tag: 'phrase', definition: 'Introduce a creative option.', example: '"What if we approached it differently — lower price, longer contract?"', imageSlug: img('approach-differently') },
    { phrase: 'That way, we both…', tag: 'phrase', definition: 'Show the mutual benefit of a proposal.', example: '"That way, we both reduce risk and grow together."', imageSlug: img('that-way') },
    { phrase: "Let's build on this for the long term.", tag: 'phrase', definition: 'Frame the deal as a lasting partnership.', example: '"This is a good start. Let\'s build on this for the long term."', imageSlug: img('long-term') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "We need a 15% discount, or we'll have to look at other suppliers." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I hear you. Before we talk numbers, can I ask — what's most important to you in this deal?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Honestly? Cash flow. We're expanding into Brazil and money is tight this year." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's helpful. So your real [[interests:underlying needs]] are cash flow and growth, not just price. What if we approached it differently?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "We keep the price, but you pay over 90 days instead of 30, and we include free onboarding for your Brazilian team." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That would help a lot. And in return?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "A three-year agreement and a case study we can use in Latin America. That way, we both grow — real [[mutual benefit:advantage for both sides]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I like it. There's real [[synergy:extra value from working together]] here. We could also [[leverage:use to gain an advantage]] our contacts in São Paulo for you." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect — [[reciprocal:given equally by both]] support. Let's build on this for the long term. A true [[win-win:benefiting both sides]]." },
  ],

  matchingExercise: [
    { word: 'WIN-WIN', definition: 'Benefiting all sides' },
    { word: 'SYNERGY', definition: 'Extra value from working together' },
    { word: 'LEVERAGE', definition: 'Use something to gain an advantage' },
    { word: 'RECIPROCAL', definition: 'Given and received equally' },
    { word: 'INTERESTS', definition: 'Underlying needs behind a request' },
    { word: 'COME AROUND', definition: 'Eventually agree' },
  ],

  fillBlankExercise: [
    { before: "What's most", after: 'to you in this deal?', answer: 'important' },
    { before: 'What if we approached it', after: '?', answer: 'differently' },
    { before: 'That', after: ', we both reduce risk.', answer: 'way' },
    { before: 'We can work', after: 'a plan that suits both sides.', answer: 'out' },
    { before: 'A good partnership is based on', after: 'trust.', answer: 'reciprocal' },
    { before: 'The client came', after: 'after hearing our proposal.', answer: 'around' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the difference between a position and an interest?', options: ['No difference', 'Position = what they ask for; interest = why they need it', 'Interest = the price', 'Position = the deadline'], correctIndex: 1 },
    { question: 'What does "synergy" mean?', options: ['A conflict', 'Extra value from working together', 'A discount', 'A contract'], correctIndex: 1 },
    { question: 'Which question uncovers interests?', options: ["What's most important to you in this deal?", 'Will you sign?', 'Is that your final offer?', 'Why so expensive?'], correctIndex: 0 },
    { question: "In the dialogue, what is Maria's real interest?", options: ['A lower price', 'Cash flow during expansion', 'A new product', 'Faster delivery'], correctIndex: 1 },
    { question: 'What does Kira offer instead of a discount?', options: ['Free products', '90-day payment and free onboarding', 'A 20% discount', 'Nothing'], correctIndex: 1 },
  ],
};
