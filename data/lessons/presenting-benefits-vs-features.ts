import { Lesson } from '@/types/lesson';

export const presentingBenefitsVsFeatures: Lesson = {
  slug: 'presenting-benefits-vs-features',
  title: 'Presenting Benefits vs Features',
  subtitle: 'How to move from what your product does to what it means for the customer',
  level: 'B1-B2',
  description: 'Learn how to distinguish between features and benefits, translate technical capabilities into customer outcomes, and present your product in a way that connects directly to the problems your prospect has already told you about.',
  heroImage: '/images/presenting-benefits-vs-features-hero.png',

  vocabulary: [
    {
      word: 'FEATURE',
      partOfSpeech: 'noun',
      definition: 'A specific function, capability, or characteristic of a product — what it has or what it does, independent of any particular customer.',
      example: 'Real-time pipeline tracking is a feature — it tells you what the product can do, but not why that matters to this specific customer.',
      imageSlug: '/images/presenting-benefits-vs-features-feature.png',
    },
    {
      word: 'BENEFIT',
      partOfSpeech: 'noun',
      definition: 'The positive outcome or value that a feature delivers to a specific customer — what the feature means in their world.',
      example: 'The benefit of real-time tracking is that Marcus can see where every deal is the moment something stalls, without waiting for a rep to tell him.',
      imageSlug: '/images/presenting-benefits-vs-features-benefit.png',
    },
    {
      word: 'OUTCOME',
      partOfSpeech: 'noun',
      definition: 'The measurable result or change that happens because of using the product — what is different after the problem is solved.',
      example: 'The outcome we are aiming for is not just better data — it is two or three more closed deals per month that would otherwise have slipped through.',
      imageSlug: '/images/presenting-benefits-vs-features-outcome.png',
    },
    {
      word: 'RELEVANT',
      partOfSpeech: 'adjective',
      definition: "Directly connected to the customer's specific situation or problem — a benefit is only powerful when it is relevant to what the customer actually cares about.",
      example: 'Everything you present should pass one test: is this relevant to what they told me in discovery? If it is not, leave it out.',
      imageSlug: '/images/presenting-benefits-vs-features-relevant.png',
    },
    {
      word: 'TANGIBLE',
      partOfSpeech: 'adjective',
      definition: 'Real and measurable — something the customer can actually see, feel, or quantify rather than something vague or abstract.',
      example: "Vague benefits lose deals — 'saves time' means nothing. Tangible benefits win them — 'reduces manual reporting from three hours a week to twenty minutes'.",
      imageSlug: '/images/tangible.png',
    },
    {
      word: 'DIFFERENTIATE',
      partOfSpeech: 'verb',
      definition: 'To show how your product is meaningfully different from alternatives — why yours is the right choice for this specific customer.',
      example: 'You do not need to criticise competitors to differentiate — just show what changes for the customer when they choose you instead.',
      imageSlug: '/images/differentiate.png',
    },
    {
      word: 'RESONATE',
      partOfSpeech: 'verb',
      definition: 'To connect with someone in a way that feels true and meaningful to them — when a benefit lands, the customer feels it before they think it.',
      example: "A benefit resonates when the prospect says 'yes, that is exactly the problem' — not when they politely nod and move on.",
      imageSlug: '/images/presenting-benefits-vs-features-resonate.png',
    },
    {
      word: 'TRANSLATE',
      partOfSpeech: 'verb',
      definition: 'To convert a feature into a benefit — to explain what a technical capability actually means in practical, human terms.',
      example: 'Your job in a pitch is to translate — take what the engineers built and turn it into something the customer can immediately see the value of.',
      imageSlug: '/images/translate.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS HELPS YOU',
      definition: 'The core benefit phrase — connects a feature directly to what the customer gains or achieves. Always follow it with the specific outcome.',
      example: 'The automated follow-up reminders — this helps you make sure no deal goes cold because a rep forgot to check in.',
      imageSlug: '/images/this-helps-you.png',
    },
    {
      phrase: 'THE MAIN BENEFIT IS',
      definition: 'Lead with the most important value before explaining how it works — gives the customer a reason to listen to the technical detail that follows.',
      example: 'The main benefit is visibility — you will always know exactly where every deal is, without having to ask anyone.',
      imageSlug: '/images/the-main-benefit-is.png',
    },
    {
      phrase: 'WHAT THAT MEANS FOR YOU IS',
      definition: 'Translate a feature or technical capability into a practical outcome for this specific customer — makes the abstract concrete.',
      example: 'We track every touchpoint automatically — what that means for you is that your pipeline data is always accurate, not just when someone remembers to update it.',
      imageSlug: '/images/what-that-means-for-you-is.png',
    },
    {
      phrase: 'WHICH MEANS',
      definition: 'A connecting phrase that links a feature directly to its benefit — keeps the language flowing without sounding scripted.',
      example: 'Our system sends automatic alerts when a deal has not moved in five days — which means you can intervene before a prospect goes cold, not after.',
      imageSlug: '/images/which-means.png',
    },
    {
      phrase: 'SO IN PRACTICE',
      definition: 'Move from an abstract benefit to a concrete, real-world example — shows the customer what the benefit actually looks like in their day-to-day work.',
      example: 'The dashboard updates in real time — so in practice, you could open it at 9am on Monday and see the exact status of every deal without sending a single message to the team.',
      imageSlug: '/images/so-in-practice.png',
    },
    {
      phrase: 'COMPARED TO',
      definition: 'Show what is different about your product by contrasting it with the current situation or alternative — makes the benefit measurable and specific.',
      example: 'Compared to building a manual spreadsheet that relies on everyone remembering to update it, this runs automatically in the background — no maintenance required.',
      imageSlug: '/images/compared-to.png',
    }
  ],

  videos: [],

  registerAwareness: [
    {
      context: 'Live product demo',
      register: 'Conversational / Professional',
      example: "'So this feature here — what that means for you specifically is that you do not have to chase your reps for updates. The system does it. So in practice, your Monday morning looks completely different.'",
    },
    {
      context: 'Written product one-pager',
      register: 'Neutral / Written',
      example: "'Automated pipeline tracking: Brightline logs every deal touchpoint automatically, giving sales managers real-time visibility without relying on manual CRM updates. Teams using this feature report a 30% reduction in stalled deals.'",
    },
    {
      context: 'Enterprise proposal',
      register: 'Formal / Written',
      example: "'The primary benefit of Brightline's automated tracking capability is the elimination of data latency in the pipeline. Rather than relying on rep-initiated updates, the system records all touchpoints in real time — ensuring that leadership has an accurate, up-to-date view of pipeline health at all times.'",
    },
    {
      context: 'Quick message to a warm prospect',
      register: 'Casual / Direct',
      example: "'Quick thought after our call — the thing that usually gets teams like yours is the follow-up visibility gap. Brightline basically solves that automatically. Worth 20 mins to show you how?'",
    },
    {
      context: 'Internal pitch prep notes',
      register: 'Neutral / Structured',
      example: "Lead with visibility benefit — that is his stated priority. Feature: automated touchpoint tracking. Benefit: always-accurate pipeline without manual updates. Tangible outcome: 2–3 recovered deals/month. Use 'compared to your spreadsheet' to differentiate.",
    },
  ],

  registerTraps: [
    "❌ Leading with features before benefits forces the customer to do the work of figuring out why it matters to them — most will not bother. Lead with the benefit, then explain the feature.",
    "✅ The strongest benefit you can present is the one the customer named in discovery — use their exact words when you can. 'You mentioned visibility was the issue — this solves exactly that.'",
    "🔁 'This helps you...' only works if what follows is genuinely relevant to what they told you. A benefit that does not connect to their problem is just a feature with extra words.",
    "💡 Make benefits tangible by attaching numbers wherever possible — 'saves time' is vague, 'reduces your Monday prep from 45 minutes to under 5' is a reason to buy.",
  ],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Marcus, based on everything you told me, I want to show you what Brightline does — but I am going to focus only on the parts that are [[relevant:directly connected to the customer's specific situation or problem]] to what you described. I will skip anything that does not apply to you.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I appreciate that. I have sat through too many demos where someone just clicks through every screen.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Understood. So — the first thing. Brightline tracks every deal touchpoint automatically. That is the [[feature:a specific function or capability of a product — what it does]]. The main benefit is that your pipeline data is always accurate — not just when a rep remembers to log something.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is the thing — right now if someone does not update the CRM, I have no idea what is happening.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. What that means for you is that you can open the dashboard at any point — Monday morning, mid-week, whenever — and see exactly where every deal is. So in practice, you stop finding out about stalled deals from customers, and start seeing them yourself, with time to do something about it.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That would change things significantly. What about follow-up — you mentioned automated reminders?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes. The system flags any deal that has not had a touchpoint in a set number of days — you decide the threshold. This helps you make sure no deal goes cold because a rep lost track of it — which means the [[outcome:the measurable result that happens because of using the product]] is fewer deals slipping through in that final stage you mentioned.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And how does that [[differentiate:to show how your product is meaningfully different from alternatives]] from what we could just build ourselves in the CRM?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good question. Compared to a manual workaround in your CRM, this runs in the background without anyone having to maintain it. The [[tangible:real and measurable — something you can quantify]] difference is that it works even when people are busy — especially when people are busy. Your spreadsheet relies on twelve people remembering. This does not.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That [[resonate:to connect with someone in a way that feels true and meaningful]]s — honestly, the spreadsheet works until it does not, and by the time it stops working you have already lost the deals.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is exactly right. And I think you will find that when you can [[translate:to convert a feature into a benefit — to explain what something means in practical terms]] those recovered deals into numbers — two or three a month at your deal size — it becomes a very straightforward business case.',
    }
  ],

  matchingExercise: [
    {
        "word": "FEATURE",
        "definition": "What a product has or does — a specific capability or function"
    },
    {
        "word": "BENEFIT",
        "definition": "The positive outcome a feature delivers to a specific customer"
    },
    {
        "word": "OUTCOME",
        "definition": "The measurable result or change that happens after the problem is solved"
    },
    {
        "word": "RELEVANT",
        "definition": "Directly connected to the customer's specific situation or problem"
    },
    {
        "word": "TANGIBLE",
        "definition": "Real and measurable — something you can actually see or quantify"
    },
    {
        "word": "DIFFERENTIATE",
        "definition": "To show how your product is meaningfully different from alternatives"
    },
    {
        "word": "RESONATE",
        "definition": "To connect with someone in a way that feels true and meaningful to them"
    },
    {
        "word": "TRANSLATE",
        "definition": "To convert a feature into a benefit — to explain what it means in practical terms"
    }
],
  fillBlankExercise: [
    {
        "before": "Real-time pipeline tracking is a",
        "after": "— it tells you what the product can do, but not why it matters to this specific customer.",
        "answer": "feature"
    },
    {
        "before": "The",
        "after": "of real-time tracking is that Marcus can see where every deal is the moment something stalls.",
        "answer": "benefit"
    },
    {
        "before": "The",
        "after": "we are aiming for is not just better data — it is two or three more closed deals per month.",
        "answer": "outcome"
    },
    {
        "before": "Everything you present should pass one test: is this",
        "after": "to what they told me in discovery? If not, leave it out.",
        "answer": "relevant"
    },
    {
        "before": "Vague benefits lose deals —",
        "after": "benefits win them — 'reduces manual reporting from three hours to twenty minutes'.",
        "answer": "tangible"
    },
    {
        "before": "You do not need to criticise competitors to",
        "after": "— just show what changes for the customer when they choose you.",
        "answer": "differentiate"
    },
    {
        "before": "A benefit",
        "after": "when the prospect says 'yes, that is exactly the problem' — not when they politely nod.",
        "answer": "resonates"
    },
    {
        "before": "Your job in a pitch is to",
        "after": "— take what the engineers built and turn it into something the customer can immediately see the value of.",
        "answer": "translate"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the difference between a feature and a benefit?",
        "options": [
            "A feature is more important than a benefit in a sales conversation",
            "A feature is what the product does; a benefit is what that means for the specific customer",
            "A benefit is a technical description; a feature is a practical outcome",
            "They mean the same thing — both describe the value of a product"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Riley say she will 'skip anything that does not apply' to Marcus?",
        "options": [
            "To save time in the demo",
            "Because Brightline only has a few features",
            "To show that she listened in discovery and will only present what is relevant to his situation",
            "Because enterprise customers prefer shorter demos"
        ],
        "correctIndex": 2
    },
    {
        "question": "When Riley says 'the main benefit is visibility', what does she do next?",
        "options": [
            "She moves to a different feature",
            "She asks Marcus if he has used similar tools before",
            "She explains the technical feature — automatic touchpoint tracking — that delivers that benefit",
            "She shows Marcus a case study"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does 'so in practice' signal in Riley's presentation?",
        "options": [
            "She is about to introduce a new feature",
            "She is about to give a concrete, real-world example of what the benefit looks like",
            "She is summarising what she has already said",
            "She is about to ask Marcus a question"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley differentiate Brightline from Marcus's current manual spreadsheet?",
        "options": [
            "By saying the spreadsheet is a poor solution",
            "By explaining that Brightline is cheaper to run",
            "By pointing out that Brightline works automatically even when the team is busy, unlike the spreadsheet",
            "By showing that Brightline integrates with more tools"
        ],
        "correctIndex": 2
    },
    {
        "question": "Marcus says 'that resonates'. What does this tell Riley?",
        "options": [
            "Marcus is impressed by the technical capability",
            "The benefit she described connected directly to a problem he has personally experienced",
            "Marcus wants to move to the pricing conversation",
            "Marcus has heard this pitch from a competitor"
        ],
        "correctIndex": 1
    },
    {
        "question": "According to the Register Traps, what makes a benefit tangible?",
        "options": [
            "Using formal, professional language",
            "Mentioning it early in the conversation",
            "Attaching specific numbers — 'reduces prep from 45 minutes to under 5' rather than 'saves time'",
            "Comparing it to what a competitor offers"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the 'so what?' test mentioned in this lesson?",
        "options": [
            "A question you ask the prospect to check they understood",
            "A way to test whether a competitor's product is better",
            "After every feature, ask what that means for the customer — if you cannot answer it, you have a feature, not a benefit",
            "A way to close the deal once you have presented the benefits"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation involves choosing between a feature-led and a benefit-led response. Choose the one that will land better with the prospect. Discuss your reasoning before clicking.",
        "items": [
            {
                "customerLine": "A prospect asks: 'What does your reporting tool actually do?'",
                "options": [
                    "Say: 'It pulls data from your CRM, your email, and your calendar, aggregates it into a single dashboard, and updates every 15 minutes.'",
                    "Say: 'The main benefit is that you get a single, accurate view of your pipeline without having to chase anyone for updates — so in practice, your Monday morning review takes five minutes instead of forty-five.'",
                    "Say: 'It is a very powerful reporting suite with over 30 customisable widgets and real-time data sync.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It leads with the benefit and makes it tangible with a specific time comparison. A describes the feature accurately but forces the prospect to figure out why it matters. C adds complexity without adding clarity — more features listed is not more compelling."
            },
            {
                "customerLine": "A prospect says: 'I already have a CRM. Why would I need this on top of it?'",
                "options": [
                    "Say: 'Brightline is not a CRM replacement — it sits on top of your existing tools. What that means for you is that your CRM data gets richer automatically, without anyone having to do extra work.'",
                    "Say: 'Brightline integrates with all major CRM platforms via API and uses a bi-directional sync to ensure data consistency across your stack.'",
                    "Say: 'A lot of our customers use it alongside their CRM — it is very flexible.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It directly addresses the concern, names the benefit clearly, and translates the technical integration into a practical outcome: better data with no extra effort. B is accurate but purely feature-led — it answers the wrong question (how does it work) rather than the right one (why does it matter). C is vague and avoids the question."
            },
            {
                "customerLine": "You have just described a feature. The prospect looks uncertain. What do you say?",
                "options": [
                    "Say: 'Does that make sense technically? I can go into more detail on the architecture if that would help.'",
                    "Say: 'Let me translate that into what it actually means for your team day to day — because the feature itself is less important than what it changes for you.'",
                    "Say: 'That is actually one of our most popular features — most customers say it is the thing they use most.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. When a prospect looks uncertain after a feature explanation, the problem is almost always that the benefit has not landed — and B addresses that directly by pivoting to practical impact. A goes deeper into the feature, which is the opposite of what is needed. C uses social proof before the benefit has connected — it is premature."
            },
            {
                "customerLine": "A prospect says: 'We are also looking at a competitor. What makes you different?'",
                "options": [
                    "Say: 'We have more integrations, a better user interface, and our customer support rating is higher.'",
                    "Say: 'I would rather not comment on competitors — but I can tell you what changes for your team specifically when they use Brightline. Compared to most tools in this space, the difference is that this requires almost zero manual input from your reps.'",
                    "Say: 'We have been in the market longer and have more enterprise customers.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It differentiates without attacking — and ties the differentiator directly to something Marcus already said matters to him. A lists features without benefits and can come across as defensive. C uses credibility signals that are not relevant to the prospect's specific problem."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect situations. Each one has a different key pain point. As a group, match each prospect to the benefit that would resonate most with them. Then click 'Check Matches'.",
        "profiles": [
            {
                "name": "Marcus",
                "description": "Marcus is a VP of Sales. His main pain point is lack of pipeline visibility — he finds out about stalled deals too late to do anything about them. He manages a team of 12 reps and loses an estimated 2–3 deals per month because of slow or missed follow-up.",
                "matchKey": "visibility"
            },
            {
                "name": "Diane",
                "description": "Diane is a Head of Marketing. Her team spends three hours every Monday morning manually compiling a performance report from four different tools. She says the data is always slightly out of date by the time anyone reads it, and the process is burning out her junior team members.",
                "matchKey": "automation"
            },
            {
                "name": "Sam",
                "description": "Sam is a Sales Director at a fast-growing company. His biggest frustration is that the sales process is inconsistent — every rep does things slightly differently, which makes it impossible to coach effectively or replicate what works.",
                "matchKey": "consistency"
            }
        ],
        "options": [
            {
                "key": "visibility",
                "label": "Always know where every deal is in real time",
                "description": "The main benefit is that you can see the status of every deal the moment something stalls — without waiting for a rep to tell you. So in practice, you intervene before a deal goes cold, not after."
            },
            {
                "key": "automation",
                "label": "Reports that build themselves — no manual work",
                "description": "This helps you eliminate the manual reporting cycle entirely. What that means for your team is that Monday morning prep goes from three hours to under ten minutes — and the data is always current, not already out of date."
            },
            {
                "key": "consistency",
                "label": "A shared process every rep follows — automatically",
                "description": "The main benefit is that the system guides every rep through the same process, regardless of how long they have been in the role. Which means you can finally see what works, replicate it, and coach from real data rather than guesswork."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "A feature has been stated. Finish the line by translating it into a benefit using the language from this lesson. Compare your versions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "Feature: 'Brightline sends an automatic alert when a deal has not had a touchpoint in five days.'",
                "salespersonStart": "This helps you",
                "suggestedCompletion": "catch deals before they go cold — not after you've already lost them. So in practice, instead of finding out a prospect went quiet two weeks ago, you get a flag on day five and you still have time to do something about it."
            },
            {
                "customerLine": "Feature: 'All your pipeline data updates in real time from your CRM, email, and calendar — automatically.'",
                "salespersonStart": "What that means for you is",
                "suggestedCompletion": "that your pipeline is always accurate — not just when someone remembers to update it. Compared to your current spreadsheet, this does not rely on your team doing anything extra. The data just reflects reality, all the time."
            },
            {
                "customerLine": "Feature: 'The system gives every rep a structured workflow for each deal stage — prompts, templates, and next-step reminders built in.'",
                "salespersonStart": "The main benefit is",
                "suggestedCompletion": "that every rep, regardless of experience level, follows the same process — which means you can finally see what works and replicate it. And when someone new joins the team, they are not learning from scratch. They are guided from day one."
            },
            {
                "customerLine": "Feature: 'Managers get a single dashboard showing team performance, deal health, and pipeline forecast — updated every hour.'",
                "salespersonStart": "So in practice,",
                "suggestedCompletion": "your Monday morning review does not start with you chasing the team for updates. You open the dashboard, you see exactly where everything stands, and you spend the meeting making decisions — not gathering information."
            }
        ]
    }
},
};
