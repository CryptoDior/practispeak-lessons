import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-networking-introductions-${s}.png`;

export const businessNetworkingIntroductions: Lesson = {
  slug: 'business-networking-introductions',
  title: 'Networking Phrases and Introductions',
  subtitle: 'B1-B2 · Networking & Small Talk · Lesson 1',
  level: 'B1-B2',
  description:
    'Learn how to introduce yourself at networking events, start conversations with new people, exchange business cards and follow up afterwards.',
  heroImage: img('hero'),

  objectives: [
    'Introduce yourself and others confidently at events.',
    'Use small-talk questions to start and keep a conversation going.',
    'Exchange contact details and arrange to follow up.',
  ],

  vocabulary: [
    { word: 'NETWORKING', partOfSpeech: 'noun', definition: 'Meeting people to share ideas and make business connections.', example: 'Networking events help professionals meet new clients.', imageSlug: img('networking') },
    { word: 'INTRODUCE', partOfSpeech: 'verb', definition: 'To present yourself or someone else to another person.', example: 'Let me introduce you to our marketing manager.', imageSlug: img('introduce') },
    { word: 'COLLEAGUE', partOfSpeech: 'noun', definition: 'A person you work with.', example: 'I came to the event with my colleague.', imageSlug: img('colleague') },
    { word: 'BUSINESS CARD', partOfSpeech: 'noun', definition: 'A small card with your name, job and contact details.', example: 'Can I give you my business card?', imageSlug: img('business-card') },
    { word: 'CONVERSATION', partOfSpeech: 'noun', definition: 'When two or more people talk together.', example: 'We had a great conversation about the project.', imageSlug: img('conversation') },
  ],

  phrasalVerbs: [
    { phrase: 'MEET UP (WITH)', definition: 'To meet someone for a specific reason.', example: "Let's meet up next week to discuss ideas.", imageSlug: img('meet-up') },
    { phrase: 'FOLLOW UP (WITH / ON)', definition: 'To contact someone again after a meeting or event.', example: "I'll follow up with you next week.", imageSlug: img('follow-up') },
    { phrase: 'REACH OUT (TO)', definition: 'To contact someone.', example: 'Feel free to reach out if you have questions.', imageSlug: img('reach-out') },
    { phrase: 'BREAK THE ICE', tag: 'idiom', definition: 'To start a friendly conversation with someone new.', example: 'Kira used small talk about travel to break the ice.', imageSlug: img('break-the-ice') },
    { phrase: 'HIT IT OFF', tag: 'idiom', definition: 'To quickly get along well with someone.', example: 'Tim and Maria hit it off immediately.', imageSlug: img('hit-it-off') },
    { phrase: "I don't think we've met. I'm…", tag: 'phrase', definition: 'Start a conversation naturally and confidently.', example: '"Hi, I don\'t think we\'ve met. I\'m Kira, from Practispeak."', imageSlug: img('havent-met') },
    { phrase: 'What brings you here today?', tag: 'phrase', definition: 'A classic small-talk question at events.', example: '"So, what brings you here today?"', inAction: 'Open questions (What…? How…?) keep the conversation going. Yes/no questions often end it.', imageSlug: img('what-brings-you') },
    { phrase: "Let's keep in touch.", tag: 'phrase', definition: 'Show you would like to stay in contact.', example: '"Here\'s my card. Let\'s keep in touch."', imageSlug: img('keep-in-touch') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Hi, I don't think we've met. I'm Kira, from Practispeak." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Nice to meet you, Kira. I'm Maria, I work for Sunlight Travel. What brings you here today?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm here for the [[networking:meeting people to make business connections]]. We teach English to companies. Oh, let me [[introduce:present]] my [[colleague:a person I work with]], Tim." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Hi Maria. I've heard a lot about your company. You opened an office in Lisbon, right?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Yes, last year! Many of our new staff there need better English, actually." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Really? That's exactly what we do. How long have you been with the company?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Five years. This has been a great [[conversation:talk between people]]. Can I take your [[business card:a card with your contact details]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Of course, here's my card. I'll [[follow up:contact you again]] with some information next week." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Perfect. Let's keep in touch. It was great talking with you both!" },
  ],

  matchingExercise: [
    { word: 'NETWORKING', definition: 'Meeting people to make business connections' },
    { word: 'BUSINESS CARD', definition: 'A small card with your contact details' },
    { word: 'FOLLOW UP', definition: 'To contact someone again after an event' },
    { word: 'REACH OUT', definition: 'To contact someone' },
    { word: 'BREAK THE ICE', definition: 'To start a friendly conversation' },
    { word: 'HIT IT OFF', definition: 'To get along well quickly' },
  ],

  fillBlankExercise: [
    { before: "I don't think we've", after: ". I'm Tim.", answer: 'met' },
    { before: 'What', after: 'you here today?', answer: 'brings' },
    { before: 'Let me', after: 'you to our marketing manager.', answer: 'introduce' },
    { before: "Here's my business", after: '.', answer: 'card' },
    { before: "Let's keep in", after: '.', answer: 'touch' },
    { before: 'Feel free to reach', after: 'if you have questions.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase starts a conversation with someone new?', options: ["I don't think we've met. I'm Kira.", "Let's wrap up.", 'Talk to you soon.', 'The deadline is Friday.'], correctIndex: 0 },
    { question: 'What does "break the ice" mean?', options: ['Start a friendly conversation with someone new', 'Make a drink cold', 'End a meeting', 'Have an argument'], correctIndex: 0 },
    { question: 'Why are open questions useful when networking?', options: ['They are shorter', 'They keep the conversation going', 'They are more formal', 'They end the conversation'], correctIndex: 1 },
    { question: 'What does "hit it off" mean?', options: ['Have a fight', 'Get along well quickly', 'Leave early', 'Start a business'], correctIndex: 1 },
    { question: 'In the dialogue, where did Maria\'s company open a new office?', options: ['Madrid', 'Lisbon', 'London', 'Cape Town'], correctIndex: 1 },
    { question: 'What will Kira do next week?', options: ['Visit Lisbon', 'Follow up with information', 'Call Tim', 'Go to another event'], correctIndex: 1 },
  ],
};
