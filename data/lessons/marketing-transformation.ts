import { Lesson } from '@/types/lesson';

export const marketingTransformation: Lesson = {
  slug: 'marketing-transformation',
  title: 'Marketing Transformation',
  subtitle: 'How to lead organisational and digital change in a marketing function',
  level: 'C1-C2',
  description: "Transformation is one of the most used — and most misunderstood — words in business. Real marketing transformation is not about updating your tools or launching a new campaign framework. It is about changing how a team thinks, works, and measures success. This lesson teaches the language of marketing transformation: how to build a roadmap, manage resistance to change, run agile marketing at scale, and communicate progress in a way that brings people with you.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-hero.png',

  vocabulary: [
    {
      word: 'Transformation roadmap',
      partOfSpeech: 'noun',
      definition: 'A plan that shows the steps of a big change over time.',
      example: 'Our transformation roadmap has three stages over two years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-three-stages-two-year-plan.png',
    },
    {
      word: 'Change management',
      partOfSpeech: 'noun',
      definition: 'Helping people accept and adapt to a change at work.',
      example: 'Good change management made the new system easy for the team.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-guided-team-new-system.png',
    },
    {
      word: 'Agile marketing',
      partOfSpeech: 'noun',
      definition: 'Working in short, quick cycles and changing plans often.',
      example: 'With agile marketing, we change our ads every two weeks.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-fortnightly-ad-test-revisions.png',
    },
    {
      word: 'Sprint',
      partOfSpeech: 'noun',
      definition: 'A short period of work with one clear goal.',
      example: 'This sprint, we will finish the new landing page.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-landing-page-sprint-commitment.png',
    },
    {
      word: 'Stakeholder buy-in',
      partOfSpeech: 'noun',
      definition: 'Support from the important people in a project.',
      example: 'We need stakeholder buy-in before we change the team.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-support-before-team-restructure.png',
    },
    {
      word: 'Capability gap',
      partOfSpeech: 'noun',
      definition: 'The difference between the skills you have and the skills you need.',
      example: 'Our biggest capability gap is data skills.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-data-skills-shortfall-assessment.png',
    },
    {
      word: 'Operating model',
      partOfSpeech: 'noun',
      definition: 'How a team is set up to do its work.',
      example: 'Our new operating model has smaller teams.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-smaller-cross-functional-teams.png',
    },
    {
      word: 'Digital maturity',
      partOfSpeech: 'noun',
      definition: 'How well a team uses digital tools and data.',
      example: 'Our digital maturity is low, so we still use paper reports.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-paper-reporting-low-digital-use.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "Where are we on the roadmap?",
      definition: 'A question to check progress on a plan.',
      example: 'It\'s been six months. Where are we on the roadmap?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-six-month-roadmap-progress-review.png',
    },
    {
      phrase: "We need to bring people with us",
      definition: 'A way to say the team must support the change.',
      example: 'This is a big change, so we need to bring people with us.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-include-team-in-change-design.png',
    },
    {
      phrase: "What is the sprint goal this week?",
      definition: 'A question about the main task for a short work period.',
      example: 'Before we start, what is the sprint goal this week?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-define-week-goal-before-start.png',
    },
    {
      phrase: "Close the capability gap before you scale",
      definition: 'A rule to learn the skills you need before you grow.',
      example: 'Close the capability gap before you scale, or things will break.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-build-skills-before-expansion.png',
    },
    {
      phrase: "What needs to change in the operating model?",
      definition: 'A question about how the team should be set up.',
      example: 'The team is too slow. What needs to change in the operating model?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-diagnose-slow-approval-workflow.png',
    },
    {
      phrase: "Get stakeholder buy-in early",
      definition: 'A rule to get support from key people at the start.',
      example: 'Get stakeholder buy-in early, so the project doesn\'t stop later.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-transformation-early-leader-input-before-budget.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, the CEO wants the marketing function to be data-driven and agile within 18 months. I have been asked to lead the transformation. Where do I start?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Start with a [[capability gap:the difference between what the team currently has and what it needs to achieve the transformation goal]] assessment. Before you build a [[transformation roadmap:a plan that shows how a major change will happen over time]], you need to know exactly what is missing — skills, tools, processes, or all three.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "We did a [[digital maturity:the degree to which a team uses digital tools, data, and ways of working effectively]] audit last quarter. We are at stage two — we have tools but do not use them well.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Good — that is your baseline. Now build the roadmap in phases. You cannot fix everything at once. What does the [[operating model:the way a team is structured to deliver its work including roles, processes, and tools]] look like right now?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "We have a traditional structure — campaigns are planned annually, there are four approval layers for any content, and each team works separately. No shared data.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That structure will not support [[agile marketing:a way of working that breaks marketing work into short focused cycles with fast review and adaptation]]. What needs to change in the operating model? Start there — before you add technology or hire anyone new.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I want to introduce two-week [[sprint:a fixed, short period of focused work at the end of which the team reviews what was achieved]]s. But I am worried the team will resist the change.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That is a [[change management:the process of helping people understand, accept, and adapt to a major change]] challenge. We need to bring people with us. Get them into the process early — let them shape how the sprints work, not just be told what they are.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And the leadership team — the CFO is already asking whether the transformation budget is justified.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Get [[stakeholder buy-in:the agreement and support of key people whose approval is needed for a change to succeed]] early. The CFO should be involved before the budget is set, not after. People support what they help to build — and they block what is done to them.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "The CEO has also asked us to double headcount at the same time. Should we scale while we transform?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "No — close the capability gap before you scale. Hiring more people into a broken model just gives you more people doing the wrong things. Fix the model first, then hire into it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "How do I show progress to the board without waiting 18 months?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Use the roadmap. Every quarter, answer: where are we on the roadmap? Show what was planned, what was delivered, and what changed — and why. Transformation credibility is built through transparency, not just results.",
    }
  ],

  matchingExercise: [
    { word: 'transformation roadmap', definition: 'a plan that shows how a major change will happen over time — what, in what order, and by when' },
    { word: 'change management', definition: 'the process of helping people understand, accept, and adapt to a major change' },
    { word: 'agile marketing', definition: 'a way of working that breaks marketing work into short focused cycles with fast review and adaptation' },
    { word: 'sprint', definition: 'a fixed, short period of focused work at the end of which the team reviews what was achieved' },
    { word: 'stakeholder buy-in', definition: 'the agreement and support of key people whose approval is needed for a change to succeed' },
    { word: 'capability gap', definition: 'the difference between what a team currently has and what it needs to achieve the transformation goal' },
    { word: 'operating model', definition: 'the way a team is structured to deliver its work — including roles, processes, tools, and decision-making' },
    { word: 'digital maturity', definition: 'the degree to which a team uses digital tools, data, and ways of working effectively' }
  ],

  fillBlankExercise: [
    { before: "Close the ", after: " gap before you scale — hiring more people into a broken model just makes the problems bigger.", answer: "capability" },
    { before: "Get stakeholder buy-in ", after: " — the CFO should be involved before the budget is set, not after.", answer: "early" },
    { before: "We need to bring people ", after: " us — announce the change to them, not at them, and involve them in shaping it.", answer: "with" },
    { before: "What is the ", after: " goal this week? Not a list of tasks — one outcome that defines whether the week was a success.", answer: "sprint" },
    { before: "Strategy without operating model change is just a document — what needs to change in the ", after: " model?", answer: "operating" },
    { before: "Our digital ", after: " assessment shows we have the tools but are not using them well — we are at stage two of five.", answer: "maturity" }
  ],

  multipleChoiceExercise: [
    {
      question: "Why does Riley say the low adoption rate for the new system is a change management problem?",
      options: ["Because the system was poorly designed", "Because people do not resist change — they resist losing control, clarity, and confidence", "Because the team was not trained on the new system before launch"],
      correctIndex: 1
    },
    {
      question: "What does Riley say is wrong with scaling the team before the transformation is complete?",
      options: ["It is too expensive to hire during a transformation", "Hiring more people into a broken model gives you more people doing the wrong things", "The new people will not understand the transformation goals"],
      correctIndex: 1
    },
    {
      question: "What does Riley recommend as the first step before building the transformation roadmap?",
      options: ["Get CEO approval for the budget", "Run a capability gap assessment to identify what is missing", "Launch a pilot sprint to test the agile model"],
      correctIndex: 1
    },
    {
      question: "How does Riley say transformation credibility is built with the board?",
      options: ["By delivering all results in year one before reporting anything", "Through transparency — showing what was planned, what was delivered, and what changed and why", "By keeping the roadmap internal until results are proven"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Has your company or marketing team ever gone through a major transformation — a new way of working, a new technology, or a restructure? What went well, and what made it hard?",
      "When change is announced at work, what do you need to hear from leadership to feel comfortable with it? What makes you trust that it will go well?",
      "Do you work in an agile way — with short cycles, sprints, and regular reviews? Or is your team more traditional, with long plans and fixed schedules? Which do you prefer?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "The transformation is failing not because the strategy is wrong, but because the _____ model has not changed.",
        options: ["business", "working", "operating"],
        correctIndex: 2,
        explanation: "'Operating model' is the specific term for the way a team is structured to deliver its work — including roles, processes, tools, and decision-making. 'Business model' refers to how a company creates and captures value commercially. 'Working model' is too vague. When the issue is team structure, process, and tools, 'operating model' is the right diagnosis."
      },
      {
        sentence: "People do not resist change — they resist losing control, clarity, and _____.",
        options: ["certainty", "confidence", "status"],
        correctIndex: 1,
        explanation: "'Confidence' completes the trio of control, clarity, and confidence — the three things people fear losing when change is announced. 'Certainty' is close in meaning to clarity. 'Status' is a real concern in change management but is not part of this specific framework. The phrase 'control, clarity, and confidence' is the established way to describe what change management must address."
      },
      {
        sentence: "In agile marketing, a _____ is a fixed short period of work — usually one to four weeks — with a defined goal.",
        options: ["cycle", "sprint", "phase"],
        correctIndex: 1,
        explanation: "'Sprint' is the specific agile term for a time-boxed period of work — usually one to four weeks — in which the team focuses on a defined goal and reviews progress at the end. 'Cycle' is a general term. 'Phase' is used for longer, sequential sections of a project or roadmap — not the short, repeating work periods in an agile model."
      },
      {
        sentence: "Get _____ buy-in early — the people who need to approve the change should help shape it, not just be told about it.",
        options: ["leadership", "stakeholder", "executive"],
        correctIndex: 1,
        explanation: "'Stakeholder buy-in' is the fixed term for the agreement and support of key people whose approval or participation is needed for a change to succeed. 'Leadership buy-in' is used informally but is less specific — stakeholders include the CFO, CTO, and board, not just the leadership team. 'Executive buy-in' is similar but narrower."
      },
      {
        sentence: "We need to close the _____ gap before we scale — the team lacks the data skills and performance marketing experience the new model requires.",
        options: ["skill", "capability", "knowledge"],
        correctIndex: 1,
        explanation: "'Capability gap' is the established transformation term for the difference between what the team currently has and what it needs. 'Skill gap' is narrower — it focuses on individual skills. 'Knowledge gap' is even narrower. 'Capability' covers skills, tools, processes, and ways of working — it is the comprehensive term."
      },
      {
        sentence: "Our digital _____ assessment shows we are at stage two — we have the tools but are not using them well.",
        options: ["readiness", "maturity", "capability"],
        correctIndex: 1,
        explanation: "'Digital maturity' is the specific term for how effectively a team uses digital tools, data, and modern ways of working. It is typically measured on a scale (stage 1–5 or similar) — which is why 'assessment' and 'stage two' are natural companions to 'maturity'. 'Digital readiness' is used for preparedness before adoption. 'Digital capability' overlaps but is not as commonly used in maturity assessment frameworks."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "The team is resisting the new agile model. What should we do?",
          options: [
            "Mandate the change — if the leadership team has approved it, the team needs to follow.",
            "We need to bring people with us. Resistance usually means the team does not understand what is changing, what is staying the same, and what is in it for them. Get them in the room. Let them shape how the model works in practice. People support what they help to build.",
            "Give the team more time to adjust — change takes longer than planned and we should be patient."
          ],
          correctIndex: 1,
          explanation: "Option B applies correct change management thinking — resistance is a signal, not an obstacle. Involving the team in shaping the model builds ownership and reduces resistance. Option A mandates compliance, which drives surface behaviour without real adoption. Option C is too passive — more time without changed communication or involvement does not resolve the underlying cause of resistance."
        },
        {
          customerLine: "The CEO wants us to double headcount immediately to accelerate the transformation.",
          options: [
            "We should hire as fast as possible — more people means faster execution.",
            "Close the capability gap before you scale. Right now, hiring more people into our current operating model gives us more people doing the wrong things. I recommend we complete phase one of the transformation — fixing process and structure — before we hire into the new model.",
            "We could hire for specific gaps while the transformation is happening in parallel."
          ],
          correctIndex: 1,
          explanation: "Option B applies the transformation principle correctly — scaling a broken model makes problems bigger. Phase one (fixing the operating model) must come before scaling. Option A accelerates without direction, which is a common transformation failure mode. Option C sounds pragmatic but is risky — hiring into a model that is still being redesigned creates confusion about roles, process, and priorities."
        },
        {
          customerLine: "How do we show progress to the board without waiting until the end of the 18 months?",
          options: [
            "Share only the positive results each quarter — the board needs to stay confident in the plan.",
            "Use the transformation roadmap as the reporting structure. Each quarter: where are we on the roadmap — what was planned, what was delivered, what changed and why. Transformation credibility is built through transparency, not just results.",
            "Present a summary deck every six months — quarterly reporting creates too much noise."
          ],
          correctIndex: 1,
          explanation: "Option B uses the roadmap as a progress tool and commits to transparency — showing not just wins but also changes in direction and the reasons behind them. This builds long-term credibility with the board. Option A shares only good news, which destroys trust when problems eventually appear. Option C reduces reporting frequency, which leaves the board without visibility and reduces their confidence in the plan."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "I'm going to announce the transformation to the team next week and then ask for their support." },
        { speaker: "Riley", text: "That is too late — get stakeholder buy-in early. Involve them before the plan is finalised, not after you announce it." },
        { speaker: "Marcus", text: "Understood. And I've planned the transformation in one big phase — we will change everything at the same time." },
        { speaker: "Riley", text: "That is too risky. A transformation roadmap should have multiple phases — changing everything at once creates too much disruption and too little control." },
        { speaker: "Marcus", text: "Right. And before we hire 20 new people, should we close the skills gap first?" },
        { speaker: "Riley", text: "Yes — but the right term is 'capability gap', not 'skills gap'. Capability covers skills, tools, and processes — it is broader." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "announce the transformation to the team next week and then ask for their support",
          correction: "involve the team in shaping the transformation before you announce it",
          explanation: "Announcing a change and then asking for support is a common change management mistake — by the time you announce, people feel the decision has been made without them, which creates resistance. Get stakeholder and team buy-in early — before the plan is finalised. People support what they help to build."
        },
        {
          lineIndex: 2,
          incorrectText: "planned the transformation in one big phase — we will change everything at the same time",
          correction: "use a phased transformation roadmap — change things in a defined sequence, not all at once",
          explanation: "Transformation roadmaps use multiple phases to make complex change manageable and to allow for learning and adjustment. Changing everything simultaneously creates overwhelming disruption, reduces the ability to diagnose what is and is not working, and makes it impossible to attribute results to specific changes."
        },
        {
          lineIndex: 4,
          incorrectText: "skills gap",
          correction: "capability gap",
          explanation: "'Capability gap' is the correct transformation term — it is broader than 'skills gap' and covers the full range of what a team needs: skills, tools, processes, and ways of working. 'Skills gap' focuses only on individual knowledge and abilities. In a transformation context, the gap is almost always broader than skills alone."
        }
      ]
    },
    finishTheLine: {
      instructions: "The transformation leader starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "The team is nervous about moving to agile. How do we get them on board?",
          salespersonStart: "We need to bring people with us — not announce the change to them. Here is what I recommend: get the team in the room before the sprint model is finalised. Let them shape how it works. Ask them: what does the current process make hard? Then show them how...",
          suggestedCompletion: "agile solves that specific problem. When the solution addresses their actual frustration, resistance drops. Start with a two-week pilot sprint — small, safe, voluntary. Let the results speak. Then scale what works."
        },
        {
          customerLine: "The CEO is asking for results but we are only in month three of an 18-month plan.",
          salespersonStart: "Use the transformation roadmap as the progress tool. Show the board: where are we on the roadmap — what was planned for this phase, what was delivered, and what changed and why. The key message is...",
          suggestedCompletion: "transformation credibility is built through transparency, not just results. Showing that we are on plan, learning, and adjusting is more valuable at month three than overpromising on outcomes we cannot yet deliver."
        },
        {
          customerLine: "Should we hire 30 new people to accelerate the transformation?",
          salespersonStart: "Not yet. Close the capability gap before you scale. Our operating model is still being redesigned — if we hire 30 people into a model that is changing, we create confusion about roles and priorities. My recommendation is...",
          suggestedCompletion: "complete phase one — fix the structure, process, and tools — and then hire into the new model. That way, every new person joins a functioning system, not a work in progress. We will move faster by moving in the right order."
        }
      ]
    }
  }
};
