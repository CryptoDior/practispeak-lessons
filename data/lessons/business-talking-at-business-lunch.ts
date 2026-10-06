import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-talking-at-business-lunch-${s}.png`;

export const businessTalkingAtBusinessLunch: Lesson = {
  slug: 'business-talking-at-business-lunch',
  title: 'Talking at a Business Lunch',
  subtitle: 'B1-B2 · Networking & Small Talk · Lesson 2',
  level: 'B1-B2',
  description:
    'Learn how to host or join a business lunch: make small talk, order, move smoothly from social chat to business, and offer to pay.',
  heroImage: img('hero'),

  objectives: [
    'Make polite small talk at a business meal.',
    'Order and ask for recommendations.',
    'Move from social talk to business and offer to pay.',
  ],

  vocabulary: [
    { word: 'RESERVATION', partOfSpeech: 'noun', definition: 'An arrangement to keep a table for you.', example: 'I made a reservation for 12:30.', imageSlug: img('reservation') },
    { word: 'WAITER / WAITRESS', partOfSpeech: 'noun', definition: 'A person who serves food and drinks in a restaurant.', example: 'The waiter brought the menus.', imageSlug: img('waiter') },
    { word: 'DISH', partOfSpeech: 'noun', definition: 'A specific type of food served as part of a meal.', example: "The restaurant's signature dish is grilled salmon.", imageSlug: img('dish') },
    { word: 'CLIENT', partOfSpeech: 'noun', definition: 'A person or company that buys products or services from you.', example: "We're meeting a new client for lunch.", imageSlug: img('client') },
    { word: 'BILL', partOfSpeech: 'noun', definition: 'The total amount to pay for food and drinks.', example: 'Could we have the bill, please?', imageSlug: img('bill') },
  ],

  phrasalVerbs: [
    { phrase: 'EAT OUT', definition: 'To have a meal at a restaurant.', example: 'We often eat out with clients.', imageSlug: img('eat-out') },
    { phrase: 'PICK UP (THE BILL)', definition: "To pay for someone else's meal.", example: "I'll pick up the bill today.", imageSlug: img('pick-up-the-bill') },
    { phrase: 'TALK OVER', definition: 'To discuss something, often while eating or meeting.', example: "Let's talk over the details during lunch.", imageSlug: img('talk-over') },
    { phrase: 'SMALL TALK', tag: 'idiom', definition: 'Polite, light conversation about general topics.', example: "She's great at making small talk before meetings.", imageSlug: img('small-talk') },
    { phrase: "PICK SOMEONE'S BRAIN", tag: 'idiom', definition: 'To ask someone for advice or knowledge.', example: 'During lunch, I picked her brain about marketing trends.', imageSlug: img('pick-brain') },
    { phrase: 'Everything looks delicious. What do you recommend?', tag: 'phrase', definition: 'Ask for a recommendation and build friendly conversation.', example: '"Everything looks delicious. What do you recommend?"', imageSlug: img('recommend') },
    { phrase: "Let's enjoy lunch first, then talk business.", tag: 'phrase', definition: 'Keep the tone social before discussing work.', example: '"Let\'s enjoy lunch first, then talk business over coffee."', inAction: 'In many cultures, starting with business right away can feel rude. Small talk first builds trust.', imageSlug: img('enjoy-first') },
    { phrase: "The bill's on me today.", tag: 'phrase', definition: 'A polite way to offer to pay.', example: '"Please, put your wallet away. The bill\'s on me today."', imageSlug: img('on-me') },
    { phrase: "It's been a pleasure having lunch with you.", tag: 'phrase', definition: 'A professional way to end the meal.', example: '"It\'s been a pleasure having lunch with you, Maria."', imageSlug: img('pleasure') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maria, thanks for coming. I've heard great things about this restaurant. I made a [[reservation:a table kept for us]] by the window." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'It looks lovely. Everything looks delicious. What do you recommend?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Their signature [[dish:a type of food on the menu]] is the grilled salmon. Would you like to start with a drink?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Just sparkling water, thanks. So, how was your trip to Lisbon? I saw your photos." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Wonderful, thank you! But let's enjoy lunch first, then talk business. I'd love to [[pick your brain:ask for your advice]] about the travel industry later." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Of course. I really appreciate you taking the time to meet today." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "My pleasure. Now, about the training for your Lisbon team, shall we [[talk over:discuss]] the details over coffee?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Yes, let's. And then, let me get the [[bill:the total amount to pay]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "No, please. You're our [[client:a company that buys our services]]. The bill's on me today." },
  ],

  matchingExercise: [
    { word: 'RESERVATION', definition: 'A table kept for you' },
    { word: 'DISH', definition: 'A type of food on the menu' },
    { word: 'BILL', definition: 'The total amount to pay' },
    { word: 'PICK UP THE BILL', definition: "To pay for someone else's meal" },
    { word: 'SMALL TALK', definition: 'Light, polite conversation' },
    { word: "PICK SOMEONE'S BRAIN", definition: 'To ask someone for advice' },
  ],

  fillBlankExercise: [
    { before: 'I made a', after: 'for 12:30.', answer: 'reservation' },
    { before: 'Everything looks delicious. What do you', after: '?', answer: 'recommend' },
    { before: "Let's enjoy lunch first, then talk", after: '.', answer: 'business' },
    { before: "The bill's on", after: 'today.', answer: 'me' },
    { before: "I'll pick", after: 'the bill.', answer: 'up' },
    { before: "It's been a", after: 'having lunch with you.', answer: 'pleasure' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase offers to pay?', options: ["The bill's on me today.", 'Could we split it?', 'Shall we order dessert?', 'What do you recommend?'], correctIndex: 0 },
    { question: 'What is "small talk"?', options: ['Talking very quietly', 'Light, polite conversation about general topics', 'A short presentation', 'A business negotiation'], correctIndex: 1 },
    { question: 'Why start a business lunch with small talk?', options: ['To waste time', 'It builds trust and feels more polite', 'Because it is the law', 'To avoid ordering'], correctIndex: 1 },
    { question: "What does \"pick someone's brain\" mean?", options: ['Ask someone for advice or knowledge', 'Choose a partner', 'Disagree with someone', 'Order for someone'], correctIndex: 0 },
    { question: 'In the dialogue, what is the signature dish?', options: ['Steak', 'Grilled salmon', 'Pasta', 'Sushi'], correctIndex: 1 },
    { question: 'Who pays for lunch?', options: ['Maria', 'Kira', 'They split the bill', 'The waiter'], correctIndex: 1 },
  ],
};
