import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}shopping-fruits-and-veggies-${s}.png`;

export const shoppingFruitsAndVeggies: Lesson = {
  slug: 'shopping-fruits-and-veggies',
  title: 'Grocery Shopping: Fruits and Veggies',
  subtitle: 'Everyday Life · Shopping · B1-B2',
  level: 'B1-B2',
  description:
    'Learn how to describe and choose fresh produce: ripe, overripe, juicy, in season, organic — and how to ask shop staff for help at the market or supermarket.',
  heroImage: img('hero'),

  objectives: [
    'Describe the condition of fruit and vegetables.',
    'Talk about seasonal, organic and tropical produce.',
    'Ask staff for help choosing fruit and vegetables.',
  ],

  vocabulary: [
    { word: 'FRESH', partOfSpeech: 'adjective', definition: 'Recently picked; in good condition.', example: 'I always buy fresh vegetables for my salads.', imageSlug: img('fresh') },
    { word: 'RIPE', partOfSpeech: 'adjective', definition: 'Ready to eat.', example: 'These mangoes are perfectly ripe.', imageSlug: img('ripe') },
    { word: 'UNDERRIPE', partOfSpeech: 'adjective', definition: 'Not ready to eat yet; still hard.', example: 'The avocados are a bit underripe.', imageSlug: img('underripe') },
    { word: 'OVERRIPE', partOfSpeech: 'adjective', definition: 'Too ripe: soft, very sweet and almost bad.', example: 'Overripe bananas are perfect for baking.', imageSlug: img('overripe') },
    { word: 'ROTTEN', partOfSpeech: 'adjective', definition: 'Bad and no longer safe to eat.', example: 'The tomatoes at the back were rotten.', imageSlug: img('rotten') },
    { word: 'JUICY', partOfSpeech: 'adjective', definition: 'Full of juice.', example: 'These strawberries are so juicy.', imageSlug: img('juicy') },
    { word: 'IN SEASON', partOfSpeech: 'phrase', definition: 'Growing now, so fresh, tasty and often cheaper.', example: 'Strawberries are in season in early summer.', imageSlug: img('in-season') },
    { word: 'ORGANIC', partOfSpeech: 'adjective', definition: 'Grown without chemical pesticides or fertilisers.', example: 'I prefer organic vegetables.', imageSlug: img('organic') },
    { word: 'CITRUS FRUITS', partOfSpeech: 'noun', definition: 'Oranges, lemons, limes and grapefruits.', example: 'Citrus fruits are full of vitamin C.', imageSlug: img('citrus') },
    { word: 'TROPICAL FRUITS', partOfSpeech: 'noun', definition: 'Fruits from hot regions, like pineapple, mango and guava.', example: "I'm making a tropical fruit salad.", imageSlug: img('tropical') },
  ],

  phrasalVerbs: [
    { phrase: 'Do you know which fruits are in season?', tag: 'phrase', definition: 'Ask what is fresh and best right now.', example: '"Do you know which fruits are in season at the moment?"', imageSlug: img('which-in-season') },
    { phrase: 'Can you help me find ripe avocados?', tag: 'phrase', definition: 'Ask staff for help choosing.', example: '"Can you help me find ripe avocados for guacamole?"', imageSlug: img('ripe-avocados') },
    { phrase: 'Are the peaches sweet right now?', tag: 'phrase', definition: 'Ask about taste before buying.', example: '"Are the peaches sweet right now, or still a bit sour?"', imageSlug: img('sweet-now') },
    { phrase: 'Do you have any overripe bananas? I want to bake.', tag: 'phrase', definition: 'Ask for soft fruit for cooking.', example: '"Do you have any overripe bananas? I want to make banana bread."', imageSlug: img('overripe-bananas') },
    { phrase: "I'm looking for a mix of ripe and slightly underripe…", tag: 'phrase', definition: 'Buy fruit to eat now and later.', example: '"I\'m looking for a mix of ripe and slightly underripe avocados."', inAction: 'Use "slightly", "a bit" and "perfectly" to be precise: slightly underripe, a bit soft, perfectly ripe.', imageSlug: img('mix-ripe') },
    { phrase: 'Is this organic or conventional?', tag: 'phrase', definition: 'Ask how the produce was grown.', example: '"Are these carrots organic or conventional?"', imageSlug: img('organic-question') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Excuse me, do you know which fruits are [[in season:growing now, fresh and tasty]] at the moment?" },
    { speaker: 'Market seller', speakerColor: 'orange', text: "Strawberries and cherries — they're very sweet and [[juicy:full of juice]] this week." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Great, I'll take a box of strawberries. Can you help me find [[ripe:ready to eat]] avocados? I'm making guacamole tonight." },
    { speaker: 'Market seller', speakerColor: 'orange', text: "These two are perfect for today. The others are a bit [[underripe:not ready yet]] — they'll be ready in two or three days." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect — I'll take a mix of ripe and slightly underripe ones. Are your tomatoes [[organic:grown without chemicals]]?" },
    { speaker: 'Market seller', speakerColor: 'orange', text: "Yes, all our vegetables are organic. Avoid that box, though — some are a bit [[overripe:too ripe, almost bad]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Actually, overripe tomatoes are great for sauce. Do you have any you'd sell cheaply?" },
    { speaker: 'Market seller', speakerColor: 'orange', text: "Sure, half price. Just check them — throw away any [[rotten:bad, not safe to eat]] ones." },
  ],

  matchingExercise: [
    { word: 'RIPE', definition: 'Ready to eat' },
    { word: 'UNDERRIPE', definition: 'Not ready to eat yet' },
    { word: 'OVERRIPE', definition: 'Too ripe, soft and very sweet' },
    { word: 'ROTTEN', definition: 'Bad and not safe to eat' },
    { word: 'IN SEASON', definition: 'Growing now, fresh and tasty' },
    { word: 'ORGANIC', definition: 'Grown without chemicals' },
  ],

  fillBlankExercise: [
    { before: 'Do you know which fruits are in', after: '?', answer: 'season' },
    { before: 'Can you help me find', after: 'avocados?', answer: 'ripe' },
    { before: '', after: 'bananas are perfect for baking.', answer: 'Overripe' },
    { before: 'These strawberries are so', after: '.', answer: 'juicy' },
    { before: 'The tomatoes at the back were', after: '. Throw them away.', answer: 'rotten' },
    { before: 'Oranges and lemons are', after: 'fruits.', answer: 'citrus' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "underripe" mean?', options: ['Too soft', 'Not ready to eat yet', 'Rotten', 'Very sweet'], correctIndex: 1 },
    { question: 'Which fruit is a citrus fruit?', options: ['Banana', 'Lemon', 'Strawberry', 'Mango'], correctIndex: 1 },
    { question: 'Why buy fruit that is in season?', options: ['It is always more expensive', 'It is fresh, tasty and often cheaper', 'It lasts for years', 'It is imported'], correctIndex: 1 },
    { question: 'In the dialogue, what is Kira making tonight?', options: ['Banana bread', 'Guacamole', 'Fruit salad', 'Soup'], correctIndex: 1 },
    { question: 'What will Kira use the overripe tomatoes for?', options: ['Salad', 'Sauce', 'Juice', 'Nothing'], correctIndex: 1 },
  ],
};
