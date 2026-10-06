import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-articles-${s}.png`;

export const grammarArticles: Lesson = {
  slug: 'grammar-articles',
  title: 'Articles: A, An and The',
  subtitle: 'Grammar · A1-A2',
  level: 'A1-A2',
  description:
    'Learn when to use "a", "an", "the" — or no article at all. Use "a/an" for any one thing, "the" for a thing you both know, and nothing for things in general.',
  heroImage: img('hero'),

  objectives: [
    'Use "a" and "an" for one thing that is not specific.',
    'Use "the" for a thing you and the listener both know.',
    'Use no article for things in general.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: A / An vs The',
    description:
      'Use A before a consonant sound (a dog) and AN before a vowel sound (an apple). Use THE when you and the listener know which one. Use NO article for things in general: "Cats are nice."',
    positiveLabel: 'A / An — any one',
    negativeLabel: 'The — this specific one',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'I want a dog.', note: 'Any dog, not a specific one.' },
      { sentence: 'I need a pencil.', note: 'Any pencil is OK.' },
      { sentence: "She's an artist.", note: '"artist" starts with a vowel sound → an.' },
      { sentence: 'An apple a day is good for you.', note: 'Any apple.' },
    ],
    negativeExamples: [
      { sentence: 'The cat is on the table.', note: 'We both know which cat and which table.' },
      { sentence: 'I saw the movie you told me about.', note: 'A specific movie.' },
      { sentence: 'The sun is hot today.', note: 'There is only one sun.' },
    ],
  },

  vocabulary: [
    { word: 'A', partOfSpeech: 'article', definition: 'Use before one thing that starts with a consonant sound. It means "any one".', example: 'I have a car.', imageSlug: img('a') },
    { word: 'AN', partOfSpeech: 'article', definition: 'Use before one thing that starts with a vowel sound (a, e, i, o, u).', example: 'I want an orange.', imageSlug: img('an') },
    { word: 'THE', partOfSpeech: 'article', definition: 'Use for a specific thing that you and the listener both know.', example: 'The menu is on the table.', imageSlug: img('the') },
    { word: 'SPECIFIC', partOfSpeech: 'adjective', definition: 'One exact thing, not any thing.', example: '"The book on the shelf" is a specific book.', imageSlug: img('specific') },
    { word: 'IN GENERAL', partOfSpeech: 'phrase', definition: 'About all things of one type, not one thing.', example: 'Cats are nice. (cats in general)', imageSlug: img('in-general') },
    { word: 'VOWEL', partOfSpeech: 'noun', definition: 'The letters a, e, i, o and u.', example: '"Apple" starts with a vowel, so we say "an apple".', imageSlug: img('vowel') },
    { word: 'CONSONANT', partOfSpeech: 'noun', definition: 'All letters that are not vowels, like b, c, d.', example: '"Dog" starts with a consonant, so we say "a dog".', imageSlug: img('consonant') },
  ],

  phrasalVerbs: [
    { phrase: 'a + consonant sound', tag: 'rule', definition: 'Use "a" before words that start with a consonant sound.', example: 'a book, a cat, a university', inAction: 'Listen to the SOUND, not the letter. "University" starts with a "you" sound, so we say "a university".', imageSlug: img('rule-a') },
    { phrase: 'an + vowel sound', tag: 'rule', definition: 'Use "an" before words that start with a vowel sound.', example: 'an apple, an egg, an hour', inAction: '"Hour" starts with a silent h, so it sounds like "our". We say "an hour".', imageSlug: img('rule-an') },
    { phrase: 'the + specific thing', tag: 'rule', definition: 'Use "the" when the listener knows which one.', example: '"Where\'s the menu?" (the menu in this café)', imageSlug: img('rule-the') },
    { phrase: 'the + only one', tag: 'rule', definition: 'Use "the" when there is only one.', example: 'the sun, the moon, the sky', imageSlug: img('rule-only-one') },
    { phrase: 'no article + general', tag: 'rule', definition: 'Use no article for things in general (plural or uncountable).', example: 'Sugar is sweet. Dolphins are smart.', imageSlug: img('rule-no-article') },
    { phrase: 'a → the', tag: 'rule', definition: 'First time: "a". Second time: "the".', example: 'I saw a dog. The dog was very big.', imageSlug: img('rule-a-then-the') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Hi Tim! Have you tried [[the:a specific thing we both know]] coffee here?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No, I haven't. Is it good?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, it's amazing! I always order [[a:any one]] cappuccino." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'll have a cappuccino too, then. Where's the menu?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'The menu is on the table. They also have [[an:any one, before a vowel sound]] amazing apple cake.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Great. I love cake! And [[in general:about all things of one type]], I love sweet things.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Me too. Look, there's a free table by the window." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Perfect. Let's sit at the table by the window." },
  ],

  matchingExercise: [
    { word: 'A', definition: 'Any one thing, before a consonant sound' },
    { word: 'AN', definition: 'Any one thing, before a vowel sound' },
    { word: 'THE', definition: 'A specific thing we both know' },
    { word: 'NO ARTICLE', definition: 'Things in general' },
    { word: 'VOWEL', definition: 'The letters a, e, i, o, u' },
    { word: 'SPECIFIC', definition: 'One exact thing' },
  ],

  fillBlankExercise: [
    { before: 'I want to buy', after: 'new shirt today.', answer: 'a' },
    { before: 'She lives in', after: 'apartment near the park.', answer: 'an' },
    { before: '', after: 'sun sets in the west.', answer: 'The' },
    { before: 'I need', after: 'umbrella. It might rain.', answer: 'an' },
    { before: 'Can you pass me', after: 'salt, please?', answer: 'the' },
    { before: 'He wants to be', after: 'astronaut.', answer: 'an' },
    { before: "Let's have", after: 'picnic in the park tomorrow.', answer: 'a' },
    { before: 'Have you seen', after: 'movie we watched last night?', answer: 'the' },
  ],

  multipleChoiceExercise: [
    { question: 'Choose the correct sentence.', options: ['I have a apple.', 'I have an apple.', 'I have the apple a.', 'I have apple an.'], correctIndex: 1 },
    { question: 'Choose the correct word: "___ moon is beautiful tonight."', options: ['A', 'An', 'The', '(no article)'], correctIndex: 2 },
    { question: 'Choose the correct word: "I study at ___ university."', options: ['a', 'an', 'the', '(no article)'], correctIndex: 0 },
    { question: 'Which sentence talks about things in general?', options: ['The cats are on the bed.', 'Cats are popular pets.', 'A cat is on my car.', 'I saw the cat.'], correctIndex: 1 },
    { question: '"I saw a dog. ___ dog was very big." Which word?', options: ['A', 'An', 'The', '(no article)'], correctIndex: 2 },
    { question: 'Choose the correct word: "It takes ___ hour to get there."', options: ['a', 'an', 'the', '(no article)'], correctIndex: 1 },
  ],
};
