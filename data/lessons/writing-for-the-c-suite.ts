import { Lesson } from '@/types/lesson';

export const writingForTheCSuite: Lesson = {
  slug: 'writing-for-the-c-suite',
  title: 'Writing for the C-Suite',
  subtitle: 'How to write communications that senior leaders actually read — and act on',
  level: 'C1-C2',
  description: 'C-suite executives have almost no time and very little patience for writing that isn\'t immediately clear. They read fast, decide fast, and delete fast. To communicate at the top of an organization, your writing needs to be short, direct, and structured around a decision — not a story. This lesson teaches the vocabulary and techniques behind executive-level business writing.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-hero.png',

  vocabulary: [
    {
      word: 'BREVITY',
      partOfSpeech: 'noun',
      definition: 'Using few words while staying clear.',
      example: 'Brevity matters, so keep your email to five lines.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-five-line-email.png',
    },
    {
      word: 'PRECISION',
      partOfSpeech: 'noun',
      definition: 'Using exactly the right words.',
      example: 'Precision helps busy leaders understand you quickly.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-exact-clear-wording.png',
    },
    {
      word: 'INFERENCE',
      partOfSpeech: 'noun',
      definition: 'A conclusion the reader reaches from the facts.',
      example: 'The obvious inference is that we need a bigger budget.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-budget-conclusion-from-facts.png',
    },
    {
      word: 'IMPLICATION',
      partOfSpeech: 'noun',
      definition: 'A meaning that is suggested, not said directly.',
      example: 'The implication of the report is that we must act now.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-urgent-action-implied.png',
    },
    {
      word: 'AUTHORITY',
      partOfSpeech: 'noun',
      definition: 'Writing that sounds confident and trustworthy.',
      example: 'Short, clear sentences give your writing authority.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-confident-short-sentences.png',
    },
    {
      word: 'EXECUTIVE SUMMARY',
      partOfSpeech: 'noun',
      definition: 'A short section at the top that gives the main points.',
      example: 'Most directors only read the executive summary.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-directors-read-summary.png',
    },
    {
      word: 'DECISION DOCUMENT',
      partOfSpeech: 'noun',
      definition: 'A document written to help someone make a choice.',
      example: 'The decision document lists three options and their costs.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-three-costed-options.png',
    },
    {
      word: 'NOISE',
      partOfSpeech: 'noun',
      definition: 'Extra words that add length but not meaning.',
      example: 'Cut the noise and keep only the key facts.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-remove-unnecessary-words.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE RECOMMENDATION IS...',
      definition: 'A clear way to start with what you suggest.',
      example: 'The recommendation is to launch in March.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-march-launch-recommendation.png',
    },
    {
      phrase: 'THE KEY DECISION HERE IS...',
      definition: 'A way to focus on what must be decided.',
      example: 'The key decision here is whether to hire a new agency.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-agency-choice-pending.png',
    },
    {
      phrase: 'TO PUT IT DIRECTLY,...',
      definition: 'A way to say something plainly.',
      example: 'To put it directly, the campaign lost money.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-plain-campaign-loss.png',
    },
    {
      phrase: 'THE IMPLICATION FOR [THE BUSINESS/THE TEAM] IS...',
      definition: 'A way to explain what a result means for the company.',
      example: 'The implication for the business is lower costs.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-business-lower-costs.png',
    },
    {
      phrase: 'CUT TO THE CHASE:',
      definition: 'An informal way to skip details and say the main point.',
      example: 'Cut to the chase: we need more budget.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-main-point-budget-request.png',
    },
    {
      phrase: 'WHAT THIS MEANS IN PRACTICE IS...',
      definition: 'A way to explain what an idea means in real life.',
      example: 'What this means in practice is two more people in the team.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/writing-for-the-c-suite-two-additional-team-members.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, I'm drafting a proposal for the CMO. It's about three pages long. Do I need to make it shorter?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Probably. What's the decision she needs to make?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Whether to approve the budget for a new agency retainer.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Then write a [[decision document:a business document written to help someone make a decision]] — not a report. Start with the [[recommendation:the professional way to open a C-suite communication]]. The recommendation is... what?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Approve £80k per quarter for Agency X, starting July.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That's your first line. Then two or three lines of evidence. Then the options and trade-offs. That's your whole document — maybe 200 words. [[Brevity:using as few words as possible while being clear]] shows you've done the thinking.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "What about the background context? There's a lot of it.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "She doesn't need the full story — she needs the [[inference:a conclusion the reader reaches from the information you give]]. Give her the data, and she'll draw the right conclusion herself. Context is noise unless she's missing it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And the risks — should I soften them?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "No. Use [[precision:using exactly the right word to express exactly the right meaning]]. Don't write 'there may be some reputational sensitivity'. Write 'this will attract press attention — see communications plan in the appendix'. The [[authority:the quality that makes a reader trust your writing]] comes from being direct, not from hedging everything.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "So what's the structure?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "[[Executive summary:a short section that gives key findings and recommendations]] first — three to five sentences, maximum. Then the options. Then your recommendation again, with the [[implication:something you suggest without saying it openly]] made explicit: what this means in practice is X. Appendix for anyone who wants the detail.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "That's much cleaner than what I had.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "C-suite writing is not about showing how much you know. It's about making it as easy as possible for someone very busy to make a good decision. Cut everything that doesn't serve that goal.",
    }
  ],

  matchingExercise: [
    { "word": "brevity", "definition": "using as few words as possible while still being clear and complete" },
    { "word": "precision", "definition": "using exactly the right word to express exactly the right meaning" },
    { "word": "inference", "definition": "a conclusion the reader reaches themselves based on the information provided" },
    { "word": "implication", "definition": "something suggested or indicated without being said directly" },
    { "word": "authority", "definition": "the quality of confident, direct writing that makes the reader trust you" },
    { "word": "executive summary", "definition": "a short section at the top of a report with the key findings and recommendations" },
    { "word": "decision document", "definition": "a document written specifically to help someone choose between options" },
    { "word": "noise", "definition": "words or sections that add length but not meaning" }
  ],

  fillBlankExercise: [
    { "before": "Don't write three paragraphs — write three bullets. ", "after": " is a sign of respect for the reader's time.", "answer": "Brevity" },
    { "before": "Instead of 'we may potentially consider improving performance', write 'we will grow revenue by 12% in Q3'. That's ", "after": ".", "answer": "precision" },
    { "before": "The data showed a 20% drop in satisfaction. The ", "after": " the board drew was that the service model needed to change.", "answer": "inference" },
    { "before": "The report didn't say the team was underperforming — but the ", "after": " was clear to everyone in the room.", "answer": "implication" },
    { "before": "The proposal was 800 words and completely unclear. I cut the ", "after": " — the parts that added length but not meaning — and it became much stronger.", "answer": "noise" },
    { "before": "Put the recommendation first. The ", "after": " is not an introduction — it's the full story in 200 words.", "answer": "executive summary" }
  ],

  multipleChoiceExercise: [
    {
      "question": "What does Riley say an executive summary should be?",
      "options": [
        "A detailed introduction to the full report",
        "The full story in 150 words — key findings and recommendations first",
        "A summary of background context so the reader understands the situation"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say about using hedging language like 'it might be worth considering'?",
      "options": [
        "It is polite and shows respect for the decision-maker",
        "It is acceptable when writing about risks or sensitive topics",
        "It has no authority — use direct language like 'I recommend' instead"
      ],
      "correctIndex": 2
    },
    {
      "question": "What is a 'decision document'?",
      "options": [
        "A formal legal document that records a decision that has been made",
        "A document written to help someone choose between options — with a recommendation and trade-offs",
        "A report summarizing the outcomes of a strategic planning session"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why does Riley say to give the CMO data and let her draw the inference?",
      "options": [
        "Because C-suite executives prefer to reach their own conclusions rather than be told what to think",
        "Because the document is too long to include analysis",
        "Because it's not the writer's role to make recommendations at executive level"
      ],
      "correctIndex": 0
    }
  ],

  warmUp: {
    "questions": [
      "Think about the last time you received a very long email or report. Did you read all of it? What did you actually read first?",
      "Have you ever written something that you later thought was too long? What could you have cut?",
      "In your experience, do senior leaders prefer more detail or less detail? Why?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "The board proposal needs to start with a clear _____. They need to know the answer before they read the evidence.",
        "options": ["recommendation", "suggestion", "proposal"],
        "correctIndex": 0,
        "explanation": "'Recommendation' is the precise word for what a C-suite document should lead with — a clear, confident statement of what you believe should be done. 'Suggestion' is too informal and weak for executive-level writing. 'Proposal' describes the document itself, not the thing it should open with. In C-suite writing, always 'recommend' — never 'suggest'."
      },
      {
        "sentence": "The draft is 1,200 words and could be 400. Cut the _____ — everything that doesn't directly support the decision.",
        "options": ["noise", "content", "background"],
        "correctIndex": 0,
        "explanation": "'Noise' is the specific term for language that adds length without adding meaning — filler phrases, repeated context, passive constructions, throat-clearing sentences. 'Content' is neutral and can't be cut by definition. 'Background' may be part of the noise, but doesn't describe the problem precisely. When writing too much for the audience, what you're producing is 'noise'."
      },
      {
        "sentence": "The _____ of the data is clear: if we don't act now, we will lose the contract.",
        "options": ["implication", "meaning", "result"],
        "correctIndex": 0,
        "explanation": "'Implication' is used when a conclusion follows from evidence but isn't stated explicitly — the reader is expected to see it. 'Meaning' is too broad and informal for a business document. 'Result' refers to something that has already happened. 'Implication' is the right word for forward-looking conclusions that follow logically from the data."
      },
      {
        "sentence": "She doesn't need the full context — give her the key facts and she will draw the _____ herself.",
        "options": ["inference", "conclusion", "answer"],
        "correctIndex": 0,
        "explanation": "'Inference' is the specific word for a conclusion the reader reaches independently from the evidence, without being told explicitly. 'Conclusion' is close but slightly more general. 'Answer' implies there is a single right answer, which isn't always the case. When writing for senior audiences, giving data and letting them reach their own 'inference' is a mark of respect."
      },
      {
        "sentence": "The writing lacks _____. Phrases like 'perhaps' and 'it could be argued' make it sound uncertain and unconfident.",
        "options": ["authority", "clarity", "precision"],
        "correctIndex": 0,
        "explanation": "'Authority' is the quality of writing that inspires trust — it comes from a direct, confident tone and the absence of unnecessary hedging. 'Clarity' means easy to understand, which is different. 'Precision' means using exactly the right words, which is also different. When writing sounds hesitant or unconfident, the problem is a lack of 'authority'."
      },
      {
        "sentence": "Write a one-page _____ first. Everything else — data, appendices, supporting analysis — goes after.",
        "options": ["executive summary", "brief", "overview"],
        "correctIndex": 0,
        "explanation": "'Executive summary' is the specific document section that goes at the top of a report or proposal, containing the key findings and recommendations in a short, standalone form. A 'brief' is a different document type — typically a project or creative brief. An 'overview' is informal and has no defined structure. For C-suite writing, the term is always 'executive summary'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "I've read your proposal. Can you walk me through the key points?",
          "options": [
            "Of course — let me start with the background and context so you have the full picture.",
            "Absolutely. The recommendation is to consolidate our agency partnerships from four to one. That saves £200k annually. The key decision is which agency to retain — I recommend Agency X for three reasons. Want me to walk through them?",
            "Sure — there's a lot to cover, but I'll try to keep it brief."
          ],
          "correctIndex": 1,
          "explanation": "Option B leads with the recommendation and the decision — exactly the structure a C-suite audience needs. It's confident, direct, and immediately useful. Option A starts with background, which is the wrong order for executive communication. Option C signals the talk will be long before it starts, which undermines confidence."
        },
        {
          "customerLine": "This report is twelve pages. Can you summarize it for me in two minutes?",
          "options": [
            "That's difficult — there's a lot of nuance in the data that I wouldn't want you to miss.",
            "Of course. The headline finding is that customer retention has dropped 18% in six months. The implication for the business is a projected £2.4m revenue shortfall. We recommend a retention program starting next quarter. I can send the full report if you want the detail.",
            "I'll do my best — the report covers several different areas so it might take longer than two minutes to do it justice."
          ],
          "correctIndex": 1,
          "explanation": "Option B delivers a sharp, structured summary in the right order: headline finding, implication, recommendation. It respects the executive's time and offers a path to more detail. Option A is evasive — executives hear this as a lack of preparation. Option C hedges before even starting, which immediately reduces confidence."
        },
        {
          "customerLine": "I'm not sure this is the right decision. What are the alternatives?",
          "options": [
            "There are a few options. I've outlined them in section 4 of the document, starting on page 8.",
            "Understood. There are two alternatives. Option A is to delay and patch the current system — lower cost now but higher risk in 18 months. Option B is to do nothing — which means the issue will escalate. The recommendation is still Option C — the rebuild — but the key trade-off is upfront cost versus long-term risk. Which factor is most important to you?",
            "I understand your concern. The decision is ultimately yours and there's no perfect answer here."
          ],
          "correctIndex": 1,
          "explanation": "Option B names the alternatives clearly, frames the trade-offs with precision, and ends with a question that moves the decision forward. This is how you maintain authority while genuinely engaging with doubt. Option A pushes the work back onto the executive. Option C is vague and unhelpfully non-committal."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I've written the executive summary — it's the last section of the document, after all the data." },
        { "speaker": "Riley", "text": "The executive summary should be first — at the top of the document, before any data or analysis." },
        { "speaker": "Marcus", "text": "OK. I've also tried to be very precise in the language. Instead of 'we will grow revenue', I wrote 'we may potentially be able to improve revenue performance going forward'." },
        { "speaker": "Riley", "text": "That's not precision — that's the opposite. You've hedged a clear statement into something vague and unconfident." },
        { "speaker": "Marcus", "text": "And I wrote 700 words of background context because the CMO needs the full picture." },
        { "speaker": "Riley", "text": "She doesn't need the full background — she needs the key decision and the recommendation. Cut the context noise and trust her to draw the inference from the data." }
      ],
      "mistakes": [
        {
          "lineIndex": 0,
          "incorrectText": "it's the last section of the document, after all the data",
          "correction": "The executive summary should be the first section — before the data",
          "explanation": "An executive summary always goes at the top of a document, not the end. The purpose is to let busy readers understand the key findings without reading everything. Putting it last defeats the entire purpose."
        },
        {
          "lineIndex": 2,
          "incorrectText": "we may potentially be able to improve revenue performance going forward",
          "correction": "Precision means 'we will grow revenue by X%' — specific, direct, confident",
          "explanation": "Marcus claims this is precision, but it's actually the opposite — hedged, vague language with no concrete meaning. Precision means using exact words with exact numbers. 'May potentially be able to improve performance' is noise."
        },
        {
          "lineIndex": 4,
          "incorrectText": "I wrote 700 words of background context because the CMO needs the full picture",
          "correction": "Senior leaders don't need background context — they need the key decision and recommendation",
          "explanation": "700 words of background is noise for a C-suite audience. They have the context — that's why they're senior. What they need is the decision, the recommendation, and the trade-offs. Context only belongs in a document if the reader is genuinely missing it."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "I only have five minutes before my next call. What do I need to know?",
          "salespersonStart": "The key decision is whether to renew the contract with the current supplier or switch. The recommendation is to switch — the new supplier saves 18% annually and the service rating is higher. The implication for the business is...",
          "suggestedCompletion": "a one-month transition period in March. The risk is manageable — the new supplier has a guaranteed onboarding timeline. I'll send you the two-page summary now so you can approve or come back to me with questions."
        },
        {
          "customerLine": "This proposal is too long. I won't have time to read it before the board meeting.",
          "salespersonStart": "I'll rewrite it. The executive summary will be on page one — the recommendation, the options, and the key trade-off. Everything else moves to the appendix. To put it directly,...",
          "suggestedCompletion": "the board needs one decision: approve £150k now or delay and lose the opportunity. I'll make sure that decision is the first thing they see. The full data will be available if anyone wants to go deeper."
        },
        {
          "customerLine": "The report shows costs are up 30%. What does that mean for us?",
          "salespersonStart": "What this means in practice is that we're running at a loss on three of our five product lines. The implication for the business is...",
          "suggestedCompletion": "that without a pricing change or cost reduction in Q3, we'll miss the annual EBITDA target by approximately £800k. I recommend a pricing review this month. I can have a decision document ready for you by Thursday."
        }
      ]
    }
  },
};
