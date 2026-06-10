import { Lesson } from '@/types/lesson';

export const buildingRapport: Lesson = {
  slug: 'building-rapport',
  title: 'Building Rapport',
  subtitle: 'How to create genuine connection before — and during — a business conversation',
  level: 'B1-B2',
  description: 'Master the language of small talk and professional warmth — how to open with genuine interest, reference what you have learned about someone, show empathy, and transition naturally from personal connection to business conversation.',
  heroImage: '/images/building-rapport-hero.png',

  vocabulary: [
    {
      word: 'GENUINE',
      partOfSpeech: 'adjective',
      definition: 'Real and sincere — coming from actual interest rather than a script or performance.',
      example: 'Customers can tell the difference between a genuine question and a scripted opener — authentic curiosity builds trust far faster.',
      imageSlug: '/images/genuine.png',
    },
    {
      word: 'EMPATHY',
      partOfSpeech: 'noun',
      definition: 'The ability to understand and share what another person is experiencing or feeling.',
      example: 'Showing empathy when a prospect mentions a difficult quarter costs nothing — and it changes the entire tone of the conversation.',
      imageSlug: '/images/empathy.png',
    },
    {
      word: 'RECIPROCATE',
      partOfSpeech: 'verb',
      definition: "To respond to someone's warmth or openness with the same energy — to give back what you receive.",
      example: 'When a prospect opens up about their challenges, reciprocate with a relevant experience rather than moving straight to your pitch.',
      imageSlug: '/images/reciprocate.png',
    },
    {
      word: 'ACKNOWLEDGE',
      partOfSpeech: 'verb',
      definition: 'To show clearly that you have heard or noticed something the other person said or experienced.',
      example: 'Before moving on, acknowledge what they just told you — it signals that you were actually listening.',
      imageSlug: '/images/acknowledge.png',
    },
    {
      word: 'ATTENTIVE',
      partOfSpeech: 'adjective',
      definition: 'Paying careful, genuine attention to what someone is saying rather than just waiting for your turn to speak.',
      example: 'Being attentive in the first five minutes of a call gives you everything you need to personalise the next fifty.',
      imageSlug: '/images/attentive.png',
    },
    {
      word: 'MUTUAL',
      partOfSpeech: 'adjective',
      definition: 'Shared between two or more people — a mutual connection, a mutual interest, a mutual experience.',
      example: 'Finding a mutual connection or shared experience is one of the fastest ways to move from stranger to trusted contact.',
      imageSlug: '/images/mutual.png',
    },
    {
      word: 'CANDID',
      partOfSpeech: 'adjective',
      definition: 'Open and honest in a way that feels refreshing — willing to speak directly and personally.',
      example: 'Being candid about the purpose of your call — rather than disguising it — is itself a form of rapport-building.',
      imageSlug: '/images/candid.png',
    },
    {
      word: 'SMALL TALK',
      partOfSpeech: 'noun',
      definition: 'Light, casual conversation on non-business topics — used to build comfort and connection before getting to the point.',
      example: 'Small talk is not wasted time — it is the foundation that makes everything else in the conversation easier.',
      imageSlug: '/images/small-talk.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'HOW DID IT GO',
      definition: 'Follow up on something the prospect mentioned previously — shows you were listening and remembered.',
      example: "You mentioned you had a big product launch last week — how did it go? I've been wondering how it landed.",
      imageSlug: '/images/how-did-it-go.png',
    },
    {
      phrase: 'I NOTICED THAT',
      definition: 'Reference something specific you found out about the prospect — through research, LinkedIn, or a previous conversation.',
      example: 'I noticed that your team has grown quite significantly this year — that must have brought some interesting challenges with it.',
      imageSlug: '/images/i-noticed-that.png',
    },
    {
      phrase: 'I CAN IMAGINE',
      definition: "Show empathy by acknowledging the prospect's experience without projecting or over-explaining.",
      example: 'A product launch in Q4 — I can imagine the pressure that puts on the whole team.',
      imageSlug: '/images/i-can-imagine.png',
    },
    {
      phrase: 'THAT REMINDS ME OF',
      definition: 'Connect what the prospect says to a relevant experience or example — builds mutual ground without making it about you.',
      example: 'That reminds me of a conversation I had with a similar team last quarter — they described exactly the same challenge.',
      imageSlug: '/images/that-reminds-me-of.png',
    },
    {
      phrase: 'ITS GOOD TO PUT A FACE TO THE NAME',
      definition: 'A warm phrase for the first time you speak to someone you have only communicated with by email or message.',
      example: "Emma — it's great to finally speak. It's good to put a face to the name after all our back-and-forth over email.",
      imageSlug: '/images/its-good-to-put-a-face-to-the-name.png',
    },
    {
      phrase: 'SPEAKING OF WHICH',
      definition: 'A natural transition phrase that moves the conversation from small talk to the business topic without it feeling abrupt.',
      example: 'Speaking of which — what you just said about scaling the team is actually exactly why I wanted to connect today.',
      imageSlug: '/images/speaking-of-which.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Emma — great to finally speak. It's good to put a face to the name after all our emails.",
    },
    {
      speaker: 'Emma',
      speakerColor: 'blue',
      speakerAvatar: '/images/emma-icon.png',
      text: 'Same here. I was actually at your webinar last month — I thought it was really well put together.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Oh that's really kind, thank you — [[genuine:real and sincere; coming from actual interest rather than a script]]ly glad it was useful. How did the rest of that week go? I remember you mentioned in your email that you had a big product launch coming up.",
    },
    {
      speaker: 'Emma',
      speakerColor: 'blue',
      speakerAvatar: '/images/emma-icon.png',
      text: 'Chaotic, honestly — but we got there. The launch went well in the end.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I can imagine — product launches are full-on. Congratulations on getting it across the line. Are you [[reciprocate:to respond to someone's openness with the same energy]]ing that energy into a celebration, or straight back into the next thing?",
    },
    {
      speaker: 'Emma',
      speakerColor: 'blue',
      speakerAvatar: '/images/emma-icon.png',
      text: "Ha — straight into the next thing, unfortunately. We're already planning the next quarter.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I noticed that your team has grown quite a bit this year — [[mutual:shared between two or more people]] connections we have mentioned it too. That kind of growth must bring some interesting challenges with communication and process.',
    },
    {
      speaker: 'Emma',
      speakerColor: 'blue',
      speakerAvatar: '/images/emma-icon.png',
      text: "It really has. Scaling the team while keeping everything consistent — that's been the main thing. [[Small talk:light, casual conversation used to build comfort before getting to the point]] aside, it's actually become a real business problem.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That reminds me of a conversation I had with a customer last quarter — similar team size, similar growth rate, and they described the exact same challenge. I want to [[acknowledge:to show clearly that you heard something]] that before we move on — it's a significant thing to manage, and not everyone sees it as a problem until it becomes one.",
    },
    {
      speaker: 'Emma',
      speakerColor: 'blue',
      speakerAvatar: '/images/emma-icon.png',
      text: "Exactly. We're quite [[candid:open and honest in a way that feels refreshing]] about it internally now, but six months ago we were in denial.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Being [[attentive:paying careful, genuine attention to what someone is saying]] to that kind of signal early is half the battle. Speaking of which — what you just described is actually exactly why I wanted to connect today. Shall we move into that?',
    },
    {
      speaker: 'Emma',
      speakerColor: 'blue',
      speakerAvatar: '/images/emma-icon.png',
      text: "Yes — let's do it.",
    }
  ],

  matchingExercise: [
    {
        "word": "GENUINE",
        "definition": "Real and sincere — coming from actual interest rather than a script"
    },
    {
        "word": "EMPATHY",
        "definition": "The ability to understand and share what another person is experiencing"
    },
    {
        "word": "RECIPROCATE",
        "definition": "To respond to someone's warmth or openness with the same energy"
    },
    {
        "word": "ACKNOWLEDGE",
        "definition": "To show clearly that you heard or noticed something the other person said"
    },
    {
        "word": "ATTENTIVE",
        "definition": "Paying careful, genuine attention to what someone is saying"
    },
    {
        "word": "MUTUAL",
        "definition": "Shared between two or more people — a connection, interest, or experience"
    },
    {
        "word": "CANDID",
        "definition": "Open and honest in a way that feels refreshing and direct"
    },
    {
        "word": "SMALL TALK",
        "definition": "Light conversation on non-business topics used to build comfort before getting to the point"
    }
],
  fillBlankExercise: [
    {
        "before": "Customers can tell the difference between a",
        "after": "question and a scripted opener — real curiosity builds trust.",
        "answer": "genuine"
    },
    {
        "before": "Showing",
        "after": "when a prospect mentions a difficult quarter costs nothing — and it changes the whole tone.",
        "answer": "empathy"
    },
    {
        "before": "When a prospect opens up about their challenges,",
        "after": "with a relevant experience of your own.",
        "answer": "reciprocate"
    },
    {
        "before": "Before moving on,",
        "after": "what they just told you — it signals you were actually listening.",
        "answer": "acknowledge"
    },
    {
        "before": "Being",
        "after": "in the first five minutes gives you everything you need to personalise the rest of the call.",
        "answer": "attentive"
    },
    {
        "before": "Finding a",
        "after": "connection or shared experience is one of the fastest ways to build trust.",
        "answer": "mutual"
    },
    {
        "before": "Being",
        "after": "about the purpose of your call — rather than disguising it — is itself a form of rapport-building.",
        "answer": "candid"
    },
    {
        "before": "",
        "after": "is not wasted time — it is the foundation that makes everything else in the conversation easier.",
        "answer": "Small talk"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley say to Emma when they first see each other on the video call?",
        "options": [
            "'Thanks for making the time today.'",
            "'It's good to put a face to the name after all our emails.'",
            "'Great — let's get started.'",
            "'I hope you got my agenda for today.'"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley remember from Emma's previous email?",
        "options": [
            "Emma had mentioned a budget review",
            "Emma had mentioned a product launch",
            "Emma had mentioned a new hire",
            "Emma had mentioned a conference she attended"
        ],
        "correctIndex": 1
    },
    {
        "question": "What phrase does Riley use to show empathy when Emma describes the product launch?",
        "options": [
            "'That sounds stressful.'",
            "'I completely understand.'",
            "'I can imagine — product launches are full-on.'",
            "'You must be relieved it's over.'"
        ],
        "correctIndex": 2
    },
    {
        "question": "How did Riley find out that Emma's team had grown significantly?",
        "options": [
            "Emma told her in a previous call",
            "She read it in a press release",
            "She noticed it on LinkedIn and through mutual connections",
            "Emma mentioned it in her first email"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does 'that reminds me of' signal in the dialogue?",
        "options": [
            "Riley is about to change the subject",
            "Riley is connecting Emma's situation to a relevant shared example — building common ground",
            "Riley is about to start her pitch",
            "Riley is demonstrating her product knowledge"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Emma mean when she says they are now 'quite candid about it internally'?",
        "options": [
            "They talk about the problem openly and honestly within the team",
            "They have hired a consultant to fix the problem",
            "They have documented the problem formally",
            "They have told their customers about the problem"
        ],
        "correctIndex": 0
    },
    {
        "question": "What phrase does Riley use to transition naturally from small talk to the business topic?",
        "options": [
            "'Before we dive in...'",
            "'The reason for my call is...'",
            "'Speaking of which...'",
            "'As a next step...'"
        ],
        "correctIndex": 2
    },
    {
        "question": "According to the lesson, what is the key difference between scripted small talk and genuine rapport?",
        "options": [
            "Genuine rapport takes longer to build",
            "Scripted small talk uses more formal language",
            "Genuine rapport is based on specific knowledge of the person, not generic questions",
            "Scripted small talk is more appropriate in enterprise settings"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation requires a rapport-building decision. Choose the response that builds genuine connection — not the one that just sounds polite. Discuss why before you click.",
        "items": [
            {
                "customerLine": "You open a video call and the prospect immediately says: 'Sorry for the noise — we're in the middle of an office refurbishment.'",
                "options": [
                    "Say: 'No problem at all — shall we just get started?'",
                    "Say: 'Ha — bad timing! How long is the refurbishment going to take? I hope you get some peace soon.' Then move on naturally.",
                    "Say: 'That's fine. So, the reason I wanted to talk today is...'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Taking a brief moment to acknowledge their situation with warmth signals that you see them as a person, not a meeting slot. A and C both rush to business, which tells the prospect you are only interested in the transaction — not in them."
            },
            {
                "customerLine": "A prospect casually mentions: 'I just got back from a conference in Amsterdam — it was a long week.'",
                "options": [
                    "Say: 'Oh interesting — how was it? I always find industry conferences good for getting a sense of where things are heading.'",
                    "Say: 'That's great — so, I wanted to talk to you today about how Brightline can help your team manage their pipeline.'",
                    "Say: 'Which conference? We sponsor a few industry events ourselves actually.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It's a genuine question that invites them to share more and shows real interest in their experience. B ignores the information entirely and pivots to the pitch — it signals you were not listening. C redirects to your company before showing any interest in what they just told you."
            },
            {
                "customerLine": "You are following up with a prospect you spoke to two weeks ago. They had mentioned a team off-site. How do you open the call?",
                "options": [
                    "Say: 'Hi — thanks for making the time. I just wanted to follow up on what we discussed last time.'",
                    "Say: 'Hi — before we get into it, how did the team off-site go? You mentioned it was the first big one since the team grew — I've been curious how it went.'",
                    "Say: 'Hi — I wanted to check in and see if you had a chance to think about our last conversation.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Remembering and referencing a specific detail from a previous conversation is one of the most powerful rapport-building tools available to you. It shows you were genuinely listening and that you see this person as more than a deal. A and C skip the human element entirely — they start with your agenda, not theirs."
            },
            {
                "customerLine": "A prospect tells you: 'Honestly, it's been a really difficult quarter — we're under a lot of pressure right now.'",
                "options": [
                    "Say: 'That's tough to hear — and actually, this might be exactly the right time to look at better tools. It can help you get back on track faster.'",
                    "Say: 'I can imagine — a difficult quarter affects everything, from morale to momentum. I hope things ease up for the team soon.'",
                    "Say: 'I understand. So — shall we talk about how we might be able to help?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It shows genuine empathy and does not immediately try to monetise their pain. A acknowledges the difficulty but pivots to a sales point in the same breath — it's tone-deaf and will break trust. C gives a token acknowledgement before rushing to the pitch, which feels transactional rather than human."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect situations. As a group, decide which rapport-building approach fits each one best. Think about what information you have and what would feel most natural to that person. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "Emma",
                "description": "Emma mentioned in her last email that her team has been under enormous pressure — they are hiring 10 new reps in 90 days and everything is moving very fast. She has been short in her messages and seems like someone who gets straight to the point.",
                "matchKey": "empathy"
            },
            {
                "name": "James",
                "description": "James and Riley have a mutual connection — a former colleague they both know well. James also attended the same industry summit Riley's company hosted last month, and posted about it on LinkedIn. He seems warm and social from his online presence.",
                "matchKey": "mutual"
            },
            {
                "name": "Priya",
                "description": "Riley has done her research. She found that Priya's company just won a regional business award, that Priya gave a talk at a conference last month, and that her team grew by 40% this year. Priya has a strong personal brand and pays attention to who has done their homework.",
                "matchKey": "specific"
            }
        ],
        "options": [
            {
                "key": "empathy",
                "label": "Lead with empathy for their situation",
                "description": "Acknowledge what they are going through before anything else. Show that you understand the pressure and that you are not going to add to it. Keep the small talk brief — they will appreciate getting to the point, but feeling heard first."
            },
            {
                "key": "mutual",
                "label": "Build on shared experience or common ground",
                "description": "Reference the mutual connection, the shared event, or the common experience as your opening. It immediately removes the feeling of talking to a stranger and creates a natural, relaxed starting point for the conversation."
            },
            {
                "key": "specific",
                "label": "Reference specific things you found out about them",
                "description": "Open by referencing something concrete and specific — the award, the talk, the growth milestone. This signals that you did your homework and that you see them as an individual, not a contact in a database. It commands respect and builds trust immediately."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started building rapport — but the line has been cut off. Finish it in a way that feels warm, genuine, and professional. Use vocabulary and phrases from this lesson. Compare your versions, then click to see one possible answer.",
        "items": [
            {
                "customerLine": "The prospect says: 'Sorry — I'm a bit distracted. We've just had a big internal announcement.'",
                "salespersonStart": "I completely understand — big announcements have a way of taking over the whole day.",
                "suggestedCompletion": "How are you feeling about it? If now isn't a great time, I'm completely happy to reschedule for when things have settled — I'd rather we have the right conversation at the right moment."
            },
            {
                "customerLine": "You are reconnecting after two weeks. They had mentioned a board presentation last time.",
                "salespersonStart": "Before we get into it —",
                "suggestedCompletion": "how did the board presentation go? I know you mentioned it was an important one, and I've been wondering how it landed. That kind of meeting can set the tone for a whole quarter."
            },
            {
                "customerLine": "The prospect mentions they read your recent article about sales communication.",
                "salespersonStart": "Oh, that's really good to hear — I noticed that you",
                "suggestedCompletion": "commented on it on LinkedIn, which is actually what made me reach out. What was it that resonated? I always find it interesting to hear what hits differently depending on where someone is in their career."
            },
            {
                "customerLine": "The small talk has gone well and you want to move naturally into the business conversation.",
                "salespersonStart": "Speaking of which — what you just said about",
                "suggestedCompletion": "scaling the team while keeping communication consistent — that's actually exactly what I wanted to talk about today. It's one of the most common things I hear from teams at your stage, and it's something we've helped a lot of people work through."
            }
        ]
    }
},
};
