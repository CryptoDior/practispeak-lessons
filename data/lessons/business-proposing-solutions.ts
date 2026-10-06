import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-proposing-solutions-${s}.png`;

export const businessProposingSolutions: Lesson = {
  slug: 'business-proposing-solutions',
  title: 'Proposing Solutions',
  subtitle: 'B1-B2 · Problem Solving · Lesson 5',
  level: 'B1-B2',
  description:
    'Learn how to propose solutions in a meeting: introduce one or more options, suggest the best way forward, and explain how your plan will help.',
  heroImage: img('hero'),

  objectives: [
    'Present one or more possible solutions.',
    'Recommend the best option carefully.',
    'Explain the benefits and next steps of a plan.',
  ],

  vocabulary: [
    { word: 'SOLUTION', partOfSpeech: 'noun', definition: 'A way to fix a problem or make something better.', example: 'The team discussed three possible solutions.', imageSlug: img('solution') },
    { word: 'OPTION', partOfSpeech: 'noun', definition: 'One of the possible choices or plans.', example: 'We have several options to consider.', imageSlug: img('option') },
    { word: 'STEP', partOfSpeech: 'noun', definition: 'One part of a plan or process.', example: 'The first step is to check the report.', imageSlug: img('step') },
    { word: 'IMPLEMENT', partOfSpeech: 'verb', definition: 'To start using a plan or idea.', example: "We implemented Tim's idea last month.", imageSlug: img('implement') },
    { word: 'EFFECTIVE', partOfSpeech: 'adjective', definition: 'Working well; producing the result you want.', example: "Kira's solution was simple but effective.", imageSlug: img('effective') },
  ],

  phrasalVerbs: [
    { phrase: 'COME UP WITH', definition: 'To think of a new idea or solution.', example: 'Kira came up with an interesting idea.', imageSlug: img('come-up-with') },
    { phrase: 'WORK OUT', definition: 'To find a solution, often together.', example: "Let's work out a plan that helps both teams.", imageSlug: img('work-out') },
    { phrase: 'FOLLOW THROUGH (ON)', definition: 'To complete an action or promise.', example: "Let's follow through on this plan and review it next week.", imageSlug: img('follow-through') },
    { phrase: 'One solution could be to…', tag: 'phrase', definition: 'Introduce an idea.', example: '"One solution could be to train new staff next week."', imageSlug: img('one-solution') },
    { phrase: 'Another option is to…', tag: 'phrase', definition: 'Give a second idea.', example: '"Another option is to hire a temporary assistant."', imageSlug: img('another-option') },
    { phrase: 'The best way might be to…', tag: 'phrase', definition: 'Give a careful recommendation.', example: '"The best way might be to update the software."', inAction: '"Might be" and "could be" make your idea sound open, not bossy. People are more likely to agree.', imageSlug: img('best-way') },
    { phrase: 'We could try…', tag: 'phrase', definition: 'Suggest testing an idea.', example: '"We could try sending reminders earlier."', imageSlug: img('we-could-try') },
    { phrase: 'This plan would help us…', tag: 'phrase', definition: 'Show the result or benefit of the idea.', example: '"This plan would help us avoid more delays."', imageSlug: img('would-help-us') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Clients keep missing their appointments. We lost six hours last week. Let's [[work out:find together]] a solution." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'One [[solution:a way to fix a problem]] could be to send a reminder email the day before.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Another [[option:possible choice]] is to send a text message two hours before. People read texts faster than emails.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Both good ideas. Which one is more [[effective:working well]]?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'The best way might be to do both. Email the day before and a text two hours before.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'We could try it for one month. Our booking system can do it automatically, so it\'s easy to [[implement:start using]].' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Great. This plan would help us save time and money. What\'s the first [[step:one part of a plan]]?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I'll set up the messages this week. Tim, can you write the text?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure. I'll [[follow through on:complete]] it by Thursday." },
  ],

  matchingExercise: [
    { word: 'SOLUTION', definition: 'A way to fix a problem' },
    { word: 'OPTION', definition: 'One possible choice' },
    { word: 'IMPLEMENT', definition: 'To start using a plan' },
    { word: 'EFFECTIVE', definition: 'Working well' },
    { word: 'WORK OUT', definition: 'To find a solution together' },
    { word: 'FOLLOW THROUGH', definition: 'To complete an action or promise' },
  ],

  fillBlankExercise: [
    { before: 'One solution could', after: 'to train new staff.', answer: 'be' },
    { before: 'Another', after: 'is to hire an assistant.', answer: 'option' },
    { before: 'The best way', after: 'be to update the software.', answer: 'might' },
    { before: 'We could', after: 'sending reminders earlier.', answer: 'try' },
    { before: 'This plan would', after: 'us avoid more delays.', answer: 'help' },
    { before: "Let's work", after: 'a plan that helps both teams.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase gives a second idea?', options: ['One solution could be…', 'Another option is to…', 'In conclusion…', 'There seems to be a problem…'], correctIndex: 1 },
    { question: 'Why use "might" in "The best way might be to…"?', options: ['It sounds bossy', 'It makes the idea sound open and polite', 'It is past tense', 'It means "must"'], correctIndex: 1 },
    { question: 'What does "implement" mean?', options: ['Start using a plan', 'Cancel a plan', 'Discuss a plan', 'Forget a plan'], correctIndex: 0 },
    { question: 'What does "effective" mean?', options: ['Expensive', 'Working well', 'Very fast', 'Difficult'], correctIndex: 1 },
    { question: 'In the dialogue, what is the problem?', options: ['Clients miss appointments', 'The office is closed', 'The website is down', 'Staff are late'], correctIndex: 0 },
    { question: 'What do they decide to do?', options: ['Only send emails', 'Only send texts', 'Send an email the day before and a text two hours before', 'Call every client'], correctIndex: 2 },
  ],
};
