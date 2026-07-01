import { Lesson } from '@/types/lesson';

export const c1PresentingDataInEnglish: Lesson = {
  slug: 'c1-presenting-data-in-english',
  title: 'Presenting Data in English',
  subtitle: 'Unit 1 — Data & Statistics',
  level: 'C1-C2',
  description: 'Knowing the statistics is one thing. Presenting them clearly in English — to a coach, a journalist, or a board — is another. This lesson gives you the language to walk someone through data confidently.',
  heroImage: '/images/presenting-data.png',

  warmUp: {
    questions: [
      'Have you ever had to explain numbers or data to someone in English? How did it go?',
      'What makes a data presentation easy to follow? Think of structure, language, and visuals.',
      'If you had to summarise a football match in three statistics, which three would you choose?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Discourse markers — signposting your presentation',
    description: 'When you present data in English, discourse markers help your listener follow your thinking. They signal what comes next — a new point, a contrast, a conclusion, or an example. Common signposting phrases: "To begin with..." (opening), "Moving on to..." (transition), "What\'s particularly striking is..." (emphasis), "In contrast..." (comparison), "To summarise..." (closing). Using these consistently makes your presentation sound professional and easy to follow.',
    positiveExamples: [
      { sentence: 'To begin with, let\'s look at the possession stats from last night\'s match.', note: '"To begin with" — a clear opening marker that signals you are starting your presentation' },
      { sentence: 'Moving on to the defensive data, City applied 74 pressures in total.', note: '"Moving on to" — smooth transition from one data area to the next' },
      { sentence: 'What\'s particularly striking is the xG differential — 2.4 to 0.3 in our favour.', note: '"What\'s particularly striking is" — highlights the most important finding' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'HIGHLIGHT',
      partOfSpeech: 'verb',
      definition: 'To draw attention to something important — to make sure someone notices a key piece of data.',
      example: '"I want to highlight one number in particular — their xGA was 0.4 and they conceded twice."',
      imageSlug: '/images/highlight.png',
    },
    {
      word: 'DIFFERENTIAL',
      partOfSpeech: 'noun',
      definition: 'The difference between two numbers — often used to compare two teams\' statistics.',
      example: '"The xG differential was 2.1 in our favour — that tells you everything about who dominated."',
      imageSlug: '/images/differential.png',
    },
    {
      word: 'TREND',
      partOfSpeech: 'noun',
      definition: 'A pattern that continues over time — when a statistic consistently goes up, down, or stays the same across multiple games.',
      example: '"There\'s a clear trend here — their progressive pass percentage has dropped in each of the last five matches."',
      imageSlug: '/images/trend.png',
    },
    {
      word: 'OUTLIER',
      partOfSpeech: 'noun',
      definition: 'A result that is very different from the others — an unusual data point that doesn\'t fit the pattern.',
      example: '"The 4-0 win is an outlier — their average xG per game is 1.1, not 3.8."',
      imageSlug: '/images/outlier.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: 'A standard number used for comparison — a reference point that helps you judge whether a figure is good or bad.',
      example: '"The league average for press success rate is 28%. Our benchmark should be 32% or above."',
      imageSlug: '/images/benchmark.png',
    },
    {
      word: 'CORRELATION',
      partOfSpeech: 'noun',
      definition: 'When two statistics are linked — when one goes up, the other tends to go up (or down) too.',
      example: '"There\'s a strong correlation between progressive passes per game and goals scored across the league."',
      imageSlug: '/images/correlation.png',
    },
    {
      word: 'CAVEAT',
      partOfSpeech: 'noun',
      definition: 'A warning or limitation that you add to your data — something that makes the numbers less certain or less reliable.',
      example: '"One caveat — this data only covers the last three matches, so the sample size is small."',
      imageSlug: '/images/caveat.png',
    },
    {
      word: 'TAKEAWAY',
      partOfSpeech: 'noun',
      definition: 'The main thing you want your audience to remember from a presentation — the key message.',
      example: '"The main takeaway from tonight\'s data is simple: we create good chances but our finishing needs to improve."',
      imageSlug: '/images/takeaway.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WALK THROUGH',
      definition: 'To explain something step by step — to guide someone through information slowly and clearly.',
      example: '"Let me walk you through the xG data from the last five matches."',
      imageSlug: '/images/walk-through.png',
    },
    {
      phrase: 'ZOOM IN ON',
      definition: 'To look more closely at one specific area or number — to focus on a particular detail.',
      example: '"I\'d like to zoom in on the second half — that\'s where the performance dropped significantly."',
      imageSlug: '/images/zoom-in-on.png',
    },
    {
      phrase: 'STAND OUT',
      definition: 'To be noticeably different from everything else — to be the most obvious or striking figure.',
      example: '"One number stands out immediately — their xGA is 0.4 but they\'ve conceded 12 goals this season."',
      imageSlug: '/images/stand-out.png',
    },
    {
      phrase: 'DRILL DOWN INTO',
      definition: 'To look deeper into the details of a data set — to go beyond the surface numbers.',
      example: '"When we drill down into the possession data, we find that most of it was lateral play."',
      imageSlug: '/images/drill-down-into.png',
    },
    {
      phrase: 'POINT TO',
      definition: 'To indicate or suggest — when data shows evidence that supports a particular conclusion.',
      example: '"All of these numbers point to the same conclusion — their press is less effective away from home."',
      imageSlug: '/images/point-to.png',
    },
    {
      phrase: 'BREAK DOWN',
      definition: 'To separate into smaller parts for easier analysis — to divide a total figure into its components.',
      example: '"Let me break down the 74 pressures — 41 were in the final third, 33 in the middle third."',
      imageSlug: '/images/break-down-data.png',
    },
  ],

  onThePitch: {
    instructions: 'These are real data presentation scenarios in a football context — learn the language for each.',
    items: [
      {
        cue: 'Opening a data presentation to a coach',
        meaning: 'When you walk a coach through data, start with the most important headline number, then build the story around it. Be clear, be direct, and use signposting language.',
        usage: '"To begin with, I want to highlight the most important number from Saturday — our xG was 2.6 and we scored once. That\'s our starting point today." Good openings give the audience something concrete to hold onto immediately.',
        imageSlug: 'otp-open-presentation',
      },
      {
        cue: 'Transitioning between data areas',
        meaning: 'When you move from one type of data to another (e.g., from attacking stats to defensive stats), signal the transition clearly so the audience can follow.',
        usage: '"Moving on to the defensive data — and this is where things get interesting..." or "Let\'s shift our attention now to the pressing numbers." Without signposting, transitions feel abrupt and confusing.',
        imageSlug: 'otp-transition-data',
      },
      {
        cue: 'Highlighting an outlier or unexpected result',
        meaning: 'When one number looks very different from the rest, call it out explicitly and explain why it\'s different.',
        usage: '"What\'s particularly striking here is the 4-0 win in February — that\'s clearly an outlier. Their average xG per game is 1.2, not 3.8. One unusually weak opponent inflated the numbers." Acknowledging outliers builds credibility.',
        imageSlug: 'otp-highlight-outlier',
      },
      {
        cue: 'Adding a caveat to the data',
        meaning: 'Good analysts always point out the limitations of their data. A caveat shows intellectual honesty and builds trust with your audience.',
        usage: '"One caveat before I continue — we only have data from six matches, so the sample size is small. These trends may shift as the season goes on." Never present data without mentioning its limitations.',
        imageSlug: 'otp-caveat',
      },
      {
        cue: 'Drilling down into a headline number',
        meaning: 'A headline number (like "74 pressures") only becomes useful when you break it down further. Always go deeper.',
        usage: '"When we drill down into the 74 pressures — 42 were in the final third, which is where we want them. Only 11 were in our own defensive third. So the press was well-positioned." Breaking down makes the number meaningful.',
        imageSlug: 'otp-drill-down',
      },
      {
        cue: 'Closing with the main takeaway',
        meaning: 'End every presentation with one clear message — the single most important thing you want the coach or audience to remember.',
        usage: '"To summarise — the main takeaway is this: we are creating excellent chances but converting very few. xG suggests we should be scoring 2.1 goals per game. Our actual average is 0.8. The finishing is the problem, not the system." One clear message is more powerful than ten.',
        imageSlug: 'otp-close-takeaway',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst', speakerColor: 'orange', text: 'Good morning. To begin with, I want to walk you through three key areas from the last four matches — attack, defence, and pressing.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Keep it simple. What\'s the most important thing?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'The main takeaway is this — our xG per game is 2.1 but we\'re only scoring 0.9. That\'s a significant underperformance in front of goal.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Is it a problem with the striker or the system?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'When I drill down into the shot data, the chances are genuinely good — xG above 0.4 each. The issue is finishing, not chance creation.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'And the defence?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'Moving on to defence — and this is actually a positive story. Our xGA is 0.6 per game. We\'re defending well. One caveat — two of the four opponents were very weak, so the sample may flatter us slightly.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Good. Let\'s focus training on finishing this week. Can you prepare a short video of the missed chances?' },
  ],

  matchingExercise: [
    { word: 'Highlight', definition: 'To draw attention to something important in a presentation' },
    { word: 'Differential', definition: 'The difference between two teams\' statistics' },
    { word: 'Trend', definition: 'A pattern that continues consistently across multiple games or data points' },
    { word: 'Outlier', definition: 'A result that is very different from all the others — doesn\'t fit the pattern' },
    { word: 'Benchmark', definition: 'A reference point used to judge whether a figure is good or bad' },
    { word: 'Correlation', definition: 'When two statistics are linked — when one changes, the other tends to change too' },
    { word: 'Caveat', definition: 'A warning or limitation you add to make the data more honest and accurate' },
    { word: 'Takeaway', definition: 'The single most important message the audience should remember from the presentation' },
  ],

  fillBlankExercise: [
    { before: 'Let me', answer: 'walk you through', after: 'the xG data from the last five matches.' },
    { before: 'Moving', answer: 'on to', after: 'the defensive data — and this is where things get interesting.' },
    { before: 'One number', answer: 'stands out', after: 'immediately — their xGA of 0.4 but 12 goals conceded.' },
    { before: 'When we', answer: 'drill down into', after: 'the possession numbers, most passes are going sideways.' },
    { before: 'The 4-0 win is clearly an', answer: 'outlier', after: '— their average xG per game is only 1.1.' },
    { before: 'All of these numbers', answer: 'point to', after: 'the same conclusion — their press is weaker away from home.' },
    { before: 'One', answer: 'caveat', after: '— this data only covers three matches, so the sample is small.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the purpose of a "caveat" in a data presentation?',
      options: ['To honestly acknowledge the limitations of the data', 'To summarise the key finding at the end', 'To highlight the most important number in the analysis'],
      correctIndex: 0,
    },
    {
      question: 'Which phrase signals a transition from one topic to another?',
      options: ['"Moving on to the defensive data..."', '"What\'s particularly striking is..."', '"To summarise..."'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "Let me ___ down into the pressing numbers — there\'s something important here."',
      options: ['drill', 'walk', 'zoom'],
      correctIndex: 0,
    },
    {
      question: 'What does "the main takeaway" mean at the end of a presentation?',
      options: ['The single most important message the audience should remember', 'The most complicated statistical finding', 'A caveat about the limitations of the data'],
      correctIndex: 0,
    },
    {
      question: 'What is a "benchmark" in football data analysis?',
      options: ['A reference point used to judge whether a statistic is good or bad', 'A type of data visualisation used to compare two teams', 'A specific metric that only applies to goalkeepers'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best phrase to complete each sentence from a data presentation.',
    items: [
      {
        sentence: 'To ___ with, let\'s look at the most important statistic from last night.',
        options: ['begin', 'start', 'open'],
        correctIndex: 0,
        explanation: '"To begin with" is the standard opening discourse marker in professional presentations.',
      },
      {
        sentence: 'What\'s particularly ___ is the xG differential — 2.4 to 0.3 in our favour.',
        options: ['striking', 'notable', 'different'],
        correctIndex: 0,
        explanation: '"What\'s particularly striking is" is the standard phrase for highlighting an important finding.',
      },
      {
        sentence: 'When we ___ down into the possession data, most passes are going sideways.',
        options: ['drill', 'break', 'zoom'],
        correctIndex: 0,
        explanation: '"Drill down into" means to examine something in more detail — to go beyond the surface number.',
      },
      {
        sentence: 'One ___ before I continue — this is only three matches of data.',
        options: ['caveat', 'takeaway', 'outlier'],
        correctIndex: 0,
        explanation: 'A caveat is a warning or limitation that qualifies the data. It shows analytical honesty.',
      },
      {
        sentence: '___ on to the defensive numbers — and this is actually a positive story.',
        options: ['Moving', 'Going', 'Turning'],
        correctIndex: 0,
        explanation: '"Moving on to" is the standard transition marker when shifting between topics in a presentation.',
      },
      {
        sentence: 'The main ___ from tonight\'s analysis is simple — our finishing needs to improve.',
        options: ['takeaway', 'highlight', 'caveat'],
        correctIndex: 0,
        explanation: 'The "takeaway" is the single most important message the audience should leave with.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the most professional and clear way to present this data to a coaching staff.',
      items: [
        {
          customerLine: 'You need to explain: "Our xG per game is 2.1 but we\'re only scoring 0.9 — what\'s the problem?"',
          options: [
            '"To begin with — our xG per game is 2.1 but our actual goals per game is 0.9. That\'s an underperformance of 1.2 goals per match. When we drill down into the shot data, the chances are genuinely good. The issue is finishing, not chance creation."',
            '"We\'re not scoring enough goals. Our xG is good but we\'re not putting them away. The striker needs to improve."',
            '"The numbers show we have 2.1 xG and 0.9 goals. 2.1 minus 0.9 equals 1.2. That is too many. We need to score more goals."',
          ],
          correctIndex: 0,
          explanation: 'The best answer uses signposting language ("To begin with"), goes deeper ("When we drill down"), and draws a clear conclusion ("The issue is finishing").',
        },
        {
          customerLine: 'You want to add a warning about the data before presenting it.',
          options: [
            '"One caveat before I begin — this analysis only covers four matches, so the sample size is relatively small. The trends may shift as the season progresses."',
            '"Warning: the data might be wrong because we haven\'t played many games yet."',
            '"I should tell you that I\'m not 100% sure about these numbers because it\'s only been a few weeks."',
          ],
          correctIndex: 0,
          explanation: '"One caveat" is the professional phrase for adding a data limitation. It\'s clear, formal, and builds trust.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this data presentation script.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Good morning, everyone. To begin with, I want to highlight our key performance indicators from this month.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Our xG per game comes in at 1.8 — that\'s above the league average benchmark of 1.4.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Moving on to the defensive side — our xGA per game is 0.9, which is the third best in the league.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'One caveat though — the 4-0 win against the bottom team is a clear outlier that inflates our attacking numbers.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'To summarise, the main takeout is this: we defend well and create good chances, but our finishing is below average.' },
      ],
      mistakes: [
        {
          lineIndex: 4,
          incorrectText: 'the main takeout',
          correction: 'the main takeaway',
          explanation: '"Takeaway" is the correct term for the key message of a presentation. "Takeout" refers to food ordered from a restaurant.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analyst\'s sentence in a natural, professional way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'What\'s particularly striking in this data is...',
          suggestedCompletion: 'the gap between our xG and our actual goals — we should be scoring nearly twice as many goals as we are.',
        },
        {
          customerLine: '',
          salespersonStart: 'When we drill down into the pressing data, we can see that...',
          suggestedCompletion: 'most of our pressures happen in the middle third, not the final third — we\'re pressing too deep.',
        },
        {
          customerLine: '',
          salespersonStart: 'To summarise tonight\'s analysis, the main takeaway is...',
          suggestedCompletion: 'our defence is solid and our chance creation is excellent, but we need to dramatically improve our finishing to turn this xG into actual goals.',
        },
      ],
    },
  },
};
