import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}beauty-at-the-barbershop-${s}.png`;

export const beautyAtTheBarbershop: Lesson = {
  slug: 'beauty-at-the-barbershop',
  title: 'At the Barbershop',
  subtitle: 'Everyday Life · Beauty · Lesson 2',
  level: 'A1-A2',
  description:
    'Learn the words and phrases for the barbershop: fade, clippers, razor, shave and trim. Tell the barber exactly how you want your hair and beard.',
  heroImage: img('hero'),

  objectives: [
    'Name barbershop tools and services.',
    'Describe the haircut you want: short sides, fade, trim.',
    'Ask the barber to touch up your beard.',
  ],

  vocabulary: [
    { word: 'BARBER', partOfSpeech: 'noun', definition: "A person who cuts men's hair.", example: 'The barber was friendly and fast.', imageSlug: img('barber') },
    { word: 'BARBERSHOP', partOfSpeech: 'noun', definition: 'A place where people, mostly men, get their hair cut.', example: 'There is a new barbershop near my house.', imageSlug: img('barbershop') },
    { word: 'QUEUE', partOfSpeech: 'noun', definition: 'A line of people waiting.', example: 'There was a long queue on Saturday.', imageSlug: img('queue') },
    { word: 'FADE', partOfSpeech: 'noun / verb', definition: 'A haircut that gets shorter from the top to the bottom.', example: 'His fade looks really nice.', imageSlug: img('fade') },
    { word: 'CLIPPERS', partOfSpeech: 'noun', definition: 'An electric machine for cutting hair very short.', example: 'The barber used clippers on the sides.', imageSlug: img('clippers') },
    { word: 'RAZOR', partOfSpeech: 'noun', definition: 'A tool with a sharp blade for shaving.', example: 'He uses a razor for the edges.', imageSlug: img('razor') },
    { word: 'SHAVE', partOfSpeech: 'verb', definition: 'To remove hair from your face with a razor.', example: 'I shave every morning.', imageSlug: img('shave') },
    { word: 'BEARD', partOfSpeech: 'noun', definition: 'Hair that grows on a man\'s chin and cheeks.', example: 'Could you trim my beard too?', imageSlug: img('beard') },
    { word: 'SIDES', partOfSpeech: 'noun', definition: 'The parts of your head next to your ears.', example: 'Keep the sides short and the top longer.', imageSlug: img('sides') },
  ],

  phrasalVerbs: [
    { phrase: "I'm here for a haircut.", tag: 'phrase', definition: 'Say why you are there.', example: '"Hi! I\'m here for a haircut. Can you help me?"', imageSlug: img('here-for-haircut') },
    { phrase: 'Short on the sides, longer on top, please.', tag: 'phrase', definition: 'A very common way to describe a haircut.', example: '"Short on the sides, longer on top, please."', imageSlug: img('short-sides') },
    { phrase: "Don't cut too much off the top.", tag: 'phrase', definition: 'Ask the barber to keep the top long.', example: '"Please don\'t cut too much off the top."', imageSlug: img('not-too-much') },
    { phrase: 'Could you touch up my beard too?', tag: 'phrase', definition: 'Ask for a small tidy-up of your beard.', example: '"Could you touch up my beard too? Just the edges."', imageSlug: img('touch-up-beard') },
    { phrase: 'Number two on the sides.', tag: 'phrase', definition: 'Clipper numbers show how short: number 1 is very short, number 4 is longer.', example: '"A number two on the sides, please."', inAction: 'In many barbershops, people use clipper numbers: "a number one" (very short) up to "a number eight" (longer).', imageSlug: img('number-two') },
    { phrase: 'SHAPE UP', definition: 'To make the shape of hair or beard neat.', example: 'The barber shaped up my beard.', imageSlug: img('shape-up') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Hi! I'm here for a haircut. Is there a [[queue:line of people waiting]]?" },
    { speaker: 'Barber', speakerColor: 'orange', text: "No, you're lucky! Take a seat. What would you like today?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'd like to try something new. Maybe a [[fade:haircut shorter at the bottom]] with clean lines. And please don't cut too much off the top." },
    { speaker: 'Barber', speakerColor: 'orange', text: "Got it. I'll use the [[clippers:electric hair-cutting machine]] on the [[sides:parts next to the ears]] — a number two — and a [[razor:sharp blade]] for the edges." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sounds perfect. Could you touch up my [[beard:hair on the chin]] too?" },
    { speaker: 'Barber', speakerColor: 'orange', text: "Sure. Do you want me to [[shave:remove with a razor]] your neck as well?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Yes, please. I have a wedding this weekend. I need to look sharp!" },
    { speaker: 'Barber', speakerColor: 'orange', text: "No problem. You'll leave this [[barbershop:place for men's haircuts]] looking great." },
  ],

  matchingExercise: [
    { word: 'BARBER', definition: "A person who cuts men's hair" },
    { word: 'FADE', definition: 'Haircut shorter from top to bottom' },
    { word: 'CLIPPERS', definition: 'Electric machine for short hair' },
    { word: 'RAZOR', definition: 'Sharp blade for shaving' },
    { word: 'QUEUE', definition: 'A line of people waiting' },
    { word: 'BEARD', definition: 'Hair on a man\'s chin and cheeks' },
  ],

  fillBlankExercise: [
    { before: "I'm here for a", after: '.', answer: 'haircut' },
    { before: 'Short on the', after: ', longer on top, please.', answer: 'sides' },
    { before: "Please don't cut too much off the", after: '.', answer: 'top' },
    { before: 'Could you touch up my', after: 'too?', answer: 'beard' },
    { before: 'The barber used', after: 'on the sides.', answer: 'clippers' },
    { before: 'I', after: 'every morning with a razor.', answer: 'shave' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "fade"?', options: ['A hair colour', 'A haircut shorter from top to bottom', 'A beard style', 'A shampoo'], correctIndex: 1 },
    { question: 'What does a "number one" usually mean?', options: ['Very short', 'Very long', 'No cut', 'Only the beard'], correctIndex: 0 },
    { question: 'What tool has a sharp blade?', options: ['Clippers', 'Razor', 'Shampoo', 'Comb'], correctIndex: 1 },
    { question: 'In the dialogue, why does Tim want to look sharp?', options: ['A job interview', 'A wedding', 'A party', 'A photo'], correctIndex: 1 },
    { question: 'Which clipper number does the barber use on the sides?', options: ['One', 'Two', 'Three', 'Four'], correctIndex: 1 },
  ],
};
