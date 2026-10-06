import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-b1-spend-your-mornings-${s}.png`;

export const conversationB1SpendYourMornings: Lesson = {
  slug: 'conversation-b1-spend-your-mornings',
  title: 'How Do You Usually Spend Your Mornings?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 8',
  level: 'B1-B2',
  description:
    'Describe your morning routine step by step with sequencing words like first, after that, while and as soon as — and talk about being (or not being) a morning person.',
  heroImage: img('hero'),

  objectives: [
    'Describe your morning routine in a logical order.',
    'Use sequencing words: first, then, after that, finally.',
    'Connect actions with while, before and as soon as.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Sequencing Words',
    description:
      'Use sequencing words to tell your routine in order. FIRST → THEN / AFTER THAT → LATER ON → FINALLY. Use BEFORE, WHILE and AS SOON AS to connect two actions in one sentence.',
    positiveLabel: 'Order of actions',
    negativeLabel: 'Connecting two actions',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'First, I make coffee.', note: 'The beginning.' },
      { sentence: 'After that, I check my messages.', note: 'What happens next.' },
      { sentence: 'Finally, I leave for work.', note: 'The last action.' },
    ],
    negativeExamples: [
      { sentence: 'As soon as I wake up, I drink water.', note: 'Immediately after.' },
      { sentence: 'I listen to music while I get ready.', note: 'At the same time.' },
      { sentence: 'I stretch before I eat breakfast.', note: 'Earlier than.' },
    ],
  },

  vocabulary: [
    { word: 'ROUTINE', partOfSpeech: 'noun', definition: 'The things you do regularly, in the same order.', example: 'My morning routine takes about an hour.', imageSlug: img('routine') },
    { word: 'FIRST', partOfSpeech: 'adverb', definition: 'At the beginning of a sequence.', example: 'First, I make coffee.', imageSlug: img('first') },
    { word: 'AFTER THAT', partOfSpeech: 'phrase', definition: 'Next in the sequence.', example: 'After that, I check my messages.', imageSlug: img('after-that') },
    { word: 'WHILE', partOfSpeech: 'conjunction', definition: 'At the same time as another action.', example: 'I listen to music while I get ready.', imageSlug: img('while') },
    { word: 'AS SOON AS', partOfSpeech: 'conjunction', definition: 'Immediately after something happens.', example: 'As soon as I wake up, I drink water.', imageSlug: img('as-soon-as') },
    { word: 'FINALLY', partOfSpeech: 'adverb', definition: 'As the last action.', example: 'Finally, I leave for work.', imageSlug: img('finally') },
    { word: 'ALERT', partOfSpeech: 'adjective', definition: 'Awake and able to think quickly.', example: 'Coffee helps me feel alert.', imageSlug: img('alert') },
  ],

  phrasalVerbs: [
    { phrase: 'GET READY', tag: 'collocation', definition: 'To prepare yourself (wash, dress) to go out.', example: 'I usually make breakfast and get ready.', imageSlug: img('get-ready') },
    { phrase: 'How do you usually spend your mornings?', tag: 'phrase', definition: 'Ask about someone\'s morning routine.', example: '"I\'m curious — how do you usually spend your mornings?"', imageSlug: img('how-do-you-spend') },
    { phrase: 'I try to start my mornings slowly.', tag: 'phrase', definition: 'You begin the day gently, without rushing.', example: '"I try to start my mornings slowly, with tea and a book."', imageSlug: img('start-slowly') },
    { phrase: 'I like to catch up on messages.', tag: 'phrase', definition: 'You check your phone, emails or texts.', example: '"On the bus, I like to catch up on messages."', imageSlug: img('catch-up-messages') },
    { phrase: 'I take some time to plan my day.', tag: 'phrase', definition: 'You organise your tasks before starting.', example: '"I take ten minutes to plan my day."', imageSlug: img('plan-my-day') },
    { phrase: "I'm not a morning person.", tag: 'phrase', definition: "You don't feel energetic or focused early.", example: '"Don\'t talk to me before nine — I\'m not a morning person!"', inAction: 'A light joke about yourself ("I\'m not a morning person!") is a friendly way to share something personal.', imageSlug: img('morning-person') },
    { phrase: 'I drink coffee to wake up.', tag: 'phrase', definition: 'You use caffeine to feel more alert.', example: '"I can\'t function until I drink coffee to wake up."', imageSlug: img('coffee') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'You always look so fresh in the morning, Tim. How do you usually spend your mornings?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Ha, thanks! I have a strict [[routine:things I do in the same order]]. [[As soon as:immediately after]] I wake up, I drink a big glass of water." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'And then?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "[[First:at the beginning]], I exercise for twenty minutes. [[After that:next]], I make breakfast and get ready. I listen to a podcast [[while:at the same time as]] I cook." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Impressive. I'm not a morning person at all. I need two coffees before I feel [[alert:awake and thinking clearly]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Do you plan your day in the morning?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, on the train. I catch up on messages and take some time to plan my day. [[Finally:as the last thing]], I put on my headphones and relax." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's a good routine too. Slow, but organised!" },
  ],

  matchingExercise: [
    { word: 'ROUTINE', definition: 'Things you do regularly in the same order' },
    { word: 'AS SOON AS', definition: 'Immediately after' },
    { word: 'WHILE', definition: 'At the same time as' },
    { word: 'AFTER THAT', definition: 'Next in the sequence' },
    { word: 'FINALLY', definition: 'As the last action' },
    { word: 'ALERT', definition: 'Awake and thinking clearly' },
  ],

  fillBlankExercise: [
    { before: '', after: ', I make coffee.', answer: 'First' },
    { before: 'After', after: ', I check my emails.', answer: 'that' },
    { before: 'I listen to music', after: 'I get ready.', answer: 'while' },
    { before: 'As soon', after: 'I wake up, I drink water.', answer: 'as' },
    { before: "I'm not a morning", after: '.', answer: 'person' },
    { before: '', after: ', I leave for work.', answer: 'Finally' },
  ],

  multipleChoiceExercise: [
    { question: 'Which word shows two actions at the same time?', options: ['First', 'While', 'Finally', 'After that'], correctIndex: 1 },
    { question: 'Which word shows the last action?', options: ['Finally', 'First', 'While', 'Before'], correctIndex: 0 },
    { question: 'What does "I\'m not a morning person" mean?', options: ["I don't feel energetic early in the day", 'I work at night', 'I never wake up', 'I love mornings'], correctIndex: 0 },
    { question: 'Choose the correct sentence.', options: ['As soon as I wake up, I drink water.', 'As soon I wake up, I drink water.', 'Soon as I wake, drink water.', 'As soon as wake up I.'], correctIndex: 0 },
    { question: 'In the dialogue, what does Tim do first after drinking water?', options: ['Makes breakfast', 'Exercises for twenty minutes', 'Checks messages', 'Takes the train'], correctIndex: 1 },
    { question: 'Where does Kira plan her day?', options: ['At home', 'On the train', 'At the gym', 'At her desk'], correctIndex: 1 },
  ],
};
