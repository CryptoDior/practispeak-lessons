import { Lesson } from '@/types/lesson';

export const mmaWeightClasses: Lesson = {
  slug: 'mma-weight-classes',
  title: 'Weight Classes',
  subtitle: 'Learn the weight groups in MMA and how fighters talk about weight',
  level: 'A1-A2',
  description: 'In MMA, fighters fight people of the same weight. Learn the names of the main weight groups and the words fighters use to talk about weight.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-weight-classes-hero.png',

  warmUp: {
    questions: [
      'Do you know the name of any MMA weight class?',
      'Why does MMA have weight classes?',
      'Is it good to be the bigger fighter?',
    ],
  },

  vocabulary: [
    {
      word: 'WEIGHT CLASS',
      partOfSpeech: 'noun',
      definition: 'A group of fighters with the same weight.',
      example: 'She fights in the lightest weight class.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-weight-class.png',
    },
    {
      word: 'HEAVYWEIGHT',
      partOfSpeech: 'noun',
      definition: 'The weight class for the biggest fighters (over 205 lbs / 93 kg).',
      example: 'Heavyweight fighters are usually very big and strong.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-heavyweight.png',
    },
    {
      word: 'LIGHTWEIGHT',
      partOfSpeech: 'noun',
      definition: 'A weight class for middle-size fighters (up to 155 lbs / 70 kg). Many people like it.',
      example: 'Lightweight has many fast and smart fighters.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-lightweight.png',
    },
    {
      word: 'FEATHERWEIGHT',
      partOfSpeech: 'noun',
      definition: 'A weight class for small, fast fighters (up to 145 lbs / 66 kg).',
      example: 'Featherweight fighters are small and very fast.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-featherweight.png',
    },
    {
      word: 'WEIGH-IN',
      partOfSpeech: 'noun',
      definition: 'When fighters stand on a scale before the fight to check their weight.',
      example: 'At the weigh-in, he was two pounds too heavy.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-weigh-in.png',
    },
    {
      word: 'CUT WEIGHT',
      partOfSpeech: 'verb',
      definition: 'Lose weight fast before a fight.',
      example: 'She had to cut weight for three days before the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cut-weight.png',
    },
    {
      word: 'REHYDRATE',
      partOfSpeech: 'verb',
      definition: 'Drink water and eat again after the weigh-in.',
      example: 'After the weigh-in, he rehydrated. On fight night, he was ten pounds heavier.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rehydrate.png',
    },
    {
      word: 'TITLE SHOT',
      partOfSpeech: 'noun',
      definition: 'A fight for the belt.',
      example: 'She won three fights, one after the other. Now she has a title shot.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-title-shot.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'MAKE WEIGHT',
      definition: 'Have the right weight at the weigh-in.',
      example: 'He made weight this time. He was 154.5 lbs.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-make-weight.png',
      tag: 'phrase',
    },
    {
      phrase: 'MISS WEIGHT',
      definition: 'Be too heavy at the weigh-in.',
      example: 'She missed weight and the fight almost did not happen.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-miss-weight.png',
      tag: 'phrase',
    },
    {
      phrase: 'MOVE UP IN WEIGHT',
      definition: 'Start to fight in a heavier weight class.',
      example: 'He won the lightweight belt. Now he wants to move up in weight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-move-up-in-weight.png',
      tag: 'phrase',
    },
    {
      phrase: 'EARN A TITLE SHOT',
      definition: 'Win many fights, so you get a fight for the belt.',
      example: 'After four wins, she earned a title shot.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-earn-a-title-shot.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, why do fighters always talk about [[weight class:a group of fighters with the same weight]]? Why is it important?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Because size is important in fighting. If a [[heavyweight:the class for the biggest fighters]] fights a [[featherweight:a class for small fighters]], it is not fair.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How do they check the weight?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'There is a [[weigh-in:when fighters stand on a scale]] the day before. Everyone steps on a scale. If you are too heavy, you [[miss weight:be too heavy]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what happens then?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'You try to [[cut weight:lose weight quickly before the fight]] to [[make weight:have the right weight]]. It is hard. No food, no water.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'So after the weigh-in they eat and drink again?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, they [[rehydrate:drink and eat again]] at night. Some fighters are much heavier on fight night.',
    },
  ],

  matchingExercise: [
    { word: 'Weight class', definition: 'A group of fighters with the same weight' },
    { word: 'Heavyweight', definition: 'The class for the biggest fighters' },
    { word: 'Lightweight', definition: 'A class for middle-size fighters' },
    { word: 'Weigh-in', definition: 'Checking the fighters\' weight before a fight' },
    { word: 'Title shot', definition: 'A fight for the belt' },
    { word: 'Rehydrate', definition: 'Drink and eat again after the weigh-in' },
  ],

  fillBlankExercise: [
    { before: 'He was too heavy at the', after: '. He was three pounds over.', answer: 'weigh-in' },
    { before: 'She had to', after: 'weight for four days before the fight.', answer: 'cut' },
    { before: 'He', after: 'weight. He was 155 lbs.', answer: 'made' },
    { before: 'After four wins she earned a', after: '. Now she can fight for the belt.', answer: 'title shot' },
    { before: 'He wants to', after: 'up in weight and fight in a heavier class.', answer: 'move' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "weigh-in"?',
      options: [
        'When the fighter rests after the fight',
        'When fighters stand on a scale before the fight',
        'When a fighter moves to a new weight class',
        'A training session to lose weight',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "miss weight" mean?',
      options: [
        'Lose too much weight before the fight',
        'Get on the scale late',
        'Be too heavy at the weigh-in',
        'Win the fight at a lower weight class',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "cut weight"?',
      options: [
        'Train hard to get bigger',
        'Lose weight fast before a fight',
        'Move to a heavier weight class',
        'Help a friend get ready for the weigh-in',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "earn a title shot" mean?',
      options: [
        'Win the belt',
        'Win many fights and get a fight for the belt',
        'Be the champion now',
        'Move up to a new weight class',
      ],
      correctIndex: 1,
    },
  ],
};
