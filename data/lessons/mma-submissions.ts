import { Lesson } from '@/types/lesson';

export const mmaSubmissions: Lesson = {
  slug: 'mma-submissions',
  title: 'Submissions',
  subtitle: 'Learn the names and vocabulary of MMA submission holds',
  level: 'A1-A2',
  description: 'Submissions are one of MMA\'s most exciting ways to win. This lesson teaches the names of the most common submissions and the vocabulary used to describe them.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-submissions-hero.png',

  warmUp: {
    questions: [
      'Have you ever seen a fighter tap out? What happened?',
      'What is the difference between a choke and an armbar?',
      'Do you think submissions require more skill than knockouts? Why?',
    ],
  },

  vocabulary: [
    {
      word: 'CHOKE',
      partOfSpeech: 'noun',
      definition: 'A hold that squeezes the neck to cut off blood or air — forcing a tap.',
      example: 'She locked in a choke from the back and he tapped out immediately.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-choke.png',
    },
    {
      word: 'ARMBAR',
      partOfSpeech: 'noun',
      definition: 'A joint lock that extends the arm and puts pressure on the elbow joint.',
      example: 'He locked in an armbar and she had to tap — her arm was fully extended.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-armbar.png',
    },
    {
      word: 'REAR NAKED CHOKE',
      partOfSpeech: 'noun',
      definition: 'The most common MMA submission — a choke applied from behind the opponent.',
      example: 'He took the back and locked in a rear naked choke. The fight was over.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-rear-naked-choke.png',
    },
    {
      word: 'TRIANGLE',
      partOfSpeech: 'noun',
      definition: 'A choke applied with the legs — wrapping around the opponent\'s head and arm.',
      example: 'She caught a triangle from her back and choked him out in seconds.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-triangle.png',
    },
    {
      word: 'GUILLOTINE',
      partOfSpeech: 'noun',
      definition: 'A choke applied to the neck from the front, often during a takedown.',
      example: 'When he shot for a takedown, she caught a guillotine and choked him out.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-guillotine.png',
    },
    {
      word: 'KIMURA',
      partOfSpeech: 'noun',
      definition: 'A shoulder joint lock that puts pressure on the arm behind the back.',
      example: 'He locked in a kimura and the fighter had to tap before his shoulder was hurt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-kimura.png',
    },
    {
      word: 'LOCK IN',
      partOfSpeech: 'verb',
      definition: 'To secure a submission hold so the opponent cannot escape.',
      example: 'She locked in the rear naked choke and there was no escape.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-lock-in.png',
    },
    {
      word: 'DEFEND',
      partOfSpeech: 'verb',
      definition: 'To stop or escape from a submission attempt.',
      example: 'He defended the armbar by clasping his hands and rolling.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-defend.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TAP OUT',
      definition: 'Signal you give up from a submission by tapping your hand.',
      example: 'He tapped out when the choke was locked in — he had no way to escape.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-submission-tap-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'SINK IN THE CHOKE',
      definition: 'Deepen a choke hold until it is fully locked and tight.',
      example: 'She sank in the choke and he tapped five seconds later.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-sink-in-the-choke.png',
      tag: 'phrase',
    },
    {
      phrase: 'FIGHT OFF',
      definition: 'Resist and escape a submission attempt.',
      example: 'He fought off two armbar attempts and got back to his feet.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fight-off.png',
      tag: 'phrase',
    },
    {
      phrase: 'GO TO SLEEP',
      definition: 'Be choked unconscious — when a fighter does not tap and the choke ends the fight.',
      example: 'He did not tap out and went to sleep — the referee stopped the fight immediately.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-to-sleep.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, they said she won by [[rear naked choke:a choke applied from behind the opponent]]. What is that?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'The most common [[choke:a hold that squeezes the neck]] in MMA. You go behind the opponent and squeeze the neck with your arm. When you [[sink in the choke:deepen the choke until it is tight]], the opponent [[tap out:signal you give up]]. Fast.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What about an [[armbar:a joint lock on the elbow]]? I see that in BJJ.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Same in MMA. You [[lock in:secure the hold so they cannot escape]] the arm and put pressure on the elbow. If they do not [[tap out:signal they give up]], the arm can break.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What is a [[guillotine:a choke from the front, often during a takedown]]?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'When someone [[shoot for a takedown:drive forward to bring you to the mat]], you wrap the neck from the front. Very dangerous. If the fighter cannot [[fight off:resist and escape]] the hold, they must tap.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'What happens if they do not tap from a choke?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'They [[go to sleep:be choked unconscious]]. The blood stops going to the brain. The referee stops the fight immediately.',
    },
  ],

  matchingExercise: [
    { word: 'Choke', definition: 'A hold that squeezes the neck to force a tap' },
    { word: 'Armbar', definition: 'A joint lock that puts pressure on the elbow' },
    { word: 'Rear naked choke', definition: 'The most common MMA choke — applied from behind' },
    { word: 'Guillotine', definition: 'A choke applied to the neck from the front' },
    { word: 'Triangle', definition: 'A choke applied with the legs around head and arm' },
    { word: 'Kimura', definition: 'A shoulder joint lock with the arm behind the back' },
  ],

  fillBlankExercise: [
    { before: 'She', after: 'out when the armbar was fully extended.', answer: 'tapped' },
    { before: 'He took the back and', after: 'in a rear naked choke.', answer: 'locked' },
    { before: 'She sank', after: 'the choke and he tapped five seconds later.', answer: 'in' },
    { before: 'He', answer: 'fought', after: 'off two armbar attempts and escaped to his feet.' },
    { before: 'She caught a', after: 'when he shot for the takedown.', answer: 'guillotine' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "rear naked choke"?',
      options: [
        'A choke applied with the legs from the ground',
        'A choke applied to the neck from the front',
        'The most common MMA submission — a choke applied from behind the opponent',
        'A submission that targets the shoulder',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "lock in" mean for a submission?',
      options: [
        'Start a submission attempt',
        'Secure a submission hold so the opponent cannot escape',
        'Step into the cage before a fight',
        'Signal to the referee you want to attempt a choke',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "guillotine" in MMA?',
      options: [
        'A knee strike to the body',
        'A submission that locks the legs together',
        'A choke applied to the neck from the front, often during a takedown',
        'A shoulder lock from behind',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "go to sleep" mean in MMA?',
      options: [
        'Be exhausted and move slowly in the late rounds',
        'Deliberately rest on the cage',
        'Be choked unconscious when a fighter does not tap out',
        'Fall down from a leg kick and lose balance',
      ],
      correctIndex: 2,
    },
  ],
};
