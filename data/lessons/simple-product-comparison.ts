import { Lesson } from '@/types/lesson';

export const simpleProductComparison: Lesson = {
  slug: 'simple-product-comparison',
  title: 'Simple Product Comparison',
  subtitle: 'How to compare two products using bigger, cheaper, better, and more popular',
  level: 'A1-A2',
  description: 'When a customer cannot decide between two options, your job is to make the comparison clear and simple. This lesson teaches you how to use comparative language — bigger, cheaper, better, more popular — to help customers understand the difference and make the right choice.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/simple-product-comparison-hero.png',

  vocabulary: [
    {
      word: 'COMPARE',
      partOfSpeech: 'verb',
      definition: 'To look at two things to see how they are the same or different.',
      example: 'Let me compare these two laptops for you.',
      imageSlug: '/images/simple-product-comparison-compare.png',
    },
    {
      word: 'FEATURE',
      partOfSpeech: 'noun',
      definition: 'A special part of a product that makes it useful.',
      example: 'This calendar has a sync feature for your whole team.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/simple-product-comparison-feature.png',
    },
    {
      word: 'AFFORDABLE',
      partOfSpeech: 'adjective',
      definition: 'Not too expensive, so most people can pay for it.',
      example: 'This laptop is nice and affordable.',
      imageSlug: '/images/affordable.png',
    },
    {
      word: 'POPULAR',
      partOfSpeech: 'adjective',
      definition: 'Liked by many people.',
      example: 'This game is very popular with our customers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/simple-product-comparison-popular.png',
    },
    {
      word: 'ADVANCED',
      partOfSpeech: 'adjective',
      definition: 'Having more features or better technology than a simple one.',
      example: 'This advanced model has many extra tools.',
      imageSlug: '/images/advanced.png',
    },
    {
      word: 'BASIC',
      partOfSpeech: 'adjective',
      definition: 'Simple, with no extra parts.',
      example: 'The basic plan has only calls and texts.',
      imageSlug: '/images/basic.png',
    },
    {
      word: 'SUITED',
      partOfSpeech: 'adjective',
      definition: 'Right for a certain person or situation.',
      example: 'This laptop is well suited for your team.',
      imageSlug: '/images/suited.png',
    },
    {
      word: 'UPGRADE',
      partOfSpeech: 'verb',
      definition: 'To change to a better or newer version.',
      example: 'Do you want to upgrade to the Pro plan?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/upgrade.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS ONE IS [ADJECTIVE]-ER THAN THAT ONE',
      definition: 'Use this to compare two things with short adjectives by adding -er.',
      example: 'This laptop is cheaper than that one.',
      imageSlug: '/images/this-one-is-adjective-er-than-that-one.png',
    },
    {
      phrase: 'THIS ONE IS MORE [ADJECTIVE] THAN THAT ONE',
      definition: 'Use this to compare two things with longer adjectives by adding more.',
      example: 'This phone is more popular than that one.',
      imageSlug: '/images/this-one-is-more-adjective-than-that-one.png',
    },
    {
      phrase: 'THE MAIN DIFFERENCE IS',
      definition: 'Use this to tell the most important way two things are not the same.',
      example: 'The main difference is the price.',
      imageSlug: '/images/the-main-difference-is.png',
    },
    {
      phrase: 'BOTH PLANS INCLUDE',
      definition: 'Use this to say what two things both have.',
      example: 'Both plans include free delivery.',
      imageSlug: '/images/both-plans-include.png',
    },
    {
      phrase: 'IF YOU WANT [BENEFIT], THIS ONE IS BETTER',
      definition: 'Use this to match what a person wants with the best choice.',
      example: 'If you want a big screen, this one is better.',
      imageSlug: '/images/if-you-want-benefit-this-one-is-better.png',
    },
    {
      phrase: 'FOR YOUR TEAM, I WOULD RECOMMEND',
      definition: 'Use this to give your final advice to someone.',
      example: 'For your team, I would recommend the blue one.',
      imageSlug: '/images/for-your-team-i-would-recommend.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, I am looking at the Basic Plan and the Standard Plan. What is the difference?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Good question. Let me [[compare:to look at two things together to find the differences]] them for you.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'The Basic Plan is cheaper than the Standard Plan — it is $20 per user per month.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And the Standard Plan?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'The Standard Plan is $35 per user. It is more expensive, but it has more [[feature:a special part or quality of a product]]s.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Which one is more popular?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'The Standard Plan is more [[popular:liked or chosen by many people]] with teams like yours. Most of our customers choose it.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What is the main difference?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'The main difference is the reporting tools. The Standard Plan includes them — the Basic Plan does not. It is also more [[advanced:having more features or better technology]].',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'We definitely need the reporting tools. Our manager always asks for reports.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Then the Standard Plan is better for you. It is more [[suited:right or appropriate for a specific person or situation]] to a team your size.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Can we [[upgrade:to move to a better or more advanced version]] later if we start with the Basic Plan?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Yes, of course — you can upgrade at any time. But for your team, I would recommend starting with the Standard Plan.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Okay. I think the Standard Plan is the right choice. Let's go with that.",
    }
  ],

  matchingExercise: [
    {
        "word": "compare",
        "definition": "to look at two things together to find the differences"
    },
    {
        "word": "feature",
        "definition": "a special quality or part of a product"
    },
    {
        "word": "affordable",
        "definition": "not too expensive — most people can pay for it"
    },
    {
        "word": "popular",
        "definition": "liked or chosen by many people"
    },
    {
        "word": "advanced",
        "definition": "having more features or better technology"
    },
    {
        "word": "basic",
        "definition": "simple and without extra features"
    },
    {
        "word": "suited",
        "definition": "right or appropriate for a specific person or situation"
    },
    {
        "word": "upgrade",
        "definition": "to move to a better or more advanced version"
    }
],
  fillBlankExercise: [
    {
        "before": "Let me ",
        "after": " the two plans for you — they are very different.",
        "answer": "compare"
    },
    {
        "before": "The Standard Plan has more ",
        "after": "s, including reporting tools and priority support.",
        "answer": "feature"
    },
    {
        "before": "The Basic Plan is very ",
        "after": " — most small teams can afford it easily.",
        "answer": "affordable"
    },
    {
        "before": "The Standard Plan is more ",
        "after": " — most of our customers choose it.",
        "answer": "popular"
    },
    {
        "before": "This plan is more ",
        "after": " for a team your size — it has everything you need.",
        "answer": "suited"
    },
    {
        "before": "You can ",
        "after": " to a better plan at any time — it is very easy to do.",
        "answer": "upgrade"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Which plan is cheaper?",
        "options": [
            "The Standard Plan",
            "Both plans cost the same",
            "The Basic Plan"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which plan is more popular with customers?",
        "options": [
            "The Basic Plan",
            "The Standard Plan",
            "Neither — they are equally popular"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Marcus's team need?",
        "options": [
            "More storage",
            "Priority support",
            "Reporting tools"
        ],
        "correctIndex": 2
    },
    {
        "question": "Can Marcus upgrade from Basic to Standard later?",
        "options": [
            "No",
            "Yes, only after one year",
            "Yes, at any time"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "When you choose software or equipment at work, do you compare options before deciding? What do you look at?",
        "What is more important to you when comparing products — price, features, or popularity? Why?",
        "Have you ever chosen a cheaper option and then wished you had paid more? What happened?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "The Basic Plan is _____ than the Standard Plan.",
            "options": [
                "more cheap",
                "cheaper",
                "cheapest"
            ],
            "correctIndex": 1,
            "explanation": "Short adjectives (one syllable) use '-er' for comparisons — not 'more'. We say 'cheaper', 'bigger', 'faster'. 'More cheap' is incorrect. 'Cheapest' is the superlative — used for three or more things."
        },
        {
            "sentence": "The Standard Plan is _____ with teams of fifteen or more people.",
            "options": [
                "more popular",
                "popularer",
                "most popular"
            ],
            "correctIndex": 0,
            "explanation": "Longer adjectives (two or more syllables) use 'more' for comparisons. We say 'more popular', 'more advanced', 'more affordable'. 'Popularer' is not a word. 'Most popular' is the superlative."
        },
        {
            "sentence": "If you need reporting tools, the Standard Plan is _____ for you.",
            "options": [
                "good",
                "best",
                "better"
            ],
            "correctIndex": 2,
            "explanation": "'Better' is the comparative form of 'good' — used when comparing two things. 'Good' is not comparative. 'Best' is the superlative — used when comparing three or more things."
        },
        {
            "sentence": "The main _____ is the reporting tools — one plan has them, one does not.",
            "options": [
                "different",
                "difference",
                "differently"
            ],
            "correctIndex": 1,
            "explanation": "'Difference' is the noun — it is the thing that separates two options. 'Different' is an adjective. 'Differently' is an adverb. We say 'the main difference', not 'the main different'."
        },
        {
            "sentence": "Both plans _____ customer support and cloud storage.",
            "options": [
                "include",
                "have got",
                "contains"
            ],
            "correctIndex": 0,
            "explanation": "'Include' is the correct verb here — 'both plans include' is the natural phrase. 'Contains' does not agree with a plural subject. 'Have got' is too informal for a product comparison."
        },
        {
            "sentence": "You can _____ to the Standard Plan at any time.",
            "options": [
                "upgrade",
                "update",
                "change"
            ],
            "correctIndex": 0,
            "explanation": "'Upgrade' specifically means moving to a better or more advanced version. 'Update' means making something current or fixing something. 'Change' is too general and does not imply moving to something better."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "Which plan is better for a team of fifteen people?",
                "options": [
                    "Both plans are good — it depends on you.",
                    "The Standard Plan is better — it is more suited to larger teams and includes reporting tools.",
                    "It depends on your budget."
                ],
                "correctIndex": 1,
                "explanation": "Option B gives a clear, confident recommendation with a specific reason — exactly what a customer needs to make a decision. Option A is vague and unhelpful. Option C avoids the question without adding any value."
            },
            {
                "customerLine": "The Basic Plan looks cheaper. Why should I pay more?",
                "options": [
                    "Because the Standard Plan is more popular.",
                    "Price is not the most important thing.",
                    "The Standard Plan has more features — reporting tools and priority support. For your team, it is worth the extra cost."
                ],
                "correctIndex": 2,
                "explanation": "Option C explains the value clearly and connects it to the customer's situation — this is how you justify a higher price. Option A gives a reason but no real benefit. Option B dismisses the customer's concern, which can destroy trust."
            },
            {
                "customerLine": "Can I start with the Basic Plan and move to Standard later?",
                "options": [
                    "No, you need to choose your plan now and stay with it.",
                    "Yes, of course. You can upgrade at any time — it is very easy.",
                    "I am not sure — let me check with my manager."
                ],
                "correctIndex": 1,
                "explanation": "Option B reassures the customer and removes a barrier to buying. Option A creates false pressure — and is not even true. Option C is weak — a salesperson should always know the answer to this basic question."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Hi Kevin. I can help you compare our two plans today."
            },
            {
                "speaker": "Kevin",
                "text": "Great. Which one is more cheap?"
            },
            {
                "speaker": "Alex",
                "text": "The Basic Plan is cheaper — it is $20 per user."
            },
            {
                "speaker": "Kevin",
                "text": "And which is more better for a team of ten people?"
            },
            {
                "speaker": "Alex",
                "text": "The Standard Plan is better. It has more features."
            },
            {
                "speaker": "Kevin",
                "text": "What is the main different between them?"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "more cheap",
                "correction": "cheaper",
                "explanation": "Short adjectives use '-er' — not 'more'. We say 'cheaper', 'bigger', 'faster'. 'More cheap' is a common mistake but it is not correct in English."
            },
            {
                "lineIndex": 3,
                "incorrectText": "more better",
                "correction": "better",
                "explanation": "'Better' is already the comparative form of 'good'. Never add 'more' — 'more better' is a double comparative and is not correct. Just say 'better'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "different",
                "correction": "difference",
                "explanation": "'Different' is an adjective. 'Difference' is the noun — the thing that separates two options. We say 'the main difference', not 'the main different'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "What is the main difference between the two plans?",
                "salespersonStart": "The main difference is...",
                "suggestedCompletion": "the reporting tools. The Standard Plan includes them — the Basic Plan does not. If your team needs reports, the Standard Plan is better."
            },
            {
                "customerLine": "We need something affordable but with good features.",
                "salespersonStart": "Both plans include the core features, but if you want more...",
                "suggestedCompletion": "advanced tools like reporting and priority support, the Standard Plan is more suited to your needs — and it is still very affordable at $35 per user."
            },
            {
                "customerLine": "I think we will start with the Basic Plan for now.",
                "salespersonStart": "Of course — and remember, you can upgrade...",
                "suggestedCompletion": "at any time. Many teams start with Basic and move to Standard when they grow. I would recommend reviewing it in three months."
            }
        ]
    }
},
};
