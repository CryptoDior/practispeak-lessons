import { Lesson } from '@/types/lesson';

export const mmaTheBody: Lesson = {
  slug: 'mma-the-body',
  title: 'The Fighter\'s Body',
  subtitle: 'Learn the parts of the body that matter most in MMA',
  level: 'A1-A2',
  description: 'Fighters need to know their body. This lesson teaches the key body parts used in MMA — for striking, grappling, and defending — and the simple phrases fighters and fans use every day.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-hero.png',

  warmUp: {
    questions: [
      'Can you name three parts of the body a fighter uses to strike?',
      'What part of the body do fighters try to protect the most?',
      'If someone is hurt in a fight, what part of the body do you think is injured most often?',
    ],
  },

  vocabulary: [
    {
      word: 'JAB',
      partOfSpeech: 'noun',
      definition: 'A quick, straight punch with the lead hand.',
      example: 'She used her jab to keep the opponent at a distance.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-jab.png',
    },
    {
      word: 'CHIN',
      partOfSpeech: 'noun',
      definition: 'The lower front part of the face. A fighter with a good chin can take hard punches.',
      example: 'He has a strong chin — he took three big hits and stayed standing.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-chin.png',
    },
    {
      word: 'TEMPLE',
      partOfSpeech: 'noun',
      definition: 'The side of the head above the ear. A hard hit here can end a fight.',
      example: 'The punch landed on his temple and he fell to the mat.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-temple.png',
    },
    {
      word: 'RIBS',
      partOfSpeech: 'noun',
      definition: 'The bones on the side of the body that protect the lungs.',
      example: 'A hard body kick to the ribs can slow a fighter down.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ribs.png',
    },
    {
      word: 'KNEE',
      partOfSpeech: 'noun',
      definition: 'The joint in the middle of the leg. Used to strike or target in grappling.',
      example: 'He threw a knee to the body in the clinch.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-knee.png',
    },
    {
      word: 'ELBOW',
      partOfSpeech: 'noun',
      definition: 'The joint in the middle of the arm. In MMA, fighters use elbows to cut and damage.',
      example: 'She landed a sharp elbow and opened a cut above his eye.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-elbow.png',
    },
    {
      word: 'GUARD',
      partOfSpeech: 'noun',
      definition: 'The position of your hands and arms to protect your head and body.',
      example: 'Keep your guard up or you will get hit.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-guard.png',
    },
    {
      word: 'STANCE',
      partOfSpeech: 'noun',
      definition: 'The way a fighter stands — how they position their feet and body before fighting.',
      example: 'His orthodox stance means his left foot is forward.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-stance.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'KEEP YOUR GUARD UP',
      definition: 'Protect your head and face with your hands during a fight.',
      example: 'The coach always says — keep your guard up when you move forward.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-keep-your-guard-up.png',
      tag: 'phrase',
    },
    {
      phrase: 'BODY SHOT',
      definition: 'A punch or kick aimed at the body, not the head.',
      example: 'He threw a body shot to the ribs and the fighter bent over in pain.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-body-shot.png',
      tag: 'phrase',
    },
    {
      phrase: 'TAKE A PUNCH',
      definition: 'Receive a punch and continue fighting without falling.',
      example: 'She can take a punch — she stayed calm after the knockdown attempt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-take-a-punch.png',
      tag: 'phrase',
    },
    {
      phrase: 'DROP YOUR HANDS',
      definition: 'Lower your guard and leave your head open to attack.',
      example: 'Never drop your hands in a fight — your opponent will see the opening.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-drop-your-hands.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, the commentator keeps saying "he dropped his [[guard:the position of your hands to protect your head]]." What does that mean?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'It means he lowered his hands. When you [[drop your hands:lower your guard]], your head is open. That is when you get hit.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Oh — so [[keep your guard up:protect your face with your hands]] means always have your hands high?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Exactly. You protect your [[chin:the lower front of the face]] and your [[temple:the side of the head above the ear]]. Those are the danger spots.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I see him throwing strikes to the body now. Is that to the [[ribs:the bones on the side of the body]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — a [[body shot:a punch or kick to the body, not the head]] to the ribs. If you hit there enough, the fighter slows down and cannot breathe well.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'He also used his [[elbow:the joint in the middle of the arm]]. Is that allowed?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — elbows are legal in MMA. They can cut the skin. And [[knee:the joint in the middle of the leg]]s to the body are allowed too.',
    },
  ],

  matchingExercise: [
    { word: 'Guard', definition: 'The position of your hands to protect your head' },
    { word: 'Chin', definition: 'The lower front of the face — a target in striking' },
    { word: 'Temple', definition: 'The side of the head above the ear' },
    { word: 'Ribs', definition: 'The bones on the side of the body' },
    { word: 'Elbow', definition: 'The joint in the middle of the arm, used to strike' },
    { word: 'Stance', definition: 'The way a fighter stands and positions their body' },
  ],

  fillBlankExercise: [
    { before: 'Always keep your', after: 'up — never leave your head open.', answer: 'guard' },
    { before: 'He landed a hard', after: 'to the ribs and the fighter dropped.', answer: 'body shot' },
    { before: 'She has a strong', after: '— she took two big hits and kept fighting.', answer: 'chin' },
    { before: 'His', after: 'left a cut above the opponent\'s eye.', answer: 'elbow' },
    { before: 'He uses an orthodox', answer: 'stance', after: '— left foot forward, right hand back.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is your "guard" in MMA?',
      options: [
        'Your footwork and movement',
        'The position of your hands and arms to protect your head',
        'The way you attack with elbows',
        'Your fighting nickname',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "body shot"?',
      options: [
        'A punch aimed at the head',
        'A kick to the leg',
        'A punch or kick aimed at the body, not the head',
        'A takedown attempt',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "drop your hands" mean?',
      options: [
        'Hit the floor with both hands',
        'Lower your guard and leave your head open',
        'Reach down to grab the opponent',
        'Signal to the referee',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which body part is the "temple"?',
      options: [
        'The lower front of the face',
        'The bones on the side of the body',
        'The joint in the middle of the arm',
        'The side of the head above the ear',
      ],
      correctIndex: 3,
    },
  ],
};
