import { Lesson } from '@/types/lesson';

export const howMuchDoesItCost: Lesson = {
  slug: 'how-much-does-it-cost',
  title: 'How Much Does It Cost?',
  subtitle: 'Simple language for discussing prices, discounts, and offers in marketing',
  level: 'A1-A2',
  description: 'Talking about price is one of the most important skills in B2B marketing and sales. This lesson gives you the basic vocabulary for discussing costs, discounts, and offers — so you can have confident, clear conversations about pricing in English.',
  heroImage: '/images/how-much-does-it-cost-hero.png',

  vocabulary: [
    {
      word: 'PRICE',
      partOfSpeech: 'noun',
      definition: 'The amount of money you pay for a product or service.',
      example: 'The price for our basic LinkedIn plan is €500 per month — that includes content, management, and a monthly report.',
      imageSlug: '/images/price.png',
    },
    {
      word: 'DISCOUNT',
      partOfSpeech: 'noun',
      definition: 'A reduction in the original price — an amount taken off because of a special reason, like buying early or in large volume.',
      example: 'We offer a ten percent discount for clients who pay for six months in advance.',
      imageSlug: '/images/discount.png',
    },
    {
      word: 'OFFER',
      partOfSpeech: 'noun',
      definition: 'A special deal or arrangement — usually for a limited time or under specific conditions.',
      example: 'Our launch offer includes three months for the price of two — it is only available until the end of July.',
      imageSlug: '/images/offer.png',
    },
    {
      word: 'DEAL',
      partOfSpeech: 'noun',
      definition: 'An agreement between a buyer and a seller, often involving a good price or special terms.',
      example: 'We closed a deal with a new client last week — they signed up for a six-month contract.',
      imageSlug: '/images/deal.png',
    },
    {
      word: 'FREE TRIAL',
      partOfSpeech: 'phrase',
      definition: 'A period when a customer can use a product or service for free before deciding to pay for it.',
      example: 'We offer a two-week free trial so clients can see the quality of our work before they commit.',
      imageSlug: '/images/free-trial.png',
    },
    {
      word: 'BUDGET',
      partOfSpeech: 'noun',
      definition: 'The amount of money a company or person has available to spend on something.',
      example: 'Dana asked the client about their budget before presenting any pricing options.',
      imageSlug: '/images/budget.png',
    },
    {
      word: 'QUOTE',
      partOfSpeech: 'noun',
      definition: 'A written document that tells a client how much something will cost — before they agree to buy.',
      example: 'Riley sent the client a quote with three different pricing options so they could choose what worked best.',
      imageSlug: '/images/quote.png',
    },
    {
      word: 'PACKAGE',
      partOfSpeech: 'noun',
      definition: 'A set of services or products sold together, usually at one fixed price.',
      example: 'Our starter package includes ten posts per month, comment management, and a monthly report.',
      imageSlug: '/images/package.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'COME IN UNDER BUDGET',
      definition: 'To cost less than the maximum amount someone is willing to spend.',
      example: 'We managed to come in under budget — the total project cost was €200 less than the client expected.',
      imageSlug: '/images/come-in-under-budget.png',
    },
    {
      phrase: 'WORK OUT THE COST',
      definition: 'To calculate how much something will cost in total.',
      example: 'Let me work out the cost for you — I need to know how many posts you want per month.',
      imageSlug: '/images/work-out-the-cost.png',
    },
    {
      phrase: 'BRING DOWN THE PRICE',
      definition: 'To reduce the price — to make it lower, often as a result of negotiation.',
      example: 'The client asked if we could bring the price down — we offered a small discount for a longer contract.',
      imageSlug: '/images/bring-down-the-price.png',
    },
    {
      phrase: 'GO WITH [AN OPTION]',
      definition: 'To choose or decide on something — often used when someone picks one option from several.',
      example: 'After looking at all three packages, the client decided to go with the premium plan.',
      imageSlug: '/images/go-with-an-option.png',
    },
    {
      phrase: 'FIT WITHIN [A BUDGET]',
      definition: 'To cost no more than the money someone has available to spend.',
      example: 'Our starter package should easily fit within your budget — it is our most affordable option.',
      imageSlug: '/images/fit-within-a-budget.png',
    },
    {
      phrase: 'LOCK IN [A PRICE]',
      definition: 'To agree on and fix a price so it does not change — often used in longer contracts.',
      example: 'If you sign up before the end of the month, you can lock in the launch price for the first year.',
      imageSlug: '/images/lock-in-a-price.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Hi Tom — great to speak again. You mentioned you wanted to talk about [[price:the amount of money you pay for a product or service]]s for our LinkedIn service.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Yes — before I say anything else, I want to know: how much does it cost?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Of course. Before I give you a number, can I ask — what is your [[budget:the amount of money available to spend]] for marketing support each month? It helps me show you the right [[package:a set of services sold together at one price]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] We are thinking somewhere between €500 and €800 per month.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That works well. Our starter [[package:a set of services sold together at one price]] is €500 per month — that includes ten posts, comment management, and a monthly report. Our growth plan is €750.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Is there any [[discount:a reduction in the original price]] if we sign up for a longer period?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Yes — we offer a ten percent [[discount:a reduction in the original price]] for clients who pay six months in advance. And we also have a launch [[offer:a special deal for a limited time]] right now — three months for the price of two.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] That is a good [[deal:an agreement between buyer and seller at a good price]]. Can we do a [[free trial:a period when you can use something for free before paying]] first?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Yes — we offer a two-week free trial. You see ten example posts and a sample report. If you like what you see, we start the full service.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Great. Can you send me a [[quote:a written document showing how much something will cost]] with both packages and the discount options?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Of course — I will send it today. I will include three options so you can choose what works best. Shall I lock in the launch price while the offer is still active?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Yes please. The launch offer sounds like the best [[deal:an agreement at a good price]]. Let me review the quote and I will get back to you by Friday.',
    }
  ],

  matchingExercise: [
    {
        "word": "PRICE",
        "definition": "The amount of money you pay for a product or service"
    },
    {
        "word": "DISCOUNT",
        "definition": "A reduction in the original price — often given for early payment or long contracts"
    },
    {
        "word": "OFFER",
        "definition": "A special deal or arrangement, usually available for a limited time"
    },
    {
        "word": "DEAL",
        "definition": "An agreement between a buyer and a seller, often at a good or agreed price"
    },
    {
        "word": "FREE TRIAL",
        "definition": "A period when a customer can use something for free before deciding to pay"
    },
    {
        "word": "BUDGET",
        "definition": "The amount of money a company or person has available to spend"
    },
    {
        "word": "QUOTE",
        "definition": "A written document that tells a client how much something will cost before they agree"
    },
    {
        "word": "PACKAGE",
        "definition": "A set of services or products sold together at one fixed price"
    }
],
  fillBlankExercise: [
    {
        "before": "The",
        "after": "for our basic LinkedIn plan is €500 per month.",
        "answer": "price"
    },
    {
        "before": "We offer a ten percent",
        "after": "for clients who pay for six months in advance.",
        "answer": "discount"
    },
    {
        "before": "Our launch",
        "after": "includes three months for the price of two — only until the end of July.",
        "answer": "offer"
    },
    {
        "before": "We closed a",
        "after": "with a new client last week — they signed a six-month contract.",
        "answer": "deal"
    },
    {
        "before": "We offer a two-week",
        "after": "so clients can see the quality of our work before they commit.",
        "answer": "free trial"
    },
    {
        "before": "Dana asked the client about their",
        "after": "before presenting any pricing options.",
        "answer": "budget"
    },
    {
        "before": "Riley sent the client a",
        "after": "with three different pricing options so they could choose the best one.",
        "answer": "quote"
    },
    {
        "before": "Our starter",
        "after": "includes ten posts per month, comment management, and a monthly report.",
        "answer": "package"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client asks: 'How much does your service cost?' What should you say first?",
        "options": [
            "Give them the highest price first to start negotiation.",
            "Ask about their budget and goals — that way you can show them the package that fits best.",
            "Say the price immediately without asking any questions.",
            "Tell them the price depends on many factors and you will get back to them later."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says: 'That is a bit more than we expected.' What do you do?",
        "options": [
            "Lower the price immediately without asking questions.",
            "Ask what they expected and what their budget is — then see if there is a package or discount that works for them.",
            "Tell them the price is fair and non-negotiable.",
            "Apologise and offer them a free trial instead."
        ],
        "correctIndex": 1
    },
    {
        "question": "You want to encourage a client to sign up quickly. Which phrase is most useful?",
        "options": [
            "If you are interested, please let me know.",
            "Our launch offer is only available until the end of the month — would you like to lock in that price?",
            "We have many clients who are very happy with our prices.",
            "The price may go up next year."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between a 'discount' and a 'free trial'?",
        "options": [
            "They mean the same thing — both reduce the price.",
            "A discount is a reduction in price. A free trial is a period of free use before paying.",
            "A discount is for new clients. A free trial is for existing clients.",
            "A discount applies to products. A free trial applies to services."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is it useful to ask about a client's budget before presenting pricing?",
        "options": [
            "It lets you know how much profit you can make.",
            "It helps you show the client the package that fits their budget — instead of starting too high or too low.",
            "It is not useful — clients do not like to share their budget.",
            "It helps you decide if the client is worth talking to."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client wants to 'lock in a price'. What does this mean?",
        "options": [
            "They want a lower price than the one you offered.",
            "They want to agree on and fix the price now so it does not change later.",
            "They want a free trial before they commit to any price.",
            "They want to discuss the price with their team before deciding."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is a 'quote' in a B2B context?",
        "options": [
            "A sentence from a satisfied customer used in marketing",
            "A written document that tells a client how much something will cost before they agree to buy",
            "A short summary of your services",
            "The price shown on your website"
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says: 'Can you bring the price down?' What is the best response?",
        "options": [
            "Say: 'No — the price is the price.'",
            "Say: 'Yes — I can offer you a discount if you sign up for six months or more. Would that work for you?'",
            "Say: 'I will ask my manager and get back to you in two weeks.'",
            "Say: 'Our prices are already very low compared to other agencies.'"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "When a potential client asks 'How much does it cost?' — what do you usually say first? How do you handle the price conversation?",
        "What is the difference between a 'price', a 'discount', and a 'deal'? Can you explain each one?",
        "Have you ever offered or received a discount? What was the reason for it?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "Dana asked the client about their _____ before showing any pricing options.",
            "options": [
                "quote",
                "budget",
                "discount"
            ],
            "correctIndex": 1,
            "explanation": "Budget is the amount of money someone has available to spend. Quote is a written document with the price. Discount is a reduction. Asking about the budget first is the smart move — it helps you show the right package instead of starting with a price that is too high or too low."
        },
        {
            "sentence": "Our launch _____ includes three months for the price of two — only available until the end of July.",
            "options": [
                "deal",
                "package",
                "offer"
            ],
            "correctIndex": 2,
            "explanation": "Offer is a special deal or arrangement available for a limited time. Deal is an agreement between buyer and seller. Package is a set of services sold together. Offer is the right word here because it is a time-limited promotion, not a permanent arrangement."
        },
        {
            "sentence": "We give a ten percent _____ to clients who pay six months in advance.",
            "options": [
                "price",
                "discount",
                "budget"
            ],
            "correctIndex": 1,
            "explanation": "Discount is a reduction in the original price. Price is the original amount. Budget is the money available to spend. The ten percent reduction is a discount — something taken off the price as a reward for paying early or for a longer commitment."
        },
        {
            "sentence": "Riley sent the client a _____ with three different pricing options so they could choose the best one.",
            "options": [
                "deal",
                "free trial",
                "quote"
            ],
            "correctIndex": 2,
            "explanation": "Quote is a written document showing how much something will cost. Deal is an agreement. Free trial is a period of free use. Sending a quote is the standard next step after a pricing conversation — it gives the client the numbers in writing."
        },
        {
            "sentence": "Our starter _____ includes ten posts per month, comment management, and a monthly report.",
            "options": [
                "package",
                "offer",
                "price"
            ],
            "correctIndex": 0,
            "explanation": "Package is a set of services sold together at one price. Offer is a special deal for a limited time. Price is the cost of something. A package is a bundle of services — you use this word when describing what is included in a plan."
        },
        {
            "sentence": "If you sign up before the end of the month, we can _____ the launch price for you for the first year.",
            "options": [
                "work out",
                "lock in",
                "bring down"
            ],
            "correctIndex": 1,
            "explanation": "Lock in means to agree on and fix a price so it does not change. Work out means to calculate the cost. Bring down means to reduce the price. Locking in a price is a great way to create urgency — it protects the client from future price increases if they act now."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'That sounds good, but your price is higher than what we pay now.'",
                "options": [
                    "Say: 'I understand — what are you paying now and what does it include? I want to make sure we are comparing the same things. Our plan includes content creation, management, and a monthly report — all in one price.'",
                    "Say: 'Our service is better quality, so it costs more. That is normal.'",
                    "Say: 'Okay — I can give you a 30% discount to match your current price.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It asks a smart question (what do they pay and what is included?) before reacting to the price objection. This helps you understand if you are actually more expensive — or just different. B sounds arrogant. C gives a large discount immediately without understanding the situation."
            },
            {
                "customerLine": "Client: 'We love the service, but we do not have the budget for it right now.'",
                "options": [
                    "Say: 'I understand. Would our starter package work for you? It is €500 per month and includes everything you need to get started. We also have a launch offer — three months for the price of two — so you would save €1,000 in the first three months.'",
                    "Say: 'No problem — come back to us when you have the budget.'",
                    "Say: 'I can offer you a free trial indefinitely until your budget improves.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It acknowledges the budget concern and immediately offers a concrete solution — the starter package and the launch offer. B gives up immediately and loses the deal. C is not realistic — an indefinite free trial is not a sustainable business offer."
            },
            {
                "customerLine": "Client: 'Can you send me a quote? I need to show it to my manager before we can proceed.'",
                "options": [
                    "Say: 'I will send the quote today. I will include three options — starter, growth, and premium — so your manager can see the range. Is there a budget figure I should stay within?'",
                    "Say: 'Of course — I will send the quote by the end of next week.'",
                    "Say: 'Sure — but managers usually prefer a call first. Can I speak to your manager directly?'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It promises to send the quote today (fast), gives multiple options so the manager has something to compare, and asks about the budget to make the quote more relevant. B takes too long — end of next week loses momentum. C is pushy — asking to contact the manager directly feels like you are going around the client."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this pricing conversation. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Client",
                "text": "How much costs your LinkedIn service?"
            },
            {
                "speaker": "Dana",
                "text": "Our starter package is €500 per month. That includes ten posts, comment management, and a monthly report."
            },
            {
                "speaker": "Client",
                "text": "Is there a discount?"
            },
            {
                "speaker": "Dana",
                "text": "Yes — we offer a ten percent discount for clients who pay six months advance."
            },
            {
                "speaker": "Client",
                "text": "Can I do a free trial?"
            },
            {
                "speaker": "Dana",
                "text": "Yes — we offer a two-week free trial. After that, you can decide if you want start the full service."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "How much costs your LinkedIn service?",
                "correction": "How much does your LinkedIn service cost?",
                "explanation": "In English, questions with 'how much' use the auxiliary verb 'does' before the subject, and the main verb goes at the end. The correct structure is: 'How much does [subject] cost?' — not 'How much costs [subject]?' This is a very common word order mistake."
            },
            {
                "lineIndex": 3,
                "incorrectText": "pay six months advance",
                "correction": "pay six months in advance",
                "explanation": "The correct phrase is 'pay in advance' — the preposition 'in' is always used before 'advance' in this expression. 'In advance' means before the normal time. Without 'in', the phrase is incomplete and grammatically incorrect."
            },
            {
                "lineIndex": 5,
                "incorrectText": "want start",
                "correction": "want to start",
                "explanation": "After 'want', you must use the infinitive with 'to': want to start, want to try, want to sign up. You cannot put two base verbs directly together in English. Always say: 'I want to do something' — not 'I want do something'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line. Use language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: 'Your prices are too high for us. We only have €300 a month.'",
                "salespersonStart": "I understand — €300 is a real constraint.",
                "suggestedCompletion": "Let me be honest with you. Our starter package starts at €500, which includes ten posts per month, comment management, and a monthly report. However, we do have a launch offer right now — three months for the price of two — which would mean your first three months cost €1,000 instead of €1,500. Would that fit better? I want to find something that works for both of us."
            },
            {
                "customerLine": "Client: 'We are comparing three agencies. Can you match the lowest price we are seeing?'",
                "salespersonStart": "I appreciate you being transparent with us.",
                "suggestedCompletion": "I would love to match that price if we can — can you tell me what the other agency is offering for that price? Sometimes the packages are quite different. Our starter package at €500 includes content creation, management, and reporting all in one. If we are comparing the same things, I can see if there is flexibility. I would rather find a way to work together than lose you to a cheaper package that delivers less."
            },
            {
                "customerLine": "Client: 'We are very interested but we need three weeks to confirm the budget internally.'",
                "salespersonStart": "No problem at all — I completely understand.",
                "suggestedCompletion": "I want to make sure you know that our launch offer — three months for the price of two — is only available until the end of this month. If you can confirm the budget in three weeks, we might just miss it. Would it be possible to put a provisional booking on the launch price for you so it is reserved while you get internal approval? That way you do not lose the offer while you go through the process."
            }
        ]
    }
},
};
