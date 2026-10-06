import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-handling-interruptions-${s}.png`;

export const businessHandlingInterruptions: Lesson = {
  slug: 'business-handling-interruptions',
  title: 'Handling Interruptions Politely',
  subtitle: 'B1-B2 · Leading Meetings · Lesson 5',
  level: 'B1-B2',
  description:
    'Learn how to interrupt politely when you need to speak, how to stop an interruption when you are speaking, and how to get the meeting back on track.',
  heroImage: img('hero'),

  objectives: [
    'Interrupt politely to ask a question or add information.',
    'Stop an interruption politely and finish your point.',
    'Return to the topic after an interruption.',
  ],

  vocabulary: [
    { word: 'INTERRUPT', partOfSpeech: 'verb', definition: 'To stop someone while they are speaking.', example: "Please don't interrupt while I'm talking.", imageSlug: img('interrupt') },
    { word: 'APOLOGIZE', partOfSpeech: 'verb', definition: 'To say sorry for something.', example: 'He apologized for interrupting.', imageSlug: img('apologize') },
    { word: 'POLITE', partOfSpeech: 'adjective', definition: 'Showing good manners and respect.', example: 'She gave a polite response.', imageSlug: img('polite') },
    { word: 'CONTINUE', partOfSpeech: 'verb', definition: 'To keep going after a pause.', example: 'Please continue your presentation.', imageSlug: img('continue') },
    { word: 'QUESTION', partOfSpeech: 'noun', definition: 'Something you ask to get information.', example: 'Can I ask a quick question?', imageSlug: img('question') },
    { word: 'ON TRACK', partOfSpeech: 'phrase', definition: 'Following the plan; focused on the right topic.', example: "Let's keep the meeting on track.", imageSlug: img('on-track') },
  ],

  phrasalVerbs: [
    { phrase: 'Excuse me, may I ask a question?', tag: 'phrase', definition: 'A polite way to interrupt.', example: '"Excuse me, may I ask a question about the report?"', imageSlug: img('excuse-me') },
    { phrase: 'Sorry to interrupt, but…', tag: 'phrase', definition: 'A polite way to add something important.', example: '"Sorry to interrupt, but I have the updated numbers."', inAction: 'Start with an apology ("Sorry to interrupt…") and keep it short. Then give the speaker the floor back.', imageSlug: img('sorry-to-interrupt') },
    { phrase: "Please let me finish, then I'll answer.", tag: 'phrase', definition: 'Stop an interruption politely.', example: '"Please let me finish this point, then I\'ll answer your question."', imageSlug: img('let-me-finish') },
    { phrase: 'Go ahead.', tag: 'phrase', definition: 'Allow someone to speak or continue.', example: '"Yes, go ahead, Maria."', imageSlug: img('go-ahead') },
    { phrase: 'As I was saying, …', tag: 'phrase', definition: 'Return to your point after an interruption.', example: '"As I was saying, the budget for Q2 is lower."', imageSlug: img('as-i-was-saying') },
    { phrase: "Let's continue.", tag: 'phrase', definition: 'Return to the topic after a pause.', example: '"Thanks. Let\'s continue with the next slide."', imageSlug: img('lets-continue') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'So, this slide shows our Q2 budget. As you can see, marketing costs are 10% lower than…' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Sorry to [[interrupt:stop you while you speak]], Tim, but those numbers are from last month. I have the updated ones." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Oh, thanks, Maria. [[Go ahead:please speak]].' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "The real figure is 12% lower, not 10%. I'll send the new file after the meeting." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Excuse me, may I ask a [[question:something you ask]]? Why is it lower?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Good question, Kira. Please let me finish this slide, then I'll answer. It's on the next page." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Of course, sorry. Please [[continue:keep going]].' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No problem. As I was saying, costs are 12% lower… and here's why. To keep us [[on track:focused on the plan]], let's take other questions at the end." },
  ],

  matchingExercise: [
    { word: 'INTERRUPT', definition: 'To stop someone while they speak' },
    { word: 'APOLOGIZE', definition: 'To say sorry' },
    { word: 'CONTINUE', definition: 'To keep going after a pause' },
    { word: 'POLITE', definition: 'Showing good manners' },
    { word: 'GO AHEAD', definition: 'Please speak or continue' },
    { word: 'ON TRACK', definition: 'Focused on the plan' },
  ],

  fillBlankExercise: [
    { before: 'Excuse me, may I ask a', after: '?', answer: 'question' },
    { before: 'Sorry to', after: ', but I have new numbers.', answer: 'interrupt' },
    { before: 'Please let me', after: ', then I\'ll answer.', answer: 'finish' },
    { before: 'Yes, go', after: ', Maria.', answer: 'ahead' },
    { before: 'As I was', after: ', the budget is lower this year.', answer: 'saying' },
    { before: "Let's keep the meeting on", after: '.', answer: 'track' },
  ],

  multipleChoiceExercise: [
    { question: 'Which is the most polite way to interrupt?', options: ['Stop talking!', 'Sorry to interrupt, but…', 'Wait wait wait.', 'Be quiet, please.'], correctIndex: 1 },
    { question: 'Someone interrupts you. You want to finish first. What do you say?', options: ['Please let me finish, then I\'ll answer.', 'Go ahead.', 'In conclusion…', 'I respectfully disagree.'], correctIndex: 0 },
    { question: 'What does "Go ahead" mean?', options: ['Walk in front', 'Please speak or continue', 'Leave the room', 'Hurry up'], correctIndex: 1 },
    { question: 'Which phrase brings you back to your point?', options: ['As I was saying, …', 'Excuse me, …', 'Sorry to interrupt, …', 'May I ask…'], correctIndex: 0 },
    { question: 'In the dialogue, why does Maria interrupt?', options: ['She disagrees with Tim', 'The numbers are old and she has updated ones', 'She has to leave', 'She can\'t hear'], correctIndex: 1 },
    { question: 'What is the real figure for marketing costs?', options: ['10% lower', '12% lower', '15% higher', '20% lower'], correctIndex: 1 },
  ],
};
