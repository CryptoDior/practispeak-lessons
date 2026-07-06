import { Lesson } from '@/types/lesson';

export const talkingAboutValueNotPrice: Lesson = {
  slug: 'talking-about-value-not-price',
  title: 'Talking About Value, Not Only Price',
  subtitle: 'How to shift the conversation from what something costs to what it is worth',
  level: 'B1-B2',
  description: 'Learn how to use value language — worth, save, improve, reduce, increase — to help prospects see your product as an investment rather than an expense, and how to make the ROI case clearly without relying on discounts.',
  heroImage: '/images/talking-about-value-not-price-hero.png',

  vocabulary: [
    {
      word: 'INVESTMENT',
      partOfSpeech: 'noun',
      definition: "Money spent with the expectation of a measurable return — the opposite framing of 'cost', which implies spending with nothing coming back.",
      example: "When you frame the conversation as an investment rather than a cost, the question changes from 'can we afford this?' to 'what do we get back?'",
      imageSlug: '/images/investment.png',
    },
    {
      word: 'RETURN',
      partOfSpeech: 'noun',
      definition: 'The measurable benefit or gain you get from an investment — what the product gives back in time, money, deals, or efficiency.',
      example: 'Before you talk about price, be clear on the return — if the return is bigger than the cost, the price conversation becomes much easier.',
      imageSlug: '/images/return.png',
    },
    {
      word: 'JUSTIFY',
      partOfSpeech: 'verb',
      definition: 'To provide clear evidence or reasoning that something is worth its cost — to make the case that the value outweighs the price.',
      example: 'A strong value conversation does the work of justifying the investment before the prospect even asks about price.',
      imageSlug: '/images/justify.png',
    },
    {
      word: 'MEASURABLE',
      partOfSpeech: 'adjective',
      definition: 'Able to be expressed in numbers or tracked over time — a measurable benefit is far more persuasive than a vague one.',
      example: "The most compelling value statements are measurable — 'this reduces your reporting time by three hours a week' is harder to dismiss than 'this saves time'.",
      imageSlug: '/images/talking-about-value-not-price-measurable.png',
    },
    {
      word: 'INTANGIBLE',
      partOfSpeech: 'adjective',
      definition: 'Real but difficult to quantify — benefits like team confidence, morale, or reduced stress that do not always show up directly in a spreadsheet.',
      example: 'Do not ignore intangible value — a team that is less stressed and more confident performs better, even if you cannot put a clean number on it.',
      imageSlug: '/images/talking-about-value-not-price-intangible.png',
    },
    {
      word: 'EFFICIENCY',
      partOfSpeech: 'noun',
      definition: 'Getting more output with the same or less input — doing things faster, with fewer resources, or with less effort.',
      example: 'Improving efficiency is one of the easiest value cases to make — if you can show how many hours per week a team gets back, the maths usually does the work for you.',
      imageSlug: '/images/efficiency.png',
    },
    {
      word: 'TRADE-OFF',
      partOfSpeech: 'noun',
      definition: 'The balance between what you give up and what you gain — every purchase involves a trade-off, and making that trade-off explicit is part of the value conversation.',
      example: 'Be honest about the trade-off — the product costs X per month, but based on the deals you described, it recovers that in the first week. That is a trade-off worth making.',
      imageSlug: '/images/talking-about-value-not-price-trade-off.png',
    },
    {
      word: 'MARGIN',
      partOfSpeech: 'noun',
      definition: 'The difference between cost and return — either the profit a business makes, or the space a product creates between what it costs and what it generates.',
      example: 'If your product helps a prospect close two more deals a month, calculate what that does to their margin — the value conversation becomes concrete immediately.',
      imageSlug: '/images/margin.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'IT IS WORTH',
      definition: "Directly state the value — 'it is worth X' positions the product in terms of value received, not price paid.",
      example: 'It is worth thinking about this as a monthly investment of X against a return of two to three recovered deals — at your deal size, that calculation is very clear.',
      imageSlug: '/images/it-is-worth.png',
    },
    {
      phrase: 'THIS COULD SAVE YOU',
      definition: 'Quantify the saving in time, money, or effort — make the value tangible by attaching a specific number.',
      example: 'This could save you three hours of manual reporting every week — across a team of five, that is fifteen hours you get back to focus on selling.',
      imageSlug: '/images/this-could-save-you.png',
    },
    {
      phrase: 'OVER TIME THIS WOULD INCREASE',
      definition: 'Show how value grows or compounds over time — helps the prospect see beyond the immediate cost to the longer-term return.',
      example: 'Over time this would increase your conversion rate as the team builds consistent habits — the value compounds as the behaviour embeds.',
      imageSlug: '/images/over-time-this-would-increase.png',
    },
    {
      phrase: 'THINK ABOUT WHAT YOU WOULD SAVE',
      definition: 'Invite the prospect to do their own mental calculation — getting them to work out the value themselves is more persuasive than telling them.',
      example: 'Think about what you would save if even one of those three deals a month did not slip through. At your average deal size, that is the whole year paid for.',
      imageSlug: '/images/think-about-what-you-would-save.png',
    },
    {
      phrase: 'THE RETURN ON THIS IS',
      definition: 'Make the ROI case explicitly — state clearly what the prospect gets back relative to what they spend.',
      example: 'The return on this is not just financial — yes, you recover deals, but you also get back the management time you currently spend chasing updates from the team.',
      imageSlug: '/images/the-return-on-this-is.png',
    },
    {
      phrase: 'COMPARED TO THE COST OF',
      definition: 'Reframe price by comparing it to the cost of the problem — shifts the reference point from what the solution costs to what the problem costs.',
      example: 'Compared to the cost of losing three deals a quarter at your deal size, the monthly fee is a small fraction — and that is before you factor in the time your team spends on workarounds.',
      imageSlug: '/images/compared-to-the-cost-of.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Marcus, before we talk about the contract, I want to make sure we have been through the value properly. Can I walk you through it?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Go ahead — I want to understand the [[return:the measurable benefit you get from an investment]] before I sign anything.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good. You told me you lose roughly two to three deals a month because of slow or missed follow-up. Think about what you would save if even one of those came back. At your average deal size — what does one recovered deal mean for your monthly [[margin:the difference between cost and return]]?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Honestly — one deal covers the cost of this tool for the month, easily.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. So it is worth thinking about the monthly fee not as a cost but as an [[investment:money spent with the expectation of a measurable return]] — and one where the [[return:the measurable benefit you get from an investment]] is visible within the first thirty days. Compared to the cost of losing those deals every month, this is a very small [[trade-off:the balance between what you give up and what you gain]].',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about the time saving — is there a [[measurable:able to be expressed in numbers or tracked]] number on that?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes. This could save you and the team somewhere between three and five hours a week on manual pipeline updates and report building. Across your team, that is [[efficiency:getting more output with the same or less input]] that goes back into selling — not admin.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'There is also a piece that is harder to put a number on — the stress of not knowing what is happening. That [[intangible:real but difficult to quantify]] cost is real.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It is absolutely real. Do not underestimate [[intangible:real but difficult to quantify]] value — the confidence you get from always knowing the state of your pipeline changes how you manage the team. Over time this would increase your ability to coach proactively rather than reactively, which is a different kind of return.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How would I [[justify:to provide clear evidence that something is worth its cost]] this to the board in simple terms?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The return on this is straightforward: one recovered deal per month pays for the tool. Everything after that — time saved, [[efficiency:getting more output with the same or less input]] gained, reduced stress — is upside. I will put that in writing so you have something concrete to share.',
    }
  ],

  matchingExercise: [
    {
        "word": "INVESTMENT",
        "definition": "Money spent with the expectation of a measurable return — the opposite of a cost"
    },
    {
        "word": "RETURN",
        "definition": "The measurable benefit or gain you get back from an investment"
    },
    {
        "word": "JUSTIFY",
        "definition": "To provide clear evidence or reasoning that something is worth its cost"
    },
    {
        "word": "MEASURABLE",
        "definition": "Able to be expressed in numbers or tracked over time"
    },
    {
        "word": "INTANGIBLE",
        "definition": "Real but difficult to quantify — benefits that do not always show up in a spreadsheet"
    },
    {
        "word": "EFFICIENCY",
        "definition": "Getting more output with the same or less input"
    },
    {
        "word": "TRADE-OFF",
        "definition": "The balance between what you give up and what you gain"
    },
    {
        "word": "MARGIN",
        "definition": "The difference between cost and return — what the product generates beyond what it costs"
    }
],
  fillBlankExercise: [
    {
        "before": "When you frame the conversation as an",
        "after": "rather than a cost, the question changes from 'can we afford this?' to 'what do we get back?'",
        "answer": "investment"
    },
    {
        "before": "Before you talk about price, be clear on the",
        "after": "— if it is bigger than the cost, the price conversation becomes much easier.",
        "answer": "return"
    },
    {
        "before": "A strong value conversation does the work of",
        "after": "the investment before the prospect even asks about price.",
        "answer": "justifying"
    },
    {
        "before": "The most compelling value statements are",
        "after": "— 'reduces your reporting time by three hours a week' is harder to dismiss than 'saves time'.",
        "answer": "measurable"
    },
    {
        "before": "Do not ignore",
        "after": "value — a team that is less stressed and more confident performs better, even without a clean number on it.",
        "answer": "intangible"
    },
    {
        "before": "Improving",
        "after": "is one of the easiest value cases to make — show how many hours per week a team gets back.",
        "answer": "efficiency"
    },
    {
        "before": "Be honest about the",
        "after": "— the product costs X per month, but based on the deals described, it recovers that in the first week.",
        "answer": "trade-off"
    },
    {
        "before": "If your product helps close two more deals a month, calculate what that does to their",
        "after": "— the value conversation becomes concrete immediately.",
        "answer": "margin"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the key difference between 'cost' and 'investment' in a sales conversation?",
        "options": [
            "A cost is a one-time payment; an investment is a monthly fee",
            "A cost implies money leaving with no return; an investment implies money spent with a measurable return coming back",
            "An investment is a larger amount than a cost",
            "They mean the same thing — both describe the price of a product"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley open the value conversation with Marcus?",
        "options": [
            "She presents a formal ROI document",
            "She asks Marcus how much budget he has available",
            "She asks Marcus to calculate the value of one recovered deal himself — using his own deal size",
            "She compares Brightline's price to a competitor's"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Marcus conclude when Riley asks about the value of one recovered deal?",
        "options": [
            "One deal would take several months to cover the cost of the tool",
            "One recovered deal per month covers the monthly fee of the tool",
            "The tool is still too expensive even with recovered deals factored in",
            "He would need to recover five deals a month to justify the cost"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'compared to the cost of' do in a value conversation?",
        "options": [
            "It compares your product to a competitor's offering",
            "It shifts the reference point from the price of the solution to the price of the problem",
            "It introduces a discount to make the price feel smaller",
            "It summarises the ROI calculation"
        ],
        "correctIndex": 1
    },
    {
        "question": "Marcus mentions an intangible benefit. What is it?",
        "options": [
            "The time saved on admin each week",
            "The number of recovered deals per month",
            "The stress of not knowing what is happening in the pipeline",
            "The reduction in CRM errors"
        ],
        "correctIndex": 2
    },
    {
        "question": "According to the Register Traps, why is 'think about what you would save if...' more effective than stating the number yourself?",
        "options": [
            "It avoids committing to a specific number that might not be accurate",
            "It gets the prospect to arrive at the value themselves, which is more convincing than being told",
            "It is more formal and appropriate in an enterprise setting",
            "It allows you to avoid discussing price altogether"
        ],
        "correctIndex": 1
    },
    {
        "question": "When should you introduce intangible value in a value conversation?",
        "options": [
            "Always lead with intangibles — they are more personal and memorable",
            "Never — only measurable value is credible in a B2B conversation",
            "After measurable value has been established — use intangibles as supporting evidence, not the main case",
            "Only when the prospect specifically asks about non-financial benefits"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Riley suggest Marcus justify the investment to the board?",
        "options": [
            "By showing them the product demo",
            "By framing it simply: one recovered deal per month pays for the tool, everything else is upside",
            "By sharing a case study from a similar company",
            "By offering a pilot period at a reduced cost"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation involves a price or value conversation. Choose the response that best shifts the focus from cost to value. Discuss your reasoning before clicking.",
        "items": [
            {
                "customerLine": "A prospect says: 'Your product costs three times more than the tool we are using now.'",
                "options": [
                    "Say: 'I understand — but our product has more features and a better support team.'",
                    "Say: 'That is worth looking at in context. Compared to the cost of the problem you described — losing two or three deals a month — how does the current tool's lower price change that calculation?'",
                    "Say: 'We do offer annual pricing which brings the monthly cost down significantly.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It does not defend the price — it reframes the reference point. The question is not 'is this cheaper than our current tool?' but 'is the return greater than the cost?' B invites the prospect to do that maths themselves, which is far more persuasive. A competes on features without addressing value. C jumps to discounting before the value case has been made — which trains the prospect to negotiate harder."
            },
            {
                "customerLine": "A prospect says: 'I am not sure we can justify this spend right now.'",
                "options": [
                    "Say: 'Think about what you would save if the problem you described was solved. One recovered deal a month — is that bigger or smaller than the monthly fee?'",
                    "Say: 'I understand — maybe we should look at a smaller plan that fits your budget.'",
                    "Say: 'A lot of our customers felt the same way before they saw the return. It really does pay for itself.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. 'Think about what you would save...' gets the prospect to calculate the return themselves — using their own numbers, not yours. That is the most convincing value statement possible. B retreats to a smaller package before the value case has been made — the problem might be perception, not budget. C uses vague social proof ('pays for itself') without making the maths concrete."
            },
            {
                "customerLine": "A prospect is focused entirely on the upfront cost and has not asked about the return.",
                "options": [
                    "Say: 'Before we talk about the price in more detail, can I make sure we have covered the return? The return on this is significant — and I think it changes how the number looks.'",
                    "Say: 'The price includes everything — onboarding, support, and all future updates.'",
                    "Say: 'Would a free trial help you feel more comfortable before committing to the full cost?'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. When a prospect is stuck on price before the value has been established, the right move is to redirect the conversation to the return before you go any further into pricing. B adds detail about what is included — useful, but it still keeps the conversation on cost, not value. C offers a trial before the value conversation is complete — this can work, but it avoids the harder and more important conversation."
            },
            {
                "customerLine": "A prospect says: 'We are happy with our current process — I am not sure the improvement is worth the change.'",
                "options": [
                    "Say: 'Over time this would increase your pipeline conversion, but I understand change feels risky.'",
                    "Say: 'That is fair. What is the current process actually costing you — in time, in deals, in management overhead? I want to make sure that we are comparing the cost of change to the cost of staying where you are.'",
                    "Say: 'The improvement is real — most customers see results within the first sixty days.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. 'Happy with the current process' is a common response — but it often means the cost of the problem has not been made visible. B invites the prospect to look at the cost of staying still, which is a powerful reframe. The trade-off is not just between the product and the price — it is between change and the status quo. A acknowledges the concern but ends with an assumption. C uses vague social proof without making the value calculation specific to their situation."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect situations. As a group, match each to the value word — save, improve, reduce, or increase — that would resonate most strongly in each case. Then click 'Check Matches'.",
        "profiles": [
            {
                "name": "Marcus",
                "description": "Marcus is losing two to three deals a month because of slow follow-up. His biggest frustration is the revenue that is slipping through the pipeline. He has also mentioned that his team spends several hours each week on manual reporting — time that is not going into selling.",
                "matchKey": "save"
            },
            {
                "name": "Diane",
                "description": "Diane's team has inconsistent processes — every rep does things slightly differently, which makes it impossible to coach effectively, replicate what works, or onboard new team members quickly. She wants the whole team performing at the level of the top reps.",
                "matchKey": "improve"
            },
            {
                "name": "Sam",
                "description": "Sam's sales cycle is too long — deals that should close in six weeks are taking twelve. The delays are mostly happening during the approval and follow-up stages, and they are costing him deals to faster-moving competitors.",
                "matchKey": "reduce"
            }
        ],
        "options": [
            {
                "key": "save",
                "label": "Save — time and money recovered",
                "description": "'This could save you three to five hours a week in manual reporting — and based on the deals you described, recovering even one per month more than covers the cost. Think about what you would save if those hours went back into selling.'"
            },
            {
                "key": "improve",
                "label": "Improve — consistency and performance",
                "description": "'Over time this would improve the consistency of how the whole team works — every rep following the same proven process, which means you can finally replicate what your best people do and get the rest of the team to that level.'"
            },
            {
                "key": "reduce",
                "label": "Reduce — cycle time and delays",
                "description": "'The return on this is a shorter cycle — by automating the follow-up and approval reminders, we typically see sales cycles reduce by twenty to thirty percent. Compared to the cost of losing deals to faster competitors, that is a very clear trade-off.'"
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started a value statement — finish it using language from this lesson. Use words like worth, save, improve, reduce, increase, return, investment. Compare your versions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "Prospect is focused on the monthly fee and has not thought about the return.",
                "salespersonStart": "It is worth thinking about this as an investment rather than a cost —",
                "suggestedCompletion": "because the question is not 'what does it cost per month?' but 'what does it return?' Based on what you told me — two recovered deals a month at your deal size — the return is several times the fee. The trade-off is very clear once you put it that way."
            },
            {
                "customerLine": "Prospect's team spends four hours a week building manual pipeline reports.",
                "salespersonStart": "This could save your team",
                "suggestedCompletion": "those four hours a week — across five reps, that is twenty hours a week that currently goes into admin. Over a quarter, that is time equivalent to more than a full working week per rep that goes back into selling. Think about what that does to your pipeline if even a fraction of that converts."
            },
            {
                "customerLine": "Prospect is worried about change but has not considered the cost of staying still.",
                "salespersonStart": "Compared to the cost of",
                "suggestedCompletion": "losing two to three deals a quarter to the same follow-up problem — what is the cost of not changing? I want to make sure we are comparing the right two things. The investment is the monthly fee. The cost of staying where you are is deals you already know you are losing."
            },
            {
                "customerLine": "Prospect asks how the product will improve things over time, not just immediately.",
                "salespersonStart": "Over time this would increase",
                "suggestedCompletion": "your conversion rate as the team builds consistent habits — because the visibility means you can coach in real time rather than waiting for end-of-quarter reviews. The value compounds: better habits lead to faster cycles, which improve your win rate, which increases the margin on every deal in the pipeline."
            }
        ]
    }
},
};
