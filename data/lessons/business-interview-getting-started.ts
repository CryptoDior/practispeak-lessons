import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-interview-getting-started-${s}.png`;

export const businessInterviewGettingStarted: Lesson = {
  slug: 'business-interview-getting-started',
  title: 'Job Interviews: Getting Started',
  subtitle: 'B1-B2 · Job Interviews · Part 1',
  level: 'B1-B2',
  description:
    'Learn the main types of job interview questions and how to answer the first big one: "Can you tell me about yourself?"',
  heroImage: img('hero'),

  objectives: [
    'Recognise the main types of interview questions.',
    'Answer "Tell me about yourself" with a clear structure.',
    'Use key vocabulary to describe your skills and experience.',
  ],

  vocabulary: [
    { word: 'SKILLS', partOfSpeech: 'noun', definition: 'Abilities that help you do a task well.', example: 'He has strong computer skills.', imageSlug: img('skills') },
    { word: 'PUNCTUAL', partOfSpeech: 'adjective', definition: 'Always on time.', example: 'She is always punctual for work.', imageSlug: img('punctual') },
    { word: 'TEAMWORK', partOfSpeech: 'noun', definition: 'Working well with other people.', example: 'Teamwork is very important in this company.', imageSlug: img('teamwork') },
    { word: 'INTERNSHIP', partOfSpeech: 'noun', definition: 'Short-term work to gain experience, often for students.', example: 'I did an internship at a hotel last year.', imageSlug: img('internship') },
    { word: 'RELIABLE', partOfSpeech: 'adjective', definition: 'Someone you can trust to do things well.', example: 'The company is looking for someone reliable.', imageSlug: img('reliable') },
    { word: 'PROBLEM-SOLVING', partOfSpeech: 'noun', definition: 'Finding ways to fix problems.', example: 'This job needs good problem-solving skills.', imageSlug: img('problem-solving') },
    { word: 'STRENGTHS / WEAKNESSES', partOfSpeech: 'noun', definition: 'Things you are good at / things you need to improve.', example: 'One of my strengths is staying calm under pressure.', imageSlug: img('strengths') },
    { word: 'CANDIDATE', partOfSpeech: 'noun', definition: 'A person applying for a job.', example: 'There were five candidates for the position.', imageSlug: img('candidate') },
  ],

  phrasalVerbs: [
    { phrase: 'Can you tell me about yourself?', tag: 'question', definition: 'The most common first question. Talk about your background, experience and strengths.', example: '"Thanks for coming in. Can you tell me about yourself?"', inAction: 'A good answer has 4 parts: your studies or job now → your experience → your main strengths → why you want this job. Keep it under 2 minutes.', imageSlug: img('tell-me-about-yourself') },
    { phrase: 'What are your strengths?', tag: 'question', definition: 'The interviewer wants to know what you are good at.', example: '"What are your main strengths?"', imageSlug: img('strengths-question') },
    { phrase: 'Where do you see yourself in 5 years?', tag: 'question', definition: 'A question about your future goals.', example: '"Where do you see yourself in five years?"', imageSlug: img('five-years') },
    { phrase: 'Why do you want to work here?', tag: 'question', definition: 'A question about your motivation.', example: '"Why did you apply for this job?"', imageSlug: img('why-work-here') },
    { phrase: 'Tell me about a time you solved a problem.', tag: 'question', definition: 'A question about teamwork or problem-solving, with a real example.', example: '"Tell me about a time you solved a problem at work."', imageSlug: img('solved-a-problem') },
    { phrase: 'I recently finished my studies in…', tag: 'phrase', definition: 'Start your answer about yourself.', example: '"I recently finished my studies in business management."', imageSlug: img('finished-studies') },
    { phrase: 'I have experience working as a…', tag: 'phrase', definition: 'Talk about your past work.', example: '"I have experience working as a receptionist in a hotel."', imageSlug: img('experience-working') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Good morning, Tim. Thanks for coming in. Can you tell me about yourself?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Of course. I recently finished my studies in hospitality management. During my studies, I did a six-month [[internship:short-term work for experience]] at a hotel in Cape Town." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'What did you do there?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I worked at reception. I helped guests, answered calls and solved small problems, like booking mistakes. I learned a lot about [[teamwork:working well with others]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Great. And what are your main [[skills:abilities]]?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'm [[reliable:someone you can trust]] and [[punctual:always on time]] — I was never late during my internship. I also have good [[problem-solving:finding ways to fix problems]] skills." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Why do you want to work here?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Your hotel has a great reputation for service, and I want to grow in an international team. I think I'm a strong [[candidate:person applying for the job]] for this role." },
  ],

  matchingExercise: [
    { word: 'PUNCTUAL', definition: 'Always on time' },
    { word: 'RELIABLE', definition: 'Someone you can trust' },
    { word: 'INTERNSHIP', definition: 'Short-term work for experience' },
    { word: 'TEAMWORK', definition: 'Working well with others' },
    { word: 'CANDIDATE', definition: 'A person applying for a job' },
    { word: 'WEAKNESSES', definition: 'Things you need to improve' },
  ],

  fillBlankExercise: [
    { before: 'Can you tell me about', after: '?', answer: 'yourself' },
    { before: 'I recently finished my', after: 'in marketing.', answer: 'studies' },
    { before: 'I have experience', after: 'as a waiter.', answer: 'working' },
    { before: 'I did an', after: 'at a hotel last year.', answer: 'internship' },
    { before: 'She is always', after: '. She is never late.', answer: 'punctual' },
    { before: 'There were five', after: 'for the job.', answer: 'candidates' },
  ],

  multipleChoiceExercise: [
    { question: 'What is usually the first question in an interview?', options: ['Can you tell me about yourself?', 'When can you start?', 'What is your salary?', 'Do you have questions?'], correctIndex: 0 },
    { question: 'What does "reliable" mean?', options: ['Always late', 'Someone you can trust', 'Very funny', 'New to the job'], correctIndex: 1 },
    { question: '"Where do you see yourself in 5 years?" asks about…', options: ['Your past', 'Your future goals', 'Your weaknesses', 'Your address'], correctIndex: 1 },
    { question: 'What should a good "Tell me about yourself" answer include?', options: ['Your whole life story', 'Studies/job, experience, strengths and why you want the job', 'Only your hobbies', 'Your salary needs'], correctIndex: 1 },
    { question: 'In the dialogue, where did Tim do his internship?', options: ['In a bank', 'At a hotel in Cape Town', 'In a restaurant', 'In an office in London'], correctIndex: 1 },
    { question: 'Which skills does Tim mention?', options: ['Cooking and driving', 'Reliable, punctual and problem-solving', 'Design and coding', 'Sales and marketing'], correctIndex: 1 },
  ],
};
