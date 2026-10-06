import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}dining-restaurant-inquiries-${s}.png`;

export const diningRestaurantInquiries: Lesson = {
  slug: 'dining-restaurant-inquiries',
  title: 'Restaurant Inquiries',
  subtitle: 'Food & Drink · Dining · Lesson 2',
  level: 'B1-B2',
  description:
    'Learn how to ask questions in a restaurant: daily specials, dietary needs (vegan, vegetarian, gluten-free), allergies, changes to a dish, and practical requests.',
  heroImage: img('hero'),

  objectives: [
    'Ask about specials and house specialities.',
    'Explain dietary needs and allergies clearly.',
    'Ask to customise a dish and make polite requests.',
  ],

  vocabulary: [
    { word: 'SPECIALS', partOfSpeech: 'noun', definition: 'Dishes offered for a limited time, not on the normal menu.', example: 'What are today\'s specials?', imageSlug: img('specials') },
    { word: 'GLUTEN-FREE', partOfSpeech: 'adjective', definition: 'Without gluten, a protein found in wheat, barley and rye.', example: 'Are these cookies gluten-free?', imageSlug: img('gluten-free') },
    { word: 'VEGAN', partOfSpeech: 'noun / verb', definition: 'Someone who eats and uses no animal products at all.', example: 'Do you have any vegan desserts?', imageSlug: img('vegan') },
    { word: 'VEGETARIAN', partOfSpeech: 'noun', definition: 'Someone who doesn\'t eat meat or fish, but usually eats eggs and dairy.', example: 'Is the soup vegetarian?', imageSlug: img('vegetarian') },
    { word: 'ALLERGIC', partOfSpeech: 'adjective', definition: 'When your body reacts badly to certain things, like nuts.', example: "I'm allergic to peanuts.", imageSlug: img('allergic') },
    { word: 'CONDIMENTS', partOfSpeech: 'noun', definition: 'Things like ketchup or mustard that you add to food.', example: 'The condiments are on the table.', imageSlug: img('condiments') },
    { word: 'SAUCE', partOfSpeech: 'noun', definition: 'A liquid served with food to add flavour.', example: 'Could I have the sauce on the side?', imageSlug: img('sauce') },
    { word: 'DISH', partOfSpeech: 'noun', definition: 'Food prepared in a particular way and served on a plate.', example: "What's the most popular dish here?", imageSlug: img('dish') },
    { word: 'RESTROOM', partOfSpeech: 'noun', definition: 'A room with a toilet in a public place. (UK: toilets)', example: 'Excuse me, where is the restroom?', imageSlug: img('restroom') },
  ],

  phrasalVerbs: [
    { phrase: 'What are the daily specials?', tag: 'phrase', definition: 'Ask about dishes available only today.', example: '"Before we order, what are the daily specials?"', imageSlug: img('daily-specials') },
    { phrase: 'Could you tell me more about this dish?', tag: 'phrase', definition: 'Ask for details about a menu item.', example: '"Could you tell me more about the seafood risotto?"', imageSlug: img('tell-me-more') },
    { phrase: 'Are there any vegetarian / vegan options?', tag: 'phrase', definition: 'Ask about meat-free or animal-free food.', example: '"My friend is vegan. Are there any vegan options?"', imageSlug: img('veg-options') },
    { phrase: "I'm allergic to… Does this dish contain any?", tag: 'phrase', definition: 'Explain an allergy and check the ingredients.', example: '"I\'m allergic to nuts. Does this dish contain any?"', inAction: 'Always say "allergic TO": "I\'m allergic to shellfish." With allergies, it\'s good to be very clear and direct — politeness can come after.', imageSlug: img('allergic-to') },
    { phrase: 'Can I customise this dish?', tag: 'phrase', definition: 'Ask to change something in a dish.', example: '"Can I customise this burger? No onions, extra cheese."', imageSlug: img('customise') },
    { phrase: 'Could I have the sauce on the side?', tag: 'phrase', definition: 'Ask for the sauce in a separate small bowl.', example: '"Could I have the dressing on the side, please?"', imageSlug: img('on-the-side') },
    { phrase: 'What are your house specialities?', tag: 'phrase', definition: 'Ask what the restaurant is famous for.', example: '"It\'s our first time here. What are your house specialities?"', imageSlug: img('house-specialities') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Waiter', speakerColor: 'orange', text: 'Good evening! Here are your menus. Can I get you anything to start?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Thank you. First, what are the daily [[specials:dishes offered only today]]?" },
    { speaker: 'Waiter', speakerColor: 'orange', text: "Today we have a lamb tagine and a mushroom and spinach lasagne." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Could you tell me more about the lasagne? My friend is [[vegetarian:doesn't eat meat or fish]]." },
    { speaker: 'Waiter', speakerColor: 'orange', text: "It's completely vegetarian, with ricotta and a tomato [[sauce:liquid for flavour]]. We can also make it [[gluten-free:without wheat protein]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. And I'm [[allergic:my body reacts badly]] to nuts. Does the tagine contain any?" },
    { speaker: 'Waiter', speakerColor: 'orange', text: "It has almonds on top, but the chef can leave them out." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Great, I'll have the tagine without almonds, please — and could I have the yoghurt on the side?" },
    { speaker: 'Waiter', speakerColor: 'orange', text: "Of course. I'll tell the kitchen about your allergy. Anything else?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's all for now. Oh — where's the [[restroom:the toilet]], please?" },
  ],

  matchingExercise: [
    { word: 'SPECIALS', definition: 'Dishes offered only for a limited time' },
    { word: 'GLUTEN-FREE', definition: 'Without wheat protein' },
    { word: 'VEGAN', definition: 'No animal products at all' },
    { word: 'VEGETARIAN', definition: 'No meat or fish' },
    { word: 'CONDIMENTS', definition: 'Ketchup, mustard and similar' },
    { word: 'ON THE SIDE', definition: 'Served separately' },
  ],

  fillBlankExercise: [
    { before: 'What are the daily', after: '?', answer: 'specials' },
    { before: "I'm allergic", after: 'shellfish.', answer: 'to' },
    { before: 'Are there any', after: 'options? I don\'t eat meat.', answer: 'vegetarian' },
    { before: 'Could I have the sauce on the', after: '?', answer: 'side' },
    { before: 'Can I', after: 'this dish? No onions, please.', answer: 'customise' },
    { before: "What's the most popular", after: 'here?', answer: 'dish' },
  ],

  multipleChoiceExercise: [
    { question: 'What does a vegan NOT eat?', options: ['Only meat', 'Any animal products', 'Only fish', 'Vegetables'], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ["I'm allergic with nuts.", "I'm allergic to nuts.", "I'm allergic of nuts.", 'I allergic nuts.'], correctIndex: 1 },
    { question: 'What does "on the side" mean?', options: ['On the next table', 'Served separately', 'Very hot', 'Without salt'], correctIndex: 1 },
    { question: 'What are "specials"?', options: ['The most expensive dishes', 'Dishes offered for a limited time', 'Drinks only', 'Children\'s meals'], correctIndex: 1 },
    { question: 'In the dialogue, why can\'t Kira eat the tagine as it is?', options: ['It has meat', 'It has almonds and she is allergic to nuts', 'It is too spicy', 'It has gluten'], correctIndex: 1 },
    { question: 'What can the kitchen make gluten-free?', options: ['The tagine', 'The lasagne', 'The dessert', 'The bread'], correctIndex: 1 },
  ],
};
