import { Lesson } from '@/types/lesson';

export const reviewTheMarketingMix: Lesson = {
  slug: 'review-the-marketing-mix',
  title: 'Review: The Marketing Mix',
  subtitle: 'Consolidation — bring together your A2 vocabulary to discuss a complete marketing strategy',
  level: 'A2',
  description: 'This consolidation lesson brings together all the key vocabulary from your A2 lessons. You will practise talking about product, price, promotion, and place — the marketing mix — using real language from campaigns, meetings, advertising, content, digital, and measurement. This is your chance to show how much you have learned.',
  heroImage: '/images/review-the-marketing-mix-hero.png',

  vocabulary: [
    {
      word: 'STRATEGY',
      partOfSpeech: 'noun',
      definition: 'A long-term plan that explains how you will achieve your goals — what you will do, why, and in what order.',
      example: 'Our marketing strategy for next year has three priorities: build brand awareness, generate leads, and expand into two new markets.',
      imageSlug: '/images/strategy.png',
    },
    {
      word: 'POSITIONING',
      partOfSpeech: 'noun',
      definition: 'How a company presents itself relative to competitors — what makes it different and why clients should choose it.',
      example: 'Our positioning is clear: we are the B2B LinkedIn specialist — not a general marketing agency, but a focused expert.',
      imageSlug: '/images/positioning.png',
    },
    {
      word: 'PIPELINE',
      partOfSpeech: 'noun',
      definition: 'The stages a potential client goes through from first contact to becoming a paying customer — the sales and marketing funnel.',
      example: 'We currently have twenty prospects in the pipeline — five are at the proposal stage and two are close to signing.',
      imageSlug: '/images/pipeline.png',
    },
    {
      word: 'FUNNEL',
      partOfSpeech: 'noun',
      definition: 'A model that describes the journey from awareness to purchase — wide at the top (many people) and narrow at the bottom (fewer who buy).',
      example: 'Content marketing fills the top of the funnel with awareness — email and calls convert people at the bottom.',
      imageSlug: '/images/funnel.png',
    },
    {
      word: 'CAMPAIGN',
      partOfSpeech: 'noun',
      definition: 'A coordinated set of marketing activities designed to achieve a specific goal over a defined period.',
      example: 'The Q3 campaign ran across LinkedIn, email, and a podcast — it generated sixty-two leads and exceeded every KPI.',
      imageSlug: '/images/campaign.png',
    },
    {
      word: 'ROI',
      partOfSpeech: 'noun',
      definition: 'Return on Investment — the financial return you get compared to what you spent on marketing.',
      example: 'The campaign cost €5,000 and generated three new clients worth €45,000 — an ROI of 800%.',
      imageSlug: '/images/roi.png',
    },
    {
      word: 'CHANNEL MIX',
      partOfSpeech: 'noun',
      definition: 'The combination of channels used to reach the target audience — for example, LinkedIn, email, and events.',
      example: 'Our recommended channel mix for B2B is LinkedIn for awareness, email for nurturing, and events for closing.',
      imageSlug: '/images/channel-mix.png',
    },
    {
      word: 'REVIEW',
      partOfSpeech: 'noun',
      definition: 'A structured assessment of what happened — looking back at results and deciding what to change going forward.',
      example: 'We do a quarterly review of every campaign — results versus targets, key insights, and the strategy for next quarter.',
      imageSlug: '/images/review.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'PUT TOGETHER [A STRATEGY]',
      definition: 'To create and organise a plan — combining different elements into one coherent strategy.',
      example: 'Riley put together a twelve-month marketing strategy that covered brand, content, advertising, and measurement.',
      imageSlug: '/images/put-together-a-strategy.png',
    },
    {
      phrase: 'MOVE [SOMEONE] THROUGH THE FUNNEL',
      definition: 'To help a prospect progress from awareness to purchase — through content, nurturing, and sales activity.',
      example: 'Our email sequence moves prospects through the funnel — five emails over two weeks, each building the case to book a call.',
      imageSlug: '/images/move-someone-through-the-funnel.png',
    },
    {
      phrase: 'ALIGN [SOMETHING] WITH [A GOAL]',
      definition: 'To make sure an activity or decision connects to and supports your overall goal.',
      example: 'Every channel we use must align with the goal — if LinkedIn does not contribute to lead generation, we adjust or remove it.',
      imageSlug: '/images/align-something-with-a-goal.png',
    },
    {
      phrase: 'REVIEW [PERFORMANCE]',
      definition: 'To look back at results and assess whether the strategy worked — and what to change.',
      example: 'We review performance quarterly — it keeps us honest and makes sure we are always improving.',
      imageSlug: '/images/review-performance.png',
    },
    {
      phrase: 'SCALE UP [AN ACTIVITY]',
      definition: 'To increase the size or investment in something that is working well.',
      example: 'Video content outperformed everything — so in Q4 we are going to scale up our video production significantly.',
      imageSlug: '/images/scale-up-an-activity.png',
    },
    {
      phrase: 'TEST AND LEARN',
      definition: 'To try different approaches in a controlled way and use the results to improve your strategy.',
      example: 'We ran three different subject lines on the email — it is how we test and learn what resonates with our audience.',
      imageSlug: '/images/test-and-learn.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, before we start working together, can you walk me through your approach? How do you build a complete marketing [[strategy:a long-term plan for achieving goals]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. We start with [[positioning:how a company presents itself relative to competitors]] — who you are, who you are for, and what makes you different. Without that, everything else lacks direction.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And once you have the [[positioning:how a company presents itself]] right, what comes next?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Then we design the [[channel mix:the combination of channels used to reach the audience]]. For B2B, I typically recommend LinkedIn for awareness and credibility, email for nurturing, and events or trade shows for closing. Together they move prospects through the [[funnel:the journey from awareness to purchase]].',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How long does it take to fill the [[pipeline:the stages a prospect goes through from first contact to customer]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'In B2B, a realistic timeline is three to six months to start seeing qualified prospects in the [[pipeline:the stages from first contact to paying customer]]. The first month is foundation — brand, content, [[campaign:a coordinated set of activities to achieve a specific goal]] structure. From month two, leads start to come in.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How do you measure whether it is working? I want to see [[ROI:Return on Investment — financial return relative to spend]], not just reach.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is exactly how we think about it. We set KPIs at the start — leads, cost per lead, and [[ROI:Return on Investment]] — and every monthly [[review:a structured assessment of what happened]] includes the numbers and what they mean.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What if something is not working? How do you adjust the [[strategy:long-term plan for achieving goals]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We [[test and learn]] constantly. If a [[channel mix:combination of channels]] element is underperforming, we stop or reduce it. If something is outperforming, we [[scale up]] it. A good [[strategy:a long-term plan]] is never fixed — it evolves based on data.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I appreciate that. Can you [[put together]] a proposal for us — with the [[channel mix:combination of channels]], the [[campaign:coordinated marketing activities]], and the KPIs you would recommend for TechFlow?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Absolutely. I will have a full proposal ready by Thursday — it will cover [[positioning:how we present TechFlow in the market]], [[channel mix:which channels we use and why]], the first [[campaign:the coordinated activities we will run]], and how we will measure [[ROI:Return on Investment]] at every stage. Does that work?',
    }
  ],

  matchingExercise: [
    {
        "word": "STRATEGY",
        "definition": "A long-term plan that explains how you will achieve your goals — what you will do, why, and in what order"
    },
    {
        "word": "POSITIONING",
        "definition": "How a company presents itself relative to competitors — what makes it different and why clients should choose it"
    },
    {
        "word": "PIPELINE",
        "definition": "The stages a prospect goes through from first contact to becoming a paying customer"
    },
    {
        "word": "FUNNEL",
        "definition": "A model showing the journey from awareness to purchase — wide at the top, narrow at the bottom"
    },
    {
        "word": "CAMPAIGN",
        "definition": "A coordinated set of marketing activities designed to achieve a specific goal over a defined period"
    },
    {
        "word": "ROI",
        "definition": "Return on Investment — the financial return you get compared to what you spent on marketing"
    },
    {
        "word": "CHANNEL MIX",
        "definition": "The combination of channels used to reach the target audience — LinkedIn, email, events, etc."
    },
    {
        "word": "REVIEW",
        "definition": "A structured assessment of what happened — looking back at results and deciding what to change"
    }
],
  fillBlankExercise: [
    {
        "before": "Our marketing",
        "after": "has three priorities: build brand awareness, generate leads, and expand into two new markets.",
        "answer": "strategy"
    },
    {
        "before": "Our",
        "after": "is clear: we are the B2B LinkedIn specialist — not a general marketing agency.",
        "answer": "positioning"
    },
    {
        "before": "We currently have twenty prospects in the",
        "after": "— five at the proposal stage and two close to signing.",
        "answer": "pipeline"
    },
    {
        "before": "Content marketing fills the top of the",
        "after": "with awareness — email and calls convert people at the bottom.",
        "answer": "funnel"
    },
    {
        "before": "The Q3",
        "after": "ran across LinkedIn, email, and a podcast — it generated sixty-two leads and exceeded every KPI.",
        "answer": "campaign"
    },
    {
        "before": "The campaign cost €5,000 and generated three new clients worth €45,000 — an",
        "after": "of 800%.",
        "answer": "ROI"
    },
    {
        "before": "Our recommended",
        "after": "for B2B is LinkedIn for awareness, email for nurturing, and events for closing.",
        "answer": "channel mix"
    },
    {
        "before": "We do a quarterly",
        "after": "of every campaign — results versus targets, insights, and strategy for next quarter.",
        "answer": "review"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client asks: 'What is the difference between a strategy and a campaign?' What is the best answer?",
        "options": [
            "They mean the same thing — a campaign is just a shorter word for strategy.",
            "A strategy is the long-term plan — what you want to achieve and how, over months or years. A campaign is a specific, time-limited set of activities within the strategy — designed to achieve one particular goal.",
            "A strategy is for large companies. A campaign is for small companies.",
            "A strategy is created by the agency. A campaign is created by the client."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'positioning' mean in a marketing context?",
        "options": [
            "Where you place your advertisements.",
            "How your company presents itself in relation to competitors — what makes you different and why clients should choose you over alternatives.",
            "The geographic markets where your company operates.",
            "The position of your booth at a trade show."
        ],
        "correctIndex": 1
    },
    {
        "question": "A prospect is at the top of the funnel. What does this mean?",
        "options": [
            "They are close to buying and just need a final push.",
            "They are a new contact — they know your brand exists but have not yet engaged seriously or expressed a buying intention.",
            "They have already been a client and are considering renewing.",
            "They are a high-value prospect who should be prioritised."
        ],
        "correctIndex": 1
    },
    {
        "question": "A campaign cost €10,000 and generated five new clients worth €30,000 each. What is the ROI?",
        "options": [
            "300%",
            "1,400%",
            "500%",
            "200%"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which channel mix is most appropriate for a B2B company looking to build awareness and generate leads?",
        "options": [
            "TV advertising, radio, and outdoor billboards.",
            "LinkedIn for awareness and content, email for nurturing, and events or trade shows for relationship building and closing.",
            "Instagram, TikTok, and YouTube only.",
            "Paid search advertising only — it delivers the fastest results."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the purpose of a quarterly review in marketing?",
        "options": [
            "To decide whether to fire the marketing agency.",
            "To look back at what happened — results versus targets — identify key insights, and adjust the strategy for the next quarter based on what you learned.",
            "To set the budget for the next year.",
            "To present results to shareholders and investors."
        ],
        "correctIndex": 1
    },
    {
        "question": "When should you 'scale up' a marketing activity?",
        "options": [
            "When you have been using it for a long time and want a change.",
            "When the data shows it is outperforming other activities — increasing investment in what is working drives better overall results.",
            "When the budget increases at the start of a new year.",
            "When a competitor starts using the same channel."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'align a channel with a goal'?",
        "options": [
            "To use every available channel to reach as many people as possible.",
            "To make sure the channel you are using directly contributes to the specific goal you set — if it does not, question whether you should be using it.",
            "To keep the same channels year after year for consistency.",
            "To match your channel choices to what your competitors are doing."
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Have you heard of the four Ps of marketing — product, price, promotion, and place? Can you explain each one in simple English?",
        "Looking back at your A2 lessons, which topic was most relevant to your work? Which vocabulary do you use most often?",
        "If you had to explain your company's complete marketing strategy in three minutes, what would you say? Try it now."
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "Our _____ is clear: we are the B2B LinkedIn specialist — not a general marketing agency.",
            "options": [
                "campaign",
                "positioning",
                "funnel"
            ],
            "correctIndex": 1,
            "explanation": "Positioning is how a company presents itself in relation to competitors — it answers: what makes you different and why should clients choose you. Campaign is a specific set of activities. Funnel is the journey from awareness to purchase. Positioning is the foundation — everything else must be consistent with it."
        },
        {
            "sentence": "The campaign cost €5,000 and generated €45,000 in new business — an _____ of 800%.",
            "options": [
                "ROI",
                "KPI",
                "funnel"
            ],
            "correctIndex": 0,
            "explanation": "ROI (Return on Investment) is the financial return compared to what you spent. KPI is a key performance indicator — a metric used to track progress. Funnel is the model describing the journey from awareness to purchase. ROI is the ultimate measure of marketing effectiveness for a CEO or finance director."
        },
        {
            "sentence": "We do a quarterly _____ of every campaign — results versus targets, insights, and strategy for the next quarter.",
            "options": [
                "funnel",
                "review",
                "pipeline"
            ],
            "correctIndex": 1,
            "explanation": "Review is a structured assessment of what happened. Funnel is the awareness-to-purchase journey. Pipeline is the stages a prospect goes through. A quarterly review is essential for accountability and continuous improvement — it ensures you are learning from every campaign."
        },
        {
            "sentence": "We currently have twenty prospects in the _____ — five at the proposal stage and two very close to signing.",
            "options": [
                "funnel",
                "pipeline",
                "review"
            ],
            "correctIndex": 1,
            "explanation": "Pipeline is the stages a potential client goes through from first contact to becoming a customer. Funnel is the broader model. Review is a backward-looking assessment. 'In the pipeline' is the standard B2B phrase for prospects who are actively in your sales process."
        },
        {
            "sentence": "Video content outperformed everything else — so we are going to _____ it significantly in Q4.",
            "options": [
                "test and learn",
                "scale up",
                "align with"
            ],
            "correctIndex": 1,
            "explanation": "Scale up means to increase investment in something that is working. Test and learn means to try something and use the results to improve. Align with means to connect to a goal. When data shows an activity is outperforming, scaling up is the logical response — you invest more in what works."
        },
        {
            "sentence": "Our recommended _____ for B2B is LinkedIn for awareness, email for nurturing, and events for closing.",
            "options": [
                "strategy",
                "campaign",
                "channel mix"
            ],
            "correctIndex": 2,
            "explanation": "Channel mix is the combination of channels used to reach the target audience. Strategy is the overall long-term plan. Campaign is a specific set of activities. The channel mix answers 'where' — which platforms and media you use. A good channel mix for B2B uses different channels for different stages of the funnel."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'We want to do marketing but we do not know where to start. We have a budget of €3,000 a month.'",
                "options": [
                    "Say: 'With €3,000 you should try a bit of everything — LinkedIn, email, events, content, and some paid ads. Cover as many channels as possible.'",
                    "Say: 'Great — let us start by getting your positioning right. Who are you, who do you help, and what makes you different? Once that is clear, I would suggest a focused channel mix: LinkedIn sponsored posts for awareness and content for credibility. With €3,000 we can do this well rather than spreading too thin. I will put together a proposal.'",
                    "Say: '€3,000 is not much — you will need a bigger budget to see real results from marketing.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It starts with strategy (positioning), recommends a focused channel mix, and offers a concrete next step. A spreads the budget too thin. C is discouraging without offering a solution — €3,000 is a meaningful budget if used strategically."
            },
            {
                "customerLine": "Client: 'We have been running campaigns for six months. How do we know if our strategy is working?'",
                "options": [
                    "Say: 'Six months is not enough time — keep going and check again in a year.'",
                    "Say: 'We should do a strategy review. Let us look at the three key questions: Are we hitting our KPIs? What is the ROI? And what have we learned that should change our approach for the next six months? Can you share the data from the last quarter?'",
                    "Say: 'If you are still in business after six months of marketing, the strategy is working.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It proposes a structured review based on three clear questions — KPIs, ROI, and learnings — and asks for data to make the review meaningful. A is too passive. C is a joke, not advice."
            },
            {
                "customerLine": "Client: 'LinkedIn is working well but our email open rates are very low. What should we do?'",
                "options": [
                    "Say: 'Stop sending emails — LinkedIn is clearly your best channel.'",
                    "Say: 'Low email open rates usually come down to the subject line or the time of sending. I would suggest we test three different subject lines on the next send — that is how we test and learn what resonates. We should also check whether the email list is clean — old or inactive contacts pull down open rates. Do not abandon email — it is still one of the highest-ROI channels in B2B if used correctly.'",
                    "Say: 'Email marketing is dying — everyone switches to LinkedIn and social media now.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It diagnoses the problem (subject line, timing, list quality), proposes a test-and-learn approach, and defends email marketing with evidence (high ROI). A abandons a valuable channel prematurely. C is a sweeping generalisation that is not backed by data."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this marketing strategy summary. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Strategy",
                "text": "Q4 Marketing Strategy — MarketBridge"
            },
            {
                "speaker": "Strategy",
                "text": "Our positioning is been reviewed and updated: we are the B2B LinkedIn specialist for technology companies."
            },
            {
                "speaker": "Strategy",
                "text": "The channel mix for Q4 will include LinkedIn sponsored posts, email nurturing, and one trade show."
            },
            {
                "speaker": "Strategy",
                "text": "Our goal is to generate sixty qualified leads and achieve an ROI of at least five hundreds percent."
            },
            {
                "speaker": "Strategy",
                "text": "We will scale up video content — it outperformed all other formats by 300% in Q3."
            },
            {
                "speaker": "Strategy",
                "text": "A quarterly review will be held on the first week of January to assess results and plan Q1."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "positioning is been reviewed",
                "correction": "positioning has been reviewed",
                "explanation": "'Has been reviewed' is the correct present perfect passive. 'Is been' is not a correct verb form in English. The present perfect passive uses: has/have + been + past participle. Say: 'has been reviewed', 'has been updated', 'has been approved'. 'Is been' does not exist in standard English."
            },
            {
                "lineIndex": 3,
                "incorrectText": "five hundreds percent",
                "correction": "five hundred percent",
                "explanation": "Numbers like hundred, thousand, and million do not take a plural 's' when they follow another number. Say: 'five hundred', 'three thousand', 'two million'. Only use 'hundreds' when you mean an unspecified large number: 'hundreds of clients'. For a specific number, always use the singular: 'five hundred percent'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "on the first week of January",
                "correction": "in the first week of January",
                "explanation": "When referring to a period of time — a week, a month, a season — use 'in'. Say: 'in the first week', 'in January', 'in Q1'. 'On' is used for specific days and dates: 'on Monday', 'on the 15th of January'. 'In the first week' is correct because you are describing a period, not a specific day."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Use the templates below to present a complete marketing strategy in your own words. Use vocabulary from this lesson and all your A2 lessons. Practise with a partner.",
        "items": [
            {
                "customerLine": "Client: 'Walk me through what a complete marketing strategy looks like for a company like ours.'",
                "salespersonStart": "A complete B2B marketing strategy has four parts.",
                "suggestedCompletion": "First, positioning — we define who you are, who you help, and what makes you different from competitors. Second, the channel mix — we choose the right combination of channels: for most B2B companies, that is LinkedIn for awareness, email for nurturing, and events for closing. Third, the campaign plan — we design coordinated activities across those channels with clear KPIs and targets. And fourth, measurement — we track ROI, review performance quarterly, and adjust the strategy based on what we learn. The whole plan aligns with one goal: filling your pipeline with qualified prospects who convert into clients."
            },
            {
                "customerLine": "Client: 'How do you make sure we are not wasting money on marketing that does not work?'",
                "salespersonStart": "Three things protect you from wasted spend.",
                "suggestedCompletion": "First, clear KPIs from the start — we agree on what success looks like before we spend a cent. Second, a test-and-learn approach — we start with a focused channel mix, measure what works, and scale up what performs. We do not bet everything on one approach without data. Third, monthly reporting — every month I send you a report that shows results versus targets, the key insights from the data, and my recommendations for next month. If something is not working, we stop it quickly. If something is outperforming, we invest more. That cycle of measure, learn, and adjust is what turns marketing spend into ROI."
            },
            {
                "customerLine": "Client: 'We have been working with you for one year. What should our strategy look like for year two?'",
                "salespersonStart": "Year two is about scaling what worked and fixing what did not.",
                "suggestedCompletion": "In year one, we established your positioning, built your content engine, and generated consistent leads through LinkedIn and email. The data shows video content and sponsored posts are your strongest performers. For year two, I recommend three priorities: first, scale up video — increase production to four videos per month. Second, expand the channel mix — add a quarterly webinar or event to build deeper relationships with prospects in your pipeline. Third, focus on ROI — in year one we built the foundation; year two is where we turn brand awareness into measurable revenue. I will put together a full year-two proposal based on everything we learned together."
            }
        ]
    }
},
};
