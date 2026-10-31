import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}food-wine-introduction-${s}.png`;

export const foodWineIntroduction: Lesson = {
  slug: 'food-wine-introduction',
  title: 'Wine: Introduction',
  subtitle: 'Food & Drink · Wine · Lesson 1',
  level: 'A1-A2',
  description:
    'Learn the basic words for wine: red, white and rosé, bottles and glasses, and simple taste words like sweet, dry and fruity.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Name the main types of wine.',
    'Use simple words to describe how wine tastes.',
    'Talk about wine at dinner with friends.',
  ],

  // Picture Quiz: nouns only. The wrong answers are written by hand so the choices are fair
  // (e.g. a wine glass is never offered next to "glass of wine"), and they don't have to be lesson words.
  pictureQuiz: true,
  pictureQuizSkip: ['SWEET', 'DRY', 'FRUITY'],
  pictureQuizOptions: {
    'WINE': ['Juice', 'Beer'],
    'RED WINE': ['White wine', 'Rosé'],
    'WHITE WINE': ['Red wine', 'Rosé'],
    'ROSÉ': ['Red wine', 'White wine'],
    'GRAPES': ['Apples', 'Cherries'],
    'BOTTLE': ['Can', 'Cup'],
    'WINE GLASS': ['Cup', 'Bottle'],
  },

  menuReading: {
    title: 'Casa Rosa — Wine List',
    intro: 'Read the wine list. Then choose the right answer.',
    sections: [
      {
        heading: 'Red wine',
        items: [
          { name: 'Spanish red', note: 'fruity · glass $6 · bottle $24', price: '' },
          { name: 'Chilean red', note: 'dry · glass $7 · bottle $28', price: '' },
        ],
      },
      {
        heading: 'White wine',
        items: [
          { name: 'Italian white', note: 'dry · glass $6 · bottle $24', price: '' },
          { name: 'German white', note: 'sweet · glass $7 · bottle $26', price: '' },
        ],
      },
      {
        heading: 'Rosé',
        items: [{ name: 'French rosé', note: 'sweet · glass $6 · bottle $22', price: '' }],
      },
    ],
    questions: [
      { question: 'How much is a glass of the German white wine?', options: ['$6', '$7', '$26'], correctIndex: 1 },
      { question: 'Which white wine is sweet?', options: ['Italian white', 'German white', 'Chilean red'], correctIndex: 1 },
      { question: 'Which red wine is dry?', options: ['Spanish red', 'Chilean red', 'French rosé'], correctIndex: 1 },
      { question: 'How much is a bottle of rosé?', options: ['$22', '$24', '$6'], correctIndex: 0 },
      { question: 'Which wine is fruity?', options: ['Spanish red', 'Italian white', 'French rosé'], correctIndex: 0 },
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence.',
    items: [
      { sentence: 'Wine is made from _____.', options: ['grapes', 'apples', 'rice'], correctIndex: 0, explanation: 'Wine is made from grapes.' },
      { sentence: 'I would like a _____ of wine, please.', options: ['glass', 'cup', 'plate'], correctIndex: 0, explanation: 'We say "a glass of wine".' },
      { sentence: '_____ is a pink wine.', options: ['Red wine', 'White wine', 'Rosé'], correctIndex: 2, explanation: 'Rosé is pink.' },
      { sentence: 'This wine is not sweet. It is _____.', options: ['dry', 'wet', 'hot'], correctIndex: 0, explanation: '"Dry" means not sweet.' },
      { sentence: 'Before we drink, we say "_____!"', options: ['Cheers', 'Sorry', 'Goodbye'], correctIndex: 0, explanation: 'We say "Cheers!" before we drink together.' },
      { sentence: 'The wine _____ good. I love the smell.', options: ['smells', 'hears', 'sees'], correctIndex: 0, explanation: 'We use "smells" for the nose.' },
      { sentence: 'This wine tastes like cherries. It is _____.', options: ['fruity', 'loud', 'hot'], correctIndex: 0, explanation: '"Fruity" means it tastes like fruit.' },
    ],
  },

  vocabulary: [
    { word: 'WINE', partOfSpeech: 'noun', definition: 'A drink made from grapes.', example: 'I drink wine at dinner.', imageSlug: img('wine-with-dinner') },
    { word: 'RED WINE', partOfSpeech: 'noun', definition: 'A dark wine made from red or black grapes.', example: 'I think red wine is the best.', imageSlug: img('red-wine-personal-preference') },
    { word: 'WHITE WINE', partOfSpeech: 'noun', definition: 'A light wine made from white or green grapes.', example: 'White wine is cold.', imageSlug: img('chilled-white-wine') },
    { word: 'ROSÉ', partOfSpeech: 'noun', definition: 'A pink wine made from red grapes.', example: 'Rosé is pink and sweet.', imageSlug: img('pink-rose-sweet-notes') },
    { word: 'GRAPES', partOfSpeech: 'noun', definition: 'Small, round fruit. We use them to make wine.', example: 'Wine comes from grapes.', imageSlug: img('wine-from-grapes') },
    { word: 'BOTTLE', partOfSpeech: 'noun', definition: 'A glass container for wine.', example: 'I have a bottle of wine.', imageSlug: img('holding-wine-bottle') },
    { word: 'WINE GLASS', partOfSpeech: 'noun', definition: 'A special glass for drinking wine.', example: 'She drinks wine from a wine glass.', imageSlug: img('woman-sipping-stemmed-glass') },
    { word: 'SWEET', partOfSpeech: 'adjective', definition: 'It tastes like sugar.', example: 'This wine is sweet.', imageSlug: img('sweet-wine-taste') },
    { word: 'DRY', partOfSpeech: 'adjective', definition: 'Not sweet.', example: 'I like dry wine.', imageSlug: img('dry-wine-not-sweet') },
    { word: 'FRUITY', partOfSpeech: 'adjective', definition: 'It tastes like fruit.', example: 'This red wine is fruity.', imageSlug: img('red-wine-fruit-notes') },
  ],

  phrasalVerbs: [
    { phrase: 'Cheers!', tag: 'phrase', definition: 'A word we say before we drink together.', example: 'We say "Cheers!" and drink.', imageSlug: img('adult-friends-wine-toast') },
    { phrase: 'It smells good.', tag: 'phrase', definition: 'Use this to say you like the smell.', example: '"Mmm, the wine — it smells good."', imageSlug: img('enjoying-wine-aroma') },
    { phrase: 'I can taste…', tag: 'phrase', definition: 'Use this to say what flavour you notice.', example: '"I can taste apples in this wine."', imageSlug: img('apple-notes-in-wine') },
    { phrase: 'It tastes bitter.', tag: 'phrase', definition: 'The taste is strong and sharp, not nice for some people.', example: '"This wine? It tastes bitter."', imageSlug: img('slightly-bitter-wine-reaction') },
    { phrase: 'I prefer red / white.', tag: 'phrase', definition: 'Say which wine you like more.', example: '"I prefer white wine in summer."', imageSlug: img('white-wine-summer-preference') },
    { phrase: 'Would you like a glass of wine?', tag: 'phrase', definition: 'A polite way to offer wine.', example: '"Would you like a glass of wine?" → "Yes, please. Red, please."', inAction: 'We say "a glass of wine" and "a bottle of wine", not "a wine glass of wine".', imageSlug: img('offering-red-wine-accepted') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Welcome, Tim! Would you like a glass of [[wine:a drink made from grapes]]?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Yes, please. What do you have?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I have [[red wine:dark wine]], [[white wine:light wine]] and a [[rosé:pink wine]].' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Is the rosé [[sweet:tastes like sugar]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'A little. The white wine is [[dry:not sweet]].' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I prefer red. Can I have the red, please?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Of course. Here\'s the [[bottle:glass container for wine]]. Let me get a [[wine glass:a glass for wine]].' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Mmm, it smells good. It\'s very [[fruity:tastes like fruit]]. I can taste cherries!' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Yes, it\'s from Spanish [[grapes:small fruit for wine]]. Cheers!' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Cheers!' },
  ],

  matchingExercise: [
    { word: 'GRAPES', definition: 'Small, round fruit for making wine' },
    { word: 'ROSÉ', definition: 'A pink wine' },
    { word: 'BOTTLE', definition: 'A glass container for wine' },
    { word: 'SWEET', definition: 'Tastes like sugar' },
    { word: 'DRY', definition: 'Not sweet' },
    { word: 'FRUITY', definition: 'Tastes like fruit' },
  ],

  fillBlankExercise: [
    { before: 'Wine comes from', after: '.', answer: 'grapes' },
    { before: 'I have a', after: 'of wine.', answer: 'bottle' },
    { before: '', after: 'is pink and sweet.', answer: 'Rosé' },
    { before: 'I like', after: 'wine. I don\'t like sweet wine.', answer: 'dry' },
    { before: 'We say "', after: '!" and drink.', answer: 'Cheers' },
    { before: 'The wine', after: 'good. I love the smell.', answer: 'smells' },
  ],

  multipleChoiceExercise: [
    { question: 'What is wine made from?', options: ['Apples', 'Grapes', 'Rice', 'Milk'], correctIndex: 1 },
    { question: 'What does "dry" mean for wine?', options: ['Not sweet', 'No water', 'Very cold', 'Old'], correctIndex: 0 },
    { question: 'What colour is rosé?', options: ['Red', 'White', 'Pink', 'Green'], correctIndex: 2 },
    { question: 'What do we say before we drink together?', options: ['Goodbye!', 'Cheers!', 'Sorry!', 'Hello!'], correctIndex: 1 },
    { question: 'In the dialogue, which wine does Tim choose?', options: ['White', 'Rosé', 'Red', 'Sparkling'], correctIndex: 2 },
    { question: 'What can Tim taste in the wine?', options: ['Apples', 'Lemons', 'Cherries', 'Chocolate'], correctIndex: 2 },
  ],
};
