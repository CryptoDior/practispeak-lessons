import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const TIM = R2 + 'tim-professional-portrait.png';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}clothes-summer-${s}.png`;

export const clothesSummer: Lesson = {
  slug: 'clothes-summer',
  title: 'Summer Clothes',
  subtitle: 'Everyday Life · Clothes · Summer',
  level: 'A1-A2',
  description:
    'Learn the names of summer clothes — tank tops, crop tops, floral shirts, shorts — plus useful adjectives and phrasal verbs to talk about what you wear.',
  heroImage: img('hero'),

  objectives: [
    'Name common summer tops, shirts and shorts.',
    'Describe clothes with adjectives like breathable and timeless.',
    'Use phrasal verbs like roll up, throw on and tuck in.',
  ],

  vocabulary: [
    { word: 'TANK TOP', partOfSpeech: 'noun', definition: 'A top with no sleeves.', example: 'I wear a tank top when it\'s very hot.', imageSlug: img('tank-top') },
    { word: 'CROP TOP', partOfSpeech: 'noun', definition: 'A short top that shows your stomach.', example: 'She bought a white crop top.', imageSlug: img('crop-top') },
    { word: 'FLORAL SHIRT', partOfSpeech: 'noun', definition: 'A shirt with a pattern of flowers.', example: 'His floral shirt is very colourful.', imageSlug: img('floral-shirt') },
    { word: 'HAWAIIAN SHIRT', partOfSpeech: 'noun', definition: 'A bright shirt with tropical prints, like palm trees.', example: 'He always wears a Hawaiian shirt on holiday.', imageSlug: img('hawaiian-shirt') },
    { word: 'POLO SHIRT', partOfSpeech: 'noun', definition: 'A short-sleeved shirt with a collar and a few buttons.', example: 'A polo shirt is smart but casual.', imageSlug: img('polo-shirt') },
    { word: 'DENIM SHORTS', partOfSpeech: 'noun', definition: 'Short trousers made of jeans material.', example: 'I love my old denim shorts.', imageSlug: img('denim-shorts') },
    { word: 'CARGO SHORTS', partOfSpeech: 'noun', definition: 'Shorts with big pockets on the sides.', example: 'Cargo shorts are good for hiking.', imageSlug: img('cargo-shorts') },
    { word: 'BREATHABLE', partOfSpeech: 'adjective', definition: 'Letting air pass through, so you stay cool.', example: 'Cotton is a breathable fabric.', imageSlug: img('breathable') },
    { word: 'TIMELESS', partOfSpeech: 'adjective', definition: 'Always in fashion; never old-fashioned.', example: 'A white T-shirt is timeless.', imageSlug: img('timeless') },
    { word: 'RETRO', partOfSpeech: 'adjective', definition: 'In the style of the past.', example: 'I like her retro sunglasses.', imageSlug: img('retro') },
  ],

  phrasalVerbs: [
    { phrase: 'ROLL UP', definition: 'To fold your sleeves or trousers upwards.', example: 'It\'s hot. I\'ll roll up my sleeves.', imageSlug: img('roll-up') },
    { phrase: 'THROW ON', definition: 'To put on clothes quickly and without thinking much.', example: 'I just threw on a T-shirt and shorts.', imageSlug: img('throw-on') },
    { phrase: 'TUCK IN', definition: 'To put the bottom of your shirt inside your trousers or shorts.', example: 'Tuck in your shirt — it looks smarter.', imageSlug: img('tuck-in') },
    { phrase: 'WEAR OUT', definition: 'To use clothes so much that they become old and damaged.', example: 'I wore out my sandals this summer.', imageSlug: img('wear-out') },
    { phrase: 'PULL OFF', definition: 'To wear something unusual and look good in it.', example: 'Not everyone can pull off a Hawaiian shirt!', inAction: '"Pull off" (a style) is informal. "He can really pull off bright colours" = he looks good in them.', imageSlug: img('pull-off') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Tim! Nice [[Hawaiian shirt:bright shirt with tropical prints]]. Very summery!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Thanks! It's so hot today. I just [[threw on:put on quickly]] this shirt and my [[cargo shorts:shorts with big pockets]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Honestly, not everyone can [[pull off:wear and look good in]] that shirt, but you can." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Ha, thanks. I like your outfit too. Is that a [[tank top:top with no sleeves]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, it's linen, so it's very [[breathable:lets air through]]. And these are my favourite [[denim shorts:shorts made of jeans material]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "They look a bit old!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I know, I've almost [[worn out:used until old and damaged]] them. But they're [[retro:in the style of the past]] now — very fashionable!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "True. Denim is [[timeless:always in fashion]]. Come on, let's get an ice cream." },
  ],

  matchingExercise: [
    { word: 'TANK TOP', definition: 'A top with no sleeves' },
    { word: 'CROP TOP', definition: 'A short top that shows your stomach' },
    { word: 'CARGO SHORTS', definition: 'Shorts with big side pockets' },
    { word: 'BREATHABLE', definition: 'Lets air through, keeps you cool' },
    { word: 'ROLL UP', definition: 'Fold sleeves upwards' },
    { word: 'TUCK IN', definition: 'Put your shirt inside your trousers' },
  ],

  fillBlankExercise: [
    { before: "It's hot. I'll roll", after: 'my sleeves.', answer: 'up' },
    { before: 'I just threw', after: 'a T-shirt and shorts.', answer: 'on' },
    { before: 'Tuck', after: 'your shirt — it looks smarter.', answer: 'in' },
    { before: 'Cotton is a', after: 'fabric.', answer: 'breathable' },
    { before: 'Not everyone can pull', after: 'a Hawaiian shirt!', answer: 'off' },
    { before: 'A white T-shirt is', after: '. It\'s always in fashion.', answer: 'timeless' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a tank top?', options: ['A top with long sleeves', 'A top with no sleeves', 'A coat', 'A pair of shorts'], correctIndex: 1 },
    { question: 'What does "throw on" mean?', options: ['Throw clothes away', 'Put on clothes quickly', 'Wash clothes', 'Buy clothes'], correctIndex: 1 },
    { question: 'Which fabric adjective keeps you cool?', options: ['Breathable', 'Waterproof', 'Heavy', 'Warm'], correctIndex: 0 },
    { question: 'In the dialogue, what is Kira\'s top made of?', options: ['Cotton', 'Linen', 'Denim', 'Wool'], correctIndex: 1 },
    { question: 'What do they do at the end?', options: ['Go shopping', 'Get an ice cream', 'Go swimming', 'Go home'], correctIndex: 1 },
  ],
};
