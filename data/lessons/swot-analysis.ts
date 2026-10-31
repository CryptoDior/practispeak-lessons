import { Lesson } from '@/types/lesson';

export const swotAnalysis: Lesson = {
  slug: 'swot-analysis',
  title: 'SWOT Analysis',
  subtitle: 'How to run, present, and act on a SWOT — the most used strategy tool in marketing',
  level: 'B1-B2',
  description: 'A SWOT analysis is one of the first things any marketing team does before planning a campaign or entering a new market. In this lesson you will learn the vocabulary for running and presenting a SWOT — and how to turn the findings into real marketing decisions, not just a slide that gets filed away.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-hero.png',

  vocabulary: [
    {
      word: 'STRENGTH',
      partOfSpeech: 'noun',
      definition: 'Something good that a company or brand does very well.',
      example: 'Our biggest strength is our loyal customer base.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-strength.png',
    },
    {
      word: 'WEAKNESS',
      partOfSpeech: 'noun',
      definition: 'A problem inside a company that makes it less competitive.',
      example: 'Our main weakness is that few people know our brand.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-weakness.png',
    },
    {
      word: 'OPPORTUNITY',
      partOfSpeech: 'noun',
      definition: 'A chance in the market that a brand can use to grow.',
      example: 'The new social platform is a real opportunity for us.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-opportunity.png',
    },
    {
      word: 'THREAT',
      partOfSpeech: 'noun',
      definition: 'Something outside a company that could cause it harm.',
      example: 'A cheaper rival is the biggest threat to our sales.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-threat.png',
    },
    {
      word: 'LEVERAGE',
      partOfSpeech: 'verb',
      definition: 'To use something you have to get the best result.',
      example: 'We should leverage our strong reviews in every ad.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-leverage.png',
    },
    {
      word: 'MITIGATE',
      partOfSpeech: 'verb',
      definition: 'To make a problem or risk smaller or less serious.',
      example: 'We can mitigate the risk by testing the ad first.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-mitigate.png',
    },
    {
      word: 'COMPETITIVE LANDSCAPE',
      partOfSpeech: 'noun',
      definition: 'All the competitors in a market and how they compare.',
      example: 'The competitive landscape is crowded in our region.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-competitive-landscape.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun',
      definition: 'A standard that you use to compare results.',
      example: 'The industry benchmark for open rates is around twenty percent.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-benchmark.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'BUILD ON [A STRENGTH]',
      definition: 'To use something you do well as a base for growth.',
      example: 'Let\'s build on our strength in video content.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-build-on-a-strength.png',
    },
    {
      phrase: 'CAPITALIZE ON [AN OPPORTUNITY]',
      definition: 'To use a chance quickly and get a benefit from it.',
      example: 'We need to capitalize on this opportunity before our rivals do.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-capitalise-on-an-opportunity.png',
    },
    {
      phrase: 'ADDRESS [A WEAKNESS]',
      definition: 'To try to fix a problem inside your company.',
      example: 'This quarter we will address our weakness in email marketing.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-address-a-weakness.png',
    },
    {
      phrase: 'GUARD AGAINST [A THREAT]',
      definition: 'To protect yourself from an outside risk before it happens.',
      example: 'We must guard against a threat from new low-cost competitors.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-guard-against-a-threat.png',
    },
    {
      phrase: 'TURN [A WEAKNESS] INTO [AN OPPORTUNITY]',
      definition: 'To change a problem into something useful for the business.',
      example: 'Let\'s turn our small size into an opportunity to be more personal.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-turn-a-weakness-into-an-opportunity.png',
    },
    {
      phrase: 'COME OUT OF [AN ANALYSIS] WITH',
      definition: 'To finish a review with clear results or decisions.',
      example: 'We want to come out of the analysis with a clear plan.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/swot-analysis-come-out-of-an-analysis-with.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Thank you for making the time. I want to walk you through the SWOT analysis before we finalize the Q4 strategy — because the findings change the direction significantly.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Go ahead. What are the main [[strength:something your brand does well that competitors do not]] findings?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Two major [[strength:an internal advantage you can build strategy around]] areas. First: your 98% retention rate — that is well above the industry [[benchmark:a standard used to compare performance]] of 82%. Second: your average ROI for clients in the manufacturing sector is 340% in the first year. Both are provable and specific. These are not marketing claims — they are facts.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'And the [[weakness:an internal limitation that puts you at a disadvantage]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'The main [[weakness:an internal gap to fix or work around]] is brand awareness — almost nobody in your target market has heard of TechFlow. The second is that all your case studies are from two clients. That is a [[weakness:something that puts you at a disadvantage]] in enterprise sales where buyers want to see a broad portfolio of evidence.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'What about the [[opportunity:an external condition you can use to your advantage]] side?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'A significant one. Your main competitor raised prices by 30% last month. We have already spoken to three of their clients who are actively looking for alternatives. That is a narrow window — we need to [[capitalize on:act quickly on a market opportunity]] it this quarter before they respond.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'And the [[threat:an external factor that could hurt our performance]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'A well-funded new entrant launched in September with aggressive pricing and a large LinkedIn ad budget. The best way to [[guard against:take proactive steps to reduce the impact of a risk]] them is to stop competing on price entirely and compete on proof. They have money — you have results. Use the [[competitive landscape:the full picture of who competitors are and what they offer]] to your advantage.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'So how do we [[leverage:use our advantages to get the best possible result]] the strengths against the threats?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The retention rate and the ROI numbers are your shield. Every piece of content [[builds on:uses an existing advantage as the foundation]] those two facts. To [[mitigate:reduce the impact of a risk or weakness]] the brand awareness weakness, we run a focused three-month LinkedIn campaign. And to [[capitalize on:act quickly on an opportunity]] the competitor's price increase, we launch a direct comparison campaign — 'What does 30% more cost actually get you?' — in October.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'I like the direction. What do we [[come out of this analysis with]] as the single priority?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "One priority: use TechFlow's provable results to [[turn the awareness weakness into an opportunity]] — become the most trusted name in operational efficiency in manufacturing by the end of Q1. Everything in the strategy connects to that.",
    }
  ],

  matchingExercise: [
    {
        "word": "STRENGTH",
        "definition": "Something your brand does well or has that competitors do not — an internal advantage"
    },
    {
        "word": "WEAKNESS",
        "definition": "An internal limitation or gap that puts you at a disadvantage"
    },
    {
        "word": "OPPORTUNITY",
        "definition": "An external condition in the market you can use to your advantage"
    },
    {
        "word": "THREAT",
        "definition": "An external factor that could hurt your brand's performance"
    },
    {
        "word": "LEVERAGE",
        "definition": "To use an advantage or asset to get the best possible result"
    },
    {
        "word": "MITIGATE",
        "definition": "To reduce the impact of a risk or weakness through deliberate action"
    },
    {
        "word": "COMPETITIVE LANDSCAPE",
        "definition": "The full picture of who your competitors are and how they position themselves"
    },
    {
        "word": "BENCHMARK",
        "definition": "A standard used to compare performance — against competitors or industry averages"
    }
],
  fillBlankExercise: [
    {
        "before": "TechFlow's biggest",
        "after": "is its 98% client retention rate — exceptional in any market.",
        "answer": "strength"
    },
    {
        "before": "Our main",
        "after": "is brand awareness — we have excellent results but almost no one in our target market has heard of us.",
        "answer": "weakness"
    },
    {
        "before": "The biggest",
        "after": "is that the market leader just increased prices by 30% — clients are actively looking for alternatives.",
        "answer": "opportunity"
    },
    {
        "before": "The main",
        "after": "is a well-funded new entrant who launched with aggressive pricing and a large marketing budget.",
        "answer": "threat"
    },
    {
        "before": "We need to",
        "after": "those three case studies — they are sitting in a folder and no one is seeing them.",
        "answer": "leverage"
    },
    {
        "before": "We cannot fix the awareness problem overnight, but we can",
        "after": "it with three industry endorsements in the first month.",
        "answer": "mitigate"
    },
    {
        "before": "Before running the SWOT, spend an hour mapping the",
        "after": "— who is in the market, what they are saying, and where the gaps are.",
        "answer": "competitive landscape"
    },
    {
        "before": "The industry",
        "after": "for email open rates in B2B SaaS is around 22% — our last campaign hit 31%.",
        "answer": "benchmark"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A colleague lists 'passionate and talented team' as a strength in the SWOT. What is the problem?",
        "options": [
            "It should go under 'opportunities' since it relates to future potential.",
            "It is too vague to be useful — almost every company would say the same thing. A useful strength is specific and provable, like a retention rate, a result, or a capability that competitors demonstrably lack. Vague strengths cannot inform a marketing decision.",
            "It is subjective and should be supported with an employee satisfaction score.",
            "Strengths in a SWOT should only relate to products or services, not the team."
        ],
        "correctIndex": 1
    },
    {
        "question": "A competitor raises their prices significantly. Where does this appear in TechFlow's SWOT?",
        "options": [
            "As a threat — it changes the competitive landscape and may affect TechFlow's pricing strategy.",
            "As an opportunity — it creates dissatisfied clients who are actively looking for alternatives, which TechFlow can target with a direct campaign.",
            "As both a strength and an opportunity — it validates TechFlow's pricing and opens up the market.",
            "It does not belong in a SWOT — SWOT is for internal analysis, not competitor monitoring."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the most effective way to use SWOT findings in a client presentation?",
        "options": [
            "Read through all four quadrants in order, giving equal time to each section.",
            "Identify the two or three most strategically important findings, explain what they mean for the plan, and show how they connect — for example, which strength can be used to capitalize on which opportunity.",
            "Present the strengths and opportunities first, then the weaknesses and threats — end on a positive note.",
            "Let the client fill in the SWOT themselves before the meeting so they feel ownership of the findings."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'capitalize on an opportunity' in a marketing strategy?",
        "options": [
            "To invest financially in an area with high growth potential.",
            "To act quickly and decisively on a market condition that works in your favour — before the window closes or a competitor moves first.",
            "To document the opportunity formally in the strategy report.",
            "To mention the opportunity to clients as evidence that the market is growing."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which of these is an external threat for a B2B marketing agency?",
        "options": [
            "High staff turnover in the creative team.",
            "A major platform like LinkedIn changes its algorithm, reducing organic reach by 40% — which affects results for all clients who rely on organic content.",
            "Insufficient case studies to support new business pitches.",
            "An internal process that makes campaign approvals slow."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'turn a weakness into an opportunity' mean in practice?",
        "options": [
            "To remove the weakness from the SWOT by fixing it before the presentation.",
            "To find a way to reframe or use a limitation strategically — for example, being unknown in a market can be turned into a 'challenger brand' positioning that appeals to buyers who are tired of the incumbents.",
            "To combine a weakness with an opportunity to create a new product or service.",
            "To acknowledge the weakness publicly to build trust and authenticity with the audience."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between a strength and an opportunity in a SWOT?",
        "options": [
            "Strengths are more important than opportunities — they should always be prioritized.",
            "A strength is internal — something your brand controls, like a result, a capability, or an asset. An opportunity is external — something happening in the market, like a competitor's mistake or a growing trend. Confusing them leads to a strategy that misses what it can actually control.",
            "Strengths relate to the product. Opportunities relate to the brand and marketing.",
            "Strengths are permanent. Opportunities are temporary and time-limited."
        ],
        "correctIndex": 1
    },
    {
        "question": "A SWOT analysis is complete. What should happen next?",
        "options": [
            "File the SWOT in the strategy document and move on to planning the creative assets.",
            "Use the findings to make at least three specific decisions — which strengths to build on, which opportunity to act on first, which weakness to address, and how to guard against the main threat. A SWOT that changes nothing is a wasted exercise.",
            "Present the SWOT to the board and wait for approval before acting on it.",
            "Update the SWOT every month to keep it current with market changes."
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and choose the best response. Discuss why before clicking.",
        "items": [
            {
                "customerLine": "Client completing a SWOT workshop: 'I think our main strength is that we really care about our customers and always go the extra mile.'",
                "options": [
                    "Say: 'That is a great strength — customer care is really important in your sector.'",
                    "Say: 'I can hear that is genuinely true for your team — and that matters. But in a SWOT, we need strengths that are specific and provable, because they need to drive marketing decisions. Can we find the evidence behind that care? For example: what is your NPS score? What do clients say in reviews? If your retention rate or referral rate is high, those are the provable version of what you just described — and those are the numbers we can build a campaign around.'",
                    "Say: 'Customer care is not a strength — it is a baseline expectation. Let us focus on what is genuinely differentiated.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It validates the sentiment while redirecting to specifics — and gives a clear path to finding the provable version of the strength. A accepts a vague entry that cannot inform any decision. C is too blunt and dismissive, which will shut down the conversation rather than improve the SWOT."
            },
            {
                "customerLine": "Client after receiving the SWOT: 'The threats section makes me nervous. Should we delay the campaign until the new competitor settles down?'",
                "options": [
                    "Say: 'That is probably wise — let us wait until Q1 when the market is clearer.'",
                    "Say: 'I understand the concern — but delaying actually works in their favour, not yours. The new entrant has a large budget and they are building brand awareness right now. The best way to guard against them is to move first: get your results and your name in front of your target market before their campaign takes hold. You have better proof than they do. The threat is real, but the response is action — not waiting.'",
                    "Say: 'Do not worry too much about the threats section — most threats never materialise into real problems.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It takes the concern seriously, explains why delay increases the risk rather than reducing it, and reframes action as the correct strategic response to the threat. A validates a poor decision without explanation. C dismisses a legitimate strategic concern."
            },
            {
                "customerLine": "Junior team member in a SWOT workshop: 'Can we put the economic slowdown as both a threat and an opportunity? Companies will want to cut costs, which is what we solve.'",
                "options": [
                    "Say: 'No — each item goes in only one quadrant. The slowdown is a threat.'",
                    "Say: 'That is actually sharp thinking. An economic slowdown is a threat because buyers become more cautious and budgets get cut. But you are right that it is also an opportunity — when companies are under pressure to reduce costs, they are more motivated to find tools that prove ROI quickly, which is exactly what TechFlow does. Let us put it as a threat in the SWOT, but note in the strategy that we can leverage it as an opportunity in our messaging by being the solution to cost pressure rather than an addition to it.'",
                    "Say: 'Opportunities have to be external positive conditions — a slowdown is negative, so it belongs only in threats.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It rewards the thinking, explains the nuance properly, and shows how to handle the duality in the strategy rather than just the framework. A is rigid and unhelpful. C applies a technicality without engaging with the real strategic insight the colleague has identified."
            },
            {
                "customerLine": "Client at the end of a SWOT presentation: 'This is very thorough. What do we do now?'",
                "options": [
                    "Say: 'Take some time to review it with your board and we can reconvene next month to plan next steps.'",
                    "Say: 'Now we turn the SWOT into decisions — and I suggest we do that today while it is fresh. Here are the three things I want us to agree on before we leave: which strength becomes the centrepiece of the campaign, which opportunity we act on first and by when, and which weakness is most urgent to address in the next 30 days. The SWOT is only useful if it changes what we do — so let us make those decisions now.'",
                    "Say: 'We update the SWOT every quarter — I will send you a reminder when it is time to revisit it.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It turns the analysis into action immediately, proposes specific decisions, and explains why urgency matters. A delays unnecessarily — the momentum from a good SWOT session should be used immediately. C treats the SWOT as a recurring admin task rather than a decision-making tool."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three SWOT findings. Match each to the marketing action that addresses it most directly. Discuss as a group before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "Finding 1: Strength",
                "description": "TechFlow's client retention rate is 98% over three years. No competitor in the market publishes this data. The industry average is 82%. Most marketing currently ignores this completely — the website and ads focus only on product features.",
                "matchKey": "leverage"
            },
            {
                "name": "Finding 2: Opportunity",
                "description": "The market leader raised their prices by 30% last month. Three of their existing clients have already contacted TechFlow directly. There is a three-month window before the competitor adds value back to justify the increase.",
                "matchKey": "capitalise"
            },
            {
                "name": "Finding 3: Weakness",
                "description": "TechFlow has only two published case studies, both from the same client sector. Enterprise buyers require multiple proof points from different industries before they will engage. The sales team reports losing three deals in the last quarter due to lack of social proof.",
                "matchKey": "address"
            }
        ],
        "options": [
            {
                "key": "leverage",
                "label": "Leverage the strength in all campaign content",
                "description": "Make the retention rate the headline of every piece of content — ads, case studies, email subject lines, and the website homepage. Turn the number into a story: why do 98% of clients renew? What does that tell you about the results? This transforms an overlooked internal metric into the most powerful marketing asset the brand has."
            },
            {
                "key": "capitalise",
                "label": "Capitalize on the opportunity with a targeted campaign",
                "description": "Launch a direct campaign this month aimed at the competitor's client base — using LinkedIn targeting by company and a message that addresses the price increase without naming the competitor directly: 'What does paying 30% more actually get you?' Include a case study and a clear, risk-free offer to make switching easy."
            },
            {
                "key": "address",
                "label": "Address the weakness before the next enterprise pitch",
                "description": "Prioritize three client interview calls this month to produce two new case studies from different sectors. In the meantime, use client quotes, data from existing results, and a referral from a current client as interim social proof for the next pitch. Do not wait until the case studies are published — the sales team needs something now."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer has started presenting or applying the SWOT. Finish the line clearly and practically. Use vocabulary from this lesson.",
        "items": [
            {
                "customerLine": "Client: 'We have just done the SWOT — what is the most important thing we came out with?'",
                "salespersonStart": "The most important finding is the tension between your biggest strength and your biggest weakness.",
                "suggestedCompletion": "Your strength — a 98% retention rate and a proven 340% ROI in your sector — is exceptional. No competitor can match that with evidence. But your weakness is that almost nobody in your target market knows you exist. The good news is that those two things are directly connected: as soon as people see the results, they want to know more. The strategy is to use the results to build the awareness — they are not separate problems. Every piece of content in Q4 starts with a number, not a feature. That is how we leverage the strength to address the weakness at the same time."
            },
            {
                "customerLine": "Client: 'Our competitor just announced a big price increase. How do we respond?'",
                "salespersonStart": "This is an opportunity — and we have about three months to capitalize on it before they respond.",
                "suggestedCompletion": "Here is what I recommend. This week, we identify all the prospects in our CRM who were previously interested but did not convert — they are the most likely to be reconsidering now. We also build a LinkedIn campaign targeting companies in the competitor's client profile with a simple message: 'Paying more for the same results? Let us show you what changes.' We do not name them directly — we do not need to. The market knows what happened. Our job is to be visible, credible, and easy to switch to before they recover. That means a case study, a risk-free pilot offer, and a direct conversation. Can we get that live within two weeks?"
            },
            {
                "customerLine": "Client: 'We do not have many case studies. How do we compete with larger agencies who have hundreds?'",
                "salespersonStart": "Quality beats quantity in case studies — three specific, results-led examples will outperform fifty generic ones.",
                "suggestedCompletion": "The weakness is real, but we can mitigate it quickly. First, let us turn what you have into the strongest possible version — pull out every number, every timeline, every specific result from your two existing clients and build them into proper case study pages. Second, let us get two more in the pipeline this month — I will set up client interview calls next week. Third, while the new case studies are being produced, we use client quotes and referrals as interim social proof in pitches — a warm introduction from a happy client is more powerful than a published case study anyway. The goal is to come out of this quarter with five strong, specific case studies that make a buyer think: 'they have done exactly what I need, for someone exactly like me.'"
            },
            {
                "customerLine": "Team member: 'How do we make sure the SWOT actually changes what we do, rather than just being a document we file away?'",
                "salespersonStart": "Assign an action and an owner to every major finding before you leave the room.",
                "suggestedCompletion": "A SWOT only works if it produces decisions, not observations. Here is the structure I use: for each strength, ask 'how are we actively leveraging this in the next 30 days?' For each opportunity, ask 'who is responsible for capitalizing on this, and what is the deadline?' For each weakness, ask 'what is the one thing we can do this quarter to address it?' And for each threat, ask 'what is our guard against this — and when does it kick in?' If you cannot answer those questions for each quadrant, the SWOT is not finished. The analysis is the easy part. The decisions are the work."
            }
        ]
    }
},
};
