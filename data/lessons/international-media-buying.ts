import { Lesson } from '@/types/lesson';

export const internationalMediaBuying: Lesson = {
  slug: 'international-media-buying',
  title: 'International Media Buying',
  subtitle: 'The language of planning, buying, and evaluating paid media at a global scale',
  level: 'C1-C2',
  description: 'Media buying is how brands pay to get in front of audiences — on TV, online, in print, on radio, and outdoors. At a global scale, media plans involve enormous budgets, complex negotiations, and highly technical metrics. This lesson covers the vocabulary you need to brief an agency, read a media plan, evaluate performance, and defend a budget in any international market.',
  heroImage: '/images/international-media-buying-hero.png',

  vocabulary: [
    {
      word: 'GRP (GROSS RATING POINT)',
      partOfSpeech: 'noun',
      definition: 'A measure of how much advertising exposure a campaign delivers. One GRP = 1% of the target audience reached once. 200 GRPs = 100% reached twice, or 50% reached four times.',
      example: "Riley said: The plan delivers 350 GRPs over six weeks. That's a decent weight for a brand awareness campaign in a new market. But we need to check the reach and frequency split.",
      imageSlug: '/images/grp.png',
    },
    {
      word: 'CPT (COST PER THOUSAND)',
      partOfSpeech: 'noun',
      definition: 'The cost of reaching 1,000 people with an ad. A standard metric for comparing how efficient different media channels or placements are.',
      example: "Marcus said: The CPT for TV in Germany is €18. Online video is €6. Riley said: Don't just buy the cheapest CPT — check whether the quality of the audience exposure is comparable.",
      imageSlug: '/images/cpt.png',
    },
    {
      word: 'MEDIA WEIGHT',
      partOfSpeech: 'noun',
      definition: 'The total volume of advertising activity in a market — usually measured in GRPs or spend. A heavier media weight means more exposure.',
      example: "We're outspent three to one in France. Until we match the competitor's media weight, we can't expect to shift brand awareness metrics. You can't whisper in a shouting match.",
      imageSlug: '/images/media-weight.png',
    },
    {
      word: 'FLIGHTING',
      partOfSpeech: 'noun',
      definition: 'A media scheduling strategy where advertising runs in planned bursts (flights) with gaps in between, rather than continuously.',
      example: "Riley said: The budget doesn't cover 52 weeks of activity. So we're flighting — four weeks on, four weeks off, across the whole year. The goal is to maintain presence without spreading the budget too thin.",
      imageSlug: '/images/flighting.png',
    },
    {
      word: 'SHARE OF VOICE (SOV)',
      partOfSpeech: 'noun',
      definition: 'Your brand\'s advertising spend as a percentage of all advertising spend in the category. If the total market spends £10m and you spend £2m, your SOV is 20%.',
      example: "Marcus said: Our share of voice has dropped from 35% to 22% since the competitor increased their spend. Riley said: Then we're buying market share decline. SOV below share of market means we'll lose ground.",
      imageSlug: '/images/share-of-voice-media.png',
    },
    {
      word: 'SOV PARITY',
      partOfSpeech: 'noun',
      definition: 'When your share of voice equals your share of market — the breakeven point. Above parity typically means market share growth; below means decline.',
      example: "The goal for the first year is SOV parity — match the competitor's presence so we at least stop losing ground. In year two, we go above parity to grow.",
      imageSlug: '/images/sov-parity.png',
    },
    {
      word: 'REACH',
      partOfSpeech: 'noun',
      definition: 'The number (or percentage) of unique people who see your ad at least once during a campaign. Different from impressions, which count each view.',
      example: "Riley said: The plan delivers 75% reach among adults 25-54 in the UK. That means three out of every four people in our target audience will see the campaign at least once.",
      imageSlug: '/images/reach-media.png',
    },
    {
      word: 'FREQUENCY',
      partOfSpeech: 'noun',
      definition: 'The average number of times each person in your target audience sees your ad during a campaign.',
      example: "Marcus said: We have great reach but the frequency is only 1.8. Riley said: For a new brand message, we need a minimum of three to four. People don't remember an ad they've only seen twice.",
      imageSlug: '/images/frequency-media.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE PLAN DELIVERS [X] GRPs AGAINST [AUDIENCE]',
      definition: 'The standard phrase for describing what a media plan will achieve in terms of exposure for a specific target group.',
      example: "'The plan delivers 280 GRPs against adults 18-34, with a reach of 68% and an average frequency of 4.1 over the eight-week flight.'",
      imageSlug: '/images/the-plan-delivers-grps.png',
    },
    {
      phrase: 'WE\'RE OUTSPENT IN [MARKET]',
      definition: 'A phrase used when a competitor\'s media spend is higher than yours in a specific market — meaning your share of voice is lower.',
      example: "'We're outspent in Italy by a ratio of two to one. Until we address that imbalance, it's very difficult to build brand awareness against a competitor with double our media weight.'",
      imageSlug: '/images/were-outspent-in.png',
    },
    {
      phrase: 'WE\'RE RUNNING A [X]-WEEK FLIGHT',
      definition: 'A phrase used to describe a period of concentrated advertising activity within a flighted media schedule.',
      example: "'We're running a six-week flight in Q3, then going dark in Q4 to save budget for the January relaunch. The GRP weight during the flight is 300 — enough to build meaningful reach.'",
      imageSlug: '/images/running-a-week-flight.png',
    },
    {
      phrase: 'THE CPT IS [X] — COMPARED TO [Y] FOR [CHANNEL]',
      definition: 'A phrase used when comparing the cost efficiency of different channels or placements.',
      example: "'The CPT for premium TV spots is €22. Compared to €7 for pre-roll video. The TV reach is broader but the digital targeting is more precise — which matters for this campaign.'",
      imageSlug: '/images/the-cpt-is-compared-to.png',
    },
    {
      phrase: 'OUR SOV IS BELOW / AT / ABOVE PARITY',
      definition: 'A phrase used to describe whether your advertising presence is weaker than, equal to, or stronger than your current market position.',
      example: "Riley said: Our SOV is below parity in three of the five markets. That means we're losing ground, even if sales data doesn't show it yet. The brand metrics will follow in six to nine months.",
      imageSlug: '/images/our-sov-is.png',
    },
    {
      phrase: 'WE NEED TO BALANCE REACH AND FREQUENCY',
      definition: 'A phrase used when discussing how to allocate a media budget — more reach means more unique people, more frequency means showing the ad to the same people more often.',
      example: "Marcus said: We need to balance reach and frequency. At the current budget, if we chase 80% reach, frequency drops to 1.5 — which probably isn't enough for message recall. Riley said: Let's model both scenarios.",
      imageSlug: '/images/balance-reach-and-frequency.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Marcus, the agency has sent through the media plan for the Q3 launch. Can you review the key metrics before the call tomorrow?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I've looked at it. The plan delivers 320 [[GRP:a measure of how much advertising exposure a campaign delivers — 1 GRP = 1% of target audience reached once]] against adults 25-44 over eight weeks. [[Reach:the percentage of unique people who see the ad at least once]] is 72%, [[frequency:the average number of times each person sees the ad]] is 4.4.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's a solid plan for a brand awareness objective. What's the [[CPT:cost per thousand — how much it costs to reach 1,000 people]] across the different channels?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "TV is running at €24 CPT. Digital video is €8. Out-of-home is €11.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "TV is expensive but it'll drive most of the broad reach. What's the [[media weight:the total volume of advertising activity, measured in GRPs or spend]] compared to the competitor?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We're outspent. The competitor is running at roughly 450 GRPs per quarter. We're at 320.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "So our [[share of voice:brand advertising spend as a percentage of all spend in the category]] is below [[SOV parity:when your share of voice equals your share of market]]. We're going to lose ground on brand awareness unless we close that gap.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Can we go dark for a few weeks and save the budget to increase [[flighting:a scheduling strategy where advertising runs in planned bursts with gaps]] in Q4?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Possibly. If we cut two weeks from the Q3 flight and roll that spend into Q4, we can run a heavier burst around the holiday peak. The risk is that frequency drops during the Q3 period.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "If frequency drops to 2.5 or below, we might not get enough message recall.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly. We need to balance reach and frequency carefully. Ask the agency to model two scenarios — the current plan, and a front-loaded flight with a heavier Q4 burst. Then we decide.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the international markets? The plan right now is UK and Germany only.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "France goes on hold until we resolve the distributor issue. Spain and Italy — the local teams can run lightweight digital campaigns with local CPTs. But the main TV weight stays in the two core markets for now.",
    }
  ],

  matchingExercise: [
    { "word": "GRP (Gross Rating Point)", "definition": "a measure of total advertising exposure — 1 GRP equals 1% of the target audience reached once" },
    { "word": "CPT (Cost Per Thousand)", "definition": "the cost of reaching 1,000 people — used to compare the efficiency of different channels" },
    { "word": "media weight", "definition": "the total volume of advertising activity in a market, measured in GRPs or spend" },
    { "word": "flighting", "definition": "scheduling advertising in planned bursts with gaps in between" },
    { "word": "share of voice", "definition": "your brand's advertising spend as a percentage of all spend in the category" },
    { "word": "SOV parity", "definition": "when your share of voice equals your current share of market" },
    { "word": "reach", "definition": "the percentage of unique people who see your ad at least once" },
    { "word": "frequency", "definition": "the average number of times each person in the target audience sees the ad" }
  ],

  fillBlankExercise: [
    { "before": "The plan delivers 300 ", "after": " against adults 18-44 — that's a solid exposure level for a brand awareness campaign.", "answer": "GRPs" },
    { "before": "TV has a ", "after": " of €20 per thousand. Digital video is €6. We'll use both — TV for reach, digital for targeting.", "answer": "CPT" },
    { "before": "We're running a four-week ", "after": " in September, then going dark before the Christmas push.", "answer": "flight" },
    { "before": "Our ", "after": " is 18%. The category leader has 45%. We need a much bigger budget just to be noticed.", "answer": "share of voice" },
    { "before": "We need ", "after": " parity before we can start growing market share. Right now we're just trying not to fall further behind.", "answer": "SOV" },
    { "before": "The campaign reaches 70% of the target audience. But the ", "after": " is only 1.8 — too low for message recall.", "answer": "frequency" }
  ],

  multipleChoiceExercise: [
    {
      "question": "What does Riley mean when she says 'SOV below parity means we'll lose ground'?",
      "options": [
        "The campaign is reaching below the target audience size",
        "When your advertising share is lower than your market share, you typically lose market share over time",
        "The budget is below what was agreed in the annual plan"
      ],
      "correctIndex": 1
    },
    {
      "question": "What risk does Riley identify when reducing the Q3 flight to save budget for Q4?",
      "options": [
        "The CPT will increase if fewer weeks are booked",
        "The agency may not be able to change the booking at short notice",
        "Frequency may drop too low for effective message recall"
      ],
      "correctIndex": 2
    },
    {
      "question": "Why does Riley say 'Don't just buy the cheapest CPT'?",
      "options": [
        "Because cheap CPT channels always have low-quality content",
        "Because the quality of audience exposure may not be comparable across channels",
        "Because digital CPTs don't include production costs"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Marcus mean when he says 'we're outspent' in the competitor comparison?",
      "options": [
        "The competitor has a larger overall company budget",
        "The competitor is spending more on advertising in the category, meaning their share of voice is higher",
        "The agency has overcharged for the media plan"
      ],
      "correctIndex": 1
    }
  ],

  warmUp: {
    "questions": [
      "Think about an ad you've seen many times. After seeing it repeatedly, did your feelings about the brand change — positively or negatively?",
      "Have you ever noticed that a brand suddenly seems to be everywhere — TV, online, billboards — all at the same time? That's likely a media flight. Can you think of an example?",
      "If you had a limited advertising budget for a new product launch, would you spread it evenly across 12 months, or concentrate it in two or three months? Why?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "The campaign delivered 400 _____ against our core audience — a strong result for a six-week flight.",
        "options": ["GRPs", "impressions", "ratings"],
        "correctIndex": 0,
        "explanation": "'GRPs' (Gross Rating Points) is the standard metric for measuring total advertising exposure in a media plan — 1 GRP equals 1% of the target audience reached once. 'Impressions' count every view, including repeat views, and are a digital metric. 'Ratings' are used for individual TV programmes, not total campaign delivery. When describing total campaign weight, use 'GRPs'."
      },
      {
        "sentence": "The _____ for the TV spots is €19 per thousand — slightly above our benchmark, but the audience quality justifies it.",
        "options": ["CPT", "cost efficiency", "rate card"],
        "correctIndex": 0,
        "explanation": "'CPT' (Cost Per Thousand) is the standard metric for comparing how much it costs to reach 1,000 people across different channels or placements. 'Cost efficiency' is a general phrase, not a specific metric. 'Rate card' is the published list of prices from a media owner — not the calculated cost per audience reached. When comparing channel costs, the metric is always 'CPT'."
      },
      {
        "sentence": "We're _____ the campaign — three weeks on, three weeks off — because the budget doesn't support continuous activity.",
        "options": ["flighting", "scheduling", "pulsing"],
        "correctIndex": 0,
        "explanation": "'Flighting' is the specific media term for running advertising in planned bursts with deliberate gaps in between. 'Scheduling' is a general word that doesn't describe this specific pattern. 'Pulsing' is a related strategy where advertising runs continuously at a low level with periodic bursts — it's not the same as flighting. When the strategy is burst-gap-burst, the word is 'flighting'."
      },
      {
        "sentence": "Our _____ in France is 14% — but our market share is 22%. We're underinvesting and we'll pay for it in brand metrics next year.",
        "options": ["share of voice", "media presence", "brand awareness"],
        "correctIndex": 0,
        "explanation": "'Share of voice' is the precise metric for your brand's advertising spend as a percentage of all advertising spend in the category. 'Media presence' is informal and unmeasurable. 'Brand awareness' is an output metric — what you're trying to build — not an input like spend. When talking about how much you're advertising relative to the competition, the metric is 'share of voice'."
      },
      {
        "sentence": "The campaign has great _____ — 78% of the target audience will see the ad. But each person only sees it twice, which is too low for recall.",
        "options": ["reach", "coverage", "penetration"],
        "correctIndex": 0,
        "explanation": "'Reach' is the standard media term for the percentage of unique people who see your ad at least once during a campaign. 'Coverage' is sometimes used informally but is not the standard metric. 'Penetration' is a market share or product usage metric, not a media metric. When describing how many unique people a campaign will reach, the word is 'reach'."
      },
      {
        "sentence": "The target _____ for this campaign is four. We want each person in the audience to see the ad at least four times for the message to stick.",
        "options": ["frequency", "exposure", "repetition"],
        "correctIndex": 0,
        "explanation": "'Frequency' is the standard media term for the average number of times each person in the target audience sees the ad during a campaign. 'Exposure' is a general word — technically correct but not the standard metric used in media plans. 'Repetition' is a concept, not a measurable media metric. When setting a target for how many times someone should see an ad, the metric is 'frequency'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "The agency is recommending we focus on digital this quarter to keep the CPT down. What do you think?",
          "options": [
            "That sounds right — lower CPT is always better for the budget.",
            "CPT is one factor, but it's not the only one. Digital has a lower CPT, but the brand-building reach of TV may be more important at this stage of the campaign. What's the GRP delivery on each option, and what does it do to our share of voice against the competitor?",
            "I'll defer to the agency — they know the market better than we do."
          ],
          "correctIndex": 1,
          "explanation": "Option B challenges the CPT-only framing and brings in the metrics that actually matter for the strategic decision: GRP delivery, reach, and share of voice. This is how a senior client engages with a media agency — not accepting the frame, but testing it against the full picture. Option A accepts a single metric without question. Option C surrenders strategic control to the agency."
        },
        {
          "customerLine": "We're thinking of running the campaign continuously for 52 weeks. Is that the right strategy?",
          "options": [
            "That depends on the budget. If the media weight is too low across 52 weeks, flighting with concentrated bursts might deliver better reach and frequency at key moments.",
            "Continuous is always better — it keeps the brand in front of consumers all year.",
            "That's a question for the media agency — they can model the scenarios."
          ],
          "correctIndex": 0,
          "explanation": "Option A gives the correct strategic answer — continuous activity is only effective if the weekly GRP weight is high enough to generate meaningful reach and frequency. Below a certain threshold, flighting achieves better results per £ spent. Option B makes an unsupported claim. Option C defers when the client is asking for a professional view."
        },
        {
          "customerLine": "Should we be worried that the competitor is spending more than us in Germany?",
          "options": [
            "Not necessarily — quality of creative matters more than spend.",
            "Yes — if their share of voice is significantly above their share of market, they're likely buying brand growth at our expense. We should model what SOV parity would cost and whether the business case supports closing the gap.",
            "It depends on the category. Some categories are less sensitive to media weight than others."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives the most precise and actionable answer — it applies the SOV/market share relationship directly and proposes the right next step: model the cost of parity. This is the framework every experienced media buyer uses. Option A introduces creative quality, which is a separate variable. Option C is too vague to be actionable."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "The plan delivers 300 GRPs. That means 300% of the target audience will see the ad." },
        { "speaker": "Riley", "text": "Not quite — 300 GRPs means the total exposure is equivalent to reaching 100% of the audience three times. But reach and frequency split differently in practice." },
        { "speaker": "Marcus", "text": "Got it. And our share of voice is 30% — which is the same as our market share of 30%. So we're above SOV parity." },
        { "speaker": "Riley", "text": "That's exactly SOV parity — not above it. Above parity would be a share of voice higher than your share of market." },
        { "speaker": "Marcus", "text": "And the CPT for TV is €15. That's more expensive than digital at €6, so we should move all budget to digital." },
        { "speaker": "Riley", "text": "CPT alone doesn't tell you which channel to buy. TV's higher CPT often comes with broader reach and different audience quality — you need to look at total GRP delivery and strategic fit, not just cost per thousand." }
      ],
      "mistakes": [
        {
          "lineIndex": 0,
          "incorrectText": "That means 300% of the target audience will see the ad",
          "correction": "300 GRPs means total exposure equivalent to reaching 100% of the audience three times — reach and frequency combine to make the GRP total",
          "explanation": "GRPs don't mean '300% of the audience' — that's impossible. 300 GRPs represents 300 percentage points of exposure, which could mean 100% reach with a frequency of 3, or 75% reach with a frequency of 4, etc. The GRP total is always reach multiplied by frequency."
        },
        {
          "lineIndex": 2,
          "incorrectText": "So we're above SOV parity",
          "correction": "SOV equal to market share = parity, not above parity",
          "explanation": "Marcus has confused parity with being above parity. SOV parity means your share of voice equals your share of market — 30% SOV with 30% market share is exactly parity. Above parity means your SOV exceeds your market share, which is when you typically buy market share growth."
        },
        {
          "lineIndex": 4,
          "incorrectText": "so we should move all budget to digital",
          "correction": "Lower CPT doesn't mean better — TV reaches different audiences and builds brand differently; decisions need to consider GRP delivery and strategic fit",
          "explanation": "This is a common media buying mistake — optimising purely on CPT. A lower CPT means cheaper reach, but not necessarily better reach. TV and digital serve different strategic purposes. Moving all budget to digital to save on CPT could destroy the brand-building effect the campaign needs."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "The board wants to know why we're spending so much on TV when digital is cheaper.",
          "salespersonStart": "The CPT for digital is lower, yes — but the question isn't which channel is cheapest. It's which combination delivers the right GRP weight, reach, and frequency against our audience. TV is driving 60% of our total reach because...",
          "suggestedCompletion": "the target audience — adults 45-60 — is still a heavy TV consumer. Digital alone wouldn't reach them with the same frequency. We've modelled both options. The TV-led plan delivers 320 GRPs and 71% reach. Digital-only delivers 210 GRPs and 48% reach — not enough for the brand awareness objective."
        },
        {
          "customerLine": "We can't afford to run the campaign for 52 weeks. What do you recommend?",
          "salespersonStart": "I recommend a flighted approach — three concentrated bursts timed around our key sales moments. Each flight runs for four to six weeks with enough GRP weight to build real reach and frequency. The gaps between flights allow the budget to...",
          "suggestedCompletion": "concentrate where it matters most. This is more effective than spreading a thin level of spend across 52 weeks — which would give you continuous presence but at a frequency too low to drive message recall. Flighting delivers better results per £ at this budget level."
        },
        {
          "customerLine": "Our share of voice is 22% but our market share is 28%. Is that a problem?",
          "salespersonStart": "Yes — you're below SOV parity, which means you're underinvesting relative to your market position. The research shows that brands below parity tend to lose market share over 12 to 18 months, even if sales look stable now. To reach parity you need to...",
          "suggestedCompletion": "increase your share of voice to at least 28%. Based on current category spend, that means approximately £2.4m in additional media investment. I'd recommend modelling the return — if protecting your 28% market share is worth more than the investment cost, the case for parity spend is clear."
        }
      ]
    }
  },
};
