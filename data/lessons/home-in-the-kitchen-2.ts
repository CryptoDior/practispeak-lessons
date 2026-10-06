import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}home-in-the-kitchen-2-${s}.png`;

export const homeInTheKitchen2: Lesson = {
  slug: 'home-in-the-kitchen-2',
  title: 'In the Kitchen: Part 2',
  subtitle: 'Everyday Life · Home · Kitchen 2',
  level: 'A1-A2',
  description:
    'Learn more kitchen words: toaster, coffee machine, teapot, jug, jar, grater and cleaning things like dishcloths and paper towels.',
  heroImage: img('hero'),

  objectives: [
    'Name small kitchen machines and containers.',
    'Name things for cleaning in the kitchen.',
    'Make breakfast together in English.',
  ],

  vocabulary: [
    { word: 'TOASTER', partOfSpeech: 'noun', definition: 'A small machine that makes bread brown and crispy.', example: 'Put the bread in the toaster.', imageSlug: img('toaster') },
    { word: 'COFFEE MACHINE', partOfSpeech: 'noun', definition: 'A machine that makes coffee.', example: 'The coffee machine is broken.', imageSlug: img('coffee-machine') },
    { word: 'TEAPOT', partOfSpeech: 'noun', definition: 'A container for making and pouring tea.', example: 'Can you fill the teapot?', imageSlug: img('teapot') },
    { word: 'JUG', partOfSpeech: 'noun', definition: 'A container with a handle for pouring liquids.', example: 'There\'s a jug of water on the table.', imageSlug: img('jug') },
    { word: 'JAR', partOfSpeech: 'noun', definition: 'A glass container with a lid for keeping food.', example: 'The jam is in a jar.', imageSlug: img('jar') },
    { word: 'GRATER', partOfSpeech: 'noun', definition: 'A tool to cut food like cheese into very small pieces.', example: 'Use the grater for the cheese.', imageSlug: img('grater') },
    { word: 'JUICER', partOfSpeech: 'noun', definition: 'A machine that takes juice out of fruit.', example: 'I make orange juice with the juicer.', imageSlug: img('juicer') },
    { word: 'SAUCEPAN', partOfSpeech: 'noun', definition: 'A deep pan with a handle for cooking on the stove.', example: 'Heat the milk in a saucepan.', imageSlug: img('saucepan') },
    { word: 'DISHCLOTH', partOfSpeech: 'noun', definition: 'A cloth for washing dishes.', example: 'The dishcloth is next to the sink.', imageSlug: img('dishcloth') },
    { word: 'PAPER TOWEL', partOfSpeech: 'noun', definition: 'Paper for cleaning or drying, which you throw away.', example: 'Use a paper towel to clean that up.', imageSlug: img('paper-towel') },
  ],

  phrasalVerbs: [
    { phrase: 'Can you pass me the…?', tag: 'phrase', definition: 'Ask someone to give you something.', example: '"Can you pass me the jam jar, please?"', imageSlug: img('pass-me') },
    { phrase: 'Would you like tea or coffee?', tag: 'phrase', definition: 'Offer a drink.', example: '"Good morning! Would you like tea or coffee?"', imageSlug: img('tea-or-coffee') },
    { phrase: 'POUR', definition: 'To make a liquid flow from a container.', example: 'Pour the water from the jug.', imageSlug: img('pour') },
    { phrase: 'WIPE UP', definition: 'To clean a liquid with a cloth or paper.', example: 'I spilled milk. Can you wipe it up?', inAction: 'Spill (verb) = accidentally drop a liquid. "Oops, I spilled my coffee!" → "Here\'s a paper towel. Wipe it up."', imageSlug: img('wipe-up') },
    { phrase: 'The … is broken.', tag: 'phrase', definition: 'Say a machine doesn\'t work.', example: '"The toaster is broken again!"', imageSlug: img('broken') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good morning! Would you like tea or coffee?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Coffee, please. Is the [[coffee machine:machine that makes coffee]] working now?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, I fixed it! Can you put some bread in the [[toaster:makes bread brown and crispy]]?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure. Can you pass me the jam [[jar:glass container with a lid]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Here you are. I'm making fresh orange juice with the [[juicer:takes juice out of fruit]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Lovely. I'll put it in the [[jug:container for pouring]]. Oops! I spilled some." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "No problem. There's a [[paper towel:paper for cleaning]] next to the sink. Wipe it up." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Done. Breakfast is ready!" },
  ],

  matchingExercise: [
    { word: 'TOASTER', definition: 'Makes bread brown and crispy' },
    { word: 'TEAPOT', definition: 'For making and pouring tea' },
    { word: 'JAR', definition: 'Glass container with a lid' },
    { word: 'GRATER', definition: 'Cuts cheese into small pieces' },
    { word: 'JUICER', definition: 'Takes juice out of fruit' },
    { word: 'DISHCLOTH', definition: 'Cloth for washing dishes' },
  ],

  fillBlankExercise: [
    { before: 'Put the bread in the', after: '.', answer: 'toaster' },
    { before: 'Can you', after: 'me the jam jar?', answer: 'pass' },
    { before: 'Would you like tea or', after: '?', answer: 'coffee' },
    { before: 'Use the', after: 'for the cheese.', answer: 'grater' },
    { before: 'I spilled milk. Can you wipe it', after: '?', answer: 'up' },
    { before: '', after: 'the water from the jug.', answer: 'Pour' },
  ],

  multipleChoiceExercise: [
    { question: 'What do you use to make cheese into small pieces?', options: ['Juicer', 'Grater', 'Toaster', 'Jug'], correctIndex: 1 },
    { question: 'What is jam usually in?', options: ['A jar', 'A jug', 'A teapot', 'A pan'], correctIndex: 0 },
    { question: 'What does "wipe up" mean?', options: ['Clean a liquid with a cloth', 'Cook food', 'Make tea', 'Open a jar'], correctIndex: 0 },
    { question: 'In the dialogue, what does Tim drink?', options: ['Tea', 'Coffee', 'Juice', 'Milk'], correctIndex: 1 },
    { question: 'What does Tim spill?', options: ['Coffee', 'Orange juice', 'Milk', 'Water'], correctIndex: 1 },
  ],
};
