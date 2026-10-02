import { Lesson } from '@/types/lesson';

export const mmaTrainingBasics: Lesson = {
  slug: 'mma-training-basics',
  title: 'Training Basics',
  subtitle: 'Learn the vocabulary of an MMA training session',
  level: 'A1-A2',
  description: 'Before a fight, fighters train for many hours. Learn the words for MMA training.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-training-basics-hero.png',

  warmUp: {
    questions: [
      'Do you do sport? What sport?',
      'What do MMA fighters do in training?',
      'Is it important to train hard before a fight? Why?',
    ],
  },

  vocabulary: [
    {
      word: 'DRILL',
      partOfSpeech: 'noun',
      definition: 'You do the same move again and again to learn it.',
      example: 'We did takedown drills for thirty minutes. The same move again and again.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-drill.png',
    },
    {
      word: 'SPARRING',
      partOfSpeech: 'noun',
      definition: 'Practice fighting with a partner. It is like a real fight, but safer.',
      example: 'We sparred for three rounds today. My partner was very fast.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sparring.png',
    },
    {
      word: 'PAD WORK',
      partOfSpeech: 'noun',
      definition: 'Training where one person holds pads and the other punches or kicks them.',
      example: 'The coach held the pads and she punched them.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pad-work.png',
    },
    {
      word: 'CONDITIONING',
      partOfSpeech: 'noun',
      definition: 'Training to make your body strong, fast, and fit.',
      example: 'Conditioning is important. If you get tired, you make mistakes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-conditioning.png',
    },
    {
      word: 'ROUND',
      partOfSpeech: 'noun',
      definition: 'A short time of fighting, usually three or five minutes.',
      example: 'We did four rounds of sparring today. Each round was five minutes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-round.png',
    },
    {
      word: 'PARTNER',
      partOfSpeech: 'noun',
      definition: 'The person you train with.',
      example: 'My training partner is bigger than me, but that makes me better.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-partner.png',
    },
    {
      word: 'WARM UP',
      partOfSpeech: 'noun',
      definition: 'Easy exercise before training. It gets your body ready.',
      example: 'We always do a ten-minute warm up before sparring.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-warm-up.png',
    },
    {
      word: 'CAMP',
      partOfSpeech: 'noun',
      definition: 'The weeks of training before a fight, usually six to eight weeks.',
      example: 'She had a great camp before this fight. She trained hard for six weeks.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-camp.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HIT THE MATS',
      definition: 'Start training at the gym.',
      example: 'We hit the mats at 6am every morning during camp.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-hit-the-mats.png',
      tag: 'phrase',
    },
    {
      phrase: 'PUT IN THE WORK',
      definition: 'Train hard every day.',
      example: 'If you want to be ready, you have to put in the work every day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-put-in-the-work.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO LIVE',
      definition: 'In training: stop drills and start real sparring.',
      example: 'We did drills for an hour and then went live for two rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-training-go-live.png',
      tag: 'phrase',
    },
    {
      phrase: 'ROLL',
      definition: 'Practice fighting on the floor with a partner, not too hard.',
      example: 'After class, we rolled for twenty minutes. No punches, only fighting on the floor.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-roll.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, what does a normal training day look like for you?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'We start with a [[warm up:easy exercise before training]]. We run and stretch. Then [[drill:the same move again and again]]s, for example takedowns.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And after drills?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'We do [[pad work:training where one person holds pads]] with the coach. Then we [[go live:start real sparring]]. That is when we do [[sparring:practice fighting]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How long does sparring last?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Three or four [[round:a short time of fighting]]s. Each one is five minutes. My [[partner:the person I train with]] pushes me hard. After that we [[roll:practice on the floor]] on the mat.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And before a fight, do you train harder?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes. During [[camp:the weeks of training before a fight]], we [[hit the mats:start training]] two times a day. You must [[put in the work:train hard every day]]. That is the only way to be ready.',
    },
  ],

  matchingExercise: [
    { word: 'Drill', definition: 'Doing the same move again and again' },
    { word: 'Sparring', definition: 'Practice fighting with a partner' },
    { word: 'Pad work', definition: 'One person holds pads and the other hits them' },
    { word: 'Conditioning', definition: 'Training to make your body strong and fit' },
    { word: 'Camp', definition: 'The weeks of training before a fight' },
    { word: 'Partner', definition: 'The person you train with in the gym' },
  ],

  fillBlankExercise: [
    { before: 'We always do a', after: 'before sparring. It is ten minutes long.', answer: 'warm up' },
    { before: 'We did takedown', after: 's for thirty minutes. The same move, again and again.', answer: 'drill' },
    { before: 'After the drills we went', after: 'and started sparring.', answer: 'live' },
    { before: 'Her', after: 'was great. She trained hard for six weeks before the fight.', answer: 'camp' },
    { before: 'If you want to be ready, you have to', after: 'in the work every single day.', answer: 'put' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is "sparring"?',
      options: [
        'A hold that makes a fighter give up',
        'Practice fighting with a partner, like a real fight but safer',
        'A fitness exercise with no partner',
        'Hitting a punching bag alone',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "pad work"?',
      options: [
        'Doing push-ups on the mat',
        'Fighting on the floor with a partner',
        'Training where one person holds pads and the other punches or kicks them',
        'A type of drill done with your feet',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "camp" in MMA?',
      options: [
        'A place to train outside',
        'A beginner\'s first class at the gym',
        'The weeks of training before a fight',
        'A place where fighters sleep',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "roll" mean in MMA training?',
      options: [
        'Turn over and over on the mat',
        'Practice fighting on the floor with a partner, not too hard',
        'Throw many punches fast',
        'Warm up by running around the gym',
      ],
      correctIndex: 1,
    },
  ],
};
