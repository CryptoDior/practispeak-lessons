import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-clarifying-politely-${s}.png`;

export const businessClarifyingPolitely: Lesson = {
  slug: 'business-clarifying-politely',
  title: 'Clarifying Politely',
  subtitle: 'B1-B2 · Communication & Culture · Lesson 5',
  level: 'B1-B2',
  description:
    'Learn how to say you don\'t understand without sounding rude, ask about a specific word or idea, and double-check details to make sure you got them right.',
  heroImage: img('hero'),

  objectives: [
    'Say politely that you don\'t understand.',
    'Ask for clarification about a specific word or idea.',
    'Rephrase and double-check information.',
  ],

  vocabulary: [
    { word: 'CLARIFY', partOfSpeech: 'verb', definition: 'To make something easier to understand.', example: 'The manager sent an email to clarify the schedule.', imageSlug: img('clarify') },
    { word: 'CONFIRM', partOfSpeech: 'verb', definition: 'To check or make sure that something is correct.', example: 'The assistant confirmed the booking by phone.', imageSlug: img('confirm') },
    { word: 'CONFUSING', partOfSpeech: 'adjective', definition: 'Hard to understand; not clear.', example: 'I found the report structure a bit confusing.', imageSlug: img('confusing') },
    { word: 'REPHRASE', partOfSpeech: 'verb', definition: 'To say or write something in a different way.', example: 'Could you rephrase the question?', imageSlug: img('rephrase') },
    { word: 'ENSURE', partOfSpeech: 'verb', definition: 'To make sure that something happens or is correct.', example: 'We want to ensure everyone understands the plan.', imageSlug: img('ensure') },
    { word: 'COMPREHENSION', partOfSpeech: 'noun', definition: 'The ability to understand something.', example: 'Listening practice improves comprehension.', imageSlug: img('comprehension') },
  ],

  phrasalVerbs: [
    { phrase: 'Sorry, could you repeat that, please?', tag: 'phrase', definition: 'Ask someone to say something again, politely.', example: '"Sorry, could you repeat that, please? I missed the last part."', imageSlug: img('repeat') },
    { phrase: 'Could you explain what you mean by…?', tag: 'phrase', definition: 'Ask about a specific word or idea.', example: '"Could you explain what you mean by \'phase two\'?"', imageSlug: img('what-you-mean-by') },
    { phrase: 'Just to clarify, …', tag: 'phrase', definition: 'Introduce a question that checks a detail.', example: '"Just to clarify, is the budget per month or per year?"', imageSlug: img('just-to-clarify') },
    { phrase: "I'm not sure I follow.", tag: 'phrase', definition: 'Say you are confused, in a polite way.', example: '"Sorry, I\'m not sure I follow. Why do we need a new supplier?"', inAction: '"I\'m not sure I follow" is softer than "I don\'t understand you". It puts the problem on you, not the speaker.', imageSlug: img('not-sure-i-follow') },
    { phrase: "So what you're saying is…", tag: 'phrase', definition: 'Rephrase or summarize what someone said.', example: '"So what you\'re saying is we should wait until June?"', imageSlug: img('what-youre-saying') },
    { phrase: 'Let me make sure I got that right.', tag: 'phrase', definition: 'Double-check details.', example: '"Let me make sure I got that right: room 4B, 10 a.m., Thursday."', imageSlug: img('got-that-right') },
    { phrase: 'Thanks, that makes more sense now.', tag: 'phrase', definition: 'Show you understand after the explanation.', example: '"Ah, okay. Thanks, that makes more sense now."', imageSlug: img('makes-sense') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "So for the new system, we'll run phase one in parallel, then do a soft launch before the hard switch." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sorry, I'm not sure I follow. Could you explain what you mean by 'in parallel'?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Of course. I'll [[rephrase:say it another way]]. We use the old system and the new system at the same time for two weeks." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Ah, I see. Just to [[clarify:make clear]], the 'soft launch' means only some teams use it?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Exactly. Sales and support first. Sorry, my explanation was a bit [[confusing:hard to understand]].' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No problem. So what you're saying is: two weeks with both systems, then only sales and support, then everyone?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's it. I want to [[ensure:make sure]] everyone is comfortable before the full switch." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Thanks, that makes more sense now. Can you [[confirm:check it is correct]] the start date by email?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Sure, I'll send it after lunch." },
  ],

  matchingExercise: [
    { word: 'CLARIFY', definition: 'To make something easier to understand' },
    { word: 'CONFUSING', definition: 'Hard to understand' },
    { word: 'REPHRASE', definition: 'To say something in a different way' },
    { word: 'ENSURE', definition: 'To make sure something happens' },
    { word: 'CONFIRM', definition: 'To check something is correct' },
    { word: 'COMPREHENSION', definition: 'The ability to understand' },
  ],

  fillBlankExercise: [
    { before: "Sorry, I'm not sure I", after: '.', answer: 'follow' },
    { before: 'Could you explain what you', after: "by 'phase two'?", answer: 'mean' },
    { before: 'Just to', after: ', is the meeting on Thursday?', answer: 'clarify' },
    { before: "So what you're", after: 'is we need more time?', answer: 'saying' },
    { before: 'Let me make sure I got that', after: '.', answer: 'right' },
    { before: 'Thanks, that makes more', after: 'now.', answer: 'sense' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase is the most polite way to say you don\'t understand?', options: ["I don't understand you.", "I'm not sure I follow.", 'What?', 'That makes no sense.'], correctIndex: 1 },
    { question: 'You don\'t know one word. What do you ask?', options: ['Could you explain what you mean by…?', 'Go ahead.', 'I respectfully disagree.', 'Talk to you soon.'], correctIndex: 0 },
    { question: 'What does "rephrase" mean?', options: ['Say something in a different way', 'Say something louder', 'Translate', 'Write a summary'], correctIndex: 0 },
    { question: 'Which phrase double-checks details?', options: ['Let me make sure I got that right.', "I'm afraid I don't agree.", 'Sorry to interrupt.', "Let's begin."], correctIndex: 0 },
    { question: "In the dialogue, what does 'in parallel' mean?", options: ['Only the new system', 'Old and new systems at the same time', 'Only the old system', 'No system for two weeks'], correctIndex: 1 },
    { question: 'Which teams will use the system first?', options: ['Marketing and HR', 'Sales and support', 'Finance and IT', 'Everyone'], correctIndex: 1 },
  ],
};
