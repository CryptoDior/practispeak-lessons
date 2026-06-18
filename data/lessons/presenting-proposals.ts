import { Lesson } from '@/types/lesson';

export const presentingProposals: Lesson = {
  slug: 'presenting-proposals',
  title: 'Presenting Proposals',
  subtitle: 'The language of formal proposal presentation — how to walk a client through scope, deliverables, timeline, and pricing with precision and confidence',
  level: 'C1-C2',
  description: 'A well-written proposal can still be misread, misunderstood, or ignored. The verbal presentation of a proposal — the meeting where you walk the client through the document — is one of the most consequential conversations in the sales cycle. It is your opportunity to frame each section before the client reads it, to pre-empt misunderstandings before they become objections, to connect the commercial terms to the value case already established, and to read the room in real time and adjust your emphasis as you go. This lesson teaches the language of formal proposal presentation: how to introduce and frame each section, how to be explicit about scope boundaries and exclusions, how to present pricing with confidence rather than apology, how to surface and address assumptions transparently, and how to move from the proposal to agreed next steps.',
  heroImage: '/images/presenting-proposals-hero.png',

  vocabulary: [
    {
      word: 'SCOPE',
      partOfSpeech: 'noun',
      definition: 'The defined boundaries of what a project, engagement, or contract includes — and, critically, what it does not include. A clearly defined scope protects both parties: the vendor from scope creep, and the buyer from discovering that expected deliverables were outside the original agreement. In a formal proposal, the scope section should be as precise about exclusions as it is about inclusions.',
      example: "Riley said: Before I describe what's included, I want to be equally clear about what's outside the scope of this proposal — because that clarity protects both of us. The scope includes platform configuration, native CRM integration, and a three-month onboarding programme for up to 50 users. It does not include custom development beyond the pre-built integration library, multilingual content support, or the configuration of any third-party data sources not listed in the annex.",
      imageSlug: '/images/scope.png',
    },
    {
      word: 'DELIVERABLE',
      partOfSpeech: 'noun',
      definition: 'A specific, tangible output that the vendor commits to producing or providing by a defined point in the engagement. Deliverables are more precise than activities — they describe what will exist at the end of a phase, not just what will happen during it. A proposal should list deliverables in concrete terms: a configured platform, a compliance report, a trained team, a signed SLA review.',
      example: 'Riley presented the deliverables by milestone: At the end of phase one — week six — the key deliverable is a fully configured and tested platform environment, integrated with your CRM and confirmed against your technical requirements. At the end of phase two — week twelve — the deliverable is a trained core team of 20 power users, with documented learning outcomes and a performance baseline established. Both deliverables are measurable and can be formally signed off.',
      imageSlug: '/images/deliverable.png',
    },
    {
      word: 'MILESTONE',
      partOfSpeech: 'noun',
      definition: 'A significant event or point in a project timeline that marks the completion of a key phase — typically tied to a specific deliverable, a decision point, or a payment trigger. In a formal proposal, milestones create shared accountability: both parties can see what must be true at each point in the engagement, and the timeline is anchored to outcomes rather than just dates.',
      example: "Riley mapped the milestones: The project has four milestones. Milestone one is 'integration complete' at week three — your CRM is connected and data is flowing. Milestone two is 'platform configured' at week six — all settings are live and tested against your requirements. Milestone three is 'core team trained' at week twelve — 20 users have completed the onboarding programme. Milestone four is 'go live' at week sixteen — the full user base is active. Each milestone triggers a formal sign-off and the corresponding payment instalment.",
      imageSlug: '/images/milestone.png',
    },
    {
      word: 'DEPENDENCIES',
      partOfSpeech: 'noun',
      definition: 'Factors or inputs that must be in place — typically provided by the buyer or a third party — before a specific deliverable or milestone can be achieved. Identifying dependencies in a proposal protects the vendor from being held responsible for delays caused by factors outside their control, and sets clear expectations with the buyer about what their responsibilities are.',
      example: 'Riley listed the dependencies explicitly: The timeline in this proposal assumes three things from your side: first, that your CRM administrator provides API access credentials within five business days of contract signature; second, that you nominate a programme lead from your IT team by week two; and third, that the agreed user cohort for the initial training is confirmed no later than week eight. If any of these are delayed, the milestone dates will adjust accordingly.',
      imageSlug: '/images/dependencies.png',
    },
    {
      word: 'ASSUMPTIONS',
      partOfSpeech: 'noun',
      definition: 'The conditions or circumstances that a proposal is based on — the things the vendor has assumed to be true in order to define scope, timeline, and price. If the assumptions change after the proposal is accepted, the scope, timeline, or cost may need to be revised. Stating assumptions explicitly in a proposal is a professional practice that protects both parties from later disputes.',
      example: "Riley said: I want to be transparent about the assumptions this proposal is built on. The first assumption is that your current CRM is a standard Salesforce configuration — if there are significant customisations, the integration scope and timeline may need to be revised. The second assumption is that the initial user group is no larger than 50 people — if you intend to expand beyond that in year one, we'd need to revisit the onboarding scope. If either of these assumptions is wrong, I'd rather know now than discover it in week four.",
      imageSlug: '/images/assumptions.png',
    },
    {
      word: 'EXCLUSIONS',
      partOfSpeech: 'noun',
      definition: 'Items or services explicitly not included in the scope of a proposal — stated clearly to prevent misunderstanding about what the agreed price covers. Exclusions are often as important as inclusions: a client who assumes a deliverable is included, and discovers during implementation that it is not, is far more likely to feel deceived than a client who saw the exclusion clearly in the original proposal.',
      example: 'Riley said: I want to call out the exclusions specifically — because experience tells me these are where surprises happen. Excluded from this proposal: custom API development beyond the standard connector library, content localisation into languages other than English, and any data migration from your legacy platform. If any of these are requirements, we can scope them separately and price them as additions to this proposal — but they are not currently included.',
      imageSlug: '/images/exclusions.png',
    },
    {
      word: 'COMMERCIAL TERMS',
      partOfSpeech: 'phrase',
      definition: 'The financial and legal conditions of a commercial engagement — including pricing, payment schedule, payment terms (net 30, net 60), liability caps, IP ownership, termination rights, and SLA provisions. In a proposal presentation, the commercial terms section typically comes last — after value and scope have been established — and should be presented with confidence rather than apology.',
      example: "Riley moved to the commercial terms with deliberate confidence: The total investment for the 12-month engagement is £420,000, payable in four instalments tied to the four milestones: £105,000 at contract signature, £105,000 at integration complete, £105,000 at go live, and £105,000 at the 90-day performance review. Payment terms are net 30 from invoice. Termination rights are mutual on 90 days' notice after month six. I'm happy to take any questions on these terms.",
      imageSlug: '/images/commercial-terms.png',
    },
    {
      word: 'CHANGE CONTROL',
      partOfSpeech: 'phrase',
      definition: 'The formal process for managing any modification to the agreed scope, timeline, or cost of an engagement after the contract has been signed. Change control exists to protect both parties: the vendor from absorbing uncompensated additions to scope, and the buyer from being surprised by unexpected cost increases. A well-defined change control process is a sign of professional project governance.',
      example: "Riley explained: Any changes to the agreed scope after signature go through a formal change control process — both sides agree in writing to the modification, the cost and timeline impact, and any new payment terms before the change is implemented. This protects you as much as it protects us: nothing changes without your explicit approval, and you'll never receive an invoice for work you didn't authorise. It sounds procedural, but it prevents the most common source of project disputes.",
      imageSlug: '/images/change-control.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "I'D LIKE TO WALK YOU THROUGH THE PROPOSAL SECTION BY SECTION",
      definition: "The standard opening for a formal proposal presentation — signalling a structured, guided approach rather than inviting the client to read independently. 'Walk you through' is the key phrase: it implies active guidance, narrative framing, and the opportunity to explain and connect each section rather than leaving interpretation to the client.",
      example: "Riley opened the proposal meeting: Rather than leave you to read through the document and come back with questions, I'd like to walk you through the proposal section by section — so I can add context to the written text and make sure we're aligned on the intent of each section before we get to the commercial terms. I'll pause at the end of each section for questions. Does that approach work for you?",
      imageSlug: '/images/id-like-to-walk-you-through-the-proposal-section-by-section.png',
    },
    {
      phrase: 'THE SCOPE OF THIS ENGAGEMENT INCLUDES [X] — AND I WANT TO BE EQUALLY CLEAR ABOUT WHAT IT DOES NOT INCLUDE',
      definition: "The phrase for presenting scope with explicit boundaries — covering inclusions and exclusions together. The second half ('equally clear about what it does not include') is as important as the first: it pre-empts the most common source of post-contract disagreement, which is a buyer discovering that something they assumed was included is not.",
      example: 'Riley said: The scope of this engagement includes platform configuration, CRM integration, and a full onboarding programme for up to 50 users. And I want to be equally clear about what it does not include: custom development, multilingual content, and third-party data source configuration outside the standard library. Those exclusions are listed in full in the annex — if anything on that list is a requirement, we should discuss it now.',
      imageSlug: '/images/the-scope-of-this-engagement-includes-x--and-i-want-to-be-equally-clear-about-what-it-does-not-include.png',
    },
    {
      phrase: 'THE KEY DELIVERABLE AT THIS MILESTONE IS',
      definition: 'The phrase for presenting project deliverables linked to specific milestones — making the relationship between time, activity, and output explicit. Linking deliverables to milestones creates measurable accountability: both parties know what must exist at the end of each phase, not just what activities will be happening during it.',
      example: 'Riley said: Milestone two is week six. The key deliverable at this milestone is a fully configured and tested platform environment — integrated with your CRM, validated against all 12 technical requirements in your specification, and formally signed off by your technical lead. That sign-off triggers the second payment instalment and releases us into the training phase.',
      imageSlug: '/images/the-key-deliverable-at-this-milestone-is.png',
    },
    {
      phrase: "THE PRICING IS STRUCTURED AS [X] — LET ME EXPLAIN WHAT'S INCLUDED AND HOW WE ARRIVED AT THAT FIGURE",
      definition: "The phrase for presenting pricing with transparency and confidence — not as a number to be defended but as the logical outcome of the scope and value already presented. 'How we arrived at that figure' invites the client into the pricing rationale, which reduces the feeling that a number has been pulled from the air.",
      example: "Riley said: The pricing is structured as four milestone-linked instalments of £105,000 each — let me explain what's included in each and how we arrived at the overall figure. The platform licence accounts for £240,000 of the total. The implementation and onboarding service accounts for £180,000 — which, based on comparable engagements at your scale, represents approximately 1,200 hours of dedicated resource. The total is £420,000.",
      imageSlug: '/images/the-pricing-is-structured-as-x--let-me-explain-whats-included-and-how-we-arrived-at-that-figure.png',
    },
    {
      phrase: "THIS PROPOSAL IS BASED ON A SET OF ASSUMPTIONS — IF ANY OF THESE CHANGE, WE'D NEED TO REVISIT THE SCOPE AND COST",
      definition: 'The phrase for presenting proposal assumptions transparently — naming them explicitly and signalling that the proposal is contingent on them remaining true. This protects the vendor from scope creep and gives the buyer the opportunity to correct any assumptions before the contract is signed.',
      example: "Riley said: Before we discuss the commercial terms, I want to be transparent about the assumptions this proposal is based on. The first is that your Salesforce instance is a standard configuration. The second is that the initial user group is no larger than 50. If either assumption is wrong, we'd need to revisit the scope and cost before signing. I'd rather flag this now than have a conversation about it in week three.",
      imageSlug: '/images/this-proposal-is-based-on-a-set-of-assumptions--if-any-of-these-change-wed-need-to-revisit-the-scope-and-cost.png',
    },
    {
      phrase: "I'D WELCOME ANY QUESTIONS ON THE COMMERCIAL TERMS BEFORE WE MOVE TO NEXT STEPS",
      definition: "The closing phrase for the commercial terms section — inviting scrutiny rather than hoping the client accepts without question. 'Welcome' is deliberate: it signals confidence in the terms and openness to discussion. Moving directly to 'next steps' after questions also signals momentum — the proposal presentation is not the end, but the transition to agreement.",
      example: "Riley concluded the commercial terms section: I'd welcome any questions on the commercial terms before we move to next steps — on pricing structure, payment timing, termination rights, or anything in the SLA. I'd rather address any concerns now, in this conversation, than receive a query from your legal team three weeks into the review. What questions do you have?",
      imageSlug: '/images/id-welcome-any-questions-on-the-commercial-terms-before-we-move-to-next-steps.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thank you for making time for this. I'd like to walk you through the proposal section by section — so I can add context to the written text and make sure we're aligned on the intent of each section before we get to the commercial terms. I'll pause at the end of each section for questions. Does that work for you?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That works well — I've had a first read but I want to make sure I'm interpreting some sections correctly.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good. Section one is [[scope:the defined boundaries of what the engagement includes — and explicitly excludes — to protect both parties from later disputes]]. The [[scope:]] of this engagement includes platform configuration, native CRM integration, and a full onboarding programme for up to 50 users. And I want to be equally clear about what it does not include — because the [[exclusions:items or services explicitly not included in the scope, stated clearly to prevent misunderstanding about what the agreed price covers]] are where surprises happen. Excluded: custom API development beyond the standard connector library, multilingual content support, and data migration from your legacy platform.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The data migration piece — that's something we'd assumed was included. How significant an addition would that be?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It's addable — and I'm glad you raised it now rather than after signature. The migration scope depends on how much historical data you want to preserve and how clean your current data is. I'd estimate an additional four to six weeks of resource and approximately £35,000 to £45,000 depending on the complexity. I can scope that formally and add it as an amendment to this proposal before we sign, if that's a requirement.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Let's flag it as a likely addition and revisit after this meeting. What's next?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Section two is [[deliverable:a specific, tangible output that the vendor commits to producing by a defined point — described in concrete terms that allow formal sign-off]]s and [[milestone:a significant point in the project timeline marking the completion of a key phase — typically tied to a deliverable, a decision point, or a payment trigger]]s. The project has four milestones. The key deliverable at milestone one — week three — is a fully integrated and tested CRM connection. At milestone two — week six — it's a configured and validated platform environment. At milestone three — week twelve — it's a trained core team of 20 power users with documented learning outcomes. At milestone four — week sixteen — it's the full user base live on the platform.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'The week three integration milestone seems fast. What does that depend on from our side?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Good question — and that brings me to section three: [[dependencies:factors or inputs from the buyer or a third party that must be in place before a milestone can be achieved — identifying them protects the vendor from delays caused by factors outside their control]]. The week three milestone depends on three things from you: API access credentials from your CRM administrator within five business days of contract signature, a nominated IT programme lead by week two, and confirmed access to your sandbox environment. If any of these are delayed, the milestone adjusts accordingly.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The CRM credentials shouldn't be a problem. The IT programme lead is something I need to confirm internally.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Add that to the list for this week. I also want to be transparent about the [[assumptions:the conditions the proposal is based on — if these change, scope or cost may need revision; stating them explicitly prevents disputes later]]: this proposal assumes a standard Salesforce configuration and a user group of no larger than 50 in year one. If either of those is different from your situation, we'd need to revisit the scope before signing.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We're on Salesforce — standard, no heavy customisation. And the user group is 42. So both assumptions hold.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Excellent — that confirms the scope and timeline as presented. Now for the [[commercial terms:the financial and legal conditions of the engagement — pricing, payment schedule, liability, termination rights, and SLA provisions]]. The total investment is £420,000, structured as four milestone-linked instalments. Let me explain how we arrived at that figure: £240,000 for the platform licence, and £180,000 for implementation and onboarding — representing approximately 1,200 hours of dedicated resource at your scale.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'The payment terms — are those negotiable? Net 30 is quite short for our finance team.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Net 45 is something we can accommodate — I'd need to confirm with our finance team, but I don't expect it to be a blocker. I'll flag it as a note on the contract. One final section worth mentioning: [[change control:the formal process for managing any modification to agreed scope, timeline, or cost after contract signature — protects both parties from unauthorised additions or unexpected invoices]]. Any changes to the agreed scope after signature are managed through a formal process — both sides agree in writing before any change is implemented, and no additional cost is incurred without your explicit approval.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's reassuring. It gives us a safety net if our requirements evolve during implementation.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly — it protects you as much as it protects us. I'd welcome any remaining questions on the commercial terms before we move to next steps. And I'll note the two actions from today: confirming the data migration addition as a scoped amendment, and moving net 45 payment terms for your finance team.",
    }
  ],

  matchingExercise: [
    {
        "word": "scope",
        "definition": "the defined boundaries of what an engagement includes and explicitly excludes — protects both parties from later disputes"
    },
    {
        "word": "deliverable",
        "definition": "a specific, tangible output the vendor commits to producing by a defined point — described concretely enough to allow formal sign-off"
    },
    {
        "word": "milestone",
        "definition": "a significant point in the project timeline marking completion of a key phase — typically tied to a deliverable and a payment trigger"
    },
    {
        "word": "dependencies",
        "definition": "inputs from the buyer or third party that must be in place before a milestone can be achieved — their absence adjusts the timeline"
    },
    {
        "word": "assumptions",
        "definition": "the conditions a proposal is based on — if these change after signature, scope or cost may need to be revised"
    },
    {
        "word": "exclusions",
        "definition": "items explicitly not included in the scope — stated clearly to prevent misunderstanding about what the agreed price covers"
    },
    {
        "word": "commercial terms",
        "definition": "the financial and legal conditions of an engagement — pricing, payment schedule, liability, termination rights, and SLA provisions"
    },
    {
        "word": "change control",
        "definition": "the formal process for managing any scope, timeline, or cost modification after contract signature — requires written approval before implementation"
    }
],
  fillBlankExercise: [
    {
        "before": "The ",
        "after": " of this engagement includes platform configuration and CRM integration — and I want to be equally clear about what it does not include: custom development, multilingual content, and legacy data migration.",
        "answer": "scope"
    },
    {
        "before": "The key ",
        "after": " at milestone two — week six — is a fully configured and validated platform environment, formally signed off by your technical lead.",
        "answer": "deliverable"
    },
    {
        "before": "The week three milestone depends on three ",
        "after": " from your side: API access credentials within five business days, a nominated IT lead by week two, and access to your sandbox environment.",
        "answer": "dependencies"
    },
    {
        "before": "I want to be transparent about the ",
        "after": " this proposal is based on — if either turns out to be incorrect, we'd need to revisit the scope and cost before signing.",
        "answer": "assumptions"
    },
    {
        "before": "Any changes to the agreed scope after signature go through a formal ",
        "after": " process — both sides approve in writing before any modification is implemented and no additional cost is incurred without your explicit agreement.",
        "answer": "change control"
    },
    {
        "before": "I'd welcome any questions on the commercial terms — on pricing, payment timing, or ",
        "after": " rights — before we move to next steps.",
        "answer": "termination"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Marcus assume is included that Riley clarifies is actually excluded from the scope?",
        "options": [
            "Custom API development",
            "Data migration from the legacy platform",
            "Multilingual content support"
        ],
        "correctIndex": 1
    },
    {
        "question": "What three dependencies does Riley name for the week-three integration milestone?",
        "options": [
            "A signed contract, a nominated project lead, and confirmed payment",
            "API credentials within 5 business days, an IT programme lead by week 2, and sandbox access",
            "CRM configuration data, a security clearance, and a nominated onboarding team"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say about change control — and whose interests does it protect?",
        "options": [
            "Change control protects the vendor from scope creep and does not affect the buyer's budget",
            "Change control requires written approval from both sides before any modification — it protects both parties",
            "Change control applies only to changes that exceed 10% of the original contract value"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley handle Marcus's request for net 45 payment terms?",
        "options": [
            "She declines and explains that net 30 is a firm company policy that cannot be changed",
            "She says she can accommodate net 45 and will confirm with her finance team — flagging it as a contract note",
            "She agrees immediately without needing to confirm internally"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Think about a time you had to present a complex plan, proposal, or report to someone important — a manager, a client, or a board. What was the hardest part of that presentation — and what would you do differently now?",
        "When you receive a formal proposal or document from a vendor or colleague, what do you look for first — and what kinds of things create confusion or concern? What would make a proposal easier to evaluate?",
        "In your professional experience, where do projects most commonly run into problems — is it the planning stage, the execution, or the handover? What does that tell you about what a good proposal should make explicit?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "The proposal _____ four sections: executive summary, scope and deliverables, timeline and dependencies, and commercial terms.",
            "options": [
                "is comprised of",
                "comprises",
                "is composing of"
            ],
            "correctIndex": 1,
            "explanation": "'Comprises' is the traditional and formally preferred active verb — 'the proposal comprises four sections' means 'the proposal contains / consists of four sections'. 'Is comprised of' is widely used but considered non-standard by formal style guides: 'comprise' means 'contain', so 'is comprised of' is logically redundant in the same way that 'is contained of' would be. The rule: the whole comprises the parts — 'the proposal comprises four sections', 'the team comprises eight people', 'the scope comprises three workstreams'. 'Is composing of' is not standard English in this context. In practice, 'consists of' is always a safe alternative: 'the proposal consists of four sections'."
        },
        {
            "sentence": "We are fully _____ delivering the project within the agreed 16-week timeline, subject to the dependencies outlined in section three being met on schedule.",
            "options": [
                "confident to",
                "confident of",
                "confident about"
            ],
            "correctIndex": 1,
            "explanation": "'Confident of' is the correct collocation when 'confident' is followed by a noun or gerund expressing what the confidence is directed toward: 'confident of success', 'confident of delivering', 'confident of achieving the milestones'. 'Confident to' + infinitive ('confident to deliver') is non-standard — 'confident' as a predicate adjective does not take the infinitive with 'to' in this construction. The pattern is: confident + of + noun/gerund, OR confident + that + clause: 'confident that we can deliver'. 'Confident about' is used when the object is more general or abstract: 'confident about the approach', 'confident about the timeline' — but 'confident of delivering' (specific outcome) is more precise."
        },
        {
            "sentence": "The week-three milestone _____ on three inputs from the buyer's side: API credentials, a nominated IT lead, and sandbox access.",
            "options": [
                "is depending",
                "depends",
                "depended"
            ],
            "correctIndex": 1,
            "explanation": "'Depends' (present simple) is correct — 'depend' is a stative verb and does not normally take the continuous aspect. Stative verbs describe states rather than actions: like 'know', 'contain', 'include', and 'belong', they use present simple even when describing current situations. 'The milestone is depending on X' is non-standard — this would be marked as an error in formal writing. 'Depended' (past simple) would be correct only if the dependency no longer applies. The present simple 'depends on' is the standard form for describing ongoing conditions: 'the timeline depends on X', 'the cost depends on the configuration', 'the milestone depends on three inputs'."
        },
        {
            "sentence": "The commercial terms _____ net 30 payment, a 90-day termination clause, and financial penalty provisions if the agreed SLA thresholds are not met.",
            "options": [
                "provide",
                "provide for",
                "provide with"
            ],
            "correctIndex": 1,
            "explanation": "'Provide for' is the correct construction when the meaning is 'to make provision for', 'to include as a contractual or formal arrangement', or 'to accommodate'. 'The terms provide for net 30 payment' means the terms contain and accommodate that arrangement. 'Provide' alone (without 'for') is also possible but has a slightly different nuance: 'provide' means 'supply or give', which works for physical deliverables ('we provide the platform') but is less precise for contractual provisions. 'Provide with' requires an indirect object: 'we provide you with the platform'. In formal legal and commercial language, 'the contract provides for X' is the standard construction for describing what a document includes or accommodates."
        },
        {
            "sentence": "Any modification to the agreed scope will be _____ through a formal change control process — no changes are implemented without written approval from both parties.",
            "options": [
                "managed",
                "manage",
                "managing"
            ],
            "correctIndex": 0,
            "explanation": "'Managed' is the past participle used in the passive construction 'will be managed' — the scope modification is the thing being managed (the receiver), not the agent. 'Will be managed through a formal process' describes how modifications are handled. 'Manage' (base form) would follow a modal directly without 'be': 'will manage' (active, with the subject as agent). 'Managing' would need a different auxiliary: 'will be managing' (future continuous active) — but that would mean the vendor or buyer is actively managing it, with a named subject. The passive 'will be managed' is the correct formal construction for describing a process that applies to both parties without naming a single agent."
        },
        {
            "sentence": "The project has _____ deliverables than the original brief suggested — the additional scope was agreed during the discovery phase.",
            "options": [
                "less",
                "fewer",
                "lesser"
            ],
            "correctIndex": 1,
            "explanation": "'Fewer' is correct with countable nouns — 'fewer deliverables', 'fewer milestones', 'fewer pages'. 'Less' is used with uncountable nouns: 'less risk', 'less flexibility', 'less time'. Deliverables are countable (you can count them: one deliverable, two deliverables), so 'fewer' is the grammatically correct choice. 'Lesser' is a formal adjective meaning 'of smaller importance or degree' — 'a lesser concern', 'the lesser of two risks' — but it cannot substitute for 'fewer' when referring to quantity. The countable/uncountable distinction determines less vs fewer in standard formal English: 'fewer changes to the scope', 'less flexibility on the timeline', 'fewer assumptions than expected'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the buyer says during the proposal presentation. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "The data migration piece — we assumed that was included. It's quite important to us.",
                "options": [
                    "Apologies for the confusion — I should have made that clearer. Let me see if I can include it at no additional cost.",
                    "I understand — and I'm glad you raised it now rather than after signature. Data migration wasn't included because the scope and cost vary significantly by volume and data quality, which I couldn't confirm without a separate assessment. I can scope it formally today and add it as an amendment to this proposal before we sign, so it's included under contract. Would you like me to do that?",
                    "It's actually listed in the exclusions section on page 18 — I can point you to that. We can certainly discuss adding it, but it would be a separate engagement."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most effective response — it acknowledges the buyer's concern without apology, explains why the exclusion was made (a reasonable, professional rationale), and immediately proposes a solution that keeps the deal moving. It also frames the resolution in the buyer's favour: addressing it now rather than after signature. Option A apologises unnecessarily and offers to absorb the cost without understanding the scope — which undermines the pricing credibility of the entire proposal. Option C points the buyer to a page in the document (which can feel defensive) and separates the engagement rather than finding a way to incorporate it."
            },
            {
                "customerLine": "The 16-week timeline feels aggressive. We've had implementations take twice as long with other vendors.",
                "options": [
                    "I understand the concern — we can certainly extend the timeline if that would make you more comfortable. What timeframe would work better for your team?",
                    "That's a legitimate concern — and I want to address it directly. The 16-week timeline is based on five assumptions that I listed in section three. When those dependencies are met on schedule, 16 weeks is achievable — we've delivered it for six comparable clients in the past 18 months. Where implementations have run longer — including with some of our own earlier clients — the most common cause was delayed CRM access credentials and the absence of a dedicated IT programme lead. Both of those are dependencies I've already named, and I'd recommend treating them as week-one priorities.",
                    "Our track record on this timeline is very strong — I wouldn't be concerned. We have a dedicated project manager who manages this risk on our side."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right response — it takes the concern seriously, explains the basis of the timeline confidence (five stated assumptions, comparable client track record), and connects the risk directly to the dependencies already named in the proposal. This shows that the timeline is evidence-based, not optimistic — and that the risks are manageable. Option A offers to extend the timeline immediately, which concedes before making the case — and may actually be doing the buyer a disservice if the 16 weeks is genuinely achievable. Option C dismisses the concern with a reassurance ('I wouldn't be concerned') that doesn't actually address the buyer's underlying question about why their past implementations ran long."
            },
            {
                "customerLine": "The pricing — can you give us a discount? We've been talking for months and we're a significant client.",
                "options": [
                    "I'll see what I can do — it may be possible to find some flexibility, especially given the relationship we've built.",
                    "I want to be honest with you: our pricing at this point reflects the full scope and the value it delivers, and I don't have discretion to discount the core commercial terms. What I can offer is a discussion about structuring the engagement differently — for example, phasing the scope to align with your budget cycle, or adjusting the payment terms to improve cashflow. Would either of those be useful to explore?",
                    "The pricing is fixed, I'm afraid — we've built the proposal at our standard commercial rates and there isn't flexibility at this stage."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most sophisticated response — it is honest about the pricing position without being inflexible, and immediately redirects to alternative ways of addressing the underlying concern (which is usually cashflow or budget cycle, not the total cost). Offering to phase the scope or restructure the payment terms shows commercial creativity without cheapening the core value proposition. Option A signals that a discount is available, which retroactively implies the original price was padded — this undermines pricing credibility and the entire premium positioning. Option C is accurate but too abrupt — 'the pricing is fixed' ends the conversation rather than exploring the real underlying concern."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the proposal presentation conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "I'd like to walk you through the proposal section by section — so I can add context and make sure we're aligned on the intent of each section before we reach the commercial terms."
            },
            {
                "speaker": "Marcus",
                "text": "That works well. Can you start with scope? I want to make sure I understand what's included."
            },
            {
                "speaker": "Riley",
                "text": "The scope is comprised of three workstreams: platform configuration, CRM integration, and onboarding. The exclusions are listed in the annex — I'll draw your attention to the key ones."
            },
            {
                "speaker": "Marcus",
                "text": "Good. What about the timeline? When do you expect to reach each milestone?"
            },
            {
                "speaker": "Riley",
                "text": "The integration milestone at week three is depending on three inputs from your side: API credentials, an IT lead, and sandbox access. If any of those are delayed, the milestone adjusts."
            },
            {
                "speaker": "Riley",
                "text": "And on the commercial terms — we're confident to deliver within the agreed timeline, and the contract provides for a mutual 90-day termination right after month six."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "is comprised of",
                "correction": "comprises",
                "explanation": "'Comprises' is the traditional and formally preferred active construction — 'the scope comprises three workstreams' means 'the scope contains / consists of three workstreams'. 'Is comprised of' is widely used but non-standard: since 'comprise' means 'contain', 'is comprised of' creates a passive construction that is logically equivalent to 'is contained of', which is redundant. The formal rule: the whole comprises the parts — the subject takes the active verb 'comprises': 'the project comprises four phases', 'the team comprises eight people', 'the engagement comprises three workstreams'. If the passive is needed, use 'consists of' or 'is made up of' — both are standard alternatives to 'is comprised of'."
            },
            {
                "lineIndex": 4,
                "incorrectText": "is depending on",
                "correction": "depends on",
                "explanation": "'Depend' is a stative verb — it describes a state or condition rather than an action or ongoing process. Like 'know', 'contain', 'include', and 'belong', stative verbs use the present simple even when describing current situations: 'the milestone depends on three inputs', not 'is depending on three inputs'. The continuous form ('is depending') implies an ongoing, dynamic action — which is not the meaning here. Using the continuous form with a stative verb is a common error at C1-C2 level. Other stative verbs that follow the same rule: 'the cost includes', 'the scope excludes', 'the assumption concerns', 'the contract stipulates'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "confident to deliver",
                "correction": "confident of delivering",
                "explanation": "'Confident of' is the correct collocation when the adjective 'confident' is followed by a gerund expressing the outcome: 'confident of delivering', 'confident of achieving', 'confident of meeting the deadline'. 'Confident to' + infinitive ('confident to deliver') is non-standard — 'confident' as a predicate adjective does not take a 'to' infinitive complement in this construction. The two correct patterns are: (1) confident + of + gerund: 'confident of delivering on time'; (2) confident + that + clause: 'confident that we can deliver on time'. A third option — 'confident in' + noun — is also standard: 'confident in our ability to deliver'. 'Confident to deliver' is a common error, particularly in professional writing, where it is influenced by similar constructions with adjectives that do take the infinitive ('able to deliver', 'ready to deliver')."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally using precise proposal presentation language.",
        "items": [
            {
                "customerLine": "I'm not sure I fully understand what's included in the scope and what isn't.",
                "salespersonStart": "Let me be as clear as possible — because scope clarity is the most important thing to establish before we discuss commercial terms.",
                "suggestedCompletion": "What's included: platform configuration, native CRM integration, and a full 16-week onboarding programme for up to 50 users. What's not included — and I want to be explicit about this because these are the most common sources of post-contract confusion: custom API development beyond the standard connector library, data migration from your legacy platform, and multilingual content. Both the inclusions and the exclusions are listed in full in the annex on page 22. If anything in the excluded list is a requirement, I'd rather scope it now and include it under contract than discover it as a gap in week eight."
            },
            {
                "customerLine": "What happens if something changes after we've signed — if our requirements evolve during implementation?",
                "salespersonStart": "That's one of the most important questions you can ask, and I'm glad you raised it before we get to signature.",
                "suggestedCompletion": "Any change to the agreed scope after contract signature goes through a formal change control process. Both sides agree in writing to the modification — what's being changed, the impact on the timeline, the additional cost if any, and the revised payment terms. No work is done and no invoice is raised without your explicit written approval. That protects you from unexpected costs and protects us from being asked to absorb work that wasn't in the original agreement. It sounds procedural, but it's the structure that makes multi-month projects run without disputes."
            },
            {
                "customerLine": "The total price is higher than we budgeted. Is there any flexibility?",
                "salespersonStart": "I want to be transparent about what I can and can't offer — because an honest answer now is better than an uncomfortable conversation three months into the contract.",
                "suggestedCompletion": "On the core pricing, I don't have discretion to discount — the figure reflects the full scope and the resource required to deliver it. What I can offer is two alternative structures that might address the budget constraint without reducing the scope or the quality. First: phasing — we implement in two tranches, with the second tranche in your next budget year, which reduces the year-one commitment. Second: payment terms — if net 60 rather than net 30 would improve your cashflow position significantly, that's something I can put to our finance team. Which of those, if either, would be useful to explore?"
            }
        ]
    }
},
};
