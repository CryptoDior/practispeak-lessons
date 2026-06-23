import { Lesson } from '@/types/lesson';

export const negotiatingContractsAndPartnerships: Lesson = {
  slug: 'negotiating-contracts-and-partnerships',
  title: 'Negotiating Contracts and Partnerships',
  subtitle: 'How to negotiate high-stakes commercial agreements — and understand the language that protects both sides',
  level: 'C1-C2',
  description: "Marketing leaders regularly negotiate contracts with agencies, technology vendors, media partners, and content creators. Understanding the commercial and legal language in these agreements is not optional — it is how you protect your budget, your brand, and your business. This lesson teaches the vocabulary and communication strategies behind high-stakes contract negotiation: from exclusivity and SLAs to performance clauses and exit terms.",
  heroImage: '/images/negotiating-contracts-and-partnerships-hero.png',

  vocabulary: [
    {
      word: 'Exclusivity',
      partOfSpeech: 'noun',
      definition: "A contractual agreement that prevents one or both parties from working with competitors. Exclusivity can protect a partnership — but it limits flexibility and must be negotiated carefully.",
      example: "The agency proposed a 12-month exclusivity clause. Riley said: I understand why you want it — but I cannot agree to exclusivity across all marketing services. I am open to exclusivity within a defined scope — performance media only. Outside that, we need to be able to bring in specialist partners.",
      imageSlug: '/images/exclusivity.png',
    },
    {
      word: 'Indemnity',
      partOfSpeech: 'noun',
      definition: "A contractual agreement where one party agrees to cover the costs, losses, or legal liabilities of the other if something goes wrong. Indemnity clauses protect each party from the mistakes or failures of the other.",
      example: "Riley said: The indemnity clause in their contract says we are responsible for any third-party IP claims arising from content they create for us. That is backwards. They are creating the content — the indemnity should run the other way. Get legal to flag this before we sign.",
      imageSlug: '/images/indemnity.png',
    },
    {
      word: 'SLA',
      partOfSpeech: 'abbreviation',
      definition: "Service Level Agreement — a contract that defines the minimum level of service a vendor must deliver. SLAs include response times, delivery timelines, uptime guarantees, and what happens if those standards are not met.",
      example: "Riley said: The SLA needs to be specific. 'Best efforts' is not an SLA — it is an excuse. I want 48-hour response times on all campaign queries, a 99.5% platform uptime guarantee, and clear escalation procedures if either of those is missed.",
      imageSlug: '/images/sla.png',
    },
    {
      word: 'Performance clause',
      partOfSpeech: 'noun',
      definition: "A section of a contract that ties payment, continuation, or other terms to specific measurable results. Performance clauses protect the client by ensuring the vendor is incentivised to deliver — not just to be present.",
      example: "Riley said: We need a performance clause in the agency contract. If they do not hit the agreed cost-per-lead target by Q2, the retainer reduces by 20%. That is not punitive — it is aligned. We both win when the campaigns work.",
      imageSlug: '/images/performance-clause.png',
    },
    {
      word: 'Exit clause',
      partOfSpeech: 'noun',
      definition: "A section of a contract that defines the conditions under which either party can end the agreement — including notice periods, penalties, and what happens to work in progress.",
      example: "Riley reviewed the contract: There is no exit clause. That means we are locked in for 24 months with no way out if performance is poor or if our strategy changes. I will not sign without a 90-day exit clause with no penalty if SLA targets are missed for three consecutive months.",
      imageSlug: '/images/exit-clause.png',
    },
    {
      word: 'Retainer',
      partOfSpeech: 'noun',
      definition: "A fixed monthly fee paid to an agency or consultant in exchange for an agreed scope of work or availability. A retainer provides predictable cost but requires clear scope definition to avoid scope creep.",
      example: "Riley said: We pay the agency a monthly retainer of £25,000. In return, they handle all paid social, weekly reporting, and campaign management. If they want to add services, the retainer goes up — and that needs a change order, not an email.",
      imageSlug: '/images/retainer.png',
    },
    {
      word: 'Scope of work',
      partOfSpeech: 'noun',
      definition: "A detailed description of what a vendor or partner will deliver — including deliverables, timelines, responsibilities, and what is explicitly excluded. A clear scope of work prevents scope creep and disputes.",
      example: "Marcus said: The agency keeps adding things to our project. Riley said: That is scope creep and it is a contract problem. Your scope of work should list exactly what is included and what requires a separate agreement. Send it back to them with a change order for everything that was not in the original scope.",
      imageSlug: '/images/scope-of-work.png',
    },
    {
      word: 'Liability cap',
      partOfSpeech: 'noun',
      definition: "The maximum amount one party can be required to pay the other in the event of a loss or breach of contract. A liability cap protects both sides from disproportionate financial exposure.",
      example: "Riley said: Their proposed liability cap is one month of fees. For a campaign that generates millions in revenue, that is completely inadequate. Negotiate it up to twelve months — or link it to the actual value at risk rather than an arbitrary fee multiple.",
      imageSlug: '/images/liability-cap.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "I am not comfortable with that clause",
      definition: "A professional, non-aggressive way to signal disagreement with a specific contract term. It opens a negotiation without creating conflict — and signals that you have read the contract carefully.",
      example: "The vendor presented the final contract. Riley read it and said: I am not comfortable with that clause — specifically the 24-month lock-in with no exit rights. That is a significant commitment without adequate protection for us if performance does not meet expectations. Can we discuss alternatives?",
      imageSlug: '/images/i-am-not-comfortable-with-that-clause.png',
    },
    {
      phrase: "We need to define the scope more tightly",
      definition: "A phrase used when the scope of work in a contract is too vague and could lead to disputes or scope creep. It signals that you want clear, specific deliverables before signing.",
      example: "Riley said: Before we agree on the retainer, we need to define the scope more tightly. Right now it says 'marketing support services' — that could mean anything. I want a defined list of deliverables, response time commitments, and a clear process for anything that falls outside it.",
      imageSlug: '/images/we-need-to-define-the-scope-more-tightly.png',
    },
    {
      phrase: "What happens if you miss the SLA?",
      definition: "A direct negotiation question that establishes the consequences of underdelivery. A well-negotiated SLA is not just a target — it has specific, agreed consequences if the standard is not met.",
      example: "Riley asked the technology vendor: What happens if you miss the SLA? The contract says 99.5% uptime — but there is no remedy clause. I want to know: if uptime drops below that threshold, what is the credit, what is the escalation path, and after how many misses do I have the right to exit?",
      imageSlug: '/images/what-happens-if-you-miss-the-sla.png',
    },
    {
      phrase: "Let's tie compensation to performance",
      definition: "A negotiation proposal that links the vendor's payment to specific results — rather than just activity. It aligns incentives and ensures the vendor is motivated by the same outcomes as the client.",
      example: "Riley said: I want to propose a different fee structure. Let's tie compensation to performance. Base retainer at £15,000, and a bonus structure linked to hitting the cost-per-lead target. If you hit it, you earn more. If you miss it, we pay less. That is alignment, not punishment.",
      imageSlug: '/images/lets-tie-compensation-to-performance.png',
    },
    {
      phrase: "What is your position on exclusivity?",
      definition: "An open negotiation question that invites the other party to explain their exclusivity requirements — before you reveal your own position. It helps you understand what they need before making an offer.",
      example: "Before responding to the agency's proposed exclusivity clause, Riley asked: What is your position on exclusivity? Why is it important to you? I want to understand the concern before we discuss terms. That conversation revealed the agency was worried about knowledge transfer to competitors — which gave Riley a narrower way to address it.",
      imageSlug: '/images/what-is-your-position-on-exclusivity.png',
    },
    {
      phrase: "That is a deal-breaker for us",
      definition: "A clear, professional statement that a specific term is non-negotiable — the deal will not proceed if it remains unchanged. It should be used sparingly and only when the position is genuine.",
      example: "The vendor refused to include an exit clause. Riley said: That is a deal-breaker for us. We cannot commit to a 24-month contract with no exit rights — our board will not approve it and I will not sign it. We need either a performance-linked exit or a 90-day notice period. Which can you offer?",
      imageSlug: '/images/that-is-a-deal-breaker-for-us.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I have the agency contract for review. They are proposing a 24-month retainer with exclusivity across all digital marketing. I am not sure where to push back.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Start with [[exclusivity:a contractual agreement that prevents one or both parties from working with competitors]]. 24 months of full exclusivity across all digital is too broad. Push back on scope — offer exclusivity in one defined area only, such as paid media.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[retainer:a fixed monthly fee paid to an agency in exchange for an agreed scope of work]] is £30,000 per month. There is no performance element.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Let's tie compensation to performance. Propose a base retainer — say £20,000 — with a bonus structure tied to hitting specific campaign targets. That aligns their incentives with ours. A [[performance clause:a contract section that ties payment or continuation to specific measurable results]] makes everyone more focused.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The [[SLA:Service Level Agreement — a contract that defines the minimum level of service a vendor must deliver]] says 'best efforts on all campaign requests'. Is that acceptable?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "'Best efforts' is not an SLA — it is an escape clause. Ask them: what happens if you miss the SLA? We need specific commitments — 48-hour response times, defined escalation paths, and a credit mechanism if they miss agreed targets.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "There is also no [[exit clause:a contract section that defines how either party can end the agreement, including notice periods and penalties]]. We are locked in for the full 24 months.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is a deal-breaker for us. I am not comfortable with that clause. A 24-month lock-in with no exit rights is not something I can approve. We need a 90-day notice period — and the right to exit without penalty if the SLA is missed for three consecutive months.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about the [[indemnity:a contractual agreement where one party covers the costs or liabilities of the other if something goes wrong]] clause? They want us to cover all third-party IP claims from content they create.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is backwards — they are creating the content, so the indemnity should run the other way. Get legal to flip it. They cover any IP claim arising from their own work. We cover claims arising from our brief or assets. That is the correct split.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[scope of work:a detailed description of what a vendor will deliver, including deliverables, timelines, and what is excluded]] is very vague — it just says 'ongoing marketing support'.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "We need to define the scope more tightly before we sign anything. 'Ongoing marketing support' is a blank cheque for both sides. List every deliverable, every timeline, every process — and everything that is explicitly out of scope. That protects us and them.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[liability cap:the maximum amount one party can be required to pay in the event of a loss or breach]] is capped at one month of fees.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "One month is completely inadequate for a campaign that drives millions in revenue. Negotiate it to twelve months minimum — or link it to the actual value at risk. And write that into the redline before you send it back.",
    }
  ],

  matchingExercise: [
    { word: 'exclusivity', definition: 'a contractual agreement that prevents one or both parties from working with competitors' },
    { word: 'indemnity', definition: 'a contractual agreement where one party covers the costs or liabilities of the other if something goes wrong' },
    { word: 'SLA', definition: 'Service Level Agreement — a contract that defines the minimum level of service a vendor must deliver' },
    { word: 'performance clause', definition: 'a contract section that ties payment or continuation to specific measurable results' },
    { word: 'exit clause', definition: 'a contract section that defines how either party can end the agreement including notice periods and penalties' },
    { word: 'retainer', definition: 'a fixed monthly fee paid to an agency or consultant in exchange for an agreed scope of work' },
    { word: 'scope of work', definition: 'a detailed description of what a vendor will deliver, including deliverables, timelines, and what is excluded' },
    { word: 'liability cap', definition: 'the maximum amount one party can be required to pay the other in the event of a loss or breach' }
  ],

  fillBlankExercise: [
    { before: "'Best efforts' is not an ", after: " — it is an escape clause. We need specific targets and a remedy if they are missed.", answer: "SLA" },
    { before: "Let's tie ", after: " to performance — a base retainer with a bonus linked to hitting the agreed cost-per-lead target.", answer: "compensation" },
    { before: "That is a deal-", after: " for us — we will not sign a 24-month contract with no exit rights.", answer: "breaker" },
    { before: "We need to define the ", after: " more tightly — 'ongoing marketing support' could mean anything.", answer: "scope" },
    { before: "The ", after: " should run the other way — they create the content, so they cover any IP claims arising from it.", answer: "indemnity" },
    { before: "One month of fees is an inadequate liability ", after: " for a campaign that drives millions in revenue.", answer: "cap" }
  ],

  multipleChoiceExercise: [
    {
      question: "What does Riley say about the exclusivity clause proposed by the agency?",
      options: ["24-month full exclusivity is reasonable for a senior agency partner", "Full exclusivity across all digital is too broad — offer exclusivity in one defined scope like paid media only", "Exclusivity should be avoided entirely in agency contracts"],
      correctIndex: 1
    },
    {
      question: "Why does Riley say the indemnity clause needs to be reversed?",
      options: ["Indemnity clauses are not enforceable in most jurisdictions", "The agency is creating the content, so they should cover IP claims from their own work — not the client", "The current clause protects the client and should stay as written"],
      correctIndex: 1
    },
    {
      question: "What does Riley say about the 'best efforts' SLA language?",
      options: ["It is standard industry language and is acceptable", "'Best efforts' is not an SLA — it is an escape clause that provides no real protection", "Best efforts SLAs are appropriate for creative agencies but not technology vendors"],
      correctIndex: 1
    },
    {
      question: "What does Riley propose instead of a fixed retainer with no performance element?",
      options: ["A project-based fee structure with no monthly retainer", "A base retainer plus a bonus structure tied to hitting specific campaign targets", "A lower fixed retainer with the agency free to choose their own KPIs"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Have you ever negotiated a contract with an agency, vendor, or media partner? What was the hardest part — the commercial terms, the legal language, or the relationship dynamics?",
      "Have you ever been in a situation where a contract did not protect you as well as it should have — where something went wrong and the agreement was not clear enough?",
      "When you review a contract before signing, what do you look for first? Do you focus on the commercial terms, the legal clauses, or the scope of work?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "The contract has no exit clause — we are locked in for 24 months with no _____ to leave early.",
        options: ["option", "right", "way"],
        correctIndex: 1,
        explanation: "'Right to leave' or 'exit right' is the legal and contractual phrase for the ability to terminate an agreement under defined conditions. 'Option' is possible but less precise in a legal context. 'Way' is too informal. In contract negotiation, 'the right to exit' is the standard phrase — 'no right to exit' means the clause does not permit early termination."
      },
      {
        sentence: "The SLA says 'best efforts' — that is not a standard, it is an _____ clause.",
        options: ["exit", "escape", "exclusion"],
        correctIndex: 1,
        explanation: "'Escape clause' is the idiomatic phrase used to describe contract language that is so vague it gives a party a way to avoid accountability. 'Best efforts' is an escape clause because it has no measurable standard and cannot be enforced. 'Exit clause' is a specific type of clause that governs termination. 'Exclusion clause' limits liability — a different concept."
      },
      {
        sentence: "Before we sign, we need to define the _____ of work more tightly — 'marketing support' is too vague.",
        options: ["scale", "scope", "schedule"],
        correctIndex: 1,
        explanation: "'Scope of work' is the fixed contractual term for the detailed description of what a vendor will deliver. 'Scale of work' is not a standard term. 'Schedule of work' refers to timing and timelines — a related but different document. When the issue is vagueness about what is included and excluded, 'scope' is always the right word."
      },
      {
        sentence: "Let's tie their _____ to performance — a base fee plus a bonus if they hit the agreed targets.",
        options: ["retainer", "compensation", "payment"],
        correctIndex: 1,
        explanation: "'Tie compensation to performance' is the fixed phrase for linking payment to results. 'Compensation' covers all forms of payment — retainer, bonus, and project fees. 'Tie the retainer to performance' is possible but narrower — it only covers the fixed fee. 'Payment' is too general. 'Compensation' is the most complete and professional term here."
      },
      {
        sentence: "Their indemnity clause covers IP claims from their own content — that _____ should be in our favour, not theirs.",
        options: ["protection", "clause", "provision"],
        correctIndex: 1,
        explanation: "In contract discussions, 'clause' is the specific term for a distinct section of a contract — an indemnity clause, an exclusivity clause, an exit clause. 'Provision' is also used but is more formal and less common in spoken contract negotiation. 'Protection' describes the effect of the clause, not the clause itself. 'Clause' is the right word when discussing a specific section of a contract."
      },
      {
        sentence: "The proposed liability _____ is one month of fees — we need to negotiate it up to twelve.",
        options: ["ceiling", "limit", "cap"],
        correctIndex: 2,
        explanation: "'Liability cap' is the fixed legal term for the maximum amount one party can be required to pay the other in the event of a breach. 'Cap' is always used in this phrase — not 'ceiling' or 'limit'. These words are synonymous but 'liability cap' is the established term in contract law and commercial negotiation."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the vendor or partner says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "We need full exclusivity across all your marketing channels for 24 months.",
          options: [
            "That is reasonable — we will agree to the exclusivity in exchange for a reduced retainer.",
            "I understand the concern, but I am not comfortable with that clause as written. We can offer exclusivity within a defined scope — paid media only — for 12 months. Outside that scope and beyond that term, we need the flexibility to bring in specialist partners. What is your position on exclusivity in that narrower definition?",
            "We cannot agree to any exclusivity — our board policy is to maintain a multi-agency model at all times."
          ],
          correctIndex: 1,
          explanation: "Option B pushes back clearly, proposes a specific alternative, and asks a diagnostic question to understand the vendor's real concern. This is skilled negotiation — you signal what you cannot agree to, offer something you can, and keep the dialogue open. Option A agrees too quickly without protecting the client's flexibility. Option C closes the door entirely, which may end a productive negotiation unnecessarily."
        },
        {
          customerLine: "The SLA targets are aspirational — we cannot commit to specific remedies if we miss them.",
          options: [
            "I understand that targets are hard to guarantee. We can keep the SLA language general if that is more comfortable for you.",
            "An SLA without a remedy is just a target. We need to know: what happens if you miss the agreed uptime or response time? Without a remedy clause — a credit mechanism or the right to exit — 'best efforts' provides us with no real protection. Can we discuss what a fair remedy looks like?",
            "We will monitor the SLA monthly and flag any misses — if there are consistent problems we can revisit the contract at that point."
          ],
          correctIndex: 1,
          explanation: "Option B correctly identifies that an SLA without consequences is not a binding commitment — and proposes a specific fix. Option A accepts vague language to avoid conflict, which leaves the client unprotected. Option C defers the problem rather than solving it — by the time 'consistent problems' appear, you are already in a dispute without a remedy mechanism."
        },
        {
          customerLine: "We are not willing to include an exit clause. This is a partnership and partners do not plan for exits.",
          options: [
            "I appreciate the partnership framing. Let me take this back to my team and we will see if we can find a way to work with the contract as written.",
            "I hear the partnership language and I share that ambition. But a 24-month contract with no exit rights is a deal-breaker for us — our board will not approve it. An exit clause does not signal distrust — it signals that both sides are mature enough to plan for uncertainty. Can we agree on a 90-day notice period with no penalty unless performance targets are missed?",
            "We can agree to remove the exit clause if you can reduce the retainer by 20%."
          ],
          correctIndex: 1,
          explanation: "Option B reframes the exit clause as a sign of commercial maturity rather than distrust — which addresses the partner's concern without backing down. It also names the deal-breaker directly and proposes a specific alternative. Option A defers without pushing back — the board will not approve this and the problem does not go away. Option C trades the protection for a discount, which is the wrong trade-off."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "The agency wants us to sign an exclusive agreement for 24 months. I said we are fine with it." },
        { speaker: "Riley", text: "You should not agree without negotiating the scope. Full exclusivity for 24 months is too broad — push back on both the scope and the duration." },
        { speaker: "Marcus", text: "Understood. And the SLA says 'best efforts' — I told them that is a strong commitment and we are happy with it." },
        { speaker: "Riley", text: "'Best efforts' is not a strong commitment — it is an escape clause. It has no measurable standard and cannot be enforced. We need specific targets and a remedy if they are missed." },
        { speaker: "Marcus", text: "And I agreed to their liability limit of one month of fees — that seems fair for a monthly retainer agreement." },
        { speaker: "Riley", text: "One month of fees is completely inadequate for a campaign that drives millions in revenue. Negotiate it to twelve months — or link it to the actual value at risk." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "I said we are fine with it",
          correction: "push back on the scope and duration of the exclusivity clause",
          explanation: "Agreeing to full exclusivity across all marketing channels for 24 months without negotiation gives up too much flexibility. The correct approach is to question the scope (what is included?) and the duration (how long?), and offer a narrower alternative — exclusivity in one defined area for a shorter period."
        },
        {
          lineIndex: 2,
          incorrectText: "that is a strong commitment and we are happy with it",
          correction: "'Best efforts' is an escape clause — it is not an SLA and provides no real protection",
          explanation: "'Best efforts' has no measurable standard — it cannot be enforced because it does not define what success looks like. A real SLA has specific targets (response times, uptime percentages, delivery dates) and a defined remedy if those targets are missed. Treating 'best efforts' as a strong commitment is a serious negotiation error."
        },
        {
          lineIndex: 4,
          incorrectText: "that seems fair for a monthly retainer agreement",
          correction: "one month of fees is inadequate for a campaign that drives millions in revenue — negotiate it to twelve months or link to actual value at risk",
          explanation: "A liability cap of one month of fees is only appropriate if the total risk exposure is proportional to one month of fees. For a campaign generating significant revenue, one month of fees does not come close to covering the real exposure. Liability caps should be negotiated relative to the value at risk, not the fee structure."
        }
      ]
    },
    finishTheLine: {
      instructions: "The marketing leader starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "We want a 24-month exclusive contract with no exit clause.",
          salespersonStart: "I am not comfortable with that clause as written — specifically the combination of 24-month lock-in and no exit rights. That is a deal-breaker for us. What I can offer is...",
          suggestedCompletion: "a 12-month agreement with exclusivity limited to paid media, and a 90-day notice period on either side. After 12 months we review and renew if both sides are satisfied. That gives you the commitment you need and gives us the protection our board requires."
        },
        {
          customerLine: "The SLA says we will use best efforts to respond within 48 hours.",
          salespersonStart: "What happens if you miss the SLA? 'Best efforts' is not a binding commitment — we need a specific target and a remedy if it is not met. I want the 48-hour response time written as a hard target, with...",
          suggestedCompletion: "a credit mechanism if it is missed and the right to escalate after three consecutive misses. That is not punitive — it is a standard SLA structure. If you are confident in your service, this should not be a problem to commit to."
        },
        {
          customerLine: "Can we agree the scope of work as 'ongoing digital marketing support'?",
          salespersonStart: "We need to define the scope more tightly before we sign. 'Ongoing digital marketing support' is too vague — it could mean anything and it protects neither of us. I want a list of...",
          suggestedCompletion: "specific deliverables, response time commitments, and a clear process for anything that falls outside the agreed scope. A change order process for out-of-scope work. That gives both sides clarity and prevents the disputes that come from ambiguous scope."
        }
      ]
    }
  }
};
