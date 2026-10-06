import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}travel-passport-control-${s}.png`;

export const travelPassportControl: Lesson = {
  slug: 'travel-passport-control',
  title: 'At the Airport: Passport Control',
  subtitle: 'Everyday Life · Travel · Airport 2',
  level: 'B1-B2',
  description:
    'Answer a passport control officer\'s questions with confidence: your nationality, the purpose and duration of your trip, where you\'re staying, and what you\'re carrying.',
  heroImage: img('hero'),

  objectives: [
    'Answer standard immigration questions clearly.',
    'Talk about the purpose and duration of your visit.',
    'Understand questions about restricted items.',
  ],

  vocabulary: [
    { word: 'PASSPORT CONTROL', partOfSpeech: 'noun', definition: 'The place where officers check your passport when you enter or leave a country.', example: 'There was a long queue at passport control.', imageSlug: img('passport-control') },
    { word: 'OFFICER', partOfSpeech: 'noun', definition: 'An official who checks documents.', example: 'The officer asked to see my return ticket.', imageSlug: img('officer') },
    { word: 'NATIONALITY', partOfSpeech: 'noun', definition: 'The country you are a citizen of.', example: 'My nationality is Canadian.', imageSlug: img('nationality') },
    { word: 'CITIZEN', partOfSpeech: 'noun', definition: 'A person who legally belongs to a country.', example: 'EU citizens can use the fast lane.', imageSlug: img('citizen') },
    { word: 'PURPOSE', partOfSpeech: 'noun', definition: 'The reason for your trip.', example: 'What is the purpose of your visit?', imageSlug: img('purpose') },
    { word: 'DURATION', partOfSpeech: 'noun', definition: 'How long something lasts.', example: 'What is the duration of your stay?', imageSlug: img('duration') },
    { word: 'INTEND', partOfSpeech: 'verb', definition: 'To plan to do something.', example: 'I intend to stay for two weeks.', imageSlug: img('intend') },
    { word: 'VERIFY', partOfSpeech: 'verb', definition: 'To check that something is true or correct.', example: 'The officer verified my documents.', imageSlug: img('verify') },
    { word: 'RESTRICTED ITEMS', partOfSpeech: 'noun', definition: 'Things you cannot bring into a country, or only with permission.', example: 'Fresh fruit is a restricted item in Australia.', imageSlug: img('restricted') },
  ],

  phrasalVerbs: [
    { phrase: 'What is the purpose of your visit?', tag: 'phrase', definition: 'The officer asks why you are travelling.', example: '"What is the purpose of your visit?" → "Tourism."', imageSlug: img('purpose-question') },
    { phrase: "I'm here on holiday / on business / to visit family.", tag: 'phrase', definition: 'State the purpose of your trip.', example: '"I\'m here on business. I have a conference in Chicago."', imageSlug: img('here-on') },
    { phrase: 'How long do you intend to stay?', tag: 'phrase', definition: 'The officer asks the duration of your stay.', example: '"How long do you intend to stay?" → "Ten days."', imageSlug: img('how-long') },
    { phrase: "I'll be staying at…", tag: 'phrase', definition: 'Give your accommodation details.', example: '"I\'ll be staying at the Grand Hotel downtown."', imageSlug: img('staying-at') },
    { phrase: 'Do you have anything to declare?', tag: 'phrase', definition: 'The officer asks if you are carrying restricted or taxable items.', example: '"Do you have anything to declare?" → "No, nothing."', inAction: 'Keep answers short, polite and true. Officers prefer clear, simple answers — don\'t joke at passport control!', imageSlug: img('declare') },
    { phrase: 'You may proceed.', tag: 'phrase', definition: 'The officer tells you that you can go.', example: '"Thank you. Enjoy your stay. You may proceed."', imageSlug: img('proceed') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Officer', speakerColor: 'blue', text: 'Good afternoon. Passport, please.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Good afternoon. Here you are.' },
    { speaker: 'Officer', speakerColor: 'blue', text: 'What is your [[nationality:the country you are a citizen of]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm South African." },
    { speaker: 'Officer', speakerColor: 'blue', text: 'And what is the [[purpose:reason]] of your visit?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm here on holiday. I'm visiting London and Edinburgh." },
    { speaker: 'Officer', speakerColor: 'blue', text: 'How long do you [[intend:plan]] to stay?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Two weeks. I'll be staying at a hotel in Camden, and then with a friend in Edinburgh. Here's my return ticket." },
    { speaker: 'Officer', speakerColor: 'blue', text: 'Thank you. Do you have any food, plants or other [[restricted items:things you cannot bring in]] to declare?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'No, nothing to declare.' },
    { speaker: 'Officer', speakerColor: 'blue', text: "Thank you. I've [[verified:checked]] your documents. Enjoy your stay. You may proceed." },
  ],

  matchingExercise: [
    { word: 'NATIONALITY', definition: 'The country you are a citizen of' },
    { word: 'PURPOSE', definition: 'The reason for your trip' },
    { word: 'DURATION', definition: 'How long something lasts' },
    { word: 'INTEND', definition: 'To plan to do something' },
    { word: 'VERIFY', definition: 'To check something is correct' },
    { word: 'DECLARE', definition: 'To tell officials about items you carry' },
  ],

  fillBlankExercise: [
    { before: 'What is the', after: 'of your visit?', answer: 'purpose' },
    { before: "I'm here", after: 'holiday.', answer: 'on' },
    { before: 'How long do you', after: 'to stay?', answer: 'intend' },
    { before: "I'll be", after: 'at the Grand Hotel.', answer: 'staying' },
    { before: 'Do you have anything to', after: '?', answer: 'declare' },
    { before: 'You may', after: '. Enjoy your stay.', answer: 'proceed' },
  ],

  multipleChoiceExercise: [
    { question: '"What is the purpose of your visit?" asks…', options: ['How long you stay', 'Why you are travelling', 'Where you live', 'Your nationality'], correctIndex: 1 },
    { question: 'Which answer is best?', options: ["I'm here on business.", 'Why do you ask?', 'Maybe.', 'None of your business.'], correctIndex: 0 },
    { question: 'What does "proceed" mean here?', options: ['Wait', 'Go forward', 'Go back', 'Pay'], correctIndex: 1 },
    { question: 'In the dialogue, how long will Kira stay?', options: ['One week', 'Ten days', 'Two weeks', 'One month'], correctIndex: 2 },
    { question: 'Where will Kira stay in Edinburgh?', options: ['A hotel', 'With a friend', 'A hostel', 'With family'], correctIndex: 1 },
  ],
};
