import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}home-in-the-kitchen-3-${s}.png`;

export const homeInTheKitchen3: Lesson = {
  slug: 'home-in-the-kitchen-3',
  title: 'In the Kitchen: Part 3',
  subtitle: 'Everyday Life · Home · Kitchen 3',
  level: 'A1-A2',
  description:
    'Learn the names of kitchen tools — cutting board, peeler, whisk, spatula, colander, rolling pin, can opener — and use them in a simple recipe.',
  heroImage: img('hero'),

  objectives: [
    'Name common kitchen tools.',
    'Say what each tool is used for.',
    'Follow and give simple cooking instructions.',
  ],

  vocabulary: [
    { word: 'CUTTING BOARD', partOfSpeech: 'noun', definition: 'A board for cutting food on.', example: 'Cut the onions on the cutting board.', imageSlug: img('cutting-board') },
    { word: 'BLENDER', partOfSpeech: 'noun', definition: 'A machine that mixes and crushes food, like for smoothies.', example: 'I make smoothies in the blender.', imageSlug: img('blender') },
    { word: 'COLANDER', partOfSpeech: 'noun', definition: 'A bowl with holes to take water away from pasta or vegetables.', example: 'Drain the pasta in the colander.', imageSlug: img('colander') },
    { word: 'TRAY', partOfSpeech: 'noun', definition: 'A flat thing for carrying food and drinks.', example: 'Put the cups on the tray.', imageSlug: img('tray') },
    { word: 'SPATULA', partOfSpeech: 'noun', definition: 'A flat tool for turning or spreading food.', example: 'Turn the pancake with the spatula.', imageSlug: img('spatula') },
    { word: 'PEELER', partOfSpeech: 'noun', definition: 'A small tool to take the skin off fruit and vegetables.', example: 'Use the peeler for the potatoes.', imageSlug: img('peeler') },
    { word: 'CORKSCREW', partOfSpeech: 'noun', definition: 'A tool to open wine bottles with a cork.', example: 'Where\'s the corkscrew?', imageSlug: img('corkscrew') },
    { word: 'CAN OPENER', partOfSpeech: 'noun', definition: 'A tool to open tins (cans) of food.', example: 'I need the can opener for the beans.', imageSlug: img('can-opener') },
    { word: 'ROLLING PIN', partOfSpeech: 'noun', definition: 'A long round tool to make dough flat.', example: 'Roll the pizza dough with a rolling pin.', imageSlug: img('rolling-pin') },
    { word: 'WHISK', partOfSpeech: 'noun / verb', definition: 'A tool to mix eggs or cream fast; also to mix this way.', example: 'Whisk the eggs for one minute.', imageSlug: img('whisk') },
  ],

  phrasalVerbs: [
    { phrase: 'PEEL', definition: 'To take the skin off fruit or vegetables.', example: 'Peel the carrots first.', imageSlug: img('peel') },
    { phrase: 'CHOP', definition: 'To cut food into pieces.', example: 'Chop the onion into small pieces.', imageSlug: img('chop') },
    { phrase: 'DRAIN', definition: 'To remove water from food.', example: 'Drain the pasta and add the sauce.', imageSlug: img('drain') },
    { phrase: 'First…, then…, after that…', tag: 'phrase', definition: 'Give cooking steps in order.', example: '"First, peel the potatoes. Then chop them. After that, boil them."', inAction: 'Recipes use the imperative (base verb, no subject): "Whisk the eggs." "Add salt."', imageSlug: img('steps') },
    { phrase: 'What do you use this for?', tag: 'phrase', definition: 'Ask what a tool does.', example: '"What do you use this for?" → "For opening cans."', imageSlug: img('use-for') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Let's make pancakes! First, can you [[whisk:mix fast]] the eggs?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure. Where's the whisk?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "In the drawer, next to the [[spatula:flat tool for turning food]]. Then add the milk and flour." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Done. Should I use the [[blender:machine that mixes food]] for the bananas?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "No, just slice them on the [[cutting board:board for cutting food]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "What do you use this for? It looks strange." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's a [[peeler:takes skin off vegetables]]. It's for potatoes and carrots, not bananas!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Ha! OK. The first pancake is ready. I'll turn it with the spatula and put it on a [[tray:flat thing for carrying food]]." },
  ],

  matchingExercise: [
    { word: 'COLANDER', definition: 'Bowl with holes to drain pasta' },
    { word: 'PEELER', definition: 'Takes the skin off vegetables' },
    { word: 'WHISK', definition: 'Mixes eggs fast' },
    { word: 'ROLLING PIN', definition: 'Makes dough flat' },
    { word: 'CAN OPENER', definition: 'Opens tins of food' },
    { word: 'CORKSCREW', definition: 'Opens wine bottles' },
  ],

  fillBlankExercise: [
    { before: '', after: 'the eggs for one minute.', answer: 'Whisk' },
    { before: 'Drain the pasta in the', after: '.', answer: 'colander' },
    { before: 'Turn the pancake with the', after: '.', answer: 'spatula' },
    { before: 'Cut the onions on the cutting', after: '.', answer: 'board' },
    { before: 'I need the can', after: 'for the beans.', answer: 'opener' },
    { before: 'What do you use this', after: '?', answer: 'for' },
  ],

  multipleChoiceExercise: [
    { question: 'What do you use to open a wine bottle?', options: ['Can opener', 'Corkscrew', 'Peeler', 'Whisk'], correctIndex: 1 },
    { question: 'What do you use to make dough flat?', options: ['Rolling pin', 'Colander', 'Tray', 'Blender'], correctIndex: 0 },
    { question: 'Which sentence is a correct recipe step?', options: ['You chops the onion.', 'Chop the onion.', 'Chopping onion.', 'To chop the onion you.'], correctIndex: 1 },
    { question: 'In the dialogue, what are they making?', options: ['Pizza', 'Pancakes', 'Pasta', 'Soup'], correctIndex: 1 },
    { question: 'What tool surprises Tim?', options: ['The whisk', 'The peeler', 'The spatula', 'The tray'], correctIndex: 1 },
  ],
};
