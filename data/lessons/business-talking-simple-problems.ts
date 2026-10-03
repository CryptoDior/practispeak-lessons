import { Lesson } from '@/types/lesson';

export const businessTalkingSimpleProblems: Lesson = {
  slug: 'business-talking-simple-problems',
  title: 'Talking About Simple Problems',
  subtitle: 'Series 5 · Everyday Work English · Lesson 4',
  level: 'A1-A2',
  description:
    'The printer is not working! Learn how to talk about simple problems at work, ask for help, and say when everything is OK again.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-hero.png',

  objectives: [
    'Say that a machine is not working.',
    'Ask a colleague for help with a problem.',
    'Say when the problem is fixed.',
  ],

  vocabulary: [
    {
      word: 'PRINTER',
      partOfSpeech: 'noun',
      definition: 'A machine that puts documents on paper.',
      example: 'The printer is next to the computer.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-printer.png',
    },
    {
      word: 'PAPER',
      partOfSpeech: 'noun',
      definition: 'The thin white material you write or print on.',
      example: 'The report is on A4 paper.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-paper.png',
    },
    {
      word: 'COMPUTER',
      partOfSpeech: 'noun',
      definition: 'A machine you use to write, print, or send emails.',
      example: 'Please restart the computer.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-computer.png',
    },
    {
      word: 'ERROR',
      partOfSpeech: 'noun',
      definition: 'A problem in a machine or computer.',
      example: 'My screen shows an error message.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-error.png',
    },
    {
      word: 'FIX',
      partOfSpeech: 'verb',
      definition: 'To make something work again.',
      example: 'Can you fix the printer?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-fix.png',
    },
    {
      word: 'CABLE',
      partOfSpeech: 'noun',
      definition: 'A long wire that connects a machine to electricity or to another machine.',
      example: 'Please check the cable.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-cable.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TURN ON',
      definition: 'To start a machine or a light.',
      example: 'Turn on the printer before you print.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-turn-on.png',
    },
    {
      phrase: 'PLUG IN',
      definition: 'To connect a machine to electricity with a cable.',
      example: 'Please plug in your laptop.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-plug-in.png',
    },
    {
      phrase: 'RUN OUT (OF)',
      definition: 'To have no more of something.',
      example: 'We ran out of paper.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-run-out.png',
    },
    {
      phrase: 'OUT OF ORDER',
      tag: 'idiom',
      definition: 'Not working.',
      example: 'The coffee machine is out of order again.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-out-of-order.png',
    },
    {
      phrase: 'NO BIG DEAL',
      tag: 'idiom',
      definition: 'It is not a serious problem.',
      example: 'The computer stopped, but it\'s no big deal.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-no-big-deal.png',
    },
    {
      phrase: 'The printer is not working.',
      tag: 'phrase',
      definition: 'Use this to say there is a problem with a machine.',
      example: '"Excuse me, the printer is not working."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-not-working.png',
    },
    {
      phrase: 'Did you try turning it off and on?',
      tag: 'phrase',
      definition: 'A very common question when a machine has a problem.',
      example: '"My computer is slow." → "Did you try turning it off and on?"',
      inAction: 'After "try", use the -ing form: "Did you try turning it off?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-simple-problems-off-and-on.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Tim, can you help me? The [[printer:machine that puts documents on paper]] isn\'t working.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Sure. Is it [[turned on:started]]?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Yes, the light is on. But it\'s showing an [[error:a problem in a machine]] message.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Hmm. Let me look. I think it\'s out of [[paper:white material you print on]]. We [[ran out of:have no more]] paper again!',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Oh no. Where is the paper?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'In the cupboard. Here you go. And please check the [[cable:wire to electricity]]. Is it [[plugged in:connected to electricity]]?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Yes, it is. OK… it\'s printing now! Everything\'s working fine.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Great. You see? [[No big deal:not a serious problem]].',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Thanks for your help, Tim! You can [[fix:make work again]] anything.',
    },
  ],

  matchingExercise: [
    { word: 'PRINTER', definition: 'A machine that puts documents on paper' },
    { word: 'ERROR', definition: 'A problem in a machine' },
    { word: 'FIX', definition: 'To make something work again' },
    { word: 'TURN ON', definition: 'To start a machine' },
    { word: 'RUN OUT (OF)', definition: 'To have no more of something' },
    { word: 'OUT OF ORDER', definition: 'Not working' },
  ],

  fillBlankExercise: [
    { before: 'The printer is not', after: '.', answer: 'working' },
    { before: 'Can you help me', after: 'this?', answer: 'fix' },
    { before: 'We ran out', after: 'paper.', answer: 'of' },
    { before: 'Please', after: 'in your laptop. The battery is low.', answer: 'plug' },
    { before: 'It\'s showing an', after: 'message.', answer: 'error' },
    { before: 'The coffee machine is out of', after: 'again.', answer: 'order' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "out of order" mean?',
      options: ['Very new', 'Not working', 'In the wrong place', 'Too expensive'],
      correctIndex: 1,
    },
    {
      question: 'What does "run out of" mean?',
      options: [
        'To run very fast',
        'To have no more of something',
        'To leave the office',
        'To buy something',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is correct?',
      options: [
        'Did you try turn it off?',
        'Did you try to turning it off?',
        'Did you try turning it off and on?',
        'Did you tried turning it off?',
      ],
      correctIndex: 2,
    },
    {
      question: 'In the dialogue, what is the problem with the printer?',
      options: ['It is not plugged in', 'It has no paper', 'It is broken', 'It is turned off'],
      correctIndex: 1,
    },
    {
      question: 'Where is the paper?',
      options: ['On the desk', 'In the cupboard', 'In the kitchen', 'At reception'],
      correctIndex: 1,
    },
    {
      question: 'The problem is fixed. What do you say?',
      options: [
        "Everything's working fine now.",
        'The printer is not working.',
        'It\'s showing an error.',
        'We ran out of paper.',
      ],
      correctIndex: 0,
    },
  ],
};
