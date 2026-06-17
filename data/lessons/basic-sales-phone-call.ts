import { Lesson } from '@/types/lesson';

export const basicSalesPhoneCall: Lesson = {
  slug: 'basic-sales-phone-call',
  title: 'Basic Sales Phone Call',
  subtitle: 'How to greet a customer, explain why you are calling, and end a call professionally',
  level: 'A1-A2',
  description: 'A professional phone call has a clear structure: a strong greeting, a simple reason for calling, and a polite goodbye. This lesson teaches you the exact phrases to use at each stage — so your calls always sound confident and organised, from the first word to the last.',
  heroImage: '/images/basic-sales-phone-call-hero.png',

  vocabulary: [
    {
      word: 'GREETING',
      partOfSpeech: 'noun',
      definition: 'The first words you say when you start a call. A professional greeting includes your name and your company.',
      example: 'Riley started the call with a clear greeting: Good morning, this is Riley from Practispeak Solutions. It told Marcus exactly who was calling before he said anything.',
      imageSlug: '/images/greeting.png',
    },
    {
      word: 'INTRODUCE',
      partOfSpeech: 'verb',
      definition: 'To say your name and company at the start of a call. You introduce yourself so the customer knows who is calling and why.',
      example: 'Riley said: Let me introduce myself — my name is Riley and I work for Practispeak Solutions. We spoke at the conference last month.',
      imageSlug: '/images/introduce.png',
    },
    {
      word: 'PURPOSE',
      partOfSpeech: 'noun',
      definition: 'The reason for your call. Always state your purpose clearly and early — customers do not like to guess why someone is calling.',
      example: 'Riley explained her purpose in one sentence: The reason I am calling is to follow up on the proposal I sent you last week. Short, clear, professional.',
      imageSlug: '/images/purpose.png',
    },
    {
      word: 'CONVENIENT',
      partOfSpeech: 'adjective',
      definition: 'A good time for someone — when they are not busy and can talk. Always check if the time is convenient before you start your call.',
      example: 'Before Riley started explaining, she asked: Is now convenient for you? Marcus said: Yes, I have a few minutes. Go ahead.',
      imageSlug: '/images/convenient.png',
    },
    {
      word: 'BRIEFLY',
      partOfSpeech: 'adverb',
      definition: "In a short amount of time — not too long. When you say you will be brief, you show you respect the customer's time.",
      example: 'Marcus was busy, so Riley said: I will be brief — this will only take two minutes. I just want to check if you have any questions about the proposal.',
      imageSlug: '/images/briefly.png',
    },
    {
      word: 'FOLLOW UP',
      partOfSpeech: 'phrasal verb',
      definition: 'To contact someone again after a first conversation or meeting. In sales, you follow up to keep the conversation moving forward.',
      example: 'Riley said: The reason I am calling is to follow up on our last meeting. I wanted to check if you had any questions about the plan.',
      imageSlug: '/images/follow-up.png',
    },
    {
      word: 'VOICEMAIL',
      partOfSpeech: 'noun',
      definition: 'A recorded message you leave when someone does not answer the phone. A good voicemail is short and includes a reason to call back.',
      example: 'Marcus did not answer, so Riley left a voicemail: Hi Marcus, this is Riley from Practispeak. Please call me back when you are free — I have some good news about your proposal.',
      imageSlug: '/images/voicemail.png',
    },
    {
      word: 'AVAILABLE',
      partOfSpeech: 'adjective',
      definition: 'Free to talk or meet at a particular time. When you call, you check if the customer is available before you start.',
      example: 'Riley asked: Are you available to talk for a few minutes? Marcus said: Yes, I am free now. Riley said: Perfect — I will be brief.',
      imageSlug: '/images/available.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'GOOD MORNING, THIS IS [NAME] FROM [COMPANY]',
      definition: 'The standard professional opening for a business call. Always say your name and company first — never assume the customer knows who you are.',
      example: 'Riley called Marcus and said: Good morning, this is Riley from Practispeak Solutions. That one sentence told Marcus who was calling and where they worked.',
      imageSlug: '/images/good-morning-this-is-name-from-company.png',
    },
    {
      phrase: 'AM I SPEAKING WITH [NAME]?',
      definition: "Use this to confirm you have the right person before explaining your reason for calling. 'Speaking with' is the professional standard — not 'talking to'.",
      example: 'Riley heard someone answer the phone. She said: Am I speaking with Marcus Oliveira? He said: Yes, speaking. Riley said: Great — good morning, Marcus.',
      imageSlug: '/images/am-i-speaking-with-name.png',
    },
    {
      phrase: 'THE REASON I AM CALLING IS',
      definition: 'A clear, direct way to state your purpose. Say this early in the call — customers want to know why you are calling within the first thirty seconds.',
      example: 'Riley got straight to the point: The reason I am calling is to follow up on the proposal I sent last week. I wanted to see if you had any questions.',
      imageSlug: '/images/the-reason-i-am-calling-is.png',
    },
    {
      phrase: 'IS NOW A GOOD TIME?',
      definition: 'Check if the customer can talk before you start. It shows you respect their time and gives them a chance to ask you to call back later.',
      example: 'Before Riley started her call, she asked: Is now a good time to talk for a few minutes? Marcus said: Yes, go ahead. Riley said: Great — I will be brief.',
      imageSlug: '/images/is-now-a-good-time.png',
    },
    {
      phrase: 'I WILL LET YOU GO',
      definition: 'A polite, natural way to end a call. It tells the customer the conversation is finishing without being rude or abrupt.',
      example: 'Riley had everything she needed. She said: I will let you go now — thank you for your time, Marcus. I will send the details by email today.',
      imageSlug: '/images/i-will-let-you-go.png',
    },
    {
      phrase: 'I WILL FOLLOW UP BY EMAIL',
      definition: 'Tell the customer what happens next after the call. It shows you are organised and gives them something to expect from you.',
      example: 'Marcus was not ready to decide. Riley said: No problem at all — I will follow up by email with all the details. Take your time and let me know if you have questions.',
      imageSlug: '/images/i-will-follow-up-by-email.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Hello?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good morning. This is Riley from Practispeak Solutions. Am I [[speaking:the professional word used on calls — 'Am I speaking with']] with Marcus Oliveira?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes, speaking. Hi Riley.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Hi Marcus! Is now a good time to talk for a few minutes?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes, I have a few minutes. Go ahead.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The [[purpose:the reason for your call]] of my call — the reason I am calling — is to [[follow up:to contact someone again after a first conversation]] on the proposal I sent you last week.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes, I saw it. It looks very interesting.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I am glad to hear that. Do you have any questions for me?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I do, but I need a little more time to read it carefully first.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course — take your time. I will follow up by email with a few more details. [[Briefly:in a short amount of time]], I just wanted to make sure you received it.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes I did. Thank you, Riley. That is helpful.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Perfect. I will let you go now. Have a great day, Marcus.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'You too, Riley. Speak soon.',
    }
  ],

  matchingExercise: [
    {
        "word": "greeting",
        "definition": "the first words you say when you start a call"
    },
    {
        "word": "introduce",
        "definition": "to say your name and company at the start of a call"
    },
    {
        "word": "purpose",
        "definition": "the reason for your call"
    },
    {
        "word": "convenient",
        "definition": "a good time when someone is free to talk"
    },
    {
        "word": "briefly",
        "definition": "in a short amount of time — not too long"
    },
    {
        "word": "follow up",
        "definition": "to contact someone again after a first conversation"
    },
    {
        "word": "voicemail",
        "definition": "a recorded message you leave when someone does not answer"
    },
    {
        "word": "available",
        "definition": "free to talk or meet at a particular time"
    }
],
  fillBlankExercise: [
    {
        "before": "Good morning. This is Riley from Practispeak. Let me ",
        "after": " myself — I work in the sales team.",
        "answer": "introduce"
    },
    {
        "before": "The ",
        "after": " of my call is to follow up on the proposal I sent last week.",
        "answer": "purpose"
    },
    {
        "before": "Is now ",
        "after": " for you? I only need a few minutes.",
        "answer": "convenient"
    },
    {
        "before": "I will be ",
        "after": " — this will only take two minutes.",
        "answer": "briefly"
    },
    {
        "before": "I will ",
        "after": " up by email with all the details after our call.",
        "answer": "follow"
    },
    {
        "before": "He did not answer, so I left a ",
        "after": " and asked him to call me back.",
        "answer": "voicemail"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley call Marcus?",
        "options": [
            "To sell him a new product",
            "To follow up on a proposal she sent last week",
            "To confirm his email address"
        ],
        "correctIndex": 1
    },
    {
        "question": "Does Marcus have time to talk?",
        "options": [
            "No, he asks Riley to call back",
            "Yes, he has a few minutes",
            "He does not answer the phone"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say she will do after the call?",
        "options": [
            "Call again tomorrow",
            "Send a new proposal",
            "Follow up by email with more details"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Riley end the call?",
        "options": [
            "She asks Marcus for a decision",
            "She says 'I will let you go. Have a great day.'",
            "She confirms the order"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Do you make or receive sales calls at work? How do you usually feel about them?",
        "What is the first thing you say when you answer a business call? What about when you make one?",
        "What makes a phone call feel professional? What can make it feel awkward or uncomfortable?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Good morning. This is Riley _____ Practispeak Solutions.",
            "options": [
                "at",
                "from",
                "of"
            ],
            "correctIndex": 1,
            "explanation": "'From' is the correct preposition here. We say 'This is [name] from [company]' — not 'at' or 'of'. This is the standard way to introduce yourself on a business call."
        },
        {
            "sentence": "Am I _____ with Marcus Oliveira?",
            "options": [
                "talking",
                "speaking",
                "calling"
            ],
            "correctIndex": 1,
            "explanation": "'Am I speaking with' is the professional standard for confirming you have the right person. 'Talking with' is more informal. 'Calling with' does not make sense."
        },
        {
            "sentence": "Is now _____ for you? I only need a few minutes.",
            "options": [
                "convenient",
                "possible",
                "fine"
            ],
            "correctIndex": 0,
            "explanation": "'Convenient' is the professional word for a time that works for someone. 'Possible' and 'fine' are less precise and sound less professional on a business call."
        },
        {
            "sentence": "The reason I am calling _____ to follow up on the proposal.",
            "options": [
                "was",
                "are",
                "is"
            ],
            "correctIndex": 2,
            "explanation": "'Is' is correct — 'The reason I am calling is to...' This is the standard phrase. 'Was' is past tense. 'Are' does not agree with 'the reason'."
        },
        {
            "sentence": "I will _____ up by email with more details.",
            "options": [
                "check",
                "follow",
                "send"
            ],
            "correctIndex": 1,
            "explanation": "'Follow up by email' is the fixed phrase — it means contacting someone again with more information. 'Check up' and 'send up' are not standard phrases."
        },
        {
            "sentence": "I will let you _____ now. Have a great day.",
            "options": [
                "leave",
                "go",
                "be"
            ],
            "correctIndex": 1,
            "explanation": "'I will let you go' is the natural, fixed phrase for ending a call politely. 'Let you leave' and 'let you be' are not used in this way on business calls."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "Hello?",
                "options": [
                    "Hi, how are you? I am calling because I want to talk to you.",
                    "Good morning. This is Riley from Practispeak Solutions. Am I speaking with Marcus?",
                    "Hello. Do you want to buy our product today?"
                ],
                "correctIndex": 1,
                "explanation": "Option B uses the correct professional structure: greeting, your name, your company, then confirm the right person. Option A is too casual and vague. Option C skips the greeting entirely and jumps straight to selling — never a good start."
            },
            {
                "customerLine": "I am not sure I have time right now.",
                "options": [
                    "I will let you go — I will follow up by email. Have a great day.",
                    "The reason I am calling is very important. Please listen.",
                    "I only need one minute. Can you just listen quickly?"
                ],
                "correctIndex": 0,
                "explanation": "Option A respects the customer's time and keeps the relationship positive — you can always call back or send an email. Option B ignores what the customer said. Option C is pushy and can damage trust permanently."
            },
            {
                "customerLine": "Yes, I received the proposal. I am still thinking about it.",
                "options": [
                    "Okay, I will let you go then.",
                    "I need your answer today — the offer ends soon.",
                    "Do you have any questions? I am happy to help."
                ],
                "correctIndex": 2,
                "explanation": "Option C moves the conversation forward by offering help — the best response when a customer is still thinking. Option A ends the call too quickly without adding any value. Option B creates pressure, which damages trust and often kills the deal."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Good morning. This is Alex calling from TechSales."
            },
            {
                "speaker": "Sam",
                "text": "Hi, who is this?"
            },
            {
                "speaker": "Alex",
                "text": "Am I talking with Sam Wilson?"
            },
            {
                "speaker": "Sam",
                "text": "Yes, speaking."
            },
            {
                "speaker": "Alex",
                "text": "The reason I am calling is following up on our meeting."
            },
            {
                "speaker": "Alex",
                "text": "Okay, I will let you leave now. Have a great day."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "talking",
                "correction": "speaking",
                "explanation": "The professional phrase is 'Am I speaking with [name]?' — not 'talking with'. 'Speaking' is the standard formal word used on business calls."
            },
            {
                "lineIndex": 4,
                "incorrectText": "following",
                "correction": "to follow",
                "explanation": "After 'the reason I am calling is', we use an infinitive: 'to follow up' — not 'following up'. This is a common grammar mistake that sounds unnatural to a native speaker."
            },
            {
                "lineIndex": 5,
                "incorrectText": "leave",
                "correction": "go",
                "explanation": "The fixed phrase is 'I will let you go' — not 'let you leave'. 'Let you go' is the natural, professional way to end a call. 'Let you leave' does not sound right on a phone call."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "Hello?",
                "salespersonStart": "Good morning. This is Riley from Practispeak Solutions. Am I speaking...",
                "suggestedCompletion": "with Marcus Oliveira? Is now a good time to talk for a few minutes?"
            },
            {
                "customerLine": "Yes, I have a few minutes.",
                "salespersonStart": "Great. The reason I am calling is...",
                "suggestedCompletion": "to follow up on the proposal I sent you last week. I wanted to check if you had any questions."
            },
            {
                "customerLine": "I need a bit more time to think about it.",
                "salespersonStart": "Of course — no problem at all. I will let you...",
                "suggestedCompletion": "go now. I will follow up by email with some more details. Have a great day."
            }
        ]
    }
},
};
