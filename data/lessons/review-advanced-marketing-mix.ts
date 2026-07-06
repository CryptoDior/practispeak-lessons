import { Lesson } from '@/types/lesson';

export const reviewAdvancedMarketingMix: Lesson = {
  slug: 'review-advanced-marketing-mix',
  title: 'Review: Advanced Marketing Mix',
  subtitle: 'Consolidating B2 vocabulary across digital strategy, data analytics, brand architecture, content, and emerging channels',
  level: 'B1-B2',
  description: "This lesson brings together the most important vocabulary and phrases from the advanced marketing series — from consumer psychology and integrated communications through to data analytics, programmatic advertising, customer retention, and innovation. The review is designed not just to test recall but to help you use the vocabulary flexibly across different contexts, arguments, and professional scenarios. Strong B2 marketers do not just know the terms — they use them to build arguments, challenge assumptions, and lead strategic conversations.",
  heroImage: '/images/review-advanced-marketing-mix-hero.png',

  vocabulary: [
    {
      word: 'FULL-FUNNEL',
      partOfSpeech: 'adjective',
      definition: "A marketing approach that addresses all stages of the customer journey — from first awareness through consideration, conversion, and post-purchase retention. A full-funnel strategy ensures that no stage of the journey is underserved and that each stage is measurably connected to the next.",
      example: "Riley presented the integrated strategy: Our previous approach was bottom-of-funnel only — all spend on performance marketing at the conversion stage. The new full-funnel strategy adds brand-building at the awareness stage and a retention programme post-purchase. Marcus asked: What is the commercial rationale for the awareness investment given it is harder to measure directly? Riley replied: Without top-of-funnel brand awareness, the pool of people who recognise and trust us at the conversion stage shrinks over time. Performance marketing harvests demand that brand marketing creates. If we only harvest and never create, we are depleting a finite resource.",
      imageSlug: '/images/full-funnel.png',
    },
    {
      word: 'BRAND EQUITY',
      partOfSpeech: 'noun',
      definition: "The commercial value of a brand — the premium that consumers are willing to pay, the trust they extend, and the loyalty they show because of the brand's reputation, associations, and history. Brand equity is built slowly through consistent quality and communication, and it can be damaged quickly by a single crisis or a series of poor decisions.",
      example: "Dana explained: Brand equity is the reason people pay £4 for a coffee at one brand and £1.80 at another for a product that costs almost the same to make. Marcus asked: Can you put a number on our brand equity? Dana replied: Not precisely — but we can proxy it. Our price premium over the category average is 23%. Our NPS is 14 points above the sector average. Our prompted awareness is 84%. And our repeat purchase rate is 61%. Together those metrics give a reasonable picture of the equity we have built. Riley added: And brand equity is also what protects us in a crisis — a brand with deep equity survives a bad month. A brand with shallow equity does not.",
      imageSlug: '/images/review-advanced-marketing-mix-brand-equity.png',
    },
    {
      word: 'ATTRIBUTION',
      partOfSpeech: 'noun',
      definition: "The process of identifying which marketing activities or channels are responsible for a conversion or sale. Attribution models attempt to give credit to the right touchpoint in a customer journey that often includes multiple interactions across different channels. Attribution is one of the most contested and complex challenges in modern marketing.",
      example: "Marcus raised the attribution challenge: We have a customer who saw a social post, clicked a Google ad two days later, read a case study on our blog, then converted after an email from a sales rep. Which of those four touchpoints gets credit for the conversion? Dana replied: That depends on the attribution model. Last-click gives all credit to the email. First-click gives it to the social post. Linear splits it equally across all four. Data-driven attribution uses machine learning to weight each based on its actual contribution. Riley: Data-driven is theoretically the most accurate — but it requires significant data volume to work. Most businesses are making attribution decisions with insufficient data.",
      imageSlug: '/images/review-advanced-marketing-mix-attribution.png',
    },
    {
      word: 'SEGMENTATION',
      partOfSpeech: 'noun',
      definition: "Dividing a broad market into smaller groups of consumers who share similar characteristics — needs, behaviours, demographics, or values — so that marketing can be tailored to each group rather than broadcast to all. Good segmentation makes every marketing investment more efficient.",
      example: "Riley presented the segmentation framework: We have divided our addressable market into five distinct segments — each with a different primary need, different media habit, and different price sensitivity. Dana asked: Which segment should we prioritise for the launch? Riley replied: The 'progressive professional' segment — aged 28 to 42, high income, digital-first, motivated by quality and sustainability. They represent 22% of the market by volume but 41% of the revenue opportunity and they are most receptive to the values our brand stands for. Marcus: Which means the launch creative, the channel mix, and the messaging should all be built around that one segment first.",
      imageSlug: '/images/review-advanced-marketing-mix-segmentation.png',
    },
    {
      word: 'OMNICHANNEL',
      partOfSpeech: 'adjective',
      definition: "A marketing and retail approach that provides a seamless, consistent customer experience across all channels — online, in-store, mobile, social, and customer service — so that switching between them feels effortless. Omnichannel is different from multichannel — multichannel means being present in many channels; omnichannel means integrating them so the experience is unified.",
      example: "Dana explained: Our current experience is multichannel — we are present in seven channels but they are not connected. A customer who browses online cannot see in-store stock. A customer who contacts support via email gets a different answer than one who uses the app. Marcus replied: Which is why moving to an omnichannel model requires a back-end data integration, not just a front-end design change. Riley added: The commercial case is clear — omnichannel customers spend 15 to 30% more than single-channel customers in our category, and their retention rate is significantly higher. The investment is in the infrastructure, not in the idea.",
      imageSlug: '/images/review-advanced-marketing-mix-omnichannel.png',
    },
    {
      word: 'CONTENT STRATEGY',
      partOfSpeech: 'noun',
      definition: "A plan for what content to create, for which audience, on which platform, at what frequency, and with what purpose. A content strategy connects the content being produced to the commercial goals of the business — ensuring that every piece of content exists for a reason that can be measured.",
      example: "Marcus presented: Our content strategy for Q3 is built around three pillars — educate, inspire, and convert. Educate content builds authority and trust at the top of the funnel. Inspire content drives sharing and emotional connection at mid-funnel. Convert content — case studies, comparison pages, and demo invitations — drives action at the bottom. Riley asked: How do we measure each pillar? Marcus: Educate is measured by organic search growth and time on page. Inspire by shares and engagement rate. Convert by click-through to product pages and trial sign-ups. Dana: And the three pillars are balanced — too much convert content signals distrust. Too much educate with no convert content is brand with no commercial purpose.",
      imageSlug: '/images/content-strategy.png',
    },
    {
      word: 'CONVERSION OPTIMISATION',
      partOfSpeech: 'noun',
      definition: "The process of improving the percentage of visitors who take a desired action — such as signing up, purchasing, or booking a call. Also known as CRO (Conversion Rate Optimisation). Conversion optimisation combines data analysis, user experience design, and A/B testing to reduce friction and increase the likelihood of action.",
      example: "Riley reported: We have run 14 conversion optimisation experiments on the product page over the last quarter. The three changes with the biggest positive impact were: reducing the form from eight fields to three, adding a customer testimonial above the CTA, and changing the CTA copy from 'Submit' to 'Start your free trial'. Marcus asked: What was the cumulative impact? Riley replied: Conversion rate went from 2.1% to 4.7% — which at our current traffic volumes represents an additional 85 trial sign-ups per month at zero additional acquisition cost. Dana: Conversion optimisation is the highest-ROI marketing investment available to a business with an existing audience. You are extracting more value from what you already have.",
      imageSlug: '/images/conversion-optimisation.png',
    },
    {
      word: 'GO-TO-MARKET',
      partOfSpeech: 'adjective',
      definition: "Relating to the strategy and plan for launching a product or entering a new market — including target audience, positioning, pricing, channels, and the sequence of activities needed to reach the first customer. A go-to-market (GTM) plan is the bridge between product development and commercial success.",
      example: "Dana explained: The go-to-market plan covers five areas. One — target audience: the specific segment we are entering with, defined by role, industry, and need. Two — positioning: how we are different from existing solutions in this market and why that matters to this audience. Three — channels: which routes to market we will use and in what priority order. Four — pricing: the model, the entry price, and the upsell path. Five — launch sequence: the events, content, and outreach activities in the first 90 days. Marcus: Any go-to-market plan without a clear launch sequence is a strategy without execution. Both are required.",
      imageSlug: '/images/go-to-market.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'ACROSS THE FULL FUNNEL, OUR STRATEGY IS...',
      definition: "A phrase for presenting a marketing strategy that addresses every stage of the customer journey — from awareness through to retention — in a single, connected narrative. Used in strategy presentations, planning documents, and commercial reviews to show that no stage of the customer journey has been ignored.",
      example: "Marcus presented: Across the full funnel, our strategy is built on four connected stages. At awareness — brand and social content that introduces us to a new audience of progressive professionals. At consideration — thought leadership, comparison content, and peer review seeding that builds credibility. At conversion — personalised email sequences, chatbot qualification, and a streamlined trial flow. At retention — a loyalty programme, a proactive check-in schedule, and a win-back campaign for churned customers. Dana asked: What is the investment split? Marcus: 30% awareness, 25% consideration, 30% conversion, 15% retention — shifting over time as we build the brand and improve the retention infrastructure.",
      imageSlug: '/images/across-the-full-funnel.png',
      inAction: 'Across the full funnel, our strategy is weighted towards the bottom right now — which is efficient in the short term but will limit growth if we do not invest in awareness over the next 12 months.',
      register: "Neutral — Flux (SaaS platform, annual planning): strategy document reads across the full funnel, our strategy is to build category authority at the top, drive trial at the conversion stage, and protect LTV through a structured onboarding and retention programme at the bottom. | Halo (DTC beauty, board presentation): board deck reads across the full funnel, our strategy is shifting from a pure performance marketing model to a balanced brand and performance approach — with 40% of budget allocated to brand building for the first time. | Kova (fintech, market entry): go-to-market plan reads across the full funnel, our strategy is community-first — building credibility through peer referral and thought leadership before we invest in paid acquisition.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — annual commercial planning document', imageSlug: '/images/visual-examples/flux-full-funnel-strategy.png', caption: 'Across the full funnel, the strategy builds category authority at the top, drives trial at conversion, and protects LTV through onboarding and retention at the bottom.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'DTC beauty — board strategy presentation', imageSlug: '/images/visual-examples/halo-full-funnel-brand.png', caption: 'Across the full funnel, the strategy shifts from pure performance to a balanced model — 40% allocated to brand building for the first time.', aspectRatio: '16/9' },
      ],
      inContext: "Riley walked the board through the integrated strategy. Across the full funnel, our strategy is designed to solve a different problem at each stage, she said. The awareness problem — not enough people know we exist. The consideration problem — people who know us are not convinced we are the right choice. The conversion problem — people who are convinced are hitting friction at checkout. The retention problem — people who buy once are not buying again. Marcus: And the budget is allocated to the stage where the problem is largest, not the stage that is easiest to measure.",
    },
    {
      phrase: 'THE DATA SHOWS THAT OUR HIGHEST-VALUE CUSTOMERS ARE...',
      definition: "A phrase for introducing an evidence-based insight about which customer segment or behaviour generates the most long-term commercial value. Used in commercial reviews, retention strategy discussions, and investment prioritisation meetings to ensure resources are allocated to the right audience.",
      example: "Dana presented: The data shows that our highest-value customers are those acquired through peer referral — not paid search or social advertising. Their average lifetime value is £8,400 — 2.6 times the LTV of paid acquisition customers. Their churn rate at 12 months is 11% versus 38% for the paid acquisition cohort. And they are 4 times more likely to refer further customers themselves. Marcus replied: Which is the single most important finding from this analysis — because it tells us that the referral channel is not just our most efficient acquisition source, it is our best source for the customers who build the business. Riley: Which should shift a significant portion of our acquisition budget from paid channels to referral programme development.",
      imageSlug: '/images/the-data-shows-highest-value-customers.png',
      inAction: 'The data shows that our highest-value customers are those who completed the full onboarding programme — which is the strongest argument for investing in onboarding quality rather than acquisition volume.',
      register: "Neutral — Ember (subscription service, commercial review): monthly review reads the data shows that our highest-value customers are those who subscribe to the annual plan in month one — their LTV is 3x the monthly subscriber, and their referral rate is twice as high. | Velo (B2B fleet SaaS, customer analysis): QBR reads the data shows that our highest-value customers are fleet operators with 50 to 200 vehicles — the sweet spot between sufficient scale to justify the software and sufficient complexity to need it. | Bloom (DTC wellness, growth review): board update reads the data shows that our highest-value customers are those who engage with the educational content before their first purchase — suggesting the content strategy is creating better customers, not just more customers.",
      visualExamples: [
        { brand: 'Ember', context: 'Subscription service — monthly commercial review', imageSlug: '/images/visual-examples/ember-highest-value-annual.png', caption: 'The data shows that our highest-value customers are those who subscribe annually in month one — LTV is 3x the monthly subscriber, referral rate twice as high.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — growth and content strategy review', imageSlug: '/images/visual-examples/bloom-highest-value-content.png', caption: 'The data shows that highest-value customers engage with educational content before their first purchase — the content strategy is creating better customers, not just more.', aspectRatio: '4/5' },
      ],
      inContext: "Dana had the cohort analysis on screen. The data shows that our highest-value customers are those who came through word of mouth — not from any paid channel, she said. Marcus: And yet 72% of our acquisition budget is in paid channels. Riley: Which is the mismatch we need to address. The budget allocation reflects where we spend, not where the value comes from. If we rebalanced even 20% of paid spend into referral and community investment, the LTV impact could be significant.",
    },
    {
      phrase: 'FROM A BRAND ARCHITECTURE PERSPECTIVE, THIS MEANS...',
      definition: "A phrase for drawing out the specific implications of a business decision for the structure of the brand — how products, sub-brands, and the parent brand relate to each other. Used when a product launch, acquisition, or market entry requires a decision about whether to extend an existing brand or create a new one.",
      example: "Riley explained: We are launching a professional services offering alongside our software product. From a brand architecture perspective, this means we need to decide whether to brand it as a product extension — Flux Pro Services — or as a separate brand with its own identity. Marcus asked: What are the considerations? Riley replied: A product extension benefits from the existing brand recognition and trust. But it also inherits the brand's current associations — which are strongly technology-focused. A professional services brand needs to signal expertise and people, not just technology. Dana added: The risk of a product extension is that we dilute the core brand or create a mismatch between the existing brand promise and the new service's delivery model.",
      imageSlug: '/images/from-a-brand-architecture-perspective.png',
      inAction: 'From a brand architecture perspective, this means the new product cannot sit under the parent brand without creating customer confusion — we need either a clear sub-brand or an endorsed brand structure.',
      register: "Neutral — Flux (SaaS, portfolio expansion): brand strategy reads from a brand architecture perspective, this means the enterprise product requires an endorsed brand structure — Flux Enterprise, powered by Flux — to signal both the scale of the offering and the trust of the parent. | Halo (DTC beauty, international expansion): international strategy reads from a brand architecture perspective, this means the new market launch requires a local brand name — the existing name does not translate culturally and a master brand strategy would create confusion. | Kova (fintech, product expansion): board strategy reads from a brand architecture perspective, this means the lending product should be a separate brand — combining a payments app with lending under the same brand creates a risk perception problem with the core audience.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — portfolio brand strategy review', imageSlug: '/images/visual-examples/flux-brand-architecture-enterprise.png', caption: 'From a brand architecture perspective, this means an endorsed brand structure — Flux Enterprise, powered by Flux — signalling scale while transferring parent brand trust.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — product expansion board strategy', imageSlug: '/images/visual-examples/kova-brand-architecture-lending.png', caption: 'From a brand architecture perspective, the lending product should be a separate brand — combining payments and lending under one brand creates a risk perception problem.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus put the portfolio question to the team. We are being asked whether the new product should carry the main brand or operate independently. From a brand architecture perspective, this means we need to define the relationship clearly before we name anything, Riley said. Dana: Because naming is the output of the architecture decision — not the input. Once we have decided whether this is an extension, a sub-brand, or an independent brand, the name follows from that decision. Marcus: And we need to decide based on the target audience and the brand's current associations — not based on what is simplest to communicate.",
    },
    {
      phrase: 'THE CHANNEL MIX FOR THIS CAMPAIGN SHOULD REFLECT...',
      definition: "A phrase for justifying the selection of marketing channels based on specific strategic criteria — the target audience's media habits, the stage of the funnel, the type of message, or the commercial goal. Used in campaign planning meetings and media briefings to ensure channel selection is driven by data and strategy rather than habit.",
      example: "Dana presented: The channel mix for this campaign should reflect three things. First — where our target audience actually spends their time: primarily on LinkedIn for professional content, on YouTube for long-form education, and on email for product updates. Second — what stage of the funnel we are targeting: this is a mid-funnel consideration campaign, so we need channels that allow depth — not awareness formats that are designed for reach. Third — the type of content being used: the case studies and comparison guides we are leading with work best in channels where the audience is in a reading or research mindset.",
      imageSlug: '/images/the-channel-mix-should-reflect.png',
      inAction: 'The channel mix for this campaign should reflect the audience, not the budget — we should go deep in two channels rather than shallow in seven.',
      register: "Neutral — Forge (B2B HR, product launch): campaign brief reads the channel mix for this campaign should reflect the enterprise buying journey — LinkedIn for awareness and thought leadership, email for nurturing, and a dedicated landing page for conversion. | Kora (DTC subscription, new product): media plan reads the channel mix for this campaign should reflect the mobile-first behaviour of the target audience — all channels prioritised by mobile performance, with Instagram Reels and TikTok leading the awareness stage. | Beacon (healthcare, seasonal campaign): campaign strategy reads the channel mix for this campaign should reflect the high-trust content environment the audience expects — GP-endorsed publications, podcast advertising, and email over social media.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — product launch campaign brief', imageSlug: '/images/visual-examples/forge-channel-mix-enterprise.png', caption: 'The channel mix for this campaign should reflect the enterprise buying journey — LinkedIn for thought leadership, email for nurturing, dedicated landing page for conversion.', aspectRatio: '16/9' },
        { brand: 'Kora', context: 'DTC subscription — new product media plan', imageSlug: '/images/visual-examples/kora-channel-mix-mobile.png', caption: 'The channel mix should reflect the mobile-first audience — Instagram Reels and TikTok lead awareness, with all channels prioritised by mobile performance.', aspectRatio: '4/5' },
      ],
      inContext: "Riley reviewed the proposed media plan. The channel mix for this campaign should reflect the audience behaviour, not the channel mix from the last campaign, she said. Dana: The last campaign was B2B acquisition. This campaign is DTC retention. Different audience, different funnel stage, different message — which should mean a different channel selection. Marcus: What does the audience data tell us? Riley: They are primarily on email and Instagram. They respond to personal messages and community content. They are not on LinkedIn and they do not engage with generic display advertising. The channel mix should follow that.",
    },
    {
      phrase: 'TO MAKE THE BUSINESS CASE FOR THIS INVESTMENT, WE NEED...',
      definition: "A phrase for identifying the specific evidence, data, or framework needed to justify a marketing investment to a finance team, a board, or a senior stakeholder. Used when proposing a new initiative or defending an existing budget against cuts.",
      example: "Marcus said: To make the business case for this investment in brand marketing, we need three things. First — a clear articulation of what brand equity does for commercial performance: the price premium it enables, the churn reduction it drives, and the recruitment advantage it creates. Second — a proxy measurement framework, since brand ROI is not as directly traceable as performance marketing. And third — a comparison with the alternative: what happens to performance marketing efficiency over time if we do not invest in brand awareness? Dana added: The last point is often the most persuasive with a CFO — brand investment is often best justified not as 'this will return X' but as 'without this, our current return on performance marketing will decline as the audience pool shrinks'.",
      imageSlug: '/images/to-make-the-business-case.png',
      inAction: 'To make the business case for this investment, we need the LTV data by acquisition channel and the cost-per-acquisition for each — because the argument is that referral LTV makes it worth investing more in the referral programme.',
      register: "Neutral — Halo (DTC beauty, brand investment proposal): board preparation reads to make the business case for this investment, we need the price premium data versus category average — because that premium is the quantified return on brand equity. | Ember (subscription, loyalty programme): commercial planning reads to make the business case for this investment, we need the lifetime value comparison between loyalty programme members and non-members — if LTV is 40% higher for members, the investment is straightforward. | Flux (SaaS, AI tooling): marketing budget review reads to make the business case for this investment, we need the hours-saved calculation and the revenue impact of the team's freed capacity — because the ROI is not direct conversion, it is strategic capacity.",
      visualExamples: [
        { brand: 'Halo', context: 'DTC beauty — brand investment board proposal', imageSlug: '/images/visual-examples/halo-business-case-premium.png', caption: 'To make the business case for this investment, we need price premium data vs category average — the premium is the quantified return on brand equity.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Subscription service — loyalty programme commercial planning', imageSlug: '/images/visual-examples/ember-business-case-ltv.png', caption: 'To make the business case for this investment, we need the LTV comparison between loyalty members and non-members — if LTV is 40% higher, the investment is straightforward.', aspectRatio: '4/5' },
      ],
      inContext: "Dana was preparing for the budget review. To make the business case for this investment, we need more than a good idea and a theoretical ROI, she said. The finance team will ask for evidence, benchmarks, and a risk assessment. Riley: Which is why we have the pilot data from the Q2 test. Marcus: Pilot data is the strongest business case available. Theoretical projections are what you use before you have run the experiment. We have run the experiment. Lead with the results.",
    },
    {
      phrase: 'IN AN INTEGRATED CAMPAIGN, EVERY CHANNEL SHOULD...',
      definition: "A phrase for explaining the standards and principles that apply to all channels in an integrated marketing communications (IMC) plan. Used to brief agencies, review creative work, and align teams around the shared standards of an integrated campaign.",
      example: "Riley explained: In an integrated campaign, every channel should carry the same core message — the brand promise and the primary value proposition — but express it in the format that is most natural for that channel. The core message is: we make complex data simple. On LinkedIn — a thought leadership post that demonstrates that promise through an expert point of view. On email — a case study that shows it through a customer story. On the website — a product demo that proves it through experience. Dana added: The integration is not that every channel says the same thing in the same way. It is that everything builds towards the same understanding of the brand in the customer's mind, regardless of where they encounter it first.",
      imageSlug: '/images/in-an-integrated-campaign-every-channel.png',
      inAction: "In an integrated campaign, every channel should feel like it is from the same brand — not like five different agencies working in isolation on the same brief.",
      register: "Neutral — Flux (SaaS, brand refresh campaign): creative brief reads in an integrated campaign, every channel should express the same brand voice — which means briefing the agency on the verbal identity, not just the visual. | Halo (DTC beauty, seasonal launch): campaign brief reads in an integrated campaign, every channel should contribute to the same conversion journey — so a customer who sees the Instagram post and then visits the website should find a coherent continuation of the story, not a disconnected experience. | Forge (B2B HR, product launch): campaign standard reads in an integrated campaign, every channel should be traceable — UTM parameters on all external links so we can attribute conversion to specific channels and content pieces.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — brand refresh campaign brief', imageSlug: '/images/visual-examples/flux-integrated-brand-voice.png', caption: 'In an integrated campaign, every channel should express the same brand voice — briefing on verbal identity, not just visual standards.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'DTC beauty — seasonal integrated launch brief', imageSlug: '/images/visual-examples/halo-integrated-journey.png', caption: 'In an integrated campaign, every channel should contribute to the same conversion journey — Instagram to website should be a coherent continuation, not a disconnected experience.', aspectRatio: '4/5' },
      ],
      inContext: "Dana reviewed the creative submissions from the three agencies. In an integrated campaign, every channel should feel like it came from the same brand, she said. Marcus: And right now, the social creative, the email creative, and the website landing page feel like they came from three different brands. Riley: Which is the brief we gave — three separate briefs, three separate teams, with no shared brand guidelines and no review at integration level. Dana: That is the process failure. Integration is not what the agencies do at the end — it is what we define at the beginning.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "This is our B2 review session. I want us to use the next hour to test our command of the advanced marketing vocabulary — not just whether we know the terms, but whether we can use them to build an argument, challenge a strategy, and recommend a course of action. Let us start with a scenario. We have a new product launching in 90 days. The board wants a clear marketing strategy. Walk me through the framework.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I would start with [[segmentation:dividing a market into groups with similar needs and behaviours]]. Before we decide on anything else — channels, message, format — we need to know who specifically we are marketing to. What is the target segment, what do they need, what do they believe, and where do they spend their attention?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And from the segmentation decision flows the [[go-to-market:the strategy and plan for launching a product or entering a new market]] plan. Target audience, positioning, pricing model, channel mix, and the launch sequence. The segmentation is step one. The go-to-market is the bridge between the product and the first customer.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Now — what should the [[channel mix:the selection of marketing channels used in a campaign]] look like for a B2B software product launching into the enterprise segment?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The channel mix for this campaign should reflect the enterprise buying journey. Enterprise decisions are long, involve multiple stakeholders, and require credibility at each stage. So: LinkedIn for awareness and thought leadership. Email sequences for nurturing. A webinar or event for live consideration. Case studies and comparison content for the evaluation stage. And a frictionless trial or demo for conversion.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And across the full funnel, the strategy should be [[integrated:all channels working together to build the same understanding of the brand]] — not siloed. In an integrated campaign, every channel should carry the same core message while using the format natural to that channel.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Now the measurement question. How do we track performance across a full-funnel, multi-channel campaign?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "[[Attribution:identifying which marketing activities are responsible for a conversion]] is the challenge here. In an enterprise journey that spans six to nine months and 15 to 20 touchpoints, last-click attribution misses most of the picture. We need either multi-touch [[attribution:the process of giving credit to the right touchpoint in a customer journey]] or a more qualitative approach — asking customers directly which touchpoints were most influential in their decision.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And the data shows that our highest-value customers in the enterprise segment come via peer referral and industry events — not from paid search. So our [[attribution:how credit is assigned across touchpoints]] model needs to weight those channels properly, even though they are harder to track.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Now the brand question. The board is asking whether we should launch this new product under the main brand or as a separate entity. From a [[brand architecture:the structure of how products and brands relate to each other]] perspective, what is the right answer?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "From a brand architecture perspective, this means we need to assess whether the new product's target audience and positioning are consistent with the main brand's existing associations. If there is alignment — same audience, same values, same category — a product extension or sub-brand makes sense. If the new product requires a different positioning for a different audience, a separate brand protects both.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And to make the business case for the investment overall, we need the LTV and [[conversion optimisation:improving the percentage of visitors who take a desired action]] data to show the board that the commercial return justifies the launch spend. Not just a revenue projection — actual evidence from our test cohort and our retention data.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good work. The vocabulary is there. The challenge now is to use it in writing — the final project next lesson will ask you to present a complete go-to-market plan using the full B2 marketing vocabulary. Start thinking about the product, the market, and the argument you want to make.",
    },
  ],

  matchingExercise: [
    { word: 'full-funnel', definition: 'a marketing approach that addresses every stage of the customer journey from awareness through to retention' },
    { word: 'brand equity', definition: 'the commercial value of a brand — the premium customers pay and the loyalty they show because of its reputation' },
    { word: 'attribution', definition: 'identifying which marketing channels or activities are responsible for a conversion or sale' },
    { word: 'segmentation', definition: 'dividing a market into groups with similar needs, behaviours, or values so marketing can be tailored to each' },
    { word: 'omnichannel', definition: 'providing a seamless, unified customer experience across all channels — online, in-store, mobile, and support' },
    { word: 'content strategy', definition: 'a plan for what to create, for which audience, on which platform, and with what commercial purpose' },
    { word: 'conversion optimisation', definition: 'improving the percentage of visitors who take a desired action by reducing friction and testing improvements' },
    { word: 'go-to-market', definition: 'the plan for launching a product — target audience, positioning, pricing, channels, and launch sequence' },
  ],

  fillBlankExercise: [
    { before: 'Across the full', after: ', our strategy addresses awareness, consideration, conversion, and retention as connected stages.', answer: 'funnel' },
    { before: 'The data shows that our highest-value customers are those acquired through peer referral — with an LTV 2.6 times higher than paid', answer: 'acquisition', after: ' customers.' },
    { before: 'From a brand', after: "perspective, the new product needs its own identity if the target audience is different from the core brand's existing audience.", answer: 'architecture' },
    { before: 'The channel mix for this campaign should', after: 'the enterprise buying journey — LinkedIn for awareness, email for nurturing, and a demo for conversion.', answer: 'reflect' },
    { before: 'In an integrated campaign, every channel should carry the same core message, expressed in the format that is most natural', answer: 'to', after: 'that channel.' },
    { before: 'To make the business case for this investment, we need the LTV comparison data and the cost-per-', answer: 'acquisition', after: 'by channel.' },
  ],

  multipleChoiceExercise: [
    {
      question: "What is the key distinction Riley draws between 'multichannel' and 'omnichannel'?",
      options: ['Multichannel means using paid channels and omnichannel means using both paid and organic channels', 'Multichannel means being present in many channels; omnichannel means integrating them so the experience is seamless and unified', 'Multichannel is a B2C strategy and omnichannel is a B2B strategy that involves more complex buying journeys'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say is the relationship between performance marketing and brand marketing?',
      options: ['Performance marketing and brand marketing serve different audiences and should never share budget', 'Performance marketing harvests demand that brand marketing creates — without brand investment, the performance audience pool shrinks over time', 'Brand marketing should be discontinued once a brand reaches sufficient market penetration and performance marketing can carry the full load'],
      correctIndex: 1,
    },
    {
      question: "In Dana's description of content strategy, what does 'Convert' content include?",
      options: ['Blog posts, social media content, and podcast episodes that build broad brand awareness over time', 'Case studies, comparison pages, and demo invitations — content that drives specific action at the bottom of the funnel', 'Shareable, emotionally engaging content designed to reach new audiences through organic sharing'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say is often the most persuasive argument for brand investment when speaking to a CFO?',
      options: ['A list of brand equity metrics — NPS, awareness, and price premium — that proxy the return on brand spending', 'Without brand investment, performance marketing efficiency will decline as the awareness audience pool shrinks — the alternative is a deteriorating ROI, not a static one', 'A comparison with competitor brands who invest heavily in brand and show superior long-term growth rates'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Think about the marketing vocabulary you have learned across this series — which three or four terms do you feel most confident using in a real professional conversation, and which ones still feel difficult to use naturally? What makes the confident ones easier?",
      'If you had to explain the difference between a marketing strategy and a marketing plan to someone who had never worked in marketing, how would you explain it in simple language? What is the difference?',
      "Think about a marketing challenge you are facing — or one you can imagine facing — in your current role or industry. What is the single most important strategic question that needs to be answered before any campaign or channel decision can be made?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'A brand with deep equity _____ a difficult period better than one with shallow equity.',
        options: ['survives', 'survive', 'surviving'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('survives') is correct for a general truth or principle: 'a brand... survives'. The subject 'a brand' is singular — so the verb takes the -s ending. This sentence states a marketing principle — a general truth about how brand equity works. General truths and principles are expressed in simple present: 'water freezes at 0°C', 'performance marketing harvests demand', 'a brand with deep equity survives'. 'Survive' (no -s) would be the plural form: 'brands survive'. 'Surviving' cannot be the main verb of a sentence without an auxiliary.",
      },
      {
        sentence: 'Attribution becomes _____ complex when the customer journey spans multiple channels and several months.',
        options: ['increasingly', 'more', 'most'],
        correctIndex: 0,
        explanation: "'Increasingly' is an adverb meaning 'progressively more' or 'more and more over time'. 'Attribution becomes increasingly complex' means the complexity grows progressively. 'More complex' (comparative adjective) is also grammatically correct: 'attribution becomes more complex when...' — this is a comparison. Both 'increasingly complex' and 'more complex' are natural in this context. 'Most complex' (superlative) means 'the most complex of all cases' — it implies a comparison with all other situations, not a progression. Since the sentence describes what happens as the journey lengthens (a progression), 'increasingly' or 'more' are both correct. 'Increasingly' is preferred here as it conveys the progressive nature of the change.",
      },
      {
        sentence: 'The segmentation framework _____ developed before the channel mix is decided, not after.',
        options: ['should be', 'should have', 'should' ],
        correctIndex: 0,
        explanation: "'Should be developed' is the correct passive construction. The framework is the thing that undergoes development — it does not do the developing itself. Passive: 'the framework should be developed' = 'someone should develop the framework'. This is the standard passive form for expressing how a process should be done: 'the brief should be written before the meeting', 'the data should be cleaned before analysis'. 'Should have' introduces the past modal: 'should have developed' — this would express criticism of something not done in the past: 'it should have been developed earlier'. 'Should' alone cannot complete this construction — it needs a full verb phrase: 'should be developed', not just 'should'.",
      },
      {
        sentence: '_____ the right channel mix is chosen, the creative team can begin adapting the content for each format.',
        options: ['Once', 'After', 'When'],
        correctIndex: 0,
        explanation: "'Once' means 'as soon as the condition is met': 'once the channel mix is chosen, the creative work can begin'. It implies a sequential, causal relationship — step one must be complete before step two starts. 'After' also describes a sequence: 'after the channel mix is chosen' — and is grammatically correct. The difference: 'once' emphasises immediacy (as soon as), while 'after' allows for a time gap. In a planning context where efficiency and sequencing are important, 'once' signals that the next step begins promptly when the first is done. 'When' is also possible — 'when the channel mix is chosen' — but it implies this happens at an unspecified time, not necessarily in a defined sequence. 'Once' is the most precise choice for a conditional trigger.",
      },
      {
        sentence: 'Conversion optimisation works by reducing friction _____ the checkout process so fewer visitors leave before completing a purchase.',
        options: ['in', 'during', 'throughout'],
        correctIndex: 0,
        explanation: "'In the checkout process' describes location — where the friction exists: inside the checkout process. This is the most natural and precise preposition for a process or system: 'friction in the process', 'steps in the journey', 'stages in the funnel'. 'During the checkout process' means 'at the time the checkout is happening' — it describes timing rather than location. 'During' is for events: 'during the meeting', 'during checkout'. 'In the process' describes where something is located within the structure. 'Throughout the checkout process' means 'at every point within it' — this would be appropriate if the friction were present at all stages equally. 'In the checkout process' is the most natural and precise choice here.",
      },
      {
        sentence: 'In an integrated campaign, all channels _____ the same brand promise, even if the format differs.',
        options: ['should express', 'should be expressing', 'should have expressed'],
        correctIndex: 0,
        explanation: "'Should express' — modal + base verb — is the correct form for stating a standard, rule, or expectation that applies generally: 'all channels should express the same promise'. This is a design principle for integrated campaigns, not something happening right now or something that should have happened in the past. 'Should be expressing' (modal + present continuous) describes an ongoing action that should be in progress right now — more appropriate for 'at this moment, the channels are not doing what they should be doing'. 'Should have expressed' is the past modal: 'all channels should have expressed' — this criticises the past for not meeting the standard. For a principle that applies to how campaigns should be built, 'should + base verb' is standard.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'We are spending 80% of our marketing budget on performance marketing and 20% on brand. Should we change this?'",
          options: [
            "80/20 in favour of performance is standard for a growth-stage company. Keep it as it is until revenue reaches a point where brand investment makes sense.",
            "The right ratio depends on what the data is telling you about your current performance marketing efficiency. Performance marketing works best when there is sufficient brand awareness in the market to create demand — it harvests intent that already exists. If your cost-per-click is rising, your conversion rates are declining, or your audience size is shrinking, these are signs that the demand pool is not being replenished fast enough. In that case, rebalancing towards brand is not a strategic indulgence — it is a commercial necessity. What does your performance marketing efficiency data show over the last 12 months? If CPAs are stable and audience size is growing, the current balance may be right. If either is deteriorating, the balance probably needs to shift.",
            "You should move to 50/50 — that is the most effective ratio for a mature brand according to the Binet and Field research.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it explains the relationship between brand and performance marketing clearly, identifies the data signals that would indicate a problem with the current balance, and asks the right diagnostic question rather than prescribing an answer. Option A is wrong — 'standard for a growth-stage company' is not a meaningful standard; the right ratio depends on the specific market dynamics. Option C misapplies the Binet and Field research, which applies to established categories with specific conditions — it cannot be cited as a universal prescription for all brands.",
        },
        {
          customerLine: "'Our attribution model shows that social media is not contributing to conversions, so we are cutting it.'",
          options: [
            "Social media is primarily a brand awareness channel — cutting it based on a last-click attribution model is almost certainly a mistake. Last-click attribution gives credit only to the final touchpoint before conversion, which for B2B and considered purchases is almost never social media. But social media may be creating the first awareness, building the brand familiarity, and influencing the consideration that makes the performance channels work. Before cutting it, I would recommend two things: first, look at your data holistically — do customers who convert have higher social media engagement before their conversion? Second, run a holdout test — pull social media budget for one audience segment for 90 days and compare the conversion performance of that segment against a control group. Make the decision based on the experiment, not the attribution model.",
            "If attribution shows it is not working, cut it — attribution data is the most reliable measure of channel performance.",
            "Keep social media but shift all spend to paid social, since organic social is too difficult to measure.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it correctly identifies the limitation of last-click attribution for awareness channels, explains how social media may be contributing without receiving attribution credit, and proposes two evidence-based approaches (data analysis and holdout testing) before making the cut decision. Option B is wrong — 'attribution data is the most reliable measure' is only true if the attribution model is well-designed, which last-click attribution is not for multi-touchpoint journeys. Option C avoids the question rather than addressing the attribution problem.",
        },
        {
          customerLine: "'We want to go omnichannel but we do not have the technology budget for a full integration.'",
          options: [
            "Without the technology budget, omnichannel is not possible — you need to wait until the infrastructure investment is approved.",
            "Full omnichannel integration is a significant investment, but it does not have to happen all at once. The most pragmatic approach is to identify the single most painful disconnection in your current customer experience — the specific moment where a customer moves between channels and has a poor experience — and solve that one first. This builds the internal evidence for the broader investment and improves the customer experience at the highest-friction point without requiring the full budget upfront. What is the most common complaint you hear about the consistency of your cross-channel experience? Start there.",
            "You can create an omnichannel experience without technology by training your teams to deliver consistent messaging across every touchpoint.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it reframes the challenge from 'all or nothing' to 'prioritise the highest-friction point', provides a pragmatic starting point, and builds towards the larger investment through demonstrated evidence. It also asks a diagnostic question that helps move the conversation from abstract strategy to concrete action. Option A is wrong — 'not possible without full budget' is false; incremental progress is almost always possible. Option C is naive — training alone cannot create omnichannel consistency; the data integration is what enables a unified view of the customer across channels.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the advanced marketing review session extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "A full-funnel strategy address every stage of the customer journey — from first awareness through to post-purchase retention." },
        { speaker: 'Riley', text: "Attribution is complex because most customer journeys involve multiple touchpoints across different channels over several months." },
        { speaker: 'Dana', text: "The segmentation framework should be developed before the channel mix — not the other way round." },
        { speaker: 'Marcus', text: "In an integrated campaign, every channel should express the same core message, even if the format are different in each case." },
        { speaker: 'Riley', text: "Conversion optimisation is probably the highest-ROI investment available to a business with an existing audience — because you are extracting more value from what you already has." },
        { speaker: 'Dana', text: "And the go-to-market plan is the bridge between the product and the first customer — without it, the best product in the world can fail commercially." },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'A full-funnel strategy address',
          correction: 'A full-funnel strategy addresses',
          explanation: "'Strategy' is singular — the verb must be third person singular in simple present: 'addresses'. This is a subject-verb agreement error. Simple present third person singular adds -s (or -es) to the verb: 'the strategy addresses', 'the plan covers', 'the campaign targets'. 'Address' (no -s) is correct for plural subjects ('strategies address') or first/second person ('I address', 'we address'). A singular noun subject always takes the -s form in third person simple present.",
        },
        {
          lineIndex: 3,
          incorrectText: 'even if the format are different',
          correction: 'even if the format is different',
          explanation: "'Format' in this context is singular — 'the format' (of each channel's content). Therefore the verb must be singular: 'the format is different'. If 'formats' were plural, it would be 'the formats are different'. The article 'the' with a singular noun ('the format') requires a singular verb. This is a classic number agreement error — the writer may be thinking of the multiple channel formats collectively, but the sentence uses the singular 'format', so the verb must agree: 'the format is'.",
        },
        {
          lineIndex: 4,
          incorrectText: 'what you already has',
          correction: 'what you already have',
          explanation: "The subject of this clause is 'you' — second person singular (or plural). 'You' always takes the base form of the verb (without -s): 'you have', 'you know', 'you are'. 'Has' is the third person singular form — used only with he, she, it, or a singular noun: 'the company has', 'it has'. 'You has' is always incorrect in standard English — regardless of whether 'you' refers to one person or many. The correct form is 'what you already have' — 'you have', always.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Present the case for moving from a last-click attribution model to a multi-touch attribution model.",
          salespersonStart: "The problem with last-click attribution is not that it measures the wrong metric —",
          suggestedCompletion: "it is that it assigns all credit to one moment in a journey that involves many. A customer who converts after clicking a branded search ad may have spent four months reading our thought leadership content, attending our webinar, watching a product demo, and reading three customer case studies — none of which receive any credit under last-click. The commercial consequence is that we defund the channels that build awareness, consideration, and trust, because they do not appear in the attribution data — and then we notice that our performance marketing efficiency is declining and cannot explain why. Multi-touch attribution assigns credit across the full journey. It is more complex to implement, it requires unified data, and it will never be perfectly accurate — but it produces decisions that are more aligned with how customers actually behave, which is what we need.",
        },
        {
          customerLine: "A junior marketer asks: 'What is the most important thing to understand about brand equity?'",
          salespersonStart: "Brand equity is the reason 'why' someone buys — not the reason 'what' they buy —",
          suggestedCompletion: "and understanding that distinction changes how you think about almost every marketing decision. The product features explain what someone buys. Brand equity explains why they choose you over the competitor who has similar features at a lower price. It is the accumulated trust, recognition, and emotional association that a brand has built — usually slowly, over years — through consistent quality, honest communication, and experiences that live up to the promise. Brand equity is also asymmetric: it takes years to build and can be destroyed by a single crisis, a misaligned campaign, or a string of broken promises. The practical implication for marketing is that short-term decisions that exploit brand equity — promotional discounting, misleading claims, inconsistent communication — can look good in the quarter's numbers and cost the business far more over the following years.",
        },
        {
          customerLine: "What is the difference between a marketing strategy and a go-to-market plan?",
          salespersonStart: "A marketing strategy describes where you are going and why —",
          suggestedCompletion: "a go-to-market plan describes how you are going to get there and when. The strategy is the framework: who the target audience is, what the brand stands for in that market, how the brand is positioned relative to competitors, and what the commercial goals are over a 12 to 36 month horizon. The go-to-market plan is the execution document: the specific product or service being launched, the exact audience segment being entered, the pricing model and the rationale, the channels in priority order, the launch sequence day by day, and the success metrics for the first 90 days. A strategy without a go-to-market plan is a direction without a route. A go-to-market plan without a strategy is a list of activities without a reason to do them. Both are necessary. The strategy comes first and the GTM plan must be consistent with it.",
        },
      ],
    },
  },
};
