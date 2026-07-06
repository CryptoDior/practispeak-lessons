import { Lesson } from '@/types/lesson';

export const luxuryAndPremiumMarketing: Lesson = {
  slug: 'luxury-and-premium-marketing',
  title: 'Luxury and Premium Marketing',
  subtitle: 'How to communicate the language of exclusivity, heritage, and desirability — and protect the value of a premium brand',
  level: 'C1-C2',
  description: "Luxury brands do not compete on price — they compete on meaning. The language of luxury is about aspiration, heritage, craftsmanship, and scarcity. It is about what a product represents, not just what it does. Marketing a luxury or premium brand requires a different set of communication principles: restraint over excitement, scarcity over availability, story over specification. This lesson gives you the vocabulary to talk confidently about luxury and premium marketing strategy — whether you work in luxury, aspire to, or simply need to understand how these brands communicate.",
  heroImage: '/images/luxury-and-premium-marketing-hero.png',

  vocabulary: [
    {
      word: 'ASPIRATIONAL',
      partOfSpeech: 'adjective',
      definition: "Describes something that people want to have or achieve because it represents a lifestyle, a status, or a version of themselves they admire. Aspirational marketing creates desire by showing people not what they are, but what they could become by owning or experiencing the product.",
      example: "Aurel's campaign does not show the watch being worn — it shows the life the owner leads. Every image is aspirational: early mornings, private access, quiet confidence. The brand sells the identity, not the object.",
      imageSlug: '/images/aspirational.png',
    },
    {
      word: 'EXCLUSIVITY',
      partOfSpeech: 'noun',
      definition: "The quality of being available only to a limited group of people — by price, by invitation, by limited quantity, or by membership. In luxury marketing, exclusivity is a core value: the product is desirable partly because not everyone can have it. Exclusivity is actively maintained through pricing, distribution, and access.",
      example: "Exclusivity is not accidental for Crestwood — they deliberately limit annual production to 12,000 cases. The waitlist for the flagship expression is currently 18 months. Scarcity is the strategy, not a supply constraint.",
      imageSlug: '/images/luxury-and-premium-marketing-exclusivity.png',
    },
    {
      word: 'HERITAGE',
      partOfSpeech: 'noun',
      definition: "The history, traditions, and origins of a brand — especially when that history represents quality, expertise, or a connection to a specific place or craft. In luxury marketing, heritage is a powerful differentiator because it cannot be bought or replicated quickly. A brand with 200 years of history has something a new brand simply cannot have.",
      example: "Aurel's heritage dates to 1887, and every campaign references it. The founder's original workshop in Geneva appears in the brand book and in every retail environment. Heritage is the competitive advantage no competitor can replicate.",
      imageSlug: '/images/luxury-and-premium-marketing-heritage.png',
    },
    {
      word: 'CRAFTSMANSHIP',
      partOfSpeech: 'noun',
      definition: "The skill and care put into making something by hand, or to an exceptionally high standard, by skilled artisans. In luxury marketing, craftsmanship is used to justify premium pricing and to distinguish hand-made or artisan products from mass-produced alternatives. The story of how something is made is as important as the thing itself.",
      example: "Each Crestwood expression takes a minimum of 12 years to mature and is finished by hand at the distillery. The craftsmanship narrative runs through every touchpoint — label copy, packaging, tasting notes. It is what justifies the price point without the brand having to say so directly.",
      imageSlug: '/images/craftsmanship.png',
    },
    {
      word: 'ULTRA-PREMIUM',
      partOfSpeech: 'adjective',
      definition: "The highest tier of a luxury or premium market — above premium, above luxury in some classifications. Ultra-premium products are priced, positioned, and distributed to signal exceptional rarity and quality. Ultra-premium is not just expensive — it is rare, prestigious, and often hand-made or highly limited in availability.",
      example: "Ultra-premium requires a fundamentally different distribution strategy. Aurel does not sell through multi-brand retailers — the product is only available through their own boutiques and a small number of authorised partners. At that price point, every touchpoint is part of the product.",
      imageSlug: '/images/ultra-premium.png',
    },
    {
      word: 'SCARCITY',
      partOfSpeech: 'noun',
      definition: "The quality of being rare or in limited supply. In luxury marketing, scarcity is often deliberately created — through limited editions, limited production runs, or waitlists — because scarcity increases perceived value and desire. The less available something is, the more people want it.",
      example: "Vellum limits each letterpress collection to 200 numbered sets. The scarcity is real, not manufactured — the production method genuinely cannot scale. But the brand chooses to keep it that way because the limitation is core to the positioning.",
      imageSlug: '/images/luxury-and-premium-marketing-scarcity.png',
    },
    {
      word: 'BRAND DESIRABILITY',
      partOfSpeech: 'noun',
      definition: "How much people want a brand — how strongly they feel drawn to it, how much they aspire to own it, and how it makes them feel about themselves. Brand desirability is different from brand awareness (knowing a brand exists) or brand preference (choosing one brand over another). Desirability is an emotional and status-driven pull.",
      example: "Brand desirability for Aurel increased after three years of refusing to enter the travel retail channel. By staying out of airports, the brand maintained its association with deliberate purchase rather than impulse buying. Desirability is built partly by what a brand says no to.",
      imageSlug: '/images/brand-desirability.png',
    },
    {
      word: 'CONNOISSEUR',
      partOfSpeech: 'noun',
      definition: "A person with deep knowledge, refined taste, and expert judgment in a particular area — fine wine, art, fashion, watches, or cuisine. In luxury marketing, the connoisseur is both an aspirational audience and a credibility signal. Being known as the choice of connoisseurs elevates a brand's status with everyone else.",
      example: "Crestwood's marketing strategy is built for the connoisseur — the person who already knows enough to appreciate the nuance. The tasting notes assume knowledge, not ignorance. Writing for the connoisseur signals confidence in the product.",
      imageSlug: '/images/connoisseur.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THE BRAND SHOULD NEVER DISCOUNT — IT SIGNALS...',
      definition: "A phrase for explaining why price reductions are strategically dangerous for luxury and premium brands. Used in brand strategy discussions and pricing reviews to defend full-price positioning. Always complete with what discounting signals — desperation, oversupply, reduced value — and the long-term consequence for brand desirability.",
      example: "The brand should never discount — it signals that the full price was wrong, and once that perception exists, it cannot be undone. Aurel has never run a promotional campaign in 137 years of trading. Price integrity is part of what the price communicates.",
      imageSlug: '/images/the-brand-should-never-discount.png',
      inAction: 'The brand should never discount — it signals to every customer who paid full price that they overpaid, and that signal is far more expensive than the revenue the discount would have generated.',
      register: "Neutral — Aurel (luxury watch brand, end-of-year review): pricing strategy note reads the brand should never discount — the inventory position is managed through private client events and charitable partnerships, not through public price reductions. | Crestwood (premium spirits, trade review): brand strategy reads the brand should never discount in on-trade — price promotions in bars and restaurants create a ceiling on what the consumer believes the bottle is worth, and that ceiling is very hard to raise once it exists. | Vellum (luxury stationery, retail strategy): brand governance document reads the brand should never discount in any retail channel — retailers who request promotional pricing are removed from the authorised stockist list.",
      visualExamples: [
        { brand: 'Aurel', context: 'Luxury watch brand — end-of-year pricing review', imageSlug: '/images/visual-examples/aurel-never-discount-inventory.png', caption: 'The brand should never discount — inventory is managed through private client events and charitable partnerships, never through public price reductions.', aspectRatio: '16/9' },
        { brand: 'Vellum', context: 'Luxury stationery — retail channel brand governance', imageSlug: '/images/visual-examples/vellum-never-discount-retailers.png', caption: 'The brand should never discount in any retail channel — retailers who request promotional pricing are removed from the authorised stockist list.', aspectRatio: '4/5' },
      ],
      inContext: "Riley raised the question in the strategy session. We are looking at an end-of-season surplus. Marcus was immediate: The brand should never discount — it signals an oversupply problem that we either did not plan for or cannot sell our way through at full price. Both are signals we cannot afford to send. Dana: So what do we do with the surplus? Marcus: We gift 30 units to the charity auction we support. We hold a private viewing for our 50 most loyal clients with first access. We return the rest to the atelier for a rework into a limited special edition next spring. No markdown. No sale. No signal.",
    },
    {
      phrase: 'SCARCITY IS A POSITIONING TOOL, NOT A SUPPLY PROBLEM — WE ARE CHOOSING TO...',
      definition: "A phrase for reframing intentionally limited production or availability as a deliberate brand strategy rather than a logistics failure. Used when explaining to stakeholders, retailers, or investors why demand is not being met at scale. The phrase signals that scarcity is designed, not accidental.",
      example: "Scarcity is a positioning tool, not a supply problem — Crestwood is choosing to limit production, not struggling to scale. The constraint is deliberate and it is what makes the product covetable. Communicating that distinction to the consumer is the marketing challenge.",
      imageSlug: '/images/scarcity-is-a-positioning-tool.png',
      inAction: 'Scarcity is a positioning tool, not a supply problem — we are choosing to keep production at 300 units because the waitlist and the anticipation it creates are worth more to the brand than the revenue from the additional volume.',
      register: "Neutral — Aurel (luxury watches, distributor Q&A): partner brief reads scarcity is a positioning tool, not a supply problem — we are choosing to allocate 12 watches per year to each authorised retailer because exclusivity at point of sale is as important as exclusivity at point of production. | Crestwood (premium spirits, on-trade allocation): trade partner briefing reads scarcity is a positioning tool, not a supply problem — we are choosing to limit on-trade listings to 40 venues in London because availability in the right venues creates desire in every venue that does not carry us. | Vellum (luxury stationery, wholesale): buyer presentation reads scarcity is a positioning tool, not a supply problem — we are choosing to produce one seasonal collection rather than a continuous range because the seasonality creates urgency and the sold-out signal reinforces desirability.",
      visualExamples: [
        { brand: 'Aurel', context: 'Luxury watch brand — distributor partner briefing', imageSlug: '/images/visual-examples/aurel-scarcity-12-watches-retailer.png', caption: 'Scarcity is a positioning tool, not a supply problem — we allocate 12 watches per year per authorised retailer because exclusivity at point of sale is as important as at point of production.', aspectRatio: '16/9' },
        { brand: 'Crestwood', context: 'Premium spirits — on-trade allocation strategy', imageSlug: '/images/visual-examples/crestwood-scarcity-40-venues.png', caption: 'Scarcity is a positioning tool — we limit on-trade listings to 40 London venues because availability in the right places creates desire everywhere that does not carry us.', aspectRatio: '4/5' },
      ],
      inContext: "An investor asked at the board meeting: if demand is this strong, why are we not increasing production? Marcus answered directly: Scarcity is a positioning tool, not a supply problem — we are choosing to constrain supply because the brand's value proposition depends on it. Riley: The moment we scale to meet all demand, we stop being what we are. We become a brand that is available, not a brand that is desired. Dana: And the revenue from additional units would not compensate for the brand equity we would destroy in the process. We are playing a long game here, and the long game requires restraint now.",
    },
    {
      phrase: 'WE ARE SELLING A FEELING, NOT A PRODUCT — THE CAMPAIGN SHOULD...',
      definition: "A phrase for articulating the emotional and experiential nature of luxury brand communication. Used in creative briefings, campaign reviews, and brand strategy discussions to redirect focus from product features to the emotional world the brand creates. Luxury marketing is about what owning or experiencing the product makes you feel.",
      example: "We are selling a feeling, not a product — the campaign should evoke the experience of ownership, not describe the specifications. Aurel's customers do not buy a watch because of its movement accuracy. They buy it because of what it means to own one.",
      imageSlug: '/images/we-are-selling-a-feeling.png',
      inAction: 'We are selling a feeling, not a product — the campaign should evoke the world the customer wants to live in, and trust that the brand connection will follow from the desire the world creates.',
      register: "Neutral — Aurel (luxury watches, creative brief): campaign brief reads we are selling a feeling, not a product — the campaign should communicate the relationship between time, legacy, and personal achievement without showing a single product specification or price point. | Vellum (luxury stationery, brand film): creative direction reads we are selling a feeling, not a product — the brand film should show the act of writing — the thought, the pause, the mark on the page — not the pen itself. The pen is incidental to the feeling. | Crestwood (premium spirits, advertising review): brand review reads we are selling a feeling, not a product — the campaign should communicate the occasion and the company, not the tasting notes or the production method.",
      visualExamples: [
        { brand: 'Aurel', context: 'Luxury watch brand — annual campaign creative brief', imageSlug: '/images/visual-examples/aurel-feeling-not-product-time-legacy.png', caption: 'We are selling a feeling, not a product — the campaign communicates the relationship between time, legacy, and personal achievement without showing a single specification or price point.', aspectRatio: '16/9' },
        { brand: 'Vellum', context: 'Luxury stationery — brand film creative direction', imageSlug: '/images/visual-examples/vellum-feeling-not-product-brand-film.png', caption: 'We are selling a feeling, not a product — the brand film shows the act of writing: the thought, the pause, the mark on the page. The pen is incidental to the feeling.', aspectRatio: '4/5' },
      ],
      inContext: "Dana reviewed the creative concepts with the team. Three concepts came back — one shows the product in detail, one shows a lifestyle world with the product visible, one shows the world only with the brand as a subtle end card. Marcus: We are selling a feeling, not a product — the campaign should take the third direction. Riley: The first option is a product ad, not a brand campaign. The second is closer. The third is what we briefed. Dana: Option three. The world, the feeling, the brand. In that order. The product is the proof, not the pitch.",
    },
    {
      phrase: 'THE HERITAGE STORY IS THE COMPETITIVE ADVANTAGE — NO ONE CAN...',
      definition: "A phrase for articulating why a brand's history and origins are its most defensible asset in a luxury market. Used in brand strategy, agency briefings, and internal discussions to explain why heritage must be at the centre of all communications — not as nostalgia, but as a genuine competitive barrier.",
      example: "The heritage story is the competitive advantage — no competitor can claim 1887. The craftsmanship narrative, the founding location, the archive photography — these are assets a newer brand cannot manufacture. The creative brief should put heritage at the centre, not in the footnotes.",
      imageSlug: '/images/the-heritage-story-is-the-competitive-advantage.png',
      inAction: 'The heritage story is the competitive advantage — no one can replicate 175 years of artisanship, and every new brand that enters this category actually makes our heritage more valuable, not less.',
      register: "Neutral — Aurel (luxury watches, competitor response strategy): brand strategy note reads the heritage story is the competitive advantage — no one can replicate the relationship between our founding family and the history of Swiss watchmaking, and that provenance is the reason our resale values are significantly higher than any competitor founded after 1980. | Crestwood (premium spirits, market entry review): brand positioning document reads the heritage story is the competitive advantage — no one can replicate the distillery's unbroken production record since 1887, and in a category defined by age and provenance, that record is the most powerful claim we can make. | Vellum (luxury stationery, international expansion): brand guidelines for new markets read the heritage story is the competitive advantage — no one can replicate the Royal Warrant or the connection to three centuries of correspondence from significant historical figures.",
      visualExamples: [
        { brand: 'Aurel', context: 'Luxury watch brand — competitor response and positioning review', imageSlug: '/images/visual-examples/aurel-heritage-swiss-watchmaking.png', caption: 'The heritage story is the competitive advantage — no one can replicate the founding family connection to Swiss watchmaking history, and our resale values reflect the provenance no newer brand possesses.', aspectRatio: '16/9' },
        { brand: 'Crestwood', context: 'Premium spirits — market entry brand positioning', imageSlug: '/images/visual-examples/crestwood-heritage-unbroken-production.png', caption: 'The heritage story is the competitive advantage — no one can replicate the unbroken production record since 1887, and in a category defined by age and provenance, that record is our most powerful claim.', aspectRatio: '4/5' },
      ],
      inContext: "Riley presented the competitor analysis. Three new luxury entrants in the category in the last 18 months. All well-funded, all beautifully designed. Marcus: And none of them have what we have. The heritage story is the competitive advantage — no one can replicate it, no budget can buy it, and no designer can manufacture it. Dana: Our response to new entrants is not to compete on aesthetics or marketing spend. It is to make the heritage story more central, more specific, and more vivid in everything we communicate. The newer the competition, the more valuable our age becomes.",
    },
    {
      phrase: 'ULTRA-PREMIUM REQUIRES RESTRAINT IN EVERY TOUCHPOINT — FROM...',
      definition: "A phrase for articulating the design and communication principle that ultra-premium brands must demonstrate excellence without excess — through understatement, precision, and restraint rather than loudness or ostentation. Used in brand audits, design reviews, and agency briefings to set the standard for all brand expressions.",
      example: "Ultra-premium requires restraint in every touchpoint — from the weight of the paper in the press kit to the silence in the retail environment. Excess signals insecurity; restraint signals confidence. The most expensive thing Aurel has ever done is what it chose not to put in the room.",
      imageSlug: '/images/ultra-premium-requires-restraint.png',
      inAction: 'Ultra-premium requires restraint in every touchpoint — from the invitation-only launch event to the handwritten thank-you note that accompanies each purchase, nothing should feel mass, rushed, or promotional.',
      register: "Neutral — Aurel (luxury watches, brand standards review): brand governance reads ultra-premium requires restraint in every touchpoint — from the in-store lighting temperature to the weight of the presentation box to the vocabulary used by every client advisor on the floor. | Vellum (luxury stationery, digital presence review): brand review reads ultra-premium requires restraint in every touchpoint — the website should not have a 'buy now' button, a countdown timer, or a free delivery offer: the customer at this price point is not price-sensitive and does not need urgency mechanics. | Crestwood (premium spirits, event strategy): hospitality brief reads ultra-premium requires restraint in every touchpoint — from the invitation format to the guest list to the service style: the event should feel private, considered, and effortless, not produced or promotional.",
      visualExamples: [
        { brand: 'Aurel', context: 'Luxury watch brand — brand standards and retail review', imageSlug: '/images/visual-examples/aurel-restraint-in-store-standards.png', caption: 'Ultra-premium requires restraint in every touchpoint — from the in-store lighting temperature to the presentation box weight to the vocabulary used by every client advisor on the floor.', aspectRatio: '16/9' },
        { brand: 'Vellum', context: 'Luxury stationery — digital presence and UX review', imageSlug: '/images/visual-examples/vellum-restraint-no-buy-now.png', caption: 'Ultra-premium requires restraint in every touchpoint — the website should have no "buy now" button, no countdown timer, and no free delivery offer. The customer is not price-sensitive and needs no urgency mechanics.', aspectRatio: '4/5' },
      ],
      inContext: "Riley conducted the brand audit across all digital touchpoints. Ultra-premium requires restraint in every touchpoint, she reported back. And right now, we are failing this test in three places. The email subject line uses the phrase 'last chance.' The product page has a 'you may also like' carousel that shows five other products. The checkout page has a free gift threshold indicator. Marcus: All three go. Today. Dana: The ultra-premium customer is not shopping for a deal. They are making a decision about taste. Every urgency mechanic we use tells them we do not understand who they are.",
    },
    {
      phrase: 'THIS COLLABORATION RISKS DILUTING THE LUXURY POSITIONING — UNLESS...',
      definition: "A phrase for raising the strategic risk of a brand partnership, collaboration, or product extension that might reduce a brand's perceived exclusivity or quality. Used in brand strategy reviews, partnership evaluations, and product development discussions to protect the brand's premium positioning.",
      example: "This collaboration risks diluting the luxury positioning unless the partner brand has equivalent or stronger desirability. Aurel has turned down three celebrity partnership proposals this year for exactly this reason. The association has to elevate, not explain.",
      imageSlug: '/images/this-collaboration-risks-diluting.png',
      inAction: 'This collaboration risks diluting the luxury positioning unless the partner brand has equivalent or higher prestige in their category — anything that feels like a downward move in status damages both the product and the perception.',
      register: "Neutral — Aurel (luxury watches, fashion brand collab): brand risk review reads this collaboration risks diluting the luxury positioning unless the fashion partner commits to a maximum production run of 250 pieces, a price point above our existing entry-level collection, and exclusive distribution through our boutiques only. | Vellum (luxury stationery, mass market retailer): partnership review reads this collaboration risks diluting the luxury positioning unless the product line is positioned as an entirely separate, clearly differentiated entry-level brand with no visual or naming connection to the core range. | Crestwood (premium spirits, celebrity partnership): brand strategy note reads this collaboration risks diluting the luxury positioning unless the celebrity's existing brand associations are rigorously assessed — alignment with the values of craftsmanship, restraint, and connoisseurship is non-negotiable.",
      visualExamples: [
        { brand: 'Aurel', context: 'Luxury watch brand — fashion brand collaboration risk review', imageSlug: '/images/visual-examples/aurel-collaboration-risk-250-pieces.png', caption: 'This collaboration risks diluting the luxury positioning unless the fashion partner commits to a maximum 250-piece run, a price above our entry level, and exclusive distribution through our boutiques only.', aspectRatio: '16/9' },
        { brand: 'Crestwood', context: 'Premium spirits — celebrity partnership brand assessment', imageSlug: '/images/visual-examples/crestwood-collaboration-celebrity-risk.png', caption: 'This collaboration risks diluting the luxury positioning unless the celebrity\'s brand associations are rigorously assessed — alignment with craftsmanship, restraint, and connoisseurship is non-negotiable.', aspectRatio: '4/5' },
      ],
      inContext: "Dana brought the collaboration proposal to the brand committee. The commercial opportunity is real — the partner's audience is large and their brand has strong cultural momentum. But this collaboration risks diluting the luxury positioning, she said, unless we can control four things: the creative direction, the production volume, the retail environment, and the price architecture. Riley: And if we cannot control those four things? Dana: We decline. The short-term revenue is not worth the long-term brand damage. Marcus: That is the right instinct. We have been built over 150 years. We cannot afford to compromise it for one season's opportunity.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We are repositioning one of our premium lines into the [[ultra-premium:the highest tier of a luxury market — rare, prestigious, and deliberately limited in availability]] segment. I want to go through what that means for the brand strategy. Dana, start with positioning.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Three pillars. First — [[exclusivity:the quality of being available only to a limited group, which creates desirability]] through reduced distribution and a maximum of 300 units per year. Second — [[heritage:the history and traditions of a brand that represent quality and expertise accumulated over generations]] — we need the founding story, the atelier, and the 175-year provenance in every piece of communication. Third — [[craftsmanship:the skill and care put into making something to an exceptionally high standard]] — we build the production story around the 40 hours per piece and the three artisans involved in each garment.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "What about the campaign brief? This tier needs different creative direction from the existing premium line.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We are selling a feeling, not a product — the campaign should create a world, not describe a garment. [[Aspirational:describes something people want because it represents a lifestyle or status they admire]] but not unattainable. Quiet confidence, not show. And ultra-premium requires restraint in every touchpoint — from the photography to the language to how the product is presented at retail.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "On retail — we are reducing stockists from 200 to 40. [[Scarcity:the quality of being rare or in limited supply — deliberately created to increase perceived value]] is a positioning tool for this tier. The brand should never discount. And the waitlist — we are managing it as a [[brand desirability:how strongly people feel drawn to a brand and aspire to own it]] signal, not a supply failure.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And the seeding strategy? Who gets access first?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "[[Connoisseur:a person with deep knowledge and refined taste, whose endorsement carries authority in a category]]s and collectors. No mass media at launch. We seed with the people whose taste the wider market follows. Their endorsement builds credibility that advertising cannot buy. The heritage story is the competitive advantage — no one can replicate 175 years of provenance, and every new entrant into this category makes our age more valuable.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "One final thing — the streetwear brand collaboration proposal. I want to flag it here: this collaboration risks diluting the luxury positioning unless we control production volume, creative direction, pricing, and distribution absolutely. If we cannot do that, we decline.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Agreed. The right collaboration elevates the brand. The wrong one takes years to recover from. We do not need the reach. We need the right associations.",
    },
  ],

  matchingExercise: [
    { word: 'aspirational', definition: 'describes something people want because it represents a lifestyle, a status, or a version of themselves they admire' },
    { word: 'exclusivity', definition: 'the quality of being available only to a limited group — by price, invitation, or quantity — which creates desirability' },
    { word: 'heritage', definition: 'the history, traditions, and origins of a brand — especially when that history represents quality and expertise that cannot be replicated' },
    { word: 'craftsmanship', definition: 'the skill and care put into making something by hand or to an exceptionally high standard by skilled artisans' },
    { word: 'ultra-premium', definition: 'the highest tier of a luxury market — rare, prestigious, and often limited in availability — positioned above standard luxury' },
    { word: 'scarcity', definition: 'the quality of being rare or in limited supply — deliberately created in luxury to increase perceived value and desire' },
    { word: 'brand desirability', definition: 'how strongly people feel drawn to a brand and aspire to own it — the emotional and status-driven pull that maintains premium pricing' },
    { word: 'connoisseur', definition: 'a person with deep knowledge and refined taste whose endorsement carries credibility and authority in a category' },
  ],

  fillBlankExercise: [
    { before: 'The brand should never discount — it signals to every full-price customer that the product is not worth what they paid, and that signal destroys', after: '.', answer: 'brand desirability' },
    { before: 'Scarcity is a positioning tool, not a supply problem — we are choosing to produce 300 units because the waitlist builds', after: 'and anticipation.', answer: 'desire' },
    { before: 'We are selling a feeling, not a product — the campaign should show the world the customer wants to live in, not the', answer: 'specifications', after: 'of the product itself.' },
    { before: 'The', after: 'story is the competitive advantage — 175 years of artisanship cannot be replicated by a brand founded last decade.', answer: 'heritage' },
    { before: 'Ultra-premium requires', after: 'in every touchpoint — no sale language, no urgency mechanics, no superlatives used carelessly.', answer: 'restraint' },
    { before: 'The collaboration risks diluting the luxury positioning unless we control production volume,', after: 'direction, and distribution absolutely.', answer: 'creative' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Marcus say is the consequence of reducing the number of retail stockists from 200 to 40?',
      options: ['It significantly reduces operating costs and increases the profit margin on each unit sold', 'It increases desirability among the customers who matter — exclusivity is the product', 'It forces the brand to invest more in digital channels to compensate for reduced physical presence'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say is the difference between heritage as nostalgia and heritage as a competitive advantage?',
      options: ['Nostalgia refers to old design, while competitive heritage refers to original recipes or manufacturing techniques', 'Heritage framed as the past is nostalgia; heritage framed as expertise accumulated over generations is a present advantage', 'Nostalgia is used in advertising while competitive heritage is reserved for investor and trade communications'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say is the function of a waitlist in luxury brand strategy?',
      options: ['A logistical tool for managing high demand when production cannot be scaled quickly enough to meet orders', 'A marketing asset that signals demand exceeds supply and creates a story of achievement for the customer who acquires the product', 'A customer service failure that needs to be resolved by increasing production capacity as soon as possible'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say about the risk of the streetwear brand collaboration?',
      options: ['The collaboration will cannibalise sales from the existing luxury line by offering a lower-priced alternative', 'If existing customers feel the brand has become accessible to an unexpected audience, the brand loses something very hard to recover', 'The streetwear brand\'s production standards are too low to meet the quality requirements of a luxury collaboration'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Think about a luxury or premium brand you know — a fashion house, a car brand, a watch, a hotel, or a restaurant. What makes it feel luxurious? Is it the price, the quality, the story, the people who use it, or something else?",
      "Have you ever paid significantly more for something because of its brand or its story rather than its function? What made you decide it was worth it — and did you feel it was the right decision afterwards?",
      "Some people argue that luxury brands are simply selling aspiration and status, not genuine quality. Do you agree? Is there a meaningful difference between a product that is genuinely exceptional and one that is simply expensive?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The brand _____ discount publicly — doing so would signal that the full price was never justified.',
        options: ['should never', 'should not ever', 'never should'],
        correctIndex: 0,
        explanation: "'Should never' is the correct word order for expressing a strong prohibition or principle: 'should never' + base verb. In standard English, the modal verb ('should') precedes the negative ('never'), which precedes the main verb ('discount'): 'should never discount'. 'Should not ever' is grammatically possible but extremely awkward — 'not ever' is emphatic but unusual in formal written English. 'Never should' would require inversion for emphasis: 'never should it discount' — a formal literary inversion that is unusual and inappropriate here. 'Should never' is the standard form for expressing a principled prohibition: 'we should never compromise on quality', 'the brand should never discount'.",
      },
      {
        sentence: 'Reducing production to 300 units _____ demand without increasing supply, which is what creates the waitlist.',
        options: ['exceeds', 'exceed', 'is exceeding'],
        correctIndex: 0,
        explanation: "The subject is 'reducing production to 300 units' — a gerund phrase, which is grammatically singular. A gerund phrase acting as a subject takes a singular verb: 'reducing... exceeds', not 'reduce' (which would be wrong) and not 'exceed' (plural form). This is similar to 'swimming is good for you' or 'running a marathon requires training' — the gerund phrase is the subject, and singular agreement applies. 'Is exceeding' (present continuous) would suggest a temporary or ongoing process of exceeding demand, which is not the intended meaning — the sentence is describing a general principle or fact.",
      },
      {
        sentence: 'The heritage story _____ never been replicated by any competitor founded after 1980.',
        options: ['has', 'have', 'had'],
        correctIndex: 0,
        explanation: "'Has' is the correct auxiliary for the present perfect with a singular subject: 'the heritage story has never been replicated'. The subject is 'the heritage story' — singular — so the auxiliary must be 'has'. 'Have' is the plural form: 'these stories have never been replicated'. 'Had' is the past perfect auxiliary — 'had never been replicated' would be used to describe a situation in the past: 'by 1990, the heritage story had never been replicated.' The sentence is describing a current state (nothing has replicated it yet, as of now), so the present perfect with 'has' is correct.",
      },
      {
        sentence: 'Ultra-premium brands use restraint _____ every touchpoint — from packaging weight to the vocabulary of the sales team.',
        options: ['across', 'in', 'through'],
        correctIndex: 0,
        explanation: "'Across' is the most natural preposition for describing consistency or application throughout a set of items or a range of contexts: 'across every touchpoint', 'across all channels', 'across the portfolio'. It implies coverage of the full range. 'In' is also grammatically correct — 'restraint in every touchpoint' — and is used in the phrase itself ('ultra-premium requires restraint in every touchpoint'). Both 'across' and 'in' are acceptable, but 'across' is slightly more natural when describing consistency throughout a collection of things. 'Through' typically describes a process or a medium — 'communicated through every touchpoint' — not a quality that is applied to a set of things.",
      },
      {
        sentence: 'The collaboration _____ diluting the brand unless the creative direction, production volume, and distribution are all controlled precisely.',
        options: ['risks', 'risk', 'is risking'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('risks') agrees with the singular subject 'the collaboration'. The phrase 'risks doing something' means there is a danger that something bad will happen — it is a standard construction: 'the decision risks damaging the brand', 'the collaboration risks diluting the positioning'. 'Risk' would be the plural form: 'the collaborations risk...' 'Is risking' (present continuous) would suggest the collaboration is currently, actively in the process of creating risk — which implies it is already happening. Simple present ('risks') describes the potential danger as a general truth or principle, which is the correct meaning here.",
      },
      {
        sentence: 'Craftsmanship is experienced _____ it is understood — the customer feels the quality before they can explain it.',
        options: ['before', 'after', 'unless'],
        correctIndex: 0,
        explanation: "'Before' is correct here — the sequence is: first the customer experiences the craftsmanship (through the product), then they understand it (through the story). 'Craftsmanship is experienced before it is understood' describes this temporal sequence accurately. 'After' would reverse the sequence: 'craftsmanship is experienced after it is understood' — which would mean you have to understand it first before you can experience it, which is the opposite of the intended meaning. 'Unless' introduces a conditional exception — 'craftsmanship is experienced unless it is understood' — which does not make logical sense in this context.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'We have excess inventory from last season. Can we run a sale to clear it quickly?'",
          options: [
            "Yes — a private sale for existing clients is the quickest way to move inventory while maintaining relationships.",
            "A public sale is not an option for a brand at this positioning — the damage to brand desirability would outlast the inventory problem significantly. There are three alternatives that move excess stock without public discounting. First — a private event for existing clients by invitation only, framed as early access rather than a sale. The price might be reduced modestly, but it is not advertised publicly. Second — a charity auction or donation, which generates positive brand PR and removes the stock at full or close-to-full accounting value. Third — a reinterpretation of the pieces — reworked into a special edition or a gift-with-purchase for the next season's launch. None of these create the signal that the product was overpriced or that demand was misjudged.",
            "A sale with a 20% reduction is acceptable as long as it is communicated as a 'special occasion' rather than a price reduction.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it provides three specific, practical alternatives that move inventory without public discounting, and explains why the framing of each matters. Option A is partially right — a private client event is one option — but too brief and does not explain the rationale. Option C is incorrect — a 20% reduction with alternative framing is still a discount and still signals price flexibility, which damages luxury positioning regardless of how it is described.",
        },
        {
          customerLine: "'Should we increase production to meet the demand we are seeing for this product?'",
          options: [
            "Yes — if demand is there, you should always scale production to capture the revenue opportunity.",
            "Increasing production to meet all demand would be a significant strategic mistake for a brand at this tier. Scarcity is a positioning tool — the waitlist is not a failure of supply management, it is proof that demand exceeds supply, which is the most desirable position a luxury brand can be in. Scaling production to eliminate the waitlist would remove the desirability signal the waitlist creates, reduce the sense of achievement customers feel when they acquire the product, and expand distribution in ways that reduce exclusivity. The revenue from additional units would not compensate for the brand equity destroyed in the process. The right response to excess demand at a luxury price point is to raise the price, not to increase the supply.",
            "Increase production by 30% — enough to reduce the waitlist without eliminating it entirely, so you maintain scarcity while capturing more revenue.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it explains the strategic principle (scarcity is designed, not accidental), articulates the specific brand equity consequences of scaling, and offers the correct strategic response (raise price, not supply). Option A is wrong for a luxury brand — revenue maximisation through volume is the opposite of luxury strategy. Option C is a compromise that sounds pragmatic but is wrong in principle — it still signals that scarcity is a logistical problem rather than a strategic choice.",
        },
        {
          customerLine: "'A mass market fashion brand has approached us about a collaboration. Should we consider it?'",
          options: [
            "No — collaborations with mass market brands always damage luxury positioning and should be refused immediately.",
            "The question is not whether to collaborate but what the collaboration would do for the brand. A collaboration with a mass market brand is high risk for a luxury house — the risk is that existing customers feel the brand has become accessible to an audience they did not expect to share it with, which reduces the status value of owning the brand. Whether to proceed depends on four factors: whether the creative direction can remain entirely in our control, whether the product can be priced and distributed at our level not theirs, whether the production volume can be capped at a genuinely limited number, and whether the collaboration elevates both brands or primarily benefits the mass market partner. If all four can be controlled, a carefully executed collaboration can introduce the brand to aspirational buyers who will trade up over time. If any of the four cannot be controlled, the answer is no.",
            "Yes — a high-profile collaboration with a widely recognised brand increases brand awareness significantly and is worth the reputational risk.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it gives a nuanced, strategic answer that explains the specific risks, identifies the four control factors that determine whether the collaboration is viable, and articulates the potential upside if all conditions are met. Option A is too absolute — some collaborations with less prestigious partners are well-executed and brand-enhancing. Option C is wrong in its logic — brand awareness is not the goal for an ultra-premium brand, and 'worth the reputational risk' is never an appropriate framing for a luxury brand decision.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the luxury brand strategy meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "The heritage story is the most valuable asset we have — no competitor can replicate 175 years of provenance." },
        { speaker: 'Riley', text: "Each of our retail partners have been briefed on the new distribution strategy — 40 stockists globally, down from 200." },
        { speaker: 'Dana', text: "The brand should never discount publicly, because it signals that the product is not worth the price customers have paid." },
        { speaker: 'Marcus', text: "Ultra-premium requires restraint in every touchpoint — from the language in the campaign to how the product is packaged and presented." },
        { speaker: 'Riley', text: "The collaboration with the fashion brand risk diluting our positioning unless we control production, pricing, and creative direction absolutely." },
        { speaker: 'Dana', text: "Scarcity is a positioning tool — the waitlist is proof that demand exceed supply, which is the most desirable position for a luxury brand." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Each of our retail partners have been briefed',
          correction: 'Each of our retail partners has been briefed',
          explanation: "'Each' is always grammatically singular — it takes 'has', not 'have'. Even though 'partners' (the noun in the prepositional phrase) is plural, the grammatical subject is 'each' — and 'each' is always singular. 'Each of the partners has been briefed' (singular) vs 'All of the partners have been briefed' (plural). Memorise: 'each', 'every', 'either', 'neither', 'one', 'none' are always singular.",
        },
        {
          lineIndex: 4,
          incorrectText: 'The collaboration with the fashion brand risk diluting',
          correction: 'The collaboration with the fashion brand risks diluting',
          explanation: "The subject is 'the collaboration' — singular. The verb must be third person singular present: 'risks', not 'risk'. The prepositional phrase 'with the fashion brand' is a modifier and does not affect subject-verb agreement. 'Risk' is the base form or the plural present — correct if the subject were plural: 'these collaborations risk...' For the singular 'the collaboration', the correct form is 'risks'. The construction 'risks + gerund' is standard: 'risks diluting', 'risks damaging', 'risks undermining'.",
        },
        {
          lineIndex: 5,
          incorrectText: 'that demand exceed supply',
          correction: 'that demand exceeds supply',
          explanation: "'Demand' is a singular uncountable noun — it takes a singular verb: 'demand exceeds', not 'demand exceed'. 'Supply' and 'demand' are both uncountable in economics usage — they are always singular. 'Demand exceeds supply' is the correct form. 'Exceed' (without -s) is the base form or the plural present: 'these factors exceed expectations' — but with the singular noun 'demand', the third person singular 'exceeds' is required.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Write the opening paragraph of a brand strategy memo explaining why the brand will not participate in the annual retail sale event.",
          salespersonStart: "After careful consideration, the brand will not be participating in the annual sale event —",
          suggestedCompletion: "and I want to explain why clearly, because I know this is a significant commercial decision that affects all of our retail partners. Our brand is built on the principle that every purchase is an investment in something exceptional — in quality that will last, in craftsmanship that is genuinely rare, and in a heritage that has been consistent for 175 years. When we participate in a sale event, we do not just reduce our prices — we reduce what our product means to every customer who bought it at full price. That signal is extremely difficult to reverse. We have identified three alternatives for managing the seasonal inventory position that do not require a public price reduction, and I would like to discuss those with each of you individually.",
        },
        {
          customerLine: "Explain the difference between a premium brand and a luxury brand to a client who is considering moving their brand into the luxury segment.",
          salespersonStart: "A premium brand competes on quality and value relative to the market — it says 'we are the best version of this product.' A luxury brand —",
          suggestedCompletion: "operates in a completely different register. It does not compete on quality alone — it competes on meaning. A luxury brand is not the best version of a product. It is the version of a product that represents something beyond the product itself — a heritage, an identity, a status, a feeling. The price is not the highest because of the cost of production — it is the highest because the product's meaning commands it. And meaning is maintained through scarcity, through restraint, through distribution control, and through the consistency of every brand experience across every touchpoint. Moving a premium brand into the luxury segment is not a pricing decision. It is a cultural and strategic transformation that takes years and requires discipline above everything else.",
        },
        {
          customerLine: "A junior team member asks: why does luxury marketing almost never talk about the product directly?",
          salespersonStart: "Because the product is not what is being sold —",
          suggestedCompletion: "or rather, the product is the evidence, not the argument. What a luxury brand sells is a feeling, an identity, a world that the customer wants to belong to. The product is the mechanism through which the customer enters that world. If you lead with the product — the specifications, the materials, the technical detail — you are having a different conversation. You are saying 'here is what this does.' Luxury says 'here is who you become.' The customer does not buy a watch to tell the time. They buy it to own something that represents precision, legacy, and a particular relationship with achievement. The moment you start explaining the technical features, you have turned a luxury brand conversation into a product review. The brand's job is to create desire, not to satisfy it with information.",
        },
      ],
    },
  },
};
