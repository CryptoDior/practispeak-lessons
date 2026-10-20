import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-c1-accomplish-this-week-${s}.png`;

export const conversationC1AccomplishThisWeek: Lesson = {
  slug: 'conversation-c1-accomplish-this-week',
  title: 'What Are You Hoping to Accomplish This Week?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 6',
  level: 'C1-C2',
  description:
    'Talk about weekly goals with sophistication: realistic objectives, momentum, progress over perfection and beating procrastination.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Describe your goals and intentions for the week.',
    'Discuss progress, momentum and procrastination.',
    'Use vocabulary such as intentionality, alignment and clarity.',
  ],

  vocabulary: [
    { word: 'INTENTIONALITY', partOfSpeech: 'noun', definition: 'Doing things with deliberate purpose.', example: "I'm approaching my goals with more intentionality.", imageSlug: img('intentionality') },
    { word: 'MOMENTUM', partOfSpeech: 'noun', definition: 'Forward progress that builds over time.', example: 'Small wins help me build momentum.', imageSlug: img('momentum') },
    { word: 'CLARITY', partOfSpeech: 'noun', definition: 'A clear understanding of what needs to be done.', example: "I'm hoping to gain clarity about my priorities.", imageSlug: img('clarity') },
    { word: 'ALIGNMENT', partOfSpeech: 'noun', definition: 'Consistency between your actions and your goals.', example: 'I choose tasks that are in alignment with my long-term plans.', imageSlug: img('alignment') },
    { word: 'PROCRASTINATION', partOfSpeech: 'noun', definition: 'Delaying tasks unnecessarily.', example: 'I want to reduce procrastination this week.', imageSlug: img('procrastination') },
    { word: 'OBJECTIVE', partOfSpeech: 'noun', definition: 'A goal you are trying to achieve.', example: 'My main objective is to finish the proposal.', imageSlug: img('objective') },
    { word: 'ACHIEVABLE', partOfSpeech: 'adjective', definition: 'Realistic; possible to do.', example: 'I set three achievable goals for the week.', imageSlug: img('achievable') },
  ],

  phrasalVerbs: [
    { phrase: 'What are you hoping to accomplish this week?', tag: 'phrase', definition: 'A high-level question about goals and intention.', example: '"Monday again! What are you hoping to accomplish this week?"', imageSlug: img('question') },
    { phrase: "I'm trying to set realistic objectives instead of overwhelming myself.", tag: 'phrase', definition: 'You want achievable goals.', example: '"Last week I planned too much. Now I\'m setting realistic objectives."', imageSlug: img('realistic') },
    { phrase: "I'm focusing on progress, not perfection.", tag: 'phrase', definition: 'You value consistent improvement over flawless results.', example: '"The draft won\'t be perfect, but I\'m focusing on progress, not perfection."', imageSlug: img('progress-not-perfection') },
    { phrase: 'I want to build momentum by completing small but important tasks.', tag: 'phrase', definition: 'Small wins create motivation.', example: '"I\'ll start with three quick wins to build momentum."', imageSlug: img('build-momentum') },
    { phrase: "I'm aiming to finish tasks I've been postponing.", tag: 'phrase', definition: 'You want to reduce procrastination.', example: '"I\'m aiming to finish the tax forms I\'ve been postponing for weeks."', inAction: 'The present perfect continuous ("I\'ve been postponing") emphasises that the delay has continued over time — and still matters now.', imageSlug: img('postponing') },
    { phrase: "I'm limiting distractions so I can be more mentally present.", tag: 'phrase', definition: 'You want a clearer, more focused mind.', example: '"I deleted social media from my phone. I\'m limiting distractions this week."', imageSlug: img('limit-distractions') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Monday again! What are you hoping to accomplish this week, Rosie?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I'm trying to set realistic [[objectives:goal]] instead of overwhelming myself. Last week I planned twelve things and finished four." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Ha, been there. So what's on the list?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Three [[achievable:realistic]] goals. First, I'm aiming to finish the budget report I've been postponing. Pure [[procrastination:delaying unnecessarily]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "Start with something quick to build [[momentum:forward progress]]. That's what works for me." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Good idea. I'm also focusing on progress, not perfection. And I want more [[clarity:clear understanding]] about whether the new project is really in [[alignment:consistency]] with my career goals." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "That's a big question. Are you limiting distractions?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Yes — no social media until Friday. I want to approach this week with real [[intentionality:deliberate purpose]]." },
  ],

  practiceTime: {
    instructions: "Role-play this conversation with your teacher. Complete each blank out loud using the vocabulary and phrases from this lesson, then add your own detail.",
    lines: [
      { speaker: 'Teacher', text: "What are you hoping to accomplish this week?" },
      { speaker: 'Student', text: "My main {{objective}} is to {{finish the report/prepare for my exam}}." },
      { speaker: 'Teacher', text: "How many goals have you set?" },
      { speaker: 'Student', text: "Three {{achievable}} goals. I'm setting {{realistic objectives}} instead of overwhelming myself." },
      { speaker: 'Student', text: "What are you hoping to accomplish this week?" },
      { speaker: 'Teacher', text: "I'm aiming to finish tasks I've been postponing." },
      { speaker: 'Teacher', text: "How will you get started?" },
      { speaker: 'Student', text: "I'll complete a few small tasks first to build {{momentum}}." },
      { speaker: 'Teacher', text: "Do you struggle with procrastination?" },
      { speaker: 'Student', text: "Yes, I want to reduce {{procrastination}} by {{limiting distractions}}." },
      { speaker: 'Teacher', text: "What if the work isn't perfect?" },
      { speaker: 'Student', text: "That's fine. I'm focusing on {{progress, not perfection}}." },
      { speaker: 'Teacher', text: "Do your goals match your long-term plans?" },
      { speaker: 'Student', text: "Yes, they're in {{alignment}} with my plans. I'm working with more {{intentionality/clarity}}." },
    ],
  },

  matchingExercise: [
    { word: 'MOMENTUM', definition: 'Forward progress that builds over time' },
    { word: 'CLARITY', definition: 'A clear understanding' },
    { word: 'ALIGNMENT', definition: 'Consistency between actions and goals' },
    { word: 'PROCRASTINATION', definition: 'Delaying tasks unnecessarily' },
    { word: 'OBJECTIVE', definition: 'A goal' },
    { word: 'ACHIEVABLE', definition: 'Realistic; possible to do' },
  ],

  fillBlankExercise: [
    { before: "I'm focusing on progress, not", after: '.', answer: 'perfection' },
    { before: 'Small wins help me build', after: '.', answer: 'momentum' },
    { before: "I'm aiming to finish tasks I've been", after: '.', answer: 'postponing' },
    { before: 'I want to reduce', after: 'this week.', answer: 'procrastination' },
    { before: "I'm limiting", after: 'so I can be more present.', answer: 'distractions' },
    { before: "I'm hoping to gain", after: 'about my priorities.', answer: 'clarity' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "momentum" mean here?', options: ['A short moment', 'Forward progress that builds over time', 'A type of exercise', 'A deadline'], correctIndex: 1 },
    { question: '"Progress, not perfection" means…', options: ['Only perfect work counts', 'Steady improvement matters more than flawless results', 'Never finish anything', 'Work faster'], correctIndex: 1 },
    { question: 'Which tense emphasises a delay that has continued until now?', options: ['I postponed it.', "I've been postponing it.", 'I postpone it.', "I'll postpone it."], correctIndex: 1 },
    { question: 'What is "procrastination"?', options: ['Planning carefully', 'Delaying tasks unnecessarily', 'Working overtime', 'Taking a holiday'], correctIndex: 1 },
    { question: 'In the dialogue, how many things did Rosie finish last week?', options: ['Twelve', 'Four', 'Three', 'None'], correctIndex: 1 },
    { question: 'What distraction is Rosie avoiding until Friday?', options: ['TV', 'Social media', 'Coffee', 'Meetings'], correctIndex: 1 },
  ],
};
