import { Lesson } from '@/types/lesson';

export const businessIntroducingYourselfColleagues: Lesson = {
  slug: 'business-introducing-yourself-colleagues',
  title: 'Introducing Yourself & Colleagues',
  subtitle: 'Series 1 · Workplace Basics · Lesson 1',
  level: 'A1-A2',
  description:
    'Learn how to introduce yourself and your colleagues at work. Master the key phrases for meeting people professionally for the first time — name, job title, department, and more.',
  heroImage: '/images/business-introducing-yourself-colleagues-hero.png',

  objectives: [
    'Introduce yourself (name, job title, company, department).',
    'Introduce a colleague to someone new.',
    'Ask for and give basic personal and professional information.',
  ],

  vocabulary: [
    {
      word: 'JOB',
      partOfSpeech: 'noun',
      definition: 'Work that a person does to earn money.',
      example: 'I am looking for a new job in the city.',
      imageSlug: '/images/business-introducing-yourself-job.png',
    },
    {
      word: 'COMPANY',
      partOfSpeech: 'noun',
      definition: 'A business where people work together.',
      example: 'My brother started his own company last year.',
      imageSlug: '/images/business-introducing-yourself-company.png',
    },
    {
      word: 'COLLEAGUE',
      partOfSpeech: 'noun',
      definition: 'A person you work with.',
      example: 'She is a good colleague and always helps me.',
      imageSlug: '/images/business-introducing-yourself-colleague.png',
    },
    {
      word: 'DEPARTMENT',
      partOfSpeech: 'noun',
      definition: 'A part of a company that does one type of work.',
      example: 'She works in the sales department.',
      imageSlug: '/images/business-introducing-yourself-department.png',
    },
    {
      word: 'JOB TITLE',
      partOfSpeech: 'noun',
      definition: 'The name of a person\'s job.',
      example: 'What is your job title in this company?',
      imageSlug: '/images/business-introducing-yourself-job-title.png',
    },
    {
      word: 'SALES MANAGER',
      partOfSpeech: 'noun',
      definition: 'A person who is the boss of the sales team.',
      example: 'She is the new sales manager in our company.',
      imageSlug: '/images/business-introducing-yourself-sales-manager.png',
    },
    {
      word: 'FINANCE DEPARTMENT',
      partOfSpeech: 'noun',
      definition: 'The part of a company that works with money.',
      example: 'Our finance department is very busy at the end of the year.',
      imageSlug: '/images/business-introducing-yourself-finance-department.png',
    },
    {
      word: 'ENGINEER',
      partOfSpeech: 'noun',
      definition: 'A person who designs and builds machines or systems.',
      example: 'Our company has many good engineers.',
      imageSlug: '/images/business-introducing-yourself-engineer.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'Hello, my name is...',
      tag: 'phrase',
      definition: 'Use this to say your name for the first time when meeting someone.',
      example: '"Hello, my name is Anna."',
      inAction:
        'Use your first name in friendly situations. Use your full name in more formal situations.',
      imageSlug: '/images/business-introducing-yourself-hello-my-name-is.png',
    },
    {
      phrase: 'I am a / an [job title].',
      tag: 'phrase',
      definition: 'Use this to say what job you do in the company.',
      example: '"I am a sales manager." / "I am an engineer."',
      inAction:
        'Use "a" before most job titles. Use "an" if the job title starts with a vowel sound — e.g. "an accountant", "an engineer".',
      imageSlug: '/images/business-introducing-yourself-i-am-a.png',
    },
    {
      phrase: 'This is my colleague, [name].',
      tag: 'phrase',
      definition: 'Use this to introduce someone who works with you at the same company.',
      example: '"This is my colleague, Tom." / "This is my colleague, Mrs. Brown."',
      inAction:
        'You can use their first name in friendly situations, or their title and last name (Mr, Mrs, Miss) in formal ones.',
      imageSlug: '/images/business-introducing-yourself-this-is-my-colleague.png',
    },
    {
      phrase: 'Nice to meet you. / Pleased to meet you.',
      tag: 'phrase',
      definition: 'Say this after someone tells you their name. It shows you are happy to meet them.',
      example:
        'A: "Hello, my name is Tom." B: "Nice to meet you, Tom." A: "Nice to meet you too."',
      imageSlug: '/images/business-introducing-yourself-nice-to-meet-you.png',
    },
    {
      phrase: 'I work in the [department].',
      tag: 'phrase',
      definition: 'Use this to say which part of the company you belong to.',
      example: '"I work in the finance department."',
      inAction: 'Always say "in the" before the department name.',
      imageSlug: '/images/business-introducing-yourself-i-work-in-the.png',
    },
    {
      phrase: 'Where are you from?',
      tag: 'phrase',
      definition: 'Use this to ask about a person\'s country or city.',
      example: '"Where are you from?" → "I am from France."',
      imageSlug: '/images/business-introducing-yourself-where-are-you-from.png',
    },
    {
      phrase: 'What do you do?',
      tag: 'phrase',
      definition: 'Use this to ask about someone\'s job.',
      example: '"What do you do?" → "I am an engineer."',
      inAction: 'Answer with your job title — not the name of your company.',
      imageSlug: '/images/business-introducing-yourself-what-do-you-do.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Hello, my name is Cleo. I am a [[sales manager:a person who is the boss of the sales team]]. I work at Vygon.',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'Nice to meet you, Cleo. I am Tom. I work in the [[finance department:the part of a company that works with money]].',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Nice to meet you too, Tom.',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Tom, this is my [[colleague:a person you work with]], Maria. She is an [[engineer:a person who designs and builds machines or systems]].',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'Pleased to meet you, Maria.',
    },
    {
      speaker: 'Maria',
      speakerColor: 'orange',
      text: 'Pleased to meet you too, Tom.',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'Where are you from, Maria?',
    },
    {
      speaker: 'Maria',
      speakerColor: 'orange',
      text: 'I am from Spain. Where are you from?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'I am from South Africa.',
    },
    {
      speaker: 'Maria',
      speakerColor: 'orange',
      text: 'What do you do, Tom?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'I work in the finance department. My [[job title:the name of a person\'s job]] is Accountant.',
    },
    {
      speaker: 'Maria',
      speakerColor: 'orange',
      text: 'Awesome! Great meeting you, Tom. See you around.',
    },
  ],

  matchingExercise: [
    { word: 'JOB', definition: 'Work that a person does to earn money' },
    { word: 'COMPANY', definition: 'A business where people work together' },
    { word: 'COLLEAGUE', definition: 'A person you work with' },
    { word: 'DEPARTMENT', definition: 'A part of a company that does one type of work' },
    { word: 'JOB TITLE', definition: 'The name of a person\'s job' },
    { word: 'SALES MANAGER', definition: 'The boss of the sales team' },
    { word: 'FINANCE DEPARTMENT', definition: 'The part of a company that works with money' },
    { word: 'ENGINEER', definition: 'A person who designs and builds machines or systems' },
  ],

  fillBlankExercise: [
    {
      before: 'The',
      after: 'checks salaries and company costs every month.',
      answer: 'finance department',
    },
    {
      before: 'My friend is an',
      after: '— he works with machines and designs new products.',
      answer: 'engineer',
    },
    {
      before: 'I like my new',
      after: 'because I learn something new every day.',
      answer: 'job',
    },
    {
      before: 'Our',
      after: 'is very large and has offices in five countries.',
      answer: 'company',
    },
    {
      before: 'Anna is my',
      after: '— we work on the same project together.',
      answer: 'colleague',
    },
    {
      before: 'The HR',
      after: 'helps new workers with training and documents.',
      answer: 'department',
    },
    {
      before: 'Her',
      after: 'is "Marketing Specialist" on her work ID card.',
      answer: 'job title',
    },
    {
      before: 'The',
      after: 'leads the sales team and talks to important clients.',
      answer: 'sales manager',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "colleague" mean?',
      options: [
        'A person from the same country.',
        'A person you work with.',
        'A person who is your boss.',
        'A person you study with.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is correct?',
      options: [
        'I am a engineer.',
        'I am an engineer.',
        'I am the engineer.',
        'I am engineer.',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, what is Tom\'s job title?',
      options: [
        'Sales Manager',
        'Engineer',
        'Accountant',
        'Finance Manager',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which phrase do you use to introduce a colleague?',
      options: [
        '"My colleague is..."',
        '"This is my colleague, [name]."',
        '"Meet my colleague."',
        '"I introduce my colleague."',
      ],
      correctIndex: 1,
    },
    {
      question: 'How do you ask about someone\'s job in a professional context?',
      options: [
        '"What is your work?"',
        '"What are you?"',
        '"What do you do?"',
        '"Which job you have?"',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which phrase do you use when someone tells you their name for the first time?',
      options: [
        '"Good to see you."',
        '"Nice to meet you."',
        '"How are you?"',
        '"Welcome."',
      ],
      correctIndex: 1,
    },
  ],
};
