import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-prefixes-un-re-pre-${s}.png`;

export const grammarPrefixesUnRePre: Lesson = {
  slug: 'grammar-prefixes-un-re-pre',
  title: 'Prefixes: un-, re-, pre-',
  subtitle: 'Grammar · Word Building',
  level: 'A1-A2',
  description:
    'A prefix is a small group of letters at the start of a word. Learn how un- (not / opposite), re- (again / back) and pre- (before) change the meaning of words.',
  heroImage: img('hero'),

  objectives: [
    'Use un- to make opposites: happy → unhappy.',
    'Use re- to mean "again" or "back": write → rewrite.',
    'Use pre- to mean "before": heat → preheat.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: un- / re- / pre-',
    description:
      'Add a prefix to the start of a word to change its meaning. UN- = not, or the opposite action. RE- = again, or back. PRE- = before.',
    positiveLabel: 'UN- = not / opposite',
    negativeLabel: 'RE- = again · PRE- = before',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'happy → unhappy', note: 'not happy' },
      { sentence: 'kind → unkind', note: 'not kind' },
      { sentence: 'lock → unlock', note: 'the opposite of lock' },
      { sentence: 'tie → untie', note: 'the opposite of tie' },
    ],
    negativeExamples: [
      { sentence: 'write → rewrite', note: 'write again' },
      { sentence: 'read → reread', note: 'read again' },
      { sentence: 'heat → preheat', note: 'heat before' },
      { sentence: 'order → preorder', note: 'order before it is in shops' },
    ],
  },

  vocabulary: [
    { word: 'UNHAPPY', partOfSpeech: 'adjective', definition: 'Not happy.', example: 'She looked unhappy after the bad news.', imageSlug: img('unhappy') },
    { word: 'UNKIND', partOfSpeech: 'adjective', definition: 'Not kind; not nice.', example: 'It was unkind to laugh at her.', imageSlug: img('unkind') },
    { word: 'UNLOCK', partOfSpeech: 'verb', definition: 'To open a lock.', example: 'Can you unlock the door?', imageSlug: img('unlock') },
    { word: 'UNUSUAL', partOfSpeech: 'adjective', definition: 'Not normal; different.', example: 'This weather is unusual for June.', imageSlug: img('unusual') },
    { word: 'REWRITE', partOfSpeech: 'verb', definition: 'To write again.', example: 'I need to rewrite my essay.', imageSlug: img('rewrite') },
    { word: 'REREAD', partOfSpeech: 'verb', definition: 'To read again.', example: 'Please reread the instructions.', imageSlug: img('reread') },
    { word: 'REBUILD', partOfSpeech: 'verb', definition: 'To build again.', example: 'They rebuilt their house after the storm.', imageSlug: img('rebuild') },
    { word: 'PREHEAT', partOfSpeech: 'verb', definition: 'To heat before cooking.', example: 'Preheat the oven before you bake the cake.', imageSlug: img('preheat') },
    { word: 'PREORDER', partOfSpeech: 'verb', definition: 'To order something before it is in the shops.', example: 'I preordered the new game.', imageSlug: img('preorder') },
    { word: 'PREVIEW', partOfSpeech: 'noun', definition: 'A short look at something before others see it all.', example: 'Did you see the movie preview?', imageSlug: img('preview') },
  ],

  phrasalVerbs: [
    { phrase: 'UN- + adjective', tag: 'rule', definition: 'Means "not".', example: 'happy → unhappy · fair → unfair · clear → unclear', imageSlug: img('rule-un-adj') },
    { phrase: 'UN- + verb', tag: 'rule', definition: 'Means "do the opposite action".', example: 'lock → unlock · tie → untie · do → undo', imageSlug: img('rule-un-verb') },
    { phrase: 'RE- + verb', tag: 'rule', definition: 'Means "do again" or "go back".', example: 'write → rewrite · play → replay · turn → return', imageSlug: img('rule-re') },
    { phrase: 'PRE- + verb / noun', tag: 'rule', definition: 'Means "before" or "early".', example: 'heat → preheat · school → preschool · view → preview', inAction: 'Tip: un- = NOT, re- = AGAIN, pre- = BEFORE. Find the small word inside: un-HAPPY, re-WRITE, pre-HEAT.', imageSlug: img('rule-pre') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Hi Tim! Did you [[preorder:order before it is in shops]] the new video game?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Yes, I did! I watched the [[preview:short look before]]. It looks great. Did you preorder it too?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Not yet. I'm busy. I need to [[rewrite:write again]] my report. My teacher says it's [[unclear:not clear]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Oh, I had to rewrite mine too. Then I [[reread:read again]] it, and now it's better." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "OK. I don't want to be [[unprepared:not ready]] on Monday." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Me too. Oh — don't forget to [[preheat:heat before cooking]] the oven for our cookies!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ha, I won't! Homework first, then cookies." },
  ],

  matchingExercise: [
    { word: 'UNLOCK', definition: 'To open a lock' },
    { word: 'PREHEAT', definition: 'To heat before' },
    { word: 'UNKIND', definition: 'Not kind' },
    { word: 'REWRITE', definition: 'To write again' },
    { word: 'REBUILD', definition: 'To build again' },
    { word: 'PREORDER', definition: 'To order before it is available' },
  ],

  fillBlankExercise: [
    { before: "It's important to", after: '(heat) the oven before baking.', answer: 'preheat' },
    { before: 'I had to', after: '(write) my essay because of mistakes.', answer: 'rewrite' },
    { before: 'Can you help me', after: '(lock) the door?', answer: 'unlock' },
    { before: 'The weather is', after: '(usual) for this time of year.', answer: 'unusual' },
    { before: 'He had to', after: '(build) the model after it broke.', answer: 'rebuild' },
    { before: 'She looked', after: '(happy) after the bad news.', answer: 'unhappy' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "un-" usually mean?', options: ['Again', 'Before', 'Not / opposite', 'Very'], correctIndex: 2 },
    { question: 'What does "reread" mean?', options: ['Not read', 'Read again', 'Read before', 'Read fast'], correctIndex: 1 },
    { question: 'What does "pre-" mean?', options: ['Before', 'After', 'Again', 'Not'], correctIndex: 0 },
    { question: 'Which word means "school before regular school"?', options: ['Reschool', 'Unschool', 'Preschool', 'Afterschool'], correctIndex: 2 },
    { question: 'In the dialogue, why does Kira need to rewrite her report?', options: ['It is too long', 'It is unclear', 'She lost it', 'It is late'], correctIndex: 1 },
  ],
};
