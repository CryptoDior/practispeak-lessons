import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}food-wine-food-pairing-${s}.png`;

export const foodWineFoodPairing: Lesson = {
  slug: 'food-wine-food-pairing',
  title: 'Choosing Wine and Food Pairing',
  subtitle: 'Food & Drink · Wine · Lesson 5',
  level: 'B1-B2',
  description:
    'Learn how to match wine with food: talk about pairings that complement or contrast, and use words like acidity, tannins, texture and creamy.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Explain why a wine and a dish go well together.',
    'Use pairing vocabulary: complement, contrast, acidity, tannins.',
    'Recommend a wine for each course of a meal.',
  ],

  // Read the Menu: read, then answer the questions (shown beside the menu on wide screens).
  menuReading: {
    title: 'Bistro Noir — Tonight\'s Menu with Wine Pairings',
    intro: 'Read the menu. Each dish has a wine that goes well with it.',
    sections: [
      {
        heading: 'Starter',
        items: [
          { name: 'Seared scallops', note: 'pair with Chablis — its crisp acidity keeps the dish fresh', price: '$12' },
        ],
      },
      {
        heading: 'Main courses',
        items: [
          { name: 'Grilled steak', note: 'pair with Malbec — the tannins cut through the rich meat', price: '$28' },
          { name: 'Creamy mushroom pasta', note: 'pair with Chardonnay — the creamy texture complements the sauce', price: '$19' },
          { name: 'Spicy Thai curry', note: 'pair with off-dry Riesling — a little sweetness balances the spice', price: '$18' },
        ],
      },
      {
        heading: 'Dessert',
        items: [
          { name: 'Dark chocolate cake', note: 'pair with ruby port', price: '$9' },
        ],
      },
    ],
    questions: [
      { question: 'Which wine pairs with the grilled steak?', options: ['Malbec', 'Chablis', 'Riesling'], correctIndex: 0 },
      { question: 'What does the Riesling do with the spicy curry?', options: ['It balances the spice', 'It adds more spice', 'It cuts through the cream'], correctIndex: 0 },
      { question: 'Which dish goes with a wine that has crisp acidity?', options: ['Seared scallops', 'Grilled steak', 'Dark chocolate cake'], correctIndex: 0 },
      { question: 'Which wine complements the creamy mushroom pasta?', options: ['Riesling', 'Chardonnay', 'Malbec'], correctIndex: 1 },
      { question: 'Which course is the dark chocolate cake?', options: ['Starter', 'Main course', 'Dessert'], correctIndex: 2 },
    ],
  },

  vocabulary: [
    { word: 'PAIR', partOfSpeech: 'verb', definition: 'To match one thing with another.', example: 'We often pair red wine with steak.', imageSlug: img('red-wine-steak-match') },
    { word: 'PAIRING', partOfSpeech: 'noun', definition: 'A combination of food and wine that goes well together.', example: 'Wine and cheese is a classic pairing.', imageSlug: img('classic-wine-cheese-combination') },
    { word: 'COMPLEMENT', partOfSpeech: 'verb', definition: 'To go well with something and make it better.', example: 'This white wine complements seafood.', imageSlug: img('white-wine-seafood-complement') },
    { word: 'CONTRAST', partOfSpeech: 'verb', definition: 'To be different in a good way.', example: 'A sweet wine can contrast a spicy dish.', imageSlug: img('sweet-wine-spicy-contrast') },
    { word: 'CREAMY', partOfSpeech: 'adjective', definition: 'Soft and smooth, like cream.', example: 'The wine goes well with creamy pasta.', imageSlug: img('wine-with-creamy-pasta') },
    { word: 'ACIDITY', partOfSpeech: 'noun', definition: 'The sour, fresh quality in wine.', example: 'The acidity balances the rich sauce.', imageSlug: img('wine-acidity-rich-sauce-balance') },
    { word: 'TANNINS', partOfSpeech: 'noun', definition: 'The dry, slightly bitter feeling in red wines.', example: 'The tannins make the wine feel stronger.', imageSlug: img('red-wine-tannin-mouthfeel') },
    { word: 'DECANT', partOfSpeech: 'verb', definition: 'To pour wine into another container to let air in.', example: "Let's decant the red wine before dinner.", imageSlug: img('decant-red-wine-before-dinner') },
    { word: 'TEXTURE', partOfSpeech: 'noun', definition: 'How something feels in the mouth.', example: 'The texture of this wine is silky.', imageSlug: img('silky-wine-mouthfeel') },
    { word: 'COURSE', partOfSpeech: 'noun', definition: 'One part of a meal: starter, main or dessert.', example: 'We had a different wine with each course.', imageSlug: img('different-wines-three-meal-courses') },
  ],

  phrasalVerbs: [
    { phrase: 'GO WELL WITH', definition: 'To taste good together.', example: 'Sauvignon Blanc goes well with goat cheese.', imageSlug: img('sauvignon-blanc-goat-cheese') },
    { phrase: 'CUT THROUGH', definition: 'To reduce the heavy feeling of rich or fatty food.', example: 'The acidity cuts through the creamy sauce.', imageSlug: img('acidity-lightens-rich-sauce') },
    { phrase: 'What would you pair with…?', tag: 'phrase', definition: 'Ask for a pairing recommendation.', example: '"What would you pair with spicy Thai food?"', imageSlug: img('thai-food-wine-question') },
    { phrase: 'This wine complements the…', tag: 'phrase', definition: 'Say a wine makes a dish better.', example: '"This light white wine complements the fish perfectly."', imageSlug: img('light-white-wine-with-fish') },
    { phrase: 'Red with red meat, white with fish.', tag: 'phrase', definition: 'A classic, simple pairing rule.', example: '"When in doubt: red with red meat, white with fish."', inAction: 'Rules can be broken! A light red like Pinot Noir can pair beautifully with salmon.', imageSlug: img('red-meat-white-fish-pairing-comparison') },
    { phrase: 'A sweet wine to balance the spice.', tag: 'phrase', definition: 'Explain a contrasting pairing.', example: '"For curry, try a sweet wine to balance the spice."', imageSlug: img('slightly-sweet-wine-curry-suggestion') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, you know about wine. I'm making a three-[[course:part of a meal]] dinner. What would you pair with each dish?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Fun! What's the starter?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Prawns with garlic and lemon." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "A crisp white. Its [[acidity:sour, fresh quality]] [[complements:goes well with]] the lemon. And the main?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Mushroom risotto. It's very [[creamy:soft and smooth like cream]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Then a Chardonnay — the rich [[texture:feel in the mouth]] matches the risotto. Or a light Pinot Noir; the earthy notes go well with mushrooms." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Not a big red like Cabernet?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "The strong [[tannins:dry, bitter feel in red wine]] would hide the delicate flavours. Save that for steak. If you open a red, [[decant:pour into another container for air]] it an hour before." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Great tip. And dessert is chocolate cake." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "A sweet port. The [[contrast:being different in a good way]] with the bitter chocolate is amazing. That's my favourite [[pairing:food and wine that go well together]]!" },
  ],

  matchingExercise: [
    { word: 'PAIRING', definition: 'Food and wine that go well together' },
    { word: 'COMPLEMENT', definition: 'To go well with something' },
    { word: 'CONTRAST', definition: 'To be different in a good way' },
    { word: 'ACIDITY', definition: 'The sour, fresh quality in wine' },
    { word: 'TANNINS', definition: 'The dry, bitter feel in red wine' },
    { word: 'DECANT', definition: 'To pour wine into another container for air' },
  ],

  fillBlankExercise: [
    { before: 'We often', after: 'red wine with steak.', answer: 'pair' },
    { before: 'Wine and cheese is a classic', after: '.', answer: 'pairing' },
    { before: 'This white wine', after: 'seafood beautifully.', answer: 'complements' },
    { before: 'The', after: 'cuts through the rich, creamy sauce.', answer: 'acidity' },
    { before: 'Sauvignon Blanc goes well', after: 'goat cheese.', answer: 'with' },
    { before: 'We had a different wine with each', after: '.', answer: 'course' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "complement" mean in food pairing?', options: ['To say something nice', 'To go well with something', 'To be very different', 'To cook'], correctIndex: 1 },
    { question: 'What are "tannins"?', options: ['Bubbles in wine', 'The dry, bitter feel in red wine', 'The colour of wine', 'Sugar in wine'], correctIndex: 1 },
    { question: 'Why does acidity help with creamy food?', options: ['It makes it sweeter', 'It cuts through the heavy, rich feeling', 'It makes it hotter', 'It adds bubbles'], correctIndex: 1 },
    { question: 'What is a classic simple rule?', options: ['Red with fish, white with steak', 'Red with red meat, white with fish', 'Only sparkling with dessert', 'Never wine with cheese'], correctIndex: 1 },
    { question: 'In the dialogue, what is the main course?', options: ['Steak', 'Prawns', 'Mushroom risotto', 'Chocolate cake'], correctIndex: 2 },
    { question: 'What does Kira suggest with the chocolate cake?', options: ['Chardonnay', 'Cabernet', 'A sweet port', 'Prosecco'], correctIndex: 2 },
  ],
};
