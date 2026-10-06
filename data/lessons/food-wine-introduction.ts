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
  heroImage: img('hero'),

  objectives: [
    'Name the main types of wine.',
    'Use simple words to describe how wine tastes.',
    'Talk about wine at dinner with friends.',
  ],

  vocabulary: [
    { word: 'WINE', partOfSpeech: 'noun', definition: 'A drink made from grapes.', example: 'I drink wine at dinner.', imageSlug: img('wine') },
    { word: 'RED WINE', partOfSpeech: 'noun', definition: 'A dark wine made from red or black grapes.', example: 'I think red wine is the best.', imageSlug: img('red-wine') },
    { word: 'WHITE WINE', partOfSpeech: 'noun', definition: 'A light wine made from white or green grapes.', example: 'White wine is cold.', imageSlug: img('white-wine') },
    { word: 'ROSÉ', partOfSpeech: 'noun', definition: 'A pink wine made from red grapes.', example: 'Rosé is pink and sweet.', imageSlug: img('rose') },
    { word: 'GRAPES', partOfSpeech: 'noun', definition: 'Small, round fruit. We use them to make wine.', example: 'Wine comes from grapes.', imageSlug: img('grapes') },
    { word: 'BOTTLE', partOfSpeech: 'noun', definition: 'A glass container for wine.', example: 'I have a bottle of wine.', imageSlug: img('bottle') },
    { word: 'WINE GLASS', partOfSpeech: 'noun', definition: 'A special glass for drinking wine.', example: 'She drinks wine from a wine glass.', imageSlug: img('wine-glass') },
    { word: 'SWEET', partOfSpeech: 'adjective', definition: 'It tastes like sugar.', example: 'This wine is sweet.', imageSlug: img('sweet') },
    { word: 'DRY', partOfSpeech: 'adjective', definition: 'Not sweet.', example: 'I like dry wine.', imageSlug: img('dry') },
    { word: 'FRUITY', partOfSpeech: 'adjective', definition: 'It tastes like fruit.', example: 'This red wine is fruity.', imageSlug: img('fruity') },
  ],

  phrasalVerbs: [
    { phrase: 'Cheers!', tag: 'phrase', definition: 'A word we say before we drink together.', example: 'We say "Cheers!" and drink.', imageSlug: img('cheers') },
    { phrase: 'It smells good.', tag: 'phrase', definition: 'Use this to say you like the smell.', example: '"Mmm, the wine smells good."', imageSlug: img('smells-good') },
    { phrase: 'I can taste…', tag: 'phrase', definition: 'Use this to say what flavour you notice.', example: '"I can taste apples in this wine."', imageSlug: img('i-can-taste') },
    { phrase: 'It tastes bitter.', tag: 'phrase', definition: 'The taste is strong and sharp, not nice for some people.', example: '"This wine tastes a little bitter."', imageSlug: img('bitter') },
    { phrase: 'I prefer red / white.', tag: 'phrase', definition: 'Say which wine you like more.', example: '"I prefer white wine in summer."', imageSlug: img('i-prefer') },
    { phrase: 'Would you like a glass of wine?', tag: 'phrase', definition: 'A polite way to offer wine.', example: '"Would you like a glass of wine?" → "Yes, please. Red, please."', inAction: 'We say "a glass of wine" and "a bottle of wine", not "a wine glass of wine".', imageSlug: img('would-you-like') },
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
