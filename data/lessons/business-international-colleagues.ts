import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-international-colleagues-${s}.png`;

export const businessInternationalColleagues: Lesson = {
  slug: 'business-international-colleagues',
  title: 'Talking with International Colleagues',
  subtitle: 'B1-B2 · Communication & Culture · Lesson 3',
  level: 'B1-B2',
  description:
    'Working with people from different countries? Learn how to keep your English simple and clear, check understanding, and avoid misunderstandings.',
  heroImage: img('hero'),

  objectives: [
    'Keep your English clear and simple for international teams.',
    'Check understanding and ask for examples.',
    'Rephrase ideas when people don\'t understand.',
  ],

  vocabulary: [
    { word: 'CLARIFY', partOfSpeech: 'verb', definition: 'To make something easier to understand.', example: 'Could you clarify what you meant by "urgent"?', imageSlug: img('clarify') },
    { word: 'COLLEAGUE', partOfSpeech: 'noun', definition: 'A person you work with.', example: 'I have colleagues from many different countries.', imageSlug: img('colleague') },
    { word: 'ACCENT', partOfSpeech: 'noun', definition: 'The way someone pronounces words, often linked to where they are from.', example: 'His Scottish accent was hard to understand at first.', imageSlug: img('accent') },
    { word: 'MISUNDERSTANDING', partOfSpeech: 'noun', definition: "When people don't understand each other correctly.", example: 'A small misunderstanding caused a big problem.', imageSlug: img('misunderstanding') },
    { word: 'SIMPLIFY', partOfSpeech: 'verb', definition: 'To make something easier to say or explain.', example: "Let's simplify this presentation so it's easier to follow.", imageSlug: img('simplify') },
  ],

  phrasalVerbs: [
    { phrase: 'Let me explain that another way.', tag: 'phrase', definition: 'Rephrase something more clearly.', example: '"Let me explain that another way. We need it by Friday, not next week."', imageSlug: img('another-way') },
    { phrase: 'Do you mean…?', tag: 'phrase', definition: 'Confirm your understanding politely.', example: '"Do you mean the Berlin office or the Munich office?"', imageSlug: img('do-you-mean') },
    { phrase: 'Just to make sure we understand each other…', tag: 'phrase', definition: 'Check that everyone has the same understanding.', example: '"Just to make sure we understand each other, the deadline is 5 p.m. your time?"', inAction: 'With international teams, always confirm times AND time zones. "5 p.m." can mean three different times!', imageSlug: img('make-sure') },
    { phrase: 'Sorry, could you say that again more slowly?', tag: 'phrase', definition: 'Ask for repetition politely.', example: '"Sorry, the line is bad. Could you say that again more slowly?"', imageSlug: img('more-slowly') },
    { phrase: 'Could you give an example?', tag: 'phrase', definition: 'Ask for clarification with an example.', example: '"When you say \'flexible\', could you give an example?"', imageSlug: img('give-an-example') },
    { phrase: "Let's keep it simple.", tag: 'phrase', definition: 'Encourage clear and direct English.', example: '"Let\'s keep it simple: one slide per idea."', imageSlug: img('keep-it-simple') },
    { phrase: "I think we're saying the same thing.", tag: 'phrase', definition: 'Show that you actually agree.', example: '"Ah, I think we\'re saying the same thing in different words."', imageSlug: img('same-thing') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Hi Tim! For the Madrid project, we need the files ASAP, but it\'s not super urgent.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Sorry, could you [[clarify:make easier to understand]] that? Do you mean today, or this week?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Ah, let me explain that another way. We need them by Friday.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Just to make sure we understand each other: Friday 5 p.m. Madrid time, or Cape Town time?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Madrid time. Sorry for the [[misunderstanding:not understanding each other correctly]]. I speak fast with my Spanish [[accent:way of pronouncing words]]!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No problem at all. Also, you said the design should be 'clean'. Could you give an example?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Lots of white space, only two colours, and short titles.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Oh, that's what we planned too. I think we're saying the same thing. Let's [[simplify:make easier]] the brief and keep it simple." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Perfect. Thanks for explaining, [[colleague:people I work with]]s!' },
  ],

  matchingExercise: [
    { word: 'CLARIFY', definition: 'To make something easier to understand' },
    { word: 'ACCENT', definition: 'The way someone pronounces words' },
    { word: 'MISUNDERSTANDING', definition: "When people don't understand each other" },
    { word: 'SIMPLIFY', definition: 'To make something easier' },
    { word: 'COLLEAGUE', definition: 'A person you work with' },
    { word: 'DO YOU MEAN…?', definition: 'Check your understanding politely' },
  ],

  fillBlankExercise: [
    { before: 'Let me explain that another', after: '.', answer: 'way' },
    { before: 'Do you', after: 'the Berlin office?', answer: 'mean' },
    { before: 'Could you give an', after: '?', answer: 'example' },
    { before: "Let's keep it", after: '.', answer: 'simple' },
    { before: 'Just to make', after: 'we understand each other…', answer: 'sure' },
    { before: 'A small', after: 'caused a big problem.', answer: 'misunderstanding' },
  ],

  multipleChoiceExercise: [
    { question: 'Someone uses a word you don\'t understand. What do you ask?', options: ['Could you give an example?', 'Whatever.', 'Talk to you soon.', 'Go ahead.'], correctIndex: 0 },
    { question: 'What does "simplify" mean?', options: ['Make something more difficult', 'Make something easier', 'Make something longer', 'Delete something'], correctIndex: 1 },
    { question: 'Why is it important to confirm time zones?', options: ['It is polite', '"5 p.m." can mean different times in different countries', 'It is the law', 'It makes emails shorter'], correctIndex: 1 },
    { question: 'Which phrase shows you agree, after a confusion?', options: ["I think we're saying the same thing.", "That's wrong.", "I'm afraid I don't agree.", 'Could you repeat that?'], correctIndex: 0 },
    { question: 'In the dialogue, when does Maria need the files?', options: ['Today', 'Friday 5 p.m. Madrid time', 'Next week', 'Monday'], correctIndex: 1 },
    { question: 'What does "clean design" mean for Maria?', options: ['Lots of colours', 'White space, two colours, short titles', 'Many pictures', 'Long text'], correctIndex: 1 },
  ],
};
