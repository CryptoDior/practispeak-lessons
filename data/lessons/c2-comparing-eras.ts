import { Lesson } from '@/types/lesson';

export const c2ComparingEras: Lesson = {
  slug: 'c2-comparing-eras',
  title: 'Comparing Eras',
  subtitle: 'Unit 1 — The Analyst\'s Toolkit',
  level: 'C1-C2',
  description: '"Could Pelé play in today\'s game?" is one of football\'s most debated questions. Learning how to discuss different eras — using hypotheticals, conditionals, and precise qualifying language — is a core C2 analytical skill.',
  heroImage: '/images/comparing-eras.png',

  warmUp: {
    questions: [
      'Do you think Pelé, Cruyff, or Maradona would be just as dominant if they played today? What makes the question difficult to answer?',
      'What changes the most between football eras — the players, the tactics, the physical demands, or the rules?',
      'Is it fair to compare players from different eras at all? What would make such a comparison valid or invalid?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Mixed conditionals — hypotheticals across time',
    description: 'Comparing eras requires hypothetical language: imagining players or teams in conditions different from reality. Mixed conditionals combine time frames. "If Pelé were playing today (present hypothetical), he would have been coached from age 8 in a professional academy (past result)." The key structures: If + past simple → would + infinitive (present hypothetical: "If Cruyff were playing now, he would dominate"). If + past perfect → would + infinitive (past hypothetical: "If the pressing game had existed in 1970, total football would have looked different"). The most important word in era comparisons is "context" — always specify what you are and are not assuming.',
    positiveExamples: [
      { sentence: 'If Pelé were playing today, he would be operating in a far more physically demanding game — but the talent would adapt.', note: 'Present hypothetical — imagining Pelé alive and young today' },
      { sentence: 'If the xG model had existed in 1974, Total Football would have tested its underlying assumptions significantly.', note: 'Past hypothetical — imagining a concept applied to a past era' },
      { sentence: 'Were Cruyff to have developed in a modern academy system, his spatial intelligence might have been even more refined — though it is impossible to know for certain.', note: 'Formal inversion ("Were X to...") — very common in C2 analytical writing' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'COUNTERFACTUAL',
      partOfSpeech: 'adjective',
      definition: 'A hypothetical that runs counter to the facts — imagining how things might have been different under different conditions.',
      example: '"The counterfactual question — would Maradona be as dominant in today\'s game? — is impossible to answer definitively, but highly instructive to explore."',
      imageSlug: '/images/counterfactual.png',
    },
    {
      word: 'CONTEXT-DEPENDENT',
      partOfSpeech: 'adjective',
      definition: 'Something that can only be understood or evaluated in relation to its specific time, place, and conditions.',
      example: '"Greatness in football is context-dependent — Messi in 2023 is not the same as Messi in 2013, because the game around him is different."',
      imageSlug: '/images/context-dependent.png',
    },
    {
      word: 'ANACHRONISM',
      partOfSpeech: 'noun',
      definition: 'Something placed in the wrong time period — evaluating a past player by today\'s standards without accounting for the difference in conditions.',
      example: '"Criticising 1970s defenders for not pressing high is an anachronism — the concept barely existed in that era and they cannot be judged by it."',
      imageSlug: '/images/anachronism.png',
    },
    {
      word: 'CALIBRATE',
      partOfSpeech: 'verb',
      definition: 'To adjust your judgment carefully to account for specific conditions — to make a comparison that is appropriately scaled.',
      example: '"You have to calibrate for era — a goal-scoring record from the 1960s means something different from the same record today, when the game is faster and defenders more organised."',
      imageSlug: '/images/calibrate.png',
    },
    {
      word: 'TRANSPOSABLE',
      partOfSpeech: 'adjective',
      definition: 'Capable of being moved to a different context without losing its value — a quality or skill that works across different eras or systems.',
      example: '"The most transposable qualities in football — spatial intelligence, composure under pressure, decision speed — appear to translate across eras regardless of tactical context."',
      imageSlug: '/images/transposable.png',
    },
    {
      word: 'CONTEMPORANEOUS',
      partOfSpeech: 'adjective',
      definition: 'Belonging to the same period — happening or existing at the same time.',
      example: '"The most rigorous comparison is contemporaneous — how did a player perform against the best opponents of their own era?"',
      imageSlug: '/images/contemporaneous.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: 'A standard of reference used for comparison — what you measure everything else against.',
      example: '"The 1970 Brazil team is often used as the benchmark for attacking football — the standard everything that followed is measured against."',
      imageSlug: '/images/benchmark-eras.png',
    },
    {
      word: 'RETROSPECTIVE',
      partOfSpeech: 'adjective',
      definition: 'Looking back at the past — a retrospective evaluation applies today\'s understanding to yesterday\'s events.',
      example: '"A retrospective xG analysis of Cruyff\'s career would be fascinating — but we would need to acknowledge the limitations of applying modern models to historical footage."',
      imageSlug: '/images/retrospective.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TRANSLATE TO',
      definition: 'To transfer successfully to a different context — when a quality or skill works in a new environment.',
      example: '"Spatial intelligence translates across eras — the ability to find and use space is valuable regardless of the tactical system."',
      imageSlug: '/images/translate-to.png',
    },
    {
      phrase: 'HOLD UP IN',
      definition: 'To remain valid or impressive when placed in a different context or under scrutiny.',
      example: '"His record holds up in any era — 75 international goals against the strongest competition of three different decades."',
      imageSlug: '/images/hold-up-in.png',
    },
    {
      phrase: 'MAP ONTO',
      definition: 'To transfer one concept or framework onto another — to apply the structure of one thing to a different subject.',
      example: '"You can\'t simply map modern positional roles onto 1970s players — the positions themselves were defined differently."',
      imageSlug: '/images/map-onto.png',
    },
    {
      phrase: 'MEASURE UP',
      definition: 'To reach the required standard — to be good enough by comparison.',
      example: '"The question is whether any modern player measures up to Cruyff in terms of conceptual influence on how the game is understood and played."',
      imageSlug: '/images/measure-up.png',
    },
    {
      phrase: 'BRIDGE THE GAP',
      definition: 'To connect two things that are otherwise separate — to make a valid comparison between very different contexts.',
      example: '"Statistics alone cannot bridge the gap between eras — you also need qualitative understanding of what the game was like at the time."',
      imageSlug: '/images/bridge-gap-eras.png',
    },
    {
      phrase: 'STAND COMPARISON',
      definition: 'To be worthy of being compared to someone or something — to not be diminished by the comparison.',
      example: '"Van Dijk in his peak years stands comparison with any central defender from any era — the question is which qualities you weight most highly."',
      imageSlug: '/images/stand-comparison.png',
    },
  ],

  onThePitch: {
    instructions: 'The key tools for comparing football eras rigorously — avoiding the most common traps.',
    items: [
      {
        cue: 'The most common trap: judging by today\'s standards',
        meaning: 'The anachronism trap is the most common error in era comparisons. Evaluating a 1970s player by 2025 standards — pressing metrics, physio regimes, tactical literacy — is unfair and analytically useless.',
        usage: '"The standard question should not be: would Pelé be as good today? It should be: how dominant was Pelé relative to the best players of his own era? That is the contemporaneous question. If the answer is \'he was the best in the world by a significant margin,\' then you have established greatness. What would happen if you transported him in time is pure speculation."',
        imageSlug: 'otp-anachronism-trap',
      },
      {
        cue: 'Identifying transposable qualities',
        meaning: 'Some qualities are era-specific — they depend on tactical context, rules, or physical norms of a particular period. Others are transposable — they translate across very different eras.',
        usage: '"The qualities that translate: spatial awareness, composure under pressure, technical precision at speed, reading of the game. The qualities that are more era-specific: heading ability (rules and tactics have reduced its importance), specific positional roles (the wing-half no longer exists), physical profiles (nutrition and conditioning have changed dramatically). When comparing eras, identify which qualities you are comparing and whether they are transposable."',
        imageSlug: 'otp-transposable',
      },
      {
        cue: 'The calibration approach — adjusting for context',
        meaning: 'Before making any era comparison, you need to calibrate — to define what conditions you are assuming and what you are holding constant.',
        usage: '"My calibrated version of the Pelé question: assuming Pelé was born in 1990 instead of 1940, grew up with modern coaching and nutrition, and adapted to the modern game as any talented player does — would he be dominant? I think the answer is almost certainly yes, based on the transposable qualities he demonstrated. But I want to be explicit about what I am assuming."',
        imageSlug: 'otp-calibration',
      },
      {
        cue: 'Using mixed conditionals precisely',
        meaning: 'The grammar of era comparison matters. "If Cruyff played today" is not the same as "if Cruyff were playing today" — the first sounds factual, the second is clearly hypothetical.',
        usage: '"Use: \'If Cruyff were playing today, he would be the kind of midfielder who makes every system around him better.\' Not: \'If Cruyff played today, he would be good.\' The past simple conditional signals the hypothetical register more clearly. And always qualify: \'assuming he developed under modern conditions\' or \'transposed with his actual qualities into a modern environment.\'  "',
        imageSlug: 'otp-mixed-conditionals',
      },
      {
        cue: 'The counterfactual as a thinking tool',
        meaning: 'The counterfactual question — what if things had been different? — is not meant to produce a definitive answer. It is a thinking tool for revealing which variables matter most.',
        usage: '"When I ask \'would Maradona dominate today?\' I\'m not really trying to answer that. I\'m using the counterfactual to identify: which of his qualities are context-independent? His dribbling was extraordinary — would modern pressing defences neutralise it? His low centre of gravity and balance were elite even by modern standards. The counterfactual surfaces these questions. The answers are always provisional."',
        imageSlug: 'otp-counterfactual-tool',
      },
      {
        cue: 'The contemporaneous standard — the fairest comparison',
        meaning: 'The only fully fair way to compare players across eras is to ask how dominant they were relative to their own contemporaries — the best players of their own time.',
        usage: '"Rather than asking whether Messi or Pelé would dominate each other\'s era, ask: how far above their contemporaries were they? If both were operating at a similar margin above the best players of their own generation, that is meaningful evidence of comparable greatness. The contemporaneous standard is not perfect — the quality of competition varies across eras — but it is the most intellectually honest approach."',
        imageSlug: 'otp-contemporaneous',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'Simple question — could Pelé play in today\'s game?' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'That\'s not a simple question at all. It depends entirely on what you\'re assuming and what you\'re holding constant.' },
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'Fair point. Let me calibrate — I mean Pelé born in 1990, developed under modern coaching and nutrition.' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'That\'s a better question. And the answer is almost certainly yes — the transposable qualities were extraordinary.' },
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'But you can\'t just map his 1960s role onto modern football — the game is completely different.' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'Exactly. If you\'re saying the specific position he played no longer exists, that\'s true. But spatial awareness, composure, technical precision — those translate.' },
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'So the fairer question is the contemporaneous one — how dominant was he relative to his own era?' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'That\'s the one we can actually answer. And the answer is unambiguous — a full generation ahead of everyone else.' },
  ],

  matchingExercise: [
    { word: 'Counterfactual', definition: 'A hypothetical that runs counter to the facts — imagining different conditions' },
    { word: 'Context-dependent', definition: 'Something that can only be evaluated in relation to its specific time and conditions' },
    { word: 'Anachronism', definition: 'Evaluating a past player by today\'s standards without accounting for the difference in conditions' },
    { word: 'Calibrate', definition: 'To adjust your judgment carefully to account for specific conditions' },
    { word: 'Transposable', definition: 'A quality that works across different eras or systems — not tied to one specific context' },
    { word: 'Contemporaneous', definition: 'Belonging to or existing at the same period of time' },
    { word: 'Benchmark', definition: 'A standard of reference — what you measure everything else against' },
    { word: 'Retrospective', definition: 'Looking back at the past — applying today\'s understanding to yesterday\'s events' },
  ],

  fillBlankExercise: [
    { before: 'Spatial intelligence', answer: 'translates to', after: 'every era — the ability to find space is always valuable.' },
    { before: 'His record', answer: 'holds up in', after: 'any era — 75 goals against the strongest competition across three decades.' },
    { before: 'You can\'t simply', answer: 'map onto', after: 'modern positional roles onto 1970s players — the positions were defined differently.' },
    { before: 'Statistics alone cannot', answer: 'bridge the gap', after: 'between eras — you also need qualitative understanding of the game at the time.' },
    { before: 'Van Dijk at his peak', answer: 'stands comparison', after: 'with any central defender from any era.' },
    { before: 'Criticising 1970s defenders for not pressing high is an', answer: 'anachronism', after: '— the concept barely existed in that era.' },
    { before: 'The fairest comparison is the', answer: 'contemporaneous', after: 'one — how dominant was the player relative to the best of their own era?' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the "anachronism trap" in era comparisons?',
      options: ['Judging a past player by modern standards — applying today\'s norms to a different era where those norms did not exist', 'Making comparisons without enough statistical evidence to support them', 'Overstating the importance of a historical player because of nostalgia'],
      correctIndex: 0,
    },
    {
      question: 'What makes the "contemporaneous standard" the fairest way to compare players across eras?',
      options: ['It asks how dominant a player was relative to the best players of their own time — avoiding the unfairness of cross-era judging by different norms', 'It uses modern statistical tools applied to historical footage — producing objective, comparable numbers', 'It asks current coaches and analysts to evaluate historical footage and give their expert assessment'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "If Cruyff ___ playing today, he would be the midfielder who makes every system better."',
      options: ['were', 'was', 'had been'],
      correctIndex: 0,
    },
    {
      question: 'Which qualities are most "transposable" across football eras?',
      options: ['Spatial awareness, composure under pressure, technical precision, and reading of the game — context-independent abilities', 'Heading ability, physical strength, and specific positional roles defined by the tactics of a particular era', 'Goal-scoring records, assists statistics, and appearances data — which can be compared directly across eras'],
      correctIndex: 0,
    },
    {
      question: 'What is the purpose of a counterfactual question in analysis?',
      options: ['To reveal which variables matter most — not to produce a definitive answer, but to surface the most important questions', 'To argue definitively that a past player would or would not succeed in the modern game', 'To entertain audiences with interesting speculation about what might have been'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about comparing eras.',
    items: [
      {
        sentence: 'If Pelé ___ playing today, he would be operating in a more physically demanding game — but the talent would adapt.',
        options: ['were', 'was', 'had been'],
        correctIndex: 0,
        explanation: '"Were" is the correct past subjunctive for a present hypothetical — "if he were playing today" signals clearly that this is counterfactual, not a factual claim.',
      },
      {
        sentence: 'You have to ___ for era — a goal-scoring record from the 1960s means something different from the same record today.',
        options: ['calibrate', 'translate', 'benchmark'],
        correctIndex: 0,
        explanation: '"Calibrate" means to adjust your judgment to account for specific conditions — making a comparison that is appropriately scaled for the context.',
      },
      {
        sentence: 'His record ___ up in any era — the quality of opposition he faced was consistently world-class.',
        options: ['holds', 'measures', 'stands'],
        correctIndex: 0,
        explanation: '"Hold up" means to remain impressive when placed under scrutiny or in a different context — staying valid despite the comparison.',
      },
      {
        sentence: 'The most ___ qualities — spatial intelligence, composure, technical precision — translate regardless of tactical era.',
        options: ['transposable', 'contemporaneous', 'retrospective'],
        correctIndex: 0,
        explanation: 'Transposable means capable of transferring to a different context without losing value — these qualities work across different eras.',
      },
      {
        sentence: 'Were Cruyff ___ have developed in a modern academy, his spatial intelligence might have been even more refined.',
        options: ['to', 'of', 'for'],
        correctIndex: 0,
        explanation: '"Were X to have done Y" is the formal C2 inversion for a past hypothetical — very common in analytical and academic writing.',
      },
      {
        sentence: 'Statistics alone cannot ___ the gap between eras — you also need qualitative understanding of what the game was like.',
        options: ['bridge', 'map', 'translate'],
        correctIndex: 0,
        explanation: '"Bridge the gap" means to connect two things that are otherwise separate — to make a valid comparison between very different contexts.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are in a debate about comparing football eras. Choose the most analytically rigorous response.',
      items: [
        {
          customerLine: '"Messi is obviously better than Pelé — we have the stats to prove it."',
          options: [
            '"The stats are only comparable if you calibrate for context. Pelé played in a different era with different opposition quality, different physical demands, and no advanced metrics. The fairest comparison is the contemporaneous standard: both were dominant beyond their contemporaries by a similar margin. That\'s where the real comparison lies."',
            '"You\'re right — modern statistics are more reliable, so Messi clearly wins the comparison."',
            '"You can\'t compare them at all — it\'s completely different eras and the question is meaningless."',
          ],
          correctIndex: 0,
          explanation: 'The rigorous response identifies the need to calibrate, introduces the contemporaneous standard, and avoids both the simple statistical comparison and the "impossible to compare" cop-out.',
        },
        {
          customerLine: '"Cruyff wouldn\'t cope with today\'s pressing game — he\'d be pressed off the ball constantly."',
          options: [
            '"That might be an anachronism — you\'re judging him by a tactical context that didn\'t exist when he played. The more useful question is: which of his qualities are transposable? His spatial intelligence and decision speed would likely adapt. But the counterfactual is genuinely impossible to resolve."',
            '"You\'re probably right — today\'s pressing is much more intense and most players from the 70s couldn\'t cope."',
            '"Cruyff invented the pressing game — he would have had no problem with it at all."',
          ],
          correctIndex: 0,
          explanation: 'The best response identifies the anachronism, redirects to transposable qualities, and honestly acknowledges that the counterfactual cannot be resolved — intellectual honesty is the C2 standard.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the analytical error in this era comparison.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Pelé was overrated — modern defenders would have stopped him easily.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Today\'s game is faster and more physical, and he would have struggled with the pressing.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Also, he never played in a top European league, so his stats don\'t really count.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Messi and Ronaldo are clearly better because they have Champions League records.' },
        { speaker: 'Host', speakerColor: 'purple', text: 'There are a few problems with that comparison.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'Pelé was overrated — modern defenders would have stopped him easily.',
          correction: 'This is a classic anachronism: judging a 1960s player by the standards and capabilities of modern defenders. The correct approach is to ask how dominant Pelé was relative to the best defenders of his own era — the contemporaneous standard. By that measure, the evidence is clear: he was the best player of his generation by a significant margin.',
          explanation: 'Saying modern defenders would stop Pelé ignores that Pelé was not competing against modern defenders — he was competing against the best defenders of his own time, and he dominated them comprehensively. Applying future standards to past performances is the anachronism trap, and it makes for poor analysis.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the era comparison analysis at C2 level.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The most honest answer to "would Maradona dominate today?" is not yes or no — it is...',
          suggestedCompletion: '"it depends on which of his qualities you are asking about, and what conditions you are assuming." His spatial intelligence and low centre of gravity were elite by any standard. Whether modern pressing defences would neutralise his dribbling is genuinely unknowable. The counterfactual is a thinking tool, not a verdict.',
        },
        {
          customerLine: '',
          salespersonStart: 'Were Cruyff to have developed in a modern academy system, the most likely outcome is...',
          suggestedCompletion: 'that his spatial intelligence — already extraordinary — would have been refined even further by structured positional training. The qualities that made him exceptional appear to be transposable. But we must acknowledge that we are speculating, and that the system itself shapes the player in ways we cannot fully predict.',
        },
        {
          customerLine: '',
          salespersonStart: 'The contemporaneous standard tells us that both Pelé and Messi were dominant — but it does not tell us...',
          suggestedCompletion: 'how the quality of their respective eras compares, or whether the competition they each faced was of equivalent standard. That is the comparison we cannot make with confidence. What we can say is that the margin of dominance was extraordinary in both cases, and that is the closest thing to an honest verdict.',
        },
      ],
    },
  },
};
