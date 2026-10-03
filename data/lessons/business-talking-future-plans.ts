import { Lesson } from '@/types/lesson';

export const businessTalkingFuturePlans: Lesson = {
  slug: 'business-talking-future-plans',
  title: 'Talking About Future Plans',
  subtitle: 'Series 5 · Everyday Work English · Lesson 5',
  level: 'A1-A2',
  description:
    'Learn how to talk about tomorrow and the weekend with "will". Talk about meetings, trips and plans with your colleagues.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-hero.png',

  objectives: [
    'Talk about plans for tomorrow or the weekend.',
    'Use "will" and time words like "tomorrow" and "next week".',
    'Make simple plans with a colleague.',
  ],

  vocabulary: [
    {
      word: 'TOMORROW',
      partOfSpeech: 'adverb',
      definition: 'The day after today.',
      example: 'I will go to work tomorrow.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-tomorrow.png',
    },
    {
      word: 'PLAN',
      partOfSpeech: 'noun / verb',
      definition: 'Something you decide to do in the future.',
      example: "What's your plan for tomorrow?",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-plan.png',
    },
    {
      word: 'MEETING',
      partOfSpeech: 'noun',
      definition: 'A planned time when people talk about work.',
      example: 'I have a meeting at 10 tomorrow.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-meeting.png',
    },
    {
      word: 'TRIP',
      partOfSpeech: 'noun',
      definition: 'A short journey for work or for fun.',
      example: "We're going on a business trip.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-trip.png',
    },
    {
      word: 'FLIGHT',
      partOfSpeech: 'noun',
      definition: 'A journey by plane.',
      example: 'My flight leaves at 9 a.m.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-flight.png',
    },
    {
      word: 'NEXT WEEK',
      partOfSpeech: 'adverb',
      definition: 'The week after this week.',
      example: "We'll travel to Durban next week.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-next-week.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SET OFF',
      definition: 'To start a journey.',
      example: "We'll set off early tomorrow.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-set-off.png',
    },
    {
      phrase: 'CATCH UP (WITH)',
      definition: 'To meet and talk with someone after some time.',
      example: "I'll catch up with my friend tomorrow.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-catch-up.png',
    },
    {
      phrase: 'LOOK FORWARD TO',
      definition: 'To be happy and excited about something in the future.',
      example: "I'm looking forward to the weekend.",
      inAction: 'After "look forward to", use a noun or the -ing form: "I\'m looking forward to seeing you."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-look-forward-to.png',
    },
    {
      phrase: 'CALL IT A DAY',
      tag: 'idiom',
      definition: 'To stop working for today.',
      example: "It's late. Let's call it a day.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-call-it-a-day.png',
    },
    {
      phrase: 'IN NO TIME',
      tag: 'idiom',
      definition: 'Very soon.',
      example: 'The weekend will be here in no time.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-in-no-time.png',
    },
    {
      phrase: 'What will you do tomorrow?',
      tag: 'phrase',
      definition: 'Use this to ask about someone\'s plans.',
      example: '"What will you do tomorrow?" → "I\'ll visit a client."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-what-will-you-do.png',
    },
    {
      phrase: "I'll send you an email tomorrow.",
      tag: 'phrase',
      definition: 'Use this to promise to do something.',
      example: '"Thanks for the meeting. I\'ll send you an email tomorrow."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-future-plans-ill-send.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Hey Tim, are you ready for your business [[trip:a short journey for work]]?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Almost. My [[flight:journey by plane]] is early [[tomorrow:the day after today]] morning, so I\'ll [[set off:start my journey]] from home at 6 a.m.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'That\'s early! Where are you going again?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Durban. I\'ll have [[meeting:a planned time to talk about work]]s with our team there on Friday.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Nice. I\'ll answer your calls while you\'re away.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Thanks, Kira. I\'m [[looking forward to:happy and excited about]] seeing the team again. What are your [[plan:something you decide to do]]s for the weekend?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'On Saturday I\'ll go hiking with my cousin. On Sunday I\'ll [[catch up with:meet and talk with]] some friends.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Sounds fun! OK, it\'s 5 o\'clock. Let\'s [[call it a day:stop working for today]].',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Good idea. Have a safe flight! I\'ll see you [[next week:the week after this week]].',
    },
  ],

  matchingExercise: [
    { word: 'TOMORROW', definition: 'The day after today' },
    { word: 'TRIP', definition: 'A short journey for work or fun' },
    { word: 'FLIGHT', definition: 'A journey by plane' },
    { word: 'SET OFF', definition: 'To start a journey' },
    { word: 'LOOK FORWARD TO', definition: 'To be excited about something in the future' },
    { word: 'CALL IT A DAY', definition: 'To stop working for today' },
  ],

  fillBlankExercise: [
    { before: "We'll set", after: 'early to avoid traffic.', answer: 'off' },
    { before: "Let's catch", after: 'next week for lunch.', answer: 'up' },
    { before: "I'm looking", after: 'to my trip.', answer: 'forward' },
    { before: "It's late. Let's call it a", after: '.', answer: 'day' },
    { before: 'My', after: 'leaves at 9 a.m.', answer: 'flight' },
    { before: 'What will you do', after: '?', answer: 'tomorrow' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence talks about the future?',
      options: [
        'I went to work yesterday.',
        'I will go to work tomorrow.',
        'I go to work every day.',
        'I am at work now.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "set off" mean?',
      options: ['To start a journey', 'To turn off a machine', 'To arrive late', 'To sit down'],
      correctIndex: 0,
    },
    {
      question: 'What does "in no time" mean?',
      options: ['Never', 'Very soon', 'Too late', 'For a long time'],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, where is Tim going?',
      options: ['Cape Town', 'Durban', 'London', 'Johannesburg'],
      correctIndex: 1,
    },
    {
      question: 'What time will Tim set off from home?',
      options: ['5 a.m.', '6 a.m.', '9 a.m.', '10 a.m.'],
      correctIndex: 1,
    },
    {
      question: 'What will Kira do on Saturday?',
      options: [
        'Go hiking with her cousin',
        'Catch up with friends',
        'Go on a business trip',
        'Stay in and relax',
      ],
      correctIndex: 0,
    },
  ],
};
