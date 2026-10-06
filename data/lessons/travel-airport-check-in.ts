import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}travel-airport-check-in-${s}.png`;

export const travelAirportCheckIn: Lesson = {
  slug: 'travel-airport-check-in',
  title: 'At the Airport: Check-In',
  subtitle: 'Everyday Life · Travel · Airport 1',
  level: 'B1-B2',
  description:
    'Get through airport check-in smoothly: give your booking details, check bags, choose a seat, make special requests and understand your boarding pass.',
  heroImage: img('hero'),

  objectives: [
    'Provide booking and passport details at check-in.',
    'Talk about checked bags, carry-ons and seats.',
    'Understand boarding information from the agent.',
  ],

  vocabulary: [
    { word: 'CHECK-IN COUNTER', partOfSpeech: 'noun', definition: 'The desk where you register for your flight and leave your bags.', example: 'Please go to check-in counter 14.', imageSlug: img('check-in-counter') },
    { word: 'BOOKING REFERENCE', partOfSpeech: 'noun', definition: 'The code that identifies your reservation.', example: 'Your booking reference is on your confirmation email.', imageSlug: img('booking-reference') },
    { word: 'CHECKED BAG', partOfSpeech: 'noun', definition: 'A suitcase that goes in the plane\'s hold, not with you.', example: "You're allowed one checked bag of 23 kg.", imageSlug: img('checked-bag') },
    { word: 'CARRY-ON', partOfSpeech: 'noun', definition: 'A small bag you take with you onto the plane.', example: 'Your carry-on must fit in the overhead bin.', imageSlug: img('carry-on') },
    { word: 'WINDOW / AISLE SEAT', partOfSpeech: 'noun', definition: 'A seat next to the window / next to the corridor.', example: 'Could I have an aisle seat, please?', imageSlug: img('seats') },
    { word: 'BOARDING PASS', partOfSpeech: 'noun', definition: 'The document that lets you get on the plane.', example: "Here's your boarding pass. Gate B12.", imageSlug: img('boarding-pass') },
    { word: 'BAGGAGE TAG', partOfSpeech: 'noun', definition: 'A label with your destination attached to a checked bag.', example: 'Keep the baggage tag receipt.', imageSlug: img('baggage-tag') },
    { word: 'GATE', partOfSpeech: 'noun', definition: 'The place where you get on the plane.', example: 'Boarding is at gate 22.', imageSlug: img('gate') },
    { word: 'VISA', partOfSpeech: 'noun', definition: 'An official permission to enter a country.', example: 'Do you need a visa for Canada?', imageSlug: img('visa') },
    { word: 'DIETARY PREFERENCE', partOfSpeech: 'noun', definition: 'The type of food you need, e.g. vegetarian or gluten-free.', example: 'Do you have any dietary preferences for the meal?', imageSlug: img('dietary') },
  ],

  phrasalVerbs: [
    { phrase: 'CHECK IN', definition: 'To register for your flight at the airport or online.', example: 'You can check in online 24 hours before.', imageSlug: img('check-in') },
    { phrase: 'Here is my passport and booking reference.', tag: 'phrase', definition: 'Give your documents to the agent.', example: '"Good morning. Here is my passport and booking reference."', imageSlug: img('passport') },
    { phrase: 'Could I have a window / an aisle seat, please?', tag: 'phrase', definition: 'Ask for a seat preference.', example: '"It\'s a long flight. Could I have an aisle seat, please?"', imageSlug: img('seat-request') },
    { phrase: 'I have one bag to check and one carry-on.', tag: 'phrase', definition: 'Explain your luggage.', example: '"I have one bag to check and one carry-on."', imageSlug: img('bags') },
    { phrase: 'I have a special request…', tag: 'phrase', definition: 'Ask for a special meal or assistance.', example: '"I have a special request — a vegetarian meal, please."', imageSlug: img('special-request') },
    { phrase: 'Boarding will commence in about an hour.', tag: 'phrase', definition: 'The agent tells you when boarding starts.', example: '"Your gate is B12. Boarding will commence in about an hour."', inAction: '"Commence" is a formal word for "start". Airlines use formal language: "proceed to", "commence", "prior to departure".', imageSlug: img('boarding-commence') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Check-in agent', speakerColor: 'orange', text: 'Good morning. Where are you flying today?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Good morning. To Toronto. Here is my passport and [[booking reference:code for your reservation]].' },
    { speaker: 'Check-in agent', speakerColor: 'orange', text: 'Thank you. Do you have an eTA or a [[visa:permission to enter a country]] for Canada?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Yes, I have an eTA. It\'s linked to my passport.' },
    { speaker: 'Check-in agent', speakerColor: 'orange', text: 'Perfect. How many bags are you checking today?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I have one [[checked bag:suitcase that goes in the hold]] and one [[carry-on:small bag you take on the plane]].' },
    { speaker: 'Check-in agent', speakerColor: 'orange', text: 'Please place it on the scale… 21 kilos, that\'s fine. Do you have a seat preference?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Could I have an [[aisle seat:seat next to the corridor]], please? And I have a special request: a vegetarian meal.' },
    { speaker: 'Check-in agent', speakerColor: 'orange', text: "Done. Here's your [[boarding pass:document to get on the plane]]. Seat 24C, [[gate:where you get on the plane]] B12. Boarding will commence in about an hour." },
  ],

  matchingExercise: [
    { word: 'CHECKED BAG', definition: 'Suitcase that goes in the hold' },
    { word: 'CARRY-ON', definition: 'Small bag you take on the plane' },
    { word: 'BOARDING PASS', definition: 'Document to get on the plane' },
    { word: 'AISLE SEAT', definition: 'Seat next to the corridor' },
    { word: 'GATE', definition: 'Where you get on the plane' },
    { word: 'VISA', definition: 'Permission to enter a country' },
  ],

  fillBlankExercise: [
    { before: 'Here is my passport and booking', after: '.', answer: 'reference' },
    { before: 'Could I have an', after: 'seat, please?', answer: 'aisle' },
    { before: 'I have one bag to', after: 'and one carry-on.', answer: 'check' },
    { before: 'Boarding will', after: 'in about an hour.', answer: 'commence' },
    { before: 'You can check', after: 'online 24 hours before.', answer: 'in' },
    { before: 'Your carry-', after: 'must fit in the overhead bin.', answer: 'on' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a carry-on?', options: ['A big suitcase in the hold', 'A small bag you take on the plane', 'A boarding pass', 'A visa'], correctIndex: 1 },
    { question: 'What does "commence" mean?', options: ['End', 'Start', 'Delay', 'Cancel'], correctIndex: 1 },
    { question: 'Which seat is next to the corridor?', options: ['Window seat', 'Aisle seat', 'Middle seat', 'Exit seat'], correctIndex: 1 },
    { question: 'In the dialogue, how heavy is Tim\'s bag?', options: ['18 kg', '21 kg', '23 kg', '25 kg'], correctIndex: 1 },
    { question: 'What special request does Tim make?', options: ['A window seat', 'A vegetarian meal', 'Extra legroom', 'Wheelchair assistance'], correctIndex: 1 },
  ],
};
