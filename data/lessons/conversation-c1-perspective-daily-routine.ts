import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-c1-perspective-daily-routine-${s}.png`;

export const conversationC1PerspectiveDailyRoutine: Lesson = {
  slug: 'conversation-c1-perspective-daily-routine',
  title: "What's Your Perspective on Your Daily Routine?",
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 1',
  level: 'C1-C2',
  description:
    'Move beyond describing your routine to evaluating it. Discuss structure vs flexibility, intentional habits and what genuinely adds value to your day.',
  heroImage: img('hero'),

  objectives: [
    'Evaluate your routine with nuanced, reflective language.',
    'Discuss the balance between structure and variety.',
    'Use advanced adjectives such as intentional, restorative and counterproductive.',
  ],

  vocabulary: [
    { word: 'INTROSPECTIVE', partOfSpeech: 'adjective', definition: 'Examining your own thoughts and behaviour closely.', example: 'My mornings have become more introspective as I assess my goals.', imageSlug: img('introspective') },
    { word: 'MONOTONOUS', partOfSpeech: 'adjective', definition: 'Repetitive and lacking variety.', example: 'My routine can feel monotonous when every day looks the same.', imageSlug: img('monotonous') },
    { word: 'INTENTIONAL', partOfSpeech: 'adjective', definition: 'Done deliberately, with a clear purpose.', example: "I'm trying to make my evenings more intentional.", imageSlug: img('intentional') },
    { word: 'UNSUSTAINABLE', partOfSpeech: 'adjective', definition: 'Impossible to maintain in the long term.', example: 'Waking at 4 a.m. every day proved unsustainable.', imageSlug: img('unsustainable') },
    { word: 'RESTORATIVE', partOfSpeech: 'adjective', definition: 'Giving you back energy or a sense of wellbeing.', example: 'A slow morning can be surprisingly restorative.', imageSlug: img('restorative') },
    { word: 'COUNTERPRODUCTIVE', partOfSpeech: 'adjective', definition: 'Having the opposite effect to the one intended.', example: 'Checking my phone first thing is actually counterproductive.', imageSlug: img('counterproductive') },
    { word: 'ADAPTIVE', partOfSpeech: 'adjective', definition: 'Able to adjust easily to new conditions.', example: 'I try to keep my routine adaptive rather than rigid.', imageSlug: img('adaptive') },
    { word: 'RIGID', partOfSpeech: 'adjective', definition: 'Strict and unable to change.', example: 'A rigid schedule leaves no room for the unexpected.', imageSlug: img('rigid') },
  ],

  phrasalVerbs: [
    { phrase: "What's your perspective on your daily routine?", tag: 'phrase', definition: 'A sophisticated way to ask how someone evaluates their day-to-day life.', example: '"Out of curiosity, what\'s your perspective on your daily routine?"', imageSlug: img('perspective-question') },
    { phrase: 'My routine feels structured, but sometimes limiting.', tag: 'phrase', definition: 'Acknowledge efficiency but also a lack of flexibility.', example: '"Honestly, my routine feels structured, but sometimes limiting."', imageSlug: img('structured-limiting') },
    { phrase: 'Small habits have an outsized impact on my mindset.', tag: 'phrase', definition: 'Minor actions influence your mood or productivity significantly.', example: '"Making my bed sounds trivial, but small habits have an outsized impact on my mindset."', imageSlug: img('outsized-impact') },
    { phrase: "I'm trying to create more intentional moments in my day.", tag: 'phrase', definition: 'You aim to live more consciously and purposefully.', example: '"I\'m trying to create more intentional moments — even just ten quiet minutes."', imageSlug: img('intentional-moments') },
    { phrase: 'Certain parts of my routine feel almost automatic.', tag: 'phrase', definition: 'Some habits happen without conscious thought.', example: '"My commute feels almost automatic — I barely remember it."', imageSlug: img('automatic') },
    { phrase: "I've realised balance matters more than rigid discipline.", tag: 'phrase', definition: 'Flexibility can be more sustainable than strict rules.', example: '"After burning out, I\'ve realised balance matters more than rigid discipline."', inAction: 'C1 speakers soften strong claims with hedges like "I\'ve come to realise…", "for me, at least…" — it sounds reflective rather than preachy.', imageSlug: img('balance-discipline') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Out of curiosity, Tim, what's your perspective on your daily routine?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Mixed, honestly. It feels structured, but sometimes limiting. Most days are a bit [[monotonous:repetitive and lacking variety]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I know the feeling. Last year I tried a very [[rigid:strict and unchangeable]] schedule — up at five, gym, cold showers. It was completely [[unsustainable:impossible to maintain]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Ha! What do you do now?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I keep it [[adaptive:able to adjust]]. A few anchors, like a slow coffee and a short walk, which are surprisingly [[restorative:giving back energy]]. The rest changes depending on the day." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That makes sense. I've noticed that checking emails in bed is [[counterproductive:having the opposite effect]] — I start the day stressed." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Exactly. Small habits have an outsized impact on your mindset. I'm trying to be more [[intentional:deliberate, with purpose]] about the first hour." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Maybe I need to be more [[introspective:examining my own thoughts]] about mine. I've realised balance matters more than discipline for its own sake." },
  ],

  matchingExercise: [
    { word: 'MONOTONOUS', definition: 'Repetitive and lacking variety' },
    { word: 'INTENTIONAL', definition: 'Done deliberately, with purpose' },
    { word: 'RESTORATIVE', definition: 'Giving back energy' },
    { word: 'COUNTERPRODUCTIVE', definition: 'Having the opposite effect intended' },
    { word: 'UNSUSTAINABLE', definition: 'Impossible to maintain long-term' },
    { word: 'ADAPTIVE', definition: 'Able to adjust easily' },
  ],

  fillBlankExercise: [
    { before: 'My routine can feel', after: 'when every day looks the same.', answer: 'monotonous' },
    { before: 'A slow morning can be surprisingly', after: '.', answer: 'restorative' },
    { before: 'Checking my phone first thing is actually', after: '.', answer: 'counterproductive' },
    { before: 'Small habits have an', after: 'impact on my mindset.', answer: 'outsized' },
    { before: "I've realised balance matters more than", after: 'discipline.', answer: 'rigid' },
    { before: 'Waking at 4 a.m. every day proved', after: '.', answer: 'unsustainable' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "counterproductive" mean?', options: ['Very productive', 'Having the opposite effect to the one intended', 'Done in a team', 'Done quickly'], correctIndex: 1 },
    { question: 'Which word means "done deliberately, with purpose"?', options: ['Monotonous', 'Intentional', 'Automatic', 'Rigid'], correctIndex: 1 },
    { question: '"Small habits have an outsized impact" means…', options: ['Small habits have little effect', 'Small habits have a surprisingly large effect', 'Habits are too big', 'Habits are expensive'], correctIndex: 1 },
    { question: 'Which phrase sounds most reflective and nuanced?', options: ['Routines are bad.', "I've come to realise balance matters more than rigid discipline.", 'Everyone must wake at five.', 'I don\'t care.'], correctIndex: 1 },
    { question: "In the dialogue, why did Kira's old schedule fail?", options: ['It was too flexible', 'It was rigid and unsustainable', 'She lost her job', 'It was too easy'], correctIndex: 1 },
    { question: 'Which habit does Tim find counterproductive?', options: ['Walking', 'Checking emails in bed', 'Drinking coffee', 'Going to the gym'], correctIndex: 1 },
  ],
};
