import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-giving-short-presentations-${s}.png`;

export const businessGivingShortPresentations: Lesson = {
  slug: 'business-giving-short-presentations',
  title: 'Giving Short Presentations',
  subtitle: 'B1-B2 · Leading Meetings · Lesson 4',
  level: 'B1-B2',
  description:
    'Learn a simple structure for short presentations at work: introduce your topic, guide people through your slides, conclude clearly and invite questions.',
  heroImage: img('hero'),

  objectives: [
    'Open a presentation and introduce the topic.',
    'Describe slides and move between points.',
    'Conclude clearly and invite questions.',
  ],

  vocabulary: [
    { word: 'PRESENTATION', partOfSpeech: 'noun', definition: 'A talk where you give information to a group.', example: 'The presentation was clear and interesting.', imageSlug: img('presentation') },
    { word: 'INTRODUCE', partOfSpeech: 'verb', definition: 'To present the topic or yourself at the start.', example: "I'll introduce myself before we begin.", imageSlug: img('introduce') },
    { word: 'TOPIC', partOfSpeech: 'noun', definition: 'The subject of a talk or discussion.', example: "Today's topic is our sales performance.", imageSlug: img('topic') },
    { word: 'SLIDE', partOfSpeech: 'noun', definition: 'One page in a digital presentation.', example: 'Please look at slide number 3.', imageSlug: img('slide') },
    { word: 'CONCLUSION', partOfSpeech: 'noun', definition: 'The final part, where you summarize or give the result.', example: 'She gave a strong conclusion.', imageSlug: img('conclusion') },
    { word: 'AUDIENCE', partOfSpeech: 'noun', definition: 'The people who listen to a presentation.', example: 'Who is the audience for this presentation?', imageSlug: img('audience') },
  ],

  phrasalVerbs: [
    { phrase: 'Good morning. Today I will talk about…', tag: 'phrase', definition: 'A clear way to open and introduce your topic.', example: '"Good morning, everyone. Today I will talk about our sales results."', imageSlug: img('today-i-will-talk') },
    { phrase: 'First, I will explain…', tag: 'phrase', definition: 'Introduce your first point.', example: '"First, I will explain last quarter\'s results."', inAction: 'Use signposts: First… Next… Finally… They help the audience follow you.', imageSlug: img('first-i-will-explain') },
    { phrase: 'This slide shows…', tag: 'phrase', definition: 'Describe the information on a slide.', example: '"This slide shows our marketing budget for 2026."', imageSlug: img('this-slide-shows') },
    { phrase: 'Next, … / Finally, …', tag: 'phrase', definition: 'Move to the next point or the last point.', example: '"Next, I\'ll look at Asia. Finally, I\'ll share our plan."', imageSlug: img('next-finally') },
    { phrase: 'In conclusion, …', tag: 'phrase', definition: 'Start the last part and summarize.', example: '"In conclusion, sales are growing, but we need more training."', imageSlug: img('in-conclusion') },
    { phrase: 'Thank you for listening. Any questions?', tag: 'phrase', definition: 'Finish politely and invite questions.', example: '"Thank you for listening. Do you have any questions?"', imageSlug: img('thank-you-for-listening') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Good morning, everyone. Today I will talk about our sales performance for the last quarter.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'First, I will explain our results in Europe. This [[slide:a page in a digital presentation]] shows strong growth in France and Germany, where sales increased by 15%.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Next, the results in Asia. Sales were lower in China, but we see new opportunities in India.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'In [[conclusion:the final summary]], sales are growing overall, but we need to balance our focus between Europe and Asia. Thank you for listening. Any questions?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Thanks, Tim. Great [[presentation:talk with information]]. Why were sales lower in China?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Mainly because a new competitor entered the market. I can share more details after the meeting.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Perfect. One tip: next time [[introduce:present at the start]] the [[topic:subject]] and the three parts at the beginning. It helps the [[audience:the people listening]] follow.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Good idea. Thanks for the feedback!' },
  ],

  matchingExercise: [
    { word: 'PRESENTATION', definition: 'A talk to give information to a group' },
    { word: 'TOPIC', definition: 'The subject of a talk' },
    { word: 'SLIDE', definition: 'One page in a digital presentation' },
    { word: 'CONCLUSION', definition: 'The final part of a talk' },
    { word: 'AUDIENCE', definition: 'The people who listen' },
    { word: 'INTRODUCE', definition: 'To present the topic at the start' },
  ],

  fillBlankExercise: [
    { before: 'Good morning. Today I will', after: 'about our new product.', answer: 'talk' },
    { before: 'First, I will', after: "last quarter's results.", answer: 'explain' },
    { before: 'This', after: 'shows our marketing budget.', answer: 'slide' },
    { before: 'In', after: ', our sales are increasing.', answer: 'conclusion' },
    { before: 'Thank you for', after: '. Do you have any questions?', answer: 'listening' },
    { before: 'The', after: 'was mostly managers from the sales team.', answer: 'audience' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase starts a presentation?', options: ['In conclusion…', 'Today I will talk about…', 'Thank you for listening.', 'Any questions?'], correctIndex: 1 },
    { question: 'Which words help the audience follow your structure?', options: ['First, next, finally', 'Um, er, so', 'Very, really, quite', 'Yes, no, maybe'], correctIndex: 0 },
    { question: 'What is the "audience"?', options: ['The slides', 'The people who listen', 'The topic', 'The room'], correctIndex: 1 },
    { question: 'You want to describe a chart. What do you say?', options: ['This slide shows…', 'Let\'s begin the meeting.', 'I respectfully disagree.', 'Can you repeat that?'], correctIndex: 0 },
    { question: 'In the dialogue, where did sales increase by 15%?', options: ['China and India', 'France and Germany', 'Spain and Italy', 'The USA'], correctIndex: 1 },
    { question: 'What tip does Kira give Tim?', options: ['Use more slides', 'Introduce the topic and the three parts at the beginning', 'Speak faster', 'Don\'t take questions'], correctIndex: 1 },
  ],
};
