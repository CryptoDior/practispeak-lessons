import { Lesson } from '@/types/lesson';

export const mmaDescribingAFighter: Lesson = {
  slug: 'mma-describing-a-fighter',
  title: 'Describing a Fighter',
  subtitle: 'Learn words to describe fighters',
  level: 'A1-A2',
  description: 'Is a fighter aggressive or technical? Learn words to describe how a fighter fights, and what they are good or bad at.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-hero.png',

  warmUp: {
    questions: [
      'Who is your favourite fighter? Describe him or her in two words.',
      'Do you like fighters who attack a lot?',
      'Which fighter is very strong?',
    ],
  },

  vocabulary: [
    {
      word: 'AGGRESSIVE',
      partOfSpeech: 'adjective',
      definition: 'Always moving forward and attacking.',
      example: 'He is very aggressive. He never stops moving forward.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-aggressive.png',
    },
    {
      word: 'TECHNICAL',
      partOfSpeech: 'adjective',
      definition: 'Fighting with skill, not only power.',
      example: 'She is very technical. She does every move very well.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-technical.png',
    },
    {
      word: 'EXPLOSIVE',
      partOfSpeech: 'adjective',
      definition: 'Very fast and very strong, all at once.',
      example: 'He is explosive. He can end a fight in seconds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-explosive.png',
    },
    {
      word: 'REACH',
      partOfSpeech: 'noun',
      definition: 'How long your arms are, from one hand to the other.',
      example: 'She has a long reach. She can hit other fighters from far away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-reach.png',
    },
    {
      word: 'SOUTHPAW',
      partOfSpeech: 'noun',
      definition: 'A fighter who stands with the right foot and right hand in front.',
      example: 'He is a southpaw. Most fighters stand the other way.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-southpaw.png',
    },
    {
      word: 'WELL-ROUNDED',
      partOfSpeech: 'adjective',
      definition: 'Good at everything: standing, on the ground, and stopping attacks.',
      example: 'She is a well-rounded fighter. She is good at everything.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-well-rounded.png',
    },
    {
      word: 'KNOCKOUT POWER',
      partOfSpeech: 'noun',
      definition: 'Being able to knock out a fighter with one punch.',
      example: 'He has knockout power in both hands. One punch can end the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-knockout-power.png',
    },
    {
      word: 'CARDIO',
      partOfSpeech: 'noun',
      definition: 'Being able to fight hard for many rounds and not get tired.',
      example: 'Her cardio is great. In the last rounds, she is still fast.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-cardio.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HAVE A STRONG CHIN',
      definition: 'Be able to take hard punches without falling.',
      example: 'He has a strong chin. Three big punches hit him and he kept fighting.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-have-a-strong-chin.png',
      tag: 'phrase',
    },
    {
      phrase: 'GAS OUT',
      definition: 'Get very tired at the end of a fight.',
      example: 'He gassed out in round three. His cardio was not good.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-gas-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'SWITCH STYLES',
      definition: 'Change the way you fight in the middle of a fight.',
      example: 'She switched styles. She stopped punching and started taking her down.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-switch-styles.png',
      tag: 'phrase',
    },
    {
      phrase: 'USE YOUR REACH',
      definition: 'Use your long arms to hit from far away.',
      example: 'He used his reach. His long jab kept the other fighter away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-use-your-reach.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, how would you describe this fighter? Is she good?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'She is very [[technical:fighting with skill, not only power]]. She does every move very well. She is also [[well-rounded:good at everything in MMA]], standing and on the ground.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And the other fighter?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'She is more [[aggressive:always moving forward and attacking]]. She likes to move forward and she has [[knockout power:can knock out a fighter with one punch]]. She is a [[southpaw:a fighter with the right foot in front]], so she is hard to fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I heard she [[gasses out:gets very tired late in the fight]]. Is that a problem?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, her [[cardio:not getting tired]] is not great. If our fighter [[uses her reach:uses her long arms]] and keeps the fight long, the other fighter will get tired by round three.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'She is also very [[explosive:very fast and strong]], right?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, very [[explosive:very fast and strong]]. And she [[has a strong chin:can take hard punches]]. I never saw her hurt in a fight.',
    },
  ],

  matchingExercise: [
    { word: 'Aggressive', definition: 'Always moving forward and attacking' },
    { word: 'Technical', definition: 'Fighting with skill, not only power' },
    { word: 'Explosive', definition: 'Very fast and very strong, all at once' },
    { word: 'Reach', definition: 'How long your arms are' },
    { word: 'Cardio', definition: 'Fighting hard for many rounds without getting tired' },
    { word: 'Well-rounded', definition: 'Good at everything' },
  ],

  fillBlankExercise: [
    { before: 'She is very', after: '. She does every move very well.', answer: 'technical' },
    { before: 'His', after: 'power is dangerous. One punch can end the fight.', answer: 'knockout' },
    { before: 'He', after: 'out in round four. He was very tired.', answer: 'gassed' },
    { before: 'Her long', after: 'means she can hit from far away.', answer: 'reach' },
    { before: 'He is a', after: '. His right foot is in front.', answer: 'southpaw' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "aggressive" mean when describing a fighter?',
      options: [
        'Very good at every move',
        'Good at stopping takedowns',
        'Always moving forward and attacking',
        'Able to fight well on the ground',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "gas out" mean?',
      options: [
        'Win the fight in the first round',
        'Change from punching to fighting on the ground',
        'Get very tired at the end of a fight',
        'Train in the mountains',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "reach" in MMA?',
      options: [
        'The distance a fighter can kick',
        'How long your arms are, from one hand to the other',
        'How far a fighter can move across the cage',
        'The length of a fighter\'s legs',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "well-rounded" mean for a fighter?',
      options: [
        'A fighter who is big and heavy',
        'A fighter who has won many fights by decision',
        'Good at everything: standing, on the ground, and stopping attacks',
        'A fighter who always looks calm and relaxed',
      ],
      correctIndex: 2,
    },
  ],
};
