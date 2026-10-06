import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-persuasion-techniques-${s}.png`;

export const businessPersuasionTechniques: Lesson = {
  slug: 'business-persuasion-techniques',
  title: 'Persuasion Techniques',
  subtitle: 'C1-C2 · Presenting with Impact · Lesson 5',
  level: 'C1-C2',
  description:
    'Persuade with logic, credibility and emotion. Learn to back up claims with evidence, handle counterarguments gracefully and appeal to what your audience values.',
  heroImage: img('hero'),

  objectives: [
    'Support arguments with evidence and examples.',
    'Build credibility and appeal to logic and emotion.',
    'Acknowledge and respond to counterarguments.',
  ],

  vocabulary: [
    { word: 'PERSUADE', partOfSpeech: 'verb', definition: 'To make someone agree or act through reasoning or emotion.', example: 'He persuaded the board by showing real results.', imageSlug: img('persuade') },
    { word: 'CONVINCE', partOfSpeech: 'verb', definition: 'To make someone believe something is true or worth doing.', example: 'She convinced the team that change was necessary.', imageSlug: img('convince') },
    { word: 'EVIDENCE', partOfSpeech: 'noun', definition: 'Facts that support an argument.', example: 'She used customer feedback as evidence.', imageSlug: img('evidence') },
    { word: 'CREDIBILITY', partOfSpeech: 'noun', definition: 'The quality of being trusted and believed.', example: 'His experience gives him credibility.', imageSlug: img('credibility') },
    { word: 'APPEAL TO', partOfSpeech: 'verb', definition: 'To attract or connect with someone\'s interests, logic or feelings.', example: 'The idea appeals to people who value innovation.', imageSlug: img('appeal') },
    { word: 'COUNTERARGUMENT', partOfSpeech: 'noun', definition: 'A reason that opposes another argument.', example: 'He responded calmly to the counterargument.', imageSlug: img('counterargument') },
  ],

  phrasalVerbs: [
    { phrase: 'I understand your point, but consider this…', tag: 'phrase', definition: 'Acknowledge an objection and redirect.', example: '"I understand your point, but consider this alternative."', imageSlug: img('consider-this') },
    { phrase: 'The evidence suggests that…', tag: 'phrase', definition: 'Support your argument with facts.', example: '"The evidence suggests that flexible hours increase productivity."', imageSlug: img('evidence-suggests') },
    { phrase: 'From a business perspective, it makes sense because…', tag: 'phrase', definition: 'Appeal to logic and reason.', example: '"From a business perspective, it makes sense because it saves time and money."', imageSlug: img('business-perspective') },
    { phrase: 'Let me give you an example.', tag: 'phrase', definition: 'Make your argument concrete and relatable.', example: '"Let me give you an example from our Madrid office."', imageSlug: img('example') },
    { phrase: "Imagine if we didn't act…", tag: 'phrase', definition: 'Appeal to emotion by showing the cost of inaction.', example: '"Imagine if we didn\'t act and our competitor launched first."', inAction: 'Classic persuasion uses three appeals: ETHOS (credibility), LOGOS (logic and evidence) and PATHOS (emotion). Strong arguments combine all three.', imageSlug: img('imagine-if') },
    { phrase: "You might argue that…, however…", tag: 'phrase', definition: 'Pre-empt a counterargument before someone raises it.', example: '"You might argue that it\'s too expensive; however, it pays for itself in a year."', imageSlug: img('you-might-argue') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Kira, I need to [[convince:make them believe]] the directors to approve a four-day week pilot. Any advice?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Start with [[credibility:being trusted]]. Mention the companies that already tried it and your own research." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Then the numbers. The [[evidence:supporting facts]] suggests productivity stays the same or rises." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good — that [[appeals to:connects with]] their logic. From a business perspective, it makes sense because it cuts staff turnover. Do you have an example?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Yes — a similar firm in Dublin reduced resignations by 30%." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Excellent. Now pre-empt the [[counterargument:opposing reason]]: \"You might argue that clients will suffer; however, we'll keep a rotating team on Fridays.\"" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And some emotion at the end?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes: \"Imagine if we lost our best people to companies that already offer this.\" Credibility, logic, emotion — that's how you [[persuade:make people agree and act]]." },
  ],

  matchingExercise: [
    { word: 'PERSUADE', definition: 'Make someone agree or act' },
    { word: 'EVIDENCE', definition: 'Facts that support an argument' },
    { word: 'CREDIBILITY', definition: 'Being trusted and believed' },
    { word: 'COUNTERARGUMENT', definition: 'A reason against an argument' },
    { word: 'APPEAL TO', definition: 'Connect with interests or feelings' },
    { word: 'CONVINCE', definition: 'Make someone believe something' },
  ],

  fillBlankExercise: [
    { before: 'I understand your point, but', after: 'this.', answer: 'consider' },
    { before: 'The evidence', after: 'that this strategy works.', answer: 'suggests' },
    { before: 'From a business', after: ', it makes sense.', answer: 'perspective' },
    { before: 'Let me give you an', after: '.', answer: 'example' },
    { before: 'You might', after: "that it's expensive; however, it pays for itself.", answer: 'argue' },
    { before: 'His experience gives him', after: '.', answer: 'credibility' },
  ],

  multipleChoiceExercise: [
    { question: 'What are the three classic persuasive appeals?', options: ['Price, product, place', 'Credibility, logic, emotion', 'Hook, body, end', 'Slides, data, jokes'], correctIndex: 1 },
    { question: 'What does it mean to "pre-empt" a counterargument?', options: ['Ignore it', 'Address it before someone raises it', 'Agree with it', 'Get angry'], correctIndex: 1 },
    { question: 'Which phrase appeals to emotion?', options: ['The evidence suggests…', "Imagine if we didn't act…", 'This chart shows…', 'First, I\'ll discuss…'], correctIndex: 1 },
    { question: 'In the dialogue, what does Tim want approved?', options: ['A new office', 'A four-day week pilot', 'A pay rise', 'A new product'], correctIndex: 1 },
    { question: 'How much did the Dublin firm reduce resignations?', options: ['10%', '20%', '30%', '50%'], correctIndex: 2 },
  ],
};
