import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-b1-feel-about-weather-${s}.png`;

export const conversationB1FeelAboutWeather: Lesson = {
  slug: 'conversation-b1-feel-about-weather',
  title: 'How Do You Feel About the Weather Today?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 10',
  level: 'B1-B2',
  description:
    'Go beyond "It\'s sunny". Learn how to give opinions about the weather, describe how it changes, and say how it affects your mood.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Give your opinion about the weather and how it makes you feel.',
    'Describe changes in the weather with verbs like warm up and cool down.',
    'Use adverbs of degree: slightly, extremely, mostly.',
  ],

  vocabulary: [
    { word: 'GLOOMY', partOfSpeech: 'adjective', definition: 'Dark, grey and a bit sad.', example: 'It feels a little gloomy today.', imageSlug: img('gloomy') },
    { word: 'HUMIDITY', partOfSpeech: 'noun', definition: 'Water in the air that makes it feel heavy and sticky.', example: 'The humidity is uncomfortable today.', imageSlug: img('humidity') },
    { word: 'BREEZE', partOfSpeech: 'noun', definition: 'A light, gentle wind.', example: 'I enjoyed the cool breeze yesterday.', imageSlug: img('breeze') },
    { word: 'WORSEN', partOfSpeech: 'verb', definition: 'To become worse.', example: 'The storm worsened overnight.', imageSlug: img('worsen') },
    { word: 'BRIGHTEN', partOfSpeech: 'verb', definition: 'To become lighter or more cheerful.', example: 'The sky brightened after the rain.', imageSlug: img('brighten') },
    { word: 'SLIGHTLY', partOfSpeech: 'adverb', definition: 'A little; not much.', example: "It's slightly colder today.", imageSlug: img('slightly') },
    { word: 'EXTREMELY', partOfSpeech: 'adverb', definition: 'Very; to a high degree.', example: "It's extremely windy outside.", imageSlug: img('extremely') },
    { word: 'MOSTLY', partOfSpeech: 'adverb', definition: 'For the largest part.', example: "It's mostly sunny today.", imageSlug: img('mostly') },
  ],

  phrasalVerbs: [
    { phrase: 'WARM UP', definition: 'To become warmer.', example: 'It warmed up in the afternoon.', imageSlug: img('warm-up') },
    { phrase: 'COOL DOWN', definition: 'To become less hot.', example: 'The air cooled down in the evening.', imageSlug: img('cool-down') },
    { phrase: 'How do you feel about the weather today?', tag: 'phrase', definition: 'Ask for someone\'s opinion or mood about the weather.', example: '"Wow, look outside! How do you feel about the weather today?"', imageSlug: img('how-do-you-feel') },
    { phrase: "It's a bit too hot for me.", tag: 'phrase', definition: 'The temperature is higher than you like.', example: '"35 degrees? It\'s a bit too hot for me."', imageSlug: img('too-hot') },
    { phrase: "I'm not a fan of cold weather.", tag: 'phrase', definition: "You don't enjoy cold temperatures.", example: '"I\'m not a fan of cold weather. I\'m always freezing."', imageSlug: img('not-a-fan') },
    { phrase: 'The rain makes me feel relaxed.', tag: 'phrase', definition: 'Rainy weather helps you feel calm.', example: '"I love the sound of rain. It makes me feel relaxed."', inAction: 'Use "make + person + feel + adjective" to describe the effect on your mood: "Sun makes me feel happy."', imageSlug: img('makes-me-feel') },
    { phrase: 'It puts me in a good mood.', tag: 'phrase', definition: 'The weather makes you feel positive.', example: '"Sunny mornings always put me in a good mood."', imageSlug: img('good-mood') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Rosie, how do you feel about the weather today?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Honestly, it's a bit too hot for me. And the [[humidity:water in the air]] is really uncomfortable." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Really? I like this kind of weather. Sunshine always puts me in a good mood." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I prefer it [[slightly:a little]] cooler. Yesterday was perfect — [[mostly:for the largest part]] sunny with a cool [[breeze:a light wind]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "True. But the forecast says it'll [[cool down:become less hot]] this evening. Maybe a storm." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Oh, I love storms! The rain makes me feel relaxed. What about you?" },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Not really. Rainy days feel a little [[gloomy:dark and sad]] to me. And I'm not a fan of cold weather either." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Don't worry, it usually [[brightens:becomes lighter]] quickly after a summer storm." },
  ],

  practiceTime: {
    instructions: "Read the conversation with your teacher. Fill each blank out loud with a word or phrase from the lesson \u2014 you can give your own answers too.",
    lines: [
      { speaker: 'Teacher', text: "How do you feel about the weather today?" },
      { speaker: 'Student', text: "It's {{mostly}} sunny, so it {{puts me in a good mood}}." },
      { speaker: 'Teacher', text: "Is it too hot for you?" },
      { speaker: 'Student', text: "Yes, it's {{a bit too hot for me}}, and the {{humidity}} is uncomfortable." },
      { speaker: 'Student', text: "How do you feel about the weather today?" },
      { speaker: 'Teacher', text: "I like it. There's a cool {{breeze}} in the afternoon." },
      { speaker: 'Teacher', text: "Do you like cold weather?" },
      { speaker: 'Student', text: "No, I'm {{not a fan of}} cold weather." },
      { speaker: 'Teacher', text: "How does rain make you feel?" },
      { speaker: 'Student', text: "The rain makes me feel {{relaxed}}. / Rainy days feel a little {{gloomy}} to me." },
      { speaker: 'Teacher', text: "The forecast says it will be windy later." },
      { speaker: 'Student', text: "Yes, it's {{extremely/slightly}} windy outside already." },
      { speaker: 'Teacher', text: "Will it get warmer or cooler this evening?" },
      { speaker: 'Student', text: "I think it will {{cool down}} in the evening, but it will {{warm up}} tomorrow." },
    ],
  },

  matchingExercise: [
    { word: 'GLOOMY', definition: 'Dark, grey and a bit sad' },
    { word: 'HUMIDITY', definition: 'Water in the air' },
    { word: 'BREEZE', definition: 'A light, gentle wind' },
    { word: 'WARM UP', definition: 'To become warmer' },
    { word: 'WORSEN', definition: 'To become worse' },
    { word: 'SLIGHTLY', definition: 'A little; not much' },
  ],

  fillBlankExercise: [
    { before: 'How do you', after: 'about the weather today?', answer: 'feel' },
    { before: "It's a bit too hot", after: 'me.', answer: 'for' },
    { before: "I'm not a", after: 'of cold weather.', answer: 'fan' },
    { before: 'Sunny days put me in a good', after: '.', answer: 'mood' },
    { before: 'It warmed', after: 'in the afternoon.', answer: 'up' },
    { before: "It's", after: 'windy. Hold your hat!', answer: 'extremely' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "gloomy" mean?', options: ['Bright and sunny', 'Dark, grey and a bit sad', 'Very hot', 'Very windy'], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ['The rain makes me to feel relaxed.', 'The rain makes me feel relaxed.', 'The rain makes me feeling relaxed.', 'The rain make me relaxed feel.'], correctIndex: 1 },
    { question: 'What does "cool down" mean?', options: ['Become less hot', 'Become more popular', 'Become angry', 'Become windy'], correctIndex: 0 },
    { question: 'Which adverb means "a little"?', options: ['Extremely', 'Slightly', 'Mostly', 'Really'], correctIndex: 1 },
    { question: "In the dialogue, how does Rosie feel about today's weather?", options: ['She loves it', "It's a bit too hot and humid", "It's too cold", "It's too windy"], correctIndex: 1 },
    { question: 'How does rain make Rosie feel?', options: ['Sad', 'Relaxed', 'Angry', 'Tired'], correctIndex: 1 },
  ],
};
