import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-interview-skills-strengths-${s}.png`;

export const businessInterviewSkillsStrengths: Lesson = {
  slug: 'business-interview-skills-strengths',
  title: 'Job Interviews: Talking About Your Strengths',
  subtitle: 'B1-B2 · Job Interviews · Part 2',
  level: 'B1-B2',
  description:
    'Learn how to answer "What are your strengths?" with confidence: choose 1–3 strengths, give real examples and connect them to the job.',
  heroImage: img('hero'),

  objectives: [
    'Describe your strengths with useful adjectives.',
    'Support each strength with a real example.',
    'Match your skills to the job you are applying for.',
  ],

  vocabulary: [
    { word: 'CONFIDENT', partOfSpeech: 'adjective', definition: 'Sure that you can do things well.', example: 'You need to be confident when talking to customers.', imageSlug: img('confident') },
    { word: 'COMMUNICATION SKILLS', partOfSpeech: 'noun', definition: 'How well you speak, write and listen to people.', example: 'Most companies look for good communication skills.', imageSlug: img('communication-skills') },
    { word: 'WORK UNDER PRESSURE', partOfSpeech: 'phrase', definition: 'To do your job well when things are busy or stressful.', example: 'Many jobs need people who can work under pressure.', imageSlug: img('under-pressure') },
    { word: 'ORGANIZED', partOfSpeech: 'adjective', definition: 'Good at planning and keeping things in order.', example: 'An organized person can handle many tasks.', imageSlug: img('organized') },
    { word: 'HARDWORKING', partOfSpeech: 'adjective', definition: 'Working a lot and trying hard.', example: 'Hardworking people often get noticed by their managers.', imageSlug: img('hardworking') },
    { word: 'FLEXIBLE', partOfSpeech: 'adjective', definition: 'Able to change or adapt easily.', example: 'Flexible workers can adjust to new schedules quickly.', imageSlug: img('flexible') },
    { word: 'TECH-SAVVY', partOfSpeech: 'adjective', definition: 'Good at using computers and technology.', example: 'They hired her because she is very tech-savvy.', imageSlug: img('tech-savvy') },
  ],

  phrasalVerbs: [
    { phrase: 'One of my strengths is…', tag: 'phrase', definition: 'Start your answer by naming a strength.', example: '"One of my strengths is staying calm under pressure."', imageSlug: img('one-of-my-strengths') },
    { phrase: "I'm good at…", tag: 'phrase', definition: 'A simple way to name something you do well.', example: '"I\'m good at organizing tasks and setting daily goals."', imageSlug: img('im-good-at') },
    { phrase: 'I have strong … skills.', tag: 'phrase', definition: 'Name a type of skill.', example: '"I have strong communication skills."', imageSlug: img('strong-skills') },
    { phrase: "I'm confident in my ability to…", tag: 'phrase', definition: 'Show confidence about a skill.', example: '"I\'m confident in my ability to learn new software quickly."', imageSlug: img('confident-in-my-ability') },
    { phrase: 'For example, in my last job I…', tag: 'phrase', definition: 'Give a real example to support your strength.', example: '"For example, in my last job I trained three new staff members."', inAction: 'Strength + example + link to the job. A strength without an example is just a word!', imageSlug: img('for-example') },
    { phrase: 'This helps me when I work with…', tag: 'phrase', definition: 'Connect your strength to the job.', example: '"This helps me when I work with international clients."', imageSlug: img('this-helps-me') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'So, Maria, what are your strengths?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "One of my strengths is that I'm very [[organized:good at planning]]. I use a digital planner for every project." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Can you give me an example?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'For example, in my last job I managed the schedules for twelve people across three time zones. We never missed a deadline.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Impressive. Anything else?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I have strong [[communication skills:how well you speak and listen]]. I speak English and Spanish, and I'm [[confident:sure I can do it well]] presenting to clients." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'This role can be stressful at the end of the month. How do you [[work under pressure:do well when it\'s busy]]?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I stay calm and make a list of priorities. I'm also [[flexible:able to adapt easily]] — I can change my hours when the team needs me." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's exactly what we need. You sound [[hardworking:trying very hard]] and [[tech-savvy:good with technology]] too." },
  ],

  matchingExercise: [
    { word: 'CONFIDENT', definition: 'Sure you can do things well' },
    { word: 'ORGANIZED', definition: 'Good at planning and order' },
    { word: 'HARDWORKING', definition: 'Working a lot and trying hard' },
    { word: 'FLEXIBLE', definition: 'Able to adapt easily' },
    { word: 'TECH-SAVVY', definition: 'Good with technology' },
    { word: 'WORK UNDER PRESSURE', definition: 'Do well when it is busy or stressful' },
  ],

  fillBlankExercise: [
    { before: 'One of my', after: 'is staying calm.', answer: 'strengths' },
    { before: "I'm good", after: 'organizing tasks.', answer: 'at' },
    { before: 'I have strong communication', after: '.', answer: 'skills' },
    { before: "I'm confident in my", after: 'to learn quickly.', answer: 'ability' },
    { before: 'For', after: ', in my last job I trained new staff.', answer: 'example' },
    { before: 'I can work under', after: 'at the end of the month.', answer: 'pressure' },
  ],

  multipleChoiceExercise: [
    { question: 'What makes a strong answer to "What are your strengths?"', options: ['A long list of 10 strengths', '1–3 strengths with real examples linked to the job', 'Saying "I have no weaknesses"', 'Talking about your hobbies'], correctIndex: 1 },
    { question: 'What does "tech-savvy" mean?', options: ['Good with technology', 'Very tired', 'Good at sport', 'New to a job'], correctIndex: 0 },
    { question: 'What does "flexible" mean?', options: ['Very strong', 'Able to adapt easily', 'Always late', 'Very quiet'], correctIndex: 1 },
    { question: 'Which phrase gives an example?', options: ['For example, in my last job I…', 'One of my strengths is…', 'Where do you see yourself?', 'Can you tell me about yourself?'], correctIndex: 0 },
    { question: 'In the dialogue, how many people did Maria schedule in her last job?', options: ['Three', 'Five', 'Twelve', 'Twenty'], correctIndex: 2 },
    { question: 'What does Maria do under pressure?', options: ['She leaves early', 'She stays calm and makes a priority list', 'She asks for help immediately', 'She works alone'], correctIndex: 1 },
  ],
};
