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
};
