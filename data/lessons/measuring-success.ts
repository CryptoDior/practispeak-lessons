import { Lesson } from '@/types/lesson';

export const measuringSuccess: Lesson = {
  slug: 'measuring-success',
  title: 'Measuring Success',
  subtitle: 'KPIs and basic metrics — how to talk about marketing performance in English',
  level: 'A2',
  description: 'In modern B2B marketing, data is everything. Being able to talk about results, targets, and performance metrics in English is an essential skill — whether you are presenting a campaign report, justifying a budget, or discussing strategy with a client. This lesson gives you the key vocabulary.',
  heroImage: '/images/measuring-success-hero.png',

  vocabulary: [
    {
      word: 'KPI',
      partOfSpeech: 'noun',
      definition: 'Key Performance Indicator — a specific, measurable metric used to evaluate whether a goal is being achieved.',
      example: 'Our three main KPIs for this campaign were: leads generated, cost per lead, and LinkedIn follower growth.',
      imageSlug: '/images/kpi.png',
    },
    {
      word: 'METRIC',
      partOfSpeech: 'noun',
      definition: 'A measurable number used to track and assess performance — for example, clicks, reach, or conversion rate.',
      example: 'We track fifteen different metrics, but only three are KPIs — the ones that directly tell us whether the campaign is working.',
      imageSlug: '/images/metric.png',
    },
    {
      word: 'CONVERSION',
      partOfSpeech: 'noun',
      definition: 'When a visitor or lead takes the desired action — for example, signing up, booking a call, or making a purchase.',
      example: 'Our landing page had a conversion rate of eight percent — for every 100 visitors, eight filled in the contact form.',
      imageSlug: '/images/conversion.png',
    },
    {
      word: 'GOAL',
      partOfSpeech: 'noun',
      definition: 'The specific outcome you want to achieve — the reason behind all your marketing activities.',
      example: 'The goal for Q3 was to generate fifty qualified leads — we achieved sixty-two, which was twenty-four percent above target.',
      imageSlug: '/images/goal.png',
    },
    {
      word: 'TARGET',
      partOfSpeech: 'noun',
      definition: 'A specific number or result you are trying to reach — a measurable version of a goal.',
      example: 'Our target was 500 LinkedIn followers by the end of the quarter — we reached 620, which was 24% above target.',
      imageSlug: '/images/target.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: 'A standard or reference point used to compare your results — either from your past performance or industry averages.',
      example: 'The industry benchmark for email open rates in B2B is around 22% — our campaign achieved 31%, well above benchmark.',
      imageSlug: '/images/benchmark.png',
    },
    {
      word: 'REPORT',
      partOfSpeech: 'noun',
      definition: 'A document or presentation that summarises what happened in a campaign — including results, insights, and next steps.',
      example: 'Riley sent the monthly report every first Monday — it included three pages of data and a one-paragraph summary of key insights.',
      imageSlug: '/images/report.png',
    },
    {
      word: 'INSIGHT',
      partOfSpeech: 'noun',
      definition: 'A useful understanding gained from looking at data — not just the number, but what it means and what to do about it.',
      example: 'The most important insight from the data was that video content outperformed articles by 300% on LinkedIn — so we shifted our strategy.',
      imageSlug: '/images/insight.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'HIT A TARGET',
      definition: 'To achieve or reach a specific numerical goal.',
      example: 'We hit our lead generation target three weeks before the end of the quarter — the campaign outperformed all our predictions.',
      imageSlug: '/images/hit-a-target.png',
    },
    {
      phrase: 'TRACK [A METRIC]',
      definition: 'To monitor and record a specific number over time — to watch how it changes.',
      example: 'We track fifteen metrics every week — reach, clicks, conversions, cost per lead, and follower growth are the most important.',
      imageSlug: '/images/track-a-metric.png',
    },
    {
      phrase: 'MEASURE AGAINST [A BENCHMARK]',
      definition: 'To compare your results to a standard reference point — to see if you are above or below average.',
      example: 'We always measure our results against the industry benchmark — it puts our performance in context.',
      imageSlug: '/images/measure-against-a-benchmark.png',
    },
    {
      phrase: 'EXCEED [A TARGET]',
      definition: 'To go above and beyond a goal — to perform better than expected.',
      example: 'We exceeded our Q3 target by 24% — it was the best quarter we have had since the agency was founded.',
      imageSlug: '/images/exceed-a-target.png',
    },
    {
      phrase: 'FALL SHORT OF [A TARGET]',
      definition: 'To not quite reach a goal — to perform below the target that was set.',
      example: 'We fell short of our lead target by eight — but the quality of leads was higher than any previous quarter.',
      imageSlug: '/images/fall-short-of-a-target.png',
    },
    {
      phrase: 'BREAK DOWN [THE DATA]',
      definition: 'To separate data into parts so it is easier to understand — to analyse in detail.',
      example: 'Let me break down the data by channel — LinkedIn generated 70% of all leads, email generated 25%, and organic search the rest.',
      imageSlug: '/images/break-down-the-data.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Marcus, thank you for joining the monthly [[report:a document summarising what happened in a campaign]] review. Let me start with our three main [[KPI:Key Performance Indicator — a metric used to evaluate goal achievement]] s.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Of course. What were the [[KPI:key measurable metric for evaluating success]] s for this campaign?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[[Goal:the specific outcome we want to achieve]] one was fifty qualified leads. [[Goal:the specific outcome]] two was a cost per lead under €80. [[Goal:specific outcome]] three was growing LinkedIn followers by 400 by the end of the quarter.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And did you [[hit a target]] the [[target:a specific number you are trying to reach]] s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We exceeded all three. Sixty-two qualified leads — twenty-four percent above [[target:the specific number we aimed for]]. Cost per lead was €67 — well within budget. And LinkedIn followers grew by 520.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Impressive. How does that compare to the [[benchmark:a standard used to compare results]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The industry [[benchmark:reference point for comparing results]] for B2B LinkedIn campaigns is around twenty-five leads per month. We averaged thirty-one — significantly above [[benchmark:standard reference for comparison]].',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What was the [[conversion:when a visitor takes the desired action]] rate on the landing page?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Eight percent [[conversion:when a visitor takes the desired action]] rate — for every 100 visitors, eight filled in the contact form. That is above the B2B average of five to six percent.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What is the most important [[insight:a useful understanding gained from data]] from this month?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The key [[insight:what the data tells us and what to do about it]] is that video content outperformed articles by three hundred percent. That tells us we should shift more of next month's content budget to video.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I appreciate the clear [[report:a summary of what happened, with results and insights]]. Can you [[break down the data]] by channel? I want to know which [[metric:a measurable number used to track performance]] s are strongest on LinkedIn versus email.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Absolutely — LinkedIn drove 70% of leads, email 25%, organic search 5%. I will include a full channel breakdown in the written [[report:a document summarising campaign performance]]. I will send it this afternoon.',
    }
  ],

  matchingExercise: [
    {
        "word": "KPI",
        "definition": "Key Performance Indicator — a specific measurable metric used to evaluate whether a goal is being achieved"
    },
    {
        "word": "METRIC",
        "definition": "A measurable number used to track and assess performance — for example, clicks or conversion rate"
    },
    {
        "word": "CONVERSION",
        "definition": "When a visitor or lead takes the desired action — signing up, booking a call, or making a purchase"
    },
    {
        "word": "GOAL",
        "definition": "The specific outcome you want to achieve — the reason behind all your marketing activities"
    },
    {
        "word": "TARGET",
        "definition": "A specific number or result you are trying to reach — a measurable version of a goal"
    },
    {
        "word": "BENCHMARK",
        "definition": "A standard reference point used to compare your results — from past performance or industry averages"
    },
    {
        "word": "REPORT",
        "definition": "A document summarising what happened in a campaign — including results, insights, and next steps"
    },
    {
        "word": "INSIGHT",
        "definition": "A useful understanding gained from data — not just the number, but what it means and what to do"
    }
],
  fillBlankExercise: [
    {
        "before": "Our three main",
        "after": "s were: leads generated, cost per lead, and LinkedIn follower growth.",
        "answer": "KPI"
    },
    {
        "before": "We track fifteen different",
        "after": "s, but only three are KPIs — the ones that tell us whether the campaign is working.",
        "answer": "metric"
    },
    {
        "before": "Our landing page had a",
        "after": "rate of eight percent — for every 100 visitors, eight filled in the contact form.",
        "answer": "conversion"
    },
    {
        "before": "The",
        "after": "for Q3 was to generate fifty qualified leads — we achieved sixty-two.",
        "answer": "goal"
    },
    {
        "before": "Our",
        "after": "was 500 LinkedIn followers by the end of the quarter — we reached 620.",
        "answer": "target"
    },
    {
        "before": "The industry",
        "after": "for email open rates in B2B is around 22% — we achieved 31%.",
        "answer": "benchmark"
    },
    {
        "before": "Riley sent the monthly",
        "after": "every first Monday — results, insights, and recommendations for next month.",
        "answer": "report"
    },
    {
        "before": "The most important",
        "after": "was that video content outperformed articles by 300% — so we changed strategy.",
        "answer": "insight"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the difference between a KPI and a metric?",
        "options": [
            "They mean exactly the same thing.",
            "A metric is any measurable number. A KPI is a specific metric chosen because it directly shows whether a key goal is being achieved.",
            "A KPI is used for monthly reports. A metric is used for weekly reports.",
            "A metric is used internally. A KPI is shared with clients."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client asks: 'What was your conversion rate?' What are they asking?",
        "options": [
            "How many people saw the ad.",
            "What percentage of visitors or leads took the desired action — for example, filled in a form or booked a call.",
            "How much revenue the campaign generated.",
            "How many times the ad was shown."
        ],
        "correctIndex": 1
    },
    {
        "question": "Your campaign generated 40 leads against a target of 50. How do you describe this?",
        "options": [
            "We exceeded our target.",
            "We hit our target.",
            "We fell short of our target by ten leads.",
            "We achieved our benchmark."
        ],
        "correctIndex": 2
    },
    {
        "question": "Why is an insight more valuable than a metric on its own?",
        "options": [
            "Because insights are easier to present in a report.",
            "Because an insight explains what the data means and what you should do differently — a number without context has limited value.",
            "Because insights come from qualitative research, which is more reliable than quantitative data.",
            "Because clients understand insights better than raw numbers."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says: 'How are we performing compared to other companies in our industry?' What do you use to answer?",
        "options": [
            "Your own company's historical performance data.",
            "The industry benchmark — a standard reference point showing what average results look like for companies in the same sector.",
            "The performance of your client's top competitor.",
            "The targets set at the start of the campaign."
        ],
        "correctIndex": 1
    },
    {
        "question": "What should a good monthly campaign report include?",
        "options": [
            "Only the positive results — to reassure the client.",
            "Results vs targets for each KPI, key insights explaining what the data means, and clear recommendations for what to do next month.",
            "A full list of every metric tracked — all 20 or 30 numbers.",
            "A comparison with the previous year's data only."
        ],
        "correctIndex": 1
    },
    {
        "question": "A LinkedIn campaign generated 500 impressions and 25 clicks. What is the click rate?",
        "options": [
            "25%",
            "2%",
            "5%",
            "50%"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which statement best describes a target?",
        "options": [
            "A target is a wish or hope for the campaign.",
            "A target is a specific measurable number you are trying to reach — for example, 50 leads per month or a cost per lead of under €80.",
            "A target is the maximum amount you can spend on a campaign.",
            "A target is always set by the client, not the agency."
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "How do you currently measure the success of your marketing activities? Which numbers do you track most closely?",
        "What is the difference between a KPI and a metric? Can you give an example of each from your own work?",
        "Have you ever had to explain marketing results to a non-marketing person — like a CEO or finance director? What was the hardest thing to communicate?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "We exceeded our lead generation _____ by 24% — it was our best quarter since the agency was founded.",
            "options": [
                "benchmark",
                "target",
                "insight"
            ],
            "correctIndex": 1,
            "explanation": "Target is a specific number you are trying to reach. Benchmark is a reference point for comparison. Insight is an understanding gained from data. Exceeding a target means you performed better than the number you set — it is a positive result that shows the campaign outperformed expectations."
        },
        {
            "sentence": "The key _____ from the data was that video content outperformed articles by 300% on LinkedIn.",
            "options": [
                "metric",
                "report",
                "insight"
            ],
            "correctIndex": 2,
            "explanation": "Insight is a useful understanding gained from data — not just the number, but what it means. Metric is the measurable number itself. Report is the document containing the data. The insight is the strategic conclusion drawn from the metric — it tells you what to do differently next time."
        },
        {
            "sentence": "Our landing page had a _____ rate of eight percent — for every 100 visitors, eight filled in the form.",
            "options": [
                "KPI",
                "conversion",
                "benchmark"
            ],
            "correctIndex": 1,
            "explanation": "Conversion is when a visitor takes the desired action. KPI is the overall performance indicator. Benchmark is the reference standard. Conversion rate measures how effectively a landing page turns visitors into leads — it is one of the most important metrics in digital marketing."
        },
        {
            "sentence": "Let me _____ the data by channel — LinkedIn generated 70% of all leads, email 25%, organic search the rest.",
            "options": [
                "track",
                "break down",
                "measure against"
            ],
            "correctIndex": 1,
            "explanation": "Break down means to separate data into parts so it is easier to understand. Track means to monitor a metric over time. Measure against means to compare to a benchmark. Breaking down data by channel helps the client understand which platforms are driving results — and where to invest more."
        },
        {
            "sentence": "The industry _____ for B2B email open rates is around 22% — our campaign achieved 31%, well above average.",
            "options": [
                "goal",
                "benchmark",
                "KPI"
            ],
            "correctIndex": 1,
            "explanation": "Benchmark is a standard reference point — in this case, the industry average. Goal is the specific outcome you want to achieve. KPI is a key performance indicator used to track progress. The benchmark gives context — without it, 31% is just a number; with it, you know it is excellent."
        },
        {
            "sentence": "We track fifteen different _____ s each week, but only three of them are KPIs — the ones that directly measure our main goals.",
            "options": [
                "metric",
                "insight",
                "report"
            ],
            "correctIndex": 0,
            "explanation": "Metric is a measurable number used to track performance. Insight is a conclusion drawn from data. Report is the document summarising results. All KPIs are metrics, but not all metrics are KPIs — a KPI is specifically chosen because it measures progress towards a key business goal."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'We got 500 impressions on our LinkedIn post. Is that good?'",
                "options": [
                    "Say: '500 impressions is great — that means 500 people saw your post!'",
                    "Say: 'It depends on context. For a company your size with 200 followers, 500 impressions means your post reached beyond your direct audience, which is positive. But impressions alone tell us very little — what matters more is how many people clicked, commented, or converted. Can I see the full data?'",
                    "Say: '500 impressions is very low — most posts get thousands. We need to do better.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It contextualises the number (relative to their follower count), explains why impressions alone are not enough, and asks for more data to give a proper evaluation. A is uncritical — 500 impressions might be excellent or poor depending on the context. C is dismissive without any context."
            },
            {
                "customerLine": "Client: 'We generated forty leads this month. Our target was fifty. Are you happy with that result?'",
                "options": [
                    "Say: 'No — we fell short of the target and that is not acceptable.'",
                    "Say: 'We fell ten short of the target, which I want to be transparent about. But here is the important context: the forty leads we generated had an average deal value of €8,000 — which is 30% higher than last month. The insight is that we may be reaching fewer but better-qualified prospects. I recommend we discuss whether a lower volume, higher quality approach is the right strategy going forward.'",
                    "Say: 'Forty is a good number — targets are just guidelines anyway.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It is honest about the shortfall, but immediately provides context (higher quality leads) and a strategic insight (volume vs quality trade-off). A is too negative without nuance. C dismisses the target, which undermines trust and accountability."
            },
            {
                "customerLine": "Client: 'What KPIs should we track for our LinkedIn campaign?'",
                "options": [
                    "Say: 'Track everything — the more data, the better picture you have.'",
                    "Say: 'I would suggest three KPIs to start: number of qualified leads generated, cost per lead, and LinkedIn follower growth. These three directly measure whether the campaign is working commercially and building your audience. We can add more metrics later, but start with what you can act on.'",
                    "Say: 'KPIs are set by LinkedIn automatically — you just need to log in to see them.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives three specific, relevant KPIs with a clear rationale — commercial impact and audience growth. A gives impractical advice (tracking everything leads to confusion). C is factually wrong — KPIs are strategic decisions, not automatically generated."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this campaign report extract. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Report",
                "text": "Q3 Campaign Report — MarketBridge"
            },
            {
                "speaker": "Report",
                "text": "This report summarises the results of our Q3 LinkedIn and email campaign."
            },
            {
                "speaker": "Report",
                "text": "We exceed our lead generation target by 24% — we generated 62 leads against a target of 50."
            },
            {
                "speaker": "Report",
                "text": "The conversion rate on the landing page was 8%, which is above of the industry average of 5–6%."
            },
            {
                "speaker": "Report",
                "text": "The key insight is that video content outperform articles by 300% in terms of engagement."
            },
            {
                "speaker": "Report",
                "text": "We recommend shifting more budget to video content in Q4 to maximise performance."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "We exceed our lead generation target",
                "correction": "We exceeded our lead generation target",
                "explanation": "This sentence is reporting a past event — the campaign already happened. The correct past tense of 'exceed' is 'exceeded'. Say: 'We exceeded our target' not 'We exceed our target'. Always check verb tenses when writing a report about past performance."
            },
            {
                "lineIndex": 3,
                "incorrectText": "above of the industry average",
                "correction": "above the industry average",
                "explanation": "'Above' is a preposition that is used directly before a noun — it does not need 'of'. Say: 'above the industry average', 'above the benchmark', 'above the target'. Adding 'of' after 'above' is a common mistake, but 'above of' is not correct in English."
            },
            {
                "lineIndex": 4,
                "incorrectText": "video content outperform articles",
                "correction": "video content outperformed articles",
                "explanation": "Again, this is describing a past event in a report. The correct past tense is 'outperformed'. Also, 'video content' is a singular subject, so in the present tense it would be 'outperforms' (with 's') — but since this is past, it should be 'outperformed' regardless."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: 'How do we know if our marketing is actually working? We spend money but cannot see the return.'",
                "salespersonStart": "That is the most important question in marketing — and the good news is it is answerable.",
                "suggestedCompletion": "We start by agreeing on three KPIs — the three numbers that matter most for your business goals. For most B2B companies, those are qualified leads generated, cost per lead, and revenue influenced by marketing. Then we set a target for each and track them every week. At the end of each month, I send you a report with the results, the key insights, and my recommendations for the next month. Over time, you will be able to see exactly what is working, what is not, and where your marketing budget is making the biggest impact."
            },
            {
                "customerLine": "Client: 'Our competitor seems to be getting much better results from LinkedIn than we are. Why?'",
                "salespersonStart": "Without access to their data, I cannot know for certain — but there are a few things we can look at.",
                "suggestedCompletion": "First, let us look at how often they post versus how often you post. Frequency and consistency are the most common differentiators. Second, let us look at their content format — are they using more video? Video outperforms most other formats on LinkedIn. Third, let us check their engagement rate per post — high engagement tells the LinkedIn algorithm to show content to more people. Once we understand what they are doing differently, we can adjust your strategy to match or exceed their results."
            },
            {
                "customerLine": "Client: 'The report shows good numbers but I do not feel like our brand is becoming more well-known. What is missing?'",
                "salespersonStart": "That is a really important distinction — metrics and brand perception are different things.",
                "suggestedCompletion": "Metrics like clicks and leads measure direct response — they tell you what happened. Brand awareness is slower to build and harder to measure in the short term. The insight here is that we may be optimising for conversions when we should also be investing in content that builds recognition — thought leadership, opinion posts, and stories that make people feel they know your brand before they ever need your services. I would suggest we add one brand-awareness KPI to our next quarter — for example, unprompted brand mentions or the number of people who respond 'yes' to 'have you heard of us?' at trade shows."
            }
        ]
    }
},
};
