import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-managing-conflict-meetings-${s}.png`;

export const businessManagingConflictMeetings: Lesson = {
  slug: 'business-managing-conflict-meetings',
  title: 'Managing Conflict in Meetings',
  subtitle: 'C1-C2 · Meetings & Negotiation · Lesson 5',
  level: 'C1-C2',
  description:
    'When tempers rise, the chair must stay calm. Learn to de-escalate tension, separate people from problems and steer a heated meeting back to a constructive outcome.',
  heroImage: img('hero'),

  objectives: [
    'Recognise and de-escalate tension in a meeting.',
    'Step in diplomatically when a debate becomes personal.',
    'Refocus the group on facts and solutions.',
  ],

  vocabulary: [
    { word: 'CONFLICT', partOfSpeech: 'noun', definition: 'A serious disagreement between people or groups.', example: 'She handled the conflict calmly.', imageSlug: img('conflict') },
    { word: 'DE-ESCALATE', partOfSpeech: 'verb', definition: 'To make a situation less intense.', example: 'He de-escalated the tension by changing his tone.', imageSlug: img('de-escalate') },
    { word: 'TENSION', partOfSpeech: 'noun', definition: 'A feeling of stress or hostility between people.', example: 'A little humour can release tension.', imageSlug: img('tension') },
    { word: 'DIPLOMACY', partOfSpeech: 'noun', definition: 'The skill of dealing with people sensitively and effectively.', example: 'She handled the disagreement with diplomacy.', imageSlug: img('diplomacy') },
    { word: 'RESOLVE', partOfSpeech: 'verb', definition: 'To find a solution to a problem or disagreement.', example: 'We must resolve conflicts early.', imageSlug: img('resolve') },
    { word: 'HEATED', partOfSpeech: 'adjective', definition: 'Full of anger and strong feeling.', example: 'The discussion became quite heated.', imageSlug: img('heated') },
  ],

  phrasalVerbs: [
    { phrase: 'CALM DOWN', definition: 'To become less angry or upset.', example: "Let's all take a moment to calm down.", imageSlug: img('calm-down') },
    { phrase: 'CUT IN', definition: 'To interrupt.', example: "Please don't cut in while others are speaking.", imageSlug: img('cut-in') },
    { phrase: 'STEP IN', definition: 'To get involved in a situation to help.', example: 'Kira had to step in to stop the argument.', imageSlug: img('step-in') },
    { phrase: 'TALK THROUGH', definition: 'To discuss something carefully and in detail.', example: "Let's talk through this issue calmly.", imageSlug: img('talk-through') },
    { phrase: "I can see this is important to both of you.", tag: 'phrase', definition: 'Acknowledge emotions to lower tension.', example: '"I can see this is important to both of you, and that\'s a good thing."', imageSlug: img('important-to-both') },
    { phrase: "Let's focus on the issue, not the person.", tag: 'phrase', definition: 'Stop a debate becoming personal.', example: '"Let\'s focus on the issue, not the person. What exactly went wrong?"', inAction: 'Use "we" and talk about the problem ("the delay", "the process") rather than "you" ("you were late"). This depersonalises the conflict.', imageSlug: img('issue-not-person') },
    { phrase: "Let's take five and come back to this.", tag: 'phrase', definition: 'Suggest a short break when emotions are high.', example: '"Things are getting heated. Let\'s take five and come back to this."', imageSlug: img('take-five') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "The launch was late because marketing sent the assets three days late. Again." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That's not fair! We got the final specs from your team on Friday night. You always do this —" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Let me [[step in:get involved to help]] here. I can see this is important to both of you, and that's a good thing — you both care about the result." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "But let's focus on the issue, not the person. The [[tension:stress between people]] isn't helping us [[resolve:find a solution to]] anything." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "OK, fair. I'm sorry — that got a bit [[heated:full of anger]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "No problem. Let's [[talk through:discuss carefully]] the timeline step by step. When were the specs approved, and when were assets due?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Specs Friday, assets due Monday. We needed at least five days." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "So the real problem is the process, not either team. Proposal: specs frozen two weeks before launch. That should [[de-escalate:make less intense]] things next time. Agreed?" },
  ],

  matchingExercise: [
    { word: 'DE-ESCALATE', definition: 'To make a situation less intense' },
    { word: 'TENSION', definition: 'Stress or hostility between people' },
    { word: 'DIPLOMACY', definition: 'Dealing with people sensitively' },
    { word: 'HEATED', definition: 'Full of anger and strong feeling' },
    { word: 'STEP IN', definition: 'To get involved to help' },
    { word: 'TALK THROUGH', definition: 'To discuss carefully in detail' },
  ],

  fillBlankExercise: [
    { before: 'I can see this is important to', after: 'of you.', answer: 'both' },
    { before: "Let's focus on the issue, not the", after: '.', answer: 'person' },
    { before: "Let's take", after: 'and come back to this.', answer: 'five' },
    { before: 'Kira had to step', after: 'to stop the argument.', answer: 'in' },
    { before: "Please don't cut", after: 'while others are speaking.', answer: 'in' },
    { before: 'The discussion became quite', after: '.', answer: 'heated' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "de-escalate" mean?', options: ['Make a situation more intense', 'Make a situation less intense', 'Go downstairs', 'End a meeting'], correctIndex: 1 },
    { question: 'Why focus on "the issue, not the person"?', options: ['To blame someone', 'To depersonalise the conflict and find solutions', 'To avoid talking', 'To end the meeting'], correctIndex: 1 },
    { question: 'When should you suggest a short break?', options: ['At the start', 'When emotions are high', 'Never', 'Only at lunch'], correctIndex: 1 },
    { question: 'In the dialogue, what was the real cause of the delay?', options: ['Marketing was lazy', 'The process — specs arrived too late', 'Tim forgot', 'The client changed their mind'], correctIndex: 1 },
    { question: "What is Kira's proposal?", options: ['Fire the marketing team', 'Freeze specs two weeks before launch', 'Cancel launches', 'Work weekends'], correctIndex: 1 },
  ],
};
