import { Lesson } from '@/types/lesson';

export const mmaStrikes: Lesson = {
  slug: 'mma-strikes',
  title: 'MMA Strikes',
  subtitle: 'Learn the names of the punches, kicks, and strikes fighters use',
  level: 'A1-A2',
  description: 'Jab, cross, hook, kick... Learn the names of the punches and kicks that every MMA fan and fighter needs to know.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-strikes-hero.png',

  warmUp: {
    questions: [
      'What is the difference between a punch and a kick?',
      'Can you name one type of punch you have seen in MMA?',
      'Which is more dangerous: a punch to the head or a kick to the leg?',
    ],
  },

  vocabulary: [
    {
      word: 'PUNCH',
      partOfSpeech: 'noun',
      definition: 'When you hit with your hand closed.',
      example: 'He threw three punches, one after the other, and the other fighter fell.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-punch.png',
    },
    {
      word: 'KICK',
      partOfSpeech: 'noun',
      definition: 'When you hit with your foot or leg.',
      example: 'Her high kick hit the side of his head.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-kick.png',
    },
    {
      word: 'CROSS',
      partOfSpeech: 'noun',
      definition: 'A straight, strong punch with the back hand.',
      example: 'He threw a jab, then a cross, and the other fighter fell down.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cross.png',
    },
    {
      word: 'HOOK',
      partOfSpeech: 'noun',
      definition: 'A punch that comes from the side to the jaw or head.',
      example: 'The left hook hit him and the fight was over.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-hook.png',
    },
    {
      word: 'UPPERCUT',
      partOfSpeech: 'noun',
      definition: 'A punch that goes up to the chin.',
      example: 'She hit him with an uppercut and he almost fell.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-uppercut.png',
    },
    {
      word: 'LEG KICK',
      partOfSpeech: 'noun',
      definition: 'A kick to the other fighter\'s leg.',
      example: 'After five leg kicks, the other fighter could not stand well.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-leg-kick.png',
    },
    {
      word: 'COMBO',
      partOfSpeech: 'noun',
      definition: 'Two or more punches or kicks, one fast after the other.',
      example: 'She threw a jab-cross combo and then moved back.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-combo.png',
    },
    {
      word: 'CLINCH',
      partOfSpeech: 'noun',
      definition: 'When two fighters stand very close and hold each other.',
      example: 'He held the other fighter in a clinch, so the other fighter could not punch well.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-clinch.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THROW A PUNCH',
      definition: 'Try to hit the other fighter with your hand.',
      example: 'He threw a punch, but the other fighter moved away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-throw-a-punch.png',
      tag: 'phrase',
    },
    {
      phrase: 'LAND A STRIKE',
      definition: 'Hit the other fighter with a punch or kick.',
      example: 'She landed three strikes in the last ten seconds and won the round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-land-a-strike.png',
      tag: 'phrase',
    },
    {
      phrase: 'SLIP A PUNCH',
      definition: 'Move your head quickly so the punch does not hit you.',
      example: 'He slipped the jab and threw a cross back.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-slip-a-punch.png',
      tag: 'phrase',
    },
    {
      phrase: 'CUT OFF THE CAGE',
      definition: 'Move so the other fighter cannot run away around the cage.',
      example: 'She cut off the cage. Now he was in the corner and could not move away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cut-off-the-cage.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, what is the difference between a [[cross:a straight, strong punch with the back hand]] and a [[hook:a punch that curves to the side]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'A cross goes straight to the face. Boom! A hook comes from the side and hits the jaw or [[temple:the side of the head above the ear]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what about the [[uppercut:a punch that goes up to the chin]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That goes up, under the chin. It is very dangerous in a [[clinch:when two fighters stand close and hold each other]]. You can [[land a strike:hit the other fighter]] from there.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[combo:two or more fast punches or kicks]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Two or more fast punches. For example: jab, [[cross:straight punch with the back hand]], [[hook:punch from the side]]. That is a three-punch combo.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And [[leg kick:a kick to the leg]]s? Fighters use those a lot.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes. Hit the leg a lot and the fighter cannot move well. Then you [[cut off the cage:stop the other fighter from moving away]] and end the fight.',
    },
  ],

  matchingExercise: [
    { word: 'Cross', definition: 'A straight, strong punch with the back hand' },
    { word: 'Hook', definition: 'A punch from the side to the jaw or head' },
    { word: 'Uppercut', definition: 'A punch that goes up to the chin' },
    { word: 'Leg kick', definition: 'A kick to the leg' },
    { word: 'Combo', definition: 'Two or more fast punches or kicks' },
    { word: 'Clinch', definition: 'When two fighters stand close and hold each other' },
  ],

  fillBlankExercise: [
    { before: 'He threw a jab, then a', after: 'and the other fighter fell down.', answer: 'cross' },
    { before: 'The left', after: 'landed on the jaw and the fight was over.', answer: 'hook' },
    { before: 'She', after: 'the jab and hit back with a right hand.', answer: 'slipped' },
    { before: 'He threw a jab-cross', after: 'and moved back.', answer: 'combo' },
    { before: 'Five', after: 'kicks to the leg slowed him down.', answer: 'leg' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "cross" in MMA striking?',
      options: [
        'A curved punch from the side',
        'A punch that goes up to the chin',
        'A straight, strong punch with the back hand',
        'A kick to the leg',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "land a strike" mean?',
      options: [
        'Throw a punch and miss',
        'Hit the other fighter with a punch or kick',
        'Fall to the mat after a strike',
        'Stop a punch from the other fighter',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "clinch"?',
      options: [
        'A type of kick to the leg',
        'When a fighter falls to the mat',
        'When two fighters stand close and hold each other',
        'A spinning punch',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "slip a punch" mean?',
      options: [
        'Throw a punch that the other fighter catches',
        'Fall after being hit',
        'Move your head quickly so the punch does not hit you',
        'Use your elbow instead of your fist',
      ],
      correctIndex: 2,
    },
  ],
};
