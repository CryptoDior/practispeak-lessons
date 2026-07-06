import { Lesson } from '@/types/lesson';

export const writingBetterEmails: Lesson = {
  slug: 'writing-better-emails',
  title: 'Writing Better Emails',
  subtitle: 'How to write clear, professional emails in a marketing context',
  level: 'A2',
  description: 'Learn key words and phrases for writing business emails — how to open, make your point clearly, and close in a professional way.',
  heroImage: '/images/writing-better-emails-hero.png',

  vocabulary: [
    {
      word: 'FORMAL',
      partOfSpeech: 'adjective',
      definition: 'Polite and professional in style — used in business or official communication.',
      example: 'Use a formal tone when writing to a new client for the first time.',
      imageSlug: '/images/formal.png',
    },
    {
      word: 'INFORMAL',
      partOfSpeech: 'adjective',
      definition: 'Relaxed and friendly in style — used with people you know well.',
      example: 'Once we have a good relationship, our emails become more informal and conversational.',
      imageSlug: '/images/informal.png',
    },
    {
      word: 'TONE',
      partOfSpeech: 'noun',
      definition: 'The feeling or attitude that comes through in your writing — for example: friendly, serious, or professional.',
      example: 'The tone of this email is too casual — it should be more professional for a first contact.',
      imageSlug: '/images/writing-better-emails-tone.png',
    },
    {
      word: 'SUBJECT LINE',
      partOfSpeech: 'noun',
      definition: 'The title of an email — what the reader sees before they open it.',
      example: 'A good subject line tells the reader exactly what the email is about and makes them want to open it.',
      imageSlug: '/images/writing-better-emails-subject-line.png',
    },
    {
      word: 'CALL TO ACTION',
      partOfSpeech: 'noun',
      definition: 'A clear instruction that tells the reader what you want them to do next.',
      example: "Every marketing email needs a call to action — for example: 'Book a free call' or 'Click here to start your trial'.",
      imageSlug: '/images/writing-better-emails-call-to-action.png',
    },
    {
      word: 'FOLLOW-UP',
      partOfSpeech: 'noun',
      definition: 'An email sent after a first contact to check in or continue the conversation.',
      example: 'If the client does not reply, we send a polite follow-up after three days.',
      imageSlug: '/images/writing-better-emails-follow-up.png',
    },
    {
      word: 'SIGN-OFF',
      partOfSpeech: 'noun',
      definition: "The phrase used to close an email — for example: 'Best regards' or 'Kind regards'.",
      example: "Use 'Best regards' as your sign-off for professional emails to people you do not know well.",
      imageSlug: '/images/writing-better-emails-sign-off.png',
    },
    {
      word: 'ATTACHMENT',
      partOfSpeech: 'noun',
      definition: 'A file sent with an email — for example: a PDF, a photo, or a document.',
      example: 'Please see the attachment — it has all the campaign results from last month.',
      imageSlug: '/images/attachment.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'FOLLOW UP',
      definition: 'Send a second email or message to check in after a first contact.',
      example: 'If you do not hear back, follow up after three or four working days — not before.',
      imageSlug: '/images/writing-better-emails-follow-up.png',
    },
    {
      phrase: 'GET TO THE POINT',
      definition: 'Say the important thing quickly, without too much introduction.',
      example: 'In a marketing email, get to the point in the first two sentences — busy people do not read long introductions.',
      imageSlug: '/images/get-to-the-point.png',
    },
    {
      phrase: 'REACH OUT TO',
      definition: 'Contact someone for the first time, usually to start a business conversation.',
      example: 'We reach out to potential clients by email with a short, clear message about what we do.',
      imageSlug: '/images/writing-better-emails-reach-out-to.png',
    },
    {
      phrase: 'KEEP IT SHORT',
      definition: 'Write only what is necessary — do not add extra words or information.',
      example: 'Keep it short — aim for five to seven lines for a cold outreach email.',
      imageSlug: '/images/keep-it-short.png',
    },
    {
      phrase: 'SIGN OFF WITH',
      definition: 'End an email with a specific closing phrase.',
      example: "Sign off with 'Best regards' for formal emails and 'Best' or 'Thanks' for more informal ones.",
      imageSlug: '/images/sign-off-with.png',
    },
    {
      phrase: 'OPEN WITH',
      definition: 'Start an email or message with a specific phrase or idea.',
      example: 'Open with a reason for writing — tell the reader immediately why you are contacting them.',
      imageSlug: '/images/open-with.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, can you look at this email I am writing to a potential client? I want it to sound right.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. The first thing I look at is the [[subject line:the title of an email — what the reader sees before they open it]]. Is it clear and interesting enough to make them open it?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I wrote: 'Hi, I wanted to get in touch.' Is that okay?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "It is too vague. Try something specific like: 'How we helped a B2B team grow leads by 40%.' That makes the reader want to open it. The [[tone:the feeling or attitude that comes through in your writing]] should be confident, not too casual.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Should it be [[formal:polite and professional in style]] or [[informal:relaxed and friendly in style]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'For a first contact, keep it professional but not stiff. You do not know them yet — so aim for warm and clear rather than too [[formal]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And how long should the email be?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Short. Three to five lines. Get to the point straight away. Introduce yourself, say why you are writing, and then end with a clear [[call to action:a clear instruction that tells the reader what you want them to do next]].',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Like: 'Would you have 20 minutes for a call this week?'",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Perfect. And add an [[attachment:a file sent with an email]] if you have something useful — a short one-pager or a case study works well for a first email.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about the [[sign-off:the phrase used to close an email]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "'Best regards' is always safe for a professional first email. And if they do not reply, send a [[follow-up:an email sent after a first contact to check in]] after three or four days.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Thank you — this is very helpful. I was making it too long.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Most people do. The shorter and clearer the email, the more likely they are to reply.',
    }
  ],

  matchingExercise: [
    {
        "word": "FORMAL",
        "definition": "Polite and professional in style — used in business or official communication"
    },
    {
        "word": "INFORMAL",
        "definition": "Relaxed and friendly in style — used with people you know well"
    },
    {
        "word": "TONE",
        "definition": "The feeling or attitude that comes through in your writing"
    },
    {
        "word": "SUBJECT LINE",
        "definition": "The title of an email — what the reader sees before they open it"
    },
    {
        "word": "CALL TO ACTION",
        "definition": "A clear instruction that tells the reader what you want them to do next"
    },
    {
        "word": "FOLLOW-UP",
        "definition": "An email sent after a first contact to check in or continue the conversation"
    },
    {
        "word": "SIGN-OFF",
        "definition": "The phrase used to close an email — for example: 'Best regards'"
    },
    {
        "word": "ATTACHMENT",
        "definition": "A file sent with an email — for example: a PDF or a document"
    }
],
  fillBlankExercise: [
    {
        "before": "Use a",
        "after": "tone when writing to a new client for the first time.",
        "answer": "formal"
    },
    {
        "before": "Once we have a good relationship, our emails become more",
        "after": "and conversational.",
        "answer": "informal"
    },
    {
        "before": "The",
        "after": "of this email is too casual — it should be more professional.",
        "answer": "tone"
    },
    {
        "before": "A good",
        "after": "tells the reader exactly what the email is about.",
        "answer": "subject line"
    },
    {
        "before": "Every marketing email needs a clear",
        "after": "— for example: 'Book a free call'.",
        "answer": "call to action"
    },
    {
        "before": "If the client does not reply, we send a polite",
        "after": "after three days.",
        "answer": "follow-up"
    },
    {
        "before": "Use 'Best regards' as your",
        "after": "for professional emails.",
        "answer": "sign-off"
    },
    {
        "before": "Please see the",
        "after": "— it has the campaign results from last month.",
        "answer": "attachment"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley say about Dana's first subject line?",
        "options": [
            "It is too long",
            "It is too vague",
            "It is too formal",
            "It is perfect"
        ],
        "correctIndex": 1
    },
    {
        "question": "What subject line does Riley suggest instead?",
        "options": [
            "'Hello from Dana's Agency'",
            "'Marketing email from us'",
            "'How we helped a B2B team grow leads by 40%'",
            "'Following up on our conversation'"
        ],
        "correctIndex": 2
    },
    {
        "question": "For a first email to a new client, what tone does Riley recommend?",
        "options": [
            "Very formal and stiff",
            "Completely informal",
            "Warm and clear — professional but not stiff",
            "Casual and conversational"
        ],
        "correctIndex": 2
    },
    {
        "question": "How long does Riley say a cold outreach email should be?",
        "options": [
            "Ten to fifteen lines",
            "As long as it needs to be",
            "One paragraph only",
            "Three to five lines"
        ],
        "correctIndex": 3
    },
    {
        "question": "What is a good call to action for a first email?",
        "options": [
            "'I hope to hear from you soon'",
            "'Please review the attached document'",
            "'Would you have 20 minutes for a call this week?'",
            "'Let me know if you have any questions'"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley suggest attaching to a first email?",
        "options": [
            "A full proposal and pricing",
            "A short one-pager or case study",
            "The full campaign results",
            "A contract"
        ],
        "correctIndex": 1
    },
    {
        "question": "What sign-off does Riley recommend for a professional first email?",
        "options": [
            "'Cheers'",
            "'Thanks'",
            "'Yours sincerely'",
            "'Best regards'"
        ],
        "correctIndex": 3
    },
    {
        "question": "When does Riley suggest sending a follow-up?",
        "options": [
            "The next day",
            "After one week",
            "After three or four days",
            "After two weeks"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question or comment from a colleague. Talk about which response (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "I want to write a cold email to a new potential client. What should I do first?",
                "options": [
                    "Start by writing a strong subject line — something specific that shows value, like a result you have achieved or a question that is relevant to their business.",
                    "Write the full email first, then think about the subject line at the end.",
                    "Keep the subject line short — just your name and your company."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. The subject line is the first thing the reader sees — if it is not interesting, they will not open the email. Writing it first helps you stay focused on the main point."
            },
            {
                "customerLine": "My email is eight paragraphs long. What do you think?",
                "options": [
                    "Long emails show you have a lot to say.",
                    "That is too long for a first email. Keep it to three to five lines — introduce yourself, say why you are writing, and end with a clear call to action.",
                    "It depends on how important the message is."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Eight paragraphs is far too long for a cold email. Busy people do not read long emails from people they do not know. Three to five lines is enough."
            },
            {
                "customerLine": "Should I write formally or informally to a new client?",
                "options": [
                    "Informal is better — you want to seem friendly.",
                    "Always write very formally to new clients.",
                    "Somewhere in between — professional and warm, but not stiff. You do not know them yet, so keep a formal tone but do not sound cold or robotic."
                ],
                "correctIndex": 2,
                "explanation": "C is correct. A first email to a new client should be professional but also warm and easy to read. Too formal sounds cold; too informal sounds unprofessional."
            },
            {
                "customerLine": "The client did not reply to my email. What should I do?",
                "options": [
                    "Send a follow-up after three or four days with a short, polite message. Remind them why you wrote and ask again if they would like a call.",
                    "Wait two weeks and then try again.",
                    "Try a different channel — call them or message them on LinkedIn straight away."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. Three to four days is the right time to follow up. It is not too soon, and the email is fresh enough that they may remember it. B waits too long. C jumps to a different channel too quickly."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three colleagues show you a marketing email. As a group, decide what the main problem is with each one. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "Email 1 — Subject line: 'Hi there'",
                "description": "The email has a good message but the subject line is 'Hi there'. The team sent it to 500 contacts. Only 8% of them opened it.",
                "matchKey": "subjectline"
            },
            {
                "name": "Email 2 — Eight paragraphs with no clear next step",
                "description": "The email explains the product in great detail. It is very long. At the end, it says 'Let us know if you are interested.' Nobody replied.",
                "matchKey": "cta"
            },
            {
                "name": "Email 3 — Sent the day after the first email",
                "description": "A salesperson sent a cold email on Monday and sent a follow-up on Tuesday because there was no reply. The client replied to say they felt pressured.",
                "matchKey": "followup"
            }
        ],
        "options": [
            {
                "key": "subjectline",
                "label": "Weak subject line",
                "description": "The subject line is too vague — it gives the reader no reason to open the email. Try something specific and value-focused, like a result or a question relevant to their business."
            },
            {
                "key": "cta",
                "label": "No clear call to action",
                "description": "'Let us know if you are interested' is not a clear call to action. The reader does not know what to do next. Use something specific like: 'Would you have 20 minutes for a call this week?'"
            },
            {
                "key": "followup",
                "label": "Follow-up sent too soon",
                "description": "Following up the next day feels pushy. Wait three to four working days before sending a follow-up — give the reader time to see and read the first email."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, discuss how you would finish it. Use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "Can you help me write an email to introduce my agency to a new client?",
                "salespersonStart": "Of course. Start with a strong subject line — something specific about the value you offer. Open with one sentence about who you are, then say why you are reaching out. Keep the email to three or four lines and end with a clear",
                "suggestedCompletion": "call to action — for example: 'Would you have 20 minutes for a call this week?' Then sign off with 'Best regards' and your name."
            },
            {
                "customerLine": "What is the best way to write a follow-up email?",
                "salespersonStart": "Wait three to four days after the first email. Keep the follow-up even shorter than the original. Reference the first email briefly, then get straight to",
                "suggestedCompletion": "the point — ask again if they would like to speak. One or two sentences is enough. Something like: 'Just following up on my email from last week. Would you have time for a quick call this week?'"
            },
            {
                "customerLine": "How formal should marketing emails be?",
                "salespersonStart": "It depends on the situation. For a first email to a new client, use a professional tone — warm but not too casual. Once you know them better,",
                "suggestedCompletion": "you can move to a more informal tone. But always match the tone to the relationship. If the client writes formally, match that. If they write in a relaxed way, you can do the same."
            },
            {
                "customerLine": "What should I include in a marketing email to an existing client?",
                "salespersonStart": "Keep it relevant to them — personalise it if you can. Mention something specific about what they are working on. Then share the news or update you want to tell them. Always end with a clear",
                "suggestedCompletion": "call to action — it could be a link to a blog post, an invitation to an event, or a simple question to start a conversation. And keep it short — three to five lines, maximum."
            }
        ]
    }
},
};
