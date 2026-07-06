import { Lesson } from '@/types/lesson';

export const goodBetterBest: Lesson = {
  slug: 'good-better-best',
  title: 'Good, Better, Best',
  subtitle: 'How to compare products and explain why yours is the right choice',
  level: 'A1-A2',
  description: 'In marketing, you often need to compare things — products, plans, and prices. This lesson teaches simple comparative language so you can explain clearly why your product is better, bigger, faster, or cheaper than the competition.',
  heroImage: '/images/good-better-best-hero.png',

  vocabulary: [
    {
      word: 'COMPARE',
      partOfSpeech: 'verb',
      definition: 'To look at two or more things and see how they are different.',
      example: 'Let me compare the two plans so you can see which one is right for you.',
      imageSlug: '/images/good-better-best-compare.png',
    },
    {
      word: 'BETTER',
      partOfSpeech: 'adjective',
      definition: "More good than something else. The comparative form of 'good'.",
      example: 'Our tool is better than the old one — it is faster and easier to use.',
      imageSlug: '/images/better.png',
    },
    {
      word: 'BEST',
      partOfSpeech: 'adjective',
      definition: "The most good of all — nothing is higher. The superlative form of 'good'.",
      example: 'I think the Standard Plan is the best option for a team your size.',
      imageSlug: '/images/best.png',
    },
    {
      word: 'BIGGER',
      partOfSpeech: 'adjective',
      definition: "Larger in size or number. The comparative form of 'big'.",
      example: 'The Premium Plan gives you a bigger storage limit — three times more than the Basic Plan.',
      imageSlug: '/images/bigger.png',
    },
    {
      word: 'FASTER',
      partOfSpeech: 'adjective',
      definition: "Working or moving more quickly. The comparative form of 'fast'.",
      example: 'Our platform is faster — pages load in under two seconds.',
      imageSlug: '/images/faster.png',
    },
    {
      word: 'CHEAPER',
      partOfSpeech: 'adjective',
      definition: "Costing less money. The comparative form of 'cheap'.",
      example: 'The Basic Plan is cheaper, but it still has all the key features you need.',
      imageSlug: '/images/cheaper.png',
    },
    {
      word: 'PREMIUM',
      partOfSpeech: 'adjective',
      definition: 'High quality — often more expensive than the standard option.',
      example: 'The Premium Plan is our top option — it has all the features and a premium support team.',
      imageSlug: '/images/premium.png',
    },
    {
      word: 'SUPERIOR',
      partOfSpeech: 'adjective',
      definition: 'Better than others, especially in quality.',
      example: 'Our customer support is superior — we answer all questions in under two hours.',
      imageSlug: '/images/good-better-best-superior.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'COMPARE [X] WITH [Y]',
      definition: 'To put two things side by side to see the differences between them.',
      example: 'Let me compare the Basic Plan with the Standard Plan so you can see what you get for the extra cost.',
      imageSlug: '/images/compare-x-with-y.png',
    },
    {
      phrase: '[X] IS BETTER THAN [Y]',
      definition: 'A simple, direct way to say one thing is superior to another.',
      example: 'Our tool is better than most alternatives because it is faster and much easier to set up.',
      imageSlug: '/images/x-is-better-than-y.png',
    },
    {
      phrase: 'STANDS OUT BECAUSE',
      definition: 'To explain why something is different and more noticeable than others.',
      example: 'Our product stands out because it combines three tools in one place — no need to switch between apps.',
      imageSlug: '/images/stands-out-because.png',
    },
    {
      phrase: 'WORTH THE PRICE',
      definition: 'To say a product gives good value for the amount it costs.',
      example: 'Yes, the Premium Plan costs more — but it is worth the price because of the time it saves you.',
      imageSlug: '/images/worth-the-price.png',
    },
    {
      phrase: 'COMES WITH MORE',
      definition: 'To say a product includes extra things that another product does not have.',
      example: 'The Standard Plan comes with more storage, more users, and more reporting features than the Basic.',
      imageSlug: '/images/comes-with-more.png',
    },
    {
      phrase: 'THE BEST CHOICE FOR',
      definition: 'To say one option is the most suitable for a specific person or situation.',
      example: 'I think the Standard Plan is the best choice for a team your size — it has everything you need.',
      imageSlug: '/images/the-best-choice-for.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, I am looking at two tools. One is cheaper but the other has more features. How do I [[compare:to look at two things and see how they are different]] them?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good question. Start with what is most important to you. Is it price, speed, or what the tool can do?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I think speed is the most important thing for us. We need it to be [[faster:working more quickly than something else]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Then let me compare the two for you. Tool A is [[cheaper:costing less money]] — it is fifty euros a month. But Tool B loads pages in one second. Tool A takes five seconds.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So Tool B is [[better:more good than something else]] for speed, but it costs more?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes. Tool B is [[superior:better than others in quality]] for speed and reporting. Tool A is fine for very small teams, but for a growing agency like yours, Tool B is the [[best:the most good of all]] choice.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about storage? Does Tool B have a [[bigger:larger in size or number]] limit?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — Tool B comes with more storage and more users included in the price. It stands out because it gives you everything in one place.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Is it worth the price difference?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I think so. The [[premium:high quality, often more expensive]] plan saves you time every week. When you add up the time you save, it is worth the price.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'You make it sound very clear. I think Tool B is the best choice for us.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I agree. And if you are not happy after thirty days, you can always switch. But I think you will love it.',
    }
  ],

  matchingExercise: [
    {
        "word": "COMPARE",
        "definition": "To look at two or more things and see how they are different"
    },
    {
        "word": "BETTER",
        "definition": "More good than something else — the comparative form of good"
    },
    {
        "word": "BEST",
        "definition": "The most good of all — the superlative form of good"
    },
    {
        "word": "BIGGER",
        "definition": "Larger in size or number — the comparative form of big"
    },
    {
        "word": "FASTER",
        "definition": "Working or moving more quickly — the comparative form of fast"
    },
    {
        "word": "CHEAPER",
        "definition": "Costing less money — the comparative form of cheap"
    },
    {
        "word": "PREMIUM",
        "definition": "High quality — often more expensive than the standard option"
    },
    {
        "word": "SUPERIOR",
        "definition": "Better than others, especially in quality"
    }
],
  fillBlankExercise: [
    {
        "before": "Let me",
        "after": "the two plans so you can see what you get for the extra cost.",
        "answer": "compare"
    },
    {
        "before": "Our tool is",
        "after": "than most alternatives because it is faster and easier to use.",
        "answer": "better"
    },
    {
        "before": "I think the Standard Plan is the",
        "after": "option for a team your size.",
        "answer": "best"
    },
    {
        "before": "The Premium Plan gives you a",
        "after": "storage limit — three times more than the Basic Plan.",
        "answer": "bigger"
    },
    {
        "before": "Our platform is",
        "after": "— pages load in under two seconds.",
        "answer": "faster"
    },
    {
        "before": "The Basic Plan is",
        "after": ", but it still has all the key features you need.",
        "answer": "cheaper"
    },
    {
        "before": "The",
        "after": "Plan is our top option — it has all features and a great support team.",
        "answer": "premium"
    },
    {
        "before": "Our customer support is",
        "after": "— we answer all questions in under two hours.",
        "answer": "superior"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client asks: Is Tool B really better than Tool A? What is the best response?",
        "options": [
            "Say: Yes, Tool B is better. It is the best one.",
            "Say: Tool B is faster and comes with more storage. For a growing team like yours, I think it is the better choice.",
            "Say: They are both good. It depends on what you want.",
            "Say: Tool A is cheaper. Most people choose that one."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says: Tool B is more expensive. Is it worth it? What do you say?",
        "options": [
            "Say: Yes, it is more expensive.",
            "Say: Price is not important. Quality is what matters.",
            "Say: I understand. But when you think about the time you save each week, it is worth the price. Most clients feel the same after one month.",
            "Say: We can give you a discount if you need one."
        ],
        "correctIndex": 2
    },
    {
        "question": "You want to explain why your product is different from competitors. What phrase do you use?",
        "options": [
            "Our product stands out because it combines three tools in one place.",
            "Our product is good and people like it.",
            "We are one of many good tools in the market.",
            "Our product is popular with customers."
        ],
        "correctIndex": 0
    },
    {
        "question": "A client asks: What is the difference between the Basic and Standard Plan? What do you say?",
        "options": [
            "Say: They are similar but the Standard is better.",
            "Say: Let me compare them for you. The Standard Plan comes with more storage, more users, and automatic reports — the Basic Plan does not have those.",
            "Say: The Standard is more expensive but most people choose it.",
            "Say: The Basic Plan is cheaper. The Standard Plan is better."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between 'better' and 'best'?",
        "options": [
            "They mean the same thing.",
            "Better compares two things. Best says something is the most good of all — nothing is higher.",
            "Best compares two things. Better says something is the most good of all.",
            "Better is for products. Best is for services."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client wants a plan with more features but a low budget. What is the best phrase?",
        "options": [
            "Say: The Standard Plan is the best choice for you.",
            "Say: Our plans are good value.",
            "Say: Based on your budget and what you need, the Basic Plus plan is the best choice for you — it comes with more features than Basic at a lower price than Standard.",
            "Say: You should spend more if you want more features."
        ],
        "correctIndex": 2
    },
    {
        "question": "Which sentence uses the comparative correctly?",
        "options": [
            "Tool B is more faster than Tool A.",
            "Tool B is faster than Tool A.",
            "Tool B is the faster of all the tools.",
            "Tool B fast more than Tool A."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'premium' mean in marketing?",
        "options": [
            "Free of charge",
            "The cheapest option available",
            "High quality — often the top tier, more expensive than the standard option",
            "A discount or special offer"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Do you compare prices or products before you buy something? What do you look at first?",
        "What makes one product better than another in marketing? Is it always price?",
        "Can you think of a product you think is the best in its category? Why do you think that?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "Our tool is _____ than the old one — it saves you two hours every week.",
            "options": [
                "good",
                "better",
                "best"
            ],
            "correctIndex": 1,
            "explanation": "When you compare two things, use the comparative form: better. Good is the base form. Best is the superlative — used when something is the most good of all, not just comparing two."
        },
        {
            "sentence": "I think the Standard Plan is the _____ option for a team your size.",
            "options": [
                "good",
                "better",
                "best"
            ],
            "correctIndex": 2,
            "explanation": "Best is the superlative form of good — it means nothing is higher. Use best when you are saying one thing is the top choice of all options, not just comparing two."
        },
        {
            "sentence": "Let me _____ the two plans for you so you can see the difference.",
            "options": [
                "compare",
                "comparing",
                "comparison"
            ],
            "correctIndex": 0,
            "explanation": "After 'let me', use the base form of the verb: compare. Comparing is a verb form used in continuous tenses (I am comparing). Comparison is a noun — you cannot say 'let me comparison'."
        },
        {
            "sentence": "The Premium Plan _____ with more storage, more users, and priority support.",
            "options": [
                "come",
                "comes",
                "coming"
            ],
            "correctIndex": 1,
            "explanation": "The subject is 'The Premium Plan' — singular. Use comes (third person singular). Come is used with I, you, we, they. Coming is the continuous form and needs a helper verb (is coming)."
        },
        {
            "sentence": "The Basic Plan is _____, but the Standard Plan has more features.",
            "options": [
                "cheap",
                "cheaper",
                "cheapest"
            ],
            "correctIndex": 1,
            "explanation": "You are comparing two things — Basic and Standard. Use the comparative form: cheaper. Cheap is the base form. Cheapest is the superlative — used when something is the least expensive of all options."
        },
        {
            "sentence": "Our support team is _____ — we answer every question in under one hour.",
            "options": [
                "superior",
                "more superior",
                "the most superior"
            ],
            "correctIndex": 0,
            "explanation": "Superior already means better than others — it is already a comparative idea. You do not add more or most with it. Just say: our support is superior."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each customer message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Customer says: I do not understand the difference between the Basic and Premium plan. They look the same to me.",
                "options": [
                    "Say: They are different. The Premium is better.",
                    "Say: Let me compare them for you. The Basic Plan has storage for five users and basic reports. The Premium Plan comes with bigger storage, more users, and automatic reports. For a growing team, the Premium is the better choice.",
                    "Say: Most people choose the Premium. It is our best plan."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It uses compare, gives specific details, and explains who the Premium is better for. A says it is better but does not explain why. C uses social proof without giving any useful information."
            },
            {
                "customerLine": "Customer says: Your tool is more expensive than the other one I am looking at.",
                "options": [
                    "Say: Yes, we are more expensive.",
                    "Say: I understand. But our tool is faster and comes with more features. It stands out because it saves your team around three hours a week. When you think about that, it is worth the price.",
                    "Say: We can make it cheaper for you."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It acknowledges the price difference, explains why the tool is better, and connects the value to time saved. A says nothing useful. C goes straight to a discount, which undervalues the product."
            },
            {
                "customerLine": "Customer says: Which plan do you think is best for a team of ten people?",
                "options": [
                    "Say: The Standard Plan is the best choice for your team size. It comes with up to fifteen users, more storage than the Basic, and it is the most popular plan for teams like yours.",
                    "Say: All our plans are good. It depends on your needs.",
                    "Say: I recommend the Premium Plan — it is our best one."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It gives a clear recommendation with reasons — team size, storage, and social proof. B avoids the question. C recommends Premium without knowing anything about the client's budget or needs."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this conversation. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Customer",
                "text": "Hi. Can you compare your two plans for me? I am not sure which is best."
            },
            {
                "speaker": "Salesperson",
                "text": "Of course. The Basic Plan is more cheaper — it is eighty euros a month."
            },
            {
                "speaker": "Customer",
                "text": "And the Standard Plan?"
            },
            {
                "speaker": "Salesperson",
                "text": "The Standard Plan is more better. It comes with bigger storage and more users."
            },
            {
                "speaker": "Customer",
                "text": "Is it worth the price?"
            },
            {
                "speaker": "Salesperson",
                "text": "Yes — it is the most superior plan we have. I think it is the good choice for your team."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "more cheaper",
                "correction": "cheaper",
                "explanation": "Cheaper is already a comparative adjective. Do not add more before it. With short adjectives like cheap, fast, big — just add -er. More is used with long adjectives like expensive → more expensive."
            },
            {
                "lineIndex": 3,
                "incorrectText": "more better",
                "correction": "better",
                "explanation": "Better is already the comparative form of good. Do not say more better — that is a double comparative and is incorrect. Just say: The Standard Plan is better."
            },
            {
                "lineIndex": 5,
                "incorrectText": "the most superior",
                "correction": "superior",
                "explanation": "Superior already means better than others — it is already a comparative idea. You do not add most before it. Just say: it is our superior plan, or better: it is our best plan."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Customer: Can you explain why your tool is better than the other one I am looking at?",
                "salespersonStart": "Of course. Let me compare them for you.",
                "suggestedCompletion": "Our tool is faster — pages load in one second. It also comes with more storage and more users included in the price. It stands out because it gives you everything in one place, without any extra apps."
            },
            {
                "customerLine": "Customer: The Premium Plan is too expensive for us right now.",
                "salespersonStart": "I understand. Have you looked at the Standard Plan?",
                "suggestedCompletion": "It is cheaper than the Premium, but it still comes with more features than the Basic — bigger storage, automatic reports, and up to fifteen users. I think it is the best choice for your team right now."
            },
            {
                "customerLine": "Customer: What makes your product stand out from the others?",
                "salespersonStart": "Our product stands out because",
                "suggestedCompletion": "it combines three tools in one place — reporting, scheduling, and analytics. Most tools only do one of those things. And our support team is superior — we answer every question in under two hours."
            }
        ]
    }
},
};
