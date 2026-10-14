import { Lesson } from '@/types/lesson';

export const growthMarketing: Lesson = {
  slug: 'growth-marketing',
  title: 'Growth Marketing',
  subtitle: 'How to run fast experiments, use growth frameworks, and build scalable acquisition engines',
  level: 'C1-C2',
  description: 'Growth marketing is not about doing more of everything — it is about finding what works, fast. The best growth marketers run structured experiments, measure what matters, and double down on what drives real results. This lesson teaches the frameworks and vocabulary that growth teams use every day: from the AARRR funnel to viral loops and product-led growth. These are the tools that separate fast-growing companies from ones that just spend more.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/growth-marketing-hero.png',

  vocabulary: [
    {
      word: 'Growth hacking',
      partOfSpeech: 'noun',
      definition: 'Finding fast, cheap and creative ways to grow.',
      example: 'Free invites to friends was our best growth hacking idea.',
      imageSlug: '/images/growth-hacking.png',
    },
    {
      word: 'Pirate metrics',
      partOfSpeech: 'noun',
      definition: 'Five steps used to measure a company\'s growth.',
      example: 'We use pirate metrics to see where users leave.',
      imageSlug: '/images/pirate-metrics.png',
    },
    {
      word: 'AARRR',
      partOfSpeech: 'abbreviation',
      definition: 'Short for acquisition, activation, retention, referral and revenue.',
      example: 'AARRR helps us check each step of growth.',
      imageSlug: '/images/aarrr.png',
    },
    {
      word: 'Viral loop',
      partOfSpeech: 'noun',
      definition: 'When users bring new users, who then bring more users.',
      example: 'Our \'invite a friend\' button created a viral loop.',
      imageSlug: '/images/viral-loop.png',
    },
    {
      word: 'Product-led growth',
      partOfSpeech: 'noun',
      definition: 'Growth that comes mainly from people using the product.',
      example: 'Our free plan drives product-led growth.',
      imageSlug: '/images/product-led-growth.png',
    },
    {
      word: 'Activation',
      partOfSpeech: 'noun',
      definition: 'The moment a new user first sees the value of a product.',
      example: 'Activation happens when a user sends their first invoice.',
      imageSlug: '/images/activation.png',
    },
    {
      word: 'Experimentation',
      partOfSpeech: 'noun',
      definition: 'Testing ideas to see what works.',
      example: 'Experimentation helped us find the best price.',
      imageSlug: '/images/experimentation.png',
    },
    {
      word: 'Retention',
      partOfSpeech: 'noun',
      definition: 'Keeping customers coming back.',
      example: 'Our retention is high: most users stay for a year.',
      imageSlug: '/images/growth-marketing-retention.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "Where is the funnel leaking?",
      definition: 'A question about where you are losing customers.',
      example: 'Sales are low. Where is the funnel leaking?',
      imageSlug: '/images/where-is-the-funnel-leaking.png',
    },
    {
      phrase: "We need to find the aha moment",
      definition: 'A way to say we must find when users first love the product.',
      example: 'We need to find the aha moment for new users.',
      imageSlug: '/images/we-need-to-find-the-aha-moment.png',
    },
    {
      phrase: "Let's run an experiment on that",
      definition: 'A way to suggest testing an idea.',
      example: 'Good idea. Let\'s run an experiment on that next week.',
      imageSlug: '/images/lets-run-an-experiment-on-that.png',
    },
    {
      phrase: "Double down on what is working",
      definition: 'To put more effort into what already works.',
      example: 'Video works well, so let\'s double down on what is working.',
      imageSlug: '/images/double-down-on-what-is-working.png',
    },
    {
      phrase: "The viral coefficient is...",
      definition: 'A way to say how many new users each user brings.',
      example: 'The viral coefficient is 1.2, so we are growing.',
      imageSlug: '/images/the-viral-coefficient-is.png',
    },
    {
      phrase: "Fix the retention before you scale acquisition",
      definition: 'A rule to keep users before you look for more.',
      example: 'Fix the retention before you scale acquisition, or you waste money.',
      imageSlug: '/images/fix-the-retention-before-you-scale-acquisition.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, the CEO has asked us to double our sign-ups in six months without doubling the budget. Where do we even start?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Start with [[pirate metrics:a framework for measuring growth across five stages — Acquisition, Activation, Retention, Referral, Revenue]]. Walk me through the [[AARRR:Acquisition, Activation, Retention, Referral, Revenue — the five stages of the growth funnel]] numbers. Where is the funnel leaking?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Acquisition is fine — we get about 5,000 sign-ups a month. But only 18% complete the onboarding and become active users.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That is your leak. [[Activation:the point at which a new user first experiences the real value of a product]] is broken. We need to find the aha moment — the one thing that turns a sign-up into a loyal user. What do your best customers do in the first session that others do not?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Our data shows users who invite a team member in the first 48 hours have a 70% retention rate at 90 days. Everyone else is around 25%.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That is the aha moment. And that insight is also the seed of a [[viral loop:a growth mechanism where existing users bring in new users who then bring in more]]. If every user invites one person, your [[experimentation:a structured process of testing ideas to find what works]] budget goes further than any paid channel.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "How do we get more users to invite someone in the first 48 hours?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Let's run an experiment on that. We redesign onboarding to make the invite step the second action after sign-up — not a later optional step. We test it on 50% of new users. In three weeks we have a real answer.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And what about [[retention:keeping customers coming back after their first purchase or sign-up]]? Should we be working on that at the same time?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Fix the retention before you scale acquisition. At 25%, you are spending money to fill a leaking bucket. Fix that first — then turn on the tap.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Is this what [[product-led growth:a growth strategy where the product itself drives acquisition, retention, and expansion]] looks like in practice?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Exactly. You are not adding more ads or sales calls — you are building the growth into the product itself. The invite mechanic, the aha moment, the retention hook — those are product decisions, not campaign decisions.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And if the experiment works — what then?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Double down on what is working. Move more budget, more engineering time, more focus there. That is [[growth hacking:a mindset focused on finding fast creative ways to grow by testing quickly and scaling what works]] in its simplest form — test, learn, scale.",
    }
  ],

  matchingExercise: [
    { word: 'growth hacking', definition: 'a mindset focused on finding fast, creative ways to grow by testing quickly and scaling what works' },
    { word: 'pirate metrics', definition: 'a framework for measuring growth across five stages — Acquisition, Activation, Retention, Referral, Revenue' },
    { word: 'AARRR', definition: 'the acronym for the five growth stages: Acquisition, Activation, Retention, Referral, Revenue' },
    { word: 'viral loop', definition: 'a mechanism where existing users bring in new users who then bring in more' },
    { word: 'product-led growth', definition: 'a strategy where the product itself drives acquisition, retention, and expansion' },
    { word: 'activation', definition: 'the point at which a new user first experiences the real value of a product' },
    { word: 'experimentation', definition: 'a structured process of testing ideas to find what works' },
    { word: 'retention', definition: 'keeping customers coming back after their first purchase or sign-up' }
  ],

  fillBlankExercise: [
    { before: "Our activation rate is 18% — users are not reaching the aha ", after: " before they leave.", answer: "moment" },
    { before: "Fix the ", after: " before you scale acquisition — you cannot grow sustainably if users leave as fast as they arrive.", answer: "retention" },
    { before: "We do not need to guess — let's run an ", after: " on that and get a real answer in two weeks.", answer: "experiment" },
    { before: "Referral is generating 40% of sign-ups at half the cost — we need to double ", after: " on it.", answer: "down" },
    { before: "The AARRR framework shows us exactly where the funnel is ", after: " — and which stage to fix first.", answer: "leaking" },
    { before: "Slack grows through product-led ", after: " — the product does the selling, and marketing supports the motion.", answer: "growth" }
  ],

  multipleChoiceExercise: [
    {
      question: "What does Riley say is the first thing to do before talking about new acquisition channels?",
      options: ["Increase the paid media budget", "Find out where the funnel is leaking using AARRR metrics", "Launch a referral programme"],
      correctIndex: 1
    },
    {
      question: "What does Marcus's data reveal about the aha moment in their product?",
      options: ["Users who complete a free trial convert at 70%", "Users who invite a team member in 48 hours retain at 70% vs 25% for everyone else", "Users who watch the onboarding video stay for six months"],
      correctIndex: 1
    },
    {
      question: "What does Riley say about fixing retention before scaling acquisition?",
      options: ["Retention is less important than acquisition for fast growth", "If retention is broken, you are spending money to fill a leaking bucket", "Both should be scaled at the same time for best results"],
      correctIndex: 1
    },
    {
      question: "How does Riley describe the core principle of growth hacking?",
      options: ["Find clever tricks and shortcuts that competitors have not discovered yet", "Test quickly, cut what fails, and scale what works", "Spend less on paid media and more on organic content"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Think of a product or app you use every day that seems to grow without much advertising. How do you think it grows? What keeps you using it?",
      "Has your team ever run an experiment or A/B test to improve a marketing result? What did you learn — and did you act on it?",
      "If you had to double your sign-ups or leads in six months without doubling the budget, what would you try first?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "AARRR stands for Acquisition, Activation, Retention, Referral, and _____.",
        options: ["Results", "Revenue", "Reach"],
        correctIndex: 1,
        explanation: "AARRR is the pirate metrics framework: Acquisition, Activation, Retention, Referral, Revenue. 'Revenue' is the final stage — measuring whether you are actually generating money from users who have been acquired, activated, and retained. 'Results' and 'Reach' are not part of this framework."
      },
      {
        sentence: "The moment a user first understands the real value of your product is called the _____ moment.",
        options: ["aha", "click", "trigger"],
        correctIndex: 0,
        explanation: "'Aha moment' is the established growth marketing term for the point at which a new user first experiences meaningful value — the moment that separates users who stay from those who leave. 'Click moment' and 'trigger moment' are not standard growth terminology."
      },
      {
        sentence: "If every existing user brings in more than one new user, you have a _____ coefficient above 1.",
        options: ["viral", "growth", "referral"],
        correctIndex: 0,
        explanation: "'Viral coefficient' is the specific metric that measures how many new users each existing user brings in. A viral coefficient above 1 means the product is growing on its own. 'Growth coefficient' and 'referral coefficient' are not standard terms — always say 'viral coefficient'."
      },
      {
        sentence: "Slack's growth model is product-led — the product _____ the selling, and marketing supports the motion.",
        options: ["does", "makes", "creates"],
        correctIndex: 0,
        explanation: "'The product does the selling' is the idiomatic phrase for product-led growth — it means the product's value is what drives acquisition, not a traditional sales or marketing push. 'Makes the selling' and 'creates the selling' are grammatically incorrect in this context."
      },
      {
        sentence: "When a test shows strong results, you should _____ down on what is working.",
        options: ["push", "double", "lean"],
        correctIndex: 1,
        explanation: "'Double down on what is working' is the fixed growth marketing phrase for investing more in a strategy that is showing strong results. 'Push down' means to reduce or suppress. 'Lean into' is also used but 'double down' is more specific — it implies increasing investment significantly, not just paying more attention."
      },
      {
        sentence: "In product-led growth, the product is the primary driver of _____, not marketing or sales.",
        options: ["awareness", "acquisition", "attention"],
        correctIndex: 1,
        explanation: "'Acquisition' is the correct growth marketing term here — it refers to bringing new users into the product. In a product-led model, users discover and adopt the product through use rather than through advertising or sales outreach. 'Awareness' is a marketing metric, not a growth driver. 'Attention' is too vague."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the team member or stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "We are spending more on ads but sign-ups are not growing. What are we doing wrong?",
          options: [
            "We need to spend on better channels — the problem is probably which platforms we are using.",
            "Before we change the spend, let's look at where the funnel is leaking. More acquisition spend cannot fix an activation or retention problem — it just accelerates the bleeding.",
            "We should reduce ad spend and try organic content instead — it is more cost-efficient."
          ],
          correctIndex: 1,
          explanation: "Option B asks the right diagnostic question before recommending any action — it correctly identifies that a spending problem is often actually a funnel problem. Option A assumes the issue is channel selection without evidence. Option C shifts to organic content without any data showing that the channel is the problem — and organic growth is slow if the funnel is broken."
        },
        {
          customerLine: "Our retention at 30 days is 22%. Should we be worried?",
          options: [
            "It depends on the industry — some verticals naturally have lower retention rates.",
            "Yes. At 22%, you are losing almost four out of five users in the first month. Before we scale acquisition, we need to find the aha moment and get every new user there faster. Fix the retention first.",
            "22% is low but we can compensate by increasing top-of-funnel volume — more acquisition will solve it."
          ],
          correctIndex: 1,
          explanation: "Option B gives a direct, accurate diagnosis and connects to the right action — fixing activation and retention before scaling. Option A is evasive — while benchmarks vary, 22% is a significant leak that needs addressing regardless of industry. Option C recommends the opposite of what growth best practice says: more acquisition with broken retention makes the economics worse, not better."
        },
        {
          customerLine: "The team has an idea to change the sign-up flow. Should we just do it?",
          options: [
            "Let's run an experiment on that — test the new flow with 50% of users and compare conversion rates over two weeks. Data beats opinion every time.",
            "If the team thinks it is better, we should trust their instinct and roll it out.",
            "We should get customer feedback first and then make the change based on what they say."
          ],
          correctIndex: 0,
          explanation: "Option A is the growth marketing approach — it turns an opinion into a structured, measurable test. Option B relies on instinct rather than evidence, which is how good teams make expensive mistakes. Option C — customer feedback — is valuable for discovery but slower and less precise than a controlled experiment for testing a specific change."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Riley", text: "Let's review our AARRR metrics — Acquisition, Activation, Retention, Referral, and Results." },
        { speaker: "Marcus", text: "Actually, the final R stands for Revenue, not Results — it measures whether users are generating money for the business." },
        { speaker: "Riley", text: "Our activation is low — users are not finding the eureka moment before they leave." },
        { speaker: "Marcus", text: "The standard term is 'aha moment', not 'eureka moment'. Same idea, but aha is the one the industry uses." },
        { speaker: "Riley", text: "Fair point. And once we find it, we should lean lightly into referral — it looks promising." },
        { speaker: "Marcus", text: "If referral is working, we should double down on it — not just lean lightly. That is where the growth is." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "Results",
          correction: "Revenue",
          explanation: "The final R in AARRR stands for Revenue — not Results. AARRR = Acquisition, Activation, Retention, Referral, Revenue. Revenue measures whether users are actually generating money for the business. 'Results' is vague and not part of the framework."
        },
        {
          lineIndex: 2,
          incorrectText: "eureka moment",
          correction: "aha moment",
          explanation: "'Aha moment' is the established growth marketing term for the point at which a user first experiences the value of a product. 'Eureka moment' has the same general meaning but is not used in growth marketing — it sounds informal and is not the industry standard term."
        },
        {
          lineIndex: 4,
          incorrectText: "lean lightly into referral",
          correction: "double down on referral",
          explanation: "'Double down' is the correct phrase in growth marketing when a channel or tactic is showing strong results — it means increasing investment significantly. 'Lean lightly into' suggests a cautious, minimal approach, which is the wrong response when something is working. In growth, when you find what works, you move fast and invest more."
        }
      ]
    },
    finishTheLine: {
      instructions: "The growth marketer starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "We want to grow sign-ups fast but we have a limited budget.",
          salespersonStart: "Then the first thing we do is map the funnel and find where it is leaking. More spend cannot fix a broken funnel — but fixing activation can double your results without spending a penny more on acquisition. Let's start by looking at...",
          suggestedCompletion: "the one action that separates users who stay from users who leave. Once we know what the aha moment is, we redesign onboarding to get every new user there in the first session."
        },
        {
          customerLine: "How do we build a viral loop into our product?",
          salespersonStart: "Look for a natural reason for users to invite others — not a gimmick, but something that makes the product better when more people use it. For example, we could make collaboration the core of the experience, so that...",
          suggestedCompletion: "every user who wants to get full value has to bring in their team. When that happens, one sign-up becomes five. And those five bring in more. That is a viral loop built into the product, not bolted on."
        },
        {
          customerLine: "Our retention is 22% at 30 days. What do we do?",
          salespersonStart: "Fix the retention before you scale acquisition — otherwise you are filling a leaking bucket. The first step is to find your aha moment: what is the one thing that users who stay always do in the first session? Then...",
          suggestedCompletion: "we redesign onboarding to get every new user to that action within 48 hours. Let's run an experiment on that, measure it over two weeks, and see if we can move retention to 40% before we touch the acquisition budget."
        }
      ]
    }
  }
};
