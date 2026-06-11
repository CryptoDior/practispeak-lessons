import { Lesson } from '@/types/lesson';

export const advancedPersuasiveLanguage: Lesson = {
  slug: 'advanced-persuasive-language',
  title: 'Advanced Persuasive Language',
  subtitle: 'How to frame, position, and influence — without sounding like you are trying to',
  level: 'C1-C2',
  description: "Learn the language of advanced persuasion — how to control the frame of a conversation, position your offer clearly in the prospect's mind, and use contrast, implication, and credibility to influence how people think and decide. All without sounding manipulative.",
  heroImage: '/images/advanced-persuasive-language-hero.png',

  vocabulary: [
    {
      word: 'FRAMING',
      partOfSpeech: 'noun',
      definition: 'The way you present information — the angle you choose shapes how the other person reacts to it, even when the facts are exactly the same.',
      example: "Saying 'this costs £5,000 a month' and saying 'this recovers roughly £40,000 in pipeline every month for a cost of £5,000' are both accurate — but the framing changes everything about how the number lands.",
      imageSlug: '/images/framing.png',
    },
    {
      word: 'POSITIONING',
      partOfSpeech: 'noun',
      definition: 'How you define what you do and who it is for — clearly enough that the right prospects immediately understand why it matters to them, and the wrong ones opt out early.',
      example: "Strong positioning does not try to appeal to everyone — it makes a specific claim about who the product is built for and what problem it solves, so the right person hears it and thinks 'that is exactly us'.",
      imageSlug: '/images/positioning.png',
    },
    {
      word: 'NARRATIVE',
      partOfSpeech: 'noun',
      definition: 'The story or thread that runs through your pitch — what connects the problem, the solution, and the outcome so the whole thing makes sense and stays with the listener.',
      example: 'Facts alone rarely persuade — narrative does. A pitch with a clear arc (here is the world as it is, here is what changes, here is what becomes possible) is remembered long after the slide deck is forgotten.',
      imageSlug: '/images/narrative.png',
    },
    {
      word: 'ANCHOR',
      partOfSpeech: 'noun',
      definition: 'A reference point introduced early in a conversation that shapes how the other person evaluates everything that follows — especially numbers.',
      example: 'If you mention the cost of a problem before you mention the price of your solution, the solution feels smaller — that is anchoring. The order in which you introduce numbers changes how they are perceived.',
      imageSlug: '/images/anchor.png',
    },
    {
      word: 'IMPLICATION',
      partOfSpeech: 'noun',
      definition: 'A meaning or consequence you suggest without stating directly — what the listener understands beyond what you actually said.',
      example: "Asking 'how long have you been managing this without a proper system?' does not say the current situation is a problem — but the implication is clear, and it is more powerful because the prospect draws that conclusion themselves.",
      imageSlug: '/images/implication.png',
    },
    {
      word: 'CONTRAST',
      partOfSpeech: 'noun',
      definition: 'Placing two options, situations, or outcomes side by side so the difference between them becomes obvious and one feels like the clear choice.',
      example: "Contrast is one of the most powerful tools in persuasion — 'you are currently spending fifteen hours a week on something this tool does in twenty minutes' is not an argument, it is a contrast. The conclusion makes itself.",
      imageSlug: '/images/contrast.png',
    },
    {
      word: 'CREDIBILITY',
      partOfSpeech: 'noun',
      definition: 'The trust and authority that makes people believe what you say — built through specificity, honesty, and occasionally conceding a point that goes against you.',
      example: "Credibility is not built by being impressive — it is built by being accurate. One honest admission ('this is not the right fit if you only have five reps') does more for your credibility than ten strong claims.",
      imageSlug: '/images/credibility.png',
    },
    {
      word: 'CONCEDE',
      partOfSpeech: 'verb',
      definition: 'To acknowledge a point the other person has made — even one that works against you. A counterintuitive move that builds trust faster than defending every position.',
      example: "If a prospect says your onboarding takes longer than a competitor's and they are right, concede it immediately — then explain what you get in return for that time. Trying to argue against a true point destroys credibility.",
      imageSlug: '/images/concede.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE WAY I SEE IT',
      definition: 'Introduce your frame explicitly — signals that you are about to offer a perspective, not just present a fact. Invites the listener in rather than imposing.',
      example: 'The way I see it, the question is not whether you need better pipeline visibility — you have already told me you do. The question is whether the cost of not fixing it is greater than the cost of fixing it. I think it clearly is.',
      imageSlug: '/images/the-way-i-see-it.png',
    },
    {
      phrase: 'WHAT THIS REALLY COMES DOWN TO IS',
      definition: 'Strip away complexity and name the single core issue — a reframing move that refocuses the conversation when it has drifted or become too complicated.',
      example: 'We can talk about features all day, but what this really comes down to is one question: can your team afford to keep losing two or three deals a month to a problem that is entirely fixable?',
      imageSlug: '/images/what-this-really-comes-down-to-is.png',
    },
    {
      phrase: 'THINK OF IT THIS WAY',
      definition: 'Offer an analogy or new angle to help the prospect see their situation differently — useful when the current frame is blocking them from making a decision.',
      example: "Think of it this way — you would not run a finance team without accounting software, even though spreadsheets technically work. At some point, 'it technically works' stops being a good reason to keep doing something manually.",
      imageSlug: '/images/think-of-it-this-way.png',
    },
    {
      phrase: 'THE QUESTION IS NOT — IT IS',
      definition: 'Explicitly reject one frame and replace it with a better one — one of the most direct repositioning moves in a sales conversation.',
      example: 'The question is not whether Brightline is expensive relative to the alternatives. The question is whether the deals you are losing every month cost more than the tool. They do — by a significant margin.',
      imageSlug: '/images/the-question-is-not--it-is.png',
    },
    {
      phrase: 'WHAT MOST PEOPLE IN YOUR POSITION FIND IS',
      definition: 'Use light social proof to make the direction you are suggesting feel normal and validated — reduces the sense that they are being asked to take a risk.',
      example: 'What most Sales VPs in your position find is that the visibility problem is not actually about the reps — it is about the system. Once you change the system, the behaviour follows.',
      imageSlug: '/images/what-most-people-in-your-position-find-is.png',
    },
    {
      phrase: 'LET ME BE DIRECT ABOUT SOMETHING',
      definition: 'Signal that you are about to say something honest and possibly uncomfortable — builds credibility and disarms defensiveness before you say the thing.',
      example: 'Let me be direct about something — if your team has not adopted a tool in three attempts, the issue is probably not the tools. That is worth understanding before you invest in another one.',
      imageSlug: '/images/let-me-be-direct-about-something.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Before I show you anything, I want to set up the [[framing:the way you present information — the angle you choose shapes how people react]] for this conversation. Most vendors come in and show you what their product does. I am going to start with what your business is losing — and let you decide whether what we do is relevant.',
    },
    {
      speaker: 'CFO',
      speakerColor: 'purple',
      speakerAvatar: '/images/cfo-icon.png',
      text: 'That is an unusual way to open.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I find it is the only honest one. The [[anchor:a reference point introduced early that shapes how everything following is evaluated]] I want to put in the room first is this: based on the numbers your VP shared with me, you are losing somewhere between four and six deals a quarter to slow follow-up and pipeline blindness. At your average deal size, that is between £200,000 and £300,000 a year walking out the door. That is the number I want you to hold in mind while we talk.',
    },
    {
      speaker: 'VP Sales',
      speakerColor: 'blue',
      speakerAvatar: '/images/vp sales-icon.png',
      text: 'Those numbers are in the right range. What is the [[implication:a meaning you suggest without stating directly]] — that your tool recovers all of it?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'No — and let me be direct about something. No tool recovers all of it. What I can show you is that teams using Brightline recover roughly sixty percent of those stalled deals within the first ninety days. The [[contrast:placing two situations side by side so the difference becomes obvious]] is simple: your current situation costs you £250,000 a year on average. Brightline costs you £36,000 a year. The question is not whether that is a good investment. It clearly is. The question is whether you believe the recovery number.',
    },
    {
      speaker: 'CFO',
      speakerColor: 'purple',
      speakerAvatar: '/images/cfo-icon.png',
      text: 'That is where I would push back. How do we know that [[credibility:the trust and authority that makes people believe what you say]] is real and not just a sales claim?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is exactly the right question to ask — and I am going to [[concede:to acknowledge a point that works against you — a move that builds trust]] something. You cannot know for certain until you are three months in. What I can give you is the [[narrative:the story or thread that makes a pitch stay with the listener]] — three customers at your scale, the specific deals they recovered, the timelines, and the exact configuration they used. You can speak to any of them directly. But I want to be honest: the sixty percent is an average. Some teams do better. Some do not get there. Your outcome will depend on adoption, and adoption depends on how you run the rollout.',
    },
    {
      speaker: 'VP Sales',
      speakerColor: 'blue',
      speakerAvatar: '/images/vp sales-icon.png',
      text: 'I appreciate that. What is your [[positioning:how you define what you do so the right people immediately understand why it matters]] versus the two other tools we are looking at?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Think of it this way. The other tools give you data. Brightline gives you intervention points — the moments where a manager can step in before a deal dies, not after. The way I see it, data without a clear action attached to it is just a dashboard nobody checks. What most Sales VPs in your position find is that they already have too much data. What they do not have is the right signal at the right time. That is the distinction.',
    },
    {
      speaker: 'CFO',
      speakerColor: 'purple',
      speakerAvatar: '/images/cfo-icon.png',
      text: 'What this really comes down to is whether the ROI case holds under scrutiny.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It does — and I would rather you stress-test it now than sign and regret it later. Shall we go through the numbers together?',
    }
  ],

  matchingExercise: [
    {
        "word": "FRAMING",
        "definition": "The angle you choose when presenting information — it shapes how people react even when the facts are the same"
    },
    {
        "word": "POSITIONING",
        "definition": "Defining what you do and who it is for clearly enough that the right people immediately get why it matters"
    },
    {
        "word": "NARRATIVE",
        "definition": "The story or thread connecting problem, solution, and outcome — what makes a pitch memorable"
    },
    {
        "word": "ANCHOR",
        "definition": "A reference point introduced early that shapes how everything following is evaluated"
    },
    {
        "word": "IMPLICATION",
        "definition": "A meaning or consequence you suggest without stating directly — what the listener understands beyond the words"
    },
    {
        "word": "CONTRAST",
        "definition": "Placing two things side by side so the difference between them becomes obvious and one feels like the clear choice"
    },
    {
        "word": "CREDIBILITY",
        "definition": "The trust and authority that makes people believe what you say — built through accuracy and honesty"
    },
    {
        "word": "CONCEDE",
        "definition": "To acknowledge a point that works against you — a counterintuitive move that builds trust"
    }
],
  fillBlankExercise: [
    {
        "before": "Saying 'this costs £5,000/month' versus 'this recovers £40,000 in pipeline for £5,000' are both true — but the",
        "after": "changes how the number lands.",
        "answer": "framing"
    },
    {
        "before": "Strong",
        "after": "makes a specific claim about who the product is built for — so the right person hears it and thinks 'that is exactly us'.",
        "answer": "positioning"
    },
    {
        "before": "A pitch with a clear",
        "after": "— problem, change, outcome — is remembered long after the slide deck is forgotten.",
        "answer": "narrative"
    },
    {
        "before": "If you mention the cost of a problem before the price of your solution, the solution feels smaller. That is an",
        "after": ".",
        "answer": "anchor"
    },
    {
        "before": "Asking 'how long have you been managing this without a proper system?' does not say the situation is a problem — but the",
        "after": "is clear.",
        "answer": "implication"
    },
    {
        "before": "'You spend fifteen hours a week on something this does in twenty minutes' is not an argument — it is a",
        "after": ". The conclusion makes itself.",
        "answer": "contrast"
    },
    {
        "before": "One honest admission ('this is not the right fit if you have five reps') does more for your",
        "after": "than ten strong claims.",
        "answer": "credibility"
    },
    {
        "before": "If a prospect says your onboarding takes longer than a competitor's and they are right,",
        "after": "it immediately — then explain what you get in return for that time.",
        "answer": "concede"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley open by talking about what the business is losing, rather than what Brightline does?",
        "options": [
            "She does not know enough about the product to lead with features",
            "She is deliberately anchoring the conversation around the cost of the problem before introducing the cost of the solution",
            "She wants to build rapport before starting the pitch",
            "The CFO asked her not to use slides"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley concede — and why does it build credibility?",
        "options": [
            "She concedes that Brightline is expensive — which shows she is aware of the competition",
            "She concedes that no tool recovers all lost deals and that outcomes depend on adoption — which is honest and harder to dismiss than a perfect claim",
            "She concedes that the onboarding is longer than competitors — which makes the CFO more likely to sign",
            "She concedes that the ROI numbers might not be accurate — which makes the CFO trust her more"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the key distinction Riley draws between Brightline and the competitors?",
        "options": [
            "Brightline has more integrations and a better user interface",
            "Brightline is cheaper than the alternatives",
            "The others give you data on what happened; Brightline gives you intervention points to change what is about to happen",
            "Brightline has a faster onboarding process"
        ],
        "correctIndex": 2
    },
    {
        "question": "When the CFO says 'what this really comes down to is whether the ROI case holds under scrutiny', how does Riley respond?",
        "options": [
            "She defends the ROI numbers with additional data",
            "She agrees and invites the CFO to stress-test the numbers with her — turning the challenge into a collaborative exercise",
            "She offers to send a case study to address the concern",
            "She asks what level of ROI would satisfy the CFO's requirements"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the Register Traps, why is conceding a weakness early effective?",
        "options": [
            "It lowers the prospect's expectations so they are pleasantly surprised later",
            "It satisfies procurement requirements for balanced presentations",
            "It builds more credibility than any amount of positive claims — because it signals honesty rather than salesmanship",
            "It gives the prospect a reason to ask follow-up questions"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the most powerful kind of implication in a sales conversation?",
        "options": [
            "One that is clearly stated so there is no ambiguity",
            "One the prospect draws themselves — because they own that conclusion",
            "One supported by data from independent research",
            "One that highlights the competitor's weaknesses without naming them"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does 'think of it this way' achieve in the dialogue?",
        "options": [
            "It introduces a new feature the prospect has not seen yet",
            "It signals that Riley is about to use an analogy to help the prospect see the distinction between data tools and intervention tools",
            "It is a polite way to disagree with the VP's question",
            "It begins the ROI calculation"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the lesson, what makes positioning strong?",
        "options": [
            "It appeals to the widest possible range of customers",
            "It uses formal, authoritative language to establish market leadership",
            "It is exclusive — clearly defining who the product is NOT for makes it more convincing for those it IS for",
            "It references competitors directly to show differentiation"
        ],
        "correctIndex": 2
    }
],
  pitchCorner: {
    "title": "Follow-Up Email: After the First Meeting",
    "context": "Riley is writing to the CFO and VP Sales the morning after their meeting — using everything she knows about framing, credibility, and contrast",
    "passage": [
        {
            "before": "Subject: The number we discussed — and what I would like you to do with it\n\nDear Sarah and Marcus,\n\nThank you for your time yesterday. I want to follow up with the",
            "after": "I used to open our conversation, because I want to make sure it lands the same way in writing as it did in the room.",
            "answer": "framing"
        },
        {
            "before": "The £250,000 figure is not an estimate — it is a calculation based on the pipeline data Marcus shared. I am using it as an",
            "after": "because the question I want you to hold in mind is not 'what does Brightline cost?' but 'what is the current situation costing us every quarter?'",
            "answer": "anchor"
        },
        {
            "before": "That is a deliberate choice on my part. The",
            "after": "of those two numbers — £36,000 a year versus £250,000 a year — makes the decision straightforward, provided the £250,000 figure is accurate. I believe it is.",
            "answer": "contrast"
        },
        {
            "before": "I also want to address something Sarah raised: whether the ROI claim holds up under scrutiny. This is a fair challenge, and I want to build",
            "after": "with you by being direct about it rather than defending a number.",
            "answer": "credibility"
        },
        {
            "before": "The 60% recovery rate is an average across our customer base. It is not a guarantee. What varies is adoption, and adoption depends on how the rollout is managed. I am prepared to",
            "after": "that openly — and to show you exactly how the three reference customers I mentioned managed theirs.",
            "answer": "concede"
        },
        {
            "before": "The",
            "after": "I want to leave you with is this: you are not evaluating a tool. You are evaluating whether your current approach to pipeline management is still appropriate for the volume and complexity of deals you are running.",
            "answer": "narrative"
        },
        {
            "before": "I believe the answer is that it is not — and that the",
            "after": "of 'we have a process' and 'our process is costing us six figures a year in recoverable deals' need to sit side by side in the same conversation.",
            "answer": "implication"
        },
        {
            "before": "Our",
            "after": "is simple: we are not a data tool and we are not a CRM replacement. We are the layer between your data and the moment a manager needs to step in. If that is the problem you have — and I believe it is — then the fit is clear.\n\nI would welcome a second conversation this week.\n\nBest,\nRiley",
            "answer": "positioning"
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation involves a high-stakes persuasion decision. Choose the response that uses framing, positioning, or influence most effectively. Discuss the reasoning — the technique matters as much as the answer.",
        "items": [
            {
                "customerLine": "A CFO opens the meeting with: 'You have fifteen minutes. Tell me why we should spend money on this.'",
                "options": [
                    "Say: 'Thank you — I will get straight to it. Brightline is a pipeline visibility and automation tool that helps sales teams close more deals by reducing follow-up delays and giving managers real-time deal intelligence.'",
                    "Say: 'I am going to use those fifteen minutes slightly differently, if that is all right. Before I tell you what we do, I want to put one number in the room. Based on what your VP shared with me, you are losing roughly £250,000 a year to a fixable process problem. I am going to show you why that number is accurate, and then you can decide if fifteen minutes was worth it.'",
                    "Say: 'Before I answer that, can I ask a few questions about your current sales process? I want to make sure what I show you is actually relevant.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It immediately sets an anchor (£250k lost) before the CFO can anchor on price or time — and it reframes the question from 'why should we spend money?' to 'is this number real?' That is a much more productive conversation. A opens with a feature description — competent but weak in a C-suite context where time is a signal of respect. C asks for more discovery time, which a CFO who gave you fifteen minutes is unlikely to grant."
            },
            {
                "customerLine": "A prospect says: 'We have looked at three tools this quarter and they all claim the same ROI. Why should we believe yours?'",
                "options": [
                    "Say: 'Let me be direct about something — I cannot promise you the same ROI as the others, because I do not know what they claimed. What I can do is show you exactly how we calculate ours, with real customer data, and let you decide if the methodology holds up. That is a different conversation than 'trust us'.'",
                    "Say: 'Our ROI figures are based on third-party research and verified by independent analysts — you can trust that the numbers are real.'",
                    "Say: 'What most companies in your position find is that the ROI becomes clear after the first ninety days — it is not something you can fully evaluate upfront.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It uses concession ('I cannot promise the same ROI'), then reframes the question from 'trust the number' to 'evaluate the methodology'. This is a credibility move — you are inviting scrutiny rather than defending a claim. B invokes third-party validation without specifics, which at C-suite level sounds like a deflection. C uses social proof but avoids the question — prospects at this level notice when you sidestep a direct challenge."
            },
            {
                "customerLine": "A prospect says: 'Your competitor told us they can do everything you do at half the price.'",
                "options": [
                    "Say: 'That is worth looking at carefully. The question is not which tool is cheaper — it is which one solves the specific problem you described. Think of it this way: if the competitor's tool fully solved your visibility and intervention problem, you would not be in this meeting. What specifically made you want to continue the conversation with us?'",
                    "Say: 'I would be surprised if they can genuinely do everything we do at that price — there are usually limitations in the cheaper products that only become clear after you have signed.'",
                    "Say: 'That is a fair point — pricing is competitive in this space. We are not always the cheapest option, but we believe the quality justifies the difference.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It uses contrast implicitly ('if they could solve it, you would not be here'), then turns the conversation back to the prospect's own reason for continuing — which forces them to articulate why Brightline is still on the table. This is far more powerful than defending the price. B implies the competitor is misleading them without evidence — a risky credibility move. C concedes the price point without reframing it — it accepts the competitor's frame rather than replacing it."
            },
            {
                "customerLine": "You are pitching to a room of five stakeholders. The economic buyer is silent and you cannot read their reaction.",
                "options": [
                    "Say: 'I would like to pause for a moment and check in with the room. We have covered a lot of ground — what is the question that matters most to the people in this room that we have not addressed yet?'",
                    "Continue presenting — cover all the remaining slides to make sure everyone has the full picture before taking questions.",
                    "Direct your next point specifically at the economic buyer and ask them directly: 'Does this align with how you are thinking about the problem?'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. When a room is mixed and you cannot read the key decision-maker, the smartest move is to hand back control — let the room tell you what matters most. This surfaces the silent objection, demonstrates confidence, and reframes the remaining time around their agenda rather than yours. B pushes through the deck regardless — in a room of five, you will lose someone by minute twenty. C addresses the economic buyer directly, which can work, but risks excluding the rest of the room and putting the buyer on the spot."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three situations. As a group, match each to the persuasion technique — framing, contrast, or implication — that would be most effective. Discuss why before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "Situation 1",
                "description": "A prospect says the price feels high. You want to change how they are thinking about the number — without discounting and without arguing. You have data on how much their current situation is costing them every quarter.",
                "matchKey": "framing"
            },
            {
                "name": "Situation 2",
                "description": "A prospect claims they are happy with their current manual process. You want to show them the gap between where they are and where they could be — without being condescending or telling them they are wrong.",
                "matchKey": "contrast"
            },
            {
                "name": "Situation 3",
                "description": "You want the prospect to recognise that their current approach is creating a problem — but you do not want to state it directly, because hearing it from you is less powerful than arriving at it themselves.",
                "matchKey": "implication"
            }
        ],
        "options": [
            {
                "key": "framing",
                "label": "Framing — change the angle",
                "description": "Reframe the price conversation before engaging with the number. Introduce the cost of the current situation first: 'The way I see it, the question is not whether £5,000 a month is expensive. The question is whether £250,000 a year walking out the door is acceptable. Those are the two numbers in the room.' Now the £5,000 looks different."
            },
            {
                "key": "contrast",
                "label": "Contrast — show the gap",
                "description": "Place the current reality next to the alternative, side by side: 'Right now, your team spends three hours every Monday building a report that is already out of date by the time anyone reads it. With Brightline, that report builds itself overnight and is live by the time your first meeting starts.' The contrast does the arguing for you."
            },
            {
                "key": "implication",
                "label": "Implication — let them draw the conclusion",
                "description": "Ask a question that leads the prospect to the realisation themselves: 'How long have you been aware of the follow-up problem?' Then: 'And what has changed in that time?' The implication — that nothing has changed because the system does not support change — is far more powerful when they say it than when you do."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started a persuasive move — finish it using language and techniques from this lesson. Compare your versions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "A CFO is focused entirely on the upfront cost of the tool.",
                "salespersonStart": "The way I see it, we are actually looking at the wrong number.",
                "suggestedCompletion": "The number that matters is not what Brightline costs — it is what your current situation is costing you every quarter. Based on what your VP shared with me, that is somewhere in the region of £250,000 a year in recoverable pipeline. Brightline costs £36,000. That is the contrast I would like you to hold in mind as we go through the rest of this."
            },
            {
                "customerLine": "A prospect claims their current manual process 'works fine'.",
                "salespersonStart": "Think of it this way —",
                "suggestedCompletion": "a spreadsheet technically works until the moment it does not. And by the time it stops working, the deals have already gone. The question is not whether your current process functions — it is whether 'functioning' is the same as 'performing'. I suspect you already know the answer, which is probably why you agreed to this conversation."
            },
            {
                "customerLine": "A prospect is comparing you to a cheaper competitor and leaning toward them.",
                "salespersonStart": "Let me be direct about something —",
                "suggestedCompletion": "I am not going to tell you the competitor is a bad choice, because I do not know enough about your situation to say that honestly. What I will say is this: the question is not which tool is cheaper. The question is which one solves the specific problem you described — and that is a different comparison entirely. I would rather we evaluate it that way than on price alone."
            },
            {
                "customerLine": "A prospect is hesitating but has not told you why.",
                "salespersonStart": "What most people in your position find is that",
                "suggestedCompletion": "the hesitation is not really about the tool — it is about whether they believe the problem is solvable in their specific environment. That is a legitimate concern. So rather than try to convince you, let me ask: what would need to be true for this to feel like a clear yes? If I know that, I can either address it or tell you honestly if I cannot."
            }
        ]
    }
},
};
