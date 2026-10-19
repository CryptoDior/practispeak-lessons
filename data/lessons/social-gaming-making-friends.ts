import { Lesson } from '@/types/lesson';

export const socialGamingMakingFriends: Lesson = {
  slug: 'social-gaming-making-friends',
  title: 'Social Gaming & Making Friends',
  subtitle: 'Make real friends while you play',
  level: 'B1-B2',
  description:
    'Learn the words and phrases players use to invite people, make friends and build a squad.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-making-friends-hero.png',

  vocabulary: [
    {
      word: 'HIT IT OFF',
      partOfSpeech: 'phrasal verb',
      definition: 'To like each other straight away.',
      example: 'We hit it off in our first game together.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-hit-it-off.png',
    },
    {
      word: 'REACH OUT',
      partOfSpeech: 'phrasal verb',
      definition: 'To contact someone first.',
      example: 'I decided to reach out after the match.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-reach-out.png',
    },
    {
      word: 'VIBE',
      partOfSpeech: 'noun',
      definition: 'The feeling between people or in a place.',
      example: 'The vibe in our group chat is really good.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-vibe.png',
    },
    {
      word: 'SQUAD',
      partOfSpeech: 'noun',
      definition: 'Your group of gaming friends.',
      example: 'My squad plays every Friday night.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-squad.png',
    },
    {
      word: 'LINK UP',
      partOfSpeech: 'phrasal verb',
      definition: 'To meet up to play together.',
      example: 'Let\'s link up after school.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-link-up.png',
    },
    {
      word: 'HANG OUT',
      partOfSpeech: 'phrasal verb',
      definition: 'To spend relaxed time together.',
      example: 'We hang out in voice chat even when we don\'t play.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-hang-out.png',
    },
    {
      word: 'CLICK',
      partOfSpeech: 'verb',
      definition: 'To get on well with someone very quickly.',
      example: 'We click every time we play together.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-click.png',
    },
    {
      word: 'WINGMAN',
      partOfSpeech: 'noun',
      definition: 'A friend who always supports you.',
      example: 'He is my wingman in every ranked game.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-wingman.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WANT TO HOP IN?',
      definition: 'A casual way to invite someone to play.',
      example: 'We need one more player. Want to hop in?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-phrase-want-to-hop-in.png',
    },
    {
      phrase: 'WE SHOULD RUN SOME GAMES SOMETIME.',
      definition: 'A relaxed way to suggest playing again.',
      example: 'That was fun. We should run some games sometime.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-phrase-we-should-run.png',
    },
    {
      phrase: 'HIT ME UP IF YOU WANT TO PLAY.',
      definition: 'A way to tell someone to message you to play.',
      example: 'Hit me up if you want to play tonight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-phrase-hit-me-up.png',
    },
    {
      phrase: 'YOU\'D FIT RIGHT IN WITH OUR SQUAD.',
      definition: 'A way to say someone would match your group well.',
      example: 'You\'re so funny. You\'d fit right in with our squad.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-phrase-fit-right-in.png',
    },
    {
      phrase: 'I\'LL ADD YOU — WE SHOULD LINK UP.',
      definition: 'A way to add someone as a friend and plan to play.',
      example: 'Good game! I\'ll add you — we should link up.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-phrase-link-up.png',
    },
    {
      phrase: 'I FEEL LIKE WE JUST CLICK.',
      definition: 'A way to say you get on really well.',
      example: 'I feel like we just click when we play together.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-gaming-phrase-just-click.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Good game! You were really fun to play with.',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'Thanks! I feel like we just [[click:get on well very quickly]].',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Same! I\'ll add you — we should [[link up:meet up to play together]].',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'Sure. Hit me up if you want to play this weekend.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'Hey, I\'m Maya\'s friend. The [[vibe:the feeling between people]] in this game is great.',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Zara is in my [[squad:your group of gaming friends]]. You\'d fit right in with us.',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'I\'d love that. I\'m glad I decided to [[reach out:contact someone first]] after the match.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'Want to hop in? We\'re starting a new game now!',
    },
  ],

  matchingExercise: [
    { word: 'SQUAD', definition: 'Your group of gaming friends' },
    { word: 'HIT IT OFF', definition: 'Like each other straight away' },
    { word: 'LINK UP', definition: 'Meet up to play together' },
    { word: 'HANG OUT', definition: 'Spend relaxed time together' },
    { word: 'WINGMAN', definition: 'A friend who always supports you' },
    { word: 'REACH OUT', definition: 'Contact someone first' },
  ],

  fillBlankExercise: [
    { before: 'We', after: 'straight away and became friends.', answer: 'hit it off' },
    { before: 'Let\'s', after: 'after school and play.', answer: 'link up' },
    { before: 'My', after: 'plays every Friday night.', answer: 'squad' },
    { before: 'We', after: 'in voice chat even when we don\'t play.', answer: 'hang out' },
    { before: 'He is my', after: 'in every ranked game.', answer: 'wingman' },
    { before: 'The', after: 'in this group is really friendly.', answer: 'vibe' },
  ],

  multipleChoiceExercise: [
    {
      question: 'How does Jax describe him and Maya?',
      options: ['They argue a lot', 'They just click', 'They are bored', 'They are rivals'],
      correctIndex: 1,
    },
    {
      question: 'What does Maya want to do after the game?',
      options: ['Block Jax', 'Add Jax as a friend', 'Leave the game', 'Report Jax'],
      correctIndex: 1,
    },
    {
      question: 'When does Jax want to play?',
      options: ['Tonight', 'This weekend', 'Next month', 'Never'],
      correctIndex: 1,
    },
    {
      question: 'Who is Zara?',
      options: ['Jax\'s brother', 'Maya\'s friend in her squad', 'A streamer', 'The game\'s coach'],
      correctIndex: 1,
    },
    {
      question: 'What does Zara invite Jax to do?',
      options: ['Watch a stream', 'Hop in a new game', 'Buy a game', 'Leave the squad'],
      correctIndex: 1,
    },
  ],
};
