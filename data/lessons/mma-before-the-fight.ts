import { Lesson } from '@/types/lesson';

export const mmaBeforeTheFight: Lesson = {
  slug: 'mma-before-the-fight',
  title: 'Before the Fight',
  subtitle: 'Learn what happens before fight night',
  level: 'A1-A2',
  description: 'The week before a fight is busy. Learn the words for everything that happens before the fight starts.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-hero.png',

  warmUp: {
    questions: [
      'What do you think a fighter does the day before a fight?',
      'Do fighters look friendly before a fight?',
      'Is it important to be calm before a fight?',
    ],
  },

  vocabulary: [
    {
      word: 'PRESS CONFERENCE',
      partOfSpeech: 'noun',
      definition: 'A meeting before the fight. Fighters answer questions from reporters.',
      example: 'At the press conference, both fighters talked about their game plan.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-press-conference.png',
    },
    {
      word: 'FACE-OFF',
      partOfSpeech: 'noun',
      definition: 'When two fighters stand very close and look at each other, usually for photos.',
      example: 'At the face-off, they looked at each other for a long time. Nobody looked away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-face-off.png',
    },
    {
      word: 'GAME PLAN',
      partOfSpeech: 'noun',
      definition: 'The plan a fighter and the team make to beat the other fighter.',
      example: 'Our game plan is to take him down early and use ground and pound.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-game-plan.png',
    },
    {
      word: 'PREDICTION',
      partOfSpeech: 'noun',
      definition: 'What you think will happen in the fight.',
      example: 'My prediction: a knockout in round two. He is very strong.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-prediction.png',
    },
    {
      word: 'TRASH TALK',
      partOfSpeech: 'noun',
      definition: 'Bad and unkind words to the other fighter before a fight.',
      example: 'He used a lot of trash talk at the press conference. He wanted to make him nervous.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-trash-talk.png',
    },
    {
      word: 'DRESSING ROOM',
      partOfSpeech: 'noun',
      definition: 'The room where a fighter waits and gets ready before the fight.',
      example: 'She was in the dressing room for two hours. She wrapped her hands and warmed up.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-dressing-room.png',
    },
    {
      word: 'UNDERDOG',
      partOfSpeech: 'noun',
      definition: 'The fighter that people think will lose.',
      example: 'He was the underdog, but he knocked out the champion in the first round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-underdog.png',
    },
    {
      word: 'FAVOURITE',
      partOfSpeech: 'noun',
      definition: 'The fighter that people think will win.',
      example: 'She is the favourite. She won her last twelve fights.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-favourite.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GET IN YOUR HEAD',
      definition: 'Make the other fighter feel nervous or unsure.',
      example: 'His trash talk tried to get in her head, but she stayed calm.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-get-in-your-head.png',
      tag: 'phrase',
    },
    {
      phrase: 'STICK TO THE GAME PLAN',
      definition: 'Do what you planned with your team. Do not change it.',
      example: 'He stuck to the game plan and controlled the whole fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-stick-to-the-game-plan.png',
      tag: 'phrase',
    },
    {
      phrase: 'PICK THE WINNER',
      definition: 'Say who you think will win.',
      example: 'I pick the winner every week. Last week, I was right five times out of six.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-pick-the-winner.png',
      tag: 'phrase',
    },
    {
      phrase: 'HYPE THE FIGHT',
      definition: 'Make people excited about a fight.',
      example: 'The press conference helped hype the fight. Millions of people watched it online.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-hype-the-fight.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I watched the [[press conference:a meeting where fighters answer questions]] last night. Why do they argue so much?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'It is part of the job. They use [[trash talk:unkind words to the other fighter]] to [[hype the fight:make people excited]] and sell more tickets.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And the [[face-off:when fighters stand close and look at each other]]? Is that just for cameras?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, mostly for photos. But some fighters use it to try to [[get in your head:make the other fighter nervous]]. If you stay calm, it does not work.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Who is the [[favourite:the fighter people think will win]] in this fight?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The champion is the [[favourite:the fighter people think will win]]. But the other fighter is the [[underdog:the fighter people think will lose]], and she has a great [[game plan:the plan to beat this fighter]]. I think she can win.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is your [[prediction:what you think will happen in the fight]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'I [[pick the winner:say who will win]]: the underdog, by submission in round three. If she [[stick to the game plan:does what she planned]], she wins.',
    },
  ],

  matchingExercise: [
    { word: 'Game plan', definition: 'The plan to beat the other fighter' },
    { word: 'Trash talk', definition: 'Bad and unkind words to the other fighter' },
    { word: 'Underdog', definition: 'The fighter people think will lose' },
    { word: 'Favourite', definition: 'The fighter people think will win' },
    { word: 'Face-off', definition: 'When fighters stand close and look at each other' },
    { word: 'Dressing room', definition: 'The room where a fighter waits before the fight' },
  ],

  fillBlankExercise: [
    { before: 'Both fighters answered questions at the', after: '. It was the day before the fight.', answer: 'press conference' },
    { before: 'His', after: 'tried to get in her head, but she stayed calm.', answer: 'trash talk' },
    { before: 'She was the', after: '. Nobody thought she could win, but she did.', answer: 'underdog' },
    { before: 'He', after: 'to the game plan and controlled the whole fight.', answer: 'stuck' },
    { before: 'My', answer: 'prediction', after: 'is a knockout in round three. He is very strong.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "game plan" in MMA?',
      options: [
        'A video game fighters use to practice',
        'The plan a fighter and the team make to beat the other fighter',
        'A plan for what the fighter eats',
        'The list of fights at an event',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "get in your head" mean?',
      options: [
        'Learn everything about the other fighter',
        'Watch videos of the other fighter',
        'Make the other fighter feel nervous or unsure',
        'Make a good game plan',
      ],
      correctIndex: 2,
    },
    {
      question: 'Who is the "underdog"?',
      options: [
        'The champion',
        'The fighter with the most knockouts',
        'The fighter people think will lose',
        'A fighter who has never lost a fight',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "trash talk"?',
      options: [
        'A drill where fighters shout',
        'Bad and unkind words to the other fighter before a fight',
        'The speech a fighter gives after winning',
        'Bad news about a fight',
      ],
      correctIndex: 1,
    },
  ],
};
