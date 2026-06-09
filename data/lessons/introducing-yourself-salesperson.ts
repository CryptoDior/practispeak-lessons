import { Lesson } from '@/types/lesson';

export const introducingYourselfSalesperson: Lesson = {
  slug: 'introducing-yourself-salesperson',
  title: 'Introducing Yourself as a Salesperson',
  subtitle: 'The phrases sales people use to meet new contacts and clients',
  level: 'A1-A2',
  description: 'Learn the professional phrases sales people use to introduce themselves, their company, and their role at networking events and client meetings.',
  heroImage: '/images/introducing-yourself-salesperson-hero.png',

  vocabulary: [
    {
      word: 'CONTACT',
      partOfSpeech: 'noun',
      definition: 'A person you know, especially through work, who might help you.',
      example: "It's always good to make new contacts at industry events.",
      imageSlug: '/images/contact.png',
    },
    {
      word: 'COMPANY',
      partOfSpeech: 'noun',
      definition: 'A business that makes or sells things.',
      example: 'What company are you with?',
      imageSlug: '/images/company.png',
    },
    {
      word: 'JOB',
      partOfSpeech: 'noun',
      definition: 'The work a person does to earn money.',
      example: 'My job is to help new customers find the right plan.',
      imageSlug: '/images/job.png',
    },
    {
      word: 'TEAM',
      partOfSpeech: 'noun',
      definition: 'A group of people who work together.',
      example: "I'm on the sales team at Brightline.",
      imageSlug: '/images/team.png',
    },
    {
      word: 'WORK',
      partOfSpeech: 'verb',
      definition: 'To do a job, usually to earn money.',
      example: 'I work for a software company called Brightline.',
      imageSlug: '/images/work.png',
    },
    {
      word: 'MEET',
      partOfSpeech: 'verb',
      definition: 'To see and talk with someone for the first time.',
      example: "It's great to meet you — I've heard a lot about your agency.",
      imageSlug: '/images/meet.png',
    },
    {
      word: 'INTRODUCE',
      partOfSpeech: 'verb',
      definition: 'To tell someone your name and a little about yourself when you meet.',
      example: "Let me introduce myself — I'm Riley from the Brightline sales team.",
      imageSlug: '/images/introduce.png',
    },
    {
      word: 'COLLEAGUE',
      partOfSpeech: 'noun',
      definition: 'A person you work with.',
      example: "I'd like you to meet my colleague, Carlos — he leads our team.",
      imageSlug: '/images/colleague.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT BRINGS YOU HERE TODAY',
      definition: 'A natural way to start a conversation with someone new at an event.',
      example: 'So, what brings you here today?',
      imageSlug: '/images/what-brings-you-here-today.png',
    },
    {
      phrase: 'I WORK FOR',
      definition: 'Tell someone the name of the company you work for.',
      example: 'I work for a software company called Brightline.',
      imageSlug: '/images/i-work-for.png',
    },
    {
      phrase: "I'D LOVE TO STAY IN TOUCH",
      definition: "Tell someone you'd like to keep talking with them after today.",
      example: "It was great talking with you — I'd love to stay in touch.",
      imageSlug: '/images/id-love-to-stay-in-touch.png',
    },
    {
      phrase: 'WHAT DO YOU DO',
      definition: "A friendly way to ask about someone's job or company.",
      example: 'So, what do you do, Dana?',
      imageSlug: '/images/what-do-you-do.png',
    },
    {
      phrase: "I'M ON THE SALES TEAM",
      definition: "Tell someone which team or department you're part of.",
      example: "I'm on the sales team — I help new customers get started.",
      imageSlug: '/images/im-on-the-sales-team.png',
    },
    {
      phrase: 'LET ME INTRODUCE YOU TO',
      definition: 'Help two people meet each other by introducing them.',
      example: 'Let me introduce you to my colleague, Carlos — he leads our team.',
      imageSlug: '/images/let-me-introduce-you-to.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'So, what brings you here today?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I'm always looking to make new [[contacts:a person you know, especially through work, who might help you]] in the industry — I run a small marketing agency.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's great. I [[work:to do a job, usually to earn money]] for Brightline — what does your [[company:a business that makes or sells things]] focus on?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Mostly social media campaigns for small businesses. And what's your role at Brightline?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "My [[job:the work a person does to earn money]] is to help new customers find the right plan. I'm on the sales [[team:a group of people who work together]].",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That's exactly the kind of thing we've been looking for.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Perfect timing, then. Let me [[introduce:to tell someone your name and a little about yourself when you meet]] you to my [[colleague:a person you work with]], Carlos — he leads our team and knows the software inside and out.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I'd love that.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Carlos, this is Dana — she runs a marketing agency and might be a great fit for Brightline.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: "It's great to [[meet:to see and talk with someone for the first time]] you, Dana. I'd love to hear more about your team and what you're looking for.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Thanks — I'd love to stay in touch either way.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Of course — here's my card. Feel free to reach out anytime.",
    }
  ],

  matchingExercise: [
    {
        "word": "CONTACT",
        "definition": "A person you know, especially through work, who might help you"
    },
    {
        "word": "COMPANY",
        "definition": "A business that makes or sells things"
    },
    {
        "word": "JOB",
        "definition": "The work a person does to earn money"
    },
    {
        "word": "TEAM",
        "definition": "A group of people who work together"
    },
    {
        "word": "WORK",
        "definition": "To do a job, usually to earn money"
    },
    {
        "word": "MEET",
        "definition": "To see and talk with someone for the first time"
    },
    {
        "word": "INTRODUCE",
        "definition": "To tell someone your name and a little about yourself"
    },
    {
        "word": "COLLEAGUE",
        "definition": "A person you work with"
    }
],
  fillBlankExercise: [
    {
        "before": "It's always good to make new",
        "after": "at industry events.",
        "answer": "contact"
    },
    {
        "before": "What",
        "after": "are you with?",
        "answer": "company"
    },
    {
        "before": "My",
        "after": "is to help new customers find the right plan.",
        "answer": "job"
    },
    {
        "before": "I'm on the sales",
        "after": "at Brightline.",
        "answer": "team"
    },
    {
        "before": "I",
        "after": "for a software company called Brightline.",
        "answer": "work"
    },
    {
        "before": "It's great to",
        "after": "you, Dana.",
        "answer": "meet"
    },
    {
        "before": "Let me",
        "after": "you to my colleague, Carlos.",
        "answer": "introduce"
    },
    {
        "before": "I'd like you to meet my",
        "after": ", Carlos.",
        "answer": "colleague"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the name of Riley's company?",
        "options": [
            "Skyline",
            "Brightline",
            "Maple Tech",
            "Forward Co"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley's company make?",
        "options": [
            "Office furniture",
            "Project management software",
            "Marketing posters",
            "Mobile games"
        ],
        "correctIndex": 1
    },
    {
        "question": "What team is Riley on?",
        "options": [
            "The design team",
            "The support team",
            "The sales team",
            "The finance team"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana do?",
        "options": [
            "She runs a marketing agency",
            "She works in IT support",
            "She's a software engineer",
            "She owns a coffee shop"
        ],
        "correctIndex": 0
    },
    {
        "question": "Who does Riley introduce Dana to?",
        "options": [
            "A customer",
            "Riley's manager",
            "Riley's colleague, Carlos",
            "Riley's friend from college"
        ],
        "correctIndex": 2
    },
    {
        "question": "Where does this conversation most likely take place?",
        "options": [
            "In a restaurant",
            "At an industry networking event",
            "On a phone call",
            "In a job interview"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Carlos want to do after meeting Dana?",
        "options": [
            "Reschedule for another day",
            "Hear more about Dana's team and what she needs",
            "Send Dana a price list",
            "Ask Dana for a discount"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley describe their job?",
        "options": [
            "Fixing technical problems",
            "Designing the company logo",
            "Helping new customers find the right plan",
            "Managing the accounts department"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the customer's line, then discuss which response (A, B, or C) is best. Choose your answer together, then click to see if you were right — and why.",
        "items": [
            {
                "customerLine": "What do you do?",
                "options": [
                    "I'm in sales.",
                    "I work for Brightline — I'm on the sales team and I help new customers get started.",
                    "I have a very interesting job at a software company."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives your company name, your role, and what you do for customers — all in one natural sentence. A is too vague. C is a bit awkward and does not tell them anything useful about who you are or what you offer."
            },
            {
                "customerLine": "I don't think we've met before.",
                "options": [
                    "You're right — I'm Riley, I work for Brightline. Great to meet you.",
                    "I know, I'm quite new to these events.",
                    "Let me give you my business card and you can check us out online."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It confirms the introduction naturally, gives your name and company, and keeps the conversation warm. B misses the chance to introduce yourself. C skips the personal introduction and sends the customer away."
            },
            {
                "customerLine": "I'd love to know more, but I have to go — I'm late for a session.",
                "options": [
                    "Can we talk now? It will only take a minute.",
                    "No worries — let me quickly tell you about our best product.",
                    "Of course — I'd love to stay in touch. Can I get your contact details?"
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It respects the customer's time and keeps the relationship going without any pressure. A pushes on when the customer has already said they need to leave. B ignores what they said and tries to pitch anyway."
            },
            {
                "customerLine": "Do you have someone who can explain the technical side?",
                "options": [
                    "I can probably answer most of your technical questions.",
                    "Let me introduce you to my colleague Carlos — he knows the technical details inside and out.",
                    "I will send you some technical documentation later today."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Introducing a specialist builds trust and keeps the conversation moving forward right now. A might put you in a difficult position if you cannot answer. C delays the conversation and loses the momentum of the in-person meeting."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You met these three contacts at a networking event. As a group, match each contact to the Brightline plan that best fits what they told you. Be ready to explain your choices. Click 'Reveal Matches' to check.",
        "profiles": [
            {
                "name": "Zara",
                "description": "You met Zara at the event. She runs a small 3-person design studio. She mentioned she has a limited budget but needs a simple way to organise work and track what her team is doing.",
                "matchKey": "starter"
            },
            {
                "name": "Ben",
                "description": "You met Ben at a conference. He manages a sales team of 20 people. He said his main challenge is tracking deals and staying in contact with customers after the first meeting.",
                "matchKey": "growth"
            },
            {
                "name": "Priya",
                "description": "You met Priya at an industry event. She is the IT director at a large company with over 300 employees. She needs a tool that connects with their existing systems and has dedicated support.",
                "matchKey": "enterprise"
            }
        ],
        "options": [
            {
                "key": "starter",
                "label": "Starter Plan — $49/month",
                "description": "Basic project tracking and invoicing. Up to 5 users. Best for small teams or freelancers who need a simple, low-cost tool."
            },
            {
                "key": "growth",
                "label": "Growth Plan — $149/month",
                "description": "Deal tracking, customer management, and reporting. Up to 25 users. Best for growing teams that need to manage relationships and track results."
            },
            {
                "key": "enterprise",
                "label": "Enterprise Plan — Custom pricing",
                "description": "Unlimited users, custom integrations, dedicated account manager. Best for large companies that need a fully tailored solution."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson's line has been cut off. As a group, discuss how you would finish it. Try to use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "What brings you to this event?",
                "salespersonStart": "I'm here to meet new contacts and introduce",
                "suggestedCompletion": "our software to companies that might find it useful. It's always great to meet people in the industry. What about you — what brings you here today?"
            },
            {
                "customerLine": "How big is your team?",
                "salespersonStart": "There are about 15 of us — I work on the sales team, but let me",
                "suggestedCompletion": "introduce you to my colleague Carlos. He handles the technical side and can answer any detailed questions you have."
            },
            {
                "customerLine": "I'm not sure I'm the right person to talk to about this.",
                "salespersonStart": "That's fine — could you tell me who on your team",
                "suggestedCompletion": "makes decisions about software tools? I'd love to arrange a short meeting with them — and I'd be happy to copy you in."
            },
            {
                "customerLine": "We already work with a company similar to yours.",
                "salespersonStart": "That's great to hear — it's always good to",
                "suggestedCompletion": "meet people who are already thinking about this kind of tool. I'd love to hear how it's going for you and whether there's anything you wish it did differently."
            }
        ]
    }
},
};
