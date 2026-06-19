import { Lesson } from '@/types/lesson';

export const onlineAndOfflineMarketing: Lesson = {
  slug: 'online-and-offline-marketing',
  title: 'Online and Offline Marketing',
  subtitle: 'How to talk about the ways you reach your customers',
  level: 'A1-A2',
  description: 'Learn the words for different marketing channels and how to say simply where and how you reach your customers.',
  heroImage: '/images/online-and-offline-marketing-hero.png',

  vocabulary: [
    {
      word: 'WEBSITE',
      partOfSpeech: 'noun',
      definition: 'A set of pages on the internet for a company or person.',
      example: 'People can find out about our products on our website.',
      imageSlug: '/images/website.png',
    },
    {
      word: 'SOCIAL MEDIA',
      partOfSpeech: 'noun',
      definition: 'Online tools where people share posts, photos, and videos. For example: Instagram, LinkedIn, and Facebook.',
      example: 'We share news about the brand on social media every week.',
      imageSlug: '/images/social-media.png',
    },
    {
      word: 'PRINT',
      partOfSpeech: 'noun',
      definition: 'Written or printed material, like leaflets, posters, or magazines.',
      example: 'We use print ads in a local magazine to reach people in our area.',
      imageSlug: '/images/print.png',
    },
    {
      word: 'TV',
      partOfSpeech: 'noun',
      definition: 'Television — a screen that shows videos and programmes.',
      example: 'Big brands often advertise on TV to reach a lot of people at the same time.',
      imageSlug: '/images/tv.png',
    },
    {
      word: 'EMAIL',
      partOfSpeech: 'noun',
      definition: 'A message you send to someone over the internet.',
      example: 'We send an email to our clients every week with news and updates.',
      imageSlug: '/images/email.png',
    },
    {
      word: 'CHANNEL',
      partOfSpeech: 'noun',
      definition: 'A way to reach people with your marketing. For example: social media, email, or print.',
      example: 'Email is our best channel for reaching existing clients.',
      imageSlug: '/images/channel.png',
    },
    {
      word: 'ONLINE',
      partOfSpeech: 'adjective',
      definition: 'On the internet.',
      example: 'Most of our marketing is online — we use social media, email, and our website.',
      imageSlug: '/images/online.png',
    },
    {
      word: 'OFFLINE',
      partOfSpeech: 'adjective',
      definition: 'Not on the internet — in real life.',
      example: 'We also do some offline marketing, like leaflets and events.',
      imageSlug: '/images/offline.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'REACH PEOPLE THROUGH',
      definition: 'Say which channel you use to connect with your audience.',
      example: 'We reach most of our clients through email and social media.',
      imageSlug: '/images/reach-people-through.png',
    },
    {
      phrase: 'POST ON SOCIAL MEDIA',
      definition: 'Share something on a social media platform.',
      example: 'We post on social media three times a week to stay in front of our audience.',
      imageSlug: '/images/post-on-social-media.png',
    },
    {
      phrase: 'SEND OUT',
      definition: 'Send something to many people at the same time.',
      example: 'We send out a weekly email to all our clients with news and tips.',
      imageSlug: '/images/send-out.png',
    },
    {
      phrase: 'RUN AN AD',
      definition: 'Pay to show your message to people on a channel.',
      example: 'We run ads on Google and LinkedIn to reach new customers.',
      imageSlug: '/images/run-an-ad.png',
    },
    {
      phrase: 'DRIVE TRAFFIC TO',
      definition: 'Help people go to your website.',
      example: 'We run social media ads to drive traffic to our website.',
      imageSlug: '/images/drive-traffic-to.png',
    },
    {
      phrase: 'BEST FOR',
      definition: 'Say which channel works well for a certain goal or audience.',
      example: 'Email is best for talking to existing clients. Social media is best for finding new ones.',
      imageSlug: '/images/best-for.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, what [[channel:a way to reach people with your marketing]]s does Brightline use to reach customers?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We use a mix of [[online:on the internet]] and [[offline:not on the internet — in real life]] channels. Online is the biggest part for us.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What do you use online?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our main online channels are our [[website:a set of pages on the internet for a company or person]], [[social media:online tools where people share posts, photos, and videos]] — mostly LinkedIn and Instagram — and [[email:a message you send to someone over the internet]] campaigns.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Which one works best for you?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Email is best for our existing clients. We send out a weekly email with news and tips. Social media is best for finding new customers.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Do you use any offline channels? Like [[print:written or printed material, like leaflets, posters, or magazines]] or [[TV:television — a screen that shows videos and programmes]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We do some print — we have a leaflet and we advertise in one industry magazine. TV is too expensive for us right now.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That makes sense. What about events — are those online or offline?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Both! We go to offline events like trade shows, and we also do online webinars. They are a great channel for meeting new clients.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Which channel brings the most new customers to Brightline?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Social media and our website are the biggest ones. We run ads on LinkedIn to drive people to the website, and then many of them sign up.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Good to know — I want to use more channels for my agency too.',
    }
  ],

  matchingExercise: [
    {
        "word": "WEBSITE",
        "definition": "A set of pages on the internet for a company or person"
    },
    {
        "word": "SOCIAL MEDIA",
        "definition": "Online tools where people share posts, photos, and videos"
    },
    {
        "word": "PRINT",
        "definition": "Written or printed material, like leaflets, posters, or magazines"
    },
    {
        "word": "TV",
        "definition": "Television — a screen that shows videos and programmes"
    },
    {
        "word": "EMAIL",
        "definition": "A message you send to someone over the internet"
    },
    {
        "word": "CHANNEL",
        "definition": "A way to reach people with your marketing"
    },
    {
        "word": "ONLINE",
        "definition": "On the internet"
    },
    {
        "word": "OFFLINE",
        "definition": "Not on the internet — in real life"
    }
],
  fillBlankExercise: [
    {
        "before": "People can find out about our products on our",
        "after": ".",
        "answer": "website"
    },
    {
        "before": "We share news about the brand on",
        "after": "every week.",
        "answer": "social media"
    },
    {
        "before": "We use",
        "after": "ads in a local magazine to reach people in our area.",
        "answer": "print"
    },
    {
        "before": "Big brands often advertise on",
        "after": "to reach a lot of people at the same time.",
        "answer": "TV"
    },
    {
        "before": "We send an",
        "after": "to our clients every week with news and updates.",
        "answer": "email"
    },
    {
        "before": "Email is our best",
        "after": "for reaching existing clients.",
        "answer": "channel"
    },
    {
        "before": "Most of our marketing is",
        "after": "— we use social media, email, and our website.",
        "answer": "online"
    },
    {
        "before": "We also do some",
        "after": "marketing, like leaflets and events.",
        "answer": "offline"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What are Brightline's three main online channels?",
        "options": [
            "TV, radio, and print",
            "Website, social media, and email",
            "LinkedIn, Twitter, and Facebook",
            "Events, webinars, and podcasts"
        ],
        "correctIndex": 1
    },
    {
        "question": "Which channel is best for talking to existing clients?",
        "options": [
            "TV",
            "Print",
            "Social media",
            "Email"
        ],
        "correctIndex": 3
    },
    {
        "question": "Which channel is best for finding new customers?",
        "options": [
            "Email",
            "Print magazines",
            "Social media",
            "TV"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why doesn't Brightline use TV advertising?",
        "options": [
            "They don't think TV works",
            "TV is too expensive for them right now",
            "Their audience doesn't watch TV",
            "They tried it and it didn't work"
        ],
        "correctIndex": 1
    },
    {
        "question": "What offline channels does Brightline use?",
        "options": [
            "TV and radio",
            "Leaflets and industry magazine ads",
            "Billboards and posters",
            "Newspapers and direct mail"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Brightline do to bring people to their website?",
        "options": [
            "They send letters",
            "They run print ads",
            "They run ads on LinkedIn",
            "They go on TV"
        ],
        "correctIndex": 2
    },
    {
        "question": "What type of events does Brightline attend?",
        "options": [
            "Only online webinars",
            "Only offline trade shows",
            "Both offline trade shows and online webinars",
            "Sports events and conferences"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana want to do after the conversation?",
        "options": [
            "Stop using social media",
            "Start using TV advertising",
            "Use more channels for her agency",
            "Move all marketing offline"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question. Talk about which answer (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "How do you reach your customers?",
                "options": [
                    "We use many different ways.",
                    "We reach most customers online — through our website, social media, and email. We also do some offline marketing like leaflets and trade shows.",
                    "We have a good marketing plan."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names the channels clearly and separates online from offline. A gives no real information. C says nothing useful about how you actually reach people."
            },
            {
                "customerLine": "Do you use social media?",
                "options": [
                    "Yes — we post on LinkedIn and Instagram three times a week. It is our best channel for finding new customers.",
                    "Yes, we are on social media.",
                    "We try to use social media when we can."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It names the platforms, says how often you post, and says what the channel is good for. B and C say almost nothing useful."
            },
            {
                "customerLine": "Is email still a useful channel?",
                "options": [
                    "Yes — we send out a weekly email to all our clients. It is our best channel for staying in touch with people who already know us.",
                    "Some people say email is old, but we still use it.",
                    "We send emails sometimes."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It defends email with a real reason — it is the best channel for existing clients — and says how you use it. B sounds unsure. C gives no useful information."
            },
            {
                "customerLine": "Do you do any marketing that is not online?",
                "options": [
                    "Not really — most of our marketing is online.",
                    "Yes — we use print ads in one industry magazine and we go to trade shows. They are a good way to meet new clients in person.",
                    "We have done some offline things before."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names the offline channels and says why they are useful. A closes the conversation without giving any information. C says almost nothing and sounds unsure."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three clients want to know which channels to use. As a group, talk about which channel fits each situation best. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A small agency wanting new clients",
                "description": "Dana runs a small marketing agency. She wants to find new clients but does not have a big budget. She needs one channel to start with.",
                "matchKey": "social"
            },
            {
                "name": "A company with existing clients to stay in touch with",
                "description": "A company has 300 existing clients. They want to keep in touch and share news and updates with them every week.",
                "matchKey": "email"
            },
            {
                "name": "A company launching a new product at a trade show",
                "description": "A company is launching a new product and wants to reach people at a big industry event next month.",
                "matchKey": "offline"
            }
        ],
        "options": [
            {
                "key": "social",
                "label": "Social media",
                "description": "Post on LinkedIn or Instagram to reach new people. You can start with no budget by posting for free. It is the best channel for finding new clients when you are just starting out."
            },
            {
                "key": "email",
                "label": "Email",
                "description": "Send a regular email to the people who already know you. It is the best channel for staying in touch with existing clients and sharing news and updates."
            },
            {
                "key": "offline",
                "label": "Offline — event or print",
                "description": "Go to a trade show or event. Meet people in person and give them a leaflet or a card. Best when you want to reach people face to face at a specific event."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, talk about how you would finish it. Use words from this lesson. There is no one right answer — share your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "Which channels do you use?",
                "salespersonStart": "We use a mix of online and offline channels. Online, we mainly use",
                "suggestedCompletion": "our website, social media, and email. For offline, we go to trade shows and we have a print ad in one industry magazine."
            },
            {
                "customerLine": "How do you use email in your marketing?",
                "salespersonStart": "We send out a weekly email to all our clients. It is our best channel for",
                "suggestedCompletion": "staying in touch with people who already know us. We share news, tips, and updates — and it helps them remember we are here."
            },
            {
                "customerLine": "How do you get people to your website?",
                "salespersonStart": "We run ads on LinkedIn and post on social media. Both of those help to",
                "suggestedCompletion": "drive traffic to our website. Once people are on the website, they can read about our products and sign up for a free trial."
            },
            {
                "customerLine": "Is offline marketing still worth it?",
                "salespersonStart": "Yes — for some things, it is still very good. Trade shows are great because you can",
                "suggestedCompletion": "meet new clients in person and talk to them directly. And a print ad in the right magazine can reach people who are not on social media."
            }
        ]
    }
},
};
