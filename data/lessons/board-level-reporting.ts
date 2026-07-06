import { Lesson } from '@/types/lesson';

export const boardLevelReporting: Lesson = {
  slug: 'board-level-reporting',
  title: 'Board-Level Reporting',
  subtitle: 'How to present marketing results, strategy, and investment cases to the most senior audience',
  level: 'C1-C2',
  description: 'Presenting to a board is different from presenting to a marketing team. The audience is more senior, the questions are harder, and the stakes are higher. Board members think in terms of risk, governance, shareholder value, and financial return — not campaign creativity. This lesson teaches you the language and structure of board-level communication so you can walk into any senior meeting with confidence.',
  heroImage: '/images/board-level-reporting-hero.png',

  vocabulary: [
    {
      word: 'FIDUCIARY',
      partOfSpeech: 'adjective',
      definition: 'Related to the legal duty to act in the best financial interest of the company or its shareholders.',
      example: "Riley said: The board has a fiduciary duty to shareholders. Every decision they make has to be justified in terms of financial return — not just strategic logic.",
      imageSlug: '/images/board-level-reporting-fiduciary.png',
    },
    {
      word: 'P&L IMPACT',
      partOfSpeech: 'noun',
      definition: 'The effect on the profit and loss account — how much money the decision will make or cost the company.',
      example: "Marcus asked: Do I need to show the P&L impact of the campaign? Riley said: Always. The board doesn't approve spend without understanding the financial return.",
      imageSlug: '/images/pl-impact.png',
    },
    {
      word: 'SHAREHOLDER VALUE',
      partOfSpeech: 'noun',
      definition: 'The financial benefit delivered to the people who own shares in the company. Boards make decisions to protect and grow shareholder value.',
      example: "Riley explained: Everything you present to the board should connect back to shareholder value. If you can't explain how the marketing strategy grows the business, they will not approve it.",
      imageSlug: '/images/shareholder-value.png',
    },
    {
      word: 'GOVERNANCE',
      partOfSpeech: 'noun',
      definition: 'The rules, processes, and structures used to make decisions in an organisation. Good governance means decisions are made properly, legally, and transparently.',
      example: "Marcus said: The new data strategy needs to go through proper governance — legal, compliance, and IT all need to sign off before we can proceed.",
      imageSlug: '/images/governance.png',
    },
    {
      word: 'DUE DILIGENCE',
      partOfSpeech: 'noun',
      definition: 'The process of carefully checking all the facts before making a major decision.',
      example: "Riley said: We need to do full due diligence on this agency before we sign the contract. References, financials, legal background — everything.",
      imageSlug: '/images/board-level-reporting-due-diligence.png',
    },
    {
      word: 'RETURN ON INVESTMENT',
      partOfSpeech: 'noun',
      definition: 'How much money is made compared to how much was spent. Often shown as a percentage. Abbreviated to ROI.',
      example: "The board asked for ROI projections before approving the budget. Riley said: Year one ROI is 140% — we spend £1 and return £2.40.",
      imageSlug: '/images/return-on-investment.png',
    },
    {
      word: 'RISK APPETITE',
      partOfSpeech: 'noun',
      definition: 'How much risk an organisation or board is willing to accept in order to achieve its goals.',
      example: "Riley said: This board has a low risk appetite right now — they are not going to approve anything speculative. We need a conservative plan with strong evidence.",
      imageSlug: '/images/risk-appetite.png',
    },
    {
      word: 'MATERIAL',
      partOfSpeech: 'adjective',
      definition: 'Important enough to affect a decision. In board reporting, only include information that is material — leave everything else out.',
      example: "Riley edited Marcus's report and removed two sections. She said: These are not material — the board doesn't need this level of detail. Keep only what changes the decision.",
      imageSlug: '/images/material.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE HEADLINE NUMBER IS...',
      definition: 'A phrase used to lead with the single most important result or figure before going into detail.',
      example: "Riley said: Don't start with context. Start with the result. 'The headline number is a 34% increase in qualified leads, at a cost per lead that is 18% below target.'",
      imageSlug: '/images/the-headline-number-is.png',
    },
    {
      phrase: 'THE P&L IMPACT OF THIS IS...',
      definition: 'A phrase that connects a marketing decision or result directly to financial performance.',
      example: "Riley told Marcus: Every recommendation needs a financial frame. Say: 'The P&L impact of increasing this budget by 20% is an estimated £1.4m in incremental revenue in year one.'",
      imageSlug: '/images/the-pl-impact-of-this-is.png',
    },
    {
      phrase: 'WE ARE ASKING THE BOARD TO APPROVE...',
      definition: 'A direct phrase that makes your ask explicit. Boards respond better to clear requests than to open-ended presentations.',
      example: "'We are asking the board to approve a £2m marketing investment for Q3 and Q4, with a projected 3x return within 18 months.'",
      imageSlug: '/images/we-are-asking-the-board-to-approve.png',
    },
    {
      phrase: 'THE RISK IF WE DO NOTHING IS...',
      definition: 'A phrase that frames inaction as a risk — often more powerful than framing action as an opportunity.',
      example: "Riley said: The board is risk-averse, so show them both sides. 'The risk if we do nothing is that the competitor takes a 12% share of our core market within two years.'",
      imageSlug: '/images/the-risk-if-we-do-nothing-is.png',
    },
    {
      phrase: 'IN THE INTEREST OF TIME, I WILL FOCUS ON...',
      definition: 'A phrase used to manage a board presentation efficiently — signalling that you have more material but are choosing the most important parts.',
      example: "Riley said: Board meetings are short. Always say: 'In the interest of time, I will focus on the three decisions we need from you today.' The rest goes in the appendix.",
      imageSlug: '/images/in-the-interest-of-time-i-will-focus-on.png',
    },
    {
      phrase: 'I AM HAPPY TO TAKE QUESTIONS ON...',
      definition: 'A phrase used to invite focused Q&A — it signals confidence and keeps the conversation on relevant topics.',
      example: "Riley ended the presentation: That covers the strategy and the investment case. I am happy to take questions on the financial projections, the timeline, or the risk assessment.",
      imageSlug: '/images/i-am-happy-to-take-questions-on.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I have my first board presentation next week. I've prepared 40 slides. Is that too many?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Way too many. A board presentation should be 8 to 12 slides maximum. The board's job is not to review your work — it is to make decisions. Everything that is not [[material:important enough to affect a decision]] goes in the appendix.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "How do I decide what is material?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Ask: does this information change the decision? If yes, it stays. If no, it goes. The board has [[fiduciary:related to the legal duty to act in the company's best financial interest]] responsibilities — they think in terms of risk, return, and governance.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "How do I connect the marketing strategy to what they care about?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Everything connects to [[shareholder value:the financial benefit delivered to the people who own shares in the company]]. Show the [[P&L impact:the effect on the profit and loss account]]. If you can't explain the financial return, they will not approve it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I'm proposing a £2m budget for the next two quarters. How do I frame the ask?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Lead with the headline number and make the ask explicit. 'We are asking the board to approve a £2m investment with a projected [[return on investment:how much money is made compared to how much was spent]] of 3x within 18 months.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What if they push back on the risk? This is a new market and they have a low [[risk appetite:how much risk an organisation is willing to accept]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Then show them the risk of doing nothing. 'The risk if we do not enter this market now is that a competitor locks in the top three accounts before we are ready.' Inaction has a risk too — make them see both sides.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And [[governance:the rules and processes used to make decisions in an organisation]]? Do I need to cover that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "One slide. Show that legal, compliance, and IT have all reviewed the plan. The board will not approve anything that has not gone through proper [[due diligence:the process of carefully checking all the facts before a major decision]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "How do I end the presentation?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
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
    { "word": "risk appetite", "definition": "how much risk an organisation is willing to accept to achieve its goals" },
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
        "explanation": "'Risk appetite' is the standard term for how much risk an organisation is willing to accept. 'Tolerance' is sometimes used but 'risk appetite' is more precise. 'Risk level' describes how risky something is, not how much risk the board is willing to take. When talking about the board's willingness to accept risk, use 'risk appetite'."
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
          "explanation": "Option B addresses risk professionally — it acknowledges both types of risk, explains mitigation, and then reframes inaction as a risk. This shows mature strategic thinking. Option A is too casual and vague. Option C minimises the risk, which will reduce the board's trust in your analysis."
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
