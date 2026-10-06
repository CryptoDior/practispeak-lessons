import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-tone-and-politeness-${s}.png`;

export const businessToneAndPoliteness: Lesson = {
  slug: 'business-tone-and-politeness',
  title: 'Understanding Tone and Politeness',
  subtitle: 'B1-B2 · Communication & Culture · Lesson 2',
  level: 'B1-B2',
  description:
    'The same message can sound rude or polite depending on your tone. Learn diplomatic phrases to make requests, disagree, apologize and correct misunderstandings.',
  heroImage: img('hero'),

  objectives: [
    'Understand how tone changes the meaning of a message.',
    'Soften requests and disagreement with diplomatic phrases.',
    'Apologize and correct misunderstandings politely.',
  ],

  registerAwareness: [
    { context: 'Asking for something', register: 'Too direct', example: 'Send me the report.' },
    { context: 'Asking for something', register: 'Polite', example: 'Could you please send me the report?' },
    { context: 'Disagreeing', register: 'Too direct', example: "That's wrong." },
    { context: 'Disagreeing', register: 'Diplomatic', example: "I see your point, but I'm not sure that's right." },
    { context: 'Being late with work', register: 'Too direct', example: 'It is late. Whatever.' },
    { context: 'Being late with work', register: 'Polite', example: "I'm sorry for the delay." },
  ],

  vocabulary: [
    { word: 'TONE', partOfSpeech: 'noun', definition: 'The way your voice or words sound to others.', example: 'Her tone sounded calm and professional.', imageSlug: img('tone') },
    { word: 'POLITE', partOfSpeech: 'adjective', definition: 'Showing good manners and respect.', example: 'It\'s polite to say "please" and "thank you".', imageSlug: img('polite') },
    { word: 'IMPOLITE', partOfSpeech: 'adjective', definition: 'Not polite; lacking respect.', example: 'Speaking too loudly in meetings can seem impolite.', imageSlug: img('impolite') },
    { word: 'RESPECTFUL', partOfSpeech: 'adjective', definition: 'Showing care and consideration for another person.', example: 'He gave feedback in a respectful way.', imageSlug: img('respectful') },
    { word: 'DIPLOMATIC', partOfSpeech: 'adjective', definition: 'Saying things carefully so you don\'t upset anyone.', example: 'She gave a diplomatic answer in the meeting.', imageSlug: img('diplomatic') },
  ],

  phrasalVerbs: [
    { phrase: 'Would you mind if…?', tag: 'phrase', definition: 'A very polite request or suggestion.', example: '"Would you mind if I joined the call a few minutes late?"', imageSlug: img('would-you-mind-if') },
    { phrase: "I'm afraid I don't agree.", tag: 'phrase', definition: 'A gentle, respectful way to disagree.', example: '"I\'m afraid I don\'t agree with that approach."', imageSlug: img('afraid') },
    { phrase: 'Thanks for letting me know.', tag: 'phrase', definition: 'A polite reply when someone gives you information.', example: '"The meeting is moved to 3 p.m." → "Thanks for letting me know."', imageSlug: img('letting-me-know') },
    { phrase: "I'm sorry for the delay.", tag: 'phrase', definition: 'A polite apology that accepts responsibility.', example: '"I\'m sorry for the delay. Here is the updated file."', imageSlug: img('sorry-for-delay') },
    { phrase: "That's not quite what I meant.", tag: 'phrase', definition: 'Correct a misunderstanding politely.', example: '"That\'s not quite what I meant. I was talking about next month."', inAction: '"Not quite" is softer than "No, that\'s wrong". It corrects without blaming the other person.', imageSlug: img('not-quite') },
    { phrase: "Let's see if we can find a solution.", tag: 'phrase', definition: 'Keep the tone positive and cooperative.', example: '"I understand the problem. Let\'s see if we can find a solution."', imageSlug: img('find-a-solution') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, the client says my email sounded [[impolite:not polite]]. I don't understand. I only wrote: \"Send the payment today.\"" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ah, I see. The words are clear, but the [[tone:how the words sound]] is very direct. It sounds like an order." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'So what should I write?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Something more [[diplomatic:careful, so nobody is upset]]: "Could you please send the payment by the end of today? Thank you."' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's much more [[polite:with good manners]]. Should I apologize?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'A short apology is good. "I\'m sorry if my last email sounded rude. That\'s not quite what I meant."' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'And if they still can\'t pay today?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Stay [[respectful:showing care for the other person]]: "Thanks for letting me know. Let\'s see if we can find a solution."' },
  ],

  matchingExercise: [
    { word: 'TONE', definition: 'How your words sound to others' },
    { word: 'POLITE', definition: 'Showing good manners' },
    { word: 'IMPOLITE', definition: 'Not polite; lacking respect' },
    { word: 'RESPECTFUL', definition: 'Showing care for others' },
    { word: 'DIPLOMATIC', definition: 'Saying things carefully to avoid upsetting people' },
    { word: 'NOT QUITE', definition: 'A soft way to say "not exactly"' },
  ],

  fillBlankExercise: [
    { before: 'Would you', after: 'if I left early today?', answer: 'mind' },
    { before: "I'm", after: "I don't agree with that.", answer: 'afraid' },
    { before: 'Thanks for letting me', after: '.', answer: 'know' },
    { before: "I'm sorry for the", after: '. Here is the file.', answer: 'delay' },
    { before: "That's not", after: 'what I meant.', answer: 'quite' },
    { before: "Let's see if we can find a", after: '.', answer: 'solution' },
  ],

  multipleChoiceExercise: [
    { question: 'Which request has the most polite tone?', options: ['Send the payment today.', 'Pay now.', 'Could you please send the payment by today?', 'You must pay.'], correctIndex: 2 },
    { question: 'What does "diplomatic" mean?', options: ['Working for the government', 'Saying things carefully so nobody is upset', 'Very direct', 'Very quiet'], correctIndex: 1 },
    { question: 'Someone misunderstood you. What do you say?', options: ["That's not quite what I meant.", "You're wrong.", 'Listen to me!', 'Whatever.'], correctIndex: 0 },
    { question: 'Your colleague tells you the meeting moved. What do you reply?', options: ['Thanks for letting me know.', "I'm afraid I don't agree.", 'Would you mind if…?', 'Go away.'], correctIndex: 0 },
    { question: 'In the dialogue, why did Tim\'s email sound impolite?', options: ['It had spelling mistakes', 'The tone was very direct, like an order', 'It was too long', 'It was in another language'], correctIndex: 1 },
    { question: 'What does Kira suggest if the client can\'t pay today?', options: ['Call the boss', 'Stay respectful and look for a solution', 'Cancel the contract', 'Write in capital letters'], correctIndex: 1 },
  ],
};
