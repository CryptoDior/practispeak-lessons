import { Lesson } from '@/types/lesson';

export const takingASimpleOrder: Lesson = {
  slug: 'taking-a-simple-order',
  title: 'Taking a Simple Order',
  subtitle: 'How to ask for quantity, confirm details, and process an order in clear English',
  level: 'A1-A2',
  description: 'Taking an order is one of the most common moments in sales. This lesson teaches you the simple, direct language you need: how to ask how many a customer wants, how to check availability, confirm the total, and close the order professionally.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/taking-a-simple-order-hero.png',

  vocabulary: [
    {
      word: 'ORDER',
      partOfSpeech: 'noun',
      definition: 'A request to buy a product or service.',
      example: 'I want to place an order for fifteen units.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-order.png',
    },
    {
      word: 'QUANTITY',
      partOfSpeech: 'noun',
      definition: 'The number or amount of something.',
      example: 'What quantity do you need?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-quantity.png',
    },
    {
      word: 'CONFIRM',
      partOfSpeech: 'verb',
      definition: 'To say yes and make something certain.',
      example: 'Can you confirm my order, please?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-confirm.png',
    },
    {
      word: 'UNIT',
      partOfSpeech: 'noun',
      definition: 'One single item in an order.',
      example: 'The price is ten dollars per unit.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-unit.png',
    },
    {
      word: 'AVAILABLE',
      partOfSpeech: 'adjective',
      definition: 'Ready to buy or use right now.',
      example: 'Yes, fifteen units are available today.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-available.png',
    },
    {
      word: 'DELIVERY',
      partOfSpeech: 'noun',
      definition: 'Sending a product to the customer after they order.',
      example: 'Delivery will be on Friday.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-delivery.png',
    },
    {
      word: 'TOTAL',
      partOfSpeech: 'noun',
      definition: 'The full price after you count everything.',
      example: 'The total is $750 for fifteen units.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-total.png',
    },
    {
      word: 'PROCESS',
      partOfSpeech: 'verb',
      definition: 'To work on something officially, like an order.',
      example: 'I will process your order now.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-process.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'HOW MANY WOULD YOU LIKE?',
      definition: 'A question you ask to find out the number of items someone wants.',
      example: 'You want the Standard Plan? How many would you like?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-phrase-how-many.png',
    },
    {
      phrase: 'LET ME CHECK IF THAT IS AVAILABLE',
      definition: 'A polite phrase you say before you promise a product is in stock.',
      example: 'You need twenty? Let me check if that is available.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-phrase-check-availability.png',
    },
    {
      phrase: 'SHALL I CONFIRM YOUR ORDER?',
      definition: 'A polite question you ask when all the details are agreed.',
      example: 'We have the price and date. Shall I confirm your order?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-phrase-shall-confirm.png',
    },
    {
      phrase: 'WHEN WOULD YOU LIKE DELIVERY?',
      definition: 'A question you ask to find out the day the customer wants the product.',
      example: 'We have fifteen units ready. When would you like delivery?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-phrase-delivery-preference.png',
    },
    {
      phrase: 'YOUR TOTAL COMES TO',
      definition: 'A phrase you use to tell the customer the final price.',
      example: 'Your total comes to $750.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-phrase-total-comes-to.png',
    },
    {
      phrase: 'I WILL PROCESS THAT FOR YOU NOW',
      definition: 'A phrase you say to tell the customer you are starting their order.',
      example: 'Thank you. I will process that for you now.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/sales-taking-a-simple-order-phrase-process-now.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Hi Riley. We are ready. We want to buy the Standard Plan for our whole team.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'That is great news, Marcus! How many [[unit:one single item in an order]]s would you like?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'We need it for fifteen people. So fifteen units.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Fifteen units — perfect. Let me check if that is [[available:ready to buy or use right now]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Good news — fifteen units are available. We can move forward.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Great. And when can you send everything?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'When would you like [[delivery:the process of sending products to the customer]]?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'We need it by the end of next week if possible.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'That is no problem. Your [[total:the final amount — the full price after counting all units]] comes to $750 for fifteen units.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Okay. $750 — that works for us.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Shall I [[confirm:to say yes and make something certain]] your order?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Yes, please. Go ahead.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Perfect. I will [[process:to handle or complete something officially]] that for you now. You will receive a confirmation email in a few minutes.',
    }
  ],

  matchingExercise: [
    {
        "word": "order",
        "definition": "a request to buy a specific product or service"
    },
    {
        "word": "quantity",
        "definition": "the number or amount of something"
    },
    {
        "word": "confirm",
        "definition": "to say yes and make something certain"
    },
    {
        "word": "unit",
        "definition": "one single item in an order"
    },
    {
        "word": "available",
        "definition": "ready to buy or use right now"
    },
    {
        "word": "delivery",
        "definition": "the process of sending products to the customer"
    },
    {
        "word": "total",
        "definition": "the final amount — the full price after counting all units"
    },
    {
        "word": "process",
        "definition": "to handle or complete an order officially"
    }
],
  fillBlankExercise: [
    {
        "before": "How many ",
        "after": "s would you like? We need to know the number.",
        "answer": "unit"
    },
    {
        "before": "Let me check if that is ",
        "after": ". I will look at the system now.",
        "answer": "available"
    },
    {
        "before": "Your ",
        "after": " comes to $750 for fifteen units.",
        "answer": "total"
    },
    {
        "before": "I will ",
        "after": " that for you now and send a confirmation email.",
        "answer": "process"
    },
    {
        "before": "Shall I ",
        "after": " your order? Everything looks correct.",
        "answer": "confirm"
    },
    {
        "before": "When would you like ",
        "after": "? We can send everything by Friday.",
        "answer": "delivery"
    }
],
  multipleChoiceExercise: [
    {
        "question": "How many units does Marcus order?",
        "options": [
            "Ten units",
            "Fifteen units",
            "Twenty units"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the total price for Marcus's order?",
        "options": [
            "$500",
            "$1,200",
            "$750"
        ],
        "correctIndex": 2
    },
    {
        "question": "When does Marcus need delivery?",
        "options": [
            "Today",
            "End of next week",
            "Next month"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley do at the end of the dialogue?",
        "options": [
            "She asks for payment",
            "She processes the order and sends a confirmation email",
            "She calls Marcus's manager"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Have you ever placed an order at work — for example, software, supplies, or equipment? How did you do it?",
        "When you order something for your team, what information does the supplier usually ask for?",
        "What can go wrong when taking or placing an order? How do you avoid mistakes?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "How _____ units would you like?",
            "options": [
                "much",
                "many",
                "more"
            ],
            "correctIndex": 1,
            "explanation": "Use 'many' for things you can count, like units, people, or items. 'Much' is for things you cannot count, like time or water."
        },
        {
            "sentence": "Let me check if that is _____.",
            "options": [
                "available",
                "open",
                "free"
            ],
            "correctIndex": 0,
            "explanation": "'Available' means ready to buy or use. 'Free' means it costs nothing — a very different meaning. 'Open' does not work for products."
        },
        {
            "sentence": "Your total _____ to $750 for fifteen units.",
            "options": [
                "adds",
                "comes",
                "goes"
            ],
            "correctIndex": 1,
            "explanation": "'Your total comes to' is the fixed phrase we use in sales. 'Adds' and 'goes' are not used this way."
        },
        {
            "sentence": "When would you like _____?",
            "options": [
                "shipping",
                "delivery",
                "sending"
            ],
            "correctIndex": 1,
            "explanation": "'Delivery' is the standard business word for when and how products arrive. 'Shipping' is also used but 'delivery' is more common in B2B conversations."
        },
        {
            "sentence": "Shall I _____ your order?",
            "options": [
                "check",
                "confirm",
                "make"
            ],
            "correctIndex": 1,
            "explanation": "'Confirm' means to make something official and certain. 'Check' means to look at something — it does not close the order. 'Make' is too informal."
        },
        {
            "sentence": "I will _____ that for you now.",
            "options": [
                "handle",
                "do",
                "process"
            ],
            "correctIndex": 2,
            "explanation": "'Process' is the professional word for completing an order officially. 'Handle' and 'do' are too casual for this context."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "We need fifty units. Do you have them in stock?",
                "options": [
                    "How many would you like?",
                    "Let me check if that is available — I will confirm in a moment.",
                    "Your total comes to $2,500."
                ],
                "correctIndex": 1,
                "explanation": "Option B responds to the question by checking availability — exactly what the customer asked. Option A asks for quantity the customer already gave. Option C jumps to pricing before confirming stock."
            },
            {
                "customerLine": "Okay, we are ready to place the order.",
                "options": [
                    "Let me check if that is available.",
                    "How many would you like?",
                    "Shall I confirm your order?"
                ],
                "correctIndex": 2,
                "explanation": "Option C is the right next step — the customer is ready, so you confirm the order. Option A checks availability, which should have been done earlier. Option B asks for quantity, which the customer has already given."
            },
            {
                "customerLine": "What is the total price for thirty units?",
                "options": [
                    "Your total comes to $1,500.",
                    "Shall I confirm your order?",
                    "When would you like delivery?"
                ],
                "correctIndex": 0,
                "explanation": "Option A answers the question directly with the final price. Option B moves to confirmation before answering the pricing question. Option C asks about delivery — too early before the customer knows the price."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Kevin",
                "text": "Hi. We need some units of the Standard Plan."
            },
            {
                "speaker": "Alex",
                "text": "How much would you like?"
            },
            {
                "speaker": "Kevin",
                "text": "Twenty units. Are they free right now?"
            },
            {
                "speaker": "Alex",
                "text": "Yes, twenty units are available. When would you like delivery?"
            },
            {
                "speaker": "Kevin",
                "text": "By Friday please."
            },
            {
                "speaker": "Alex",
                "text": "Your price comes to $1,000 for twenty units."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "much",
                "correction": "many",
                "explanation": "Use 'many' for countable things like units, people, or items. 'Much' is for things you cannot count, like time or money."
            },
            {
                "lineIndex": 2,
                "incorrectText": "free",
                "correction": "available",
                "explanation": "'Available' means ready to buy or use. 'Free' means it costs nothing — a very different meaning that would confuse the customer."
            },
            {
                "lineIndex": 5,
                "incorrectText": "price",
                "correction": "total",
                "explanation": "The correct phrase is 'your total comes to'. 'Price' is not wrong in general, but 'total' is the professional sales phrase used when giving a final amount."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "We need it for twenty people on our team.",
                "salespersonStart": "Twenty units — let me check if...",
                "suggestedCompletion": "that is available. Yes, we have twenty units ready. When would you like delivery?"
            },
            {
                "customerLine": "Can we get everything by the end of next week?",
                "salespersonStart": "When would you like...",
                "suggestedCompletion": "delivery exactly? If you confirm today, we can have everything ready by Thursday."
            },
            {
                "customerLine": "Okay, the total sounds good. Let's go ahead.",
                "salespersonStart": "Shall I confirm...",
                "suggestedCompletion": "your order? Fifteen units, delivery by Friday, total $750. I will process that for you now."
            }
        ]
    }
},
};
