import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-how-is-the-weather-${s}.png`;

export const conversationHowIsTheWeather: Lesson = {
  slug: 'conversation-how-is-the-weather',
  title: 'How Is the Weather Today?',
  subtitle: 'Everyday Conversation · Lesson 6',
  level: 'A1-A2',
  description:
    'Learn how to talk about the weather. Say if it is sunny, cloudy, rainy, windy, hot or cold, and say if you like the weather.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "How is the weather today?".',
    'Use weather words: sunny, cloudy, rainy, windy, hot, cold.',
    'Say if you like or don\'t like the weather.',
  ],

  vocabulary: [
    { word: 'SUNNY', partOfSpeech: 'adjective', definition: 'The sun is out. There are no clouds.', example: "It's sunny today.", imageSlug: img('sunny') },
    { word: 'CLOUDY', partOfSpeech: 'adjective', definition: 'There are many clouds in the sky.', example: "It's cloudy, but it's not raining.", imageSlug: img('cloudy') },
    { word: 'RAINY', partOfSpeech: 'adjective', definition: 'There is a lot of rain.', example: "It's rainy. Take an umbrella!", imageSlug: img('rainy') },
    { word: 'WINDY', partOfSpeech: 'adjective', definition: 'There is a lot of wind.', example: "It's very windy today.", imageSlug: img('windy') },
    { word: 'HOT', partOfSpeech: 'adjective', definition: 'A very high temperature.', example: "It's hot. Let's go to the beach.", imageSlug: img('hot') },
    { word: 'COLD', partOfSpeech: 'adjective', definition: 'A low temperature.', example: "It's cold. Wear a jacket.", imageSlug: img('cold') },
    { word: 'WEATHER', partOfSpeech: 'noun', definition: 'If it is sunny, rainy, hot or cold outside.', example: 'How is the weather today?', imageSlug: img('weather') },
  ],

  phrasalVerbs: [
    { phrase: 'How is the weather today?', tag: 'phrase', definition: "Ask about today's weather.", example: '"How is the weather today?" → "It\'s sunny."', imageSlug: img('how-is-the-weather') },
    { phrase: "It's sunny / cloudy / windy.", tag: 'phrase', definition: 'Use "It\'s" + a weather word.', example: '"It\'s cloudy and cold."', imageSlug: img('its-sunny') },
    { phrase: "It's raining.", tag: 'phrase', definition: 'Rain is falling now.', example: '"Don\'t go out. It\'s raining."', inAction: '"It\'s rainy" and "It\'s raining" are both fine. "It\'s raining" means it is happening right now.', imageSlug: img('its-raining') },
    { phrase: 'I like this weather.', tag: 'phrase', definition: 'You enjoy the weather today.', example: '"It\'s warm and sunny. I like this weather."', imageSlug: img('i-like-this-weather') },
    { phrase: "I don't like this weather.", tag: 'phrase', definition: 'You do not enjoy the weather.', example: '"It\'s cold and windy. I don\'t like this weather."', imageSlug: img('i-dont-like') },
    { phrase: "What's the weather like where you live?", tag: 'phrase', definition: "Ask about the weather in someone's city or country.", example: '"What\'s the weather like where you live?" → "It\'s hot in summer."', imageSlug: img('where-you-live') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Hi Tim! How is the [[weather:sunny, rainy, hot or cold]] today where you are?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "It's [[sunny:the sun is out]] and warm. I like this weather." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Nice! It's [[cloudy:many clouds in the sky]] here." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Really? Do you like cloudy weather?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Not really. I like sunny days. And now it's [[windy:a lot of wind]] too!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Same! I don't like [[rainy:a lot of rain]] weather." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "What's the weather like where you live in winter?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "It's very [[cold:a low temperature]]. It snows sometimes. And in summer it's very [[hot:a very high temperature]]." },
  ],

  matchingExercise: [
    { word: 'SUNNY', definition: 'The sun is out' },
    { word: 'CLOUDY', definition: 'Many clouds in the sky' },
    { word: 'RAINY', definition: 'A lot of rain' },
    { word: 'WINDY', definition: 'A lot of wind' },
    { word: 'HOT', definition: 'A very high temperature' },
    { word: 'COLD', definition: 'A low temperature' },
  ],

  fillBlankExercise: [
    { before: 'How is the', after: 'today?', answer: 'weather' },
    { before: "It's", after: '. The sun is out.', answer: 'sunny' },
    { before: "It's", after: '. Take an umbrella!', answer: 'raining' },
    { before: "It's", after: '. Wear a jacket.', answer: 'cold' },
    { before: 'I', after: 'this weather. It\'s perfect!', answer: 'like' },
    { before: "What's the weather", after: 'where you live?', answer: 'like' },
  ],

  multipleChoiceExercise: [
    { question: 'There is a lot of wind. The weather is…', options: ['sunny', 'windy', 'hot', 'cloudy'], correctIndex: 1 },
    { question: 'You need an umbrella. The weather is…', options: ['rainy', 'sunny', 'hot', 'windy'], correctIndex: 0 },
    { question: '"How is the weather today?" What is a good answer?', options: ["It's cloudy.", "I'm fine.", "It's 3 o'clock.", "I'm from Spain."], correctIndex: 0 },
    { question: 'Which sentence is correct?', options: ['Is sunny.', "It's sunny.", 'It sunny.', 'Sunny it is today it.'], correctIndex: 1 },
    { question: 'In the dialogue, how is the weather where Tim is today?', options: ['Cloudy', 'Rainy', 'Sunny and warm', 'Cold'], correctIndex: 2 },
    { question: 'What is the weather like in winter where Tim lives?', options: ['Very hot', 'Very cold, sometimes snow', 'Windy', 'Sunny'], correctIndex: 1 },
  ],
};
