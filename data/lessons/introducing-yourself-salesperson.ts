import { Lesson } from '@/types/lesson';

export const introducingYourselfSalesperson: Lesson = {
  slug: 'introducing-yourself-salesperson',
  title: 'Introducing Yourself as a Salesperson',
  subtitle: 'The phrases sales people use to meet new contacts and clients',
  level: 'A1-A2',
  description: 'Learn the professional phrases sales people use to introduce themselves, their company, and their role at networking events and client meetings.',
  heroImage: '/images/introducing-yourself-salesperson-hero.png',

  vocabulary: [
    {
      word: 'CONTACT',
      partOfSpeech: 'noun',
      definition: 'A person you know, especially through work, who might help you.',
      example: "It's always good to make new contacts at industry events.",
      imageSlug: '/images/contact.png',
    },
    {
      word: 'COMPANY',
      partOfSpeech: 'noun',
      definition: 'A business that makes or sells things.',
      example: 'What company are you with?',
      imageSlug: '/images/company.png',
    },
    {
      word: 'JOB',
      partOfSpeech: 'noun',
      definition: 'The work a person does to earn money.',
      example: 'My job is to help new customers find the right plan.',
      imageSlug: '/images/job.png',
    },
    {
      word: 'TEAM',
      partOfSpeech: 'noun',
      definition: 'A group of people who work together.',
      example: "I'm on the sales team at Brightline.",
      imageSlug: '/images/team.png',
    },
    {
      word: 'WORK',
      partOfSpeech: 'verb',
      definition: 'To do a job, usually to earn money.',
      example: 'I work for a software company called Brightline.',
      imageSlug: '/images/work.png',
    },
    {
      word: 'MEET',
      partOfSpeech: 'verb',
      definition: 'To see and talk with someone for the first time.',
      example: "It's great to meet you — I've heard a lot about your agency.",
      imageSlug: '/images/meet.png',
    },
    {
      word: 'INTRODUCE',
      partOfSpeech: 'verb',
      definition: 'To tell someone your name and a little about yourself when you meet.',
      example: "Let me introduce myself — I'm Riley from the Brightline sales team.",
      imageSlug: '/images/introduce.png',
    },
    {
      word: 'COLLEAGUE',
      partOfSpeech: 'noun',
      definition: 'A person you work with.',
      example: "I'd like you to meet my colleague, Carlos — he leads our team.",
      imageSlug: '/images/colleague.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT BRINGS YOU HERE TODAY',
      definition: 'A natural way to start a conversation with someone new at an event.',
      example: 'So, what brings you here today?',
      imageSlug: '/images/what-brings-you-here-today.png',
    },
    {
      phrase: 'I WORK FOR',
      definition: 'Tell someone the name of the company you work for.',
      example: 'I work for a software company called Brightline.',
      imageSlug: '/images/i-work-for.png',
    },
    {
      phrase: "I'D LOVE TO STAY IN TOUCH",
      definition: "Tell someone you'd like to keep talking with them after today.",
      example: "It was great talking with you — I'd love to stay in touch.",
      imageSlug: '/images/id-love-to-stay-in-touch.png',
    },
    {
      phrase: 'WHAT DO YOU DO',
      definition: "A friendly way to ask about someone's job or company.",
      example: 'So, what do you do, Dana?',
      imageSlug: '/images/what-do-you-do.png',
    },
    {
      phrase: "I'M ON THE SALES TEAM",
      definition: "Tell someone which team or department you're part of.",
      example: "I'm on the sales team — I help new customers get started.",
      imageSlug: '/images/im-on-the-sales-team.png',
    },
    {
      phrase: 'LET ME INTRODUCE YOU TO',
      definition: 'Help two people meet each other by introducing them.',
      example: 'Let me introduce you to my colleague, Carlos — he leads our team.',
      imageSlug: '/images/let-me-introduce-you-to.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'So, what brings you here today?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I'm always looking to make new [[contacts:a person you know, especially through work, who might help you]] in the industry — I run a small marketing agency.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's great. I [[work:to do a job, usually to earn money]] for Brightline — what does your [[company:a business that makes or sells things]] focus on?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Mostly social media campaigns for small businesses. And what's your role at Brightline?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "My [[job:the work a person does to earn money]] is to help new customers find the right plan. I'm on the sales [[team:a group of people who work together]].",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That's exactly the kind of thing we've been looking for.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Perfect timing, then. Let me [[introduce:to tell someone your name and a little about yourself when you meet]] you to my [[colleague:a person you work with]], Carlos — he leads our team and knows the software inside and out.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I'd love that.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Carlos, this is Dana — she runs a marketing agency and might be a great fit for Brightline.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'blue',
      speakerAvatar: '/images/sam-icon.png',
      text: "It's great to [[meet:to see and talk with someone for the first time]] you, Dana. I'd love to hear more about your team and what you're looking for.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Thanks — I'd love to stay in touch either way.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Of course — here's my card. Feel free to reach out anytime.",
    }
  ],

  matchingExercise: [
    {
        "word": "CONTACT",
        "definition": "A person you know, especially through work, who might help you"
    },
    {
        "word": "COMPANY",
        "definition": "A business that makes or sells things"
    },
    {
        "word": "JOB",
        "definition": "The work a person does to earn money"
    },
    {
        "word": "TEAM",
        "definition": "A group of people who work together"
    },
    {
        "word": "WORK",
        "definition": "To do a job, usually to earn money"
    },
    {
        "word": "MEET",
        "definition": "To see and talk with someone for the first time"
    },
    {
        "word": "INTRODUCE",
        "definition": "To tell someone your name and a little about yourself"
    },
    {
        "word": "COLLEAGUE",
        "definition": "A person you work with"
    }
],
  fillBlankExercise: [
    {
        "before": "It's always good to make new",
        "after": "at industry events.",
        "answer": "contact"
    },
    {
        "before": "What",
        "after": "are you with?",
        "answer": "company"
    },
    {
        "before": "My",
        "after": "is to help new customers find the right plan.",
        "answer": "job"
    },
    {
        "before": "I'm on the sales",
        "after": "at Brightline.",
        "answer": "team"
    },
    {
        "before": "I",
        "after": "for a software company called Brightline.",
        "answer": "work"
    },
    {
        "before": "It's great to",
        "after": "you, Dana.",
        "answer": "meet"
    },
    {
        "before": "Let me",
        "after": "you to my colleague, Carlos.",
        "answer": "introduce"
    },
    {
        "before": "I'd like you to meet my",
        "after": ", Carlos.",
        "answer": "colleague"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the name of Riley's company?",
        "options": [
            "Skyline",
            "Brightline",
            "Maple Tech",
            "Forward Co"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley's company make?",
        "options": [
            "Office furniture",
            "Project management software",
            "Marketing posters",
            "Mobile games"
        ],
        "correctIndex": 1
    },
    {
        "question": "What team is Riley on?",
        "options": [
            "The design team",
            "The support team",
            "The sales team",
            "The finance team"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Dana do?",
        "options": [
            "She runs a marketing agency",
            "She works in IT support",
            "She's a software engineer",
            "She owns a coffee shop"
        ],
        "correctIndex": 0
    },
    {
        "question": "Who does Riley introduce Dana to?",
        "options": [
            "A customer",
            "Riley's manager",
            "Riley's colleague, Carlos",
            "Riley's friend from college"
        ],
        "correctIndex": 2
    },
    {
        "question": "Where does this conversation most likely take place?",
        "options": [
            "In a restaurant",
            "At an industry networking event",
            "On a phone call",
            "In a job interview"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Carlos want to do after meeting Dana?",
        "options": [
            "Reschedule for another day",
            "Hear more about Dana's team and what she needs",
            "Send Dana a price list",
            "Ask Dana for a discount"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley describe their job?",
        "options": [
            "Fixing technical problems",
            "Designing the company logo",
            "Helping new customers find the right plan",
            "Managing the accounts department"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    rolePlay: {
      instructions: "Work in pairs. One student is the salesperson, the other is the new contact. Use the vocabulary and phrases from this lesson in your conversation. Try to keep talking for 3–5 minutes, then swap roles.",
      scenarios: [
        {
          label: "Service",
          context: "You work for a B2B consulting firm that helps companies improve their internal processes. You are at an industry conference and meet someone who works in operations at a growing company.",
          guidance: [
            "Salesperson: Start the conversation naturally — ask what brings them to the event",
            "Contact: Answer and ask what the salesperson does",
            "Salesperson: Explain your job and introduce your company",
            "Contact: Show interest — ask more about the team and how the service works",
            "Salesperson: Describe your role on the team and what makes your company different",
            "Contact: Mention a challenge they are facing that your service might help with",
            "Salesperson: Close by introducing a colleague and suggesting staying in touch",
          ],
          vocabToUse: ["contact", "company", "job", "team", "work", "meet", "introduce", "colleague"],
          phrasesToUse: ["WHAT BRINGS YOU HERE TODAY", "I WORK FOR", "I'M ON THE SALES TEAM", "LET ME INTRODUCE YOU TO", "I'D LOVE TO STAY IN TOUCH"],
        },
        {
          label: "Physical Product",
          context: "You work for an office supply company that sells ergonomic furniture and equipment to businesses. You are at a trade show and meet someone who manages a large open-plan office.",
          guidance: [
            "Salesperson: Greet the contact and ask what brings them to the trade show",
            "Contact: Explain they are looking for new suppliers — ask what the salesperson sells",
            "Salesperson: Introduce your company and explain what you sell",
            "Contact: Ask about the team and who makes decisions about orders",
            "Salesperson: Explain your role and introduce a colleague who handles B2B accounts",
            "Contact: Ask how they can stay in touch after the event",
            "Salesperson: Exchange details and suggest a follow-up meeting",
          ],
          vocabToUse: ["contact", "company", "job", "team", "work", "meet", "introduce", "colleague"],
          phrasesToUse: ["WHAT BRINGS YOU HERE TODAY", "I WORK FOR", "WHAT DO YOU DO", "LET ME INTRODUCE YOU TO", "I'D LOVE TO STAY IN TOUCH"],
        },
        {
          label: "Digital Product",
          context: "You work for a SaaS company that sells HR management software to mid-sized businesses. You are at a networking event and meet someone who works in HR at a company that is growing fast.",
          guidance: [
            "Salesperson: Start the conversation — ask what brings them to the event",
            "Contact: Explain their role and ask what the salesperson does",
            "Salesperson: Introduce yourself, your company, and your job on the sales team",
            "Contact: Ask what makes the software different — mention a problem they are trying to solve",
            "Salesperson: Explain how your product helps and how their team would use it",
            "Contact: Ask who else on the salesperson's team they should meet",
            "Salesperson: Introduce a technical colleague and suggest staying in touch",
          ],
          vocabToUse: ["contact", "company", "job", "team", "work", "meet", "introduce", "colleague"],
          phrasesToUse: ["WHAT BRINGS YOU HERE TODAY", "I WORK FOR", "I'M ON THE SALES TEAM", "LET ME INTRODUCE YOU TO", "I'D LOVE TO STAY IN TOUCH"],
        },
      ],
    },
    discussion: {
      instructions: "Discuss these questions with your group. Try to use vocabulary and phrases from this lesson. Give reasons for your answers and listen to your classmates' opinions.",
      questions: [
        "In the dialogue, Riley asks 'What brings you here today?' instead of jumping straight into a sales pitch. Why do you think starting a conversation this way is more effective?",
        "Riley introduces Dana to a colleague, Carlos, who 'knows the software inside and out.' Why is it useful for a salesperson to involve a colleague in a conversation with a new contact?",
        "Dana says she is 'always looking to make new contacts in the industry.' How important is networking in your industry? What is the best way to make a good first impression?",
        "Think about the last time you met someone new in a professional setting. How did you introduce yourself? Is there anything you would do differently now?",
      ],
    },
  },
};
