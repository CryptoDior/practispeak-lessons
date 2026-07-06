import { Lesson } from '@/types/lesson';

export const complexDataStorytelling: Lesson = {
  slug: 'complex-data-storytelling',
  title: 'Complex Data Storytelling',
  subtitle: "How to turn data into a story that drives decisions — not just a chart that fills a slide",
  level: 'C1-C2',
  description: "Data does not speak for itself. The best marketers and strategists know how to take a complex set of numbers and build a story around them — one that makes the insight clear, the implication obvious, and the decision easy. This lesson teaches the language and frameworks behind data storytelling at a senior level: how to structure a narrative around data, how to make your 'so what' land, and how to present evidence in a way that moves people to act.",
  heroImage: '/images/complex-data-storytelling-hero.png',

  vocabulary: [
    {
      word: 'So what',
      partOfSpeech: 'phrase',
      definition: "The question that turns a data point into an insight. 'So what?' asks: why does this number matter? What does it mean for the business? Every data slide needs a clear answer to this question.",
      example: "Riley looked at Marcus's slide: Conversion rate is up 3%. Riley said: So what? What does that mean in revenue terms? What caused it? What should we do next? If your audience is asking these questions, the story is not done yet.",
      imageSlug: '/images/so-what.png',
    },
    {
      word: 'Insight pyramid',
      partOfSpeech: 'noun',
      definition: "A storytelling framework that starts with the recommendation at the top, supported by key insights, each supported by data. It is designed for busy audiences who want the answer first, not the analysis.",
      example: "Riley said: Busy executives do not want to watch you build to the conclusion. Use the insight pyramid — give them the recommendation first, then the three insights that support it, then the data underneath. Answer first, evidence second.",
      imageSlug: '/images/insight-pyramid.png',
    },
    {
      word: 'Data narrative',
      partOfSpeech: 'noun',
      definition: "The story built around data — connecting numbers, insights, and implications into a logical sequence that leads to a clear conclusion. A data narrative is not a data dump — it is a structured argument.",
      example: "Marcus said: I have 40 slides of data. Riley said: That is not a data narrative — that is a report. A narrative has a beginning, a middle, and an end. It has tension and resolution. What is the one thing you want the audience to believe when you finish?",
      imageSlug: '/images/data-narrative.png',
    },
    {
      word: 'Visualisation',
      partOfSpeech: 'noun',
      definition: "The way data is displayed — as a chart, graph, table, or diagram. Good visualisation makes a pattern obvious in seconds. Bad visualisation makes people stare at a slide and still not understand.",
      example: "Riley said: A bar chart comparing five numbers is clear. A table with 40 rows is not — that is a data dump, not a visualisation. The test of a good visualisation is whether someone can understand the point in under five seconds without you explaining it.",
      imageSlug: '/images/visualisation.png',
    },
    {
      word: 'Inference',
      partOfSpeech: 'noun',
      definition: "A conclusion drawn from data — going beyond what the numbers say directly to explain what they mean or predict what comes next. In data storytelling, inference is how you turn observation into insight.",
      example: "Riley said: The data shows churn went up in Q3 and NPS dropped in Q2. The inference is that the satisfaction problem in Q2 caused the churn in Q3 — they are connected. That is the insight. Now we know where to focus.",
      imageSlug: '/images/complex-data-storytelling-inference.png',
    },
    {
      word: 'Headline metric',
      partOfSpeech: 'noun',
      definition: "The single most important number that summarises the state of a business or campaign. A good headline metric is simple, meaningful, and immediately understood by a non-expert audience.",
      example: "Riley said: Your board does not want 20 metrics. They want one headline metric — the number that tells them if the business is healthy or not. For us, that is monthly active users. Everything else is context.",
      imageSlug: '/images/headline-metric.png',
    },
    {
      word: 'Correlation vs causation',
      partOfSpeech: 'noun',
      definition: "The difference between two things happening at the same time (correlation) and one thing causing the other (causation). Confusing them leads to wrong conclusions and bad decisions.",
      example: "Marcus said: Ice cream sales and drowning rates both go up in summer — does ice cream cause drowning? Riley said: No — that is correlation, not causation. Both go up because of hot weather. When you present data, always ask: are we observing a pattern or explaining a cause?",
      imageSlug: '/images/correlation-vs-causation.png',
    },
    {
      word: 'Benchmarking',
      partOfSpeech: 'noun',
      definition: "Comparing your results to an external standard — such as an industry average, a competitor, or a previous period. Without benchmarking, a number has no context and no meaning.",
      example: "Riley said: Our open rate is 22%. Is that good? Without benchmarking, I cannot tell you. Against an industry average of 18%, it is great. Against our top competitor who is at 35%, it is a problem. Context changes everything.",
      imageSlug: '/images/benchmarking.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "The story the data is telling us is...",
      definition: "A phrase that frames data as a narrative rather than a collection of numbers. It signals that you have done the analytical work and are now presenting a clear conclusion, not a data dump.",
      example: "Riley opened her presentation: I am not going to walk you through every number. The story the data is telling us is this: we are winning on acquisition but losing on retention — and retention is where the revenue lives. That is the problem we need to solve.",
      imageSlug: '/images/the-story-the-data-is-telling-us-is.png',
    },
    {
      phrase: "What this means for the business is...",
      definition: "A connecting phrase that turns a data observation into a business implication. It is the 'so what' made explicit — bridging the gap between the number and the decision.",
      example: "Riley said: NPS dropped 8 points in Q2. What this means for the business is that churn will increase in Q3 unless we act now. That is the implication. The data is the evidence. The action is what we decide today.",
      imageSlug: '/images/what-this-means-for-the-business-is.png',
    },
    {
      phrase: "Let me give you the headline first",
      definition: "A signal that you are structuring your presentation using the insight pyramid — answer first, evidence second. It shows you understand that your audience wants the conclusion before the analysis.",
      example: "Riley said: Let me give you the headline first — our customer acquisition cost has increased by 40% and our payback period is now 18 months. That is the problem. Now let me show you the three reasons that explains why and what we recommend.",
      imageSlug: '/images/let-me-give-you-the-headline-first.png',
    },
    {
      phrase: "The inference we draw from this is...",
      definition: "A phrase that signals you are moving from data observation to analytical conclusion. It is what separates a data presenter from a strategic thinker.",
      example: "Riley said: Engagement dropped 30% in the week we changed the homepage. The inference we draw from this is that the new design is hurting discovery. That is a hypothesis, not a certainty — but it is where we look first.",
      imageSlug: '/images/the-inference-we-draw-from-this-is.png',
    },
    {
      phrase: "We need to be careful about correlation versus causation here",
      definition: "A phrase that signals analytical discipline — warning the audience not to assume that because two things happened at the same time, one caused the other.",
      example: "Marcus said: Sales went up 20% in the same month we launched the campaign. Riley said: We need to be careful about correlation versus causation here. Did the campaign drive the sales, or was there a seasonal factor? We need the controlled data before we claim credit.",
      imageSlug: '/images/we-need-to-be-careful-about-correlation-versus-causation-here.png',
    },
    {
      phrase: "To put that in context...",
      definition: "A phrase used to add benchmarking or comparative data that gives a number meaning. Without context, a number is just a number — this phrase is how you make it a story.",
      example: "Riley said: Our churn rate is 5% per month. To put that in context — the industry average is 2%. We are losing customers at more than twice the rate of our competitors. That context is what turns a number into an urgent problem.",
      imageSlug: '/images/to-put-that-in-context.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I have a 45-minute slot in front of the board next week to present the marketing performance data. I have 40 slides. Where do I start?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Delete 35 of them. A board does not want 40 slides of data — they want a [[data narrative:the story built around data that connects numbers, insights, and implications into a clear conclusion]]. What is the one thing you want them to believe when you finish?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I want them to approve more budget for retention activities. We are losing customers and the data shows it clearly.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good — that is your [[headline metric:the single most important number that summarises the state of a business or campaign]]. Lead with it. Let me give you the headline first: our monthly churn is 5% — more than double the industry average. Everything else supports that.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Should I use the [[insight pyramid:a storytelling framework that starts with the recommendation at the top supported by key insights and then data]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes. Recommendation first. Then the three insights that support it. Then the data underneath each insight. Board members are busy — they want the answer before the evidence.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "One of my insights is that NPS dropped in Q2 and churn went up in Q3. I think the satisfaction problem caused the churn.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good [[inference:a conclusion drawn from data — going beyond what numbers say to explain what they mean]]. But be careful — we need to be careful about [[correlation vs causation:the difference between two things happening at the same time and one thing causing the other]] here. Was there another factor in Q3? Acknowledge the hypothesis, but do not overclaim.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good point. I also want to show the churn rate in context against competitors.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is [[benchmarking:comparing your results to an external standard like an industry average or competitor]]. Use the phrase: 'to put that in context — the industry average is 2%, we are at 5%'. Context is what makes a number urgent instead of just interesting.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And for my [[visualisation:the way data is displayed as a chart, graph, or diagram]] — I have been using big tables. Is that okay?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "No. Tables are for reading, not presenting. Use one number or one chart per slide. The story the data is telling us should be visible in under five seconds. If someone needs to read a table to understand it, the slide has failed.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Okay — one chart per slide, headline first, insight pyramid structure. What else?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "End with the [[so what:the question that turns a data point into an insight — why does this number matter and what should we do]]. What this means for the business is: we need an extra £200k in retention investment now, or we will spend £800k replacing those customers next year. That is your close.",
    }
  ],

  matchingExercise: [
    { word: 'so what', definition: 'the question that turns a data point into an insight — why does this number matter?' },
    { word: 'insight pyramid', definition: 'a framework that leads with the recommendation, then insights, then data' },
    { word: 'data narrative', definition: 'the story built around data connecting numbers, insights, and implications into a clear conclusion' },
    { word: 'visualisation', definition: 'the way data is displayed as a chart, graph, or diagram to make patterns obvious' },
    { word: 'inference', definition: 'a conclusion drawn from data — going beyond what numbers say to explain what they mean' },
    { word: 'headline metric', definition: 'the single most important number that summarises the state of a business or campaign' },
    { word: 'correlation vs causation', definition: 'the difference between two things happening at the same time and one thing causing the other' },
    { word: 'benchmarking', definition: 'comparing your results to an external standard like an industry average or competitor' }
  ],

  fillBlankExercise: [
    { before: "Recommendation first, evidence second — that is the ", after: " pyramid approach.", answer: "insight" },
    { before: "To put that in ", after: " — the industry average is 2% and we are at 5%, more than double.", answer: "context" },
    { before: "The story the ", after: " is telling us is that we are winning on acquisition and losing on retention.", answer: "data" },
    { before: "Be careful about correlation versus ", after: " — two things happening at the same time does not mean one caused the other.", answer: "causation" },
    { before: "What this means for the ", after: " is that we need to act now or the churn problem will cost us three times more to fix later.", answer: "business" },
    { before: "The ", after: " we draw from this is that the NPS drop in Q2 caused the churn spike in Q3.", answer: "inference" }
  ],

  multipleChoiceExercise: [
    {
      question: "What does Riley say is the main problem with 40 slides of data?",
      options: ["It is too much to read in 45 minutes", "It is a data dump, not a data narrative — it has no story, tension, or resolution", "Boards prefer verbal presentations to slides"],
      correctIndex: 1
    },
    {
      question: "What does Riley recommend as the headline metric for Marcus's presentation?",
      options: ["Monthly active users", "Monthly churn rate compared to the industry average", "Customer acquisition cost and payback period"],
      correctIndex: 1
    },
    {
      question: "Why does Riley say to be careful about correlation versus causation?",
      options: ["Because data can never prove what causes what", "Because NPS and churn happening in consecutive quarters might be connected — but there could be another factor", "Because boards do not understand statistical terms"],
      correctIndex: 1
    },
    {
      question: "What does Riley say is the test of a good visualisation?",
      options: ["It uses multiple colours to highlight different categories", "Someone can understand the point in under five seconds without you explaining it", "It includes a table and a chart on the same slide"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Think of the last time you presented data to a senior audience. Did they engage with the analysis — or did they skip to 'what does this mean for us?'",
      "Have you ever seen someone confuse correlation with causation in a business meeting — concluding that one thing caused another just because they happened at the same time?",
      "When you look at a chart or graph in a presentation, how long does it take you to understand it? What makes some visualisations immediately clear and others confusing?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "Before I walk through the numbers, let me give you the headline _____.",
        options: ["first", "insight", "number"],
        correctIndex: 0,
        explanation: "'Let me give you the headline first' is the fixed phrase that signals an insight-pyramid structure — you are leading with the conclusion before the supporting evidence. 'Let me give you the headline insight' is possible but not the standard phrase. 'Let me give you the headline number' is too narrow — the headline may be a recommendation, not just a number."
      },
      {
        sentence: "Ice cream sales and drowning both go up in summer — that is _____, not causation.",
        options: ["coincidence", "correlation", "connection"],
        correctIndex: 1,
        explanation: "'Correlation' is the precise statistical term for two things that move together without one causing the other. 'Coincidence' is a general word for events that happen at the same time by chance — it is not the technical term. 'Connection' is vague and does not specify the nature of the relationship. Always say 'correlation' in an analytical context."
      },
      {
        sentence: "Our churn rate is 5%. To put that in _____ — the industry average is 2%.",
        options: ["perspective", "context", "comparison"],
        correctIndex: 1,
        explanation: "'To put that in context' is the fixed phrase for introducing benchmarking data that gives a number meaning. 'In perspective' and 'in comparison' are both possible but 'in context' is the most natural and widely used in data storytelling presentations. It signals that what follows is the reference point that makes the number significant."
      },
      {
        sentence: "The _____ we draw from this data is that the NPS drop in Q2 caused the churn spike in Q3.",
        options: ["conclusion", "inference", "assumption"],
        correctIndex: 1,
        explanation: "'Inference' is the precise analytical term for a conclusion drawn from data — going beyond what is directly observed to explain what it means or predict what comes next. 'Conclusion' is similar but less specific about the process of reasoning from evidence. 'Assumption' implies something believed without proof — using it here would undermine the analytical credibility of the argument."
      },
      {
        sentence: "The board wants one _____ metric — the number that tells them immediately if the business is healthy.",
        options: ["headline", "summary", "key"],
        correctIndex: 0,
        explanation: "'Headline metric' is the established term for the single most important number that summarises business performance — used in board reports, investor updates, and executive dashboards. 'Summary metric' and 'key metric' are used informally but are not as specific. 'Headline' signals that it is the first and most prominent — the one everyone should know without needing to read further."
      },
      {
        sentence: "A table with 40 rows is not a visualisation — it is a data _____.",
        options: ["dump", "report", "export"],
        correctIndex: 0,
        explanation: "'Data dump' is the specific critical phrase for presenting raw or unstructured data without analysis, narrative, or design — it overwhelms rather than informs. 'Data report' is a more neutral term and does not carry the critical implication. 'Data export' refers to extracting data from a system — it is not used to describe a bad presentation."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the senior stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "You've shown me a lot of numbers. What is the point you are trying to make?",
          options: [
            "I wanted to give you the full picture so you could draw your own conclusions.",
            "You are right — let me give you the headline. The story the data is telling us is that our retention is broken and it is costing us more to replace lost customers than it would cost to keep them. That is the decision we need to make today.",
            "I thought it was important to show all the evidence before reaching a conclusion."
          ],
          correctIndex: 1,
          explanation: "Option B corrects course immediately — it gives the headline and frames it as a business decision. This is what data storytelling looks like under pressure. Option A suggests you deliberately withheld the conclusion — which in a board setting reads as either evasiveness or poor preparation. Option C repeats the same mistake — evidence first, conclusion later is the wrong structure for a senior audience."
        },
        {
          customerLine: "Sales went up 20% the same month we launched the new campaign. Can we say the campaign caused it?",
          options: [
            "Yes — the timing is very clear. The campaign drove the sales.",
            "We need to be careful about correlation versus causation here. The timing is promising, but we need to check for seasonal factors, pricing changes, and any other variables before we claim credit. Let me run the controlled analysis.",
            "Probably — but we should wait until we see the next month's numbers before we say anything."
          ],
          correctIndex: 1,
          explanation: "Option B applies correct analytical discipline — it acknowledges the correlation while flagging that causation requires evidence. This is how credible analysts think. Option A overclaims — assuming causation from timing is one of the most common analytical errors and will undermine credibility if challenged. Option C delays unnecessarily — the right response is to acknowledge the question and commit to a method for answering it."
        },
        {
          customerLine: "This slide has too many charts. Which number should I focus on?",
          options: [
            "They are all important — together they tell the complete story.",
            "You should not have to choose — that is my fault. One chart, one insight per slide. Let me walk you through the headline metric first and then we can go deeper on the supporting data.",
            "Focus on the bottom right — that is where the most important trend is."
          ],
          correctIndex: 1,
          explanation: "Option B takes responsibility for the confusing design and immediately corrects it using the right principle — one chart, one insight per slide. This demonstrates analytical maturity and respect for the audience's time. Option A defends the busy slide by claiming all data is equally important — which is the opposite of the storytelling principle. Option C points to one chart but does not solve the structural problem."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "I'm going to present the data in a logical order — starting with the background, building to the insights, and ending with the recommendation." },
        { speaker: "Riley", text: "For a board audience, that is the wrong structure. Use the insight pyramid — start with the recommendation, then show the evidence." },
        { speaker: "Marcus", text: "Understood. And I'll benchmark our results — to put that in perspective, our churn is 5% versus an industry average of 2%." },
        { speaker: "Riley", text: "The fixed phrase is 'to put that in context', not 'in perspective'. Context is the standard for benchmarking language." },
        { speaker: "Marcus", text: "Noted. And I'll be honest about the limits — sales and campaign launch happened at the same time, so I'll say there is causation between the two." },
        { speaker: "Riley", text: "No — you can say there is correlation, not causation. We need controlled data before we claim one caused the other." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "starting with the background, building to the insights, and ending with the recommendation",
          correction: "start with the recommendation, then the insights, then the supporting data",
          explanation: "The insight pyramid structure — designed for senior, time-pressed audiences — leads with the recommendation at the top, then the insights, then the data underneath. The traditional structure (background → analysis → conclusion) is too slow for a board context. Executives want the answer first, evidence second."
        },
        {
          lineIndex: 2,
          incorrectText: "to put that in perspective",
          correction: "to put that in context",
          explanation: "'To put that in context' is the fixed phrase used in data storytelling when introducing benchmarking data. 'In perspective' is used informally but is not the standard phrase in analytical presentations. 'Context' specifically signals that what follows is the external reference point that gives the number meaning."
        },
        {
          lineIndex: 4,
          incorrectText: "there is causation between the two",
          correction: "there is correlation between the two",
          explanation: "Correlation means two things happen at the same time. Causation means one thing caused the other. Without controlled data, you can only claim correlation — not causation. Saying 'there is causation' without evidence is an analytical error that will immediately undermine your credibility with a rigorous audience."
        }
      ]
    },
    finishTheLine: {
      instructions: "The data storyteller starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "I have all this data but I don't know how to make it into a story for the board.",
          salespersonStart: "Start with the one thing you want them to believe and act on when you finish — that is the headline. Then build the insight pyramid: recommendation at the top, three supporting insights in the middle, and the data underneath. The story the data is telling us is...",
          suggestedCompletion: "that we are losing customers faster than we are gaining them, and the cost of that is accelerating. That is the headline. Now let me show you why — and what we need to do about it."
        },
        {
          customerLine: "Our engagement went up the same month we changed the pricing. Can we say the pricing drove it?",
          salespersonStart: "We need to be careful about correlation versus causation here. Both happened in the same month, but that does not mean one caused the other. Before we make that claim, we need to check for other variables — seasonal trends, a product update, a competitor move. The inference we draw from this is...",
          suggestedCompletion: "a hypothesis, not a certainty. Let's run a controlled analysis first. If pricing was the cause, we will see it in the cohort data from users who saw the new price versus those who did not."
        },
        {
          customerLine: "The slide is confusing. There are too many numbers on it.",
          salespersonStart: "You are right — that is my fault. One number, one chart, one insight per slide. Let me give you the headline first:",
          suggestedCompletion: "our customer acquisition cost has increased 40% in six months. To put that in context — we are now the most expensive acquirer in our competitive set. That is the problem. Everything else on those slides is the evidence for why."
        }
      ]
    }
  }
};
