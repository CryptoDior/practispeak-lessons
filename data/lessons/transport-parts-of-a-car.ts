import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}transport-parts-of-a-car-${s}.png`;

export const transportPartsOfACar: Lesson = {
  slug: 'transport-parts-of-a-car',
  title: 'Cars: Parts of a Car',
  subtitle: 'Everyday Life · Transport · Cars Part 2',
  level: 'A1-A2',
  description:
    'Learn the names of the outside parts of a car — roof, bonnet, bumper, wipers, mirrors and lights — and talk to a mechanic about simple problems.',
  heroImage: img('hero'),

  objectives: [
    'Name the main outside parts of a car.',
    'Know UK and US words for some car parts.',
    'Describe a simple problem to a mechanic.',
  ],

  vocabulary: [
    { word: 'ROOF', partOfSpeech: 'noun', definition: 'The top part of a car.', example: 'The roof keeps us dry when it rains.', imageSlug: img('roof') },
    { word: 'SUNROOF', partOfSpeech: 'noun', definition: 'A window on the roof that you can open.', example: 'I love opening the sunroof on warm days.', imageSlug: img('sunroof') },
    { word: 'SIDE MIRROR', partOfSpeech: 'noun', definition: 'The small mirror on the side of a car to see behind you.', example: 'Someone hit my side mirror.', imageSlug: img('side-mirror') },
    { word: 'BONNET / HOOD', partOfSpeech: 'noun', definition: 'The front part that covers the engine. (UK: bonnet, US: hood)', example: 'She opened the bonnet to check the engine.', imageSlug: img('bonnet') },
    { word: 'WIPERS', partOfSpeech: 'noun', definition: 'The moving parts that clean rain from the front window.', example: 'Turn on the wipers — it\'s raining.', imageSlug: img('wipers') },
    { word: 'NUMBER PLATE', partOfSpeech: 'noun', definition: 'The sign with the car\'s letters and numbers. (US: licence plate)', example: 'The police checked the number plate.', imageSlug: img('number-plate') },
    { word: 'BUMPER', partOfSpeech: 'noun', definition: 'The part at the front and back that protects the car.', example: 'I need to fix the dent in my front bumper.', imageSlug: img('bumper') },
    { word: 'GRILL', partOfSpeech: 'noun', definition: 'The front part with small holes that let air in.', example: 'The grill got dirty from the mud.', imageSlug: img('grill') },
    { word: 'TAIL LIGHT', partOfSpeech: 'noun', definition: 'The red light at the back of the car.', example: 'One of my tail lights is broken.', imageSlug: img('tail-light') },
    { word: 'CLUTCH', partOfSpeech: 'noun', definition: 'The pedal you press to change gears.', example: 'Driving with a clutch takes practice.', imageSlug: img('clutch') },
  ],

  phrasalVerbs: [
    { phrase: 'There\'s a problem with my…', tag: 'phrase', definition: 'Tell a mechanic what is wrong.', example: '"There\'s a problem with my wipers. They don\'t work."', imageSlug: img('problem-with') },
    { phrase: 'My … is broken.', tag: 'phrase', definition: 'Say that a part doesn\'t work.', example: '"My tail light is broken."', imageSlug: img('is-broken') },
    { phrase: 'Can you check the…?', tag: 'phrase', definition: 'Ask the mechanic to look at a part.', example: '"Can you check the engine? It makes a strange noise."', imageSlug: img('can-you-check') },
    { phrase: 'How much will it cost to fix?', tag: 'phrase', definition: 'Ask about the price of a repair.', example: '"How much will it cost to fix the bumper?"', inAction: 'UK vs US: bonnet / hood, boot / trunk, number plate / license plate, windscreen / windshield.', imageSlug: img('cost-to-fix') },
    { phrase: 'TURN ON', definition: 'To start a machine or light.', example: 'Turn on the headlights — it\'s getting dark.', imageSlug: img('turn-on') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Mechanic', speakerColor: 'orange', text: 'Good morning! What can I do for you?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Hi. There's a problem with my car. Someone hit it in the car park yesterday." },
    { speaker: 'Mechanic', speakerColor: 'orange', text: 'Oh no. Where did they hit it?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "At the back. There's a dent in the [[bumper:part that protects the car]], and one [[tail light:red light at the back]] is broken." },
    { speaker: 'Mechanic', speakerColor: 'orange', text: "Let me see. Yes, and your [[side mirror:mirror on the side]] is broken too." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Really? I didn't see that! Can you also check the [[wipers:parts that clean rain from the window]]? They make a noise." },
    { speaker: 'Mechanic', speakerColor: 'orange', text: "Sure. I'll open the [[bonnet:front cover over the engine]] and check everything." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Thank you. How much will it cost to fix?' },
    { speaker: 'Mechanic', speakerColor: 'orange', text: "About 300 euros. It will be ready on Friday." },
  ],

  matchingExercise: [
    { word: 'BONNET / HOOD', definition: 'Front cover over the engine' },
    { word: 'BUMPER', definition: 'Part that protects the front and back' },
    { word: 'WIPERS', definition: 'Clean rain from the front window' },
    { word: 'TAIL LIGHT', definition: 'Red light at the back' },
    { word: 'CLUTCH', definition: 'Pedal to change gears' },
    { word: 'SUNROOF', definition: 'A window on the roof' },
  ],

  fillBlankExercise: [
    { before: 'She opened the', after: 'to check the engine.', answer: 'bonnet' },
    { before: "Turn on the", after: " — it's raining.", answer: 'wipers' },
    { before: 'I need to fix the dent in my front', after: '.', answer: 'bumper' },
    { before: "There's a problem", after: 'my car.', answer: 'with' },
    { before: 'How much will it cost to', after: '?', answer: 'fix' },
    { before: 'Driving with a', after: 'takes practice.', answer: 'clutch' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the US word for "bonnet"?', options: ['Trunk', 'Hood', 'Roof', 'Grill'], correctIndex: 1 },
    { question: 'What colour is a tail light?', options: ['White', 'Red', 'Blue', 'Green'], correctIndex: 1 },
    { question: 'What do you press to change gears?', options: ['The clutch', 'The wipers', 'The bumper', 'The grill'], correctIndex: 0 },
    { question: "In the dialogue, where was Tim's car hit?", options: ['At the front', 'At the back', 'On the roof', 'On the side only'], correctIndex: 1 },
    { question: 'When will the car be ready?', options: ['Today', 'Tomorrow', 'Friday', 'Next week'], correctIndex: 2 },
  ],
};
