import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-conditionals-zero-first-${s}.png`;

export const grammarConditionalsZeroFirst: Lesson = {
  slug: 'grammar-conditionals-zero-first',
  title: 'If Conditionals Part 1: Zero and First',
  subtitle: 'Grammar · B1-B2',
  level: 'B1-B2',
  description:
    'Learn the zero conditional for facts and rules ("If you heat water, it boils") and the first conditional for real possible futures ("If it rains, we\'ll stay home").',
  heroImage: img('hero'),

  objectives: [
    'Use the zero conditional for facts, rules and habits.',
    'Use the first conditional for possible future situations.',
    'Form positive and negative conditional sentences correctly.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Zero vs First Conditional',
    description:
      'ZERO: If + present simple, present simple → always true (facts, rules, habits). FIRST: If + present simple, WILL + base verb → a real, possible future result. Note: we never use "will" in the IF part.',
    positiveLabel: 'Zero — always true',
    negativeLabel: 'First — possible future',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'If you heat water to 100°C, it boils.', note: 'Scientific fact.' },
      { sentence: 'If I drink coffee at night, I can\'t sleep.', note: 'Personal habit.' },
      { sentence: "If you don't drink water, you get thirsty.", note: 'Negative fact.' },
    ],
    negativeExamples: [
      { sentence: 'If you study, you will pass the exam.', note: 'Likely result.' },
      { sentence: "If it rains, we'll stay at home.", note: 'Possible plan.' },
      { sentence: "If you don't eat, you won't have energy.", note: 'Negative future.' },
    ],
  },

  vocabulary: [
    { word: 'CONDITION', partOfSpeech: 'noun', definition: 'Something that must happen first for another thing to happen.', example: 'The "if" part of the sentence is the condition.', imageSlug: img('condition') },
    { word: 'RESULT', partOfSpeech: 'noun', definition: 'What happens because of the condition.', example: 'The result is in the second part of the sentence.', imageSlug: img('result') },
    { word: 'FACT', partOfSpeech: 'noun', definition: 'Something that is always true.', example: 'Ice melts in the sun. That\'s a fact.', imageSlug: img('fact') },
    { word: 'LIKELY', partOfSpeech: 'adjective', definition: 'Probably going to happen.', example: 'If it\'s sunny, we\'ll likely go to the beach.', imageSlug: img('likely') },
    { word: 'UNLESS', partOfSpeech: 'conjunction', definition: 'If not.', example: "You won't pass unless you study. (= if you don't study)", imageSlug: img('unless') },
    { word: 'MELT', partOfSpeech: 'verb', definition: 'To turn from solid to liquid because of heat.', example: 'If you leave ice in the sun, it melts.', imageSlug: img('melt') },
  ],

  phrasalVerbs: [
    { phrase: 'If + present, present', tag: 'rule', definition: 'Zero conditional: facts, rules, general truths.', example: 'If it rains, the ground gets wet.', imageSlug: img('rule-zero') },
    { phrase: 'If + present, will + verb', tag: 'rule', definition: 'First conditional: real and possible future.', example: 'If you eat too much candy, you will feel sick.', imageSlug: img('rule-first') },
    { phrase: 'No "will" after "if"', tag: 'rule', definition: 'In the IF clause, use the present simple — even for the future.', example: '✓ If it rains tomorrow… ✗ If it will rain tomorrow…', inAction: 'This is the most common mistake with conditionals. The future idea is shown by "will" in the RESULT part only.', imageSlug: img('rule-no-will') },
    { phrase: 'Comma rule', tag: 'rule', definition: 'If the sentence starts with IF, use a comma. If IF is in the middle, no comma.', example: 'If you study, you\'ll pass. / You\'ll pass if you study.', imageSlug: img('rule-comma') },
    { phrase: 'Unless = if not', tag: 'rule', definition: 'Use "unless" to say "if … not".', example: "We'll be late unless we leave now.", imageSlug: img('rule-unless') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, you look tired. Are you OK?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I had coffee at 9 p.m. If I drink coffee at night, I can't sleep. It's a [[fact:something always true]] for me!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Same here. Listen, are we still going hiking on Saturday?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "If the weather is good, we'll go. But if it rains, we'll stay at home and watch a film." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "The forecast says it's [[likely:probably going to happen]] to be sunny. If we leave early, we'll avoid the heat." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good idea. But I won't come [[unless:if not]] I get some sleep tonight!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Ha! Then no coffee after lunch. If you don't drink coffee, you sleep well." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Deal. If I sleep well, I'll bring snacks for the hike." },
  ],

  matchingExercise: [
    { word: 'ZERO CONDITIONAL', definition: 'If + present, present — always true' },
    { word: 'FIRST CONDITIONAL', definition: 'If + present, will — possible future' },
    { word: 'CONDITION', definition: 'The "if" part of the sentence' },
    { word: 'RESULT', definition: 'What happens because of the condition' },
    { word: 'UNLESS', definition: 'If not' },
    { word: 'LIKELY', definition: 'Probably going to happen' },
  ],

  fillBlankExercise: [
    { before: 'If you mix red and blue, you', after: 'purple.', answer: 'get' },
    { before: 'If it rains, we', after: 'stay at home.', answer: 'will' },
    { before: 'If you heat ice, it', after: '.', answer: 'melts' },
    { before: "If you don't study, you", after: 'pass the test.', answer: "won't" },
    { before: 'If she', after: 'the bus, she will be on time.', answer: 'catches' },
    { before: "We'll be late", after: 'we leave now.', answer: 'unless' },
  ],

  multipleChoiceExercise: [
    { question: 'Which sentence is a zero conditional?', options: ['If it rains, the ground gets wet.', 'If it rains, we will stay home.', 'If it rained, I would stay home.', 'If it had rained…'], correctIndex: 0 },
    { question: 'Which sentence is correct?', options: ['If it will rain, we will stay home.', 'If it rains, we will stay home.', 'If it rains, we stayed home.', 'If it rain, we will stay home.'], correctIndex: 1 },
    { question: 'When do we use the first conditional?', options: ['For imaginary situations', 'For real, possible future situations', 'For the past', 'For orders'], correctIndex: 1 },
    { question: '"Unless you hurry, you\'ll miss the bus" means…', options: ["If you hurry, you'll miss the bus.", "If you don't hurry, you'll miss the bus.", 'You always miss the bus.', 'You missed the bus.'], correctIndex: 1 },
    { question: 'Why is Kira tired in the dialogue?', options: ['She went hiking', 'She drank coffee at night', 'She worked late', 'She was sick'], correctIndex: 1 },
    { question: 'What will they do if it rains?', options: ['Go hiking anyway', 'Stay at home and watch a film', 'Go shopping', 'Go to work'], correctIndex: 1 },
  ],
};
