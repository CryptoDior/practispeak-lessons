import { Lesson } from '@/types/lesson';

export const businessDescribingDailyRoutines: Lesson = {
  slug: 'business-describing-daily-routines',
  title: 'Describing Daily Routines at Work',
  subtitle: 'Series 1 · Workplace Basics · Lesson 4',
  level: 'A1-A2',
  description:
    'Learn how to talk about your daily work routine. Describe when you start and finish, and what you do throughout the day.',
  heroImage: '/images/business-describing-daily-routines-hero.png',

  objectives: [
    'Talk about the times you start and finish work.',
    'Describe simple daily activities in the workplace.',
    'Ask colleagues about their daily routines.',
  ],

  vocabulary: [
    {
      word: 'START',
      partOfSpeech: 'verb',
      definition: 'To begin something.',
      example: 'I start work at 8 o\'clock.',
      imageSlug: '/images/business-describing-daily-routines-start.png',
    },
    {
      word: 'FINISH',
      partOfSpeech: 'verb',
      definition: 'To stop doing something; to end.',
      example: 'I finish work at 5 o\'clock.',
      imageSlug: '/images/business-describing-daily-routines-finish.png',
    },
    {
      word: 'CHECK EMAILS',
      partOfSpeech: 'phrase',
      definition: 'To read and answer messages on the computer.',
      example: 'He checks emails after lunch.',
      imageSlug: '/images/business-describing-daily-routines-check-emails.png',
    },
    {
      word: 'ATTEND MEETINGS',
      partOfSpeech: 'phrase',
      definition: 'To go to meetings and take part in them.',
      example: 'She attends meetings with her manager.',
      imageSlug: '/images/business-describing-daily-routines-attend-meetings.png',
    },
    {
      word: 'MAKE CALLS',
      partOfSpeech: 'phrase',
      definition: 'To use the phone to speak to people.',
      example: 'They make calls in the afternoon.',
      imageSlug: '/images/business-describing-daily-routines-make-calls.png',
    },
    {
      word: 'LUNCH BREAK',
      partOfSpeech: 'noun',
      definition: 'Time in the middle of the day to eat and rest.',
      example: 'Our lunch break is one hour long.',
      imageSlug: '/images/business-describing-daily-routines-lunch-break.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'I start work at [time].',
      tag: 'phrase',
      definition: 'Use this to say when your work begins.',
      example: '"I start work at 8:00 a.m." / "I start work at 9 o\'clock."',
      imageSlug: '/images/business-describing-daily-routines-i-start-work-at.png',
    },
    {
      phrase: 'I finish work at [time].',
      tag: 'phrase',
      definition: 'Use this to say when your work ends.',
      example: '"I finish work at 5:00 p.m." / "I finish work at 5:30."',
      imageSlug: '/images/business-describing-daily-routines-i-finish-work-at.png',
    },
    {
      phrase: 'I usually [activity] in the morning.',
      tag: 'phrase',
      definition: 'Use this to talk about your normal morning routine at work.',
      example: '"I usually check emails in the morning." / "I usually attend meetings in the morning."',
      imageSlug: '/images/business-describing-daily-routines-i-usually-in-the-morning.png',
    },
    {
      phrase: 'After lunch, I [activity].',
      tag: 'phrase',
      definition: 'Use this to talk about what you normally do in the afternoon.',
      example: '"After lunch, I attend meetings." / "After lunch, I make calls to clients."',
      imageSlug: '/images/business-describing-daily-routines-after-lunch.png',
    },
    {
      phrase: 'At the end of the day, I [activity].',
      tag: 'phrase',
      definition: 'Use this to say what you do before leaving work.',
      example: '"At the end of the day, I make calls." / "At the end of the day, I write a short report."',
      imageSlug: '/images/business-describing-daily-routines-at-the-end-of-the-day.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Hi Tom, what time do you [[start:to begin something]] work?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'I start work at 8 o\'clock. How about you?',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'I start at 9. I usually [[check emails:to read and answer messages on the computer]] in the morning.',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'Me too. After that, I [[attend meetings:to go to meetings and take part in them]].',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Yes, I often have meetings before lunch.',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'Speaking of lunch, when is your [[lunch break:time in the middle of the day to eat and rest]]?',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'At 1 p.m. After lunch, I [[make calls:to use the phone to speak to people]] to clients.',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: "That's the same for me. At the end of the day, I [[finish:to stop doing something; to end]] by writing a short report.",
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Sounds busy! I finish work at 5:30.',
    },
  ],

  matchingExercise: [
    { word: 'START', definition: 'To begin something' },
    { word: 'FINISH', definition: 'To stop doing something; to end' },
    { word: 'CHECK EMAILS', definition: 'To read and answer messages on the computer' },
    { word: 'ATTEND MEETINGS', definition: 'To go to meetings and take part in them' },
    { word: 'MAKE CALLS', definition: 'To use the phone to speak to people' },
    { word: 'LUNCH BREAK', definition: 'Time in the middle of the day to eat and rest' },
    { word: 'I USUALLY... IN THE MORNING', definition: 'A phrase to describe your normal morning routine' },
    { word: 'AFTER LUNCH, I...', definition: 'A phrase to describe your afternoon activities' },
  ],

  fillBlankExercise: [
    {
      before: 'Our team',
      after: 'every Monday morning.',
      answer: 'attend meetings',
    },
    {
      before: 'We have a one-hour',
      after: 'at 12:30.',
      answer: 'lunch break',
    },
    {
      before: 'They',
      after: 'to clients after lunch.',
      answer: 'make calls',
    },
    {
      before: 'I',
      after: 'work at 8 o\'clock every morning.',
      answer: 'start',
    },
    {
      before: 'I usually',
      after: 'before I go home.',
      answer: 'check emails',
    },
    {
      before: 'She',
      after: 'her report in the afternoon.',
      answer: 'finishes',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which phrase do you use to say when your work begins?',
      options: [
        '"After lunch, I..."',
        '"I finish work at..."',
        '"I start work at..."',
        '"At the end of the day, I..."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "attend meetings" mean?',
      options: [
        'To cancel a meeting.',
        'To go to meetings and take part in them.',
        'To write a report after a meeting.',
        'To call someone during a meeting.',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, what does Cleo do in the morning?',
      options: [
        'She makes calls to clients.',
        'She writes a short report.',
        'She checks emails.',
        'She attends meetings.',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does Tom do at the end of the day?',
      options: [
        'He checks emails.',
        'He writes a short report.',
        'He makes calls to clients.',
        'He has his lunch break.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which phrase is correct for talking about your afternoon?',
      options: [
        '"I usually meetings in the afternoon."',
        '"At morning, I attend meetings."',
        '"After lunch, I make calls to clients."',
        '"I finish in the morning."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "lunch break"?',
      options: [
        'A meeting before lunch.',
        'A phone call during lunch.',
        'Time in the middle of the day to eat and rest.',
        'The end of the working day.',
      ],
      correctIndex: 2,
    },
  ],
};
