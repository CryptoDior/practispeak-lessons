import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-what-time-is-it-${s}.png`;

export const conversationWhatTimeIsIt: Lesson = {
  slug: 'conversation-what-time-is-it',
  title: 'What Time Is It?',
  subtitle: 'Everyday Conversation · Lesson 5',
  level: 'A1-A2',
  description:
    'Learn how to ask and tell the time in English. Say "o\'clock", "half past" and "quarter to", and talk about when you wake up and go to bed.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "What time is it?".',
    'Say times with o\'clock, half past, quarter past and quarter to.',
    'Talk about when you wake up and go to bed.',
  ],

  vocabulary: [
    { word: "O'CLOCK", partOfSpeech: 'adverb', definition: 'We use it for full hours, like 3:00.', example: "It's 3 o'clock.", imageSlug: img('oclock') },
    { word: 'HALF PAST', partOfSpeech: 'phrase', definition: '30 minutes after the hour.', example: "It's half past six. (6:30)", imageSlug: img('half-past') },
    { word: 'QUARTER PAST', partOfSpeech: 'phrase', definition: '15 minutes after the hour.', example: "It's quarter past seven. (7:15)", imageSlug: img('quarter-past') },
    { word: 'QUARTER TO', partOfSpeech: 'phrase', definition: '15 minutes before the hour.', example: "It's quarter to eight. (7:45)", imageSlug: img('quarter-to') },
    { word: 'WAKE UP', partOfSpeech: 'phrasal verb', definition: 'To stop sleeping.', example: 'I wake up at 7.', imageSlug: img('wake-up') },
    { word: 'GO TO BED', partOfSpeech: 'phrase', definition: 'To go to sleep at night.', example: 'I go to bed at 10.', imageSlug: img('go-to-bed') },
    { word: 'HURRY UP', partOfSpeech: 'phrasal verb', definition: 'Be fast! We are late.', example: "Hurry up! The class starts in five minutes.", imageSlug: img('hurry-up') },
  ],

  phrasalVerbs: [
    { phrase: 'What time is it?', tag: 'phrase', definition: 'Ask the time now.', example: '"What time is it?" → "It\'s 3 o\'clock."', imageSlug: img('what-time-is-it') },
    { phrase: "It's … o'clock.", tag: 'phrase', definition: 'Use this for full hours.', example: '"It\'s 9 o\'clock."', imageSlug: img('its-oclock') },
    { phrase: "It's half past …", tag: 'phrase', definition: 'Use this for 30 minutes after the hour.', example: '"It\'s half past six." (6:30)', imageSlug: img('its-half-past') },
    { phrase: "It's quarter to …", tag: 'phrase', definition: 'Use this for 15 minutes before the hour.', example: '"It\'s quarter to eight." (7:45)', inAction: 'You can also just say the numbers: "It\'s seven forty-five." Both are correct.', imageSlug: img('its-quarter-to') },
    { phrase: 'What time do you wake up?', tag: 'phrase', definition: 'A question about your morning.', example: '"What time do you wake up?" → "I wake up at 7."', imageSlug: img('what-time-wake-up') },
    { phrase: 'I wake up at …', tag: 'phrase', definition: 'Use "at" before a time.', example: '"I wake up at 6:30."', imageSlug: img('i-wake-up-at') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Tim, what time is it?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "It's 3 [[o'clock:a full hour]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Oh! I have a class at [[half past:30 minutes after]] three.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Don't worry, you have 30 minutes. You don't need to [[hurry up:be fast]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Good. What time do you [[wake up:stop sleeping]], Tim?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I wake up at 7 every day.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Nice! I wake up at [[quarter past:15 minutes after]] six.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Really? That\'s early! What time do you [[go to bed:go to sleep at night]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I go to bed at 10.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Same! Oh look, it\'s [[quarter to:15 minutes before]] four now… wait, no! It\'s 3:25. Go to your class!' },
  ],

  matchingExercise: [
    { word: "O'CLOCK", definition: 'A full hour, like 3:00' },
    { word: 'HALF PAST', definition: '30 minutes after the hour' },
    { word: 'QUARTER PAST', definition: '15 minutes after the hour' },
    { word: 'QUARTER TO', definition: '15 minutes before the hour' },
    { word: 'WAKE UP', definition: 'To stop sleeping' },
    { word: 'HURRY UP', definition: 'Be fast!' },
  ],

  fillBlankExercise: [
    { before: 'What', after: 'is it?', answer: 'time' },
    { before: "It's 3", after: '.', answer: "o'clock" },
    { before: "It's half", after: 'six. (6:30)', answer: 'past' },
    { before: "It's quarter", after: 'eight. (7:45)', answer: 'to' },
    { before: 'I wake up', after: '7 every day.', answer: 'at' },
    { before: 'I go to', after: 'at 10.', answer: 'bed' },
  ],

  multipleChoiceExercise: [
    { question: 'It is 6:30. What do you say?', options: ["It's half past six.", "It's quarter to six.", "It's six o'clock.", "It's quarter past six."], correctIndex: 0 },
    { question: 'It is 7:15. What do you say?', options: ["It's quarter to seven.", "It's quarter past seven.", "It's half past seven.", "It's seven o'clock."], correctIndex: 1 },
    { question: 'It is 7:45. What do you say?', options: ["It's quarter past eight.", "It's quarter to eight.", "It's half past seven.", "It's eight o'clock."], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ['I wake up in 7.', 'I wake up on 7.', 'I wake up at 7.', 'I wake up 7 at.'], correctIndex: 2 },
    { question: 'In the dialogue, what time is Kira\'s class?', options: ['3:00', '3:30', '4:00', '6:15'], correctIndex: 1 },
    { question: 'What time does Tim wake up?', options: ['6:15', '7:00', '10:00', '3:00'], correctIndex: 1 },
  ],
};
