import { Lesson } from '@/types/lesson';

export const askingNeedsBasedQuestions: Lesson = {
  slug: 'asking-needs-based-questions',
  title: 'Asking Needs-Based Questions',
  subtitle: 'How to ask the right questions to understand what a prospect actually needs',
  level: 'B1-B2',
  description: 'Master the language of discovery — how to ask open-ended questions that uncover real challenges, explore their impact, and help you understand what the prospect needs before you ever mention your product.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-hero.png',

  vocabulary: [
    {
      word: 'PAIN POINT',
      partOfSpeech: 'noun',
      definition: 'A problem that regularly causes frustration or difficulty for someone.',
      example: 'Her biggest pain point is the endless emails, paperwork and deadlines.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-pain-point.png',
    },
    {
      word: 'BOTTLENECK',
      partOfSpeech: 'noun',
      definition: 'A point in a process where work slows down or gets stuck.',
      example: 'The approval stage is the bottleneck, so every deal waits there for days.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-bottleneck.png',
    },
    {
      word: 'PRIORITY',
      partOfSpeech: 'noun',
      definition: 'The thing that is most important and needs attention first.',
      example: 'She points to the first item on the board because it is the top priority.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-priority.png',
    },
    {
      word: 'WORKAROUND',
      partOfSpeech: 'noun',
      definition: 'A temporary way to deal with a problem when there is no proper solution.',
      example: 'She uses a manual workaround to connect the sales platform and the finance system.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/workaround.png',
    },
    {
      word: 'DIAGNOSE',
      partOfSpeech: 'verb',
      definition: 'To find out the cause of a problem by looking at it carefully.',
      example: 'She asks careful questions on the video call to diagnose the problem.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-diagnose.png',
    },
    {
      word: 'PROBE',
      partOfSpeech: 'verb',
      definition: 'To ask more questions to learn more about something.',
      example: 'The shop assistant decides to probe and asks the customer another question.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-probe.png',
    },
    {
      word: 'UNCOVER',
      partOfSpeech: 'verb',
      definition: 'To discover something that was hidden or not known before.',
      example: 'He asks careful questions to uncover the real reason behind the complaint.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/uncover.png',
    },
    {
      word: 'BANDWIDTH',
      partOfSpeech: 'noun',
      definition: 'The time and energy a person or team has available for more work.',
      example: 'The team has little bandwidth this week because capacity is already at ninety percent.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-bandwidth.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT DOES THAT LOOK LIKE IN PRACTICE',
      definition: 'A question that asks for a real, specific example of something.',
      example: 'You said the process is messy, but what does that look like in practice?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/asking-needs-based-questions-what-does-that-look-like-in-practice.png',
    },
    {
      phrase: 'HOW IS THAT AFFECTING',
      definition: 'A question that asks about the results or effects of a problem.',
      example: 'How is that affecting your team, your deals and the general mood?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/how-is-that-affecting.png',
    },
    {
      phrase: 'WHAT HAVE YOU TRIED SO FAR',
      definition: 'A question that asks about solutions someone has already used.',
      example: 'What have you tried so far, apart from spreadsheets, email and Slack?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/what-have-you-tried-so-far.png',
    },
    {
      phrase: 'IF YOU COULD CHANGE ONE THING',
      definition: 'A question that asks what is the one most important thing to improve.',
      example: 'If you could change one thing about your reporting process, what would it be?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/if-you-could-change-one-thing.png',
    },
    {
      phrase: 'WHAT WOULD GOOD LOOK LIKE',
      definition: 'A question that asks someone to describe the result they want.',
      example: 'What would good look like for your team in six months?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/what-would-good-look-like.png',
    },
    {
      phrase: 'WALK ME THROUGH',
      definition: 'A request for someone to explain a process one step at a time.',
      example: 'Walk me through your process, from the first new lead to the final check.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/walk-me-through.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Marcus, thanks for making the time. Before I say anything about what we do, I'd love to understand your world a bit better. Can I ask you some questions first?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Of course — that's a refreshing way to start a call, actually.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Glad to hear it. So — walk me through how your team currently manages deals from first contact to close. I want to [[diagnose:to identify the root cause of a problem by asking the right questions]] before I suggest anything.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Sure. Leads come in from a few different channels — marketing, referrals, outbound. They go into the CRM, someone picks them up, and then honestly it gets a bit inconsistent from there.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'When you say inconsistent — what does that look like in practice? Is it the follow-up timing, the messaging, something else?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Mostly the follow-up. Some reps are on it within an hour, others take a day or two. It's become a real [[bottleneck:a point in a process that slows everything else down]] for us.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'How is that affecting your conversion rate? Are you seeing deals go cold because of the delay, or is it more of an internal visibility issue?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Both, honestly. We lose some deals, and I have no idea which ones until it's too late. The [[pain point:a specific problem or frustration a customer experiences regularly]] is really the lack of visibility.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'Understood. What have you tried so far to address it? I want to know what has already been on the table before I go any further.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "We built a [[workaround:a temporary solution used because the proper fix is not in place]] — a shared spreadsheet that reps are supposed to update daily. But it only works if everyone actually does it, which they don't.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That makes sense — a manual [[workaround:a temporary solution used because the proper fix is not in place]] only works until it doesn't. If you could change one thing about how your pipeline works right now, what would it be?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Honestly? Visibility. I want to know, at any point, exactly where every deal is and who is responsible for the next step.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That's really helpful. Last question — what would good look like for you, say, six months from now? If we solve this properly, what changes for you and the team?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'I stop firefighting and start actually [[probe:to ask follow-up questions that go deeper]]ing into why deals are won or lost — rather than just trying to figure out where they went.',
    }
  ],

  matchingExercise: [
    {
        "word": "PAIN POINT",
        "definition": "A specific problem or frustration a customer experiences regularly"
    },
    {
        "word": "BOTTLENECK",
        "definition": "A point in a process that slows everything else down"
    },
    {
        "word": "PRIORITY",
        "definition": "The thing that matters most right now — what the business is focused on"
    },
    {
        "word": "WORKAROUND",
        "definition": "A temporary fix used because the proper solution is not in place"
    },
    {
        "word": "DIAGNOSE",
        "definition": "To identify the root cause of a problem by asking the right questions"
    },
    {
        "word": "PROBE",
        "definition": "To ask follow-up questions that go deeper into what was said"
    },
    {
        "word": "UNCOVER",
        "definition": "To find out something the prospect has not volunteered"
    },
    {
        "word": "BANDWIDTH",
        "definition": "The capacity a team has to take on new work or change"
    }
],
  fillBlankExercise: [
    {
        "before": "Before you pitch anything, you need to understand their",
        "after": "— what is actually making their work harder than it should be.",
        "answer": "pain points"
    },
    {
        "before": "The",
        "after": "in their pipeline was the approval process — deals were getting stuck there for weeks.",
        "answer": "bottleneck"
    },
    {
        "before": "Understanding their",
        "after": "tells you which problems they are actually motivated to solve right now.",
        "answer": "priorities"
    },
    {
        "before": "When a prospect describes a",
        "after": ", that is a signal — it means the problem is real enough that they built something to manage it.",
        "answer": "workaround"
    },
    {
        "before": "A good discovery call is not about selling — it is about",
        "after": ". You are trying to understand the real problem, not just the surface one.",
        "answer": "diagnosing"
    },
    {
        "before": "When they say 'communication is an issue',",
        "after": "— ask what that looks like in practice and who it affects.",
        "answer": "probe"
    },
    {
        "before": "The best discovery questions",
        "after": "problems the prospect did not even realise they wanted to talk about.",
        "answer": "uncover"
    },
    {
        "before": "Before proposing anything, ask about",
        "after": "— if the team is already at capacity, timing becomes part of the conversation.",
        "answer": "bandwidth"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley do at the start of the call, before saying anything about her product?",
        "options": [
            "She sends Marcus an agenda for the call",
            "She asks if she can ask questions first to understand his world",
            "She summarises what Brightline does",
            "She tells Marcus what pain points she has heard from other customers"
        ],
        "correctIndex": 1
    },
    {
        "question": "Marcus says the follow-up process is 'inconsistent'. What does Riley do next?",
        "options": [
            "She moves on to ask about his budget",
            "She suggests a solution straight away",
            "She asks what that looks like in practice — pressing for a concrete example",
            "She agrees and explains that this is a common problem"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the main bottleneck Marcus describes?",
        "options": [
            "Reps are not entering data into the CRM",
            "Follow-up timing is inconsistent across the team",
            "Leads are coming from too many channels",
            "The CRM is not integrated with their email"
        ],
        "correctIndex": 1
    },
    {
        "question": "What workaround has Marcus's team been using?",
        "options": [
            "A daily standup meeting to review open deals",
            "An automated email sequence for all new leads",
            "A shared spreadsheet reps are supposed to update daily",
            "A colour-coded system inside the CRM"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why does Riley ask 'What have you tried so far?'",
        "options": [
            "To find out if they have already spoken to a competitor",
            "To understand what has been attempted so she does not suggest something already ruled out",
            "To check if they have the budget to try something new",
            "To see if the team has the bandwidth for a new tool"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Marcus's single biggest priority when Riley asks 'If you could change one thing'?",
        "options": [
            "Faster lead response times",
            "Better CRM data quality",
            "Real-time visibility into the pipeline",
            "More consistent messaging from the team"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley's 'what would good look like' question do in the conversation?",
        "options": [
            "It asks Marcus to evaluate Brightline as a solution",
            "It helps Marcus articulate what success looks like — focusing on outcomes rather than problems",
            "It transitions the conversation to pricing",
            "It asks Marcus to define the scope of the project"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the Register Traps, what is one of the most powerful questions in discovery?",
        "options": [
            "'What is your budget?'",
            "'Who is the decision-maker?'",
            "'What have you tried so far?'",
            "'What would good look like?'"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation calls for a discovery question. Choose the response that best uncovers what the prospect actually needs — not the one that sounds most polished. Discuss your reasoning before clicking.",
        "items": [
            {
                "customerLine": "A prospect says: 'We have a lot of data but we're not really using it well.'",
                "options": [
                    "Say: 'That's very common — our platform actually solves that exact problem.'",
                    "Say: 'Interesting — what does that look like in practice? Is the data hard to access, or is it more that no one knows what to do with it once they have it?'",
                    "Say: 'How many data sources are you currently working with?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It probes the specific nature of the problem before suggesting anything. A jumps straight to a pitch — you haven't understood the problem yet. C asks a clarifying question but it's too narrow — it limits the conversation to a technical detail rather than understanding the real challenge."
            },
            {
                "customerLine": "A prospect says they have tried three different tools in the last two years and none of them worked.",
                "options": [
                    "Say: 'I understand. Our tool is different because it is easier to implement.'",
                    "Say: 'What happened with each of them? I'd like to understand what didn't work before I say anything about what we do.'",
                    "Say: 'That sounds frustrating. Have you considered that the problem might not be the tools?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. Understanding what went wrong with previous solutions is critical — it tells you what to avoid, what they have already ruled out, and what success would need to look like for them to trust a new solution. A makes a claim before you've earned the right to make it. C is presumptuous and risks putting the prospect on the defensive."
            },
            {
                "customerLine": "A prospect says: 'Our biggest challenge right now is honestly just time. Everyone is stretched.'",
                "options": [
                    "Say: 'We can actually save your team time — that's one of the core things we help with.'",
                    "Say: 'That makes sense. How is that affecting the things that actually matter — are projects slipping, or is it more that the team is burning out?'",
                    "Say: 'Is it a resourcing issue or a process issue, do you think?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explores the impact of the capacity problem — which is far more useful than a quick pivot to a solution or a binary diagnostic question. A jumps to a pitch before you've explored the problem. C is too closed — it forces a choice between two options when the real picture might be more nuanced."
            },
            {
                "customerLine": "You have asked several questions and the prospect has described four or five different challenges. You need to find out which one matters most.",
                "options": [
                    "Say: 'OK — so it sounds like you have quite a lot going on. Where would you like to start?'",
                    "Say: 'If you could change one thing about how things work right now, what would make the biggest difference to you and the team?'",
                    "Say: 'Based on what you've told me, I think the biggest issue is the reporting — shall we focus on that?'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It asks the prospect to identify their own priority rather than letting you choose for them — which is both more accurate and more persuasive, because they commit to it themselves. A is vague and hands control back without getting clarity. C makes an assumption about what matters most, which may be wrong — and even if it's right, it's more powerful when the prospect says it, not you."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect situations. As a group, decide which type of discovery question is the best first move for each. Match each prospect to the question type that fits their situation best, then click 'Check Matches'.",
        "profiles": [
            {
                "name": "David",
                "description": "David has just taken over as Head of Sales. He inherited a team, a CRM, and a set of processes he didn't design. He has strong opinions about what isn't working but hasn't had time to dig into the root causes yet. He's energetic and wants to move fast.",
                "matchKey": "diagnose"
            },
            {
                "name": "Sonia",
                "description": "Sonia is the Operations Manager at a mid-size logistics company. She has described at least five different problems in the last three minutes — visibility, reporting, team communication, tool overload, and budget pressure. You are starting to lose the thread.",
                "matchKey": "priority"
            },
            {
                "name": "Tom",
                "description": "Tom mentions that his team has 'tried a few things' to fix their onboarding process but nothing has stuck. He seems slightly frustrated — maybe a bit cynical about new solutions. He hasn't said what he's tried yet.",
                "matchKey": "workaround"
            }
        ],
        "options": [
            {
                "key": "diagnose",
                "label": "Walk me through the current process",
                "description": "Use 'Walk me through...' to get a full picture before forming any opinions. When someone has inherited a situation they didn't design, a step-by-step walkthrough is the fastest way to identify where the real problems are — and avoids assuming you already know."
            },
            {
                "key": "priority",
                "label": "If you could change one thing",
                "description": "When a prospect has described too many problems, use 'If you could change one thing...' to help them identify their actual priority. Without this, you risk building a proposal around the wrong problem — or trying to solve everything at once."
            },
            {
                "key": "workaround",
                "label": "What have you tried so far",
                "description": "When someone signals frustration with previous attempts, ask 'What have you tried so far?' first. It shows respect for what they've already done, tells you what to avoid, and — critically — helps you understand why those attempts failed before you propose something new."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started a discovery question — but it's been cut off. Finish it in a way that opens up the conversation rather than closing it down. Use vocabulary and phrases from this lesson. Compare your versions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "Prospect: 'Yeah, reporting is a bit of a mess for us right now.'",
                "salespersonStart": "When you say it's a mess — what does that",
                "suggestedCompletion": "look like in practice? Is it that the data isn't there, or that you have the data but no one trusts it or knows how to use it? I want to understand exactly where the breakdown is before I go any further."
            },
            {
                "customerLine": "Prospect has just described three separate problems — slow approvals, manual reporting, and inconsistent follow-up.",
                "salespersonStart": "That's really helpful context. If you could change",
                "suggestedCompletion": "one thing about how the team operates right now — just one — which of those three would make the biggest difference to you? I want to make sure we focus on what actually matters most, not just what's loudest."
            },
            {
                "customerLine": "Prospect: 'We've looked at a couple of solutions before but it never went anywhere.'",
                "salespersonStart": "I'd like to understand that better — what have you",
                "suggestedCompletion": "tried so far, and what happened? I'm not asking to be nosy — I just don't want to waste your time suggesting something that's already been on the table. Knowing what didn't work is as useful to me as knowing what you need."
            },
            {
                "customerLine": "Prospect has just told you their goal for the next six months.",
                "salespersonStart": "That's a clear goal. What would good",
                "suggestedCompletion": "look like for your team specifically — not just hitting the number, but in terms of how the work actually feels day to day? Sometimes the process goal is as important as the outcome goal, and I want to make sure I understand both."
            }
        ]
    }
},
};
