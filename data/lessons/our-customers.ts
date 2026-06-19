import { Lesson } from '@/types/lesson';

export const ourCustomers: Lesson = {
  slug: 'our-customers',
  title: 'Our Customers',
  subtitle: 'How to talk about who your customers are',
  level: 'A1-A2',
  description: 'Learn simple words to talk about your customers — who they are, what they need, and how to describe them.',
  heroImage: '/images/our-customers-hero.png',

  vocabulary: [
    {
      word: 'CUSTOMER',
      partOfSpeech: 'noun',
      definition: 'A person who buys something from a company.',
      example: 'Our typical customer is a small business owner who wants to grow online.',
      imageSlug: '/images/customer.png',
    },
    {
      word: 'CLIENT',
      partOfSpeech: 'noun',
      definition: 'A person or company that pays for a service.',
      example: 'Dana is a client — she pays Brightline to help with her marketing.',
      imageSlug: '/images/client.png',
    },
    {
      word: 'CONSUMER',
      partOfSpeech: 'noun',
      definition: 'A person who buys and uses a product.',
      example: 'The consumer is the person who uses the product at home or at work.',
      imageSlug: '/images/consumer.png',
    },
    {
      word: 'AUDIENCE',
      partOfSpeech: 'noun',
      definition: 'The group of people a company wants to talk to.',
      example: 'Our audience is small business owners between 25 and 45 years old.',
      imageSlug: '/images/audience.png',
    },
    {
      word: 'SEGMENT',
      partOfSpeech: 'noun',
      definition: 'A smaller group inside a bigger group of customers.',
      example: 'One segment of our audience is marketing managers in tech companies.',
      imageSlug: '/images/segment.png',
    },
    {
      word: 'TARGET',
      partOfSpeech: 'noun',
      definition: 'The person or group you want to reach with your marketing.',
      example: 'Our target for this campaign is new businesses that are just starting out.',
      imageSlug: '/images/target.png',
    },
    {
      word: 'GROUP',
      partOfSpeech: 'noun',
      definition: 'A number of people who have something in common.',
      example: 'We split our customers into groups based on the type of business they run.',
      imageSlug: '/images/group.png',
    },
    {
      word: 'NEED',
      partOfSpeech: 'noun',
      definition: 'Something a person wants or has to have.',
      example: "We learn about our customers' needs before we make a campaign.",
      imageSlug: '/images/need.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'TARGET AUDIENCE',
      definition: 'The group of people you want to reach with your marketing.',
      example: 'Our target audience is marketing managers at small and medium-sized companies.',
      imageSlug: '/images/target-audience.png',
    },
    {
      phrase: 'MADE UP OF',
      definition: 'Say what a group contains or who is in it.',
      example: 'Our audience is made up of small business owners and marketing teams.',
      imageSlug: '/images/made-up-of.png',
    },
    {
      phrase: 'FIND OUT',
      definition: 'Learn something you did not know before.',
      example: 'We talk to our clients to find out what they need.',
      imageSlug: '/images/find-out.png',
    },
    {
      phrase: 'FOCUS ON',
      definition: 'Give most of your attention to one thing or one group.',
      example: 'This campaign will focus on new customers who have never used our product.',
      imageSlug: '/images/focus-on.png',
    },
    {
      phrase: 'TALK TO',
      definition: 'Say which people your message is for.',
      example: 'This ad is talking to small business owners who want to grow online.',
      imageSlug: '/images/talk-to.png',
    },
    {
      phrase: 'MATCH WITH',
      definition: 'Find the right product or message for the right person.',
      example: 'We try to match our message with the needs of each customer group.',
      imageSlug: '/images/match-with.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, who is your typical [[customer:a person who buys something from a company]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our typical customer is a small or medium-sized business. They usually have a marketing [[team:a group of people who work together]] of two to five people.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Is there a difference between a customer and a [[client:a person or company that pays for a service]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good question. We usually call someone a client when they pay for an ongoing service. A customer might just buy once. You are a client, Dana!',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Ha — yes, I am. Who is your main [[target:the person or group you want to reach with your marketing]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Our main target is marketing managers and business owners. They are our main [[audience:the group of people a company wants to talk to]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Do you split them into different [[group:a number of people who have something in common]]s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we call them [[segment:a smaller group inside a bigger group of customers]]s. One segment is new businesses just starting out. Another is bigger companies that want to grow faster.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And how do you find out what each group [[need:something a person wants or has to have]]s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We talk to our clients and [[consumer:a person who buys and uses a product]]s directly. We ask questions and look at data from past campaigns.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That makes sense. So each campaign is made up of messages for a different group?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. We focus on the right message for the right audience — that is the key to good marketing.',
    }
  ],

  matchingExercise: [
    {
        "word": "CUSTOMER",
        "definition": "A person who buys something from a company"
    },
    {
        "word": "CLIENT",
        "definition": "A person or company that pays for a service"
    },
    {
        "word": "CONSUMER",
        "definition": "A person who buys and uses a product"
    },
    {
        "word": "AUDIENCE",
        "definition": "The group of people a company wants to talk to"
    },
    {
        "word": "SEGMENT",
        "definition": "A smaller group inside a bigger group of customers"
    },
    {
        "word": "TARGET",
        "definition": "The person or group you want to reach with your marketing"
    },
    {
        "word": "GROUP",
        "definition": "A number of people who have something in common"
    },
    {
        "word": "NEED",
        "definition": "Something a person wants or has to have"
    }
],
  fillBlankExercise: [
    {
        "before": "Our typical",
        "after": "is a small business owner who wants to grow online.",
        "answer": "customer"
    },
    {
        "before": "Dana is a",
        "after": "— she pays Brightline to help with her marketing.",
        "answer": "client"
    },
    {
        "before": "The",
        "after": "is the person who buys and uses the product.",
        "answer": "consumer"
    },
    {
        "before": "Our",
        "after": "is small business owners between 25 and 45 years old.",
        "answer": "audience"
    },
    {
        "before": "One",
        "after": "of our audience is marketing managers in tech companies.",
        "answer": "segment"
    },
    {
        "before": "Our",
        "after": "for this campaign is new businesses that are just starting out.",
        "answer": "target"
    },
    {
        "before": "We split our customers into",
        "after": "s based on the type of business they run.",
        "answer": "group"
    },
    {
        "before": "We learn about our customers'",
        "after": "s before we make a campaign.",
        "answer": "need"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is Brightline's typical customer?",
        "options": [
            "A large company with 500 staff",
            "A small or medium-sized business with a small marketing team",
            "A school or university",
            "A government department"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between a customer and a client?",
        "options": [
            "There is no difference",
            "A client is someone who pays for an ongoing service",
            "A customer pays more money",
            "A client only buys once"
        ],
        "correctIndex": 1
    },
    {
        "question": "Who is Brightline's main target audience?",
        "options": [
            "Students and young people",
            "Large companies with big budgets",
            "Marketing managers and business owners",
            "People who work in finance"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is a segment?",
        "options": [
            "A big group of all your customers",
            "A smaller group inside a bigger group of customers",
            "A type of marketing campaign",
            "A report about customer data"
        ],
        "correctIndex": 1
    },
    {
        "question": "What are Brightline's two main customer segments?",
        "options": [
            "Men and women",
            "Online and offline customers",
            "New businesses starting out and bigger companies that want to grow",
            "UK customers and international customers"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Brightline find out what customers need?",
        "options": [
            "They guess based on data only",
            "They talk to clients and look at data from past campaigns",
            "They read market reports",
            "They ask their agency"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say is the key to good marketing?",
        "options": [
            "A big budget",
            "A large team",
            "The right message for the right audience",
            "Many social media accounts"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is a target audience?",
        "options": [
            "The number of people who see your ad",
            "The group of people you want to reach with your marketing",
            "The price you pay to run a campaign",
            "The results of a campaign"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question. Talk about which answer (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "Who is your typical customer?",
                "options": [
                    "We have many different types of customers.",
                    "Our typical customer is a marketing manager at a small or medium-sized business. They usually have a team of two to five people and want to grow their brand online.",
                    "We work with all kinds of companies."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a clear picture — job title, company size, team size, and what they want. A and C say almost nothing useful about who the customer is."
            },
            {
                "customerLine": "Are you talking to big or small companies?",
                "options": [
                    "Both big and small — it depends.",
                    "We focus on small and medium-sized businesses. Our main target is marketing managers who need a better way to look after their campaigns.",
                    "We work with any company that is interested."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says which size, names the target, and says what they need. A gives no real answer. C sounds like you take anyone — that is not a good message for a marketing team."
            },
            {
                "customerLine": "Do you split your customers into different groups?",
                "options": [
                    "Yes, we have segments. One is new businesses just starting out, and another is bigger companies that want to grow faster. We use different messages for each one.",
                    "Yes, we have a few different types.",
                    "We treat all customers the same."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It names the segments and says you use different messages for each one. B gives no detail. C might sound fair, but in marketing, different groups have different needs — you should match your message to each one."
            },
            {
                "customerLine": "How do you know what your customers need?",
                "options": [
                    "We think about it and make our best guess.",
                    "We talk to our clients directly and ask them questions. We also look at data from past campaigns to see what worked.",
                    "We look at what other companies are doing."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives two clear methods — talking to clients and looking at data. A sounds like guessing, which is not a good approach. C only talks about competitors and does not say how you learn about your own customers."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three people ask about your customers. As a group, talk about which way to describe your customers fits each situation best. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A new team member",
                "description": "A new person has just joined the Brightline marketing team. They want to understand who the company's customers are before they start working on campaigns.",
                "matchKey": "overview"
            },
            {
                "name": "A potential client",
                "description": "A marketing manager at a mid-sized company is on a call. They want to know if Brightline works with companies like theirs.",
                "matchKey": "specific"
            },
            {
                "name": "A contact at a networking event",
                "description": "Someone at an event asks who Brightline sells to. They are just curious. You have about 30 seconds.",
                "matchKey": "short"
            }
        ],
        "options": [
            {
                "key": "overview",
                "label": "Full picture",
                "description": "Explain all the main customer groups — who they are, what they do, and what they need. Cover the segments. Best when someone needs to understand the full customer base before they start work."
            },
            {
                "key": "specific",
                "label": "Does this fit you?",
                "description": "Focus on the segment that matches this person. Say who else like them is already a client and what Brightline has done for them. Best when the person wants to know if they are the right fit."
            },
            {
                "key": "short",
                "label": "One sentence",
                "description": "Say who the main customer is in one clear sentence. No detail needed. Best for a quick, casual conversation."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, talk about how you would finish it. Use words from this lesson. There is no one right answer — share your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "Who does Brightline work with?",
                "salespersonStart": "We work with small and medium-sized businesses. Our main audience is",
                "suggestedCompletion": "marketing managers and business owners who want to grow their brand online. We split them into segments so we can talk to each group in the right way."
            },
            {
                "customerLine": "How is your customer different from a client?",
                "salespersonStart": "A customer might buy our product once. A client is someone who",
                "suggestedCompletion": "pays for an ongoing service and works with us over a longer time. Most of the companies we work with are clients — they use Brightline every month."
            },
            {
                "customerLine": "Do you know what your customers need?",
                "salespersonStart": "Yes — we find out by talking to our clients directly. We ask them questions and also",
                "suggestedCompletion": "look at data from past campaigns to see what worked well. That way we can match our message to the needs of each customer group."
            },
            {
                "customerLine": "What does your target audience look like?",
                "salespersonStart": "Our main target is small business owners and marketing managers. Our audience is mostly made up of",
                "suggestedCompletion": "people between 25 and 45 who run or work in a small company. We focus on businesses that want to grow online and do not have a big budget for marketing."
            }
        ]
    }
},
};
