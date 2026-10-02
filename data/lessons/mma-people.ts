import { Lesson } from '@/types/lesson';

export const mmaPeople: Lesson = {
  slug: 'mma-people',
  title: 'People in MMA',
  subtitle: 'Learn the names of the people at an MMA fight',
  level: 'A1-A2',
  description: 'Fighter, referee, coach, commentator... Learn the names of the people at an MMA fight and what they do.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-people-hero.png',

  warmUp: {
    questions: [
      'Who controls the fight inside the cage?',
      'What does a coach do during a fight?',
      'Do you watch MMA on TV? Who talks about the fight?',
    ],
  },

  vocabulary: [
    {
      word: 'FIGHTER',
      partOfSpeech: 'noun',
      definition: 'A person who fights in MMA.',
      example: 'The fighter trained for twelve weeks before the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fighter.png',
    },
    {
      word: 'COACH',
      partOfSpeech: 'noun',
      definition: 'A person who trains a fighter and gives advice during the fight.',
      example: 'Her coach told her to use her left hand more.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-coach.png',
    },
    {
      word: 'REFEREE',
      partOfSpeech: 'noun',
      definition: 'The person in the cage who controls the fight and checks the rules.',
      example: 'The referee stopped the fight. One fighter was hurt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-referee.png',
    },
    {
      word: 'JUDGE',
      partOfSpeech: 'noun',
      definition: 'One of three people outside the cage. They give points for each round.',
      example: 'The three judges gave different scores for the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-judge.png',
    },
    {
      word: 'COMMENTATOR',
      partOfSpeech: 'noun',
      definition: 'A person who talks about the fight on TV or online, while it happens.',
      example: 'The commentator said, "This is a great fight!"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-commentator.png',
    },
    {
      word: 'CORNER MAN',
      partOfSpeech: 'noun',
      definition: 'A person on the fighter\'s team. He helps between rounds with water, ice, and advice.',
      example: 'The corner man put ice on his face between rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-corner-man.png',
    },
    {
      word: 'RING ANNOUNCER',
      partOfSpeech: 'noun',
      definition: 'The person who says the fighters\' names and says who won.',
      example: 'The ring announcer said the fighter\'s name and the crowd cheered loudly.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ring-announcer.png',
    },
    {
      word: 'CHAMPION',
      partOfSpeech: 'noun',
      definition: 'The best fighter. The champion has the belt.',
      example: 'She is the champion. She has not lost a fight in three years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-champion.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STOP THE FIGHT',
      definition: 'The referee ends the fight because a fighter is hurt or not safe.',
      example: 'The referee moved in to stop the fight. The fighter was hurt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-stop-the-fight.png',
      tag: 'phrase',
    },
    {
      phrase: 'SCORE THE ROUND',
      definition: 'A judge gives points for each round.',
      example: 'The judges scored the round 10-9 for Silva.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-score-the-round.png',
      tag: 'phrase',
    },
    {
      phrase: 'IN THE CORNER',
      definition: 'In the place next to the cage where the fighter\'s team stands.',
      example: 'His coach was in the corner and talked to him between rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-in-the-corner.png',
      tag: 'phrase',
    },
    {
      phrase: 'CALL OUT',
      definition: 'A fighter says "I want to fight you!" to another fighter, in front of everyone.',
      example: 'After winning, she called out the champion.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-call-out.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I am watching my first MMA event tonight. Who are all these people?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'OK. The two people fighting are the [[fighter:a person who fights in MMA]]s. The person in the middle with the black shirt is the [[referee:the person who controls the fight]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What does the referee do?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He controls the fight. He can [[stop the fight:end the fight]] if someone is in danger.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And who are those people sitting at the table outside the cage?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Those are the [[judge:a person who gives points for each round]]s. There are three of them. They [[score the round:give points for each round]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What about the man talking loudly on the microphone?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is the [[ring announcer:the person who says the names and the winner]]. He says the names of the fighters before the fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And I can hear two people on TV talking about the fight.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes. Those are the [[commentator:a person who talks about the fight on TV]]s. They explain everything you see.',
    },
  ],

  matchingExercise: [
    { word: 'Fighter', definition: 'A person who fights in MMA' },
    { word: 'Referee', definition: 'Controls the fight inside the cage' },
    { word: 'Judge', definition: 'Scores each round from outside the cage' },
    { word: 'Commentator', definition: 'Talks about the fight on TV' },
    { word: 'Corner man', definition: 'Helps the fighter between rounds' },
    { word: 'Ring announcer', definition: 'Says the fighters\' names and the winner' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'stopped the fight because the fighter was hurt.', answer: 'referee' },
    { before: 'Three', after: 'score every round of the fight.', answer: 'judges' },
    { before: 'Her', after: 'told her to use her left kick more.', answer: 'coach' },
    { before: 'The', after: 'announced her name and the crowd cheered.', answer: 'ring announcer' },
    { before: 'After the fight, she', after: 'the champion and asked for a fight for the belt.', answer: 'called out' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Who controls the fight inside the cage?',
      options: ['The judge', 'The commentator', 'The referee', 'The ring announcer'],
      correctIndex: 2,
    },
    {
      question: 'What do the judges do?',
      options: ['Train the fighter', 'Score each round', 'Describe the fight on TV', 'Bring water between rounds'],
      correctIndex: 1,
    },
    {
      question: 'What does "stop the fight" mean?',
      options: ['The fighter quits', 'The referee ends the fight', 'The judge changes the score', 'The people shout'],
      correctIndex: 1,
    },
    {
      question: 'Who introduces the fighters before the fight?',
      options: ['The coach', 'The referee', 'The corner man', 'The ring announcer'],
      correctIndex: 3,
    },
  ],
};
