import { Lesson } from '@/types/lesson';

export const writingSalesEmails: Lesson = {
  slug: 'writing-sales-emails',
  title: 'Writing Sales Emails',
  subtitle: 'How to write subject lines, greetings, and calls to action that get results',
  level: 'B1-B2',
  description: 'Most sales emails are never opened. Of the ones that are opened, most are never acted on. The difference between an email that gets a reply and one that gets deleted comes down to three things: a subject line that creates curiosity, a greeting and body that feel personal and relevant, and a call to action that makes it easy to say yes. This lesson teaches you the language and structure behind each one.',
  heroImage: '/images/writing-sales-emails-hero.png',

  vocabulary: [
    {
      word: 'SUBJECT LINE',
      partOfSpeech: 'noun',
      definition: 'The title of an email that appears before the email is opened. The subject line is the most important part of any sales email — it determines whether the reader opens it or deletes it without reading.',
      example: "Riley looked at Marcus's draft and said: Your subject line — 'Follow up from our meeting' — is too generic. Try something specific like 'Quick question about your Q3 reporting workflow'. That gives the reader a reason to open it.",
      imageSlug: '/images/writing-sales-emails-subject-line.png',
    },
    {
      word: 'GREETING',
      partOfSpeech: 'noun',
      definition: "The opening line of an email — 'Hi James,' or 'Dear Mr Chen,' — that sets the tone and level of formality. The greeting should match your relationship with the reader.",
      example: "Riley explained: Use 'Hi James' for someone you've spoken to before — it's warmer and more natural. Save 'Dear Mr Chen' for very formal situations, like a first cold email to a senior executive you have never met.",
      imageSlug: '/images/writing-sales-emails-greeting.png',
    },
    {
      word: 'CALL TO ACTION',
      partOfSpeech: 'noun',
      definition: 'A clear, specific instruction at the end of an email that tells the reader exactly what to do next. A weak call to action is vague. A strong one is direct, easy to act on, and removes any guesswork.',
      example: "Riley said: 'Please let me know if you have any questions' is too passive — it puts all the effort on the reader. Try: 'Would you be open to a 20-minute call this week? I'm free Thursday at 2pm or Friday at 10am.' That is a real call to action.",
      imageSlug: '/images/writing-sales-emails-call-to-action.png',
    },
    {
      word: 'PERSONALISE',
      partOfSpeech: 'verb',
      definition: 'To tailor a message to a specific person or company — using their name, referencing your last conversation, or connecting to something relevant to their business. Personalised emails perform significantly better than generic ones.',
      example: "Riley said: Always personalise. Don't start with 'I hope you are well' — start with something real, like 'As we discussed on Tuesday, I wanted to share the information you asked for.' That kind of opening shows you were actually listening.",
      imageSlug: '/images/personalise.png',
    },
    {
      word: 'OPEN RATE',
      partOfSpeech: 'noun',
      definition: 'The percentage of recipients who actually open an email. Open rate is determined almost entirely by the subject line — a strong subject line can double or triple the number of people who read your message.',
      example: "Riley explained: A generic subject line like 'Following up' will give you a terrible open rate — most people delete it without a second thought. A specific, curiosity-driven subject line can push your open rate from 15% to over 40%.",
      imageSlug: '/images/writing-sales-emails-open-rate.png',
    },
    {
      word: 'SIGN-OFF',
      partOfSpeech: 'noun',
      definition: "The closing phrase of an email before your name — 'Best regards', 'Kind regards', or 'Looking forward to hearing from you'. A good sign-off matches the tone of the email and implies a response is expected.",
      example: "Riley said: 'Best regards' is safe and professional. But 'Looking forward to hearing from you' is warmer and implies that a reply is expected — which subtly increases your response rate.",
      imageSlug: '/images/writing-sales-emails-sign-off.png',
    },
    {
      word: 'RELEVANT',
      partOfSpeech: 'adjective',
      definition: "Directly connected to the reader's situation, needs, or previous conversation. A relevant email feels personal and considered. An irrelevant email feels like spam — even if the product is excellent.",
      example: "Marcus's email talked about features that Riley knew the prospect had not mentioned. She said: This section isn't relevant to what James actually told you he needed. Cut it — only include what connects directly to his situation.",
      imageSlug: '/images/writing-sales-emails-relevant.png',
    },
    {
      word: 'CONCISE',
      partOfSpeech: 'adjective',
      definition: 'Brief and clear, with no unnecessary words or paragraphs. Sales emails should be concise — three short paragraphs is usually enough. If your email requires scrolling, most readers will not finish it.',
      example: 'Riley said: Keep the body concise — context, key point, call to action. Three paragraphs. If you cannot make your case in that space, the email is not ready to send yet.',
      imageSlug: '/images/writing-sales-emails-concise.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'QUICK QUESTION ABOUT [TOPIC]',
      definition: 'One of the most effective subject line patterns in sales email. It creates curiosity, feels personal, and implies the email will be short and easy to read. Always make the topic specific to the reader.',
      example: "Marcus's subject line said 'Follow up'. Riley rewrote it: 'Quick question about your Q3 reporting, James' — it uses his name, references something specific, and signals that the email requires minimal effort to engage with.",
      imageSlug: '/images/quick-question-about-topic.png',
    },
    {
      phrase: "I'M REACHING OUT BECAUSE...",
      definition: "A direct, transparent way to open the body of a sales email. It tells the reader immediately why you are writing — no build-up, no small talk. Transparency builds trust and saves the reader's time.",
      example: "Riley said: Instead of 'I hope this email finds you well', try 'I'm reaching out because we spoke on Tuesday about your reporting challenges and I promised to send you some additional information.' That is immediate, relevant, and honest.",
      imageSlug: '/images/im-reaching-out-because.png',
    },
    {
      phrase: 'AS WE DISCUSSED,...',
      definition: 'A connecting phrase that links the email to a previous conversation. It reminds the reader of shared context and signals that this is a personal message — not a template sent to hundreds of people.',
      example: "Riley coached Marcus: Start the body with 'As we discussed on Tuesday' — it immediately tells the reader this email is about something they already know and care about. It makes the whole message feel relevant before they've even read the next line.",
      imageSlug: '/images/writing-sales-emails-as-we-discussed.png',
    },
    {
      phrase: 'WOULD YOU BE OPEN TO...?',
      definition: "A soft, professional call to action that invites the reader to agree without feeling pressured. It frames the next step as the reader's choice — which makes them more likely to say yes.",
      example: "Riley explained: 'Would you be open to a 20-minute call this week?' is better than 'Can we schedule a call?' because it feels like an invitation, not a demand. It gives the reader a sense of control over the decision.",
      imageSlug: '/images/writing-sales-emails-would-you-be-open-to.png',
    },
    {
      phrase: "I'D LOVE TO [ACTION] — WOULD [DAY] AT [TIME] WORK FOR YOU?",
      definition: 'A specific, action-oriented call to action that proposes a concrete next step. By naming a day and time, you make it easy for the reader to say yes or suggest an alternative — rather than leaving everything open-ended.',
      example: "Riley said: Never end with 'Let me know when you're free.' Instead, say: 'I'd love to walk you through the platform — would Thursday at 2pm work for you?' It's specific, easy to respond to, and shows you are organised.",
      imageSlug: '/images/id-love-to-action--would-day-at-time-work-for-you.png',
    },
    {
      phrase: 'LOOKING FORWARD TO HEARING FROM YOU',
      definition: "A professional sign-off that implies a response is expected without being aggressive or demanding. Warmer than 'Best regards' alone — and subtly more effective at generating replies.",
      example: "Riley said: 'Best regards' is fine, but 'Looking forward to hearing from you' closes the email with a clear expectation — the reader understands they should reply. It is polite, professional, and just direct enough to work.",
      imageSlug: '/images/looking-forward-to-hearing-from-you.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, before I send this email to the prospect, could you take a look? I'm not confident the [[subject line:the title of an email that determines whether the reader opens it]] is strong enough.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Of course — send it over. Okay, so your subject line is 'Follow up from our meeting last Tuesday'. The problem is it's too generic — it gives the reader no reason to open it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What would you write instead?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Something like 'Quick question about your reporting workflow, James'. You use their name, you reference something specific, and it feels personal — not like a mass email. That will significantly improve your [[open rate:the percentage of recipients who actually open an email]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I see — it's more [[personalise:to tailor a message to a specific person or situation]]d. What about the [[greeting:the opening line of an email that sets the tone and formality]]? I wrote 'Dear Mr Chen'.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That depends on your relationship with him. If you've spoken before, 'Hi James' is warmer and more natural. Save 'Dear Mr Chen' for very formal situations — like a cold email to a senior executive you have never met.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good point. And my opening line is 'I hope this email finds you well'. Is that okay?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It's fine, but it's also the most overused line in sales email. Most readers skip it automatically. Try something more [[relevant:directly connected to the reader's situation or previous conversation]] — like 'As we discussed on Tuesday, I wanted to share the information you asked for.' That connects immediately to something real.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's much better. What about the body — how long should it be?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Keep it [[concise:brief and clear with no unnecessary words or paragraphs]] — three short paragraphs maximum. One for context, one for your key point or offer, one for the call to action. If your email requires scrolling, most readers will not finish it.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Speaking of which — my [[call to action:a clear instruction that tells the reader exactly what to do next]] is 'Please let me know if you have any questions.' Is that strong enough?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Not really — it's too passive. It puts all the effort on the reader. Try: 'Would you be open to a 20-minute call this week? I'm free Thursday at 2pm or Friday at 10am.' That gives them a clear decision to make.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's far more specific. And what about the [[sign-off:the closing phrase before your name]]? I used 'Best regards'.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "'Best regards' is professional and safe. But 'Looking forward to hearing from you' is warmer — it implies a reply is expected without being pushy. Either works, but the second one tends to generate slightly more responses.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "This is genuinely useful. I'll rewrite the whole thing before I send it.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Great. And remember — I'm reaching out because it helps to get a second pair of eyes on it. Send it back once you've revised it and I'll take one more look.",
    }
  ],

  matchingExercise: [
    {
        "word": "subject line",
        "definition": "the title of an email — determines whether the reader opens it or deletes it"
    },
    {
        "word": "greeting",
        "definition": "the opening line of an email that sets the tone and level of formality"
    },
    {
        "word": "call to action",
        "definition": "a clear instruction telling the reader exactly what to do next"
    },
    {
        "word": "personalise",
        "definition": "to tailor a message to a specific person or situation"
    },
    {
        "word": "open rate",
        "definition": "the percentage of recipients who actually open an email"
    },
    {
        "word": "sign-off",
        "definition": "the closing phrase before your name at the end of an email"
    },
    {
        "word": "relevant",
        "definition": "directly connected to the reader's situation or previous conversation"
    },
    {
        "word": "concise",
        "definition": "brief and clear with no unnecessary words or paragraphs"
    }
],
  fillBlankExercise: [
    {
        "before": "A strong ",
        "after": " line gives the reader a clear reason to open the email — without it, most people delete without reading.",
        "answer": "subject"
    },
    {
        "before": "Always ",
        "after": " your emails — use the reader's name and reference something specific from your last conversation.",
        "answer": "personalise"
    },
    {
        "before": "Keep the body ",
        "after": " — three short paragraphs is usually all you need for an effective sales email.",
        "answer": "concise"
    },
    {
        "before": "Your ",
        "after": " to action should tell the reader exactly what to do next and make it as easy as possible to say yes.",
        "answer": "call"
    },
    {
        "before": "A professional ",
        "after": " — like 'Looking forward to hearing from you' — implies a reply is expected without being aggressive.",
        "answer": "sign-off"
    },
    {
        "before": "A specific subject line can double your email ",
        "after": " rate — the percentage of people who actually open your message.",
        "answer": "open"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley say 'Follow up from our meeting last Tuesday' is a weak subject line?",
        "options": [
            "It is too short",
            "It is too generic and gives the reader no reason to open the email",
            "It does not include the prospect's name"
        ],
        "correctIndex": 1
    },
    {
        "question": "When does Riley say 'Dear Mr Chen' is appropriate?",
        "options": [
            "Always — it is the most professional option",
            "For warm contacts you speak to regularly",
            "For formal situations — like a cold email to a senior executive you have never met"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley say is wrong with 'Please let me know if you have any questions'?",
        "options": [
            "It is too pushy",
            "It is too passive — a strong call to action is specific and easy to act on",
            "It is too informal for a sales email"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley suggest as an alternative sign-off to 'Best regards'?",
        "options": [
            "Yours sincerely",
            "Thank you for your time",
            "Looking forward to hearing from you"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "How many sales or marketing emails do you receive per week? How do you decide which ones to open and which to delete immediately?",
        "Think of the last sales email that actually got your attention. What made you open it and read it?",
        "When you write a professional email at work, what do you spend the most time on — the subject line, the body, or the closing? Which part do you find hardest?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "A strong subject line gives the reader a reason to open the email before they even see the _____.",
            "options": [
                "content",
                "attachment",
                "body"
            ],
            "correctIndex": 2,
            "explanation": "'Body' is the correct word for the main text of an email — the content below the subject line and greeting. 'Content' is possible but less specific. 'Attachment' refers to a file added to the email, not the email itself. In email terminology, always use 'body' for the main text section."
        },
        {
            "sentence": "Avoid _____ subject lines like 'Follow up' — they give the reader no reason to open the email.",
            "options": [
                "to write",
                "writing",
                "to be writing"
            ],
            "correctIndex": 1,
            "explanation": "'Avoid' is always followed by '-ing' — never 'to + infinitive'. Say 'avoid writing', 'avoid sending', 'avoid using'. This is the same pattern as 'enjoy doing', 'consider sending', 'suggest meeting'. A useful rule: after 'avoid', 'enjoy', 'consider', and 'suggest', always use the '-ing' form."
        },
        {
            "sentence": "The greeting should match the level of formality of your _____ with the reader.",
            "options": [
                "relation",
                "relationship",
                "connection"
            ],
            "correctIndex": 1,
            "explanation": "'Relationship' is the correct noun for the professional or personal connection between two people. 'Relation' has a different meaning — it usually refers to a family member or a formal abstract link ('in relation to'). In business English, always say 'your relationship with the client', never 'your relation with the client'."
        },
        {
            "sentence": "Would you be _____ to a 20-minute call this week?",
            "options": [
                "opened",
                "opening",
                "open"
            ],
            "correctIndex": 2,
            "explanation": "In 'Would you be open to...?', 'open' is an adjective meaning 'willing' or 'receptive to the idea'. 'Opened' is the past participle of the verb 'to open' — it describes something being physically opened. 'Opening' is a present participle used differently. Always say 'would you be open to a call?' — never 'opened'."
        },
        {
            "sentence": "I'm _____ out because I wanted to share the information we discussed on Tuesday.",
            "options": [
                "reaching",
                "getting",
                "going"
            ],
            "correctIndex": 0,
            "explanation": "'Reaching out' is the standard professional phrase for making contact — especially in written communication. 'I'm reaching out because...' is the most common way to open a professional email body in English. 'Getting out' and 'going out' do not work in this context."
        },
        {
            "sentence": "Keep the email concise — if it requires _____, most readers will not finish it.",
            "options": [
                "scrolling",
                "to scroll",
                "a scroll"
            ],
            "correctIndex": 0,
            "explanation": "After 'require', we can use either '-ing' or 'to + infinitive' — but with an impersonal subject like 'it', 'requires scrolling' is more natural. 'A scroll' is informal and refers to the act of scrolling rather than the condition of needing to scroll. 'Requires scrolling' is the idiomatic professional choice here."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "I opened your email because the subject line caught my attention. What made you write it that way?",
                "options": [
                    "I always try to keep my subject lines as short as possible.",
                    "I referenced your exact pain point from our last conversation — 'Quick question about your Q3 reporting'. A personalised subject line that speaks to the reader's specific situation gets opened. A generic one gets deleted.",
                    "I wasn't completely sure about it — I'm glad it worked for you."
                ],
                "correctIndex": 1,
                "explanation": "Option B explains the strategy clearly and confidently — and gives the customer a valuable insight they can use. Option A gives a partial answer but misses the key point: it's not just about length, it's about relevance and personalisation. Option C sounds uncertain and undermines your credibility as someone who knows what they are doing."
            },
            {
                "customerLine": "Is 'I hope this email finds you well' a good way to open a sales email?",
                "options": [
                    "Yes — it's polite, professional, and universally understood.",
                    "It's one of the most overused openers in business email — most readers skip it automatically. A stronger opening connects immediately to something real, like a previous conversation or a specific challenge you know they have.",
                    "It depends entirely on the recipient and the context of the email."
                ],
                "correctIndex": 1,
                "explanation": "Option B gives an honest, useful answer with a clear alternative — this is the kind of specific, expert insight that builds credibility. Option A is overly diplomatic and teaches nothing. Option C is evasive — the truth is that 'I hope this email finds you well' is widely recognised as a low-impact opener regardless of context, and saying 'it depends' without explaining is not useful."
            },
            {
                "customerLine": "What should my call to action be if I want the prospect to book a meeting with me?",
                "options": [
                    "Just say 'Let me know if you'd like to set up a meeting sometime'.",
                    "'Would you be open to a 20-minute call this week? I'm free Thursday at 2pm or Friday at 10am.' It's specific, it offers two options, and it makes the decision easy.",
                    "Include a link to your online calendar and ask them to book a slot that works for them."
                ],
                "correctIndex": 1,
                "explanation": "Option B models a specific, professional call to action — it names the duration, offers two concrete time options, and removes all guesswork from the reader's side. Option A is too vague and passive — 'sometime' signals no urgency and gives the prospect an easy reason to delay. Option C is functional but impersonal; offering specific times yourself is warmer and significantly more effective than a calendar link."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "Hi Sam. I wanted to share a few tips on writing more effective sales emails."
            },
            {
                "speaker": "Sam",
                "text": "Great — I always struggle with the subject line. Mine are always too generic."
            },
            {
                "speaker": "Alex",
                "text": "A good subject line should be concise and relevant. Avoid to write anything too generic like 'Following up' or 'Checking in'."
            },
            {
                "speaker": "Sam",
                "text": "What about the greeting — should I use 'Dear' or 'Hi'?"
            },
            {
                "speaker": "Alex",
                "text": "It depends on your relation with the contact. 'Hi James' is warmer for someone you've spoken to before."
            },
            {
                "speaker": "Sam",
                "text": "And the call to action — 'Would you be opened to a quick call this week?' Does that work?"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "Avoid to write",
                "correction": "Avoid writing",
                "explanation": "'Avoid' is always followed by '-ing' — never 'to + infinitive'. Say 'avoid writing', 'avoid sending', 'avoid using generic subject lines'. This applies to a group of common verbs: 'enjoy', 'consider', 'suggest', 'avoid', and 'recommend' are all followed by '-ing'. If you use 'to + verb' after any of these, it is always incorrect."
            },
            {
                "lineIndex": 4,
                "incorrectText": "relation",
                "correction": "relationship",
                "explanation": "'Relationship' is the correct noun for the professional or personal connection between two people. 'Relation' usually refers to a family member ('my relations') or an abstract link ('in relation to the proposal'). In business contexts, always say 'your relationship with the client' or 'our relationship with the prospect' — never 'relation'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "be opened",
                "correction": "be open",
                "explanation": "In 'Would you be open to...?', 'open' is an adjective meaning 'willing' or 'receptive'. 'Opened' is the past participle of the verb 'to open' — it describes an action (a door being opened, an email being opened). These are completely different. Always say 'would you be open to a call?' not 'would you be opened to a call?'"
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "My subject lines never get opened. What am I doing wrong?",
                "salespersonStart": "The most common mistake is being too generic. Instead of 'Following up' or 'Checking in', try using the reader's name and referencing something specific. For example...",
                "suggestedCompletion": "'Quick question about your Q3 reporting, James' — it's personal, it's specific, and it tells the reader immediately that this email is for them, not a mass message sent to hundreds of contacts."
            },
            {
                "customerLine": "I always end my emails with 'Let me know if you have any questions'. Is there a better way?",
                "salespersonStart": "That's a very passive call to action — it puts all the effort on the reader. A stronger version is specific and gives them a clear decision to make. Try something like...",
                "suggestedCompletion": "'Would you be open to a 20-minute call this week? I'm free Thursday at 2pm or Friday at 10am.' It's easy to say yes or suggest an alternative — and it shows you are organised and serious."
            },
            {
                "customerLine": "Should I always start with 'I hope this email finds you well'?",
                "salespersonStart": "It's not wrong, but it's the most overused line in business email — most readers skip it without even registering it. A far stronger opening connects immediately to something real. Try...",
                "suggestedCompletion": "'As we discussed on Tuesday, I wanted to share the information you asked for.' It's immediate, it's relevant, and it tells the reader within the first line that this email was written specifically for them."
            }
        ]
    }
},
};
