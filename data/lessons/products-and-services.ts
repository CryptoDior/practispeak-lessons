import { Lesson } from '@/types/lesson';

export const productsAndServices: Lesson = {
  slug: 'products-and-services',
  title: 'Products and Services',
  subtitle: 'How to say what your company offers',
  level: 'A1-A2',
  description: "Learn simple words and phrases to talk about your company's products and services — what they are, what they do, and why they are useful.",
  heroImage: '/images/products-and-services-hero.png',

  vocabulary: [
    {
      word: 'PRODUCT',
      partOfSpeech: 'noun',
      definition: 'A thing that a company makes and sells.',
      example: 'Our main product is a tool for marketing teams.',
      imageSlug: '/images/products-and-services-product.png',
    },
    {
      word: 'SERVICE',
      partOfSpeech: 'noun',
      definition: 'Help or work that a company gives to a customer. It is not a physical thing.',
      example: 'We also offer a service to help clients use our product.',
      imageSlug: '/images/service.png',
    },
    {
      word: 'FEATURE',
      partOfSpeech: 'noun',
      definition: 'A part of a product that makes it good or useful.',
      example: 'One good feature is the dashboard. You can see all your work in one place.',
      imageSlug: '/images/products-and-services-feature.png',
    },
    {
      word: 'QUALITY',
      partOfSpeech: 'noun',
      definition: 'How good something is.',
      example: 'Our clients love the quality of our reports.',
      imageSlug: '/images/products-and-services-quality.png',
    },
    {
      word: 'PRICE',
      partOfSpeech: 'noun',
      definition: 'How much something costs.',
      example: 'The price is £99 a month for the basic plan.',
      imageSlug: '/images/products-and-services-price.png',
    },
    {
      word: 'OFFER',
      partOfSpeech: 'verb',
      definition: 'To say that someone can have or use something.',
      example: 'We offer three plans for different team sizes.',
      imageSlug: '/images/products-and-services-offer.png',
    },
    {
      word: 'RANGE',
      partOfSpeech: 'noun',
      definition: 'A group of different things from one company.',
      example: 'We have a range of plans. You can choose the right one for your team.',
      imageSlug: '/images/range.png',
    },
    {
      word: 'SOLUTION',
      partOfSpeech: 'noun',
      definition: 'A product or service that helps with a problem.',
      example: 'Our platform is a good solution for small teams.',
      imageSlug: '/images/products-and-services-solution.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WE OFFER',
      definition: 'Say what your company gives or sells to customers.',
      example: 'We offer a marketing platform and a support service to go with it.',
      imageSlug: '/images/we-offer.png',
    },
    {
      phrase: 'OUR MAIN PRODUCT IS',
      definition: 'Say which product is the most important one.',
      example: 'Our main product is the Brightline platform — it helps teams look after all their marketing in one place.',
      imageSlug: '/images/our-main-product-is.png',
    },
    {
      phrase: 'ONE OF THE KEY FEATURES IS',
      definition: 'Talk about an important or useful part of your product.',
      example: 'One of the key features is the reports — they save teams a lot of time.',
      imageSlug: '/images/one-of-the-key-features-is.png',
    },
    {
      phrase: 'IT IS GOOD VALUE FOR',
      definition: 'Say that something is worth the money.',
      example: 'Most clients say it is good value for the time it saves their team.',
      imageSlug: '/images/it-is-good-value-for.png',
    },
    {
      phrase: 'WE HAVE A RANGE OF',
      definition: 'Say that your company has many different options.',
      example: 'We have a range of plans — from a small starter plan to a big plan for large teams.',
      imageSlug: '/images/we-have-a-range-of.png',
    },
    {
      phrase: 'THE PRICE STARTS AT',
      definition: 'Say the lowest price for your product or service.',
      example: 'The price starts at £99 a month. Most teams move to a bigger plan later.',
      imageSlug: '/images/the-price-starts-at.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So, what does Brightline [[offer:to say that someone can have or use something]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our main [[product:a thing that a company makes and sells]] is a marketing platform. It helps teams plan, run, and track their campaigns in one place.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Do you also offer services, or is it just the software?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We offer both. The platform is the main product, but we also have a [[service:help or work that a company gives to a customer]] to help new clients get started.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What are the main [[feature:a part of a product that makes it good or useful]]s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'One of the key features is the campaign dashboard — you can see everything in one place. You can also get reports without doing any extra work.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That sounds useful. What about [[quality:how good something is]] — is it better than other tools?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our clients always tell us the quality of the data and reports is better than what they used before.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And what is the [[price:how much something costs]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The price starts at £99 a month. We have a [[range:a group of different things from one company]] of plans for different team sizes.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Is it good value for a small agency like ours?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — most small teams say it is a great [[solution:a product or service that helps with a problem]] for the price. They stop paying for three or four other tools.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That makes sense. Can you send me a summary of the plans after this call?',
    }
  ],

  matchingExercise: [
    {
        "word": "PRODUCT",
        "definition": "A thing that a company makes and sells"
    },
    {
        "word": "SERVICE",
        "definition": "Help or work that a company gives to a customer — not a physical thing"
    },
    {
        "word": "FEATURE",
        "definition": "A part of a product that makes it good or useful"
    },
    {
        "word": "QUALITY",
        "definition": "How good something is"
    },
    {
        "word": "PRICE",
        "definition": "How much something costs"
    },
    {
        "word": "OFFER",
        "definition": "To say that someone can have or use something"
    },
    {
        "word": "RANGE",
        "definition": "A group of different things from one company"
    },
    {
        "word": "SOLUTION",
        "definition": "A product or service that helps with a problem"
    }
],
  fillBlankExercise: [
    {
        "before": "Our main",
        "after": "is a tool for marketing teams.",
        "answer": "product"
    },
    {
        "before": "We also offer a",
        "after": "to help clients use our product.",
        "answer": "service"
    },
    {
        "before": "One good",
        "after": "is the dashboard. You can see all your work in one place.",
        "answer": "feature"
    },
    {
        "before": "Our clients love the",
        "after": "of our reports.",
        "answer": "quality"
    },
    {
        "before": "The",
        "after": "is £99 a month for the basic plan.",
        "answer": "price"
    },
    {
        "before": "We",
        "after": "three plans for different team sizes.",
        "answer": "offer"
    },
    {
        "before": "We have a",
        "after": "of plans. You can choose the right one for your team.",
        "answer": "range"
    },
    {
        "before": "Our platform is a good",
        "after": "for small teams.",
        "answer": "solution"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is Brightline's main product?",
        "options": [
            "A social media app",
            "A marketing platform",
            "A customer service tool",
            "An email tool"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does the campaign dashboard let you do?",
        "options": [
            "Send emails",
            "Make logos",
            "See all your campaigns in one place",
            "Hire marketing staff"
        ],
        "correctIndex": 2
    },
    {
        "question": "What service does Brightline offer?",
        "options": [
            "Graphic design",
            "Help to get started with the product",
            "TV advertising",
            "Market research"
        ],
        "correctIndex": 1
    },
    {
        "question": "What do clients say about the quality of Brightline's reports?",
        "options": [
            "They are too detailed",
            "They are hard to read",
            "They are better than what they used before",
            "They are good but expensive"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the starting price for Brightline?",
        "options": [
            "£49 a month",
            "£99 a month",
            "£199 a month",
            "£299 a month"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why do small teams say Brightline is good value?",
        "options": [
            "Because it is free",
            "Because it replaces three or four other tools",
            "Because it has a free trial",
            "Because the price goes down after six months"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana ask Riley to send after the call?",
        "options": [
            "A product video",
            "A list of clients",
            "A summary of the plans",
            "A discount offer"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Brightline offer to help new clients?",
        "options": [
            "A free upgrade",
            "A dedicated account manager",
            "A service to help them get started",
            "A printed guide"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the client's question. Talk about which answer (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "What does your company sell?",
                "options": [
                    "We sell software.",
                    "Our main product is a marketing platform — it helps teams plan, run, and track all their campaigns in one place.",
                    "We have many products and services for different kinds of companies."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names the product and says what it does for the client. A does not say enough. C does not tell the person what you actually sell."
            },
            {
                "customerLine": "What makes your product different?",
                "options": [
                    "We are the best on the market.",
                    "One of the key features is the campaign dashboard — it puts everything in one place so teams do not need to use many different tools.",
                    "It has many good features that clients really like."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names a feature and says what problem it solves. A makes a big claim but does not say why. C is too general — it does not tell the client anything useful."
            },
            {
                "customerLine": "How much does it cost?",
                "options": [
                    "It depends on a lot of things.",
                    "The price starts at £99 a month — we have a range of plans for different team sizes.",
                    "It is very low cost compared to other tools."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a real number and says that different plans are available. A does not answer the question. C makes a claim but does not give a price — clients find this frustrating."
            },
            {
                "customerLine": "We already use a few different marketing tools. Would this replace them?",
                "options": [
                    "Yes, you should stop using your other tools.",
                    "It might — our platform brings everything into one place. Most clients say it saves them time and money because they stop paying for many tools.",
                    "It is hard to say without knowing more."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It talks about a real benefit without being pushy. A is too direct and could make the client feel bad about their current tools. C does not help the client and puts the work back on them."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Three clients ask about Brightline's products. As a group, talk about which way to answer fits each situation. Use phrases from this lesson. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A new contact at a trade show",
                "description": "Someone stops at your stand and asks what Brightline does. They are interested but in a hurry. You have about 30 seconds.",
                "matchKey": "hook"
            },
            {
                "name": "A client on a product call",
                "description": "A marketing manager booked a 45-minute call to see the platform. They want to know about the features and the price before they decide.",
                "matchKey": "detail"
            },
            {
                "name": "A client looking at other tools",
                "description": "A client says they are also looking at two other platforms. They want to know why Brightline is different.",
                "matchKey": "compare"
            }
        ],
        "options": [
            {
                "key": "hook",
                "label": "One short sentence",
                "description": "Say what the product is and what problem it solves — in one sentence. Then ask a question. Best when you do not have much time."
            },
            {
                "key": "detail",
                "label": "Features and price",
                "description": "Show the key features, say what each one does, and then talk about the plans and price. Best when the client is ready to look at the product carefully."
            },
            {
                "key": "compare",
                "label": "Why choose us",
                "description": "Talk about what makes the product different — the quality, the problem it solves, and why clients move to it. Use real examples. Best when the client is looking at other options."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, talk about how you would finish it. Use words from this lesson. There is no one right answer — share your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "Can you tell me what the platform does?",
                "salespersonStart": "Of course — our main product is a marketing platform that helps teams",
                "suggestedCompletion": "plan, run, and track all their campaigns in one place. You do not need to use five different tools — everything is in one dashboard."
            },
            {
                "customerLine": "What is the most popular feature?",
                "salespersonStart": "Most clients say it is the reports — one of the key features is that it",
                "suggestedCompletion": "makes a full report at the end of each week. You do not have to do it yourself. That saves most teams two or three hours every week."
            },
            {
                "customerLine": "Is it expensive?",
                "salespersonStart": "The price starts at £99 a month. Most clients say it is good value for",
                "suggestedCompletion": "the time it saves — especially if they were paying for three or four tools before. We also have a range of plans, so you only pay for what you need."
            },
            {
                "customerLine": "We are a small team. Is this the right solution for us?",
                "salespersonStart": "Yes — we have plans for small teams, and the starter plan gives you all the",
                "suggestedCompletion": "main features you need to look after your campaigns and see your results. Many clients start with the small plan and move up as their team grows."
            }
        ]
    }
},
};
