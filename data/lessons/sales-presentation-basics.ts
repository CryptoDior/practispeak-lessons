import { Lesson } from '@/types/lesson';

export const salesPresentationBasics: Lesson = {
  slug: 'sales-presentation-basics',
  title: 'Sales Presentation Basics',
  subtitle: 'How to open, structure, and close a presentation using introduction, agenda, key points, and summary',
  level: 'B1-B2',
  description: 'A great sales presentation is not about slides or design — it is about structure. When your audience knows where they are, where they are going, and what matters most, they can focus on the content instead of trying to follow along. This lesson teaches you the language of professional presentations: how to open with confidence, present your agenda clearly, guide your audience through key points, and close with a summary that makes the decision easy.',
  heroImage: '/images/sales-presentation-basics-hero.png',

  vocabulary: [
    {
      word: 'INTRODUCTION',
      partOfSpeech: 'noun',
      definition: 'The opening section of a presentation where you welcome the audience, establish context, and explain what you will cover. A strong introduction sets expectations and earns attention.',
      example: "Riley opened her presentation with a clear introduction: Good morning, everyone. I'm Riley from Practispeak Solutions. In the next 30 minutes, I'll show you exactly how teams like yours are saving time and closing more deals.",
      imageSlug: '/images/sales-presentation-basics-introduction.png',
    },
    {
      word: 'AGENDA',
      partOfSpeech: 'noun',
      definition: 'A structured list of topics you will cover, shared at the start of a presentation. Presenting the agenda upfront helps the audience follow along and shows that your time together is well organised.',
      example: "Riley said: To set the agenda — I'll be covering three main areas today: the challenge, the solution, and the results. The whole presentation should take about 30 minutes, with time for questions at the end.",
      imageSlug: '/images/sales-presentation-basics-agenda.png',
    },
    {
      word: 'SIGNPOST',
      partOfSpeech: 'noun',
      definition: "A word or phrase that guides the listener through the structure of a presentation — telling them where you are and where you are going. Common signposts: 'moving on to', 'as I mentioned', 'to summarise'.",
      example: 'Riley used signposts throughout her presentation so the team always knew where they were: Moving on to the results section — let me share what our customers are seeing in practice after 90 days on the platform.',
      imageSlug: '/images/sales-presentation-basics-signpost.png',
    },
    {
      word: 'TRANSITION',
      partOfSpeech: 'noun',
      definition: 'A phrase used to move smoothly from one section of a presentation to the next. Good transitions link ideas together and make the presentation feel natural rather than disconnected.',
      example: "Riley moved from the problem to the solution with a clean transition: Now that we've established the challenge, let me show you exactly how our platform addresses each of those pain points — one by one.",
      imageSlug: '/images/sales-presentation-basics-transition.png',
    },
    {
      word: 'EMPHASIS',
      partOfSpeech: 'noun',
      definition: "Extra importance or stress given to a point so the audience pays particular attention to it. You create emphasis by slowing down, repeating a key idea, or using phrases like 'the key point here is'.",
      example: 'Riley paused before the most important stat: I want to place particular emphasis on this number — 30% reduction in admin time within 90 days. That is not a projection. That is what our customers are reporting right now.',
      imageSlug: '/images/emphasis.png',
    },
    {
      word: 'SUMMARY',
      partOfSpeech: 'noun',
      definition: 'A brief recap of the main points at the end of a presentation. A strong summary reminds the audience of what they heard, reinforces the key messages, and sets up the next step.',
      example: "Riley closed with a clear summary: To bring everything together — we've talked about the challenge your team is facing, the platform that addresses it, and the results our customers are achieving. The question is simply whether this is the right moment for your team.",
      imageSlug: '/images/sales-presentation-basics-summary.png',
    },
    {
      word: 'ENGAGE',
      partOfSpeech: 'verb',
      definition: "To capture and hold the audience's attention. A presenter who engages their audience asks questions, tells stories, and connects the content directly to the listener's experience.",
      example: 'Riley knew that data alone would not engage the team — so she opened with a question: Does your team spend more time on reporting than on selling? That single question changed the energy in the room immediately.',
      imageSlug: '/images/sales-presentation-basics-engage.png',
    },
    {
      word: 'STRUCTURE',
      partOfSpeech: 'noun',
      definition: 'The organised framework of a presentation — introduction, body, and conclusion. A clear structure helps the audience follow the content and remember the key messages after the presentation ends.',
      example: 'Marcus said afterwards: The structure made it very easy to follow. I always knew where we were and what was coming next — that made the whole presentation feel professional and credible.',
      imageSlug: '/images/sales-presentation-basics-structure.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "I'D LIKE TO START BY...",
      definition: "The standard professional opener for a presentation section or the whole presentation. 'Start by' introduces the first action — what you will do to begin. Always use 'by' followed by '-ing'.",
      example: "Riley opened the presentation: I'd like to start by giving you a brief overview of the challenge we're seeing across mid-size sales teams right now — because I think it will sound very familiar.",
      imageSlug: '/images/id-like-to-start-by.png',
    },
    {
      phrase: "TODAY I'LL BE COVERING...",
      definition: "A clear, professional way to present the agenda. 'I'll be covering' uses the future continuous to signal that these topics will unfold over the course of the presentation.",
      example: "Riley said: Today I'll be covering three main areas — the challenge, the solution, and the results. Each section builds on the last, so by the end you'll have a complete picture of how this works for a team like yours.",
      imageSlug: '/images/today-ill-be-covering.png',
    },
    {
      phrase: 'MOVING ON TO...',
      definition: 'The standard transition phrase for moving from one section to the next in a presentation. It is a signpost — it tells the audience they are now moving forward to new content.',
      example: "Riley finished the problem section and said: Moving on to the solution — I'd like to show you exactly how our platform addresses the three pain points we just discussed. Let me start with the reporting challenge.",
      imageSlug: '/images/moving-on-to.png',
    },
    {
      phrase: 'THE KEY POINT HERE IS...',
      definition: 'A phrase used to signal the most important idea in a section. It tells the audience to pay close attention — this is the thing they should remember even if they forget everything else.',
      example: "Riley said: The key point here is that this is not a people problem — your team is not the issue. It's a systems problem. And a systems problem has a systems solution. That's exactly what we're offering.",
      imageSlug: '/images/the-key-point-here-is.png',
    },
    {
      phrase: 'TO SUMMARISE...',
      definition: 'The phrase that opens the closing section of a presentation. It signals that you are now recapping the main points — giving the audience a final, clear reminder of what they just heard.',
      example: "Riley moved into the summary: To summarise — we've looked at the challenge, the platform, and the results. In 90 days, our average customer reduces admin time by 30% and increases deals closed by 20%. That's the offer on the table.",
      imageSlug: '/images/to-summarise.png',
    },
    {
      phrase: "I'D BE HAPPY TO TAKE ANY QUESTIONS",
      definition: "The professional phrase for opening the Q&A section after a presentation. 'Take' is the standard verb for questions in a presentation context — not 'answer' or 'receive'.",
      example: "Riley closed the formal presentation and said: That brings me to the end of the main content. I'd be happy to take any questions now — and after that, I'd like to move into a live demo if everyone's ready.",
      imageSlug: '/images/id-be-happy-to-take-any-questions.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good morning, everyone. Thank you for joining us. I'm Riley from Practispeak Solutions, and I'm delighted to be presenting to you today.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Thanks for coming in, Riley. The whole team is looking forward to hearing more.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Wonderful. To set the [[agenda:a structured list of topics to be covered in a presentation]] — today I'll be covering three main areas: the challenge your team is facing, our solution, and the results our customers are seeing in practice. The whole presentation should take around 30 minutes, with time for questions at the end.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That sounds well [[structure:the organised framework of a presentation — introduction, body, conclusion]]d. Please go ahead.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'd like to start by talking about the challenge. Most mid-size sales teams are spending more time managing data than actually selling. Does that resonate with your experience?",
    },
    {
      speaker: 'Sarah',
      speakerColor: 'blue',
      speakerAvatar: '/images/sarah-icon.png',
      text: 'Absolutely — our team spends hours every week just pulling reports together from different tools.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's exactly what we hear. The key point here is that this is not a people problem — it's a systems problem. And a systems problem has a systems solution. I want to place real [[emphasis:extra importance given to a point so the audience pays attention]] on that distinction.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Moving on to the solution. Our platform automates your reporting, connects your existing tools — including Salesforce — and gives your managers real-time visibility across the entire pipeline.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Could you go into more detail on the Salesforce integration? That's particularly important for Sarah's team.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Of course — it's a native integration, so no third-party connector is required. I'll come back to that in the demo. But to [[emphasise the transition:to signal moving to a new section]]: it works out of the box with no IT project on your side. That's the key [[signpost:a word or phrase that guides the listener through the presentation structure]] for Sarah's team — zero configuration needed.",
    },
    {
      speaker: 'Sarah',
      speakerColor: 'blue',
      speakerAvatar: '/images/sarah-icon.png',
      text: "That's reassuring. Implementation complexity was one of our biggest concerns.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Moving on to the results section. I'd like to share what this looks like in practice for teams who have already made the switch — because I think the numbers will speak for themselves.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Yes — this is the part I'm most interested in.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'To [[summary:a brief recap of the main points at the end of a presentation]] — I mean, to summarise the results — our customers see three consistent improvements in the first 90 days: a 30% reduction in admin time, a 20% increase in deals closed, and significantly better manager visibility across the pipeline.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "To bring this all together — what we're offering is not just a tool. It's a platform that gives your team more time to sell and your managers better information to lead with.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That was a very clear presentation, Riley. You've covered everything we needed to hear.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thank you. I'd be happy to take any questions now before we move into the live demo.",
    }
  ],

  matchingExercise: [
    {
        "word": "introduction",
        "definition": "the opening section of a presentation — welcomes the audience and sets expectations"
    },
    {
        "word": "agenda",
        "definition": "a structured list of topics to be covered in a presentation"
    },
    {
        "word": "signpost",
        "definition": "a word or phrase that guides the listener through the presentation structure"
    },
    {
        "word": "transition",
        "definition": "a phrase used to move smoothly from one section to the next"
    },
    {
        "word": "emphasis",
        "definition": "extra importance given to a point so the audience pays attention"
    },
    {
        "word": "summary",
        "definition": "a brief recap of the main points at the end of a presentation"
    },
    {
        "word": "engage",
        "definition": "to capture and hold the audience's attention"
    },
    {
        "word": "structure",
        "definition": "the organised framework of a presentation — introduction, body, conclusion"
    }
],
  fillBlankExercise: [
    {
        "before": "I'd like to start ",
        "after": " giving a brief overview of the three areas I'll cover today.",
        "answer": "by"
    },
    {
        "before": "Moving ",
        "after": " to the results section — let me share what our customers are experiencing.",
        "answer": "on"
    },
    {
        "before": "The key ",
        "after": " here is that this is a systems problem, not a people problem.",
        "answer": "point"
    },
    {
        "before": "To ",
        "after": " — we've covered the challenge, the solution, and the results in the first 90 days.",
        "answer": "summarise"
    },
    {
        "before": "I'd be happy to ",
        "after": " any questions you have before we move into the live demo.",
        "answer": "take"
    },
    {
        "before": "A clear ",
        "after": " — introduction, body, and summary — helps the audience follow and remember your key messages.",
        "answer": "structure"
    }
],
  multipleChoiceExercise: [
    {
        "question": "How many main areas does Riley say she will cover in the presentation?",
        "options": [
            "Two",
            "Three",
            "Four"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley describe the problem that sales teams face?",
        "options": [
            "It's a people problem — the team needs more training",
            "It's a systems problem — and a systems problem has a systems solution",
            "It's a management problem — managers need better tools"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say about the Salesforce integration?",
        "options": [
            "It requires a third-party connector and some configuration",
            "It takes two weeks to set up with IT support",
            "It is native — it works out of the box with no IT project needed"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley offer at the end of the presentation?",
        "options": [
            "A follow-up email with the slides",
            "A contract to review",
            "Time for questions before moving into a live demo"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Have you ever given a presentation at work — to your team, your manager, or a client? What was the hardest part?",
        "When you watch a presentation or listen to a pitch, what makes it easy to follow? What makes it confusing or hard to concentrate on?",
        "Think about the best presenter you have ever seen or heard. What did they do that made them so effective?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "I'd like to start _____ giving a brief overview of what we'll cover today.",
            "options": [
                "with",
                "by",
                "from"
            ],
            "correctIndex": 1,
            "explanation": "'Start by' is the correct phrase — 'by' introduces how you begin, followed by '-ing'. We say 'start by giving', 'start by explaining', 'start by asking a question'. 'Start with' is possible but is followed by a noun ('start with an overview'), not an '-ing' verb. 'Start from' is not used in this way."
        },
        {
            "sentence": "Moving _____ to the results section — let me share what our customers are experiencing.",
            "options": [
                "along",
                "in",
                "on"
            ],
            "correctIndex": 2,
            "explanation": "'Moving on to' is the fixed transition phrase used to shift from one section of a presentation to the next. 'Moving along to' is not standard. 'Moving in to' means physically entering a space — a completely different meaning. Always use 'moving on to' as your transition signpost."
        },
        {
            "sentence": "Today I'll be _____ three main areas — the challenge, the solution, and the results.",
            "options": [
                "discussing",
                "covering",
                "addressing"
            ],
            "correctIndex": 1,
            "explanation": "'I'll be covering' is the standard phrase for describing what a presentation will address — 'cover' is the most natural and widely used verb in this context. 'Discussing' and 'addressing' are both possible but less common as the standard phrase for a presentation agenda. 'Covering' is what native speakers use most reliably."
        },
        {
            "sentence": "The key _____ here is that this is a systems problem — not a people problem.",
            "options": [
                "message",
                "issue",
                "point"
            ],
            "correctIndex": 2,
            "explanation": "'The key point' is the standard phrase for signalling the most important idea in a section. 'The key message' is also used but is more common for the overall takeaway of a whole presentation, not a single section. 'The key issue' implies a problem, not an insight. 'The key point here is' is the most precise and professional option."
        },
        {
            "sentence": "To _____ — our customers see three consistent improvements in the first 90 days.",
            "options": [
                "conclude",
                "summarise",
                "finish"
            ],
            "correctIndex": 1,
            "explanation": "'To summarise' is the specific presentation phrase for recapping main points at the close of a section or the whole presentation. 'To conclude' is used for final closing statements — often more formal than a summary. 'To finish' is too casual for a professional presentation and does not signal a recap."
        },
        {
            "sentence": "Thank you for _____ us today — I'd like to start with a quick question.",
            "options": [
                "join",
                "joining",
                "to join"
            ],
            "correctIndex": 1,
            "explanation": "After a preposition like 'for', always use '-ing'. 'Thank you for joining' is correct. 'Thank you for join' and 'thank you for to join' are both incorrect. This is the same rule as 'thank you for coming', 'thank you for attending', 'sorry for being late' — preposition + '-ing'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "Before you start — can you tell us what you'll be covering today?",
                "options": [
                    "I'll just take you through the platform — it should not take too long.",
                    "Today I'll be covering three main areas — the challenge your team faces, our solution, and the results our customers are seeing. The whole presentation takes around 30 minutes, with time for questions at the end.",
                    "I have quite a lot to cover — let's just get started and I'll explain as we go."
                ],
                "correctIndex": 1,
                "explanation": "Option B presents the agenda clearly and professionally — it gives the audience a map of what is coming and how long it will take. This immediately builds confidence in the presenter. Option A is too vague and gives no structure. Option C avoids the question entirely and signals a lack of preparation."
            },
            {
                "customerLine": "That's a lot of information. Can you tell us what the single most important thing is?",
                "options": [
                    "The key point is this — your team is losing selling time to admin, and our platform gives it back. In 90 days, our customers close 20% more deals. Everything else is detail.",
                    "It's all equally important — I'd recommend listening to everything before making a judgement.",
                    "The most important thing is probably the price — let me talk about that now."
                ],
                "correctIndex": 0,
                "explanation": "Option A uses the key point phrase effectively, distils the message into one powerful sentence, and adds a concrete result — exactly what a confused audience needs. Option B avoids the question and can frustrate the listener. Option C pivots to price too early, which shifts the conversation away from value."
            },
            {
                "customerLine": "That was a great presentation. What happens next?",
                "options": [
                    "I'll send the slides over and you can review them at your own pace.",
                    "To summarise what we covered — then I'd suggest moving into a live demo so you can see the platform working with your own data. Would that work for everyone?",
                    "I'd be happy to take any questions first, then we can discuss next steps."
                ],
                "correctIndex": 2,
                "explanation": "Option C is the most professional close — it offers Q&A before proposing next steps, which is the standard structure. Option A hands over control and loses momentum. Option B jumps straight to the demo without checking whether the audience has questions — always offer Q&A after a presentation before moving on."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Good morning, everyone. Thank you for join us today."
            },
            {
                "speaker": "Marcus",
                "text": "Thanks for coming in. We're ready when you are."
            },
            {
                "speaker": "Riley",
                "text": "To set the agenda — I'll be covering three main areas. The whole presentation should take 30 minutes."
            },
            {
                "speaker": "Marcus",
                "text": "That sounds well structured."
            },
            {
                "speaker": "Riley",
                "text": "Moving in to the solution section — let me show you how the platform addresses each pain point."
            },
            {
                "speaker": "Riley",
                "text": "To summarise — our customers see a 30% reduction in admin time and a 20% increasing in deals closed."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "for join",
                "correction": "for joining",
                "explanation": "After a preposition like 'for', always use the '-ing' form — never the base verb. 'Thank you for joining', 'thank you for coming', 'sorry for being late'. 'Thank you for join' is not correct in English. This rule applies to all prepositions: 'interested in learning', 'good at presenting', 'instead of calling'."
            },
            {
                "lineIndex": 4,
                "incorrectText": "Moving in to",
                "correction": "Moving on to",
                "explanation": "'Moving on to' is the fixed transition phrase used in presentations to signal you are moving to the next section. 'Moving in to' means physically entering a space — a completely different meaning. This is one of the most important signpost phrases in English presentations: always 'moving on to', never 'moving in to'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "increasing",
                "correction": "increase",
                "explanation": "After 'a 20%', you need a noun — not a present participle. 'A 20% increase' is correct; 'a 20% increasing' is not. This applies to all percentage result phrases: 'a 30% reduction', 'a 15% improvement', 'a 25% growth'. The number and percentage sign are always followed by the noun form."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "Before you start, can you give us a quick overview of what you'll cover?",
                "salespersonStart": "Of course. To set the agenda — today I'll be covering three main areas...",
                "suggestedCompletion": "the challenge your team is facing, our solution, and the results our customers are seeing. The whole presentation should take about 30 minutes, with time for questions at the end."
            },
            {
                "customerLine": "That's interesting. What's the most important thing you want us to take away?",
                "salespersonStart": "The key point I want to emphasise is this —",
                "suggestedCompletion": "your team's time is being lost to admin, not to a lack of effort. Our platform gives that time back. In 90 days, our customers close 20% more deals. That's the core message."
            },
            {
                "customerLine": "You've covered a lot of ground. Can you remind us of the main points?",
                "salespersonStart": "Of course. To summarise —",
                "suggestedCompletion": "we've talked about the challenge your team faces, how our platform addresses it, and the measurable results — a 30% reduction in admin time and a 20% increase in deals closed within the first 90 days."
            }
        ]
    }
},
};
