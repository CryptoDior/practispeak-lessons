import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-c1-unexpected-problems-${s}.png`;

export const conversationC1UnexpectedProblems: Lesson = {
  slug: 'conversation-c1-unexpected-problems',
  title: 'How Do You Handle Unexpected Problems?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 8',
  level: 'C1-C2',
  description:
    'Discuss how you respond when things don\'t go to plan: staying composed, avoiding impulsive reactions, not catastrophising and treating setbacks as information.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Describe your approach to unexpected problems.',
    'Talk about composure, adaptability and setbacks.',
    'Use advanced phrases like "catastrophise" and "within my control".',
  ],

  vocabulary: [
    { word: 'COMPOSURE', partOfSpeech: 'noun', definition: 'The ability to stay calm and in control under stress.', example: 'Keeping my composure helps me think clearly.', imageSlug: img('composure') },
    { word: 'IMPULSIVE', partOfSpeech: 'adjective', definition: 'Acting quickly without careful thought.', example: "I try not to make impulsive decisions when I'm stressed.", imageSlug: img('impulsive') },
    { word: 'SETBACK', partOfSpeech: 'noun', definition: 'A problem that delays your progress.', example: 'The delay was frustrating, but only a temporary setback.', imageSlug: img('setback') },
    { word: 'ADAPTABILITY', partOfSpeech: 'noun', definition: 'The ability to adjust when circumstances change.', example: 'Unexpected problems require adaptability.', imageSlug: img('adaptability') },
    { word: 'CATASTROPHIZE', partOfSpeech: 'verb', definition: 'To imagine the worst possible outcome.', example: "I try not to catastrophize when a plan fails.", imageSlug: img('catastrophize') },
    { word: 'ASSESS', partOfSpeech: 'verb', definition: 'To judge or evaluate a situation carefully.', example: 'I assess the situation before taking action.', imageSlug: img('assess') },
    { word: 'PRAGMATIC', partOfSpeech: 'adjective', definition: 'Practical and realistic.', example: 'We need a pragmatic solution, not a perfect one.', imageSlug: img('pragmatic') },
  ],

  phrasalVerbs: [
    { phrase: 'How do you handle unexpected problems?', tag: 'phrase', definition: 'Ask how someone responds when things don\'t go to plan.', example: '"In interviews they often ask: how do you handle unexpected problems?"', imageSlug: img('question') },
    { phrase: 'I try not to react impulsively.', tag: 'phrase', definition: 'You avoid responding too quickly without thinking.', example: '"When the client cancelled, I tried not to react impulsively."', imageSlug: img('not-impulsive') },
    { phrase: "I focus on what's within my control.", tag: 'phrase', definition: 'You concentrate on the parts you can influence.', example: '"I can\'t stop the strike, so I focus on what\'s within my control."', imageSlug: img('within-control') },
    { phrase: 'I try to stay composed under pressure.', tag: 'phrase', definition: 'You remain calm when things become stressful.', example: '"The team looks to me, so I try to stay composed under pressure."', imageSlug: img('composed') },
    { phrase: 'I ask for input when I need another perspective.', tag: 'phrase', definition: 'You seek advice when you need clarity.', example: '"I\'m not too proud to ask for input when I need another perspective."', imageSlug: img('ask-for-input') },
    { phrase: 'I treat setbacks as information, not failure.', tag: 'phrase', definition: 'You learn from problems instead of seeing them as defeat.', example: '"The launch flopped, but I treat setbacks as information, not failure."', inAction: 'Reframing ("as information, not failure") is a powerful C1 technique — great for interviews and leadership conversations.', imageSlug: img('setbacks-information') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Oliver, I heard the venue for the conference cancelled yesterday. How did you handle it?" },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "My first instinct was to panic, to be honest. But I tried not to react [[impulsively:quickly without thinking]]." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "That's not easy with 200 guests coming." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "No. I paused and [[assessed:evaluated carefully]] the situation first. Then I focused on what was within my control: the date, the budget, the guest list." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Very [[pragmatic:practical and realistic]]. Did you [[catastrophize:imagine the worst outcome]]?" },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "For about ten minutes! Then I asked our events team for input. They found a hotel with a free hall the same week." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Impressive [[composure:staying calm under stress]]. Most people would have lost it." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "It's just a temporary [[setback:problem that delays progress]]. I try to treat setbacks as information, not failure — and now we'll always book a backup venue. That's [[adaptability:adjusting to change]]!" },
  ],

  practiceTime: {
    instructions: "Role-play this conversation with your teacher. Complete each blank out loud using the vocabulary and phrases from this lesson, then add your own detail.",
    lines: [
      { speaker: 'Teacher', text: "How do you handle unexpected problems?" },
      { speaker: 'Student', text: "First, I try not to react {{impulsively}}." },
      { speaker: 'Teacher', text: "What do you do next?" },
      { speaker: 'Student', text: "I {{assess}} the situation before taking action." },
      { speaker: 'Student', text: "How do you handle unexpected problems?" },
      { speaker: 'Teacher', text: "I focus on what's within my control." },
      { speaker: 'Teacher', text: "How do you stay calm under pressure?" },
      { speaker: 'Student', text: "Keeping my {{composure}} helps me think clearly. I try to stay {{composed}} under pressure." },
      { speaker: 'Teacher', text: "Do you ever imagine the worst?" },
      { speaker: 'Student', text: "Sometimes, but I try not to {{catastrophize}}." },
      { speaker: 'Teacher', text: "Do you look for the perfect solution?" },
      { speaker: 'Student', text: "No, I look for a {{pragmatic}} solution, not a perfect one." },
      { speaker: 'Teacher', text: "How do you see a problem afterwards?" },
      { speaker: 'Student', text: "It's only a temporary {{setback}}. I treat setbacks as {{information, not failure}}." },
      { speaker: 'Teacher', text: "What skill do unexpected problems need?" },
      { speaker: 'Student', text: "They need {{adaptability}}." },
    ],
  },

  matchingExercise: [
    { word: 'COMPOSURE', definition: 'Staying calm under stress' },
    { word: 'IMPULSIVE', definition: 'Acting without careful thought' },
    { word: 'SETBACK', definition: 'A problem that delays progress' },
    { word: 'CATASTROPHIZE', definition: 'To imagine the worst outcome' },
    { word: 'PRAGMATIC', definition: 'Practical and realistic' },
    { word: 'ADAPTABILITY', definition: 'Adjusting when things change' },
  ],

  fillBlankExercise: [
    { before: 'I try not to react', after: '.', answer: 'impulsively' },
    { before: "I focus on what's within my", after: '.', answer: 'control' },
    { before: 'I try to stay', after: 'under pressure.', answer: 'composed' },
    { before: 'I treat setbacks as information, not', after: '.', answer: 'failure' },
    { before: 'I', after: 'the situation before taking action.', answer: 'assess' },
    { before: 'It was only a temporary', after: '.', answer: 'setback' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "catastrophize" mean?', options: ['Solve a problem fast', 'Imagine the worst possible outcome', 'Cause a disaster', 'Stay calm'], correctIndex: 1 },
    { question: 'What is "composure"?', options: ['Writing music', 'The ability to stay calm under stress', 'A type of plan', 'Anger'], correctIndex: 1 },
    { question: 'Which phrase reframes a problem positively?', options: ['Everything is ruined.', 'I treat setbacks as information, not failure.', "It's not my fault.", 'I give up.'], correctIndex: 1 },
    { question: 'What does "pragmatic" mean?', options: ['Idealistic', 'Practical and realistic', 'Emotional', 'Slow'], correctIndex: 1 },
    { question: 'In the dialogue, what problem did Oliver face?', options: ['The speaker was ill', 'The conference venue cancelled', 'The budget was cut', 'Guests didn\'t come'], correctIndex: 1 },
    { question: 'What will Oliver always do in future?', options: ['Cancel conferences', 'Book a backup venue', 'Hire more staff', 'Work alone'], correctIndex: 1 },
  ],
};
