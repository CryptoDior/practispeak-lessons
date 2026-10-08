import { Lesson } from '@/types/lesson';

export const mmaAtTheArena: Lesson = {
  slug: 'mma-at-the-arena',
  title: 'At the Arena',
  subtitle: 'Learn the words for a live MMA event',
  level: 'A1-A2',
  description: 'You can watch MMA live or on TV. Learn the words for an MMA event: the arena, the fans, the fights, and the TV show.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-hero.png',

  warmUp: {
    questions: [
      'Do you go to watch sports live?',
      'How does a fighter feel before a fight?',
      'Do you like watching fights live or on TV?',
    ],
  },

  vocabulary: [
    {
      word: 'ARENA',
      partOfSpeech: 'noun',
      definition: 'A very big building for sports and concerts.',
      example: 'The arena was full. 20,000 fans were there.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-arena.png',
    },
    {
      word: 'WALKOUT',
      partOfSpeech: 'noun',
      definition: 'When a fighter walks into the arena before the fight.',
      example: 'His walkout music was loud and the fans cheered.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-walkout.png',
    },
    {
      word: 'MAIN EVENT',
      partOfSpeech: 'noun',
      definition: 'The most important fight of the night. It is the last fight.',
      example: 'The main event is five rounds. It is a fight for the belt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-main-event.png',
    },
    {
      word: 'PRELIM',
      partOfSpeech: 'noun',
      definition: 'One of the first fights of the night. These fights are less important.',
      example: 'The prelims start at 6pm. The big fights start at 10pm.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-prelim.png',
    },
    {
      word: 'CAGE SIDE',
      partOfSpeech: 'noun',
      definition: 'The seats next to the cage. They are the best seats, but they cost a lot.',
      example: 'They had cage side seats. They could hear every punch.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-cage-side.png',
    },
    {
      word: 'CROWD',
      partOfSpeech: 'noun',
      definition: 'All the people watching at the arena.',
      example: 'The crowd cheered when the fighter knocked the other fighter down.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-crowd.png',
    },
    {
      word: 'TICKET',
      partOfSpeech: 'noun',
      definition: 'A paper or phone pass. You need it to go into the event.',
      example: 'I bought two tickets. We sit in the front row.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-ticket.png',
    },
    {
      word: 'BROADCAST',
      partOfSpeech: 'noun',
      definition: 'The fight on TV or online, for people at home.',
      example: 'The broadcast started at 9pm. Millions of people watched at home.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-broadcast.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WALK OUT TO',
      definition: 'Walk into the arena with your favourite song playing.',
      example: 'She always walks out to hip-hop. The fans love it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-walk-out-to.png',
      tag: 'phrase',
    },
    {
      phrase: 'SELL OUT',
      definition: 'When all the tickets are sold. There are no seats left.',
      example: 'The tickets sold out in twenty minutes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-sell-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO LIVE',
      definition: 'When the show starts on TV or online.',
      example: 'We go live in ten minutes. The first fight starts soon.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-go-live.png',
      tag: 'phrase',
    },
    {
      phrase: 'HEADLINE THE CARD',
      definition: 'Be in the main event, the top fight of the night.',
      example: 'She headlines the card for the third time. Many fans come to see her.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-headline-the-card.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I want to go to a live MMA event. What is it like?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'It is amazing. The [[arena:a very big building for sports]] is loud. When the fighters [[walk out to:walk in with a song]] their music, the [[crowd:all the fans watching in the arena]] goes crazy.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is the difference between a [[prelim:an early fight]] and a [[main event:the most important fight of the night]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The [[prelim:an early fight]]s happen first. There are six or eight. Then the big fights. The [[main event:the last and most important fight]] is the last fight of the night. It is usually a fight for the belt.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How do I get [[ticket:a pass to go in]]s?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Online, usually. Good events [[sell out:every ticket is sold]] very fast. [[Cage side:the seats next to the cage]] seats are the best, but they cost a lot.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And if I cannot go, can I watch it on TV?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, there is always a [[broadcast:the fight on TV or online]]. It [[goes live:starts on TV or online]] at the same time as the event. Sometimes the prelims are free online.',
    },
  ],

  matchingExercise: [
    { word: 'Arena', definition: 'A very big building for sports' },
    { word: 'Walkout', definition: 'When a fighter walks in with music' },
    { word: 'Main event', definition: 'The most important fight, at the end of the night' },
    { word: 'Prelim', definition: 'One of the first, less important fights' },
    { word: 'Broadcast', definition: 'The fight on TV or online' },
    { word: 'Cage side', definition: 'The seats next to the cage' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'sold out in twenty minutes. Everyone wanted to see this fight.', answer: 'arena' },
    { before: 'She', after: 'out to her favourite song and the crowd cheered.', answer: 'walked' },
    { before: 'The', after: 'start at 6pm. The main card is at 10pm.', answer: 'prelims' },
    { before: 'I could not get a', after: '. The event sold out in an hour.', answer: 'ticket' },
    { before: 'The', after: 'goes live in ten minutes. Sit down!', answer: 'broadcast' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "walkout" in MMA?',
      options: [
        'When a fighter leaves the cage after losing',
        'When a fighter walks into the arena before the fight',
        'When the referee walks out to stop the fight',
        'When a fighter is angry before the weigh-in',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the "main event"?',
      options: [
        'The first fight of the night',
        'The warm-up before the fight',
        'The most important fight, the last fight of the night',
        'Any fight that goes all five rounds',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "sell out" mean for an MMA event?',
      options: [
        'A fighter gives up before the fight',
        'The event does not happen',
        'All the tickets are sold. No seats are left',
        'A TV channel buys the fight',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "prelim" fight?',
      options: [
        'The championship fight at the end of the night',
        'A fight that does not happen',
        'One of the first, less important fights of the night',
        'A fight in a small building',
      ],
      correctIndex: 2,
    },
  ],
};
