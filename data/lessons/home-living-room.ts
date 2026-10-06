import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}home-living-room-${s}.png`;

export const homeLivingRoom: Lesson = {
  slug: 'home-living-room',
  title: 'The Living Room',
  subtitle: 'Everyday Life · Home · Living Room',
  level: 'A1-A2',
  description:
    'Learn the names of furniture and things in the living room — sofa, armchair, rug, lamp, curtains, bookshelf — and describe your living room.',
  heroImage: img('hero'),

  objectives: [
    'Name living room furniture and decorations.',
    'Describe where things are in a room.',
    'Talk about your own living room.',
  ],

  vocabulary: [
    { word: 'SOFA / COUCH', partOfSpeech: 'noun', definition: 'A big, soft seat for two or more people.', example: 'We watch TV on the sofa.', imageSlug: img('sofa') },
    { word: 'ARMCHAIR', partOfSpeech: 'noun', definition: 'A big, soft chair for one person, with places for your arms.', example: 'Grandpa always sits in the armchair.', imageSlug: img('armchair') },
    { word: 'CARPET', partOfSpeech: 'noun', definition: 'A soft covering for the whole floor.', example: 'The carpet is warm under my feet.', imageSlug: img('carpet') },
    { word: 'RUG', partOfSpeech: 'noun', definition: 'A small carpet that covers part of the floor.', example: 'There\'s a red rug in front of the sofa.', imageSlug: img('rug') },
    { word: 'COFFEE TABLE', partOfSpeech: 'noun', definition: 'A low table in front of the sofa.', example: 'Put your drink on the coffee table.', imageSlug: img('coffee-table') },
    { word: 'BOOKSHELF', partOfSpeech: 'noun', definition: 'Furniture with shelves for books.', example: 'My bookshelf is full.', imageSlug: img('bookshelf') },
    { word: 'LAMP', partOfSpeech: 'noun', definition: 'A light for a table or the floor.', example: 'Turn on the lamp — it\'s dark.', imageSlug: img('lamp') },
    { word: 'CURTAINS', partOfSpeech: 'noun', definition: 'Pieces of cloth that hang over a window.', example: 'Close the curtains, please.', imageSlug: img('curtains') },
    { word: 'BLINDS', partOfSpeech: 'noun', definition: 'Flat pieces you pull up or down to cover a window.', example: 'Open the blinds to let the sun in.', imageSlug: img('blinds') },
    { word: 'PAINTING', partOfSpeech: 'noun', definition: 'A picture made with paint, often on the wall.', example: 'There\'s a big painting above the sofa.', imageSlug: img('painting') },
  ],

  phrasalVerbs: [
    { phrase: 'There is / There are…', tag: 'phrase', definition: 'Say what is in a room.', example: '"There is a sofa. There are two armchairs."', inAction: 'Use "there is" for one thing and "there are" for two or more.', imageSlug: img('there-is') },
    { phrase: 'in front of / behind / above / next to', tag: 'phrase', definition: 'Say where things are.', example: '"The coffee table is in front of the sofa. The painting is above it."', imageSlug: img('prepositions') },
    { phrase: 'SIT DOWN', definition: 'To take a seat.', example: 'Please sit down on the sofa.', imageSlug: img('sit-down') },
    { phrase: 'Make yourself at home.', tag: 'phrase', definition: 'A friendly thing to say to a guest: relax and feel comfortable.', example: '"Come in! Make yourself at home."', imageSlug: img('at-home') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Come in, Maria! Make yourself at home. Please sit down on the [[sofa:big soft seat]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Thank you! Your living room is lovely. I love that [[painting:picture made with paint]] above the sofa." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Thanks! My brother painted it. Would you like a drink? You can put it on the [[coffee table:low table in front of the sofa]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Yes, please. Water is fine. Wow, your [[bookshelf:furniture for books]] is full!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I love reading. I read in that [[armchair:soft chair for one person]], next to the [[lamp:light for a table or floor]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That's very cosy. Is the [[rug:small carpet]] new?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, from Morocco! Oh, the sun is in your eyes. Let me close the [[curtains:cloth over the window]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Thanks. It's a perfect room to relax in." },
  ],

  matchingExercise: [
    { word: 'ARMCHAIR', definition: 'A soft chair for one person' },
    { word: 'RUG', definition: 'A small carpet' },
    { word: 'COFFEE TABLE', definition: 'A low table in front of the sofa' },
    { word: 'BOOKSHELF', definition: 'Furniture for books' },
    { word: 'CURTAINS', definition: 'Cloth that hangs over a window' },
    { word: 'LAMP', definition: 'A light for a table or the floor' },
  ],

  fillBlankExercise: [
    { before: 'There', after: 'two armchairs in my living room.', answer: 'are' },
    { before: 'There', after: 'a big sofa.', answer: 'is' },
    { before: 'The coffee table is in', after: 'of the sofa.', answer: 'front' },
    { before: 'Please sit', after: '.', answer: 'down' },
    { before: 'Make yourself at', after: '.', answer: 'home' },
    { before: 'Close the', after: ', please. The sun is too bright.', answer: 'curtains' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the difference between a carpet and a rug?', options: ['A carpet covers the whole floor; a rug covers part', 'A rug covers the whole floor', 'No difference', 'A rug is on the wall'], correctIndex: 0 },
    { question: 'Which is correct?', options: ['There is two sofas.', 'There are two sofas.', 'There be two sofas.', 'It are two sofas.'], correctIndex: 1 },
    { question: 'What do you say to make a guest feel comfortable?', options: ['Go away.', 'Make yourself at home.', 'Sit up.', 'Be quick.'], correctIndex: 1 },
    { question: 'In the dialogue, who painted the painting?', options: ['Kira', "Kira's brother", 'Maria', 'A famous artist'], correctIndex: 1 },
    { question: 'Where is the rug from?', options: ['Spain', 'Morocco', 'India', 'Mexico'], correctIndex: 1 },
  ],
};
