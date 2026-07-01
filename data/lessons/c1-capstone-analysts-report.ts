import { Lesson } from '@/types/lesson';

export const c1CapstoneAnalystsReport: Lesson = {
  slug: 'c1-capstone-analysts-report',
  title: "The Analyst\'s Report",
  subtitle: 'Unit 4 — Football Business & Politics',
  level: 'C1-C2',
  description: 'This capstone lesson brings together everything from the C1 course. You will synthesise data analysis, tactical language, journalistic writing, and business vocabulary to produce a complete analyst\'s report — the most demanding English task in football.',
  heroImage: '/images/capstone-report.png',

  warmUp: {
    questions: [
      'If you had to write a complete report on a football club — covering performance, finances, and governance — where would you start? What would you include?',
      'What is the difference between a data analyst\'s report and a journalist\'s feature article? What does each one do that the other cannot?',
      'Which part of the C1 course has been most useful to you? Which part has been most challenging?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Nominalisation — turning verbs into noun phrases for formal writing',
    description: 'Formal analytical reports use nominalisation — converting verb-based ideas into noun phrases. This creates a more academic, objective tone. Instead of "The team defended badly" → "The team\'s defensive organisation was poor." Instead of "They pressed high" → "Their high-pressing approach." Instead of "The deal failed" → "The breakdown of negotiations." Instead of "They spent too much" → "Excessive wage expenditure relative to revenue." Nominalisation distances the writer from the subject and creates the analytical register expected in high-level football reports. At C1-C2 level, your writing should consistently use nominalised forms.',
    positiveExamples: [
      { sentence: 'The deterioration of their defensive structure in transition was the primary cause of the defeat.', note: '"deterioration of" = nominalisation of "deteriorated"; "defensive structure in transition" = nominalised tactical concept' },
      { sentence: 'The club\'s failure to address wage expenditure relative to revenue represents a significant governance concern.', note: '"failure to address" and "wage expenditure relative to revenue" = nominalised, formal — not "they spent too much"' },
      { sentence: 'The under-representation of diverse candidates in coaching appointments warrants further investigation.', note: '"under-representation" + "coaching appointments" = nominalised systemic analysis — precise and formal' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'SYNTHESIS',
      partOfSpeech: 'noun',
      definition: 'The combination of different types of information or argument into a coherent whole — bringing together evidence from multiple sources.',
      example: '"The analyst\'s report was a synthesis of performance data, financial information, and qualitative assessment — each section informing the others."',
      imageSlug: '/images/synthesis.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: 'A standard of reference used for comparison — what success looks like, against which actual performance is measured.',
      example: '"The club set a benchmark of top-six finish and Champions League qualification — and by that standard, the season must be considered a failure."',
      imageSlug: '/images/benchmark.png',
    },
    {
      word: 'ASSESSMENT',
      partOfSpeech: 'noun',
      definition: 'A considered evaluation of something — more thorough than an opinion, based on evidence and reasoning.',
      example: '"Our assessment of the club\'s financial position is cautiously optimistic — the new commercial deals offset the increased wage bill."',
      imageSlug: '/images/assessment.png',
    },
    {
      word: 'RECOMMENDATIONS',
      partOfSpeech: 'noun',
      definition: 'Specific proposed actions based on the findings of an analysis — what the report suggests should happen next.',
      example: '"The report\'s recommendations were clear: reduce the wage bill, prioritise squad depth over headline signings, and restructure the scouting network."',
      imageSlug: '/images/recommendations.png',
    },
    {
      word: 'QUALITATIVE',
      partOfSpeech: 'adjective',
      definition: 'Based on description, observation, and judgement rather than numerical measurement — the texture and quality of something.',
      example: '"Beyond the quantitative data, the qualitative assessment of team morale and dressing room dynamics suggested significant underlying tension."',
      imageSlug: '/images/qualitative.png',
    },
    {
      word: 'QUANTITATIVE',
      partOfSpeech: 'adjective',
      definition: 'Based on numerical measurement and statistical data — the measurable, countable dimension of performance.',
      example: '"The quantitative analysis showed an xG of 1.8 and an xGA of 2.4 — a negative differential that explained the disappointing points return."',
      imageSlug: '/images/quantitative.png',
    },
    {
      word: 'CONCLUSION',
      partOfSpeech: 'noun',
      definition: 'The final judgement of a report — the answer to the central question, supported by all the preceding evidence.',
      example: '"The report\'s conclusion was unambiguous: without significant structural change, the club risked a cycle of short-term thinking and long-term decline."',
      imageSlug: '/images/conclusion.png',
    },
    {
      word: 'CAVEAT',
      partOfSpeech: 'noun',
      definition: 'A qualification or warning attached to a conclusion — acknowledging the limits of your evidence or the conditions under which your conclusion holds.',
      example: '"The report\'s positive outlook on finances came with an important caveat: it assumed the broadcasting deal would be renewed at current values."',
      imageSlug: '/images/caveat.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'DRAW CONCLUSIONS',
      definition: 'To reach judgements based on evidence — to synthesise findings into clear analytical positions.',
      example: '"Based on the data, we can draw the following conclusions: the team underperformed relative to their xG, and the squad lacks depth in key positions."',
      imageSlug: '/images/draw-conclusions.png',
    },
    {
      phrase: 'POINT TO',
      definition: 'To indicate or suggest — when evidence or data points in a specific direction.',
      example: '"The evidence points to a structural problem in transition defence — not isolated incidents, but a consistent pattern across twelve matches."',
      imageSlug: '/images/point-to.png',
    },
    {
      phrase: 'SET OUT',
      definition: 'To present or explain clearly — to lay out the structure of an argument or report.',
      example: '"This report sets out the club\'s performance across three dimensions: tactical, financial, and governance."',
      imageSlug: '/images/set-out.png',
    },
    {
      phrase: 'ACCOUNT FOR',
      definition: 'To explain or give reasons for — why something happened or why a figure is the way it is.',
      example: '"The increased wage bill accounts for a significant proportion of the operating loss — but commercial underperformance is also a contributing factor."',
      imageSlug: '/images/account-for.png',
    },
    {
      phrase: 'BEAR OUT',
      definition: 'To confirm or support — when evidence proves that a conclusion or hypothesis was correct.',
      example: '"The data bears out the initial assessment — their set-piece vulnerability was the decisive factor in five of their seven defeats."',
      imageSlug: '/images/bear-out.png',
    },
    {
      phrase: 'FALL SHORT OF',
      definition: 'To not reach the required standard — to underperform against a benchmark.',
      example: '"The club fell short of their stated objective in three of the five performance areas identified at the start of the season."',
      imageSlug: '/images/fall-short.png',
    },
  ],

  onThePitch: {
    instructions: 'The structure and language of a complete analyst\'s report — bringing together all C1 skills.',
    items: [
      {
        cue: 'Report structure: the executive summary',
        meaning: 'Every professional analyst\'s report begins with an executive summary — a concise overview of the key findings and recommendations that can be read in two minutes.',
        usage: '"Executive Summary: This report assesses City FC\'s performance across the 2024-25 season against stated benchmarks. Key findings: (1) tactical performance exceeded expectations in the first half of the season; (2) financial sustainability concerns increased due to wage bill growth; (3) governance indicators suggest structural risk. Recommendation: immediate restructuring of the coaching hierarchy and a review of the wage structure." The executive summary is written last but placed first.',
        imageSlug: 'otp-exec-summary',
      },
      {
        cue: 'The tactical section — quantitative and qualitative combined',
        meaning: 'A strong tactical section combines xG data, pressing metrics, and passing accuracy with qualitative observations about shape, decision-making, and player roles.',
        usage: '"Tactical Assessment: City\'s xG over the season was 62.4 against an xGA of 48.1 — a positive differential that suggests underlying performance better than the final points total. However, qualitative analysis of transition phases reveals consistent defensive vulnerability on the counter-attack: in 34 of 38 matches, the defensive line was bypassed in the first five seconds after losing possession. This structural weakness accounts for 9 of their 14 conceded goals from open play."',
        imageSlug: 'otp-tactical-section',
      },
      {
        cue: 'The financial section — sustainability and risk',
        meaning: 'The financial section assesses whether the club\'s spending is sustainable — looking at wage-to-revenue ratio, net transfer spend, debt levels, and Financial Fair Play compliance.',
        usage: '"Financial Assessment: Revenue grew 8% year-on-year to £340 million, driven primarily by a new shirt sponsorship deal. However, wage expenditure increased by 19% to £248 million — a wage-to-revenue ratio of 73%, above the UEFA sustainability benchmark of 70%. This represents a caveat on our otherwise positive financial outlook: unless commercial growth accelerates, the club risks a compliance challenge in the next regulatory cycle."',
        imageSlug: 'otp-financial-section',
      },
      {
        cue: 'The governance section — structure and diversity',
        meaning: 'A governance section examines board composition, management structure, and whether the club\'s leadership reflects best practice in diversity and strategic thinking.',
        usage: '"Governance Assessment: The club\'s board comprises nine members, of whom seven are drawn from the ownership consortium. This concentration of ownership in governance creates a structural risk — the absence of independent directors limits external scrutiny. The under-representation of diverse candidates at senior leadership level is a concern, particularly given the demographic profile of the playing squad. Recommendations: appointment of three independent directors and a formal diversity audit of recruitment processes."',
        imageSlug: 'otp-governance-section',
      },
      {
        cue: 'Drawing conclusions — the synthesis',
        meaning: 'The conclusion synthesises all three sections and answers the central question: against the stated benchmarks, how did the club perform, and what should happen next?',
        usage: '"Conclusion: Based on the evidence set out in this report, the club\'s performance in 2024-25 fell short of its stated objectives in two of three dimensions. Tactically, the underlying data is more positive than the final table suggests. Financially, the wage-to-revenue trajectory requires urgent attention. Structurally, governance reform is the most pressing priority. The data bears out the view that without addressing the structural issues, tactical and financial performance will continue to diverge from potential."',
        imageSlug: 'otp-conclusion',
      },
      {
        cue: 'The recommendations section — specific and actionable',
        meaning: 'Good recommendations are specific, prioritised, and actionable — not vague aspirations but clear instructions.',
        usage: '"Recommendations: (1) Immediate priority — reduce the wage bill to 68% of revenue by the end of the next transfer window through a combination of sales and contract restructuring. (2) Medium term — appoint three independent board directors with finance and governance expertise. (3) Structural — commission a full diversity audit of coaching and management recruitment processes with published targets and annual reporting." Vague recommendations are not useful. Specific, measurable ones are.',
        imageSlug: 'otp-recommendations',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst', speakerColor: 'green', text: 'The report sets out three areas: tactical, financial, and governance. Let me walk you through each.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'Start with the conclusions. We have fifteen minutes.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'The headline conclusion is that the club fell short of its benchmarks in two of three dimensions. Tactically, the data is more positive than the table suggests.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'What does the xG analysis point to?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'An xG differential of plus 14.3 — the team created significantly more than they conceded. The points return underperformed. That is a conversion issue, not a structural one.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'And financially?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'The wage-to-revenue ratio is the concern — 73% against a benchmark of 70%. Revenue growth doesn\'t fully account for the wage increase. There is a caveat: the new commercial deal may change this picture significantly.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'Recommendations?' },
  ],

  matchingExercise: [
    { word: 'Synthesis', definition: 'Combining different types of information into a coherent whole — bringing evidence from multiple sources together' },
    { word: 'Benchmark', definition: 'A standard of reference used for comparison — what success looks like against which performance is measured' },
    { word: 'Assessment', definition: 'A considered, evidence-based evaluation — more thorough than an opinion' },
    { word: 'Recommendations', definition: 'Specific proposed actions based on the findings of an analysis' },
    { word: 'Qualitative', definition: 'Based on description and judgement rather than numerical measurement' },
    { word: 'Quantitative', definition: 'Based on numerical measurement and statistical data' },
    { word: 'Conclusion', definition: 'The final judgement of a report — the answer to the central question supported by evidence' },
    { word: 'Caveat', definition: 'A qualification attached to a conclusion — acknowledging the limits of the evidence' },
  ],

  fillBlankExercise: [
    { before: 'This report', answer: 'sets out', after: 'the club\'s performance across three dimensions: tactical, financial, and governance.' },
    { before: 'The evidence', answer: 'points to', after: 'a structural problem in transition defence across twelve matches.' },
    { before: 'The data', answer: 'bears out', after: 'the initial assessment — set-piece vulnerability was decisive in five defeats.' },
    { before: 'The club', answer: 'fell short of', after: 'their stated objectives in three of five performance areas.' },
    { before: 'The increased wage bill', answer: 'accounts for', after: 'a significant proportion of the operating loss this season.' },
    { before: 'The report\'s positive financial outlook came with an important', answer: 'caveat', after: ': it assumed the broadcasting deal would be renewed.' },
    { before: 'Based on the evidence, we can', answer: 'draw conclusions', after: 'about both the tactical and financial performance of the club.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is "nominalisation" and why do formal reports use it?',
      options: ['Converting verb-based ideas into noun phrases to create a more objective, analytical tone — "they defended badly" becomes "defensive deterioration"', 'The process of giving names to new tactical concepts and formations discovered through data analysis', 'A technique for avoiding repetition in long documents by replacing repeated nouns with pronouns'],
      correctIndex: 0,
    },
    {
      question: 'What is an executive summary and where does it appear in a report?',
      options: ['A concise overview of key findings and recommendations — written last but placed at the beginning of the report', 'A detailed technical section aimed at senior executives — placed at the end with supporting data appendices', 'A summary of the key data visualisations — written first to guide the research questions that follow'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "The evidence ___ to a consistent defensive vulnerability in transition across 12 matches."',
      options: ['points', 'draws', 'bears'],
      correctIndex: 0,
    },
    {
      question: 'What makes a recommendation "good" in an analyst\'s report?',
      options: ['It is specific, prioritised, and actionable — not a vague aspiration but a clear instruction with measurable outcomes', 'It is ambitious and aspirational — setting targets that are challenging but motivating for the club', 'It avoids being too prescriptive — leaving room for the decision-makers to exercise their own judgement'],
      correctIndex: 0,
    },
    {
      question: 'What is the difference between qualitative and quantitative analysis?',
      options: ['Quantitative uses numerical data; qualitative uses description, observation, and judgement — both are needed in a complete report', 'Qualitative analysis is more reliable than quantitative because numbers can be misleading', 'Quantitative analysis is only used for financial sections; qualitative analysis is only used for tactical sections'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence from an analyst\'s report.',
    items: [
      {
        sentence: 'This report ___ out the club\'s performance across tactical, financial, and governance dimensions.',
        options: ['sets', 'draws', 'falls'],
        correctIndex: 0,
        explanation: '"Set out" means to present or lay out clearly — the standard phrase for introducing the structure of a formal report.',
      },
      {
        sentence: 'The data ___ out the initial assessment — set-piece vulnerability was decisive in five of seven defeats.',
        options: ['bears', 'draws', 'points'],
        correctIndex: 0,
        explanation: '"Bear out" means to confirm or support — when evidence proves that a hypothesis or prior assessment was correct.',
      },
      {
        sentence: 'The club ___ short of its stated benchmarks in two of three performance dimensions assessed.',
        options: ['fell', 'drew', 'bore'],
        correctIndex: 0,
        explanation: '"Fall short of" means to not reach the required standard — to underperform against a stated objective or benchmark.',
      },
      {
        sentence: 'The report\'s positive conclusion comes with an important ___: it assumes the new commercial deal is completed.',
        options: ['caveat', 'benchmark', 'synthesis'],
        correctIndex: 0,
        explanation: 'A caveat is a qualification attached to a conclusion — acknowledging the conditions under which the conclusion holds.',
      },
      {
        sentence: 'The increased amortisation costs ___ for a significant proportion of the operating loss in this period.',
        options: ['account', 'point', 'set'],
        correctIndex: 0,
        explanation: '"Account for" means to explain or give reasons for — why a figure or outcome is the way it is.',
      },
      {
        sentence: 'The ___ analysis showed an xG differential of plus 14 — indicating the team underperformed against their expected output.',
        options: ['quantitative', 'qualitative', 'structural'],
        correctIndex: 0,
        explanation: 'Quantitative analysis uses numerical data — xG, ratios, and counts. Qualitative analysis uses descriptions and judgement.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are presenting an analyst\'s report to the board. Choose the most effective analytical response.',
      items: [
        {
          customerLine: '"The data looks positive — why aren\'t you recommending we increase the transfer budget?"',
          options: [
            '"The tactical data is positive — but the financial data tells a different story. Our wage-to-revenue ratio is already at 73%, above the 70% benchmark. Increasing the transfer budget without addressing the wage structure would compound the financial risk. The recommendation is to balance the books first."',
            '"You\'re right — the data is positive and we should invest more to build on it."',
            '"The data is not as positive as it looks — I would not recommend any new spending at this stage."',
          ],
          correctIndex: 0,
          explanation: 'A good analyst synthesises all three dimensions — acknowledging the positive tactical picture while contextualising it against the financial constraint. This is the core skill of the capstone lesson.',
        },
        {
          customerLine: '"Your recommendation to reduce the wage bill is too aggressive — it will hurt the squad."',
          options: [
            '"That is a legitimate concern — and the recommendation includes a caveat: the reduction should come through contract restructuring and player sales, not by preventing squad investment in positions of genuine need. The goal is sustainability at 68%, not cuts for their own sake."',
            '"I understand, but the financial data is clear — we have no choice and must implement cuts immediately."',
            '"You may be right — I will revise the recommendation to be less specific about the target percentage."',
          ],
          correctIndex: 0,
          explanation: 'A good analyst defends their recommendation with specific evidence while acknowledging the legitimate concern — clarifying what the recommendation actually means, not backing away from it.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the analytical or structural mistake in this excerpt from an analyst\'s report.',
      dialogue: [
        { speaker: 'Report', speakerColor: 'green', text: 'Executive Summary: The season was really good in some ways but bad in others.' },
        { speaker: 'Report', speakerColor: 'green', text: 'They played well at home but not away. The finances were also a bit complicated.' },
        { speaker: 'Report', speakerColor: 'green', text: 'Our recommendation is that the club should try to do better next season and spend more wisely.' },
        { speaker: 'Report', speakerColor: 'green', text: 'We think the manager is quite good, but maybe not perfect.' },
        { speaker: 'Report', speakerColor: 'green', text: 'In conclusion, the season was mixed and the future is uncertain.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'Executive Summary: The season was really good in some ways but bad in others.',
          correction: 'Executive Summary: This report assesses the club\'s 2024-25 performance across three dimensions — tactical, financial, and governance — against stated benchmarks. Key finding: tactical performance exceeded expectation in home fixtures (xG differential +8.4) but fell short in away matches (-3.1). Financial sustainability is the primary concern: the wage-to-revenue ratio of 73% exceeds the recommended benchmark. Recommendation: reduce the wage-to-revenue ratio to 68% within two transfer windows while maintaining squad depth in three identified positional priorities.',
          explanation: 'This entire executive summary fails every criterion of professional analytical writing. Problems: (1) vague language — "really good in some ways but bad in others" gives no specific information; (2) no quantitative data — no xG, no financial ratios, no benchmarks; (3) no nominalisation — informal conversational register throughout; (4) the recommendation is useless — "do better and spend more wisely" is not actionable. A professional executive summary must be specific, data-grounded, formally written, and contain measurable recommendations.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analyst\'s report sentence at C1 level — using precise, formal vocabulary.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The quantitative analysis points to a consistent pattern of underperformance in transition — specifically...',
          suggestedCompletion: 'the defensive line was bypassed in 34 of 38 matches within the first five seconds of losing possession. This structural vulnerability in transition defence accounts for nine of fourteen goals conceded from open play, and represents the primary tactical priority for the incoming coaching staff.',
        },
        {
          customerLine: '',
          salespersonStart: 'The report\'s financial assessment is cautiously optimistic, with an important caveat...',
          suggestedCompletion: 'the positive outlook assumes the broadcasting rights deal is renewed at current values. Any reduction in broadcast income — whether through league position decline or renegotiation — would push the wage-to-revenue ratio above 80%, triggering a potential Financial Fair Play compliance issue within the next regulatory cycle.',
        },
        {
          customerLine: '',
          salespersonStart: 'Based on this synthesis of tactical, financial, and governance evidence, our conclusions are...',
          suggestedCompletion: 'threefold: the tactical foundation is sound but structurally fragile in transition; the financial position requires immediate intervention to address wage-to-revenue imbalance; and governance reform — particularly the introduction of independent directors and a formal diversity audit — is the most pressing structural priority for the board.',
        },
      ],
    },
  },
};
