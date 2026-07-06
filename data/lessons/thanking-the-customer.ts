import { Lesson } from '@/types/lesson';

export const thankingTheCustomer: Lesson = {
  slug: 'thanking-the-customer',
  title: 'Thanking the Customer',
  subtitle: 'How to close a sale warmly and make a customer feel genuinely valued',
  level: 'A1-A2',
  description: 'The sale does not end when the customer pays. How you finish a conversation — and how you follow up — is what makes a customer come back. This lesson teaches you the professional language for saying thank you, expressing appreciation, and leaving the customer with a great impression of you and your company.',
  heroImage: '/images/thanking-the-customer-hero.png',

  vocabulary: [
    {
      word: 'APPRECIATE',
      partOfSpeech: 'verb',
      definition: "To recognise the value of what someone has done — stronger and more professional than 'thank you'. Always followed directly by an object, with no preposition.",
      example: 'Riley called Marcus after the delivery and said: We really appreciate your business. Customers like you are the reason we work so hard to get everything right.',
      imageSlug: '/images/appreciate.png',
    },
    {
      word: 'GRATEFUL',
      partOfSpeech: 'adjective',
      definition: "Feeling thankful for something someone has done. 'We are grateful for your support' is a warm, professional way to thank a long-term customer.",
      example: 'Marcus said the team loved the new plan. Riley said: We are so grateful for your kind words — and for choosing us. It really means a lot to the whole team.',
      imageSlug: '/images/grateful.png',
    },
    {
      word: 'VALUED',
      partOfSpeech: 'adjective',
      definition: 'Important and appreciated — a valued customer is one the company genuinely cares about. Use this word to make a customer feel special.',
      example: 'Riley said: At Practispeak, every customer is a valued customer. We do not just want your business — we want to build a relationship that lasts.',
      imageSlug: '/images/valued.png',
    },
    {
      word: 'PLEASURE',
      partOfSpeech: 'noun',
      definition: "A positive feeling — 'it was a pleasure' is a warm, professional way to say you genuinely enjoyed helping or working with someone.",
      example: 'At the end of the call, Riley said: It was a real pleasure working with you, Marcus. I hope we can do it again soon. Have a wonderful day.',
      imageSlug: '/images/pleasure.png',
    },
    {
      word: 'FEEDBACK',
      partOfSpeech: 'noun',
      definition: 'Comments from a customer about their experience — positive or negative. Asking for feedback shows you care about improving and building a better relationship.',
      example: 'Riley asked: Do you have any feedback for us — anything we could do better? Marcus said: Honestly, everything was great. The delivery was faster than I expected.',
      imageSlug: '/images/thanking-the-customer-feedback.png',
    },
    {
      word: 'RECOMMEND',
      partOfSpeech: 'verb',
      definition: 'To tell other people about a positive experience and suggest they try the same product or company. A recommendation from a happy customer is the most powerful tool in sales.',
      example: 'Marcus said: I will definitely recommend you to my contacts. Riley said: Thank you so much — that really means everything to us. We are so glad you had a great experience.',
      imageSlug: '/images/thanking-the-customer-recommend.png',
    },
    {
      word: 'SATISFACTION',
      partOfSpeech: 'noun',
      definition: 'The feeling of being happy with a product or service. Customer satisfaction is the goal of every sale — a satisfied customer comes back and recommends you to others.',
      example: 'Riley said: Your satisfaction is our number one priority. If anything is ever not right, please call me directly and I will fix it immediately.',
      imageSlug: '/images/thanking-the-customer-satisfaction.png',
    },
    {
      word: 'LOYALTY',
      partOfSpeech: 'noun',
      definition: 'Staying with the same company over time. A loyal customer chooses you again and again — loyalty is built through great service and genuine relationships.',
      example: 'Marcus had been a customer for two years. Riley said: We truly value your loyalty, Marcus. It means a lot to have customers who trust us and come back every year.',
      imageSlug: '/images/thanking-the-customer-loyalty.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THANK YOU FOR YOUR ORDER',
      definition: 'The simplest and most important phrase for closing a sale. Say it sincerely — not just as a routine line. It tells the customer their business matters to you personally.',
      example: 'Riley called Marcus as soon as the delivery was confirmed. She said: I just wanted to call and say — thank you for your order. It was a real pleasure working with you.',
      imageSlug: '/images/thank-you-for-your-order.png',
    },
    {
      phrase: 'IT WAS A PLEASURE WORKING WITH YOU',
      definition: 'A warm, professional way to close a sale or end a relationship. Use it at the end of a call or meeting — it leaves a positive, personal impression.',
      example: 'Marcus said the team was very happy. Riley said: That is so good to hear — it was a real pleasure working with you, Marcus. I hope we can do it again soon.',
      imageSlug: '/images/it-was-a-pleasure-working-with-you.png',
    },
    {
      phrase: 'PLEASE DO NOT HESITATE TO CONTACT US',
      definition: "A professional invitation for the customer to reach out any time. 'Hesitate' means to wait or pause — so 'do not hesitate' means 'call or email us immediately, any time'.",
      example: 'Riley finished the call and said: If you ever have any questions — big or small — please do not hesitate to contact us. I am always here to help.',
      imageSlug: '/images/please-do-not-hesitate-to-contact-us.png',
    },
    {
      phrase: 'WE APPRECIATE YOUR BUSINESS',
      definition: "A formal, professional way to say thank you to a customer. 'Your business' means the money they spend and the relationship they bring — never use a preposition after 'appreciate'.",
      example: 'Marcus confirmed he would order again next month. Riley said: We really appreciate your business, Marcus. Customers like you make everything we do worthwhile.',
      imageSlug: '/images/we-appreciate-your-business.png',
    },
    {
      phrase: 'I HOPE YOU ARE HAPPY WITH YOUR [PRODUCT]',
      definition: "A gentle, personal way to check in after a sale. It shows you care about the customer's experience — not just the transaction.",
      example: 'Riley followed up one week after the delivery: Hi Marcus — I just wanted to check in. I hope you are happy with the Standard Plan. Is there anything I can help with?',
      imageSlug: '/images/i-hope-you-are-happy-with-your-product.png',
    },
    {
      phrase: 'WE LOOK FORWARD TO WORKING WITH YOU AGAIN',
      definition: "A warm closing phrase that expresses hope for future business. 'Look forward to' is always followed by a noun or '-ing' verb — never the base verb.",
      example: 'Marcus said he would call when they needed more units. Riley said: Wonderful — we look forward to working with you again. Have a great day, Marcus.',
      imageSlug: '/images/we-look-forward-to-working-with-you-again.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Hi Marcus, it is Riley from Practispeak Solutions. I just wanted to call and say — thank you for your order.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Oh, thank you for calling, Riley. That is very kind.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. Has everything arrived okay?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes — we received everything yesterday. The team is very happy.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is wonderful to hear. We really [[appreciate:to recognise the value of what someone has done]] your business, Marcus.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'We are happy too. It was a very good experience.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I am so glad. If you ever need anything, please do not [[hesitate:to wait or pause before doing something]] to contact us.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I will. Actually, can I give you some [[feedback:comments from a customer about their experience]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course — we would love to hear it.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'The delivery was very fast. Our team was impressed. Your [[satisfaction:the feeling of being happy with a product or service]] with getting it right really shows.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Thank you — that means a lot. Your [[loyalty:staying with the same company over time]] means everything to us, Marcus.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And we will definitely [[recommend:to tell others about a positive experience]] you to other companies.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is so kind. It was a real [[pleasure:a positive feeling — 'it was a pleasure' means you genuinely enjoyed helping]] working with you.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We look forward to working with you again. Have a wonderful day, Marcus.',
    }
  ],

  matchingExercise: [
    {
        "word": "appreciate",
        "definition": "to recognise the value of what someone has done — stronger than 'thank you'"
    },
    {
        "word": "grateful",
        "definition": "feeling thankful for what someone has done"
    },
    {
        "word": "valued",
        "definition": "important and appreciated — a customer the company genuinely cares about"
    },
    {
        "word": "pleasure",
        "definition": "a positive feeling — 'it was a pleasure' means you enjoyed helping"
    },
    {
        "word": "feedback",
        "definition": "comments from a customer about their experience"
    },
    {
        "word": "recommend",
        "definition": "to tell others about a positive experience"
    },
    {
        "word": "satisfaction",
        "definition": "the feeling of being happy with a product or service"
    },
    {
        "word": "loyalty",
        "definition": "staying with the same company over time"
    }
],
  fillBlankExercise: [
    {
        "before": "Thank you ",
        "after": " your order. It was a pleasure working with you.",
        "answer": "for"
    },
    {
        "before": "We really ",
        "after": " your business — customers like you make a real difference.",
        "answer": "appreciate"
    },
    {
        "before": "Please do not ",
        "after": " to contact us if you need anything at all.",
        "answer": "hesitate"
    },
    {
        "before": "We look ",
        "after": " to working with you again in the future.",
        "answer": "forward"
    },
    {
        "before": "A happy customer will often ",
        "after": " us to other companies.",
        "answer": "recommend"
    },
    {
        "before": "Your ",
        "after": " means everything to us — we love having you as a long-term customer.",
        "answer": "loyalty"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley call Marcus?",
        "options": [
            "To take a new order",
            "To say thank you and check everything arrived",
            "To discuss a delivery problem"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Marcus feel about the experience?",
        "options": [
            "He is unhappy with the delivery",
            "He is not sure yet",
            "He is happy — the team was impressed"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Marcus say he will do?",
        "options": [
            "Place another order today",
            "Recommend Practispeak to other companies",
            "Send feedback by email"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say at the end of the call?",
        "options": [
            "She asks about the next order",
            "She says 'We look forward to working with you again'",
            "She asks Marcus for a review"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "After you buy something at work, does the salesperson ever follow up to say thank you? How does it make you feel?",
        "In your culture or workplace, how do you say thank you in a professional situation? Are there specific phrases you use?",
        "Think of a time when a company made you feel really valued as a customer. What did they do?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Thank you _____ your order.",
            "options": [
                "about",
                "for",
                "with"
            ],
            "correctIndex": 1,
            "explanation": "'Thank you for' is the correct phrase — 'for' introduces what you are thankful about. 'Thank you about' and 'thank you with' are not correct in English. This applies to all 'thank you' phrases: 'thank you for calling', 'thank you for your time', 'thank you for your feedback'."
        },
        {
            "sentence": "We really _____ your business.",
            "options": [
                "appreciate",
                "appreciate for",
                "appreciate of"
            ],
            "correctIndex": 0,
            "explanation": "'Appreciate' is a transitive verb — it takes an object directly with no preposition. Say 'we appreciate your business', 'I appreciate your help'. Never 'appreciate for' or 'appreciate of'. Adding a preposition is a very common mistake."
        },
        {
            "sentence": "It was a real _____ working with you.",
            "options": [
                "happy",
                "pleasure",
                "good"
            ],
            "correctIndex": 1,
            "explanation": "'It was a pleasure' is the professional closing phrase. 'Pleasure' is a noun here. 'Happy' and 'good' are adjectives — they cannot follow 'a real' in this sentence structure."
        },
        {
            "sentence": "Please do not hesitate _____ contact us.",
            "options": [
                "contacting",
                "for contacting",
                "to contact"
            ],
            "correctIndex": 2,
            "explanation": "After 'hesitate', always use 'to' + the base verb — never '-ing'. 'Do not hesitate to contact us' is the fixed phrase. 'Hesitate contacting' is incorrect. This is the same rule as 'decide to go', 'want to help', 'need to check'."
        },
        {
            "sentence": "We look forward to _____ with you again.",
            "options": [
                "work",
                "worked",
                "working"
            ],
            "correctIndex": 2,
            "explanation": "'Look forward to' is always followed by a noun or '-ing' verb — never the base verb. The 'to' here is a preposition, not part of an infinitive. Say 'looking forward to working', 'looking forward to hearing from you', 'looking forward to your reply'."
        },
        {
            "sentence": "A happy customer will often _____ you to other companies.",
            "options": [
                "recommend",
                "say",
                "tell"
            ],
            "correctIndex": 0,
            "explanation": "'Recommend' is the correct word — it means to suggest a product or company to someone else. 'Tell' and 'say' are verbs for communication, not for suggesting. We say 'recommend someone to a company' or 'recommend a product to a friend'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "Thank you for everything. We are very happy with the plan.",
                "options": [
                    "Great — do you want to place another order?",
                    "Let me know if there are any problems.",
                    "Thank you so much — we really appreciate your business. It was a pleasure working with you."
                ],
                "correctIndex": 2,
                "explanation": "Option C responds warmly and genuinely — it thanks the customer and closes the moment beautifully. Option A immediately jumps to the next sale, which feels pushy when the customer is simply sharing good news. Option B is too negative — it focuses on problems when everything is fine."
            },
            {
                "customerLine": "I will definitely recommend you to my colleagues.",
                "options": [
                    "Yes please — we need more customers.",
                    "Can you write us a review online?",
                    "That is so kind — thank you. We truly appreciate your support."
                ],
                "correctIndex": 2,
                "explanation": "Option C accepts the compliment gracefully and makes the customer feel good about their offer. Option A sounds desperate and awkward. Option B immediately asks for something in return, which feels transactional rather than grateful."
            },
            {
                "customerLine": "Who can I contact if I have questions in the future?",
                "options": [
                    "Just email our support team anytime.",
                    "Please do not hesitate to contact me directly — I am always here to help.",
                    "I will send you our contact page."
                ],
                "correctIndex": 1,
                "explanation": "Option B is personal and reassuring — the customer has a name and a direct promise. This builds a real relationship. Option A passes the customer to a team, which feels like you are passing them off. Option C is lazy — it sends a link instead of giving a personal commitment."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Hi Sam. I just wanted to call and thank you for your order."
            },
            {
                "speaker": "Sam",
                "text": "That is very kind. We are very happy with everything."
            },
            {
                "speaker": "Alex",
                "text": "I am so glad. We really appreciate of your business."
            },
            {
                "speaker": "Sam",
                "text": "And we will definitely recommend you to other companies."
            },
            {
                "speaker": "Alex",
                "text": "Thank you so much. Please do not hesitate contacting us anytime."
            },
            {
                "speaker": "Alex",
                "text": "We look forward to work with you again. Have a great day!"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "appreciate of",
                "correction": "appreciate",
                "explanation": "'Appreciate' never takes a preposition — it is followed directly by the object. Say 'we appreciate your business', 'I appreciate your help'. Never 'appreciate of' or 'appreciate for'. Adding 'of' is one of the most common mistakes with this verb."
            },
            {
                "lineIndex": 4,
                "incorrectText": "hesitate contacting",
                "correction": "hesitate to contact",
                "explanation": "After 'hesitate', always use 'to' + the base verb. The fixed phrase is 'do not hesitate to contact us'. 'Hesitate contacting' is not correct — the '-ing' form does not work here. Think of it like 'decide to call', 'want to help', 'need to speak'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "to work",
                "correction": "to working",
                "explanation": "'Look forward to' is always followed by '-ing' — never the base verb. The 'to' here is a preposition, not part of an infinitive. Say 'look forward to working', 'look forward to hearing from you'. This is one of the most common grammar mistakes in English."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "Thank you for everything, Riley.",
                "salespersonStart": "Thank you for your order —",
                "suggestedCompletion": "it was a real pleasure working with you. Please do not hesitate to contact me if you ever need anything at all."
            },
            {
                "customerLine": "The team is very happy with the plan.",
                "salespersonStart": "That is so wonderful to hear. We really appreciate —",
                "suggestedCompletion": "your business and your loyalty. Customers like you make everything we do worthwhile."
            },
            {
                "customerLine": "I will definitely tell my colleagues about you.",
                "salespersonStart": "That means everything to us. We look forward —",
                "suggestedCompletion": "to working with you again. And please remember — I am always here if you have any questions."
            }
        ]
    }
},
};
