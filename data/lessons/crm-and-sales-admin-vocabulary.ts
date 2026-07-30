import { Lesson } from '@/types/lesson';

export const crmAndSalesAdminVocabulary: Lesson = {
  slug: 'crm-and-sales-admin-vocabulary',
  title: 'CRM and Sales Admin Vocabulary',
  subtitle: 'How to talk about your pipeline, deals, and activity using the key language of CRM and sales administration',
  level: 'B1-B2',
  description: "A salesperson who can manage their CRM clearly is a salesperson their manager can trust. But CRM vocabulary is specific — the words 'lead', 'pipeline', 'deal', 'note', and 'status' each have precise meanings in a sales context, and using them correctly in team meetings, pipeline reviews, and manager conversations makes you sound professional and in control. This lesson teaches you the core language of sales administration so you can talk confidently about your pipeline, explain the status of your deals, and discuss your forecast — in English.",
  heroImage: '/images/crm-and-sales-admin-vocabulary-hero.png',

  vocabulary: [
    {
      word: 'LEAD',
      partOfSpeech: 'noun',
      definition: "A potential customer who has shown some interest but has not yet been checked to see if they are a real sales opportunity. Not every lead becomes a deal.",
      example: "The salesperson added 12 new leads to the CRM after a week of outreach and inbound enquiries.",
      imageSlug: '/images/crm-and-sales-admin-vocabulary-lead.png',
    },
    {
      word: 'PIPELINE',
      partOfSpeech: 'noun',
      definition: "All the deals a salesperson is currently working on, at different stages of the sales process. A healthy pipeline has deals at many stages — not all near the close.",
      example: "The salesperson has nine active deals in the pipeline at different stages.",
      imageSlug: '/images/crm-and-sales-admin-vocabulary-pipeline.png',
    },
    {
      word: 'DEAL',
      partOfSpeech: 'noun',
      definition: "A specific sales opportunity with a named customer. Each deal has a value, a stage, a close date, and an owner. To close a deal means to win it.",
      example: "The biggest deal in the pipeline is worth $28,000 and is currently in the negotiation stage.",
      imageSlug: '/images/crm-and-sales-admin-vocabulary-deal.png',
    },
    {
      word: 'NOTE',
      partOfSpeech: 'noun',
      definition: "A record of what was discussed with a customer, saved in the CRM after every call or meeting. Good notes mean any colleague can continue a deal without asking you for information.",
      example: "The salesperson logged a note after the call with a summary, the agreed terms, and the next step.",
      imageSlug: '/images/note.png',
    },
    {
      word: 'STATUS',
      partOfSpeech: 'noun',
      definition: "The current stage of a deal in the pipeline — for example 'proposal sent', 'negotiating', or 'closed won'. Always keep statuses up to date so your manager can forecast accurately.",
      example: "The status of the deal was updated to 'negotiation' after the revised proposal was sent.",
      imageSlug: '/images/status.png',
    },
    {
      word: 'QUALIFY',
      partOfSpeech: 'verb',
      definition: "To check if a lead is a real sales opportunity — do they have the budget, authority, need, and right timeline? Qualifying leads early saves time.",
      example: "The salesperson qualifies every lead within 48 hours to decide if they are worth spending time on.",
      imageSlug: '/images/crm-and-sales-admin-vocabulary-qualify.png',
    },
    {
      word: 'LOG',
      partOfSpeech: 'verb',
      definition: "To record a call, email, or meeting in the CRM. Logging keeps the CRM accurate and means the whole team has a shared picture of every customer relationship.",
      example: "The salesperson logs every call the same day with a summary, agreed next step, and follow-up date.",
      imageSlug: '/images/log.png',
    },
    {
      word: 'FORECAST',
      partOfSpeech: 'noun',
      definition: "An estimate of how much revenue the salesperson expects to earn this quarter, based on the deals in the pipeline and how likely they are to close.",
      example: "The salesperson's forecast for the quarter is around $80,000, based on four deals that are likely to close.",
      imageSlug: '/images/crm-and-sales-admin-vocabulary-forecast.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "WHAT'S THE STATUS OF...?",
      definition: "The standard question in a pipeline review for asking about a specific deal. The answer should include the stage, recent activity, and next step.",
      example: "The manager asked 'What's the status of the Brightfield deal?' and the salesperson explained it was at negotiation stage.",
      imageSlug: '/images/whats-the-status-of.png',
    },
    {
      phrase: 'I LOGGED A NOTE AFTER...',
      definition: "The standard phrase for reporting that you recorded an interaction in the CRM. Always say when you logged it to confirm the CRM is up to date.",
      example: "The salesperson said 'I logged a note after the call on Tuesday with a summary of everything we agreed.'",
      imageSlug: '/images/i-logged-a-note-after.png',
    },
    {
      phrase: 'I HAVE [X] DEALS IN MY PIPELINE AT [STAGE]',
      definition: "The standard way to report your pipeline in a review. Always include the number of deals and the stage. Say 'in my pipeline' — never 'on my pipeline'.",
      example: "The salesperson reported 'I have nine deals in my pipeline — three at proposal stage and two in negotiation.'",
      imageSlug: '/images/i-have-x-deals-in-my-pipeline-at-stage.png',
    },
    {
      phrase: "I'VE MARKED IT AS [STATUS/PROBABILITY]",
      definition: "A phrase for reporting how you categorised a deal in the CRM — using a status label or a probability percentage.",
      example: "The salesperson said 'I've marked the Brightfield deal as 90% probability with a close date of Friday.'",
      imageSlug: '/images/ive-marked-it-as-statusprobability.png',
    },
    {
      phrase: 'ANYONE SHOULD BE ABLE TO PICK UP THE DEAL WITHOUT CALLING ME',
      definition: "The standard for good CRM notes — if your notes are complete, any colleague can continue a deal without contacting you. Used by managers to set the expectation for note quality.",
      example: "The manager said good CRM notes mean anyone should be able to pick up the deal without calling you.",
      imageSlug: '/images/anyone-should-be-able-to-pick-up-the-deal-without-calling-me.png',
    },
    {
      phrase: 'WHAT DOES YOUR FORECAST LOOK LIKE FOR THIS QUARTER?',
      definition: "The standard question about expected revenue in a pipeline review. The answer should include the number of deals expected to close and their total value.",
      example: "The manager asked 'What does your forecast look like?' and the salesperson said four deals would close for around $80,000.",
      imageSlug: '/images/what-does-your-forecast-look-like-for-this-quarter.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: "Riley, let's go through your [[pipeline:the total collection of deals currently being worked on, at various stages of the sales process]] for this week's review. How many new [[lead:a potential customer who has shown interest but has not yet been qualified]]s did you add this week?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I [[log:to record an activity or interaction in the CRM]]ged 12 new leads — six from inbound enquiries and six from my own outreach. I've already qualified eight of them as genuine prospects.",
    },
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: 'Good. How did you [[qualify:to assess whether a lead meets criteria for budget, authority, need, and timeline]] them?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I used the BANT framework — budget, authority, need, and timeline. The four I didn't qualify didn't have clear budget authority. There's no point keeping them in the pipeline if they can't approve a purchase.",
    },
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: 'Exactly right — qualify early and keep the pipeline clean. How many active [[deal:a specific sales opportunity with a named customer, at a specific stage in the pipeline]]s do you have right now?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I have nine deals in my pipeline at different stages. Three are at proposal sent, two are in negotiation, and four are still at initial contact.',
    },
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: "What's the [[status:the current stage or condition of a deal — e.g., proposal sent, negotiating, closed won]] of the Brightfield deal — the one with Marcus?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That one is moving well. He's in the negotiation stage — I sent a revised proposal yesterday and he's getting internal finance approval this week. I logged a [[note:a record of what was discussed or agreed in a customer interaction, logged in the CRM]] after our call on Tuesday with all the details — agreed terms, next step, and follow-up date.",
    },
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: "Good. And that's exactly the standard I want — your notes should be complete enough that anyone should be able to pick up the deal without calling you. If I open the CRM and can't understand the deal from what's logged, the notes aren't good enough.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Understood. I log every call, every email, and every meeting the same day — including the agreed next step and the follow-up date. It's already a habit.",
    },
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: 'Perfect. What does your [[forecast:an estimate of expected revenue based on pipeline deals and their probability of closing]] look like for this quarter?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I have four deals I'm confident will close this quarter — total value around $80,000. The Brightfield deal is the biggest at $28,000. I've marked all four as 90% probability in the CRM.",
    },
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: 'And the other five deals in your pipeline?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Two of them are likely to close next quarter — I've marked them as 'likely' and set a Q4 close date. The other three are still early stage — I've set them to 'in progress' and booked follow-up calls for next month.",
    },
    {
      speaker: 'James',
      speakerColor: 'purple',
      speakerAvatar: '/images/james-icon.png',
      text: "That's a well-managed pipeline. One thing to flag — whenever commercial terms change during a negotiation, update the deal value in the CRM immediately. If Marcus negotiated the rate down, the deal value needs to reflect that the same day.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Already done — I updated the deal value as soon as we agreed the revised terms on Tuesday. The CRM always reflects the current position, not the original proposal.',
    }
  ],

  matchingExercise: [
    {
        "word": "lead",
        "definition": "a potential customer who has shown interest but has not yet been qualified as a genuine prospect"
    },
    {
        "word": "pipeline",
        "definition": "the total collection of deals being worked on, at various stages of the sales process"
    },
    {
        "word": "deal",
        "definition": "a specific sales opportunity with a named customer, at a specific stage in the sales process"
    },
    {
        "word": "note",
        "definition": "a record of what was discussed or agreed in a customer interaction, logged in the CRM"
    },
    {
        "word": "status",
        "definition": "the current stage or condition of a deal — e.g. proposal sent, negotiating, closed won"
    },
    {
        "word": "qualify",
        "definition": "to assess whether a lead has the budget, authority, need, and timeline to become a real prospect"
    },
    {
        "word": "log",
        "definition": "to record an activity, call, or meeting in the CRM"
    },
    {
        "word": "forecast",
        "definition": "an estimate of expected revenue based on pipeline deals and their probability of closing"
    }
],
  fillBlankExercise: [
    {
        "before": "I logged 12 new ",
        "after": "s this week — six from inbound enquiries and six from my own outreach.",
        "answer": "lead"
    },
    {
        "before": "I have nine active deals ",
        "after": " my pipeline at different stages right now.",
        "answer": "in"
    },
    {
        "before": "The Brightfield ",
        "after": " is at negotiation stage — I'm expecting a decision by Friday.",
        "answer": "deal"
    },
    {
        "before": "I logged a ",
        "after": " after the call on Tuesday with all the agreed terms and the next step.",
        "answer": "note"
    },
    {
        "before": "What's the ",
        "after": " of the Brightfield deal? Is it still at negotiation stage?",
        "answer": "status"
    },
    {
        "before": "My ",
        "after": " for this quarter is around $80,000 — four deals I'm confident will close.",
        "answer": "forecast"
    }
],
  multipleChoiceExercise: [
    {
        "question": "How many leads did Riley log this week, and how many did she qualify?",
        "options": [
            "12 leads, 10 qualified",
            "12 leads, 8 qualified",
            "8 leads, 6 qualified"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the current status of the Brightfield deal?",
        "options": [
            "Proposal sent — waiting for a response",
            "Initial contact — Riley has not yet spoken to Marcus",
            "Negotiation stage — Riley sent a revised proposal and Marcus is getting finance approval"
        ],
        "correctIndex": 2
    },
    {
        "question": "What standard does James set for CRM notes?",
        "options": [
            "Notes should be logged within 24 hours of a call",
            "Notes should be complete enough that anyone can pick up the deal without calling Riley",
            "Notes should include the agreed price and contract length"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does James remind Riley to update immediately when negotiating?",
        "options": [
            "The close date and contact name",
            "The deal value whenever commercial terms change",
            "The lead source and qualification notes"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Do you use a CRM at work — like Salesforce, HubSpot, or a similar tool? What do you use it for? What do you find most useful about it?",
        "How do you keep track of your conversations with customers or colleagues — notes in a system, emails, something else? What works well?",
        "Have you ever lost important information because it wasn't written down somewhere? What happened, and how did you handle it?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "I have nine active deals _____ my pipeline at different stages right now.",
            "options": [
                "on",
                "in",
                "at"
            ],
            "correctIndex": 1,
            "explanation": "'In the pipeline' is the fixed phrase — always 'in', never 'on' or 'at'. A pipeline is like a container — things are inside it. 'On my pipeline' is a very common error, possibly because we say 'on a list' or 'on a team'. But pipeline uses 'in': 'deals in the pipeline', 'what's in your pipeline', 'the biggest deal in my pipeline'. Treat it like a room: you are inside it."
        },
        {
            "sentence": "He's in the _____ stage — I sent a revised proposal and he's getting internal approval.",
            "options": [
                "negotiate",
                "negotiation",
                "negotiating"
            ],
            "correctIndex": 1,
            "explanation": "After 'the', you need a noun — 'the negotiation stage'. 'Negotiate' is a verb ('to negotiate') and cannot follow 'the'. 'Negotiating' is a present participle or gerund — it can be a noun sometimes ('negotiating is difficult') but not in 'the [stage name] stage'. Stage names in a sales pipeline are always nouns: 'the proposal stage', 'the qualification stage', 'the negotiation stage'."
        },
        {
            "sentence": "I _____ a note after every call — including the agreed next step and the follow-up date.",
            "options": [
                "log",
                "note",
                "record"
            ],
            "correctIndex": 0,
            "explanation": "'Log' is the specific CRM verb for recording interactions. 'Log a call', 'log a note', 'log a meeting' — this is the standard language used in sales teams and CRM systems. 'Note' used as a verb ('I note that...') means to pay attention to something — it doesn't mean to record something in a system. 'Record' is possible but less commonly used in CRM contexts than 'log'."
        },
        {
            "sentence": "My _____ for this quarter is around $80,000 — four deals I'm confident will close.",
            "options": [
                "forecast",
                "estimate",
                "prediction"
            ],
            "correctIndex": 0,
            "explanation": "'Forecast' is the specific business term for an estimate of expected revenue based on the pipeline. In a sales context, 'what's your forecast?' means 'how much revenue do you expect to close this period?' 'Estimate' is more general and less formal in a sales context. 'Prediction' sounds too informal — you would not say 'my prediction for the quarter' in a professional pipeline review."
        },
        {
            "sentence": "I'm feeling _____ about the Brightfield deal — I've marked it as 90% probability.",
            "options": [
                "confidence",
                "confident",
                "confidently"
            ],
            "correctIndex": 1,
            "explanation": "'Confident' is the adjective needed after 'feeling'. 'I'm feeling confident' — adjective after a linking verb. 'Confidence' is the noun: 'I have confidence in this deal', but not 'I'm feeling confidence'. 'Confidently' is an adverb used to describe how you do something: 'she spoke confidently'. After 'am/is/are/feel/seem/look/sound', always use an adjective, not a noun or adverb."
        },
        {
            "sentence": "The deal value in the CRM needs to _____ the agreed terms — update it every time something changes.",
            "options": [
                "reflect",
                "show",
                "tell"
            ],
            "correctIndex": 0,
            "explanation": "'Reflect' is the precise and professional verb for this context — 'the CRM should reflect the current position' means 'the CRM should accurately represent what has been agreed'. 'Show' is possible but less formal. 'Tell' is not used in this way with CRM data — you 'tell' a person something, not a system. In business English, 'reflect' is the standard verb for data or documents that represent a situation: 'the contract should reflect the agreed terms', 'the numbers reflect the current forecast'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the manager says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "What's the status of the Brightfield deal? Is it still moving?",
                "options": [
                    "Yes — it's going well. Marcus is very interested.",
                    "It's at negotiation stage. I sent a revised proposal yesterday — Marcus is getting internal finance approval this week. I've set a follow-up call for Friday and marked it as 90% probability in the CRM.",
                    "I spoke to Marcus on Tuesday. He seems positive but hasn't committed yet. I'll follow up soon."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the professional pipeline review answer — it gives the stage, the most recent action, the next step, the timeline, and the probability. That's everything a manager needs in one answer. Option A is too vague — 'very interested' is not a stage or an action. Option C gives some information but doesn't use CRM language, doesn't state the stage, and 'I'll follow up soon' is not specific enough — a manager needs a date."
            },
            {
                "customerLine": "Your notes on this account are incomplete. There's no record of last week's call.",
                "options": [
                    "I'm sorry — I'll add the note now. It was a short call so I didn't think it was necessary to log it.",
                    "That's my mistake — I should have logged it the same day. I'll add a full note right now including the summary, agreed terms, and next step. Going forward, I'll log every interaction the same day, no exceptions.",
                    "I did make some notes — I just haven't had time to enter them into the CRM yet."
                ],
                "correctIndex": 1,
                "explanation": "Option B takes full responsibility, commits to a specific action, and sets a clear standard going forward. That's the professional response. Option A apologies but then makes an excuse ('short call') — which suggests you might skip logging again in future. Option C also makes an excuse — 'haven't had time' is not acceptable for CRM hygiene. The standard is: log the same day, every time."
            },
            {
                "customerLine": "What does your forecast look like for this quarter? Are you on track for target?",
                "options": [
                    "I think I should be fine. I have several deals that are quite likely to close.",
                    "I have four deals I'm confident will close this quarter — total value around $80,000, which puts me on track for my $75,000 target. The biggest is Brightfield at $28,000. I've also got two more marked as 'likely' for Q4.",
                    "My pipeline is healthy — I have nine deals at various stages. I'm cautiously optimistic about the quarter."
                ],
                "correctIndex": 1,
                "explanation": "Option B is a complete, data-backed forecast answer — it gives the number of deals, total value, comparison to target, the largest deal, and the next quarter outlook. This is exactly what a manager needs for planning. Option A is too vague — 'quite likely' and 'several deals' give no useful information. Option C describes the pipeline but not the forecast — 'nine deals at various stages' doesn't tell the manager how much revenue to expect."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "James",
                "text": "How many new leads did you add to the CRM this week?"
            },
            {
                "speaker": "Riley",
                "text": "I logged 12 leads — six from inbound and six from my own outreach."
            },
            {
                "speaker": "James",
                "text": "Good. What's the status of the Brightfield deal?"
            },
            {
                "speaker": "Riley",
                "text": "He's in negotiate stage — I sent a revised proposal yesterday and he's getting internal approval."
            },
            {
                "speaker": "Riley",
                "text": "I have four deals on my pipeline that could close this quarter — total value around $80,000."
            },
            {
                "speaker": "Riley",
                "text": "I'm feeling confidence about at least three of them."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 3,
                "incorrectText": "in negotiate stage",
                "correction": "in the negotiation stage",
                "explanation": "Two corrections here: (1) 'negotiate' is a verb — the noun form is 'negotiation'. Stage names in a sales pipeline use the noun form: 'the qualification stage', 'the proposal stage', 'the negotiation stage'. (2) Stage names require the definite article 'the' — always 'in the negotiation stage', never 'in negotiate stage' or 'in negotiation stage' without 'the'."
            },
            {
                "lineIndex": 4,
                "incorrectText": "on my pipeline",
                "correction": "in my pipeline",
                "explanation": "Pipeline uses 'in', never 'on'. A pipeline is a container — deals are inside it. 'Deals in my pipeline', 'what's in your pipeline', 'the biggest deal in the pipeline'. This preposition is fixed in sales and CRM language. A common source of this error is saying 'on my list' or 'on my radar' — but pipeline always takes 'in'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "feeling confidence",
                "correction": "feeling confident",
                "explanation": "'Confidence' is a noun ('she has confidence', 'he shows confidence'). 'Confident' is the adjective needed after a linking verb like 'feel' or 'am'. 'I'm feeling confident' — adjective. 'I feel confidence' is not correct. The same pattern applies: 'I'm feeling comfortable' (not 'comfort'), 'I'm feeling optimistic' (not 'optimism'), 'I'm feeling excited' (not 'excitement')."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "Walk me through your pipeline. How many deals do you have, and where are they?",
                "salespersonStart": "I have nine active deals in my pipeline right now —",
                "suggestedCompletion": "three at proposal stage, two in negotiation, and four still at initial contact. The total pipeline value across all stages is around $180,000. The four I'm most confident about this quarter total around $80,000."
            },
            {
                "customerLine": "I can't find your notes from the call last Tuesday. What happened?",
                "salespersonStart": "I logged a note right after the call on Tuesday —",
                "suggestedCompletion": "it should be on the Brightfield account in Salesforce. I included a summary of everything we agreed, the revised commercial terms, and the next step. The follow-up call is booked for Friday. Let me pull it up for you now."
            },
            {
                "customerLine": "Marcus negotiated the price down during your last call. Is the deal value updated?",
                "salespersonStart": "Yes — I updated the deal value immediately after we agreed the new terms.",
                "suggestedCompletion": "I changed it from $35 per user to $28 per user the same afternoon — so the deal value now reflects $28,000 for the 12-month contract, not the original $35,000. I also added a note explaining the change and what we got in return — the 12-month commitment."
            }
        ]
    }
},
};
