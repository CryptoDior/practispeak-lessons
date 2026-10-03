import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-what-do-you-do-${s}.png`;

export const conversationWhatDoYouDo: Lesson = {
  slug: 'conversation-what-do-you-do',
  title: 'What Do You Do?',
  subtitle: 'Everyday Conversation · Lesson 8',
  level: 'A1-A2',
  description:
    'Learn how to ask about jobs and studies. Say what you do, where you work or study, and if you like your job.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "What do you do?".',
    'Say where you work or study.',
    'Ask if someone likes their job and give short answers.',
  ],

  vocabulary: [
    { word: 'JOB', partOfSpeech: 'noun', definition: 'The work you do to get money.', example: 'Do you like your job?', imageSlug: img('job') },
    { word: 'WORK', partOfSpeech: 'verb', definition: 'To do a job.', example: 'I work at a hospital.', imageSlug: img('work') },
    { word: 'STUDY', partOfSpeech: 'verb', definition: 'To learn something at school or university.', example: 'I study English.', imageSlug: img('study') },
    { word: 'STUDENT', partOfSpeech: 'noun', definition: 'A person who studies at a school or university.', example: "I'm a student.", imageSlug: img('student') },
    { word: 'TEACHER', partOfSpeech: 'noun', definition: 'A person who teaches at a school.', example: "She's a teacher.", imageSlug: img('teacher') },
    { word: 'CHEF', partOfSpeech: 'noun', definition: 'A person who cooks food in a restaurant.', example: "He's a chef. He works at a restaurant.", imageSlug: img('chef') },
    { word: 'UNIVERSITY', partOfSpeech: 'noun', definition: 'A big school for adults.', example: 'I study at a university.', imageSlug: img('university') },
  ],

  phrasalVerbs: [
    { phrase: 'What do you do?', tag: 'phrase', definition: 'A question about your job or school.', example: '"What do you do?" → "I\'m a teacher."', inAction: '"What do you do?" means "What is your job?". It does not mean "What are you doing now?".', imageSlug: img('what-do-you-do') },
    { phrase: "I'm a / an…", tag: 'phrase', definition: 'Use this to say your job.', example: '"I\'m a chef." / "I\'m an engineer."', imageSlug: img('im-a') },
    { phrase: 'I work at…', tag: 'phrase', definition: 'Say the place where you work.', example: '"I work at a bank."', imageSlug: img('i-work-at') },
    { phrase: 'Where do you study?', tag: 'phrase', definition: 'A question about school or university.', example: '"Where do you study?" → "At a language school."', imageSlug: img('where-do-you-study') },
    { phrase: 'Do you like your job?', tag: 'phrase', definition: 'A simple question about someone\'s opinion of their job.', example: '"Do you like your job?" → "Yes, I do."', imageSlug: img('do-you-like-your-job') },
    { phrase: "Yes, I do. / No, I don't.", tag: 'phrase', definition: 'Short answers for "Do you…?" questions.', example: '"Do you work here?" → "No, I don\'t."', imageSlug: img('yes-i-do') },
    { phrase: "That's interesting!", tag: 'phrase', definition: 'A friendly reaction. You want to hear more.', example: '"I\'m a pilot." → "That\'s interesting!"', imageSlug: img('thats-interesting') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'So, Kira, what do you do?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm a [[student:a person who studies]]. I [[study:learn at school]] English. And you?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'm a [[chef:a person who cooks in a restaurant]]. I [[work:do a job]] at a restaurant." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's interesting! Do you like your [[job:work you do for money]]?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Yes, I do. Where do you study?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I study at a language school. Next year I want to go to [[university:a big school for adults]].' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Nice! Do you want to be a [[teacher:a person who teaches]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Maybe! What about you?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I want to open my own restaurant one day.' },
  ],

  matchingExercise: [
    { word: 'JOB', definition: 'The work you do to get money' },
    { word: 'STUDENT', definition: 'A person who studies' },
    { word: 'TEACHER', definition: 'A person who teaches at a school' },
    { word: 'CHEF', definition: 'A person who cooks in a restaurant' },
    { word: 'UNIVERSITY', definition: 'A big school for adults' },
    { word: 'STUDY', definition: 'To learn at school or university' },
  ],

  fillBlankExercise: [
    { before: 'What do you', after: '?', answer: 'do' },
    { before: "I'm a", after: '. I study English.', answer: 'student' },
    { before: 'I work', after: 'a hospital.', answer: 'at' },
    { before: 'Where do you', after: '? → At a university.', answer: 'study' },
    { before: 'Do you like your', after: '?', answer: 'job' },
    { before: '"Do you like your job?" "Yes, I', after: '."', answer: 'do' },
  ],

  multipleChoiceExercise: [
    { question: '"What do you do?" What is a good answer?', options: ["I'm a teacher.", "I'm fine.", "I'm from Brazil.", "It's sunny."], correctIndex: 0 },
    { question: 'What does "What do you do?" mean?', options: ['What is your job?', 'What are you doing now?', 'How are you?', 'Where do you live?'], correctIndex: 0 },
    { question: '"Do you like your job?" Which short answer is correct?', options: ['Yes, I like.', 'Yes, I do.', 'Yes, I am.', 'Yes, do I.'], correctIndex: 1 },
    { question: 'Which is correct?', options: ["I'm a engineer.", "I'm an engineer.", "I'm engineer.", "I engineer."], correctIndex: 1 },
    { question: 'In the dialogue, what is Tim\'s job?', options: ['Teacher', 'Student', 'Chef', 'Doctor'], correctIndex: 2 },
    { question: 'What does Tim want to do one day?', options: ['Be a teacher', 'Open his own restaurant', 'Study English', 'Go to university'], correctIndex: 1 },
  ],
};
