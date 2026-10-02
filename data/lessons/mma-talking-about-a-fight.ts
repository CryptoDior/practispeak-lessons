import { Lesson } from '@/types/lesson';

export const mmaTalkingAboutAFight: Lesson = {
  slug: 'mma-talking-about-a-fight',
  title: 'Talking About a Fight',
  subtitle: 'Learn how to talk about what happened in a fight',
  level: 'A1-A2',
  description: 'After the fight, fans talk. Learn the words to say what happened: who was winning, what changed, and how it ended.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-talking-about-a-fight-hero.png',

  warmUp: {
    questions: [
      'After a fight, what do you say to your friends?',
      'How do you describe a fight that was very exciting?',
      'Is it easy to see who is winning a fight?',
    ],
  },

  vocabulary: [
    {
      word: 'DOMINATE',
      partOfSpeech: 'verb',
      definition: 'To be much better and control the fight.',
      example: 'She dominated the fight. She controlled all three rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-dominate.png',
    },
    {
      word: 'OUTLAST',
      partOfSpeech: 'verb',
      definition: 'To have more energy than the other fighter at the end of the fight.',
      example: 'He outlasted the other fighter. In round three, he was stronger.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-outlast.png',
    },
    {
      word: 'MOMENTUM',
      partOfSpeech: 'noun',
      definition: 'The feeling that a fighter is winning more and more.',
      example: 'After the knockdown, he had the momentum. The fans could feel it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-momentum.png',
    },
    {
      word: 'TURNING POINT',
      partOfSpeech: 'noun',
      definition: 'The moment when everything in the fight changes.',
      example: 'The knockdown in round two was the turning point of the whole fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-turning-point.png',
    },
    {
      word: 'OUTCLASS',
      partOfSpeech: 'verb',
      definition: 'To be much better than the other fighter.',
      example: 'She outclassed him. She was faster and better at everything.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-outclass.png',
    },
    {
      word: 'UPSET',
      partOfSpeech: 'noun',
      definition: 'When the underdog wins. Nobody thought this would happen.',
      example: 'It was a big upset. The champion lost to a new fighter.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-upset.png',
    },
    {
      word: 'PERFORMANCE',
      partOfSpeech: 'noun',
      definition: 'How well a fighter fought.',
      example: 'That was a great performance. She was perfect from start to finish.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-performance.png',
    },
    {
      word: 'HIGHLIGHT REEL',
      partOfSpeech: 'noun',
      definition: 'A short video of the best moments.',
      example: 'That finish will be on the highlight reel for years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-highlight-reel.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TURN THE FIGHT AROUND',
      definition: 'Start winning after you were losing.',
      example: 'He turned the fight around with a body kick in round two.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-turn-the-fight-around.png',
      tag: 'phrase',
    },
    {
      phrase: 'TAKE OVER',
      definition: 'Start to control the fight.',
      example: 'She took over in round three and finished the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-take-over.png',
      tag: 'phrase',
    },
    {
      phrase: 'COME BACK FROM',
      definition: 'Get hurt or knocked down, but get better and keep fighting.',
      example: 'He came back from a knockdown and finished the fight in the next round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-come-back-from.png',
      tag: 'phrase',
    },
    {
      phrase: 'FINISH STRONG',
      definition: 'Fight harder and better at the end.',
      example: 'She always finishes strong. Her best moments are in the last minute.',
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
      text: 'It was great. She [[dominated:controlled the fight]]. She [[outclassed:was much better than]] him. She was faster and better at everything.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I thought he was winning in round one. What happened?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'She [[turned the fight around:started winning after losing]] with a body kick. That was the [[turning point:the most important moment in the fight]]. After that, she had all the [[momentum:the feeling of winning more and more]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Was it an [[upset:when the underdog wins]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Not really. She was the [[favourite:the fighter people think will win]]. But her [[performance:how well she fought]] was special. She always [[finishes strong:fights harder at the end]]. That last round was great.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'The ending will be on every [[highlight reel:a video of the best moments from a fight]].',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes, that finish was perfect. She [[took over:started to control the fight]] in round three.',
    },
  ],

  matchingExercise: [
    { word: 'Dominate', definition: 'Be much better and control the fight' },
    { word: 'Turning point', definition: 'The moment when everything changes in the fight' },
    { word: 'Upset', definition: 'When the underdog wins' },
    { word: 'Momentum', definition: 'The feeling a fighter is winning more and more' },
    { word: 'Performance', definition: 'How well a fighter fought' },
    { word: 'Highlight reel', definition: 'A short video of the best moments from a fight' },
  ],

  fillBlankExercise: [
    { before: 'She', after: 'the fight. She controlled all three rounds.', answer: 'dominated' },
    { before: 'The knockdown in round two was the', after: '. Everything changed after that.', answer: 'turning point' },
    { before: 'It was a huge', after: '. Nobody thought the champion would lose.', answer: 'upset' },
    { before: 'He came', after: 'from the knockdown and finished the fight in round three.', answer: 'back' },
    { before: 'That finish will be on the', after: 'for years.', answer: 'highlight reel' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "turning point" in a fight?',
      options: [
        'When a fighter turns around in the cage',
        'The moment in a fight when everything changes',
        'The last round of a fight',
        'When a fighter stops punching and starts fighting on the ground',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "dominate" mean in MMA?',
      options: [
        'Win the fight by knockout',
        'Win a close fight by decision',
        'Be much better and control the fight',
        'Have the belt',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "momentum" in a fight?',
      options: [
        'The speed of a fighter\'s punches',
        'The feeling that a fighter is winning more and more',
        'The number of takedowns in a round',
        'How heavy a fighter is',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "turn the fight around" mean?',
      options: [
        'Turn around in the cage',
        'Stop fighting on the ground and start punching',
        'Start winning after you were losing',
        'Win the last round after losing the first two',
      ],
      correctIndex: 2,
    },
  ],
};
