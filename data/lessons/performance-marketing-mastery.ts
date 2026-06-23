import { Lesson } from '@/types/lesson';

export const performanceMarketingMastery: Lesson = {
  slug: 'performance-marketing-mastery',
  title: 'Performance Marketing Mastery',
  subtitle: 'How to measure, optimise, and report on full-funnel performance marketing',
  level: 'C1-C2',
  description: "Performance marketing is where strategy meets accountability. At the C1 level, it is not enough to know how to run a campaign — you need to know how to attribute results correctly, understand what is truly driving growth versus what looks good on a dashboard, and build a measurement framework that survives scrutiny from the CFO. This lesson covers the advanced vocabulary of performance marketing: attribution, incrementality, blended CAC, ROAS, and the frameworks that separate insight from noise.",
  heroImage: '/images/performance-marketing-mastery-hero.png',

  vocabulary: [
    {
      word: 'Attribution model',
      partOfSpeech: 'noun',
      definition: "The method used to decide which marketing touchpoint gets credit for a conversion. Different attribution models give credit to the first touchpoint, the last touchpoint, or distribute it across multiple touchpoints.",
      example: "Riley said: Last-click attribution gives 100% of the credit to the final ad a customer clicked before buying. But if they saw six touchpoints over three weeks, last click is telling you the wrong story. Your attribution model determines what you optimise for — and what you cut.",
      imageSlug: '/images/attribution-model.png',
    },
    {
      word: 'Multi-touch attribution',
      partOfSpeech: 'noun',
      definition: "An attribution approach that gives credit to multiple touchpoints across the customer journey — not just the first or last. It gives a more accurate picture of how different channels work together to drive conversion.",
      example: "Marcus asked: Why is email getting so little budget if it drives 20% of conversions? Riley said: Because we are using last-click attribution. Email is rarely the last click — it warms up customers who then convert through paid search. Switch to multi-touch attribution and email gets a very different story.",
      imageSlug: '/images/multi-touch-attribution.png',
    },
    {
      word: 'Incrementality',
      partOfSpeech: 'noun',
      definition: "The true additional lift a marketing activity generates — above and beyond what would have happened without it. High ROAS does not always mean high incrementality: some of your spend captures customers who would have bought anyway.",
      example: "Riley said: Our retargeting campaigns have a 12x ROAS. But if we look at incrementality — the sales that only happened because of the retargeting — it is closer to 2x. We are spending a lot of money to show ads to people who were going to buy regardless. That is wasted budget.",
      imageSlug: '/images/incrementality.png',
    },
    {
      word: 'Blended CAC',
      partOfSpeech: 'noun',
      definition: "The average cost to acquire one new customer across all channels combined. Blended CAC gives a realistic picture of overall acquisition efficiency — unlike channel-level CAC, which can look strong while the total is unsustainable.",
      example: "Riley said: Your paid search CAC looks excellent at £30. But your blended CAC — including the brand spend, the content team, and the agency fees — is £180. The board needs to understand the blended number, not the best-performing channel in isolation.",
      imageSlug: '/images/blended-cac.png',
    },
    {
      word: 'ROAS',
      partOfSpeech: 'abbreviation',
      definition: "Return On Ad Spend — the revenue generated for every pound spent on advertising. A ROAS of 4x means every £1 spent on ads generates £4 in revenue. It measures efficiency but not profitability.",
      example: "Riley said: ROAS is a useful metric but not the whole story. A 10x ROAS sounds great — until you factor in your cost of goods, fulfilment, and customer service costs. A channel with a 5x ROAS and low overheads can be more profitable than one with 10x and high fulfilment costs.",
      imageSlug: '/images/roas.png',
    },
    {
      word: 'Payback period',
      partOfSpeech: 'noun',
      definition: "The time it takes for a customer to generate enough revenue to cover the cost of acquiring them. A short payback period means the business recoups its acquisition cost quickly and can reinvest in more growth.",
      example: "Riley said: Our blended CAC is £150 and our average monthly revenue per customer is £30. That is a five-month payback period. The business can afford that if customers stay for two years. If they churn at six months, we barely break even — and we cannot fund growth.",
      imageSlug: '/images/payback-period.png',
    },
    {
      word: 'Media mix modelling',
      partOfSpeech: 'noun',
      definition: "A statistical method that uses historical data to measure how different marketing channels contribute to overall business outcomes. It is particularly useful for channels that are difficult to track at the individual level, like TV, radio, and out-of-home.",
      example: "Riley said: We cannot track TV at the individual conversion level — but we can see that markets where we ran TV consistently perform 15% better across all digital metrics. That is media mix modelling at work: using aggregate data to understand a channel's contribution.",
      imageSlug: '/images/media-mix-modelling.png',
    },
    {
      word: 'Full-funnel measurement',
      partOfSpeech: 'noun',
      definition: "A measurement approach that tracks performance across every stage of the customer journey — from awareness to conversion to retention — rather than just measuring the bottom of the funnel.",
      example: "Riley said: Bottom-funnel ROAS looks brilliant because you are measuring the stage where people are already close to buying. Full-funnel measurement shows you what filled the top — and whether your brand and awareness investment is actually driving long-term performance or whether you are just harvesting existing demand.",
      imageSlug: '/images/full-funnel-measurement.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "What is our blended CAC this quarter?",
      definition: "A key performance question that asks for the total average cost of customer acquisition across all channels — not just the best-performing one. It gives a realistic picture of acquisition efficiency.",
      example: "Riley opened the performance review: Before we look at individual channel ROAS, let me ask: what is our blended CAC this quarter? I want to see the real cost — all channel spend, agency fees, content production — divided by net new customers. That is the number we optimise.",
      imageSlug: '/images/what-is-our-blended-cac-this-quarter.png',
    },
    {
      phrase: "We need to run an incrementality test",
      definition: "A signal that the team needs to measure whether a marketing activity is generating genuine new demand — or just capturing people who were already going to convert. Incrementality tests typically involve holding out a group from seeing the campaign.",
      example: "Riley said: Retargeting is showing a 15x ROAS but I do not believe it. We need to run an incrementality test — hold back 20% of the retargeting audience and see if they still convert. If the conversion rate is similar with no retargeting, we are not generating lift — we are spending to take credit.",
      imageSlug: '/images/we-need-to-run-an-incrementality-test.png',
    },
    {
      phrase: "The attribution model is distorting the picture",
      definition: "A phrase used to flag that the current way of assigning credit to marketing channels is creating a misleading view of performance — causing the team to over-invest in some channels and under-invest in others.",
      example: "Riley said: The attribution model is distorting the picture. We are optimising for last-click performance, so paid search looks like a hero and everything upstream — display, social, email — looks like it is doing nothing. Switch to multi-touch and the whole story changes.",
      imageSlug: '/images/the-attribution-model-is-distorting-the-picture.png',
    },
    {
      phrase: "ROAS does not tell us if we are profitable",
      definition: "A reminder that ROAS measures revenue efficiency but not profitability — it does not account for cost of goods sold, fulfilment, customer service, or returns. High ROAS can coexist with unprofitability.",
      example: "The junior analyst presented a 12x ROAS and called it a success. Riley said: ROAS does not tell us if we are profitable. I need to see the contribution margin after cost of goods and fulfilment. A 12x ROAS on a 10% margin product might be generating less profit than a 4x ROAS on a 60% margin one.",
      imageSlug: '/images/roas-does-not-tell-us-if-we-are-profitable.png',
    },
    {
      phrase: "Let's look at this through a full-funnel lens",
      definition: "A phrase that redirects analysis from bottom-of-funnel metrics only to a view that includes awareness, consideration, and retention stages. It prevents over-optimisation for short-term conversion at the expense of long-term growth.",
      example: "Marcus said: Organic traffic is down but conversion rate is up — is that a problem? Riley said: Let's look at this through a full-funnel lens. If top-of-funnel traffic is declining, conversion rate can look good for a few months while the pipeline quietly dries up. We are probably harvesting existing demand, not building new.",
      imageSlug: '/images/lets-look-at-this-through-a-full-funnel-lens.png',
    },
    {
      phrase: "What is the payback period at current CAC?",
      definition: "A key financial question that connects acquisition cost to revenue and retention — asking how long the business must retain a customer before it recoups what it spent to acquire them.",
      example: "Riley said: Before we increase the acquisition budget, I want to know: what is the payback period at current CAC? If we are spending £200 to acquire a customer who pays us £40 a month, that is a five-month payback — which is sustainable only if we retain for at least 12 months. What does our cohort data say?",
      imageSlug: '/images/what-is-the-payback-period-at-current-cac.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the CFO is asking why our performance marketing budget has tripled but revenue has only grown 40%. I need to give her a better answer than 'ROAS looks great'.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Because [[ROAS:Return On Ad Spend — revenue generated for every pound spent on advertising]] does not tell us if we are profitable. She is asking the right question. What is your [[blended CAC:the average cost to acquire one new customer across all channels combined]] this quarter?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Paid search CAC is £35. But when I include all channels, agency fees, and content production, the blended CAC is closer to £220.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "There is your answer. The CFO sees the blended number — and £220 against a £40 monthly revenue means a 5.5-month [[payback period:the time it takes for a customer to generate enough revenue to cover their acquisition cost]]. That is only sustainable if your retention holds.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Our retargeting is showing a 15x [[ROAS:Return On Ad Spend]], which looks excellent. But I am not sure how much of that is genuinely incremental.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Trust your instinct. We need to run an incrementality test. [[Incrementality:the true additional lift a marketing activity generates above what would have happened without it]] is the real question — are those customers converting because of the retargeting, or would they have bought anyway?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And I think our [[attribution model:the method used to decide which marketing touchpoint gets credit for a conversion]] is part of the problem. We use last-click, which makes paid search look like a hero.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The attribution model is distorting the picture. [[Multi-touch attribution:an approach that gives credit to multiple touchpoints across the customer journey]] will show you what email, display, and social are actually contributing — and you will probably find you are underspending on the channels that do the heavy lifting early in the journey.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We are also struggling to measure our TV and out-of-home spend. How do I show its contribution?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "[[Media mix modelling:a statistical method that uses historical data to measure how different channels contribute to overall business outcomes]] — it uses aggregate data to show the impact of channels you cannot track at the individual level. Markets where we run TV consistently outperform by 15%. That is the evidence.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what about [[full-funnel measurement:a measurement approach that tracks performance across every stage of the customer journey]]? The CFO asked why top-of-funnel is not in the performance report.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
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
