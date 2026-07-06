import { Lesson } from '@/types/lesson';

export const makingPersuasiveRecommendations: Lesson = {
  slug: 'making-persuasive-recommendations',
  title: 'Making Persuasive Recommendations',
  subtitle: 'How to use modal verbs to recommend with confidence, without sounding pushy',
  level: 'B1-B2',
  description: "Learn how to make clear, confident recommendations in a sales context using modal verbs — understanding when 'should' signals strong conviction, when 'could' opens options, and when 'would' makes your recommendation feel personal and considered.",
  heroImage: '/images/making-persuasive-recommendations-hero.png',

  vocabulary: [
    {
      word: 'RECOMMENDATION',
      partOfSpeech: 'noun',
      definition: "A suggestion that something is the best course of action, based on what you know about the person's situation — not a generic opinion.",
      example: 'A strong recommendation is specific to the person you are talking to — it should reference what they told you, not just what you usually say.',
      imageSlug: '/images/making-persuasive-recommendations-recommendation.png',
    },
    {
      word: 'COMPELLING',
      partOfSpeech: 'adjective',
      definition: 'Strongly persuasive and difficult to argue against — a compelling recommendation gives someone a clear reason to act.',
      example: 'The most compelling recommendations connect directly to a pain point the prospect named themselves — they cannot easily dismiss something they already said was a problem.',
      imageSlug: '/images/making-persuasive-recommendations-compelling.png',
    },
    {
      word: 'HESITATION',
      partOfSpeech: 'noun',
      definition: "Uncertainty or reluctance to commit — a prospect's hesitation is useful information, not an obstacle. It tells you what is still unresolved.",
      example: 'If there is hesitation after a recommendation, do not push harder — ask what is behind it. There is usually a specific concern you have not addressed yet.',
      imageSlug: '/images/hesitation.png',
    },
    {
      word: 'TAILORED',
      partOfSpeech: 'adjective',
      definition: "Designed or adapted specifically for a particular person's situation — the opposite of a generic or one-size-fits-all proposal.",
      example: "A tailored recommendation always begins with what you heard — 'based on what you told me' signals that this is not your standard pitch.",
      imageSlug: '/images/making-persuasive-recommendations-tailored.png',
    },
    {
      word: 'TENTATIVE',
      partOfSpeech: 'adjective',
      definition: 'Not fully confident or committed — offering something as a possibility rather than a clear view. Useful when you want to leave room for the prospect to push back.',
      example: "When a prospect is risk-averse, a tentative recommendation using 'could' or 'might' feels safer than a confident 'should' — it gives them control.",
      imageSlug: '/images/making-persuasive-recommendations-tentative.png',
    },
    {
      word: 'ASSERT',
      partOfSpeech: 'verb',
      definition: 'To state something with confidence and directness — to make your recommendation clearly without excessive hedging or qualification.',
      example: 'The best salespeople know when to assert — when you have done the discovery and know the solution fits, a clear recommendation is more respectful than a vague one.',
      imageSlug: '/images/assert.png',
    },
    {
      word: 'PROPOSITION',
      partOfSpeech: 'noun',
      definition: 'A proposed course of action or offer put forward for consideration — what you are recommending and why it makes sense.',
      example: 'Before you make a proposition, earn the right to make it — a recommendation lands better when the prospect already trusts that you understand their situation.',
      imageSlug: '/images/making-persuasive-recommendations-proposition.png',
    },
    {
      word: 'CONVINCE',
      partOfSpeech: 'verb',
      definition: 'To persuade someone that something is true or the right course of action — but in sales, the goal is not to convince through pressure, it is through clarity.',
      example: 'You do not need to convince someone who already recognises the problem — you just need to make the path to solving it feel clear and low-risk.',
      imageSlug: '/images/convince.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'BASED ON WHAT YOU HAVE TOLD ME',
      definition: "Ground your recommendation in the prospect's own words — signals that you listened and that what follows is tailored, not generic.",
      example: 'Based on what you have told me about your team size and the visibility gap, I would suggest starting with the pipeline dashboard before anything else.',
      imageSlug: '/images/based-on-what-you-have-told-me.png',
    },
    {
      phrase: 'I WOULD SUGGEST',
      definition: "A confident but non-pushy way to introduce a recommendation — 'would' makes it feel considered rather than prescriptive.",
      example: 'I would suggest a phased approach — start with the core pipeline tool in month one, and add the reporting layer once the team has adopted the basics.',
      imageSlug: '/images/i-would-suggest.png',
    },
    {
      phrase: 'YOU COULD START WITH',
      definition: "A softer, lower-commitment entry point — 'could' gives the prospect options and signals that you are not trying to force a particular path.",
      example: 'You could start with just the manager dashboard — it gives you the visibility you need without requiring any change from the reps at this stage.',
      imageSlug: '/images/you-could-start-with.png',
    },
    {
      phrase: 'WHAT I WOULD RECOMMEND IS',
      definition: 'A direct and confident framing — signals that you have a clear, considered view and are willing to state it.',
      example: 'What I would recommend is the full pipeline plan — based on what you described, the core tool alone would not solve the follow-up piece, and you would end up coming back for the rest.',
      imageSlug: '/images/what-i-would-recommend-is.png',
    },
    {
      phrase: 'THAT WOULD GIVE YOU',
      definition: 'Show the direct consequence or benefit of following the recommendation — connects your suggestion to a specific outcome the prospect wants.',
      example: 'Starting with the dashboard would give you the visibility you mentioned straight away — you would not need to wait for a full rollout to see the impact.',
      imageSlug: '/images/that-would-give-you.png',
    },
    {
      phrase: 'IF I WERE IN YOUR POSITION',
      definition: "Build empathy and credibility by thinking from the prospect's perspective — signals that your recommendation is personal and honest, not just a sales script.",
      example: 'If I were in your position — a growing team, a broken manual process, and deals slipping through — I would want to fix the visibility problem first before adding anything else.',
      imageSlug: '/images/if-i-were-in-your-position.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Marcus, based on what you have told me, I want to give you a clear [[recommendation:a suggestion of the best course of action based on what you know about the situation]] rather than just leaving you with a few options to think about. Is that all right?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Please — I appreciate directness.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good. What I would recommend is starting with the Pipeline Visibility plan. You have told me the core problem is that you cannot see what is happening until it is too late — and that is exactly what this solves first.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about the automated follow-up piece — you showed us that in the demo.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I would [[assert:to state something with confidence and directness]] that you should get the visibility layer working first. Once your team can see deal status in real time, the follow-up behaviour often improves on its own — because the problem becomes visible. You could add the automation layer in month two, once you have seen where the gaps actually are.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That makes sense. I was going to ask about the full platform — is that something you would [[tentative:not fully committed; offering something as a possibility]]ly recommend for us at this stage?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Not yet — and I want to be direct about that. The full platform is [[compelling:strongly persuasive and difficult to argue against]] for teams that have already solved the basics. If I were in your position — twelve reps, a [[tailored:designed specifically for a particular person's situation]] fix needed fast — I would not want to be learning three new tools at once. Start focused.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is actually reassuring to hear. I was expecting you to push the biggest package.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That would give you a bad experience and you would blame the tool instead of thanking it. The right [[proposition:a proposed course of action put forward for consideration]] is the one that works for where you are now. That would give you a win in the first thirty days — and that is what [[convince:to persuade someone that something is the right course of action]]s the rest of the business that this is worth investing in.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'blue',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Any [[hesitation:uncertainty or reluctance to commit]] I had about moving fast has gone. What are the next steps?',
    }
  ],

  matchingExercise: [
    {
        "word": "RECOMMENDATION",
        "definition": "A suggestion of the best course of action based on what you know about the situation"
    },
    {
        "word": "COMPELLING",
        "definition": "Strongly persuasive and difficult to argue against"
    },
    {
        "word": "HESITATION",
        "definition": "Uncertainty or reluctance to commit — useful information about what is still unresolved"
    },
    {
        "word": "TAILORED",
        "definition": "Designed specifically for a particular person's situation — not generic"
    },
    {
        "word": "TENTATIVE",
        "definition": "Not fully committed — offering something as a possibility rather than a clear view"
    },
    {
        "word": "ASSERT",
        "definition": "To state something with confidence and directness, without excessive hedging"
    },
    {
        "word": "PROPOSITION",
        "definition": "A proposed course of action put forward for consideration"
    },
    {
        "word": "CONVINCE",
        "definition": "To persuade someone that something is the right course of action — through clarity, not pressure"
    }
],
  fillBlankExercise: [
    {
        "before": "A strong",
        "after": "is specific to the person — it should reference what they told you, not just what you usually say.",
        "answer": "recommendation"
    },
    {
        "before": "The most",
        "after": "recommendations connect directly to a pain point the prospect named themselves.",
        "answer": "compelling"
    },
    {
        "before": "If there is",
        "after": "after a recommendation, ask what is behind it — there is usually a specific concern you have not addressed.",
        "answer": "hesitation"
    },
    {
        "before": "A",
        "after": "recommendation always begins with what you heard — 'based on what you told me' signals this is not your standard pitch.",
        "answer": "tailored"
    },
    {
        "before": "When a prospect is risk-averse, a",
        "after": "recommendation using 'could' feels safer than a confident 'should' — it gives them control.",
        "answer": "tentative"
    },
    {
        "before": "The best salespeople know when to",
        "after": "— when you know the solution fits, a clear recommendation is more respectful than a vague one.",
        "answer": "assert"
    },
    {
        "before": "Before you make a",
        "after": ", earn the right — a recommendation lands better when the prospect trusts you already understand their situation.",
        "answer": "proposition"
    },
    {
        "before": "You do not need to",
        "after": "someone who already recognises the problem — just make the path to solving it feel clear and low-risk.",
        "answer": "convince"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is the difference between 'should', 'could', and 'would' in a sales recommendation?",
        "options": [
            "They mean the same thing — they are all polite ways to make a suggestion",
            "'Should' signals strong conviction; 'could' offers options with less pressure; 'would' makes a recommendation feel considered and personal",
            "'Would' is the strongest; 'could' is medium; 'should' is the weakest",
            "'Should' is for formal situations; 'could' is for informal ones; 'would' is neutral"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Riley recommend starting with the Pipeline Visibility plan only?",
        "options": [
            "It is the cheapest option available",
            "The full platform is not ready yet",
            "Based on the discovery, it solves the most urgent problem first without overwhelming the team",
            "Marcus asked her to recommend the smallest option"
        ],
        "correctIndex": 2
    },
    {
        "question": "Why does Riley say Marcus should get visibility working before adding automation?",
        "options": [
            "The automation feature is not included in the first plan",
            "Once deal status is visible, follow-up behaviour often improves on its own — and then the gaps are clearer",
            "Automation is too complex for a team of twelve reps",
            "She wants to keep the first deal smaller to make it easier to close"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley mean when she says 'that would give you a win in the first thirty days'?",
        "options": [
            "Marcus would see a return on his investment within a month",
            "The team would adopt the tool faster if it was simple",
            "A quick, visible success would build internal support for further investment",
            "The contract includes a 30-day free trial"
        ],
        "correctIndex": 2
    },
    {
        "question": "According to the Register Traps, what is the risk of using too many 'coulds'?",
        "options": [
            "It sounds too formal in a casual conversation",
            "It makes you sound tentative and unconfident — as if you do not fully believe in your recommendation",
            "It gives the prospect too many options and they cannot decide",
            "It is grammatically incorrect in a business context"
        ],
        "correctIndex": 1
    },
    {
        "question": "What makes 'if I were in your position' effective in a recommendation?",
        "options": [
            "It uses conditional grammar, which sounds more professional",
            "It signals that you are thinking from the prospect's perspective, not your own — making the recommendation feel personal",
            "It avoids using the word 'should', which can sound pushy",
            "It allows you to make a recommendation without committing to it"
        ],
        "correctIndex": 1
    },
    {
        "question": "Marcus says 'I was expecting you to push the biggest package.' What does Riley's response achieve?",
        "options": [
            "It builds trust by showing she is prioritising his outcome over the size of the deal",
            "It explains why the full platform is too expensive for his budget",
            "It creates urgency by suggesting he needs to act quickly",
            "It opens a negotiation about the price of the full platform"
        ],
        "correctIndex": 0
    },
    {
        "question": "What does it mean to make a recommendation that is 'tailored'?",
        "options": [
            "It uses formal, professional language appropriate to the industry",
            "It is adapted specifically to the person's situation and references what they told you — not a generic pitch",
            "It includes a customised pricing structure",
            "It is delivered in person rather than by email"
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Each situation calls for a recommendation. Choose the response that uses modal verbs most effectively — confident without being pushy, specific without being rigid. Discuss your reasoning before clicking.",
        "items": [
            {
                "customerLine": "A prospect has described a clear problem and you know exactly the right solution. How do you open your recommendation?",
                "options": [
                    "Say: 'There are a few options you might want to think about — you could look at X, or maybe Y, or possibly Z depending on your budget.'",
                    "Say: 'Based on what you have told me, what I would recommend is X. It addresses the specific thing you described and it is the fastest path to the outcome you want.'",
                    "Say: 'You need to go with X — it is the only thing that will actually solve this properly.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It is direct and specific, grounds the recommendation in what the prospect said, and explains the reasoning without being prescriptive. A is too tentative — when you know the answer, giving three options signals lack of conviction. C uses 'need' which is too forceful and removes the prospect's sense of choice."
            },
            {
                "customerLine": "A prospect seems interested but cautious — they have been burned by a previous tool rollout and are nervous about committing.",
                "options": [
                    "Say: 'I would strongly recommend moving forward with the full platform — based on your problems, you need the complete solution.'",
                    "Say: 'You could start with just the core module — that would give you the visibility you need without asking the team to change everything at once. Once that is working, you could expand from there.'",
                    "Say: 'If I were in your position I would definitely go for it — the risk is very low and the upside is significant.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. 'Could' is the right modal here — it offers a low-pressure entry point and acknowledges their risk-aversion. 'That would give you' ties the recommendation to a specific, low-risk outcome. A pushes a big commitment to someone who is nervous — wrong read of the situation. C uses 'definitely' which dismisses their genuine concern rather than addressing it."
            },
            {
                "customerLine": "A prospect asks: 'Should we start now or wait until Q1?'",
                "options": [
                    "Say: 'Honestly — I would start now. You told me deals are slipping every month. Every month you wait is another two or three deals that could have been recovered. That is real money.'",
                    "Say: 'Either option could work — it really depends on your priorities and your bandwidth for change right now.'",
                    "Say: 'Q1 is probably better — you will have more time to plan and the team will be fresh after the break.'"
                ],
                "correctIndex": 0,
                "explanation": "A is correct. When a prospect asks for a recommendation, give one — and ground it in the cost of waiting. 'I would' is confident without being pushy. Referencing the tangible impact (deals lost per month) makes the urgency real, not manufactured. B avoids making a recommendation entirely — the prospect asked for your view, and giving none signals lack of conviction. C recommends delay, which is rarely the right advice when urgency has already been established."
            },
            {
                "customerLine": "A prospect says: 'We like what we have seen but we want to think about it over the next few weeks.'",
                "options": [
                    "Say: 'I completely understand — take the time you need. Just let me know when you are ready.'",
                    "Say: 'What would be most helpful — should I send you a written summary of what I would recommend so you have something concrete to review and share internally?'",
                    "Say: 'I would encourage you to move quickly — we have limited availability and I would hate for you to miss out.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It respects the thinking time while keeping the momentum going — a written recommendation gives them something to share internally and keeps your voice in the room when you are not there. 'Should I' is a soft, helpful offer, not pressure. A accepts the delay entirely and hands over all momentum. C creates false urgency — 'limited availability' is a classic pressure tactic that damages trust."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three prospect situations. As a group, decide which modal verb — should, could, or would — fits best as the primary recommendation language for each prospect. Match, then click 'Check Matches'.",
        "profiles": [
            {
                "name": "James",
                "description": "James is a decisive CFO who has asked you directly: 'What do you think we should do?' He has done his research, he understands the product, and he has made it clear he values directness. He has been frustrated by salespeople who give him multiple options instead of a clear view.",
                "matchKey": "should"
            },
            {
                "name": "Natalie",
                "description": "Natalie is a cautious Operations Manager. She has been through two failed technology rollouts in the past year and is clearly nervous about committing to another tool. She has said: 'I am interested, but I want to make sure we are not overcomplicating things again.'",
                "matchKey": "could"
            },
            {
                "name": "David",
                "description": "David is a thoughtful Sales Director who likes to feel in control of decisions. He has done his own analysis and has strong opinions. He responds well to recommendations that feel considered and personal — he wants to feel like you are thinking alongside him, not pushing him toward a sale.",
                "matchKey": "would"
            }
        ],
        "options": [
            {
                "key": "should",
                "label": "Should — strong and direct",
                "description": "'You should go with X.' Use 'should' when the prospect has asked for a clear view, when trust is established, and when hesitation would actually frustrate rather than reassure them. It signals confidence and conviction."
            },
            {
                "key": "could",
                "label": "Could — options and lower pressure",
                "description": "'You could start with X.' Use 'could' when the prospect is risk-averse or has been burned before. It gives them a sense of control and frames the recommendation as one option rather than the only path — which reduces the feeling of being pushed."
            },
            {
                "key": "would",
                "label": "Would — considered and personal",
                "description": "'I would suggest X' or 'if I were in your position, I would...' Use 'would' when the prospect wants to feel understood and to make the decision themselves. It makes the recommendation feel like a thought-through view from someone thinking on their behalf — not a sales pitch."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson has started a recommendation — but the line has been cut off. Finish it using modal verbs and phrases from this lesson. Compare your versions, then click to see a suggested answer.",
        "items": [
            {
                "customerLine": "Prospect: 'What would you recommend for a team at our stage?'",
                "salespersonStart": "Based on what you have told me,",
                "suggestedCompletion": "what I would recommend is starting with the pipeline visibility tool — not the full platform. You have a very specific problem right now, and I think solving that one thing properly will do more for you in the next ninety days than a broader rollout that takes six months to bed in."
            },
            {
                "customerLine": "Prospect: 'I like the idea but I am worried about asking the team to change how they work.'",
                "salespersonStart": "I completely understand that. You could",
                "suggestedCompletion": "start with just the manager dashboard — your reps would not need to change anything in the first phase. That would give you the visibility you need straight away, and you could introduce the rep-facing features later, once the team has seen the value and bought into it."
            },
            {
                "customerLine": "Prospect: 'We have been debating whether to build something ourselves or buy a solution.'",
                "salespersonStart": "If I were in your position,",
                "suggestedCompletion": "I would not build — not at this stage. You have told me the problem is urgent and your team does not have bandwidth to take on a build project right now. You could have this working in two weeks. A build would take six months and half your team's focus. The maths on that is pretty clear."
            },
            {
                "customerLine": "Prospect seems to be leaning toward a cheaper, limited option that will not fully solve their problem.",
                "salespersonStart": "I want to be honest with you —",
                "suggestedCompletion": "I think you should go with the full pipeline plan. I know it is a bigger commitment, but based on what you have told me, the starter option would solve about half the problem. You would be back here in three months for the rest — and that would cost you more in the long run, not less."
            }
        ]
    }
},
};
