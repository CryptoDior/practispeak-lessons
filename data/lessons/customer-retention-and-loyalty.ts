import { Lesson } from '@/types/lesson';

export const customerRetentionAndLoyalty: Lesson = {
  slug: 'customer-retention-and-loyalty',
  title: 'Customer Retention and Loyalty',
  subtitle: 'How to keep customers, reduce churn, and build programmes that turn one-time buyers into long-term advocates',
  level: 'B1-B2',
  description: "Acquiring a new customer costs five to seven times more than retaining an existing one. Yet most marketing investment goes into acquisition rather than retention. The brands that grow most sustainably are the ones that keep their customers coming back — through great products, smart loyalty programmes, and proactive communication that makes customers feel valued before they think about leaving. This lesson teaches you the essential vocabulary of customer retention and loyalty marketing.",
  heroImage: '/images/customer-retention-and-loyalty-hero.png',

  vocabulary: [
    {
      word: 'CHURN',
      partOfSpeech: 'noun / verb',
      definition: "The rate at which customers stop buying from a company or cancel their subscription. High churn means the company is losing customers.",
      example: "The company has a high churn rate because customers are cancelling after the first 90 days.",
      imageSlug: '/images/customer-retention-and-loyalty-churn.png',
    },
    {
      word: 'NPS',
      partOfSpeech: 'abbreviation',
      definition: "Net Promoter Score — a number that shows how loyal customers are. Customers rate from 0 to 10 how likely they are to recommend the company to a friend. Abbreviated as NPS.",
      example: "The company's NPS is 34, which means there is still work to do to improve customer loyalty.",
      imageSlug: '/images/nps.png',
    },
    {
      word: 'LOYALTY PROGRAMME',
      partOfSpeech: 'noun',
      definition: "A system that rewards customers for buying again — through points, discounts, or special access. It gives customers a reason to choose you instead of a competitor.",
      example: "The loyalty programme gives long-term customers early access to new products and a dedicated account manager.",
      imageSlug: '/images/loyalty-programme.png',
    },
    {
      word: 'LIFETIME VALUE',
      partOfSpeech: 'noun',
      definition: "The total amount of money a company expects to earn from one customer over the whole time they stay. Also called LTV.",
      example: "The average lifetime value of a customer is £4,200, so keeping customers longer has a big impact on revenue.",
      imageSlug: '/images/lifetime-value.png',
    },
    {
      word: 'RE-ENGAGEMENT',
      partOfSpeech: 'noun',
      definition: "The process of reconnecting with customers who have stopped buying or using the product — to bring them back before they leave completely.",
      example: "A re-engagement campaign was sent to customers who had not opened an email in three months.",
      imageSlug: '/images/re-engagement.png',
    },
    {
      word: 'RETENTION RATE',
      partOfSpeech: 'noun',
      definition: "The percentage of customers who continue to buy from a company over a period of time. A higher retention rate means more customers are staying.",
      example: "The 12-month retention rate improved from 61% to 70% after the new onboarding programme was launched.",
      imageSlug: '/images/retention-rate.png',
    },
    {
      word: 'WIN-BACK',
      partOfSpeech: 'noun / verb',
      definition: "A campaign to bring back customers who have already cancelled or stopped buying. Unlike re-engagement, win-back targets customers who have already left.",
      example: "A win-back campaign was sent to customers who cancelled in the last 12 months, showing them what had changed.",
      imageSlug: '/images/customer-retention-and-loyalty-win-back.png',
    },
    {
      word: 'ONBOARDING',
      partOfSpeech: 'noun',
      definition: "The process of helping new customers get started and reach their first result quickly. Good onboarding makes customers much less likely to leave.",
      example: "The company redesigned its onboarding to help new customers see results in their first week.",
      imageSlug: '/images/customer-retention-and-loyalty-onboarding.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE NEED TO REDUCE CHURN BY...',
      definition: "A phrase for setting a specific target to lose fewer customers. Always include a number — a percentage, a number of customers, or a revenue amount.",
      example: "We need to reduce churn by 1.5 percentage points by the end of Q4.",
      imageSlug: '/images/we-need-to-reduce-churn-by.png',
      inAction: 'We need to reduce churn by 1.5 percentage points — that is the difference between growing the business and running to stand still.',
      register: "Neutral — Flux (B2B SaaS subscription, commercial review): board presentation reads we need to reduce churn by 2 percentage points in H2 — at current ARR, that represents £1.4 million in protected revenue. | Kora (DTC vitamin subscription, retention team): weekly brief reads we need to reduce churn by 15% among customers in their first 60 days — the onboarding sequence redesign is the primary lever. | Arch (B2B legal platform, customer success team): QBR reads we need to reduce churn by targeting the 200 accounts in the 6-18 month danger zone with a proactive value review before they reach renewal.",
      visualExamples: [
        { brand: 'Flux', context: 'B2B SaaS subscription — commercial board review', imageSlug: '/images/visual-examples/flux-churn-reduction.png', caption: 'We need to reduce churn by 2 percentage points in H2 — at current ARR, that represents £1.4 million in protected annual revenue.', aspectRatio: '16/9' },
        { brand: 'Kora', context: 'DTC vitamin subscription — retention team', imageSlug: '/images/visual-examples/kora-churn-onboarding.png', caption: 'We need to reduce churn by 15% in the first 60 days — the onboarding sequence redesign is the primary lever being tested.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus had the churn data on screen. We need to reduce churn by 1.5 percentage points, he said — that is not an ambition, it is a commercial necessity. At our current ARR, every percentage point of monthly churn represents approximately £800k in lost annual revenue. Dana had the breakdown: the biggest opportunity is months two and three. That is where we are losing the most customers and where the onboarding fix will have the biggest impact.",
    },
    {
      phrase: 'THE LIFETIME VALUE OF THIS CUSTOMER SEGMENT IS...',
      definition: "A phrase for presenting the total revenue expected from a specific group of customers. Always give a specific number.",
      example: "The lifetime value of the enterprise customer segment is approximately £18,000.",
      imageSlug: '/images/the-lifetime-value-of-this-segment-is.png',
      inAction: 'The lifetime value of this customer segment is £9,400 — which means the cost of a dedicated account manager at £35k per year is justified if they retain 4 customers who would otherwise have churned.',
      register: "Neutral — Halo (DTC skincare subscription, commercial team): monthly review reads the lifetime value of the subscription segment is 4x the lifetime value of one-time buyers — which makes a retention-focused loyalty programme the highest-ROI investment available to us. | Crest (B2B compliance SaaS, finance team): annual planning reads the lifetime value of our financial services customers is £22,000 on average — 3x our overall average, which justifies a dedicated vertical team and custom onboarding track. | Bloom (DTC health supplements, growth team): board presentation reads the lifetime value of customers acquired through referral is 28% higher than those acquired through paid search — which is the business case for our new referral programme.",
      visualExamples: [
        { brand: 'Halo', context: 'DTC skincare subscription — commercial review', imageSlug: '/images/visual-examples/halo-ltv-subscription.png', caption: 'The lifetime value of the subscription segment is 4x the one-time buyer segment — making retention investment the highest-ROI option available.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC health supplements — board presentation', imageSlug: '/images/visual-examples/bloom-ltv-referral.png', caption: 'The lifetime value of referral-acquired customers is 28% higher than paid search — the business case for investing in the referral programme.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus put the LTV numbers on the table. The lifetime value of the enterprise segment is £18,000, he said. Riley looked at the SME number: and SME is £2,400. Dana did the maths out loud: so retaining one enterprise customer is worth retaining seven and a half SME customers. The room was quiet for a moment. Marcus replied: Which means the enterprise retention plan should get seven and a half times the resource. Let us start there.",
    },
    {
      phrase: 'WE SHOULD RUN A RE-ENGAGEMENT CAMPAIGN FOR...',
      definition: "A phrase for proposing a campaign to reconnect with inactive customers. Always say who the campaign is for and why they are at risk.",
      example: "We should run a re-engagement campaign for customers who have not logged in for 45 days.",
      imageSlug: '/images/we-should-run-a-re-engagement-campaign.png',
      inAction: 'We should run a re-engagement campaign for customers who have not made a second purchase within 60 days — statistically these are the highest churn risk.',
      register: "Neutral — Ritual Box (wellness subscription, retention team): CRM brief reads we should run a re-engagement campaign for the 1,200 subscribers who have paused their subscription in the last 90 days — the message is what they have been missing and a one-click resume option. | Gloss (DTC beauty, email team): campaign brief reads we should run a re-engagement campaign for customers who have not opened an email in 90 days — start with a subject line about them, not us. | Prism (B2B analytics, customer success): account review reads we should run a re-engagement campaign for the 45 accounts whose weekly active users have dropped by more than 50% — a product specialist call before they reach renewal.",
      visualExamples: [
        { brand: 'Ritual Box', context: 'Wellness subscription — CRM and retention team', imageSlug: '/images/visual-examples/ritual-box-reengage.png', caption: 'We should run a re-engagement campaign for paused subscribers — the message is what they have been missing and a one-click resume option.', aspectRatio: '4/5' },
        { brand: 'Prism', context: 'B2B analytics — customer success team', imageSlug: '/images/visual-examples/prism-reengage-usage.png', caption: 'We should run a re-engagement campaign for accounts where weekly active users dropped 50% — a specialist call before they reach renewal.', aspectRatio: '16/9' },
      ],
      inContext: "Riley pulled up the usage data. We should run a re-engagement campaign for the customers in the 6 to 18 month bracket who have dropped below a usage threshold, she said. Dana had the numbers: 340 accounts, representing about £1.2m in ARR at risk. Marcus: Those accounts go to the top of the customer success queue. But let us make sure the first message is value, not panic. They should feel like we noticed they were quiet, not that we are worried about the renewal.",
    },
    {
      phrase: 'OUR NPS SHOWS THAT...',
      definition: "A phrase for sharing a specific insight from Net Promoter Score data. Always follow with a clear finding — a score, a trend, or a pattern.",
      example: "Our NPS shows that customers who complete the full onboarding programme are much more likely to stay.",
      imageSlug: '/images/our-nps-shows-that.png',
      inAction: 'Our NPS shows that Promoters are concentrated among customers who have completed the advanced onboarding track — which tells us what the programme is missing for everyone else.',
      register: "Neutral — Velo (B2B fleet SaaS, commercial review): board update reads our NPS shows that customers using the mobile app daily score 22 points higher than desktop-only users — which is the business case for the mobile-first product roadmap. | Kora (DTC subscription, marketing team): monthly review reads our NPS shows that customers who have made three or more purchases score 18 points higher than two-purchase customers — the third purchase is the loyalty threshold. | Bolt (B2B HR platform, customer success): QBR reads our NPS shows that our Detractors almost all share one characteristic — they did not complete the onboarding programme. This is a training problem, not a product problem.",
      visualExamples: [
        { brand: 'Velo', context: 'B2B fleet SaaS — commercial board review', imageSlug: '/images/visual-examples/velo-nps-mobile.png', caption: 'Our NPS shows that daily mobile app users score 22 points higher than desktop-only users — the business case for the mobile-first product roadmap.', aspectRatio: '16/9' },
        { brand: 'Bolt', context: 'B2B HR platform — customer success QBR', imageSlug: '/images/visual-examples/bolt-nps-detractors.png', caption: 'Our NPS shows that Detractors almost all share one characteristic — they did not complete the onboarding programme.', aspectRatio: '16/9' },
      ],
      inContext: "Dana had run the NPS analysis before the retention review. Our NPS shows that the Promoters and Detractors are almost perfectly split by onboarding completion, she said. Customers who completed the full programme score an average of 8.9. Customers who did not score 5.2 on average. Marcus leaned forward: So fixing onboarding is not just a retention initiative — it is an NPS initiative and a revenue initiative all at once. Riley: It is the single highest-leverage thing we can do.",
    },
    {
      phrase: 'THE LOYALTY PROGRAMME IS DESIGNED TO...',
      definition: "A phrase for explaining the purpose of a loyalty programme — what behaviour it encourages and what result it will deliver for the business.",
      example: "The loyalty programme is designed to increase purchase frequency and turn satisfied customers into referrers.",
      imageSlug: '/images/the-loyalty-programme-is-designed-to.png',
      inAction: 'The loyalty programme is designed to reward depth of engagement, not just spend — because our most engaged customers have the highest lifetime value and are our best source of referrals.',
      register: "Neutral — Halo (DTC skincare, marketing team): programme design brief reads the loyalty programme is designed to increase purchase frequency among the 30% of customers who buy once and never return — the first goal is to get them to a second purchase within 60 days. | Crest (B2B compliance SaaS, commercial team): programme proposal reads the loyalty programme is designed to increase our net revenue retention above 100% — by rewarding customers who expand their usage with priority support and co-development access. | Ember (meal kit subscription, retention team): programme update reads the loyalty programme is designed to reduce voluntary churn by creating exit barriers that feel like benefits — the longer you stay, the more you have built inside the programme.",
      visualExamples: [
        { brand: 'Halo', context: 'DTC skincare — loyalty programme design', imageSlug: '/images/visual-examples/halo-loyalty-frequency.png', caption: 'The loyalty programme is designed to increase purchase frequency — the goal is getting the 30% of one-time buyers to a second purchase within 60 days.', aspectRatio: '4/5' },
        { brand: 'Ember', context: 'Meal kit subscription — retention programme', imageSlug: '/images/visual-examples/ember-loyalty-exit-barriers.png', caption: 'The loyalty programme is designed to create exit barriers that feel like benefits — the longer you stay, the more you have built inside the programme.', aspectRatio: '16/9' },
      ],
      inContext: "Riley walked the team through the loyalty programme proposal. The loyalty programme is designed to do three specific things, she said — increase purchase frequency in year one, deepen engagement in year two, and convert long-term customers into advocates in year three and beyond. Marcus asked: How do the rewards map to those three goals? Riley: That is the key design question. The rewards in each tier are chosen because they drive the specific behaviour we want — not because they are cheapest or most popular.",
    },
    {
      phrase: 'WE ARE TARGETING A RETENTION RATE OF...',
      definition: "A phrase for stating a specific retention goal. Always give the percentage and the timeframe.",
      example: "We are targeting a retention rate of 78% at 12 months, up from 61% currently.",
      imageSlug: '/images/we-are-targeting-a-retention-rate-of.png',
      inAction: 'We are targeting a retention rate of 85% at 12 months — which would put us in the top quartile for our sector and add approximately £1.8m to annual recurring revenue.',
      register: "Neutral — Flux (B2B SaaS, commercial planning): annual plan reads we are targeting a retention rate of 90% at 12 months — the industry top quartile — which requires reducing churn from 4.2% to 0.9% monthly through a combination of onboarding, CS intervention, and product improvement. | Kora (DTC subscription, growth team): quarterly brief reads we are targeting a retention rate of 70% at 6 months, up from 52% — the onboarding redesign and the loyalty programme are the two main levers. | Prism (B2B analytics, board presentation): board update reads we are targeting a net revenue retention rate of 110% — meaning we want existing customer revenue to grow by 10% annually through expansion, upsell, and reduced churn.",
      visualExamples: [
        { brand: 'Flux', context: 'B2B SaaS — commercial annual planning', imageSlug: '/images/visual-examples/flux-retention-target.png', caption: 'We are targeting a retention rate of 90% at 12 months — the industry top quartile — requiring churn to drop from 4.2% to 0.9% monthly.', aspectRatio: '16/9' },
        { brand: 'Prism', context: 'B2B analytics — board strategy update', imageSlug: '/images/visual-examples/prism-net-revenue-retention.png', caption: 'We are targeting a net revenue retention rate of 110% — existing customer revenue growing 10% annually through expansion and reduced churn.', aspectRatio: '16/9' },
      ],
      inContext: "Marcus put the target on the table. We are targeting a retention rate of 78% at 12 months, he said. Dana looked at the current number: that is 17 points from where we are. Marcus: Yes. And at our current ARR, those 17 points represent approximately £2.3 million in protected annual revenue. Riley had done the calculation: which means if we invest £400k in the retention programme and hit the target, the return is nearly 6 to 1. The business case is straightforward.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Let us open the Q3 retention review. We have the headline number — monthly [[churn:the rate at which customers stop buying or cancel their subscription]] is at 4.2%. That is well above our benchmark of 2.5%. Riley, what are the drivers?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Three main drivers. First, weak [[onboarding:the process of introducing new customers and helping them reach their first success quickly]] — exit surveys show customers who churn in months two and three overwhelmingly say they never got enough value from the product to justify continuing. Second, no proactive contact in the 6 to 18 month window — which is when satisfaction drops most sharply. Third, no [[re-engagement:the process of reconnecting with customers who have become disengaged]] programme for customers who stop using the product.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Our [[NPS:Net Promoter Score — a measure of customer loyalty based on likelihood to recommend]] data supports that. Our NPS shows that Promoters and Detractors are almost entirely split by onboarding completion. Customers who completed the full programme score 8.9 on average. Those who did not score 5.1.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So fixing onboarding is simultaneously a retention, NPS, and [[lifetime value:the total revenue expected from a single customer over their entire relationship]] initiative. What does the business case look like?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Our average LTV is £4,200. Our [[retention rate:the percentage of customers who remain over a given period]] is 61% at 12 months — industry benchmark is 78%. If we close that gap to 70%, we protect approximately £1.8 million in annual revenue. We are targeting a retention rate of 78% within 18 months.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "We also need to reduce churn by addressing the specific segments where it is highest. The 6 to 18 month segment has a churn rate of 6.1% — we need to reduce churn by at least 2 percentage points there.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What are the three main initiatives?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "One — redesign onboarding to get customers to their first meaningful result within 14 days. Two — we should run a re-engagement campaign for the 600 customers showing early warning signs of disengagement — low usage, email inactivity. Three — launch a [[loyalty programme:a structured system that rewards customers for repeat purchases or continued engagement]] to recognise and reward our longest-tenured customers.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "On the loyalty programme — the loyalty programme is designed to drive three behaviours: increase purchase frequency, deepen product engagement, and convert our best customers into advocates. The lifetime value of this customer segment — our top 20% — is £9,200 on average, which justifies significant investment in keeping them.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[win-back:a campaign to bring back former customers who have already cancelled or stopped purchasing]] programme? We have a cohort of customers who left in the last 12 months.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "580 customers churned in the last 12 months. Our win-back campaign will target the 300 who left for reasons we can address — pricing, missing features, or poor onboarding. Not the ones who left because the product is genuinely a poor fit. We personalise the message based on exit reason. No blanket discounts.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The win-back message is: here is what has changed since you left. Features added, improvements made, customers like them who are now successful. The ask is not to buy again immediately — it is to have a 20-minute call to see if the product now fits their needs.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Retention plan is approved. We are targeting a retention rate of 78% at 12 months, a churn reduction of 1.5 percentage points by Q4, and an NPS improvement of 10 points by end of year. Those are the three metrics we report against monthly.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Agreed. I will have the detailed implementation plan for the onboarding redesign ready by Friday, the re-engagement campaign brief by end of next week, and the loyalty programme proposal for review in two weeks.",
    },
  ],

  matchingExercise: [
    { word: 'churn', definition: 'the rate at which customers stop buying or cancel — the inverse of retention rate' },
    { word: 'NPS', definition: 'Net Promoter Score — a measure of loyalty based on likelihood to recommend' },
    { word: 'loyalty programme', definition: 'a structured system of rewards for repeat purchases or continued engagement' },
    { word: 'lifetime value', definition: 'the total revenue expected from a single customer over the entire relationship' },
    { word: 're-engagement', definition: 'reconnecting with customers who have become inactive before they churn completely' },
    { word: 'retention rate', definition: 'the percentage of customers who continue buying over a given period' },
    { word: 'win-back', definition: 'a campaign to bring back former customers who have already cancelled or left' },
    { word: 'onboarding', definition: 'introducing new customers to the product and helping them reach their first result quickly' },
  ],

  fillBlankExercise: [
    { before: 'We need to reduce', after: 'by 1.5 percentage points — from 4.2% to 2.7% — by the end of Q4.', answer: 'churn' },
    { before: 'The', after: 'value of our enterprise segment is £18,000 — 7.5 times the SME average.', answer: 'lifetime' },
    { before: 'Our NPS shows that customers who complete the onboarding programme score 8.9 — compared to 5.1 for those who', answer: 'do not', after: '.' },
    { before: 'We should run a re-engagement campaign for the 600 customers who have not logged in for 45 days — these are high', after: 'risk.', answer: 'churn' },
    { before: 'We are targeting a', after: 'rate of 78% at 12 months — up from 61% currently.', answer: 'retention' },
    { before: 'The loyalty programme is designed to reward engagement, not just', answer: 'spend', after: '— because engaged customers have the highest lifetime value.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does the NPS data show about the split between Promoters and Detractors?',
      options: ['Promoters are mostly enterprise customers and Detractors are mostly SME customers', 'Promoters and Detractors are split almost entirely by whether they completed the onboarding programme', 'Promoters are customers in their first year and Detractors are customers who have been with the company for more than three years'],
      correctIndex: 1,
    },
    {
      question: "According to Riley's business case, what is the revenue impact of improving retention from 61% to 70%?",
      options: ['Approximately £4.2 million in new customer acquisition savings', 'Approximately £1.8 million in protected annual revenue', 'Approximately £9,200 in additional LTV per enterprise customer'],
      correctIndex: 1,
    },
    {
      question: 'How does Riley say the win-back campaign should be personalised?',
      options: ['All churned customers receive the same message with a time-limited discount offer', 'The message is personalised based on the reason the customer left — pricing, missing features, or poor onboarding', 'Only customers who left in the last 6 months receive a win-back message'],
      correctIndex: 1,
    },
    {
      question: 'What are the three metrics Marcus says the team will report against monthly?',
      options: ['Total customers, monthly revenue, and NPS score', 'Retention rate at 12 months, churn reduction of 1.5 points, and NPS improvement of 10 points', 'Win-back rate, re-engagement response rate, and onboarding completion rate'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Think about a brand you have been loyal to for a long time. What keeps you coming back — the product, the price, the service, or the way they make you feel? Has the brand done anything specific to keep you?',
      'Have you ever cancelled a subscription or stopped buying from a company? What made you leave — and did the company do anything to try to keep you or win you back?',
      'If you were a customer of your own company or the company you work for, what would make you stay as a loyal customer for many years? And what would make you leave?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'A 4.2% monthly churn rate means the company _____ approximately half its customer base every year.',
        options: ['loses', 'is losing', 'lost'],
        correctIndex: 0,
        explanation: "Simple present ('loses') is correct for stating a mathematical or predictable consequence — the sentence describes what a specific churn rate mathematically implies, not a specific event happening right now. 'A 4.2% monthly churn rate means the company loses...' describes a general truth derived from the calculation. 'Is losing' (present continuous) would describe an active, ongoing observation rather than a calculated consequence. 'Lost' (past simple) would describe a past, completed event. When describing what a rate or percentage implies or means mathematically, simple present is standard.",
      },
      {
        sentence: 'Customers who reach their first meaningful result _____ in their first two weeks are far less likely to churn.',
        options: ['early', 'quickly', 'soon'],
        correctIndex: 1,
        explanation: "'Quickly' is the most precise adverb here — it describes the speed with which the result is reached. 'Reach their first result quickly' means getting there in a short time, with speed and efficiency. 'Early' is also natural and correct — 'reach their first result early' means getting there sooner rather than later in the customer journey. Both 'quickly' and 'early' work; 'quickly' refers to speed, 'early' refers to timing in a sequence. 'Soon' refers to time from now (a future reference) — 'I will do it soon' — and would be unusual as a modifier for 'reach their first result' in this context.",
      },
      {
        sentence: 'The win-back campaign is _____ at customers who left in the last 12 months and whose reason for leaving we can address.',
        options: ['targeted', 'targeting', 'targets'],
        correctIndex: 0,
        explanation: "'Targeted' — past participle used as an adjective to describe what kind of campaign this is. 'A targeted campaign' or 'the campaign is targeted at...' — 'targeted' describes the defining characteristic of the campaign. 'Targeting' (present participle) would work as part of a reduced relative clause: 'the campaign targeting customers who left' — but in the structure 'the campaign is _____ at', you need the adjective/past participle form. 'Targets' would be a verb in a separate clause: 'the campaign targets customers' — but in this sentence, it cannot follow 'is'.",
      },
      {
        sentence: 'The loyalty programme _____ customers to buy more frequently by rewarding repeat purchases with increasing benefits.',
        options: ['encourages', 'is encouraging', 'encouraged'],
        correctIndex: 0,
        explanation: "Simple present ('encourages') describes how the programme works as a general truth or characteristic. 'The loyalty programme encourages customers...' — this is a present statement of how the programme functions. 'Is encouraging' (present continuous) would suggest a temporary or currently ongoing action — loyalty programmes are not temporary actions, they are ongoing systems described by simple present. 'Encouraged' (past simple) would describe a past, completed event — inappropriate for describing a current programme's designed function.",
      },
      {
        sentence: 'Re-engagement campaigns are different _____ win-back campaigns — one targets customers still with you, the other targets customers who have left.',
        options: ['from', 'than', 'to'],
        correctIndex: 0,
        explanation: "'Different from' is the standard British English phrase. 'Different from' introduces the thing being compared: 'X is different from Y'. In American English, 'different than' is also common, but in British professional English, 'different from' is preferred. 'Different to' is also used in informal British English ('it is different to what I expected') but 'different from' is more formal and standard in written business English. Never 'different than' in formal British contexts.",
      },
      {
        sentence: 'Our NPS of 34 puts _____ in the average range for our sector — but the target is the top quartile.',
        options: ['us', 'we', 'our'],
        correctIndex: 0,
        explanation: "'Us' is the object pronoun — it is the object of the verb 'puts'. 'Our NPS puts us in the range' — the NPS is doing the putting (subject), and 'us' is what is being placed in that position (object). 'We' is the subject pronoun — it would be the subject of a verb: 'we are in the average range'. 'Our' is a possessive adjective — it modifies a noun: 'our company', 'our score'. The structure 'puts [object] in [position]' requires an object pronoun: 'puts us', 'puts them', 'puts the company'.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'Our churn is high but we can't figure out why. What should we do?'",
          options: [
            "Run a win-back campaign immediately to bring back the customers who have left — that is the quickest way to address the revenue impact.",
            "Before building any interventions, you need to understand the specific reasons customers are leaving. The three fastest ways to get that data are: exit surveys at the point of cancellation, interviews with churned customers 30 days after they leave, and NPS analysis to identify what Detractors have in common. Once you know the primary churn drivers, the solution usually becomes obvious. Building retention initiatives before you know why customers leave is guesswork.",
            "The most common reason for high churn is poor product-market fit. Have you considered whether the product is right for the market?",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it identifies the diagnostic step that must come before any intervention. High churn has many possible causes (onboarding, product gaps, pricing, competition, wrong customer fit) and the intervention should match the cause. Option A jumps to a tactic (win-back) before understanding the problem — win-back is useful but it does not address why customers are leaving in the first place. Option C makes a product-market fit assumption without evidence — this may be true but it is too large a conclusion to draw without data.",
        },
        {
          customerLine: "'We want to launch a loyalty programme. Should we use a points system?'",
          options: [
            "Points systems are the most popular type of loyalty programme, so yes — customers are familiar with how they work and they are easy to manage.",
            "Points systems work well for transaction-heavy businesses like retail or coffee shops where frequent small purchases make accumulating points feel rewarding. For B2B or less frequent purchase contexts, a tiered recognition programme based on relationship depth — access, status, co-creation — is often more powerful than points. The question to ask first is: what behaviour do you want the programme to reward, and what does your customer value most? The structure should follow the answer to those two questions, not the other way round.",
            "Points systems are outdated. Modern loyalty programmes use community and exclusivity to drive loyalty.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it starts from the strategic question (what behaviour and what the customer values) rather than prescribing a format. It also correctly identifies when points systems work well (high-frequency, transactional) versus when they do not. This is the kind of expert, context-sensitive answer that builds trust. Option A is lazy — 'most popular' is not a strategic rationale. Option C dismisses points systems as outdated — which is an overstatement — and does not provide a useful framework.",
        },
        {
          customerLine: "'Our NPS is 34. Is that good?'",
          options: [
            "NPS of 34 is a positive score — anything above 0 means you have more Promoters than Detractors, which is good.",
            "34 is above 0, which means more Promoters than Detractors — which is positive. But the most useful context is your sector benchmark. In many B2B software sectors, a score of 34 is around the median, with top-quartile companies typically scoring above 50. What is more important than the absolute number is the trend — is it improving or declining? And the composition — where are your Detractors, what do they have in common, and what specific interventions are being tested? An NPS of 34 with a clear improvement plan is healthier than an NPS of 55 with no understanding of what is driving it.",
            "34 is below the global average NPS of 43, so there is work to do. You should aim for at least 50.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it gives full context (benchmark matters more than absolute number), redirects to trend and composition (which are more actionable), and avoids both false reassurance and unnecessary alarm. Option A is too simple — 'above 0 is good' ignores sector context entirely. Option C cites a 'global average NPS of 43' which is not a meaningful benchmark (NPS varies enormously by sector) and the advice to 'aim for 50' without context is unhelpful.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the customer retention meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Our monthly churn rate is 4.2% — significantly above the industry benchmark of 2.5%." },
        { speaker: 'Riley', text: "The main driver are weak onboarding — customers are not reaching a meaningful first result quickly enough." },
        { speaker: 'Dana', text: "Our NPS shows that Promoters and Detractors are split almost entirely by onboarding completion." },
        { speaker: 'Marcus', text: "If we improve the onboarding programme, we should see both churn and NPS improve simultaneous." },
        { speaker: 'Riley', text: "We are also planning to run a re-engagement campaign for the 600 customers who has not logged in for 45 days." },
        { speaker: 'Dana', text: "And a win-back campaign for the 300 churned customers whose reason for leaving we can address." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The main driver are',
          correction: 'The main driver is',
          explanation: "'Driver' is singular — 'the main driver is'. Even though 'weak onboarding' (which follows) might feel like it could be plural, the subject of the sentence is 'the main driver' — singular. Subject-verb agreement is determined by the subject, not by what comes after the verb. Compare: 'The main driver is weak onboarding' (singular subject) vs 'The main drivers are weak onboarding and lack of proactive contact' (plural subject). Identify the subject first, then match the verb.",
        },
        {
          lineIndex: 3,
          incorrectText: 'improve simultaneous',
          correction: 'improve simultaneously',
          explanation: "'Simultaneously' is the adverb needed to modify the verb 'improve'. 'Improve simultaneously' means to improve at the same time. 'Simultaneous' is an adjective — it modifies nouns: 'a simultaneous improvement', 'simultaneous changes'. You cannot use an adjective to modify a verb. The adverb 'simultaneously' is required. Common pattern: adjective → adverb: simultaneous → simultaneously, significant → significantly, immediate → immediately.",
        },
        {
          lineIndex: 4,
          incorrectText: 'customers who has not',
          correction: 'customers who have not',
          explanation: "The relative pronoun 'who' refers to 'customers' — which is plural. Therefore the verb must be plural too: 'customers who have not'. 'Has not' (third person singular) would be correct for a singular subject: 'the customer who has not'. When 'who' is a relative pronoun, it agrees with its antecedent (the noun it refers to). 'Customers' is plural → 'customers who have'. 'The customer' is singular → 'the customer who has'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "The MD says: 'Why should we invest in retention when we could spend the same money getting new customers?'",
          salespersonStart: "Acquiring a new customer costs five to seven times more than retaining an existing one —",
          suggestedCompletion: "so from a pure return-on-investment perspective, retention is almost always the more efficient use of marketing budget. But the case goes further than that. Retained customers spend more over time — their lifetime value grows as they deepen their use of the product and add new services. They also refer new customers, which brings in acquisition at close to zero cost. And the revenue from retained customers is predictable — which makes the business more stable and more attractive to investors. New customer acquisition is essential for growth, but if churn is high, you are filling a bucket with a hole in it. Fix the hole first.",
        },
        {
          customerLine: "Write the first two sentences of a re-engagement email to a customer who has not logged in for 45 days.",
          salespersonStart: "We noticed you have been quiet lately —",
          suggestedCompletion: "and we wanted to reach out, not to sell you something, but to make sure you are getting the value from your account that you signed up for. In the last 45 days, three features that are particularly relevant to what you were trying to achieve have been updated — we think they will make a real difference, and we would love to show you how in a 15-minute call or a quick walkthrough.",
        },
        {
          customerLine: "How do you design a loyalty programme that creates genuine emotional loyalty rather than just transactional loyalty?",
          salespersonStart: "The difference between emotional and transactional loyalty is whether the customer would miss you if you were gone —",
          suggestedCompletion: "or whether they would just move to the next points programme without thinking twice. Transactional loyalty is driven by discounts, points, and incentives. Emotional loyalty is driven by recognition, belonging, and the sense that the brand sees you as an individual rather than a customer number. To design for emotional loyalty, the rewards should feel like recognition: early access to new things before the public, an invitation to co-create, a named case study that makes the customer feel valued and visible. The loyalty programme should make customers feel like insiders, not just buyers. That is the difference between a programme they tell their colleagues about and one they use mechanically.",
        },
      ],
    },
  },
};
