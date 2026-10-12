import { Lesson } from '@/types/lesson';

export const followingUpAfterACall: Lesson = {
  slug: 'following-up-after-a-call',
  title: 'Following Up After a Call',
  subtitle: 'How to reconnect professionally, recap key points, and keep the deal moving forward',
  level: 'B1-B2',
  description: 'Most deals are not won on the first call — they are won in the follow-up. A well-timed, well-structured follow-up shows the customer that you are organised, reliable, and genuinely interested in their decision. This lesson teaches you the language and structure you need to follow up with confidence — whether by phone or email — and how to use the follow-up to unblock objections and move the sale forward.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/following-up-after-a-call-hero.png',

  vocabulary: [
    {
      word: 'FOLLOW UP',
      partOfSpeech: 'phrasal verb',
      definition: 'To contact someone again after an earlier conversation to check progress or get an answer.',
      example: 'She follows up with a client by phone after sending the proposal.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/following-up-after-a-call-follow-up.png',
    },
    {
      word: 'TOUCH BASE',
      partOfSpeech: 'phrasal verb',
      definition: 'To contact someone briefly to share news or see how things are going.',
      example: 'I\'ll touch base with you on Friday to hear about the budget review.',
      imageSlug: '/images/touch-base.png',
    },
    {
      word: 'RECAP',
      partOfSpeech: 'verb',
      definition: 'To repeat the main points of an earlier conversation in a short summary.',
      example: 'She smiled and recapped the key points for the client on the video call.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/following-up-after-a-call-recap.png',
    },
    {
      word: 'OUTSTANDING',
      partOfSpeech: 'adjective',
      definition: 'Not yet finished, paid, or answered.',
      example: 'We still have a few outstanding questions about the contract.',
      imageSlug: '/images/following-up-after-a-call-outstanding.png',
    },
    {
      word: 'MOMENTUM',
      partOfSpeech: 'noun',
      definition: 'The force that keeps something moving forward or making progress.',
      example: 'The project lost momentum when two team members left the company.',
      imageSlug: '/images/following-up-after-a-call-momentum.png',
    },
    {
      word: 'COMMITMENT',
      partOfSpeech: 'noun',
      definition: 'A promise to do something, or a duty that you have agreed to.',
      example: 'She pointed at the screen to confirm the commitment both sides made last week.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/following-up-after-a-call-commitment.png',
    },
    {
      word: 'PENDING',
      partOfSpeech: 'adjective',
      definition: 'Waiting to be decided or finished.',
      example: 'The decision is still pending until the finance team replies.',
      imageSlug: '/images/pending.png',
    },
    {
      word: 'INITIATIVE',
      partOfSpeech: 'noun',
      definition: 'The ability to act on your own without being told what to do.',
      example: 'She showed great initiative by fixing the problem before anyone asked.',
      imageSlug: '/images/initiative.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "I'M FOLLOWING UP ON...",
      definition: 'A phrase used to say you are contacting someone again about an earlier topic.',
      example: 'Hello, I\'m following up on our call from Tuesday about the new contract.',
      imageSlug: '/images/im-following-up-on.png',
    },
    {
      phrase: 'AS WE DISCUSSED,...',
      definition: 'A phrase that refers to something you both talked about earlier.',
      example: 'As we discussed, the report will be ready by Thursday morning.',
      imageSlug: '/images/following-up-after-a-call-as-we-discussed.png',
    },
    {
      phrase: 'I WANTED TO CHECK IN ON...',
      definition: 'A polite phrase used to ask about the progress of something.',
      example: 'I wanted to check in on the report you were preparing for the meeting.',
      imageSlug: '/images/i-wanted-to-check-in-on.png',
    },
    {
      phrase: 'COULD YOU LET ME KNOW WHERE THINGS STAND WITH...?',
      definition: 'A polite question asking about the current situation of something.',
      example: 'Could you let me know where things stand with the new budget?',
      imageSlug: '/images/could-you-let-me-know-where-things-stand-with.png',
    },
    {
      phrase: 'FOLLOWING OUR CALL, I...',
      definition: 'A phrase used to say what you did after a phone conversation.',
      example: 'Following our call, I sent you the documents you asked for.',
      imageSlug: '/images/following-our-call-i.png',
    },
    {
      phrase: "PLEASE DON'T HESITATE TO REACH OUT IF...",
      definition: 'A polite phrase meaning you are welcome to contact me if you need anything.',
      example: 'Please don\'t hesitate to reach out if you have any questions about the schedule.',
      imageSlug: '/images/please-dont-hesitate-to-reach-out-if.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Good morning, Marcus. It's Riley from Practispeak Solutions. I'm [[follow up:to contact someone again after a previous conversation to progress the discussion]]ing up on our demo call from Tuesday — do you have a few minutes?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Hi Riley. Yes, of course — I was actually going to reach out to you today.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Great timing, then. As we discussed, you were particularly interested in the custom reporting and the onboarding timeline. Have you had a chance to share those details with your team?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes — I sent them a summary yesterday. The response was positive overall, but they do have a couple of [[outstanding:not yet done or resolved — still waiting for an answer]] questions.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "I'm glad to hear the response was positive. What are the outstanding questions? I'd like to address them directly.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'The first one is about integration — specifically whether the platform works with Salesforce, which is our current CRM.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Absolutely — we have a native integration with Salesforce. It connects in under an hour with no additional configuration needed on your side.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is exactly what they needed to hear. The second question was about data security — where the data is stored and what certifications you hold.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "All data is stored on EU-based servers with ISO 27001 certification. Following our call, I'll send you the full security documentation today so you have it before the budget review.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That would be very helpful — that should address the team's [[pending:waiting to be dealt with or decided]] concerns.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'I also wanted to quickly [[recap:to summarise the main points of a previous conversation]] the commercial terms — $35 per user, 10% off for three months, and a two-week implementation. Does everything still look correct?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes — that all still looks good. I think we are very close to a decision, which I appreciate. It gives us [[momentum:the energy that keeps something moving forward]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "I'm really glad. Could you let me know where things stand with the internal approval? I want to make sure I can support you through that process.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'We have a budget review on Thursday. I should have a clear answer by Friday.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Perfect — I'll [[touch base:to make brief contact to check where things stand]] with you on Friday afternoon then. And please don't hesitate to reach out before that if anything comes up.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Will do. Thank you for taking the [[initiative:the ability to take action proactively]], Riley — it really does make a difference.',
    }
  ],

  matchingExercise: [
    {
        "word": "follow up",
        "definition": "to contact someone again after a previous conversation to progress the discussion"
    },
    {
        "word": "touch base",
        "definition": "to make brief contact to check where things stand or share a quick update"
    },
    {
        "word": "recap",
        "definition": "to summarise the main points of a previous conversation"
    },
    {
        "word": "outstanding",
        "definition": "not yet done or resolved — still waiting for an answer or action"
    },
    {
        "word": "momentum",
        "definition": "the energy or force that keeps something moving forward"
    },
    {
        "word": "commitment",
        "definition": "a promise or obligation made in a previous conversation"
    },
    {
        "word": "pending",
        "definition": "waiting to be dealt with or decided"
    },
    {
        "word": "initiative",
        "definition": "the ability to take action proactively without being asked"
    }
],
  fillBlankExercise: [
    {
        "before": "I'm following ",
        "after": " on our conversation from Tuesday — do you have a few minutes?",
        "answer": "up"
    },
    {
        "before": "As we ",
        "after": ", you were particularly interested in the custom reporting feature.",
        "answer": "discussed"
    },
    {
        "before": "The team still has a few ",
        "after": " questions — could we arrange a call to address them directly?",
        "answer": "outstanding"
    },
    {
        "before": "I'll ",
        "after": " base with you on Friday to check where things stand after the budget review.",
        "answer": "touch"
    },
    {
        "before": "Following our call, I wanted to ",
        "after": " the key commercial terms we agreed on.",
        "answer": "recap"
    },
    {
        "before": "Please don't ",
        "after": " to reach out if anything comes up before our next call.",
        "answer": "hesitate"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley follow up with Marcus?",
        "options": [
            "To introduce a new product",
            "To address outstanding questions and recap commercial terms after the demo",
            "To ask Marcus to sign a contract"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the team's first outstanding question?",
        "options": [
            "The price per user",
            "The implementation timeline",
            "Whether the platform integrates with Salesforce"
        ],
        "correctIndex": 2
    },
    {
        "question": "What happens at Marcus's company on Thursday?",
        "options": [
            "A product demonstration",
            "A budget review",
            "A team training session"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley offer to send Marcus after the call?",
        "options": [
            "A side-by-side comparison document",
            "Full security documentation",
            "A revised proposal with a new discount"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "After a good sales meeting or call, how quickly do you usually follow up — the same day, the next day, or later? Does timing matter?",
        "Have you ever lost interest in a supplier or vendor because they failed to follow up after a meeting? What happened?",
        "When someone follows up with you at work, what makes the message feel professional and relevant rather than pushy or generic?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "I'm following up _____ our demo call from Tuesday.",
            "options": [
                "about",
                "in",
                "on"
            ],
            "correctIndex": 2,
            "explanation": "'Following up on' is the fixed phrase — 'on' links the follow-up to the specific conversation or topic being revisited. 'Following up about' is sometimes used but is less professional. 'Following up in' is not correct in English — this is a very common preposition error."
        },
        {
            "sentence": "As we _____, you were particularly interested in the custom reporting feature.",
            "options": [
                "talked",
                "mentioned",
                "discussed"
            ],
            "correctIndex": 2,
            "explanation": "'As we discussed' is the standard professional phrase for referencing a previous conversation. 'As we talked' is possible but less polished. 'As we mentioned' is slightly different — 'mention' implies one person said something briefly, while 'discuss' implies both people explored it together."
        },
        {
            "sentence": "Could you let me know where things _____ with the internal approval?",
            "options": [
                "go",
                "stand",
                "are"
            ],
            "correctIndex": 1,
            "explanation": "'Where things stand' is the fixed phrase for asking about the current status of a situation — it implies you want to know how far along the process is. 'Where things go' refers to future direction, not current status. 'Where things are' is possible but less specific and professional."
        },
        {
            "sentence": "Could you let me know what _____ the next steps?",
            "options": [
                "are",
                "the next steps are",
                "will be"
            ],
            "correctIndex": 1,
            "explanation": "In indirect questions — questions embedded inside a sentence — the word order changes. The verb moves after the subject: 'could you let me know what the next steps are?' not 'what are the next steps?' This is the same rule for 'do you know where he is?', 'can you tell me what time it starts?'"
        },
        {
            "sentence": "I'll _____ base with you on Friday after the budget review.",
            "options": [
                "touch",
                "make",
                "check"
            ],
            "correctIndex": 0,
            "explanation": "'Touch base' is a fixed idiom — 'touch' is the only correct verb. We say 'I'll touch base with you', 'let's touch base on Friday'. 'Make base' and 'check base' are not correct — they are not part of this expression. Never add an article: 'touch base', never 'touch a base'."
        },
        {
            "sentence": "_____ our call, I've attached the security documentation you requested.",
            "options": [
                "Following",
                "After following",
                "As following"
            ],
            "correctIndex": 0,
            "explanation": "'Following our call' is the professional phrase that links an action to a previous conversation — it is concise and formal. 'After following our call' is grammatically incorrect. 'As following' does not exist in English. Use 'following' as a preposition meaning 'as a result of' or 'after'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "I haven't had a chance to look at the proposal yet.",
                "options": [
                    "That's okay — just let me know when you are ready to discuss it.",
                    "I completely understand — these things take time. Would it help if I walked you through the key points in a quick 15-minute call so you don't have to read the whole document yourself?",
                    "I sent it four days ago. Is there a problem on your end?"
                ],
                "correctIndex": 1,
                "explanation": "Option B respects the customer's time while offering a practical way to move forward — it reduces the effort required from the customer without applying pressure. Option A is too passive and gives the customer permission to delay indefinitely. Option C is confrontational and implies the customer is at fault, which immediately damages the relationship."
            },
            {
                "customerLine": "We're still not sure. There are a few concerns we haven't fully resolved.",
                "options": [
                    "I see. What seems to be the issue?",
                    "I'm following up on exactly those concerns — could you share them with me so I can address each one directly before your next internal meeting?",
                    "That's understandable. Take your time — there is no pressure."
                ],
                "correctIndex": 1,
                "explanation": "Option B shows initiative, frames the follow-up as purposeful, and proposes a clear action to unblock the decision before the next meeting. Option A is reactive and vague — it does not move anything forward. Option C gives the customer permission to stall indefinitely — and a stalled deal almost never closes on its own."
            },
            {
                "customerLine": "We've decided to go ahead. What happens next?",
                "options": [
                    "Wonderful! I'll send the contract over right away.",
                    "That's fantastic news. As we discussed, the next step is a two-week implementation — I'll connect you with our onboarding team today and send the agreement this afternoon. Does that timeline still work for you?",
                    "Great — I'll be in touch soon with all the details."
                ],
                "correctIndex": 1,
                "explanation": "Option B closes with momentum — it references the agreed timeline, names the immediate next steps, and confirms everything still works for the customer. Option A sends a contract without confirming next steps, which can feel abrupt and leave the customer unsure of what to expect. Option C is too vague — 'soon' and 'details' give the customer nothing concrete to hold onto."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Good morning, Sam. I'm following up in our call from last week."
            },
            {
                "speaker": "Sam",
                "text": "Hi Alex. Yes — I've been meaning to get in touch."
            },
            {
                "speaker": "Alex",
                "text": "As we discussed, the team had some outstanding questions. I wanted to address them directly."
            },
            {
                "speaker": "Sam",
                "text": "Yes. Could you let me know what are the next steps if we decide to go ahead?"
            },
            {
                "speaker": "Alex",
                "text": "Of course. I'll also touch a base with you on Friday to check where things stand after the review."
            },
            {
                "speaker": "Sam",
                "text": "Perfect. Please don't hesitate to reach out if we need anything before then."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "following up in",
                "correction": "following up on",
                "explanation": "The correct phrase is 'following up on' — 'on' connects the follow-up to the specific conversation or topic being revisited. 'Following up in' is not correct in English. This is one of the most common preposition errors with 'follow up' — always use 'on': 'follow up on a call', 'follow up on a proposal', 'follow up on our conversation'."
            },
            {
                "lineIndex": 3,
                "incorrectText": "what are the next steps",
                "correction": "what the next steps are",
                "explanation": "In indirect questions — questions embedded inside another sentence — the word order changes. The verb moves after the subject: 'could you let me know what the next steps are?' not 'what are the next steps?' Compare: 'Where are the files?' (direct) vs 'Do you know where the files are?' (indirect). The same rule applies: 'what time is it?' becomes 'do you know what time it is?'"
            },
            {
                "lineIndex": 4,
                "incorrectText": "touch a base",
                "correction": "touch base",
                "explanation": "'Touch base' is a fixed idiom — it never takes an article. We say 'I'll touch base with you', 'let's touch base on Friday', 'I'll touch base after the review'. Adding 'a' is a very common mistake — treat the whole phrase as a fixed unit: 'touch base', never 'touch a base'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "I've shared your proposal with the team but they have a few questions.",
                "salespersonStart": "I'm glad you shared it. I'd love to address those questions directly — could you let me know what they are so I can...",
                "suggestedCompletion": "prepare clear answers before our next call? I could also arrange a short call with your team this week if that would be more useful than going back and forth by email."
            },
            {
                "customerLine": "We're still waiting on internal approval before we can commit.",
                "salespersonStart": "I completely understand. As we discussed, I want to make sure I can support you through that process. Could you let me know where things stand with...",
                "suggestedCompletion": "the approval timeline? That way I can follow up at exactly the right moment and make sure you have everything you need to get it signed off quickly."
            },
            {
                "customerLine": "Thank you for calling, Riley. I'll be in touch soon.",
                "salespersonStart": "Of course. I'll touch base with you on Friday afternoon. And please don't hesitate to reach out if...",
                "suggestedCompletion": "anything comes up before then — whether it's a question from the team or a document you need from us. I want to make sure nothing is blocking your decision."
            }
        ]
    }
},
};
