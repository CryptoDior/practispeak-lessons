import { Lesson } from '@/types/lesson';

export const negotiatingPriceProfessionally: Lesson = {
  slug: 'negotiating-price-professionally',
  title: 'Negotiating Price Professionally',
  subtitle: 'Concessions, trade-offs, and conditions — how to move without giving things away',
  level: 'C1-C2',
  description: "Price negotiation is not about who blinks first. It is about understanding what each side actually needs, structuring exchanges that are conditional rather than free, and reaching an agreement both parties can defend internally. This lesson teaches the language for making concessions without losing value, testing the other side's flexibility, and holding a position without damaging the relationship.",
  heroImage: '/images/negotiating-price-professionally-hero.png',

  vocabulary: [
    {
      word: 'CONCESSION',
      partOfSpeech: 'noun',
      definition: 'Something given up in order to move a negotiation forward. The rule in professional negotiation is that concessions must be traded, never given away — a concession without a return sets a precedent and signals that the original position was not serious.',
      example: 'Marcus asked for a 20% discount. Riley was willing to make a concession on price — but only if Marcus was willing to move on the contract length. A concession for nothing is not a negotiation; it is a reduction.',
      imageSlug: '/images/concession.png',
    },
    {
      word: 'TRADE-OFF',
      partOfSpeech: 'noun',
      definition: 'An exchange in which gaining something on one side requires giving up something on another. Trade-offs give both parties a way to move without losing face — because each side gets something, and each side gives something.',
      example: 'Riley offered a trade-off: a lower unit price in exchange for a twelve-month commitment instead of six. Marcus got the number he needed for his budget. Riley got the contract length that made the reduction financially sensible.',
      imageSlug: '/images/trade-off.png',
    },
    {
      word: 'ANCHOR',
      partOfSpeech: 'verb',
      definition: 'To set the first number or term in a negotiation, establishing the reference point that all later discussion is measured against. Whoever anchors first controls the frame — which is why experienced negotiators anchor high before the other side can anchor first.',
      example: 'Before Marcus could name a number, Riley anchored with the full annual contract value. When Marcus pushed back, the conversation was about how far to move from her number — not how far to move from his.',
      imageSlug: '/images/anchor.png',
    },
    {
      word: 'PRECEDENT',
      partOfSpeech: 'noun',
      definition: 'An earlier decision or action that becomes the standard or expectation for future situations. In price negotiation, giving a concession without conditions sets a precedent — the next time this prospect, or any prospect, opens a negotiation, they expect the same terms as a starting point.',
      example: 'Riley was careful not to set a precedent with Marcus. A 20% discount with no conditions would mean every renewal conversation starting from that lower number. She structured the concession with conditions precisely to avoid this.',
      imageSlug: '/images/precedent.png',
    },
    {
      word: 'SCOPE',
      partOfSpeech: 'noun',
      definition: 'The range of what is included in an agreement — how many users, how many features, how much support, how long the term. Adjusting scope is often a more sustainable negotiation move than adjusting price, because it changes what is being bought rather than what it costs.',
      example: 'When Marcus pushed on price, Riley shifted the conversation to scope. Could they start with a smaller team and expand in Q2? That gave Marcus a lower entry cost while preserving the unit price — and created a natural expansion conversation for later.',
      imageSlug: '/images/scope.png',
    },
    {
      word: 'THRESHOLD',
      partOfSpeech: 'noun',
      definition: "The point beyond which a party cannot or will not go — a floor on price, a ceiling on concessions, or a boundary on terms. Understanding your own threshold before entering a negotiation is essential. Understanding the other side's threshold is what makes a deal possible.",
      example: 'Riley knew her threshold: below a certain unit price, the account was not profitable. She did not share that number, but she used it to structure every offer she made — nothing she proposed crossed her own floor, even when the conversation got uncomfortable.',
      imageSlug: '/images/threshold.png',
    },
    {
      word: 'RECIPROCAL',
      partOfSpeech: 'adjective',
      definition: 'Given or done in return for something equivalent. A reciprocal concession is one made in response to a move from the other side — it keeps both parties invested and signals that the negotiation is a two-way process, not a series of demands.',
      example: 'Riley made a reciprocal concession: when Marcus agreed to a twelve-month commitment, she moved on implementation fees. The movement was in response to his movement — which made it feel earned rather than given, and kept both sides at the table.',
      imageSlug: '/images/reciprocal.png',
    },
    {
      word: 'TERMS',
      partOfSpeech: 'noun',
      definition: 'The specific conditions and details of an agreement — payment schedule, contract length, support level, renewal clauses, and so on. Separating price from terms is a key negotiation move: often what looks like a price disagreement is actually a disagreement about terms.',
      example: 'Marcus said the price was too high. Riley asked him to separate the price from the terms: if the payment were spread across the year rather than billed upfront, would the monthly figure feel more manageable? It was the same total — but the terms changed the conversation.',
      imageSlug: '/images/terms.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'IF YOU CAN MOVE ON X, WE CAN MOVE ON Y',
      definition: 'The structural language of conditional negotiation. Nothing is agreed until everything is agreed — this phrase makes every concession explicitly conditional on a move from the other side.',
      example: "'If you can move to a twelve-month term, we can move on the unit price. I am not able to give you both — but I can give you one if you can give me the other.'",
      imageSlug: '/images/if-you-can-move-on-x-we-can-move-on-y.png',
    },
    {
      phrase: 'WHAT ARE YOU ABLE TO MOVE ON',
      definition: "A probe that tests the other side's flexibility without revealing your own floor. Forces the other party to identify where they have room before you show your hand.",
      example: "'Before I respond to the pricing request, I want to understand the full picture. What are you able to move on from your side — contract length, payment terms, implementation timeline? That tells me where I have room to work.'",
      imageSlug: '/images/what-are-you-able-to-move-on.png',
    },
    {
      phrase: 'I CAN WORK WITH THAT — BUT ONLY IF',
      definition: "A conditional acceptance — signals that you are open to the other side's position, but makes your agreement explicitly dependent on a condition. Keeps flexibility visible without giving a free concession.",
      example: "'I can work with a reduced entry price — but only if we structure the contract so that the rate steps back up at renewal unless the volume targets are hit. I need something to anchor the discount to.'",
      imageSlug: '/images/i-can-work-with-that--but-only-if.png',
    },
    {
      phrase: "LET'S SEPARATE THE PRICE FROM THE TERMS",
      definition: 'A reframe used when price negotiation is stuck. Moves the conversation to contract structure, payment schedule, scope, or other levers — often revealing that the real disagreement is about terms, not the total number.',
      example: "'Let's separate the price from the terms for a moment. The annual figure is what it is — but if we talk about how it is structured, there may be more room than the headline number suggests. Monthly billing, phased implementation, a smaller initial scope?'",
      imageSlug: '/images/lets-separate-the-price-from-the-terms.png',
    },
    {
      phrase: "THAT'S AT THE EDGE OF WHAT I CAN DO",
      definition: 'Signals a threshold without making it personal, confrontational, or absolute. Keeps the door open while communicating that you are close to the limit — which invites the other side to move rather than simply saying no.',
      example: "'I want to find something that works for both of us — but what you are describing is at the edge of what I can do at this contract value. If we can bring in the volume commitment, I have a little more room. Without it, I am at the limit.'",
      imageSlug: '/images/thats-at-the-edge-of-what-i-can-do.png',
    },
    {
      phrase: 'WHAT WOULD MAKE THIS WORK FOR YOU',
      definition: 'An open probe that invites the other side to define what they actually need, rather than defending a position. Often reveals that what the prospect is asking for is different from what they actually need — and that there are creative solutions neither side has considered.',
      example: "'You've told me the price is a concern — I hear that. But before we talk numbers, help me understand: what would make this work for you? Is it the total cost, the cash flow timing, the risk of commitment, or something else? Because each of those has a different answer.'",
      imageSlug: '/images/what-would-make-this-work-for-you.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, I want to make this work — but I need to be honest with you. The number you have given me is 20% above what my CFO has approved. I need to find a way to close that gap.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I appreciate you being direct. Before I respond to the number — what are you able to move on from your side? Contract length, payment structure, implementation timeline? I want to understand the full picture before I start moving on price.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'We can commit to twelve months instead of six. And we could push the start date to February, which helps our cash flow. But the unit price still needs to come down.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Twelve months and a February start — that is meaningful movement. Let me show you what that unlocks. If you can commit to the twelve-month [[terms:the specific conditions and details of an agreement]], I can move on the unit price. I cannot do both — but the twelve months gives me the [[threshold:the point beyond which a party cannot go]] I need to justify a lower rate internally.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How much of a reduction are we talking?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Ten percent on the unit price, in exchange for twelve months and payment split across two invoices. That is at the edge of what I can do at this [[scope:the range of what is included in the agreement]] — I cannot get to 20% without changing what is in the contract.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Ten percent is not enough. My CFO anchored at 15 when she approved the budget. Can you get closer to that?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Let's [[anchor:to set the first reference point in a negotiation]] this differently. The 15% your CFO is working from — is that based on the annual total, or the monthly rate? Because there may be a way to get her to the monthly number she needs without me going below the rate I can sustain.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'She is looking at the monthly cost per user. That is the number she approved in the budget.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Then let's separate the price from the [[terms:the conditions and structure of an agreement]] for a moment. If I phase the implementation so that you start with 20 users in February and bring on the remaining 10 in May, your per-user cost for Q1 hits the number she budgeted — and you scale into the full cost once the product is embedded. Same annual total, different monthly picture.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is actually interesting. Would there be a [[precedent:a past decision that becomes the standard for future situations]] set here — would I be locked into this phased structure at renewal?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'No — renewal is priced on the full 30 users from day one at the standard rate. The phased structure is a [[concession:something given up to move a negotiation forward]] on implementation, not on pricing. I want to be transparent about that so there are no surprises at renewal.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I can work with that — but only if the May onboarding is included in the contract at no additional cost. I do not want a separate services fee for the second phase.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is a [[reciprocal:given in return for something equivalent]] move I can make — onboarding for the second cohort is included if the contract is signed before the end of the month. That gives me what I need on timing, and it gives you what you need on implementation cost. I think we have the shape of a deal here.',
    }
  ],

  matchingExercise: [
    {
        "word": "CONCESSION",
        "definition": "Something given up to move a negotiation forward — and it must always be traded, never given away"
    },
    {
        "word": "TRADE-OFF",
        "definition": "An exchange where gaining one thing requires giving up another — gives both sides a way to move without losing face"
    },
    {
        "word": "ANCHOR",
        "definition": "To set the first number in a negotiation, establishing the reference point all later discussion is measured against"
    },
    {
        "word": "PRECEDENT",
        "definition": "An earlier decision that becomes the standard for future situations — a risk when discounts are given without conditions"
    },
    {
        "word": "SCOPE",
        "definition": "The range of what is included in a deal — adjusting it is often more sustainable than adjusting price"
    },
    {
        "word": "THRESHOLD",
        "definition": "The point beyond which a party cannot or will not go — knowing yours before you negotiate is essential"
    },
    {
        "word": "RECIPROCAL",
        "definition": "Given in return for something equivalent — keeps both parties invested and signals a two-way process"
    },
    {
        "word": "TERMS",
        "definition": "The specific conditions of an agreement — payment structure, length, support level — often where the real flexibility lives"
    }
],
  fillBlankExercise: [
    {
        "before": "Marcus asked for 20% off. Riley made a",
        "after": "— but structured it as a trade: a lower unit price in exchange for a twelve-month commitment. A reduction with nothing in return was not something she was willing to do.",
        "answer": "concession"
    },
    {
        "before": "Riley offered a",
        "after": ": a lower per-unit price in exchange for a longer contract term. Marcus got the budget number he needed; Riley got the commitment length that made the reduction viable.",
        "answer": "trade-off"
    },
    {
        "before": "Before Marcus could name a number, Riley",
        "after": "with the full annual contract value. When he pushed back, the conversation was about how far to move from her number — not from his.",
        "answer": "anchored"
    },
    {
        "before": "Riley was careful not to set a",
        "after": "with this deal. A 20% discount with no conditions would mean every future negotiation starting from that lower number as the baseline.",
        "answer": "precedent"
    },
    {
        "before": "When price felt stuck, Riley shifted the conversation to",
        "after": ". Could Marcus start with 20 users and expand in May? That gave him a lower monthly cost without changing the unit price.",
        "answer": "scope"
    },
    {
        "before": "Riley knew her",
        "after": ": below a certain unit price, the account stopped being profitable. She did not share that number, but it shaped every offer she made in the negotiation.",
        "answer": "threshold"
    },
    {
        "before": "Riley made a",
        "after": "concession: when Marcus agreed to twelve months, she included onboarding for the second cohort at no cost. His movement unlocked her movement.",
        "answer": "reciprocal"
    },
    {
        "before": "Marcus's CFO was looking at the monthly cost per user, not the annual total. Riley suggested separating the price from the",
        "after": "— a phased start could get the monthly number to the approved budget without changing the annual rate.",
        "answer": "terms"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley ask 'what are you able to move on from your side?' before responding to Marcus's discount request?",
        "options": [
            "To delay the conversation and avoid giving an answer",
            "To discover which terms Marcus has flexibility on before showing her own position — whoever reveals their floor first has less leverage",
            "To signal that she is not willing to negotiate on price at all",
            "To understand Marcus's budget so she can propose a lower price"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the risk of making a concession without attaching a condition to it?",
        "options": [
            "The prospect will feel uncomfortable and withdraw from the negotiation",
            "It signals that the original price was not serious, and it sets a precedent — the next negotiation starts from the discounted number as the baseline",
            "It reduces the value of the product in the prospect's eyes permanently",
            "It creates a legal obligation to offer the same price to all future customers"
        ],
        "correctIndex": 1
    },
    {
        "question": "When Riley says 'let's separate the price from the terms,' what is she doing?",
        "options": [
            "Refusing to discuss price until the contract terms are finalised",
            "Reframing a stuck price negotiation by exploring whether the real issue is cash flow, scope, or structure rather than the total number",
            "Signalling that she is about to offer a significant price reduction",
            "Suggesting that the legal and commercial teams handle negotiations separately"
        ],
        "correctIndex": 1
    },
    {
        "question": "Riley proposes phased implementation as a negotiation move. What makes this smarter than simply reducing the price?",
        "options": [
            "It is cheaper for Riley's company to deliver implementation in two phases",
            "It avoids changing the unit price — the annual total stays the same, but the monthly cost in Q1 hits the number the CFO approved, preserving the rate structure at renewal",
            "It gives Marcus more time to evaluate the product before committing to full deployment",
            "It allows Riley to avoid setting a precedent because the phased structure is not in writing"
        ],
        "correctIndex": 1
    },
    {
        "question": "Marcus asks whether the phased structure sets a precedent for renewal. What does this question reveal about Marcus — and how does Riley handle it?",
        "options": [
            "It reveals that Marcus is planning to cancel before renewal; Riley reassures him by offering the same terms at renewal",
            "It reveals that Marcus is thinking beyond the current deal; Riley is transparent — the phased structure is a concession on implementation, not on pricing, and renewal reverts to the standard rate",
            "It reveals that Marcus's CFO is concerned about the contract language; Riley suggests involving legal to clarify",
            "It reveals that Marcus does not understand the difference between price and terms; Riley explains the distinction patiently"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'anchoring' mean in a price negotiation — and why does Riley do it before Marcus can?",
        "options": [
            "Anchoring means fixing the contract start date before discussing price — Riley does this to control the timeline",
            "Anchoring means setting the first number on the table; whoever anchors first controls the reference point — all movement is measured against that number, not against what the other side had in mind",
            "Anchoring means committing to a price in writing before the meeting so the prospect cannot negotiate",
            "Anchoring means referencing competitor pricing to establish a market benchmark"
        ],
        "correctIndex": 1
    },
    {
        "question": "Riley says she will include onboarding for the second cohort 'if the contract is signed before the end of the month.' What type of move is this?",
        "options": [
            "A deadline tactic designed to pressure Marcus into signing before he is ready",
            "A reciprocal concession with a time condition — Marcus gets something he needs, and Riley gets what she needs (timing), making the movement feel earned by both sides",
            "A scope reduction disguised as a concession — Riley is removing implementation from the second phase to lower costs",
            "A standard closing technique used to create urgency without genuine conditions"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is 'I can work with that — but only if' more effective than simply agreeing to the prospect's request?",
        "options": [
            "It is more formal and therefore more appropriate in a C-suite negotiation",
            "It signals flexibility while keeping the agreement conditional — the prospect gets movement, but only in exchange for movement on their side, preventing free concessions",
            "It gives the salesperson time to check with their manager before committing",
            "It is a softer way to say no without damaging the relationship"
        ],
        "correctIndex": 1
    }
],
  pitchCorner: {
    "title": "Counter-Offer Email",
    "context": "Marcus has emailed Riley asking for a 20% discount to match what his CFO approved. Riley needs to respond with a structured counter-offer — not a simple no, not a free reduction, but a conditional proposal that moves both sides forward",
    "passage": [
        {
            "before": "Dear Marcus,\n\nThank you for being direct about the budget constraint — it is exactly the kind of clarity that helps me build a proposal worth taking to your CFO.\n\nI want to respond with a structured counter-offer rather than a straight reduction, because I think there is a way to get you to the number she approved without me setting a",
            "after": "that makes every future conversation start from a discounted baseline. Here is what I am proposing.",
            "answer": "precedent"
        },
        {
            "before": "On price: I can move to a 10% reduction on the unit rate if you can commit to a twelve-month",
            "after": "— payment in two invoices, start date in February, and the full user count active from month one. That is the",
            "answer": "terms"
        },
        {
            "before": "",
            "after": "I need to justify the reduction internally. A shorter contract or a single invoice does not give me the same room.",
            "answer": "threshold"
        },
        {
            "before": "On monthly cost: I want to flag something your CFO may not have considered. If we phase the",
            "after": "— 20 users from February, the remaining 10 from May — your Q1 monthly spend lands at exactly the figure she approved in the budget, without changing the unit price at all.",
            "answer": "scope"
        },
        {
            "before": "This is a",
            "after": "on implementation timing that I am prepared to make as part of this deal. The annual total does not change, and renewal is priced on the full 30-user licence at the standard rate from day one — I want to be transparent about that so there are no surprises.",
            "answer": "concession"
        },
        {
            "before": "If you can get me sign-off by Friday, I will include onboarding for the second cohort at no additional cost — a",
            "after": "move for your commitment on timing. I think this gives your CFO the monthly number she needs and gives me the structure I need to make it sustainable.\n\nWould a thirty-minute call tomorrow work to confirm the details?\n\nRiley",
            "answer": "reciprocal"
        }
    ]
},
  dealClinic: {
    "context": "Marcus has just said: 'I need you to come down to 15% below your quoted price — my CFO has approved the budget at that level and I cannot go above it.' Watch how two salespeople respond.",
    "transcript": [
        {
            "speaker": "Marcus",
            "speakerColor": "purple",
            "text": "Riley, I want to move forward — but I need the price at 15% below your quote. My CFO has set that as the approved budget and I have no room to go above it."
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "I understand that's a firm number for you. I can go to 12% — that's the most I'm authorised to discount without going back to my manager. If you can accept 12%, I think we can close this today."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Response to discount request",
            "verdict": {
                "isGood": false,
                "explanation": "Weak. Salesperson A immediately counters with a number — 12% — with no conditions attached. This is a concession given for free. It signals that the original price had a 12% cushion built in, which damages credibility and invites Marcus to push for the remaining 3%. There is also no probe: Salesperson A does not know whether the CFO's budget is genuinely fixed or whether there are terms Marcus can move on. The move is reactive, unconditional, and leaves value on the table."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "I hear the constraint — and I want to find a way to make this work. Before I respond to the number, can I ask: what is the CFO looking at when she says the budget is set at 15% below? Is she looking at the annual total, the monthly per-user cost, or the total cost of the first year including implementation?"
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson B — Response to discount request",
            "verdict": {
                "isGood": true,
                "explanation": "Strong. Salesperson B probes before moving. The question is intelligent — CFOs often set budgets against a specific metric, and that metric may not be the annual total. If the CFO is looking at monthly per-user cost, there may be scope or payment structure moves that get her to the right number without touching the unit rate. Salesperson B has not conceded anything yet, but has demonstrated that they understand the other side's world — which builds trust and positions the next move as collaborative rather than defensive."
            }
        },
        {
            "speaker": "Marcus",
            "speakerColor": "purple",
            "text": "She's looking at the monthly per-user cost. That's the line in her budget. The annual total is less of an issue — it's the monthly number she's approved."
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "Got it. Well, if I drop to 12% on the unit price, that should get close to the monthly number she has in mind. I can't quite get to 15% without sign-off, but 12% is real movement."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Follow-up move",
            "verdict": {
                "isGood": false,
                "explanation": "Still weak. Even with the new information, Salesperson A defaults to moving on price — and still with no conditions. They now know the CFO is looking at monthly per-user cost, which opens the door to a scope or phasing solution, but they ignored it. The 12% offer is still unconditional. And telling Marcus 'I can't quite get to 15% without sign-off' is an invitation to ask for sign-off — which Marcus will almost certainly do."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "That is useful — because it means the unit price is not necessarily the only lever. If we phase the implementation so that you start with 20 users in February and bring on the remaining 10 in May, your monthly per-user cost in Q1 lands at the number your CFO has approved — without me touching the unit rate at all. Same annual total. Different monthly picture in Q1."
        },
        {
            "speaker": "Marcus",
            "speakerColor": "purple",
            "text": "That could work. But I would need the May onboarding included in the contract — I can't have a separate services line item showing up later."
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "I can include the May onboarding at no cost — if the contract is signed by the end of this month. That is a reciprocal move: you get the implementation included, I get the timing I need to hold these terms. If we can both move on those two things, I think we have a deal.",
            "verdict": {
                "isGood": true,
                "explanation": "Strong close. Salesperson B found a solution that did not require moving on unit price — which protects the rate at renewal and avoids setting a precedent. The phased scope move got Marcus's CFO to her monthly number without a discount. The onboarding inclusion was a reciprocal concession tied to a time condition — not a free giveaway. Every movement was conditional and structured. Compare this to Salesperson A, who gave 12% away with nothing attached and still didn't solve the problem."
            }
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. For each negotiation scenario, choose the response that best demonstrates professional price negotiation. Discuss why before clicking.",
        "items": [
            {
                "customerLine": "A procurement manager says: 'Your competitor quoted us 18% below your price. Can you match it?'",
                "options": [
                    "Say: 'I can't match that exactly, but I can come down 12% if we close this week.'",
                    "Say: 'Before I respond to that number — can I ask what was included in their quote? I want to make sure we are comparing the same scope, support level, and implementation. If the numbers are truly equivalent, that is a different conversation than if they are structured differently.'",
                    "Say: 'Our pricing reflects the value we deliver — I'm confident you'll see a better return with us, even at our full price.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A immediately moves on price with no conditions — and 'if we close this week' is a weak condition that the prospect can ignore. C refuses to engage with the price question at all, which is defensive and unhelpful. B probes the comparison before conceding anything — because competitor quotes rarely include the same scope, and the probe often reveals that the comparison is not apples-to-apples. This reframes the conversation without moving on price."
            },
            {
                "customerLine": "A CFO says: 'We can do the deal, but I need net 60 payment terms instead of your standard net 30.'",
                "options": [
                    "Say: 'Net 60 is fine — we want to be flexible for good customers.'",
                    "Say: 'I can work with net 60 — but I would need something in return. If you can commit to the twelve-month term rather than six, I can extend the payment window. The longer commitment gives me what I need to absorb the cash flow difference.'",
                    "Say: 'Net 30 is a firm requirement — I'm not able to move on payment terms.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A gives net 60 for free — no conditions, no reciprocal movement. C refuses to engage entirely, which damages the relationship and may lose the deal over a terms issue that could have been resolved. B treats the payment term request as a trade opportunity: net 60 in exchange for a longer commitment. The CFO gets the cash flow they need; Riley gets the contract length that makes the extension viable."
            },
            {
                "customerLine": "A prospect says: 'Can you give me a better price if I sign today?'",
                "options": [
                    "Say: 'Yes — I can do 10% off if you sign today. That's the best I can offer.'",
                    "Say: 'Signing today is something I can work with. What would make it worth doing from your side — is there something you need that we have not resolved yet? Because if there is, let's resolve it now and close together.'",
                    "Say: 'Our pricing is already competitive — I don't think a same-day discount is something I can offer, but I appreciate your interest in moving quickly.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A gives 10% off with only a same-day condition — which is the weakest possible condition, since the prospect already said they want to sign today. C refuses to engage. B treats the urgency as information: the prospect wants to close today, which means they are ready. Before giving a concession, B probes whether there are unresolved issues that are holding the deal up — and resolves them without necessarily moving on price at all."
            },
            {
                "customerLine": "Partway through a negotiation, a prospect says: 'I feel like we keep going in circles on price. Can we just settle this?'",
                "options": [
                    "Say: 'You're right — let's split the difference and move on.'",
                    "Say: 'I agree — I think we are stuck on price because we have not yet resolved what is underneath it. Let's step back: what does this deal need to look like for you to feel confident taking it to your board? Once I know that, I can tell you what I can and cannot do.'",
                    "Say: 'I hear you — my final offer is X. If you can accept that, we have a deal. If not, I think we are at an impasse.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A splits the difference — which sounds fair but often means conceding without understanding why the negotiation is stuck. C draws a line that may not be necessary and creates an adversarial dynamic. B recognises that circular price conversations are usually a symptom of something unresolved beneath the surface — a concern about risk, commitment, internal politics, or something else. Getting to that thing is more valuable than splitting the difference."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Match each negotiation situation to the best technique for handling it. Discuss your reasoning before clicking.",
        "profiles": [
            {
                "name": "Situation 1",
                "description": "A prospect says the price is too high, but when you probe what 'too high' means, you discover their CFO is looking at monthly per-user cost — not the annual total. The annual total is actually within their budget.",
                "matchKey": "separate-terms"
            },
            {
                "name": "Situation 2",
                "description": "A prospect asks for a 15% discount. You are willing to move on price, but only if something changes on their side. You need a condition to attach before you make any movement.",
                "matchKey": "conditional-concession"
            },
            {
                "name": "Situation 3",
                "description": "A prospect opens the negotiation by naming a number that is far below your standard rate, before you have had a chance to introduce your own pricing.",
                "matchKey": "anchor"
            }
        ],
        "options": [
            {
                "key": "separate-terms",
                "label": "Separate price from terms",
                "description": "The prospect's real constraint is a metric (monthly cost, Q1 budget) rather than the total number. Move the conversation to scope, phasing, or payment structure — because there may be a way to hit their number without touching the unit price."
            },
            {
                "key": "conditional-concession",
                "label": "Make a conditional concession",
                "description": "'I can work with a reduced price — but only if you can commit to twelve months / pay in one invoice / sign by the end of the month.' Attach a condition of equal or greater value before moving. Nothing is agreed until everything is agreed."
            },
            {
                "key": "anchor",
                "label": "Anchor before they do",
                "description": "Introduce your full contract value or standard rate before the prospect can name their number. Once a number is on the table, all movement is measured against it — anchor high so that any concession still lands in a viable range."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started a negotiation response — finish the line using language from this lesson. Compare your completions before clicking for the suggested answer.",
        "items": [
            {
                "customerLine": "A prospect says: 'I need you to come down 20% — that's the budget.'",
                "salespersonStart": "Before I respond to that number — what are you able to",
                "suggestedCompletion": "move on from your side? Contract length, payment structure, start date? Because the answer changes what I can do on price. I do not want to move in isolation if there are other things we have not looked at yet."
            },
            {
                "customerLine": "A prospect asks for a discount and you are willing to move — but not for free.",
                "salespersonStart": "I can work with a lower unit price — but only if",
                "suggestedCompletion": "you can commit to a twelve-month term. The longer commitment gives me the threshold I need to justify the reduction internally. If you can give me that, I can give you the rate you are looking for."
            },
            {
                "customerLine": "Price negotiation has gone in circles and the prospect seems frustrated.",
                "salespersonStart": "Let's separate the price from the terms for a moment —",
                "suggestedCompletion": "because I think we keep landing on the same number without resolving what is underneath it. If I understand what the monthly figure needs to look like for your CFO, there may be a scope or phasing move that gets her there without me changing the unit rate. That is worth exploring before we split the difference on something neither of us is fully comfortable with."
            },
            {
                "customerLine": "A prospect says: 'Your competitor is offering 18% below your price.'",
                "salespersonStart": "I want to respond to that properly — but first, can I ask what was included in their quote?",
                "suggestedCompletion": "Because competitor quotes at that level often have different scope, support, or implementation assumptions. If the comparison is apples-to-apples — same users, same features, same onboarding — that is one conversation. If it is not, the price difference may not be what it looks like. I want to make sure we are negotiating the same thing before I move."
            }
        ]
    }
},
};
