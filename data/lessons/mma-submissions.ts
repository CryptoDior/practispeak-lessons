import { Lesson } from '@/types/lesson';

export const mmaSubmissions: Lesson = {
  slug: 'mma-submissions',
  title: 'Submissions',
  subtitle: 'Learn the names of holds that make a fighter give up',
  level: 'A1-A2',
  description: 'A submission is an exciting way to win. Learn the names of the most common submissions and the words to talk about them.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-submissions-hero.png',

  warmUp: {
    questions: [
      'Did you ever see a fighter tap out?',
      'Which is better: a knockout or a submission?',
      'Is it hard to learn submissions?',
    ],
  },

  vocabulary: [
    {
      word: 'CHOKE',
      partOfSpeech: 'noun',
      definition: 'A hold on the neck. The fighter cannot breathe well and must give up.',
      example: 'She locked in a choke from behind and he tapped out fast.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-choke.png',
    },
    {
      word: 'ARMBAR',
      partOfSpeech: 'noun',
      definition: 'A hold that pulls the arm straight and hurts the elbow.',
      example: 'He locked in an armbar and she had to tap out.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-armbar.png',
    },
    {
      word: 'REAR NAKED CHOKE',
      partOfSpeech: 'noun',
      definition: 'The most common submission in MMA. It is a choke from behind.',
      example: 'He took the back and locked in a rear naked choke. The fight was over.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rear-naked-choke.png',
    },
    {
      word: 'TRIANGLE',
      partOfSpeech: 'noun',
      definition: 'A choke with the legs. The legs go around the other fighter\'s head and arm.',
      example: 'She was on her back and caught him in a triangle. He tapped out fast.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-triangle.png',
    },
    {
      word: 'GUILLOTINE',
      partOfSpeech: 'noun',
      definition: 'A choke from the front. It often happens in a takedown.',
      example: 'He shot for a takedown, and she caught him in a guillotine.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-guillotine.png',
    },
    {
      word: 'KIMURA',
      partOfSpeech: 'noun',
      definition: 'A hold that turns the arm behind the back and hurts the shoulder.',
      example: 'He locked in a kimura and the other fighter had to tap out.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-kimura.png',
    },
    {
      word: 'LOCK IN',
      partOfSpeech: 'verb',
      definition: 'To hold very tight, so the other fighter cannot get out.',
      example: 'She locked in the rear naked choke. He could not get out.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-lock-in.png',
    },
    {
      word: 'DEFEND',
      partOfSpeech: 'verb',
      definition: 'To stop a submission or get out of it.',
      example: 'He defended the armbar. He held his hands together and rolled.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-defend.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TAP OUT',
      definition: 'Hit the mat or the other fighter with your hand to say "I give up."',
      example: 'He tapped out. The choke was too tight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-submission-tap-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'SINK IN THE CHOKE',
      definition: 'Make a choke very tight.',
      example: 'She sank in the choke and he tapped five seconds later.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sink-in-the-choke.png',
      tag: 'phrase',
    },
    {
      phrase: 'FIGHT OFF',
      definition: 'Fight hard and get out of a submission.',
      example: 'He fought off two armbars and stood up again.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fight-off.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO TO SLEEP',
      definition: 'When a fighter does not tap out, and the choke makes him sleep for a short time.',
      example: 'He did not tap out and went to sleep. The referee stopped the fight at once.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-to-sleep.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, they said she won by [[rear naked choke:a choke from behind]]. What is that?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The most common [[choke:a hold on the neck]] in MMA. You go behind the other fighter and hold the neck with your arm. When you [[sink in the choke:make the choke very tight]], the other fighter [[taps out:says I give up]]. Fast.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What about an [[armbar:a hold on the arm]]? I see that in jiu-jitsu too.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Same in MMA. You [[lock in:hold tight so they cannot get out]] the arm and push on the elbow. If they do not [[tap out:say they give up]], the arm can break.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[guillotine:a choke from the front]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'When someone [[shoots for a takedown:moves fast to take you down]], you hold the neck from the front. Very dangerous. If the fighter cannot [[fight off:fight and get out of]] the hold, they must tap.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What happens if they do not tap from a choke?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'They [[go to sleep:sleep for a short time from a choke]]. The blood cannot go to the head. The referee stops the fight at once.',
    },
  ],

  matchingExercise: [
    { word: 'Choke', definition: 'A hold on the neck' },
    { word: 'Armbar', definition: 'A hold that hurts the elbow' },
    { word: 'Rear naked choke', definition: 'The most common choke, from behind' },
    { word: 'Guillotine', definition: 'A choke from the front' },
    { word: 'Triangle', definition: 'A choke with the legs' },
    { word: 'Kimura', definition: 'A hold on the arm, behind the back' },
  ],

  fillBlankExercise: [
    { before: 'She', after: 'out because the armbar hurt.', answer: 'tapped' },
    { before: 'He took the back and', after: 'in a rear naked choke.', answer: 'locked' },
    { before: 'She sank', after: 'the choke and he tapped five seconds later.', answer: 'in' },
    { before: 'He', answer: 'fought', after: 'off two armbars and stood up again.' },
    { before: 'She caught a', after: 'when he shot for the takedown.', answer: 'guillotine' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "rear naked choke"?',
      options: [
        'A choke with the legs',
        'A choke from the front',
        'The most common MMA submission, a choke from behind',
        'A submission on the shoulder',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "lock in" mean for a submission?',
      options: [
        'Start a submission',
        'Hold very tight, so the other fighter cannot get out',
        'Step into the cage before a fight',
        'Tell the referee you want to do a choke',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "guillotine" in MMA?',
      options: [
        'A knee strike to the body',
        'A hold on the legs',
        'A choke from the front, often in a takedown',
        'A shoulder lock from behind',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "go to sleep" mean in MMA?',
      options: [
        'Be very tired and slow at the end of a fight',
        'Rest on the cage',
        'Sleep for a short time because of a choke',
        'Fall down after a leg kick',
      ],
      correctIndex: 2,
    },
  ],
};
