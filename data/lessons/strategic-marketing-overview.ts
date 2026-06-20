import { Lesson } from '@/types/lesson';

export const strategicMarketingOverview: Lesson = {
  slug: 'strategic-marketing-overview',
  title: 'Strategic Marketing Overview',
  subtitle: 'How to talk about marketing strategy — positioning, differentiation, and what makes your brand worth choosing',
  level: 'B1-B2',
  description: 'Every strong marketing campaign starts with a clear strategy. In this lesson you will learn the key vocabulary for talking about where your brand sits in the market, what makes it different, and how to read and discuss a strategic marketing brief — the document that drives every campaign decision.',
  heroImage: '/images/strategic-marketing-overview-hero.png',

  vocabulary: [
    {
      word: 'POSITIONING',
      partOfSpeech: 'noun',
      definition: 'How your brand sits in the minds of your target audience — what it stands for and how it compares to alternatives.',
      example: "Our positioning is 'the affordable premium option' — we sit between the budget players and the luxury brands, which is exactly where our audience wants us.",
      imageSlug: '/images/positioning.png',
    },
    {
      word: 'DIFFERENTIATION',
      partOfSpeech: 'noun',
      definition: 'What makes your brand genuinely different from competitors — the specific thing that gives people a reason to choose you.',
      example: 'Our differentiation is speed — we guarantee campaign results in 30 days, which no competitor is willing to promise.',
      imageSlug: '/images/differentiation.png',
    },
    {
      word: 'COMPETITIVE EDGE',
      partOfSpeech: 'noun',
      definition: 'The advantage your brand has over competitors — the thing that makes you harder to replace.',
      example: 'Our competitive edge is our data. We have three years of first-party campaign data across 200 B2B clients — no agency our size can match that.',
      imageSlug: '/images/competitive-edge.png',
    },
    {
      word: 'PORTFOLIO',
      partOfSpeech: 'noun',
      definition: 'The full range of products, services, or past work a company offers or has done — used to show capability and experience.',
      example: 'Before the pitch, send the client your portfolio — three or four case studies that show results in their industry are worth more than any slide deck.',
      imageSlug: '/images/portfolio.png',
    },
    {
      word: 'PROPOSITION',
      partOfSpeech: 'noun',
      definition: 'The clear statement of what you offer, who it is for, and why it is valuable — the core of your marketing message.',
      example: 'Your value proposition needs to answer one question in under ten seconds: why should I choose you over everyone else?',
      imageSlug: '/images/proposition.png',
    },
    {
      word: 'TARGET MARKET',
      partOfSpeech: 'noun',
      definition: 'The specific group of people or companies you are trying to reach and sell to — defined by industry, role, size, or behaviour.',
      example: "Our target market is not 'all B2B companies' — it is SaaS companies with 50–500 employees who are scaling their sales team for the first time.",
      imageSlug: '/images/target-market.png',
    },
    {
      word: 'BRAND AWARENESS',
      partOfSpeech: 'noun',
      definition: 'How well your target audience knows your brand exists and what it stands for — the foundation before any sales conversation can happen.',
      example: 'We had a great product but zero brand awareness — no one had heard of us. The first six months were entirely focused on getting our name in front of the right people.',
      imageSlug: '/images/brand-awareness.png',
    },
    {
      word: 'STRATEGIC FIT',
      partOfSpeech: 'noun',
      definition: "How well a marketing activity or partnership aligns with your brand's overall goals and direction.",
      example: 'Before saying yes to a co-marketing opportunity, always ask: is this a strategic fit? Does it reach our audience, reinforce our positioning, and help us grow in the right direction?',
      imageSlug: '/images/strategic-fit.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'STAND OUT FROM [THE COMPETITION]',
      definition: 'To be clearly different and more noticeable than other brands in your space — in a way that matters to your audience.',
      example: 'In a crowded SaaS market, you do not stand out by having more features — you stand out by being clearer about who you are for and why you exist.',
      imageSlug: '/images/stand-out-from-the-competition.png',
    },
    {
      phrase: 'CARVE OUT [A NICHE]',
      definition: 'To define a very specific position in the market that you own — rather than trying to appeal to everyone.',
      example: 'We carved out a niche in B2B LinkedIn marketing for tech companies — it feels narrow, but it is where we win every time.',
      imageSlug: '/images/carve-out-a-niche.png',
    },
    {
      phrase: 'BREAK INTO [A MARKET]',
      definition: 'To successfully enter a new market — especially one that is competitive or where you have no existing presence.',
      example: 'Breaking into the enterprise market took us two years — our positioning was wrong at first and we had to rebuild from scratch.',
      imageSlug: '/images/break-into-a-market.png',
    },
    {
      phrase: 'BUILD ON [YOUR STRENGTHS]',
      definition: 'To use your existing advantages as the foundation for your marketing strategy — rather than trying to fix every weakness first.',
      example: 'The brief told us to build on their client retention rate — 94% is exceptional, and we made it the centrepiece of every piece of content.',
      imageSlug: '/images/build-on-your-strengths.png',
    },
    {
      phrase: 'SET [YOURSELF] APART',
      definition: 'To actively demonstrate what makes you different — through your messaging, proof, and positioning.',
      example: 'What sets us apart is not just what we do — it is how we do it. No lock-in contracts, weekly reporting, and a dedicated account manager from day one.',
      imageSlug: '/images/set-yourself-apart.png',
    },
    {
      phrase: 'ALIGN [ACTIVITY] WITH [STRATEGY]',
      definition: 'To make sure a specific marketing activity connects to and supports the bigger strategic goal.',
      example: 'Before approving any campaign, ask: does this align with the strategy? If it does not move us towards our positioning goal, it is a distraction.',
      imageSlug: '/images/align-activity-with-strategy.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley — before we look at the brief, I want to be honest. I have never fully understood what [[positioning:how your brand sits in the minds of your target audience]] actually means in practice. Can you explain it simply?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. Positioning is the answer to this question: when a prospect thinks of your category, where do you sit in their mind? Are you the safe choice, the innovative choice, the affordable choice? Right now, TechFlow does not have a clear answer — and that is the problem we are solving.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That makes sense. So what does the brief say our [[proposition:the clear statement of what you offer and why it is valuable]] should be?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The brief recommends: 'The operational efficiency platform that pays for itself in 90 days.' It is specific, it is measurable, and it speaks directly to the CFO — your real decision-maker. That is [[differentiation:what makes your brand genuinely different from competitors]] — no competitor is making that promise.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I like it. What about our [[target market:the specific group of companies you are trying to reach]]? The brief seems quite narrow.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It is narrow on purpose. Your [[competitive edge:the advantage that makes you harder to replace]] is strongest with manufacturing companies between 100 and 500 employees — that is where your case study results are best. We are not saying no to everyone else. We are saying yes loudly to one audience first.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And how does [[brand awareness:how well your target audience knows your brand exists]] fit in? We are not well known in that segment yet.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is exactly what the first three months are for. Before anyone buys, they need to know you exist. We are going to build [[brand awareness:how well the audience knows your brand]] through LinkedIn content, a targeted podcast campaign, and two industry events. By month four, the name TechFlow should be familiar to every operations director in your [[target market:the specific group you are trying to reach]].',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And our [[portfolio:the range of past work used to show capability]]? The brief mentions using case studies early.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — your [[portfolio:past work that shows your capability]] is actually your strongest asset. Three case studies with hard numbers — 30% cost reduction, 90-day payback, 98% client retention. We are going to [[build on:use existing strengths as the foundation]] those results rather than talk in general terms. Numbers [[set you apart:demonstrate what makes you different]] faster than any brand statement.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'This is the clearest the strategy has ever felt. Does everything in the brief [[align with:connect to and support]] the 90-day goal?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Every single line. That is why the brief exists — so every decision we make has a reason. If it does not move TechFlow towards that [[positioning:how the brand sits in the minds of the target audience]], we do not do it. Shall we go through the timeline?',
    }
  ],

  matchingExercise: [
    {
        "word": "POSITIONING",
        "definition": "How your brand sits in the minds of your target audience — what it stands for compared to alternatives"
    },
    {
        "word": "DIFFERENTIATION",
        "definition": "What makes your brand genuinely different from competitors — the specific reason people choose you"
    },
    {
        "word": "COMPETITIVE EDGE",
        "definition": "The advantage your brand has over competitors — what makes you harder to replace"
    },
    {
        "word": "PORTFOLIO",
        "definition": "The full range of past work or services — used to show capability and build credibility"
    },
    {
        "word": "PROPOSITION",
        "definition": "The clear statement of what you offer, who it is for, and why it is valuable"
    },
    {
        "word": "TARGET MARKET",
        "definition": "The specific group of companies or people you are trying to reach and sell to"
    },
    {
        "word": "BRAND AWARENESS",
        "definition": "How well your target audience knows your brand exists and what it stands for"
    },
    {
        "word": "STRATEGIC FIT",
        "definition": "How well a marketing activity aligns with your brand's overall goals and direction"
    }
],
  fillBlankExercise: [
    {
        "before": "Our",
        "after": "is 'the affordable premium option' — we sit between the budget players and the luxury brands.",
        "answer": "positioning"
    },
    {
        "before": "Our",
        "after": "is speed — we guarantee campaign results in 30 days, which no competitor will promise.",
        "answer": "differentiation"
    },
    {
        "before": "Our",
        "after": "is our data — three years of first-party campaign results across 200 B2B clients.",
        "answer": "competitive edge"
    },
    {
        "before": "Send the client your",
        "after": "— three case studies with real numbers are worth more than any slide deck.",
        "answer": "portfolio"
    },
    {
        "before": "Your value",
        "after": "needs to answer one question in under ten seconds: why should I choose you over everyone else?",
        "answer": "proposition"
    },
    {
        "before": "Our",
        "after": "is not 'all B2B companies' — it is SaaS companies with 50–500 employees scaling their sales team for the first time.",
        "answer": "target market"
    },
    {
        "before": "We had a great product but zero",
        "after": "— the first six months were entirely focused on getting our name in front of the right people.",
        "answer": "brand awareness"
    },
    {
        "before": "Before saying yes to a co-marketing opportunity, always ask: is this a",
        "after": "— does it reach our audience and reinforce our positioning?",
        "answer": "strategic fit"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client says: 'We want to appeal to everyone — SMEs, mid-market, and enterprise.' What is the marketing problem with this?",
        "options": [
            "It requires too large a budget to execute effectively.",
            "Trying to appeal to everyone usually means your positioning is too vague to resonate strongly with anyone. A specific target market and clear positioning always outperforms a broad approach in B2B.",
            "It is fine for brand awareness campaigns but not for lead generation.",
            "You need at least three different brand identities to reach three different segments."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between 'differentiation' and 'competitive edge'?",
        "options": [
            "They mean the same thing — both describe why your brand is better.",
            "Differentiation is what makes you different — it could be anything. Competitive edge is specifically what makes you harder to replace and more difficult for a competitor to copy. A feature is differentiation. A process built over five years is a competitive edge.",
            "Differentiation is for product marketing. Competitive edge is for sales conversations.",
            "Competitive edge refers to price advantage only."
        ],
        "correctIndex": 1
    },
    {
        "question": "A prospect says: 'I have looked at your website but I am not clear on exactly what you do.' What does this tell you?",
        "options": [
            "The website needs a better design and more visual content.",
            "The value proposition is not clear enough — the prospect cannot quickly understand what you offer, who it is for, and why it matters. This is a positioning problem, not a design problem.",
            "The prospect has not spent enough time reading the site.",
            "You need more case studies and testimonials on the homepage."
        ],
        "correctIndex": 1
    },
    {
        "question": "When presenting a strategic brief to a client, what should you lead with?",
        "options": [
            "The research and data — show all the evidence before making any recommendations.",
            "The recommendation — state clearly what you propose and why, then use the data to support it. Clients want to know where you are taking them before they read the map.",
            "The budget breakdown — clients always want to know the cost before the strategy.",
            "The competitive analysis — show the market landscape before discussing your brand's position within it."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'carve out a niche' in marketing?",
        "options": [
            "To remove underperforming products from your portfolio.",
            "To define a very specific position in the market that you own — a clear, focused area where you are the obvious choice rather than one of many options.",
            "To create a new product category that did not exist before.",
            "To reduce your marketing budget and focus on one channel only."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which of these is the strongest value proposition for a B2B marketing agency?",
        "options": [
            "'We help businesses grow through creative and innovative marketing solutions.'",
            "'We help B2B SaaS companies generate 50+ qualified leads per month from LinkedIn — or we work for free until we do.'",
            "'We are a full-service marketing agency with expertise across all digital channels.'",
            "'We are passionate about helping our clients succeed in today's competitive marketplace.'"
        ],
        "correctIndex": 1
    },
    {
        "question": "A client asks: 'What is the strategic fit for sponsoring this industry podcast?' What should you consider?",
        "options": [
            "Whether the podcast has a large audience and high download numbers.",
            "Whether the podcast audience matches your target market, whether it reinforces your positioning, and whether it moves you towards your strategic goals — not just whether it has reach.",
            "Whether competitors are already sponsoring it.",
            "Whether the production quality is high enough to reflect your brand standard."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the most effective way to build brand awareness in a new target market?",
        "options": [
            "Run paid ads immediately — reach the most people as quickly as possible.",
            "Be consistently visible where your target audience already spends their attention — through content, events, and channels they trust — before asking for anything in return.",
            "Send a cold email campaign to every company in the target segment.",
            "Rebrand with a new name and visual identity that appeals to the new audience."
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client in a kickoff meeting: 'I think our positioning is fine — we say we deliver high-quality marketing at a fair price. That is clear, right?'",
                "options": [
                    "Say: 'Yes, that works well — quality and price are always important to buyers.'",
                    "Say: 'It is a start — but 'high-quality at a fair price' is what almost every agency says. If a prospect reads that, they cannot immediately see why you are different from the ten other agencies on their list. Can we try to find the one thing you do that no one else does — or does better? That is what we want in your positioning.'",
                    "Say: 'I would suggest rewriting the positioning entirely — it does not mention your target audience or your specific services.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It validates the effort while being honest that the positioning is too generic — and it moves the conversation forward by asking for the specific differentiator. A is dishonest and unhelpful. C is too blunt and skips the explanation of why it needs to change."
            },
            {
                "customerLine": "Prospect reading your portfolio: 'These case studies are good but they are all from the retail sector. We are in manufacturing. Does that matter?'",
                "options": [
                    "Say: 'Not at all — good marketing works across every industry.'",
                    "Say: 'That is a fair point to raise. The core strategies — content, LinkedIn, email nurturing — perform consistently across B2B sectors. But I want to be transparent: manufacturing is a sector we are actively growing in, which is exactly why we are interested in TechFlow. I would rather be honest about that than pretend we have twenty manufacturing clients when we have three.'",
                    "Say: 'We have worked with some manufacturing-adjacent companies — I can find those case studies and send them over.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It is honest, explains why the strategies transfer, and turns the gap into a reason for interest rather than a weakness. A dismisses a legitimate concern. C sounds evasive — 'manufacturing-adjacent' will not reassure a prospect who asked a direct question."
            },
            {
                "customerLine": "A junior colleague presents a campaign idea in an internal meeting: 'I think we should do a TikTok campaign for TechFlow — it would really help with brand awareness.'",
                "options": [
                    "Say: 'That is a creative idea — let us add it to the plan and see what the client thinks.'",
                    "Say: 'Interesting idea — let us check the strategic fit first. TechFlow's target market is operations directors and CFOs at manufacturing companies. Are they on TikTok? If the answer is no, then the brand awareness we build there is not the brand awareness we need. Let us find where those specific people spend their time and go there instead.'",
                    "Say: 'TikTok is not appropriate for a B2B brand — it is a consumer platform and we should not waste time on it.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It does not dismiss the idea — it applies the right test: does this align with the strategy and reach the target market? A approves an idea without any strategic evaluation. C is too dismissive and does not explain the reasoning in a way the junior colleague can learn from."
            },
            {
                "customerLine": "Client after reviewing the strategic brief: 'This all makes sense, but I am worried about going too narrow. What if we miss out on clients who do not fit the exact target market?'",
                "options": [
                    "Say: 'You are right — let us broaden the target market to include more segments.'",
                    "Say: 'That is the most common concern I hear — and it is understandable. But here is what the data shows: when you try to speak to everyone, your message resonates with no one strongly enough to act. When you speak precisely to one audience, two things happen: that audience converts at a much higher rate, and people outside the target market who still need what you offer find you anyway — because your positioning is so clear they recognise the value. Narrow positioning does not cost you clients — vague positioning does.'",
                    "Say: 'We can create two versions of the brief — one narrow and one broader — and present both to the board.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It acknowledges the concern, explains the logic clearly with a real-world outcome, and reframes the fear as the opposite of what the client thinks. A gives in without explanation. C avoids taking a position — a strategic consultant's job is to give a recommendation, not to offer two options and let the client decide without guidance."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three marketing briefs. Match each one to the strategic approach that fits it best. Discuss as a group before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "TechFlow",
                "description": "TechFlow is an operational efficiency platform. Their results are exceptional — 30% cost reduction on average — but their brand awareness is low. They have strong case studies in manufacturing but have never invested in marketing before. Their competitors are much better known.",
                "matchKey": "awareness"
            },
            {
                "name": "BrightPath",
                "description": "BrightPath is a well-known HR software company. Everyone in their space knows the name, but when prospects compare them to competitors, they struggle to explain why BrightPath is the right choice. Sales cycles are long and conversion rates are low.",
                "matchKey": "differentiation"
            },
            {
                "name": "NovaSpark",
                "description": "NovaSpark has strong positioning, a recognisable brand, and good differentiation. Their challenge is that they are trying to sell to everyone — SMEs, mid-market, and enterprise — and their messaging is inconsistent as a result. They are winning deals but at a low average contract value.",
                "matchKey": "targeting"
            }
        ],
        "options": [
            {
                "key": "awareness",
                "label": "Build brand awareness first",
                "description": "Before selling, the audience needs to know the brand exists. Focus the first phase on getting the name and the results in front of the right people — through content, events, and channels the target market trusts. Sales conversations come after awareness is established."
            },
            {
                "key": "differentiation",
                "label": "Clarify the differentiation",
                "description": "The brand is known but not chosen. The strategy should focus on making the difference crystal clear — one specific, provable reason to choose this brand over alternatives. This goes into every piece of messaging, every sales conversation, and every piece of content."
            },
            {
                "key": "targeting",
                "label": "Narrow the target market",
                "description": "Trying to win at every segment is diluting the message and keeping the average deal size low. The strategy should identify the most profitable segment, carve out a clear position there, and align all messaging to that audience — even if it means saying no to some enquiries."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer has started — finish the line in a way that is clear, practical, and sounds natural in a real client conversation. Use vocabulary from this lesson. Compare your answers, then click to see one suggested version.",
        "items": [
            {
                "customerLine": "Client: 'Our competitors all say the same things. How do we actually stand out?'",
                "salespersonStart": "That is exactly the right question — and the answer starts with being honest about what you do that they cannot easily copy.",
                "suggestedCompletion": "Your differentiation has to be real — not just a better slogan. When I look at your results — 30% cost reduction, 90-day payback — no one in your space is making that claim with proof behind it. Your competitive edge is not your product, it is your evidence. So instead of saying 'we are the best', we say: 'here is what happened when Company X used us' — and we let the numbers do the positioning. That is how you stand out in a market full of identical claims."
            },
            {
                "customerLine": "Client: 'We have never written a strategic brief before. Where do we even start?'",
                "salespersonStart": "A good brief answers four questions — and everything else follows from those.",
                "suggestedCompletion": "One: who is your target market — not broadly, but specifically? Two: what is your positioning — how do you want to sit in their mind compared to the alternatives? Three: what is your proposition — the one sentence that explains what you do, for whom, and what result they get? And four: what is your competitive edge — the thing that makes you hard to replace? Once those four are clear, every campaign decision becomes easier because you have a filter: does this align with the strategy or not?"
            },
            {
                "customerLine": "Client: 'We have a great product but no one knows who we are. Where do we focus first?'",
                "salespersonStart": "Brand awareness has to come before lead generation — you cannot convert people who have never heard of you.",
                "suggestedCompletion": "The strategy for the first quarter is purely about getting your name in front of your target market in the places they already trust. For your audience — operations directors in manufacturing — that is LinkedIn, two or three industry events, and a content series that shows your results without asking for anything. The goal is simple: by month four, when a prospect in your target market is looking for a solution, TechFlow should be a name they already know. That recognition is what shortens the sales cycle later."
            },
            {
                "customerLine": "Client: 'We are thinking of partnering with a large generalist agency that works across all sectors. Is that a strategic fit for us?'",
                "salespersonStart": "That depends on what you need from the partnership — let me ask a few questions before we decide.",
                "suggestedCompletion": "A large generalist agency has reach and resources, which is valuable. But strategic fit means more than just capability — it means alignment. Do they understand the manufacturing sector? Do they have case studies that speak to your target market? Will your account be managed by a senior team or handed to a junior? The risk with a generalist agency is that your positioning becomes average because they are optimising for many clients, not for your specific differentiation. If the answer to those questions is strong, the fit could work. If not, a more specialist partner might serve your strategy better — even if they are smaller."
            }
        ]
    }
},
};
