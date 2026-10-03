import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}conversation-where-are-you-from-${s}.png`;

export const conversationWhereAreYouFrom: Lesson = {
  slug: 'conversation-where-are-you-from',
  title: 'Where Are You From?',
  subtitle: 'Everyday Conversation · Lesson 3',
  level: 'A1-A2',
  description:
    'Learn how to ask and answer "Where are you from?". Talk about your country, the city where you live, and introduce a friend.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "Where are you from?".',
    'Say where you live and where you were born.',
    'React with interest and introduce a friend.',
  ],

  vocabulary: [
    { word: 'COUNTRY', partOfSpeech: 'noun', definition: 'A big place with its own name and flag, like Brazil or Japan.', example: 'What country are you from?', imageSlug: img('country') },
    { word: 'CITY', partOfSpeech: 'noun', definition: 'A big town with many people.', example: 'I live in the city of Cape Town.', imageSlug: img('city') },
    { word: 'FROM', partOfSpeech: 'preposition', definition: 'Use it to say the place where you started.', example: "I'm from South Africa.", imageSlug: img('from') },
    { word: 'LIVE', partOfSpeech: 'verb', definition: 'To have your home in a place.', example: 'I live in Bangkok.', imageSlug: img('live') },
    { word: 'BORN', partOfSpeech: 'adjective', definition: 'When you started your life. We say "I was born in…".', example: 'I was born in Brazil.', imageSlug: img('born') },
    { word: 'FRIEND', partOfSpeech: 'noun', definition: 'A person you like and know well.', example: 'This is my friend Leo.', imageSlug: img('friend') },
  ],

  phrasalVerbs: [
    { phrase: 'Where are you from?', tag: 'phrase', definition: "A question about someone's country or home town.", example: '"Where are you from?" → "I\'m from Japan."', imageSlug: img('where-are-you-from') },
    { phrase: "I'm from…", tag: 'phrase', definition: 'Use this to say your country or city.', example: '"I\'m from Spain."', imageSlug: img('im-from') },
    { phrase: 'What city do you live in?', tag: 'phrase', definition: 'A question about the city where someone lives now.', example: '"What city do you live in?" → "I live in Madrid."', imageSlug: img('what-city') },
    { phrase: 'I was born in…', tag: 'phrase', definition: 'Use this to say the place where your life started.', example: '"I was born in Brazil, but I live in Spain."', inAction: '"I\'m from" can be where you grew up. "I was born in" is only the place where you started your life.', imageSlug: img('i-was-born-in') },
    { phrase: "Really? That's cool!", tag: 'phrase', definition: 'A friendly way to show interest.', example: '"I live in Tokyo." → "Really? That\'s cool!"', imageSlug: img('thats-cool') },
    { phrase: 'Where is that?', tag: 'phrase', definition: 'Ask this when you do not know a place.', example: '"I\'m from Durban." → "Where is that?"', imageSlug: img('where-is-that') },
    { phrase: 'This is my friend…', tag: 'phrase', definition: 'Use this to introduce someone.', example: '"This is my friend Leo."', imageSlug: img('this-is-my-friend') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Hi! Where are you [[from:the place where you started]]?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I'm from Brazil. And you?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm from Spain. What [[city:a big town]] do you [[live:have your home]] in?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'I live in Rio de Janeiro.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Really? That's cool! I was [[born:started my life]] in Madrid." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Nice! Where do you live now?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I live in Cape Town.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Oh, where is that?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It's in South Africa, a [[country:a big place with its own flag]] in Africa. Oh, this is my [[friend:a person you like and know well]] Tim." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Hi, nice to meet you!' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Nice to meet you too, Tim.' },
  ],

  matchingExercise: [
    { word: 'COUNTRY', definition: 'A big place with its own flag' },
    { word: 'CITY', definition: 'A big town with many people' },
    { word: 'LIVE', definition: 'To have your home in a place' },
    { word: 'BORN', definition: 'When you started your life' },
    { word: 'FRIEND', definition: 'A person you like and know well' },
    { word: 'WHERE IS THAT?', definition: 'Ask about a place you do not know' },
  ],

  fillBlankExercise: [
    { before: 'Where are you', after: '?', answer: 'from' },
    { before: 'What', after: 'are you from? → Japan.', answer: 'country' },
    { before: 'I', after: 'in Cape Town.', answer: 'live' },
    { before: 'I was', after: 'in Brazil.', answer: 'born' },
    { before: 'This is my', after: 'Leo.', answer: 'friend' },
    { before: "Really? That's", after: '!', answer: 'cool' },
  ],

  multipleChoiceExercise: [
    { question: '"Where are you from?" What is a good answer?', options: ["I'm from Japan.", "I'm 20.", "I'm fine.", 'At 7 o\'clock.'], correctIndex: 0 },
    { question: 'Which sentence is correct?', options: ['I born in Brazil.', 'I was born in Brazil.', 'I am born Brazil.', 'I borned in Brazil.'], correctIndex: 1 },
    { question: 'You do not know a place. What do you ask?', options: ['Where is that?', 'How are you?', 'What time is it?', 'Who is that?'], correctIndex: 0 },
    { question: 'How do you introduce a friend?', options: ['This is my friend Leo.', 'He friend Leo.', 'Leo is me.', 'Friend this Leo.'], correctIndex: 0 },
    { question: 'In the dialogue, where does Kira live now?', options: ['Madrid', 'Rio de Janeiro', 'Cape Town', 'Tokyo'], correctIndex: 2 },
    { question: 'Where was Kira born?', options: ['Brazil', 'Madrid', 'Cape Town', 'Japan'], correctIndex: 1 },
  ],
};
