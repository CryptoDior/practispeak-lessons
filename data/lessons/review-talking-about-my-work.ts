import { Lesson } from '@/types/lesson';

export const reviewTalkingAboutMyWork: Lesson = {
  slug: 'review-talking-about-my-work',
  title: 'Review: Talking About My Work',
  subtitle: 'Consolidation lesson — practise all A1 vocabulary by talking about yourself and your work',
  level: 'A1-A2',
  description: 'This consolidation lesson brings together all the key vocabulary from your A1 lessons. You will practise introducing yourself, describing your company, talking about what you sell, and answering common questions in English — everything you need for a confident two-minute self-introduction.',
  heroImage: '/images/review-talking-about-my-work-hero.png',

  vocabulary: [
    {
      word: 'INTRODUCE',
      partOfSpeech: 'verb',
      definition: 'To tell someone your name and basic information about yourself for the first time.',
      example: 'Let me introduce myself — I am Riley, and I am the head of marketing at MarketBridge.',
      imageSlug: '/images/introduce.png',
    },
    {
      word: 'ROLE',
      partOfSpeech: 'noun',
      definition: 'Your job or position in a company — what you are responsible for.',
      example: 'My role is to manage all digital marketing activities and develop new client relationships.',
      imageSlug: '/images/role.png',
    },
    {
      word: 'SPECIALIZE',
      partOfSpeech: 'verb',
      definition: 'To focus on one particular area, service, or type of customer — to be an expert in something specific.',
      example: 'We specialize in B2B marketing for technology and professional services companies.',
      imageSlug: '/images/specialize.png',
    },
    {
      word: 'RESPONSIBLE',
      partOfSpeech: 'adjective',
      definition: 'In charge of something — when something is your job or duty.',
      example: 'Dana is responsible for all client communications and new business development.',
      imageSlug: '/images/responsible.png',
    },
    {
      word: 'EXPERIENCE',
      partOfSpeech: 'noun',
      definition: 'The knowledge and skill you have gained by doing something over time.',
      example: 'Riley has ten years of experience in B2B marketing — she has worked in three different countries.',
      imageSlug: '/images/experience.png',
    },
    {
      word: 'BASED',
      partOfSpeech: 'adjective',
      definition: 'Located in a particular city or country — where a person or company is permanently situated.',
      example: 'We are based in London but we work with clients across Europe, the US, and Asia.',
      imageSlug: '/images/based.png',
    },
    {
      word: 'SECTOR',
      partOfSpeech: 'noun',
      definition: 'A specific area or industry within the economy — for example, the technology sector or the finance sector.',
      example: 'We work mainly in the technology sector — our clients are SaaS companies and IT service providers.',
      imageSlug: '/images/sector.png',
    },
    {
      word: 'GOAL',
      partOfSpeech: 'noun',
      definition: 'Something you want to achieve — a target or aim for the future.',
      example: 'Our goal this year is to expand into three new European markets and double our client base.',
      imageSlug: '/images/goal.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WORK WITH [SOMEONE/SOMETHING]',
      definition: 'To collaborate with someone, or to use something as part of your job.',
      example: 'I work with B2B companies to help them grow their LinkedIn presence and generate leads.',
      imageSlug: '/images/work-with-someonesomething.png',
    },
    {
      phrase: 'LOOK AFTER [CLIENTS/ACCOUNTS]',
      definition: 'To be responsible for managing and taking care of clients or accounts.',
      example: 'I look after twelve client accounts — I am their main point of contact for everything.',
      imageSlug: '/images/look-after-clientsaccounts.png',
    },
    {
      phrase: 'FOCUS ON [SOMETHING]',
      definition: 'To give most of your attention and effort to a specific area or task.',
      example: 'In my role, I focus mainly on content strategy and LinkedIn marketing.',
      imageSlug: '/images/focus-on-something.png',
    },
    {
      phrase: 'DEAL WITH [SOMETHING]',
      definition: 'To handle or manage a situation, task, or type of work.',
      example: 'I deal with new client enquiries — if someone contacts us, I am usually the first person they speak to.',
      imageSlug: '/images/deal-with-something.png',
    },
    {
      phrase: 'TAKE CARE OF [SOMETHING]',
      definition: "To manage or be responsible for something — similar to 'look after'.",
      example: 'In my team, I take care of all the reporting — I send clients their monthly results every first Monday.',
      imageSlug: '/images/take-care-of-something.png',
    },
    {
      phrase: 'BUILD UP [SOMETHING]',
      definition: 'To develop or grow something over time through consistent effort.',
      example: 'Over the last two years, we have built up a strong network of contacts in the DACH region.',
      imageSlug: '/images/build-up-something.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Okay, Tom — you have a networking event next week. Let us practise your [[introduce:to tell someone your name and basic information]] tion. Start from the beginning.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Okay. Hi, I am Tom Chen. I am the marketing director at TechFlow. We are a software company [[based:located in a particular city or country]] in Berlin.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Good start. Now say what [[sector:a specific area or industry]] you work in and who your clients are.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] We work in the technology [[sector:a specific area or industry]] — our clients are mid-sized companies in manufacturing and logistics who need software to manage their operations.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Perfect. Now say something about your [[role:your job or position in a company]] — what are you [[responsible:in charge of something]] for?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] My [[role:your job or position]] is to manage all marketing activities — I look after our LinkedIn, email campaigns, and trade fair [[presence:the degree to which a company is known and active]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Very good. Can you add something about your [[experience:knowledge and skill gained over time]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] I have eight years of [[experience:knowledge and skill gained over time]] in B2B marketing — I [[specialize:to focus on one particular area]] in digital channels, especially LinkedIn.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Excellent. Now finish with your [[goal:something you want to achieve]] — what do you want to achieve this year?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Our [[goal:something you want to achieve]] is to build our brand in the UK market and generate more inbound leads without increasing our sales headcount.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That is a great two-minute introduction. Clear, specific, and confident. Let us do it one more time, faster — you want it to feel natural, not practised.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Okay — I think I am ready. Thank you Dana — this is exactly what I needed.',
    }
  ],

  matchingExercise: [
    {
        "word": "INTRODUCE",
        "definition": "To tell someone your name and basic information about yourself for the first time"
    },
    {
        "word": "ROLE",
        "definition": "Your job or position in a company — what you are responsible for"
    },
    {
        "word": "SPECIALIZE",
        "definition": "To focus on one particular area or type of customer — to be an expert in something specific"
    },
    {
        "word": "RESPONSIBLE",
        "definition": "In charge of something — when something is your job or duty"
    },
    {
        "word": "EXPERIENCE",
        "definition": "The knowledge and skill you have gained by doing something over time"
    },
    {
        "word": "BASED",
        "definition": "Located in a particular city or country — where a person or company is permanently situated"
    },
    {
        "word": "SECTOR",
        "definition": "A specific area or industry within the economy — for example, technology or finance"
    },
    {
        "word": "GOAL",
        "definition": "Something you want to achieve — a target or aim for the future"
    }
],
  fillBlankExercise: [
    {
        "before": "Let me",
        "after": "myself — I am Riley, head of marketing at MarketBridge.",
        "answer": "introduce"
    },
    {
        "before": "My",
        "after": "is to manage all digital marketing activities and develop new client relationships.",
        "answer": "role"
    },
    {
        "before": "We",
        "after": "in B2B marketing for technology and professional services companies.",
        "answer": "specialize"
    },
    {
        "before": "Dana is",
        "after": "for all client communications and new business development.",
        "answer": "responsible"
    },
    {
        "before": "Riley has ten years of",
        "after": "in B2B marketing — she has worked in three different countries.",
        "answer": "experience"
    },
    {
        "before": "We are",
        "after": "in London but we work with clients across Europe, the US, and Asia.",
        "answer": "based"
    },
    {
        "before": "We work mainly in the technology",
        "after": "— our clients are SaaS companies and IT service providers.",
        "answer": "sector"
    },
    {
        "before": "Our",
        "after": "this year is to expand into three new European markets and double our client base.",
        "answer": "goal"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Which sentence is the best way to start a two-minute self-introduction?",
        "options": [
            "Hello. I work in marketing. It is nice to meet you.",
            "Hi, I am Tom Chen — I am the marketing director at TechFlow, a B2B software company based in Berlin.",
            "Hi. My name is Tom. I have worked in marketing for a long time. We have many clients.",
            "Hello — do you want to know about my company?"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between your 'role' and your 'sector'?",
        "options": [
            "They are the same — both describe your job.",
            "Your role is your job or position in a company. Your sector is the industry your company operates in.",
            "Your role is where you are based. Your sector is what you sell.",
            "Your role is your goal. Your sector is your experience."
        ],
        "correctIndex": 1
    },
    {
        "question": "A colleague says: 'I am responsible for new business development.' What does this mean?",
        "options": [
            "They help existing clients with their work.",
            "They are in charge of finding and winning new clients for the company.",
            "They manage the company's marketing budget.",
            "They look after the company's website."
        ],
        "correctIndex": 1
    },
    {
        "question": "When should you mention your 'experience' in a self-introduction?",
        "options": [
            "Only if someone specifically asks you about it.",
            "After you say your role — it adds credibility and shows why you are good at what you do.",
            "At the beginning — it is the most important thing.",
            "Only in a formal job interview, not at a networking event."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which is the best way to describe your goal in a self-introduction?",
        "options": [
            "Our goal is to make a lot of money this year.",
            "Our goal this year is to build our brand in the UK market and generate more inbound leads — without increasing our sales headcount.",
            "We do not have a specific goal yet — we are still planning.",
            "Our goal is to be the best marketing agency in the world."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'we specialize in B2B marketing' mean?",
        "options": [
            "The company does all kinds of marketing and is very general.",
            "The company focuses specifically on marketing for businesses that sell to other businesses.",
            "The company only works with very large companies.",
            "The company is the only one that does B2B marketing."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the best length for a networking self-introduction?",
        "options": [
            "As long as possible — give all the details so people understand everything.",
            "About one to two minutes — enough to say who you are, what you do, and why it matters. Leave room for questions.",
            "Just ten seconds — just your name and your company.",
            "Five minutes — you need time to cover your experience and goals properly."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which phrase best connects your role to the value you offer?",
        "options": [
            "I manage marketing.",
            "I manage all digital marketing activities — I help our clients grow their presence on LinkedIn and generate leads.",
            "Marketing is my job.",
            "I do marketing for our company."
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "If someone asked 'Tell me about yourself and your work' — what would you say in English? Try it now.",
        "What vocabulary from the last eight lessons do you remember? Try to list ten words without looking.",
        "What is the hardest part about talking about your work in English? What do you most want to improve?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence about yourself or your work. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "Hi, I am Dana — let me _____ myself. I am the head of business development at MarketBridge.",
            "options": [
                "explain",
                "introduce",
                "describe"
            ],
            "correctIndex": 1,
            "explanation": "Introduce means to tell someone your name and basic information for the first time. Explain means to make something clearer. Describe means to say what something is like. 'Let me introduce myself' is the standard English phrase at the start of a professional introduction."
        },
        {
            "sentence": "My _____ is to manage all client relationships and make sure every project delivers results.",
            "options": [
                "goal",
                "role",
                "sector"
            ],
            "correctIndex": 1,
            "explanation": "Role is your job or position — what you are responsible for. Goal is something you want to achieve. Sector is the industry you work in. 'My role is to...' is the clearest way to explain what you do in a professional context."
        },
        {
            "sentence": "We are _____ in Berlin, but we have clients across Europe and North America.",
            "options": [
                "specialized",
                "based",
                "responsible"
            ],
            "correctIndex": 1,
            "explanation": "Based means located in a particular city or country. Specialized means focused on one area. Responsible means in charge of something. 'We are based in [city]' is the standard phrase for saying where a company is located."
        },
        {
            "sentence": "We _____ in LinkedIn marketing for B2B companies — that is our main area of expertise.",
            "options": [
                "specialize",
                "focus",
                "expand"
            ],
            "correctIndex": 0,
            "explanation": "Specialize means to be an expert in a specific area. Focus means to give attention to something. Expand means to grow into new areas. 'We specialize in' is the most professional way to describe what a company does best — it signals expertise."
        },
        {
            "sentence": "I have eight years of _____ in B2B marketing — mainly in digital channels and content strategy.",
            "options": [
                "sector",
                "role",
                "experience"
            ],
            "correctIndex": 2,
            "explanation": "Experience is the knowledge and skill gained through doing something over time. Sector is an industry. Role is your job position. 'Years of experience' is the standard phrase for explaining how long you have worked in a field — it adds credibility to your introduction."
        },
        {
            "sentence": "Our _____ this year is to expand into two new European markets and grow our revenue by 30%.",
            "options": [
                "role",
                "goal",
                "sector"
            ],
            "correctIndex": 1,
            "explanation": "Goal is something you want to achieve — a target for the future. Role is your job position. Sector is your industry. Ending your self-introduction with a goal shows ambition and gives the listener something to connect with — they may be able to help you."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. One person reads the question, the other answers using language from this lesson. Then swap. Choose the best answer for each question.",
        "items": [
            {
                "customerLine": "Networking contact: 'So — tell me a bit about yourself and what you do.'",
                "options": [
                    "Say: 'I work in marketing. It is quite interesting. We have many clients.'",
                    "Say: 'Hi — I am Dana, head of business development at MarketBridge. We specialize in LinkedIn and email marketing for B2B technology companies. I am responsible for finding new clients and managing key accounts. We are based in London but work across Europe.'",
                    "Say: 'I am very busy actually. We have a lot of projects right now and I deal with everything.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a clear, structured, and specific introduction — name, role, company specialty, and location. A is too vague. C sounds overwhelmed and does not say anything useful about the company or the person's role."
            },
            {
                "customerLine": "Networking contact: 'What sector does your company focus on?'",
                "options": [
                    "Say: 'We focus on the B2B technology sector — mainly SaaS companies and IT service providers that want to grow their brand and generate more leads without increasing their sales team.'",
                    "Say: 'We work with all kinds of companies — we do not have a specific sector.'",
                    "Say: 'I am not sure — we work with many different types of businesses.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It gives a specific, confident answer — the sector, the type of company, and what the company needs. B and C both suggest you do not specialize in anything, which is a missed opportunity at a networking event. Specificity is what makes a self-introduction memorable."
            },
            {
                "customerLine": "Networking contact: 'What are your goals for this year?'",
                "options": [
                    "Say: 'Our goal is to grow and get more clients.'",
                    "Say: 'Honestly, we just want to survive this year — it is tough out there.'",
                    "Say: 'Our main goal is to expand into Germany and the Netherlands — we already have a strong base in the UK and want to replicate that success in Central Europe. We are targeting companies with between 50 and 500 employees in the tech sector.'"
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It is specific, ambitious, and gives the listener real information — the target markets, the company's existing strength, and the type of client they are looking for. A is too vague. B sounds negative and does not inspire confidence."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this self-introduction. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Tom",
                "text": "Hi — let me to introduce myself. I am Tom Chen."
            },
            {
                "speaker": "Tom",
                "text": "I am the marketing director at TechFlow. We are a software company based in Berlin."
            },
            {
                "speaker": "Tom",
                "text": "We work in the technology sector — our clients are manufacturing and logistics companies."
            },
            {
                "speaker": "Tom",
                "text": "I am responsible to manage all marketing activities — LinkedIn, email, and trade fairs."
            },
            {
                "speaker": "Tom",
                "text": "I have eight years of experience in B2B marketing."
            },
            {
                "speaker": "Tom",
                "text": "Our goal this year is expand into the UK market and double our inbound leads."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "let me to introduce",
                "correction": "let me introduce",
                "explanation": "'Let me' is followed by the base form of the verb (infinitive without 'to'). Say: 'Let me introduce', 'let me explain', 'let me show you'. Never: 'let me to introduce'. This is a very common mistake — 'let' takes a bare infinitive, not a full infinitive with 'to'."
            },
            {
                "lineIndex": 3,
                "incorrectText": "responsible to manage",
                "correction": "responsible for managing",
                "explanation": "'Responsible' is always followed by 'for' + gerund (verb + -ing), not 'to' + infinitive. Say: 'I am responsible for managing...' — not 'responsible to manage'. This is a fixed pattern: responsible FOR + noun/gerund."
            },
            {
                "lineIndex": 5,
                "incorrectText": "goal this year is expand",
                "correction": "goal this year is to expand",
                "explanation": "After 'is' in this structure, you need 'to' + infinitive: 'our goal is to expand', 'our aim is to grow', 'our plan is to launch'. This is the pattern: subject + is + to + verb. Without 'to', the sentence is grammatically incomplete."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the line using your own information and language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Someone at a networking event asks: 'So what do you do?'",
                "salespersonStart": "Hi — I am [your name]. I am [your role] at [your company].",
                "suggestedCompletion": "We specialize in [your area] for [your target clients]. I am responsible for [your main responsibilities]. We are based in [your city] and we work with clients across [your main markets]. This year, our goal is to [your main goal]. — Use this as a template and say it with your own information."
            },
            {
                "customerLine": "Someone asks: 'What industry do you work in and who are your typical clients?'",
                "salespersonStart": "We work in the [sector] sector —",
                "suggestedCompletion": "our typical clients are [type of company] that want to [main goal or challenge]. Most of our clients have between [size range] employees and are based in [region or country]. We specialize in [your specific area] — so we really understand the challenges they face."
            },
            {
                "customerLine": "Someone asks: 'How long have you been doing this, and what has been your biggest achievement?'",
                "salespersonStart": "I have [number] years of experience in [your field] —",
                "suggestedCompletion": "I started in [area] and then moved into [current area]. My biggest achievement was [something specific — a campaign result, a market expansion, a client win]. That experience taught me a lot about [a key lesson]. It is part of why I am now focusing on [current goal]."
            }
        ]
    }
},
};
