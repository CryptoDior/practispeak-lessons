import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-giving-constructive-feedback-${s}.png`;

export const businessGivingConstructiveFeedback: Lesson = {
  slug: 'business-giving-constructive-feedback',
  title: 'Giving Constructive Feedback',
  subtitle: 'C1-C2 · Leadership Communication · Lesson 2',
  level: 'C1-C2',
  description:
    'Deliver feedback that helps people grow. Learn to open positively, describe behaviour objectively, focus on solutions and keep the conversation two-way.',
  heroImage: img('hero'),

  objectives: [
    'Open feedback conversations in a collaborative way.',
    'Describe specific behaviour and its impact diplomatically.',
    'Invite dialogue and agree on improvements.',
  ],

  vocabulary: [
    { word: 'CONSTRUCTIVE', partOfSpeech: 'adjective', definition: 'Helpful and focused on improvement.', example: 'She gave constructive feedback on my report.', imageSlug: img('constructive') },
    { word: 'DIPLOMATIC', partOfSpeech: 'adjective', definition: 'Communicating carefully to avoid upsetting people.', example: 'He was diplomatic but honest.', imageSlug: img('diplomatic') },
    { word: 'PERCEPTION', partOfSpeech: 'noun', definition: 'The way someone sees or understands something.', example: "The client's perception was that we didn't listen.", imageSlug: img('perception') },
    { word: 'DELIVER', partOfSpeech: 'verb', definition: 'To communicate a message.', example: 'How you deliver feedback matters as much as what you say.', imageSlug: img('deliver') },
    { word: 'CRITICISM', partOfSpeech: 'noun', definition: 'Negative comments about someone\'s work or behaviour.', example: 'Harsh criticism rarely improves performance.', imageSlug: img('criticism') },
    { word: 'IMPACT', partOfSpeech: 'noun', definition: 'The effect something has.', example: 'Describe the behaviour and its impact.', imageSlug: img('impact') },
  ],

  phrasalVerbs: [
    { phrase: "I'd like to share some feedback that might help us improve.", tag: 'phrase', definition: 'Open the conversation positively and collaboratively.', example: '"Have you got ten minutes? I\'d like to share some feedback that might help."', imageSlug: img('share-feedback') },
    { phrase: "You've done a great job on X, and I'd like to talk about Y.", tag: 'phrase', definition: 'Balance recognition and development.', example: '"You\'ve done a great job on the client relationship, and I\'d like to talk about reporting."', imageSlug: img('great-job-and') },
    { phrase: 'From my perspective, I noticed that…', tag: 'phrase', definition: 'Soften feedback with a personal viewpoint.', example: '"From my perspective, I noticed that the last two reports were late."', inAction: 'Use the SBI model: Situation ("In Tuesday\'s meeting"), Behaviour ("you interrupted Maria twice"), Impact ("she stopped contributing"). It\'s objective, not personal.', imageSlug: img('my-perspective') },
    { phrase: 'One area we could strengthen is…', tag: 'phrase', definition: 'Focus on solutions rather than problems.', example: '"One area we could strengthen is preparation before client calls."', imageSlug: img('strengthen') },
    { phrase: 'How do you feel about that?', tag: 'phrase', definition: 'Encourage two-way dialogue.', example: '"That\'s my view — how do you feel about that?"', imageSlug: img('how-do-you-feel') },
    { phrase: 'What support would help you?', tag: 'phrase', definition: 'Show you are there to help, not judge.', example: '"What support would help you meet the deadlines?"', imageSlug: img('support') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Tim, have you got a minute? I'd like to share some feedback that might help us improve." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure. Is something wrong?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Not wrong, no. You've done a great job building the client relationship. Clients love working with you. I'd like to talk about the weekly reports." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "From my perspective, I noticed that the last three were sent after the deadline. The [[impact:effect]] is that the board's [[perception:way of seeing it]] is that we're disorganised." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's fair. Client calls keep taking priority on Fridays." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I understand. One area we could strengthen is planning — maybe block Thursday afternoon for reports? How do you feel about that?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That would work. Thanks for being so [[diplomatic:careful not to upset]] about it." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Feedback should be [[constructive:helpful and improvement-focused]], not [[criticism:negative comments]]. What support would help you?" },
  ],

  matchingExercise: [
    { word: 'CONSTRUCTIVE', definition: 'Helpful and improvement-focused' },
    { word: 'DIPLOMATIC', definition: 'Careful not to upset people' },
    { word: 'PERCEPTION', definition: 'The way someone sees something' },
    { word: 'CRITICISM', definition: 'Negative comments' },
    { word: 'IMPACT', definition: 'The effect something has' },
    { word: 'DELIVER', definition: 'To communicate a message' },
  ],

  fillBlankExercise: [
    { before: "I'd like to share some", after: 'that might help.', answer: 'feedback' },
    { before: 'From my', after: ', I noticed that…', answer: 'perspective' },
    { before: 'One area we could', after: 'is preparation.', answer: 'strengthen' },
    { before: 'How do you', after: 'about that?', answer: 'feel' },
    { before: 'What', after: 'would help you?', answer: 'support' },
    { before: 'How you', after: 'feedback matters a lot.', answer: 'deliver' },
  ],

  multipleChoiceExercise: [
    { question: 'What does SBI stand for in feedback?', options: ['Speak, Blame, Ignore', 'Situation, Behaviour, Impact', 'Start, Build, Improve', 'Sales, Budget, Income'], correctIndex: 1 },
    { question: 'Which phrase invites two-way dialogue?', options: ['Do it better.', 'How do you feel about that?', 'This is bad.', 'No excuses.'], correctIndex: 1 },
    { question: 'What makes feedback "constructive"?', options: ['It is harsh', 'It focuses on improvement', 'It is very short', 'It is anonymous'], correctIndex: 1 },
    { question: 'In the dialogue, what is the problem?', options: ['Rude to clients', 'Weekly reports sent late', 'Missing meetings', 'Too many errors'], correctIndex: 1 },
    { question: 'What solution does Kira suggest?', options: ['Work weekends', 'Block Thursday afternoon for reports', 'Stop calling clients', 'Hire an assistant'], correctIndex: 1 },
  ],
};
