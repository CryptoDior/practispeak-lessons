import { Lesson } from '@/types/lesson';

export const advancedFollowUpStrategy: Lesson = {
  slug: 'advanced-follow-up-strategy',
  title: 'Advanced Follow-Up Strategy',
  subtitle: 'The language of strategic follow-up — how to recap with purpose, reactivate value without pressure, and give buyers the tools to move forward internally',
  level: 'C1-C2',
  description: "In complex B2B sales, the follow-up is not a formality — it is one of the most strategic communications in the cycle. A weak follow-up recaps what was discussed and asks if there are 'any questions'. A strong follow-up does three things: it reframes what was discussed in terms of value, not features; it surfaces and addresses whatever is creating internal hesitation; and it gives the buyer something concrete to take forward in conversations the salesperson will never be part of. This lesson teaches the language and structure of advanced follow-up strategy — how to send recaps that reinforce the value narrative, how to reactivate a deal that has gone quiet without applying pressure, how to provide decision support that makes the buyer's internal process easier, and how to agree on the next meaningful interaction rather than waiting passively for a response.",
  heroImage: '/images/advanced-follow-up-strategy-hero.png',

  vocabulary: [
    {
      word: 'RECAP',
      partOfSpeech: 'noun',
      definition: "A concise, purposeful summary of what was discussed, agreed, and committed to in a previous conversation — structured to reinforce the value narrative and confirm understanding on both sides. A strategic recap does more than document what was said: it frames what was discussed in terms of the buyer's stated problems and the proposed solution's outcomes, and it creates a written record of any commitments made.",
      example: "Riley's follow-up email began: Following our conversation on Thursday, I wanted to send a brief recap — not just of what we covered, but of how I see it connecting to the three priorities you outlined at the start of our relationship. The first priority was [X], and here's where we are on that...",
      imageSlug: '/images/advanced-follow-up-strategy-recap.png',
    },
    {
      word: 'VALUE REMINDER',
      partOfSpeech: 'phrase',
      definition: "A deliberate, non-pushy reactivation of the value case at the right moment in the decision cycle — reconnecting the buyer's stated problems to the solution's outcomes. A value reminder is most effective when it references the buyer's own words and connects them to new evidence or context: a client result, a relevant case study, or a development in the buyer's market that increases the urgency of the problem they described.",
      example: "Riley said: When we first spoke, you described your biggest challenge as the gap between the number of conversations your team was having and the number that were converting. I wanted to circle back on that specifically — because a client we work with at your scale just shared results that speak directly to that problem, and I thought it was worth making sure that context was in front of you as you're making this decision.",
      imageSlug: '/images/advanced-follow-up-strategy-value-reminder.png',
    },
    {
      word: 'DECISION SUPPORT',
      partOfSpeech: 'phrase',
      definition: 'Materials, information, or access to people that a vendor provides to help the buyer make the case for a purchase internally. Decision support is the recognition that the salesperson is not in the room for most of the conversations that determine whether a deal is approved — so equipping the buyer with the right tools to represent the solution accurately and compellingly to their internal stakeholders is a critical part of the closing process.',
      example: "Riley offered: I know you have a CFO conversation coming up and I won't be in that room. Can I prepare a one-page financial summary — headline ROI, total cost of ownership comparison, and the contractual risk mitigation provisions — that gives you everything you need to represent the investment case confidently? I'd rather you have too much decision support going into that meeting than not enough.",
      imageSlug: '/images/advanced-follow-up-strategy-decision-support.png',
    },
    {
      word: 'REENGAGEMENT',
      partOfSpeech: 'noun',
      definition: "The deliberate, strategic reconnection with a prospect who has gone quiet or cold — distinguishing between a deal that is genuinely lost and one that has simply lost momentum due to internal priorities competing for the buyer's attention. Effective reengagement gives the buyer a reason to reengage that is relevant to them — a new development, a relevant client result, or a specific piece of decision support — rather than a generic 'checking in'.",
      example: "Riley's reengagement strategy was precise: She did not send a 'just checking in' message. Instead, she waited until a relevant client result could be used as the reengagement trigger — and opened with: 'I've been thinking about the conversation we had three weeks ago, and something came up this week that I think is directly relevant to the problem you described. I wanted to share it before you head into your internal review.'",
      imageSlug: '/images/advanced-follow-up-strategy-reengagement.png',
    },
    {
      word: 'MULTI-THREADING',
      partOfSpeech: 'noun',
      definition: "The practice of building relationships with multiple stakeholders within the buyer's organisation simultaneously — rather than relying on a single point of contact. Multi-threading protects a deal from the risk of a single champion losing authority, leaving the organisation, or simply not having enough internal influence to move the deal forward.",
      example: "Riley reflected on the stalled deal: The reason this deal has gone quiet is that I'm single-threaded. I only have Marcus — and Marcus is clearly dealing with competing internal priorities. If I had a relationship with Sarah in Operations and with the IT lead, I'd have two additional people who could give me visibility and potentially advocate from inside. Multi-threading needs to happen before a deal stalls, not after.",
      imageSlug: '/images/advanced-follow-up-strategy-multi-threading.png',
    },
    {
      word: 'PIPELINE VELOCITY',
      partOfSpeech: 'phrase',
      definition: 'The speed at which deals move through the sales pipeline — measured as a function of deal value, win rate, and average sales cycle length. Low pipeline velocity indicates that deals are taking longer than expected to close, often due to poor qualification, insufficient decision support, or failure to surface and address blockers early in the cycle.',
      example: "Riley's manager asked: What's driving the low velocity on your enterprise deals? Riley replied: Three things: I'm not multi-threading early enough, so when my primary contact loses attention the deal stalls; I'm not providing decision support proactively enough, so buyers are going into internal conversations without the right materials; and I'm not agreeing on specific next steps at the end of every meeting, so there's nothing pulling the deal forward between conversations.",
      imageSlug: '/images/advanced-follow-up-strategy-pipeline-velocity.png',
    },
    {
      word: 'TOUCH POINT',
      partOfSpeech: 'phrase',
      definition: "Any intentional contact or interaction with a prospect during the sales cycle — including emails, calls, meetings, shared content, and introductions to other team members. In complex B2B sales, the quality of touch points matters more than the quantity: a touch point that adds value to the buyer's decision process is far more effective than one that simply maintains the vendor's visibility.",
      example: "Riley mapped out her touch point strategy: The next touch point needs to be value-added — not a check-in, not a follow-up to the follow-up. I want to send Marcus a piece of client evidence that speaks directly to the CFO conversation he's about to have. That's a touch point with a specific purpose. It shows I was listening, it gives him something useful, and it creates a natural reason to respond.",
      imageSlug: '/images/advanced-follow-up-strategy-touch-point.png',
    },
    {
      word: 'DEAL RISK',
      partOfSpeech: 'phrase',
      definition: "Any factor — internal to the buyer, external in the market, or related to the vendor's own execution — that makes a deal less likely to close on time or at the expected value. Common sources of deal risk include: a key champion leaving the organisation, a budget freeze, a competitor gaining traction internally, a technical blocker surfacing late, or a change in the buyer's strategic priorities.",
      example: "Riley assessed the deal risk frankly: The fact that Marcus hasn't responded in three weeks is a risk signal — not necessarily that the deal is lost, but that something has changed internally. The deal risk I need to investigate is whether there's a new blocker, whether my champion has lost influence, whether a competitor has moved, or whether the internal priority has simply shifted. I can't manage a risk I haven't identified.",
      imageSlug: '/images/advanced-follow-up-strategy-deal-risk.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'FOLLOWING OUR CONVERSATION ON [DATE], I WANTED TO SEND A BRIEF RECAP',
      definition: "The standard opening for a strategic follow-up message — grounding the communication in a specific previous conversation and signalling that the recap is purposeful and structured. 'Brief' is important: it signals respect for the buyer's time. The word 'recap' rather than 'summary' implies a forward-facing framing — not just documenting the past but clarifying where things stand.",
      example: "Riley's follow-up opened: Following our conversation on Tuesday, I wanted to send a brief recap of what we covered and what I took away as the key open questions — as well as a one-page document I've prepared for your CFO conversation. The three things I want to make sure we're aligned on are: [first], [second], and [third].",
      imageSlug: '/images/advanced-follow-up-strategy-following-our-conversation-on-date-i-wanted-to-send-a-brief-recap.png',
    },
    {
      phrase: "I'M NOT REACHING OUT TO PUSH — I WANT TO OFFER SUPPORT WITH WHATEVER YOU'RE WORKING THROUGH INTERNALLY",
      definition: "The phrase for opening a reengagement call or message without creating pressure — explicitly naming the intent as supportive rather than urgent. This framing is effective because it acknowledges the reality of the buyer's situation (they're working through something internally) and positions the salesperson as a resource rather than a source of pressure.",
      example: "Riley opened the call: Before anything else, I want to be clear about why I'm calling. I'm not reaching out to push — I understand you have an internal process to navigate and I don't want to add to that pressure. I'm calling because I want to offer support with whatever you're working through on your side, and I wanted to make sure you had everything you need.",
      imageSlug: '/images/advanced-follow-up-strategy-im-not-reaching-out-to-push-i-want-to-offer-support.png',
    },
    {
      phrase: 'BASED ON WHAT YOU SHARED LAST TIME, THE MOST RELEVANT THING I CAN OFFER RIGHT NOW IS',
      definition: "The phrase for introducing targeted decision support — connecting the buyer's previously stated needs to a specific piece of evidence or material. The word 'relevant' does the most work here: it signals that the salesperson has been listening and is not offering generic content, but something specifically calibrated to the buyer's situation.",
      example: "Riley said: Based on what you shared last time — that your CFO would want to see a more detailed ROI analysis before the board presentation — the most relevant thing I can offer right now is a financial model that walks through the three-year return case at your exact pipeline volume. I've prepared it and I can either send it directly or walk you through it first.",
      imageSlug: '/images/advanced-follow-up-strategy-based-on-what-you-shared-last-time.png',
    },
    {
      phrase: "I'VE PUT TOGETHER A ONE-PAGE SUMMARY FOR YOUR [CFO/BOARD/TEAM] — HAPPY TO TALK THROUGH IT BEFORE YOU SHARE IT",
      definition: "The offer of decision support in a specific, practical form — a one-pager prepared for a specific internal audience. The offer to 'talk through it before you share it' is important: it gives the buyer the opportunity to preview and adapt the material, and it creates a natural reason for another conversation between the salesperson and the buyer.",
      example: "Riley offered: I've put together a one-page CFO summary — headline ROI at your pipeline volume, total cost of ownership comparison over three years, and the contractual risk provisions. I'm happy to talk through it with you before you share it, so we can make sure it's framed in the way that works best for how your CFO likes to evaluate investments. Would 20 minutes this week work for that?",
      imageSlug: '/images/advanced-follow-up-strategy-ive-put-together-a-one-page-summary.png',
    },
    {
      phrase: 'SINCE WE LAST SPOKE, [SOMETHING RELEVANT HAS CHANGED] — I THOUGHT THAT WAS WORTH SHARING',
      definition: "The standard structure for a reengagement touch point that leads with new, relevant information rather than a generic check-in. The trigger — a new client result, a market development, a product update — should be genuinely relevant to the buyer's stated priorities, not manufactured urgency.",
      example: 'Riley wrote: Since we last spoke, a client of ours in a very similar market — same deal complexity, similar team size — just completed their 12-month review and shared a result I thought was directly relevant to your situation: a 34% improvement in first-meeting-to-proposal conversion, which maps almost exactly to the challenge you described in our first conversation. I thought that was worth sharing before your CFO review.',
      imageSlug: '/images/advanced-follow-up-strategy-since-we-last-spoke-something-relevant-has-changed.png',
    },
    {
      phrase: "I DON'T WANT TO LOSE MOMENTUM — CAN WE AGREE ON WHAT THE RIGHT NEXT TOUCH POINT LOOKS LIKE?",
      definition: "The phrase for driving agreement on a specific next interaction at the end of a reengagement conversation — preventing the deal from drifting back into silence. It is collaborative ('can we agree') rather than prescriptive ('I'll call you on Thursday'), which makes it harder to decline.",
      example: "Riley said at the end of the call: I don't want to lose the momentum we've built today. Can we agree on what the right next touch point looks like — in terms of timing, format, and what we'd each want to have completed by then? I'd rather agree on something specific now than leave it open and find ourselves having this conversation again in three weeks.",
      imageSlug: '/images/advanced-follow-up-strategy-i-dont-want-to-lose-momentum.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Marcus, thank you for picking up. I know you've been heads down on the quarter close — I wanted to call rather than send another email, because I'd rather have a proper conversation than a chain of messages.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Appreciate that. And apologies for going quiet — it's been a complicated few weeks internally. The deal is still alive, if that's your first question.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It wasn't my first question, but I'm glad to hear it. My first question was: what's actually happening on your side — and is there anything I can do to make the internal process easier?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Two things, honestly. First, the CFO came back and said the ROI case in the proposal wasn't detailed enough — they want to see the full financial model before they'll sign off. Second, our IT team flagged a data residency concern in the vendor assessment — they're not sure our requirements are met.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Both are addressable — and I'm glad you told me now rather than in week five of a stalled process. Can I take each one? The CFO question first.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Please.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Based on what you've shared, the most relevant thing I can offer right now is a [[decision support:materials and information provided to help the buyer make the case internally — prepared specifically for the audience and conversation they're navigating]] document prepared specifically for your CFO. Not the full proposal — a one-page financial model at your exact pipeline volume: three-year ROI, total cost of ownership comparison with the alternative, and the risk mitigation provisions. Can I send that today, and would it be worth talking through it together before you share it?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That would actually be very helpful. The CFO won't read the full proposal — a one-pager they can interrogate is exactly the right format.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'll send it by end of today. Now — the data residency concern. This is worth addressing before it becomes a [[deal risk:any factor making a deal less likely to close on time or at the expected value — identified early, most risks are manageable; identified late, they become fatal]] in procurement. Can you connect me directly with your IT security lead? I want to send them our full technical documentation — data flow diagram, GDPR compliance certificate, and the specific residency architecture — before the formal vendor assessment.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I can do that. I'll introduce you by email this afternoon.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thank you. I also want to offer something I should have done earlier in this process: a direct relationship with Sarah in Operations. I'm realising I've been single-threaded — relying entirely on you as my [[touch point:any intentional contact or interaction with a prospect — the most effective touch points add specific value rather than simply maintaining visibility]] into your organisation. That's not fair to you and it's not smart on my side.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I think that's a good idea. Sarah has visibility across procurement, IT, and the CFO — and frankly, having a direct line to your team would help her as well.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'll also send a [[recap:a concise, purposeful summary that reinforces the value narrative and confirms understanding — not just a record of what was said but a forward-facing document]] of this call — not just the action items, but a [[value reminder:a deliberate reactivation of the buyer's stated problem and the solution's outcomes at the right moment in the decision cycle]] of why we're both investing time in this. When you first described your challenge, it was about the gap between conversations and conversions. I want to make sure that problem — and what we can do about it — stays at the centre of this process rather than getting lost in procurement admin.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That framing is useful. It's easy to lose sight of the 'why' when you're three weeks into vendor questionnaires and legal reviews.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly — and that's my job to prevent. I don't want to lose the [[pipeline velocity:the speed at which a deal moves through the cycle — affected by the quality of decision support, the depth of stakeholder relationships, and the clarity of agreed next steps]] we had three weeks ago. Before we close — can we agree on the next specific interaction? Not 'speak soon' — a date, a format, and what we'd both want to have completed by then.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Let's aim for Thursday. By then, you'll have sent the CFO summary and the IT documentation, I'll have introduced you to Sarah and the IT lead, and we can have a proper conversation about where the process stands.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thursday at the same time as today — I'll send a calendar invite now. And Marcus — thank you for being honest about what was happening. A [[reengagement:the deliberate, strategic reconnection with a prospect who has gone quiet — the most effective reengagement leads with value rather than pressure]] built on transparency is far more productive than one built on pretending everything is on track.",
    }
  ],

  matchingExercise: [
    {
        "word": "recap",
        "definition": "a purposeful summary that reinforces the value narrative and confirms mutual understanding — not just a record of what was said"
    },
    {
        "word": "value reminder",
        "definition": "a deliberate reactivation of the buyer's stated problem and the solution's outcomes at the right moment in the decision cycle"
    },
    {
        "word": "decision support",
        "definition": "materials provided to help the buyer make the case internally — prepared specifically for the audience they're navigating"
    },
    {
        "word": "reengagement",
        "definition": "the strategic reconnection with a prospect who has gone quiet — most effective when led with specific value rather than generic pressure"
    },
    {
        "word": "multi-threading",
        "definition": "building relationships with multiple stakeholders within the buyer's organisation rather than relying on a single contact"
    },
    {
        "word": "pipeline velocity",
        "definition": "the speed at which deals move through the sales cycle — affected by qualification quality, decision support, and agreed next steps"
    },
    {
        "word": "touch point",
        "definition": "any intentional contact with a prospect — the most effective ones add specific value rather than simply maintaining visibility"
    },
    {
        "word": "deal risk",
        "definition": "any factor making a deal less likely to close on time or at full value — identified early, most risks are manageable"
    }
],
  fillBlankExercise: [
    {
        "before": "I'm not calling to push — I'm calling to offer ",
        "after": " with whatever you're navigating internally. If there's something creating hesitation on your side, I'd rather surface it now than in three weeks.",
        "answer": "support"
    },
    {
        "before": "Based on what you shared last time — that the CFO needs a more detailed financial case — the most ",
        "after": " thing I can offer right now is a one-page ROI model prepared specifically for that conversation.",
        "answer": "relevant"
    },
    {
        "before": "I'm realising I've been single-",
        "after": " in this deal — relying entirely on one contact rather than building relationships across the decision-making team.",
        "answer": "threaded"
    },
    {
        "before": "I want to send a ",
        "after": " of this call — not just the action items, but a restatement of the original problem and how the solution addresses it, so the 'why' stays visible as you move through procurement.",
        "answer": "recap"
    },
    {
        "before": "Since we last spoke, a comparable client shared results that speak directly to the challenge you described — I thought that was worth sharing as a ",
        "after": " before your board review.",
        "answer": "value reminder"
    },
    {
        "before": "Before we close — can we agree on the next specific ",
        "after": "? Not 'speak soon' — a date, a format, and what we'd both want to have completed by then.",
        "answer": "touch point"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What two internal issues does Marcus reveal when Riley calls?",
        "options": [
            "The legal team has rejected the contract and procurement has found a cheaper alternative",
            "The CFO wants a more detailed ROI case and IT has flagged a data residency concern",
            "The budget has been frozen and the board meeting has been pushed back"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley offer to prepare for the CFO, and why does she offer to discuss it before Marcus shares it?",
        "options": [
            "A full product demo recording — so Marcus can decide which parts are most relevant",
            "A one-page financial model — so they can make sure it's framed in the way that works best for how the CFO evaluates investments",
            "The complete proposal in a shorter format — to save the CFO reading time"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say she should have done earlier in the process — and what does she call her mistake?",
        "options": [
            "She should have sent more frequent email updates — she calls it poor communication",
            "She should have introduced herself to more stakeholders earlier — she describes having been 'single-threaded'",
            "She should have submitted the vendor questionnaire sooner — she calls it poor process management"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley insist on agreeing before closing the call?",
        "options": [
            "A signed letter of intent confirming the deal is still active",
            "A specific date, format, and list of completions for the next interaction — not just 'speak soon'",
            "A revised timeline with a new board presentation date"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "How do you usually follow up after an important meeting or conversation at work? What do you typically include — and what do you tend to leave out?",
        "Think about a time you received a follow-up from a vendor, colleague, or manager that felt genuinely useful rather than routine or pushy. What made it land well — and what would have made it better?",
        "In a long sales or negotiation process, what is the difference between following up to add value and following up to apply pressure? How do you maintain that distinction over weeks or months?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "I am writing _____ the data residency concern your IT team raised during the vendor assessment — I'd like to address it directly rather than wait for the formal procurement stage.",
            "options": [
                "in regards to",
                "with regard to",
                "regarding of"
            ],
            "correctIndex": 1,
            "explanation": "'With regard to' is the correct formal phrase — not 'in regards to'. 'With regard to' means 'concerning' or 'about a specific subject', and the noun 'regard' is singular in this fixed prepositional phrase. 'In regards to' is a common error: 'regards' is the plural form used in closings ('kind regards', 'best regards') but not in the prepositional phrase 'with regard to'. 'Regarding of' is non-standard — 'regarding' alone works as a preposition ('regarding the concern') but 'regarding of' adds an unnecessary and incorrect preposition. In formal correspondence, use 'with regard to', 'regarding', or 'in relation to' — all standard. Avoid 'in regards to'."
        },
        {
            "sentence": "I haven't had a response _____ three weeks — which tells me either something has changed internally or the deal has deprioritised relative to other initiatives.",
            "options": [
                "since",
                "for",
                "during"
            ],
            "correctIndex": 1,
            "explanation": "'For three weeks' is correct — 'for' is used with the present perfect to indicate a duration of time. 'For' answers the question 'how long?' when the period is expressed as a length of time: 'for three weeks', 'for six months', 'for two years'. 'Since three weeks' is incorrect — 'since' marks a specific point in time and must be followed by a date, event, or specific reference point: 'since Tuesday', 'since the last board meeting', 'since we last spoke'. The test: if you can ask 'how long?' the answer takes 'for'. If you can ask 'since when?', the answer takes 'since' with a specific reference point, not a duration."
        },
        {
            "sentence": "I wanted to _____ on the CFO conversation before you head into the board review — can we schedule 20 minutes this week?",
            "options": [
                "follow-up",
                "follow up",
                "followup"
            ],
            "correctIndex": 1,
            "explanation": "'Follow up' (two words, no hyphen) is correct when used as a verb. The hyphenated form 'follow-up' and the one-word form 'followup' are used as a noun or adjective: 'a follow-up call' (adjective modifying noun), 'the follow-up was useful' (noun). When the function is verbal — 'I wanted to follow up on X' — the two-word unhyphenated form is the standard: 'I'll follow up tomorrow', 'can we follow up on this?', 'I want to follow up on the concern you raised'. This is a frequently confused pair in written business English: the noun/adjective form is hyphenated, the verb form is two separate words."
        },
        {
            "sentence": "I've prepared a summary that includes all the _____ the CFO will need — ROI model, TCO comparison, risk provisions, and two client references at comparable scale.",
            "options": [
                "informations",
                "information",
                "informing"
            ],
            "correctIndex": 1,
            "explanation": "'Information' is an uncountable noun in English — it has no plural form. 'Informations' does not exist in standard English, regardless of how many pieces of information are being described. Use 'information' as a singular uncountable noun: 'all the information', 'the information we need', 'additional information'. To specify quantity, use: 'a piece of information', 'several pieces of information', 'this information', 'the information provided'. This is a very frequent error for speakers whose first language treats 'information' as countable. Other uncountable nouns in business English: advice, feedback, evidence, research, knowledge, progress."
        },
        {
            "sentence": "If the CFO _____ a more detailed financial model, I can prepare one in 24 hours — but I'd rather send it to you first so we can align on the framing.",
            "options": [
                "would need",
                "needs",
                "will need"
            ],
            "correctIndex": 1,
            "explanation": "In a first conditional (real conditional — describing a genuinely possible situation), the if-clause takes the present simple: 'If the CFO needs X, I can do Y.' The modal 'would' belongs in the result clause ('I would prepare') but never in the if-clause of a real conditional. 'If the CFO would need' is non-standard — 'would' in if-clauses is reserved for second conditionals (hypothetical situations: 'If the CFO were to ask...') or for formal reported speech patterns. 'If the CFO will need' is also unusual — present simple is preferred even when referring to future possibilities in the if-clause."
        },
        {
            "sentence": "Riley said the most effective reengagement _____ with something genuinely relevant to the buyer — a new client result, a market development, or specific decision support they haven't yet received.",
            "options": [
                "led",
                "leads",
                "is leading"
            ],
            "correctIndex": 1,
            "explanation": "'Leads' (present simple, third-person singular) is correct because this sentence describes a general truth or principle about effective reengagement — not a specific past event or a temporary ongoing action. General truths, principles, and habitual patterns use present simple: 'the most effective approach leads with value', 'good follow-up reinforces the narrative', 'strategic touch points add value, not just visibility'. 'Led' (past simple) would be correct only if describing a specific past reengagement: 'Riley's reengagement led with client results.' 'Is leading' (present continuous) implies a temporary ongoing action, not a general principle."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the buyer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "We've been a bit tied up internally — things have moved more slowly than expected. But the deal is still on our radar.",
                "options": [
                    "No problem at all — take your time. I'll check back in a few weeks and see where things stand.",
                    "I appreciate you saying that. Can I ask one question: when you say 'more slowly than expected', is that about bandwidth on your team's side, or has something changed internally that's affecting the evaluation? I want to make sure I understand the real picture so I can offer the right support.",
                    "I understand — these things take time. Is there any additional information I can send that might help accelerate the internal process?"
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most effective response — it asks a precise diagnostic question to distinguish between two very different situations: a bandwidth problem (which time will solve) and a substantive change in the internal situation (which requires active management). This distinction determines the entire strategy. Option A is passive and cedes all control — 'I'll check back in a few weeks' is exactly the approach that allows deals to die through neglect rather than decision. Option C offers generic information without understanding what the actual blocker is — sending more material to an organisation with a bandwidth problem adds to the problem rather than solving it."
            },
            {
                "customerLine": "The CFO needs a more detailed ROI case before they'll present this to the board. The proposal wasn't enough.",
                "options": [
                    "I understand — I can certainly look at expanding the ROI section of the proposal if that would help.",
                    "That's exactly the kind of feedback I need to act on. Based on what you've shared, I'd like to prepare a separate one-page CFO summary — not an expanded version of the proposal, but a document designed specifically for the CFO conversation: headline ROI at your pipeline volume, three-year TCO comparison, and the risk provisions. Can I send it by end of today, and would it be worth a 20-minute call to walk through it together before you share it internally?",
                    "The ROI case is actually quite detailed in section four of the proposal — I wonder if the CFO had a chance to review that section specifically. Perhaps I could set up a call to walk them through it directly?"
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right response — it immediately translates the feedback into a specific, targeted deliverable (a CFO-specific one-pager), names the content clearly, proposes a timeline (end of today), and offers to walk through it first. This is decision support done well. Option A offers to 'expand the ROI section' — which misunderstands the problem. The CFO doesn't want more pages; they want the right information in the right format. Option C implies the CFO didn't read carefully, which risks being condescending — and proposing to call the CFO directly without going through Marcus first may overstep the buyer's process."
            },
            {
                "customerLine": "I think we'll be in a better position to make a decision next quarter. Things are just very busy right now.",
                "options": [
                    "Of course — next quarter works for us. I'll follow up at the start of Q4 and we can revisit from there.",
                    "I want to understand what 'next quarter' means for the decision — is it that you genuinely need more time to evaluate, or is it that internal bandwidth is the constraint right now? Because if it's bandwidth, there may be things I can do to reduce the burden on your side. And if the evaluation is complete and it's purely a timing question, I'd like to understand the cost of a one-quarter delay for your team — not as a pressure argument, but so we're both making the decision with the full picture.",
                    "Understood. Is there anything I can do before next quarter to keep the momentum going — any materials I can prepare or contacts I can make on your side?"
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most effective response — it diagnoses the real reason for the delay (evaluation vs bandwidth vs timing preference), offers to solve the bandwidth problem if that's the cause, and frames the cost of delay as relevant information rather than a pressure tactic. This is sophisticated closing language at C1-C2 level. Option A accepts the deferral completely — which is appropriate in some cases, but here it's done without understanding why, which means the deal drifts for a full quarter without any effort to address the underlying cause. Option C is helpful in tone but passive in substance — it offers to 'keep momentum going' without challenging the deferral itself."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the follow-up conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Following our last call, I wanted to follow-up on the two concerns you mentioned — the CFO's ROI question and the IT data residency issue."
            },
            {
                "speaker": "Marcus",
                "text": "Yes — both are still open. The CFO presentation is scheduled for next week."
            },
            {
                "speaker": "Riley",
                "text": "In regards to the CFO question, I've prepared a one-page financial model at your exact pipeline volume — three-year ROI and a TCO comparison. Can I send it today?"
            },
            {
                "speaker": "Marcus",
                "text": "That would be very helpful. On the IT question — how quickly can you get them the technical documentation?"
            },
            {
                "speaker": "Riley",
                "text": "I can send it today. I should mention — I haven't heard from your team since three weeks, so I wasn't sure whether the vendor assessment had already started."
            },
            {
                "speaker": "Riley",
                "text": "Before we close — let's agree on a specific next touch point so we don't lose momentum. Not 'speak soon' — a date, a format, and what we'd both want to have completed."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 0,
                "incorrectText": "follow-up on",
                "correction": "follow up on",
                "explanation": "When used as a verb, 'follow up' is two separate words with no hyphen: 'I wanted to follow up on X'. The hyphenated form 'follow-up' is reserved for its use as a noun ('a follow-up call', 'the follow-up was useful') or as a compound adjective ('our follow-up strategy'). When the function is verbal — 'I'll follow up', 'I want to follow up on this', 'we need to follow up with the team' — the two-word unhyphenated form is standard. This is one of the most common punctuation errors in business writing: treating the verbal phrasal verb as if it were the noun/adjective compound."
            },
            {
                "lineIndex": 2,
                "incorrectText": "In regards to",
                "correction": "With regard to",
                "explanation": "'With regard to' is the correct formal prepositional phrase — 'regard' is singular in this fixed expression. 'In regards to' is a very common error in formal correspondence: 'regards' (plural) is used in closings ('kind regards') but not in the formal preposition phrase. The correct forms are: 'with regard to', 'in regard to', or simply 'regarding'. All three mean 'concerning' or 'about a specific subject'. 'In regards to' is widely used in informal and business communication but is considered non-standard in formal written English and is marked as an error by most style guides."
            },
            {
                "lineIndex": 4,
                "incorrectText": "since three weeks",
                "correction": "for three weeks",
                "explanation": "'For' is used with the present perfect to express a duration — a length of time: 'for three weeks', 'for six months', 'for two years'. 'Since' marks a specific point in time and must be followed by a reference point, not a duration: 'since Tuesday', 'since our last call', 'since the vendor assessment began'. The test: 'for' answers 'how long?' with a length of time; 'since' answers 'since when?' with a specific point. 'Since three weeks' attempts to combine both: it uses 'since' with what is actually a duration ('three weeks'), which is non-standard. Correct alternatives: 'for three weeks' (duration) or 'since three weeks ago' (using 'ago' to turn the duration into a point in time)."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally using sophisticated follow-up strategy language.",
        "items": [
            {
                "customerLine": "Things have gone quiet on our end — I'm not sure where the decision stands internally.",
                "salespersonStart": "I appreciate you being honest about that rather than giving me a polished non-answer.",
                "suggestedCompletion": "Can I ask what's behind the quiet? Not to pressure you — but because there's a difference between a deal that's waiting for an internal process to run its course, and one where something has changed that I should know about. If it's the former, I want to make sure I'm providing the right decision support so nothing stalls on my side. If it's the latter, I'd rather know now so we can address it directly. Which is closer to the reality?"
            },
            {
                "customerLine": "I haven't had a chance to share the proposal with the wider team yet. It's been on my list.",
                "salespersonStart": "I understand — and I want to make that internal sharing as easy as possible rather than adding to your to-do list.",
                "suggestedCompletion": "What I can do is prepare a version of the proposal tailored to each audience: a one-page executive summary for the CFO, a technical brief for IT security, and a business case overview for the broader leadership team. That way you're not sending a 40-page document to people who need a one-page summary — you're sending each person exactly what they need to engage with the decision. Would that kind of decision support be useful?"
            },
            {
                "customerLine": "We'll circle back once the quarter closes — it's just not the right moment right now.",
                "salespersonStart": "I hear that — and I'll respect whatever timeline works for your team. But before we agree to reconnect next quarter, can I ask one question?",
                "suggestedCompletion": "Is the timing the actual constraint — or is there something in the evaluation that's unresolved that's making now feel like the wrong moment? Because if it's purely a bandwidth issue, I can hold until next quarter. But if there's a concern or a blocker that hasn't been surfaced yet, the next quarter won't resolve it — it'll just delay it. I'd rather spend 15 minutes now understanding the real situation than reconnect in 10 weeks and discover there was something we could have addressed today."
            }
        ]
    }
},
};
