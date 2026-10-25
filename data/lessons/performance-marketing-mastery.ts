import { Lesson } from '@/types/lesson';

export const performanceMarketingMastery: Lesson = {
  slug: 'performance-marketing-mastery',
  title: 'Performance Marketing Mastery',
  subtitle: 'How to measure, optimise, and report on full-funnel performance marketing',
  level: 'C1-C2',
  description: "Performance marketing is where strategy meets accountability. At the C1 level, it is not enough to know how to run a campaign — you need to know how to attribute results correctly, understand what is truly driving growth versus what looks good on a dashboard, and build a measurement framework that survives scrutiny from the CFO. This lesson covers the advanced vocabulary of performance marketing: attribution, incrementality, blended CAC, ROAS, and the frameworks that separate insight from noise.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-hero.png',

  vocabulary: [
    {
      word: 'Attribution model',
      partOfSpeech: 'noun',
      definition: 'A way to decide which ad or channel gets credit for a sale.',
      example: 'Our attribution model gives all the credit to the last click.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-last-click-all-sale-credit.png',
    },
    {
      word: 'Multi-touch attribution',
      partOfSpeech: 'noun',
      definition: 'Giving credit to every ad a customer saw before buying.',
      example: 'Multi-touch attribution shows that email also helped.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-email-shares-conversion-credit.png',
    },
    {
      word: 'Incrementality',
      partOfSpeech: 'noun',
      definition: 'The extra sales that only happen because of an ad.',
      example: 'The incrementality test showed the ads added 10% more sales.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-ads-add-ten-percent-sales.png',
    },
    {
      word: 'Blended CAC',
      partOfSpeech: 'noun',
      definition: 'The average cost to win one customer across all channels.',
      example: 'Our blended CAC is £40 per customer.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-all-channel-cost-forty-per-customer.png',
    },
    {
      word: 'ROAS',
      partOfSpeech: 'abbreviation',
      definition: 'Short for return on ad spend: money earned for every pound spent on ads.',
      example: 'Our ROAS is four, so we earn £4 for every £1.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-one-pound-ads-four-pound-revenue.png',
    },
    {
      word: 'Payback period',
      partOfSpeech: 'noun',
      definition: 'How long it takes to earn back the cost of a new customer.',
      example: 'Our payback period is six months.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-acquisition-cost-recovered-month-six.png',
    },
    {
      word: 'Media mix modelling',
      partOfSpeech: 'noun',
      definition: 'Using past data to see how each channel affects sales.',
      example: 'Media mix modelling showed that TV still works for us.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-historical-model-tv-contribution.png',
    },
    {
      word: 'Full-funnel measurement',
      partOfSpeech: 'noun',
      definition: 'Measuring results at every step of the customer journey.',
      example: 'Full-funnel measurement tracks views, clicks and sales.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-track-views-clicks-sales.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "What is our blended CAC this quarter?",
      definition: 'A question about the average cost of getting a customer.',
      example: 'Before we spend more, what is our blended CAC this quarter?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-quarter-cost-question-before-budget-increase.png',
    },
    {
      phrase: "We need to run an incrementality test",
      definition: 'A way to say we must check if ads really bring extra sales.',
      example: 'We need to run an incrementality test on our search ads.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-plan-search-ad-holdout-test.png',
    },
    {
      phrase: "The attribution model is distorting the picture",
      definition: 'A warning that the credit system gives the wrong idea.',
      example: 'The attribution model is distorting the picture, so social media looks weak.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-last-click-undercredits-social.png',
    },
    {
      phrase: "ROAS does not tell us if we are profitable",
      definition: 'A reminder that high ad returns don\'t always mean profit.',
      example: 'ROAS does not tell us if we are profitable, so check the costs too.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-ad-return-profit-cost-review.png',
    },
    {
      phrase: "Let's look at this through a full-funnel lens",
      definition: 'A suggestion to look at every step, not just sales.',
      example: 'Let\'s look at this through a full-funnel lens before we cut the budget.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-whole-journey-review-before-budget-cut.png',
    },
    {
      phrase: "What is the payback period at current CAC?",
      definition: 'A question about how long it takes to earn back the cost of a customer.',
      example: 'What is the payback period at current CAC? Is it under a year?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/performance-marketing-mastery-unknown-recovery-versus-one-year.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, the CFO is asking why our performance marketing budget has tripled but revenue has only grown 40%. I need to give her a better answer than 'ROAS looks great'.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Because [[ROAS:Return On Ad Spend — revenue generated for every pound spent on advertising]] does not tell us if we are profitable. She is asking the right question. What is your [[blended CAC:the average cost to acquire one new customer across all channels combined]] this quarter?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Paid search CAC is £35. But when I include all channels, agency fees, and content production, the blended CAC is closer to £220.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "There is your answer. The CFO sees the blended number — and £220 against a £40 monthly revenue means a 5.5-month [[payback period:the time it takes for a customer to generate enough revenue to cover their acquisition cost]]. That is only sustainable if your retention holds.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Our retargeting is showing a 15x [[ROAS:Return On Ad Spend]], which looks excellent. But I am not sure how much of that is genuinely incremental.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Trust your instinct. We need to run an incrementality test. [[Incrementality:the true additional lift a marketing activity generates above what would have happened without it]] is the real question — are those customers converting because of the retargeting, or would they have bought anyway?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And I think our [[attribution model:the method used to decide which marketing touchpoint gets credit for a conversion]] is part of the problem. We use last-click, which makes paid search look like a hero.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The attribution model is distorting the picture. [[Multi-touch attribution:an approach that gives credit to multiple touchpoints across the customer journey]] will show you what email, display, and social are actually contributing — and you will probably find you are underspending on the channels that do the heavy lifting early in the journey.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "We are also struggling to measure our TV and out-of-home spend. How do I show its contribution?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "[[Media mix modelling:a statistical method that uses historical data to measure how different channels contribute to overall business outcomes]] — it uses aggregate data to show the impact of channels you cannot track at the individual level. Markets where we run TV consistently outperform by 15%. That is the evidence.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And what about [[full-funnel measurement:a measurement approach that tracks performance across every stage of the customer journey]]? The CFO asked why top-of-funnel is not in the performance report.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Because we are only reporting bottom-of-funnel. Let's look at this through a full-funnel lens for next quarter. Show awareness metrics, consideration metrics, and conversion together — and show how investment at each stage affects the others. That is a conversation she will understand.",
    }
  ],

  matchingExercise: [
    { word: 'attribution model', definition: 'the method used to decide which marketing touchpoint gets credit for a conversion' },
    { word: 'multi-touch attribution', definition: 'an approach that gives credit to multiple touchpoints across the customer journey' },
    { word: 'incrementality', definition: 'the true additional lift a marketing activity generates above what would have happened without it' },
    { word: 'blended CAC', definition: 'the average cost to acquire one new customer across all channels combined' },
    { word: 'ROAS', definition: 'Return On Ad Spend — revenue generated for every pound spent on advertising' },
    { word: 'payback period', definition: 'the time it takes for a customer to generate enough revenue to cover their acquisition cost' },
    { word: 'media mix modelling', definition: 'a statistical method that uses historical data to measure how different channels contribute to overall outcomes' },
    { word: 'full-funnel measurement', definition: 'tracking performance across every stage of the customer journey from awareness to retention' }
  ],

  fillBlankExercise: [
    { before: "ROAS does not tell us if we are ", after: " — a high revenue multiple can coexist with low margins and high fulfilment costs.", answer: "profitable" },
    { before: "Our retargeting has a 15x ROAS, but the ", after: " — the genuine additional lift — is probably closer to 2x.", answer: "incrementality" },
    { before: "The attribution model is ", after: " the picture — last-click makes paid search look like a hero while email gets no credit.", answer: "distorting" },
    { before: "What is our blended ", after: " this quarter? I want the real number — all spend divided by net new customers.", answer: "CAC" },
    { before: "Let's look at this through a full-", after: " lens — not just bottom-of-funnel conversion but the whole customer journey.", answer: "funnel" },
    { before: "What is the ", after: " period at current CAC? If customers churn before we recoup the acquisition cost, we cannot fund growth.", answer: "payback" }
  ],

  multipleChoiceExercise: [
    {
      question: "Why does Riley say the 15x ROAS on retargeting might not be as impressive as it looks?",
      options: ["ROAS is calculated incorrectly for retargeting campaigns", "Many of those customers would have converted anyway — the true incremental lift is much lower", "Retargeting ROAS always looks artificially high due to cookie tracking issues"],
      correctIndex: 1
    },
    {
      question: "What is the problem with last-click attribution according to Riley?",
      options: ["It is technically difficult to implement accurately", "It gives all credit to the final touchpoint and ignores all upstream channels that warmed up the customer", "It overvalues email marketing at the expense of paid search"],
      correctIndex: 1
    },
    {
      question: "What does Riley say is the answer when the CFO asks why revenue grew 40% when the budget tripled?",
      options: ["ROAS is a strong leading indicator and revenue will follow", "The blended CAC is £220 with a 5.5-month payback period — sustainable only if retention holds", "Performance marketing has a natural lag and results will compound over time"],
      correctIndex: 1
    },
    {
      question: "How does Riley suggest measuring the contribution of TV in markets where individual tracking is impossible?",
      options: ["Track self-reported attribution in post-purchase surveys", "Use media mix modelling — aggregate data showing that TV markets consistently outperform by 15%", "Reduce TV spend and redirect to trackable digital channels"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "When your marketing team reports on performance, what metrics do you use? Do you feel confident that those metrics tell the true story of what is driving results?",
      "Have you ever suspected that a campaign with a great ROAS or CTR was not actually generating real business value — but found it difficult to prove? What happened?",
      "When the CFO or a senior leader challenges your marketing ROI numbers, how do you respond? What evidence do you find most convincing to them?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "Last-click attribution gives 100% of the credit to the final _____ before conversion.",
        options: ["channel", "touchpoint", "ad"],
        correctIndex: 1,
        explanation: "'Touchpoint' is the specific performance marketing term for any interaction a customer has with a brand during the buying journey — an ad impression, an email open, a website visit. Attribution models decide how to distribute credit across touchpoints. 'Channel' is the platform or medium. 'Ad' is a single execution. 'Touchpoint' is the correct term in an attribution context."
      },
      {
        sentence: "We need to run an incrementality test to find out if retargeting is generating genuine _____ — or just capturing people who were already going to buy.",
        options: ["revenue", "lift", "conversions"],
        correctIndex: 1,
        explanation: "'Lift' is the specific performance marketing term for the measurable increase in outcomes generated by a marketing activity — the genuine additional effect above the baseline. 'Revenue' is the outcome, not the incremental effect. 'Conversions' is the metric, not the principle. In incrementality testing, you are measuring whether the activity generated 'lift' — real additional results that would not have happened without it."
      },
      {
        sentence: "Your paid search CAC is £35 but your _____ CAC is £220 — the board needs to understand the real number.",
        options: ["total", "blended", "average"],
        correctIndex: 1,
        explanation: "'Blended CAC' is the specific term for the average cost of customer acquisition across all channels combined — including brand spend, content, agency fees, and all paid media. 'Total CAC' is not a standard term. 'Average CAC' could mean per-channel average. 'Blended' specifically signals that all costs have been included and averaged across all new customers."
      },
      {
        sentence: "A 10x ROAS does not tell you if you are _____— you also need to look at margin, fulfilment costs, and returns.",
        options: ["growing", "profitable", "efficient"],
        correctIndex: 1,
        explanation: "'Profitable' is the correct word because ROAS only measures revenue return on ad spend — it does not account for cost of goods, fulfilment, customer service, or returns. A high ROAS on a low-margin product can result in unprofitability. 'Growing' and 'efficient' are not the right contrast — the specific gap in ROAS is profitability."
      },
      {
        sentence: "Media mix modelling uses _____ data to measure the contribution of channels like TV that cannot be tracked at the individual level.",
        options: ["aggregate", "historical", "statistical"],
        correctIndex: 0,
        explanation: "'Aggregate data' is the specific term here — media mix modelling works by looking at market-level or regional-level data in aggregate (not individual user data) to find the correlation between media investment and business outcomes. While 'historical' is also true (it uses historical data), 'aggregate' is the more precise and technically relevant descriptor for why the method works for channels like TV."
      },
      {
        sentence: "Let's look at this through a full-_____ lens — from awareness all the way through to retention.",
        options: ["channel", "funnel", "journey"],
        correctIndex: 1,
        explanation: "'Full-funnel' is the fixed performance marketing phrase for a measurement or strategy approach that covers every stage of the customer journey — from awareness at the top to conversion and retention at the bottom. 'Full-channel' is not a standard term. 'Full-journey' is descriptive but is not the established industry phrase."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "Our ROAS is 8x. That is a great result, right?",
          options: [
            "Yes — 8x is excellent and we should scale the budget immediately.",
            "ROAS is a useful indicator, but it does not tell us if we are profitable. What is the margin on these products? And is this last-click ROAS or multi-touch? The attribution model significantly affects what an 8x means in practice.",
            "It depends on the industry — in some categories 8x is average."
          ],
          correctIndex: 1,
          explanation: "Option B applies the correct analytical discipline — it challenges the ROAS number on two important dimensions: profitability (margin) and accuracy (attribution model). Option A accepts a headline metric without scrutiny, which is how marketing teams overspend on the wrong channels. Option C defers to benchmarks without asking the more important internal questions."
        },
        {
          customerLine: "Email is showing a very low ROAS. Should we cut the budget?",
          options: [
            "Yes — if the ROAS is low, the channel is not performing and we should reallocate.",
            "Not yet. The attribution model is probably distorting the picture. Email is rarely the last click — it warms up customers who convert through paid search. Switch to multi-touch attribution and run a holdout test before cutting. Email may be carrying more value than last-click shows.",
            "Reduce it slightly and monitor for another quarter before making a final decision."
          ],
          correctIndex: 1,
          explanation: "Option B correctly identifies that last-click attribution systematically undervalues email — and proposes an incrementality test before cutting. Option A acts on a potentially misleading metric without questioning the measurement method. Option C delays without fixing the diagnostic problem — you will still be looking at the wrong metric in the next quarter."
        },
        {
          customerLine: "We have doubled the acquisition budget but the CFO is asking why revenue has not doubled too.",
          options: [
            "Marketing has a natural lag — results will compound over the next two quarters.",
            "Let's look at this through a full-funnel lens. What is the blended CAC this quarter compared to six months ago? And what is the payback period at current CAC and retention rates? If CAC has increased faster than customer value, more spend generates diminishing returns — not proportional revenue growth.",
            "The revenue impact is there — it just takes time for top-of-funnel investment to flow through to conversion."
          ],
          correctIndex: 1,
          explanation: "Option B asks the right diagnostic questions — blended CAC trend and payback period — which are the real drivers of the revenue-to-spend relationship. Option A claims a 'natural lag' without evidence, which will not satisfy a CFO. Option C is similar — it defers to time without explaining the mechanism or presenting any data."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "Our paid search ROAS is 12x and our social ROAS is 6x. The blended ROAS is 9x — a strong result." },
        { speaker: "Riley", text: "Blended ROAS is not the same as blended CAC. The CFO needs the blended CAC — total spend divided by net new customers, across every channel." },
        { speaker: "Marcus", text: "Understood. And retargeting is showing high ROAS because it generates a lot of additional demand from new customers." },
        { speaker: "Riley", text: "That is probably not accurate — retargeting mostly captures people who were already close to buying. High ROAS does not mean high incrementality." },
        { speaker: "Marcus", text: "Fair point. And to understand the full picture, I'll use first-click attribution — that gives credit to the touchpoint where the customer first engaged." },
        { speaker: "Riley", text: "First-click is still a single-touch model. Multi-touch attribution distributes credit across multiple touchpoints and gives a more complete picture of how channels work together." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "The blended ROAS is 9x — a strong result",
          correction: "blended ROAS is a headline metric but does not show profitability or true acquisition efficiency — the CFO needs blended CAC",
          explanation: "Blended ROAS tells you the average revenue return across channels, but it does not show whether the business is profitable or whether acquisition is sustainable. The CFO's question — why hasn't revenue grown proportionally — requires blended CAC and payback period analysis, not a ROAS average."
        },
        {
          lineIndex: 2,
          incorrectText: "retargeting generates a lot of additional demand from new customers",
          correction: "retargeting mostly captures existing intent — it rarely generates new demand or reaches new customers",
          explanation: "Retargeting shows ads to people who have already visited your site or engaged with your brand — they are already close to buying. It rarely reaches truly new customers and does not generate new demand. High retargeting ROAS is common but often low in incrementality — the customers would have bought anyway."
        },
        {
          lineIndex: 4,
          incorrectText: "I'll use first-click attribution",
          correction: "use multi-touch attribution to distribute credit across all touchpoints in the journey",
          explanation: "First-click attribution is another single-touch model — it gives 100% of credit to the first interaction and ignores everything that follows. Multi-touch attribution distributes credit across multiple touchpoints and gives a much more accurate picture of how different channels work together. Neither first-click nor last-click captures the full customer journey."
        }
      ]
    },
    finishTheLine: {
      instructions: "The performance marketer starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "Our retargeting campaign has a 15x ROAS. Can we scale it?",
          salespersonStart: "Before we scale, we need to run an incrementality test. I suspect the ROAS looks high because we are showing ads to people who were already going to buy — not because the campaign is generating genuine new demand. If we hold back 20% of the retargeting audience and...",
          suggestedCompletion: "their conversion rate is similar to the 80% who saw the ads, the true incremental lift is close to zero. We are spending money to take credit, not to drive sales. That is a very different problem from a high-ROAS campaign."
        },
        {
          customerLine: "The CFO is asking why we tripled the budget but revenue only grew 40%.",
          salespersonStart: "The answer is in the blended CAC and payback period. Our paid search CAC looks great at £35 — but once we include all channel spend, agency fees, and content, the blended CAC is £220. What that means for the business is...",
          suggestedCompletion: "that at £40 average monthly revenue, we have a 5.5-month payback period. Tripling the budget has not tripled revenue because we are reaching less efficient audiences as we scale — the best customers come first and cheaper. Let's look at this through a full-funnel lens and find where the efficiency is breaking down."
        },
        {
          customerLine: "Email is getting barely any budget because its ROAS looks terrible.",
          salespersonStart: "The attribution model is distorting the picture. We use last-click attribution, which means email gets no credit because it is almost never the last click — customers open an email, think about it, and then convert through paid search. If we switch to multi-touch attribution...",
          suggestedCompletion: "email will get credit for warming up customers across the first three touchpoints of the journey. I'd wager it is one of our most efficient channels — we just cannot see it through a last-click lens. Let's run a holdout test on one email campaign and see what the incrementality actually is."
        }
      ]
    }
  }
};
