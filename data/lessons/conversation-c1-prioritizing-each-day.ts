import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-c1-prioritizing-each-day-${s}.png`;

export const conversationC1PrioritizingEachDay: Lesson = {
  slug: 'conversation-c1-prioritizing-each-day',
  title: 'How Do You Decide What to Prioritize Each Day?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 4',
  level: 'C1-C2',
  description:
    'Discuss decision-making and time management at an advanced level: urgent vs important, mental bandwidth, peak performance and avoiding "busywork".',
  heroImage: img('hero'),

  objectives: [
    'Explain how you prioritise tasks with precise language.',
    'Distinguish between urgent and important work.',
    'Use vocabulary such as bandwidth, allocate, hierarchy and proactive.',
  ],

  vocabulary: [
    { word: 'BANDWIDTH', partOfSpeech: 'noun', definition: 'Your mental or emotional capacity to handle tasks.', example: "My bandwidth is limited in the mornings.", imageSlug: img('bandwidth') },
    { word: 'HIERARCHY', partOfSpeech: 'noun', definition: 'An order that ranks things by importance.', example: 'I create a hierarchy of tasks before I start.', imageSlug: img('hierarchy') },
    { word: 'MAGNITUDE', partOfSpeech: 'noun', definition: 'The size or importance of something.', example: 'I underestimated the magnitude of that project.', imageSlug: img('magnitude') },
    { word: 'ALLOCATE', partOfSpeech: 'verb', definition: 'To assign time, energy or resources to something.', example: 'I allocate my early hours to difficult tasks.', imageSlug: img('allocate') },
    { word: 'PROACTIVE', partOfSpeech: 'adjective', definition: 'Taking action before problems appear.', example: 'Planning early keeps me proactive rather than reactive.', imageSlug: img('proactive') },
    { word: 'REACTIVE', partOfSpeech: 'adjective', definition: 'Only responding to things as they happen.', example: 'Answering every email instantly makes me reactive.', imageSlug: img('reactive') },
    { word: 'BUSYWORK', partOfSpeech: 'noun', definition: 'Tasks that keep you busy but achieve little.', example: 'Reorganising folders is often just busywork.', imageSlug: img('busywork') },
    { word: 'PEAK', partOfSpeech: 'adjective', definition: 'The highest or best point.', example: 'My peak hours are between nine and eleven.', imageSlug: img('peak') },
  ],

  phrasalVerbs: [
    { phrase: 'I separate what\'s urgent from what\'s actually important.', tag: 'phrase', definition: 'You differentiate immediate tasks from meaningful ones.', example: '"Not every urgent email is important. I separate the two."', inAction: 'URGENT = needs attention now. IMPORTANT = matters for your goals. The best work is often important but NOT urgent.', imageSlug: img('urgent-important') },
    { phrase: 'I start with what will have the biggest long-term impact.', tag: 'phrase', definition: 'You focus on high-value tasks first.', example: '"I start with what will have the biggest long-term impact, even if it\'s hard."', imageSlug: img('long-term-impact') },
    { phrase: 'I assess my bandwidth for the day.', tag: 'phrase', definition: 'You consider your energy level before planning.', example: '"After a bad night\'s sleep, I assess my bandwidth and plan lighter tasks."', imageSlug: img('assess-bandwidth') },
    { phrase: 'I structure my day around my peak performance times.', tag: 'phrase', definition: 'You plan based on when you work best.', example: '"I structure my day around my peak performance times — mornings for deep work."', imageSlug: img('peak-times') },
    { phrase: "I limit tasks that look productive but don't move me forward.", tag: 'phrase', definition: 'You avoid busywork.', example: '"I limit tasks that look productive but don\'t move me forward."', imageSlug: img('limit-busywork') },
    { phrase: 'I try not to react to everything that feels urgent.', tag: 'phrase', definition: 'You avoid stress-driven decision-making.', example: '"I try not to react to everything that feels urgent — notifications are off until eleven."', imageSlug: img('not-react') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "You always seem to get the important things done, Kira. How do you decide what to prioritize each day?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I start with what will have the biggest long-term impact. Then I separate what's urgent from what's actually important." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "My problem is that everything feels urgent. I end up completely [[reactive:only responding to things as they happen]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I used to be the same. Now I [[allocate:assign]] my [[peak:best]] hours — nine to eleven — to deep work. Notifications stay off." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And the afternoon?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Meetings and admin, when my [[bandwidth:mental capacity]] is lower. I also try to cut [[busywork:tasks that achieve little]] — things that look productive but don't move me forward." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I definitely underestimate the [[magnitude:size or importance]] of some projects and start them too late." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "A simple [[hierarchy:ranking by importance]] helps: three must-dos, then everything else. It keeps you [[proactive:acting before problems appear]] instead of firefighting." },
  ],

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
    { question: "In the dialogue, what are Kira's peak hours?", options: ['7 to 9', '9 to 11', '1 to 3', '4 to 6'], correctIndex: 1 },
    { question: 'What does Kira do in the afternoon?', options: ['Deep work', 'Meetings and admin', 'Exercise', 'Nothing'], correctIndex: 1 },
  ],
};
