import { Lesson } from '@/types/lesson';

export const mmaDescribingAFighter: Lesson = {
  slug: 'mma-describing-a-fighter',
  title: 'Describing a Fighter',
  subtitle: 'Learn the adjectives and words fans and analysts use to talk about fighters',
  level: 'A1-A2',
  description: 'Is a fighter aggressive or technical? A striker or a grappler? This lesson teaches you the vocabulary to describe any MMA fighter — their style, strengths, and weaknesses.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-describing-a-fighter-hero.png',

  warmUp: {
    questions: [
      'How would you describe your favourite fighter in one or two words?',
      'What is the difference between an aggressive fighter and a technical fighter?',
      'Can you think of a fighter who is famous for their defence?',
    ],
  },

  vocabulary: [
    {
      word: 'AGGRESSIVE',
      partOfSpeech: 'adjective',
      definition: 'Always moving forward and attacking the opponent.',
      example: 'He is very aggressive — he never stops coming forward.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-aggressive.png',
    },
    {
      word: 'TECHNICAL',
      partOfSpeech: 'adjective',
      definition: 'Using skill and precision rather than power or aggression.',
      example: 'She is very technical — every move has a purpose.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-technical.png',
    },
    {
      word: 'EXPLOSIVE',
      partOfSpeech: 'adjective',
      definition: 'Able to move very fast and with great power in a short time.',
      example: 'His explosive speed means he can end a fight in seconds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-explosive.png',
    },
    {
      word: 'REACH',
      partOfSpeech: 'noun',
      definition: 'The distance from fingertip to fingertip with arms spread out.',
      example: 'Her long reach lets her hit opponents before they can get close.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-reach.png',
    },
    {
      word: 'SOUTHPAW',
      partOfSpeech: 'noun',
      definition: 'A fighter who stands with their right foot forward and right hand as the lead.',
      example: 'He is a southpaw — a mirror image of most fighters.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-southpaw.png',
    },
    {
      word: 'WELL-ROUNDED',
      partOfSpeech: 'adjective',
      definition: 'Good at all areas — striking, grappling, wrestling, and defence.',
      example: 'She is a well-rounded fighter — no obvious weaknesses.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-well-rounded.png',
    },
    {
      word: 'KNOCKOUT POWER',
      partOfSpeech: 'noun',
      definition: 'The ability to knock an opponent out with a single punch.',
      example: 'He has knockout power in both hands — any punch can end the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-knockout-power.png',
    },
    {
      word: 'CARDIO',
      partOfSpeech: 'noun',
      definition: 'A fighter\'s stamina and ability to fight hard for many rounds.',
      example: 'Her cardio is excellent — she gets faster and stronger in the later rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cardio.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HAVE A STRONG CHIN',
      definition: 'Be able to take hard punches without falling.',
      example: 'He has a strong chin — three heavy punches and he kept fighting.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-have-a-strong-chin.png',
      tag: 'phrase',
    },
    {
      phrase: 'GAS OUT',
      definition: 'Get tired and lose energy during the later rounds of a fight.',
      example: 'He gassed out in round three — his cardio was not good enough.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-gas-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'SWITCH STYLES',
      definition: 'Change your fighting approach during a fight.',
      example: 'She switched styles mid-fight — from boxer to wrestler — and took control.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-switch-styles.png',
      tag: 'phrase',
    },
    {
      phrase: 'USE YOUR REACH',
      definition: 'Take advantage of longer arms to hit the opponent from further away.',
      example: 'He used his reach with the jab and kept the shorter fighter at a distance.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-use-your-reach.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, how would you describe this fighter? Is she good?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'She is very [[technical:using skill and precision, not just power]]. Every strike has a purpose. She is also [[well-rounded:good at all areas of MMA]] — striking and grappling.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And her opponent?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He is more [[aggressive:always moving forward and attacking]] — he likes to push forward and use [[knockout power:the ability to knock an opponent out with one punch]]. He is a [[southpaw:a fighter with right foot forward]], which makes him unusual to fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I heard he [[gas out:get tired in later rounds]]s late. Is that a problem?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — his [[cardio:stamina and ability to keep fighting for many rounds]] is not great. If she [[use your reach:take advantage of her longer arms]] and keeps the fight going, he will get tired by round three.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'She is also very [[explosive:fast and powerful in a short burst]], right?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Exactly — [[explosive:able to move with great speed and power]]. And she has a strong [[have a strong chin:the ability to take hard punches]] — I never saw her hurt in a fight.',
    },
  ],

  matchingExercise: [
    { word: 'Aggressive', definition: 'Always moving forward and attacking the opponent' },
    { word: 'Technical', definition: 'Using skill and precision rather than power' },
    { word: 'Explosive', definition: 'Able to move very fast and powerfully in a short time' },
    { word: 'Reach', definition: 'The distance from fingertip to fingertip with arms spread' },
    { word: 'Cardio', definition: 'A fighter\'s stamina — ability to fight hard for many rounds' },
    { word: 'Well-rounded', definition: 'Good at all areas — striking, grappling, and defence' },
  ],

  fillBlankExercise: [
    { before: 'She is very', after: '— every move she makes has a purpose.', answer: 'technical' },
    { before: 'His', after: 'power is dangerous — one punch can end the fight.', answer: 'knockout' },
    { before: 'He', after: 'out in round four — he trained hard but ran out of energy.', answer: 'gassed' },
    { before: 'Her long', after: 'lets her hit the opponent before they can get close.', answer: 'reach' },
    { before: 'He is a', after: '— right foot forward, an unusual stance for most fighters.', answer: 'southpaw' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "aggressive" mean when describing a fighter?',
      options: [
        'Very technical and precise with every move',
        'Good at defending takedowns',
        'Always moving forward and attacking the opponent',
        'Able to fight well on the ground',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "gas out" mean?',
      options: [
        'Win the fight in the first round',
        'Switch from striking to grappling',
        'Get tired and lose energy during the later rounds of a fight',
        'Use gas-based training methods like altitude camps',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "reach" in MMA?',
      options: [
        'The distance a fighter can kick',
        'The distance from fingertip to fingertip with arms spread out',
        'How far a fighter can move across the cage',
        'The length of a fighter\'s legs',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "well-rounded" mean for a fighter?',
      options: [
        'A fighter with a large build and heavy weight',
        'A fighter who has won many fights by decision',
        'Good at all areas — striking, grappling, wrestling, and defence',
        'A fighter who always looks calm and relaxed',
      ],
      correctIndex: 2,
    },
  ],
};
