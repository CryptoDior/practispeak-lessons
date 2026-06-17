import { Lesson } from '@/types/lesson';

export const talkingAboutDelivery: Lesson = {
  slug: 'talking-about-delivery',
  title: 'Talking About Delivery',
  subtitle: 'How to tell a customer when their order will arrive and handle delivery questions',
  level: 'A1-A2',
  description: 'Every customer wants to know the same thing after they order: when will it arrive? This lesson teaches you the simple, confident language you need to give delivery dates, send tracking details, handle delays, and keep the customer informed at every step.',
  heroImage: '/images/talking-about-delivery-hero.png',

  vocabulary: [
    {
      word: 'DELIVERY',
      partOfSpeech: 'noun',
      definition: 'The process of sending a product to the customer after they order. In B2B sales, you always confirm the delivery date and address before dispatching.',
      example: 'Marcus called Riley and asked: When will my delivery arrive? Riley said: Your delivery is tomorrow — between 9 and 12 in the morning.',
      imageSlug: '/images/delivery.png',
    },
    {
      word: 'DISPATCH',
      partOfSpeech: 'verb',
      definition: 'To send something out so it can reach the customer. When an order is dispatched, it has left the warehouse and is on its way.',
      example: 'Riley called Marcus with good news: Your order has been dispatched. It left our warehouse this morning and is on its way to you now.',
      imageSlug: '/images/dispatch.png',
    },
    {
      word: 'TRACKING',
      partOfSpeech: 'noun',
      definition: 'A number or link that lets a customer follow their order and see exactly where it is. Always send the tracking number by email after dispatch.',
      example: 'Marcus asked: How do I know where my order is? Riley said: I will send you a tracking number by email — you can use it to follow your order online at any time.',
      imageSlug: '/images/tracking.png',
    },
    {
      word: 'ESTIMATE',
      partOfSpeech: 'noun',
      definition: "An approximate time or date — not exact, but close. A delivery estimate gives the customer a window, like 'between 9 and 12'.",
      example: 'Marcus asked what time his order would arrive. Riley said: The estimate is between 9 and 12 in the morning — I cannot give an exact time, but it will not be later than midday.',
      imageSlug: '/images/estimate.png',
    },
    {
      word: 'DELAY',
      partOfSpeech: 'noun',
      definition: 'When something arrives later than expected. In sales, always tell the customer about a delay before they have to ask — never let them find out on their own.',
      example: 'There was a problem with the courier. Riley called Marcus: I am sorry — there is a short delay on your order. It will arrive tomorrow instead of today. I apologise for the inconvenience.',
      imageSlug: '/images/delay.png',
    },
    {
      word: 'ADDRESS',
      partOfSpeech: 'noun',
      definition: 'The location where a delivery is sent. Always confirm the delivery address before dispatching — a wrong address can cause serious problems.',
      example: 'Before Riley sent the order, she said: Let me confirm your delivery address — I want to make sure everything goes to the right place.',
      imageSlug: '/images/address.png',
    },
    {
      word: 'ARRIVE',
      partOfSpeech: 'verb',
      definition: "To reach a place or destination. When your delivery arrives, it is at your door. We say 'arrive at' — never 'arrive to'.",
      example: 'Marcus asked: When will my order arrive? Riley said: It will arrive at your office tomorrow between 9 and 12. You will need someone there to receive it.',
      imageSlug: '/images/arrive.png',
    },
    {
      word: 'CONFIRM',
      partOfSpeech: 'verb',
      definition: 'To check and agree that something is correct. Before dispatching, always confirm the address, date, and order details with the customer.',
      example: 'Riley said: Let me confirm your delivery details — 45 King Street, London, delivery tomorrow. Is everything correct? Marcus said: Yes, that is right.',
      imageSlug: '/images/confirm.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'DELIVERY IS [TOMORROW / ON FRIDAY / NEXT WEEK]',
      definition: "The simplest and clearest way to give a delivery date. Say 'delivery is' followed by the day — short, direct, and easy to understand.",
      example: 'Marcus asked when his order would arrive. Riley said: Delivery is tomorrow — between 9 and 12. You will receive a tracking number by email this afternoon.',
      imageSlug: '/images/delivery-is-tomorrow--on-friday--next-week.png',
    },
    {
      phrase: 'YOUR ORDER HAS BEEN DISPATCHED',
      definition: "Use this to tell a customer their order is on its way. 'Has been dispatched' is present perfect passive — it means the action is finished and the result is now happening.",
      example: 'Riley called Marcus with an update: Your order has been dispatched. It left our warehouse this morning and will arrive at your office tomorrow.',
      imageSlug: '/images/your-order-has-been-dispatched.png',
    },
    {
      phrase: 'I WILL SEND YOU A TRACKING NUMBER',
      definition: 'Tell the customer this after confirming dispatch. A tracking number gives the customer control — they can check their order without calling you.',
      example: 'Marcus asked how he could follow his order. Riley said: I will send you a tracking number by email this afternoon. You can use it to check the status at any time.',
      imageSlug: '/images/i-will-send-you-a-tracking-number.png',
    },
    {
      phrase: 'THE ESTIMATE IS BETWEEN [TIME] AND [TIME]',
      definition: "Use this to give a delivery window when you cannot give an exact time. 'Estimate' tells the customer it is approximate, not a guarantee.",
      example: 'Marcus asked what time the delivery would come. Riley said: The estimate is between 9 and 12 in the morning. I cannot give an exact time, but it will not be later than midday.',
      imageSlug: '/images/the-estimate-is-between-time-and-time.png',
    },
    {
      phrase: 'THERE MAY BE A SHORT DELAY',
      definition: "Use this to warn a customer about a possible problem before it happens. 'May be' is softer than 'will be' — it says there is a risk, not a certainty.",
      example: 'Riley called Marcus before the delivery: I want to let you know — there may be a short delay today because of traffic. Your order should still arrive by 2 PM at the latest.',
      imageSlug: '/images/there-may-be-a-short-delay.png',
    },
    {
      phrase: 'LET ME CONFIRM YOUR DELIVERY ADDRESS',
      definition: 'Always say this before dispatching. It protects you and the customer from expensive mistakes — a wrong address means a failed delivery.',
      example: 'Before processing the order, Riley said: Let me confirm your delivery address. Marcus read it out: 45 King Street, London. Riley said: Perfect — that matches what we have in the system.',
      imageSlug: '/images/let-me-confirm-your-delivery-address.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Hi Riley. I placed my order yesterday. When will it [[arrive:to reach a place or destination]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good news, Marcus — your order has been [[dispatch:to send something out so it can reach the customer]]ed. Delivery is tomorrow.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Tomorrow? That is very fast.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we dispatch all orders within 24 hours. Let me [[confirm:to check and agree that something is correct]] your delivery address first.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'It is 45 King Street, London, EC2A 1AA.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Perfect — 45 King Street, London. That matches what we have in our system.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Will I receive a tracking number?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — I will send you a [[tracking:a number or link that lets a customer follow their order]] number by email this afternoon.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And what time will it arrive?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The [[estimate:an approximate time or date — not exact, but close]] is between 9 and 12 in the morning. I cannot give an exact time, but it will not be later than midday.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Is there any chance of a delay?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We do not expect any [[delay:when something arrives later than expected]]s. But if there is one, I will contact you immediately.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is great. Thank you, Riley.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. I will send the tracking details now. Have a great day, Marcus.',
    }
  ],

  matchingExercise: [
    {
        "word": "delivery",
        "definition": "the process of sending a product to the customer"
    },
    {
        "word": "dispatch",
        "definition": "to send something out so it can reach the customer"
    },
    {
        "word": "tracking",
        "definition": "a number or link that lets you follow your order"
    },
    {
        "word": "estimate",
        "definition": "an approximate time or date — not exact, but close"
    },
    {
        "word": "delay",
        "definition": "when something arrives later than expected"
    },
    {
        "word": "address",
        "definition": "the location where a delivery is sent"
    },
    {
        "word": "arrive",
        "definition": "to reach a place or destination"
    },
    {
        "word": "confirm",
        "definition": "to check and agree that something is correct"
    }
],
  fillBlankExercise: [
    {
        "before": "Your order has been ",
        "after": ". It is on its way to you now.",
        "answer": "dispatched"
    },
    {
        "before": "Delivery is ",
        "after": " — you will receive it between 9 and 12.",
        "answer": "tomorrow"
    },
    {
        "before": "I will send you a ",
        "after": " number so you can follow your order online.",
        "answer": "tracking"
    },
    {
        "before": "The ",
        "after": " is between 9 and 12. It is not an exact time.",
        "answer": "estimate"
    },
    {
        "before": "We do not expect any ",
        "after": "s — your order should arrive on time.",
        "answer": "delay"
    },
    {
        "before": "Let me confirm your delivery ",
        "after": " before I process the order.",
        "answer": "address"
    }
],
  multipleChoiceExercise: [
    {
        "question": "When will Marcus's order arrive?",
        "options": [
            "Today",
            "Tomorrow",
            "Next week"
        ],
        "correctIndex": 1
    },
    {
        "question": "What will Riley send to Marcus by email?",
        "options": [
            "An invoice",
            "A tracking number",
            "A new proposal"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the estimated delivery time?",
        "options": [
            "Between 8 and 10",
            "Between 9 and 12",
            "In the afternoon"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say about delays?",
        "options": [
            "There will be a short delay",
            "She is not sure",
            "She does not expect any delays"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "When you order something for your team or office, who usually handles the delivery? Do you track orders?",
        "Have you ever had a delivery that was late or went to the wrong address? What happened?",
        "In your work, do you tell customers when their order will arrive? How do you say it?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Delivery is _____.",
            "options": [
                "tomorrow",
                "good",
                "quick"
            ],
            "correctIndex": 0,
            "explanation": "'Delivery is tomorrow' is the core phrase from this lesson — a simple, direct way to give a delivery date. 'Good' and 'quick' are adjectives that describe delivery quality, not when it arrives."
        },
        {
            "sentence": "Your order has _____ dispatched.",
            "options": [
                "have",
                "is",
                "been"
            ],
            "correctIndex": 2,
            "explanation": "'Has been dispatched' is present perfect passive — the correct structure when telling a customer their order was sent. 'Is dispatched' and 'have dispatched' are grammatically incorrect here."
        },
        {
            "sentence": "I will send you a _____ number by email.",
            "options": [
                "order",
                "tracking",
                "phone"
            ],
            "correctIndex": 1,
            "explanation": "'Tracking number' is the fixed phrase for the code that lets a customer follow their order. 'Order number' is a different number — it identifies the order but does not let you track location."
        },
        {
            "sentence": "The _____ is between 9 and 12 in the morning.",
            "options": [
                "time",
                "delay",
                "estimate"
            ],
            "correctIndex": 2,
            "explanation": "'Estimate' is the correct word for an approximate delivery window. It tells the customer this is not an exact time. 'Time' is too general. 'Delay' means something is late — the opposite of what we want to say."
        },
        {
            "sentence": "We do not expect any _____s.",
            "options": [
                "problem",
                "delay",
                "time"
            ],
            "correctIndex": 1,
            "explanation": "'We do not expect any delays' is the professional phrase for reassuring a customer that their delivery will be on time. 'Problems' is too vague. 'Times' does not fit this sentence."
        },
        {
            "sentence": "Your order will arrive _____ your office tomorrow.",
            "options": [
                "to",
                "in",
                "at"
            ],
            "correctIndex": 2,
            "explanation": "'Arrive at' is always correct for specific locations — 'arrive at the office', 'arrive at the address', 'arrive at the warehouse'. Never say 'arrive to'. 'Arrive in' is used for cities or countries, not buildings."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "When will my order arrive?",
                "options": [
                    "It should arrive soon.",
                    "Delivery is tomorrow — between 9 and 12 in the morning. I will send you a tracking number by email today.",
                    "I need to check. Can you call back later?"
                ],
                "correctIndex": 1,
                "explanation": "Option B gives a clear delivery date, a time window, and a next step — everything the customer needs in one sentence. Option A is vague and unhelpful. Option C makes the customer wait when you should have the answer ready."
            },
            {
                "customerLine": "Will there be any delays?",
                "options": [
                    "I am not sure — it depends on the courier.",
                    "Maybe — deliveries can always be a little unpredictable.",
                    "We do not expect any delays. But if there is one, I will contact you immediately."
                ],
                "correctIndex": 2,
                "explanation": "Option C reassures the customer and makes a clear promise — this builds trust. Option A is too vague and increases anxiety. Option B sounds unprofessional and suggests you do not have control of the process."
            },
            {
                "customerLine": "I did not receive a tracking number.",
                "options": [
                    "I already sent it — please check your spam folder.",
                    "Sorry about that. I will send it to you right now.",
                    "The tracking number is not always available immediately."
                ],
                "correctIndex": 1,
                "explanation": "Option B takes responsibility and fixes the problem immediately — that is professional customer service. Option A is defensive and puts the problem back on the customer. Option C gives an excuse instead of a solution."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Hi Sam. Your order has been dispatched."
            },
            {
                "speaker": "Sam",
                "text": "Great. When will it arrive to my office?"
            },
            {
                "speaker": "Alex",
                "text": "Delivery is tomorrow. The estimate is between 9 and 12."
            },
            {
                "speaker": "Sam",
                "text": "Will there be some delays?"
            },
            {
                "speaker": "Alex",
                "text": "We do not expect any delays. I will contact you if there is a problem."
            },
            {
                "speaker": "Sam",
                "text": "Can you send me my track number?"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "arrive to",
                "correction": "arrive at",
                "explanation": "'Arrive' is followed by 'at' for specific places — 'arrive at the office', 'arrive at the address', 'arrive at the warehouse'. Never say 'arrive to'. Use 'arrive in' only for cities or countries."
            },
            {
                "lineIndex": 3,
                "incorrectText": "some delays",
                "correction": "any delays",
                "explanation": "In questions, we use 'any' — not 'some'. We say 'Will there be any delays?' or 'Are there any problems?' 'Some' is for positive statements: 'There are some delays today'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "track number",
                "correction": "tracking number",
                "explanation": "The correct noun phrase is 'tracking number' — not 'track number'. 'Tracking' is a noun modifier here, just like 'delivery address' or 'order number'. The '-ing' form is part of the fixed phrase."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "When will my order arrive?",
                "salespersonStart": "Your order has been dispatched — delivery is...",
                "suggestedCompletion": "tomorrow, between 9 and 12 in the morning. I will send you a tracking number by email this afternoon."
            },
            {
                "customerLine": "I am worried there will be a delay.",
                "salespersonStart": "I understand. We do not expect any delays, but if there is one...",
                "suggestedCompletion": "I will contact you immediately and give you an updated delivery time. Your order is our priority."
            },
            {
                "customerLine": "Can I change my delivery address?",
                "salespersonStart": "Of course — let me confirm your new address...",
                "suggestedCompletion": "and update it in our system right now. As long as your order has not been dispatched yet, we can change it."
            }
        ]
    }
},
};
