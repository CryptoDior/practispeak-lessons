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
      definition: 'A potential customer who has shown some level of interest but has not yet been qualified as a genuine sales prospect. Leads become prospects once they have been assessed for budget, authority, need, and timeline. Not every lead becomes a deal.',
      example: "Jordan asked: How many new leads did you generate this week? Riley replied: I added 12 leads to the CRM — six from inbound enquiries and six from my own outreach. I've already qualified eight of them as genuine prospects with real budget and a clear need.",
      imageSlug: '/images/lead.png',
    },
    {
      word: 'PIPELINE',
      partOfSpeech: 'noun',
      definition: "The total collection of deals a salesperson or team is currently working on, at various stages of the sales process. A healthy pipeline has deals at multiple stages — not all about to close. You are always 'in' a pipeline, never 'on' one.",
      example: "Jordan reviewed Riley's pipeline for the quarter: You have nine active deals in your pipeline right now — three at proposal stage, two in negotiation, and four still at initial contact. That's a well-distributed pipeline. Make sure the early-stage ones don't stall.",
      imageSlug: '/images/pipeline.png',
    },
    {
      word: 'DEAL',
      partOfSpeech: 'noun',
      definition: "A specific sales opportunity — a potential contract or purchase currently being negotiated with a named customer. Each deal in the CRM has a value, a stage, a close date, and an owner. 'To close a deal' means to win it.",
      example: "Riley explained: The Brightfield deal is my biggest this quarter — $28,000 on a 12-month contract. Marcus is in the negotiation stage. I'm confident it will close by the end of the month, which is why I've flagged it as high probability in the CRM.",
      imageSlug: '/images/deal.png',
    },
    {
      word: 'NOTE',
      partOfSpeech: 'noun',
      definition: 'A record of what was discussed, agreed, or decided in a customer interaction — logged in the CRM after every call, meeting, or email. Good notes mean any colleague can pick up a deal without needing to call you. Log notes the same day, every time.',
      example: "Jordan said: Your notes on the Brightfield account are excellent — I can see exactly what was discussed on Tuesday, what was agreed on the commercial terms, and what the next step is. That's the standard I want from every account in the CRM.",
      imageSlug: '/images/note.png',
    },
    {
      word: 'STATUS',
      partOfSpeech: 'noun',
      definition: "The current stage or condition of a deal or lead in the pipeline. Common statuses: 'initial contact', 'qualified', 'proposal sent', 'negotiating', 'closed won', 'closed lost'. Always keep statuses accurate and up to date — they drive your manager's forecasting.",
      example: "Jordan asked: What's the current status of the Brightfield deal? Riley replied: It's at 'negotiation' — I sent a revised proposal yesterday and Marcus is waiting for internal finance approval. I've set the close date to Friday and marked it as 90% probability.",
      imageSlug: '/images/status.png',
    },
    {
      word: 'QUALIFY',
      partOfSpeech: 'verb',
      definition: 'To assess whether a lead is a genuine potential customer based on four criteria: Budget (can they afford it?), Authority (can they approve it?), Need (do they have the problem your product solves?), and Timeline (are they ready to buy soon?). Qualifying leads early saves time.',
      example: "Riley explained her process: I qualify every lead within 48 hours of adding them to the CRM. If they don't have budget authority or a clear need, I mark them as 'not qualified' and move on. The four I didn't qualify this week had no decision-making authority.",
      imageSlug: '/images/qualify.png',
    },
    {
      word: 'LOG',
      partOfSpeech: 'verb',
      definition: "To record an activity, conversation, or interaction in the CRM. 'Log a call', 'log a note', 'log a meeting' — logging keeps the CRM accurate and means the whole team has a shared picture of every customer relationship.",
      example: 'Jordan said: I want every call logged the same day it happens — not the next morning. Riley agreed: I already do that — I log every call, every email, and every meeting the same day. The note includes a summary, the agreed next step, and the follow-up date.',
      imageSlug: '/images/log.png',
    },
    {
      word: 'FORECAST',
      partOfSpeech: 'noun',
      definition: 'An estimate of expected revenue based on the deals currently in the pipeline and their probability of closing. Forecasting is a core part of pipeline reviews — managers use it to plan team targets, resources, and business decisions.',
      example: "Jordan asked: What's your forecast for this quarter? Riley replied: I have four deals I'm confident will close — total value around $80,000. I've also marked two more as 'likely' for next quarter. The overall pipeline is in good shape for hitting target.",
      imageSlug: '/images/forecast.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "WHAT'S THE STATUS OF...?",
      definition: 'The standard question in a pipeline review for asking about a specific deal or lead. Always follow with the deal name or customer name. The answer should give stage, recent activity, and next step.',
      example: "Jordan asked: What's the status of the Brightfield deal? Riley replied: It's at negotiation stage — I sent a revised proposal yesterday, Marcus is getting internal approval, and I've set a follow-up call for Friday. Close probability is 90%.",
      imageSlug: '/images/whats-the-status-of.png',
    },
    {
      phrase: 'I LOGGED A NOTE AFTER...',
      definition: "The standard phrase for reporting that you have recorded an interaction in the CRM. Always say when you logged it ('after the call', 'after the meeting') — this confirms the CRM is up to date.",
      example: 'Riley said: I logged a note after the call on Tuesday — it includes a summary of everything we agreed, the revised commercial terms, and the agreed next step. You should be able to see it in Salesforce right now.',
      imageSlug: '/images/i-logged-a-note-after.png',
    },
    {
      phrase: 'I HAVE [X] DEALS IN MY PIPELINE AT [STAGE]',
      definition: "The standard structure for reporting pipeline composition in a review. Always include the number of deals, the stage name, and ideally the total value. 'In my pipeline' — never 'on my pipeline'.",
      example: 'Riley reported: I have nine deals in my pipeline at the moment — three at proposal stage, two in negotiation, and four still at initial contact. The total pipeline value is around $180,000 across all stages.',
      imageSlug: '/images/i-have-x-deals-in-my-pipeline-at-stage.png',
    },
    {
      phrase: "I'VE MARKED IT AS [STATUS/PROBABILITY]",
      definition: "The phrase for reporting how you have categorised a deal in the CRM. 'Marked as' is used for both status labels ('closed won', 'likely') and probability percentages ('90%', '50%').",
      example: "Riley explained: The Brightfield deal is the one I'm most confident about — I've marked it as 90% probability in the CRM. The two that might slip to next quarter I've marked as 'likely' and given them a Q4 close date.",
      imageSlug: '/images/ive-marked-it-as-statusprobability.png',
    },
    {
      phrase: 'ANYONE SHOULD BE ABLE TO PICK UP THE DEAL WITHOUT CALLING ME',
      definition: 'The goal of good CRM notes — if your notes are complete, any colleague can continue a deal in your absence. This phrase is often used by managers to set the standard for CRM hygiene.',
      example: "Jordan said: The standard I want from every account in this team is simple — your notes should be so complete that anyone should be able to pick up the deal without calling you. If I can't understand the deal from the CRM alone, the notes aren't good enough.",
      imageSlug: '/images/anyone-should-be-able-to-pick-up-the-deal-without-calling-me.png',
    },
    {
      phrase: 'WHAT DOES YOUR FORECAST LOOK LIKE FOR THIS QUARTER?',
      definition: "The standard pipeline review question about expected revenue. The answer should include the number of deals expected to close, their total value, and the salesperson's confidence level.",
      example: "Jordan asked: What does your forecast look like for this quarter? Riley said: Four deals I'm confident will close — around $80,000 total. The biggest is Brightfield at $28,000. I'm on track to hit my quarterly target if those four come through.",
      imageSlug: '/images/what-does-your-forecast-look-like-for-this-quarter.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "Riley, let's go through your [[pipeline:the total collection of deals currently being worked on, at various stages of the sales process]] for this week's review. How many new [[lead:a potential customer who has shown interest but has not yet been qualified]]s did you add this week?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I [[log:to record an activity or interaction in the CRM]]ged 12 new leads — six from inbound enquiries and six from my own outreach. I've already qualified eight of them as genuine prospects.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: 'Good. How did you [[qualify:to assess whether a lead meets criteria for budget, authority, need, and timeline]] them?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I used the BANT framework — budget, authority, need, and timeline. The four I didn't qualify didn't have clear budget authority. There's no point keeping them in the pipeline if they can't approve a purchase.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: 'Exactly right — qualify early and keep the pipeline clean. How many active [[deal:a specific sales opportunity with a named customer, at a specific stage in the pipeline]]s do you have right now?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I have nine deals in my pipeline at different stages. Three are at proposal sent, two are in negotiation, and four are still at initial contact.',
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "What's the [[status:the current stage or condition of a deal — e.g., proposal sent, negotiating, closed won]] of the Brightfield deal — the one with Marcus?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That one is moving well. He's in the negotiation stage — I sent a revised proposal yesterday and he's getting internal finance approval this week. I logged a [[note:a record of what was discussed or agreed in a customer interaction, logged in the CRM]] after our call on Tuesday with all the details — agreed terms, next step, and follow-up date.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "Good. And that's exactly the standard I want — your notes should be complete enough that anyone should be able to pick up the deal without calling you. If I open the CRM and can't understand the deal from what's logged, the notes aren't good enough.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Understood. I log every call, every email, and every meeting the same day — including the agreed next step and the follow-up date. It's already a habit.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: 'Perfect. What does your [[forecast:an estimate of expected revenue based on pipeline deals and their probability of closing]] look like for this quarter?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I have four deals I'm confident will close this quarter — total value around $80,000. The Brightfield deal is the biggest at $28,000. I've marked all four as 90% probability in the CRM.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: 'And the other five deals in your pipeline?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Two of them are likely to close next quarter — I've marked them as 'likely' and set a Q4 close date. The other three are still early stage — I've set them to 'in progress' and booked follow-up calls for next month.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
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
        "question": "What standard does Jordan set for CRM notes?",
        "options": [
            "Notes should be logged within 24 hours of a call",
            "Notes should be complete enough that anyone can pick up the deal without calling Riley",
            "Notes should include the agreed price and contract length"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Jordan remind Riley to update immediately when negotiating?",
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
                "speaker": "Jordan",
                "text": "How many new leads did you add to the CRM this week?"
            },
            {
                "speaker": "Riley",
                "text": "I logged 12 leads — six from inbound and six from my own outreach."
            },
            {
                "speaker": "Jordan",
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
