import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-disagreement-compromise-${s}.png`;

export const businessDisagreementCompromise: Lesson = {
  slug: 'business-disagreement-compromise',
  title: 'Polite Disagreement and Compromise',
  subtitle: 'B1-B2 · Problem Solving · Lesson 3',
  level: 'B1-B2',
  description:
    'Learn how to disagree without causing conflict, suggest a compromise where both sides give a little, and reach a fair agreement.',
  heroImage: img('hero'),

  objectives: [
    'Disagree politely and explain why.',
    'Suggest a compromise between two ideas.',
    'Accept a fair solution and close the discussion.',
  ],

  vocabulary: [
    { word: 'DISAGREE', partOfSpeech: 'verb', definition: 'To have a different opinion from someone.', example: 'I disagree with that idea.', imageSlug: img('disagree') },
    { word: 'COMPROMISE', partOfSpeech: 'noun', definition: 'An agreement where each side gives up something.', example: 'A good leader looks for a compromise.', imageSlug: img('compromise') },
    { word: 'OPINION', partOfSpeech: 'noun', definition: 'What you think or believe about something.', example: 'Everyone shared their opinions.', imageSlug: img('opinion') },
    { word: 'FAIR', partOfSpeech: 'adjective', definition: 'Reasonable; not giving more to one side than the other.', example: 'That sounds like a fair solution.', imageSlug: img('fair') },
    { word: 'CONCERN', partOfSpeech: 'noun', definition: 'A worry about something.', example: "Kira understands Tim's concern.", imageSlug: img('concern') },
  ],

  phrasalVerbs: [
    { phrase: 'POINT OUT', definition: 'To explain or show something clearly.', example: 'Kira pointed out a problem in the plan.', imageSlug: img('point-out') },
    { phrase: 'BACK DOWN', definition: 'To stop insisting and accept the other side\'s idea.', example: 'Tim backed down after he heard the facts.', imageSlug: img('back-down') },
    { phrase: 'TALK OVER', definition: 'To discuss a problem together.', example: "Let's talk it over before deciding.", imageSlug: img('talk-over') },
    { phrase: 'FIND MIDDLE GROUND', tag: 'collocation', definition: 'To agree on a compromise between two positions.', example: 'We need to find middle ground.', imageSlug: img('middle-ground') },
    { phrase: 'COME TO AN AGREEMENT', tag: 'collocation', definition: 'To decide something together.', example: 'We finally came to an agreement.', imageSlug: img('come-to-an-agreement') },
    { phrase: "I'm afraid I don't agree.", tag: 'phrase', definition: 'A polite, slightly formal way to disagree.', example: '"I\'m afraid I don\'t agree. The cost is too high."', inAction: '"I\'m afraid…" softens bad news or disagreement. It doesn\'t mean you are scared!', imageSlug: img('afraid-i-dont-agree') },
    { phrase: 'Maybe we can do part of your idea and part of mine.', tag: 'phrase', definition: 'Suggest a compromise.', example: '"Maybe we can do part of your idea and part of mine: two days online, three in the office."', imageSlug: img('part-of-your-idea') },
    { phrase: 'Yes, that works for me.', tag: 'phrase', definition: 'Accept a compromise.', example: '"Three days in the office? Yes, that works for me."', imageSlug: img('works-for-me') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I think the whole team should work from the office five days a week. Communication is better.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm afraid I don't agree. Many people travel more than an hour each way." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I understand that, but my [[concern:worry]] is that new staff learn slowly from home.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's a fair point. Let's [[talk over:discuss together]] the options. Can we [[find middle ground:agree on a compromise]]?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'What do you suggest?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Maybe we can do part of your idea and part of mine. Three days in the office, two at home. New staff come in every day for their first month.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Hmm. I wanted five days, but I can [[back down:accept the other idea]] on that. It's a [[fair:reasonable for both sides]] [[compromise:agreement where both sides give something]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Great. So we've [[come to an agreement:decided together]]. I'll share it with the team." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Yes, that works for me.' },
  ],

  matchingExercise: [
    { word: 'COMPROMISE', definition: 'An agreement where each side gives something' },
    { word: 'FAIR', definition: 'Reasonable for both sides' },
    { word: 'CONCERN', definition: 'A worry about something' },
    { word: 'BACK DOWN', definition: "To accept the other side's idea" },
    { word: 'TALK OVER', definition: 'To discuss a problem together' },
    { word: 'FIND MIDDLE GROUND', definition: 'To agree on a compromise' },
  ],

  fillBlankExercise: [
    { before: "I'm", after: "I don't agree.", answer: 'afraid' },
    { before: "Let's talk it", after: 'before we decide.', answer: 'over' },
    { before: 'We need to find middle', after: '.', answer: 'ground' },
    { before: 'He backed', after: 'after he heard the facts.', answer: 'down' },
    { before: 'Yes, that works', after: 'me.', answer: 'for' },
    { before: 'We finally came to an', after: '.', answer: 'agreement' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "compromise"?', options: ['A big argument', 'An agreement where each side gives up something', 'A final deadline', 'A type of meeting'], correctIndex: 1 },
    { question: 'Which phrase disagrees politely?', options: ["You're wrong.", "I'm afraid I don't agree.", 'Never!', 'That\'s silly.'], correctIndex: 1 },
    { question: 'What does "I\'m afraid…" mean in "I\'m afraid I don\'t agree"?', options: ['I am scared', 'It softens the disagreement', 'I am angry', 'I am tired'], correctIndex: 1 },
    { question: 'What does "back down" mean?', options: ['Sit down', 'Stop insisting and accept the other idea', 'Go back to your desk', 'Lose your job'], correctIndex: 1 },
    { question: 'In the dialogue, what is Tim\'s concern?', options: ['Travel costs', 'New staff learn slowly from home', 'The office is too small', 'Meetings are too long'], correctIndex: 1 },
    { question: 'What is the final compromise?', options: ['Five days in the office', 'Five days at home', 'Three days in the office, two at home', 'One day in the office'], correctIndex: 2 },
  ],
};
