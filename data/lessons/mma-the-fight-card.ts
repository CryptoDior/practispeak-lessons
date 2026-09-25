import { Lesson } from '@/types/lesson';

export const mmaTheFightCard: Lesson = {
  slug: 'mma-the-fight-card',
  title: 'The Fight Card',
  subtitle: 'Learn to read and talk about an MMA event fight card',
  level: 'A1-A2',
  description: 'A fight card lists all the fights at an MMA event. This lesson teaches you the vocabulary you need to read a card, talk about the fights, and discuss match-ups with other fans.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-the-fight-card-hero.png',

  warmUp: {
    questions: [
      'Have you ever looked at a fight card online? What did it look like?',
      'If you could choose any two fighters to fight, who would you pick?',
      'What information do you think you need to know before watching a fight?',
    ],
  },

  vocabulary: [
    {
      word: 'FIGHT CARD',
      partOfSpeech: 'noun',
      definition: 'The full list of all the fights at one MMA event.',
      example: 'I looked at the fight card — there are ten fights tonight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fight-card.png',
    },
    {
      word: 'MATCH-UP',
      partOfSpeech: 'noun',
      definition: 'A specific fight between two named opponents.',
      example: 'This match-up looks even — both fighters have similar styles.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-match-up.png',
    },
    {
      word: 'CO-MAIN EVENT',
      partOfSpeech: 'noun',
      definition: 'The second most important fight of the night — just before the main event.',
      example: 'The co-main event is a lightweight title fight — it should be great.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-co-main-event.png',
    },
    {
      word: 'BOUT',
      partOfSpeech: 'noun',
      definition: 'Another word for a fight or match.',
      example: 'This bout has been rescheduled twice — finally it happens tonight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-bout.png',
    },
    {
      word: 'RECORD',
      partOfSpeech: 'noun',
      definition: 'A fighter\'s win-loss history — shown as numbers like "15-3".',
      example: 'Her record is 15 wins and 2 losses — very strong.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-record.png',
    },
    {
      word: 'DEBUT',
      partOfSpeech: 'noun',
      definition: 'A fighter\'s first appearance in a new organization or as a professional.',
      example: 'This is his debut — his first professional fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-debut.png',
    },
    {
      word: 'HEADLINER',
      partOfSpeech: 'noun',
      definition: 'The fighter or fight at the top of the card — the main attraction.',
      example: 'She is the headliner for the third time — she is the biggest name in the sport.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-headliner.png',
    },
    {
      word: 'REMATCH',
      partOfSpeech: 'noun',
      definition: 'A second fight between the same two fighters.',
      example: 'They want a rematch — the first fight ended controversially.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rematch.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TOP THE CARD',
      definition: 'Be the main event — the most important fight on the card.',
      example: 'This championship fight tops the card tonight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-top-the-card.png',
      tag: 'phrase',
    },
    {
      phrase: 'BOOK A FIGHT',
      definition: 'Officially schedule and confirm a fight between two opponents.',
      example: 'The promotion booked the fight six weeks before the event.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-book-a-fight.png',
      tag: 'phrase',
    },
    {
      phrase: 'PULL OUT',
      definition: 'Withdraw from a fight — cancel before it happens.',
      example: 'He pulled out of the fight with an injury. A replacement was found.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pull-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'STEP IN ON SHORT NOTICE',
      definition: 'Accept a fight with very little time to prepare.',
      example: 'She stepped in on short notice when the original fighter pulled out.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-step-in-on-short-notice.png',
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
      text: 'Just another word for fight. "Bout" sounds more formal. "This [[bout:fight]] is five rounds for the title."',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I see this fighter has a [[record:win-loss history]] of 12-1. Is that good?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — 12 wins and 1 loss. Very good. His opponent has 8-0 — undefeated. This is a great [[match-up:a specific fight between two named opponents]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And I see "[[rematch:a second fight between the same two fighters]]" next to one fight. Why?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'They fought before and the result was close. So they [[book a fight:officially schedule the fight]] again. Sometimes one fighter [[pull out:withdraw from the fight]] and a new fighter [[step in on short notice:accepts the fight with little time to prepare]].',
    },
  ],

  matchingExercise: [
    { word: 'Fight card', definition: 'The full list of all fights at one MMA event' },
    { word: 'Match-up', definition: 'A specific fight between two named opponents' },
    { word: 'Bout', definition: 'Another word for a fight or match' },
    { word: 'Record', definition: 'A fighter\'s win-loss history — e.g. 15-3' },
    { word: 'Rematch', definition: 'A second fight between the same two fighters' },
    { word: 'Debut', definition: 'A fighter\'s first professional or organisational fight' },
  ],

  fillBlankExercise: [
    { before: 'I looked at the', after: '— there are eight fights tonight.', answer: 'fight card' },
    { before: 'Her', after: 'is 14 wins and 1 loss — she is very experienced.', answer: 'record' },
    { before: 'He pulled', after: 'of the fight because of a knee injury.', answer: 'out' },
    { before: 'They want a', after: '— the first fight was so close and exciting.', answer: 'rematch' },
    { before: 'This is his', after: '— his very first professional fight.', answer: 'debut' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "fight card"?',
      options: [
        'A fighter\'s official licence',
        'The full list of all the fights at one MMA event',
        'A card that a judge holds up to score a round',
        'A photo card of a famous fighter',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "pull out" mean in MMA?',
      options: [
        'Win a fight by submission',
        'Step into the cage for a fight',
        'Withdraw from a fight before it happens',
        'Pull the opponent down to the mat',
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
        'Enter the cage from a specific corner',
        'Accept a fight with very little time to prepare',
        'Arrive late to the weigh-in',
        'Step forward during the face-off',
      ],
      correctIndex: 1,
    },
  ],
};
