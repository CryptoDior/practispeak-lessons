import { Lesson } from '@/types/lesson';

export const advancedBrandStrategy: Lesson = {
  slug: 'advanced-brand-strategy',
  title: 'Advanced Brand Strategy',
  subtitle: 'How to build, measure, and protect the financial value of a brand',
  level: 'C1-C2',
  description: "Most marketers know how to run campaigns. Fewer know how to build a brand that is worth something — in financial terms, in the market, and in the minds of customers. This lesson teaches the language of advanced brand strategy: how to talk about brand equity, brand valuation, and the risks that erode what you have built. These are the conversations that happen at board level — and you need the vocabulary to lead them.",
  heroImage: '/images/advanced-brand-strategy-hero.png',

  vocabulary: [
    {
      word: 'Brand equity',
      partOfSpeech: 'noun',
      definition: 'The extra value a brand adds to a product beyond its basic function. A customer who pays more for one coffee brand over another — even if both taste the same — is responding to brand equity.',
      example: "Riley said: Brand equity is why people queue for an iPhone and not just any smartphone. The product is good — but the brand is what makes people choose it first, talk about it most, and pay more without complaint.",
      imageSlug: '/images/brand-equity.png',
    },
    {
      word: 'Brand valuation',
      partOfSpeech: 'noun',
      definition: 'The process of calculating how much a brand is worth in financial terms. Brand valuations are used in acquisitions, investor reports, and licensing decisions.',
      example: "Marcus asked: How do you put a number on a brand? Riley said: That is brand valuation — analysts look at revenue driven by the brand name, customer loyalty, and market position. Some brands are worth more than all their physical assets combined.",
      imageSlug: '/images/brand-valuation.png',
    },
    {
      word: 'Intangible asset',
      partOfSpeech: 'noun',
      definition: "Something a business owns that has value but no physical form — like a brand, a patent, or a trademark. Intangible assets can be the most valuable things a company owns, even though you cannot touch them.",
      example: "The CFO said during the acquisition review: The factory is worth €40m. But the brand — that intangible asset — is what we are really paying for. Without the name, customers would not follow. That is where the real value sits.",
      imageSlug: '/images/intangible-asset.png',
    },
    {
      word: 'Brand dilution',
      partOfSpeech: 'noun',
      definition: 'When a brand loses strength because it has been stretched too far, used inconsistently, or associated with too many different things. Brand dilution makes it harder for customers to know what a brand stands for.',
      example: "Riley warned the team: If we put our name on every product line without a clear strategy, we risk brand dilution. In five years, customers will not know what we stand for — and when that happens, price becomes the only reason they choose us.",
      imageSlug: '/images/brand-dilution.png',
    },
    {
      word: 'Brand architecture',
      partOfSpeech: 'noun',
      definition: 'The system that organises how a company manages multiple brands or product lines. Good brand architecture makes it clear how different products relate to each other and to the parent brand.',
      example: "Marcus said: We have five product lines but no system. Riley said: That is a brand architecture problem. You need to decide — do all five products live under one master brand, or does each have its own identity? Each choice has a different cost and a different risk.",
      imageSlug: '/images/brand-architecture.png',
    },
    {
      word: 'Positioning',
      partOfSpeech: 'noun',
      definition: 'The place a brand occupies in the mind of the customer — relative to competitors. Strong positioning means customers know exactly what a brand stands for and how it is different from everything else.',
      example: "Riley said: Your positioning is not your tagline — it is the answer to one question: when a customer thinks of our category, what do they think of us for? If you cannot answer that in one sentence, the positioning is not clear enough.",
      imageSlug: '/images/positioning.png',
    },
    {
      word: 'Brand audit',
      partOfSpeech: 'noun',
      definition: 'A review of how a brand is performing — including how it is perceived by customers, how consistently it is used, and how it compares to competitors.',
      example: "The new CMO said: Before we change anything, we need a brand audit. I want to know what customers think we stand for, where we are inconsistent, and where our competitors are outperforming us on perception. Then we make decisions.",
      imageSlug: '/images/brand-audit.png',
    },
    {
      word: 'Differentiation',
      partOfSpeech: 'noun',
      definition: "What makes a brand meaningfully different from its competitors — in a way that customers care about. Without differentiation, the only thing left to compete on is price.",
      example: "Riley said: If I ask your customers why they choose you over the competitor and they say 'price', you have a differentiation problem. Price is not a strategy — it is a race to the bottom. The question is: what do you offer that no one else does?",
      imageSlug: '/images/differentiation.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "What does the brand stand for?",
      definition: "The most important question in brand strategy. A brand that stands for something clear and specific is stronger than one that tries to appeal to everyone. This question cuts through tactical debates and gets to the core.",
      example: "Riley opened the brand workshop: Before we discuss campaigns, channels, or budgets — I want to ask one question. What does this brand stand for? Not what we sell. Not our features. What do we mean to people? Let's start there.",
      imageSlug: '/images/what-does-the-brand-stand-for.png',
    },
    {
      phrase: "We are at risk of diluting the brand",
      definition: "A warning phrase used when a proposed action — a new product, a partnership, or inconsistent messaging — could weaken what the brand stands for. It signals that growth must be managed strategically, not just opportunistically.",
      example: "The sales team proposed putting the brand logo on a low-cost product line. Riley said: I understand the revenue opportunity, but we are at risk of diluting the brand. If customers start associating us with cheap, we will spend years trying to undo that damage.",
      imageSlug: '/images/we-are-at-risk-of-diluting-the-brand.png',
    },
    {
      phrase: "Our positioning needs to be sharper",
      definition: "A direct way to say that the brand's place in the market is not clear or distinct enough. 'Sharper' means more focused, more specific, and more differentiated from competitors.",
      example: "After the customer research presentation, Riley said: The findings are clear — our positioning needs to be sharper. Customers like us, but they cannot tell us apart from the competitor. If we cannot articulate the difference, neither can they.",
      imageSlug: '/images/our-positioning-needs-to-be-sharper.png',
    },
    {
      phrase: "The brand equity case is...",
      definition: "A phrase used to present the business argument for brand investment — explaining why a strong brand creates long-term financial value, not just awareness.",
      example: "Riley said to the CFO: I know you want to see the numbers. The brand equity case is this: every point of brand preference we build reduces our cost of acquisition by roughly 12% over three years. This is not a soft investment — it is a compounding one.",
      imageSlug: '/images/the-brand-equity-case-is.png',
    },
    {
      phrase: "Let's run a brand audit before we decide",
      definition: "A call to review the current state of the brand before making strategic changes. It signals discipline — that decisions should be based on real data about perception and performance, not assumptions.",
      example: "The team was ready to launch a rebrand. Riley said: Let's run a brand audit before we decide. I want to know what is actually broken versus what we just find boring internally. Those are very different problems with very different solutions.",
      imageSlug: '/images/lets-run-a-brand-audit-before-we-decide.png',
    },
    {
      phrase: "That is a positioning decision, not a campaign decision",
      definition: "A clarifying phrase used when a debate about creative or messaging is actually about something deeper — the brand's fundamental place in the market. It redirects tactical conversations to the strategic level.",
      example: "The team was arguing about which tagline to use. Riley stopped them: That is a positioning decision, not a campaign decision. We cannot choose a tagline until we agree on what we want to be known for. Let's go back one step.",
      imageSlug: '/images/that-is-a-positioning-decision-not-a-campaign-decision.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the CEO asked me to present the brand strategy at the investor meeting. She wants me to talk about brand value — not just awareness. I'm not sure where to start.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Start with [[brand equity:the extra value a brand adds to a product beyond its basic function]]. Investors understand that brand is an [[intangible asset:something a business owns that has value but no physical form]] — the question is whether you can show them what it is worth.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Can you actually put a number on brand value? The CFO always asks me to quantify it and I struggle.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — that is [[brand valuation:the process of calculating how much a brand is worth in financial terms]]. You can use revenue premium, customer lifetime value uplift, or market share data. Pick the method that aligns with how your CFO thinks about value.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "There is also a proposal on the table to extend our brand into three new product categories. The sales team loves it. I am not so sure.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Trust your instinct. We are at risk of diluting the brand if we extend without a clear [[brand architecture:the system that organises how a company manages multiple brands or product lines]]. Has anyone asked what the brand stands for first?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Not really. The discussion jumped straight to product and revenue.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is the problem. [[Positioning:the place a brand occupies in the mind of the customer relative to competitors]] has to come before product decisions. If you cannot say in one sentence what the brand stands for, you are not ready to extend it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Honestly? Our positioning needs to be sharper. Customers like us but when I ask them what makes us different, they pause.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Then you need a [[brand audit:a review of how a brand is performing including customer perception and competitor comparison]] before the investor meeting — not instead of it. Know what is broken before you tell investors what you are building.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What should the audit look at?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Three things: customer perception, consistency across touchpoints, and [[differentiation:what makes a brand meaningfully different from its competitors in a way customers care about]] versus your top two competitors. That gives you the full picture.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what is the message to investors if the audit shows we have brand equity problems?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Honesty. The brand equity case is stronger when you acknowledge the gap and show a plan to close it. Investors do not trust people who only share good news.",
    }
  ],

  matchingExercise: [
    { word: 'brand equity', definition: 'the extra value a brand adds to a product beyond its basic function' },
    { word: 'brand valuation', definition: 'the process of calculating how much a brand is worth in financial terms' },
    { word: 'intangible asset', definition: 'something a business owns that has value but no physical form' },
    { word: 'brand dilution', definition: 'when a brand loses strength because it has been stretched too far or used inconsistently' },
    { word: 'brand architecture', definition: 'the system that organises how a company manages multiple brands or product lines' },
    { word: 'positioning', definition: 'the place a brand occupies in the mind of the customer relative to competitors' },
    { word: 'brand audit', definition: 'a review of how a brand is performing including customer perception and competitor comparison' },
    { word: 'differentiation', definition: 'what makes a brand meaningfully different from its competitors in a way customers care about' }
  ],

  fillBlankExercise: [
    { before: "If we cannot tell customers how we are different, we have a ", after: " problem — and the only competition left is on price.", answer: "differentiation" },
    { before: "The brand name is the company's most valuable ", after: " asset — you cannot touch it, but it drives more revenue than the factory.", answer: "intangible" },
    { before: "Our ", after: " needs to be sharper — customers like us but cannot say what makes us different from the competitor.", answer: "positioning" },
    { before: "Before we launch three new product lines, let's run a brand ", after: " — we need to know what is actually broken.", answer: "audit" },
    { before: "We are at risk of ", after: " the brand if we put our name on too many unrelated products.", answer: "diluting" },
    { before: "The brand ", after: " case is simple: every point of brand preference reduces customer acquisition cost over time.", answer: "equity" }
  ],

  multipleChoiceExercise: [
    {
      question: "Why does Riley say brand architecture must come before product extension decisions?",
      options: ["Because brand architecture is more interesting than product decisions", "Because you cannot extend a brand until you know what it stands for and how products relate to each other", "Because investors always ask about brand architecture first"],
      correctIndex: 1
    },
    {
      question: "What does Riley recommend Marcus do before the investor meeting?",
      options: ["Run a brand audit to understand perception, consistency, and differentiation", "Build a new brand valuation model from scratch", "Delay the meeting until the brand positioning is perfect"],
      correctIndex: 0
    },
    {
      question: "What does Riley say is the risk of extending into three new product categories without a strategy?",
      options: ["The CFO will block the budget", "Customers will become confused and brand dilution will occur", "The sales team will lose motivation"],
      correctIndex: 1
    },
    {
      question: "How does Riley suggest making the brand equity case to investors?",
      options: ["Use emotional storytelling rather than numbers", "Acknowledge the gap honestly and show a plan to close it", "Only present the positive metrics and avoid mentioning weaknesses"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Think of a brand you would pay more for than a cheaper alternative — even if the product is similar. Why do you choose it? What does the brand mean to you?",
      "Has your company or a company you have worked for ever extended a brand into a new category or product line? What happened — did it strengthen or weaken the brand?",
      "When investors or senior leaders ask you about brand value, how do you respond? Do you find it easy or difficult to explain brand in financial terms?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "The brand is the company's most valuable _____ asset — it has no physical form but drives significant revenue.",
        options: ["invisible", "intangible", "internal"],
        correctIndex: 1,
        explanation: "'Intangible' is the correct business and accounting term for something that has value but no physical form — like a brand, patent, or trademark. 'Invisible' is a general adjective but is not used as a technical term in finance or strategy. 'Internal' refers to something inside the organisation, not to the nature of the asset."
      },
      {
        sentence: "The debate about the tagline is actually a _____ decision, not a campaign decision.",
        options: ["positioning", "creative", "messaging"],
        correctIndex: 0,
        explanation: "'Positioning' is the strategic term for the place a brand occupies in the customer's mind relative to competitors — it defines what the brand stands for before any campaign is created. 'Creative' refers to the execution of communication. 'Messaging' refers to the specific words used. When a debate is about what the brand fundamentally means, it is a positioning decision."
      },
      {
        sentence: "Extending the brand into budget products without a strategy risks brand _____.",
        options: ["damage", "dilution", "erosion"],
        correctIndex: 1,
        explanation: "'Brand dilution' is the specific strategic term for what happens when a brand is stretched too far and loses its clarity and strength. 'Brand damage' refers to reputational harm from a specific incident. 'Brand erosion' is used but is less precise and not the standard industry term. 'Dilution' is the right word when the problem is overextension."
      },
      {
        sentence: "Before we make any changes to the brand, let's run a brand _____ to understand how customers actually perceive us.",
        options: ["review", "check", "audit"],
        correctIndex: 2,
        explanation: "'Brand audit' is the standard professional term for a structured review of brand performance — covering customer perception, consistency, and competitive positioning. 'Brand review' is used informally but is less specific. 'Brand check' is not a standard term. Always use 'audit' in a strategic or board-level context."
      },
      {
        sentence: "If customers cannot explain what makes you different from the competitor, you have a _____ problem.",
        options: ["communication", "differentiation", "positioning"],
        correctIndex: 1,
        explanation: "'Differentiation' is the specific term for what makes a brand meaningfully different from competitors in a way customers value. 'Communication' suggests the problem is in how you tell the story — which may be secondary. 'Positioning' is related but broader. When the issue is that no meaningful difference exists (not just that it isn't communicated), 'differentiation' is the correct diagnosis."
      },
      {
        sentence: "The _____ case for brand investment is simple: stronger brands reduce the cost of acquiring new customers over time.",
        options: ["business", "brand equity", "strategic"],
        correctIndex: 1,
        explanation: "'The brand equity case' is the specific phrase used to present the financial and strategic argument for investing in brand. 'The business case' is more general and could apply to any investment decision. 'The strategic case' is also vague. 'Brand equity case' is precise — it links the investment directly to the accumulated value the brand creates."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the senior stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "Brand is hard to measure. How do I justify the investment to the board?",
          options: [
            "Brand is a long-term play — you have to trust the process and look at awareness scores over time.",
            "The brand equity case is this: we can show that customers who recognise and trust our brand have a 30% higher lifetime value and a 12% lower acquisition cost. These are not soft metrics — they connect directly to the P&L.",
            "Brand is difficult to quantify exactly, but it is generally accepted that strong brands outperform weak ones in the long run."
          ],
          correctIndex: 1,
          explanation: "Option B makes a financial argument with specific numbers — it translates brand value into metrics the CFO and board understand. Option A asks people to 'trust the process' without evidence, which will not persuade a finance-first room. Option C is too vague and relies on general acceptance rather than your company's specific data."
        },
        {
          customerLine: "Sales want to put our brand on a new low-cost product line. What do you think?",
          options: [
            "We are at risk of diluting the brand — before we decide, we need to agree what the brand stands for and whether a budget line is consistent with that position.",
            "If sales think it will drive revenue, we should trust their instinct — they know the customer better than marketing does.",
            "It is a good opportunity to reach a new segment. We can manage any brand impact with careful messaging."
          ],
          correctIndex: 0,
          explanation: "Option A raises the strategic risk clearly and asks the right question before making a decision — this is what senior brand leadership looks like. Option B defers to sales without brand input, which is exactly how brand dilution happens. Option C underestimates the risk — 'careful messaging' cannot fully protect a premium brand that is associated with a budget product."
        },
        {
          customerLine: "Our competitor just repositioned. Should we respond?",
          options: [
            "We should move quickly and update our positioning to make sure we are still differentiated.",
            "Let's run a brand audit before we decide. I want to know whether their repositioning has actually changed customer perception of us — or whether we are reacting to a press release.",
            "We should not respond — reacting to competitors always weakens your brand."
          ],
          correctIndex: 1,
          explanation: "Option B is the disciplined, data-first response — it prevents a reactive decision based on assumption. A competitor repositioning in a press release does not always change customer perception immediately. Option A responds too quickly without evidence. Option C is too rigid — sometimes a competitive repositioning does require a response, but only after you understand the actual impact."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "Riley, I'm going to present our brand's invisible assets to the board — the things that have value but no physical form." },
        { speaker: "Riley", text: "The right term is 'intangible assets' — not 'invisible'. It's the standard accounting and strategy term." },
        { speaker: "Marcus", text: "Got it. I'll also explain how we are at risk of eroding the brand if we extend into too many product lines." },
        { speaker: "Riley", text: "The more precise term for overextension risk is 'brand dilution' — not erosion. Dilution means the brand loses focus, not just strength." },
        { speaker: "Marcus", text: "Understood. And I'll say: our brand's position in the market is too similar to competitors, so our differentiation needs to be wider." },
        { speaker: "Riley", text: "Almost — but we say positioning needs to be 'sharper', not 'wider'. Sharper means more focused and distinct, not broader." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "invisible assets",
          correction: "intangible assets",
          explanation: "'Intangible assets' is the correct accounting and strategic term for things that have value but no physical form — like a brand, patent, or trademark. 'Invisible' is a general adjective that is not used as a technical term in business or finance. Always use 'intangible' in a board or investor context."
        },
        {
          lineIndex: 2,
          incorrectText: "eroding the brand",
          correction: "diluting the brand",
          explanation: "'Brand dilution' is the specific term for what happens when a brand is stretched too far and loses its clarity and focus. 'Brand erosion' refers more generally to a gradual loss of brand strength — often from neglect or competitive pressure. When the risk is overextension into too many areas, 'dilution' is the correct and more precise term."
        },
        {
          lineIndex: 4,
          incorrectText: "differentiation needs to be wider",
          correction: "positioning needs to be sharper",
          explanation: "In brand strategy, 'sharper' means more focused and distinct — not broader. Saying differentiation needs to be 'wider' implies adding more things, which is usually the wrong direction. The goal is to be more clearly different in one meaningful way, not to be different in more ways. 'Our positioning needs to be sharper' is the standard professional phrasing."
        }
      ]
    },
    finishTheLine: {
      instructions: "The marketing leader starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "The CFO says brand is too soft to justify the budget. What do you say?",
          salespersonStart: "The brand equity case is concrete. Customers who recognise and trust our brand have a measurably higher lifetime value — and what that means for us strategically is...",
          suggestedCompletion: "that every pound we invest in brand reduces our long-term cost of acquisition. This is not a soft spend — it is a compounding asset. Here is the data from the last three years."
        },
        {
          customerLine: "Sales want to license our brand to a third party. Is that a risk?",
          salespersonStart: "We are at risk of diluting the brand if we license without strict guidelines. Before we decide, let's run a brand audit to understand...",
          suggestedCompletion: "what the brand currently stands for in the market and whether the third party's product is consistent with that position. If there's a gap, licensing could cost us more than it earns."
        },
        {
          customerLine: "Our customers like us but they can't explain why they choose us over the competition.",
          salespersonStart: "That is a differentiation problem. Our positioning needs to be sharper — and right now it isn't. The question we need to answer before the next campaign is...",
          suggestedCompletion: "what do we do that no one else does, in a way that customers actually care about? Once we can answer that in one sentence, every campaign writes itself."
        }
      ]
    }
  }
};
