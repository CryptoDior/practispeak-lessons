import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}dining-ordering-food-restaurant-${s}.png`;

export const diningOrderingFoodRestaurant: Lesson = {
  slug: 'dining-ordering-food-restaurant',
  title: 'Ordering Food in a Restaurant',
  subtitle: 'Food & Drink · Dining · Lesson 1',
  level: 'A1-A2',
  description:
    'Learn the words and phrases you need in a restaurant: ask for a table, order drinks and food, ask for more time, and add a side dish.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Ask for a table and answer "Table for how many?".',
    'Order drinks, a starter, a main course and a side.',
    'Ask for more time and say when you are finished ordering.',
  ],

  // Read the Menu: read, then answer the questions (shown beside the menu on wide screens).
  menuReading: {
    title: 'Green Table Café — Dinner Menu',
    intro: 'Read the menu. Then choose the right answer.',
    sections: [
      {
        heading: 'Starters',
        items: [
          { name: 'Tomato soup', note: 'hot, with bread', price: '$5' },
          { name: 'Garden salad', note: 'fresh vegetables', price: '$6' },
        ],
      },
      {
        heading: 'Main courses',
        items: [
          { name: 'Chicken and rice', note: '', price: '$12' },
          { name: 'Cheese pizza', note: 'tomato and cheese', price: '$11' },
          { name: 'Fish and chips', note: '', price: '$13' },
        ],
      },
      {
        heading: 'Sides',
        items: [
          { name: 'Chips', note: '', price: '$3' },
          { name: 'Green beans', note: '', price: '$3' },
        ],
      },
      {
        heading: 'Drinks',
        items: [
          { name: 'Orange juice', note: '', price: '$3' },
          { name: 'Water', note: '', price: 'free' },
        ],
      },
    ],
    questions: [
      { question: 'How much is the cheese pizza?', options: ['$11', '$12', '$13'], correctIndex: 0 },
      { question: 'Which dish is a starter?', options: ['Tomato soup', 'Fish and chips', 'Chips'], correctIndex: 0 },
      { question: 'Which dish is a side?', options: ['Garden salad', 'Chips', 'Tomato soup'], correctIndex: 1 },
      { question: 'Which main course is the most expensive?', options: ['Cheese pizza', 'Chicken and rice', 'Fish and chips'], correctIndex: 2 },
      { question: 'You order tomato soup and a side of chips. How much is it?', options: ['$8', '$9', '$10'], correctIndex: 0 },
    ],
  },

  vocabulary: [
    { word: 'MENU', partOfSpeech: 'noun', definition: 'A list of the food and drinks in a restaurant.', example: "I'm hungry. Let's see what's on the menu.", imageSlug: img('looking-at-restaurant-menu') },
    { word: 'MEAL', partOfSpeech: 'noun', definition: 'The food you eat at one time, like lunch or dinner.', example: 'This meal looks delicious!', imageSlug: img('delicious-complete-meal') },
    { word: 'ORDER', partOfSpeech: 'noun / verb', definition: 'To ask for food or drinks in a restaurant.', example: "We're ready to order.", imageSlug: img('diners-ready-to-order') },
    { word: 'DECIDE', partOfSpeech: 'verb', definition: 'To choose what you want.', example: 'I need to decide what to eat.', imageSlug: img('undecided-between-menu-options') },
    { word: 'STARTER', partOfSpeech: 'noun', definition: 'Small food before the main meal. (US: appetizer)', example: "Let's share a starter.", imageSlug: img('sharing-small-starter') },
    { word: 'MAIN COURSE', partOfSpeech: 'noun', definition: 'The biggest part of the meal.', example: "I'll have the chicken as my main course.", imageSlug: img('choosing-chicken-main-course') },
    { word: 'SIDE', partOfSpeech: 'noun', definition: 'A small dish you eat with your main course.', example: "I'll have a salad as a side.", imageSlug: img('choosing-small-salad-side') },
    { word: 'WAITER / WAITRESS', partOfSpeech: 'noun', definition: 'A man / woman who brings food and drinks in a restaurant.', example: 'The waitress brought our drinks.', imageSlug: img('waitress-delivers-drinks') },
    { word: 'BOOTH', partOfSpeech: 'noun', definition: 'A cozy table with a long seat along the wall.', example: 'Can we sit in a booth, please?', imageSlug: img('requesting-restaurant-booth') },
    { word: 'RESERVATION', partOfSpeech: 'noun', definition: 'When you ask the restaurant to keep a table for you.', example: 'We have a reservation under Smith.', imageSlug: img('smith-booking-at-reception') },
  ],

  phrasalVerbs: [
    { phrase: 'Table for how many?', tag: 'phrase', definition: 'The waiter asks how many people are with you.', example: '"Table for how many?" → "Two, please."', imageSlug: img('table-for-two-request') },
    { phrase: 'We have a reservation under…', tag: 'phrase', definition: 'Tell the waiter your booking name.', example: '"We have a reservation under Smith for four people."', imageSlug: img('smith-reservation-four-guests') },
    { phrase: "I'll have…, please.", tag: 'phrase', definition: 'The most common way to order.', example: '"I\'ll have the grilled salmon, please."', inAction: '"I\'ll have…" and "I\'d like…" are both polite. "I want…" can sound rude.', imageSlug: img('ordering-grilled-salmon') },
    { phrase: 'I need a moment to decide.', tag: 'phrase', definition: 'Ask for more time to look at the menu.', example: '"Sorry, I need a moment to decide."', imageSlug: img('asking-for-more-decision-time') },
    { phrase: 'Can you come back in a minute?', tag: 'phrase', definition: 'Ask the waiter to return later.', example: '"I\'m not sure yet. Can you come back in a minute?"', imageSlug: img('waiter-returns-later-request') },
    { phrase: 'Would you like to add a side?', tag: 'phrase', definition: 'The waiter asks if you want a small extra dish.', example: '"Would you like to add a side?" → "Yes, the fries, please."', imageSlug: img('adding-fries-as-side') },
    { phrase: "That's all for now, thank you.", tag: 'phrase', definition: 'Say you are finished ordering.', example: '"Anything else?" → "No, that\'s all for now, thank you."', imageSlug: img('finished-ordering-politely') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Waiter', speakerColor: 'orange', text: 'Hello and welcome! Table for how many?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Two, please. We have a [[reservation:a table kept for us]] under Kira.' },
    { speaker: 'Waiter', speakerColor: 'orange', text: 'Yes, here you are. Would you like a table or a [[booth:a cozy table with a long seat]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'A booth, please.' },
    { speaker: 'Waiter', speakerColor: 'orange', text: 'Here is the [[menu:list of food and drinks]]. Can I start you off with something to drink?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'll have a glass of water for now, please. My friend is coming soon." },
    { speaker: 'Waiter', speakerColor: 'orange', text: 'Of course. Are you ready to [[order:ask for food]] your [[meal:the food you eat at one time]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I need a moment to [[decide:choose]]. Can you come back in a minute?" },
    { speaker: 'Waiter', speakerColor: 'orange', text: 'No problem. …So, are you ready now?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes. I'll start with the Caesar salad as a [[starter:small food before the main meal]]. For my [[main course:the biggest part of the meal]], I'll have the grilled salmon, please." },
    { speaker: 'Waiter', speakerColor: 'orange', text: 'Would you like to add a [[side:a small extra dish]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, the fries, please. That's all for now, thank you." },
  ],

  matchingExercise: [
    { word: 'MENU', definition: 'A list of food and drinks' },
    { word: 'STARTER', definition: 'Small food before the main meal' },
    { word: 'MAIN COURSE', definition: 'The biggest part of the meal' },
    { word: 'SIDE', definition: 'A small dish with your main course' },
    { word: 'BOOTH', definition: 'A cozy table with a long seat' },
    { word: 'RESERVATION', definition: 'A table kept for you' },
  ],

  fillBlankExercise: [
    { before: 'Table for how', after: '?', answer: 'many' },
    { before: 'We have a', after: 'under Smith.', answer: 'reservation' },
    { before: "I'll", after: 'the chicken, please.', answer: 'have' },
    { before: 'I need a moment to', after: '.', answer: 'decide' },
    { before: "I'll have a salad as a", after: '.', answer: 'side' },
    { before: "That's all for", after: ', thank you.', answer: 'now' },
  ],

  multipleChoiceExercise: [
    { question: 'The waiter asks "Table for how many?". What do you say?', options: ['Two, please.', 'The fish, please.', 'Water, please.', 'Yes, I do.'], correctIndex: 0 },
    { question: 'You are not ready to order. What do you say?', options: ["I'll have the steak.", 'I need a moment to decide.', "That's all.", 'Table for two.'], correctIndex: 1 },
    { question: 'What is a "starter"?', options: ['The biggest part of the meal', 'Small food before the main meal', 'A drink', 'The bill'], correctIndex: 1 },
    { question: 'Which is the most polite way to order?', options: ['Give me chicken.', 'Chicken. Now.', "I'll have the chicken, please.", 'I want chicken.'], correctIndex: 2 },
    { question: 'In the dialogue, what does Kira order as her main course?', options: ['Chicken', 'Steak', 'Grilled salmon', 'Pasta'], correctIndex: 2 },
    { question: 'What side does Kira order?', options: ['A salad', 'Garlic bread', 'Fries', 'Rice'], correctIndex: 2 },
  ],
};
