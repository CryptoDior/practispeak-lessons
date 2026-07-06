import { Lesson } from '@/types/lesson';

export const c1XgAndExpectedGoals: Lesson = {
  slug: 'c1-xg-and-expected-goals',
  title: 'xG and Expected Goals',
  subtitle: 'Unit 1 — Data & Statistics',
  level: 'C1-C2',
  description: 'xG — expected goals — has changed how we talk about football. It tells you not just what happened, but what should have happened. Learn to read, explain, and discuss xG data with confidence.',
  heroImage: '/images/xg-expected-goals.png',

  warmUp: {
    questions: [
      'Have you ever seen a team lose a match even though they played well? How do you explain that?',
      'What do you think is more useful — counting goals or counting good chances?',
      'Have you heard the term xG used in football? What do you think it means?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Noun Phrases with Prepositions — describing data',
    description: 'When talking about statistics, you use noun phrases with prepositions to describe what numbers mean. Key patterns: "an xG OF 1.8" (value), "a shot FROM outside the box" (position), "a chance IN a one-v-one" (situation), "a save AGAINST the post" (difficulty). These phrases help you sound precise and analytical rather than just descriptive.',
    positiveExamples: [
      { sentence: 'City created an xG of 2.4 but scored only one goal.', note: '"an xG of" + number — the standard pattern for stating a value' },
      { sentence: 'He had three shots from outside the box — none of them were good chances.', note: '"shots from" + position — describes where the attempt came from' },
      { sentence: 'She was one-v-one with the keeper — a chance with an xG of 0.7.', note: 'combining a situation description with the data value' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'xG (EXPECTED GOALS)',
      partOfSpeech: 'noun',
      definition: 'A number that shows how many goals a team should have scored based on the quality of their chances. An xG of 1.0 means they had chances good enough to score one goal.',
      example: '"They had an xG of 2.3 but only scored once — they were very unlucky."',
      imageSlug: '/images/xg.png',
    },
    {
      word: 'SHOT MAP',
      partOfSpeech: 'noun',
      definition: 'A visual that shows where every shot was taken on the pitch. It helps you see if a team is shooting from good or bad positions.',
      example: '"The shot map showed all their attempts came from outside the box — that explains why they scored so few."',
      imageSlug: '/images/shot-map.png',
    },
    {
      word: 'OVERPERFORM',
      partOfSpeech: 'verb',
      definition: 'To do better than the numbers suggest you should. If your xG is 0.8 but you score 2 goals, you have overperformed.',
      example: '"The striker overperformed his xG all season — he scored 18 goals from chances worth only 12."',
      imageSlug: '/images/overperform.png',
    },
    {
      word: 'UNDERPERFORM',
      partOfSpeech: 'verb',
      definition: 'To do worse than the numbers suggest you should. If your xG is 2.0 but you only score once, you have underperformed.',
      example: '"They underperformed their xG badly in the first half — three big chances and nothing to show for it."',
      imageSlug: '/images/underperform.png',
    },
    {
      word: 'METRIC',
      partOfSpeech: 'noun',
      definition: 'A specific way of measuring something. In football analytics, metrics are the numbers used to describe performance — like xG, pass completion, or sprints per game.',
      example: '"xG is the most popular metric in modern football analysis."',
      imageSlug: '/images/c1-xg-and-expected-goals-metric.png',
    },
    {
      word: 'PROBABILITY',
      partOfSpeech: 'noun',
      definition: 'How likely something is to happen. xG is based on probability — a chance with xG 0.9 has a 90% chance of being a goal.',
      example: '"The xG model calculates the probability of a goal based on where and how the shot was created."',
      imageSlug: '/images/probability.png',
    },
    {
      word: 'CHANCE QUALITY',
      partOfSpeech: 'noun',
      definition: 'How good a scoring opportunity is. A one-v-one from six yards is high quality. A shot from 35 yards is low quality.',
      example: '"It\'s not just about how many chances they created — it\'s about the quality of those chances."',
      imageSlug: '/images/chance-quality.png',
    },
    {
      word: 'BIG CHANCE',
      partOfSpeech: 'noun',
      definition: 'A shot where the player should normally score — usually xG 0.4 or higher. Missing a big chance is considered a serious mistake.',
      example: '"He missed two big chances in the second half — analysts gave both an xG of over 0.5."',
      imageSlug: '/images/big-chance.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'RACK UP',
      definition: 'To collect or accumulate a lot of something over time — like shots, chances, or xG.',
      example: '"They racked up an xG of 3.1 but only scored twice — their finishing let them down."',
      imageSlug: '/images/rack-up.png',
    },
    {
      phrase: 'COME IN AT',
      definition: 'To be at a specific level or value — used when stating a number or statistic.',
      example: '"His xG for the season comes in at 14.2 — the highest in the league."',
      imageSlug: '/images/come-in-at.png',
    },
    {
      phrase: 'FACTOR IN',
      definition: 'To include something when making a calculation or decision.',
      example: '"The model factors in the position of defenders when calculating xG."',
      imageSlug: '/images/factor-in.png',
    },
    {
      phrase: 'BACK UP',
      definition: 'To support something with evidence or data — to prove something is true using numbers.',
      example: '"His performance looked poor and the data backs that up — he created nothing all game."',
      imageSlug: '/images/c1-xg-and-expected-goals-back-up.png',
    },
    {
      phrase: 'MEASURE UP',
      definition: 'To compare well against a standard — to be good enough when you look at the numbers.',
      example: '"His xG numbers don\'t measure up to what you\'d expect from a striker at that price."',
      imageSlug: '/images/c1-xg-and-expected-goals-measure-up.png',
    },
    {
      phrase: 'BEAR OUT',
      definition: 'To confirm or prove that something is true — when data shows that what you believed was correct.',
      example: '"The stats bear out what we all felt — they dominated but their finishing was poor."',
      imageSlug: '/images/c1-xg-and-expected-goals-bear-out.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key situations on the pitch that xG is designed to measure — learn the language for each.',
    items: [
      {
        cue: 'The one-v-one — the highest xG situation',
        meaning: 'A player alone against the goalkeeper is the highest-value chance in football. xG for a clear one-v-one is usually 0.7 to 0.9.',
        usage: '"He\'s one-v-one — that\'s got to go in!" On the pitch: "Take your time! Goalkeeper! Decide!" The analyst later: "He had a chance with xG of 0.74 — statistically he should score that more than seven times out of ten."',
        imageSlug: 'otp-one-v-one-xg',
      },
      {
        cue: 'The header from a cross — medium xG',
        meaning: 'A headed chance from a cross usually has an xG of 0.1 to 0.3. It looks dangerous but headers are statistically harder to score than shots.',
        usage: '"He\'s met it perfectly — just over the bar!" The analyst: "The cross found him unmarked — xG of 0.18. Good chance, but not as easy as it looked."',
        imageSlug: 'otp-header-xg',
      },
      {
        cue: 'The long-range effort — low xG',
        meaning: 'A shot from outside the penalty area has very low xG — usually 0.02 to 0.06. Most analysts say teams should avoid them.',
        usage: '"Long shot — goes wide. Not a surprise." On the pitch: "Don\'t shoot from there! Find a better position!" The analyst: "Eight shots from outside the box — total xG of 0.3. Those are wasted possessions."',
        imageSlug: 'otp-long-range-xg',
      },
      {
        cue: 'The penalty — fixed xG of 0.76',
        meaning: 'A penalty always has an xG of 0.76 — the historical scoring average. Every penalty in every model is worth exactly 0.76 of a goal.',
        usage: '"It\'s a penalty — 0.76 xG. He must score this." On the pitch before stepping up: "Confident. Composed. You score these. Pick your spot." The analyst: "Converted as expected."',
        imageSlug: 'otp-penalty-xg',
      },
      {
        cue: 'The rebound chance — very high xG',
        meaning: 'A chance from a rebound — when a shot is saved and the ball falls to another player — has very high xG because the goalkeeper is already off balance.',
        usage: '"Saved — and the follow-up! Into the net!" Rebound chances can have xG of 0.8 or higher. The analyst: "He was first to the rebound — xG of 0.81. Those are the chances you put away at this level."',
        imageSlug: 'otp-rebound-xg',
      },
      {
        cue: 'Cumulative xG — reading the whole match',
        meaning: 'At the end of a match you add up all the xG to see who \'deserved\' to win. This is called cumulative xG — the total built up over 90 minutes.',
        usage: '"Final score: 0-0. City had xG of 2.8, United 0.4 — City were very unlucky." Analysts read cumulative xG as a verdict: "The xG story of this match is very different from the scoreline."',
        imageSlug: 'otp-cumulative-xg',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst', speakerColor: 'orange', text: 'Right — let\'s look at Saturday\'s numbers. We lost 1-0 but our xG was 2.1. Their xG was 0.4.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'So the data says we should have won.' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'Exactly. We created good chances — four shots from inside the box. But we missed two big chances with xG above 0.5 each.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'And their goal?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'A long-range effort. xG of 0.03. They had no right to score that.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'So we dominated, they got lucky, and the scoreboard didn\'t reflect the game at all.' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'That\'s it. Over a season, these things even out. If we keep creating 2.0+ xG per game, the results will come.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Good. Show the players this — I want them to see they\'re doing the right things. The finishing will improve.' },
  ],

  matchingExercise: [
    { word: 'xG', definition: 'A number showing how many goals a team should have scored based on chance quality' },
    { word: 'Shot map', definition: 'A visual showing where all shots were taken on the pitch' },
    { word: 'Overperform', definition: 'To score more goals than the xG suggests you should' },
    { word: 'Underperform', definition: 'To score fewer goals than the xG suggests you should' },
    { word: 'Metric', definition: 'A specific way of measuring performance using numbers' },
    { word: 'Big chance', definition: 'A shot with xG of 0.4 or higher — a situation where you should normally score' },
    { word: 'Probability', definition: 'How likely something is to happen, expressed as a percentage or decimal' },
    { word: 'Chance quality', definition: 'How good a scoring opportunity is, based on position, defenders, and situation' },
  ],

  fillBlankExercise: [
    { before: 'City created an xG', answer: 'of', after: '2.8 but only scored once.' },
    { before: 'He', answer: 'overperformed', after: 'his xG — he scored 20 but his chances were worth only 14 goals.' },
    { before: 'A penalty always has an xG', answer: 'of', after: '0.76 in every model.' },
    { before: 'The data', answer: 'backs up', after: 'what we saw — they dominated but were unlucky.' },
    { before: 'His season xG', answer: 'comes in at', after: '15.6 — the highest in the division.' },
    { before: 'Long-range shots have very low', answer: 'chance quality', after: '— analysts say teams should avoid them.' },
    { before: 'The model', answer: 'factors in', after: 'where defenders are when calculating the xG value.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A team has an xG of 3.0 but scores 1 goal. What does this mean?',
      options: ['They underperformed — they were unlucky or had poor finishing', 'They overperformed — they were very clinical', 'They performed normally — 3.0 xG always produces 1 goal'],
      correctIndex: 0,
    },
    {
      question: 'Which chance has the highest xG?',
      options: ['A one-v-one with the goalkeeper inside the box', 'A header from a cross at the far post', 'A long-range shot from 30 yards'],
      correctIndex: 0,
    },
    {
      question: 'What does "cumulative xG" mean?',
      options: ['The total xG built up across a whole match or season', 'The xG of a single very important chance', 'The difference between two teams\' xG totals'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "They ___ up an xG of 2.4 without scoring — very unlucky."',
      options: ['racked', 'built', 'came'],
      correctIndex: 0,
    },
    {
      question: 'A player scores 3 goals from chances worth 0.9 xG total. What happened?',
      options: ['He massively overperformed his xG', 'He underperformed his xG badly', 'He performed exactly as expected'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about xG and football data.',
    items: [
      {
        sentence: 'The model ___ the position of defenders when calculating chance quality.',
        options: ['factors in', 'rules out', 'gives away'],
        correctIndex: 0,
        explanation: '"Factors in" means to include something in a calculation or decision.',
      },
      {
        sentence: 'His xG for the whole season ___ at 18.4 — the best in the division.',
        options: ['comes in', 'racks up', 'bears out'],
        correctIndex: 0,
        explanation: '"Comes in at" is used to state a specific value or figure.',
      },
      {
        sentence: 'The stats ___ what the coach believed — good chances, but poor finishing.',
        options: ['bear out', 'measure up', 'factor in'],
        correctIndex: 0,
        explanation: '"Bear out" means the data confirms or proves what you thought.',
      },
      {
        sentence: 'A penalty always has an xG ___ 0.76 in standard models.',
        options: ['of', 'from', 'in'],
        correctIndex: 0,
        explanation: '"An xG of [number]" is the correct preposition pattern for stating a value.',
      },
      {
        sentence: 'He ___ his xG last season — 20 goals from chances worth only 11.',
        options: ['overperformed', 'underperformed', 'factored in'],
        correctIndex: 0,
        explanation: 'If you score MORE than your xG suggests, you have overperformed.',
      },
      {
        sentence: 'They ___ up 3.1 xG across the match but the scoreline stayed at 0-0.',
        options: ['racked', 'backed', 'measured'],
        correctIndex: 0,
        explanation: '"Rack up" means to accumulate or collect a lot of something over time.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'A journalist or colleague makes a comment about xG. Choose the most accurate and professional response.',
      items: [
        {
          customerLine: '"xG is just a number — it doesn\'t tell you anything real about football."',
          options: [
            '"I understand the scepticism, but xG has been shown to predict future results better than the actual scoreline. It\'s not perfect, but it\'s a useful tool."',
            '"You\'re completely right — xG is useless. Just watch the game."',
            '"xG is always right. If you don\'t trust it, you don\'t understand football."',
          ],
          correctIndex: 0,
          explanation: 'The best response acknowledges the criticism but gives a balanced, evidence-based reply.',
        },
        {
          customerLine: '"They had an xG of 0.2 and won 2-0. Does that mean they played badly?"',
          options: [
            '"Not necessarily badly — but they were very lucky. Over a full season, teams that consistently win with low xG tend to regress towards average results."',
            '"Yes — an xG of 0.2 means they were terrible and should have lost."',
            '"No — the result is all that matters. The xG is irrelevant."',
          ],
          correctIndex: 0,
          explanation: 'A nuanced answer explains what low xG means without being too absolute.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the error in this analyst\'s presentation script.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Good morning. Let me take you through last night\'s match data.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'City created an xG from 2.4 — that\'s a very high number for a single game.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Their striker overperformed his xG — he scored twice from chances worth 1.1 total.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'United had a big chance in the 70th minute — xG of 0.62.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Overall, the data backs up what we saw — City were the better team by a significant margin.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'an xG from 2.4',
          correction: 'an xG of 2.4',
          explanation: 'The correct preposition is "of" not "from" — we say "an xG of [number]".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analyst\'s sentence in a natural, professional way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'Their xG was 2.8 but they only scored once, which means...',
          suggestedCompletion: 'they significantly underperformed — either the finishing was poor or they were very unlucky.',
        },
        {
          customerLine: '',
          salespersonStart: 'When we factor in the quality of the chances, not just the number of shots...',
          suggestedCompletion: 'we can see that City created much better opportunities than the raw shot count suggests.',
        },
        {
          customerLine: '',
          salespersonStart: 'A penalty always has an xG of 0.76, which means...',
          suggestedCompletion: 'statistically, a player should score a penalty roughly 76% of the time.',
        },
      ],
    },
  },
};
