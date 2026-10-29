import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-c1-prioritizing-each-day-${s}.png`;

export const conversationC1PrioritizingEachDay: Lesson = {
  slug: 'conversation-c1-prioritizing-each-day',
  title: 'How Do You Decide What to Prioritize Each Day?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 4',
  level: 'C1-C2',
  description:
    'Discuss decision-making and time management at an advanced level: urgent vs important, mental bandwidth, peak performance and avoiding "busywork".',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Explain how you prioritise tasks with precise language.',
    'Distinguish between urgent and important work.',
    'Use vocabulary such as bandwidth, allocate, hierarchy and proactive.',
  ],

  vocabulary: [
    { word: 'BANDWIDTH', partOfSpeech: 'noun', definition: 'Your mental or emotional capacity to handle tasks.', example: "My bandwidth is limited in the mornings.", imageSlug: img('limited-morning-capacity') },
    { word: 'HIERARCHY', partOfSpeech: 'noun', definition: 'An order that ranks things by importance.', example: 'I create a hierarchy of tasks before I start.', imageSlug: img('ranked-tasks') },
    { word: 'MAGNITUDE', partOfSpeech: 'noun', definition: 'The size or importance of something.', example: 'I underestimated the magnitude of that project.', imageSlug: img('underestimated-project-size') },
    { word: 'ALLOCATE', partOfSpeech: 'verb', definition: 'To assign time, energy or resources to something.', example: 'I allocate my early hours to difficult tasks.', imageSlug: img('early-hours-hard-work') },
    { word: 'PROACTIVE', partOfSpeech: 'adjective', definition: 'Taking action before problems appear.', example: 'Planning early keeps me proactive rather than reactive.', imageSlug: img('plan-before-problem') },
    { word: 'REACTIVE', partOfSpeech: 'adjective', definition: 'Only responding to things as they happen.', example: 'Answering every email instantly makes me reactive.', imageSlug: img('instant-email-reactions') },
    { word: 'BUSYWORK', partOfSpeech: 'noun', definition: 'Tasks that keep you busy but achieve little.', example: 'Reorganising folders is often just busywork.', imageSlug: img('folder-busywork') },
    { word: 'PEAK', partOfSpeech: 'adjective', definition: 'The highest or best point.', example: 'My peak hours are between nine and eleven.', imageSlug: img('peak-nine-eleven') },
  ],

  phrasalVerbs: [
    { phrase: 'I separate what\'s urgent from what\'s actually important.', tag: 'phrase', definition: 'You differentiate immediate tasks from meaningful ones.', example: '"Not every urgent email is important. I separate what\'s urgent from what\'s actually important."', inAction: 'URGENT = needs attention now. IMPORTANT = matters for your goals. The best work is often important but NOT urgent.', imageSlug: img('urgent-vs-important') },
    { phrase: 'I start with what will have the biggest long-term impact.', tag: 'phrase', definition: 'You focus on high-value tasks first.', example: '"I start with what will have the biggest long-term impact, even if it\'s hard."', imageSlug: img('long-term-impact-first') },
    { phrase: 'I assess my bandwidth for the day.', tag: 'phrase', definition: 'You consider your energy level before planning.', example: '"After a bad night\'s sleep, I assess my bandwidth for the day and plan lighter tasks."', imageSlug: img('sleep-lighter-plan') },
    { phrase: 'I structure my day around my peak performance times.', tag: 'phrase', definition: 'You plan based on when you work best.', example: '"I structure my day around my peak performance times — mornings for deep work."', imageSlug: img('morning-deep-work') },
    { phrase: "I limit tasks that look productive but don't move me forward.", tag: 'phrase', definition: 'You avoid busywork.', example: '"I limit tasks that look productive but don\'t move me forward."', imageSlug: img('limit-low-impact-work') },
    { phrase: 'I try not to react to everything that feels urgent.', tag: 'phrase', definition: 'You avoid stress-driven decision-making.', example: '"I try not to react to everything that feels urgent — notifications are off until eleven."', imageSlug: img('notifications-off-until-eleven') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "You always seem to get the important things done, Rosie. How do you decide what to prioritize each day?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I start with what will have the biggest long-term impact. Then I separate what's urgent from what's actually important." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "My problem is that everything feels urgent. I end up completely [[reactive:only responding to things as they happen]]." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I used to be the same. Now I [[allocate:assign]] my [[peak:best]] hours — nine to eleven — to deep work. Notifications stay off." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "And the afternoon?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Meetings and admin, when my [[bandwidth:mental capacity]] is lower. I also try to cut [[busywork:tasks that achieve little]] — things that look productive but don't move me forward." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "I definitely underestimate the [[magnitude:size or importance]] of some projects and start them too late." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "A simple [[hierarchy:ranking by importance]] helps: three must-dos, then everything else. It keeps you [[proactive:acting before problems appear]] instead of firefighting." },
  ],

  practiceTime: {
    instructions: "Role-play this conversation with your teacher. Complete each blank out loud using the vocabulary and phrases from this lesson, then add your own detail.",
    lines: [
      { speaker: 'Teacher', text: "How do you decide what to prioritize each day?" },
      { speaker: 'Student', text: "I {{separate what's urgent from what's actually important}}." },
      { speaker: 'Teacher', text: "What do you do first?" },
      { speaker: 'Student', text: "I start with what will have the biggest {{long-term impact}}. How do you decide what to prioritize?" },
      { speaker: 'Teacher', text: "I start with {{what will have the biggest long-term impact}} and {{allocate}} my mornings to deep work. When are your peak hours?" },
      { speaker: 'Student', text: "My {{peak}} hours are between {{nine and eleven}}. I {{allocate}} them to difficult tasks." },
      { speaker: 'Teacher', text: "What about when you're tired?" },
      { speaker: 'Student', text: "I assess my {{bandwidth}} and plan lighter tasks." },
      { speaker: 'Teacher', text: "Do you answer every email immediately?" },
      { speaker: 'Student', text: "No, that makes me {{reactive}}. I prefer to be {{proactive}}." },
      { speaker: 'Teacher', text: "What tasks do you try to avoid?" },
      { speaker: 'Student', text: "{{Busywork}} — tasks that look productive but don't move me forward." },
      { speaker: 'Teacher', text: "How do you organise your list?" },
      { speaker: 'Student', text: "I create a {{hierarchy}} of tasks: three must-dos, then everything else." },
    ],
  },

  matchingExercise: [
    { word: 'BANDWIDTH', definition: 'Mental or emotional capacity' },
    { word: 'HIERARCHY', definition: 'A ranking by importance' },
    { word: 'ALLOCATE', definition: 'To assign time or resources' },
    { word: 'PROACTIVE', definition: 'Acting before problems appear' },
    { word: 'BUSYWORK', definition: 'Tasks that keep you busy but achieve little' },
    { word: 'MAGNITUDE', definition: 'Size or importance' },
  ],

  fillBlankExercise: [
    { before: 'I separate what\'s urgent from what\'s actually', after: '.', answer: 'important' },
    { before: 'My', after: 'is limited in the mornings.', answer: 'bandwidth' },
    { before: 'I', after: 'my early hours to difficult tasks.', answer: 'allocate' },
    { before: 'I structure my day around my', after: 'performance times.', answer: 'peak' },
    { before: 'I underestimated the', after: 'of that project.', answer: 'magnitude' },
    { before: 'Planning early keeps me', after: '.', answer: 'proactive' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the difference between urgent and important?', options: ['They mean the same', 'Urgent = needs attention now; important = matters for your goals', 'Important = needs attention now', 'Urgent tasks are always important'], correctIndex: 1 },
    { question: 'What is "busywork"?', options: ['Very important work', 'Tasks that keep you busy but achieve little', 'Work done in a team', 'Overtime'], correctIndex: 1 },
    { question: 'What does "bandwidth" mean in this context?', options: ['Internet speed', 'Mental or emotional capacity', 'A type of schedule', 'A salary'], correctIndex: 1 },
    { question: 'What is the opposite of "proactive"?', options: ['Reactive', 'Productive', 'Active', 'Positive'], correctIndex: 0 },
    { question: "In the dialogue, what are Rosie's peak hours?", options: ['7 to 9', '9 to 11', '1 to 3', '4 to 6'], correctIndex: 1 },
    { question: 'What does Rosie do in the afternoon?', options: ['Deep work', 'Meetings and admin', 'Exercise', 'Nothing'], correctIndex: 1 },
  ],
};
