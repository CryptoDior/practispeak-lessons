import { Lesson } from '@/types/lesson';

export const businessAskingOfferingHelp: Lesson = {
  slug: 'business-asking-offering-help',
  title: 'Asking for Help / Offering Help Politely',
  subtitle: 'Series 1 · Workplace Basics · Lesson 5',
  level: 'A1-A2',
  description:
    'Learn how to ask for help and offer help to colleagues in a polite, professional way. Master the key words and phrases for being helpful at work.',
  heroImage: '/images/business-asking-offering-help-hero.png',

  objectives: [
    'Ask for help in a polite way.',
    'Offer help to colleagues.',
    'Use polite expressions at work.',
  ],

  vocabulary: [
    {
      word: 'HELP',
      partOfSpeech: 'noun / verb',
      definition: 'To make something easier for someone.',
      example: 'Can you help me with this report?',
      imageSlug: '/images/business-asking-offering-help-help.png',
    },
    {
      word: 'PROBLEM',
      partOfSpeech: 'noun',
      definition: 'Something that is not easy or needs a solution.',
      example: 'I have a problem with the printer.',
      imageSlug: '/images/business-asking-offering-help-problem.png',
    },
    {
      word: 'NEED',
      partOfSpeech: 'verb',
      definition: 'To want something because it is important.',
      example: 'She needs a pen for the meeting.',
      imageSlug: '/images/business-asking-offering-help-need.png',
    },
    {
      word: 'CAN',
      partOfSpeech: 'verb',
      definition: 'Used to ask or offer to do something.',
      example: 'She can show you the way.',
      imageSlug: '/images/business-asking-offering-help-can.png',
    },
    {
      word: 'COULD',
      partOfSpeech: 'verb',
      definition: 'A polite way to ask for something.',
      example: 'Could I ask you a question?',
      imageSlug: '/images/business-asking-offering-help-could.png',
    },
    {
      word: 'SURE',
      partOfSpeech: 'adverb',
      definition: 'A word we use to say "yes" when we agree to help.',
      example: 'Sure, I will send the email.',
      imageSlug: '/images/business-asking-offering-help-sure.png',
    },
    {
      word: 'OF COURSE',
      partOfSpeech: 'phrase',
      definition: 'A polite way to say "yes".',
      example: 'Of course, I can help you.',
      imageSlug: '/images/business-asking-offering-help-of-course.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'Can you help me, please?',
      tag: 'phrase',
      definition: 'Use this to ask a colleague for help.',
      example: '"Can you help me with this email, please?" / "Can you help me with the printer, please?"',
      imageSlug: '/images/business-asking-offering-help-can-you-help-me.png',
    },
    {
      phrase: 'Could you show me [something]?',
      tag: 'phrase',
      definition: 'A polite way to ask someone to demonstrate or explain something.',
      example: '"Could you show me the meeting room?" / "Could you show me how to fix it?"',
      inAction: '"Could" is more polite than "Can" — use it when asking someone senior or someone you do not know well.',
      imageSlug: '/images/business-asking-offering-help-could-you-show-me.png',
    },
    {
      phrase: 'I need help with [something].',
      tag: 'phrase',
      definition: 'Use this to explain what you need help with.',
      example: '"I need help with the printer." / "I need help with this report."',
      imageSlug: '/images/business-asking-offering-help-i-need-help-with.png',
    },
    {
      phrase: 'Sure, I can help you.',
      tag: 'phrase',
      definition: 'Use this to agree and offer your help to someone.',
      example: '"Sure, I can help you with the report." / "Sure, no problem — what do you need?"',
      imageSlug: '/images/business-asking-offering-help-sure-i-can-help.png',
    },
    {
      phrase: 'Of course.',
      tag: 'phrase',
      definition: 'A polite and friendly way to say "yes" when someone asks for your help.',
      example: '"Of course, I will explain it." / "Of course — let me check."',
      imageSlug: '/images/business-asking-offering-help-of-course-phrase.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Hi Tom, [[can:used to ask or offer to do something]] you [[help:to make something easier for someone]] me with the printer, please?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'Sure, no [[problem:something that is not easy or needs a solution]]. What\'s the problem?',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'It doesn\'t print my document. [[Could:a polite way to ask for something]] you show me how to fix it?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: '[[Of course:a polite way to say "yes"]]. Let me check... Oh, the paper is finished.',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Oh, I see. Thanks, Tom. I [[need:to want something because it is important]] help sometimes with these machines.',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: "That's okay. I can help you anytime.",
    },
  ],

  matchingExercise: [
    { word: 'HELP', definition: 'To make something easier for someone' },
    { word: 'PROBLEM', definition: 'Something that is not easy or needs a solution' },
    { word: 'NEED', definition: 'To want something because it is important' },
    { word: 'CAN', definition: 'Used to ask or offer to do something' },
    { word: 'COULD', definition: 'A polite way to ask for something' },
    { word: 'SURE', definition: 'A word we use to say "yes" when we agree to help' },
    { word: 'OF COURSE', definition: 'A polite way to say "yes"' },
  ],

  fillBlankExercise: [
    {
      before: 'I',
      after: 'help with my computer.',
      answer: 'need',
    },
    {
      before: '',
      after: 'you open the door, please?',
      answer: 'Could',
    },
    {
      before: 'He has a',
      after: 'with his email.',
      answer: 'problem',
    },
    {
      before: '"Can you show me?" "',
      after: '."',
      answer: 'Sure',
    },
    {
      before: '"Could I ask a question?" "',
      after: '."',
      answer: 'Of course',
    },
    {
      before: 'She always',
      after: 'her colleagues.',
      answer: 'helps',
    },
    {
      before: '',
      after: 'you explain this report?',
      answer: 'Can',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which word is a polite way to ask for something?',
      options: [
        'Can',
        'Could',
        'Need',
        'Sure',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which phrase do you use when someone asks for your help and you agree?',
      options: [
        '"I need help with this."',
        '"Could you show me?"',
        '"Of course."',
        '"What is the problem?"',
      ],
      correctIndex: 2,
    },
    {
      question: 'In the dialogue, what is the problem with the printer?',
      options: [
        'The printer is broken.',
        'The paper is finished.',
        'The document is too big.',
        'The printer is off.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "need" mean?',
      options: [
        'To offer something to someone.',
        'To want something because it is important.',
        'To say "yes" politely.',
        'To ask a question.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence asks for help politely?',
      options: [
        '"Help me now."',
        '"I want help."',
        '"Could you show me how to do this?"',
        '"You must help me."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is the difference between "can" and "could" when asking for help?',
      options: [
        'They mean exactly the same thing.',
        '"Could" is more polite than "can".',
        '"Can" is more polite than "could".',
        '"Could" is only used in writing.',
      ],
      correctIndex: 1,
    },
  ],
};
