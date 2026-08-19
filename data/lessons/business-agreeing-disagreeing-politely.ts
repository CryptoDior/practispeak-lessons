import { Lesson } from '@/types/lesson';

export const businessAgreeingDisagreeingPolitely: Lesson = {
  slug: 'business-agreeing-disagreeing-politely',
  title: 'Agreeing & Disagreeing Politely',
  subtitle: 'Series 2 · Meeting English · Lesson 2',
  level: 'A1-A2',
  description:
    'Learn how to agree and disagree in a meeting without causing conflict. Master the phrases and phrasal verbs for sharing and respecting different opinions at work.',
  heroImage: '/images/business-agreeing-disagreeing-politely-hero.png',

  objectives: [
    'Use simple phrases to agree or disagree politely in a meeting.',
    'Express your opinions respectfully.',
    'Use common meeting expressions naturally.',
  ],

  vocabulary: [
    {
      word: 'AGREE',
      partOfSpeech: 'verb',
      definition: 'To have the same idea or opinion as someone.',
      example: 'I agree with Kira.',
      imageSlug: '/images/business-agreeing-disagreeing-politely-agree.png',
    },
    {
      word: 'DISAGREE',
      partOfSpeech: 'verb',
      definition: 'To have a different opinion from someone.',
      example: 'I disagree with that point.',
      imageSlug: '/images/business-agreeing-disagreeing-politely-disagree.png',
    },
    {
      word: 'OPINION',
      partOfSpeech: 'noun',
      definition: 'What you think or believe about something.',
      example: "What's your opinion, Tim?",
      imageSlug: '/images/business-agreeing-disagreeing-politely-opinion.png',
    },
    {
      word: 'POINT',
      partOfSpeech: 'noun',
      definition: 'An idea or reason in a discussion.',
      example: "That's a good point, Tim.",
      imageSlug: '/images/business-agreeing-disagreeing-politely-point.png',
    },
    {
      word: 'POLITE',
      partOfSpeech: 'adjective',
      definition: 'Speaking or acting in a nice and respectful way.',
      example: 'Tim gave a polite answer.',
      imageSlug: '/images/business-agreeing-disagreeing-politely-polite.png',
    },
    {
      word: 'BRING UP',
      partOfSpeech: 'phrase',
      definition: 'To start talking about a new topic or idea.',
      example: 'Kira brought up an interesting idea.',
      imageSlug: '/images/business-agreeing-disagreeing-politely-bring-up.png',
    },
    {
      word: 'BACK UP',
      partOfSpeech: 'phrase',
      definition: 'To support or agree with what someone said.',
      example: 'I want to back up what Kira said.',
      imageSlug: '/images/business-agreeing-disagreeing-politely-back-up.png',
    },
    {
      word: 'GO ALONG WITH',
      partOfSpeech: 'phrase',
      definition: "To agree with someone's idea or plan.",
      example: "I go along with Tim's plan.",
      imageSlug: '/images/business-agreeing-disagreeing-politely-go-along-with.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'I agree with you.',
      tag: 'phrase',
      definition: 'Use this to show you have the same opinion as someone.',
      example: '"I agree with you, Tim. That\'s a great idea."',
      imageSlug: '/images/business-agreeing-disagreeing-politely-i-agree.png',
    },
    {
      phrase: "That's a good point.",
      tag: 'phrase',
      definition: "Use this to respond positively to someone else's idea.",
      example: '"That\'s a good point, Kira."',
      imageSlug: '/images/business-agreeing-disagreeing-politely-good-point.png',
    },
    {
      phrase: 'I see your point, but…',
      tag: 'phrase',
      definition: 'Use this to disagree politely — you show you understand them before saying your different view.',
      example: '"I see your point, but I think we need more time."',
      inAction: 'Always say something positive first — "I see your point" — before you disagree. This keeps the conversation respectful.',
      imageSlug: '/images/business-agreeing-disagreeing-politely-i-see-your-point.png',
    },
    {
      phrase: "I'm not sure I agree.",
      tag: 'phrase',
      definition: 'A soft, polite way to express that you have a different opinion.',
      example: '"I\'m not sure I agree with that plan."',
      imageSlug: '/images/business-agreeing-disagreeing-politely-not-sure.png',
    },
    {
      phrase: "Let's agree to disagree.",
      tag: 'phrase',
      definition: 'Use this to end a disagreement politely when no one changes their mind.',
      example: '"Let\'s agree to disagree and move on."',
      imageSlug: '/images/business-agreeing-disagreeing-politely-agree-to-disagree.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'I think we should finish the project by next Friday.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "That's a good [[point:an idea or reason in a discussion]], but I'm not sure we have enough time.",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'I see your point, but the client is waiting.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: 'I [[agree:to have the same idea or opinion as someone]] with you that it\'s important to finish soon.',
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Maybe we can ask for one more day.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Good idea. That's a fair solution.",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Sounds great. Thank you for being [[polite:speaking or acting in a nice and respectful way]], Tim.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Always, Kira. Meetings are easier when we respect each other's [[opinions:what you think or believe about something]].",
    },
  ],

  matchingExercise: [
    { word: 'AGREE', definition: 'To have the same idea or opinion as someone' },
    { word: 'DISAGREE', definition: 'To have a different opinion from someone' },
    { word: 'OPINION', definition: 'What you think or believe about something' },
    { word: 'POINT', definition: 'An idea or reason in a discussion' },
    { word: 'POLITE', definition: 'Speaking or acting in a nice and respectful way' },
    { word: 'BRING UP', definition: 'To start talking about a new topic or idea' },
    { word: 'BACK UP', definition: 'To support or agree with what someone said' },
    { word: 'GO ALONG WITH', definition: "To agree with someone's idea or plan" },
  ],

  fillBlankExercise: [
    {
      before: 'I',
      after: 'with you that the deadline is too early.',
      answer: 'agree',
    },
    {
      before: 'I',
      after: "with that plan — I think we need a different approach.",
      answer: 'disagree',
    },
    {
      before: "That's a good",
      after: ", Tim. I hadn't thought of that.",
      answer: 'point',
    },
    {
      before: 'I see your point,',
      after: 'I think we need more time.',
      answer: 'but',
    },
    {
      before: "I'm not sure I",
      after: 'with that idea.',
      answer: 'agree',
    },
    {
      before: "Let's agree to",
      after: 'and move on to the next point.',
      answer: 'disagree',
    },
    {
      before: 'Kira',
      after: 'an interesting idea about the new schedule.',
      answer: 'brought up',
    },
    {
      before: 'I want to',
      after: 'what Tim said — I think he is right.',
      answer: 'back up',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which phrase do you use to disagree politely while showing you understood the other person?',
      options: [
        '"I agree with you."',
        '"Let\'s agree to disagree."',
        '"I see your point, but…"',
        '"That\'s a good point."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "bring up" mean in a meeting?',
      options: [
        'To end the meeting.',
        'To support what someone said.',
        'To start talking about a new topic or idea.',
        'To write notes.',
      ],
      correctIndex: 2,
    },
    {
      question: 'In the dialogue, what solution do Kira and Tim agree on?',
      options: [
        'Cancel the project.',
        'Ask for one more day.',
        'Finish by next Friday.',
        'Work on the weekend.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which phrase is a soft way to express you have a different opinion?',
      options: [
        '"I agree with you."',
        '"That\'s a good point."',
        '"I\'m not sure I agree."',
        '"Go along with the plan."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "back up" mean in a meeting context?',
      options: [
        'To disagree with someone.',
        'To support or agree with what someone said.',
        'To cancel a meeting.',
        'To ask a question.',
      ],
      correctIndex: 1,
    },
    {
      question: 'When do you say "Let\'s agree to disagree"?',
      options: [
        'When you and someone else have the same opinion.',
        'When you want to start a new topic.',
        'When a disagreement ends politely with no one changing their mind.',
        'When you want to end the meeting.',
      ],
      correctIndex: 2,
    },
  ],
};
