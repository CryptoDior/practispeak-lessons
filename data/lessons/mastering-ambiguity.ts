import { Lesson } from '@/types/lesson';

export const masteringAmbiguity: Lesson = {
  slug: 'mastering-ambiguity',
  title: 'Mastering Ambiguity',
  subtitle: 'How to communicate clearly when nothing is certain — and stay credible while you do it',
  level: 'C1-C2',
  description: 'Business rarely gives you certainty. Markets shift, plans change, and decisions get made with incomplete information. The people who succeed at senior level are the ones who can communicate clearly under uncertainty — who can be honest about what they do not know without losing the room. This lesson teaches you the language of ambiguity: how to hedge, caveat, and scenario-plan in a way that sounds confident, not evasive.',
  heroImage: '/images/mastering-ambiguity-hero.png',

  vocabulary: [
    {
      word: 'HEDGE',
      partOfSpeech: 'noun / verb',
      definition: 'To use careful language that avoids making a strong or definite claim. Useful when you are not 100% sure.',
      example: "Riley said: Don't hedge everything — it makes you sound uncertain about things you should know. But hedge where the data is genuinely unclear.",
      imageSlug: '/images/hedge.png',
    },
    {
      word: 'CAVEAT',
      partOfSpeech: 'noun',
      definition: 'A warning or condition attached to what you are saying. A way of saying: this is true, BUT...',
      example: 'Marcus said: The forecast looks positive. Riley added: With one caveat — those numbers assume the supply chain issues are resolved by Q3.',
      imageSlug: '/images/caveat.png',
    },
    {
      word: 'PROVISIONAL',
      partOfSpeech: 'adjective',
      definition: 'Not yet final — this may change. Agreed for now but subject to review.',
      example: "Riley said: These are provisional figures. Don't present them as final — we are still waiting on two pieces of data.",
      imageSlug: '/images/provisional.png',
    },
    {
      word: 'CONTINGENT',
      partOfSpeech: 'adjective',
      definition: 'Dependent on something else happening first. If X happens, then Y will follow.',
      example: 'The launch is contingent on regulatory approval. Until we have that, nothing can move forward.',
      imageSlug: '/images/contingent.png',
    },
    {
      word: 'SCENARIO PLANNING',
      partOfSpeech: 'noun',
      definition: 'The process of preparing for multiple possible futures — not just one.',
      example: "Riley explained: We need to do proper scenario planning — a best case, a base case, and a worst case. The board won't accept a plan with only one outcome.",
      imageSlug: '/images/scenario-planning.png',
    },
    {
      word: 'AMBIGUITY',
      partOfSpeech: 'noun',
      definition: 'A situation where the meaning is not clear, or where more than one outcome is possible.',
      example: 'Marcus said: There is a lot of ambiguity around the new regulations. Riley replied: Then we plan for both possibilities and stay flexible.',
      imageSlug: '/images/ambiguity.png',
    },
    {
      word: 'ASSUMPTION',
      partOfSpeech: 'noun',
      definition: 'Something you believe is true but have not confirmed. A starting point for planning.',
      example: "Riley said: Every financial model is built on assumptions. The question is whether your assumptions are realistic.",
      imageSlug: '/images/assumption.png',
    },
    {
      word: 'OUTLOOK',
      partOfSpeech: 'noun',
      definition: 'How the future looks right now — based on what you currently know.',
      example: 'The market outlook is uncertain. We are not forecasting growth this year — we are planning for stability.',
      imageSlug: '/images/outlook.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'SUBJECT TO CHANGE,...',
      definition: 'A phrase that signals what you are about to say is not final and may be different later.',
      example: "'Subject to change, we are planning to launch in Q4. But if testing reveals a problem, we will push to Q1.'",
      imageSlug: '/images/subject-to-change.png',
    },
    {
      phrase: 'BASED ON WHAT WE KNOW AT THIS STAGE,...',
      definition: 'A phrase that sets a clear boundary — this is what the current information shows. More may emerge.',
      example: "Riley told the board: Based on what we know at this stage, the acquisition makes sense. We will review again once the due diligence is complete.",
      imageSlug: '/images/based-on-what-we-know-at-this-stage.png',
    },
    {
      phrase: 'WE ARE WORKING ON THE ASSUMPTION THAT...',
      definition: 'A transparent way to state the conditions behind your plan. It shows you know your plan depends on certain things being true.',
      example: "Riley said: We are working on the assumption that the market stays stable through H1. If that changes, we have a contingency plan ready.",
      imageSlug: '/images/we-are-working-on-the-assumption-that.png',
    },
    {
      phrase: 'IN A BEST-CASE SCENARIO,...',
      definition: 'A phrase that sets up the most positive possible outcome. Usually paired with a base case and a worst case.',
      example: "Riley walked the team through the options: In a best-case scenario, we reach breakeven by month six. In a worst-case scenario, we need 14 months.",
      imageSlug: '/images/in-a-best-case-scenario.png',
    },
    {
      phrase: 'WE CANNOT COMMIT TO A TIMELINE UNTIL...',
      definition: 'A professional way to be honest about a dependency — you need something to happen before you can confirm when.',
      example: "Riley told the client: We cannot commit to a timeline until the legal review is complete. Once we have that, we will give you a confirmed date within 48 hours.",
      imageSlug: '/images/we-cannot-commit-to-a-timeline-until.png',
    },
    {
      phrase: "IT'S TOO EARLY TO SAY,...",
      definition: 'An honest phrase that signals the data or situation is not clear enough yet to make a confident statement.',
      example: "The journalist asked if the campaign had worked. Marcus said: It's too early to say — we are only two weeks in. Ask me again in a month.",
      imageSlug: '/images/its-too-early-to-say.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the board wants a firm forecast for the next 18 months. But the market [[ambiguity:a situation where more than one outcome is possible]] is making that nearly impossible.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Don't give them a firm forecast then. Do [[scenario planning:the process of preparing for multiple possible futures]]. Give them three versions — best case, base case, worst case.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Won't that make us look like we don't know what we're doing?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The opposite. It shows you understand the environment. One single forecast right now would look naive. The board knows what the market is like.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Fair point. The numbers we have are still [[provisional:not yet final — this may change]]. Can I present them as is?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — but say that clearly. Tell them: 'These are provisional figures. Subject to change once we have the final data from the field teams.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the launch plan? The timeline is [[contingent:dependent on something else happening first]] on getting regulatory sign-off.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Then say that. 'We cannot commit to a launch date until regulatory approval is confirmed. Based on what we know at this stage, we expect that in Q2.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Should I add any [[caveat:a warning or condition attached to what you are saying]]s to the revenue projections?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — one main one. We are working on the [[assumption:something you believe is true but have not confirmed]] that the competitor doesn't launch in the same window. If they do, numbers will be different.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What's the market [[outlook:how the future looks right now based on what you currently know]] according to your read?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Cautious but not negative. It's too early to say whether this is a temporary slowdown or a longer trend. That's why the three-scenario approach is the right call.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "OK. I'll [[hedge:use careful language that avoids making a strong definite claim]] where the data is unclear and be direct where it isn't.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
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
