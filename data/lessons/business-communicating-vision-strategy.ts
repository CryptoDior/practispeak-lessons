import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-communicating-vision-strategy-${s}.png`;

export const businessCommunicatingVisionStrategy: Lesson = {
  slug: 'business-communicating-vision-strategy',
  title: 'Communicating Vision and Strategy',
  subtitle: 'C1-C2 · Leadership Communication · Lesson 5',
  level: 'C1-C2',
  description:
    'Learn how leaders explain where the organisation is going and why: articulating a vision, linking strategy to outcomes and creating alignment and ownership.',
  heroImage: img('hero'),

  objectives: [
    'Articulate a long-term vision clearly and inspiringly.',
    'Link strategic actions to concrete outcomes.',
    'Create alignment and a sense of ownership.',
  ],

  vocabulary: [
    { word: 'VISION', partOfSpeech: 'noun', definition: 'A clear idea of what an organisation wants to become.', example: 'Our vision is to be the most trusted brand in Europe.', imageSlug: img('vision') },
    { word: 'STRATEGY', partOfSpeech: 'noun', definition: 'A detailed plan to achieve long-term goals.', example: 'The new strategy focuses on digital growth.', imageSlug: img('strategy') },
    { word: 'ALIGNMENT', partOfSpeech: 'noun', definition: 'Agreement and coordination around shared goals.', example: 'We need alignment between sales and product.', imageSlug: img('alignment') },
    { word: 'INITIATIVE', partOfSpeech: 'noun', definition: 'A new plan or project to achieve a goal.', example: 'The sustainability initiative launches in March.', imageSlug: img('initiative') },
    { word: 'ROADMAP', partOfSpeech: 'noun', definition: 'A plan showing the steps and timeline to reach a goal.', example: 'The three-year roadmap is on the intranet.', imageSlug: img('roadmap') },
    { word: 'MILESTONE', partOfSpeech: 'noun', definition: 'An important stage or achievement in a project.', example: 'Reaching 1 million users is our next milestone.', imageSlug: img('milestone') },
  ],

  phrasalVerbs: [
    { phrase: 'Our vision is to…', tag: 'phrase', definition: 'Introduce long-term aspirations.', example: '"Our vision is to make language learning accessible to everyone."', imageSlug: img('our-vision') },
    { phrase: 'This strategy will help us achieve…', tag: 'phrase', definition: 'Link actions to outcomes.', example: '"This strategy will help us achieve 40% growth in three years."', imageSlug: img('strategy-achieve') },
    { phrase: 'The purpose behind this initiative is…', tag: 'phrase', definition: 'Explain the "why".', example: '"The purpose behind this initiative is to reduce our carbon footprint."', inAction: 'Start with WHY (purpose), then HOW (strategy), then WHAT (actions). People commit to reasons, not just tasks.', imageSlug: img('purpose-behind') },
    { phrase: 'Each of us plays a vital role in making this happen.', tag: 'phrase', definition: 'Build inclusion and ownership.', example: '"From engineering to customer service, each of us plays a vital role."', imageSlug: img('vital-role') },
    { phrase: "Let's make sure our goals are aligned.", tag: 'phrase', definition: 'Ensure shared understanding.', example: '"Before we plan Q1, let\'s make sure our goals are aligned with the roadmap."', imageSlug: img('aligned') },
    { phrase: 'ROLL OUT', definition: 'To introduce something gradually across an organisation.', example: 'We will roll out the new system region by region.', imageSlug: img('roll-out') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Tim, can you listen to the opening of my all-hands speech? I want people to understand the new [[strategy:plan to reach long-term goals]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure, go ahead." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "\"Our [[vision:what we want to become]] is to be the leading online school in Latin America by 2030. The purpose behind this is simple: millions of people need English to access better jobs.\"" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Strong start. Starting with the 'why' works. Then?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "\"This strategy will help us achieve it in three steps: Spanish-language support, partnerships with universities, and a mobile-first app. Here's our [[roadmap:plan with steps and timeline]].\"" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Maybe add one concrete [[milestone:important stage]] — people like something tangible." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good idea: \"By December, we'll [[roll out:introduce gradually]] the app in Mexico.\" And I'll finish: \"Each of us plays a vital role in making this happen.\"" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Perfect. Then ask each department to check [[alignment:agreement on shared goals]] with their own plans." },
  ],

  matchingExercise: [
    { word: 'VISION', definition: 'What an organisation wants to become' },
    { word: 'STRATEGY', definition: 'A plan to reach long-term goals' },
    { word: 'ROADMAP', definition: 'A plan with steps and a timeline' },
    { word: 'MILESTONE', definition: 'An important stage or achievement' },
    { word: 'ALIGNMENT', definition: 'Agreement on shared goals' },
    { word: 'ROLL OUT', definition: 'Introduce something gradually' },
  ],

  fillBlankExercise: [
    { before: 'Our', after: 'is to be the leading school in the region.', answer: 'vision' },
    { before: 'This strategy will help us', after: '40% growth.', answer: 'achieve' },
    { before: 'The', after: 'behind this initiative is to reduce costs.', answer: 'purpose' },
    { before: 'Each of us plays a vital', after: '.', answer: 'role' },
    { before: "Let's make sure our goals are", after: '.', answer: 'aligned' },
    { before: 'We will roll', after: 'the system region by region.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    { question: 'In what order should leaders explain change?', options: ['What, how, why', 'Why, how, what', 'How, what, why', 'Only what'], correctIndex: 1 },
    { question: 'What is a "milestone"?', options: ['A distance', 'An important stage or achievement', 'A problem', 'A budget'], correctIndex: 1 },
    { question: 'What does "roll out" mean?', options: ['Cancel', 'Introduce gradually', 'Hide', 'Test once'], correctIndex: 1 },
    { question: "In the dialogue, what is Kira's vision?", options: ['Leading online school in Latin America by 2030', 'Biggest company in Europe', 'Open 100 offices', 'Double prices'], correctIndex: 0 },
    { question: 'Where will the app roll out first?', options: ['Brazil', 'Mexico', 'Spain', 'Chile'], correctIndex: 1 },
  ],
};
