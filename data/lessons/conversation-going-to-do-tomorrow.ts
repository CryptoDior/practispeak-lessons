import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-going-to-do-tomorrow-${s}.png`;

export const conversationGoingToDoTomorrow: Lesson = {
  slug: 'conversation-going-to-do-tomorrow',
  title: 'What Are You Going to Do Tomorrow?',
  subtitle: 'Everyday Conversation · Lesson 10',
  level: 'A1-A2',
  description:
    'Learn how to talk about your plans for tomorrow with "going to". Say what you will do and when: in the morning, afternoon or evening.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "What are you going to do tomorrow?".',
    'Use "I\'m going to…" for plans.',
    'Say the time of day and react to plans.',
  ],

  vocabulary: [
    { word: 'TOMORROW', partOfSpeech: 'adverb', definition: 'The day after today.', example: 'What are you going to do tomorrow?', imageSlug: img('tomorrow') },
    { word: 'PLAN', partOfSpeech: 'noun', definition: 'Something you decide to do in the future.', example: 'Do you have plans for tomorrow?', imageSlug: img('plan') },
    { word: 'MORNING', partOfSpeech: 'noun', definition: 'The first part of the day, before 12.', example: "I'm going to study in the morning.", imageSlug: img('morning') },
    { word: 'AFTERNOON', partOfSpeech: 'noun', definition: 'The part of the day after 12 and before the evening.', example: "We're going to meet in the afternoon.", imageSlug: img('afternoon') },
    { word: 'EVENING', partOfSpeech: 'noun', definition: 'The end of the day, before night.', example: "I'm going to cook in the evening.", imageSlug: img('evening') },
    { word: 'RELAX', partOfSpeech: 'verb', definition: 'To rest and not work.', example: "I'm going to stay at home and relax.", imageSlug: img('relax') },
    { word: 'EAT OUT', partOfSpeech: 'phrasal verb', definition: 'To eat in a restaurant, not at home.', example: "We're going to eat out tomorrow.", imageSlug: img('eat-out') },
  ],

  phrasalVerbs: [
    { phrase: 'What are you going to do tomorrow?', tag: 'phrase', definition: 'A question about plans for tomorrow.', example: '"What are you going to do tomorrow?" → "I\'m going to work."', imageSlug: img('what-are-you-going-to-do') },
    { phrase: "I'm going to…", tag: 'phrase', definition: 'Use this to talk about your plans.', example: '"I\'m going to study." / "I\'m going to meet my friend."', inAction: 'After "going to", use the normal verb: "I\'m going to study", not "I\'m going to studying".', imageSlug: img('im-going-to') },
    { phrase: "I'm going to stay at home.", tag: 'phrase', definition: 'You will not go out tomorrow.', example: '"I\'m tired. I\'m going to stay at home."', imageSlug: img('stay-at-home') },
    { phrase: 'What time?', tag: 'phrase', definition: 'Ask for the time of a plan.', example: '"I\'m going to meet Ana." → "What time?"', imageSlug: img('what-time') },
    { phrase: 'In the morning / afternoon / evening.', tag: 'phrase', definition: 'Ways to say the time of day.', example: '"What time?" → "In the afternoon."', imageSlug: img('in-the-morning') },
    { phrase: 'That sounds nice!', tag: 'phrase', definition: 'A friendly reaction to someone\'s plan.', example: '"I\'m going to the beach." → "That sounds nice!"', imageSlug: img('that-sounds-nice') },
    { phrase: 'Have fun!', tag: 'phrase', definition: 'A good wish for someone\'s plans.', example: '"I\'m going to a party tomorrow." → "Have fun!"', imageSlug: img('have-fun') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Kira, what are you going to do [[tomorrow:the day after today]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm going to stay at home. I want to [[relax:rest and not work]]. And you?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'm going to meet my friend tomorrow." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Really? What time?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "In the [[afternoon:after 12, before evening]]. We're going to [[eat out:eat in a restaurant]] together." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'That sounds nice! Where are you going to eat?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "At a new pizza place. And in the [[evening:the end of the day]] I'm going to study English." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good [[plan:something you decide to do]]! I'm going to study in the [[morning:before 12]]. Have fun with your friend!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Thanks! Enjoy your day at home.' },
  ],

  matchingExercise: [
    { word: 'TOMORROW', definition: 'The day after today' },
    { word: 'PLAN', definition: 'Something you decide to do' },
    { word: 'MORNING', definition: 'The first part of the day' },
    { word: 'EVENING', definition: 'The end of the day, before night' },
    { word: 'EAT OUT', definition: 'To eat in a restaurant' },
    { word: 'HAVE FUN!', definition: 'A good wish for someone\'s plans' },
  ],

  fillBlankExercise: [
    { before: 'What are you going to do', after: '?', answer: 'tomorrow' },
    { before: "I'm going", after: 'study.', answer: 'to' },
    { before: "I'm going to stay at", after: '.', answer: 'home' },
    { before: '"What time?" "In the', after: '."', answer: 'afternoon' },
    { before: 'That sounds', after: '!', answer: 'nice' },
    { before: 'Have', after: '!', answer: 'fun' },
  ],

  multipleChoiceExercise: [
    { question: 'Which sentence talks about a plan for tomorrow?', options: ["I'm going to study.", 'I studied.', 'I study every day.', 'I was at school.'], correctIndex: 0 },
    { question: 'Which is correct?', options: ["I'm going to studying.", "I'm going study.", "I'm going to study.", 'I going to study.'], correctIndex: 2 },
    { question: 'A friend says "I\'m going to the beach." What can you say?', options: ['That sounds nice!', 'What did you do?', "I'm tired.", 'Goodbye.'], correctIndex: 0 },
    { question: '"What time?" Which answer is correct?', options: ['In the morning.', 'On the morning.', 'At the morning.', 'Morning in.'], correctIndex: 0 },
    { question: 'In the dialogue, what is Kira going to do tomorrow?', options: ['Meet a friend', 'Stay at home and relax', 'Go to work', 'Eat out'], correctIndex: 1 },
    { question: 'When is Tim going to meet his friend?', options: ['In the morning', 'In the afternoon', 'In the evening', 'At night'], correctIndex: 1 },
  ],
};
