import { Lesson } from '@/types/lesson';

export const mmaFighterCapstone: Lesson = {
  slug: 'mma-fighter-capstone',
  title: 'Fighter Capstone',
  subtitle: 'Review and use all the key MMA vocabulary from this course',
  level: 'A1-A2',
  description: 'This is the final lesson. Review the most important words and phrases from the full MMA English course — and practice using them all together in a real conversation.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fighter-capstone-hero.png',

  warmUp: {
    questions: [
      'What is the most important new word you learned in this course?',
      'If you had to describe MMA to someone who had never seen it, what would you say?',
      'What is one goal you have with your English for MMA?',
    ],
  },

  vocabulary: [
    {
      word: 'DISCIPLINE',
      partOfSpeech: 'noun',
      definition: 'A specific martial art or fighting style — like boxing, wrestling, or jiu-jitsu.',
      example: 'He is strongest in the wrestling discipline but his striking is improving.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-discipline.png',
    },
    {
      word: 'LEGACY',
      partOfSpeech: 'noun',
      definition: 'What a fighter leaves behind — their reputation and impact on the sport.',
      example: 'She has a great legacy — ten years as champion and always exciting fights.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-legacy.png',
    },
    {
      word: 'POUND FOR POUND',
      partOfSpeech: 'adjective',
      definition: 'The best fighter regardless of weight class — judged on skill, not size.',
      example: 'She is the pound-for-pound number one — the best fighter in the world right now.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pound-for-pound.png',
    },
    {
      word: 'PROMOTION',
      partOfSpeech: 'noun',
      definition: 'The company or organisation that runs MMA events.',
      example: 'She signed with the top promotion — her fights will now be seen worldwide.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-promotion.png',
    },
    {
      word: 'CONTRACT',
      partOfSpeech: 'noun',
      definition: 'A legal agreement between a fighter and a promotion — for pay and number of fights.',
      example: 'He signed a six-fight contract with the promotion.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-contract.png',
    },
    {
      word: 'RANKED',
      partOfSpeech: 'adjective',
      definition: 'Placed in an official order of best fighters in a weight class.',
      example: 'She is ranked number three in the world — a title shot is coming.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ranked.png',
    },
    {
      word: 'CAREER',
      partOfSpeech: 'noun',
      definition: 'A fighter\'s full professional life in the sport — all their fights and achievements.',
      example: 'He has had a long career — twenty-five fights over twelve years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-career.png',
    },
    {
      word: 'RETIRE',
      partOfSpeech: 'verb',
      definition: 'Stop fighting professionally and end your career.',
      example: 'She retired after the title loss — she said she had nothing left to prove.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-retire.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'MAKE A NAME FOR YOURSELF',
      definition: 'Become well-known and respected in your field.',
      example: 'She made a name for herself with three consecutive first-round knockouts.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-make-a-name-for-yourself.png',
      tag: 'phrase',
    },
    {
      phrase: 'CHASE THE BELT',
      definition: 'Work hard to get a chance to fight for the championship.',
      example: 'He has been chasing the belt for four years — always one fight away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-chase-the-belt.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO OUT ON TOP',
      definition: 'Retire while still at the peak of your career — while still winning.',
      example: 'She wanted to go out on top — one last win and then retire as champion.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-out-on-top.png',
      tag: 'phrase',
    },
    {
      phrase: 'CEMENT YOUR LEGACY',
      definition: 'Make your place in history secure with a great performance or win.',
      example: 'That championship defence cemented her legacy — she is an all-time great.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cement-your-legacy.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I have learned so much. But let me ask — who is the greatest MMA fighter of all time?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is the big [[debate:a disagreement about who is better]]. The [[pound for pound:the best regardless of weight class]] conversation always comes down to two or three names.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What makes a fighter great? Is it the [[record:their win-loss history]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Not just that. It is [[legacy:what they leave behind — their impact on the sport]]. How they fought. Who they beat. What they did for the sport. Winning the belt is one thing. Defending it many times — that [[cement your legacy:makes your place in history secure]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What about fighters who [[retire:stop fighting and end their career]] too early?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Some [[go out on top:retire while still winning]] — that is smart. Others fight too long. The best fighters know when their [[career:their full professional life in the sport]] is over.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I want to [[make a name for yourself:become well-known and respected]] in MMA English — as a fan and maybe one day as a fighter.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Then keep learning. Whether you [[chase the belt:work to fight for the championship]] or just watch and talk about it — you have the words now. Use them.',
    },
  ],

  matchingExercise: [
    { word: 'Pound for pound', definition: 'The best fighter regardless of weight class' },
    { word: 'Legacy', definition: 'What a fighter leaves behind — their impact on the sport' },
    { word: 'Promotion', definition: 'The company or organisation that runs MMA events' },
    { word: 'Ranked', definition: 'Placed in an official order of best fighters in a weight class' },
    { word: 'Career', definition: 'A fighter\'s full professional life in the sport' },
    { word: 'Discipline', definition: 'A specific martial art or fighting style' },
  ],

  fillBlankExercise: [
    { before: 'She is the', after: 'number one — the best in the world right now.', answer: 'pound-for-pound' },
    { before: 'That win', after: 'her legacy — she is an all-time great.', answer: 'cemented' },
    { before: 'He signed a six-fight', after: 'with the top promotion.', answer: 'contract' },
    { before: 'She wanted to', after: 'out on top — retire while she was still champion.', answer: 'go' },
    { before: 'She has been', after: 'the belt for four years.', answer: 'chasing' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "pound for pound" mean?',
      options: [
        'A fighter who wins by heavy punches',
        'The best fighter regardless of weight class — judged on skill, not size',
        'A fighter who has a lot of knockout power',
        'A method for calculating fight odds',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "legacy" in MMA?',
      options: [
        'The prize money a fighter earns over their career',
        'The total number of fights a fighter has had',
        'What a fighter leaves behind — their reputation and impact on the sport',
        'A fighter\'s win-loss record shown as numbers',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "go out on top" mean?',
      options: [
        'Win a fight in the first round',
        'Climb to the top of the cage after a victory',
        'Retire while still at the peak of your career — while still winning',
        'Move up to a heavier weight class at the end of your career',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "cement your legacy" mean?',
      options: [
        'Get your name on the wall of a gym',
        'Sign a long-term contract with a promotion',
        'Make your place in history secure with a great performance or win',
        'Train harder than any fighter in your weight class',
      ],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence.',
    items: [
      {
        sentence: 'She is the _____ number one — the best fighter in the world right now.',
        options: ['pound-for-pound', 'fight of the night', 'title shot'],
        correctIndex: 0,
        explanation: '"Pound-for-pound" means the best fighter regardless of weight class.',
      },
      {
        sentence: 'That championship defence _____ her legacy — she is an all-time great.',
        options: ['cut', 'cemented', 'pulled'],
        correctIndex: 1,
        explanation: '"Cemented her legacy" means she made her place in MMA history secure.',
      },
      {
        sentence: 'She wanted to _____ on top — retire while she was still champion.',
        options: ['go out', 'come back', 'gas out'],
        correctIndex: 0,
        explanation: '"Go out on top" means retire while still at the peak of your career.',
      },
      {
        sentence: 'He has been _____ the belt for four years — always one fight away.',
        options: ['holding', 'chasing', 'stealing'],
        correctIndex: 1,
        explanation: '"Chasing the belt" means working hard to get a chance to fight for the championship.',
      },
    ],
  },
};
