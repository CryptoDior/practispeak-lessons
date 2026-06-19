import { Lesson } from '@/types/lesson';

export const aSimpleMarketingPlan: Lesson = {
  slug: 'a-simple-marketing-plan',
  title: 'A Simple Marketing Plan',
  subtitle: 'How to talk about plans and goals in marketing',
  level: 'A1-A2',
  description: 'Learn the words for making a simple marketing plan and how to say what you want to do, how you will do it, and what you want to get.',
  heroImage: '/images/a-simple-marketing-plan-hero.png',

  vocabulary: [
    {
      word: 'GOAL',
      partOfSpeech: 'noun',
      definition: 'Something you want to do or get.',
      example: 'Our goal is to get 500 new sign-ups this month.',
      imageSlug: '/images/goal.png',
    },
    {
      word: 'PLAN',
      partOfSpeech: 'noun',
      definition: 'A set of ideas about how to do something.',
      example: 'We have a plan for the next campaign. It has three steps.',
      imageSlug: '/images/plan.png',
    },
    {
      word: 'STRATEGY',
      partOfSpeech: 'noun',
      definition: 'The way you decide to do something to get a good result.',
      example: 'Our strategy is to use social media to reach young business owners.',
      imageSlug: '/images/strategy.png',
    },
    {
      word: 'IDEA',
      partOfSpeech: 'noun',
      definition: 'A thought or plan for something new.',
      example: 'We had a great idea for the new campaign — a short video series.',
      imageSlug: '/images/idea.png',
    },
    {
      word: 'CAMPAIGN',
      partOfSpeech: 'noun',
      definition: 'A set of activities to tell people about a product or brand.',
      example: 'The campaign will run for four weeks on social media and email.',
      imageSlug: '/images/campaign.png',
    },
    {
      word: 'STEP',
      partOfSpeech: 'noun',
      definition: 'One thing you do as part of a plan.',
      example: 'The first step is to decide who we want to reach.',
      imageSlug: '/images/step.png',
    },
    {
      word: 'RESULT',
      partOfSpeech: 'noun',
      definition: 'What happens because of something you do.',
      example: 'The results of the last campaign were very good — we got 420 new sign-ups.',
      imageSlug: '/images/result.png',
    },
    {
      word: 'ACTION',
      partOfSpeech: 'noun',
      definition: 'Something you do as part of a plan.',
      example: 'Our first action is to create content for social media.',
      imageSlug: '/images/action.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'SET A GOAL',
      definition: 'Decide what you want to do or get.',
      example: 'The first thing we do is set a goal for the campaign.',
      imageSlug: '/images/set-a-goal.png',
    },
    {
      phrase: 'PUT THE PLAN INTO ACTION',
      definition: 'Start doing what you planned.',
      example: 'We have the plan — now it is time to put it into action.',
      imageSlug: '/images/put-the-plan-into-action.png',
    },
    {
      phrase: 'STICK TO THE PLAN',
      definition: 'Do what you said you would do and do not change it.',
      example: 'We need to stick to the plan this month — no new ideas until the campaign is done.',
      imageSlug: '/images/stick-to-the-plan.png',
    },
    {
      phrase: 'MEASURE THE RESULTS',
      definition: 'Look at the numbers at the end to see how well the plan worked.',
      example: 'We measure the results at the end of each campaign and share them with the team.',
      imageSlug: '/images/measure-the-results.png',
    },
    {
      phrase: 'COME UP WITH',
      definition: 'Think of a new idea.',
      example: 'The team came up with three great ideas for the next campaign.',
      imageSlug: '/images/come-up-with.png',
    },
    {
      phrase: 'BUILD ON',
      definition: 'Use something that worked before to make something even better.',
      example: 'The last campaign worked well, so we want to build on it next month.',
      imageSlug: '/images/build-on.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Riley, can you walk me through the [[plan:a set of ideas about how to do something]] for next month's campaign?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. We always start by setting a [[goal:something you want to do or get]]. For this campaign, the goal is to get 600 new sign-ups in four weeks.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That is a clear goal. What is the [[strategy:the way you decide to do something to get a good result]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our strategy is to reach new customers through social media and email. We also have a new [[idea:a thought or plan for something new]] — a short video series about how our product works.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I like that. How long will the [[campaign:a set of activities to tell people about a product or brand]] run?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Four weeks. We break it into [[step:one thing you do as part of a plan]]s. Step one: create the content. Step two: run the ads. Step three: send the emails.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And what is the first [[action:something you do as part of a plan]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'This week we start making the videos and writing the email copy. That is our first action.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'How do you measure the [[result:what happens because of something you do]]s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We look at the number of new sign-ups and the cost per sign-up every week. At the end, we share the full results with the team.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'This sounds like a very clear plan, Riley. Do you write it all down?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we always write a short plan document. It helps everyone stick to the plan and know what to do each week.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I might use this way of planning for my agency too. Simple and clear.',
    }
  ],

  matchingExercise: [
    {
        "word": "GOAL",
        "definition": "Something you want to do or get"
    },
    {
        "word": "PLAN",
        "definition": "A set of ideas about how to do something"
    },
    {
        "word": "STRATEGY",
        "definition": "The way you decide to do something to get a good result"
    },
    {
        "word": "IDEA",
        "definition": "A thought or plan for something new"
    },
    {
        "word": "CAMPAIGN",
        "definition": "A set of activities to tell people about a product or brand"
    },
    {
        "word": "STEP",
        "definition": "One thing you do as part of a plan"
    },
    {
        "word": "RESULT",
        "definition": "What happens because of something you do"
    },
    {
        "word": "ACTION",
        "definition": "Something you do as part of a plan"
    }
],
  fillBlankExercise: [
    {
        "before": "Our",
        "after": "is to get 500 new sign-ups this month.",
        "answer": "goal"
    },
    {
        "before": "We have a",
        "after": "for the next campaign. It has three steps.",
        "answer": "plan"
    },
    {
        "before": "Our",
        "after": "is to use social media to reach young business owners.",
        "answer": "strategy"
    },
    {
        "before": "We had a great",
        "after": "for the new campaign — a short video series.",
        "answer": "idea"
    },
    {
        "before": "The",
        "after": "will run for four weeks on social media and email.",
        "answer": "campaign"
    },
    {
        "before": "The first",
        "after": "is to decide who we want to reach.",
        "answer": "step"
    },
    {
        "before": "The",
        "after": "s of the last campaign were very good.",
        "answer": "result"
    },
    {
        "before": "Our first",
        "after": "is to create content for social media.",
        "answer": "action"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the goal of next month's campaign?",
        "options": [
            "500 new sign-ups in four weeks",
            "600 new sign-ups in four weeks",
            "1,000 new sign-ups in a month",
            "400 new clients in a week"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Brightline's strategy for the campaign?",
        "options": [
            "TV and print advertising",
            "Social media and email",
            "Trade shows and events",
            "LinkedIn only"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the new idea for the campaign?",
        "options": [
            "A blog post series",
            "A podcast",
            "A short video series about how the product works",
            "A free event for new clients"
        ],
        "correctIndex": 2
    },
    {
        "question": "How long will the campaign run?",
        "options": [
            "One week",
            "Two weeks",
            "Three weeks",
            "Four weeks"
        ],
        "correctIndex": 3
    },
    {
        "question": "What is step one of the campaign?",
        "options": [
            "Run the ads",
            "Send the emails",
            "Create the content",
            "Set the goal"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the first action this week?",
        "options": [
            "Send the emails",
            "Make the videos and write the email copy",
            "Run the ads",
            "Look at the results"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Brightline measure results?",
        "options": [
            "They look at website visits only",
            "They count how many emails they sent",
            "They look at new sign-ups and cost per sign-up every week",
            "They ask clients to fill in a form"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why does Brightline write a short plan document?",
        "options": [
            "To send to clients",
            "To help everyone stick to the plan and know what to do each week",
            "To share with the agency",
            "Because the director asks for it"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question. Talk about which answer (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "What is the plan for next month?",
                "options": [
                    "We are working on a few things.",
                    "Our goal is to get 600 new sign-ups in four weeks. The strategy is social media and email, and we have a new idea — a short video series.",
                    "We have a plan but we are still working out the details."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says the goal, the strategy, and the idea — all in a short, clear answer. A gives no information. C sounds like the plan is not ready, which is not a good message for a client."
            },
            {
                "customerLine": "What is your strategy?",
                "options": [
                    "We have a good strategy.",
                    "Our strategy is to reach new customers through social media and email. We run ads on LinkedIn and send a weekly email to our client list.",
                    "It depends on the campaign."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names the channels and says how you use them. A gives no information. C avoids the question."
            },
            {
                "customerLine": "How do you know if a campaign worked?",
                "options": [
                    "We look at the results.",
                    "We measure the results at the end of each campaign — we look at the number of new sign-ups and the cost per sign-up. Then we share the results with the team.",
                    "We usually know because the team is happy with it."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It names what you measure — sign-ups and cost per sign-up — and says you share the results. A says nothing useful. C sounds subjective and not professional."
            },
            {
                "customerLine": "What do you do first when you start a new campaign?",
                "options": [
                    "We come up with a great idea.",
                    "We set a goal first — we decide what we want to get from the campaign. Then we build the strategy and plan around that goal.",
                    "We start making content straight away."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Setting a goal first is the right approach — everything else in the plan builds on the goal. A makes the idea the first step, but without a goal the idea has no direction. C jumps to action before thinking about what you want to get."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three people ask about marketing plans. As a group, talk about which type of plan fits each situation best. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A new client who wants to know what to expect",
                "description": "A client is about to start working with Brightline. They want a simple, clear plan they can read and understand quickly.",
                "matchKey": "simple"
            },
            {
                "name": "A team planning a big product launch",
                "description": "The team is planning a launch for a new product in six weeks. Everyone needs to know what to do and when.",
                "matchKey": "detailed"
            },
            {
                "name": "A manager asking for a quick update",
                "description": "A manager asks what the plan is for next month. They have two minutes. They want the key points only.",
                "matchKey": "short"
            }
        ],
        "options": [
            {
                "key": "simple",
                "label": "3-sentence plan",
                "description": "Write or say the goal, the strategy, and the first action in three sentences. Clear, short, and easy to read. Best for a client who needs to understand the plan quickly."
            },
            {
                "key": "detailed",
                "label": "Step-by-step plan",
                "description": "Write out every step, every action, and every date. Say who does what and when. Best when many people need to work together and everyone needs to know their part."
            },
            {
                "key": "short",
                "label": "One clear sentence",
                "description": "Say the goal and the main strategy in one sentence. No steps or actions needed. Best when someone just wants the key point fast."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, talk about how you would finish it. Use words from this lesson. There is no one right answer — share your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "Can you give me a simple marketing plan for our product?",
                "salespersonStart": "Of course. Our goal is to get 500 new sign-ups in four weeks. Our strategy is to",
                "suggestedCompletion": "reach new customers through social media and email. Our first action is to create a short video series and run ads on LinkedIn."
            },
            {
                "customerLine": "What are the steps in your plan?",
                "salespersonStart": "We break the campaign into three steps. Step one is to create the content. Step two is to",
                "suggestedCompletion": "run the ads on social media. Step three is to send emails to our client list. We measure the results at the end of each week."
            },
            {
                "customerLine": "How do you come up with ideas for a campaign?",
                "salespersonStart": "We have a short team meeting where everyone can share ideas. Then we choose the best",
                "suggestedCompletion": "idea and build it into a plan. We always make sure the idea connects to our goal — so we know it will help us get the results we want."
            },
            {
                "customerLine": "What do you do when a campaign does not work well?",
                "salespersonStart": "We look at the results and try to understand what went wrong. Then we",
                "suggestedCompletion": "come up with a new idea or change the strategy. We never just stick to a plan that is not working — we build on what is good and change what is not."
            }
        ]
    }
},
};
