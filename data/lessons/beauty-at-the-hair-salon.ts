import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const img = (s: string) => `${R2}beauty-at-the-hair-salon-${s}.png`;

export const beautyAtTheHairSalon: Lesson = {
  slug: 'beauty-at-the-hair-salon',
  title: 'At the Hair Salon',
  subtitle: 'Everyday Life · Beauty · Lesson 1',
  level: 'A1-A2',
  description:
    'Learn the words you need at the hair salon: haircut, trim, dye, highlights, wash and blow-dry. Say what you want and understand the hairdresser.',
  heroImage: img('hero'),

  objectives: [
    'Name common salon services and hair products.',
    'Say what haircut or colour you want.',
    'Understand simple questions from a hairdresser.',
  ],

  vocabulary: [
    { word: 'HAIRCUT', partOfSpeech: 'noun', definition: 'When someone cuts your hair to make it shorter or a new shape.', example: "I'm going to the salon for a haircut today.", imageSlug: img('haircut') },
    { word: 'TRIM', partOfSpeech: 'noun / verb', definition: 'To cut a small amount of hair to make it tidy.', example: 'Just a trim, please. Not too short.', imageSlug: img('trim') },
    { word: 'DYE', partOfSpeech: 'verb', definition: 'To change the colour of your hair.', example: 'She dyed her hair blonde last summer.', imageSlug: img('dye') },
    { word: 'HIGHLIGHTS', partOfSpeech: 'noun', definition: 'Thin parts of hair that are lighter than the rest.', example: "I'd like some blonde highlights.", imageSlug: img('highlights') },
    { word: 'ROOTS', partOfSpeech: 'noun', definition: 'The hair closest to your head. It shows your natural colour.', example: 'My roots are starting to show.', imageSlug: img('roots') },
    { word: 'WASH', partOfSpeech: 'noun / verb', definition: 'To clean with water and soap.', example: 'Would you like a wash today?', imageSlug: img('wash') },
    { word: 'BLOW-DRY', partOfSpeech: 'verb', definition: 'To dry your hair with a hairdryer.', example: "I'll blow-dry your hair at the end.", imageSlug: img('blow-dry') },
    { word: 'SHAMPOO', partOfSpeech: 'noun', definition: 'A liquid soap for washing hair.', example: 'This shampoo is for dry hair.', imageSlug: img('shampoo') },
    { word: 'CONDITIONER', partOfSpeech: 'noun', definition: 'A cream you put on your hair after washing to make it soft.', example: 'Conditioner makes my hair soft.', imageSlug: img('conditioner') },
    { word: 'BANGS', partOfSpeech: 'noun', definition: 'Short hair at the front that hangs over your forehead. (UK: fringe)', example: 'She decided to get bangs.', imageSlug: img('bangs') },
  ],

  phrasalVerbs: [
    { phrase: "I'd like a haircut, please.", tag: 'phrase', definition: 'Say what you want when you arrive.', example: '"Hi, I\'d like a haircut, please."', imageSlug: img('id-like-haircut') },
    { phrase: 'Just a trim, please.', tag: 'phrase', definition: 'Ask for only a little to be cut.', example: '"Just a trim, please. I want to keep it long."', imageSlug: img('just-a-trim') },
    { phrase: 'Can you cut off about two inches?', tag: 'phrase', definition: 'Say how much to cut.', example: '"Can you cut off about two inches — five centimetres?"', imageSlug: img('cut-off') },
    { phrase: "I'd like to dye my hair a darker shade.", tag: 'phrase', definition: 'Ask for a new, darker colour.', example: '"I\'d like to dye my hair a darker shade of brown."', imageSlug: img('darker-shade') },
    { phrase: 'Could you touch up my roots?', tag: 'phrase', definition: 'Ask to colour the new hair growing near your head.', example: '"My roots are showing. Could you touch them up?"', inAction: '"Touch up" means to fix small parts. You can touch up roots, paint or makeup.', imageSlug: img('touch-up') },
    { phrase: 'GET RID OF', definition: 'To remove something you don\'t want.', example: 'I want to get rid of my dry ends.', imageSlug: img('get-rid-of') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Hi, I'd like to get a [[haircut:when someone cuts your hair]] today." },
    { speaker: 'Hairdresser', speakerColor: 'orange', text: 'Of course! What would you like to do with your hair?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Something fresh. Maybe cut off about two inches and add some [[highlights:lighter parts of hair]]." },
    { speaker: 'Hairdresser', speakerColor: 'orange', text: "Great! Would you like to touch up your [[roots:hair close to your head]] too? They're starting to show." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, please! And I'd like to [[dye:change the colour of]] my hair a darker shade, maybe brown." },
    { speaker: 'Hairdresser', speakerColor: 'orange', text: "Sure. I'll [[wash:clean with water and soap]] your hair first with a special [[shampoo:liquid soap for hair]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. My ends are very dry. I want to get rid of them." },
    { speaker: 'Hairdresser', speakerColor: 'orange', text: "No problem. I'll use [[conditioner:cream to make hair soft]] and [[blow-dry:dry with a hairdryer]] it at the end. Do you want [[bangs:short hair at the front]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Hmm, not this time. Just the colour and a nice cut, thank you!" },
  ],

  matchingExercise: [
    { word: 'TRIM', definition: 'Cut a small amount of hair' },
    { word: 'DYE', definition: 'Change the colour of your hair' },
    { word: 'HIGHLIGHTS', definition: 'Lighter parts of hair' },
    { word: 'ROOTS', definition: 'Hair closest to your head' },
    { word: 'BLOW-DRY', definition: 'Dry hair with a hairdryer' },
    { word: 'CONDITIONER', definition: 'Cream that makes hair soft' },
  ],

  fillBlankExercise: [
    { before: "I'd like a", after: ', please.', answer: 'haircut' },
    { before: 'Just a', after: ', please. Not too short.', answer: 'trim' },
    { before: 'My', after: 'are starting to show.', answer: 'roots' },
    { before: 'She', after: 'her hair blonde last summer.', answer: 'dyed' },
    { before: 'Would you like a', after: 'today?', answer: 'wash' },
    { before: 'I want to get rid', after: 'my dry ends.', answer: 'of' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "trim" mean?', options: ['Cut a lot of hair', 'Cut a small amount of hair', 'Wash hair', 'Dye hair'], correctIndex: 1 },
    { question: 'What are "highlights"?', options: ['Lights in the salon', 'Lighter parts of hair', 'Short hair at the front', 'A hair product'], correctIndex: 1 },
    { question: 'What do you put on hair after shampoo to make it soft?', options: ['Dye', 'Conditioner', 'Bangs', 'Roots'], correctIndex: 1 },
    { question: 'In the dialogue, what colour does Kira want?', options: ['Blonde', 'Red', 'A darker brown', 'Black'], correctIndex: 2 },
    { question: 'Does Kira want bangs?', options: ['Yes', 'Not this time', 'Only short ones', 'She doesn\'t know'], correctIndex: 1 },
  ],
};
