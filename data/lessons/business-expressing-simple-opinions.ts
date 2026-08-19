import { Lesson } from '@/types/lesson';

export const businessExpressingSimpleOpinions: Lesson = {
  slug: 'business-expressing-simple-opinions',
  title: 'Expressing Simple Opinions',
  subtitle: 'Series 2 · Meeting English · Lesson 4',
  level: 'A1-A2',
  description:
    'Learn how to share your personal opinions in meetings. Use polite, natural phrases to express your views and respond to the ideas of others.',
  heroImage: '/images/business-expressing-simple-opinions-hero.png',

  objectives: [
    'Express your personal opinions in simple sentences.',
    'Use polite language to share ideas in meetings.',
    "Respond to others' opinions using short, natural phrases.",
  ],

  vocabulary: [
    {
      word: 'OPINION',
      partOfSpeech: 'noun',
      definition: 'What you think or believe about something.',
      example: 'Everyone has a different opinion.',
      imageSlug: '/images/business-expressing-simple-opinions-opinion.png',
    },
    {
      word: 'THINK',
      partOfSpeech: 'verb',
      definition: 'To have an idea or believe something.',
      example: 'I think we should change the plan.',
      imageSlug: '/images/business-expressing-simple-opinions-think.png',
    },
    {
      word: 'FEEL',
      partOfSpeech: 'verb',
      definition: 'To express your emotions or ideas about something.',
      example: 'Tim feels we need more people on the team.',
      imageSlug: '/images/business-expressing-simple-opinions-feel.png',
    },
    {
      word: 'PREFER',
      partOfSpeech: 'verb',
      definition: 'To like one thing more than another.',
      example: 'I prefer to meet in the morning.',
      imageSlug: '/images/business-expressing-simple-opinions-prefer.png',
    },
    {
      word: 'BELIEVE',
      partOfSpeech: 'verb',
      definition: 'To think something is true or correct.',
      example: 'Do you believe we can finish on time?',
      imageSlug: '/images/business-expressing-simple-opinions-believe.png',
    },
    {
      word: 'COME UP WITH',
      partOfSpeech: 'phrase',
      definition: 'To think of a new idea or solution.',
      example: 'Kira came up with a good suggestion.',
      imageSlug: '/images/business-expressing-simple-opinions-come-up-with.png',
    },
    {
      word: 'GO WITH',
      partOfSpeech: 'phrase',
      definition: 'To choose or decide on something.',
      example: "Let's go with Kira's idea.",
      imageSlug: '/images/business-expressing-simple-opinions-go-with.png',
    },
    {
      word: 'WORK ON',
      partOfSpeech: 'phrase',
      definition: 'To spend time improving or developing something.',
      example: 'Tim is working on a new plan.',
      imageSlug: '/images/business-expressing-simple-opinions-work-on.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'In my opinion…',
      tag: 'phrase',
      definition: 'Use this to share your personal view on something.',
      example: '"In my opinion, we should start earlier." / "In my opinion, this plan is too risky."',
      imageSlug: '/images/business-expressing-simple-opinions-in-my-opinion.png',
    },
    {
      phrase: 'I think that…',
      tag: 'phrase',
      definition: 'Use this to give a simple opinion or idea.',
      example: '"I think that this design looks better." / "I think that we need more time."',
      imageSlug: '/images/business-expressing-simple-opinions-i-think-that.png',
    },
    {
      phrase: 'I feel that…',
      tag: 'phrase',
      definition: 'Use this to express a feeling or personal reaction to something.',
      example: '"I feel that the deadline is too short." / "I feel that the team is doing well."',
      imageSlug: '/images/business-expressing-simple-opinions-i-feel-that.png',
    },
    {
      phrase: 'I prefer to…',
      tag: 'phrase',
      definition: 'Use this to say which option you like more.',
      example: '"I prefer to have short meetings in the morning." / "I prefer to send an email first."',
      imageSlug: '/images/business-expressing-simple-opinions-i-prefer-to.png',
    },
    {
      phrase: 'I believe that…',
      tag: 'phrase',
      definition: 'Use this to show confidence in your idea or statement.',
      example: '"I believe that teamwork helps us finish faster." / "I believe that this is the right plan."',
      imageSlug: '/images/business-expressing-simple-opinions-i-believe-that.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'I [[think:to have an idea or believe something]] we should start the project next week.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Hmm, I [[feel:to express your emotions or ideas about something]] that's a bit early. We still need to finish the report.",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "That's true. In my [[opinion:what you think or believe about something]], starting early will save time later.",
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: 'I [[prefer:to like one thing more than another]] to finish the report first, then start the project.',
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "That's a good point. I [[believe:to think something is true or correct]] we can still prepare while finishing the report.",
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Okay, that sounds fair. I believe that planning ahead will help both of us.",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "Great! So, we plan this week, and start next week. Let's [[go with:to choose or decide on something]] that plan.",
    },
  ],

  matchingExercise: [
    { word: 'OPINION', definition: 'What you think or believe about something' },
    { word: 'THINK', definition: 'To have an idea or believe something' },
    { word: 'FEEL', definition: 'To express your emotions or ideas about something' },
    { word: 'PREFER', definition: 'To like one thing more than another' },
    { word: 'BELIEVE', definition: 'To think something is true or correct' },
    { word: 'COME UP WITH', definition: 'To think of a new idea or solution' },
    { word: 'GO WITH', definition: 'To choose or decide on something' },
    { word: 'WORK ON', definition: 'To spend time improving or developing something' },
  ],

  fillBlankExercise: [
    {
      before: 'In my',
      after: ', we should change the meeting time.',
      answer: 'opinion',
    },
    {
      before: 'I',
      after: 'that we need more people on the project.',
      answer: 'think',
    },
    {
      before: 'I',
      after: 'that the deadline is too short.',
      answer: 'feel',
    },
    {
      before: 'I',
      after: 'to have short meetings in the morning.',
      answer: 'prefer',
    },
    {
      before: 'I',
      after: 'that teamwork will help us finish faster.',
      answer: 'believe',
    },
    {
      before: 'Kira',
      after: 'a great idea for the new campaign.',
      answer: 'came up with',
    },
    {
      before: "Let's",
      after: "Tim's plan — I think it is the best option.",
      answer: 'go with',
    },
    {
      before: 'Tim is',
      after: 'a new report for the client.',
      answer: 'working on',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which phrase do you use to share a personal view confidently?',
      options: [
        '"I feel that…"',
        '"I prefer to…"',
        '"I believe that…"',
        '"I think that…"',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "come up with" mean?',
      options: [
        'To choose an idea.',
        'To think of a new idea or solution.',
        'To disagree with an idea.',
        'To improve a plan.',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, what does Tim prefer to do first?',
      options: [
        'Start the new project.',
        'Have a shorter meeting.',
        'Finish the report first.',
        'Send an email to the client.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which phrase is best for saying which option you like more?',
      options: [
        '"In my opinion…"',
        '"I believe that…"',
        '"I prefer to…"',
        '"I think that…"',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "go with" mean in a meeting context?',
      options: [
        'To leave the meeting.',
        'To disagree with a plan.',
        'To choose or decide on something.',
        'To work on a new idea.',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is the difference between "I think" and "I believe"?',
      options: [
        'They mean the same thing — both share an opinion.',
        '"I believe" is only for facts; "I think" is for feelings.',
        '"I think" shows more confidence than "I believe".',
        '"I believe" is only used in formal written reports.',
      ],
      correctIndex: 0,
    },
  ],
};
