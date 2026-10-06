import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}beauty-face-parts-makeup-${s}.png`;

export const beautyFacePartsMakeup: Lesson = {
  slug: 'beauty-face-parts-makeup',
  title: 'Makeup Part 2: Parts of the Face',
  subtitle: 'Everyday Life · Beauty · Lesson 4',
  level: 'A1-A2',
  description:
    'Learn the parts of the face — eyelids, eyelashes, eyebrows, cheeks, forehead — and say where to put each makeup product.',
  heroImage: img('hero'),

  objectives: [
    'Name the parts of the face.',
    'Say where you put each makeup product.',
    'Give simple makeup instructions.',
  ],

  vocabulary: [
    { word: 'FACE', partOfSpeech: 'noun', definition: 'The front part of your head.', example: 'I put foundation on my face.', imageSlug: img('face') },
    { word: 'FOREHEAD', partOfSpeech: 'noun', definition: 'The part of your face above your eyes.', example: 'A little powder on your forehead.', imageSlug: img('forehead') },
    { word: 'EYEBROWS', partOfSpeech: 'noun', definition: 'The lines of hair above your eyes.', example: 'I use a pencil for my eyebrows.', imageSlug: img('eyebrows') },
    { word: 'EYELID', partOfSpeech: 'noun', definition: 'The skin that covers your eye when you close it.', example: 'Put eyeshadow on your eyelids.', imageSlug: img('eyelid') },
    { word: 'EYELASHES', partOfSpeech: 'noun', definition: 'The small hairs on the edge of your eyelids.', example: 'I need mascara for my eyelashes.', imageSlug: img('eyelashes') },
    { word: 'CHEEKS', partOfSpeech: 'noun', definition: 'The sides of your face below your eyes.', example: 'Put a little blush on your cheeks.', imageSlug: img('cheeks') },
    { word: 'NOSE', partOfSpeech: 'noun', definition: 'The part of your face you breathe through.', example: 'My nose gets shiny in summer.', imageSlug: img('nose') },
    { word: 'LIPS', partOfSpeech: 'noun', definition: 'The two soft parts around your mouth: top lip and bottom lip.', example: 'Put lip gloss on your bottom lip.', imageSlug: img('lips') },
    { word: 'CHIN', partOfSpeech: 'noun', definition: 'The bottom part of your face, below your mouth.', example: 'Blend the foundation down to your chin.', imageSlug: img('chin') },
    { word: 'SKIN TONE', partOfSpeech: 'noun', definition: 'The natural colour of your skin.', example: 'This foundation matches my skin tone.', imageSlug: img('skin-tone') },
  ],

  phrasalVerbs: [
    { phrase: 'Put … on your…', tag: 'phrase', definition: 'Say where a product goes.', example: '"Put blush on your cheeks." / "Put mascara on your eyelashes."', imageSlug: img('put-on-your') },
    { phrase: 'Apply… to…', tag: 'phrase', definition: 'A more formal way to say "put on".', example: '"Apply eyeshadow to your eyelids."', imageSlug: img('apply') },
    { phrase: 'Does it match my skin tone?', tag: 'phrase', definition: 'Ask if a colour is right for your skin.', example: '"Can I test this foundation? Does it match my skin tone?"', imageSlug: img('match-skin-tone') },
    { phrase: 'Just a little.', tag: 'phrase', definition: 'Use only a small amount.', example: '"Blush? Just a little, please."', imageSlug: img('just-a-little') },
    { phrase: 'BLEND IN', definition: 'To mix makeup into the skin so you can\'t see the edges.', example: 'Blend in the foundation with a sponge.', inAction: 'Body parts: plural for eyes, eyelashes, eyebrows, cheeks, lips; singular for face, nose, forehead, chin.', imageSlug: img('blend-in') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Kira, can you help me with my makeup for the party tonight?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Of course! First, foundation. Does it match your [[skin tone:natural skin colour]]?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Yes, I think so." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good. Put it on your [[face:front of your head]] — your [[forehead:part above your eyes]], [[nose:part you breathe through]] and [[chin:bottom of your face]] — and blend it in." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Now the eyes?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes. A gold eyeshadow on your [[eyelid:skin over the eye]]s, and mascara on your [[eyelashes:small hairs on the eyelid]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "And my [[eyebrows:hair above the eyes]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Just a little pencil. Then some blush on your [[cheeks:sides of your face]], and red lipstick on your [[lips:soft parts around the mouth]]. Done — you look beautiful!" },
  ],

  matchingExercise: [
    { word: 'FOREHEAD', definition: 'The part above your eyes' },
    { word: 'EYELID', definition: 'The skin that covers your eye' },
    { word: 'EYELASHES', definition: 'Small hairs on the edge of your eyelids' },
    { word: 'CHEEKS', definition: 'The sides of your face' },
    { word: 'CHIN', definition: 'The bottom part of your face' },
    { word: 'SKIN TONE', definition: 'The natural colour of your skin' },
  ],

  fillBlankExercise: [
    { before: 'Put mascara on your', after: '.', answer: 'eyelashes' },
    { before: 'Put blush on your', after: '.', answer: 'cheeks' },
    { before: 'Put eyeshadow on your', after: '.', answer: 'eyelids' },
    { before: 'I use a pencil for my', after: '.', answer: 'eyebrows' },
    { before: 'This foundation matches my skin', after: '.', answer: 'tone' },
    { before: '', after: 'in the foundation with a sponge.', answer: 'Blend' },
  ],

  multipleChoiceExercise: [
    { question: 'Where do you put mascara?', options: ['On your lips', 'On your eyelashes', 'On your chin', 'On your cheeks'], correctIndex: 1 },
    { question: 'What is your "forehead"?', options: ['The part above your eyes', 'The part below your mouth', 'The side of your face', 'Your nose'], correctIndex: 0 },
    { question: 'What does "blend in" mean?', options: ['Remove makeup', 'Mix makeup into the skin', 'Buy makeup', 'Wash your face'], correctIndex: 1 },
    { question: 'In the dialogue, what colour eyeshadow does Kira use?', options: ['Blue', 'Gold', 'Pink', 'Black'], correctIndex: 1 },
    { question: 'Why is Maria doing her makeup?', options: ['For work', 'For a party tonight', 'For a photo', 'For a wedding'], correctIndex: 1 },
  ],
};
