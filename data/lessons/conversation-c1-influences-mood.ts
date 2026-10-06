import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-c1-influences-mood-${s}.png`;

export const conversationC1InfluencesMood: Lesson = {
  slug: 'conversation-c1-influences-mood',
  title: 'What Influences Your Mood the Most?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 7',
  level: 'C1-C2',
  description:
    'Explore what shapes your emotional state — environment, people, sleep, overstimulation — and discuss emotional triggers with nuance and self-awareness.',
  heroImage: img('hero'),

  objectives: [
    'Discuss factors that affect your mood with precision.',
    'Describe emotional triggers and how you respond.',
    'Use vocabulary such as overstimulated, irritable and emotionally drained.',
  ],

  vocabulary: [
    { word: 'OVERSTIMULATED', partOfSpeech: 'adjective', definition: 'Overloaded by too much noise, activity or information.', example: 'I feel overstimulated after hours online.', imageSlug: img('overstimulated') },
    { word: 'IRRITABLE', partOfSpeech: 'adjective', definition: 'Easily annoyed or frustrated.', example: 'Lack of sleep makes me irritable.', imageSlug: img('irritable') },
    { word: 'SENSITIVE TO', partOfSpeech: 'adjective', definition: 'Strongly affected by something.', example: "I'm very sensitive to negative energy.", imageSlug: img('sensitive-to') },
    { word: 'EMOTIONALLY DRAINED', partOfSpeech: 'adjective', definition: 'Mentally exhausted by emotional demands.', example: 'After the conflict, I felt emotionally drained.', imageSlug: img('emotionally-drained') },
    { word: 'ATMOSPHERE', partOfSpeech: 'noun', definition: 'The feeling or mood of a place.', example: 'The atmosphere in the office was tense.', imageSlug: img('atmosphere') },
    { word: 'TRIGGER', partOfSpeech: 'noun', definition: 'Something that causes a strong emotional reaction.', example: 'Loud, crowded places are a trigger for me.', imageSlug: img('trigger') },
    { word: 'MINDSET', partOfSpeech: 'noun', definition: 'Your general way of thinking.', example: 'Poor sleep affects my mindset quickly.', imageSlug: img('mindset') },
  ],

  phrasalVerbs: [
    { phrase: 'What influences your mood the most?', tag: 'phrase', definition: 'A reflective question about emotional triggers.', example: '"Honestly, what influences your mood the most?"', imageSlug: img('question') },
    { phrase: 'My environment affects me more than I realise.', tag: 'phrase', definition: 'Your surroundings strongly influence your emotions.', example: '"A messy desk ruins my focus. My environment affects me more than I realise."', imageSlug: img('environment') },
    { phrase: 'The people I interact with can completely shift my mood.', tag: 'phrase', definition: 'Social interactions strongly affect how you feel.', example: '"One negative meeting and the people I interact with can shift my whole mood."', imageSlug: img('people') },
    { phrase: 'Lack of rest tends to affect my mindset quickly.', tag: 'phrase', definition: 'Poor sleep changes your emotional balance.', example: '"After two bad nights, lack of rest affects my mindset quickly."', imageSlug: img('lack-of-rest') },
    { phrase: "I've noticed that overstimulation drains me.", tag: 'phrase', definition: 'Too much noise or information exhausts you.', example: '"Open-plan offices are hard. I\'ve noticed that overstimulation drains me."', imageSlug: img('overstimulation') },
    { phrase: 'I try to protect my mental space.', tag: 'phrase', definition: 'You consciously avoid emotional exhaustion.', example: '"I mute group chats in the evening. I try to protect my mental space."', inAction: 'Phrases like "tends to", "I\'ve noticed that…" and "more than I realise" show careful self-observation rather than absolute statements.', imageSlug: img('mental-space') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, can I ask you something? What influences your mood the most?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good question. Sleep, definitely. Lack of rest tends to affect my [[mindset:way of thinking]] quickly — I become [[irritable:easily annoyed]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Same. For me, it's noise. After the trade fair I felt completely [[overstimulated:overloaded by too much input]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I understand. My environment affects me more than I realise. A calm [[atmosphere:feeling of a place]] at home really helps." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And people? I'm quite [[sensitive to:strongly affected by]] other people's moods." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Absolutely. The people I interact with can completely shift my mood. After a difficult call, I feel [[emotionally drained:mentally exhausted]] for hours." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Have you identified your main [[triggers:something causing a strong reaction]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "A few. Now I try to protect my mental space — short breaks, fewer notifications, and saying no more often." },
  ],

  matchingExercise: [
    { word: 'OVERSTIMULATED', definition: 'Overloaded by too much input' },
    { word: 'IRRITABLE', definition: 'Easily annoyed' },
    { word: 'EMOTIONALLY DRAINED', definition: 'Mentally exhausted by emotions' },
    { word: 'ATMOSPHERE', definition: 'The feeling or mood of a place' },
    { word: 'TRIGGER', definition: 'Something that causes a strong reaction' },
    { word: 'MINDSET', definition: 'Your general way of thinking' },
  ],

  fillBlankExercise: [
    { before: 'My environment affects me more than I', after: '.', answer: 'realise' },
    { before: 'Lack of sleep makes me', after: '.', answer: 'irritable' },
    { before: "I'm very sensitive", after: 'negative energy.', answer: 'to' },
    { before: 'I try to protect my mental', after: '.', answer: 'space' },
    { before: 'Lack of rest', after: 'to affect my mindset quickly.', answer: 'tends' },
    { before: 'I feel', after: 'after hours online.', answer: 'overstimulated' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "irritable" mean?', options: ['Very relaxed', 'Easily annoyed', 'Very tired', 'Very happy'], correctIndex: 1 },
    { question: 'Which preposition follows "sensitive"?', options: ['sensitive of', 'sensitive to', 'sensitive at', 'sensitive with'], correctIndex: 1 },
    { question: 'Which phrase shows careful self-observation?', options: ['I always hate noise.', "I've noticed that overstimulation drains me.", 'Noise is bad.', 'Everyone hates noise.'], correctIndex: 1 },
    { question: 'What does "emotionally drained" mean?', options: ['Full of energy', 'Mentally exhausted by emotions', 'Dehydrated', 'Very angry'], correctIndex: 1 },
    { question: 'In the dialogue, what makes Kira irritable?', options: ['Noise', 'Lack of sleep', 'Hunger', 'Her colleagues'], correctIndex: 1 },
    { question: 'Why did Tim feel overstimulated?', options: ['After a trade fair', 'After a holiday', 'After a meeting', 'After a run'], correctIndex: 0 },
  ],
};
