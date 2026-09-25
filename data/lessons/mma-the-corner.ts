import { Lesson } from '@/types/lesson';

export const mmaTheCorner: Lesson = {
  slug: 'mma-the-corner',
  title: 'The Corner',
  subtitle: 'Learn what happens between rounds — what coaches say and what fighters hear',
  level: 'A1-A2',
  description: 'Between rounds, a fighter\'s corner team can change the fight with the right words. This lesson teaches the vocabulary of the corner — the advice, the instructions, and the language of recovery.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-corner-hero.png',

  warmUp: {
    questions: [
      'What do you think a coach tells a fighter between rounds?',
      'Do you think a coach\'s advice can change the result of a fight?',
      'Have you ever needed someone to give you good advice during a difficult moment?',
    ],
  },

  vocabulary: [
    {
      word: 'CORNER',
      partOfSpeech: 'noun',
      definition: 'The team area at the side of the cage where the coach and assistants stand.',
      example: 'Between rounds, she went to her corner and sat on the stool.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-corner.png',
    },
    {
      word: 'CUTMAN',
      partOfSpeech: 'noun',
      definition: 'A specialist who treats cuts and swelling on a fighter\'s face between rounds.',
      example: 'The cutman worked quickly on the cut above his eye — the fight continued.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cutman.png',
    },
    {
      word: 'INSTRUCTIONS',
      partOfSpeech: 'noun',
      definition: 'The specific advice and commands a coach gives a fighter between rounds.',
      example: 'His instructions were clear — "Double the jab. Don\'t get close."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-instructions.png',
    },
    {
      word: 'BREATHE',
      partOfSpeech: 'verb',
      definition: 'Take long, slow breaths — important between rounds to recover energy.',
      example: '"Breathe — slow down. You have time," said the coach.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-breathe.png',
    },
    {
      word: 'ADJUST',
      partOfSpeech: 'verb',
      definition: 'Change your approach or tactics after seeing what is not working.',
      example: 'The coach told him to adjust — stop going to the body, go high.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-adjust.png',
    },
    {
      word: 'PACE',
      partOfSpeech: 'noun',
      definition: 'The speed and rhythm of a fight — how fast or slow the action is.',
      example: '"Control the pace," the coach said. "Don\'t let him go fast."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pace.png',
    },
    {
      word: 'THROW IN THE TOWEL',
      partOfSpeech: 'verb',
      definition: 'When the corner stops the fight by throwing a white towel into the cage.',
      example: 'His corner threw in the towel — the fighter was hurt and they wanted to protect him.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-throw-in-the-towel.png',
    },
    {
      word: 'FRESH',
      partOfSpeech: 'adjective',
      definition: 'Not tired — having good energy for the next round.',
      example: '"You look fresh — go hard this round. He is tired."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fresh.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CALM DOWN',
      definition: 'Stop being nervous or rushed — breathe and think clearly.',
      example: '"Calm down — breathe. You are doing well. Control the distance."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-calm-down.png',
      tag: 'phrase',
    },
    {
      phrase: 'LISTEN UP',
      definition: 'Pay attention — a command to focus on what the coach is saying.',
      example: '"Listen up — I have thirty seconds. Here is what you need to do."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-listen-up.png',
      tag: 'phrase',
    },
    {
      phrase: 'STAY COMPOSED',
      definition: 'Keep calm and in control even under pressure.',
      example: '"Stay composed — don\'t rush. You are ahead on the scorecards."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-stay-composed.png',
      tag: 'phrase',
    },
    {
      phrase: 'WORK THE BODY',
      definition: 'Aim kicks and punches at the opponent\'s body, not the head.',
      example: '"Work the body this round — he is hurt on the left side."',
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
      text: 'He is giving [[instructions:specific advice and commands]]. They only have sixty seconds. He will say: "[[breathe:take slow, deep breaths]]. [[calm down:stop being rushed]]. [[listen up:pay attention]]."',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what does the [[cutman:the specialist who treats cuts]] do?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He treats the cuts on the face — stops the blood. Very important. Without him, a small cut can stop a fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'The coach told him to [[adjust:change approach after seeing what is not working]]. What does that mean?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Change what you are doing. Maybe [[work the body:aim strikes at the body]] more, or slow the [[pace:the speed of the fight]] down. [[stay composed:keep calm under pressure]] and [[adjust:change approach]] — that is smart fighting.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is "[[throw in the towel:when the corner stops the fight]]"?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'When the corner decides the fighter is hurt and cannot continue safely. They throw a white towel into the cage. The fight stops. It is the corner protecting their fighter.',
    },
  ],

  matchingExercise: [
    { word: 'Corner', definition: 'The team area at the side of the cage' },
    { word: 'Cutman', definition: 'A specialist who treats cuts and swelling between rounds' },
    { word: 'Instructions', definition: 'Specific advice and commands from the coach' },
    { word: 'Pace', definition: 'The speed and rhythm of the fight' },
    { word: 'Throw in the towel', definition: 'When the corner stops the fight to protect the fighter' },
    { word: 'Adjust', definition: 'Change your approach after seeing what is not working' },
  ],

  fillBlankExercise: [
    { before: '"', after: 'down — breathe. You are doing well," said the coach.', answer: 'Calm' },
    { before: 'The', after: 'worked on the cut above his eye between rounds.', answer: 'cutman' },
    { before: '"', after: 'the body this round — he is hurt on the left side."', answer: 'Work' },
    { before: 'His corner threw in the', after: '— they did not want him to take more punishment.', answer: 'towel' },
    { before: '"You look', after: '— he is tired. Go hard this round."', answer: 'fresh' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "cutman"?',
      options: [
        'A fighter who specialises in elbows',
        'A specialist who treats cuts and swelling on a fighter\'s face between rounds',
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
        'A fighter throws the towel to signal a timeout',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "stay composed" mean?',
      options: [
        'Keep fighting harder each round',
        'Stay in the same corner of the cage',
        'Keep calm and in control even under pressure',
        'Write notes about the opponent\'s strategy',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "adjust" mean in the corner context?',
      options: [
        'Fix the fighter\'s gloves or mouthguard',
        'Move to a better position in the cage',
        'Change your approach or tactics after seeing what is not working',
        'Ask the referee to review the scoring',
      ],
      correctIndex: 2,
    },
  ],
};
