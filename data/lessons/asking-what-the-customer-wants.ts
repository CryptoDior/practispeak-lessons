import { Lesson } from '@/types/lesson';

export const askingWhatTheCustomerWants: Lesson = {
  slug: 'asking-what-the-customer-wants',
  title: 'Asking What the Customer Wants',
  subtitle: 'How to ask the right questions before you recommend anything',
  level: 'A1-A2',
  description: 'Learn the words and phrases sales professionals use to discover what a customer really needs — from asking about problems and priorities to finding the right fit and recommending a solution.',
  heroImage: '/images/asking-what-the-customer-wants-hero.png',

  vocabulary: [
    {
      word: 'RECOMMEND',
      partOfSpeech: 'verb',
      definition: 'To suggest something as the best choice for someone.',
      example: "Before I recommend a plan, I need to understand what you're looking for.",
      imageSlug: '/images/recommend.png',
    },
    {
      word: 'PROBLEM',
      partOfSpeech: 'noun',
      definition: 'A situation that causes difficulty or needs to be fixed.',
      example: "Our main problem is that our tools don't connect with each other.",
      imageSlug: '/images/problem.png',
    },
    {
      word: 'PRIORITY',
      partOfSpeech: 'noun',
      definition: 'The thing that is most important and needs attention first.',
      example: "What's your top priority right now — saving time or cutting costs?",
      imageSlug: '/images/priority.png',
    },
    {
      word: 'GOAL',
      partOfSpeech: 'noun',
      definition: 'Something you want to achieve or reach.',
      example: 'Our goal is to get better visibility into what the team is working on.',
      imageSlug: '/images/goal.png',
    },
    {
      word: 'FIT',
      partOfSpeech: 'noun',
      definition: "The right match for someone's needs or situation.",
      example: "It's a great fit for teams that want something powerful but easy to learn.",
      imageSlug: '/images/fit.png',
    },
    {
      word: 'OPTION',
      partOfSpeech: 'noun',
      definition: 'One of the choices available.',
      example: 'What option would you suggest for a team of about twelve people?',
      imageSlug: '/images/option.png',
    },
    {
      word: 'NEED',
      partOfSpeech: 'verb',
      definition: 'To require something — it is necessary or very important.',
      example: 'We need a tool that is simple enough for everyone on the team to use.',
      imageSlug: '/images/need.png',
    },
    {
      word: 'SOLUTION',
      partOfSpeech: 'noun',
      definition: 'An answer or fix to a problem.',
      example: 'Is there a solution for teams that already use three different apps?',
      imageSlug: '/images/solution.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT ARE YOU LOOKING FOR',
      definition: 'Ask a customer what they want or need — the key opening question in any needs discovery conversation.',
      example: 'Before I show you anything, what are you looking for in a project management tool?',
      imageSlug: '/images/what-are-you-looking-for.png',
    },
    {
      phrase: "WHAT'S YOUR MAIN PRIORITY",
      definition: 'Find out what the customer considers most important.',
      example: "What's your main priority right now — saving time, cutting costs, or better collaboration?",
      imageSlug: '/images/whats-your-main-priority.png',
    },
    {
      phrase: 'WHAT WOULD MAKE THIS A SUCCESS FOR YOU',
      definition: 'Ask the customer how they would know if the product or service was working.',
      example: 'What would make this a success for you six months from now?',
      imageSlug: '/images/what-would-make-this-a-success-for-you.png',
    },
    {
      phrase: 'HAVE YOU TRIED ANYTHING BEFORE',
      definition: "Find out what solutions the customer has already tried and what didn't work.",
      example: "Have you tried anything before, or is this the first time you're looking at this kind of tool?",
      imageSlug: '/images/have-you-tried-anything-before.png',
    },
    {
      phrase: "BASED ON WHAT YOU'VE TOLD ME",
      definition: 'Use this to transition from listening to recommending — show you were paying attention.',
      example: "Based on what you've told me, I'd suggest the Growth Plan.",
      imageSlug: '/images/based-on-what-youve-told-me.png',
    },
    {
      phrase: 'WOULD THAT WORK FOR YOU',
      definition: "Check whether your suggestion fits the customer's needs before moving forward.",
      example: 'The starter plan covers everything you mentioned — would that work for you?',
      imageSlug: '/images/would-that-work-for-you.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thanks for making time, Dana. Before I [[recommend:to suggest something as the best choice for someone]] a plan, I want to make sure I understand what you're looking for.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Of course. Right now our main [[problem:a situation that causes difficulty or needs to be fixed]] is that our team uses five different tools and nothing connects.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I hear that a lot. What is your top [[priority:the thing that is most important and needs attention first]] — saving time, cutting costs, or making it easier to work together?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Saving time, for sure. We waste hours every week just trying to track what everyone is doing.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'So your main [[goal:something you want to achieve or reach]] is better visibility into what your team is working on?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Exactly. And whatever we choose needs to be simple — that's non-negotiable for us.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's where Brightline stands out. It's a great [[fit:the right match for someone's needs or situation]] for teams that want something powerful but easy to learn.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Good to hear. What [[option:one of the choices available]] would you suggest for a team of about twelve people?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'd suggest the Growth Plan — it has everything you [[need:to require something that is necessary]] without the extra features you'd never use.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And is there a [[solution:an answer or fix to a problem]] for the fact that we currently use three different apps for tracking?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — Brightline connects with most of the tools you're already using, so you don't have to give anything up.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That's exactly what we needed to hear. Let's move forward.",
    }
  ],

  matchingExercise: [
    {
        "word": "RECOMMEND",
        "definition": "To suggest something as the best choice for someone"
    },
    {
        "word": "PROBLEM",
        "definition": "A situation that causes difficulty or needs to be fixed"
    },
    {
        "word": "PRIORITY",
        "definition": "The thing that is most important and needs attention first"
    },
    {
        "word": "GOAL",
        "definition": "Something you want to achieve or reach"
    },
    {
        "word": "FIT",
        "definition": "The right match for someone's needs or situation"
    },
    {
        "word": "OPTION",
        "definition": "One of the choices available"
    },
    {
        "word": "NEED",
        "definition": "To require something that is necessary"
    },
    {
        "word": "SOLUTION",
        "definition": "An answer or fix to a problem"
    }
],
  fillBlankExercise: [
    {
        "before": "Before I",
        "after": "anything, I want to understand what you're looking for.",
        "answer": "recommend"
    },
    {
        "before": "Our main",
        "after": "is that our tools don't connect with each other.",
        "answer": "problem"
    },
    {
        "before": "What is your top",
        "after": "right now — saving time or cutting costs?",
        "answer": "priority"
    },
    {
        "before": "Our",
        "after": "is to get better visibility into what the team is working on.",
        "answer": "goal"
    },
    {
        "before": "It's a great",
        "after": "for teams that want something powerful but easy to learn.",
        "answer": "fit"
    },
    {
        "before": "What",
        "after": "would you suggest for a team of about twelve people?",
        "answer": "option"
    },
    {
        "before": "We",
        "after": "a tool that is simple enough for everyone to use.",
        "answer": "need"
    },
    {
        "before": "Is there a",
        "after": "for teams that already use three different apps?",
        "answer": "solution"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley want to do before recommending anything?",
        "options": [
            "Show Dana the pricing page",
            "Understand what Dana is looking for",
            "Introduce Dana to a colleague",
            "Send Dana a quote"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Dana's main problem at work?",
        "options": [
            "Her team is too large to manage",
            "Her tools are too expensive",
            "Her team uses too many tools that don't connect",
            "She can't find a reliable supplier"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Dana's top priority?",
        "options": [
            "Cutting costs",
            "Saving time",
            "Better collaboration",
            "Easier reporting"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Dana's main goal, according to Riley?",
        "options": [
            "To reduce the number of employees",
            "To find a cheaper tool",
            "To get better visibility into what her team is working on",
            "To cancel her current subscriptions"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana say is non-negotiable?",
        "options": [
            "The price",
            "The number of features",
            "Simplicity",
            "Customer support"
        ],
        "correctIndex": 2
    },
    {
        "question": "Which plan does Riley suggest for Dana's team?",
        "options": [
            "The Starter Plan",
            "The Pro Plan",
            "The Enterprise Plan",
            "The Growth Plan"
        ],
        "correctIndex": 3
    },
    {
        "question": "How does Riley describe Brightline?",
        "options": [
            "The cheapest option on the market",
            "A great fit for teams that want something powerful but easy to learn",
            "The most popular tool in the industry",
            "A new product that just launched"
        ],
        "correctIndex": 1
    },
    {
        "question": "What solution does Riley offer for Dana's multi-app problem?",
        "options": [
            "A free migration service",
            "A custom integration built by Brightline",
            "Brightline connects with the tools they already use",
            "Dana's team would need to stop using their other apps"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "rolePlay": {
        "instructions": "Work in pairs. One student is the salesperson, the other is the potential customer. The salesperson's job is to ask questions and understand the customer's needs before making any recommendation. Try to keep talking for 3–5 minutes, then swap roles.",
        "scenarios": [
            {
                "label": "Service",
                "context": "You work for a managed IT support company. Your potential customer is an operations manager at a 30-person logistics company. They are having problems with their current IT setup but aren't sure exactly what they need.",
                "guidance": [
                    "Salesperson: Open by asking what they are looking for in an IT support provider",
                    "Customer: Describe the main problem — systems are slow and the team loses work when things crash",
                    "Salesperson: Ask what their top priority is — fixing reliability, cutting downtime, or reducing IT costs",
                    "Customer: Say reliability is the priority but budget is also a concern",
                    "Salesperson: Ask if they have tried any solutions before and what did not work",
                    "Customer: Explain they tried a freelancer but it was not reliable enough",
                    "Salesperson: Based on what you have heard, recommend the right option and explain why it is a good fit"
                ],
                "vocabToUse": [
                    "recommend",
                    "problem",
                    "priority",
                    "goal",
                    "fit",
                    "option",
                    "need",
                    "solution"
                ],
                "phrasesToUse": [
                    "WHAT ARE YOU LOOKING FOR",
                    "WHAT'S YOUR MAIN PRIORITY",
                    "HAVE YOU TRIED ANYTHING BEFORE",
                    "BASED ON WHAT YOU'VE TOLD ME",
                    "WOULD THAT WORK FOR YOU"
                ]
            },
            {
                "label": "Physical Product",
                "context": "You work for a company that sells commercial coffee machines to offices and hospitality businesses. Your potential customer manages a busy hotel that is looking to upgrade their breakfast service equipment.",
                "guidance": [
                    "Salesperson: Start by asking what they are looking for in a new coffee machine",
                    "Customer: Explain the problem — the current machine breaks down often and guests complain",
                    "Salesperson: Ask what the main priority is — reliability, speed, or the quality of the coffee",
                    "Customer: Say reliability is the goal — they cannot have the machine break during peak hours",
                    "Salesperson: Ask how many guests they serve and what their budget looks like",
                    "Customer: Give the numbers and ask what options are available at that price",
                    "Salesperson: Recommend the best fit based on what they have told you and explain the solution"
                ],
                "vocabToUse": [
                    "recommend",
                    "problem",
                    "priority",
                    "goal",
                    "fit",
                    "option",
                    "need",
                    "solution"
                ],
                "phrasesToUse": [
                    "WHAT ARE YOU LOOKING FOR",
                    "WHAT'S YOUR MAIN PRIORITY",
                    "WHAT WOULD MAKE THIS A SUCCESS FOR YOU",
                    "BASED ON WHAT YOU'VE TOLD ME",
                    "WOULD THAT WORK FOR YOU"
                ]
            },
            {
                "label": "Digital Product",
                "context": "You work for a company that sells CRM software to sales teams. Your potential customer is a sales manager at a growing e-commerce company. Their team is struggling to keep track of leads and follow-ups.",
                "guidance": [
                    "Salesperson: Ask what they are looking for in a CRM tool",
                    "Customer: Describe the problem — leads are falling through the cracks and follow-ups are missed",
                    "Salesperson: Ask what the main priority is — better tracking, automation, or team visibility",
                    "Customer: Say their goal is to make sure no lead is forgotten and follow-ups happen on time",
                    "Salesperson: Ask if they have tried any CRM tools before and what did not work",
                    "Customer: Say they tried a spreadsheet system but it became too messy as the team grew",
                    "Salesperson: Based on what you have heard, recommend an option that fits their needs and explain the solution"
                ],
                "vocabToUse": [
                    "recommend",
                    "problem",
                    "priority",
                    "goal",
                    "fit",
                    "option",
                    "need",
                    "solution"
                ],
                "phrasesToUse": [
                    "WHAT ARE YOU LOOKING FOR",
                    "WHAT'S YOUR MAIN PRIORITY",
                    "HAVE YOU TRIED ANYTHING BEFORE",
                    "BASED ON WHAT YOU'VE TOLD ME",
                    "WOULD THAT WORK FOR YOU"
                ]
            }
        ]
    },
    "discussion": {
        "instructions": "Discuss these questions with your group. Try to use vocabulary and phrases from this lesson. Give reasons for your answers and listen to your classmates' opinions.",
        "questions": [
            "Riley asks about Dana's priority before making any recommendation. Why is this important? How do you find out what a customer's real priorities are in your industry?",
            "Riley reframes Dana's frustration ('we waste hours every week') as a goal ('better visibility into what your team is working on'). Why might turning a problem into a goal be a useful technique when talking to customers?",
            "Dana says simplicity is 'non-negotiable.' Have you ever had a customer reject a solution because it was too complicated or not the right fit? What did you do?",
            "Think about a time you had to ask questions to understand what someone needed — a customer, a colleague, or a manager. What questions worked best? What would you ask differently now?"
        ]
    }
},
};
