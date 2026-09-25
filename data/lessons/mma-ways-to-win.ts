import { Lesson } from '@/types/lesson';

export const mmaWaysToWin: Lesson = {
  slug: 'mma-ways-to-win',
  title: 'Ways to Win',
  subtitle: 'Learn how a fighter can win an MMA fight',
  level: 'A1-A2',
  description: 'In MMA, there are several ways to win a fight. This lesson teaches you the key vocabulary for knockouts, submissions, and decisions — and what each one means.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ways-to-win-hero.png',

  warmUp: {
    questions: [
      'Can you name one way a fighter can win in MMA?',
      'What do you think "tap out" means?',
      'Do you think it is better to win by knockout or by decision? Why?',
    ],
  },

  vocabulary: [
    {
      word: 'KNOCKOUT',
      partOfSpeech: 'noun',
      definition: 'When a fighter is hit so hard they cannot continue — also called KO.',
      example: 'He won by knockout in the first round with a left hook.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-knockout.png',
    },
    {
      word: 'SUBMISSION',
      partOfSpeech: 'noun',
      definition: 'When a fighter forces their opponent to tap out using a hold or choke.',
      example: 'She won by submission — a rear naked choke in round two.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-submission.png',
    },
    {
      word: 'DECISION',
      partOfSpeech: 'noun',
      definition: 'When the fight goes all rounds and the judges decide the winner.',
      example: 'No one got knocked out, so it went to a decision. The judges scored it 29-28.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-decision.png',
    },
    {
      word: 'TKO',
      partOfSpeech: 'noun',
      definition: 'Technical knockout — when the referee stops the fight because a fighter cannot defend themselves.',
      example: 'The referee stepped in for a TKO — the fighter was taking too many hits.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-tko.png',
    },
    {
      word: 'TAP OUT',
      partOfSpeech: 'verb',
      definition: 'To signal you give up by tapping your hand on the opponent or the mat.',
      example: 'He tapped out when the armbar locked in — he had no way out.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-tap-out.png',
    },
    {
      word: 'UNANIMOUS',
      partOfSpeech: 'adjective',
      definition: 'When all three judges agree on the same winner.',
      example: 'She won by unanimous decision — all three judges scored for her.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-unanimous.png',
    },
    {
      word: 'SPLIT',
      partOfSpeech: 'adjective',
      definition: 'When the judges do not all agree — two vote for one fighter, one for the other.',
      example: 'It was a split decision — a very close fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-split.png',
    },
    {
      word: 'FINISH',
      partOfSpeech: 'noun',
      definition: 'Ending the fight before the final round — by KO, TKO, or submission.',
      example: 'She looked for a finish from the first bell — she did not want a decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-finish.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIN BY KNOCKOUT',
      definition: 'Win the fight by hitting the opponent so hard they cannot continue.',
      example: 'He won by knockout in the first round — a single right hand.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-win-by-knockout.png',
      tag: 'phrase',
    },
    {
      phrase: 'WIN BY SUBMISSION',
      definition: 'Win the fight by forcing the opponent to tap out.',
      example: 'She won by submission with a rear naked choke.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-win-by-submission.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO THE DISTANCE',
      definition: 'Complete all rounds without a finish.',
      example: 'Neither fighter could get a finish — the fight went the distance.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-the-distance.png',
      tag: 'phrase',
    },
    {
      phrase: 'LOOK FOR THE FINISH',
      definition: 'Try hard to end the fight before the judges decide.',
      example: 'He was always looking for the finish — he landed big shots every round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-look-for-the-finish.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, how do you win a fight in MMA? Is it only by [[knockout:being hit so hard you cannot continue]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'No — there are three main ways. You can [[win by knockout:win by hitting the opponent so hard they stop]], by [[submission:forcing the opponent to tap out]], or by [[decision:the judges choosing the winner]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[TKO:technical knockout when the referee stops the fight]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'A TKO is when the referee stops the fight because one fighter is taking too many hits and cannot defend. It is similar to a [[knockout:when a fighter cannot continue]], but the referee decides — not the punch.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what does "[[tap out:signal you give up by tapping]]" mean?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'You tap with your hand on the mat or on the opponent. It means "I give up — I [[finish:end the fight]] here." It happens when someone has a choke or armbar on you.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What if the fight [[go the distance:complete all rounds]]? Who wins?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The three judges decide. If all three agree, it is a [[unanimous:all judges agree]] decision. If two agree and one does not, it is a [[split:judges do not all agree]] decision.',
    },
  ],

  matchingExercise: [
    { word: 'Knockout', definition: 'Win by hitting the opponent so hard they cannot continue' },
    { word: 'Submission', definition: 'Win by forcing the opponent to tap out' },
    { word: 'TKO', definition: 'The referee stops the fight because a fighter cannot defend' },
    { word: 'Decision', definition: 'The judges choose the winner after all rounds' },
    { word: 'Unanimous', definition: 'All three judges agree on the same winner' },
    { word: 'Split', definition: 'Judges do not all agree — two for one, one for the other' },
  ],

  fillBlankExercise: [
    { before: 'He won by', after: '— a left hook that dropped the opponent.', answer: 'knockout' },
    { before: 'She won by', after: '— the opponent tapped to a choke.', answer: 'submission' },
    { before: 'The fight went the', after: '— no one could get a finish.', answer: 'distance' },
    { before: 'It was a', after: 'decision — two judges for him, one for her.', answer: 'split' },
    { before: 'He tapped', after: 'when the armbar was locked in.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "TKO"?',
      options: [
        'When the judge scores a round 10-9',
        'When a fighter taps out from a choke',
        'When the referee stops the fight because a fighter cannot defend themselves',
        'When a fighter wins all three rounds',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "tap out" mean?',
      options: [
        'Hit the opponent quickly',
        'Signal you give up by tapping your hand',
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
        'Chase the opponent around the cage',
        'Survive a submission attempt',
        'Complete all rounds without a finish',
      ],
      correctIndex: 3,
    },
  ],
};
