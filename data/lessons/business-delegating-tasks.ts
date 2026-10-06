import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-delegating-tasks-${s}.png`;

export const businessDelegatingTasks: Lesson = {
  slug: 'business-delegating-tasks',
  title: 'Delegating Tasks',
  subtitle: 'C1-C2 · Leadership Communication · Lesson 3',
  level: 'C1-C2',
  description:
    'Delegate with clarity and trust: hand over responsibility, define authority and expectations, agree timelines and give people the autonomy to succeed.',
  heroImage: img('hero'),

  objectives: [
    'Assign responsibility clearly and confidently.',
    'Define authority, priorities and expectations.',
    'Agree on timelines and check-ins without micromanaging.',
  ],

  vocabulary: [
    { word: 'DELEGATE', partOfSpeech: 'verb', definition: 'To assign work or responsibility to someone else.', example: 'Effective leaders delegate routine tasks.', imageSlug: img('delegate') },
    { word: 'AUTHORITY', partOfSpeech: 'noun', definition: 'The power or right to make decisions.', example: "You'll have full authority over the budget.", imageSlug: img('authority') },
    { word: 'AUTONOMY', partOfSpeech: 'noun', definition: 'The freedom to make your own decisions.', example: 'Senior staff appreciate autonomy.', imageSlug: img('autonomy') },
    { word: 'ACCOUNTABILITY', partOfSpeech: 'noun', definition: 'Responsibility for actions and results.', example: 'Delegation includes accountability for the outcome.', imageSlug: img('accountability') },
    { word: 'MICROMANAGE', partOfSpeech: 'verb', definition: 'To control every small detail of someone\'s work.', example: 'Nobody likes a boss who micromanages.', imageSlug: img('micromanage') },
    { word: 'CHECKPOINT', partOfSpeech: 'noun', definition: 'An agreed moment to review progress.', example: "Let's set a checkpoint for next Wednesday.", imageSlug: img('checkpoint') },
  ],

  phrasalVerbs: [
    { phrase: "I'd like you to take the lead on this project.", tag: 'phrase', definition: 'Assign responsibility and show confidence.', example: '"Maria, I\'d like you to take the lead on the Lisbon launch."', imageSlug: img('take-the-lead') },
    { phrase: 'I trust your judgement on this.', tag: 'phrase', definition: 'Express trust and give autonomy.', example: '"You know the market better than I do. I trust your judgement on this."', imageSlug: img('trust-judgement') },
    { phrase: "You'll have full authority to make decisions on…", tag: 'phrase', definition: 'Delegate decision-making power clearly.', example: '"You\'ll have full authority to make decisions on suppliers under 10,000 euros."', inAction: 'Be explicit about the LIMITS of authority ("up to 10,000 euros") — vague delegation leads to either paralysis or overreach.', imageSlug: img('full-authority') },
    { phrase: 'Please prioritize these tasks based on…', tag: 'phrase', definition: 'Give structure and clear expectations.', example: '"Please prioritize these tasks based on client impact."', imageSlug: img('prioritize') },
    { phrase: "Let's agree on the timeline and key goals.", tag: 'phrase', definition: 'Ensure shared understanding.', example: '"Before you start, let\'s agree on the timeline and key goals."', imageSlug: img('agree-timeline') },
    { phrase: 'HAND OVER', definition: 'To give responsibility for something to someone else.', example: "I'll hand over the client account to you on Monday.", imageSlug: img('hand-over') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maria, I'd like you to take the lead on the partner conference this year." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Wow, thank you! That's a big responsibility. What exactly would I be in charge of?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Everything — venue, speakers, programme. You'll have full [[authority:power to decide]] to make decisions on spending up to 30,000 euros. Above that, just check with me." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Clear. How often should I update you?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I don't want to [[micromanage:control every small detail]]. Let's set a [[checkpoint:moment to review progress]] every two weeks. Otherwise, you have complete [[autonomy:freedom to decide]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "What should I prioritize first?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Please prioritize the venue — good ones book up fast. Let's agree on the key goals: 200 attendees, under budget, and a 90% satisfaction score." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Got it. I'll take full [[accountability:responsibility for results]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I trust your judgement. I'll [[hand over:give responsibility for]] last year's files tomorrow." },
  ],

  matchingExercise: [
    { word: 'DELEGATE', definition: 'Assign work to someone else' },
    { word: 'AUTHORITY', definition: 'The power to make decisions' },
    { word: 'AUTONOMY', definition: 'The freedom to decide for yourself' },
    { word: 'MICROMANAGE', definition: 'Control every small detail' },
    { word: 'CHECKPOINT', definition: 'An agreed moment to review progress' },
    { word: 'HAND OVER', definition: 'Give responsibility to someone else' },
  ],

  fillBlankExercise: [
    { before: "I'd like you to take the", after: 'on this project.', answer: 'lead' },
    { before: 'I trust your', after: 'on this.', answer: 'judgement' },
    { before: "You'll have full", after: 'to make decisions.', answer: 'authority' },
    { before: "Let's agree on the", after: 'and key goals.', answer: 'timeline' },
    { before: "I'll hand", after: 'the account to you on Monday.', answer: 'over' },
    { before: "I don't want to", after: 'you.', answer: 'micromanage' },
  ],

  multipleChoiceExercise: [
    { question: 'Why define the limits of authority clearly?', options: ['To control people', 'Vague delegation causes confusion or overreach', 'It is a legal requirement', 'To save time'], correctIndex: 1 },
    { question: 'What does "micromanage" mean?', options: ['Manage a small company', 'Control every small detail of someone\'s work', 'Give freedom', 'Delegate everything'], correctIndex: 1 },
    { question: 'What is "autonomy"?', options: ['A car', 'Freedom to make your own decisions', 'A deadline', 'A report'], correctIndex: 1 },
    { question: "In the dialogue, what is Maria's spending limit without checking?", options: ['10,000 euros', '20,000 euros', '30,000 euros', 'No limit'], correctIndex: 2 },
    { question: 'How often are the checkpoints?', options: ['Daily', 'Weekly', 'Every two weeks', 'Monthly'], correctIndex: 2 },
  ],
};
