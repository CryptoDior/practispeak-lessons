import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-presenting-data-visuals-${s}.png`;

export const businessPresentingDataVisuals: Lesson = {
  slug: 'business-presenting-data-visuals',
  title: 'Presenting Data and Visuals Clearly',
  subtitle: 'C1-C2 · Presenting with Impact · Lesson 4',
  level: 'C1-C2',
  description:
    'Turn charts into insight. Learn precise language to introduce visuals, describe trends, highlight key figures and explain what the data really means.',
  heroImage: img('hero'),

  objectives: [
    'Introduce and guide the audience through a visual.',
    'Describe trends with accurate verbs and adverbs.',
    'Interpret data and highlight what matters.',
  ],

  vocabulary: [
    { word: 'TREND', partOfSpeech: 'noun', definition: 'The general direction of change over time.', example: 'The chart illustrates a positive trend in sales.', imageSlug: img('trend') },
    { word: 'FIGURE', partOfSpeech: 'noun', definition: 'A number showing an amount or result.', example: 'The latest sales figures are impressive.', imageSlug: img('figure') },
    { word: 'HIGHLIGHT', partOfSpeech: 'verb', definition: 'To draw attention to something important.', example: 'I\'d like to highlight the customer feedback.', imageSlug: img('highlight') },
    { word: 'ILLUSTRATE', partOfSpeech: 'verb', definition: 'To explain something with charts, pictures or examples.', example: 'This graph illustrates why innovation matters.', imageSlug: img('illustrate') },
    { word: 'PLATEAU', partOfSpeech: 'noun / verb', definition: 'To stay at the same level after a period of growth.', example: 'Sales plateaued in the third quarter.', imageSlug: img('plateau') },
    { word: 'FLUCTUATE', partOfSpeech: 'verb', definition: 'To go up and down irregularly.', example: 'Prices fluctuated throughout the year.', imageSlug: img('fluctuate') },
    { word: 'SHARPLY / STEADILY', partOfSpeech: 'adverb', definition: 'Quickly and by a lot / gradually and regularly.', example: 'Revenue rose sharply in May, then grew steadily.', imageSlug: img('sharply') },
  ],

  phrasalVerbs: [
    { phrase: 'This chart shows…', tag: 'phrase', definition: 'Introduce a visual.', example: '"This chart shows our revenue growth over the past year."', imageSlug: img('chart-shows') },
    { phrase: 'As you can see here…', tag: 'phrase', definition: "Guide the audience's attention.", example: '"As you can see here, sales increased sharply in May."', imageSlug: img('as-you-can-see') },
    { phrase: 'The data indicates that…', tag: 'phrase', definition: 'Explain what the numbers mean.', example: '"The data indicates that customer satisfaction has improved."', imageSlug: img('data-indicates') },
    { phrase: "What's important to note is…", tag: 'phrase', definition: 'Highlight a key point.', example: '"What\'s important to note is that profit grew despite higher costs."', imageSlug: img('important-to-note') },
    { phrase: 'rose / fell by 15%  vs  rose / fell to 15%', tag: 'rule', definition: '"By" shows the amount of change; "to" shows the final level.', example: 'Sales rose BY 15% (+15). Market share rose TO 15% (now 15).', inAction: 'Mixing "by" and "to" is a common, costly error in data talks — it changes the meaning completely.', imageSlug: img('by-vs-to') },
    { phrase: "Let's zoom in on…", tag: 'phrase', definition: 'Focus on one part of the data.', example: '"Let\'s zoom in on the Asian market."', imageSlug: img('zoom-in') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "This chart shows our quarterly revenue for 2025. As you can see here, there's a clear upward [[trend:general direction of change]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Revenue rose [[sharply:quickly and by a lot]] in Q2 — by 18% — mainly thanks to the new product line." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "And Q3 looks flat. What happened there?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good observation. Sales [[plateaued:stayed at the same level]] in Q3. The data indicates that this was seasonal — it happens every summer." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "What's important to note is that margins improved even when sales were flat. Let me [[highlight:draw attention to]] this [[figure:number]]: profit margin rose to 22%." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Rose to 22%, or by 22%?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "To 22% — from 17%. So up by five percentage points." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Clear. That really [[illustrate:explains with a chart]]s the value of the cost-cutting programme." },
  ],

  matchingExercise: [
    { word: 'TREND', definition: 'General direction of change over time' },
    { word: 'PLATEAU', definition: 'To stay at the same level after growth' },
    { word: 'FLUCTUATE', definition: 'To go up and down irregularly' },
    { word: 'HIGHLIGHT', definition: 'To draw attention to something' },
    { word: 'FIGURE', definition: 'A number showing an amount' },
    { word: 'SHARPLY', definition: 'Quickly and by a lot' },
  ],

  fillBlankExercise: [
    { before: 'This chart', after: 'our revenue growth over the year.', answer: 'shows' },
    { before: 'As you can', after: 'here, sales increased in May.', answer: 'see' },
    { before: 'The data', after: 'that satisfaction has improved.', answer: 'indicates' },
    { before: "What's important to", after: 'is that profits grew.', answer: 'note' },
    { before: 'Sales', after: 'in Q3 after strong growth.', answer: 'plateaued' },
    { before: 'Market share rose', after: '15%. It\'s now 15%.', answer: 'to' },
  ],

  multipleChoiceExercise: [
    { question: '"Sales rose BY 10%" means…', options: ['Sales are now 10%', 'Sales increased by ten percent', 'Sales fell', 'Sales stayed the same'], correctIndex: 1 },
    { question: 'Which verb means "go up and down irregularly"?', options: ['Plateau', 'Fluctuate', 'Highlight', 'Illustrate'], correctIndex: 1 },
    { question: 'Which phrase interprets data?', options: ['The data indicates that…', 'Let me begin…', 'Any questions?', 'Thank you.'], correctIndex: 0 },
    { question: 'In the dialogue, why did sales plateau in Q3?', options: ['A new competitor', 'It was seasonal', 'A price increase', 'Staff shortages'], correctIndex: 1 },
    { question: 'What did the profit margin rise to?', options: ['17%', '18%', '22%', '5%'], correctIndex: 2 },
  ],
};
