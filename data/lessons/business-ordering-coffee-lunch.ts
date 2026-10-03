import { Lesson } from '@/types/lesson';

export const businessOrderingCoffeeLunch: Lesson = {
  slug: 'business-ordering-coffee-lunch',
  title: 'Ordering Coffee or Lunch with Colleagues',
  subtitle: 'Series 5 · Everyday Work English · Lesson 3',
  level: 'A1-A2',
  description:
    'Learn how to invite colleagues for lunch, order food and drinks in a café, and pay the bill together.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-hero.png',

  objectives: [
    'Order food and drinks politely.',
    'Use everyday café and restaurant words.',
    'Invite colleagues for lunch and talk about paying.',
  ],

  vocabulary: [
    {
      word: 'MENU',
      partOfSpeech: 'noun',
      definition: 'A list of the food and drinks in a café or restaurant.',
      example: 'The waiter gave us the menu.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-menu.png',
    },
    {
      word: 'WAITER',
      partOfSpeech: 'noun',
      definition: 'A person who brings food and drinks in a café or restaurant.',
      example: 'A waiter took our order.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-waiter.png',
    },
    {
      word: 'ORDER',
      partOfSpeech: 'noun / verb',
      definition: 'To ask for food or drink in a café or restaurant.',
      example: 'I ordered soup and a salad.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-order.png',
    },
    {
      word: 'BILL',
      partOfSpeech: 'noun',
      definition: 'A paper that shows how much you must pay.',
      example: 'Can we have the bill, please?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-bill.png',
    },
    {
      word: 'COFFEE',
      partOfSpeech: 'noun',
      definition: 'A hot drink made from coffee beans.',
      example: 'We ordered two coffees.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-coffee.png',
    },
    {
      word: 'SANDWICH',
      partOfSpeech: 'noun',
      definition: 'Two pieces of bread with food between them.',
      example: 'I had a chicken sandwich for lunch.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-sandwich.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'EAT OUT',
      definition: 'To eat in a café or restaurant, not at home.',
      example: 'Let\'s eat out for lunch today.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-eat-out.png',
    },
    {
      phrase: 'PICK UP',
      definition: 'To go and get something or someone.',
      example: "We'll pick up lunch for everyone.",
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-pick-up.png',
    },
    {
      phrase: 'SIT DOWN',
      definition: 'To take a seat.',
      example: 'She sat down after ordering.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-sit-down.png',
    },
    {
      phrase: 'GRAB A BITE',
      tag: 'idiom',
      definition: 'To eat something quickly.',
      example: 'Do you want to grab a bite in the lunch break?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-grab-a-bite.png',
    },
    {
      phrase: 'MY TREAT',
      tag: 'idiom',
      definition: 'I will pay for you.',
      example: 'You did great work this week. Coffee is my treat.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-my-treat.png',
    },
    {
      phrase: 'SPLIT THE BILL',
      tag: 'idiom',
      definition: 'Each person pays part of the total.',
      example: 'At team dinners, we usually split the bill.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-split-the-bill.png',
    },
    {
      phrase: "I'd like a coffee and a sandwich, please.",
      tag: 'phrase',
      definition: 'A polite way to order.',
      example: '"I\'d like a latte, please."',
      inAction: '"I\'d like…" is more polite than "I want…". Use it when you order.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-id-like.png',
    },
    {
      phrase: 'Are you eating here or taking away?',
      tag: 'phrase',
      definition: 'A common café question. Do you want to eat in the café or take the food with you?',
      example: '"Are you eating here or taking away?" → "Eating here, please."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-ordering-coffee-lunch-eating-here.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Hey Tim, are you free for lunch?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Yes! Do you want to [[eat out:eat in a café, not at home]] or [[grab a bite:eat something quickly]] here?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Let\'s eat out. There\'s a new café near the park.',
    },
    {
      speaker: 'Waiter',
      speakerColor: 'orange',
      text: 'Good afternoon! Are you eating here or taking away?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Eating here, please. Can we see the [[menu:list of food and drinks]]?',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Thanks. I\'d like the chicken [[sandwich:bread with food between]] and an iced [[coffee:a drink made from coffee beans]], please.',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'And I\'d like the soup of the day and a latte. Let\'s [[sit down:take a seat]] by the window.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Good idea. So, shall we [[split the bill:each pay part of the total]]?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'No, lunch is [[my treat:I will pay for you]] today!',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Really? Thanks, Kira! Next time I\'ll pay the [[bill:paper that shows how much to pay]].',
    },
  ],

  matchingExercise: [
    { word: 'MENU', definition: 'A list of food and drinks' },
    { word: 'WAITER', definition: 'A person who brings food in a café' },
    { word: 'BILL', definition: 'A paper that shows how much to pay' },
    { word: 'EAT OUT', definition: 'To eat in a café, not at home' },
    { word: 'MY TREAT', definition: 'I will pay for you' },
    { word: 'SPLIT THE BILL', definition: 'Each person pays part' },
  ],

  fillBlankExercise: [
    { before: 'Can I see the', after: ', please?', answer: 'menu' },
    { before: "I'd", after: 'a coffee and a sandwich, please.', answer: 'like' },
    { before: 'Can we have the', after: ', please?', answer: 'bill' },
    { before: "Let's eat", after: 'today. I don\'t want to cook.', answer: 'out' },
    { before: 'Can you pick', after: 'the coffee on your way here?', answer: 'up' },
    { before: 'Please sit', after: 'and make yourself comfortable.', answer: 'down' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which is the most polite way to order?',
      options: ['Give me a coffee.', "I'd like a coffee, please.", 'Coffee. Now.', 'I want coffee.'],
      correctIndex: 1,
    },
    {
      question: 'What does "split the bill" mean?',
      options: [
        'One person pays for everyone',
        'Each person pays part of the total',
        'Nobody pays',
        'You pay tomorrow',
      ],
      correctIndex: 1,
    },
    {
      question: 'Your friend says "It\'s my treat." What does it mean?',
      options: [
        'I will pay for you.',
        'I am hungry.',
        'You must pay.',
        'I want a dessert.',
      ],
      correctIndex: 0,
    },
    {
      question: 'In the dialogue, what does Tim order?',
      options: [
        'Soup and a latte',
        'A chicken sandwich and an iced coffee',
        'A salad and tea',
        'Sushi and juice',
      ],
      correctIndex: 1,
    },
    {
      question: 'Who pays for lunch?',
      options: ['Tim', 'Kira', 'They split the bill', 'The waiter'],
      correctIndex: 1,
    },
    {
      question: 'What does "grab a bite" mean?',
      options: [
        'To eat something quickly',
        'To cook a big dinner',
        'To bite someone',
        'To buy coffee beans',
      ],
      correctIndex: 0,
    },
  ],
};
