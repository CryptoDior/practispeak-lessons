import { Lesson } from '@/types/lesson';

export const strategicQuestioning: Lesson = {
  slug: 'strategic-questioning',
  title: 'Strategic Questioning',
  subtitle: 'How to use probing, clarifying, and assumption-challenging questions to guide a buyer to their own conclusions',
  level: 'C1-C2',
  description: "The best salespeople ask better questions than they give answers. Strategic questioning is not interrogation — it is a discipline of structured curiosity that uncovers the real problem beneath the stated one, surfaces implications the buyer hasn't yet articulated, and gently challenges assumptions that may be preventing them from seeing the full picture. This lesson teaches the language and structure of sophisticated discovery: how to probe without being intrusive, clarify without seeming lost, challenge assumptions without being confrontational, and lead a buyer to their own conclusions without telling them what to think.",
  heroImage: '/images/strategic-questioning-hero.png',

  vocabulary: [
    {
      word: 'PROBING',
      partOfSpeech: 'noun',
      definition: "The practice of asking deeper, follow-up questions to uncover information the customer hasn't volunteered — going beneath the surface answer to find the underlying reality. Probing questions typically start with 'What's behind that?', 'Can you say more about...?', or 'What makes you say that?'",
      example: "Riley resisted the urge to present a solution and instead kept probing: You mentioned that your team isn't closing — but when you say 'not closing', are we talking about deals dying at proposal stage, in negotiation, or at the very end? The probe revealed that 80% of the problem sat at one specific stage, which changed everything about the solution she would eventually propose.",
      imageSlug: '/images/strategic-questioning-probing.png',
    },
    {
      word: 'CLARIFYING',
      partOfSpeech: 'noun',
      definition: "The practice of asking questions to ensure precise mutual understanding — eliminating ambiguity before proceeding. Clarifying is not a sign of confusion; it is a sign of rigour. 'When you say X, do you mean A or B?' prevents costly misalignment later in the sales process.",
      example: "Marcus said the platform 'wasn't working'. Riley clarified before moving on: When you say it's not working — are we talking about adoption, performance outcomes, ROI, or something else? That clarification revealed that the platform was being used widely but by the wrong people, which pointed to a deployment problem, not a product problem.",
      imageSlug: '/images/strategic-questioning-clarifying.png',
    },
    {
      word: 'ASSUMPTION',
      partOfSpeech: 'noun',
      definition: "A belief taken for granted without verification — a conclusion drawn without sufficient evidence. Strategic questioning identifies and tests assumptions that are driving the buyer's thinking. Unchecked assumptions often lead buyers to solve the wrong problem.",
      example: "Marcus assumed the problem was the product — his team wasn't closing and the product must be the cause. Riley tested that assumption: Are you confident that proposals going quiet means the product isn't compelling? Or could it be that proposals aren't speaking to what the buyer actually cares about? That single question reframed the entire problem.",
      imageSlug: '/images/strategic-questioning-assumption.png',
    },
    {
      word: 'REFRAME',
      partOfSpeech: 'verb',
      definition: "To present an issue from a different angle or perspective — shifting how the buyer understands and prioritises it. A skilled reframe doesn't tell the buyer they are wrong; it offers a new lens that makes a different conclusion feel natural and self-generated.",
      example: "Riley reframed the problem without being confrontational: Instead of asking 'why are your reps failing to close?', she asked 'what does a winning proposal look like compared to a losing one in your organisation?' That reframe shifted the conversation from blame to diagnosis, and Marcus engaged completely differently.",
      imageSlug: '/images/strategic-questioning-reframe.png',
    },
    {
      word: 'IMPLICATION',
      partOfSpeech: 'noun',
      definition: "The consequence or downstream impact of a problem. Surfacing implications makes the cost of inaction concrete and emotional, rather than abstract. 'If this problem remains unsolved for twelve months, what happens?' is an implication question — it moves the buyer from problem awareness to urgency.",
      example: "Riley asked: If your team's proposal-to-close rate stays where it is for another year, what does that mean for your annual revenue target? The implication calculation — $2.3 million in lost deals — turned a vague concern about conversion into a specific, urgent number that Marcus couldn't ignore.",
      imageSlug: '/images/strategic-questioning-implication.png',
    },
    {
      word: 'HYPOTHESIS',
      partOfSpeech: 'noun',
      definition: "A working proposition to be tested through questioning — rather than stating a conclusion, you offer a hypothesis and invite the buyer to confirm or challenge it. 'My hypothesis is that the real issue is X — what do you think?' is more collaborative and less presumptuous than 'the real issue is X.'",
      example: "Riley shared her hypothesis: Based on what you've described, my hypothesis is that your highest-performing reps are writing proposals differently from the rest — and that the gap is learnable. Have you ever compared winning and losing proposals side by side? That question turned the hypothesis into a diagnostic exercise Marcus was eager to run.",
      imageSlug: '/images/strategic-questioning-hypothesis.png',
    },
    {
      word: 'SOCRATIC',
      partOfSpeech: 'adjective',
      definition: 'Relating to the method of questioning associated with Socrates — using carefully constructed questions to guide a person to examine their own assumptions and arrive at conclusions through their own reasoning, rather than being told what to think. Socratic questioning is indirect, exploratory, and non-confrontational.',
      example: "Riley's questioning style was deliberately Socratic throughout the discovery call. Rather than telling Marcus his assumption was wrong, she asked: If the problem turned out to be proposal quality rather than product quality, how would your approach to solving it change? Marcus answered his own objection — which is the mark of effective Socratic questioning.",
      imageSlug: '/images/strategic-questioning-socratic.png',
    },
    {
      word: 'FUNNEL',
      partOfSpeech: 'noun',
      definition: "The progressive narrowing of a questioning sequence from broad and open to specific and closed. A questioning funnel starts with open questions ('Tell me about your current situation') and gradually narrows ('At which specific stage does conversion break down?'). Moving too quickly to narrow questions before establishing the full context is a common discovery mistake.",
      example: "Riley followed the questioning funnel deliberately: She opened broadly ('Walk me through where you are with sales performance'), then narrowed ('Where specifically does conversion break down?'), then narrowed further ('Is it at proposal stage, negotiation, or demo?'), then focused precisely ('What does a deal that goes quiet at proposal stage typically look like?'). Each question built on the last.",
      imageSlug: '/images/strategic-questioning-funnel.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'CAN YOU HELP ME UNDERSTAND WHAT YOU MEAN BY...?',
      definition: "The most professional and non-confrontational clarifying phrase in business English. 'Help me understand' signals intellectual respect — it places the burden of explanation on the speaker without implying they were unclear. Far more effective than 'What do you mean?' which can sound accusatory.",
      example: "Marcus said they weren't 'getting results'. Riley responded: Can you help me understand what you mean by results in this context — are we talking about revenue, team performance, customer satisfaction, or something else? That one clarification redirected the entire conversation.",
      imageSlug: '/images/strategic-questioning-can-you-help-me-understand-what-you-mean-by.png',
    },
    {
      phrase: "WHAT'S BEHIND THAT — WHAT LED YOU TO THAT VIEW?",
      definition: "The standard probing phrase for going one layer deeper beneath a stated position or opinion. It invites the buyer to explain their reasoning — which often reveals assumptions, past experiences, or concerns that weren't stated in the surface answer.",
      example: "Marcus said he didn't think more training would help. Riley probed: What's behind that — what led you to that view? Is it a past experience with training that didn't transfer to the floor, or something about how your team learns? That question revealed a previous failed training initiative — context that was essential to understanding how to position the solution.",
      imageSlug: '/images/strategic-questioning-whats-behind-that-what-led-you-to-that-view.png',
    },
    {
      phrase: "I'D LIKE TO CHALLENGE THAT ASSUMPTION GENTLY — HAVE YOU CONSIDERED...?",
      definition: "The phrase for surfacing and testing a buyer's assumption without confrontation. 'Gently' signals respect. 'Have you considered' invites reflection rather than demanding agreement. This phrase allows you to introduce a new perspective without making the buyer feel wrong for holding their current view.",
      example: "Riley said: I'd like to challenge that assumption gently — you've assumed the problem is the product, but have you considered that your proposals may not be articulating the product's value in the terms your buyers care about most? That's a very different problem with a very different solution.",
      imageSlug: '/images/strategic-questioning-id-like-to-challenge-that-assumption-gently.png',
    },
    {
      phrase: "IF THAT'S THE CASE, WHAT DOES THAT MEAN FOR...?",
      definition: "The implication question — it moves the buyer from describing a problem to feeling its consequences. Used after a problem has been confirmed: 'If X is true, what does that mean for Y?' Forces the buyer to articulate the downstream impact, which creates urgency organically.",
      example: 'Riley said: You mentioned proposals going quiet is your biggest conversion problem. If that pattern continues for another twelve months, what does that mean for your annual revenue target? Marcus did the maths — and the implication ($2.3 million in lost deals) made the problem feel urgent rather than theoretical.',
      imageSlug: '/images/strategic-questioning-if-thats-the-case-what-does-that-mean-for.png',
    },
    {
      phrase: 'WHAT WOULD SUCCESS LOOK LIKE FROM YOUR PERSPECTIVE?',
      definition: 'The outcome reframe — it shifts the conversation from problem definition to vision. Asking a buyer to describe success often reveals what they actually care about, which is frequently different from what they initially said the problem was. It also makes the eventual solution easier to position.',
      example: "Riley asked: Before I propose anything — what would success look like for your sales team twelve months from now? Not just in revenue terms, but in how the team operates and feels about their work. Marcus's answer revealed that morale and retention were as important as revenue — which changed the shape of the solution she proposed.",
      imageSlug: '/images/strategic-questioning-what-would-success-look-like-from-your-perspective.png',
    },
    {
      phrase: 'IS THAT A FIXED CONSTRAINT, OR IS THERE SOME FLEXIBILITY THERE?',
      definition: "The phrase for testing whether a stated limitation is real or assumed. Buyers frequently present constraints as fixed when they are actually negotiable — testing them politely is a critical discovery skill. 'Flexibility' signals openness without directly challenging the constraint.",
      example: "Marcus said the decision needed to be made this quarter. Riley asked: Is that a fixed constraint — a board deadline, a budget cycle — or is there some flexibility there? It turned out the 'this quarter' deadline was self-imposed and the real constraint was a board review in eight weeks, which changed the sales timeline significantly.",
      imageSlug: '/images/strategic-questioning-is-that-a-fixed-constraint-or-is-there-some-flexibility-there.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We're looking for a new sales training solution. We've been with our current provider for three years, but we're not seeing the results we need.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I appreciate you sharing that context. Before I say anything about what we do, I'd like to ask a few questions to make sure I understand your situation properly — would that be alright?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Of course.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "When you say you're not seeing the results you need — can you help me understand what you mean by that specifically? Are we talking about revenue performance, conversion rates, team development, or something else?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Primarily revenue. The sales team is not hitting target.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Understood. And when they're not hitting target — what's the breakdown? Is it a pipeline volume problem, a [[conversion:moving a prospect through each stage of the funnel — measured as a percentage]] problem, a deal size problem, or some combination of those?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Mostly conversion. They're getting in front of the right people — they're just not closing.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's useful. Can you tell me more about where in the process the [[conversion:the rate at which prospects move from one stage to the next]] breaks down? Is it at demo stage, proposal stage, or during negotiation?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Mostly at proposal stage. We get to proposal and then things go quiet.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'd like to challenge that [[assumption:a belief taken for granted without verification — a conclusion drawn without sufficient evidence]] gently — are you confident that proposals going quiet means the product isn't compelling? Or could it be that the proposals aren't being written to speak to what the buyer actually cares about most?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's an interesting way to frame it. I suppose we've assumed it's the product.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'And what would it mean for your team if that [[assumption:a belief taken for granted without verification]] turned out to be wrong? If the issue is proposal quality rather than product quality, what changes about how you approach solving it?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "It would change everything, actually. We'd stop looking for a new product and start looking at how proposals are written — and who's writing the best ones.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. And that leads to my [[hypothesis:a working proposition to be tested through questioning rather than asserted as fact]] — do your highest-performing reps write proposals differently from the rest? Have you ever compared them systematically?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We haven't. Not in a structured way.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's the first thing I'd want to understand — what the data shows when you compare winning and losing proposals side by side. What's your instinct about what we'd find?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Honestly? I think the top performers personalise their proposals far more. The rest follow a standard template and hope for the best.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "If that's what the data confirms — and I suspect it will — what does that [[implication:the consequence or downstream impact of a problem]] mean for how you would train the team? And what would it mean not to address it for another twelve months?",
    }
  ],

  matchingExercise: [
    {
        "word": "probing",
        "definition": "asking deeper follow-up questions to uncover information the customer hasn't volunteered"
    },
    {
        "word": "clarifying",
        "definition": "asking questions to ensure precise mutual understanding and eliminate ambiguity"
    },
    {
        "word": "assumption",
        "definition": "a belief taken for granted without verification — a conclusion drawn without sufficient evidence"
    },
    {
        "word": "reframe",
        "definition": "to present an issue from a different angle so the buyer sees it through a new lens"
    },
    {
        "word": "implication",
        "definition": "the consequence or downstream impact of a problem — makes the cost of inaction concrete"
    },
    {
        "word": "hypothesis",
        "definition": "a working proposition to be tested through questioning rather than asserted as a conclusion"
    },
    {
        "word": "Socratic",
        "definition": "a questioning style that guides the other person to their own conclusions through carefully constructed questions"
    },
    {
        "word": "funnel",
        "definition": "the progressive narrowing of a questioning sequence from broad and open to specific and precise"
    }
],
  fillBlankExercise: [
    {
        "before": "Can you help me understand what you mean by 'not working' — are we talking about adoption, performance, or something ",
        "after": "?",
        "answer": "else"
    },
    {
        "before": "What's ",
        "after": " that view — is it based on a past experience, or something specific you've observed recently?",
        "answer": "behind"
    },
    {
        "before": "I'd like to challenge that assumption ",
        "after": " — have you considered that the issue might be proposal quality rather than product quality?",
        "answer": "gently"
    },
    {
        "before": "If that pattern continues for another twelve months, what does that mean ",
        "after": " your annual revenue target?",
        "answer": "for"
    },
    {
        "before": "My ",
        "after": " is that your top-performing reps write proposals differently — and that the gap between them and the rest is learnable.",
        "answer": "hypothesis"
    },
    {
        "before": "Is that a fixed constraint, or is there some ",
        "after": " there — a board cycle, a budget deadline?",
        "answer": "flexibility"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What assumption does Marcus initially make about why the team isn't closing deals?",
        "options": [
            "The team lacks enough pipeline volume",
            "The product isn't compelling enough",
            "The sales team needs more negotiation training"
        ],
        "correctIndex": 1
    },
    {
        "question": "At what stage does Marcus say the conversion problem primarily occurs?",
        "options": [
            "During negotiation",
            "At the demo stage",
            "At proposal stage — deals go quiet after a proposal is sent"
        ],
        "correctIndex": 2
    },
    {
        "question": "What hypothesis does Riley offer about the top-performing reps?",
        "options": [
            "They have more industry experience than the rest of the team",
            "They personalise their proposals more — and the gap is learnable",
            "They work with easier accounts and larger budgets"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Marcus say when Riley asks what it would mean if the problem was proposal quality rather than product quality?",
        "options": [
            "He says the board would not accept a change in approach mid-year",
            "He says it would change everything — they'd stop looking for a new product and focus on proposal writing instead",
            "He says he'd need to see the data before changing his view"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Think about the best question you were ever asked — in a job interview, a sales conversation, or a difficult meeting. What made it so effective? What did it make you think or feel?",
        "Have you ever changed your mind about something important because of a conversation — not because someone told you that you were wrong, but because of the questions they asked? What happened?",
        "In your professional culture, is asking deep probing questions seen as a sign of intelligence and engagement, or can it sometimes feel intrusive or aggressive? How do you read the room?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Could you elaborate _____ what specifically isn't working — is it the adoption, the outcomes, or the internal buy-in?",
            "options": [
                "about",
                "on",
                "with"
            ],
            "correctIndex": 1,
            "explanation": "'Elaborate on' is the fixed phrasal verb — 'on' is always the correct preposition after 'elaborate' when introducing the content being expanded. 'Elaborate on a point', 'elaborate on what you said', 'elaborate on the assumption'. 'Elaborate about' is non-standard. 'Elaborate with' is incorrect. This is one of the most common preposition errors at C1-C2 level: confusing 'elaborate on' with 'talk about' or 'speak with'."
        },
        {
            "sentence": "Can you tell me why _____ the previous solution — was it a cost issue, a performance issue, or something else entirely?",
            "options": [
                "did you leave",
                "you left",
                "have you left"
            ],
            "correctIndex": 1,
            "explanation": "In indirect or embedded questions — those that follow a reporting verb like 'tell me', 'explain', 'I'd like to know' — the word order is statement order (subject + verb), not question order (auxiliary + subject + verb). 'Can you tell me why you left' (statement order) is correct. 'Can you tell me why did you leave' (question order) is a very common C1-C2 error. The rule: direct question = 'Why did you leave?'; embedded question = 'Can you tell me why you left?'"
        },
        {
            "sentence": "What are the _____ of leaving this problem unaddressed for another twelve months — for the team, the pipeline, and the revenue target?",
            "options": [
                "implications for",
                "implications on",
                "implications of"
            ],
            "correctIndex": 0,
            "explanation": "'Implications for' is the correct collocation — 'implications' is always followed by 'for' when introducing who or what is affected. 'The implications for the business', 'the implications for the team', 'the implications for growth'. 'Implications on' is non-standard in formal English. 'Implications of' is used differently — it introduces the source or cause: 'the implications of this decision', not the affected party. So: 'the implications of [problem] for [affected party]'."
        },
        {
            "sentence": "Rather than telling the buyer what the problem is, a Socratic approach _____ them to arrive at the conclusion through their own reasoning.",
            "options": [
                "leads",
                "drives",
                "makes"
            ],
            "correctIndex": 0,
            "explanation": "'Leads' is the most precise verb here — 'lead someone to a conclusion' means to guide them there through a process. 'Drives' is possible but implies more force or pressure, which contradicts the collaborative, non-confrontational nature of Socratic questioning. 'Makes' requires the bare infinitive without 'to': 'makes them arrive' — grammatically possible, but too forceful for describing a Socratic method. 'Lead someone to [conclusion]' is the standard phrase for this concept."
        },
        {
            "sentence": "I'd like to challenge _____ assumption that the problem is product quality — have you tested it directly?",
            "options": [
                "the",
                "that",
                "your"
            ],
            "correctIndex": 2,
            "explanation": "'Your assumption' is the most appropriate choice here — it is specific (the buyer's assumption), respectful (possessive rather than accusatory), and grammatically precise. 'The assumption' is possible but less personal and less direct. 'That assumption' requires a prior introduction of the assumption — it references something previously named. Since the assumption is being introduced for the first time in this phrasing, 'your assumption' is the most natural and professional choice at C1-C2 level."
        },
        {
            "sentence": "Your questioning should follow a _____ — starting broad and open, then progressively narrowing toward the specific issue.",
            "options": [
                "funnel",
                "sequence",
                "script"
            ],
            "correctIndex": 0,
            "explanation": "'Funnel' is the correct and specific term for this questioning structure in sales and coaching methodology — it describes both the shape (wide at the top, narrow at the bottom) and the direction (from open to specific). 'Sequence' describes order but not the narrowing structure. 'Script' implies a fixed, pre-written plan — which contradicts the adaptive nature of strategic questioning. At C1-C2 level, using the precise technical term ('funnel') rather than a general synonym demonstrates vocabulary precision."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the buyer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "We've tried sales training before and it never sticks. The team forgets everything within a week.",
                "options": [
                    "Our platform is different — it uses spaced repetition and contextual learning, so retention is significantly higher.",
                    "What's behind that — when you say it never sticks, is that a training design problem, a reinforcement problem, or a culture problem? Because those require very different solutions.",
                    "I understand that concern. Many of our customers felt the same way before they tried our approach."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the only response that actually investigates the claim rather than countering it or validating it. 'Never sticks' is an assertion that contains an unexamined assumption — that the problem is the training itself, rather than the reinforcement environment or the culture. Option B opens that up without being confrontational. Option A immediately positions the product as the answer before understanding the root cause — which risks the same outcome the buyer described. Option C uses social proof to neutralise the objection without addressing it."
            },
            {
                "customerLine": "We've decided we need a new CRM system — that's what's going to fix the pipeline problem.",
                "options": [
                    "A new CRM could definitely help — and we integrate with all the major platforms, so that's great news.",
                    "I'd like to explore that with you. Can I ask — what specific pipeline problem are you hoping the CRM will solve? I want to make sure we understand the root cause before recommending a solution, because sometimes a CRM changes the symptom without addressing what's underneath it.",
                    "I'd push back on that — in our experience, CRM changes often create disruption without fixing the underlying performance problem."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the Socratic response — it doesn't accept the buyer's solution at face value, nor does it challenge it directly. It asks a question that invites the buyer to examine their own reasoning. 'What specific pipeline problem are you hoping the CRM will solve?' is a brilliant question because it asks the buyer to justify the solution they've already decided on — which often reveals that the solution and the problem are not as well matched as assumed. Option A simply agrees, which closes the conversation. Option C challenges directly — which is confrontational and likely to provoke defensiveness."
            },
            {
                "customerLine": "To be honest, I'm not sure this is the right time to invest in training. The team is under pressure to hit target and I don't want to add more to their plate.",
                "options": [
                    "That's completely understandable — we could look at a lighter-touch implementation to reduce the burden on the team.",
                    "I'd like to explore that assumption with you. Is the concern that training would take time away from selling — or is it that the team doesn't have the capacity to engage meaningfully with it right now?",
                    "If the team is under pressure to hit target, isn't that exactly the moment when investing in their capability makes the most sense?"
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most sophisticated response — it identifies that there are actually two different concerns embedded in Marcus's statement (time vs. capacity/engagement) and asks him to specify which one is the real constraint. This is precision clarifying. Option A concedes before understanding the concern — which may solve the wrong problem. Option C uses a rhetorical reframe ('isn't that exactly the moment?') which can sound clever but often provokes resistance — it tells the buyer what to think rather than leading them to think it."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the discovery conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Before I present anything, I'd like to ask a few questions. Could you elaborate on what specifically isn't working?"
            },
            {
                "speaker": "Marcus",
                "text": "The team isn't closing. We're getting in front of good prospects — they're just not converting."
            },
            {
                "speaker": "Riley",
                "text": "Understood. Can you tell me why did you move away from your previous training provider — was it a performance issue or a relationship issue?"
            },
            {
                "speaker": "Marcus",
                "text": "Performance, mainly. The content was good but the results didn't follow."
            },
            {
                "speaker": "Riley",
                "text": "I'd like to challenge your assumption gently — have you considered that the issue might be proposal quality rather than product quality?"
            },
            {
                "speaker": "Riley",
                "text": "What are the implications of leaving this problem unsolved on the business for another twelve months?"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "why did you move",
                "correction": "why you moved",
                "explanation": "In indirect or embedded questions — those following a reporting verb like 'tell me', 'explain', 'describe', 'I'd like to know' — the word order is statement order (subject + verb), not question order (auxiliary + subject + verb). Direct question: 'Why did you move?' Indirect question: 'Can you tell me why you moved?' The auxiliary 'did' drops and the verb takes its past form directly. This is one of the most persistent C1-C2 grammar errors in English: learners carry question word order into embedded clauses where it does not belong."
            },
            {
                "lineIndex": 5,
                "incorrectText": "implications of leaving this problem unsolved on the business",
                "correction": "implications of leaving this problem unsolved for the business",
                "explanation": "'Implications for' is the correct collocation when referring to the affected party. 'Implications for the business' means: what the business will face as a consequence. 'Implications on the business' is non-standard and treats the business as a surface something lands on, rather than the entity that bears the consequences. The rule: 'implications of [action/event] for [affected party]'. 'The implications of this decision for the team', 'the implications of inaction for the revenue target'."
            },
            {
                "lineIndex": 2,
                "incorrectText": "why did you move",
                "correction": "why you moved",
                "explanation": "Already covered above — this is the indirect question word order error."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a question or statement. Work with your partner to finish it naturally, maintaining a Socratic, non-confrontational tone.",
        "items": [
            {
                "customerLine": "We've decided the team needs more product training — that's what's missing.",
                "salespersonStart": "That's worth exploring. Can I ask — when deals go quiet after the demo, what feedback are you getting from prospects about why they didn't move forward?",
                "suggestedCompletion": "Because in my experience, if prospects are leaving the demo excited but not converting, the issue is rarely product knowledge — it's usually the ability to connect the product to the buyer's specific business problem. That's a different training need from product features. Have you systematically asked lost prospects why they chose not to proceed?"
            },
            {
                "customerLine": "The problem is clear — our reps aren't hitting target and they need to close faster.",
                "salespersonStart": "I understand. Before I suggest anything, I'd like to make sure I understand where in the process the gap actually sits.",
                "suggestedCompletion": "Is it that reps aren't generating enough pipeline — so volume is the issue? Or are they generating good pipeline but losing it at a specific stage? Or are the deals closing but taking too long — which is a different problem from losing them entirely? Each of those has a different solution, and I don't want to propose the wrong one."
            },
            {
                "customerLine": "I'm not sure your platform would fix this. We've tried solutions before.",
                "salespersonStart": "What's behind that — what happened with the previous solutions that makes you cautious?",
                "suggestedCompletion": "Was it a design problem — the training didn't address the real skill gap? A reinforcement problem — the learning didn't transfer back to the floor? Or a culture problem — the team didn't engage because they didn't believe in it? Those are three very different root causes, and understanding which one you experienced would tell me whether what we do is genuinely different — or whether we'd face the same outcome."
            }
        ]
    }
},
};
