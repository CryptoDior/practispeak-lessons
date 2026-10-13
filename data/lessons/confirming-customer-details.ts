import { Lesson } from '@/types/lesson';

export const confirmingCustomerDetails: Lesson = {
  slug: 'confirming-customer-details',
  title: 'Confirming Customer Details',
  subtitle: "How to ask for, repeat, and confirm a customer's name, email, and phone number",
  level: 'A1-A2',
  description: 'Every customer relationship starts with getting the details right. This lesson teaches the simple, professional language you need to ask for a name, email address, and phone number — and how to read them back to make sure everything is correct before you save it.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/confirming-customer-details-hero.png',

  vocabulary: [
    {
      word: 'DETAILS',
      partOfSpeech: 'noun',
      definition: 'Details are facts about a person or an order, like a name or phone number.',
      example: 'Please check your details before you pay.',
      imageSlug: '/images/details.png',
    },
    {
      word: 'SPELL',
      partOfSpeech: 'verb',
      definition: 'To say or write the letters of a word one by one.',
      example: 'Can you spell your last name, please?',
      imageSlug: '/images/spell.png',
    },
    {
      word: 'CORRECT',
      partOfSpeech: 'adjective',
      definition: 'Right, with no mistakes.',
      example: 'Your phone number is correct.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/confirming-customer-details-correct.png',
    },
    {
      word: 'REPEAT',
      partOfSpeech: 'verb',
      definition: 'To say something again.',
      example: 'Can you repeat that, please? I did not hear you.',
      imageSlug: '/images/repeat.png',
    },
    {
      word: 'REGISTERED',
      partOfSpeech: 'adjective',
      definition: 'Saved in a system. A registered email is the one you use for your account.',
      example: 'Please use your registered email to log in.',
      imageSlug: '/images/registered.png',
    },
    {
      word: 'UPDATE',
      partOfSpeech: 'verb',
      definition: 'To change information so it is new and correct.',
      example: 'I will update your phone number now.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/confirming-customer-details-update.png',
    },
    {
      word: 'CONTACT',
      partOfSpeech: 'noun',
      definition: 'Information, like an email or phone number, that helps you talk to someone.',
      example: 'Please give me your contact details.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/confirming-customer-details-contact.png',
    },
    {
      word: 'DOUBLE-CHECK',
      partOfSpeech: 'verb',
      definition: 'To check something again to make sure it is right.',
      example: 'Let me double-check your email address.',
      imageSlug: '/images/double-check.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'COULD YOU SPELL THAT FOR ME?',
      definition: 'A polite question to ask someone to say a word letter by letter.',
      example: 'Could you spell that for me, please?',
      imageSlug: '/images/could-you-spell-that-for-me.png',
    },
    {
      phrase: 'LET ME READ THAT BACK TO YOU',
      definition: 'A polite way to say the details again so the person can check them.',
      example: 'Let me read that back to you. Your email is sam@mail.com.',
      imageSlug: '/images/let-me-read-that-back-to-you.png',
    },
    {
      phrase: 'IS THAT CORRECT?',
      definition: 'A simple question to check that the information is right.',
      example: 'Your number is 0123 456 789. Is that correct?',
      imageSlug: '/images/is-that-correct.png',
    },
    {
      phrase: 'WHAT IS THE BEST EMAIL TO REACH YOU?',
      definition: 'A polite question to ask for the email a person uses most.',
      example: 'What is the best email to reach you?',
      imageSlug: '/images/what-is-the-best-email-to-reach-you.png',
    },
    {
      phrase: 'COULD I TAKE YOUR PHONE NUMBER?',
      definition: 'A polite question to ask for someone\'s phone number.',
      example: 'Could I take your phone number, please?',
      imageSlug: '/images/could-i-take-your-phone-number.png',
    },
    {
      phrase: 'I WILL UPDATE THAT IN OUR SYSTEM',
      definition: 'You say this to tell someone you will save their new information.',
      example: 'Thank you. I will update that in our system.',
      imageSlug: '/images/i-will-update-that-in-our-system.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Marcus, before I set up your account, I need to confirm a few [[details:information about a person — like name, email, and phone number]]. Is that okay?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Of course. Go ahead.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Could I take your full name, please?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'It is Marcus Oliveira.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Could you [[spell:to say the letters of a word one by one]] that for me? The last name.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Sure — O-L-I-V-E-I-R-A.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Got it, thank you. And what is the best email to reach you?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'It is marcus.oliveira@techcorp.com.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Let me read that back to you — marcus.oliveira@techcorp.com. Is that [[correct:right and without any mistakes]]?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes, that is correct.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Perfect. And could I take your phone number?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes — it is plus 44 7911 123456.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Let me [[double-check:to check something a second time to make sure it is right]] — plus 44 7911 123456. Is that right?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes, perfect.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Great. I will [[update:to change information in a system to make it correct]] that in our system now. You are all set, Marcus.',
    }
  ],

  matchingExercise: [
    {
        "word": "details",
        "definition": "information about a person, like name, email, and phone number"
    },
    {
        "word": "spell",
        "definition": "to say the letters of a word one by one"
    },
    {
        "word": "correct",
        "definition": "right and without any mistakes"
    },
    {
        "word": "repeat",
        "definition": "to say something again to check it is right"
    },
    {
        "word": "registered",
        "definition": "officially recorded in a system"
    },
    {
        "word": "update",
        "definition": "to change information in a system to make it current"
    },
    {
        "word": "contact",
        "definition": "information used to reach someone, like email or phone"
    },
    {
        "word": "double-check",
        "definition": "to check something a second time to be sure"
    }
],
  fillBlankExercise: [
    {
        "before": "Before I set up your account, I need to confirm a few ",
        "after": " — name, email, and phone number.",
        "answer": "details"
    },
    {
        "before": "Could you ",
        "after": " your last name for me? I want to write every letter correctly.",
        "answer": "spell"
    },
    {
        "before": "Let me read that back to you. Is that ",
        "after": "?",
        "answer": "correct"
    },
    {
        "before": "Could you ",
        "after": " your phone number? I did not hear it clearly.",
        "answer": "repeat"
    },
    {
        "before": "Is this your ",
        "after": " email — the one linked to your account?",
        "answer": "registered"
    },
    {
        "before": "Thank you. I will ",
        "after": " that in our system right now.",
        "answer": "update"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is Marcus's last name?",
        "options": [
            "Martinez",
            "Oliveira",
            "Fernandez"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley read back to Marcus?",
        "options": [
            "His phone number",
            "His email address",
            "His company name"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Riley ask Marcus to spell his last name?",
        "options": [
            "Because she does not know him",
            "To write every letter correctly in the system",
            "Because it is a very long name"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley do at the end of the dialogue?",
        "options": [
            "She sends Marcus an invoice",
            "She calls Marcus's manager",
            "She updates the details in the system"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "When you sign up for a new service at work, what information do they usually ask for? Name, email, phone number?",
        "Have you ever had a problem because someone wrote your name or email incorrectly? What happened?",
        "Is it easy to spell your name in English? How do you usually help people spell it correctly?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Could you _____ your last name for me?",
            "options": [
                "say",
                "spell",
                "write"
            ],
            "correctIndex": 1,
            "explanation": "'Spell' means to give each letter one by one — exactly what you need to write a name correctly. 'Say' just means to speak. 'Write' is something the customer cannot do for you over the phone."
        },
        {
            "sentence": "Let me read that _____ to you — is everything correct?",
            "options": [
                "again",
                "back",
                "over"
            ],
            "correctIndex": 1,
            "explanation": "'Read that back' is the fixed phrase — it means repeating information you just received so the other person can confirm it. 'Again' and 'over' do not work in this phrase."
        },
        {
            "sentence": "Is this your _____ email — the one linked to your account?",
            "options": [
                "main",
                "work",
                "registered"
            ],
            "correctIndex": 2,
            "explanation": "'Registered' means officially recorded in the system. It is the specific word for the email connected to an account. 'Main' and 'work' are too informal for this context."
        },
        {
            "sentence": "I will _____ that in our system right now.",
            "options": [
                "change",
                "refresh",
                "update"
            ],
            "correctIndex": 2,
            "explanation": "'Update' is the correct professional word for adding or changing information in a system. 'Refresh' means reloading a page. 'Change' is too general."
        },
        {
            "sentence": "Could you _____ your phone number? I did not hear it clearly.",
            "options": [
                "repeat",
                "say",
                "give"
            ],
            "correctIndex": 0,
            "explanation": "'Repeat' means to say something again so you can check it. It is the most natural and professional word here. 'Say' and 'give' do not imply you want to confirm — just hear it once."
        },
        {
            "sentence": "Before I set up your account, I need to confirm a few _____.",
            "options": [
                "facts",
                "details",
                "things"
            ],
            "correctIndex": 1,
            "explanation": "'Details' is the correct word for specific information like name, email, and phone number. 'Facts' is for general information. 'Things' is too informal for a professional conversation."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "My last name is Johansson.",
                "options": [
                    "Could you spell that for me? I want to write every letter correctly.",
                    "Thank you, I have it.",
                    "Is that your registered name?"
                ],
                "correctIndex": 0,
                "explanation": "Option A is the right move — an unusual or unfamiliar name should always be spelled out to avoid mistakes. Option B assumes you heard it correctly without checking. Option C is irrelevant at this point."
            },
            {
                "customerLine": "My email is thomas.johansson@globalcorp.com.",
                "options": [
                    "Is that your registered email?",
                    "Let me read that back to you — thomas.johansson@globalcorp.com. Is that correct?",
                    "Could I take your phone number?"
                ],
                "correctIndex": 1,
                "explanation": "Option B is correct — always read the email back to confirm it before saving. An incorrect email means the customer will never receive anything. Option A skips the confirmation step. Option C moves on too quickly."
            },
            {
                "customerLine": "Yes, all the details are correct.",
                "options": [
                    "Could you spell that again?",
                    "Let me double-check the email.",
                    "I will update that in our system now."
                ],
                "correctIndex": 2,
                "explanation": "Option C is the right closing step — the customer has confirmed everything, so you save it and tell them. Option A goes backwards — you already confirmed. Option B repeats a step that is already done."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Hi. I need to confirm a few details before I set up your account."
            },
            {
                "speaker": "Kevin",
                "text": "Sure. My last name is Wilson."
            },
            {
                "speaker": "Alex",
                "text": "Could you say your last name for me? Letter by letter."
            },
            {
                "speaker": "Kevin",
                "text": "W-I-L-S-O-N. And my email is sam.wilson@company.com."
            },
            {
                "speaker": "Alex",
                "text": "Let me read that front to you — sam.wilson@company.com. Is that correct?"
            },
            {
                "speaker": "Alex",
                "text": "Great. I will refresh that in our system now."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "say",
                "correction": "spell",
                "explanation": "The correct phrase is 'Could you spell that for me?' — not 'say'. 'Spell' means to give each letter one by one. 'Say' just means to speak, which does not help you write the name correctly."
            },
            {
                "lineIndex": 4,
                "incorrectText": "front",
                "correction": "back",
                "explanation": "The phrase is 'read that back to you' — not 'front'. 'Reading back' means repeating the information you just received so the customer can check it is correct."
            },
            {
                "lineIndex": 5,
                "incorrectText": "refresh",
                "correction": "update",
                "explanation": "'Update' is the correct word for saving new information in a system. 'Refresh' means reloading a page — it has a completely different meaning and would confuse the customer."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "My last name is Kowalski.",
                "salespersonStart": "Could you spell...",
                "suggestedCompletion": "that for me? I want to write every letter correctly in our system."
            },
            {
                "customerLine": "My email is anna.kowalski@eurocorp.com.",
                "salespersonStart": "Let me read that back — anna.kowalski@eurocorp.com. Is...",
                "suggestedCompletion": "that correct? I want to make sure I have the right address before I save it."
            },
            {
                "customerLine": "Yes, everything looks right.",
                "salespersonStart": "Perfect. I will update...",
                "suggestedCompletion": "that in our system now. You are all set — you will receive a confirmation email shortly."
            }
        ]
    }
},
};
