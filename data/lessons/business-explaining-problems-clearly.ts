import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-explaining-problems-clearly-${s}.png`;

export const businessExplainingProblemsClearly: Lesson = {
  slug: 'business-explaining-problems-clearly',
  title: 'Explaining Problems Clearly',
  subtitle: 'B1-B2 · Problem Solving · Lesson 4',
  level: 'B1-B2',
  description:
    'Learn how to report a problem at work in a clear, calm way: describe the issue, explain the cause and the impact, and say what you are doing about it.',
  heroImage: img('hero'),

  objectives: [
    'Introduce a problem clearly and calmly.',
    'Explain the cause and the impact of the problem.',
    'Reassure people that action is being taken.',
  ],

  vocabulary: [
    { word: 'ISSUE', partOfSpeech: 'noun', definition: 'A problem or situation that needs attention.', example: 'Kira reported the issue to the manager.', imageSlug: img('issue') },
    { word: 'DELAY', partOfSpeech: 'noun / verb', definition: 'When something happens later than planned.', example: 'Kira explained the reason for the delay.', imageSlug: img('delay') },
    { word: 'CAUSE', partOfSpeech: 'noun / verb', definition: 'The reason why something happens.', example: 'We found the cause after checking the files.', imageSlug: img('cause') },
    { word: 'AFFECT', partOfSpeech: 'verb', definition: 'To change or influence something.', example: 'The delay affected our schedule.', imageSlug: img('affect') },
    { word: 'SOLUTION', partOfSpeech: 'noun', definition: 'A way to fix a problem.', example: 'Tim suggested a simple solution.', imageSlug: img('solution') },
  ],

  phrasalVerbs: [
    { phrase: 'RUN INTO (A PROBLEM)', definition: 'To experience a problem, usually unexpectedly.', example: 'We ran into a delay with the shipment.', imageSlug: img('run-into') },
    { phrase: 'DEAL WITH', definition: 'To manage or fix something.', example: "Kira dealt with the client's complaint.", imageSlug: img('deal-with') },
    { phrase: 'FIGURE OUT', definition: 'To find the reason or the answer.', example: 'Tim is trying to figure out what went wrong.', imageSlug: img('figure-out') },
    { phrase: 'SORT OUT', definition: 'To organize or solve something.', example: "Let's sort out the issue this afternoon.", imageSlug: img('sort-out') },
    { phrase: 'FOLLOW UP (ON)', definition: 'To check progress later.', example: "I'll follow up on the problem tomorrow.", imageSlug: img('follow-up') },
    { phrase: 'There seems to be a problem with…', tag: 'phrase', definition: 'Introduce the issue in a calm, polite way.', example: '"There seems to be a problem with the login page."', inAction: '"There seems to be…" sounds calmer than "There is a big problem!". It keeps people relaxed while you explain.', imageSlug: img('seems-to-be') },
    { phrase: 'The issue was caused by…', tag: 'phrase', definition: 'Explain the reason.', example: '"The issue was caused by a server error."', imageSlug: img('caused-by') },
    { phrase: 'This problem affects…', tag: 'phrase', definition: 'Show the impact.', example: '"This problem affects all customer orders."', imageSlug: img('affects') },
    { phrase: "We've already taken steps to fix it.", tag: 'phrase', definition: 'Reassure someone that action has been taken.', example: '"We\'ve already taken steps to fix it by updating the system."', imageSlug: img('taken-steps') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Tim, do you have a minute? There seems to be a problem with the online shop.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Sure. What kind of [[issue:problem]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Customers can't pay by card. We [[ran into:experienced]] it this morning at about nine." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'That\'s serious. Do we know the [[cause:the reason]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'The issue was caused by an update to the payment system last night. This problem [[affects:changes or influences]] all orders above 50 euros.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'OK. How are we [[dealing with:managing]] it?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "We've already taken steps to fix it. IT is trying to [[figure out:find]] which setting changed. For now, customers can pay by PayPal." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Good. That's a smart temporary [[solution:a way to fix a problem]]. Will there be a [[delay:happening later than planned]] for orders?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maybe a few hours. I'll [[follow up on:check progress on]] it with IT at two o'clock and update you." },
  ],

  matchingExercise: [
    { word: 'ISSUE', definition: 'A problem that needs attention' },
    { word: 'CAUSE', definition: 'The reason why something happens' },
    { word: 'AFFECT', definition: 'To change or influence something' },
    { word: 'RUN INTO', definition: 'To experience a problem' },
    { word: 'FIGURE OUT', definition: 'To find the reason or answer' },
    { word: 'FOLLOW UP', definition: 'To check progress later' },
  ],

  fillBlankExercise: [
    { before: 'There seems to be a', after: 'with the login page.', answer: 'problem' },
    { before: 'The issue was caused', after: 'a server error.', answer: 'by' },
    { before: 'This problem', after: 'all customer orders.', answer: 'affects' },
    { before: "We've already taken", after: 'to fix it.', answer: 'steps' },
    { before: 'We ran', after: 'a delay with the shipment.', answer: 'into' },
    { before: "Let's sort", after: 'the issue this afternoon.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase introduces a problem calmly?', options: ['Everything is broken!', 'There seems to be a problem with…', 'It\'s not my fault.', 'Help!'], correctIndex: 1 },
    { question: 'Which phrase explains the reason?', options: ['The issue was caused by…', 'This problem affects…', 'We\'ve already taken steps…', 'Could you help me?'], correctIndex: 0 },
    { question: 'What does "figure out" mean?', options: ['Draw a picture', 'Find the reason or answer', 'Count numbers', 'Leave the office'], correctIndex: 1 },
    { question: 'What does "affect" mean?', options: ['To change or influence', 'To fix', 'To ignore', 'To report'], correctIndex: 0 },
    { question: 'In the dialogue, what is the problem?', options: ['The website is slow', 'Customers can\'t pay by card', 'The office has no internet', 'Orders are lost'], correctIndex: 1 },
    { question: 'What is the temporary solution?', options: ['Close the shop', 'Customers pay by PayPal', 'Customers call the office', 'Give discounts'], correctIndex: 1 },
  ],
};
