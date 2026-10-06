import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-handling-objections-c1-${s}.png`;

export const businessHandlingObjectionsC1: Lesson = {
  slug: 'business-handling-objections-c1',
  title: 'Handling Objections',
  subtitle: 'C1-C2 · Meetings & Negotiation · Lesson 3',
  level: 'C1-C2',
  description:
    'Turn objections into progress. Learn to validate concerns, reframe problems, back up your position with evidence and concede strategically without losing the deal.',
  heroImage: img('hero'),

  objectives: [
    'Validate objections so the other side feels heard.',
    'Reframe and counter objections with evidence.',
    'Concede partially while protecting your position.',
  ],

  vocabulary: [
    { word: 'OBJECTION', partOfSpeech: 'noun', definition: 'A reason for disagreeing or not accepting an idea.', example: 'Tim handled each objection with calm confidence.', imageSlug: img('objection') },
    { word: 'REASSURE', partOfSpeech: 'verb', definition: 'To make someone feel less worried.', example: "The manager's tone reassured everyone.", imageSlug: img('reassure') },
    { word: 'COUNTER', partOfSpeech: 'verb', definition: 'To reply to an argument with an opposing point.', example: 'We prepared ways to counter likely objections.', imageSlug: img('counter') },
    { word: 'VALIDATE', partOfSpeech: 'verb', definition: "To show you accept someone's concern as reasonable.", example: 'Validating a concern makes your partner feel heard.', imageSlug: img('validate') },
    { word: 'REFRAME', partOfSpeech: 'verb', definition: 'To present something in a different, more positive way.', example: 'Good negotiators reframe difficult questions.', imageSlug: img('reframe') },
    { word: 'CONCEDE', partOfSpeech: 'verb', definition: "To accept part of another person's point.", example: 'She conceded slightly on price to keep the deal.', imageSlug: img('concede') },
  ],

  phrasalVerbs: [
    { phrase: 'POINT OUT', definition: 'To mention something clearly.', example: 'Let me point out that this change will save costs.', imageSlug: img('point-out') },
    { phrase: 'BACK UP', definition: 'To support a claim with proof.', example: 'We can back up this claim with data.', imageSlug: img('back-up') },
    { phrase: 'LOOK INTO', definition: 'To investigate further.', example: "We'll look into your concern right away.", imageSlug: img('look-into') },
    { phrase: "That's a completely valid concern.", tag: 'phrase', definition: 'Validate the objection first.', example: '"That\'s a completely valid concern, and many clients ask the same."', imageSlug: img('valid-concern') },
    { phrase: "Let's look at it from a different angle.", tag: 'phrase', definition: 'Reframe the objection.', example: '"It\'s more expensive upfront, but let\'s look at it from a different angle: total cost over three years."', imageSlug: img('different-angle') },
    { phrase: "You're right that…; at the same time…", tag: 'phrase', definition: 'Concede partially while keeping your position.', example: '"You\'re right that setup takes time; at the same time, the savings start in month two."', inAction: 'The "feel–felt–found" pattern also works well: "I understand how you feel. Others felt the same. What they found was…"', imageSlug: img('right-that') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Honestly, your solution is 30% more expensive than your competitor's. I can't justify that to my board." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's a completely valid concern. Price matters, and I want to [[validate:accept as reasonable]] that." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "But let's look at it from a different angle — total cost over three years. Our maintenance is included; theirs costs extra. We can [[back up:support with proof]] this with figures from two of your peers." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Interesting. But implementation would take months. My team is already overloaded." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "You're right that setup takes effort; at the same time, our team handles 80% of it. I'd like to [[reassure:make you less worried]] you: your staff need about six hours each." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Six hours is manageable. What about the price itself?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I can [[concede:accept part of your point]] slightly: a 7% discount for a two-year commitment. That brings us much closer." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Send me the three-year comparison and I'll take it to the board. You've handled every [[objection:reason for disagreeing]] well." },
  ],

  matchingExercise: [
    { word: 'OBJECTION', definition: 'A reason for disagreeing' },
    { word: 'VALIDATE', definition: 'Accept a concern as reasonable' },
    { word: 'REFRAME', definition: 'Present something more positively' },
    { word: 'CONCEDE', definition: 'Accept part of another\'s point' },
    { word: 'REASSURE', definition: 'Make someone less worried' },
    { word: 'BACK UP', definition: 'Support with proof' },
  ],

  fillBlankExercise: [
    { before: "That's a completely", after: 'concern.', answer: 'valid' },
    { before: "Let's look at it from a different", after: '.', answer: 'angle' },
    { before: "You're right that setup takes time; at the same", after: ', savings start quickly.', answer: 'time' },
    { before: 'We can back', after: 'this claim with data.', answer: 'up' },
    { before: "We'll look", after: 'your concern right away.', answer: 'into' },
    { before: 'She', after: 'slightly on price to keep the deal.', answer: 'conceded' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the best first response to an objection?', options: ['Argue immediately', 'Validate the concern', 'Ignore it', 'Lower the price'], correctIndex: 1 },
    { question: 'What does "reframe" mean?', options: ['Change a picture frame', 'Present something from a different, more positive angle', 'Repeat the objection', 'End the meeting'], correctIndex: 1 },
    { question: 'Which phrase concedes partially?', options: ["You're right that…; at the same time…", "You're wrong.", 'No discount.', 'Sign now.'], correctIndex: 0 },
    { question: "In the dialogue, how much more expensive is Kira's solution?", options: ['7%', '20%', '30%', '80%'], correctIndex: 2 },
    { question: 'What discount does Kira offer?', options: ['5% for one year', '7% for a two-year commitment', '30%', 'None'], correctIndex: 1 },
  ],
};
