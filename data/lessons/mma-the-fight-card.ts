import { Lesson } from '@/types/lesson';

export const mmaTheFightCard: Lesson = {
  slug: 'mma-the-fight-card',
  title: 'The Fight Card',
  subtitle: 'Learn to read and talk about a fight card',
  level: 'A1-A2',
  description: 'A fight card is the list of all the fights at an MMA event. Learn the words to read a card and talk about the fights with other fans.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-hero.png',

  warmUp: {
    questions: [
      'Do you look at fight cards online?',
      'Which two fighters do you want to see in a fight?',
      'What do you want to know before a fight?',
    ],
  },

  vocabulary: [
    {
      word: 'FIGHT CARD',
      partOfSpeech: 'noun',
      definition: 'The full list of all the fights at one MMA event.',
      example: 'I looked at the fight card. There are ten fights tonight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-fight-card.png',
    },
    {
      word: 'MATCH-UP',
      partOfSpeech: 'noun',
      definition: 'A fight between two fighters.',
      example: 'This is a good match-up. The two fighters are very similar.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-match-up.png',
    },
    {
      word: 'CO-MAIN EVENT',
      partOfSpeech: 'noun',
      definition: 'The second most important fight of the night. It is before the main event.',
      example: 'The co-main event is a fight for the lightweight belt. It will be great.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-co-main-event.png',
    },
    {
      word: 'BOUT',
      partOfSpeech: 'noun',
      definition: 'Another word for a fight or match.',
      example: 'This bout was moved two times. Now it is finally tonight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-bout.png',
    },
    {
      word: 'RECORD',
      partOfSpeech: 'noun',
      definition: 'How many fights a fighter won and lost, for example "15-3".',
      example: 'Her record is 15 wins and 2 losses. That is very good.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-record.png',
    },
    {
      word: 'DEBUT',
      partOfSpeech: 'noun',
      definition: 'A fighter\'s first fight, as a professional or in a new place.',
      example: 'This is his debut. It is his first professional fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-debut.png',
    },
    {
      word: 'HEADLINER',
      partOfSpeech: 'noun',
      definition: 'The top fighter or fight on the card. Most fans come to see it.',
      example: 'She is the headliner for the third time. She is very famous.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-headliner.png',
    },
    {
      word: 'REMATCH',
      partOfSpeech: 'noun',
      definition: 'A second fight between the same two fighters.',
      example: 'They want a rematch. The first fight was very close.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-rematch.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TOP THE CARD',
      definition: 'Be the main event, the most important fight.',
      example: 'This fight for the belt tops the card tonight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-top-the-card.png',
      tag: 'phrase',
    },
    {
      phrase: 'BOOK A FIGHT',
      definition: 'Plan a fight and choose the date.',
      example: 'They booked the fight six weeks before the event.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-book-a-fight.png',
      tag: 'phrase',
    },
    {
      phrase: 'PULL OUT',
      definition: 'Say no to a fight before it happens. You do not fight.',
      example: 'He pulled out of the fight because he was hurt. A new fighter came in.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-pull-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'STEP IN ON SHORT NOTICE',
      definition: 'Say yes to a fight with very little time to get ready.',
      example: 'The first fighter pulled out, so she stepped in on short notice.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-step-in-on-short-notice.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I am looking at the [[fight card:the full list of all fights at the event]] for Saturday. Can you help me understand it?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Of course. The fight at the top is the [[main event:the most important fight of the night]]. Below that is the [[co-main event:the second most important fight]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what is a [[bout:another word for a fight]]? I see that word a lot.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'It is another word for fight. For example: "This [[bout:fight]] is five rounds."',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I see this fighter has a [[record:wins and losses]] of 12-1. Is that good?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes. 12 wins and 1 loss. Very good. The other fighter is 8-0. He never lost. This is a great [[match-up:a fight between two fighters]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And I see "[[rematch:a second fight between the same two fighters]]" next to one fight. Why?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'They fought before and the result was close. So they [[book a fight:plan the fight]] again. Sometimes one fighter [[pulls out:says no to the fight]] and a new fighter [[steps in on short notice:says yes with little time to get ready]].',
    },
  ],

  matchingExercise: [
    { word: 'Fight card', definition: 'The full list of all fights at one MMA event' },
    { word: 'Match-up', definition: 'A fight between two fighters' },
    { word: 'Bout', definition: 'Another word for a fight or match' },
    { word: 'Record', definition: 'How many fights a fighter won and lost' },
    { word: 'Rematch', definition: 'A second fight between the same two fighters' },
    { word: 'Debut', definition: 'A fighter\'s first fight' },
  ],

  fillBlankExercise: [
    { before: 'I looked at the', after: '. There are eight fights tonight.', answer: 'fight card' },
    { before: 'Her', after: 'is 14 wins and 1 loss. She is very good.', answer: 'record' },
    { before: 'He pulled', after: 'of the fight because his knee was hurt.', answer: 'out' },
    { before: 'They want a', after: '. The first fight was very close and exciting.', answer: 'rematch' },
    { before: 'This is his', after: '. It is his first professional fight.', answer: 'debut' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "fight card"?',
      options: [
        'A fighter\'s ID card',
        'The full list of all the fights at one MMA event',
        'A card with a judge\'s score',
        'A photo card of a famous fighter',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "pull out" mean in MMA?',
      options: [
        'Win a fight by submission',
        'Step into the cage for a fight',
        'Stop and not fight, before the fight happens',
        'Pull the other fighter down to the mat',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "rematch"?',
      options: [
        'A fight that ends with no winner',
        'A second fight between the same two fighters',
        'A fight where both fighters are from the same gym',
        'The main event of a card',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "step in on short notice" mean?',
      options: [
        'Go into the cage from one corner',
        'Say yes to a fight with very little time to get ready',
        'Arrive late to the weigh-in',
        'Step forward during the face-off',
      ],
      correctIndex: 1,
    },
  ],
};
