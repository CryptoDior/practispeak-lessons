import { Lesson } from '@/types/lesson';

export const mmaAtTheGym: Lesson = {
  slug: 'mma-at-the-gym',
  title: 'At the Gym',
  subtitle: 'Learn the language of an MMA gym — spaces, equipment, and conversations',
  level: 'A1-A2',
  description: 'The gym is where fighters become champions. This lesson teaches you the words for the spaces, equipment, and everyday conversations inside an MMA gym.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-at-the-gym-hero.png',

  warmUp: {
    questions: [
      'Have you ever been to a gym? What was it like?',
      'What equipment do you think you would find in an MMA gym?',
      'If you could train one martial art, what would you choose?',
    ],
  },

  vocabulary: [
    {
      word: 'HEAVY BAG',
      partOfSpeech: 'noun',
      definition: 'A large hanging bag used for practising punches and kicks.',
      example: 'She worked on the heavy bag for twenty minutes — all combinations.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-heavy-bag.png',
    },
    {
      word: 'FOCUS MITTS',
      partOfSpeech: 'noun',
      definition: 'Small handheld pads a coach holds so a fighter can practice combinations.',
      example: 'The coach held the focus mitts and called out combinations.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-focus-mitts.png',
    },
    {
      word: 'GRAPPLING DUMMY',
      partOfSpeech: 'noun',
      definition: 'A padded human-shaped dummy used to practice takedowns and submissions alone.',
      example: 'He practised his takedowns on the grappling dummy for an hour.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-grappling-dummy.png',
    },
    {
      word: 'LOCKER ROOM',
      partOfSpeech: 'noun',
      definition: 'The room where fighters change clothes and store their gear.',
      example: 'After training, everyone met in the locker room to talk about the session.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-locker-room.png',
    },
    {
      word: 'WRESTLING ROOM',
      partOfSpeech: 'noun',
      definition: 'A room with padded mats used for wrestling and grappling practice.',
      example: 'The wrestling room has thick mats so fighters can practice takedowns safely.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-wrestling-room.png',
    },
    {
      word: 'COACH',
      partOfSpeech: 'noun',
      definition: 'The person who teaches and guides a fighter\'s training.',
      example: 'My coach told me to focus on my footwork this week.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-gym-coach.png',
    },
    {
      word: 'SESSION',
      partOfSpeech: 'noun',
      definition: 'One training period — from when you arrive to when you leave.',
      example: 'We had a great training session today — two hours of everything.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-session.png',
    },
    {
      word: 'SCHEDULE',
      partOfSpeech: 'noun',
      definition: 'The plan that shows when each class or training session happens.',
      example: 'The gym schedule shows wrestling on Monday, boxing on Wednesday.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-schedule.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SHOW UP',
      definition: 'Arrive at the gym for training.',
      example: 'He shows up every day at 6am — no excuses.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-show-up.png',
      tag: 'phrase',
    },
    {
      phrase: 'WORK ON',
      definition: 'Practise and improve a specific skill or area.',
      example: 'This week I am working on my jab and my takedown defence.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-work-on.png',
      tag: 'phrase',
    },
    {
      phrase: 'COOL DOWN',
      definition: 'Do gentle movement and stretching at the end of a training session.',
      example: 'After sparring, we always cool down for ten minutes.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-cool-down.png',
      tag: 'phrase',
    },
    {
      phrase: 'PICK UP',
      definition: 'Learn a new technique or skill quickly.',
      example: 'She picks things up fast — she learned the kimura grip in one session.',
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
      text: 'Everything. A [[wrestling room:a room with mats for grappling practice]], a cage for sparring, [[heavy bag:a large hanging bag for punches and kicks]]s, [[focus mitts:small pads a coach holds for combinations]], and good [[coach:the person who teaches and guides training]]es.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'And what does a normal [[session:one training period]] look like?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Warm up. Drills. Pad work on [[focus mitts:small handheld pads]] or the [[heavy bag:large bag for striking practice]]. Then [[sparring:controlled practice fighting]]. Then [[cool down:gentle movement at the end of training]].',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'How often should I [[show up:arrive at the gym]] to train?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Start with three times a week. Look at the [[schedule:the plan that shows when classes happen]] and pick classes that work for you. Then [[work on:practice and improve]] what the coach tells you.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Will I [[pick up:learn]] things quickly?',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'If you [[show up:arrive and train]] every day and [[work on:focus on improving]] your weaknesses — yes. The first month is hard, but you start to [[pick up:learn fast]] the basics very quickly.',
    },
  ],

  matchingExercise: [
    { word: 'Heavy bag', definition: 'A large hanging bag for practising punches and kicks' },
    { word: 'Focus mitts', definition: 'Small pads a coach holds so a fighter can practise combinations' },
    { word: 'Wrestling room', definition: 'A room with mats for wrestling and grappling practice' },
    { word: 'Session', definition: 'One training period from start to finish' },
    { word: 'Schedule', definition: 'The plan that shows when each class happens' },
    { word: 'Cool down', definition: 'Gentle movement and stretching at the end of training' },
  ],

  fillBlankExercise: [
    { before: 'She worked on the', after: 'for twenty minutes — all combinations.', answer: 'heavy bag' },
    { before: 'My coach held the', after: 'and I worked my jab-cross combo.', answer: 'focus mitts' },
    { before: 'He', after: 'up every morning at 6am — no excuses.', answer: 'shows' },
    { before: 'This week I am', after: 'on my takedown defence.', answer: 'working' },
    { before: 'We had a great', after: 'today — two full hours of training.', answer: 'session' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "heavy bag"?',
      options: [
        'A bag fighters carry their equipment in',
        'A large hanging bag used for practising punches and kicks',
        'A type of sparring partner for beginners',
        'A bag filled with sand used for weight training',
      ],
      correctIndex: 1,
    },
    {
      question: 'What are "focus mitts"?',
      options: [
        'A type of glove with extra padding',
        'Small pads a coach holds so a fighter can practise combinations',
        'Gloves used only for grappling',
        'Protective hand wraps for the wrists',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "work on" mean in a training context?',
      options: [
        'Fix broken equipment in the gym',
        'Talk to a teammate about a problem',
        'Practise and improve a specific skill or area',
        'Train harder in the next round',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "pick up" mean when learning MMA?',
      options: [
        'Lift a training partner during a drill',
        'Take the opponent down to the mat',
        'Learn a new technique or skill quickly',
        'Pick up the pace in sparring',
      ],
      correctIndex: 2,
    },
  ],
};
