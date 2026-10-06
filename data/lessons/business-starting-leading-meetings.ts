import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-starting-leading-meetings-${s}.png`;

export const businessStartingLeadingMeetings: Lesson = {
  slug: 'business-starting-leading-meetings',
  title: 'Starting and Leading Meetings',
  subtitle: 'B1-B2 · Leading Meetings · Lesson 1',
  level: 'B1-B2',
  description:
    'Learn how to open a meeting with confidence: state the purpose, introduce the agenda, invite comments and keep the discussion moving towards a decision.',
  heroImage: img('hero'),

  objectives: [
    'Open a meeting and explain its purpose.',
    'Introduce and move through agenda points.',
    'Invite participation and steer the group towards a decision.',
  ],

  vocabulary: [
    { word: 'AGENDA', partOfSpeech: 'noun', definition: 'A list of topics to discuss in a meeting, in order.', example: 'We have three items on the agenda today.', imageSlug: img('agenda') },
    { word: 'PURPOSE', partOfSpeech: 'noun', definition: 'The reason why you are doing something.', example: 'The purpose of this meeting is to share the Q3 results.', imageSlug: img('purpose') },
    { word: 'CHAIR', partOfSpeech: 'verb', definition: 'To lead and control a meeting.', example: "Anna will chair today's meeting.", imageSlug: img('chair') },
    { word: 'PARTICIPANTS', partOfSpeech: 'noun', definition: 'The people who take part in a meeting.', example: 'There are ten participants on the call.', imageSlug: img('participants') },
    { word: 'DISCUSSION', partOfSpeech: 'noun', definition: 'A conversation where people share ideas about a topic.', example: 'We had a long discussion about the budget.', imageSlug: img('discussion') },
    { word: 'DECISION', partOfSpeech: 'noun', definition: 'A choice you make after thinking about the options.', example: 'The team made an important decision.', imageSlug: img('decision') },
  ],

  phrasalVerbs: [
    { phrase: "Let's begin the meeting.", tag: 'phrase', definition: 'A clear, professional way to start.', example: '"Good morning, everyone. Let\'s begin the meeting and look at the agenda."', imageSlug: img('lets-begin') },
    { phrase: "The purpose of today's meeting is…", tag: 'phrase', definition: 'Use this to explain why everyone is there.', example: '"The purpose of today\'s meeting is to plan our Q4 strategy."', inAction: 'Say the purpose in the first minute. It helps everyone focus and keeps the meeting short.', imageSlug: img('purpose-phrase') },
    { phrase: 'First, we will discuss…', tag: 'phrase', definition: 'Use this to introduce the first agenda point.', example: '"First, we will discuss last month\'s results."', imageSlug: img('first-we-will-discuss') },
    { phrase: 'Does anyone have any comments before we start?', tag: 'phrase', definition: 'Use this to invite people to speak.', example: '"Does anyone have any comments before we start the first point?"', imageSlug: img('any-comments') },
    { phrase: "Let's move on to the next point.", tag: 'phrase', definition: 'Use this to change to the next topic.', example: '"Thanks, Tim. Let\'s move on to the next point on the agenda."', imageSlug: img('move-on') },
    { phrase: 'We need to make a decision about…', tag: 'phrase', definition: 'Use this to focus the group on a result.', example: '"We need to make a decision about the new project timeline today."', imageSlug: img('make-a-decision') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good morning, everyone. Let's begin. I'll [[chair:lead and control]] today's meeting." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "The [[purpose:the reason]] of today's meeting is to plan the product launch. We have three items on the [[agenda:list of topics to discuss]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'First, we will discuss the launch date. Does anyone have any comments before we start?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Just one. Maria from marketing will join us in ten minutes.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Thanks, Tim. So, the launch date. Our options are 1st or 15th of March. Tim, what's your view?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'The 15th gives the sales team more time to prepare.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Sorry I'm late. I agree with Tim. Marketing also needs those two extra weeks." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Great. It sounds like all [[participants:people in the meeting]] agree. So our [[decision:choice after thinking]] is the 15th. Let's move on to the next point: the budget." },
  ],

  matchingExercise: [
    { word: 'AGENDA', definition: 'A list of topics to discuss' },
    { word: 'PURPOSE', definition: 'The reason for doing something' },
    { word: 'CHAIR', definition: 'To lead a meeting' },
    { word: 'PARTICIPANTS', definition: 'The people in a meeting' },
    { word: 'DISCUSSION', definition: 'A conversation to share ideas' },
    { word: 'DECISION', definition: 'A choice made after thinking' },
  ],

  fillBlankExercise: [
    { before: 'We have three items on the', after: 'today.', answer: 'agenda' },
    { before: "The", after: "of today's meeting is to plan our strategy.", answer: 'purpose' },
    { before: 'Anna will', after: 'the meeting while the manager is away.', answer: 'chair' },
    { before: 'Does anyone have any', after: 'before we start?', answer: 'comments' },
    { before: "Let's move on to the next", after: '.', answer: 'point' },
    { before: 'We need to make a', after: 'about the timeline.', answer: 'decision' },
  ],

  multipleChoiceExercise: [
    { question: 'What is an "agenda"?', options: ['A list of topics for a meeting', 'The meeting room', 'The final decision', 'A report after the meeting'], correctIndex: 0 },
    { question: 'Which phrase invites people to speak?', options: ["Let's begin.", 'Does anyone have any comments?', 'In conclusion…', 'The deadline is Friday.'], correctIndex: 1 },
    { question: 'You want to change to the next topic. What do you say?', options: ["Let's move on to the next point.", "Let's begin the meeting.", 'I disagree.', 'Thank you for listening.'], correctIndex: 0 },
    { question: 'What does "chair a meeting" mean?', options: ['Bring chairs', 'Lead the meeting', 'Arrive late', 'Take notes'], correctIndex: 1 },
    { question: 'In the dialogue, what is the meeting about?', options: ['Hiring', 'The product launch', 'A new office', 'Holidays'], correctIndex: 1 },
    { question: 'What launch date does the team choose?', options: ['1st March', '15th March', '1st April', 'They did not decide'], correctIndex: 1 },
  ],
};
