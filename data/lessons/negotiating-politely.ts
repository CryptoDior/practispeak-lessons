import { Lesson } from '@/types/lesson';

export const negotiatingPolitely: Lesson = {
  slug: 'negotiating-politely',
  title: 'Negotiating Politely',
  subtitle: "How to negotiate price and terms professionally using 'Would you be open to…?' and other collaborative language",
  level: 'B1-B2',
  description: "Negotiation is not about winning — it's about finding terms that work for both sides. The most effective negotiators in B2B sales use polite, conditional language that keeps the conversation collaborative rather than adversarial. In this lesson, you will learn the key phrases for proposing changes to price and terms, acknowledging the other side's position, making conditional offers, and reaching a mutual agreement — all while maintaining a professional, respectful tone.",
  heroImage: '/images/negotiating-politely-hero.png',

  vocabulary: [
    {
      word: 'NEGOTIATE',
      partOfSpeech: 'verb',
      definition: 'To discuss terms with another party in order to reach an agreement that works for both sides. Professional negotiation is collaborative, not confrontational — the goal is a deal, not a victory.',
      example: "Riley said: I'm happy to negotiate on the terms — my goal is to find something that works for both of us, not just to get a signature. Let's look at the different parts of the package and see where we have flexibility.",
      imageSlug: '/images/negotiate.png',
    },
    {
      word: 'CONCESSION',
      partOfSpeech: 'noun',
      definition: "Something you give up or agree to in order to reach a deal. Good negotiators make concessions strategically — always getting something in return. 'I can offer X if you can commit to Y' is a conditional concession.",
      example: 'Riley was prepared to make a concession on the monthly rate — but only in exchange for a longer contract commitment. She said: A 12-month contract gives me the security I need to offer you a lower per-user rate.',
      imageSlug: '/images/concession.png',
    },
    {
      word: 'FLEXIBILITY',
      partOfSpeech: 'noun',
      definition: 'The ability to adjust or change terms when needed. Showing flexibility signals that you are a fair and reasonable partner. However, too much flexibility too quickly signals that your original offer was inflated.',
      example: 'Marcus said: We appreciate the flexibility on the onboarding package — the one-month version actually covers what we need at this stage, so the trade-off makes sense for us.',
      imageSlug: '/images/flexibility.png',
    },
    {
      word: 'LEVERAGE',
      partOfSpeech: 'noun',
      definition: "An advantage that gives one side more negotiating power. Leverage can come from timing (end of quarter), alternatives (other suppliers), or volume (large deal size). Understanding both sides' leverage is key to a successful negotiation.",
      example: "Riley knew that Marcus had leverage — he had mentioned two other vendors in the evaluation. So rather than defending the price, she focused on differentiating the value: 'If price were equal, which platform would your team choose to work with?'",
      imageSlug: '/images/leverage.png',
    },
    {
      word: 'COMPROMISE',
      partOfSpeech: 'noun',
      definition: "An agreement where both sides give up something to reach a middle ground. A good compromise leaves both parties feeling that they got something, not that they lost something. 'We both moved' is better than 'they won'.",
      example: 'Marcus said to his colleague after the call: That was a fair compromise — we got the $28 per user rate and 45-day payment terms, and they got the 12-month contract commitment. Nobody got everything, but both sides got something.',
      imageSlug: '/images/compromise.png',
    },
    {
      word: 'TERMS',
      partOfSpeech: 'noun',
      definition: "The conditions of an agreement — including price, payment schedule, contract duration, delivery, and scope. 'Terms' is always plural in this context. 'What are the terms?' means 'what are all the conditions of this deal?'",
      example: 'Riley sent a summary after the call: As agreed, the terms are as follows — $28 per user per month, 12-month contract, one month of dedicated onboarding, and 45-day payment terms. Please let me know if anything needs adjustment before I prepare the contract.',
      imageSlug: '/images/terms.png',
    },
    {
      word: 'COUNTER-OFFER',
      partOfSpeech: 'noun',
      definition: 'A response to an offer that proposes different terms rather than accepting or rejecting outright. A counter-offer keeps the negotiation moving. Always respond to a counter-offer, never ignore it.',
      example: "Marcus made a counter-offer: Our budget is $28 per user — not $35. Riley treated it professionally: That's a useful counter-offer, Marcus. Let me see what I can do. I may be able to get to $28 if we adjust one element of the package.",
      imageSlug: '/images/counter-offer.png',
    },
    {
      word: 'MUTUAL',
      partOfSpeech: 'adjective',
      definition: "Shared equally by both sides. 'Mutual benefit' means both parties gain. Using 'mutual' language in negotiation signals that you are aiming for a partnership, not a transaction: 'I want to find something that's mutually workable.'",
      example: "Riley said: My goal in this conversation is to find something that's mutually beneficial — I want you to feel confident that you're getting fair value, and I want to be able to deliver the full service your team needs.",
      imageSlug: '/images/mutual.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WOULD YOU BE OPEN TO...?',
      definition: "The core negotiation phrase of this lesson. It is soft, non-threatening, and collaborative — it invites the other party to consider an alternative without pressure. Always follow 'Would you be open to' with a noun or an '-ing' form.",
      example: "Riley said: I understand the budget constraint. Would you be open to a 12-month contract in exchange for a lower monthly rate? That's the one adjustment that gives me the room to bring the number down significantly.",
      imageSlug: '/images/would-you-be-open-to.png',
    },
    {
      phrase: 'I UNDERSTAND YOUR POSITION. HOWEVER, FROM OUR SIDE...',
      definition: "The professional way to acknowledge the other party's perspective before presenting your own. 'I understand your position' shows respect and empathy. 'However, from our side' introduces your constraints without being defensive.",
      example: "Riley said: I understand your position, Marcus — $35 is above where you budgeted, and that's a real constraint. However, from our side, that rate reflects the full package, including dedicated onboarding and the native Salesforce integration. Those aren't extras — they're built in.",
      imageSlug: '/images/i-understand-your-position-however-from-our-side.png',
    },
    {
      phrase: 'IF WE WERE ABLE TO [X], WOULD YOU BE ABLE TO [Y]?',
      definition: "The conditional negotiation structure — a formal, professional way to propose an exchange. Using 'were able to' (second conditional) makes the offer sound considered, not impulsive. Always link your concession to a commitment from the other side.",
      example: "Riley said: If we were able to adjust the onboarding from three months to one month, would you be able to commit at the $28 per user rate? I can't get there without some adjustment on the scope — but I think this trade-off could work for both of us.",
      imageSlug: '/images/if-we-were-able-to-x-would-you-be-able-to-y.png',
    },
    {
      phrase: "THAT'S AT THE VERY EDGE OF WHAT WE CAN OFFER",
      definition: "A phrase that signals you have reached (or are near) your limit — without closing the door entirely. 'At the edge' is more professional than 'that's the minimum' and leaves room to explore other adjustments elsewhere in the deal.",
      example: 'Riley said: $28 per user is at the very edge of what we can offer for the full package. I can get there, but I need something in return — either a longer contract, a reduced onboarding scope, or both. What would be most workable for your side?',
      imageSlug: '/images/thats-at-the-very-edge-of-what-we-can-offer.png',
    },
    {
      phrase: "I THINK WE'RE CLOSE — LET'S SEE IF WE CAN FIND A MIDDLE GROUND",
      definition: "A collaborative phrase for the closing phase of a negotiation. It signals optimism without overpromising. 'Middle ground' is a fixed phrase for a compromise that works for both parties.",
      example: "Riley said: I think we're genuinely close here — the only real gap is the per-user rate. Let's see if we can find a middle ground on the onboarding scope that gets us to a number we can both accept. I don't want to lose this deal over a small gap.",
      imageSlug: '/images/i-think-were-close--lets-see-if-we-can-find-a-middle-ground.png',
    },
    {
      phrase: 'LET ME TAKE THAT BACK TO MY MANAGER AND COME BACK TO YOU',
      definition: "A professional phrase for buying time without saying no. It signals that you are taking the request seriously while getting internal alignment. Always give a specific timeframe when you say this — 'I'll come back to you by end of day tomorrow.'",
      example: "Riley said: $28 per user with standard onboarding and 60-day terms — let me take that back to my manager and come back to you. I want to make sure I can get this properly approved rather than make a commitment I can't honour. Can I have until end of day tomorrow?",
      imageSlug: '/images/let-me-take-that-back-to-my-manager-and-come-back-to-you.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, we want to move forward — but I need to be honest with you. The price is higher than what we budgeted for. We need to talk about the [[terms:the conditions of a deal — price, payment schedule, duration, scope]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I appreciate you being direct — that's exactly the right conversation to have. I want to find something that works for both of us. Can you tell me more about the gap? Is it the monthly rate, the total contract value, or the payment schedule?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Mainly the monthly rate per user. We budgeted for around $28 — your price is $35. That's a meaningful difference for a team our size.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I understand. $35 is our standard rate and it includes the full package — dedicated onboarding, priority support, and the native Salesforce integration. But I hear you on the gap. [[Would you be open to:the core phrase — a soft, non-threatening invitation to consider a different arrangement]] a 12-month contract in exchange for a reduced monthly rate?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What would that look like?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "If you commit to 12 months, I can bring the rate down to $30 per user. That's a meaningful reduction — and it gets you closer to your budget while giving us the certainty we need to offer that [[concession:something you give up in order to reach a deal, ideally in exchange for something in return]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's better, but we're still above the $28 target. Could we get there?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I understand your position. However, from our side, $28 per user with the full package — including three months of dedicated onboarding — is at the very edge of what we can offer. That said, I don't want to lose this deal over a small gap. [[If we were able to:the conditional negotiation structure — proposing an exchange professionally]] adjust the onboarding from three months to one, would you be able to commit at $28?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What would a one-month onboarding actually include?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "One month of dedicated onboarding still covers full setup, Salesforce integration, team training, and the first 30 days of check-ins. It's genuinely substantial — the difference is you'd have two fewer months of hand-holding, which most experienced teams don't end up needing anyway.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That could work. While we're at it — we typically pay on 60-day terms. Is that possible?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Our standard is 30 days. I think we're close — let's see if we can find a [[compromise:an agreement where both sides give something up to reach a middle ground]] on payment terms. Would you be open to 45 days? That's a [[mutual:shared equally by both sides — mutually beneficial]] adjustment I can likely get approved today without going back to my manager.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: '45 days works. So to confirm — $28 per user, 12-month contract, one month of onboarding, 45-day payment terms?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's the outline. I'll need internal sign-off on the $28 rate — but based on everything we've agreed, I'm confident I can make it work. Can I come back to you with formal confirmation by end of day tomorrow?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes — if you can confirm by tomorrow, we can move to contract.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Perfect. I'll take this back to my manager today and send you a written summary of the agreed [[terms:the conditions of the deal — price, payment, duration, scope]] this afternoon so you have it for your records. I'm genuinely pleased we found a way to make this work.",
    }
  ],

  matchingExercise: [
    {
        "word": "negotiate",
        "definition": "to discuss terms in order to reach an agreement that works for both sides"
    },
    {
        "word": "concession",
        "definition": "something you give up in order to reach a deal, ideally in exchange for something in return"
    },
    {
        "word": "flexibility",
        "definition": "the ability to adjust or change terms when needed — signals you are a fair partner"
    },
    {
        "word": "leverage",
        "definition": "an advantage that gives one side more negotiating power"
    },
    {
        "word": "compromise",
        "definition": "an agreement where both sides give something up to reach a middle ground"
    },
    {
        "word": "terms",
        "definition": "the conditions of an agreement — price, payment schedule, duration, and scope"
    },
    {
        "word": "counter-offer",
        "definition": "a response to an offer that proposes different conditions rather than accepting outright"
    },
    {
        "word": "mutual",
        "definition": "shared equally by both sides — a mutually beneficial deal is good for everyone"
    }
],
  fillBlankExercise: [
    {
        "before": "Would you be ",
        "after": " to a 12-month contract in exchange for a lower monthly rate?",
        "answer": "open"
    },
    {
        "before": "If we were able to adjust the onboarding scope, would you be ",
        "after": " to commit at $28 per user?",
        "answer": "able"
    },
    {
        "before": "$28 per user is at the very ",
        "after": " of what we can offer for the full package.",
        "answer": "edge"
    },
    {
        "before": "I think we're close — let's see if we can find a middle ",
        "after": " on the payment terms.",
        "answer": "ground"
    },
    {
        "before": "Let me take that back to my manager and ",
        "after": " back to you by end of day tomorrow.",
        "answer": "come"
    },
    {
        "before": "Our goal is to find something ",
        "after": " beneficial — a deal that works for both of us, not just one side.",
        "answer": "mutually"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is Marcus's main concern at the start of the negotiation?",
        "options": [
            "The contract duration is too long",
            "The monthly rate per user is above budget",
            "The onboarding package is insufficient"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley offer in exchange for the 12-month contract commitment?",
        "options": [
            "A free onboarding month",
            "A reduction in the monthly rate from $35 to $30",
            "60-day payment terms"
        ],
        "correctIndex": 1
    },
    {
        "question": "What adjustment does Riley propose to reach the $28 per user rate?",
        "options": [
            "Removing the Salesforce integration from the package",
            "Shortening the onboarding from three months to one month",
            "Reducing the contract to six months"
        ],
        "correctIndex": 1
    },
    {
        "question": "What payment terms does Riley propose as a compromise?",
        "options": [
            "30 days",
            "60 days",
            "45 days"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Have you ever negotiated on price or terms at work — with a supplier, a client, or internally? How did it go? What worked well?",
        "What do you think is more important in a negotiation — being firm, being flexible, or something else? Why?",
        "Think about a negotiation that went well for you. What made the difference between reaching a deal and walking away?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Would you be open to a 12-month contract in exchange _____ a lower monthly rate?",
            "options": [
                "to",
                "for",
                "with"
            ],
            "correctIndex": 1,
            "explanation": "'In exchange for' is the fixed phrase — always 'for', never 'to' or 'with'. 'In exchange for' means: you give me this, and I'll give you that. 'In exchange to' is not correct English. Think of it like 'thank you for' or 'responsible for' — 'for' is the correct preposition after 'exchange' in all contexts."
        },
        {
            "sentence": "If we were able to adjust the onboarding scope, would you be able to _____ at $28 per user?",
            "options": [
                "committing",
                "commit",
                "committed"
            ],
            "correctIndex": 1,
            "explanation": "After 'be able to', always use the base form of the verb — 'commit', not 'committing' or 'committed'. This applies to all modal + able to structures: 'would be able to commit', 'might be able to offer', 'should be able to confirm'. The base form always follows 'to' in an infinitive."
        },
        {
            "sentence": "$28 per user is at the very _____ of what we can offer for the full package.",
            "options": [
                "limit",
                "edge",
                "end"
            ],
            "correctIndex": 1,
            "explanation": "'At the very edge' is the fixed phrase used to signal you are near (but not quite at) your limit in a negotiation. 'At the limit' is too blunt and sounds final. 'At the end' doesn't convey the same meaning. 'At the edge' suggests you are close to the boundary — there may be a small amount of room, but not much."
        },
        {
            "sentence": "I think we're close — let's see if we can find a middle _____ on the payment terms.",
            "options": [
                "point",
                "ground",
                "way"
            ],
            "correctIndex": 1,
            "explanation": "'Find a middle ground' is the fixed phrase for reaching a compromise in English. 'Middle point' and 'middle way' are not standard. 'Middle ground' is a metaphor — both sides move toward the centre. It's one of the most common idioms in negotiation language: 'Is there a middle ground we can find here?'"
        },
        {
            "sentence": "Let me take that back to my manager and _____ back to you by tomorrow.",
            "options": [
                "come",
                "get",
                "go"
            ],
            "correctIndex": 0,
            "explanation": "'Come back to you' is the fixed phrase for returning with an answer after checking internally. 'Get back to you' is also correct and equally common in professional English — both mean the same thing. 'Go back to you' is not standard. In a negotiation, 'I'll come back to you' or 'I'll get back to you' signals that you are taking the request seriously and will follow up."
        },
        {
            "sentence": "Our goal is to find something _____ beneficial — a deal that works for both of us.",
            "options": [
                "mutually",
                "jointly",
                "equally"
            ],
            "correctIndex": 0,
            "explanation": "'Mutually beneficial' is the fixed professional phrase for an agreement that advantages both sides equally. 'Jointly beneficial' is not standard. 'Equally beneficial' is possible but less common in negotiation contexts. 'Mutually' is the adverb that pairs with 'beneficial', 'agreed', 'convenient', and 'exclusive' — all common in B2B negotiation and contract language."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "The price is higher than we budgeted for. We need to discuss this.",
                "options": [
                    "I understand — our price is always negotiable, so let me know what you need.",
                    "I appreciate you raising this directly. Can you tell me more about the gap — is it the per-user rate, the total contract value, or the payment terms? That will help me understand where we have flexibility.",
                    "Our pricing reflects the quality of the product — I don't think we can reduce it significantly."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most professional response — it acknowledges the concern, thanks the buyer for raising it directly, and then asks a diagnostic question to understand where the flexibility might lie. This keeps the negotiation open. Option A agrees to negotiate before understanding the issue — which is a weak position. Option C is defensive and closes the door on the conversation before it starts."
            },
            {
                "customerLine": "We can do $28 per user — but we need the full onboarding package included at that price.",
                "options": [
                    "I understand your position. However, $28 with the full package is at the very edge of what we can offer. If we were able to adjust the onboarding to one month, would you be able to commit at $28? That's the trade-off that makes the number possible.",
                    "I'm sorry, but $28 with full onboarding is simply not possible — I can't go below $30 for the full package.",
                    "Let me see what I can do — I'll try to get $28 approved with the full package and come back to you."
                ],
                "correctIndex": 0,
                "explanation": "Option A is exactly right — it acknowledges the position, signals the constraint professionally ('at the very edge'), and then proposes a conditional trade-off. This keeps the negotiation moving toward a deal. Option B refuses without offering an alternative — this often kills the deal. Option C promises to get $28 with the full package, which overconcedes before checking internally. Never promise what you haven't confirmed."
            },
            {
                "customerLine": "We're very close — can we just round down to $27 and shake on it?",
                "options": [
                    "Sure — $27 it is. I'm glad we could make it work.",
                    "I think we're genuinely close, and I want to get this done. Let me take the $27 back to my manager — can I come back to you by end of day today? I don't want to commit to a number I haven't confirmed internally.",
                    "I'm afraid $27 is below the minimum I can authorise. The best I can do is $28 — that's the final offer."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most professional response in this situation — it validates the buyer's desire to close while protecting your credibility by not agreeing to a number you haven't confirmed. Option A agrees immediately, which signals that the original $28 offer had room in it — and makes the buyer wonder how low you could actually go. Option C is too blunt and final — 'that's the final offer' can feel confrontational and may restart the negotiation unnecessarily."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "I understand there's a gap. Would you be open to a 12-month contract in exchange to a lower monthly rate?"
            },
            {
                "speaker": "Marcus",
                "text": "That sounds interesting. What would the rate be?"
            },
            {
                "speaker": "Riley",
                "text": "If you commit to 12 months, I can bring the rate down to $30 per user."
            },
            {
                "speaker": "Marcus",
                "text": "That's better. But could we also adjust the payment terms?"
            },
            {
                "speaker": "Riley",
                "text": "Our standard is 30 days. But I think we're close — let's try to found a middle ground."
            },
            {
                "speaker": "Riley",
                "text": "I'll need to get internal approval — I'll come back to you with a final confirm by tomorrow."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "in exchange to",
                "correction": "in exchange for",
                "explanation": "'In exchange for' is the fixed phrase — always 'for', never 'to'. 'In exchange to' is a very common mistake because learners confuse it with other structures like 'in addition to' or 'in contrast to'. But 'exchange' always pairs with 'for': 'in exchange for a discount', 'in exchange for a longer contract', 'in exchange for early payment'. Think: you give me X for Y — the 'for' links what you receive."
            },
            {
                "lineIndex": 4,
                "incorrectText": "to found",
                "correction": "to find",
                "explanation": "'Found' is the past tense of 'find' — not the infinitive. After 'to' (used as part of an infinitive), always use the base form: 'to find', not 'to found'. 'To found' means something completely different — 'to found a company' means to establish or start a company. 'Let's try to find a middle ground' is the correct structure: try + to + base verb."
            },
            {
                "lineIndex": 5,
                "incorrectText": "final confirm",
                "correction": "final confirmation",
                "explanation": "'Confirm' is a verb — 'to confirm something'. 'Confirmation' is the noun. After 'a final', you need the noun form: 'a final confirmation', 'a final decision', 'a final agreement'. 'A final confirm' is not grammatically possible in English. Remember: 'confirm' (verb) / 'confirmation' (noun) — like 'decide' / 'decision', 'approve' / 'approval', 'commit' / 'commitment'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "The price is above what we budgeted. Can we discuss the terms?",
                "salespersonStart": "Of course — I appreciate you being direct. Would you be open to...",
                "suggestedCompletion": "a 12-month contract in exchange for a lower monthly rate? If you can commit to 12 months, I can bring the per-user rate down significantly. That's the adjustment that creates the most room on the price."
            },
            {
                "customerLine": "We can get to $28, but we need the full onboarding package included.",
                "salespersonStart": "I understand your position. However, from our side, $28 with full onboarding is at the very edge of what we can offer. If we were able to...",
                "suggestedCompletion": "adjust the onboarding to one month instead of three, would you be able to commit at $28? One month still covers everything you need for setup and training — and it's the trade-off that makes the number work for both of us."
            },
            {
                "customerLine": "Is there any flexibility on the payment terms? We usually pay on 60 days.",
                "salespersonStart": "Our standard is 30 days. But I think we're close — would you be open to...",
                "suggestedCompletion": "45 days as a compromise? That's a middle ground I can likely get approved today without going back to my manager. 45-day terms, $28 per user, 12-month contract, and one month of onboarding — I think that's a deal we can both be happy with."
            }
        ]
    }
},
};
