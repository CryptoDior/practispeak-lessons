import { Lesson } from '@/types/lesson';

export const mmaBeforeTheFight: Lesson = {
  slug: 'mma-before-the-fight',
  title: 'Before the Fight',
  subtitle: 'Learn what happens in the hours and days before fight night',
  level: 'A1-A2',
  description: 'Fight week is busy. From the press conference to the face-off, the weigh-in to the dressing room — this lesson teaches the vocabulary of everything that happens before the first bell.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-before-the-fight-hero.png',

  warmUp: {
    questions: [
      'What do you think a fighter does the day before a fight?',
      'Have you ever seen fighters face off or stare at each other before a fight?',
      'Do you think the mental side of a fight is as important as the physical side?',
    ],
  },

  vocabulary: [
    {
      word: 'PRESS CONFERENCE',
      partOfSpeech: 'noun',
      definition: 'A public event before a fight where fighters speak to the media.',
      example: 'At the press conference, both fighters talked about their game plan.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-press-conference.png',
    },
    {
      word: 'FACE-OFF',
      partOfSpeech: 'noun',
      definition: 'When two fighters stand very close and stare at each other — usually for photos.',
      example: 'The face-off was intense — neither fighter looked away.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-face-off.png',
    },
    {
      word: 'GAME PLAN',
      partOfSpeech: 'noun',
      definition: 'The strategy a fighter and their team prepare for a specific opponent.',
      example: 'Our game plan is to take him down early and use ground and pound.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-game-plan.png',
    },
    {
      word: 'PREDICTION',
      partOfSpeech: 'noun',
      definition: 'A statement about what you think will happen in the fight.',
      example: 'My prediction is a second-round knockout — he is too strong.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-prediction.png',
    },
    {
      word: 'TRASH TALK',
      partOfSpeech: 'noun',
      definition: 'Words used to insult or intimidate an opponent before a fight.',
      example: 'He used a lot of trash talk at the press conference to get in her head.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-trash-talk.png',
    },
    {
      word: 'DRESSING ROOM',
      partOfSpeech: 'noun',
      definition: 'The private room where a fighter waits and warms up before the fight.',
      example: 'She spent two hours in the dressing room wrapping her hands and warming up.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-dressing-room.png',
    },
    {
      word: 'UNDERDOG',
      partOfSpeech: 'noun',
      definition: 'The fighter who is expected to lose — the less favoured fighter.',
      example: 'He was the underdog, but he knocked out the champion in the first round.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-underdog.png',
    },
    {
      word: 'FAVOURITE',
      partOfSpeech: 'noun',
      definition: 'The fighter who is expected to win — the more favoured fighter.',
      example: 'She is the favourite — she has won twelve fights in a row.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-favourite.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GET IN YOUR HEAD',
      definition: 'Use words or actions to make your opponent feel nervous or doubtful.',
      example: 'His trash talk tried to get in her head, but she stayed calm.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-get-in-your-head.png',
      tag: 'phrase',
    },
    {
      phrase: 'STICK TO THE GAME PLAN',
      definition: 'Follow the strategy your team prepared — do not change it in the moment.',
      example: 'He stuck to the game plan and controlled the fight from start to finish.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-stick-to-the-game-plan.png',
      tag: 'phrase',
    },
    {
      phrase: 'PICK THE WINNER',
      definition: 'Predict who you think will win the fight.',
      example: 'I pick the winner every week — I got five out of six right last event.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pick-the-winner.png',
      tag: 'phrase',
    },
    {
      phrase: 'HYPE THE FIGHT',
      definition: 'Build excitement and attention around an upcoming fight.',
      example: 'The press conference was used to hype the fight — millions watched it online.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-hype-the-fight.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I watched the [[press conference:a public event where fighters speak to the media]] last night. Why do they argue so much?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'It is part of the business. They use [[trash talk:words to insult or intimidate the opponent]] to [[hype the fight:build excitement]] and sell more tickets.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And the [[face-off:when fighters stand close and stare at each other]]? Is that just for cameras?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Yes — mostly photos. But some fighters use it to try to [[get in your head:make the opponent nervous]]. If you stay calm, it does not work.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Who is the [[favourite:the fighter expected to win]] in this fight?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The champion is the [[favourite:the more favoured fighter]]. But the challenger — the [[underdog:the fighter expected to lose]] — has a great [[game plan:the strategy prepared for this opponent]]. I think she can win.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is your [[prediction:what you think will happen in the fight]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'I [[pick the winner:predict who will win]] the underdog — third round submission. If she [[stick to the game plan:follows the strategy her team prepared]], she wins.',
    },
  ],

  matchingExercise: [
    { word: 'Game plan', definition: 'The strategy a fighter prepares for a specific opponent' },
    { word: 'Trash talk', definition: 'Words used to insult or intimidate an opponent' },
    { word: 'Underdog', definition: 'The fighter who is expected to lose' },
    { word: 'Favourite', definition: 'The fighter who is expected to win' },
    { word: 'Face-off', definition: 'When fighters stand close and stare at each other' },
    { word: 'Dressing room', definition: 'The private room where a fighter waits before the fight' },
  ],

  fillBlankExercise: [
    { before: 'Both fighters spoke to the media at the', after: '— a big event the day before the fight.', answer: 'press conference' },
    { before: 'His', after: 'tried to get in her head, but she stayed calm.', answer: 'trash talk' },
    { before: 'She was the', after: '— no one expected her to win, but she did.', answer: 'underdog' },
    { before: 'He', after: 'to the game plan and controlled the whole fight.', answer: 'stuck' },
    { before: 'My', answer: 'prediction', after: 'is a third-round knockout — he is too powerful.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "game plan" in MMA?',
      options: [
        'A video game fighters use to practice',
        'The strategy a fighter and their team prepare for a specific opponent',
        'A plan for the fighter\'s diet during fight week',
        'The list of fights at an event',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "get in your head" mean?',
      options: [
        'Learn everything about the opponent\'s style',
        'Study the opponent\'s past fights on video',
        'Use words or actions to make the opponent feel nervous or doubtful',
        'Develop a strong game plan for the fight',
      ],
      correctIndex: 2,
    },
    {
      question: 'Who is the "underdog"?',
      options: [
        'The current champion of the division',
        'The fighter with the most knockouts',
        'The fighter who is expected to lose',
        'A fighter who has never lost a fight',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "trash talk"?',
      options: [
        'A training drill where fighters shout commands',
        'Words used to insult or intimidate an opponent before a fight',
        'The speech a fighter gives after winning',
        'Bad reviews of a fight in the media',
      ],
      correctIndex: 1,
    },
  ],
};
