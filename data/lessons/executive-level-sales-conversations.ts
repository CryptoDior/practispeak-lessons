import { Lesson } from '@/types/lesson';

export const executiveLevelSalesConversations: Lesson = {
  slug: 'executive-level-sales-conversations',
  title: 'Executive-Level Sales Conversations',
  subtitle: 'Concise, strategic, high-value language — for the conversations where every word counts',
  level: 'C1-C2',
  description: 'Executives have almost no time, a very specific mandate, and low tolerance for anything that does not connect directly to their priorities. This lesson teaches the language and structure of high-level sales conversations — how to open with the headline, frame decisions around accountability and trade-offs, and say more with fewer words than you have ever tried before.',
  heroImage: '/images/executive-level-sales-conversations-hero.png',

  vocabulary: [
    {
      word: 'BREVITY',
      partOfSpeech: 'noun',
      definition: 'The ability to say exactly what needs to be said in as few words as possible. In executive conversations, brevity is not just a style preference — it signals that you understand how decisions are made at that level.',
      example: "Riley had prepared thirty slides. She brought three. The brevity of her presentation was itself a signal that she understood how Sarah's day worked — and Sarah noticed.",
      imageSlug: '/images/executive-level-sales-conversations-brevity.png',
    },
    {
      word: 'MANDATE',
      partOfSpeech: 'noun',
      definition: "The specific goal or outcome an executive has been tasked with delivering — what they are personally accountable for. Understanding someone's mandate tells you what they actually care about.",
      example: "Sarah's mandate for the year was clear: reduce customer acquisition cost by 20% while maintaining revenue growth. Once Riley understood the mandate, she stopped talking about features and started talking about cost per deal.",
      imageSlug: '/images/executive-level-sales-conversations-mandate.png',
    },
    {
      word: 'TRADE-OFF',
      partOfSpeech: 'noun',
      definition: 'A situation where improving one outcome requires accepting a cost or limitation in another — the language of executive decision-making. Executives make trade-off decisions constantly.',
      example: "The trade-off Sarah was facing was real: she could invest in more headcount or in better tooling — but not both within the current budget. Riley's job was to make the tooling side of that trade-off as clear as possible.",
      imageSlug: '/images/executive-level-sales-conversations-trade-off.png',
    },
    {
      word: 'ACCOUNTABILITY',
      partOfSpeech: 'noun',
      definition: "Responsibility for delivering specific results — what executives are measured on and what keeps them up at night. Connecting your offer to an executive's accountability is the most reliable way to make it relevant.",
      example: 'Riley had done her research: Sarah had accountability for the full revenue number, not just new business. That meant efficiency across the whole funnel mattered — not just pipeline generation.',
      imageSlug: '/images/executive-level-sales-conversations-accountability.png',
    },
    {
      word: 'ALIGNMENT',
      partOfSpeech: 'noun',
      definition: "The degree to which what you are proposing connects directly to the executive's current priorities and direction. Without alignment, even a good offer sounds like noise.",
      example: "The reason Riley's proposal landed well was not the product — it was the alignment. She had framed everything around the two outcomes Sarah had publicly stated as her priorities for the year.",
      imageSlug: '/images/executive-level-sales-conversations-alignment.png',
    },
    {
      word: 'LEVERAGE',
      partOfSpeech: 'verb',
      definition: 'To use a resource, relationship, data point, or insight to produce maximum effect — more than would be possible without it. Executives think in terms of leverage constantly.',
      example: 'Riley offered to leverage the existing CRM data to generate a baseline in week one — which meant Sarah would see a real number within five days, not a projected one in thirty.',
      imageSlug: '/images/executive-level-sales-conversations-leverage.png',
    },
    {
      word: 'FRICTION',
      partOfSpeech: 'noun',
      definition: 'Anything that slows down a decision, creates unnecessary complexity, or adds resistance to a process. Executives have very little patience for friction — in decisions or in conversations.',
      example: 'The previous vendor had created so much friction in the onboarding process that the team had abandoned the tool within sixty days. Riley made friction reduction the centrepiece of her implementation pitch.',
      imageSlug: '/images/executive-level-sales-conversations-friction.png',
    },
    {
      word: 'SIGNAL',
      partOfSpeech: 'noun',
      definition: 'A meaningful piece of information that indicates what is really happening beneath the surface — as opposed to noise. Executives pay attention to signals and ignore most of the rest.',
      example: "The fact that three of Sarah's top five reps had missed quota two quarters in a row was not a coincidence — it was a signal. Riley used that signal to open the conversation rather than starting with a product overview.",
      imageSlug: '/images/executive-level-sales-conversations-signal.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE HEADLINE IS',
      definition: 'Start with your conclusion, not your build-up — the way a newspaper headline tells you the story before you read the article. The single most important discipline in executive communication.',
      example: 'The headline is this: your top five reps are closing at half the rate of the rest of the team, and the gap is entirely explainable — and fixable. I want to show you why in the next ten minutes.',
      imageSlug: '/images/the-headline-is.png',
    },
    {
      phrase: 'WHAT THIS MEANS FOR YOU',
      definition: "Explicitly connects a data point, observation, or claim to the executive's specific situation — removes the burden of translation from them and shows you have done the work to make it relevant.",
      example: 'Churn in the B2B software sector is up 18% year on year. What this means for you is that your retention numbers from last year are no longer a reliable benchmark — the market has moved underneath them.',
      imageSlug: '/images/what-this-means-for-you.png',
    },
    {
      phrase: 'THE RISK OF NOT ACTING IS',
      definition: 'Frames the cost of inaction rather than the benefit of action — more powerful in executive conversations because executives are often more motivated by risk than by upside.',
      example: 'The risk of not acting on this before Q3 is that your competitor — who signed with us in January — will have six months of improved conversion data before your team starts. That gap compounds.',
      imageSlug: '/images/the-risk-of-not-acting-is.png',
    },
    {
      phrase: 'WHERE DO YOU NEED THIS TO GO',
      definition: "A direct question that surfaces the executive's mandate and success criteria — asked when you want to understand what outcome they are personally accountable for delivering.",
      example: 'I can show you what the tool does. But before I do — where do you need this to go? What is the number you need to move, and by when? That will tell me which part of what we do is actually relevant to you.',
      imageSlug: '/images/where-do-you-need-this-to-go.png',
    },
    {
      phrase: 'I WILL BE BRIEF',
      definition: "A promise and a contract — signals that you understand the executive's time is scarce and that you have prepared accordingly. Only say this if you mean it and can deliver on it.",
      example: 'I will be brief. You gave me fifteen minutes and I have prepared for twelve. The headline is one number, one decision, and one reason to move now. After that, I want to hear from you.',
      imageSlug: '/images/i-will-be-brief.png',
    },
    {
      phrase: 'THE DECISION IN FRONT OF YOU IS',
      definition: 'Distils a complex situation down to the single decision the executive actually needs to make — removes noise, focuses the conversation, and shows you have done the analytical work so they do not have to.',
      example: 'The decision in front of you is not whether to invest in pipeline tools — you have already decided that. The decision is whether to do it before your Q3 review or after. I want to make the case for before.',
      imageSlug: '/images/the-decision-in-front-of-you-is.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Sarah, I will be brief — you have fifteen minutes and I have prepared for twelve. The headline is one number: your cost per closed deal has increased 34% in eighteen months while your close rate has stayed flat. That is a [[signal:a meaningful piece of information that indicates what is really happening beneath the surface]] worth paying attention to.',
    },
    {
      speaker: 'Sarah',
      speakerColor: 'purple',
      speakerAvatar: '/images/sarah-icon.png',
      text: 'I am aware of it. Where are you going with that?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I want to show you where it is coming from — because it is not a headcount problem, and it is not a market problem. It is a process problem, and process problems are fixable. But first — where do you need this to go? What is the number you are actually accountable for moving this year?',
    },
    {
      speaker: 'Sarah',
      speakerColor: 'purple',
      speakerAvatar: '/images/sarah-icon.png',
      text: 'Revenue efficiency. I need more closed revenue per head, not more headcount. My [[mandate:the specific goal an executive has been tasked with delivering]] from the board is to grow revenue 25% without adding to the team.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is exactly the frame I want to use. The [[trade-off:a situation where improving one outcome requires a cost in another]] you are managing is real — you can keep adding capacity pressure to the existing team, or you can remove the [[friction:anything that slows down a decision or adds unnecessary resistance]] from their process so the same team closes more. Right now, based on what I have seen, your reps are spending roughly forty percent of their selling time on non-selling work.',
    },
    {
      speaker: 'Sarah',
      speakerColor: 'purple',
      speakerAvatar: '/images/sarah-icon.png',
      text: 'That is a big number. Where does it come from?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'CRM updates, manual reporting, and chasing internal approvals — those three alone account for most of it. What this means for you is that your revenue efficiency problem is not a talent problem or a market problem. It is a workflow problem. And workflow problems have a cost you can calculate.',
    },
    {
      speaker: 'Sarah',
      speakerColor: 'purple',
      speakerAvatar: '/images/sarah-icon.png',
      text: "I am listening. What is the [[alignment:the degree to which a proposal connects to the executive's current priorities]] between what you do and what I actually need?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Direct. Brightline automates the three workflow areas I mentioned, which recovers roughly eight to ten hours per rep per week. At your team size, that is the equivalent of adding two to three heads without the cost. We can [[leverage:to use something to produce maximum effect]] your existing CRM data to generate a baseline number in week one — so you are not looking at projections, you are looking at your own data.',
    },
    {
      speaker: 'Sarah',
      speakerColor: 'purple',
      speakerAvatar: '/images/sarah-icon.png',
      text: 'And the risk if we wait?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The risk of not acting before Q3 is that the cost per deal continues to compound while your competitor — who is already using this — widens the efficiency gap. The decision in front of you is not whether to fix this. It is when. I would like to make the case for now.',
    },
    {
      speaker: 'Sarah',
      speakerColor: 'purple',
      speakerAvatar: '/images/sarah-icon.png',
      text: 'How long to see a real number?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Thirty days to a live baseline. Ninety days to a result you can take to the board. The [[accountability:responsibility for delivering specific results]] sits with us during that period — if we do not hit the baseline projection, the conversation about a full contract does not happen.',
    },
    {
      speaker: 'Sarah',
      speakerColor: 'purple',
      speakerAvatar: '/images/sarah-icon.png',
      text: 'That is a reasonable offer. Get me the one-pager and I will review it before Thursday.',
    }
  ],

  matchingExercise: [
    {
        "word": "BREVITY",
        "definition": "The ability to say exactly what needs to be said in as few words as possible — a signal that you understand executive decision-making"
    },
    {
        "word": "MANDATE",
        "definition": "The specific goal an executive has been tasked with delivering — what they are personally accountable for"
    },
    {
        "word": "TRADE-OFF",
        "definition": "A situation where improving one outcome requires accepting a cost or limitation in another"
    },
    {
        "word": "ACCOUNTABILITY",
        "definition": "Responsibility for delivering specific results — what executives are measured on"
    },
    {
        "word": "ALIGNMENT",
        "definition": "The degree to which your proposal connects directly to the executive's current priorities"
    },
    {
        "word": "LEVERAGE",
        "definition": "To use a resource or insight to produce maximum effect — more than would be possible without it"
    },
    {
        "word": "FRICTION",
        "definition": "Anything that slows down a decision or adds unnecessary resistance to a process"
    },
    {
        "word": "SIGNAL",
        "definition": "A meaningful piece of information indicating what is really happening beneath the surface — as opposed to noise"
    }
],
  fillBlankExercise: [
    {
        "before": "Riley had prepared thirty slides. She brought three. The",
        "after": "of her presentation was itself a signal that she understood how the CEO's day worked.",
        "answer": "brevity"
    },
    {
        "before": "Once Riley understood Sarah's",
        "after": "— reduce cost per deal by 20% while growing revenue — she stopped talking about features and started talking about cost per closed deal.",
        "answer": "mandate"
    },
    {
        "before": "The",
        "after": "Sarah faced was real: more headcount or better tooling, but not both within the current budget.",
        "answer": "trade-off"
    },
    {
        "before": "Sarah had",
        "after": "for the full revenue number — not just new business — which meant efficiency across the whole funnel mattered.",
        "answer": "accountability"
    },
    {
        "before": "The reason the proposal landed was not the product — it was the",
        "after": ". Riley had framed everything around the two outcomes Sarah had publicly committed to for the year.",
        "answer": "alignment"
    },
    {
        "before": "Riley offered to",
        "after": "the existing CRM data to generate a real baseline in week one — so Sarah would see her own numbers, not a projection.",
        "answer": "leverage"
    },
    {
        "before": "The previous vendor had created so much",
        "after": "in the onboarding process that the team abandoned the tool within sixty days.",
        "answer": "friction"
    },
    {
        "before": "Three of Sarah's top reps missing quota two quarters running was not a coincidence — it was a",
        "after": ". Riley used it to open the conversation instead of starting with a product overview.",
        "answer": "signal"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Riley open with a number ('your cost per closed deal has increased 34%') rather than with an introduction or agenda?",
        "options": [
            "She wants to impress Sarah with her research before anything else",
            "It is the most provocative way to start any sales conversation",
            "Starting with the headline — the conclusion, not the build-up — respects the executive's time and signals that you understand how decisions are made at that level",
            "She is following a standard executive briefing template"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley ask Sarah before explaining what Brightline does — and why?",
        "options": [
            "She asks about Sarah's budget for the year",
            "She asks 'where do you need this to go?' — to understand Sarah's mandate and what she is accountable for, so the rest of the conversation is framed around what actually matters to her",
            "She asks how many people are in the sales team",
            "She asks whether Sarah has seen the product before"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley frame the trade-off Sarah is managing?",
        "options": [
            "More spending on tools vs. saving money by keeping the current process",
            "Hiring more reps vs. keeping the team small",
            "Adding capacity pressure to the existing team vs. removing friction from their process — so the same team closes more",
            "Choosing between Brightline and a competitor product"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why does Riley say 'the accountability sits with us during the pilot period'?",
        "options": [
            "It is a standard legal clause in the contract",
            "It removes Sarah's risk — she is not signing up for a full commitment before she has seen a real result, which is how executives evaluate proposals",
            "It is a way of avoiding a longer commitment",
            "It gives Riley's team more time to prepare before the main deployment"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the lesson, why is 'the risk of not acting is' more powerful than 'the benefit of acting is' in executive conversations?",
        "options": [
            "Executives do not respond to positive language",
            "Risk language is more formal and appropriate at senior levels",
            "Executives are disproportionately focused on downside scenarios and accountability — risk framing connects to what they are already thinking about",
            "It creates urgency faster than benefit framing"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does it mean to connect your offer to an executive's mandate — and why does it matter?",
        "options": [
            "It means mentioning the executive's name and company in the presentation, which shows you have prepared",
            "It means adjusting your pricing to fit their budget",
            "It means framing every element of your offer around what the executive is personally accountable for delivering — without this, even a good offer sounds irrelevant",
            "It means using the same vocabulary the executive uses in their public statements"
        ],
        "correctIndex": 2
    },
    {
        "question": "Riley says 'I will be brief' at the start of the conversation. According to the lesson, what obligation does this create?",
        "options": [
            "It is a polite opener that executives appreciate hearing",
            "It creates a contract — if you say it and then speak for twenty minutes, you have broken trust before the conversation has properly started",
            "It signals that you will ask questions rather than talk for most of the meeting",
            "It gives the executive permission to cut you off if they need to leave early"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the role of 'signal' in this lesson's approach to executive communication?",
        "options": [
            "Signals are data points you share to demonstrate your research",
            "A signal is a meaningful piece of information that indicates what is really happening beneath the surface — using a strong signal to open a conversation shows you understand the executive's world at a deeper level than surface metrics",
            "Signals are the headlines you prepare before an executive meeting",
            "A signal is a competitive insight about what rival companies are doing"
        ],
        "correctIndex": 1
    }
],
  pitchCorner: {
    "title": "Executive One-Pager",
    "context": "Riley sends this one-page document to Sarah before their follow-up meeting — it is designed to be read in under three minutes",
    "passage": [
        {
            "before": "FOR: Sarah Chen, CEO\nRE: Revenue efficiency — one decision, one number, one timeline\n\nThe",
            "after": "of this document is intentional. If it takes more than three minutes to read, we have not done our job.",
            "answer": "brevity"
        },
        {
            "before": "We understand your",
            "after": "for this year is 25% revenue growth without headcount increase. Every recommendation in this document is built against that single criterion — nothing else.",
            "answer": "mandate"
        },
        {
            "before": "The",
            "after": "you are currently managing: continue absorbing the efficiency loss across your existing team, or remove the friction from their workflow so the same headcount produces more. Based on your data, the second path is worth approximately £380,000 in recovered selling capacity annually.",
            "answer": "trade-off"
        },
        {
            "before": "The core",
            "after": "in your current workflow is the 40% of selling time being spent on non-selling tasks — CRM administration, manual reporting, and internal approval cycles. This is not a people problem. It is a process problem.",
            "answer": "friction"
        },
        {
            "before": "We propose a 30-day pilot in which we",
            "after": "your existing CRM data to generate a baseline by day five. You will see your own numbers — not projections.",
            "answer": "leverage"
        },
        {
            "before": "The",
            "after": "for results sits entirely with us during the pilot. If we do not hit the baseline projection, there is no conversation about a full contract.\n\nThe decision in front of you is timing. Before Q3: you carry a result into your board review. After Q3: you carry a projection.\n\nWe recommend before.",
            "answer": "accountability"
        }
    ]
},
  dealClinic: {
    "context": "Two salespeople are each given 15 minutes with the same CEO. They have identical information about the company. Watch how their opening three minutes differ — and what happens as a result.",
    "transcript": [
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "Sarah, thank you so much for making time — I know you are incredibly busy. I wanted to start by giving you a bit of background on who we are and what we do, and then I will walk you through some of the key features of our platform, and hopefully we can talk about how it might be relevant to what you are working on."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Opening move",
            "verdict": {
                "isGood": false,
                "explanation": "Weak. Salesperson A has used the first thirty seconds to say almost nothing. 'Thank you so much for making time' followed by 'I know you are incredibly busy' is filler — it does not move the conversation forward. Announcing that you will give 'background on who we are' signals to the CEO that the next five minutes will not be about her. The phrase 'hopefully we can talk about how it might be relevant' is particularly damaging — it implies you are not sure it is relevant, which removes any urgency before the conversation has started."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "Sarah, I will be brief. The headline is one number: your cost per closed deal has increased 34% in eighteen months while your close rate is flat. That is a signal worth following. I want to show you where it is coming from and why it is fixable — in the next twelve minutes."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson B — Opening move",
            "verdict": {
                "isGood": true,
                "explanation": "Strong. Every word earns its place. 'I will be brief' creates a contract and signals preparation. 'The headline is' immediately tells the CEO they are getting a conclusion, not a build-up. The number (34%) is specific and verifiable — it is a signal, not a claim. 'I want to show you where it is coming from' implies diagnosis, not pitch. And 'in the next twelve minutes' proves the 'I will be brief' promise was real. The CEO is now engaged because the opening was about her situation, not about the salesperson."
            }
        },
        {
            "speaker": "Sarah",
            "speakerColor": "purple",
            "text": "I am aware of the number. What are you proposing to do about it?"
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "Great question. So our platform, Brightline, has a number of features designed to help sales teams. We have pipeline visibility tools, automated CRM updates, manager dashboards, and a reporting suite. Most of our customers find that the onboarding takes about two weeks and then they are up and running. We have worked with companies similar to yours and seen really strong results."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Response to the CEO's question",
            "verdict": {
                "isGood": false,
                "explanation": "Weak. The CEO asked 'what are you proposing to do about it?' — a specific, outcome-focused question. Salesperson A responds with a feature list. Features are tactical; the CEO is asking a strategic question. 'Most of our customers find that onboarding takes two weeks' is particularly misplaced — the CEO did not ask about onboarding. Saying 'we have worked with companies similar to yours and seen really strong results' is a vague claim that does not connect to Sarah's specific mandate, accountability, or the signal Riley opened with. It sounds like a pitch, not a response."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "The 34% increase is coming from workflow friction — specifically, your reps are spending roughly 40% of their selling time on non-selling tasks. What this means for you is that your revenue efficiency problem is not a people problem. It is a process problem. And process problems have a cost you can calculate: at your team size, recovering that time is worth approximately the equivalent of two to three additional heads — without the headcount cost."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson B — Response to the CEO's question",
            "verdict": {
                "isGood": true,
                "explanation": "Strong. Salesperson B answers the CEO's exact question — 'what are you proposing to do about it?' — by first explaining the cause (workflow friction, 40% non-selling time) and then translating it into the CEO's language (revenue efficiency, headcount equivalence). 'What this means for you' is used precisely here: it bridges from a general observation to the CEO's specific accountability. The headcount equivalence framing ('worth two to three additional heads without the cost') directly addresses Sarah's mandate — growth without headcount — before she has to ask."
            }
        },
        {
            "speaker": "Sarah",
            "speakerColor": "purple",
            "text": "That is an interesting way to frame it. What is the risk if we do not move on this?"
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "The risk of not acting before Q3 is that your competitor — who signed with us in January — will have six months of compounding efficiency advantage before your team starts. Gaps like that are harder to close than they look from the outside. The decision in front of you is not whether to address the workflow problem. It is when.",
            "verdict": {
                "isGood": true,
                "explanation": "Strong close. Salesperson B uses the risk framing correctly — the cost of inaction is more powerful than the benefit of action at executive level, because executives think in downside terms. The competitor reference creates urgency without pressure (it is verifiable and specific). 'The decision in front of you is not whether — it is when' is a classic executive reframe: it removes the yes/no question and replaces it with a timing decision, which is where the CEO's actual authority lies. The brevity of the final line is itself persuasive."
            }
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each scenario is an executive sales moment. Choose the response that best demonstrates concise, strategic, high-value communication. Discuss the reasoning.",
        "items": [
            {
                "customerLine": "A CEO gives you 10 minutes unexpectedly at the end of a board meeting. You were not prepared for this.",
                "options": [
                    "Apologise for not being prepared and ask to schedule a proper meeting for next week.",
                    "Say: 'The headline is one question: are you satisfied with your cost per deal right now? If not, I can show you why it is higher than it should be and what moves it — in ten minutes.'",
                    "Use the time to walk through your standard deck as quickly as possible so the CEO sees the full picture."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. You do not need slides to have an executive conversation — you need a headline and a question. Starting with 'are you satisfied with your cost per deal?' immediately puts the focus on the CEO's accountability and invites them into a relevant conversation. A wastes the opportunity. C tries to compress a long pitch into a short window — which usually fails because it feels rushed and underprepared."
            },
            {
                "customerLine": "A CFO says: 'What is the ROI on this? Give me the number.'",
                "options": [
                    "Say: 'The ROI depends on a number of variables, including team size, current process maturity, and how quickly your team adopts the tool. We would need to do a full assessment to give you an accurate number.'",
                    "Say: 'Based on your team size and the workflow data we discussed: £380,000 in recovered selling capacity annually, against a cost of £42,000. That is a 9x return in year one. We can show you the methodology behind that number if you want to stress-test it.'",
                    "Say: 'Our average customer sees a 7x ROI within twelve months — I can send you several case studies that break down how that number is calculated.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. The CFO asked a direct question — give a direct answer. B answers with a specific number tied to their specific situation, then immediately offers to defend the methodology (which is more credible than a number with no provenance). A avoids the question — which is the worst thing you can do when an executive asks for a number. C gives a generic average, which sounds like a sales claim rather than an analysis."
            },
            {
                "customerLine": "Halfway through an executive meeting, the CEO says: 'I only have five more minutes. Wrap it up.'",
                "options": [
                    "Say: 'Understood. The decision in front of you is timing — before Q3 gives you a result to take to the board; after Q3 gives you a projection. I recommend before. Can I follow up with the one-pager?'",
                    "Try to cover the remaining slides quickly — the CEO needs the full context to make a decision.",
                    "Say: 'I appreciate your time — let me send you everything by email and we can set up another meeting when you have more time.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. When an executive cuts the time, the right move is to go straight to the decision — not to compress the presentation or defer to email. 'The decision in front of you is timing' does exactly what the situation requires: it identifies the only thing that needs to happen in the next five minutes and makes it concrete. C defers entirely — which usually means the momentum dies."
            },
            {
                "customerLine": "A VP of Sales says: 'We are already talking to two other vendors. What makes you different?'",
                "options": [
                    "Give a detailed comparison of your features vs. the competitors, showing where you win on each dimension.",
                    "Say: 'The difference that matters for your mandate is this: the others give you visibility into what happened. We give you the intervention point to change what is about to happen. That is a different product, not a better version of the same one — and only one of those two addresses your revenue efficiency problem directly.'",
                    "Say: 'We are more focused on your specific vertical than the other vendors — we have more relevant case studies and a stronger implementation team for your type of business.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. The question 'what makes you different?' is really asking 'why should I choose you?' — and the answer needs to connect to what matters to this specific executive, not to a generic differentiator list. B uses the alignment principle: it frames the distinction around the executive's mandate ('revenue efficiency') and makes the contrast sharp and memorable. A gives them homework — a feature comparison they have to evaluate themselves. C makes a vague claim about vertical focus that any vendor could make."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three executive scenarios. Match each to the communication principle — brevity, risk framing, or mandate alignment — that would be most effective. Discuss before clicking.",
        "profiles": [
            {
                "name": "Scenario 1",
                "description": "You have just discovered that a prospect's largest competitor has solved the exact problem you are discussing — and done it six months ago. The executive you are speaking to is measured on competitive position and market share. You want to use this information to create urgency without sounding like you are applying pressure.",
                "matchKey": "risk"
            },
            {
                "name": "Scenario 2",
                "description": "A CEO has agreed to read a one-page document before your next meeting. You have thirty things you could say about your product. You know she will stop reading after the first paragraph if it does not immediately tell her something relevant about her own situation.",
                "matchKey": "brevity"
            },
            {
                "name": "Scenario 3",
                "description": "You are preparing for a first meeting with a new CFO. You have done your research: her public statements and board presentations indicate she is focused on reducing operational costs by 15% this year. You want to make sure every element of your opening is connected to that specific goal.",
                "matchKey": "mandate"
            }
        ],
        "options": [
            {
                "key": "risk",
                "label": "Risk framing",
                "description": "'The risk of not acting before Q3 is that your competitor — who has already solved this — will have six months of compounding advantage before you start. Gaps like this are harder to close than they look from the outside.' Risk framing works because executives are more motivated by downside scenarios than upside projections — it connects to their accountability."
            },
            {
                "key": "brevity",
                "label": "Brevity — lead with the headline",
                "description": "The one-pager should open with a single sentence that tells the CEO something true about her own situation — before anything about you. 'Your cost per deal has increased 34% in 18 months' earns the right to the next sentence. Everything that follows should earn the right to be there. If it does not connect to her situation in the first ten words, cut it."
            },
            {
                "key": "mandate",
                "label": "Mandate alignment",
                "description": "'We understand your mandate for this year is a 15% reduction in operational costs. Every recommendation in this meeting is built against that single criterion — nothing else.' Aligning to the mandate before the meeting starts ensures that every minute of the conversation is relevant to what the CFO is actually accountable for, and removes the burden of translation from her."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started an executive-level move — finish it using language from this lesson. Compare completions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "A CEO says: 'Tell me why I should care about this.'",
                "salespersonStart": "The headline is",
                "suggestedCompletion": "one number: your cost per closed deal has increased 34% in eighteen months while your close rate is flat. That is a signal — and it means the problem is not your team and it is not the market. It is your workflow. That is fixable, and I can show you how in twelve minutes."
            },
            {
                "customerLine": "An executive asks: 'What happens if we wait until next quarter?'",
                "salespersonStart": "The risk of not acting before Q3 is",
                "suggestedCompletion": "that your competitor — who signed with us in January — will have six months of compounding efficiency advantage before your team starts. Efficiency gaps of this kind are harder to close than they look from the outside. The decision in front of you is not whether to fix this. It is when."
            },
            {
                "customerLine": "You are about to present to a board member for the first time. You have five minutes.",
                "salespersonStart": "I will be brief —",
                "suggestedCompletion": "one number, one decision, one ask. Your cost per deal is up 34%. The decision is whether to address that before Q3 or after. My ask is twenty minutes with your VP Sales to show you where it is coming from. Everything else can wait."
            },
            {
                "customerLine": "A CFO asks: 'How does this connect to what we are actually trying to do this year?'",
                "salespersonStart": "What this means for you — given that your mandate is 15% cost reduction —",
                "suggestedCompletion": "is that the 40% of selling time your reps are spending on non-selling work is not just a productivity problem. It is a cost problem. At your team size, recovering that time is worth approximately £380,000 annually — which is a third of your cost reduction target from a single workflow change. That alignment is why we are in this room."
            }
        ]
    }
},
};
