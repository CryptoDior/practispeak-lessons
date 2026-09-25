import { Lesson } from '@/types/lesson';

export const mmaTrainingBasics: Lesson = {
  slug: 'mma-training-basics',
  title: 'Training Basics',
  subtitle: 'Learn the vocabulary of an MMA training session',
  level: 'A1-A2',
  description: 'Before a fighter steps into the cage, they spend hundreds of hours training. This lesson teaches the key vocabulary of MMA training — from drills and sparring to conditioning and warm-up.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-training-basics-hero.png',

  warmUp: {
    questions: [
      'Do you exercise regularly? What do you do?',
      'What do you think MMA training looks like?',
      'Is it important to train hard before a fight? Why?',
    ],
  },

  vocabulary: [
    {
      word: 'DRILL',
      partOfSpeech: 'noun',
      definition: 'A repeated exercise that helps you practice one specific skill.',
      example: 'We did takedown drills for thirty minutes — the same move over and over.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-drill.png',
    },
    {
      word: 'SPARRING',
      partOfSpeech: 'noun',
      definition: 'Controlled practice fighting with a partner — like a real fight but safer.',
      example: 'We sparred for three rounds today. My partner was very fast.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sparring.png',
    },
    {
      word: 'PAD WORK',
      partOfSpeech: 'noun',
      definition: 'Training where one person holds pads and the other punches or kicks them.',
      example: 'The coach held the pads and she worked her combinations on them.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pad-work.png',
    },
    {
      word: 'CONDITIONING',
      partOfSpeech: 'noun',
      definition: 'Physical fitness training — building stamina, strength, and speed.',
      example: 'Conditioning is important — if you get tired, you make mistakes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-conditioning.png',
    },
    {
      word: 'ROUND',
      partOfSpeech: 'noun',
      definition: 'A period of training or fighting — usually three or five minutes.',
      example: 'We did four rounds of sparring today — five minutes each.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-round.png',
    },
    {
      word: 'PARTNER',
      partOfSpeech: 'noun',
      definition: 'The person you train with — for drills, sparring, or pad work.',
      example: 'My training partner is bigger than me, but that makes me better.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-partner.png',
    },
    {
      word: 'WARM UP',
      partOfSpeech: 'noun',
      definition: 'Light exercise done before training to prepare the body.',
      example: 'We always do a ten-minute warm up before sparring.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-warm-up.png',
    },
    {
      word: 'CAMP',
      partOfSpeech: 'noun',
      definition: 'A training period before a specific fight — usually six to eight weeks.',
      example: 'She had a great camp before this fight — six weeks of hard training.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-camp.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HIT THE MATS',
      definition: 'Start training — go to the gym and begin practice.',
      example: 'We hit the mats at 6am every morning during camp.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-hit-the-mats.png',
      tag: 'phrase',
    },
    {
      phrase: 'PUT IN THE WORK',
      definition: 'Train hard and consistently without shortcuts.',
      example: 'If you want to be ready, you have to put in the work every day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-put-in-the-work.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO LIVE',
      definition: 'In training — switch from drills to real, competitive sparring.',
      example: 'We drilled for an hour and then went live for two rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-training-go-live.png',
      tag: 'phrase',
    },
    {
      phrase: 'ROLL',
      definition: 'Grapple and wrestle with a partner in a relaxed, practice way.',
      example: 'After class we rolled for twenty minutes — no striking, just grappling.',
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
      text: 'We start with a [[warm up:light exercise to prepare the body]] — running and stretching. Then [[drill:a repeated exercise for one skill]]s — maybe takedowns or footwork.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And after drills?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'We do [[pad work:training where one person holds pads]] with the coach. Then we [[go live:switch to real sparring]]. That is when we do [[sparring:controlled practice fighting]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How long does sparring last?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Three or four [[round:a timed period of training or fighting]]s — five minutes each. My [[partner:the person I train with]] pushes me hard. After that we [[roll:grapple in a relaxed way]] on the mat.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And before a fight — do you train harder?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — during [[camp:the training period before a fight]], we [[hit the mats:start training]] two times a day. [[Put in the work:train hard every day]] — that is the only way to be ready.',
    },
  ],

  matchingExercise: [
    { word: 'Drill', definition: 'A repeated exercise for one specific skill' },
    { word: 'Sparring', definition: 'Controlled practice fighting with a partner' },
    { word: 'Pad work', definition: 'One person holds pads while the other strikes them' },
    { word: 'Conditioning', definition: 'Physical fitness training for stamina and strength' },
    { word: 'Camp', definition: 'The training period before a specific fight' },
    { word: 'Partner', definition: 'The person you train with in the gym' },
  ],

  fillBlankExercise: [
    { before: 'We always do a', after: 'before sparring — ten minutes of movement.', answer: 'warm up' },
    { before: 'We did takedown', after: 's for thirty minutes — same move, over and over.', answer: 'drill' },
    { before: 'After the drills we went', after: 'and started sparring.', answer: 'live' },
    { before: 'Her', after: 'was great — six weeks of hard training before the fight.', answer: 'camp' },
    { before: 'If you want to be ready, you have to', after: 'in the work every single day.', answer: 'put' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is "sparring"?',
      options: [
        'A type of submission hold',
        'Controlled practice fighting with a partner — like a real fight but safer',
        'A fitness exercise with no partner',
        'Hitting a punching bag alone',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "pad work"?',
      options: [
        'Doing push-ups on the mat',
        'Grappling on the floor with a partner',
        'Training where one person holds pads and the other punches or kicks them',
        'A type of drill done with your feet',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "camp" in MMA?',
      options: [
        'An outdoor training location',
        'A beginner\'s first class at the gym',
        'The training period before a specific fight — usually six to eight weeks',
        'A place where fighters sleep during a tournament',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "roll" mean in MMA training?',
      options: [
        'Do a somersault on the mat',
        'Grapple and wrestle with a partner in a relaxed, practice way',
        'Throw punches in combination',
        'Warm up by running around the gym',
      ],
      correctIndex: 1,
    },
  ],
};
