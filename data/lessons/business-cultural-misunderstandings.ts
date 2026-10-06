import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-cultural-misunderstandings-${s}.png`;

export const businessCulturalMisunderstandings: Lesson = {
  slug: 'business-cultural-misunderstandings',
  title: 'Avoiding Cultural Misunderstandings',
  subtitle: 'B1-B2 · Communication & Culture · Lesson 4',
  level: 'B1-B2',
  description:
    'Different cultures have different customs at work. Learn how to talk about cultural differences respectfully, apologize if you offend someone, and find a way that works for everyone.',
  heroImage: img('hero'),

  objectives: [
    'Talk about customs and cultural differences without judging.',
    'Apologize if something you did caused offence.',
    'Show curiosity and find a solution that works for everyone.',
  ],

  vocabulary: [
    { word: 'GESTURE', partOfSpeech: 'noun', definition: 'A movement of your hand or body that shows an idea or feeling.', example: 'A thumbs-up is a positive gesture in many countries.', imageSlug: img('gesture') },
    { word: 'CUSTOM', partOfSpeech: 'noun', definition: 'A traditional way of doing something in a culture.', example: 'Shaking hands is a common custom in many countries.', imageSlug: img('custom') },
    { word: 'OFFEND', partOfSpeech: 'verb', definition: 'To make someone upset or uncomfortable.', example: "It's better to ask politely than risk offending someone.", imageSlug: img('offend') },
    { word: 'POLITENESS', partOfSpeech: 'noun', definition: 'Behaviour that shows respect and good manners.', example: 'He spoke with great politeness during the meeting.', imageSlug: img('politeness') },
    { word: 'SENSITIVE', partOfSpeech: 'adjective', definition: "Showing understanding and care for other people's feelings.", example: 'Be sensitive when you talk about cultural differences.', imageSlug: img('sensitive') },
    { word: 'APOLOGIZE', partOfSpeech: 'verb', definition: 'To say that you are sorry for something.', example: 'Always apologize if your actions upset someone.', imageSlug: img('apologize') },
  ],

  phrasalVerbs: [
    { phrase: "I'm sorry if there was a misunderstanding.", tag: 'phrase', definition: 'Take responsibility politely when communication goes wrong.', example: '"I\'m sorry if there was a misunderstanding about the dress code."', imageSlug: img('sorry-misunderstanding') },
    { phrase: "I didn't mean to offend you.", tag: 'phrase', definition: 'Show that your words or actions were not intentional.', example: '"I didn\'t mean to offend you. I didn\'t know that custom."', imageSlug: img('didnt-mean-to') },
    { phrase: 'In my country, we usually…', tag: 'phrase', definition: 'Share your cultural habits without judging others.', example: '"In my country, we usually use first names with managers."', inAction: 'Use "usually" and "in my country" — it shows it\'s a habit, not a rule everyone must follow.', imageSlug: img('in-my-country') },
    { phrase: "That's interesting, we do it differently.", tag: 'phrase', definition: 'Highlight a difference in a positive way.', example: '"You eat lunch at 2 p.m.? That\'s interesting, we do it differently."', imageSlug: img('do-it-differently') },
    { phrase: 'Could you tell me more about that custom?', tag: 'phrase', definition: 'Show curiosity and respect.', example: '"Could you tell me more about that custom? I\'d like to understand."', imageSlug: img('tell-me-more') },
    { phrase: "Let's find a way that works for everyone.", tag: 'phrase', definition: 'Resolve cultural differences professionally.', example: '"Some people prefer email, some prefer calls. Let\'s find a way that works for everyone."', imageSlug: img('works-for-everyone') },
    { phrase: 'I really appreciate your understanding.', tag: 'phrase', definition: 'End a misunderstanding on a positive note.', example: '"Thanks, Kenji. I really appreciate your understanding."', imageSlug: img('appreciate') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Kira, I think I [[offended:upset]] our Japanese visitor today, but I don\'t know why.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'What happened?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'He gave me his business card with two hands. I took it with one hand and put it in my back pocket.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Ah. In Japan, a business card is treated with respect. It\'s a [[custom:traditional way of doing something]] to look at it carefully and put it on the table.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Oh no. Should I [[apologize:say sorry]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'A short, [[sensitive:caring about his feelings]] message is a good idea: "I\'m sorry if there was a misunderstanding earlier. I didn\'t mean to offend you."' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'And I can ask him to tell me more about Japanese business customs. I\'d really like to learn.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. Curiosity is a great [[gesture:action that shows a feeling]] of [[politeness:respect and good manners]]. Most people appreciate it." },
  ],

  matchingExercise: [
    { word: 'GESTURE', definition: 'A movement that shows an idea or feeling' },
    { word: 'CUSTOM', definition: 'A traditional way of doing something' },
    { word: 'OFFEND', definition: 'To make someone upset' },
    { word: 'SENSITIVE', definition: "Caring about other people's feelings" },
    { word: 'POLITENESS', definition: 'Behaviour that shows respect' },
    { word: 'APOLOGIZE', definition: 'To say sorry' },
  ],

  fillBlankExercise: [
    { before: "I'm sorry if there was a", after: '.', answer: 'misunderstanding' },
    { before: "I didn't mean to", after: 'you.', answer: 'offend' },
    { before: 'In my country, we', after: 'start meetings with small talk.', answer: 'usually' },
    { before: "That's interesting, we do it", after: '.', answer: 'differently' },
    { before: 'Could you tell me more about that', after: '?', answer: 'custom' },
    { before: "Let's find a way that works for", after: '.', answer: 'everyone' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "custom"?', options: ['A tax at the airport', 'A traditional way of doing something in a culture', 'A type of meeting', 'A new rule'], correctIndex: 1 },
    { question: 'Which phrase shares your culture without judging?', options: ['Your way is wrong.', 'In my country, we usually…', 'Everyone does it like this.', 'That\'s strange.'], correctIndex: 1 },
    { question: 'You upset someone by accident. What do you say?', options: ["I didn't mean to offend you.", "It's your problem.", 'Whatever.', "That's interesting."], correctIndex: 0 },
    { question: 'Which phrase shows curiosity and respect?', options: ['Could you tell me more about that custom?', 'Why do you do that?!', 'That\'s weird.', 'Stop it.'], correctIndex: 0 },
    { question: 'In the dialogue, what mistake did Tim make?', options: ['He was late', 'He put the business card in his back pocket', 'He forgot the visitor\'s name', 'He didn\'t shake hands'], correctIndex: 1 },
    { question: 'What does Kira suggest Tim does?', options: ['Ignore it', 'Send a short apology and ask about the customs', 'Give a gift', 'Call his manager'], correctIndex: 1 },
  ],
};
