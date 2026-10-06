import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-b1-how-has-your-week-been-${s}.png`;

export const conversationB1HowHasYourWeekBeen: Lesson = {
  slug: 'conversation-b1-how-has-your-week-been',
  title: 'How Has Your Week Been So Far?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 1',
  level: 'B1-B2',
  description:
    'Go beyond "fine, thanks". Learn natural ways to describe your week — busy, hectic, productive or relaxing — and keep the conversation going.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "How has your week been so far?" naturally.',
    'Describe your week with a range of adjectives and adverbs.',
    'Use the present perfect to talk about the week until now.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Present Perfect for "this week so far"',
    description:
      'The week is not finished, so we use the present perfect: HAS / HAVE + BEEN. Use the present perfect continuous (HAVE BEEN + -ING) for activities that continued over several days.',
    positiveLabel: 'How it has been',
    negativeLabel: 'What I have been doing',
    arrowStyle: true,
    positiveExamples: [
      { sentence: "It's been pretty good.", note: 'It has been — general feeling about the week.' },
      { sentence: "It's been a bit hectic.", note: 'Busy and stressful until now.' },
      { sentence: "I've had a very productive week.", note: 'Result so far.' },
    ],
    negativeExamples: [
      { sentence: "I've been catching up on work.", note: 'An activity over several days.' },
      { sentence: "I've been taking it easy.", note: 'Resting, not doing much.' },
    ],
  },

  vocabulary: [
    { word: 'HECTIC', partOfSpeech: 'adjective', definition: 'Very busy, with lots happening and little time.', example: "It's been a bit hectic at work.", imageSlug: img('hectic') },
    { word: 'PRODUCTIVE', partOfSpeech: 'adjective', definition: 'Getting a lot of useful work done.', example: 'I had a really productive week.', imageSlug: img('productive') },
    { word: 'STRESSFUL', partOfSpeech: 'adjective', definition: 'Causing worry or pressure.', example: 'Work has been stressful lately.', imageSlug: img('stressful') },
    { word: 'RELAXING', partOfSpeech: 'adjective', definition: 'Making you feel calm and rested.', example: 'The last few days were relaxing.', imageSlug: img('relaxing') },
    { word: 'CHAOTIC', partOfSpeech: 'adjective', definition: 'Very disorganized and out of control.', example: 'Everything felt chaotic on Monday.', imageSlug: img('chaotic') },
    { word: 'QUIET', partOfSpeech: 'adjective', definition: 'Calm, with not much happening.', example: "It's been a quiet week for me.", imageSlug: img('quiet') },
    { word: 'PRETTY', partOfSpeech: 'adverb', definition: 'Fairly; more than a little but not very.', example: "It's been pretty good.", imageSlug: img('pretty') },
    { word: 'HONESTLY', partOfSpeech: 'adverb', definition: 'Used to give your true opinion or feeling.', example: "Honestly, it's been a hard week.", imageSlug: img('honestly') },
  ],

  phrasalVerbs: [
    { phrase: 'How has your week been so far?', tag: 'phrase', definition: 'A natural way to ask about someone\'s week up to today.', example: '"Hey! How has your week been so far?"', imageSlug: img('how-has-your-week') },
    { phrase: "It's been pretty good.", tag: 'phrase', definition: 'A positive, casual answer.', example: '"It\'s been pretty good, thanks."', imageSlug: img('pretty-good') },
    { phrase: "It's been a bit hectic.", tag: 'phrase', definition: 'Your week has been busy and stressful.', example: '"Honestly, it\'s been a bit hectic. Three deadlines!"', imageSlug: img('bit-hectic') },
    { phrase: 'Nothing too exciting.', tag: 'phrase', definition: 'Nothing special happened.', example: '"Nothing too exciting, just work and sleep."', imageSlug: img('nothing-exciting') },
    { phrase: "I've been catching up on work.", tag: 'phrase', definition: 'You have been finishing tasks you were behind on.', example: '"I was sick last week, so I\'ve been catching up on work."', imageSlug: img('catching-up') },
    { phrase: "It started off rough, but it's getting better.", tag: 'phrase', definition: 'The week began badly but is improving.', example: '"Monday was terrible. It started off rough, but it\'s getting better."', inAction: 'Answers with a little story ("It started off rough, but…") invite the other person to ask more. That keeps the conversation alive.', imageSlug: img('started-rough') },
    { phrase: 'Same here. / How about you?', tag: 'phrase', definition: 'Show you feel the same, or ask the question back.', example: '"Busy week?" → "Same here! How about you?"', imageSlug: img('same-here') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Hey Tim! How has your week been so far?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "[[Honestly:to tell the truth]], it's been a bit [[hectic:very busy]]. We had a big client visit on Tuesday." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Oh no. How did it go?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "It started off rough — the projector broke and everything felt [[chaotic:out of control]]. But it's getting better. They liked our proposal!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's great news. So it's been a [[productive:getting lots done]] week in the end." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Yeah, [[pretty:fairly]] productive, but [[stressful:causing pressure]]. How about you?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Mine's been [[quiet:calm, not much happening]], actually. Nothing too exciting. I've been catching up on emails and taking it easy." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sounds [[relaxing:calm and restful]]. I need a week like that!" },
  ],

  matchingExercise: [
    { word: 'HECTIC', definition: 'Very busy, with little time' },
    { word: 'PRODUCTIVE', definition: 'Getting a lot of work done' },
    { word: 'CHAOTIC', definition: 'Disorganized and out of control' },
    { word: 'QUIET', definition: 'Calm, with not much happening' },
    { word: 'PRETTY', definition: 'Fairly; more than a little' },
    { word: 'HONESTLY', definition: 'Used to give your true feeling' },
  ],

  fillBlankExercise: [
    { before: 'How has your week', after: 'so far?', answer: 'been' },
    { before: "It's been", after: 'good, thanks.', answer: 'pretty' },
    { before: "I've been catching", after: 'on work.', answer: 'up' },
    { before: 'It started off rough, but it\'s getting', after: '.', answer: 'better' },
    { before: 'Nothing too', after: '. Just the usual.', answer: 'exciting' },
    { before: 'I had a very', after: 'week. I finished all my tasks.', answer: 'productive' },
  ],

  multipleChoiceExercise: [
    { question: 'Which question asks about the week until now?', options: ['How was your week?', 'How has your week been so far?', 'How will your week be?', 'How is your week tomorrow?'], correctIndex: 1 },
    { question: 'What does "hectic" mean?', options: ['Very relaxing', 'Very busy', 'Very boring', 'Very short'], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ["I've been catching up on work.", "I've catching up on work.", 'I been catching up work.', 'I have catch up on work.'], correctIndex: 0 },
    { question: 'What does "Nothing too exciting" mean?', options: ['Something amazing happened', 'Nothing special happened', 'You are angry', 'You are sick'], correctIndex: 1 },
    { question: 'In the dialogue, what went wrong on Tuesday?', options: ['The client cancelled', 'The projector broke', 'Tim was late', 'The internet was down'], correctIndex: 1 },
    { question: "How was Kira's week?", options: ['Hectic', 'Chaotic', 'Quiet', 'Stressful'], correctIndex: 2 },
  ],
};
