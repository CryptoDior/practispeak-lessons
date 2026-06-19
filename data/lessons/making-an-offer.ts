import { Lesson } from '@/types/lesson';

export const makingAnOffer: Lesson = {
  slug: 'making-an-offer',
  title: 'Making an Offer',
  subtitle: 'Promotions and pricing language — how to present an offer that motivates action',
  level: 'A2',
  description: "In B2B marketing, a well-structured offer can be the difference between a client who says 'maybe later' and one who signs today. This lesson gives you the vocabulary and phrases to present bundles, promotions, vouchers, and incentives in clear, persuasive English.",
  heroImage: '/images/making-an-offer-hero.png',

  vocabulary: [
    {
      word: 'BUNDLE',
      partOfSpeech: 'noun',
      definition: 'A group of products or services packaged and sold together — usually at a lower combined price than buying each separately.',
      example: 'Riley offered the client a bundle that included content creation, LinkedIn management, and monthly reporting — all for one fixed price.',
      imageSlug: '/images/bundle.png',
    },
    {
      word: 'LOYALTY',
      partOfSpeech: 'noun',
      definition: 'The quality of staying with one company or supplier over time — often rewarded with special discounts or benefits.',
      example: 'We have a loyalty discount for clients who renew for a second year — they get fifteen percent off their renewal price.',
      imageSlug: '/images/loyalty.png',
    },
    {
      word: 'PROMOTION',
      partOfSpeech: 'noun',
      definition: 'A special offer or deal — usually available for a limited time — designed to encourage people to buy.',
      example: 'Our spring promotion includes a free strategy session for any client who signs up before the end of April.',
      imageSlug: '/images/promotion.png',
    },
    {
      word: 'VOUCHER',
      partOfSpeech: 'noun',
      definition: 'A document or code that gives the holder a specific discount or benefit when they buy a product or service.',
      example: 'Dana sent a voucher code to twenty warm leads — it gave them ten percent off their first month with no minimum commitment.',
      imageSlug: '/images/voucher.png',
    },
    {
      word: 'INCENTIVE',
      partOfSpeech: 'noun',
      definition: 'Something that motivates someone to take action — a reward or benefit that makes an offer more attractive.',
      example: 'The main incentive for signing up this month is the free audit — we review your current LinkedIn presence and give you a detailed report at no cost.',
      imageSlug: '/images/incentive.png',
    },
    {
      word: 'COMMITMENT',
      partOfSpeech: 'noun',
      definition: 'An agreement to do something or to continue with something for a period of time — often used in contracts.',
      example: 'Our starter plan has no long-term commitment — clients can cancel after the first month if they are not satisfied.',
      imageSlug: '/images/commitment.png',
    },
    {
      word: 'RENEWAL',
      partOfSpeech: 'noun',
      definition: 'When a client continues with a service after the initial contract period ends — they choose to sign again.',
      example: 'Our renewal rate is very high — eighty percent of clients choose to continue after their first six-month contract.',
      imageSlug: '/images/renewal.png',
    },
    {
      word: 'EXCLUSIVE',
      partOfSpeech: 'adjective',
      definition: 'Available only to a specific group of people or for a limited time — not offered to everyone.',
      example: 'This is an exclusive offer for clients who attended our webinar — it is not available on our website.',
      imageSlug: '/images/exclusive.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THROW IN [SOMETHING]',
      definition: 'To include something extra for free as part of an offer — to add a bonus without increasing the price.',
      example: 'If you sign up for the six-month plan, we will throw in a free brand audit at the start — that is worth €500 on its own.',
      imageSlug: '/images/throw-in-something.png',
    },
    {
      phrase: 'TAKE UP AN OFFER',
      definition: 'To accept and use an offer that has been made to you.',
      example: 'Out of the twenty clients who received the promotion email, eight took up the offer within the first week.',
      imageSlug: '/images/take-up-an-offer.png',
    },
    {
      phrase: 'LOCK IN [A PRICE]',
      definition: 'To agree on a price now so that it is fixed and will not change — even if prices increase later.',
      example: 'If you sign up before the end of the month, you lock in the current price for the full year — it will not go up at renewal.',
      imageSlug: '/images/lock-in-a-price.png',
    },
    {
      phrase: 'SWEETEN THE DEAL',
      definition: 'To make an offer more attractive by adding something extra.',
      example: 'The client was on the fence, so Riley offered to sweeten the deal by including a monthly strategy call at no extra cost.',
      imageSlug: '/images/sweeten-the-deal.png',
    },
    {
      phrase: 'SIGN UP FOR [SOMETHING]',
      definition: 'To formally agree to take a service or plan — to register or commit.',
      example: 'We are running a promotion this month — clients who sign up for a six-month plan get the first month free.',
      imageSlug: '/images/sign-up-for-something.png',
    },
    {
      phrase: 'COME WITH [SOMETHING]',
      definition: 'To include something as part of a package or offer.',
      example: 'Every plan comes with a dedicated account manager and a monthly performance report — there are no hidden extras.',
      imageSlug: '/images/come-with-something.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, I like what you have shown me, but I am not ready to commit to a twelve-month contract. It feels like a big [[commitment:an agreement to do something for a period of time]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I completely understand. Let me show you what we can do. We have a six-month option with no long-term [[commitment:an agreement to continue for a set period]] beyond that.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That sounds better. Is there any kind of [[promotion:a special offer available for a limited time]] running at the moment?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we have an [[exclusive:available only to a specific group]] [[promotion:a special deal for a limited time]] for new clients this month. If you sign up for the six-month plan, we [[throw in]] a free brand audit — that is worth €500.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Interesting. What does the plan [[come with:to include as part of a package]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It [[come with:to include]] a content calendar, twelve LinkedIn posts per month, comment management, and a monthly performance report. It is a complete [[bundle:a group of services packaged together at one price]] — everything in one fixed monthly fee.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What is the [[incentive:something that motivates someone to take action]] to sign now rather than waiting?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Two things. First, the free audit is only available this month. Second, if you sign up now, you [[lock in]] the current price — so when we increase prices in September, your rate stays the same at [[renewal:when a client continues after the initial contract]].',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is a strong [[incentive:a reward that makes an offer more attractive]]. Do you also offer any kind of [[loyalty:staying with one company over time]] discount for long-term clients?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — clients who [[renewal:choose to continue]] renew for a second year get fifteen percent off. It is our way of rewarding [[loyalty:staying with one company]].',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Okay. Can you send me the details with the [[promotion:a special offer]] price and the [[bundle:a group of services packaged together]] included? I want to share it with my director.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course — I will send everything today. I will also include a [[voucher:a document giving a specific discount]] code for the ten percent early-sign discount in case your director wants to act quickly.',
    }
  ],

  matchingExercise: [
    {
        "word": "BUNDLE",
        "definition": "A group of products or services packaged and sold together — usually at a lower combined price"
    },
    {
        "word": "LOYALTY",
        "definition": "The quality of staying with one company over time — often rewarded with discounts or benefits"
    },
    {
        "word": "PROMOTION",
        "definition": "A special offer or deal available for a limited time — designed to encourage people to buy"
    },
    {
        "word": "VOUCHER",
        "definition": "A document or code that gives the holder a specific discount or benefit when they buy"
    },
    {
        "word": "INCENTIVE",
        "definition": "Something that motivates someone to take action — a reward that makes an offer more attractive"
    },
    {
        "word": "COMMITMENT",
        "definition": "An agreement to do something or continue with something for a period of time"
    },
    {
        "word": "RENEWAL",
        "definition": "When a client continues with a service after the initial contract period ends"
    },
    {
        "word": "EXCLUSIVE",
        "definition": "Available only to a specific group of people or for a limited time — not offered to everyone"
    }
],
  fillBlankExercise: [
    {
        "before": "Riley offered a",
        "after": "that included content creation, LinkedIn management, and reporting — all for one fixed price.",
        "answer": "bundle"
    },
    {
        "before": "We have a",
        "after": "discount for clients who renew for a second year — they get fifteen percent off.",
        "answer": "loyalty"
    },
    {
        "before": "Our spring",
        "after": "includes a free strategy session for any client who signs up before the end of April.",
        "answer": "promotion"
    },
    {
        "before": "Dana sent a",
        "after": "code to twenty warm leads — it gave them ten percent off their first month.",
        "answer": "voucher"
    },
    {
        "before": "The main",
        "after": "for signing up this month is the free audit — a detailed report at no cost.",
        "answer": "incentive"
    },
    {
        "before": "Our starter plan has no long-term",
        "after": "— clients can cancel after the first month if they are not satisfied.",
        "answer": "commitment"
    },
    {
        "before": "Our",
        "after": "rate is very high — eighty percent of clients choose to continue after six months.",
        "answer": "renewal"
    },
    {
        "before": "This is an",
        "after": "offer for clients who attended our webinar — it is not available on our website.",
        "answer": "exclusive"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client says: 'I like your service but I am not ready to sign a twelve-month contract.' What is your best response?",
        "options": [
            "Say: 'I understand — come back to us when you are ready.'",
            "Say: 'We also have a six-month option with no long-term commitment beyond that — and this month we have a promotion that includes a free brand audit.'",
            "Say: 'All our plans require a twelve-month commitment minimum.'",
            "Say: 'I can offer you a thirty percent discount if you sign today.'"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between a promotion and an incentive?",
        "options": [
            "They mean exactly the same thing.",
            "A promotion is a special time-limited offer. An incentive is something that motivates action — it could be part of a promotion or stand alone.",
            "A promotion is for new clients only. An incentive is for existing clients.",
            "A promotion is a price reduction. An incentive is always a free gift."
        ],
        "correctIndex": 1
    },
    {
        "question": "You want to make your offer more attractive without reducing the price. What do you do?",
        "options": [
            "Offer a larger discount.",
            "Extend the contract length.",
            "Sweeten the deal — throw in something extra, like a free audit, an additional report, or a strategy call.",
            "Tell the client the price will increase soon."
        ],
        "correctIndex": 2
    },
    {
        "question": "A client signs up for a second year. What do you offer them?",
        "options": [
            "A voucher for a different service.",
            "A loyalty discount — they get a percentage off their renewal price for staying with you.",
            "The same promotional offer as new clients.",
            "Nothing — the renewal price is always the same."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'lock in a price'?",
        "options": [
            "To add a discount to the current price.",
            "To agree on a price now so it is fixed and will not change — even if prices go up later.",
            "To prevent the client from changing their plan.",
            "To send the client a voucher for the agreed price."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client receives a voucher code. What can they do with it?",
        "options": [
            "Exchange it for a different product.",
            "Use it to get a specific discount or benefit when they buy — for example, ten percent off their first month.",
            "Share it with other companies in their network.",
            "Use it to access content that is normally only available to premium clients."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which offer is most likely to motivate a hesitating client to sign today?",
        "options": [
            "A loyalty discount for their second year.",
            "An exclusive promotion — free brand audit when they sign this month, plus the price locks in before September's increase.",
            "A flexible contract with no commitment.",
            "A voucher code they can use at any time."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'the plan comes with a monthly report' mean?",
        "options": [
            "You can add a monthly report for an extra cost.",
            "The monthly report is included in the plan — it is part of what the client gets for their fee.",
            "The client must request the monthly report separately.",
            "The monthly report is only available on the premium plan."
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Think of a time you accepted a special offer — at work or personally. What made it attractive enough to say yes?",
        "What is the difference between a discount and an incentive? Can you think of an example of each in a B2B context?",
        "When do you think it is appropriate to offer a discount or promotion to a potential client? Are there times when you should not?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "If you sign up for the six-month plan, we will _____ a free brand audit — it is worth €500 on its own.",
            "options": [
                "lock in",
                "throw in",
                "take up"
            ],
            "correctIndex": 1,
            "explanation": "Throw in means to include something extra for free as part of a deal. Lock in means to fix a price. Take up means to accept an offer. Throwing in a free audit is a classic way to sweeten a deal without reducing the price — it adds value rather than cutting margin."
        },
        {
            "sentence": "Every plan _____ a dedicated account manager and a monthly report — there are no hidden extras.",
            "options": [
                "comes with",
                "signs up for",
                "locks in"
            ],
            "correctIndex": 0,
            "explanation": "Comes with means to include something as part of a plan or package. Signs up for means to register or commit. Locks in means to fix a price. 'Comes with' is the natural phrase for describing what is included in a plan."
        },
        {
            "sentence": "This is an _____ offer for clients who attended our webinar — it is not available to the general public.",
            "options": [
                "exclusive",
                "loyal",
                "promotional"
            ],
            "correctIndex": 0,
            "explanation": "Exclusive means available only to a specific group. Loyal is an adjective describing someone who stays with a company — not used to describe an offer. Promotional means related to a promotion, but exclusive more specifically captures the sense that only this group can access the offer."
        },
        {
            "sentence": "Clients who renew for a second year get a _____ discount — it is our way of rewarding long-term clients.",
            "options": [
                "voucher",
                "commitment",
                "loyalty"
            ],
            "correctIndex": 2,
            "explanation": "Loyalty is the quality of staying with one company — a loyalty discount rewards clients who return. Voucher is a code or document for a specific discount. Commitment is an agreement to continue for a period. The loyalty discount specifically rewards the act of staying with the company."
        },
        {
            "sentence": "If you sign up this week, you _____ the current price — your rate will not change when we increase prices in September.",
            "options": [
                "take up",
                "lock in",
                "throw in"
            ],
            "correctIndex": 1,
            "explanation": "Lock in means to agree on and fix a price so it does not change later. Take up means to accept an offer. Throw in means to add something extra for free. Locking in a price is a powerful incentive because it protects the client from future increases."
        },
        {
            "sentence": "Dana sent a _____ code to twenty warm leads — it gave them ten percent off their first month.",
            "options": [
                "loyalty",
                "bundle",
                "voucher"
            ],
            "correctIndex": 2,
            "explanation": "Voucher is a document or code that gives a specific discount. Loyalty is the quality of staying with one supplier. Bundle is a group of services packaged together. A voucher code is a practical tool for converting warm leads — it gives them a specific, concrete reason to act."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'Your service looks good, but we want to try it for one month before committing to anything longer.'",
                "options": [
                    "Say: 'One month is not enough time to see results — you need at least six months.'",
                    "Say: 'Of course — we can start with a one-month trial. But I want to flag that we have a promotion running this month: if you commit to six months now, we throw in a free brand audit worth €500. If you would like I can walk you through what you can expect in month one so you feel more confident.'",
                    "Say: 'No problem — one month is fine. We will start whenever you are ready.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It accepts the one-month idea but introduces the promotion as a reason to consider committing for longer — it does not pressure, it informs. A pushes back too hard. C accepts the one-month without any mention of the better value on offer — a missed opportunity."
            },
            {
                "customerLine": "Client: 'We have been with you for a year. What do you offer existing clients who want to renew?'",
                "options": [
                    "Say: 'The renewal price is the same as the new client price — we do not differentiate.'",
                    "Say: 'We really value your loyalty. Clients who renew for a second year receive a fifteen percent loyalty discount on their renewal price. I will also throw in a strategy review session so we can make sure the next year is even better than the first.'",
                    "Say: 'You will need to speak to our accounts team about renewal pricing.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It acknowledges the client's loyalty, presents the loyalty discount clearly, and adds extra value with a strategy review. A is a missed retention opportunity. C passes the client to another team, which feels impersonal and could lose the renewal."
            },
            {
                "customerLine": "Client: 'We got your voucher code but we are not sure if the offer is worth it. What exactly do we get?'",
                "options": [
                    "Say: 'The voucher gives you ten percent off. That is the offer.'",
                    "Say: 'The voucher gives you ten percent off your first month — but combined with this month's promotion, you also get a free brand audit. So you are saving on the price and getting an additional service worth €500. Let me send you a one-page summary so you can share it with your team.'",
                    "Say: 'The voucher is self-explanatory — all the details are in the email we sent you.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains the full value — not just the discount, but the additional incentive — and offers to send a summary the client can share. A gives a minimal answer that undersells the offer. C sends the client back to an email they clearly did not find clear enough."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this offer email. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Subject",
                "text": "An exclusive offer for you — this month only"
            },
            {
                "speaker": "Body",
                "text": "Dear Marcus,"
            },
            {
                "speaker": "Body",
                "text": "I am writing to share an exclusive promotion what we are running for new clients this month."
            },
            {
                "speaker": "Body",
                "text": "If you sign up for our six-month plan before the 31st of July, we will throwing in a free brand audit worth €500."
            },
            {
                "speaker": "Body",
                "text": "You will also lock in the current price — so when we increase our prices in September, your rate won't change at renewal."
            },
            {
                "speaker": "Body",
                "text": "This offer is exclusive to clients who has attended one of our webinars."
            },
            {
                "speaker": "Sign-off",
                "text": "Best regards, Riley"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "promotion what we are running",
                "correction": "promotion that we are running",
                "explanation": "When connecting a noun clause, use 'that' — not 'what'. 'What' is used when there is no preceding noun (e.g., 'I know what we are running'). But when there is a noun before the clause ('a promotion'), you must use 'that': 'a promotion that we are running'."
            },
            {
                "lineIndex": 3,
                "incorrectText": "we will throwing in",
                "correction": "we will throw in",
                "explanation": "'Will' is always followed by the base form of the verb — not the gerund (-ing form). Say: 'we will throw in', not 'we will throwing in'. This pattern is fixed: will + base verb (throw, include, send, offer)."
            },
            {
                "lineIndex": 5,
                "incorrectText": "clients who has attended",
                "correction": "clients who have attended",
                "explanation": "'Clients' is plural, so the verb must also be plural: 'who have attended', not 'who has attended'. 'Has' is used with singular subjects (he, she, it). 'Have' is used with plural subjects (they, clients, companies)."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: 'Your bundle looks good, but it feels like we are paying for things we do not need.'",
                "salespersonStart": "That is a fair point — let me explain why each element is in the bundle.",
                "suggestedCompletion": "The content calendar and LinkedIn posts work together — one without the other is less effective. The monthly report is what lets us track results and improve each month. That said, if there is something specific you feel you do not need, let us talk about it. I would rather adjust the bundle to fit your needs than have you pay for something that does not add value."
            },
            {
                "customerLine": "Client: 'We already work with another agency. Why would we switch to you?'",
                "salespersonStart": "I appreciate your honesty — and I would not ask you to switch without a good reason.",
                "suggestedCompletion": "What I would suggest is a free brand audit — we review what your current LinkedIn presence looks like and give you a detailed report at no cost. If the audit shows there are gaps, we can discuss whether we are the right fit. If it shows everything is working perfectly, at least you have an independent second opinion. There is no commitment and no pressure. Would that be useful?"
            },
            {
                "customerLine": "Client: 'The offer sounds interesting but we want to wait until next quarter to start.'",
                "salespersonStart": "I completely understand — timing is important.",
                "suggestedCompletion": "I just want to flag that this promotion ends on the 31st of this month — the free audit and the locked-in price are only available if you sign before then. If you start next quarter, we can still work together, but the price will be higher and the free audit will not be included. Is there anything I can do to make it easier to move forward this month — even just to lock in the price now and start the work next quarter?"
            }
        ]
    }
},
};
