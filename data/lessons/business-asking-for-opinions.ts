import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-asking-for-opinions-${s}.png`;

export const businessAskingForOpinions: Lesson = {
  slug: 'business-asking-for-opinions',
  title: 'Sharing Ideas and Asking for Opinions',
  subtitle: 'B1-B2 · Sharing Ideas · Part 1',
  level: 'B1-B2',
  description:
    'Learn how to propose ideas at work and invite others to share their opinions — from direct questions to more detailed, open requests for feedback.',
  heroImage: img('hero'),

  objectives: [
    'Suggest and propose ideas using professional vocabulary.',
    'Ask colleagues directly for their opinions.',
    'Encourage people to explain and expand on their ideas.',
  ],

  vocabulary: [
    { word: 'PROPOSE', partOfSpeech: 'verb', definition: 'To present an idea or plan for others to consider.', example: 'I propose we try a new way to finish the project faster.', imageSlug: img('propose') },
    { word: 'EXTEND', partOfSpeech: 'verb', definition: 'To make something longer in time or size.', example: 'Can we extend the deadline by one week?', imageSlug: img('extend') },
    { word: 'STREAMLINE', partOfSpeech: 'verb', definition: 'To make a process simpler and more efficient.', example: 'We can streamline our process with this new software.', imageSlug: img('streamline') },
    { word: 'APPROVAL PROCESS', partOfSpeech: 'noun', definition: 'The steps needed to get permission or agreement.', example: 'The approval process takes three weeks.', imageSlug: img('approval-process') },
    { word: 'INITIATIVE', partOfSpeech: 'noun', definition: 'A new plan to solve a problem or improve something.', example: "I'd like to start an initiative to improve team communication.", imageSlug: img('initiative') },
    { word: 'COMPETITIVE', partOfSpeech: 'adjective', definition: 'Trying to be as good as or better than others.', example: 'To stay competitive, we should offer a discount to new customers.', imageSlug: img('competitive') },
    { word: 'LAUNCH', partOfSpeech: 'verb', definition: 'To start something new, like a product or project.', example: 'I propose launching the product next month.', imageSlug: img('launch') },
    { word: 'CONSIDER', partOfSpeech: 'verb', definition: 'To think carefully about something before deciding.', example: 'Please consider using a different supplier.', imageSlug: img('consider') },
  ],

  phrasalVerbs: [
    { phrase: 'What do you think about…?', tag: 'phrase', definition: 'Ask directly for someone\'s opinion.', example: '"What do you think about moving the deadline forward?"', imageSlug: img('what-do-you-think') },
    { phrase: 'How do you feel about…?', tag: 'phrase', definition: 'A softer way to ask for an opinion.', example: '"How do you feel about implementing this new strategy?"', imageSlug: img('how-do-you-feel') },
    { phrase: 'Do you have any thoughts on…?', tag: 'phrase', definition: 'Invite feedback in an open way.', example: '"Do you have any thoughts on expanding our team?"', imageSlug: img('any-thoughts') },
    { phrase: "What's your take on…?", tag: 'phrase', definition: 'An informal, natural way to ask for an opinion.', example: '"What\'s your take on offering discounts to new customers?"', imageSlug: img('your-take') },
    { phrase: "I'd like to hear your thoughts on…", tag: 'phrase', definition: 'A polite, slightly formal invitation to share ideas.', example: '"I\'d like to hear your thoughts on the proposed schedule."', imageSlug: img('hear-your-thoughts') },
    { phrase: 'Can you elaborate on…?', tag: 'phrase', definition: 'Ask someone to explain their idea in more detail.', example: '"Can you elaborate on why this approach would work?"', inAction: '"Elaborate" means "give more detail". It shows you are interested and want to understand fully.', imageSlug: img('elaborate') },
    { phrase: "Let's hear everyone's perspective on…", tag: 'phrase', definition: 'Encourage the whole group to share.', example: '"Let\'s hear everyone\'s perspective on the new marketing strategy."', imageSlug: img('everyones-perspective') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Our [[approval process:the steps to get permission]] for new projects takes three weeks. That's too slow. I'd like to hear your thoughts on how to fix it." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I [[propose:present an idea]] we use an online tool. Managers could approve projects from their phones.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Interesting. Can you elaborate on how it would work?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Every request goes into one system. Managers get a notification. It would [[streamline:make simpler and faster]] everything." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maria, what's your take on Tim's idea?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I like it. Our competitors move faster, so we need to stay [[competitive:as good as others]]. But we should [[consider:think carefully about]] training for the managers." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Good point. How do you feel about a two-month pilot before we [[launch:start]] it for everyone?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Great. And if the pilot is slow, we can [[extend:make longer]] it by a month." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Perfect. Let's call it the 'Fast Approval [[initiative:a new plan to improve something]]'." },
  ],

  matchingExercise: [
    { word: 'PROPOSE', definition: 'To present an idea for others to consider' },
    { word: 'STREAMLINE', definition: 'To make a process simpler and faster' },
    { word: 'INITIATIVE', definition: 'A new plan to improve something' },
    { word: 'COMPETITIVE', definition: 'As good as or better than others' },
    { word: 'EXTEND', definition: 'To make something longer' },
    { word: 'ELABORATE', definition: 'To give more detail' },
  ],

  fillBlankExercise: [
    { before: 'What do you think', after: 'moving the deadline?', answer: 'about' },
    { before: 'How do you', after: 'about the new strategy?', answer: 'feel' },
    { before: "What's your", after: 'on the discount idea?', answer: 'take' },
    { before: 'Can you', after: 'on why this would work?', answer: 'elaborate' },
    { before: 'Can we', after: 'the deadline by one more week?', answer: 'extend' },
    { before: 'This software will', after: 'our approval process.', answer: 'streamline' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase asks for more detail?', options: ['Can you elaborate on that?', "Let's begin.", 'Thanks for listening.', 'I propose…'], correctIndex: 0 },
    { question: 'Which question is the most informal?', options: ["I'd like to hear your thoughts on…", "What's your take on…?", 'Could you possibly share your opinion…?', 'Would you be so kind as to…?'], correctIndex: 1 },
    { question: 'What does "streamline" mean?', options: ['Make a process simpler and more efficient', 'Watch videos online', 'Stop a project', 'Make something longer'], correctIndex: 0 },
    { question: 'What is an "initiative"?', options: ['A new plan to solve a problem or improve something', 'A deadline', 'A type of meeting', 'A job title'], correctIndex: 0 },
    { question: 'In the dialogue, what does Tim propose?', options: ['Hiring more managers', 'An online approval tool', 'Longer meetings', 'A new office'], correctIndex: 1 },
    { question: 'How long is the pilot?', options: ['Two weeks', 'One month', 'Two months', 'Six months'], correctIndex: 2 },
  ],
};
