import { Lesson } from '@/types/lesson';

export const myCompany: Lesson = {
  slug: 'my-company',
  title: 'My Company',
  subtitle: 'How to talk about your company in a marketing context',
  level: 'A1-A2',
  description: 'Learn simple words and phrases to say where your company is, how big it is, and what kind of work it does.',
  heroImage: '/images/my-company-hero.png',

  vocabulary: [
    {
      word: 'DEPARTMENT',
      partOfSpeech: 'noun',
      definition: 'A part of a company. Each part has a different job.',
      example: 'I work in the marketing department. We look after all the campaigns.',
      imageSlug: '/images/department.png',
    },
    {
      word: 'OFFICE',
      partOfSpeech: 'noun',
      definition: 'A place where people work.',
      example: 'Our office is in Manchester city centre.',
      imageSlug: '/images/office.png',
    },
    {
      word: 'HEADQUARTERS',
      partOfSpeech: 'noun',
      definition: 'The main office of a company.',
      example: 'Our headquarters is in Manchester. That is where the main team works.',
      imageSlug: '/images/headquarters.png',
    },
    {
      word: 'GLOBAL',
      partOfSpeech: 'adjective',
      definition: 'In or for many countries.',
      example: 'Brightline is a global company. It has clients in many countries.',
      imageSlug: '/images/global.png',
    },
    {
      word: 'LOCAL',
      partOfSpeech: 'adjective',
      definition: 'In or near one place or area — not far away.',
      example: 'We started as a local company in Manchester.',
      imageSlug: '/images/local.png',
    },
    {
      word: 'SECTOR',
      partOfSpeech: 'noun',
      definition: 'The type of work a company does. For example: technology, food, or health.',
      example: 'Brightline works in the technology sector.',
      imageSlug: '/images/sector.png',
    },
    {
      word: 'STAFF',
      partOfSpeech: 'noun',
      definition: 'The people who work for a company.',
      example: 'We have about 250 staff in our company.',
      imageSlug: '/images/staff.png',
    },
    {
      word: 'LOCATION',
      partOfSpeech: 'noun',
      definition: 'The place where a company or office is.',
      example: 'Our main location is in Manchester.',
      imageSlug: '/images/location.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WE ARE BASED IN',
      definition: 'Say where your company is.',
      example: 'We are based in Manchester, but we work with clients all over the UK.',
      imageSlug: '/images/we-are-based-in.png',
    },
    {
      phrase: 'OUR HEAD OFFICE IS IN',
      definition: 'Say where the main office is.',
      example: 'Our head office is in Manchester — that is where most of the team works.',
      imageSlug: '/images/our-head-office-is-in.png',
    },
    {
      phrase: 'WE HAVE OFFICES IN',
      definition: 'Say which cities or countries your company has offices in.',
      example: 'We have offices in London, Berlin, and Singapore.',
      imageSlug: '/images/we-have-offices-in.png',
    },
    {
      phrase: 'I WORK IN THE [X] DEPARTMENT',
      definition: 'Say which part of the company you work in.',
      example: 'I work in the marketing department — we look after all campaigns and content.',
      imageSlug: '/images/i-work-in-the-x-department.png',
    },
    {
      phrase: 'WE ARE A GLOBAL COMPANY',
      definition: 'Say that your company works in many countries.',
      example: 'We are a global company — our clients are in many different countries.',
      imageSlug: '/images/we-are-a-global-company.png',
    },
    {
      phrase: 'WE WORK IN THE [X] SECTOR',
      definition: 'Say what type of work your company does.',
      example: 'We work in the technology sector — we make software for marketing teams.',
      imageSlug: '/images/we-work-in-the-x-sector.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Thanks for the call, Riley. Can you tell me a bit about Brightline?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. We are based in Manchester — that is where our [[headquarters:the main office of a company]] is.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And do you have other offices?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we have [[offices:places where people work]] in London and Berlin too. We started as a [[local:in or near one place or area]] company, but we have grown a lot.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So you are more of a global company now?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we now have clients in over 20 countries, so we are becoming more [[global:in or for many countries]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What [[sector:the type of work a company does]] do you work in?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We are in the technology sector. Our product is used by marketing [[department:a part of a company — each part has a different job]]s all over the world.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'How many people work there?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We have about 250 [[staff:the people who work for a company]] in total. I work in the marketing department — about 20 of us.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And your main [[location:the place where a company or office is]] is still Manchester?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's right. Our head office is in Manchester. That is where the main team works.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Great — it's good to know more about the company. I think this could be a good fit for us.",
    }
  ],

  matchingExercise: [
    {
        "word": "DEPARTMENT",
        "definition": "A part of a company — each part has a different job"
    },
    {
        "word": "OFFICE",
        "definition": "A place where people work"
    },
    {
        "word": "HEADQUARTERS",
        "definition": "The main office of a company"
    },
    {
        "word": "GLOBAL",
        "definition": "In or for many countries"
    },
    {
        "word": "LOCAL",
        "definition": "In or near one place or area — not far away"
    },
    {
        "word": "SECTOR",
        "definition": "The type of work a company does"
    },
    {
        "word": "STAFF",
        "definition": "The people who work for a company"
    },
    {
        "word": "LOCATION",
        "definition": "The place where a company or office is"
    }
],
  fillBlankExercise: [
    {
        "before": "I work in the marketing",
        "after": ". We look after all the campaigns.",
        "answer": "department"
    },
    {
        "before": "Our",
        "after": "is in Manchester city centre.",
        "answer": "office"
    },
    {
        "before": "Our",
        "after": "is in Manchester. That is where the main team works.",
        "answer": "headquarters"
    },
    {
        "before": "Brightline is a",
        "after": "company. It has clients in many countries.",
        "answer": "global"
    },
    {
        "before": "We started as a",
        "after": "company in Manchester.",
        "answer": "local"
    },
    {
        "before": "Brightline works in the technology",
        "after": ".",
        "answer": "sector"
    },
    {
        "before": "We have about 250",
        "after": "in our company.",
        "answer": "staff"
    },
    {
        "before": "Our main",
        "after": "is in Manchester.",
        "answer": "location"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Where is Brightline's headquarters?",
        "options": [
            "London",
            "Berlin",
            "Manchester",
            "Singapore"
        ],
        "correctIndex": 2
    },
    {
        "question": "How many countries does Brightline have clients in?",
        "options": [
            "Over 5",
            "Over 10",
            "Over 20",
            "Over 50"
        ],
        "correctIndex": 2
    },
    {
        "question": "What sector does Brightline work in?",
        "options": [
            "Food",
            "Health",
            "Technology",
            "Retail"
        ],
        "correctIndex": 2
    },
    {
        "question": "How many staff does Brightline have in total?",
        "options": [
            "About 20",
            "About 100",
            "About 250",
            "About 1,000"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which department does Riley work in?",
        "options": [
            "Sales",
            "Finance",
            "Operations",
            "Marketing"
        ],
        "correctIndex": 3
    },
    {
        "question": "How many people are in Riley's department?",
        "options": [
            "About 5",
            "About 20",
            "About 50",
            "About 100"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which cities have a Brightline office?",
        "options": [
            "Manchester, Paris, New York",
            "Manchester, London, Berlin",
            "London, Dublin, Amsterdam",
            "Manchester, Glasgow, Edinburgh"
        ],
        "correctIndex": 1
    },
    {
        "question": "How did Brightline start?",
        "options": [
            "As a big global company",
            "As a local business in Manchester",
            "As a marketing agency in London",
            "As a US company"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question. Talk about which answer (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "Where is your company based?",
                "options": [
                    "We have an office.",
                    "We are based in Manchester — that is where our head office is. We also have offices in London and Berlin.",
                    "We are somewhere in the north of England."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says the city, says it is the head office, and tells them about other offices too. A says almost nothing. C is not clear and does not sound confident."
            },
            {
                "customerLine": "Is your company big?",
                "options": [
                    "Yes, we are quite big.",
                    "We have about 250 staff across three offices — we have grown a lot in the last few years.",
                    "I think so. We have many people."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a number and says the company has grown. A is not helpful — it does not give any information. C also does not give enough information and does not sound sure."
            },
            {
                "customerLine": "Do you only work in the UK?",
                "options": [
                    "No — we are a global company. We have clients in over 20 countries and offices in Berlin too.",
                    "We have some clients in other countries.",
                    "It depends on the project."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It says 'global', gives a number, and says where the offices are. B does not give enough information. C does not answer the question — it sounds like you do not know."
            },
            {
                "customerLine": "What does your marketing department do?",
                "options": [
                    "We do many things.",
                    "The marketing department looks after all our campaigns, content, and how we talk to our clients.",
                    "We are in charge of marketing for the company."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives clear examples — campaigns, content, and client communication. A says nothing useful. C just says the same thing as the question in different words."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three people ask about Brightline. As a group, talk about which way to answer fits each situation. Use phrases from this lesson. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A quick LinkedIn reply",
                "description": "Someone replied to your LinkedIn post and asked what Brightline does. You have 2 or 3 sentences.",
                "matchKey": "short"
            },
            {
                "name": "A first call",
                "description": "A marketing manager is on a 30-minute call with you. They want to know about the company before you talk about the product.",
                "matchKey": "structured"
            },
            {
                "name": "A casual chat at an event",
                "description": "You are talking to someone at an event. They ask 'so what does Brightline do?' You have about one minute.",
                "matchKey": "story"
            }
        ],
        "options": [
            {
                "key": "short",
                "label": "Short and simple",
                "description": "One sentence about what the company does. One sentence about where it is based. No extra information. Best when you need to be quick."
            },
            {
                "key": "structured",
                "label": "Step by step",
                "description": "Talk about the sector, size, offices, and departments one by one. Give the person a clear picture of the company. Best when you have time and the person wants to know more."
            },
            {
                "key": "story",
                "label": "A short story",
                "description": "Start with where the company started. Say how it has grown. End with where it is now. Best for a casual chat where a list of facts would feel too formal."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, talk about how you would finish it. Use words from this lesson. There is no one right answer — share your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "Where exactly is your company?",
                "salespersonStart": "Our headquarters is in Manchester, but we also have",
                "suggestedCompletion": "offices in London and Berlin. Most of the main team is in Manchester, but we have people working across all three locations."
            },
            {
                "customerLine": "How is the company set up?",
                "salespersonStart": "We have a few departments — I work in marketing, but there is also",
                "suggestedCompletion": "a sales team, a product team, and a team that looks after our clients. Each department has its own job, but we work together on big campaigns."
            },
            {
                "customerLine": "Is this a local company or do you work in other countries?",
                "salespersonStart": "We started as a local business in Manchester, but now we are",
                "suggestedCompletion": "a global company with clients in over 20 countries. We still have our roots in the UK, but our product is used by teams all over the world."
            },
            {
                "customerLine": "How many people work there?",
                "salespersonStart": "We have about 250 staff in total — about 20 of us are in the marketing",
                "suggestedCompletion": "department. We have grown a lot in the last few years, and we now have staff in three countries."
            }
        ]
    }
},
};
