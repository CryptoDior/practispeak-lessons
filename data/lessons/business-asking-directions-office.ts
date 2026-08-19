import { Lesson } from '@/types/lesson';

export const businessAskingDirectionsOffice: Lesson = {
  slug: 'business-asking-directions-office',
  title: 'Asking for and Giving Simple Directions in the Office',
  subtitle: 'Series 1 · Workplace Basics · Lesson 3',
  level: 'A1-A2',
  description:
    'Learn how to ask for and give simple directions in the office. Master the words for common office places and key phrases for helping colleagues find their way.',
  heroImage: '/images/business-asking-directions-office-hero.png',

  objectives: [
    'Ask for directions to common office places.',
    'Give simple directions using basic prepositions and phrases.',
    'Understand short instructions in the office.',
  ],

  vocabulary: [
    {
      word: 'OFFICE',
      partOfSpeech: 'noun',
      definition: 'A place where people work, usually with desks and computers.',
      example: 'We share an office with another team.',
      imageSlug: '/images/business-asking-directions-office-office.png',
    },
    {
      word: 'DESK',
      partOfSpeech: 'noun',
      definition: 'A table where you work, write, or use a computer.',
      example: 'She has a big desk with a computer.',
      imageSlug: '/images/business-asking-directions-office-desk.png',
    },
    {
      word: 'MEETING ROOM',
      partOfSpeech: 'noun',
      definition: 'A room where people talk and work together.',
      example: 'They are waiting in the meeting room.',
      imageSlug: '/images/business-asking-directions-office-meeting-room.png',
    },
    {
      word: 'CANTEEN',
      partOfSpeech: 'noun',
      definition: 'A place in a company where people eat lunch.',
      example: 'We eat lunch in the canteen.',
      imageSlug: '/images/business-asking-directions-office-canteen.png',
    },
    {
      word: 'STAIRS',
      partOfSpeech: 'noun',
      definition: 'Steps that go up or down between floors.',
      example: 'I go up the stairs to my office.',
      imageSlug: '/images/business-asking-directions-office-stairs.png',
    },
    {
      word: 'LIFT',
      partOfSpeech: 'noun',
      definition: 'A machine that carries people up and down in a building. (US: Elevator)',
      example: 'He goes down to the canteen in the lift.',
      imageSlug: '/images/business-asking-directions-office-lift.png',
    },
    {
      word: 'NEXT TO',
      partOfSpeech: 'preposition',
      definition: 'Very close, at the side of something.',
      example: 'The canteen is next to the stairs.',
      imageSlug: '/images/business-asking-directions-office-next-to.png',
    },
    {
      word: 'OPPOSITE',
      partOfSpeech: 'preposition',
      definition: 'In front of something, across from it.',
      example: 'His office is opposite the meeting room.',
      imageSlug: '/images/business-asking-directions-office-opposite.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'Where is the [place]?',
      tag: 'phrase',
      definition: 'Use this to ask about the location of a place in the office.',
      example: '"Where is the meeting room?" / "Where is the canteen?"',
      imageSlug: '/images/business-asking-directions-office-where-is-the.png',
    },
    {
      phrase: 'Go straight and turn left / right.',
      tag: 'phrase',
      definition: 'Use this to give short directions — walk forward, then turn.',
      example: '"Go straight and turn right at the lift."',
      imageSlug: '/images/business-asking-directions-office-go-straight.png',
    },
    {
      phrase: "It's next to the [place].",
      tag: 'phrase',
      definition: 'Use this to show that something is very close to another place.',
      example: '"It\'s next to the stairs." / "It\'s next to the canteen."',
      imageSlug: '/images/business-asking-directions-office-its-next-to.png',
    },
    {
      phrase: "It's opposite the [place].",
      tag: 'phrase',
      definition: 'Use this to show that something is directly across from another place.',
      example: '"It\'s opposite the canteen." / "The lift is opposite the meeting room."',
      imageSlug: '/images/business-asking-directions-office-its-opposite.png',
    },
    {
      phrase: 'Take the stairs / lift to the [floor].',
      tag: 'phrase',
      definition: 'Use this to explain how to reach another floor in the building.',
      example: '"Take the lift to the second floor." / "Take the stairs to the third floor."',
      imageSlug: '/images/business-asking-directions-office-take-the-stairs.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Excuse me, Tom. [[Where is:use this to ask about location]] the [[meeting room:a room where people talk and work together]]?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'Go straight and turn left. The meeting room is [[next to:very close, at the side of something]] the [[canteen:a place in a company where people eat lunch]].',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Thank you. And where is the HR office?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: "It's [[opposite:in front of something, across from it]] the [[lift:a machine that carries people up and down in a building]], on the first floor.",
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'Okay, got it. Do you usually use the lift or the [[stairs:steps that go up or down between floors]]?',
    },
    {
      speaker: 'Tom',
      speakerColor: 'green',
      text: 'I take the stairs when I go to the canteen. What about you?',
    },
    {
      speaker: 'Cleo',
      speakerColor: 'purple',
      text: 'I usually take the lift because my [[office:a place where people work, usually with desks and computers]] is on the fourth floor.',
    },
  ],

  matchingExercise: [
    { word: 'OFFICE', definition: 'A place where people work, usually with desks and computers' },
    { word: 'DESK', definition: 'A table where you work, write, or use a computer' },
    { word: 'MEETING ROOM', definition: 'A room where people talk and work together' },
    { word: 'CANTEEN', definition: 'A place in a company where people eat lunch' },
    { word: 'STAIRS', definition: 'Steps that go up or down between floors' },
    { word: 'LIFT', definition: 'A machine that carries people up and down in a building' },
    { word: 'NEXT TO', definition: 'Very close, at the side of something' },
    { word: 'OPPOSITE', definition: 'In front of something, across from it' },
  ],

  fillBlankExercise: [
    {
      before: 'The',
      after: 'is on the ground floor.',
      answer: 'canteen',
    },
    {
      before: 'The printer is',
      after: 'the window.',
      answer: 'next to',
    },
    {
      before: 'My',
      after: 'is on the second floor.',
      answer: 'office',
    },
    {
      before: 'She goes up the',
      after: 'to her office.',
      answer: 'stairs',
    },
    {
      before: 'The canteen is',
      after: 'the reception.',
      answer: 'opposite',
    },
    {
      before: "The manager's",
      after: 'is very big.',
      answer: 'desk',
    },
    {
      before: 'We talk about projects in the',
      after: '.',
      answer: 'meeting room',
    },
    {
      before: 'He takes the',
      after: 'to the fourth floor.',
      answer: 'lift',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "opposite" mean?',
      options: [
        'Very close, at the side of something.',
        'On the same floor as something.',
        'In front of something, across from it.',
        'Far away from something.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which phrase do you use to ask about location?',
      options: [
        '"Go straight and turn left."',
        '"Where is the [place]?"',
        '"Take the lift to the second floor."',
        '"It\'s next to the stairs."',
      ],
      correctIndex: 1,
    },
    {
      question: 'In the dialogue, where is the HR office?',
      options: [
        'Next to the canteen.',
        'Opposite the lift, on the first floor.',
        'On the fourth floor.',
        'Next to the meeting room.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why does Cleo take the lift?',
      options: [
        'She does not like the stairs.',
        'The stairs are broken.',
        'Her office is on the fourth floor.',
        'The canteen is on the ground floor.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which sentence gives directions correctly?',
      options: [
        '"The meeting room is the canteen."',
        '"Go straight and turn left."',
        '"Next to is the office."',
        '"It lift to the second."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "canteen"?',
      options: [
        'A room where people have meetings.',
        'A machine that carries people up and down.',
        'A place in a company where people eat lunch.',
        'Steps that go up or down between floors.',
      ],
      correctIndex: 2,
    },
  ],
};
