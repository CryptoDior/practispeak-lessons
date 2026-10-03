import { Lesson } from '@/types/lesson';

export const businessTalkingSchedulesTime: Lesson = {
  slug: 'business-talking-schedules-time',
  title: 'Talking About Schedules and Time',
  subtitle: 'Series 5 · Everyday Work English · Lesson 1',
  level: 'A1-A2',
  description:
    'Learn how to talk about your work day: when you start, when you finish, when you have a break, and when you are free.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-hero.png',

  objectives: [
    'Ask and answer questions about work times.',
    'Say when you are free or busy.',
    'Use words like early, late and on time.',
  ],

  vocabulary: [
    {
      word: 'SCHEDULE',
      partOfSpeech: 'noun',
      definition: 'A plan that shows what you do and when you do it.',
      example: 'My schedule starts at 9 a.m.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-schedule.png',
    },
    {
      word: 'MEETING',
      partOfSpeech: 'noun',
      definition: 'A planned time when people talk about work.',
      example: 'My manager is in a meeting now.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-meeting.png',
    },
    {
      word: 'EARLY',
      partOfSpeech: 'adjective',
      definition: 'Before the usual or planned time.',
      example: 'I get up early every morning.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-early.png',
    },
    {
      word: 'LATE',
      partOfSpeech: 'adjective',
      definition: 'After the usual or planned time.',
      example: 'We started late because of traffic.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-late.png',
    },
    {
      word: 'BREAK',
      partOfSpeech: 'noun',
      definition: 'A short time to rest from work.',
      example: "Let's have a coffee break.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-break.png',
    },
    {
      word: 'FINISH',
      partOfSpeech: 'verb',
      definition: 'To end something.',
      example: 'I finish work at 5 p.m.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-finish.png',
    },
    {
      word: 'FREE',
      partOfSpeech: 'adjective',
      definition: 'Not busy. You have time.',
      example: "I'm free after 3 p.m.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-free.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WAKE UP',
      definition: 'To stop sleeping.',
      example: "I can't wake up without coffee.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-wake-up.png',
    },
    {
      phrase: 'WRITE DOWN',
      definition: 'To write something on paper or on your phone so you remember it.',
      example: "I'll write down the meeting time.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-write-down.png',
    },
    {
      phrase: 'LOOK AT',
      definition: 'To turn your eyes to something.',
      example: 'She looked at her watch.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-look-at.png',
    },
    {
      phrase: 'ON TIME',
      tag: 'idiom',
      definition: 'At the planned time. Not late.',
      example: 'The meeting started on time.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-on-time.png',
    },
    {
      phrase: 'IN A RUSH',
      tag: 'idiom',
      definition: 'Doing something fast because you have little time.',
      example: 'I had breakfast in a rush.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-in-a-rush.png',
    },
    {
      phrase: 'What time do you start work?',
      tag: 'phrase',
      definition: 'Use this to ask about someone\'s work day.',
      example: '"What time do you start work?" → "I start at 9 and finish at 5."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-what-time.png',
    },
    {
      phrase: "I'm free after…",
      tag: 'phrase',
      definition: 'Use this to say when you have time.',
      example: '"I\'m busy this morning, but I\'m free after 3 p.m."',
      inAction: 'Use "at" for an exact time (at 3 p.m.) and "after" for any time later (after 3 p.m.).',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-talking-schedules-time-im-free-after.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Good morning, Tim! You are here [[early:before the usual time]] today.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Yes! I [[wake up:stop sleeping]] at 6 now. I like to start at 8. What time do you start work?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'I start at 9 and [[finish:end]] at 5. But today I have a [[meeting:a planned time to talk about work]] at 10.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Can we talk about the new project today?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Let me [[look at:turn my eyes to]] my [[schedule:plan of what I do and when]]. Hmm, I\'m busy until lunch. I\'m [[free:not busy]] after 3 p.m.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: '3:30 is good for me. And let\'s have lunch at 12.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Great. I\'ll [[write down:write so I remember]] 3:30. Oh no, it\'s 9:55! I\'m [[late:after the planned time]] for my meeting!',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'No, you have five minutes. Go! You will be [[on time:not late]].',
    },
  ],

  matchingExercise: [
    { word: 'SCHEDULE', definition: 'A plan of what you do and when' },
    { word: 'EARLY', definition: 'Before the usual time' },
    { word: 'LATE', definition: 'After the usual time' },
    { word: 'BREAK', definition: 'A short time to rest from work' },
    { word: 'FREE', definition: 'Not busy' },
    { word: 'ON TIME', definition: 'At the planned time, not late' },
  ],

  fillBlankExercise: [
    { before: 'What time do you', after: 'work?', answer: 'start' },
    { before: 'I start at 9 and', after: 'at 5.', answer: 'finish' },
    { before: "Let's have a coffee", after: '.', answer: 'break' },
    { before: "I'm", after: 'after 3 p.m. Let\'s meet then.', answer: 'free' },
    { before: 'The meeting started on', after: '.', answer: 'time' },
    { before: 'I can\'t', after: 'up without coffee.', answer: 'wake' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "early" mean?',
      options: ['After the planned time', 'Before the usual time', 'Very slowly', 'At night'],
      correctIndex: 1,
    },
    {
      question: 'Which answer is correct? "What time do you start work?"',
      options: ['I start at 9.', 'I am work.', 'Yes, I do.', 'On Monday.'],
      correctIndex: 0,
    },
    {
      question: 'What does "in a rush" mean?',
      options: [
        'Doing something very fast because you have little time',
        'Sleeping late',
        'Having a long break',
        'Being on holiday',
      ],
      correctIndex: 0,
    },
    {
      question: 'In the dialogue, when is Kira free?',
      options: ['Before 9 a.m.', 'At 10 a.m.', 'After 3 p.m.', 'At lunch'],
      correctIndex: 2,
    },
    {
      question: 'What time is Kira\'s meeting?',
      options: ['9 a.m.', '10 a.m.', '12 p.m.', '3:30 p.m.'],
      correctIndex: 1,
    },
    {
      question: 'What does "schedule" mean?',
      options: [
        'A plan of what you do and when',
        'A short rest',
        'A type of meeting room',
        'A coffee machine',
      ],
      correctIndex: 0,
    },
  ],
};
