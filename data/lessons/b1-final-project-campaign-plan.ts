import { Lesson } from '@/types/lesson';

export const b1FinalProjectCampaignPlan: Lesson = {
  slug: 'b1-final-project-campaign-plan',
  title: 'B1 Final Project: Campaign Plan',
  subtitle: 'Apply everything you have learned to plan, present, and defend a full marketing campaign',
  level: 'B1-B2',
  description: "This is your capstone lesson — the final project for the B1-B2 marketing series. You will bring together vocabulary and concepts from across the series to build and present a complete marketing campaign plan. This lesson focuses on the language and structure of a campaign presentation: how to articulate your objective, defend your audience choice, justify your channel mix, and explain how you will measure success. You will practise the speaking skills needed to present with confidence in a real professional setting.",
  heroImage: '/images/b1-final-project-campaign-plan-hero.png',

  vocabulary: [
    {
      word: 'CAMPAIGN PLAN',
      partOfSpeech: 'noun',
      definition: 'A complete, documented strategy for a marketing campaign — including the objective, target audience, key message, channel mix, budget allocation, timeline, and success metrics. A campaign plan is the output of all the strategic decisions made before a campaign launches.',
      example: "Marcus reviewed Riley's document: This is a strong campaign plan — every section is clear and the decisions are justified. Riley asked: What makes a plan strong rather than just detailed? Marcus replied: A strong plan does not just say what you are doing — it says why. Every choice should be defensible. If someone asks why you chose LinkedIn over Instagram, you should have a clear answer based on data and audience insight, not instinct.",
      imageSlug: '/images/campaign-plan.png',
    },
    {
      word: 'OBJECTIVE',
      partOfSpeech: 'noun',
      definition: 'The specific, measurable goal of a campaign. A clear objective answers the question: what does success look like? Good objectives are SMART — specific, measurable, achievable, relevant, and time-bound. A campaign with a vague objective cannot be evaluated or improved.',
      example: "Marcus challenged Riley: Your objective says 'increase brand awareness'. That is too vague. Riley revised it: 'Increase brand awareness among UK-based marketing managers aged 28 to 45 by 20% — measured by brand recall survey — by the end of Q4.' Marcus replied: Now I know exactly what you are trying to achieve, how you will measure it, who you are targeting, and by when. That is a proper objective.",
      imageSlug: '/images/b1-final-project-campaign-plan-objective.png',
    },
    {
      word: 'TARGET AUDIENCE',
      partOfSpeech: 'noun',
      definition: 'The specific group of people the campaign is designed to reach. A target audience is defined by demographics (age, location, job title), psychographics (values, interests, motivations), and behaviours (how they buy, what they read, where they spend time online). The more specifically you define your audience, the more effective your campaign will be.',
      example: "Riley presented the audience profile: Our target audience is marketing managers and heads of marketing at B2B companies with 100 to 500 employees in the UK and Germany. They are responsible for campaign budgets of £50k to £500k per year. They are active on LinkedIn and read industry publications. Their biggest pain point is proving ROI on marketing spend to the board. Marcus said: A very specific audience profile. Now tell me why this audience and not a broader one.",
      imageSlug: '/images/b1-final-project-campaign-plan-target-audience.png',
    },
    {
      word: 'KEY MESSAGE',
      partOfSpeech: 'noun',
      definition: 'The single most important thing you want the audience to take away from the campaign. Every piece of creative, every ad, and every piece of content should communicate or support this central message. A campaign with a clear key message is focused and memorable.',
      example: "Marcus asked: What is your key message? Riley answered: 'Our platform saves marketing teams five hours a week — and shows them exactly which campaigns are driving revenue.' Marcus: Good — it is specific, it addresses a real pain point, and it is easy to remember. Now apply it consistently across every channel and every creative execution. If your email says something different from your landing page, you have a key message problem.",
      imageSlug: '/images/b1-final-project-campaign-plan-key-message.png',
    },
    {
      word: 'BUDGET ALLOCATION',
      partOfSpeech: 'noun',
      definition: "How a campaign's total budget is divided between different channels and activities. Budget allocation decisions should be based on the audience, the objective, and past performance data. Allocating budget well means putting the most money in the channels most likely to deliver the objective.",
      example: "Riley presented the budget allocation: Total budget is £50,000. I am allocating 45% to paid search, 30% to LinkedIn ads, 15% to email and content, and 10% held back for optimisation mid-campaign. Marcus asked: Why 45% to paid search? Riley: Because paid search captures high-intent traffic — people actively looking for a solution. It consistently gives us the lowest cost per lead. We lead with what works and use social for awareness and consideration.",
      imageSlug: '/images/budget-allocation.png',
    },
    {
      word: 'SUCCESS METRIC',
      partOfSpeech: 'noun',
      definition: "A specific, measurable number used to evaluate whether a campaign achieved its objective. Success metrics (also called KPIs — key performance indicators) might include: leads generated, cost per lead, conversion rate, return on ad spend, brand recall, or click-through rate. Without success metrics, you cannot know if the campaign worked.",
      example: "Marcus insisted: Every campaign needs defined success metrics before it launches — not after. Riley listed them: Our primary success metric is cost per qualified lead — target: under £35. Secondary metrics: number of leads (target: 500), conversion rate on the landing page (target: 3%), and click-through rate on paid ads (target: 2.5%). Marcus: Good. Three primary and three secondary metrics. Now we can evaluate performance at every stage and make decisions based on data.",
      imageSlug: '/images/b1-final-project-campaign-plan-success-metric.png',
    },
    {
      word: 'CHANNEL MIX',
      partOfSpeech: 'noun',
      definition: "The specific combination of channels chosen for a campaign — for example, paid search, LinkedIn ads, and email. The channel mix should be chosen based on where the target audience spends their time and which channels best support the campaign objective. Different channels serve different roles in the funnel.",
      example: "Riley justified the channel mix: I chose paid search, LinkedIn, and email. Paid search captures people who are actively searching for a solution — bottom of the funnel. LinkedIn reaches decision-makers at the right companies — top and middle of the funnel. Email nurtures existing contacts — bottom of the funnel. Marcus: Good reasoning. You have covered all funnel stages and chosen channels based on where the audience actually is.",
      imageSlug: '/images/b1-final-project-campaign-plan-channel-mix.png',
    },
    {
      word: 'CAMPAIGN TIMELINE',
      partOfSpeech: 'noun',
      definition: 'A schedule that shows when each stage of the campaign will happen — creative production, campaign launch, review and optimisation checkpoints, and final reporting. A clear timeline keeps the team on track and ensures the campaign launches when it needs to.',
      example: "Marcus reviewed the campaign timeline: I see the campaign launches in week three — what happens in weeks one and two? Riley explained: Week one is briefing the agency and finalising the creative. Week two is building the ad accounts, setting up tracking, and getting approvals. Week three is go-live. Then we have a two-week review at the end of week five before the month-two optimisation push. Marcus: Good — the pre-launch preparation is often underestimated. Most campaign delays happen before launch, not after.",
      imageSlug: '/images/campaign-timeline.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THE OBJECTIVE OF THIS CAMPAIGN IS TO...',
      definition: "The standard opening phrase for presenting a campaign plan. It introduces the specific, measurable goal of the campaign. Always follow with a clear, measurable statement — not a vague aspiration.",
      example: "Riley opened the campaign presentation: The objective of this campaign is to generate 500 qualified sales leads in Q4, at a cost per lead of no more than £35, targeting marketing managers at B2B companies with 100 to 500 employees in the UK. Marcus said: Perfect opening — specific, measurable, and audience-defined from the first sentence. That is how every campaign presentation should start.",
      imageSlug: '/images/objective-of-this-campaign-is.png',
    },
    {
      phrase: 'WE ARE TARGETING... BECAUSE...',
      definition: "A phrase for presenting and justifying your audience choice. The 'because' is critical — it shows that the targeting decision is based on reasoning (data, insight, strategic fit), not just instinct or assumption.",
      example: "Riley explained: We are targeting marketing managers and heads of marketing because they are the primary decision-makers for tools like ours, they have direct budget authority, and our data shows that 80% of our existing customers came from this exact job title and company size profile. Marcus replied: That is a data-backed audience choice. Always know why you are targeting who you are targeting.",
      imageSlug: '/images/we-are-targeting-because.png',
    },
    {
      phrase: 'WE CHOSE THIS CHANNEL BECAUSE...',
      definition: "A phrase for justifying your channel mix decisions in a presentation. Every channel choice should be defensible — based on where the audience is, the campaign objective, and past performance data.",
      example: "Riley justified the channel choice: We chose LinkedIn because our target audience — marketing managers and heads of marketing at B2B companies — are highly active on the platform, and our previous LinkedIn campaigns have delivered a cost per lead 30% lower than other social channels for this audience. Marcus replied: That is a properly justified channel choice. I do not want to hear 'everyone is on LinkedIn' — I want to hear data.",
      imageSlug: '/images/we-chose-this-channel-because.png',
    },
    {
      phrase: 'WE WILL MEASURE SUCCESS BY...',
      definition: "A phrase for presenting the success metrics of a campaign. It answers the question: 'How will we know if this worked?' Always specify the metric AND the target number.",
      example: "Riley concluded the plan: We will measure success by three metrics. First, cost per qualified lead — target under £35. Second, total leads generated — target 500 by end of Q4. Third, conversion rate on the landing page — target 3.5%. Marcus replied: Three metrics, three targets, all tied to the campaign objective. That is how you make a campaign evaluable. At the end of Q4, there will be no debate about whether this worked.",
      imageSlug: '/images/we-will-measure-success-by.png',
    },
    {
      phrase: 'THE BUDGET IS ALLOCATED AS FOLLOWS...',
      definition: "A phrase for presenting the breakdown of how a campaign budget is divided between channels and activities. 'Allocated as follows' introduces a structured list. Always justify the allocation — why each channel gets its share.",
      example: "Riley presented the budget: The budget is allocated as follows — 45% to paid search, 30% to LinkedIn, 15% to content and email, and 10% reserved for mid-campaign optimisation. The paid search allocation is highest because it has consistently delivered our lowest cost per lead. The reserve fund allows us to shift budget toward whichever channel is performing best once we have two weeks of live data.",
      imageSlug: '/images/budget-is-allocated-as-follows.png',
    },
    {
      phrase: "I WOULD LIKE TO TAKE YOU THROUGH THE CAMPAIGN PLAN",
      definition: "A polished opening phrase for a campaign presentation. 'Take you through' means to guide the audience through the content step by step. It sets a professional, structured tone from the start of the presentation.",
      example: "Riley opened the board presentation: Good morning, everyone. I would like to take you through the campaign plan for Q4. I will cover the objective, the target audience, the channel mix, the budget allocation, and the success metrics — and I am happy to answer questions as we go. Marcus thought: That is a confident, professional opening. It tells the audience exactly what they are about to hear and invites engagement.",
      imageSlug: '/images/take-you-through-the-campaign-plan.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good morning, Marcus. I would like to take you through the [[campaign plan:a complete documented strategy including objective, audience, channels, budget, and metrics]] for the Q4 product launch campaign.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Go ahead — and I will interrupt if I have questions. Start with the objective.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The [[objective:the specific, measurable goal of a campaign]] of this campaign is to generate 500 qualified leads for the sales team by the end of Q4, at a cost per lead of no more than £35. Secondary objective is to increase brand awareness among our target audience by 15%, measured by a post-campaign survey.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good — specific and measurable. Who is the [[target audience:the specific group of people the campaign is designed to reach]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We are targeting marketing managers and heads of marketing at B2B companies with 100 to 500 employees in the UK and Germany. They are responsible for campaign budgets of £50k to £500k. They are active on LinkedIn and their biggest pain point is proving ROI to the board.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Why this audience specifically?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Because 80% of our existing customers match this profile. They have the budget authority and the specific pain point our product addresses. Targeting a broader audience would reduce efficiency and increase cost per lead.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good data-backed reasoning. What is the [[key message:the single most important thing you want the audience to take away]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "'Our platform gives marketing teams clarity on which campaigns drive revenue — so you can prove ROI to the board.' It directly addresses the pain point and differentiates us from competitors who focus on reach rather than attribution.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Strong. Walk me through the [[channel mix:the specific combination of channels chosen for a campaign]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Paid search to capture high-intent traffic — people actively searching for a solution. LinkedIn ads to reach decision-makers at the right companies. Email to nurture existing contacts through the funnel. And content marketing to support organic search and top-of-funnel awareness.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[budget allocation:how the campaign budget is divided between channels]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Total budget: £50,000. Allocated as follows — 45% paid search, 30% LinkedIn, 15% content and email, 10% reserved for optimisation. Paid search takes the largest share because it consistently delivers our lowest cost per lead.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good allocation logic. How will we measure success?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We will measure success by three [[success metric:a specific measurable number used to evaluate campaign performance]]s. Primary: cost per qualified lead under £35. Secondary: 500 leads total and 3.5% landing page conversion rate. We have a two-week review at the midpoint and a full review at the end of Q4.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "This is a well-structured plan. Clear objective, justified audience, specific message, logic-based channel mix, transparent budget, and measurable outcomes. My only question is the [[campaign timeline:a schedule showing when each stage will happen]] — what is the pre-launch preparation and when do we go live?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Week one: agency brief and creative production. Week two: ad account setup, tracking implementation, and final approvals. Week three: go-live. Two-week review in week five. Month-two optimisation push based on initial data. Full campaign report at the end of Q4.",
    },
  ],

  matchingExercise: [
    { word: 'campaign plan', definition: 'a complete documented strategy covering objective, audience, message, channels, budget, and metrics' },
    { word: 'objective', definition: 'the specific, measurable goal of a campaign — answered by: what does success look like?' },
    { word: 'target audience', definition: 'the specific group defined by demographics, psychographics, and behaviours that the campaign is built for' },
    { word: 'key message', definition: "the single most important thing you want the audience to take away from the campaign" },
    { word: 'budget allocation', definition: 'how the total campaign budget is divided between channels and activities' },
    { word: 'success metric', definition: 'a specific measurable number used to evaluate whether the campaign achieved its objective' },
    { word: 'channel mix', definition: 'the specific combination of channels chosen — paid search, social, email, content — and the reasoning behind each' },
    { word: 'campaign timeline', definition: 'a schedule showing when each stage happens — production, launch, review, and reporting' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'of this campaign is to generate 500 qualified leads by the end of Q4 at under £35 per lead.', answer: 'objective' },
    { before: 'We chose LinkedIn because our', after: 'audience — marketing managers at B2B companies — are highly active on the platform.', answer: 'target' },
    { before: 'Every channel in the', after: 'mix should serve a specific role in the funnel — paid search for conversion, social for awareness.', answer: 'channel' },
    { before: 'We will measure success by three', after: 'metrics: cost per lead, total leads, and landing page conversion rate.', answer: 'success' },
    { before: 'The budget is', after: 'as follows — 45% paid search, 30% LinkedIn, 15% content, 10% optimisation reserve.', answer: 'allocated' },
    { before: 'A campaign with a vague', after: 'cannot be evaluated or improved — always make it specific and measurable.', answer: 'objective' },
  ],

  multipleChoiceExercise: [
    {
      question: "What does Marcus say makes a campaign plan strong, rather than just detailed?",
      options: ['It includes a creative concept so the senior team can visualise the campaign', 'Every choice is justified — you can explain why you made each decision based on data or insight', 'It covers every possible channel to show the team considered all options'],
      correctIndex: 1,
    },
    {
      question: "Why does Riley allocate the largest share of budget (45%) to paid search?",
      options: ['Paid search is the most popular channel among marketing teams', 'Paid search consistently delivers the lowest cost per lead for their campaigns', 'The board asked them to focus on search as a priority channel'],
      correctIndex: 1,
    },
    {
      question: "How does Riley justify the target audience choice?",
      options: ['By explaining that marketing managers are the largest demographic on LinkedIn', 'By referencing data showing that 80% of existing customers match this profile — and they have the budget authority and the pain point the product addresses', 'By explaining that targeting a narrow audience reduces the overall ad spend'],
      correctIndex: 1,
    },
    {
      question: "What does Riley identify as the key message for the campaign?",
      options: ["'We are the best marketing platform on the market — trusted by 10,000 teams'", "'Our platform gives marketing teams clarity on which campaigns drive revenue — so you can prove ROI to the board'", "'Save time and money with smarter marketing technology'"],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Imagine you are launching a new product or service at your company. What is the first thing you would define before building the marketing campaign, and why?',
      'What is the difference between a campaign that is creative and a campaign that is strategic? Can a campaign be both?',
      'If you had to present a campaign plan to the CEO of your company — in five minutes — what would you cover and in what order?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: "The _____ of this campaign is to generate 500 qualified leads at under £35 per lead by the end of Q4.",
        options: ['objective', 'target', 'goal'],
        correctIndex: 0,
        explanation: "'Objective' is the most precise and professional term for a campaign's measurable goal. In formal marketing and business contexts, 'objective' is preferred over 'goal' because it implies something more specific and structured — particularly when used in the phrase 'campaign objective' or 'the objective of this campaign'. 'Target' is a number or specific destination ('our target is 500 leads') but is not used as the subject of 'the _____ of this campaign'. 'Goal' is acceptable but slightly less formal than 'objective' in a professional presentation context.",
      },
      {
        sentence: "We are _____ marketing managers at B2B companies because 80% of our existing customers match this profile.",
        options: ['targeting', 'reaching', 'finding'],
        correctIndex: 0,
        explanation: "'Targeting' is the standard marketing verb for deliberately directing your campaign at a specific audience. 'Target' as a verb means to aim at or direct toward — 'we are targeting [audience]'. 'Reaching' describes the result of targeting — the people who actually see your message — but it implies a broader, less deliberate action. 'Finding' is not used in this context. Key phrase: 'we are targeting [audience] because [reason]' — the 'because' is essential to justify the choice professionally.",
      },
      {
        sentence: "The _____ message of the campaign is: 'Our platform helps you prove ROI to the board.'",
        options: ['key', 'main', 'core'],
        correctIndex: 0,
        explanation: "'Key message' is the fixed term in marketing for the central, most important communication of a campaign. It is always 'the key message' — not 'the main message' or 'the core message' in formal marketing contexts, although both are intelligible. 'Key' in 'key message' implies strategic importance — it is the one thing you must communicate above all others. Collocations: 'the key message', 'key performance indicators', 'key findings', 'key takeaway'.",
      },
      {
        sentence: "We will measure _____ by three KPIs: cost per lead, total leads, and landing page conversion rate.",
        options: ['success', 'performance', 'results'],
        correctIndex: 0,
        explanation: "'Measure success' is the standard phrase in campaign planning — it answers the question 'how do we know if we achieved the objective?' 'We will measure success by [metrics]' is the fixed professional expression. 'Measure performance' is also natural and commonly used ('track performance', 'measure performance'). 'Measure results' is acceptable but slightly more informal. In a formal presentation context, 'success' is the most precise — it directly connects back to the campaign objective.",
      },
      {
        sentence: "The budget is _____ as follows: 45% paid search, 30% LinkedIn, 15% content, 10% reserve.",
        options: ['allocated', 'divided', 'split'],
        correctIndex: 0,
        explanation: "'Allocated' is the standard business term for distributing a budget across categories. 'The budget is allocated as follows' is a fixed phrase in financial and marketing presentations — it introduces a detailed breakdown. 'Divided' and 'split' are both acceptable alternatives ('the budget is divided between channels' / 'we split the budget') but 'allocated as follows' is the most formal and structured phrasing for a presentation context. Key collocation: 'budget allocation', 'allocate resources', 'allocate spend'.",
      },
      {
        sentence: "I would like to _____ you through the campaign plan — objective, audience, channels, budget, and metrics.",
        options: ['take', 'walk', 'show'],
        correctIndex: 0,
        explanation: "'Take you through' is the standard phrase for guiding an audience through a structured presentation. 'I would like to take you through [topic]' means 'I will present this to you step by step'. 'Walk you through' is also correct and very commonly used — 'let me walk you through the plan'. Both are natural. 'Show you' is too informal and visual ('show you the data' / 'show you the slides') — it does not convey the structured, guided quality of a full plan presentation. Either 'take' or 'walk' is acceptable; 'take' is slightly more formal.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read the campaign presentation scenario. Choose the best response.',
      items: [
        {
          customerLine: "The MD says: 'I like the campaign but the objective isn't clear enough. What specifically are you trying to achieve?'",
          options: [
            "Explain that the objective is to grow the brand and increase market awareness — and that is hard to measure in a single quarter.",
            "Revise the objective on the spot: 'The objective is to generate 500 qualified leads for the sales team by 31 December, at a cost per lead of under £35 — measured weekly against that target throughout the campaign.'",
            "Ask the MD what kind of objective they would prefer and adjust the plan accordingly.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. When challenged on a vague objective, the right response is to make it specific immediately — with a number, a deadline, and a measurement mechanism. 'Generate 500 qualified leads by 31 December at under £35 per lead' is SMART: specific, measurable, achievable (presumably), relevant, and time-bound. Option A defends a vague objective — never do this. Option C defers the decision back to the MD, which shows a lack of strategic ownership. Presenting a campaign means owning the objective — make it specific and defend it.",
        },
        {
          customerLine: "A colleague asks: 'Why are we not using Instagram for this campaign? Everyone is on Instagram.'",
          options: [
            "Agree — add Instagram to the channel mix because it is a popular platform and it is worth testing.",
            "Explain that channel decisions should be based on where the target audience actually is and what the objective is. Our audience is B2B marketing managers — they are significantly more active and professionally reachable on LinkedIn than Instagram, and our LinkedIn campaigns have historically delivered 40% lower cost per lead for this audience.",
            "Tell the colleague that Instagram is a consumer platform and not appropriate for any B2B campaign.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. 'Everyone is on Instagram' is not a marketing strategy — it is an assumption. Channel selection should be driven by audience behaviour and past performance data. For a B2B audience of marketing managers, LinkedIn is the strategically justified choice based on platform usage and past results. Option A adds a channel without strategic justification — this increases budget spread and reduces efficiency. Option C is too absolute — some B2B brands do use Instagram effectively, particularly for employer branding and awareness campaigns. The issue is not that Instagram is wrong in general, but that it is not the right choice for this specific audience and objective.",
        },
        {
          customerLine: "At the end of the campaign, the MD asks: 'Was this campaign a success?'",
          options: [
            "Answer with your gut feeling: 'I think so — the creative was well-received and the team worked really hard on it.'",
            "Answer with data: 'Against our three success metrics — we generated 520 qualified leads (target: 500), at an average cost per lead of £31 (target: under £35), with a landing page conversion rate of 3.9% (target: 3.5%). All three metrics hit or exceeded target — so yes, this campaign was a success.'",
            "Explain that it is too early to tell — the sales team needs more time to work through the leads before we can call it a success.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. Always evaluate campaign performance against the pre-defined success metrics. That is exactly why you define them at the start. A campaign is a success if it hits its targets — not if it felt good or the creative won awards. Answer with numbers, compare them to targets, and state a clear conclusion. Option A is anecdote, not evaluation. Option C delays the evaluation unnecessarily — if you have the metric data, evaluate now. The sales pipeline conversion happens separately and over a longer timeframe, but the campaign's job was to generate leads at a certain cost, and you can evaluate that immediately at campaign end.",
        },
      ],
    },
    spotTheMistake: {
      instructions: "Read Riley's campaign presentation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: 'Riley', text: "Good morning. I would like to take you through the campaign plan for Q4." },
        { speaker: 'Riley', text: "The objective of this campaign are to generate 500 qualified leads by the end of Q4." },
        { speaker: 'Marcus', text: "And the target audience?" },
        { speaker: 'Riley', text: "We are targeting marketing managers at B2B companies because they match 80% of our existing customer profile." },
        { speaker: 'Marcus', text: "What is the key message?" },
        { speaker: 'Riley', text: "'Our platform helps you proving ROI to the board.' It directly addresses the main pain point." },
        { speaker: 'Marcus', text: "And how will you measure success?" },
        { speaker: 'Riley', text: "We will measure success with three KPIs — cost per lead, total leads, and the conversion rate on the landing page." },
        { speaker: 'Marcus', text: "Good. What is your budget?" },
        { speaker: 'Riley', text: "£50,000, allocated as follow: 45% paid search, 30% LinkedIn, 15% content, 10% reserve." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'objective of this campaign are',
          correction: 'objective of this campaign is',
          explanation: "'Objective' is singular — it takes the singular verb 'is', not 'are'. The confusion arises because 'campaign' comes between the subject and the verb. Always identify the real subject ('the objective') and match the verb to it. 'The objective is', 'the goal is', 'the plan is' — all singular. If you want to list multiple objectives, use 'The objectives of this campaign are to...' (plural subject, plural verb).",
        },
        {
          lineIndex: 5,
          incorrectText: 'helps you proving',
          correction: 'helps you prove',
          explanation: "After 'help you', use the base form of the verb (the infinitive without 'to') — 'help you prove', not 'help you proving'. This is a pattern specific to certain verbs: 'help someone do something', 'make someone do something', 'let someone do something' — all use the base form. 'Proving' (the -ing form or present participle) would need a different construction: 'helps you in proving' (very formal and unusual) or 'helps with proving' (less natural). The simple, correct form is: 'helps you prove'.",
        },
        {
          lineIndex: 9,
          incorrectText: 'allocated as follow',
          correction: 'allocated as follows',
          explanation: "'As follows' is a fixed phrase in English — it is always 'follows' (with an -s), never 'follow'. 'As follows' introduces a list or breakdown. It is grammatically treated as an invariable fixed expression regardless of whether what follows is singular or plural. Examples: 'the results are as follows:', 'the budget is allocated as follows:', 'the schedule is as follows:'. Dropping the -s ('as follow') is a common error — memorise 'as follows' as a fixed phrase.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'These are excerpts from a campaign plan presentation. Work with your partner to finish each section.',
      items: [
        {
          customerLine: "Present the objective, audience, and key message of your own campaign plan — real or imagined.",
          salespersonStart: "The objective of this campaign is to —",
          suggestedCompletion: "generate 300 free trial sign-ups for our software platform by the end of Q1, at a cost per sign-up of under £25. We are targeting marketing managers and digital marketing specialists at SMEs in the UK and Ireland, because this group has the highest conversion rate from trial to paid subscription in our existing customer data. Our key message is: 'Get your whole team working from one marketing platform — and see which campaigns are actually driving growth.' It addresses the coordination pain point and the measurement pain point — the two most common objections we hear from prospects.",
        },
        {
          customerLine: "Present and justify your channel mix.",
          salespersonStart: "Our channel mix consists of paid search, LinkedIn ads, and email nurture —",
          suggestedCompletion: "and each channel serves a specific role. Paid search captures people who are actively searching for a solution — they are at the bottom of the funnel and have high intent. We are bidding on keywords like 'marketing platform for teams' and 'campaign management software'. LinkedIn ads reach our target audience — marketing managers at SMEs — at the top and middle of the funnel. We are using job title and company size targeting to ensure we only reach relevant people. Email nurture targets existing trial users and previous leads — it is our most cost-efficient conversion channel. Together, these three channels cover all funnel stages and all audience segments.",
        },
        {
          customerLine: "At the end of the presentation, the MD asks: 'How confident are you in this plan?'",
          salespersonStart: "I am confident in this plan because every decision is backed by data —",
          suggestedCompletion: "the audience is defined by our actual customer data, not assumption. The channel mix is based on past campaign performance — we know these channels deliver results for this audience. The objective is stretching but achievable — our Q3 performance gives me confidence in the Q4 target. And we have built in a two-week mid-campaign review with a budget reserve specifically to optimise based on what we learn in the first month. If something is not working, we have the budget and the plan to adjust quickly. I am not confident we will be perfect from day one — but I am confident we will get there by the end of Q4.",
        },
      ],
    },
  },
};
