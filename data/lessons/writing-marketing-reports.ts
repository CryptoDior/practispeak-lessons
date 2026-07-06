import { Lesson } from '@/types/lesson';

export const writingMarketingReports: Lesson = {
  slug: 'writing-marketing-reports',
  title: 'Writing Marketing Reports',
  subtitle: 'How to structure and write a clear, professional marketing performance report',
  level: 'B1-B2',
  description: "A good marketing report does not just show numbers — it tells a story. It explains what you did, what happened, and what you should do next. In most marketing teams, you will write regular reports on campaigns, channels, or budgets. The people reading your report are often busy managers who want the key points fast. This lesson teaches you the vocabulary and phrases you need to write clear, well-structured reports in English — from the executive summary at the top to the recommendations at the end.",
  heroImage: '/images/writing-marketing-reports-hero.png',

  vocabulary: [
    {
      word: 'EXECUTIVE SUMMARY',
      partOfSpeech: 'noun',
      definition: 'A short section at the very start of a report that gives the most important points. A good executive summary means the reader understands the main message without reading the full report. Keep it to three to five sentences.',
      example: "Marcus said: The executive summary is the most important part of the report — if I only have two minutes, that's all I'll read. Riley replied: I'll rewrite it. Right now it's too long and it buries the key result. I'll put the campaign result, the main finding, and the recommendation in the first three sentences.",
      imageSlug: '/images/writing-marketing-reports-executive-summary.png',
    },
    {
      word: 'FINDINGS',
      partOfSpeech: 'noun',
      definition: 'The facts and results you discovered from your data or research. Findings describe what happened — they do not explain why or say what to do next. Save your opinions and recommendations for later sections.',
      example: "Riley presented her section: The findings show that email open rates dropped by 12% compared to last month. Click-through rates held steady, but conversion dropped significantly in week three. Marcus nodded: Good — those are findings. Now I need to know what caused the drop and what we are going to do about it.",
      imageSlug: '/images/writing-marketing-reports-findings.png',
    },
    {
      word: 'RECOMMENDATION',
      partOfSpeech: 'noun',
      definition: 'A suggestion for what to do next, based on your findings. Recommendations come at the end of a report and should be specific and actionable. Do not just say there is a problem — say what you think should happen next.',
      example: "Marcus reviewed the final section: Your recommendations are good — they are specific and based on the data. Riley explained: I have three: reduce email frequency in week three, test a new subject line format, and increase the budget for the best-performing segment by 20%.",
      imageSlug: '/images/writing-marketing-reports-recommendation.png',
    },
    {
      word: 'METRIC',
      partOfSpeech: 'noun',
      definition: 'A number you use to measure performance. You choose your metrics before a campaign starts so you know what to track and how to judge success. Common marketing metrics include open rate, click-through rate, conversion rate, and cost per acquisition.',
      example: "Marcus asked: Which metrics are you reporting on? Riley replied: I chose four main metrics for this campaign — open rate, click-through rate, conversion rate, and cost per lead. I set the targets at the start, so I can compare the actual results directly against what we expected.",
      imageSlug: '/images/writing-marketing-reports-metric.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: 'The standard you use to compare your results against. A benchmark could be your own result from a previous period, an industry average, or a target you set before the campaign. Without a benchmark, a number has no context.',
      example: "Riley explained: Our open rate was 24%. Marcus asked: Is that good? Riley answered: Yes — the industry benchmark for B2B email is around 20%, and our own benchmark from last quarter was 22%. So we beat both. Without those benchmarks, 24% is just a number.",
      imageSlug: '/images/writing-marketing-reports-benchmark.png',
    },
    {
      word: 'TREND',
      partOfSpeech: 'noun',
      definition: 'A pattern in data that shows how something is changing over time — going up, going down, or staying flat. A trend is more useful than a single number because it shows direction. Always look at trends over at least three data points.',
      example: "Marcus said: Don't just show me this month's numbers — show me the trend. Riley replied: Over the last four months, open rates have been rising steadily — 19%, 21%, 22%, and now 24%. The trend is positive. But conversion has been flat for three months, which is the issue we need to address.",
      imageSlug: '/images/writing-marketing-reports-trend.png',
    },
    {
      word: 'CONCLUSION',
      partOfSpeech: 'noun',
      definition: 'The section of a report where you summarise what your findings mean. The conclusion connects the data back to the original objective. It answers the question: did we achieve what we set out to do, and why or why not?',
      example: "Riley read her conclusion aloud: In conclusion, the campaign achieved its open rate and click-through targets but fell short on conversions due to a weak landing page experience in week three. Marcus said: That's a clear conclusion — it links directly to the objective we set at the start.",
      imageSlug: '/images/writing-marketing-reports-conclusion.png',
    },
    {
      word: 'PERFORMANCE',
      partOfSpeech: 'noun',
      definition: 'How well something did compared to the target or benchmark. You talk about performance using words like strong, weak, above target, below expectation, or in line with forecast. Always say performance against what.',
      example: "Marcus asked for a summary: How was overall performance? Riley replied: Strong on reach and engagement — both metrics were above target. But conversion performance was weak — we hit 60% of the conversion target. So it is a mixed picture overall.",
      imageSlug: '/images/writing-marketing-reports-performance.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS REPORT COVERS [PERIOD / TOPIC]',
      definition: 'The standard opening line of a report. It tells the reader immediately what the report is about and what time period it covers. Always write this in the first sentence of the executive summary.',
      example: "Riley drafted her opening: This report covers the performance of the Q3 email marketing campaign, running from July to September. Marcus said: Good — that is exactly how to open. The reader knows immediately what they are reading and what period it covers.",
      imageSlug: '/images/this-report-covers.png',
    },
    {
      phrase: 'THE DATA SHOWS THAT...',
      definition: 'A neutral, factual phrase for presenting findings. It signals that what follows is based on evidence, not opinion. Use it when you want to state a result clearly without adding your own interpretation.',
      example: "Riley wrote in her findings section: The data shows that email open rates peaked in week two and declined sharply in week three, coinciding with an increase in send frequency. Marcus said: That is well-written — you are stating a fact and noting a connection without jumping to conclusions.",
      imageSlug: '/images/the-data-shows-that.png',
    },
    {
      phrase: 'BASED ON THESE FINDINGS, WE RECOMMEND...',
      definition: 'The standard bridge phrase between your findings and your recommendations. It shows the reader that your recommendation is not just an opinion — it comes directly from the data. Always use it before your first recommendation.',
      example: "Riley concluded her report: Based on these findings, we recommend reducing send frequency in week three and testing two new subject line formats in the next campaign. Marcus said: That is the right structure — recommendation linked directly to findings. Clear and professional.",
      imageSlug: '/images/based-on-these-findings.png',
    },
    {
      phrase: 'COMPARED TO THE PREVIOUS [PERIOD]...',
      definition: 'A phrase for showing change over time by comparing two periods. It gives context to a number — a result is more meaningful when you know whether it improved or declined. Always say what you are comparing and by how much.',
      example: "Riley wrote: Compared to the previous quarter, open rates increased by 9% and click-through rates remained stable. Marcus said: Good comparison — always give the reader context. A number on its own tells me very little. A number with a comparison tells me whether things are moving in the right direction.",
      imageSlug: '/images/compared-to-the-previous.png',
    },
    {
      phrase: 'PERFORMANCE WAS [ABOVE / BELOW / IN LINE WITH] BENCHMARK',
      definition: 'The standard phrase for evaluating results against a target or industry standard. Use above benchmark for positive results, below benchmark for underperformance, and in line with benchmark when results met expectations.',
      example: "Riley summarised: Open rate performance was above benchmark at 24% against an industry average of 20%. Conversion performance was below benchmark — we hit 1.8% against a target of 3%. Marcus said: That is exactly the language I want to see in every performance report.",
      imageSlug: '/images/performance-was-above-below-benchmark.png',
    },
    {
      phrase: 'THE KEY TAKEAWAY FROM THIS REPORT IS...',
      definition: 'A phrase used to highlight the single most important point from the entire report. Use it in the executive summary or the conclusion. It helps busy readers understand the most important message in one sentence.',
      example: "Marcus asked: If I could only remember one thing from this report, what should it be? Riley replied: The key takeaway from this report is that our email open rates are strong and improving, but our conversion rate is the critical issue to fix before the next campaign.",
      imageSlug: '/images/the-key-takeaway.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I've read the first draft of your [[performance:how well something did compared to a target or benchmark]] report for the Q3 email campaign. Let's go through it section by section. Start with the [[executive summary:a short section at the start of a report that gives the most important points]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I know it's too long at the moment. I wrote four paragraphs, but I think it should be three sentences maximum. The key points are: the campaign ran for eight weeks, open rates exceeded the [[benchmark:the standard you compare your results against]], and conversion was below target.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Exactly right — three sentences is plenty. An executive summary is not a summary of everything. It is the most important message. Now, talk me through your [[findings:the facts and results you discovered from your data]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The data shows that open rates were strong throughout — 24% overall against a benchmark of 20%. Click-through rates held steady at around 3.5%. The problem was conversion — it dropped sharply in week three and never recovered.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. That is a clean set of [[findings:facts and results from data]]. Now, what [[metric:a number used to measure performance]]s did you track overall?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Four main ones: open rate, click-through rate, conversion rate, and cost per lead. I set all four targets before the campaign started so I could compare directly against them in the report.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Perfect. That is how it should work — set the metrics first, report against them at the end. What does the [[trend:a pattern in data showing how something changes over time]] look like for open rates across the full campaign?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Open rates improved week on week for the first five weeks — from 19% up to 27%. Then they dropped in weeks six, seven, and eight. So the trend was positive for most of the campaign but declined at the end. I think send frequency was too high in the final three weeks.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is a useful insight. What does your [[conclusion:the section where you summarise what the findings mean]] say about that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The conclusion says: the campaign performed above benchmark on reach and engagement, but below benchmark on conversion, primarily due to increased send frequency and a weak landing page in the final three weeks.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is a strong conclusion — it links back to the objective and explains the gap. Compared to the previous quarter, how did overall performance look?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Compared to the previous quarter, open rates were up 9% and click-through rates were flat. Conversion was down 0.5 percentage points — which sounds small but represents about 40 fewer leads at our current volume.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good — always translate percentages into real numbers where you can. It makes the impact clear. Now the most important part — what are your [[recommendation:a suggestion for what to do next, based on findings]]s?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Based on these findings, we recommend three things: one, reduce send frequency to a maximum of two emails per week in the final three weeks of any campaign. Two, redesign the landing page for the next campaign. Three, test two subject line formats before the full send.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Those are strong recommendations — specific, actionable, and directly linked to the data. That is the standard for every report in this team.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Understood. I'll also add the key takeaway to the executive summary — something like: the key takeaway from this report is that engagement was strong but conversion needs urgent attention before the next campaign.",
    },
  ],

  matchingExercise: [
    { word: 'executive summary', definition: 'a short section at the start of a report that gives the most important points' },
    { word: 'findings', definition: 'the facts and results you discovered from your data or research' },
    { word: 'recommendation', definition: 'a suggestion for what to do next, based on your findings' },
    { word: 'metric', definition: 'a number you use to measure performance' },
    { word: 'benchmark', definition: 'the standard you compare your results against' },
    { word: 'trend', definition: 'a pattern in data showing how something changes over time' },
    { word: 'conclusion', definition: 'the section where you summarise what your findings mean' },
    { word: 'performance', definition: 'how well something did compared to the target or benchmark' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'shows that open rates dropped in week three coinciding with higher send frequency.', answer: 'data' },
    { before: 'Our open rate was 24% — well above the industry', after: 'of 20%.', answer: 'benchmark' },
    { before: 'Based on these findings, we', after: 'reducing send frequency in the final three weeks.', answer: 'recommend' },
    { before: 'Compared to the', after: 'quarter, click-through rates improved by 9%.', answer: 'previous' },
    { before: 'The key', after: 'from this report is that conversion needs urgent attention.', answer: 'takeaway' },
    { before: 'I tracked four main', after: 's: open rate, click-through rate, conversion rate, and cost per lead.', answer: 'metric' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What was the main problem with the Q3 email campaign?',
      options: ['Open rates were below benchmark throughout the campaign', 'Conversion dropped sharply in week three and never recovered', 'The campaign ran for too many weeks'],
      correctIndex: 1,
    },
    {
      question: 'What is the purpose of an executive summary?',
      options: ['To give a detailed analysis of every metric in the report', 'To list all the recommendations in full', 'To give the most important points so the reader understands the main message quickly'],
      correctIndex: 2,
    },
    {
      question: 'What three recommendations did Riley make?',
      options: ['Increase send frequency, redesign the landing page, and change the campaign dates', 'Reduce send frequency, redesign the landing page, and test subject line formats', 'Change the target audience, reduce the budget, and stop the campaign'],
      correctIndex: 1,
    },
    {
      question: "What does Marcus say about translating percentages into real numbers?",
      options: ['It makes the report longer and harder to read', 'It makes the impact clear', 'It is only necessary in the executive summary'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Have you ever written a report at work or at school? What was it about? Who read it?',
      'When you read a long report, where do you look first? Do you read from the beginning or jump to specific sections?',
      'What makes a report easy to read? Think of one thing that makes reports hard to understand.',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The data _____ that open rates dropped sharply in week three.',
        options: ['show', 'shows', 'showing'],
        correctIndex: 1,
        explanation: "'The data shows' — in business English, 'data' is commonly treated as a singular noun, especially in professional writing and reports. 'The data shows', 'the data suggests', 'the data indicates' are all standard. Although technically 'data' is the plural of 'datum', treating it as singular is now standard in modern business writing. You will rarely hear 'the data show' in a marketing meeting.",
      },
      {
        sentence: 'Our conversion rate was below _____ at 1.8% against a target of 3%.',
        options: ['benchmark', 'the benchmark', 'a benchmark'],
        correctIndex: 1,
        explanation: "'Below the benchmark' — when you refer to a specific benchmark you have already defined (for example, a target you set before the campaign), use 'the'. 'The benchmark' refers to that specific standard. 'A benchmark' would suggest it is one of many unspecified standards. 'Below benchmark' without an article is also common and acceptable in informal reports, but 'below the benchmark' is more precise and professional.",
      },
      {
        sentence: 'Based on these findings, we _____ reducing send frequency in the final weeks.',
        options: ['recommend', 'are recommending', 'recommended'],
        correctIndex: 0,
        explanation: "'We recommend' — recommendations in reports are written in the simple present tense. This is because recommendations describe a standing position or advice, not an action happening right now or in the past. 'We recommend', 'we suggest', 'we propose' — all simple present. 'We are recommending' (present continuous) suggests a temporary or evolving situation, which is not the tone you want for a formal recommendation. 'We recommended' (past) would mean you already made the recommendation, which is not the context.",
      },
      {
        sentence: 'Compared _____ the previous quarter, open rates increased by 9%.',
        options: ['with', 'to', 'against'],
        correctIndex: 1,
        explanation: "'Compared to' — this is the fixed preposition in this phrase. 'Compared to the previous quarter', 'compared to last year', 'compared to the benchmark'. 'Compared with' is also grammatically correct and is sometimes preferred in formal academic writing, but 'compared to' is far more common in business reports and marketing contexts. 'Compared against' is not standard — you would say 'measured against' or 'benchmarked against', but not 'compared against'.",
      },
      {
        sentence: 'The _____ from this report is that conversion needs urgent attention.',
        options: ['key takeaway', 'main conclusion', 'top finding'],
        correctIndex: 0,
        explanation: "'Key takeaway' is the standard business phrase for the single most important message from a document, meeting, or presentation. It is widely used in English-speaking workplaces, especially in marketing and business contexts. 'Main conclusion' is possible but sounds more academic. 'Top finding' is not a standard phrase — findings are facts, and a 'top finding' would be just another fact, not the overall message. 'Key takeaway' signals that you are giving the reader the one thing they should remember.",
      },
      {
        sentence: 'A metric is only useful if you set it _____ the campaign starts.',
        options: ['before', 'after', 'when'],
        correctIndex: 0,
        explanation: "'Before the campaign starts' — metrics should be defined before a campaign begins, so you know what you are measuring and can compare actual results against the original target. Setting metrics after a campaign is a common mistake — it leads to 'cherry picking', where you choose metrics that make the results look good. In professional reports and in marketing team conversations, 'setting metrics before the campaign' is a standard expectation.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what Marcus says. Choose the best response from the three options.',
      items: [
        {
          customerLine: "Your executive summary is four paragraphs long. That is too long. What is the single most important thing I need to know from this report?",
          options: [
            "The campaign ran from July to September and covered eight weeks of activity across three audience segments with a total budget of £12,000.",
            "The key takeaway is that open rates exceeded benchmark but conversion fell short, and we have three clear recommendations to fix it for next time.",
            "There are a lot of things to cover — the open rates, the click-through rates, the conversion data, and the cost per lead results all need to be discussed.",
          ],
          correctIndex: 1,
          explanation: "Option B is the correct answer. The executive summary should give the single most important message in a few sentences. Option B does exactly that — it states the result (open rates strong, conversion short) and signals that recommendations exist. Option A gives background information, not a key message. Option C describes what the report contains, not what it says — a busy manager does not need a list of sections, they need the conclusion.",
        },
        {
          customerLine: "These are findings, but I need recommendations. What do you actually think we should do differently next time?",
          options: [
            "Based on these findings, we recommend reducing send frequency to two emails per week in the final phase, redesigning the landing page, and testing two subject line formats before the next full send.",
            "The data shows that send frequency was too high and the landing page did not convert well in week three.",
            "I think there were some issues with the campaign that are worth looking at more carefully before we decide anything.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct. Recommendations must be specific and actionable — they say what to do, not what happened. Option A gives three clear, concrete recommendations. Option B states findings, not recommendations — it describes what happened without saying what to do. Option C is vague and non-committal — a manager who asks for recommendations needs to hear a decision, not a suggestion to think about it more.",
        },
        {
          customerLine: "How does our conversion rate compare to last quarter? Is this a new problem or has it been building?",
          options: [
            "Conversion was 1.8% this quarter. That is quite low for an email campaign at this volume.",
            "Compared to the previous quarter, conversion dropped by 0.5 percentage points — which represents around 40 fewer leads. The trend has been flat for two quarters now, so this is not a new problem.",
            "Conversion performance was below benchmark this quarter and below what we hoped for at the start of the campaign.",
          ],
          correctIndex: 1,
          explanation: "Option B is the strongest answer. It uses the comparison phrase correctly ('compared to the previous quarter'), translates the percentage into a real number (40 fewer leads — as Marcus advised), and adds the trend context (flat for two quarters). Option A gives the number but no comparison or context — a number alone does not tell you if the situation is getting better or worse. Option C uses the benchmark phrase correctly but gives no comparison to the previous period, which is what the question asked for.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the conversation. Three lines have a mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Let's go through your report. Start with the executive summary." },
        { speaker: 'Riley', text: "This report is covering the Q3 email campaign from July to September." },
        { speaker: 'Marcus', text: "Good. What do your findings say about open rates?" },
        { speaker: 'Riley', text: "The data are showing that open rates were 24% — above the industry benchmark of 20%." },
        { speaker: 'Marcus', text: "And what about the trend across the eight weeks?" },
        { speaker: 'Riley', text: "Compared to previous quarter, open rates improved by 9% in the first five weeks before declining." },
        { speaker: 'Marcus', text: "Good. And your recommendation?" },
        { speaker: 'Riley', text: "Based on these findings, we are recommending to reduce send frequency and redesign the landing page." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'This report is covering',
          correction: 'This report covers',
          explanation: "Report openings use the simple present tense: 'This report covers', 'This report examines', 'This report analyses'. The present continuous ('is covering') suggests the report is currently in the process of covering something — which does not make sense for a written document. In formal writing, the simple present describes what the document does or contains: 'This chapter explains', 'This section outlines', 'This report covers'.",
        },
        {
          lineIndex: 3,
          incorrectText: 'The data are showing',
          correction: 'The data shows',
          explanation: "Two corrections: (1) In business English, 'data' is treated as singular — 'the data shows', not 'the data are'. (2) Use the simple present 'shows', not the present continuous 'is showing' or 'are showing'. When presenting findings from a report, use simple present: 'the data shows', 'the results indicate', 'the figures suggest'. Present continuous implies something happening right now, which is not the right tone for a written report.",
        },
        {
          lineIndex: 5,
          incorrectText: 'Compared to previous quarter',
          correction: 'Compared to the previous quarter',
          explanation: "'The previous quarter' needs the definite article 'the'. When you refer to a specific, defined period — the quarter that came before this one — use 'the'. This is a very common error in business English. Compare: 'compared to a previous quarter' (any past quarter, unspecified) vs 'compared to the previous quarter' (the specific one that came just before). In reports, you are always comparing to a specific period, so 'the' is required.",
        },
        {
          lineIndex: 7,
          incorrectText: 'we are recommending to reduce',
          correction: 'we recommend reducing',
          explanation: "Two corrections: (1) Recommendations in reports use the simple present, not the present continuous. 'We recommend', not 'we are recommending'. (2) 'Recommend' is followed by a gerund (-ing form), not an infinitive. 'We recommend reducing', not 'we recommend to reduce'. This is a fixed grammar rule: recommend + gerund. Compare: 'I suggest trying', 'I recommend testing', 'I propose reducing'. Never 'recommend to + verb'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence from their report. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Give me your executive summary in three sentences. What happened, what was the problem, and what are you going to do about it?",
          salespersonStart: "This report covers the Q3 email campaign. Open rates exceeded benchmark at 24%, but conversion fell short at 1.8% against a target of 3%.",
          suggestedCompletion: "Based on these findings, we recommend reducing send frequency, redesigning the landing page, and testing new subject line formats before the next campaign. The key takeaway is that engagement was strong but conversion is the priority for next quarter.",
        },
        {
          customerLine: "How did the campaign perform overall — was it a success?",
          salespersonStart: "Performance was mixed. Open rate and click-through rate were both above benchmark —",
          suggestedCompletion: "open rates reached 24% against an industry benchmark of 20%, and click-through was steady at 3.5%. However, conversion performance was below benchmark at 1.8% against our target of 3%. Compared to the previous quarter, open rates improved but conversion declined, so there is clear progress on engagement but urgent work needed on the bottom of the funnel.",
        },
        {
          customerLine: "What is the trend for conversion over the last three months? Should I be worried?",
          salespersonStart: "The trend for conversion has been flat for three months now —",
          suggestedCompletion: "we hit 2.3% in Q1, 2.3% in Q2, and 1.8% in Q3. So it has not just been flat — it has started to decline. The data shows the drop coincides with an increase in send frequency and a landing page that was not updated between campaigns. Based on these findings, we recommend addressing both before the next campaign launches.",
        },
      ],
    },
  },
};
