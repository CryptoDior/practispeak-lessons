import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-leading-change-${s}.png`;

export const businessLeadingChange: Lesson = {
  slug: 'business-leading-change',
  title: 'Leading Change',
  subtitle: 'C1-C2 · Leadership Communication · Lesson 6',
  level: 'C1-C2',
  description:
    'Guide people through organisational change: acknowledge emotions, explain the why, handle resistance with empathy and keep communication transparent.',
  heroImage: img('hero'),

  objectives: [
    'Acknowledge the emotional impact of change.',
    'Explain why change is necessary with transparency.',
    'Respond to resistance and build unity.',
  ],

  vocabulary: [
    { word: 'TRANSITION', partOfSpeech: 'noun', definition: 'The process of moving from one state to another.', example: 'The transition to the new system will take six months.', imageSlug: img('transition') },
    { word: 'ADAPTABILITY', partOfSpeech: 'noun', definition: 'The ability to adjust quickly to new conditions.', example: 'Adaptability is essential in a changing market.', imageSlug: img('adaptability') },
    { word: 'RESISTANCE', partOfSpeech: 'noun', definition: 'Refusal or difficulty in accepting change.', example: 'There was strong resistance to the new policy.', imageSlug: img('resistance') },
    { word: 'EMPATHY', partOfSpeech: 'noun', definition: "Understanding and sharing others' feelings.", example: 'Leading change requires empathy.', imageSlug: img('empathy') },
    { word: 'TRANSPARENCY', partOfSpeech: 'noun', definition: 'Openness and honesty in communication.', example: 'Transparency builds trust during uncertain times.', imageSlug: img('transparency') },
    { word: 'UNCERTAINTY', partOfSpeech: 'noun', definition: 'Not knowing what will happen.', example: 'Change creates uncertainty for many people.', imageSlug: img('uncertainty') },
  ],

  phrasalVerbs: [
    { phrase: 'I understand that this change might feel challenging.', tag: 'phrase', definition: 'Show empathy and acknowledge emotion.', example: '"I understand that this change might feel challenging, especially after ten years."', imageSlug: img('feel-challenging') },
    { phrase: "Here's why this change is necessary for our future.", tag: 'phrase', definition: 'Explain the purpose clearly.', example: '"Here\'s why this change is necessary: our current system can\'t scale."', imageSlug: img('why-necessary') },
    { phrase: 'Your feedback is valuable — we want every voice heard.', tag: 'phrase', definition: 'Encourage inclusion and engagement.', example: '"Please share your concerns. Your feedback is valuable."', imageSlug: img('feedback-valuable') },
    { phrase: "Let's focus on what we can control.", tag: 'phrase', definition: 'Redirect attention towards action.', example: '"We can\'t change the market, so let\'s focus on what we can control."', imageSlug: img('what-we-control') },
    { phrase: "We're in this transition together.", tag: 'phrase', definition: 'Build unity and reassurance.', example: '"Nobody will be left behind. We\'re in this transition together."', inAction: 'Resistance often comes from fear of loss, not disagreement. Name what stays the same as well as what changes — it reduces anxiety.', imageSlug: img('together') },
    { phrase: 'PUSH BACK (ON)', definition: 'To resist or oppose a plan or idea.', example: 'Several managers pushed back on the new timeline.', imageSlug: img('push-back') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Kira, the warehouse team is really pushing back on the move to automation. People are scared." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's understandable. [[Resistance:refusal to accept change]] usually comes from fear, not stubbornness. Let's meet them in person tomorrow." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "What will you say?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "First: \"I understand that this change might feel challenging.\" Lots of [[empathy:understanding their feelings]] before any facts." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Then [[transparency:openness and honesty]]: \"Here's why this change is necessary — our orders have doubled and we can't keep up manually.\"" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "They'll ask about jobs." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "And I'll be honest: no one will lose their job. Roles will change, and we'll train everyone. That reduces [[uncertainty:not knowing what will happen]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'll finish with: \"Your feedback is valuable, and we're in this [[transition:move from one state to another]] together.\" [[Adaptability:ability to adjust]] grows when people feel safe." },
  ],

  matchingExercise: [
    { word: 'TRANSITION', definition: 'Moving from one state to another' },
    { word: 'RESISTANCE', definition: 'Difficulty accepting change' },
    { word: 'TRANSPARENCY', definition: 'Openness and honesty' },
    { word: 'UNCERTAINTY', definition: 'Not knowing what will happen' },
    { word: 'ADAPTABILITY', definition: 'Ability to adjust to new conditions' },
    { word: 'PUSH BACK', definition: 'Resist or oppose a plan' },
  ],

  fillBlankExercise: [
    { before: 'I understand that this change might feel', after: '.', answer: 'challenging' },
    { before: "Here's why this change is", after: 'for our future.', answer: 'necessary' },
    { before: 'Your feedback is', after: '.', answer: 'valuable' },
    { before: "Let's focus on what we can", after: '.', answer: 'control' },
    { before: "We're in this transition", after: '.', answer: 'together' },
    { before: 'Several managers pushed', after: 'on the timeline.', answer: 'back' },
  ],

  multipleChoiceExercise: [
    { question: 'Where does resistance to change often come from?', options: ['Laziness', 'Fear of loss', 'Bad weather', 'Too much money'], correctIndex: 1 },
    { question: 'What does "push back" mean?', options: ['Support', 'Resist or oppose', 'Delay a meeting', 'Agree quickly'], correctIndex: 1 },
    { question: 'Which phrase builds unity?', options: ["We're in this transition together.", 'Do as you are told.', 'It\'s not my decision.', 'Change is easy.'], correctIndex: 0 },
    { question: 'In the dialogue, what change is happening?', options: ['Moving offices', 'Warehouse automation', 'New CEO', 'Salary cuts'], correctIndex: 1 },
    { question: 'What does Kira promise about jobs?', options: ['Some people will leave', 'No one will lose their job; roles will change with training', 'Jobs will move abroad', 'Nothing'], correctIndex: 1 },
  ],
};
