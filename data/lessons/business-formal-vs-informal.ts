import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-formal-vs-informal-${s}.png`;

export const businessFormalVsInformal: Lesson = {
  slug: 'business-formal-vs-informal',
  title: 'Formal vs Informal English at Work',
  subtitle: 'B1-B2 · Communication & Culture · Lesson 1',
  level: 'B1-B2',
  description:
    'Learn when to use formal English (clients, managers, emails to new contacts) and when informal English is fine (close colleagues), with matching phrase pairs.',
  heroImage: img('hero'),

  objectives: [
    'Recognise formal and informal language at work.',
    'Choose the right tone for clients, managers and colleagues.',
    'Switch between formal and informal versions of common phrases.',
  ],

  registerAwareness: [
    { context: 'Greeting a new client', register: 'Formal', example: 'Good morning, Ms. Rivera.' },
    { context: 'Greeting a close colleague', register: 'Informal', example: 'Hi Tim!' },
    { context: 'Asking a manager for help', register: 'Formal', example: 'Could you please check this report?' },
    { context: 'Asking a teammate for help', register: 'Informal', example: 'Can you check this?' },
    { context: 'Ending an email to a client', register: 'Formal', example: 'I look forward to hearing from you.' },
    { context: 'Ending a chat message to a friend at work', register: 'Informal', example: 'Talk to you soon!' },
  ],

  vocabulary: [
    { word: 'FORMAL', partOfSpeech: 'adjective', definition: 'Polite and professional; used in business or official situations.', example: 'Use formal language with new clients.', imageSlug: img('formal') },
    { word: 'INFORMAL', partOfSpeech: 'adjective', definition: 'Friendly and relaxed; used with people you know well.', example: 'Informal speech uses short forms like "Hi" or "Thanks!".', imageSlug: img('informal') },
    { word: 'COLLEAGUE', partOfSpeech: 'noun', definition: 'A person you work with.', example: 'I have lunch with my colleagues every Friday.', imageSlug: img('colleague') },
    { word: 'CLIENT', partOfSpeech: 'noun', definition: 'A person or company that buys your services.', example: 'Always greet clients formally.', imageSlug: img('client') },
    { word: 'TONE', partOfSpeech: 'noun', definition: 'The way your voice or words sound to other people.', example: 'A polite tone makes requests sound more professional.', imageSlug: img('tone') },
  ],

  phrasalVerbs: [
    { phrase: 'Good morning / Dear Mr. / Ms. [name]', tag: 'formal', definition: 'Formal greetings for emails and client meetings.', example: '"Dear Mr. Lee, thank you for your message."', imageSlug: img('dear') },
    { phrase: 'Hi / Hello [name]', tag: 'informal', definition: 'Informal greetings for colleagues you know.', example: '"Hi Kira, got a minute?"', imageSlug: img('hi') },
    { phrase: 'Could you please…?', tag: 'formal', definition: 'A polite, formal request.', example: '"Could you please confirm the delivery date?"', imageSlug: img('could-you-please') },
    { phrase: 'Can you…?', tag: 'informal', definition: 'A more direct request for teammates and friends.', example: '"Can you send me that file?"', imageSlug: img('can-you') },
    { phrase: 'Thank you for your assistance.', tag: 'formal', definition: 'A formal way to say thank you.', example: '"Thank you for your assistance with the order."', imageSlug: img('thank-you-assistance') },
    { phrase: 'Thanks a lot!', tag: 'informal', definition: 'An informal thank you.', example: '"Thanks a lot, Tim! You\'re a star."', imageSlug: img('thanks-a-lot') },
    { phrase: 'I look forward to hearing from you.', tag: 'formal', definition: 'A formal email closing.', example: '"I look forward to hearing from you. Kind regards, Kira"', inAction: 'After "look forward to", use the -ing form: "I look forward to hearing", not "to hear".', imageSlug: img('look-forward') },
    { phrase: 'Talk to you soon!', tag: 'informal', definition: 'A friendly way to end a message.', example: '"Great, see you at lunch. Talk to you soon!"', imageSlug: img('talk-soon') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Hey Kira, can you check my email to the new [[client:a company that buys our services]] before I send it?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Sure. Oh, you start with "Hi Sam!" That\'s a bit too [[informal:friendly and relaxed]] for a new client.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'What should I write?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Use something [[formal:polite and professional]]: "Dear Mr. Patel," and change "Can you send the contract?" to "Could you please send the contract?"' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Got it. And I end with "Thanks a lot!"?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Better: "Thank you for your assistance. I look forward to hearing from you." The [[tone:the way your words sound]] matters a lot with clients.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'That sounds much more professional. But with you I can still write "Thanks a lot!", right?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Of course! We're [[colleague:people who work together]]s. Talk to you soon!" },
  ],

  matchingExercise: [
    { word: 'FORMAL', definition: 'Polite and professional' },
    { word: 'INFORMAL', definition: 'Friendly and relaxed' },
    { word: 'CLIENT', definition: 'A person or company that buys your services' },
    { word: 'COLLEAGUE', definition: 'A person you work with' },
    { word: 'TONE', definition: 'How your words sound to others' },
    { word: 'TALK TO YOU SOON!', definition: 'An informal way to end a message' },
  ],

  fillBlankExercise: [
    { before: '', after: 'you please confirm the date?', answer: 'Could' },
    { before: 'Thank you for your', after: '.', answer: 'assistance' },
    { before: 'I look forward to', after: 'from you.', answer: 'hearing' },
    { before: 'Thanks a', after: '! See you later.', answer: 'lot' },
    { before: 'A polite', after: 'makes requests sound more professional.', answer: 'tone' },
    { before: 'Always greet', after: 'formally on the phone.', answer: 'clients' },
  ],

  multipleChoiceExercise: [
    { question: 'Which greeting is best for a new client?', options: ['Hey there!', 'Dear Mr. Patel,', 'Yo Sam,', 'Hiya!'], correctIndex: 1 },
    { question: 'Which request is the most formal?', options: ['Send it.', 'Can you send it?', 'Could you please send it?', 'Send it, OK?'], correctIndex: 2 },
    { question: 'Which closing is informal?', options: ['I look forward to hearing from you.', 'Kind regards,', 'Talk to you soon!', 'Yours sincerely,'], correctIndex: 2 },
    { question: 'Which sentence is correct?', options: ['I look forward to hear from you.', 'I look forward to hearing from you.', 'I look forward hear from you.', 'I looking forward to hear you.'], correctIndex: 1 },
    { question: 'In the dialogue, what is the problem with Tim\'s email?', options: ['It is too long', 'It is too informal for a new client', 'It has no subject', 'It is to the wrong person'], correctIndex: 1 },
    { question: 'What does Tim ask the client to send?', options: ['An invoice', 'The contract', 'A price list', 'A photo'], correctIndex: 1 },
  ],
};
