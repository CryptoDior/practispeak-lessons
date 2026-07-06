import { Lesson } from '@/types/lesson';

export const salesCallStructure: Lesson = {
  slug: 'sales-call-structure',
  title: 'Sales Call Structure',
  subtitle: 'The five phases of a professional sales call — and the language that moves you through each one',
  level: 'B1-B2',
  description: 'Learn how to structure a sales call from first word to agreed next step — opening, purpose, discovery questions, offer, and close — using the phrases that signal each phase clearly and professionally.',
  heroImage: '/images/sales-call-structure-hero.png',

  vocabulary: [
    {
      word: 'OPENING',
      partOfSpeech: 'noun',
      definition: 'The first part of a call where you introduce yourself, build brief rapport, and set the tone before moving to business.',
      example: 'A strong opening puts the prospect at ease — it signals that you are organised and that their time will be well spent.',
      imageSlug: '/images/opening.png',
    },
    {
      word: 'PURPOSE',
      partOfSpeech: 'noun',
      definition: 'The clear, specific reason for the call — stated early so the prospect knows why they are talking to you.',
      example: 'Stating your purpose in the first 60 seconds removes uncertainty and gives the prospect something concrete to respond to.',
      imageSlug: '/images/sales-call-structure-purpose.png',
    },
    {
      word: 'AGENDA',
      partOfSpeech: 'noun',
      definition: 'A brief outline of what the call will cover, shared at the start to set expectations and demonstrate structure.',
      example: "I always share a quick agenda at the top of a call — it tells the prospect exactly where we're going and makes the time feel controlled.",
      imageSlug: '/images/sales-call-structure-agenda.png',
    },
    {
      word: 'RAPPORT',
      partOfSpeech: 'noun',
      definition: 'A warm, comfortable relationship built through conversation — the feeling that you are talking to someone who genuinely understands you.',
      example: "Good rapport doesn't require small talk for its own sake — it comes from listening carefully and reflecting back what you hear.",
      imageSlug: '/images/rapport.png',
    },
    {
      word: 'OBJECTION',
      partOfSpeech: 'noun',
      definition: 'A concern, doubt, or reason a prospect raises for not moving forward — a natural and expected part of every sales call.',
      example: 'An objection is not a rejection — it is usually a question in disguise that tells you exactly what the prospect needs to hear.',
      imageSlug: '/images/sales-call-structure-objection.png',
    },
    {
      word: 'COMMITMENT',
      partOfSpeech: 'noun',
      definition: 'An agreement or promise to take a specific next step — the concrete outcome you are working toward at the end of every call.',
      example: "Every call should end with a commitment — even a small one. 'I'll send the document and you'll read it by Friday' is a commitment.",
      imageSlug: '/images/sales-call-structure-commitment.png',
    },
    {
      word: 'TRANSITION',
      partOfSpeech: 'verb',
      definition: 'To move deliberately from one phase of the conversation to the next using a signalling phrase.',
      example: 'Knowing how to transition between phases keeps the call feeling structured rather than like a sales pitch that wandered off course.',
      imageSlug: '/images/sales-call-structure-transition.png',
    },
    {
      word: 'RECAP',
      partOfSpeech: 'verb',
      definition: 'To summarise the key points of a conversation before moving to the next step or ending the call.',
      example: 'Always recap what you heard before you make your offer — it shows you listened and connects your solution directly to their words.',
      imageSlug: '/images/sales-call-structure-recap.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE REASON FOR MY CALL IS',
      definition: 'State the purpose of the call clearly and early — removes ambiguity and gives the prospect something to engage with.',
      example: "The reason for my call is that your colleague Priya mentioned you'd been looking at ways to improve your pipeline visibility.",
      imageSlug: '/images/the-reason-for-my-call-is.png',
    },
    {
      phrase: 'BEFORE WE DIVE IN',
      definition: 'A phrase used to signal the start of the structured part of the call, often followed by a quick agenda.',
      example: "Before we dive in, I just want to give you a quick outline of what I'd like to cover — that way you know exactly where we're going.",
      imageSlug: '/images/before-we-dive-in.png',
    },
    {
      phrase: 'CAN I ASK YOU ABOUT',
      definition: 'A soft, professional transition into the discovery phase — signals that you want to understand before you recommend.',
      example: 'Can I ask you about your current setup? I want to make sure anything I show you is actually relevant to your team.',
      imageSlug: '/images/can-i-ask-you-about.png',
    },
    {
      phrase: "BASED ON WHAT YOU'VE TOLD ME",
      definition: 'The key phrase for transitioning into your offer — it signals that your solution is built on what you heard, not on a generic script.',
      example: "Based on what you've told me — the manual reporting and the team of 15 reps — here's what I think would genuinely help.",
      imageSlug: '/images/sales-call-structure-based-on-what-youve-told-me.png',
    },
    {
      phrase: "WHAT I'D LIKE TO PROPOSE IS",
      definition: 'A professional way to introduce your offer or recommendation — confident but not pushy.',
      example: "What I'd like to propose is a short demo where I show you exactly how the pipeline view and automated reporting would work for a team your size.",
      imageSlug: '/images/what-id-like-to-propose-is.png',
    },
    {
      phrase: 'AS A NEXT STEP',
      definition: 'The phrase that signals you are moving toward a concrete commitment — what happens after this call.',
      example: "As a next step, would you be open to a 30-minute demo next week? I can have the dashboard set up with your team's structure before we even start.",
      imageSlug: '/images/as-a-next-step.png',
    }
  ],

  videos: [],

  registerAwareness: [
    {
      context: 'Warm referral call',
      register: 'Informal / Warm',
      example: "'Hey Marcus, it's Riley — Priya said I should reach out. Got a few minutes to chat? I'll keep it short.'",
    },
    {
      context: 'Standard outbound call',
      register: 'Conversational',
      example: "'Hi Marcus, this is Riley from Brightline. The reason I'm calling is that we help sales teams replace manual pipeline tracking with something a lot faster — I wanted to see if it might be relevant for you.'",
    },
    {
      context: 'Enterprise / procurement call',
      register: 'Formal / Professional',
      example: "'Good morning Mr Chen. My name is Riley and I'm calling from Brightline. I understand your organisation is evaluating pipeline management solutions — I wanted to introduce ourselves and see whether a conversation might be of value.'",
    },
    {
      context: 'Post-call follow-up email',
      register: 'Formal / Written',
      example: "'Dear Marcus, further to our conversation this morning, I wanted to confirm the agenda for our demo call on Thursday and outline the areas we'll focus on based on what you shared.'",
    },
    {
      context: 'Internal CRM / handover note',
      register: 'Neutral / Structured',
      example: 'Prospect: Marcus Chen, VP Sales, 15 reps. Pain: manual reporting, poor data quality. Interest: HIGH. Next: demo Thu 12/06 14:00. Decision timeline: Q3.',
    },
  ],

  registerTraps: [
    "❌ Don't use an enterprise script on a small business call — matching your register to the prospect's style builds rapport far faster than being formally correct.",
    "✅ Mirror the prospect's language in the questions phase — if they say 'my team is swamped', don't say 'I understand there are resource constraints' — say 'I get it, the team is flat out.'",
    "🔁 The opening shifts register dramatically by context — a warm referral call and a cold enterprise call follow the same five-phase structure but sound completely different.",
    "💡 When stating your purpose, clear and direct is almost always better than softened or vague — 'The reason for my call is X' outperforms 'I was just wondering if perhaps you might be interested in...'",
  ],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Hi Marcus, this is Riley from Brightline — thanks for taking the time today. How are you doing?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good thanks. I've only got about 20 minutes, just so you know.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Perfect — 20 minutes is plenty. Before we [[dive in:to move into the main part of a conversation]], let me give you a quick [[agenda:a brief outline of what the call will cover]]: two minutes of context, a few questions about your current setup, and if it makes sense, I'll suggest a logical next step. Does that work?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Sure, go ahead.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Great. The [[purpose:the clear, specific reason for the call]] of my call is that your colleague Priya mentioned you'd been looking at ways to improve your pipeline visibility. I wanted to reach out and see if a conversation made sense — I'm not here to sell you anything today, just to understand your situation.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's right, yes. We've outgrown our current system.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Can I ask you about your current setup? What are you using at the moment?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: "A spreadsheet, if you can believe it. With 15 reps it's becoming a nightmare — my manager asks for a pipeline update and I'm pulling data manually for two hours.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's really helpful. And is it mainly the reporting that's the issue, or is [[rapport:a warm, comfortable relationship built through listening and understanding]] with the team affected too — like people entering data inconsistently?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Both, honestly. The data quality is terrible because no one trusts the system, so no one maintains it properly.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Okay — let me [[recap:to summarise the key points before moving forward]] what I've heard: 15 reps, spreadsheet-based, two hours of manual reporting, and data quality issues because the team has lost confidence in the system. Is that right?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's exactly it.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Based on what you've told me, I think there's a genuine fit. What I'd like to [[propose:to suggest a specific action or plan]] is a short demo where I show you exactly how Brightline's pipeline view and automated reporting would work for a 15-person team. No [[objection:a concern or reason a prospect gives for not moving forward]] to showing you that, I hope?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'No — a demo makes sense.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Great. As a next step, I'd suggest a 30-minute call next week. I can have the dashboard set up with your team's structure before we start. I need a [[commitment:an agreement to take a specific next step]] from you on a time — does Thursday afternoon work?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Thursday works. Let's say 2pm.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thursday at 2 — perfect. I'll send the calendar invite now. Before I let you go, is there anything specific you'd want to see in the demo?",
    }
  ],

  matchingExercise: [
    {
        "word": "OPENING",
        "definition": "The first part of a call where you introduce yourself and set the tone"
    },
    {
        "word": "PURPOSE",
        "definition": "The clear, specific reason for the call — stated early"
    },
    {
        "word": "AGENDA",
        "definition": "A brief outline of what the call will cover, shared at the start"
    },
    {
        "word": "RAPPORT",
        "definition": "A warm relationship built through careful listening and understanding"
    },
    {
        "word": "OBJECTION",
        "definition": "A concern or reason a prospect gives for not moving forward"
    },
    {
        "word": "COMMITMENT",
        "definition": "An agreement to take a specific next step"
    },
    {
        "word": "TRANSITION",
        "definition": "To move deliberately from one phase of the call to the next"
    },
    {
        "word": "RECAP",
        "definition": "To summarise key points before moving to the next step"
    }
],
  fillBlankExercise: [
    {
        "before": "Before we dive in, let me give you a quick",
        "after": "so you know exactly where we're going.",
        "answer": "agenda"
    },
    {
        "before": "The",
        "after": "of my call is that your colleague mentioned you'd been looking at new tools.",
        "answer": "purpose"
    },
    {
        "before": "Can I ask you about your current setup? I want to understand before I",
        "after": "to the offer.",
        "answer": "transition"
    },
    {
        "before": "Let me",
        "after": "what I've heard — 15 reps, manual reporting, and data quality issues. Is that right?",
        "answer": "recap"
    },
    {
        "before": "",
        "after": "what you've told me, I think there's a genuine fit here.",
        "answer": "Based on"
    },
    {
        "before": "What I'd like to propose is a short demo — no",
        "after": "to that, I hope?",
        "answer": "objection"
    },
    {
        "before": "As a next step, I need a",
        "after": "from you on a date — does Thursday work?",
        "answer": "commitment"
    },
    {
        "before": "A strong",
        "after": "puts the prospect at ease and signals that their time will be well spent.",
        "answer": "opening"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley do immediately after Marcus says he only has 20 minutes?",
        "options": [
            "She apologises and offers to reschedule",
            "She says 20 minutes is fine and shares a quick agenda for the call",
            "She speeds through her product pitch",
            "She asks him to extend the time"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley describe the purpose of her call?",
        "options": [
            "She says she wants to sell him a new tool",
            "She says a colleague mentioned he was looking at improving pipeline visibility and she wanted to see if a conversation made sense",
            "She says she is following up on a demo request",
            "She says she has a special offer that expires this week"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Marcus's biggest day-to-day problem, as he describes it?",
        "options": [
            "He doesn't have enough sales reps",
            "His CRM is too expensive",
            "He spends two hours manually pulling data for pipeline updates",
            "His team doesn't use the product he is selling"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why does Marcus say the data quality is terrible?",
        "options": [
            "The tool they use doesn't sync properly",
            "No one trusts the system, so no one maintains it properly",
            "The team is too large to manage the data",
            "They don't have a dedicated operations person"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley do before making her offer?",
        "options": [
            "She sends him a brochure",
            "She asks him to look at the pricing page",
            "She recaps what she heard and asks if it is correct",
            "She introduces a case study"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley propose as the next step?",
        "options": [
            "A contract signing",
            "A 30-minute demo call with the dashboard set up to match Marcus's team",
            "A free trial period",
            "A second discovery call with Marcus's manager"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley ask Marcus at the very end of the call?",
        "options": [
            "Whether he is ready to sign up",
            "Whether he has budget approved",
            "Whether there is anything specific he wants to see in the demo",
            "Whether he can refer another colleague"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the purpose of sharing an agenda at the start of the call?",
        "options": [
            "To impress the prospect with your organisational skills",
            "To set expectations and give the prospect a sense of control over how the time will be used",
            "To make the call feel shorter than it is",
            "To fill time while you think of what to say"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation is from a real sales call. Decide which response handles it best — and be ready to explain why using the call structure language from this lesson.",
        "items": [
            {
                "customerLine": "You dial a prospect and they answer: 'I've only got about 10 minutes — just so you know.'",
                "options": [
                    "Say: 'That's fine — would it be better to reschedule for when you have more time?'",
                    "Say: 'No problem — 10 minutes is plenty. Before we dive in, let me give you a quick agenda: two minutes of context, five minutes on your situation, and a minute to agree a next step if it makes sense.'",
                    "Say: 'I'll be as quick as I can then.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Acknowledging the time constraint and immediately presenting a structured agenda demonstrates professionalism and respect. It tells the prospect their time won't be wasted. A gives up a call you've earned. C is vague — the prospect still has no idea if this will be worth their time."
            },
            {
                "customerLine": "After your opening, the prospect asks: 'So what are you actually selling?'",
                "options": [
                    "Say: 'I'm selling a sales pipeline tool — it's very popular with teams your size. Let me show you the key features.'",
                    "Say: 'Before I show you anything, can I ask you a few questions about how your team currently works? I want to make sure what I share is actually relevant to your situation.'",
                    "Say: 'It's hard to explain without showing you — can I do a quick screen share?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Moving into discovery before pitching is the mark of a strong salesperson — it signals that you're more interested in their situation than in talking about your product. A pitches before qualifying, which means your pitch is generic. C avoids the question and creates friction before you've built any rapport."
            },
            {
                "customerLine": "You've finished the discovery questions. How do you transition to your offer?",
                "options": [
                    "Say: 'As I was saying, our product is the best solution in the market for exactly this problem.'",
                    "Say: 'Based on what you've told me — the manual reporting, the visibility issues, the 15-person team — here's what I think would genuinely help, and why.'",
                    "Say: 'Okay, let me now tell you about what we offer.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Starting your offer with 'Based on what you've told me' connects your solution directly to their words — it shows you listened and makes the recommendation feel personal rather than scripted. A makes a claim you haven't earned. C introduces the product without any link to what the prospect just told you — it could have been said before you asked a single question."
            },
            {
                "customerLine": "The call has gone well and the prospect says: 'This looks interesting — I'd like to see more.'",
                "options": [
                    "Say: 'Are you ready to move forward? I can send the contract over today.'",
                    "Say: 'As a next step, I'd suggest a 30-minute demo next week — I can have the dashboard set up with your team's structure before we even start. Does Thursday afternoon work for you?'",
                    "Say: 'Great — I'll follow up by email and you can let me know if you want to proceed.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A specific, value-added next step with a concrete time is far more likely to be agreed to than an open offer. It demonstrates preparation and moves the deal forward. A asks for a commitment that is too big for this stage. C returns all the momentum to the prospect — 'let me know if you want to proceed' is how deals go cold."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three call situations. As a group, identify which phase of the sales call each one represents — and what the right move is. Use the five-phase structure from this lesson to guide your thinking. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "Situation A",
                "description": "Riley has just dialled Marcus for the first time. He has answered. Riley knows nothing about his situation yet. She has 20 minutes and Marcus is cautious. She needs to establish trust and make him feel the call is worth his time before anything else.",
                "matchKey": "opening"
            },
            {
                "name": "Situation B",
                "description": "Riley has introduced herself and stated her purpose. Marcus has confirmed he has a problem. Now Riley needs to understand the details before she can recommend anything — team size, current tools, biggest pain points, what a solution would need to look like.",
                "matchKey": "questions"
            },
            {
                "name": "Situation C",
                "description": "Riley has recapped everything Marcus told her and he confirmed it was accurate. She now has everything she needs. The next move is to connect what she heard directly to what Brightline does — and propose a concrete next step with a date.",
                "matchKey": "offer"
            }
        ],
        "options": [
            {
                "key": "opening",
                "label": "Opening + agenda",
                "description": "The first 60-90 seconds of the call. Introduce yourself, build brief rapport, and share a quick agenda so the prospect knows where the call is going. The goal is to earn enough trust to move to purpose."
            },
            {
                "key": "questions",
                "label": "Discovery questions",
                "description": "The longest phase of the call. Ask open questions to understand the prospect's current situation, specific pain points, and what a solution would need to achieve. Listen more than you speak. Don't pitch yet."
            },
            {
                "key": "offer",
                "label": "Offer + next step",
                "description": "Connect what you heard to what you offer — start with 'Based on what you've told me.' Then propose a specific, valuable next step and get a commitment on a date. The call ends with something agreed, not something left open."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson's line has been cut off at a critical moment in the call. As a group, finish it using the five-phase structure and key phrases from this lesson. Compare your versions — then click to see one possible answer.",
        "items": [
            {
                "customerLine": "The prospect answers your call and says: 'Hi — who is this?'",
                "salespersonStart": "Hi Sarah, this is Riley from Brightline — thanks for picking up. Before we dive in, I just want to give you a quick",
                "suggestedCompletion": "outline of the call so you know exactly where we're going: two minutes of context, a few questions about your setup, and if it makes sense I'll suggest a logical next step. The whole thing should take about 20 minutes — does that work for you?"
            },
            {
                "customerLine": "The prospect asks: 'Why are you calling me specifically?'",
                "salespersonStart": "The reason for my call is that",
                "suggestedCompletion": "your colleague Marcus mentioned you'd been looking at ways to improve how your team tracks deals. I wanted to reach out and see if a conversation made sense — I'm not here to sell you anything today, just to understand your situation and see if there's a fit."
            },
            {
                "customerLine": "You've just heard everything from the prospect. Now it's time to make your offer.",
                "salespersonStart": "Based on what you've told me —",
                "suggestedCompletion": "the manual reporting, the 18-person team, and the fact that your current tool is losing the team's trust — I think there's a genuine fit here. What I'd like to propose is a 30-minute demo where I show you exactly how our pipeline view and automated reporting would look for a team your size. No obligation — just a chance to see it in action."
            },
            {
                "customerLine": "The prospect says: 'This looks interesting — I'd like to see more.' You're ready to close the call.",
                "salespersonStart": "As a next step, would you be open to",
                "suggestedCompletion": "a 30-minute demo call next week? I can have the dashboard set up with your team's structure and some sample data before we even start — so you're not looking at a blank screen, you're looking at something that already feels like yours. Does Thursday at 2pm work?"
            }
        ]
    }
},
};
