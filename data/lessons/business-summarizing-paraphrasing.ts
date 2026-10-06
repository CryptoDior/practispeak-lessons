import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-summarizing-paraphrasing-${s}.png`;

export const businessSummarizingParaphrasing: Lesson = {
  slug: 'business-summarizing-paraphrasing',
  title: 'Summarizing and Paraphrasing in Meetings',
  subtitle: 'B1-B2 · Leading Meetings · Lesson 3',
  level: 'B1-B2',
  description:
    'Learn how to summarize the key points of a discussion, paraphrase what someone said to check understanding, and confirm that everyone agrees.',
  heroImage: img('hero'),

  objectives: [
    'Summarize the main points of a discussion.',
    'Paraphrase a colleague\'s idea to check understanding.',
    'Ask for clarification and confirm agreement.',
  ],

  vocabulary: [
    { word: 'SUMMARIZE', partOfSpeech: 'verb', definition: 'To say the main points in a short way.', example: 'Let me summarize what we decided today.', imageSlug: img('summarize') },
    { word: 'PARAPHRASE', partOfSpeech: 'verb', definition: 'To repeat what someone said using different words.', example: 'Let me paraphrase your idea to check I understood.', imageSlug: img('paraphrase') },
    { word: 'KEY POINTS', partOfSpeech: 'noun', definition: 'The most important ideas.', example: 'The manager highlighted the key points.', imageSlug: img('key-points') },
    { word: 'CLARIFY', partOfSpeech: 'verb', definition: 'To make something clear and easy to understand.', example: 'She clarified the timeline for the project.', imageSlug: img('clarify') },
    { word: 'CONFIRM', partOfSpeech: 'verb', definition: 'To say or check that something is correct.', example: 'She confirmed the details in an email.', imageSlug: img('confirm') },
    { word: 'IN OTHER WORDS', partOfSpeech: 'phrase', definition: 'Use this to say the same thing in a different, simpler way.', example: 'In other words, we need more time.', imageSlug: img('in-other-words') },
  ],

  phrasalVerbs: [
    { phrase: "Let me summarize what we've discussed.", tag: 'phrase', definition: 'Give a short overview of the discussion.', example: '"Let me summarize what we\'ve discussed: training, budget and deadlines."', imageSlug: img('let-me-summarize') },
    { phrase: 'The key points are…', tag: 'phrase', definition: 'Highlight the most important ideas.', example: '"The key points are that sales are strong, but we need more training."', imageSlug: img('the-key-points-are') },
    { phrase: 'So, if I understand correctly, you mean…', tag: 'phrase', definition: 'Paraphrase politely to check understanding.', example: '"So, if I understand correctly, you mean we need training before higher targets."', inAction: 'Paraphrasing shows you are listening, and it stops misunderstandings before they become problems.', imageSlug: img('if-i-understand') },
    { phrase: "In other words, you're saying…", tag: 'phrase', definition: 'Another way to paraphrase and make an idea clearer.', example: '"In other words, you\'re saying the budget is too small."', imageSlug: img('in-other-words-phrase') },
    { phrase: 'Can you clarify that point?', tag: 'phrase', definition: 'Ask for more detail or explanation.', example: '"Can you clarify that point about online training?"', imageSlug: img('can-you-clarify') },
    { phrase: 'Just to confirm, we all agree on…', tag: 'phrase', definition: 'Check that everyone agrees.', example: '"Just to confirm, we all agree on starting in May."', imageSlug: img('just-to-confirm') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "The new targets are too high. The team isn't ready, and the CRM training hasn't happened yet." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "So, if I understand correctly, you mean we need training before we raise the targets?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Exactly.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Can you [[clarify:make clear]] one thing? How long would the training take?' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'About three weeks, mostly online.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "[[In other words:said differently]], we could start the new targets in June instead of May." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good. Let me [[summarize:say the main points briefly]]. The [[key points:most important ideas]] are: training first, three weeks online, and new targets from June." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Just to [[confirm:check it is correct]], we all agree on this plan?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Agreed. And thanks for the [[paraphrase:repeating in different words]], Kira. It really helped.' },
  ],

  matchingExercise: [
    { word: 'SUMMARIZE', definition: 'To say the main points briefly' },
    { word: 'PARAPHRASE', definition: 'To repeat an idea in different words' },
    { word: 'KEY POINTS', definition: 'The most important ideas' },
    { word: 'CLARIFY', definition: 'To make something clear' },
    { word: 'CONFIRM', definition: 'To check something is correct' },
    { word: 'IN OTHER WORDS', definition: 'Said in a different way' },
  ],

  fillBlankExercise: [
    { before: "Let me", after: "what we've discussed.", answer: 'summarize' },
    { before: 'The', after: 'points are budget, training and deadlines.', answer: 'key' },
    { before: 'So, if I understand', after: ', you mean we need more staff.', answer: 'correctly' },
    { before: 'In other', after: ", you're saying it's too expensive.", answer: 'words' },
    { before: 'Can you', after: 'that point about the budget?', answer: 'clarify' },
    { before: 'Just to', after: ', the deadline is Friday?', answer: 'confirm' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "paraphrase" mean?', options: ['Repeat an idea using different words', 'Read a paragraph aloud', 'Write the agenda', 'Disagree politely'], correctIndex: 0 },
    { question: 'Which phrase checks your understanding?', options: ['So, if I understand correctly, you mean…', 'Let\'s begin.', 'Thank you for your time.', 'I respectfully disagree.'], correctIndex: 0 },
    { question: 'You want more detail about an idea. What do you say?', options: ['Can you clarify that point?', 'In conclusion…', 'Go ahead.', 'The deadline is Monday.'], correctIndex: 0 },
    { question: 'Why is paraphrasing useful in meetings?', options: ['It makes meetings longer', 'It shows you are listening and stops misunderstandings', 'It is more formal than summarizing', 'It replaces the agenda'], correctIndex: 1 },
    { question: 'In the dialogue, how long will the training take?', options: ['One week', 'Three weeks', 'Three months', 'One day'], correctIndex: 1 },
    { question: 'When will the new targets start?', options: ['April', 'May', 'June', 'July'], correctIndex: 2 },
  ],
};
