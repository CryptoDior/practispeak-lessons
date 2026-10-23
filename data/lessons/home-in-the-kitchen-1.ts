import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}home-in-the-kitchen-1-${s}.png`;

export const homeInTheKitchen1: Lesson = {
  slug: 'home-in-the-kitchen-1',
  title: 'In the Kitchen: Part 1',
  subtitle: 'Everyday Life · Home · Kitchen 1',
  level: 'A1-A2',
  description:
    'Learn the names of the big things in a kitchen — fridge, oven, stove, microwave, sink — and talk about what they do.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Name the main kitchen appliances.',
    'Say what each appliance does.',
    'Ask where things are in a kitchen.',
  ],

  pictureQuiz: true,
  nameThis: true,
  vocabulary: [
    { word: 'KETTLE', partOfSpeech: 'noun', definition: 'A machine that heats water.', example: 'The kettle is hot. Be careful!', imageSlug: img('hot-kettle-caution') },
    { word: 'MICROWAVE', partOfSpeech: 'noun', definition: 'A machine that heats food very quickly.', example: 'Heat the soup in the microwave.', imageSlug: img('soup-inside-microwave') },
    { word: 'OVEN', partOfSpeech: 'noun', definition: 'A box that cooks food inside it.', example: 'The pizza is in the oven.', imageSlug: img('pizza-inside-oven') },
    { word: 'STOVE', partOfSpeech: 'noun', definition: 'You cook food on top of it. (UK: hob/cooker)', example: 'The pot is on the stove.', imageSlug: img('pot-on-stovetop') },
    { word: 'FRIDGE', partOfSpeech: 'noun', definition: 'It keeps food cold. (full word: refrigerator)', example: 'The milk is in the fridge.', imageSlug: img('milk-inside-fridge') },
    { word: 'FREEZER', partOfSpeech: 'noun', definition: 'It keeps food very, very cold — frozen.', example: 'The ice cream is in the freezer.', imageSlug: img('icecream-inside-freezer') },
    { word: 'POT', partOfSpeech: 'noun', definition: 'A deep container for cooking.', example: 'I cook pasta in a big pot.', imageSlug: img('pasta-in-big-deep-pot') },
    { word: 'PAN', partOfSpeech: 'noun', definition: 'A flat container for cooking.', example: 'Fry the eggs in a pan.', imageSlug: img('eggs-frying-shallow-pan') },
    { word: 'SINK', partOfSpeech: 'noun', definition: 'You wash things in it.', example: 'The dirty cups are in the sink.', imageSlug: img('dirty-cups-inside-sink') },
    { word: 'DISHWASHER', partOfSpeech: 'noun', definition: 'A machine that washes plates, bowls and cups.', example: 'Put the plates in the dishwasher.', imageSlug: img('loading-plates-in-dishwasher') },
  ],

  phrasalVerbs: [
    { phrase: 'Where is the…?', tag: 'phrase', definition: 'Ask where something is.', example: '"Where is the kettle?" → "Next to the fridge."', imageSlug: img('kettle-next-to-fridge') },
    { phrase: 'It\'s in / on / next to the…', tag: 'phrase', definition: 'Say where something is.', example: '"The milk is in the fridge. The pot is on the stove."', inAction: 'IN = inside (in the fridge). ON = on top (on the stove). NEXT TO = beside (next to the sink).', imageSlug: img('milk-in-fridge-pot-on-stove') },
    { phrase: 'TURN ON / TURN OFF', definition: 'To start / stop a machine.', example: 'Turn on the oven. Turn off the stove.', imageSlug: img('oven-on-stove-off') },
    { phrase: 'Can you put the kettle on?', tag: 'phrase', definition: 'A friendly way to ask someone to make hot water (for tea).', example: '"I\'m tired. Can you put the kettle on?"', imageSlug: img('tired-person-asks-for-kettle') },
    { phrase: 'Put … in the dishwasher.', tag: 'phrase', definition: 'Ask someone to clean up.', example: '"After dinner, put the plates in the dishwasher, please."', imageSlug: img('after-dinner-plates-dishwasher') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Rosie, I'm cooking dinner. Where is the big [[pot:deep cooking container]]?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "It's in the cupboard, next to the [[sink:where you wash things]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Thanks. I'm making pasta. Can you turn on the [[stove:you cook on top of it]]?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Sure. Do you need the [[oven:box that cooks food inside]] too?" },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Yes, for the garlic bread. And can you get the cheese from the [[fridge:keeps food cold]]?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Here you are. Oh, and there's ice cream in the [[freezer:keeps food frozen]] for dessert!" },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Perfect. Can you put the [[kettle:heats water]] on too? I want tea after dinner." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "OK. And after dinner, you put the plates in the [[dishwasher:machine that washes plates]]!" },
  ],

  matchingExercise: [
    { word: 'KETTLE', definition: 'Heats water' },
    { word: 'MICROWAVE', definition: 'Heats food very quickly' },
    { word: 'FRIDGE', definition: 'Keeps food cold' },
    { word: 'FREEZER', definition: 'Keeps food frozen' },
    { word: 'SINK', definition: 'Where you wash things' },
    { word: 'DISHWASHER', definition: 'Machine that washes plates' },
  ],

  fillBlankExercise: [
    { before: 'The milk is', after: 'the fridge.', answer: 'in' },
    { before: 'The pot is', after: 'the stove.', answer: 'on' },
    { before: 'Fry the eggs in a', after: '.', answer: 'pan' },
    { before: 'Can you put the', after: 'on? I want tea.', answer: 'kettle' },
    { before: 'Turn', after: 'the oven. It\'s time to cook.', answer: 'on' },
    { before: 'Put the plates in the', after: '.', answer: 'dishwasher' },
  ],

  multipleChoiceExercise: [
    { question: 'What keeps food very cold and frozen?', options: ['Fridge', 'Freezer', 'Oven', 'Kettle'], correctIndex: 1 },
    { question: 'What is the difference between a pot and a pan?', options: ['A pot is deep; a pan is flat', 'A pan is deep; a pot is flat', 'No difference', 'A pot is for water only'], correctIndex: 0 },
    { question: 'Where is the milk?', options: ['On the fridge', 'In the fridge', 'At the fridge', 'Under the fridge'], correctIndex: 1 },
    { question: 'In the dialogue, what is Oliver cooking?', options: ['Pizza', 'Pasta', 'Soup', 'Eggs'], correctIndex: 1 },
    { question: 'What is in the freezer?', options: ['Cheese', 'Ice cream', 'Milk', 'Bread'], correctIndex: 1 },
  ],
};
