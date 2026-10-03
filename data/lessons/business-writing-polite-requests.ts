import { Lesson } from '@/types/lesson';

export const businessWritingPoliteRequests: Lesson = {
  slug: 'business-writing-polite-requests',
  title: 'Writing Short Polite Requests',
  subtitle: 'Series 3 · Emails & Messages · Lesson 2',
  level: 'A1-A2',
  description:
    'Learn how to ask for something in a short, polite email. Use "Could you please…" and "Would you mind…" and answer requests in a friendly way.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-hero.png',

  objectives: [
    'Ask for something politely in an email.',
    'Use "could", "would" and "please" in requests.',
    'Answer a request with a short, friendly reply.',
  ],

  vocabulary: [
    {
      word: 'REQUEST',
      partOfSpeech: 'noun',
      definition: 'When you ask someone to do something for you.',
      example: '"Can you send the report?" is a request.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-request.png',
    },
    {
      word: 'PLEASE',
      partOfSpeech: 'adverb',
      definition: 'A small word that makes your request kind.',
      example: 'Please send me the file.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-please.png',
    },
    {
      word: 'COULD',
      partOfSpeech: 'verb',
      definition: 'A soft and polite way to ask for something.',
      example: 'Could you help me?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-could.png',
    },
    {
      word: 'WOULD',
      partOfSpeech: 'verb',
      definition: 'Another very polite way to ask for something.',
      example: 'Would you send me the report?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-would.png',
    },
    {
      word: 'ATTACH',
      partOfSpeech: 'verb',
      definition: 'To add a file or photo to an email.',
      example: 'I attached the picture to the email.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-attach.png',
    },
    {
      word: 'SEND',
      partOfSpeech: 'verb',
      definition: 'To make an email or message go to another person.',
      example: 'I will send the report today.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-send.png',
    },
    {
      word: 'REPLY',
      partOfSpeech: 'noun / verb',
      definition: 'To answer an email or message. Also the answer itself.',
      example: 'I will reply tomorrow.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-reply.png',
    },
    {
      word: 'INFO',
      partOfSpeech: 'noun',
      definition: 'Short for "information". Facts or details.',
      example: 'Please send me your contact info.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-info.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'Could you please send me…?',
      tag: 'phrase',
      definition: 'A polite way to ask someone to send you something.',
      example: '"Could you please send me the report?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-could-you-send.png',
    },
    {
      phrase: 'Would you mind checking…?',
      tag: 'phrase',
      definition: 'A very polite way to ask someone to look at something for you.',
      example: '"Would you mind checking this for me?"',
      inAction: 'After "Would you mind", use the -ing form: "Would you mind checking…", not "Would you mind check…".',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-would-you-mind.png',
    },
    {
      phrase: 'Can you please tell me…?',
      tag: 'phrase',
      definition: 'Use this to ask for information.',
      example: '"Can you please tell me the meeting time?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-can-you-tell-me.png',
    },
    {
      phrase: 'Please let me know if…',
      tag: 'phrase',
      definition: 'Use this to ask someone to tell you something later.',
      example: '"Please let me know if you are available."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-let-me-know.png',
    },
    {
      phrase: 'Sure, no problem!',
      tag: 'phrase',
      definition: 'A short, friendly way to say yes to a request.',
      example: '"Sure, no problem! I\'ll send it now."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-sure-no-problem.png',
    },
    {
      phrase: "I'll check and get back to you.",
      tag: 'phrase',
      definition: 'Use this when you need time before you answer.',
      example: '"Good question. I\'ll check and get back to you."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-writing-polite-requests-get-back-to-you.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Kira, can you read my email? I want the sales report from Maria. I wrote: "Send me the report."',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Hmm, that sounds a bit rude. Make it a [[polite:kind and with good manners]] [[request:when you ask someone to do something]].',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'How?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Start with "[[Could:a soft, polite way to ask]] you please…". Write: "Could you please [[send:make an email go to someone]] me the report?"',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'That is much better. I also want her to check my numbers.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Then [[attach:add a file to an email]] the file and write: "[[Would:a very polite way to ask]] you mind checking this for me?"',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Great. And at the end?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Write "Please let me know if you have any questions. Thank you!" She will [[reply:answer your email]] quickly, I am sure.',
    },
  ],

  matchingExercise: [
    { word: 'REQUEST', definition: 'When you ask someone to do something' },
    { word: 'PLEASE', definition: 'A small word that makes a request kind' },
    { word: 'ATTACH', definition: 'To add a file or photo to an email' },
    { word: 'SEND', definition: 'To make an email go to another person' },
    { word: 'REPLY', definition: 'To answer an email or message' },
    { word: 'INFO', definition: 'Short for "information"' },
  ],

  fillBlankExercise: [
    { before: '', after: 'you please send me the file?', answer: 'Could' },
    { before: 'Would you mind', after: 'this for me?', answer: 'checking' },
    { before: 'I', after: 'the picture to the email.', answer: 'attached' },
    { before: 'Please let me', after: 'if you are available.', answer: 'know' },
    { before: 'I will', after: 'to your email tomorrow.', answer: 'reply' },
    { before: 'Sure, no', after: '! I\'ll do it today.', answer: 'problem' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which request is the most polite?',
      options: ['Send me the file.', 'Could you please send me the file?', 'File. Now.', 'You send file.'],
      correctIndex: 1,
    },
    {
      question: 'What does "attach" mean?',
      options: [
        'To delete an email',
        'To add a file or photo to an email',
        'To read an email',
        'To print an email',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is correct?',
      options: [
        'Would you mind check this?',
        'Would you mind to check this?',
        'Would you mind checking this?',
        'Would you mind checked this?',
      ],
      correctIndex: 2,
    },
    {
      question: '"Could you please send me the file?" What is the best reply?',
      options: ['Wait, I\'m busy.', 'Sure, I\'ll send it now.', 'No.', 'Later.'],
      correctIndex: 1,
    },
    {
      question: 'You need time before you can answer. What do you write?',
      options: [
        'I don\'t know.',
        'I\'ll check and get back to you.',
        'Ask someone else.',
        'Not now.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why is "please" important in emails?',
      options: [
        'It makes the email longer',
        'It makes your request kind and polite',
        'It is the same as "thank you"',
        'It is only for friends',
      ],
      correctIndex: 1,
    },
  ],
};
