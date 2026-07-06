import { Lesson } from '@/types/lesson';

export const numbersAndPrices: Lesson = {
  slug: 'numbers-and-prices',
  title: 'Numbers and Prices',
  subtitle: 'How to talk about figures in a marketing context',
  level: 'A1-A2',
  description: 'Learn the words marketers use to talk about numbers, money, and results — and how to say them simply and clearly.',
  heroImage: '/images/numbers-and-prices-hero.png',

  vocabulary: [
    {
      word: 'PERCENT',
      partOfSpeech: 'noun',
      definition: 'A part of 100. We use the symbol % to show it.',
      example: 'We got 20 percent more visitors to our website last month.',
      imageSlug: '/images/percent.png',
    },
    {
      word: 'BUDGET',
      partOfSpeech: 'noun',
      definition: 'The money a team has to spend.',
      example: 'Our budget for this campaign is £5,000.',
      imageSlug: '/images/numbers-and-prices-budget.png',
    },
    {
      word: 'COST',
      partOfSpeech: 'noun',
      definition: 'How much you pay for something.',
      example: 'The cost of the ad was £200.',
      imageSlug: '/images/numbers-and-prices-cost.png',
    },
    {
      word: 'REVENUE',
      partOfSpeech: 'noun',
      definition: 'The money a company gets from selling things.',
      example: 'Our revenue went up by 15 percent last month.',
      imageSlug: '/images/numbers-and-prices-revenue.png',
    },
    {
      word: 'FIGURE',
      partOfSpeech: 'noun',
      definition: 'A number in a report or table.',
      example: 'Look at the figures on page two — our sales are up.',
      imageSlug: '/images/figure.png',
    },
    {
      word: 'TOTAL',
      partOfSpeech: 'noun',
      definition: 'The full amount when you add everything together.',
      example: 'The total cost of the campaign was £10,000.',
      imageSlug: '/images/numbers-and-prices-total.png',
    },
    {
      word: 'TARGET',
      partOfSpeech: 'noun',
      definition: 'A number or goal you want to reach.',
      example: 'Our target for this month is 500 new sign-ups.',
      imageSlug: '/images/numbers-and-prices-target.png',
    },
    {
      word: 'DATA',
      partOfSpeech: 'noun',
      definition: 'Numbers and facts that show how something is going.',
      example: 'The data shows that more people are visiting our website.',
      imageSlug: '/images/data.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE TOTAL IS',
      definition: 'Say the full amount of something.',
      example: 'The total is £8,500 for the whole campaign.',
      imageSlug: '/images/the-total-is.png',
    },
    {
      phrase: 'THE COST COMES TO',
      definition: 'Say how much something costs in total.',
      example: 'The cost comes to £3,200 for the first month.',
      imageSlug: '/images/the-cost-comes-to.png',
    },
    {
      phrase: 'WE ARE ON TRACK TO',
      definition: 'Say that you are doing well and will reach your target.',
      example: 'We are on track to hit our target of 1,000 new clients by the end of the month.',
      imageSlug: '/images/we-are-on-track-to.png',
    },
    {
      phrase: 'THE FIGURES SHOW',
      definition: 'Use numbers to say what is happening.',
      example: 'The figures show that our ads are working well.',
      imageSlug: '/images/the-figures-show.png',
    },
    {
      phrase: 'UP BY [X] PERCENT',
      definition: 'Say that something has gone up by a number.',
      example: 'Our website visits are up by 30 percent this month.',
      imageSlug: '/images/up-by-x-percent.png',
    },
    {
      phrase: 'WITHIN BUDGET',
      definition: 'Say that you did not spend more money than you had.',
      example: 'Good news — we finished the campaign within budget.',
      imageSlug: '/images/within-budget.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thanks for joining, Dana. I have some [[data:numbers and facts that show how something is going]] from last month's campaign to share with you.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Great — I'd love to hear the [[figure:a number in a report or table]]s.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'So, our [[budget:the money a team has to spend]] for the campaign was £8,000. The total [[cost:how much you pay for something]] came to £7,600 — so we finished within budget.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That is good news. What about results?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Website visits are up by 25 [[percent:a part of 100 — we use % to show it]]. That is our best month this year.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Excellent. And what is the [[total:the full amount when you add everything together]] number of new sign-ups?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We got 420 new sign-ups. Our [[target:a number or goal you want to reach]] was 400 — so we are above it.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That is great. What about [[revenue:the money a company gets from selling things]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Revenue is up by 18 percent compared to last month. The figures show that the campaign is working very well.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'These are very good results, Riley. What is the plan for next month?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We want to use the same budget and try to get 500 sign-ups. If the data stays good, we can ask for more money next quarter.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Sounds like a good plan. Can you send me a short report with all the figures?',
    }
  ],

  matchingExercise: [
    {
        "word": "PERCENT",
        "definition": "A part of 100 — we use % to show it"
    },
    {
        "word": "BUDGET",
        "definition": "The money a team has to spend"
    },
    {
        "word": "COST",
        "definition": "How much you pay for something"
    },
    {
        "word": "REVENUE",
        "definition": "The money a company gets from selling things"
    },
    {
        "word": "FIGURE",
        "definition": "A number in a report or table"
    },
    {
        "word": "TOTAL",
        "definition": "The full amount when you add everything together"
    },
    {
        "word": "TARGET",
        "definition": "A number or goal you want to reach"
    },
    {
        "word": "DATA",
        "definition": "Numbers and facts that show how something is going"
    }
],
  fillBlankExercise: [
    {
        "before": "We got 20",
        "after": "more visitors to our website last month.",
        "answer": "percent"
    },
    {
        "before": "Our",
        "after": "for this campaign is £5,000.",
        "answer": "budget"
    },
    {
        "before": "The",
        "after": "of the ad was £200.",
        "answer": "cost"
    },
    {
        "before": "Our",
        "after": "went up by 15 percent last month.",
        "answer": "revenue"
    },
    {
        "before": "Look at the",
        "after": "on page two — our sales are up.",
        "answer": "figures"
    },
    {
        "before": "The",
        "after": "cost of the campaign was £10,000.",
        "answer": "total"
    },
    {
        "before": "Our",
        "after": "for this month is 500 new sign-ups.",
        "answer": "target"
    },
    {
        "before": "The",
        "after": "shows that more people are visiting our website.",
        "answer": "data"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What was the budget for the campaign?",
        "options": [
            "£5,000",
            "£7,600",
            "£8,000",
            "£10,000"
        ],
        "correctIndex": 2
    },
    {
        "question": "Did Brightline finish within budget?",
        "options": [
            "No — they spent £500 too much",
            "Yes — they spent £400 less than the budget",
            "No — they did not have enough money",
            "Yes — they spent exactly the budget"
        ],
        "correctIndex": 1
    },
    {
        "question": "By how much did website visits go up?",
        "options": [
            "15 percent",
            "18 percent",
            "20 percent",
            "25 percent"
        ],
        "correctIndex": 3
    },
    {
        "question": "What was the target for new sign-ups?",
        "options": [
            "300",
            "400",
            "420",
            "500"
        ],
        "correctIndex": 1
    },
    {
        "question": "How many new sign-ups did Brightline get?",
        "options": [
            "380",
            "400",
            "420",
            "500"
        ],
        "correctIndex": 2
    },
    {
        "question": "By how much did revenue go up?",
        "options": [
            "10 percent",
            "15 percent",
            "18 percent",
            "25 percent"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the target for next month?",
        "options": [
            "400 sign-ups",
            "420 sign-ups",
            "500 sign-ups",
            "600 sign-ups"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana ask Riley to send?",
        "options": [
            "A new budget plan",
            "A short report with all the figures",
            "A list of new clients",
            "A plan for next year"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question. Talk about which answer (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "How did the campaign go?",
                "options": [
                    "It went well.",
                    "Very well — website visits are up by 25 percent and we got 420 new sign-ups. We also finished within budget.",
                    "The campaign is done now. We will look at the results soon."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives real numbers and says the campaign was within budget — that is the kind of answer people want in a meeting. A does not give any information. C says nothing useful and sounds like the work is not finished."
            },
            {
                "customerLine": "Did you stay within budget?",
                "options": [
                    "I think so, yes.",
                    "Yes — the total cost came to £7,600 and our budget was £8,000, so we had £400 left.",
                    "The budget is always a challenge for campaigns like this."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives the numbers clearly — the cost, the budget, and how much was left. A sounds unsure. C does not answer the question at all."
            },
            {
                "customerLine": "Did you hit your target?",
                "options": [
                    "Yes — we got 420 new sign-ups and our target was 400, so we went above it.",
                    "We are still looking at the data.",
                    "Targets are always hard to hit in marketing."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It says the number you got, the target, and that you went above it — clear and confident. B sounds like you do not know the answer yet. C avoids the question and does not give any information."
            },
            {
                "customerLine": "What does the data show?",
                "options": [
                    "The data shows a lot of good things.",
                    "The data shows that revenue is up by 18 percent and website visits are up by 25 percent.",
                    "We need to look at all the figures carefully before we can say."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It uses two real numbers to show what the data means. A is too general — it says nothing useful. C puts off the answer and sounds like the work is not done."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. You need to share marketing results in three different situations. As a group, talk about which way to present the numbers fits each situation best. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A quick update in a team meeting",
                "description": "Your manager asks how the campaign is going. You have one or two minutes. The team wants to know the key numbers fast.",
                "matchKey": "short"
            },
            {
                "name": "A monthly report for a client",
                "description": "A client wants to see all the figures from last month — budget, cost, revenue, and sign-ups. They want the full picture.",
                "matchKey": "full"
            },
            {
                "name": "A casual chat with a contact",
                "description": "A new contact asks how the campaign went. They are not a client. They are just interested. You have about 30 seconds.",
                "matchKey": "simple"
            }
        ],
        "options": [
            {
                "key": "short",
                "label": "Key numbers only",
                "description": "Give two or three key numbers — the most important ones. Keep it short and clear. Best when people do not have much time."
            },
            {
                "key": "full",
                "label": "All the figures",
                "description": "Go through every number — budget, cost, total, percent, revenue, target, and data. Give the full picture. Best when someone needs all the information."
            },
            {
                "key": "simple",
                "label": "One simple sentence",
                "description": "Say one thing — for example, that it went well or that results are up. Do not use many numbers. Best for a casual conversation."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, talk about how you would finish it. Use words from this lesson. There is no one right answer — share your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "So how did the numbers look?",
                "salespersonStart": "Really well — website visits are up by 25 percent and our revenue",
                "suggestedCompletion": "went up by 18 percent compared to last month. We also got 420 new sign-ups, which is above our target of 400."
            },
            {
                "customerLine": "Did you use all the budget?",
                "salespersonStart": "No — the total cost came to £7,600 and our budget was £8,000, so we",
                "suggestedCompletion": "finished within budget and had £400 left. That is always good news."
            },
            {
                "customerLine": "What does the data show for next month?",
                "salespersonStart": "The data looks good. We want to keep the same budget and try to reach a",
                "suggestedCompletion": "target of 500 new sign-ups. If the figures stay strong, we can ask for a bigger budget next quarter."
            },
            {
                "customerLine": "How do you know the campaign worked?",
                "salespersonStart": "The figures show it clearly — our costs stayed low and the",
                "suggestedCompletion": "revenue went up by 18 percent. The data also shows that more people visited our website than any other month this year."
            }
        ]
    }
},
};
