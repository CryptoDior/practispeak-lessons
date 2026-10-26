import { Lesson } from '@/types/lesson';

export const masteringAmbiguity: Lesson = {
  slug: 'mastering-ambiguity',
  title: 'Mastering Ambiguity',
  subtitle: 'How to communicate clearly when nothing is certain — and stay credible while you do it',
  level: 'C1-C2',
  description: 'Business rarely gives you certainty. Markets shift, plans change, and decisions get made with incomplete information. The people who succeed at senior level are the ones who can communicate clearly under uncertainty — who can be honest about what they do not know without losing the room. This lesson teaches you the language of ambiguity: how to hedge, caveat, and scenario-plan in a way that sounds confident, not evasive.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-hero.png',

  vocabulary: [
    {
      word: 'HEDGE',
      partOfSpeech: 'noun / verb',
      definition: 'To use careful words so you don\'t sound too certain.',
      example: 'I\'ll hedge a little: sales might rise next month.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-possible-sales-rise.png',
    },
    {
      word: 'CAVEAT',
      partOfSpeech: 'noun',
      definition: 'A warning or condition you add to what you say.',
      example: 'One caveat: these numbers are not final.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-figures-not-final.png',
    },
    {
      word: 'PROVISIONAL',
      partOfSpeech: 'adjective',
      definition: 'Not final; it may change.',
      example: 'The launch date is provisional.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-tentative-launch-date.png',
    },
    {
      word: 'CONTINGENT',
      partOfSpeech: 'adjective',
      definition: 'Depending on something else happening first.',
      example: 'The new campaign is contingent on budget approval.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-campaign-awaits-budget.png',
    },
    {
      word: 'SCENARIO PLANNING',
      partOfSpeech: 'noun',
      definition: 'Preparing for several possible futures.',
      example: 'Scenario planning helps us prepare for good and bad years.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-good-bad-year-preparation.png',
    },
    {
      word: 'AMBIGUITY',
      partOfSpeech: 'noun',
      definition: 'When something is unclear or has more than one meaning.',
      example: 'There is some ambiguity in the client\'s brief.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-client-brief-two-meanings.png',
    },
    {
      word: 'ASSUMPTION',
      partOfSpeech: 'noun',
      definition: 'Something you believe is true but haven\'t checked.',
      example: 'Our main assumption is that prices stay the same.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-unchanged-prices-unverified.png',
    },
    {
      word: 'OUTLOOK',
      partOfSpeech: 'noun',
      definition: 'How the future looks now.',
      example: 'The outlook for next year is positive.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-positive-next-year-forecast.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'SUBJECT TO CHANGE,...',
      definition: 'A way to say something is not final.',
      example: 'Subject to change, the launch is on 1 May.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-tentative-first-may-launch.png',
    },
    {
      phrase: 'BASED ON WHAT WE KNOW AT THIS STAGE,...',
      definition: 'A way to say this is true for now.',
      example: 'Based on what we know at this stage, the plan will work.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-current-evidence-feasible-plan.png',
    },
    {
      phrase: 'WE ARE WORKING ON THE ASSUMPTION THAT...',
      definition: 'A way to say what your plan depends on.',
      example: 'We are working on the assumption that the budget stays the same.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-same-budget-planning-assumption.png',
    },
    {
      phrase: 'IN A BEST-CASE SCENARIO,...',
      definition: 'A way to describe the best possible result.',
      example: 'In a best-case scenario, we finish in June.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-best-case-june-finish.png',
    },
    {
      phrase: 'WE CANNOT COMMIT TO A TIMELINE UNTIL...',
      definition: 'A way to say you can\'t promise a date yet.',
      example: 'We cannot commit to a timeline until the client approves the design.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-timeline-awaits-design-approval.png',
    },
    {
      phrase: "IT'S TOO EARLY TO SAY,...",
      definition: 'A way to say you don\'t know yet.',
      example: 'It\'s too early to say, but the first results look good.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mastering-ambiguity-early-positive-results-inconclusive.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, the board wants a firm forecast for the next 18 months. But the market [[ambiguity:a situation where more than one outcome is possible]] is making that nearly impossible.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Don't give them a firm forecast then. Do [[scenario planning:the process of preparing for multiple possible futures]]. Give them three versions — best case, base case, worst case.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Won't that make us look like we don't know what we're doing?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The opposite. It shows you understand the environment. One single forecast right now would look naive. The board knows what the market is like.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Fair point. The numbers we have are still [[provisional:not yet final — this may change]]. Can I present them as is?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Yes — but say that clearly. Tell them: 'These are provisional figures. Subject to change once we have the final data from the field teams.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And the launch plan? The timeline is [[contingent:dependent on something else happening first]] on getting regulatory sign-off.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Then say that. 'We cannot commit to a launch date until regulatory approval is confirmed. Based on what we know at this stage, we expect that in Q2.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Should I add any [[caveat:a warning or condition attached to what you are saying]]s to the revenue projections?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Yes — one main one. We are working on the [[assumption:something you believe is true but have not confirmed]] that the competitor doesn't launch in the same window. If they do, numbers will be different.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "What's the market [[outlook:how the future looks right now based on what you currently know]] according to your read?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Cautious but not negative. It's too early to say whether this is a temporary slowdown or a longer trend. That's why the three-scenario approach is the right call.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "OK. I'll [[hedge:use careful language that avoids making a strong definite claim]] where the data is unclear and be direct where it isn't.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That's exactly right. Confidence comes from knowing what you know — and being honest about what you don't.",
    }
  ],

  matchingExercise: [
    { "word": "hedge", "definition": "use careful language that avoids making a strong definite claim" },
    { "word": "caveat", "definition": "a warning or condition attached to what you are saying" },
    { "word": "provisional", "definition": "not yet final — this may change" },
    { "word": "contingent", "definition": "dependent on something else happening first" },
    { "word": "scenario planning", "definition": "preparing for multiple possible futures — not just one" },
    { "word": "ambiguity", "definition": "a situation where the meaning is unclear or more than one outcome is possible" },
    { "word": "assumption", "definition": "something you believe is true but have not confirmed" },
    { "word": "outlook", "definition": "how the future looks right now based on what you currently know" }
  ],

  fillBlankExercise: [
    { "before": "These are ", "after": " figures — don't present them as final until we have the last set of data.", "answer": "provisional" },
    { "before": "The timeline is ", "after": " on board approval. Without that, we can't move forward.", "answer": "contingent" },
    { "before": "We are working on the ", "after": " that the market will stabilise in Q2. If that changes, the whole plan needs to be revised.", "answer": "assumption" },
    { "before": "Add one important ", "after": " to the forecast: these numbers assume no new regulations are introduced.", "answer": "caveat" },
    { "before": "The market ", "after": " is uncertain right now. We're planning for stability, not growth.", "answer": "outlook" },
    { "before": "We did proper ", "after": " — a best case, a base case, and a worst case — so we're ready for anything.", "answer": "scenario planning" }
  ],

  multipleChoiceExercise: [
    {
      "question": "Why does Riley say presenting three scenarios is better than one firm forecast?",
      "options": [
        "Because it is faster to prepare than a single detailed forecast",
        "Because a single forecast right now would look naive given the market conditions",
        "Because the board always asks for three options"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley tell Marcus to say about the provisional figures?",
      "options": [
        "Don't mention they are provisional — it will worry the board",
        "Say clearly that they are provisional and subject to change once field data arrives",
        "Round the numbers up to make them look stronger"
      ],
      "correctIndex": 1
    },
    {
      "question": "What assumption does Riley say needs to be stated clearly in the revenue projections?",
      "options": [
        "That the marketing team will stay at full capacity",
        "That the competitor does not launch in the same window",
        "That the regulatory approval will come through on time"
      ],
      "correctIndex": 1
    },
    {
      "question": "How does Riley describe the market outlook?",
      "options": [
        "Positive — the slowdown is temporary",
        "Negative — it is going to get worse before it gets better",
        "Cautious but not negative — it's too early to tell if the slowdown is temporary or longer"
      ],
      "correctIndex": 2
    }
  ],

  warmUp: {
    "questions": [
      "Has your company ever had to present a plan or forecast when things were very uncertain? How did you handle the ambiguity?",
      "When a manager or leader admits they don't know something, does it make you trust them more or less? Why?",
      "Think of a time when a plan changed because an assumption turned out to be wrong. What happened and what did you learn?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "The launch is _____ on regulatory approval — without it, nothing can move forward.",
        "options": ["contingent", "dependent", "relying"],
        "correctIndex": 0,
        "explanation": "'Contingent on' is the professional fixed phrase — it means something will only happen if something else happens first. 'Dependent on' is also correct but less formal. 'Relying on' is not used with the same structure — you say 'relying on something' not 'relying on it to happen'. In formal business writing, use 'contingent on'."
      },
      {
        "sentence": "These numbers are _____. We will confirm the final version once the last data comes in.",
        "options": ["provisional", "temporary", "estimated"],
        "correctIndex": 0,
        "explanation": "'Provisional' means not yet confirmed — agreed for now but subject to review. 'Temporary' means lasting for a limited time, which is a different idea. 'Estimated' is also possible but it focuses on approximate calculation, not the status of the figures. When figures may change as more data arrives, use 'provisional'."
      },
      {
        "sentence": "We are working on the _____ that interest rates will stay stable through the end of the year.",
        "options": ["assumption", "hypothesis", "expectation"],
        "correctIndex": 0,
        "explanation": "'Working on the assumption that' is a fixed professional phrase for stating the conditions your plan depends on. 'Hypothesis' is used more in research contexts. 'Expectation' works but is less specific — an expectation is something you believe will happen, while an assumption is something you are treating as true for the purpose of planning."
      },
      {
        "sentence": "Good communicators know when to _____ and when to be direct. You can't hedge everything.",
        "options": ["hedge", "caveat", "qualify"],
        "correctIndex": 0,
        "explanation": "'Hedge' is the specific word for using careful language to avoid a definite claim. 'Caveat' is a noun — a warning you add. 'Qualify' means to add conditions, which is close in meaning, but 'hedge' is the most common word in this context. All three describe similar things, but 'hedge' is the standard term for careful, non-committal language."
      },
      {
        "sentence": "The _____ is uncertain, so we're not forecasting growth — we're planning for stability.",
        "options": ["outlook", "forecast", "projection"],
        "correctIndex": 0,
        "explanation": "'Outlook' describes how the future looks from the current moment — it is a general word for the overall picture. 'Forecast' is a specific prediction with numbers. 'Projection' is similar to forecast. When describing the general state of the future ('uncertain', 'cautious', 'positive'), use 'outlook'."
      },
      {
        "sentence": "Rather than one forecast, we built three _____ — best case, base case, and worst case.",
        "options": ["scenarios", "options", "versions"],
        "correctIndex": 0,
        "explanation": "'Scenarios' is the correct word in scenario planning. A 'scenario' is a possible future situation. 'Options' are choices you can make. 'Versions' are different forms of the same thing. When describing possible futures — best case, base case, worst case — always use 'scenarios'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "The board wants a firm revenue number for next year. What should I give them?",
          "options": [
            "Give them your best guess — that's all they really want.",
            "Give them three scenarios: a best case, a base case, and a worst case. Explain the assumption behind each one. A single firm number in this environment would not be credible.",
            "Tell them you can't forecast accurately until Q3 when you have more data."
          ],
          "correctIndex": 1,
          "explanation": "Option B shows strategic thinking — three scenarios with clear assumptions is how credible senior communicators handle uncertainty. Option A is too casual and risks damaging trust. Option C delays without offering anything useful — the board needs something to work with now, even if it is provisional."
        },
        {
          "customerLine": "Are you confident the campaign will hit the target?",
          "options": [
            "Absolutely — we're confident this will work.",
            "Based on what we know at this stage, yes. The early indicators are positive. With the caveat that we're only in week three — we'll have a clearer picture by end of month.",
            "It's impossible to say at this point. Marketing is unpredictable."
          ],
          "correctIndex": 1,
          "explanation": "Option B is confident but honest — it uses professional hedging language without sounding weak. Option A is too certain for week three of a campaign. Option C sounds like you have no control over the outcome, which undermines your credibility as a professional."
        },
        {
          "customerLine": "When can you confirm the launch date?",
          "options": [
            "We'll launch in Q3.",
            "We cannot commit to a date until we receive regulatory approval. We expect that by the end of Q2 — once confirmed, I'll have a launch date to you within 48 hours.",
            "It's complicated. There are a lot of moving parts and we're not sure yet."
          ],
          "correctIndex": 1,
          "explanation": "Option B is clear, honest, and professional — it names the dependency, sets an expectation, and commits to a follow-up action. Option A sets a firm date you cannot guarantee. Option C sounds vague and unprepared — it gives the listener nothing to hold onto."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "The board wants a forecast. The problem is the market outlook is very uncertain right now." },
        { "speaker": "Riley", "text": "Then do scenario planning. Give them a best case, a base case, and a worst case." },
        { "speaker": "Marcus", "text": "Should I add caveats to the numbers? There are a few assumptions I'm not sure about." },
        { "speaker": "Riley", "text": "Yes — state them clearly. Say: 'We are working in the assumption that interest rates stay stable.'" },
        { "speaker": "Marcus", "text": "And if the launch timeline is contingent of regulatory approval, how do I handle that?" },
        { "speaker": "Riley", "text": "Just say: 'We cannot commit to a timeline until approval is confirmed.' That's clear and honest." }
      ],
      "mistakes": [
        {
          "lineIndex": 3,
          "incorrectText": "working in the assumption",
          "correction": "working on the assumption",
          "explanation": "The correct phrase is 'working on the assumption that' — 'on' is the required preposition in this fixed expression. 'Working in the assumption' is not correct. Other fixed expressions with 'on': 'based on', 'dependent on', 'contingent on'. When you are treating something as true for planning purposes, you are 'working on the assumption that'."
        },
        {
          "lineIndex": 4,
          "incorrectText": "contingent of regulatory approval",
          "correction": "contingent on regulatory approval",
          "explanation": "The correct preposition with 'contingent' is 'on' — 'contingent on something'. We say 'contingent on approval', 'contingent on the outcome', 'contingent on board sign-off'. 'Contingent of' is not a phrase in English."
        },
        {
          "lineIndex": 2,
          "incorrectText": "There are a few assumptions I'm not sure about",
          "correction": "This is correct — it is not a mistake",
          "explanation": "This line is grammatically correct. The actual mistakes in this conversation are in lines 4 and 5. Be careful not to overcorrect — not every uncertainty is an error."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "Can you give us a firm forecast for the next 12 months?",
          "salespersonStart": "Based on what we know at this stage, I can give you three scenarios. In a best-case scenario...",
          "suggestedCompletion": "we reach the revenue target by Q3, assuming market conditions stabilise. In a base case, we hit it by Q4. In a worst case, we revise the target and focus on protecting margin. The right approach now is to plan for all three."
        },
        {
          "customerLine": "Is this plan going to work?",
          "salespersonStart": "We're confident in the strategy. With one caveat — we are working on the assumption that...",
          "suggestedCompletion": "the competitor doesn't enter the market before Q3. If they do, we have a contingency plan ready. Subject to that, yes — we believe this will work."
        },
        {
          "customerLine": "Why can't you just give me a simple yes or no on the timeline?",
          "salespersonStart": "Because the timeline is contingent on regulatory approval, and we don't have that yet. It's too early to say...",
          "suggestedCompletion": "exactly when, but we expect clarity by the end of next month. As soon as we have it, you'll be the first to know and we'll commit to a firm date within 24 hours."
        }
      ]
    }
  },
};
