import { Lesson } from '@/types/lesson';

export const businessBasicMeetingPhrases: Lesson = {
  slug: 'business-basic-meeting-phrases',
  title: 'Basic Meeting Phrases ("Let\'s Begin…")',
  subtitle: 'Series 2 · Meeting English · Lesson 1',
  level: 'A1-A2',
  description:
    'Learn the essential phrases and phrasal verbs for starting, running, and ending a meeting. Build confidence in participating in short professional meetings.',
  heroImage: '/images/business-basic-meeting-phrases-hero.png',

  objectives: [
    'Use simple phrases to start, continue, and end a meeting.',
    'Understand and use basic meeting phrasal verbs.',
    'Participate in short meeting conversations politely.',
  ],

  vocabulary: [
    {
      word: 'MEETING',
      partOfSpeech: 'noun',
      definition: 'A time when people come together to talk about work.',
      example: 'We have a meeting every Monday.',
      imageSlug: '/images/business-basic-meeting-phrases-meeting.png',
    },
    {
      word: 'AGENDA',
      partOfSpeech: 'noun',
      definition: 'A list of things to talk about in a meeting.',
      example: "What's on the agenda today?",
      imageSlug: '/images/business-basic-meeting-phrases-agenda.png',
    },
    {
      word: 'DISCUSS',
      partOfSpeech: 'verb',
      definition: 'To talk about something in a group.',
      example: 'What are we going to discuss today?',
      imageSlug: '/images/business-basic-meeting-phrases-discuss.png',
    },
    {
      word: 'WRAP UP',
      partOfSpeech: 'phrase',
      definition: 'To finish or bring something to an end.',
      example: "Let's wrap up in five minutes.",
      imageSlug: '/images/business-basic-meeting-phrases-wrap-up.png',
    },
    {
      word: 'CALL OFF',
      partOfSpeech: 'phrase',
      definition: 'To cancel something that was planned.',
      example: 'We had to call off the meeting because the manager was sick.',
      imageSlug: '/images/business-basic-meeting-phrases-call-off.png',
    },
    {
      word: 'SET UP',
      partOfSpeech: 'phrase',
      definition: 'To arrange or organize something.',
      example: "Let's set up a meeting for next week.",
      imageSlug: '/images/business-basic-meeting-phrases-set-up.png',
    },
    {
      word: 'GO OVER',
      partOfSpeech: 'phrase',
      definition: 'To review or check something together.',
      example: "We'll go over the new report together.",
      imageSlug: '/images/business-basic-meeting-phrases-go-over.png',
    },
    {
      word: 'LOOK INTO',
      partOfSpeech: 'phrase',
      definition: 'To investigate or check something more carefully later.',
      example: "We'll look into that issue after the meeting.",
      imageSlug: '/images/business-basic-meeting-phrases-look-into.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "Let's begin the meeting.",
      tag: 'phrase',
      definition: 'Use this to officially start the meeting.',
      example: '"Let\'s begin the meeting. Thank you for being on time."',
      imageSlug: '/images/business-basic-meeting-phrases-lets-begin.png',
    },
    {
      phrase: "Today's agenda includes…",
      tag: 'phrase',
      definition: 'Use this to introduce the topics you will discuss.',
      example: '"Today\'s agenda includes sales updates and new projects."',
      imageSlug: '/images/business-basic-meeting-phrases-todays-agenda.png',
    },
    {
      phrase: "Let's move to the next point.",
      tag: 'phrase',
      definition: 'Use this to change to the next topic on the agenda.',
      example: '"Let\'s move to the next point on the agenda."',
      imageSlug: '/images/business-basic-meeting-phrases-lets-move.png',
    },
    {
      phrase: 'Does anyone have a question?',
      tag: 'phrase',
      definition: 'Use this to invite comments or questions from the group.',
      example: '"Does anyone have a question about this report?"',
      imageSlug: '/images/business-basic-meeting-phrases-does-anyone.png',
    },
    {
      phrase: "Let's wrap up.",
      tag: 'phrase',
      definition: 'Use this to signal that the meeting is ending.',
      example: '"Let\'s wrap up. Thank you for your ideas today."',
      imageSlug: '/images/business-basic-meeting-phrases-lets-wrap-up.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "Good morning, everyone. Let's [[begin:to start]] the [[meeting:a time when people come together to talk about work]].",
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: "Morning, Kira. What's on the [[agenda:a list of things to talk about in a meeting]] today?",
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "Today's agenda includes a quick update on the new project and next week's schedule.",
    },
    {
      speaker: 'Maria',
      speakerColor: 'orange',
      text: 'Great. Should we start with the project update?',
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: 'Yes. Tim, can you [[go over:to review or check something together]] the numbers, please?',
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: 'Sure. Sales are up by 10%. We met our goal for the month.',
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "Excellent news. Let's move to the next point — next week's schedule.",
    },
    {
      speaker: 'Maria',
      speakerColor: 'orange',
      text: 'I think we need more time for planning.',
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "Okay, we'll [[look into:to investigate or check something more carefully]] that after the meeting.",
    },
    {
      speaker: 'Tim',
      speakerColor: 'green',
      text: 'Anything else before we finish?',
    },
    {
      speaker: 'Kira',
      speakerColor: 'purple',
      text: "No, I think that's all. Let's [[wrap up:to finish or bring something to an end]]. Thank you, everyone.",
    },
  ],

  matchingExercise: [
    { word: 'MEETING', definition: 'A time when people come together to talk about work' },
    { word: 'AGENDA', definition: 'A list of things to talk about in a meeting' },
    { word: 'DISCUSS', definition: 'To talk about something in a group' },
    { word: 'CALL OFF', definition: 'To cancel something that was planned' },
    { word: 'SET UP', definition: 'To arrange or organize something' },
    { word: 'GO OVER', definition: 'To review or check something together' },
    { word: 'WRAP UP', definition: 'To finish or bring something to an end' },
    { word: 'LOOK INTO', definition: 'To investigate or check something more carefully' },
  ],

  fillBlankExercise: [
    {
      before: "Let's",
      after: 'the meeting. Thank you for being on time.',
      answer: 'begin',
    },
    {
      before: "We had to",
      after: 'the meeting because the manager was sick.',
      answer: 'call off',
    },
    {
      before: "Can you",
      after: 'the numbers from last month, please?',
      answer: 'go over',
    },
    {
      before: "Let's",
      after: "in five minutes — we are almost done.",
      answer: 'wrap up',
    },
    {
      before: "Today's",
      after: 'includes a sales update and new projects.',
      answer: 'agenda',
    },
    {
      before: "We'll",
      after: 'that issue after the meeting.',
      answer: 'look into',
    },
    {
      before: "Let's",
      after: 'a meeting for next Tuesday.',
      answer: 'set up',
    },
    {
      before: 'Does anyone have a question before we',
      after: 'today?',
      answer: 'discuss',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "call off" mean?',
      options: [
        'To start a meeting.',
        'To cancel something that was planned.',
        'To review something together.',
        'To invite people to a meeting.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which phrase do you use to officially start a meeting?',
      options: [
        '"Let\'s wrap up."',
        '"Does anyone have a question?"',
        '"Let\'s begin the meeting."',
        '"Let\'s move to the next point."',
      ],
      correctIndex: 2,
    },
    {
      question: 'In the dialogue, what good news does Tim share?',
      options: [
        'The meeting was called off.',
        'Sales are up by 10%.',
        'The new project is finished.',
        'The agenda was changed.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "go over" mean?',
      options: [
        'To cancel something.',
        'To move to the next topic.',
        'To review or check something together.',
        'To finish the meeting.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which phrase signals the meeting is ending?',
      options: [
        '"Today\'s agenda includes…"',
        '"Let\'s wrap up."',
        '"Go over the numbers."',
        '"Set up a meeting."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is an "agenda"?',
      options: [
        'A person who runs the meeting.',
        'A report written after the meeting.',
        'A list of things to talk about in a meeting.',
        'The room where the meeting takes place.',
      ],
      correctIndex: 2,
    },
  ],
};
