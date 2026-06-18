import { Lesson } from '@/types/lesson';

export const dataDrivenSalesLanguage: Lesson = {
  slug: 'data-driven-sales-language',
  title: 'Data-Driven Sales Language',
  subtitle: 'How to use metrics, ROI, conversion, and retention data to build a credible, evidence-based sales conversation',
  level: 'C1-C2',
  description: "The most persuasive sales conversations in B2B are not driven by enthusiasm — they are driven by evidence. When you can quantify the problem, benchmark the current state, present the improvement with attribution, and model the ROI, you shift the conversation from 'this sounds good' to 'the numbers make this decision straightforward.' This lesson teaches you the language of data-driven selling: how to present metrics with authority, frame ROI precisely, explain conversion and retention performance, and defend your analysis under scrutiny.",
  heroImage: '/images/data-driven-sales-language-hero.png',

  vocabulary: [
    {
      word: 'METRICS',
      partOfSpeech: 'noun',
      definition: 'Quantifiable measures used to assess performance. In a sales context, key metrics include conversion rate, deal velocity, average contract value, pipeline coverage, and net revenue retention. A sophisticated salesperson chooses which metrics to present based on what the buyer cares about — not just what looks impressive.',
      example: "Riley opened the review: Rather than walking you through a general summary, I've chosen four metrics that map directly to your board's stated priorities — conversion, retention, deal velocity, and ROI. Everything else is context. These four tell the story.",
      imageSlug: '/images/metrics.png',
    },
    {
      word: 'ROI',
      partOfSpeech: 'abbreviation',
      definition: "Return on investment — the financial benefit gained relative to cost, expressed as a ratio or percentage. 'The ROI is 3.5x' means the investment returned 3.5 times its cost. A rigorous ROI case distinguishes between direct revenue impact, cost savings, and indirect benefits — and is transparent about what is and isn't included in the calculation.",
      example: "Riley said: The platform costs $420,000 annually. The improvement in conversion added $1.1 million in incremental closed revenue. The improvement in retention saved $380,000 in churn revenue loss. Total attributable value: $1.48 million. The ROI is 3.5x on direct revenue impact alone — I'm not including the productivity and morale effects, which would make the case even stronger.",
      imageSlug: '/images/roi.png',
    },
    {
      word: 'CONVERSION',
      partOfSpeech: 'noun',
      definition: 'The process of moving a prospect from one stage to the next in the sales funnel — most commonly, from lead to customer. The conversion rate is the percentage of prospects who make that transition. Conversion is usually measured at multiple stages: lead to qualified, qualified to demo, demo to proposal, proposal to close.',
      example: "Riley presented the conversion data: Twelve months ago, your SDR-to-demo conversion rate was 18% — five points below the industry benchmark of 23%. It's now 31%. That's a 13-point improvement and eight points above benchmark. More importantly, the time-to-demo dropped from eleven days to six, which means prospects are warmer when they arrive.",
      imageSlug: '/images/conversion.png',
    },
    {
      word: 'RETENTION',
      partOfSpeech: 'noun',
      definition: 'The ability to keep customers and their revenue over time. Measured by renewal rate, churn rate, and net revenue retention (NRR). NRR above 100% means expansion revenue from existing customers exceeds revenue lost to churn — a signal of strong product-market fit and customer health.',
      example: "Riley said: Your net revenue retention twelve months ago was 91% — which means you were losing value on your existing base every year. It's now 108%. You've crossed from a business that shrinks on renewals to one that actively grows them. That shift in the underlying economics changes the entire value story of the platform.",
      imageSlug: '/images/retention.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: "A standard reference point against which performance is measured. In sales analytics, benchmarks are typically drawn from industry data, competitor performance, or historical baseline. 'Benchmarking against' means comparing your current metrics to the reference point to assess relative performance.",
      example: "Riley used benchmarking to contextualise the data: A 31% SDR-to-demo conversion rate is meaningful in isolation — but what makes it compelling is that the industry benchmark for your segment is 23%. You're not just improving. You're outperforming. That's a distinction that matters when your board asks how you compare to peers.",
      imageSlug: '/images/benchmark.png',
    },
    {
      word: 'PIPELINE COVERAGE',
      partOfSpeech: 'noun',
      definition: "The ratio of total pipeline value to quota or revenue target. A coverage ratio of 3x means you have three times your target in the pipeline — which gives you a statistical buffer for deals that slip or don't close. Industry standard is typically 3–4x coverage for a healthy pipeline.",
      example: 'Riley said: Your pipeline coverage twelve months ago was 1.8x — which is dangerously thin. You were essentially betting on nearly everything in the pipeline to close. Coverage is now 3.2x, which is in line with best practice and gives the team real security in their quarterly planning.',
      imageSlug: '/images/pipeline-coverage.png',
    },
    {
      word: 'CHURN',
      partOfSpeech: 'noun',
      definition: 'The rate at which customers stop using a product or cancel their subscription — the inverse of retention. Churn is typically expressed as a percentage of customers or revenue lost over a given period. High churn signals product, onboarding, or fit problems; reducing churn is almost always more economical than acquiring new customers.',
      example: 'Riley explained what was driving the early churn: The data shows that customers who did not complete the first 30 days of onboarding churned at 3.4 times the rate of those who did. The onboarding completion rate went from 54% to 89% — and churn dropped in direct proportion. The root cause was never product satisfaction. It was activation failure.',
      imageSlug: '/images/churn.png',
    },
    {
      word: 'ATTRIBUTION',
      partOfSpeech: 'noun',
      definition: "The process of identifying which activities, channels, or interventions are responsible for generating a specific result. Attribution methodology is critical when making an ROI case — 'correlation is not causation', and a credible attribution model isolates the variable being measured from other factors that may also have changed.",
      example: "Marcus challenged the numbers: How confident are you in the attribution — could these improvements have happened anyway? Riley replied: The attribution methodology compares teams who used the platform consistently against those who didn't within the same organisation. That controls for market conditions, leadership, and product changes. The difference is statistically significant. This is a controlled comparison, not a correlation.",
      imageSlug: '/images/attribution.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE DATA SUGGESTS THAT...',
      definition: "The standard phrase for presenting data-backed conclusions in a professional context. 'Suggests' is deliberately chosen over 'shows' or 'proves' — it signals appropriate epistemic humility while still asserting confidence. Sophisticated analysts use 'suggests' because data rarely proves causation — it suggests it.",
      example: "Riley said: The data suggests that the primary driver of churn in the first twelve months was onboarding failure — not product dissatisfaction. The correlation between 30-day completion rates and 12-month renewal rates is strong enough to be actionable, even if we can't prove strict causality.",
      imageSlug: '/images/the-data-suggests-that.png',
    },
    {
      phrase: 'WHEN WE BENCHMARK THIS AGAINST...',
      definition: "The phrase for introducing a comparative analysis — positioning your metric against an industry standard, a competitor, or a historical baseline. Benchmarking transforms a raw number into a meaningful judgement: not 'our conversion rate is 31%' but 'our conversion rate is 31%, which is eight points above the industry benchmark.'",
      example: "Riley said: When we benchmark your net revenue retention against the industry average for SaaS platforms at your revenue tier, the picture becomes very clear. Industry average is 105%. You were at 91%. You are now at 108%. You've moved from bottom quartile to top quartile in twelve months. That is a fundamental shift.",
      imageSlug: '/images/when-we-benchmark-this-against.png',
    },
    {
      phrase: 'THE ROI CASE IS STRAIGHTFORWARD — LET ME WALK YOU THROUGH IT',
      definition: "The phrase for transitioning into a quantified value presentation. 'Straightforward' signals confidence; 'let me walk you through it' signals transparency. The phrase sets the expectation that the numbers will speak clearly, without obfuscation.",
      example: "Marcus said: Give me the ROI case plainly. Riley replied: The ROI case is straightforward — let me walk you through it. The platform costs $420,000 annually. The measurable improvement in conversion and retention attributable to the platform generated $1.48 million in incremental and protected revenue. That's a 3.5x return. I can break down each component if you want to interrogate any of the numbers.",
      imageSlug: '/images/the-roi-case-is-straightforward--let-me-walk-you-through-it.png',
    },
    {
      phrase: "WHAT'S DRIVING THE [METRIC] IS...",
      definition: "The diagnostic phrase for explaining why a metric has moved — either positively or negatively. 'What's driving' frames the explanation as a causal analysis rather than a simple description. It signals that you have looked beneath the surface of the number.",
      example: "Marcus asked: What was driving the churn originally? Riley replied: What was driving the churn was onboarding failure — specifically, customers who didn't complete the first 30 days of the platform churned at 3.4x the rate of those who did. Once your CS team fixed activation rates, the churn pattern changed almost immediately.",
      imageSlug: '/images/whats-driving-the-metric-is.png',
    },
    {
      phrase: 'IF WE IMPROVE [METRIC] BY [X], THE IMPACT ON REVENUE IS...',
      definition: 'The modelling phrase — used to quantify the value of a specific performance improvement. It translates a metric into a revenue figure, which is what most B2B buyers ultimately care about. Effective data-driven sellers can model the revenue impact of any metric improvement in real time.',
      example: "Riley modelled the year-two opportunity: If we improve your proposal-to-close conversion from 28% to 35% — which is achievable based on what we've seen in comparable teams — the impact on annual revenue is approximately $900,000 at your current pipeline volume. That's the opportunity we're targeting in year two.",
      imageSlug: '/images/if-we-improve-metric-by-x-the-impact-on-revenue-is.png',
    },
    {
      phrase: 'THIS IS A CONTROLLED COMPARISON, NOT A CORRELATION',
      definition: "The phrase for defending the rigour of an attribution methodology. 'Correlation is not causation' is a common objection to data-driven claims — this phrase pre-empts it by explaining that the analysis accounts for confounding variables. Used when an investor or buyer challenges the robustness of the data.",
      example: "Marcus pressed: Could the improvement have happened without the platform? Riley said: That's the right question — and I anticipated it. The attribution methodology compares high-usage and low-usage cohorts within the same organisation, in the same market, with the same leadership. The difference is statistically significant. This is a controlled comparison, not a correlation.",
      imageSlug: '/images/this-is-a-controlled-comparison-not-a-correlation.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, before we discuss renewal, I want to understand what we've actually gotten from the platform this year. Our board is asking the same question — so I need the numbers, not the narrative.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's exactly the right question — and I've put together a performance summary that covers the [[metrics:quantifiable measures of performance — conversion, retention, deal velocity, and ROI]] that matter most to a team your size. Let me start with [[conversion:the process of moving a prospect through each stage of the funnel — measured as a percentage at each transition]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Please do.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "When you onboarded twelve months ago, your SDR-to-demo conversion rate was 18%. The industry [[benchmark:a standard reference point used to measure performance against peers or historical data]] for your segment is 23%. As of last month, your conversion rate is 31% — eight percentage points above benchmark. That's not a marginal improvement — that's a structural shift.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is a significant movement. What's driving it?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Two factors. First, your team's qualification discipline improved — the platform's coaching content on BANT qualification had a measurable effect. Second, average time from first contact to demo dropped from eleven days to six. Prospects are warmer by the time they reach the demo stage, which directly affects conversion at that step.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Good. What about [[retention:the ability to keep customers and their revenue over time — measured by renewal rate, churn rate, and net revenue retention]]? Our board is particularly focused on [[churn:the rate at which customers cancel or do not renew — the inverse of retention]] right now.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Your net revenue retention twelve months ago was 91% — below the industry average of 105% for your sector. It's now 108%. You've crossed from losing value on renewals to actively growing them. That shift in the underlying economics is the most significant result in the whole data set.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What was driving the churn previously?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The data [[attribution:the process of identifying which activities or interventions are responsible for generating a specific result]]s the early churn primarily to onboarding failure. Customers who didn't complete the first 30 days of the platform churned at 3.4 times the rate of those who did. Your CS team used the platform's onboarding module to address that directly — the 30-day completion rate went from 54% to 89% in two quarters.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Give me the [[ROI:return on investment — the financial benefit gained relative to cost, expressed as a ratio or percentage]] case plainly.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Straightforward. The platform costs $420,000 annually. The improvement in conversion added $1.1 million in incremental closed revenue. The improvement in retention reduced churn revenue loss by $380,000. Total attributable value: $1.48 million. The ROI is 3.5x on direct revenue impact alone — I'm not including productivity or morale effects.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Those are strong numbers. How confident are you in the attribution — could these improvements have occurred without the platform?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I anticipated that question. The attribution methodology isolates the platform's impact by comparing high-usage teams against low-usage teams within your own organisation — same market, same leadership, same product. The performance difference between cohorts is statistically significant. This is a controlled comparison, not a correlation.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's a rigorous approach. What do the projections look like for year two, if we renew?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "When we benchmark against customers at your current maturity level, year two typically produces a 40% improvement in deal velocity and a further 8–10 percentage point gain in net revenue retention. If we improve your proposal-to-close conversion by just 7 points — achievable based on comparable teams — the impact on revenue is approximately $900,000 at current pipeline volume. I'll send the cohort data so you can interrogate the assumptions yourself.",
    }
  ],

  matchingExercise: [
    {
        "word": "metrics",
        "definition": "quantifiable measures used to assess sales performance — conversion, retention, deal velocity, pipeline coverage"
    },
    {
        "word": "ROI",
        "definition": "the financial benefit gained relative to cost — expressed as a ratio or percentage"
    },
    {
        "word": "conversion",
        "definition": "the process of moving a prospect through each stage of the sales funnel — measured as a percentage at each stage"
    },
    {
        "word": "retention",
        "definition": "the ability to keep customers and their revenue over time — measured by renewal rate and net revenue retention"
    },
    {
        "word": "benchmark",
        "definition": "a standard reference point used to measure performance against peers or historical data"
    },
    {
        "word": "pipeline coverage",
        "definition": "the ratio of total pipeline value to quota — a 3x ratio means three times the target in the pipeline"
    },
    {
        "word": "churn",
        "definition": "the rate at which customers cancel or do not renew — the inverse of retention"
    },
    {
        "word": "attribution",
        "definition": "the process of identifying which activities or interventions are responsible for generating a specific result"
    }
],
  fillBlankExercise: [
    {
        "before": "When we ",
        "after": " this against the industry average of 23%, a conversion rate of 31% places you in the top quartile for your segment.",
        "answer": "benchmark"
    },
    {
        "before": "The data ",
        "after": "s the early churn primarily to onboarding failure — customers who didn't complete day 30 churned at 3.4x the rate of those who did.",
        "answer": "attribute"
    },
    {
        "before": "Your net revenue ",
        "after": " has moved from 91% to 108% — you've crossed from losing value on renewals to actively growing them.",
        "answer": "retention"
    },
    {
        "before": "The ",
        "after": " case is straightforward — $420,000 in platform cost against $1.48 million in attributable revenue impact.",
        "answer": "ROI"
    },
    {
        "before": "The ",
        "after": " at proposal stage improved by seven percentage points once the team completed the objection-handling module.",
        "answer": "conversion"
    },
    {
        "before": "Our pipeline ",
        "after": " ratio has improved from 1.8x to 3.2x — the team now has a genuine statistical buffer for deals that slip.",
        "answer": "coverage"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What was the company's SDR-to-demo conversion rate twelve months ago, and what is it now?",
        "options": [
            "15% then, 28% now",
            "18% then, 31% now",
            "21% then, 34% now"
        ],
        "correctIndex": 1
    },
    {
        "question": "What did the data identify as the primary driver of early churn?",
        "options": [
            "Poor product-market fit",
            "Weak account management after the sale",
            "Onboarding failure — customers who did not complete the first 30 days"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the ROI Riley presents for the platform, based on direct revenue impact?",
        "options": [
            "2.5x",
            "3.5x",
            "4x"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley defend the attribution methodology against the suggestion that improvements might have happened without the platform?",
        "options": [
            "By citing industry research and third-party validation",
            "By comparing high-usage and low-usage cohorts within the same organisation",
            "By showing that no other changes were made to the team during the same period"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "When you make a business decision, how much do you rely on data versus instinct or experience? Has that balance changed over your career — and if so, what changed it?",
        "Have you ever been in a meeting where someone challenged your view with data — either to support you or to disprove what you were saying? How did you respond, and what did you learn from it?",
        "Think about a metric you track regularly in your work. What does it tell you about performance — and what does it not tell you? What's missing from the picture?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Our conversion rate has _____ by thirteen percentage points since we implemented the new qualification process.",
            "options": [
                "raised",
                "risen",
                "arisen"
            ],
            "correctIndex": 1,
            "explanation": "'Rise' is intransitive — it does not take a direct object. The conversion rate rises on its own. 'Raise' is transitive — you raise something: 'we raised the conversion rate'. So: 'the conversion rate has risen' (it moved by itself) versus 'we raised the conversion rate' (we caused it to move). 'Arisen' is the past participle of 'arise', which means to come into existence or emerge — not to increase. This raise/rise distinction is one of the most persistent C1-C2 level errors."
        },
        {
            "sentence": "The data _____ that the improvement in retention is primarily attributable to better onboarding completion rates.",
            "options": [
                "suggest",
                "suggests",
                "is suggesting"
            ],
            "correctIndex": 1,
            "explanation": "'Data' is grammatically singular as a collective noun in formal business and academic English — 'the data suggests', 'the data indicates', 'the data shows'. In informal usage, 'data' is sometimes treated as plural ('the data suggest'), which is also acceptable at C1-C2 level. However, in formal business presentations, singular agreement is the more precise and professional standard. 'Is suggesting' (present continuous) is not wrong but implies a temporary or developing situation — present simple is more appropriate for stating a consistent finding."
        },
        {
            "sentence": "The early churn is primarily _____ onboarding failure — not product dissatisfaction.",
            "options": [
                "attributed to",
                "attributing to",
                "attributable for"
            ],
            "correctIndex": 0,
            "explanation": "'Attributed to' is the correct passive construction — 'the churn is attributed to X' means X has been identified as the cause. 'Attributing to' is the active present participle form, which cannot follow the verb 'is' in this passive structure. 'Attributable for' is incorrect — the correct preposition is always 'attributable to', not 'for'. Both 'attributed to' (passive) and 'attributable to' (adjective) use 'to' — never 'for'."
        },
        {
            "sentence": "When we benchmark our performance _____ the industry average, the improvement becomes significantly more compelling.",
            "options": [
                "with",
                "against",
                "to"
            ],
            "correctIndex": 1,
            "explanation": "'Benchmark against' is the fixed phrase — you benchmark one thing against another reference point. 'Against' signals comparison and contrast. 'Benchmark with' is non-standard. 'Benchmark to' is sometimes used informally but is less precise. The correct formal phrase is always 'benchmark against': 'compare against', 'measure against', 'benchmark against industry average'. These comparison phrases all take 'against'."
        },
        {
            "sentence": "If we improve deal velocity by 40%, the impact on quarterly revenue _____ approximately $900,000 at current pipeline volume.",
            "options": [
                "will be",
                "would be",
                "is"
            ],
            "correctIndex": 1,
            "explanation": "'Would be' (second conditional) is correct — this is a hypothetical improvement, not a certain or current one. 'If we improve... the impact would be' models a conditional scenario. 'Will be' (first conditional) implies the improvement is highly likely or already decided — which overstates the certainty. 'Is' (present simple) treats the hypothetical as a current fact, which is misleading. In financial modelling language, hypothetical scenarios always use 'would': 'if X happens, the impact would be Y'."
        },
        {
            "sentence": "The attribution methodology _____ the platform's impact by comparing high-usage and low-usage cohorts within the same organisation.",
            "options": [
                "isolates",
                "isolated",
                "is isolating"
            ],
            "correctIndex": 0,
            "explanation": "'Isolates' (present simple) is correct because this describes a designed, ongoing feature of the methodology — it is always the case that this methodology works this way. 'Isolated' (past simple) would suggest the methodology was applied once in the past. 'Is isolating' (present continuous) implies a temporary action rather than a permanent characteristic of the analytical approach. For describing how a system or methodology functions in general, present simple is the correct tense."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the buyer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "These numbers look impressive, but how do I know this performance wasn't driven by market conditions rather than your platform?",
                "options": [
                    "That's a fair challenge — and the attribution methodology accounts for it directly. The comparison is between high-usage and low-usage teams within your own organisation — same market, same quarter, same leadership. The only variable is platform usage. The performance gap between cohorts is 14 percentage points on conversion. Market conditions affect both cohorts equally, so they don't explain the gap.",
                    "These results have been independently verified by a third-party analyst, so we're confident in the methodology.",
                    "The platform's impact is well established across hundreds of customers — so we're confident that market conditions are not the primary driver."
                ],
                "correctIndex": 0,
                "explanation": "Option A is the only response that directly addresses the specific objection — market conditions — and explains precisely how the methodology controls for it. It gives the mechanism (within-organisation comparison), the control variable (same market, same quarter), and a specific data point (14-percentage-point gap). Option B cites third-party verification without explaining anything — which sounds defensive. Option C deflects with scale ('hundreds of customers') rather than addressing the methodological question."
            },
            {
                "customerLine": "Our board will ask: what do we attribute the churn reduction to — is it the platform, or did our customer success team just get better?",
                "options": [
                    "Both contributed — and that's actually the point. The platform is what enabled the CS team to perform better. The 30-day onboarding completion rate went from 54% to 89% because the CS team used the platform's onboarding module. Separating the platform from the team that used it is the wrong framing — the combined effect is what produces the 3.4x difference in churn rate between those who completed onboarding and those who didn't.",
                    "The platform is the primary driver — the CS team was doing the same work before, just without the right tools.",
                    "It's difficult to separate these factors, which is why we prefer to look at the overall result rather than attribute individual contributions."
                ],
                "correctIndex": 0,
                "explanation": "Option A reframes the attribution question without being defensive — it acknowledges both factors, explains the mechanism linking them, and provides a specific data point (3.4x churn difference). This is sophisticated data-driven communication: not 'it was us' or 'it was them', but an honest account of how the intervention produced the result. Option B claims primary credit without evidence, which invites further challenge. Option C avoids the question entirely — which a board will not accept."
            },
            {
                "customerLine": "Your ROI model shows 3.5x return. How should I present that to my CFO, who is sceptical of vendor-provided ROI calculations?",
                "options": [
                    "I'd suggest presenting the model with the underlying assumptions visible — not just the 3.5x headline. Show the CFO the three components: $1.1M in conversion uplift, $380K in reduced churn, and the $420K cost. Then invite them to challenge any assumption. A CFO who stress-tests the model and still arrives at 2.5x is more convinced than one who just sees a headline number and dismisses it as marketing.",
                    "You could simply refer them to our case studies — other CFOs have accepted the ROI methodology.",
                    "The 3.5x figure is conservative — the actual ROI including indirect benefits is likely higher. You could present the broader case."
                ],
                "correctIndex": 0,
                "explanation": "Option A demonstrates genuine commercial intelligence — it advises the buyer to present the model in a way that survives scrutiny rather than obscuring the assumptions. Inviting the CFO to challenge the model is a power move: it signals confidence and transforms scepticism into engagement. Option B asks the buyer to rely on social proof rather than reasoning, which won't satisfy a sceptical CFO. Option C suggests inflating the number, which is precisely the wrong approach with a sceptical finance audience."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the sales performance review conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Our conversion rate has raised by thirteen percentage points since we implemented the new qualification process."
            },
            {
                "speaker": "Marcus",
                "text": "That's a significant improvement. What's driving it?"
            },
            {
                "speaker": "Riley",
                "text": "Better lead qualification at the top of the funnel. The drop in time-to-demo — from eleven days to six — has also had a measurable effect."
            },
            {
                "speaker": "Marcus",
                "text": "And what does the data tell us about the early churn we saw in Q1?"
            },
            {
                "speaker": "Riley",
                "text": "The early churn is primarily attribute to onboarding failure — customers who didn't complete the first 30 days churned at 3.4x the rate of those who did."
            },
            {
                "speaker": "Riley",
                "text": "The problem lays in activation, not satisfaction — and once your CS team fixed activation rates, churn dropped in direct proportion."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "has raised",
                "correction": "has risen",
                "explanation": "'Rise' is intransitive — it does not take a direct object and describes something moving upward on its own: the rate rises, the number rises, the temperature rises. 'Raise' is transitive — you raise something: 'we raised our prices', 'they raised the target'. The conversion rate is not something you raise directly in this sentence — it rose as a result of the intervention. So: 'the rate has risen' (intransitive). 'The rate has raised' is incorrect because 'raise' needs an object."
            },
            {
                "lineIndex": 4,
                "incorrectText": "primarily attribute to",
                "correction": "primarily attributed to",
                "explanation": "This is a passive construction — 'the churn is attributed to X'. In the passive voice, the past participle is required: 'attributed', not 'attribute'. 'The churn is attribute to' uses the base verb form where the past participle is needed. Compare: 'the success is attributed to better onboarding', 'the delay was attributed to a systems error', 'the improvement is attributed to consistent platform usage'. Always: is/was/are/were + past participle in passive constructions."
            },
            {
                "lineIndex": 5,
                "incorrectText": "lays",
                "correction": "lies",
                "explanation": "'Lie' (intransitive) means to be located or situated somewhere — 'the problem lies in activation'. 'Lay' (transitive) means to place something down — 'lay the contract on the table'. In the present tense: 'it lies here' vs 'I lay it here'. 'Lays' is the third-person singular of 'lay' (transitive) — it needs an object: 'she lays the document on the desk'. Without an object, the correct verb is 'lies': 'the issue lies in the onboarding process', 'the challenge lies in attribution'. This lie/lay confusion is one of the most persistent errors in sophisticated English."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally, using precise data-driven language.",
        "items": [
            {
                "customerLine": "Our board is going to ask: what's the evidence that the platform actually caused these improvements?",
                "salespersonStart": "The attribution methodology addresses that directly. We compared high-usage and low-usage cohorts within your own organisation —",
                "suggestedCompletion": "same market conditions, same leadership, same product. The only variable was platform usage. The performance difference between the two cohorts — 14 percentage points on conversion and a 3.4x difference in churn rate — is statistically significant. This is a controlled comparison, not a correlation. I'm happy to share the full methodology document so your board can interrogate it directly."
            },
            {
                "customerLine": "Give me the ROI number — but in a way I can actually defend to a sceptical CFO.",
                "salespersonStart": "Rather than leading with the headline — 3.5x — I'd suggest walking your CFO through the three components separately:",
                "suggestedCompletion": "$1.1 million in incremental conversion revenue, $380,000 in churn revenue protected, against a $420,000 platform cost. Then invite them to challenge any assumption. A CFO who stress-tests the model and still arrives at 2.5x is more convinced than one who simply sees a vendor-provided headline and dismisses it. Transparency in the methodology is the strongest defence of the number."
            },
            {
                "customerLine": "If we renew, what improvement can we realistically expect in year two?",
                "salespersonStart": "When we benchmark against customers at your current maturity level, the year-two data is consistent —",
                "suggestedCompletion": "a 40% improvement in deal velocity, and a further 8–10 percentage point gain in net revenue retention. If we model just the conversion improvement — bringing proposal-to-close from 28% to 35%, which is achievable based on comparable teams — the revenue impact is approximately $900,000 at current pipeline volume. I'll send the cohort data so you can run your own scenario analysis."
            }
        ]
    }
},
};
