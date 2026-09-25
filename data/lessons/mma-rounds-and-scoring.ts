import { Lesson } from '@/types/lesson';

export const mmaRoundsAndScoring: Lesson = {
  slug: 'mma-rounds-and-scoring',
  title: 'Rounds and Scoring',
  subtitle: 'Learn how rounds work and how judges score a fight',
  level: 'A1-A2',
  description: 'When a fight goes to the judges, how is it scored? This lesson teaches the language of rounds, scoring, and judge\'s decisions — essential for any serious MMA fan.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rounds-and-scoring-hero.png',

  warmUp: {
    questions: [
      'How many rounds do you think most MMA fights last?',
      'What do you think judges look at when scoring a round?',
      'Have you ever watched a fight where you disagreed with the judge\'s decision?',
    ],
  },

  vocabulary: [
    {
      word: 'ROUND',
      partOfSpeech: 'noun',
      definition: 'A timed period of a fight — usually three or five minutes long.',
      example: 'The fight is three rounds. If no one gets stopped, the judges decide.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-round.png',
    },
    {
      word: 'SCORECARD',
      partOfSpeech: 'noun',
      definition: 'The form a judge fills in to record their scores for each round.',
      example: 'All three judges had different scorecards — a sign of how close the fight was.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-scorecard.png',
    },
    {
      word: '10-9',
      partOfSpeech: 'noun',
      definition: 'The most common round score — 10 to the winner, 9 to the loser.',
      example: 'All three rounds were 10-9. She won by unanimous decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-10-9.png',
    },
    {
      word: 'DOMINANT',
      partOfSpeech: 'adjective',
      definition: 'Clearly in control — winning the round with little competition.',
      example: 'He was dominant in round two — the score was 10-8.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-dominant.png',
    },
    {
      word: 'CLOSE ROUND',
      partOfSpeech: 'noun',
      definition: 'A round where it is hard to say who won — both fighters did well.',
      example: 'Round one was a close round — either fighter could have won it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-close-round.png',
    },
    {
      word: 'EFFECTIVE STRIKING',
      partOfSpeech: 'noun',
      definition: 'Punches and kicks that land cleanly and cause damage — what judges value most.',
      example: 'She won the round on effective striking — her shots were cleaner.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-effective-striking.png',
    },
    {
      word: 'KNOCKDOWN',
      partOfSpeech: 'noun',
      definition: 'When a fighter falls to the mat from a strike but gets back up to continue.',
      example: 'The knockdown in round one changed everything — the judge scored it 10-8.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-knockdown.png',
    },
    {
      word: 'CONTROVERSIAL',
      partOfSpeech: 'adjective',
      definition: 'A result that many people disagree with — a questionable or unfair decision.',
      example: 'The decision was controversial — many fans thought the other fighter won.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-controversial.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIN THE ROUND',
      definition: 'Score better than the opponent in a single round according to the judges.',
      example: 'She won round two with her grappling — two takedowns and ground control.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-win-the-round.png',
      tag: 'phrase',
    },
    {
      phrase: 'STEAL THE ROUND',
      definition: 'Win a round that your opponent was leading — usually with a late surge.',
      example: 'He stole the round with a knockdown in the last ten seconds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-steal-the-round.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO TO THE JUDGES',
      definition: 'End the fight without a finish — let the scorecards decide the winner.',
      example: 'Neither fighter got a finish, so it went to the judges.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-to-the-judges.png',
      tag: 'phrase',
    },
    {
      phrase: 'SCORE THE FIGHT',
      definition: 'Decide your own round-by-round verdict, like a judge.',
      example: 'I scored the fight 29-28 for her — she won rounds two and three.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-score-the-fight.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, the fight went three [[round:a timed period of fighting]]. How do we know who won?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Three judges [[score the fight:decide a round-by-round verdict]] using [[scorecard:the form a judge fills in for each round]]s. Each [[round:timed period]] is scored 10-9 to the winner.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[10-9:the most common round score]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The winner of the round gets 10 points. The loser gets 9. If there is a [[knockdown:a fighter falls from a strike but gets back up]], the winner gets 10 and the loser gets 8.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What do judges look at?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Mostly [[effective striking:punches and kicks that land cleanly and cause damage]] — clean shots that land. Also takedowns and control. If you are [[dominant:clearly in control]], the score is clear.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What if it is a [[close round:a round where both fighters did well]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Then the judges must decide. Sometimes the result is [[controversial:many people disagree with the decision]] — fans and fighters do not agree with the [[go to the judges:the scorecards decide]] decision.',
    },
  ],

  matchingExercise: [
    { word: 'Scorecard', definition: 'The form a judge fills in with scores for each round' },
    { word: '10-9', definition: 'The most common round score — 10 for the winner, 9 for the loser' },
    { word: 'Knockdown', definition: 'A fighter falls from a strike but gets back up to continue' },
    { word: 'Dominant', definition: 'Clearly in control — winning the round with little competition' },
    { word: 'Effective striking', definition: 'Punches and kicks that land cleanly and cause damage' },
    { word: 'Controversial', definition: 'A result that many people disagree with' },
  ],

  fillBlankExercise: [
    { before: 'All three rounds were', after: '— she won by unanimous decision.', answer: '10-9' },
    { before: 'He was', after: 'in round two — the judge gave him a 10-8 round.', answer: 'dominant' },
    { before: 'The', after: 'in the last ten seconds of the round changed the score.', answer: 'knockdown' },
    { before: 'No one got a finish, so it', after: 'to the judges.', answer: 'went' },
    { before: 'I', after: 'the fight 29-28 for her — she was better in rounds one and three.', answer: 'scored' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "scorecard" in MMA?',
      options: [
        'A list of a fighter\'s wins and losses',
        'The form a judge fills in to record scores for each round',
        'A card that shows the fight card for the evening',
        'A document signed by both fighters before the fight',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "effective striking" in scoring?',
      options: [
        'Throwing many punches in one round',
        'Striking first in each exchange',
        'Punches and kicks that land cleanly and cause damage — what judges value most',
        'Striking the body instead of the head',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "knockdown"?',
      options: [
        'A submission that ends the fight',
        'When the referee stops the fight',
        'When a fighter falls to the mat from a strike but gets up to continue',
        'When a fighter knocks on the cage to signal they want to stop',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "steal the round" mean?',
      options: [
        'Win a round your opponent was leading — usually with a late surge',
        'Start the round faster than your opponent',
        'Take the opponent down at the start of the round',
        'Win every round of the fight',
      ],
      correctIndex: 0,
    },
  ],
};
