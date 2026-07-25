import { Lesson } from '@/types/lesson';

export const innovationInMarketing: Lesson = {
  slug: 'innovation-in-marketing',
  title: 'Innovation in Marketing',
  subtitle: 'AR, AI, chatbots, automation, and the technologies reshaping how brands reach, understand, and serve their audiences',
  level: 'B1-B2',
  description: "Marketing technology is evolving faster than at any point in the industry's history. Artificial intelligence is personalising content at scale. Augmented reality is bringing products into consumers' homes before they buy. Chatbots are handling millions of customer conversations without human intervention. Automation is freeing marketing teams to focus on strategy rather than repetition. The marketers who thrive in this environment are not necessarily the most technical — they are the ones who understand what these tools can and cannot do, and can articulate that understanding clearly. This lesson gives you the vocabulary to participate confidently in conversations about marketing innovation.",
  heroImage: '/images/innovation-in-marketing-hero.png',

  vocabulary: [
    {
      word: 'AUGMENTED REALITY',
      partOfSpeech: 'noun',
      definition: "Technology that adds digital things — like images or information — to what you see in the real world, usually through your phone camera. In marketing, AR lets customers see a product in their own home before they buy it. Abbreviated as AR.",
      example: "A furniture company created an AR app that lets customers place sofas and tables in their own room using their phone camera before they buy. Customers who use the app return fewer products because they can see exactly how the furniture looks in their home before ordering.",
      imageSlug: '/images/augmented-reality.png',
    },
    {
      word: 'CHATBOT',
      partOfSpeech: 'noun',
      definition: "A computer programme that has conversations with customers — answering questions and helping them find what they need. Most chatbots work through a website or app. Companies use chatbots in marketing to answer questions automatically and identify good leads.",
      example: "A company added a chatbot to its website. The chatbot asks visitors three questions to understand what they need. Visitors who talk to the chatbot are four times more likely to buy than visitors who do not. The chatbot also saves the sales team time because it only sends them the best leads.",
      imageSlug: '/images/chatbot.png',
    },
    {
      word: 'PERSONALISATION',
      partOfSpeech: 'noun',
      definition: "Showing different content, products, or messages to different people based on what they like or what they have bought before. Personalisation makes customers feel that a brand understands them. With technology, companies can personalise for millions of customers at the same time.",
      example: "An online shop shows different products to different visitors. A customer who bought running shoes sees running accessories. A customer who looked at cycling products sees cycling content. Pages with personalised recommendations get three times more sales than pages with the same content for everyone.",
      imageSlug: '/images/innovation-in-marketing-personalisation.png',
    },
    {
      word: 'AUTOMATION',
      partOfSpeech: 'noun',
      definition: "Using technology to do repetitive tasks automatically, without a person doing each one. In marketing, automation sends emails, posts on social media, and follows up with leads without manual work. This gives teams more time for creative and strategic work.",
      example: "A company uses automation for all emails after a purchase. When a customer buys something, the system automatically sends a confirmation, then a delivery update, then a review request. This process used to take three people several hours a week. Now the team can focus on other work.",
      imageSlug: '/images/automation.png',
    },
    {
      word: 'AI IN MARKETING',
      partOfSpeech: 'noun',
      definition: "Using artificial intelligence to make marketing better. AI can write content, find the right audience, improve campaigns in real time, and predict what customers will do next. 'AI in marketing' covers many different tools and uses.",
      example: "A marketing team uses AI in four ways — writing first drafts of ads, finding the right customer groups, adjusting campaigns automatically, and identifying customers who might stop buying. These four uses save the team many hours every week and make their marketing more effective.",
      imageSlug: '/images/ai-in-marketing.png',
    },
    {
      word: 'PREDICTIVE',
      partOfSpeech: 'adjective',
      definition: "Using data from the past to estimate what will happen in the future. Predictive tools in marketing look at what customers have done before and use that information to predict what they will do next — like who will buy, and who will stop buying.",
      example: "A subscription company uses a predictive tool that gives every customer a score from 0 to 100. Customers with a high score are likely to cancel soon. The company contacts these customers with a special offer before they cancel. The tool correctly identifies customers who will leave 78% of the time, at least 30 days before they cancel.",
      imageSlug: '/images/innovation-in-marketing-predictive.png',
    },
    {
      word: 'DYNAMIC CONTENT',
      partOfSpeech: 'noun',
      definition: "Content that changes automatically depending on who is looking at it. A dynamic email shows different images or offers to different people based on their data. Dynamic content is a key tool for personalisation because it lets one message feel personal to many different people.",
      example: "A brand sends one weekly email, but every customer sees a different version. A customer who bought sports equipment sees a sports offer. A customer who bought kitchen items sees a cooking promotion. The team sends one email, but it automatically creates 12 different versions at the same time.",
      imageSlug: '/images/innovation-in-marketing-dynamic-content.png',
    },
    {
      word: 'TEST AND LEARN',
      partOfSpeech: 'noun / verb',
      definition: "An approach where you try something small, measure the result, and use what you learned to improve. Instead of planning everything before you start, you run small experiments and improve step by step. This is a common way to try new marketing technology.",
      example: "A company wants to try a new chatbot. Instead of adding it to the whole website immediately, they test it on one page for one month. They set a clear goal before they start, and they measure the result after the test. If the chatbot helps more visitors buy, they use it everywhere. If not, they learn why and try a different approach.",
      imageSlug: '/images/innovation-in-marketing-test-and-learn.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE ARE USING AI TO...',
      definition: "A phrase for describing a specific way your company uses AI. You always say what the AI does and what result it achieves. Used in presentations and meetings to talk about AI in a clear, practical way — not in general terms.",
      example: "We are using AI to find customers who are likely to stop buying from us. The system looks at customer behaviour every week. If a customer seems likely to leave, the team contacts them with a personal message before they cancel. This has helped reduce the number of customers who leave each month.",
      imageSlug: '/images/we-are-using-ai-to.png',
      inAction: 'We are using AI to predict which customers are most likely to upgrade, so the sales team can prioritise their outreach on the accounts with the highest conversion probability.',
      register: "Neutral — Flux (SaaS platform, product marketing): launch briefing reads we are using AI to surface the most relevant case study for each prospect in real time — based on their industry, company size, and the pages they have visited. | Beacon (healthcare app, CRM): growth review reads we are using AI to identify patients who have not engaged with their care plan in 14 days and trigger a personalised check-in message before they disengage completely. | Ember (subscription service, retention): board update reads we are using AI to predict subscription cancellations 30 days in advance — the model has 78% accuracy and has already prevented an estimated £340k in annual churn.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — product marketing launch brief', imageSlug: '/images/visual-examples/flux-ai-case-study.png', caption: 'We are using AI to surface the most relevant case study for each prospect in real time — based on their industry, company size, and pages visited.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Subscription service — retention board update', imageSlug: '/images/visual-examples/ember-ai-churn-prediction.png', caption: 'We are using AI to predict cancellations 30 days in advance — 78% accuracy, preventing an estimated £340k in annual churn.', aspectRatio: '16/9' },
      ],
      inContext: "Marcus opened the innovation review. We are using AI to automate six tasks that previously required manual effort from the marketing team, he said. Dana listed them: content generation, audience segmentation, campaign bid optimisation, chatbot conversations, churn prediction, and customer sentiment analysis. Riley asked: What is the net effect on the team's time? Dana: Those six applications have freed approximately 60 hours per week across the team — which we have reinvested in strategy, creative, and the customer work that genuinely benefits from a human.",
    },
    {
      phrase: 'THE CHATBOT IS DESIGNED TO...',
      definition: "A phrase to explain what a chatbot does and why it exists. You always say the specific purpose — like answering questions, finding good leads, or helping customers choose a product. Used to explain a chatbot clearly to colleagues or clients.",
      example: "The chatbot is designed to answer the 20 most common customer questions automatically. Customers can get help at any time, without waiting for a team member. If a customer asks something the chatbot cannot handle, it connects them to a real person and shares the conversation so the person has all the information they need.",
      imageSlug: '/images/the-chatbot-is-designed-to.png',
      inAction: 'The chatbot is designed to handle the top 25 frequently asked questions automatically, so the customer support team can focus on the complex, high-value cases that require human judgement.',
      register: "Neutral — Kova (fintech, customer support): product brief reads the chatbot is designed to handle account queries, transaction history, and basic troubleshooting without human agent involvement — escalating only to a human when the query requires account-level intervention. | Forge (B2B HR, sales site): sales ops brief reads the chatbot is designed to qualify website visitors before they reach the sales team — collecting company size, use case, and timeline in a conversational interface. | Bloom (DTC wellness, e-commerce): CRO brief reads the chatbot is designed to guide indecisive visitors to the right product through a short quiz — three questions that recommend a product match based on their answers.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — sales site qualification bot', imageSlug: '/images/visual-examples/forge-chatbot-qualify.png', caption: 'The chatbot is designed to qualify website visitors before they reach sales — collecting company size, use case, and timeline in a conversational interface.', aspectRatio: '9/16' },
        { brand: 'Bloom', context: 'DTC wellness — e-commerce conversion optimisation', imageSlug: '/images/visual-examples/bloom-chatbot-quiz.png', caption: 'The chatbot is designed to guide indecisive visitors to the right product through a three-question quiz — a recommendation engine in conversation form.', aspectRatio: '9/16' },
      ],
      inContext: "Dana walked through the chatbot design. The chatbot is designed to solve a specific problem, she said — the 60% of website visitors who leave without taking any action. Riley: And the solution is conversation, not more content. The chatbot meets them where they are — uncertain, browsing, not quite ready — and helps them figure out what they need. Marcus: What happens if someone asks something the chatbot cannot handle? Dana: It escalates immediately to a human agent and passes the full conversation transcript so the agent has context. The handover is seamless from the customer's point of view.",
    },
    {
      phrase: 'PERSONALISATION AT SCALE ALLOWS US TO...',
      definition: "A phrase to describe what is possible when technology personalises for a very large number of customers. You always say the specific result or benefit. Used in presentations to explain why personalisation technology is worth the investment.",
      example: "Personalisation at scale allows us to show each customer the products they are most likely to buy. Our personalised emails are opened more than twice as often as our general emails. Without technology, it would not be possible to do this for 300,000 customers — it would need too many people working manually.",
      imageSlug: '/images/personalisation-at-scale-allows.png',
      inAction: 'Personalisation at scale allows us to show a different message to each visitor based on their industry and behaviour — without creating 5,000 individual campaigns manually.',
      register: "Neutral — Flux (SaaS, growth marketing): investor presentation reads personalisation at scale allows us to show each prospect the case study and feature set most relevant to their specific use case — increasing trial conversion by 2.4x compared to a generic landing page. | Ember (subscription, CRM strategy): commercial review reads personalisation at scale allows us to deliver the right win-back message at the right moment to each churned customer — based on their reason for leaving, their tenure, and their historical engagement. | Halo (DTC beauty, e-commerce): board update reads personalisation at scale allows us to generate £4.1m in additional annual revenue from the same audience — through relevant product recommendations that increase average order value.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS growth marketing — investor presentation', imageSlug: '/images/visual-examples/flux-personalisation-scale.png', caption: 'Personalisation at scale allows us to show each prospect the most relevant case study for their use case — increasing trial conversion by 2.4x vs a generic landing page.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'DTC beauty — board commercial update', imageSlug: '/images/visual-examples/halo-personalisation-aov.png', caption: 'Personalisation at scale allows us to generate £4.1m in additional annual revenue from the same audience — through relevant recommendations that increase average order value.', aspectRatio: '16/9' },
      ],
      inContext: "Marcus put the case for investment on the table. Personalisation at scale allows us to compete with brands that have five times our headcount, he said. We cannot out-resource Amazon. But we can build systems that make every customer feel as understood as if a personal shopper knew them. Riley: The technology exists. The question is whether we have the data infrastructure to power it. Dana: The data infrastructure investment is £120k. The projected revenue impact over 18 months is £680k. The business case is not difficult to make.",
    },
    {
      phrase: 'THE AUTOMATION HANDLES...',
      definition: "A phrase to describe the specific tasks that an automation system does automatically. You always say what the automation does and what this means for the team. Used to explain the value of automation to colleagues or management.",
      example: "The automation handles all emails after a customer buys something. It sends a confirmation, a delivery update, and a review request at the right time — with no manual work needed. If a customer contacts support about a problem, the automated emails pause automatically so the customer does not receive a positive message while there is an issue.",
      imageSlug: '/images/the-automation-handles.png',
      inAction: 'The automation handles lead nurturing for the first 30 days after sign-up — a sequence of 8 emails, timed to behaviour triggers, that moves new users from trial to paid conversion without any manual outreach.',
      register: "Neutral — Forge (B2B HR platform, marketing ops): system brief reads the automation handles the entire lead nurturing sequence from first download to sales-qualified lead — triggered by content engagement, scored on behaviour, and routed to sales when the threshold is met. | Kova (fintech, customer lifecycle): product brief reads the automation handles onboarding emails, feature introduction, and the 30-day activation check-in — freeing the customer success team to focus on the enterprise accounts that need human attention. | Bloom (DTC wellness, CRM): email strategy reads the automation handles list hygiene, re-engagement, and sunset sequencing — ensuring we only send to engaged contacts and maintain high deliverability.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — marketing operations system brief', imageSlug: '/images/visual-examples/forge-automation-nurture.png', caption: 'The automation handles the entire lead nurturing sequence from first download to sales-qualified lead — scored on behaviour and routed to sales at the threshold.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — customer lifecycle management', imageSlug: '/images/visual-examples/kova-automation-onboarding.png', caption: 'The automation handles onboarding emails and feature introduction — freeing the customer success team to focus on enterprise accounts that need human attention.', aspectRatio: '4/5' },
      ],
      inContext: "Riley walked through the automation architecture. The automation handles 14 distinct customer moments in the post-purchase journey, she said. Each one was previously managed manually by a team member, with inconsistent timing and variable quality. Marcus: How many people hours per week did that represent before the automation? Riley: Approximately 40 hours per week across three people. Dana: Which those three people now spend on creative, strategy, and the customer relationships that genuinely benefit from human involvement. The automation did not replace them — it freed them.",
    },
    {
      phrase: 'THE TEST AND LEARN APPROACH MEANS...',
      definition: "A phrase to explain what the test and learn method means for how your team works or makes decisions. Used to explain or defend an approach based on small experiments rather than large, risky changes.",
      example: "The test and learn approach means we never add a new technology to all channels at the same time. We always start small — one channel, one clear goal — and measure the result after four weeks. If the test works, we use the tool everywhere. Even if the test does not work, we learn something useful and the cost is small.",
      imageSlug: '/images/the-test-and-learn-approach-means.png',
      inAction: "The test and learn approach means we will know within 6 weeks whether the chatbot is improving conversion — because we have a control group that doesn't see it.",
      register: "Neutral — Flux (SaaS, AI adoption): product roadmap reads the test and learn approach means all new AI features are deployed to a 10% audience cohort first — with success criteria defined before launch and a decision gate after 4 weeks. | Bloom (DTC wellness, e-commerce innovation): CRO strategy reads the test and learn approach means we are running 3-5 concurrent experiments on the product page at all times — optimising copy, imagery, CTA placement, and social proof elements based on live data. | Emerge (edtech, content innovation): product brief reads the test and learn approach means we launch new content formats to a pilot group of 500 students, measure completion rates and learning outcomes, and only roll out formats that outperform our existing baseline.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS — AI feature adoption strategy', imageSlug: '/images/visual-examples/flux-test-learn-ai.png', caption: 'The test and learn approach means all new AI features are deployed to a 10% cohort first — with success criteria defined before launch and a decision gate at 4 weeks.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — e-commerce conversion optimisation', imageSlug: '/images/visual-examples/bloom-test-learn-cro.png', caption: 'The test and learn approach means running 3-5 concurrent experiments on the product page at all times — optimising based on live data rather than assumptions.', aspectRatio: '4/5' },
      ],
      inContext: "Dana was presenting the AI rollout plan. The test and learn approach means we are not trying to get this right the first time, she said. We are trying to learn as fast as possible. Marcus: Which requires intellectual honesty about what the data is telling us — even when it contradicts our assumptions. Riley: And it requires that we define what success looks like before we run the test, not after. If you define success after you see the results, you will always find a way to call the test a success.",
    },
    {
      phrase: 'AUGMENTED REALITY LETS CUSTOMERS...',
      definition: "A phrase to describe what customers can do with AR technology. You always say the specific action the customer can take and the benefit it gives them. Used in presentations and meetings to explain AR as a marketing tool.",
      example: "Augmented reality lets customers try products at home before they buy. For example, they can use their phone to see how a sofa looks in their living room, change the colour, and share a photo with a family member. Customers who use this feature are 2.6 times more likely to buy and return fewer products because they know the product fits before they order.",
      imageSlug: '/images/augmented-reality-lets-customers.png',
      inAction: 'Augmented reality lets customers try on glasses or test a paint colour in their own home — removing the biggest barrier to online purchase in categories where fit and context matter most.',
      register: "Neutral — Lumen (eyewear, DTC): product launch brief reads augmented reality lets customers try every frame in our collection from their phone — seeing exactly how each pair looks on their own face, in natural light, without visiting a store. | Forma (interior design app, B2C): investor presentation reads augmented reality lets customers visualise a full room redesign in real time — placing furniture, changing wall colours, and testing lighting before committing to a single purchase. | Halo (DTC beauty): campaign brief reads augmented reality lets customers test foundation shades, lip colours, and eyeshadow palettes on their own face via the app camera — personalised try-before-you-buy at scale.",
      visualExamples: [
        { brand: 'Lumen', context: 'Eyewear DTC — product launch brief', imageSlug: '/images/visual-examples/lumen-ar-try-on.png', caption: 'Augmented reality lets customers try every frame from their phone — seeing exactly how each pair looks on their own face, in natural light, without visiting a store.', aspectRatio: '9/16' },
        { brand: 'Halo', context: 'DTC beauty — app campaign brief', imageSlug: '/images/visual-examples/halo-ar-beauty.png', caption: 'Augmented reality lets customers test foundation shades and lip colours on their own face via the app camera — personalised try-before-you-buy at scale.', aspectRatio: '9/16' },
      ],
      inContext: "Riley had the demo open on her screen. Augmented reality lets customers do something that was only possible in a physical store until very recently, she said — experience the product in their own context before buying. Marcus: And for our category — furniture — that is the single biggest purchase barrier online. Dana: The conversion data supports that. Customers who use AR convert at 2.6x the rate of those who do not. The question is not whether to build it. The question is whether to build it or buy an existing platform.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We have been asked to present a thought leadership piece on innovation in marketing at the industry conference in April. I want us to build an honest, useful argument — not a hype piece. What are the technologies that are actually delivering commercial value right now?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I would lead with [[AI in marketing:the use of artificial intelligence to improve marketing decisions, automate content, and personalise experiences]]. Not as a buzzword but as a set of specific applications. We are using AI to do four things with proven ROI: churn prediction, content drafting, campaign bid optimisation, and audience segmentation. Those are concrete, measurable use cases.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I would add [[automation:using technology to complete repetitive marketing tasks without manual effort for each action]]. The automation handles our entire post-purchase email journey — 14 distinct customer moments, zero manual effort, and performance metrics that are higher than when we did it manually. That is the story that resonates with a marketing audience: automation that improves quality, not just speed.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about [[personalisation:tailoring content, recommendations, and experiences to the specific individual at scale]]? Where is that actually delivering value rather than just consuming resource?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Personalisation at scale allows us to deliver an experience that feels individual to 400,000 customers. Our personalised emails have 42% open rate versus 18% for generic broadcasts. But the honest part of the story is that [[personalisation:individualised marketing experiences]] only works if the data is good. Bad data produces irrelevant personalisation — which is worse than no personalisation.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And we should talk about [[chatbot:a programme that has conversations with users to answer questions or guide them through a process]] technology — but honestly. The chatbot is designed to qualify leads and handle the top 25 FAQ questions. It is not replacing human relationships. It is making human time more valuable by handling the routine so humans can handle the complex.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I want to make sure we include something on [[augmented reality:technology that adds digital elements to a real-world view, usually via smartphone camera]]. What is the most compelling use case for our audience?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Augmented reality lets customers experience a product in their own context before buying — furniture in their room, glasses on their face, paint on their wall. IKEA data shows 35% fewer returns. That is not a marketing metric — that is a supply chain metric. That is how you make the business case to a CFO.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The thread connecting all of these is [[predictive:using data from the past to forecast future actions or outcomes]] capability. Whether it is AI churn prediction, [[dynamic content:content that changes automatically based on who is viewing it]] recommendations, or personalised timing — the best marketing technology today does not react to what customers do. It anticipates what they are about to do.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the final point — how do we frame all of this for an audience that may be overwhelmed by the pace of change?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The [[test and learn:running structured experiments, measuring honestly, and improving based on what you find]] approach. You do not need to adopt every technology at once. You pick the one use case where you have the data, the team, and the clear success metric — and you run a small, structured experiment. The test and learn approach means you can move quickly without betting everything on an unproven technology.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The most useful thing we can say to that audience is: you do not need to be a technology expert to lead in this era. You need to be honest about what you are trying to achieve, willing to experiment, and disciplined about measuring what matters. The technology is a tool. Good marketing judgement is still the driver.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is the talk. Honest, specific, useful — and a message that respects the intelligence of a senior marketing audience. Let us build the presentation around that framework.",
    },
  ],

  matchingExercise: [
    { word: 'augmented reality', definition: 'technology that adds digital elements to a real-world view via a phone camera, used to let customers experience products before buying' },
    { word: 'chatbot', definition: 'a programme that has conversations with users to qualify leads, answer questions, or guide a process' },
    { word: 'personalisation', definition: 'tailoring content, recommendations, and experiences to the specific individual based on their data' },
    { word: 'automation', definition: 'using technology to complete repetitive marketing tasks without manual effort for each individual action' },
    { word: 'AI in marketing', definition: 'using artificial intelligence to improve decisions, automate content, personalise experiences, and optimise campaigns' },
    { word: 'predictive', definition: 'using historical data and patterns to forecast what is likely to happen in the future' },
    { word: 'dynamic content', definition: 'content that changes automatically based on who is viewing it — their behaviour, location, or purchase history' },
    { word: 'test and learn', definition: 'running structured experiments, measuring results honestly, and improving based on what the data shows' },
  ],

  fillBlankExercise: [
    { before: 'We are using AI to predict which customers are most likely to churn 30 days before they', answer: 'cancel', after: ', so we can intervene proactively.' },
    { before: 'Augmented reality lets customers', after: 'products in their own home before buying — which reduces returns by up to 40%.', answer: 'experience' },
    { before: 'Personalisation at scale', after: 'us to deliver an individual-feeling experience to 400,000 customers — made possible by data and technology.', answer: 'allows' },
    { before: 'The automation', after: 'the entire post-purchase email journey — from order confirmation through to review request.', answer: 'handles' },
    { before: 'The chatbot is designed to', after: 'leads before they reach the sales team, using three qualifying questions.', answer: 'qualify' },
    { before: 'The test and learn approach means we define what success looks like', answer: 'before', after: 'we run the experiment — not after we see the results.' },
  ],

  multipleChoiceExercise: [
    {
      question: "What does Dana say is the 'often-missed part of the business case' for augmented reality?",
      options: ['The improvement in social media engagement from sharing AR screenshots', 'The lower return rate — because AR improves the quality of the purchase decision, not just the conversion rate', 'The cost savings from reducing physical store footprint once AR is available online'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say is the critical condition for personalisation to work?',
      options: ['A large enough audience size — personalisation requires at least 100,000 contacts to be effective', 'Good data quality — bad data produces irrelevant personalisation, which is worse than no personalisation', 'A dedicated personalisation platform — manual personalisation is too slow to have commercial impact'],
      correctIndex: 1,
    },
    {
      question: 'How does Dana describe the honest role of chatbots in their marketing stack?',
      options: ['Chatbots are replacing the sales team for low-value leads and freeing senior salespeople for enterprise accounts only', 'Chatbots handle routine questions and qualification, making human time more valuable by freeing it for complex work', 'Chatbots are a temporary measure while the company builds a larger human customer support team'],
      correctIndex: 1,
    },
    {
      question: "What does Dana say is the most useful thing to tell a marketing audience that is overwhelmed by technology change?",
      options: ['You need to hire technology specialists and data scientists before you can begin using AI in marketing', 'You do not need to be a technology expert — you need good marketing judgement, honesty about what you are trying to achieve, and willingness to experiment', 'You should focus only on the two or three technologies that have the clearest ROI and ignore everything else for now'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Have you ever used augmented reality to try a product — like placing furniture in your room, or trying on glasses with your phone camera? What was the experience like? Did it affect your decision to buy?",
      'Think about a brand that communicates with you in a personalised way — using your name, recommending specific products, or sending content that feels relevant to you. What do you notice about the difference between personalisation that feels helpful and personalisation that feels intrusive or creepy?',
      "If you were a marketer with a budget to invest in one new technology — AR, AI, a chatbot, or marketing automation — which would you choose and why? What problem would you be trying to solve?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'Customers _____ use the AR feature convert at 2.6 times the rate of those who do not.',
        options: ['who', 'that', 'which'],
        correctIndex: 0,
        explanation: "'Who' is the standard relative pronoun for people in formal written English: 'customers who use the AR feature'. 'That' can also refer to people in defining relative clauses and is common in informal and American English: 'customers that use' is grammatically correct. 'Which' refers to things, not people — 'features which', 'technology which', but not 'customers which'. In formal business writing, 'who' is the preferred choice for referring to people. Both 'who' and 'that' are accepted in defining relative clauses (no comma), but 'who' is more formal and more appropriate in professional presentations and reports.",
      },
      {
        sentence: 'The chatbot asks three qualifying questions _____ routing high-quality leads to the sales team.',
        options: ['before', 'prior to', 'ahead of'],
        correctIndex: 0,
        explanation: "All three express time sequence — 'before', 'prior to', and 'ahead of' can all indicate that something happens first. The key difference is register and grammatical construction. 'Before' + gerund (-ing): 'before routing' — natural and standard in formal and informal English. 'Prior to' + gerund (-ing): 'prior to routing' — formal, often used in legal or procedural writing. 'Ahead of' + noun: 'ahead of routing' is slightly unusual — 'ahead of the routing' would be more natural. For a professional but readable context, 'before' is the clearest and most natural choice.",
      },
      {
        sentence: 'The automation does not replace human judgement — _____ frees humans to apply their judgement where it matters most.',
        options: ['it', 'this', 'they'],
        correctIndex: 0,
        explanation: "'It' refers back to 'the automation' — a singular noun. 'The automation... it frees humans' — 'it' is the subject pronoun replacing 'the automation'. 'This' is a demonstrative pronoun that can refer back to a concept or situation, but here we need a pronoun that replaces the specific subject 'the automation'. 'This frees humans' is slightly ambiguous — 'this' could refer to the whole preceding idea. 'It' is more precise because it directly replaces 'the automation' as the subject. 'They' would be used for a plural noun: 'the automations... they free' — but 'automation' here is singular. 'It' is the correct choice.",
      },
      {
        sentence: 'A test and learn approach _____ you to make decisions based on evidence rather than assumptions.',
        options: ['enables', 'enable', 'allowing'],
        correctIndex: 0,
        explanation: "'Enables' is the correct third person singular verb for the singular subject 'a test and learn approach'. 'A [singular] approach enables you to' — this is the standard construction for describing what a methodology or tool makes possible. 'Enable' is the plural form — it would be correct with a plural subject: 'these approaches enable'. 'Allowing' (present participle) cannot be the main verb of a sentence — it would work in a reduced relative clause ('an approach allowing you to make decisions') or as a subordinate participle ('the approach works by allowing'), but not as the main predicate after 'a test and learn approach'.",
      },
      {
        sentence: 'Dynamic content sends _____ different version of the email to different customer segments based on their data profile.',
        options: ['a', 'the', 'one'],
        correctIndex: 0,
        explanation: "'A different version' — the indefinite article 'a' is correct because we are introducing the concept of a version for each segment, not referring to a specific version already identified. 'The different version' would imply a specific, known version — 'the version we discussed' or 'the version in the brief'. 'One different version' is redundant — 'one' adds nothing here that 'a' does not already convey, and 'one different version to each segment' would be more natural phrasing. 'A different version' is the natural way to say that each segment receives its own version: 'a different X for Y' is a standard English pattern.",
      },
      {
        sentence: 'The predictive model correctly _____ churners 78% of the time at least 30 days before cancellation.',
        options: ['identifies', 'identify', 'is identifying'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('identifies') is correct for describing what a system does as a general capability. 'The model identifies churners 78% of the time' — this describes the model's reliable, ongoing behaviour as a factual statement about its performance. 'Identify' is the plural form — it would be correct with a plural subject: 'these models identify'. 'Is identifying' (present continuous) would describe an action in progress right now, not a stable capability. When describing what a tool, system, or model routinely does — its defined function or measured performance — simple present is standard: 'the model identifies', 'the chatbot routes', 'the algorithm optimises'.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'Our CEO wants us to use AI in our marketing. Where do we start?'",
          options: [
            "Start with a comprehensive AI audit of all your current marketing tools and identify which ones have AI features you are not using yet.",
            "The most useful starting point is not a technology audit — it is a problem audit. AI is most effective when it solves a specific, costly problem that exists in your current marketing. Ask: what is the most repetitive, time-consuming, or inconsistent thing in our marketing today? The answer to that question usually points to the best first AI use case. Common first applications include: email subject line generation, audience segmentation based on behavioural data, chatbot qualification for inbound leads, or predictive churn scoring. Pick the one problem where you have the data to power it and the team to implement it — and run a small, contained test. Prove value at small scale before you scale.",
            "AI is most effective in paid media. Start there by connecting your ad accounts to an AI optimisation platform.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it redirects from a technology-first approach to a problem-first approach, gives concrete examples of first use cases, and recommends a contained test before scale. This is exactly the right strategic framing. Option A (a comprehensive audit) is a common corporate response that delays action and often produces a large report with no clear starting point. Option C is both too specific and too prescriptive — AI in paid media is valid but far from the only or best first application.",
        },
        {
          customerLine: "'We tried personalisation last year and it did not work. We kept sending people offers for products they had already bought.'",
          options: [
            "That is a data quality problem, not a personalisation problem. Personalisation powered by stale or disconnected data will always produce irrelevant experiences — showing someone an offer for a product they already own is a clear sign that the purchase data is not connected to the personalisation engine. Before you try personalisation again, the foundation to fix is the data layer: ensure purchase history, browsing behaviour, and customer profile data are unified in a single view and update in real time. Once that foundation is right, personalisation can work. Running personalisation on a broken data infrastructure and concluding 'personalisation does not work' is like trying to bake a cake with the oven off and concluding that recipes do not work.",
            "Personalisation is very difficult — it requires a large dedicated data team and significant technology investment. It may not be right for your organisation.",
            "You should A/B test different personalisation approaches until you find one that works — try different data signals and see which ones produce better results.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it diagnoses the actual problem (data quality, not personalisation concept), explains why it happens, identifies what needs to be fixed, and reframes the conclusion the client has drawn ('personalisation doesn't work' is wrong — the data layer is the problem). The analogy at the end is a useful rhetorical technique for making the point memorable. Option B is defeatist and inaccurate — personalisation does not require a large dedicated team, and the client's experience was a data problem, not a resource problem. Option C (A/B test different data signals) is not wrong, but it does not address the root cause.",
        },
        {
          customerLine: "'How do we justify the investment in a chatbot to our CFO?'",
          options: [
            "Show the CFO a demo of the chatbot in action — seeing the technology working is more persuasive than a financial model.",
            "A CFO is most persuaded by financial evidence, not technology demonstrations. The most effective chatbot business case is built on three numbers: the current cost per lead qualified (human time × volume), the projected cost per lead qualified with the chatbot (technology cost ÷ volume), and the impact on lead quality and conversion rate. If the chatbot qualifies leads at one-fifth of the current cost and improves conversion by 30% because the sales team is focusing only on high-quality leads, that is a strong financial case. Pilot data is the most persuasive evidence — run a 3-month pilot with one sales team, measure the impact on their pipeline, and present the actual numbers rather than projections.",
            "The chatbot ROI is difficult to measure precisely — frame it as a strategic investment in future-proofing the marketing function.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it frames the business case in the language a CFO uses (cost per unit, conversion impact, actual vs projected data), identifies the three key numbers, and recommends pilot evidence over projections. This is the right approach: specific, financial, data-driven. Option A (a demo) may create interest but it does not answer 'what is the return?' — which is the CFO's actual question. Option C is the worst approach: 'difficult to measure' and 'strategic investment' are the phrases CFOs hear when someone is trying to avoid accountability for the investment. CFOs approve investments with measurable returns and reject ones that cannot be tracked.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the marketing innovation meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "The predictive model has been running for six months and its accuracy is improving every month." },
        { speaker: 'Riley', text: "The automation handle the entire post-purchase journey — 14 customer moments, zero manual effort." },
        { speaker: 'Dana', text: "Personalisation at scale allows us to deliver a one-to-one experience to each of our 400,000 customers." },
        { speaker: 'Marcus', text: "And the chatbot is designing to qualify inbound leads — not to replace the sales team." },
        { speaker: 'Riley', text: "Augmented reality lets customers to experience the product in their own home before they buy." },
        { speaker: 'Dana', text: "The test and learn approach means we define success criteria before the experiment, not after." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The automation handle',
          correction: 'The automation handles',
          explanation: "'Automation' is singular — the verb must be third person singular in simple present: 'handles'. This is a subject-verb agreement error. Simple present third person singular always takes an -s ending for most verbs: 'the system runs', 'the technology improves', 'the automation handles'. 'Handle' (no -s) would be correct for a plural subject ('the automations handle') or for first/second person ('I handle', 'you handle'). With 'the automation' as a singular subject, 'handles' is required.",
        },
        {
          lineIndex: 3,
          incorrectText: 'the chatbot is designing to qualify',
          correction: 'the chatbot is designed to qualify',
          explanation: "'Is designed to' is the correct passive construction — it describes the chatbot's intended purpose. 'Designed' (past participle) is used in the passive: 'the chatbot is designed to do X' means 'someone designed the chatbot to do X'. 'Is designing' (present continuous active) would mean the chatbot itself is actively designing something — which is both grammatically wrong in this context and illogical. The passive 'is designed to' is the standard way to describe the purpose or function of a tool or system: 'the system is built to', 'the feature is intended to', 'the platform is designed to'.",
        },
        {
          lineIndex: 4,
          incorrectText: 'Augmented reality lets customers to experience',
          correction: 'Augmented reality lets customers experience',
          explanation: "After 'let' + object, the verb takes the bare infinitive — without 'to'. 'Lets customers experience' — not 'lets customers to experience'. This is a rule for causative verbs: 'let', 'make', and 'have' are followed by object + bare infinitive: 'let them see', 'make them understand', 'have them complete'. Compare with 'allow', 'enable', and 'permit', which take 'to + infinitive': 'allows customers to experience', 'enables customers to see', 'permits customers to access'. 'Let' always drops the 'to': 'let me know', 'let it go', 'let customers experience'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "A colleague says: 'AI is going to replace marketers. What is the point of learning marketing skills?'",
          salespersonStart: "AI will replace some marketing tasks — but not the marketing function —",
          suggestedCompletion: "and understanding that distinction is exactly the marketing skill that matters most right now. The tasks AI replaces are the repetitive, rule-based ones: generating first drafts, optimising bids, sending timed emails, routing leads. The things AI cannot do — and the evidence for this is consistent — are the things that require original human judgement: understanding what a customer actually needs before they can articulate it, building genuine trust and creative that resonates emotionally, making strategic calls in ambiguous situations, and being accountable to a board or a client for a decision. The marketers who will thrive are the ones who understand what AI can do and use it to scale their own effectiveness — not the ones who compete with it on tasks the technology does faster. The analogy is not 'AI is the replacement' — it is 'AI is the tool, and you are the person who decides what it is for'.",
        },
        {
          customerLine: "Present the business case for investing in personalisation technology to a marketing budget holder.",
          salespersonStart: "The business case for personalisation is not about the technology —",
          suggestedCompletion: "it is about the gap between what we currently deliver and what the commercial impact would be if we delivered relevantly. Our current email open rate is 18%. Industry data shows that personalised emails achieve 42% open rates in our sector. The difference represents approximately 240,000 additional opens per month — and at our current conversion rates, that is £1.1m in additional annual revenue from the same list size. The personalisation platform costs £80k per year. The projected return is 13.75x in year one, improving as the data quality matures. The risk of doing nothing is not that we stay where we are — it is that the brands in our category that invest in personalisation now build a compounding advantage that is progressively harder to close.",
        },
        {
          customerLine: "How do you explain the 'test and learn' approach to a senior leader who wants certainty before investing in a new technology?",
          salespersonStart: "The test and learn approach is actually how you create certainty —",
          suggestedCompletion: "not how you avoid it. The alternative — deciding based on a theoretical business case and deploying at full scale — is where organisations make expensive mistakes. A controlled pilot gives you real data, from your actual customers, in your actual environment. It takes the question from 'will this work in theory?' to 'here is what happened when we tried it.' The pilot costs a fraction of a full deployment, runs for 6 to 12 weeks, and produces a decision based on evidence rather than vendor projections. If it works, you have the proof to scale confidently. If it does not work as expected, you have learned something valuable for a contained cost and can adjust before committing further. The risk is not in testing — the risk is in not testing before you commit.",
        },
      ],
    },
  },
};
