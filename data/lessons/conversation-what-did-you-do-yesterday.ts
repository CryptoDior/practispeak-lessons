import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-what-did-you-do-yesterday-${s}.png`;

export const conversationWhatDidYouDoYesterday: Lesson = {
  slug: 'conversation-what-did-you-do-yesterday',
  title: 'What Did You Do Yesterday?',
  subtitle: 'Everyday Conversation · Lesson 9',
  level: 'A1-A2',
  description:
    'Learn how to talk about yesterday with simple past verbs like went, watched, cooked and studied. Say if it was fun or boring.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "What did you do yesterday?".',
    'Use simple past verbs: went, stayed, watched, cooked, studied, met.',
    'Say if something was fun or boring.',
  ],

  vocabulary: [
    { word: 'YESTERDAY', partOfSpeech: 'adverb', definition: 'The day before today.', example: 'What did you do yesterday?', imageSlug: img('yesterday') },
    { word: 'WENT', partOfSpeech: 'verb', definition: 'The past of "go".', example: 'I went to the mall.', imageSlug: img('went') },
    { word: 'WATCHED', partOfSpeech: 'verb', definition: 'The past of "watch". You looked at TV, a movie or a video.', example: 'I watched a movie.', imageSlug: img('watched') },
    { word: 'COOKED', partOfSpeech: 'verb', definition: 'The past of "cook". You made food.', example: 'I cooked dinner.', imageSlug: img('cooked') },
    { word: 'MET', partOfSpeech: 'verb', definition: 'The past of "meet". You saw a person and spent time together.', example: 'I met my friend.', imageSlug: img('met') },
    { word: 'FUN', partOfSpeech: 'adjective', definition: 'Nice and enjoyable.', example: 'It was fun!', imageSlug: img('fun') },
    { word: 'BORING', partOfSpeech: 'adjective', definition: 'Not interesting. The opposite of fun.', example: 'The movie was boring.', imageSlug: img('boring') },
  ],

  phrasalVerbs: [
    { phrase: 'What did you do yesterday?', tag: 'phrase', definition: 'A question about the day before today.', example: '"What did you do yesterday?" → "I stayed at home."', inAction: 'After "did", use the normal verb: "What did you DO?", not "What did you did?".', imageSlug: img('what-did-you-do') },
    { phrase: 'I went to…', tag: 'phrase', definition: 'Use "went" to talk about places in the past.', example: '"I went to school." / "I went to the mall."', imageSlug: img('i-went-to') },
    { phrase: 'I stayed at home.', tag: 'phrase', definition: 'You did not go out.', example: '"It was raining, so I stayed at home."', imageSlug: img('i-stayed-at-home') },
    { phrase: 'I studied…', tag: 'phrase', definition: 'Talk about learning or homework.', example: '"I studied English for two hours."', imageSlug: img('i-studied') },
    { phrase: 'It was fun. / It was boring.', tag: 'phrase', definition: 'A simple opinion about something in the past.', example: '"How was the party?" → "It was fun!"', imageSlug: img('it-was-fun') },
    { phrase: 'Really? Tell me more.', tag: 'phrase', definition: 'Show interest and ask the person to say more.', example: '"I met a famous singer!" → "Really? Tell me more."', imageSlug: img('tell-me-more') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Hi Tim! What did you do [[yesterday:the day before today]]?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I stayed at home. I [[watched:looked at, past of watch]] a movie.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Was it good?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'No, it was [[boring:not interesting]]. Then I [[cooked:made food, past of cook]] dinner. What about you?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I [[went:past of go]] to the mall with my sister.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Really? Tell me more.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'We bought new shoes. Then I [[met:saw and spent time with, past of meet]] my friend for coffee.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'That sounds nice!' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Yes, it was [[fun:nice and enjoyable]]! In the evening I studied English.' },
  ],

  matchingExercise: [
    { word: 'YESTERDAY', definition: 'The day before today' },
    { word: 'WENT', definition: 'The past of "go"' },
    { word: 'MET', definition: 'The past of "meet"' },
    { word: 'COOKED', definition: 'You made food' },
    { word: 'FUN', definition: 'Nice and enjoyable' },
    { word: 'BORING', definition: 'Not interesting' },
  ],

  fillBlankExercise: [
    { before: 'What did you', after: 'yesterday?', answer: 'do' },
    { before: 'I', after: 'to the mall.', answer: 'went' },
    { before: 'I', after: 'at home and relaxed.', answer: 'stayed' },
    { before: 'I', after: 'a movie on TV.', answer: 'watched' },
    { before: 'I', after: 'my friend for coffee.', answer: 'met' },
    { before: 'The party was great. It was', after: '!', answer: 'fun' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the past of "go"?', options: ['goed', 'went', 'gone', 'going'], correctIndex: 1 },
    { question: 'Which question is correct?', options: ['What did you did yesterday?', 'What you did yesterday?', 'What did you do yesterday?', 'What do you did yesterday?'], correctIndex: 2 },
    { question: 'What is the past of "meet"?', options: ['meeted', 'met', 'meat', 'meets'], correctIndex: 1 },
    { question: 'The opposite of "fun" is…', options: ['happy', 'boring', 'good', 'cool'], correctIndex: 1 },
    { question: 'In the dialogue, what did Tim watch?', options: ['YouTube', 'A football game', 'A movie', 'The news'], correctIndex: 2 },
    { question: 'Where did Kira go?', options: ['To school', 'To the mall', 'To the beach', 'To work'], correctIndex: 1 },
  ],
};
