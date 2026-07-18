import { Lesson } from '@/types/lesson';

export const schedulingASalesMeeting: Lesson = {
  slug: 'scheduling-a-sales-meeting',
  title: 'Scheduling a Sales Meeting',
  subtitle: 'How to discuss availability, propose times, and confirm a meeting professionally',
  level: 'B1-B2',
  description: 'Booking a meeting sounds simple — but doing it badly loses deals. Ask for a meeting too vaguely and the customer never replies. Propose a time too rigidly and you create friction. Confirm without recapping and the wrong people show up at the wrong time. This lesson teaches you the language of scheduling — how to propose times diplomatically, navigate availability, and confirm a meeting so clearly that nothing is left to chance.',
  heroImage: '/images/scheduling-a-sales-meeting-hero.png',

  vocabulary: [
    {
      word: 'AVAILABILITY',
      partOfSpeech: 'noun',
      definition: "The times when someone is free and able to meet or speak. In sales, you always check availability before proposing a specific time — it signals respect for the customer's schedule.",
      example: 'Always check availability before proposing a time — it shows you respect the other person\'s schedule and makes it easier to find something that works for both sides.',
      imageSlug: '/images/scheduling-a-sales-meeting-availability.png',
    },
    {
      word: 'SLOT',
      partOfSpeech: 'noun',
      definition: "A specific period of time reserved for a particular purpose — a meeting slot, a calendar slot, a time slot. Using 'slot' sounds more professional than saying 'time' or 'space'.",
      example: 'There is one slot left on Tuesday afternoon — let me know if that works for you and your team.',
      imageSlug: '/images/scheduling-a-sales-meeting-slot.png',
    },
    {
      word: 'TENTATIVE',
      partOfSpeech: 'adjective',
      definition: 'Not yet confirmed — provisionally agreed but still subject to change. A tentative meeting has been discussed but not officially confirmed by both sides.',
      example: "The meeting is tentative for now — I still need to check with a colleague before I can confirm the time.",
      imageSlug: '/images/scheduling-a-sales-meeting-tentative.png',
    },
    {
      word: 'RESCHEDULE',
      partOfSpeech: 'verb',
      definition: 'To arrange a meeting for a different time — when the original time no longer works. Handle rescheduling gracefully — it happens often in B2B sales and is not a sign that the customer is disinterested.',
      example: 'Something came up on Monday, so the viewing had to be rescheduled — Wednesday at the same time still works if that suits you.',
      imageSlug: '/images/scheduling-a-sales-meeting-reschedule.png',
    },
    {
      word: 'AGENDA',
      partOfSpeech: 'noun',
      definition: 'A list of topics or items to be covered in a meeting. Sharing the agenda in advance shows professionalism and helps the customer know what to prepare.',
      example: 'A clear agenda was shared before the demo — platform overview, integration options, and onboarding path, so everyone knew exactly what to prepare.',
      imageSlug: '/images/scheduling-a-sales-meeting-agenda.png',
    },
    {
      word: 'CONFIRM',
      partOfSpeech: 'verb',
      definition: 'To officially agree and finalise a meeting — making it certain rather than tentative. Always confirm a meeting by email so both sides have a written record of the time, date, and format.',
      example: 'Once both sides agreed on the time, the appointment was confirmed and a calendar invite followed within minutes.',
      imageSlug: '/images/scheduling-a-sales-meeting-confirm.png',
    },
    {
      word: 'DURATION',
      partOfSpeech: 'noun',
      definition: 'How long a meeting will last. Always state the duration when scheduling — it helps the customer plan their day and signals that you will respect their time.',
      example: 'Always state the duration upfront — thirty minutes for the demo and fifteen for questions, so the client can plan their day around it.',
      imageSlug: '/images/scheduling-a-sales-meeting-duration.png',
    },
    {
      word: 'CALENDAR INVITE',
      partOfSpeech: 'noun',
      definition: "A digital meeting request sent through a calendar application — such as Google Calendar or Outlook. Sending a calendar invite confirms the meeting officially and puts it in the customer's diary automatically.",
      example: 'A calendar invite was sent to everyone on the team — the meeting landed in their diaries automatically and nobody had to chase for confirmation.',
      imageSlug: '/images/scheduling-a-sales-meeting-calendar-invite.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT DOES YOUR AVAILABILITY LOOK LIKE...?',
      definition: "The professional way to ask when someone is free. More polished than 'When are you free?' — it implies you are flexible and puts the customer's schedule first.",
      example: 'What does your availability look like next week? I want to find a time that works around you — I have flexibility on my side.',
      imageSlug: '/images/scheduling-a-sales-meeting-what-does-your-availability-look-like.png',
    },
    {
      phrase: 'WOULD [DAY] AT [TIME] WORK FOR YOU?',
      definition: 'The standard phrase for proposing a specific meeting time. Always propose two or three options — never just one — so the customer can choose without feeling boxed in.',
      example: 'Would Thursday at 2pm work for you, or is Friday morning better? Always offer two or three options so the client can choose without feeling pressured.',
      imageSlug: '/images/scheduling-a-sales-meeting-would-day-at-time-work-for-you.png',
    },
    {
      phrase: 'LET ME CHECK MY CALENDAR',
      definition: 'A natural, professional phrase for pausing to verify your availability before confirming a time. It signals that you are organised and that your time is also valuable.',
      example: 'Let me check my calendar — yes, Thursday at 2pm works perfectly. I will hold that slot now and send a confirmation shortly.',
      imageSlug: '/images/scheduling-a-sales-meeting-let-me-check-my-calendar.png',
    },
    {
      phrase: "I'LL PUT THAT IN THE DIARY",
      definition: "To officially note a meeting in your schedule. 'Diary' is the British English term for a personal planner or calendar. This phrase confirms the meeting is now reserved on your side.",
      example: "I'll put that in the diary right now — you will receive a calendar invite within the next few minutes to confirm the time.",
      imageSlug: '/images/scheduling-a-sales-meeting-ill-put-that-in-the-diary.png',
    },
    {
      phrase: 'COULD WE PUSH THAT TO...?',
      definition: "A polite way to suggest moving a meeting to a later time or different day. 'Push' implies a slight delay rather than a full cancellation — it sounds flexible rather than unreliable.",
      example: 'A conflict has come up — could we push that to 3pm instead? Or if Thursday no longer works, I am also free on Friday afternoon.',
      imageSlug: '/images/scheduling-a-sales-meeting-could-we-push-that-to.png',
    },
    {
      phrase: "I'LL SEND A CALENDAR INVITE TO CONFIRM",
      definition: 'The standard closing phrase after agreeing a meeting time. It tells the customer exactly what to expect next and creates a formal record of the agreed time.',
      example: "I'll send a calendar invite to confirm — it will go to you and your colleague within the next few minutes, along with a brief agenda.",
      imageSlug: '/images/scheduling-a-sales-meeting-ill-send-a-calendar-invite-to-confirm.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Marcus, I'd love to set up a demo for you and your team. What does your [[availability:the times when someone is free and able to meet]] look like this week or early next week?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'This week is quite busy. I think next week would be better — though I need to check with my IT lead as well, since she needs to be there.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course — absolutely bring her along. I have a few [[slot:a specific period of time reserved for a purpose]]s available next week. Would Tuesday at 10am work for you both, or would Wednesday afternoon be better?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Let me check. Tuesday at 10am should work — let me just confirm with Sarah. Can I put it in as [[tentative:not yet confirmed — provisionally agreed but subject to change]] for now?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Absolutely — let's put Tuesday at 10am as tentative. Let me check my [[calendar:a system for organising and tracking scheduled events]] as well. Yes, that works perfectly on my side.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And what is the [[duration:how long a meeting will last]]? I want to make sure I block the right amount of time.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Plan for 45 minutes — about 30 for the demo and 15 for questions. I always make sure we finish within the time we agree.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Good. Will you send an [[agenda:a list of topics to be covered in a meeting]] beforehand so the team knows what to prepare?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — I'll send a brief agenda the day before. We'll cover the platform overview, the Salesforce integration, and the onboarding timeline. Is there anything specific you'd like me to add?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Could you include something on data security? That's still on Sarah's mind after our last conversation.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Absolutely — I'll add a section on our security certifications and data storage. That's an important one.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Perfect. And if something comes up on our side, is it easy to [[reschedule:to arrange a meeting for a different time]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Of course — just let me know as soon as possible and we'll find another time. These things happen. I won't take it personally.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Great. Let's [[confirm:to officially agree and finalise a meeting]] it as Tuesday at 10am then. Sarah has just messaged — she's available.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Wonderful. I'll put that in the diary and send a [[calendar invite:a digital meeting request sent through a calendar application]] to you and Sarah within the next few minutes. Looking forward to it.",
    }
  ],

  matchingExercise: [
    {
        "word": "availability",
        "definition": "the times when someone is free and able to meet or speak"
    },
    {
        "word": "slot",
        "definition": "a specific period of time reserved for a particular purpose"
    },
    {
        "word": "tentative",
        "definition": "not yet confirmed — provisionally agreed but subject to change"
    },
    {
        "word": "reschedule",
        "definition": "to arrange a meeting for a different time"
    },
    {
        "word": "agenda",
        "definition": "a list of topics to be covered in a meeting"
    },
    {
        "word": "confirm",
        "definition": "to officially agree and finalise a meeting"
    },
    {
        "word": "duration",
        "definition": "how long a meeting will last"
    },
    {
        "word": "calendar invite",
        "definition": "a digital meeting request that adds an event to the recipient's diary"
    }
],
  fillBlankExercise: [
    {
        "before": "What does your ",
        "after": " look like this week? I want to find something that works around your schedule.",
        "answer": "availability"
    },
    {
        "before": "I have a couple of ",
        "after": "s available — Tuesday at 10am or Wednesday afternoon. Which works better?",
        "answer": "slot"
    },
    {
        "before": "Let's put Tuesday at 10am in as ",
        "after": " for now — I'll confirm once I've checked with my colleague.",
        "answer": "tentative"
    },
    {
        "before": "Plan for 45 minutes — that is the expected ",
        "after": " of the demo, including time for questions.",
        "answer": "duration"
    },
    {
        "before": "I'll send a brief ",
        "after": " the day before so your team knows exactly what to prepare.",
        "answer": "agenda"
    },
    {
        "before": "I'll send a ",
        "after": " invite to confirm — it will go to you and your IT lead.",
        "answer": "calendar"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Marcus want to schedule the demo for next week rather than this week?",
        "options": [
            "He is not interested enough to meet this week",
            "This week is quite busy and his IT lead also needs to attend",
            "Riley has no availability this week"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Marcus ask Riley to include in the agenda?",
        "options": [
            "Commercial terms and pricing",
            "A section on data security and certifications",
            "Case studies from similar companies"
        ],
        "correctIndex": 1
    },
    {
        "question": "How long does Riley say the demo will last?",
        "options": [
            "30 minutes",
            "One hour",
            "45 minutes"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley say she will send to confirm the meeting?",
        "options": [
            "An email with the agenda attached",
            "A calendar invite to Marcus and Sarah",
            "A follow-up call the morning of the meeting"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "How do you usually schedule meetings at work — by email, phone, or through a calendar tool like Outlook or Google Calendar? What works best?",
        "Have you ever had a meeting fall through because it was not confirmed clearly enough — wrong time, wrong people, or wrong format? What happened?",
        "When a salesperson asks to book a meeting with you, what information do you want to know before you say yes?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "What does your availability _____ like next week?",
            "options": [
                "seem",
                "look",
                "appear"
            ],
            "correctIndex": 1,
            "explanation": "'What does your availability look like?' is the fixed phrase for asking when someone is free. 'Look like' is the standard idiom here — it means 'what is the situation with your schedule?' 'Seem like' and 'appear like' are not natural in this context — 'look like' is the only correct choice."
        },
        {
            "sentence": "I have a few _____ available — Tuesday at 10am or Wednesday at 3pm.",
            "options": [
                "times",
                "slots",
                "spaces"
            ],
            "correctIndex": 1,
            "explanation": "'Slots' is the professional word for specific time periods reserved in a calendar. It sounds more precise and business-like than 'times' or 'spaces'. In scheduling conversations, 'slot' signals that your calendar is organised and that each period has a purpose."
        },
        {
            "sentence": "Let's put Tuesday at 10am in as _____ for now — I'll confirm once I've spoken to my colleague.",
            "options": [
                "temporary",
                "tentative",
                "provisional"
            ],
            "correctIndex": 1,
            "explanation": "'Tentative' is the standard professional word for a meeting that has been discussed but not yet officially confirmed. 'Temporary' means lasting for a limited time — a different concept. 'Provisional' is also correct but less commonly used for meetings specifically. 'Tentative meeting' is the most natural and widely understood phrase."
        },
        {
            "sentence": "Something has come up — would it be possible to _____ the meeting to Friday?",
            "options": [
                "move",
                "push",
                "reschedule"
            ],
            "correctIndex": 2,
            "explanation": "All three are possible here, but 'reschedule' is the most professional and complete term — it means to arrange the meeting for a different time. 'Move' and 'push' are more informal and conversational. In a professional email or call, 'reschedule' is the expected word."
        },
        {
            "sentence": "I'll send a calendar _____ to confirm — it will go to everyone who needs to attend.",
            "options": [
                "request",
                "invite",
                "booking"
            ],
            "correctIndex": 1,
            "explanation": "'Calendar invite' is the fixed phrase for a digital meeting request sent through calendar software. 'Calendar request' is technically possible but much less commonly used. 'Calendar booking' is not standard in professional English. 'Invite' is the natural, universally understood term in this context."
        },
        {
            "sentence": "I'll send a brief _____ the day before so your team knows what to prepare.",
            "options": [
                "summary",
                "overview",
                "agenda"
            ],
            "correctIndex": 2,
            "explanation": "'Agenda' is the correct word for the list of topics to be covered in a meeting — it is the standard term in business English. A 'summary' is written after an event, not before it. An 'overview' can be sent in advance, but it describes content rather than a structured list of meeting topics. 'Agenda' is always the right word for pre-meeting planning."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "I'm interested in a demo, but I'm not sure when I'm free. Can I get back to you?",
                "options": [
                    "Of course — just email me when you know your schedule.",
                    "I understand. I have flexibility this week and next — would it help if I gave you two or three options so you can check against your calendar when you get a moment?",
                    "I need to book this soon — can you check your calendar now?"
                ],
                "correctIndex": 1,
                "explanation": "Option B keeps the momentum going while making it easy for the customer — offering specific options they can check later is far more effective than an open-ended 'get back to me'. Option A is too passive and risks losing the meeting entirely. Option C applies pressure that can feel rude and creates resistance."
            },
            {
                "customerLine": "Something has come up — I need to cancel tomorrow's meeting.",
                "options": [
                    "That's disappointing. I had set aside a lot of time for this.",
                    "No problem at all — these things happen. Would you like to reschedule? I have availability on Thursday at 2pm or Friday morning.",
                    "I understand. Just let me know when you're ready to rebook."
                ],
                "correctIndex": 1,
                "explanation": "Option B handles the cancellation gracefully and immediately proposes alternatives — it keeps the deal moving without making the customer feel guilty. Option A expresses disappointment, which creates awkwardness and can damage the relationship. Option C is too passive — it accepts the cancellation without proposing a next step, which makes it easy for the deal to stall."
            },
            {
                "customerLine": "What exactly will you cover in the demo? I want to know before I invite my team.",
                "options": [
                    "We'll cover the main features of the platform — it's about 45 minutes.",
                    "I'll send a full agenda before the call so your team knows exactly what to expect. We'll cover the platform overview, the Salesforce integration, the onboarding timeline, and data security. That way everyone can prepare the right questions.",
                    "It depends on what your team wants to focus on — we can decide on the day."
                ],
                "correctIndex": 1,
                "explanation": "Option B is specific, professional, and addresses the customer's concern directly — it lists the topics, mentions the agenda, and invites preparation. Option A is vague and gives the customer no real information to share with their team. Option C sounds unprepared and suggests the demo has no structure, which reduces confidence."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Hi Marcus. I'd love to book a demo with you and your team. What does your availability look like next week?"
            },
            {
                "speaker": "Marcus",
                "text": "Next week looks better. I'm available on Tuesday — would 10am work to you?"
            },
            {
                "speaker": "Riley",
                "text": "Tuesday at 10am works perfectly. Let me check my calendar — yes, I'm free. I'll put that in the diary."
            },
            {
                "speaker": "Marcus",
                "text": "Great. And what is the during of the demo?"
            },
            {
                "speaker": "Riley",
                "text": "Plan for 45 minutes. I'll also send a short agenda the day before so your team knows what to prepare."
            },
            {
                "speaker": "Marcus",
                "text": "Perfect. Can you send a calendar invite to confirm and to include Sarah from our IT team?"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "work to you",
                "correction": "work for you",
                "explanation": "The correct phrase is 'Would that work for you?' — 'for' is the preposition that links a time or arrangement to the person it suits. 'Work to you' is not correct in English. This applies broadly: 'Does that work for you?', 'Is that convenient for you?', 'Does that suit you?' — always 'for', never 'to'."
            },
            {
                "lineIndex": 3,
                "incorrectText": "during",
                "correction": "duration",
                "explanation": "'Duration' is the noun meaning how long something lasts — 'what is the duration of the demo?' 'During' is a preposition used to describe something that happens within a time period — 'during the meeting', 'during the call'. They are completely different words. When asking about length, always use 'duration'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "to include",
                "correction": "including",
                "explanation": "In this sentence, 'to include Sarah' is not parallel with 'to confirm' — the structure breaks down. The natural phrasing is: 'Can you send a calendar invite to confirm, including Sarah from our IT team?' Alternatively: 'Can you send an invite to both me and Sarah?' Using 'to include' after 'and' creates an awkward infinitive chain that does not sound natural in spoken or written English."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "I'd like to set up a demo, but I need to check with my manager first.",
                "salespersonStart": "Of course — absolutely involve your manager. What does your availability look like...",
                "suggestedCompletion": "this week or early next week? I can hold a provisional slot on Tuesday at 10am or Wednesday at 2pm — just let me know once you've spoken to her and we can confirm."
            },
            {
                "customerLine": "Tuesday at 2pm works for me, but something might come up. Is it easy to change?",
                "salespersonStart": "Completely — these things happen in B2B. If you need to reschedule, just let me know...",
                "suggestedCompletion": "as soon as possible and we'll find another time. I won't take it personally. Let's put Tuesday at 2pm as tentative for now and confirm it closer to the time."
            },
            {
                "customerLine": "Okay, let's confirm Thursday at 11am. Who else needs to be on the call from your side?",
                "salespersonStart": "Just me for the demo — I'll handle everything. I'll send a calendar invite to confirm the time, along with a brief agenda...",
                "suggestedCompletion": "so your team knows what to prepare. We'll cover the platform overview, the integration, and data security — about 45 minutes in total. Looking forward to it."
            }
        ]
    }
},
};
