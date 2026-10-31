import { Lesson } from '@/types/lesson';

export const advancedDataAnalytics: Lesson = {
  slug: 'advanced-data-analytics',
  title: 'Advanced Data Analytics',
  subtitle: 'How to interpret complex marketing data — and present data-driven recommendations that stakeholders actually believe',
  level: 'B1-B2',
  description: 'Data without language is just numbers on a screen. The ability to interpret data and communicate what it means — in a meeting, in a report, in a recommendation to a sceptical stakeholder — is one of the most valuable skills in modern marketing. This lesson teaches you the vocabulary of advanced analytics: from regression and LTV to predictive models and funnel analysis. More importantly, it teaches you how to talk about data with confidence, clarity, and the right level of caution.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-hero.png',

  vocabulary: [
    {
      word: 'REGRESSION',
      partOfSpeech: 'noun',
      definition: 'A method that shows how one thing affects another using numbers.',
      example: 'The regression shows that email spend has a strong effect on sales.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-regression.png',
    },
    {
      word: 'SEGMENTATION MODEL',
      partOfSpeech: 'noun',
      definition: 'A way of sorting customers into groups using data about them.',
      example: 'Our segmentation model found four different types of customers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-segmentation-model.png',
    },
    {
      word: 'PREDICTIVE',
      partOfSpeech: 'adjective',
      definition: 'Using past information to say what will probably happen in the future.',
      example: 'We built a predictive model to forecast next quarter\'s sales.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-predictive.png',
    },
    {
      word: 'FUNNEL ANALYSIS',
      partOfSpeech: 'noun',
      definition: 'A check of where people leave on the way to buying.',
      example: 'The funnel analysis shows most people leave after the demo.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-funnel-analysis.png',
    },
    {
      word: 'LTV',
      partOfSpeech: 'noun',
      definition: 'The total money a customer brings to a company over time.',
      example: 'Customers from referrals have a much higher LTV than those from ads.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-ltv.png',
    },
    {
      word: 'COHORT',
      partOfSpeech: 'noun',
      definition: 'A group of customers who joined at the same time.',
      example: 'The January cohort stayed with us longer than the March cohort.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-cohort.png',
    },
    {
      word: 'VARIANCE',
      partOfSpeech: 'noun',
      definition: 'The difference between planned numbers and the real numbers.',
      example: 'There is a big variance between our forecast and actual sales.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-variance.png',
    },
    {
      word: 'ATTRIBUTION',
      partOfSpeech: 'noun',
      definition: 'Deciding which ads or contacts should get credit for a sale.',
      example: 'Our attribution report gives most of the credit to paid search.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-attribution.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE DATA POINTS TO...',
      definition: 'A phrase used to show what the numbers suggest.',
      example: 'The data points to a drop in engagement after the third email.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-the-data-points-to.png',
      inAction: "The data points to a significant drop-off between the demo request and the first sales call — that's where we're losing the most qualified leads.",
      register: "Neutral — used in data review meetings and analytical presentations. Slightly more definitive than 'suggests'; use when the data is clear and consistent across multiple sources.",
      inContext: "Marcus had prepared the quarterly analysis with one clear finding. The data points to a content problem at the mid-funnel stage, he said. Prospects are engaging with the top-of-funnel content but then going quiet. We're not giving them a strong enough reason to take the next step.",
      visualExamples: [
        { brand: 'Scope', context: 'Analytics SaaS — weekly data review', imageSlug: '/images/visual-examples/ada-p1-scope.png', caption: 'The data points to a drop in activation on day 3 — users who do not complete the setup wizard by then have a 70% chance of churning before the end of the trial.', aspectRatio: '16/9' },
        { brand: 'Orbit', context: 'DTC furniture brand — post-launch review', imageSlug: '/images/visual-examples/ada-p1-orbit.png', caption: 'The data points to a strong ROAS on Pinterest that we have been underinvesting in — it is our second-highest converting channel but gets 8% of our paid budget.', aspectRatio: '1.91/1' },
        { brand: 'Pulse', context: 'Health-tech SaaS — data presentation', imageSlug: '/images/visual-examples/ada-p1-pulse.png', caption: 'The data points to a correlation between onboarding call completion and 12-month retention — customers who skip the call churn at 3x the rate.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: 'IF WE LOOK AT THE FUNNEL, WE CAN SEE...',
      definition: 'A phrase used to show people one part of the sales process.',
      example: 'If we look at the funnel, we can see a big drop at the demo.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-if-we-look-at-the-funnel-we-can-see.png',
      inAction: 'If we look at the funnel, we can see that 60% of the drop-off happens between the first email open and the landing page visit.',
      register: 'Neutral — standard analytical phrase used in data review meetings and marketing performance reports. Invites the audience to examine the evidence together rather than just accepting a conclusion.',
      inContext: "Dana shared her screen and opened the funnel dashboard. If we look at the funnel, we can see something interesting happening at the demo stage, she said. The top of the funnel is healthy — traffic, clicks, leads. But there's a 70% drop between demo attendance and follow-up engagement. That's not a traffic problem; it's a nurturing problem.",
      visualExamples: [
        { brand: 'Flowstate', context: 'B2B SaaS — funnel review slide', imageSlug: '/images/visual-examples/ada-p2-flowstate.png', caption: 'If we look at the funnel, we can see the biggest drop is at the pricing page — 68% of users who reach it leave without converting. The page is doing something wrong.', aspectRatio: '16/9' },
        { brand: 'Reef', context: 'E-commerce sports brand — analytics review', imageSlug: '/images/visual-examples/ada-p2-reef.png', caption: 'If we look at the funnel, we can see mobile users abandon at checkout at 2x the rate of desktop — the mobile payment flow needs to be rebuilt.', aspectRatio: '1.91/1' },
        { brand: 'Atlas Media', context: 'Media platform — board presentation', imageSlug: '/images/visual-examples/ada-p2-atlas.png', caption: 'If we look at the funnel, we can see free trial to paid conversion is 9% — industry average is 22%. We are losing people somewhere in week two.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: 'THE MODEL PREDICTS THAT...',
      definition: 'A phrase used to share what the forecast says will happen.',
      example: 'The model predicts that sales will grow by ten percent next quarter.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-the-model-predicts-that.png',
      inAction: 'The model predicts that leads scoring above 75 will convert at around 60% — which changes how the sales team should prioritize their time.',
      register: "Formal — used in presentations of predictive models and analytical findings. 'Predicts' implies statistical confidence, so only use it when the model has been properly trained and validated.",
      inContext: 'Riley had trained the model on two years of closed-won data before presenting the findings. The model predicts that our Q4 pipeline will deliver £1.2M in closed revenue — but only if the top 40 leads are prioritized within the first week of the quarter, she told the sales director. Every week of delay reduces the conversion probability by approximately 8%.',
      visualExamples: [
        { brand: 'Arca', context: 'Predictive analytics startup — client report', imageSlug: '/images/visual-examples/ada-p3-arca.png', caption: 'The model predicts that Q4 revenue will be 18% below plan if we do not close the top three pipeline deals by end of October.', aspectRatio: '16/9' },
        { brand: 'Crest', context: 'DTC coffee brand — demand forecasting', imageSlug: '/images/visual-examples/ada-p3-crest.png', caption: 'The model predicts that demand for the seasonal blend will outstrip supply by 40% — we need to increase the production run or manage expectations in the pre-launch campaign.', aspectRatio: '1.91/1' },
        { brand: 'Lens', context: 'Market intelligence SaaS — investor update', imageSlug: '/images/visual-examples/ada-p3-lens.png', caption: 'The model predicts that churn will decrease by 12 points if we implement in-app guidance at the moment users hit a usage plateau.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: 'WE NEED TO ISOLATE THE VARIABLE',
      definition: 'We must test one factor alone to find its real effect.',
      example: 'We need to isolate the variable before we change the whole campaign.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-we-need-to-isolate-the-variable.png',
      inAction: 'Before we credit the email sequence with the conversion uplift, we need to isolate the variable — was it the subject line, the send time, or the offer itself?',
      register: 'Neutral / Technical — used in data analysis discussions, A/B test reviews, and attribution meetings. Signals analytical rigour and caution about drawing premature conclusions.',
      inContext: "The team was excited about the improvement in conversion rate, but Marcus wanted to be careful. We need to isolate the variable before we draw any conclusions, he said. Three things changed in the same week: the email subject line, the landing page, and the CTA. We don't know which one drove the lift — and until we do, we can't reliably replicate it.",
      visualExamples: [
        { brand: 'Ember', context: 'Meal kit subscription — A/B test review', imageSlug: '/images/visual-examples/ada-p4-ember.png', caption: 'We need to isolate the variable — we changed the headline, the image, and the CTA in the same test, so we have no idea which one drove the 14% lift.', aspectRatio: '16/9' },
        { brand: 'Tide', context: 'Fintech app — experiment debrief', imageSlug: '/images/visual-examples/ada-p4-tide.png', caption: 'We need to isolate the variable — the pricing test ran during a promotional period, so any conversion improvement could be noise from the sale, not evidence that the new price point works.', aspectRatio: '1.91/1' },
        { brand: 'Relay', context: 'B2B comms platform — data review', imageSlug: '/images/visual-examples/ada-p4-relay.png', caption: 'We need to isolate the variable — onboarding emails and in-app nudges went out the same week, so we cannot attribute the activation spike to either channel.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: 'BASED ON THE LTV DATA, WE SHOULD ALLOCATE...',
      definition: 'A phrase used to link customer value to how we share the budget.',
      example: 'Based on the LTV data, we should allocate more budget to enterprise clients.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-based-on-the-ltv-data-we-should-allocate.png',
      inAction: 'Based on the LTV data, we should allocate significantly more budget to acquiring Segment A customers — their lifetime value is four times higher.',
      register: 'Formal — used in budget planning meetings and data-driven allocation discussions. Shows that spend decisions are grounded in customer value, not just volume or cost per acquisition.',
      inContext: "Dana had built the LTV model over three months and the results were clear. Based on the LTV data, we should allocate 60% of acquisition budget to the enterprise segment, she told the CFO. The LTV difference is significant enough that we're actually underinvesting in our most valuable customer type — and that's a correctable mistake.",
      visualExamples: [
        { brand: 'Bloom Vitamins', context: 'DTC vitamin brand — budget planning', imageSlug: '/images/visual-examples/ada-p5-bloom.png', caption: 'Based on the LTV data, we should allocate 60% of our acquisition budget to the 35-44 female cohort — they have a 28-month average LTV vs 11 months for the 18-24 segment.', aspectRatio: '16/9' },
        { brand: 'Folio', context: 'Personal finance app — channel review', imageSlug: '/images/visual-examples/ada-p5-folio.png', caption: 'Based on the LTV data, we should allocate more to referral — referred users have a 2.4x higher LTV and a 40% lower CAC than any paid channel.', aspectRatio: '1.91/1' },
        { brand: 'Halo', context: 'Wellness subscription — quarterly planning', imageSlug: '/images/visual-examples/ada-p5-halo.png', caption: 'Based on the LTV data, we should allocate the retention budget to users in months 4 and 5 — that is when churn spikes, not at month 1 as we assumed.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: 'THE VARIANCE TELLS US SOMETHING IS OFF',
      definition: 'A phrase used when real results are very different from the forecast.',
      example: 'The variance tells us something is off with this month\'s lead numbers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/advanced-data-analytics-the-variance-tells-us-something-is-off.png',
      inAction: "The variance in conversion rates between regions tells us something is off — there's too much inconsistency in the data for it to be explained by chance.",
      register: "Neutral / Technical — used in data review sessions. 'Variance' refers to the spread or inconsistency in data; 'something is off' is a conversational signal that a problem is worth investigating further.",
      inContext: "Riley was presenting the monthly performance review when she paused at one section of the dashboard. The variance tells us something is off here, she said. Email open rates are 30% in the UK and 11% in Germany — same campaign, same content, completely different result. There's something going on with the audience, the timing, or the translation, and we need to find out what.",
      visualExamples: [
        { brand: 'Summit', context: 'Outdoor brand — performance review', imageSlug: '/images/visual-examples/ada-p6-summit.png', caption: 'The variance tells us something is off — our CPL jumped 34% month-on-month with no change in creative or budget. We need to investigate audience overlap.', aspectRatio: '16/9' },
        { brand: 'Prism', context: 'B2B SaaS — sales performance review', imageSlug: '/images/visual-examples/ada-p6-prism.png', caption: 'The variance tells us something is off — win rates in the enterprise segment dropped from 32% to 19% in Q3. That is not a market problem. That is a pitch problem.', aspectRatio: '1.91/1' },
        { brand: 'Arc', context: 'Subscription box brand — data debrief', imageSlug: '/images/visual-examples/ada-p6-arc.png', caption: 'The variance tells us something is off — our customer satisfaction score fell 8 points during a month when NPS stayed flat. The two metrics should move together.', aspectRatio: '4/3' },
      ],
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Thanks for joining, everyone. Today I want to walk through the Q3 analytics review and then present a recommendation for Q4 budget allocation. I'll start with the funnel and work up to the LTV analysis.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Before we start — last quarter we had a significant variance between forecast and actual. Has that been explained?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Yes — I'll cover that. The short version: the [[variance:the difference between expected results and actual results]] was driven by two factors. First, our [[attribution:the process of determining which channels contributed to a conversion]] model was giving too much credit to paid search, which distorted the forecast. Second, the SME segment underperformed our model's prediction by 30%.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "Let's look at the funnel first. If we look at the funnel, we can see that the top — awareness to MQL — is healthy. We're generating more MQLs than ever. The problem is between MQL and SQL. We're losing 58% at that stage.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: '58% is a big drop. Is that a lead quality problem or a nurturing problem?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "That's what we needed to isolate. We ran a [[regression:a statistical method used to understand the relationship between variables]] on the leads that converted versus those that didn't. Lead quality is fine — the scoring model is working. The drop-off is in the 72 hours after the first email. Response rate falls off a cliff after that window.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "So it's a speed-to-follow-up issue, not a quality issue. The data points to a gap between MQL creation and first meaningful outreach. We need to automate the first response within four hours of a lead coming in.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Agreed. Now — the LTV analysis. Because that's what I think should drive the budget conversation.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Exactly. Our [[segmentation model:a data-driven approach to dividing customers into groups based on shared characteristics]] identified four customer segments. The [[LTV:Lifetime Value — the total revenue expected from a customer over the entire relationship]] breakdown is striking: Segment A averages £9,200, Segment B is £3,800, Segment C is £1,900, and Segment D is £900.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: 'And right now, our budget is split roughly equally across all four segments. Based on the LTV data, we should allocate the acquisition budget in proportion to expected value — not equally.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'What does the [[predictive:using past data to forecast future behavior or outcomes]] model say about Q4?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The model predicts that if we shift 50% of the acquisition budget to Segment A and reduce Segment D spend to near zero, pipeline should increase by 31% with the same total budget. I want to be clear — that's directional, not a guarantee. The model has a confidence interval of plus or minus 12%.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "And we can validate it with a [[cohort:a group of customers who share a common characteristic, typically time of acquisition]] analysis. If we run the reallocation in Q4 and track the new cohort's LTV at the 90-day mark, we'll know by Q1 whether the model is right.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I'm comfortable with that approach. What's the single most important change we make in Q4 based on all of this?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Fix the MQL-to-SQL gap with faster follow-up, and reallocate budget toward Segment A. If we do both, the model gives us our best Q4 in three years. If we only do one, the uplift is partial.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Let's do both. Dana — can you own the follow-up automation? Riley — put together the budget reallocation proposal with the model assumptions clearly laid out.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "I'll have the automation live within two weeks. Riley — I'd also recommend including the [[funnel analysis:the process of examining how prospects move through each stage of the marketing and sales funnel]] as a visual in the proposal. The board will want to see exactly where the money is going and what stage it's designed to impact.",
    }
  ],

  matchingExercise: [
    {
        "word": "regression",
        "definition": "a statistical method used to understand the relationship between variables and identify what drives outcomes"
    },
    {
        "word": "segmentation model",
        "definition": "a data-driven approach to dividing customers into groups based on shared characteristics"
    },
    {
        "word": "predictive",
        "definition": "using historical data to forecast future behavior or outcomes"
    },
    {
        "word": "funnel analysis",
        "definition": "examining how prospects move through each stage of the journey to identify where drop-off is highest"
    },
    {
        "word": "LTV",
        "definition": "Lifetime Value — the total revenue expected from a single customer over the entire relationship"
    },
    {
        "word": "cohort",
        "definition": "a group of customers who share a common characteristic, typically when they first became customers"
    },
    {
        "word": "variance",
        "definition": "the difference between expected results and actual results — or the spread of data around an average"
    },
    {
        "word": "attribution",
        "definition": "the process of determining which marketing channels or touchpoints contributed to a conversion"
    }
],
  fillBlankExercise: [
    {
        "before": "The data ",
        "after": " a significant engagement drop-off at the third email in the sequence.",
        "answer": "points to"
    },
    {
        "before": "If we look at the ",
        "after": ", we can see that 58% of MQLs are dropping off before they become SQLs.",
        "answer": "funnel"
    },
    {
        "before": "The model ",
        "after": " that shifting budget to Segment A will increase pipeline by 31% with the same total spend.",
        "answer": "predicts"
    },
    {
        "before": "Before we scale anything, we need to ",
        "after": " the variable — we changed three things simultaneously last quarter.",
        "answer": "isolate"
    },
    {
        "before": "Based on the LTV data, we should ",
        "after": " 60% of the acquisition budget to Segment A — their average value is four times higher.",
        "answer": "allocate"
    },
    {
        "before": "A 40% gap between forecast and actual tells us the ",
        "after": " is too large — something in the model or the inputs needs to be reviewed.",
        "answer": "variance"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley say caused the Q3 variance between forecast and actual?",
        "options": [
            "The paid search budget was too high and wasted on the wrong audience",
            "A flawed attribution model and the SME segment underperforming the prediction by 30%",
            "The LTV model was inaccurate due to poor data quality"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does the regression analysis reveal about the MQL-to-SQL drop-off?",
        "options": [
            "Lead quality is poor — the scoring model is not identifying good prospects",
            "The drop-off happens because the product demo is too long",
            "Lead quality is fine — the drop-off is in the speed of follow-up after the first email"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does the predictive model forecast if budget is shifted to Segment A?",
        "options": [
            "A 28% increase in pipeline with a confidence interval of plus or minus 12%",
            "A 31% increase in pipeline with a confidence interval of plus or minus 12%",
            "A doubling of the LTV in Segment A within one quarter"
        ],
        "correctIndex": 1
    },
    {
        "question": "Who is assigned to own the follow-up automation?",
        "options": [
            "Riley",
            "Marcus",
            "Dana"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Have you ever had to present data to a manager or client who didn't have a technical background? What was the hardest part — understanding the data, or explaining it to someone else?",
        "Think about a marketing campaign you know about. If you had to identify one metric that would tell you whether it was working, what would it be? Why that one?",
        "Have you ever made a decision at work based on data that later turned out to be wrong or misleading? What happened, and what did you learn from it?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "The regression analysis _____ that content and email account for 68% of the variance in revenue.",
            "options": [
                "showed",
                "showing",
                "is showed"
            ],
            "correctIndex": 0,
            "explanation": "'Showed' is the simple past tense — correct here because the analysis was completed in the past ('we ran a regression and it showed...').  'Showing' is a present participle — it would need an auxiliary verb: 'was showing' or 'is showing'. 'Is showed' is incorrect because 'show' forms its passive as 'is shown', not 'is showed'. When reporting the result of a completed analysis, use simple past: 'the analysis showed', 'the data revealed', 'the model indicated'."
        },
        {
            "sentence": "If we _____ the variable, we can identify which change actually drove the improvement.",
            "options": [
                "isolate",
                "will isolate",
                "isolated"
            ],
            "correctIndex": 0,
            "explanation": "In a first conditional (real, possible condition), the if-clause uses present simple and the main clause uses 'will'. 'If we isolate' (present simple) is correct for the if-clause. 'If we will isolate' is a very common learner error — English does not use 'will' in the if-clause of a first conditional. 'If we isolated' would create a second conditional (hypothetical or unlikely situation). The structure is: If + present simple, will + base verb."
        },
        {
            "sentence": "LTV is one of the most important _____ in marketing because it tells you how much you can afford to spend on acquisition.",
            "options": [
                "metric",
                "metrics",
                "metrically"
            ],
            "correctIndex": 1,
            "explanation": "'Metrics' is the plural noun needed here — 'one of the most important metrics' is the standard structure for superlatives with a plural group. The pattern is: 'one of the + superlative + plural noun'. 'One of the most important metric' (singular) is incorrect — the plural is required because 'one of' implies there are multiple items in the group. 'Metrically' is an adverb and cannot fill a noun position after an adjective."
        },
        {
            "sentence": "We need _____ the attribution model before we make any budget decisions based on last quarter's data.",
            "options": [
                "to fix",
                "fixing",
                "fix"
            ],
            "correctIndex": 0,
            "explanation": "'To fix' is the infinitive form required after 'need' when the subject is a person performing an action. 'We need to fix' = we have a requirement to perform this action. 'We need fixing' would mean 'we require someone to fix us' — a passive meaning. 'We need fix' is grammatically incorrect — 'need' as a main verb must be followed by 'to + base verb' or a noun. Contrast with: 'the model needs fixing' (passive — the model needs to be fixed) versus 'we need to fix the model' (active — we are the ones doing the fixing)."
        },
        {
            "sentence": "The cohort analysis _____ us whether recent customers are retaining better than older ones.",
            "options": [
                "tells",
                "says",
                "speaks"
            ],
            "correctIndex": 0,
            "explanation": "'Tells' is correct — 'tell' takes a person as its indirect object: 'tell us', 'tell me', 'tell the team'. 'Says' is used when the subject is a person or a text ('the report says', 'she says') — but 'say' doesn't take an indirect object as naturally in this context ('says us' is ungrammatical). 'Speaks' does not take an indirect object in this way. The distinction: 'say + that clause' ('the data says that...') and 'tell + person + that clause' ('the data tells us that...')."
        },
        {
            "sentence": "The model's prediction should be treated _____ directional rather than as a guarantee.",
            "options": [
                "as",
                "like",
                "for"
            ],
            "correctIndex": 0,
            "explanation": "'As' is the correct preposition in the phrase 'treat X as Y' — meaning 'consider X to be Y' or 'regard X in the way you would regard Y'. 'Treat the prediction as directional' = consider it to be directional, use it as a guide not a certainty. 'Treat X like Y' also exists but is slightly less formal and more comparative in feel. 'Treat X for Y' is not a standard phrase in this meaning. In formal business and analytical writing, 'treat as' is the preferred construction."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the client or colleague says. Choose the best professional response.",
        "items": [
            {
                "customerLine": "The model predicts a 31% increase in pipeline. Can we put that number in the board presentation?",
                "options": [
                    "Yes — the model is based on solid historical data, so the 31% figure is reliable. The board will be impressed by the precision.",
                    "I'd recommend presenting it with context. The 31% is the model's central prediction, but the confidence interval is plus or minus 12% — so the realistic range is 19% to 43%. Presenting it as '31%, with a range of 19–43% based on our predictive model' is both accurate and credible. Boards respect honesty about uncertainty — they distrust false precision.",
                    "We shouldn't put specific numbers in the board presentation. It's better to keep it qualitative to avoid being held to a figure."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the professional answer — it presents the number in context, explains the confidence interval, gives the realistic range, and explains why honesty about uncertainty builds rather than undermines credibility. This is how skilled data communicators handle predictions. Option A presents false precision — models are not guarantees and presenting them as such damages trust when results differ. Option C avoids the question entirely — boards need data to make decisions, and a well-presented range is far more useful than a vague qualitative statement."
            },
            {
                "customerLine": "We changed the ad creative, the audience, and the landing page all at once. Results improved — can we now scale this?",
                "options": [
                    "Yes — if results improved overall, the combination is working. Scale it now while the momentum is there.",
                    "Not yet. We know something in that combination worked, but we don't know which element drove the improvement. If we scale now and results drop, we won't know what to fix. I'd recommend isolating the variable — running each change separately in the next test — so we know what's actually working before we commit the full budget.",
                    "We should revert to the original and start the test again, properly this time."
                ],
                "correctIndex": 1,
                "explanation": "Option B is correct — it explains the risk of scaling without attribution clarity, names the analytical principle (isolate the variable), and gives a practical next step (separate tests). This is how a data-led marketer thinks. Option A prioritizes momentum over knowledge — which can work in the short term but leaves you unable to diagnose problems when results change. Option C is unnecessarily cautious — you don't need to revert; you need to isolate going forward. The existing result is valuable even if it's not fully attributed yet."
            },
            {
                "customerLine": "Our LTV analysis shows Segment D has an average value of £900. Should we stop marketing to them completely?",
                "options": [
                    "Yes — low LTV segments are a drain on budget. Cut them and redirect everything to high-value segments.",
                    "Not necessarily — it depends on what Segment D costs to acquire and whether they serve any other strategic purpose. If their CAC is £100 and they contribute £900 over their lifetime, that's still a positive return. They might also be early-stage customers who graduate to a higher-value segment later, or they might provide volume for product and sales team development. The decision should be based on full unit economics, not LTV alone.",
                    "Keep investing in Segment D but reduce the budget by 50% to reflect their lower value."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it raises the right counter-questions (CAC, strategic role, graduation potential) and correctly identifies that LTV alone doesn't tell the whole story. Unit economics (LTV relative to CAC) is the real decision framework. A £900 LTV customer who costs £50 to acquire may be more valuable than a £5,000 LTV customer who costs £4,000 to acquire. Option A makes a categorical decision on a single metric without considering costs or strategy. Option C applies an arbitrary reduction with no analytical basis."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the data review presentation extract. Three lines have a grammar mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "The funnel analysis shows that 58% of MQLs are dropping off before they become SQLs."
            },
            {
                "speaker": "Dana",
                "text": "We run a regression on the data last week and found that speed of follow-up is the primary driver of conversion."
            },
            {
                "speaker": "Riley",
                "text": "The predictive model suggest that reallocating budget to Segment A will increase pipeline by around 31%."
            },
            {
                "speaker": "Marcus",
                "text": "That prediction should be treated as directional — the confidence interval is plus or minus 12%."
            },
            {
                "speaker": "Dana",
                "text": "The LTV data is very clear: Segment A customers are worth four times more as Segment D customers on average."
            },
            {
                "speaker": "Riley",
                "text": "Before we scale anything, we need to isolate the variables and understand which change drove the improvement."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "We run a regression on the data last week",
                "correction": "We ran a regression on the data last week",
                "explanation": "'Last week' indicates a completed past action, so the simple past tense 'ran' is needed — not 'run' (base form / present simple). 'Run' is the base form and present simple of the verb (we run reports every week). 'Ran' is the past simple (we ran a regression last week). 'Have run' is the present perfect (we have run several analyzes this year). Any time expression that refers to a specific past time (last week, yesterday, in Q3, on Tuesday) requires simple past — not present simple or present perfect."
            },
            {
                "lineIndex": 2,
                "incorrectText": "suggest",
                "correction": "suggests",
                "explanation": "'The predictive model' is a singular subject, so the present simple verb must take the third-person singular -s ending: 'suggests'. 'Suggest' (without -s) is used with plural subjects: 'the models suggest', 'the results suggest', 'these findings suggest'. This is a very common subject-verb agreement error. The rule: if the subject is singular (the model, the data, the analysis, the report), the present simple verb needs -s: shows, suggests, indicates, reveals."
            },
            {
                "lineIndex": 4,
                "incorrectText": "four times more as",
                "correction": "four times more than",
                "explanation": "In comparative structures using multipliers ('twice', 'three times', 'four times'), the correct preposition is 'than' — not 'as'. 'Four times more than' is the correct form. 'As' is used in equality comparisons: 'as good as', 'as valuable as'. 'More than' is used in comparisons of inequality: 'more valuable than', 'four times higher than'. Mixing 'more' with 'as' ('more as') is a common error influenced by other languages (German: 'als', French: 'que'). Always use 'than' with comparative adjectives and multiplier comparisons."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The data analyst starts a sentence in a stakeholder meeting. Work with your partner to finish it professionally.",
        "items": [
            {
                "customerLine": "The board is asking for a 'data-driven' Q4 plan. What does that actually mean in practice?",
                "salespersonStart": "A data-driven plan means every significant decision is justified by evidence rather than gut feel. In practice, that means three things for Q4:",
                "suggestedCompletion": "First, budget allocation is based on LTV and CAC data, not historical spend patterns. Second, channel investment follows what the funnel analysis tells us about where drop-off is highest — we fix the leakiest stage first. Third, we set a forecast range based on the predictive model's confidence interval, not a single point estimate. The plan shows the board what we're doing, why the data supports it, and how we'll know if it's working."
            },
            {
                "customerLine": "We have too much data and we don't know what to focus on. Where do we start?",
                "salespersonStart": "Start with the decision you need to make, not with the data. Every analytics project should begin with the question: 'What would we do differently if we knew the answer?' If the answer is 'nothing would change', the analysis isn't worth doing. The most useful analyzes right now are...",
                "suggestedCompletion": "funnel analysis — to understand where you're losing prospects and why — and LTV by segment, to understand which customers are worth acquiring. Those two analyzes will answer the budget question, the targeting question, and the channel question. Everything else is secondary until you have those two things working."
            },
            {
                "customerLine": "How do we explain the predictive model to the CEO? She doesn't have a data background.",
                "salespersonStart": "Don't explain the model — explain what it tells you and what decision it informs. CEOs don't need to understand regression; they need to understand the output. I'd frame it this way:",
                "suggestedCompletion": "We analyzed two years of data to find the pattern that best predicts which customers will be worth the most to us. The model says: if we shift budget toward the customers who look like our best historical clients, and we respond to new leads within four hours, we expect pipeline to grow by roughly 20–40% this quarter. We'll validate that prediction in real time and report back at the 90-day mark. That's the whole story — no equations needed."
            }
        ]
    }
},
};
