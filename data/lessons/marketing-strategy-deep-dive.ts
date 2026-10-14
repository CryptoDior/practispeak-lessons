import { Lesson } from '@/types/lesson';

export const marketingStrategyDeepDive: Lesson = {
  slug: 'marketing-strategy-deep-dive',
  title: 'Marketing Strategy Deep Dive',
  subtitle: 'How to read, discuss and apply strategic frameworks — BCG matrix, Ansoff, blue ocean, and positioning maps — in real marketing conversations',
  level: 'B1-B2',
  description: 'Strategy without language is just a diagram on a whiteboard. This lesson teaches you the vocabulary and phrases you need to discuss strategic frameworks in meetings, presentations and written briefs — so you can explain what the BCG matrix tells you about your portfolio, argue for a blue ocean move, and position your brand on a map with confidence. The focus is practical: reading a Harvard Business Review-style excerpt, discussing what it means for your market, and writing a clear strategic recommendation.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-hero.png',

  vocabulary: [
    {
      word: 'BCG MATRIX',
      partOfSpeech: 'noun',
      definition: 'A grid that sorts a company\'s products by market share and growth.',
      example: 'We used the BCG matrix to decide which products deserve more budget.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-bcg-matrix.png',
    },
    {
      word: 'ANSOFF MATRIX',
      partOfSpeech: 'noun',
      definition: 'A model that shows four ways a company can grow.',
      example: 'The Ansoff matrix shows our safest growth option is selling more to current customers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-ansoff-matrix.png',
    },
    {
      word: 'BLUE OCEAN',
      partOfSpeech: 'noun',
      definition: 'A market with very little competition, where a company creates new demand.',
      example: 'Our new service could open up a blue ocean for the agency.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-blue-ocean.png',
    },
    {
      word: 'VALUE PROPOSITION',
      partOfSpeech: 'noun',
      definition: 'A short statement of what a product offers and why customers should choose it.',
      example: 'Our value proposition is too vague, so let\'s make it clearer.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-value-proposition.png',
    },
    {
      word: 'POSITIONING MAP',
      partOfSpeech: 'noun',
      definition: 'A chart that shows where brands sit compared with their competitors.',
      example: 'On this positioning map, our brand sits alone in the top right.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-positioning-map.png',
    },
    {
      word: 'COMPETITIVE ADVANTAGE',
      partOfSpeech: 'noun',
      definition: 'Something a company does better than others that is hard to copy.',
      example: 'Our strong customer data is a real competitive advantage for us.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-competitive-advantage.png',
    },
    {
      word: 'STRATEGIC FIT',
      partOfSpeech: 'noun',
      definition: 'How well a plan matches a company\'s strengths, goals and resources.',
      example: 'I\'m not sure this new market has strategic fit with our team.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-strategic-fit.png',
    },
    {
      word: 'MARKET PENETRATION',
      partOfSpeech: 'noun',
      definition: 'The share of a market that already buys a product or service.',
      example: 'Our market penetration in this segment grew by ten percent this year.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-market-penetration.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'BASED ON THE FRAMEWORK, OUR RECOMMENDATION IS...',
      definition: 'Used to introduce advice that comes from a model or analysis.',
      example: 'Based on the framework, our recommendation is to invest more in the analytics product.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-based-on-the-framework-our-recommendation-is.png',
      inAction: 'Based on the Ansoff framework, our recommendation is to focus on market penetration before attempting any diversification.',
      register: 'Formal — used in presentations, strategy briefs, and stakeholder meetings. Signals a structured, evidence-based recommendation rather than a personal opinion.',
      inContext: 'Riley opened the board presentation with confidence. Based on the framework, our recommendation is to invest in the SME segment, she said. The BCG matrix and the Ansoff analysis point in the same direction — this is where we have the strongest competitive advantage.',
      visualExamples: [
        { brand: 'Vanta', context: 'B2B SaaS security — strategy presentation deck', imageSlug: '/images/visual-examples/msd-p1-vanta.png', caption: 'Based on the framework, our recommendation is to lead with compliance automation — not security features. The buyer cares about audits, not architecture.', aspectRatio: '1.91/1' },
        { brand: 'Rootly', context: 'Incident management SaaS — investor pitch deck', imageSlug: '/images/visual-examples/msd-p1-rootly.png', caption: 'Based on the framework, our recommendation is to enter through the DevOps buyer — not the CISO. That is where the budget decision actually starts.', aspectRatio: '16/9' },
        { brand: 'Crestview', context: 'Wealth management firm — client proposal', imageSlug: '/images/visual-examples/msd-p1-crestview.png', caption: 'Based on the framework, our recommendation is a tax-first allocation strategy — not returns-first. That framing changes every conversation with a high-net-worth client.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: 'THE DATA SUGGESTS WE SHOULD...',
      definition: 'Used to say the numbers point towards a certain choice.',
      example: 'The data suggests we should focus on small businesses next quarter.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-the-data-suggests-we-should.png',
      inAction: 'The data suggests we should reallocate 30% of the paid media budget to content marketing — the ROI is significantly higher.',
      register: "Neutral / Business English — 'suggests' is softer than 'proves' and is the professional choice when data points in a direction without being definitive. Appropriate in meetings, reports, and presentations.",
      inContext: "Marcus pulled up the analysis and walked the room through the numbers. The data suggests we should prioritise the enterprise segment this quarter, he said. Three separate metrics — pipeline velocity, deal size, and NPS — all point the same way. That's not a coincidence.",
      visualExamples: [
        { brand: 'Orbit', context: 'DTC furniture brand — quarterly strategy review', imageSlug: '/images/visual-examples/msd-p2-orbit.png', caption: 'The data suggests we should pause paid social and double down on email — our email list converts at 6x the rate of cold Facebook traffic.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'Digital agency — client strategy report', imageSlug: '/images/visual-examples/msd-p2-flux.png', caption: 'The data suggests we should reposition as premium — customers who pay more churn less, and our LTV for that segment is 3x higher.', aspectRatio: '1.91/1' },
        { brand: 'Scope Labs', context: 'Analytics SaaS — board presentation', imageSlug: '/images/visual-examples/msd-p2-scope-labs.png', caption: 'The data suggests we should expand into mid-market before enterprise — our win rate there is 68% vs 31% upmarket.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: "THERE'S A CLEAR GAP IN THE MARKET FOR...",
      definition: 'Used to say customers have a need that no one is meeting.',
      example: 'There\'s a clear gap in the market for affordable premium skincare.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-theres-a-clear-gap-in-the-market-for.png',
      inAction: "There's a clear gap in the market for a platform that combines compliance management with marketing automation in a single tool.",
      register: 'Neutral — used in pitches, strategy meetings, and competitive analysis presentations. Always follow with specific evidence to be credible; without evidence it sounds like wishful thinking.',
      inContext: "Dana had spent two weeks mapping the competitive landscape before the pitch. There's a clear gap in the market for a tool that serves regulated SMEs, she told the client. None of the current platforms do this well at scale — and that's exactly where your product fits.",
      visualExamples: [
        { brand: 'Rootly Foods', context: 'Plant-based ready meal brand — pitch deck', imageSlug: '/images/visual-examples/msd-p3-rootly-foods.png', caption: 'There is a clear gap in the market for high-protein plant-based meals under £4 — every competitor is either premium or tasteless. We are building into the gap.', aspectRatio: '4/3' },
        { brand: 'Pinnacle', context: 'Corporate wellness SaaS — go-to-market brief', imageSlug: '/images/visual-examples/msd-p3-pinnacle.png', caption: 'There is a clear gap in the market for mental health tools that integrate with HR systems — most solutions are standalone and no one has built the bridge.', aspectRatio: '16/9' },
        { brand: 'Ember Clay', context: 'DTC home goods brand — market analysis', imageSlug: '/images/visual-examples/msd-p3-ember-clay.png', caption: 'There is a clear gap in the market for sustainable homeware at mid-market prices — eco options are either cheap and ugly or luxury and unaffordable.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'IF WE POSITION OURSELVES AS..., WE CAN OWN...',
      definition: 'Used to say what a brand wants to be known for and control.',
      example: 'If we position ourselves as the data experts, we can own this niche.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-if-we-position-ourselves-as-we-can-own.png',
      inAction: 'If we position ourselves as the go-to agency for B2B SaaS content, we can own that niche before any competitor notices the opportunity.',
      register: 'Formal / Strategic — used in brand strategy sessions and positioning workshops. Implies a deliberate, committed choice about market territory and what space the brand will claim.',
      inContext: "The strategy meeting had been going for two hours when Riley made her point. If we position ourselves as the platform for regulated industries, we can own that space, she said. Right now, nobody is clearly occupying it — and the window won't be open forever.",
      visualExamples: [
        { brand: 'Luma Health', context: 'Telehealth platform — brand positioning deck', imageSlug: '/images/visual-examples/msd-p4-luma.png', caption: 'If we position ourselves as the second-opinion brand, we can own the anxiety-to-action moment — patients who are worried but not yet diagnosed.', aspectRatio: '16/9' },
        { brand: 'Carve', context: 'B2B fintech startup — pitch deck', imageSlug: '/images/visual-examples/msd-p4-carve.png', caption: 'If we position ourselves as the CFO intelligence layer, we can own the financial forecasting category before any of the big players move in.', aspectRatio: '4/3' },
        { brand: 'Summit', context: 'Outdoor gear brand — strategy review', imageSlug: '/images/visual-examples/msd-p4-summit.png', caption: 'If we position ourselves as the brand for people who train for it, we can own the serious amateur space — above mass market, below pro.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'THE RISK OF THIS APPROACH IS...',
      definition: 'Used to introduce what could go wrong with a plan.',
      example: 'The risk of this approach is that bigger competitors could copy us quickly.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-the-risk-of-this-approach-is.png',
      inAction: 'The risk of this approach is that we commit resources to a niche before we have validated whether the total addressable market is large enough.',
      register: 'Formal — used in risk analysis sections of strategy documents and in stakeholder Q&A. Shows commercial maturity; good strategists name risks without being asked.',
      inContext: 'Marcus respected good strategy, but he never let enthusiasm skip past the downside. The risk of this approach is that we enter a market where the three largest players have been operating for a decade, he said. We need to be honest about the time and investment required to compete on their terms.',
      visualExamples: [
        { brand: 'Nova', context: 'Cybersecurity SaaS — risk assessment slide', imageSlug: '/images/visual-examples/msd-p5-nova.png', caption: 'The risk of this approach is commoditisation — if we compete on price, we train the market to see us as interchangeable. We would win deals and lose the brand.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'DTC supplements brand — board update', imageSlug: '/images/visual-examples/msd-p5-halo.png', caption: 'The risk of this approach is channel dependency — 90% of our revenue runs through Amazon. One algorithm change and revenue falls off a cliff.', aspectRatio: '1.91/1' },
        { brand: 'Keystone', context: 'Strategy consultancy — client brief', imageSlug: '/images/visual-examples/msd-p5-keystone.png', caption: 'The risk of this approach is moving too fast into new geographies before the home market is profitable — it splits focus and doubles burn rate.', aspectRatio: '4/3' },
      ],
    },
    {
      phrase: 'THIS PLAYS TO OUR STRENGTHS IN...',
      definition: 'Used to say a plan uses what the team already does well.',
      example: 'This plays to our strengths in content and customer research.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-strategy-deep-dive-this-plays-to-our-strengths-in.png',
      inAction: "This move plays to our strengths in data-led content — it's exactly what ESG-focused clients need and what we already do well.",
      register: 'Neutral / Business English — a common strategy idiom meaning the plan builds on existing capabilities rather than requiring the team to develop entirely new skills. Used in meetings and written briefs.',
      inContext: "When the room seemed uncertain about the new direction, Dana made the case. This plays to our strengths in long-form content and stakeholder communications, she said. We're not starting from zero — we're applying what we already do well to an audience that genuinely values it.",
      visualExamples: [
        { brand: 'Raft', context: 'Logistics SaaS — quarterly business review', imageSlug: '/images/visual-examples/msd-p6-raft.png', caption: 'This plays to our strengths in real-time data processing — no competitor can match our latency, and supply chain buyers know it.', aspectRatio: '16/9' },
        { brand: 'Paragon Studio', context: 'Creative agency — new business pitch', imageSlug: '/images/visual-examples/msd-p6-paragon.png', caption: 'This plays to our strengths in brand strategy for founder-led businesses — that is a niche nobody else is owning with real methodology.', aspectRatio: '4/3' },
        { brand: 'Crestview Advisory', context: 'Financial advisory firm — strategy presentation', imageSlug: '/images/visual-examples/msd-p6-crestview-adv.png', caption: 'This plays to our strengths in long-term relationship management — our NPS is 74 and most of our new business comes from client referrals.', aspectRatio: '1.91/1' },
      ],
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Right — let's get into the strategy review. I've mapped our portfolio against the [[BCG matrix:a 2x2 framework plotting products by market growth and market share]] and I want to walk you both through what it tells us.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Good. I've been wanting to have this conversation. What does the matrix show?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Our enterprise platform is a clear Cash Cow — high market share, but the segment is maturing. The new SME product is a Question Mark — fast-growing space, but we haven't won enough share yet. Based on the framework, our recommendation is to invest aggressively in the SME product while using the enterprise revenue to fund it.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "That tracks. I've also been looking at [[Ansoff:a growth framework with four strategies — penetration, market development, product development, and diversification]] and I think we're actually trying to do two things at once — market penetration in SME and product development for enterprise. That's spreading us thin.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Dana's right. We need to choose a primary growth vector. What does the data say about which segment has more upside?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'The data suggests we should prioritise SME. Acquisition cost is 40% lower, sales cycles are three times shorter, and our NPS in that segment is 62 versus 44 in enterprise. Every metric points the same way.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "Agreed. And I think there's a [[positioning:how a brand is perceived relative to competitors in the minds of customers]] opportunity here too. When I mapped the competitive landscape, there's a clear gap in the market for a platform that specifically serves SMEs in regulated industries — financial services, legal, healthcare.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "That's interesting. Are any of our current competitors in that space?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: 'None of them are doing it well. The large platforms ignore it — too complex for their generalist approach. The specialist tools are too niche. If we position ourselves as the platform for regulated SMEs, we can own that space before anyone else notices it.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "And this plays to our strengths in compliance-aware product design — that's something we've built over three years. A competitor can't replicate that in six months. That's a genuine [[competitive advantage:something a company does better than competitors that is hard to copy]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I like it. But I want us to be honest about the risk. What's the downside of going narrow?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The risk of this approach is that we limit our addressable market in the short term. If the regulated SME segment is smaller than we think, or if a large player moves in with more resources, we're exposed. We'd need a clear plan to expand out of the niche once we've established our position.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "That's fair. But the alternative — competing as a generalist against platforms with ten times our budget — has its own risk. At least the niche strategy has [[strategic fit:how well a strategy aligns with the company's existing strengths and resources]] with what we already do well.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Alright. Let's build the recommendation around the niche positioning. Riley — can you write up a one-page strategic brief before Thursday's board meeting?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Absolutely. I'll structure it around the BCG analysis, the Ansoff recommendation, and the positioning map with the gap highlighted. I'll make sure the [[value proposition:a clear statement of the benefit you offer, who it is for, and why you are better than the alternative]] is specific — not 'we help businesses grow', but something with a number and a named audience.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Perfect. That's exactly what the board needs to see — a framework-led view with a clear recommendation and an honest risk assessment.",
    }
  ],

  matchingExercise: [
    {
        "word": "BCG matrix",
        "definition": "a framework that plots products by market share and market growth to guide investment decisions"
    },
    {
        "word": "Ansoff matrix",
        "definition": "a growth framework with four strategies: penetration, market development, product development, and diversification"
    },
    {
        "word": "blue ocean",
        "definition": "a market space with little or no competition, created by making existing competitors irrelevant"
    },
    {
        "word": "value proposition",
        "definition": "a clear statement of the benefit you offer, who it is for, and why you are better than the alternative"
    },
    {
        "word": "positioning map",
        "definition": "a visual tool that plots brands on two axes to show where each sits relative to competitors"
    },
    {
        "word": "competitive advantage",
        "definition": "something a company does better than competitors that is hard to copy and creates lasting value"
    },
    {
        "word": "strategic fit",
        "definition": "how well a proposed strategy aligns with the company's existing strengths, resources, and goals"
    },
    {
        "word": "market penetration",
        "definition": "the percentage of a target market using your product — also the Ansoff strategy of growing within an existing market"
    }
],
  fillBlankExercise: [
    {
        "before": "Based on the framework, our ",
        "after": " is to invest in the SME product while using enterprise revenue to fund it.",
        "answer": "recommendation"
    },
    {
        "before": "The data ",
        "after": " we should prioritise SME — acquisition cost is 40% lower and sales cycles are three times shorter.",
        "answer": "suggests"
    },
    {
        "before": "There's a clear gap in the ",
        "after": " for a platform that specifically serves regulated SMEs.",
        "answer": "market"
    },
    {
        "before": "If we position ourselves as the platform for regulated SMEs, we can ",
        "after": " that space before anyone else notices it.",
        "answer": "own"
    },
    {
        "before": "This strategy plays to our ",
        "after": " in compliance-aware product design — something built over three years.",
        "answer": "strengths"
    },
    {
        "before": "The risk of this ",
        "after": " is that we limit our addressable market in the short term.",
        "answer": "approach"
    }
],
  multipleChoiceExercise: [
    {
        "question": "According to Riley's BCG analysis, what category is the enterprise platform in?",
        "options": [
            "Star — high growth, high share",
            "Cash Cow — high share, maturing market",
            "Question Mark — high growth, low share"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana identify as the gap in the positioning map?",
        "options": [
            "A platform for large enterprise clients in technology",
            "A generalist platform competing on price",
            "A platform for SMEs in regulated industries"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Riley asked to prepare before the board meeting?",
        "options": [
            "A competitive analysis with pricing comparison",
            "A one-page strategic brief with framework analysis",
            "A product roadmap for the SME segment"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say is the main risk of going narrow?",
        "options": [
            "Losing existing enterprise clients",
            "Limiting the addressable market and being exposed if a large player enters",
            "Not having enough product features for regulated industries"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Have you ever had to explain a business strategy to a colleague or manager? What framework or structure did you use — or did you have to figure it out as you went?",
        "Think of a company you know well. Where would you put their main product on a BCG matrix — Star, Cash Cow, Question Mark, or Dog? Why?",
        "When you hear the phrase 'blue ocean', what comes to mind? Can you think of a company that created a new market space instead of competing in an existing one?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "The data _____ we should focus on the SME segment — acquisition cost is significantly lower.",
            "options": [
                "suggest",
                "suggests",
                "suggested"
            ],
            "correctIndex": 1,
            "explanation": "'Suggests' is correct because the subject 'the data' is treated as a singular noun in formal business English — even though 'data' is technically plural in Latin. In modern business writing, 'the data shows', 'the data suggests', 'the data tells us' are all standard. 'Suggest' (plural verb) is used when you write 'the data points suggest' or 'these findings suggest'. With 'the data' as a single unit, use the singular."
        },
        {
            "sentence": "If we _____ ourselves as the platform for regulated SMEs, we can own that space.",
            "options": [
                "positioned",
                "position",
                "positioning"
            ],
            "correctIndex": 1,
            "explanation": "After 'if' in a real conditional (something that could genuinely happen), use present simple — not past tense and not '-ing'. 'If we position' describes a real strategic option. 'If we positioned' is a hypothetical or unlikely scenario (second conditional). 'If we positioning' is never correct — 'if' must be followed by a subject and verb, not a participle. Present simple after 'if' = the condition is real and possible."
        },
        {
            "sentence": "This plays _____ our strengths in compliance-aware product design.",
            "options": [
                "to",
                "at",
                "for"
            ],
            "correctIndex": 0,
            "explanation": "'Play to' is the fixed phrasal verb — it means to make use of or benefit from a strength. 'Plays to our strengths' is a standard business idiom. 'Play at' means to do something casually or not seriously ('she's just playing at being a manager'). 'Play for' relates to time ('play for time') or stakes ('play for high stakes'). When discussing strategy and competitive advantages, always use 'plays to our strengths'."
        },
        {
            "sentence": "The BCG matrix helps us _____ where to invest, grow, or cut.",
            "options": [
                "decide",
                "deciding",
                "decided"
            ],
            "correctIndex": 0,
            "explanation": "After 'help', English uses the base form of the verb — without 'to' in informal and business English. 'Helps us decide' is the standard pattern. 'Helps us deciding' is incorrect — '-ing' cannot follow 'help + object'. 'Helps us decided' is not grammatically possible. Note: 'helps us to decide' (with 'to') is also correct, but 'helps us decide' is more natural in spoken and professional English."
        },
        {
            "sentence": "There's a clear gap in the market _____ a platform that serves regulated SMEs.",
            "options": [
                "to",
                "for",
                "of"
            ],
            "correctIndex": 1,
            "explanation": "'For' is the correct preposition in 'a gap in the market for X'. The structure means: a space or opportunity that X could fill. 'A gap for a platform' = a space that a platform could occupy. 'A gap to a platform' and 'a gap of a platform' are both incorrect — they don't form a meaningful phrase. 'For' is the standard preposition with 'gap' when identifying an unmet market need."
        },
        {
            "sentence": "We need _____ a framework-led recommendation before the board meeting on Thursday.",
            "options": [
                "prepare",
                "to prepare",
                "preparing"
            ],
            "correctIndex": 1,
            "explanation": "After 'need', use 'to + base verb' — the full infinitive. 'We need to prepare' is correct. 'We need prepare' is wrong because 'need' as a main verb must be followed by the infinitive with 'to'. 'We need preparing' is also wrong — 'need + -ing' has a completely different meaning: 'the report needs preparing' means 'the report needs to be prepared' (passive meaning). When the subject is a person doing an action, always use 'need to + base verb'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the client or colleague says. Choose the best professional response.",
        "items": [
            {
                "customerLine": "We've been in this market for ten years. Why would we need to look at strategic frameworks now?",
                "options": [
                    "You're right — if the business is doing well, frameworks are probably unnecessary overhead. Let's focus on execution instead.",
                    "Frameworks like the BCG matrix and Ansoff don't tell you what to do — they give you a structured way to see what the data is already telling you. After ten years, there's probably more complexity in your portfolio than a gut feel can handle alone.",
                    "Actually, strategic frameworks are essential for any business. Without them it's impossible to make good decisions."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it explains the value of frameworks without dismissing the client's experience or being condescending. It connects the frameworks to their specific situation (ten years, portfolio complexity) and reframes frameworks as tools that organise existing knowledge, not a criticism of how they've worked before. Option A agrees too quickly and abandons the conversation. Option C is too absolute ('essential', 'impossible') and sounds preachy — it will put the client on the defensive."
            },
            {
                "customerLine": "The BCG analysis puts our main product in the Dog category. Does that mean we should kill it?",
                "options": [
                    "Not necessarily — a Dog can still be worth keeping if it serves a strategic purpose, retains loyal customers, or has low maintenance cost. The matrix tells us where the product sits, not what to do. That decision depends on what else is in the portfolio and what resources it's consuming.",
                    "Yes — the BCG framework is clear that Dogs should be divested or discontinued. The data doesn't lie.",
                    "A Dog just means the market is mature. It's actually a good position to be in because the competition is low and the product is established."
                ],
                "correctIndex": 0,
                "explanation": "Option A is correct — it gives a nuanced, honest answer that respects the framework while adding professional context. Strategic frameworks are tools for thinking, not automatic decision-making machines. A Dog can have strategic value (it may bundle with a Star product, or serve a segment you want to retain). Option B is too rigid — it treats the matrix as a rulebook, which no experienced strategist does. Option C misreads the BCG model: a Dog has low growth AND low share, which is not a comfortable position."
            },
            {
                "customerLine": "We want to go after the enterprise segment and the SME segment at the same time. Can we do both?",
                "options": [
                    "Of course — the more segments you cover, the larger your addressable market. More segments means more revenue opportunity.",
                    "Technically yes, but the Ansoff framework would flag that as running two growth strategies simultaneously — market penetration in SME and market development in enterprise. That spreads resources and focus. It's worth asking: which segment has the stronger commercial case right now, and which do we pursue first?",
                    "That depends on your budget. If you have the money, you can pursue multiple segments without any strategic risk."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it acknowledges the option without endorsing it blindly, applies the relevant framework (Ansoff), names the specific risk (resource and focus), and asks a clarifying question to move the conversation forward. This is what a strategic advisor sounds like. Option A ignores the execution complexity of serving two very different segments simultaneously. Option C reduces a strategic question to a budget question, which misses the point — even well-funded companies fail when they split focus across incompatible segments."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the strategy presentation extract. Three lines have a grammar mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Based on the BCG matrix, the enterprise product is a Cash Cow — it generates reliable revenue but the market is no longer growing."
            },
            {
                "speaker": "Dana",
                "text": "The Ansoff framework suggest we should focus on market penetration in the SME segment before attempting product development."
            },
            {
                "speaker": "Riley",
                "text": "There's a clear gap in the market for a platform that serving regulated SMEs — no competitor is doing this well at scale."
            },
            {
                "speaker": "Marcus",
                "text": "If we commit to this positioning, we need to make sure the value proposition is specific and measurable."
            },
            {
                "speaker": "Dana",
                "text": "This strategy plays to our strengths in compliance-aware design, which we have builded over the last three years."
            },
            {
                "speaker": "Riley",
                "text": "The risk is real, but the strategic fit is strong. I recommend we move forward with the niche positioning."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "suggest",
                "correction": "suggests",
                "explanation": "'The Ansoff framework' is a singular subject, so the verb must be 'suggests' — not 'suggest'. This is subject-verb agreement. In English, third-person singular subjects (he, she, it, the framework, the data) take an -s on the verb in present simple: 'it suggests', 'the model shows', 'the matrix tells us'. 'Suggest' (without -s) is used with plural subjects: 'the results suggest', 'these frameworks suggest'."
            },
            {
                "lineIndex": 2,
                "incorrectText": "that serving",
                "correction": "that serves",
                "explanation": "In a relative clause, the verb must agree with its subject and be in the correct form. 'A platform that serves' — the relative pronoun 'that' refers to 'a platform' (singular), so the verb is 'serves' (third-person singular present). 'That serving' is incorrect because '-ing' forms cannot be the main verb of a clause without an auxiliary verb. Compare: 'a company that is serving' (present continuous) vs. 'a company that serves' (present simple) — both are correct, but 'that serving' alone is not."
            },
            {
                "lineIndex": 4,
                "incorrectText": "have builded",
                "correction": "have built",
                "explanation": "'Built' is the irregular past participle of 'build'. Irregular verbs do not add '-ed' to form the past participle — they have their own forms: build → built, bring → brought, think → thought, write → written. 'Have builded' is a very common error when learners apply the regular '-ed' rule to an irregular verb. The correct present perfect is: 'we have built', 'she has built', 'they have built'. Always check irregular verb lists for verbs like build, buy, bring, catch, and fight."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The presenter starts a sentence in a strategy meeting. Work with your partner to finish it professionally.",
        "items": [
            {
                "customerLine": "The board is asking why we should focus on a niche instead of going after the whole market.",
                "salespersonStart": "That's a fair challenge. The reason we recommend a niche-first approach is that...",
                "suggestedCompletion": "our current resources are best deployed where we have a genuine competitive advantage — the regulated SME space. Trying to serve all segments simultaneously would dilute our message, split our product team, and make us a generalist in a market full of generalists. The niche gives us a defensible position to grow from."
            },
            {
                "customerLine": "What does the BCG matrix actually tell us to do with our legacy product?",
                "salespersonStart": "The matrix doesn't give us a specific instruction — it gives us a framework for the conversation. In this case, it's telling us that...",
                "suggestedCompletion": "the legacy product is consuming resources in a market that is no longer growing. That doesn't automatically mean we cut it — but it does mean we should ask: is the revenue it generates worth what we're investing? If the answer is no, we harvest it or phase it out and redirect the investment to the Question Mark that has real upside."
            },
            {
                "customerLine": "How do we write a value proposition that actually stands out?",
                "salespersonStart": "A strong value proposition has three things: who it is for, what problem it solves, and why you specifically...",
                "suggestedCompletion": "are better than the alternative. So instead of 'we help businesses grow', you say something like: 'We help financial services SMEs reduce compliance risk in their marketing by 40% — using a platform built specifically for regulated industries.' That's specific, it names the audience, it quantifies the benefit, and it names the differentiator. The board will remember it."
            }
        ]
    }
},
};
