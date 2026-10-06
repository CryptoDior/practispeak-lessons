import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}beauty-makeup-cosmetics-${s}.png`;

export const beautyMakeupCosmetics: Lesson = {
  slug: 'beauty-makeup-cosmetics',
  title: 'Makeup and Cosmetics',
  subtitle: 'Everyday Life · Beauty · Lesson 3',
  level: 'A1-A2',
  description:
    'Learn the names of common makeup products — lipstick, mascara, foundation, blush — and how to shop for them in English.',
  heroImage: img('hero'),

  objectives: [
    'Name common makeup products.',
    'Ask for products in a shop.',
    'Talk about colours and types of makeup.',
  ],

  vocabulary: [
    { word: 'LIPSTICK', partOfSpeech: 'noun', definition: 'A coloured stick for your lips.', example: 'I like this red lipstick.', imageSlug: img('lipstick') },
    { word: 'LIP GLOSS', partOfSpeech: 'noun', definition: 'A shiny liquid for your lips.', example: 'Lip gloss makes my lips shiny.', imageSlug: img('lip-gloss') },
    { word: 'MASCARA', partOfSpeech: 'noun', definition: 'A black liquid for your eyelashes.', example: 'I need new mascara.', imageSlug: img('mascara') },
    { word: 'EYELINER', partOfSpeech: 'noun', definition: 'A pencil or liquid to draw a line around your eyes.', example: 'Can you show me how to use this eyeliner?', imageSlug: img('eyeliner') },
    { word: 'EYESHADOW', partOfSpeech: 'noun', definition: 'A coloured powder for your eyelids.', example: 'This blue eyeshadow is beautiful.', imageSlug: img('eyeshadow') },
    { word: 'BLUSH', partOfSpeech: 'noun', definition: 'A pink or peach powder for your cheeks.', example: 'Do you have a natural blush colour?', imageSlug: img('blush') },
    { word: 'FOUNDATION', partOfSpeech: 'noun', definition: 'A cream or liquid for your face to make the skin one colour.', example: 'Which foundation is good for oily skin?', imageSlug: img('foundation') },
    { word: 'POWDER', partOfSpeech: 'noun', definition: 'A light, dry makeup for your face.', example: 'I need a good powder for my face.', imageSlug: img('powder') },
    { word: 'CONCEALER', partOfSpeech: 'noun', definition: 'A cream to hide spots and dark circles under your eyes.', example: 'I use concealer when I\'m tired.', imageSlug: img('concealer') },
    { word: 'MAKEUP BRUSH', partOfSpeech: 'noun', definition: 'A brush to put makeup on.', example: 'I need a new makeup brush set.', imageSlug: img('makeup-brush') },
  ],

  phrasalVerbs: [
    { phrase: "I'm looking for…", tag: 'phrase', definition: 'Tell the shop assistant what you want.', example: '"I\'m looking for some makeup."', imageSlug: img('looking-for') },
    { phrase: 'Do you have…?', tag: 'phrase', definition: 'Ask if the shop sells something.', example: '"Do you have waterproof mascara?"', imageSlug: img('do-you-have') },
    { phrase: 'What colour do you like?', tag: 'phrase', definition: 'The assistant asks about colours.', example: '"What colour do you like?" → "I like peach."', imageSlug: img('what-colour') },
    { phrase: 'Would you like to try it?', tag: 'phrase', definition: 'The assistant offers a test.', example: '"This red is very popular. Would you like to try it?"', imageSlug: img('try-it') },
    { phrase: "It's good for all skin types.", tag: 'phrase', definition: 'The product works for every skin: dry, oily or normal.', example: '"This powder is good for all skin types."', inAction: 'Skin types: dry, oily, normal, combination and sensitive. Ask: "Is this good for oily skin?"', imageSlug: img('all-skin-types') },
    { phrase: 'PUT ON', definition: 'To start wearing makeup or clothes.', example: 'I put on my lipstick before work.', imageSlug: img('put-on') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Clerk', speakerColor: 'orange', text: 'Hi! How can I help you today?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Hello. I'm looking for some makeup. I need a good [[powder:light dry makeup for the face]]." },
    { speaker: 'Clerk', speakerColor: 'orange', text: 'Do you want loose powder or compact powder?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Compact, please. I also need [[lipstick:colour for your lips]].' },
    { speaker: 'Clerk', speakerColor: 'orange', text: 'What colour do you like? This red is very popular. Would you like to try it?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, please. Oh, I like it! Do you have [[mascara:black liquid for eyelashes]]?" },
    { speaker: 'Clerk', speakerColor: 'orange', text: 'Yes. Do you want waterproof mascara? It makes your lashes look longer.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. And some [[blush:powder for your cheeks]] — a peach colour." },
    { speaker: 'Clerk', speakerColor: 'orange', text: "This peach blush is very natural. It's great for every day." },
  ],

  matchingExercise: [
    { word: 'LIPSTICK', definition: 'A coloured stick for your lips' },
    { word: 'MASCARA', definition: 'A black liquid for your eyelashes' },
    { word: 'BLUSH', definition: 'A pink powder for your cheeks' },
    { word: 'FOUNDATION', definition: 'A cream for an even skin colour' },
    { word: 'CONCEALER', definition: 'A cream to hide spots' },
    { word: 'EYESHADOW', definition: 'A coloured powder for your eyelids' },
  ],

  fillBlankExercise: [
    { before: "I'm looking", after: 'some makeup.', answer: 'for' },
    { before: 'Do you', after: 'waterproof mascara?', answer: 'have' },
    { before: 'What', after: 'do you like?', answer: 'colour' },
    { before: 'Would you like to', after: 'it?', answer: 'try' },
    { before: 'I need a new makeup', after: 'set.', answer: 'brush' },
    { before: 'I put', after: 'my lipstick before work.', answer: 'on' },
  ],

  multipleChoiceExercise: [
    { question: 'What do you use on your eyelashes?', options: ['Lipstick', 'Mascara', 'Blush', 'Foundation'], correctIndex: 1 },
    { question: 'What is "concealer" for?', options: ['Lips', 'Hiding spots and dark circles', 'Eyelashes', 'Hair'], correctIndex: 1 },
    { question: 'Where do you put blush?', options: ['On your lips', 'On your cheeks', 'On your eyelids', 'On your nails'], correctIndex: 1 },
    { question: 'In the dialogue, what colour lipstick does Kira try?', options: ['Pink', 'Red', 'Peach', 'Brown'], correctIndex: 1 },
    { question: 'What kind of mascara does Kira buy?', options: ['Blue', 'Waterproof', 'Cheap', 'Brown'], correctIndex: 1 },
  ],
};
