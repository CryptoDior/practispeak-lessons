import { Lesson } from '@/types/lesson';

export const b2bSalesVocabulary: Lesson = {
  slug: 'b2b-sales-vocabulary',
  title: 'B2B Sales Vocabulary',
  subtitle: 'The formal language of enterprise procurement — proposals, contracts, stakeholders, and the process behind every large B2B decision',
  level: 'C1-C2',
  description: "In B2B sales, the commercial conversation is only part of the process. Behind every enterprise deal is a formal procurement system — RFPs, vendor assessments, legal reviews, sign-off authorities, and compliance gates — that operates independently of the personal relationships you've built. Understanding the vocabulary of procurement is not just about knowing the right words. It's about understanding the process well enough to move through it efficiently, anticipate delays before they happen, and position yourself as a vendor who makes the buyer's internal process easier rather than harder. This lesson teaches the formal language of B2B sales administration: what the documents are called, who the stakeholders are, what each stage requires, and how to navigate from proposal to signed contract in a complex organisational environment.",
  heroImage: '/images/b2b-sales-vocabulary-hero.png',

  vocabulary: [
    {
      word: 'PROCUREMENT',
      partOfSpeech: 'noun',
      definition: 'The organisational function responsible for sourcing, evaluating, and purchasing goods and services — often a separate department with its own process, evaluation criteria, approved vendor list, and timeline. In large organisations, procurement operates independently of the business team, which means sales conversations with the operational buyer and procurement conversations often happen in parallel.',
      example: 'Riley said: I expected procurement to be involved for a deal of this size — in my experience with organisations at your scale, the procurement team typically runs a parallel process to the business evaluation. Can you tell me who the procurement lead is and what their standard process looks like? The earlier I understand their requirements, the more efficiently we can move through the evaluation.',
      imageSlug: '/images/procurement.png',
    },
    {
      word: 'PROPOSAL',
      partOfSpeech: 'noun',
      definition: "A formal document outlining a vendor's proposed solution, commercial terms, implementation plan, and value case — designed to move a qualified prospect from interest to decision. In a formal procurement process, a proposal typically responds to specific criteria defined in an RFP and must be structured to allow systematic evaluation against those criteria.",
      example: "Riley explained her proposal structure: I've structured the proposal to mirror your RFP exactly — each of your stated requirements is addressed in the corresponding section, and there's a compliance matrix at the back so your procurement team can map our response directly to their evaluation criteria. I didn't want them to have to search for the answers.",
      imageSlug: '/images/b2b-sales-vocabulary-proposal.png',
    },
    {
      word: 'CONTRACT',
      partOfSpeech: 'noun',
      definition: 'The binding legal agreement that formalises the commercial terms of a business relationship — including scope, pricing, SLA, liability, IP rights, data handling, and termination conditions. In complex B2B sales, the contract often differs significantly from the proposal and requires legal review, negotiation, and formal sign-off before execution.',
      example: "Marcus said: Our legal team will send the contract once procurement has cleared you through the vendor approval process. Riley replied: Understood — and I'd flag that in my experience, the first pass from legal typically generates between ten and fifteen changes. I'd recommend building at least three weeks into the timeline for contract negotiation, so we're not pressured near the board meeting date.",
      imageSlug: '/images/b2b-sales-vocabulary-contract.png',
    },
    {
      word: 'STAKEHOLDER',
      partOfSpeech: 'noun',
      definition: 'Any individual or group with a significant interest in, or influence over, a purchasing decision. In complex B2B sales, stakeholders typically include the business sponsor, technical evaluators, end users, procurement, legal, and — for large contracts — the CFO or CEO. Effective stakeholder management requires identifying all stakeholders early, understanding their individual priorities, and ensuring each is appropriately engaged.',
      example: "Riley mapped the stakeholders explicitly: Based on our conversations, I've identified four key stakeholders: you as the business sponsor, your procurement lead on commercial terms, your IT security team on compliance and integration, and your legal team for contract review. Have I missed anyone? — because knowing the full map early prevents surprises at the final approval stage.",
      imageSlug: '/images/b2b-sales-vocabulary-stakeholder.png',
    },
    {
      word: 'RFP',
      partOfSpeech: 'abbreviation',
      definition: 'Request for Proposal — a formal document issued by a buyer inviting vendors to submit structured proposals in response to defined requirements. Typically used by larger organisations with formal procurement processes, an RFP establishes evaluation criteria, response format, submission deadline, and the commercial scope the vendor is being asked to address.',
      example: "Marcus said: We'll need you to respond formally to our RFP before the proposal can be evaluated by the procurement committee. Riley replied: Of course — I've read it thoroughly. The RFP requires us to address eight technical criteria and four commercial criteria. I've structured the proposal around those twelve points and included supporting evidence for each. The compliance matrix at the back maps our response to every requirement by section number.",
      imageSlug: '/images/rfp.png',
    },
    {
      word: 'SLA',
      partOfSpeech: 'abbreviation',
      definition: 'Service Level Agreement — the section of a contract that defines the minimum performance standards a vendor is committed to meeting, typically including uptime guarantees, response times, resolution times, and the remediation or penalty terms that apply if those standards are not met.',
      example: "Riley described the SLA terms: Our standard SLA commits to 99.9% uptime, a four-hour response time for critical issues, and a 24-hour resolution target for anything affecting core functionality. If we fall below the agreed uptime threshold, there are financial penalty clauses in the contract — a credit applied to the following quarter's invoice. That gives your team a contractual recourse, not just a service promise.",
      imageSlug: '/images/b2b-sales-vocabulary-sla.png',
    },
    {
      word: 'VENDOR',
      partOfSpeech: 'noun',
      definition: "A company or individual that supplies goods or services to another organisation. In formal B2B procurement, 'vendor' is the category term used for any external supplier being evaluated — prospective vendors go through a vendor assessment and approval process before they can be contracted.",
      example: "Marcus explained: Before we can issue a contract, our procurement team needs to complete a vendor assessment — financial stability, security posture, GDPR compliance, and reference checks. Every new vendor goes through this process regardless of deal size. Riley replied: We've completed this process with fifteen organisations at your scale in the past two years — I'll send you our pre-completed questionnaire and supporting documentation to accelerate your team's review.",
      imageSlug: '/images/vendor.png',
    },
    {
      word: 'SIGN-OFF AUTHORITY',
      partOfSpeech: 'phrase',
      definition: "The formal approval granted by an individual with the organisational authority to authorise a purchase — typically defined by contract value thresholds within a company's procurement policy. Understanding who holds sign-off authority at each value threshold is essential in complex B2B sales: deals stall most often when they reach an approver who was not engaged during the evaluation process.",
      example: "Marcus added: I should have mentioned — any contract above £400,000 requires CFO sign-off in addition to the standard procurement approval. Riley said: That's important — thank you. I'd like to prepare a one-page financial summary specifically for the CFO: headline ROI, risk mitigation provisions, and total cost of ownership across three years. Can you tell me what level of detail they typically want? — because I'd rather get that document right than have it sent back for revision.",
      imageSlug: '/images/sign-off-authority.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'HAS THIS GONE TO PROCUREMENT YET?',
      definition: 'The standard phrase for checking whether a deal has entered the formal procurement evaluation process. It signals awareness that procurement operates separately from the business evaluation and that the vendor needs to understand the process stage to plan effectively.',
      example: 'Riley asked at the end of the evaluation meeting: Has this gone to procurement yet — or are we still in the business evaluation phase? The reason I ask is that the procurement submission and the proposal can run in parallel if we plan it right, which could save two to three weeks off the overall timeline.',
      imageSlug: '/images/has-this-gone-to-procurement-yet.png',
    },
    {
      phrase: 'THE PROPOSAL ADDRESSES EACH OF YOUR STATED REQUIREMENTS',
      definition: "The phrase for linking a formal proposal to the buyer's specific RFP or evaluation criteria. It signals to the buyer — and to their procurement team — that the vendor has read and responded systematically to the requirements, rather than submitting a generic document.",
      example: "Riley sent the proposal with a cover note: The proposal addresses each of your stated requirements in sequence, following the structure of your RFP. I've included a compliance matrix on page 47 that lists every requirement by reference number and maps it to the relevant section of the proposal. I wanted to make the evaluation process as efficient as possible for your procurement team.",
      imageSlug: '/images/the-proposal-addresses-each-of-your-stated-requirements.png',
    },
    {
      phrase: 'ONCE BOTH PARTIES HAVE SIGNED THE CONTRACT',
      definition: 'The formal phrase for referring to the point at which a deal is legally executed — used to set expectations around what happens after signature (implementation start, invoice timing, access provisioning). It also signals that the vendor is thinking beyond the close to the post-signature relationship.',
      example: "Riley said: Once both parties have signed the contract, our implementation team will initiate the onboarding process within five business days. The first milestone — your live integration with your CRM — is targeted for week six. I'll send you a detailed implementation timeline alongside the contract so your team can plan resource allocation in advance.",
      imageSlug: '/images/once-both-parties-have-signed-the-contract.png',
    },
    {
      phrase: 'WHO ARE THE KEY STAKEHOLDERS WE SHOULD BE ENGAGING AT THIS STAGE?',
      definition: 'The phrase for proactively mapping the decision-making structure at a specific stage of the sales process. It signals that the vendor is thinking about the full approval process, not just the individual relationship — and that they want to ensure all relevant parties are appropriately informed and engaged.',
      example: "Riley asked midway through the evaluation: We're reaching the stage where internal alignment becomes critical. Who are the key stakeholders we should be engaging at this stage — and what do each of them need from us to feel confident about the decision? I'd rather know now than find out there was an IT security review or a legal question we hadn't addressed.",
      imageSlug: '/images/who-are-the-key-stakeholders-we-should-be-engaging-at-this-stage.png',
    },
    {
      phrase: "WE TYPICALLY SEE LEGAL REVIEW TAKE TWO TO THREE WEEKS — I'D FACTOR THAT INTO THE TIMELINE",
      definition: 'The phrase for setting realistic expectations about the legal review stage — one of the most common sources of delay in complex B2B contracts. Flagging the timeline proactively signals experience and helps prevent the deal from stalling near the close.',
      example: "Riley said: One thing I'd flag before we confirm the board submission date: we typically see legal review take two to three weeks on a contract of this scope — I'd factor that into the timeline. If the board meeting is six weeks away, we need the contract in your legal team's hands no later than the end of week three to give enough buffer for negotiation.",
      imageSlug: '/images/we-typically-see-legal-review-take-two-to-three-weeks--id-factor-that-into-the-timeline.png',
    },
    {
      phrase: 'THE RFP REQUIRES US TO',
      definition: 'The phrase for referencing specific obligations or constraints defined in a formal procurement document. It signals that the vendor is treating the RFP as a binding reference — not just a starting point — and that their response is structured accordingly.',
      example: "Riley explained the proposal structure: The RFP requires us to address your data residency requirements in a dedicated section — I've included a full data flow diagram and our GDPR compliance certification on pages 22 to 29. The RFP also requires three client references at comparable scale — I've included five, with contact details for all of them.",
      imageSlug: '/images/the-rfp-requires-us-to.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I have good news — we're ready to move this into formal evaluation. That means our procurement team will need to be involved from this point.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's great to hear — and completely expected for a deal of this size. What does your [[procurement:the organisational function responsible for sourcing, evaluating, and purchasing goods and services — often a separate department with its own process and timeline]] process typically look like from this stage?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "You'll need to complete a formal vendor questionnaire, respond to our [[RFP:Request for Proposal — a formal document inviting vendors to submit structured proposals in response to defined requirements]], and pass through a security and compliance review before we can issue a contract.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I've been through this process with organisations of your size before — it typically runs six to eight weeks from RFP submission to signed [[contract:the binding legal agreement that formalises commercial terms, including scope, pricing, SLA, and termination conditions]]. Does that align with your internal timeline?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We're targeting signature by end of Q3, so eight weeks is workable. The [[proposal:a formal document outlining a vendor's proposed solution, commercial terms, and value case — structured to enable systematic evaluation]] you submitted last week — does it address all the RFP requirements?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It does — I structured it specifically around your RFP. Each requirement is addressed in the corresponding section, and I've included a compliance matrix at the back so your procurement team can map our response directly to their evaluation criteria without searching through the document.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Good. Now — who are the key [[stakeholder:any individual or group with significant interest in or influence over a purchasing decision]]s we should be engaging before this can go to contract?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Based on our conversations, I've identified four: you as the business sponsor, your procurement lead on commercial terms, your IT security team on compliance and integration, and your legal team for contract review. Have I missed anyone critical to the [[sign-off authority:the formal approval granted by an individual with the organisational authority to approve a purchase at a defined value threshold]] level?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "You've missed our CFO. Any contract above £400,000 requires CFO sign-off — it's a firm policy.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Important — thank you for flagging that early. I'd like to prepare a one-page financial summary specifically for the CFO: headline ROI, total cost of ownership across three years, and the risk mitigation provisions in the contract. What level of detail does your CFO typically want to see?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "High level — they won't read the full proposal. They want headline numbers and the risk summary.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Understood — I'll prepare that as a separate document. On the contract itself: do you use your own standard [[vendor:a company or individual supplying goods or services — in formal B2B procurement, vendors undergo assessment and approval before contracting]] agreement, or do you prefer to work from our paper?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'We use our own template. Legal will send it once procurement has cleared you through the vendor approval process. Our standard [[SLA:Service Level Agreement — defines minimum performance standards, uptime guarantees, and the remediation terms that apply if those standards are not met]] requirements are included in the template.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "One thing worth flagging: we typically see legal review take two to three weeks on a contract of this scope — I'd factor that into the timeline. The first pass from legal usually generates ten to fifteen changes. Building that window in now prevents a last-minute rush before the Q3 deadline.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That's useful — I'll let the legal team know to plan for that. Anything else I should be aware of on your side?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'One last suggestion: a weekly alignment call with the key stakeholders from both sides during the procurement phase. It keeps everything moving without requiring large meetings — and it means nothing gets stuck in a queue without both of us knowing about it. Shall I set that up once procurement has confirmed your vendor submission date?',
    }
  ],

  matchingExercise: [
    {
        "word": "procurement",
        "definition": "the organisational function responsible for sourcing, evaluating, and purchasing goods and services"
    },
    {
        "word": "proposal",
        "definition": "a formal document outlining a vendor's proposed solution, structured to enable systematic evaluation against defined criteria"
    },
    {
        "word": "contract",
        "definition": "the binding legal agreement that formalises commercial terms including scope, pricing, SLA, and termination conditions"
    },
    {
        "word": "stakeholder",
        "definition": "any individual or group with significant interest in or influence over a purchasing decision"
    },
    {
        "word": "RFP",
        "definition": "a formal document issued by a buyer inviting vendors to submit structured proposals in response to defined requirements"
    },
    {
        "word": "SLA",
        "definition": "defines minimum vendor performance standards — uptime, response times, and the remediation terms if those standards are not met"
    },
    {
        "word": "vendor",
        "definition": "a company or individual supplying goods or services — typically subject to formal assessment and approval in large organisations"
    },
    {
        "word": "sign-off authority",
        "definition": "the formal approval granted by an individual with the organisational authority to approve a purchase at a specific value threshold"
    }
],
  fillBlankExercise: [
    {
        "before": "The proposal addresses each of your stated ",
        "after": " from the RFP — I've included a compliance matrix at the back so your procurement team can map our response directly to their evaluation criteria.",
        "answer": "requirements"
    },
    {
        "before": "Before the contract can be issued, all new vendors are subject to a formal ",
        "after": " assessment covering financial stability, security posture, and GDPR compliance.",
        "answer": "vendor"
    },
    {
        "before": "Any contract above £400,000 requires CFO ",
        "after": " in addition to the standard procurement approval.",
        "answer": "sign-off"
    },
    {
        "before": "Our standard ",
        "after": " commits to 99.9% uptime with a four-hour response time for critical issues and financial penalty clauses if we fall below that threshold.",
        "answer": "SLA"
    },
    {
        "before": "The ",
        "after": " requires us to address data residency requirements in a dedicated section — I've included a full data flow diagram and our GDPR compliance certification.",
        "answer": "RFP"
    },
    {
        "before": "I've identified four key ",
        "after": "s: the business sponsor, procurement lead, IT security team, and legal — are there any others who need to be aligned before this goes to contract?",
        "answer": "stakeholder"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What three things does Marcus say Riley needs to complete before a contract can be issued?",
        "options": [
            "A pilot programme, a reference check, and a commercial proposal",
            "A vendor questionnaire, an RFP response, and a security and compliance review",
            "A financial audit, a site visit, and an implementation plan"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Riley suggest preparing a separate one-page document for the CFO?",
        "options": [
            "Because the CFO is not involved in the formal procurement process",
            "Because the CFO wants headline numbers and a risk summary — not the full proposal",
            "Because CFO approval can bypass the standard procurement timeline"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley flag about legal review, and why?",
        "options": [
            "Legal review is optional for contracts below £500,000 and can be expedited",
            "Legal review typically takes two to three weeks and generates ten to fifteen changes — building this into the timeline prevents a last-minute rush",
            "Legal review always takes exactly six weeks and cannot be accelerated regardless of deal urgency"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley propose to keep the procurement phase on track?",
        "options": [
            "A daily email update to all stakeholders on both sides",
            "A formal project management tool shared between the two organisations",
            "A weekly alignment call with key stakeholders from both sides"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Have you ever been involved in a formal procurement process — either as a buyer or a seller? What was the most frustrating or surprising part of the process?",
        "In your organisation, who typically has the authority to approve large purchases — and what information do they need before they say yes? How does that vary by contract value?",
        "Think about a time a deal or project was delayed by an internal process — legal review, compliance, a sign-off that took longer than expected. What could have been done earlier to prevent the delay?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "All vendor submissions must comply _____ the data protection requirements set out in the procurement policy before they can advance to evaluation.",
            "options": [
                "to",
                "with",
                "by"
            ],
            "correctIndex": 1,
            "explanation": "'Comply with' is a fixed collocation — the verb 'comply' always takes the preposition 'with', never 'to' or 'by'. This is one of the most commonly misused preposition-verb combinations in formal business English. 'Comply with the rules', 'comply with the requirements', 'comply with the regulations' — always 'with'. 'Comply to' is non-standard in English, even though similar constructions exist in other languages. 'Comply by' is used for deadlines ('comply by Friday') but cannot replace 'comply with' when referring to standards, requirements, or policies."
        },
        {
            "sentence": "The contract is _____ review by the buyer's legal team — both parties should allow two to three weeks for this stage of the approval process.",
            "options": [
                "subject of",
                "subject to",
                "subject for"
            ],
            "correctIndex": 1,
            "explanation": "'Subject to' is the fixed prepositional phrase meaning 'dependent on' or 'requiring'. 'The contract is subject to review' — it will be reviewed before it is finalised. 'Subject to approval', 'subject to change', 'subject to legal review' — always 'to'. 'Subject of' means 'the topic of' ('the subject of the meeting') — a completely different construction. 'Subject for' is not standard in this context. This is a high-frequency phrase in formal business and legal English, and getting the preposition wrong changes the meaning significantly."
        },
        {
            "sentence": "In accordance _____ your RFP requirements, we have structured the proposal in four sections, each addressed in the order in which your criteria appear.",
            "options": [
                "with",
                "to",
                "by"
            ],
            "correctIndex": 0,
            "explanation": "'In accordance with' is the fixed formal phrase meaning 'following the rules, requirements, or standards of'. It always takes 'with' — 'in accordance with the policy', 'in accordance with the terms of the contract', 'in accordance with the RFP requirements'. 'In accordance to' is a very common error — particularly in formal writing — but it is non-standard in English. The same applies to 'in conformity with', 'in compliance with', and 'in line with' — all fixed expressions using 'with' to indicate alignment with a set of standards or expectations."
        },
        {
            "sentence": "The stakeholder map _____ five key decision points, each with a named owner, a target completion date, and a description of what is required to advance the deal to the next stage.",
            "options": [
                "identify",
                "identifies",
                "is identifying"
            ],
            "correctIndex": 1,
            "explanation": "'Identifies' (present simple, third-person singular) is correct because the stakeholder map is a document, and documents take present simple when we describe what they contain: 'the map identifies', 'the proposal outlines', 'the contract specifies', 'the RFP requires'. Present continuous ('is identifying') implies the map is actively doing something in this moment — documents cannot perform ongoing actions. 'Identify' is plural-subject form and cannot follow the singular 'the stakeholder map'. When describing the content of formal documents, use present simple with the appropriate singular or plural form."
        },
        {
            "sentence": "Neither the commercial terms _____ the implementation scope has been finalised — both remain subject to legal review and CFO approval.",
            "options": [
                "or",
                "nor",
                "and"
            ],
            "correctIndex": 1,
            "explanation": "'Neither... nor' is the fixed negative correlative conjunction — it is always 'neither A nor B', never 'neither A or B'. This is one of the most frequent conjunction errors in formal writing. When using 'neither... nor', the verb agrees with the subject closest to it: 'neither the terms nor the scope has been finalised' — 'scope' is singular, so 'has' is correct. 'Neither A and B' is non-standard. Note that 'neither A nor B' is negative, so it should not be used in combination with an already-negative verb: 'neither term has been finalised', not 'neither term hasn't been finalised'."
        },
        {
            "sentence": "It is imperative that the vendor approval process _____ complete before the contract is issued — procurement will not proceed without it.",
            "options": [
                "is",
                "be",
                "will be"
            ],
            "correctIndex": 1,
            "explanation": "After 'it is imperative/essential/important/critical that', formal English requires the subjunctive mood — the base form of the verb, identical to the bare infinitive. 'It is imperative that the process be complete' — not 'is complete' or 'will be complete'. The subjunctive is used to express necessity, strong recommendation, or formal requirement in clauses introduced by 'that' following these adjectives. Other examples: 'It is essential that the document be reviewed', 'It is critical that all stakeholders be present', 'It is imperative that the contract be signed before the deadline'. The subjunctive base form is the same as the infinitive for all verbs except 'be'."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the buyer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "Our procurement team will need you to complete a vendor questionnaire and respond to our RFP before we can evaluate the proposal.",
                "options": [
                    "Of course — I'll get those completed and sent back as quickly as possible. When is the deadline for submission?",
                    "I've done this before with organisations at your scale — and I'd suggest running the RFP response and the vendor questionnaire in parallel, starting today. Can you send me both documents now? I'll also send you our pre-completed security questionnaire from a recent evaluation at a comparable organisation — it may save your team significant time.",
                    "Understood. I'll put the vendor questionnaire and RFP response together over the next couple of weeks and send them across when they're ready."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most effective response — it signals process experience, proposes a specific efficiency measure (parallel submissions), asks for the documents immediately, and proactively offers something that reduces the buyer's workload. This is the behaviour of a vendor who has been through formal procurement before and actively manages the process to close efficiently. Option A is polite but passive — it asks for a deadline without proposing any action. Option C is the weakest: 'a couple of weeks' is unnecessarily slow and signals that the vendor is not managing their side of the timeline."
            },
            {
                "customerLine": "You mentioned our CFO needs to be involved — what would you prepare for them?",
                "options": [
                    "I'd send the full proposal — it contains everything they'd need to make an informed decision, including the financials.",
                    "I'd prepare a separate one-page executive summary focused on the three things a CFO typically cares about: the headline ROI across three years, the total cost of ownership comparison with the alternative, and the risk mitigation provisions in the contract. What level of detail does your CFO typically want — and is there a specific format they prefer?",
                    "That's really a decision for you and your internal team — you know your CFO better than I do. I'm happy to support whatever format works best."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right response — it shows clear understanding of what a CFO needs (ROI, TCO, risk), proposes a specific deliverable (one-page executive summary), and asks a smart clarifying question about format. It treats the CFO as a distinct audience with distinct needs — which is the mark of someone who understands complex stakeholder management. Option A is wrong: sending the full proposal to a CFO demonstrates poor stakeholder awareness. CFOs review the financial and risk picture, not the full commercial and technical detail. Option C abdicates responsibility — it's helpful in tone but passive in substance."
            },
            {
                "customerLine": "Legal review typically takes a long time in our organisation. I'm worried we'll miss the Q3 board deadline.",
                "options": [
                    "I'm sure we can work something out — deadlines can usually be adjusted if the deal is in the right stage.",
                    "Let's work backwards from the board date right now. If the board meeting is in eight weeks, and legal review takes three weeks, we need the contract in your legal team's hands no later than week five. That means procurement has to clear us and issue the contract no later than week four. If we start the vendor questionnaire and RFP response today, we can hit that timeline — but we have no buffer for delays. Can we agree on a specific submission date for the procurement stage, so we're both working to the same milestone?",
                    "I'd recommend we set the board deadline as a target rather than a firm date — that way if legal takes longer than expected, we're not under pressure."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the most effective response — it works backwards from the deadline to identify the specific milestone dates, surfaces the constraint (no buffer for delays), and proposes a concrete action (agreeing a procurement submission date today). This is exactly how a skilled complex-deal salesperson manages timeline risk: by making the implicit process explicit and driving agreement on specific dates. Option A suggests the deadline can be adjusted — which undermines the urgency and may not be true of a board cycle. Option C recommends treating the deadline as a target rather than a firm date — which reduces urgency and almost guarantees a miss."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the B2B procurement conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "I've structured the proposal to address each of your stated requirements in sequence — there's a compliance matrix at the back for the procurement team's reference."
            },
            {
                "speaker": "Marcus",
                "text": "Good. Now, all new vendors must comply to our information security requirements before we can proceed to contract."
            },
            {
                "speaker": "Riley",
                "text": "Understood — we'll complete the security questionnaire in full. I should mention that the contract will be subject of legal review on both sides, which typically takes two to three weeks."
            },
            {
                "speaker": "Marcus",
                "text": "That's expected. We'll send our standard contract template once procurement has cleared you through the vendor approval process."
            },
            {
                "speaker": "Riley",
                "text": "In accordance to your RFP structure, I've addressed each technical criterion in a dedicated section, with evidence and a reference client named for each."
            },
            {
                "speaker": "Riley",
                "text": "I'd suggest a weekly check-in during the procurement phase — it keeps everything moving without requiring large meetings."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "comply to",
                "correction": "comply with",
                "explanation": "'Comply with' is the fixed collocation — the verb 'comply' always takes 'with', never 'to'. 'All vendors must comply with the information security requirements.' This is one of the most consistent preposition-verb collocations in formal English: 'comply with the rules', 'comply with the policy', 'comply with the contract terms'. 'Comply to' is a very common error — often influenced by similar constructions in other languages — but it is non-standard in English regardless of register or context."
            },
            {
                "lineIndex": 2,
                "incorrectText": "subject of legal review",
                "correction": "subject to legal review",
                "explanation": "'Subject to' is the fixed prepositional phrase meaning 'dependent on' or 'requiring'. 'The contract will be subject to legal review' — it will require legal review before it is finalised. 'Subject of' means 'the topic of' ('the subject of the meeting', 'the subject of the proposal') — a completely different meaning. Confusing 'subject to' with 'subject of' changes the meaning significantly: 'subject of review' would mean 'the thing that is being discussed in the review', not 'the thing that must go through a review'. In formal contract and procurement language, 'subject to approval/review/change' is the standard construction."
            },
            {
                "lineIndex": 4,
                "incorrectText": "In accordance to",
                "correction": "In accordance with",
                "explanation": "'In accordance with' is the fixed formal phrase meaning 'following the requirements or standards of'. It always takes 'with' — never 'to'. 'In accordance with the RFP', 'in accordance with the terms of the contract', 'in accordance with company policy'. 'In accordance to' is a very common error in formal written English, but it is non-standard. The same applies to related phrases: 'in conformity with', 'in compliance with', 'in line with' — all use 'with' to indicate alignment with a set of standards. When in doubt, 'in accordance with' is the safest and most formal choice."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally using accurate B2B procurement language.",
        "items": [
            {
                "customerLine": "We haven't gone to procurement yet — we're still in the internal business evaluation phase.",
                "salespersonStart": "Good to know — that gives us time to get ahead of the procurement requirements before they become critical.",
                "suggestedCompletion": "Can I suggest we use this window to complete the vendor questionnaire and prepare the RFP response in parallel, so we're ready to submit the moment the business evaluation is complete? That way the procurement phase doesn't add to the overall timeline — it runs alongside it. I've been through this process with three organisations of your size in the past 18 months, and parallel tracking is consistently what keeps deals on schedule."
            },
            {
                "customerLine": "The CFO is going to ask: why this vendor and not the cheaper alternative?",
                "salespersonStart": "That's the right question — and I'd like to help you build the answer before you're in the room.",
                "suggestedCompletion": "What I can prepare is a one-page CFO summary: the total cost of ownership comparison over three years showing the gap is £15,000, not £130,000 once hidden costs are factored in; the three-year ROI model showing an 8x return on the year-one investment; and the risk mitigation provisions in the contract. The answer to the CFO's question is in the data — I just want to make sure you have the right data in the right format when they ask."
            },
            {
                "customerLine": "We've had deals stall in legal review before and never make it to board. I'm worried about that happening here.",
                "salespersonStart": "That's a legitimate concern — and one I'd like to actively manage rather than hope doesn't happen.",
                "suggestedCompletion": "In my experience, legal review stalls for two reasons: unexpected scope in the contract, or slow back-and-forth on redlines. We can address both. On scope: I can share the contract with your legal team before procurement issues it formally, so they have visibility early and can flag any concerns before the clock starts. On redlines: I'll ask our legal team to turn around any changes within 48 hours — rather than the standard five-day cycle. And I'd propose a weekly three-way check-in — you, me, and the legal leads on both sides — so nothing sits in a queue without both of us knowing about it."
            }
        ]
    }
},
};
