import { Lesson } from '@/types/lesson';

export const mmaWeightClasses: Lesson = {
  slug: 'mma-weight-classes',
  title: 'Weight Classes',
  subtitle: 'Learn the weight divisions and how fighters talk about size and weight',
  level: 'A1-A2',
  description: 'MMA has many weight classes — from strawweight to heavyweight. This lesson teaches the names of the main divisions and the vocabulary fighters and fans use to talk about weight.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-weight-classes-hero.png',

  warmUp: {
    questions: [
      'Do you know the name of any MMA weight class?',
      'Why do you think MMA has different weight classes?',
      'Is it an advantage to be the bigger fighter?',
    ],
  },

  vocabulary: [
    {
      word: 'WEIGHT CLASS',
      partOfSpeech: 'noun',
      definition: 'A division that groups fighters of similar body weight together.',
      example: 'She fights in the strawweight class — the lightest division.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-weight-class.png',
    },
    {
      word: 'HEAVYWEIGHT',
      partOfSpeech: 'noun',
      definition: 'The biggest division — fighters over 205 lbs up to 265 lbs.',
      example: 'Heavyweight fighters are usually the strongest and most powerful.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-heavyweight.png',
    },
    {
      word: 'LIGHTWEIGHT',
      partOfSpeech: 'noun',
      definition: 'A mid-size division — fighters up to 155 lbs. One of the most popular classes.',
      example: 'Lightweight has some of the fastest and most technical fighters.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-lightweight.png',
    },
    {
      word: 'FEATHERWEIGHT',
      partOfSpeech: 'noun',
      definition: 'A lighter division — fighters up to 145 lbs. Known for speed.',
      example: 'Featherweight fighters are fast and can fight for five full rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-featherweight.png',
    },
    {
      word: 'WEIGH-IN',
      partOfSpeech: 'noun',
      definition: 'The official check before a fight where fighters step on the scales.',
      example: 'He missed weight at the weigh-in — he was two pounds over.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-weigh-in.png',
    },
    {
      word: 'CUT WEIGHT',
      partOfSpeech: 'verb',
      definition: 'Lose weight quickly before a fight to make the weight limit.',
      example: 'She had to cut weight for three days before the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cut-weight.png',
    },
    {
      word: 'REHYDRATE',
      partOfSpeech: 'verb',
      definition: 'Drink water and eat to recover weight after the weigh-in.',
      example: 'After the weigh-in he rehydrated and came in ten pounds heavier on fight night.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rehydrate.png',
    },
    {
      word: 'TITLE SHOT',
      partOfSpeech: 'noun',
      definition: 'A fight for the championship belt of a weight class.',
      example: 'She won three fights in a row and earned a title shot.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-title-shot.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'MAKE WEIGHT',
      definition: 'Successfully reach the weight limit for your division before the fight.',
      example: 'He made weight this time — he trained hard and came in at 154.5 lbs.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-make-weight.png',
      tag: 'phrase',
    },
    {
      phrase: 'MISS WEIGHT',
      definition: 'Fail to reach the weight limit — come in over the division\'s maximum.',
      example: 'She missed weight and the fight almost did not happen.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-miss-weight.png',
      tag: 'phrase',
    },
    {
      phrase: 'MOVE UP IN WEIGHT',
      definition: 'Compete in a higher weight class.',
      example: 'He won the lightweight belt and decided to move up in weight to 170 lbs.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-move-up-in-weight.png',
      tag: 'phrase',
    },
    {
      phrase: 'EARN A TITLE SHOT',
      definition: 'Win enough fights to get a chance to fight for the championship.',
      example: 'After four wins in a row she earned a title shot.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-earn-a-title-shot.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, why do fighters always talk about [[weight class:a division that groups fighters of similar weight]]? Why does it matter?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Because size matters in fighting. If a [[heavyweight:the biggest division, over 205 lbs]] fights a [[featherweight:a lighter division, up to 145 lbs]], it is not fair.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How do they check the weight?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'There is a [[weigh-in:the official check where fighters step on the scales]] the day before. Everyone steps on a scale. If you are too heavy, you [[miss weight:fail to reach the weight limit]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what happens then?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'You try to [[cut weight:lose weight quickly before the fight]] to [[make weight:successfully reach the weight limit]]. It is hard — no food, no water.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'So after the weigh-in they eat and drink again?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — they [[rehydrate:drink and eat to recover weight]] overnight. Some fighters come in much heavier on fight night than at the weigh-in.',
    },
  ],

  matchingExercise: [
    { word: 'Weight class', definition: 'A division that groups fighters of similar body weight' },
    { word: 'Heavyweight', definition: 'The biggest division — over 205 lbs' },
    { word: 'Lightweight', definition: 'A mid-size division — up to 155 lbs' },
    { word: 'Weigh-in', definition: 'The official weight check before a fight' },
    { word: 'Title shot', definition: 'A fight for the championship belt' },
    { word: 'Rehydrate', definition: 'Drink and eat to recover weight after the weigh-in' },
  ],

  fillBlankExercise: [
    { before: 'He missed weight at the', after: '— he was three pounds over the limit.', answer: 'weigh-in' },
    { before: 'She had to', after: 'weight for four days before the fight.', answer: 'cut' },
    { before: 'He', after: 'weight — he came in at exactly 155 lbs.', answer: 'made' },
    { before: 'After four wins she earned a', after: '— a fight for the belt.', answer: 'title shot' },
    { before: 'He decided to', after: 'up in weight and fight at welterweight.', answer: 'move' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "weigh-in"?',
      options: [
        'When the fighter recovers after the fight',
        'The official weight check before a fight where fighters step on the scales',
        'When a fighter moves to a new weight class',
        'A training session to lose weight',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "miss weight" mean?',
      options: [
        'Lose too much weight before the fight',
        'Step on the scales late',
        'Fail to reach the weight limit — come in over the maximum',
        'Win the fight at a lower weight class',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "cut weight"?',
      options: [
        'Train hard to gain muscle',
        'Lose weight quickly before a fight to make the weight limit',
        'Move to a heavier weight class',
        'Help a teammate get ready for the weigh-in',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "earn a title shot" mean?',
      options: [
        'Win the championship belt',
        'Get a chance to fight for the championship by winning enough fights',
        'Be the current champion of the division',
        'Move up to a new weight class',
      ],
      correctIndex: 1,
    },
  ],
};
