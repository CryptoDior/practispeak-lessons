import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-performance-reviews-${s}.png`;

export const businessPerformanceReviews: Lesson = {
  slug: 'business-performance-reviews',
  title: 'Performance Reviews',
  subtitle: 'C1-C2 · Leadership Communication · Lesson 4',
  level: 'C1-C2',
  description:
    'Lead a balanced performance review: celebrate achievements, discuss development areas diplomatically, invite self-reflection and set clear goals for the next cycle.',
  heroImage: img('hero'),

  objectives: [
    'Open a review positively by highlighting achievements.',
    'Raise development areas with tact and clarity.',
    'Invite self-assessment and agree on future objectives.',
  ],

  vocabulary: [
    { word: 'EVALUATION', partOfSpeech: 'noun', definition: 'The process of assessing performance or quality.', example: 'The annual evaluation takes place in December.', imageSlug: img('evaluation') },
    { word: 'OBJECTIVES', partOfSpeech: 'noun', definition: 'Specific goals or results to achieve.', example: 'You exceeded three of your four objectives.', imageSlug: img('objectives') },
    { word: 'COMPETENCY', partOfSpeech: 'noun', definition: 'A skill or ability needed for a job.', example: 'Leadership is a key competency for this role.', imageSlug: img('competency') },
    { word: 'DEVELOPMENT AREA', partOfSpeech: 'noun', definition: 'A skill someone needs to improve (a softer word than "weakness").', example: 'Delegation is your main development area.', imageSlug: img('development-area') },
    { word: 'EXCEED', partOfSpeech: 'verb', definition: 'To go beyond a target or expectation.', example: 'She exceeded her sales target by 20%.', imageSlug: img('exceed') },
    { word: 'SELF-ASSESSMENT', partOfSpeech: 'noun', definition: 'Evaluating your own performance.', example: 'Please complete your self-assessment before the meeting.', imageSlug: img('self-assessment') },
  ],

  phrasalVerbs: [
    { phrase: "Let's start by reviewing your achievements this quarter.", tag: 'phrase', definition: 'Open the discussion positively.', example: '"Thanks for coming. Let\'s start by reviewing your achievements this quarter."', imageSlug: img('achievements') },
    { phrase: "You've shown great progress in…", tag: 'phrase', definition: 'Highlight growth and motivate.', example: '"You\'ve shown great progress in client presentations."', imageSlug: img('great-progress') },
    { phrase: 'How do you feel about your performance this cycle?', tag: 'phrase', definition: 'Invite self-reflection.', example: '"Before I share my view — how do you feel about your performance this cycle?"', inAction: 'Ask for self-assessment BEFORE giving your view. People accept development points more easily when they raise them first.', imageSlug: img('how-do-you-feel') },
    { phrase: 'One area we could focus on improving is…', tag: 'phrase', definition: 'Introduce development points diplomatically.', example: '"One area we could focus on improving is delegating more to junior staff."', imageSlug: img('focus-improving') },
    { phrase: "Let's set some goals for your next review period.", tag: 'phrase', definition: 'Encourage future-oriented thinking.', example: '"Let\'s set three SMART goals for your next review period."', imageSlug: img('set-goals') },
    { phrase: 'LIVE UP TO', definition: 'To reach the standard that was expected.', example: 'His results lived up to our expectations.', imageSlug: img('live-up-to') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Thanks for coming in, Tim. Let's start by reviewing your achievements this year." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "You [[exceeded:went beyond]] your sales target by 18% and brought in two major accounts. That's outstanding." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Thank you. It was a good year." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "How do you feel about your performance overall? Did you read your [[self-assessment:own evaluation]] again?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'm proud of the sales. But I know I tried to do everything myself. I was exhausted by November." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's very self-aware. I agree — one area we could focus on is delegation. It's a key [[competency:required skill]] for a team lead role." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "A team lead role? Is that a possibility?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Definitely. Let's set some [[objectives:specific goals]] for next year: mentor two juniors and delegate one client account. If you achieve those, my [[evaluation:assessment]] will support a promotion." },
  ],

  matchingExercise: [
    { word: 'EVALUATION', definition: 'Assessing performance' },
    { word: 'OBJECTIVES', definition: 'Specific goals to achieve' },
    { word: 'COMPETENCY', definition: 'A skill needed for a job' },
    { word: 'DEVELOPMENT AREA', definition: 'A skill to improve' },
    { word: 'EXCEED', definition: 'Go beyond a target' },
    { word: 'SELF-ASSESSMENT', definition: 'Evaluating your own performance' },
  ],

  fillBlankExercise: [
    { before: "Let's start by reviewing your", after: 'this quarter.', answer: 'achievements' },
    { before: "You've shown great", after: 'in client presentations.', answer: 'progress' },
    { before: 'One area we could focus on', after: 'is delegation.', answer: 'improving' },
    { before: "Let's set some", after: 'for your next review period.', answer: 'goals' },
    { before: 'She', after: 'her target by 20%.', answer: 'exceeded' },
    { before: 'His results lived up', after: 'our expectations.', answer: 'to' },
  ],

  multipleChoiceExercise: [
    { question: 'Why ask for self-assessment before giving your view?', options: ['To save time', 'People accept development points more easily when they raise them first', 'It is required by law', 'To avoid feedback'], correctIndex: 1 },
    { question: 'What is a "development area"?', options: ['A building project', 'A skill someone needs to improve', 'A new office', 'A bonus'], correctIndex: 1 },
    { question: 'What does "exceed" mean?', options: ['Fail', 'Go beyond', 'Reach exactly', 'Stop'], correctIndex: 1 },
    { question: 'In the dialogue, by how much did Tim exceed his target?', options: ['8%', '10%', '18%', '20%'], correctIndex: 2 },
    { question: "What is Tim's development area?", options: ['Sales', 'Delegation', 'Punctuality', 'Presentations'], correctIndex: 1 },
  ],
};
