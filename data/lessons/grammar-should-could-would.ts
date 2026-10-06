import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}grammar-should-could-would-${s}.png`;

export const grammarShouldCouldWould: Lesson = {
  slug: 'grammar-should-could-would',
  title: 'Should, Could and Would',
  subtitle: 'Grammar · B1-B2',
  level: 'B1-B2',
  description:
    'Three small words with big jobs: SHOULD for advice, COULD for possibility and past ability, WOULD for imaginary situations and polite requests.',
  heroImage: img('hero'),

  objectives: [
    'Give advice with "should".',
    'Talk about possibility and past ability with "could".',
    'Talk about unreal situations and ask politely with "would".',
  ],

  grammarFocus: {
    focusTitle: 'Grammar Focus: Modal Verbs — Should, Could, Would',
    description:
      'All three are followed by the BASE VERB (no "to", no -s). SHOULD = a good idea / the right thing. COULD = possible, or was able to. WOULD = imagining something not real, or asking nicely.',
    singlePattern: 'SHOULD / COULD / WOULD + base verb',
    singlePatternExample: '"You should rest." / "We could go." / "Would you help me?"',
    arrowStyle: true,
    positiveLabel: 'Examples',
    negativeLabel: 'Negatives',
    positiveExamples: [
      { sentence: 'You should eat more fruit.', note: 'Advice — a good idea.' },
      { sentence: 'We could go to the park later.', note: 'A possibility.' },
      { sentence: 'I could play piano when I was a child.', note: 'Past ability.' },
      { sentence: 'Would you like some tea?', note: 'Asking nicely.' },
    ],
    negativeExamples: [
      { sentence: "You shouldn't work so late.", note: 'Not a good idea.' },
      { sentence: "I couldn't sleep last night.", note: 'Wasn\'t able to.' },
      { sentence: "I wouldn't do that if I were you.", note: 'Advice using an imaginary situation.' },
    ],
  },

  vocabulary: [
    { word: 'SHOULD', partOfSpeech: 'verb', definition: 'Use it for advice or the right thing to do.', example: 'You should bring an umbrella.', imageSlug: img('should') },
    { word: 'COULD', partOfSpeech: 'verb', definition: 'Use it for possibility, or ability in the past.', example: 'They could win if they play well.', imageSlug: img('could') },
    { word: 'WOULD', partOfSpeech: 'verb', definition: 'Use it for imaginary situations or polite requests.', example: 'I would go, but I\'m busy.', imageSlug: img('would') },
    { word: 'ADVICE', partOfSpeech: 'noun', definition: 'An opinion about what someone should do.', example: 'My mum always gives good advice.', imageSlug: img('advice') },
    { word: 'POSSIBILITY', partOfSpeech: 'noun', definition: 'Something that might happen.', example: 'Rain is a possibility today.', imageSlug: img('possibility') },
    { word: 'ABILITY', partOfSpeech: 'noun', definition: 'Being able to do something.', example: 'She has the ability to speak four languages.', imageSlug: img('ability') },
    { word: 'JUST IN CASE', partOfSpeech: 'phrase', definition: 'To be ready if something happens.', example: 'Take an umbrella, just in case.', imageSlug: img('just-in-case') },
  ],

  phrasalVerbs: [
    { phrase: 'should + base verb', tag: 'rule', definition: 'Advice or a good idea.', example: 'He should wear a coat. It\'s cold.', imageSlug: img('rule-should') },
    { phrase: 'could + base verb (possibility)', tag: 'rule', definition: 'Something possible but not sure.', example: 'We could try the new pizza place.', imageSlug: img('rule-could-possible') },
    { phrase: 'could + base verb (past ability)', tag: 'rule', definition: 'Something you were able to do before.', example: 'They could speak two languages when they were ten.', imageSlug: img('rule-could-ability') },
    { phrase: 'would + base verb (not real)', tag: 'rule', definition: 'An imaginary situation.', example: 'We would visit you if we had a car.', imageSlug: img('rule-would-unreal') },
    { phrase: 'Would you…? / Would you like…?', tag: 'rule', definition: 'A polite way to ask or offer.', example: 'Would you help me with my homework? Would you like some tea?', inAction: '"Would you like…?" is the polite offer. "Do you want…?" is fine with friends, but "Would you like…?" is better with guests and clients.', imageSlug: img('rule-would-polite') },
    { phrase: 'No "to" after modals', tag: 'rule', definition: 'Never put "to" after should, could or would.', example: '✓ You should go. ✗ You should to go.', imageSlug: img('rule-no-to') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Hey Tim! Do you want to go to the park later?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Hmm, we [[could:it's possible to]] go, but it looks like it might rain." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "True. You [[should:it's a good idea to]] bring an umbrella, [[just in case:to be ready if it happens]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Good idea! By the way, [[would:a polite way to ask]] you like to try the new pizza place after the park?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That sounds great! I would love to." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Cool. Do you think we should invite Sarah too?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes, we should. She loves pizza. She couldn't come last time because she was sick." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'll message her. If she says no, we could go to the cinema instead." },
  ],

  matchingExercise: [
    { word: 'SHOULD', definition: 'Advice; a good idea' },
    { word: 'COULD', definition: 'Possibility or past ability' },
    { word: 'WOULD', definition: 'Imaginary situations or polite requests' },
    { word: 'WOULD YOU LIKE…?', definition: 'A polite offer' },
    { word: 'COULDN\'T', definition: 'Was not able to' },
    { word: 'JUST IN CASE', definition: 'To be ready if something happens' },
  ],

  fillBlankExercise: [
    { before: "You look tired. You", after: 'go to bed early.', answer: 'should' },
    { before: 'I', after: 'swim when I was five.', answer: 'could' },
    { before: '', after: 'you like some coffee?', answer: 'Would' },
    { before: 'We', after: 'visit you if we had a car.', answer: 'would' },
    { before: "It's cold. He", after: 'wear a coat.', answer: 'should' },
    { before: "I", after: "sleep last night. It was too hot.", answer: "couldn't" },
  ],

  multipleChoiceExercise: [
    { question: 'Which modal gives advice?', options: ['should', 'could', 'would', 'will'], correctIndex: 0 },
    { question: 'Which sentence is correct?', options: ['You should to rest.', 'You should rest.', 'You should resting.', 'You shoulds rest.'], correctIndex: 1 },
    { question: '"I could play piano when I was a child" means…', options: ['I can play now', 'I was able to play in the past', "I'm going to play", 'I should play'], correctIndex: 1 },
    { question: 'Which is the most polite offer?', options: ['Want tea?', 'Would you like some tea?', 'You should drink tea.', 'Tea, OK?'], correctIndex: 1 },
    { question: 'In the dialogue, why should Tim bring an umbrella?', options: ['It is sunny', 'It might rain', 'It is cold', 'Kira asked for it'], correctIndex: 1 },
    { question: "Why couldn't Sarah come last time?", options: ['She was busy', 'She was sick', 'She was on holiday', "She doesn't like pizza"], correctIndex: 1 },
  ],
};
