import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}food-how-does-wine-taste-${s}.png`;

export const foodHowDoesWineTaste: Lesson = {
  slug: 'food-how-does-wine-taste',
  title: 'How Does the Wine Taste?',
  subtitle: 'Food & Drink · Wine · Lesson 2',
  level: 'A1-A2',
  description:
    'Learn more words to describe the taste of wine — light, strong, smooth, fresh — and how to open, pour and serve wine.',
  heroImage: img('hero'),

  objectives: [
    'Describe how wine tastes with simple adjectives.',
    'Talk about opening, pouring and serving wine.',
    'Say which wine is your favourite.',
  ],

  vocabulary: [
    { word: 'FLAVOUR', partOfSpeech: 'noun', definition: 'The taste of food or drink.', example: 'This wine has a strong flavour.', imageSlug: img('flavour') },
    { word: 'SMOOTH', partOfSpeech: 'adjective', definition: 'Easy to drink. It feels soft in your mouth.', example: 'This red wine is very smooth.', imageSlug: img('smooth') },
    { word: 'SPICY', partOfSpeech: 'adjective', definition: 'It tastes like pepper.', example: 'I can taste something spicy in this wine.', imageSlug: img('spicy') },
    { word: 'SOUR', partOfSpeech: 'adjective', definition: 'A sharp taste, like a lemon.', example: 'This white wine is a little sour.', imageSlug: img('sour') },
    { word: 'STRONG', partOfSpeech: 'adjective', definition: 'It has a lot of taste or a lot of alcohol.', example: 'That red wine is very strong.', imageSlug: img('strong') },
    { word: 'LIGHT', partOfSpeech: 'adjective', definition: 'Not heavy or strong.', example: 'I like light wine in summer.', imageSlug: img('light') },
    { word: 'FRESH', partOfSpeech: 'adjective', definition: 'A clean, new taste.', example: 'The wine has a fresh flavour.', imageSlug: img('fresh') },
    { word: 'ROOM TEMPERATURE', partOfSpeech: 'noun', definition: 'Normal room heat. Not cold and not hot.', example: 'Red wine is best at room temperature.', imageSlug: img('room-temperature') },
    { word: 'FAVOURITE', partOfSpeech: 'adjective', definition: 'The one you like most.', example: 'This wine is my favourite.', imageSlug: img('favourite') },
  ],

  phrasalVerbs: [
    { phrase: 'Can you open the bottle?', tag: 'phrase', definition: 'Ask someone to take the top off the bottle.', example: '"Can you open the bottle, please?"', imageSlug: img('open-the-bottle') },
    { phrase: 'Please pour me some wine.', tag: 'phrase', definition: 'Ask someone to put wine in your glass.', example: '"Please pour me a little wine."', imageSlug: img('pour') },
    { phrase: 'We serve white wine cold.', tag: 'phrase', definition: 'Say how you give wine to people.', example: '"We serve red wine at room temperature."', imageSlug: img('serve') },
    { phrase: 'Do you want to try this one?', tag: 'phrase', definition: 'Offer someone a wine to taste for the first time.', example: '"Do you want to try this one? It\'s new."', imageSlug: img('try') },
    { phrase: 'This wine tastes…', tag: 'phrase', definition: 'Say how the wine tastes to you.', example: '"This wine tastes spicy."', inAction: 'Use "tastes" + adjective: "It tastes fresh", not "It tastes freshly".', imageSlug: img('tastes') },
    { phrase: "It's a bit … for me.", tag: 'phrase', definition: 'A polite way to say you don\'t love the taste.', example: '"It\'s a bit sour for me."', imageSlug: img('a-bit') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Can you open the bottle, Tim?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Sure! Do you want to try this one?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, please. It's my [[favourite:the one I like most]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'll pour you a glass. It's a [[light:not heavy or strong]] wine with a [[fresh:clean, new taste]] taste." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Mmm… I like it. The [[flavour:taste]] is soft.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I think it's a bit [[sour:sharp, like lemon]] for me." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Not too much. It's [[smooth:easy to drink]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Yes, it\'s better than that [[strong:a lot of taste or alcohol]] wine last time!' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "And it's cold, just the way I like it. Red wine is better at [[room temperature:not cold, not hot]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Perfect! Let's eat." },
  ],

  matchingExercise: [
    { word: 'FLAVOUR', definition: 'The taste of food or drink' },
    { word: 'SMOOTH', definition: 'Easy to drink, soft' },
    { word: 'SOUR', definition: 'A sharp taste, like lemon' },
    { word: 'LIGHT', definition: 'Not heavy or strong' },
    { word: 'POUR', definition: 'Put liquid from a bottle into a glass' },
    { word: 'FAVOURITE', definition: 'The one you like most' },
  ],

  fillBlankExercise: [
    { before: 'Please', after: 'the bottle.', answer: 'open' },
    { before: 'This wine is my', after: '. I love it!', answer: 'favourite' },
    { before: 'He', after: 'the wine into my glass.', answer: 'poured' },
    { before: 'Red wine is best at room', after: '.', answer: 'temperature' },
    { before: 'I want to', after: 'this new wine.', answer: 'try' },
    { before: 'I like', after: 'wine in summer. Strong wine is too heavy.', answer: 'light' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "sour" mean?', options: ['Like sugar', 'A sharp taste, like lemon', 'Very cold', 'Easy to drink'], correctIndex: 1 },
    { question: 'What does "pour" mean?', options: ['Drink fast', 'Put liquid from a bottle into a glass', 'Open a bottle', 'Smell the wine'], correctIndex: 1 },
    { question: 'How do we usually serve white wine?', options: ['Hot', 'Cold', 'At room temperature', 'With ice cream'], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ['It tastes freshly.', 'It tastes fresh.', 'It taste fresh.', 'It fresh tastes.'], correctIndex: 1 },
    { question: 'In the dialogue, what does Tim think about the wine?', options: ["It's too sweet", "It's a bit sour", "It's very strong", "It's hot"], correctIndex: 1 },
    { question: 'How does Kira describe the wine?', options: ['Smooth', 'Bitter', 'Spicy', 'Strong'], correctIndex: 0 },
  ],
};
