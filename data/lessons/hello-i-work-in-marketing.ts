import { Lesson } from '@/types/lesson';

export const helloIWorkInMarketing: Lesson = {
  slug: 'hello-i-work-in-marketing',
  title: 'Hello, I Work in Marketing',
  subtitle: 'How marketers introduce themselves and their role',
  level: 'A1-A2',
  description: 'Learn the phrases marketers use to introduce themselves, explain their role, and start professional conversations at events, meetings, and online.',
  heroImage: '/images/hello-i-work-in-marketing-hero.png',

  vocabulary: [
    {
      word: 'MARKETER',
      partOfSpeech: 'noun',
      definition: 'A person whose job is to promote a brand, product, or company.',
      example: "As a marketer, Riley's job is to help people discover the brand.",
      imageSlug: '/images/marketer.png',
    },
    {
      word: 'BRAND',
      partOfSpeech: 'noun',
      definition: 'The name, design, or image that represents a company or product.',
      example: 'Nike is a global brand that people recognise all over the world.',
      imageSlug: '/images/brand.png',
    },
    {
      word: 'PRODUCT',
      partOfSpeech: 'noun',
      definition: 'Something a company makes and sells.',
      example: 'Our main product helps businesses manage their social media and ads.',
      imageSlug: '/images/product.png',
    },
    {
      word: 'COMPANY',
      partOfSpeech: 'noun',
      definition: 'A business that makes or sells things.',
      example: 'I work for a company called Brightline.',
      imageSlug: '/images/company.png',
    },
    {
      word: 'TEAM',
      partOfSpeech: 'noun',
      definition: 'A group of people who work together.',
      example: "I'm on the marketing team — we handle all the campaigns.",
      imageSlug: '/images/team.png',
    },
    {
      word: 'ROLE',
      partOfSpeech: 'noun',
      definition: 'The job or position a person has in a company.',
      example: 'My role is to manage social media and grow the brand online.',
      imageSlug: '/images/role.png',
    },
    {
      word: 'CAMPAIGN',
      partOfSpeech: 'noun',
      definition: 'A planned set of activities to promote a product or brand.',
      example: 'We just finished a campaign for our new product launch.',
      imageSlug: '/images/campaign.png',
    },
    {
      word: 'AGENCY',
      partOfSpeech: 'noun',
      definition: 'A business that provides a professional service, such as marketing or advertising.',
      example: 'We work with an agency that handles our digital advertising.',
      imageSlug: '/images/agency.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'I WORK IN MARKETING',
      definition: 'Tell someone which industry or department you work in.',
      example: 'I work in marketing — specifically in content and social media.',
      imageSlug: '/images/i-work-in-marketing.png',
    },
    {
      phrase: 'WHAT DO YOU DO',
      definition: "A friendly way to ask about someone's job.",
      example: 'So, what do you do — are you in marketing too?',
      imageSlug: '/images/what-do-you-do.png',
    },
    {
      phrase: "I'M ON THE MARKETING TEAM",
      definition: 'Tell someone which team you belong to.',
      example: "I'm on the marketing team at Brightline — we look after all the campaigns.",
      imageSlug: '/images/im-on-the-marketing-team.png',
    },
    {
      phrase: 'LET ME INTRODUCE MYSELF',
      definition: 'A polite way to start telling someone who you are.',
      example: "Let me introduce myself — I'm Riley, and I work in brand marketing.",
      imageSlug: '/images/let-me-introduce-myself.png',
    },
    {
      phrase: 'WHAT BRAND DO YOU WORK FOR',
      definition: 'Ask which company or brand someone represents.',
      example: 'That sounds interesting — what brand do you work for?',
      imageSlug: '/images/what-brand-do-you-work-for.png',
    },
    {
      phrase: "I'D LOVE TO CONNECT",
      definition: 'Tell someone you want to stay in touch after meeting them.',
      example: "It was great talking with you — I'd love to connect on LinkedIn.",
      imageSlug: '/images/id-love-to-connect.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Let me introduce myself — I'm Riley. I work in marketing at Brightline.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Great to meet you, Riley. I'm Dana — I run a small [[agency:a business that provides a professional service, such as marketing or advertising]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Nice! What [[brand:the name, design, or image that represents a company or product]] do you work with most often?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Mostly local food and lifestyle brands. What's your [[role:the job or position a person has in a company]] at Brightline?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'm on the marketing [[team:a group of people who work together]]. My job is to plan campaigns and help grow the brand.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What kind of [[product:something a company makes and sells]] does Brightline offer?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We make marketing software for small businesses — it helps them manage their social media and ads in one place.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That sounds useful. A few of our clients ask about tools like that.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'd love to tell you more — our [[company:a business that makes or sells things]] also works with agencies like yours.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Really? That's good to know.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We just finished a big [[campaign:a planned set of activities to promote a product or brand]] with a digital agency in Manchester — great results.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Impressive. I'd love to connect — do you have a card or a LinkedIn?",
    }
  ],

  matchingExercise: [
    {
        "word": "MARKETER",
        "definition": "A person whose job is to promote a brand, product, or company"
    },
    {
        "word": "BRAND",
        "definition": "The name, design, or image that represents a company or product"
    },
    {
        "word": "PRODUCT",
        "definition": "Something a company makes and sells"
    },
    {
        "word": "COMPANY",
        "definition": "A business that makes or sells things"
    },
    {
        "word": "TEAM",
        "definition": "A group of people who work together"
    },
    {
        "word": "ROLE",
        "definition": "The job or position a person has in a company"
    },
    {
        "word": "CAMPAIGN",
        "definition": "A planned set of activities to promote a product or brand"
    },
    {
        "word": "AGENCY",
        "definition": "A business that provides a professional service, such as marketing or advertising"
    }
],
  fillBlankExercise: [
    {
        "before": "As a",
        "after": ", Riley's job is to help people discover the brand.",
        "answer": "marketer"
    },
    {
        "before": "Nike is a global",
        "after": "that people recognise all over the world.",
        "answer": "brand"
    },
    {
        "before": "Our main",
        "after": "helps businesses manage their social media and ads.",
        "answer": "product"
    },
    {
        "before": "I work for a",
        "after": "called Brightline.",
        "answer": "company"
    },
    {
        "before": "I'm on the marketing",
        "after": "— we handle all the campaigns.",
        "answer": "team"
    },
    {
        "before": "My",
        "after": "is to manage social media and grow the brand online.",
        "answer": "role"
    },
    {
        "before": "We just finished a",
        "after": "for our new product launch.",
        "answer": "campaign"
    },
    {
        "before": "We work with an",
        "after": "that handles our digital advertising.",
        "answer": "agency"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Where does this conversation take place?",
        "options": [
            "In an office meeting",
            "At a marketing industry conference",
            "On a video call",
            "In a coffee shop"
        ],
        "correctIndex": 1
    },
    {
        "question": "What company does Riley work for?",
        "options": [
            "Dana & Co",
            "Brightline",
            "Skyline Digital",
            "Forward Agency"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Riley's role at Brightline?",
        "options": [
            "Running the sales team",
            "Managing accounts",
            "Planning campaigns and growing the brand",
            "Building the product"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Brightline's product do?",
        "options": [
            "It designs logos for companies",
            "It trains marketing staff",
            "It helps businesses manage social media and ads",
            "It prints marketing materials"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana do?",
        "options": [
            "She works in software development",
            "She runs a small marketing agency",
            "She is Riley's colleague",
            "She works at Brightline"
        ],
        "correctIndex": 1
    },
    {
        "question": "What campaign does Riley mention?",
        "options": [
            "A campaign with a food brand in London",
            "A campaign with a digital agency in Manchester",
            "A social media campaign for a local shop",
            "A product launch campaign in Europe"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana ask for at the end of the conversation?",
        "options": [
            "A product demo",
            "A price list",
            "A card or LinkedIn connection",
            "A meeting with Riley's manager"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which phrase does Riley use to start the introduction?",
        "options": [
            "What do you do?",
            "Let me introduce myself",
            "I'd love to connect",
            "What brand do you work for?"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the other person's line, then discuss which response (A, B, or C) is best. Choose your answer together, then click to see if you were right — and why.",
        "items": [
            {
                "customerLine": "So, what do you do?",
                "options": [
                    "I'm in marketing.",
                    "I work in marketing at Brightline — I'm on the team that plans campaigns and grows the brand.",
                    "I have a very busy job. I work with many different people every day."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives your company name, your team, and what you actually do — all in one clear sentence. A is too vague and gives no useful information. C sounds evasive and does not tell the person anything about your role or company."
            },
            {
                "customerLine": "I don't think we've met before.",
                "options": [
                    "You're right — let me introduce myself. I'm Riley, I work in marketing at Brightline.",
                    "I know, I'm quite new to these events.",
                    "Here's my card — you can find us online."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It confirms the moment naturally, then gives your name and company in a warm, professional way. B misses the chance to introduce yourself properly. C skips the introduction and sends the person away to find information themselves, which feels cold."
            },
            {
                "customerLine": "What brand do you work for?",
                "options": [
                    "I work for a marketing company.",
                    "I can't really say much about it here.",
                    "I work for Brightline — we make marketing software that helps businesses manage their campaigns in one place."
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It names the brand and gives a short, clear description of what the company does. A is too vague and does not name the brand. B sounds secretive and closes the conversation down completely."
            },
            {
                "customerLine": "I'd love to know more, but I have to go — I'm about to head into a session.",
                "options": [
                    "Can we talk now? I'll be very quick.",
                    "No worries — I'd love to connect. Can I get your LinkedIn or email?",
                    "Let me just tell you one thing about our product before you go."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It respects the person's time and keeps the relationship going without any pressure. A pushes on when they have already said they need to leave. C tries to fit in a pitch when the moment has clearly passed — it creates an awkward ending."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. You meet these three people in different situations. As a group, decide which introduction style fits each situation best. Use phrases from this lesson to explain your choices. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "At a marketing conference",
                "description": "You are standing near the registration desk. Someone smiles at you. You have about 30 seconds before the first session starts.",
                "matchKey": "quick"
            },
            {
                "name": "On a scheduled intro call",
                "description": "A marketing manager at a mid-size brand booked a 30-minute call after downloading a Brightline guide. They know who you are and why you're speaking.",
                "matchKey": "product"
            },
            {
                "name": "Following up a LinkedIn message",
                "description": "You sent a short message last week and the person replied saying they're curious. You're now speaking for the first time. They don't know much about Brightline yet.",
                "matchKey": "question"
            }
        ],
        "options": [
            {
                "key": "quick",
                "label": "Quick social intro",
                "description": "Keep it short: your name, your company, and one sentence about what you do. Then ask a friendly question to get them talking. Best when time is short and the mood is casual."
            },
            {
                "key": "product",
                "label": "Product-led intro",
                "description": "Start with who you are at Brightline and how the product helps brands like theirs. Move quickly into how it could be relevant to their situation. Best when the contact already knows why they're there."
            },
            {
                "key": "question",
                "label": "Question-first intro",
                "description": "Introduce yourself briefly, then immediately ask an open question about their situation. Shows you are interested in them, not just talking about yourself. Best for new contacts who need to be warmed up."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line has been cut off. As a group, discuss how you would finish it. Try to use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "What brings you to this event?",
                "salespersonStart": "I'm here to meet other marketers and share ideas about",
                "suggestedCompletion": "campaigns and brand strategy. I'm always looking to connect with people who are working on interesting projects. What about you — what brings you here today?"
            },
            {
                "customerLine": "How big is your marketing team?",
                "salespersonStart": "There are about twelve of us — I focus on campaigns, but we also have people who",
                "suggestedCompletion": "handle the brand, content, and paid advertising. It's a great team to be part of — everyone brings something different."
            },
            {
                "customerLine": "I'm not sure I'm the right person to speak to about this.",
                "salespersonStart": "No problem at all — could you tell me who on your team",
                "suggestedCompletion": "looks after marketing decisions? I'd love to arrange a short call with them, and I'm happy to copy you in so you can see what we discuss."
            },
            {
                "customerLine": "We already work with a marketing agency.",
                "salespersonStart": "That's great to hear — it's always good to know a company is already investing in",
                "suggestedCompletion": "their marketing. I'd love to hear how it's going and whether there's anything you wish your current setup did differently. Brightline actually works alongside a lot of agencies."
            }
        ]
    }
},
};
