import { Lesson } from '@/types/lesson';

export const whereDoYouSell: Lesson = {
  slug: 'where-do-you-sell',
  title: 'Where Do You Sell?',
  subtitle: 'Simple vocabulary for talking about markets, regions, and where companies operate',
  level: 'A1-A2',
  description: 'In B2B marketing, it is important to understand where your clients sell their products and services. This lesson gives you the vocabulary to talk about markets, regions, and geography — so you can ask the right questions and understand where a company operates.',
  heroImage: '/images/where-do-you-sell-hero.png',

  vocabulary: [
    {
      word: 'MARKET',
      partOfSpeech: 'noun',
      definition: 'A specific group of people or a geographic area where a company sells its products or services.',
      example: 'The German market is very competitive — there are many strong local players and customers expect high quality.',
      imageSlug: '/images/where-do-you-sell-market.png',
    },
    {
      word: 'REGION',
      partOfSpeech: 'noun',
      definition: 'An area within a country or group of countries — for example, Northern Europe, the Midwest, or Southern Asia.',
      example: 'We focus on the DACH region — Germany, Austria, and Switzerland — because they share a similar business culture.',
      imageSlug: '/images/where-do-you-sell-region.png',
    },
    {
      word: 'COUNTRY',
      partOfSpeech: 'noun',
      definition: 'A nation with its own borders, government, and often its own language and culture.',
      example: 'We currently sell in five countries — the UK, Germany, France, the Netherlands, and Belgium.',
      imageSlug: '/images/country.png',
    },
    {
      word: 'INTERNATIONAL',
      partOfSpeech: 'adjective',
      definition: 'Involving more than one country — when a company operates or sells across national borders.',
      example: 'We have been an international company since 2019 — we now have clients in twelve different countries.',
      imageSlug: '/images/international.png',
    },
    {
      word: 'DOMESTIC',
      partOfSpeech: 'adjective',
      definition: 'Relating to your home country — the market within the country where your company is based.',
      example: 'We started as a domestic business in Spain, but we expanded internationally when we saw demand from abroad.',
      imageSlug: '/images/domestic.png',
    },
    {
      word: 'EXPAND',
      partOfSpeech: 'verb',
      definition: 'To grow into new areas, markets, or countries — to make your business bigger by going into new places.',
      example: 'We are planning to expand into the US market next year — it is a big step but the opportunity is significant.',
      imageSlug: '/images/expand.png',
    },
    {
      word: 'TERRITORY',
      partOfSpeech: 'noun',
      definition: 'A specific area where a salesperson or company is responsible for selling — their assigned market.',
      example: 'Each sales representative is responsible for a specific territory — one covers Northern Europe, one covers Southern Europe.',
      imageSlug: '/images/territory.png',
    },
    {
      word: 'PRESENCE',
      partOfSpeech: 'noun',
      definition: 'The degree to which a company is known and active in a particular market or location.',
      example: 'We have a strong presence in the UK but we are still building our presence in France and Germany.',
      imageSlug: '/images/where-do-you-sell-presence.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'BREAK INTO [A MARKET]',
      definition: 'To enter a new market successfully — often used when it is competitive or difficult to enter.',
      example: 'Breaking into the US market is challenging — but with the right marketing strategy, it is possible.',
      imageSlug: '/images/where-do-you-sell-break-into-a-market.png',
    },
    {
      phrase: 'ROLL OUT [IN/ACROSS]',
      definition: 'To launch or expand something — often across multiple regions or markets.',
      example: 'We are rolling out our new service across Western Europe first, then Asia Pacific in Q2.',
      imageSlug: '/images/roll-out-inacross.png',
    },
    {
      phrase: 'SET UP [IN A LOCATION]',
      definition: 'To establish your business in a new city, country, or region.',
      example: 'We are planning to set up in Amsterdam next year — it is a great hub for European operations.',
      imageSlug: '/images/set-up-in-a-location.png',
    },
    {
      phrase: 'OPERATE IN [A MARKET]',
      definition: 'To be active and doing business in a particular market or region.',
      example: 'We operate in six markets — but our strongest results are in Germany and the Netherlands.',
      imageSlug: '/images/operate-in-a-market.png',
    },
    {
      phrase: 'TARGET [A MARKET]',
      definition: 'To focus your marketing and sales efforts on a specific group of people or geographic area.',
      example: 'We target the mid-market segment in Northern Europe — companies with between 50 and 500 employees.',
      imageSlug: '/images/target-a-market.png',
    },
    {
      phrase: 'REACH [AN AUDIENCE]',
      definition: 'To successfully connect with and communicate to a specific group of people or market.',
      example: 'LinkedIn is the best platform for reaching a professional B2B audience across multiple markets.',
      imageSlug: '/images/reach-an-audience.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Thanks for taking the time to speak today. Before I tell you more about what we do, I would love to understand your business better. Where do you currently sell?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '[As Client] We started as a [[domestic:relating to your home country]] business in the UK, but now we operate in five [[country:a nation with its own borders and government]] ies — UK, Germany, France, Netherlands, and Belgium.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'So you are already an [[international:involving more than one country]] company. That is great — it also means your marketing needs to work across different languages and cultures, right?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '[As Client] Exactly. The UK is our strongest [[market:a group of people or area where a company sells]], but we want to build more [[presence:the degree to which a company is known in a market]] in Germany and France.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Which [[region:an area within a country or group of countries]] within Germany are you targeting? The DACH region — Germany, Austria, Switzerland — or just Germany itself?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '[As Client] For now, just Germany. We want to [[expand:to grow into new areas or markets]] into Austria and Switzerland later.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That makes sense — it is always good to establish a strong presence in one market before rolling out to others. Do you have a sales team on the ground in Germany, or is it all managed from the UK?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '[As Client] We have one person covering the German [[territory:a specific area where someone is responsible for selling]]. She speaks German fluently, which helps a lot.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is very useful. For your marketing, we could create LinkedIn content in both English and German to help her reach potential clients in her [[territory:a specific area where someone is responsible for selling]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '[As Client] That is exactly what we need. We are trying to break into the German market but it is competitive.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — the German [[market:a group of people or area where a company sells]] is competitive, but LinkedIn is very strong there for B2B. We have done this for other international clients. We can help you build a strong [[presence:the degree to which a company is known and active]] there.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '[As Client] Great. Let us talk about how you would approach this — I want to know your plan for helping us operate more effectively in Germany.',
    }
  ],

  matchingExercise: [
    {
        "word": "MARKET",
        "definition": "A specific group of people or geographic area where a company sells its products"
    },
    {
        "word": "REGION",
        "definition": "An area within a country or group of countries, for example Northern Europe or the Midwest"
    },
    {
        "word": "COUNTRY",
        "definition": "A nation with its own borders, government, and usually its own language and culture"
    },
    {
        "word": "INTERNATIONAL",
        "definition": "Involving more than one country — operating or selling across national borders"
    },
    {
        "word": "DOMESTIC",
        "definition": "Relating to your home country — the market within the country where you are based"
    },
    {
        "word": "EXPAND",
        "definition": "To grow into new areas, markets, or countries — to make your business bigger"
    },
    {
        "word": "TERRITORY",
        "definition": "A specific area where a salesperson or company is responsible for selling"
    },
    {
        "word": "PRESENCE",
        "definition": "The degree to which a company is known and active in a particular market or location"
    }
],
  fillBlankExercise: [
    {
        "before": "The German",
        "after": "is very competitive — there are many strong local players.",
        "answer": "market"
    },
    {
        "before": "We focus on the DACH",
        "after": "— Germany, Austria, and Switzerland — because they share a similar business culture.",
        "answer": "region"
    },
    {
        "before": "We currently sell in five",
        "after": "ies — the UK, Germany, France, Netherlands, and Belgium.",
        "answer": "country"
    },
    {
        "before": "We have been an",
        "after": "company since 2019 — we now have clients in twelve countries.",
        "answer": "international"
    },
    {
        "before": "We started as a",
        "after": "business in Spain but expanded internationally when we saw demand from abroad.",
        "answer": "domestic"
    },
    {
        "before": "We are planning to",
        "after": "into the US market next year — the opportunity is significant.",
        "answer": "expand"
    },
    {
        "before": "Each sales representative is responsible for a specific",
        "after": "— one covers Northern Europe, one covers Southern Europe.",
        "answer": "territory"
    },
    {
        "before": "We have a strong",
        "after": "in the UK but we are still building our profile in France and Germany.",
        "answer": "presence"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client says: 'We are a domestic business.' What does this mean?",
        "options": [
            "They sell their products in many countries.",
            "They only sell in their home country — they do not operate internationally.",
            "They run their business from home.",
            "They sell directly to consumers, not businesses."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client wants to 'break into the German market'. What does this mean?",
        "options": [
            "They want to stop selling in Germany.",
            "They want to enter and establish themselves in the German market for the first time — it is competitive and not easy.",
            "They want to find German partners to work with.",
            "They want to translate their website into German."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between a 'country' and a 'region'?",
        "options": [
            "They mean the same thing.",
            "A country is a nation with its own borders and government. A region is an area — it can be within a country or span several countries.",
            "A country is larger than a region.",
            "A region is a more formal word for country."
        ],
        "correctIndex": 1
    },
    {
        "question": "A new client says: 'We want to expand.' What question should you ask first?",
        "options": [
            "How much budget do you have for expansion?",
            "Which market or region do you want to expand into, and why?",
            "How big is your current team?",
            "Have you worked with a marketing agency before?"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'building a presence' in a new market mean?",
        "options": [
            "Opening a physical office in that market",
            "Becoming more known and active in that market over time — so potential clients recognise and trust your brand",
            "Translating all your marketing materials into the local language",
            "Hiring a local sales representative"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is it useful to know where a client sells before you present your services?",
        "options": [
            "You can check if they are a competitor.",
            "It helps you understand their audience, their challenges, and how to tailor your marketing approach to their markets.",
            "It helps you decide how much to charge them.",
            "It tells you how big the company is."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says: 'We operate in the DACH region.' Which countries does this include?",
        "options": [
            "Denmark, Austria, and the Czech Republic",
            "Germany (Deutschland), Austria, and Switzerland (Confoederatio Helvetica)",
            "Denmark, Netherlands, and Germany",
            "Germany, Austria, and Hungary"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'target a market'?",
        "options": [
            "To advertise your product in every available market",
            "To focus your marketing and sales efforts specifically on a chosen group of people or geographic area",
            "To enter a market that no other company has entered yet",
            "To research a market to understand its size"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Where does your company sell its products or services? Is it local, national, or international?",
        "What do you think is the main difference between selling in a domestic market and an international one?",
        "What challenges do companies face when they try to expand into new markets or regions?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "We started as a _____ business in the UK, but now we operate in five countries.",
            "options": [
                "international",
                "domestic",
                "regional"
            ],
            "correctIndex": 1,
            "explanation": "Domestic means relating to your home country — the market within the country where you are based. International means involving more than one country. Regional means relating to a region. Domestic is correct here because the business started only in the UK before expanding."
        },
        {
            "sentence": "We have a strong _____ in the UK, but we are still building our profile in Germany.",
            "options": [
                "territory",
                "presence",
                "market"
            ],
            "correctIndex": 1,
            "explanation": "Presence is the degree to which a company is known and active in a market. Territory is the assigned area where someone sells. Market is the area where a company sells. Presence describes how well-known and established you are — 'strong presence' means people know and trust your brand in that market."
        },
        {
            "sentence": "We are planning to _____ into the US market next year — it is a big step.",
            "options": [
                "target",
                "expand",
                "reach"
            ],
            "correctIndex": 1,
            "explanation": "Expand means to grow into new areas or markets. Target means to focus marketing efforts on a group. Reach means to connect with an audience. Expand is the right word here because the company is growing into a new country for the first time."
        },
        {
            "sentence": "Each sales representative is responsible for a specific _____ — one person covers all of Northern Europe.",
            "options": [
                "market",
                "country",
                "territory"
            ],
            "correctIndex": 2,
            "explanation": "Territory is a specific area where a salesperson or company is assigned to sell. Market is the broader group of customers or geographic area. Country is a nation. Territory is the most specific word here — it refers to the assigned area for which one salesperson is responsible."
        },
        {
            "sentence": "We focus on the DACH _____ — Germany, Austria, and Switzerland — because they share a similar business culture.",
            "options": [
                "country",
                "region",
                "market"
            ],
            "correctIndex": 1,
            "explanation": "Region is an area that can span multiple countries — like DACH, BENELUX, or Northern Europe. Country is a single nation. Market is a group of customers or area where you sell. The DACH region spans three countries, so region is the correct word."
        },
        {
            "sentence": "Breaking into the French _____ is challenging — there are many strong local competitors.",
            "options": [
                "territory",
                "region",
                "market"
            ],
            "correctIndex": 2,
            "explanation": "Market is the standard word for the competitive space where a company sells — 'breaking into a market' is a very common phrase. Territory is an assigned sales area. Region is a geographic area. 'Breaking into a market' means entering and establishing yourself in that market for the first time."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'We want to expand internationally but we do not know where to start.'",
                "options": [
                    "Say: 'Expanding internationally is very exciting! I recommend you start everywhere at once to build awareness quickly.'",
                    "Say: 'That is a smart goal. The best approach is usually to identify one or two markets where you already have some demand or strong fit — maybe where you get enquiries from already — and build a strong presence there first before expanding further.'",
                    "Say: 'International expansion is very risky. Are you sure it is the right time?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives practical, specific advice — start with one or two markets where there is already some demand, build a strong presence, then expand. A says to go everywhere at once, which is a common mistake and very expensive. C is discouraging and unhelpful."
            },
            {
                "customerLine": "Client: 'We are struggling to build a presence in Germany. We have been trying for a year.'",
                "options": [
                    "Say: 'Germany is a very difficult market — maybe it is not the right market for you.'",
                    "Say: 'Germany can be challenging, but it is also very rewarding. The key is consistency — German business culture values trust and reliability. Can you tell me what you have tried so far? That will help me understand where the gap is.'",
                    "Say: 'You need to hire a German-speaking team immediately — that is why it is not working.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It validates that Germany is competitive, gives a useful cultural insight (trust matters), and asks a smart question to understand what has already been tried. A gives up too easily. C makes a specific recommendation (hire a team) without understanding the situation."
            },
            {
                "customerLine": "Client: 'We sell in twelve countries, but our domestic market is still our strongest.'",
                "options": [
                    "Say: 'Then you should focus only on your domestic market and stop the international expansion.'",
                    "Say: 'That is very common for companies at your stage. It means your domestic foundation is solid — the question is how to replicate that strength in your key international markets. Which international market do you most want to grow?'",
                    "Say: 'You should invest all your budget in the international markets since that is where the growth is.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It acknowledges the situation, frames the strong domestic market as a positive foundation, and asks a focused question to identify the priority. A abandons international strategy entirely. C contradicts the client's own strategy without understanding it."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this regional sales summary. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Report",
                "text": "Q2 Regional Sales Summary — MarketBridge Clients"
            },
            {
                "speaker": "Report",
                "text": "Our clients operate in three main regions: North Europe, Central Europe, and South Europe."
            },
            {
                "speaker": "Report",
                "text": "The domestic markets — the home countrys of each client — remain the strongest for most of our portfolio."
            },
            {
                "speaker": "Report",
                "text": "Seven of our twelve clients are currently trying to expand in new markets."
            },
            {
                "speaker": "Report",
                "text": "Germany is the most popular international market — four clients are building a presence there."
            },
            {
                "speaker": "Report",
                "text": "The main challenge is to reach a professional audience in each territory without a local team on a ground."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "home countrys",
                "correction": "home countries",
                "explanation": "Country is a noun that ends in a consonant + y. To form the plural, you change the 'y' to 'ies': country → countries. Never add just 's' to words ending in a consonant + y. Other examples: company → companies, territory → territories."
            },
            {
                "lineIndex": 3,
                "incorrectText": "expand in new markets",
                "correction": "expand into new markets",
                "explanation": "The correct preposition with 'expand' when describing entering new markets is 'into' — not 'in'. Say: 'expand into new markets', 'break into a market', 'move into a new region'. 'In' describes where you already are. 'Into' describes the direction of movement."
            },
            {
                "lineIndex": 5,
                "incorrectText": "on a ground",
                "correction": "on the ground",
                "explanation": "'On the ground' is a fixed phrase meaning physically present in a location — it uses the definite article 'the', not the indefinite article 'a'. 'A team on the ground' means a team physically working in that country or territory. 'On a ground' is not a natural English phrase."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line. Use language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: 'We want to enter the French market but we have no contacts there and do not speak French.'",
                "salespersonStart": "That is a very common starting point — and it is completely manageable.",
                "suggestedCompletion": "Many of our clients entered new markets with no existing contacts. The first step is building a strong LinkedIn presence in France — in French. We can create content in both English and French to reach potential clients in their own language. LinkedIn is particularly strong for B2B in France. We can also help you identify the right decision-makers to target in your industry. Would you like to see how we have done this for similar clients?"
            },
            {
                "customerLine": "Client: 'We are trying to decide between expanding into Germany or the Netherlands first. Which do you recommend?'",
                "salespersonStart": "Both are strong markets for B2B — but the right choice depends on your product and your audience.",
                "suggestedCompletion": "Germany is larger and more competitive, but the rewards are bigger if you break in. The Netherlands is smaller but English is widely spoken in business, which makes it easier to enter without translating all your materials. If you already get enquiries from either country, that is usually the best indicator of where to start. Which market are your warm leads coming from right now?"
            },
            {
                "customerLine": "Client: 'We have a team member who covers all of Europe — it is too much for one person.'",
                "salespersonStart": "That is a really common challenge for growing companies.",
                "suggestedCompletion": "One sales representative covering the whole of Europe is a very large territory — and it probably means some markets are getting much less attention than others. A good marketing strategy can help by generating inbound leads so your representative spends less time on cold outreach. We could also help you identify which two or three European markets have the most potential for your business, so your team member can focus their time where it matters most."
            }
        ]
    }
},
};
