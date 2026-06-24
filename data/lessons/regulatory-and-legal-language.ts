import { Lesson } from '@/types/lesson';

export const regulatoryAndLegalLanguage: Lesson = {
  slug: 'regulatory-and-legal-language',
  title: 'Regulatory and Legal Language',
  subtitle: 'How to read, write, and review marketing copy that meets legal and regulatory requirements',
  level: 'C1-C2',
  description: 'Every piece of marketing copy — an ad, a product claim, a social post — has to meet legal and regulatory standards. Getting this wrong can mean fines, complaints, or forced withdrawal of a campaign. In regulated industries like financial services, healthcare, or food, the standards are even stricter. This lesson gives you the vocabulary to understand what the rules require, brief a legal team, and write copy that is both compelling and compliant.',
  heroImage: '/images/regulatory-and-legal-language-hero.png',

  vocabulary: [
    {
      word: 'ASA (ADVERTISING STANDARDS AUTHORITY)',
      partOfSpeech: 'noun',
      definition: 'The UK\'s independent body that sets and enforces rules about advertising content. The ASA investigates complaints and can require brands to remove or change ads.',
      example: "The campaign was referred to the ASA after three consumer complaints. Riley said: The ASA ruled in our favour — the claim was substantiated and the ad didn't mislead. But it was a close call.",
      imageSlug: '/images/asa.png',
    },
    {
      word: 'FCA (FINANCIAL CONDUCT AUTHORITY)',
      partOfSpeech: 'noun',
      definition: 'The UK body that regulates financial services and approves financial promotions. Any marketing for financial products must be FCA-approved before it can run.',
      example: "Marcus said: Can we use the phrase 'guaranteed returns' in the ad? Riley said: Absolutely not — the FCA prohibits any claim that implies investment returns are guaranteed. We need legal to review every line.",
      imageSlug: '/images/fca.png',
    },
    {
      word: 'GDPR (GENERAL DATA PROTECTION REGULATION)',
      partOfSpeech: 'noun',
      definition: 'EU law that controls how organisations collect, store, and use personal data. Marketing teams must comply with GDPR when collecting customer data or sending emails.',
      example: "We can't send that email list to the US agency without a data transfer agreement in place. GDPR doesn't stop at the EU border — the recipient's data handling standards must also be compliant.",
      imageSlug: '/images/gdpr.png',
    },
    {
      word: 'DISCLAIMER',
      partOfSpeech: 'noun',
      definition: 'A statement added to marketing content to limit claims, clarify conditions, or protect the brand from legal liability.',
      example: "The headline says 'lose 10kg in 30 days' — that needs a disclaimer immediately below it: 'Results may vary. This claim is based on a clinical study with specific dietary conditions.' Without that, we're in trouble with the ASA.",
      imageSlug: '/images/disclaimer.png',
    },
    {
      word: 'MISLEADING CLAIM',
      partOfSpeech: 'noun',
      definition: 'Any statement in advertising that creates a false impression — even if technically true. Regulators assess impact on the average consumer, not the literal meaning of words.',
      example: "The phrase '90% of users saw results' is a misleading claim if we don't say the study had only 20 participants. The statistic is true but the impression it creates is false. That's all the regulator needs.",
      imageSlug: '/images/misleading-claim.png',
    },
    {
      word: 'SUBSTANTIATION',
      partOfSpeech: 'noun',
      definition: 'The evidence that proves a claim in an ad is true. Regulators require that all factual claims can be substantiated before the ad runs.',
      example: "If you say 'the number one rated product in the category', you need substantiation — a credible, recent source that confirms that rating. If we get an ASA complaint and we can't produce the evidence, the ad comes down.",
      imageSlug: '/images/substantiation.png',
    },
    {
      word: 'COMPLIANCE REVIEW',
      partOfSpeech: 'noun',
      definition: 'A check of marketing content against legal, regulatory, and company policy requirements — usually done by the legal or compliance team before anything is published.',
      example: "Every piece of marketing copy goes through a compliance review before it goes live. It's not optional — it's part of the process. Riley said: Send the draft to legal by Tuesday. Compliance review takes three working days minimum.",
      imageSlug: '/images/compliance-review.png',
    },
    {
      word: 'LEGAL SIGN-OFF',
      partOfSpeech: 'noun',
      definition: 'Formal written approval from the legal team that a piece of content is compliant and can be published.',
      example: "Marcus said: Can we run the campaign tomorrow? Riley said: Not until we have legal sign-off. The financial promotion went to the FCA team this morning — we need their approval in writing before anything goes live.",
      imageSlug: '/images/legal-sign-off.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS CLAIM NEEDS SUBSTANTIATION',
      definition: 'A phrase used during a compliance review to flag that a statement in the copy requires supporting evidence before it can be approved.',
      example: "'This claim needs substantiation. You've written that the product is clinically proven — we need the clinical trial data, the publication, and confirmation that it meets the ASA's evidence standard for that claim type.'",
      imageSlug: '/images/this-claim-needs-substantiation.png',
    },
    {
      phrase: 'THIS FALLS OUTSIDE WHAT WE CAN SAY',
      definition: 'A phrase used by legal or compliance teams to reject a specific claim or phrase that doesn\'t meet regulatory requirements.',
      example: "Riley said: 'Best value in the market' — this falls outside what we can say unless we have a credible price comparison study to back it up. Change it to 'competitively priced' or remove it.",
      imageSlug: '/images/this-falls-outside-what-we-can-say.png',
    },
    {
      phrase: 'WE NEED LEGAL SIGN-OFF BEFORE THIS GOES LIVE',
      definition: 'A direct reminder that published marketing content must receive formal legal approval — used to stop premature publication.',
      example: "Marcus said: The client wants the campaign live by Friday. Riley said: We need legal sign-off before this goes live. The FCA submission was only made on Monday — three working days minimum. Friday is not realistic.",
      imageSlug: '/images/we-need-legal-sign-off.png',
    },
    {
      phrase: 'ADD A DISCLAIMER TO COVER [CLAIM]',
      definition: 'An instruction during copy review to add qualifying text that limits or contextualises a specific claim in the ad.',
      example: "'Add a disclaimer to cover the weight loss claim — something like: Individual results may vary. This is based on a study conducted under specific dietary and exercise conditions. Without it, the headline is misleading.'",
      imageSlug: '/images/add-a-disclaimer-to-cover.png',
    },
    {
      phrase: 'THIS COULD BE SEEN AS MISLEADING BECAUSE...',
      definition: 'A phrase used to flag copy that might create a false impression — even if it is technically true.',
      example: "Riley said: This could be seen as misleading because you've used the word 'free' but buried the conditions in very small print. The ASA looks at the overall impression, not the technical accuracy. Rewrite the headline.",
      imageSlug: '/images/this-could-be-seen-as-misleading.png',
    },
    {
      phrase: 'THIS IS SUBJECT TO [REGULATORY BODY] APPROVAL',
      definition: 'A phrase used in briefings and timelines to signal that content must be reviewed and approved by a regulator before it can be used.',
      example: "'The financial promotion copy is subject to FCA approval. We cannot include it in the media plan until we have a formal clearance letter. Build an extra week into the timeline.'",
      imageSlug: '/images/this-is-subject-to-regulatory-approval.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the creative team has sent the final copy for the financial services campaign. The headline is 'Guaranteed returns on every investment.' Can we use that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "No. Absolutely not. The [[FCA:the Financial Conduct Authority, which regulates financial services marketing]] prohibits any claim that suggests investment returns are guaranteed. That headline would never get [[legal sign-off:formal written approval from the legal team that content is compliant]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about 'Competitive returns with a proven track record'?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "'Proven track record' is a [[misleading claim:any statement that creates a false impression, even if technically true]] risk. We need [[substantiation:evidence that proves a claim is true]] for 'proven'. How many years of data? Against which benchmark? The [[ASA:the Advertising Standards Authority, which enforces advertising rules in the UK]] will ask those questions if there's a complaint.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "OK — 'Strong historical returns.' And we add a [[disclaimer:a statement that limits or qualifies a claim]] below.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Better. The disclaimer needs to say: 'Past performance does not guarantee future results. Capital at risk.' That's the minimum the FCA requires for any investment product ad.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the body copy includes our Net Promoter Score — '92% of clients would recommend us.' Is that fine?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That claim needs substantiation. When was the survey? How many respondents? Is the sample representative? We need the data in writing before the [[compliance review:a check of marketing content against regulatory requirements]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The survey was from 2022. Is that too old?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Four years old — that's a problem. A lot changes in four years. The [[ASA]] is likely to consider a 2022 study stale for a 2026 claim. This falls outside what we can say without a more recent data set.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So what do we do — remove the stat or update it?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Run a new survey — it'll take two weeks but it's worth it. In the meantime, replace the stat with a testimonial. A real quote from a real client is lower risk and doesn't require the same level of substantiation as a headline percentage claim.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And [[GDPR:EU law controlling how organisations collect and use personal data]] — we're collecting form data from the landing page. Do we need to do anything?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes. The form needs a clear consent checkbox, a link to the privacy policy, and a statement of how the data will be used. Don't launch the landing page without that — GDPR compliance isn't optional and the fines are significant.",
    }
  ],

  matchingExercise: [
    { "word": "ASA", "definition": "UK body that sets and enforces advertising standards and investigates complaints" },
    { "word": "FCA", "definition": "UK body that regulates financial services and must approve financial promotions" },
    { "word": "GDPR", "definition": "EU law controlling how organisations collect, store, and use personal data" },
    { "word": "disclaimer", "definition": "a statement added to marketing content to limit claims or clarify conditions" },
    { "word": "misleading claim", "definition": "any statement that creates a false impression, even if technically true" },
    { "word": "substantiation", "definition": "evidence that proves a factual claim in an ad is true" },
    { "word": "compliance review", "definition": "a check of marketing content against legal and regulatory requirements" },
    { "word": "legal sign-off", "definition": "formal written approval from the legal team that content is compliant to publish" }
  ],

  fillBlankExercise: [
    { "before": "The ad claims '9 out of 10 dentists recommend this product'. That's a bold claim — we need ", "after": " before it can run. Show me the study.", "answer": "substantiation" },
    { "before": "The campaign is for a financial product — it's subject to ", "after": " approval. We can't go live until they've cleared the copy.", "answer": "FCA" },
    { "before": "We're collecting customer email addresses on the landing page. Make sure the form includes a consent checkbox — it's required under ", "after": ".", "answer": "GDPR" },
    { "before": "The headline says 'Free delivery' but the terms say it's only free over £50. That could be a ", "after": " — the overall impression doesn't match the conditions.", "answer": "misleading claim" },
    { "before": "Add a ", "after": " under the results claim: 'Individual results may vary. Based on a 12-week study with controlled diet and exercise conditions.'", "answer": "disclaimer" },
    { "before": "We can't publish until we have ", "after": " from the legal team. The submission went in this morning — expect a response by Thursday.", "answer": "legal sign-off" }
  ],

  multipleChoiceExercise: [
    {
      "question": "Why does Riley say the '2022 NPS survey' can't be used to support a current advertising claim?",
      "options": [
        "NPS scores are not an accepted form of substantiation by the ASA",
        "A four-year-old study is likely too stale for the ASA to accept as evidence for a current claim",
        "The sample size would not be large enough for a financial services ad"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why is 'Guaranteed returns on every investment' not acceptable in a financial services ad?",
      "options": [
        "The FCA prohibits any claim suggesting investment returns are guaranteed",
        "The claim needs a disclaimer to be acceptable",
        "The phrase is too informal for the financial services sector"
      ],
      "correctIndex": 0
    },
    {
      "question": "What does Riley say is lower risk than using a percentage claim like '92% of clients would recommend us'?",
      "options": [
        "Removing the social proof entirely from the copy",
        "Using a real quote from a real client as a testimonial",
        "Adding a disclaimer below the percentage claim"
      ],
      "correctIndex": 1
    },
    {
      "question": "What three things does Riley say the GDPR landing page form must include?",
      "options": [
        "A cookie banner, a terms link, and a privacy policy",
        "A consent checkbox, a privacy policy link, and a statement of how data will be used",
        "A disclaimer, a terms and conditions page, and an email confirmation"
      ],
      "correctIndex": 1
    }
  ],

  warmUp: {
    "questions": [
      "Have you ever seen an ad that later turned out to be misleading — or that was banned or changed? What was the claim and why was it a problem?",
      "In your industry or country, are there specific rules about what you can and cannot say in advertising? Can you give an example?",
      "If you were writing an ad and weren't sure whether a claim was legal, what would you do?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "Every claim in the ad needs _____. We can't publish anything we can't prove.",
        "options": ["substantiation", "confirmation", "approval"],
        "correctIndex": 0,
        "explanation": "'Substantiation' is the specific regulatory term for the evidence that supports a factual claim in advertising. 'Confirmation' is informal and doesn't imply a regulatory standard. 'Approval' refers to sign-off from a team or body — it's a process step, not the evidence itself. When a regulator asks how you can prove a claim, the word is 'substantiation'."
      },
      {
        "sentence": "The headline implies the results are typical — but they're exceptional. That makes it a _____, even if every word is technically accurate.",
        "options": ["misleading claim", "false statement", "legal risk"],
        "correctIndex": 0,
        "explanation": "'Misleading claim' is the legal and regulatory term for a statement that creates a false impression — regardless of whether it is technically accurate. 'False statement' implies something untrue, which is different. 'Legal risk' is informal and describes a consequence, not the nature of the problem. Regulators assess 'misleading claims' based on overall impression, not literal accuracy."
      },
      {
        "sentence": "We're sending customer email data to our US partner. We need a transfer agreement in place — this is a _____ requirement.",
        "options": ["GDPR", "legal", "compliance"],
        "correctIndex": 0,
        "explanation": "'GDPR' is the specific regulation that governs cross-border personal data transfers. It requires specific safeguards when data moves outside the EU/EEA. 'Legal' is too vague — lots of things are legal requirements. 'Compliance' describes a function, not a regulation. When data crosses borders and involves EU personal data, the regulation is 'GDPR'."
      },
      {
        "sentence": "The campaign can't go live until we receive _____ from the FCA team.",
        "options": ["legal sign-off", "clearance", "permission"],
        "correctIndex": 0,
        "explanation": "'Legal sign-off' is the standard phrase for the written approval a legal or regulatory team gives before content is published. 'Clearance' is used in some contexts (especially broadcast) but is less precise in this regulatory context. 'Permission' is informal. When referring to the formal approval step before a regulated campaign goes live, use 'legal sign-off'."
      },
      {
        "sentence": "The results claim is bold. Add a _____ below it — something that explains the study conditions and says results may vary.",
        "options": ["disclaimer", "footnote", "caveat"],
        "correctIndex": 0,
        "explanation": "'Disclaimer' is the standard marketing and legal term for a statement that limits or qualifies a claim in an ad. 'Footnote' describes the position on the page — not the function. 'Caveat' is often used informally for the same concept but is not the standard regulatory term. When the requirement is to add qualifying text below a claim, the term is 'disclaimer'."
      },
      {
        "sentence": "The campaign is for an investment product. It must pass a _____ before the creative agency starts production.",
        "options": ["compliance review", "legal audit", "regulatory check"],
        "correctIndex": 0,
        "explanation": "'Compliance review' is the standard term for the process of checking marketing content against legal, regulatory, and internal policy requirements. 'Legal audit' typically refers to a broader review of business practices, not individual pieces of creative. 'Regulatory check' is informal. When marketing content is checked for compliance before publication, the process is a 'compliance review'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "The client wants to use the phrase 'the best investment product on the market'. Can we put that in the ad?",
          "options": [
            "It's a strong claim but it's probably fine if we believe it.",
            "No — 'best on the market' is a superlative claim that needs substantiation. Unless we have a credible, recent, independent comparison study that proves it, this falls outside what we can say. The ASA has upheld complaints on almost identical claims.",
            "We should ask the client — it's their brand and their decision."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives the correct regulatory answer — superlative claims like 'best on the market' require substantiation under ASA rules. Saying it's 'probably fine' (Option A) is reckless — the ASA upholds complaints on exactly this kind of claim. Referring the decision to the client (Option C) is not appropriate when the issue is a legal and regulatory one."
        },
        {
          "customerLine": "We need the landing page live by tomorrow. Can we skip the compliance review this time?",
          "options": [
            "OK — if it's just a landing page and not a full campaign, it's probably low risk.",
            "No. Every piece of customer-facing content goes through compliance review — landing pages included. If the form collects personal data, we also need to confirm GDPR compliance before it's live. I'll escalate to legal to see if we can fast-track it.",
            "I'll check with the legal team but I'm sure it'll be fine."
          ],
          "correctIndex": 1,
          "explanation": "Option B is firm and correct — no customer-facing content skips compliance review, and landing pages collecting personal data have additional GDPR requirements. Option A creates false risk categorisation. Option C is non-committal when the right answer is clear. When someone asks to skip a required process, the answer is no — with an offer to expedite, not to bypass."
        },
        {
          "customerLine": "The testimonial says our product 'cured my back pain'. Is that OK to use?",
          "options": [
            "Testimonials are always lower risk than brand claims — it's fine.",
            "Not as written. 'Cured' is a medical claim and would require clinical substantiation under ASA rules for health products. We can use the testimonial but reword it to something like 'significantly reduced my back pain' — and even then we need to ensure the experience is representative and not atypical.",
            "Ask the client if they have more testimonials — we'll pick the most suitable one."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives the right answer — medical language like 'cured' in marketing copy is tightly regulated. Even in a testimonial, the claim must not mislead and must be representative of typical user experience. Option A is false — testimonials still need to meet ASA standards. Option C defers instead of resolving the issue."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I've added the disclaimer at the very end of the document — on the last page." },
        { "speaker": "Riley", "text": "For a financial promotion, the disclaimer needs to appear near the claim it qualifies — not buried at the end. The FCA expects it to be prominent and legible." },
        { "speaker": "Marcus", "text": "Got it. And I've submitted the creative to the ASA for pre-approval before it goes live." },
        { "speaker": "Riley", "text": "The ASA doesn't offer pre-approval for most advertising. It's a complaints body — it investigates after something goes live. You may be thinking of the FCA, which does require pre-approval for financial promotions." },
        { "speaker": "Marcus", "text": "And I've written 'This product is guaranteed to improve your performance' — the client is confident in it so it should be fine." },
        { "speaker": "Riley", "text": "Client confidence is not substantiation. We need actual evidence — clinical data, independent research, or study results — before we can use any claim with 'guaranteed' or 'proven' in it." }
      ],
      "mistakes": [
        {
          "lineIndex": 0,
          "incorrectText": "I've added the disclaimer at the very end of the document — on the last page",
          "correction": "Disclaimers must appear near the claim they qualify — not buried at the end",
          "explanation": "Regulators assess whether disclaimers are prominent and proximate to the claims they modify. A disclaimer on the last page does not adequately qualify a headline claim on page one — the average reader won't see it. The ASA and FCA both require disclaimers to be legible and positioned close to the relevant claim."
        },
        {
          "lineIndex": 2,
          "incorrectText": "I've submitted the creative to the ASA for pre-approval before it goes live",
          "correction": "The ASA does not offer pre-approval — it's a complaints body. The FCA requires pre-approval for financial promotions.",
          "explanation": "This is a common misunderstanding. The ASA investigates complaints after advertising runs — it doesn't pre-approve creative (except in limited cases like broadcast advertising via Clearcast). Pre-approval for financial promotions is handled by the FCA, not the ASA."
        },
        {
          "lineIndex": 4,
          "incorrectText": "the client is confident in it so it should be fine",
          "correction": "Client confidence is not substantiation — you need actual evidence before making a guaranteed performance claim",
          "explanation": "Regulatory compliance is not determined by how confident a client feels about a claim. 'Guaranteed' is one of the most scrutinised words in advertising — it requires robust, verifiable evidence. The ASA has upheld complaints on exactly this kind of claim when brands couldn't produce adequate substantiation."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "The client wants to say their supplement 'burns fat fast'. Can we use that in the ad?",
          "salespersonStart": "That's a health claim and it will need substantiation before we can use it. The ASA requires that claims about physical effects on the body are backed by robust evidence — clinical trial data or peer-reviewed research. Without that...",
          "suggestedCompletion": "we can't use 'burns fat fast' in any form. We can say 'supports weight management as part of a balanced diet and exercise plan' — which is defensible and commonly approved. I'd recommend we get the client to share whatever clinical data they have and we'll assess what level of claim it supports."
        },
        {
          "customerLine": "We want to collect customer birth dates on the registration form. Is that OK?",
          "salespersonStart": "Under GDPR, we can only collect personal data that we actually need for a specified purpose. Collecting birth dates needs a clear justification — why do we need it, how will it be stored, and will we tell the customer clearly what it's for? If we can't answer those three questions with certainty...",
          "suggestedCompletion": "we shouldn't collect it. GDPR operates on the principle of data minimisation — only collect what you need. If age verification is the purpose, there are GDPR-compliant ways to do that without storing a full birth date. Let's ask the data team to review the form before we build it."
        },
        {
          "customerLine": "The creative team says the new FCA financial promotion is ready. Can it go live Monday?",
          "salespersonStart": "Not yet — we need legal sign-off before it goes live. FCA-regulated financial promotions must be reviewed and approved by a person who is FCA-authorised before they can run. Did legal receive the draft? If they got it today...",
          "suggestedCompletion": "the earliest realistic sign-off is Wednesday, assuming no changes are requested. If they need revisions, add another two working days. Monday is not achievable. I'll contact the legal team now to confirm receipt and get a timeline. Let the client know we're targeting Wednesday."
        }
      ]
    }
  },
};
