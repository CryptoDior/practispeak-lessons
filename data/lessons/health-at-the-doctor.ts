import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}health-at-the-doctor-${s}.png`;

export const healthAtTheDoctor: Lesson = {
  slug: 'health-at-the-doctor',
  title: 'At the Doctor: Flu and Colds',
  subtitle: 'Health & Wellness · B1-B2',
  level: 'B1-B2',
  description:
    'Learn how to describe your symptoms to a doctor, understand questions and advice, and talk about medicine, prescriptions and recovery.',
  heroImage: img('hero'),

  objectives: [
    'Describe common cold and flu symptoms.',
    'Understand a doctor\'s questions and advice.',
    'Talk about medicine, prescriptions and recovery.',
  ],

  vocabulary: [
    { word: 'FEVER', partOfSpeech: 'noun', definition: 'A high body temperature.', example: 'I have a fever. My body is very hot.', imageSlug: img('fever') },
    { word: 'COUGH', partOfSpeech: 'noun / verb', definition: 'Forcing air out of your throat with a sudden noise.', example: "I have a bad cough. It won't stop.", imageSlug: img('cough') },
    { word: 'SORE THROAT', partOfSpeech: 'noun', definition: 'Pain in the throat.', example: 'My throat hurts when I talk.', imageSlug: img('sore-throat') },
    { word: 'HEADACHE', partOfSpeech: 'noun', definition: 'A pain in your head.', example: 'I have a headache. My head hurts a lot.', imageSlug: img('headache') },
    { word: 'RUNNY NOSE', partOfSpeech: 'noun', definition: 'When liquid keeps coming out of your nose.', example: 'I have a runny nose. I need a tissue.', imageSlug: img('runny-nose') },
    { word: 'SNEEZE', partOfSpeech: 'verb', definition: 'To blow air suddenly out of your nose, often with a loud sound.', example: 'I keep sneezing because of my cold.', imageSlug: img('sneeze') },
    { word: 'FATIGUE', partOfSpeech: 'noun', definition: 'Extreme tiredness.', example: 'Fatigue is common with the flu.', imageSlug: img('fatigue') },
    { word: 'CHILLS', partOfSpeech: 'noun', definition: 'Feeling cold and shaking when you are ill.', example: 'I feel cold, but my body is hot. I have the chills.', imageSlug: img('chills') },
    { word: 'SYMPTOM', partOfSpeech: 'noun', definition: 'A sign of illness, like a fever or cough.', example: 'A fever is a symptom of the flu.', imageSlug: img('symptom') },
    { word: 'PRESCRIPTION', partOfSpeech: 'noun', definition: 'A written order from a doctor for medicine.', example: 'The doctor gave me a prescription.', imageSlug: img('prescription') },
    { word: 'ALLERGY', partOfSpeech: 'noun', definition: 'A bad reaction to something like dust, pollen or food.', example: 'I have an allergy to penicillin.', imageSlug: img('allergy') },
    { word: 'RECOVERY', partOfSpeech: 'noun', definition: 'Getting better after an illness.', example: 'Rest helps your recovery.', imageSlug: img('recovery') },
  ],

  phrasalVerbs: [
    { phrase: 'What are your symptoms?', tag: 'phrase', definition: 'The doctor asks what problems you have.', example: '"Good morning. What are your symptoms?"', imageSlug: img('what-symptoms') },
    { phrase: 'How long have you been feeling this way?', tag: 'phrase', definition: 'The doctor asks when the illness started.', example: '"How long have you been feeling this way?" → "Since Monday."', imageSlug: img('how-long') },
    { phrase: "I've had a … since…", tag: 'phrase', definition: 'Say how long you have had a symptom.', example: '"I\'ve had a fever since Tuesday."', inAction: 'Use the present perfect + "since" (a point in time) or "for" (a period): since Monday / for three days.', imageSlug: img('ive-had-since') },
    { phrase: "I'm allergic to…", tag: 'phrase', definition: 'Tell the doctor about allergies before you get medicine.', example: '"Before you prescribe anything — I\'m allergic to penicillin."', imageSlug: img('allergic-to') },
    { phrase: 'You should get some rest.', tag: 'phrase', definition: 'Advice to relax and recover.', example: '"You should get some rest and drink plenty of water."', imageSlug: img('get-rest') },
    { phrase: 'If it gets worse, come back to see me.', tag: 'phrase', definition: 'Return if you don\'t get better.', example: '"If your fever gets worse, come back to see me."', imageSlug: img('gets-worse') },
    { phrase: 'COME DOWN WITH', definition: 'To start to get an illness.', example: 'I think I\'m coming down with a cold.', imageSlug: img('come-down-with') },
    { phrase: 'GET OVER', definition: 'To recover from an illness.', example: 'It took me a week to get over the flu.', imageSlug: img('get-over') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Doctor', speakerColor: 'blue', text: 'Good morning, Tim. Please sit down. What are your [[symptom:signs of illness]]s?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I feel terrible. I have a [[sore throat:pain in the throat]], a [[runny nose:liquid coming from the nose]] and a bad [[cough:noisy air from the throat]]." },
    { speaker: 'Doctor', speakerColor: 'blue', text: "How long have you been feeling this way?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Since Sunday. Last night I had a [[fever:high temperature]] and the [[chills:feeling cold and shaking]]. And I can't stop [[sneezing:blowing air from the nose]]." },
    { speaker: 'Doctor', speakerColor: 'blue', text: "Do you have a [[headache:pain in the head]] or muscle pain? Any [[fatigue:extreme tiredness]]?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Yes, I'm exhausted. I think I came down with something at work." },
    { speaker: 'Doctor', speakerColor: 'blue', text: "It sounds like the flu. Do you have any [[allergies:bad reactions to something]] to medicine?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No, none." },
    { speaker: 'Doctor', speakerColor: 'blue', text: "OK. Here's a [[prescription:doctor's order for medicine]] for something to bring the fever down. You should get some rest and drink plenty of water. Your [[recovery:getting better]] should take about a week." },
    { speaker: 'Doctor', speakerColor: 'blue', text: "If it gets worse, come back to see me." },
  ],

  matchingExercise: [
    { word: 'FEVER', definition: 'A high body temperature' },
    { word: 'FATIGUE', definition: 'Extreme tiredness' },
    { word: 'CHILLS', definition: 'Feeling cold and shaking when ill' },
    { word: 'SYMPTOM', definition: 'A sign of illness' },
    { word: 'PRESCRIPTION', definition: "A doctor's order for medicine" },
    { word: 'RECOVERY', definition: 'Getting better after illness' },
  ],

  fillBlankExercise: [
    { before: 'I feel tired all the time. I think I have', after: '.', answer: 'fatigue' },
    { before: 'The doctor gave me a', after: 'for antibiotics.', answer: 'prescription' },
    { before: 'A fever is a', after: 'of the flu.', answer: 'symptom' },
    { before: "I've had a cough", after: 'Monday.', answer: 'since' },
    { before: 'I think I\'m coming', after: 'with a cold.', answer: 'down' },
    { before: 'It took me a week to get', after: 'the flu.', answer: 'over' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "symptom"?', options: ['A type of medicine', 'A sign of illness', 'A doctor\'s office', 'A hospital bed'], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ["I've had a fever since three days.", "I've had a fever for three days.", 'I have a fever since three days.', 'I had fever for since three days.'], correctIndex: 1 },
    { question: 'What does "get over" mean?', options: ['Get worse', 'Recover from', 'Climb', 'Catch an illness'], correctIndex: 1 },
    { question: 'What does the doctor mean by "If it gets worse, come back"?', options: ['Never come back', 'Return if you don\'t improve', 'Come back tomorrow', 'Go to another doctor'], correctIndex: 1 },
    { question: 'In the dialogue, since when has Tim felt ill?', options: ['Since Friday', 'Since Sunday', 'Since yesterday', 'For a month'], correctIndex: 1 },
    { question: 'How long should Tim\'s recovery take?', options: ['One day', 'About a week', 'A month', 'Two weeks'], correctIndex: 1 },
  ],
};
