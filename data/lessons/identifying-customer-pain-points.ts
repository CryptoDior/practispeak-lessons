import { Lesson } from '@/types/lesson';

export const identifyingCustomerPainPoints: Lesson = {
  slug: 'identifying-customer-pain-points',
  title: 'Identifying Customer Pain Points',
  subtitle: 'How to name, frame, and reflect back what a customer is really struggling with',
  level: 'B1-B2',
  description: 'Learn the precise language of problem identification — how to listen for pain, name it accurately, distinguish between symptoms and root causes, and reflect back what you have heard so the prospect feels genuinely understood.',
  heroImage: '/images/identifying-customer-pain-points-hero.png',

  vocabulary: [
    {
      word: 'FRICTION',
      partOfSpeech: 'noun',
      definition: 'A point of resistance or difficulty in a process — something that slows things down or creates unnecessary effort without adding value.',
      example: 'There is a lot of friction in their approval process — every deal has to go through three sign-offs before anyone can move forward.',
      imageSlug: '/images/friction.png',
    },
    {
      word: 'SYMPTOM',
      partOfSpeech: 'noun',
      definition: 'A visible sign that a deeper problem exists — what the customer notices on the surface rather than the real cause underneath.',
      example: 'Slow follow-up times are often a symptom of a deeper issue — usually unclear ownership or no agreed process for who picks up what.',
      imageSlug: '/images/symptom.png',
    },
    {
      word: 'ROOT CAUSE',
      partOfSpeech: 'noun',
      definition: 'The underlying reason a problem exists — as opposed to the symptoms the customer can see. Solving the root cause fixes the problem; solving the symptom only masks it.',
      example: 'The root cause was not the CRM — it was that no one had defined what stage a deal needed to reach before handing it over.',
      imageSlug: '/images/root-cause.png',
    },
    {
      word: 'IMPACT',
      partOfSpeech: 'noun',
      definition: 'The measurable or felt effect a problem has on the business, the team, or an outcome — what the problem is actually costing.',
      example: 'Understanding the impact of a problem is what turns a vague complaint into a business case — it answers the question: why does this matter?',
      imageSlug: '/images/impact.png',
    },
    {
      word: 'RECURRING',
      partOfSpeech: 'adjective',
      definition: 'Happening repeatedly — a problem that keeps coming back rather than being solved once, often because only the symptom has been addressed.',
      example: 'If the same issue is recurring every quarter, that is a sign the root cause has never been properly dealt with.',
      imageSlug: '/images/recurring.png',
    },
    {
      word: 'THRESHOLD',
      partOfSpeech: 'noun',
      definition: 'The point at which a problem becomes serious enough to act on — when the pain is bad enough that doing nothing is no longer acceptable.',
      example: 'Most customers have a threshold — until a problem crosses it, they will live with it. Your job is to find out how close they are to that line.',
      imageSlug: '/images/threshold.png',
    },
    {
      word: 'UNDERLYING',
      partOfSpeech: 'adjective',
      definition: 'Existing beneath the surface — the real reason something is happening, which may not be immediately obvious from the visible symptoms.',
      example: 'The underlying issue was not the software — it was that the team had never agreed on a shared definition of what a qualified lead actually was.',
      imageSlug: '/images/underlying.png',
    },
    {
      word: 'QUANTIFY',
      partOfSpeech: 'verb',
      definition: "To express a problem in numbers or measurable terms — to move from 'this is a problem' to 'this is costing us X per month in lost deals'.",
      example: 'When you can help a prospect quantify a problem, it becomes much harder to ignore — and much easier to justify solving.',
      imageSlug: '/images/quantify.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'IT SOUNDS LIKE',
      definition: 'Reflect back what you have heard before naming the problem — shows you were listening and gives the prospect a chance to confirm or correct.',
      example: 'It sounds like the main challenge is not generating leads — it is knowing what to do with them once they are in the system.',
      imageSlug: '/images/it-sounds-like.png',
    },
    {
      phrase: 'WOULD YOU SAY THAT IS A',
      definition: 'Gently categorise a problem as a challenge, issue, or need — and check whether the prospect agrees with how you have framed it.',
      example: 'Would you say that is a process issue, or more of a people issue? I want to make sure I am framing this correctly.',
      imageSlug: '/images/would-you-say-that-is-a.png',
    },
    {
      phrase: 'HOW LONG HAS THIS BEEN GOING ON',
      definition: 'Establish how long the problem has existed — a long-standing problem signals urgency and often reveals that previous attempts to fix it have failed.',
      example: 'How long has this been going on? If it has been there for two years, that tells me something different than if it started last quarter.',
      imageSlug: '/images/how-long-has-this-been-going-on.png',
    },
    {
      phrase: 'WHAT IS THE IMPACT OF THAT ON',
      definition: 'Move from identifying the problem to understanding its consequences — helps you and the prospect see what the problem is actually costing.',
      example: 'What is the impact of that on your conversion rate? I want to understand not just the problem but what it is doing to the numbers.',
      imageSlug: '/images/what-is-the-impact-of-that-on.png',
    },
    {
      phrase: 'IS THIS SOMETHING THAT COMES UP REGULARLY',
      definition: 'Find out whether a problem is recurring or a one-off — recurring problems are more urgent and more likely to justify investment in a solution.',
      example: 'Is this something that comes up regularly, or was this more of a one-off? I want to know if we are dealing with a pattern or an exception.',
      imageSlug: '/images/is-this-something-that-comes-up-regularly.png',
    },
    {
      phrase: 'SO THE REAL ISSUE IS',
      definition: 'Summarise your understanding of the root cause once you have uncovered it — a clear, direct reframing that shows you have gone beneath the surface.',
      example: 'So the real issue is not the volume of leads — it is that no one owns the process once a lead comes in. Is that a fair way to put it?',
      imageSlug: '/images/so-the-real-issue-is.png',
    }
  ],

  videos: [],

  registerAwareness: [
    {
      context: 'Naming a problem on a discovery call',
      register: 'Conversational / Professional',
      example: "'It sounds like the real issue is visibility — not follow-up speed. The follow-up is just the symptom. Does that feel like a fair way to frame it?'",
    },
    {
      context: 'Written proposal introduction',
      register: 'Formal / Written',
      example: "'Based on our discovery conversation, we understand the primary challenge to be a lack of real-time pipeline visibility, which has resulted in inconsistent follow-up and an estimated loss of two to three deals per month. The root cause appears to be structural rather than behavioural.'",
    },
    {
      context: 'Follow-up email after discovery',
      register: 'Neutral / Professional',
      example: "'I wanted to summarise the key pain points we discussed: (1) no real-time visibility into rep activity, (2) inconsistent follow-up across the team, (3) a workaround that is not scaling. Let me know if I have missed anything or framed anything incorrectly.'",
    },
    {
      context: 'Informal conversation at a conference',
      register: 'Casual / Warm',
      example: "'So what's the thing that's actually driving you mad right now? Like, the problem that keeps coming back no matter what you try? I find that's usually the one that actually matters.'",
    },
    {
      context: 'Internal handover notes to account executive',
      register: 'Neutral / Structured',
      example: 'Root cause: no pipeline visibility at scale. Symptom: inconsistent follow-up. Impact: ~2–3 lost deals/month. Threshold crossed 8 months ago when team scaled from 5 to 12. Recurring quarterly discussion with no resolution. Strong motivation to act.',
    },
  ],

  registerTraps: [
    "❌ 'Problem' can sound harsh or accusatory in formal settings — 'challenge' or 'area of focus' is more diplomatic when you are speaking to senior stakeholders.",
    "✅ The word 'need' shifts the conversation from past (what went wrong) to future (what has to change) — use it when you are ready to move from diagnosis to solution.",
    "🔁 Reflecting back with 'it sounds like...' before naming a problem gives the prospect ownership of the diagnosis — they are more likely to act on a problem they named themselves.",
    "💡 Helping a prospect quantify a problem transforms it from a frustration to a business case — 'two to three deals a month' is harder to ignore than 'some deals are slipping through'.",
  ],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Marcus, I want to make sure I have understood what you have told me correctly before we go any further. Can I reflect back what I heard?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Please — go ahead.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It sounds like the main [[symptom:a visible sign that a deeper problem exists]] you are seeing is inconsistent follow-up — some reps responding in an hour, others taking two days. But when I listen to the whole picture, the [[underlying:existing beneath the surface; the real reason something is happening]] issue seems to be visibility. You cannot see what is happening until a deal has already gone cold.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's exactly it. The follow-up thing is almost a [[symptom:a visible sign that a deeper problem exists]] — it is what I see, but it is not really the problem.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Right. So the real issue is not what your reps are doing — it is that you have no way of knowing what they are doing until it is too late to intervene. Would you say that is a process issue, or more of a tools issue?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Honestly — both. But if I had to choose, it is a process issue first. The tools just make the problem more visible.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is a really important distinction. How long has this been going on? I want to understand whether this is a [[recurring:happening repeatedly]] [[challenge:a difficult situation that requires effort to deal with]] or something that has got worse recently.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'It has always been there to some degree, but it got significantly worse when the team grew from five reps to twelve. That was eight months ago.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'So the [[root cause:the underlying reason a problem exists]] was always there — but scaling the team is what pushed it past the [[threshold:the point at which a problem becomes serious enough to act on]]. What is the [[impact:the measurable effect a problem has on the business]] of that on your numbers? Can you [[quantify:to express a problem in measurable terms]] it at all?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Roughly — I think we are losing maybe two or three deals a month because of slow or missed follow-up. At our average deal size, that is significant.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is a real number. Is this something that comes up regularly in team reviews, or has it been more of a background [[friction:a point of resistance or difficulty in a process]] that everyone accepts?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'It comes up every quarter. We talk about it, we agree to do better, and then nothing really changes. So yes — it is very much a [[recurring:happening repeatedly]] [[issue:a problem or concern that needs to be addressed]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Then what you have is not a performance problem — it is a structural one. And structural problems do not fix themselves through motivation. That is something I think we can actually help with. Shall I tell you how?',
    }
  ],

  matchingExercise: [
    {
        "word": "FRICTION",
        "definition": "A point of resistance in a process that slows things down without adding value"
    },
    {
        "word": "SYMPTOM",
        "definition": "A visible sign that a deeper problem exists — what the customer sees on the surface"
    },
    {
        "word": "ROOT CAUSE",
        "definition": "The underlying reason a problem exists, as opposed to its visible signs"
    },
    {
        "word": "IMPACT",
        "definition": "The measurable effect a problem has on the business or team"
    },
    {
        "word": "RECURRING",
        "definition": "Happening repeatedly — a problem that keeps coming back"
    },
    {
        "word": "THRESHOLD",
        "definition": "The point at which a problem becomes serious enough to act on"
    },
    {
        "word": "UNDERLYING",
        "definition": "Existing beneath the surface — the real reason something is happening"
    },
    {
        "word": "QUANTIFY",
        "definition": "To express a problem in numbers or measurable terms"
    }
],
  fillBlankExercise: [
    {
        "before": "Slow follow-up times are often a",
        "after": "of a deeper issue — usually unclear ownership or no agreed process.",
        "answer": "symptom"
    },
    {
        "before": "There is a lot of",
        "after": "in their approval process — every deal needs three sign-offs before anyone can move.",
        "answer": "friction"
    },
    {
        "before": "The",
        "after": "was not the CRM — it was that no one had defined what a qualified lead actually was.",
        "answer": "root cause"
    },
    {
        "before": "Understanding the",
        "after": "of a problem is what turns a vague complaint into a business case.",
        "answer": "impact"
    },
    {
        "before": "If the same issue is",
        "after": "every quarter, that is a sign the root cause has never been properly dealt with.",
        "answer": "recurring"
    },
    {
        "before": "Most customers have a",
        "after": "— until a problem crosses it, they will live with it.",
        "answer": "threshold"
    },
    {
        "before": "The",
        "after": "issue was not the software — it was that the team had never agreed on a shared process.",
        "answer": "underlying"
    },
    {
        "before": "When you can help a prospect",
        "after": "a problem, it becomes much harder to ignore — and much easier to justify solving.",
        "answer": "quantify"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley do at the start of the dialogue?",
        "options": [
            "She presents her product for the first time",
            "She asks Marcus another discovery question",
            "She reflects back what she has heard and names the underlying issue",
            "She asks Marcus about his budget"
        ],
        "correctIndex": 2
    },
    {
        "question": "Marcus says follow-up inconsistency is 'almost a symptom'. What does he mean?",
        "options": [
            "The follow-up problem is not real — it is just perception",
            "Follow-up is what he sees, but it is not the actual root cause",
            "The symptom is more serious than the underlying problem",
            "He does not think follow-up speed matters"
        ],
        "correctIndex": 1
    },
    {
        "question": "What event pushed the problem past the threshold for Marcus?",
        "options": [
            "A major deal was lost due to missed follow-up",
            "The CRM stopped working correctly",
            "The team grew from 5 to 12 reps eight months ago",
            "A new sales manager joined and raised the issue"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Riley move from identifying the problem to understanding its cost?",
        "options": [
            "She asks Marcus to estimate how many deals are being lost per month",
            "She shows Marcus a benchmark from similar companies",
            "She asks Marcus to describe what good would look like",
            "She sends a follow-up questionnaire after the call"
        ],
        "correctIndex": 0
    },
    {
        "question": "What does 'is this something that comes up regularly' help Riley establish?",
        "options": [
            "Whether the team is willing to change",
            "Whether the problem is structural or behavioural",
            "Whether the problem is recurring or a one-off — which signals urgency",
            "Whether Marcus has spoken to competitors already"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Riley reframe Marcus's problem at the end of the dialogue?",
        "options": [
            "She tells him it is a performance problem that needs a coaching solution",
            "She tells him it is a structural problem — and structural problems do not fix themselves through motivation",
            "She tells him the team needs better training on the CRM",
            "She suggests the problem will resolve itself as the team matures"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the Register Traps, when is 'need' the best word to use?",
        "options": [
            "When the problem is very serious and urgent",
            "When you are speaking to a senior stakeholder",
            "When you are ready to move from diagnosis to solution — shifting from past to future",
            "When the prospect has already used the word themselves"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the difference between 'symptom' and 'root cause' as used in this lesson?",
        "options": [
            "A symptom is a serious problem; a root cause is a minor one",
            "A symptom is what the customer sees on the surface; the root cause is the underlying reason it exists",
            "They mean the same thing — both describe the main problem",
            "A symptom is a process issue; a root cause is always a people issue"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation involves naming or framing a customer's pain point. Choose the response that best identifies and reflects the real problem. Discuss your reasoning before clicking.",
        "items": [
            {
                "customerLine": "A prospect says: 'Our team just doesn't seem motivated lately.'",
                "options": [
                    "Say: 'Motivation can be a real challenge — have you considered a team-building programme?'",
                    "Say: 'When you say not motivated — what does that look like day to day? I want to make sure I understand whether this is a morale issue or whether something structural is making their work harder than it needs to be.'",
                    "Say: 'That sounds like a management issue. Is your team lead giving them enough support?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. 'Not motivated' is a symptom — the root cause could be anything from unclear expectations to process friction to lack of visibility into impact. B probes before naming the problem. A jumps to a solution category too quickly. C makes an assumption about the cause that may be wrong and risks putting the prospect on the defensive."
            },
            {
                "customerLine": "A prospect says: 'We keep losing deals in the final stage — it happens every quarter.'",
                "options": [
                    "Say: 'So the real issue is your closing technique — your reps need better negotiation training.'",
                    "Say: 'It sounds like this is a recurring pattern rather than a one-off. How long has this been happening, and what is the impact on your quarterly numbers?'",
                    "Say: 'That is common in competitive markets — what industry are you in?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It acknowledges the recurring nature of the problem and immediately moves to quantify its impact — both critical steps in identifying a real pain point. A names a cause before understanding the problem properly. C deflects into irrelevant context before exploring the actual issue."
            },
            {
                "customerLine": "A prospect has described three separate problems. You want to find the root cause. What do you say?",
                "options": [
                    "Say: 'Would you say that is a process issue, a tools issue, or a people issue? I want to understand which one is driving the others.'",
                    "Say: 'It sounds like you have a lot going on — let me tell you about how we have helped similar companies.'",
                    "Say: 'Those are all significant challenges. Our platform addresses all three of them.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. When multiple problems exist, the most useful thing is to find out which one is the root cause and which are symptoms or downstream effects. B and C both skip to solutions before the diagnosis is complete — a classic mistake that signals you stopped listening."
            },
            {
                "customerLine": "A prospect says: 'Honestly, we know what the problem is — we just haven't had time to deal with it.'",
                "options": [
                    "Say: 'That is understandable. What would it take to get it on the agenda?'",
                    "Say: 'How long has this been going on? And what is the impact of not dealing with it — is it getting worse, or is it something you can live with for now?'",
                    "Say: 'If you know what the problem is, I can jump straight to showing you how we solve it.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Knowing there is a problem is not the same as it being urgent — the prospect is telling you they have passed the awareness threshold but not yet the action threshold. Understanding the timeline and the cost of inaction is what moves it from 'acknowledged' to 'urgent'. A is reasonable but soft. C skips straight to the pitch — missing a critical opportunity to establish urgency."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect situations. As a group, decide how each person is describing their problem — are they describing a symptom, the root cause, or a need? Match each to the right frame, then click 'Check Matches'.",
        "profiles": [
            {
                "name": "Lena",
                "description": "Lena tells you: 'Our customer satisfaction scores have been dropping for the last six months.' She is clearly concerned and has brought up the numbers. She has not yet mentioned why the scores are dropping or what is causing it.",
                "matchKey": "symptom"
            },
            {
                "name": "Ben",
                "description": "Ben tells you: 'We need a single place where the whole team can see the status of every deal in real time — without having to ask anyone.' He is direct and has already done his own analysis. He knows what he wants.",
                "matchKey": "need"
            },
            {
                "name": "Priya",
                "description": "Priya tells you: 'The problem is that we have never agreed on what a qualified lead actually looks like. Every rep has a different definition, so the pipeline data is basically meaningless.' She has clearly thought about this deeply.",
                "matchKey": "root cause"
            }
        ],
        "options": [
            {
                "key": "symptom",
                "label": "Describing a symptom",
                "description": "The prospect has named a visible sign that something is wrong — but the root cause has not yet been identified. Your job is to probe deeper: 'What do you think is driving that?' before you can properly help."
            },
            {
                "key": "need",
                "label": "Describing a need",
                "description": "The prospect has moved past the problem and is describing the solution they want. This is useful — but make sure the need they have defined is the right one. It is worth asking: 'What led you to that conclusion?' to confirm the root cause."
            },
            {
                "key": "root cause",
                "label": "Describing the root cause",
                "description": "The prospect has identified the underlying reason things are not working. This is the most valuable insight in a discovery conversation — reflect it back, confirm it, and use it as the foundation for everything you propose."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started naming or framing a pain point — but the line has been cut off. Finish it using language from this lesson. Compare your versions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "Prospect says: 'We have a lot of meetings about this but nothing ever changes.'",
                "salespersonStart": "It sounds like the real issue is not awareness —",
                "suggestedCompletion": "everyone already knows the problem exists. The challenge is that knowing it and having a structure to actually fix it are two different things. Would you say that is fair? Because that tells me something quite specific about where the breakdown is."
            },
            {
                "customerLine": "Prospect says: 'Our churn rate has been creeping up for about a year.'",
                "salespersonStart": "How long has this been going on, and",
                "suggestedCompletion": "what is the impact on your revenue forecasting? A year is a long time for a trend to run — I want to understand whether this is a symptom of something you have already identified, or whether the root cause is still unclear."
            },
            {
                "customerLine": "Prospect has described several problems. You want to help them name the most important one.",
                "salespersonStart": "So the real issue, if I have understood correctly, is",
                "suggestedCompletion": "not any one of those things individually — it is that there is no single process tying them together. Each problem you have described is a symptom of the same underlying gap. Does that resonate, or am I missing something?"
            },
            {
                "customerLine": "Prospect says: 'I think we lose about three clients a quarter because of slow response times — but it is hard to prove.'",
                "salespersonStart": "That is worth trying to quantify more precisely — because",
                "suggestedCompletion": "if you can attach a number to it, it stops being a frustration and becomes a business case. Three clients a quarter at your average contract value — do you know what that is costing you annually? Once you can put a figure on it, it is much harder for anyone in the business to ignore."
            }
        ]
    }
},
};
