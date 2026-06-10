import { Lesson } from '@/types/lesson';

export const theSalesProcess: Lesson = {
  slug: 'the-sales-process',
  title: 'The Sales Process',
  subtitle: 'The language of moving a deal from first contact to signed contract',
  level: 'B1-B2',
  description: 'Master the vocabulary that defines how deals are built — lead, prospect, pitch, follow-up, close — and learn how sales professionals talk about each stage of the pipeline with precision and confidence.',
  heroImage: '/images/the-sales-process-hero.png',

  vocabulary: [
    {
      word: 'LEAD',
      partOfSpeech: 'noun',
      definition: 'A person or company that has shown some initial interest in your product but has not yet been qualified as a real opportunity.',
      example: 'We got 40 new leads from the webinar last week, but most of them still need to be qualified before we pitch.',
      imageSlug: '/images/lead.png',
    },
    {
      word: 'PROSPECT',
      partOfSpeech: 'noun',
      definition: 'A qualified potential customer who has the budget, the problem you solve, and the authority to make a buying decision.',
      example: 'Once I confirmed she had the budget and the decision-making authority, she moved from a lead to a genuine prospect.',
      imageSlug: '/images/prospect.png',
    },
    {
      word: 'PITCH',
      partOfSpeech: 'noun',
      definition: "A structured, persuasive presentation of your product that connects its value directly to the prospect's specific situation.",
      example: "A good pitch isn't a generic walkthrough — it references exactly what the prospect told you during the discovery call.",
      imageSlug: '/images/pitch.png',
    },
    {
      word: 'FOLLOW-UP',
      partOfSpeech: 'noun',
      definition: 'Contact made after an initial meeting or pitch to keep the relationship alive, answer questions, and move the deal forward.',
      example: 'Most deals are won in the follow-up, not the first meeting — consistent contact builds trust over time.',
      imageSlug: '/images/follow-up.png',
    },
    {
      word: 'CLOSE',
      partOfSpeech: 'verb',
      definition: "To complete a sale by getting the customer's commitment; the moment a prospect agrees to buy.",
      example: 'If you have done the groundwork properly, the close should feel like a natural next step, not a high-pressure moment.',
      imageSlug: '/images/close.png',
    },
    {
      word: 'PIPELINE',
      partOfSpeech: 'noun',
      definition: 'The set of all active deals at different stages of the sales process, from first contact to close.',
      example: 'Our pipeline looks healthy — we have 12 prospects at pitch stage and three that are close to closing.',
      imageSlug: '/images/pipeline.png',
    },
    {
      word: 'QUALIFY',
      partOfSpeech: 'verb',
      definition: 'To assess whether a lead is a genuine sales opportunity by checking their budget, need, and decision-making authority.',
      example: 'Before you invest time in any relationship, qualify the lead — it saves hours of work on deals that were never going to close.',
      imageSlug: '/images/qualify.png',
    },
    {
      word: 'NURTURE',
      partOfSpeech: 'verb',
      definition: 'To build a relationship with a prospect over time through consistent, valuable contact until they are ready to make a decision.',
      example: 'Not every prospect is ready to buy immediately — some need nurturing for weeks or months before the timing is right.',
      imageSlug: '/images/nurture.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'MOVE THROUGH THE PIPELINE',
      definition: 'To progress from one stage of the sales process to the next.',
      example: 'This prospect is moving through the pipeline faster than expected — she went from lead to proposal stage in under two weeks.',
      imageSlug: '/images/move-through-the-pipeline.png',
    },
    {
      phrase: 'QUALIFY A LEAD',
      definition: 'To determine whether a lead meets the criteria to become a real sales opportunity worth pursuing.',
      example: 'Before you book a demo, always qualify the lead — ask about their budget, timeline, and who makes the final decision.',
      imageSlug: '/images/qualify-a-lead.png',
    },
    {
      phrase: 'CLOSE A DEAL',
      definition: "To reach the final agreement and get the customer's commitment to buy.",
      example: 'We have been nurturing this account for three months — I think we are finally in a position to close the deal this week.',
      imageSlug: '/images/close-a-deal.png',
    },
    {
      phrase: 'FOLLOW UP ON',
      definition: 'To contact someone again about a specific conversation, proposal, or question.',
      example: 'I sent the proposal on Tuesday — I need to follow up on it before the end of the week or we risk losing momentum.',
      imageSlug: '/images/follow-up-on.png',
    },
    {
      phrase: 'AT WHAT STAGE IS',
      definition: 'A question used to ask where a particular deal currently sits in the sales process.',
      example: 'At what stage is the Harmon deal? I want to make sure we have the right support in place before the next call.',
      imageSlug: '/images/at-what-stage-is.png',
    },
    {
      phrase: 'PITCH TO SOMEONE',
      definition: 'To deliver a targeted, persuasive presentation of your product to a specific prospect.',
      example: 'I pitched to their entire procurement team last Thursday — they asked a lot of questions, which is always a good sign.',
      imageSlug: '/images/pitch-to-someone.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Okay Dana, let me walk you through how a deal moves from start to finish. It all begins with a [[lead:a person or company that has shown initial interest but has not yet been qualified]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What makes someone a lead rather than just a random contact?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Intent. They've done something — downloaded a guide, clicked an ad, attended a webinar. They've raised their hand. But before you invest real time in them, you need to [[qualify:to assess whether a lead is a genuine opportunity by checking budget, need, and authority]] them.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What does qualifying actually involve?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Three questions. Do they have the budget? Do they have the problem we solve? And do they have the authority to make the buying decision? If yes to all three, they're not just a lead — they're a [[prospect:a qualified potential customer with budget, need, and decision-making authority]].",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And then you [[pitch:a structured, persuasive presentation connecting your product's value to the prospect's specific situation]] them?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly — but a pitch is not a product walkthrough. It's a story. You take everything they told you in the discovery call and you build the pitch around their specific situation. A pitch that sounds generic has already lost.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "What happens when they don't buy straight after the pitch? That must happen a lot.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "All the time — and it's completely normal in B2B. That's where the [[follow-up:contact made after a meeting to keep the relationship alive and move the deal forward]] comes in. You stay in contact. You answer questions. You share a relevant case study. You [[nurture:to build a relationship with a prospect over time until they are ready to decide]] the relationship until the timing is right.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "How do you know when to [[close:to complete a sale by getting the customer's commitment to buy]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "When they stop asking questions about whether to buy and start asking questions about how it works. That shift is your signal. At that point, a close is just an invitation — 'Shall I send the contract over?' It shouldn't feel like pressure.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And all of these stages together — that's the [[pipeline:the set of all active deals at different stages of the sales process]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. A healthy pipeline has deals at every stage — new leads coming in, prospects being nurtured, and deals close to closing. If all your deals are at the same stage, something is broken.',
    }
  ],

  matchingExercise: [
    {
        "word": "LEAD",
        "definition": "Someone who has shown interest but has not yet been qualified"
    },
    {
        "word": "PROSPECT",
        "definition": "A qualified potential customer with budget, need, and decision authority"
    },
    {
        "word": "PITCH",
        "definition": "A persuasive presentation built around the prospect's specific situation"
    },
    {
        "word": "FOLLOW-UP",
        "definition": "Contact made after a meeting to keep a deal moving forward"
    },
    {
        "word": "CLOSE",
        "definition": "To complete a sale by getting the customer's commitment"
    },
    {
        "word": "PIPELINE",
        "definition": "All active deals at different stages of the sales process"
    },
    {
        "word": "QUALIFY",
        "definition": "To assess whether a lead is worth pursuing as a real opportunity"
    },
    {
        "word": "NURTURE",
        "definition": "To build a relationship with a prospect over time until they are ready to buy"
    }
],
  fillBlankExercise: [
    {
        "before": "We got 40 new",
        "after": "from the webinar, but most still need to be qualified.",
        "answer": "leads"
    },
    {
        "before": "Once I confirmed she had the budget and authority, she became a genuine",
        "after": ".",
        "answer": "prospect"
    },
    {
        "before": "A good",
        "after": "references exactly what the prospect told you in the discovery call.",
        "answer": "pitch"
    },
    {
        "before": "Most deals are won in the",
        "after": ", not the first meeting.",
        "answer": "follow-up"
    },
    {
        "before": "If you've done the groundwork properly, the",
        "after": "should feel like a natural next step.",
        "answer": "close"
    },
    {
        "before": "Our",
        "after": "looks healthy — we have deals at every stage from lead to close.",
        "answer": "pipeline"
    },
    {
        "before": "Before you invest time in any relationship,",
        "after": "the lead first.",
        "answer": "qualify"
    },
    {
        "before": "Not every prospect is ready to buy immediately — some need",
        "after": "for weeks before the timing is right.",
        "answer": "nurturing"
    }
],
  multipleChoiceExercise: [
    {
        "question": "According to Riley, what makes someone a lead rather than a random contact?",
        "options": [
            "They work at a large company",
            "They have shown intent — taken an action that signals interest",
            "They have a budget confirmed",
            "They have previously bought from a competitor"
        ],
        "correctIndex": 1
    },
    {
        "question": "What are the three things Riley checks when qualifying a lead?",
        "options": [
            "Industry, company size, and location",
            "Email address, phone number, and job title",
            "Budget, the problem they need solved, and decision-making authority",
            "Timeline, team size, and current software"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the key difference between a lead and a prospect, according to Riley?",
        "options": [
            "A prospect has a bigger budget",
            "A prospect has been qualified — they meet the three criteria",
            "A prospect has already seen a product demo",
            "A prospect works at a larger company"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say makes a pitch effective?",
        "options": [
            "Using impressive technical language",
            "Covering all features in detail",
            "Being built around the prospect's specific situation",
            "Being shorter than 15 minutes"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley say about prospects who don't buy after the first pitch?",
        "options": [
            "They are unlikely to ever buy",
            "You should pitch them again immediately",
            "This is completely normal in B2B — follow-up and nurture are the next steps",
            "You should lower the price to encourage a faster decision"
        ],
        "correctIndex": 2
    },
    {
        "question": "According to Riley, when is the right moment to close?",
        "options": [
            "After the first meeting, while enthusiasm is high",
            "When the prospect stops asking whether to buy and starts asking how it works",
            "After three follow-up emails",
            "When the prospect asks about the price"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley describe the ideal close?",
        "options": [
            "A high-pressure moment where you ask for an immediate decision",
            "A formal contract presentation in a meeting",
            "A natural invitation — not pressure, just making it easy to say yes",
            "A discount offer to encourage the final step"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley say about a pipeline where all deals are at the same stage?",
        "options": [
            "It means the team is very focused",
            "It is normal during a busy quarter",
            "Something is broken — a healthy pipeline has deals at every stage",
            "It is a sign the close rate will be high"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and decide which response is most effective. At B1-B2 level, the right answer is often the one that moves the deal forward intelligently — not just the polite option. Discuss your reasoning before you click.",
        "items": [
            {
                "customerLine": "A new lead came in from a webinar sign-up. They're a marketing manager at a mid-sized company. What do you do first?",
                "options": [
                    "Send them a full product demo video and a pricing sheet immediately.",
                    "Qualify them first — check whether they have the budget, the problem you solve, and the authority to make a decision. Then decide how to proceed.",
                    "Add them to the email nurture sequence and wait to see if they engage further."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Sending a demo to an unqualified lead wastes time on both sides — you don't yet know if this person is a real opportunity. Qualifying first means you pitch to people who are actually worth pitching. The nurture sequence has its place, but a personal qualification call moves the deal faster and shows genuine interest."
            },
            {
                "customerLine": "After your pitch, the prospect says: 'It looks interesting — I just need some time to think about it.'",
                "options": [
                    "Say: 'Of course — take all the time you need. Get back to me whenever you're ready.'",
                    "Say: 'I understand. Can I ask what the main concern is? I want to make sure you have everything you need to make a confident decision.'",
                    "Say: 'We have a promotion ending this Friday — it might be worth deciding before then.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. 'I need to think about it' almost always means there is an unanswered objection or a missing piece of information. B opens a respectful conversation to find out what it is. A lets the prospect go cold with no plan — most deals lost this way are lost here. C uses false urgency, which damages trust the moment the prospect realises the promotion isn't real."
            },
            {
                "customerLine": "A strong prospect has been in your pipeline for two months. They responded well to the pitch but still haven't committed. What's your next move?",
                "options": [
                    "Send a final email saying you can only hold their pricing for another week.",
                    "Reach out with a personal follow-up that references something specific from your last conversation and asks directly whether there are any remaining questions before they decide.",
                    "Move on — if they were genuinely interested, they would have bought by now."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Long nurture cycles are normal in B2B sales — buying decisions involve multiple stakeholders, budget cycles, and internal approvals. A personal follow-up that references previous conversations demonstrates that you have been listening and that you understand their situation. Artificial deadlines (A) can work once but often damage trust. Abandoning a warm prospect (C) is one of the most common and costly mistakes in sales."
            },
            {
                "customerLine": "A prospect says: 'We love the product — we just need a few more weeks to finalise the budget.'",
                "options": [
                    "Say: 'No problem — just let me know when you're ready.'",
                    "Say: 'Of course. To keep things moving, can I send the contract over now so it's ready to sign the moment the budget is confirmed? That way there's no delay at your end.'",
                    "Say: 'If budget is the issue, I could look at offering a small discount to help move things along.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. This is a soft close — you're not pushing, you're removing a future obstacle. When the budget is approved, they can act immediately. A leaves the deal entirely in the prospect's hands, which often means it stalls. C introduces a discount before it is needed, which signals that the original price was negotiable and may devalue the product."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three deal descriptions. As a group, decide what stage of the sales process each deal is at — and what the right next action is. Use pipeline language from this lesson in your discussion. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "The Harmon Account",
                "description": "A marketing director downloaded a Brightline case study last week and filled in a contact form. Riley has their name and company but knows nothing yet about their budget, team size, or what they are trying to solve. They haven't spoken yet.",
                "matchKey": "qualify"
            },
            {
                "name": "The Vela Account",
                "description": "Riley has had two discovery calls with the operations manager. She understands their pain points in detail, the prospect has confirmed budget and authority, and she has asked Riley to send a formal proposal by Friday.",
                "matchKey": "pitch"
            },
            {
                "name": "The Marsh Account",
                "description": "Riley sent a proposal three weeks ago. The prospect replied saying they 'loved it' and their CFO has one final question. The last message ended with: 'I think we're ready to move forward — can we talk Thursday?'",
                "matchKey": "close"
            }
        ],
        "options": [
            {
                "key": "qualify",
                "label": "Qualify the lead",
                "description": "The first step with any new contact. Before investing time in the relationship, confirm they have the budget, the problem you solve, and the authority to make a decision. Without this, you risk building a pipeline full of deals that will never close."
            },
            {
                "key": "pitch",
                "label": "Build the pitch and proposal",
                "description": "The prospect is qualified and ready to hear your case. Now your job is to build a pitch that connects your product's specific capabilities to the exact problems they described. A generic proposal won't win here."
            },
            {
                "key": "close",
                "label": "Move to close",
                "description": "The prospect is ready to decide. The questions have shifted from 'should we buy?' to 'how does this work?' Your next step is a soft, clear close — make it easy for them to say yes to something they have already decided they want."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson's line has been cut off. As a group, finish it using language from this lesson — pipeline terms, process logic, and B1-B2 level professional phrasing. There is no single correct answer — compare your completions, then click to see one possible version.",
        "items": [
            {
                "customerLine": "Dana asks: 'How do I know when a lead is ready to become a prospect?'",
                "salespersonStart": "The shift happens when you have qualified them on three things:",
                "suggestedCompletion": "budget, need, and authority. Once you know they have the money to buy, the problem you solve, and the power to make the decision — that lead is now a prospect and it's time to build your pitch around their specific situation."
            },
            {
                "customerLine": "A prospect says: 'We liked your pitch but we're comparing you with two other providers.'",
                "salespersonStart": "That makes complete sense — I'd expect you to. Can I ask",
                "suggestedCompletion": "what the key criteria are for your decision? I want to make sure you can compare us fairly, and if there is anything from the pitch you'd like me to go into more detail on, I am happy to do that before you make your choice."
            },
            {
                "customerLine": "Your manager asks: 'Where are we with the Marsh account?'",
                "salespersonStart": "We're at the close stage — the proposal is with them and they've confirmed they're ready to move forward.",
                "suggestedCompletion": "I'm following up on Thursday. If the CFO's final question is answered on the call, I think we can close it the same day. The pipeline note is updated and I've flagged it as high priority for this week."
            },
            {
                "customerLine": "Dana says: 'I feel uncomfortable asking for the close — it always feels like I'm pressuring people.'",
                "salespersonStart": "I understand that feeling, but think about what the close actually is.",
                "suggestedCompletion": "If you've qualified the prospect properly, pitched them on their specific situation, and nurtured the relationship through their decision process — they already know they want it. The close isn't pressure. It's an invitation. You are simply making it easy for them to say yes to something they have already decided they want."
            }
        ]
    }
},
};
