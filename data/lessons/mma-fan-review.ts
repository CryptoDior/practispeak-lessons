import { Lesson } from '@/types/lesson';

export const mmaFanReview: Lesson = {
  slug: 'mma-fan-review',
  title: 'Fan Review',
  subtitle: 'Learn how to give your opinion on a fight — like a fan, an analyst, or a critic',
  level: 'A1-A2',
  description: 'After every event, fans review, rate, and debate the fights. This lesson teaches you how to give your opinion on an MMA event in clear, natural English.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fan-review-hero.png',

  warmUp: {
    questions: [
      'After you watch a fight, what do you usually talk about first?',
      'What makes a fight a "great fight" in your opinion?',
      'Have you ever watched an event and been disappointed? Why?',
    ],
  },

  vocabulary: [
    {
      word: 'RATING',
      partOfSpeech: 'noun',
      definition: 'A score or grade you give a fight or event — like 7 out of 10.',
      example: 'I give this event a 9 out of 10 — the main event was perfect.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rating.png',
    },
    {
      word: 'FIGHT OF THE NIGHT',
      partOfSpeech: 'noun',
      definition: 'The most exciting and entertaining fight of the event.',
      example: 'The co-main event was the fight of the night — three rounds of action.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fight-of-the-night.png',
    },
    {
      word: 'PERFORMANCE BONUS',
      partOfSpeech: 'noun',
      definition: 'Extra money given to fighters for the best knockout, submission, or fight of the night.',
      example: 'She got a performance bonus for the best submission of the night.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-performance-bonus.png',
    },
    {
      word: 'ENTERTAINING',
      partOfSpeech: 'adjective',
      definition: 'Fun and exciting to watch — a fight that keeps you watching.',
      example: 'It was one of the most entertaining events of the year.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-entertaining.png',
    },
    {
      word: 'DISAPPOINTING',
      partOfSpeech: 'adjective',
      definition: 'Not as good as you expected — less exciting than you hoped.',
      example: 'The main event was disappointing — neither fighter took risks.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-disappointing.png',
    },
    {
      word: 'ONE-SIDED',
      partOfSpeech: 'adjective',
      definition: 'When one fighter is much better than the other — not a close fight.',
      example: 'It was one-sided — she won every round without a challenge.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-one-sided.png',
    },
    {
      word: 'REMATCH',
      partOfSpeech: 'noun',
      definition: 'A second fight between the same two fighters.',
      example: 'After that close decision, I want to see a rematch immediately.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fan-rematch.png',
    },
    {
      word: 'WORTH WATCHING',
      partOfSpeech: 'adjective',
      definition: 'Good enough to spend your time watching — recommended.',
      example: 'The whole card is worth watching — even the prelims were great.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-worth-watching.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'LIVE UP TO THE HYPE',
      definition: 'Be as good as everyone expected — not disappoint after a lot of excitement.',
      example: 'The main event lived up to the hype — one of the best fights I have seen.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-live-up-to-the-hype.png',
      tag: 'phrase',
    },
    {
      phrase: 'STEAL THE SHOW',
      definition: 'Be the best and most exciting part of the event — when no one expected it.',
      example: 'The prelim fight stole the show — better than the main event.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-steal-the-show.png',
      tag: 'phrase',
    },
    {
      phrase: 'LEAVE IT ALL IN THE CAGE',
      definition: 'Give everything you have in a fight — hold nothing back.',
      example: 'Both fighters left it all in the cage — that is why it was so exciting.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-leave-it-all-in-the-cage.png',
      tag: 'phrase',
    },
    {
      phrase: 'PUT ON A SHOW',
      definition: 'Perform in a spectacular and exciting way for the audience.',
      example: 'She put on a show — the crowd was on their feet the whole fight.',
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
      text: 'I give it an 8 out of 10. The co-main event was the [[fight of the night:the most exciting fight of the event]] — three incredible rounds.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Did the main event [[live up to the hype:be as good as everyone expected]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Not for me. It was a bit [[one-sided:one fighter was much better than the other]] — she dominated from round one. Not [[entertaining:fun and exciting to watch]]. A little [[disappointing:not as good as expected]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'But she [[put on a show:perform in a spectacular way]] in the finish!',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'True — that finish was beautiful. She [[leave it all in the cage:give everything in the fight]] every time. And a [[performance bonus:extra money for the best performance]] for that — well deserved.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Was the whole card [[worth watching:good enough to recommend]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Absolutely. A prelim fighter [[steal the show:be the best part unexpectedly]] — his fight was better than three of the main card fights. I want a [[rematch:a second fight between the same two fighters]] for that one.',
    },
  ],

  matchingExercise: [
    { word: 'Fight of the night', definition: 'The most exciting and entertaining fight of the event' },
    { word: 'Performance bonus', definition: 'Extra money for the best knockout, submission, or fight' },
    { word: 'Entertaining', definition: 'Fun and exciting to watch' },
    { word: 'One-sided', definition: 'When one fighter is much better — not a close fight' },
    { word: 'Worth watching', definition: 'Good enough to spend your time watching — recommended' },
    { word: 'Disappointing', definition: 'Not as good as you expected' },
  ],

  fillBlankExercise: [
    { before: 'I give this event a 9 out of 10 —', after: '10 for the main event.', answer: '9 out of' },
    { before: 'That prelim fight', after: 'the show — better than the main event.', answer: 'stole' },
    { before: 'The co-main event was the', after: '— both fighters gave everything.', answer: 'fight of the night' },
    { before: 'She', after: 'up to the hype — the best fight I have seen this year.', answer: 'lived' },
    { before: 'Both fighters', answer: 'left', after: 'it all in the cage — they held nothing back.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "live up to the hype" mean?',
      options: [
        'Fight in front of a very large crowd',
        'Be as good as everyone expected — not disappoint after a lot of excitement',
        'Win the fight by knockout in the first round',
        'Get a performance bonus for a great finish',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "performance bonus"?',
      options: [
        'The champion\'s title belt',
        'Extra money given to fighters for the best knockout, submission, or fight of the night',
        'A score a judge gives for the best round',
        'The prize for winning a tournament',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "steal the show" mean?',
      options: [
        'Win the main event with a surprise knockout',
        'Get the highest social media engagement of the night',
        'Be the best and most exciting part of the event when no one expected it',
        'Take the belt from the champion',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "one-sided" mean when describing a fight?',
      options: [
        'A fight that only happened in one location',
        'A fight where one fighter held the cage wall the whole time',
        'When one fighter is much better than the other — not a close fight',
        'A fight with only one round',
      ],
      correctIndex: 2,
    },
  ],
};
