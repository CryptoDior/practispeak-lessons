import { Lesson } from '@/types/lesson';

export const boardLevelReporting: Lesson = {
  slug: 'board-level-reporting',
  title: 'Board-Level Reporting',
  subtitle: 'How to present marketing results, strategy, and investment cases to the most senior audience',
  level: 'C1-C2',
  description: 'Presenting to a board is different from presenting to a marketing team. The audience is more senior, the questions are harder, and the stakes are higher. Board members think in terms of risk, governance, shareholder value, and financial return — not campaign creativity. This lesson teaches you the language and structure of board-level communication so you can walk into any senior meeting with confidence.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-hero.png',

  vocabulary: [
    {
      word: 'FIDUCIARY',
      partOfSpeech: 'adjective',
      definition: 'About the legal duty to protect a company\'s money.',
      example: 'Directors have a fiduciary duty to shareholders.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-directors-protect-shareholder-interests.png',
    },
    {
      word: 'P&L IMPACT',
      partOfSpeech: 'noun',
      definition: 'The effect of something on a company\'s profit or loss.',
      example: 'The P&L impact of the campaign was £200,000 profit.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-campaign-two-hundred-thousand-profit.png',
    },
    {
      word: 'SHAREHOLDER VALUE',
      partOfSpeech: 'noun',
      definition: 'The value a company creates for its owners.',
      example: 'Our plan will increase shareholder value.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-planned-owner-value-growth.png',
    },
    {
      word: 'GOVERNANCE',
      partOfSpeech: 'noun',
      definition: 'The rules for how decisions are made in a company.',
      example: 'Good governance means the board checks every big decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-board-reviews-major-decisions.png',
    },
    {
      word: 'DUE DILIGENCE',
      partOfSpeech: 'noun',
      definition: 'Checking all the facts before a big decision.',
      example: 'We did our due diligence before buying the company.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-fact-check-before-acquisition.png',
    },
    {
      word: 'RETURN ON INVESTMENT',
      partOfSpeech: 'noun',
      definition: 'The money you make compared to the money you spend.',
      example: 'The return on investment was 300%.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-three-hundred-percent-roi.png',
    },
    {
      word: 'RISK APPETITE',
      partOfSpeech: 'noun',
      definition: 'How much risk a company is happy to take.',
      example: 'Our risk appetite is low this year.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-low-risk-tolerance-this-year.png',
    },
    {
      word: 'MATERIAL',
      partOfSpeech: 'adjective',
      definition: 'Important enough to affect a decision.',
      example: 'The delay is material, so the board must know.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-important-delay-board-escalation.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE HEADLINE NUMBER IS...',
      definition: 'A way to give the most important number first.',
      example: 'The headline number is a 12% rise in sales.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-headline-twelve-percent-sales-rise.png',
    },
    {
      phrase: 'THE P&L IMPACT OF THIS IS...',
      definition: 'A way to explain the effect on profit.',
      example: 'The P&L impact of this is a £50,000 saving.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-fifty-thousand-pound-cost-saving.png',
    },
    {
      phrase: 'WE ARE ASKING THE BOARD TO APPROVE...',
      definition: 'A way to ask leaders for a clear decision.',
      example: 'We are asking the board to approve a budget of £1 million.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-one-million-budget-approval-request.png',
    },
    {
      phrase: 'THE RISK IF WE DO NOTHING IS...',
      definition: 'A way to show the danger of not acting.',
      example: 'The risk if we do nothing is losing our biggest client.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-inaction-largest-client-at-risk.png',
    },
    {
      phrase: 'IN THE INTEREST OF TIME, I WILL FOCUS ON...',
      definition: 'A way to say you will talk only about the main points.',
      example: 'In the interest of time, I will focus on the results.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-time-limited-results-focus.png',
    },
    {
      phrase: 'I AM HAPPY TO TAKE QUESTIONS ON...',
      definition: 'A way to invite questions on a topic.',
      example: 'I am happy to take questions on the budget.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/board-level-reporting-invite-budget-questions.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, I have my first board presentation next week. I've prepared 40 slides. Is that too many?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Way too many. A board presentation should be 8 to 12 slides maximum. The board's job is not to review your work — it is to make decisions. Everything that is not [[material:important enough to affect a decision]] goes in the appendix.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "How do I decide what is material?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Ask: does this information change the decision? If yes, it stays. If no, it goes. The board has [[fiduciary:related to the legal duty to act in the company's best financial interest]] responsibilities — they think in terms of risk, return, and governance.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "How do I connect the marketing strategy to what they care about?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Everything connects to [[shareholder value:the financial benefit delivered to the people who own shares in the company]]. Show the [[P&L impact:the effect on the profit and loss account]]. If you can't explain the financial return, they will not approve it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I'm proposing a £2m budget for the next two quarters. How do I frame the ask?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Lead with the headline number and make the ask explicit. 'We are asking the board to approve a £2m investment with a projected [[return on investment:how much money is made compared to how much was spent]] of 3x within 18 months.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "What if they push back on the risk? This is a new market and they have a low [[risk appetite:how much risk an organization is willing to accept]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Then show them the risk of doing nothing. 'The risk if we do not enter this market now is that a competitor locks in the top three accounts before we are ready.' Inaction has a risk too — make them see both sides.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And [[governance:the rules and processes used to make decisions in an organization]]? Do I need to cover that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "One slide. Show that legal, compliance, and IT have all reviewed the plan. The board will not approve anything that has not gone through proper [[due diligence:the process of carefully checking all the facts before a major decision]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "How do I end the presentation?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Tell them exactly what you need. 'We are asking for approval on the budget, the timeline, and the agency partnership.' Then say: 'I am happy to take questions on the financial projections, the risk assessment, or the governance process.'",
    }
  ],

  matchingExercise: [
    { "word": "fiduciary", "definition": "related to the legal duty to act in the company's best financial interest" },
    { "word": "P&L impact", "definition": "the effect on the profit and loss account — how much money a decision makes or costs" },
    { "word": "shareholder value", "definition": "the financial benefit delivered to the people who own shares in the company" },
    { "word": "governance", "definition": "the rules and processes used to make decisions properly and transparently" },
    { "word": "due diligence", "definition": "the process of carefully checking all the facts before a major decision" },
    { "word": "return on investment", "definition": "how much money is made compared to how much was spent" },
    { "word": "risk appetite", "definition": "how much risk an organization is willing to accept to achieve its goals" },
    { "word": "material", "definition": "important enough to affect a decision" }
  ],

  fillBlankExercise: [
    { "before": "Only include information that is ", "after": " — if it doesn't change the decision, it goes in the appendix.", "answer": "material" },
    { "before": "The board asked for the ", "after": " impact — how much revenue will this generate and over what timeframe?", "answer": "P&L" },
    { "before": "Before we sign anything, we need to complete ", "after": " — references, legal background, and financials.", "answer": "due diligence" },
    { "before": "This board has a low ", "after": " appetite — they will not approve anything speculative without strong evidence.", "answer": "risk" },
    { "before": "Every marketing decision should connect back to ", "after": " value — if you can't show the financial return, don't ask.", "answer": "shareholder" },
    { "before": "The projected ", "after": " on investment is 3x over 18 months — we spend £2m and return £6m.", "answer": "return" }
  ],

  multipleChoiceExercise: [
    {
      "question": "How many slides does Riley say a board presentation should have?",
      "options": [
        "40 — boards expect thorough detail",
        "8 to 12 slides maximum",
        "20 slides with a detailed appendix"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say is the test for whether information is 'material'?",
      "options": [
        "Does it show the work the team has done?",
        "Is it interesting to the board members?",
        "Does it change the decision? If yes, it stays. If no, it goes."
      ],
      "correctIndex": 2
    },
    {
      "question": "How does Riley suggest framing the risk of inaction?",
      "options": [
        "Show a list of all the risks associated with the proposed strategy",
        "Show that a competitor will take market share if the company does not act",
        "Explain that the board has a fiduciary duty to approve the investment"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say the board will not approve without proper due diligence?",
      "options": [
        "Any plan that involves an external agency",
        "Any plan that has not been reviewed by legal, compliance, and IT",
        "Any plan proposed by someone who has not presented to the board before"
      ],
      "correctIndex": 1
    }
  ],

  warmUp: {
    "questions": [
      "Have you ever presented to a very senior audience — a CEO, a board, or senior leaders? What was different about that experience?",
      "When a board or senior team rejects a proposal, do you think it is usually because the idea is weak — or because it wasn't presented in the right way?",
      "What do you think board members care about most when they see a marketing proposal? How is that different from what a marketing team cares about?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "Board members have a _____ duty — they must act in the best financial interest of the company's shareholders.",
        "options": ["fiduciary", "financial", "governance"],
        "correctIndex": 0,
        "explanation": "'Fiduciary' is the specific legal term for the duty to act in someone else's best financial interest. 'Financial' is too general. 'Governance' relates to how decisions are made, not the legal duty of care. When describing the board's legal obligation to shareholders, use 'fiduciary'."
      },
      {
        "sentence": "Only include _____ information in the board pack — if it doesn't change the decision, leave it in the appendix.",
        "options": ["material", "relevant", "important"],
        "correctIndex": 0,
        "explanation": "In the context of board reporting, 'material' has a specific meaning: information that is significant enough to affect a decision. 'Relevant' means connected to the topic, but not necessarily decision-changing. 'Important' is vague. 'Material' is the correct professional term for board-level filtering of information."
      },
      {
        "sentence": "Every proposal needs to show its _____ — how much money it will make compared to what it costs.",
        "options": ["return on investment", "P&L impact", "financial case"],
        "correctIndex": 0,
        "explanation": "'Return on investment' (ROI) is the specific measure of how much money is generated compared to the amount spent — usually expressed as a percentage or multiplier (e.g. '3x ROI'). 'P&L impact' is a broader measure of effect on the profit and loss account. 'Financial case' is informal. When showing the ratio of return to cost, use ROI."
      },
      {
        "sentence": "The board has a low _____ right now — they will not approve anything that doesn't have strong evidence behind it.",
        "options": ["risk appetite", "tolerance", "risk level"],
        "correctIndex": 0,
        "explanation": "'Risk appetite' is the standard term for how much risk an organization is willing to accept. 'Tolerance' is sometimes used but 'risk appetite' is more precise. 'Risk level' describes how risky something is, not how much risk the board is willing to take. When talking about the board's willingness to accept risk, use 'risk appetite'."
      },
      {
        "sentence": "Before signing the contract, we need to complete full _____: legal checks, financial background, and references.",
        "options": ["due diligence", "governance", "compliance"],
        "correctIndex": 0,
        "explanation": "'Due diligence' is the process of thoroughly checking all facts and risks before making a major decision. 'Governance' refers to the rules and processes for making decisions. 'Compliance' means following rules and regulations. When you are investigating a partner, agency, or acquisition target, you are doing due diligence."
      },
      {
        "sentence": "Make the ask explicit: '_____ the board to approve a £2m investment with a projected return of 3x within 18 months.'",
        "options": ["We are asking", "We want", "We need"],
        "correctIndex": 0,
        "explanation": "'We are asking the board to approve' is the standard professional phrase for making a formal request in a board presentation. It is direct and clear about what you need. 'We want' and 'we need' are less formal and lack the professional register expected in a board context."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the board member says. Choose the best response.",
      "items": [
        {
          "customerLine": "What is the return on this £2m investment?",
          "options": [
            "It's hard to project exactly — marketing results depend on many factors.",
            "The projected ROI is 3x within 18 months. We reach breakeven by month nine and generate £6m in incremental revenue by month eighteen. I have the full financial model in the appendix if you would like to review the assumptions.",
            "The campaign will significantly increase brand awareness and drive qualified leads into the sales pipeline."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives a specific, financial answer — exactly what a board wants. It leads with the headline number, states the timeline, and offers more detail without going into it unnecessarily. Option A is evasive and damages credibility. Option C is a marketing answer, not a financial one — it does not quantify return."
        },
        {
          "customerLine": "What's the risk here? We're quite conservative at the moment.",
          "options": [
            "Marketing always carries some risk — we can't guarantee results.",
            "There are two risks to consider. The first is execution risk — we've mitigated this by working with an agency that has done this before. The second is market risk, which we've modelled in the worst-case scenario. But the risk of doing nothing is also material: our main competitor is already six months ahead in this segment.",
            "The risk is low — we've done this kind of campaign before."
          ],
          "correctIndex": 1,
          "explanation": "Option B addresses risk professionally — it acknowledges both types of risk, explains mitigation, and then reframes inaction as a risk. This shows mature strategic thinking. Option A is too casual and vague. Option C minimizes the risk, which will reduce the board's trust in your analysis."
        },
        {
          "customerLine": "Has this been through the proper governance process?",
          "options": [
            "We've been working on this for six months — the team has reviewed everything thoroughly.",
            "Yes — legal, compliance, data protection, and IT have all reviewed the plan and signed off. I have the governance summary on the next slide.",
            "We're planning to complete the governance review after the board approves it."
          ],
          "correctIndex": 1,
          "explanation": "Option B is the right answer — it names each function that has signed off and offers evidence. This is what boards need to hear before approving a significant investment. Option A is vague and doesn't name the specific governance steps. Option C is a serious problem — you should never ask for board approval before completing governance."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I'm presenting to the board next week. I've prepared 40 slides to cover everything in detail." },
        { "speaker": "Riley", "text": "That's too many. A board presentation should be no more than 10 to 12 slides. The rest goes in the appendix." },
        { "speaker": "Marcus", "text": "How do I know what to include? I want to show all the work the team has done." },
        { "speaker": "Riley", "text": "Include only what is material — what changes the decision. The board doesn't need to see your process." },
        { "speaker": "Marcus", "text": "And the budget ask? I need the board to approve a £2m investment. I'll mention it at the end." },
        { "speaker": "Riley", "text": "Don't leave the ask to the end — make it clear at the start. Say: 'We are asking the board to approve £2m, with a return on investment of 3x.' Then explain the evidence. The board should always know what you need from them at the beginning, not the end." }
      ],
      "mistakes": [
        {
          "lineIndex": 2,
          "incorrectText": "I want to show all the work the team has done",
          "correction": "Board reports are about decisions, not work review",
          "explanation": "This is a conceptual error, not a grammar error. A board presentation is not for showing your team's work — it is for enabling decisions. Include only material information. Trying to show all the work creates a long, unfocused presentation that loses the board's attention."
        },
        {
          "lineIndex": 4,
          "incorrectText": "I'll mention it at the end",
          "correction": "Make the ask at the beginning, not the end",
          "explanation": "This is a strategic error. In board presentations, you should make your ask explicit early — board members need to know what you want from them. Burying the ask at the end means you've spent the whole presentation without them knowing what decision is needed. Riley correctly corrects this in the next line."
        },
        {
          "lineIndex": 0,
          "incorrectText": "40 slides to cover everything in detail",
          "correction": "8 to 12 slides maximum for a board presentation",
          "explanation": "This is a practical error. Boards expect concise, decision-focused presentations — not detailed reviews. 40 slides is far too many. The content that doesn't fit into the core 10-12 slides should go in an appendix that the board can review if they want more detail."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "How do I make the board care about marketing results?",
          "salespersonStart": "Connect everything to financial return. Don't say 'we increased brand awareness'. Say: 'The P&L impact of this campaign was...'",
          "suggestedCompletion": "an 18% increase in qualified leads at a cost per lead 22% below target, generating an estimated £1.8m in new pipeline. That is the language the board understands. Everything else is detail."
        },
        {
          "customerLine": "The board always asks hard questions I'm not prepared for. What should I do?",
          "salespersonStart": "Prepare for the three questions they always ask: What is the return? What is the risk? And has this gone through proper governance? If you have solid answers to those three, you can handle almost anything. End your presentation by saying...",
          "suggestedCompletion": "'I am happy to take questions on the financial projections, the risk assessment, or the governance process.' That signals confidence and keeps the Q&A focused on the areas you're prepared for."
        },
        {
          "customerLine": "The board is very risk-averse. How do I get approval for something new?",
          "salespersonStart": "Show them the risk of doing nothing. Frame it like this: 'The risk if we do not move now is...'",
          "suggestedCompletion": "that a competitor takes a significant share of this market before we are ready. Inaction is also a decision — and it has a cost. Once you put that on the table, the conversation shifts from 'is this too risky?' to 'which risk would we rather take?'"
        }
      ]
    }
  },
};
