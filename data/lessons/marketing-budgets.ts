import { Lesson } from '@/types/lesson';

export const marketingBudgets: Lesson = {
  slug: 'marketing-budgets',
  title: 'Marketing Budgets',
  subtitle: 'How to plan, justify, and defend your marketing spend in a meeting — with language that makes finance and leadership take you seriously',
  level: 'B1-B2',
  description: "Getting budget approved is not just a numbers game — it is a communication skill. Finance teams and senior leadership don't just want to see where the money goes; they want to understand why each line item is there, what return it is expected to generate, and what the cost of not spending would be. This lesson teaches you the vocabulary of marketing budget management and the professional language to defend your spend confidently in meetings, reviews, and approval conversations.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-hero.png',

  vocabulary: [
    {
      word: 'ALLOCATION',
      partOfSpeech: 'noun',
      definition: 'How a budget is shared between different things.',
      example: 'Our allocation gives 40% to social media.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-allocation.png',
    },
    {
      word: 'ROI',
      partOfSpeech: 'noun',
      definition: 'Short for return on investment: what you get back for the money you spend.',
      example: 'The ROI on email marketing is very high.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-roi.png',
    },
    {
      word: 'COST-PER-ACQUISITION',
      partOfSpeech: 'noun',
      definition: 'How much it costs to get one new customer.',
      example: 'Our cost-per-acquisition is £30.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-cost-per-acquisition.png',
    },
    {
      word: 'FORECAST',
      partOfSpeech: 'noun',
      definition: 'A guess about future results based on data.',
      example: 'The forecast shows sales will grow next year.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-forecast.png',
    },
    {
      word: 'VARIANCE',
      partOfSpeech: 'noun',
      definition: 'The difference between the plan and the real result.',
      example: 'There is a variance of £5,000 between the budget and our spending.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-variance.png',
    },
    {
      word: 'HEADROOM',
      partOfSpeech: 'noun',
      definition: 'Money still available to spend.',
      example: 'We have some headroom left for a new campaign.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-headroom.png',
    },
    {
      word: 'COST OF INACTION',
      partOfSpeech: 'noun',
      definition: 'What you lose by doing nothing.',
      example: 'The cost of inaction is losing customers to competitors.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-cost-of-inaction.png',
    },
    {
      word: 'RING-FENCE',
      partOfSpeech: 'verb',
      definition: 'To keep money for one purpose only.',
      example: 'We ring-fence £10,000 for video every year.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-ring-fence.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE BUDGET IS TIED TO SPECIFIC OUTCOMES',
      definition: 'A way to say every cost links to a clear result.',
      example: 'The budget is tied to specific outcomes, like 500 new leads.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-the-budget-is-tied-to-specific-outcomes.png',
      inAction: "Every line in this budget is tied to a specific outcome — we're not investing in awareness unless we can measure it against pipeline generation.",
      register: 'Formal — used in budget presentations and financial discussions with senior stakeholders. Signals accountability and outcome-based thinking; shows the marketing team is managing spend like a business.',
      inContext: "Riley had spent three days building the budget before the CFO review. The budget is tied to specific outcomes, she said, opening the presentation. I haven't included anything we can't measure against a business result. Every channel has a projected return, and every projection is based on last year's actual performance — not an assumption.",
      visualExamples: [
        { brand: 'Scope', context: 'Analytics SaaS — budget presentation deck', imageSlug: '/images/visual-examples/mbu-p1-scope.png', caption: 'The budget is tied to specific outcomes — £180k in paid acquisition is benchmarked against 420 qualified pipeline opportunities by end of Q3. If we hit 350, we review in September.', aspectRatio: '16/9' },
        { brand: 'Opal', context: 'Sustainable fashion brand — annual budget', imageSlug: '/images/visual-examples/mbu-p1-opal.png', caption: 'The budget is tied to specific outcomes — every line item maps to a KPI. Brand awareness spend is benchmarked against aided recall scores, not impressions.', aspectRatio: '4/3' },
        { brand: 'Atlas', context: 'Media platform — investor budget review', imageSlug: '/images/visual-examples/mbu-p1-atlas.png', caption: 'The budget is tied to specific outcomes — the content investment is tied to subscriber growth, not content volume. We are not paying for output; we are paying for audience.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'I CAN JUSTIFY EVERY LINE ITEM',
      definition: 'A way to say you have a reason for every cost.',
      example: 'Ask me anything: I can justify every line item.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-i-can-justify-every-line-item.png',
      inAction: "This isn't a wish list — I can justify every line item in this budget against a measurable outcome or a named strategic priority.",
      register: 'Neutral — used in budget defence meetings and stakeholder conversations. Signals confidence and preparation. A strong phrase to open with when you know your proposal will face scrutiny.',
      inContext: "The CFO had a reputation for cutting budgets at review. Marcus was prepared. I can justify every line item in this proposal, he said before the CFO had asked a single question. I've mapped each spend item to a specific KPI, and I have last quarter's data to show what happened when we didn't invest in these areas. The CFO sat back and listened.",
      visualExamples: [
        { brand: 'Relay', context: 'B2B comms SaaS — CFO budget meeting', imageSlug: '/images/visual-examples/mbu-p2-relay.png', caption: 'I can justify every line item — the £45k agency retainer maps directly to three product launches this year. Remove it and those launches ship without a brand strategy.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'Wellness brand — board budget review', imageSlug: '/images/visual-examples/mbu-p2-halo.png', caption: 'I can justify every line item — the influencer budget is tied to CPM benchmarks and past campaign ROAS. It is not a vanity spend; it is our most efficient acquisition channel.', aspectRatio: '4/3' },
        { brand: 'Bloom', context: 'DTC vitamins — budget debrief presentation', imageSlug: '/images/visual-examples/mbu-p2-bloom.png', caption: 'I can justify every line item — we have tagged every spend category to a customer journey stage. This is not a marketing wish list; it is a revenue plan with costs attached.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: "WHAT'S THE EXPECTED RETURN ON THIS SPEND?",
      definition: 'A question about what results the money will bring.',
      example: 'Before we approve it, what\'s the expected return on this spend?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-whats-the-expected-return-on-this-spend.png',
      inAction: "Before we approve the event sponsorship, what's the expected return on this spend — is it measured in leads, pipeline, or brand awareness?",
      register: 'Neutral — used by stakeholders, finance directors, and marketing directors to challenge budget proposals. Signals outcome-focused thinking; every spend item should have a ready answer to this question.',
      inContext: "Dana had learned to anticipate this question in every budget meeting. What's the expected return on this spend? the finance director asked, pointing to the PR line. That's a fair question, Dana said. PR has a longer attribution cycle than paid media, but in the two campaigns where we ran it last year, we saw a 23% increase in branded search in the following month. I can walk you through the methodology.",
      visualExamples: [
        { brand: 'Forge', context: 'Project management SaaS — budget approval meeting', imageSlug: '/images/visual-examples/mbu-p3-forge.png', caption: 'What is the expected return on this spend? The £60k event sponsorship should generate 80 enterprise leads at a 20% close rate — that is 16 deals at an average ACV of £18k.', aspectRatio: '16/9' },
        { brand: 'Summit', context: 'Outdoor brand — co-marketing budget meeting', imageSlug: '/images/visual-examples/mbu-p3-summit.png', caption: 'What is the expected return on this spend? The co-marketing campaign with a trail running community of 200k should drive 3,000 new email subscribers at a CAC below our paid channel average.', aspectRatio: '4/3' },
        { brand: 'Crestview', context: 'Financial firm — digital budget review', imageSlug: '/images/visual-examples/mbu-p3-crestview.png', caption: 'What is the expected return on this spend? The SEO investment takes 6 months to compound but builds an organic channel that reduces paid dependency by an estimated 35% by year two.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: "IF WE CUT THIS, HERE'S WHAT WE LOSE",
      definition: 'A way to show what happens if a budget is cut.',
      example: 'If we cut this, here\'s what we lose: half our leads.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-if-we-cut-this-heres-what-we-lose.png',
      inAction: "If we cut the content budget, here's what we lose: organic pipeline, inbound leads, and the SEO rankings we have spent 18 months building.",
      register: 'Neutral — used in budget defence conversations. Direct and analytical. Reframes a proposed cut as a business risk rather than a financial saving, which shifts the frame of the discussion.',
      inContext: "Marcus had prepared for the worst-case scenario before the review. When the CFO suggested cutting the content budget by 50%, Marcus was ready. If we cut this, here's what we lose, he said calmly. He walked through three specific outcomes: the drop in organic pipeline, the increase in paid media costs needed to compensate, and the 12-month lag before organic traffic recovers. The CFO put down her pen.",
      visualExamples: [
        { brand: 'Kite', context: 'Travel app — budget cuts review meeting', imageSlug: '/images/visual-examples/mbu-p4-kite.png', caption: 'If we cut this, here is what we lose — removing the content budget saves £28k but eliminates the channel driving 40% of our organic sign-ups. The CAC from paid will more than make up the difference.', aspectRatio: '16/9' },
        { brand: 'Paragon', context: 'Creative agency — cost review presentation', imageSlug: '/images/visual-examples/mbu-p4-paragon.png', caption: 'If we cut this, here is what we lose — the brand strategy retainer keeps us aligned across five accounts. Without it, each team runs its own interpretation and we lose consistency.', aspectRatio: '4/3' },
        { brand: 'Morrow', context: 'Luxury skincare — efficiency review', imageSlug: '/images/visual-examples/mbu-p4-morrow.png', caption: 'If we cut this, here is what we lose — the photography budget is not just asset creation; it is the reason our conversion rate is 4.2% vs a category average of 1.8%.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: "WE'RE PROPOSING A REALLOCATION, NOT AN INCREASE",
      definition: 'A way to say you want to move money, not ask for more.',
      example: 'We\'re proposing a reallocation, not an increase, from print to video.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-were-proposing-a-reallocation-not-an-increase.png',
      inAction: "We're proposing a reallocation, not an increase — we want to shift 20% from paid social into email nurturing, where the ROI is significantly stronger.",
      register: "Formal — used in budget discussions when you need to shift investment without asking for additional funding. Anticipates the stakeholder's first concern and addresses it immediately in the opening statement.",
      inContext: "Riley knew that asking for a budget increase in Q3 was unlikely to succeed. We're proposing a reallocation, not an increase, she opened. The total marketing budget stays exactly the same. But the data from the past six months shows that our highest-ROI channel — email nurturing — is currently receiving the smallest allocation. We want to fix that imbalance.",
      visualExamples: [
        { brand: 'Bloom Wild', context: 'Flower brand — budget reallocation deck', imageSlug: '/images/visual-examples/mbu-p5-bloom-wild.png', caption: 'We are proposing a reallocation, not an increase — move £35k from print to paid social and we improve attribution visibility while targeting a younger gifting audience.', aspectRatio: '16/9' },
        { brand: 'Nova', context: 'Cybersecurity SaaS — channel reallocation', imageSlug: '/images/visual-examples/mbu-p5-nova.png', caption: 'We are proposing a reallocation, not an increase — shift 25% of the events budget to LinkedIn demand gen. Same total spend, better measurability, and pipeline that does not disappear when conferences cancel.', aspectRatio: '4/3' },
        { brand: 'Folio', context: 'Personal finance app — Q2 reallocation proposal', imageSlug: '/images/visual-examples/mbu-p5-folio.png', caption: 'We are proposing a reallocation, not an increase — move budget from the underperforming display channel into email nurture. The data supports it and total budget stays flat.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: "LET'S LOOK AT THE NUMBERS TOGETHER",
      definition: 'A way to invite someone to check the data with you.',
      example: 'Let\'s look at the numbers together before we decide.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-budgets-lets-look-at-the-numbers-together.png',
      inAction: "I know the budget proposal looks ambitious at first glance — let's look at the numbers together and I'll show you exactly where the ROI projections come from.",
      register: 'Neutral — collaborative in tone, used to invite stakeholders into the data rather than defending from a distance. Reduces adversarial dynamics in budget reviews and signals transparency and confidence.',
      inContext: "The finance director had sent back the budget with a note saying the projections were 'optimistic'. Dana picked up the phone. Let's look at the numbers together, she said. I think there may be a methodology difference between how we're calculating return. Can we get 30 minutes this week? The meeting happened, the numbers were agreed, and the budget was approved.",
      visualExamples: [
        { brand: 'Arc', context: 'Subscription box — stakeholder budget review', imageSlug: '/images/visual-examples/mbu-p6-arc.png', caption: 'Let us look at the numbers together — before we cut the campaign, I want us to see the full attribution picture. Last-click makes it look like it is underperforming, but it drives 30% of conversions.', aspectRatio: '16/9' },
        { brand: 'Raft', context: 'Logistics SaaS — finance team meeting', imageSlug: '/images/visual-examples/mbu-p6-raft.png', caption: 'Let us look at the numbers together — the CFO flagged paid spend as a risk, but once we overlay the pipeline data, the ROAS tells a different story.', aspectRatio: '4/3' },
        { brand: 'Ember', context: 'Meal kits brand — budget negotiation call', imageSlug: '/images/visual-examples/mbu-p6-ember.png', caption: 'Let us look at the numbers together — I do not want us to cut anything based on a single quarter. Let me walk you through the 12-month trend before we make a decision.', aspectRatio: '1.91/1' },
      ],
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Thank you for making time. I want to walk you through the Q4 marketing budget — not just the numbers, but the rationale behind each major line. Every item in this budget is tied to a specific outcome.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Before we get into the details — what's the total ask and what's the headline [[forecast:a projection of future outcomes based on planned spend and historical data]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Total budget: £480,000. Forecast: 180 MQLs, 65 SQLs, and approximately £420,000 in pipeline. That's based on our historical conversion rates and the channel mix I've proposed.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "What's the largest single [[allocation:how the total budget is divided and assigned to different activities]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Demand generation at £216,000 — 45% of the total. Historically our highest-returning activity. Last quarter's demand gen budget generated a 5.7x [[ROI:Return on Investment — revenue generated relative to money spent]]. This quarter's target is consistent with that.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about the events line? £40,000 feels high for two events.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "I can justify every line item. Last year's event generated 23 SQLs at an average deal value of £8,500. That's £195,000 in pipeline from a £40,000 investment. Our [[cost-per-acquisition:the average amount spent to acquire one new customer, also called CPA]] through events is £1,740 — significantly lower than our paid media CPA of £3,200.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "What about the Q3 [[variance:the difference between budgeted and actual results]]? We overspent paid media by £32,000 and didn't hit the MQL target. How does that affect the Q4 plan?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The Q3 variance was driven by a platform algorithm change in October. We've already responded — we shifted 40% of the paid budget to content and email, which are lower [[cost-per-acquisition]] channels. The Q4 plan reflects that rebalancing.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Finance is asking whether we can cut the content budget by 20%. Where would we be if we made that cut?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "If we cut this, here's what we lose. Content is currently generating 45 organic MQLs per quarter at a CPA of £190 — our most efficient channel. A 20% cut reduces that to approximately 36 MQLs. We'd have to replace those 9 leads through paid at £3,200 each — which costs £28,800 to replace £16,000 of content spend. The cut makes the overall budget less efficient.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "What about the [[headroom:the amount of budget remaining available — the difference between allocated and committed spend]]? There's £18,000 left over from the cancelled trade event.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "I've ring-fenced that for content amplification — paid distribution for the top-performing organic content. If we return it now, we won't see it again until next year. Investing it in content amplification is a better use given where Q4 sits in the funnel.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What if finance still wants a cut? What's the smart place to trim?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "We're proposing a reallocation, not a cut. If there's pressure to reduce the total, I'd suggest reducing the brand awareness spend by £15,000 — that's the line with the longest payback period — and redirecting it to demand gen where we have a proven 5.7x return. We don't lose pipeline; we just delay the brand work to Q1.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's a sensible trade-off. Let's look at the numbers together one more time and I'll confirm the allocation by end of day.",
    }
  ],

  matchingExercise: [
    {
        "word": "allocation",
        "definition": "how a total budget is divided and assigned to different activities, channels, or objectives"
    },
    {
        "word": "ROI",
        "definition": "Return on Investment — revenue or value generated relative to the money spent"
    },
    {
        "word": "cost-per-acquisition",
        "definition": "the average amount spent to acquire one new customer — used to compare channel efficiency"
    },
    {
        "word": "forecast",
        "definition": "a projection of future outcomes based on planned spend and historical performance data"
    },
    {
        "word": "variance",
        "definition": "the difference between a budgeted or forecasted number and the actual result"
    },
    {
        "word": "headroom",
        "definition": "the amount of budget remaining available — the difference between allocated and committed spend"
    },
    {
        "word": "cost of inaction",
        "definition": "the revenue or growth lost by not making a particular investment"
    },
    {
        "word": "ring-fence",
        "definition": "to set aside a portion of budget for a designated purpose, protecting it from reallocation"
    }
],
  fillBlankExercise: [
    {
        "before": "Every line in this budget is ",
        "after": " specific outcomes — demand gen to pipeline, events to SQL generation, content to organic leads.",
        "answer": "tied to"
    },
    {
        "before": "I can ",
        "after": " every line item — every number has a rationale, a forecast, and a success metric attached.",
        "answer": "justify"
    },
    {
        "before": "What's the expected ",
        "after": " on this spend? The demand gen budget has generated a 5.7x return over the last three quarters.",
        "answer": "return"
    },
    {
        "before": "If we cut the content budget, here's what we ",
        "after": ": 45 organic MQLs per quarter at our most efficient cost-per-acquisition rate.",
        "answer": "lose"
    },
    {
        "before": "We're proposing a ",
        "after": ", not an increase — we want to move £30,000 from events to demand generation within the same total budget.",
        "answer": "reallocation"
    },
    {
        "before": "Let's look at the numbers ",
        "after": " — I'll walk you through the model, and if you see something that doesn't make sense, tell me.",
        "answer": "together"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What ROI does Riley cite for last quarter's demand generation budget?",
        "options": [
            "3.2x return — £3.20 generated for every £1 spent",
            "5.7x return — consistent with the Q4 forecast",
            "8.5x return — the highest-returning channel in the portfolio"
        ],
        "correctIndex": 1
    },
    {
        "question": "What caused the Q3 variance in the paid media budget?",
        "options": [
            "The events were cancelled and the budget was not reallocated",
            "A platform algorithm change in October that reduced paid media performance",
            "The finance team reduced the paid budget mid-quarter"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Riley argue against the 20% content budget cut?",
        "options": [
            "Content is the hardest channel to restart once it has been cut",
            "The 9 lost MQLs would cost £28,800 to replace through paid — more than the £16,000 saved",
            "The content team has already committed to deliverables for Q4"
        ],
        "correctIndex": 1
    },
    {
        "question": "If a total budget reduction is required, what does Riley propose?",
        "options": [
            "Reduce events budget by £15,000 and cut the content amplification programme",
            "Return the £18,000 headroom from the cancelled event to finance",
            "Reduce brand awareness spend by £15,000 and redirect it to demand generation"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Have you ever had to ask for budget approval at work — for a campaign, an event, a tool, or a hire? What was the hardest part of the conversation? What worked, and what didn't?",
        "When you hear that the marketing budget has been cut, what's your instinct — which activities do you protect first and which would you cut? What does that tell you about what you value?",
        "If you had to explain to a non-marketer why content marketing is worth investing in, what would you say? How would you put a number on its value?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Every item in a well-built budget _____ tied to a specific, measurable outcome.",
            "options": [
                "should be",
                "should",
                "is should"
            ],
            "correctIndex": 0,
            "explanation": "'Should be' is correct — 'should' is a modal verb and must be followed by the base form of 'be' (not 'should is' or 'should are'). 'Should be tied to' means 'it is recommended / expected that every item is tied'. 'Should' alone cannot end the predicate here — it needs a following verb. 'Is should' is ungrammatical — a modal verb cannot follow a present tense auxiliary in this way. Structure: subject + should + base verb: 'should be', 'should include', 'should reflect'."
        },
        {
            "sentence": "A cost-per-acquisition of £190 is significantly _____ than the paid media CPA of £3,200.",
            "options": [
                "lower",
                "lowest",
                "low"
            ],
            "correctIndex": 0,
            "explanation": "'Lower' is the comparative adjective — used to compare two things. 'Significantly lower than' compares the content CPA (£190) with the paid media CPA (£3,200). 'Lowest' is the superlative — used when comparing three or more items to identify the one at the extreme: 'our lowest CPA channel'. 'Low' is the base adjective — used without comparison ('the CPA is low'). When comparing two specific values, always use the comparative form (-er or 'more + adjective'): lower, higher, more efficient, more expensive."
        },
        {
            "sentence": "If we _____ the content budget, we lose approximately 9 organic MQLs per quarter.",
            "options": [
                "cut",
                "will cut",
                "cutting"
            ],
            "correctIndex": 0,
            "explanation": "In a first conditional (real, likely scenario), the if-clause uses present simple and the main clause uses 'will'. 'If we cut' (present simple in the if-clause) is correct. 'If we will cut' is the most common error — 'will' is not used in the if-clause of a first conditional in standard English. 'If we cutting' is ungrammatical — the if-clause needs a subject + main verb, not a participle. The structure: If + present simple, will + base verb."
        },
        {
            "sentence": "The variance _____ driven by a platform algorithm change that affected performance in October.",
            "options": [
                "was",
                "were",
                "is"
            ],
            "correctIndex": 0,
            "explanation": "'Was' is correct — 'the variance' is singular and the sentence describes a completed past event. 'The variance was driven by' is past simple passive: the variance (subject) was (auxiliary) driven by (past participle) the algorithm change (agent). 'Were' is the plural past form: 'the results were driven by...' 'Is' (present simple) would be used to describe a current or ongoing situation, not a past event. When reporting what happened in a previous period, use simple past ('was', 'were')."
        },
        {
            "sentence": "We should ring-fence the product launch budget _____ it competes with other priorities during a difficult quarter.",
            "options": [
                "so that it doesn't",
                "so it won't",
                "in case"
            ],
            "correctIndex": 2,
            "explanation": "'In case' is the correct conjunction here — 'ring-fence it in case it competes' means 'as a precaution against the possibility that it might compete'. 'In case' introduces a precautionary action. 'So that it doesn't' would mean the ring-fencing is the direct prevention ('we ring-fence it so that it doesn't compete') — which is also grammatically possible, but changes the logical flow: 'so that' describes the intended result, while 'in case' describes the precaution. 'So it won't' is similar to 'so that' — it works but is less formal. In professional budget language, 'in case X happens' is the natural phrasing for precautionary financial decisions."
        },
        {
            "sentence": "The cost of _____ investing in content now is £272,000 in missed pipeline over the next year.",
            "options": [
                "not",
                "no",
                "never"
            ],
            "correctIndex": 0,
            "explanation": "'Not' is correct — 'the cost of not investing' is the standard phrase for expressing the cost of inaction. 'Not + gerund' (not investing, not acting, not spending) is the grammatical form for negating a verbal noun in a prepositional phrase: 'the risk of not deciding', 'the benefit of not waiting'. 'No' is used as a determiner before a noun ('no investment', 'no plan') or as a standalone negative ('no'). 'Never' is an adverb of frequency ('we never invest in this') — it cannot be placed before a gerund in this structure."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the finance director or senior leader says. Choose the best professional response.",
        "items": [
            {
                "customerLine": "Marketing feels like a cost centre, not a revenue driver. Why should we protect your budget when sales is where the revenue actually comes from?",
                "options": [
                    "Marketing and sales are different functions with different goals. It's not a fair comparison.",
                    "I understand the perception, and I want to address it directly with data. Our demand generation activities last quarter generated £680,000 in pipeline — pipeline that the sales team then closed. Without the inbound leads from marketing, the sales team would have to source all their own pipeline cold. The CPA through inbound is £340 versus £1,800 for outbound. Marketing is already contributing to revenue — the question is whether we measure it correctly.",
                    "We should absolutely be measured on revenue contribution. Let's set up a shared attribution model between marketing and sales so the contribution is visible."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the best answer — it takes the challenge seriously, doesn't get defensive, and responds immediately with specific data that directly addresses the claim. It reframes the conversation: the question is not 'is marketing valuable?' but 'are we measuring it correctly?' It also quantifies the cost advantage of inbound over outbound, which is a compelling financial argument. Option A is defensive and unhelpful — comparing functions is exactly what the questioner is doing, so declining the comparison doesn't answer it. Option C proposes a process change but doesn't address the immediate challenge with data — which is what the moment requires."
            },
            {
                "customerLine": "We need to cut 20% from the marketing budget for the rest of the quarter. Where would you cut?",
                "options": [
                    "I'd need to go away and model it before I can answer that responsibly. Can I come back to you with an analysis tomorrow?",
                    "Before I answer that, can I show you the cost-of-inaction for each major line? I want to make sure we're cutting in a way that minimises the revenue impact — not just the spend. If you're open to it, I have a model here that shows the pipeline impact of cutting each major line by 20%. The options with the lowest impact on pipeline are brand awareness and events. Demand generation and content are our highest-return channels — cutting those costs more in revenue than it saves in spend.",
                    "20% is too much — it would be impossible to hit our pipeline targets with that level of cut."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it doesn't refuse the request, but it immediately reframes the conversation around the right question: what does a cut cost in revenue terms? This is the 'cost of inaction' framework applied to budget cuts. By walking through the model, it turns a budget cut discussion into a trade-off discussion where the decision-maker can see the consequences clearly. Option A is too slow — asking for a day when the decision is urgent is unhelpful. Option C refuses the request with a claim ('impossible') rather than engaging constructively — this is likely to make the leader less sympathetic, not more."
            },
            {
                "customerLine": "You forecast £420,000 in pipeline last quarter and delivered £290,000. That's a big gap. How can I trust the Q4 forecast?",
                "options": [
                    "The Q3 shortfall was caused by external factors that are now resolved. Q4 will be different.",
                    "That's a fair challenge. Let me explain the Q3 gap and then show you what's changed. The shortfall was driven by the paid media algorithm change — we've addressed that by shifting spend to content and email, which are less exposed to platform risk. I've also built a 15% conservative buffer into the Q4 forecast and flagged the assumptions clearly. I won't tell you the forecast is guaranteed — no forecast is. But I can show you why I believe Q4 is more robust than Q3 was.",
                    "The Q3 number was affected by seasonality. Marketing always underperforms in Q3. Q4 is historically our strongest quarter."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it acknowledges the gap directly (no defensiveness), explains what caused it with specificity, explains what has changed, and is honest about the limitations of forecasting. This builds credibility far more than explaining it away. A leader who hears a clear explanation of what went wrong and a specific set of changes made in response is far more likely to trust the next forecast. Option A is vague ('external factors', 'will be different') without actually explaining what changed. Option C introduces seasonality as an explanation without data — it sounds like excuse-making."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the budget presentation extract. Three lines have a grammar mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Every line in this budget is tied to a specific, measurable outcome — nothing has been included without a clear rationale."
            },
            {
                "speaker": "Marcus",
                "text": "The demand generation budget generated a return of 5.7 times in Q3, which is significantly more higher than the brand awareness channel."
            },
            {
                "speaker": "Dana",
                "text": "If we will cut the content budget, we lose approximately 45 organic MQLs per quarter — our most efficient source of leads."
            },
            {
                "speaker": "Riley",
                "text": "The Q3 variance was driven by a platform algorithm change that we've already addressed by rebalancing the channel mix."
            },
            {
                "speaker": "Marcus",
                "text": "We are proposing a reallocation — we want to move £30,000 from the events line to demand generation, which has a proved track record of higher return."
            },
            {
                "speaker": "Dana",
                "text": "Ring-fencing the product launch budget now protects it from being cut if the quarter becomes difficult."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "more higher",
                "correction": "higher",
                "explanation": "'More higher' is a double comparative — using 'more' and the '-er' ending at the same time, which is not correct. In English, comparatives use one or the other: 'more expensive' OR 'higher' — never both together. The correct word here is simply 'higher'."
            },
            {
                "lineIndex": 2,
                "incorrectText": "If we will cut",
                "correction": "If we cut",
                "explanation": "In a conditional sentence ('if this happens, that will happen'), the if-clause uses present simple — not 'will'. 'If we will cut' is incorrect. It should be 'If we cut'. The 'will' goes in the result part: 'If we cut the content budget, we will lose 45 MQLs.'"
            },
            {
                "lineIndex": 4,
                "incorrectText": "proved track record",
                "correction": "proven track record",
                "explanation": "'Proven track record' is the correct fixed expression. 'Proven' is used here as an adjective meaning something that has been shown to work. While 'proved' is the past tense of 'prove', the adjective form used in set phrases like 'track record', 'method', and 'formula' is always 'proven': 'a proven system', 'a proven approach'."
            }
        ]
    },
    finishTheLine: {
      instructions: 'The finance director has just challenged your budget. Finish the marketer response using the language from this lesson.',
      items: [
        {
          customerLine: 'We need to cut 15% from the marketing budget next quarter. Where would you cut first?',
          salespersonStart: 'Before I answer that, let me show you what each cut costs in pipeline terms — because if we cut the wrong line,',
          suggestedCompletion: 'we lose more in revenue than we save in spend. The safest cut is brand awareness, not demand generation.',
        },
        {
          customerLine: 'What return are we actually getting from the content programme?',
          salespersonStart: 'Content is generating 45 organic MQLs per quarter at a cost-per-acquisition of £190 — which means',
          suggestedCompletion: 'it is our most efficient channel by CPA, nearly half the cost of paid media for the same result.',
        },
        {
          customerLine: "I'm not sure this budget is realistic. What happens if we don't hit the pipeline forecast?",
          salespersonStart: "I've built a 15% buffer into the forecast and I can walk you through the assumptions — but if it helps,",
          suggestedCompletion: "let's look at the numbers together now so you can see exactly where the risk sits.",
        },
        {
          customerLine: 'Why should we increase the events budget when Q3 performance was below target?',
          salespersonStart: "That's a fair challenge. The Q3 shortfall was driven by one underperforming event, not the programme overall — and I can justify every line item",
          suggestedCompletion: "with data showing which events returned pipeline and which ones we've already removed from the Q4 plan.",
        },
      ],
    },
  },
};
