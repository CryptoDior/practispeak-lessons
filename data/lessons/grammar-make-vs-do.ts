import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-make-vs-do-${s}.png`;

export const grammarMakeVsDo: Lesson = {
  slug: 'grammar-make-vs-do',
  title: 'Make vs Do',
  subtitle: 'Grammar · B1-B2',
  level: 'B1-B2',
  description:
    'Make a decision or do a decision? Learn the difference: MAKE for creating, causing and cooking; DO for tasks, jobs and routines — plus the most common fixed expressions.',
  heroImage: img('hero'),

  objectives: [
    'Use MAKE for creating, causing and preparing food.',
    'Use DO for tasks, work and routine activities.',
    'Remember common fixed expressions with make and do.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: MAKE vs DO',
    description:
      'MAKE = create or produce something (a cake, a decision, a mistake) or cause something to happen. DO = perform an activity, task or job (homework, the dishes, exercise). Many expressions are fixed, so it helps to learn them as chunks.',
    positiveLabel: 'MAKE — create / cause',
    negativeLabel: 'DO — tasks / activities',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'I make a cake every Sunday.', note: 'Creating something.' },
      { sentence: 'She made a decision.', note: 'Forming a decision.' },
      { sentence: 'The noise makes it hard to concentrate.', note: 'Causing something.' },
      { sentence: "I'll make dinner tonight.", note: 'Preparing food.' },
    ],
    negativeExamples: [
      { sentence: 'I have to do my homework.', note: 'A task.' },
      { sentence: 'He does accounting for the company.', note: 'Job-related work.' },
      { sentence: 'I do exercise every morning.', note: 'A routine activity.' },
      { sentence: "Who's going to do the dishes?", note: 'A household chore.' },
    ],
  },

  vocabulary: [
    { word: 'MAKE A DECISION', partOfSpeech: 'phrase', definition: 'To decide something.', example: 'We need to make a decision today.', imageSlug: img('make-a-decision') },
    { word: 'MAKE A MISTAKE', partOfSpeech: 'phrase', definition: 'To do something wrong.', example: 'Everyone makes mistakes.', imageSlug: img('make-a-mistake') },
    { word: 'MAKE THE BED', partOfSpeech: 'phrase', definition: 'To tidy the sheets and covers on your bed.', example: 'Timmy forgets to make his bed.', imageSlug: img('make-the-bed') },
    { word: 'MAKE THE MOST OF', partOfSpeech: 'phrase', definition: 'To use a situation as well as possible.', example: 'Sarah always makes the most of every situation.', imageSlug: img('make-the-most') },
    { word: 'DO HOMEWORK', partOfSpeech: 'phrase', definition: 'To complete school work at home.', example: "He doesn't want to do his homework.", imageSlug: img('do-homework') },
    { word: 'DO THE DISHES', partOfSpeech: 'phrase', definition: 'To wash plates, glasses and cutlery.', example: "He doesn't like to do the dishes after dinner.", imageSlug: img('do-the-dishes') },
    { word: 'DO YOUR BEST', partOfSpeech: 'phrase', definition: 'To try as hard as you can.', example: "It's important to do your best.", imageSlug: img('do-your-best') },
    { word: 'DO RESEARCH', partOfSpeech: 'phrase', definition: 'To study a subject carefully to find information.', example: 'I have to do some research for the report.', imageSlug: img('do-research') },
  ],

  phrasalVerbs: [
    { phrase: 'MAKE + creation', tag: 'rule', definition: 'Use MAKE when you create or build something.', example: 'make a cake, make a list, make a snowman, make a plan', imageSlug: img('rule-make-create') },
    { phrase: 'MAKE + cause', tag: 'rule', definition: 'Use MAKE when something causes a result.', example: 'Music makes me happy. The game made homework fun.', imageSlug: img('rule-make-cause') },
    { phrase: 'MAKE + food & drink', tag: 'rule', definition: 'Use MAKE for preparing food and drinks.', example: 'make breakfast, make a sandwich, make coffee', imageSlug: img('rule-make-food') },
    { phrase: 'DO + tasks & chores', tag: 'rule', definition: 'Use DO for jobs and housework.', example: 'do the laundry, do the shopping, do the dishes', inAction: 'Exception to remember: we MAKE the bed, but DO the dishes, laundry and cleaning.', imageSlug: img('rule-do-tasks') },
    { phrase: 'DO + work & study', tag: 'rule', definition: 'Use DO for work, study and research.', example: 'do homework, do a project, do research, do an analysis', imageSlug: img('rule-do-work') },
    { phrase: 'DO + something / anything / nothing', tag: 'rule', definition: 'Use DO with general "-thing" words.', example: "Let's do something fun. I didn't do anything.", imageSlug: img('rule-do-something') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Hi Kira! How are the kids?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good, but my son never wants to [[do his homework:complete school work]]. Every evening is a fight!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Mine loves homework, but he never [[makes his bed:tidies his bed]] in the morning." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Same! And he doesn't want to make his lunch. He wants me to do everything." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Mine is the opposite. He makes amazing sandwiches, but he hates to [[do the dishes:wash plates and glasses]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maybe we can make a game out of it. Doing homework could earn points." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Great idea! It might make the routine more fun. Let's [[make the most of:use as well as possible]] the weekend too — a playdate on Saturday?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. I'll make something special for them to eat. Let's do it!" },
  ],

  matchingExercise: [
    { word: 'MAKE A DECISION', definition: 'To decide something' },
    { word: 'MAKE A MISTAKE', definition: 'To do something wrong' },
    { word: 'DO THE DISHES', definition: 'To wash plates and glasses' },
    { word: 'DO YOUR BEST', definition: 'To try as hard as you can' },
    { word: 'MAKE THE BED', definition: 'To tidy your bed' },
    { word: 'DO RESEARCH', definition: 'To study a subject to find information' },
  ],

  fillBlankExercise: [
    { before: 'Every morning, I', after: 'my routine: stretching and meditation.', answer: 'do' },
    { before: 'Could you please', after: 'a list of the items we need?', answer: 'make' },
    { before: "It's important to", after: 'your best.', answer: 'do' },
    { before: 'The chef decided to', after: 'a special dessert.', answer: 'make' },
    { before: "Don't forget to", after: 'your homework.', answer: 'do' },
    { before: 'I have to', after: 'some research before I write the report.', answer: 'do' },
    { before: 'Sarah always finds a way to', after: 'the most of every situation.', answer: 'make' },
    { before: 'The children wanted to', after: 'a snowman.', answer: 'make' },
  ],

  multipleChoiceExercise: [
    { question: 'Choose the correct verb: "I need to ___ a decision."', options: ['do', 'make', 'have', 'take a'], correctIndex: 1 },
    { question: 'Choose the correct verb: "Who will ___ the dishes?"', options: ['make', 'do', 'have', 'take'], correctIndex: 1 },
    { question: 'Which is correct?', options: ['I made a mistake.', 'I did a mistake.', 'I took a mistake.', 'I had a mistake.'], correctIndex: 0 },
    { question: 'Which is correct?', options: ['Make your homework!', 'Do your homework!', 'Have your homework!', 'Take your homework!'], correctIndex: 1 },
    { question: 'Which one is an exception to remember?', options: ['do the dishes', 'make the bed', 'do homework', 'make a cake'], correctIndex: 1 },
    { question: "In the dialogue, what does Kira's son not want to do?", options: ['Make sandwiches', 'Do his homework', 'Do the dishes', 'Play games'], correctIndex: 1 },
  ],
};
