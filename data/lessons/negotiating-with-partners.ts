import { Lesson } from '@/types/lesson';

export const negotiatingWithPartners: Lesson = {
  slug: 'negotiating-with-partners',
  title: 'Negotiating with Partners',
  subtitle: 'How to use commercial negotiation language to reach agreements that work for both sides — without giving away more than you need to',
  level: 'B1-B2',
  description: "Whether you're negotiating a media partnership, an agency retainer, a co-marketing agreement, or a vendor contract, the ability to use precise commercial language makes you a stronger and more confident negotiator. This lesson teaches you the key vocabulary and phrases of business negotiation — leverage, concessions, counter-offers, and mutual benefit — and puts them to work in a simulated partner negotiation role-play. The goal is not to win at any cost, but to reach a deal that both sides can commit to.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-hero.png',

  vocabulary: [
    {
      word: 'LEVERAGE',
      partOfSpeech: 'noun',
      definition: 'Something that gives you an advantage when you negotiate.',
      example: 'A better offer from another company gives us leverage.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-leverage.png',
    },
    {
      word: 'CONCESSION',
      partOfSpeech: 'noun',
      definition: 'Something you agree to give up to help reach a deal.',
      example: 'We made one concession: free delivery.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-concession.png',
    },
    {
      word: 'COUNTER-OFFER',
      partOfSpeech: 'noun',
      definition: 'A new offer you make after hearing the other side\'s offer.',
      example: 'They asked for £10,000, so we made a counter-offer of £8,000.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-counter-offer.png',
    },
    {
      word: 'MUTUAL BENEFIT',
      partOfSpeech: 'noun',
      definition: 'A result that is good for both sides.',
      example: 'This partnership is a mutual benefit for both brands.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-mutual-benefit.png',
    },
    {
      word: 'TERMS',
      partOfSpeech: 'noun',
      definition: 'The conditions of an agreement.',
      example: 'We agreed on the terms: twelve months and monthly payments.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-terms.png',
    },
    {
      word: 'WALK AWAY POINT',
      partOfSpeech: 'noun',
      definition: 'The point where a deal is not good enough for you.',
      example: 'Our walk away point is £5,000 a month.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-walk-away-point.png',
    },
    {
      word: 'ANCHOR',
      partOfSpeech: 'noun',
      definition: 'The first number or offer that guides the rest of the talk.',
      example: 'Their first price was a high anchor.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-anchor.png',
    },
    {
      word: 'DEADLOCK',
      partOfSpeech: 'noun',
      definition: 'When neither side can agree and talks stop.',
      example: 'After two hours, the talks reached a deadlock.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-deadlock.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'I CAN MOVE ON THAT IF YOU CAN MOVE ON...',
      definition: 'A way to offer a change if the other side also changes something.',
      example: 'I can move on that if you can move on the start date.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-i-can-move-on-that-if-you-can-move-on.png',
      inAction: 'I can move on the delivery timeline if you can move on the payment terms — we need something to give on both sides.',
      register: 'Neutral / Negotiation — signals willingness to trade concessions without giving anything away for free. Used in face-to-face or video negotiation; more direct than appropriate for formal written contracts.',
      inContext: "The negotiation had been going in circles for an hour when Riley decided to make a move. I can move on the exclusivity period if you can move on the minimum commitment, she said. It was a conditional offer — she wasn't giving anything away for free, but she was opening a path forward that both sides could take.",
      visualExamples: [
        { brand: 'Apex Media', context: 'Media buying agency — supplier negotiation call', imageSlug: '/images/visual-examples/nwp-p1-apex.png', caption: 'I can move on the contract length if you can move on the monthly volume commitment — we are happy to sign 12 months if you drop the minimum spend from £20k to £12k.', aspectRatio: '16/9' },
        { brand: 'Relay', context: 'SaaS platform — reseller agreement meeting', imageSlug: '/images/visual-examples/nwp-p1-relay.png', caption: 'I can move on the margin if you can move on the exclusivity clause — we will give you 40% if you remove the requirement that we cannot sell direct in your region.', aspectRatio: '4/3' },
        { brand: 'Bloom', context: 'Supplements brand — retailer negotiation', imageSlug: '/images/visual-examples/nwp-p1-bloom.png', caption: 'I can move on the payment terms if you can move on the listing fee — net 60 is fine if you waive the £5,000 placement charge.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: "LET'S FIND SOMETHING THAT WORKS FOR BOTH OF US",
      definition: 'A way to bring the talk back to a shared goal.',
      example: 'We both want this deal, so let\'s find something that works for both of us.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-lets-find-something-that-works-for-both-of-us.png',
      inAction: "We've been debating this contract clause for 20 minutes — let's find something that works for both of us and move the conversation forward.",
      register: 'Neutral — collaborative in tone, used to reset a stalled negotiation. Appropriate in partnership and commercial negotiations where the long-term relationship matters as much as the immediate deal.',
      inContext: "Marcus could see that both sides were getting frustrated. Let's find something that works for both of us, he said, leaning forward. It wasn't a concession — it was a reframe. Instead of fighting over positions, he was inviting the other side to solve a shared problem. The room relaxed slightly and the conversation shifted.",
      visualExamples: [
        { brand: 'Kite', context: 'Travel app — distribution partnership call', imageSlug: '/images/visual-examples/nwp-p2-kite.png', caption: 'Let us find something that works for both of us — we need brand visibility in your app, you need revenue share. There is a deal here, it is just about finding the structure.', aspectRatio: '16/9' },
        { brand: 'Fieldwork', context: 'Research platform — agency partnership meeting', imageSlug: '/images/visual-examples/nwp-p2-fieldwork.png', caption: 'Let us find something that works for both of us — you need white-label rights, we need attribution. We can build both into the agreement if we are flexible on the revenue split.', aspectRatio: '4/3' },
        { brand: 'Crestview', context: 'Financial firm — co-marketing agreement', imageSlug: '/images/visual-examples/nwp-p2-crestview.png', caption: 'Let us find something that works for both of us — your client base is perfect for our product and we can generate referral fees that offset your client acquisition costs.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: "THAT'S NOT SOMETHING WE CAN AGREE TO, BUT WHAT WE COULD DO IS...",
      definition: 'A polite way to say no and offer another idea.',
      example: 'That\'s not something we can agree to, but what we could do is offer a discount.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-thats-not-something-we-can-agree-to-but-what-we-could-do-is.png',
      inAction: "That's not something we can agree to in this contract cycle, but what we could do is revisit the exclusivity clause at the 12-month review.",
      register: 'Formal / Negotiation — a professional soft refusal followed immediately by a constructive alternative. Keeps the negotiation moving forward without shutting down the relationship or sounding dismissive.',
      inContext: "Dana had prepared her alternative before going into the meeting. When the partner asked for 90-day payment terms, she was ready. That's not something we can agree to, but what we could do is offer 60 days with an early payment discount built in, she said. The partner considered it for a moment, then nodded.",
      visualExamples: [
        { brand: 'Paragon', context: 'Creative agency — client scope negotiation', imageSlug: '/images/visual-examples/nwp-p3-paragon.png', caption: 'That is not something we can agree to, but what we could do is offer two revision rounds instead of unlimited — it protects our margin without taking anything off the creative quality.', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'Project management SaaS — enterprise deal', imageSlug: '/images/visual-examples/nwp-p3-forge.png', caption: 'That is not something we can agree to, but what we could do is include a dedicated CSM instead of the custom SLA — it costs less and delivers more value to your team.', aspectRatio: '4/3' },
        { brand: 'Raft', context: 'Logistics SaaS — carrier partnership negotiation', imageSlug: '/images/visual-examples/nwp-p3-raft.png', caption: 'That is not something we can agree to, but what we could do is build in a rate review at 6 months instead of annually — gives you more flexibility without locking us into a loss-making structure.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'WHAT WOULD NEED TO HAPPEN FOR YOU TO ACCEPT...',
      definition: 'A question to find out what the other side needs to say yes.',
      example: 'What would need to happen for you to accept a two-year contract?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-what-would-need-to-happen-for-you-to-accept.png',
      inAction: 'What would need to happen for you to accept our standard payment terms — is it about cash flow timing or something else entirely?',
      register: "Neutral — an open-ended question used to understand the partner's underlying needs rather than their stated position. Builds insight and opens up possibilities that a direct counter-offer would miss.",
      inContext: "Marcus had a hunch the real issue wasn't the contract term itself. What would need to happen for you to accept our pricing structure? he asked. The question caught the partner off guard — they had expected pushback, not curiosity. What came next wasn't an objection; it was an explanation of a cash flow problem Marcus could actually help solve.",
      visualExamples: [
        { brand: 'Summit', context: 'Outdoor brand — retailer margin negotiation', imageSlug: '/images/visual-examples/nwp-p4-summit.png', caption: 'What would need to happen for you to accept 30% margin instead of 35%? We want to make this work — help us understand what is non-negotiable on your side.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'Wellness brand — influencer deal negotiation', imageSlug: '/images/visual-examples/nwp-p4-halo.png', caption: 'What would need to happen for you to accept a 3-post deal instead of 5? We love working with you — if it is a content creation cost issue, we can look at providing more assets.', aspectRatio: '4/3' },
        { brand: 'Scope Invest', context: 'Analytics SaaS — investor term sheet meeting', imageSlug: '/images/visual-examples/nwp-p4-scope-invest.png', caption: 'What would need to happen for you to accept a cap of 8x instead of 6x? We believe in the trajectory — tell us what would move the needle on the liquidation preference.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: 'I WANT TO BE TRANSPARENT ABOUT WHERE WE STAND',
      definition: 'A way to say you will be honest about your position.',
      example: 'I want to be transparent about where we stand: our budget is fixed.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-i-want-to-be-transparent-about-where-we-stand.png',
      inAction: "I want to be transparent about where we stand — we've had two other partners express interest in this slot, so we'll need a decision by Friday.",
      register: 'Neutral / Semi-formal — signals honest, direct communication in a negotiation. Sets a tone of trust while establishing a fact the other party needs to know. Appropriate in both verbal and written contexts.',
      inContext: "Riley had decided honesty was the best approach. I want to be transparent about where we stand, she said. The budget we have for this partnership is fixed — we're not going to be able to go above it. But we have flexibility on the delivery timeline and the scope of what's included. Let's see if we can build something that works within those parameters.",
      visualExamples: [
        { brand: 'Carve', context: 'Fintech startup — partnership negotiation call', imageSlug: '/images/visual-examples/nwp-p5-carve.png', caption: 'I want to be transparent about where we stand — we have two other conversations in progress and a decision deadline on Friday. I would rather you knew that than felt pressured.', aspectRatio: '16/9' },
        { brand: 'Opal', context: 'Sustainable fashion brand — supplier meeting', imageSlug: '/images/visual-examples/nwp-p5-opal.png', caption: 'I want to be transparent about where we stand — our Q4 budget has been cut by 30% and we need to renegotiate the production run. We want to keep the relationship but we need flexibility.', aspectRatio: '4/3' },
        { brand: 'Atlas', context: 'Media platform — content licensing deal', imageSlug: '/images/visual-examples/nwp-p5-atlas.png', caption: 'I want to be transparent about where we stand — our legal team flagged two clauses we cannot sign in the current form. I want to resolve this before it becomes a bigger issue.', aspectRatio: '1.91/1' },
      ],
    },
    {
      phrase: "WE'RE AT OUR LIMIT ON THAT ONE",
      definition: 'A way to say you cannot change something any more.',
      example: 'Sorry, we\'re at our limit on that one; the price can\'t go lower.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/negotiating-with-partners-were-at-our-limit-on-that-one.png',
      inAction: "We've moved significantly on the pricing already — we're at our limit on that one, but we can still talk about the service scope.",
      register: 'Neutral / Informal — used to signal a firm boundary without sounding aggressive or closing the conversation. Direct and final in tone, but leaves room for the discussion to continue on other points.',
      inContext: "Marcus had given ground on three separate clauses before reaching the line he couldn't cross. We're at our limit on that one, he said calmly. He didn't apologize or explain at length — he said it once and moved on. But let's look at what else might address your concern. Is the pricing the real issue, or is it about what you get for that price?",
      visualExamples: [
        { brand: 'Bloom Wild', context: 'Flower brand — packaging supplier deal', imageSlug: '/images/visual-examples/nwp-p6-bloom-wild.png', caption: 'We are at our limit on that one — we cannot go below £0.80 per unit without compromising the materials. If it is a budget issue, let us look at order volume instead.', aspectRatio: '16/9' },
        { brand: 'Morrow', context: 'Luxury skincare — co-branding negotiation', imageSlug: '/images/visual-examples/nwp-p6-morrow.png', caption: 'We are at our limit on that one — the brand equity guidelines do not allow co-branding below a certain tier. That is not negotiable. But the distribution agreement has room to move.', aspectRatio: '4/3' },
        { brand: 'Lens', context: 'SaaS platform — agency reseller deal', imageSlug: '/images/visual-examples/nwp-p6-lens.png', caption: 'We are at our limit on that one — 45% reseller margin is our floor and our ceiling. What we can do is offer co-funded marketing and priority support to sweeten the partnership.', aspectRatio: '1.91/1' },
      ],
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Thanks for making time today. Before we get into the specifics, I want to be transparent about where we stand. We're committed to making this partnership work — but the current proposal has a few terms we need to discuss.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Appreciate the directness. What are the main sticking points?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Three things: the price increase, the payment [[terms:the specific conditions of an agreement — payment schedule, contract length, scope, deliverables]], and the exclusivity clause. Let's take them one by one.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "On price — we've moved significantly from our original position. We're at 12% now, down from 20%. I'm not sure how much further we can go.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "I hear you. Here's what I can offer: I can move on the price if you can move on the contract length. Instead of a 12-month deal, we commit to 24 months. That gives you revenue certainty over a longer period — which I suspect is part of why the price increase was proposed in the first place.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'A 24-month commitment in exchange for holding the price at current levels?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "At a 5% increase, not zero — I'm not asking you to freeze it. But 5% over 24 months is a better deal for you than 12% over 12 months in terms of total contract value. That's the [[anchor:in negotiation, the first offer put on the table that shapes the range of the discussion]] I'm setting.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "That's interesting. Let me think about it. On payment terms — net-30 is non-negotiable for us. We have our own cash flow commitments to manage.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Net-30 is tight for us, but I understand the cash flow argument. What would need to happen for you to accept net-45? Is there a specific cost we could offer to offset that for you?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'If you could include the premium reporting add-on — which is normally billed separately — as part of the base package, I think we could look at net-45.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Including the reporting add-on is something we could consider — that's a [[concession:something you give up in a negotiation to move the deal forward]] we're willing to make if the payment terms move. Let me note that as a conditional trade.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Good. The last one — exclusivity. We can't offer full category exclusivity. We have two other clients in financial services.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "On the exclusivity clause, we're at our limit. Without at least sub-category exclusivity — so no direct competitors in the retail banking segment — the deal doesn't work for our stakeholders. That's a [[walk-away point:the point at which a deal is no longer acceptable]] for us.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Sub-category — so retail banking specifically, not all financial services?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Exactly. That's not something we'll trade on. But within that constraint, I think there's a deal here that works for both of us. Let's find something that creates [[mutual benefit:an outcome that creates value for both parties]] and we can close today.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Sub-category exclusivity in retail banking, net-45 with the reporting add-on, 5% price increase over a 24-month contract. I can take that back to my team today. I think we're close.",
    }
  ],

  matchingExercise: [
    {
        "word": "leverage",
        "definition": "anything that gives you an advantage in a negotiation — competing offers, volume, expertise, or timing"
    },
    {
        "word": "concession",
        "definition": "something you give up in a negotiation to move the deal forward or secure something you value more"
    },
    {
        "word": "counter-offer",
        "definition": "an offer made in response to the other party's proposal, modifying rather than accepting or rejecting terms"
    },
    {
        "word": "mutual benefit",
        "definition": "an outcome that creates genuine value for both parties in a negotiation"
    },
    {
        "word": "terms",
        "definition": "the specific conditions of an agreement — price, payment schedule, contract length, scope, exclusivity"
    },
    {
        "word": "walk-away point",
        "definition": "the point at which a deal is no longer acceptable and you are prepared to end the negotiation"
    },
    {
        "word": "anchor",
        "definition": "the first number or offer put on the table, which shapes the range of the whole negotiation"
    },
    {
        "word": "deadlock",
        "definition": "a situation where neither party can agree and no progress is being made"
    }
],
  fillBlankExercise: [
    {
        "before": "I can ",
        "after": " on the payment terms if you can move on the contract length — that's a fair trade.",
        "answer": "move"
    },
    {
        "before": "That's not something we can agree to, but what we ",
        "after": " do is accept a 9% increase with a 12-month rate lock.",
        "answer": "could"
    },
    {
        "before": "What would need to ",
        "after": " for you to accept a 24-month commitment instead of a 12-month one?",
        "answer": "happen"
    },
    {
        "before": "I want to be ",
        "after": " about where we stand — our budget was set before the market shift and we can't absorb a 20% increase.",
        "answer": "transparent"
    },
    {
        "before": "On the exclusivity clause, we're at our ",
        "after": " — without sub-category exclusivity in retail banking, the deal doesn't work for us.",
        "answer": "limit"
    },
    {
        "before": "Let's find something that creates ",
        "after": " — a deal where both sides get something meaningful and want to see it succeed.",
        "answer": "mutual benefit"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley propose in exchange for accepting a 5% price increase instead of 12%?",
        "options": [
            "A one-time upfront payment to secure the lower rate",
            "A 24-month contract commitment instead of 12 months",
            "A co-marketing agreement to promote the partner's platform"
        ],
        "correctIndex": 1
    },
    {
        "question": "What concession does Marcus accept in exchange for net-45 payment terms?",
        "options": [
            "A reduction in the contract length from 24 to 18 months",
            "An additional retargeting placement added to the base package",
            "Including the premium reporting add-on in the base package price"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Riley's walk-away point on the exclusivity clause?",
        "options": [
            "Full category exclusivity across all financial services",
            "Sub-category exclusivity in the retail banking segment specifically",
            "A 6-month exclusivity window before competitors can be onboarded"
        ],
        "correctIndex": 1
    },
    {
        "question": "At the end of the dialogue, what does Marcus say he will do?",
        "options": [
            "Sign the agreement immediately to close the deal today",
            "Take the proposed terms back to his team for approval",
            "Consult a lawyer before agreeing to the exclusivity clause"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Have you ever negotiated something at work — a budget, a contract, a deadline, a job offer? How did you prepare for it, and how did it go?",
        "Think about a negotiation where you felt you gave too much away. Looking back, what would you do differently? What leverage did you have that you didn't use?",
        "When someone says no to your proposal in a meeting, what do you usually do? Do you push back, offer an alternative, or move on? What do you think is the most effective approach?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "A skilled negotiator never makes a concession _____ — every concession should be conditional on receiving something in return.",
            "options": [
                "unilaterally",
                "unilateral",
                "unilateralness"
            ],
            "correctIndex": 0,
            "explanation": "'Unilaterally' is the adverb form — it modifies the verb 'makes', describing how the concession is made. 'Never makes a concession unilaterally' = never acts on one side only, without a trade. 'Unilateral' is an adjective: 'a unilateral concession' (used before a noun). 'Unilateralness' is not a standard English word. When modifying a verb (how something is done), use the adverb form ending in '-ly': 'acts unilaterally', 'decides unilaterally', 'makes concessions unilaterally'."
        },
        {
            "sentence": "If the other party is not willing _____ on the price, we should propose a different variable — contract length or payment terms.",
            "options": [
                "to move",
                "moving",
                "move"
            ],
            "correctIndex": 0,
            "explanation": "After 'willing', the infinitive with 'to' is required: 'willing to move'. This is a fixed pattern — 'willing' as an adjective is always followed by 'to + base verb': 'willing to negotiate', 'willing to agree', 'willing to move'. 'Willing moving' is not grammatical. 'Willing move' misses the 'to'. Compare with other adjectives that follow the same pattern: 'able to', 'ready to', 'likely to', 'prepared to'."
        },
        {
            "sentence": "The party who _____ the first anchor in a negotiation often ends up closer to their preferred outcome.",
            "options": [
                "sets",
                "set",
                "setting"
            ],
            "correctIndex": 0,
            "explanation": "'Sets' is the correct third-person singular present simple form — the subject 'the party' is singular. 'The party who sets' defines which party we're talking about (the one who sets the anchor). 'Set' (without -s) would be the plural form ('parties who set') or the past tense ('the party who set the anchor yesterday'). 'Setting' is a present participle — it cannot be the main verb in a relative clause without an auxiliary ('the party who is setting'). In present simple relative clauses, singular subjects take -s."
        },
        {
            "sentence": "When a negotiation reaches deadlock, the best approach is _____ a new variable into the discussion.",
            "options": [
                "to introduce",
                "introducing",
                "introduce"
            ],
            "correctIndex": 0,
            "explanation": "After 'the best approach is', the infinitive with 'to' is the most natural form in formal and professional English: 'the best approach is to introduce'. This is a predicate construction (subject + 'is' + complement): 'the best approach is to act', 'the solution is to reframe', 'the goal is to find'. 'Introducing' (gerund) is also grammatically possible ('the best approach is introducing a new variable') but is less common in formal business writing. 'Introduce' (base form without 'to') cannot follow 'is' in this structure."
        },
        {
            "sentence": "I'd like _____ where we stand before we discuss specific terms.",
            "options": [
                "to be transparent about",
                "being transparent about",
                "transparent about"
            ],
            "correctIndex": 0,
            "explanation": "'To be transparent about' is correct after 'I'd like' — the construction is 'would like + to + base verb'. 'I'd like to be transparent about where we stand' = I want to be honest about our position. 'I'd like being transparent' is not the standard pattern — 'would like' takes the infinitive with 'to', not the gerund ('-ing'). Compare: 'I like being transparent' (present habit — gerund) vs 'I'd like to be transparent' (specific wish now — infinitive). The distinction between 'like + -ing' (general preference) and 'would like + to' (specific desire) is a key grammar point."
        },
        {
            "sentence": "Without category exclusivity, the deal _____ make commercial sense for our stakeholders.",
            "options": [
                "doesn't",
                "don't",
                "isn't"
            ],
            "correctIndex": 0,
            "explanation": "'Doesn't' is correct — the subject 'the deal' is singular, and 'make' is the base form after the auxiliary 'does'. The negative of 'the deal makes sense' is 'the deal doesn't make sense'. 'Don't' (plural) would be used with a plural subject: 'the terms don't make sense'. 'Isn't make' is ungrammatical — 'isn't' is followed by a noun, adjective, or present participle, not a base verb. The structure for present simple negative: subject + doesn't/don't + base verb."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the partner or colleague says. Choose the best professional response.",
        "items": [
            {
                "customerLine": "We really can't go below a 15% price increase. That's our final number.",
                "options": [
                    "That's not something we can accept at all. We'll need to look at other partners.",
                    "I understand that's a significant position for you. Before we call this final, I want to understand what's driving the 15% — is it cost pressure on your side, a margin requirement, or something else? If I understand the reason, we may be able to find a different way to meet that need without a price increase of that magnitude.",
                    "Okay — if that's your final number, we'll need to take some scope out of the agreement to stay within our budget."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the professional response — it acknowledges the position without accepting it, and then uses a diagnostic question to understand the interest behind the position. The most powerful negotiation tool is understanding why the other party wants something, not just what they want. If the 15% is driven by a specific business need, there may be a way to meet that need differently. Option A is too aggressive and closes the conversation. Option C concedes too quickly without trying to understand the situation."
            },
            {
                "customerLine": "We're offering you a very competitive rate. Other clients pay 30% more for the same package.",
                "options": [
                    "That's useful context, thank you. Our decision isn't based on what other clients pay — it's based on the value this package delivers to our specific goals and what our budget allows. We're happy to pay a fair price for genuine value. Can you help us understand what the package delivers that justifies this rate for our situation specifically?",
                    "If other clients are paying 30% more, then our current rate is already a great deal. We shouldn't be asking for a discount.",
                    "We'd love to see the evidence for that — can you share a rate card showing what other clients pay?"
                ],
                "correctIndex": 0,
                "explanation": "Option A is the right answer — it politely sets aside the irrelevant comparison (what others pay has no bearing on your budget or your value calculation), redirects to the relevant question (what does this deliver for us?), and signals you're willing to pay for proven value. This is how to handle anchoring attempts by the other party. Option B accepts the other party's frame uncritically. Option C is confrontational and asks for competitive pricing data that the partner is very unlikely to share — it makes the atmosphere adversarial without gaining anything useful."
            },
            {
                "customerLine": "We've been going back and forth on this for an hour and we're not getting anywhere. Maybe we should take a break.",
                "options": [
                    "A break is a good idea. But before we pause, can I suggest we take stock of where we've actually landed? We've agreed on contract length and payment terms — the only open issue is the exclusivity clause. When we come back, let's focus specifically on that and see if we can find a sub-category solution that works for both sides.",
                    "Yes, let's take a break. Sometimes it helps to step away and come back fresh.",
                    "I don't think a break is helpful right now — we need to close this today. Let's keep going."
                ],
                "correctIndex": 0,
                "explanation": "Option A is the best response — it agrees to the break (which is fine), but uses the moment to reframe the situation constructively. By naming what has already been agreed and isolating the remaining issue, it turns what feels like deadlock into a manageable single-issue negotiation. This is a valuable negotiation skill: breaking deadlock by reframing the problem rather than continuing to push. Option B agrees to the break but loses the opportunity to maintain momentum. Option C refuses the break in a way that may feel aggressive and can damage the relationship."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the negotiation debrief extract. Three lines have a grammar mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "I want to be transparent about where we stand — our budget won't allow a 20% price increase under any circumstances."
            },
            {
                "speaker": "Marcus",
                "text": "I can move in the payment terms if you agree to a longer contract commitment — that's a fair trade for both sides."
            },
            {
                "speaker": "Dana",
                "text": "That's not something we can agreed to — but what we could do is accept a 9% increase with a 24-month rate lock."
            },
            {
                "speaker": "Riley",
                "text": "On the exclusivity clause, we've reached our limit — sub-category exclusivity in retail banking is non-negotiable."
            },
            {
                "speaker": "Marcus",
                "text": "Let's find something that works for both of us — I think there is still a deal here if we focus on mutual benefit rather than winning each individual point."
            },
            {
                "speaker": "Dana",
                "text": "We should never making a concession without getting something in return — that's the most important rule of any commercial negotiation."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "I can move in the payment terms",
                "correction": "I can move on the payment terms",
                "explanation": "The correct phrasal verb is 'move on' — not 'move in'. 'I can move on the payment terms' means 'I can be flexible / I can accept a change on this term'. 'Move on' in negotiation context means to show flexibility or concede on a specific issue. 'Move in' has a completely different meaning (to move into a place, or to move something inward physically). Prepositions change meaning significantly — 'move on', 'move to', 'move toward', 'move away from' all mean different things in negotiation language."
            },
            {
                "lineIndex": 2,
                "incorrectText": "can agreed to",
                "correction": "can agree to",
                "explanation": "After modal verbs (can, could, would, should, will, shall, may, might, must), always use the base form of the verb — never the past tense. 'Can agree' is correct; 'can agreed' is not. This is the same rule that applies to all modal verbs: 'we can accept', 'we could consider', 'we would recommend' — all use base verb forms. 'Agreed' is the past tense/past participle form: it appears in 'we agreed' (simple past) or 'we have agreed' (present perfect) — never after a modal."
            },
            {
                "lineIndex": 5,
                "incorrectText": "should never making",
                "correction": "should never make",
                "explanation": "After 'should', always use the base form of the verb — not '-ing'. 'Should never make' is correct. 'Should never making' is ungrammatical because modal verbs cannot be followed directly by a present participle. The structure is: subject + modal (should) + adverb (never) + base verb (make). Compare: 'we should make', 'we should always respond', 'we should never give'. The '-ing' form after a modal is only possible when using a continuous aspect with 'be': 'we should be making progress', 'he should be arriving soon'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The negotiator starts a sentence in a partner meeting. Work with your partner to finish it professionally.",
        "items": [
            {
                "customerLine": "We can't get the price down any further. We've already moved twice and this is our final position.",
                "salespersonStart": "I respect that you've moved twice and I understand this may be a genuine limit. Before we call it final, I want to ask one question: if price is fixed, are there other terms we could structure differently to make the deal work for both of us? For example...",
                "suggestedCompletion": "if we can't move on price, could we look at the contract length, the payment schedule, or the scope of included services? Sometimes the total value of a deal can be improved by adjusting variables other than the headline price. I'm not asking you to give more — I'm asking if there's a different shape to the deal that gets us both what we need."
            },
            {
                "customerLine": "This negotiation is taking too long. Can we just agree on the main terms today and sort out the details later?",
                "salespersonStart": "I understand the desire to move quickly — and I share it. But I'd rather spend one more hour getting the terms right today than have a disagreement about the details in month three. The areas I still need clarity on before I can commit are...",
                "suggestedCompletion": "the exclusivity clause wording, the performance reporting frequency, and the termination notice period. Those three things affect how the partnership operates day to day. If we can agree on those in the next 30 minutes, I'm confident we can close today. Can we work through them quickly together?"
            },
            {
                "customerLine": "We feel like we've given a lot in this negotiation and haven't got much in return.",
                "salespersonStart": "I hear that, and I want to make sure we both feel this deal is fair — because a partnership where one side feels they gave too much rarely delivers the results either side hopes for. Let me summarize what we've each agreed to so far...",
                "suggestedCompletion": "You've moved on price from 20% to 9%, and on payment terms from net-30 to net-45. We've committed to a 24-month contract, included sub-category exclusivity in retail banking, and agreed to include the reporting add-on at no extra cost. Both sides have made real concessions. If you still feel the balance is wrong, tell me which specific term feels most out of proportion and let's see if there's a creative way to address it."
            }
        ]
    }
},
};
