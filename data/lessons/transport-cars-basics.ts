import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}transport-cars-basics-${s}.png`;

export const transportCarsBasics: Lesson = {
  slug: 'transport-cars-basics',
  title: 'Cars: The Basics',
  subtitle: 'Everyday Life · Transport · Cars Part 1',
  level: 'A1-A2',
  description:
    'Learn the main parts of a car — engine, tires, brakes, steering wheel, headlights — and simple phrasal verbs to talk about car problems.',
  heroImage: `${img('hero')}?v=4`,

  objectives: [
    'Name the main parts of a car.',
    'Use phrasal verbs like break down, slow down and pump up.',
    'Talk about simple car problems.',
  ],

  pictureQuiz: true,
  nameThis: true,
  vocabulary: [
    { word: 'ENGINE', partOfSpeech: 'noun', definition: 'The part of the car that makes it move.', example: "Without the engine, the car won't start.", imageSlug: img('engine-under-bonnet') },
    { word: 'TIRES', partOfSpeech: 'noun', definition: 'The rubber parts on the wheels. (UK: tyres)', example: 'The tires slipped on the icy road.', imageSlug: img('tires-on-icy-road') },
    { word: 'STEERING WHEEL', partOfSpeech: 'noun', definition: 'The round part you use to turn the car.', example: 'Keep both hands on the steering wheel.', imageSlug: img('both-hands-on-steering-wheel') },
    { word: 'BRAKES', partOfSpeech: 'noun', definition: 'What you use to stop the car.', example: 'Good brakes are important for safety.', imageSlug: img('car-disc-brakes') },
    { word: 'ACCELERATOR', partOfSpeech: 'noun', definition: 'The pedal you press to go faster.', example: 'Press the accelerator gently.', imageSlug: img('press-accelerator-gently') },
    { word: 'WINDSHIELD', partOfSpeech: 'noun', definition: 'The big front window of the car. (UK: windscreen)', example: "It's raining so hard I can't see through the windshield.", imageSlug: img('rainy-car-windshield') },
    { word: 'HEADLIGHTS', partOfSpeech: 'noun', definition: 'The lights at the front of the car.', example: "Turn on your headlights — it's getting dark.", imageSlug: img('front-headlights-at-dusk') },
    { word: 'TRUNK', partOfSpeech: 'noun', definition: 'The space at the back of the car for bags. (UK: boot)', example: 'Could you open the trunk?', imageSlug: img('open-car-trunk') },
    { word: 'DASHBOARD', partOfSpeech: 'noun', definition: 'The area in front of the driver with lights and controls.', example: 'A red light is flashing on the dashboard.', imageSlug: img('dashboard-red-warning-light') },
    { word: 'DOORS', partOfSpeech: 'noun', definition: 'The parts that open so you can get in or out.', example: 'Lock all the doors before we leave.', imageSlug: img('car-doors-locked') },
  ],

  phrasalVerbs: [
    { phrase: 'BREAK DOWN', definition: 'When a car stops working.', example: 'Our car broke down on the trip.', imageSlug: img('car-breaks-down-on-trip') },
    { phrase: 'SLOW DOWN', definition: 'To go slower.', example: 'Slow down! There is a sharp turn.', imageSlug: img('slow-down-before-sharp-turn') },
    { phrase: 'PUMP UP', definition: 'To put air into a tire.', example: 'We need to pump up the tires before we drive.', imageSlug: img('inflate-tire-before-driving') },
    { phrase: 'BLOW OUT', definition: 'When a tire suddenly breaks and loses air.', example: 'A tire blew out on the highway.', imageSlug: img('tire-blowout-at-roadside') },
    { phrase: 'LIGHT UP', definition: 'To turn on and become bright.', example: 'The dashboard lights up when you start the car.', imageSlug: img('dashboard-lights-at-startup') },
    { phrase: 'SHINE ON', definition: 'To send light onto something.', example: 'The headlights shine on the road.', imageSlug: img('headlight-beams-on-road') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Hi Rosie! How is your car?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Not good. It's a big [[headache:problem]]. A light on the [[dashboard:area with lights in front of the driver]] keeps flashing. Maybe it's the [[engine:part that makes the car move]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Oh no. It can [[break down:stop working]]! [[Get it checked:ask a mechanic to look at it]] soon. And the [[tires:rubber parts on the wheels]]? Are they OK?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I don't know. I don't want one to [[blow out:break and lose air]]. I think I need to [[pump up:put air into]] the tires." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Yes, do that. And the [[brakes:what you use to stop]]? Last time it was hard to [[slow down:go slower]].' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "They're not great. And my [[headlights:front lights]] are [[dim:not bright]] now." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Maybe you need new [[bulbs:glass parts that make light]]. Anything else?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "The [[trunk:space at the back]] is hard to open, and there was a [[crack:small break]] in the [[windshield:big front window]]. I fixed that last week." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Wow, a lot of problems! Take it to a mechanic soon.' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I know. Better safe than sorry!" },
  ],

  matchingExercise: [
    { word: 'BRAKES', definition: 'What you use to stop the car' },
    { word: 'ACCELERATOR', definition: 'The pedal to go faster' },
    { word: 'TRUNK', definition: 'Space at the back for bags' },
    { word: 'WINDSHIELD', definition: 'The big front window' },
    { word: 'BREAK DOWN', definition: 'Stop working' },
    { word: 'PUMP UP', definition: 'Put air into a tire' },
  ],

  fillBlankExercise: [
    { before: 'Can you open the', after: 'so I can put the shopping in?', answer: 'trunk' },
    { before: 'If you want to go faster, press the', after: '.', answer: 'accelerator' },
    { before: 'Turn on the', after: 'when it gets dark.', answer: 'headlights' },
    { before: 'Be careful on that road. Always slow', after: 'at sharp turns.', answer: 'down' },
    { before: "Don't forget to pump", after: 'the tires before the long trip.', answer: 'up' },
    { before: 'The car broke', after: 'at the top of the hill.', answer: 'down' },
  ],

  multipleChoiceExercise: [
    { question: 'What do you use to turn the car?', options: ['Brakes', 'Steering wheel', 'Trunk', 'Engine'], correctIndex: 1 },
    { question: 'What does "break down" mean?', options: ['Go faster', 'Stop working', 'Turn left', 'Open the door'], correctIndex: 1 },
    { question: 'What is "dim"?', options: ['Very bright', 'Not bright', 'Broken', 'New'], correctIndex: 1 },
    { question: 'In the dialogue, what is flashing on the dashboard?', options: ['A light', 'The radio', 'A phone', 'The clock'], correctIndex: 0 },
    { question: 'What did Rosie already fix?', options: ['The brakes', 'The tires', 'A crack in the windshield', 'The trunk'], correctIndex: 2 },
  ],
};
