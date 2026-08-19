import { Lesson } from '@/types/lesson';

export const businessAskingRepetitionClarification: Lesson = {
  slug: 'business-asking-repetition-clarification',
  title: 'Asking for Repetition & Clarification',
  subtitle: 'Series 2 · Meeting English · Lesson 3',
  level: 'A1-A2',
  description:
    'Learn how to ask someone to repeat or explain something again in a meeting. Build confidence by checking your understanding and responding clearly.',
  heroImage: '/images/business-asking-repetition-clarification-hero.png',

  objectives: [
    'Ask someone politely to repeat or explain something again.',
    'Use simple questions to check understanding.',
    'Respond clearly when others ask for repetition or clarification.',
  ],

  vocabulary: [
    {
      word: 'REPEAT',
      partOfSpeech: 'verb',
      definition: 'To say something again.',
      example: 'Can you repeat that, please?',
      imageSlug: '/images/business-asking-repetition-clarification-repeat.png',
    },
    {
      word: 'CLARIFY',
      partOfSpeech: 'verb',
      definition: 'To explain something more clearly.',
      example: 'Let me clarify what I mean.',
      imageSlug: '/images/business-asking-repetition-clarification-clarify.png',
    },
    {
      word: 'UNDERSTAND',
      partOfSpeech: 'verb',
      definition: 'To know what something means.',
      example: 'Kira understands the new rule now.',
      imageSlug: '/images/business-asking-repetition-clarification-understand.png',
    },
    {
      word: 'EXPLAIN',
      partOfSpeech: 'verb',
      definition: 'To make something easy to understand.',
      example: 'Can you explain it again?',
      imageSlug: '/images/business-asking-repetition-clarification-explain.png',
    },
    {
      word: 'MISS',
      partOfSpeech: 'verb',
      definition: 'To not hear or see something.',
      example: 'I missed what you said.',
      imageSlug: '/images/business-asking-repetition-clarification-miss.png',
    },
    {
      word: 'GO OVER',
      partOfSpeech: 'phrase',
      definition: 'To review or check something again.',
      example: "Let's go over that point one more time.",
      imageSlug: '/images/business-asking-repetition-clarification-go-over.png',
    },
    {
      word: 'SPEAK UP',
      partOfSpeech: 'phrase',
      definition: 'To talk louder so everyone can hear.',
      example: "Please speak up — I can't hear you.",
      imageSlug: '/images/business-asking-repetition-clarification-speak-up.png',
    },
    {
      word: 'CARRY ON',
      partOfSpeech: 'phrase',
      definition: 'To continue after a pause or interruption.',
      example: 'Thanks for repeating. Please carry on.',
      imageSlug: '/images/business-asking-repetition-clarification-carry-on.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "Sorry, I didn't catch that.",
      tag: 'phrase',
      definition: "Use this when you didn't hear something clearly and need it repeated.",
      example: '"Sorry, I didn\'t catch that. Could you say it again?"',
      imageSlug: '/images/business-asking-repetition-clarification-didnt-catch.png',
    },
    {
      phrase: 'Could you repeat that, please?',
      tag: 'phrase',
      definition: 'A polite way to ask someone to say something again.',
      example: '"Could you repeat that, please? I missed the last part."',
      imageSlug: '/images/business-asking-repetition-clarification-could-you-repeat.png',
    },
    {
      phrase: 'Could you explain that again?',
      tag: 'phrase',
      definition: 'Use this when you heard something but did not fully understand it.',
      example: '"Could you explain that again? I\'m not sure I understand."',
      imageSlug: '/images/business-asking-repetition-clarification-could-you-explain.png',
    },
    {
      phrase: 'What do you mean by [something]?',
      tag: 'phrase',
      definition: 'Use this to ask for the meaning or more detail about a specific word or idea.',
      example: '"What do you mean by \'restructure\'?" / "What do you mean by \'urgent\'?"',
      imageSlug: '/images/business-asking-repetition-clarification-what-do-you-mean.png',
    },
    {
      phrase: "Just to check — do you mean…?",
      tag: 'phrase',
      definition: 'Use this to confirm your understanding before you act on what someone said.',
      example: '"Just to check — do you mean we finish by Monday, not Friday?"',
      imageSlug: '/images/business-asking-repetition-clarification-just-to-check.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Our new deadline for the project is the fifteenth of next month.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Sorry, I didn't [[catch:to hear or understand something that was said]] that. Could you [[repeat:to say something again]] that, please?",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Of course. The deadline is the fifteenth of next month.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Thank you. Could you [[explain:to make something easy to understand]] what tasks we need to finish first?",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "Sure. First, we finish the report. Then we send it to the client. Let's [[go over:to review or check again]] the list together.",
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Just to check — do you mean we send the report before the fifteenth?",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Yes, exactly. Does everyone [[understand:to know what something means]] now?',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: 'Yes. Thank you for clarifying, Kira. Please [[carry on:to continue after a pause or interruption]].',
    },
  ],

  matchingExercise: [
    { word: 'REPEAT', definition: 'To say something again' },
    { word: 'CLARIFY', definition: 'To explain something more clearly' },
    { word: 'UNDERSTAND', definition: 'To know what something means' },
    { word: 'EXPLAIN', definition: 'To make something easy to understand' },
    { word: 'MISS', definition: 'To not hear or see something' },
    { word: 'GO OVER', definition: 'To review or check something again' },
    { word: 'SPEAK UP', definition: 'To talk louder so everyone can hear' },
    { word: 'CARRY ON', definition: 'To continue after a pause or interruption' },
  ],

  fillBlankExercise: [
    {
      before: "Sorry, I didn't",
      after: "that. Could you say it again?",
      answer: 'catch',
    },
    {
      before: 'Could you',
      after: 'that, please? I missed the last part.',
      answer: 'repeat',
    },
    {
      before: 'Could you',
      after: "that again? I'm not sure I understand.",
      answer: 'explain',
    },
    {
      before: "Please",
      after: "— I can't hear you from the back of the room.",
      answer: 'speak up',
    },
    {
      before: "Let's",
      after: 'that point one more time before we move on.',
      answer: 'go over',
    },
    {
      before: 'I',
      after: "what you said — could you repeat it?",
      answer: 'missed',
    },
    {
      before: "Thanks for repeating. Please",
      after: '.',
      answer: 'carry on',
    },
    {
      before: 'Just to',
      after: '— do you mean we finish before Friday?',
      answer: 'check',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which phrase do you use when you did not hear something clearly?',
      options: [
        '"Could you explain that again?"',
        '"Sorry, I didn\'t catch that."',
        '"Please carry on."',
        '"Just to check — do you mean…?"',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between "repeat" and "clarify"?',
      options: [
        'They mean the same thing.',
        '"Repeat" means to say again; "clarify" means to explain more clearly.',
        '"Clarify" means to say again; "repeat" means to explain more clearly.',
        '"Repeat" is more polite than "clarify".',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, what is the project deadline?',
      options: [
        'The last day of the month.',
        'Next Friday.',
        'The fifteenth of next month.',
        'The end of next week.',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "carry on" mean?',
      options: [
        'To stop and wait.',
        'To ask a question.',
        'To continue after a pause or interruption.',
        'To repeat something.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which phrase confirms your understanding before acting on it?',
      options: [
        '"Could you repeat that?"',
        '"Please speak up."',
        '"Just to check — do you mean…?"',
        '"What do you mean?"',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "miss" mean in a meeting context?',
      options: [
        'To be absent from a meeting.',
        'To not hear or see something that was said.',
        'To make a mistake in a report.',
        'To disagree with someone.',
      ],
      correctIndex: 1,
    },
  ],
};
