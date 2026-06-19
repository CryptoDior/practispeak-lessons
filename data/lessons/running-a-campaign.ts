import { Lesson } from '@/types/lesson';

export const runningACampaign: Lesson = {
  slug: 'running-a-campaign',
  title: 'Running a Campaign',
  subtitle: 'How to plan, launch, and manage a marketing campaign from start to finish',
  level: 'A2',
  description: 'Learn the key words for planning and running a marketing campaign — from the brief and deadline to the rollout and review.',
  heroImage: '/images/running-a-campaign-hero.png',

  vocabulary: [
    {
      word: 'BRIEF',
      partOfSpeech: 'noun',
      definition: 'A document or meeting that explains the goal, audience, budget, and key details of a campaign before it starts.',
      example: 'The team read the brief before the meeting so everyone knew what the campaign needed to do.',
      imageSlug: '/images/brief.png',
    },
    {
      word: 'DEADLINE',
      partOfSpeech: 'noun',
      definition: 'The date or time by which something must be finished.',
      example: 'The deadline for the campaign content is Friday — the ads go live on Monday.',
      imageSlug: '/images/deadline.png',
    },
    {
      word: 'SCHEDULE',
      partOfSpeech: 'noun',
      definition: 'A plan that shows what will happen and when.',
      example: 'We have a campaign schedule that shows every task, who owns it, and when it needs to be done.',
      imageSlug: '/images/schedule.png',
    },
    {
      word: 'ROLLOUT',
      partOfSpeech: 'noun',
      definition: 'The process of launching something — starting it step by step and making it available to more people over time.',
      example: 'The rollout starts on Monday with social media, then email in week two, and a webinar in week three.',
      imageSlug: '/images/rollout.png',
    },
    {
      word: 'PHASE',
      partOfSpeech: 'noun',
      definition: 'One stage of a plan. A campaign often has more than one phase.',
      example: 'Phase one is awareness — getting people to know the product exists. Phase two is conversion.',
      imageSlug: '/images/phase.png',
    },
    {
      word: 'ASSET',
      partOfSpeech: 'noun',
      definition: 'Any piece of content used in a campaign — for example: images, videos, emails, or social media posts.',
      example: 'The design team is creating all the campaign assets — visuals, email templates, and ad banners.',
      imageSlug: '/images/asset.png',
    },
    {
      word: 'APPROVAL',
      partOfSpeech: 'noun',
      definition: 'Official agreement from a manager or client that something is ready to go.',
      example: 'We need approval from the client before we can send out the campaign emails.',
      imageSlug: '/images/approval.png',
    },
    {
      word: 'REVIEW',
      partOfSpeech: 'noun',
      definition: 'A meeting or process where you look at the results and decide what went well and what to improve.',
      example: 'We do a campaign review at the end of every month to see what worked and what did not.',
      imageSlug: '/images/review.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'GO LIVE',
      definition: 'Launch or publish something — make it available to the public.',
      example: 'The campaign goes live on Monday — all ads and emails will be sent at 9am.',
      imageSlug: '/images/go-live.png',
    },
    {
      phrase: 'SIGN OFF ON',
      definition: 'Give official approval so something can move forward.',
      example: 'The client needs to sign off on the final designs before we can go live.',
      imageSlug: '/images/sign-off-on.png',
    },
    {
      phrase: 'STICK TO THE SCHEDULE',
      definition: 'Do everything on time, as planned.',
      example: 'We need everyone to stick to the schedule — if one team is late, it delays everything.',
      imageSlug: '/images/stick-to-the-schedule.png',
    },
    {
      phrase: 'ROLL OUT',
      definition: 'Launch something step by step, starting with one part and then adding more.',
      example: 'We will roll out the campaign in phases — social media first, then email, then a live webinar.',
      imageSlug: '/images/roll-out.png',
    },
    {
      phrase: 'WRAP UP',
      definition: 'Finish something and close it off.',
      example: 'We wrap up the campaign at the end of the month and then do a full review.',
      imageSlug: '/images/wrap-up.png',
    },
    {
      phrase: 'KEEP TRACK OF',
      definition: 'Monitor something and make sure you always know how it is going.',
      example: 'We keep track of all campaign assets in a shared folder so nothing gets lost.',
      imageSlug: '/images/keep-track-of.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, how does Brightline run a campaign from start to finish?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It always starts with a [[brief:a document that explains the goal, audience, budget, and key details of a campaign]]. Everyone on the team reads it before we start so we are all working towards the same goal.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And then you make a [[schedule:a plan that shows what will happen and when]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we build a schedule with clear [[deadline:the date or time by which something must be finished]]s for every task. That way nobody is waiting on anyone else.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about the content and materials? Who makes those?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The design team creates all the [[asset:any piece of content used in a campaign — images, videos, emails, or posts]]s. Once those are ready, they go to the client for [[approval:official agreement that something is ready to go]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And when everything is approved, you do the [[rollout:the process of launching something step by step]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. We break it into [[phase:one stage of a plan]]s. Phase one is awareness — social media and PR. Phase two is conversion — email and a free trial offer. We roll out each phase one week apart.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What happens if the client is late to sign off on something?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It pushes everything back. That is why we always give the client a clear deadline in the brief. We also send a reminder three days before.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And at the end — what do you do for the [[review:a process where you look at the results and decide what went well]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We look at all the numbers — sign-ups, clicks, emails opened. We write a short summary and share it with the team. The good things, we build on. The things that did not work, we change next time.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I need to use this process for my agency. Do you have a template for the brief?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — I will send it to you after this call. It is only one page but it covers everything you need.',
    }
  ],

  matchingExercise: [
    {
        "word": "BRIEF",
        "definition": "A document that explains the goal, audience, budget, and key details of a campaign"
    },
    {
        "word": "DEADLINE",
        "definition": "The date or time by which something must be finished"
    },
    {
        "word": "SCHEDULE",
        "definition": "A plan that shows what will happen and when"
    },
    {
        "word": "ROLLOUT",
        "definition": "The process of launching something step by step"
    },
    {
        "word": "PHASE",
        "definition": "One stage of a plan"
    },
    {
        "word": "ASSET",
        "definition": "Any piece of content used in a campaign — images, videos, emails, or posts"
    },
    {
        "word": "APPROVAL",
        "definition": "Official agreement from a manager or client that something is ready to go"
    },
    {
        "word": "REVIEW",
        "definition": "A process where you look at the results and decide what went well and what to improve"
    }
],
  fillBlankExercise: [
    {
        "before": "The team read the",
        "after": "before the meeting so everyone knew what the campaign needed to do.",
        "answer": "brief"
    },
    {
        "before": "The",
        "after": "for the content is Friday — the ads go live on Monday.",
        "answer": "deadline"
    },
    {
        "before": "We have a campaign",
        "after": "that shows every task, who owns it, and when it is due.",
        "answer": "schedule"
    },
    {
        "before": "The",
        "after": "starts on Monday with social media, then email in week two.",
        "answer": "rollout"
    },
    {
        "before": "Phase one is awareness.",
        "after": "two is conversion — email and a free trial offer.",
        "answer": "Phase"
    },
    {
        "before": "The design team is creating all the campaign",
        "after": "s — visuals, email templates, and ad banners.",
        "answer": "asset"
    },
    {
        "before": "We need",
        "after": "from the client before we can send out the campaign emails.",
        "answer": "approval"
    },
    {
        "before": "We do a campaign",
        "after": "at the end of every month to see what worked.",
        "answer": "review"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does a campaign brief include?",
        "options": [
            "Just the budget",
            "The goal, audience, budget, and key campaign details",
            "The final campaign results",
            "The design assets only"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Brightline set clear deadlines for clients in the brief?",
        "options": [
            "Because it is required by law",
            "To make the client feel pressure",
            "Because a late sign-off pushes everything back",
            "So the design team has more time"
        ],
        "correctIndex": 2
    },
    {
        "question": "What are 'campaign assets'?",
        "options": [
            "The budget for a campaign",
            "The team members working on the campaign",
            "Pieces of content like images, videos, emails, and posts",
            "The phases of a campaign"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does phase one of Brightline's campaign focus on?",
        "options": [
            "Conversion — email and free trial",
            "Awareness — social media and PR",
            "Review — checking the results",
            "Approval — client sign-off"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'go live' mean?",
        "options": [
            "Start a live video call",
            "Launch something and make it available to the public",
            "Start writing the campaign brief",
            "Sign off on a design"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does the team do in the campaign review?",
        "options": [
            "They write a new brief for the next campaign",
            "They look at results, write a summary, and decide what to keep or change",
            "They send the results to the client only",
            "They restart the campaign"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Brightline roll out a campaign?",
        "options": [
            "All channels at once on day one",
            "In phases — social media first, then email, then a webinar",
            "By email only",
            "Through partners only"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley offer to send Dana after the call?",
        "options": [
            "A list of campaign results",
            "A one-page brief template",
            "A schedule template",
            "The design assets"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question or comment. Talk about which response (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "How do you start a new campaign?",
                "options": [
                    "We start with a brief — a short document that sets the goal, the audience, the budget, and the key deadlines. Everyone reads it before we start so the whole team is aligned.",
                    "We have a meeting and talk about what we want to do.",
                    "We start making content and then decide on the goal as we go."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It explains what a brief is, what it contains, and why the team uses it. B is vague. C describes a chaotic process — starting without a goal is never a good approach."
            },
            {
                "customerLine": "The deadline is next Friday. Is that enough time?",
                "options": [
                    "It is very tight. Let me check the schedule.",
                    "That depends on what you need.",
                    "We need to look at the schedule together. The assets need to be approved by Tuesday at the latest so we have time to make final changes before the rollout on Friday."
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It gives a specific answer — approval by Tuesday — and connects it to the rollout date. A says nothing useful. B avoids the question without helping the client."
            },
            {
                "customerLine": "Can you launch everything at the same time?",
                "options": [
                    "Yes, we can do it all at once if you want.",
                    "We could, but we prefer to roll out in phases — social media first, then email in week two. That way we can see what is working before we commit the full budget.",
                    "It is easier to do it in phases."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says what is possible but recommends phases and explains why — you can learn before spending the full budget. A just agrees without thought. C recommends phases but does not explain why."
            },
            {
                "customerLine": "What happens at the end of the campaign?",
                "options": [
                    "We do a review — we look at all the numbers, write a short summary, and share it with the team. We decide what worked, what did not, and what we will do differently next time.",
                    "We look at the results.",
                    "The campaign ends and we start planning the next one."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It explains the full review process — data, summary, decisions. B is too short. C skips the review entirely, which means you cannot improve."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three teams have a campaign problem. As a group, decide which part of the campaign process each team needs to fix. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A team that launches everything at once and then can't fix problems fast",
                "description": "A marketing team launches all their campaign channels on the same day. When something does not work, it is hard to change because everything is already live.",
                "matchKey": "rollout"
            },
            {
                "name": "A team that always runs late because nobody knows who is doing what",
                "description": "The campaign team misses deadlines because tasks are not assigned. Nobody knows who owns which piece of content or when it is due.",
                "matchKey": "schedule"
            },
            {
                "name": "A team that never looks at results after a campaign ends",
                "description": "The team runs campaigns and moves on to the next one without checking what worked. They keep making the same mistakes.",
                "matchKey": "review"
            }
        ],
        "options": [
            {
                "key": "rollout",
                "label": "Fix the rollout — use phases",
                "description": "Roll out in phases so you can test what works before going fully live. Start with one channel, review the results, and then move to the next phase with the full budget."
            },
            {
                "key": "schedule",
                "label": "Fix the schedule — assign tasks clearly",
                "description": "Build a campaign schedule that lists every task, the owner, and the deadline. Share it with the team so everyone knows what they are responsible for and when it is due."
            },
            {
                "key": "review",
                "label": "Fix the review — always check results",
                "description": "After every campaign, do a review. Look at the numbers, decide what worked and what did not, and write it down. That way the next campaign is always better than the last."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, discuss how you would finish it. Use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "How long does it take to launch a campaign?",
                "salespersonStart": "It depends on the size of the campaign. For a standard four-week campaign, we usually need two weeks of preparation. The brief is written first, then the team builds the schedule and creates all the",
                "suggestedCompletion": "assets — visuals, emails, and ad copy. Once those have approval, we can go live on day one of the rollout."
            },
            {
                "customerLine": "How do you keep everyone on track?",
                "salespersonStart": "We use a shared campaign schedule. Every task has a clear deadline and an owner. We check in once a week to make sure everyone is sticking to the",
                "suggestedCompletion": "schedule. If something is delayed, we catch it early and adjust before it affects the rollout date."
            },
            {
                "customerLine": "What if the client changes their mind halfway through?",
                "salespersonStart": "It happens sometimes. We ask the client to sign off on the brief at the start so we have a clear agreement. But if things change,",
                "suggestedCompletion": "we update the brief and adjust the schedule. We also check how the change affects the deadline — if we need more time, we tell the client straight away."
            },
            {
                "customerLine": "How do you measure if a campaign was successful?",
                "salespersonStart": "In the review, we look at three main things: the number of new sign-ups, the cost per sign-up, and how many emails were opened. We write a short",
                "suggestedCompletion": "summary and share it with the team. If the numbers are good, we build on what worked. If they are not, we change the strategy for the next phase."
            }
        ]
    }
},
};
