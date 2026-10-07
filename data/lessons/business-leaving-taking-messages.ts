import { Lesson } from '@/types/lesson';

export const businessLeavingTakingMessages: Lesson = {
  slug: 'business-leaving-taking-messages',
  title: 'Leaving and Taking Messages',
  subtitle: 'Series 4 · Phone Calls · Lesson 3',
  level: 'A1-A2',
  description:
    'Sometimes the person a caller wants is not there. Learn how to take a message, write down a name and number, and pass the message on.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-hero.png',

  objectives: [
    'Say politely that someone is not available.',
    "Take a message and write down the caller's details.",
    'Leave a message for someone and promise to pass it on.',
  ],

  vocabulary: [
    {
      word: 'MESSAGE',
      partOfSpeech: 'noun',
      definition: 'Information that you give to someone for another person.',
      example: 'Can I take a message?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-message.png',
    },
    {
      word: 'NOTE',
      partOfSpeech: 'noun',
      definition: 'Short information that you write down so you remember it.',
      example: 'I wrote a note for my manager.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-note.png',
    },
    {
      word: 'UNAVAILABLE',
      partOfSpeech: 'adjective',
      definition: 'Not free to talk right now.',
      example: 'Mr. Lee is unavailable at the moment.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-unavailable.png',
    },
    {
      word: 'RETURN',
      partOfSpeech: 'verb',
      definition: 'To call someone back later.',
      example: 'Tim will return your call this afternoon.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-return.png',
    },
    {
      word: 'NUMBER',
      partOfSpeech: 'noun',
      definition: 'The phone number people use to call you.',
      example: 'Can I have your number, please?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-number.png',
    },
    {
      word: 'DETAILS',
      partOfSpeech: 'noun',
      definition: 'Small pieces of information, like a name, number or time.',
      example: 'Please write down the details.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-details.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WRITE DOWN',
      definition: 'To put information on paper or in a note.',
      example: "Don't forget to write down the details.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-write-down.png',
    },
    {
      phrase: 'ASK FOR',
      definition: 'To say which person you want to speak to.',
      example: 'She asked for the marketing team.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-ask-for.png',
    },
    {
      phrase: 'PASS ON',
      definition: 'To give information or a message to another person.',
      example: "I'll pass on your message to Mr. Lee.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-pass-on.png',
    },
    {
      phrase: 'CALL BACK',
      definition: 'To phone someone again later.',
      example: 'Can she call me back after lunch?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-call-back.png',
    },
    {
      phrase: 'Can I take a message?',
      tag: 'phrase',
      definition: 'Use this when the person is not there and you offer to write down the message.',
      example: '"Sorry, Kira is in a meeting. Can I take a message?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-can-i-take-a-message.png',
    },
    {
      phrase: 'Would you like to leave a message?',
      tag: 'phrase',
      definition: 'A more polite way to offer to take a message.',
      example: '"He is not at his desk. Would you like to leave a message?"',
      inAction: 'You TAKE a message (you write it). The caller LEAVES a message (they give it).',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-would-you-like-to-leave-a-message.png',
    },
    {
      phrase: "I'll make sure they get the message.",
      tag: 'phrase',
      definition: 'Use this to tell the caller that the message will get to the right person.',
      example: '"Thank you, Mr. Brown. I\'ll make sure she gets the message."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-leaving-taking-messages-ill-make-sure-they-get-the-message.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Good morning. Can I speak to Mr. Lee, please?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'I\'m sorry, Mr. Lee is [[unavailable:not free to talk]] right now. He is in a meeting. Would you like to leave a [[message:information for another person]]?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Yes, please. This is Tim Park from Vygon. I\'m calling about our order.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'One moment, I\'ll [[write down:put information on paper]] your [[details:name, number and other information]]. Can you give me your number, please?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Sure. It\'s 071 455 2390.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Could you repeat that, please?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: '071 455 2390. Can he [[call back:phone again later]] before 4 p.m.?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Of course. I\'ll [[pass on:give to another person]] your message, and I\'ll make sure he gets it.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Thank you very much. Goodbye.',
    },
  ],

  matchingExercise: [
    { word: 'MESSAGE', definition: 'Information you give for another person' },
    { word: 'NOTE', definition: 'Short information you write down' },
    { word: 'UNAVAILABLE', definition: 'Not free to talk right now' },
    { word: 'RETURN', definition: 'To call someone back later' },
    { word: 'WRITE DOWN', definition: 'To put information on paper' },
    { word: 'PASS ON', definition: 'To give a message to another person' },
  ],

  fillBlankExercise: [
    { before: 'Sorry, she is not here. Can I take a', after: '?', answer: 'message' },
    { before: 'Would you like to', after: 'a message?', answer: 'leave' },
    { before: 'Please', after: 'down your name and number.', answer: 'write' },
    { before: "I'll", after: 'on your message to Mr. Lee.', answer: 'pass' },
    { before: 'Mr. Lee is', after: 'right now. He is in a meeting.', answer: 'unavailable' },
    { before: 'Tim will', after: 'your call this afternoon.', answer: 'return' },
  ],

  multipleChoiceExercise: [
    {
      question: 'The person is not at their desk. What do you say?',
      options: ['Call later. Bye.', 'Can I take a message?', 'I don\'t know.', 'Who cares?'],
      correctIndex: 1,
    },
    {
      question: 'What does "pass on" mean?',
      options: [
        'To give a message to another person',
        'To forget a message',
        'To end a call',
        'To walk past someone',
      ],
      correctIndex: 0,
    },
    {
      question: 'Who LEAVES a message?',
      options: ['The person who answers', 'The caller', 'The manager', 'Nobody'],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, why is Mr. Lee unavailable?',
      options: ['He is on holiday', 'He is in a meeting', 'He is at lunch', 'He is sick'],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, why is Tim calling?',
      options: ['About his order', 'About a job', 'About a meeting room', 'About lunch'],
      correctIndex: 0,
    },
    {
      question: 'What does "unavailable" mean?',
      options: ['Very busy and angry', 'Not free to talk right now', 'Happy to help', 'Late for work'],
      correctIndex: 1,
    },
  ],
};
