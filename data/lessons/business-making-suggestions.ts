import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-making-suggestions-${s}.png`;

export const businessMakingSuggestions: Lesson = {
  slug: 'business-making-suggestions',
  title: 'Making Suggestions',
  subtitle: 'B1-B2 · Problem Solving · Lesson 1',
  level: 'B1-B2',
  description:
    'Learn how to make suggestions at work, from casual ("How about…?") to careful and formal ("One option is to…"), and how to talk about ideas and plans.',
  heroImage: img('hero'),

  objectives: [
    'Make suggestions with different levels of formality.',
    'Use phrasal verbs for developing ideas: come up with, work on, try out.',
    'Discuss options and plans in a meeting.',
  ],

  vocabulary: [
    { word: 'SUGGESTION', partOfSpeech: 'noun', definition: 'An idea or plan you give for others to consider.', example: 'Kira made a good suggestion about the project.', imageSlug: img('suggestion') },
    { word: 'IDEA', partOfSpeech: 'noun', definition: 'A thought or plan about what to do.', example: "That's a great idea, Tim.", imageSlug: img('idea') },
    { word: 'IMPROVE', partOfSpeech: 'verb', definition: 'To make something better.', example: 'We need to improve our process.', imageSlug: img('improve') },
    { word: 'PLAN', partOfSpeech: 'noun', definition: 'A set of steps to reach a goal.', example: "That's a good plan for next week.", imageSlug: img('plan') },
    { word: 'OPTION', partOfSpeech: 'noun', definition: 'One of the possible choices.', example: 'We have two options.', imageSlug: img('option') },
  ],

  phrasalVerbs: [
    { phrase: 'COME UP WITH', definition: 'To think of a new idea.', example: 'Kira came up with a great suggestion.', imageSlug: img('come-up-with') },
    { phrase: 'THINK ABOUT', definition: 'To consider something before deciding.', example: "Let's think about the next step.", imageSlug: img('think-about') },
    { phrase: 'WORK ON', definition: 'To spend time improving or preparing something.', example: 'We can work on the presentation together.', imageSlug: img('work-on') },
    { phrase: 'TRY OUT', definition: 'To test an idea to see if it works.', example: 'We can try out this plan for one week.', imageSlug: img('try-out') },
    { phrase: 'I think we should…', tag: 'phrase', definition: 'A common, direct way to give an idea.', example: '"I think we should meet twice a week."', imageSlug: img('i-think-we-should') },
    { phrase: 'How about…? / What about…?', tag: 'phrase', definition: 'A casual way to suggest something.', example: '"How about starting earlier?" / "What about a short survey?"', inAction: 'After "How about / What about", use the -ing form or a noun: "How about meeting on Friday?"', imageSlug: img('how-about') },
    { phrase: "Why don't we…?", tag: 'phrase', definition: 'A friendly way to suggest an action.', example: '"Why don\'t we start the project on Monday?"', imageSlug: img('why-dont-we') },
    { phrase: 'Maybe we could…', tag: 'phrase', definition: 'A polite, careful suggestion.', example: '"Maybe we could ask the manager for help."', imageSlug: img('maybe-we-could') },
    { phrase: 'One option is to…', tag: 'phrase', definition: 'A more formal way to present an idea.', example: '"One option is to train the team online."', imageSlug: img('one-option-is') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Our customer response times are too slow. We need to [[improve:make better]] them. Any [[idea:a thought about what to do]]s?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I think we should use a shared inbox. Then everyone can see new emails." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good [[suggestion:an idea for others to consider]]. What about a daily check-in too, just ten minutes?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Maybe we could do it on Slack instead. Some people work from home." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "True. Why don't we [[try out:test]] both ideas for two weeks?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sounds good. One [[option:a possible choice]] is to start with the sales team first, and then the rest of the office." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I like that [[plan:steps to reach a goal]]. Can you [[work on:spend time preparing]] the details and send them to me?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure. I'll [[think about:consider]] the timing and [[come up with:think of]] a short guide for the team." },
  ],

  matchingExercise: [
    { word: 'SUGGESTION', definition: 'An idea for others to consider' },
    { word: 'IMPROVE', definition: 'To make something better' },
    { word: 'OPTION', definition: 'One possible choice' },
    { word: 'COME UP WITH', definition: 'To think of a new idea' },
    { word: 'TRY OUT', definition: 'To test an idea' },
    { word: 'WORK ON', definition: 'To spend time preparing something' },
  ],

  fillBlankExercise: [
    { before: 'I think we', after: 'meet twice a week.', answer: 'should' },
    { before: 'How about', after: 'the meeting to Friday?', answer: 'moving' },
    { before: "Why don't", after: 'start the project on Monday?', answer: 'we' },
    { before: 'Maybe we', after: 'ask the manager for help.', answer: 'could' },
    { before: 'Kira came up', after: 'a great idea.', answer: 'with' },
    { before: 'We can try', after: 'this plan for one week.', answer: 'out' },
  ],

  multipleChoiceExercise: [
    { question: 'Which suggestion is the most formal?', options: ['How about pizza?', 'One option is to train the team online.', "Why don't we go?", 'Let\'s just do it.'], correctIndex: 1 },
    { question: 'Which is correct?', options: ['How about meet on Friday?', 'How about to meet on Friday?', 'How about meeting on Friday?', 'How about met on Friday?'], correctIndex: 2 },
    { question: 'What does "come up with" mean?', options: ['Arrive at the office', 'Think of a new idea', 'Go upstairs', 'Agree with someone'], correctIndex: 1 },
    { question: 'What does "try out" mean?', options: ['Test an idea to see if it works', 'Leave a meeting', 'Get tired', 'Write a report'], correctIndex: 0 },
    { question: 'In the dialogue, what is the problem?', options: ['The office is too small', 'Customer response times are too slow', 'There is no budget', 'People are late'], correctIndex: 1 },
    { question: 'How long will they try out the ideas?', options: ['One week', 'Two weeks', 'One month', 'One day'], correctIndex: 1 },
  ],
};
