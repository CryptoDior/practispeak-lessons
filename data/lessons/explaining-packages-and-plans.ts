import { Lesson } from '@/types/lesson';

export const explainingPackagesAndPlans: Lesson = {
  slug: 'explaining-packages-and-plans',
  title: 'Explaining Packages and Plans',
  subtitle: 'How to walk a prospect through tiered pricing clearly — and guide them toward the right option',
  level: 'B1-B2',
  description: 'Learn how to explain different pricing plans with confidence — how to describe what each tier includes, clarify the differences, use social proof to guide decisions, and present upgrading as a natural next step rather than an upsell.',
  heroImage: '/images/explaining-packages-and-plans-hero.png',

  vocabulary: [
    {
      word: 'TIER',
      partOfSpeech: 'noun',
      definition: 'A level in a structured set of options — each pricing tier typically offers more features, capacity, or support than the one below it.',
      example: 'Brightline has three tiers — Basic, Standard, and Premium. Each one is designed for a different stage of team growth.',
      imageSlug: '/images/tier.png',
    },
    {
      word: 'PACKAGE',
      partOfSpeech: 'noun',
      definition: 'A bundle of features, services, or products offered together at a set price — everything that comes with a particular plan.',
      example: 'The Standard package includes the pipeline dashboard, automated follow-up reminders, and onboarding support — everything most growing teams need.',
      imageSlug: '/images/package.png',
    },
    {
      word: 'UPGRADE',
      partOfSpeech: 'verb',
      definition: 'To move to a higher tier or plan — to switch to a package that includes more features, users, or capacity.',
      example: 'You could start with Standard and upgrade to Premium once the team has adopted the core tool and you are ready for the advanced reporting layer.',
      imageSlug: '/images/upgrade.png',
    },
    {
      word: 'SCALABLE',
      partOfSpeech: 'adjective',
      definition: "Able to grow with the customer's needs — a scalable plan adjusts as the team expands without requiring a complete switch.",
      example: 'The Standard plan is scalable — it supports up to twenty-five users, so you have room to grow without needing to move to a different tier immediately.',
      imageSlug: '/images/scalable.png',
    },
    {
      word: 'CAP',
      partOfSpeech: 'noun',
      definition: 'A limit on usage within a plan — a maximum number of users, actions, or features allowed before you need to upgrade.',
      example: 'The Basic plan has a cap of five users — once your team grows beyond that, you would automatically need to move to Standard.',
      imageSlug: '/images/cap.png',
    },
    {
      word: 'BUNDLE',
      partOfSpeech: 'noun',
      definition: 'A group of features or services packaged together as a unit — often at a better price than buying each one separately.',
      example: 'The Premium bundle includes everything in Standard plus advanced analytics, custom reporting, and a dedicated account manager.',
      imageSlug: '/images/bundle.png',
    },
    {
      word: 'FLEXIBLE',
      partOfSpeech: 'adjective',
      definition: 'Able to be adjusted to suit different situations or needs — a flexible plan can be modified, scaled, or cancelled without major disruption.',
      example: "All plans are monthly and flexible — you are not locked into anything, which means you can adjust as your team's needs change.",
      imageSlug: '/images/flexible.png',
    },
    {
      word: 'ONBOARDING',
      partOfSpeech: 'noun',
      definition: 'The process of setting up and getting started with a product — often guided by the vendor, and included in higher-tier plans.',
      example: 'The Standard plan includes dedicated onboarding — a setup session with our team to make sure everything is configured correctly before your reps go live.',
      imageSlug: '/images/onboarding.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE BASIC PLAN INCLUDES',
      definition: 'Introduce what the entry-level tier covers — sets the baseline before explaining what the higher tiers add.',
      example: 'The Basic plan includes the core pipeline dashboard for up to five users — it is designed for small teams or those who want to try the tool before committing to more.',
      imageSlug: '/images/the-basic-plan-includes.png',
    },
    {
      phrase: 'THE DIFFERENCE BETWEEN THE TWO IS',
      definition: 'Explain clearly what separates one tier from another — helps the prospect understand what they would gain or lose by choosing one over the other.',
      example: 'The difference between Standard and Premium is the reporting layer — Standard gives you the pipeline view, Premium adds custom analytics and a dedicated account manager.',
      imageSlug: '/images/the-difference-between-the-two-is.png',
    },
    {
      phrase: 'IF YOU NEED MORE',
      definition: 'Signal when a higher tier would be appropriate — frames upgrading as a response to genuine need, not a sales move.',
      example: 'If you need more than twenty-five users or want the advanced reporting features, that is when Premium starts to make sense.',
      imageSlug: '/images/if-you-need-more.png',
    },
    {
      phrase: 'MOST TEAMS AT YOUR STAGE GO WITH',
      definition: 'Use social proof to guide the prospect toward the most suitable plan — shows that the recommendation is based on experience with similar teams, not just a sales preference.',
      example: 'Most teams at your stage — twelve reps, growing fast, first time using a structured pipeline tool — go with Standard. It gives you everything you need without overcomplicating the rollout.',
      imageSlug: '/images/most-teams-at-your-stage-go-with.png',
    },
    {
      phrase: 'YOU COULD ALWAYS START WITH AND UPGRADE LATER',
      definition: 'Lower the commitment threshold — present upgrading as easy, natural, and low-risk so the prospect does not feel locked in.',
      example: 'You could always start with Standard and upgrade to Premium later once you have seen the value and the team is ready for more. There is no penalty for upgrading mid-cycle.',
      imageSlug: '/images/you-could-always-start-with-and-upgrade-later.png',
    },
    {
      phrase: 'WHAT THAT GETS YOU IS',
      definition: 'Explain concretely what a particular plan or feature delivers — translates a tier name or feature list into a real outcome.',
      example: 'The Standard plan — what that gets you is full pipeline visibility for the whole team, automated follow-up reminders, and onboarding support so you are not setting it up alone.',
      imageSlug: '/images/what-that-gets-you-is.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Marcus, let me walk you through the three plans so you can see how they are structured. They are designed around team size and how much visibility and automation you need.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Sure — I want to understand the [[tier:a level in a structured set of options]]s before we talk numbers.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good. The Basic plan includes the core pipeline dashboard for up to five users. It is designed for small teams or those who want to get started without a large commitment. What that gets you is visibility — you can see deal status in real time, but there is no automation and no [[onboarding:the process of setting up and getting started with a product]] support.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is too limited for us — we have twelve reps and we need the follow-up automation.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Right — so the [[package:a bundle of features and services offered together at a set price]] that fits your situation is Standard. The difference between Basic and Standard is the automation layer and the user [[cap:a limit on usage within a plan]] — Standard supports up to twenty-five users and includes the follow-up reminders and dedicated onboarding.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about Premium — is that something we would need?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Not yet. The difference between Standard and Premium is the advanced analytics [[bundle:a group of features packaged together as a unit]] — custom reporting, [[flexible:able to be adjusted to suit different needs]] dashboards, and a dedicated account manager. If you need more than deep reporting or you are managing a very complex pipeline across multiple teams, that is when Premium starts to make sense.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Is Standard [[scalable:able to grow with the customer's needs]] if we grow the team quickly?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — it supports up to twenty-five users, so you have room to grow. And you could always start with Standard and [[upgrade:to move to a higher tier or plan]] to Premium later if you reach the point where you need the more advanced analytics. There is no disruption to upgrading mid-cycle.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That makes sense. What do most teams similar to ours typically go with?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Most teams at your stage — twelve reps, fast growth, first time using a structured pipeline tool — go with Standard. It is [[flexible:able to be adjusted to suit different needs]], it solves the core problems you described, and it does not ask the team to take on too much change at once.',
    }
  ],

  matchingExercise: [
    {
        "word": "TIER",
        "definition": "A level in a structured set of options — each one offering more than the one below"
    },
    {
        "word": "PACKAGE",
        "definition": "A bundle of features and services offered together at a set price"
    },
    {
        "word": "UPGRADE",
        "definition": "To move to a higher tier — switching to a plan with more features or capacity"
    },
    {
        "word": "SCALABLE",
        "definition": "Able to grow with the customer's needs without requiring a complete switch"
    },
    {
        "word": "CAP",
        "definition": "A limit on usage within a plan — a maximum number of users or actions"
    },
    {
        "word": "BUNDLE",
        "definition": "A group of features packaged together as a unit — often at a better combined price"
    },
    {
        "word": "FLEXIBLE",
        "definition": "Able to be adjusted to suit different situations — not locked in or rigid"
    },
    {
        "word": "ONBOARDING",
        "definition": "The process of setting up and getting started — often guided and included in higher-tier plans"
    }
],
  fillBlankExercise: [
    {
        "before": "Brightline has three",
        "after": "s — Basic, Standard, and Premium. Each is designed for a different stage of team growth.",
        "answer": "tier"
    },
    {
        "before": "The Standard",
        "after": "includes the pipeline dashboard, automated follow-up reminders, and onboarding support.",
        "answer": "package"
    },
    {
        "before": "You could start with Standard and",
        "after": "to Premium later, once the team is ready for the advanced reporting layer.",
        "answer": "upgrade"
    },
    {
        "before": "The Standard plan is",
        "after": "— it supports up to twenty-five users, so you have room to grow without moving to a new tier.",
        "answer": "scalable"
    },
    {
        "before": "The Basic plan has a",
        "after": "of five users — once your team grows beyond that, you move to Standard.",
        "answer": "cap"
    },
    {
        "before": "The Premium",
        "after": "includes everything in Standard plus advanced analytics, custom reporting, and a dedicated account manager.",
        "answer": "bundle"
    },
    {
        "before": "All plans are monthly and",
        "after": "— you are not locked in, which means you can adjust as your team's needs change.",
        "answer": "flexible"
    },
    {
        "before": "The Standard plan includes dedicated",
        "after": "— a setup session with our team before your reps go live.",
        "answer": "onboarding"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley recommend Standard over Basic for Marcus?",
        "options": [
            "Standard is more expensive and therefore better quality",
            "Basic does not include the automation layer or the user capacity Marcus's team needs",
            "Basic is not available for B2B teams",
            "Marcus asked for the most popular plan"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the main difference between Standard and Premium?",
        "options": [
            "Premium supports more users",
            "Standard includes onboarding; Premium does not",
            "Premium adds advanced analytics, custom reporting, and a dedicated account manager",
            "Premium has a shorter contract term"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why does Riley say Marcus does not need Premium yet?",
        "options": [
            "Premium is outside Marcus's budget",
            "The advanced analytics and custom reporting in Premium are not relevant to Marcus's current stage",
            "Marcus's team is too small for Premium",
            "Premium requires a longer minimum contract"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'the Standard plan has a cap of twenty-five users' mean?",
        "options": [
            "The plan costs a maximum of twenty-five pounds per user",
            "The plan can only be used on twenty-five devices",
            "The plan supports a maximum of twenty-five users — more than that requires an upgrade",
            "The plan is discounted for teams of twenty-five or more"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does 'you could always start with Standard and upgrade later' achieve?",
        "options": [
            "It signals that Standard is not the right long-term solution",
            "It reduces perceived risk by making the entry point feel safe and upgrading feel natural",
            "It introduces a time-limited discount on Premium",
            "It avoids a conversation about pricing altogether"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the Register Traps, what is the problem with walking a prospect through all three plans from the beginning?",
        "options": [
            "It takes too long and makes the pricing seem complicated",
            "It forces the prospect to compare options they do not need",
            "Both A and B — it wastes time and often confuses the prospect",
            "It is only appropriate in enterprise settings"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why is 'most teams at your stage go with...' more effective than a direct recommendation?",
        "options": [
            "It avoids committing to a specific recommendation",
            "It uses social proof — showing the choice has been validated by others in the same situation",
            "It is less formal and more appropriate for SMB prospects",
            "It allows the prospect to feel like they made the decision themselves"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley mean when she says the Standard plan is 'scalable'?",
        "options": [
            "The price increases gradually as you add more features",
            "The plan can grow with Marcus's team — it supports up to twenty-five users without needing to switch",
            "The plan can be scaled down to a smaller version if needed",
            "The plan is available at different price points depending on contract length"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation involves helping a prospect choose the right plan. Choose the response that guides them most effectively — without over-selling or under-selling. Discuss before clicking.",
        "items": [
            {
                "customerLine": "A prospect says: 'Just tell me — which plan do most people go with?'",
                "options": [
                    "Say: 'It really depends on your specific situation — I would need to ask you a few more questions before recommending anything.'",
                    "Say: 'Most teams at a similar stage go with Standard. It has the core features that solve the problems most growing sales teams face, without the complexity of Premium. Based on what you have told me, I think that is the right fit for you too.'",
                    "Say: 'Premium is our most popular plan — it includes everything and most enterprise teams prefer it.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. When a prospect asks directly, give them a direct answer — and ground it in their situation. Social proof plus a personalised reason is the most persuasive combination. A avoids the question, which is frustrating when someone has explicitly asked for a recommendation. C claims Premium is most popular in order to upsell — but recommending more than someone needs damages trust when they discover it later."
            },
            {
                "customerLine": "A prospect says: 'I like the Standard plan but I am worried that if our team grows we will be forced onto Premium.'",
                "options": [
                    "Say: 'Premium is actually not much more expensive — it might be worth starting there.'",
                    "Say: 'Standard supports up to twenty-five users — you could always start with Standard and upgrade to Premium later if you reach that cap. There is no disruption to upgrading and no penalty for doing it mid-cycle.'",
                    "Say: 'If your team grows quickly, Premium might be the safer choice.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It directly addresses the concern with specific information (the user cap), then uses 'you could always start with and upgrade later' to reduce the risk perception. A and C both try to push the prospect toward Premium before they have reached the point where it is needed — which feels like an upsell rather than a solution."
            },
            {
                "customerLine": "A prospect is a small team of three people and the Basic plan would genuinely cover their needs.",
                "options": [
                    "Say: 'I would actually recommend Standard — it gives you room to grow and the automation features are really useful.'",
                    "Say: 'Honestly — the Basic plan covers everything you need at your current stage. It has a cap of five users, which gives you room for two more hires. If your team grows beyond that, upgrading to Standard is straightforward.'",
                    "Say: 'Most teams choose Standard, so I would go with that to be safe.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Recommending the right plan for the prospect's actual situation — even if it is the cheapest — builds more trust than any other move you can make. It signals that you are thinking about their outcome, not your commission. A recommends more than they need. C uses social proof incorrectly — the 'most teams' argument only works when it actually applies to the prospect's situation."
            },
            {
                "customerLine": "A prospect asks: 'What is the difference between Standard and Premium — is it worth the extra cost?'",
                "options": [
                    "Say: 'Premium is definitely better — if you can afford it, I would always recommend going with the best.'",
                    "Say: 'The difference between Standard and Premium is the advanced analytics and reporting layer, plus a dedicated account manager. It is worth it if you need custom reports or manage a complex multi-team pipeline. If not, Standard gives you everything you need right now.'",
                    "Say: 'Premium has more features — but Standard is a great option too. It depends on your budget.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains the specific difference clearly, then helps the prospect evaluate whether they actually need it — rather than just saying it is 'better'. A is a vague upsell with no substance. C avoids making a recommendation and makes the decision entirely about budget rather than fit."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect descriptions. As a group, decide which plan — Basic, Standard, or Premium — fits each one best. Match, then click 'Check Matches'.",
        "profiles": [
            {
                "name": "Team A",
                "description": "A startup with four sales reps. They have never used a structured pipeline tool before and want to test whether their team will actually adopt something new before committing to a bigger investment. Budget is tight and they want to keep things simple at first.",
                "matchKey": "basic"
            },
            {
                "name": "Team B",
                "description": "A mid-size company with fourteen reps. They have a clear pipeline visibility problem and need follow-up automation. They are growing fast — expecting to hire six more reps in the next six months. They want dedicated onboarding to make sure the rollout goes smoothly.",
                "matchKey": "standard"
            },
            {
                "name": "Team C",
                "description": "A large sales organisation with thirty reps across three different teams. Their Head of Revenue needs custom reports for each team, wants advanced analytics to track performance trends, and needs a dedicated point of contact for ongoing support and configuration.",
                "matchKey": "premium"
            }
        ],
        "options": [
            {
                "key": "basic",
                "label": "Basic — core visibility, up to 5 users",
                "description": "The Basic plan includes the core pipeline dashboard for up to five users with no automation. It is designed for small teams who want to start with visibility before adding complexity — or those who want to test the tool before committing to a larger plan."
            },
            {
                "key": "standard",
                "label": "Standard — full pipeline + automation, up to 25 users",
                "description": "The Standard package includes full pipeline visibility, automated follow-up reminders, and dedicated onboarding support for up to twenty-five users. It is the right fit for growing teams who need automation and structure, but do not yet need advanced analytics."
            },
            {
                "key": "premium",
                "label": "Premium — everything in Standard plus advanced analytics",
                "description": "The Premium bundle includes everything in Standard plus custom reporting, flexible dashboards, and a dedicated account manager. It is designed for larger or more complex organisations that need granular performance data across multiple teams."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started explaining a plan — but the line has been cut off. Finish it using language from this lesson. Compare your versions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "Prospect asks: 'What does the Standard plan actually include?'",
                "salespersonStart": "The Standard plan includes",
                "suggestedCompletion": "full pipeline visibility for up to twenty-five users, automated follow-up reminders so no deal goes cold without a prompt, and dedicated onboarding so you are not setting it up alone. What that gets you is everything you described needing — visibility, automation, and a smooth rollout — in one package."
            },
            {
                "customerLine": "Prospect is deciding between Standard and Premium and is not sure if the extra cost is justified.",
                "salespersonStart": "The difference between the two is",
                "suggestedCompletion": "the reporting layer. Standard gives you the pipeline view and the automation — which solves the core problems you described. Premium adds custom analytics and a dedicated account manager. If you need reports that go beyond the standard dashboard, that is when Premium starts to make sense. Based on what you have told me, I do not think you need that yet."
            },
            {
                "customerLine": "Prospect is nervous about being locked into a plan that might not grow with them.",
                "salespersonStart": "You could always start with Standard and",
                "suggestedCompletion": "upgrade to Premium later if your needs change. The plan is flexible — there is no penalty for upgrading mid-cycle and your existing configuration carries over. Most teams find that Standard covers them for the first twelve to eighteen months, and by the time they need Premium, the value case is obvious."
            },
            {
                "customerLine": "Prospect has a team of twenty reps and has not yet decided which plan to choose.",
                "salespersonStart": "Most teams at your stage",
                "suggestedCompletion": "go with Standard — twenty reps sits comfortably within the user cap, and the follow-up automation and onboarding support are exactly what a team at your scale needs. It is scalable enough to cover your growth for at least the next year, and if you reach the point where you need advanced analytics, upgrading is straightforward."
            }
        ]
    }
},
};
