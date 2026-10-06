import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-handling-difficult-qa-${s}.png`;

export const businessHandlingDifficultQa: Lesson = {
  slug: 'business-handling-difficult-qa',
  title: 'Handling Difficult Q&A Sessions',
  subtitle: 'C1-C2 · Presenting with Impact · Lesson 3',
  level: 'C1-C2',
  description:
    'Stay calm and credible when the questions get tough. Learn to acknowledge concerns, buy time, answer honestly when you don\'t have all the facts, and redirect diplomatically.',
  heroImage: img('hero'),

  objectives: [
    'Acknowledge difficult questions with composure.',
    'Respond honestly when you lack full information.',
    'Deflect or park off-topic questions diplomatically.',
  ],

  vocabulary: [
    { word: 'ACKNOWLEDGE', partOfSpeech: 'verb', definition: 'To show you have heard and understood something.', example: "I'd like to acknowledge your concern about the budget.", imageSlug: img('acknowledge') },
    { word: 'DEFLECT', partOfSpeech: 'verb', definition: 'To avoid answering directly by politely changing the focus.', example: 'She deflected the question with a light joke.', imageSlug: img('deflect') },
    { word: 'DIPLOMATIC', partOfSpeech: 'adjective', definition: 'Careful not to offend or upset people.', example: 'He gave a diplomatic answer to a sensitive question.', imageSlug: img('diplomatic') },
    { word: 'CONSTRUCTIVE', partOfSpeech: 'adjective', definition: 'Helpful and focused on improvement.', example: 'Thank you for that constructive question.', imageSlug: img('constructive') },
    { word: 'HOSTILE', partOfSpeech: 'adjective', definition: 'Unfriendly and aggressive.', example: 'One investor was openly hostile.', imageSlug: img('hostile') },
    { word: 'PARK', partOfSpeech: 'verb', definition: 'To postpone a topic until later (informal business).', example: "Let's park that question and come back to it.", imageSlug: img('park') },
  ],

  phrasalVerbs: [
    { phrase: "That's a great question. Let me clarify…", tag: 'phrase', definition: 'Show appreciation and explain.', example: '"That\'s a great question. Let me clarify what we plan to do next."', imageSlug: img('great-question') },
    { phrase: 'I understand your concern.', tag: 'phrase', definition: 'Acknowledge the person politely.', example: '"I understand your concern about the timeline."', imageSlug: img('understand-concern') },
    { phrase: "At this point, I don't have all the details, but…", tag: 'phrase', definition: 'Respond honestly while staying confident.', example: '"At this point, I don\'t have all the details, but I can share what we know."', inAction: 'Never bluff. Admitting a gap and promising a follow-up builds more credibility than a vague answer.', imageSlug: img('dont-have-details') },
    { phrase: 'What I can say is…', tag: 'phrase', definition: 'Redirect when you cannot answer fully.', example: '"What I can say is that we\'re reviewing the policy carefully."', imageSlug: img('what-i-can-say') },
    { phrase: "That's important; let's discuss it after the session.", tag: 'phrase', definition: 'Park an off-topic or detailed question politely.', example: '"That\'s an important question; let\'s discuss it after the session so we stay on time."', imageSlug: img('after-session') },
    { phrase: "I'll get back to you on that by…", tag: 'phrase', definition: 'Promise a specific follow-up.', example: '"I\'ll get back to you on that by Friday."', imageSlug: img('get-back') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Why should we trust this forecast? Last year's numbers were completely wrong." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I understand your concern, and I want to [[acknowledge:show I've heard]] it directly — last year we were too optimistic." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's a fair question. Let me clarify what's changed: we now use three scenarios instead of one." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And what about the rumoured job cuts in the Lisbon office?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "At this point, I don't have all the details. What I can say is that no decisions have been made. I'll get back to you on that by Friday." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "One more: why did marketing get a bigger budget than sales?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's an important question, but it's a little outside today's topic. Let's [[park:postpone]] it and discuss it after the session." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "(after the meeting) That was impressive. I was quite [[hostile:unfriendly and aggressive]], and you stayed so [[diplomatic:careful not to offend]]." },
  ],

  matchingExercise: [
    { word: 'ACKNOWLEDGE', definition: 'To show you have heard something' },
    { word: 'DEFLECT', definition: 'To avoid answering directly' },
    { word: 'DIPLOMATIC', definition: 'Careful not to offend' },
    { word: 'HOSTILE', definition: 'Unfriendly and aggressive' },
    { word: 'PARK', definition: 'To postpone a topic until later' },
    { word: 'CONSTRUCTIVE', definition: 'Helpful and improvement-focused' },
  ],

  fillBlankExercise: [
    { before: 'I understand your', after: '.', answer: 'concern' },
    { before: "At this point, I don't have all the", after: ', but…', answer: 'details' },
    { before: 'What I can', after: 'is that we\'re reviewing it.', answer: 'say' },
    { before: "I'll get back to you on that", after: 'Friday.', answer: 'by' },
    { before: "Let's", after: 'that question and come back to it later.', answer: 'park' },
    { before: "That's a great question. Let me", after: '…', answer: 'clarify' },
  ],

  multipleChoiceExercise: [
    { question: "You don't know the answer. What is the best response?", options: ['Invent an answer', "At this point, I don't have all the details, but I'll get back to you.", 'Ignore the question', 'Change the subject angrily'], correctIndex: 1 },
    { question: 'What does "park a question" mean?', options: ['Answer it immediately', 'Postpone it until later', 'Reject it', 'Write it down only'], correctIndex: 1 },
    { question: 'Why should you never bluff in Q&A?', options: ['It takes too long', 'Admitting a gap and following up builds credibility', 'It is illegal', 'Audiences like silence'], correctIndex: 1 },
    { question: 'In the dialogue, what has changed in the forecasting method?', options: ['New software', 'Three scenarios instead of one', 'A new team', 'Nothing'], correctIndex: 1 },
    { question: 'Which question does Kira park?', options: ['The forecast', 'The job cuts', 'Marketing vs sales budget', 'The timeline'], correctIndex: 2 },
  ],
};
