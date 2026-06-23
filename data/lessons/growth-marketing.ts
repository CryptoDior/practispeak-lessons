import { Lesson } from '@/types/lesson';

export const growthMarketing: Lesson = {
  slug: 'growth-marketing',
  title: 'Growth Marketing',
  subtitle: 'How to run fast experiments, use growth frameworks, and build scalable acquisition engines',
  level: 'C1-C2',
  description: 'Growth marketing is not about doing more of everything — it is about finding what works, fast. The best growth marketers run structured experiments, measure what matters, and double down on what drives real results. This lesson teaches the frameworks and vocabulary that growth teams use every day: from the AARRR funnel to viral loops and product-led growth. These are the tools that separate fast-growing companies from ones that just spend more.',
  heroImage: '/images/growth-marketing-hero.png',

  vocabulary: [
    {
      word: 'Growth hacking',
      partOfSpeech: 'noun',
      definition: 'A mindset and method focused on finding fast, creative ways to grow — often with limited budget. Growth hackers test ideas quickly, cut what fails, and scale what works.',
      example: "Riley said: Growth hacking is not about tricks — it is about speed and discipline. You test ten ideas, nine fail, one doubles your sign-ups. Then you put everything behind that one. That is the whole game.",
      imageSlug: '/images/growth-hacking.png',
    },
    {
      word: 'Pirate metrics',
      partOfSpeech: 'noun',
      definition: "A framework for measuring growth across five stages — Acquisition, Activation, Retention, Referral, and Revenue. The acronym AARRR sounds like a pirate, which is where the name comes from.",
      example: "Marcus said: I keep hearing about pirate metrics. Riley said: AARRR — Acquisition, Activation, Retention, Referral, Revenue. It is a simple way to find where your funnel is leaking. Most companies focus on acquisition and ignore retention. That is the most expensive mistake you can make.",
      imageSlug: '/images/pirate-metrics.png',
    },
    {
      word: 'AARRR',
      partOfSpeech: 'abbreviation',
      definition: 'Acquisition, Activation, Retention, Referral, Revenue — the five stages of the growth funnel. Each stage is a place where users can drop off, and each one needs a different strategy to improve.',
      example: "Riley said: Walk me through your AARRR numbers. Where are you losing people? Marcus said: Activation. People sign up but fewer than 20% complete the onboarding. Riley said: That is where you start — not more acquisition. Fix the hole in your bucket first.",
      imageSlug: '/images/aarrr.png',
    },
    {
      word: 'Viral loop',
      partOfSpeech: 'noun',
      definition: 'A growth mechanism where existing users bring in new users — who then bring in more. A strong viral loop means every new user helps you acquire the next one, reducing your overall cost of growth.',
      example: "Riley explained: Dropbox built their viral loop into the product. You get more storage when you invite a friend. The friend signs up, and they also want more storage, so they invite their friends. One user becomes ten. That is a viral loop at its best.",
      imageSlug: '/images/viral-loop.png',
    },
    {
      word: 'Product-led growth',
      partOfSpeech: 'noun',
      definition: 'A growth strategy where the product itself is the main driver of acquisition, retention, and expansion — instead of sales or marketing. Users experience the value of the product and then buy or invite others.',
      example: "Marcus asked: Why does Slack grow so fast without a big sales team? Riley said: Product-led growth. When you use Slack and love it, you invite your whole team. The product does the selling. Marketing and sales support the motion — they do not drive it.",
      imageSlug: '/images/product-led-growth.png',
    },
    {
      word: 'Activation',
      partOfSpeech: 'noun',
      definition: "The point at which a new user first experiences the real value of a product — the 'aha moment'. If users do not reach activation quickly, they leave before they become loyal customers.",
      example: "Riley said: Activation is the most underinvested stage in most funnels. You spend all your budget getting people in the door, and then you let them wander around and leave. Find the one action that predicts long-term retention — and get every new user there in the first session.",
      imageSlug: '/images/activation.png',
    },
    {
      word: 'Experimentation',
      partOfSpeech: 'noun',
      definition: 'A structured process of testing ideas to find what works. In growth marketing, experimentation means running fast, controlled tests — changing one variable at a time — and using the results to make better decisions.',
      example: "Riley said to the team: Growth is built on experimentation. You do not have to know the answer — you have to be disciplined about finding it. We run ten experiments a month. We expect eight to fail. That is not a bad result — that is a healthy growth culture.",
      imageSlug: '/images/experimentation.png',
    },
    {
      word: 'Retention',
      partOfSpeech: 'noun',
      definition: 'Keeping customers coming back after their first purchase or sign-up. Strong retention means users keep using, paying, and engaging over time — and it is almost always cheaper than acquiring new ones.',
      example: "Marcus asked: Should we focus on acquisition or retention? Riley said: If your retention is below 40% at 30 days, focus on retention. You are filling a leaking bucket. Fix the leak first — then turn on the tap.",
      imageSlug: '/images/retention.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "Where is the funnel leaking?",
      definition: "The key diagnostic question in growth marketing — asking which stage of the AARRR funnel is losing users. Identifying the leak is the first step to fixing it.",
      example: "Riley opened the growth review: Before we talk about new channels, let's answer one question — where is the funnel leaking? Show me the drop-off at each stage. The answer to that question tells us exactly where to focus.",
      imageSlug: '/images/where-is-the-funnel-leaking.png',
    },
    {
      phrase: "We need to find the aha moment",
      definition: "The moment when a new user first understands the value of a product. Finding and shortening the path to the aha moment is one of the most powerful things a growth team can do.",
      example: "Riley said: Our activation rate is 18%. That tells me users are not reaching the aha moment before they leave. We need to find it — what is the one thing our best customers do in the first session that casual users never do? That is the aha moment. Get everyone there faster.",
      imageSlug: '/images/we-need-to-find-the-aha-moment.png',
    },
    {
      phrase: "Let's run an experiment on that",
      definition: "A growth team phrase that turns an idea or assumption into a structured test. It signals that decisions should be based on data, not opinions.",
      example: "The team was debating whether to change the onboarding flow. Riley said: We do not have to guess — let's run an experiment on that. We test two versions with 50% of new users each. In two weeks we have a real answer.",
      imageSlug: '/images/lets-run-an-experiment-on-that.png',
    },
    {
      phrase: "Double down on what is working",
      definition: "To invest more in a strategy, channel, or tactic that is already showing strong results. In growth marketing, this means scaling experiments that win — and stopping the ones that do not.",
      example: "Riley said after the monthly review: Referral is generating 40% of our new sign-ups at one third of the acquisition cost. That is the signal. We need to double down on what is working — more budget, more resource, a dedicated team on referral. Everything else waits.",
      imageSlug: '/images/double-down-on-what-is-working.png',
    },
    {
      phrase: "The viral coefficient is...",
      definition: "A specific metric used to measure how many new users each existing user brings in. A viral coefficient above 1 means the product is growing on its own — every user brings in more than one new user.",
      example: "Riley said: Our viral coefficient is 0.4. Marcus asked: Is that good? Riley said: It means every ten users bring in four more. That is not viral — it is a nice bonus. To get truly viral growth, we need to get above 1. That is the threshold where growth becomes self-sustaining.",
      imageSlug: '/images/the-viral-coefficient-is.png',
    },
    {
      phrase: "Fix the retention before you scale acquisition",
      definition: "A core growth principle — you cannot grow sustainably if users are leaving as fast as they arrive. Fixing retention first means every new user you acquire stays longer and is worth more.",
      example: "The team wanted to triple the paid acquisition budget. Riley said: I hear you — but fix the retention before you scale acquisition. Right now we are spending £50 to get a user who stays for three weeks. If we fix retention first, that same £50 gets us a user who stays for six months. The economics change completely.",
      imageSlug: '/images/fix-the-retention-before-you-scale-acquisition.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the CEO has asked us to double our sign-ups in six months without doubling the budget. Where do we even start?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Start with [[pirate metrics:a framework for measuring growth across five stages — Acquisition, Activation, Retention, Referral, Revenue]]. Walk me through the [[AARRR:Acquisition, Activation, Retention, Referral, Revenue — the five stages of the growth funnel]] numbers. Where is the funnel leaking?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Acquisition is fine — we get about 5,000 sign-ups a month. But only 18% complete the onboarding and become active users.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is your leak. [[Activation:the point at which a new user first experiences the real value of a product]] is broken. We need to find the aha moment — the one thing that turns a sign-up into a loyal user. What do your best customers do in the first session that others do not?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Our data shows users who invite a team member in the first 48 hours have a 70% retention rate at 90 days. Everyone else is around 25%.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is the aha moment. And that insight is also the seed of a [[viral loop:a growth mechanism where existing users bring in new users who then bring in more]]. If every user invites one person, your [[experimentation:a structured process of testing ideas to find what works]] budget goes further than any paid channel.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "How do we get more users to invite someone in the first 48 hours?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Let's run an experiment on that. We redesign onboarding to make the invite step the second action after sign-up — not a later optional step. We test it on 50% of new users. In three weeks we have a real answer.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what about [[retention:keeping customers coming back after their first purchase or sign-up]]? Should we be working on that at the same time?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Fix the retention before you scale acquisition. At 25%, you are spending money to fill a leaking bucket. Fix that first — then turn on the tap.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Is this what [[product-led growth:a growth strategy where the product itself drives acquisition, retention, and expansion]] looks like in practice?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly. You are not adding more ads or sales calls — you are building the growth into the product itself. The invite mechanic, the aha moment, the retention hook — those are product decisions, not campaign decisions.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And if the experiment works — what then?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
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
