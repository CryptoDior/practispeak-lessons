import { Lesson } from '@/types/lesson';

export const makingSimpleRecommendations: Lesson = {
  slug: 'making-simple-recommendations',
  title: 'Making Simple Recommendations',
  subtitle: 'How to suggest the right option to a customer in clear, confident English',
  level: 'A1-A2',
  description: 'A good salesperson does not just show products — they help customers choose. This lesson teaches simple, confident language for making recommendations: how to say what you think is the best option, why it is a good fit, and how to connect your suggestion to what the customer told you.',
  heroImage: '/images/making-simple-recommendations-hero.png',

  vocabulary: [
    {
      word: 'RECOMMEND',
      partOfSpeech: 'verb',
      definition: 'To say that something is a good choice for someone. When you recommend something, you give your professional opinion — not just information.',
      example: 'Marcus was not sure which plan to choose, so he asked Riley. She said: I recommend the Standard Plan for you — it has everything you need and it fits your budget.',
      imageSlug: '/images/recommend.png',
    },
    {
      word: 'SUGGEST',
      partOfSpeech: 'verb',
      definition: 'To give someone an idea or option to think about. Similar to recommend, but a little softer — you are offering an idea, not making a strong decision.',
      example: 'Riley did not want to be too direct, so she said: Can I suggest something? The Basic Plan might be a better starting point for your team — you can always upgrade later.',
      imageSlug: '/images/suggest.png',
    },
    {
      word: 'OPTION',
      partOfSpeech: 'noun',
      definition: 'One of the things you can choose from. When you have two or more things to pick from, each one is an option.',
      example: 'We have three options for you today: Basic, Standard, and Premium. Each one has different features and a different price. Let me explain each option so you can decide.',
      imageSlug: '/images/option.png',
    },
    {
      word: 'SUITABLE',
      partOfSpeech: 'adjective',
      definition: 'Right for what someone needs. If something is suitable, it fits the situation — it is not too much, not too little.',
      example: 'Marcus had a small team and a limited budget, so Riley looked at all the plans and said: The Basic Plan is the most suitable option for your situation right now.',
      imageSlug: '/images/suitable.png',
    },
    {
      word: 'PERFECT',
      partOfSpeech: 'adjective',
      definition: 'Exactly right for the situation — not just good, but the best possible match.',
      example: 'Riley listened to everything Marcus needed and then said: I think this plan is perfect for you. It covers everything you asked about and it is inside your budget.',
      imageSlug: '/images/perfect.png',
    },
    {
      word: 'MATCH',
      partOfSpeech: 'verb',
      definition: "To fit with what someone needs. When a product matches a customer's needs, it is the right product for them.",
      example: 'Marcus needed a tool for a team of five people. Riley showed him the Standard Plan and said: This one matches your team size and your budget exactly.',
      imageSlug: '/images/match.png',
    },
    {
      word: 'IDEAL',
      partOfSpeech: 'adjective',
      definition: 'The best possible choice for a specific situation. Similar to perfect, but often used when you are explaining why something is the best fit.',
      example: 'The Premium Plan has a lot of features, but Marcus only needed the basics. Riley said: For where you are right now, the Standard Plan is ideal — you get what you need without paying for things you will not use.',
      imageSlug: '/images/ideal.png',
    },
    {
      word: 'CHOICE',
      partOfSpeech: 'noun',
      definition: 'The decision you make when you pick one thing from several options. You can also say a good choice when you want to tell a customer they have decided well.',
      example: 'Marcus looked at the two plans for a few minutes and said: I think I want the Standard Plan. Riley smiled and said: That is a great choice — I think it is the right one for your team.',
      imageSlug: '/images/choice.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'I RECOMMEND THIS ONE',
      definition: 'The most direct way to make a recommendation. Clear, professional, and confident — you are giving your opinion as a salesperson, not just showing options.',
      example: 'Marcus asked Riley: Which plan do you think is better for us? Riley said: I recommend this one — the Standard Plan. It has the reporting tools you mentioned, and it fits your budget.',
      imageSlug: '/images/i-recommend-this-one.png',
    },
    {
      phrase: 'THIS IS A GOOD FIT FOR YOU',
      definition: "A friendly way to say a product matches the customer's needs. It sounds personal — you are connecting the product to this specific customer, not just describing it.",
      example: 'Riley listened to Marcus explain his team size, his budget, and what features he needed. Then she said: Based on all of that, I think this is a good fit for you. It covers everything you mentioned.',
      imageSlug: '/images/this-is-a-good-fit-for-you.png',
    },
    {
      phrase: 'HAVE YOU THOUGHT ABOUT',
      definition: 'A soft way to suggest something new. You are not saying the customer is wrong — you are opening a door to a different option they may not have considered.',
      example: 'Marcus said he wanted the Basic Plan. Riley asked: Have you thought about the Standard Plan? It is only a little more expensive, but it includes the reporting feature you said you need.',
      imageSlug: '/images/have-you-thought-about.png',
    },
    {
      phrase: 'BASED ON WHAT YOU TOLD ME',
      definition: 'A phrase that shows you listened to the customer. Before you make a recommendation, you connect it to something they said — this makes the recommendation feel personal and well-reasoned.',
      example: 'Marcus had told Riley that his biggest problem was saving time on reports. Riley said: Based on what you told me about reports, I think the Standard Plan is the right choice — it has automatic reporting built in.',
      imageSlug: '/images/based-on-what-you-told-me.png',
    },
    {
      phrase: 'THIS WOULD WORK WELL FOR',
      definition: 'A way to explain why a product suits a specific person or situation. Instead of just saying it is good, you say who it is good for.',
      example: 'Riley showed Marcus the Standard Plan and said: This would work well for a team your size. It is designed for five to fifteen people, so it fits exactly where you are right now.',
      imageSlug: '/images/this-would-work-well-for.png',
    },
    {
      phrase: 'MOST OF OUR CUSTOMERS IN YOUR SITUATION CHOOSE',
      definition: 'A phrase that uses social proof — you are telling the customer that others like them have already made this choice. It is reassuring and helps customers feel more confident in their decision.',
      example: 'Marcus was not sure which plan to pick. Riley said: Most of our customers in your situation choose the Standard Plan. It is the most popular option for teams of your size, and most of them are very happy with it.',
      imageSlug: '/images/most-of-our-customers-in-your-situation-choose.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Hi Riley. I looked at your website, but I am not sure which plan is right for us. We have five people on the team.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'No problem — let me help you choose. Can I ask a few questions first?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Of course.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'What is the most important thing for your team — saving time, better reports, or working with other tools?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Saving time, definitely. We spend too long on reports every week.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Okay, that is very helpful. And what is your monthly [[budget:the maximum amount of money you can spend]]?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'We can spend around two hundred euros a month.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Perfect. Based on what you told me, I [[recommend:to say that something is a good choice]] the Standard Plan. It has automatic reports, it works well for teams of five, and it is one hundred and eighty euros a month.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about the Basic Plan? It is cheaper.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The Basic Plan does not have automatic reports — you would still do them by hand. Based on what you told me about saving time, it is not a [[suitable:right for what someone needs]] [[option:one of the things you can choose from]] for you.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I see. So the Standard Plan is better for our situation.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes. This would work well for your team, and most of our customers in your situation choose it. I think it is the [[ideal:the best possible choice for a specific situation]] [[match:to fit with what someone needs]] for what you need.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Okay, I think you are right. The Standard Plan sounds like the right [[choice:the decision you make when you pick one thing]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Great [[choice:the decision you make when you pick one thing]]! I will send you all the details by email today.',
    }
  ],

  matchingExercise: [
    {
        "word": "RECOMMEND",
        "definition": "To say that something is a good choice for someone — giving your professional opinion, not just showing options"
    },
    {
        "word": "SUGGEST",
        "definition": "To give someone an idea or option to think about — softer than recommend, more like opening a door"
    },
    {
        "word": "OPTION",
        "definition": "One of the things you can choose from — when there are several plans or products, each one is this"
    },
    {
        "word": "SUITABLE",
        "definition": "Right for what someone needs — not too much, not too little, a good fit for the situation"
    },
    {
        "word": "PERFECT",
        "definition": "Exactly right — not just good, but the best possible match for this customer"
    },
    {
        "word": "MATCH",
        "definition": "To fit with what someone needs — when a product is right for a customer, it does this"
    },
    {
        "word": "IDEAL",
        "definition": "The best possible choice for a specific situation — used when you explain why something is the right fit"
    },
    {
        "word": "CHOICE",
        "definition": "The decision you make when you pick one thing from several options — also used to say someone decided well"
    }
],
  fillBlankExercise: [
    {
        "before": "Marcus was not sure which plan to pick. Riley said: Based on what you told me, I",
        "after": "the Standard Plan — it has everything you need.",
        "answer": "recommend"
    },
    {
        "before": "Riley did not want to be too direct. She said: Can I",
        "after": "something? The Basic Plan might be a better starting point.",
        "answer": "suggest"
    },
    {
        "before": "We have three plans. Let me explain each",
        "after": "so you can decide which one is right for you.",
        "answer": "option"
    },
    {
        "before": "Marcus had a small team and a limited budget. Riley said: The Basic Plan is the most",
        "after": "option for your situation right now.",
        "answer": "suitable"
    },
    {
        "before": "Riley listened to everything Marcus needed and said: I think this plan is",
        "after": "for you — it covers everything and it is inside your budget.",
        "answer": "perfect"
    },
    {
        "before": "Marcus needed a tool for five people. Riley said: This one",
        "after": "es your team size and your budget exactly.",
        "answer": "match"
    },
    {
        "before": "The Premium Plan has many features, but Marcus only needed the basics. Riley said: For where you are right now, the Standard Plan is",
        "after": "— you get what you need without paying for things you will not use.",
        "answer": "ideal"
    },
    {
        "before": "Marcus said: I think I want the Standard Plan. Riley said: That is a great",
        "after": "— I think it is the right one for your team.",
        "answer": "choice"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A customer says: I am not sure which plan is right for me. What do you say first?",
        "options": [
            "Say: The Premium Plan is the best one. You should choose that one.",
            "Say: Can I ask a few questions first? I want to understand what you need before I recommend anything.",
            "Say: All of our plans are good. They each have different features.",
            "Say: Most customers choose the Standard Plan. That is probably the right one for you."
        ],
        "correctIndex": 1
    },
    {
        "question": "A customer tells you their budget is 150 euros a month. The Standard Plan costs 180 euros. What do you say?",
        "options": [
            "Say: I recommend the Standard Plan — it is only a little over your budget.",
            "Say: The Standard Plan is 180 euros, but I think you should choose it anyway.",
            "Say: Based on what you told me about your budget, the Basic Plan is the most suitable option at 120 euros a month.",
            "Say: Unfortunately, we do not have anything for your budget."
        ],
        "correctIndex": 2
    },
    {
        "question": "You want to suggest a different option to a customer without making them feel they are wrong. What is the best phrase?",
        "options": [
            "Say: No, that is not the right option for you.",
            "Say: Have you thought about the Standard Plan? It has more features for a similar price.",
            "Say: I do not recommend that plan for you.",
            "Say: Most customers do not choose the Basic Plan."
        ],
        "correctIndex": 1
    },
    {
        "question": "You want to explain why a product is right for this specific customer. What phrase do you use?",
        "options": [
            "Say: This plan is very good.",
            "Say: This would work well for a team your size and your budget.",
            "Say: I think you will like this one.",
            "Say: This plan is popular with many customers."
        ],
        "correctIndex": 1
    },
    {
        "question": "A customer is nervous about choosing. You want to reassure them that others have made the same choice. What do you say?",
        "options": [
            "Say: Do not worry — all our plans are good.",
            "Say: Most of our customers in your situation choose the Standard Plan, and they are very happy with it.",
            "Say: I recommend this plan. It is a good choice.",
            "Say: You can always change your plan later if you want."
        ],
        "correctIndex": 1
    },
    {
        "question": "After a customer explains their needs, you want to make a recommendation that connects to what they said. What phrase helps you do this?",
        "options": [
            "Start with: I think that...",
            "Start with: Based on what you told me...",
            "Start with: In my opinion...",
            "Start with: All customers who need this should..."
        ],
        "correctIndex": 1
    },
    {
        "question": "A customer chooses a plan. You want to confirm it is a good decision. What do you say?",
        "options": [
            "Say: Okay, I will send you the contract.",
            "Say: Are you sure? The other plan is also good.",
            "Say: That is a great choice — I think it is the right one for your team.",
            "Say: Good. Most people choose that one."
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the difference between recommend and suggest?",
        "options": [
            "Recommend is for products. Suggest is for services.",
            "Recommend is more direct and confident. Suggest is softer — you are offering an idea, not making a strong statement.",
            "They have exactly the same meaning and you can always use them the same way.",
            "Recommend is formal. Suggest is informal. You should only use recommend in professional situations."
        ],
        "correctIndex": 1
    }
],
  pitchCorner: {
    "title": "Follow-Up Email",
    "context": "After speaking with Marcus, Riley sends him a short email with her recommendation. Read the email and fill in the missing words.",
    "passage": [
        {
            "before": "Hi Marcus,\n\nThank you for our conversation today. It was great to learn more about your team.\n\nBased on what you told me, I",
            "after": "the Standard Plan for your team. It has automatic reporting, which will save you time every week.",
            "answer": "recommend"
        },
        {
            "before": "I think this plan is a great",
            "after": "for a team of five people with your budget. It covers everything you need without paying for features you will not use.",
            "answer": "match"
        },
        {
            "before": "Most of our customers in your situation choose this plan — and I think it is the",
            "after": "option for where you are right now.\n\nLet me know if you have any questions. I am happy to help!\n\nBest wishes,\nRiley",
            "answer": "ideal"
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each customer message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Customer says: I am looking at the Basic Plan and the Standard Plan. I am not sure which one to pick.",
                "options": [
                    "Say: Both plans are good. It depends on what you need.",
                    "Say: Can I ask — what is the most important thing for your team? I want to make sure I recommend the right one.",
                    "Say: Most people choose the Standard Plan. I think you should pick that one."
                ],
                "correctIndex": 1,
                "explanation": "B is the best answer. Before you recommend anything, you need to understand what the customer needs. A is too vague — it does not help the customer decide. C uses social proof too early — you do not know if the Standard Plan is the right choice for this customer yet."
            },
            {
                "customerLine": "Customer says: I really like the Premium Plan, but it is a bit expensive for me.",
                "options": [
                    "Say: Yes, the Premium Plan is our best plan. Maybe you can increase your budget.",
                    "Say: I understand. Have you thought about the Standard Plan? It has many of the same features at a lower price.",
                    "Say: Unfortunately, the Premium Plan is our only good option for what you need."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Have you thought about is a soft, helpful way to suggest an alternative without making the customer feel bad. A tells the customer to spend more money — that is not helpful. C is negative and not true."
            },
            {
                "customerLine": "Customer says: Okay, I think I will take the Standard Plan.",
                "options": [
                    "Say: Are you sure? The Premium Plan is also a good option.",
                    "Say: That is a great choice! Based on what you told me, I think it is the right one for your team. I will send you the details today.",
                    "Say: Good. I will send you an invoice."
                ],
                "correctIndex": 1,
                "explanation": "B is the best answer. It confirms the customer's decision positively, connects it to their specific needs, and gives a clear next step. A creates doubt after the customer has already decided — not helpful. C is too cold and does not make the customer feel good about their choice."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this conversation. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Customer",
                "text": "Hi. I need help choosing a plan. We are a team of eight people."
            },
            {
                "speaker": "Salesperson",
                "text": "No problem! Can I ask — what is your price?"
            },
            {
                "speaker": "Customer",
                "text": "Around three hundred euros a month."
            },
            {
                "speaker": "Salesperson",
                "text": "Okay. Based on what I told you, I recommend the Standard Plan. It works well for teams of your size."
            },
            {
                "speaker": "Customer",
                "text": "Is it inside my budget?"
            },
            {
                "speaker": "Salesperson",
                "text": "Yes — it is two hundred and fifty euros. I think it is a perfect match for your needs. Most of our products in your situation choose this plan."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "what is your price?",
                "correction": "what is your budget?",
                "explanation": "Price is what a product costs. Budget is how much money a customer can spend. To ask about money, say: What is your budget?"
            },
            {
                "lineIndex": 3,
                "incorrectText": "Based on what I told you",
                "correction": "Based on what you told me",
                "explanation": "This phrase shows you listened to the customer. The customer gave you the information — not the other way around. Always say: Based on what you told me."
            },
            {
                "lineIndex": 5,
                "incorrectText": "Most of our products in your situation choose this plan.",
                "correction": "Most of our customers in your situation choose this plan.",
                "explanation": "Products cannot choose — customers do. The correct phrase is: Most of our customers in your situation choose this plan."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Customer: I need a plan for a team of ten people, and I can spend up to two hundred euros a month.",
                "salespersonStart": "Based on what you told me,",
                "suggestedCompletion": "I recommend the Standard Plan. It is designed for teams of up to fifteen people, and it is one hundred and eighty euros a month — inside your budget."
            },
            {
                "customerLine": "Customer: I am looking at the Basic Plan because it is cheap.",
                "salespersonStart": "Have you thought about",
                "suggestedCompletion": "the Standard Plan? It is a little more expensive, but it has automatic reports — which saves a lot of time every week. I think it is a better fit for most teams."
            },
            {
                "customerLine": "Customer: I am not sure. There are too many options.",
                "salespersonStart": "Most of our customers in your situation choose",
                "suggestedCompletion": "the Standard Plan. It is the most popular option for teams of five to fifteen people, and most of them are very happy with it. I think it would work well for you too."
            }
        ]
    }
},
};
