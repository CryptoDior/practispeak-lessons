import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-leading-complex-discussions-${s}.png`;

export const businessLeadingComplexDiscussions: Lesson = {
  slug: 'business-leading-complex-discussions',
  title: 'Leading Complex Discussions',
  subtitle: 'C1-C2 · Meetings & Negotiation · Lesson 1',
  level: 'C1-C2',
  description:
    'Learn how to facilitate demanding discussions: manage divergent opinions, keep debates on track, mediate disagreements and steer the group to consensus.',
  heroImage: img('hero'),

  objectives: [
    'Facilitate a discussion with many different viewpoints.',
    'Manage time and interrupt diplomatically.',
    'Summarise progress and move the group to a decision.',
  ],

  vocabulary: [
    { word: 'FACILITATE', partOfSpeech: 'verb', definition: 'To make a discussion or process easier and smoother.', example: 'Kira facilitated the meeting to keep it productive.', imageSlug: img('facilitate') },
    { word: 'CONSENSUS', partOfSpeech: 'noun', definition: 'A general agreement reached by a group.', example: 'We reached a consensus after a long debate.', imageSlug: img('consensus') },
    { word: 'DIVERGENT', partOfSpeech: 'adjective', definition: 'Different or going in opposite directions.', example: 'Maria presented a divergent opinion that sparked debate.', imageSlug: img('divergent') },
    { word: 'MEDIATE', partOfSpeech: 'verb', definition: 'To help people in conflict reach an agreement.', example: 'I was asked to mediate between the two teams.', imageSlug: img('mediate') },
    { word: 'DELEGATE', partOfSpeech: 'verb', definition: 'To give part of your work or responsibility to someone else.', example: 'She delegated the follow-up report to Tim.', imageSlug: img('delegate') },
    { word: 'ON TRACK', partOfSpeech: 'phrase', definition: 'Focused and progressing as planned.', example: 'My job is to keep the discussion on track.', imageSlug: img('on-track') },
  ],

  phrasalVerbs: [
    { phrase: 'BRING UP', definition: 'To introduce a new topic.', example: 'Tim brought up a valid point about deadlines.', imageSlug: img('bring-up') },
    { phrase: 'CUT OFF', definition: 'To stop someone speaking (politely, to stay on time).', example: 'She politely cut off the debate to stay on schedule.', imageSlug: img('cut-off') },
    { phrase: 'SUM UP', definition: 'To summarise the main points.', example: 'Let me sum up where we are.', imageSlug: img('sum-up') },
    { phrase: "We're hearing some divergent views here.", tag: 'phrase', definition: 'Name the disagreement neutrally.', example: '"We\'re hearing some divergent views here — let\'s unpack them."', imageSlug: img('divergent-views') },
    { phrase: "I'm conscious of time, so let's…", tag: 'phrase', definition: 'Interrupt diplomatically to manage time.', example: '"I\'m conscious of time, so let\'s hear one more view and then decide."', inAction: 'Framing an interruption around a shared constraint ("time", "our goal today") makes it impersonal and easier to accept.', imageSlug: img('conscious-of-time') },
    { phrase: "Let's park that and come back to it.", tag: 'phrase', definition: 'Postpone a side issue.', example: '"Good point, but it\'s off-topic. Let\'s park that and come back to it."', imageSlug: img('park') },
    { phrase: 'Can we agree on at least…?', tag: 'phrase', definition: 'Build partial consensus.', example: '"Can we agree on at least the budget, and revisit the timeline next week?"', imageSlug: img('agree-at-least') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Thanks for joining. I'll [[facilitate:make the discussion smoother]] today. Our goal is to decide on the new pricing model." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I think a subscription model is the obvious choice. It's predictable revenue." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I strongly disagree. Our clients hate long commitments. We'd lose half of them." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "OK, we're hearing some [[divergent:different, opposite]] views here. Maria, can you say more about the client feedback?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Sure. In the survey, 60% preferred pay-as-you-go. And while I'm talking — the website redesign is also a problem —" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Important point, but let's park that and come back to it. I'm conscious of time, so let me [[sum up:summarise]]: Tim wants predictability; Maria wants flexibility." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "What about a hybrid? A monthly plan with no long contract." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Can we agree on at least testing that? Good — that's [[consensus:general agreement]]. Tim, I'll [[delegate:give the task to]] the pilot design to you." },
  ],

  matchingExercise: [
    { word: 'FACILITATE', definition: 'To make a discussion easier and smoother' },
    { word: 'DIVERGENT', definition: 'Different or opposite' },
    { word: 'MEDIATE', definition: 'To help people in conflict agree' },
    { word: 'DELEGATE', definition: 'To give work to someone else' },
    { word: 'SUM UP', definition: 'To summarise' },
    { word: 'CUT OFF', definition: 'To stop someone speaking' },
  ],

  fillBlankExercise: [
    { before: "We're hearing some", after: 'views here.', answer: 'divergent' },
    { before: "I'm conscious of", after: ", so let's decide.", answer: 'time' },
    { before: "Let's", after: 'that and come back to it.', answer: 'park' },
    { before: 'Can we agree on at', after: 'the budget?', answer: 'least' },
    { before: 'Tim brought', after: 'a valid point about deadlines.', answer: 'up' },
    { before: 'Let me sum', after: 'where we are.', answer: 'up' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "facilitate" mean?', options: ['Make a process easier', 'Cancel a meeting', 'Take notes', 'Win an argument'], correctIndex: 0 },
    { question: 'Why say "I\'m conscious of time" before interrupting?', options: ['It sounds rude', 'It frames the interruption around a shared constraint', 'It ends the meeting', 'It is a question'], correctIndex: 1 },
    { question: 'Which phrase builds partial consensus?', options: ['Can we agree on at least…?', 'You are wrong.', "Let's start.", 'Any questions?'], correctIndex: 0 },
    { question: 'In the dialogue, what percentage of clients preferred pay-as-you-go?', options: ['40%', '50%', '60%', '75%'], correctIndex: 2 },
    { question: 'What compromise does Tim suggest?', options: ['Free trial', 'A monthly plan with no long contract', 'Raising prices', 'Cancelling the product'], correctIndex: 1 },
  ],
};
