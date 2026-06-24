import { Lesson } from '@/types/lesson';

export const marketingDueDiligence: Lesson = {
  slug: 'marketing-due-diligence',
  title: 'Marketing Due Diligence',
  subtitle: 'How to evaluate a brand, diagnose a marketing problem, and write a due diligence report',
  level: 'C1-C2',
  description: 'Before a company is acquired, before a major agency is hired, before a new market is entered — someone has to do the work. Marketing due diligence is the process of rigorously examining a brand or a business to understand what is really there: the real brand equity, the genuine customer loyalty, the actual competitive position. This lesson teaches you the language and process of marketing due diligence at a professional level.',
  heroImage: '/images/marketing-due-diligence-hero.png',

  vocabulary: [
    {
      word: 'DUE DILIGENCE',
      partOfSpeech: 'noun',
      definition: 'A thorough investigation of a business or brand before making a major decision. Looking carefully at everything before committing.',
      example: "Riley said: We never acquire a company without full marketing due diligence. We need to know the real brand health — not just what the numbers say on paper.",
      imageSlug: '/images/due-diligence-mdd.png',
    },
    {
      word: 'AUDIT',
      partOfSpeech: 'noun',
      definition: 'A detailed review of something — finances, marketing, brand — to find out what is really there.',
      example: "Marcus said: Before we present the findings, we need to complete the brand audit. Riley said: The audit takes three weeks. Start with customer research and work backwards.",
      imageSlug: '/images/audit.png',
    },
    {
      word: 'VALUATION',
      partOfSpeech: 'noun',
      definition: 'How much something is worth — the financial value placed on a brand, business, or asset.',
      example: "Riley said: The company's financial valuation is high, but the brand valuation is weaker than it looks — customer loyalty is declining and NPS has dropped 14 points in two years.",
      imageSlug: '/images/valuation.png',
    },
    {
      word: 'RISK',
      partOfSpeech: 'noun',
      definition: 'A possible negative outcome — something that could go wrong. In due diligence, you identify and evaluate every material risk.',
      example: "Marcus said: What are the main risks? Riley said: Three. Over-reliance on one customer segment, weak brand differentiation, and a competitor that is moving into their core market.",
      imageSlug: '/images/risk-mdd.png',
    },
    {
      word: 'INTANGIBLE',
      partOfSpeech: 'adjective',
      definition: 'Something that has value but cannot be physically seen or measured easily — like brand reputation, customer loyalty, or intellectual property.',
      example: "Riley said: The intangibles here are actually the most valuable things — the brand recognition, the community they've built, and the customer trust. None of that appears on the balance sheet.",
      imageSlug: '/images/intangible.png',
    },
    {
      word: 'BRAND HEALTH',
      partOfSpeech: 'noun',
      definition: 'A measure of how strong a brand is — looking at awareness, customer perception, loyalty, and competitive position.',
      example: "Marcus asked: What is the current brand health? Riley said: Awareness is high — about 78%. But consideration is dropping. Customers know the brand but they're choosing competitors. That's a serious problem.",
      imageSlug: '/images/brand-health.png',
    },
    {
      word: 'NET PROMOTER SCORE',
      partOfSpeech: 'noun',
      definition: 'A measure of customer loyalty — how likely customers are to recommend the brand to others. Abbreviated to NPS. Ranges from -100 to +100.',
      example: "Riley said: Their NPS is +12. For this category, the benchmark is +40. That gap tells you everything — customers are not unhappy, but they are not advocates either.",
      imageSlug: '/images/net-promoter-score.png',
    },
    {
      word: 'COMPETITIVE POSITION',
      partOfSpeech: 'noun',
      definition: 'How a brand stands relative to its competitors — its strengths, weaknesses, and differentiation in the market.',
      example: "Marcus said: The competitive position looks strong on paper. Riley said: On paper, yes. But their key differentiator is pricing, and three new entrants are already cheaper. That's not a sustainable position.",
      imageSlug: '/images/competitive-position.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE HEADLINE FINDING IS...',
      definition: 'A phrase used to lead with the most important conclusion in a due diligence or audit report.',
      example: "Riley opened the due diligence presentation: 'The headline finding is this: the brand has strong awareness but critically weak loyalty. Customers know them but don't choose them twice.'",
      imageSlug: '/images/the-headline-finding-is.png',
    },
    {
      phrase: 'ON THE SURFACE,...BUT ON CLOSER INSPECTION,...',
      definition: 'A phrase for describing the difference between how something appears and how it actually is when you look more carefully.',
      example: "'On the surface, the revenue numbers look strong. But on closer inspection, 60% of that revenue comes from three customers — any one of which could leave.'",
      imageSlug: '/images/on-the-surface-but-on-closer-inspection.png',
    },
    {
      phrase: 'THE KEY RISK WE IDENTIFIED IS...',
      definition: 'A phrase used to name the single most important danger found during the due diligence process.',
      example: "'The key risk we identified is over-reliance on a single product line. If consumer preferences shift — and they are already showing signs of doing so — the business is very exposed.'",
      imageSlug: '/images/the-key-risk-we-identified-is.png',
    },
    {
      phrase: 'THIS IS NOT REFLECTED IN THE CURRENT VALUATION',
      definition: 'A phrase used when the price being asked does not account for a problem or risk found during due diligence.',
      example: "Riley said: The NPS has dropped from +38 to +12 in 18 months. That represents a significant deterioration in customer loyalty — and this is not reflected in the current valuation.",
      imageSlug: '/images/this-is-not-reflected-in-the-current-valuation.png',
    },
    {
      phrase: 'THE INTANGIBLES HERE ARE...',
      definition: 'A phrase used to highlight the value that cannot easily be put on a balance sheet — brand reputation, community, loyalty.',
      example: "'The intangibles here are significant. The brand has a 20-year heritage and a loyal community of advocates. That takes years to build and cannot simply be bought or replicated.'",
      imageSlug: '/images/the-intangibles-here-are.png',
    },
    {
      phrase: 'OUR RECOMMENDATION IS TO [PROCEED / NOT PROCEED] BECAUSE...',
      definition: 'The standard closing phrase of a due diligence report — a clear verdict followed by the main reason.',
      example: "'Our recommendation is to proceed, but with a renegotiated valuation. The brand has genuine value — but the loyalty data suggests the current price is approximately 20% too high.'",
      imageSlug: '/images/our-recommendation-is-to-proceed.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the board has asked us to complete marketing [[due diligence:a thorough investigation before making a major decision]] on a brand we're considering acquiring. Where do we start?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Start with the [[brand health:how strong a brand is — awareness, loyalty, and competitive position]] data. What does the market research say? Not what they tell us — what the customers say.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Their awareness is very high — around 78%. That's impressive for their category.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Awareness is good. What's the [[net promoter score:a measure of how likely customers are to recommend the brand — ranges from -100 to +100]]?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "+12. Is that good?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Not for this category. The benchmark is +40. That gap means customers know the brand but they're not advocates. They're not recommending it. On the surface the numbers look strong — but on closer inspection, loyalty is the real problem.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[competitive position:how a brand stands relative to its competitors]]? They claim to be the market leader.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "They were the leader 18 months ago. Now there are three new entrants with a lower price point. Their differentiation is price — and they're losing that. The [[audit:a detailed review to find out what is really there]] data confirms it: market share dropped 3.2% last quarter.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What's the [[valuation:how much something is worth financially]] based on?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Revenue multiples from 18 months ago — before the competitive picture changed. The loyalty decline and the market share loss are not reflected in the current valuation. That's our leverage in the negotiation.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Are there [[intangible:something with value that cannot be easily measured]] assets worth noting?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — two significant ones. Their founder has a personal brand with a real following. And their customer community is genuinely engaged. Those [[intangible]]s take years to build. They are real value.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So what is the main [[risk:a possible negative outcome — something that could go wrong]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Loyalty erosion. It's already happening and it's accelerating. Our recommendation: proceed, but negotiate the price down by 15 to 20% to reflect the real brand health. The intangibles justify the acquisition — the current valuation doesn't.",
    }
  ],

  matchingExercise: [
    { "word": "due diligence", "definition": "a thorough investigation of a business before making a major decision" },
    { "word": "audit", "definition": "a detailed review to find out what is really there" },
    { "word": "valuation", "definition": "how much something is worth — the financial value placed on it" },
    { "word": "risk", "definition": "a possible negative outcome — something that could go wrong" },
    { "word": "intangible", "definition": "something with real value that cannot be easily measured — like brand reputation" },
    { "word": "brand health", "definition": "how strong a brand is — awareness, loyalty, and competitive position" },
    { "word": "net promoter score", "definition": "a measure of customer loyalty — how likely customers are to recommend the brand" },
    { "word": "competitive position", "definition": "how a brand stands relative to its competitors" }
  ],

  fillBlankExercise: [
    { "before": "The headline finding: awareness is high but ", "after": " is dangerously low. Customers know them but don't recommend them.", "answer": "loyalty" },
    { "before": "Their NPS is +12 against a category benchmark of +40. That is not reflected in the current ", "after": ".", "answer": "valuation" },
    { "before": "We need a full brand ", "after": " — customer research, competitive data, and a review of all assets.", "answer": "audit" },
    { "before": "The founder's personal brand and the customer community are the biggest ", "after": "s — you can't see them on a balance sheet but they are real value.", "answer": "intangible" },
    { "before": "On the surface it looks strong. But on closer inspection, their ", "after": " position is being eroded by three new competitors.", "answer": "competitive" },
    { "before": "Our recommendation: proceed with the acquisition but renegotiate the price. The brand ", "after": " justifies buying — the current price does not.", "answer": "health" }
  ],

  multipleChoiceExercise: [
    {
      "question": "What does Riley say the NPS of +12 tells you about the brand?",
      "options": [
        "Customers are very happy and loyal",
        "Customers know the brand but are not advocates — the loyalty gap is a serious problem",
        "The NPS is strong for the category — no action needed"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why does Riley say the current valuation is too high?",
      "options": [
        "Because the brand has no significant intangible assets",
        "Because the revenue multiples used are from 18 months ago — before loyalty declined and market share dropped",
        "Because the company's awareness numbers are too low"
      ],
      "correctIndex": 1
    },
    {
      "question": "What are the two intangible assets Riley identifies?",
      "options": [
        "The product patents and the distribution network",
        "The founder's personal brand and the engaged customer community",
        "The marketing technology platform and the CRM database"
      ],
      "correctIndex": 1
    },
    {
      "question": "What is Riley's final recommendation?",
      "options": [
        "Do not proceed — the risks are too high",
        "Proceed immediately at the current valuation",
        "Proceed, but negotiate the price down by 15 to 20% to reflect the real brand health"
      ],
      "correctIndex": 2
    }
  ],

  warmUp: {
    "questions": [
      "Have you ever investigated a supplier, partner, or acquisition target before committing to them? What did you look for?",
      "Do you think brand reputation has real financial value? Can you think of a brand where reputation is worth more than the physical assets?",
      "What would make you trust — or not trust — a due diligence report? What makes one credible?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "Their NPS has dropped from +38 to +12 in 18 months. This is not _____ in the current valuation.",
        "options": ["reflected", "included", "shown"],
        "correctIndex": 0,
        "explanation": "'Reflected in' is the fixed phrase for saying that a factor has been taken into account in a price or calculation. 'This is not reflected in the current valuation' means the price doesn't account for this negative development. 'Included in' would be grammatically possible but less natural in financial contexts. 'Shown in' is informal. Use 'reflected in' for financial and valuation discussions."
      },
      {
        "sentence": "On the surface the revenue looks strong, but _____ it's almost entirely driven by three clients.",
        "options": ["on closer inspection", "looking more carefully", "after investigation"],
        "correctIndex": 0,
        "explanation": "'On closer inspection' is the fixed phrase for describing what you find when you look more carefully at something. It is paired with 'on the surface' to create a before-and-after reveal structure: surface appearance vs. deeper reality. 'Looking more carefully' is informal. 'After investigation' is too vague. Use 'on the surface... but on closer inspection' as a set phrase."
      },
      {
        "sentence": "The brand's reputation and customer loyalty are the most important _____ — they don't appear on the balance sheet but they're real value.",
        "options": ["intangibles", "assets", "value drivers"],
        "correctIndex": 0,
        "explanation": "'Intangibles' is the specific accounting and business term for assets that have value but cannot be physically touched or easily measured — brand reputation, customer loyalty, intellectual property, community. 'Assets' is a broader term that can include both tangible and intangible things. 'Value drivers' is informal. When discussing brand equity and loyalty as non-physical sources of value, use 'intangibles'."
      },
      {
        "sentence": "We need a full brand _____ before we present our findings — customer data, market research, and competitive analysis.",
        "options": ["audit", "review", "assessment"],
        "correctIndex": 0,
        "explanation": "An 'audit' in this context is a systematic, detailed review of a brand's current state — its positioning, health, equity, and competitive situation. 'Review' and 'assessment' are also possible but less specific. In marketing due diligence, a 'brand audit' is the standard term for the full analytical process of evaluating a brand's health and assets."
      },
      {
        "sentence": "The _____ of their competitive position depends on price — but three new entrants are already cheaper.",
        "options": ["differentiation", "strength", "advantage"],
        "correctIndex": 0,
        "explanation": "'Differentiation' is the specific marketing term for what makes a brand different from competitors — the unique reason to choose it. If a brand's differentiation is price, and competitors are now cheaper, the differentiation has been eroded. 'Strength' and 'advantage' describe the result of differentiation, not the specific strategy. Use 'differentiation' when analysing what makes a brand distinct."
      },
      {
        "sentence": "Our _____ is to proceed, but to renegotiate the valuation down by 15 to 20%.",
        "options": ["recommendation", "conclusion", "suggestion"],
        "correctIndex": 0,
        "explanation": "'Recommendation' is the standard word for the formal advice given at the end of a due diligence report or professional analysis. It is stronger than 'suggestion' (which sounds informal and optional) and more actionable than 'conclusion' (which describes a finding, not an action). In professional reporting, always use 'recommendation' for the verdict and proposed course of action."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "The brand we're looking at has really strong awareness. Isn't that enough to justify the price?",
          "options": [
            "Yes — awareness is the hardest metric to build. If they have that, the rest can follow.",
            "Awareness without loyalty is a warning sign. On the surface the numbers look strong — but on closer inspection their NPS is +12 against a category benchmark of +40. Customers know them but they're not choosing them twice. That gap has to be reflected in the valuation.",
            "It depends on the category. In some markets, awareness is the most valuable asset."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives a sophisticated analysis — it separates awareness from loyalty and uses specific data to explain the gap. This is exactly what due diligence should produce. Option A agrees without analysing the data. Option C hedges without adding insight."
        },
        {
          "customerLine": "The seller says the brand has significant intangible value. How do we quantify that?",
          "options": [
            "Intangibles are too difficult to quantify. We should focus on the financial metrics.",
            "Intangibles are real value, but they need to be assessed carefully. The founder's personal brand, the community, the content archive — these are genuine assets. They take years to build. The question is: how transferable are they? A brand community built around a founder may not survive the acquisition if the founder leaves.",
            "We can use a standard brand valuation formula — it accounts for intangibles automatically."
          ],
          "correctIndex": 1,
          "explanation": "Option B acknowledges the intangibles, takes them seriously, and then raises the critical due diligence question — transferability. This is high-level thinking. Option A dismisses intangibles entirely, which misses real value. Option C defers to a formula without thinking about the specific risks."
        },
        {
          "customerLine": "What's your overall recommendation on the acquisition?",
          "options": [
            "We're still working through the data. I'll come back to you when everything is confirmed.",
            "Our recommendation is to proceed, but with a renegotiated valuation. The brand has genuine assets — strong awareness, a loyal community, and a founder with real influence. But the loyalty data and the competitive position are weaker than the current price reflects. We believe a 15 to 20% reduction in the asking price is justified by the evidence.",
            "Proceed — the brand is undervalued and there are clear growth opportunities if we manage the integration well."
          ],
          "correctIndex": 1,
          "explanation": "Option B is a complete, balanced recommendation — it names the genuine positives, identifies the specific problems, and gives a clear verdict with a number. This is what a professional due diligence report looks like. Option A delays without reason. Option C is too optimistic and ignores the loyalty and competitive risks."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "We've completed the brand audit. The headline finding is that awareness is very high — around 78%." },
        { "speaker": "Riley", "text": "Good. What's the NPS?" },
        { "speaker": "Marcus", "text": "+12. Riley said that's strong — the category benchmark is +40." },
        { "speaker": "Riley", "text": "Exactly — +12 is below the benchmark. That loyalty gap is not reflected in the current valuation." },
        { "speaker": "Marcus", "text": "Are there any intangible assets? The seller mentioned the founder's personal brand and the customer community." },
        { "speaker": "Riley", "text": "Those are significant intangibles. But they appear clearly on the balance sheet, so the valuation already accounts for them." }
      ],
      "mistakes": [
        {
          "lineIndex": 2,
          "incorrectText": "Riley said that's strong — the category benchmark is +40",
          "correction": "An NPS of +12 against a benchmark of +40 is weak, not strong",
          "explanation": "This is a content error. Marcus attributes the wrong assessment to Riley. An NPS of +12 when the benchmark is +40 is a significant gap — it shows customers know the brand but are not advocates. Riley would never say +12 is 'strong' in this context."
        },
        {
          "lineIndex": 5,
          "incorrectText": "they appear clearly on the balance sheet",
          "correction": "Intangibles do not appear on the balance sheet — that is what makes them intangible",
          "explanation": "This is a fundamental error in the definition of intangibles. By definition, intangibles are things that have value but cannot be easily seen or measured on a balance sheet. The founder's personal brand and the customer community are not recorded as financial assets — they are off-balance-sheet value."
        },
        {
          "lineIndex": 0,
          "incorrectText": "awareness is very high — around 78%",
          "correction": "This line is correct",
          "explanation": "This is a factually correct and appropriate headline finding. High awareness is genuinely positive and worth noting in a brand audit. The real mistakes are in lines 3 and 6."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "The brand looks great on paper. Why are you concerned?",
          "salespersonStart": "On the surface, yes — the revenue numbers are strong and awareness is high. But on closer inspection...",
          "suggestedCompletion": "the loyalty data tells a different story. Their NPS has dropped 26 points in 18 months and market share is declining. Revenue is holding because of three large clients — if any one of them leaves, the picture changes dramatically. The current valuation doesn't account for any of that."
        },
        {
          "customerLine": "How do I structure a marketing due diligence report?",
          "salespersonStart": "Three sections. First: what you found — the brand health, the competitive position, and the customer data. Second: the risks you identified. Third: your recommendation — proceed or not, and at what price. Always lead with the headline finding: one sentence that tells the reader...",
          "suggestedCompletion": "the single most important thing they need to know. Everything else supports that one conclusion. If you can't say it in one sentence, you haven't finished the analysis yet."
        },
        {
          "customerLine": "The seller says there are significant intangible assets that justify the price.",
          "salespersonStart": "Intangibles are real, and we've identified two strong ones: the founder's following and the customer community. But the key question in due diligence is always: are they transferable? Because...",
          "suggestedCompletion": "a community built around a founder may not stay if the founder leaves after the acquisition. That's the risk. We need to assess whether these intangibles belong to the brand or to the person — and that affects whether they justify the valuation."
        }
      ]
    }
  },
};
