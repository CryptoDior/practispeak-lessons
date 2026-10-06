import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-b1-last-weekend-${s}.png`;

export const conversationB1LastWeekend: Lesson = {
  slug: 'conversation-b1-last-weekend',
  title: 'What Did You Do Last Weekend?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 6',
  level: 'B1-B2',
  description:
    'Talk about your weekend in more detail: what you did, where you went and how it was. Practise regular and irregular past tense verbs.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "What did you do last weekend?" with detail.',
    'Use regular and irregular past simple verbs correctly.',
    'Add opinions and follow-up questions to keep the chat going.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Past Simple — Regular and Irregular',
    description:
      'Regular verbs add -ED (stayed, visited, relaxed). Irregular verbs change form (go → went, meet → met, catch → caught). Questions and negatives use DID + base verb.',
    positiveLabel: 'Regular (-ed)',
    negativeLabel: 'Irregular',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'I stayed home and relaxed.', note: 'stay → stayed, relax → relaxed' },
      { sentence: 'I visited my cousin on Sunday.', note: 'visit → visited' },
      { sentence: 'I tried a new restaurant.', note: 'try → tried (y → ied)' },
    ],
    negativeExamples: [
      { sentence: 'I went out with friends.', note: 'go → went' },
      { sentence: 'I met some friends for lunch.', note: 'meet → met' },
      { sentence: 'I caught up on sleep.', note: 'catch → caught' },
    ],
  },

  vocabulary: [
    { word: 'WENT (GO)', partOfSpeech: 'verb', definition: 'Past of "go": travelled or moved to a place.', example: 'I went to a museum last weekend.', imageSlug: img('went') },
    { word: 'STAYED (STAY)', partOfSpeech: 'verb', definition: 'Past of "stay": remained in one place.', example: 'I stayed home most of the weekend.', imageSlug: img('stayed') },
    { word: 'VISITED (VISIT)', partOfSpeech: 'verb', definition: 'Past of "visit": went to see someone or somewhere.', example: 'I visited my cousin on Sunday.', imageSlug: img('visited') },
    { word: 'MET (MEET)', partOfSpeech: 'verb', definition: 'Past of "meet": saw someone socially or for a plan.', example: 'I met some friends for lunch.', imageSlug: img('met') },
    { word: 'TRIED (TRY)', partOfSpeech: 'verb', definition: 'Past of "try": did something new.', example: 'I tried a new restaurant.', imageSlug: img('tried') },
    { word: 'FINISHED (FINISH)', partOfSpeech: 'verb', definition: 'Past of "finish": completed something.', example: 'I finished a book I started months ago.', imageSlug: img('finished') },
    { word: 'PRODUCTIVE', partOfSpeech: 'adjective', definition: 'Getting a lot of useful things done.', example: 'I had a productive weekend.', imageSlug: img('productive') },
  ],

  phrasalVerbs: [
    { phrase: 'CATCH UP ON SLEEP', tag: 'collocation', definition: 'To sleep more than usual to feel rested.', example: 'I caught up on sleep on Saturday.', imageSlug: img('catch-up-sleep') },
    { phrase: 'GO OUT (WITH)', definition: 'To leave home to socialise.', example: 'I went out with friends on Friday night.', imageSlug: img('go-out') },
    { phrase: 'What did you do last weekend?', tag: 'phrase', definition: 'Ask about someone\'s recent weekend.', example: '"Morning! What did you do last weekend?"', imageSlug: img('what-did-you-do') },
    { phrase: "I didn't do much.", tag: 'phrase', definition: 'You had a quiet, simple weekend.', example: '"I didn\'t do much, to be honest. I just rested."', imageSlug: img('didnt-do-much') },
    { phrase: 'I visited a new place.', tag: 'phrase', definition: "You went somewhere you hadn't been before.", example: '"I visited a new place — a little village in the mountains."', imageSlug: img('new-place') },
    { phrase: 'I tried something different.', tag: 'phrase', definition: 'You did a new activity.', example: '"I tried something different: a pottery class!"', inAction: 'Add one detail after your answer ("…a pottery class!"). It gives the other person something to ask about.', imageSlug: img('something-different') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Morning, Tim! What did you do last weekend?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I tried something different. I [[went:past of go]] to a pottery class with my sister." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Pottery? That sounds fun. Did you make anything?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "A very ugly cup! But I enjoyed it. On Sunday I [[stayed:remained]] home and caught up on sleep. How about you?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I had a [[productive:getting lots done]] weekend. I cleaned my apartment and [[finished:completed]] a book I started months ago." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Nice! Did you go out at all?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, on Saturday evening I [[met:past of meet]] some friends and we [[tried:did something new]] a new Ethiopian restaurant." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Was it good?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Amazing! Next weekend I want to [[visit:go to see]] my parents, but I'll take you to the restaurant one day." },
  ],

  matchingExercise: [
    { word: 'WENT', definition: 'Past of "go"' },
    { word: 'MET', definition: 'Past of "meet"' },
    { word: 'CAUGHT UP ON SLEEP', definition: 'Slept more than usual' },
    { word: 'TRIED', definition: 'Did something new' },
    { word: 'STAYED', definition: 'Remained in one place' },
    { word: 'PRODUCTIVE', definition: 'Getting a lot done' },
  ],

  fillBlankExercise: [
    { before: 'What did you', after: 'last weekend?', answer: 'do' },
    { before: 'I', after: 'out with friends on Friday.', answer: 'went' },
    { before: 'I', after: 'some friends for lunch.', answer: 'met' },
    { before: 'I caught up', after: 'sleep on Sunday.', answer: 'on' },
    { before: 'I', after: 'a new restaurant. It was great!', answer: 'tried' },
    { before: "I didn't do", after: '. I just rested.', answer: 'much' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the past of "meet"?', options: ['meeted', 'met', 'meat', 'mate'], correctIndex: 1 },
    { question: 'What is the past of "catch"?', options: ['catched', 'caught', 'cought', 'catch'], correctIndex: 1 },
    { question: 'Which question is correct?', options: ['What did you did?', 'What you did?', 'What did you do?', 'What do you did?'], correctIndex: 2 },
    { question: 'What does "catch up on sleep" mean?', options: ['Sleep more than usual to feel rested', 'Stay awake all night', 'Have bad dreams', 'Wake up early'], correctIndex: 0 },
    { question: 'In the dialogue, what did Tim make at pottery class?', options: ['A plate', 'A cup', 'A vase', 'Nothing'], correctIndex: 1 },
    { question: 'What kind of restaurant did Kira try?', options: ['Italian', 'Ethiopian', 'Japanese', 'Mexican'], correctIndex: 1 },
  ],
};
