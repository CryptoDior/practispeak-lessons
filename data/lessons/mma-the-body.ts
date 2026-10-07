import { Lesson } from '@/types/lesson';

export const mmaTheBody: Lesson = {
  slug: 'mma-the-body',
  title: 'The Fighter\'s Body',
  subtitle: 'Learn the parts of the body that matter most in MMA',
  level: 'A1-A2',
  description: 'Fighters need to know their body. Learn the important body parts in MMA and simple phrases that fighters and fans use every day.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-hero.png',

  warmUp: {
    questions: [
      'What parts of the body does a fighter use to hit?',
      'What part of the body do fighters protect most?',
      'Where do fighters get hurt?',
    ],
  },

  vocabulary: [
    {
      word: 'JAB',
      partOfSpeech: 'noun',
      definition: 'A fast, straight punch with the front hand.',
      example: 'She used her jab to keep the other fighter away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-jab.png',
    },
    {
      word: 'CHIN',
      partOfSpeech: 'noun',
      definition: 'The bottom part of your face. A fighter with a good chin can take hard punches.',
      example: 'He has a strong chin. Three big punches hit him and he did not fall.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-chin.png',
    },
    {
      word: 'TEMPLE',
      partOfSpeech: 'noun',
      definition: 'The side of the head above the ear. A hard hit here can end a fight.',
      example: 'The punch hit his temple and he fell to the mat.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-temple.png',
    },
    {
      word: 'RIBS',
      partOfSpeech: 'noun',
      definition: 'The bones on the side of the body, around your chest.',
      example: 'A hard kick to the ribs makes a fighter slow.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-ribs.png',
    },
    {
      word: 'KNEE',
      partOfSpeech: 'noun',
      definition: 'The middle part of your leg. Fighters can hit with it.',
      example: 'He hit the other fighter in the body with his knee.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-knee.png',
    },
    {
      word: 'ELBOW',
      partOfSpeech: 'noun',
      definition: 'The middle part of your arm. In MMA, fighters can hit with it.',
      example: 'She hit him with her elbow and cut his face above the eye.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-elbow.png',
    },
    {
      word: 'GUARD',
      partOfSpeech: 'noun',
      definition: 'The position of your hands and arms to protect your head and body.',
      example: 'Keep your guard up or you will get hit.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-guard.png',
    },
    {
      word: 'STANCE',
      partOfSpeech: 'noun',
      definition: 'The way a fighter stands, with the feet and body ready to fight.',
      example: 'In his stance, his left foot is in front.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-stance.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'KEEP YOUR GUARD UP',
      definition: 'Protect your head and face with your hands during a fight.',
      example: 'The coach always says, "Keep your guard up!"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-keep-your-guard-up.png',
      tag: 'phrase',
    },
    {
      phrase: 'BODY SHOT',
      definition: 'A punch or kick aimed at the body, not the head.',
      example: 'He hit the ribs with a body shot. The other fighter was in pain.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-body-shot.png',
      tag: 'phrase',
    },
    {
      phrase: 'TAKE A PUNCH',
      definition: 'Get hit and keep fighting. You do not fall.',
      example: 'She can take a punch. A big punch hit her, but she stayed calm.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-take-a-punch.png',
      tag: 'phrase',
    },
    {
      phrase: 'DROP YOUR HANDS',
      definition: 'Put your hands down. Now your head is not safe.',
      example: 'Never drop your hands in a fight. The other fighter will hit you.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-body-drop-your-hands.png',
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
      text: 'It means he put his hands down. When you [[drop your hands:put your hands down]], your head is open. That is when you get hit.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Oh, so [[keep your guard up:protect your face with your hands]] means always have your hands high?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Exactly. You protect your [[chin:the bottom part of the face]] and your [[temple:the side of the head above the ear]]. Those are the dangerous places.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Now he is hitting the body. Is that to the [[ribs:the bones on the side of the body]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, a [[body shot:a punch or kick to the body, not the head]] to the ribs. If you hit there a lot, the fighter gets slow and cannot breathe well.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'He also used his [[elbow:the middle part of the arm]]. Is that allowed?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, you can use elbows in MMA. They can cut the skin. And [[knee:the middle part of the leg]]s to the body are allowed too.',
    },
  ],

  matchingExercise: [
    { word: 'Guard', definition: 'The position of your hands to protect your head' },
    { word: 'Chin', definition: 'The bottom part of the face' },
    { word: 'Temple', definition: 'The side of the head above the ear' },
    { word: 'Ribs', definition: 'The bones on the side of the body' },
    { word: 'Elbow', definition: 'The middle part of the arm' },
    { word: 'Stance', definition: 'The way a fighter stands' },
  ],

  fillBlankExercise: [
    { before: 'Always keep your', after: 'up. Protect your head.', answer: 'guard' },
    { before: 'He hit the ribs with a hard', after: 'and the fighter fell.', answer: 'body shot' },
    { before: 'She has a strong', after: '. Two big punches hit her and she kept fighting.', answer: 'chin' },
    { before: 'His', after: 'cut the other fighter above the eye.', answer: 'elbow' },
    { before: 'In his', answer: 'stance', after: ', the left foot is in front.' },
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
        'A move to take a fighter to the floor',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "drop your hands" mean?',
      options: [
        'Hit the floor with both hands',
        'Put your hands down so your head is not safe',
        'Reach down to hold the other fighter',
        'Say something to the referee',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which body part is the "temple"?',
      options: [
        'The bottom part of the face',
        'The bones on the side of the body',
        'The middle part of the arm',
        'The side of the head above the ear',
      ],
      correctIndex: 3,
    },
  ],
};
