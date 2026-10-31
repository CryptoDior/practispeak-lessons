import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-b1-last-weekend-${s}.png`;

export const conversationB1LastWeekend: Lesson = {
  slug: 'conversation-b1-last-weekend',
  title: 'What Did You Do Last Weekend?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 6',
  level: 'B1-B2',
  description:
    'Talk about your weekend in more detail: what you did, where you went and how it was. Practice regular and irregular past tense verbs.',
  heroImage: `${img('hero')}?v=3`,

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
    { word: 'WENT (GO)', partOfSpeech: 'verb', definition: 'Past of "go": traveled or moved to a place.', example: 'I went to a museum last weekend.', imageSlug: img('museum') },
    { word: 'STAYED (STAY)', partOfSpeech: 'verb', definition: 'Past of "stay": remained in one place.', example: 'I stayed home most of the weekend.', imageSlug: img('stayed-home') },
    { word: 'VISITED (VISIT)', partOfSpeech: 'verb', definition: 'Past of "visit": went to see someone or somewhere.', example: 'I visited my cousin on Sunday.', imageSlug: img('visited-cousin') },
    { word: 'MET (MEET)', partOfSpeech: 'verb', definition: 'Past of "meet": saw someone socially or for a plan.', example: 'I met some friends for lunch.', imageSlug: img('friends-lunch') },
    { word: 'TRIED (TRY)', partOfSpeech: 'verb', definition: 'Past of "try": did something new.', example: 'I tried a new restaurant.', imageSlug: img('new-restaurant') },
    { word: 'FINISHED (FINISH)', partOfSpeech: 'verb', definition: 'Past of "finish": completed something.', example: 'I finished a book I started months ago.', imageSlug: img('finished-book') },
    { word: 'PRODUCTIVE', partOfSpeech: 'adjective', definition: 'Getting a lot of useful things done.', example: 'I had a productive weekend.', imageSlug: img('productive-weekend') },
  ],

  phrasalVerbs: [
    { phrase: 'CATCH UP ON SLEEP', tag: 'collocation', definition: 'To sleep more than usual to feel rested.', example: 'I caught up on sleep on Saturday.', imageSlug: img('sleep-saturday') },
    { phrase: 'GO OUT (WITH)', definition: 'To leave home to socialize.', example: 'I went out with friends on Friday night.', imageSlug: img('friday-night-out') },
    { phrase: 'What did you do last weekend?', tag: 'phrase', definition: 'Ask about someone\'s recent weekend.', example: '"Morning! What did you do last weekend?"', imageSlug: img('weekend-question') },
    { phrase: "I didn't do much.", tag: 'phrase', definition: 'You had a quiet, simple weekend.', example: '"I didn\'t do much, to be honest. I just rested."', imageSlug: img('quiet-rested') },
    { phrase: 'I visited a new place.', tag: 'phrase', definition: "You went somewhere you hadn't been before.", example: '"I visited a new place — a little village in the mountains."', imageSlug: img('mountain-village') },
    { phrase: 'I tried something different.', tag: 'phrase', definition: 'You did a new activity.', example: '"I tried something different: a pottery class!"', inAction: 'Add one detail after your answer ("…a pottery class!"). It gives the other person something to ask about.', imageSlug: img('pottery-class') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Morning, Oliver! What did you do last weekend?' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "I tried something different. I [[went:past of go]] to a pottery class with my sister." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Pottery? That sounds fun. Did you make anything?' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "A very ugly cup! But I enjoyed it. On Sunday I [[stayed:remained]] home and caught up on sleep. How about you?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I had a [[productive:getting lots done]] weekend. I cleaned my apartment and [[finished:completed]] a book I started months ago." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Nice! Did you go out at all?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Yes, on Saturday evening I [[met:past of meet]] some friends and we [[tried:did something new]] a new Ethiopian restaurant." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Was it good?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Amazing! Next weekend I want to [[visit:go to see]] my parents, but I'll take you to the restaurant one day." },
  ],

  practiceTime: {
    instructions: "Read the conversation with your teacher. Fill each blank out loud with a word or phrase from the lesson \u2014 you can give your own answers too.",
    lines: [
      { speaker: 'Teacher', text: "What did you do last weekend?" },
      { speaker: 'Student', text: "I {{went}} to {{a museum/the beach/the cinema}} on Saturday." },
      { speaker: 'Teacher', text: "Did you go out with friends?" },
      { speaker: 'Student', text: "Yes, I {{went out with}} my friends on Friday night. We {{tried}} a new restaurant. What did you do last weekend?" },
      { speaker: 'Teacher', text: "I didn't do {{much}}. / I tried something {{different}}. I {{stayed home/went out with friends}}. Did you visit anyone?" },
      { speaker: 'Student', text: "Yes, I {{visited}} my {{cousin/parents/grandmother}} on Sunday." },
      { speaker: 'Teacher', text: "Did you try something different?" },
      { speaker: 'Student', text: "Yes, I {{tried something different}} — a {{cooking/dance/yoga}} class." },
      { speaker: 'Teacher', text: "Was it a productive weekend?" },
      { speaker: 'Student', text: "Yes, it was {{productive}}. I {{finished}} a book and cleaned my flat." },
      { speaker: 'Teacher', text: "Did you get enough sleep?" },
      { speaker: 'Student', text: "Yes, I {{caught up on sleep}} on Sunday." },
    ],
  },

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
    { question: 'In the dialogue, what did Oliver make at pottery class?', options: ['A plate', 'A cup', 'A vase', 'Nothing'], correctIndex: 1 },
    { question: 'What kind of restaurant did Rosie try?', options: ['Italian', 'Ethiopian', 'Japanese', 'Mexican'], correctIndex: 1 },
  ],
};
