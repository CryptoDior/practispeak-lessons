import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-conditionals-second-third-${s}.png`;

export const grammarConditionalsSecondThird: Lesson = {
  slug: 'grammar-conditionals-second-third',
  title: 'If Conditionals Part 2: Second and Third',
  subtitle: 'Grammar · B1-B2',
  level: 'B1-B2',
  description:
    'Learn the second conditional for imaginary present situations and dreams ("If I had a million dollars…") and the third conditional for imagining a different past and regrets.',
  heroImage: img('hero'),

  objectives: [
    'Use the second conditional to imagine an unreal present or future.',
    'Use the third conditional to talk about a different past and regrets.',
    'Form positive and negative sentences with would and would have.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Second vs Third Conditional',
    description:
      'SECOND: If + past simple, WOULD + base verb → imaginary present or unlikely future. THIRD: If + past perfect (had + past participle), WOULD HAVE + past participle → imaginary past; it did not happen and cannot change.',
    positiveLabel: 'Second — imaginary present',
    negativeLabel: 'Third — imaginary past',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'If I had a million dollars, I would buy a big house.', note: "But I don't have it." },
      { sentence: 'If we lived near the beach, we would swim every day.', note: "But we don't live there." },
      { sentence: "If I didn't have a job, I wouldn't be able to pay rent.", note: 'Negative — but I do have a job.' },
    ],
    negativeExamples: [
      { sentence: 'If I had studied more, I would have passed.', note: "But I didn't study, so I failed." },
      { sentence: "If she had left earlier, she wouldn't have missed the bus.", note: 'But she left late.' },
      { sentence: "If I hadn't eaten so much, I wouldn't have felt sick.", note: 'Regret about the past.' },
    ],
  },

  vocabulary: [
    { word: 'IMAGINARY', partOfSpeech: 'adjective', definition: 'Not real; only in your mind.', example: 'The second conditional describes imaginary situations.', imageSlug: img('imaginary') },
    { word: 'UNLIKELY', partOfSpeech: 'adjective', definition: 'Probably not going to happen.', example: "Winning the lottery is very unlikely.", imageSlug: img('unlikely') },
    { word: 'REGRET', partOfSpeech: 'noun / verb', definition: 'A sad feeling about something you did or didn\'t do in the past.', example: 'I regret not studying harder.', imageSlug: img('regret') },
    { word: 'WISH', partOfSpeech: 'noun / verb', definition: 'To want something that is not true now.', example: 'I wish I lived by the sea.', imageSlug: img('wish') },
    { word: 'PAST PERFECT', partOfSpeech: 'noun', definition: 'had + past participle (had studied, had left).', example: 'The third conditional uses the past perfect after "if".', imageSlug: img('past-perfect') },
    { word: 'LOCKED OUT', partOfSpeech: 'adjective', definition: 'Unable to get into a place because you don\'t have the key.', example: 'She forgot her keys and was locked out.', imageSlug: img('locked-out') },
  ],

  phrasalVerbs: [
    { phrase: 'If + past simple, would + verb', tag: 'rule', definition: 'Second conditional: unreal present / unlikely future.', example: 'If she won the lottery, she would travel the world.', imageSlug: img('rule-second') },
    { phrase: 'If I were you, I would…', tag: 'rule', definition: 'A fixed second-conditional phrase for giving advice.', example: 'If I were you, I would talk to your manager.', inAction: 'With "I/he/she", formal English uses "were": If I were you… If he were here… "Was" is common in speech, but "If I were you" is the fixed advice phrase.', imageSlug: img('rule-if-i-were-you') },
    { phrase: 'If + had + p.p., would have + p.p.', tag: 'rule', definition: 'Third conditional: imaginary past.', example: 'If they had left earlier, they would have caught the train.', imageSlug: img('rule-third') },
    { phrase: 'Contractions: I\'d, wouldn\'t, would\'ve', tag: 'rule', definition: 'In speech, we usually contract would and had.', example: "If I'd known, I'd have helped. (= If I had known, I would have helped.)", imageSlug: img('rule-contractions') },
    { phrase: 'Second vs Third', tag: 'rule', definition: 'Second = now/future (not real). Third = past (didn\'t happen).', example: 'If I had a car, I would drive. / If I had had a car, I would have driven.', imageSlug: img('rule-compare') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, if you won the lottery, what would you do?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ha! If I won the lottery, I would buy a house near the beach and swim every morning. You?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "If I had that much money, I would travel for a year. But it's very [[unlikely:probably not going to happen]] — I never buy tickets!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Speaking of money, how was the job interview yesterday?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Not great. If I had prepared more, I would have answered the questions better. I really [[regret:feel sad about]] that." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Don't be too hard on yourself. If I were you, I would ask them for feedback." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Good idea. Oh, and I was late! If I hadn't missed the bus, I wouldn't have been so nervous." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Next time, leave early. And if you'd told me, I would have driven you!" },
  ],

  matchingExercise: [
    { word: 'SECOND CONDITIONAL', definition: 'If + past simple, would + verb' },
    { word: 'THIRD CONDITIONAL', definition: 'If + had + p.p., would have + p.p.' },
    { word: 'IMAGINARY', definition: 'Not real' },
    { word: 'UNLIKELY', definition: 'Probably not going to happen' },
    { word: 'REGRET', definition: 'A sad feeling about the past' },
    { word: 'IF I WERE YOU', definition: 'A fixed phrase for giving advice' },
  ],

  fillBlankExercise: [
    { before: 'If I had a million dollars, I', after: 'buy a big house.', answer: 'would' },
    { before: 'If she', after: 'in Paris, she would visit museums every day.', answer: 'lived' },
    { before: 'If I', after: 'you, I would call her.', answer: 'were' },
    { before: 'If I had studied harder, I would have', after: 'the exam.', answer: 'passed' },
    { before: 'If they', after: 'left earlier, they wouldn\'t have missed the bus.', answer: 'had' },
    { before: "If I hadn't eaten so much, I", after: 'have felt sick.', answer: "wouldn't" },
  ],

  multipleChoiceExercise: [
    { question: 'Which sentence is a second conditional?', options: ['If I had time, I would help you.', 'If I have time, I will help you.', 'If I had had time, I would have helped.', 'If you heat ice, it melts.'], correctIndex: 0 },
    { question: 'Which sentence is a third conditional?', options: ['If it rains, I stay home.', 'If I won, I would celebrate.', 'If I had known, I would have come.', 'If I see him, I will tell him.'], correctIndex: 2 },
    { question: '"If I had studied, I would have passed." What really happened?', options: ['I studied and passed', "I didn't study and didn't pass", 'I will study', 'I always pass'], correctIndex: 1 },
    { question: 'Which phrase gives advice?', options: ['If I were you, I would…', 'If I will be you…', 'If I am you, I will…', 'If I had been you…'], correctIndex: 0 },
    { question: 'In the dialogue, what would Kira buy if she won the lottery?', options: ['A car', 'A house near the beach', 'A plane ticket', 'A restaurant'], correctIndex: 1 },
    { question: 'Why was Tim nervous at the interview?', options: ['He missed the bus and was late', 'He forgot his CV', 'He was sick', 'The interviewer was angry'], correctIndex: 0 },
  ],
};
