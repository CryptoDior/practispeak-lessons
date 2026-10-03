import { Lesson } from '@/types/lesson';

export const businessAskingRepeatSpell: Lesson = {
  slug: 'business-asking-repeat-spell',
  title: 'Asking to Repeat or Spell Words',
  subtitle: 'Series 4 · Phone Calls · Lesson 4',
  level: 'A1-A2',
  description:
    'Phone calls can be hard to hear. Learn how to ask people to repeat, speak slowly, spell a word, and confirm a number.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-hero.png',

  objectives: [
    'Ask a caller to repeat or speak more slowly.',
    'Ask a caller to spell a name.',
    'Repeat information to confirm it is correct.',
  ],

  vocabulary: [
    {
      word: 'REPEAT',
      partOfSpeech: 'verb',
      definition: 'To say something again.',
      example: 'Could you repeat that, please?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-repeat.png',
    },
    {
      word: 'SPELL',
      partOfSpeech: 'verb',
      definition: 'To say the letters of a word, one by one.',
      example: 'Can you spell your last name?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-spell.png',
    },
    {
      word: 'CONFIRM',
      partOfSpeech: 'verb',
      definition: 'To check that something is correct.',
      example: 'Can you confirm your number, please?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-confirm.png',
    },
    {
      word: 'UNDERSTAND',
      partOfSpeech: 'verb',
      definition: 'To know what someone means.',
      example: "Sorry, I don't understand.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-understand.png',
    },
    {
      word: 'CLEAR',
      partOfSpeech: 'adjective',
      definition: 'Easy to hear or understand.',
      example: 'The line is not very clear.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-clear.png',
    },
    {
      word: 'SLOWLY',
      partOfSpeech: 'adverb',
      definition: 'Not fast.',
      example: 'Please speak slowly.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-slowly.png',
    },
    {
      word: 'LETTER',
      partOfSpeech: 'noun',
      definition: 'One sign in the alphabet, like A, B or C.',
      example: 'Is that the letter B or the letter P?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-letter.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'Could you repeat that, please?',
      tag: 'phrase',
      definition: 'Use this when you did not hear something and want the person to say it again.',
      example: '"Sorry, could you repeat that, please?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-could-you-repeat.png',
    },
    {
      phrase: "I didn't catch that.",
      tag: 'phrase',
      definition: 'A natural way to say you did not hear or understand.',
      example: '"Sorry, I didn\'t catch that. What was your name?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-didnt-catch.png',
    },
    {
      phrase: 'Can you speak more slowly, please?',
      tag: 'phrase',
      definition: 'Use this when the person is speaking too fast.',
      example: '"Can you speak more slowly, please? My English is not perfect."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-speak-slowly.png',
    },
    {
      phrase: 'Could you spell your name for me?',
      tag: 'phrase',
      definition: 'Use this to ask for a name letter by letter, so you write it correctly.',
      example: '"Could you spell your name for me?" → "K-I-R-A."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-spell-your-name.png',
    },
    {
      phrase: "The line isn't very clear.",
      tag: 'phrase',
      definition: 'Use this when there is noise and you cannot hear well.',
      example: '"Sorry, the line isn\'t very clear. Can you call me back?"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-line-not-clear.png',
    },
    {
      phrase: 'Let me repeat that to confirm.',
      tag: 'phrase',
      definition: 'Use this when you say the information again to check it is correct.',
      example: '"Let me repeat that to confirm: 072 318 4401."',
      inAction: 'Always repeat numbers and names back to the caller. It stops mistakes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-asking-repeat-spell-repeat-to-confirm.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Good afternoon, Practispeak. Kira speaking.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Hi, this is Tim Okafor from Bright Foods. I want to book a lesson for next week.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Sorry, the line isn\'t very [[clear:easy to hear]]. Could you [[repeat:say again]] your name, please?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Tim Okafor.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Thank you. Could you [[spell:say the letters one by one]] your last name for me?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Sure. O-K-A-F-O-R. And my number is 072 318 4401.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Sorry, I didn\'t catch that. Can you speak more [[slowly:not fast]], please?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Of course. 0-7-2… 3-1-8… 4-4-0-1.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Let me repeat that to [[confirm:check it is correct]]: 072 318 4401. Thank you, that\'s clear now.',
    },
  ],

  matchingExercise: [
    { word: 'REPEAT', definition: 'To say something again' },
    { word: 'SPELL', definition: 'To say the letters of a word one by one' },
    { word: 'CONFIRM', definition: 'To check that something is correct' },
    { word: 'CLEAR', definition: 'Easy to hear or understand' },
    { word: 'SLOWLY', definition: 'Not fast' },
    { word: 'UNDERSTAND', definition: 'To know what someone means' },
  ],

  fillBlankExercise: [
    { before: 'Could you', after: 'that, please?', answer: 'repeat' },
    { before: "Sorry, I didn't", after: 'that.', answer: 'catch' },
    { before: 'Can you speak more', after: ', please?', answer: 'slowly' },
    { before: 'Could you', after: 'your last name for me?', answer: 'spell' },
    { before: "The line isn't very", after: '.', answer: 'clear' },
    { before: 'Let me repeat that to', after: '.', answer: 'confirm' },
  ],

  multipleChoiceExercise: [
    {
      question: 'You did not hear the caller. What do you say?',
      options: ['What?!', 'Could you repeat that, please?', 'Speak English!', 'Goodbye.'],
      correctIndex: 1,
    },
    {
      question: 'What does "I didn\'t catch that" mean?',
      options: [
        'I dropped the phone.',
        'I did not hear or understand.',
        'I am very tired.',
        'I don\'t like it.',
      ],
      correctIndex: 1,
    },
    {
      question: 'The caller speaks too fast. What do you say?',
      options: [
        'Can you speak more slowly, please?',
        'Can you spell it?',
        'Please hold.',
        'Call me tomorrow.',
      ],
      correctIndex: 0,
    },
    {
      question: 'Why do we repeat a phone number back to the caller?',
      options: [
        'To make the call longer',
        'To check it is correct',
        'Because we forgot it',
        'To practise numbers',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, what is Tim\'s last name?',
      options: ['Okafor', 'Okafur', 'Ocafor', 'Okapor'],
      correctIndex: 0,
    },
    {
      question: 'What does "clear" mean here: "The line isn\'t very clear"?',
      options: ['Clean', 'Easy to hear', 'Not busy', 'Short'],
      correctIndex: 1,
    },
  ],
};
