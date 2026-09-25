import { Lesson } from '@/types/lesson';

export const mmaTalkingAboutAFight: Lesson = {
  slug: 'mma-talking-about-a-fight',
  title: 'Talking About a Fight',
  subtitle: 'Learn how to describe and discuss what happened in a fight',
  level: 'A1-A2',
  description: 'After the fight, fans talk. This lesson teaches you the language for describing what happened in a fight — who was winning, what changed, and how it ended.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-talking-about-a-fight-hero.png',

  warmUp: {
    questions: [
      'After watching a fight, what is the first thing you usually say to a friend?',
      'How do you describe a fight that was very exciting?',
      'Have you ever changed your mind about who was winning during a fight?',
    ],
  },

  vocabulary: [
    {
      word: 'DOMINATE',
      partOfSpeech: 'verb',
      definition: 'To clearly control and win most or all parts of a fight.',
      example: 'She dominated the fight — three rounds of complete control.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-dominate.png',
    },
    {
      word: 'OUTLAST',
      partOfSpeech: 'verb',
      definition: 'To have more stamina and be stronger than the opponent in the later rounds.',
      example: 'He outlasted his opponent — by round three he was the stronger fighter.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-outlast.png',
    },
    {
      word: 'MOMENTUM',
      partOfSpeech: 'noun',
      definition: 'The feeling that a fighter is winning and getting stronger during the fight.',
      example: 'He had the momentum after the knockdown — the crowd could feel it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-momentum.png',
    },
    {
      word: 'TURNING POINT',
      partOfSpeech: 'noun',
      definition: 'The moment in a fight when everything changes — the most important moment.',
      example: 'The knockdown in round two was the turning point of the whole fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-turning-point.png',
    },
    {
      word: 'OUTCLASS',
      partOfSpeech: 'verb',
      definition: 'To be much better than the opponent in skill and technique.',
      example: 'She outclassed him completely — faster, sharper, more technical.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-outclass.png',
    },
    {
      word: 'UPSET',
      partOfSpeech: 'noun',
      definition: 'When the underdog wins — an unexpected result.',
      example: 'It was a huge upset — the champion lost to an unknown fighter.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-upset.png',
    },
    {
      word: 'PERFORMANCE',
      partOfSpeech: 'noun',
      definition: 'How well a fighter fought — their overall showing in the fight.',
      example: 'That was an incredible performance — she was perfect from start to finish.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-performance.png',
    },
    {
      word: 'HIGHLIGHT REEL',
      partOfSpeech: 'noun',
      definition: 'A collection of the best moments from a fight, shown as a short video.',
      example: 'That finish will be on the highlight reel for years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-highlight-reel.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TURN THE FIGHT AROUND',
      definition: 'Change the direction of the fight when you were losing.',
      example: 'He turned the fight around with a body kick in round two.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-turn-the-fight-around.png',
      tag: 'phrase',
    },
    {
      phrase: 'TAKE OVER',
      definition: 'Begin to control the fight and dominate the opponent.',
      example: 'She took over in round three and finished the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-take-over.png',
      tag: 'phrase',
    },
    {
      phrase: 'COME BACK FROM',
      definition: 'Recover from a bad moment — being knocked down or hurt — and keep fighting.',
      example: 'He came back from a knockdown and finished the fight in the next round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-come-back-from.png',
      tag: 'phrase',
    },
    {
      phrase: 'FINISH STRONG',
      definition: 'Fight harder and better at the end of a round or the whole fight.',
      example: 'She always finishes strong — her best moments are in the last minute.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-finish-strong.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, what did you think of last night\'s fight?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'It was incredible. She completely [[dominate:clearly control and win most of the fight]]d. She [[outclass:be much better in skill than the opponent]]ed him — faster, sharper, better in every area.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I thought he was winning in round one. What happened?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'She [[turn the fight around:change direction when losing]] with a body kick. That was the [[turning point:the most important moment in the fight]] — after that she had all the [[momentum:the feeling that a fighter is winning and getting stronger]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Was it an [[upset:when the underdog wins unexpectedly]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Not really — she was the [[favourite:the fighter expected to win]]. But her [[performance:how well she fought overall]] was special. She always [[finish strong:fight harder at the end]] — that last round was incredible.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'The ending will be on every [[highlight reel:a video of the best moments from a fight]].',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — that finish was perfect. She [[take over:begin to control and dominate]] completely in round three and never looked back.',
    },
  ],

  matchingExercise: [
    { word: 'Dominate', definition: 'Clearly control and win most or all parts of a fight' },
    { word: 'Turning point', definition: 'The moment when everything changes in the fight' },
    { word: 'Upset', definition: 'When the underdog wins — an unexpected result' },
    { word: 'Momentum', definition: 'The feeling a fighter is winning and getting stronger' },
    { word: 'Performance', definition: 'How well a fighter fought overall' },
    { word: 'Highlight reel', definition: 'A short video of the best moments from a fight' },
  ],

  fillBlankExercise: [
    { before: 'She', after: 'the fight — three rounds of total control.', answer: 'dominated' },
    { before: 'The knockdown in round two was the', after: '— everything changed after that.', answer: 'turning point' },
    { before: 'It was a huge', after: '— no one expected the champion to lose.', answer: 'upset' },
    { before: 'He came', after: 'from the knockdown and finished the fight in round three.', answer: 'back' },
    { before: 'That finish will be on the', after: 'for years.', answer: 'highlight reel' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "turning point" in a fight?',
      options: [
        'When a fighter turns to face a different direction in the cage',
        'The moment in a fight when everything changes',
        'The final round of a five-round fight',
        'When a fighter switches from striking to grappling',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "dominate" mean in MMA?',
      options: [
        'Win the fight by knockout',
        'Win a close fight by decision',
        'Clearly control and win most or all parts of a fight',
        'Hold the championship belt in a division',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "momentum" in a fight?',
      options: [
        'The speed of a fighter\'s punches',
        'The feeling that a fighter is winning and getting stronger during the fight',
        'The number of takedowns in a round',
        'The weight advantage a fighter has',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "turn the fight around" mean?',
      options: [
        'Rotate in the cage to change angles',
        'Switch from grappling to striking',
        'Change direction when losing and begin to take control',
        'Win the last round after losing the first two',
      ],
      correctIndex: 2,
    },
  ],
};
