import { Lesson } from '@/types/lesson';

export const mmaGrapplingBasics: Lesson = {
  slug: 'mma-grappling-basics',
  title: 'Grappling Basics',
  subtitle: 'Learn the vocabulary of takedowns, positions, and ground fighting',
  level: 'A1-A2',
  description: 'Half of MMA happens on the ground. This lesson teaches the essential words for takedowns, ground positions, and the grappling exchanges that decide fights.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-grappling-basics-hero.png',

  warmUp: {
    questions: [
      'Do you know any grappling sports? What are they?',
      'What do you think is harder — standing and striking or fighting on the ground?',
      'Have you ever seen a fighter take their opponent down to the mat?',
    ],
  },

  vocabulary: [
    {
      word: 'TAKEDOWN',
      partOfSpeech: 'noun',
      definition: 'When a fighter brings their opponent from standing to the ground.',
      example: 'He shot for a takedown and drove him into the mat.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-takedown.png',
    },
    {
      word: 'GROUND AND POUND',
      partOfSpeech: 'noun',
      definition: 'Striking an opponent who is on the ground.',
      example: 'After the takedown, he used ground and pound to end the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ground-and-pound.png',
    },
    {
      word: 'MOUNT',
      partOfSpeech: 'noun',
      definition: 'A ground position where one fighter sits on top of the other\'s chest.',
      example: 'She got the mount and started throwing punches.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-mount.png',
    },
    {
      word: 'BACK CONTROL',
      partOfSpeech: 'noun',
      definition: 'A dominant position where a fighter is behind their opponent with hooks in.',
      example: 'He took back control and had both hooks in — a very dangerous position.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-back-control.png',
    },
    {
      word: 'SWEEP',
      partOfSpeech: 'noun',
      definition: 'A move that reverses positions on the ground — from bottom to top.',
      example: 'She executed a sweep and went from the bottom to the mount.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sweep.png',
    },
    {
      word: 'SCRAMBLE',
      partOfSpeech: 'noun',
      definition: 'A fast, chaotic exchange on the ground where both fighters try to get a better position.',
      example: 'There was a long scramble and both fighters stood up.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-scramble.png',
    },
    {
      word: 'SHOOT',
      partOfSpeech: 'verb',
      definition: 'To attempt a takedown by driving forward and reaching for the opponent\'s legs.',
      example: 'He shot for a single leg and couldn\'t complete the takedown.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-shoot.png',
    },
    {
      word: 'SPRAWL',
      partOfSpeech: 'verb',
      definition: 'To defend a takedown by pushing your hips down and back.',
      example: 'She sprawled perfectly and stopped the takedown attempt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sprawl.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SHOOT FOR A TAKEDOWN',
      definition: 'Drive forward and attempt to bring the opponent to the mat.',
      example: 'He shot for a takedown in the second round and got it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-shoot-for-a-takedown.png',
      tag: 'phrase',
    },
    {
      phrase: 'GET THE MOUNT',
      definition: 'Achieve the top position by sitting on the opponent\'s chest.',
      example: 'After the takedown she worked to get the mount — the most dominant position.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-get-the-mount.png',
      tag: 'phrase',
    },
    {
      phrase: 'TAKE THE BACK',
      definition: 'Move behind the opponent and establish back control.',
      example: 'He took the back in the scramble and locked in his hooks.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-take-the-back.png',
      tag: 'phrase',
    },
    {
      phrase: 'DEFEND THE TAKEDOWN',
      definition: 'Stop the opponent from bringing you to the ground.',
      example: 'She defended three takedown attempts and kept the fight standing.',
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
      text: 'That was a [[takedown:when a fighter brings their opponent to the ground]]. He [[shoot for a takedown:drove forward to bring him to the mat]] and got it.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Now he is sitting on top of the other fighter. Is that good?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — he has the [[mount:the position where one fighter sits on the other\'s chest]]. From there he can do [[ground and pound:striking an opponent on the ground]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'The fighter on the bottom is moving a lot. What is he trying to do?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He is trying to do a [[sweep:a move that reverses positions on the ground]] — go from bottom to top. It is very hard from the mount.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'They both stood up and now they are moving fast on the ground again.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is a [[scramble:a fast, chaotic ground exchange]]. They are both trying to get a better position. He wants to [[take the back:move behind the opponent]] — that is very dangerous.',
    },
  ],

  matchingExercise: [
    { word: 'Takedown', definition: 'Bringing the opponent from standing to the ground' },
    { word: 'Mount', definition: 'Sitting on top of the opponent\'s chest on the ground' },
    { word: 'Back control', definition: 'Being behind the opponent with hooks in' },
    { word: 'Sweep', definition: 'A move that reverses ground positions' },
    { word: 'Sprawl', definition: 'A defensive move to stop a takedown' },
    { word: 'Scramble', definition: 'A fast, chaotic ground exchange for position' },
  ],

  fillBlankExercise: [
    { before: 'He', after: 'for a takedown and drove the fighter to the mat.', answer: 'shot' },
    { before: 'She', answer: 'sprawled', after: 'and stopped the takedown attempt perfectly.' },
    { before: 'After the takedown, he got the', after: 'and started throwing punches.', answer: 'mount' },
    { before: 'He took the', after: 'and locked in both hooks — a great position.', answer: 'back' },
    { before: 'There was a long', after: 'and both fighters stood up at the same time.', answer: 'scramble' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "takedown"?',
      options: [
        'A submission hold on the ground',
        'A kick to the legs',
        'When a fighter brings their opponent from standing to the ground',
        'The final punch that ends a fight',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "ground and pound"?',
      options: [
        'A grappling position on the ground',
        'Striking an opponent who is on the ground',
        'A takedown where you drive with your legs',
        'A sweep from the bottom position',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "sprawl" mean?',
      options: [
        'A move to get the mount position',
        'A strike thrown from the clinch',
        'A sweep from the bottom',
        'A defensive move where you push your hips back to stop a takedown',
      ],
      correctIndex: 3,
    },
    {
      question: 'What is "back control"?',
      options: [
        'Sitting on the opponent\'s chest',
        'Being behind the opponent with hooks in',
        'Blocking a takedown with your back',
        'A kick to the back of the leg',
      ],
      correctIndex: 1,
    },
  ],
};
