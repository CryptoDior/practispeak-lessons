import { Lesson } from '@/types/lesson';

export const marketSegmentationInDepth: Lesson = {
  slug: 'market-segmentation-in-depth',
  title: 'Market Segmentation in Depth',
  subtitle: 'How to describe your ideal customer precisely — and use that description to make every marketing decision sharper',
  level: 'B1-B2',
  description: 'Great marketing starts with a clear picture of who you are talking to. In this lesson you will learn the language of customer segmentation — how to describe audiences by behaviour, mindset, and need — and how to write a detailed customer persona that your whole team can use.',
  heroImage: '/images/market-segmentation-in-depth-hero.png',

  vocabulary: [
    {
      word: 'PSYCHOGRAPHIC',
      partOfSpeech: 'adjective',
      definition: 'Relating to how people think, what they value, and what motivates them — not just who they are on paper.',
      example: 'Demographic data tells us our buyer is a 38-year-old marketing director. Psychographic data tells us she values speed over perfection, distrusts jargon, and makes decisions based on peer recommendations.',
      imageSlug: '/images/psychographic.png',
    },
    {
      word: 'BEHAVIOURAL',
      partOfSpeech: 'adjective',
      definition: 'Relating to what people actually do — how they search, buy, engage, and respond — rather than what they say they do.',
      example: 'Behavioural segmentation showed us that our best clients always download a case study before booking a call — so we put case studies at the front of every campaign.',
      imageSlug: '/images/behavioural.png',
    },
    {
      word: 'NEED-STATE',
      partOfSpeech: 'noun',
      definition: 'The specific problem or desire that is driving someone to look for a solution right now — the emotional and practical context behind a purchase.',
      example: "The need-state for our best clients is not 'I want better marketing' — it is 'I need to justify my budget to the board in 90 days and I am running out of time'.",
      imageSlug: '/images/need-state.png',
    },
    {
      word: 'PERSONA',
      partOfSpeech: 'noun',
      definition: 'A detailed profile of a fictional but realistic customer — built from real data and used to guide every marketing and sales decision.',
      example: 'We created three personas for the campaign — but 80% of our best clients matched just one of them, so we rebuilt the whole strategy around her.',
      imageSlug: '/images/persona.png',
    },
    {
      word: 'PROFILE',
      partOfSpeech: 'noun',
      definition: 'A summary of who a customer segment is — their role, industry, company size, goals, and challenges.',
      example: 'The ideal customer profile for TechFlow is an operations director at a manufacturing company with 100–500 employees who has recently been given a cost-reduction target.',
      imageSlug: '/images/profile.png',
    },
    {
      word: 'DEMOGRAPHIC',
      partOfSpeech: 'noun',
      definition: 'Basic factual information about a person or group — age, gender, job title, company size, location, and industry.',
      example: 'The demographic is a useful starting point, but it is the psychographic layer — what they care about and how they make decisions — that makes the marketing actually work.',
      imageSlug: '/images/demographic.png',
    },
    {
      word: 'SEGMENT',
      partOfSpeech: 'noun',
      definition: 'A distinct group within a larger audience that shares specific characteristics — and can therefore be reached with the same message.',
      example: 'We split the database into three segments: active clients, lapsed clients, and cold prospects. Each got a completely different email — same brand, three different conversations.',
      imageSlug: '/images/segment.png',
    },
    {
      word: 'PAIN POINT',
      partOfSpeech: 'noun',
      definition: 'A specific problem or frustration that a customer experiences — and that your product or service solves.',
      example: 'The number one pain point for our persona is wasted marketing budget with no proof of results. Every piece of content we create addresses that directly.',
      imageSlug: '/images/pain-point.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'ZERO IN ON [AN AUDIENCE]',
      definition: 'To focus very specifically on one segment rather than a broad group — getting precise about who exactly you are talking to.',
      example: 'Once we zeroed in on operations directors with a cost-reduction brief, our click-through rate tripled — the content finally felt written for them, not everyone.',
      imageSlug: '/images/zero-in-on-an-audience.png',
    },
    {
      phrase: 'SPEAK TO [A PAIN POINT]',
      definition: 'To address a specific customer problem directly in your marketing — in a way that shows you understand it.',
      example: "The ad that performed best spoke directly to the pain point: 'Still waiting for your marketing agency to show you the ROI?' — it doubled our click-through rate overnight.",
      imageSlug: '/images/speak-to-a-pain-point.png',
    },
    {
      phrase: 'RESONATE WITH [AN AUDIENCE]',
      definition: 'To connect with an audience at an emotional or practical level — to say something that feels personally relevant to them.',
      example: 'The content that resonates most with our persona is not about features — it is about the feeling of finally being able to show the board that marketing is working.',
      imageSlug: '/images/resonate-with-an-audience.png',
    },
    {
      phrase: 'MAP OUT [A CUSTOMER JOURNEY]',
      definition: 'To plan and visualise all the steps a customer takes from first awareness to purchase — and what they need at each stage.',
      example: 'We mapped out the customer journey and discovered that most prospects went cold between the second and third email — so we rewrote that sequence completely.',
      imageSlug: '/images/map-out-a-customer-journey.png',
    },
    {
      phrase: 'FILTER [A DATABASE] BY [CRITERIA]',
      definition: 'To narrow down a large list of contacts by applying specific characteristics — so you can target the right people.',
      example: 'Filter the database by company size, sector, and whether they have engaged with any content in the last 90 days — that gives you your warm segment.',
      imageSlug: '/images/filter-a-database-by-criteria.png',
    },
    {
      phrase: "GET INSIDE [SOMEONE'S HEAD]",
      definition: 'To deeply understand how a customer thinks — their priorities, fears, and decision-making process.',
      example: "Good persona work is about getting inside the customer's head — not just knowing their job title, but knowing what keeps them awake at three in the morning.",
      imageSlug: '/images/get-inside-someones-head.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley — before we write the campaign brief, I want to make sure we have the [[persona:a detailed profile of a realistic customer built from real data]] right. Who are we actually writing for?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good call. Based on TechFlow's best clients, the [[profile:a summary of who the customer is — role, industry, goals, challenges]] looks like this: Operations Director, manufacturing company, 100 to 500 employees, recently given a cost-reduction target by the board.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That is the [[demographic:basic factual information about a person — job title, company size, industry]]. What do we know about the psychographic layer — how does she actually think?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'From the client interviews, she is [[psychographic:relating to how people think, what they value, what motivates them]] very outcome-focused — she does not care about marketing theory, she cares about what happened when someone like her used the product. She makes decisions based on peer recommendations and case studies, not sales calls.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And [[behavioural:relating to what people actually do — how they search, buy, and engage]]? How does she actually find and evaluate solutions?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'She searches on LinkedIn, reads two or three reviews, downloads a case study — and if the numbers are strong, she books a call within 48 hours. That [[behavioural:relating to actual behaviour]] pattern tells us exactly where to put the case studies in the campaign.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What is her [[need-state:the specific problem driving someone to look for a solution right now]] — what is happening in her world that makes her look for something like TechFlow?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The [[need-state:the emotional and practical context behind a purchase]] is pressure — she has been told to cut costs by 20% before December and she is running out of options. The [[pain point:a specific problem your product solves]] is not just the cost target — it is the fear of going into the board meeting without being able to show evidence.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So the campaign needs to [[speak to:address a specific customer problem directly in your marketing]] that fear — not just the features.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. Every piece of content needs to [[resonate with:connect at an emotional or practical level]] someone in that [[need-state:the problem driving them to look for a solution]]. Let me [[map out:plan all the steps from first awareness to purchase]] the journey — so we know what she needs to see at each stage before she will book a call.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And for the email campaign, we [[filter:narrow down by applying specific criteria]] the database by role and company size first?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — filter by operations role, 100 to 500 employees, and any [[behavioural:relating to actual behaviour]] signal like content downloads in the last 90 days. That is our warm [[segment:a distinct group that shares specific characteristics and can be reached with the same message]]. Everything we send them should feel like it was written specifically for their situation — because it was.',
    }
  ],

  matchingExercise: [
    {
        "word": "PSYCHOGRAPHIC",
        "definition": "Relating to how people think, what they value, and what motivates them"
    },
    {
        "word": "BEHAVIOURAL",
        "definition": "Relating to what people actually do — how they search, buy, and engage"
    },
    {
        "word": "NEED-STATE",
        "definition": "The specific problem or desire driving someone to look for a solution right now"
    },
    {
        "word": "PERSONA",
        "definition": "A detailed profile of a fictional but realistic customer built from real data"
    },
    {
        "word": "PROFILE",
        "definition": "A summary of who the customer is — role, industry, goals, and challenges"
    },
    {
        "word": "DEMOGRAPHIC",
        "definition": "Basic factual information — age, job title, company size, location, industry"
    },
    {
        "word": "SEGMENT",
        "definition": "A distinct group within a larger audience that shares specific characteristics"
    },
    {
        "word": "PAIN POINT",
        "definition": "A specific problem or frustration that your product or service solves"
    }
],
  fillBlankExercise: [
    {
        "before": "The",
        "after": "data tells us our buyer is a 38-year-old marketing director — but that alone does not tell us how to market to her.",
        "answer": "demographic"
    },
    {
        "before": "The",
        "after": "layer tells us she values speed over perfection and makes decisions based on peer recommendations.",
        "answer": "psychographic"
    },
    {
        "before": "",
        "after": "segmentation showed us that our best clients always download a case study before booking a call.",
        "answer": "behavioural"
    },
    {
        "before": "Her",
        "after": "is not 'I want better marketing' — it is 'I need to justify my budget to the board in 90 days'.",
        "answer": "need-state"
    },
    {
        "before": "We created a detailed",
        "after": "called Claire — an Operations Director under pressure to cut costs before December.",
        "answer": "persona"
    },
    {
        "before": "The number one",
        "after": "for our audience is wasted budget with no proof of results — so we address that in every piece of content.",
        "answer": "pain point"
    },
    {
        "before": "We split the database into three",
        "after": "— active clients, lapsed clients, and cold prospects — each with a different message.",
        "answer": "segments"
    },
    {
        "before": "Filter the database by company size and role, then by",
        "after": "signals like content downloads in the last 90 days — that gives you the warm list.",
        "answer": "behavioural"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client says: 'Our target audience is marketing professionals at B2B companies.' What is the problem with this as a persona?",
        "options": [
            "It is too specific — 'marketing professionals' excludes other decision-makers who might buy.",
            "It is too broad — 'marketing professionals at B2B companies' could be thousands of very different people with completely different problems, budgets, and decision-making styles. A useful persona is specific enough that you can picture one real person.",
            "It does not include enough demographic information — you need to add age and location.",
            "It focuses on job function rather than industry, which is the most important segmentation criterion."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the key difference between a demographic and a psychographic?",
        "options": [
            "Demographics come from surveys. Psychographics come from interviews.",
            "A demographic tells you who someone is on paper — their job title, age, location. A psychographic tells you how they think — what they value, fear, and use to make decisions. Both matter, but the psychographic is what makes your marketing actually connect.",
            "Demographics are used in B2C marketing. Psychographics are used in B2B marketing.",
            "Demographics change over time. Psychographics stay the same throughout a career."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does a 'need-state' tell you that a demographic does not?",
        "options": [
            "It tells you the specific product or service the customer needs.",
            "It tells you the specific problem or pressure that is driving someone to look for a solution right now — the emotional and practical context behind the purchase decision. This is what makes your marketing timely and relevant rather than generic.",
            "It tells you the customer's budget range and decision-making authority.",
            "It tells you how long the customer has been experiencing the problem."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is it important to identify behavioural signals when segmenting a campaign database?",
        "options": [
            "Behavioural data is required for GDPR compliance before sending marketing emails.",
            "Behavioural signals show you who is actually ready to engage — someone who has downloaded a case study, visited the pricing page, or opened three emails is much more likely to convert than someone who has just been imported from a cold list. It helps you prioritise your effort.",
            "Behavioural data is more accurate than demographic data when filtering a large list.",
            "It helps you exclude people who have already seen your content and avoid duplication."
        ],
        "correctIndex": 1
    },
    {
        "question": "A colleague suggests: 'Let us create ten personas to cover all our possible customers.' What is the risk?",
        "options": [
            "Ten personas will require too much time to research and document properly.",
            "Too many personas leads to no clear focus — your campaigns end up trying to speak to everyone again and the specificity that makes a persona useful gets lost. Most successful B2B campaigns are built around one or two primary personas. Start narrow.",
            "Ten personas will confuse the sales team when they try to qualify leads.",
            "Having too many personas makes the marketing feel impersonal, which damages the brand."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which of these pain points is most likely to drive a B2B buyer to take action?",
        "options": [
            "'Our current marketing tools have limited integration options.'",
            "'I am going into a board presentation next month and I cannot show any return on our marketing spend — if this does not change, the budget gets cut.'",
            "'We would like to improve our reporting capabilities over the next year.'",
            "'Our team finds the current platform slightly difficult to use.'"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'speak to a pain point' in marketing copy?",
        "options": [
            "To mention the pain point briefly in the introduction before explaining your product features.",
            "To describe the customer's problem in language that makes them feel understood — before offering any solution. The best marketing makes the reader think 'they are talking about me' before they think 'I should buy this'.",
            "To use emotional language to make the pain point feel more serious and urgent.",
            "To ask the customer to describe their own pain point in a survey or discovery call."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the most important thing a customer persona should help your team do?",
        "options": [
            "Justify the marketing budget to the board by showing research has been done.",
            "Make faster, more consistent decisions — every piece of content, every channel choice, every campaign message gets evaluated against one question: would this specific person find this useful and relevant? A good persona replaces hours of debate with a clear filter.",
            "Personalise individual emails using the customer's name and company details.",
            "Identify which trade shows and events to attend in the next financial year."
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and choose the best response. Discuss why before clicking.",
        "items": [
            {
                "customerLine": "Client in a briefing: 'We want to target CFOs, CMOs, Operations Directors, and anyone else who might be involved in the decision.'",
                "options": [
                    "Say: 'Great — a broad reach will help with brand awareness at the top of the funnel.'",
                    "Say: 'Those are four very different people with four very different pain points and decision-making styles. A CFO responds to ROI and risk. A CMO responds to brand and pipeline. An Operations Director responds to efficiency and proof. If we try to write one message for all four, it will be too generic for any of them. Can we agree on the primary decision-maker — who has the final yes — and build the campaign around her? We can create supporting content for the others, but the core persona should be one person.'",
                    "Say: 'We will create four separate campaigns — one for each persona — and measure which performs best.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains why the approach will not work, uses real examples of how each persona differs, and offers a practical solution. A accepts a flawed brief without pushback. C creates unnecessary complexity before you even know which persona is most valuable."
            },
            {
                "customerLine": "Junior team member: 'I built the persona based on the demographic data from the CRM. Here it is — 42-year-old male, London, Director level, SaaS industry.'",
                "options": [
                    "Say: 'Good start — now let us add a photo and a name to make it feel more real.'",
                    "Say: 'This is a useful starting point for the demographic layer. But to make this persona actually useful in a campaign, we need to go deeper. What does he care about? What is the pressure he is under right now — his need-state? What does he read? How does he make decisions? What does he type into LinkedIn search when he has a problem we solve? The demographic tells us who he is. The psychographic tells us how to talk to him. Can you set up three client interviews this week so we can get that layer from real people?'",
                    "Say: 'We also need to segment by company size and location before we finalise the persona.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It validates the work, explains what is missing and why it matters, and gives a concrete next step. A focuses on a superficial detail. C adds more demographic data rather than addressing the missing psychographic layer — which is the real gap."
            },
            {
                "customerLine": "Client: 'Our campaign last quarter did not perform well. The email open rate was 12% and conversion was 0.8%.',",
                "options": [
                    "Say: 'Those numbers are below average — let us try a different subject line and see if that improves things.'",
                    "Say: 'Before we change the creative, let us look at the segmentation. A 12% open rate often tells you the message is not landing — which usually means either the wrong segment received it, or the message did not match their need-state. Can you share the segment criteria from the last campaign? I want to check whether the people who received it actually matched the persona we built — because if they did not, a better subject line will not fix the underlying problem.'",
                    "Say: 'Let us try a different sending time — Tuesday mornings usually perform better for B2B.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It diagnoses the root cause rather than treating the symptom — a segmentation or need-state mismatch is far more likely to explain poor performance than subject line or send time. A and C both optimise around the edges without questioning whether the right people were contacted."
            },
            {
                "customerLine": "Client: 'We have a database of 50,000 contacts. How do we decide who to contact first?'",
                "options": [
                    "Say: 'Send to everyone — the more emails you send, the more leads you will generate.'",
                    "Say: 'Start by filtering the database against your persona criteria — company size, sector, and role. Then layer in behavioural signals: who has opened an email, visited the website, or downloaded content in the last 90 days? That gives you a warm segment of maybe 2,000 to 5,000 people who already have some awareness of you. Contact them first with a tailored message that speaks to their specific need-state. The remaining 45,000 need a different, lighter-touch approach to build awareness before you can sell to them.'",
                    "Say: 'Sort them by company size — the largest companies should always be contacted first as they have bigger budgets.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It describes a practical segmentation approach — filter by persona criteria, then layer behavioural signals — and explains the logic clearly. A will damage sender reputation and conversion rates. C uses company size as the only filter, which ignores all the persona work and produces a poorly targeted list."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three marketing situations. Match each to the segmentation approach that fits it best. Discuss as a group before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "SkyBridge Software",
                "description": "SkyBridge has a database of 30,000 contacts but very low campaign performance — open rates of 10%, conversion under 1%. Analysis shows they have been sending the same email to their entire list regardless of industry, company size, or past behaviour. Everyone gets the same message.",
                "matchKey": "behavioural"
            },
            {
                "name": "ClearPath Analytics",
                "description": "ClearPath knows their target is a Head of Data at a mid-size company. But when they write content and ads, the message is very general — it talks about 'better data management' without addressing any specific challenge. Prospects read the content but do not take action.",
                "matchKey": "needstate"
            },
            {
                "name": "Forma Finance",
                "description": "Forma has strong content performance — high engagement and downloads — but very few of their engaged readers are converting to calls. They have no system for identifying which content consumers are actually close to a buying decision versus those who are just curious.",
                "matchKey": "behavioural"
            }
        ],
        "options": [
            {
                "key": "behavioural",
                "label": "Apply behavioural segmentation",
                "description": "Filter the database or audience by actual behaviour — who has engaged with content, visited the website, or responded to a previous campaign. Use these signals to separate warm prospects from cold ones and prioritise accordingly. Different behavioural segments should receive different messages and different levels of sales attention."
            },
            {
                "key": "needstate",
                "label": "Identify and address the need-state",
                "description": "Go deeper than the demographic to understand the specific pressure or problem that is driving this audience to look for a solution right now. Rewrite the messaging to speak directly to that need-state — not what the product does, but what problem it solves for this specific person at this specific moment."
            },
            {
                "key": "psychographic",
                "label": "Build the psychographic layer",
                "description": "Research how this audience actually thinks and makes decisions — through interviews, reviews, and sales call recordings. Use this to rewrite content that reflects their values, fears, and decision-making style rather than just their job title and company size."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer has started building or explaining a persona. Finish the line clearly and practically. Use vocabulary from this lesson. Compare your answers, then click to see one suggested version.",
        "items": [
            {
                "customerLine": "Client: 'Who exactly are we writing this email campaign for?'",
                "salespersonStart": "Let me walk you through the persona we built — I will give you the full picture, not just the job title.",
                "suggestedCompletion": "Her name is Claire. She is an Operations Director at a manufacturing company with 150 to 400 employees. Demographically, she is in her late 30s to mid-40s, based in the UK or Germany. But what matters more is her psychographic profile: she is under pressure to cut operational costs by 20% before Q4, she does not trust marketing claims without proof, and she makes decisions by asking two or three peers who have already solved the same problem. Her need-state is urgency — she is not browsing for ideas, she is looking for something that will actually work fast enough to save her budget in this financial year. Every line of this campaign should feel like it was written for her specifically — because it was."
            },
            {
                "customerLine": "Client: 'Why do we need a persona? Can we not just write good content and let the audience self-select?'",
                "salespersonStart": "You can — but it is a much slower and more expensive way to find out who your message resonates with.",
                "suggestedCompletion": "A persona does not limit who can buy from you. It gives everyone in the team — copywriter, designer, paid media buyer — the same filter for every decision. When the copywriter asks 'should I use technical language or keep it simple?', the persona answers that. When the paid media buyer asks 'which LinkedIn audience should I target?', the persona answers that. Without it, every decision gets made differently by a different person, and the campaign ends up inconsistent. The time you spend building a strong persona saves ten times that in wasted creative revisions and underperforming campaigns."
            },
            {
                "customerLine": "Client: 'We want to segment the database before the next campaign. Where do we start?'",
                "salespersonStart": "Start with the persona criteria — filter by who matches the profile before you do anything else.",
                "suggestedCompletion": "That means company size first — 100 to 500 employees. Then sector — manufacturing and supply chain. Then role — anyone with Operations, Supply Chain, or Efficiency in their title. That gives you your persona-matched segment. From there, layer in the behavioural signals: who in that group has opened an email, downloaded a case study, or visited the pricing page in the last 90 days? Those are your warm contacts — they already have some awareness of TechFlow and they match the profile. That warm segment should receive a direct, case-study-led email this week. Everyone else in the persona-matched group gets a lighter content email first to warm them up."
            },
            {
                "customerLine": "Client: 'Our content gets good engagement but people are not booking calls. What is going wrong?'",
                "salespersonStart": "Good engagement with low conversion usually means the content is interesting but not urgent enough.",
                "suggestedCompletion": "The psychographic profile tells us your audience values proof over promise — they read your content because it is educational, but they do not book a call because nothing has addressed their specific need-state yet. The content is speaking to the general pain point — 'operational efficiency matters' — but not the immediate one: 'I need to show the board a 20% cost reduction in the next 90 days.' Once we add that urgency layer — content that acknowledges the specific pressure they are under right now — and pair it with a clear call to action that maps to that need, the conversion rate will improve. Let us audit the last five pieces of content together and see which ones get closest to that need-state."
            }
        ]
    }
},
};
