import { Lesson } from '@/types/lesson';

export const mmaStrikes: Lesson = {
  slug: 'mma-strikes',
  title: 'MMA Strikes',
  subtitle: 'Learn the names of the punches, kicks, and strikes fighters use',
  level: 'A1-A2',
  description: 'From the basic jab to the spinning back kick, this lesson teaches you the core striking vocabulary every MMA fan and fighter needs to know.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-strikes-hero.png',

  warmUp: {
    questions: [
      'What is the difference between a punch and a kick?',
      'Can you name one type of punch you have seen in MMA?',
      'Which do you think is more dangerous — a punch to the head or a kick to the leg?',
    ],
  },

  vocabulary: [
    {
      word: 'PUNCH',
      partOfSpeech: 'noun',
      definition: 'A strike with a closed fist.',
      example: 'He threw three punches in a row and the opponent fell.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-punch.png',
    },
    {
      word: 'KICK',
      partOfSpeech: 'noun',
      definition: 'A strike with the foot or leg.',
      example: 'Her high kick landed on the side of his head.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-kick.png',
    },
    {
      word: 'CROSS',
      partOfSpeech: 'noun',
      definition: 'A straight, powerful punch with the back hand.',
      example: 'He set up the cross with a jab and knocked the opponent down.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cross.png',
    },
    {
      word: 'HOOK',
      partOfSpeech: 'noun',
      definition: 'A punch that curves to the side, targeting the jaw or temple.',
      example: 'The left hook landed clean and ended the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-hook.png',
    },
    {
      word: 'UPPERCUT',
      partOfSpeech: 'noun',
      definition: 'A punch that goes upward, targeting the chin.',
      example: 'In the clinch, she landed an uppercut that stunned her opponent.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-uppercut.png',
    },
    {
      word: 'LEG KICK',
      partOfSpeech: 'noun',
      definition: 'A kick aimed at the thigh or calf of the opponent.',
      example: 'After five leg kicks, his opponent could barely stand.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-leg-kick.png',
    },
    {
      word: 'COMBO',
      partOfSpeech: 'noun',
      definition: 'A combination — two or more strikes thrown together quickly.',
      example: 'She hit a jab-cross combo and then moved out of range.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-combo.png',
    },
    {
      word: 'CLINCH',
      partOfSpeech: 'noun',
      definition: 'When two fighters hold each other, usually standing close together.',
      example: 'He pulled the opponent into a clinch to stop the combinations.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-clinch.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THROW A PUNCH',
      definition: 'Launch a punch at the opponent.',
      example: 'He threw a punch but the fighter slipped it and moved away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-throw-a-punch.png',
      tag: 'phrase',
    },
    {
      phrase: 'LAND A STRIKE',
      definition: 'Hit the opponent successfully with a strike.',
      example: 'She landed three strikes in the last ten seconds and won the round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-land-a-strike.png',
      tag: 'phrase',
    },
    {
      phrase: 'SLIP A PUNCH',
      definition: 'Move your head to avoid a punch without stepping back.',
      example: 'He slipped the jab and fired back with a right cross.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-slip-a-punch.png',
      tag: 'phrase',
    },
    {
      phrase: 'CUT OFF THE CAGE',
      definition: 'Move to stop the opponent from escaping around the cage.',
      example: 'She cut off the cage and trapped him in the corner.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cut-off-the-cage.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, what is the difference between a [[cross:a straight, powerful punch with the back hand]] and a [[hook:a punch that curves to the side]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'A cross goes straight — boom, directly at the face. A hook curves from the side and hits the jaw or [[temple:the side of the head above the ear]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what about the [[uppercut:a punch that goes upward, targeting the chin]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That goes up — under the chin. Very dangerous in a [[clinch:when two fighters hold each other close]]. You can [[land a strike:hit the opponent successfully]] from there.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[combo:two or more strikes thrown together quickly]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Two or more strikes, fast. Like: jab — [[cross:straight punch with the back hand]] — [[hook:curved punch to the side]]. A classic three-punch combo.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And [[leg kick:a kick to the thigh or calf]]s — I see fighters use those a lot.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes. Hit the leg enough and the fighter cannot move well. Then you [[cut off the cage:move to stop the opponent from escaping]] and finish.',
    },
  ],

  matchingExercise: [
    { word: 'Cross', definition: 'A straight, powerful punch with the back hand' },
    { word: 'Hook', definition: 'A curved punch targeting the jaw or temple' },
    { word: 'Uppercut', definition: 'A punch that goes upward to the chin' },
    { word: 'Leg kick', definition: 'A kick aimed at the thigh or calf' },
    { word: 'Combo', definition: 'Two or more strikes thrown quickly together' },
    { word: 'Clinch', definition: 'When two fighters hold each other standing close' },
  ],

  fillBlankExercise: [
    { before: 'He set up the', after: 'with a jab and knocked the opponent down.', answer: 'cross' },
    { before: 'The left', after: 'landed on the jaw and the fight was over.', answer: 'hook' },
    { before: 'She', after: 'the jab and fired back with a right hand.', answer: 'slipped' },
    { before: 'He threw a jab-cross', after: 'and moved out of range.', answer: 'combo' },
    { before: 'Five', after: 'kicks to the leg slowed him down.', answer: 'leg' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "cross" in MMA striking?',
      options: [
        'A curved punch from the side',
        'A punch that goes upward to the chin',
        'A straight, powerful punch with the back hand',
        'A kick to the leg',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "land a strike" mean?',
      options: [
        'Throw a punch and miss',
        'Hit the opponent successfully with a strike',
        'Fall to the mat after a strike',
        'Block a punch from the opponent',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "clinch"?',
      options: [
        'A type of kick to the leg',
        'When a fighter falls to the mat',
        'When two fighters hold each other close while standing',
        'A spinning punch',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "slip a punch" mean?',
      options: [
        'Throw a punch that the opponent catches',
        'Fall after being hit',
        'Move your head to avoid a punch without stepping back',
        'Use your elbow instead of your fist',
      ],
      correctIndex: 2,
    },
  ],
};
