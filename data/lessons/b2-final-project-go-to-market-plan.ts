import { Lesson } from '@/types/lesson';

export const b2FinalProjectGoToMarketPlan: Lesson = {
  slug: 'b2-final-project-go-to-market-plan',
  title: 'B2 Final Project: Go-to-Market Plan',
  subtitle: 'Bring together your full B2 marketing vocabulary to build, defend, and present a complete go-to-market strategy',
  level: 'B1-B2',
  description: "This is the capstone lesson of the B2 marketing series. You have built a comprehensive advanced marketing vocabulary — from brand architecture and consumer psychology through to data analytics, retention strategy, ethical marketing, and emerging market entry. Now you will use all of it. The go-to-market plan is one of the most important documents a marketer produces — it is the bridge between a product idea and commercial success. This lesson guides you through building, defending, and presenting a complete GTM plan using professional vocabulary with precision and confidence.",
  heroImage: '/images/b2-final-project-go-to-market-plan-hero.png',

  vocabulary: [
    {
      word: 'GO-TO-MARKET STRATEGY',
      partOfSpeech: 'noun',
      definition: 'A plan for how to launch and sell a new product.',
      example: 'Our go-to-market strategy starts with small businesses in the UK.',
      imageSlug: '/images/b2-final-project-go-to-market-plan-go-to-market-strategy.png',
    },
    {
      word: 'VALUE PROPOSITION',
      partOfSpeech: 'noun',
      definition: 'A short statement of what customers gain from a product.',
      example: 'Our value proposition is simple: save two hours a day.',
      imageSlug: '/images/b2-final-project-go-to-market-plan-value-proposition.png',
    },
    {
      word: 'COMPETITIVE POSITIONING',
      partOfSpeech: 'noun',
      definition: 'How a product is seen compared to its competitors.',
      example: 'Our competitive positioning is fast and easy to use.',
      imageSlug: '/images/competitive-positioning.png',
    },
    {
      word: 'MARKET SIZING',
      partOfSpeech: 'noun',
      definition: 'Working out how big a market is.',
      example: 'Market sizing shows there are 50,000 possible customers.',
      imageSlug: '/images/market-sizing.png',
    },
    {
      word: 'LAUNCH SEQUENCE',
      partOfSpeech: 'noun',
      definition: 'The order of steps before and after a launch.',
      example: 'Our launch sequence starts with teaser posts.',
      imageSlug: '/images/launch-sequence.png',
    },
    {
      word: 'PILOT',
      partOfSpeech: 'noun',
      definition: 'A small test before a full launch.',
      example: 'We will run a pilot with ten customers first.',
      imageSlug: '/images/pilot.png',
    },
    {
      word: 'SUCCESS METRIC',
      partOfSpeech: 'noun',
      definition: 'A number that shows if a plan worked.',
      example: 'Our main success metric is 1,000 sign-ups.',
      imageSlug: '/images/b2-final-project-go-to-market-plan-success-metric.png',
    },
    {
      word: 'CROSS-FUNCTIONAL',
      partOfSpeech: 'adjective',
      definition: 'Involving people from different teams.',
      example: 'This is a cross-functional project with sales and IT.',
      imageSlug: '/images/cross-functional.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'OUR GO-TO-MARKET STRATEGY IS BUILT AROUND...',
      definition: 'A way to name the main idea of your launch plan.',
      example: 'Our go-to-market strategy is built around free trials.',
      imageSlug: '/images/our-go-to-market-strategy-is-built-around.png',
      inAction: 'Our go-to-market strategy is built around the insight that our target buyers make the final vendor decision in a 45-minute call — which is why the demo experience is the most important commercial investment we are making.',
      register: "Neutral — Flux (SaaS analytics, investor deck): series A presentation reads our go-to-market strategy is built around the category insight that marketing data is available but actionable intelligence is not — and our AI layer bridges that gap in under 10 minutes. | Kova (fintech, market entry): board strategy document reads our go-to-market strategy is built around the leapfrogging insight — our target market never had traditional banking infrastructure, which means mobile-first is not a preference but a necessity. | Forge (B2B HR, enterprise launch): board GTM presentation reads our go-to-market strategy is built around the buyer truth that HR decisions are made by HR but funded by finance — which means our sales motion targets both simultaneously.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS analytics — Series A investor presentation', imageSlug: '/images/visual-examples/flux-gtm-insight.png', caption: 'Our go-to-market strategy is built around the category insight that marketing data is available but actionable intelligence is not — our AI layer bridges that gap in under 10 minutes.', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR platform — enterprise board GTM presentation', imageSlug: '/images/visual-examples/forge-gtm-buyer-truth.png', caption: 'Our go-to-market strategy is built around the buyer truth that HR decisions are made by HR but funded by finance — our sales motion targets both simultaneously.', aspectRatio: '16/9' },
      ],
      inContext: "Riley opened the final GTM review with the organising principle. Our go-to-market strategy is built around a single audience segment, a single problem, and a single positioning claim, she said. Marcus: And everything — the message, the channel, the pricing, the launch sequence — serves that combination or it comes out. Dana: The plans that fail are usually the ones that try to be relevant to everyone. We are entering with specificity, and if we get the segment and the problem right, the growth comes from there.",
    },
    {
      phrase: 'THE VALUE PROPOSITION FOR THIS SEGMENT IS...',
      definition: 'A way to say what one customer group gains.',
      example: 'The value proposition for this segment is lower costs.',
      imageSlug: '/images/the-value-proposition-for-this-segment.png',
      inAction: 'The value proposition for this segment is not the feature set — it is the outcome: a 70% reduction in time-to-insight, which translates directly into faster campaign decisions and fewer missed opportunities.',
      register: "Neutral — Flux (SaaS analytics, sales enablement): sales brief reads the value proposition for the marketing operations segment is: replace the analyst queue with instant answers — decisions that used to take 3 days now take 10 minutes. | Bloom (DTC wellness, customer acquisition): campaign brief reads the value proposition for the working parent segment is: nutrition that works around your schedule, not the other way round — no meal prep, no planning, no compromise. | Beacon (healthcare, GP referral): B2B sales deck reads the value proposition for NHS commissioning teams is a 40% reduction in missed follow-up appointments — measurable, verifiable, and directly tied to patient outcome metrics.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS analytics — sales enablement brief', imageSlug: '/images/visual-examples/flux-value-prop-marketing-ops.png', caption: 'The value proposition for the marketing ops segment: replace the analyst queue with instant answers — decisions that took 3 days now take 10 minutes.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — customer acquisition campaign', imageSlug: '/images/visual-examples/bloom-value-prop-parents.png', caption: 'The value proposition for the working parent segment: nutrition that works around your schedule, not the other way round — no meal prep, no planning, no compromise.', aspectRatio: '4/5' },
      ],
      inContext: "Riley tested the value proposition with three potential customers last week. The value proposition for this segment is fastest and clearest when it leads with the outcome, not the feature, she reported. All three interviewees responded most strongly to the time-saving framing — not the technology, not the interface. Marcus: Which confirms that the marketing message should lead with the result, not the product. 'Ten minutes to insight' is the headline. How we get there is the second paragraph.",
    },
    {
      phrase: 'COMPETITIVELY, WE ARE POSITIONED AS...',
      definition: 'A way to say how you compare with competitors.',
      example: 'Competitively, we are positioned as the simple, low-cost option.',
      imageSlug: '/images/competitively-we-are-positioned-as.png',
      inAction: "Competitively, we are positioned as the ethical alternative in a category where greenwashing is widespread — which is only credible because our sustainability credentials are independently verified.",
      register: "Neutral — Flux (SaaS, competitive strategy): go-to-market plan reads competitively, we are positioned as the analytics platform built for marketing teams — not adapted from a BI tool that was designed for data scientists. | Kova (fintech, market entry): investor presentation reads competitively, we are positioned as the mobile-first payment platform for the unbanked — a segment that established banks structurally cannot serve well. | Bloom (DTC wellness, brand positioning): brand strategy reads competitively, we are positioned as the subscription that grows with you — adapting to your health goals over time, rather than selling the same product regardless of progress.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS analytics — go-to-market competitive strategy', imageSlug: '/images/visual-examples/flux-competitive-marketing-teams.png', caption: 'Competitively, we are positioned as the analytics platform built for marketing teams — not adapted from a BI tool designed for data scientists.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — investor competitive positioning presentation', imageSlug: '/images/visual-examples/kova-competitive-unbanked.png', caption: 'Competitively, we are positioned as the mobile-first payment platform for the unbanked — a segment that established banks structurally cannot serve well.', aspectRatio: '16/9' },
      ],
      inContext: "Dana had the competitive landscape mapped. Competitively, we are positioned as the solution for the buyer that existing vendors have ignored, she said — the marketing manager who needs insights but does not have a data scientist. Riley: And that positioning is only defensible if the product genuinely delivers for that buyer. If we are easy to use but produce unreliable outputs, the positioning becomes a liability rather than an asset. Marcus: Which is why the pilot is the most important strategic activity in the next 90 days. The positioning is the claim. The pilot is the proof.",
    },
    {
      phrase: 'IN THE FIRST 90 DAYS, THE LAUNCH SEQUENCE WILL...',
      definition: 'A way to explain the first steps after launch.',
      example: 'In the first 90 days, the launch sequence will focus on early users.',
      imageSlug: '/images/in-the-first-90-days.png',
      inAction: 'In the first 90 days, the launch sequence will prioritise earned media and beta customer advocacy over paid amplification — the goal is credibility, not reach, in the first phase.',
      register: "Neutral — Forge (B2B HR, enterprise launch): go-to-market plan reads in the first 90 days, the launch sequence will move from internal readiness — week one — to partner activation — weeks two and three — to public launch and media — week four — to customer acquisition and sales motion — weeks five to 12. | Bloom (DTC wellness, new product): launch plan reads in the first 90 days, the launch sequence will run three overlapping programmes: influencer seeding, customer-generated content, and a first-purchase incentive campaign — all feeding into the same conversion funnel. | Kova (fintech, market entry): board strategy reads in the first 90 days, the launch sequence will be community-first — building trust and advocacy among early adopters before we invest in paid acquisition.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — enterprise go-to-market launch plan', imageSlug: '/images/visual-examples/forge-90-day-launch.png', caption: 'In the first 90 days, the launch sequence moves from internal readiness to partner activation to public launch to customer acquisition — four overlapping phases.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — emerging market entry board strategy', imageSlug: '/images/visual-examples/kova-90-day-community.png', caption: 'In the first 90 days, the launch sequence is community-first — building trust and advocacy among early adopters before investing in paid acquisition.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus had the 90-day plan on screen. In the first 90 days, the launch sequence will require every team to be executing simultaneously, he said. Sales building the pipeline. Marketing creating the demand. Product fixing the issues the pilot has surfaced. Customer success onboarding the first paying customers. Riley: Which is why the cross-functional alignment meeting is week minus one — before day zero, not after. Dana: Every team leader should be able to recite their week-by-week priority for the first 90 days before we launch. If they cannot, we are not ready.",
    },
    {
      phrase: 'THE SUCCESS OF THE GO-TO-MARKET PLAN WILL BE MEASURED BY...',
      definition: 'A way to say how you will check the launch results.',
      example: 'The success of the go-to-market plan will be measured by sales and sign-ups.',
      imageSlug: '/images/the-success-will-be-measured-by.png',
      inAction: 'The success of the go-to-market plan will be measured by net revenue retention at 12 months — because a product that grows its customer base but loses 40% of its ARR from churn has not succeeded commercially.',
      register: "Neutral — Flux (SaaS analytics, board): six-month GTM review reads the success of the go-to-market plan will be measured by three metrics: MRR at £200k, NPS above 50, and net revenue retention above 110% — any metric below target triggers a specific strategic review. | Kova (fintech, investor update): progress report reads the success of the go-to-market plan will be measured by daily active users and mobile money transaction volume in month six — revenue is a lagging indicator in this market, and these are the leading indicators that determine eventual revenue. | Bloom (DTC wellness, board quarterly): Q2 review reads the success of the go-to-market plan will be measured by subscription retention at 6 months — because in a subscription model, retention at 6 months is a stronger predictor of business health than any acquisition metric.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS analytics — board six-month GTM review', imageSlug: '/images/visual-examples/flux-success-metrics-mrr.png', caption: 'The success of the go-to-market plan will be measured by three metrics: MRR at £200k, NPS above 50, and net revenue retention above 110%.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — board quarterly review', imageSlug: '/images/visual-examples/bloom-success-metrics-retention.png', caption: 'The success of the go-to-market plan will be measured by subscription retention at 6 months — a stronger predictor of health than any acquisition metric in a subscription model.', aspectRatio: '4/5' },
      ],
      inContext: "Riley put the metrics framework on screen. The success of the go-to-market plan will be measured by outcomes, not activities, she said. Not how many campaigns we ran or how many leads we generated — but whether we acquired the customers, retained them, and built the revenue we said we would. Marcus: And the metrics are defined now — before we launch. If we define them after, we will always find a way to declare success. Dana: The pre-commitment to specific numbers is what makes the plan a plan rather than a wish.",
    },
    {
      phrase: 'TO EXECUTE THIS PLAN, WE NEED CROSS-FUNCTIONAL ALIGNMENT ACROSS...',
      definition: 'A way to say which teams must work together.',
      example: 'To execute this plan, we need cross-functional alignment across sales, marketing and product.',
      imageSlug: '/images/to-execute-this-plan-cross-functional.png',
      inAction: 'To execute this plan, we need cross-functional alignment across marketing, sales, and customer success — because a great campaign that the sales team cannot convert or the CS team cannot deliver will fail regardless of demand.',
      register: "Neutral — Forge (B2B HR, enterprise launch): launch playbook reads to execute this plan, we need cross-functional alignment across product, marketing, sales, and legal — the enterprise feature release must be signed off by legal before it appears in marketing materials. | Flux (SaaS, go-to-market review): board strategy reads to execute this plan, we need cross-functional alignment across marketing and customer success — demand that is not converted into successful customers within 60 days represents a failure of execution, not a failure of demand generation. | Bloom (DTC wellness, new product launch): ops review reads to execute this plan, we need cross-functional alignment across marketing, supply chain, and customer service — a campaign that drives demand we cannot fulfil damages the brand more than no campaign.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS analytics — board go-to-market strategy review', imageSlug: '/images/visual-examples/flux-cross-functional-cs.png', caption: 'To execute this plan, we need cross-functional alignment across marketing and customer success — demand not converted within 60 days is a failure of execution, not demand generation.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — new product operations review', imageSlug: '/images/visual-examples/bloom-cross-functional-supply.png', caption: 'To execute this plan, we need cross-functional alignment across marketing, supply chain, and customer service — a campaign that drives demand we cannot fulfil damages the brand.', aspectRatio: '4/5' },
      ],
      inContext: "Dana had the team responsibilities mapped. To execute this plan, we need cross-functional alignment across every team that touches the customer in the first 90 days, she said. Marcus: Which is marketing, sales, product, and customer success — and not in silos. The customer does not experience marketing separately from sales separately from onboarding. They experience one journey. Riley: So the GTM plan is not four team plans running in parallel — it is one plan that all four teams execute together. The handoffs between them are the most critical moments to design carefully.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Welcome to the B2 final project. You have completed the full advanced marketing series. Today we build and defend a complete [[go-to-market strategy:the plan for how a product reaches the right customer at the right time]]. I will play the role of the board. You will present and defend your plan. Riley — you are presenting for the first time. Begin.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Our go-to-market strategy is built around one insight: marketing teams at scaling B2B companies spend 60% of their analytical time preparing data rather than interpreting it. Our product eliminates that waste. Every element of the plan — the [[competitive positioning:how we place ourselves relative to competitors]] , the channel mix, the pricing, and the [[launch sequence:the planned order of activities before and after launch]] — exists to solve that specific problem for that specific audience.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Board question: how large is the market?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "The [[market sizing:estimating how large an opportunity is]] shows a total addressable market of $18 billion globally for marketing analytics software. Our serviceable addressable market — B2B companies in the UK and US with 50 to 500 employees — is $2.4 billion. Our realistic [[success metric:a specific, measurable indicator of whether the plan has achieved its goal]] in year three is $48 million — representing a 2% share of SAM.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Board question: why would someone choose you over the existing solutions?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Competitively, we are positioned as the analytics solution built for marketing managers — not adapted from a tool built for data scientists. The [[value proposition:a clear statement of the specific benefit delivered to a specific customer]]: marketing teams get from raw data to a decision in under 10 minutes, without writing a single line of code. Existing solutions require either technical training or a specialist. We require neither.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "And the [[value proposition:the core commercial argument for why someone should choose you]] is validated. We tested it with 40 potential customers before writing this plan. 34 of the 40 said 'this is exactly the problem I have' within the first two minutes of the demo. The [[pilot:a small-scale controlled test before full launch]] with 20 design partner customers begins next month to produce the case study evidence.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Board question: what is the plan for the first 90 days?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "In the first 90 days, the launch sequence will follow three phases. Phase one — close the pilot, publish case studies, brief the media. Phase two — launch paid acquisition, email the database, activate partner co-marketing. Phase three — convert the pipeline, focus on onboarding quality, and begin the first retention programme for pilot customers approaching renewal.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "And to execute this plan, we need [[cross-functional:involving collaboration across multiple departments]] alignment across product, marketing, sales, and customer success — with responsibilities and deliverables defined week by week before day zero. The plan that fails is always the one where the handoffs between teams are unclear.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Board question: how will you know if it has worked?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The success of the go-to-market plan will be measured by five metrics at the six-month mark. 150 paying customers. £180k monthly recurring revenue. NPS above 45. Customer acquisition cost within 20% of our model. And 12-month net revenue retention for the first cohort above 105%.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "These metrics are defined now — before we launch. And each metric below target triggers a specific strategic review: a product review if NPS is low, a channel review if CAC is too high, a positioning review if conversion rate is below model. The metrics are not just how we measure success. They are how we know when to change course.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Strong presentation. The strategy is clear, the positioning is specific, the metrics are pre-committed. That is B2 marketing thinking. Congratulations — you have completed the advanced marketing series. Now the real work begins: using this vocabulary in the conversations and presentations that matter.",
    },
  ],

  matchingExercise: [
    { word: 'go-to-market strategy', definition: 'the complete plan for bringing a product to market — target audience, positioning, pricing, channels, and success metrics' },
    { word: 'value proposition', definition: 'a clear statement of the specific benefit delivered to a specific customer and why it is better than alternatives' },
    { word: 'competitive positioning', definition: 'how a brand places itself relative to competitors — what it stands for and why that matters to the target audience' },
    { word: 'market sizing', definition: 'estimating the size of a market opportunity, typically expressed as TAM, SAM, and SOM' },
    { word: 'launch sequence', definition: 'the planned, time-ordered activities in the weeks before and after a product launch' },
    { word: 'pilot', definition: 'a small-scale, controlled test before full launch — to validate assumptions and generate evidence at low risk' },
    { word: 'success metric', definition: 'a specific, pre-defined, measurable indicator that determines whether a plan has achieved its goal' },
    { word: 'cross-functional', definition: 'involving collaboration across multiple departments — product, marketing, sales, and customer success working toward a shared goal' },
  ],

  fillBlankExercise: [
    { before: 'Our go-to-market strategy is built around one insight: that our target customers spend 60% of their analytical time preparing data rather than', answer: 'interpreting', after: 'it.' },
    { before: 'The value proposition for this segment is specific: marketing managers get from raw data to a decision in under 10', answer: 'minutes', after: ', without writing any code.' },
    { before: 'Competitively, we are', after: 'as the analytics solution built for marketing teams — not adapted from a tool designed for data scientists.', answer: 'positioned' },
    { before: 'In the first 90 days, the launch sequence will move through three phases: pilot close and case study publication, demand', answer: 'generation', after: ', then conversion and retention.' },
    { before: 'The success of the go-to-market plan will be', answer: 'measured', after: 'by five specific metrics at the six-month mark — all defined before we launch.' },
    { before: 'To execute this plan, we need cross-functional alignment across four teams, with responsibilities and', answer: 'deliverables', after: 'defined week by week before day zero.' },
  ],

  multipleChoiceExercise: [
    {
      question: "Why does Dana say the 'SOM' number is the most important of the three market sizing figures for the board?",
      options: ['Because TAM and SAM are not relevant to a board that is focused on profitability rather than market size', 'Because SOM is the honest answer to how much of the market the company can realistically capture — and boards challenge the assumptions behind it', 'Because SOM is the largest of the three numbers and gives the most impressive picture of the opportunity'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say distinguishes a GTM plan from a GTM strategy?',
      options: ['A strategy is for the board and a plan is for the team — the language and level of detail are different', 'The strategy answers where you are going and why; the plan answers how you will get there and when — both are necessary', 'The plan is a shorter document that summarises the strategy for teams who do not have time to read the full strategy'],
      correctIndex: 1,
    },
    {
      question: "Why does Dana say NPS at 60 days is more useful than churn data at the six-month mark?",
      options: ['Because NPS is simpler to collect than churn data and requires no technical integration with the product', 'Because NPS at 60 days is a leading indicator that predicts 12-month retention before the churn data is available — a low NPS signals a future retention problem', 'Because churn data at six months is too late to appear in the board presentation that reviews the six-month milestone'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say about the risk if the central insight behind the GTM strategy is wrong?',
      options: ['The launch sequence can be adjusted mid-flight to correct for a misaligned insight without changing the overall strategy', 'If the insight is wrong, the positioning is wrong — and the whole plan needs to be rebuilt from a different insight', 'The product quality will compensate for a weaker market insight, especially in the early stages of a launch'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Think about a product or service you use regularly that you feel is perfectly designed for you — as if it was built specifically with your needs in mind. What is it about the product, the marketing, or the overall experience that makes it feel that way? What would a competitor have to do to make you switch?",
      "Imagine you are launching a product in a category you know well — your industry, your role, or a product you use every day. Who would be the ideal first customer, and what would you say to them in the first 30 seconds to make them want to learn more?",
      "As you finish this series, what is one vocabulary term or concept that you are most confident using now that you were not confident with before? And what is the one area of marketing communication where you still want to improve?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'A strong value proposition is specific, credible, and relevant — _____ just a tagline or a brand promise.',
        options: ['not', 'never', 'far from'],
        correctIndex: 0,
        explanation: "'Not' is the straightforward negation — 'not just a tagline' means 'it is something more precise and substantial than a tagline'. The structure 'X is Y — not Z' is a standard way to define something by distinguishing it from what it is often confused with: 'a strategy is a direction — not a to-do list'. 'Never' would mean 'a value proposition can never be a tagline' — too absolute. 'Far from' would work as 'far from just a tagline' but 'far from a tagline' without 'just' would mean they are completely opposite — which is a stronger claim than intended. 'Not just a tagline' is the most natural and precise choice.",
      },
      {
        sentence: 'The launch sequence _____ be designed before the launch, not improvised during it.',
        options: ['should', 'must', 'would'],
        correctIndex: 0,
        explanation: "All three modals are possible, but they carry different levels of obligation. 'Should' expresses a strong recommendation or best practice — 'this is the right thing to do'. 'Must' expresses an absolute requirement — 'this has no exceptions'. 'Would' expresses willingness or a hypothetical — 'it would be good if'. In a professional advice or best practice context, 'should' is the standard modal — it is authoritative without being dogmatic. 'Must' is appropriate for genuine non-negotiables (legal requirements, safety rules). 'Should' is used for professional best practice — which is exactly what this sentence describes.",
      },
      {
        sentence: 'Market sizing _____ from the total addressable market down to a realistic obtainable market.',
        options: ['moves', 'move', 'is moving'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('moves') is correct for describing how a process works as a general principle. 'Market sizing moves from TAM down to SOM' — this is a methodological description, not something happening right now. Simple present is standard for process descriptions, methodological principles, and general truths in professional and academic writing: 'the framework covers', 'the model identifies', 'the process moves'. 'Move' (plural) would need a plural subject. 'Is moving' (present continuous) would describe an action in progress right now — not a general methodology.",
      },
      {
        sentence: 'The pilot programme _____ designed to validate the value proposition with real customers before the full launch.',
        options: ['is', 'was', 'has been'],
        correctIndex: 0,
        explanation: "The tense depends on whether the pilot is current ('is designed' — the design is its present characteristic), past ('was designed' — the pilot has finished or was discussed in the past), or recently completed with current relevance ('has been designed' — present perfect). In the context of describing an ongoing or planned pilot — as in a GTM presentation about what the pilot will do — 'is designed' (simple present passive) is the standard choice. It describes the current, defined purpose of the pilot. 'Was designed' would describe a pilot that is now over. 'Has been designed' would imply the design has recently been completed and is relevant now — also possible, but 'is designed' is more natural for describing what a programme is built to do.",
      },
      {
        sentence: 'Without cross-functional alignment, the best go-to-market plan _____ fail at the execution stage.',
        options: ['can', 'could', 'may'],
        correctIndex: 0,
        explanation: "All three modals express possibility, but with different nuances. 'Can fail' means it has the capacity to fail — it is capable of failing under these conditions. This is a factual statement about what is possible. 'Could fail' expresses a conditional or hypothetical possibility — more tentative, used for scenarios or past ability. 'May fail' expresses permission or a neutral possibility — 'there is a chance it might fail'. In a confident strategic recommendation context — 'this is what happens without alignment' — 'can fail' is the most direct and declarative choice. 'Could' would be more tentative: 'it could fail, but maybe not'. The sentence makes a clear causal claim: 'without alignment, plans can fail'. 'Can' is the right modal for stating a known capacity or possibility with confidence.",
      },
      {
        sentence: 'These success metrics are defined _____ we launch — not after we see the results.',
        options: ['before', 'prior to', 'ahead of'],
        correctIndex: 0,
        explanation: "'Before' is the most natural and versatile preposition of the three in this context. 'Before we launch' — the clause following 'before' has a subject ('we') and a verb ('launch'), which is standard with 'before' as a conjunction or preposition. 'Prior to' is also correct: 'prior to launching' — but 'prior to we launch' is non-standard. When followed by a clause (subject + verb), 'before' is the correct choice. 'Prior to' requires a noun or gerund: 'prior to the launch', 'prior to launching'. 'Ahead of' similarly takes a noun: 'ahead of the launch', 'ahead of launching'. Since the sentence uses 'we launch' (a clause), only 'before' is correct here.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'How do we know if our go-to-market strategy is right before we launch?'",
          options: [
            "You run the pilot. The GTM strategy is a set of hypotheses — about the audience, the positioning, the pricing, and the channel. A well-designed pilot tests the most critical hypothesis (usually the value proposition) with a small, representative group of real customers before you commit to full-scale execution. The pilot should be structured with specific success criteria defined in advance, and the results should be used to either confirm the strategy or identify the specific element that needs to change. No amount of research and planning eliminates uncertainty — but a well-run pilot reduces the cost of being wrong from a full-scale market failure to a 90-day learning exercise. The brands that get GTM right consistently are the ones that treat the plan as a hypothesis to be tested, not a prediction to be executed.",
            "You research the market thoroughly — primary research with 20 or more potential customers, competitive analysis, and a detailed financial model. If all three are positive, the strategy is right.",
            "You look at what has worked in similar markets for similar products and adapt that strategy. Most GTM failures are the result of trying to be too different rather than following proven patterns.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it explains the pilot as the mechanism for de-risking the strategy, describes how it should be structured (hypothesis-driven, with pre-defined success criteria), and frames the GTM plan correctly as a hypothesis to be tested rather than a certainty to be executed. Option B is too confident — research reduces uncertainty but does not eliminate it, and a positive financial model cannot validate a value proposition that has not been tested with real customers. Option C is wrong — following proven patterns from similar markets is useful input, but GTM strategies that are designed around a genuinely differentiated positioning cannot simply be borrowed from others.",
        },
        {
          customerLine: "'Our sales team says the product is not ready to launch. Our marketing team says we need to launch now to hit the board deadline. Who is right?'",
          options: [
            "Launch on time — deadlines exist for a reason and a delayed launch is almost always more costly than an imperfect launch.",
            "The right answer requires understanding specifically what 'not ready' means. If the sales team means the product has a critical bug that will prevent customers from completing the primary use case, that is a delay. If they mean the interface is not as polished as they would like, or there are missing features that some customers have requested but are not in the core value proposition, that may not be a delay — it may be an opportunity to involve design partner customers in the development process. The question to ask is: can we deliver the core value proposition as promised to the pilot customers? If yes — launch, with a clear roadmap of what is coming. If no — fix the blocker. A late launch that delivers is better than an on-time launch that does not.",
            "Let the sales team decide — they know the product and the customer better than anyone else, so their assessment of readiness should take priority over the marketing team's timeline.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it asks the right diagnostic question (what specifically does 'not ready' mean?), makes the distinction between a genuine blocker and an aspiration, and recommends the decision based on whether the core value proposition can be delivered. This is the right strategic framing. Option A is wrong — 'a deadline is a deadline' ignores the commercial reality that a failed launch costs more than a delayed one, particularly in B2B where early negative customer experiences spread quickly in small markets. Option C is wrong — decision authority should not be with a single team by default; this is a cross-functional decision that requires the CEO or GTM lead to make the call based on clear criteria.",
        },
        {
          customerLine: "'We have three different value propositions — one from each team. How do we choose?'",
          options: [
            "Choose the one that the marketing team developed — they understand the message and the medium better than product or sales.",
            "Three different value propositions across three teams usually means three different assumptions about who the primary customer is and what they value most. The way to resolve this is not to pick a winner from the three existing options — it is to go back to customers. Test all three with a representative sample of your target audience. Not 'which sounds best' — but 'which most closely describes a problem you have and a benefit you want?' The winning value proposition is the one that resonates with the target customer, not the one that any internal team prefers. If all three score similarly in customer research, the choice becomes about brand fit and communication distinctiveness. But start with the customer.",
            "Choose the shortest and simplest one — value propositions should be concise, and the one that can be said in under 10 words is usually the strongest.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it correctly diagnoses the root cause (different assumptions about the customer), proposes a customer-led resolution process, and defines 'winning' as resonating with the target audience rather than internal preference. This is the professional approach. Option A creates internal political problems and takes the decision away from the customer, which is where it belongs. Option C is a heuristic, not a strategic principle — brevity is useful but a short value proposition that does not resonate is worse than a longer one that does. The test of a value proposition is customer response, not word count.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the go-to-market plan presentation extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Riley', text: "Our go-to-market strategy is built around one central insight — that marketing teams at scaling companies spend 60% of their analytical time preparing data rather than using it." },
        { speaker: 'Dana', text: "The value proposition for our target segment are: from raw data to decision in under 10 minutes, without any coding knowledge." },
        { speaker: 'Marcus', text: "Competitively, we are positioned as the analytics platform built for marketing managers — not for data scientists who requires specialist training." },
        { speaker: 'Riley', text: "The success of the plan will be measured by five pre-defined metrics at the six-month mark — all agreed before the launch begins." },
        { speaker: 'Dana', text: "To execute this plan, we need cross-functional alignment across product, marketing, sales, and customer success — without it, even the better strategy will fail at the execution stage." },
        { speaker: 'Marcus', text: "These metrics are defined now, before we launch — not after we see the results and try to declare success retroactively." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The value proposition for our target segment are:',
          correction: 'The value proposition for our target segment is:',
          explanation: "'Value proposition' is singular — the verb must be singular: 'is'. The prepositional phrase 'for our target segment' is a modifier that does not change the subject. 'The value proposition... is' — one value proposition, singular verb. This is a classic subject-verb agreement error where the modifier ('for our target segment') intervenes between the subject and the verb. Always identify the head noun: 'the value proposition' (singular) → 'is'. If there were multiple propositions, it would be 'the value propositions... are'.",
        },
        {
          lineIndex: 2,
          incorrectText: 'data scientists who requires specialist training',
          correction: 'data scientists who require specialist training',
          explanation: "'Who' here refers to 'data scientists' — which is plural. Therefore the verb must be plural: 'who require'. The relative pronoun 'who' agrees with its antecedent (the noun it refers to). 'Data scientists' is plural → 'who require'. If the antecedent were singular ('a data scientist who requires'), the singular form would be correct. Compare: 'a manager who requires' (singular) vs 'managers who require' (plural). Find the antecedent, check its number, match the verb.",
        },
        {
          lineIndex: 4,
          incorrectText: 'even the better strategy will fail',
          correction: 'even the best strategy will fail',
          explanation: "'Better' is the comparative form — it compares two things: 'this strategy is better than that one'. 'Best' is the superlative form — it means the highest quality of all: 'even the best strategy' means 'even a strategy that is excellent in every way'. In this sentence, the point is that no matter how strong the strategy is — even if it is exceptional — it will fail without execution alignment. That requires the superlative 'best', not the comparative 'better' (which would imply a comparison with a specific other strategy). 'Even the best' is a standard English expression meaning 'even in the ideal case': 'even the best plan can fail', 'even the strongest team makes mistakes'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Present the competitive positioning for a new B2B analytics product in a crowded market.",
          salespersonStart: "In a market where every competitor claims to be powerful and comprehensive —",
          suggestedCompletion: "we are positioning on the one dimension they are not competing on: speed and simplicity for non-technical marketing managers. The existing solutions were built for data scientists and have been adapted for marketing teams — which means they remain complex, require training, and produce outputs that analysts understand better than the marketers who need to act on them. We are the first platform built specifically for the person who needs the insight, not the person who builds the model. Our value proposition is not 'as powerful as the enterprise tools but cheaper' — it is 'answers in ten minutes, no specialist required, decisions you can act on before the meeting ends'. That is a different product for a different buyer, and we are not competing on their terms — we are creating a category they have not thought to own.",
        },
        {
          customerLine: "A board member asks: 'What happens if the pilot fails?'",
          salespersonStart: "If the pilot fails to meet its success criteria, we learn something valuable before we have committed the full launch budget —",
          suggestedCompletion: "which is exactly the reason we run the pilot. A pilot failure is not a product failure — it is a signal that either the value proposition needs refinement, the target segment is not quite right, or the onboarding experience is not delivering the promise quickly enough. Each of those is a solvable problem. What we will have from a failed pilot is a specific hypothesis about what went wrong and a plan for the next 60-day test cycle. The alternative — skipping the pilot and launching directly at full scale — means we discover the same problem after committing the full budget and the full market opportunity. I would rather fail small and learn than succeed at small scale before failing expensively.",
        },
        {
          customerLine: "The series is finished. What advice would you give to someone using advanced marketing vocabulary in professional conversations for the first time?",
          salespersonStart: "The vocabulary is most powerful when it is earned —",
          suggestedCompletion: "meaning when it is backed by the thinking that the word represents, not just the ability to say the word correctly. 'Value proposition' is a powerful term when you can define it precisely, test it with customers, and defend why your version is better than the alternatives. It is an empty term when it is used as a synonym for 'our pitch'. The vocabulary in this series is a toolkit for precision — for making complex ideas clear and for holding yourself accountable to the specific claims you make. Use it to ask better questions in meetings: 'what is the specific value proposition for this segment?' is a more useful contribution than 'I think the marketing could be more targeted'. Use it to make more specific arguments: 'our attribution model gives all credit to last-click, which means we are defunding the channels that drive awareness' is a better observation than 'I think we are spending in the wrong places'. The vocabulary makes you more specific. Specificity makes you more credible. Credibility is what earns you the conversations that matter.",
        },
      ],
    },
  },
};
