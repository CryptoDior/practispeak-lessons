import { Lesson } from '@/types/lesson';

export const businessEndingCallPolitely: Lesson = {
  slug: 'business-ending-call-politely',
  title: 'Ending the Call Politely',
  subtitle: 'Series 4 · Phone Calls · Lesson 5',
  level: 'A1-A2',
  description:
    'Learn how to finish a phone call in a friendly and professional way. Thank the caller, promise to call back, and say goodbye.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-hero.png',

  objectives: [
    'Thank the caller at the end of a call.',
    'Say you will call back or speak later.',
    'Say goodbye in a friendly, professional way.',
  ],

  vocabulary: [
    {
      word: 'FINISH',
      partOfSpeech: 'verb',
      definition: 'To end something.',
      example: 'Let\'s finish the call. I have a meeting.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-finish.png',
    },
    {
      word: 'SOON',
      partOfSpeech: 'adverb',
      definition: 'After a short time.',
      example: "I'll talk to you again soon.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-soon.png',
    },
    {
      word: 'LATER',
      partOfSpeech: 'adverb',
      definition: 'At a time after now.',
      example: "I'll speak to you later.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-later.png',
    },
    {
      word: 'PLEASURE',
      partOfSpeech: 'noun',
      definition: 'A happy feeling when you do something nice for someone.',
      example: 'It was a pleasure talking to you.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-pleasure.png',
    },
    {
      word: 'GOODBYE',
      partOfSpeech: 'exclamation',
      definition: 'What you say when you leave or end a call.',
      example: 'Goodbye! Have a nice day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-goodbye.png',
    },
    {
      word: 'HELP',
      partOfSpeech: 'noun / verb',
      definition: 'To do something useful for someone. Also the useful thing you do.',
      example: 'Thank you for your help.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-help.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CALL BACK',
      definition: 'To phone someone again later.',
      example: "I'll call you back this afternoon.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-call-back.png',
    },
    {
      phrase: 'Thank you for calling.',
      tag: 'phrase',
      definition: 'Use this to end the call and thank the caller.',
      example: '"Thank you for calling, Mr. Brown."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-thank-you-for-calling.png',
    },
    {
      phrase: 'It was nice talking to you.',
      tag: 'phrase',
      definition: 'A friendly way to finish the conversation.',
      example: '"It was nice talking to you, Kira."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-nice-talking.png',
    },
    {
      phrase: "I'll speak to you later.",
      tag: 'phrase',
      definition: 'A friendly goodbye when you will talk again soon.',
      example: '"OK, I\'ll speak to you later. Bye!"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-speak-later.png',
    },
    {
      phrase: 'Please call me if you need anything.',
      tag: 'phrase',
      definition: 'Use this to show you are happy to help again.',
      example: '"Please call me if you need anything else."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-call-me.png',
    },
    {
      phrase: 'My pleasure.',
      tag: 'phrase',
      definition: 'A polite answer when someone says thank you.',
      example: '"Thanks for your help!" → "My pleasure."',
      inAction: '"My pleasure" is a little more formal than "No problem". It is great with clients.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-my-pleasure.png',
    },
    {
      phrase: 'Have a great day.',
      tag: 'phrase',
      definition: 'A warm, polite way to wish the caller well.',
      example: '"Thanks again. Have a great day!"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ending-call-politely-have-a-great-day.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'So, the new price list is ready. I\'ll email it to you today.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Perfect. I\'ll read it and [[call back:phone again later]] tomorrow with my questions.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Great. Please call me if you need anything before that.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Thank you, Tim. Thank you for your [[help:useful things you did]] today.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'My [[pleasure:happy to help]]. It was nice talking to you.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'You too. OK, I have to [[finish:end]] now. I have a meeting in five minutes.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'No problem. I\'ll speak to you [[soon:after a short time]]. Have a great day!',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'You too. [[Goodbye:what you say at the end]]!',
    },
  ],

  matchingExercise: [
    { word: 'FINISH', definition: 'To end something' },
    { word: 'SOON', definition: 'After a short time' },
    { word: 'PLEASURE', definition: 'A happy feeling when you help someone' },
    { word: 'GOODBYE', definition: 'What you say at the end of a call' },
    { word: 'CALL BACK', definition: 'To phone someone again later' },
    { word: 'LATER', definition: 'At a time after now' },
  ],

  fillBlankExercise: [
    { before: 'Thank you for', after: '.', answer: 'calling' },
    { before: 'It was nice', after: 'to you.', answer: 'talking' },
    { before: "I'll call you", after: 'this afternoon.', answer: 'back' },
    { before: '"Thanks for your help!" "My', after: '."', answer: 'pleasure' },
    { before: 'Please call me if you need', after: '.', answer: 'anything' },
    { before: "I'll speak to you", after: '. Bye!', answer: 'later' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Someone says "Thanks for your help!" What is a polite answer?',
      options: ['My pleasure.', 'Goodbye.', 'Call back.', 'Hold on.'],
      correctIndex: 0,
    },
    {
      question: 'What does "call back" mean?',
      options: [
        'To phone someone again later',
        'To shout loudly',
        'To end a call',
        'To answer the phone',
      ],
      correctIndex: 0,
    },
    {
      question: 'Which sentence is a friendly way to end a call?',
      options: [
        'Who is this?',
        'It was nice talking to you.',
        'Please hold.',
        'Could you spell that?',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, what will Tim send to Kira?',
      options: ['A report', 'The new price list', 'A meeting invite', 'A photo'],
      correctIndex: 1,
    },
    {
      question: 'Why does Kira need to finish the call?',
      options: [
        'She is hungry',
        'She has a meeting soon',
        'The line is not clear',
        'She is angry',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "soon" mean?',
      options: ['Never', 'After a short time', 'Yesterday', 'Very slowly'],
      correctIndex: 1,
    },
  ],
};
