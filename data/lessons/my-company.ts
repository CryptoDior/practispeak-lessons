import { Lesson } from '@/types/lesson';

export const myCompany: Lesson = {
  slug: 'my-company',
  title: 'My Company',
  subtitle: 'How to describe your organisation in a marketing context',
  level: 'A1-A2',
  description: 'Learn the words and phrases marketers use to describe their company — where it is based, how it is organised, and what sector it works in.',
  heroImage: '/images/my-company-hero.png',

  vocabulary: [
    {
      word: 'DEPARTMENT',
      partOfSpeech: 'noun',
      definition: 'A section of a company that has a specific job or area of work.',
      example: 'The marketing department is responsible for all campaigns and brand communications.',
      imageSlug: '/images/department.png',
    },
    {
      word: 'OFFICE',
      partOfSpeech: 'noun',
      definition: 'A place where people work, usually at desks.',
      example: 'Our office is in central London, close to the train station.',
      imageSlug: '/images/office.png',
    },
    {
      word: 'HEADQUARTERS',
      partOfSpeech: 'noun',
      definition: 'The main office where a company is based and managed from.',
      example: 'Our headquarters is in Manchester, but we have teams in other cities too.',
      imageSlug: '/images/headquarters.png',
    },
    {
      word: 'GLOBAL',
      partOfSpeech: 'adjective',
      definition: 'Working in or covering many countries around the world.',
      example: 'Brightline is a global company with clients in over 30 countries.',
      imageSlug: '/images/global.png',
    },
    {
      word: 'LOCAL',
      partOfSpeech: 'adjective',
      definition: 'In or near a specific place or area, not far away.',
      example: 'We started as a local business in Manchester before expanding nationally.',
      imageSlug: '/images/local.png',
    },
    {
      word: 'SECTOR',
      partOfSpeech: 'noun',
      definition: 'The area of business or industry that a company works in.',
      example: 'Brightline works in the technology sector, serving marketing and sales teams.',
      imageSlug: '/images/sector.png',
    },
    {
      word: 'STAFF',
      partOfSpeech: 'noun',
      definition: 'The people who work for a company.',
      example: 'We have around 200 staff across all our offices.',
      imageSlug: '/images/staff.png',
    },
    {
      word: 'LOCATION',
      partOfSpeech: 'noun',
      definition: 'A specific place where a company or office is based.',
      example: 'Our main location is in Manchester, with a second office in London.',
      imageSlug: '/images/location.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WE ARE BASED IN',
      definition: 'Say where your company is located.',
      example: 'We are based in Manchester, but we work with clients across the UK.',
      imageSlug: '/images/we-are-based-in.png',
    },
    {
      phrase: 'OUR HEAD OFFICE IS IN',
      definition: 'Say where the main office is.',
      example: "Our head office is in Manchester — that's where most of the senior team works.",
      imageSlug: '/images/our-head-office-is-in.png',
    },
    {
      phrase: 'WE HAVE OFFICES IN',
      definition: 'Say which cities or countries your company has locations in.',
      example: 'We have offices in London, Berlin, and Singapore.',
      imageSlug: '/images/we-have-offices-in.png',
    },
    {
      phrase: 'I WORK IN THE [X] DEPARTMENT',
      definition: 'Say which department or team you belong to.',
      example: 'I work in the marketing department — we handle all campaigns and brand content.',
      imageSlug: '/images/i-work-in-the-x-department.png',
    },
    {
      phrase: 'WE ARE A GLOBAL COMPANY',
      definition: 'Say that your company works internationally, across many countries.',
      example: 'We are a global company, so our campaigns need to work in many different markets.',
      imageSlug: '/images/we-are-a-global-company.png',
    },
    {
      phrase: 'WE WORK IN THE [X] SECTOR',
      definition: 'Say which industry or area of business your company operates in.',
      example: 'We work in the technology sector, specifically in marketing software.',
      imageSlug: '/images/we-work-in-the-x-sector.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Thanks for making time for this call, Riley. Can you tell me a bit about Brightline?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Of course. We are [[based in:say where your company is located]] Manchester — that's where our [[headquarters:the main office where a company is based and managed from]] is.",
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
      text: "Yes — we have [[offices:a place where people work, usually at desks]] in London and Berlin as well. We started as a [[local:in or near a specific place or area]] business, but we've grown a lot.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "So you're more of a global company now?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We're getting there — we now have clients in over 20 countries, so yes, we're becoming more [[global:working in or covering many countries around the world]].",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What [[sector:the area of business or industry that a company works in]] do you work in?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We're in the technology sector — specifically marketing software. Our product is used by marketing and sales [[department:a section of a company that has a specific job or area of work]]s all over the world.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'How many people work at Brightline?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We have around 250 [[staff:the people who work for a company]] in total across all our locations. I work in the marketing department — about 20 of us.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That's a decent size. And your main [[location:a specific place where a company or office is based]] is still Manchester?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's right — our head office is in Manchester. That's where the leadership team is based.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Great — it's helpful to understand the structure. I think there's a real fit here for what we're looking for.",
    }
  ],

  matchingExercise: [
    {
        "word": "DEPARTMENT",
        "definition": "A section of a company that has a specific job or area of work"
    },
    {
        "word": "OFFICE",
        "definition": "A place where people work, usually at desks"
    },
    {
        "word": "HEADQUARTERS",
        "definition": "The main office where a company is based and managed from"
    },
    {
        "word": "GLOBAL",
        "definition": "Working in or covering many countries around the world"
    },
    {
        "word": "LOCAL",
        "definition": "In or near a specific place or area, not far away"
    },
    {
        "word": "SECTOR",
        "definition": "The area of business or industry that a company works in"
    },
    {
        "word": "STAFF",
        "definition": "The people who work for a company"
    },
    {
        "word": "LOCATION",
        "definition": "A specific place where a company or office is based"
    }
],
  fillBlankExercise: [
    {
        "before": "The marketing",
        "after": "is responsible for all campaigns and brand communications.",
        "answer": "department"
    },
    {
        "before": "Our",
        "after": "is in central London, close to the train station.",
        "answer": "office"
    },
    {
        "before": "Our",
        "after": "is in Manchester, but we have teams in other cities too.",
        "answer": "headquarters"
    },
    {
        "before": "Brightline is a",
        "after": "company with clients in over 30 countries.",
        "answer": "global"
    },
    {
        "before": "We started as a",
        "after": "business in Manchester before expanding nationally.",
        "answer": "local"
    },
    {
        "before": "Brightline works in the technology",
        "after": ", serving marketing and sales teams.",
        "answer": "sector"
    },
    {
        "before": "We have around 200",
        "after": "across all our offices.",
        "answer": "staff"
    },
    {
        "before": "Our main",
        "after": "is in Manchester, with a second office in London.",
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
            "Finance",
            "Healthcare",
            "Technology",
            "Retail"
        ],
        "correctIndex": 2
    },
    {
        "question": "How many staff does Brightline have in total?",
        "options": [
            "Around 20",
            "Around 100",
            "Around 250",
            "Around 1,000"
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
        "question": "How did Brightline start out?",
        "options": [
            "As a global tech company",
            "As a local business in Manchester",
            "As a marketing agency in London",
            "As a joint venture with a US company"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the other person's question, then discuss which response (A, B, or C) is best. Choose your answer together, then click to see if you were right — and why.",
        "items": [
            {
                "customerLine": "Where is your company based?",
                "options": [
                    "We have an office.",
                    "We are based in Manchester — that's where our head office is, though we also have offices in London and Berlin.",
                    "We are in the north of England somewhere."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives the city, confirms it's the head office, and mentions other locations — all in a natural, confident sentence. A says almost nothing. C is vague and sounds uncertain, which does not make a good impression."
            },
            {
                "customerLine": "Is your company big?",
                "options": [
                    "Yes, we are quite big.",
                    "We have around 250 staff across three offices — we've grown a lot over the last few years.",
                    "I think so. We have many people."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a specific number and adds context about the company's growth. A is too vague to be useful. C also lacks specific information and sounds unconfident — not a great look when you're trying to build trust with a contact."
            },
            {
                "customerLine": "Do you only work in the UK?",
                "options": [
                    "No, we are a global company — we have clients in over 20 countries and offices in Berlin and Singapore.",
                    "We have some clients in other countries too.",
                    "It depends on the project."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It directly answers the question, uses the word 'global', and backs it up with specific facts. B is weak and gives no detail. C completely dodges the question, which could make the contact think you are unsure or hiding something."
            },
            {
                "customerLine": "What does your marketing department actually do?",
                "options": [
                    "We do many things in the department.",
                    "The marketing department handles everything to do with campaigns, brand content, and how we communicate with our market.",
                    "We are in charge of the company's marketing."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a clear and specific answer — campaigns, brand content, communications. A is vague and unhelpful. C says the same thing as the question in different words, which gives the listener no new information."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three people ask about Brightline. As a group, decide which description style fits each situation best. Use phrases from this lesson to explain your choices. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A quick LinkedIn message reply",
                "description": "Someone has replied to your LinkedIn post asking what Brightline does. You have 2-3 sentences to reply before they lose interest.",
                "matchKey": "short"
            },
            {
                "name": "A first discovery call",
                "description": "A marketing director at a retail company is on a 30-minute call with you. They want to understand the company before you talk about the product.",
                "matchKey": "structured"
            },
            {
                "name": "A casual introduction at an event",
                "description": "You are talking to someone at a networking event who has just asked 'so what does Brightline do exactly?' You have about a minute.",
                "matchKey": "story"
            }
        ],
        "options": [
            {
                "key": "short",
                "label": "Short and direct",
                "description": "One sentence on what the company does, one on where you're based. No extra detail. Best when you need to be quick and clear — long messages lose people."
            },
            {
                "key": "structured",
                "label": "Structured overview",
                "description": "Cover sector, size, locations, and departments in a logical order. Give the listener a clear picture of the company before moving to the product. Best when you have time and the person wants context."
            },
            {
                "key": "story",
                "label": "Brief company story",
                "description": "Start with where the company started, say how it has grown, and end with where it is now. Makes the company feel real and relatable. Best for casual conversations where a formal structure would feel stiff."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line has been cut off. As a group, discuss how you would finish it. Try to use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "Where exactly is your company based?",
                "salespersonStart": "Our headquarters is in Manchester, but we also have",
                "suggestedCompletion": "offices in London and Berlin. Most of the leadership team works from Manchester, but our client-facing teams are spread across all three locations."
            },
            {
                "customerLine": "How is the company organised?",
                "salespersonStart": "We have several departments — I work in marketing, but there's also",
                "suggestedCompletion": "a sales department, a product team, and a customer success team. Each department has its own focus, but we work closely together on big campaigns and product launches."
            },
            {
                "customerLine": "Is this a local company or do you work internationally?",
                "salespersonStart": "We started as a local business in Manchester, but we've grown into",
                "suggestedCompletion": "a global company with clients in over 20 countries. We still have strong roots in the UK, but our product is used by teams all over the world."
            },
            {
                "customerLine": "How many people work there?",
                "salespersonStart": "We have around 250 staff in total — about 20 of us are in the marketing",
                "suggestedCompletion": "department. We've grown quickly over the last few years, especially as we've opened more offices internationally."
            }
        ]
    }
},
};
