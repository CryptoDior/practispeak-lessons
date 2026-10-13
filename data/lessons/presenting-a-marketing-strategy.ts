import { Lesson } from '@/types/lesson';

export const presentingAMarketingStrategy: Lesson = {
  slug: 'presenting-a-marketing-strategy',
  title: 'Presenting a Marketing Strategy',
  subtitle: 'How to structure, deliver, and defend a full marketing strategy presentation to senior stakeholders',
  level: 'B1-B2',
  description: "Presenting a marketing strategy to senior stakeholders — a board, a leadership team, or a client — is one of the most important professional skills in marketing. It is not enough to have a good strategy. You need to present it clearly, justify every decision, and handle questions confidently. This lesson teaches you the vocabulary and phrases for building and delivering a full strategy presentation: how to structure your argument, present your evidence, and defend your recommendations under pressure.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-hero.png',

  vocabulary: [
    {
      word: 'EXECUTIVE SUMMARY',
      partOfSpeech: 'noun',
      definition: 'A short section at the start that gives the main points.',
      example: 'She opened with a one-slide executive summary.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-executive-summary.png',
    },
    {
      word: 'KEY TAKEAWAY',
      partOfSpeech: 'noun',
      definition: 'The most important point people should remember.',
      example: 'The key takeaway is that email needs to improve.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-key-takeaway.png',
    },
    {
      word: 'RATIONALE',
      partOfSpeech: 'noun',
      definition: 'The reasons behind a decision.',
      example: 'The rationale is simple: our buyers use LinkedIn more.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-rationale.png',
    },
    {
      word: 'EVIDENCE',
      partOfSpeech: 'noun',
      definition: 'Facts or numbers that show something is true.',
      example: 'She showed evidence that the campaign could bring 500 leads.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-evidence.png',
    },
    {
      word: 'RECOMMENDATION',
      partOfSpeech: 'noun',
      definition: 'A clear suggestion about what to do.',
      example: 'My recommendation is to move budget to LinkedIn.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-recommendation.png?v=2',
    },
    {
      word: 'OBJECTIVE',
      partOfSpeech: 'noun',
      definition: 'The clear goal that a plan wants to reach.',
      example: 'Our objective is 600 new leads by the end of the year.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-objective.png?v=2',
    },
    {
      word: 'SLIDE',
      partOfSpeech: 'noun',
      definition: 'One page in a presentation.',
      example: 'This slide shows that sales fell by 18%.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-slide.png',
    },
    {
      word: 'Q&A',
      partOfSpeech: 'noun',
      definition: 'The time for questions and answers after a talk.',
      example: 'The board asked hard questions in the Q&A.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-qa.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'I WOULD LIKE TO TAKE YOU THROUGH...',
      definition: 'A polite way to start explaining something step by step.',
      example: 'I would like to take you through our Q4 marketing strategy.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-take-you-through.png',
      inAction: 'I would like to take you through the three-year brand strategy — starting with where we are, then where we need to be, then how we get there.',
      register: "Neutral — Flint (B2B SaaS, board presentation): strategy deck opens with I would like to take you through the go-to-market strategy for H2 — covering the objective, the channel plan, the resource requirements, and the expected outcomes. | Aster (DTC beauty brand, investor pitch): pitch deck narrative opens with I would like to take you through our brand strategy for the next 18 months — and why we believe this is the right moment to accelerate. | Borealis (B2B logistics, client QBR): account review opens with I would like to take you through what we achieved in Q3 and what we are recommending for Q4 — with full supporting data.",
      visualExamples: [
        { brand: 'Flint', context: 'B2B SaaS — board strategy presentation', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-flint-take-you-through.png', caption: 'I would like to take you through the go-to-market strategy for H2 — objective, channel plan, resources, and expected outcomes.', aspectRatio: '16/9' },
        { brand: 'Aster', context: 'DTC beauty brand — investor pitch', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-aster-take-you-through.png', caption: 'I would like to take you through our brand strategy for the next 18 months — and why we believe this is the right moment to accelerate.', aspectRatio: '16/9' },
      ],
      inContext: "Riley stood at the front of the boardroom and waited for the last person to take their seat. I would like to take you through the Q4 marketing strategy, she said. I will cover the objective first, then the rationale for the approach, then the channel plan, and finally the budget and success metrics. Please stop me if anything is unclear — I would rather answer questions as we go than lose the room halfway through.",
    },
    {
      phrase: 'THE RATIONALE BEHIND THIS IS...',
      definition: 'A way to explain the reason for a decision.',
      example: 'The rationale behind this is that 78% of our buyers use LinkedIn.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-the-rationale-behind-this-is.png',
      inAction: 'The rationale behind this recommendation is simple — our organic traffic has grown 40% in 12 months at zero additional cost, while paid search CPL has increased 25%. The data points one way.',
      register: "Neutral — Croft (B2B HR platform, board presentation): strategy slide reads the rationale behind this is the shift in buyer behaviour — 60% of our ICP now completes their evaluation online before speaking to a salesperson, which means our digital presence is now a sales tool, not a marketing tool. | Riven (DTC fashion brand, investor update): pitch reads the rationale behind this is margin — wholesale dilutes margin by 42% and reduces direct customer relationships. DTC is the only model that lets us own both. | Mast (B2B maritime software, client proposal): proposal reads the rationale behind this phased approach is risk management — we do not ask you to change everything at once. Phase one delivers value in 90 days while we build toward full implementation.",
      visualExamples: [
        { brand: 'Croft', context: 'B2B HR platform — board strategy presentation', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-croft-rationale-buyer-behaviour.png', caption: 'The rationale behind this is buyer behaviour — 60% of the ICP completes evaluation online before speaking to sales. The digital presence is a sales tool.', aspectRatio: '16/9' },
        { brand: 'Riven', context: 'DTC fashion brand — investor pitch', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-riven-rationale-margin.png', caption: 'The rationale behind this is margin — wholesale dilutes by 42% and removes direct customer relationships. DTC is the only model that lets us own both.', aspectRatio: '16/9' },
      ],
      inContext: "The CFO had raised an eyebrow at the channel allocation. Riley took a breath. The rationale behind this recommendation is data, she said. We have run LinkedIn and Meta campaigns against the same audience over the last three quarters. LinkedIn delivers a cost per lead that is consistently 35% lower for our ICP. We are not choosing LinkedIn because it feels right — we are choosing it because three quarters of data say it is right.",
    },
    {
      phrase: 'THE EVIDENCE FOR THIS IS...',
      definition: 'A way to introduce facts that support your idea.',
      example: 'The evidence for this is a 34% rise in website traffic.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-the-evidence-for-this-is.png',
      inAction: 'The evidence for this recommendation is our Q2 A/B test — the new landing page outperformed the control by 28% in conversion rate across all three audience segments.',
      register: "Neutral — Lux (B2B legal SaaS, investor pitch): pitch deck reads the evidence for our market timing is the 40% increase in legal tech adoption since 2022 — driven by remote working, rising headcount costs, and regulatory complexity. | Arch (DTC supplements, board presentation): strategy update reads the evidence for the subscription model is our own data — subscription customers have a lifetime value 4x higher than one-time buyers and a churn rate of 8% vs 62% for single purchases. | Drift (B2B sales enablement, client QBR): proposal reads the evidence for this approach is the pilot — in the 6-week test, the 8 accounts we ran full ABM treatment on generated 3x more pipeline than the 30 accounts in the control group.",
      visualExamples: [
        { brand: 'Arch', context: 'DTC supplements — board strategy presentation', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-arch-evidence-subscription.png', caption: 'The evidence for the subscription model is our own data — subscriber LTV is 4x higher and churn is 8% versus 62% for single purchases.', aspectRatio: '16/9' },
        { brand: 'Drift', context: 'B2B sales enablement — client QBR', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-drift-evidence-pilot.png', caption: 'The evidence for this approach is the pilot — 8 ABM accounts generated 3x more pipeline than 30 accounts in the control group.', aspectRatio: '16/9' },
      ],
      inContext: "The MD had interrupted mid-slide. 'That is a big claim — where is the evidence?' Riley had anticipated this. The evidence for this, she said, pulling up the next slide, is our own data from the last 12 months. Organic traffic has grown 34% and the cost per lead is 70% lower than paid. I am not asking you to take this on faith. I am asking you to approve a budget that the evidence already justifies.",
    },
    {
      phrase: 'MY RECOMMENDATION IS THAT WE...',
      definition: 'A direct way to say what you want to happen.',
      example: 'My recommendation is that we move 25% of the budget to LinkedIn.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-my-recommendation-is-that-we.png',
      inAction: 'My recommendation is that we pause the Instagram campaign and reallocate that budget to LinkedIn — the data from Q3 is unambiguous.',
      register: "Neutral — Corvo (B2B SaaS, board presentation): strategy deck conclusion reads my recommendation is that we move to an ABM-first model for enterprise accounts in H2 and reduce broad lead generation spend by 40%. | Bloom (DTC health, investor pitch): pitch conclusion reads my recommendation is that we raise a £3m Series A in Q1 to fund the product expansion and the US market entry plan outlined in this deck. | Tula (B2B operations platform, client proposal): proposal conclusion reads my recommendation is that we begin with a 90-day pilot covering three use cases — this limits your risk while generating the evidence needed to make the full business case internally.",
      visualExamples: [
        { brand: 'Corvo', context: 'B2B SaaS — board strategy presentation', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-corvo-recommendation-abm.png', caption: 'My recommendation is that we move to an ABM-first model for enterprise in H2 and reduce broad lead generation spend by 40%.', aspectRatio: '16/9' },
        { brand: 'Tula', context: 'B2B operations platform — client proposal', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-tula-recommendation-pilot.png', caption: 'My recommendation is that we begin with a 90-day pilot — limiting risk while building the internal business case for full implementation.', aspectRatio: '16/9' },
      ],
      inContext: "Riley had reached the final slide. She had walked the board through the objective, the evidence, and the rationale. Now it was time for the ask. My recommendation is that we reallocate 25% of the Q4 paid search budget to LinkedIn and run a structured 12-week test, she said clearly. I need a decision by the end of this week. The board chair looked around the table. Questions?",
    },
    {
      phrase: 'IN RESPONSE TO YOUR QUESTION...',
      definition: 'A polite way to start answering a question.',
      example: 'In response to your question, we will pause the test if it fails.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-in-response-to-your-question.png',
      inAction: "In response to your question — we tested this hypothesis in Q2 with a 6-week A/B test and the results are on the slide behind me.",
      register: "Neutral — Flint (B2B SaaS, board Q&A): board presentation transcript reads in response to your question about our international expansion timeline — we have modelled three scenarios, and the conservative case still delivers profitability within 18 months of market entry. | Croft (B2B HR platform, client proposal Q&A): proposal meeting transcript reads in response to your question about data security — we are ISO 27001 certified and every data processing agreement is governed by UK GDPR. | Riven (DTC fashion, investor Q&A): pitch Q&A transcript reads in response to your question about margin at scale — the unit economics at 50,000 annual orders put gross margin at 68%, which we can demonstrate from our current 12,000-order run rate.",
      visualExamples: [
        { brand: 'Flint', context: 'B2B SaaS — board strategy Q&A', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-flint-response-qa.png', caption: 'In response to your question about international expansion — the conservative scenario still delivers profitability within 18 months of market entry.', aspectRatio: '16/9' },
        { brand: 'Riven', context: 'DTC fashion — investor Q&A', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-riven-response-margin.png', caption: 'In response to your question about margin at scale — unit economics at 50,000 orders put gross margin at 68%, demonstrable from current run rate.', aspectRatio: '16/9' },
      ],
      inContext: "The CFO had asked a sharp question about the budget risk. Riley did not rush her answer. In response to your question, she said — there is a defined maximum spend threshold in the test structure. If the campaign does not hit the minimum performance benchmark at the six-week mark, we stop, analyse the data, and bring three options back to this room. We will not continue spending without evidence. The CFO nodded slightly. Marcus made a note.",
    },
    {
      phrase: 'THE KEY TAKEAWAY FROM THIS SECTION IS...',
      definition: 'A way to sum up the main point of a section.',
      example: 'The key takeaway from this section is that costs rose by 30%.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-the-key-takeaway-from-this-section-is.png',
      inAction: 'The key takeaway from this section is that our organic channel now generates more qualified leads than paid — at a fraction of the cost.',
      register: "Neutral — Mast (B2B software, client strategy presentation): slide reads the key takeaway from this section is that the current technology stack has four redundant tools — consolidating to our platform saves £180k annually and reduces the team's operational burden. | Aster (DTC beauty, investor pitch): pitch deck slide reads the key takeaway from this section is that 68% of our customers come from word of mouth — which means our cost of acquisition is structurally below the industry average. | Borealis (B2B logistics, QBR): review deck slide reads the key takeaway from this section is that the three initiatives we ran in Q3 all hit or exceeded their targets — which gives us the confidence to scale the Q4 plan.",
      visualExamples: [
        { brand: 'Mast', context: 'B2B software — client strategy presentation', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-mast-key-takeaway.png', caption: 'The key takeaway from this section is that four redundant tools in the current stack can be consolidated — saving £180k annually.', aspectRatio: '16/9' },
        { brand: 'Aster', context: 'DTC beauty — investor pitch', imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/presenting-a-marketing-strategy-aster-key-takeaway-cac.png', caption: 'The key takeaway from this section is that 68% of customers come from word of mouth — our cost of acquisition is structurally below industry average.', aspectRatio: '4/5' },
      ],
      inContext: "Riley finished the channel performance section and paused before moving to the next slide. The key takeaway from this section is this, she said: our cost per lead from paid search has increased 30% in 12 months while lead quality has declined. We are paying more and getting less. She clicked to the next slide. Which is exactly why we need to discuss a reallocation. The board was quiet. The takeaway had landed.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "Riley, you are presenting the Q4 marketing strategy to the board on Thursday. Marcus and I are going to play the board. Walk us through it as if it is the real thing.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Good morning, everyone. I would like to take you through the Q4 marketing strategy — I will cover the [[objective:the specific, measurable goal the strategy is designed to achieve]], the rationale, the channel plan, the budget, and the success metrics. I will take questions at the end.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good opening. Clear structure. Continue.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Our objective is to generate 600 qualified leads for the enterprise sales team by the end of Q4 at a cost per lead of under £35. Everything in this presentation is built to achieve that specific number. The [[executive summary:the short section at the beginning that gives the key points of the strategy]] on slide one summarises the full argument — situation, strategy, expected outcome.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "(Stopping her) Before you go further — what is the [[key takeaway:the most important point the audience should remember]] from the executive summary? State it explicitly.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The key takeaway from this section is that our current approach is generating leads at 40% above our target cost and we have a tested plan to fix that within one quarter.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Now the [[recommendation:the specific action or decision you are asking the audience to approve]]. Be direct.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "My recommendation is that we reallocate 25% of the paid search budget to LinkedIn for Q4 and run a structured 12-week test against three defined success metrics.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "(As board member) What is the [[rationale:the reasons behind the decision or recommendation]] for choosing LinkedIn over other channels?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The rationale behind this is audience behaviour and cost. 78% of our target buyers research solutions on LinkedIn. Our Q2 LinkedIn pilot delivered a cost per lead 35% lower than paid search. The [[evidence:data or research that supports the recommendation]] is on slide four — three quarters of comparative data.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "(As board member, sharply) What if the LinkedIn campaign does not perform?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "In response to your question — we have defined minimum performance thresholds at the six-week mark. If the campaign is not on track to hit the target cost per lead, we pause and bring three options back to the board. We will not continue spending without evidence of performance.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "(Out of role) That was a very strong [[Q&A:the question and answer section where the audience probes your recommendations]] response. You did not get defensive, you answered directly, and you showed the board that the plan has contingencies. Two things to improve — your [[slide:a single page in the presentation deck]] headlines. They should state conclusions, not topics. Change 'Q3 Performance' to 'Q3 performance fell 18% below target due to rising CPL in paid search'.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the second thing — every major claim needs evidence. You said the competition is losing ground. The board will immediately ask: how do you know? Have the data ready even if it does not go on the slide.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Noted. I will update the slide headlines and add the competitive data to my backup slides. The key takeaway from this rehearsal is: structure is strong, evidence needs to be tighter, and Q&A preparation is working.",
    },
  ],

  matchingExercise: [
    { word: 'executive summary', definition: 'the short opening section giving the key points — situation, strategy, and expected outcome' },
    { word: 'key takeaway', definition: 'the single most important point the audience should remember from a section or presentation' },
    { word: 'rationale', definition: 'the specific reasons behind a decision or recommendation' },
    { word: 'evidence', definition: 'data, research, or examples that support a claim or recommendation' },
    { word: 'recommendation', definition: 'the specific action or decision you are asking the audience to approve' },
    { word: 'objective', definition: 'the specific, measurable goal the strategy is designed to achieve' },
    { word: 'slide', definition: 'a single page in a presentation deck — each should make one clear point in the headline' },
    { word: 'Q&A', definition: 'the question and answer section where the audience probes your reasoning and evidence' },
  ],

  fillBlankExercise: [
    { before: 'I would like to take you', after: 'the Q4 strategy — I will cover the objective, the rationale, the plan, and the metrics.', answer: 'through' },
    { before: 'My', after: 'is that we reallocate 25% of the paid search budget to LinkedIn for a 12-week test.', answer: 'recommendation' },
    { before: 'The evidence for this is', after: '— three quarters of data showing LinkedIn CPL is 35% lower than paid search for our ICP.', answer: 'clear' },
    { before: 'In response to your', answer: 'question', after: '— we have defined minimum performance thresholds at the six-week mark.' },
    { before: 'The key', after: 'from this section is that our cost per lead has increased 30% while lead quality has declined.', answer: 'takeaway' },
    { before: 'The', after: 'behind choosing LinkedIn is audience behaviour — 78% of our buyers research solutions there.', answer: 'rationale' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Dana say about the executive summary?',
      options: ['It should be at least four slides to give the board enough context', 'It should be one slide covering three things — the situation, the strategy, and the expected outcome', 'It is optional if the presentation is short enough for the board to read in full'],
      correctIndex: 1,
    },
    {
      question: "How does Marcus say Riley's recommendation should be phrased?",
      options: ['It should include all the context and reasoning so the board can evaluate it fully', 'It should be direct — stating specifically what should happen, by when, and with what success metrics', 'It should present two or three options so the board can choose their preferred approach'],
      correctIndex: 1,
    },
    {
      question: "What is Dana's advice for slide headlines?",
      options: ['They should be short topic labels so they do not distract from the spoken presentation', "They should be complete sentences that state the conclusion — not topic labels like 'Q3 Performance'", 'They should use questions to engage the audience'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say about evidence during the practice session?',
      options: ['Every claim should be on the slide so the board can read it themselves', 'Every major claim needs evidence — even if it is in backup slides rather than the main deck', 'Evidence should be kept to a minimum so the presentation stays focused on strategy'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Think about the best presentation you have ever seen — at work, at school, or online. What made it effective? Was it the structure, the evidence, the delivery, or something else?',
      'Have you ever had to present an idea or recommendation to a senior person who challenged you with tough questions? How did you handle it and what would you do differently now?',
      'In your opinion, what is the most common mistake people make when presenting a strategy — too much detail, too little evidence, unclear recommendations, or something else?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The executive summary should be _____ enough to stand alone — even if the audience reads nothing else.',
        options: ['complete', 'completed', 'completing'],
        correctIndex: 0,
        explanation: "'Complete' is the adjective needed here — it modifies the noun phrase 'executive summary' and describes its quality. 'The executive summary should be complete' — meaning it contains all necessary information. 'Completed' is the past participle used as an adjective ('a completed task') but its meaning is 'finished' rather than 'containing everything needed'. 'Completing' is the present participle — it functions as a verb or adjective describing an ongoing action ('a completing process'), not a quality. 'Complete enough to stand alone' is a fixed professional expression.",
      },
      {
        sentence: 'If the board reads only the executive summary, they should still _____ what you are proposing and why.',
        options: ['understand', 'understanding', 'understood'],
        correctIndex: 0,
        explanation: "After 'should', always use the base form — 'should understand'. Modal verbs (should, could, would, might, must) are always followed by the base form of the main verb: 'should understand', 'should know', 'should be'. 'Understanding' without an auxiliary would be a gerund or present participle: 'understanding this is important' or 'they were understanding'. 'Understood' is past simple — correct for completed actions but not for a modal construction.",
      },
      {
        sentence: 'The rationale _____ choosing LinkedIn is audience behaviour — 78% of our target buyers research there.',
        options: ['behind', 'for', 'of'],
        correctIndex: 1,
        explanation: "Both 'behind' and 'for' work with 'rationale', but they have slightly different registers. 'The rationale for choosing LinkedIn' is the standard and most common collocation in professional English — 'rationale for' explains the justification for a decision or action. 'The rationale behind' is also correct and common ('the rationale behind this approach') — 'behind' implies a deeper or underlying reason. 'The rationale of' is grammatically unusual and rarely used in this context. Both 'for' and 'behind' are acceptable; 'for' is slightly more standard.",
      },
      {
        sentence: 'Every slide headline should state a conclusion, _____ just a topic.',
        options: ['not', 'instead', 'rather'],
        correctIndex: 0,
        explanation: "'Not' is the correct connector in this structure — 'not just a topic' contrasts with what the headline should be. 'Should state a conclusion, not just a topic' uses 'not' to introduce the negative contrast. 'Instead' would need to come at the beginning of a new clause or sentence ('...should state a conclusion. Instead of a topic label...'). 'Rather' would need 'than': 'rather than just a topic'. 'Not' is the simplest and most natural choice in this position — directly negating the second element of a contrast.",
      },
      {
        sentence: "In response _____ your question — we have performance thresholds that trigger a review at the six-week mark.",
        options: ['to', 'for', 'of'],
        correctIndex: 0,
        explanation: "'In response to' is a fixed phrase — always 'to', never 'for' or 'of'. 'In response to your question', 'in response to the feedback', 'in response to the board's concern' — 'to' is the fixed preposition in this expression. It is the standard formal phrase for opening an answer in a presentation or Q&A context. 'In response for' and 'in response of' are not standard English expressions.",
      },
      {
        sentence: 'The key takeaway from this section _____ that organic traffic now generates more leads than paid at a fraction of the cost.',
        options: ['is', 'are', 'was'],
        correctIndex: 0,
        explanation: "'Is' — present simple, singular. The subject is 'the key takeaway' — a singular noun. Even though 'from this section' comes between the subject and verb, the verb must agree with the subject, not with 'section'. 'The key takeaway is' — singular subject, singular verb. 'Are' would require a plural subject ('the key takeaways are'). 'Was' (past tense) would describe a past conclusion — but in a live presentation describing a current situation, present tense is appropriate.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the board member or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'You're recommending a 25% budget reallocation. That's a significant risk. What if it doesn't work?'",
          options: [
            "It is a risk, but all marketing investment carries risk. We cannot know for certain until we test it.",
            "We have managed that risk in three ways. First, we defined minimum performance thresholds before the test begins — if the LinkedIn campaign does not hit cost per lead targets at six weeks, we pause and reassess. Second, the 25% reallocation means 75% of the paid search budget is protected. Third, we have a contingency plan — three options ready to present to the board if the test underperforms. We are not asking you to take a blind risk. We are asking you to approve a structured test.",
            "The evidence strongly supports this recommendation. Based on our Q2 data, LinkedIn delivers a 35% lower cost per lead — the risk is actually lower than continuing with the current approach.",
          ],
          correctIndex: 1,
          explanation: "Option B is the strongest answer — it directly addresses the risk concern by explaining the three specific safeguards built into the plan. It shows that the presenter anticipated this question and has a structured response. It also reframes the ask: a structured test with contingencies, not a blind leap. Option A is too vague and passive — it acknowledges risk without addressing it. Option C is good (and would work as a supporting point) but it does not address the question directly. The board member asked about safeguards, not evidence of past performance.",
        },
        {
          customerLine: "'Your executive summary is four slides. Can you summarise the whole strategy in one sentence?'",
          options: [
            "The strategy involves a reallocation of paid search budget to LinkedIn, combined with new content assets, a revised email nurture sequence, and a structured ABM programme — all designed to reduce cost per lead and increase lead quality in Q4.",
            "We are reallocating 25% of the paid search budget to LinkedIn for a 12-week test — because the evidence shows it delivers a 35% lower cost per lead for our audience — with the goal of generating 600 qualified leads by the end of Q4.",
            "The strategy is designed to fix the cost per lead problem we identified in Q3 by changing our channel mix and improving the quality of our content and targeting.",
          ],
          correctIndex: 1,
          explanation: "Option B is best — it contains the what (reallocate 25% to LinkedIn), the why (35% lower cost per lead from evidence), and the goal (600 leads by end of Q4). This is a genuine one-sentence summary that a board member could repeat to a colleague. Option A lists tactics without summarising the strategic intent — it reads as a list, not a strategy. Option C is a goal statement, not a strategy summary — it describes the problem being solved but not what the strategy actually is.",
        },
        {
          customerLine: "I'm not convinced the evidence is strong enough. The Q2 pilot was only 6 weeks. Can you really extrapolate from that?",
          options: [
            "You are right that 6 weeks is a relatively short test window. But the Q2 pilot generated 847 leads and the LinkedIn cost per lead data is consistent across all three audience segments we tested — it is not a statistical outlier. I am not asking you to approve a full channel migration based on this data. I am asking you to approve a larger test with a proper measurement framework, which will give us the statistical confidence to make the full strategic recommendation.",
            "Six weeks is the standard test period in digital marketing. The results are valid.",
            "I understand the concern but the data is clear — LinkedIn significantly outperformed paid search across all metrics.",
          ],
          correctIndex: 0,
          explanation: "Option A is the strongest response because it acknowledges the limitation honestly, provides context that strengthens the validity of the data (consistent across three segments, not a statistical fluke), and reframes what is being asked — not a full commitment, but a larger structured test. It shows intellectual honesty and strategic maturity. Option B is dismissive — '6 weeks is standard' does not address the specific concern. Option C repeats the evidence without engaging with the critique of the evidence's limitations — this will frustrate a board member who has raised a legitimate methodological question.",
        },
      ],
    },
    spotTheMistake: {
      instructions: "Read this extract from Riley's strategy presentation practice. Three lines have a grammar mistake. Can you find them?",
      dialogue: [
        { speaker: 'Riley', text: "Good morning. I would like to take you through the Q4 marketing strategy." },
        { speaker: 'Riley', text: "Our objective is generating 600 qualified leads at a cost per lead of under £35 by the end of Q4." },
        { speaker: 'Board member', text: "What is the rationale for choosing LinkedIn?" },
        { speaker: 'Riley', text: "The rationale for this choice are audience behaviour and cost — LinkedIn CPL is 35% lower for our ICP." },
        { speaker: 'Board member', text: "And the evidence?" },
        { speaker: 'Riley', text: "The evidence is our Q2 pilot — 847 leads generated at a cost that was significant lower than paid search." },
        { speaker: 'Board member', text: "What if the test does not perform?" },
        { speaker: 'Riley', text: "In response to your question — we have defined minimum performance thresholds at the six-week mark. If the campaign underperforms, we stop and present three options to the board." },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'for this choice are',
          correction: 'for this choice is',
          explanation: "The subject of this sentence is 'the rationale' — singular. 'The rationale for this choice is audience behaviour and cost.' Even though 'for this choice' comes between the subject and verb, and even though two things are listed after the verb (audience behaviour AND cost), the verb agrees with the subject 'the rationale', not with the two-item list that follows. Compare: 'The reason is two things' (singular subject) vs 'Two things are the reason' (plural subject). The subject determines the verb form.",
        },
        {
          lineIndex: 5,
          incorrectText: 'was significant lower',
          correction: 'was significantly lower',
          explanation: "'Significantly' is the adverb needed to modify the adjective 'lower'. 'Significant' is an adjective — it modifies nouns ('a significant result', 'a significant difference'). To modify another adjective ('lower'), you need the adverb form: 'significantly lower', 'considerably lower', 'substantially lower'. This is a very common error — using the adjective form where an adverb is required. The rule: adjectives modify nouns; adverbs modify adjectives, verbs, and other adverbs.",
        },
        {
          lineIndex: 1,
          incorrectText: 'Our objective is generating',
          correction: 'Our objective is to generate',
          explanation: "With the noun 'objective' as the subject, the standard complement is the infinitive: 'our objective is to generate', 'the goal is to achieve', 'the aim is to reach'. The gerund ('is generating') is grammatically possible but less standard and slightly unusual in formal presentations — it sounds more like a description of an ongoing activity rather than a stated goal. In professional and formal English, 'our objective is to + base verb' is the preferred structure for stating goals and targets. Both forms are technically correct, but 'is to generate' is more professional.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The presenter starts a sentence. Work with your partner to finish it as you would in a real board presentation.',
      items: [
        {
          customerLine: "Open a strategy presentation to a senior leadership team — the first 60 seconds.",
          salespersonStart: "Good morning, everyone. I would like to take you through the Q4 marketing strategy —",
          suggestedCompletion: "I will cover four things: the objective, the rationale for our approach, the channel and budget plan, and the success metrics we will use to evaluate performance. I am planning to take questions at the end of each section, but if something is unclear as we go, please stop me. The presentation is 20 minutes — I want to leave at least 10 minutes for questions. Let me start with the objective, because everything else in this presentation only makes sense in relation to it.",
        },
        {
          customerLine: "A board member asks: 'Why this strategy and not a different one?'",
          salespersonStart: "The rationale behind this strategy is based on three things —",
          suggestedCompletion: "data, evidence, and timing. The data shows that our current approach is generating leads at 40% above our target cost — which means the current strategy is not working at the level we need. The evidence from our Q2 test shows that LinkedIn delivers a cost per lead 35% lower than paid search for our specific audience. And the timing is right — our key competitors have not yet adopted this approach in our sector, which gives us a window to gain ground. I am not recommending this because it is a popular channel. I am recommending it because our own data says it is the most efficient path to our objective.",
        },
        {
          customerLine: "What is the structure of a strong Q&A answer when you are challenged on your evidence?",
          salespersonStart: "When someone challenges your evidence, the worst response is to double down on the same claim —",
          suggestedCompletion: "the right response is to engage with the challenge directly. First, acknowledge what is true about the limitation they have identified — if the test was short, say so. Then provide context that strengthens the data — was it consistent across multiple segments? Did it replicate across different time periods? Then explain what the evidence is actually being used to support — are you asking for a full commitment or a larger test? And finally, if you genuinely do not have sufficient evidence, say so and explain what it would take to get it. Boards respect intellectual honesty far more than false confidence.",
        },
      ],
    },
  },
};
