import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-when-is-your-birthday-${s}.png`;

export const conversationWhenIsYourBirthday: Lesson = {
  slug: 'conversation-when-is-your-birthday',
  title: 'When Is Your Birthday?',
  subtitle: 'Everyday Conversation · Lesson 4',
  level: 'A1-A2',
  description:
    'Learn how to talk about birthdays, dates and age. Ask "When is your birthday?" and "How old are you?" and say "Happy birthday!".',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "When is your birthday?".',
    'Say dates with months and days, like "May 10th".',
    'Ask and say your age.',
  ],

  vocabulary: [
    { word: 'BIRTHDAY', partOfSpeech: 'noun', definition: 'The day every year when you were born.', example: 'My birthday is on May 10th.', imageSlug: img('birthday') },
    { word: 'MONTH', partOfSpeech: 'noun', definition: 'One of the 12 parts of the year, like March or July.', example: 'My birthday is in March.', imageSlug: img('month') },
    { word: 'DATE', partOfSpeech: 'noun', definition: 'The day and month, like July 3rd.', example: 'What is the date of your birthday?', imageSlug: img('date') },
    { word: 'YEAR', partOfSpeech: 'noun', definition: '12 months. For example, 2001.', example: 'I was born in 2001.', imageSlug: img('year') },
    { word: 'OLD', partOfSpeech: 'adjective', definition: 'We use it to talk about age.', example: "I'm 20 years old.", imageSlug: img('old') },
    { word: 'SOON', partOfSpeech: 'adverb', definition: 'After a short time.', example: 'My birthday is soon. It is next week!', imageSlug: img('soon') },
  ],

  phrasalVerbs: [
    { phrase: 'When is your birthday?', tag: 'phrase', definition: 'Ask someone the date of their birthday.', example: '"When is your birthday?" → "It\'s on May 10th."', imageSlug: img('when-is-your-birthday') },
    { phrase: 'My birthday is on…', tag: 'phrase', definition: 'Use this to give the date.', example: '"My birthday is on July 3rd."', inAction: 'Use "on" with a date (on July 3rd) and "in" with a month or year (in July, in 2001).', imageSlug: img('my-birthday-is-on') },
    { phrase: 'I was born in…', tag: 'phrase', definition: 'Use this to say the year you were born.', example: '"I was born in 2000."', imageSlug: img('i-was-born-in') },
    { phrase: 'How old are you?', tag: 'phrase', definition: "Ask someone's age.", example: '"How old are you?" → "I\'m 20 years old."', imageSlug: img('how-old-are-you') },
    { phrase: "I'm … years old.", tag: 'phrase', definition: 'Use this to say your age.', example: '"I\'m 25 years old."', imageSlug: img('years-old') },
    { phrase: "That's soon!", tag: 'phrase', definition: 'Say this when a birthday is close.', example: '"My birthday is next week." → "That\'s soon!"', imageSlug: img('thats-soon') },
    { phrase: 'Happy birthday!', tag: 'phrase', definition: 'What you say to someone on their birthday.', example: '"Happy birthday, Tim!" → "Thank you!"', imageSlug: img('happy-birthday') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Tim, when is your [[birthday:the day every year when you were born]]?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'My birthday is on May 10th. And you?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I was born on July 3rd.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Oh, what [[year:12 months, like 2001]] were you born?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I was born in 2001. How [[old:your age]] are you?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'm 24 years old." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Wait, May 10th? That's next week! Your birthday is [[soon:after a short time]]!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Yes! I'm excited." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Happy birthday for next week!' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Thank you, Kira!' },
  ],

  matchingExercise: [
    { word: 'BIRTHDAY', definition: 'The day every year when you were born' },
    { word: 'MONTH', definition: 'One of 12 parts of the year' },
    { word: 'DATE', definition: 'The day and month' },
    { word: 'YEAR', definition: '12 months' },
    { word: 'SOON', definition: 'After a short time' },
    { word: 'HAPPY BIRTHDAY!', definition: 'What you say on someone\'s birthday' },
  ],

  fillBlankExercise: [
    { before: 'When is your', after: '?', answer: 'birthday' },
    { before: 'My birthday is', after: 'May 10th.', answer: 'on' },
    { before: 'I was born', after: '2001.', answer: 'in' },
    { before: 'How', after: 'are you?', answer: 'old' },
    { before: "I'm 20 years", after: '.', answer: 'old' },
    { before: 'Happy', after: '!', answer: 'birthday' },
  ],

  multipleChoiceExercise: [
    { question: '"When is your birthday?" What is a good answer?', options: ["It's on May 10th.", "I'm 20.", "I'm from Spain.", "I'm fine."], correctIndex: 0 },
    { question: 'Which is correct?', options: ['My birthday is in July 3rd.', 'My birthday is on July 3rd.', 'My birthday is at July 3rd.', 'My birthday July 3rd.'], correctIndex: 1 },
    { question: '"How old are you?" asks about your…', options: ['age', 'country', 'job', 'feelings'], correctIndex: 0 },
    { question: 'A friend\'s birthday is tomorrow. What can you say?', options: ["That's soon!", 'Goodbye!', "I'm tired.", 'Where is that?'], correctIndex: 0 },
    { question: 'In the dialogue, when is Tim\'s birthday?', options: ['July 3rd', 'May 10th', 'March 12th', 'June 1st'], correctIndex: 1 },
    { question: 'What year was Kira born?', options: ['2000', '2001', '2010', '1999'], correctIndex: 1 },
  ],
};
