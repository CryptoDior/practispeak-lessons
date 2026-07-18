import { Lesson } from '@/types/lesson';

export const salesLeadershipCommunication: Lesson = {
  slug: 'sales-leadership-communication',
  title: 'Sales Leadership Communication',
  subtitle: 'The internal language of sales leadership — coaching conversations, pipeline reviews, target-setting, and the strategic communication that drives team performance',
  level: 'C1-C2',
  description: "Sales leadership requires a distinct set of communication skills that are entirely different from those used in customer-facing conversations. Where a salesperson persuades, a sales leader coaches. Where a salesperson closes, a sales leader develops capability. The most effective sales managers spend the majority of their time in conversations that build their team's judgement rather than providing answers — asking questions that help a rep discover the right course of action rather than prescribing it. This lesson teaches the internal language of B2B sales leadership: how to run a pipeline review that surfaces real risk rather than polished projections, how to coach without telling, how to set and communicate targets in a way that creates clarity rather than anxiety, and how to communicate strategic direction in a way that enables every member of the team to execute with autonomy.",
  heroImage: '/images/sales-leadership-communication-hero.png',

  vocabulary: [
    {
      word: 'QUOTA',
      partOfSpeech: 'noun',
      definition: 'The revenue target a salesperson is expected to hit in a given period. It is set by the sales manager and used to measure individual performance.',
      example: 'The team finished the quarter at 115% of quota — every rep exceeded their individual target, with the top performer closing 15% above their assigned number.',
      imageSlug: '/images/quota.png',
    },
    {
      word: 'ATTAINMENT',
      partOfSpeech: 'noun',
      definition: 'The percentage of quota a salesperson or team has achieved in a given period. It shows how close they are to hitting their target.',
      example: 'At 58% attainment at the mid-point of the quarter, the team needed to accelerate three key deals to close the gap before quarter-end.',
      imageSlug: '/images/attainment.png',
    },
    {
      word: 'COACHING',
      partOfSpeech: 'noun',
      definition: "Regular one-to-one sessions between a sales manager and a rep to develop skills, review deals, and improve performance through questioning and reflection rather than giving direct answers.",
      example: 'Weekly coaching sessions helped identify a gap in the rep\'s discovery process and led to faster deal progression and stronger close rates by the following month.',
      imageSlug: '/images/coaching.png',
    },
    {
      word: 'PIPELINE COVERAGE',
      partOfSpeech: 'phrase',
      definition: 'The ratio of total pipeline value to quota. It shows whether a rep or team has enough active deals to hit their target for the period.',
      example: 'Pipeline coverage had dropped to 2.1:1 — well below the minimum needed to close the quarter with confidence, so new opportunities had to be added immediately.',
      imageSlug: '/images/sales-leadership-communication-pipeline-coverage.png',
    },
    {
      word: 'FORECAST',
      partOfSpeech: 'noun',
      definition: 'A prediction of how much revenue the team will close in a given period. It is split by confidence level — commit, best case, and upside.',
      example: 'The forecast showed $52M committed, but six deals flagged as at risk meant the actual close number was likely to fall short of that figure.',
      imageSlug: '/images/sales-leadership-communication-forecast.png',
    },
    {
      word: 'DEAL RISK',
      partOfSpeech: 'phrase',
      definition: 'Any factor that makes a deal less likely to close on time or at the expected value — such as no agreed next step, stalled activity, or missing stakeholders.',
      example: 'The deal had been in the same stage for 47 days with no agreed next step and several key stakeholders not yet engaged — all clear signs of deal risk.',
      imageSlug: '/images/sales-leadership-communication-deal-risk.png',
    },
    {
      word: 'RAMP',
      partOfSpeech: 'noun',
      definition: 'The period of time it takes a new salesperson to reach full quota. During ramp, quota expectations are reduced to reflect the learning curve.',
      example: 'New reps typically take four months to ramp — expectations start at 10% of quota in month one and increase each month as skills and pipeline develop.',
      imageSlug: '/images/ramp.png',
    },
    {
      word: 'WIN RATE',
      partOfSpeech: 'phrase',
      definition: 'The percentage of deals a salesperson wins out of the total number they compete for. It is a key measure of sales effectiveness and deal quality.',
      example: 'A drop in win-rate from 38% to 24% prompted a review of the late-stage sales process to identify where and why deals were being lost to competitors.',
      imageSlug: '/images/win-rate.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WALK ME THROUGH WHERE THIS DEAL IS — NOT THE PITCH, TELL ME WHERE THE DEAL ACTUALLY IS',
      definition: 'A phrase a sales manager uses to get an honest, fact-based update on a deal. It signals they want the real position — last activity, agreed next step, stakeholder gaps — not an optimistic version.',
      example: 'Walk me through where this deal is — not the pitch, tell me where the deal actually is: last meaningful meeting, agreed next step, and who still has not been engaged.',
      imageSlug: '/images/walk-me-through-where-this-deal-is--not-the-pitch-tell-me-where-the-deal-actually-is.png',
    },
    {
      phrase: "WHAT'S YOUR PLAN TO CLOSE THIS BEFORE QUARTER END?",
      definition: 'A coaching question that challenges a rep to explain their specific closing plan. It moves the conversation from optimism to concrete, dated actions with named stakeholders.',
      example: "What's your plan to close this before quarter-end — who are you meeting, in what order, and what needs to happen at each step to reach a signature by the deadline?",
      imageSlug: '/images/whats-your-plan-to-close-this-before-quarter-end.png',
    },
    {
      phrase: 'WHAT WOULD YOU DO DIFFERENTLY IF YOU COULD GO BACK TO THE FIRST CALL?',
      definition: 'A coaching question that helps a rep reflect on what they would change. It builds learning from a stalling deal without the manager prescribing the answer.',
      example: 'What would you do differently if you could go back to the first call — would you have qualified the decision process earlier, or engaged more stakeholders from the start?',
      imageSlug: '/images/what-would-you-do-differently-if-you-could-go-back-to-the-first-call.png',
    },
    {
      phrase: "I'M GOING TO COMMIT [X] TO THE FORECAST — WHAT ARE YOU COMMITTING?",
      definition: 'A phrase a sales manager uses when asking each rep to name the revenue they are certain they will close. It creates shared accountability for the team forecast.',
      example: "I'm going to commit $7.3M to the forecast — what are you committing? Give me the number you will stand behind, not your best-case pipeline figure.",
      imageSlug: '/images/im-going-to-commit-x-to-the-forecast--what-are-you-committing.png',
    },
    {
      phrase: 'THE STRATEGY FOR Q3 IS [X] — EVERY REP SHOULD BE ABLE TO EXPLAIN THEIR PERSONAL VERSION IN 60 SECONDS',
      definition: 'A phrase a sales leader uses to cascade strategy and require every rep to personalise it. It confirms understanding by asking each person to connect the direction to their own territory and accounts.',
      example: 'The strategy for Q3 is enterprise expansion — every rep should be able to explain their personal version in 60 seconds: which accounts, what the opportunity is, and what they are doing differently this quarter to activate it.',
      imageSlug: '/images/the-strategy-for-q3-is-x--every-rep-should-be-able-to-explain-their-personal-version-in-60-seconds.png',
    },
    {
      phrase: "I WANT TO HEAR YOUR THINKING — TELL ME WHAT YOU SEE AND WHAT YOU'D DO",
      definition: "A coaching phrase a manager uses to hear the rep's own analysis first. It develops independent thinking by putting the rep in the lead before the manager gives any input.",
      example: "I want to hear your thinking — tell me what you see and what you'd do: walk me through the deal, identify what's working and what's not, and give me your recommendation before I give you mine.",
      imageSlug: '/images/i-want-to-hear-your-thinking--tell-me-what-you-see-and-what-youd-do.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Jordan, let's start with the Meridian deal. Walk me through where it actually is — not the pitch version. Last activity, last agreed next step, and who you've spoken to in the past two weeks.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "The deal is in negotiate stage. We had a strong call three weeks ago — Marcus was engaged, the numbers worked. I've been waiting for him to come back with feedback on the proposal.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Three weeks with no contact and no agreed next step is the first thing I want to focus on. What was the explicit next step at the end of that call?',
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "We said we'd... be in touch when they'd had a chance to review internally.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "'Be in touch' is not a next step — it's the absence of one. I'm not saying that to criticise the call; I'm saying it because that's where the [[deal risk:any factor making a specific deal less likely to close on time — including missing stakeholders, no agreed next step, or a silent prospect]] is sitting. A deal that's left to drift is rarely a deal that comes back on its own. What's your read on why Marcus has gone quiet?",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "Honestly — I'm not sure. It could be internal process. It could be that something has changed and he doesn't want to be the one to say it.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Those are two very different situations. One of them is manageable; the other may mean the deal is lost. I want to hear your thinking — tell me what you see and what you'd do if you were going to call Marcus today.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "I'd call to check in. See if there's anything I can help with on the internal side.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's a reasonable instinct — but 'check in' is still vague. What's the specific purpose of the call — and what would a successful outcome look like? A good reengagement call has a reason for calling beyond 'I haven't heard from you', a specific piece of [[decision support:materials or information that help the buyer make the internal case]] to offer, and a named next step to close on. What would your version of that look like for Meridian?",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "I could call saying I've prepared a CFO-ready one-pager — ask if that would be useful. And close on a specific date to reconnect.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's the call. Now — what would you do differently if you could go back to the first call? Not to beat yourself up — because if we can identify the pattern, the learning applies to every deal in your pipeline.",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "I'd have closed on a more specific next step at every meeting. And I'd have identified the internal champion earlier rather than relying only on Marcus.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Both of those are the right diagnosis — and I want to make sure they go into your [[coaching:the ongoing development of a rep's judgement through questioning and reflection rather than instruction]] log so we can revisit them. Now — let's talk [[forecast:a prediction of revenue expected to close in a given period, categorised by confidence level: commit, best case, upside]]. Your [[pipeline coverage:the ratio of total pipeline value to quota — healthy is typically 3x to 4x]] is 3.8x on paper, but if I strip the three deals that have been stuck for more than 60 days, effective coverage drops to 2.1x. What are you committing to the forecast this quarter?",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: 'My best case is £280,000 — but my commit is probably closer to £190,000.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'm going to commit £190,000 from your pipeline to the leadership forecast — which means your [[quota:the revenue target assigned to a rep for a defined period — the foundational metric of individual performance]] for the quarter is going to require you to either unstick two of those three deals or add qualified pipeline before week six. What's your plan to get there?",
    },
    {
      speaker: 'Jordan',
      speakerColor: 'purple',
      speakerAvatar: '/images/jordan-icon.png',
      text: "I have two deals in late qualification that I've been holding back from the forecast. If either converts to proposal stage this week, the coverage picture looks very different.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Then let's put those in the plan explicitly. The Q3 strategy is enterprise expansion — not net new volume. So every deal you're working should map to that frame. Call Marcus today with the CFO one-pager, log the call, and close on a specific date for the next interaction. And bring those two qualification deals to Thursday's review so I can see what's actually there.",
    }
  ],

  matchingExercise: [
    {
        "word": "quota",
        "definition": "the revenue target assigned to a salesperson for a defined period — the foundational metric of individual sales performance"
    },
    {
        "word": "attainment",
        "definition": "the percentage of quota achieved in a given period — tracked in-period to identify risk before the quarter closes"
    },
    {
        "word": "coaching",
        "definition": "developing a rep's judgement through questioning and reflection rather than instruction — building capability that transfers to future situations"
    },
    {
        "word": "pipeline coverage",
        "definition": "the ratio of total pipeline value to quota — healthy is typically 3x to 4x in B2B enterprise sales"
    },
    {
        "word": "forecast",
        "definition": "a prediction of revenue expected to close in a period, categorised by confidence: commit, best case, and upside"
    },
    {
        "word": "deal risk",
        "definition": "any factor making a specific deal less likely to close on time — including no agreed next step, missing stakeholders, or a silent prospect"
    },
    {
        "word": "ramp",
        "definition": "the period it takes a new rep to reach full quota productivity — typically three to six months in B2B sales"
    },
    {
        "word": "win rate",
        "definition": "the percentage of qualified opportunities that convert to closed business — a key metric for evaluating pipeline quality and competitive positioning"
    }
],
  fillBlankExercise: [
    {
        "before": "Walk me through where this deal actually is — not the ",
        "after": " version, but the objective status: last activity, last agreed next step, and who you've spoken to in the past two weeks.",
        "answer": "pitch"
    },
    {
        "before": "Your pipeline ",
        "after": " is 3.8x on paper — but when I strip the three deals that have been stuck for more than 60 days without a defined next step, effective coverage drops to 2.1x.",
        "answer": "coverage"
    },
    {
        "before": "I need your ",
        "after": " number — not your best case, not the optimistic version. The number you'd stake your credibility on and be comfortable having reviewed at the end of the quarter against actuals.",
        "answer": "commit"
    },
    {
        "before": "The Q3 strategy is enterprise ",
        "after": " — deepening relationships in our top 20 accounts, not chasing net new logos at the expense of account depth.",
        "answer": "expansion"
    },
    {
        "before": "Your ",
        "after": " on enterprise deals above £200,000 has dropped from 38% to 24% over the past two quarters — I want to understand what's driving that shift before it becomes a structural problem.",
        "answer": "win rate"
    },
    {
        "before": "A good ",
        "after": " conversation builds judgement that transfers to the next deal — not just a set of instructions for the current one.",
        "answer": "coaching"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley say is wrong with Jordan's 'next step' at the end of the Meridian call?",
        "options": [
            "It didn't include a specific price or commercial proposal for Marcus to consider",
            "'Be in touch' is not a next step — it's the absence of one",
            "It wasn't confirmed in writing before the call ended"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say a good reengagement call must include?",
        "options": [
            "A discount offer, a revised timeline, and a formal apology for the gap in communication",
            "A reason for calling beyond 'I haven't heard from you', a specific piece of decision support to offer, and a named next step to close on",
            "A reference call from a comparable client and a two-page executive summary"
        ],
        "correctIndex": 1
    },
    {
        "question": "When Riley strips stuck deals from Jordan's pipeline, what happens to the pipeline coverage figure?",
        "options": [
            "It drops from 3.8x to 2.1x — below the threshold for confidence at this stage of the quarter",
            "It drops from 4.2x to 3.1x — still healthy but worth monitoring",
            "It remains above 3x because the stuck deals are still technically open and qualified"
        ],
        "correctIndex": 0
    },
    {
        "question": "What does Riley say is the Q3 strategy — and what does she ask every rep to be able to do?",
        "options": [
            "Net new logo acquisition — every rep must open five new accounts before mid-quarter",
            "Enterprise expansion — every rep must explain their personal version of the strategy in 60 seconds",
            "Competitive displacement — every rep must have at least two active competitive takeaway deals in the pipeline"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Think about the best manager or coach you've ever worked with — in sales, sport, or any professional context. What made their feedback effective? What did they do differently from managers who gave advice that didn't help?",
        "In your experience, what is the difference between a manager who tells their team what to do and one who coaches them to figure it out themselves? Which approach produces better results in the long run — and why?",
        "Imagine you are running a review of your team's pipeline. One of your reps has a deal that's been stuck for a month. What questions would you ask them — and how would you balance honest challenge with supportive development?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "Jordan's win rate on enterprise deals _____ significantly over the past two quarters — from 38% to 24% — which suggests a pattern worth investigating before it becomes structural.",
            "options": [
                "has raised",
                "has risen",
                "has been raised"
            ],
            "correctIndex": 1,
            "explanation": "'Has risen' is correct — 'rise' is an intransitive verb (it does not take a direct object). 'The win rate has risen' means the win rate went up by itself. 'Raise' is a transitive verb that requires a direct object — someone or something raises something else: 'we raised the quota', 'the manager raised the target'. 'Has raised' would need an object: 'Jordan has raised the win rate' (someone actively raised it). 'Has been raised' is passive — it implies someone raised it externally. Since win rate changes on its own (no agent is raising it), the correct intransitive verb is 'rise': 'the rate has risen', 'revenue has risen', 'attainment has risen'. The pair to remember: raise (transitive) / rise (intransitive) — the same distinction as lay/lie."
        },
        {
            "sentence": "In the pipeline review, Riley avoided _____ the outcome — she asked questions designed to help Jordan reach the conclusion independently.",
            "options": [
                "to discuss about",
                "discussing",
                "to discuss"
            ],
            "correctIndex": 1,
            "explanation": "'Discussing' (gerund) is correct — 'avoid' is always followed by a gerund, never by a 'to' infinitive. 'Avoid discussing', 'avoid prescribing', 'avoid telling' — not 'avoid to discuss'. In addition, 'discuss' is transitive and does not take the preposition 'about' — 'discuss the outcome', not 'discuss about the outcome'. 'Discuss about' is a very common error in formal writing, but 'discuss' already carries the meaning of 'talk about', so adding 'about' is redundant. The correct forms: 'avoid discussing the outcome' (gerund, no 'about') — neither 'avoid to discuss' (infinitive is wrong after 'avoid') nor 'avoid discussing about' (preposition is wrong after 'discuss')."
        },
        {
            "sentence": "Riley told Jordan to _____ a specific close plan rather than a general intention to 'stay in touch'.",
            "options": [
                "focus on to develop",
                "focus on developing",
                "focus to develop"
            ],
            "correctIndex": 1,
            "explanation": "'Focus on developing' is correct — 'focus on' is a phrasal verb that takes a gerund as its complement, not an infinitive. 'Focus on + gerund': 'focus on developing the plan', 'focus on closing the deal', 'focus on building the relationship'. 'Focus on to develop' is a hybrid error: 'on' requires a gerund, not 'to' + infinitive. 'Focus to develop' (without 'on') is non-standard — 'focus' as a verb typically requires 'on' when it takes a complement: 'focus on X'. Compare with other phrasal verbs that take gerunds: 'insist on signing', 'succeed in closing', 'concentrate on developing'. The pattern: preposition + gerund, never preposition + 'to' + infinitive."
        },
        {
            "sentence": "Riley's _____ to the team was consistent: ask more questions, prescribe fewer answers, and build capability rather than dependency.",
            "options": [
                "advise",
                "advice",
                "advising"
            ],
            "correctIndex": 1,
            "explanation": "'Advice' is the noun — 'Riley's advice to the team'. 'Advise' is the verb — 'Riley advised the team'. These two forms are frequently confused, particularly in written English, where the spelling difference ('c' vs 's') is the only distinction. The noun: 'advice' (uncountable — 'a piece of advice', not 'an advice'). The verb: 'advise' — 'she advised them to focus on questions'. 'Advising' is the present participle of the verb, which cannot be used as the subject complement here ('Riley's advising' would need a different sentence structure). The rule: advice (noun, uncountable, ends in -ce) / advise (verb, ends in -se) — the same pattern as practice/practise, licence/license in British English."
        },
        {
            "sentence": "The effective coverage — _____ deals stuck for more than 60 days are removed — drops to 2.1x, which is below the threshold for forecasting confidence at this stage of the quarter.",
            "options": [
                "after",
                "once",
                "when"
            ],
            "correctIndex": 1,
            "explanation": "'Once' is the most precise choice here — 'once those deals are removed' means 'after the action of removing them has been completed'. It implies a single, complete action with a clear before-and-after state. 'After' is also grammatically correct and nearly synonymous, but in formal analytical writing 'once' is the preferred choice when describing a condition that, when fulfilled, produces a specific result: 'once the adjustment is made', 'once risk is factored in', 'once the exclusions are applied'. 'When' is more general and can imply a recurring or habitual action, which is less precise for a one-time analytical adjustment. In conditional analytical statements — 'once X is done, Y follows' — 'once' is the most concise and formal choice."
        },
        {
            "sentence": "A rep who cannot explain their personal version of the Q3 strategy in 60 seconds _____ understood it well enough to execute it.",
            "options": [
                "hasn't",
                "hasn't probably",
                "probably hasn't"
            ],
            "correctIndex": 2,
            "explanation": "'Probably hasn't' is correct — the adverb 'probably' should be placed between the auxiliary verb 'has' and the main verb 'understood', or immediately before the auxiliary in a negative construction: 'probably hasn't understood'. In formal English, adverbs of probability ('probably', 'certainly', 'possibly', 'clearly') are placed immediately before the main verb in positive sentences ('has probably understood') or between the first auxiliary and the main verb in negatives ('probably hasn't understood' / 'hasn't probably understood'). 'Hasn't probably understood' is awkward and non-standard because 'probably' is displaced too far from the verbal group. 'Hasn't' alone (without 'probably') would be correct but assertive — here 'probably' is needed because it is an inference, not a certainty."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the sales rep says in the pipeline review. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "The deal is going well — I think it'll close this quarter. Marcus is engaged and the numbers work.",
                "options": [
                    "Great — I'll put it in the forecast at full value for Q3. Let me know if anything changes.",
                    "I want to test that. When was the last time you spoke to Marcus, what was agreed as the next step at the end of that conversation, and who else in his organisation have you spoken to in the past two weeks? I'm not questioning your read — I want to make sure the evidence supports the optimism.",
                    "I've seen a lot of deals like this stall at the last minute. Have you identified all the internal stakeholders who need to approve? That's usually where things go wrong."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right response — it tests the optimism with specific, observable facts rather than accepting the narrative at face value. A good pipeline review manager distinguishes between a rep's confidence (which can be influenced by effort, relationship, and wishful thinking) and the deal's actual observable status (last contact, last next step, stakeholder breadth). Option A accepts the rep's assessment without scrutiny — which is exactly the behaviour that produces inaccurate forecasts. Option C is critical and challenging, but it leads with a concern ('I've seen a lot of deals like this stall') rather than with data-driven questions — which can feel like skepticism rather than coaching."
            },
            {
                "customerLine": "I'm not sure what to do with this deal. It feels like it's drifting and I don't know why.",
                "options": [
                    "You need to call the buyer today and be direct about the status. Ask them whether they're still planning to move forward or not.",
                    "Before I tell you what I'd do — tell me what you see when you look at it honestly. What's working, what's not, and what's the one thing you've been avoiding doing that you probably know you should do?",
                    "Deals drift when there's no urgency. Have you tried applying a deadline — a price that's only valid until the end of the month, for instance?"
                ],
                "correctIndex": 1,
                "explanation": "Option B is the coaching response — it creates space for the rep to lead the analysis before the manager shares any perspective. 'What's the one thing you've been avoiding doing?' is a particularly effective coaching question because reps usually know the answer; they need permission to say it out loud. Option A gives a direct instruction ('call the buyer today') — which may be the right action but does not develop the rep's ability to diagnose and respond to drift in future deals. Option C prescribes a tactic (an artificial price deadline) before understanding the cause of the drift — which may be entirely the wrong approach if the deal is stuck for a different reason."
            },
            {
                "customerLine": "My best case for the quarter is £300,000 — but I'm not sure I'd commit to all of it.",
                "options": [
                    "Let's go with £280,000 as a compromise — that gives you some room and still keeps us on track for the team target.",
                    "What I need from you is two numbers, not one. Tell me your commit — the number you'd stake your credibility on regardless of how the next eight weeks play out. And separately, tell me what would need to happen for you to land the full £300,000. Those are different conversations, and I need them both to forecast accurately.",
                    "Best case and commit are often closer than reps think — let's say £270,000 and manage from there."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most effective response — it drives the disciplined distinction between commit and best case that is the foundation of accurate forecasting. By asking for two separate numbers and the conditions that would deliver the higher figure, the manager gets both an honest forecast and a useful action plan. Option A negotiates a 'compromise' figure — which is neither the rep's honest commit nor their best case, and therefore produces an inaccurate forecast. Option C sets a number without understanding the rep's reasoning — which gives the appearance of precision without the underlying intelligence that makes a forecast reliable."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the pipeline review conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "Walk me through where the Meridian deal is — not the pitch version, tell me where it actually stands based on observable facts."
            },
            {
                "speaker": "Jordan",
                "text": "We had a strong call three weeks ago. The deal has raised to negotiate stage and I'm waiting for Marcus to come back."
            },
            {
                "speaker": "Riley",
                "text": "Three weeks with no contact is a deal risk signal. I'd like to discuss about your reengagement plan — what's the specific purpose of the call you'd make today?"
            },
            {
                "speaker": "Jordan",
                "text": "I'd call offering a CFO one-pager as decision support — and close on a specific next step rather than leaving it open."
            },
            {
                "speaker": "Riley",
                "text": "That's the right structure. Now — what would you do differently if you could go back? I want you to focus on to identify the pattern, because that's what makes this conversation valuable for the next deal."
            },
            {
                "speaker": "Riley",
                "text": "Good. Let's close on a commit number and a concrete action plan for the week — that's what goes into the forecast review on Thursday."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "has raised",
                "correction": "has risen",
                "explanation": "'Rise' is intransitive — it does not take a direct object. 'The deal has risen to negotiate stage' means the deal moved up through the stages on its own. 'Raise' is transitive — someone or something raises something else: 'we raised the deal to negotiate stage', 'the manager raised the probability to 80%'. 'Has raised' without a direct object is non-standard — 'raise' requires something to be raised. The pair: raise (transitive) = to move something upward; rise (intransitive) = to move upward by itself. The same distinction applies to: lay/lie, set/sit, fell/fall. 'The temperature has risen', 'the forecast has risen', 'the deal has risen' — all intransitive, using 'rise', not 'raise'."
            },
            {
                "lineIndex": 2,
                "incorrectText": "discuss about",
                "correction": "discuss",
                "explanation": "'Discuss' is a transitive verb that already means 'talk about' — adding 'about' is redundant and non-standard. 'I'd like to discuss your reengagement plan' is the correct form. 'Discuss about your plan' treats 'discuss' as if it were an intransitive verb like 'talk' ('talk about X'), but 'discuss' takes a direct object directly without a preposition: 'discuss the plan', 'discuss the deal', 'discuss the risk'. This error is extremely common in formal writing — particularly among speakers whose first language uses a preposition in this construction. Other transitive verbs that do not take 'about': 'address', 'consider', 'examine', 'review', 'analyse'."
            },
            {
                "lineIndex": 4,
                "incorrectText": "focus on to identify",
                "correction": "focus on identifying",
                "explanation": "'Focus on' is a phrasal verb that takes a gerund — the '-ing' form — as its complement. 'Focus on identifying the pattern', 'focus on developing the skill', 'focus on closing the deal'. The preposition 'on' must be followed by a gerund, not by 'to' + infinitive. 'Focus on to identify' mixes the gerund requirement of 'on' with the infinitive marker 'to', producing a non-standard hybrid. This error reflects a confusion between two valid constructions: 'focus on + gerund' (phrasal verb) and 'try/aim/seek + to + infinitive' (infinitive construction). The rule: any preposition — on, in, of, about, for — is followed by a gerund when it takes a verb complement, never by 'to' + infinitive."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The sales leader starts a sentence. Work with your partner to finish it naturally using sophisticated sales leadership language.",
        "items": [
            {
                "customerLine": "Jordan: I think the deal is in good shape — I'm just waiting for Marcus to come back.",
                "salespersonStart": "Waiting is a strategy — but it's a passive one. Tell me what 'good shape' looks like in observable terms.",
                "suggestedCompletion": "When was your last meaningful contact with Marcus — not an email he didn't respond to, but a real conversation? What was the explicit next step you agreed at the end of your last call? And how many people inside Meridian have you spoken to in the past three weeks, other than Marcus? Because 'good shape' based on one stakeholder who isn't responding is a different thing from 'good shape' based on a mutual action plan, a named champion, and a CFO conversation already scheduled. Which one do you have?"
            },
            {
                "customerLine": "Jordan: I know I should call Marcus — I've just been putting it off.",
                "salespersonStart": "That's the most honest thing you've said in this review — and it's exactly the kind of thing I want you to say out loud, because it tells us both something useful.",
                "suggestedCompletion": "What's behind the avoidance? Because when experienced reps put off a call they know they should make, it's usually one of three things: they're not sure what to say, they're worried the answer will be bad news, or they're carrying a vague sense that the deal isn't as strong as the pipeline says it is. Which one is closest to the truth — and if it's the last one, I'd rather know that now and adjust the forecast honestly than hold it in commit and find out in week eight."
            },
            {
                "customerLine": "Jordan: My commit number is £190,000 — but I feel like I should be able to get to £250,000.",
                "salespersonStart": "I'll take the £190,000 as your commit — that goes into the leadership forecast and I'll stake my credibility on it. The gap to £250,000 is what I want to turn into a plan.",
                "suggestedCompletion": "Walk me through the £60,000 between those two numbers. Which specific deals sit in that gap — and for each one, what is the specific action, the specific person, and the specific date that makes them closable in Q3? If you can name those three things for each deal, you have a plan. If you can't, you have an aspiration — which is useful to have, but not something I can commit to upward. Let's build the plan right now."
            }
        ]
    }
},
};
