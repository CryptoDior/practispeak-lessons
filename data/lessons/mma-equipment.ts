import { Lesson } from '@/types/lesson';

export const mmaEquipment: Lesson = {
  slug: 'mma-equipment',
  title: 'MMA Equipment',
  subtitle: 'Learn the names of the gear fighters use and the space they fight in',
  level: 'A1-A2',
  description: 'Learn the words for the cage, the mat, and all the equipment a fighter wears and uses. Whether you watch MMA or train yourself, this is the vocabulary you need first.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-equipment-hero.png',

  warmUp: {
    questions: [
      'Can you name one piece of equipment a fighter wears?',
      'What is the fighting area in MMA called?',
      'What is different about MMA gloves compared to boxing gloves?',
    ],
  },

  vocabulary: [
    {
      word: 'CAGE',
      partOfSpeech: 'noun',
      definition: 'The enclosed metal fence where MMA fights take place.',
      example: 'The two fighters walked into the cage.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cage.png',
    },
    {
      word: 'MAT',
      partOfSpeech: 'noun',
      definition: 'The padded floor inside the cage where fighters stand and grapple.',
      example: 'He slipped on the mat and fell to the ground.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-mat.png',
    },
    {
      word: 'GLOVES',
      partOfSpeech: 'noun',
      definition: 'Small padded hand protection worn by MMA fighters. They are open-fingered.',
      example: 'She put on her gloves before the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-gloves.png',
    },
    {
      word: 'SHORTS',
      partOfSpeech: 'noun',
      definition: 'Special lightweight shorts worn by fighters during a fight.',
      example: 'His shorts have his country flag on them.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-shorts.png',
    },
    {
      word: 'MOUTHGUARD',
      partOfSpeech: 'noun',
      definition: 'A plastic piece worn inside the mouth to protect the teeth and jaw.',
      example: 'The fighter put in his mouthguard before the round started.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-mouthguard.png',
    },
    {
      word: 'HAND WRAPS',
      partOfSpeech: 'noun',
      definition: 'Long cloth strips wound around the hands and wrists before putting on gloves.',
      example: 'She always wraps her hands before she puts on her gloves.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-hand-wraps.png',
    },
    {
      word: 'BELT',
      partOfSpeech: 'noun',
      definition: 'The prize given to the champion of a weight class.',
      example: 'He held up the belt after winning the championship.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-belt.png',
    },
    {
      word: 'STOOL',
      partOfSpeech: 'noun',
      definition: 'A small seat brought into the cage for the fighter to sit on between rounds.',
      example: 'The fighter sat on the stool while his coach spoke to him.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-stool.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STEP INTO THE CAGE',
      definition: 'Enter the fighting area to compete.',
      example: 'She stepped into the cage for the first time and felt nervous.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-step-into-the-cage.png',
      tag: 'phrase',
    },
    {
      phrase: 'PUT ON YOUR GLOVES',
      definition: 'Wear your gloves — get ready to train or fight.',
      example: 'Put on your gloves. We start sparring in five minutes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-put-on-your-gloves.png',
      tag: 'phrase',
    },
    {
      phrase: 'WRAP YOUR HANDS',
      definition: 'Put hand wraps on before training or fighting.',
      example: 'Always wrap your hands before you put on your gloves.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-wrap-your-hands.png',
      tag: 'phrase',
    },
    {
      phrase: 'HOLD THE BELT',
      definition: 'Be the champion of a weight class.',
      example: 'She holds the belt at featherweight. She is the best in the world.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-hold-the-belt.png',
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
      text: 'You need [[gloves:small padded hand protection]], [[hand wraps:long cloth wound around the hands]], and a [[mouthguard:a plastic piece that protects the teeth]].',
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
      text: 'For training, yes. But for a real fight you wear special MMA [[shorts:lightweight pants for fighters]]. They help you move and kick.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Is that the fighting area over there? The one with the fence?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — that is the [[cage:the enclosed metal fence where fights happen]]. The floor inside is the [[mat:the padded floor of the cage]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I want to [[step into the cage:enter the cage to compete]] one day.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Then let\'s start training. First — [[wrap your hands:put cloth around your hands before training]].',
    },
  ],

  matchingExercise: [
    { word: 'Cage', definition: 'The enclosed metal fence where fights happen' },
    { word: 'Mat', definition: 'The padded floor inside the cage' },
    { word: 'Gloves', definition: 'Small open-fingered hand protection' },
    { word: 'Mouthguard', definition: 'A plastic piece that protects the teeth' },
    { word: 'Hand wraps', definition: 'Cloth wound around the hands before gloves' },
    { word: 'Belt', definition: 'The prize given to a champion' },
  ],

  fillBlankExercise: [
    { before: 'The fighter walked into the', after: 'and the crowd cheered.', answer: 'cage' },
    { before: 'She put on her', after: 'to protect her hands during the fight.', answer: 'gloves' },
    { before: 'Always', after: 'your hands before you put on gloves.', answer: 'wrap' },
    { before: 'He sat on the', after: 'between rounds while his coach gave advice.', answer: 'stool' },
    { before: 'The champion raised the', after: 'above his head.', answer: 'belt' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the cage?',
      options: ['The padded floor', 'The enclosed metal fence where fights happen', 'The belt given to a champion', 'A small seat for the fighter'],
      correctIndex: 1,
    },
    {
      question: 'What do hand wraps do?',
      options: ['Protect the teeth', 'Cover the feet', 'Protect the hands and wrists', 'Help fighters move faster'],
      correctIndex: 2,
    },
    {
      question: 'What does a fighter sit on between rounds?',
      options: ['The mat', 'The stool', 'The belt', 'The cage floor'],
      correctIndex: 1,
    },
    {
      question: 'What does "hold the belt" mean?',
      options: ['Carry the belt to the ring', 'Be the champion', 'Lose the fight', 'Wear a belt on your shorts'],
      correctIndex: 1,
    },
  ],
};
