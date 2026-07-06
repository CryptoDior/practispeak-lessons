import { Lesson } from '@/types/lesson';

export const talkingAboutProducts: Lesson = {
  slug: 'talking-about-products',
  title: 'Talking About Products',
  subtitle: 'Simple nouns and adjectives sales people use to describe what they sell',
  level: 'A1-A2',
  description: 'Learn the simple nouns and adjectives sales professionals use to describe products — like feature, quality, design, cheap, new, popular, and useful — when talking with customers.',
  heroImage: '/images/talking-about-products-hero.png',

  vocabulary: [
    {
      word: 'FEATURE',
      partOfSpeech: 'noun',
      definition: 'A part of a product that makes it useful or special.',
      example: 'One of our best features is the calendar that syncs with your team automatically.',
      imageSlug: '/images/talking-about-products-feature.png',
    },
    {
      word: 'QUALITY',
      partOfSpeech: 'noun',
      definition: 'How good or bad something is.',
      example: 'Customers often mention the quality of our support team.',
      imageSlug: '/images/talking-about-products-quality.png',
    },
    {
      word: 'DESIGN',
      partOfSpeech: 'noun',
      definition: 'The way something looks and works.',
      example: 'We updated the design last year to make it easier to use.',
      imageSlug: '/images/talking-about-products-design.png',
    },
    {
      word: 'BRAND',
      partOfSpeech: 'noun',
      definition: "The name and image of a company's products.",
      example: 'Brightline is a well-known brand in project management software.',
      imageSlug: '/images/talking-about-products-brand.png',
    },
    {
      word: 'CHEAP',
      partOfSpeech: 'adjective',
      definition: 'Costing little money.',
      example: 'Our starter plan is cheap enough for small teams just getting started.',
      imageSlug: '/images/cheap.png',
    },
    {
      word: 'NEW',
      partOfSpeech: 'adjective',
      definition: 'Made or introduced recently.',
      example: 'We just launched a new tool for tracking deadlines.',
      imageSlug: '/images/talking-about-products-new.png',
    },
    {
      word: 'POPULAR',
      partOfSpeech: 'adjective',
      definition: 'Liked or used by a lot of people.',
      example: 'The mobile app has become really popular with our customers.',
      imageSlug: '/images/talking-about-products-popular.png',
    },
    {
      word: 'USEFUL',
      partOfSpeech: 'adjective',
      definition: 'Helpful; does a good job.',
      example: 'The reminder tool is useful for teams that juggle a lot of projects.',
      imageSlug: '/images/useful.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'ONE OF THE BEST FEATURES IS',
      definition: 'Point out a part of a product that you think customers will like most.',
      example: 'One of the best features is the calendar that syncs automatically.',
      imageSlug: '/images/one-of-the-best-features-is.png',
    },
    {
      phrase: 'IT COMES WITH',
      definition: "Tell someone what's included with a product.",
      example: 'It comes with a free trial and full customer support.',
      imageSlug: '/images/talking-about-products-it-comes-with.png',
    },
    {
      phrase: 'WHAT MAKES IT DIFFERENT IS',
      definition: 'Explain what sets a product apart from others.',
      example: 'What makes it different is how easy it is for non-technical teams to use.',
      imageSlug: '/images/what-makes-it-different-is.png',
    },
    {
      phrase: 'CUSTOMERS REALLY LIKE',
      definition: 'Share what people enjoy most about a product.',
      example: 'Customers really like how quickly our support team responds.',
      imageSlug: '/images/customers-really-like.png',
    },
    {
      phrase: 'COMPARED TO OTHER OPTIONS',
      definition: 'Use this when explaining how a product is better or different from alternatives.',
      example: 'Compared to other options, our pricing is hard to beat.',
      imageSlug: '/images/compared-to-other-options.png',
    },
    {
      phrase: "I'D RECOMMEND",
      definition: 'Suggest something to someone based on what they need.',
      example: "For a team your size, I'd recommend starting with the basic plan.",
      imageSlug: '/images/id-recommend.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "So, Dana — since you're exploring Brightline for your team, let me walk you through a few [[features:a part of a product that makes it useful or special]] I think you'll like.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Perfect, I'd love that. What would you say is the best one?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Honestly, the [[design:the way something looks and works]] is what most people notice first — it's clean and easy to learn.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That matters a lot for my team — half of them aren't very technical.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's exactly why it's become so [[popular:liked or used by a lot of people]] with small agencies like yours.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And how's the [[quality:how good or bad something is]] of the support, if something ever goes wrong?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Really strong — most questions get answered within the hour. We just released a [[new:made or introduced recently]] live-chat option too.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That's reassuring. Is it [[cheap:costing little money]] enough for a team our size?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Our starter plan is actually one of the most affordable from any [[brand:the name and image of a company's products]] in this space.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Good to know. And would the reminder tool be [[useful:helpful; does a good job]] for a small team like mine?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Definitely — it's one of the things customers mention most when they tell us why they stay.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Sounds like exactly what we need. Let's set up a trial.",
    }
  ],

  matchingExercise: [
    {
        "word": "FEATURE",
        "definition": "A part of a product that makes it useful or special"
    },
    {
        "word": "QUALITY",
        "definition": "How good or bad something is"
    },
    {
        "word": "DESIGN",
        "definition": "The way something looks and works"
    },
    {
        "word": "BRAND",
        "definition": "The name and image of a company's products"
    },
    {
        "word": "CHEAP",
        "definition": "Costing little money"
    },
    {
        "word": "NEW",
        "definition": "Made or introduced recently"
    },
    {
        "word": "POPULAR",
        "definition": "Liked or used by a lot of people"
    },
    {
        "word": "USEFUL",
        "definition": "Helpful; does a good job"
    }
],
  fillBlankExercise: [
    {
        "before": "One of the best",
        "after": "is the calendar that syncs with your team automatically.",
        "answer": "feature"
    },
    {
        "before": "Customers often mention the",
        "after": "of our support team.",
        "answer": "quality"
    },
    {
        "before": "We updated the",
        "after": "last year to make it easier to use.",
        "answer": "design"
    },
    {
        "before": "Brightline is a well-known",
        "after": "in project management software.",
        "answer": "brand"
    },
    {
        "before": "Our starter plan is",
        "after": "enough for small teams just getting started.",
        "answer": "cheap"
    },
    {
        "before": "We just launched a",
        "after": "tool for tracking deadlines.",
        "answer": "new"
    },
    {
        "before": "The mobile app has become really",
        "after": "with our customers.",
        "answer": "popular"
    },
    {
        "before": "The reminder tool is",
        "after": "for teams that juggle a lot of projects.",
        "answer": "useful"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley want to show Dana?",
        "options": [
            "The company's pricing history",
            "A few standout features of the product",
            "A list of competitors",
            "The company's office"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana say about her team?",
        "options": [
            "They work remotely",
            "Half of them aren't very technical",
            "They are all new employees",
            "They use a competitor's product"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say people notice first about the product?",
        "options": [
            "The price",
            "The design",
            "The logo",
            "The name"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why has the product become popular with small agencies, according to Riley?",
        "options": [
            "It's the cheapest on the market",
            "It's clean and easy to learn",
            "It has the most features",
            "It was recently redesigned"
        ],
        "correctIndex": 1
    },
    {
        "question": "What new option did Riley mention?",
        "options": [
            "A mobile app",
            "A live-chat support option",
            "A loyalty program",
            "A free upgrade"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana ask about regarding the price?",
        "options": [
            "Whether there's a free version",
            "Whether it's affordable for a team her size",
            "Whether the price will increase",
            "Whether they offer discounts for agencies"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley describe the starter plan?",
        "options": [
            "It's the most popular plan",
            "It's one of the most affordable options around",
            "It's only for large companies",
            "It comes with the fewest features"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana decide to do at the end of the conversation?",
        "options": [
            "Ask for a discount",
            "Set up a trial",
            "Talk to her team first",
            "Compare other brands"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the customer's line, then discuss which response (A, B, or C) is best. Choose your answer together, then click to see if you were right — and why.",
        "items": [
            {
                "customerLine": "What's the most popular option?",
                "options": [
                    "They're all popular — it really depends on what you need.",
                    "Our Growth Plan is the most popular with small agencies — it has all the features most teams use every day.",
                    "I'd have to check our latest sales figures to be sure."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It answers confidently and gives a specific reason why that option is popular. A avoids the question. C sounds unsure, which will make the customer less confident in you and your product."
            },
            {
                "customerLine": "How is your brand different from the competition?",
                "options": [
                    "We're basically the same as the others, but cheaper.",
                    "I'm not really sure how we compare to other brands.",
                    "We're a well-known brand, but what makes us different is the design — it's the easiest tool in its category to learn."
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It leads with brand strength and follows with a concrete, specific differentiator. A undersells the product and sounds unprofessional. B shows a lack of product knowledge that will lose the customer's confidence."
            },
            {
                "customerLine": "Is this a new product or has it been around a while?",
                "options": [
                    "We've been on the market for five years and just launched a new feature last month — so it's proven but always improving.",
                    "It's quite new, so there might be a few small issues still.",
                    "I think it's been around for a while — I'd have to check."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It combines reliability (five years on the market) with freshness (new feature just launched). B creates unnecessary doubt. C sounds unprepared."
            },
            {
                "customerLine": "Why should I pay more when cheaper options exist?",
                "options": [
                    "Honestly, the cheaper options are not very good.",
                    "The quality of our support and the design are what make the difference — customers really like how much time it saves them.",
                    "We can probably match the price if you need us to."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It justifies the price with specific, customer-focused benefits. A criticises competitors, which looks unprofessional. C jumps straight to a discount before explaining any value, which weakens your position."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Brightline has three products, not just one. Read the customer descriptions and decide which product fits each one best. Use phrases from this lesson — like 'It helps you…' and 'It is designed for…' — to explain your choices. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": 'Leo',
                "description": "Leo runs a 4-person photography studio. He needs a simple way to track jobs and send invoices. He doesn't need reporting or team features — just a clean tool that does the basics well.",
                "matchKey": 'tasks'
            },
            {
                "name": 'Nina',
                "description": 'Nina manages a 20-person sales team. She needs to track deals, see how each rep is performing, and share weekly reports with her manager. She needs more than basic task management.',
                "matchKey": 'crm'
            },
            {
                "name": 'Marcus',
                "description": "Marcus is Head of Operations at a company with 200 staff across three offices. He needs the tool to connect with their existing HR and finance software. Off-the-shelf products don't fit — he needs something built to their exact workflow.",
                "matchKey": 'custom'
            }
        ],
        "options": [
            {
                "key": 'tasks',
                "label": 'Brightline Essentials',
                "description": 'Project tracking, invoicing, and file sharing. Up to 5 users. Designed for small teams or freelancers who need a clean, simple tool without extra complexity.'
            },
            {
                "key": 'crm',
                "label": 'Brightline Pro',
                "description": 'Everything in Essentials plus deal tracking, customer management, and live reporting. Up to 30 users. Designed for growing teams that need to track performance and manage customer relationships.'
            },
            {
                "key": 'custom',
                "label": 'Brightline Connect',
                "description": 'Custom integrations with your existing tools, unlimited users, and a dedicated account team. Designed for large organisations that need a fully tailored solution.'
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson's line has been cut off. As a group, discuss how you would finish it. Try to use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "We've been using the same tool for years — I want something more modern.",
                "salespersonStart": "That's a great time to upgrade. One of our most popular new features is",
                "suggestedCompletion": "a real-time dashboard that shows exactly what your team is working on. The design is completely updated — most customers say it feels much faster to use."
            },
            {
                "customerLine": "Is the quality really as good as you say?",
                "salespersonStart": "That's a fair question. Customers really like",
                "suggestedCompletion": "the quality of our support team — most questions are answered within the hour. We also have a 30-day trial, so you can see for yourself before you commit."
            },
            {
                "customerLine": "I'm worried it might be too complicated for my team.",
                "salespersonStart": "I understand — the design is actually what most people mention first. It's",
                "suggestedCompletion": "built to be clean and easy to learn. Most teams are up and running within a day, even the ones who are not very technical."
            },
            {
                "customerLine": "What makes your brand stand out from the others?",
                "salespersonStart": "What makes us different is that we focus on",
                "suggestedCompletion": "combining useful features with a design that is genuinely easy to learn. A lot of tools make you choose between powerful and simple — we think you should have both."
            }
        ]
    }
},
};
