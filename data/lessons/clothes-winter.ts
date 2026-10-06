import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const TIM = R2 + 'tim-professional-portrait.png';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}clothes-winter-${s}.png`;

export const clothesWinter: Lesson = {
  slug: 'clothes-winter',
  title: 'Winter Clothes',
  subtitle: 'Everyday Life · Clothes · Winter',
  level: 'A1-A2',
  description:
    'Learn the names of winter clothes — coats, raincoats, jackets, scarves — plus adjectives like warm and waterproof, and phrasal verbs like bundle up and zip up.',
  heroImage: img('hero'),

  objectives: [
    'Name common winter coats, jackets and accessories.',
    'Describe winter clothes with adjectives.',
    'Use phrasal verbs like bundle up, zip up and layer up.',
  ],

  vocabulary: [
    { word: 'COAT', partOfSpeech: 'noun', definition: 'A long piece of clothing you wear over other clothes when it\'s cold.', example: 'Take your coat — it\'s freezing.', imageSlug: img('coat') },
    { word: 'RAINCOAT', partOfSpeech: 'noun', definition: 'A coat that keeps you dry in the rain.', example: 'I always carry a raincoat in London.', imageSlug: img('raincoat') },
    { word: 'LEATHER COAT', partOfSpeech: 'noun', definition: 'A coat made from animal skin.', example: 'He wore a black leather coat.', imageSlug: img('leather-coat') },
    { word: 'JACKET', partOfSpeech: 'noun', definition: 'A short coat you wear over your clothes.', example: 'This jacket is light but warm.', imageSlug: img('jacket') },
    { word: 'DENIM JACKET', partOfSpeech: 'noun', definition: 'A jacket made of jeans material.', example: 'A denim jacket goes with everything.', imageSlug: img('denim-jacket') },
    { word: 'SCARF', partOfSpeech: 'noun', definition: 'A long piece of cloth you wear around your neck.', example: 'My grandma knitted this scarf.', imageSlug: img('scarf') },
    { word: 'WARM', partOfSpeech: 'adjective', definition: 'Keeping you a little hot.', example: 'Wool socks are very warm.', imageSlug: img('warm') },
    { word: 'WATERPROOF', partOfSpeech: 'adjective', definition: 'Not letting water in.', example: 'My boots are waterproof.', imageSlug: img('waterproof') },
    { word: 'COMFY', partOfSpeech: 'adjective', definition: 'Comfortable (informal).', example: 'This sweater is so comfy.', imageSlug: img('comfy') },
    { word: 'STYLISH', partOfSpeech: 'adjective', definition: 'Fashionable and good-looking.', example: 'Her long coat is very stylish.', imageSlug: img('stylish') },
  ],

  phrasalVerbs: [
    { phrase: 'BUNDLE UP', definition: 'To put on lots of warm clothes.', example: 'Bundle up — it\'s minus five outside!', imageSlug: img('bundle-up') },
    { phrase: 'ZIP UP', definition: 'To close a jacket or coat with a zip.', example: 'Zip up your jacket, it\'s windy.', imageSlug: img('zip-up') },
    { phrase: 'BUTTON UP', definition: 'To close a coat or shirt with buttons.', example: 'Button up your coat before you go out.', imageSlug: img('button-up') },
    { phrase: 'LAYER UP', definition: 'To wear several pieces of clothing on top of each other.', example: 'In the mountains, it\'s best to layer up.', inAction: 'Layering = T-shirt + sweater + jacket. You can take a layer off if you get too hot.', imageSlug: img('layer-up') },
    { phrase: 'DRESS UP', definition: 'To wear smart or special clothes.', example: 'We dressed up for the winter party.', imageSlug: img('dress-up') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Tim, it's snowing! You need more than that [[denim jacket:jacket of jeans material]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I know. I need a proper winter [[coat:long warm piece of clothing]]. Can you help me choose one?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Sure. What about this long grey one? It's [[warm:keeping you hot]] and very [[stylish:fashionable]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Nice. Is it [[waterproof:doesn't let water in]]? It rains a lot here." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "No, but you have a [[raincoat:coat for rain]] for that. For snow, wool is better. Try it on and [[button up:close with buttons]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "It's so [[comfy:comfortable]]! I'll take it. Do I need a [[scarf:cloth around the neck]] too?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Definitely. And gloves. When it's minus ten, you have to [[bundle up:put on lots of warm clothes]]!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "OK, OK. I'll [[layer up:wear several layers]] tomorrow — T-shirt, sweater, coat, scarf and gloves!" },
  ],

  matchingExercise: [
    { word: 'RAINCOAT', definition: 'A coat that keeps you dry' },
    { word: 'SCARF', definition: 'Cloth you wear around your neck' },
    { word: 'WATERPROOF', definition: 'Doesn\'t let water in' },
    { word: 'COMFY', definition: 'Comfortable' },
    { word: 'BUNDLE UP', definition: 'Put on lots of warm clothes' },
    { word: 'LAYER UP', definition: 'Wear several pieces on top of each other' },
  ],

  fillBlankExercise: [
    { before: 'Bundle', after: "— it's minus five outside!", answer: 'up' },
    { before: 'Zip up your', after: ", it's windy.", answer: 'jacket' },
    { before: 'My boots are', after: '. My feet stay dry.', answer: 'waterproof' },
    { before: 'This sweater is so', after: '!', answer: 'comfy' },
    { before: 'Button', after: 'your coat before you go out.', answer: 'up' },
    { before: 'We dressed', after: 'for the winter party.', answer: 'up' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "bundle up" mean?', options: ['Put on lots of warm clothes', 'Take off your coat', 'Buy clothes', 'Wash clothes'], correctIndex: 0 },
    { question: 'Which coat keeps you dry in the rain?', options: ['Leather coat', 'Raincoat', 'Denim jacket', 'Scarf'], correctIndex: 1 },
    { question: 'What is "comfy"?', options: ['Cold', 'Comfortable', 'Expensive', 'Old'], correctIndex: 1 },
    { question: 'In the dialogue, what colour coat does Tim choose?', options: ['Black', 'Grey', 'Blue', 'Brown'], correctIndex: 1 },
    { question: 'What is the weather like?', options: ['Sunny', 'Snowing', 'Hot', 'Windy only'], correctIndex: 1 },
  ],
};
