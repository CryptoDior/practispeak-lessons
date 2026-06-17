import { Lesson } from '@/types/lesson';

export const handlingDifficultCustomers: Lesson = {
  slug: 'handling-difficult-customers',
  title: 'Handling Difficult Customers',
  subtitle: 'Diplomacy, tone control, and de-escalation — staying professional when the conversation gets hard',
  level: 'C1-C2',
  description: 'Difficult customer conversations are not won by being right — they are won by staying professional when the other person is not. The language of de-escalation is precise: it acknowledges without over-apologising, sets boundaries without confrontation, and moves from grievance to resolution without dismissing how the customer feels. This lesson teaches the four-part framework — empathise, acknowledge, redirect, resolve — and the specific phrases that make each step work.',
  heroImage: '/images/handling-difficult-customers-hero.png',

  vocabulary: [
    {
      word: 'DE-ESCALATE',
      partOfSpeech: 'verb',
      definition: 'To reduce the intensity of a conflict or emotional situation — bringing the temperature down so that productive conversation can happen. De-escalation always comes before problem-solving: a customer who feels unheard cannot be helped, and attempting to explain or solve before they feel acknowledged will intensify the conflict, not reduce it.',
      example: "Marcus was furious when he called — his voice was raised, his language was sharp, and he had a list of failures he intended to work through. Riley did not interrupt him. She let him finish, then de-escalated before she said a single word about what had happened: 'I can hear how frustrated you are, and I want to make sure I understand everything before I respond.'",
      imageSlug: '/images/de-escalate.png',
    },
    {
      word: 'EMPATHY',
      partOfSpeech: 'noun',
      definition: 'The ability to understand and share the feelings of another person — and, in professional contexts, to express that understanding in a way the other person can hear. In customer service, expressed empathy is the difference between a customer who calms down and one who intensifies. It must be genuine and specific — scripted empathy is usually worse than none at all.',
      example: "Riley did not say 'I understand your frustration' — which Marcus would have heard as a formula. She said 'I can imagine what it felt like to discover this on a Monday morning with your team waiting on you.' The specificity was what made the empathy land. She had listened well enough to use his detail, not a template.",
      imageSlug: '/images/empathy.png',
    },
    {
      word: 'COMPOSURE',
      partOfSpeech: 'noun',
      definition: 'Calm, controlled self-presentation in a stressful or confrontational situation. Maintaining composure is a professional skill — it can be practised, and it has specific language patterns that help. The most important thing composure signals to a difficult customer is that the person on the other side of the conversation is not going to match their intensity — which often reduces the intensity itself.',
      example: 'When Marcus raised his voice, Riley lowered hers. When he repeated himself, she slowed down. When he said something unkind, she paused before responding. None of these were passive — they were deliberate composure techniques that changed the emotional dynamic of the conversation without a single word about how he was speaking to her.',
      imageSlug: '/images/composure.png',
    },
    {
      word: 'ACKNOWLEDGE',
      partOfSpeech: 'verb',
      definition: "To explicitly confirm that something happened, that it matters, and that the person affected deserved better. Acknowledging a problem is not the same as accepting full responsibility or agreeing with every aspect of the customer's account — but it is the step that must come before any explanation, justification, or solution. Skipping acknowledgement makes everything that follows sound like a defence.",
      example: "Riley acknowledged the failure before she explained anything: 'What you experienced on Thursday was not acceptable, and your team should not have been in that position.' Only after that did she explain what had happened — and by then, Marcus was ready to hear it rather than argue against it.",
      imageSlug: '/images/acknowledge.png',
    },
    {
      word: 'DEFUSE',
      partOfSpeech: 'verb',
      definition: 'To reduce the tension or danger in a difficult situation by removing or addressing the element that is driving the intensity. In customer conversations, defusing anger usually requires addressing the emotion first and the practical problem second — in that order. Reversing the order — jumping to solutions while the customer is still emotionally activated — almost never works.',
      example: 'Riley defused the call in three moves: she let Marcus finish speaking without interruption, she acknowledged the impact of the failure in his own terms, and she asked one question about how his team had been affected. By the time she moved to what had caused the problem, the anger had reduced to frustration — which is a conversation she could have.',
      imageSlug: '/images/defuse.png',
    },
    {
      word: 'DIPLOMATIC',
      partOfSpeech: 'adjective',
      definition: 'Handling sensitive or difficult conversations in a way that achieves honesty without unnecessary confrontation. Diplomatic language is precise, not evasive — it says the difficult thing in a way the other person can hear. The opposite of diplomatic is not honest — it is blunt without care for how the message lands.',
      example: "Riley needed to tell Marcus that part of the failure had been caused by his team's configuration choices. She did not say 'your team made an error.' She said: 'Part of what contributed to this was a configuration decision made at setup — and I want to walk through that together so we can prevent it from happening again.' The content was the same. The delivery made it possible to hear.",
      imageSlug: '/images/diplomatic.png',
    },
    {
      word: 'TONE',
      partOfSpeech: 'noun',
      definition: 'The quality or character of speech — in how words are delivered — that expresses attitude, emotion, or intent. In customer service, tone is often more important than content: the same words delivered with impatience, condescension, or defensiveness produce a completely different outcome than the same words delivered with calm, warmth, and focus. Tone is what the customer feels after a conversation, even when they cannot quote exactly what was said.',
      example: "After the call, Marcus told his colleague: 'She was straight with me about what happened, but somehow I felt better rather than worse.' He could not explain why. The reason was tone: Riley had delivered difficult information — including information that reflected badly on his own team — in a tone that was consistently warm, direct, and focused on resolution. The content had not changed. The tone had made it receivable.",
      imageSlug: '/images/tone.png',
    },
    {
      word: 'BOUNDARY',
      partOfSpeech: 'noun',
      definition: 'A professional limit on what is acceptable in a working relationship. In difficult customer situations, clear and calm boundary-setting is sometimes necessary — and doing it without confrontation or defensiveness is a key professional skill. A boundary is not a threat; it is a statement about what kind of conversation can be productive.',
      example: "When Marcus's language became personal, Riley set a boundary without raising her voice: 'I want to resolve this for you — and I can do that best if we keep the conversation focused on what happened and what we do next. Can we do that?' She did not tell him what he was doing wrong. She told him what she needed in order to help him. The distinction made it possible for him to hear it.",
      imageSlug: '/images/boundary.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'I CAN HEAR THAT THIS HAS BEEN FRUSTRATING',
      definition: "An empathy opener that names the customer's emotion specifically — not a generic 'I understand' but a statement that reflects back what they are actually feeling. 'I can hear' signals that you have been listening, not just waiting to respond. Using the word 'frustrating' validates the emotion without amplifying it.",
      example: "'I can hear that this has been an incredibly frustrating experience — especially given that you had prepared your team for the launch and this disrupted everything they were depending on. That is not what should have happened, and I want to make sure we fix it.'",
      imageSlug: '/images/i-can-hear-that-this-has-been-frustrating.png',
    },
    {
      phrase: 'LET ME MAKE SURE I UNDERSTAND WHAT HAPPENED',
      definition: 'A de-escalation probe that slows the conversation, signals full engagement, and gives the customer a structured opportunity to feel heard before you respond. By asking to understand rather than jumping to explain, you signal that their account of events is being taken seriously — which reduces defensiveness on both sides.',
      example: "'Before I respond, let me make sure I understand what happened — because I want to get this right, not give you a general answer. Walk me through Thursday from your side. What did your team see first?'",
      imageSlug: '/images/let-me-make-sure-i-understand-what-happened.png',
    },
    {
      phrase: 'THAT IS NOT THE EXPERIENCE WE WANT YOU TO HAVE',
      definition: "An acknowledgement phrase that confirms the failure without excessive self-blame or defensive explanation. It connects the customer's experience to the standard they should expect — which validates their right to be unhappy without over-apologising in a way that can feel hollow or create liability.",
      example: "'What you described on Thursday — the system going down at 9am with no prior warning and no response for two hours — that is not the experience we want you to have. You are right to be frustrated, and I am not going to minimise that.'",
      imageSlug: '/images/that-is-not-the-experience-we-want-you-to-have.png',
    },
    {
      phrase: 'WHAT I CAN DO IS',
      definition: "A diplomatic redirect that names what is possible rather than leading with what is not. 'What I can do is' keeps the conversation solution-focused and avoids the dead-end energy of 'I can't do that' or 'that's not our policy.' It also signals agency — the person you are speaking to is telling you what they are able to offer, not hiding behind a rule.",
      example: "'I understand you want a full refund for the month — and I want to be transparent with you about what I can approve directly. What I can do is credit you for the downtime period and escalate the refund question to our account director today. I will have an answer for you before the end of the day.'",
      imageSlug: '/images/what-i-can-do-is.png',
    },
    {
      phrase: 'I WANT TO BE TRANSPARENT WITH YOU',
      definition: 'A composure phrase that signals honest, direct communication is coming — often used when the news is difficult or when part of the failure involves something the customer may not want to hear. It pre-frames the next sentence as honest rather than evasive, which means the customer is more likely to receive it without resistance.',
      example: "'I want to be transparent with you about what we found when we investigated Thursday. Part of what contributed to the downtime was a configuration setting that was changed during your team's onboarding. I am not saying this to deflect — I am saying it because understanding the cause is the only way to prevent it from happening again.'",
      imageSlug: '/images/i-want-to-be-transparent-with-you.png',
    },
    {
      phrase: "LET'S FOCUS ON WHAT WE CAN RESOLVE RIGHT NOW",
      definition: 'A de-escalation close that moves the conversation from grievance to action — useful when a customer is circling the same complaint repeatedly or when the conversation has been productive but needs to move toward resolution. It acknowledges that there is more to discuss without letting the grievance phase continue indefinitely.',
      example: "'I hear everything you are saying — and there is more to discuss about the root cause and the process changes we need to make. But I want to make sure we do not end this call without resolving the immediate impact on your team. Let's focus on what we can fix right now, and then I will schedule a follow-up for the broader conversation.'",
      imageSlug: '/images/lets-focus-on-what-we-can-resolve-right-now.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, I need you to understand how serious this is. The system went down at 9am on Thursday, my entire team was locked out for three hours, and not a single person from your company responded to our support tickets until noon. This is completely unacceptable.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Marcus, I can hear that this has been an incredibly frustrating experience — and you are right that what happened on Thursday was not acceptable. Before I say anything else, I want to make sure I fully understand what your team went through. Can you walk me through what happened from your side?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'We had a client presentation at 10am. My team could not access any of their data. They had to present from memory and apologise to the client. Do you understand what that does to our credibility? I am beyond frustrated.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I understand completely — and I want to [[acknowledge:to explicitly confirm that something happened and that it mattered]] that directly: a client presentation disrupted by a system failure, with no support response for three hours, is a serious failure on our part. Your team should not have been in that position. That is not the experience we want you to have.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "'Not the experience you want me to have' — I have heard that phrase from three different vendors this year. What I want is an explanation and a guarantee it will not happen again. And frankly, I want to know what you are going to do about the presentation we nearly lost.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Those are exactly the right questions — and I want to answer all three. I want to be [[transparent:open and honest about what happened]] with you about what we found when we investigated. The outage was caused by a server-side issue in the region your account sits on. The three-hour response time was a failure in our escalation process — our on-call team was not notified correctly. Both of those are our responsibility.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So this was entirely your fault. I want a full month's credit. And I want a written commitment that this will not happen again.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I want to be honest about what I can approve directly. What I can do is issue a credit for the downtime period today — that is within my authority and I will confirm it in writing before the end of this call. On the monthly credit and the written commitment, I need to involve our account director. I will have an answer from her by end of business tomorrow.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Tomorrow is not good enough. You have already kept us waiting three hours once. I want answers today, and honestly, I am not sure this relationship is worth continuing.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I hear that — and I am not going to [[defuse:to reduce the intensity of a difficult situation]] that concern by making promises I cannot keep. What I can promise is that my account director will be contacted within the hour and will have a response to you by 5pm today — not tomorrow. I am going to move the timeline because this situation warrants it.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Fine. But I also want someone to explain to my CEO why this happened. She was in the 10am presentation. This reflects on me.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I understand — and I want to help you manage that conversation. I can prepare a written summary of what happened, what caused it, and what we have changed, specifically formatted so you can share it with your CEO. That is something I can do today. It will not undo Thursday, but it gives you something concrete to present that shows the problem has been taken seriously and addressed.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That would actually be useful. And Riley — I appreciate that you have not been defensive about this. Most people in your position would have been.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thursday was a failure and you deserved a straight answer. Let's focus on what we can resolve right now — the downtime credit, the account director call, and the CEO summary — and then I want to schedule a thirty-minute call next week to walk through the process changes we are putting in place. I want you to have full visibility, not just a reassurance.",
    }
  ],

  matchingExercise: [
    {
        "word": "DE-ESCALATE",
        "definition": "To reduce the intensity of a conflict — always comes before problem-solving, because a customer who feels unheard cannot be helped"
    },
    {
        "word": "EMPATHY",
        "definition": "Understanding and expressing the feelings of another — must be specific and genuine to work; scripted versions are often worse than none at all"
    },
    {
        "word": "COMPOSURE",
        "definition": "Calm, controlled self-presentation in a confrontational situation — a professional skill with specific language patterns, not just a personal quality"
    },
    {
        "word": "ACKNOWLEDGE",
        "definition": "To explicitly confirm that something happened and that it matters — the step that must come before any explanation or solution"
    },
    {
        "word": "DEFUSE",
        "definition": "To reduce tension by addressing the emotion before the practical problem — reversing the order almost never works"
    },
    {
        "word": "DIPLOMATIC",
        "definition": "Handling difficult conversations with honesty and care for how the message lands — precise, not evasive"
    },
    {
        "word": "TONE",
        "definition": "The quality of how words are delivered — often more important than content, because it determines whether the customer can receive what is being said"
    },
    {
        "word": "BOUNDARY",
        "definition": "A professional limit on what is acceptable — set by naming what you need in order to help, not by telling the customer what they are doing wrong"
    }
],
  fillBlankExercise: [
    {
        "before": "Riley did not argue with Marcus or defend the company. She",
        "after": "d the call in three moves: she let him finish without interrupting, acknowledged the impact in his own terms, and asked one question about how his team had been affected.",
        "answer": "defuse"
    },
    {
        "before": "Riley's",
        "after": "was deliberate: when Marcus raised his voice, she lowered hers. When he repeated himself, she slowed down. These were not passive responses — they were professional techniques that changed the emotional dynamic without a word about how he was speaking.",
        "answer": "composure"
    },
    {
        "before": "Riley showed genuine",
        "after": "by using his specific detail — the client presentation, the 10am timing — rather than a formula. 'I can imagine what it felt like to discover this on a Monday morning with your team waiting on you' landed where 'I understand your frustration' would not.",
        "answer": "empathy"
    },
    {
        "before": "Riley",
        "after": "d the failure before she explained anything: 'What you experienced on Thursday was not acceptable, and your team should not have been in that position.' Only then did she explain what had happened — and by then Marcus was ready to hear it.",
        "answer": "acknowledge"
    },
    {
        "before": "Riley needed to tell Marcus that part of the failure involved his team's configuration choices. She was",
        "after": ": she did not say 'your team made an error' — she said 'part of what contributed to this was a configuration decision made at setup, and I want to walk through that together so we can prevent it from happening again.'",
        "answer": "diplomatic"
    },
    {
        "before": "Marcus could not explain why he felt better after the call. The reason was",
        "after": ": Riley had delivered difficult information — including information that reflected badly on his own team — in a way that was consistently warm, direct, and focused on resolution.",
        "answer": "tone"
    },
    {
        "before": "When Marcus's language became personal, Riley set a",
        "after": "without raising her voice: 'I want to resolve this for you — and I can do that best if we keep the conversation focused on what happened and what we do next.'",
        "answer": "boundary"
    },
    {
        "before": "Riley reduced the intensity of the call by addressing the emotion before the problem. Her ability to",
        "after": "the situation meant that by the time she moved to the explanation, Marcus was frustrated rather than furious — a conversation she could have.",
        "answer": "de-escalate"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley say 'let me make sure I understand what happened' before responding to Marcus's complaint?",
        "options": [
            "Because she does not yet have the information she needs to respond and needs to buy time",
            "Because slowing the conversation and signalling full engagement is itself a de-escalation technique — it shows the customer they are being heard, not managed",
            "Because her company requires her to gather the facts before making any commitments",
            "Because she suspects Marcus's account of events may be inaccurate and wants to probe it carefully"
        ],
        "correctIndex": 1
    },
    {
        "question": "Marcus says 'I understand your frustration — I've heard that phrase from three different vendors this year.' What does this reveal about the phrase — and how does Riley avoid the same trap?",
        "options": [
            "It reveals that the phrase is too informal for a C-suite conversation — Riley switches to more formal language",
            "It reveals that scripted empathy is immediately recognised and dismissed — Riley uses specific empathy tied to Marcus's situation rather than a formula",
            "It reveals that Marcus has had many vendor failures and is unusually difficult to satisfy",
            "It reveals that Marcus is testing Riley to see if she will repeat the same pattern"
        ],
        "correctIndex": 1
    },
    {
        "question": "Riley says 'I want to be transparent with you' before explaining that part of the failure involved Marcus's team's configuration choices. Why does she frame it this way?",
        "options": [
            "Because it is a legally required disclaimer before attributing fault to a customer",
            "Because pre-framing the next sentence as honest reduces resistance — the customer is more likely to hear difficult information if they are told it is coming directly, rather than experiencing it as a surprise",
            "Because Marcus has previously accused her of being evasive and she wants to address that directly",
            "Because she is not completely sure the information is accurate and wants to signal uncertainty"
        ],
        "correctIndex": 1
    },
    {
        "question": "When Riley sets a boundary after Marcus's language becomes personal, she says 'I can resolve this for you most effectively if we keep the conversation focused on what happened and what we do next.' Why is this more effective than telling him to stop?",
        "options": [
            "Because it is more polite and therefore less likely to make Marcus angrier",
            "Because it frames the boundary as a condition for helping him rather than a criticism of his behaviour — which invites cooperation instead of resistance",
            "Because addressing his behaviour directly would be outside the scope of her professional role",
            "Because she is not sure whether his behaviour crosses a professional line and does not want to overreact"
        ],
        "correctIndex": 1
    },
    {
        "question": "Riley says 'what I can do is issue a credit for the downtime period' rather than addressing the full monthly refund request immediately. What principle is she applying?",
        "options": [
            "She is managing Marcus's expectations by starting with the smallest concession and working upward",
            "She is keeping the conversation solution-focused by naming what she can commit to immediately, rather than leading with limitations — 'what I can do is' is more constructive than 'I can't approve that'",
            "She is protecting herself from making commitments she cannot keep by only confirming what is within her authority",
            "She is following a scripted de-escalation protocol that requires small concessions before larger ones"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the lesson, why must acknowledgement come before explanation in a difficult customer conversation?",
        "options": [
            "Because it is legally safer to acknowledge the customer's experience before providing an explanation that might be used against the company",
            "Because everything said before the acknowledgement sounds like a defence — the customer cannot hear an explanation until they feel their experience has been confirmed as real and valid",
            "Because the customer needs emotional closure before they can process factual information",
            "Because starting with an explanation signals that the company is prioritising its own narrative over the customer's experience"
        ],
        "correctIndex": 1
    },
    {
        "question": "At the end of the dialogue, Marcus says 'I appreciate that you haven't been defensive.' What has Riley done throughout the conversation that produced this response?",
        "options": [
            "She agreed with everything Marcus said and made no attempt to explain the company's position",
            "She maintained composure, acknowledged the failure without minimising it, was transparent about the cause including the customer's contribution, and focused on resolution rather than justification — all without raising her voice or becoming defensive",
            "She offered him a larger credit than he asked for, which resolved his frustration before it could build further",
            "She escalated immediately to her account director rather than trying to handle the situation herself"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between being 'diplomatic' and being 'evasive' in a difficult customer conversation?",
        "options": [
            "Diplomatic responses are shorter and more direct; evasive responses use more words to say less",
            "Diplomatic responses say the difficult thing in a way the other person can hear — they are honest and precise; evasive responses avoid the difficult thing entirely or soften it to the point where its meaning is lost",
            "Diplomatic responses are appropriate for C-suite customers; evasive responses are what salespeople use when they do not have authority to resolve the issue",
            "Diplomatic responses include an apology; evasive responses reframe the situation to avoid an apology"
        ],
        "correctIndex": 1
    }
],
  pitchCorner: {
    "title": "Service Failure Response Email",
    "context": "Marcus has sent an angry email after the Thursday incident. Riley needs to respond in writing — acknowledging the failure, being transparent about the cause, committing to specific actions, and setting up the next conversation",
    "passage": [
        {
            "before": "Dear Marcus,\n\nThank you for writing directly — this situation deserves a direct response, not a template.\n\nI want to start by saying that what your team experienced on Thursday was not acceptable. A system outage at 9am with no support response for three hours, on a day when you had a client presentation — that is a serious failure, and I am not going to",
            "after": "it or explain it away before I have acknowledged it properly. Your team should not have been in that position.",
            "answer": "defuse"
        },
        {
            "before": "I have investigated the incident and I want to be fully",
            "after": "with you about what we found. The outage was caused by a server-side issue in your account region. The delayed response was a failure in our on-call escalation process — the right team was not notified in time. Both of these are our responsibility.",
            "answer": "transparent"
        },
        {
            "before": "I also want to share something that is harder to say: part of what extended the downtime was a configuration setting changed during your onboarding. I am raising this not to deflect responsibility, but because I think you deserve the full picture — and because understanding the cause is the only way to resolve it permanently. I hope the",
            "after": "of that information reflects the kind of working relationship I want to have with you.",
            "answer": "transparency"
        },
        {
            "before": "Here is what I can commit to immediately. A credit for the full downtime period will be confirmed in writing today — that is within my authority and it will be done before 5pm. On the question of a monthly credit, I have escalated this to our account director and she will respond to you directly today. I want to be clear about what I can do now so that you are not waiting without knowing",
            "after": "is happening.",
            "answer": "what"
        },
        {
            "before": "For your CEO conversation, I am preparing a written summary of the incident — what happened, why it happened, and what we have changed. It is specifically formatted to be shared with leadership. It will be with you by tomorrow morning. I recognise that Thursday reflected on you, and I want to give you something concrete to present that shows the situation was taken seriously and",
            "after": "d professionally.",
            "answer": "handle"
        },
        {
            "before": "Let's focus on what we can",
            "after": "right now — the credit, the account director response, and the CEO summary — and then I would like to schedule thirty minutes next week to walk you through the process changes we are implementing. Not to reassure you with words, but to give you full visibility into what has been done and why it will not happen again.\n\nI am available for a call today if you would prefer to discuss any of this live.\n\nRiley",
            "answer": "resolve"
        }
    ]
},
  dealClinic: {
    "context": "Marcus has just said in a call: 'This is the second time this has happened. I am seriously considering cancelling our contract. I want answers and I want them now.' Watch how two customer success managers respond.",
    "transcript": [
        {
            "speaker": "Marcus",
            "speakerColor": "purple",
            "text": "This is the second time in four months that your system has caused a disruption during a client-facing moment. I am done being patient. I am considering cancelling, and if you cannot give me real answers today, I will be speaking to your CEO directly."
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "Marcus, I completely understand how you feel, and I sincerely apologise for the disruption this has caused. I want to assure you that we take this very seriously and that our technical team is already working on the root cause. I am going to personally make sure this gets the highest priority internally. I would really hate to lose you as a customer — you have been so important to us, and I am confident we can make this right."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Customer Success Manager A — Response to cancellation threat",
            "verdict": {
                "isGood": false,
                "explanation": "Weak on several levels. 'I completely understand how you feel' is a scripted opener Marcus will dismiss. 'I sincerely apologise' without any specific acknowledgement of what went wrong sounds hollow — especially on a second incident. 'I am going to personally make sure this gets the highest priority' is a vague promise with no commitment attached. And 'I would really hate to lose you as a customer — you have been so important to us' is emotional leverage that puts the salesperson's interests in the conversation — which a frustrated customer reads as the company caring about revenue more than about the failure. None of this addresses what happened, why it happened, or what specifically will be done."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "Marcus, a second incident in four months — I hear you. Before I say anything else, let me make sure I understand exactly what happened today from your side, because I want to give you a real answer, not a general one. What did your team experience?"
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Customer Success Manager B — Response to cancellation threat",
            "verdict": {
                "isGood": true,
                "explanation": "Strong opening. 'A second incident in four months — I hear you' acknowledges both the pattern and the scale of the frustration in five words, without a formula. Immediately asking what happened positions Salesperson B as someone gathering information to give a real answer, not defending a position. 'A real answer, not a general one' signals that what follows will be specific — which is what Marcus is asking for. The opening does not mention the cancellation threat, the company's distress at losing the customer, or any assurance — it simply starts by listening."
            }
        },
        {
            "speaker": "Marcus",
            "speakerColor": "purple",
            "text": "System down for ninety minutes at 2pm. My team was in a client demo. Same as last time. I got one automated email and then silence."
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "That is absolutely unacceptable and I am mortified that this has happened again. I promise you that heads are going to roll internally over this. I am going to speak to the VP of Engineering personally today and I want to offer you a full month's credit as an immediate gesture of goodwill — you absolutely deserve it."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Customer Success Manager A — Follow-up move",
            "verdict": {
                "isGood": false,
                "explanation": "Damaging. 'Heads are going to roll internally' is performative and unprofessional — it signals chaos rather than control, and it will not reassure a customer who needs to trust that the company is capable of fixing the problem. 'I am mortified' puts the emotion on the salesperson rather than on the customer's experience. The full month's credit 'as an immediate gesture of goodwill' — offered without understanding the cause or the customer's specific request — reads as buying silence rather than resolving the issue. Marcus wanted answers. He got a credit and a performance."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "A client demo disrupted for ninety minutes with no human response — on a second occurrence. That is not the experience you should be having, and I am not going to minimise it. Here is what I can tell you right now: I am pulling the incident report as we speak, and I want to give you a real explanation — not a holding statement — within two hours. On the credit question: I can issue a credit for the downtime period immediately. On the broader question of what you should expect from us going forward, I want to have that conversation with our account director on the line. Can we do a call at 4pm today?"
        },
        {
            "speaker": "Marcus",
            "speakerColor": "purple",
            "text": "4pm works. I want the account director there and I want actual answers — not assurances."
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "That is exactly what you will get. And Marcus — the cancellation question is yours to make, and I respect that. What I want is for that decision to be made with full information about what happened, why it happened twice, and what is changing. If after that conversation you still want to cancel, I will understand. But I want to earn the right to keep your business, not ask you to give it on goodwill alone.",
            "verdict": {
                "isGood": true,
                "explanation": "Excellent close. Salesperson B has made specific commitments with specific timelines — the incident report in two hours, the 4pm call with the account director. They have named what they can do immediately (downtime credit) and what requires a senior conversation (the broader expectation), without hiding behind limitations. The closing paragraph is the most powerful move: by explicitly acknowledging Marcus's right to cancel, and framing the remaining conversation as about earning the business rather than keeping it by default, Salesperson B has shifted the dynamic entirely. Marcus is no longer threatening — he is being treated as someone whose decision is respected. This is both diplomatic and strategically sound."
            }
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. For each difficult customer situation, choose the response that best demonstrates diplomacy, tone control, and de-escalation. Discuss your reasoning before clicking.",
        "items": [
            {
                "customerLine": "A customer says: 'Your support team is completely useless. I have been waiting four days for a response and nothing.'",
                "options": [
                    "Say: 'I completely understand your frustration and I sincerely apologise for the delay. Our support team has been very busy recently but I will personally make sure your ticket is prioritised.'",
                    "Say: 'Four days with no response — that is not acceptable and I am not going to try to explain it before I have fixed it. Let me pull up your ticket right now. While I do that, can you tell me what you need resolved most urgently, so we start there?'",
                    "Say: 'I am sorry you feel that way. Our support team works very hard and I am sure there is an explanation for the delay. Let me find out what happened and get back to you.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A leads with a formula ('I completely understand') and a vague promise ('personally make sure') that experienced customers dismiss immediately. C is defensive — 'our support team works very hard' and 'I am sure there is an explanation' both prioritise the company's position over the customer's experience. B acknowledges the specific failure (four days, no response), commits to immediate action (pulling the ticket now), and redirects to what the customer needs most urgently — all without a formula or a vague assurance."
            },
            {
                "customerLine": "A customer sends an angry email saying: 'I want to speak to someone senior. The people I have been dealing with clearly cannot resolve this.'",
                "options": [
                    "Escalate immediately to a senior manager and let them handle the response from here.",
                    "Reply: 'I hear you — and I want to respond to this directly rather than just passing it on. I am the account lead for your business, and I want to understand what has not been resolved so I can either fix it myself or make sure the right person is involved. Can you tell me the three most important things that still need to be resolved from your perspective?'",
                    "Reply: 'I am sorry to hear you feel that way. I have escalated your request to our senior team and someone will be in touch with you shortly.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A passes the problem without engaging, which can feel like avoidance and leaves the customer uncertain about what happens next. C escalates with a vague 'someone will be in touch shortly' — which is exactly the kind of response the customer is already frustrated by. B acknowledges the request, takes ownership rather than deflecting, and asks a structured question that moves the conversation toward resolution. It also keeps the door open for escalation if needed — 'either fix it myself or make sure the right person is involved' — without making the escalation feel like abandonment."
            },
            {
                "customerLine": "During a difficult call, the customer's language becomes aggressive and personal: 'People like you are why nothing ever gets fixed in this industry.'",
                "options": [
                    "Say: 'I understand you are frustrated, but I need to ask you to keep the conversation professional or I will need to end this call.'",
                    "Say: 'I hear that this has been a deeply frustrating experience — and I want to resolve it. I can do that most effectively if we keep the conversation focused on the situation and what we can fix. I am not going anywhere. Can we do that?'",
                    "Ignore the comment and continue addressing the practical issues — raising it will only escalate the situation."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A sets a boundary but frames it as a threat ('I will need to end this call'), which often provokes resistance rather than compliance. C ignores the behaviour entirely — which can signal that it is acceptable and may allow it to escalate further. B sets the same boundary as A but frames it as a condition for helping: 'I can do that most effectively if we keep the conversation focused.' It also signals that the salesperson is committed to staying ('I am not going anywhere'), which reassures the customer that the boundary is not an exit."
            },
            {
                "customerLine": "A customer says: 'I was told by your sales team this would be implemented in two weeks. It has been six weeks and we are still not live.'",
                "options": [
                    "Say: 'I want to be transparent with you about what happened. The two-week timeline was based on assumptions about your configuration that turned out to be more complex than expected. I am not raising this to deflect — I want to understand where the gap is between what was promised and where we are, and what we need to do to close it. Can we go through the current status together?'",
                    "Say: 'I completely understand your frustration. I am going to speak to the sales team about the timeline that was communicated and get back to you with a new realistic date by the end of the week.'",
                    "Say: 'Six weeks is longer than expected and I apologise for that. Implementations can be complex and sometimes things take longer than initially projected — but I can assure you we are working hard to get you live as soon as possible.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It is transparent — it names what contributed to the delay (configuration complexity) without blaming the customer, and it acknowledges that the original timeline created an expectation that has not been met. Crucially, it redirects to joint problem-solving: 'what we need to do to close it.' B blames the sales team, which shifts accountability internally in front of the customer — unprofessional and unhelpful. C vaguely apologises and reassures without a specific commitment or a clear next step."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Match each difficult customer situation to the primary technique needed to handle it. Discuss before clicking.",
        "profiles": [
            {
                "name": "Situation 1",
                "description": "A customer is very angry and speaking rapidly. They have not finished describing the problem but have already demanded a refund and threatened to cancel. They have not yet felt heard.",
                "matchKey": "de-escalate-first"
            },
            {
                "name": "Situation 2",
                "description": "You need to tell a customer that part of the problem was caused by their own team's configuration choices — but you must deliver this honestly without damaging the relationship.",
                "matchKey": "diplomatic-honesty"
            },
            {
                "name": "Situation 3",
                "description": "A customer's language has become increasingly personal and aggressive. You need to redirect the conversation without confrontation.",
                "matchKey": "boundary-setting"
            }
        ],
        "options": [
            {
                "key": "de-escalate-first",
                "label": "De-escalate before solving",
                "description": "Let the customer finish. Do not interrupt, do not problem-solve, do not defend. When they are done, acknowledge the emotional impact of what they described before you say a word about the practical situation. 'Let me make sure I understand everything from your side' is the phrase that creates the space."
            },
            {
                "key": "diplomatic-honesty",
                "label": "Diplomatic honesty",
                "description": "'I want to be transparent with you about what we found — because I think honesty serves you better than reassurance right now. Part of what contributed to the issue was a configuration decision at setup. I am raising this not to deflect, but because if we do not address it, the risk of recurrence stays the same.' Same information, delivered in a way the customer can hear."
            },
            {
                "key": "boundary-setting",
                "label": "Calm boundary-setting",
                "description": "'I want to resolve this for you — and I can do that most effectively if we keep the conversation focused on what happened and what we do next. I am not going anywhere. Can we do that?' Frame the boundary as a condition for helping, not a criticism of their behaviour."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Complete each response using language from this lesson. Compare your completions before clicking for the suggested answer.",
        "items": [
            {
                "customerLine": "A customer says: 'I am furious. This is completely unacceptable. I want to know what you are going to do about it.'",
                "salespersonStart": "I can hear how frustrated you are — and before I say anything, let me make sure I understand",
                "suggestedCompletion": "everything from your side. Walk me through what happened from the beginning. I am not going to interrupt, and I am not going to give you a general answer to a specific situation. What did your team experience?"
            },
            {
                "customerLine": "A customer says: 'I want a full refund. Your service has been terrible.'",
                "salespersonStart": "I want to be transparent about what I can do immediately and what needs a senior conversation. What I can do is",
                "suggestedCompletion": "issue a credit for the period affected — that is within my authority and I will confirm it in writing today. On the full refund, I need to involve our account director, and I want to set up a call with her this afternoon so you have an answer before the end of the day — not a promise to call you back at some point."
            },
            {
                "customerLine": "A customer is repeating the same complaint for the third time in the call without moving toward resolution.",
                "salespersonStart": "I hear you — and I want to make sure we do not end this call without something concrete. Let's focus on",
                "suggestedCompletion": "what we can resolve right now. There is more to discuss about the root cause and the process changes — and I want to have that full conversation. But I want to make sure the immediate impact on your team is addressed before we get there. What is the most urgent thing that needs to be fixed today?"
            },
            {
                "customerLine": "You need to tell a customer that part of the failure was caused by their own team's choices.",
                "salespersonStart": "I want to be transparent with you about something that is harder to say —",
                "suggestedCompletion": "because I think honesty serves you better than a partial explanation right now. Part of what contributed to the issue was a configuration change made during your team's onboarding. I am not raising this to deflect responsibility — our response time was still unacceptable regardless. I am raising it because if we do not address this specific setting, the risk of the same problem recurring stays the same no matter what else we fix."
            }
        ]
    }
},
};
