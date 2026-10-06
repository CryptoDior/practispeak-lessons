import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}conversation-c1-managing-stress-${s}.png`;

export const conversationC1ManagingStress: Lesson = {
  slug: 'conversation-c1-managing-stress',
  title: 'How Do You Manage Stress in Everyday Life?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 2',
  level: 'C1-C2',
  description:
    'Discuss stress with depth and precision: regulating emotions, setting boundaries, avoiding cognitive overload and building resilience.',
  heroImage: img('hero'),

  objectives: [
    'Describe personal stress-management strategies in detail.',
    'Use precise vocabulary: resilient, overextended, decompress, cognitive overload.',
    'Acknowledge that coping strategies differ between people.',
  ],

  vocabulary: [
    { word: 'OVEREXTENDED', partOfSpeech: 'adjective', definition: 'Trying to do too much; stretched beyond your limits.', example: 'I feel overextended when I say yes to everything.', imageSlug: img('overextended') },
    { word: 'GROUNDED', partOfSpeech: 'adjective', definition: 'Emotionally stable, calm and sensible.', example: 'Deep breathing helps me stay grounded.', imageSlug: img('grounded') },
    { word: 'HEIGHTENED', partOfSpeech: 'adjective', definition: 'Increased or intensified, often of emotions.', example: 'My stress levels are heightened around deadlines.', imageSlug: img('heightened') },
    { word: 'RESILIENT', partOfSpeech: 'adjective', definition: 'Able to recover quickly from difficulties.', example: 'Small daily habits make me more resilient.', imageSlug: img('resilient') },
    { word: 'DETRIMENTAL', partOfSpeech: 'adjective', definition: 'Harmful or damaging.', example: 'Ignoring stress can be detrimental in the long run.', imageSlug: img('detrimental') },
    { word: 'REGULATE', partOfSpeech: 'verb', definition: 'To manage or control something, such as emotions.', example: "I've learned to regulate my reactions.", imageSlug: img('regulate') },
    { word: 'DECOMPRESS', partOfSpeech: 'verb', definition: 'To relax and release built-up tension.', example: 'I decompress with short breaks during the day.', imageSlug: img('decompress') },
    { word: 'INTERNALIZE', partOfSpeech: 'verb', definition: 'To keep feelings inside instead of expressing them.', example: 'I tend to internalize stress unless I talk to someone.', imageSlug: img('internalize') },
    { word: 'COGNITIVE OVERLOAD', partOfSpeech: 'noun', definition: 'When your mind has too much information to process.', example: 'Multitasking gives me cognitive overload.', imageSlug: img('cognitive-overload') },
  ],

  phrasalVerbs: [
    { phrase: 'I try to regulate my emotional response.', tag: 'phrase', definition: 'You work on controlling how you react to stress.', example: '"When a client is rude, I try to regulate my emotional response before replying."', imageSlug: img('regulate-response') },
    { phrase: 'I break overwhelming moments into manageable parts.', tag: 'phrase', definition: 'You divide big stressors into smaller steps.', example: '"A huge project paralyses me, so I break it into manageable parts."', imageSlug: img('manageable-parts') },
    { phrase: 'I set boundaries to protect my energy.', tag: 'phrase', definition: 'You limit demands on your time and attention.', example: '"I don\'t answer emails after seven. I set boundaries to protect my energy."', imageSlug: img('boundaries') },
    { phrase: 'I check in with myself throughout the day.', tag: 'phrase', definition: 'You monitor your mood and mental state.', example: '"I check in with myself at lunch: am I tense, tired, hungry?"', imageSlug: img('check-in') },
    { phrase: "I focus on what I can control and let go of what I can't.", tag: 'phrase', definition: 'You shift attention away from what is beyond your influence.', example: '"I can\'t control the traffic, so I focus on what I can control."', imageSlug: img('control') },
    { phrase: 'What works for me may not work for everyone.', tag: 'phrase', definition: 'Acknowledge that coping strategies differ.', example: '"Meditation helps me, but what works for me may not work for everyone."', inAction: 'This hedge makes you sound thoughtful rather than prescriptive — useful when discussing personal topics.', imageSlug: img('works-for-me') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "You've seemed remarkably calm this quarter, Kira. How do you manage stress in your everyday life?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It's been a learning curve. Last year I was completely [[overextended:stretched beyond my limits]] — I said yes to everything." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I'm in that phase now. I tend to [[internalize:keep feelings inside]] it all until it explodes." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That can be [[detrimental:harmful]] in the long run. What helped me was setting boundaries to protect my energy. No meetings before ten, no emails after seven." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "And when things get chaotic? My stress feels so [[heightened:intensified]] around deadlines." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I stop multitasking — it gives me [[cognitive overload:too much for the mind to process]]. I break the task into manageable parts and take short walks to [[decompress:release tension]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That sounds very [[grounded:calm and stable]]. I should check in with myself more often." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It does make you more [[resilient:able to recover quickly]]. But what works for me may not work for everyone — experiment and see." },
  ],

  matchingExercise: [
    { word: 'OVEREXTENDED', definition: 'Stretched beyond your limits' },
    { word: 'RESILIENT', definition: 'Able to recover quickly' },
    { word: 'DETRIMENTAL', definition: 'Harmful or damaging' },
    { word: 'DECOMPRESS', definition: 'To release built-up tension' },
    { word: 'INTERNALIZE', definition: 'To keep feelings inside' },
    { word: 'COGNITIVE OVERLOAD', definition: 'Too much information for the mind' },
  ],

  fillBlankExercise: [
    { before: 'I feel', after: 'when I say yes to everything.', answer: 'overextended' },
    { before: 'Deep breathing helps me stay', after: '.', answer: 'grounded' },
    { before: 'Ignoring stress can be', after: 'in the long run.', answer: 'detrimental' },
    { before: 'I set', after: 'to protect my energy.', answer: 'boundaries' },
    { before: 'I try to', after: 'my emotional response.', answer: 'regulate' },
    { before: 'Multitasking gives me cognitive', after: '.', answer: 'overload' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "resilient" mean?', options: ['Easily stressed', 'Able to recover quickly from difficulties', 'Very tired', 'Strict'], correctIndex: 1 },
    { question: 'Which word means "to keep feelings inside"?', options: ['Decompress', 'Internalize', 'Regulate', 'Ground'], correctIndex: 1 },
    { question: 'What is a "boundary" in this context?', options: ['A border between countries', 'A personal limit on demands on your time and energy', 'A deadline', 'A type of exercise'], correctIndex: 1 },
    { question: 'Why say "What works for me may not work for everyone"?', options: ['To sound arrogant', 'To acknowledge that coping strategies differ', 'To end the conversation', 'To disagree strongly'], correctIndex: 1 },
    { question: 'In the dialogue, what boundary does Kira set?', options: ['No lunch at the desk', 'No meetings before ten and no emails after seven', 'Working from home', 'No phone calls'], correctIndex: 1 },
    { question: 'Why does Kira avoid multitasking?', options: ['It is boring', 'It causes cognitive overload', 'Her manager said so', 'It is slow'], correctIndex: 1 },
  ],
};
