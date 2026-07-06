import { Lesson } from '@/types/lesson';

export const c1CritiquingAnalytics: Lesson = {
  slug: 'c1-critiquing-analytics',
  title: 'Critiquing Analytics',
  subtitle: 'Unit 1 — Data & Statistics',
  level: 'C1-C2',
  description: 'Football data is powerful but it has limits. Knowing how to question statistics — what they measure, what they miss, and when they mislead — makes you a sharper analyst and a stronger communicator.',
  heroImage: '/images/critiquing-analytics.png',

  warmUp: {
    questions: [
      'Can you think of a time when a statistic seemed to say one thing but the truth was different?',
      'What are the things about football that you think are very hard to measure with numbers?',
      'Have you ever heard someone use a statistic to prove a point, but you felt the statistic was unfair or incomplete?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Hedging language — expressing doubt and qualification',
    description: 'When you critique analytics, you rarely say something is completely wrong — you qualify it. Hedging language allows you to express doubt, uncertainty, or conditions. This sounds more professional and more honest than absolute statements. Common hedging expressions: "This suggests..." (not "this proves"), "It appears that..." (not "it is clear that"), "There is a risk that...", "This may be partly explained by...", "It\'s worth noting that...", "However, one should bear in mind...". Hedging is a sign of careful, analytical thinking.',
    positiveExamples: [
      { sentence: 'This suggests that their press is less effective in the second half, though the sample size is limited.', note: '"suggests" not "proves" — hedging the strength of the claim' },
      { sentence: 'There is a risk that the model overvalues possession in low-scoring matches.', note: '"there is a risk that" — signalling a potential limitation without dismissing the data entirely' },
      { sentence: 'It\'s worth noting that these figures only cover the first five matches of the season.', note: '"it\'s worth noting that" — a polite way to flag a caveat' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'SAMPLE SIZE',
      partOfSpeech: 'noun',
      definition: 'How many games, events, or data points are included in an analysis. A small sample size (e.g., 3 games) makes conclusions less reliable.',
      example: '"After three matches, the sample size is too small to draw firm conclusions."',
      imageSlug: '/images/sample-size.png',
    },
    {
      word: 'CONTEXT',
      partOfSpeech: 'noun',
      definition: 'The surrounding situation that helps explain why a number looks the way it does. Data without context can be misleading.',
      example: '"Their low possession numbers make sense in context — they played against the top three teams this month."',
      imageSlug: '/images/context.png',
    },
    {
      word: 'PROXY',
      partOfSpeech: 'noun',
      definition: 'Something that is used to measure something else because the real thing is hard to measure directly. xG is a proxy for attacking quality.',
      example: '"Pass completion is often used as a proxy for technical quality, but it can be misleading without context."',
      imageSlug: '/images/proxy.png',
    },
    {
      word: 'NOISE',
      partOfSpeech: 'noun',
      definition: 'Random variation in data that is not a real pattern — just chance. In a small sample, it can be hard to separate noise from a real trend.',
      example: '"Is their poor form a real trend or just noise? After four games, it\'s too early to say."',
      imageSlug: '/images/noise-data.png',
    },
    {
      word: 'REGRESSION TO THE MEAN',
      partOfSpeech: 'noun',
      definition: 'When an unusually good or bad performance moves back towards the average over time. Very lucky or unlucky results don\'t usually last.',
      example: '"They\'ve overperformed their xG by 8 goals — expect regression to the mean in the second half of the season."',
      imageSlug: '/images/regression-mean.png',
    },
    {
      word: 'INTANGIBLE',
      partOfSpeech: 'noun',
      definition: 'Something real but very hard to measure — like a player\'s leadership, team spirit, or composure under pressure.',
      example: '"The data doesn\'t capture everything — intangibles like leadership and team spirit matter too."',
      imageSlug: '/images/c1-critiquing-analytics-intangible.png',
    },
    {
      word: 'OVER-RELIANCE',
      partOfSpeech: 'noun',
      definition: 'Depending too much on one thing — in this case, using data as if it is the only thing that matters.',
      example: '"There is a real risk of over-reliance on xG — it\'s one tool, not the whole picture."',
      imageSlug: '/images/over-reliance.png',
    },
    {
      word: 'SPURIOUS',
      partOfSpeech: 'adjective',
      definition: 'False or misleading — appearing to be true or meaningful but actually not. A spurious correlation looks like a connection but isn\'t real.',
      example: '"The correlation between shirt colour and wins is spurious — there\'s no real connection, just coincidence."',
      imageSlug: '/images/spurious.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CALL INTO QUESTION',
      definition: 'To make people doubt something — to raise questions about whether something is true or reliable.',
      example: '"The result calls into question whether their high xG figures are sustainable."',
      imageSlug: '/images/call-into-question.png',
    },
    {
      phrase: 'ACCOUNT FOR',
      definition: 'To explain something — to find a reason for why a number or result looks the way it does.',
      example: '"How do you account for the fact that they have 1.8 xG per game but only score 0.6?"',
      imageSlug: '/images/c1-critiquing-analytics-account-for.png',
    },
    {
      phrase: 'TAKE INTO ACCOUNT',
      definition: 'To include something when you are making a judgement — to consider a factor when reading data.',
      example: '"You have to take into account the strength of the opponents before judging that xGA number."',
      imageSlug: '/images/take-into-account.png',
    },
    {
      phrase: 'SCRATCH THE SURFACE',
      definition: 'To only deal with the most basic part of a problem — to not go deep enough into an analysis.',
      example: '"Possession percentage only scratches the surface — you need to look at what teams do with the ball."',
      imageSlug: '/images/scratch-the-surface.png',
    },
    {
      phrase: 'HOLD UP',
      definition: 'To remain true or valid when examined closely — when a claim or statistic survives scrutiny.',
      example: '"Does the argument that high xG leads to long-term success hold up? The data suggests it does."',
      imageSlug: '/images/hold-up.png',
    },
    {
      phrase: 'IRON OUT',
      definition: 'To fix or remove problems from something — to improve a model or method by removing its weaknesses.',
      example: '"The model still has some weaknesses, but developers are working to iron them out."',
      imageSlug: '/images/iron-out.png',
    },
  ],

  onThePitch: {
    instructions: 'These are real situations where analytics need to be questioned or qualified — learn the language for each.',
    items: [
      {
        cue: 'The small sample problem',
        meaning: 'After just 3-5 games, statistics are often not reliable. Journalists and coaches sometimes draw big conclusions from tiny samples. A good analyst always questions the sample size.',
        usage: '"After four matches, their xG numbers suggest a top-four team. But — one caveat — four matches is a very small sample. We need at least 10-12 before we can draw reliable conclusions." Always ask: "How many games is this based on?"',
        imageSlug: 'otp-sample-size',
      },
      {
        cue: 'The opponent quality problem',
        meaning: 'A team that looks statistically impressive might just have played weak opponents. Always ask about the quality of the opposition before judging defensive or attacking numbers.',
        usage: '"Their xGA of 0.4 per game looks excellent — but you have to take into account that four of their six games were against bottom-half teams. The number may look very different against top opposition."',
        imageSlug: 'otp-opponent-quality',
      },
      {
        cue: 'The intangibles problem — what data can\'t capture',
        meaning: 'Data cannot measure everything. Leadership, composure under pressure, team chemistry, and mental resilience are all real but almost impossible to quantify.',
        usage: '"The data says they should have lost — but the captain\'s presence in the dressing room changed the atmosphere at half-time. These are intangibles. Data scratches the surface, but football is a human game." Always acknowledge what numbers miss.',
        imageSlug: 'otp-intangibles',
      },
      {
        cue: 'Identifying a spurious correlation',
        meaning: 'Two things can be correlated without one causing the other. If a team wins every game when the goalkeeper wears green, that\'s spurious — coincidence, not connection.',
        usage: '"Someone pointed out that this team scores more goals on rainy nights. But that\'s a spurious correlation — rain doesn\'t help you score. It\'s coincidence, and the sample is too small to mean anything." Spotting spurious correlations is a key analytical skill.',
        imageSlug: 'otp-spurious',
      },
      {
        cue: 'Predicting regression to the mean',
        meaning: 'When a team has been unusually lucky (scoring more than xG) or unlucky (scoring less), they will usually move back towards their expected level. This is called regression to the mean.',
        usage: '"They\'ve overperformed their xG by 10 goals this season — that\'s remarkable. But statistically, we should expect regression to the mean in the second half. Their finishing will probably drop back to a more normal level."',
        imageSlug: 'otp-regression-mean',
      },
      {
        cue: 'Questioning the model itself',
        meaning: 'xG models vary between different data companies. One company\'s xG for the same shot might be 0.3, another\'s 0.5. Understanding that models have limitations is part of being a sophisticated analyst.',
        usage: '"One thing worth noting — the xG figures here come from two different providers. StatsBomb gives that chance an xG of 0.31, Opta gives it 0.48. There\'s genuine variation in how these models are built. It\'s worth being aware of that."',
        imageSlug: 'otp-question-model',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'green', text: 'City have the best xG in the league after five games. Are they the best team?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'It\'s very encouraging, but five games is a small sample size. I\'d want to see 12 to 15 before drawing any firm conclusions.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'But the numbers are the numbers, right? xG doesn\'t lie.' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'xG is a useful tool, but you have to take the opponent quality into account. Three of their five games were against the bottom three teams. That inflates the numbers.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'So you\'re saying the data is wrong?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'Not wrong — just limited. This suggests they\'re playing well. But it doesn\'t prove they\'re the best team. There\'s a risk of over-reliance on one metric. You need context.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'What about their goalkeeper\'s save percentage — it\'s the highest in the league.' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'That\'s another small sample issue. Save percentage fluctuates a lot in a short run of games. It\'s worth noting — but I wouldn\'t call it a trend yet.' },
  ],

  matchingExercise: [
    { word: 'Sample size', definition: 'The number of games or data points included in an analysis' },
    { word: 'Context', definition: 'The surrounding situation that helps explain why a number looks the way it does' },
    { word: 'Proxy', definition: 'Something used to indirectly measure something that is hard to measure directly' },
    { word: 'Noise', definition: 'Random variation in data that is not a real pattern — just chance' },
    { word: 'Regression to the mean', definition: 'When an unusually good or bad performance moves back towards the average over time' },
    { word: 'Intangible', definition: 'Something real and important but very difficult to measure with data' },
    { word: 'Spurious', definition: 'Appearing to show a connection but actually misleading or coincidental' },
    { word: 'Over-reliance', definition: 'Depending too much on one tool or metric as if it is the whole picture' },
  ],

  fillBlankExercise: [
    { before: 'After three matches, the', answer: 'sample size', after: 'is too small to draw firm conclusions.' },
    { before: 'Their low possession', answer: 'makes sense in context', after: '— they played the top three teams this month.' },
    { before: 'You have to', answer: 'take into account', after: 'the quality of the opponents before judging that xGA number.' },
    { before: 'The data doesn\'t capture', answer: 'intangibles', after: 'like leadership and composure under pressure.' },
    { before: 'They\'ve overperformed their xG by 10 goals — expect', answer: 'regression to the mean', after: 'in the second half of the season.' },
    { before: 'Possession percentage only', answer: 'scratches the surface', after: '— you need to look at what teams do with the ball.' },
    { before: 'The result', answer: 'calls into question', after: 'whether their high xG figures are sustainable.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is "regression to the mean" in football analytics?',
      options: ['When an unusually lucky or unlucky team moves back towards their expected average level of performance', 'When a team changes their tactics to play more average football', 'When a player\'s performance gets worse after a very good game'],
      correctIndex: 0,
    },
    {
      question: 'A team has conceded 0 goals in 5 games but has an xGA of 2.5 total. What does this suggest?',
      options: ['They have been very lucky and are likely to concede more as the season goes on', 'Their defence is the best in the league and will continue to keep clean sheets', 'The xGA model is incorrect and their defence is actually perfect'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "Pass completion ___ the surface — you need to look at direction and location too."',
      options: ['only scratches', 'calls into question', 'holds up'],
      correctIndex: 0,
    },
    {
      question: 'What is a "proxy" in data analysis?',
      options: ['Something used to indirectly measure something that is hard to measure directly', 'A type of graph used to visualise football statistics', 'The difference between a team\'s expected and actual performance'],
      correctIndex: 0,
    },
    {
      question: 'Which of these is an example of hedging language?',
      options: ['"This suggests their press is less effective away from home."', '"Their press is definitely worse away from home."', '"Their press is bad away from home — that\'s a fact."'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best hedging phrase or analytical term to complete each sentence.',
    items: [
      {
        sentence: 'Their high xG numbers ___ that they\'re creating good chances — but five games is still a small sample.',
        options: ['suggest', 'prove', 'confirm'],
        correctIndex: 0,
        explanation: '"Suggest" is a hedging verb — it shows the data points in a direction without making an absolute claim.',
      },
      {
        sentence: 'You have to ___ the opponent quality into account before judging those defensive figures.',
        options: ['take', 'call', 'hold'],
        correctIndex: 0,
        explanation: '"Take into account" means to consider a factor when making a judgement or analysis.',
      },
      {
        sentence: 'There is a ___ of over-reliance on xG if coaches use it without any other information.',
        options: ['risk', 'noise', 'proxy'],
        correctIndex: 0,
        explanation: '"There is a risk of" is a hedging phrase for identifying a potential problem or danger.',
      },
      {
        sentence: 'The correlation between kit colour and results is clearly ___.',
        options: ['spurious', 'regressive', 'contextual'],
        correctIndex: 0,
        explanation: '"Spurious" means appearing to show a connection but actually being false or coincidental.',
      },
      {
        sentence: 'It\'s worth ___ that this data only covers the first four games of the season.',
        options: ['noting', 'calling', 'accounting'],
        correctIndex: 0,
        explanation: '"It\'s worth noting that" is a polite and professional way to flag a caveat or limitation.',
      },
      {
        sentence: 'After 12 goals in 5 games, we should expect some ___ to the mean in the next few matches.',
        options: ['regression', 'correlation', 'noise'],
        correctIndex: 0,
        explanation: 'Regression to the mean is when an unusually high or low performance returns to the normal expected level.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'A pundit is making a claim about analytics. Choose the most analytically rigorous response.',
      items: [
        {
          customerLine: '"City have the highest xG in the league after 4 games — they\'re definitely going to win the title."',
          options: [
            '"It\'s encouraging data, but four games is a very small sample. We should also take into account the quality of their opponents. This suggests they\'re performing well, but it doesn\'t prove they\'re the best team over 38 games."',
            '"Absolutely — xG is the best predictor of future success. They\'re definitely the title favourites."',
            '"xG is useless. The only thing that matters is the actual points on the board."',
          ],
          correctIndex: 0,
          explanation: 'Good analysis uses hedging language, questions sample size, and considers context rather than making absolute claims.',
        },
        {
          customerLine: '"Look at this stat — this team always scores when it rains. Rain makes them better!"',
          options: [
            '"That sounds like a spurious correlation to me. Weather doesn\'t cause goals — this is probably just a coincidence in a small sample of rainy matches."',
            '"Wow — rain must change something about their tactics or the pitch. Very interesting."',
            '"Great point. All teams should train in the rain to improve their scoring."',
          ],
          correctIndex: 0,
          explanation: 'Recognising spurious correlations and questioning them is a core analytical skill.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this analytical argument.',
      dialogue: [
        { speaker: 'Pundit', speakerColor: 'purple', text: 'City have overperformed their xG by 8 goals this season. They\'re a better team than the data suggests.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Actually, I\'d push back on that. Overperforming xG by 8 goals is a very large number.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'This proves that we will definitely see a regression to the mean — they\'ll concede many more goals in the second half.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'It\'s worth noting that some players do genuinely outperform xG consistently — like clinical finishers. But 8 goals is a lot.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'I\'d want to take the quality of opportunities into account too before making any final judgement.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'This proves that we will definitely see a regression to the mean',
          correction: 'This suggests we are likely to see some regression to the mean',
          explanation: 'In analytical language, you should hedge predictions. "Proves" and "definitely" are too strong — regression to the mean is likely but not guaranteed. Use "suggests" and "likely".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analytical statement in a careful, hedged way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'After just five matches, the xG data suggests they\'re performing well, but...',
          suggestedCompletion: 'the sample size is too small to draw firm conclusions — we need at least 10 to 12 games before we can see a reliable trend.',
        },
        {
          customerLine: '',
          salespersonStart: 'Their low xGA figure looks impressive, but you have to take into account...',
          suggestedCompletion: 'the quality of the opponents — three of their last five games were against the bottom three teams in the table.',
        },
        {
          customerLine: '',
          salespersonStart: 'The data doesn\'t capture everything about this team — for example, it misses...',
          suggestedCompletion: 'intangibles like the captain\'s leadership, the team\'s mental resilience under pressure, and the effect of the home crowd.',
        },
      ],
    },
  },
};
