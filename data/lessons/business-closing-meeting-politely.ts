import { Lesson } from '@/types/lesson';

export const businessClosingMeetingPolitely: Lesson = {
  slug: 'business-closing-meeting-politely',
  title: 'Closing a Meeting Politely',
  subtitle: 'Series 2 · Meeting English · Lesson 5',
  level: 'A1-A2',
  description:
    'Learn how to close a meeting in a polite and professional way. Summarize key points, confirm next steps, and thank participants before finishing.',
  heroImage: '/images/business-closing-meeting-politely-hero.png',

  objectives: [
    'End a meeting in a polite and professional way.',
    'Summarize the main points before finishing.',
    'Thank participants and confirm next steps.',
  ],

  vocabulary: [
    {
      word: 'SUMMARIZE',
      partOfSpeech: 'verb',
      definition: 'To say the main points in a short way.',
      example: 'Kira summarized the meeting at the end.',
      imageSlug: '/images/business-closing-meeting-politely-summarize.png',
    },
    {
      word: 'DECISION',
      partOfSpeech: 'noun',
      definition: 'A choice made after talking or thinking about something.',
      example: 'The manager will make the final decision.',
      imageSlug: '/images/business-closing-meeting-politely-decision.png',
    },
    {
      word: 'ACTION',
      partOfSpeech: 'noun',
      definition: 'Something you will do after the meeting.',
      example: "Kira's action is to send the report.",
      imageSlug: '/images/business-closing-meeting-politely-action.png',
    },
    {
      word: 'REMINDER',
      partOfSpeech: 'noun',
      definition: 'Something that helps you remember to do something.',
      example: 'The email was a good reminder.',
      imageSlug: '/images/business-closing-meeting-politely-reminder.png',
    },
    {
      word: 'APPRECIATE',
      partOfSpeech: 'verb',
      definition: 'To be thankful for something.',
      example: 'The team appreciated the feedback.',
      imageSlug: '/images/business-closing-meeting-politely-appreciate.png',
    },
    {
      word: 'FOLLOW UP',
      partOfSpeech: 'phrase',
      definition: 'To do something — like send an email — after the meeting to confirm details.',
      example: 'Kira will follow up with the client tomorrow.',
      imageSlug: '/images/business-closing-meeting-politely-follow-up.png',
    },
    {
      word: 'CHECK IN',
      partOfSpeech: 'phrase',
      definition: 'To contact someone later to update them or ask how things are going.',
      example: 'Tim will check in with the team next week.',
      imageSlug: '/images/business-closing-meeting-politely-check-in.png',
    },
    {
      word: 'HAND OUT',
      partOfSpeech: 'phrase',
      definition: 'To give something to each person in the group.',
      example: 'Kira handed out the final report.',
      imageSlug: '/images/business-closing-meeting-politely-hand-out.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "Let's review the main points.",
      tag: 'phrase',
      definition: 'Use this to remind everyone what was discussed before closing.',
      example: '"Let\'s review the main points before we finish."',
      imageSlug: '/images/business-closing-meeting-politely-lets-review.png',
    },
    {
      phrase: 'Our main decision today is…',
      tag: 'phrase',
      definition: 'Use this to confirm the final choice the group agreed on.',
      example: '"Our main decision today is to launch the product on Monday."',
      imageSlug: '/images/business-closing-meeting-politely-main-decision.png',
    },
    {
      phrase: 'Before we close, does anyone have a question?',
      tag: 'phrase',
      definition: 'Use this to check if everyone understands before ending the meeting.',
      example: '"Before we close, does anyone have a question about next week?"',
      imageSlug: '/images/business-closing-meeting-politely-before-we-close.png',
    },
    {
      phrase: 'Thank you for your time and your ideas.',
      tag: 'phrase',
      definition: 'Use this to show appreciation to everyone at the end of the meeting.',
      example: '"Thank you for your time and ideas today."',
      imageSlug: '/images/business-closing-meeting-politely-thank-you.png',
    },
    {
      phrase: "I'll follow up with an email.",
      tag: 'phrase',
      definition: 'Use this to promise to send information after the meeting to confirm everything.',
      example: '"I\'ll follow up with an email and share the notes."',
      imageSlug: '/images/business-closing-meeting-politely-ill-follow-up.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "Alright, let's [[review:to check or go over something again]] the main points.",
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Sure. We finished the sales report and planned next week's tasks.",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Great. Our main [[decision:a choice made after talking or thinking about something]] today is to send the report to the client on Thursday.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Got it. I'll write down that [[action:something you will do after the meeting]] and send a [[reminder:something that helps you remember to do something]] tomorrow.",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Perfect. Before we close, does anyone have a question?',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: 'No questions from me. Thank you for your time today.',
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Thank you, Tim. I really [[appreciate:to be thankful for something]] your help. I\'ll [[follow up:to do something after the meeting to confirm details]] with an email to confirm everything.',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Sounds good. Let's wrap up. Have a great day!",
    },
  ],

  matchingExercise: [
    { word: 'SUMMARIZE', definition: 'To say the main points in a short way' },
    { word: 'DECISION', definition: 'A choice made after talking or thinking about something' },
    { word: 'ACTION', definition: 'Something you will do after the meeting' },
    { word: 'REMINDER', definition: 'Something that helps you remember to do something' },
    { word: 'APPRECIATE', definition: 'To be thankful for something' },
    { word: 'FOLLOW UP', definition: 'To do something after the meeting to confirm details' },
    { word: 'CHECK IN', definition: 'To contact someone later to update them' },
    { word: 'HAND OUT', definition: 'To give something to each person in the group' },
  ],

  fillBlankExercise: [
    {
      before: "Let's review the main points before we",
      after: 'the meeting.',
      answer: 'close',
    },
    {
      before: 'Our main',
      after: 'today is to launch the product on Monday.',
      answer: 'decision',
    },
    {
      before: "Before we close, does anyone have a",
      after: '?',
      answer: 'question',
    },
    {
      before: "I'll",
      after: 'with an email and share the notes.',
      answer: 'follow up',
    },
    {
      before: "I really",
      after: 'your help today, Tim.',
      answer: 'appreciate',
    },
    {
      before: "Kira will",
      after: 'the team next week to see how things are going.',
      answer: 'check in with',
    },
    {
      before: "Please write down your",
      after: 'from today so you do not forget.',
      answer: 'action',
    },
    {
      before: "I'll send a",
      after: 'email before the deadline.',
      answer: 'reminder',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which phrase do you use to confirm the final choice at the end of a meeting?',
      options: [
        '"Let\'s review the main points."',
        '"Our main decision today is…"',
        '"I\'ll follow up with an email."',
        '"Before we close, does anyone have a question?"',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "follow up" mean?',
      options: [
        'To cancel the next meeting.',
        'To disagree with a decision.',
        'To do something after the meeting to confirm details.',
        'To summarize the meeting notes.',
      ],
      correctIndex: 2,
    },
    {
      question: 'In the dialogue, what is the main decision?',
      options: [
        'To cancel the project.',
        'To send the report to the client on Thursday.',
        'To hold another meeting tomorrow.',
        'To launch the product on Monday.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "appreciate" mean?',
      options: [
        'To give something to someone.',
        'To ask for more information.',
        'To be thankful for something.',
        'To end a meeting politely.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which phrase checks if everyone understands before ending?',
      options: [
        '"Thank you for your time and ideas."',
        '"Let\'s wrap up."',
        '"Before we close, does anyone have a question?"',
        '"Our main decision today is…"',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is an "action" in a meeting context?',
      options: [
        'A problem discussed in the meeting.',
        'Something you will do after the meeting.',
        'The final decision made by the manager.',
        'A question asked during the meeting.',
      ],
      correctIndex: 1,
    },
  ],
};
