import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}conversation-c1-small-habits-${s}.png`;

export const conversationC1SmallHabits: Lesson = {
  slug: 'conversation-c1-small-habits',
  title: 'What Small Habits Changed Your Life?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 9',
  level: 'C1-C2',
  description:
    'Discuss how tiny routines create big long-term change: incremental progress, the compound effect, discipline without restriction and positive ripple effects.',
  heroImage: img('hero'),

  objectives: [
    'Describe a habit and its long-term impact.',
    'Talk about consistency, discipline and the compound effect.',
    'Use advanced vocabulary: incremental, sustainable, ripple effect.',
  ],

  vocabulary: [
    { word: 'INCREMENTAL', partOfSpeech: 'adjective', definition: 'Happening in small steps over time.', example: 'Incremental progress is easier to maintain than sudden change.', imageSlug: img('incremental') },
    { word: 'COMPOUND EFFECT', partOfSpeech: 'noun', definition: 'The powerful result of small actions repeated consistently.', example: 'Reading ten pages a day had a compound effect over a year.', imageSlug: img('compound-effect') },
    { word: 'SUSTAINABLE', partOfSpeech: 'adjective', definition: 'Possible to continue long-term without becoming overwhelming.', example: 'Walking every morning feels more sustainable than intense exercise.', imageSlug: img('sustainable') },
    { word: 'RIPPLE EFFECT', partOfSpeech: 'noun', definition: 'When one change spreads and affects other areas.', example: 'Sleeping earlier had a ripple effect on my whole day.', imageSlug: img('ripple-effect') },
    { word: 'DISCIPLINED', partOfSpeech: 'adjective', definition: 'Able to control yourself and stick to a plan.', example: 'Journaling made me more disciplined.', imageSlug: img('disciplined') },
    { word: 'UNDERESTIMATE', partOfSpeech: 'verb', definition: 'To think something is smaller or less important than it is.', example: 'I underestimated how much it would affect my mindset.', imageSlug: img('underestimate') },
    { word: 'LASTING', partOfSpeech: 'adjective', definition: 'Continuing for a long time.', example: 'It seems simple, but it has had a lasting impact.', imageSlug: img('lasting') },
  ],

  phrasalVerbs: [
    { phrase: 'What small habits changed your life?', tag: 'phrase', definition: 'Ask which simple routines had a long-term impact.', example: '"I\'m curious — what small habits changed your life?"', imageSlug: img('question') },
    { phrase: 'A small habit that made a huge difference was…', tag: 'phrase', definition: 'Introduce a simple habit with a strong effect.', example: '"A small habit that made a huge difference was drinking water before coffee."', imageSlug: img('huge-difference') },
    { phrase: "It didn't feel significant at first, but it compounded over time.", tag: 'phrase', definition: 'The habit became powerful through repetition.', example: '"Saving five euros a day didn\'t feel significant, but it compounded over time."', inAction: 'The contrast "didn\'t feel… at first, but…" is a classic structure for telling a change story. It builds a small surprise.', imageSlug: img('compounded') },
    { phrase: 'It helped me become more disciplined without feeling restricted.', tag: 'phrase', definition: 'The habit improved self-control in a sustainable way.', example: '"Planning my week on Sunday helped me become more disciplined without feeling restricted."', imageSlug: img('disciplined-phrase') },
    { phrase: 'It created a positive ripple effect in other areas of my life.', tag: 'phrase', definition: 'One small habit improved other parts of life.', example: '"Running created a positive ripple effect — I sleep better and eat better."', imageSlug: img('ripple-phrase') },
    { phrase: "It seems simple, but it's had a lasting impact.", tag: 'phrase', definition: 'The habit looks small but remains meaningful.', example: '"Writing three things I\'m grateful for seems simple, but it\'s had a lasting impact."', imageSlug: img('lasting-impact') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Kira, you seem so organised these days. What small habits changed your life?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "A small habit that made a huge difference was writing down three priorities every evening. It takes two minutes." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "That's it? Just three things?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It didn't feel significant at first, but it compounded over time. I [[underestimated:thought it less important than it was]] how much it would affect my mindset." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "How so?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I wake up with a plan, so I'm less anxious. It created a positive [[ripple effect:one change spreading to other areas]] — I even started going to bed earlier." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I always try huge changes and give up after a week." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's the trap. [[Incremental:in small steps]] change is far more [[sustainable:possible long-term]]. Small, boring actions — that's the [[compound effect:big results from small repeated actions]]." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "OK, I'm starting tonight. It seems simple, but I hope it has a [[lasting:long-term]] impact!" },
  ],

  matchingExercise: [
    { word: 'INCREMENTAL', definition: 'Happening in small steps' },
    { word: 'COMPOUND EFFECT', definition: 'Big results from small repeated actions' },
    { word: 'SUSTAINABLE', definition: 'Possible to continue long-term' },
    { word: 'RIPPLE EFFECT', definition: 'One change spreading to other areas' },
    { word: 'UNDERESTIMATE', definition: 'To think something is less important than it is' },
    { word: 'LASTING', definition: 'Continuing for a long time' },
  ],

  fillBlankExercise: [
    { before: 'A small habit that made a huge', after: 'was walking every day.', answer: 'difference' },
    { before: "It didn't feel significant at first, but it", after: 'over time.', answer: 'compounded' },
    { before: 'I', after: 'how much it would affect my mindset.', answer: 'underestimated' },
    { before: 'It created a positive', after: 'effect in other areas of my life.', answer: 'ripple' },
    { before: 'Incremental change is more', after: 'than sudden change.', answer: 'sustainable' },
    { before: "It seems simple, but it's had a", after: 'impact.', answer: 'lasting' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "incremental" mean?', options: ['Sudden and huge', 'Happening in small steps', 'Very expensive', 'Temporary'], correctIndex: 1 },
    { question: 'What is a "ripple effect"?', options: ['A water sport', 'When one change spreads to other areas', 'A type of habit', 'A bad mood'], correctIndex: 1 },
    { question: 'What is the "compound effect"?', options: ['Big results from small actions repeated consistently', 'A one-time event', 'A chemical reaction', 'A financial loss'], correctIndex: 0 },
    { question: 'Why does Kira prefer small habits over huge changes?', options: ['They are faster', 'They are more sustainable', 'They are more exciting', 'They cost less'], correctIndex: 1 },
    { question: 'In the dialogue, what is Kira\'s small habit?', options: ['Running every morning', 'Writing three priorities every evening', 'Meditating', 'Reading ten pages'], correctIndex: 1 },
    { question: 'What other change did the habit lead to?', options: ['She changed jobs', 'She started going to bed earlier', 'She moved house', 'She stopped drinking coffee'], correctIndex: 1 },
  ],
};
