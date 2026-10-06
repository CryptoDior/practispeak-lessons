import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}food-wine-making-ordering-${s}.png`;

export const foodWineMakingOrdering: Lesson = {
  slug: 'food-wine-making-ordering',
  title: 'How Wine Is Made and Ordering at a Restaurant',
  subtitle: 'Food & Drink · Wine · Lesson 3',
  level: 'B1-B2',
  description:
    'From vineyard to glass: learn the words for how wine is made (harvest, barrel, cellar, vintage) and how to order wine confidently in a restaurant.',
  heroImage: img('hero'),

  objectives: [
    'Describe how wine is made using the passive voice.',
    'Talk about wine regions, grape varieties and vintages.',
    'Order wine and ask for recommendations in a restaurant.',
  ],

  vocabulary: [
    { word: 'VINEYARD', partOfSpeech: 'noun', definition: 'A farm where grapes grow.', example: 'The vineyard is big and green.', imageSlug: img('vineyard') },
    { word: 'WINERY', partOfSpeech: 'noun', definition: 'A place where wine is made.', example: 'We visited a small winery in France.', imageSlug: img('winery') },
    { word: 'HARVEST', partOfSpeech: 'noun / verb', definition: 'To pick grapes or crops; the time when this happens.', example: 'Workers harvest the grapes in autumn.', imageSlug: img('harvest') },
    { word: 'BARREL', partOfSpeech: 'noun', definition: 'A large wooden container for wine.', example: 'The wine is aged in oak barrels.', imageSlug: img('barrel') },
    { word: 'CELLAR', partOfSpeech: 'noun', definition: 'A cool underground room for storing wine.', example: 'The bottles are kept in the wine cellar.', imageSlug: img('cellar') },
    { word: 'VINTAGE', partOfSpeech: 'noun', definition: 'The year the wine was made.', example: 'This is a 2018 vintage.', imageSlug: img('vintage') },
    { word: 'REGION', partOfSpeech: 'noun', definition: 'An area where a wine comes from.', example: 'This wine is from the Bordeaux region.', imageSlug: img('region') },
    { word: 'VARIETY', partOfSpeech: 'noun', definition: 'A type of grape.', example: 'Chardonnay is a grape variety.', imageSlug: img('variety') },
    { word: 'SPARKLING / STILL', partOfSpeech: 'adjective', definition: 'With bubbles / without bubbles.', example: 'Champagne is sparkling. I prefer still wine.', imageSlug: img('sparkling') },
  ],

  phrasalVerbs: [
    { phrase: 'The grapes are harvested in autumn.', tag: 'phrase', definition: 'Describe production with the passive voice.', example: '"The grapes are harvested by hand in September."', inAction: 'We often use the passive (is/are + past participle) for processes, because the action is more important than who does it.', imageSlug: img('harvested') },
    { phrase: 'The wine is stored in barrels.', tag: 'phrase', definition: 'Describe how wine is aged.', example: '"The wine is stored in oak barrels for two years."', imageSlug: img('stored') },
    { phrase: 'Can I see the wine menu, please?', tag: 'phrase', definition: 'Ask for the wine list.', example: '"Before we order food, can I see the wine menu, please?"', imageSlug: img('wine-menu') },
    { phrase: 'Can you recommend a red wine?', tag: 'phrase', definition: 'Ask the waiter or sommelier for advice.', example: '"Can you recommend a red wine that goes with lamb?"', imageSlug: img('recommend') },
    { phrase: 'What is the price of this bottle?', tag: 'phrase', definition: 'Ask about the cost.', example: '"This one looks nice. What is the price of this bottle?"', imageSlug: img('price') },
    { phrase: "I'd like a glass of the house white.", tag: 'phrase', definition: "Order the restaurant's standard wine by the glass.", example: '"I\'d like a glass of the house white, please."', imageSlug: img('house-white') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Good evening. Can I see the wine menu, please?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Of course, sir. Here you are. We have wines from France, Italy and South Africa." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Can you recommend a red wine? We're having the lamb." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'd suggest this Merlot. It's from the Bordeaux [[region:area where wine comes from]], a 2018 [[vintage:year the wine was made]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Interesting. How is it made?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "The grapes are [[harvested:picked]] by hand at a small family [[vineyard:farm where grapes grow]]. Then the wine is stored in oak [[barrel:large wooden containers]]s for 18 months." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sounds great. What is the price of this bottle?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It's 45 euros. Or if you prefer something [[sparkling:with bubbles]] to start, we have a lovely Prosecco by the glass." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Let's start with two glasses of Prosecco, then the Merlot with the lamb, please." },
  ],

  matchingExercise: [
    { word: 'VINEYARD', definition: 'A farm where grapes grow' },
    { word: 'WINERY', definition: 'A place where wine is made' },
    { word: 'CELLAR', definition: 'An underground room to store wine' },
    { word: 'VINTAGE', definition: 'The year the wine was made' },
    { word: 'VARIETY', definition: 'A type of grape' },
    { word: 'STILL', definition: 'Without bubbles' },
  ],

  fillBlankExercise: [
    { before: 'Workers', after: 'the grapes in autumn.', answer: 'harvest' },
    { before: 'The wine is kept in a wooden', after: '.', answer: 'barrel' },
    { before: 'This is a 2020', after: '.', answer: 'vintage' },
    { before: 'Can you', after: 'a white wine?', answer: 'recommend' },
    { before: 'Champagne is a', after: 'wine.', answer: 'sparkling' },
    { before: 'Chardonnay is my favourite grape', after: '.', answer: 'variety' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "vintage"?', options: ['An old bottle', 'The year the wine was made', 'A wine shop', 'A type of grape'], correctIndex: 1 },
    { question: 'Where is wine stored underground?', options: ['In a vineyard', 'In a cellar', 'In a barrel only', 'In a winery shop'], correctIndex: 1 },
    { question: 'Which sentence uses the passive correctly?', options: ['The grapes harvest in autumn.', 'The grapes are harvested in autumn.', 'The grapes harvesting in autumn.', 'The grapes is harvest in autumn.'], correctIndex: 1 },
    { question: 'What is the opposite of "sparkling" wine?', options: ['Still', 'Dry', 'Sweet', 'Old'], correctIndex: 0 },
    { question: 'In the dialogue, how long is the Merlot stored in barrels?', options: ['6 months', '12 months', '18 months', '2 years'], correctIndex: 2 },
    { question: 'What do they order first?', options: ['The Merlot', 'Two glasses of Prosecco', 'Water', 'The house white'], correctIndex: 1 },
  ],
};
