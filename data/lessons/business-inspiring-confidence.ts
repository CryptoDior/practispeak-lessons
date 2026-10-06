import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-inspiring-confidence-${s}.png`;

export const businessInspiringConfidence: Lesson = {
  slug: 'business-inspiring-confidence',
  title: 'Inspiring Confidence in Audiences',
  subtitle: 'C1-C2 · Presenting with Impact · Lesson 6',
  level: 'C1-C2',
  description:
    'Great speakers don\'t just inform — they inspire. Learn language that shows conviction, builds trust, engages emotionally and leaves people ready to act.',
  heroImage: img('hero'),

  objectives: [
    'Express conviction and confidence in your ideas.',
    'Engage audiences with empathy and authenticity.',
    'Close with an inspiring, memorable message.',
  ],

  vocabulary: [
    { word: 'CONVICTION', partOfSpeech: 'noun', definition: 'A strong belief in something.', example: 'She spoke with real conviction.', imageSlug: img('conviction') },
    { word: 'CREDIBILITY', partOfSpeech: 'noun', definition: 'The quality of being trusted.', example: 'Credibility and confidence go hand in hand.', imageSlug: img('credibility') },
    { word: 'AUTHENTICITY', partOfSpeech: 'noun', definition: 'Being genuine and true to yourself.', example: 'Her authenticity made the speech powerful.', imageSlug: img('authenticity') },
    { word: 'ENGAGE', partOfSpeech: 'verb', definition: "To attract and hold people's attention.", example: 'He engaged the audience by asking for their ideas.', imageSlug: img('engage') },
    { word: 'EMPATHY', partOfSpeech: 'noun', definition: "The ability to understand and share others' feelings.", example: 'The audience felt his empathy.', imageSlug: img('empathy') },
    { word: 'INSPIRE', partOfSpeech: 'verb', definition: 'To make people feel motivated and ready to act.', example: 'Great leaders inspire action.', imageSlug: img('inspire') },
  ],

  phrasalVerbs: [
    { phrase: 'I believe in this idea because…', tag: 'phrase', definition: 'Show conviction and personal connection.', example: '"I believe in this idea because it truly helps our customers."', imageSlug: img('believe') },
    { phrase: "I'm confident that…", tag: 'phrase', definition: 'Express trust in a plan or outcome.', example: '"I\'m confident that our new approach will succeed."', imageSlug: img('confident-that') },
    { phrase: "I know this change isn't easy.", tag: 'phrase', definition: 'Show empathy for the audience\'s concerns.', example: '"I know this change isn\'t easy, and I\'ve felt that uncertainty too."', imageSlug: img('not-easy') },
    { phrase: "Let's take a moment to reflect on…", tag: 'phrase', definition: 'Engage the audience and build emotional connection.', example: '"Let\'s take a moment to reflect on what this means for us."', imageSlug: img('reflect') },
    { phrase: 'Together, we can achieve…', tag: 'phrase', definition: 'Inspire teamwork and unity.', example: '"Together, we can achieve even greater success."', imageSlug: img('together') },
    { phrase: 'The key message I want to leave you with is…', tag: 'phrase', definition: 'End with a memorable, inspiring message.', example: '"The key message I want to leave you with is this: our best years are ahead."', inAction: 'Confident speakers use "I" for conviction ("I believe…") and "we" for unity ("Together, we…"). Avoid weak fillers like "I just think maybe…".', imageSlug: img('key-message') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Kira, I have to announce the merger to 300 staff tomorrow. People are anxious. How do I [[inspire:make people motivated]] confidence?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Start with [[empathy:understanding their feelings]]. Say: \"I know this change isn't easy, and I've felt that uncertainty too.\"" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That feels honest. Then the facts?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, clearly and simply. Then show [[conviction:strong belief]]: \"I believe in this merger because it gives us the scale to compete globally.\"" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Should I take questions during the talk?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ask a few rhetorical questions to [[engage:hold their attention]] them, and leave proper time at the end. Your [[authenticity:being genuine]] matters more than perfect wording." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "And how do I finish?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "\"The key message I want to leave you with is: together, we can achieve more than either company could alone.\" Confident, warm and [[credibility:trusted]] — that's what people remember." },
  ],

  matchingExercise: [
    { word: 'CONVICTION', definition: 'A strong belief' },
    { word: 'AUTHENTICITY', definition: 'Being genuine' },
    { word: 'EMPATHY', definition: "Understanding others' feelings" },
    { word: 'ENGAGE', definition: 'Hold people\'s attention' },
    { word: 'INSPIRE', definition: 'Make people motivated to act' },
    { word: 'CREDIBILITY', definition: 'Being trusted' },
  ],

  fillBlankExercise: [
    { before: 'I', after: 'in this idea because it helps our customers.', answer: 'believe' },
    { before: "I'm", after: 'that our new approach will succeed.', answer: 'confident' },
    { before: "Let's take a moment to", after: 'on what this means.', answer: 'reflect' },
    { before: '', after: ', we can achieve even greater success.', answer: 'Together' },
    { before: 'The key message I want to', after: 'you with is…', answer: 'leave' },
    { before: 'She spoke with real', after: '.', answer: 'conviction' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase shows empathy?', options: ["I know this change isn't easy.", 'Just do it.', 'The data shows…', 'Next slide.'], correctIndex: 0 },
    { question: 'Which phrase sounds most confident?', options: ['I just think maybe…', "I'm confident that…", 'I\'m not sure, but…', 'Possibly…'], correctIndex: 1 },
    { question: 'Why use "we" and "together"?', options: ['To sound formal', 'To build unity and shared purpose', 'To avoid responsibility', 'To shorten the speech'], correctIndex: 1 },
    { question: 'In the dialogue, what is Maria announcing?', options: ['Job cuts', 'A merger', 'A new office', 'A new CEO'], correctIndex: 1 },
    { question: 'How many staff will hear the announcement?', options: ['30', '100', '300', '3,000'], correctIndex: 2 },
  ],
};
