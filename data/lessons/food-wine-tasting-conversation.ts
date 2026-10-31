import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}food-wine-tasting-conversation-${s}.png`;

export const foodWineTastingConversation: Lesson = {
  slug: 'food-wine-tasting-conversation',
  title: 'Wine Tasting Conversation',
  subtitle: 'Food & Drink · Wine · Lesson 4',
  level: 'B1-B2',
  description:
    'Learn the language of a wine tasting: swirl, sip and describe the aroma, body and finish of a wine — and give your opinion like a sommelier.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Describe the smell of a wine: aroma, bouquet, notes.',
    'Describe body, texture and finish.',
    'Give opinions during a wine tasting.',
  ],

  // Read the Menu: read, then answer the questions (shown beside the menu on wide screens).
  menuReading: {
    title: 'Tasting Card — Three Wines',
    intro: 'Read the tasting card. Then answer the questions.',
    sections: [
      {
        heading: 'Wine A — Chardonnay',
        items: [
          { name: 'Aroma', note: 'apple and butter', price: '' },
          { name: 'Notes', note: 'vanilla and oak', price: '' },
          { name: 'Palate', note: 'full-bodied and smooth', price: '' },
          { name: 'Finish', note: 'long', price: '' },
        ],
      },
      {
        heading: 'Wine B — Sauvignon Blanc',
        items: [
          { name: 'Aroma', note: 'lemon and fresh grass', price: '' },
          { name: 'Notes', note: 'citrus', price: '' },
          { name: 'Palate', note: 'crisp and light', price: '' },
          { name: 'Finish', note: 'short', price: '' },
        ],
      },
      {
        heading: 'Wine C — Pinot Noir',
        items: [
          { name: 'Aroma', note: 'red cherry', price: '' },
          { name: 'Notes', note: 'earthy, with mushroom', price: '' },
          { name: 'Palate', note: 'balanced', price: '' },
          { name: 'Finish', note: 'medium', price: '' },
        ],
      },
    ],
    questions: [
      { question: 'Which wine is oaky?', options: ['Wine A', 'Wine B', 'Wine C'], correctIndex: 0 },
      { question: 'Which wine tastes crisp?', options: ['Wine A', 'Wine B', 'Wine C'], correctIndex: 1 },
      { question: 'Which wine has earthy notes?', options: ['Wine A', 'Wine B', 'Wine C'], correctIndex: 2 },
      { question: 'Which wine has the longest finish?', options: ['Wine A', 'Wine B', 'Wine C'], correctIndex: 0 },
      { question: 'Which wine has a cherry aroma?', options: ['Wine A', 'Wine B', 'Wine C'], correctIndex: 2 },
    ],
  },

  vocabulary: [
    { word: 'AROMA', partOfSpeech: 'noun', definition: 'The smell of the wine.', example: 'The wine has a fruity aroma.', imageSlug: img('fruity-wine-aroma') },
    { word: 'BOUQUET', partOfSpeech: 'noun', definition: 'The full, complex smell of the wine in the glass.', example: 'The bouquet is strong and floral.', imageSlug: img('strong-floral-bouquet') },
    { word: 'NOTES', partOfSpeech: 'noun', definition: 'Small parts of a smell or taste.', example: 'I can taste notes of chocolate.', imageSlug: img('chocolate-tasting-notes') },
    { word: 'PALATE', partOfSpeech: 'noun', definition: 'The taste and feeling of wine in your mouth.', example: 'It feels smooth on the palate.', imageSlug: img('smooth-palate-mouthfeel') },
    { word: 'FULL-BODIED', partOfSpeech: 'adjective', definition: 'Rich and strong in flavor.', example: 'This is a full-bodied red wine.', imageSlug: img('full-bodied-red') },
    { word: 'CRISP', partOfSpeech: 'adjective', definition: 'Fresh and clean.', example: 'The white wine is crisp and refreshing.', imageSlug: img('crisp-white-wine') },
    { word: 'EARTHY', partOfSpeech: 'adjective', definition: 'Smelling or tasting of soil or plants.', example: 'The wine has an earthy flavor.', imageSlug: img('earthy-flavour') },
    { word: 'OAKY', partOfSpeech: 'adjective', definition: 'Tasting of the wood from the barrel.', example: 'This wine has an oaky aftertaste.', imageSlug: img('oaky-aftertaste') },
    { word: 'FINISH', partOfSpeech: 'noun', definition: 'The taste that stays after you drink.', example: 'The finish is long and smooth.', imageSlug: img('long-smooth-finish') },
    { word: 'BALANCE', partOfSpeech: 'noun', definition: 'When no flavor is too strong.', example: 'The wine has a perfect balance.', imageSlug: img('balanced-wine-flavours') },
  ],

  phrasalVerbs: [
    { phrase: 'Swirl, smell, sip.', tag: 'phrase', definition: 'The three steps of tasting: move the wine in the glass, smell it, drink a little.', example: '"Swirl, smell, sip: first swirl the wine, then smell it, then take a small sip."', inAction: 'Swirling adds air to the wine and releases the aroma. That\'s why tasters do it before smelling.', imageSlug: img('swirl-smell-sip-sequence') },
    { phrase: 'It has a fruity aroma.', tag: 'phrase', definition: 'Describe the smell.', example: '"It has a fruity aroma, like ripe cherries."', imageSlug: img('ripe-cherry-aroma') },
    { phrase: 'I can smell notes of…', tag: 'phrase', definition: 'Name specific smells.', example: '"I can smell notes of vanilla and berries."', imageSlug: img('vanilla-berry-aroma') },
    { phrase: "It's smooth on the palate.", tag: 'phrase', definition: 'Describe how it feels in your mouth.', example: '"It\'s full-bodied and it\'s smooth on the palate."', imageSlug: img('full-bodied-smooth-palate') },
    { phrase: 'The finish is long and rich.', tag: 'phrase', definition: 'Describe the aftertaste.', example: '"The finish is long and rich — I can still taste it."', imageSlug: img('lingering-rich-finish') },
    { phrase: 'I really like the balance of this wine.', tag: 'phrase', definition: 'Give a positive opinion.', example: '"I really like the balance of this wine. It\'s not too sweet or too dry."', imageSlug: img('not-too-sweet-or-dry') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Welcome to the tasting! First, swirl the wine gently, then smell it." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Mmm. It has a very fruity [[aroma:smell]]. I can smell [[notes:small parts of a smell]] of blackberry." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Exactly. And the [[bouquet:full, complex smell]]? Anything else?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Something a bit [[earthy:like soil or plants]]… like mushrooms?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Very good! Now take a small sip. How does it feel?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It's [[full-bodied:rich and strong]], but smooth on the [[palate:taste in the mouth]]. And a little [[oaky:tasting of wood]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That's from 14 months in French oak. And the [[finish:the taste that stays]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Long and rich. I really like the [[balance:no flavor too strong]] of this wine. Is the next one a white?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Yes — a Sauvignon Blanc. Much lighter and [[crisp:fresh and clean]]. Let's try it!" },
  ],

  matchingExercise: [
    { word: 'AROMA', definition: 'The smell of the wine' },
    { word: 'PALATE', definition: 'The taste and feel in your mouth' },
    { word: 'FULL-BODIED', definition: 'Rich and strong' },
    { word: 'CRISP', definition: 'Fresh and clean' },
    { word: 'FINISH', definition: 'The taste that stays after drinking' },
    { word: 'SWIRL', definition: 'To move wine around the glass' },
  ],

  fillBlankExercise: [
    { before: 'Please', after: 'the wine before smelling it.', answer: 'swirl' },
    { before: 'Take a small', after: '.', answer: 'sip' },
    { before: 'I can taste', after: 'of chocolate.', answer: 'notes' },
    { before: 'It feels smooth on the', after: '.', answer: 'palate' },
    { before: 'The', after: 'is long and smooth.', answer: 'finish' },
    { before: 'The white wine is', after: 'and refreshing.', answer: 'crisp' },
  ],

  multipleChoiceExercise: [
    { question: 'What are the three steps of wine tasting?', options: ['Pour, drink, pay', 'Swirl, smell, sip', 'Open, smell, drink', 'Sip, swallow, swirl'], correctIndex: 1 },
    { question: 'What is the "finish" of a wine?', options: ['The end of the bottle', 'The taste that stays after you drink', 'The label', 'The cork'], correctIndex: 1 },
    { question: 'What does "full-bodied" mean?', options: ['Light and fresh', 'Rich and strong', 'Sweet', 'Sparkling'], correctIndex: 1 },
    { question: 'Why do people swirl wine?', options: ['To cool it down', 'To add air and release the aroma', 'To check the color only', 'To make bubbles'], correctIndex: 1 },
    { question: 'In the dialogue, what fruit does Kira smell?', options: ['Cherry', 'Blackberry', 'Lemon', 'Apple'], correctIndex: 1 },
    { question: 'How long was the wine kept in oak?', options: ['6 months', '10 months', '14 months', '2 years'], correctIndex: 2 },
  ],
};
