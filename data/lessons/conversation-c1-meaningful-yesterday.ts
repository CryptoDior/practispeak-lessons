import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}conversation-c1-meaningful-yesterday-${s}.png`;

export const conversationC1MeaningfulYesterday: Lesson = {
  slug: 'conversation-c1-meaningful-yesterday',
  title: 'What Made Yesterday Meaningful or Memorable?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 5',
  level: 'C1-C2',
  description:
    'Talk about meaning, mindfulness and gratitude: small moments with a big impact, deep conversations and feeling truly present.',
  heroImage: img('hero'),

  objectives: [
    'Describe a meaningful moment with emotional nuance.',
    'Talk about mindfulness, connection and gratitude.',
    'Use advanced adjectives: resonant, insightful, nostalgic, reassuring.',
  ],

  vocabulary: [
    { word: 'RESONATE', partOfSpeech: 'verb', definition: 'To connect with you emotionally and stay with you.', example: 'A short conversation resonated with me all evening.', imageSlug: img('resonate') },
    { word: 'INSIGHTFUL', partOfSpeech: 'adjective', definition: 'Showing deep understanding.', example: "Yesterday's chat with my grandmother was surprisingly insightful.", imageSlug: img('insightful') },
    { word: 'NOSTALGIC', partOfSpeech: 'adjective', definition: 'Feeling warm emotion about the past.', example: 'An old song made me nostalgic.', imageSlug: img('nostalgic') },
    { word: 'SIGNIFICANT', partOfSpeech: 'adjective', definition: 'Important or meaningful.', example: 'It was a small but significant moment.', imageSlug: img('significant') },
    { word: 'SUBTLE', partOfSpeech: 'adjective', definition: 'Small and not obvious, but noticeable.', example: 'A subtle shift in my mood changed the whole day.', imageSlug: img('subtle') },
    { word: 'REASSURING', partOfSpeech: 'adjective', definition: 'Comforting; making you feel less worried.', example: 'Her words were very reassuring.', imageSlug: img('reassuring') },
    { word: 'GRATITUDE', partOfSpeech: 'noun', definition: 'The feeling of being thankful.', example: 'I felt a wave of gratitude for my friends.', imageSlug: img('gratitude') },
    { word: 'IN HINDSIGHT', partOfSpeech: 'phrase', definition: 'Looking back on something after it happened.', example: 'In hindsight, it was the best part of the week.', imageSlug: img('hindsight') },
  ],

  phrasalVerbs: [
    { phrase: 'What made yesterday meaningful or memorable for you?', tag: 'phrase', definition: 'A deep question about what gave the day personal value.', example: '"Let\'s skip the small talk. What made yesterday meaningful for you?"', imageSlug: img('question') },
    { phrase: 'Something small had a surprisingly big impact on me.', tag: 'phrase', definition: 'A minor moment felt important.', example: '"A stranger held the door and smiled. Something small had a surprisingly big impact on me."', imageSlug: img('small-big-impact') },
    { phrase: 'I connected with someone on a deeper level.', tag: 'phrase', definition: 'You had a meaningful emotional exchange.', example: '"I finally connected with my new colleague on a deeper level."', imageSlug: img('deeper-level') },
    { phrase: 'I felt present instead of rushing through the day.', tag: 'phrase', definition: 'Your attention was fully in the moment.', example: '"No phone at dinner — I felt present instead of rushing through the day."', imageSlug: img('present') },
    { phrase: 'Something unexpected reminded me of what matters.', tag: 'phrase', definition: 'A small event gave you perspective.', example: '"My daughter\'s drawing reminded me of what really matters."', imageSlug: img('what-matters') },
    { phrase: "It gave me a moment of gratitude I didn't know I needed.", tag: 'phrase', definition: 'A reflective moment brought appreciation.', example: '"Watching the sunset gave me a moment of gratitude I didn\'t know I needed."', inAction: 'Expressions like "I didn\'t know I needed" and "more than I expected" add emotional nuance — they show the meaning was a surprise.', imageSlug: img('gratitude-phrase') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "You look happy today, Kira. What made yesterday meaningful or memorable for you?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Something small had a surprisingly big impact on me. I visited my grandmother and we looked through old photos." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That must have been [[nostalgic:warmly emotional about the past]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Very. But also [[insightful:showing deep understanding]]. She told me how she moved countries at my age, alone. It really [[resonated:connected with me emotionally]] with me." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Because you're thinking about moving abroad too?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Exactly. Her story was so [[reassuring:comforting]]. For once, I felt present instead of rushing through the day." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That sounds like a [[significant:important]] moment." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It was. [[In hindsight:looking back]], it was the best part of my week. It gave me a moment of [[gratitude:feeling thankful]] I didn't know I needed." },
  ],

  matchingExercise: [
    { word: 'RESONATE', definition: 'To connect with you emotionally' },
    { word: 'NOSTALGIC', definition: 'Feeling warm emotion about the past' },
    { word: 'REASSURING', definition: 'Comforting' },
    { word: 'SUBTLE', definition: 'Small and not obvious' },
    { word: 'GRATITUDE', definition: 'The feeling of being thankful' },
    { word: 'IN HINDSIGHT', definition: 'Looking back afterwards' },
  ],

  fillBlankExercise: [
    { before: 'Something small had a surprisingly big', after: 'on me.', answer: 'impact' },
    { before: 'I connected with someone on a deeper', after: '.', answer: 'level' },
    { before: 'I felt', after: 'instead of rushing through the day.', answer: 'present' },
    { before: 'A short conversation', after: 'with me all evening.', answer: 'resonated' },
    { before: 'In', after: ', it was the best part of the week.', answer: 'hindsight' },
    { before: 'An old song made me feel', after: '.', answer: 'nostalgic' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "resonate with someone" mean?', options: ['Make a loud noise', 'Connect with them emotionally', 'Disagree with them', 'Phone them'], correctIndex: 1 },
    { question: 'What does "in hindsight" mean?', options: ['In the future', 'Looking back afterwards', 'Immediately', 'Without seeing'], correctIndex: 1 },
    { question: 'Which word means "comforting"?', options: ['Reassuring', 'Nostalgic', 'Subtle', 'Significant'], correctIndex: 0 },
    { question: '"A moment of gratitude I didn\'t know I needed" suggests…', options: ['She expected it', 'The meaning was a pleasant surprise', 'She was ungrateful', 'She was busy'], correctIndex: 1 },
    { question: 'In the dialogue, who did Kira visit?', options: ['Her mother', 'Her grandmother', 'A friend', 'A colleague'], correctIndex: 1 },
    { question: "Why was the grandmother's story reassuring?", options: ['Kira is thinking of moving abroad too', 'It was funny', 'It was about money', 'Kira was ill'], correctIndex: 0 },
  ],
};
