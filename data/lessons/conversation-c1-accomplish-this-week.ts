import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-c1-accomplish-this-week-${s}.png`;

export const conversationC1AccomplishThisWeek: Lesson = {
  slug: 'conversation-c1-accomplish-this-week',
  title: 'What Are You Hoping to Accomplish This Week?',
  subtitle: 'Everyday Conversation · C1-C2 · Lesson 6',
  level: 'C1-C2',
  description:
    'Talk about weekly goals with sophistication: realistic objectives, momentum, progress over perfection and beating procrastination.',
  heroImage: img('hero'),

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
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Monday again! What are you hoping to accomplish this week, Kira?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I'm trying to set realistic [[objectives:goal]] instead of overwhelming myself. Last week I planned twelve things and finished four." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Ha, been there. So what's on the list?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Three [[achievable:realistic]] goals. First, I'm aiming to finish the budget report I've been postponing. Pure [[procrastination:delaying unnecessarily]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Start with something quick to build [[momentum:forward progress]]. That's what works for me." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good idea. I'm also focusing on progress, not perfection. And I want more [[clarity:clear understanding]] about whether the new project is really in [[alignment:consistency]] with my career goals." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's a big question. Are you limiting distractions?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes — no social media until Friday. I want to approach this week with real [[intentionality:deliberate purpose]]." },
  ],

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
    { question: 'In the dialogue, how many things did Kira finish last week?', options: ['Twelve', 'Four', 'Three', 'None'], correctIndex: 1 },
    { question: 'What distraction is Kira avoiding until Friday?', options: ['TV', 'Social media', 'Coffee', 'Meetings'], correctIndex: 1 },
  ],
};
