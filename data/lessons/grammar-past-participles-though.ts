import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-past-participles-though-${s}.png`;

export const grammarPastParticiplesThough: Lesson = {
  slug: 'grammar-past-participles-though',
  title: 'Irregular Past Participles and Using "Though"',
  subtitle: 'Grammar · B1-B2',
  level: 'B1-B2',
  description:
    'Master the irregular past participles you need for the present perfect and conditionals (gone, written, broken, chosen…), and learn to use "though" to show contrast naturally.',
  heroImage: img('hero'),

  objectives: [
    'Use common irregular past participles correctly.',
    'Know the difference between past simple and past participle forms.',
    'Use "though" at the start, middle and end of a sentence.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Using "Though"',
    description:
      '"Though" shows a small contrast, like "but". At the START or MIDDLE it joins two ideas (= although). At the END of a sentence it is very common in speaking and means "however".',
    positiveLabel: 'Start / middle',
    negativeLabel: 'End (spoken)',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'Though it was raining, we went outside.', note: 'It was raining, but we still went.' },
      { sentence: 'Though he was busy, he helped me.', note: 'He was busy, but he still helped.' },
      { sentence: 'I was tired, though I finished my work.', note: 'Tired, but I finished.' },
    ],
    negativeExamples: [
      { sentence: "I don't like coffee. I'll drink some, though.", note: "I don't like it, but I'll drink it." },
      { sentence: "It's cold. I like it, though.", note: "It's cold, but I still like it." },
    ],
  },

  vocabulary: [
    { word: 'GONE (GO)', partOfSpeech: 'verb', definition: 'Past participle of "go". go – went – gone', example: 'She has gone to London.', imageSlug: img('gone') },
    { word: 'WRITTEN (WRITE)', partOfSpeech: 'verb', definition: 'Past participle of "write". write – wrote – written', example: "I've written three emails today.", imageSlug: img('written') },
    { word: 'FORGOTTEN (FORGET)', partOfSpeech: 'verb', definition: 'Past participle of "forget". forget – forgot – forgotten', example: "I've forgotten his name.", imageSlug: img('forgotten') },
    { word: 'BROKEN (BREAK)', partOfSpeech: 'verb', definition: 'Past participle of "break". break – broke – broken', example: 'The printer is broken again.', imageSlug: img('broken') },
    { word: 'CHOSEN (CHOOSE)', partOfSpeech: 'verb', definition: 'Past participle of "choose". choose – chose – chosen', example: 'Have you chosen a restaurant?', imageSlug: img('chosen') },
    { word: 'SPOKEN (SPEAK)', partOfSpeech: 'verb', definition: 'Past participle of "speak". speak – spoke – spoken', example: "I've spoken to the manager.", imageSlug: img('spoken') },
    { word: 'EATEN (EAT)', partOfSpeech: 'verb', definition: 'Past participle of "eat". eat – ate – eaten', example: "Have you eaten sushi before?", imageSlug: img('eaten') },
    { word: 'TAKEN (TAKE)', partOfSpeech: 'verb', definition: 'Past participle of "take". take – took – taken', example: "Someone has taken my pen!", imageSlug: img('taken') },
  ],

  phrasalVerbs: [
    { phrase: 'have / has + past participle', tag: 'rule', definition: 'The present perfect uses the past participle, not the past simple.', example: '✓ I have written. ✗ I have wrote.', inAction: 'A very common mistake: "I have went". Always check the THIRD form: go – went – GONE.', imageSlug: img('rule-present-perfect') },
    { phrase: 'had + past participle', tag: 'rule', definition: 'The past perfect (and third conditional) also uses the participle.', example: 'If I had spoken to her, she would have known.', imageSlug: img('rule-past-perfect') },
    { phrase: 'be + past participle', tag: 'rule', definition: 'The passive voice uses the participle too.', example: 'The window was broken. The report is written in English.', imageSlug: img('rule-passive') },
    { phrase: 'Pattern: -en endings', tag: 'rule', definition: 'Many irregular participles end in -en.', example: 'broken, chosen, spoken, written, eaten, taken, forgotten', imageSlug: img('rule-en') },
    { phrase: '"though" at the end', tag: 'rule', definition: 'Very common in conversation; adds a contrast to the previous sentence.', example: "The hotel was expensive. The view was amazing, though.", imageSlug: img('rule-though-end') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Tim, have you [[written:past participle of write]] the report for the client yet?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Almost! I've [[spoken:past participle of speak]] to the sales team, and I've [[chosen:past participle of choose]] the best photos." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Great. The printer's [[broken:past participle of break]] again, though, so send it by email." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No problem. Though I'm a bit tired, I'll finish it before lunch." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Thanks! Have you [[eaten:past participle of eat]] yet? We could go to the new sushi place." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I've never eaten sushi! I'll try it, though." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "You'll love it. Oh no — I've [[forgotten:past participle of forget]] my wallet!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Don't worry, lunch is on me. It's not cheap, though!" },
  ],

  matchingExercise: [
    { word: 'GO', definition: 'went – gone' },
    { word: 'WRITE', definition: 'wrote – written' },
    { word: 'CHOOSE', definition: 'chose – chosen' },
    { word: 'BREAK', definition: 'broke – broken' },
    { word: 'FORGET', definition: 'forgot – forgotten' },
    { word: 'THOUGH', definition: 'A word that shows contrast, like "but"' },
  ],

  fillBlankExercise: [
    { before: 'She has', after: 'to London for a meeting. (go)', answer: 'gone' },
    { before: "I've", after: 'three emails this morning. (write)', answer: 'written' },
    { before: 'Have you', after: 'a restaurant yet? (choose)', answer: 'chosen' },
    { before: 'The window was', after: 'by the storm. (break)', answer: 'broken' },
    { before: "I've", after: 'my password again! (forget)', answer: 'forgotten' },
    { before: "It's expensive. I want it,", after: '.', answer: 'though' },
  ],

  multipleChoiceExercise: [
    { question: 'Which sentence is correct?', options: ['I have went to Spain.', 'I have gone to Spain.', 'I have go to Spain.', 'I have goed to Spain.'], correctIndex: 1 },
    { question: 'What is the past participle of "speak"?', options: ['speaked', 'spoke', 'spoken', 'speak'], correctIndex: 2 },
    { question: 'What is the past participle of "choose"?', options: ['chose', 'chosen', 'choosed', 'choice'], correctIndex: 1 },
    { question: '"It\'s cold. I like it, though." means…', options: ["It's cold, so I don't like it.", "It's cold, but I still like it.", "It's not cold.", 'I like cold drinks.'], correctIndex: 1 },
    { question: 'In the dialogue, what is broken?', options: ['The computer', 'The printer', 'The phone', 'The window'], correctIndex: 1 },
    { question: 'What has Kira forgotten?', options: ['Her keys', 'Her wallet', 'The report', 'Her phone'], correctIndex: 1 },
  ],
};
