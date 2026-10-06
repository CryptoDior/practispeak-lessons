import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-reaching-agreements-${s}.png`;

export const businessReachingAgreements: Lesson = {
  slug: 'business-reaching-agreements',
  title: 'Reaching Agreements',
  subtitle: 'B1-B2 · Problem Solving · Lesson 6',
  level: 'B1-B2',
  description:
    'Learn how to bring a discussion to a clear agreement: check that everyone agrees, sum up the decision, confirm next steps and close positively.',
  heroImage: img('hero'),

  objectives: [
    'Confirm that the whole group agrees.',
    'Sum up a decision and the next steps.',
    'Close a discussion in a positive way.',
  ],

  vocabulary: [
    { word: 'AGREE', partOfSpeech: 'verb', definition: 'To have the same opinion or accept a decision.', example: 'The managers finally agreed after a long discussion.', imageSlug: img('agree') },
    { word: 'DECISION', partOfSpeech: 'noun', definition: 'A choice made after talking or thinking.', example: 'We need to make a final decision today.', imageSlug: img('decision') },
    { word: 'CONFIRM', partOfSpeech: 'verb', definition: 'To make sure something is correct or agreed.', example: 'Please confirm the time by email.', imageSlug: img('confirm') },
    { word: 'AGREEABLE', partOfSpeech: 'adjective', definition: 'Acceptable to everyone.', example: 'Kira suggested an agreeable solution.', imageSlug: img('agreeable') },
    { word: 'CONSENSUS', partOfSpeech: 'noun', definition: 'An agreement shared by the whole group.', example: 'The meeting ended with full consensus.', imageSlug: img('consensus') },
  ],

  phrasalVerbs: [
    { phrase: 'GO OVER', definition: 'To review or check again.', example: "Let's go over the details one more time.", imageSlug: img('go-over') },
    { phrase: 'STICK TO', definition: 'To continue with a decision or plan.', example: "We'll stick to the new plan.", imageSlug: img('stick-to') },
    { phrase: 'SUM UP', definition: 'To give the main points briefly.', example: 'Tim summed up what we agreed.', imageSlug: img('sum-up') },
    { phrase: 'COME TO (AN AGREEMENT)', definition: 'To reach a decision together.', example: 'They came to an agreement after negotiation.', imageSlug: img('come-to') },
    { phrase: 'FOLLOW UP', definition: 'To take further action after a meeting.', example: 'Kira will follow up with the client tomorrow.', imageSlug: img('follow-up') },
    { phrase: 'Yes, I agree completely.', tag: 'phrase', definition: 'Confirm strong agreement.', example: '"Yes, I agree completely. Let\'s go with option B."', imageSlug: img('agree-completely') },
    { phrase: 'Do we all agree?', tag: 'phrase', definition: 'Check for consensus.', example: '"So, launch on the 15th. Do we all agree?"', inAction: 'Always check the whole group, not just the loudest person. Silence doesn\'t always mean "yes".', imageSlug: img('do-we-all-agree') },
    { phrase: "Let's confirm the next steps.", tag: 'phrase', definition: 'Summarize decisions and actions.', example: '"Great. Let\'s confirm the next steps before we finish."', imageSlug: img('confirm-next-steps') },
    { phrase: "Good work, everyone. Let's move forward.", tag: 'phrase', definition: 'Close the discussion positively.', example: '"Good work, everyone. Let\'s move forward with the plan."', imageSlug: img('move-forward') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "We've discussed the new supplier for an hour. I think we're close to a [[decision:a final choice]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I prefer Supplier B. Their prices are 10% lower, and delivery is faster.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Yes, I agree completely. Their quality is also good.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Let's [[go over:review again]] the main risk first: they're a new company. Can we start with a six-month contract?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's an [[agreeable:acceptable to everyone]] solution. It protects us if there are problems." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'So, Supplier B with a six-month contract. Do we all [[agree:accept the decision]]?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Agreed.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Agreed. We have [[consensus:agreement from the whole group]].' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Let me [[sum up:give the main points]]. Tim will [[confirm:make sure it's agreed]] the prices by email, and I'll [[follow up:take action after]] with their sales manager on Monday. Good work, everyone. Let's move forward." },
  ],

  matchingExercise: [
    { word: 'DECISION', definition: 'A choice made after discussion' },
    { word: 'CONSENSUS', definition: 'Agreement from the whole group' },
    { word: 'AGREEABLE', definition: 'Acceptable to everyone' },
    { word: 'GO OVER', definition: 'To review again' },
    { word: 'STICK TO', definition: 'To continue with a decision' },
    { word: 'SUM UP', definition: 'To give the main points briefly' },
  ],

  fillBlankExercise: [
    { before: 'Yes, I agree', after: '.', answer: 'completely' },
    { before: "Let's", after: 'the next steps.', answer: 'confirm' },
    { before: "Let's go", after: 'the details one more time.', answer: 'over' },
    { before: "We'll stick", after: 'the new plan.', answer: 'to' },
    { before: 'The meeting ended with full', after: '.', answer: 'consensus' },
    { before: "Good work, everyone. Let's move", after: '.', answer: 'forward' },
  ],

  multipleChoiceExercise: [
    { question: 'What is "consensus"?', options: ['A disagreement', 'Agreement from the whole group', 'A type of report', 'A deadline'], correctIndex: 1 },
    { question: 'Which phrase checks that everyone agrees?', options: ['Do we all agree?', 'Go ahead.', "I'm afraid I don't agree.", 'There seems to be a problem.'], correctIndex: 0 },
    { question: 'What does "stick to" mean?', options: ['Glue something', 'Continue with a decision', 'Change your mind', 'Leave early'], correctIndex: 1 },
    { question: 'Which phrase closes a discussion positively?', options: ["Good work, everyone. Let's move forward.", "Let's begin.", 'Sorry to interrupt.', 'Can you clarify that?'], correctIndex: 0 },
    { question: 'In the dialogue, why do they choose Supplier B?', options: ['They are famous', 'Lower prices and faster delivery', 'They are local', 'They are the biggest'], correctIndex: 1 },
    { question: 'How long is the first contract?', options: ['One month', 'Six months', 'One year', 'Two years'], correctIndex: 1 },
  ],
};
