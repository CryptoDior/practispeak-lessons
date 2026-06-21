import { Lesson } from '@/types/lesson';

export const brandArchitecture: Lesson = {
  slug: 'brand-architecture',
  title: 'Brand Architecture',
  subtitle: 'How to manage a brand portfolio — and write a clear brand architecture recommendation that stakeholders can act on',
  level: 'B1-B2',
  description: 'When a company has multiple products, markets, or sub-brands, brand architecture becomes one of the most strategically important decisions it makes. The wrong structure confuses customers, cannibalises sales, and dilutes the brand. The right structure creates clarity, enables efficient marketing investment, and allows each product to grow without undermining the others. This lesson teaches you the vocabulary of brand portfolio management — master brand, sub-brand, endorsed brand, brand extension — and the language to recommend an architecture in a written brief or stakeholder meeting.',
  heroImage: '/images/brand-architecture-hero.png',

  vocabulary: [
    {
      word: 'MASTER BRAND',
      partOfSpeech: 'noun',
      definition: 'The main brand that sits at the top and gives credibility to all products or services under it. In a master brand structure, every product carries the same name and is seen as part of one unified brand. Examples: Google (Google Search, Google Maps, Google Drive).',
      example: "Riley explained the structure: Right now MarketBridge operates as a master brand — every product is named MarketBridge something. That creates consistency and builds equity in one place. The risk is that if one product has a problem, the whole master brand is affected. We need to decide if that's the right structure as we add more products to the portfolio.",
      imageSlug: '/images/master-brand.png',
    },
    {
      word: 'SUB-BRAND',
      partOfSpeech: 'noun',
      definition: "A brand that is clearly connected to a master brand but has its own name, look, and sometimes personality. Sub-brands let a company reach different audiences or price points without losing the credibility of the parent brand. The link is visible, but the identity stands apart.",
      example: "Marcus proposed the portfolio structure: The new enterprise product needs its own identity — it's selling to a very different buyer with very different needs. I recommend we make it a sub-brand: 'MarketBridge Pro'. It carries the MarketBridge name for credibility, but has a premium visual identity, pricing, and messaging that signals it's a different tier.",
      imageSlug: '/images/sub-brand.png',
    },
    {
      word: 'ENDORSED BRAND',
      partOfSpeech: 'noun',
      definition: "A brand that has its own identity but is backed by the parent company — the parent's name is visible but secondary. The endorsement says: 'This independent brand is trusted and supported by [parent]'. Used when the new brand needs its own personality but can benefit from the parent's existing reputation. Example: 'Marriott International / Ritz-Carlton'.",
      example: "Dana explained the acquisition strategy: When we acquire TechFlow, I recommend we use an endorsed brand model: 'TechFlow, a MarketBridge Company'. TechFlow has strong brand equity in its own market — we shouldn't erase that. The endorsement connects it to us without overriding what customers already love about the TechFlow brand.",
      imageSlug: '/images/endorsed-brand.png',
    },
    {
      word: 'BRAND EXTENSION',
      partOfSpeech: 'noun',
      definition: "When an established brand moves into a new product category, using its existing name and reputation to get a head start. Brand extensions work when the new category is close to the original and the brand's values transfer naturally. They fail when the move is too far from what the brand is known for.",
      example: "Riley reviewed the proposal: Launching a recruitment tool under the MarketBridge name is a brand extension — we're taking a marketing brand into HR technology. The question is whether our brand values ('data-led, compliance-ready') are relevant in that space. If HR buyers don't associate MarketBridge with anything useful for them, the extension has no head start.",
      imageSlug: '/images/brand-extension.png',
    },
    {
      word: 'BRAND EQUITY',
      partOfSpeech: 'noun',
      definition: 'The commercial value built up through customer recognition and positive feelings about a brand — the extra price customers are willing to pay, the trust they give, and the loyalty they show, just because of the brand name. High brand equity means lower costs to win new customers and more room to charge a premium price.',
      example: "Marcus made the financial case: This is why brand architecture matters commercially. If we dilute the MarketBridge brand by putting it on too many unrelated products, we erode the brand equity we've spent five years building. That equity is worth money — it's the reason customers choose us over a cheaper competitor. We shouldn't gamble with it.",
      imageSlug: '/images/brand-equity.png',
    },
    {
      word: 'PORTFOLIO',
      partOfSpeech: 'noun',
      definition: 'The full set of brands, products, or services a company manages. A well-structured portfolio gives every brand a clear role — no unnecessary overlap, no brands stealing customers from each other, and a clear logic for which brand serves which customer at which price.',
      example: "Dana reviewed the portfolio health: Our current portfolio has four products, and honestly, two of them are competing for the same customer. That's cannibalisation — it means we're spending double the marketing budget to serve one customer need. A clear portfolio architecture should give every product a distinct role and a distinct audience. Right now, the boundaries aren't clear enough.",
      imageSlug: '/images/portfolio.png',
    },
    {
      word: 'BRAND HIERARCHY',
      partOfSpeech: 'noun',
      definition: 'The organised structure showing how all the brands in a portfolio relate to each other — which is the parent, which are sub-brands, which are endorsed, and how they connect visually and in writing. A clear hierarchy makes internal decisions faster and customer-facing communication more consistent.',
      example: 'Riley presented the visual: This brand hierarchy chart shows the relationship between every brand in our portfolio. At the top: MarketBridge as the master brand. Below that: MarketBridge Pro as the enterprise sub-brand. And on the side: TechFlow as an endorsed brand. Every brand has a clearly defined role and a clear connection to the whole.',
      imageSlug: '/images/brand-hierarchy.png',
    },
    {
      word: 'CANNIBALISATION',
      partOfSpeech: 'noun',
      definition: "When one product or brand in your portfolio takes customers away from another product or brand in the same company. Cannibalisation is a sign of poor portfolio structure — you are spending money competing with yourself instead of growing the overall market.",
      example: 'Marcus flagged the risk: If we launch the new budget tier under the MarketBridge name, we risk cannibalisation — existing customers may downgrade instead of staying on the current plan. The new tier needs to be clearly positioned for a different audience, not as a cheaper version of what existing customers already have.',
      imageSlug: '/images/cannibalisation.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE BRAND NEEDS TO DO A DIFFERENT JOB IN THIS MARKET',
      definition: "Use this phrase when a brand is entering a new segment or market where its current positioning will not work. 'Do a different job' means the brand needs to communicate different things, to different people, in a different way — which may mean creating a sub-brand or a separate brand entirely.",
      example: "Dana assessed the enterprise expansion: In the SME market, the MarketBridge brand works because it signals simplicity and speed. In enterprise, the brand needs to do a completely different job — it needs to signal robustness, compliance, and integration capability. That's why I'm recommending a sub-brand rather than a simple naming tweak.",
      imageSlug: '/images/the-brand-needs-to-do-a-different-job-in-this-market.png',
      inAction: "In the consumer segment, the brand needs to do a different job — it's about aspiration and lifestyle, not technical specifications.",
      register: "Neutral / Business English — used in brand strategy meetings when discussing how a brand's role shifts across different markets, geographies, or audience segments.",
      inContext: 'The agency had been brought in to help with an international expansion. The brand needs to do a different job in this market, the consultant told the room. In the UK, your brand signals trust and reliability. In the US market, those same qualities read as conservative. The architecture needs to reflect that difference without losing the core identity.',
      visualExamples: [
        { brand: 'Halo Global', context: 'Wellness brand — international expansion deck', imageSlug: '/images/visual-examples/bra-p1-halo.png', caption: 'The brand needs to do a different job in this market — in the UK it is premium self-care, but in Southeast Asia it is aspirational and accessible. Same brand, completely different positioning brief.', aspectRatio: '16/9' },
        { brand: 'Crestview', context: 'Financial firm — international brand review', imageSlug: '/images/visual-examples/bra-p1-crestview.png', caption: 'The brand needs to do a different job in this market — in wealth management it signals trust and exclusivity, but in the mass-market robo-advisor space it needs to feel approachable.', aspectRatio: '4/3' },
        { brand: 'Summit', context: 'Outdoor gear brand — category expansion review', imageSlug: '/images/visual-examples/bra-p1-summit.png', caption: 'The brand needs to do a different job in this market — our adventure brand works for hardcore hikers, but entering the casual outdoors category means the visual language needs a complete reset.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'WE RISK DILUTING THE MASTER BRAND IF WE...',
      definition: "Use this phrase to warn that adding a product or using the brand name in a new context could weaken what the parent brand stands for. 'Diluting' means stretching the brand too thin — making it stand for so many things that it ends up standing for nothing clear.",
      example: "Riley flagged the concern: We risk diluting the master brand if we launch a consumer product under the MarketBridge name. Right now, MarketBridge means 'trusted by B2B marketing teams'. If we put that name on a consumer lifestyle app, the B2B associations start to blur. Either we create a separate brand or we stay in our lane.",
      imageSlug: '/images/we-risk-diluting-the-master-brand-if-we.png',
      inAction: 'We risk diluting the master brand if we extend into the budget segment without a clearly separated sub-brand to protect the premium positioning.',
      register: 'Formal — used in brand architecture reviews and strategic discussions about brand extensions. Signals a risk that needs to be carefully managed before any launch decision is made.',
      inContext: "Riley presented the brand risk analysis clearly. We risk diluting the master brand if we launch a low-cost product line under the same name, she said. Our premium positioning has taken years to build. One budget product, if it underperforms or attracts a different kind of customer, can reposition the entire brand in the market's mind — and that's very hard to reverse.",
      visualExamples: [
        { brand: 'Forge', context: 'Project management SaaS — product extension review', imageSlug: '/images/visual-examples/bra-p2-forge.png', caption: 'We risk diluting the master brand if we put our name on a standalone HR tool — Forge stands for developer productivity. HR buyers do not want a developer tool. We need a separate brand.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC vitamins — acquisition review', imageSlug: '/images/visual-examples/bra-p2-bloom.png', caption: 'We risk diluting the master brand if we acquire a discount supplement line without separating it architecturally — our premium positioning is worth more than the revenue.', aspectRatio: '4/3' },
        { brand: 'Reef', context: 'Sports brand — product range review', imageSlug: '/images/visual-examples/bra-p2-reef.png', caption: 'We risk diluting the master brand if we move into fashion — our credibility is built on performance. The moment we are in the streetwear aisle, we have lost the serious athlete.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'THE RECOMMENDED ARCHITECTURE IS...',
      definition: 'Use this phrase to introduce a brand architecture recommendation in a brief, presentation, or board paper. It signals that what follows is a structured, well-thought-out proposal — not just a personal preference. A good recommendation names the model, explains who each brand serves, and gives the business reason behind it.',
      example: "Marcus presented the board paper: The recommended architecture is a 'house of brands' model — each product has its own name and identity, with MarketBridge as the backing company visible but secondary. This protects the master brand if any individual product underperforms, and allows each product to build its own identity with its target audience.",
      imageSlug: '/images/the-recommended-architecture-is.png',
      inAction: 'The recommended architecture is a branded house — one master brand with product-level descriptors rather than separate brand identities for each product.',
      register: 'Formal — used in brand strategy presentations and agency recommendations. Signals a structured, considered recommendation based on analysis of the portfolio, the market, and the business strategy.',
      inContext: 'Marcus concluded the presentation with a clear direction. The recommended architecture is a branded house, he told the client. One master brand, product descriptors below it. This approach consolidates your marketing investment and builds equity in a single place — which is especially important at your current stage of growth, when diluting resources across multiple brands would slow everything down.',
      visualExamples: [
        { brand: 'Luma Health', context: 'Health platform — brand strategy document', imageSlug: '/images/visual-examples/bra-p3-luma.png', caption: 'The recommended architecture is a house of brands — the parent company does not appear on consumer-facing products, allowing each health brand to own its niche without cross-contaminating audiences.', aspectRatio: '16/9' },
        { brand: 'Paragon Group', context: 'Creative group — portfolio brand presentation', imageSlug: '/images/visual-examples/bra-p3-paragon.png', caption: 'The recommended architecture is endorsed brands — each studio carries its own name with a small A Paragon Company endorsement. It gives independence while leveraging group credibility.', aspectRatio: '4/3' },
        { brand: 'Orbit', context: 'Furniture brand — sub-brand launch brief', imageSlug: '/images/visual-examples/bra-p3-orbit.png', caption: 'The recommended architecture is a branded house — one name, three product tiers differentiated by product naming and price point, not separate brand identities.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'EACH BRAND IN THE PORTFOLIO NEEDS A CLEAR ROLE',
      definition: 'Use this phrase in portfolio reviews to say that every brand or product should serve a distinct customer need, a specific audience, or a specific price point — with no unnecessary overlap. When the roles are not clear, brands compete with each other instead of growing the portfolio together.',
      example: "Dana outlined the portfolio audit findings: The core problem is that each brand in the portfolio doesn't have a clear enough role. Two of our products are essentially identical in positioning, targeting the same customer at similar price points. We need to either differentiate them clearly or consolidate. You can't maintain two brands in the same space without wasting resources.",
      imageSlug: '/images/each-brand-in-the-portfolio-needs-a-clear-role.png',
      inAction: 'If each brand in the portfolio is trying to be everything to everyone, none of them will stand out — each brand needs a clear role and a specific audience.',
      register: 'Neutral — used in portfolio brand reviews and brand architecture sessions. Emphasises the need for differentiation and role clarity within a company that manages multiple brands.',
      inContext: "Dana had mapped all seven brands against the customer journey before the workshop. The problem is clear, she said. Each brand in the portfolio is targeting the same customer with the same message. There's no differentiation, no handoff, and no logic to which brand goes where. We're spending marketing budget competing with ourselves, and customers are confused about which product is right for them.",
      visualExamples: [
        { brand: 'Grove Group', context: 'Consumer goods group — portfolio review', imageSlug: '/images/visual-examples/bra-p4-grove.png', caption: 'Each brand in the portfolio needs a clear role — Grove is mass-market eco, Heather is premium sustainable, and Leaf is value. Right now, Heather and Grove overlap on price and positioning.', aspectRatio: '16/9' },
        { brand: 'Atlas Group', context: 'Media group — brand audit document', imageSlug: '/images/visual-examples/bra-p4-atlas.png', caption: 'Each brand in the portfolio needs a clear role — the podcast brand, the newsletter brand, and the events brand are all saying the same thing. We are competing with ourselves.', aspectRatio: '4/3' },
        { brand: 'Kestrel Foods', context: 'Food group — architecture review', imageSlug: '/images/visual-examples/bra-p4-kestrel.png', caption: 'Each brand in the portfolio needs a clear role — if two brands are targeting the same consumer at the same price point, one needs to move or one needs to be retired.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'THE PARENT BRAND LENDS CREDIBILITY TO...',
      definition: "Use this phrase to explain how an established brand name can give immediate trust to a new product or an acquired brand. 'Lends credibility' means the existing reputation carries over. It comes up in brand architecture discussions when justifying which model to use.",
      example: 'Riley explained the acquisition rationale: One of the main reasons for keeping the MarketBridge name visible in the TechFlow deal is that the parent brand lends credibility to TechFlow in markets where TechFlow is less known. In the US, TechFlow has strong brand equity. In Europe, MarketBridge is better known — the endorsement helps TechFlow gain trust faster there.',
      imageSlug: '/images/the-parent-brand-lends-credibility-to.png',
      inAction: 'The parent brand lends credibility to the new product launch — customers who already trust the main brand are more likely to try something new from the same company.',
      register: "Formal / Business English — used in brand extension and portfolio discussions. 'Lends credibility' is a standard phrase meaning one brand's established reputation supports another brand or product that is newer or less proven.",
      inContext: "The team was debating whether to launch the new product under a separate brand or connect it visibly to the parent. The parent brand lends credibility to anything we launch in this category, Riley said. It has 15 years of trust behind it. A new standalone brand would have to earn that from scratch — and we don't have the budget or the time. The halo effect is real; use it.",
      visualExamples: [
        { brand: 'Horizon Health', context: 'Health conglomerate — new product launch', imageSlug: '/images/visual-examples/bra-p5-horizon.png', caption: 'The parent brand lends credibility to the new supplement line — 30 years of pharmaceutical heritage gives instant permission to play in the OTC wellness space.', aspectRatio: '16/9' },
        { brand: 'Carve Group', context: 'Fintech group — SME product launch', imageSlug: '/images/visual-examples/bra-p5-carve.png', caption: 'The parent brand lends credibility to the SME banking product — business owners already trust the parent name on mortgages, so there is no cold start problem.', aspectRatio: '4/3' },
        { brand: 'Morrow Group', context: 'Beauty group — skincare line launch', imageSlug: '/images/visual-examples/bra-p5-morrow.png', caption: 'The parent brand lends credibility to the new skincare line — the fragrance house reputation transfers directly to a skincare audience because they share the same trust in ingredient quality.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'THIS EXTENSION STRETCHES THE BRAND TOO FAR',
      definition: "Use this phrase to say that a proposed brand extension is too different from what the brand is known for. 'Stretches too far' means the brand's associations do not carry over naturally — customers will not understand or trust the connection to the new category.",
      example: 'Marcus rejected the proposal: Launching a MarketBridge HR tool stretches the brand too far. Our brand equity is entirely in marketing technology — it means something specific to marketing leaders. HR directors have never heard of us and our brand signals nothing useful in their world. This should be a new brand or an endorsed acquisition, not a MarketBridge product.',
      imageSlug: '/images/this-extension-stretches-the-brand-too-far.png',
      inAction: 'Moving from professional software into consumer electronics — this extension stretches the brand too far and risks confusing our core B2B audience.',
      register: 'Neutral — used in brand extension reviews and portfolio planning. Signals a strategic risk when a brand moves into territory that does not align with its existing positioning, associations, or audience expectations.',
      inContext: "The client had been excited about the extension idea, but Dana had to be honest. This extension stretches the brand too far, she said. Your brand stands for precision and expertise in financial services. A consumer lifestyle product doesn't fit that positioning — and if it fails, it doesn't fail quietly. It changes how people think about the parent brand.",
      visualExamples: [
        { brand: 'PeakForm', context: 'Fitness app — hardware product review', imageSlug: '/images/visual-examples/bra-p6-peakform.png', caption: 'This extension stretches the brand too far — PeakForm is a software company. Launching a fitness tracker under the same name confuses the brand promise and dilutes the app premium perception.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Food brand — home appliances extension review', imageSlug: '/images/visual-examples/bra-p6-ember.png', caption: 'This extension stretches the brand too far — meal kits and kitchen equipment can coexist, but Ember brand equity is built on convenience, not technical appliances. The audience overlap is smaller than we think.', aspectRatio: '4/3' },
        { brand: 'Hatch', context: 'Productivity app — co-working space review', imageSlug: '/images/visual-examples/bra-p6-hatch.png', caption: 'This extension stretches the brand too far — a digital productivity brand launching physical spaces requires a completely separate brand framework. The Hatch name would confuse more than it helps.', aspectRatio: '1.91/1' },
      ],
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We have a board decision to make about the portfolio structure before we finalise the acquisition. Do we keep TechFlow as its own brand, fold it into MarketBridge, or something in between?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I've been looking at three models. First option: a [[master brand:the overarching brand that leads all products under it]] approach — everything becomes MarketBridge. Second: an [[endorsed brand:a brand with its own identity that is backed by the parent company]] model — 'TechFlow, a MarketBridge Company'. Third: we keep TechFlow completely independent with no visible connection.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'My instinct is against option one. TechFlow has significant [[brand equity:the commercial value that comes from customer recognition and positive association]] in the analytics software space. If we rename it MarketBridge Analytics, we erase that equity overnight.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Agreed. The master brand model works when you're building from scratch, but TechFlow already has a loyal customer base that bought because of the TechFlow name. That's an asset we shouldn't destroy.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Option three — full independence — also has problems. In the markets where TechFlow is less well known, particularly Europe, the [[parent brand:the primary company or brand that owns or backs the other brands]] lends credibility that TechFlow currently lacks. Walking away from that would slow growth significantly.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So the recommended architecture is an endorsed brand model. TechFlow keeps its name and identity, but 'a MarketBridge Company' appears in the communications. It's clear about the relationship without overriding the TechFlow brand.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's my recommendation too. But there's a second portfolio question: the new enterprise product. I think it needs to be a [[sub-brand:a brand that is connected to the master brand but has its own distinct identity]] rather than a straight MarketBridge product.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Why? We already have MarketBridge in the enterprise space to some extent.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Because the enterprise brand needs to do a completely different job. In SME, MarketBridge means quick setup and ease of use. Enterprise buyers need to see robustness, security, and white-glove implementation support. The same brand can't credibly communicate both things to very different buyers.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I see the logic. And there's a [[cannibalisation:when one product takes customers away from another product in the same company]] risk if we pitch enterprise and SME under the same name — the enterprise buyer might see the SME product and wonder if they're buying the same thing at a premium.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Exactly. Each brand in the [[portfolio:the complete set of brands and products managed by a company]] needs a clear role. If the roles aren't distinct, we create confusion and end up competing with ourselves.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'So the recommended architecture for the [[brand hierarchy:the organised structure showing how brands in a portfolio relate to each other]] is: MarketBridge as the master brand at the top, MarketBridge Pro as the enterprise sub-brand, and TechFlow as an endorsed brand. Three distinct brands, three distinct roles, one clear parent.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I'm comfortable with that structure. One risk I want to flag: the moment we also had a proposal for a consumer product. Would that go under MarketBridge?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "No — absolutely not. A consumer product would stretch the brand too far. MarketBridge stands for B2B marketing technology. Putting it on a consumer app would confuse our existing customers and would carry no meaning for consumers who've never heard of us in that context. That would need to be a completely new brand.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Agreed. Consumer is out of scope for the MarketBridge family. I'll build the [[brand extension:when an established brand moves into a new product category using its existing reputation]] risk section into the recommendation document as a 'brands we should not launch'. That framing actually helps the board understand what the architecture is protecting against.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Let's get the recommendation paper to the board by Friday. Clear hierarchy, rationale for each model choice, and the commercial risk of the alternatives.",
    }
  ],

  matchingExercise: [
    {
        "word": "master brand",
        "definition": "the primary overarching brand that leads and gives credibility to all products under it"
    },
    {
        "word": "sub-brand",
        "definition": "a brand connected to the master brand but with its own distinct identity, name, and sometimes personality"
    },
    {
        "word": "endorsed brand",
        "definition": "an independent brand that is backed or endorsed by the parent company — visible but secondary"
    },
    {
        "word": "brand extension",
        "definition": "when an established brand moves into a new product category using its existing reputation"
    },
    {
        "word": "brand equity",
        "definition": "the commercial value from customer recognition and positive association with a brand name"
    },
    {
        "word": "portfolio",
        "definition": "the complete set of brands, products, or services managed by a company"
    },
    {
        "word": "brand hierarchy",
        "definition": "the organised structure showing how brands in a portfolio relate to each other"
    },
    {
        "word": "cannibalisation",
        "definition": "when one product takes customers or revenue away from another product in the same company"
    }
],
  fillBlankExercise: [
    {
        "before": "The parent brand ",
        "after": " credibility to TechFlow in markets where TechFlow is less well known.",
        "answer": "lends"
    },
    {
        "before": "We risk ",
        "after": " the master brand if we launch a consumer product under the MarketBridge name.",
        "answer": "diluting"
    },
    {
        "before": "The recommended ",
        "after": " is an endorsed brand model — TechFlow keeps its name with 'a MarketBridge Company' visible.",
        "answer": "architecture"
    },
    {
        "before": "Each brand in the portfolio needs a clear ",
        "after": " — no unnecessary overlap, no cannibalisation, no competing for the same customer.",
        "answer": "role"
    },
    {
        "before": "The enterprise brand needs to do a different ",
        "after": " — enterprise buyers need to see robustness and security, not just ease of use.",
        "answer": "job"
    },
    {
        "before": "A consumer product would ",
        "after": " the brand too far — MarketBridge means nothing to consumers in that space.",
        "answer": "stretch"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Marcus argue against the master brand model for the TechFlow acquisition?",
        "options": [
            "MarketBridge is not well known enough to add value to TechFlow's existing brand",
            "TechFlow has significant brand equity that would be erased by renaming it MarketBridge",
            "The master brand model would create too much visual complexity in the portfolio"
        ],
        "correctIndex": 1
    },
    {
        "question": "What brand architecture model is recommended for TechFlow?",
        "options": [
            "Master brand — rename everything under MarketBridge",
            "Full independence with no visible connection to MarketBridge",
            "Endorsed brand — 'TechFlow, a MarketBridge Company'"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley say about the proposed consumer product?",
        "options": [
            "It should be a brand extension under MarketBridge, targeting a new audience",
            "It should be a sub-brand with its own distinct name and identity",
            "It should be a completely new brand — MarketBridge would stretch too far into that space"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana suggest adding to the board recommendation document?",
        "options": [
            "A financial model showing the brand equity value of each portfolio brand",
            "A 'brands we should not launch' section to show what the architecture protects against",
            "A consumer research study showing customer preference between brand models"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Think of a company you know that has multiple brands or products. How do the brands relate to each other? Do you think the structure makes sense, or is it confusing?",
        "Have you ever noticed a brand being used in a context where it felt wrong or out of place — like a luxury brand launching a cheap product or a tech company entering a completely different industry? What happened to your perception of the brand?",
        "When a company you trust acquires a brand you don't know, do you immediately trust the new brand more? Does the parent company's reputation transfer? When does it work and when doesn't it?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "TechFlow _____ significant brand equity in the analytics software market — renaming it would erase five years of investment.",
            "options": [
                "has",
                "have",
                "is having"
            ],
            "correctIndex": 0,
            "explanation": "'Has' is the correct form — 'TechFlow' is a singular subject (a company name) and the verb 'have' takes the third-person singular form 'has' in present simple. 'Have' (without -s) is used with plural subjects or with I/you: 'the brands have equity', 'they have value', 'we have concerns'. 'Is having' is present continuous — it's used for temporary situations or current actions, not for permanent states or characteristics. 'TechFlow has significant brand equity' describes a current state, so present simple ('has') is correct."
        },
        {
            "sentence": "When two products target the same customer at the same price point, the company is essentially _____ against itself.",
            "options": [
                "competing",
                "competed",
                "to compete"
            ],
            "correctIndex": 0,
            "explanation": "'Competing' is correct — after 'is', the present continuous requires the '-ing' form: 'is competing'. The sentence describes an ongoing situation (the company is currently in this position), so present continuous is appropriate. 'Competed' is past tense and cannot follow 'is'. 'To compete' is an infinitive — it can follow 'is' in some structures ('the goal is to compete') but not when describing an ongoing action. Structure: is/are + present participle (-ing) = present continuous."
        },
        {
            "sentence": "A brand extension _____ when the new category is too different from the brand's core territory.",
            "options": [
                "fails",
                "fail",
                "is failed"
            ],
            "correctIndex": 0,
            "explanation": "'Fails' is correct — 'a brand extension' is a singular subject, so the present simple verb takes the -s ending: 'fails'. This sentence states a general principle about how brand extensions work — when they work and when they don't. General truths and principles are expressed in present simple. 'Fail' (without -s) would be used with a plural subject ('extensions fail when...'). 'Is failed' is a passive form, but 'fail' is normally used intransitively (without passive) when describing something that doesn't succeed."
        },
        {
            "sentence": "The recommended architecture _____ on building brand equity in one place rather than spreading it across multiple names.",
            "options": [
                "focuses",
                "is focused",
                "focus"
            ],
            "correctIndex": 0,
            "explanation": "Both 'focuses' (active, present simple) and 'is focused' (passive or state) are grammatically possible, but 'focuses' is more natural and direct when describing what a recommendation does. 'The architecture focuses on' is an active description of the recommendation's approach. 'Is focused on' is also used in professional writing ('the strategy is focused on growth') but is slightly more formal. 'Focus' (without -s) is incorrect for a singular subject in present simple. In business writing presenting a recommendation, the active form 'focuses on' is cleaner."
        },
        {
            "sentence": "Brands that try to stand for _____ often end up standing for nothing.",
            "options": [
                "everything",
                "anything",
                "something"
            ],
            "correctIndex": 0,
            "explanation": "'Everything' is correct here — the sentence makes the point that a brand trying to cover all things ends up without a clear identity. 'Stand for everything' = try to represent all possible values or audiences. 'Anything' would work in a negative or question context: 'they don't stand for anything', 'do they stand for anything?' But in a positive declarative sentence ('brands that try to stand for...'), 'everything' is the right word to create the contrast with 'nothing'. This is a well-known marketing principle often stated as 'If you stand for everything, you stand for nothing'."
        },
        {
            "sentence": "The board paper should include not only the recommended architecture _____ the commercial risks of the alternatives.",
            "options": [
                "but also",
                "but yet",
                "and also too"
            ],
            "correctIndex": 0,
            "explanation": "'But also' is the correct correlative conjunction used with 'not only': 'not only X but also Y'. This structure emphasises that both elements are important and included. 'Not only... but also' is a standard formal English construction for adding emphasis. 'But yet' is not used in this correlative structure. 'And also too' is redundant ('and', 'also', and 'too' all serve the same additive function — using all three together is incorrect). The fixed pair is: 'not only... but also...'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the client or colleague says. Choose the best professional response.",
        "items": [
            {
                "customerLine": "We're acquiring a small company. Should we just rename everything under our master brand to keep it simple?",
                "options": [
                    "Yes — simplicity is always better in brand architecture. One brand is always clearer than two.",
                    "It depends on the equity in the acquired brand. If the company you're acquiring has a loyal customer base that bought because of their brand name, erasing that name overnight destroys an asset you just paid to acquire. The right question is: how much brand equity does the acquired company have, and in which markets? That answer should drive the architecture decision.",
                    "Rename it immediately — delays create confusion and the sooner you integrate, the better."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it challenges the oversimplification ('simplicity is always better') and gives the right diagnostic framework (how much equity does the acquired brand have?). In brand architecture, the decision is always contextual. Option A applies a blanket rule without considering the specific situation. Option C makes a hasty recommendation without understanding the commercial value of the existing brand — which could lead to destroying significant goodwill that the acquisition was partly purchased to acquire."
            },
            {
                "customerLine": "We want to launch a budget version of our product. Can we put our existing brand name on it?",
                "options": [
                    "Technically yes — it's the fastest route to market. Just make sure the messaging is different.",
                    "You can, but there's a significant risk to consider: if existing customers see a budget version under your current brand name, some will downgrade. And if prospects in the premium segment see the budget product first, their perception of your brand value may be anchored too low. This is cannibalisation and brand dilution combined. A sub-brand or separate brand for the budget tier protects the equity in your existing brand.",
                    "Yes — a budget product under your brand name is a good brand extension. It expands your market without requiring new brand investment."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the correct answer — it explains both the cannibalisation risk (existing customers downgrading) and the brand equity risk (diluting the premium perception) and recommends the right structural solution (sub-brand or separate brand). This is a sophisticated and common brand architecture challenge. Option A acknowledges the risk superficially ('make sure messaging is different') without addressing the structural problem that messaging alone can't solve. Option C incorrectly calls this a brand extension (brand extension = new category, not a budget version of the same product)."
            },
            {
                "customerLine": "We're thinking of launching a MarketBridge fitness app. Is that a good brand extension?",
                "options": [
                    "That's a bold move that could work if the creative execution is strong enough to bridge the brand worlds.",
                    "I'd advise against it. A brand extension only works when the new category is close enough to the existing brand territory that the parent brand's values are relevant to the new audience. MarketBridge stands for B2B marketing technology. Fitness app buyers have no relationship with that brand and the values don't transfer. You'd be launching a fitness app with a brand that means nothing to its target audience — with no head start.",
                    "It could work as a consumer side-project. Many B2B brands successfully launch consumer products."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it explains the core principle of brand extension validity (the values must transfer to the new category and audience) and applies it clearly to this specific case. MarketBridge's associations are entirely B2B and marketing-specific — they give no advantage in a fitness app context. A fitness consumer either doesn't know the brand or associates it with something irrelevant. This is the definition of a brand extension that stretches too far. Option A is wishful thinking — creative execution cannot bridge a fundamental disconnect in brand territory. Option C is vague and doesn't address the specific strategic problem."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the brand architecture recommendation extract. Three lines have a grammar mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "The recommended architecture is a three-tier structure: master brand at the top, a sub-brand for the enterprise product, and an endorsed brand for the TechFlow acquisition."
            },
            {
                "speaker": "Dana",
                "text": "TechFlow have significant brand equity in the analytics space, particularly in North America, which we should not erase by renaming."
            },
            {
                "speaker": "Marcus",
                "text": "The enterprise sub-brand needs to do a different job as the SME product — it must signal robustness, not just simplicity."
            },
            {
                "speaker": "Riley",
                "text": "If we launch a consumer product under the MarketBridge name, we risk diluting the brand equity we've built over five years."
            },
            {
                "speaker": "Dana",
                "text": "Each brand in the portfolio need a clear role — without clear roles, brands cannibalise each other and marketing investment is wasted."
            },
            {
                "speaker": "Marcus",
                "text": "The board presentation should include the recommended architecture and the commercial risks of not following it."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "TechFlow have",
                "correction": "TechFlow has",
                "explanation": "In British English, company names and organisation names can sometimes take plural verbs ('TechFlow have announced'), but in formal strategic writing, they typically take singular verbs: 'TechFlow has'. This is especially true in US and international business contexts, where company names are always treated as singular. In the context of this recommendation document (formal, international business), 'TechFlow has significant brand equity' is the correct form. The general rule for formal business writing: treat company names as singular."
            },
            {
                "lineIndex": 2,
                "incorrectText": "do a different job as",
                "correction": "do a different job from",
                "explanation": "When comparing two things that are different, use 'different from' — not 'different as'. 'The enterprise brand does a different job from the SME product' compares and contrasts two things. 'Different from' is the standard phrase in formal English. 'Different to' is used informally in British English. 'Different as' is not standard English in this context — 'as' is used in comparisons of equality ('the same as', 'as good as'), not in comparisons of difference."
            },
            {
                "lineIndex": 4,
                "incorrectText": "need",
                "correction": "needs",
                "explanation": "'Each brand' is a singular subject — 'each' is always grammatically singular, even when it refers to multiple brands. 'Each brand needs' is correct; 'each brand need' is not. This applies to all uses of 'each': 'each product needs', 'each team member is', 'each recommendation matters'. The same rule applies to 'every': 'every brand needs', 'every decision matters'. Both 'each' and 'every' are followed by a singular noun and a singular verb in present simple."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The brand strategist starts a sentence in a stakeholder meeting. Work with your partner to finish it professionally.",
        "items": [
            {
                "customerLine": "The CEO wants to put our brand name on everything we launch. How do we push back on that?",
                "salespersonStart": "The case for restraint isn't about preference — it's about the commercial value of the master brand. Every time we extend the brand into a new area, we're making a claim about what the brand stands for. If we make too many claims across too many categories, the brand starts to stand for nothing in particular. The right question to ask for every new launch is...",
                "suggestedCompletion": "'Do our brand's existing associations help or hinder us in this new category?' If the answer is 'help', the extension makes sense. If the answer is 'they're irrelevant' or 'they actually create the wrong impression', we need a separate brand or an endorsed model. The CEO's instinct to leverage the brand is understandable, but each decision should be tested against that question, not decided by default."
            },
            {
                "customerLine": "We have five products and they all feel like they're competing with each other. How do we fix that?",
                "salespersonStart": "The first step is a portfolio audit — not a rebrand, but a clear-eyed review of each product's role. For each product, we ask three questions...",
                "suggestedCompletion": "Who is this for — specifically? What problem does it solve that no other product in our portfolio already solves? And what would we lose if we removed it from the portfolio? If two products can't be clearly distinguished by those three questions, they're overlapping and one of them is cannibalising the other. The fix is either clear differentiation — different name, different positioning, different audience — or consolidation into one stronger product."
            },
            {
                "customerLine": "We're about to sign the TechFlow acquisition. The integration team wants to start migrating everything to MarketBridge immediately. What do you recommend?",
                "salespersonStart": "My strong recommendation is to pause that decision until we've completed a brand equity audit on TechFlow. The integration team's instinct to simplify is understandable, but speed here could be expensive. What we need to establish first is...",
                "suggestedCompletion": "how much equity TechFlow has in its existing customer base — do customers buy because of the TechFlow name, or in spite of it? And in which markets is TechFlow better known than MarketBridge, and where is the reverse true? Once we know the equity map, we can make an architecture decision that protects value rather than destroying it. A 60-day delay to get that right is worth far more than the integration simplification we'd gain by moving immediately."
            }
        ]
    }
},
};
