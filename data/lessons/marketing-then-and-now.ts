import { Lesson } from '@/types/lesson';

export const marketingThenAndNow: Lesson = {
  slug: 'marketing-then-and-now',
  title: 'Marketing Then and Now',
  subtitle: 'How marketing has changed from the past to today',
  level: 'A2',
  description: 'Learn words to talk about the history of marketing — how it used to work, how it has changed, and what is different today.',
  heroImage: '/images/marketing-then-and-now-hero.png',

  vocabulary: [
    {
      word: 'TRADITIONAL',
      partOfSpeech: 'adjective',
      definition: 'Done in the old way, or the way that has been done for a long time.',
      example: 'Traditional marketing uses things like print ads, TV, and direct mail.',
      imageSlug: '/images/traditional.png',
    },
    {
      word: 'DIGITAL',
      partOfSpeech: 'adjective',
      definition: 'Using the internet or electronic tools to do something.',
      example: 'Digital marketing uses the internet to reach customers through social media, email, and websites.',
      imageSlug: '/images/digital.png',
    },
    {
      word: 'EVOLUTION',
      partOfSpeech: 'noun',
      definition: 'The slow change of something over time.',
      example: 'The evolution of marketing has moved from print and TV to social media and websites.',
      imageSlug: '/images/evolution.png',
    },
    {
      word: 'SHIFT',
      partOfSpeech: 'noun',
      definition: 'A change from one thing to another.',
      example: 'There has been a big shift from offline to online marketing in the last 20 years.',
      imageSlug: '/images/shift.png',
    },
    {
      word: 'ERA',
      partOfSpeech: 'noun',
      definition: 'A period of time that is known for something.',
      example: 'We are now in the digital era — most marketing happens online.',
      imageSlug: '/images/era.png',
    },
    {
      word: 'METHOD',
      partOfSpeech: 'noun',
      definition: 'A way of doing something.',
      example: 'Print is still a useful method for reaching some customers.',
      imageSlug: '/images/method.png',
    },
    {
      word: 'MODERN',
      partOfSpeech: 'adjective',
      definition: 'New and up to date — not old.',
      example: 'Social media is one of the most modern methods of marketing.',
      imageSlug: '/images/modern.png',
    },
    {
      word: 'PLATFORM',
      partOfSpeech: 'noun',
      definition: 'A website or app where people share content. For example: Instagram, LinkedIn, or YouTube.',
      example: 'Companies now use many different platforms to reach their audience.',
      imageSlug: '/images/marketing-then-and-now-platform.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'USED TO',
      definition: 'Say how something was done in the past but is not done the same way now.',
      example: 'Companies used to rely only on print and TV to reach customers.',
      imageSlug: '/images/used-to.png',
    },
    {
      phrase: 'HAS CHANGED OVER TIME',
      definition: 'Say that something is very different now from how it was before.',
      example: 'Marketing has changed over time — it is faster, cheaper, and more measurable now.',
      imageSlug: '/images/has-changed-over-time.png',
    },
    {
      phrase: 'MOVED FROM [X] TO [X]',
      definition: 'Say that something shifted from one thing to another.',
      example: 'Marketing has moved from print and TV to digital platforms and social media.',
      imageSlug: '/images/moved-from-x-to-x.png',
    },
    {
      phrase: 'TOOK OVER',
      definition: 'Became more important or popular than something else.',
      example: 'Digital marketing slowly took over from traditional methods in the 2000s.',
      imageSlug: '/images/took-over.png',
    },
    {
      phrase: 'LOOK BACK AT',
      definition: 'Think about or talk about something that happened in the past.',
      example: 'When we look back at the 1990s, most marketing was done through TV, print, and direct mail.',
      imageSlug: '/images/look-back-at.png',
    },
    {
      phrase: 'IN THOSE DAYS',
      definition: 'Talk about what things were like in a past period.',
      example: 'In those days, a TV ad could reach millions of people with one message.',
      imageSlug: '/images/in-those-days.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, do you think [[traditional:done in the old way, or the way that has been done for a long time]] marketing is still useful today?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It depends. Some [[method:a way of doing something]]s like print and events still work well. But there has been a big [[shift:a change from one thing to another]] to digital in the last 20 years.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'When did that [[shift]] really start?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I would say the early 2000s. That is when the internet started to change everything. Companies used to rely on TV and newspapers — and then websites and email took over.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So the [[evolution:the slow change of something over time]] of marketing has been quite fast?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Very fast, yes. In the [[era:a period of time that is known for something]] before the internet, a TV ad could reach millions of people at once. In those days, that was the best method.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And now we are in the [[digital:using the internet or electronic tools to do something]] era?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. Most marketing has moved from offline to online. We use [[platform:a website or app where people share content]]s like LinkedIn, Instagram, and YouTube every day.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Is [[modern:new and up to date — not old]] marketing more effective than traditional marketing?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'In many ways, yes. Digital marketing is cheaper, faster, and you can measure the results very clearly. But some traditional methods still work — especially for older audiences.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So the best approach is to use both?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'For most companies, yes. Look back at the most successful brands — they use digital methods for most things, but they do not completely forget traditional marketing either.',
    }
  ],

  matchingExercise: [
    {
        "word": "TRADITIONAL",
        "definition": "Done in the old way, or the way that has been done for a long time"
    },
    {
        "word": "DIGITAL",
        "definition": "Using the internet or electronic tools to do something"
    },
    {
        "word": "EVOLUTION",
        "definition": "The slow change of something over time"
    },
    {
        "word": "SHIFT",
        "definition": "A change from one thing to another"
    },
    {
        "word": "ERA",
        "definition": "A period of time that is known for something"
    },
    {
        "word": "METHOD",
        "definition": "A way of doing something"
    },
    {
        "word": "MODERN",
        "definition": "New and up to date — not old"
    },
    {
        "word": "PLATFORM",
        "definition": "A website or app where people share content"
    }
],
  fillBlankExercise: [
    {
        "before": "",
        "after": "marketing uses things like print ads, TV, and direct mail.",
        "answer": "Traditional"
    },
    {
        "before": "",
        "after": "marketing uses the internet to reach customers.",
        "answer": "Digital"
    },
    {
        "before": "The",
        "after": "of marketing has moved from print and TV to social media and websites.",
        "answer": "evolution"
    },
    {
        "before": "There has been a big",
        "after": "from offline to online marketing in the last 20 years.",
        "answer": "shift"
    },
    {
        "before": "We are now in the digital",
        "after": "— most marketing happens online.",
        "answer": "era"
    },
    {
        "before": "Print is still a useful",
        "after": "for reaching some customers.",
        "answer": "method"
    },
    {
        "before": "Social media is one of the most",
        "after": "methods of marketing.",
        "answer": "modern"
    },
    {
        "before": "Companies now use many different",
        "after": "s to reach their audience.",
        "answer": "platform"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does 'traditional marketing' use?",
        "options": [
            "Social media and websites",
            "Print ads, TV, and direct mail",
            "Email and online ads",
            "Influencers and hashtags"
        ],
        "correctIndex": 1
    },
    {
        "question": "When did the big shift to digital marketing start?",
        "options": [
            "In the 1970s",
            "In the 1980s",
            "In the early 2000s",
            "In 2015"
        ],
        "correctIndex": 2
    },
    {
        "question": "What did companies rely on before the internet?",
        "options": [
            "Social media and email",
            "TV, newspapers, and direct mail",
            "Websites and podcasts",
            "LinkedIn and Instagram"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say is good about digital marketing?",
        "options": [
            "It is more creative",
            "It reaches older audiences better",
            "It is cheaper, faster, and measurable",
            "It uses more platforms"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which platforms does Riley mention?",
        "options": [
            "Twitter, Facebook, and TikTok",
            "LinkedIn, Instagram, and YouTube",
            "Pinterest, Snapchat, and Reddit",
            "WhatsApp, Telegram, and Discord"
        ],
        "correctIndex": 1
    },
    {
        "question": "Does Riley think traditional marketing is completely dead?",
        "options": [
            "Yes — it has no use today",
            "No — some methods still work, especially for older audiences",
            "Only TV advertising still works",
            "It depends on the budget"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley recommend as the best approach?",
        "options": [
            "Use only digital marketing",
            "Use only traditional marketing",
            "Use both digital and traditional",
            "Choose one and stick to it"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the word for a period of time known for something?",
        "options": [
            "Method",
            "Shift",
            "Era",
            "Evolution"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question or comment. Talk about which response (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "Is traditional marketing still worth using?",
                "options": [
                    "Not really — everything is digital now.",
                    "Yes, some traditional methods still work well. Print and events are good for reaching people who are not always online. The key is to know your audience.",
                    "Traditional marketing is very expensive, so most companies avoid it."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a balanced answer — traditional marketing can still work, and it says why and for whom. A is too absolute. C only talks about cost and does not say whether it works."
            },
            {
                "customerLine": "When did digital marketing really take off?",
                "options": [
                    "It has always been around.",
                    "Digital marketing really took over in the early 2000s when the internet became widely used. Before that, most companies used TV, print, and direct mail.",
                    "It started with social media about ten years ago."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a time period and says what came before — a clear, well-informed answer. A is wrong. C is too recent and not accurate — digital marketing started before social media."
            },
            {
                "customerLine": "Why is digital marketing better than traditional?",
                "options": [
                    "Digital marketing is better in every way.",
                    "In many ways it is — it is cheaper, faster, and you can measure results easily. But traditional marketing still reaches some audiences very well.",
                    "I'm not sure it always is — it depends on what you are selling."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives real reasons — cheaper, faster, measurable — but also stays balanced by saying traditional still works for some audiences. A is too one-sided. C avoids giving a real answer."
            },
            {
                "customerLine": "Do you think companies should use only digital methods now?",
                "options": [
                    "Yes — there is no point in using traditional marketing any more.",
                    "Not always. The best approach is to use both. Digital is great for reaching new customers online, but some traditional methods — like events and print — still build trust and reach audiences that digital misses.",
                    "It depends on the company's budget."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It recommends both and gives reasons for each — a thoughtful, professional answer. A is too extreme. C avoids the question and only mentions budget."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three companies ask which type of marketing to use. As a group, talk about which approach fits each company best. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A national food brand",
                "description": "A large food company sells products in supermarkets all over the country. Their customers are all ages, but many are 45 and older. They have a big budget.",
                "matchKey": "traditional"
            },
            {
                "name": "A new tech startup",
                "description": "A new software company wants to reach young marketing managers and business owners aged 25-40. They have a small budget and want to grow fast.",
                "matchKey": "digital"
            },
            {
                "name": "A mid-size B2B company",
                "description": "A company sells services to other businesses. They want to build relationships with clients, reach people at events, and also run online campaigns.",
                "matchKey": "both"
            }
        ],
        "options": [
            {
                "key": "traditional",
                "label": "Traditional marketing",
                "description": "Use TV, print, and direct mail to reach a wide audience. Works well for bigger budgets and audiences that are not always online — especially older customers."
            },
            {
                "key": "digital",
                "label": "Digital marketing",
                "description": "Use social media, email, and online ads to reach customers quickly and cheaply. Best for younger audiences and companies with a smaller budget that want to measure results."
            },
            {
                "key": "both",
                "label": "Both traditional and digital",
                "description": "Use digital methods for online reach and traditional methods like events and print for face-to-face contact. Best for companies that want to build relationships and reach people in different ways."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, discuss how you would finish it. Use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "How has marketing changed in the last 20 years?",
                "salespersonStart": "There has been a huge shift from traditional to digital. Companies used to rely on TV, print, and direct mail — but now most marketing happens",
                "suggestedCompletion": "on digital platforms like social media, email, and websites. The evolution has been very fast, especially since the early 2000s when the internet became widely used."
            },
            {
                "customerLine": "Which era of marketing do you think was the most important?",
                "salespersonStart": "I think the shift to digital was the biggest change. In the era before the internet, a TV ad could reach millions of people. But in the digital era,",
                "suggestedCompletion": "you can reach the right people at a much lower cost — and you can measure exactly what is working. That has completely changed how marketing is done."
            },
            {
                "customerLine": "Are there any traditional methods you still use?",
                "salespersonStart": "Yes — we still use print ads in one industry magazine and we go to trade shows every year. Some traditional methods",
                "suggestedCompletion": "still work well, especially for reaching people who are not as active online. But most of our budget goes to digital platforms now."
            },
            {
                "customerLine": "What platforms does your team use most?",
                "salespersonStart": "We mainly use LinkedIn and Instagram for social media, and we also run ads on Google. Each platform is good for",
                "suggestedCompletion": "a different type of content and a different audience. LinkedIn is best for reaching business professionals, and Instagram is great for showing the brand's personality."
            }
        ]
    }
},
};
