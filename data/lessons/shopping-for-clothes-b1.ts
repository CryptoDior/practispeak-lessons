import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const OLIVER = R2 + 'oliver-icon.png';
const CLERK = R2 + 'store-clerk-icon.png';
const img = (s: string) => `${R2}shopping-for-clothes-b1-${s}.png`;

export const shoppingForClothesB1: Lesson = {
  slug: 'shopping-for-clothes-b1',
  title: 'Shopping for Clothes: Browsing, Exchanges and Refunds',
  subtitle: 'Everyday Life · Shopping · B1-B2',
  level: 'B1-B2',
  description:
    'Shop with confidence: say you are just browsing, ask for affordable options, check prices, and ask about exchange and refund policies.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Politely say you are just browsing.',
    'Ask about affordability, quality and stock.',
    'Ask about exchange and refund policies.',
  ],

  vocabulary: [
    { word: 'BROWSE', partOfSpeech: 'verb', definition: 'To look at things without planning to buy right away.', example: 'I like to browse before I decide.', imageSlug: img('browse-clothing-racks') },
    { word: 'AFFORDABLE', partOfSpeech: 'adjective', definition: 'Not too expensive; you can pay for it.', example: "I'm looking for an affordable winter jacket.", imageSlug: img('affordable-winter-jacket') },
    { word: 'EXCHANGE', partOfSpeech: 'noun / verb', definition: 'To return something and get a different item instead.', example: 'Can I exchange this for a larger size?', imageSlug: img('exchange-for-larger-size') },
    { word: 'REFUND', partOfSpeech: 'noun', definition: 'Money given back when you return something.', example: 'Not every store gives refunds.', imageSlug: img('refund-or-no-refund') },
    { word: 'PRICE TAG', partOfSpeech: 'noun', definition: 'A label that shows how much something costs.', example: "There's no price tag on this shirt.", imageSlug: img('missing-shirt-price-tag') },
    { word: 'QUALITY', partOfSpeech: 'noun', definition: 'How good something is and how long it will last.', example: 'These boots are good quality.', imageSlug: img('durable-quality-boots') },
    { word: 'STOCK', partOfSpeech: 'noun', definition: 'The items a shop has available to sell.', example: "We don't have that colour in stock.", imageSlug: img('colour-not-in-stock') },
    { word: 'RECEIPT', partOfSpeech: 'noun', definition: 'The paper that proves you paid.', example: 'Keep your receipt in case you need to return it.', imageSlug: img('keep-shopping-receipt') },
  ],

  phrasalVerbs: [
    { phrase: 'SHOP AROUND', definition: 'To compare different shops to find the best price.', example: 'She always shops around before buying.', imageSlug: img('compare-prices-between-shops') },
    { phrase: "I'm just browsing, thank you.", tag: 'phrase', definition: 'Politely tell the assistant you don\'t need help yet.', example: '"Can I help you?" → "I\'m just browsing, thank you."', imageSlug: img('politely-just-browsing') },
    { phrase: 'Do you have anything more affordable in this style?', tag: 'phrase', definition: 'Ask for a cheaper option.', example: '"I love this style. Do you have anything more affordable in this style?"', imageSlug: img('request-affordable-same-style') },
    { phrase: "What's your exchange policy?", tag: 'phrase', definition: 'Ask about the rules for exchanging items.', example: '"It\'s a gift. What\'s your exchange policy?"', imageSlug: img('ask-gift-exchange-policy') },
    { phrase: 'Can I get a refund if it doesn\'t fit?', tag: 'phrase', definition: 'Ask if you can get your money back.', example: '"Can I get a refund if it doesn\'t fit, or only store credit?"', inAction: 'EXCHANGE = swap for another item. REFUND = money back. STORE CREDIT = a voucher to spend in the same shop.', imageSlug: img('ask-refund-versus-credit') },
    { phrase: "I couldn't find the price tag. Could you check the price?", tag: 'phrase', definition: 'Ask for a price when the label is missing.', example: '"I couldn\'t find the price tag. Could you check the price? It\'s on this bag."', imageSlug: img('check-price-untagged-bag') },
    { phrase: 'Is this in stock in a larger size?', tag: 'phrase', definition: 'Ask about availability.', example: '"Is this in stock in a larger size — a size 42?"', imageSlug: img('ask-for-size-forty-two') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Clerk', speakerAvatar: CLERK, speakerColor: 'orange', text: 'Good afternoon! How can I help you today?' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Thanks, I'm just [[browseing:looking without buying yet]] for now. I'm shopping around for a winter coat." },
    { speaker: 'Clerk', speakerAvatar: CLERK, speakerColor: 'orange', text: "Sure. Let me know if you need anything." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Actually — I couldn't find the [[price tag:label with the price]] on this grey coat. Could you check the price?" },
    { speaker: 'Clerk', speakerAvatar: CLERK, speakerColor: 'orange', text: "It's 220 dollars. It's excellent [[quality:how good and long-lasting]] — pure wool." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "It's lovely, but do you have anything more [[affordable:not too expensive]] in this style? Under 150 if possible." },
    { speaker: 'Clerk', speakerAvatar: CLERK, speakerColor: 'orange', text: "This one is 140, similar style, wool blend. I'm afraid we only have a medium in [[stock:available to sell]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "I'll take the medium. What's your [[exchange:swap for another item]] policy if it doesn't fit?" },
    { speaker: 'Clerk', speakerAvatar: CLERK, speakerColor: 'orange', text: "You can exchange within 30 days with the [[receipt:proof of payment]], or get a full [[refund:money back]] within 14 days." },
  ],

  matchingExercise: [
    { word: 'BROWSE', definition: 'Look without planning to buy yet' },
    { word: 'AFFORDABLE', definition: 'Not too expensive' },
    { word: 'EXCHANGE', definition: 'Return an item for a different one' },
    { word: 'REFUND', definition: 'Money given back' },
    { word: 'STOCK', definition: 'Items available to sell' },
    { word: 'SHOP AROUND', definition: 'Compare shops to find the best price' },
  ],

  fillBlankExercise: [
    { before: "I'm just", after: ', thank you.', answer: 'browsing' },
    { before: 'Do you have anything more', after: 'in this style?', answer: 'affordable' },
    { before: "What's your exchange", after: '?', answer: 'policy' },
    { before: 'Can I get a', after: "if it doesn't fit?", answer: 'refund' },
    { before: "We don't have that colour in", after: '.', answer: 'stock' },
    { before: 'She always shops', after: 'before buying.', answer: 'around' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the difference between an exchange and a refund?', options: ['No difference', 'Exchange = another item; refund = money back', 'Refund = another item', 'Exchange = discount'], correctIndex: 1 },
    { question: 'Which phrase means you don\'t need help yet?', options: ["I'm just browsing.", "I'll take it.", 'Where is the cashier?', 'Is this on sale?'], correctIndex: 0 },
    { question: 'What does "in stock" mean?', options: ['Very cheap', 'Available to buy in the shop', 'Old', 'Sold out'], correctIndex: 1 },
    { question: 'In the dialogue, how much is the coat Oliver buys?', options: ['220 dollars', '150 dollars', '140 dollars', '100 dollars'], correctIndex: 2 },
    { question: 'How long can Oliver get a full refund?', options: ['7 days', '14 days', '30 days', '60 days'], correctIndex: 1 },
  ],
};
