import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-b1-after-work-${s}.png`;

export const conversationB1AfterWork: Lesson = {
  slug: 'conversation-b1-after-work',
  title: 'What Are You Going to Do After Work?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 7',
  level: 'B1-B2',
  description:
    'Talk about your plans for later today: heading home, running errands, meeting friends or going to the gym — and make plans with others.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer about plans for after work or school.',
    'Use "going to", present continuous and "might" for plans of different certainty.',
    'Make or follow up on plans with someone.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Talking About Plans',
    description:
      'Use GOING TO + verb for plans you have decided. Use the PRESENT CONTINUOUS for arrangements with other people or times. Use MIGHT + verb when you are not sure.',
    positiveLabel: 'Sure',
    negativeLabel: 'Not sure',
    arrowStyle: true,
    positiveExamples: [
      { sentence: "I'm going to head straight home.", note: 'A decided plan.' },
      { sentence: "I'm meeting a friend at seven.", note: 'An arrangement with someone.' },
      { sentence: 'I have to run some errands.', note: 'Something you must do.' },
    ],
    negativeExamples: [
      { sentence: 'I might go to the gym.', note: 'Possible, not decided.' },
      { sentence: "I'm not sure yet.", note: 'No plan yet.' },
    ],
  },

  vocabulary: [
    { word: 'HEAD', partOfSpeech: 'verb', definition: 'To go in a direction (informal).', example: "I'm going to head home after work.", imageSlug: img('head') },
    { word: 'ERRANDS', partOfSpeech: 'noun', definition: 'Small jobs outside the home, like shopping or going to the bank.', example: 'I have to run some errands after work.', imageSlug: img('errands') },
    { word: 'REST', partOfSpeech: 'verb', definition: 'To relax and stop working.', example: 'I rested for an hour after work.', imageSlug: img('rest') },
    { word: 'PREPARE', partOfSpeech: 'verb', definition: 'To get something ready.', example: 'I prepared dinner when I got home.', imageSlug: img('prepare') },
    { word: 'EXERCISE', partOfSpeech: 'verb', definition: 'To do physical activity for health.', example: 'I exercised at the gym yesterday.', imageSlug: img('exercise') },
    { word: 'DECIDE', partOfSpeech: 'verb', definition: 'To choose something after thinking.', example: 'I decided to relax instead of going out.', imageSlug: img('decide') },
  ],

  phrasalVerbs: [
    { phrase: 'TAKE CARE OF', definition: 'To deal with tasks or responsibilities.', example: 'I have a few things to take care of.', imageSlug: img('take-care-of') },
    { phrase: 'What are you going to do after work?', tag: 'phrase', definition: "Ask about someone's plans for later today.", example: '"Any plans? What are you going to do after work?"', imageSlug: img('after-work') },
    { phrase: "I'm going to head straight home.", tag: 'phrase', definition: 'You plan to go home immediately.', example: '"I\'m exhausted. I\'m going to head straight home."', imageSlug: img('straight-home') },
    { phrase: 'I have to run some errands.', tag: 'phrase', definition: 'You need to do small tasks outside.', example: '"I have to run some errands — the post office and the pharmacy."', imageSlug: img('run-errands') },
    { phrase: "I'm meeting a friend later.", tag: 'phrase', definition: 'You have an arrangement to see someone.', example: '"I\'m meeting a friend later for a drink."', imageSlug: img('meeting-a-friend') },
    { phrase: 'I might go to the gym.', tag: 'phrase', definition: 'You are considering it, but not sure.', example: '"If I\'m not too tired, I might go to the gym."', imageSlug: img('might') },
    { phrase: "Let me know what you're doing later.", tag: 'phrase', definition: 'A friendly way to keep plans open.', example: '"I\'m free after six. Let me know what you\'re doing later."', inAction: 'This phrase leaves the door open. It is a soft invitation, not a fixed plan.', imageSlug: img('let-me-know') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Finally, Friday! What are you going to do after work, Kira?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I have to run some [[errands:small jobs like shopping or the bank]] first. I need to pick up a parcel and buy groceries." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'And after that?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm going to [[head:go]] home and [[rest:relax]]. Maybe [[prepare:make ready]] a nice dinner. What about you?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'm meeting my brother at seven. Before that, I might go to the gym — I haven't [[exercised:done physical activity]] all week." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good plan. I'm not sure about tomorrow yet. I haven't [[decided:chosen]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "We're going to a street food market on Saturday. Want to join?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maybe! I have a few things to [[take care of:deal with]] in the morning. Let me know what time you're going." },
  ],

  matchingExercise: [
    { word: 'ERRANDS', definition: 'Small jobs like shopping or the bank' },
    { word: 'HEAD', definition: 'To go in a direction' },
    { word: 'TAKE CARE OF', definition: 'To deal with tasks' },
    { word: 'MIGHT', definition: 'Possible, but not sure' },
    { word: 'DECIDE', definition: 'To choose after thinking' },
    { word: 'PREPARE', definition: 'To get something ready' },
  ],

  fillBlankExercise: [
    { before: 'What are you going to', after: 'after work?', answer: 'do' },
    { before: "I'm going to head straight", after: '.', answer: 'home' },
    { before: 'I have to run some', after: '.', answer: 'errands' },
    { before: "I'm", after: 'a friend at seven.', answer: 'meeting' },
    { before: 'I', after: 'go to the gym, but I\'m not sure.', answer: 'might' },
    { before: 'I have a few things to take care', after: '.', answer: 'of' },
  ],

  multipleChoiceExercise: [
    { question: 'Which sentence shows you are NOT sure?', options: ["I'm going to the gym.", 'I might go to the gym.', "I'm meeting Ana at six.", 'I have to go.'], correctIndex: 1 },
    { question: 'What are "errands"?', options: ['Mistakes', 'Small jobs like shopping or the bank', 'Long holidays', 'Work meetings'], correctIndex: 1 },
    { question: 'Which tense is best for an arrangement with a friend at a fixed time?', options: ['Past simple', 'Present continuous', 'Present perfect', 'Past continuous'], correctIndex: 1 },
    { question: 'What does "head straight home" mean?', options: ['Go home immediately', 'Walk with your head up', 'Stay at work', 'Go home slowly'], correctIndex: 0 },
    { question: 'In the dialogue, who is Tim meeting at seven?', options: ['His sister', 'His brother', 'Kira', 'A client'], correctIndex: 1 },
    { question: 'Where is Tim going on Saturday?', options: ['To the gym', 'To a street food market', 'To the cinema', 'To work'], correctIndex: 1 },
  ],
};
