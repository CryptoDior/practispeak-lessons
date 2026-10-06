import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-storytelling-in-business-${s}.png`;

export const businessStorytellingInBusiness: Lesson = {
  slug: 'business-storytelling-in-business',
  title: 'Using Storytelling in Business',
  subtitle: 'C1-C2 · Presenting with Impact · Lesson 2',
  level: 'C1-C2',
  description:
    'Facts inform, but stories persuade. Learn how to use authentic stories in presentations and meetings to create emotion, make ideas memorable and land a clear lesson.',
  heroImage: img('hero'),

  objectives: [
    'Introduce a story naturally in a business context.',
    'Connect a story to your key message.',
    'Make stories relatable, authentic and memorable.',
  ],

  vocabulary: [
    { word: 'STORYTELLING', partOfSpeech: 'noun', definition: 'Sharing stories to communicate ideas or values.', example: 'Storytelling makes presentations more engaging.', imageSlug: img('storytelling') },
    { word: 'NARRATIVE', partOfSpeech: 'noun', definition: 'The sequence of events that makes up a story.', example: 'Every strong pitch has a clear narrative.', imageSlug: img('narrative') },
    { word: 'RELATE (TO)', partOfSpeech: 'verb', definition: 'To connect something to your own experience.', example: 'The audience could relate to her struggle.', imageSlug: img('relate') },
    { word: 'AUTHENTIC', partOfSpeech: 'adjective', definition: 'Real, true and believable.', example: 'Her story felt authentic and emotional.', imageSlug: img('authentic') },
    { word: 'TURNING POINT', partOfSpeech: 'noun', definition: 'The moment in a story when things change.', example: 'The turning point came when a customer complained publicly.', imageSlug: img('turning-point') },
    { word: 'TAKEAWAY', partOfSpeech: 'noun', definition: 'The key message people should remember.', example: 'The takeaway is simple: listen to your customers.', imageSlug: img('takeaway') },
  ],

  phrasalVerbs: [
    { phrase: 'Let me share a short story.', tag: 'phrase', definition: 'Introduce a story naturally.', example: '"Let me share a short story about how we nearly lost our biggest client."', imageSlug: img('share-a-story') },
    { phrase: 'You can probably relate to this situation.', tag: 'phrase', definition: 'Make the story personal for the audience.', example: '"If you\'ve ever missed a deadline, you can probably relate to this."', imageSlug: img('relate-phrase') },
    { phrase: 'That was the turning point.', tag: 'phrase', definition: 'Mark the moment when everything changed.', example: '"Then the CEO called me directly. That was the turning point."', imageSlug: img('that-was-the-turning-point') },
    { phrase: 'This story shows that…', tag: 'phrase', definition: 'Connect the story to your message.', example: '"This story shows that small changes can make a big difference."', imageSlug: img('story-shows') },
    { phrase: 'The lesson here is…', tag: 'phrase', definition: 'State what people should learn.', example: '"The lesson here is that speed matters more than perfection."', inAction: 'A business story needs three parts: situation → turning point → lesson. Without the lesson, it\'s just an anecdote.', imageSlug: img('lesson-here') },
    { phrase: 'It was a real moment for me because…', tag: 'phrase', definition: 'Add authentic emotion to the story.', example: '"It was a real moment for me because I realised I\'d stopped listening."', imageSlug: img('real-moment') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Kira, my sales presentation is full of numbers, but people look bored. What am I doing wrong?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Numbers inform, but stories persuade. Try some [[storytelling:sharing stories to communicate ideas]]. Do you have a real customer example?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Yes — a small bakery that almost closed last year. Our software helped them double online orders." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. That's an [[authentic:real and believable]] [[narrative:sequence of events in a story]]. Start with: \"Let me share a short story about Anna, who owns a bakery in Porto.\"" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "And then explain how she was struggling? Many small business owners will [[relate:connect with it personally]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Exactly. Then the [[turning point:the moment things changed]]: the day she launched online ordering. Finish with the [[takeaway:key message to remember]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "\"This story shows that digital tools aren't just for big companies.\"" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Brilliant. Keep one number — \"orders doubled in three months\" — and let the story do the rest." },
  ],

  matchingExercise: [
    { word: 'NARRATIVE', definition: 'The sequence of events in a story' },
    { word: 'AUTHENTIC', definition: 'Real and believable' },
    { word: 'RELATE TO', definition: 'Connect to your own experience' },
    { word: 'TURNING POINT', definition: 'The moment when things change' },
    { word: 'TAKEAWAY', definition: 'The key message to remember' },
    { word: 'STORYTELLING', definition: 'Using stories to communicate ideas' },
  ],

  fillBlankExercise: [
    { before: 'Let me share a short', after: '.', answer: 'story' },
    { before: 'You can probably', after: 'to this situation.', answer: 'relate' },
    { before: 'This story', after: 'that small changes matter.', answer: 'shows' },
    { before: 'The', after: 'here is that teamwork pays off.', answer: 'lesson' },
    { before: 'Her story felt', after: 'and emotional.', answer: 'authentic' },
    { before: 'That was the turning', after: '.', answer: 'point' },
  ],

  multipleChoiceExercise: [
    { question: 'What are the three parts of a business story?', options: ['Hook, data, questions', 'Situation, turning point, lesson', 'Intro, joke, end', 'Problem, price, product'], correctIndex: 1 },
    { question: 'What does "authentic" mean?', options: ['Invented', 'Real and believable', 'Very long', 'Funny'], correctIndex: 1 },
    { question: 'What is a "takeaway"?', options: ['Food to go', 'The key message people remember', 'A discount', 'A slide'], correctIndex: 1 },
    { question: 'In the dialogue, whose story does Maria tell?', options: ['A bank manager', 'A bakery owner', 'Her own', 'A competitor'], correctIndex: 1 },
    { question: 'How much did online orders grow?', options: ['They doubled in three months', '10%', 'They tripled in a year', 'They didn\'t change'], correctIndex: 0 },
  ],
};
