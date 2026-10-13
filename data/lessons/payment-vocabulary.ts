import { Lesson } from '@/types/lesson';

export const paymentVocabulary: Lesson = {
  slug: 'payment-vocabulary',
  title: 'Payment Vocabulary',
  subtitle: 'How to talk about cash, card, invoices, and receipts in a B2B sale',
  level: 'A1-A2',
  description: 'Every sale ends with payment — and customers always have questions about how, when, and what they will receive. This lesson teaches you the essential payment words and phrases you need to explain options clearly, send the right documents, and make the customer feel confident about paying.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/payment-vocabulary-hero.png',

  vocabulary: [
    {
      word: 'CASH',
      partOfSpeech: 'noun',
      definition: 'Money in the form of coins and notes.',
      example: 'I pay with cash at the market.',
      imageSlug: '/images/cash.png',
    },
    {
      word: 'CARD',
      partOfSpeech: 'noun',
      definition: 'A small plastic card you use to pay for things.',
      example: 'Can I pay by card?',
      imageSlug: '/images/card.png',
    },
    {
      word: 'INVOICE',
      partOfSpeech: 'noun',
      definition: 'A paper or email that shows what you must pay and when.',
      example: 'Please send me the invoice by email.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/payment-vocabulary-invoice.png',
    },
    {
      word: 'RECEIPT',
      partOfSpeech: 'noun',
      definition: 'A paper or email that shows you have paid.',
      example: 'Can I have a receipt, please?',
      imageSlug: '/images/receipt.png',
    },
    {
      word: 'PAYMENT',
      partOfSpeech: 'noun',
      definition: 'The act of giving money for something.',
      example: 'We got your payment today. Thank you.',
      imageSlug: '/images/payment.png',
    },
    {
      word: 'BALANCE',
      partOfSpeech: 'noun',
      definition: 'The money you still need to pay.',
      example: 'Your balance is $50.',
      imageSlug: '/images/balance.png',
    },
    {
      word: 'DUE',
      partOfSpeech: 'adjective',
      definition: 'Needing to be paid by a certain day.',
      example: 'The money is due on Friday.',
      imageSlug: '/images/due.png',
    },
    {
      word: 'TRANSFER',
      partOfSpeech: 'noun',
      definition: 'Sending money from one bank account to another.',
      example: 'I will pay by bank transfer.',
      imageSlug: '/images/transfer.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'HOW WOULD YOU LIKE TO PAY?',
      definition: 'A polite question to ask which way a person wants to pay.',
      example: 'How would you like to pay?',
      imageSlug: '/images/how-would-you-like-to-pay.png',
    },
    {
      phrase: 'I WILL SEND YOU AN INVOICE',
      definition: 'You say this to tell a customer that a bill is coming.',
      example: 'Thank you for your order. I will send you an invoice.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/i-will-send-you-an-invoice.png',
    },
    {
      phrase: 'PAYMENT IS DUE ON [DATE]',
      definition: 'You say this to tell a customer the last day to pay.',
      example: 'Payment is due on May 5th.',
      imageSlug: '/images/payment-is-due-on-date.png',
    },
    {
      phrase: 'CAN I GET A RECEIPT FOR THAT?',
      definition: 'A customer asks this to get a paper or email that shows they paid.',
      example: 'Here is the money. Can I get a receipt for that?',
      imageSlug: '/images/can-i-get-a-receipt-for-that.png',
    },
    {
      phrase: 'WE ACCEPT CASH, CARD, AND BANK TRANSFER',
      definition: 'You say this to tell customers the ways they can pay.',
      example: 'We accept cash, card, and bank transfer.',
      imageSlug: '/images/we-accept-cash-card-and-bank-transfer.png',
    },
    {
      phrase: 'YOUR BALANCE IS [AMOUNT]',
      definition: 'You say this to tell a customer how much money they still need to pay.',
      example: 'Your balance is $120.',
      imageSlug: '/images/your-balance-is-amount.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, I am ready to pay for my order. How can I do that?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Great news! We accept [[cash:money in physical form — coins and notes]], [[card:a bank or credit card used to pay electronically]], and bank [[transfer:sending money electronically from one account to another]]. How would you like to pay?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What is an invoice exactly? Can you explain?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Of course. An [[invoice:a document that shows what a customer owes and the payment due date]] is a document we send by email. It shows your total and the [[payment:the act of giving money for something]] deadline.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And when is payment [[due:required by a specific date]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Payment is due within 30 days. So you have until the end of the month.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is good. We usually pay by bank transfer.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Perfect. I will send you an invoice by email today. It will include our bank details.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And will I receive a [[receipt:a document that proves payment has been made]] after I pay?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Yes — as soon as we confirm your payment, I will send you a receipt by email.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What is my [[balance:the amount of money still owed]]? How much do I owe?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Your balance is $750 — that is for fifteen units of the Standard Plan.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Okay. I will process the bank transfer today.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Wonderful. I will send the invoice now. Thank you, Marcus!',
    }
  ],

  matchingExercise: [
    {
        "word": "cash",
        "definition": "money in physical form — coins and notes"
    },
    {
        "word": "card",
        "definition": "a bank or credit card used to pay electronically"
    },
    {
        "word": "invoice",
        "definition": "a document that shows what a customer owes"
    },
    {
        "word": "receipt",
        "definition": "a document that proves payment has been made"
    },
    {
        "word": "payment",
        "definition": "the act of giving money for something"
    },
    {
        "word": "balance",
        "definition": "the amount of money still owed"
    },
    {
        "word": "due",
        "definition": "required by a specific date"
    },
    {
        "word": "transfer",
        "definition": "sending money electronically from one account to another"
    }
],
  fillBlankExercise: [
    {
        "before": "I will send you the ",
        "after": " by email today. Please pay within 30 days.",
        "answer": "invoice"
    },
    {
        "before": "As soon as we confirm your payment, I will send you a ",
        "after": ".",
        "answer": "receipt"
    },
    {
        "before": "Payment is ",
        "after": " within 30 days — please pay before the end of the month.",
        "answer": "due"
    },
    {
        "before": "Your ",
        "after": " is $750 for fifteen units of the Standard Plan.",
        "answer": "balance"
    },
    {
        "before": "We accept ",
        "after": ", card, and bank transfer.",
        "answer": "cash"
    },
    {
        "before": "I will process the bank ",
        "after": " today and send the confirmation.",
        "answer": "transfer"
    }
],
  multipleChoiceExercise: [
    {
        "question": "How does Marcus prefer to pay?",
        "options": [
            "By cash",
            "By card",
            "By bank transfer"
        ],
        "correctIndex": 2
    },
    {
        "question": "When is payment due?",
        "options": [
            "Today",
            "Within 30 days",
            "Within 7 days"
        ],
        "correctIndex": 1
    },
    {
        "question": "What will Riley send Marcus by email?",
        "options": [
            "A receipt",
            "A tracking number",
            "An invoice"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Marcus's balance?",
        "options": [
            "$500",
            "$750",
            "$1,000"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "When you buy something for your company, how do you usually pay — by card, bank transfer, or invoice?",
        "Do you deal with invoices or payments in your job? What does that process look like?",
        "Have you ever had a problem with a payment — for example, a wrong invoice or a missing receipt? What happened?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "An invoice is a document that shows what you _____.",
            "options": [
                "pay",
                "owe",
                "have"
            ],
            "correctIndex": 1,
            "explanation": "'Owe' means the money you still need to pay — it is the correct word here. 'Pay' is a verb for the action of giving money, not for the amount. 'Have' does not fit — the invoice shows what you owe, not what you have."
        },
        {
            "sentence": "Payment is _____ within 30 days.",
            "options": [
                "needed",
                "due",
                "ready"
            ],
            "correctIndex": 1,
            "explanation": "'Due' is the standard word for payment deadlines — 'payment is due' is the fixed phrase. 'Needed' is too informal. 'Ready' means something is prepared, not that it must be paid by a date."
        },
        {
            "sentence": "Can I get a _____ for that payment?",
            "options": [
                "recipe",
                "receipt",
                "invoice"
            ],
            "correctIndex": 1,
            "explanation": "A 'receipt' proves you paid — it is sent after payment. An 'invoice' is sent before payment — it shows what you owe. 'Recipe' is instructions for cooking — a completely different word that sounds similar to 'receipt'."
        },
        {
            "sentence": "We accept cash, card, and bank _____.",
            "options": [
                "payment",
                "transfer",
                "money"
            ],
            "correctIndex": 1,
            "explanation": "'Bank transfer' is the fixed phrase for sending money electronically between accounts. 'Bank payment' and 'bank money' are not standard expressions — 'transfer' is the correct word."
        },
        {
            "sentence": "Your _____ is $750.",
            "options": [
                "invoice",
                "total",
                "balance"
            ],
            "correctIndex": 2,
            "explanation": "'Balance' is the amount of money still owed — the correct word when telling a customer what they need to pay. 'Invoice' is the document, not the amount. 'Total' works too, but 'balance' is the professional word used for outstanding amounts."
        },
        {
            "sentence": "I will send you an invoice _____ email today.",
            "options": [
                "on",
                "with",
                "by"
            ],
            "correctIndex": 2,
            "explanation": "'By email' is the correct preposition phrase — it means using email as the method. 'On email' is not correct in English. 'With email' does not work here. We also say 'send by post', 'send by courier' — 'by' is always the right word for the method."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "How can I pay for this?",
                "options": [
                    "We accept all payments.",
                    "We accept cash, card, and bank transfer. Which would you prefer?",
                    "You need to pay today."
                ],
                "correctIndex": 1,
                "explanation": "Option B lists all the options clearly and invites the customer to choose — this is professional and helpful. Option A is too vague. Option C sounds rude and creates unnecessary pressure."
            },
            {
                "customerLine": "I need an invoice. Can you send one?",
                "options": [
                    "Yes — I will send the invoice by email today. Payment is due within 30 days.",
                    "You can pay by card instead.",
                    "What is your email address?"
                ],
                "correctIndex": 0,
                "explanation": "Option A confirms the request, tells the customer how they will receive it, and gives the deadline — everything they need in one sentence. Option B ignores the request. Option C asks a question that should already be in your system — check first before asking."
            },
            {
                "customerLine": "Can I have a receipt after I pay?",
                "options": [
                    "You already received an invoice.",
                    "We do not usually send receipts.",
                    "Yes — I will send it to your email as soon as we confirm your payment."
                ],
                "correctIndex": 2,
                "explanation": "Option C gives a clear yes and explains what happens next — exactly what the customer needs. Option A is dismissive — an invoice and a receipt are different documents. Option B is unacceptable; always provide a receipt when asked."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Hi Kevin. I will send you the invoice by email today."
            },
            {
                "speaker": "Kevin",
                "text": "Thank you. When is payment do?"
            },
            {
                "speaker": "Alex",
                "text": "Payment is due within 30 days — by the end of next month."
            },
            {
                "speaker": "Kevin",
                "text": "Okay. I will pay by a bank transfer."
            },
            {
                "speaker": "Alex",
                "text": "Perfect. I will include our bank details on the invoice."
            },
            {
                "speaker": "Kevin",
                "text": "And can I have a recipe when I pay?"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "do",
                "correction": "due",
                "explanation": "'Due' means required by a specific date — it is an adjective used for deadlines. 'Do' is a verb. 'Payment is due' is the fixed phrase, just like 'rent is due' or 'the bill is due'. These two words sound similar but have very different meanings."
            },
            {
                "lineIndex": 3,
                "incorrectText": "by a bank transfer",
                "correction": "by bank transfer",
                "explanation": "Payment method phrases do not use an article — we say 'pay by bank transfer', 'pay by card', 'pay by cash'. Never 'by a card' or 'by a bank transfer'. The article is dropped for all payment methods in English."
            },
            {
                "lineIndex": 5,
                "incorrectText": "recipe",
                "correction": "receipt",
                "explanation": "A 'receipt' is a document that proves you paid. A 'recipe' is instructions for cooking food — a very different word! They look and sound similar, so this is a common mistake. Remember: 'receipt' for payment, 'recipe' for cooking."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "How can I pay for this?",
                "salespersonStart": "We accept cash, card, and bank transfer —",
                "suggestedCompletion": "which works best for you? Most of our customers pay by bank transfer. I can include our bank details on the invoice."
            },
            {
                "customerLine": "When do I need to pay?",
                "salespersonStart": "Payment is due within 30 days —",
                "suggestedCompletion": "so you have until the end of the month. I will send the invoice by email today so you have all the details."
            },
            {
                "customerLine": "Can I get a receipt after I pay?",
                "salespersonStart": "Of course — as soon as we confirm your payment,",
                "suggestedCompletion": "I will send a receipt to your email immediately. It will show the amount, the date, and your order number."
            }
        ]
    }
},
};
