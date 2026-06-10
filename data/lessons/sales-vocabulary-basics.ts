import { Lesson } from '@/types/lesson';

export const salesVocabularyBasics: Lesson = {
  slug: 'sales-vocabulary-basics',
  title: 'Basic Sales Vocabulary',
  subtitle: 'The everyday words sales and marketing teams use on the job',
  level: 'A1-A2',
  description: 'Learn eight everyday words sales and marketing professionals use at work — product, price, customer, buy, sell, discount, budget, and deal — as a new sales rep settles into the job.',
  heroImage: '/images/sales-vocabulary-basics-hero.png',

  vocabulary: [
    {
      word: 'PRODUCT',
      partOfSpeech: 'noun',
      definition: 'A thing or service that a company makes or sells.',
      example: "Our project management app is the company's most popular product.",
      imageSlug: '/images/product.png',
    },
    {
      word: 'PRICE',
      partOfSpeech: 'noun',
      definition: 'How much money something costs.',
      example: 'Could you remind me of the price for the premium plan?',
      imageSlug: '/images/price.png',
    },
    {
      word: 'CUSTOMER',
      partOfSpeech: 'noun',
      definition: 'A person or company that buys something from a business.',
      example: 'We just signed a new customer — a marketing agency based in Toronto.',
      imageSlug: '/images/customer.png',
    },
    {
      word: 'BUY',
      partOfSpeech: 'verb',
      definition: 'To get something by paying money for it.',
      example: "They've decided to buy the annual plan instead of paying monthly.",
      imageSlug: '/images/buy.png',
    },
    {
      word: 'SELL',
      partOfSpeech: 'verb',
      definition: 'To give something to someone in exchange for money.',
      example: 'Our team sells software to small and medium-sized businesses.',
      imageSlug: '/images/sell.png',
    },
    {
      word: 'DISCOUNT',
      partOfSpeech: 'noun',
      definition: 'A lower price than usual.',
      example: "We're offering a 20% discount to anyone who signs up this quarter.",
      imageSlug: '/images/discount.png',
    },
    {
      word: 'BUDGET',
      partOfSpeech: 'noun',
      definition: 'The amount of money a person or company has to spend.',
      example: 'Before I recommend a plan, I always ask what their budget looks like.',
      imageSlug: '/images/budget.png',
    },
    {
      word: 'DEAL',
      partOfSpeech: 'noun',
      definition: 'An agreement, especially in business, to buy, sell, or do something.',
      example: 'We closed three new deals with marketing agencies this month.',
      imageSlug: '/images/deal.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT DOES YOUR COMPANY DO',
      definition: "A friendly way to learn more about a potential customer's business.",
      example: "So, what does your company do? I'd love to learn more before we talk numbers.",
      imageSlug: '/images/what-does-your-company-do.png',
    },
    {
      phrase: 'CAN I SHOW YOU HOW IT WORKS',
      definition: 'Offer to give someone a quick demo of your product.',
      example: 'Can I show you how it works? It only takes five minutes.',
      imageSlug: '/images/can-i-show-you-how-it-works.png',
    },
    {
      phrase: "WHAT'S YOUR BUDGET",
      definition: 'Ask how much money someone has to spend.',
      example: "Just so I can recommend the right plan — what's your budget?",
      imageSlug: '/images/whats-your-budget.png',
    },
    {
      phrase: "I'LL SEND YOU A QUOTE",
      definition: "Tell someone you'll email them the price for what they want.",
      example: "I'll send you a quote by the end of the day.",
      imageSlug: '/images/ill-send-you-a-quote.png',
    },
    {
      phrase: 'WE CAN OFFER YOU A DISCOUNT',
      definition: 'Tell a customer you can give them a lower price.',
      example: 'If you sign up this month, we can offer you a discount.',
      imageSlug: '/images/we-can-offer-you-a-discount.png',
    },
    {
      phrase: "I'LL FOLLOW UP NEXT WEEK",
      definition: "Tell someone you'll contact them again soon to continue the conversation.",
      example: "No problem — I'll follow up next week to see what you decide.",
      imageSlug: '/images/ill-follow-up-next-week.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sam',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Welcome to the team! Our company sells software and cloud tools to other businesses — these are our [[products:things a company makes or sells]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Got it. So if a [[customer:a person or company that buys something from a business]] wants to try our software, I just explain how it works?',
    },
    {
      speaker: 'Sam',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Exactly! When a company wants to [[buy:to get something by paying money]] something, your job is to show them why our product is the right choice.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Should I ask about their [[budget:the amount of money a company has to spend]] before I suggest a plan?',
    },
    {
      speaker: 'Sam',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Always. That leads straight into the [[price:how much money something costs]] talk — our starter plan is $49 a month, and the pro plan is $299.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "$299 a month? That's a big investment for a small business.",
    },
    {
      speaker: 'Sam',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: "True — that's why we're offering new customers a [[discount:a lower price than usual]] this quarter. 20% off the first year!",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Oh nice, so that brings it down to around $239 a month?',
    },
    {
      speaker: 'Sam',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Exactly. Always mention the discount early — it helps customers feel confident about saying yes.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Got it. And if I want to [[sell:to give something to someone in exchange for money]] more, I should just explain the benefits clearly?',
    },
    {
      speaker: 'Sam',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: "That's the secret. Know your product, listen to what the customer needs, and a good [[deal:an agreement to buy or sell something]] follows naturally.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I think I'm ready. Let's go close some deals!",
    }
  ],

  matchingExercise: [
    {
        "word": "PRODUCT",
        "definition": "A thing or service a company makes or sells"
    },
    {
        "word": "PRICE",
        "definition": "How much money something costs"
    },
    {
        "word": "CUSTOMER",
        "definition": "A person or company that buys something from a business"
    },
    {
        "word": "BUY",
        "definition": "To get something by paying money"
    },
    {
        "word": "SELL",
        "definition": "To give something to someone for money"
    },
    {
        "word": "DISCOUNT",
        "definition": "A lower price than usual"
    },
    {
        "word": "BUDGET",
        "definition": "The amount of money a person or company has to spend"
    },
    {
        "word": "DEAL",
        "definition": "An agreement to buy, sell, or do something"
    }
],
  fillBlankExercise: [
    {
        "before": "Our new app helps small businesses manage projects — it's our best-selling",
        "after": ".",
        "answer": "product"
    },
    {
        "before": "Could you tell me the",
        "after": "of the premium plan?",
        "answer": "price"
    },
    {
        "before": "We just signed a new",
        "after": "— a marketing agency based in Toronto.",
        "answer": "customer"
    },
    {
        "before": "They've decided to",
        "after": "the annual plan instead of paying monthly.",
        "answer": "buy"
    },
    {
        "before": "Our team",
        "after": "software to small and medium-sized businesses.",
        "answer": "sell"
    },
    {
        "before": "If you sign up this quarter, you'll get a 20%",
        "after": ".",
        "answer": "discount"
    },
    {
        "before": "Before I recommend a plan, I always ask what their",
        "after": "looks like.",
        "answer": "budget"
    },
    {
        "before": "We closed three new",
        "after": "with marketing agencies this month.",
        "answer": "deal"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Sam and Riley's company sell?",
        "options": [
            "Office furniture",
            "Software and cloud tools for businesses",
            "Clothes and accessories",
            "Food and drinks"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Riley's job at the company?",
        "options": [
            "To fix bugs in the software",
            "To manage the accounts department",
            "To show customers why the product is right for them",
            "To design the company logo"
        ],
        "correctIndex": 2
    },
    {
        "question": "How much does the pro plan cost before the discount?",
        "options": [
            "$49 a month",
            "$199 a month",
            "$239 a month",
            "$299 a month"
        ],
        "correctIndex": 3
    },
    {
        "question": "What discount is the company offering new customers this quarter?",
        "options": [
            "10% off",
            "15% off",
            "20% off",
            "25% off"
        ],
        "correctIndex": 2
    },
    {
        "question": "About how much would a customer pay for the pro plan with the discount?",
        "options": [
            "$199 a month",
            "$239 a month",
            "$259 a month",
            "$279 a month"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to Sam, what's the secret to selling more?",
        "options": [
            "Talking about the price first",
            "Knowing your product and listening to the customer's needs",
            "Offering the biggest discount possible",
            "Sending lots of emails"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Sam suggest Riley ask about before recommending a plan?",
        "options": [
            "The customer's favorite color",
            "The customer's budget",
            "The customer's office address",
            "The customer's age"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to Sam, what naturally follows when you know your product and listen to the customer?",
        "options": [
            "A complaint",
            "A good deal",
            "A refund",
            "A delay"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the customer's line, then discuss which response (A, B, or C) is best. Choose your answer together, then click to see if you were right — and why.",
        "items": [
            {
                "customerLine": "How much does it cost?",
                "options": [
                    "It's expensive, but it's worth every penny.",
                    "The price depends on what you need. What's your budget?",
                    "We have lots of different products — I'll send you our full catalogue."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Asking about budget before quoting a price shows you want to find the right fit. A sounds dismissive. C avoids the question and sends the customer away."
            },
            {
                "customerLine": "Can you give me a discount?",
                "options": [
                    "No, our prices are fixed.",
                    "How much of a discount are you looking for?",
                    "If you sign up this month, we can offer you a 20% discount."
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It offers a discount with a clear condition, which is professional and creates urgency. A shuts the conversation down. B gives the customer too much control over the price before you have established the product's value."
            },
            {
                "customerLine": "I need to think about it.",
                "options": [
                    "Of course — I'll follow up next week to see what you decide.",
                    "Are you sure? This is a really great deal.",
                    "OK, no problem. Let me know when you're ready."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It keeps the conversation alive with a specific next step. B is pushy and could damage the relationship. C is polite but too passive — there is no clear plan to continue."
            },
            {
                "customerLine": "What exactly does your company sell?",
                "options": [
                    "We sell lots of different things — it depends on what you need.",
                    "Check our website — everything is listed there.",
                    "We sell software to businesses. Can I show you how it works?"
                ],
                "correctIndex": 2,
                "explanation": "C is correct. It gives a clear, confident answer and immediately offers the next step. A is too vague. B sends the customer away instead of keeping them engaged."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three customer descriptions. As a group, decide what the salesperson's best first step is with each one — send a product overview, schedule a discovery call, or offer a free trial. Use words from this lesson like 'value', 'benefit', and 'offer' to explain your choices. Click 'Check Matches' to see if you agree.",
        "profiles": [
            {
                "name": 'Kenji',
                "description": "Kenji saw a Brightline advert online and clicked through to the website. He hasn't contacted the company yet, but he spent ten minutes reading about the product. He's curious but hasn't made any decision.",
                "matchKey": 'overview'
            },
            {
                "name": 'Amara',
                "description": "Amara called in last week and said she needs a tool to help manage her 15-person sales team. She knows what she wants but isn't sure which product is right. She's ready to talk but hasn't seen a demo.",
                "matchKey": 'call'
            },
            {
                "name": 'David',
                "description": 'David runs a 3-person design studio. He said the price looks good and the features sound useful. He wants to try it before he signs a contract. He just needs to see it working in practice.',
                "matchKey": 'trial'
            }
        ],
        "options": [
            {
                "key": 'overview',
                "label": 'Send a product overview',
                "description": 'A short document or email that explains what the product does and what value it offers. Good for early-stage contacts who are still exploring.'
            },
            {
                "key": 'call',
                "label": 'Schedule a discovery call',
                "description": 'A short meeting to ask questions and understand what the customer needs. Good for contacts who are ready to talk but need more information before deciding.'
            },
            {
                "key": 'trial',
                "label": 'Offer a free trial',
                "description": 'Give the customer access to the product so they can try it themselves. Good for contacts who are interested but want proof before signing a contract.'
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson's line has been cut off. As a group, discuss how you would finish it. Try to use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "This seems too expensive for us.",
                "salespersonStart": "I understand — what's your budget, and I can see if",
                "suggestedCompletion": "there is a plan that works for you. We also have a discount available if you sign up this month."
            },
            {
                "customerLine": "We are not ready to buy right now.",
                "salespersonStart": "That is completely fine. I will follow up next week",
                "suggestedCompletion": "to see how things are going. There is no pressure — I just want to make sure you have everything you need to decide."
            },
            {
                "customerLine": "Do you offer a trial before we commit?",
                "salespersonStart": "Yes — let me show you how it works first, so you can",
                "suggestedCompletion": "see if it is the right fit for your team before you decide to buy."
            },
            {
                "customerLine": "We already use another product for this.",
                "salespersonStart": "That is good to know. Can I ask what you like about it, and what",
                "suggestedCompletion": "you would change if you could? That helps me understand if we would be a better fit for you."
            }
        ]
    }
},
};
