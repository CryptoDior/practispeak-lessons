import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-wrapping-up-assigning-tasks-${s}.png`;

export const businessWrappingUpAssigningTasks: Lesson = {
  slug: 'business-wrapping-up-assigning-tasks',
  title: 'Wrapping Up and Assigning Tasks',
  subtitle: 'B1-B2 · Leading Meetings · Lesson 6',
  level: 'B1-B2',
  description:
    'Learn how to end a meeting effectively: summarize decisions, agree on action points, assign tasks with clear deadlines and thank everyone.',
  heroImage: img('hero'),

  objectives: [
    'Signal that the meeting is ending and summarize decisions.',
    'List action points and assign tasks.',
    'Set deadlines and close the meeting politely.',
  ],

  vocabulary: [
    { word: 'WRAP UP', partOfSpeech: 'phrasal verb', definition: 'To finish or end something.', example: "Let's wrap up the meeting in five minutes.", imageSlug: img('wrap-up') },
    { word: 'SUMMARY', partOfSpeech: 'noun', definition: 'A short statement of the main ideas.', example: "I'll send a summary of the meeting by email.", imageSlug: img('summary') },
    { word: 'TASK', partOfSpeech: 'noun', definition: 'A piece of work that someone must do.', example: 'My task is to write the report.', imageSlug: img('task') },
    { word: 'DEADLINE', partOfSpeech: 'noun', definition: 'The final time or date when something must be finished.', example: 'The deadline for this project is Friday.', imageSlug: img('deadline') },
    { word: 'ACTION POINTS', partOfSpeech: 'noun', definition: 'The things people agree to do after a meeting.', example: 'The action points are clear and simple.', imageSlug: img('action-points') },
    { word: 'ASSIGN', partOfSpeech: 'verb', definition: 'To give someone a task or responsibility.', example: 'The manager assigned me to prepare the slides.', imageSlug: img('assign') },
  ],

  phrasalVerbs: [
    { phrase: "Let's wrap up the meeting.", tag: 'phrase', definition: 'Signal that the meeting is ending.', example: '"We\'re almost out of time. Let\'s wrap up the meeting."', imageSlug: img('lets-wrap-up') },
    { phrase: 'To summarize, we decided to…', tag: 'phrase', definition: 'Give a short review of the decisions.', example: '"To summarize, we decided to focus on training and update the budget."', imageSlug: img('to-summarize') },
    { phrase: 'The action points are…', tag: 'phrase', definition: 'List the tasks for after the meeting.', example: '"The action points are: Tim will update the report, Maria will call the client."', imageSlug: img('the-action-points-are') },
    { phrase: "I'll assign this task to…", tag: 'phrase', definition: 'Give someone responsibility for a task.', example: '"I\'ll assign the budget review to Tim."', imageSlug: img('ill-assign') },
    { phrase: 'The deadline is…', tag: 'phrase', definition: 'Set the time limit for a task.', example: '"The deadline is Friday at 5 p.m."', inAction: 'Every action point needs three things: WHO, WHAT and WHEN. Without a deadline, tasks are easy to forget.', imageSlug: img('the-deadline-is') },
    { phrase: 'Thank you, everyone, for your time.', tag: 'phrase', definition: 'Close the meeting politely.', example: '"Thank you, everyone, for your time and ideas."', imageSlug: img('thank-you-everyone') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "OK, we have ten minutes left. Let's [[wrap up:finish]] the meeting." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'To summarize, we decided to launch the training in May and move the new targets to June.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Now, the [[action points:things to do after the meeting]]. Tim, can you update the sales report?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Sure. When do you need it?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'The [[deadline:the final date]] is Friday at 5 p.m. Maria, I\'ll [[assign:give]] the training plan to you.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "No problem. I'll have a draft by next Wednesday. Is that OK?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. And my [[task:a piece of work to do]] is to email the [[summary:short statement of the main ideas]] to everyone today." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Great. Should we meet again in two weeks?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Yes, I\'ll send an invite. Thank you, everyone, for your time and ideas.' },
  ],

  matchingExercise: [
    { word: 'WRAP UP', definition: 'To finish something' },
    { word: 'SUMMARY', definition: 'A short statement of the main ideas' },
    { word: 'TASK', definition: 'A piece of work someone must do' },
    { word: 'DEADLINE', definition: 'The final date to finish something' },
    { word: 'ACTION POINTS', definition: 'Things to do after a meeting' },
    { word: 'ASSIGN', definition: 'To give someone a task' },
  ],

  fillBlankExercise: [
    { before: "Let's", after: 'up the meeting in five minutes.', answer: 'wrap' },
    { before: 'To', after: ', we decided to hire two new people.', answer: 'summarize' },
    { before: 'The action', after: 'are clear: Tim will call the client.', answer: 'points' },
    { before: "I'll", after: 'this task to Maria.', answer: 'assign' },
    { before: 'The', after: 'is Friday at 5 p.m.', answer: 'deadline' },
    { before: 'Thank you, everyone, for your', after: '.', answer: 'time' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "wrap up" mean?', options: ['Start', 'Finish', 'Give a present', 'Interrupt'], correctIndex: 1 },
    { question: 'What three things should every action point have?', options: ['Who, what and when', 'Slides, notes and coffee', 'Why, where and how', 'A title, a picture and a link'], correctIndex: 0 },
    { question: 'Which phrase gives someone a task?', options: ["I'll assign this to Tim.", "Let's begin.", 'Go ahead.', 'In my opinion…'], correctIndex: 0 },
    { question: 'What is a "deadline"?', options: ['A meeting room', 'The final date to finish something', 'A type of report', 'A long meeting'], correctIndex: 1 },
    { question: 'In the dialogue, what is Tim\'s task?', options: ['Write the training plan', 'Update the sales report', 'Send the summary', 'Book a room'], correctIndex: 1 },
    { question: 'When will Maria have a draft of the training plan?', options: ['Friday', 'Today', 'Next Wednesday', 'In two weeks'], correctIndex: 2 },
  ],
};
