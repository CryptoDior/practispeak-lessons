import { Lesson } from '@/types/lesson';

export const c2TheFootballEssay: Lesson = {
  slug: 'c2-the-football-essay',
  title: 'The Football Essay',
  subtitle: 'Unit 1 — The Analyst\'s Toolkit',
  level: 'C1-C2',
  description: 'The football essay is the most demanding form of football writing — it requires a clear thesis, layered argument, and sustained persuasion across thousands of words. Learn the architecture and language of long-form persuasive writing on contested football topics.',
  heroImage: '/images/football-essay.png',

  warmUp: {
    questions: [
      'What football question do you feel strongly enough about to write 2,000 words defending your position?',
      'What is the difference between a match report, a feature article, and an essay? What does an essay do that the others cannot?',
      'Have you ever read a piece of football writing that changed your opinion on something? What was it?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Discourse markers — signposting your argument as you build it',
    description: 'A football essay needs signposts — words and phrases that guide the reader through your argument and make the structure visible. Introducing a point: "The first claim I want to make is..." Developing: "This is worth exploring in more detail..." Conceding: "It is true that... / One could argue that..." Rebutting: "However, this overlooks... / The problem with this position is..." Transitioning: "Having established X, I now want to turn to Y..." Concluding: "If the argument above is correct, then the implication is..." Using these markers explicitly makes a complex essay navigable and signals to the reader that you are in control of your argument.',
    positiveExamples: [
      { sentence: 'Having established that possession statistics are a weak proxy for dominance, I now want to turn to what better metrics might look like.', note: '"Having established... I now want to turn to..." — the argument\'s architecture made visible' },
      { sentence: 'One could argue that the press conference gives managers undue influence over the media narrative — and there is something to that.', note: '"One could argue... and there is something to that" — a concession that takes the opposing view seriously before developing the rebuttal' },
      { sentence: 'If the argument above is correct, then the implication is straightforward: football governance needs independent oversight, not self-regulation.', note: '"If the argument above is correct... then the implication is..." — the conclusion follows logically from the preceding argument' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'POLEMIC',
      partOfSpeech: 'noun',
      definition: 'A strongly argued piece that attacks a position or defends one forcefully — not trying to be balanced, but trying to win.',
      example: '"The piece is a polemic against Financial Fair Play — a deliberately one-sided argument designed to persuade, not to present all views equally."',
      imageSlug: '/images/polemic.png',
    },
    {
      word: 'DISCURSIVE',
      partOfSpeech: 'adjective',
      definition: 'Moving through a topic by exploring different aspects — covering a lot of ground, not always in a straight line.',
      example: '"His discursive style suits the long-form essay — he circles around the central question from different angles before arriving at his conclusion."',
      imageSlug: '/images/discursive.png',
    },
    {
      word: 'PIVOT',
      partOfSpeech: 'noun / verb',
      definition: 'A turn from one direction to another — in an essay, the moment where the argument shifts or the counter-position is introduced.',
      example: '"The pivot comes in the fourth paragraph — having conceded the counterargument, the writer turns it back against itself."',
      imageSlug: '/images/pivot.png',
    },
    {
      word: 'SIGNPOST',
      partOfSpeech: 'noun / verb',
      definition: 'A phrase or sentence that tells the reader where the argument is going — making the structure visible.',
      example: '"Good essays signpost every major move: \'Having established X, I now want to turn to Y.\' The reader always knows where they are."',
      imageSlug: '/images/c2-the-football-essay-signpost.png',
    },
    {
      word: 'QUALIFICATION',
      partOfSpeech: 'noun',
      definition: 'A condition or limitation attached to a claim — saying that something is true, but with certain exceptions or caveats.',
      example: '"The qualification matters: I am not saying VAR should be abolished — only that its current application to subjective decisions is counterproductive."',
      imageSlug: '/images/qualification-essay.png',
    },
    {
      word: 'RHETORICAL QUESTION',
      partOfSpeech: 'noun',
      definition: 'A question asked for effect — not expecting an answer, but making a point through the form of a question.',
      example: '"The essay opens with a rhetorical question: \'If the richest clubs can spend without limit, what is a league for?\' The question does the argumentative work before a single claim is made."',
      imageSlug: '/images/rhetorical-question.png',
    },
    {
      word: 'IMPLICATION',
      partOfSpeech: 'noun',
      definition: 'What follows logically from an argument — the conclusion that the evidence and reasoning point toward.',
      example: '"The implication of this analysis is uncomfortable but unavoidable: clubs that claim to prioritise youth development do not, in practice, give it genuine resources."',
      imageSlug: '/images/c2-the-football-essay-implication.png',
    },
    {
      word: 'SUSTAINED',
      partOfSpeech: 'adjective',
      definition: 'Maintained consistently over a long period or through a long piece — an argument that does not weaken or drift.',
      example: '"What distinguishes a great football essay from a good one is sustained argumentation — the same central thesis controlled throughout, without losing focus."',
      imageSlug: '/images/sustained.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BUILD A CASE',
      definition: 'To construct an argument piece by piece — accumulating evidence and reasoning toward a conclusion.',
      example: '"Over six sections, she builds a case against the European Super League that is hard to refute by the time you reach her conclusion."',
      imageSlug: '/images/build-a-case.png',
    },
    {
      phrase: 'MARSHAL EVIDENCE',
      definition: 'To gather and organise evidence effectively in support of an argument.',
      example: '"He marshals his evidence with precision — each example selected to illustrate a specific aspect of the central argument."',
      imageSlug: '/images/marshal-evidence.png',
    },
    {
      phrase: 'CIRCLE BACK TO',
      definition: 'To return to something mentioned earlier — often to show how a later argument relates to the opening.',
      example: '"In the conclusion, she circles back to the rhetorical question from the opening — and by now the reader understands exactly what the answer is."',
      imageSlug: '/images/circle-back-to.png',
    },
    {
      phrase: 'DRIVE HOME',
      definition: 'To emphasise a point forcefully and make it stick — to make sure the reader cannot ignore the argument\'s conclusion.',
      example: '"The final three paragraphs drive home the central point with mounting force — each one adding a new piece of evidence until the conclusion feels inevitable."',
      imageSlug: '/images/drive-home.png',
    },
    {
      phrase: 'HOLD TOGETHER',
      definition: 'To remain coherent and consistent throughout — for an argument to stay unified across a long piece.',
      example: '"The essay holds together because every paragraph serves the central thesis — nothing is included just because it\'s interesting."',
      imageSlug: '/images/hold-together.png',
    },
    {
      phrase: 'STEER TOWARD',
      definition: 'To guide the reader gradually toward a conclusion — the writer\'s control over where the argument ends up.',
      example: '"From the opening paragraph, the writer steers the reader toward the uncomfortable conclusion that football\'s governance model is structurally broken."',
      imageSlug: '/images/steer-toward.png',
    },
  ],

  onThePitch: {
    instructions: 'The architecture and key techniques of a well-constructed football essay.',
    items: [
      {
        cue: 'The essay opening — hook, thesis, roadmap',
        meaning: 'A football essay has three jobs in its opening: hook the reader, state the thesis, and sketch the argument\'s roadmap. All three should happen in the first two paragraphs.',
        usage: '"Hook: a rhetorical question, a striking claim, or a vivid specific moment. Thesis: one clear sentence stating the central claim. Roadmap: a brief indication of how the argument will proceed — \'I will argue this by first establishing X, then demonstrating Y, and finally showing that the implication of both is Z.\' Readers who know where they are going are more likely to follow you there."',
        imageSlug: 'otp-essay-opening',
      },
      {
        cue: 'The pivot — turning the counterargument back on itself',
        meaning: 'The strongest essays use the pivot: they acknowledge the counterargument seriously, and then show how it actually strengthens the original thesis.',
        usage: '"One could argue that Financial Fair Play protects financial stability — and there is something to that. But the pivot: the same regulations that protect stability also protect the competitive advantage of already-wealthy clubs, making it almost impossible for new investment to challenge the established order. The counterargument, properly examined, reveals the problem it was supposed to solve."',
        imageSlug: 'otp-pivot',
      },
      {
        cue: 'Signposting — making the structure visible',
        meaning: 'Long essays need signposts. The reader should never be lost — they should always know where the argument is and where it is going.',
        usage: '"Before each major section: \'Having established the financial context, I now want to turn to the governance question.\' Before the conclusion: \'If the argument I have made is correct, the implications are significant.\' After a concession: \'I accept this — but it does not change the central claim.\' Signposts are not weak writing. They are the marks of an argument that knows where it is going."',
        imageSlug: 'otp-signposting',
      },
      {
        cue: 'Marshalling evidence — not listing, but selecting',
        meaning: 'A strong essay does not include every piece of relevant evidence — it selects the evidence that most clearly illustrates each specific point. Marshalling is the art of selection.',
        usage: '"Weak: listing twelve statistics. Strong: choosing the one statistic that is hardest to explain away and building a paragraph around it. Weak: citing five examples of a phenomenon. Strong: selecting the one example that is both typical and vivid, and examining it in depth. Evidence should be marshalled with a purpose — each piece earning its place by doing specific argumentative work."',
        imageSlug: 'otp-marshalling',
      },
      {
        cue: 'Sustained argument — the discipline of not drifting',
        meaning: 'The most common failure in long essays is drift — introducing interesting material that does not serve the central thesis. Every paragraph must pass the test: does this directly support the argument?',
        usage: '"The test for every paragraph: \'If I removed this, would the argument be weaker?\' If the answer is no — the paragraph is an interesting digression, not a piece of the argument. Cut it, or find a way to connect it explicitly to the thesis. An essay that holds together is one where every element is earning its place."',
        imageSlug: 'otp-sustained-argument',
      },
      {
        cue: 'The conclusion — implication, not summary',
        meaning: 'A strong conclusion does not summarise what has already been said. It states the implication — what follows from the argument that has been made, and why it matters.',
        usage: '"Weak conclusion: \'In this essay, I have argued that X, Y, and Z.\' Strong conclusion: \'If the argument above is correct, the implication is uncomfortable but clear: football cannot regulate itself, and external governance is not an optional extra — it is the condition for the game\'s survival as something worth caring about.\' The conclusion is where the essay\'s stakes become clear."',
        imageSlug: 'otp-conclusion-essay',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Editor', speakerColor: 'purple', text: 'Your argument is clear — but the essay drifts in section three. You\'ve lost the thesis for two whole paragraphs.' },
    { speaker: 'Writer', speakerColor: 'green', text: 'I thought the historical context was important — it explains where the problem came from.' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'It\'s interesting — but does it directly support the thesis, or is it a digression you find fascinating?' },
    { speaker: 'Writer', speakerColor: 'green', text: 'If I\'m honest — it\'s a digression. But I can\'t bring myself to cut it.' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'Then connect it explicitly. Show the reader how it serves the argument. Or cut it. Those are the only two options.' },
    { speaker: 'Writer', speakerColor: 'green', text: 'The conclusion also feels weak to me — it just summarises what I\'ve already said.' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'Because it does. Your conclusion should state the implication — not the summary. What does your argument mean? What follows from it?' },
    { speaker: 'Writer', speakerColor: 'green', text: 'That football governance needs external accountability — not just internal codes that clubs can ignore.' },
  ],

  matchingExercise: [
    { word: 'Polemic', definition: 'A strongly argued piece that attacks or defends a position forcefully — one-sided by design' },
    { word: 'Discursive', definition: 'Moving through a topic by exploring different aspects — not always in a straight line' },
    { word: 'Pivot', definition: 'The moment in an essay where the argument turns — often where the counterargument is introduced and reversed' },
    { word: 'Signpost', definition: 'A phrase that tells the reader where the argument is going — making structure visible' },
    { word: 'Qualification', definition: 'A condition or limitation attached to a claim — stating exceptions or caveats' },
    { word: 'Rhetorical question', definition: 'A question asked for effect — not expecting an answer but making a point' },
    { word: 'Implication', definition: 'What follows logically from an argument — the conclusion the evidence points toward' },
    { word: 'Sustained', definition: 'Maintained consistently throughout — an argument that does not weaken or drift' },
  ],

  fillBlankExercise: [
    { before: 'Over six sections, she', answer: 'builds a case', after: 'against Financial Fair Play that is hard to refute by the conclusion.' },
    { before: 'He', answer: 'marshals', after: 'his evidence with precision — each example selected to do specific argumentative work.' },
    { before: 'In the conclusion, she', answer: 'circles back to', after: 'the rhetorical question from the opening — and by now the reader knows the answer.' },
    { before: 'The final three paragraphs', answer: 'drive home', after: 'the central point — each adding evidence until the conclusion feels inevitable.' },
    { before: 'The essay', answer: 'holds together', after: 'because every paragraph serves the thesis — nothing included just because it\'s interesting.' },
    { before: 'From the opening paragraph, the writer', answer: 'steers', after: 'the reader toward the uncomfortable conclusion about governance.' },
    { before: 'The', answer: 'implication', after: 'of this analysis is clear: football cannot regulate itself effectively.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What are the three jobs of a football essay opening?',
      options: ['Hook the reader, state the thesis, and sketch the argument\'s roadmap — all in the first two paragraphs', 'Introduce the topic, provide historical context, and acknowledge the counterargument — before stating your position', 'Present the data, explain the methodology, and state the research question — standard analytical essay structure'],
      correctIndex: 0,
    },
    {
      question: 'What is "the pivot" in an essay argument?',
      options: ['The moment where the counterargument is acknowledged and then turned back on itself — showing how it actually strengthens the original thesis', 'The transition between the second and third sections — where the essay changes direction', 'The final paragraph where the writer summarises all the arguments made in the preceding sections'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "Having established the financial context, I now want to ___ to the governance question."',
      options: ['turn', 'move', 'come'],
      correctIndex: 0,
    },
    {
      question: 'What is the test for every paragraph in a well-sustained essay?',
      options: ['"If I removed this, would the argument be weaker?" — every paragraph must directly serve the central thesis to earn its place', '"Is this interesting to the reader?" — a paragraph that holds attention is earning its place in the essay', '"Does this paragraph introduce a new piece of evidence?" — each section must add something factually new'],
      correctIndex: 0,
    },
    {
      question: 'What should a strong conclusion do — rather than summarise?',
      options: ['State the implication — what follows from the argument that has been made, and why it matters beyond the essay itself', 'Pose a new question that extends the argument into a possible area for future research', 'Restate the thesis in more confident language now that the argument has been fully proven'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about football essay writing.',
    items: [
      {
        sentence: 'Having established that possession is a weak metric, I now want to ___ to what better alternatives look like.',
        options: ['turn', 'circle', 'steer'],
        correctIndex: 0,
        explanation: '"Turn to" is the standard discourse marker for moving to a new section — "I now want to turn to Y" signals the transition explicitly.',
      },
      {
        sentence: 'In the conclusion, she ___ back to the rhetorical question from the opening — and by now the answer is clear.',
        options: ['circles', 'steers', 'drives'],
        correctIndex: 0,
        explanation: '"Circle back to" means to return to something introduced earlier — creating the structural closure that strong essays achieve.',
      },
      {
        sentence: 'The final three paragraphs ___ home the central point until the conclusion feels completely inevitable.',
        options: ['drive', 'build', 'hold'],
        correctIndex: 0,
        explanation: '"Drive home" means to emphasise forcefully and make a point stick — the mounting pressure of a well-constructed conclusion.',
      },
      {
        sentence: 'The essay ___ together because every element directly serves the thesis — nothing is included just because it is interesting.',
        options: ['holds', 'builds', 'marshals'],
        correctIndex: 0,
        explanation: '"Hold together" means to remain coherent and consistent — for an argument to stay unified across a long piece.',
      },
      {
        sentence: 'He ___ his evidence precisely — each example selected to illustrate a specific aspect of the argument.',
        options: ['marshals', 'builds', 'drives'],
        correctIndex: 0,
        explanation: '"Marshal evidence" means to gather and organise it effectively — selecting and deploying evidence with a clear purpose.',
      },
      {
        sentence: 'The opening ___ question does the argumentative work before a single claim is made.',
        options: ['rhetorical', 'discursive', 'sustained'],
        correctIndex: 0,
        explanation: 'A rhetorical question is asked for effect — making a point through the form of a question rather than as a direct claim.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are writing and editing a football essay. Choose the most effective approach.',
      items: [
        {
          customerLine: 'An editor says: "Your conclusion just repeats what you\'ve already said. I\'m not learning anything new from it."',
          options: [
            '"You\'re right — I\'ll rewrite it to state the implication instead. If my argument is correct, then what follows from it? What does it mean for football governance beyond this specific case?"',
            '"A conclusion is supposed to summarise the argument — that\'s its job. I think it\'s correct as it is."',
            '"I\'ll add more evidence to the conclusion to make it feel more substantial."',
          ],
          correctIndex: 0,
          explanation: 'A conclusion should state the implication — not repeat what has already been said. The best response immediately identifies the correct fix.',
        },
        {
          customerLine: '"Your essay drifts badly in section three — you\'ve completely lost your thesis."',
          options: [
            '"Let me test every paragraph against the thesis: if removing it would not weaken the argument, it either needs to be cut or explicitly connected to the central claim. Which specific paragraph is the worst offender?"',
            '"Section three provides important context — without it, the reader won\'t understand the full picture."',
            '"I\'ll add more signposting to make the connection to the thesis more visible."',
          ],
          correctIndex: 0,
          explanation: 'The best response applies the correct diagnostic test — asking whether each paragraph earns its place — and then asks specifically where the problem is worst.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the structural mistake in this essay conclusion.',
      dialogue: [
        { speaker: 'Writer', speakerColor: 'green', text: 'In conclusion, in this essay I have argued that Financial Fair Play is flawed.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'I have shown that it protects wealthy clubs, that it limits new investment, and that it is enforced inconsistently.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'I have also demonstrated that smaller clubs are disadvantaged by the current system.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'These three arguments together prove that Financial Fair Play needs reform.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'Therefore, in this essay, I have argued that Financial Fair Play should be reformed.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'In conclusion, in this essay I have argued that Financial Fair Play is flawed.',
          correction: 'If the argument made in this essay is correct, the implication is both clear and uncomfortable: football cannot be trusted to regulate its own financial governance. Financial Fair Play was designed to prevent the concentration of wealth — and it has, instead, entrenched it. The conclusion is not that the regulations need reform. It is that the principle of self-regulation in a system this financially distorted is itself the problem.',
          explanation: 'This conclusion commits the most common essay mistake: summarising instead of implying. Every sentence simply repeats what the essay has already said. A strong conclusion should answer the question: "So what? What follows from this argument? Why does it matter beyond this specific case?" The implication should feel like a discovery — not a repetition.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the football essay passage at C2 level.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'One could argue that Financial Fair Play promotes financial stability — and there is genuine substance to that claim. But the pivot is this:...',
          suggestedCompletion: 'the same regulations that prevent reckless spending also prevent legitimate investment challenging the established hierarchy. A rule that protects stability by freezing existing inequality is not solving the problem — it is institutionalising it. The counterargument, when examined carefully, reveals exactly what it was trying to conceal.',
        },
        {
          customerLine: '',
          salespersonStart: 'Having established that the governance model is broken, I now want to turn to what an alternative might look like. The question is not whether reform is needed — that much is clear — it is...',
          suggestedCompletion: 'whether the people with the power to reform it have any incentive to do so. And here the argument becomes more uncomfortable: the clubs that benefit most from the current system are also the clubs with the most influence over the regulatory bodies that govern it. That is the structural conflict of interest that any genuine reform must address first.',
        },
        {
          customerLine: '',
          salespersonStart: 'If the argument above is correct, the implication for football\'s future is...',
          suggestedCompletion: 'that the game cannot continue to treat governance as an afterthought to sport. The financial stakes are now too high, the concentration of wealth too extreme, and the conflicts of interest too deeply embedded for self-regulation to be credible. External, independent oversight is not an idealistic demand — it is the minimum condition for football to remain a competition rather than an exhibition.',
        },
      ],
    },
  },
};
