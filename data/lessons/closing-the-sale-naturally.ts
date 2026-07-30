import { Lesson } from '@/types/lesson';

export const closingTheSaleNaturally: Lesson = {
  slug: 'closing-the-sale-naturally',
  title: 'Closing the Sale Naturally',
  subtitle: "How to bring a sales conversation to a confident, professional close using 'Shall we move forward?' and other natural closing language",
  level: 'B1-B2',
  description: "The close is not a trick — it is a natural conclusion to a well-run sales conversation. When you have understood the customer's problem, shown them the solution, handled their objections, and agreed on terms, asking 'Shall we move forward?' should feel like the obvious next step. This lesson teaches you the language of a professional close: how to test readiness with a trial close, uncover final objections, propose a next step, and agree on a timeline — without pressure and without awkwardness.",
  heroImage: '/images/closing-the-sale-naturally-hero.png',

  vocabulary: [
    {
      word: 'CLOSE',
      partOfSpeech: 'verb',
      definition: "To bring a sales conversation to completion — when the buyer agrees to move forward. To close a deal means to win the customer's commitment.",
      example: "The salesperson asked 'Shall we move forward with the contract this week?' to close the deal.",
      imageSlug: '/images/closing-the-sale-naturally-close.png',
    },
    {
      word: 'COMMITMENT',
      partOfSpeech: 'noun',
      definition: "An agreement or promise to move forward. A commitment can be a signed contract or just an agreed next step with a clear timeline.",
      example: "The customer gave a commitment to sign the contract once the finance team confirmed the budget.",
      imageSlug: '/images/closing-the-sale-naturally-commitment.png',
    },
    {
      word: 'OBJECTION',
      partOfSpeech: 'noun',
      definition: "A concern or reason the buyer gives for not moving forward yet. Objections often mean the buyer is still interested but has a final question that needs answering.",
      example: "The customer raised an objection about the data processing agreement before agreeing to sign.",
      imageSlug: '/images/closing-the-sale-naturally-objection.png',
    },
    {
      word: 'TRIAL CLOSE',
      partOfSpeech: 'phrase',
      definition: "A soft question used to check if the buyer is ready to commit — before asking for the formal close. It helps the salesperson understand how the buyer is feeling without pressure.",
      example: "The salesperson used a trial close by asking 'How are you feeling about everything we have covered?' before asking for the signature.",
      imageSlug: '/images/trial-close.png',
    },
    {
      word: 'URGENCY',
      partOfSpeech: 'noun',
      definition: "A real reason for the buyer to decide now rather than later. Good urgency helps the buyer understand the cost of waiting — it does not pressure them into a bad decision.",
      example: "The salesperson created urgency by explaining that the onboarding cohort closes at the end of the week.",
      imageSlug: '/images/closing-the-sale-naturally-urgency.png',
    },
    {
      word: 'STALL',
      partOfSpeech: 'verb',
      definition: "When a buyer delays making a decision without giving a clear reason. Stalling usually means there is an unspoken concern that needs to be discovered.",
      example: "The customer started to stall by saying 'we just need a bit more time' without explaining what was holding them back.",
      imageSlug: '/images/closing-the-sale-naturally-stall.png',
    },
    {
      word: 'NEXT STEP',
      partOfSpeech: 'phrase',
      definition: "The agreed action after a sales conversation — who will do what, and by when. A clear next step turns a verbal yes into a concrete plan.",
      example: "The salesperson agreed on next steps: send the contract today, share with finance by Wednesday, and sign by Friday.",
      imageSlug: '/images/next-step.png',
    },
    {
      word: 'ASSUMPTION',
      partOfSpeech: 'noun',
      definition: "In the assumptive close, the salesperson acts as if the buyer has already decided to move forward. It feels confident and makes it easier for the buyer to say yes.",
      example: "The salesperson used an assumptive close by asking 'Shall we move forward with the contract this week?' instead of 'Are you going to sign?'",
      imageSlug: '/images/closing-the-sale-naturally-assumption.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'SHALL WE MOVE FORWARD?',
      definition: "A confident, professional way to ask the buyer to commit. 'Shall we' is softer than 'Will you' — it implies a shared decision, not a demand. Always follow it with the specific next step.",
      example: "The salesperson said 'Shall we move forward? I can have the contract ready to send today if you would like to confirm.'",
      imageSlug: '/images/shall-we-move-forward.png',
    },
    {
      phrase: "BASED ON EVERYTHING WE'VE COVERED, HOW ARE YOU FEELING?",
      definition: "A trial close phrase that invites the buyer to share how they feel before you ask for the commitment. 'How are you feeling?' is more open and less pressured than 'Are you ready?'",
      example: "The salesperson asked 'Based on everything we have covered, how are you feeling?' to check for any remaining concerns.",
      imageSlug: '/images/based-on-everything-weve-covered-how-are-you-feeling.png',
    },
    {
      phrase: 'IS THERE ANYTHING STILL HOLDING YOU BACK?',
      definition: "A phrase for uncovering final concerns before the close. It sounds natural and non-confrontational — it implies the buyer wants to move forward but something is stopping them.",
      example: "The salesperson asked 'Is there anything still holding you back?' and the customer mentioned the legal review.",
      imageSlug: '/images/is-there-anything-still-holding-you-back.png',
    },
    {
      phrase: 'WHAT WOULD NEED TO BE TRUE FOR YOU TO FEEL CONFIDENT MOVING FORWARD?',
      definition: "A question for when the buyer is vague about their hesitation. It asks them to say exactly what is missing so the salesperson can address it directly.",
      example: "The salesperson asked this question, and the customer said they needed clarity on the implementation timeline.",
      imageSlug: '/images/what-would-need-to-be-true-for-you-to-feel-confident-moving-forward.png',
    },
    {
      phrase: "IF YOU'RE HAPPY WITH EVERYTHING, I CAN SEND THE CONTRACT TODAY",
      definition: "A phrase that moves from checking satisfaction to proposing action. 'If you are happy' is low-pressure. 'I can send the contract today' creates gentle urgency without demanding an immediate signature.",
      example: "The salesperson said 'If you are happy with everything, I can send the contract today so your team has the week to review it.'",
      imageSlug: '/images/if-youre-happy-with-everything-i-can-send-the-contract-today.png',
    },
    {
      phrase: "LET'S AGREE ON NEXT STEPS",
      definition: "A phrase that turns a verbal yes into a concrete plan. Use it at the end of every sales call — always close with a specific action, an owner, and a date.",
      example: "The salesperson said 'Let's agree on next steps — I'll send the contract today and we'll speak again on Friday to confirm.'",
      imageSlug: '/images/lets-agree-on-next-steps.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Marcus, we've had several conversations over the past few weeks — we've covered the platform, the case study, and the commercial [[terms:the conditions of a deal — price, payment schedule, duration, scope]]. Based on everything we've discussed, how are you feeling about everything?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Honestly, Riley — I think we're very close. The team liked the platform demo, the case study numbers were convincing, and the terms you offered were fair. I'm feeling good about it.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's genuinely great to hear. Is there anything still holding you back that we haven't addressed?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The only remaining thing is getting sign-off from our finance team on the final budget. But honestly, I think that's a formality at this stage — I've already spoken with them and the number we agreed works.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That makes complete sense — and I want to make that process as easy as possible for you. Would it help if I put together a one-page cost summary specifically for your finance team? Something with the numbers, the [[ROI:return on investment — the financial benefit gained relative to the cost]] data, and the agreed terms all on one page?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That would be very useful. Can you include the case study ROI figures? That's the most compelling piece for a finance audience.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Absolutely — I'll pull together the cost summary with the case study data and send it this afternoon. Marcus — based on where we are, shall we move forward, subject to your finance team's confirmation?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Yes — I think we can. If finance confirms by Friday, we're ready to sign.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Excellent. And to make sure we keep [[momentum:forward progress that builds over time — losing momentum means the deal stalls]] — what does a realistic timeline look like for getting finance confirmation?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I'd expect to have an answer by Friday afternoon. I'll share your summary with them tomorrow morning.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Perfect. So — I send the summary today, you share it with finance tomorrow, and we aim for confirmation by Friday. If it's approved, I can have the contract ready the same afternoon. Does that timeline work?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That works perfectly.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Wonderful. Let's agree on [[next step:the specific, time-bound action agreed at the end of a sales conversation — who does what, and by when]]s — once you've confirmed finance approval, shall I send the contract directly to you, or should I copy your legal team from the start?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Send it to me and copy our legal team. I'll introduce you by email before Friday so they know to expect it.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Perfect. I'll send the cost summary now and look out for your introduction. Marcus — I'm genuinely looking forward to getting started. This feels like exactly the right fit.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'It does. Speak on Friday.',
    }
  ],

  matchingExercise: [
    {
        "word": "close",
        "definition": "to bring a sales conversation to completion — the moment the buyer agrees to move forward"
    },
    {
        "word": "commitment",
        "definition": "an agreement or promise to proceed — a specific next step with a clear timeline"
    },
    {
        "word": "objection",
        "definition": "a concern or reason the buyer gives for not moving forward at the close stage"
    },
    {
        "word": "trial close",
        "definition": "a soft question used to test whether the buyer is ready to commit before the formal ask"
    },
    {
        "word": "urgency",
        "definition": "a genuine reason for the buyer to decide now rather than later"
    },
    {
        "word": "stall",
        "definition": "when a buyer delays making a decision without giving a clear reason"
    },
    {
        "word": "next step",
        "definition": "the specific, time-bound action agreed at the end of a sales conversation"
    },
    {
        "word": "assumption",
        "definition": "acting as if the buyer has already decided — the basis of 'Shall we move forward?'"
    }
],
  fillBlankExercise: [
    {
        "before": "Based on everything we've covered, how are you ",
        "after": " about the platform?",
        "answer": "feeling"
    },
    {
        "before": "Is there anything still ",
        "after": " you back that we haven't addressed?",
        "answer": "holding"
    },
    {
        "before": "Shall we move ",
        "after": ", subject to your finance team's confirmation?",
        "answer": "forward"
    },
    {
        "before": "If you're happy with everything, I can send the ",
        "after": " over today.",
        "answer": "contract"
    },
    {
        "before": "Let's agree on next ",
        "after": " — I'll send the contract today, and we'll aim for a signature by Friday.",
        "answer": "steps"
    },
    {
        "before": "What would need to be ",
        "after": " for you to feel confident moving forward this week?",
        "answer": "true"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the only remaining thing holding Marcus back from signing?",
        "options": [
            "He wants to see another case study",
            "He needs finance team sign-off on the final budget",
            "He wants to renegotiate the payment terms"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley offer to help Marcus get finance approval faster?",
        "options": [
            "A discount on the first month",
            "A one-page cost summary with the ROI data",
            "A reference call with another customer"
        ],
        "correctIndex": 1
    },
    {
        "question": "By what day does Marcus expect to have finance confirmation?",
        "options": [
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "correctIndex": 2
    },
    {
        "question": "Who does Marcus ask Riley to copy when she sends the contract?",
        "options": [
            "His manager and his IT team",
            "His finance team",
            "His legal team"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Have you ever needed to make a big purchase decision at work — software, a supplier contract, a service? What made you say yes? What nearly stopped you?",
        "When you are close to a decision but not quite there, what kind of question or information would help you commit? What does the salesperson need to do?",
        "Have you ever had a moment when you were ready to buy but the salesperson made you feel pressured? What happened — and how did it affect your decision?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "I'm _____ this is exactly the right platform for your team.",
            "options": [
                "confidence",
                "confident",
                "confidently"
            ],
            "correctIndex": 1,
            "explanation": "'Confident' is the adjective needed after 'I'm' (I am). 'Confidence' is a noun — you 'have confidence' or 'show confidence', but you don't 'am confidence'. 'Confidently' is an adverb, used to describe how you do something ('she spoke confidently'). After 'I am / I'm', always use an adjective: 'I'm confident', 'I'm ready', 'I'm certain'."
        },
        {
            "sentence": "Shall we _____ forward, subject to your finance team's confirmation?",
            "options": [
                "moving",
                "moved",
                "move"
            ],
            "correctIndex": 2,
            "explanation": "After modal verbs like 'shall', 'will', 'can', 'could', 'would', and 'should', always use the base form of the verb — never '-ing' or past tense. 'Shall we move' is correct. 'Shall we moving' and 'shall we moved' are both wrong. This rule is absolute: modal + base verb, always."
        },
        {
            "sentence": "Once you _____ the contract, we can book a kickoff call for next week.",
            "options": [
                "will sign",
                "sign",
                "would sign"
            ],
            "correctIndex": 1,
            "explanation": "In time clauses introduced by 'once', 'when', 'after', 'before', and 'as soon as', English uses present simple to refer to a future event — not 'will' or 'would'. 'Once you sign' is correct; 'once you will sign' is a very common learner error. The rule: time clause = present simple, main clause = future with 'will/can/shall'."
        },
        {
            "sentence": "Is there anything _____ you back that we haven't addressed?",
            "options": [
                "held",
                "hold",
                "holding"
            ],
            "correctIndex": 2,
            "explanation": "'Holding' is correct because we need a present participle here — the phrase 'anything holding you back' uses a participle clause to describe what the 'anything' is doing. Think of it as a reduced relative clause: 'anything [that is] holding you back'. 'Hold' (base form) and 'held' (past) cannot function in this position."
        },
        {
            "sentence": "I want to _____ on a clear next step before we finish the call.",
            "options": [
                "agree",
                "agreed",
                "agreeing"
            ],
            "correctIndex": 0,
            "explanation": "After 'want to', always use the base form of the verb. 'I want to agree' is correct. 'I want to agreed' and 'I want to agreeing' are both wrong. This applies to all infinitive constructions: 'want to', 'need to', 'like to', 'plan to', 'hope to' — always followed by the base verb, never past tense or '-ing'."
        },
        {
            "sentence": "What would need to be _____ for you to feel confident moving forward?",
            "options": [
                "truth",
                "truly",
                "true"
            ],
            "correctIndex": 2,
            "explanation": "'True' is the adjective needed after 'to be'. 'What would need to be true' is a fixed closing question — it asks the buyer to define exactly what is missing. 'Truth' is a noun ('that is the truth') — it cannot follow 'to be' in this structure. 'Truly' is an adverb ('I truly believe') — also not correct here. The pattern is: be + adjective."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "We like the platform, but I'm not sure we're ready to commit just yet.",
                "options": [
                    "That's completely understandable. Is there anything still holding you back that we haven't addressed? Sometimes a hesitation at this stage points to something specific — I'd rather know what it is so I can help.",
                    "I understand — but I should mention that our onboarding cohort closes at the end of the week, so if you want to start in July, now is the time.",
                    "Of course — take all the time you need. Just let me know when you're ready."
                ],
                "correctIndex": 0,
                "explanation": "Option A is the professional response — it acknowledges the hesitation without pressure and then asks a diagnostic question to uncover the real objection. That question is what keeps the deal alive. Option B introduces urgency too quickly before understanding what the hesitation actually is — which can feel pushy. Option C is too passive — 'take all the time you need' removes all momentum and puts the next step entirely in the buyer's hands."
            },
            {
                "customerLine": "Everything looks good. We just need a final sign-off from our director.",
                "options": [
                    "Perfect — that's a completely normal step. Would it help if I put together a one-page summary of the key terms and ROI data that your director could review? I can send it today so you have it ready for the conversation.",
                    "Great — let me know when you have approval and we'll take it from there.",
                    "Wonderful. I'll send the contract over now so you have it ready when the director approves."
                ],
                "correctIndex": 0,
                "explanation": "Option A takes action to help the buyer get internal approval — which is exactly the right move at this stage. Offering a tailored summary for the director shows commercial awareness and keeps the deal moving forward. Option B is too passive — it puts everything on hold with no concrete offer of support. Option C sends the contract before approval is confirmed, which can feel presumptuous and may create friction with the director."
            },
            {
                "customerLine": "Yes — if the contract looks good, we're ready to sign. What are the next steps?",
                "options": [
                    "Brilliant — I'll send the contract over now. Once you've had a chance to review it, let me know if anything needs adjusting. We can discuss the kickoff call after you've signed.",
                    "I'm so glad to hear that! I'll get the contract prepared straight away.",
                    "Excellent. Let me agree on next steps — I'll send the contract today. You review it and copy in your legal team. If there are no issues, we can aim for a signature by end of the week and book the kickoff call for the following Monday. Does that timeline work?"
                ],
                "correctIndex": 2,
                "explanation": "Option C is the complete professional close — it maps out the specific steps, assigns actions, includes the legal team, gives a timeline, and confirms agreement. This is exactly what 'let's agree on next steps' looks like in practice. Option A sends the contract but leaves the next steps vague and delayed. Option B expresses enthusiasm without giving the buyer any concrete information — a common mistake at the close."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "I'm confidence this is exactly the right platform for your team — based on everything we've discussed."
            },
            {
                "speaker": "Marcus",
                "text": "We agree. The whole team is ready to move forward."
            },
            {
                "speaker": "Riley",
                "text": "Wonderful. Shall we moved forward with the contract today, subject to your finance team's approval?"
            },
            {
                "speaker": "Marcus",
                "text": "Yes — please send it over. How long is the contract?"
            },
            {
                "speaker": "Riley",
                "text": "It's a 12-month agreement. Once you'll sign, we can book a kickoff call with the onboarding team for next week."
            },
            {
                "speaker": "Marcus",
                "text": "Perfect. We're looking forward to getting started."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "I'm confidence",
                "correction": "I'm confident",
                "explanation": "'Confidence' is a noun — you have confidence, you show confidence, you feel confidence. But after 'I am / I'm', you need an adjective: 'I'm confident'. This is a very common error. Think of similar pairs: 'patience' (noun) / 'patient' (adjective), 'experience' (noun) / 'experienced' (adjective). After 'I am', always use the adjective form."
            },
            {
                "lineIndex": 2,
                "incorrectText": "Shall we moved",
                "correction": "Shall we move",
                "explanation": "After modal verbs — shall, will, can, could, would, should, must, may, might — always use the base form of the verb. Never the past tense. 'Shall we move' is correct. 'Shall we moved' is not possible in English. The rule is absolute: modal + base verb, always. This applies to all modals: 'can confirm', 'would send', 'should discuss'."
            },
            {
                "lineIndex": 4,
                "incorrectText": "Once you'll sign",
                "correction": "Once you sign",
                "explanation": "In time clauses introduced by 'once', 'when', 'after', 'before', and 'as soon as', English always uses present simple — not 'will'. 'Once you sign' (not 'once you'll sign'). This is a fixed rule: the time clause refers to the future event with present simple; the main clause uses 'will' or another modal. Other examples: 'when you arrive' (not 'when you'll arrive'), 'as soon as we receive it' (not 'as soon as we'll receive it')."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "We've reviewed everything and the team is happy with the platform. I just need final approval from my director.",
                "salespersonStart": "That's great news — and a completely normal step. Is there anything I can do to help you get that approval quickly? For example, I could put together...",
                "suggestedCompletion": "a one-page summary of the key terms, the case study ROI, and the agreed commercial terms — something your director can review in five minutes. I can send it today. Would that be useful?"
            },
            {
                "customerLine": "I think we're close — but I'm still not quite ready to commit.",
                "salespersonStart": "I appreciate you being honest. Is there anything still holding you back that we haven't addressed? Sometimes at this stage...",
                "suggestedCompletion": "there's one specific concern that hasn't been said yet — and if I know what it is, I can probably address it directly. I'd much rather deal with it now than have it become a problem later."
            },
            {
                "customerLine": "Yes — we're ready. What happens next?",
                "salespersonStart": "Excellent. Let's agree on next steps —",
                "suggestedCompletion": "I'll send the contract today. You review it and share it with your legal team by Wednesday. If everything looks good, we can aim for a signature by Friday — and I'll book the kickoff call with the onboarding team for the following Monday. Does that timeline work for you?"
            }
        ]
    }
},
};
