import { Lesson } from '@/types/lesson';

export const mmaEquipment: Lesson = {
  slug: 'mma-equipment',
  title: 'MMA Equipment',
  subtitle: 'Learn the names of the gear fighters use and the space they fight in',
  level: 'A1-A2',
  description: 'Learn the words for the cage, the canvas, the mats, and the things a fighter wears and uses. These are the first MMA words you need.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-hero.png?v=2',

  warmUp: {
    questions: [
      'What does a fighter wear?',
      'Where do MMA fighters fight?',
      'Are MMA gloves big or small?',
    ],
  },

  vocabulary: [
    {
      word: 'CAGE',
      partOfSpeech: 'noun',
      definition: 'The metal fence around the fighting area. MMA fights happen inside it.',
      example: 'The two fighters walked into the cage.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-cage.png',
    },
    {
      word: 'CANVAS',
      partOfSpeech: 'noun',
      definition: 'The floor inside the cage at a fight. It is covered with strong cloth.',
      example: 'The fighter fell down on the canvas.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-canvas.png',
    },
    {
      word: 'MAT',
      partOfSpeech: 'noun',
      definition: 'A soft floor in the gym. Fighters train on it.',
      example: 'We train on the mats every day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-mat.png?v=2',
    },
    {
      word: 'GLOVES',
      partOfSpeech: 'noun',
      definition: 'Small, soft gloves for MMA fighters. You can see the fingers.',
      example: 'She put on her gloves before the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-gloves.png',
    },
    {
      word: 'SHORTS',
      partOfSpeech: 'noun',
      definition: 'Special light shorts that fighters wear in a fight.',
      example: 'His shorts have his country flag on them.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-shorts.png',
    },
    {
      word: 'MOUTHGUARD',
      partOfSpeech: 'noun',
      definition: 'A plastic thing you put in your mouth. It keeps your teeth safe.',
      example: 'The fighter put in his mouthguard before the round started.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-mouthguard.png?v=2',
    },
    {
      word: 'HAND WRAPS',
      partOfSpeech: 'noun',
      definition: 'Long pieces of cloth that you put around your hands before you put on gloves.',
      example: 'She always wraps her hands before she puts on her gloves.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-hand-wraps.png',
    },
    {
      word: 'BELT',
      partOfSpeech: 'noun',
      definition: 'The big prize for the best fighter.',
      example: 'He won the fight and held up the belt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-belt.png',
    },
    {
      word: 'STOOL',
      partOfSpeech: 'noun',
      definition: 'A small chair. The fighter sits on it between rounds.',
      example: 'The fighter sat on the stool while his coach spoke to him.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-stool.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STEP INTO THE CAGE',
      definition: 'Go into the cage to fight.',
      example: 'She stepped into the cage for the first time and felt nervous.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-step-into-the-cage.png',
      tag: 'phrase',
    },
    {
      phrase: 'PUT ON YOUR GLOVES',
      definition: 'Put your gloves on your hands. Get ready to train or fight.',
      example: 'Put on your gloves. We start training in five minutes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-put-on-your-gloves.png',
      tag: 'phrase',
    },
    {
      phrase: 'WRAP YOUR HANDS',
      definition: 'Put hand wraps on before training or fighting.',
      example: 'Always wrap your hands before you put on your gloves.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-wrap-your-hands.png',
      tag: 'phrase',
    },
    {
      phrase: 'HOLD THE BELT',
      definition: 'Be the champion. Have the belt.',
      example: 'She holds the belt. She is the best in the world.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-hold-the-belt.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I am new here. What do I need to start training?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'You need [[gloves:small soft gloves for fighting]], [[hand wraps:long cloth for your hands]], and a [[mouthguard:a plastic piece that protects the teeth]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What are hand wraps for?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'You [[wrap your hands:put cloth around your hands]] before you put on your gloves. They protect your wrists.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what about shorts? Can I wear any shorts?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'For training, yes. But for a real fight you wear special MMA [[shorts:light shorts for fighters]]. They help you move and kick.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Is that the fighting area over there? The one with the fence?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, that is the [[cage:the metal fence around the fight area]]. The floor inside is the [[canvas:the floor of the cage at a fight]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I want to [[step into the cage:go into the cage to fight]] one day.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Then let\'s start training on the [[mats:the soft floor in the gym]]. First, [[wrap your hands:put cloth around your hands before training]].',
    },
  ],

  matchingExercise: [
    { word: 'Cage', definition: 'The metal fence around the fight area' },
    { word: 'Canvas', definition: 'The floor inside the cage at a fight' },
    { word: 'Mat', definition: 'A soft floor in the gym for training' },
    { word: 'Gloves', definition: 'Small gloves for MMA' },
    { word: 'Mouthguard', definition: 'A plastic piece that protects the teeth' },
    { word: 'Hand wraps', definition: 'Cloth you put around your hands before gloves' },
    { word: 'Belt', definition: 'The prize given to a champion' },
  ],

  fillBlankExercise: [
    { before: 'The fighter walked into the', after: 'and the crowd cheered.', answer: 'cage' },
    { before: 'She put on her', after: 'to protect her hands during the fight.', answer: 'gloves' },
    { before: 'Always', after: 'your hands before you put on gloves.', answer: 'wrap' },
    { before: 'He sat on the', after: 'between rounds and his coach talked to him.', answer: 'stool' },
    { before: 'The champion raised the', after: 'above his head.', answer: 'belt' },
    { before: 'He fell down on the', after: 'and the referee stopped the fight.', answer: 'canvas' },
    { before: 'In the gym, we train on soft', after: '.', answer: 'mats' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the cage?',
      options: ['The padded floor', 'The metal fence around the fight area', 'The belt given to a champion', 'A small seat for the fighter'],
      correctIndex: 1,
    },
    {
      question: 'What do hand wraps do?',
      options: ['Protect the teeth', 'Cover the feet', 'Protect the hands and wrists', 'Help fighters move faster'],
      correctIndex: 2,
    },
    {
      question: 'Where is the canvas?',
      options: ['In the gym, for training', 'Inside the cage, at a fight', 'On the fighter\'s hands', 'In the locker room'],
      correctIndex: 1,
    },
    {
      question: 'Where do fighters train every day?',
      options: ['On the canvas at a big fight', 'On the mats in the gym', 'On the stool', 'In the crowd'],
      correctIndex: 1,
    },
    {
      question: 'What does a fighter sit on between rounds?',
      options: ['The canvas', 'The stool', 'The belt', 'The cage floor'],
      correctIndex: 1,
    },
    {
      question: 'What does "hold the belt" mean?',
      options: ['Carry the belt to the ring', 'Be the champion', 'Lose the fight', 'Wear a belt on your shorts'],
      correctIndex: 1,
    },
  ],
};
