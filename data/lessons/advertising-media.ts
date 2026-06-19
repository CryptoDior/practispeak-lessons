import { Lesson } from '@/types/lesson';

export const advertisingMedia: Lesson = {
  slug: 'advertising-media',
  title: 'Advertising Media',
  subtitle: 'Types of ads and media — and how to talk about them in B2B marketing',
  level: 'A2',
  description: 'Modern B2B marketing uses many different types of advertising. From banners and billboards to podcasts and sponsored content, knowing the vocabulary helps you plan campaigns, brief agencies, and talk about media strategy with confidence.',
  heroImage: '/images/advertising-media-hero.png',

  vocabulary: [
    {
      word: 'BANNER',
      partOfSpeech: 'noun',
      definition: 'A rectangular image or graphic that appears on a website to advertise a product or service. Usually clickable.',
      example: 'We placed banner ads on three industry websites — they generated over 500 clicks in the first week of the campaign.',
      imageSlug: '/images/banner.png',
    },
    {
      word: 'BILLBOARD',
      partOfSpeech: 'noun',
      definition: 'A large outdoor advertisement displayed on a board — usually on a busy road or in a city centre.',
      example: 'The client wanted a billboard near the conference venue so attendees would see the brand before they walked in.',
      imageSlug: '/images/billboard.png',
    },
    {
      word: 'PODCAST',
      partOfSpeech: 'noun',
      definition: 'An audio programme that people listen to online — often in episodes, on topics like business, marketing, or industry news.',
      example: 'We sponsored a B2B marketing podcast with 20,000 listeners — the host mentioned our brand at the start and end of each episode.',
      imageSlug: '/images/podcast.png',
    },
    {
      word: 'SPONSORED',
      partOfSpeech: 'adjective',
      definition: 'Paid for by a company as a form of advertising. Sponsored content appears in social media feeds or on websites and is labelled as an ad.',
      example: 'Riley ran three sponsored posts on LinkedIn — they reached 15,000 professionals in the target industry within five days.',
      imageSlug: '/images/sponsored.png',
    },
    {
      word: 'NATIVE',
      partOfSpeech: 'adjective',
      definition: 'Advertising that looks and feels like normal content on a platform — it blends in rather than standing out as an obvious ad.',
      example: 'Native advertising works well in B2B because it does not feel like an interruption — it reads like useful content.',
      imageSlug: '/images/native.png',
    },
    {
      word: 'CHANNEL',
      partOfSpeech: 'noun',
      definition: 'A specific platform or medium used to distribute advertising or content — for example, LinkedIn, email, or a podcast.',
      example: 'We use four main channels for this client: LinkedIn, email, industry podcasts, and banner ads on trade publications.',
      imageSlug: '/images/channel.png',
    },
    {
      word: 'CAMPAIGN',
      partOfSpeech: 'noun',
      definition: 'A planned series of marketing activities — ads, content, and messages — designed to achieve a specific goal over a set period.',
      example: 'The campaign ran for six weeks across three channels and generated forty qualified leads for the sales team.',
      imageSlug: '/images/campaign.png',
    },
    {
      word: 'REACH',
      partOfSpeech: 'noun',
      definition: 'The total number of different people who see an advertisement or piece of content.',
      example: 'Our LinkedIn campaign had a reach of 25,000 — meaning 25,000 unique people saw the ad at least once.',
      imageSlug: '/images/reach.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'RUN AN AD',
      definition: 'To publish and display an advertisement — to make it live on a platform or channel.',
      example: 'We ran a banner ad on three trade websites for four weeks — it was the most cost-effective part of the campaign.',
      imageSlug: '/images/run-an-ad.png',
    },
    {
      phrase: 'PLACE AN AD',
      definition: 'To choose a specific location or channel for an advertisement and pay to put it there.',
      example: 'We placed an ad in the programme for the annual marketing conference — it reached exactly the right audience.',
      imageSlug: '/images/place-an-ad.png',
    },
    {
      phrase: 'STAND OUT',
      definition: 'To be more noticeable or memorable than other content or advertisements.',
      example: 'In a crowded feed, your ad needs to stand out — a strong image and a clear message make the biggest difference.',
      imageSlug: '/images/stand-out.png',
    },
    {
      phrase: 'DRIVE TRAFFIC',
      definition: 'To bring visitors to a website or landing page — usually through advertising or content.',
      example: 'The sponsored posts drove a lot of traffic to the landing page — we got 800 visits in three days.',
      imageSlug: '/images/drive-traffic.png',
    },
    {
      phrase: 'TARGET [AN AUDIENCE]',
      definition: 'To direct your advertising specifically at a group of people — based on their job, industry, location, or behaviour.',
      example: 'LinkedIn lets you target your ads by job title and industry — so you only pay to reach the people who matter.',
      imageSlug: '/images/target-an-audience.png',
    },
    {
      phrase: 'PULL [SOMEONE] IN',
      definition: 'To attract attention and draw people towards your content or advertisement.',
      example: 'A strong headline pulls people in — without it, most people scroll past without reading anything.',
      imageSlug: '/images/pull-someone-in.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, we need to plan the media strategy for the new client. They want to increase brand awareness in the UK market.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Okay. What is their budget, and do they have any preference for [[channel:a specific platform or medium used to distribute advertising]]s?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '€5,000 for the first month. They like the idea of [[sponsored:paid for by a company as advertising]] content on LinkedIn — they have seen other brands doing it.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good choice for B2B. [[Sponsored:paid for by a company as advertising]] posts on LinkedIn let you [[target:to direct your advertising at a specific group]] by job title and industry — so you only reach the right people.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about [[banner:a rectangular image that appears on a website to advertise something]] ads? The client mentioned trade publications.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Banners can work well for [[reach:the total number of different people who see an ad]] — they are good for brand awareness. But the click rate is usually low. I would use them to support the LinkedIn activity, not replace it.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'They also asked about [[podcast:an audio programme that people listen to online]] advertising. There is one show their target audience listens to.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That could be excellent. A [[sponsored:paid for by a company]] mention on a [[podcast:an audio programme]] their audience trusts is very powerful — it is almost like a personal recommendation.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Should we do any [[native:advertising that looks like normal content]] advertising? I read that it performs better than traditional display ads.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — [[native:advertising that blends in with normal content]] ads are great because they do not feel like interruptions. They [[stand out]] for the right reasons — they look like useful content, not like a sales pitch.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So the [[campaign:a planned series of marketing activities]] would be: LinkedIn sponsored posts, banner ads on two trade sites, one podcast sponsorship, and native content?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. Four [[channel:a specific platform or medium]] s, all targeting the same audience, with the same message. That consistency is what builds [[reach:the total number of people who see your ad]] and awareness over time.',
    }
  ],

  matchingExercise: [
    {
        "word": "BANNER",
        "definition": "A rectangular image that appears on a website to advertise a product — usually clickable"
    },
    {
        "word": "BILLBOARD",
        "definition": "A large outdoor advertisement displayed on a board — usually on a busy road or in a city centre"
    },
    {
        "word": "PODCAST",
        "definition": "An audio programme that people listen to online, often on business or industry topics"
    },
    {
        "word": "SPONSORED",
        "definition": "Paid for by a company as advertising — appears in feeds or on sites and is labelled as an ad"
    },
    {
        "word": "NATIVE",
        "definition": "Advertising that looks and feels like normal content — it blends in rather than standing out as an obvious ad"
    },
    {
        "word": "CHANNEL",
        "definition": "A specific platform or medium used to distribute advertising — for example, LinkedIn or email"
    },
    {
        "word": "CAMPAIGN",
        "definition": "A planned series of marketing activities designed to achieve a specific goal over a set period"
    },
    {
        "word": "REACH",
        "definition": "The total number of different people who see an advertisement or piece of content"
    }
],
  fillBlankExercise: [
    {
        "before": "We placed",
        "after": "ads on three industry websites — they generated over 500 clicks in the first week.",
        "answer": "banner"
    },
    {
        "before": "The client wanted a",
        "after": "near the conference venue so attendees would see the brand first.",
        "answer": "billboard"
    },
    {
        "before": "We sponsored a B2B marketing",
        "after": "with 20,000 listeners — the host mentioned our brand each episode.",
        "answer": "podcast"
    },
    {
        "before": "Riley ran three",
        "after": "posts on LinkedIn — they reached 15,000 professionals in five days.",
        "answer": "sponsored"
    },
    {
        "before": "",
        "after": "advertising works well in B2B because it does not feel like an interruption.",
        "answer": "Native"
    },
    {
        "before": "We use four main",
        "after": "s for this client: LinkedIn, email, podcasts, and banner ads.",
        "answer": "channel"
    },
    {
        "before": "The",
        "after": "ran for six weeks across three channels and generated forty qualified leads.",
        "answer": "campaign"
    },
    {
        "before": "Our LinkedIn ad had a",
        "after": "of 25,000 — meaning 25,000 unique people saw it at least once.",
        "answer": "reach"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client wants to increase brand awareness among senior marketing professionals. Which channel is most suitable?",
        "options": [
            "Billboard advertising near a busy motorway.",
            "Sponsored posts on LinkedIn targeted by job title and industry.",
            "A consumer magazine advertisement.",
            "Radio advertising during the morning commute."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the main advantage of native advertising over banner ads?",
        "options": [
            "Native ads are always cheaper than banner ads.",
            "Native ads look like normal content so they feel less like an interruption — readers engage more naturally.",
            "Native ads can be placed on outdoor billboards.",
            "Native ads always have a higher reach than banner ads."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client asks: 'What is the reach of this campaign?' What are they asking about?",
        "options": [
            "How long the campaign will run.",
            "How much the campaign costs.",
            "How many different people will see the ads.",
            "Which channels the campaign uses."
        ],
        "correctIndex": 2
    },
    {
        "question": "You want to advertise on a podcast that your target audience listens to. What type of advertising is this?",
        "options": [
            "Native advertising",
            "Sponsored content — you pay to have the brand mentioned by the host during the episode.",
            "Billboard advertising",
            "Banner advertising"
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says their banner ads are getting very few clicks. What do you suggest?",
        "options": [
            "Run more banner ads on more websites.",
            "Banners are mainly for reach and awareness, not clicks. Consider adding LinkedIn sponsored posts or native content to drive traffic.",
            "Remove all banner ads immediately and switch to billboards.",
            "Reduce the price of the ads to run them longer."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'run a campaign' across multiple channels?",
        "options": [
            "To use different messages and images on every channel.",
            "To publish advertising activity on several platforms at the same time — with a consistent message and goal.",
            "To run ads one channel at a time, testing each one before moving to the next.",
            "To run the same ad on the same channel multiple times."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which type of B2B advertising is most likely to feel like a personal recommendation?",
        "options": [
            "A billboard near a motorway.",
            "A banner ad on a news website.",
            "A sponsored mention on a trusted industry podcast.",
            "A display ad in a print magazine."
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the difference between 'placing an ad' and 'running an ad'?",
        "options": [
            "They mean exactly the same thing.",
            "Placing an ad means choosing where to put it. Running an ad means the ad is live and being shown to people.",
            "Placing an ad is for online channels. Running an ad is for outdoor channels.",
            "Placing an ad is more expensive than running an ad."
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Think about the last advertisement you noticed — online, on the street, or on your phone. What type was it, and why did it catch your attention?",
        "Which advertising channels does your company currently use? Which ones work best for your audience?",
        "What is the difference between advertising to a consumer (B2C) and advertising to a business (B2B)? How do the channels change?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "We ran three _____ posts on LinkedIn — they reached 15,000 professionals in the right industry.",
            "options": [
                "native",
                "sponsored",
                "banner"
            ],
            "correctIndex": 1,
            "explanation": "Sponsored means paid for by a company as advertising — it appears in feeds and is labelled as an ad. Native means content that blends in with normal posts. Banner is a rectangular image on a website. Sponsored is the correct word for paid LinkedIn posts."
        },
        {
            "sentence": "We use four main _____ s: LinkedIn, email, a podcast, and banner ads on trade publications.",
            "options": [
                "campaign",
                "reach",
                "channel"
            ],
            "correctIndex": 2,
            "explanation": "Channel is a specific platform or medium used to distribute advertising. Campaign is a planned series of marketing activities. Reach is the number of people who see your ad. You use multiple channels within one campaign."
        },
        {
            "sentence": "_____ advertising works well in B2B because it reads like useful content, not an obvious sales pitch.",
            "options": [
                "Native",
                "Billboard",
                "Sponsored"
            ],
            "correctIndex": 0,
            "explanation": "Native advertising blends in with normal content — it looks and feels like an article or post rather than an ad. Billboard is outdoor advertising. Sponsored means paid-for content that is labelled as an ad. Native is the word for ads that look like regular content."
        },
        {
            "sentence": "The ad had a _____ of 30,000 — meaning 30,000 unique people saw it during the campaign.",
            "options": [
                "channel",
                "reach",
                "campaign"
            ],
            "correctIndex": 1,
            "explanation": "Reach is the total number of different people who see an advertisement. Channel is the platform used. Campaign is the overall marketing activity. Reach specifically measures how many unique people were exposed to the ad."
        },
        {
            "sentence": "We sponsored an industry _____ with 20,000 listeners — the host mentioned our brand at the start of each episode.",
            "options": [
                "banner",
                "billboard",
                "podcast"
            ],
            "correctIndex": 2,
            "explanation": "Podcast is an audio programme that people listen to online. Banner is a clickable image ad on a website. Billboard is a large outdoor ad. Sponsoring a podcast means paying for a mention by the host — it reaches a specific, engaged audience."
        },
        {
            "sentence": "LinkedIn lets you _____ your ads by job title and industry — so you only pay to reach the people who matter.",
            "options": [
                "run",
                "target",
                "place"
            ],
            "correctIndex": 1,
            "explanation": "Target means to direct your advertising specifically at a group of people. Run means to make an ad live. Place means to choose where to put an ad. Targeting is what makes LinkedIn powerful for B2B — you choose exactly who sees your ad."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'We want to run some ads but we do not know which channels to use. We have a budget of €3,000.'",
                "options": [
                    "Say: 'With €3,000 I recommend running LinkedIn sponsored posts — they let you target by job title and industry. I would combine that with a small banner ad on one trade publication for additional reach. That way you cover two channels with the same message and budget.'",
                    "Say: 'With €3,000 you should try everything — LinkedIn, podcasts, billboards, banners, and native ads. The more channels the better.'",
                    "Say: '€3,000 is not very much for advertising. You will need more budget before we can do anything effective.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It gives a specific, realistic recommendation for the budget — two complementary channels with a clear rationale. B suggests too many channels for that budget and lacks strategic focus. C is unhelpful and discourages the client without offering a solution."
            },
            {
                "customerLine": "Client: 'We tried banner ads last year and they did not get many clicks. We want something better.'",
                "options": [
                    "Say: 'Banner ads never work — I am surprised you tried them. Let us try something completely different.'",
                    "Say: 'Banner ads are mainly used for reach and brand awareness — clicks are usually low. Based on what you told me, I would suggest LinkedIn sponsored posts or native content instead. They tend to drive more engagement for B2B audiences.'",
                    "Say: 'Try running more banner ads on more websites — more volume means more clicks.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains why banner ads have low clicks (they are for awareness, not clicks), then pivots to a better recommendation. A is too negative about the client's previous decision. C recommends more of what did not work — that is not helpful."
            },
            {
                "customerLine": "Client: 'What does it mean when you say our ad has a reach of 10,000?'",
                "options": [
                    "Say: 'It means 10,000 people clicked on your ad.'",
                    "Say: 'It means your ad appeared 10,000 times in total — that is called impressions.'",
                    "Say: 'It means 10,000 unique people saw your ad at least once during the campaign. Reach measures how many different people were exposed to your message — not how many times it was shown.'"
                ],
                "correctIndex": 2,
                "explanation": "C is correct. Reach is the number of unique people who saw the ad — not clicks, and not total impressions. A confuses reach with clicks. B confuses reach with impressions (impressions count how many times the ad was shown, even to the same person)."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this media plan summary. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Plan",
                "text": "Campaign: Q3 Brand Awareness — MarketBridge Client"
            },
            {
                "speaker": "Plan",
                "text": "Channels: LinkedIn sponsored posts, banner ads on two trade publications, and one podcast sponsorship."
            },
            {
                "speaker": "Plan",
                "text": "The LinkedIn ads will be target at marketing directors and heads of growth in the technology sector."
            },
            {
                "speaker": "Plan",
                "text": "The podcast sponsorship includes a 30-second mention at the start and end of each episode."
            },
            {
                "speaker": "Plan",
                "text": "The campaign will ran for six weeks starting on the first of August."
            },
            {
                "speaker": "Plan",
                "text": "Total reach estimated: 40,000 unique professionals across all channel."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "will be target at",
                "correction": "will be targeted at",
                "explanation": "The correct passive form is 'will be targeted at'. Targeted is the past participle of 'target'. When using the passive voice with 'will be', you need the past participle — not the base form. Say: 'will be targeted at', 'will be placed on', 'will be shown to'."
            },
            {
                "lineIndex": 4,
                "incorrectText": "will ran for",
                "correction": "will run for",
                "explanation": "'Will' is always followed by the base form of the verb — not the past tense. Say: 'will run', not 'will ran'. This is a common tense error: will + base verb (run, launch, start, finish) — never will + past tense."
            },
            {
                "lineIndex": 5,
                "incorrectText": "across all channel",
                "correction": "across all channels",
                "explanation": "'All' is used with a plural noun — so 'channel' must be 'channels'. Say: 'all channels', 'all platforms', 'all markets'. When you use 'all' before a countable noun, the noun must be plural."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: 'We want to advertise but we are not sure whether to use LinkedIn or a podcast. Which is better?'",
                "salespersonStart": "It depends on what you want to achieve.",
                "suggestedCompletion": "LinkedIn sponsored posts are great for reach and precision — you target by job title and industry, so only the right people see your ad. A podcast sponsorship is more like a trusted recommendation — the audience has chosen to listen, so they are engaged and receptive. Ideally I would suggest both — LinkedIn for volume and awareness, and the podcast for depth and trust. What is your primary goal for this campaign?"
            },
            {
                "customerLine": "Client: 'We have been using banner ads for years. Should we keep using them?'",
                "salespersonStart": "Banners still have a role — they are good for brand awareness and reach.",
                "suggestedCompletion": "But if you are looking for engagement and leads, I would combine them with LinkedIn sponsored posts or native content. Native advertising performs particularly well in B2B because it reads like useful content — your audience does not feel interrupted. What metrics are you currently tracking on the banner ads? That will help me see where the gaps are."
            },
            {
                "customerLine": "Client: 'We want our ads to stand out. What makes a B2B ad effective?'",
                "salespersonStart": "Three things make the biggest difference.",
                "suggestedCompletion": "First, relevance — the message must speak directly to your audience's problem, not just describe your product. Second, a strong headline — it is what pulls people in, especially in a busy LinkedIn feed. And third, a clear call to action — the reader must know exactly what to do next. The channel matters too, but even a great channel cannot fix a weak message."
            }
        ]
    }
},
};
