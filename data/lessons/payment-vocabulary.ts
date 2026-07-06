import { Lesson } from '@/types/lesson';

export const paymentVocabulary: Lesson = {
  slug: 'payment-vocabulary',
  title: 'Payment Vocabulary',
  subtitle: 'How to talk about cash, card, invoices, and receipts in a B2B sale',
  level: 'A1-A2',
  description: 'Every sale ends with payment — and customers always have questions about how, when, and what they will receive. This lesson teaches you the essential payment words and phrases you need to explain options clearly, send the right documents, and make the customer feel confident about paying.',
  heroImage: '/images/payment-vocabulary-hero.png',

  vocabulary: [
    {
      word: 'CASH',
      partOfSpeech: 'noun',
      definition: 'Money in physical form — coins and notes. In B2B sales, cash is less common, but you should always mention it as an option alongside card and transfer.',
      example: 'Sam asked how to pay. Alex said: You can pay by cash, card, or bank transfer. Most of our business customers prefer transfer, but we accept all three.',
      imageSlug: '/images/cash.png',
    },
    {
      word: 'CARD',
      partOfSpeech: 'noun',
      definition: 'A bank or credit card used to pay electronically. Customers pay by card over the phone or online — it is fast and easy.',
      example: 'Marcus said he did not want to pay by transfer. Riley said: No problem — you can pay by card. I can take the payment over the phone right now if you like.',
      imageSlug: '/images/card.png',
    },
    {
      word: 'INVOICE',
      partOfSpeech: 'noun',
      definition: 'A document sent to a customer that shows what they owe, the payment amount, and the due date. In B2B sales, most customers pay by invoice.',
      example: 'Marcus asked how he would pay. Riley said: I will send you an invoice by email today. It shows the total amount and the payment deadline — you just pay within 30 days.',
      imageSlug: '/images/payment-vocabulary-invoice.png',
    },
    {
      word: 'RECEIPT',
      partOfSpeech: 'noun',
      definition: 'A document that proves payment has been made. A receipt is sent after the customer pays — it is different from an invoice, which is sent before.',
      example: 'Marcus paid by transfer and asked for confirmation. Riley said: I will send you a receipt by email as soon as we confirm your payment. It shows the amount and the date.',
      imageSlug: '/images/receipt.png',
    },
    {
      word: 'PAYMENT',
      partOfSpeech: 'noun',
      definition: 'The act of giving money for something. In sales, you talk about payment methods, payment dates, and confirming that payment has arrived.',
      example: 'Riley said: Payment is due within 30 days. We will send a reminder email one week before the deadline so you do not miss it.',
      imageSlug: '/images/payment.png',
    },
    {
      word: 'BALANCE',
      partOfSpeech: 'noun',
      definition: "The amount of money still owed. When a customer asks 'how much do I owe?', you tell them their balance.",
      example: 'Marcus asked how much he still needed to pay. Riley said: Your balance is $750 — that is the full amount for fifteen units of the Standard Plan.',
      imageSlug: '/images/balance.png',
    },
    {
      word: 'DUE',
      partOfSpeech: 'adjective',
      definition: "Required by a specific date. When payment is due, it must be paid by that date — not after. 'Payment is due' is the standard phrase for payment deadlines.",
      example: 'Riley explained the terms: Payment is due within 30 days. If you pay late, there may be a small fee — so please contact us if you need more time.',
      imageSlug: '/images/due.png',
    },
    {
      word: 'TRANSFER',
      partOfSpeech: 'noun',
      definition: 'Sending money electronically from one bank account to another. Bank transfer is the most common payment method in B2B sales.',
      example: 'Marcus said: We prefer to pay by bank transfer. Riley said: Perfect — I will include our bank details on the invoice so you have everything you need.',
      imageSlug: '/images/transfer.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'HOW WOULD YOU LIKE TO PAY?',
      definition: 'The standard question for asking a customer their payment method. It is polite, open, and gives the customer control over the choice.',
      example: 'Riley confirmed the order details and said: Everything is ready. How would you like to pay — by card, cash, or bank transfer? Marcus said: Bank transfer, please.',
      imageSlug: '/images/how-would-you-like-to-pay.png',
    },
    {
      phrase: 'I WILL SEND YOU AN INVOICE',
      definition: 'Say this after a customer agrees to buy. It tells them they will receive a document with the total and the payment deadline — nothing happens until they get the invoice.',
      example: 'Marcus confirmed the order. Riley said: Great — I will send you an invoice by email today. It will show the total amount and the payment date. You have 30 days to pay.',
      imageSlug: '/images/i-will-send-you-an-invoice.png',
    },
    {
      phrase: 'PAYMENT IS DUE ON [DATE]',
      definition: "Use this to tell a customer when they must pay. 'Due' means required by that date. Always give a clear deadline — it avoids confusion and late payments.",
      example: 'Riley sent the invoice and said: Payment is due on the 30th of this month. If you have any questions before then, please do not hesitate to contact me.',
      imageSlug: '/images/payment-is-due-on-date.png',
    },
    {
      phrase: 'CAN I GET A RECEIPT FOR THAT?',
      definition: 'The phrase a customer uses to ask for proof of payment. Always say yes — a receipt is a basic business right and builds trust.',
      example: 'Marcus paid by transfer and asked: Can I get a receipt for that? Riley said: Of course — I will send it to your email as soon as the payment clears, usually within 24 hours.',
      imageSlug: '/images/can-i-get-a-receipt-for-that.png',
    },
    {
      phrase: 'WE ACCEPT CASH, CARD, AND BANK TRANSFER',
      definition: 'A clear, complete sentence for explaining payment options. Always list all three — the customer may have a preference you did not expect.',
      example: 'Marcus asked how he could pay. Riley said: We accept cash, card, and bank transfer. Most of our customers pay by transfer, but all three options are available.',
      imageSlug: '/images/we-accept-cash-card-and-bank-transfer.png',
    },
    {
      phrase: 'YOUR BALANCE IS [AMOUNT]',
      definition: 'Use this to tell a customer exactly how much they still owe. Always state the amount clearly — customers need to know the exact number before they can pay.',
      example: 'Marcus asked how much he owed. Riley said: Your balance is $750. That covers fifteen units of the Standard Plan for one month. I will include this on the invoice.',
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
      speakerAvatar: '/images/riley-icon.png',
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
      speakerAvatar: '/images/riley-icon.png',
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
      speakerAvatar: '/images/riley-icon.png',
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
      speakerAvatar: '/images/riley-icon.png',
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
      speakerAvatar: '/images/riley-icon.png',
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
      speakerAvatar: '/images/riley-icon.png',
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
      speakerAvatar: '/images/riley-icon.png',
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
                "text": "Hi Sam. I will send you the invoice by email today."
            },
            {
                "speaker": "Sam",
                "text": "Thank you. When is payment do?"
            },
            {
                "speaker": "Alex",
                "text": "Payment is due within 30 days — by the end of next month."
            },
            {
                "speaker": "Sam",
                "text": "Okay. I will pay by a bank transfer."
            },
            {
                "speaker": "Alex",
                "text": "Perfect. I will include our bank details on the invoice."
            },
            {
                "speaker": "Sam",
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
