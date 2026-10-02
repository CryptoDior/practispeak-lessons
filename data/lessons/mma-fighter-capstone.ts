import { Lesson } from '@/types/lesson';

export const mmaFighterCapstone: Lesson = {
  slug: 'mma-fighter-capstone',
  title: 'Fighter Capstone',
  subtitle: 'Review the most important MMA words from this course',
  level: 'A1-A2',
  description: 'This is the last lesson. Review the most important MMA words and use them in a real conversation.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fighter-capstone-hero.png',

  warmUp: {
    questions: [
      'What is your favourite new word from this course?',
      'How do you explain MMA to a friend?',
      'What do you want to do next with your English?',
    ],
  },

  vocabulary: [
    {
      word: 'DISCIPLINE',
      partOfSpeech: 'noun',
      definition: 'One type of fighting, for example boxing, wrestling, or jiu-jitsu.',
      example: 'Wrestling is his best discipline. His punching is getting better.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-discipline.png',
    },
    {
      word: 'LEGACY',
      partOfSpeech: 'noun',
      definition: 'What people remember about a fighter after he or she stops fighting.',
      example: 'She has a great legacy. She was champion for ten years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-legacy.png',
    },
    {
      word: 'POUND FOR POUND',
      partOfSpeech: 'adjective',
      definition: 'The best fighter in all weight classes. Size is not important, only skill.',
      example: 'She is the pound-for-pound number one. She is the best fighter in the world now.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pound-for-pound.png',
    },
    {
      word: 'PROMOTION',
      partOfSpeech: 'noun',
      definition: 'The company that makes MMA events.',
      example: 'She signed with the top promotion. Now people around the world can watch her fights.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-promotion.png',
    },
    {
      word: 'CONTRACT',
      partOfSpeech: 'noun',
      definition: 'A paper a fighter signs with a promotion. It says the money and the number of fights.',
      example: 'He signed a six-fight contract with the promotion.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-contract.png',
    },
    {
      word: 'RANKED',
      partOfSpeech: 'adjective',
      definition: 'In a list of the best fighters, with a number.',
      example: 'She is ranked number three in the world. Soon she can fight for the belt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ranked.png',
    },
    {
      word: 'CAREER',
      partOfSpeech: 'noun',
      definition: 'All the years a fighter fights as a professional.',
      example: 'He has a long career. He had twenty-five fights in twelve years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-career.png',
    },
    {
      word: 'RETIRE',
      partOfSpeech: 'verb',
      definition: 'Stop fighting forever.',
      example: 'She lost the belt, and then she retired.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-retire.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'MAKE A NAME FOR YOURSELF',
      definition: 'Become famous, and people respect you.',
      example: 'She made a name for herself with three fast knockouts.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-make-a-name-for-yourself.png',
      tag: 'phrase',
    },
    {
      phrase: 'CHASE THE BELT',
      definition: 'Work hard to get a fight for the belt.',
      example: 'He has been chasing the belt for four years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-chase-the-belt.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO OUT ON TOP',
      definition: 'Stop fighting forever while you are still winning.',
      example: 'She wanted to go out on top. One last win, and then she stopped as champion.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-out-on-top.png',
      tag: 'phrase',
    },
    {
      phrase: 'CEMENT YOUR LEGACY',
      definition: 'Make sure people will always remember you, with a big win.',
      example: 'She won the belt fight again. That cemented her legacy. She is one of the best ever.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cement-your-legacy.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I have learned so much. But tell me, who is the greatest MMA fighter of all time?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is the big [[debate:people do not agree about who is better]]. When people talk about [[pound for pound:the best in all weight classes]], they always say two or three names.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What makes a fighter great? Is it the [[record:their wins and losses]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Not only that. It is their [[legacy:what people remember about them]]. How they fought. Who they beat. Winning the belt is good. But winning it again and again [[cements your legacy:makes people always remember you]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What about fighters who [[retire:stop fighting forever]] too early?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Some [[go out on top:retire while still winning]]. That is smart. Others fight too long. The best fighters know when their [[career:all their years of fighting]] is over.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I want to [[make a name for myself:become famous]] in MMA, as a fan or maybe one day as a fighter.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Then keep learning. Maybe you will [[chase the belt:work hard to fight for the belt]], or maybe you will just watch. You have the words now. Use them.',
    },
  ],

  matchingExercise: [
    { word: 'Pound for pound', definition: 'The best fighter in all weight classes' },
    { word: 'Legacy', definition: 'What people remember about a fighter' },
    { word: 'Promotion', definition: 'The company that makes MMA events' },
    { word: 'Ranked', definition: 'In a list of the best fighters, with a number' },
    { word: 'Career', definition: 'All the years a fighter fights' },
    { word: 'Discipline', definition: 'One type of fighting, like boxing' },
  ],

  fillBlankExercise: [
    { before: 'She is the', after: 'number one. She is the best in the world now.', answer: 'pound-for-pound' },
    { before: 'That win', after: 'her legacy. She is one of the best ever.', answer: 'cemented' },
    { before: 'He signed a six-fight', after: 'with the top promotion.', answer: 'contract' },
    { before: 'She wanted to', after: 'out on top and stop while she was still champion.', answer: 'go' },
    { before: 'She has been', after: 'the belt for four years.', answer: 'chasing' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "pound for pound" mean?',
      options: [
        'A fighter who wins by heavy punches',
        'The best fighter in all weight classes, big or small',
        'A fighter who has a lot of knockout power',
        'A way to guess the winner',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "legacy" in MMA?',
      options: [
        'All the money a fighter gets',
        'The total number of fights a fighter has had',
        'What people remember about a fighter after he or she stops fighting',
        'A fighter\'s wins and losses',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "go out on top" mean?',
      options: [
        'Win a fight in the first round',
        'Climb on the cage after a win',
        'Stop fighting forever while you are still winning',
        'Move to a heavier weight class',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "cement your legacy" mean?',
      options: [
        'Get your name on the wall of a gym',
        'Sign a long contract',
        'Make sure people will always remember you, with a big win',
        'Train harder than other fighters',
      ],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence.',
    items: [
      {
        sentence: 'She is the _____ number one. She is the best fighter in the world now.',
        options: ['pound-for-pound', 'fight of the night', 'title shot'],
        correctIndex: 0,
        explanation: '"Pound-for-pound" means the best fighter in all weight classes.',
      },
      {
        sentence: 'That big win _____ her legacy. She is one of the best ever.',
        options: ['cut', 'cemented', 'pulled'],
        correctIndex: 1,
        explanation: '"Cemented her legacy" means people will always remember her.',
      },
      {
        sentence: 'She wanted to _____ on top and stop while she was still champion.',
        options: ['go out', 'come back', 'gas out'],
        correctIndex: 0,
        explanation: '"Go out on top" means stop fighting while you are still winning.',
      },
      {
        sentence: 'He has been _____ the belt for four years.',
        options: ['holding', 'chasing', 'stealing'],
        correctIndex: 1,
        explanation: '"Chasing the belt" means working hard to get a fight for the belt.',
      },
    ],
  },
};
