import { Lesson } from '@/types/lesson';

export const productsAndServices: Lesson = {
  slug: 'products-and-services',
  title: 'Products and Services',
  subtitle: 'How to name and describe what your company offers',
  level: 'A1-A2',
  description: "Learn the words and phrases marketers use to describe their company's products and services — what they are, what they do, and why they are useful.",
  heroImage: '/images/products-and-services-hero.png',

  vocabulary: [
    {
      word: 'PRODUCT',
      partOfSpeech: 'noun',
      definition: 'Something a company makes and sells.',
      example: 'Our main product is a marketing platform for small and medium-sized businesses.',
      imageSlug: '/images/product.png',
    },
    {
      word: 'SERVICE',
      partOfSpeech: 'noun',
      definition: 'Work done for a customer — not a physical thing, but help or support.',
      example: 'We also offer a support service to help clients set up and use the platform.',
      imageSlug: '/images/service.png',
    },
    {
      word: 'FEATURE',
      partOfSpeech: 'noun',
      definition: 'A part or quality of a product that makes it useful or attractive.',
      example: 'One of the best features is the dashboard — you can see all your campaigns in one place.',
      imageSlug: '/images/feature.png',
    },
    {
      word: 'QUALITY',
      partOfSpeech: 'noun',
      definition: 'How good or well-made something is.',
      example: 'Clients choose us because of the quality of the reports the platform produces.',
      imageSlug: '/images/quality.png',
    },
    {
      word: 'PRICE',
      partOfSpeech: 'noun',
      definition: 'How much something costs.',
      example: 'The price starts at £99 a month for the basic plan.',
      imageSlug: '/images/price.png',
    },
    {
      word: 'OFFER',
      partOfSpeech: 'verb',
      definition: 'To give someone the chance to have or use something.',
      example: 'We offer three different plans depending on the size of the team.',
      imageSlug: '/images/offer.png',
    },
    {
      word: 'RANGE',
      partOfSpeech: 'noun',
      definition: 'A set of different products or services from one company.',
      example: 'We have a range of plans to suit different budgets and team sizes.',
      imageSlug: '/images/range.png',
    },
    {
      word: 'SOLUTION',
      partOfSpeech: 'noun',
      definition: 'A product or service that solves a specific problem for a customer.',
      example: 'Our platform is a solution for teams who spend too much time switching between tools.',
      imageSlug: '/images/solution.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WE OFFER',
      definition: 'Tell someone what your company provides.',
      example: 'We offer a marketing platform and a set of support services to go with it.',
      imageSlug: '/images/we-offer.png',
    },
    {
      phrase: 'OUR MAIN PRODUCT IS',
      definition: 'Say which product is most important or most used.',
      example: 'Our main product is the Brightline platform — it helps teams manage all their marketing in one place.',
      imageSlug: '/images/our-main-product-is.png',
    },
    {
      phrase: 'ONE OF THE KEY FEATURES IS',
      definition: 'Highlight an important or useful part of your product.',
      example: 'One of the key features is the automated reporting — it saves teams hours every week.',
      imageSlug: '/images/one-of-the-key-features-is.png',
    },
    {
      phrase: 'IT IS GOOD VALUE FOR',
      definition: 'Say that something is worth its price.',
      example: 'Most clients tell us it is good value for the time it saves their team.',
      imageSlug: '/images/it-is-good-value-for.png',
    },
    {
      phrase: 'WE HAVE A RANGE OF',
      definition: 'Say that your company provides several different options.',
      example: 'We have a range of plans — from a starter option for small teams to an enterprise plan for large organisations.',
      imageSlug: '/images/we-have-a-range-of.png',
    },
    {
      phrase: 'THE PRICE STARTS AT',
      definition: 'Tell someone the lowest price for your product or service.',
      example: 'The price starts at £99 a month, but most teams move to the mid-tier plan pretty quickly.',
      imageSlug: '/images/the-price-starts-at.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So, what does Brightline actually [[offer:to give someone the chance to have or use something]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our main [[product:something a company makes and sells]] is a marketing platform — it helps teams plan, run, and track their campaigns in one place.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Do you also offer any services, or is it just the software?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We offer both. The platform is the core product, but we also provide an onboarding [[service:work done for a customer — not a physical thing, but help or support]] and ongoing support.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What are the main [[feature:a part or quality of a product that makes it useful or attractive]]s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'One of the key features is the campaign dashboard — you can see everything in one place. Another is the automated reporting, which saves a lot of time.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That does sound useful. What about [[quality:how good or well-made something is]] — how does it compare to other tools?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our clients consistently tell us the quality of the data and reports is better than what they used before. We invest a lot in that.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And what's the [[price:how much something costs]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The price starts at £99 a month. We have a [[range:a set of different products or services from one company]] of plans depending on your team size and the features you need.',
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
      text: "Most smaller teams tell us it's a great [[solution:a product or service that solves a specific problem for a customer]] for the price — especially once they stop paying for three or four separate tools.",
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
        "definition": "Something a company makes and sells"
    },
    {
        "word": "SERVICE",
        "definition": "Work done for a customer — not a physical thing, but help or support"
    },
    {
        "word": "FEATURE",
        "definition": "A part or quality of a product that makes it useful or attractive"
    },
    {
        "word": "QUALITY",
        "definition": "How good or well-made something is"
    },
    {
        "word": "PRICE",
        "definition": "How much something costs"
    },
    {
        "word": "OFFER",
        "definition": "To give someone the chance to have or use something"
    },
    {
        "word": "RANGE",
        "definition": "A set of different products or services from one company"
    },
    {
        "word": "SOLUTION",
        "definition": "A product or service that solves a specific problem for a customer"
    }
],
  fillBlankExercise: [
    {
        "before": "Our main",
        "after": "is a marketing platform for small and medium-sized businesses.",
        "answer": "product"
    },
    {
        "before": "We also offer a support",
        "after": "to help clients set up and use the platform.",
        "answer": "service"
    },
    {
        "before": "One of the best",
        "after": "s is the dashboard — you can see all your campaigns in one place.",
        "answer": "feature"
    },
    {
        "before": "Clients choose us because of the",
        "after": "of the reports the platform produces.",
        "answer": "quality"
    },
    {
        "before": "The",
        "after": "starts at £99 a month for the basic plan.",
        "answer": "price"
    },
    {
        "before": "We",
        "after": "three different plans depending on the size of the team.",
        "answer": "offer"
    },
    {
        "before": "We have a",
        "after": "of plans to suit different budgets and team sizes.",
        "answer": "range"
    },
    {
        "before": "Our platform is a",
        "after": "for teams who spend too much time switching between tools.",
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
            "An email newsletter tool"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does the campaign dashboard let you do?",
        "options": [
            "Send emails automatically",
            "Design logos",
            "See all your campaigns in one place",
            "Hire marketing staff"
        ],
        "correctIndex": 2
    },
    {
        "question": "What service does Brightline offer alongside the platform?",
        "options": [
            "Graphic design",
            "Onboarding and ongoing support",
            "TV advertising",
            "Market research"
        ],
        "correctIndex": 1
    },
    {
        "question": "What do clients say about the quality of Brightline's reports?",
        "options": [
            "They are too detailed",
            "They are hard to understand",
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
        "question": "Why do smaller teams say Brightline is good value?",
        "options": [
            "Because it is free to use",
            "Because it replaces three or four separate tools they were paying for",
            "Because it comes with a free trial",
            "Because the price goes down after six months"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana ask Riley to send after the call?",
        "options": [
            "A product demo video",
            "A list of client references",
            "A summary of the plans",
            "A price discount offer"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Brightline offer to help new clients get started?",
        "options": [
            "A free upgrade",
            "A dedicated account manager",
            "An onboarding service",
            "A printed user guide"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the client's question, then discuss which response (A, B, or C) is best. Choose your answer together, then click to see if you were right — and why.",
        "items": [
            {
                "customerLine": "What does your company actually sell?",
                "options": [
                    "We sell software.",
                    "Our main product is a marketing platform — it helps teams plan, run, and track all their campaigns in one place.",
                    "We have many products and services for different kinds of companies."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names the product clearly and says what it does for the customer — that's the key. A is too short and gives no detail. C sounds vague and avoids the question, which makes it harder for the client to understand what you actually do."
            },
            {
                "customerLine": "What makes your product different?",
                "options": [
                    "We are the best on the market.",
                    "One of the key features is the campaign dashboard — it puts everything in one place so teams stop switching between tools.",
                    "It has many good features that clients really like."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names a specific feature and links it to a real problem it solves — that's what makes a product stand out. A is a claim with no evidence. C is vague and tells the client nothing concrete about what makes the product useful."
            },
            {
                "customerLine": "How much does it cost?",
                "options": [
                    "It depends on a lot of things.",
                    "The price starts at £99 a month — we have a range of plans depending on your team size and the features you need.",
                    "It's very affordable compared to other tools."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a specific starting price and explains that different plans are available — it answers the question and opens the door to a deeper conversation. A avoids the question entirely. C makes a claim without giving any actual number, which clients find frustrating."
            },
            {
                "customerLine": "We already use a few different marketing tools. Would this replace them?",
                "options": [
                    "Yes, you should stop using your other tools.",
                    "It might — our platform brings everything into one place, which most clients find saves time and money compared to paying for several separate tools.",
                    "It's hard to say without knowing more."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It frames the product as a solution without being pushy — and it connects to a real benefit the client cares about. A is too direct and could feel like you're dismissing the tools they already trust. C is weak and unhelpful — it puts the work back on the client."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Three clients ask about Brightline's products. As a group, decide which description approach fits each situation best. Use phrases from this lesson to explain your choices. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A new contact at a trade show",
                "description": "Someone stops at your stand and asks what Brightline does. They are curious but in a hurry. You have about 30 seconds.",
                "matchKey": "hook"
            },
            {
                "name": "A client on a product demo call",
                "description": "A marketing manager has booked a 45-minute call to see the platform. They want to understand the features and pricing before making a decision.",
                "matchKey": "detail"
            },
            {
                "name": "A client comparing tools",
                "description": "A prospect says they are also looking at two other platforms. They want to know why Brightline is different.",
                "matchKey": "compare"
            }
        ],
        "options": [
            {
                "key": "hook",
                "label": "One-line product hook",
                "description": "Describe the main product in one sentence — what it is and what problem it solves. End with a question to find out if it's relevant to them. Best when time is short and you need to grab attention quickly."
            },
            {
                "key": "detail",
                "label": "Feature and pricing walkthrough",
                "description": "Take the client through the key features, explain what each one does, and finish with the range of plans and pricing. Best when the client is ready to evaluate the product seriously."
            },
            {
                "key": "compare",
                "label": "Solution-led comparison",
                "description": "Focus on what makes the product different — its quality, the problem it solves, and why clients switch to it. Use specific benefits instead of general claims. Best when the client is comparing options and needs a reason to choose you."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line has been cut off. As a group, discuss how you would finish it. Try to use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "Can you describe what the platform does?",
                "salespersonStart": "Of course — our main product is a marketing platform that helps teams",
                "suggestedCompletion": "plan, run, and track all their campaigns in one place. Instead of switching between five different tools, you have everything — scheduling, reporting, and analytics — in a single dashboard."
            },
            {
                "customerLine": "What's the most popular feature?",
                "salespersonStart": "Most clients say it's the automated reporting — one of the key features is that it",
                "suggestedCompletion": "generates a full campaign report at the end of each week without anyone having to do it manually. That alone saves most teams two to three hours every week."
            },
            {
                "customerLine": "Is it expensive?",
                "salespersonStart": "The price starts at £99 a month, and most clients tell us it's good value for",
                "suggestedCompletion": "the time it saves — especially if they were previously paying for three or four separate tools. We also have a range of plans, so you only pay for what you actually need."
            },
            {
                "customerLine": "We're a small team. Is this the right solution for us?",
                "salespersonStart": "Absolutely — we have a range of plans designed for smaller teams, and the starter plan offers all the",
                "suggestedCompletion": "core features you'd need to manage your campaigns and track your results. A lot of our clients start small and then upgrade as their team grows."
            }
        ]
    }
},
};
