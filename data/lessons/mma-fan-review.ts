import { Lesson } from '@/types/lesson';

export const mmaFanReview: Lesson = {
  slug: 'mma-fan-review',
  title: 'Fan Review',
  subtitle: 'Learn how to give your opinion about a fight',
  level: 'A1-A2',
  description: 'After every event, fans talk about the fights. Learn how to say what you think about an MMA event in clear, simple English.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fan-review-hero.png',

  warmUp: {
    questions: [
      'After you watch a fight, what do you usually talk about first?',
      'What is a great fight for you?',
      'Did you ever watch a boring fight?',
    ],
  },

  vocabulary: [
    {
      word: 'RATING',
      partOfSpeech: 'noun',
      definition: 'A score you give a fight, for example 7 out of 10.',
      example: 'I give this event a 9 out of 10. The main event was perfect.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rating.png',
    },
    {
      word: 'FIGHT OF THE NIGHT',
      partOfSpeech: 'noun',
      definition: 'The most exciting fight of the night.',
      example: 'The co-main event was the fight of the night. It had three great rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fight-of-the-night.png',
    },
    {
      word: 'PERFORMANCE BONUS',
      partOfSpeech: 'noun',
      definition: 'Extra money for the best knockout, submission, or fight of the night.',
      example: 'She got a performance bonus for the best submission of the night.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-performance-bonus.png',
    },
    {
      word: 'ENTERTAINING',
      partOfSpeech: 'adjective',
      definition: 'Fun and exciting to watch.',
      example: 'It was one of the most entertaining events of the year.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-entertaining.png',
    },
    {
      word: 'DISAPPOINTING',
      partOfSpeech: 'adjective',
      definition: 'Not as good as you hoped.',
      example: 'The main event was disappointing. It was slow and boring.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-disappointing.png',
    },
    {
      word: 'ONE-SIDED',
      partOfSpeech: 'adjective',
      definition: 'When one fighter is much better than the other. It is not a close fight.',
      example: 'It was one-sided. She won every round easily.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-one-sided.png',
    },
    {
      word: 'REMATCH',
      partOfSpeech: 'noun',
      definition: 'A second fight between the same two fighters.',
      example: 'The fight was very close. I want to see a rematch soon.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fan-rematch.png',
    },
    {
      word: 'WORTH WATCHING',
      partOfSpeech: 'adjective',
      definition: 'Good. You should watch it.',
      example: 'The whole card is worth watching. Even the first fights were great.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-worth-watching.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'LIVE UP TO THE HYPE',
      definition: 'Be as good as people hoped.',
      example: 'The main event lived up to the hype. It was one of the best fights I have seen.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-live-up-to-the-hype.png',
      tag: 'phrase',
    },
    {
      phrase: 'STEAL THE SHOW',
      definition: 'Be the best part of the event, when nobody thought it would be.',
      example: 'The early fight stole the show. It was better than the main event.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-steal-the-show.png',
      tag: 'phrase',
    },
    {
      phrase: 'LEAVE IT ALL IN THE CAGE',
      definition: 'Give everything you have in a fight.',
      example: 'Both fighters left it all in the cage. That is why it was so exciting.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-leave-it-all-in-the-cage.png',
      tag: 'phrase',
    },
    {
      phrase: 'PUT ON A SHOW',
      definition: 'Fight in a very exciting way for the fans.',
      example: 'She put on a show. The fans stood up and cheered the whole fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-put-on-a-show.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, what did you think of the whole event? What is your [[rating:a score you give a fight out of 10]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'I give it an 8 out of 10. The co-main event was the [[fight of the night:the most exciting fight of the night]]. It had three great rounds.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Did the main event [[live up to the hype:be as good as people hoped]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Not for me. It was a bit [[one-sided:one fighter was much better than the other]]. She was much better from round one. It was not very [[entertaining:fun and exciting to watch]]. A little [[disappointing:not as good as you hoped]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'But she [[put on a show:fought in a very exciting way]] at the end!',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'True, that finish was beautiful. She always [[leaves it all in the cage:gives everything in the fight]]. And she got a [[performance bonus:extra money for the best fight]] for it. Good for her.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Was the whole card [[worth watching:good, you should watch it]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes! A fighter in an early fight [[stole the show:was the best part, a big surprise]]. His fight was better than the big fights. I want a [[rematch:a second fight between the same two fighters]] for that one.',
    },
  ],

  matchingExercise: [
    { word: 'Fight of the night', definition: 'The most exciting fight of the night' },
    { word: 'Performance bonus', definition: 'Extra money for the best knockout, submission, or fight' },
    { word: 'Entertaining', definition: 'Fun and exciting to watch' },
    { word: 'One-sided', definition: 'One fighter is much better. Not a close fight' },
    { word: 'Worth watching', definition: 'Good, so you should watch it' },
    { word: 'Disappointing', definition: 'Not as good as you hoped' },
  ],

  fillBlankExercise: [
    { before: 'I give the main event a', after: '10. It was great.', answer: '9 out of' },
    { before: 'That prelim fight', after: 'the show. It was better than the main event.', answer: 'stole' },
    { before: 'The co-main event was the', after: '. Both fighters gave everything.', answer: 'fight of the night' },
    { before: 'She', after: 'up to the hype. It was the best fight of the year.', answer: 'lived' },
    { before: 'Both fighters', answer: 'left', after: 'it all in the cage. They gave everything.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "live up to the hype" mean?',
      options: [
        'Fight in front of a very large crowd',
        'Be as good as people hoped',
        'Win the fight by knockout in the first round',
        'Get a performance bonus for a great finish',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "performance bonus"?',
      options: [
        'The champion\'s belt',
        'Extra money for the best knockout, submission, or fight of the night',
        'A score a judge gives for the best round',
        'The prize for winning many fights',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "steal the show" mean?',
      options: [
        'Win the main event with a surprise knockout',
        'Get the most likes online',
        'Be the best part of the event, when nobody thought it would be',
        'Take the belt from the champion',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "one-sided" mean when describing a fight?',
      options: [
        'A fight in only one place',
        'A fight where one fighter held the cage all the time',
        'When one fighter is much better than the other. It is not a close fight',
        'A fight with only one round',
      ],
      correctIndex: 2,
    },
  ],
};
