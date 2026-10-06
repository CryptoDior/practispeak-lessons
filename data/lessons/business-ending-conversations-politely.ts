import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-ending-conversations-politely-${s}.png`;

export const businessEndingConversationsPolitely: Lesson = {
  slug: 'business-ending-conversations-politely',
  title: 'Ending Conversations Politely',
  subtitle: 'B1-B2 · Networking & Small Talk · Lesson 5',
  level: 'B1-B2',
  description:
    'Leaving a conversation can feel awkward. Learn polite, natural ways to end a conversation, show appreciation and agree to stay in touch.',
  heroImage: img('hero'),

  objectives: [
    'Signal politely that you need to leave.',
    'Thank the other person for their time.',
    'Agree on a follow-up and say goodbye warmly.',
  ],

  vocabulary: [
    { word: 'EXCUSE', partOfSpeech: 'verb', definition: 'To politely ask to leave or stop a conversation (excuse me / excuse myself).', example: 'Please excuse me, I have another meeting.', imageSlug: img('excuse') },
    { word: 'APPRECIATE', partOfSpeech: 'verb', definition: "To feel thankful for something or someone's effort.", example: 'I appreciate you taking the time to meet.', imageSlug: img('appreciate') },
    { word: 'FOLLOW-UP', partOfSpeech: 'noun', definition: 'An action that continues contact after a conversation.', example: "I'll send a follow-up email this afternoon.", imageSlug: img('follow-up') },
    { word: 'WRAP UP', partOfSpeech: 'phrasal verb', definition: 'To finish something.', example: "Let's wrap up in five minutes.", imageSlug: img('wrap-up') },
    { word: 'CATCH', partOfSpeech: 'verb', definition: 'To talk briefly with someone, often before they leave.', example: 'Can I catch you for a minute before you go?', imageSlug: img('catch') },
  ],

  phrasalVerbs: [
    { phrase: 'HEAD OFF', definition: 'To leave or go somewhere.', example: "Let's head off before the traffic starts.", imageSlug: img('head-off') },
    { phrase: 'RUN INTO (SOMEONE)', definition: 'To meet someone unexpectedly.', example: 'I ran into an old colleague at the conference.', imageSlug: img('run-into') },
    { phrase: 'TOUCH BASE', tag: 'idiom', definition: 'To contact someone briefly to share updates.', example: "Let's touch base next week.", imageSlug: img('touch-base') },
    { phrase: 'KEEP IN TOUCH', tag: 'idiom', definition: 'To stay in contact with someone.', example: "It was great meeting you. Let's keep in touch.", imageSlug: img('keep-in-touch') },
    { phrase: "I don't want to keep you. I know you're busy.", tag: 'phrase', definition: 'A polite signal that you respect the other person\'s time.', example: '"Well, I don\'t want to keep you. I know you\'re busy."', inAction: 'This phrase ends the conversation by thinking about THEIR time, not yours. It feels kind, not rude.', imageSlug: img('dont-want-to-keep-you') },
    { phrase: 'I should probably head off now.', tag: 'phrase', definition: 'A casual but polite way to say you need to leave.', example: '"It\'s nearly six. I should probably head off now."', imageSlug: img('should-head-off') },
    { phrase: "Thanks for your time today. I really appreciate it.", tag: 'phrase', definition: 'Close a business conversation respectfully.', example: '"Thanks for your time today, Maria. I really appreciate it."', imageSlug: img('thanks-for-your-time') },
    { phrase: 'Take care, talk soon.', tag: 'phrase', definition: 'A warm, natural goodbye.', example: '"Great seeing you. Take care, talk soon!"', imageSlug: img('take-care') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maria! What a surprise. I didn't expect to [[run into:meet unexpectedly]] you here." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Kira! Great to see you. How's the new project going?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Really well, thanks. We start the Lisbon training next month." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Wonderful. Oh, sorry, I see my manager over there. I don't want to keep you, I know you're busy too." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "No problem at all. Thanks for stopping to chat, I really [[appreciate:feel thankful for]] it." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Of course. Let's [[touch base:contact each other briefly]] next week about the training dates." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Great idea. I'll send you a quick [[follow-up:an email to continue contact]] on Monday." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Perfect. Please [[excuse:allow me to leave]] me. It's been great talking with you." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "You too. Take care, talk soon!" },
  ],

  matchingExercise: [
    { word: 'APPRECIATE', definition: 'To feel thankful for something' },
    { word: 'FOLLOW-UP', definition: 'Contact after a conversation' },
    { word: 'HEAD OFF', definition: 'To leave' },
    { word: 'RUN INTO', definition: 'To meet someone unexpectedly' },
    { word: 'TOUCH BASE', definition: 'To contact someone briefly for updates' },
    { word: 'KEEP IN TOUCH', definition: 'To stay in contact' },
  ],

  fillBlankExercise: [
    { before: "I don't want to", after: "you. I know you're busy.", answer: 'keep' },
    { before: 'I should probably head', after: 'now.', answer: 'off' },
    { before: 'Thanks for your time today. I really', after: 'it.', answer: 'appreciate' },
    { before: "Let's touch", after: 'next week.', answer: 'base' },
    { before: "I'll send a quick", after: 'email after this.', answer: 'follow-up' },
    { before: 'Take', after: ', talk soon.', answer: 'care' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase ends a conversation politely?', options: ["I don't want to keep you. I know you're busy.", 'Go away now.', 'I\'m bored.', 'Stop talking.'], correctIndex: 0 },
    { question: 'What does "touch base" mean?', options: ['Play baseball', 'Contact someone briefly to share updates', 'Visit the office', 'Shake hands'], correctIndex: 1 },
    { question: 'What does "run into someone" mean?', options: ['Crash into them', 'Meet them unexpectedly', 'Run a race with them', 'Avoid them'], correctIndex: 1 },
    { question: 'Why is "I don\'t want to keep you" a kind phrase?', options: ['It focuses on the other person\'s time', 'It is very informal', 'It means you are angry', 'It asks a question'], correctIndex: 0 },
    { question: 'In the dialogue, where does Maria need to go?', options: ['To the airport', 'To talk to her manager', 'To lunch', 'Home'], correctIndex: 1 },
    { question: 'When will Kira send a follow-up?', options: ['Today', 'On Monday', 'Next month', 'On Friday'], correctIndex: 1 },
  ],
};
