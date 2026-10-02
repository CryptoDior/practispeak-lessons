import { Lesson } from '@/types/lesson';

export const mmaTheCorner: Lesson = {
  slug: 'mma-the-corner',
  title: 'The Corner',
  subtitle: 'Learn what coaches say to fighters between rounds',
  level: 'A1-A2',
  description: 'Between rounds, the coach talks to the fighter. Good words can change the fight. Learn the words coaches use in the corner.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-corner-hero.png',

  warmUp: {
    questions: [
      'What do you think a coach tells a fighter between rounds?',
      'Can a coach help a fighter win?',
      'Who gives you good advice?',
    ],
  },

  vocabulary: [
    {
      word: 'CORNER',
      partOfSpeech: 'noun',
      definition: 'The place next to the cage where the coach and team stand.',
      example: 'Between rounds, she went to her corner and sat on the stool.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-corner.png',
    },
    {
      word: 'CUTMAN',
      partOfSpeech: 'noun',
      definition: 'A person who helps with cuts on the fighter\'s face between rounds.',
      example: 'The cutman quickly helped with the cut above his eye. The fight continued.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cutman.png',
    },
    {
      word: 'INSTRUCTIONS',
      partOfSpeech: 'noun',
      definition: 'What the coach tells the fighter to do.',
      example: 'His instructions were clear: "Use your jab. Do not get close."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-instructions.png',
    },
    {
      word: 'BREATHE',
      partOfSpeech: 'verb',
      definition: 'Take air in and out slowly. It helps you get your energy back.',
      example: '"Breathe. Slow down. You have time," said the coach.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-breathe.png',
    },
    {
      word: 'ADJUST',
      partOfSpeech: 'verb',
      definition: 'Change what you are doing, because it is not working.',
      example: 'The coach told him to adjust: "Stop hitting the body. Hit the head."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-adjust.png',
    },
    {
      word: 'PACE',
      partOfSpeech: 'noun',
      definition: 'How fast or slow the fight is.',
      example: '"Control the pace," the coach said. "Do not let him go fast."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pace.png',
    },
    {
      word: 'THROW IN THE TOWEL',
      partOfSpeech: 'verb',
      definition: 'When the corner stops the fight by throwing a white towel into the cage.',
      example: 'His corner threw in the towel. The fighter was hurt, and they wanted him to be safe.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-throw-in-the-towel.png',
    },
    {
      word: 'FRESH',
      partOfSpeech: 'adjective',
      definition: 'Not tired. You have a lot of energy.',
      example: '"You look fresh. Go hard this round. He is tired."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fresh.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CALM DOWN',
      definition: 'Stop being nervous. Breathe and think.',
      example: '"Calm down. Breathe. You are doing well."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-calm-down.png',
      tag: 'phrase',
    },
    {
      phrase: 'LISTEN UP',
      definition: 'Listen carefully to the coach.',
      example: '"Listen up! I only have thirty seconds."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-listen-up.png',
      tag: 'phrase',
    },
    {
      phrase: 'STAY COMPOSED',
      definition: 'Stay calm, even when it is hard.',
      example: '"Stay composed. Do not rush. You are winning."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-stay-composed.png',
      tag: 'phrase',
    },
    {
      phrase: 'WORK THE BODY',
      definition: 'Hit the other fighter\'s body, not the head.',
      example: '"Work the body this round. He is hurt on the left side."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-work-the-body.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, between rounds the coach is talking very fast. What is he saying?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He is giving [[instructions:what to do]]. They only have sixty seconds. He will say: "[[breathe:take slow, deep breaths]]. [[calm down:stop being nervous]]. [[listen up:listen carefully]]."',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what does the [[cutman:the person who helps with cuts]] do?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He helps with the cuts on the face. He stops the blood. Without him, a small cut can stop a fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'The coach told him to [[adjust:change what you do]]. What does that mean?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Change what you are doing. Maybe [[work the body:hit the body]] more, or slow the [[pace:the speed of the fight]] down. [[Stay composed:stay calm]] and [[adjust:change what you do]]. That is smart fighting.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is "[[throw in the towel:when the corner stops the fight]]"?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The team sees the fighter is hurt. They throw a white towel into the cage. The fight stops. They want their fighter to be safe.',
    },
  ],

  matchingExercise: [
    { word: 'Corner', definition: 'The place where the fighter\'s team stands' },
    { word: 'Cutman', definition: 'A person who helps with cuts between rounds' },
    { word: 'Instructions', definition: 'What the coach tells the fighter to do' },
    { word: 'Pace', definition: 'How fast or slow the fight is' },
    { word: 'Throw in the towel', definition: 'When the team stops the fight to keep the fighter safe' },
    { word: 'Adjust', definition: 'Change what you do, because it is not working' },
  ],

  fillBlankExercise: [
    { before: '"', after: 'down. Breathe. You are doing well," said the coach.', answer: 'Calm' },
    { before: 'The', after: 'worked on the cut above his eye between rounds.', answer: 'cutman' },
    { before: '"', after: 'the body this round. He is hurt on the left side."', answer: 'Work' },
    { before: 'His corner threw in the', after: '. They did not want him to get hurt more.', answer: 'towel' },
    { before: '"You look', after: '. He is tired. Go hard this round."', answer: 'fresh' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "cutman"?',
      options: [
        'A fighter who uses a lot of elbows',
        'A person who helps with cuts on the fighter\'s face between rounds',
        'The coach who gives instructions in the corner',
        'A judge who watches from the corner',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "throw in the towel" mean?',
      options: [
        'A fighter throws their towel to celebrate a win',
        'The referee uses a towel to clean the mat',
        'The corner stops the fight by throwing a white towel into the cage',
        'A fighter throws the towel to ask for a break',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "stay composed" mean?',
      options: [
        'Keep fighting harder each round',
        'Stay in the same corner of the cage',
        'Stay calm, even when it is hard',
        'Write notes about the other fighter',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "adjust" mean in the corner context?',
      options: [
        'Fix the fighter\'s gloves or mouthguard',
        'Move to a better position in the cage',
        'Change what you are doing, because it is not working',
        'Ask the referee to check the scores',
      ],
      correctIndex: 2,
    },
  ],
};
