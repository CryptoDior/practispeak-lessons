import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-responding-to-suggestions-${s}.png`;

export const businessRespondingToSuggestions: Lesson = {
  slug: 'business-responding-to-suggestions',
  title: 'Responding to Suggestions',
  subtitle: 'B1-B2 · Problem Solving · Lesson 2',
  level: 'B1-B2',
  description:
    'Learn how to respond to other people\'s ideas: accept them, say you are not sure yet, or say no politely, and how to change your mind.',
  heroImage: img('hero'),

  objectives: [
    'Accept a suggestion with enthusiasm.',
    'Say you are unsure and need time to think.',
    'Reject an idea politely and point out a problem.',
  ],

  vocabulary: [
    { word: 'ACCEPT', partOfSpeech: 'verb', definition: 'To say yes to an idea, offer or suggestion.', example: "Kira accepted Tim's suggestion.", imageSlug: img('accept') },
    { word: 'AGREE', partOfSpeech: 'verb', definition: 'To have the same opinion as someone.', example: 'I agree with that idea.', imageSlug: img('agree') },
    { word: 'UNSURE', partOfSpeech: 'adjective', definition: 'Not certain; without a clear opinion yet.', example: "I'm unsure about that plan.", imageSlug: img('unsure') },
    { word: 'REJECT', partOfSpeech: 'verb', definition: 'To say no to an idea or suggestion.', example: 'The company rejected the offer.', imageSlug: img('reject') },
    { word: 'POLITE', partOfSpeech: 'adjective', definition: 'Showing good manners and respect when speaking.', example: 'Kira gave a polite answer.', imageSlug: img('polite') },
  ],

  phrasalVerbs: [
    { phrase: 'GO ALONG WITH', definition: 'To agree with an idea, even if it wasn\'t your first choice.', example: "I'll go along with your plan.", imageSlug: img('go-along-with') },
    { phrase: 'THINK OVER', definition: 'To consider something carefully before deciding.', example: 'Let me think it over first.', imageSlug: img('think-over') },
    { phrase: 'BRING UP', definition: 'To mention an idea or topic.', example: 'Kira brought up an interesting point.', imageSlug: img('bring-up') },
    { phrase: 'POINT OUT', definition: 'To show or explain something, often a problem.', example: 'Tim pointed out a possible problem.', imageSlug: img('point-out') },
    { phrase: 'COME AROUND (TO)', definition: 'To change your mind and agree later.', example: "He didn't like it at first, but he came around.", imageSlug: img('come-around') },
    { phrase: "Yes, let's do that.", tag: 'phrase', definition: 'Accept a suggestion clearly.', example: '"A shared calendar? Yes, let\'s do that."', imageSlug: img('lets-do-that') },
    { phrase: "I'm not sure about that.", tag: 'phrase', definition: 'Say you are unsure, without saying no.', example: '"I\'m not sure about that. Can I think it over?"', imageSlug: img('not-sure') },
    { phrase: "I see your point, but I'm not sure it's the best option.", tag: 'phrase', definition: 'Disagree politely with a suggestion.', example: '"I see your point, but I\'m not sure it\'s the best option for us right now."', inAction: 'Soften a "no": first show you understand ("I see your point"), then give your doubt ("but I\'m not sure…").', imageSlug: img('see-your-point') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I have a suggestion. Why don\'t we move our weekly meeting to Monday mornings?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Hmm, I'm [[unsure:not certain]] about that. Monday mornings are very busy with emails." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's true. But we could plan the whole week at the start." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I see your point, but I'm not sure it's the best option. Let me [[think over:consider carefully]] it." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Sure. Also, can I [[bring up:mention]] another idea? A shared calendar for the whole team.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, let's do that! I [[agree:have the same opinion]] completely." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Great. And about Monday, just to [[point out:show]] one thing: the managers already meet on Mondays at nine.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Oh, I didn't know that. OK, I've [[come around:changed my mind and agreed]]. I'll [[go along with:agree with]] Monday, but let's start at ten." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Perfect. Thanks for agreeing to both ideas! I'm glad you didn't [[reject:say no to]] them." },
  ],

  matchingExercise: [
    { word: 'ACCEPT', definition: 'To say yes to an idea' },
    { word: 'REJECT', definition: 'To say no to an idea' },
    { word: 'UNSURE', definition: 'Not certain' },
    { word: 'THINK OVER', definition: 'To consider before deciding' },
    { word: 'GO ALONG WITH', definition: 'To agree with an idea' },
    { word: 'COME AROUND', definition: 'To change your mind and agree later' },
  ],

  fillBlankExercise: [
    { before: "Yes, let's do", after: '.', answer: 'that' },
    { before: "I'm not", after: 'about that.', answer: 'sure' },
    { before: 'Let me think it', after: 'first.', answer: 'over' },
    { before: "I'll go along", after: 'your plan.', answer: 'with' },
    { before: 'Tim pointed', after: 'a possible problem.', answer: 'out' },
    { before: 'She brought', after: 'an interesting point in the meeting.', answer: 'up' },
  ],

  multipleChoiceExercise: [
    { question: 'Which response accepts a suggestion?', options: ["Yes, let's do that.", "I'm not sure.", 'Let me think it over.', 'I see your point, but…'], correctIndex: 0 },
    { question: 'Which response is unsure, but not a "no"?', options: ['No way.', "I'm not sure about that.", 'Yes, definitely.', 'That\'s terrible.'], correctIndex: 1 },
    { question: 'What does "come around" mean?', options: ['Visit someone', 'Change your mind and agree later', 'Walk in a circle', 'Arrive late'], correctIndex: 1 },
    { question: 'What does "reject" mean?', options: ['Say yes', 'Say no', 'Say maybe', 'Say thank you'], correctIndex: 1 },
    { question: 'In the dialogue, which idea does Kira accept immediately?', options: ['Monday meetings', 'A shared calendar', 'Friday meetings', 'Working from home'], correctIndex: 1 },
    { question: 'What time will the Monday meeting start?', options: ['9:00', '10:00', '11:00', '8:00'], correctIndex: 1 },
  ],
};
