import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-checking-consensus-${s}.png`;

export const businessCheckingConsensus: Lesson = {
  slug: 'business-checking-consensus',
  title: 'Checking Consensus and Inviting Other Views',
  subtitle: 'B1-B2 · Sharing Ideas · Part 2',
  level: 'B1-B2',
  description:
    'Learn how to check if the group agrees, invite different perspectives and alternative ideas, and make sure everyone gets a chance to speak.',
  heroImage: img('hero'),

  objectives: [
    'Check whether the group has reached consensus.',
    'Invite contrasting views and alternative ideas.',
    'Encourage full participation from quiet team members.',
  ],

  vocabulary: [
    { word: 'CONSENSUS', partOfSpeech: 'noun', definition: 'A general agreement among a group.', example: "Let's reach a consensus before we move forward.", imageSlug: img('consensus') },
    { word: 'POSTPONE', partOfSpeech: 'verb', definition: 'To move something to a later time.', example: "We'll postpone the meeting until next week.", imageSlug: img('postpone') },
    { word: 'PERSPECTIVE', partOfSpeech: 'noun', definition: 'A way of seeing something, often based on experience.', example: 'Hearing your perspective helps us see things differently.', imageSlug: img('perspective') },
    { word: 'THIRD-PARTY', partOfSpeech: 'adjective', definition: 'From someone outside the group who can give help or advice.', example: 'We may need a third-party opinion on this issue.', imageSlug: img('third-party') },
    { word: 'ALTERNATIVE', partOfSpeech: 'noun', definition: 'A different option or choice.', example: "Let's prepare an alternative in case this plan fails.", imageSlug: img('alternative') },
    { word: 'RESOURCES', partOfSpeech: 'noun', definition: 'The money, time or people you need for a project.', example: "We'll need more resources to finish this task.", imageSlug: img('resources') },
    { word: 'PARTICIPATION', partOfSpeech: 'noun', definition: 'Taking part in a discussion or activity.', example: "We encourage everyone's participation.", imageSlug: img('participation') },
  ],

  phrasalVerbs: [
    { phrase: 'Are we all in agreement about…?', tag: 'phrase', definition: 'Check for consensus.', example: '"Are we all in agreement about postponing the event?"', imageSlug: img('all-in-agreement') },
    { phrase: 'Does anyone have a different perspective on…?', tag: 'phrase', definition: 'Invite contrasting views.', example: '"Does anyone have a different perspective on how to handle this?"', imageSlug: img('different-perspective') },
    { phrase: 'Can anyone see an alternative approach?', tag: 'phrase', definition: 'Encourage other ideas.', example: '"Before we decide, can anyone see an alternative approach?"', imageSlug: img('alternative-approach') },
    { phrase: 'Is there another way we could tackle this?', tag: 'phrase', definition: 'Explore other options.', example: '"Is there another way we could tackle this problem?"', imageSlug: img('another-way') },
    { phrase: 'Could you go into more detail about…?', tag: 'phrase', definition: 'Ask for a deeper explanation.', example: '"Could you go into more detail about the costs?"', imageSlug: img('more-detail') },
    { phrase: 'Is there anything anyone would like to add before we move on?', tag: 'phrase', definition: 'Give a final chance to speak.', example: '"Is there anything anyone would like to add before we finalize the schedule?"', imageSlug: img('anything-to-add') },
    { phrase: "Does anyone who hasn't spoken have any thoughts?", tag: 'phrase', definition: 'Encourage quiet people to participate.', example: '"Does anyone who hasn\'t spoken yet have any thoughts to share?"', inAction: 'Quiet people often have great ideas. Inviting them by name ("Maria, what do you think?") works even better.', imageSlug: img('hasnt-spoken') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "So the plan is to [[postpone:move to a later time]] the product launch until October. Are we all in agreement about that?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I agree. We don't have enough [[resources:money, time or people]] to launch in July." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Does anyone have a different [[perspective:way of seeing it]]? Maria, you haven't spoken yet." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Actually, yes. October is our competitors' busiest month. We might get less attention." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Good point. Could you go into more detail? Can anyone see an [[alternative:a different option]] approach?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "We could launch a small version in August, then the full product in November. A [[third-party:outside]] agency could help us with the August campaign." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That makes sense. I hadn't thought about the competitors." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Thanks for your [[participation:taking part]], Maria. So, small launch in August, full launch in November. Is there anything anyone would like to add before we move on?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No, I think we have a [[consensus:general agreement]]." },
  ],

  matchingExercise: [
    { word: 'CONSENSUS', definition: 'A general agreement among a group' },
    { word: 'POSTPONE', definition: 'To move to a later time' },
    { word: 'PERSPECTIVE', definition: 'A way of seeing something' },
    { word: 'ALTERNATIVE', definition: 'A different option' },
    { word: 'RESOURCES', definition: 'Money, time or people for a project' },
    { word: 'THIRD-PARTY', definition: 'From someone outside the group' },
  ],

  fillBlankExercise: [
    { before: 'Are we all in', after: 'about the new date?', answer: 'agreement' },
    { before: 'Does anyone have a different', after: 'on this?', answer: 'perspective' },
    { before: 'Can anyone see an', after: 'approach?', answer: 'alternative' },
    { before: 'Could you go into more', after: 'about the costs?', answer: 'detail' },
    { before: "We'll", after: 'the meeting until next week.', answer: 'postpone' },
    { before: "Let's reach a", after: 'before we move forward.', answer: 'consensus' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase checks if the group agrees?', options: ['Are we all in agreement?', 'Can you elaborate?', 'Sorry to interrupt.', "Let's begin."], correctIndex: 0 },
    { question: 'Which phrase invites different views?', options: ['Does anyone have a different perspective?', 'Thanks for your time.', 'The deadline is Friday.', 'Talk soon.'], correctIndex: 0 },
    { question: 'What does "postpone" mean?', options: ['Cancel forever', 'Move to a later time', 'Start early', 'Send by post'], correctIndex: 1 },
    { question: 'How can you include quiet team members?', options: ['Ignore them', 'Invite them to speak, ideally by name', 'Only ask the manager', 'End the meeting'], correctIndex: 1 },
    { question: "In the dialogue, what is Maria's concern about October?", options: ['It\'s too expensive', "It's the competitors' busiest month", 'Staff are on holiday', 'The product isn\'t ready'], correctIndex: 1 },
    { question: 'What is the final plan?', options: ['Launch in July', 'Launch everything in October', 'Small launch in August, full launch in November', 'Cancel the launch'], correctIndex: 2 },
  ],
};
