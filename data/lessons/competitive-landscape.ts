import { Lesson } from '@/types/lesson';

export const competitiveLandscape: Lesson = {
  slug: 'competitive-landscape',
  title: 'The Competitive Landscape',
  subtitle: 'How to talk about competitors and position your product in the market',
  level: 'A2',
  description: 'Learn the key words for discussing competitors, market position, and what makes your product different — essential language for sales and marketing conversations.',
  heroImage: '/images/competitive-landscape-hero.png',

  vocabulary: [
    {
      word: 'COMPETITOR',
      partOfSpeech: 'noun',
      definition: 'Another company that sells a similar product or service to yours and targets the same customers.',
      example: 'We have three main competitors in the marketing software market — all targeting small to mid-size teams.',
      imageSlug: '/images/competitor.png',
    },
    {
      word: 'RIVAL',
      partOfSpeech: 'noun',
      definition: 'A direct competitor — someone you compete with closely for the same customers.',
      example: 'Our closest rival recently lowered their price — we need to review our value proposition.',
      imageSlug: '/images/competitive-landscape-rival.png',
    },
    {
      word: 'MARKET SHARE',
      partOfSpeech: 'noun',
      definition: 'The percentage of total sales in a market that one company holds.',
      example: 'Brightline has around 12% market share in the B2B marketing tools category.',
      imageSlug: '/images/market-share.png',
    },
    {
      word: 'ADVANTAGE',
      partOfSpeech: 'noun',
      definition: "Something that makes your product better or more attractive than a competitor's.",
      example: 'Our main advantage is ease of use — you can set up Brightline in a day, not a week.',
      imageSlug: '/images/advantage.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: "A standard or point of reference used to compare performance — can be an industry standard or a competitor's result.",
      example: "We use our competitors' pricing as a benchmark to make sure we are positioned correctly.",
      imageSlug: '/images/competitive-landscape-benchmark.png',
    },
    {
      word: 'DIFFERENTIATION',
      partOfSpeech: 'noun',
      definition: 'What makes your product different and better than similar products on the market.',
      example: 'Our differentiation is speed — we built Brightline for teams that move fast and need results quickly.',
      imageSlug: '/images/competitive-landscape-differentiation.png',
    },
    {
      word: 'NICHE',
      partOfSpeech: 'noun',
      definition: 'A small, specific part of a market that a product focuses on.',
      example: 'We focus on a niche — small B2B marketing teams — rather than trying to serve everyone.',
      imageSlug: '/images/competitive-landscape-niche.png',
    },
    {
      word: 'LANDSCAPE',
      partOfSpeech: 'noun',
      definition: 'A way of describing all the companies and products in a market — who is competing and how.',
      example: 'The competitive landscape in marketing software has changed a lot in the last three years.',
      imageSlug: '/images/landscape.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'STAND OUT FROM',
      definition: 'Be clearly different and better than competitors in a way that customers notice.',
      example: 'We stand out from competitors because our onboarding takes one day, not two weeks.',
      imageSlug: '/images/competitive-landscape-stand-out-from.png',
    },
    {
      phrase: 'COMPETE WITH',
      definition: 'Try to attract the same customers as another company.',
      example: 'We compete with three main platforms — all targeting small marketing teams with a budget of $30-100 per month.',
      imageSlug: '/images/compete-with.png',
    },
    {
      phrase: 'GAIN MARKET SHARE',
      definition: 'Grow the percentage of the market that your company controls.',
      example: 'We gained market share last year by expanding into the US market.',
      imageSlug: '/images/gain-market-share.png',
    },
    {
      phrase: 'KEEP AN EYE ON',
      definition: 'Watch something regularly to know what is happening.',
      example: "We keep an eye on our competitors' product updates and pricing changes every month.",
      imageSlug: '/images/keep-an-eye-on.png',
    },
    {
      phrase: 'FILL A GAP',
      definition: 'Offer something that no other product in the market is offering.',
      example: 'Brightline filled a gap in the market — no other tool combined analytics and scheduling in one place.',
      imageSlug: '/images/fill-a-gap.png',
    },
    {
      phrase: 'WIN AGAINST',
      definition: 'Be chosen by a customer over a competitor.',
      example: "We win against competitors most often when the customer's priority is speed and simplicity.",
      imageSlug: '/images/win-against.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Riley, who are Brightline's main [[competitor:another company that sells a similar product and targets the same customers]]s?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We have three main ones. Our closest [[rival:a direct competitor you compete with closely]] is MarketStack — they target the same niche as us and have a similar price point.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What [[niche:a small, specific part of a market]] does Brightline focus on?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Small B2B marketing teams — usually 3 to 15 people. We do not try to serve enterprise companies. That is a very deliberate choice — it helps us stay focused.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And what is Brightline's main [[advantage:something that makes your product better or more attractive than a competitor's]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Speed and simplicity. Our [[differentiation:what makes your product different and better than similar products]] is that you can set up Brightline in one day. Most competitors take a week or more.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'How much [[market share:the percentage of total sales in a market that one company holds]] does Brightline have?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Around 12% in our specific category. We have been gaining [[market share]] for three years — partly because the [[landscape:all the companies and products competing in a market]] has not changed much, and partly because we are very good at onboarding.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Do you use competitors as a [[benchmark:a standard used to compare your results or position]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we track their pricing, their product updates, and their reviews. If a competitor drops their price, we need to know. If they launch a new feature, we need to decide if we should respond.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'When you win a deal against a competitor, what is usually the reason?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Speed and customer support. When a client cares most about getting started quickly and having a team they can call, Brightline wins almost every time. Those are our biggest advantages.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I need to think about my own competitive landscape. I do not know who my real rivals are.',
    }
  ],

  matchingExercise: [
    {
        "word": "COMPETITOR",
        "definition": "Another company that sells a similar product and targets the same customers"
    },
    {
        "word": "RIVAL",
        "definition": "A direct competitor you compete with closely for the same customers"
    },
    {
        "word": "MARKET SHARE",
        "definition": "The percentage of total sales in a market that one company holds"
    },
    {
        "word": "ADVANTAGE",
        "definition": "Something that makes your product better or more attractive than a competitor's"
    },
    {
        "word": "BENCHMARK",
        "definition": "A standard or point of reference used to compare performance or position"
    },
    {
        "word": "DIFFERENTIATION",
        "definition": "What makes your product different and better than similar products on the market"
    },
    {
        "word": "NICHE",
        "definition": "A small, specific part of a market that a product focuses on"
    },
    {
        "word": "LANDSCAPE",
        "definition": "A description of all the companies and products competing in a market"
    }
],
  fillBlankExercise: [
    {
        "before": "We have three main",
        "after": "s in the marketing software market.",
        "answer": "competitor"
    },
    {
        "before": "Our closest",
        "after": "recently lowered their price — we need to review our value proposition.",
        "answer": "rival"
    },
    {
        "before": "Brightline has around 12%",
        "after": "in the B2B marketing tools category.",
        "answer": "market share"
    },
    {
        "before": "Our main",
        "after": "is ease of use — you can set up Brightline in one day.",
        "answer": "advantage"
    },
    {
        "before": "We use competitors' pricing as a",
        "after": "to make sure we are positioned correctly.",
        "answer": "benchmark"
    },
    {
        "before": "Our",
        "after": "is speed — we built Brightline for teams that move fast.",
        "answer": "differentiation"
    },
    {
        "before": "We focus on a",
        "after": "— small B2B marketing teams — rather than trying to serve everyone.",
        "answer": "niche"
    },
    {
        "before": "The competitive",
        "after": "in marketing software has changed a lot in the last three years.",
        "answer": "landscape"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What niche does Brightline focus on?",
        "options": [
            "Large enterprise marketing departments",
            "Freelance designers and consultants",
            "Small B2B marketing teams of 3 to 15 people",
            "Retail marketing teams"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Brightline's main differentiation?",
        "options": [
            "The lowest price in the market",
            "The most features",
            "Speed — you can set up in one day compared to competitors' one week",
            "The largest customer support team"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Brightline's current market share?",
        "options": [
            "Around 5%",
            "Around 12%",
            "Around 25%",
            "Around 40%"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Brightline use competitors as a benchmark?",
        "options": [
            "They copy their product features",
            "They track competitors' pricing, product updates, and reviews",
            "They use competitors' ads for inspiration",
            "They hire people from competitor companies"
        ],
        "correctIndex": 1
    },
    {
        "question": "When does Brightline usually win against a competitor?",
        "options": [
            "When the client wants the most features",
            "When the client has the largest budget",
            "When the client cares most about speed and customer support",
            "When the competitor raises their price"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does 'filling a gap in the market' mean?",
        "options": [
            "Lowering your price",
            "Offering something no other product in the market is offering",
            "Gaining new market share quickly",
            "Targeting the same customers as your rivals"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley track every month to keep an eye on competitors?",
        "options": [
            "Competitors' social media posts only",
            "Competitors' pricing, product updates, and reviews",
            "Competitors' marketing campaigns only",
            "Competitors' staff changes"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana say at the end?",
        "options": [
            "She wants to switch from her current tool to Brightline",
            "She thinks she needs to find out who her real rivals are",
            "She is happy with her competitive position",
            "She does not have any competitors"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question or comment. Talk about which response (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "How is Brightline different from MarketStack?",
                "options": [
                    "We are a bit different.",
                    "Our main differentiation is speed and simplicity. You can set up Brightline in one day — MarketStack takes a week or more. We also have much better customer support, which is very important for small teams.",
                    "MarketStack is more for enterprise companies. We are for smaller teams."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names the specific differentiation — setup speed and support — and compares directly. A is too vague. C mentions team size but does not give a real reason to choose Brightline."
            },
            {
                "customerLine": "Why should I choose you over your competitor?",
                "options": [
                    "We have a better product.",
                    "It depends on your priorities. If speed and simplicity are important, Brightline is the right choice — you will be live in one day, not one week. We also have an NPS of 72, which shows our clients are very happy with the support.",
                    "We have been in the market longer."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It connects the customer's priorities to Brightline's advantages and adds proof — the NPS score. A says nothing useful. C claims longevity without explaining why that matters to the customer."
            },
            {
                "customerLine": "What is your market share?",
                "options": [
                    "We are one of the biggest players.",
                    "We have around 12% market share in the small B2B marketing tools category. We have been growing consistently for three years, mainly by focusing on a specific niche rather than trying to serve everyone.",
                    "We are growing quickly."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a specific number, names the niche, and explains what is driving the growth. A is vague. C says nothing useful."
            },
            {
                "customerLine": "I am also speaking to one of your competitors. What makes you stand out?",
                "options": [
                    "We think we are the best option for you.",
                    "That is fine — I would expect you to speak to two or three options. Here is what most clients tell us after they have compared: Brightline wins on speed, support, and simplicity. If those things matter to your team, it is worth seeing a demo.",
                    "We can offer a better price if you decide today."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It acknowledges the comparison confidently, states Brightline's advantages clearly, and invites a demo — a good next step. A says nothing useful. C goes straight to a discount, which signals a weak value proposition."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three potential clients are comparing Brightline to a competitor. As a group, decide which client Brightline is most likely to win. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A team that needs to launch fast",
                "description": "A small marketing team of five people needs a new tool up and running in three days. They do not have time for a long onboarding process.",
                "matchKey": "win"
            },
            {
                "name": "A company that wants deep integrations with enterprise software",
                "description": "A large company wants a tool that integrates deeply with their existing enterprise systems and can support 200 users. They have a big IT team to manage it.",
                "matchKey": "hard"
            },
            {
                "name": "A client who only cares about price",
                "description": "A startup is comparing all options by price only. They want the cheapest solution. They are not concerned about support or ease of use.",
                "matchKey": "unlikely"
            }
        ],
        "options": [
            {
                "key": "win",
                "label": "Brightline will likely win",
                "description": "This client's top priority matches Brightline's main advantage — speed and fast setup. Brightline wins most often when the client needs to move quickly."
            },
            {
                "key": "hard",
                "label": "This will be a hard deal to win",
                "description": "This client needs enterprise features and scale that Brightline does not focus on. The competitor may be a better fit. Brightline should be honest about this rather than over-promising."
            },
            {
                "key": "unlikely",
                "label": "Brightline is unlikely to win",
                "description": "If the client's only priority is price and they do not value support or simplicity, Brightline may not be the right fit. It is better to qualify out early than to win a client who will not get value."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, discuss how you would finish it. Use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "How do you keep track of what your competitors are doing?",
                "salespersonStart": "We do a competitor review every month. We track their pricing, their product updates, and their public reviews on G2. If a rival launches a new feature or lowers their price,",
                "suggestedCompletion": "we discuss it as a team and decide if we need to respond. Sometimes we adjust our value proposition, and sometimes we decide our differentiation is strong enough that we do not need to change anything."
            },
            {
                "customerLine": "How does Brightline position itself in the market?",
                "salespersonStart": "We focus on a specific niche — small B2B marketing teams of 3 to 15 people. We do not try to compete with enterprise tools. Our positioning is as the fastest,",
                "suggestedCompletion": "simplest marketing platform for teams that move fast. We win market share by being the best choice for that specific type of team — not by trying to be everything to everyone."
            },
            {
                "customerLine": "What would you say is the market landscape like right now?",
                "salespersonStart": "The landscape has changed a lot in the last three years. There are more competitors than before, but many of them are trying to serve everyone — from freelancers to enterprise. That has actually helped us,",
                "suggestedCompletion": "because clients in our niche feel those tools are too big and complicated. We fill a gap for teams that want a clean, fast tool without the enterprise complexity."
            },
            {
                "customerLine": "What is your competitive advantage over your closest rival?",
                "salespersonStart": "Our closest rival has more features, but most small teams do not use 80% of them. Our advantage is that we built Brightline specifically for speed — setup in one day,",
                "suggestedCompletion": "a clean interface that the whole team can use without training, and a customer support team that responds within two hours. For small teams, those things matter more than extra features they will never use."
            }
        ]
    }
},
};
