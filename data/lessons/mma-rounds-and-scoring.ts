import { Lesson } from '@/types/lesson';

export const mmaRoundsAndScoring: Lesson = {
  slug: 'mma-rounds-and-scoring',
  title: 'Rounds and Scoring',
  subtitle: 'Learn how rounds work and how judges score a fight',
  level: 'A1-A2',
  description: 'Sometimes the judges choose the winner. How do they score a fight? Learn the words for rounds and scores.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-hero.png',

  warmUp: {
    questions: [
      'How many rounds are in an MMA fight?',
      'What do judges look at in a round?',
      'Do you always agree with the judges?',
    ],
  },

  vocabulary: [
    {
      word: 'ROUND',
      partOfSpeech: 'noun',
      definition: 'A part of a fight. It is usually five minutes long.',
      example: 'The fight is three rounds. If nobody wins early, the judges decide.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-round.png',
    },
    {
      word: 'SCORECARD',
      partOfSpeech: 'noun',
      definition: 'The paper where a judge writes the score for each round.',
      example: 'The three judges had different scorecards. It was a very close fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-scorecard.png',
    },
    {
      word: '10-9',
      partOfSpeech: 'noun',
      definition: 'The usual score for a round: 10 for the winner, 9 for the loser.',
      example: 'All three rounds were 10-9. She won by unanimous decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-10-9.png',
    },
    {
      word: 'DOMINANT',
      partOfSpeech: 'adjective',
      definition: 'Much better than the other fighter. In control.',
      example: 'He was dominant in round two. The score was 10-8.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-dominant.png',
    },
    {
      word: 'CLOSE ROUND',
      partOfSpeech: 'noun',
      definition: 'A round where it is hard to say who won. Both fighters did well.',
      example: 'Round one was a close round. Both fighters did well.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-close-round.png',
    },
    {
      word: 'EFFECTIVE STRIKING',
      partOfSpeech: 'noun',
      definition: 'Good punches and kicks that hit and hurt. Judges look at this most.',
      example: 'She won the round with effective striking. Her punches hit more.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-effective-striking.png',
    },
    {
      word: 'KNOCKDOWN',
      partOfSpeech: 'noun',
      definition: 'When a fighter is hit and falls down, but gets up and keeps fighting.',
      example: 'There was a knockdown in round one. The judge scored it 10-8.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-knockdown.png',
    },
    {
      word: 'CONTROVERSIAL',
      partOfSpeech: 'adjective',
      definition: 'When many people do not agree with the result.',
      example: 'The decision was controversial. Many fans thought the other fighter won.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-controversial.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIN THE ROUND',
      definition: 'The judges say you were better in one round.',
      example: 'She won round two with two takedowns.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-win-the-round.png',
      tag: 'phrase',
    },
    {
      phrase: 'STEAL THE ROUND',
      definition: 'Win a round at the very end. The other fighter was winning before.',
      example: 'He stole the round with a knockdown in the last ten seconds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-steal-the-round.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO TO THE JUDGES',
      definition: 'Nobody wins early, so the judges choose the winner.',
      example: 'Nobody won early, so it went to the judges.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-go-to-the-judges.png',
      tag: 'phrase',
    },
    {
      phrase: 'SCORE THE FIGHT',
      definition: 'Give your own score for each round, like a judge.',
      example: 'I scored the fight 29-28 for her. She won rounds two and three.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-score-the-fight.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, the fight went three [[rounds:parts of the fight]]. How do we know who won?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Three judges [[score the fight:give a score for each round]] using [[scorecard:the paper where a judge writes the score]]s. Each [[round:part of the fight]] is scored 10-9 for the winner.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[10-9:the usual round score]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The winner of the round gets 10 points. The loser gets 9. If there is a [[knockdown:a fighter is hit and falls but gets up]], the winner gets 10 and the loser gets 8.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What do judges look at?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Mostly [[effective striking:good punches and kicks that hit and hurt]]. Also takedowns and control. If you are [[dominant:much better and in control]], the score is clear.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What if it is a [[close round:a round where both fighters did well]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Then the judges must decide. Sometimes the result is [[controversial:many people do not agree]]. Many fans think the other fighter won.',
    },
  ],

  matchingExercise: [
    { word: 'Scorecard', definition: 'The paper where a judge writes the scores' },
    { word: '10-9', definition: 'The usual round score: 10 for the winner, 9 for the loser' },
    { word: 'Knockdown', definition: 'A fighter is hit and falls, but gets up again' },
    { word: 'Dominant', definition: 'Much better than the other fighter' },
    { word: 'Effective striking', definition: 'Good punches and kicks that hit and hurt' },
    { word: 'Controversial', definition: 'Many people do not agree with the result' },
  ],

  fillBlankExercise: [
    { before: 'All three rounds were', after: '. She won by unanimous decision.', answer: '10-9' },
    { before: 'He was', after: 'in round two. The judge gave him 10-8.', answer: 'dominant' },
    { before: 'The', after: 'in the last ten seconds of the round changed the score.', answer: 'knockdown' },
    { before: 'Nobody won early, so it', after: 'to the judges.', answer: 'went' },
    { before: 'I', after: 'the fight 29-28 for her. She was better in rounds one and three.', answer: 'scored' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "scorecard" in MMA?',
      options: [
        'A list of a fighter\'s wins and losses',
        'The paper where a judge writes the score for each round',
        'A card with the list of fights',
        'A paper the fighters sign before the fight',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "effective striking" in scoring?',
      options: [
        'Throwing many punches in one round',
        'Hitting first every time',
        'Good punches and kicks that hit and hurt. Judges look at this most',
        'Hitting the body, not the head',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "knockdown"?',
      options: [
        'A submission that ends the fight',
        'When the referee stops the fight',
        'When a fighter is hit and falls, but gets up and keeps fighting',
        'When a fighter hits the cage to say stop',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "steal the round" mean?',
      options: [
        'Win a round at the very end, when the other fighter was winning',
        'Start the round faster than the other fighter',
        'Take the other fighter down at the start of the round',
        'Win every round of the fight',
      ],
      correctIndex: 0,
    },
  ],
};
