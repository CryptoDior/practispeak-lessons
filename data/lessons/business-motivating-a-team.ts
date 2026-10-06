import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-motivating-a-team-${s}.png`;

export const businessMotivatingATeam: Lesson = {
  slug: 'business-motivating-a-team',
  title: 'Motivating a Team',
  subtitle: 'C1-C2 · Leadership Communication · Lesson 1',
  level: 'C1-C2',
  description:
    'Learn the language leaders use to boost engagement: empowering people, recognising contributions, building ownership and creating shared accountability.',
  heroImage: img('hero'),

  objectives: [
    'Recognise individual contributions in a meaningful way.',
    'Empower team members and encourage ownership.',
    'Build shared accountability and collaboration.',
  ],

  vocabulary: [
    { word: 'EMPOWER', partOfSpeech: 'verb', definition: 'To give someone the authority and confidence to act.', example: 'Good managers empower their teams to make decisions.', imageSlug: img('empower') },
    { word: 'ENGAGEMENT', partOfSpeech: 'noun', definition: 'The level of interest, commitment and energy people feel at work.', example: 'Employee engagement rose after the new programme.', imageSlug: img('engagement') },
    { word: 'RECOGNITION', partOfSpeech: 'noun', definition: 'Acknowledging someone\'s effort or achievement.', example: 'Public recognition boosts morale.', imageSlug: img('recognition') },
    { word: 'ACCOUNTABILITY', partOfSpeech: 'noun', definition: 'Responsibility for your actions and results.', example: 'Clear goals create accountability.', imageSlug: img('accountability') },
    { word: 'INCENTIVE', partOfSpeech: 'noun', definition: 'Something that motivates people to act.', example: 'Bonuses are not the only incentive.', imageSlug: img('incentive') },
    { word: 'MORALE', partOfSpeech: 'noun', definition: 'The confidence and enthusiasm of a group.', example: 'Team morale was low after the reorganisation.', imageSlug: img('morale') },
  ],

  phrasalVerbs: [
    { phrase: "Let's take ownership of this project.", tag: 'phrase', definition: 'Encourage responsibility and accountability.', example: '"This is our project now. Let\'s take ownership of it."', imageSlug: img('ownership') },
    { phrase: 'Your effort on this really made a difference.', tag: 'phrase', definition: 'Recognise a specific contribution.', example: '"Tim, your effort on the client report really made a difference."', inAction: 'Specific recognition ("your analysis on page 4 convinced the client") motivates far more than generic praise ("good job").', imageSlug: img('made-a-difference') },
    { phrase: 'How can we make this process even better together?', tag: 'phrase', definition: 'Invite collaboration and innovation.', example: '"Sales are up, but how can we make this process even better together?"', imageSlug: img('even-better') },
    { phrase: 'I trust you to handle this — let me know what you need.', tag: 'phrase', definition: 'Empower and offer support.', example: '"I trust you to handle the launch — let me know what you need."', imageSlug: img('trust-you') },
    { phrase: 'We all have a role to play in achieving our goals.', tag: 'phrase', definition: 'Promote shared responsibility.', example: '"From reception to the board, we all have a role to play."', imageSlug: img('role-to-play') },
    { phrase: 'RALLY AROUND', definition: 'To come together to support a goal or person.', example: 'The team rallied around the new project.', imageSlug: img('rally-around') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, [[morale:confidence and enthusiasm]] is low since we lost the Henderson account. People seem demotivated." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I've noticed. Let's start with [[recognition:acknowledging effort]]. The team worked incredibly hard on that pitch, even though we lost." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Should we offer a bonus as an [[incentive:something that motivates]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Money helps, but [[engagement:commitment and energy]] comes from purpose and autonomy. I want to [[empower:give authority and confidence to]] them to lead the next pitch themselves." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "So you'd let Maria run it?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes. I'll tell her: \"I trust you to handle this — let me know what you need.\" And at Monday's meeting: \"Let's take ownership of this one.\"" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And make it clear who's responsible for what?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Exactly — shared [[accountability:responsibility for results]]. We all have a role to play. People rally around a goal when they feel trusted." },
  ],

  matchingExercise: [
    { word: 'EMPOWER', definition: 'Give authority and confidence to act' },
    { word: 'ENGAGEMENT', definition: 'Commitment and energy at work' },
    { word: 'RECOGNITION', definition: 'Acknowledging effort or achievement' },
    { word: 'ACCOUNTABILITY', definition: 'Responsibility for results' },
    { word: 'INCENTIVE', definition: 'Something that motivates' },
    { word: 'MORALE', definition: 'Confidence and enthusiasm of a group' },
  ],

  fillBlankExercise: [
    { before: "Let's take", after: 'of this project.', answer: 'ownership' },
    { before: 'Your effort really made a', after: '.', answer: 'difference' },
    { before: 'I', after: 'you to handle this.', answer: 'trust' },
    { before: 'We all have a', after: 'to play.', answer: 'role' },
    { before: 'Good managers', after: 'their teams to make decisions.', answer: 'empower' },
    { before: 'Team', after: 'was low after the reorganisation.', answer: 'morale' },
  ],

  multipleChoiceExercise: [
    { question: 'Which kind of recognition motivates most?', options: ['Generic praise like "good job"', 'Specific recognition of a contribution', 'No recognition', 'Only money'], correctIndex: 1 },
    { question: 'What does "empower" mean?', options: ['Control closely', 'Give authority and confidence to act', 'Pay more', 'Remove responsibility'], correctIndex: 1 },
    { question: 'What is "morale"?', options: ['A moral rule', 'Confidence and enthusiasm of a group', 'A salary', 'A meeting'], correctIndex: 1 },
    { question: 'In the dialogue, why is morale low?', options: ['Pay cuts', 'They lost the Henderson account', 'A new boss', 'Long hours'], correctIndex: 1 },
    { question: 'Who will lead the next pitch?', options: ['Kira', 'Tim', 'Maria', 'An agency'], correctIndex: 2 },
  ],
};
