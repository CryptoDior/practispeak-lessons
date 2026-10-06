import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-which-vs-what-${s}.png`;

export const grammarWhichVsWhat: Lesson = {
  slug: 'grammar-which-vs-what',
  title: 'Which vs What',
  subtitle: 'Grammar · B1-B2',
  level: 'B1-B2',
  description:
    'Learn when to ask "what" (many or unknown options) and when to ask "which" (a few, known options) — with lots of side-by-side examples.',
  heroImage: img('hero'),

  objectives: [
    'Use "what" for open questions with many possible answers.',
    'Use "which" when there are a few specific choices.',
    'Choose correctly between which and what in everyday questions.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: WHAT vs WHICH',
    description:
      'Use WHAT when there are many possible answers or you don\'t know the options. Use WHICH when the choice is between a small number of options you both know or can see.',
    positiveLabel: 'WHAT — many / unknown options',
    negativeLabel: 'WHICH — few / known options',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'What is your favourite colour?', note: 'There are many colours.' },
      { sentence: 'What do you want to eat for dinner?', note: 'Any food is possible.' },
      { sentence: 'What kind of music do you listen to?', note: 'Many types of music.' },
    ],
    negativeExamples: [
      { sentence: 'Which ice cream do you want: vanilla or chocolate?', note: 'Only two choices.' },
      { sentence: 'Which book is yours, the red one or the blue one?', note: 'We can see two books.' },
      { sentence: 'Which country would you like to visit: Italy, France or Spain?', note: 'Three specific options.' },
    ],
  },

  vocabulary: [
    { word: 'WHAT', partOfSpeech: 'pronoun', definition: 'Asks about something from many or unknown possibilities.', example: 'What movie do you want to watch?', imageSlug: img('what') },
    { word: 'WHICH', partOfSpeech: 'pronoun', definition: 'Asks about a choice between a few known options.', example: 'Which movie: the comedy or the action film?', imageSlug: img('which') },
    { word: 'OPTION', partOfSpeech: 'noun', definition: 'One of the things you can choose.', example: 'There are three options on the menu.', imageSlug: img('option') },
    { word: 'CHOICE', partOfSpeech: 'noun', definition: 'The act of choosing, or the thing you choose.', example: 'You have a choice of tea or coffee.', imageSlug: img('choice') },
    { word: 'SPECIFIC', partOfSpeech: 'adjective', definition: 'Exact and clearly known.', example: 'Use "which" for specific choices.', imageSlug: img('specific') },
    { word: 'GENERAL', partOfSpeech: 'adjective', definition: 'Open, not limited to certain options.', example: 'Use "what" for general questions.', imageSlug: img('general') },
  ],

  phrasalVerbs: [
    { phrase: 'What + noun (open)', tag: 'rule', definition: 'Many possible answers.', example: 'What pizza do you want to order? (any pizza)', imageSlug: img('rule-what') },
    { phrase: 'Which + noun (limited)', tag: 'rule', definition: 'A few known answers.', example: 'Which pizza do you want: pepperoni, BBQ or margherita?', imageSlug: img('rule-which') },
    { phrase: 'Which one?', tag: 'rule', definition: 'Use "which one / which ones" when you point to known things.', example: '"Pass me a pen." → "Which one? The black one or the blue one?"', inAction: 'We say "Which one?", never "What one?". "One" refers to something from a known group.', imageSlug: img('rule-which-one') },
    { phrase: 'Which of…', tag: 'rule', definition: 'Use "which of + the/my/these…" for a group.', example: 'Which of these jackets do you prefer?', imageSlug: img('rule-which-of') },
    { phrase: 'What in statements', tag: 'rule', definition: '"What" can also mean "the thing(s) that".', example: "I know what you mean. That's what I want.", imageSlug: img('rule-what-statement') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, what do you want to do tonight?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Let's watch a movie. What kind of movies do you like?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Anything, really. There are two new ones at the cinema: a comedy and a thriller. Which one do you prefer?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "The comedy! I need to laugh. What time does it start?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "There are [[option:things you can choose]]s at 7 and 9. Which time works for you?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Seven. And after, pizza? What pizza do you like?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I love all pizza! But at Luigi's there are only three. Which of them is the best?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "The margherita, definitely. That's [[what:the thing that]] I always order." },
  ],

  matchingExercise: [
    { word: 'WHAT', definition: 'Many or unknown options' },
    { word: 'WHICH', definition: 'A few known options' },
    { word: 'WHICH ONE?', definition: 'Choose from things you can see' },
    { word: 'OPTION', definition: 'One thing you can choose' },
    { word: 'SPECIFIC', definition: 'Exact and clearly known' },
    { word: 'GENERAL', definition: 'Open, not limited' },
  ],

  fillBlankExercise: [
    { before: '', after: 'is your favourite food?', answer: 'What' },
    { before: '', after: 'do you want: tea or coffee?', answer: 'Which' },
    { before: '', after: 'kind of music do you like?', answer: 'What' },
    { before: '', after: 'book is yours, the red one or the blue one?', answer: 'Which' },
    { before: 'Pass me a pen. —', after: 'one?', answer: 'Which' },
    { before: 'I know', after: 'you mean.', answer: 'what' },
  ],

  multipleChoiceExercise: [
    { question: '___ is your name?', options: ['What', 'Which', 'Who', 'Whose'], correctIndex: 0 },
    { question: '___ shirt do you prefer: the white one or the black one?', options: ['What', 'Which', 'Who', 'How'], correctIndex: 1 },
    { question: 'When do we use "which"?', options: ['When there are many unknown options', 'When there are a few known options', 'Only for people', 'Only for time'], correctIndex: 1 },
    { question: 'Which is correct?', options: ['What one do you want?', 'Which one do you want?', 'Who one do you want?', 'What ones you want?'], correctIndex: 1 },
    { question: 'In the dialogue, which movie does Kira choose?', options: ['The thriller', 'The comedy', 'A horror film', 'A cartoon'], correctIndex: 1 },
    { question: 'What pizza does Kira always order?', options: ['Pepperoni', 'BBQ', 'Margherita', 'Hawaiian'], correctIndex: 2 },
  ],
};
