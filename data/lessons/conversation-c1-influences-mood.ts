import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-c1-influences-mood-${s}.png`;

export const conversationC1InfluencesMood: Lesson = {
  slug: 'conversation-c1-influences-mood',
  title: 'What Influences Your Mood the Most?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 7',
  level: 'C1-C2',
  description:
    'Explore what shapes your emotional state — environment, people, sleep, overstimulation — and discuss emotional triggers with nuance and self-awareness.',
  heroImage: `${img('hero')}?v=3`,

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
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Rosie, can I ask you something? What influences your mood the most?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Good question. Sleep, definitely. Lack of rest tends to affect my [[mindset:way of thinking]] quickly — I become [[irritable:easily annoyed]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Same. For me, it's noise. After the trade fair I felt completely [[overstimulated:overloaded by too much input]]." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I understand. My environment affects me more than I realise. A calm [[atmosphere:feeling of a place]] at home really helps." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "And people? I'm quite [[sensitive to:strongly affected by]] other people's moods." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Absolutely. The people I interact with can completely shift my mood. After a difficult call, I feel [[emotionally drained:mentally exhausted]] for hours." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Have you identified your main [[triggers:something causing a strong reaction]]?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "A few. Now I try to protect my mental space — short breaks, fewer notifications, and saying no more often." },
  ],

  practiceTime: {
    instructions: "Role-play this conversation with your teacher. Complete each blank out loud using the vocabulary and phrases from this lesson, then add your own detail.",
    lines: [
      { speaker: 'Teacher', text: "What influences your mood the most?" },
      { speaker: 'Student', text: "Sleep, definitely. Lack of rest affects my {{mindset}} quickly." },
      { speaker: 'Teacher', text: "How do you feel when you don't sleep enough?" },
      { speaker: 'Student', text: "I become {{irritable}}. What influences your mood the most?" },
      { speaker: 'Teacher', text: "For me, {{sleep/my environment/the people I interact with}} affects my {{mindset}} the most. How do you feel after hours online?" },
      { speaker: 'Student', text: "I feel {{overstimulated}}. I've noticed that {{overstimulation}} drains me." },
      { speaker: 'Teacher', text: "Do other people affect your mood?" },
      { speaker: 'Student', text: "Yes, I'm very {{sensitive to}} other people's moods." },
      { speaker: 'Teacher', text: "How did you feel after your last difficult conversation?" },
      { speaker: 'Student', text: "I felt {{emotionally drained}} for hours." },
      { speaker: 'Teacher', text: "What kind of places are hard for you?" },
      { speaker: 'Student', text: "Loud, crowded places are a {{trigger}} for me. I prefer a calm {{atmosphere}}." },
      { speaker: 'Teacher', text: "What do you do to feel better?" },
      { speaker: 'Student', text: "I try to {{protect my mental space}}." },
    ],
  },

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
    { question: 'In the dialogue, what makes Rosie irritable?', options: ['Noise', 'Lack of sleep', 'Hunger', 'Her colleagues'], correctIndex: 1 },
    { question: 'Why did Oliver feel overstimulated?', options: ['After a trade fair', 'After a holiday', 'After a meeting', 'After a run'], correctIndex: 0 },
  ],
};
