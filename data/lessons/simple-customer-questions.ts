import { Lesson } from '@/types/lesson';

export const simpleCustomerQuestions: Lesson = {
  slug: 'simple-customer-questions',
  title: 'Simple Customer Questions',
  subtitle: 'How to answer the questions customers ask most often',
  level: 'A1-A2',
  description: "Learn to handle the questions customers ask when they are evaluating a product — 'How much is it?', 'Is it available?', 'When can I get access?' — quickly, clearly, and with confidence.",
  heroImage: '/images/simple-customer-questions-hero.png',

  vocabulary: [
    {
      word: 'PRICE',
      partOfSpeech: 'noun',
      definition: 'The amount of money you pay for something.',
      example: 'The price of the Growth Plan is $149 a month.',
      imageSlug: '/images/simple-customer-questions-price.png',
    },
    {
      word: 'AVAILABLE',
      partOfSpeech: 'adjective',
      definition: 'Ready to use or buy right now; not out of stock or unavailable.',
      example: 'Yes, a 14-day free trial is available right now — no payment details needed.',
      imageSlug: '/images/simple-customer-questions-available.png',
    },
    {
      word: 'CONFIRM',
      partOfSpeech: 'verb',
      definition: 'To say clearly that something is true or will definitely happen.',
      example: 'Can you confirm the trial period? I want to be sure before I sign up.',
      imageSlug: '/images/simple-customer-questions-confirm.png',
    },
    {
      word: 'ACCESS',
      partOfSpeech: 'noun',
      definition: 'The right or ability to use a product, system, or service.',
      example: 'You get full access to all features from the moment you sign up.',
      imageSlug: '/images/simple-customer-questions-access.png',
    },
    {
      word: 'IMMEDIATELY',
      partOfSpeech: 'adverb',
      definition: 'Right now; without any delay.',
      example: 'You can get access immediately — I can set it up for you today.',
      imageSlug: '/images/immediately.png',
    },
    {
      word: 'DISCOUNT',
      partOfSpeech: 'noun',
      definition: 'A reduction in the normal price.',
      example: 'We offer a discount if you pay for the full year upfront.',
      imageSlug: '/images/simple-customer-questions-discount.png',
    },
    {
      word: 'QUERY',
      partOfSpeech: 'noun',
      definition: 'A question or request for information.',
      example: "That's a great query — let me check the current pricing and get back to you.",
      imageSlug: '/images/query.png',
    },
    {
      word: 'TRIAL',
      partOfSpeech: 'noun',
      definition: 'A period when you can use a product for free before deciding to buy.',
      example: 'The trial is 14 days — completely free, no credit card required.',
      imageSlug: '/images/simple-customer-questions-trial.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'HOW MUCH IS IT',
      definition: 'The most common question customers ask about price.',
      example: 'How much is it for a team of 10 people?',
      imageSlug: '/images/how-much-is-it.png',
    },
    {
      phrase: 'IS IT AVAILABLE',
      definition: 'Ask if a product, feature, or option can be used or obtained right now.',
      example: 'Is the annual plan available to new customers?',
      imageSlug: '/images/is-it-available.png',
    },
    {
      phrase: 'WHEN CAN I GET',
      definition: 'Ask about the timeline for receiving or accessing something.',
      example: 'When can I get access to the full platform?',
      imageSlug: '/images/when-can-i-get.png',
    },
    {
      phrase: 'DO YOU OFFER',
      definition: 'Ask if a company provides a particular product, service, or discount.',
      example: 'Do you offer a discount for non-profit organisations?',
      imageSlug: '/images/do-you-offer.png',
    },
    {
      phrase: 'CAN YOU CONFIRM',
      definition: 'Ask someone to verify or make a piece of information definite.',
      example: 'Can you confirm the price before I pass this to my manager?',
      imageSlug: '/images/can-you-confirm.png',
    },
    {
      phrase: 'LET ME CHECK',
      definition: 'A phrase the salesperson uses before giving a specific answer to a query.',
      example: 'Let me check whether that feature is included in the Starter Plan.',
      imageSlug: '/images/let-me-check.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Jake',
      speakerColor: 'blue',
      speakerAvatar: '/images/jake-icon.png',
      text: 'Hi, I saw Brightline online. How much is it?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The Starter Plan is $49 a month and the Growth Plan is $149 a month. Which sounds closer to what you need?',
    },
    {
      speaker: 'Jake',
      speakerColor: 'blue',
      speakerAvatar: '/images/jake-icon.png',
      text: 'Probably the Growth Plan. Is a free [[trial:a period when you can use a product for free before deciding to buy]] [[available:ready to use or buy right now; not out of stock or unavailable]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — a 14-day trial is available right now. No payment details needed.',
    },
    {
      speaker: 'Jake',
      speakerColor: 'blue',
      speakerAvatar: '/images/jake-icon.png',
      text: 'When can I get [[access:the right or ability to use a product, system, or service]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[[immediately:right now; without any delay]]. I can set up your account today — it only takes a few minutes.',
    },
    {
      speaker: 'Jake',
      speakerColor: 'blue',
      speakerAvatar: '/images/jake-icon.png',
      text: 'Do you offer a [[discount:a reduction in the normal price]] for annual billing?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes. If you pay annually, the [[price:the amount of money you pay for something]] works out at $124 a month — a saving of $25 compared to monthly billing.',
    },
    {
      speaker: 'Jake',
      speakerColor: 'blue',
      speakerAvatar: '/images/jake-icon.png',
      text: 'Can you [[confirm:to say clearly that something is true or will definitely happen]] the trial period again? I want to make sure before I tell my manager.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. The trial is 14 days, completely free. Let me check if there are any current offers too... Yes — this month new customers get an extra 7 days, so 21 days in total.',
    },
    {
      speaker: 'Jake',
      speakerColor: 'blue',
      speakerAvatar: '/images/jake-icon.png',
      text: "That's great. One more [[query:a question or request for information]] — do you have a plan for up to 20 users?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — the Growth Plan covers up to 25 users, so 20 fits perfectly. Shall I send you the details so you can share them with your manager?',
    }
  ],

  matchingExercise: [
    {
        "word": "PRICE",
        "definition": "The amount of money you pay for something"
    },
    {
        "word": "AVAILABLE",
        "definition": "Ready to use or buy right now; not out of stock"
    },
    {
        "word": "CONFIRM",
        "definition": "To say clearly that something is true or will definitely happen"
    },
    {
        "word": "ACCESS",
        "definition": "The right or ability to use a product, system, or service"
    },
    {
        "word": "IMMEDIATELY",
        "definition": "Right now; without any delay"
    },
    {
        "word": "DISCOUNT",
        "definition": "A reduction in the normal price"
    },
    {
        "word": "QUERY",
        "definition": "A question or request for information"
    },
    {
        "word": "TRIAL",
        "definition": "A period when you can use a product for free before deciding to buy"
    }
],
  fillBlankExercise: [
    {
        "before": "The",
        "after": "of the Growth Plan is $149 a month.",
        "answer": "price"
    },
    {
        "before": "Yes, a 14-day trial is",
        "after": "right now — no payment details needed.",
        "answer": "available"
    },
    {
        "before": "Can you",
        "after": "the trial period? I want to be sure before I tell my manager.",
        "answer": "confirm"
    },
    {
        "before": "You get full",
        "after": "to all features from the moment you sign up.",
        "answer": "access"
    },
    {
        "before": "You can start",
        "after": "— I can set up your account today.",
        "answer": "immediately"
    },
    {
        "before": "We offer a",
        "after": "if you pay for the full year upfront.",
        "answer": "discount"
    },
    {
        "before": "That's a great",
        "after": "— let me check and get back to you.",
        "answer": "query"
    },
    {
        "before": "The",
        "after": "is 14 days — completely free, no credit card required.",
        "answer": "trial"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Jake call Brightline?",
        "options": [
            "He is an existing customer with a problem",
            "He wants to cancel his subscription",
            "He saw the product online and wants more information",
            "He was referred by a colleague"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the price of the Growth Plan?",
        "options": [
            "$49 a month",
            "$99 a month",
            "$124 a month",
            "$149 a month"
        ],
        "correctIndex": 3
    },
    {
        "question": "What does Riley say about the free trial?",
        "options": [
            "You need to enter payment details to start",
            "It is available right now, no payment details needed",
            "It lasts 30 days",
            "It is only available to new companies"
        ],
        "correctIndex": 1
    },
    {
        "question": "When can Jake get access to the platform?",
        "options": [
            "Within 24 hours",
            "After he pays",
            "Immediately — Riley can set it up today",
            "At the start of next month"
        ],
        "correctIndex": 2
    },
    {
        "question": "How much is the annual rate for the Growth Plan?",
        "options": [
            "$99 a month",
            "$149 a month",
            "$119 a month",
            "$124 a month"
        ],
        "correctIndex": 3
    },
    {
        "question": "What does Riley check before ending the call?",
        "options": [
            "Whether Jake has a credit card",
            "Whether there are any current promotions",
            "Whether the Growth Plan is available",
            "Whether Jake's manager has approved the purchase"
        ],
        "correctIndex": 1
    },
    {
        "question": "How many days is the trial this month?",
        "options": [
            "7 days",
            "14 days",
            "21 days",
            "30 days"
        ],
        "correctIndex": 2
    },
    {
        "question": "How many users does the Growth Plan cover?",
        "options": [
            "Up to 10",
            "Up to 15",
            "Up to 20",
            "Up to 25"
        ],
        "correctIndex": 3
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the customer's question, then discuss which response (A, B, or C) is best. Choose your answer together, then click to see if you were right — and why.",
        "items": [
            {
                "customerLine": "How much is it?",
                "options": [
                    "It depends on what you need — can I ask you a few questions first?",
                    "The Starter Plan is $49 a month and the Growth Plan is $149 a month. Which sounds closer to what you need?",
                    "Let me send you our pricing page — everything is explained there."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It answers the question directly with real numbers, then immediately moves the conversation forward. A avoids the question — you can answer it now and ask follow-up questions after. C sends the customer away when you could just tell them."
            },
            {
                "customerLine": "Is the Growth Plan available right now?",
                "options": [
                    "Yes — it's available immediately. I can set up your trial today if you'd like.",
                    "Let me check and get back to you by email.",
                    "That's our most popular plan — most customers go for it."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It confirms availability, adds 'immediately', and offers a clear next step. B creates unnecessary delay when you already know the answer. C doesn't actually answer the question."
            },
            {
                "customerLine": "Do you offer a discount?",
                "options": [
                    "Discounts are only available for large enterprise accounts, I'm afraid.",
                    "We don't normally discount, but let me see what we can do.",
                    "Yes — if you pay annually, the rate works out at $124 a month instead of $149. That's a saving of $25 a month."
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It answers the question with a specific number and makes the saving feel real. A closes down the conversation before you know the customer's situation. B sounds uncertain when the answer is actually clear and straightforward."
            },
            {
                "customerLine": "Can you confirm the price before I share it with my manager?",
                "options": [
                    "Of course — the Growth Plan is $149 a month, or $124 a month if you pay annually. I can also send you a written summary to share with your manager.",
                    "Yes — let me send you a quote and you can pass it on.",
                    "Sure — the price is on our website if you want to double-check."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It confirms the price clearly, gives both options, and proactively offers to make the manager conversation easier. B delays the answer. C sends the customer to do the work themselves."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three customer profiles. As a group, decide which type of question each person is most likely to ask first. Think about what matters most to each customer. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "Tom",
                "description": "Tom is evaluating three different tools for his startup. He has a fixed budget and needs to decide quickly. The first thing he does when he visits any website is go straight to the pricing page.",
                "matchKey": "price"
            },
            {
                "name": "Yuki",
                "description": "Yuki's team has a product launch in two weeks and they urgently need a new project tool in place before it starts. She doesn't have time to wait — she needs to know if they can start using it today.",
                "matchKey": "access"
            },
            {
                "name": "Carlos",
                "description": "Carlos works in a company with strict IT policies. Before any software can be used, he needs to know if it meets their technical and security requirements. Price is not his first concern.",
                "matchKey": "available"
            }
        ],
        "options": [
            {
                "key": "price",
                "label": "Price questions",
                "description": "Questions like 'How much is it?', 'Do you offer a discount?', 'Can you confirm the annual rate?' The customer's first concern is whether the product fits their budget."
            },
            {
                "key": "access",
                "label": "Timeline & access questions",
                "description": "Questions like 'When can I get access?', 'Can we start today?', 'Is it available immediately?' The customer's first concern is speed — they need the product in place as quickly as possible."
            },
            {
                "key": "available",
                "label": "Availability & requirements questions",
                "description": "Questions like 'Is it available in our region?', 'Do you offer an API?', 'Can you confirm it works with our existing systems?' The customer's first concern is whether the product is suitable for their setup."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson's line has been cut off. As a group, discuss how you would finish it. Try to use phrases from this lesson like 'Let me check…', 'You can get access…', or 'If you pay annually…'. There is no single correct answer — compare your ideas, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "How much is the annual plan?",
                "salespersonStart": "If you pay annually, it works out at",
                "suggestedCompletion": "$124 a month — a saving of $25 compared to monthly billing. There is no contract, so you can cancel at any time if you need to."
            },
            {
                "customerLine": "Is the 14-day trial really free?",
                "salespersonStart": "Yes — it is completely free. No payment details are needed and you can",
                "suggestedCompletion": "cancel at any time. You get full access to all Growth Plan features during the trial, so you can try everything before you decide."
            },
            {
                "customerLine": "When can I get access?",
                "salespersonStart": "You can get access",
                "suggestedCompletion": "immediately — I can set up your account right now if you have five minutes. You will be up and running before the end of the call."
            },
            {
                "customerLine": "Do you have a plan for a team of 12 people?",
                "salespersonStart": "Yes — let me check the best option for your team size.",
                "suggestedCompletion": "The Growth Plan covers up to 25 users, so 12 fits comfortably. At $149 a month, that works out at just over $12 per person. Would you like me to send you the full breakdown?"
            }
        ]
    }
},
};
