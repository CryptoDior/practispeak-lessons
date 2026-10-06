import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-look-see-watch-${s}.png`;

export const grammarLookSeeWatch: Lesson = {
  slug: 'grammar-look-see-watch',
  title: 'Look, See and Watch',
  subtitle: 'Grammar · A1-A2',
  level: 'A1-A2',
  description:
    'Look, see and watch are all about your eyes, but they are different. Learn when to use each one, with simple rules and lots of examples.',
  heroImage: img('hero'),

  objectives: [
    'Use "see" for things your eyes notice without trying.',
    'Use "look (at)" when you turn your eyes on purpose.',
    'Use "watch" for things you look at for some time, like TV.',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: See vs Look vs Watch',
    description:
      'SEE = it just happens, you don\'t try. LOOK (AT) = you turn your eyes on purpose, for a short time. WATCH = you look for some time because something moves or changes, like a movie or a game.',
    positiveLabel: 'See — no effort',
    negativeLabel: 'Look / Watch — on purpose',
    arrowStyle: true,
    positiveExamples: [
      { sentence: 'I opened my eyes and saw my room.', note: 'It just happened.' },
      { sentence: 'Did you see the rainbow this morning?', note: 'You noticed it.' },
      { sentence: "I didn't see you at the party.", note: 'Your eyes did not notice me.' },
    ],
    negativeExamples: [
      { sentence: 'Look at that bird!', note: 'Turn your eyes to it now.' },
      { sentence: 'Look at me when I talk to you.', note: 'On purpose, short time.' },
      { sentence: "Let's watch a movie tonight.", note: 'For a long time, it moves.' },
      { sentence: 'We watched the football game.', note: 'Something that changes.' },
    ],
  },

  vocabulary: [
    { word: 'SEE', partOfSpeech: 'verb', definition: 'To notice something with your eyes, without trying.', example: 'I can see the sea from my window.', imageSlug: img('see') },
    { word: 'LOOK (AT)', partOfSpeech: 'verb', definition: 'To turn your eyes to something on purpose.', example: 'Look at this photo!', imageSlug: img('look') },
    { word: 'WATCH', partOfSpeech: 'verb', definition: 'To look at something for some time, because it moves or changes.', example: 'I watch TV every evening.', imageSlug: img('watch') },
    { word: 'NOTICE', partOfSpeech: 'verb', definition: 'To see something for the first time.', example: 'I noticed a cat under the car.', imageSlug: img('notice') },
    { word: 'ON PURPOSE', partOfSpeech: 'phrase', definition: 'You decide to do it. It is not an accident.', example: 'I looked at the clock on purpose.', imageSlug: img('on-purpose') },
    { word: 'MOVIE', partOfSpeech: 'noun', definition: 'A film you watch for fun.', example: "Let's watch a movie tonight.", imageSlug: img('movie') },
  ],

  phrasalVerbs: [
    { phrase: 'LOOK AFTER', definition: 'To take care of someone or something.', example: 'Could you look after my plants while I\'m away?', imageSlug: img('look-after') },
    { phrase: 'LOOK FOR', definition: 'To try to find something.', example: "I'm looking for my keys.", imageSlug: img('look-for') },
    { phrase: 'WATCH OUT', definition: 'Be careful! There is danger.', example: 'Watch out! A car is coming!', imageSlug: img('watch-out') },
    { phrase: 'see + it just happens', tag: 'rule', definition: 'Use "see" when your eyes notice something without trying.', example: 'I saw an old friend in the shop.', imageSlug: img('rule-see') },
    { phrase: 'look at + something', tag: 'rule', definition: 'Use "look at" when you turn your eyes on purpose. Remember "at"!', example: 'Look at the board, please.', inAction: 'Say "look AT something": "Look at me", not "Look me".', imageSlug: img('rule-look-at') },
    { phrase: 'watch + moving things', tag: 'rule', definition: 'Use "watch" for TV, movies, sports and things that move.', example: 'I watch the news. The kids watch cartoons.', imageSlug: img('rule-watch') },
    { phrase: 'watch = look after', tag: 'rule', definition: '"Watch" can also mean "take care of for a short time".', example: 'Can you watch my bag for a minute?', imageSlug: img('rule-watch-bag') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Tim, [[look at:turn your eyes to, on purpose]] the sky!' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "What? I can't [[see:notice with my eyes]] anything." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "There, over the trees. It's a rainbow!" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Oh yes, now I see it. It\'s beautiful!' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Are you busy tonight? Do you want to [[watch:look at for some time]] a [[movie:a film]]?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure! But first I need to [[look for:try to find]] my keys. I can't find them." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Did you look in your bag?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Not yet. Can you [[look after:take care of]] my coffee while I look?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Of course. [[Watch out:be careful]]! You almost dropped your phone!" },
  ],

  matchingExercise: [
    { word: 'SEE', definition: 'Notice with your eyes, without trying' },
    { word: 'LOOK AT', definition: 'Turn your eyes to something on purpose' },
    { word: 'WATCH', definition: 'Look for some time at something that moves' },
    { word: 'LOOK FOR', definition: 'Try to find something' },
    { word: 'LOOK AFTER', definition: 'Take care of someone or something' },
    { word: 'WATCH OUT', definition: 'Be careful!' },
  ],

  fillBlankExercise: [
    { before: "Let's", after: 'a movie tonight.', answer: 'watch' },
    { before: 'Did you', after: 'the rainbow this morning?', answer: 'see' },
    { before: '', after: 'at that bird! It\'s so big!', answer: 'Look' },
    { before: 'I', after: 'TV every evening.', answer: 'watch' },
    { before: "I'm looking", after: 'my keys. Where are they?', answer: 'for' },
    { before: "I didn't", after: 'you at the party. Were you there?', answer: 'see' },
  ],

  multipleChoiceExercise: [
    { question: 'Choose the correct word: "I ___ football on TV every Sunday."', options: ['see', 'look', 'watch', 'look at'], correctIndex: 2 },
    { question: 'Choose the correct word: "___ at this picture!"', options: ['See', 'Look', 'Watch', 'Notice'], correctIndex: 1 },
    { question: 'You walk in the park and a cat is suddenly there. You…', options: ['see a cat', 'watch a cat', 'look a cat', 'look for a cat'], correctIndex: 0 },
    { question: 'Which sentence is correct?', options: ['Look me, please.', 'Look at me, please.', 'Look to me, please.', 'See at me, please.'], correctIndex: 1 },
    { question: 'What does "look after" mean?', options: ['Look behind you', 'Take care of', 'Try to find', 'Be careful'], correctIndex: 1 },
    { question: 'In the dialogue, what does Kira see in the sky?', options: ['A bird', 'A plane', 'A rainbow', 'The moon'], correctIndex: 2 },
  ],
};
