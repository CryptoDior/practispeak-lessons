import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-relationships-across-cultures-${s}.png`;

export const businessRelationshipsAcrossCultures: Lesson = {
  slug: 'business-relationships-across-cultures',
  title: 'Building Relationships Across Cultures',
  subtitle: 'C1-C2 · Global Business · Lesson 1',
  level: 'C1-C2',
  description:
    'Build trust with international partners: understand hierarchy, formality and etiquette, adapt your communication style and show genuine cultural curiosity.',
  heroImage: img('hero'),

  objectives: [
    'Discuss cultural norms with openness and respect.',
    'Adapt your communication style to different cultures.',
    'Strengthen long-term professional relationships.',
  ],

  vocabulary: [
    { word: 'RAPPORT', partOfSpeech: 'noun', definition: 'A positive, trusting relationship.', example: 'Building rapport takes time in some cultures.', imageSlug: img('rapport') },
    { word: 'HIERARCHY', partOfSpeech: 'noun', definition: 'A system where people are ranked by status or authority.', example: 'In some companies, hierarchy strongly affects communication.', imageSlug: img('hierarchy') },
    { word: 'FORMALITY', partOfSpeech: 'noun', definition: 'The degree of seriousness or politeness in behaviour.', example: 'The level of formality surprised me in Tokyo.', imageSlug: img('formality') },
    { word: 'ETIQUETTE', partOfSpeech: 'noun', definition: 'Accepted rules of polite behaviour.', example: 'Business etiquette varies widely between countries.', imageSlug: img('etiquette') },
    { word: 'RECIPROCITY', partOfSpeech: 'noun', definition: 'Giving and receiving in return.', example: 'Relationships here are built on reciprocity.', imageSlug: img('reciprocity') },
    { word: 'HIGH-CONTEXT', partOfSpeech: 'adjective', definition: 'Describing cultures where meaning is often implicit, not said directly.', example: 'In high-context cultures, "maybe" can mean "no".', imageSlug: img('high-context') },
  ],

  phrasalVerbs: [
    { phrase: "It's important for me to understand how things work in your culture.", tag: 'phrase', definition: 'Show openness and respect for cultural norms.', example: '"Before we plan the launch, it\'s important for me to understand how things work here."', imageSlug: img('understand-culture') },
    { phrase: "I really value our partnership and the trust we've built.", tag: 'phrase', definition: 'Strengthen an existing relationship.', example: '"After five years, I really value the trust we\'ve built."', imageSlug: img('value-partnership') },
    { phrase: "I'd like to learn more about how you prefer to communicate.", tag: 'phrase', definition: 'Avoid misunderstandings by asking directly.', example: '"Do you prefer email or calls? I\'d like to learn how you prefer to communicate."', imageSlug: img('prefer-to-communicate') },
    { phrase: 'Please let me know if my approach ever feels too direct.', tag: 'phrase', definition: 'Show humility and adaptability.', example: '"I\'m used to a very direct style. Please let me know if it ever feels too direct."', inAction: 'Direct cultures (e.g. Netherlands, Germany) value explicit statements; indirect, high-context cultures (e.g. Japan, Korea) rely on tone and context. Adapt rather than judge.', imageSlug: img('too-direct') },
    { phrase: 'Your feedback helps me see things from your perspective.', tag: 'phrase', definition: 'Show empathy and collaboration.', example: '"Thank you — your feedback helps me see things from your perspective."', imageSlug: img('your-perspective') },
    { phrase: 'BREAK THE ICE', tag: 'idiom', definition: 'To start a relaxed conversation with someone new.', example: 'Asking about local food is a great way to break the ice.', imageSlug: img('break-the-ice') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, my first meeting with our Japanese partners didn't go well. I proposed a deal in the first ten minutes and the room went silent." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ah. In many Japanese companies, [[rapport:a trusting relationship]] comes before business. Jumping straight to the deal can feel rushed." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And when I asked if they agreed, they said, \"We'll consider it carefully.\"" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "In a [[high-context:meaning is implicit, not said directly]] culture, that often means \"probably not\". Also, did you address the most senior person first?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No — I spoke mostly to the young manager who spoke the best English. Oh no. [[Hierarchy:ranking by status]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Exactly. Next time, start with: \"It's important for me to understand how things work in your culture.\" Show curiosity about their [[etiquette:rules of polite behaviour]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Should I apologise?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Send a respectful note: \"I really value our partnership. Please let me know if my approach ever feels too direct.\" And bring a small gift next visit — [[reciprocity:giving and receiving in return]] matters." },
  ],

  matchingExercise: [
    { word: 'RAPPORT', definition: 'A positive, trusting relationship' },
    { word: 'HIERARCHY', definition: 'Ranking by status or authority' },
    { word: 'ETIQUETTE', definition: 'Rules of polite behaviour' },
    { word: 'RECIPROCITY', definition: 'Giving and receiving in return' },
    { word: 'HIGH-CONTEXT', definition: 'Meaning is often implicit' },
    { word: 'FORMALITY', definition: 'The degree of seriousness and politeness' },
  ],

  fillBlankExercise: [
    { before: "It's important for me to understand how things work in your", after: '.', answer: 'culture' },
    { before: 'I really value our', after: 'and the trust we\'ve built.', answer: 'partnership' },
    { before: 'Please let me know if my approach ever feels too', after: '.', answer: 'direct' },
    { before: "I'd like to learn more about how you prefer to", after: '.', answer: 'communicate' },
    { before: 'Building', after: 'takes time in some cultures.', answer: 'rapport' },
    { before: 'Asking about local food is a great way to break the', after: '.', answer: 'ice' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "high-context" culture?', options: ['A very modern culture', 'A culture where meaning is often implicit', 'A culture with many rules', 'A culture with tall buildings'], correctIndex: 1 },
    { question: 'What does "rapport" mean?', options: ['A report', 'A positive, trusting relationship', 'A contract', 'A meeting'], correctIndex: 1 },
    { question: 'Which phrase shows humility?', options: ['Please let me know if my approach ever feels too direct.', 'My way is better.', 'Just sign.', 'Why are you so slow?'], correctIndex: 0 },
    { question: "In the dialogue, what was Tim's first mistake?", options: ['He was late', 'He proposed a deal in the first ten minutes', 'He forgot his cards', 'He spoke Japanese'], correctIndex: 1 },
    { question: 'What did "We\'ll consider it carefully" probably mean?', options: ['Yes', 'Probably not', 'Send more information', 'Lower the price'], correctIndex: 1 },
  ],
};
