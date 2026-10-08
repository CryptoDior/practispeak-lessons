import { Lesson } from '@/types/lesson';

export const mmaWaysToWin: Lesson = {
  slug: 'mma-ways-to-win',
  title: 'Ways to Win',
  subtitle: 'Learn how a fighter can win an MMA fight',
  level: 'A1-A2',
  description: 'In MMA, there are different ways to win a fight. Learn the words for knockouts, submissions, and decisions.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-hero.png',

  warmUp: {
    questions: [
      'Can you name one way a fighter can win in MMA?',
      'What do you think "tap out" means?',
      'Which is better: a knockout or a decision?',
    ],
  },

  vocabulary: [
    {
      word: 'KNOCKOUT',
      partOfSpeech: 'noun',
      definition: 'When a fighter is hit very hard and cannot fight more. We also say KO.',
      example: 'He won by knockout in the first round with a left hook.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-knockout.png',
    },
    {
      word: 'SUBMISSION',
      partOfSpeech: 'noun',
      definition: 'When a fighter holds the other fighter and he must give up.',
      example: 'She won by submission in round two. He gave up.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-submission.png',
    },
    {
      word: 'DECISION',
      partOfSpeech: 'noun',
      definition: 'The fight does not end early, so the judges choose the winner.',
      example: 'Nobody won early, so it went to a decision. The judges scored it 29-28.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-decision.png',
    },
    {
      word: 'TKO',
      partOfSpeech: 'noun',
      definition: 'When the referee stops the fight because a fighter is getting hit too much.',
      example: 'The referee stopped the fight. It was a TKO. The fighter got hit too many times.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-tko.png',
    },
    {
      word: 'TAP OUT',
      partOfSpeech: 'verb',
      definition: 'To hit the mat or the other fighter with your hand. It means "I give up."',
      example: 'He tapped out. The hold on his arm hurt too much.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-tap-out.png',
    },
    {
      word: 'UNANIMOUS',
      partOfSpeech: 'adjective',
      definition: 'When all three judges agree on the same winner.',
      example: 'She won by unanimous decision. All three judges chose her.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-unanimous.png',
    },
    {
      word: 'SPLIT',
      partOfSpeech: 'adjective',
      definition: 'When the judges do not all agree. Two judges choose one fighter, and one judge chooses the other.',
      example: 'It was a split decision. It was a very close fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-split.png',
    },
    {
      word: 'FINISH',
      partOfSpeech: 'noun',
      definition: 'When a fighter ends the fight early, with a KO, TKO, or submission.',
      example: 'She wanted a finish. She did not want a decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-finish.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIN BY KNOCKOUT',
      definition: 'Win with a very hard hit. The other fighter cannot fight more.',
      example: 'He won by knockout in the first round with one right hand.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-win-by-knockout.png',
      tag: 'phrase',
    },
    {
      phrase: 'WIN BY SUBMISSION',
      definition: 'Win when the other fighter gives up.',
      example: 'She held his neck and he gave up. She won by submission.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-win-by-submission.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO THE DISTANCE',
      definition: 'Fight all the rounds. Nobody ends the fight early.',
      example: 'Nobody won early. The fight went the distance.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-go-the-distance.png',
      tag: 'phrase',
    },
    {
      phrase: 'LOOK FOR THE FINISH',
      definition: 'Try hard to end the fight early.',
      example: 'He was always looking for the finish. He threw big punches every round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-look-for-the-finish.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, how do you win a fight in MMA? Is it only by [[knockout:a very hard hit that ends the fight]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'No. There are three main ways. You can [[win by knockout:win with a very hard hit]], by [[submission:making the other fighter give up]], or by [[decision:the judges choosing the winner]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[TKO:the referee stops the fight]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'A TKO is when the referee stops the fight. One fighter is getting hit too much. It is like a [[knockout:when a fighter cannot fight more]], but the referee stops it.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what does "[[tap out:say I give up with your hand]]" mean?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'You hit the mat or the other fighter with your hand. It means "I give up." It happens when the other fighter has a strong hold on your neck or arm.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What if the fight [[goes the distance:fights all the rounds]]? Who wins?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The three judges decide. If all three agree, it is a [[unanimous:all judges agree]] decision. If two agree and one does not, it is a [[split:judges do not all agree]] decision.',
    },
  ],

  matchingExercise: [
    { word: 'Knockout', definition: 'Win with a very hard hit' },
    { word: 'Submission', definition: 'Win when the other fighter gives up' },
    { word: 'TKO', definition: 'The referee stops the fight because a fighter is hit too much' },
    { word: 'Decision', definition: 'The judges choose the winner after all rounds' },
    { word: 'Unanimous', definition: 'All three judges agree on the same winner' },
    { word: 'Split', definition: 'Two judges choose one fighter, one judge chooses the other' },
  ],

  fillBlankExercise: [
    { before: 'He won by', after: '. His left hook hit the other fighter very hard.', answer: 'knockout' },
    { before: 'She won by', after: '. The other fighter tapped out.', answer: 'submission' },
    { before: 'The fight went the', after: '. Nobody won early.', answer: 'distance' },
    { before: 'It was a', after: 'decision. Two judges chose him, and one chose her.', answer: 'split' },
    { before: 'He tapped', after: 'because the hold on his arm hurt.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "TKO"?',
      options: [
        'When the judge scores a round 10-9',
        'When a fighter taps out',
        'When the referee stops the fight because a fighter is hit too much',
        'When a fighter wins all three rounds',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "tap out" mean?',
      options: [
        'Hit the other fighter quickly',
        'Hit with your hand to say "I give up"',
        'Score a point with a kick',
        'Ask the referee to stop the fight',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "unanimous decision"?',
      options: [
        'Two judges agree, one does not',
        'The fight ends by knockout',
        'All three judges agree on the same winner',
        'The fighter wins in the first round',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "go the distance" mean?',
      options: [
        'Win the fight in the first round',
        'Run after the other fighter in the cage',
        'Not give up in a hold',
        'Fight all the rounds, with no early end',
      ],
      correctIndex: 3,
    },
  ],
};
