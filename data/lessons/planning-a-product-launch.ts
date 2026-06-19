import { Lesson } from '@/types/lesson';

export const planningAProductLaunch: Lesson = {
  slug: 'planning-a-product-launch',
  title: 'Planning a Product Launch',
  subtitle: 'Future tense in marketing — talking about what you are going to do and what will happen',
  level: 'A2',
  description: "Every product launch needs a clear plan — and the ability to talk about future actions in English. This lesson focuses on using 'going to' and 'will' correctly in a marketing context, alongside key vocabulary for launch events, teasers, and reveals.",
  heroImage: '/images/planning-a-product-launch-hero.png',

  vocabulary: [
    {
      word: 'TEASER',
      partOfSpeech: 'noun',
      definition: 'A short piece of content that hints at something coming — used to build curiosity and excitement before a launch.',
      example: 'We posted three teaser videos on LinkedIn in the week before the launch — each one revealed a small detail about the new service.',
      imageSlug: '/images/teaser.png',
    },
    {
      word: 'REVEAL',
      partOfSpeech: 'noun',
      definition: 'The moment when a new product, service, or campaign is shown to the public for the first time — often a planned event or announcement.',
      example: 'The reveal happened live on a LinkedIn event — over 300 people watched as Riley unveiled the new platform name and features.',
      imageSlug: '/images/reveal.png',
    },
    {
      word: 'COUNTDOWN',
      partOfSpeech: 'noun',
      definition: 'A series of posts or communications leading up to a launch date — building anticipation day by day.',
      example: 'We ran a five-day countdown on LinkedIn — each day a new post gave the audience one more reason to attend the launch event.',
      imageSlug: '/images/countdown.png',
    },
    {
      word: 'ANTICIPATION',
      partOfSpeech: 'noun',
      definition: 'The feeling of excitement and interest while waiting for something to happen — what a good teaser campaign creates.',
      example: 'The teaser campaign built a lot of anticipation — by launch day, over 200 people had already registered for the event.',
      imageSlug: '/images/anticipation.png',
    },
    {
      word: 'TIMELINE',
      partOfSpeech: 'noun',
      definition: 'A plan that shows when each task or activity will happen — from now until the launch date.',
      example: 'Dana built a detailed timeline for the launch — week one was teaser content, week two was the event, week three was follow-up.',
      imageSlug: '/images/timeline.png',
    },
    {
      word: 'MILESTONE',
      partOfSpeech: 'noun',
      definition: 'An important stage or event in a project — a key point that marks progress towards the final goal.',
      example: 'We set three milestones for the launch: teaser campaign live, event registration open, and reveal day.',
      imageSlug: '/images/milestone.png',
    },
    {
      word: 'LAUNCH EVENT',
      partOfSpeech: 'noun',
      definition: 'A planned event — online or in person — where a new product or service is officially introduced to an audience.',
      example: 'The launch event was a 45-minute LinkedIn Live session — Riley presented the new service and answered questions from the audience.',
      imageSlug: '/images/launch-event.png',
    },
    {
      word: 'ROLLOUT',
      partOfSpeech: 'noun',
      definition: 'The process of making a new product or service available — often done gradually, starting with a small group.',
      example: 'After the launch event, the rollout began — existing clients got access first, then new sign-ups from the following week.',
      imageSlug: '/images/rollout.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'BUILD UP TO [SOMETHING]',
      definition: 'To create growing excitement or anticipation in the period leading up to an event or launch.',
      example: 'We are going to build up to the reveal with a week of teaser content — each post will give the audience one more clue.',
      imageSlug: '/images/build-up-to-something.png',
    },
    {
      phrase: 'LEAD UP TO [SOMETHING]',
      definition: 'To happen in the period before a key event — the activities and communication that come first.',
      example: 'In the two weeks leading up to the launch, we will post a teaser every other day to keep the audience interested.',
      imageSlug: '/images/lead-up-to-something.png',
    },
    {
      phrase: 'COUNT DOWN TO [SOMETHING]',
      definition: 'To mark the decreasing time before an event — often through daily posts or communications.',
      example: 'We are going to count down to the launch with five posts — one per day — each one revealing a new feature.',
      imageSlug: '/images/count-down-to-something.png',
    },
    {
      phrase: 'ROLL OUT [SOMETHING]',
      definition: 'To make a product or service available to users — often in stages.',
      example: 'We will roll out the new platform to existing clients first, then open it to new customers the following month.',
      imageSlug: '/images/roll-out-something.png',
    },
    {
      phrase: 'UNVEIL [SOMETHING]',
      definition: 'To reveal something publicly for the first time — to officially show or announce it.',
      example: 'At the launch event, Riley is going to unveil the new platform name and show a live demo.',
      imageSlug: '/images/unveil-something.png',
    },
    {
      phrase: 'GENERATE BUZZ',
      definition: 'To create excitement and conversation around a product or event — to get people talking before it happens.',
      example: 'The teaser campaign is designed to generate buzz — we want people talking about the launch before it even happens.',
      imageSlug: '/images/generate-buzz.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, the client wants to launch their new platform in six weeks. We need a plan. Where do we start?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Let us start with the [[timeline:a plan showing when each activity will happen]]. We have six weeks — so week one and two are for the [[teaser:a short piece of content that hints at something coming]] campaign.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What [[teaser:content that hints at something coming]] s are we going to create? Video or posts?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We are going to do three short videos — each one reveals a small detail about the platform. They will build [[anticipation:the feeling of excitement while waiting for something]] and generate buzz before the [[reveal:the moment something new is shown for the first time]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And the [[launch event:a planned event where a new product is officially introduced]] — when is that?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Week five. It will be a LinkedIn Live session — forty-five minutes. Riley will [[unveil]] the platform name and run a live demo. We will also announce early access pricing.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about the [[countdown:a series of posts building up to the launch]]? When does that start?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We are going to [[count down to]] the event starting five days before — one post per day. Each post will reveal one [[milestone:an important stage or event in a project]] — teaser, registration open, early access, event day.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And after the event — what will the [[rollout:the process of making something available, often gradually]] look like?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We will [[roll out]] access to existing clients first in week five, then open to new sign-ups in week six. The email sequence will go out automatically — three emails in the first week after the [[launch event:a planned event to introduce something new]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I will build the full [[timeline:a plan showing when each activity will happen]] today. What is the first [[milestone:an important stage in the project]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'First [[milestone:an important stage]] is the teaser campaign going live — that is this Monday. Everything else [[build up to]] the [[reveal:the moment the product is shown for the first time]] in week five.',
    }
  ],

  matchingExercise: [
    {
        "word": "TEASER",
        "definition": "A short piece of content that hints at something coming — used to build curiosity before a launch"
    },
    {
        "word": "REVEAL",
        "definition": "The moment a new product or service is shown to the public for the first time"
    },
    {
        "word": "COUNTDOWN",
        "definition": "A series of daily posts or communications leading up to a launch date — building anticipation"
    },
    {
        "word": "ANTICIPATION",
        "definition": "The feeling of excitement and interest while waiting for something to happen"
    },
    {
        "word": "TIMELINE",
        "definition": "A plan showing when each task or activity will happen — from now to the launch date"
    },
    {
        "word": "MILESTONE",
        "definition": "An important stage or event in a project — a key point that marks progress"
    },
    {
        "word": "LAUNCH EVENT",
        "definition": "A planned event where a new product or service is officially introduced to an audience"
    },
    {
        "word": "ROLLOUT",
        "definition": "The process of making a new product available — often done gradually, starting with a small group"
    }
],
  fillBlankExercise: [
    {
        "before": "We posted three",
        "after": "videos on LinkedIn the week before the launch — each revealed a small detail.",
        "answer": "teaser"
    },
    {
        "before": "The",
        "after": "happened live on LinkedIn — 300 people watched as Riley unveiled the new platform.",
        "answer": "reveal"
    },
    {
        "before": "We ran a five-day",
        "after": "on LinkedIn — each day a new post gave the audience another reason to attend.",
        "answer": "countdown"
    },
    {
        "before": "The teaser campaign built a lot of",
        "after": "— by launch day, over 200 people had already registered.",
        "answer": "anticipation"
    },
    {
        "before": "Dana built a detailed",
        "after": "for the launch — week one was teasers, week two was the event, week three follow-up.",
        "answer": "timeline"
    },
    {
        "before": "We set three",
        "after": "s: teaser campaign live, event registration open, and reveal day.",
        "answer": "milestone"
    },
    {
        "before": "The",
        "after": "was a 45-minute LinkedIn Live session — Riley presented the new service and took questions.",
        "answer": "launch event"
    },
    {
        "before": "After the event, the",
        "after": "began — existing clients got access first, then new sign-ups the following week.",
        "answer": "rollout"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the difference between 'going to' and 'will' in a launch plan?",
        "options": [
            "They mean exactly the same thing — use whichever you prefer.",
            "'Going to' is used for plans already decided before the conversation. 'Will' is used for decisions made in the moment or predictions about the future.",
            "'Going to' is more formal. 'Will' is informal.",
            "'Going to' is for the past. 'Will' is for the future."
        ],
        "correctIndex": 1
    },
    {
        "question": "You want to build excitement before your launch. What type of content do you create?",
        "options": [
            "A detailed product brochure with all the features and pricing.",
            "Teaser content — short posts or videos that hint at what is coming without revealing everything.",
            "A press release with the full launch announcement.",
            "A customer testimonial from someone who has used the product."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client asks: 'What is a launch event?' How do you explain it?",
        "options": [
            "A launch event is when you send an email announcing a new product.",
            "A launch event is a planned occasion — online or in person — where a new product or service is officially shown to an audience for the first time.",
            "A launch event is a party for the internal team to celebrate the new product.",
            "A launch event is when you put a new product on your website."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which sequence is the correct order for a product launch plan?",
        "options": [
            "Reveal → Teaser → Countdown → Rollout",
            "Rollout → Launch event → Teaser → Countdown",
            "Teaser → Countdown → Reveal / Launch event → Rollout",
            "Launch event → Teaser → Countdown → Reveal"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does 'rolling out to existing clients first' mean?",
        "options": [
            "Giving the best clients a discount before the launch.",
            "Making the new product available to existing clients before opening it to new customers.",
            "Sending existing clients a teaser about the new product.",
            "Asking existing clients to help promote the launch."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which sentence uses 'going to' correctly for a planned launch activity?",
        "options": [
            "We will post three teasers next week — I just decided now.",
            "We are going to post three teasers next week — we planned this two weeks ago.",
            "We go to post three teasers next week.",
            "We going to post three teasers next week."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the purpose of a countdown in a launch campaign?",
        "options": [
            "To tell the audience how much the product will cost.",
            "To build growing anticipation day by day — so that by launch day, the audience is excited and ready.",
            "To let the audience know the launch has been delayed.",
            "To remind the team of the deadline for the project."
        ],
        "correctIndex": 1
    },
    {
        "question": "A milestone in a project plan is best described as:",
        "options": [
            "A task that takes a long time to complete.",
            "A key stage or event that marks important progress — for example, 'teaser campaign live' or 'event registration open'.",
            "The final deadline for the whole project.",
            "A problem or delay that affects the project timeline."
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Have you ever planned or been involved in a product launch? What were the biggest challenges?",
        "What is a 'teaser' in marketing? Can you think of an example from a brand you know?",
        "What do you think is the most important element of a successful product launch — the product itself, the event, or the communication strategy? Why?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "We are _____ create three teaser videos in the week before the launch — each will reveal one detail.",
            "options": [
                "will",
                "going to",
                "going"
            ],
            "correctIndex": 1,
            "explanation": "'Going to' is used for plans that were decided before the conversation. 'Will' is for decisions made in the moment or predictions. 'Going' on its own is incomplete — you need 'going to' + verb. Use 'we are going to create' for a pre-planned launch activity."
        },
        {
            "sentence": "The _____ will be a 45-minute LinkedIn Live session — Riley will present the platform and take questions.",
            "options": [
                "teaser",
                "rollout",
                "launch event"
            ],
            "correctIndex": 2,
            "explanation": "Launch event is a planned occasion where a new product is officially introduced. Teaser is content that hints at something before the launch. Rollout is making the product available after the launch. The LinkedIn Live session IS the launch event — it is where the product is revealed."
        },
        {
            "sentence": "We are going to _____ to the reveal with a five-day countdown — one post per day.",
            "options": [
                "build up",
                "lead up",
                "roll out"
            ],
            "correctIndex": 0,
            "explanation": "Build up to means to create growing excitement in the period leading up to an event. Lead up to describes what happens before an event. Roll out means to make something available. 'Building up to the reveal' is the best phrase — it captures the idea of creating momentum and anticipation."
        },
        {
            "sentence": "The _____ campaign built excitement before the launch — each post hinted at a new feature without saying too much.",
            "options": [
                "milestone",
                "teaser",
                "countdown"
            ],
            "correctIndex": 1,
            "explanation": "Teaser campaign is the series of content that builds curiosity before a launch. Milestone is a key stage in a project. Countdown is the daily posts in the final days before launch. A teaser campaign runs in the weeks before the launch — the countdown is the final days."
        },
        {
            "sentence": "After the event, we _____ roll out access to existing clients first, then open it to new sign-ups a week later.",
            "options": [
                "are going to",
                "going to",
                "go to"
            ],
            "correctIndex": 0,
            "explanation": "'Are going to' is the correct form — it is the present continuous of 'going to' which shows a plan already decided. 'Going to' alone (without 'are') is grammatically incomplete. 'Go to' is not the future form. Always use: subject + am/is/are + going to + verb."
        },
        {
            "sentence": "The first _____ in our launch plan is the teaser campaign going live — everything else builds from there.",
            "options": [
                "timeline",
                "anticipation",
                "milestone"
            ],
            "correctIndex": 2,
            "explanation": "Milestone is an important stage in a project — a key point that marks progress. Timeline is the overall plan showing when things will happen. Anticipation is the feeling of excitement. The first milestone is the first key event — in this case, the teaser campaign going live."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'We want to launch our new service in four weeks. Is that enough time?'",
                "options": [
                    "Say: 'Four weeks is fine — just announce it on LinkedIn and send an email.'",
                    "Say: 'Four weeks is tight but manageable if we start immediately. Here is what I suggest: we use week one for teaser content, week two for the countdown and event promotion, week three for the launch event itself, and week four for follow-up and the rollout to your existing clients. Are you okay to start the teasers this week?'",
                    "Say: 'Four weeks is not enough. A proper launch needs at least three months of preparation.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It accepts the four-week constraint, gives a realistic plan, and ends with a clear next action. A undersells the launch — just posting on LinkedIn is not a strategy. C is discouraging and unhelpful without giving the client an alternative."
            },
            {
                "customerLine": "Client: 'What is a teaser campaign and do we really need one?'",
                "options": [
                    "Say: 'A teaser is just a few posts before the launch. It is optional — some clients skip it.'",
                    "Say: 'A teaser campaign is a series of short posts or videos in the weeks before the launch — each one reveals a small detail about your new product to build curiosity and anticipation. Without it, your reveal will arrive with no audience expecting it. The teaser is what fills the room before the show starts.'",
                    "Say: 'A teaser campaign is very complex and expensive. Most companies at your stage do not do it.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains what a teaser campaign is clearly, explains why it matters (fills the room before the show), and connects it to the client's situation. A dismisses the teaser's value. C overstates the complexity and puts the client off a valuable strategy."
            },
            {
                "customerLine": "Client: 'Should we announce everything on launch day or build up to it over time?'",
                "options": [
                    "Say: 'Announce everything on launch day — hold nothing back, give people all the information at once.'",
                    "Say: 'Announce everything on launch day — you only get one chance to make a first impression.'",
                    "Say: 'Building up is almost always better. Use teasers to create anticipation, a countdown to build momentum, and then a reveal on launch day where you share everything. The audience will be more engaged because they have been waiting — launch day feels like a destination, not just a notification.'"
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It explains the strategy clearly — teasers create anticipation, countdown builds momentum, the reveal is the payoff. A and B both advocate for announcing everything at once, which misses the opportunity to build an audience before the launch."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this launch plan summary. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Plan",
                "text": "Product Launch: New LinkedIn Management Platform"
            },
            {
                "speaker": "Plan",
                "text": "Week 1–2: We going to post three teaser videos — each one reveals a new detail about the platform."
            },
            {
                "speaker": "Plan",
                "text": "Week 3: The countdown begins. We will post one update per day building anticipation."
            },
            {
                "speaker": "Plan",
                "text": "Week 4: The launch event. Riley will unveiled the platform in a 45-minute LinkedIn Live session."
            },
            {
                "speaker": "Plan",
                "text": "Week 5–6: Rollout. We are going to give access to existing clients first, then open to new sign-ups."
            },
            {
                "speaker": "Plan",
                "text": "After the launch, we will to send a three-part email sequence to everyone who attended the event."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "We going to post",
                "correction": "We are going to post",
                "explanation": "'Going to' must be preceded by the correct form of 'to be': I am going to, you are going to, we are going to. 'We going to' is missing the verb 'are'. This is one of the most common grammar mistakes with the future 'going to' structure."
            },
            {
                "lineIndex": 3,
                "incorrectText": "Riley will unveiled",
                "correction": "Riley will unveil",
                "explanation": "'Will' is always followed by the base form of the verb — never the past tense or past participle. Say: 'will unveil', 'will present', 'will announce'. 'Will unveiled' incorrectly uses the past tense after 'will'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "we will to send",
                "correction": "we will send",
                "explanation": "'Will' is a modal verb — it is directly followed by the base verb, without 'to'. Say: 'we will send', not 'we will to send'. The structure 'will to' does not exist in English. Compare: 'we want to send' (want + to + verb) vs 'we will send' (will + base verb, no 'to')."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: 'We are not sure what to include in the teaser campaign. What kind of content works?'",
                "salespersonStart": "Teasers work best when they hint at something without revealing everything.",
                "suggestedCompletion": "For example: a short video that shows a blurred-out screenshot of the new platform with the caption 'Something new is coming — are you ready?' Or a post that asks a question your new product answers — 'How many hours does your team spend on reporting each week? We are building something that will change that.' Each teaser should leave the audience curious and wanting more. The goal is not to explain — it is to make people lean in."
            },
            {
                "customerLine": "Client: 'We are worried that nobody will come to the launch event. How do we get people to register?'",
                "salespersonStart": "That is a valid concern — registration is not automatic.",
                "suggestedCompletion": "We are going to build the audience before the event through the teaser campaign and the countdown. We will also send direct invitations to your warm leads and existing clients — a personalised message from you will convert better than a generic email. We can add a small incentive too, like early access to the platform for everyone who attends live. Would you like me to draft the invitation email as part of the plan?"
            },
            {
                "customerLine": "Client: 'What happens after the launch event? We do not want the momentum to die.'",
                "salespersonStart": "Great thinking — the post-launch period is often underestimated.",
                "suggestedCompletion": "After the reveal, we are going to send a three-part email sequence to everyone who attended and everyone who registered but could not make it live. The first email goes out the same day — it contains the recording and a link to sign up. The second goes out three days later with a case study or use case. The third goes out a week later with a special offer for early adopters. The rollout also starts that week — existing clients get access first, which generates early word of mouth. Momentum does not die if you plan for it."
            }
        ]
    }
},
};
