import { Lesson } from '@/types/lesson';

export const helloIWorkInMarketing: Lesson = {
  slug: 'hello-i-work-in-marketing',
  title: 'Hello, I Work in Marketing',
  subtitle: 'How marketers introduce themselves and their role',
  level: 'A1-A2',
  description: 'Learn the phrases marketers use to introduce themselves, say what they do, and start simple conversations at events and meetings.',
  heroImage: '/images/hello-i-work-in-marketing-hero.png',

  vocabulary: [
    {
      word: 'MARKETER',
      partOfSpeech: 'noun',
      definition: 'A person whose job is to tell people about a product or company.',
      example: 'Riley is a marketer. She helps people learn about the brand.',
      imageSlug: '/images/marketer.png',
    },
    {
      word: 'BRAND',
      partOfSpeech: 'noun',
      definition: 'The name and look of a company or product.',
      example: 'Nike is a big brand. People all over the world know it.',
      imageSlug: '/images/hello-i-work-in-marketing-brand.png',
    },
    {
      word: 'PRODUCT',
      partOfSpeech: 'noun',
      definition: 'A thing that a company makes and sells.',
      example: 'Our product helps people with their social media.',
      imageSlug: '/images/hello-i-work-in-marketing-product.png',
    },
    {
      word: 'COMPANY',
      partOfSpeech: 'noun',
      definition: 'A business where people work to make or sell things.',
      example: 'Riley works for a company called Brightline.',
      imageSlug: '/images/hello-i-work-in-marketing-company.png',
    },
    {
      word: 'TEAM',
      partOfSpeech: 'noun',
      definition: 'A group of people who work together.',
      example: 'I am on the marketing team at Brightline.',
      imageSlug: '/images/hello-i-work-in-marketing-team.png',
    },
    {
      word: 'ROLE',
      partOfSpeech: 'noun',
      definition: 'The job that a person does in a company.',
      example: 'My role is to look after social media for the brand.',
      imageSlug: '/images/hello-i-work-in-marketing-role.png',
    },
    {
      word: 'CAMPAIGN',
      partOfSpeech: 'noun',
      definition: 'A set of activities to tell people about a product or brand.',
      example: 'We made a big campaign for our new product.',
      imageSlug: '/images/hello-i-work-in-marketing-campaign.png',
    },
    {
      word: 'AGENCY',
      partOfSpeech: 'noun',
      definition: 'A company that helps other companies with their marketing.',
      example: 'We work with an agency for our online ads.',
      imageSlug: '/images/hello-i-work-in-marketing-agency.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'I WORK IN MARKETING',
      definition: 'Tell someone you work in the marketing area.',
      example: 'I work in marketing — I look after social media and content.',
      imageSlug: '/images/i-work-in-marketing.png',
    },
    {
      phrase: 'WHAT DO YOU DO',
      definition: 'A simple way to ask someone about their job.',
      example: 'So, what do you do — are you in marketing too?',
      imageSlug: '/images/hello-i-work-in-marketing-what-do-you-do.png',
    },
    {
      phrase: "I'M ON THE MARKETING TEAM",
      definition: 'Tell someone which team you are part of.',
      example: "I'm on the marketing team at Brightline — we look after all the campaigns.",
      imageSlug: '/images/im-on-the-marketing-team.png',
    },
    {
      phrase: 'LET ME INTRODUCE MYSELF',
      definition: 'A polite way to start telling someone your name and job.',
      example: "Let me introduce myself — I'm Riley. I work in marketing.",
      imageSlug: '/images/let-me-introduce-myself.png',
    },
    {
      phrase: 'WHAT BRAND DO YOU WORK FOR',
      definition: 'Ask which company or brand someone works for.',
      example: 'That sounds good — what brand do you work for?',
      imageSlug: '/images/what-brand-do-you-work-for.png',
    },
    {
      phrase: "I'D LOVE TO CONNECT",
      definition: 'Tell someone you want to stay in touch after you meet.',
      example: "It was great to meet you — I'd love to connect on LinkedIn.",
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
      text: "Great to meet you, Riley. I'm Dana — I run a small [[agency:a company that helps other companies with their marketing]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Nice! What [[brand:the name and look of a company or product]] do you work with most?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Mostly small food and lifestyle brands. What is your [[role:the job that a person does in a company]] at Brightline?',
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
      text: 'What kind of [[product:a thing that a company makes and sells]] does Brightline have?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We make marketing software for small businesses — it helps them look after their social media and ads in one place.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That sounds useful. Some of our clients ask about tools like that.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'd love to tell you more — our [[company:a business where people work to make or sell things]] also works with agencies like yours.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Really? That is good to know.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We just finished a big [[campaign:a set of activities to tell people about a product or brand]] with a digital agency in Manchester — great results.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That sounds great. I'd love to connect — do you have a card or a LinkedIn?",
    }
  ],

  matchingExercise: [
    {
        "word": "MARKETER",
        "definition": "A person whose job is to tell people about a product or company"
    },
    {
        "word": "BRAND",
        "definition": "The name and look of a company or product"
    },
    {
        "word": "PRODUCT",
        "definition": "A thing that a company makes and sells"
    },
    {
        "word": "COMPANY",
        "definition": "A business where people work to make or sell things"
    },
    {
        "word": "TEAM",
        "definition": "A group of people who work together"
    },
    {
        "word": "ROLE",
        "definition": "The job that a person does in a company"
    },
    {
        "word": "CAMPAIGN",
        "definition": "A set of activities to tell people about a product or brand"
    },
    {
        "word": "AGENCY",
        "definition": "A company that helps other companies with their marketing"
    }
],
  fillBlankExercise: [
    {
        "before": "Riley is a",
        "after": ". She helps people learn about the brand.",
        "answer": "marketer"
    },
    {
        "before": "Nike is a big",
        "after": ". People all over the world know it.",
        "answer": "brand"
    },
    {
        "before": "Our",
        "after": "helps people with their social media.",
        "answer": "product"
    },
    {
        "before": "Riley works for a",
        "after": "called Brightline.",
        "answer": "company"
    },
    {
        "before": "I am on the marketing",
        "after": "at Brightline.",
        "answer": "team"
    },
    {
        "before": "My",
        "after": "is to look after social media for the brand.",
        "answer": "role"
    },
    {
        "before": "We made a big",
        "after": "for our new product.",
        "answer": "campaign"
    },
    {
        "before": "We work with an",
        "after": "for our online ads.",
        "answer": "agency"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Where does this conversation take place?",
        "options": [
            "In an office",
            "At a marketing event",
            "On a phone call",
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
        "question": "What does Riley do at Brightline?",
        "options": [
            "She runs the sales team",
            "She manages accounts",
            "She plans campaigns and grows the brand",
            "She builds the product"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Brightline's product help people do?",
        "options": [
            "Make logos",
            "Train staff",
            "Look after social media and ads",
            "Print marketing materials"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana do?",
        "options": [
            "She works in software",
            "She runs a small marketing agency",
            "She is Riley's colleague",
            "She works at Brightline"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which campaign does Riley talk about?",
        "options": [
            "A food brand campaign in London",
            "A campaign with a digital agency in Manchester",
            "A social media campaign for a local shop",
            "A new product campaign in Europe"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana ask for at the end?",
        "options": [
            "A product demo",
            "A price list",
            "A card or LinkedIn",
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
        "instructions": "Work in groups. Read the other person's line. Talk about which answer (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "So, what do you do?",
                "options": [
                    "I'm in marketing.",
                    "I work in marketing at Brightline — I'm on the team that plans campaigns and helps grow the brand.",
                    "I have a very busy job. I work with many people every day."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says your company name, your team, and what you do — all in one clear sentence. A does not say enough. C does not tell the person anything useful about your job or company."
            },
            {
                "customerLine": "I don't think we've met before.",
                "options": [
                    "You're right — let me introduce myself. I'm Riley. I work in marketing at Brightline.",
                    "I know. I'm quite new to these events.",
                    "Here's my card — you can find us online."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It is a warm, simple way to introduce yourself. You say your name and company. B does not give your name or job. C sends the person away without a real introduction."
            },
            {
                "customerLine": "What brand do you work for?",
                "options": [
                    "I work for a marketing company.",
                    "I can't really say much here.",
                    "I work for Brightline — we make marketing software that helps businesses look after all their campaigns in one place."
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It says the brand name and what the company does. A does not give a name. B closes the conversation — it sounds like you do not want to talk."
            },
            {
                "customerLine": "I'd love to know more, but I have to go — I'm about to go into a session.",
                "options": [
                    "Can we talk now? I'll be very quick.",
                    "No worries — I'd love to connect. Can I get your LinkedIn or email?",
                    "Let me just tell you one thing about our product before you go."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It is polite and keeps the connection going. A pushes on when the person has said they need to leave. C tries to talk about the product when the moment has gone — it is not a good way to end the conversation."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. You meet three people in different situations. As a group, talk about which introduction style fits each situation. Use phrases from this lesson. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "At a marketing event",
                "description": "You are near the door at an event. Someone smiles at you. You have about 30 seconds before the first talk starts.",
                "matchKey": "quick"
            },
            {
                "name": "On a call",
                "description": "A marketing manager booked a 30-minute call after reading about Brightline. They know who you are and why you are talking.",
                "matchKey": "product"
            },
            {
                "name": "After a LinkedIn message",
                "description": "You sent a short message last week. The person replied. You are now talking for the first time. They do not know much about Brightline yet.",
                "matchKey": "question"
            }
        ],
        "options": [
            {
                "key": "quick",
                "label": "Short and simple",
                "description": "Say your name, your company, and one sentence about your job. Then ask a question to get them talking. Best when you do not have much time."
            },
            {
                "key": "product",
                "label": "Talk about the product",
                "description": "Say who you are at Brightline and how the product helps companies like theirs. Best when the person already knows why they are talking to you."
            },
            {
                "key": "question",
                "label": "Ask first",
                "description": "Say your name quickly, then ask a question about the other person. Show that you are interested in them. Best for new contacts who do not know you yet."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, talk about how you would finish it. Use words from this lesson. There is no one right answer — share your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "What brings you to this event?",
                "salespersonStart": "I'm here to meet other marketers and talk about",
                "suggestedCompletion": "campaigns and brand ideas. I always like to meet people who are doing interesting work. What about you — what brings you here today?"
            },
            {
                "customerLine": "How big is your marketing team?",
                "salespersonStart": "There are about twelve of us — I look after campaigns, but we also have people who",
                "suggestedCompletion": "look after the brand, content, and online ads. It is a great team to be part of."
            },
            {
                "customerLine": "I'm not sure I'm the right person to talk to.",
                "salespersonStart": "No problem — can you tell me who on your team",
                "suggestedCompletion": "looks after marketing? I'd love to have a short call with them. I can copy you in so you can see what we talk about."
            },
            {
                "customerLine": "We already work with a marketing agency.",
                "salespersonStart": "That's great — it's always good to know a company is putting money into",
                "suggestedCompletion": "their marketing. I'd love to hear how it is going and if there is anything you wish was different. Brightline also works with a lot of agencies."
            }
        ]
    }
},
};
