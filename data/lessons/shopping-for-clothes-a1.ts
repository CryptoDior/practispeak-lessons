import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}shopping-for-clothes-a1-${s}.png`;

export const shoppingForClothesA1: Lesson = {
  slug: 'shopping-for-clothes-a1',
  title: 'Shopping for Clothes',
  subtitle: 'Everyday Life · Shopping · A1-A2',
  level: 'A1-A2',
  description:
    'Learn the basic words for shopping for clothes: price, size, sale, cheap and expensive. Ask how much something costs, try clothes on and find the sale section.',
  heroImage: img('hero'),

  objectives: [
    'Ask the price of clothes.',
    'Ask about sizes and try clothes on.',
    'Find the sale section and ask for something cheaper.',
  ],

  vocabulary: [
    { word: 'PRICE', partOfSpeech: 'noun', definition: 'How much money something costs.', example: 'I always look for clothes with a good price.', imageSlug: img('price') },
    { word: 'SALE', partOfSpeech: 'noun', definition: 'When prices are lower than usual.', example: 'The store has a big sale this weekend.', imageSlug: img('sale') },
    { word: 'SIZE', partOfSpeech: 'noun', definition: 'How big or small clothes are: small, medium, large.', example: 'What size is this jacket?', imageSlug: img('size') },
    { word: 'CHEAP', partOfSpeech: 'adjective', definition: 'Not expensive.', example: 'That store sells cheap jeans.', imageSlug: img('cheap') },
    { word: 'EXPENSIVE', partOfSpeech: 'adjective', definition: 'It costs a lot of money.', example: "This dress is too expensive.", imageSlug: img('expensive') },
    { word: 'FITTING ROOM', partOfSpeech: 'noun', definition: 'A small room in a shop where you try on clothes.', example: 'The fitting room is at the back.', imageSlug: img('fitting-room') },
    { word: 'CASHIER', partOfSpeech: 'noun', definition: 'The person who takes your money when you pay.', example: 'Please pay the cashier.', imageSlug: img('cashier') },
    { word: 'SALESPERSON', partOfSpeech: 'noun', definition: 'A person who helps customers find clothes.', example: 'The salesperson found my size.', imageSlug: img('salesperson') },
  ],

  phrasalVerbs: [
    { phrase: 'TRY ON', definition: 'To put on clothes to see if they look good and fit.', example: 'Can I try on this coat?', imageSlug: img('try-on') },
    { phrase: 'How much is this jacket?', tag: 'phrase', definition: 'Ask the price of one thing.', example: '"Excuse me, how much is this jacket?"', inAction: 'One thing: "How much IS this shirt?" Two or more: "How much ARE these shoes?"', imageSlug: img('how-much') },
    { phrase: 'Do you have this in a medium?', tag: 'phrase', definition: 'Ask for a different size.', example: '"It\'s too small. Do you have this in a medium?"', imageSlug: img('in-a-medium') },
    { phrase: 'Where is the sale section?', tag: 'phrase', definition: 'Find the cheaper clothes.', example: '"Excuse me, where is the sale section?"', imageSlug: img('sale-section') },
    { phrase: "That's too expensive. Do you have anything cheaper?", tag: 'phrase', definition: 'Ask for something that costs less.', example: '"That\'s too expensive for me. Do you have anything cheaper?"', imageSlug: img('anything-cheaper') },
    { phrase: "I'll take it.", tag: 'phrase', definition: 'Say you want to buy it.', example: '"It fits perfectly. I\'ll take it!"', imageSlug: img('ill-take-it') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Salesperson', speakerColor: 'orange', text: 'Hello! Can I help you?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Yes, please. How much is this jacket?' },
    { speaker: 'Salesperson', speakerColor: 'orange', text: "It's 90 dollars." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Oh, that's too [[expensive:costs a lot]] for me. Do you have anything [[cheaper:not expensive]]? Where is the [[sale:lower prices]] section?" },
    { speaker: 'Salesperson', speakerColor: 'orange', text: "It's over there, next to the [[fitting room:room to try on clothes]]. These jackets are 40 dollars." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I like this blue one. Do you have it in a medium? This [[size:how big or small]] is small.' },
    { speaker: 'Salesperson', speakerColor: 'orange', text: 'Yes, here you are. Would you like to try it on?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, please. … It fits perfectly! I'll take it." },
    { speaker: 'Salesperson', speakerColor: 'orange', text: 'Great! Please pay the [[cashier:person who takes your money]] at the front.' },
  ],

  matchingExercise: [
    { word: 'PRICE', definition: 'How much money something costs' },
    { word: 'SALE', definition: 'When prices are lower than usual' },
    { word: 'CHEAP', definition: 'Not expensive' },
    { word: 'FITTING ROOM', definition: 'Where you try on clothes' },
    { word: 'CASHIER', definition: 'The person who takes your money' },
    { word: 'TRY ON', definition: 'Put on clothes to see if they fit' },
  ],

  fillBlankExercise: [
    { before: 'How much', after: 'this jacket?', answer: 'is' },
    { before: 'How much', after: 'these shoes?', answer: 'are' },
    { before: 'Do you have this in a', after: '?', answer: 'medium' },
    { before: 'Where is the', after: 'section?', answer: 'sale' },
    { before: 'Can I try', after: 'this coat?', answer: 'on' },
    { before: "It fits perfectly. I'll", after: 'it!', answer: 'take' },
  ],

  multipleChoiceExercise: [
    { question: 'Which question is correct?', options: ['How much is these shoes?', 'How much are these shoes?', 'How many are these shoes?', 'How much these shoes?'], correctIndex: 1 },
    { question: 'Where do you try on clothes?', options: ['At the cashier', 'In the fitting room', 'In the sale section', 'Outside'], correctIndex: 1 },
    { question: 'What is the opposite of "cheap"?', options: ['Small', 'Expensive', 'Big', 'New'], correctIndex: 1 },
    { question: 'In the dialogue, how much is the first jacket?', options: ['40 dollars', '60 dollars', '90 dollars', '100 dollars'], correctIndex: 2 },
    { question: 'What size does Kira need?', options: ['Small', 'Medium', 'Large', 'Extra large'], correctIndex: 1 },
  ],
};
