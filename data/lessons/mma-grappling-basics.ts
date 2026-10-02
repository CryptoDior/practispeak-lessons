import { Lesson } from '@/types/lesson';

export const mmaGrapplingBasics: Lesson = {
  slug: 'mma-grappling-basics',
  title: 'Grappling Basics',
  subtitle: 'Learn the words for fighting on the ground',
  level: 'A1-A2',
  description: 'In MMA, fighters often fight on the ground. Learn the words for taking a fighter down and for fighting on the floor.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-grappling-basics-hero.png',

  warmUp: {
    questions: [
      'Do you know any sports where people fight on the floor?',
      'Which is harder: fighting standing up or fighting on the ground?',
      'Do you like watching fights on the ground?',
    ],
  },

  vocabulary: [
    {
      word: 'TAKEDOWN',
      partOfSpeech: 'noun',
      definition: 'When a fighter puts the other fighter on the floor.',
      example: 'He did a takedown and the other fighter fell on the mat.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-takedown.png',
    },
    {
      word: 'GROUND AND POUND',
      partOfSpeech: 'noun',
      definition: 'Hitting a fighter who is on the floor.',
      example: 'After the takedown, he used ground and pound to end the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ground-and-pound.png',
    },
    {
      word: 'MOUNT',
      partOfSpeech: 'noun',
      definition: 'When one fighter sits on the other fighter\'s chest.',
      example: 'She got the mount and started throwing punches.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-mount.png',
    },
    {
      word: 'BACK CONTROL',
      partOfSpeech: 'noun',
      definition: 'When a fighter is behind the other fighter and holds him with arms and legs.',
      example: 'He got back control. This is very dangerous for the other fighter.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-back-control.png',
    },
    {
      word: 'SWEEP',
      partOfSpeech: 'noun',
      definition: 'A move on the floor. The fighter on the bottom goes to the top.',
      example: 'She did a sweep and went from the bottom to the top.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sweep.png',
    },
    {
      word: 'SCRAMBLE',
      partOfSpeech: 'noun',
      definition: 'When both fighters move very fast on the floor. They both want to be on top.',
      example: 'There was a long scramble and both fighters stood up.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-scramble.png',
    },
    {
      word: 'SHOOT',
      partOfSpeech: 'verb',
      definition: 'To move fast to the other fighter\'s legs to take him down.',
      example: 'He shot for the legs, but he could not take him down.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-shoot.png',
    },
    {
      word: 'SPRAWL',
      partOfSpeech: 'verb',
      definition: 'To stop a takedown. You push your legs back and your body down.',
      example: 'She sprawled and stopped the takedown.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sprawl.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SHOOT FOR A TAKEDOWN',
      definition: 'Move fast to the other fighter and try to put him on the floor.',
      example: 'He shot for a takedown in the second round and got it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-shoot-for-a-takedown.png',
      tag: 'phrase',
    },
    {
      phrase: 'GET THE MOUNT',
      definition: 'Get on top and sit on the other fighter\'s chest.',
      example: 'After the takedown, she tried to get the mount. It is the best place to be.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-get-the-mount.png',
      tag: 'phrase',
    },
    {
      phrase: 'TAKE THE BACK',
      definition: 'Move behind the other fighter and hold him.',
      example: 'He took the back and held the other fighter with his legs.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-take-the-back.png',
      tag: 'phrase',
    },
    {
      phrase: 'DEFEND THE TAKEDOWN',
      definition: 'Stop the other fighter from putting you on the floor.',
      example: 'She defended the takedown three times. The fight stayed standing.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-defend-the-takedown.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, he just went to the floor! What happened?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That was a [[takedown:when a fighter puts the other fighter on the floor]]. He [[shoot for a takedown:moved fast to put him on the floor]] and got it.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Now he is sitting on top of the other fighter. Is that good?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, he has the [[mount:sitting on the other fighter\'s chest]]. From there he can do [[ground and pound:hitting a fighter on the floor]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'The fighter on the bottom is moving a lot. What is he trying to do?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He is trying to do a [[sweep:a move from the bottom to the top]]. He wants to go from the bottom to the top. It is very hard from the mount.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Now they are both moving very fast on the floor.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is a [[scramble:fast moving on the floor]]. They both want a better place. He wants to [[take the back:move behind the other fighter]]. That is very dangerous.',
    },
  ],

  matchingExercise: [
    { word: 'Takedown', definition: 'Putting the other fighter on the floor' },
    { word: 'Mount', definition: 'Sitting on the other fighter\'s chest' },
    { word: 'Back control', definition: 'Being behind the other fighter and holding him' },
    { word: 'Sweep', definition: 'A move from the bottom to the top' },
    { word: 'Sprawl', definition: 'A move to stop a takedown' },
    { word: 'Scramble', definition: 'Both fighters move fast on the floor' },
  ],

  fillBlankExercise: [
    { before: 'He', after: 'for a takedown and the fighter fell on the mat.', answer: 'shot' },
    { before: 'She', answer: 'sprawled', after: 'and stopped the takedown.' },
    { before: 'After the takedown, he got the', after: 'and started throwing punches.', answer: 'mount' },
    { before: 'He took the', after: 'and held the other fighter with his legs.', answer: 'back' },
    { before: 'There was a long', after: 'and both fighters stood up at the same time.', answer: 'scramble' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "takedown"?',
      options: [
        'A move that makes a fighter give up',
        'A kick to the legs',
        'When a fighter puts the other fighter on the floor',
        'The final punch that ends a fight',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "ground and pound"?',
      options: [
        'A way to sit on the floor',
        'Hitting a fighter who is on the floor',
        'A takedown with your legs',
        'A sweep from the bottom position',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "sprawl" mean?',
      options: [
        'A move to get the mount position',
        'A punch in the clinch',
        'A sweep from the bottom',
        'A move where you push your legs back to stop a takedown',
      ],
      correctIndex: 3,
    },
    {
      question: 'What is "back control"?',
      options: [
        'Sitting on the other fighter\'s chest',
        'Being behind the other fighter and holding him',
        'Stopping a takedown with your back',
        'A kick to the back of the leg',
      ],
      correctIndex: 1,
    },
  ],
};
