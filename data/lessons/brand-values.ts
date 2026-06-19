import { Lesson } from '@/types/lesson';

export const brandValues: Lesson = {
  slug: 'brand-values',
  title: 'Brand Values',
  subtitle: 'How to talk about what your brand stands for and why it matters',
  level: 'A2',
  description: "Learn the key words for describing a company's values, mission, and vision — the language used in brand strategy and company culture conversations.",
  heroImage: '/images/brand-values-hero.png',

  vocabulary: [
    {
      word: 'VALUE',
      partOfSpeech: 'noun',
      definition: 'A principle or belief that a company holds — something they think is important and that guides how they work.',
      example: "One of Brightline's core values is transparency — we are always open with clients about what we can and cannot do.",
      imageSlug: '/images/value.png',
    },
    {
      word: 'MISSION',
      partOfSpeech: 'noun',
      definition: 'A short statement that says what a company does and why it exists.',
      example: "Brightline's mission is to help small marketing teams work smarter — not harder.",
      imageSlug: '/images/mission.png',
    },
    {
      word: 'VISION',
      partOfSpeech: 'noun',
      definition: 'A description of what a company wants to achieve in the future — a long-term goal.',
      example: 'Our vision is to become the most trusted marketing tool for independent teams worldwide.',
      imageSlug: '/images/vision.png',
    },
    {
      word: 'PURPOSE',
      partOfSpeech: 'noun',
      definition: 'The reason a company exists — what drives it beyond just making money.',
      example: 'Our purpose is to make great marketing accessible to teams that do not have a big agency budget.',
      imageSlug: '/images/purpose.png',
    },
    {
      word: 'TRUST',
      partOfSpeech: 'noun',
      definition: 'The belief that a company will be honest, reliable, and do what they say they will do.',
      example: 'Trust takes time to build, but once clients trust you, they stay for a long time.',
      imageSlug: '/images/trust.png',
    },
    {
      word: 'AUTHENTICITY',
      partOfSpeech: 'noun',
      definition: 'Being honest and real — not pretending to be something you are not.',
      example: 'Authenticity is one of our values — we never overpromise. We say what we can do and we do it.',
      imageSlug: '/images/authenticity.png',
    },
    {
      word: 'CULTURE',
      partOfSpeech: 'noun',
      definition: 'The shared beliefs, values, and ways of working inside a company.',
      example: 'Our company culture is collaborative — everyone on the team has a voice and shares ideas.',
      imageSlug: '/images/culture.png',
    },
    {
      word: 'CONSISTENCY',
      partOfSpeech: 'noun',
      definition: 'Doing things the same way every time — being reliable and predictable in a positive way.',
      example: 'Consistency in how we communicate builds trust with clients over time.',
      imageSlug: '/images/consistency.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'STAND FOR',
      definition: 'Represent a set of values or beliefs — say what your brand believes in.',
      example: 'Brightline stands for simplicity, speed, and transparency — those are the things we will never compromise on.',
      imageSlug: '/images/stand-for.png',
    },
    {
      phrase: 'LIVE BY [YOUR VALUES]',
      definition: 'Actually act according to your stated values — not just say them.',
      example: 'We do not just say our values — we live by them every day, in how we treat clients and each other.',
      imageSlug: '/images/live-by-your-values.png',
    },
    {
      phrase: 'BUILD TRUST',
      definition: 'Develop a strong, reliable relationship with clients or customers over time.',
      example: 'We build trust by doing what we say, being honest when something goes wrong, and fixing it quickly.',
      imageSlug: '/images/build-trust.png',
    },
    {
      phrase: 'ALIGN WITH',
      definition: 'Match or fit with something — values, goals, or ways of working.',
      example: 'We work best with clients whose values align with ours — openness, speed, and a focus on results.',
      imageSlug: '/images/align-with.png',
    },
    {
      phrase: 'STAY TRUE TO',
      definition: 'Remain committed to your original values and purpose — not change them when it gets hard.',
      example: 'As we grow, we want to stay true to our original purpose — making marketing simple for small teams.',
      imageSlug: '/images/stay-true-to.png',
    },
    {
      phrase: 'COMMUNICATE [YOUR VALUES]',
      definition: 'Share your values clearly — through your words, actions, and content.',
      example: "We communicate our values through every piece of content we create — not just our 'about us' page.",
      imageSlug: '/images/communicate-your-values.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, what does Brightline stand for? I mean beyond the product — what are your actual [[value:a principle or belief that guides how a company works]]s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Great question. Our three core values are transparency, speed, and [[authenticity:being honest and real — not pretending to be something you are not]]. We never overpromise. We say what we can do and we do it.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And what is Brightline's [[mission:a short statement that says what a company does and why it exists]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'To help small marketing teams work smarter — not harder. That is why we built the product the way we did — simple, fast, and focused on results.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What is the difference between a mission and a [[vision:a description of what a company wants to achieve in the future]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The mission is what you do now. The vision is where you want to be in five or ten years. Our vision is to become the most trusted marketing tool for independent teams worldwide.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And your [[purpose:the reason a company exists beyond making money]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'To make great marketing accessible to teams that do not have a big agency budget. A lot of small companies have big ambitions — they just do not have big resources. We want to help those teams.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'How do you build [[trust:the belief that a company will be honest and do what they say]] with clients?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'By living our values every day. We are honest when something goes wrong. We fix problems quickly. [[Consistency:doing things the same way every time — being reliable]] in how we communicate and deliver is the biggest factor.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about [[culture:the shared beliefs and ways of working inside a company]]? Is that connected to brand values?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Completely. The culture is how the values live inside the team. If we value transparency but our team does not communicate openly, clients will feel the difference. The values have to be real — not just words on a page.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I need to think about this more seriously for my agency. I have never written down our values.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Start with three words that describe how you want clients to feel when they work with you. Everything else builds from there.',
    }
  ],

  matchingExercise: [
    {
        "word": "VALUE",
        "definition": "A principle or belief that guides how a company works and what it stands for"
    },
    {
        "word": "MISSION",
        "definition": "A short statement that says what a company does and why it exists"
    },
    {
        "word": "VISION",
        "definition": "A description of what a company wants to achieve in the future"
    },
    {
        "word": "PURPOSE",
        "definition": "The reason a company exists beyond making money"
    },
    {
        "word": "TRUST",
        "definition": "The belief that a company will be honest, reliable, and do what they say they will do"
    },
    {
        "word": "AUTHENTICITY",
        "definition": "Being honest and real — not pretending to be something you are not"
    },
    {
        "word": "CULTURE",
        "definition": "The shared beliefs, values, and ways of working inside a company"
    },
    {
        "word": "CONSISTENCY",
        "definition": "Doing things the same way every time — being reliable and predictable in a positive way"
    }
],
  fillBlankExercise: [
    {
        "before": "One of Brightline's core",
        "after": "s is transparency — we are always open with clients.",
        "answer": "value"
    },
    {
        "before": "Brightline's",
        "after": "is to help small marketing teams work smarter — not harder.",
        "answer": "mission"
    },
    {
        "before": "Our",
        "after": "is to become the most trusted marketing tool for independent teams worldwide.",
        "answer": "vision"
    },
    {
        "before": "Our",
        "after": "is to make great marketing accessible to teams without a big agency budget.",
        "answer": "purpose"
    },
    {
        "before": "",
        "after": "takes time to build, but once clients trust you, they stay for a long time.",
        "answer": "Trust"
    },
    {
        "before": "",
        "after": "is one of our values — we never overpromise.",
        "answer": "Authenticity"
    },
    {
        "before": "Our company",
        "after": "is collaborative — everyone on the team has a voice.",
        "answer": "culture"
    },
    {
        "before": "",
        "after": "in how we communicate builds trust with clients over time.",
        "answer": "Consistency"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What are Brightline's three core values?",
        "options": [
            "Innovation, growth, and scale",
            "Transparency, speed, and authenticity",
            "Price, quality, and reach",
            "Design, content, and data"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Brightline's mission?",
        "options": [
            "To become the biggest marketing tool in the world",
            "To help large enterprise companies manage their campaigns",
            "To help small marketing teams work smarter — not harder",
            "To make marketing affordable for everyone"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the difference between mission and vision?",
        "options": [
            "They mean the same thing",
            "Mission is what you do now; vision is where you want to be in the future",
            "Vision is what you do now; mission is the long-term goal",
            "Mission is about products; vision is about culture"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Brightline's purpose?",
        "options": [
            "To grow revenue as fast as possible",
            "To compete with enterprise tools",
            "To make great marketing accessible to teams without a big agency budget",
            "To help freelancers manage their clients"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Riley say Brightline builds trust?",
        "options": [
            "By offering the best price",
            "By being honest when things go wrong, fixing problems quickly, and being consistent",
            "By having the most features",
            "By working with well-known clients"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say about company culture and brand values?",
        "options": [
            "They are completely separate things",
            "Culture is more important than values",
            "The culture is how the values live inside the team — they have to be real, not just words",
            "Brand values are only for external marketing"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Brightline mean by 'authenticity'?",
        "options": [
            "Using authentic images in advertising",
            "Never overpromising — saying what you can do and doing it",
            "Being the original version of a product in the market",
            "Creating original content"
        ],
        "correctIndex": 1
    },
    {
        "question": "What advice does Riley give Dana at the end?",
        "options": [
            "Hire a brand agency to write your values",
            "Copy Brightline's values for your agency",
            "Start with three words that describe how you want clients to feel",
            "Write a long document explaining your culture"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question or comment. Talk about which response (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "What does your company stand for?",
                "options": [
                    "We stand for quality.",
                    "Brightline stands for three things: transparency, speed, and authenticity. We are always honest with clients about what we can do, we move fast, and we never overpromise.",
                    "We are a marketing software company."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names three specific values and explains what each one means in practice. A says nothing useful. C describes what the company is, not what it stands for."
            },
            {
                "customerLine": "What is your company's mission?",
                "options": [
                    "Our mission is to grow and help our clients grow too.",
                    "Our mission is to help small marketing teams work smarter — not harder. Everything we build goes back to that goal.",
                    "We have a mission statement — let me find it."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It states the mission clearly and connects it to the product. A is too generic — it could describe any company. C sounds unprepared."
            },
            {
                "customerLine": "Why should I trust your company?",
                "options": [
                    "We have been in business for five years.",
                    "Trust is earned over time — not just from words. We build trust by being honest when something goes wrong, fixing it quickly, and being consistent in how we communicate and deliver. Our NPS of 72 shows clients trust us.",
                    "Our clients are very happy with us."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names specific actions that build trust and backs it up with data. A just mentions longevity. C is a claim with no evidence."
            },
            {
                "customerLine": "What is the difference between your mission and your vision?",
                "options": [
                    "They are similar — both describe what we want to do.",
                    "Our mission is what we do right now — helping small marketing teams work smarter. Our vision is where we are going — to become the most trusted marketing tool for independent teams worldwide. The mission guides daily decisions; the vision guides long-term strategy.",
                    "The vision is more important than the mission."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains both concepts clearly, gives examples, and says what each one is used for. A says they are the same, which is incorrect. C makes a comparison but explains nothing."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three clients ask about Brightline's values and culture. As a group, decide which answer best shows Brightline's values in action. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A client whose contract ends and they want to leave",
                "description": "A client is not happy with the results of the last campaign and wants to cancel. They feel the product did not deliver what was promised.",
                "matchKey": "transparency"
            },
            {
                "name": "A new client asking about onboarding",
                "description": "A new client just signed up. They are worried the product will be complicated to set up. They have had bad experiences with other tools.",
                "matchKey": "speed"
            },
            {
                "name": "A client asking why Brightline's price is higher than a competitor",
                "description": "A potential client compares Brightline to a cheaper tool. They ask if the extra cost is worth it.",
                "matchKey": "purpose"
            }
        ],
        "options": [
            {
                "key": "transparency",
                "label": "Show the value of transparency",
                "description": "Acknowledge the issue honestly. Do not make excuses. Say what went wrong, what you are going to do to fix it, and what the client can expect next. Transparency builds more trust than a perfect result."
            },
            {
                "key": "speed",
                "label": "Show the value of speed",
                "description": "Reassure the client by walking them through the onboarding — live, in the call. Show them the product is set up in one day. Demonstrating your value is more powerful than describing it."
            },
            {
                "key": "purpose",
                "label": "Explain the purpose",
                "description": "Connect the price to the purpose. Brightline exists to help teams without big budgets get professional results. Show them how much time they will save and what that is worth — the cost comparison changes completely."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, discuss how you would finish it. Use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "What does your brand stand for?",
                "salespersonStart": "Brightline stands for three things: transparency, speed, and authenticity. Transparency means we are always honest with clients — even when things do not go as planned. Speed means",
                "suggestedCompletion": "we move fast and help our clients move fast too. And authenticity means we never overpromise — we say exactly what we can do and then we do it. Those are not just words — they are how we work every day."
            },
            {
                "customerLine": "How do you make sure your team lives by your values?",
                "salespersonStart": "We talk about our values in every team meeting — not just once a year. When we make a decision, we ask: 'Does this align with our values?' We also make sure we",
                "suggestedCompletion": "give the team honest feedback when they act against the values, and celebrate when they show them. Culture is built by the small things you do every day — not by a poster on the wall."
            },
            {
                "customerLine": "Why is brand authenticity important in marketing?",
                "salespersonStart": "Because people can tell when a brand is not being genuine. If your marketing says one thing but your product delivers something different,",
                "suggestedCompletion": "you lose trust very quickly. And trust is hard to build back once it is gone. Authentic brands do not have to shout — they let real clients speak for them and they stay consistent in everything they do."
            },
            {
                "customerLine": "What is the vision for your company in the next five years?",
                "salespersonStart": "Our vision is to become the most trusted marketing tool for independent teams worldwide. Right now we are strong in the UK and Europe. In the next five years,",
                "suggestedCompletion": "we want to grow into North America and expand the product to serve more types of small teams — not just marketing, but also content and communications. But always staying true to our mission: helping small teams work smarter."
            }
        ]
    }
},
};
