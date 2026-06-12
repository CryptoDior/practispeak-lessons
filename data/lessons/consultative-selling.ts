import { Lesson } from '@/types/lesson';

export const consultativeSelling: Lesson = {
  slug: 'consultative-selling',
  title: 'Consultative Selling',
  subtitle: 'Diagnose the problem before you prescribe the solution — the move that separates great salespeople from product pitchers',
  level: 'C1-C2',
  description: 'Learn the language of consultative selling — how to ask questions that go beneath the surface, help prospects articulate what they actually need, and build enough understanding to recommend the right solution at the right moment. This lesson is about restraint as much as skill: the best consultative sellers are the ones who resist the urge to pitch.',
  heroImage: '/images/consultative-selling-hero.png',

  vocabulary: [
    {
      word: 'DIAGNOSE',
      partOfSpeech: 'verb',
      definition: 'To identify the root cause of a problem by asking questions and listening carefully — before suggesting any solution. The word comes from medicine, and the parallel is intentional.',
      example: 'The mistake most salespeople make is that they start recommending before they have done the work to diagnose — so they end up pitching solutions to symptoms rather than causes.',
      imageSlug: '/images/diagnose.png',
    },
    {
      word: 'PROBE',
      partOfSpeech: 'verb',
      definition: 'To ask a follow-up question that goes deeper than the surface answer — the move that separates consultative sellers from people who just listen politely.',
      example: "When James said 'we have a reporting problem', most salespeople would have started pitching reporting features. Riley probed instead: 'What does a reporting problem actually cost you in a typical week?'",
      imageSlug: '/images/probe.png',
    },
    {
      word: 'UNDERLYING',
      partOfSpeech: 'adjective',
      definition: 'Describing the real or hidden cause beneath what someone first says — the thing beneath the thing. Prospects often describe symptoms; the underlying issue is what needs addressing.',
      example: 'The stated problem was slow reporting. The underlying issue was that no one trusted the data — so even fast reports would not have fixed anything.',
      imageSlug: '/images/underlying.png',
    },
    {
      word: 'ASSUMPTION',
      partOfSpeech: 'noun',
      definition: "Something you believe to be true about a prospect's situation without having checked — the enemy of consultative selling. Good discovery replaces assumptions with evidence.",
      example: "Going into the call, Riley had assumed the team's main problem was pipeline visibility. That assumption was wrong — the real issue was data quality upstream of the pipeline.",
      imageSlug: '/images/assumption.png',
    },
    {
      word: 'QUALIFY',
      partOfSpeech: 'verb',
      definition: "To determine whether a prospect's situation is a genuine fit for what you offer — and just as importantly, to recognise when it is not. Consultative sellers qualify honestly.",
      example: 'After twenty minutes of discovery, Riley realised the prospect needed a data integration tool before they needed Brightline. She said so — and qualified them out. They came back six months later.',
      imageSlug: '/images/qualify.png',
    },
    {
      word: 'ARTICULATE',
      partOfSpeech: 'verb',
      definition: 'To express a need, problem, or goal clearly and precisely in words. Many prospects can feel a problem but struggle to articulate it — helping them do that is one of the most valuable things a consultative seller does.',
      example: "James had been frustrated with his team's performance for months but had not been able to articulate why. The discovery call helped him see that the problem was process, not people.",
      imageSlug: '/images/articulate.png',
    },
    {
      word: 'PRIORITY',
      partOfSpeech: 'noun',
      definition: 'What matters most to the prospect right now — not what is on their list, but what is at the top of it. Consultative sellers always establish priorities before making any recommendation.',
      example: 'James listed four problems in the first five minutes. Riley did not respond to any of them immediately — she asked him to rank them by priority first, then focused the rest of the call on the top two.',
      imageSlug: '/images/priority.png',
    },
    {
      word: 'CRITERION',
      partOfSpeech: 'noun',
      definition: "A specific condition or standard the solution must meet — understanding the prospect's criteria early prevents you from presenting something that fails on a requirement you never knew about.",
      example: "One of James's criteria was that any new tool had to integrate with their existing CRM without a custom build. Riley discovered this in minute eight — which saved both of them forty minutes of the wrong conversation.",
      imageSlug: '/images/criterion.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'BEFORE I SUGGEST ANYTHING',
      definition: 'Signals consultative intent from the opening — tells the prospect you are not going to pitch immediately, that you want to understand first. Sets the tone for the whole call.',
      example: 'Before I suggest anything, I want to spend the first twenty minutes understanding what is actually happening in your team — because I have found that what people tell me at the start and what is really going on are often quite different.',
      imageSlug: '/images/before-i-suggest-anything.png',
    },
    {
      phrase: 'HELP ME UNDERSTAND',
      definition: "A soft entry into a deeper question — less confrontational than 'why' but more purposeful than 'tell me more'. Signals that you are genuinely curious rather than following a script.",
      example: 'You mentioned that deals are slipping in the final stage. Help me understand what that looks like in practice — is it a price conversation, a timing issue, or something else entirely?',
      imageSlug: '/images/help-me-understand.png',
    },
    {
      phrase: 'WHAT DOES THAT LOOK LIKE IN PRACTICE',
      definition: 'Turns a vague or abstract statement into a specific, observable situation — grounds the conversation in reality so you are working with evidence, not assumptions.',
      example: 'You said the team is not following the process. What does that look like in practice — are they skipping steps, recording things late, or doing something different entirely from what the process requires?',
      imageSlug: '/images/what-does-that-look-like-in-practice.png',
    },
    {
      phrase: 'WHAT WOULD A GOOD OUTCOME LOOK LIKE',
      definition: 'Moves the conversation from problem to aspiration — essential before any recommendation, because it tells you what success means to this specific prospect.',
      example: 'We have spent some time on what is not working. What would a good outcome look like for you six months from now — not the tool you use to get there, but the actual situation you want to be in?',
      imageSlug: '/images/what-would-a-good-outcome-look-like.png',
    },
    {
      phrase: 'IF YOU HAD TO RANK THOSE',
      definition: 'A prioritisation move that cuts through a list of problems and tells you what matters most — prevents you from responding to the wrong thing or treating everything as equally urgent.',
      example: 'You have mentioned three or four issues there. If you had to rank those by the one that is costing you the most right now — either in time, money, or deals — which would be at the top?',
      imageSlug: '/images/if-you-had-to-rank-those.png',
    },
    {
      phrase: 'AM I READING THIS RIGHT',
      definition: 'A checking and confirming move that shows you have been listening actively and gives the prospect a chance to correct your understanding before you move to a recommendation.',
      example: 'So the data goes in, but by the time it reaches the report it has been touched by three different people and no one is sure if the numbers are accurate. Am I reading this right — the problem is not the volume of data, it is the integrity?',
      imageSlug: '/images/am-i-reading-this-right.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'James, thanks for making time. Before I suggest anything about what we do — and I will get to that — I want to spend the first part of this call understanding what is actually going on. Is that okay?',
    },
    {
      speaker: 'James',
      speakerColor: 'blue',
      speakerAvatar: '/images/james-icon.png',
      text: 'Sure. Honestly, it would be a nice change. Most people come in and start showing me slides immediately.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I have learned not to. So — you reached out because of pipeline visibility. Help me understand what that means for your team specifically.',
    },
    {
      speaker: 'James',
      speakerColor: 'blue',
      speakerAvatar: '/images/james-icon.png',
      text: 'We have a reporting problem. Every Monday I get a pipeline report that is already out of date by the time I read it. I cannot make decisions from it.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'What does that look like in practice — is the data late, is it incomplete, or is it that you do not trust what is in it?',
    },
    {
      speaker: 'James',
      speakerColor: 'blue',
      speakerAvatar: '/images/james-icon.png',
      text: 'Honestly? All three. But the biggest issue is trust. My reps update the CRM inconsistently, so even when I have a report in front of me, I am not sure the numbers are real.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is an important distinction. The [[underlying:the real or hidden cause beneath what someone first says]] issue is not the reporting — it is data quality upstream. Am I reading this right?',
    },
    {
      speaker: 'James',
      speakerColor: 'blue',
      speakerAvatar: '/images/james-icon.png',
      text: 'Yes. Exactly. If the data going in is wrong, it does not matter how good the report is.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Agreed. So help me understand what you have already tried. Because I want to make sure I am not walking you back into something you have already ruled out.',
    },
    {
      speaker: 'James',
      speakerColor: 'blue',
      speakerAvatar: '/images/james-icon.png',
      text: 'We have tried three different CRM configurations, a weekly review process, and a rep coaching programme. The coaching helped a little. The rest made no difference.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'You have mentioned the reporting issue, the data quality issue, and the rep behaviour issue. If you had to rank those by which one is costing you the most right now, which would be first?',
    },
    {
      speaker: 'James',
      speakerColor: 'blue',
      speakerAvatar: '/images/james-icon.png',
      text: 'The rep behaviour. If the reps updated the CRM properly, the data would be right and the report would take care of itself.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That tells me something important. What would a good outcome look like for you — not a tool, but the actual situation six months from now?',
    },
    {
      speaker: 'James',
      speakerColor: 'blue',
      speakerAvatar: '/images/james-icon.png',
      text: 'I want to open my laptop on Monday morning and trust what I am looking at. That is it. I want to be able to make a decision from the data in front of me without having to [[probe:to ask follow-up questions that go deeper than the surface answer]] every number.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Then I want to show you something specific — because what you have just described is exactly the problem Brightline was built to solve. Not the reporting. The gap between what your reps do and what your data reflects. That is the [[criterion:a specific condition the solution must meet]] that matters here — and it is the one most tools miss.',
    }
  ],

  matchingExercise: [
    {
        "word": "DIAGNOSE",
        "definition": "To identify the root cause of a problem by asking questions and listening — before suggesting any solution"
    },
    {
        "word": "PROBE",
        "definition": "To ask a follow-up question that goes deeper than the surface answer"
    },
    {
        "word": "UNDERLYING",
        "definition": "Describing the real or hidden cause beneath what someone first says — the thing beneath the thing"
    },
    {
        "word": "ASSUMPTION",
        "definition": "Something you believe to be true about a prospect's situation without having checked"
    },
    {
        "word": "QUALIFY",
        "definition": "To determine whether a prospect's situation is a genuine fit for what you offer — and to recognise when it is not"
    },
    {
        "word": "ARTICULATE",
        "definition": "To express a need, problem, or goal clearly and precisely in words"
    },
    {
        "word": "PRIORITY",
        "definition": "What matters most to the prospect right now — not what is on their list but what is at the top of it"
    },
    {
        "word": "CRITERION",
        "definition": "A specific condition or standard the solution must meet — understanding this early prevents presenting the wrong fit"
    }
],
  fillBlankExercise: [
    {
        "before": "Before I suggest anything, I want to spend some time trying to",
        "after": "what is actually happening — because the stated problem and the real problem are often quite different.",
        "answer": "diagnose"
    },
    {
        "before": "When the prospect said 'we have a visibility problem', I did not respond immediately — I",
        "after": "further: 'What does a visibility problem actually cost you in a week?'",
        "answer": "probed"
    },
    {
        "before": "The stated problem was slow approvals. The",
        "after": "issue was that no one had authority to make decisions without going back to the CEO.",
        "answer": "underlying"
    },
    {
        "before": "I went into the call with an",
        "after": "that price was the main barrier. I was wrong — the real concern was implementation risk.",
        "answer": "assumption"
    },
    {
        "before": "After twenty minutes, it became clear this was not the right fit for us — so I",
        "after": "them out and recommended two other options I thought would serve them better.",
        "answer": "qualified"
    },
    {
        "before": "Many prospects can feel a problem but cannot",
        "after": "it — helping them find the words for it is one of the most valuable things you can do in a discovery call.",
        "answer": "articulate"
    },
    {
        "before": "You have mentioned five things. What is the",
        "after": "right now — if you could only fix one thing this quarter, which would it be?",
        "answer": "priority"
    },
    {
        "before": "Early in the call, James told me one of his",
        "after": "was that any solution had to work with his existing CRM without a custom integration. That narrowed things down immediately.",
        "answer": "criteria"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley say 'Before I suggest anything' at the start of the call?",
        "options": [
            "She does not yet know enough about Brightline to present it confidently",
            "She is deliberately setting a consultative tone — signalling that she will listen before she pitches, which changes the dynamic of the entire conversation",
            "It is a standard opening line that most salespeople use",
            "She has been told by her manager to spend more time on discovery"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the underlying issue Riley identifies — and why does it matter?",
        "options": [
            "The reporting tool is outdated and needs to be replaced",
            "The reps are not performing well enough and need more coaching",
            "The real problem is CRM data integrity upstream of the report — meaning any reporting solution alone would fail to fix anything",
            "The Monday pipeline report is being sent too late in the week"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why does Riley ask James to rank his problems before responding to any of them?",
        "options": [
            "She wants to fill time before showing the product",
            "Ranking reveals what matters most, so she can focus the rest of the call on the right problem rather than treating everything as equally urgent",
            "It is a technique to make the prospect feel heard before the pitch begins",
            "She needs to know which features of Brightline to demonstrate"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'Am I reading this right?' achieve in a consultative conversation?",
        "options": [
            "It fills silence when you are not sure what to say next",
            "It confirms your understanding and gives the prospect control — when they say 'yes, exactly', they are confirming that you understood them, which builds trust",
            "It is a polite way to check if the prospect has been paying attention",
            "It signals that you are about to move to the product demonstration"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the lesson, why is helping a prospect articulate their own problem more valuable than articulating it for them?",
        "options": [
            "It saves you time because you do not have to explain it yourself",
            "It avoids the risk of using terminology the prospect does not understand",
            "A prospect who has said the problem aloud in their own words is far more committed to solving it than one who heard you say it",
            "It gives you more information to use when writing the proposal"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does 'qualify' mean in the context of consultative selling — and what makes it a consultative move rather than a sales tactic?",
        "options": [
            "Qualifying means confirming the prospect has budget — it is purely a commercial checkpoint",
            "Qualifying means determining fit honestly, including recognising when your solution is NOT the right answer — which requires putting the prospect's interests above the sale",
            "Qualifying means preparing the right questions before a discovery call",
            "Qualifying is a way of filtering out prospects who are not serious buyers"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Riley only mention Brightline at line 14 of the dialogue?",
        "options": [
            "She forgot to mention it earlier",
            "She was waiting until she had built enough rapport",
            "By line 14, James has articulated his own problem clearly and Riley can now connect the solution directly to something he has said — making it land as relevant rather than generic",
            "The product is complex and needs a lot of context before it can be introduced"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is wrong with entering a sales call with assumptions about what the prospect needs?",
        "options": [
            "It makes you sound overconfident and puts the prospect on the defensive",
            "It means you may pitch solutions to symptoms rather than causes — and miss the real problem entirely",
            "Assumptions are always wrong in complex B2B sales",
            "It prevents you from asking open questions because you already think you know the answer"
        ],
        "correctIndex": 1
    }
],
  pitchCorner: {
    "title": "Post-Discovery Email: Needs Summary",
    "context": "Riley sends this email to James the morning after their discovery call — confirming her understanding before making any recommendation",
    "passage": [
        {
            "before": "Subject: What I heard on Thursday — and what I would like to propose\n\nJames,\n\nThank you for the conversation on Thursday. Before I send you any proposal, I want to confirm my understanding — because I have learned that moving to a recommendation before you have correctly",
            "after": "the problem is the fastest way to waste everyone's time.",
            "answer": "diagnosed"
        },
        {
            "before": "As I understand it, the stated problem is pipeline reporting. But the",
            "after": "issue is CRM data integrity — specifically, that your reps update inconsistently, which means the data feeding the report cannot be trusted. If that is wrong, please correct me before I go further.",
            "answer": "underlying"
        },
        {
            "before": "You mentioned several challenges during our call. The one you identified as the highest",
            "after": "was rep behaviour — specifically, the gap between what is supposed to happen in the CRM and what actually happens. You told me that if you fixed that, the reporting problem would largely take care of itself.",
            "answer": "priority"
        },
        {
            "before": "You also gave me a clear",
            "after": "that matters to you: any solution must work within your existing CRM without a custom build. I have kept that as the non-negotiable throughout what I am about to propose.",
            "answer": "criterion"
        },
        {
            "before": "I also want to be honest about one",
            "after": "I came into Thursday's call with: I had expected pipeline visibility to be the core concern. It was not. The real issue is earlier in the process — at the data input stage. I am glad we had the time to go deeper.",
            "answer": "assumption"
        },
        {
            "before": "The outcome you said you wanted was simple: to open your laptop on Monday morning and trust what you are looking at. That is the",
            "after": "I am working back from in the proposal I am attaching.\n\nI believe the fit is strong — but I want you to tell me if I have misread anything.\n\nBest,\nRiley",
            "answer": "criterion"
        }
    ]
},
  dealClinic: {
    "context": "Two salespeople are given the same brief about the same prospect. Watch how each approaches the first five minutes of the call differently. Evaluate each highlighted move.",
    "transcript": [
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "Hi Marcus, great to connect. I have done some research on your company and I think Brightline would be a really strong fit for you. Let me show you what it does — I think you are going to find this interesting."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Opening move",
            "verdict": {
                "isGood": false,
                "explanation": "Weak. Salesperson A leads with the product immediately and frames the call around what they want to show rather than what the prospect needs. Saying 'I think Brightline is a strong fit' before asking a single question is a claim built on assumptions — it tells the prospect they are about to be pitched, not consulted. The phrase 'I think you are going to find this interesting' is also one-sided: it positions the salesperson as the one deciding what is relevant."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "Hi Marcus, thanks for making time. Before I suggest anything about what we do, I want to spend the first part of this call understanding what is actually going on for your team. Would that be okay?"
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson B — Opening move",
            "verdict": {
                "isGood": true,
                "explanation": "Strong. Salesperson B immediately signals consultative intent — they are not here to pitch, they are here to understand. Asking 'would that be okay?' also gives the prospect a small moment of control, which reduces defensiveness. The phrase 'before I suggest anything' creates a contract: I will listen before I recommend. This opening changes the dynamic of the entire call."
            }
        },
        {
            "speaker": "Marcus",
            "speakerColor": "blue",
            "text": "Sure. So we are struggling with pipeline visibility. Our reps are not updating the CRM properly and our forecast is unreliable."
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "That is exactly what Brightline solves — we have a real-time pipeline dashboard that pulls directly from your CRM and gives you live visibility. It is very easy to set up and most teams are live within two weeks."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Response to the stated problem",
            "verdict": {
                "isGood": false,
                "explanation": "Weak. Salesperson A has responded to the symptom — 'pipeline visibility' — without probing for the underlying cause. Marcus said reps are not updating the CRM properly, which means a real-time dashboard would still show bad data. Pitching a dashboard solution to a data quality problem is not just unhelpful — it is demonstrably wrong, and an attentive prospect will notice. Salesperson A has also introduced price and timeline signals ('easy to set up', 'two weeks') without any understanding of what the prospect actually needs."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "Help me understand that a bit more. When you say the reps are not updating properly — what does that look like in practice? Is it that they are skipping fields, updating late, or entering information that is not accurate?"
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson B — Response to the stated problem",
            "verdict": {
                "isGood": true,
                "explanation": "Strong. Rather than responding to 'pipeline visibility' as the problem, Salesperson B probes the underlying behaviour. The question is specific and useful — it breaks 'not updating properly' into three distinct possibilities, each with different implications. This is diagnostic questioning at its best: you are not just asking the prospect to say more, you are offering them a structured way to think about their own situation. The answer to this question will determine what solution is actually relevant."
            }
        },
        {
            "speaker": "Marcus",
            "speakerColor": "blue",
            "text": "Mostly they enter information late, or they do not update the stage correctly. So the CRM always shows deals as more advanced than they really are."
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "If you had to rank that against the other problems you mentioned — the forecast reliability and the visibility issue — which one is costing you the most right now?",
            "verdict": {
                "isGood": true,
                "explanation": "Strong prioritisation move. Salesperson B resists the temptation to respond immediately and instead establishes what matters most. This prevents them from spending the rest of the call solving the wrong problem. It also signals to the prospect that they are being heard comprehensively — not just responded to. The answer to this question will determine where the rest of the call goes."
            }
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each scenario is a discovery call moment. Choose the response that best demonstrates consultative selling — the one that diagnoses rather than pitches. Discuss the reasoning.",
        "items": [
            {
                "customerLine": "A prospect says in the first two minutes: 'We need better sales training for our team.'",
                "options": [
                    "Say: 'We have a great sales training programme — it covers objection handling, closing techniques, and prospecting. Most teams see results within sixty days. Can I walk you through it?'",
                    "Say: 'Before I suggest anything, help me understand what is driving that — what does the current gap look like? Is it that the team lacks skills, or that they have skills but are not applying them consistently?'",
                    "Say: 'Sales training is something a lot of our clients ask for. What is your budget for this kind of programme?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. 'We need sales training' is a stated solution, not a diagnosed problem. The underlying issue might be skills, motivation, process, management, or something else entirely — and the right training depends on which one it is. A pitches immediately to a symptom. C jumps to budget before understanding the problem. B is the only response that probes beneath the surface."
            },
            {
                "customerLine": "A prospect says: 'We have tried two CRMs and neither has worked for us.'",
                "options": [
                    "Say: 'That is a common problem — most CRMs are too complicated. Ours is very simple and intuitive, so your team will actually use it. Can I show you a demo?'",
                    "Say: 'Two systems that did not work is significant. Help me understand what happened — was the problem with the tool itself, or with how it was implemented, or with how the team used it?'",
                    "Say: 'What CRMs did you try? We integrate with most of them, so we could work alongside what you already have.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. 'Two CRMs that did not work' is a pattern with a cause — and the cause matters enormously. If the problem was adoption, a third CRM will fail for the same reason. If the problem was implementation, a better-implemented version of the same tool might work. If the problem was fit, you need to understand what fit means to them. A assumes the problem was the tool's complexity without checking. C moves to integration before understanding whether the problem was the tool at all."
            },
            {
                "customerLine": "Halfway through discovery, a prospect lists six different problems. You have twenty minutes left.",
                "options": [
                    "Say: 'Those are all important — let me show you how our platform addresses each one.'",
                    "Say: 'You have mentioned six things. If you had to rank those by which one is costing you the most right now — whether in time, money, or deals — which would be at the top?'",
                    "Say: 'I think the most important one is the pipeline visibility issue — that is where we see the most impact with clients like you. Can we focus there?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Six problems with twenty minutes means you have to prioritise — and the priority should come from the prospect, not from you. A tries to address all six, which means none get addressed properly. C tells the prospect which problem matters most — a common mistake that replaces their judgment with yours, and often gets it wrong. B asks the prospect to rank, which surfaces what they actually care about and gives you the right focus for the rest of the call."
            },
            {
                "customerLine": "After a full discovery call, you realise your product is not the right fit for this prospect's actual problem.",
                "options": [
                    "Pitch anyway — focus on the features that are closest to what they described and hope the rest can be worked around after the sale.",
                    "Say: 'Based on what you have told me, I do not think we are the right fit for where you are right now. What you need first is a data integration tool — once that is in place, we would be a much stronger fit. I can recommend two options that might help.'",
                    "Say: 'Let me go back to my team and see if we can adjust our offering to better match what you have described.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Qualifying honestly — even when it means walking away — is the most consultative move you can make. It costs you a sale today and almost always comes back as a referral or return later (as the lesson notes: Riley's prospect came back six months later). A is the short-term instinct that damages trust and generates churn. C offers to adapt the product — which might be right sometimes, but only if the adaptation is genuine, not a way of avoiding the honest answer."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect situations. Match each one to the consultative question type — probing for the underlying issue, prioritising, or confirming understanding — that would be most useful next. Discuss before clicking.",
        "profiles": [
            {
                "name": "Situation 1",
                "description": "A prospect says: 'We have a problem with customer churn.' You do not yet know whether the churn is happening because of product issues, onboarding failures, pricing, competition, or something else. You need to go deeper before you can suggest anything.",
                "matchKey": "probe"
            },
            {
                "name": "Situation 2",
                "description": "A prospect has spent fifteen minutes describing five different problems. You have noticed that they become most animated and specific when they talk about one of them — but they have not explicitly ranked it. You want to know what they care about most before you respond to anything.",
                "matchKey": "prioritise"
            },
            {
                "name": "Situation 3",
                "description": "A prospect has just given a long and complex answer. You believe you understand the core of what they said, but you want to check before you move forward — because if you have misread it, the rest of the call will go in the wrong direction.",
                "matchKey": "confirm"
            }
        ],
        "options": [
            {
                "key": "probe",
                "label": "Probe for the underlying issue",
                "description": "'Help me understand what the churn looks like in practice — is it happening early in the customer lifecycle, after a specific event, or spread evenly over time? And when you speak to customers who have left, what reason do they give?' Probing turns a symptom into a cause you can actually address."
            },
            {
                "key": "prioritise",
                "label": "Establish the priority",
                "description": "'You have covered a lot of ground there. If you had to rank those by which one is causing the most pain right now — whether in deals, revenue, or time — which would you put at the top?' Prioritising before responding prevents you from solving the wrong problem."
            },
            {
                "key": "confirm",
                "label": "Confirm your reading",
                "description": "'Let me check I have understood this correctly. The issue is not the volume of leads — it is that the leads you are getting are not qualified enough for your sales cycle, so the team is spending time on opportunities that were never going to close. Am I reading this right?' Confirming gives the prospect a chance to correct you and shows you have been genuinely listening."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started a consultative move — finish it using language from this lesson. Compare your completions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "A prospect opens the call with: 'We are looking for a tool to help with forecasting accuracy.'",
                "salespersonStart": "Before I suggest anything —",
                "suggestedCompletion": "I want to understand what is driving the inaccuracy. Because forecasting problems usually come from one of two places: the data going in, or the judgment being applied to it. Which one would you say is the bigger issue for your team? If it is the data, I want to understand that first before we talk about any tool."
            },
            {
                "customerLine": "A prospect says: 'Our reps are not hitting quota.'",
                "salespersonStart": "Help me understand what that looks like in practice —",
                "suggestedCompletion": "is it that they are missing consistently across the board, or is it a small number of reps pulling the average down? And when you look at the ones who are closest to quota, what do they do differently? I want to understand whether this is a skills issue, a process issue, or something structural before I suggest anything."
            },
            {
                "customerLine": "A prospect has just described a complex situation involving multiple teams and conflicting priorities.",
                "salespersonStart": "Am I reading this right —",
                "suggestedCompletion": "the core problem is not that the teams lack information, it is that there is no agreed process for what to do with that information once they have it. So you end up with three teams looking at the same data and drawing different conclusions. If that is right, the solution is probably not a new tool — it is a decision framework. Is that a fair summary of where you are?"
            },
            {
                "customerLine": "A prospect lists four problems, each of which sounds urgent.",
                "salespersonStart": "If you had to rank those —",
                "suggestedCompletion": "not by what is most visible or the most talked about internally, but by which one is actually costing you the most in real terms right now — which would come first? I am asking because I want to make sure we spend the rest of this call on the thing that matters most, not just the thing that is loudest."
            }
        ]
    }
},
};
