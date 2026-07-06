import { Lesson } from '@/types/lesson';

export const marketingInEmergingMarkets: Lesson = {
  slug: 'marketing-in-emerging-markets',
  title: 'Marketing in Emerging Markets',
  subtitle: 'How to enter and grow in high-potential markets with unique infrastructure, mobile-first consumers, and fast-changing needs',
  level: 'B1-B2',
  description: "Emerging markets represent some of the fastest-growing consumer and business opportunities in the world. But entering them requires a fundamentally different marketing mindset. Consumers in these markets may be mobile-first by necessity, bypass desktop technology entirely, and make decisions in micro-moments that traditional marketing frameworks were not designed to capture. This lesson gives you the vocabulary to analyse, discuss, and develop marketing strategies for these high-potential, high-complexity markets.",
  heroImage: '/images/marketing-in-emerging-markets-hero.png',

  vocabulary: [
    {
      word: 'MARKET PENETRATION',
      partOfSpeech: 'noun',
      definition: "The percentage of people or businesses in a target market who are already buying a product or using a service. Low penetration means most of the market is still available to win. In emerging markets, penetration is often low — which represents a large opportunity but also means building awareness and trial from scratch.",
      example: "Marcus opened the strategy session: Our market penetration in Nigeria is currently 4% of the addressable market. Riley replied: Which means 96% of potential customers have not tried us yet. That is an enormous opportunity — but it also means we need to build from awareness, not from consideration. Dana added: The 4% who are using us are already happy — NPS is 61. The challenge is not product-market fit. The challenge is reach, awareness, and distribution in a market where our usual digital channels have limited penetration.",
      imageSlug: '/images/marketing-in-emerging-markets-market-penetration.png',
    },
    {
      word: 'INFRASTRUCTURE',
      partOfSpeech: 'noun',
      definition: "The basic physical and digital systems that a market needs to function — roads, electricity, internet connectivity, banking systems, and logistics networks. In emerging markets, infrastructure is often incomplete or uneven, which shapes what marketing channels are possible and which distribution methods will work.",
      example: "Riley explained: Before we plan the media strategy, we need to understand the infrastructure reality. In the target region, internet connectivity varies significantly by city and rural area. Marcus added: And the logistics infrastructure means last-mile delivery is complex and expensive in rural areas. Dana replied: Which is why our urban-first launch strategy makes sense — we enter where infrastructure supports our model and expand as it develops. We should also look at whether partnerships with local distributors can solve the last-mile problem.",
      imageSlug: '/images/infrastructure.png',
    },
    {
      word: 'MOBILE-FIRST',
      partOfSpeech: 'adjective',
      definition: "Designing products, services, and marketing primarily for mobile phones rather than desktop computers. In many emerging markets, the mobile phone is the primary — sometimes the only — device consumers use to access the internet, make purchases, and receive information. Mobile-first is not just a design preference in these markets — it is a necessity.",
      example: "Dana presented the consumer research: In our target market, 94% of internet access is via mobile phone. Only 18% of potential customers own a laptop or desktop. Marcus said: That means our entire digital experience — website, payment flow, customer support — must be built mobile-first. Not mobile-optimised, mobile-first. Riley added: And this affects our creative too. Long-form content, complex infographics, and desktop-formatted emails will not reach this audience effectively. Every touchpoint needs to be designed for a 5-inch screen with a potentially slow connection.",
      imageSlug: '/images/mobile-first.png',
    },
    {
      word: 'LEAPFROGGING',
      partOfSpeech: 'noun',
      definition: "When a market skips an older technology or system and goes directly to a newer one. For example, some countries went directly from no banking system to mobile payments, skipping traditional bank accounts entirely. Leapfrogging means consumers in emerging markets may be more advanced in specific areas than consumers in developed markets.",
      example: "Riley explained: This is a classic example of leapfrogging. In Kenya, mobile money adoption is 80% of adults — higher than in the UK — because many people went directly from cash to mobile payments, without ever having a traditional bank account. Marcus added: Which means our payment infrastructure must prioritise mobile wallets and airtime-based payment. Dana added: Leapfrogging also means we should not assume that what works in mature markets will transfer. Consumers here have developed different behaviours because they built around different constraints.",
      imageSlug: '/images/leapfrogging.png',
    },
    {
      word: 'MICRO-MOMENT',
      partOfSpeech: 'noun',
      definition: "A brief, intent-driven moment when a consumer reaches for their phone to find information, make a decision, or complete an action — I want to know, I want to go, I want to do, I want to buy. In mobile-first markets, these micro-moments are the primary points of marketing contact, and brands that are present in these moments win.",
      example: "Dana explained the consumer journey research: In this market, purchase decisions happen in micro-moments — someone sees a product mentioned in a WhatsApp group, searches for it immediately on mobile, and decides to buy within minutes. Marcus replied: Which means the search-to-purchase journey is compressed. Riley added: And this changes our media strategy. We need to be present in the micro-moment — fast-loading pages, clear calls to action, and a checkout process that takes fewer than 3 taps. Any friction and the moment is gone.",
      imageSlug: '/images/micro-moment.png',
    },
    {
      word: 'LOCALISATION',
      partOfSpeech: 'noun',
      definition: "Adapting a product, service, or marketing campaign for a specific local market — including language, cultural references, pricing, imagery, and product features. Localisation is more than translation — it means understanding what resonates with a specific audience and adjusting accordingly.",
      example: "Marcus stressed: Localisation in this market is not optional — it is the entry requirement. Riley listed the dimensions: Language — are we marketing in English, Swahili, or a local language depending on the region? Imagery — does the creative reflect the people, places, and contexts of this market? Pricing — does our price point reflect local income levels? Dana added: And product — are there features that need to change for this market, or features that are irrelevant and make the product feel imported rather than made for them? Localisation touches every element of the marketing mix.",
      imageSlug: '/images/marketing-in-emerging-markets-localisation.png',
    },
    {
      word: 'GROWTH MARKET',
      partOfSpeech: 'noun',
      definition: "A market that is expanding rapidly — in population, income, digital adoption, or consumer demand. Growth markets often offer lower current penetration but higher future potential than mature markets. Marketing in a growth market requires building for tomorrow's consumer, not today's.",
      example: "Dana set the context: We are not looking at this as a market we can monetise today at scale. This is a growth market — the opportunity is in investing now to build brand awareness and distribution while the market is still developing, so we are well positioned when consumer spending power reaches the levels our product requires. Marcus added: The brands that win in growth markets are usually the ones that entered early and built local relationships before the competition arrived. Riley: Which is why we are entering now — not because the unit economics are perfect today, but because the cost of entering later is much higher.",
      imageSlug: '/images/growth-market.png',
    },
    {
      word: 'AFFORDABILITY',
      partOfSpeech: 'noun',
      definition: "Whether a product is priced at a level that the target consumers can realistically pay. In emerging markets, affordability is a central strategic challenge — consumers may want the product but not be able to access it at the price point designed for higher-income markets. Solving the affordability challenge often requires product redesign, different pack sizes, or new pricing models.",
      example: "Riley raised the affordability challenge: Our standard product is priced at £45. The target market has an average monthly income equivalent to £180. At 25% of a month's income, that price point is not accessible. Marcus asked: What are the options? Riley outlined: Three approaches — a stripped-down version at a lower price, a sachet or smaller pack size, or a pay-over-time model that spreads the cost. Dana added: We should study how other brands have solved this. Unilever's sachet strategy in India is a textbook case — they created access by redesigning the unit, not by diluting the product.",
      imageSlug: '/images/affordability.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THE MARKET IS MOBILE-FIRST, WHICH MEANS...',
      definition: "A phrase for drawing out the specific strategic implications of operating in a mobile-first consumer environment. Always complete the sentence with a specific action required — channel choice, creative format, UX design, or payment method.",
      example: "Dana explained: The market is mobile-first, which means every element of our digital presence needs to be optimised for mobile before anything else. That includes the website — we need a sub-3-second load time on a 3G connection — the payment flow, customer support, and the ad formats we use. Marcus asked: What does that mean for the creative team? Dana replied: Every visual asset is designed for vertical mobile formats first. Desktop versions are secondary. And we stop using content formats that do not render well on a slow mobile connection — large video files, complex interactive formats, anything that needs a large screen to make sense.",
      imageSlug: '/images/the-market-is-mobile-first.png',
      inAction: 'The market is mobile-first, which means our entire onboarding flow needs to be completable in under five minutes on a basic Android device with a 3G connection.',
      register: "Neutral — Kova (fintech startup, product strategy): market entry brief reads the market is mobile-first, which means the web app is deprioritised — all investment goes into the Android app first, because that is where 96% of users will access the service. | Stripe (payments, emerging market launch): launch playbook reads the market is mobile-first, which means payment flows must integrate with mobile wallet providers like M-Pesa before card infrastructure is considered. | Emerge (edtech platform, Africa expansion): product brief reads the market is mobile-first, which means content must be downloadable for offline use — internet connectivity is intermittent in rural areas and we cannot assume a live connection.",
      visualExamples: [
        { brand: 'Kova', context: 'Fintech startup — emerging market product strategy', imageSlug: '/images/visual-examples/kova-mobile-first-android.png', caption: 'The market is mobile-first, which means the web app is deprioritised — all investment goes into Android first, where 96% of users will access the service.', aspectRatio: '9/16' },
        { brand: 'Emerge', context: 'Edtech platform — Africa expansion brief', imageSlug: '/images/visual-examples/emerge-mobile-offline.png', caption: 'The market is mobile-first, which means content must be downloadable for offline use — we cannot assume a live internet connection in rural areas.', aspectRatio: '9/16' },
      ],
      inContext: "Marcus had the connectivity data on screen. The market is mobile-first, which means our existing digital strategy does not translate, he said. We cannot assume a laptop, we cannot assume a fast connection, and we cannot assume the user experience we built for European consumers will work here. Dana had the access data: 94% mobile, average connection speed one-fifth of the UK average, and an average device screen size 20% smaller than the devices our creative team uses to review their own work. Riley: We need to brief the creative team with real devices, not simulators.",
    },
    {
      phrase: 'CONSUMERS IN THIS MARKET HAVE LEAPFROGGED...',
      definition: "A phrase for explaining that consumers in an emerging market have bypassed an older technology or system and gone directly to a newer one — which means different behaviour, different expectations, and different marketing opportunities compared to mature markets.",
      example: "Riley explained: Consumers in this market have leapfrogged desktop internet entirely — most people have never owned a personal computer. Their first and only experience of the internet is on a mobile phone. Marcus replied: Which means we cannot assume any mental model based on desktop experience — navigation patterns, search behaviour, content consumption habits are all different. Dana added: It also means some of our assumptions about the purchase journey are wrong. The consumer path from awareness to purchase does not go through a website the way it does in mature markets. It often goes through WhatsApp, social commerce, or a community recommendation.",
      imageSlug: '/images/consumers-have-leapfrogged.png',
      inAction: 'Consumers in this market have leapfrogged traditional banking — 78% of adults use mobile money daily and only 22% have ever held a bank account.',
      register: "Neutral — Kova (fintech, market research): investor deck reads consumers in this market have leapfrogged traditional credit scoring — the opportunity is to build creditworthiness models using mobile data and transaction history rather than formal credit bureau records. | Emerge (edtech, market entry): product strategy reads consumers in this market have leapfrogged physical bookshops and desktop e-readers — mobile reading and audio content are the dominant formats. | Beacon (healthcare, Africa strategy): board presentation reads consumers in this market have leapfrogged GP referral systems — patients go directly to specialist care through social media recommendations and community health workers.",
      visualExamples: [
        { brand: 'Kova', context: 'Fintech — investor presentation on market opportunity', imageSlug: '/images/visual-examples/kova-leapfrog-credit.png', caption: 'Consumers in this market have leapfrogged traditional credit scoring — creditworthiness is built from mobile data and transaction history, not formal credit bureau records.', aspectRatio: '16/9' },
        { brand: 'Emerge', context: 'Edtech — market entry product strategy', imageSlug: '/images/visual-examples/emerge-leapfrog-reading.png', caption: 'Consumers in this market have leapfrogged physical bookshops and desktop e-readers — mobile reading and audio are the dominant content formats.', aspectRatio: '4/5' },
      ],
      inContext: "Dana laid out the technology adoption data. Consumers in this market have leapfrogged desktop computing — the average consumer is in their mid-twenties and has only ever accessed the internet via a mobile phone, she said. Riley added: Which is not a disadvantage — it is a different advantage. These consumers are native mobile users in a way that older Western consumers are not. They navigate, shop, communicate, and consume content on mobile instinctively. Marcus: So design for how they actually behave, not for how a European consumer would behave on mobile as a secondary device.",
    },
    {
      phrase: 'THE AFFORDABILITY CHALLENGE IN THIS MARKET IS...',
      definition: "A phrase for presenting the specific pricing barrier that prevents consumers in an emerging market from accessing a product — and setting up a discussion of how to solve it. Always give a number or a comparison to make the challenge concrete.",
      example: "Riley presented the affordability analysis: The affordability challenge in this market is significant — our standard price represents 22% of the target consumer's monthly income. For context, in the UK the same product represents 1.4% of average monthly income. Marcus replied: So we need a fundamentally different pricing approach. Dana outlined three options: a smaller pack size at a lower absolute price, a subscription model that spreads the cost, or a stripped version of the product built specifically for this market's price tolerance. Riley: The sachet strategy is proven in this region — we should study how Unilever and others have implemented it before we design our own approach.",
      imageSlug: '/images/the-affordability-challenge-is.png',
      inAction: 'The affordability challenge in this market is that our minimum viable price point is three times the amount the average consumer is willing to spend on this category.',
      register: "Neutral — Solaris (solar energy, East Africa): investor brief reads the affordability challenge in this market is access to upfront capital — the pay-as-you-go model solves this by converting a large purchase into daily micro-payments via mobile money. | Nura (healthcare, South Asia market entry): product strategy reads the affordability challenge in this market is the gap between private and public healthcare costs — we are building a freemium tier that provides basic diagnostic tools at zero cost and premium features at a price calibrated to local income levels. | Kova (fintech, product pricing): board presentation reads the affordability challenge in this market is not the product price — it is access to a bank account for the payment. Mobile money integration eliminates this barrier entirely.",
      visualExamples: [
        { brand: 'Solaris', context: 'Solar energy — East Africa investor brief', imageSlug: '/images/visual-examples/solaris-affordability-payg.png', caption: 'The affordability challenge in this market is upfront capital — the pay-as-you-go model converts a large purchase into daily micro-payments via mobile money.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — board pricing strategy presentation', imageSlug: '/images/visual-examples/kova-affordability-mobile-money.png', caption: 'The affordability challenge in this market is not the product price — it is access to a bank account. Mobile money integration eliminates this barrier entirely.', aspectRatio: '16/9' },
      ],
      inContext: "Marcus had the pricing model on screen. The affordability challenge in this market is real, he said. At £45, we are pricing out 80% of our target audience before we have even begun. Riley: That is the fundamental product question — can we create a viable lower-price version without destroying the margin? Dana: The sachet model says yes. You build access at a lower price point with a smaller unit. Once the consumer trusts the brand, they move up to the larger pack over time. It is a known pathway. The question is whether our product can be packaged that way.",
    },
    {
      phrase: 'TO SUCCEED IN THIS GROWTH MARKET, WE NEED TO...',
      definition: "A phrase for presenting the specific strategic requirements for market entry and growth in a high-potential emerging market. Used in market entry proposals, strategy presentations, and investment cases.",
      example: "Dana presented the market entry requirements: To succeed in this growth market, we need to do four things. First — establish a local distribution partner who understands the last-mile logistics challenge in rural areas. Second — localise our product and communications to the dominant local languages, not just English. Third — build our digital presence mobile-first from day one. And fourth — price for access, not for margin in year one. Marcus asked: What is the investment required? Dana replied: Approximately £800k in year one — mostly people and localisation costs. The payback period is 4 years based on conservative penetration assumptions.",
      imageSlug: '/images/to-succeed-in-this-growth-market.png',
      inAction: 'To succeed in this growth market, we need to build brand trust before we build brand awareness — community partnerships and local endorsements matter more than media spend in this context.',
      register: "Neutral — Beacon (healthcare, India expansion): board presentation reads to succeed in this growth market, we need to build relationships with community health workers who are trusted intermediaries between the brand and the end consumer — no media spend will substitute for that trust. | Emerge (edtech, SSA strategy): investor brief reads to succeed in this growth market, we need to solve the offline access problem before we invest in marketing — if students cannot access the content reliably, acquisition is a waste of investment. | Kova (fintech, market entry): product brief reads to succeed in this growth market, we need to integrate with the existing mobile money ecosystem rather than building parallel infrastructure — consumers will not switch payment systems for a single app.",
      visualExamples: [
        { brand: 'Beacon', context: 'Healthcare — India board strategy presentation', imageSlug: '/images/visual-examples/beacon-growth-market-trust.png', caption: 'To succeed in this growth market, we need to build relationships with community health workers — trusted intermediaries that no media spend can substitute.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — market entry product brief', imageSlug: '/images/visual-examples/kova-growth-market-ecosystem.png', caption: 'To succeed in this growth market, we need to integrate with the existing mobile money ecosystem — consumers will not switch payment systems for a single app.', aspectRatio: '4/5' },
      ],
      inContext: "Riley summarised the strategic requirements. To succeed in this growth market, we need to stop thinking like a mature market operator and start thinking like a market builder, she said. That means a different approach to distribution, a different pricing model, a different content strategy, and a much longer investment horizon. Marcus: The brands that won in China, India, and Brazil in the 2000s were the ones that entered early, committed deeply, and built for the local consumer. The ones that exported their domestic model without adapting failed. Dana: We know the mistakes. Let us not make them.",
    },
    {
      phrase: 'LOCALISATION IN THIS CONTEXT MEANS MORE THAN TRANSLATION',
      definition: "A phrase for explaining that adapting a product or campaign for a new market requires deep cultural, behavioural, and economic adjustment — not just changing the language. Used when briefing teams, agencies, or leadership on what true localisation requires.",
      example: "Marcus stressed: Localisation in this context means more than translation. It means understanding that the family unit, the decision-making structure, and the cultural relationship to the product category are all different here. Riley added: Our UK campaign emphasises individual choice and personal transformation. In this market, those same values might land very differently — the emphasis might need to be on family benefit, community status, or collective wellbeing rather than individual achievement. Dana: Which means a genuine localisation process — with local consumers in the room, not just local translators reviewing copy.",
      imageSlug: '/images/localisation-means-more-than-translation.png',
      inAction: 'Localisation in this context means more than translation — the product naming, pricing structure, distribution channel, and even the colour palette all need to be reviewed for local fit.',
      register: "Neutral — Ember (meal kit, Asia expansion): market entry brief reads localisation in this context means more than translation — the food values, ingredient preferences, and cooking habits are fundamentally different, and the product itself needs to be redesigned, not just renamed. | Flux (SaaS platform, Middle East entry): product localisation brief reads localisation in this context means more than translation — the user interface needs right-to-left layout, the payment options need to include local methods, and the customer support hours need to align with local business hours. | Forge (HR platform, Africa launch): sales brief reads localisation in this context means more than translation — the compliance frameworks, labour law references, and organisational hierarchy assumptions in the product all need to be reviewed for local relevance.",
      visualExamples: [
        { brand: 'Ember', context: 'Meal kit — Asia market expansion brief', imageSlug: '/images/visual-examples/ember-localisation-food.png', caption: 'Localisation in this context means more than translation — food values and cooking habits are fundamentally different, and the product itself needs to be redesigned, not just renamed.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — Middle East product localisation', imageSlug: '/images/visual-examples/flux-localisation-rtl.png', caption: 'Localisation in this context means more than translation — right-to-left UI layout, local payment methods, and regional support hours are all required for true localisation.', aspectRatio: '4/5' },
      ],
      inContext: "Dana had the localisation audit on screen. Localisation in this context means more than translation, she said. We have translated the website. We have not localised the product, the pricing model, the imagery, or the customer journey. Riley looked at the homepage: the hero image shows a European cityscape. The payment options are all card-based. The language is English with a local language option buried in the footer. Marcus: This is a localised wrapper on an unchanged product. That is not the same thing. Go back to the brief.",
    },
    {
      phrase: 'THE MICRO-MOMENT THAT DRIVES PURCHASE IN THIS MARKET IS...',
      definition: "A phrase for identifying the specific intent-driven moment when a consumer in an emerging market is most likely to make a purchase decision — so the brand can be present at exactly the right time and place. Used in media planning, content strategy, and consumer journey analysis.",
      example: "Riley explained: The micro-moment that drives purchase in this market is the peer recommendation in a WhatsApp group. A product gets mentioned, interest spikes immediately, and the search-to-purchase journey happens within minutes. Marcus replied: So our social commerce strategy needs to be built around that specific moment. Dana added: Which means being findable on WhatsApp — via WhatsApp Business, via shareable product links — and having a checkout flow that is short enough to complete while the interest is still hot. If there are more than 3 steps between seeing a recommendation and completing a purchase, we lose them.",
      imageSlug: '/images/the-micro-moment-that-drives-purchase.png',
      inAction: 'The micro-moment that drives purchase in this market is a commute search — consumers discover, compare, and buy during their daily public transport journey, almost entirely on mobile.',
      register: "Neutral — Kova (fintech, consumer research): customer journey report reads the micro-moment that drives mobile money sign-up in this market is paying a bill in public — the need is immediate, the device is in hand, and the decision takes seconds. | Emerge (edtech, content strategy): marketing brief reads the micro-moment that drives content consumption in this market is the 30-minute evening window after work — mobile data usage peaks between 8pm and 10pm and all key content should be scheduled for this window. | Beacon (healthcare, digital strategy): campaign brief reads the micro-moment that drives health app downloads in this market is a symptom search — users who search a specific symptom and find Beacon download the app in the same session 64% of the time.",
      visualExamples: [
        { brand: 'Emerge', context: 'Edtech — consumer journey and content strategy', imageSlug: '/images/visual-examples/emerge-micro-moment-evening.png', caption: 'The micro-moment that drives content consumption in this market is the evening window — mobile data peaks 8pm to 10pm, and key content is scheduled for this window.', aspectRatio: '9/16' },
        { brand: 'Beacon', context: 'Healthcare — digital marketing strategy brief', imageSlug: '/images/visual-examples/beacon-micro-moment-symptom.png', caption: 'The micro-moment that drives downloads in this market is a symptom search — users who search a symptom and find Beacon download the app in the same session 64% of the time.', aspectRatio: '4/5' },
      ],
      inContext: "Riley had the consumer journey data mapped. The micro-moment that drives purchase in this market is a community recommendation, she said. Not a paid ad, not a search result — a trusted peer in a WhatsApp group saying try this. Marcus: And how long does that moment last? Riley: Minutes. The intent is strong but perishable. If we are not findable immediately, and if the purchase journey is not frictionless, the moment passes. Dana: Which means our search presence, our WhatsApp Business profile, and our checkout flow are not just nice to have — they are the conversion mechanism for our primary acquisition channel.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We are presenting the East Africa market entry strategy to the board next week. I want us to build this properly — starting from the market reality, not from what worked in Europe. Riley, let us start with the opportunity. What is the headline?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Three reasons this is a compelling [[growth market:a market expanding rapidly in population, income, and digital adoption]]. First — the addressable market is 45 million potential customers, with [[market penetration:the percentage of the target market already buying a product]] currently at under 3% for our category. Second — smartphone adoption has doubled in three years. Third — the middle class is expanding at 6% annually.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And consumers in this market have [[leapfrogging:skipping an older technology and going directly to a newer one]] desktop technology entirely — 92% of internet access is mobile. They never had a desktop internet phase. This is a fully [[mobile-first:designed primarily for mobile phones rather than desktop computers]] consumer base.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The market is mobile-first, which means our entire digital strategy needs to be rebuilt from the phone up. What does that mean specifically?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Website load time under 3 seconds on a 3G connection. Checkout in 3 taps or fewer. Payments via mobile money, not card. All creative assets in vertical mobile format. And we need to be present in WhatsApp — because the [[micro-moment:a brief, intent-driven moment when a consumer reaches for their phone to find information or buy]] that drives purchase in this market is a peer recommendation in a WhatsApp group.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Now the challenges. The [[infrastructure:the basic physical and digital systems a market needs to function]] situation varies significantly. Urban centres have strong 4G. Rural areas are still predominantly 2G and 3G. Last-mile logistics is complex and expensive outside major cities.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So urban-first launch, expand as infrastructure develops. What about [[affordability:whether a product is priced at a level consumers can realistically pay]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The affordability challenge in this market is significant. Our standard price represents 20% of the average target consumer's monthly income. That is not accessible. We need either a smaller pack size at a lower absolute price, or a pay-over-time model.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The pay-over-time model via mobile money is the more scalable solution. Consumers in this market have leapfrogged traditional banking — 74% use mobile money regularly. A daily or weekly micro-payment model converts the affordability barrier into a payment design problem.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. What about [[localisation:adapting a product, service, or campaign for a specific local market]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Localisation in this context means more than translation. Our creative needs to reflect local faces, local settings, local languages — and the messaging needs to shift from individual benefit to family benefit. The values that drive purchase decisions here are different from Europe.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I would also recommend a community ambassador programme — local trusted figures who introduce the product through their networks. In markets where digital trust is still being built, peer endorsement through a trusted local voice is often more powerful than paid media.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "To succeed in this growth market, we need to commit to the localisation fully, solve the affordability challenge before launch, and build our digital presence mobile-first from day one. That is the strategy summary. Let us build the full presentation around those three pillars.",
    },
  ],

  matchingExercise: [
    { word: 'market penetration', definition: 'the percentage of the target market already buying a product — low penetration means a large opportunity to win' },
    { word: 'infrastructure', definition: 'the basic physical and digital systems a market needs — roads, electricity, internet, banking, and logistics' },
    { word: 'mobile-first', definition: 'designed primarily for mobile phones because most consumers access the internet via smartphone' },
    { word: 'leapfrogging', definition: 'skipping an older technology and going directly to a newer one — bypassing an entire phase of development' },
    { word: 'micro-moment', definition: 'a brief, intent-driven moment when a consumer reaches for their phone to find information or buy' },
    { word: 'localisation', definition: 'adapting a product, campaign, or service for a specific local market beyond just translation' },
    { word: 'growth market', definition: 'a market expanding rapidly in population, income, and consumer demand — high future potential, low current penetration' },
    { word: 'affordability', definition: 'whether a product is priced at a level target consumers can realistically pay given their income levels' },
  ],

  fillBlankExercise: [
    { before: 'Our current', after: 'in the target market is only 3% — which means 97% of potential customers have not tried us yet.', answer: 'market penetration' },
    { before: 'The market is', after: ', which means every creative asset must be designed for a 5-inch screen with a slow connection.', answer: 'mobile-first' },
    { before: 'Consumers in this market have', after: 'desktop technology entirely — their first internet experience was on a mobile phone.', answer: 'leapfrogged' },
    { before: "The affordability challenge in this market is that our standard price represents 20% of the average consumer's monthly", answer: 'income', after: '.' },
    { before: '', after: 'in this context means more than translation — it means adapting the product, the pricing, and the cultural messaging.', answer: 'Localisation' },
    { before: 'The', after: 'that drives purchase in this market is a peer recommendation in a WhatsApp group — the decision happens within minutes.', answer: 'micro-moment' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Dana mean when she says consumers in this market have leapfrogged desktop technology?',
      options: ['Consumers jumped from desktop computing directly to the latest tablet devices', 'Consumers skipped desktop internet entirely and went directly to mobile — they have never had a desktop phase', 'Consumers use both desktop and mobile equally but prefer mobile for purchases'],
      correctIndex: 1,
    },
    {
      question: "What is Riley's proposed solution to the affordability challenge?",
      options: ['Reduce the product quality to lower the manufacturing cost and bring the price down', 'A smaller pack size or a pay-over-time model via mobile money that converts the price barrier into a payment design problem', 'Offer a free version of the product to build trial before introducing paid tiers'],
      correctIndex: 1,
    },
    {
      question: "What specific micro-moment does Riley identify as the primary purchase driver in this market?",
      options: ['A search result after seeing a paid advertisement on a social media platform', 'A peer recommendation in a WhatsApp group, followed by immediate search and purchase', 'An email newsletter from a trusted brand arriving at a convenient time'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley mean when she says localisation is more than translation?',
      options: ['Localisation also includes adding local payment options and translating the terms and conditions document', 'Creative, messaging, values, and the understanding of what drives purchase must all be adapted to the local cultural and economic context', 'Localisation means hiring a local agency to manage the campaign rather than using the European team'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Think about a global brand you use — like Coca-Cola, Apple, or Netflix. Do they show different advertising in your country compared to what you see from the US or UK? What is different about the local version? What stays the same?",
      'Have you ever tried to buy a product or service that was not designed for your market — with the wrong language, the wrong price, or payment options that did not work for you? What was the experience like?',
      "If you were launching your company's product in a new country where consumers are mobile-first and have very different income levels, what would be the first three things you would need to change about your current marketing approach?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'Brands that enter growth markets early _____ a significant advantage over competitors who wait until the market is mature.',
        options: ['gain', 'gains', 'are gaining'],
        correctIndex: 0,
        explanation: "Simple present ('gain') is correct for stating a general truth or pattern — something that is reliably true rather than something happening right now. 'Brands that enter early gain an advantage' describes a principle of market strategy, not a specific event currently in progress. 'Gains' would require a singular subject: 'a brand that enters early gains'. 'Are gaining' (present continuous) would describe an active, ongoing process right now — but this sentence states a strategic principle, not a current observation. When you are stating a business principle or a general truth, simple present is almost always correct.",
      },
      {
        sentence: 'The pay-as-you-go model converts _____ large upfront cost into manageable daily micro-payments.',
        options: ['a', 'the', 'an'],
        correctIndex: 0,
        explanation: "'A' is the indefinite article — it introduces a large upfront cost as a general category or type of cost, not a specific one that has already been mentioned or identified. 'The' would be used for a specific, previously mentioned cost: 'converts the large upfront cost' — implying a particular cost already in the conversation. 'An' is used before vowel sounds: 'an enormous cost', 'an upfront cost' (note: 'an upfront' is correct because 'upfront' starts with a vowel sound). However, 'a large upfront cost' uses 'a' because 'large' starts with a consonant sound — the article is chosen based on the first sound of the next word, not the noun itself.",
      },
      {
        sentence: 'Having _____ the market carefully, the team concluded that mobile-first was the only viable digital strategy.',
        options: ['analysed', 'analysing', 'been analysed'],
        correctIndex: 0,
        explanation: "'Having analysed' is the perfect participle construction — it describes a completed action before the main clause: the analysis was done first, and then the conclusion was reached. This is the standard structure for a participial phrase in the subject position: 'Having [done X], [the subject] [did Y].' The subject of both the participle and the main clause must be the same — here, 'the team' both analysed and concluded. 'Analysing' (present participle) would mean the two actions are simultaneous or overlapping — but concluding happens after analysing, not at the same time. 'Been analysed' is passive — it would need a different subject: 'having been analysed by the team, the market...'",
      },
      {
        sentence: 'The micro-moment _____ purchase in this market lasts only a few minutes — any friction in the checkout flow and the consumer moves on.',
        options: ['that drives', 'which drives', 'driving'],
        correctIndex: 0,
        explanation: "All three are grammatically possible, but each carries a different nuance. 'That drives' introduces a defining relative clause — it tells us which specific micro-moment we are talking about: the one that drives purchase. This is the most neutral and standard choice. 'Which drives' also works in a defining relative clause in British English, though 'which' is more commonly used in non-defining (additional information) clauses. 'Driving' is a reduced participial phrase — 'the micro-moment driving purchase' — also grammatically correct but less formal. In formal written English, 'that drives' is the most precise choice for a defining relative clause that identifies which micro-moment is meant.",
      },
      {
        sentence: 'Consumers in this market _____ desktop technology — their first internet experience was on a mobile phone.',
        options: ['have leapfrogged', 'leapfrogged', 'are leapfrogging'],
        correctIndex: 0,
        explanation: "Present perfect ('have leapfrogged') is correct because the sentence describes a situation that began in the past and is still relevant or true now — the consequence (never having had desktop experience) is still a present reality. The present perfect links past action to current state. Past simple ('leapfrogged') would describe a completed historical event with no direct connection to the present: 'In 2005, consumers leapfrogged desktop.' Present continuous ('are leapfrogging') describes an action in progress right now — but leapfrogging (skipping) is a transition that is already complete, not an ongoing action. The presence of the explanatory second clause ('their first internet experience was on a mobile phone') confirms that we are describing a current reality that resulted from a past transition — which is exactly what present perfect expresses.",
      },
      {
        sentence: 'To succeed in this growth market, the brand will need to invest _____ at least three years before seeing a significant return.',
        options: ['for', 'over', 'during'],
        correctIndex: 0,
        explanation: "'For' describes duration — 'invest for at least three years' means the investment continues throughout a period of three years. This is the standard preposition for duration: 'for three years', 'for six months', 'for a decade'. 'Over' implies a span or gradual progression: 'over three years' — correct and also natural — but typically used to mean 'as three years pass' or 'throughout the course of three years'. 'For' is more neutral and widely used for duration. 'During' introduces a specific, named period: 'during the first three years', 'during Q3'. It requires a named period, not an indefinite one. 'During at least three years' is non-standard — 'during' does not pair naturally with 'at least'.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'We want to launch in Nigeria. We will just translate our UK website and run the same ads. It worked in France.'",
          options: [
            "That is a reasonable starting point — translation is the most important step and the creative can be adapted later once you understand what works.",
            "France and Nigeria are fundamentally different markets, and what worked in France is unlikely to transfer without significant adaptation. Nigeria has 94% mobile internet access versus 25% in France, an average income approximately 8x lower than the UK, a dominant payment infrastructure based on mobile money rather than cards, and different languages, cultural values, and consumer trust dynamics. Localisation in this context means more than translation — it means rebuilding the consumer journey, the pricing model, the payment options, and the creative from the local consumer's perspective. I would recommend starting with a market research piece before committing to any creative.",
            "The translation approach works in most markets — the most important thing is to get the language right and the rest will follow.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it gives specific data to explain why the direct transfer will not work, names the key dimensions of difference, and redirects to the right starting point (market research). Option A is dangerous — 'creative can be adapted later' ignores the fact that an untailored campaign in a new market can be ineffective or even offensive. Option C is factually wrong — language is important but it is one of many elements that require adaptation in an emerging market context.",
        },
        {
          customerLine: "'Our product costs £50. Is that too expensive for an emerging market?'",
          options: [
            "That depends entirely on the specific market and the target consumer segment within it. £50 might represent 25% of monthly income for a lower-income consumer in East Africa or less than 1% of monthly income for a high-income urban professional in the same country. The question is not whether £50 is too expensive — the question is: who specifically is the target consumer, what is their monthly income, and what share of that income are they typically willing to spend in this category? Once you have that data, you can calculate whether your current price is accessible and, if not, which affordability solutions are viable — a smaller pack size, a payment model, or a tiered product.",
            "Yes — £50 is definitely too expensive for emerging markets. You need to price below £10 to reach the mass market.",
            "Emerging market consumers are very price-sensitive, so you should discount heavily for the launch period and raise the price once the brand is established.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it avoids a blanket answer, identifies the right variables (specific market, target segment, income level, category spend tolerance), and sets up the right framework for making the decision. Option B is wrong — 'below £10' is an arbitrary number with no strategic basis. Emerging markets contain large populations of high-income urban professionals alongside lower-income rural consumers. Option C is also wrong — launch discounting creates unsustainable expectations and does not solve the structural affordability challenge.",
        },
        {
          customerLine: "'We have been told our target consumers are mobile-first. What does that actually mean for our campaign?'",
          options: [
            "It means you should have a mobile-friendly website — so make sure the desktop site scales well to a phone screen.",
            "Mobile-first means designing the entire consumer experience around a mobile phone as the primary and often only device. This has several specific implications for your campaign: creative assets should be designed in vertical formats (9:16) first — horizontal formats are secondary. Content must load in under 3 seconds on a 3G connection, not a home broadband connection. The purchase or sign-up flow must be completable in 3 taps or fewer. Payment options must include mobile money and local payment methods. And your media strategy needs to focus on channels and moments where mobile users are active — WhatsApp, short-form video, and the specific micro-moments when your consumers reach for their phone. 'Mobile-friendly' is a retrofit. Mobile-first means the phone is the starting point for every decision.",
            "It means you should invest in mobile advertising — run your ads on Instagram and TikTok rather than Facebook.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it explains the full strategic implication of mobile-first, covering creative format, loading speed, conversion flow, payment, and media strategy. It also makes the important distinction between 'mobile-friendly' (an adaptation) and 'mobile-first' (a starting point). Option A is the most common misunderstanding of mobile-first — responsive design is necessary but nowhere near sufficient. Option C reduces mobile-first to a channel selection, which misses the fundamental product design, UX, and payment implications entirely.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the emerging markets strategy meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Our current market penetration in the region is 4% — which means the opportunity ahead of us are enormous." },
        { speaker: 'Riley', text: "Exactly. And consumers in this market have leapfrogged desktop technology entirely — 92% of internet access is via mobile." },
        { speaker: 'Dana', text: "The affordability challenge is the most difficult issue to solve. Our current price represents almost a quarter of a monthly income for our target consumer." },
        { speaker: 'Marcus', text: "We should considering a micro-payment model via mobile money — it converts a large upfront cost into small daily payments." },
        { speaker: 'Riley', text: "And localisation in this context mean more than translation — the messaging, the imagery, and the values all need to be adapted." },
        { speaker: 'Dana', text: "I recommend launching in urban centres first, where the infrastructure is strongest, and expanding as connectivity improves." },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'the opportunity ahead of us are enormous',
          correction: 'the opportunity ahead of us is enormous',
          explanation: "'Opportunity' is singular — therefore the verb must be singular: 'the opportunity is enormous'. 'Ahead of us' is a prepositional phrase modifying 'opportunity' — it does not change the subject or its number. This is a classic proximity error: the writer matches the verb to 'us' (the nearest preceding noun) rather than to 'opportunity' (the head noun of the subject phrase). Rule: find the head noun, check if it is singular or plural, match the verb. 'The opportunity is enormous' — singular. 'The opportunities are enormous' — plural.",
        },
        {
          lineIndex: 3,
          incorrectText: 'We should considering',
          correction: 'We should consider',
          explanation: "After modal auxiliaries (should, could, would, might, must, will, can), the verb takes the base (infinitive) form — no -ing, no -ed, no 'to'. 'We should consider' — not 'should considering'. This applies to all modals: 'we could try', 'we must review', 'we might explore', 'we will build'. 'Should considering' would only be correct with a continuous modal: 'we should be considering' — which describes an ongoing present action rather than a proposal. For a proposal or recommendation, 'should consider' (modal + base form) is standard.",
        },
        {
          lineIndex: 4,
          incorrectText: 'localisation in this context mean',
          correction: 'localisation in this context means',
          explanation: "'Localisation' is singular — the verb must be third person singular: 'means', not 'mean'. 'In this context' is a prepositional phrase that modifies the subject but does not change it. The subject is 'localisation' — singular — therefore the verb in simple present takes the third person singular form with an -s: 'localisation means'. Compare: 'localisation means' (singular) vs 'these strategies mean' (plural). Always check the head noun of the subject, not the modifier.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "A colleague says: 'Emerging markets are too risky and complex. We should focus on markets we already understand.'",
          salespersonStart: "The complexity is real — but the risk of not entering is also real —",
          suggestedCompletion: "and it compounds over time. The brands that dominate growth markets today — in payments, edtech, healthcare, consumer goods — are the ones that entered when the market was early, built local relationships, and invested before the returns were obvious. The brands that waited for certainty waited until the competition was already entrenched and the cost of entry was three times higher. Complexity is not a reason to stay out — it is a reason to do the work properly: understand the infrastructure, solve the affordability challenge, build genuine local partnerships, and commit to a longer investment horizon than you would in a mature market. Emerging markets are not a simpler version of mature markets. They are different. That requires a different approach, not a decision to avoid them.",
        },
        {
          customerLine: "Write two sentences explaining to a board why mobile-first is not the same as mobile-friendly.",
          salespersonStart: "Mobile-friendly means our existing experience works acceptably on a phone —",
          suggestedCompletion: "mobile-first means the phone is the starting point for every design, content, payment, and channel decision we make. In a market where 94% of internet access is via mobile phone, 'acceptable on a phone' is not a strategy — it is a baseline that most of our competitors already meet; what wins is being built specifically, thoughtfully, and completely for the mobile experience that this consumer actually has.",
        },
        {
          customerLine: "How do you explain the business case for entering a growth market before it is profitable?",
          salespersonStart: "The business case is not about what the market looks like today —",
          suggestedCompletion: "it is about what it will look like in five to eight years, and what position we want to be in when it gets there. At current growth rates, the addressable market will be four times larger by 2032. The consumers who will be buying at that scale are building brand awareness and brand habits right now — and they are building them with whoever is present and credible in this market today. If we are not in the room now, we will be trying to displace established brands at a far higher cost and with far lower probability of success later. Entering early, investing in localisation, and accepting a longer payback horizon is not a risk — it is the lowest-risk path to a strong position in a market we will want to be in.",
        },
      ],
    },
  },
};
