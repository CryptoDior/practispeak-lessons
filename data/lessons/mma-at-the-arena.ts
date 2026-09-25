import { Lesson } from '@/types/lesson';

export const mmaAtTheArena: Lesson = {
  slug: 'mma-at-the-arena',
  title: 'At the Arena',
  subtitle: 'Learn the words for the event venue and the fan experience',
  level: 'A1-A2',
  description: 'Whether you watch live or on TV, this lesson teaches the vocabulary of an MMA event — from the walkout to the main event, the crowd to the commentary.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-arena-hero.png',

  warmUp: {
    questions: [
      'Have you ever been to a live sporting event? What was it?',
      'What do you think a fighter feels when they walk out to the crowd?',
      'What makes watching a fight live different from watching it on TV?',
    ],
  },

  vocabulary: [
    {
      word: 'ARENA',
      partOfSpeech: 'noun',
      definition: 'A large indoor venue where sporting events take place.',
      example: 'The arena was full — 20,000 fans were there for the main event.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-arena.png',
    },
    {
      word: 'WALKOUT',
      partOfSpeech: 'noun',
      definition: 'The entrance of a fighter into the arena before a fight.',
      example: 'His walkout music was loud and the crowd went wild.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-walkout.png',
    },
    {
      word: 'MAIN EVENT',
      partOfSpeech: 'noun',
      definition: 'The most important fight of the night — the last fight on the card.',
      example: 'The main event is five rounds for the world championship.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-main-event.png',
    },
    {
      word: 'PRELIM',
      partOfSpeech: 'noun',
      definition: 'A preliminary fight — one of the earlier, non-main events of the night.',
      example: 'The prelims start at 6pm — the main card starts at 10pm.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-prelim.png',
    },
    {
      word: 'CAGE SIDE',
      partOfSpeech: 'noun',
      definition: 'The seats closest to the cage — the best and most expensive spots.',
      example: 'They had cage side seats — they could hear every punch.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cage-side.png',
    },
    {
      word: 'CROWD',
      partOfSpeech: 'noun',
      definition: 'All the fans watching the event at the arena.',
      example: 'The crowd cheered when the fighter knocked his opponent down.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-crowd.png',
    },
    {
      word: 'TICKET',
      partOfSpeech: 'noun',
      definition: 'A piece of paper or digital pass that lets you enter the event.',
      example: 'I bought two tickets for the main event — front row.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ticket.png',
    },
    {
      word: 'BROADCAST',
      partOfSpeech: 'noun',
      definition: 'The TV or online transmission of a fight for viewers at home.',
      example: 'The broadcast started at 9pm. Millions of people watched at home.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-broadcast.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WALK OUT TO',
      definition: 'Enter the arena while a specific song plays.',
      example: 'She walks out to hip-hop every time — the crowd loves it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-walk-out-to.png',
      tag: 'phrase',
    },
    {
      phrase: 'SELL OUT',
      definition: 'When every ticket for an event is sold — no seats left.',
      example: 'The arena sold out in twenty minutes after tickets went on sale.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sell-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO LIVE',
      definition: 'When a broadcast starts — the fight is now on air.',
      example: 'We go live in ten minutes — the first prelim is about to start.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-live.png',
      tag: 'phrase',
    },
    {
      phrase: 'HEADLINE THE CARD',
      definition: 'Be the main event — the top fight of the evening.',
      example: 'She headlines the card for the third time — the champion always draws the crowd.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-headline-the-card.png',
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
      text: 'It is amazing. The [[arena:a large indoor venue for events]] is loud. When the fighters [[walk out to:enter while a song plays]] their music, the [[crowd:all the fans watching in the arena]] goes crazy.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is the difference between a [[prelim:a preliminary, earlier fight]] and a [[main event:the most important fight of the night]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The [[prelim:an earlier fight on the card]]s happen first — maybe six or eight fights. Then the main card. The [[main event:the last and most important fight]] is the last fight of the night — usually a title fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How do I get [[ticket:a pass to enter the event]]s?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Online, usually. Good events [[sell out:every ticket is sold]] very fast. [[Cage side:the seats closest to the cage]] seats are the best but most expensive.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And if I cannot go, can I watch it on TV?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — there is always a [[broadcast:the TV or online transmission of the fight]]. It [[go live:when the broadcast starts]] around the same time as the event. Sometimes the prelims are free online.',
    },
  ],

  matchingExercise: [
    { word: 'Arena', definition: 'A large indoor venue where sporting events take place' },
    { word: 'Walkout', definition: 'The entrance of a fighter into the arena with music' },
    { word: 'Main event', definition: 'The most important fight — the last fight of the night' },
    { word: 'Prelim', definition: 'An earlier, non-main event fight on the card' },
    { word: 'Broadcast', definition: 'The TV or online transmission of the fight' },
    { word: 'Cage side', definition: 'The seats closest to the cage — the best seats' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'sold out in twenty minutes — everyone wanted to see this fight.', answer: 'arena' },
    { before: 'She', after: 'out to her favourite song and the crowd went wild.', answer: 'walked' },
    { before: 'The', after: 'start at 6pm. The main card is at 10pm.', answer: 'prelims' },
    { before: 'I could not get a', after: '— the event sold out in an hour.', answer: 'ticket' },
    { before: 'The', after: 'goes live in ten minutes — time to sit down.', answer: 'broadcast' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "walkout" in MMA?',
      options: [
        'When a fighter leaves the cage after losing',
        'The entrance of a fighter into the arena before the fight',
        'When the referee walks out to stop the fight',
        'A protest by a fighter before the weigh-in',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the "main event"?',
      options: [
        'The first fight of the night',
        'The warm-up before the fight',
        'The most important fight — the last fight on the card',
        'Any fight that goes all five rounds',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "sell out" mean for an MMA event?',
      options: [
        'A fighter gives up before the fight',
        'The promotion cancels the event',
        'Every ticket for the event is sold — no seats left',
        'The broadcast rights are sold to a TV channel',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "prelim" fight?',
      options: [
        'The championship fight at the end of the night',
        'A fight that is cancelled before it starts',
        'One of the earlier, non-main event fights on the card',
        'A fight in a smaller venue',
      ],
      correctIndex: 2,
    },
  ],
};
