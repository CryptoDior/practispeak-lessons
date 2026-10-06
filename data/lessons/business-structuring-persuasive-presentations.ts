import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-structuring-persuasive-presentations-${s}.png`;

export const businessStructuringPersuasivePresentations: Lesson = {
  slug: 'business-structuring-persuasive-presentations',
  title: 'Structuring Persuasive Presentations',
  subtitle: 'C1-C2 · Presenting with Impact · Lesson 1',
  level: 'C1-C2',
  description:
    'Learn how to build a persuasive presentation: a strong hook, a clear roadmap, smooth transitions, effective signposting and a compelling call to action.',
  heroImage: img('hero'),

  objectives: [
    'Open with a hook and outline a clear structure.',
    'Guide the audience with signposting and transitions.',
    'Close with a summary and a strong call to action.',
  ],

  vocabulary: [
    { word: 'PERSUASIVE', partOfSpeech: 'adjective', definition: 'Able to make people believe or do something through reasoning or emotion.', example: 'Her persuasive pitch convinced the investors.', imageSlug: img('persuasive') },
    { word: 'STRUCTURE', partOfSpeech: 'noun / verb', definition: 'The way the parts of something are organised.', example: 'The talk had a simple three-part structure.', imageSlug: img('structure') },
    { word: 'SIGNPOSTING', partOfSpeech: 'noun', definition: 'Words that guide listeners through a presentation.', example: 'Effective signposting tells the audience what\'s coming next.', imageSlug: img('signposting') },
    { word: 'TRANSITION', partOfSpeech: 'noun', definition: 'A link between two ideas or sections.', example: 'The transition between topics was seamless.', imageSlug: img('transition') },
    { word: 'HOOK', partOfSpeech: 'noun', definition: 'An attention-grabbing opening.', example: 'A surprising statistic makes a great hook.', imageSlug: img('hook') },
    { word: 'CALL TO ACTION', partOfSpeech: 'noun', definition: 'A statement telling the audience what to do next.', example: 'End with a clear call to action.', imageSlug: img('call-to-action') },
  ],

  phrasalVerbs: [
    { phrase: 'Let me begin by outlining…', tag: 'phrase', definition: 'Introduce the structure of your talk.', example: '"Let me begin by outlining the three key points of my proposal."', imageSlug: img('outlining') },
    { phrase: "First, I'll discuss…, then we'll move on to…", tag: 'phrase', definition: 'Give the audience a roadmap.', example: '"First, I\'ll discuss our results, then we\'ll move on to future plans."', imageSlug: img('roadmap') },
    { phrase: 'The main point I want to make is…', tag: 'phrase', definition: 'Highlight your central argument.', example: '"The main point I want to make is that innovation drives growth."', imageSlug: img('main-point') },
    { phrase: 'This brings me to my next point.', tag: 'phrase', definition: 'A smooth transition between sections.', example: '"Costs are rising. This brings me to my next point: efficiency."', imageSlug: img('next-point') },
    { phrase: "To summarize, let's revisit the key points.", tag: 'phrase', definition: 'Transition to your conclusion.', example: '"To summarize, let\'s revisit the three key points."', imageSlug: img('summarize') },
    { phrase: "What I'm asking you to do today is…", tag: 'phrase', definition: 'Deliver a clear call to action.', example: '"What I\'m asking you to do today is approve a six-month pilot."', inAction: 'Persuasive talks follow the rule of three: tell them what you\'ll tell them, tell them, then tell them what you told them — and finish with a specific ask.', imageSlug: img('asking-you') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, can I run my board presentation past you? I'm worried it's not [[persuasive:able to convince people]] enough." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Sure. How do you open?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "\"Good morning. Today I'll talk about our customer data.\"" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's a bit flat. Start with a [[hook:attention-grabbing opening]]. For example: \"We lose one customer every eleven minutes.\" Then outline your [[structure:organisation of parts]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "So: \"Let me begin by outlining three points: the problem, the cause and the solution.\"" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Exactly. And use [[signposting:words that guide listeners]] between sections — \"This brings me to my next point.\" Clear [[transition:links between ideas]]s keep the board with you." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And the ending? I usually just say \"Any questions?\"" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Never end on questions. Summarize, then give a [[call to action:a statement telling them what to do]]: \"What I'm asking you to do today is approve a three-month retention pilot.\"" },
  ],

  matchingExercise: [
    { word: 'HOOK', definition: 'An attention-grabbing opening' },
    { word: 'SIGNPOSTING', definition: 'Words that guide listeners' },
    { word: 'TRANSITION', definition: 'A link between ideas' },
    { word: 'CALL TO ACTION', definition: 'Telling the audience what to do next' },
    { word: 'STRUCTURE', definition: 'How the parts are organised' },
    { word: 'PERSUASIVE', definition: 'Able to convince people' },
  ],

  fillBlankExercise: [
    { before: 'Let me begin by', after: 'the three key points.', answer: 'outlining' },
    { before: 'The main', after: 'I want to make is that innovation drives growth.', answer: 'point' },
    { before: 'This brings me to my next', after: '.', answer: 'point' },
    { before: 'A surprising statistic makes a great', after: '.', answer: 'hook' },
    { before: 'End your presentation with a clear call to', after: '.', answer: 'action' },
    { before: 'Effective', after: 'helps the audience know what\'s coming next.', answer: 'signposting' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "hook" in a presentation?', options: ['The final slide', 'An attention-grabbing opening', 'A difficult question', 'A chart'], correctIndex: 1 },
    { question: 'Which phrase gives a roadmap?', options: ["First, I'll discuss…, then we'll move on to…", 'Any questions?', 'Thank you.', 'I disagree.'], correctIndex: 0 },
    { question: 'Why does Kira say "never end on questions"?', options: ['Questions are rude', 'The ending should be a summary and a clear call to action', 'There is no time', 'Boards don\'t ask questions'], correctIndex: 1 },
    { question: 'In the dialogue, what hook does Kira suggest?', options: ['A joke', '"We lose one customer every eleven minutes."', 'A video', 'A quote'], correctIndex: 1 },
    { question: "What is Tim's call to action?", options: ['Hire more staff', 'Approve a three-month retention pilot', 'Cut the budget', 'Change the CEO'], correctIndex: 1 },
  ],
};
