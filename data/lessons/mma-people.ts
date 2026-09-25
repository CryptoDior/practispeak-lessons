import { Lesson } from '@/types/lesson';

export const mmaPeople: Lesson = {
  slug: 'mma-people',
  title: 'People in MMA',
  subtitle: 'Learn who the key people are in a fight — inside and outside the cage',
  level: 'A1-A2',
  description: 'From the fighter to the referee, the coach to the commentator — this lesson teaches you the names and roles of every person who makes an MMA event happen.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-people-hero.png',

  warmUp: {
    questions: [
      'Who controls the fight inside the cage?',
      'What does a coach do during a fight?',
      'Have you ever heard an MMA commentator? What do they talk about?',
    ],
  },

  vocabulary: [
    {
      word: 'FIGHTER',
      partOfSpeech: 'noun',
      definition: 'A trained athlete who competes in MMA.',
      example: 'The fighter trained for twelve weeks before the event.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fighter.png',
    },
    {
      word: 'COACH',
      partOfSpeech: 'noun',
      definition: 'A person who trains a fighter and gives advice during the fight.',
      example: 'Her coach told her to use her jab more.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-coach.png',
    },
    {
      word: 'REFEREE',
      partOfSpeech: 'noun',
      definition: 'The official inside the cage who controls the fight and enforces the rules.',
      example: 'The referee stopped the fight when the fighter could not defend himself.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-referee.png',
    },
    {
      word: 'JUDGE',
      partOfSpeech: 'noun',
      definition: 'One of three officials sitting outside the cage who score each round.',
      example: 'The three judges gave different scores for the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-judge.png',
    },
    {
      word: 'COMMENTATOR',
      partOfSpeech: 'noun',
      definition: 'A person who describes the fight live for TV, radio, or online broadcasts.',
      example: 'The commentator said it was one of the best fights he had ever seen.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-commentator.png',
    },
    {
      word: 'CORNER MAN',
      partOfSpeech: 'noun',
      definition: 'A member of a fighter\'s team who assists between rounds — with water, ice, and advice.',
      example: 'The corner man put ice on his face between rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-corner-man.png',
    },
    {
      word: 'RING ANNOUNCER',
      partOfSpeech: 'noun',
      definition: 'The person who introduces the fighters and announces the result of the fight.',
      example: 'The ring announcer called out the fighter\'s name and the crowd went wild.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-ring-announcer.png',
    },
    {
      word: 'CHAMPION',
      partOfSpeech: 'noun',
      definition: 'The best fighter in a weight class — the person who holds the belt.',
      example: 'She is the champion. She has not lost a fight in three years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-champion.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STOP THE FIGHT',
      definition: 'When the referee ends the contest because a fighter is in danger.',
      example: 'The referee stepped in to stop the fight. The fighter could not continue.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-stop-the-fight.png',
      tag: 'phrase',
    },
    {
      phrase: 'SCORE THE ROUND',
      definition: 'When a judge gives points for each round based on what they see.',
      example: 'The judges scored the round 10-9 to the challenger.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-score-the-round.png',
      tag: 'phrase',
    },
    {
      phrase: 'IN THE CORNER',
      definition: 'In the area outside the cage where a fighter\'s team stands.',
      example: 'His coach was in the corner giving him instructions between rounds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-in-the-corner.png',
      tag: 'phrase',
    },
    {
      phrase: 'CALL OUT',
      definition: 'When a fighter publicly challenges another fighter.',
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
      text: 'OK — the two people fighting are the [[fighter:a trained athlete who competes in MMA]]s. The person in the middle with the black shirt is the [[referee:the official who controls the fight]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What does the referee do?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'He controls the fight. He can [[stop the fight:end the contest]] if someone is in danger.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And who are those people sitting at the table outside the cage?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Those are the [[judge:an official who scores each round]]s. There are three of them. They [[score the round:give points for each round]] based on what they see.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What about the man talking loudly on the microphone?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is the [[ring announcer:the person who introduces fighters and announces results]]. He introduces both fighters before the fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And I can hear two voices on TV describing the action.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — those are the [[commentator:a person who describes the fight live]]s. They explain everything you see.',
    },
  ],

  matchingExercise: [
    { word: 'Fighter', definition: 'A trained athlete who competes in MMA' },
    { word: 'Referee', definition: 'Controls the fight inside the cage' },
    { word: 'Judge', definition: 'Scores each round from outside the cage' },
    { word: 'Commentator', definition: 'Describes the fight live on broadcast' },
    { word: 'Corner man', definition: 'Assists the fighter between rounds' },
    { word: 'Ring announcer', definition: 'Introduces fighters and reads the result' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'stopped the fight because the fighter was hurt.', answer: 'referee' },
    { before: 'Three', after: 'score every round of the fight.', answer: 'judges' },
    { before: 'Her', after: 'told her to use her left kick more.', answer: 'coach' },
    { before: 'The', after: 'announced her name and the crowd cheered.', answer: 'ring announcer' },
    { before: 'After the fight, she', after: 'the champion and asked for a title shot.', answer: 'called out' },
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
      options: ['The fighter quits', 'The referee ends the contest', 'The judge changes the score', 'The crowd boos'],
      correctIndex: 1,
    },
    {
      question: 'Who introduces the fighters before the fight?',
      options: ['The coach', 'The referee', 'The corner man', 'The ring announcer'],
      correctIndex: 3,
    },
  ],
};
