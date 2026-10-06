import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-discussing-sensitive-topics-${s}.png`;

export const businessDiscussingSensitiveTopics: Lesson = {
  slug: 'business-discussing-sensitive-topics',
  title: 'Discussing Sensitive Topics',
  subtitle: 'C1-C2 · Global Business · Lesson 2',
  level: 'C1-C2',
  description:
    'Some conversations need extra care — salary, missed targets, personal issues, cultural tensions. Learn tactful language to raise sensitive topics constructively and keep trust intact.',
  heroImage: img('hero'),

  objectives: [
    'Open a sensitive conversation tactfully.',
    'Disagree and clarify without causing offence.',
    'Keep the tone constructive and respectful throughout.',
  ],

  vocabulary: [
    { word: 'TACT', partOfSpeech: 'noun', definition: 'The ability to say difficult things without upsetting people.', example: 'She handled the situation with great tact.', imageSlug: img('tact') },
    { word: 'DIPLOMACY', partOfSpeech: 'noun', definition: 'The skill of dealing with people sensitively and effectively.', example: 'Diplomacy is essential when cultures clash.', imageSlug: img('diplomacy') },
    { word: 'CONSTRUCTIVE', partOfSpeech: 'adjective', definition: 'Intended to help or improve.', example: "Let's keep this conversation constructive.", imageSlug: img('constructive') },
    { word: 'TRANSPARENCY', partOfSpeech: 'noun', definition: 'Being open and honest.', example: 'Employees appreciate transparency about salaries.', imageSlug: img('transparency') },
    { word: 'SENSITIVITY', partOfSpeech: 'noun', definition: "Awareness of others' feelings.", example: 'The topic requires sensitivity.', imageSlug: img('sensitivity') },
    { word: 'PERCEPTION', partOfSpeech: 'noun', definition: 'How something is seen or understood.', example: "There's a perception that the team is treated unfairly.", imageSlug: img('perception') },
  ],

  phrasalVerbs: [
    { phrase: 'I understand this might be a sensitive topic.', tag: 'phrase', definition: 'Acknowledge potential discomfort and set a respectful tone.', example: '"I understand this might be a sensitive topic, so please stop me if it\'s uncomfortable."', imageSlug: img('sensitive-topic') },
    { phrase: "I'd like to address this in a constructive way.", tag: 'phrase', definition: 'Show your intention is to help, not criticise.', example: '"There have been some complaints. I\'d like to address this in a constructive way."', imageSlug: img('constructive-way') },
    { phrase: 'From my perspective, I see things slightly differently.', tag: 'phrase', definition: 'A polite way to disagree.', example: '"I understand your view. From my perspective, I see things slightly differently."', inAction: 'Softeners like "slightly", "a little", "perhaps" and "I wonder if…" reduce the force of disagreement — essential in sensitive discussions.', imageSlug: img('slightly-differently') },
    { phrase: 'May I clarify something before we continue?', tag: 'phrase', definition: 'Prevent misinterpretation.', example: '"May I clarify something before we continue? I wasn\'t criticising your team."', imageSlug: img('may-i-clarify') },
    { phrase: "That's a fair point; let's explore it further.", tag: 'phrase', definition: 'Validate a view while keeping the discussion open.', example: '"That\'s a fair point; let\'s explore it further."', imageSlug: img('fair-point') },
    { phrase: 'TREAD CAREFULLY', tag: 'idiom', definition: 'To act or speak with great care in a delicate situation.', example: 'We need to tread carefully when discussing pay.', imageSlug: img('tread-carefully') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Tim, thanks for meeting. I understand this might be a sensitive topic. It's about the comments you made about the Madrid team in Friday's call." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "The joke about long lunches? It was just a joke." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I know it wasn't meant badly, and I'd like to address this in a constructive way. But the [[perception:how it was seen]] in Madrid is that we don't respect their work." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "From my perspective, I see things slightly differently. We joke with each other all the time." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's a fair point; let's explore it further. Humour works when trust is high, but they're new to the group. It requires more [[sensitivity:awareness of feelings]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "May I clarify something? I genuinely value their work. Their numbers are better than ours." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Then tell them that. A short, sincere message would show real [[tact:saying difficult things without upsetting]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "You're right. I'll call their manager today. Thanks for raising it with [[diplomacy:sensitivity and skill]] rather than in front of everyone." },
  ],

  matchingExercise: [
    { word: 'TACT', definition: 'Saying difficult things without upsetting people' },
    { word: 'DIPLOMACY', definition: 'Dealing with people sensitively' },
    { word: 'TRANSPARENCY', definition: 'Being open and honest' },
    { word: 'SENSITIVITY', definition: "Awareness of others' feelings" },
    { word: 'PERCEPTION', definition: 'How something is seen' },
    { word: 'TREAD CAREFULLY', definition: 'Act with great care' },
  ],

  fillBlankExercise: [
    { before: 'I understand this might be a', after: 'topic.', answer: 'sensitive' },
    { before: "I'd like to address this in a", after: 'way.', answer: 'constructive' },
    { before: 'From my perspective, I see things', after: 'differently.', answer: 'slightly' },
    { before: 'May I', after: 'something before we continue?', answer: 'clarify' },
    { before: "That's a fair point; let's", after: 'it further.', answer: 'explore' },
    { before: 'We need to tread', after: 'when discussing pay.', answer: 'carefully' },
  ],

  multipleChoiceExercise: [
    { question: 'What is "tact"?', options: ['A strategy', 'Saying difficult things without upsetting people', 'A rule', 'A joke'], correctIndex: 1 },
    { question: 'Why use softeners like "slightly"?', options: ['To sound unsure', 'To reduce the force of disagreement', 'To end the conversation', 'To be funny'], correctIndex: 1 },
    { question: 'Which phrase validates someone\'s view?', options: ["That's a fair point; let's explore it further.", "You're wrong.", "Let's move on.", 'No comment.'], correctIndex: 0 },
    { question: "In the dialogue, what was Tim's comment about?", options: ['Salaries', 'Long lunches in Madrid', 'A missed deadline', 'A new manager'], correctIndex: 1 },
    { question: 'What will Tim do next?', options: ['Ignore it', 'Call the Madrid manager', 'Send a joke', 'Complain to HR'], correctIndex: 1 },
  ],
};
