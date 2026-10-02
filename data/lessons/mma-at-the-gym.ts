import { Lesson } from '@/types/lesson';

export const mmaAtTheGym: Lesson = {
  slug: 'mma-at-the-gym',
  title: 'At the Gym',
  subtitle: 'Learn the words for an MMA gym',
  level: 'A1-A2',
  description: 'Fighters train at the gym every day. Learn the words for the rooms, the things, and the people in an MMA gym.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-gym-hero.png',

  warmUp: {
    questions: [
      'Do you go to a gym?',
      'What can you find in an MMA gym?',
      'What fighting sport do you want to try?',
    ],
  },

  vocabulary: [
    {
      word: 'HEAVY BAG',
      partOfSpeech: 'noun',
      definition: 'A big, heavy bag that hangs down. You punch and kick it.',
      example: 'She hit the heavy bag for twenty minutes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-heavy-bag.png',
    },
    {
      word: 'FOCUS MITTS',
      partOfSpeech: 'noun',
      definition: 'Small pads on the coach\'s hands. The fighter punches them.',
      example: 'The coach held the focus mitts and said which punches to throw.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-focus-mitts.png',
    },
    {
      word: 'GRAPPLING DUMMY',
      partOfSpeech: 'noun',
      definition: 'A soft doll the size of a person. You practise takedowns on it alone.',
      example: 'He practised his takedowns on the grappling dummy for an hour.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-grappling-dummy.png',
    },
    {
      word: 'LOCKER ROOM',
      partOfSpeech: 'noun',
      definition: 'The room where fighters change clothes and keep their things.',
      example: 'After training, everyone talked in the locker room.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-locker-room.png',
    },
    {
      word: 'WRESTLING ROOM',
      partOfSpeech: 'noun',
      definition: 'A room with soft mats for fighting on the floor.',
      example: 'The wrestling room has thick mats, so takedowns are safe.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-wrestling-room.png',
    },
    {
      word: 'COACH',
      partOfSpeech: 'noun',
      definition: 'The person who teaches and helps fighters.',
      example: 'My coach told me to practise moving my feet this week.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-gym-coach.png',
    },
    {
      word: 'SESSION',
      partOfSpeech: 'noun',
      definition: 'One time of training, from start to end.',
      example: 'We had a great training session today. It was two hours long.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-session.png',
    },
    {
      word: 'SCHEDULE',
      partOfSpeech: 'noun',
      definition: 'A list that shows the days and times of the classes.',
      example: 'The gym schedule shows wrestling on Monday, boxing on Wednesday.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-schedule.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SHOW UP',
      definition: 'Come to the gym for training.',
      example: 'He shows up every day at 6am.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-show-up.png',
      tag: 'phrase',
    },
    {
      phrase: 'WORK ON',
      definition: 'Practise something to get better at it.',
      example: 'This week I am working on my jab.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-work-on.png',
      tag: 'phrase',
    },
    {
      phrase: 'COOL DOWN',
      definition: 'Do slow, easy exercise and stretching at the end of training.',
      example: 'After sparring, we always cool down for ten minutes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cool-down.png',
      tag: 'phrase',
    },
    {
      phrase: 'PICK UP',
      definition: 'Learn something new quickly.',
      example: 'She picks things up fast. She learned a new move in one day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-pick-up.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, I want to join a gym. What will I find in a good MMA gym?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Everything. A [[wrestling room:a room with soft mats]], a cage for sparring, [[heavy bag:a big bag you punch and kick]]s, [[focus mitts:small pads the coach holds]], and good [[coach:the person who teaches fighters]]es.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what is a normal [[session:one time of training]] like?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'First, a warm up. Then drills. Then you hit the [[focus mitts:small pads]] or the [[heavy bag:big bag you punch and kick]]. Then [[sparring:practice fighting]]. At the end, you [[cool down:do easy exercise at the end]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How often should I [[show up:come to the gym]] to train?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Start with three times a week. Look at the [[schedule:the list of class days and times]] and choose classes that are good for you. Then [[work on:practise to get better]] what the coach tells you.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Will I [[pick up:learn]] things quickly?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'If you [[show up:come and train]] every day and [[work on:practise]] the things you are bad at, yes. The first month is hard, but you [[pick up:learn fast]] the basics very quickly.',
    },
  ],

  matchingExercise: [
    { word: 'Heavy bag', definition: 'A big hanging bag you punch and kick' },
    { word: 'Focus mitts', definition: 'Small pads on the coach\'s hands for punching' },
    { word: 'Wrestling room', definition: 'A room with soft mats for fighting on the floor' },
    { word: 'Session', definition: 'One time of training' },
    { word: 'Schedule', definition: 'A list of class days and times' },
    { word: 'Cool down', definition: 'Slow, easy exercise at the end of training' },
  ],

  fillBlankExercise: [
    { before: 'She worked on the', after: 'for twenty minutes.', answer: 'heavy bag' },
    { before: 'My coach held the', after: 'and I punched them.', answer: 'focus mitts' },
    { before: 'He', after: 'up every morning at 6am.', answer: 'shows' },
    { before: 'This week I am', after: 'on my jab.', answer: 'working' },
    { before: 'We had a great', after: 'today. It was two hours long.', answer: 'session' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "heavy bag"?',
      options: [
        'A bag for your gym things',
        'A big hanging bag you punch and kick',
        'A training partner for new fighters',
        'A bag of sand for lifting',
      ],
      correctIndex: 1,
    },
    {
      question: 'What are "focus mitts"?',
      options: [
        'A soft glove',
        'Small pads on the coach\'s hands for punching',
        'Gloves for fighting on the floor',
        'Cloth for your wrists',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "work on" mean in training?',
      options: [
        'Fix broken things in the gym',
        'Talk to a friend about a problem',
        'Practise something to get better at it',
        'Train harder in the next round',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "pick up" mean when learning MMA?',
      options: [
        'Lift your partner up',
        'Take the other fighter down to the mat',
        'Learn something new quickly',
        'Go faster in sparring',
      ],
      correctIndex: 2,
    },
  ],
};
