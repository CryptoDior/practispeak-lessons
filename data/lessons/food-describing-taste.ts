import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}food-describing-taste-${s}.png`;

export const foodDescribingTaste: Lesson = {
  slug: 'food-describing-taste',
  title: 'Talking About Food: Taste',
  subtitle: 'Food & Drink · B1-B2',
  level: 'B1-B2',
  description:
    'Go beyond "delicious". Learn precise words to describe flavour — savoury, zesty, rich, mild, subtle, pungent — and talk about food like a real foodie.',
  heroImage: img('hero'),

  objectives: [
    'Describe the basic tastes: sweet, sour, bitter, salty, spicy.',
    'Use more advanced flavour words: savoury, zesty, rich, mild, subtle.',
    'Give opinions about food with natural phrases.',
  ],

  vocabulary: [
    { word: 'SAVOURY', partOfSpeech: 'adjective', definition: 'Tasty and salty or full of flavour, not sweet — like meat, stews or cheese.', example: 'I prefer savoury pancakes to sweet ones.', imageSlug: img('savoury') },
    { word: 'ZESTY', partOfSpeech: 'adjective', definition: 'Lively and fresh, often with citrus or spice.', example: 'I love the zesty kick of lime in this dish.', imageSlug: img('zesty') },
    { word: 'RICH', partOfSpeech: 'adjective', definition: 'Full and heavy, often with a lot of fat or flavour.', example: 'This Alfredo pasta is so rich and creamy.', imageSlug: img('rich') },
    { word: 'MILD', partOfSpeech: 'adjective', definition: 'Gentle, not strong or spicy.', example: 'The salsa is mild, so kids can enjoy it.', imageSlug: img('mild') },
    { word: 'ROBUST', partOfSpeech: 'adjective', definition: 'Strong and full-bodied.', example: 'The red wine gives the sauce a robust flavour.', imageSlug: img('robust') },
    { word: 'SUBTLE', partOfSpeech: 'adjective', definition: 'Delicate and light; not strong.', example: 'The tea has a subtle hint of mint.', imageSlug: img('subtle') },
    { word: 'TART', partOfSpeech: 'adjective', definition: 'Sharp and slightly sour, like some berries.', example: 'The lemonade is tart and refreshing.', imageSlug: img('tart') },
    { word: 'PUNGENT', partOfSpeech: 'adjective', definition: 'With a very strong, sharp smell or taste.', example: 'Blue cheese has a pungent aroma.', imageSlug: img('pungent') },
    { word: 'PEPPERY', partOfSpeech: 'adjective', definition: 'Tasting of black pepper; slightly spicy.', example: 'The soup is a bit peppery and warms you up.', imageSlug: img('peppery') },
    { word: 'BITTER', partOfSpeech: 'adjective', definition: 'A strong, sharp taste like coffee or dark chocolate.', example: 'Dark chocolate is a bit bitter.', imageSlug: img('bitter') },
  ],

  phrasalVerbs: [
    { phrase: 'It has a … flavour / taste.', tag: 'phrase', definition: 'Describe the main flavour.', example: '"It has a really rich, smoky flavour."', imageSlug: img('has-a-flavour') },
    { phrase: 'It tastes a bit too…', tag: 'phrase', definition: 'Give a polite negative opinion.', example: '"It tastes a bit too salty for me."', imageSlug: img('a-bit-too') },
    { phrase: 'There\'s a hint of…', tag: 'phrase', definition: 'Mention a small, subtle flavour.', example: '"There\'s a hint of garlic in the sauce."', imageSlug: img('hint-of') },
    { phrase: 'It goes really well with…', tag: 'phrase', definition: 'Say two foods are good together.', example: '"The zesty dressing goes really well with the fish."', imageSlug: img('goes-well-with') },
    { phrase: 'It balances the…', tag: 'phrase', definition: 'One flavour makes another less strong.', example: '"The bitter chocolate balances the sweetness."', inAction: 'Chefs love the word "balance". A sweet + sour or rich + fresh combination usually tastes better than one strong flavour.', imageSlug: img('balances') },
    { phrase: "It's an acquired taste.", tag: 'idiom', definition: 'Something you only start to like after trying it several times.', example: '"Blue cheese is an acquired taste."', imageSlug: img('acquired-taste') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "So, Tim, what do you think of the curry?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "It's delicious! It's quite spicy, but the coconut makes it [[rich:full and heavy in flavour]] and creamy." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I agree. There's a hint of lime too — it's very [[zesty:fresh and lively]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And the bread? I think it's a bit too [[peppery:tasting of black pepper]] for me." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Really? I like it. It goes really well with the [[mild:gentle, not strong]] yoghurt sauce." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "True. Hey, what's that smell? It's very [[pungent:strong and sharp]]!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ha! It's the blue cheese for dessert. It's an acquired taste. They serve it with honey and [[tart:slightly sour]] berries." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Hmm, the sweet honey probably balances the cheese. I'll try a little — a [[subtle:small and delicate]] amount!" },
  ],

  matchingExercise: [
    { word: 'SAVOURY', definition: 'Salty or full of flavour, not sweet' },
    { word: 'ZESTY', definition: 'Fresh and lively, often citrus' },
    { word: 'MILD', definition: 'Gentle, not strong' },
    { word: 'SUBTLE', definition: 'Delicate and light' },
    { word: 'PUNGENT', definition: 'With a very strong, sharp smell' },
    { word: 'TART', definition: 'Sharp and slightly sour' },
  ],

  fillBlankExercise: [
    { before: 'The salsa is', after: ', so even kids can eat it.', answer: 'mild' },
    { before: 'This pasta is so', after: 'and creamy.', answer: 'rich' },
    { before: "There's a", after: 'of mint in the tea.', answer: 'hint' },
    { before: 'It tastes a bit too', after: 'for me. I need water!', answer: 'salty' },
    { before: 'Blue cheese is an acquired', after: '.', answer: 'taste' },
    { before: 'The dressing goes really well', after: 'the fish.', answer: 'with' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the opposite of "sweet" in cooking?', options: ['Savoury', 'Tart', 'Mild', 'Subtle'], correctIndex: 0 },
    { question: 'What does "mild" mean?', options: ['Very spicy', 'Gentle, not strong', 'Very salty', 'Old'], correctIndex: 1 },
    { question: 'Which word describes a strong smell like blue cheese?', options: ['Subtle', 'Mild', 'Pungent', 'Zesty'], correctIndex: 2 },
    { question: '"It\'s an acquired taste" means…', options: ['Everyone loves it', 'You learn to like it over time', 'It is very expensive', 'It is new'], correctIndex: 1 },
    { question: 'In the dialogue, what makes the curry rich and creamy?', options: ['Cheese', 'Coconut', 'Butter', 'Yoghurt'], correctIndex: 1 },
    { question: 'What is served with the blue cheese?', options: ['Bread and butter', 'Honey and tart berries', 'Chocolate', 'Wine'], correctIndex: 1 },
  ],
};
