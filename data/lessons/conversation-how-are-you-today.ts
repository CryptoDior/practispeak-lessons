import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-how-are-you-today-${s}.png`;

export const conversationHowAreYouToday: Lesson = {
  slug: 'conversation-how-are-you-today',
  title: 'How Are You Today?',
  subtitle: 'Everyday Conversation · Lesson 2',
  level: 'A1-A2',
  description:
    'Learn how to ask "How are you?" and answer about your feelings. Say if you are fine, tired, happy or sad, and ask about someone\'s day.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Ask "How are you?" and answer politely.',
    'Say how you feel: fine, tired, happy or sad.',
    'Ask about someone\'s day and answer.',
  ],

  vocabulary: [
    { word: 'FINE', partOfSpeech: 'adjective', definition: 'OK. Not good and not bad.', example: "I'm fine, thank you.", imageSlug: img('fine') },
    { word: 'GOOD', partOfSpeech: 'adjective', definition: 'Nice. You feel well.', example: "I'm good, thanks!", imageSlug: img('good') },
    { word: 'TIRED', partOfSpeech: 'adjective', definition: 'You want to sleep. You have no energy.', example: "I'm tired. I worked a lot today.", imageSlug: img('tired') },
    { word: 'HAPPY', partOfSpeech: 'adjective', definition: 'You feel good and you smile.', example: "I'm happy. It's my birthday!", imageSlug: img('happy') },
    { word: 'SAD', partOfSpeech: 'adjective', definition: 'You feel bad. You are not happy.', example: "I'm sad. My friend went home.", imageSlug: img('sad') },
    { word: 'FEEL', partOfSpeech: 'verb', definition: 'To have an emotion, like happy or sad.', example: 'I feel happy today.', imageSlug: img('feel') },
    { word: 'DAY', partOfSpeech: 'noun', definition: 'The time from morning to night.', example: 'How is your day?', imageSlug: img('day') },
  ],

  phrasalVerbs: [
    { phrase: 'How are you?', tag: 'phrase', definition: 'A common question about how someone feels.', example: '"Hi Rosie! How are you?"', imageSlug: img('how-are-you') },
    { phrase: "I'm fine, thank you.", tag: 'phrase', definition: 'A polite, simple answer.', example: '"How are you?" → "I\'m fine, thank you."', imageSlug: img('fine-thank-you') },
    { phrase: "I'm good.", tag: 'phrase', definition: 'A natural, friendly answer.', example: '"How are you?" → "I\'m good!"', imageSlug: img('im-good') },
    { phrase: "I'm okay.", tag: 'phrase', definition: 'You feel normal. Not good, not bad.', example: '"How are you?" → "I\'m okay."', imageSlug: img('im-okay') },
    { phrase: 'And you?', tag: 'phrase', definition: 'A polite way to ask the same question back.', example: '"I\'m fine, thank you. And you?"', inAction: 'Always ask back! After you answer, say "And you?". It is polite.', imageSlug: img('and-you') },
    { phrase: 'How is your day?', tag: 'phrase', definition: 'A question about someone\'s day.', example: '"How is your day?" → "My day is good."', imageSlug: img('how-is-your-day') },
    { phrase: 'I feel…', tag: 'phrase', definition: 'Use this to talk about your emotions.', example: '"I feel happy." / "I feel tired."', imageSlug: img('i-feel') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Hi Oliver! How are you today?' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "I'm [[good:nice, you feel well]], thank you. And you?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I'm [[fine:OK, not good and not bad]]. How is your [[day:the time from morning to night]]?" },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'My day is good. I [[feel:have an emotion]] [[happy:good and smiling]] today.' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "That's great! Yesterday I was very [[tired:wanting to sleep]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Really? I feel a little tired now.' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Oh no! I hope you feel better later.' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Thanks, Rosie. Don't be [[sad:not happy]] about yesterday. Today is a new day!" },
  ],

  practiceTime: {
    instructions: "Teacher and student read the conversation together. The student says the missing words out loud. Use the words from the lesson.",
    lines: [
      { speaker: 'Teacher', text: "Hi! How are you today?" },
      { speaker: 'Student', text: "I'm {{fine/good/okay}}, thank you. {{And you?}}" },
      { speaker: 'Teacher', text: "I'm {{good/fine}}, thanks." },
      { speaker: 'Student', text: "How is your {{day}}?" },
      { speaker: 'Teacher', text: "My day is {{good/okay}}. I {{feel}} {{happy/tired}} today. How do you feel today?" },
      { speaker: 'Student', text: "I {{feel}} {{happy/tired/good}} today." },
      { speaker: 'Teacher', text: "Are you tired?" },
      { speaker: 'Student', text: "{{Yes, I'm tired./No, I'm not tired.}}" },
      { speaker: 'Teacher', text: "Why are you happy?" },
      { speaker: 'Student', text: "I'm {{happy}} because {{it's my birthday/it's the weekend}}." },
      { speaker: 'Teacher', text: "When do you feel sad?" },
      { speaker: 'Student', text: "I feel {{sad}} when my friend goes home." },
    ],
  },

  matchingExercise: [
    { word: 'FINE', definition: 'OK, not good and not bad' },
    { word: 'TIRED', definition: 'You want to sleep' },
    { word: 'HAPPY', definition: 'You feel good and smile' },
    { word: 'SAD', definition: 'You are not happy' },
    { word: 'FEEL', definition: 'To have an emotion' },
    { word: 'AND YOU?', definition: 'Ask the same question back' },
  ],

  fillBlankExercise: [
    { before: 'Hi! How', after: 'you today?', answer: 'are' },
    { before: "I'm good, thank you.", after: 'you?', answer: 'And' },
    { before: 'How is your', after: '?', answer: 'day' },
    { before: 'I', after: 'happy today.', answer: 'feel' },
    { before: "I'm", after: '. I want to sleep.', answer: 'tired' },
    { before: "I'm", after: ', thank you.', answer: 'fine' },
  ],

  multipleChoiceExercise: [
    { question: '"How are you?" What is a good answer?', options: ["I'm tired.", 'Goodbye.', 'My name is Oliver.', 'Nice to meet you.'], correctIndex: 0 },
    { question: 'What does "tired" mean?', options: ['You feel sleepy', 'You feel happy', 'You are hungry', 'You are late'], correctIndex: 0 },
    { question: 'You answer "I\'m fine, thank you." What do you say next?', options: ['Goodbye.', 'And you?', 'What time is it?', 'See you.'], correctIndex: 1 },
    { question: '"How is your day?" What is the best answer?', options: ['My day is good.', 'See you next time.', "I'm from Spain.", 'Yes, I do.'], correctIndex: 0 },
    { question: '"I\'m sad." means…', options: ["I'm unhappy.", "I'm hungry.", "I'm good.", "I'm late."], correctIndex: 0 },
    { question: 'In the dialogue, how does Oliver feel now?', options: ['Sad', 'A little tired', 'Angry', 'Hungry'], correctIndex: 1 },
  ],
};
