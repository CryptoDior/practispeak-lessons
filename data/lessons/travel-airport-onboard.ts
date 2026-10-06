import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}travel-airport-onboard-${s}.png`;

export const travelAirportOnboard: Lesson = {
  slug: 'travel-airport-onboard',
  title: 'At the Airport: Onboard the Plane',
  subtitle: 'Everyday Life · Travel · Airport 3',
  level: 'B1-B2',
  description:
    'From boarding to landing: understand boarding groups, cabin crew instructions, safety announcements and what to say to flight attendants.',
  heroImage: img('hero'),

  objectives: [
    'Understand boarding announcements and groups.',
    'Follow cabin crew and safety instructions.',
    'Make polite requests to a flight attendant.',
  ],

  vocabulary: [
    { word: 'BOARDING GROUP', partOfSpeech: 'noun', definition: 'A group of passengers called to get on the plane together.', example: 'Boarding group 4, please proceed to the gate.', imageSlug: img('boarding-group') },
    { word: 'PRE-BOARDING', partOfSpeech: 'noun', definition: 'When some passengers (families, people needing help) board first.', example: 'Pre-boarding is for passengers with small children.', imageSlug: img('pre-boarding') },
    { word: 'OVERHEAD BIN', partOfSpeech: 'noun', definition: 'The storage space above the seats.', example: 'Please put your bag in the overhead bin.', imageSlug: img('overhead-bin') },
    { word: 'STOW', partOfSpeech: 'verb', definition: 'To put something away carefully.', example: 'Please stow your bag under the seat in front.', imageSlug: img('stow') },
    { word: 'FASTEN', partOfSpeech: 'verb', definition: 'To close or attach securely.', example: 'Please fasten your seatbelt.', imageSlug: img('fasten') },
    { word: 'TAKEOFF / LANDING', partOfSpeech: 'noun', definition: 'When the plane leaves / returns to the ground.', example: 'Phones must be in airplane mode for takeoff.', imageSlug: img('takeoff') },
    { word: 'TURBULENCE', partOfSpeech: 'noun', definition: 'Sudden shaking of the plane caused by air movement.', example: 'We may experience some turbulence.', imageSlug: img('turbulence') },
    { word: 'FLIGHT ATTENDANT', partOfSpeech: 'noun', definition: 'A crew member who looks after passengers.', example: 'The flight attendant brought me water.', imageSlug: img('flight-attendant') },
    { word: 'EMERGENCY EXIT', partOfSpeech: 'noun', definition: 'A special door to leave the plane in danger.', example: 'The emergency exits are over the wings.', imageSlug: img('emergency-exit') },
    { word: 'AIRPLANE MODE', partOfSpeech: 'noun', definition: 'A phone setting that turns off calls and data.', example: 'Switch your phone to airplane mode.', imageSlug: img('airplane-mode') },
  ],

  phrasalVerbs: [
    { phrase: 'Please fasten your seatbelt.', tag: 'phrase', definition: 'A crew instruction before takeoff and landing.', example: '"Ladies and gentlemen, please fasten your seatbelts."', imageSlug: img('fasten-seatbelt') },
    { phrase: 'Please stow your bag in the overhead bin.', tag: 'phrase', definition: 'A crew instruction about luggage.', example: '"Please stow your bag in the overhead bin or under the seat."', imageSlug: img('stow-bag') },
    { phrase: 'Excuse me, could I have some water, please?', tag: 'phrase', definition: 'A polite request to a flight attendant.', example: '"Excuse me, could I have some water, please?"', imageSlug: img('water-please') },
    { phrase: 'Would you mind swapping seats?', tag: 'phrase', definition: 'Politely ask another passenger to change seats.', example: '"Would you mind swapping seats so I can sit with my friend?"', imageSlug: img('swap-seats') },
    { phrase: 'TAKE OFF', definition: 'When a plane leaves the ground.', example: 'We will take off in ten minutes.', inAction: 'TAKE OFF (verb) = "The plane takes off." TAKEOFF (noun) = "during takeoff". Same with "land / landing".', imageSlug: img('take-off') },
    { phrase: 'BUCKLE UP', definition: 'To fasten your seatbelt (informal).', example: 'Buckle up — the seatbelt sign is on.', imageSlug: img('buckle-up') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Tim, they just called [[boarding group:passengers who board together]] four. That's us!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Great. I've got our [[boarding passes:documents to board]]. Seats 18A and 18B." },
    { speaker: 'Flight attendant', speakerColor: 'orange', text: "Welcome aboard! Please [[stow:put away]] your bags in the [[overhead bin:storage above the seats]] and take your seats." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Excuse me, someone is in my seat. Would you mind checking?" },
    { speaker: 'Flight attendant', speakerColor: 'orange', text: "Of course. … All sorted. Please [[fasten:close securely]] your seatbelt and switch your phone to [[airplane mode:no calls or data]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I hate [[takeoff:when the plane leaves the ground]]. My stomach always feels strange." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Just breathe. And listen to the safety instructions — the [[emergency exits:doors for dangerous situations]] are just behind us." },
    { speaker: 'Captain', speakerColor: 'blue', text: "Good evening, this is your captain speaking. We may experience some light [[turbulence:shaking of the plane]] after takeoff. Please keep your seatbelts fastened." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Great… Excuse me, could I have some water, please?" },
  ],

  matchingExercise: [
    { word: 'STOW', definition: 'Put something away carefully' },
    { word: 'FASTEN', definition: 'Close or attach securely' },
    { word: 'OVERHEAD BIN', definition: 'Storage space above the seats' },
    { word: 'TURBULENCE', definition: 'Sudden shaking of the plane' },
    { word: 'PRE-BOARDING', definition: 'Some passengers board first' },
    { word: 'AIRPLANE MODE', definition: 'Phone setting with no calls or data' },
  ],

  fillBlankExercise: [
    { before: 'Please', after: 'your seatbelt.', answer: 'fasten' },
    { before: 'Please stow your bag in the overhead', after: '.', answer: 'bin' },
    { before: 'Switch your phone to airplane', after: '.', answer: 'mode' },
    { before: 'We will take', after: 'in ten minutes.', answer: 'off' },
    { before: 'We may experience some', after: 'after takeoff.', answer: 'turbulence' },
    { before: 'Would you mind', after: 'seats with me?', answer: 'swapping' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "stow" mean?', options: ['Put away carefully', 'Throw away', 'Open', 'Carry'], correctIndex: 0 },
    { question: 'What is "turbulence"?', options: ['A type of meal', 'Sudden shaking of the plane', 'A delay', 'A seat'], correctIndex: 1 },
    { question: 'Which is the noun?', options: ['take off', 'takeoff', 'took off', 'taking off'], correctIndex: 1 },
    { question: 'In the dialogue, which boarding group are Kira and Tim?', options: ['One', 'Two', 'Four', 'Six'], correctIndex: 2 },
    { question: 'What does Tim ask for at the end?', options: ['A blanket', 'Water', 'Coffee', 'A new seat'], correctIndex: 1 },
  ],
};
