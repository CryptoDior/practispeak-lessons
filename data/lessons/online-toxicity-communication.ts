import { Lesson } from '@/types/lesson';

export const onlineToxicityCommunication: Lesson = {
  slug: 'online-toxicity-communication',
  title: 'Online Toxicity & Communication',
  subtitle: 'How to talk about toxic behaviour and keep games positive',
  level: 'B1-B2',
  description:
    'Learn the words and phrases players use to talk about toxic behaviour, calm arguments and give advice.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/online-toxicity-communication-hero.png',

  vocabulary: [
    {
      word: 'TOXIC',
      partOfSpeech: 'adjective',
      definition: 'Rude and harmful to other people online.',
      example: 'That lobby was so toxic: insults every round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/toxic.png',
    },
    {
      word: 'FLAME',
      partOfSpeech: 'verb',
      definition: 'To insult another player angrily in chat.',
      example: 'Don\'t flame your teammate after one mistake.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/flame.png',
    },
    {
      word: 'TILT',
      partOfSpeech: 'noun / verb',
      definition: 'To get so angry or upset that you play badly.',
      example: 'After three losses, he was on full tilt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tilt.png',
    },
    {
      word: 'GRIEF',
      partOfSpeech: 'verb',
      definition: 'To ruin other players\' game on purpose.',
      example: 'Don\'t grief other players; it ruins the game.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/grief.png',
    },
    {
      word: 'MUTE',
      partOfSpeech: 'verb',
      definition: 'To stop hearing someone\'s voice or messages.',
      example: 'I mute anyone who starts shouting.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mute.png',
    },
    {
      word: 'REPORT',
      partOfSpeech: 'verb',
      definition: 'To tell the game\'s team about someone\'s bad behaviour.',
      example: 'Report the player and move on.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/online-toxicity-communication-report.png',
    },
    {
      word: 'SPORTSMANSHIP',
      partOfSpeech: 'noun',
      definition: 'Being fair and kind to others, whether you win or lose.',
      example: 'Saying \'gg\' at the end is good sportsmanship.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sportsmanship.png',
    },
    {
      word: 'DE-ESCALATE',
      partOfSpeech: 'verb',
      definition: 'To make an argument calmer.',
      example: 'The captain tried to de-escalate the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/de-escalate.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'IF I WERE YOU, I WOULD…',
      definition: 'A gentle way to give advice.',
      example: 'If I were you, I would mute him.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/if-i-were-you-i-would.png',
    },
    {
      phrase: 'IT WOULD HELP IF…',
      definition: 'A polite way to suggest a change.',
      example: 'It would help if we stayed calm.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/it-would-help-if.png',
    },
    {
      phrase: 'WHAT IF WE JUST…',
      definition: 'A way to suggest moving on from an argument.',
      example: 'What if we just focus on the next round?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/what-if-we-just.png',
    },
    {
      phrase: 'I UNDERSTAND WHERE YOU\'RE COMING FROM, BUT…',
      definition: 'A polite way to agree a little and then disagree.',
      example: 'I understand where you\'re coming from, but shouting won\'t help.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/i-understand-where-youre-coming-from.png',
    },
    {
      phrase: 'THE PROBLEM WITH THAT IS…',
      definition: 'A way to explain why an idea is not good.',
      example: 'The problem with that is everyone gets angry.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/the-problem-with-that-is.png',
    },
    {
      phrase: 'I\'D RATHER… THAN…',
      definition: 'A way to say what you prefer.',
      example: 'I\'d rather lose than play with cheaters.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/id-rather-than.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'This lobby is so [[toxic:rude and harmful to others online]]. Someone keeps shouting at me.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'If I were you, I would [[mute:stop hearing someone\'s voice or messages]] him.',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'He keeps trying to [[flame:insult another player angrily]] me after every mistake.',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'I understand where you\'re coming from, but arguing back won\'t help. Just [[report:tell the game\'s team about bad behaviour]] him.',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'You\'re right. I think I\'m on [[tilt:so upset that you play badly]] too.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'What if we just take a break and play again later?',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Good idea. And remember, saying \'gg\' is good [[sportsmanship:being fair and kind, win or lose]].',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'Thanks for helping me [[de-escalate:make an argument calmer]]. I feel better now.',
    },
  ],

  matchingExercise: [
    { word: 'TOXIC', definition: 'Rude and harmful online' },
    { word: 'MUTE', definition: 'Stop hearing someone\'s voice' },
    { word: 'REPORT', definition: 'Tell the game\'s team about bad behaviour' },
    { word: 'GRIEF', definition: 'Ruin other players\' game on purpose' },
    { word: 'TILT', definition: 'So upset that you play badly' },
    { word: 'SPORTSMANSHIP', definition: 'Being fair, win or lose' },
  ],

  fillBlankExercise: [
    { before: 'I', after: 'anyone who starts shouting.', answer: 'mute' },
    { before: 'Don\'t', after: 'your teammate after one mistake.', answer: 'flame' },
    { before: 'Please', after: 'the cheater so the team can check.', answer: 'report' },
    { before: 'The captain tried to', after: 'the argument.', answer: 'de-escalate' },
    { before: 'That chat was really', after: 'tonight.', answer: 'toxic' },
    { before: 'Saying \'gg\' shows good', after: 'at the end of a game.', answer: 'sportsmanship' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What problem does Jax have?',
      options: ['His game is slow', 'Someone keeps shouting at him', 'He lost his account', 'He can\'t find his team'],
      correctIndex: 1,
    },
    {
      question: 'What does Zara advise first?',
      options: ['Shout back', 'Leave the game forever', 'Mute him', 'Buy a new headset'],
      correctIndex: 2,
    },
    {
      question: 'What does Maya tell Jax to do?',
      options: ['Argue back', 'Report him', 'Flame him', 'Ignore the team'],
      correctIndex: 1,
    },
    {
      question: 'How does Jax describe himself?',
      options: ['Happy', 'On tilt', 'Bored', 'Tired'],
      correctIndex: 1,
    },
    {
      question: 'What does Maya say is good sportsmanship?',
      options: ['Saying \'gg\'', 'Muting everyone', 'Winning every game', 'Playing alone'],
      correctIndex: 0,
    },
  ],
};
