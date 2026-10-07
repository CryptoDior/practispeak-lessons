import { Lesson } from '@/types/lesson';

export const businessAskingWhosCalling: Lesson = {
  slug: 'business-asking-whos-calling',
  title: "Asking Who's Calling",
  subtitle: 'Series 4 · Phone Calls · Lesson 2',
  level: 'A1-A2',
  description:
    "Learn how to ask a caller's name, company and reason for calling. Ask people to spell their name and tell your colleague who is on the phone.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-hero.png',

  objectives: [
    "Ask politely for the caller's name and company.",
    'Ask the caller to spell their name.',
    'Ask the reason for the call and tell a colleague.',
  ],

  vocabulary: [
    {
      word: 'CALLER',
      partOfSpeech: 'noun',
      definition: 'The person who is phoning you.',
      example: 'Tim spoke to the caller politely.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-caller.png',
    },
    {
      word: 'COMPANY',
      partOfSpeech: 'noun',
      definition: 'A business where people work.',
      example: 'She works for a big company.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-company.png',
    },
    {
      word: 'SPEAK',
      partOfSpeech: 'verb',
      definition: 'To talk to someone.',
      example: 'Kira is speaking to a client.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-speak.png',
    },
    {
      word: 'SPELL',
      partOfSpeech: 'verb',
      definition: 'To say the letters of a word, one by one.',
      example: 'Please spell the company name.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-spell.png',
    },
    {
      word: 'REASON',
      partOfSpeech: 'noun',
      definition: 'Why something happens or why someone does something.',
      example: 'What is the reason for your call?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-reason.png',
    },
    {
      word: 'MESSAGE',
      partOfSpeech: 'noun',
      definition: 'Information that you give to someone for another person.',
      example: 'Tim wrote down the message.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-message.png',
    },
    {
      word: 'NAME',
      partOfSpeech: 'noun',
      definition: 'The word people call you, like "Kira" or "Tim Lee".',
      example: 'Can I have your name, please?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-name.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "Who's calling, please?",
      tag: 'phrase',
      definition: "A polite way to ask for the caller's name.",
      example: '"I can help you. Who\'s calling, please?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-whos-calling-please.png',
    },
    {
      phrase: "May I ask who's speaking?",
      tag: 'phrase',
      definition: 'A more formal way to ask who is on the phone.',
      example: '"Good afternoon. May I ask who\'s speaking?"',
      inAction: '"May I…" is more formal than "Can I…". Use it with new callers and clients.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-may-i-ask-whos-speaking.png',
    },
    {
      phrase: 'Could you spell your name, please?',
      tag: 'phrase',
      definition: 'Use this when you want the caller to say their name letter by letter.',
      example: '"Could you spell your name, please?" → "Sure. M-A-R-I-A."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-could-you-spell-your-name-please.png',
    },
    {
      phrase: 'Where are you calling from?',
      tag: 'phrase',
      definition: "Use this to ask for the caller's company or city.",
      example: '"Where are you calling from?" → "From Vygon, in London."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-where-are-you-calling-from.png',
    },
    {
      phrase: 'What is the reason for your call?',
      tag: 'phrase',
      definition: 'Use this to find out why the person is phoning.',
      example: '"May I ask what the reason for your call is?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-what-is-the-reason-for-your-call.png',
    },
    {
      phrase: "One moment, please. I'll tell them you're calling.",
      tag: 'phrase',
      definition: 'Use this before you tell your colleague who is on the phone.',
      example: '"Thank you, Ms. Garcia. One moment, please."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-whos-calling-one-moment-please-ill-tell-them-youre-calling.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Good afternoon, Practispeak. This is Tim speaking.',
    },
    {
      speaker: 'Maria',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/professional-portrait-latina-woman-terracotta-top.png',
      speakerColor: 'orange',
      text: 'Hello. I\'d like to [[speak:talk]] to Kira, please.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Of course. May I ask who\'s speaking?',
    },
    {
      speaker: 'Maria',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/professional-portrait-latina-woman-terracotta-top.png',
      speakerColor: 'orange',
      text: 'My name is Maria Ortiz.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Thank you. Could you [[spell:say the letters one by one]] your last name, please?',
    },
    {
      speaker: 'Maria',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/professional-portrait-latina-woman-terracotta-top.png',
      speakerColor: 'orange',
      text: 'Sure. O-R-T-I-Z.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'And where are you calling from, Ms. Ortiz?',
    },
    {
      speaker: 'Maria',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/professional-portrait-latina-woman-terracotta-top.png',
      speakerColor: 'orange',
      text: 'From Sunlight Travel. It\'s about our new [[company:business]] lessons.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Thank you. One moment, please. I\'ll tell Kira you\'re calling and give her the [[reason:why you are calling]] for your call.',
    },
  ],

  matchingExercise: [
    { word: 'CALLER', definition: 'The person who is phoning you' },
    { word: 'COMPANY', definition: 'A business where people work' },
    { word: 'SPELL', definition: 'To say the letters of a word one by one' },
    { word: 'REASON', definition: 'Why someone does something' },
    { word: 'MESSAGE', definition: 'Information you give for another person' },
    { word: 'SPEAK', definition: 'To talk to someone' },
  ],

  fillBlankExercise: [
    { before: "Who's", after: ', please?', answer: 'calling' },
    { before: "May I ask who's", after: '?', answer: 'speaking' },
    { before: 'Could you', after: 'your name, please?', answer: 'spell' },
    { before: 'Where are you calling', after: '?', answer: 'from' },
    { before: 'What is the', after: 'for your call?', answer: 'reason' },
    { before: 'She works for a big', after: 'in London.', answer: 'company' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which question is the most formal?',
      options: ["Who's this?", "May I ask who's speaking?", 'Who are you?', 'Your name?'],
      correctIndex: 1,
    },
    {
      question: 'What does "spell" mean?',
      options: [
        'To say the letters of a word one by one',
        'To speak very fast',
        'To write an email',
        'To end a call',
      ],
      correctIndex: 0,
    },
    {
      question: "You want to know the caller's company. What do you ask?",
      options: [
        'How old are you?',
        'Where are you calling from?',
        'What time is it?',
        'Can you hold?',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, how do you spell Maria\'s last name?',
      options: ['O-R-T-E-S', 'O-R-T-I-Z', 'O-R-T-I-S', 'A-R-T-I-Z'],
      correctIndex: 1,
    },
    {
      question: 'Why is Maria calling?',
      options: [
        'About a new job',
        'About company lessons',
        'About a broken printer',
        'About a hotel room',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "reason" mean?',
      options: ['A phone number', 'Why someone does something', 'A company name', 'A time'],
      correctIndex: 1,
    },
  ],
};
