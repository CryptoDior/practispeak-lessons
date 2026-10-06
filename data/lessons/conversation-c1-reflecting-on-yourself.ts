import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-c1-reflecting-on-yourself-${s}.png`;

export const conversationC1ReflectingOnYourself: Lesson = {
  slug: 'conversation-c1-reflecting-on-yourself',
  title: 'What Recent Situation Made You Reflect on Yourself?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 3',
  level: 'C1-C2',
  description:
    'Talk about self-reflection and personal growth: experiences that challenged your perspective, revealed patterns and led to new self-awareness.',
  heroImage: img('hero'),

  objectives: [
    'Describe an experience that led to self-reflection.',
    'Talk about patterns, realisations and personal growth.',
    'Use psychological vocabulary accurately and naturally.',
  ],

  vocabulary: [
    { word: 'INTROSPECTIVE', partOfSpeech: 'adjective', definition: 'Deeply self-reflective; examining your own mind.', example: 'The experience made me more introspective than usual.', imageSlug: img('introspective') },
    { word: 'TRIGGERING', partOfSpeech: 'adjective', definition: 'Causing a strong emotional reaction.', example: 'The conversation was triggering, but it helped me understand my reactions.', imageSlug: img('triggering') },
    { word: 'VULNERABILITIES', partOfSpeech: 'noun', definition: 'Weak points or emotional sensitivities.', example: 'The situation exposed some of my vulnerabilities.', imageSlug: img('vulnerabilities') },
    { word: 'REALIZATION', partOfSpeech: 'noun', definition: 'A moment of sudden understanding.', example: 'I had a realization that I avoid difficult conversations.', imageSlug: img('realization') },
    { word: 'SELF-AWARENESS', partOfSpeech: 'noun', definition: 'Understanding your own behaviour and emotions.', example: 'I gained a new level of self-awareness.', imageSlug: img('self-awareness') },
    { word: 'SUBCONSCIOUS', partOfSpeech: 'adjective', definition: 'Influencing you without your conscious awareness.', example: 'I was acting out of subconscious fear.', imageSlug: img('subconscious') },
    { word: 'EMOTIONAL CLARITY', partOfSpeech: 'noun', definition: 'Clearly understanding your own feelings.', example: 'After a few days, I gained emotional clarity.', imageSlug: img('emotional-clarity') },
    { word: 'BEHAVIOURAL PATTERNS', partOfSpeech: 'noun', definition: 'Repeated habits or ways of reacting.', example: "I noticed behavioural patterns I'd been ignoring.", imageSlug: img('behavioural-patterns') },
  ],

  phrasalVerbs: [
    { phrase: 'What recent situation made you reflect on yourself?', tag: 'phrase', definition: 'A high-level question about an experience that caused introspection.', example: '"Can I ask you something deep? What recent situation made you reflect on yourself?"', imageSlug: img('question') },
    { phrase: 'It made me reconsider how I handle…', tag: 'phrase', definition: 'The situation caused you to re-evaluate your behaviour.', example: '"It made me reconsider how I handle criticism."', imageSlug: img('reconsider') },
    { phrase: 'I realised I was reacting out of habit, not intention.', tag: 'phrase', definition: 'Your behaviour was automatic rather than thoughtful.', example: '"I snapped at him and realised I was reacting out of habit, not intention."', imageSlug: img('habit-not-intention') },
    { phrase: 'It brought some of my weaknesses to the surface.', tag: 'phrase', definition: 'The event revealed areas you need to improve.', example: '"Leading the team brought some of my weaknesses to the surface."', imageSlug: img('to-the-surface') },
    { phrase: "It made me confront something I'd avoided.", tag: 'phrase', definition: 'You faced something uncomfortable but important.', example: '"Moving abroad made me confront my fear of being alone."', imageSlug: img('confront') },
    { phrase: "I'm still processing what it taught me.", tag: 'phrase', definition: 'You are still learning from the experience.', example: '"It happened a month ago, but I\'m still processing what it taught me."', inAction: 'Using the past perfect ("something I\'d avoided", "patterns I hadn\'t seen") shows that the avoidance came BEFORE the realisation — a hallmark of C1 storytelling.', imageSlug: img('processing') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Can I ask you something deep? What recent situation made you reflect on yourself?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Funny you ask. Last month a colleague gave me some blunt feedback in a meeting, and honestly, it was quite [[triggering:causing a strong emotional reaction]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "How did you react?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Defensively, at first. But later I realised I was reacting out of habit, not intention. It brought some of my [[vulnerabilities:weak points]] to the surface." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That takes a lot of [[self-awareness:understanding your own behaviour]] to admit." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It was a real [[realization:moment of sudden understanding]]. I noticed [[behavioural patterns:repeated ways of reacting]] I hadn't seen before — I always take criticism as a personal attack." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Probably some [[subconscious:without conscious awareness]] fear of failure, no?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Exactly. It made me confront something I'd avoided for years. I'm still processing it, but I have more [[emotional clarity:clear understanding of my feelings]] now." },
  ],

  matchingExercise: [
    { word: 'TRIGGERING', definition: 'Causing a strong emotional reaction' },
    { word: 'VULNERABILITIES', definition: 'Weak points or sensitivities' },
    { word: 'REALIZATION', definition: 'A moment of sudden understanding' },
    { word: 'SUBCONSCIOUS', definition: 'Without conscious awareness' },
    { word: 'SELF-AWARENESS', definition: 'Understanding your own behaviour' },
    { word: 'BEHAVIOURAL PATTERNS', definition: 'Repeated ways of reacting' },
  ],

  fillBlankExercise: [
    { before: 'It made me', after: 'how I handle criticism.', answer: 'reconsider' },
    { before: 'I was reacting out of habit, not', after: '.', answer: 'intention' },
    { before: 'It brought some of my weaknesses to the', after: '.', answer: 'surface' },
    { before: "It made me", after: "something I'd avoided for years.", answer: 'confront' },
    { before: "I'm still", after: 'what it taught me.', answer: 'processing' },
    { before: 'I gained a new level of', after: '.', answer: 'self-awareness' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "subconscious" mean?', options: ['Very conscious', 'Influencing you without your awareness', 'Asleep', 'Logical'], correctIndex: 1 },
    { question: '"It brought my weaknesses to the surface" means…', options: ['It hid my weaknesses', 'It revealed my weaknesses', 'It removed my weaknesses', 'It made me stronger'], correctIndex: 1 },
    { question: 'Which sentence correctly uses the past perfect?', options: ["I confronted something I'd avoided for years.", 'I confront something I avoided for years.', "I'd confront something I avoid.", 'I have confronted something I avoid.'], correctIndex: 0 },
    { question: 'What does "reacting out of habit, not intention" mean?', options: ['Acting deliberately', 'Acting automatically, without thinking', 'Not reacting at all', 'Planning carefully'], correctIndex: 1 },
    { question: 'In the dialogue, what triggered Kira?', options: ['A promotion', 'Blunt feedback in a meeting', 'A holiday', 'A new project'], correctIndex: 1 },
    { question: 'What pattern did Kira notice?', options: ['She is always late', 'She takes criticism as a personal attack', 'She works too much', 'She avoids meetings'], correctIndex: 1 },
  ],
};
