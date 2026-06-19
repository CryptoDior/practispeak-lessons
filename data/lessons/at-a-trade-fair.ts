import { Lesson } from '@/types/lesson';

export const atATradeFair: Lesson = {
  slug: 'at-a-trade-fair',
  title: 'At a Trade Fair',
  subtitle: 'Small talk and key vocabulary for meeting people at marketing events',
  level: 'A1-A2',
  description: 'Trade fairs and marketing events are a great place to meet potential clients, partners, and industry contacts. This lesson gives you the key vocabulary and phrases for starting conversations, introducing your company, and keeping the conversation going — in simple English.',
  heroImage: '/images/at-a-trade-fair-hero.png',

  vocabulary: [
    {
      word: 'STAND',
      partOfSpeech: 'noun',
      definition: 'The space or table that a company uses at a trade fair to show their products or services to visitors.',
      example: 'Our stand was in the main hall — we had a screen, some brochures, and two people to talk to visitors.',
      imageSlug: '/images/stand.png',
    },
    {
      word: 'DISPLAY',
      partOfSpeech: 'noun',
      definition: 'The way a company presents its products or materials at an event — including screens, banners, and samples.',
      example: 'The display included a large screen showing our best case studies and a table with printed materials.',
      imageSlug: '/images/display.png',
    },
    {
      word: 'LEAFLET',
      partOfSpeech: 'noun',
      definition: 'A small printed paper with information about a company, product, or event. Easy to give to visitors.',
      example: 'Dana prepared five hundred leaflets for the fair — each one had a QR code linking to our website.',
      imageSlug: '/images/leaflet.png',
    },
    {
      word: 'CONTACT',
      partOfSpeech: 'noun',
      definition: 'A person you know professionally — someone you have met at an event, worked with, or spoken to for business reasons.',
      example: 'Riley made three new contacts at the fair — she followed up with each one by email the next morning.',
      imageSlug: '/images/contact.png',
    },
    {
      word: 'HANDSHAKE',
      partOfSpeech: 'noun',
      definition: "The action of shaking someone's right hand when you meet them or say goodbye. Common in professional settings.",
      example: 'Dana walked up to the visitor, smiled, and offered a handshake — a simple and professional way to start.',
      imageSlug: '/images/handshake.png',
    },
    {
      word: 'BADGE',
      partOfSpeech: 'noun',
      definition: 'A small card or sticker that people wear at events showing their name and company.',
      example: "Riley looked at the visitor's badge and saw he was the marketing director at a large software company.",
      imageSlug: '/images/badge.png',
    },
    {
      word: 'BOOTH',
      partOfSpeech: 'noun',
      definition: 'Another word for a stand — the area a company has at a fair or exhibition. More common in American English.',
      example: 'Their booth was very impressive — they had a video wall, coffee, and a team of five people.',
      imageSlug: '/images/booth.png',
    },
    {
      word: 'NETWORK',
      partOfSpeech: 'verb',
      definition: 'To meet and talk to new professional contacts — at events, online, or through other people.',
      example: 'Dana went to the fair specifically to network — she wanted to meet five new potential clients.',
      imageSlug: '/images/network.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'COME ACROSS [SOMETHING/SOMEONE]',
      definition: 'To meet someone or find something by chance, without planning it.',
      example: 'I came across your stand and thought it would be good to introduce myself.',
      imageSlug: '/images/come-across-somethingsomeone.png',
    },
    {
      phrase: 'HAND [SOMETHING] OUT',
      definition: 'To give something to many people — for example, leaflets or business cards at an event.',
      example: 'We handed out two hundred leaflets in the first hour — visitors were really interested.',
      imageSlug: '/images/hand-something-out.png',
    },
    {
      phrase: 'FOLLOW UP WITH [SOMEONE]',
      definition: 'To contact someone after a first meeting to continue the conversation or take the next step.',
      example: 'After the fair, Riley followed up with every contact she made — she sent a short email to each one.',
      imageSlug: '/images/follow-up-with-someone.png',
    },
    {
      phrase: 'STRIKE UP A CONVERSATION',
      definition: 'To start talking to someone, especially someone you do not know.',
      example: 'Dana walked over to the visitor and struck up a conversation by asking about their business.',
      imageSlug: '/images/strike-up-a-conversation.png',
    },
    {
      phrase: 'SWAP DETAILS',
      definition: 'To share contact information — phone number, email, or business card — with another person.',
      example: 'At the end of the conversation, Riley and the client swapped details and agreed to have a call next week.',
      imageSlug: '/images/swap-details.png',
    },
    {
      phrase: 'STAND OUT FROM THE CROWD',
      definition: 'To be noticeably different from others — better, more interesting, or more visible.',
      example: 'A clear, well-designed display helps your stand stand out from the crowd at a busy trade fair.',
      imageSlug: '/images/stand-out-from-the-crowd.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, someone is looking at our [[stand:the space a company uses at a trade fair]]. Should I go and talk to them?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — look at their [[badge:a small card showing their name and company]] first. It says Tom Chen, Marketing Director at TechFlow.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Okay. I will go and introduce myself.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Hi Tom — I am Dana from MarketBridge. Great to meet you. [Offers a [[handshake:the action of shaking someone's right hand when you meet]].]",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Hi Dana — nice to meet you too. Your [[display:the way a company presents its materials at an event]] looks great. Tell me more about what you do.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'We help B2B companies build their brand and generate more leads through digital marketing. We specialise in LinkedIn and email campaigns.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Interesting — we have been looking at LinkedIn. How long does it take to see results?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Most of our clients start to see results in three months. Can I give you a [[leaflet:a small printed paper with information about a company]] with some of our case studies?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Yes, please. I would like to find out more. Are you at the fair tomorrow as well?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Yes — we are here both days. But let us [[network:to meet and talk to new professional contacts]] properly — can we [[swap details]] and set up a call next week?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[As Tom] Absolutely — here is my card. I will look forward to it.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Perfect. I will send you an email tomorrow to confirm the call. Thank you Tom — great to [[contact:a person you know professionally]] you today.',
    }
  ],

  matchingExercise: [
    {
        "word": "STAND",
        "definition": "The space or table a company uses at a trade fair to show their products or services"
    },
    {
        "word": "DISPLAY",
        "definition": "The way a company presents its products or materials at an event — screens, banners, samples"
    },
    {
        "word": "LEAFLET",
        "definition": "A small printed paper with information about a company or product — easy to give to visitors"
    },
    {
        "word": "CONTACT",
        "definition": "A person you know professionally — someone you met at an event or work with"
    },
    {
        "word": "HANDSHAKE",
        "definition": "The action of shaking someone's right hand when you meet them in a professional setting"
    },
    {
        "word": "BADGE",
        "definition": "A small card people wear at events showing their name and company"
    },
    {
        "word": "BOOTH",
        "definition": "Another word for a stand — the area a company has at a fair or exhibition"
    },
    {
        "word": "NETWORK",
        "definition": "To meet and talk to new professional contacts at events or online"
    }
],
  fillBlankExercise: [
    {
        "before": "Our",
        "after": "was in the main hall — we had a screen, brochures, and two people to talk to visitors.",
        "answer": "stand"
    },
    {
        "before": "The",
        "after": "included a large screen showing our best case studies and a table with printed materials.",
        "answer": "display"
    },
    {
        "before": "Dana prepared five hundred",
        "after": "s for the fair — each one had a QR code linking to our website.",
        "answer": "leaflet"
    },
    {
        "before": "Riley made three new",
        "after": "s at the fair — she followed up with each one by email the next morning.",
        "answer": "contact"
    },
    {
        "before": "Dana smiled and offered a",
        "after": "— a simple and professional way to start a conversation.",
        "answer": "handshake"
    },
    {
        "before": "Riley looked at the visitor's",
        "after": "and saw he was the marketing director at a large software company.",
        "answer": "badge"
    },
    {
        "before": "Their",
        "after": "was very impressive — they had a video wall, coffee, and a team of five people.",
        "answer": "booth"
    },
    {
        "before": "Dana went to the fair specifically to",
        "after": "— she wanted to meet five new potential clients.",
        "answer": "network"
    }
],
  multipleChoiceExercise: [
    {
        "question": "You are at a trade fair. A visitor stops at your stand and looks at your materials. What do you do first?",
        "options": [
            "Wait — they will speak to you when they are ready.",
            "Walk over, smile, and introduce yourself: 'Hi, I am Dana from MarketBridge — great to meet you.'",
            "Ask them immediately: 'Are you interested in buying our services?'",
            "Hand them a leaflet and say nothing."
        ],
        "correctIndex": 1
    },
    {
        "question": "At the end of a good conversation with a visitor, what is the next step?",
        "options": [
            "Ask them to sign a contract immediately.",
            "Say goodbye and wait for them to contact you.",
            "Swap contact details and agree on a next step — for example, a call next week.",
            "Send them your full presentation by email immediately."
        ],
        "correctIndex": 2
    },
    {
        "question": "A visitor looks at your stand and asks 'What do you do?' How should you answer?",
        "options": [
            "Give a detailed 10-minute presentation about all your services.",
            "Say one or two clear sentences about who you help and how. Keep it simple and interesting.",
            "Say: 'It is all in the leaflet — please take one and read it later.'",
            "Ask them what they do first, then decide if it is worth explaining."
        ],
        "correctIndex": 1
    },
    {
        "question": "You meet someone interesting at a trade fair but you do not have time to talk. What do you do?",
        "options": [
            "Apologise and walk away.",
            "Quickly swap contact details and say you will follow up by email after the fair.",
            "Ask them to wait at your stand for 30 minutes until you are free.",
            "Give them a leaflet and hope they contact you."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is it important to follow up after a trade fair?",
        "options": [
            "Because trade fairs are very expensive and you need to earn money back.",
            "Because most contacts forget about the people they met — a follow-up email keeps the conversation going and shows you are serious.",
            "Because you might have made mistakes at the fair and need to correct them.",
            "Because visitors expect an email from everyone they met."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is a leaflet used for at a trade fair?",
        "options": [
            "It is a way to pay for your stand at the fair.",
            "It is a small printed paper with information about your company — easy to give to visitors who want to know more.",
            "It is a document that visitors sign if they want to buy your services.",
            "It is a badge that shows who you are."
        ],
        "correctIndex": 1
    },
    {
        "question": "You see someone at the fair whose badge says they are the CEO of a company you want to work with. How do you start the conversation?",
        "options": [
            "Say: 'I saw your badge — we should work together.'",
            "Walk up, smile, introduce yourself and your company, and ask one simple question about their work.",
            "Wait for them to come to your stand first.",
            "Send them an email instead — it is less stressful."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'network' at a business event?",
        "options": [
            "To use your phone and laptop to stay connected to the internet.",
            "To sell your products directly to visitors.",
            "To meet and talk to new professional contacts — building relationships that may lead to future work.",
            "To hand out as many leaflets as possible."
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Have you ever been to a trade fair, conference, or business event? What was it like?",
        "What do you find difficult about meeting new people at business events in English?",
        "What is the goal when you meet someone new at a trade fair? What do you want to happen after?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "Riley looked at the visitor's _____ and saw he was the marketing director at TechFlow.",
            "options": [
                "leaflet",
                "badge",
                "stand"
            ],
            "correctIndex": 1,
            "explanation": "Badge is the small card people wear at events showing their name and company. Leaflet is a printed paper you give to visitors. Stand is the company's space at the fair. Riley looked at the badge to find out who the visitor was before speaking to them."
        },
        {
            "sentence": "At the end of the conversation, Riley and Tom _____ details and agreed to have a call next week.",
            "options": [
                "handed out",
                "swapped",
                "followed up"
            ],
            "correctIndex": 1,
            "explanation": "Swapped details means they shared each other's contact information. Handed out means to give something to many people. Followed up means to contact someone after a first meeting. Swapping details is the key step at the end of a good conversation at a trade fair."
        },
        {
            "sentence": "Dana prepared five hundred _____ s for the fair — each one had a QR code linking to the website.",
            "options": [
                "badges",
                "booths",
                "leaflets"
            ],
            "correctIndex": 2,
            "explanation": "Leaflets are small printed papers with information — perfect to give to visitors at a fair. Badges are what people wear to show their names. Booths are the spaces companies use at the fair. Leaflets are what you hand out to visitors."
        },
        {
            "sentence": "After the fair, Riley _____ with every contact she made — she sent a short email to each one.",
            "options": [
                "followed up",
                "handed out",
                "struck up"
            ],
            "correctIndex": 0,
            "explanation": "Followed up means to contact someone after a first meeting to continue the conversation. Handed out means to give something to many people. Struck up means to start a conversation. Following up is essential — it turns a trade fair contact into a real business relationship."
        },
        {
            "sentence": "Dana went to the fair specifically to _____ — she wanted to meet five new potential clients.",
            "options": [
                "display",
                "network",
                "contact"
            ],
            "correctIndex": 1,
            "explanation": "Network means to meet and talk to new professional contacts. Display is the way you present your materials at an event. Contact is a noun — a person you know professionally. Dana's goal was to network — to build new professional relationships."
        },
        {
            "sentence": "The visitor stopped at our _____ and started reading the case studies on the screen.",
            "options": [
                "stand",
                "leaflet",
                "handshake"
            ],
            "correctIndex": 0,
            "explanation": "Stand is the space or table a company uses at a trade fair. Leaflet is a printed paper. Handshake is the action of shaking hands when you meet. The visitor stopped at the stand — the company's physical space at the fair."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each situation and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Visitor at the fair: 'Hi — what does your company do exactly?'",
                "options": [
                    "Say: 'We do marketing — have you heard of us? We are quite well-known in this industry.'",
                    "Say: 'We help B2B companies grow their brand and generate leads through LinkedIn and email campaigns. Most of our clients see results in around three months. What kind of marketing are you doing right now?'",
                    "Say: 'It is all in this leaflet — please read it and contact us if you are interested.' [Hand over leaflet and walk away.]"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a clear, specific answer about what you do, includes a concrete result (three months), and ends with a question to start a real conversation. A is vague and sounds arrogant. C ends the conversation too soon — you want to talk to the visitor, not just give them paper."
            },
            {
                "customerLine": "Visitor: 'We already work with a marketing agency. I am not sure we need another one.'",
                "options": [
                    "Say: 'Okay — here is a leaflet in case you change your mind.' [Walk away.]",
                    "Say: 'That is completely fine. A lot of our best clients came to us while already working with another agency. What is the one area where you feel your current marketing could be stronger?'",
                    "Say: 'Your current agency is probably not as good as us. Let me show you the difference.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It is respectful, keeps the conversation going, and asks a smart question to understand their real needs. A gives up immediately — you lose a potential opportunity. C is disrespectful about their current agency, which creates a very bad first impression."
            },
            {
                "customerLine": "Visitor: 'This is interesting. Can we talk more? But I only have five minutes right now.'",
                "options": [
                    "Say: 'Five minutes is not enough — come back when you have more time.'",
                    "Say: 'No problem — let us swap details now and I will send you a follow-up email this evening. We can book a proper call for next week.'",
                    "Say: 'Okay — let me tell you everything in five minutes.' [Start a full presentation.]"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Swapping details and agreeing on a next step is the smart move when someone is interested but short on time. A misses the opportunity. C tries to fit too much into five minutes and will feel rushed and overwhelming for the visitor."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this trade fair conversation. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Dana",
                "text": "Hi! I am Dana from MarketBridge. Nice to meet you."
            },
            {
                "speaker": "Visitor",
                "text": "Hi Dana. I am Tom — I work in marketing at TechFlow."
            },
            {
                "speaker": "Dana",
                "text": "Great! So Tom, what you do exactly at TechFlow?"
            },
            {
                "speaker": "Visitor",
                "text": "I manage our digital marketing — mainly paid ads and email."
            },
            {
                "speaker": "Dana",
                "text": "Interesting. We specialise in LinkedIn and content marketing for B2B companies. Can I give you a leaflet?"
            },
            {
                "speaker": "Visitor",
                "text": "Yes please."
            },
            {
                "speaker": "Dana",
                "text": "Are you interest in setting up a call next week to talk more?"
            },
            {
                "speaker": "Visitor",
                "text": "Sure — that sounds good."
            },
            {
                "speaker": "Dana",
                "text": "Fantastic. Let me take your contact. I will send you an email tomorrow."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "what you do exactly",
                "correction": "what do you do exactly",
                "explanation": "In English, direct questions need the auxiliary verb before the subject. The correct form is: 'What do you do exactly?' not 'What you do exactly?' This is a very common mistake for speakers of Spanish, Portuguese, and other languages where the word order is different."
            },
            {
                "lineIndex": 6,
                "incorrectText": "Are you interest in",
                "correction": "Are you interested in",
                "explanation": "'Interest' is a noun or verb. When used as an adjective, the correct form is 'interested' — it is a past participle used as an adjective. Say: 'Are you interested in...?' Never: 'Are you interest in...?'"
            },
            {
                "lineIndex": 8,
                "incorrectText": "take your contact",
                "correction": "take your contact details / swap details",
                "explanation": "'Take your contact' is not correct English. The right phrases are: 'take your contact details', 'swap details', or 'take your card'. Contact on its own is a noun for a person — it does not work as a phrase meaning 'contact information'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line. Use language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Visitor: 'I have never heard of your company. What makes you different from other marketing agencies?'",
                "salespersonStart": "That is a great question. What makes us different is",
                "suggestedCompletion": "our focus on B2B companies. We do not try to work with everyone — we specialise in LinkedIn and email marketing for companies like yours, and we can usually show results within three months. Would you like to see a case study from a company in your industry?"
            },
            {
                "customerLine": "Visitor: 'We tried working with a marketing agency before and it did not go well. We wasted a lot of money.'",
                "salespersonStart": "I am sorry to hear that — that is unfortunately quite common.",
                "suggestedCompletion": "The most common reason is that the agency did not understand the client's business well enough before starting. Our process starts with a discovery session where we learn everything about your goals and your audience before we do anything. Would it be useful to have a short call to show you how that works?"
            },
            {
                "customerLine": "Visitor: 'Your stand looks great. How long have you been in business?'",
                "salespersonStart": "Thank you — we have been in business for five years.",
                "suggestedCompletion": "We started with just two people and now we have a team of twelve. We work mainly with B2B companies in the tech and professional services sectors. Are you based here in the city or are you travelling for the fair?"
            }
        ]
    }
},
};
