import { Lesson } from '@/types/lesson';

export const marketingEthicsAndPhilosophy: Lesson = {
  slug: 'marketing-ethics-and-philosophy',
  title: 'Marketing Ethics and Philosophy',
  subtitle: 'How to think clearly about ethical questions in marketing — and defend your decisions',
  level: 'C1-C2',
  description: 'Marketing is persuasion — and persuasion raises ethical questions. Is it manipulation? Are you exploiting vulnerabilities? Are customers making real choices or just responding to pressure? These questions matter more than ever in an industry dealing with data, targeting, and the vast reach of digital media. This lesson gives you the vocabulary to think clearly about marketing ethics, have informed debates about difficult decisions, and articulate why some marketing practices are acceptable and others are not.',
  heroImage: '/images/marketing-ethics-and-philosophy-hero.png',

  vocabulary: [
    {
      word: 'UTILITARIANISM',
      partOfSpeech: 'noun',
      definition: 'The ethical idea that the right action is the one that produces the greatest benefit for the greatest number of people. In marketing, it\'s often used to justify decisions that help most customers even if they disadvantage a few.',
      example: "Riley said: The targeting algorithm works for 95% of users — it shows them relevant content. But it over-exposes the remaining 5% to gambling ads. A utilitarian would say the net benefit justifies it. I'm not sure I agree.",
      imageSlug: '/images/utilitarianism.png',
    },
    {
      word: 'VIRTUE ETHICS',
      partOfSpeech: 'noun',
      definition: 'The ethical idea that the right action is the one that a person of good character would take. Instead of asking "what produces the best outcome?", it asks "what kind of company do we want to be?"',
      example: "Marcus said: Forget the legal question — ask the virtue ethics question. If we run this campaign, what does it say about us as a company? Would the people we respect most in this industry be proud of it?",
      imageSlug: '/images/virtue-ethics.png',
    },
    {
      word: 'MANIPULATION',
      partOfSpeech: 'noun',
      definition: 'Influencing someone\'s decision through means that bypass their rational thinking — such as creating false urgency, exploiting emotions, or hiding important information.',
      example: "Riley said: Using a countdown timer on a product that never actually runs out of stock is manipulation — it creates false urgency. Persuasion is fine. Persuasion that bypasses the customer's ability to think clearly crosses an ethical line.",
      imageSlug: '/images/manipulation-ethics.png',
    },
    {
      word: 'AUTONOMY',
      partOfSpeech: 'noun',
      definition: 'The customer\'s right to make their own free and informed decisions. Ethical marketing respects customer autonomy — it informs and persuades, but doesn\'t override the ability to choose.',
      example: "Marcus said: The dark pattern design is engineered to trick users into signing up for a subscription they didn't want. That violates their autonomy. Riley said: Exactly — and it's increasingly illegal under consumer protection law, not just ethically wrong.",
      imageSlug: '/images/autonomy-ethics.png',
    },
    {
      word: 'CONSENT',
      partOfSpeech: 'noun',
      definition: 'Explicit agreement from a customer to be contacted, have their data used, or receive a specific type of communication — freely given and clearly informed.',
      example: "Consent under GDPR must be freely given, specific, informed, and unambiguous. Pre-ticked boxes are not consent. A blanket terms and conditions document is not consent. A clear 'Yes, I would like to receive marketing emails' checkbox is consent.",
      imageSlug: '/images/consent-marketing.png',
    },
    {
      word: 'DARK PATTERN',
      partOfSpeech: 'noun',
      definition: 'A design or interface choice intentionally created to trick users into doing something they didn\'t intend to do — like signing up for a service, sharing more data, or making a purchase.',
      example: "Riley said: The unsubscribe flow has seven steps and the confirmation button is grey on a grey background. That's a dark pattern. The intent is to make it so difficult to unsubscribe that people give up. It's legal in some markets but it's ethically indefensible.",
      imageSlug: '/images/dark-pattern.png',
    },
    {
      word: 'EXPLOITATION',
      partOfSpeech: 'noun',
      definition: 'Taking advantage of someone\'s vulnerability, fear, or lack of knowledge to influence their behaviour — in a way they would object to if they were fully aware of it.',
      example: "Marketing to people in financial difficulty with high-interest credit products is exploitation — it targets people when they are least able to make good decisions and most likely to make harmful ones. The law is beginning to catch up with this, but many practices remain technically legal.",
      imageSlug: '/images/exploitation-ethics.png',
    },
    {
      word: 'TRANSPARENCY',
      partOfSpeech: 'noun',
      definition: 'Being open and honest with customers about what your product is, how it works, what it costs, and how their data is used — without hiding important information in fine print.',
      example: "Marcus said: The pricing on the website is transparent — you see the full cost before you check out. No hidden fees discovered at the end. Riley said: That's the minimum standard. True transparency means the customer understands what they're agreeing to, not just that the information was technically available.",
      imageSlug: '/images/transparency-ethics.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHERE IS THE LINE BETWEEN PERSUASION AND MANIPULATION?',
      definition: 'A question used to open a discussion about whether a specific marketing practice respects or exploits the customer\'s ability to decide freely.',
      example: "'Where is the line between persuasion and manipulation? A compelling story that makes someone want your product is persuasion. A countdown timer on a product that never actually runs out is manipulation — it creates a false belief that overrides rational choice.'",
      imageSlug: '/images/where-is-the-line.png',
    },
    {
      phrase: 'THIS RESPECTS / VIOLATES CUSTOMER AUTONOMY',
      definition: 'A phrase used to evaluate whether a marketing practice allows customers to make genuine, informed choices or interferes with their ability to do so.',
      example: "'A clear price comparison page with genuine alternatives respects customer autonomy — it gives people what they need to choose. A pre-selected add-on in the checkout that requires active effort to remove violates customer autonomy — it makes the default choice for you.'",
      imageSlug: '/images/this-respects-violates-autonomy.png',
    },
    {
      phrase: 'THE UTILITARIAN CASE FOR THIS IS...',
      definition: 'A phrase used to articulate the argument that a practice is justified because it produces the greatest benefit overall — even if it has some negative effects.',
      example: "'The utilitarian case for personalised advertising is that it shows relevant products to people who genuinely want them and reduces wasted exposure. The counterargument is whether the benefit to the majority justifies the privacy cost to all.'",
      imageSlug: '/images/the-utilitarian-case-for.png',
    },
    {
      phrase: 'WHAT WOULD A COMPANY OF GOOD CHARACTER DO HERE?',
      definition: 'A virtue ethics framing question — used to evaluate a decision based on what it says about the company\'s values, rather than what is legally permitted or financially optimal.',
      example: "Riley said: Forget what is legal. Forget what the competitors are doing. Ask a virtue ethics question: what would a company of good character do here? If the answer is different from what we're doing, we have a problem.",
      imageSlug: '/images/what-would-a-company-of-good-character-do.png',
    },
    {
      phrase: 'THIS CROSSES AN ETHICAL LINE BECAUSE...',
      definition: 'A phrase used to explain why a specific practice goes beyond what is acceptable — with a clear reason.',
      example: "'Targeting users who have recently searched for addiction recovery services with alcohol ads crosses an ethical line because it deliberately targets people in a vulnerable state with content that is actively harmful to them. The fact that it is legal doesn't make it acceptable.'",
      imageSlug: '/images/this-crosses-an-ethical-line-because.png',
    },
    {
      phrase: 'IS THE CUSTOMER MAKING A FREE AND INFORMED CHOICE?',
      definition: 'A direct test for whether a marketing practice respects customer autonomy — used to evaluate everything from data consent to pricing design.',
      example: "'Before we launch the checkout flow, ask this: is the customer making a free and informed choice? Do they understand what they're buying, what they're agreeing to, and what happens next? If the answer is no, we need to redesign before we go live.'",
      imageSlug: '/images/is-the-customer-making-a-free-choice.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the product team wants to add a countdown timer to the checkout page — 'Only 2 left in stock!' But the product never runs out of stock. Is that a problem?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes. That's [[manipulation:influencing someone's decision through means that bypass their rational thinking]] — it creates false urgency to rush a decision. The customer can't make a [[autonomy:the customer's right to make their own free and informed decisions]] when they're being pushed by information that isn't true.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The conversion rate goes up 12% when we use it. Isn't that a utilitarian argument — more sales mean more customers getting the product?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "[[Utilitarianism:the ethical idea that the right action produces the greatest benefit for the greatest number]] doesn't justify deception. A greater benefit achieved by creating false beliefs is manipulation, not persuasion. The 12% lift is real — but some percentage of those purchases are decisions customers would reverse if they knew the urgency was fabricated.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The competitors all do this. It's standard in our industry.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's not an ethical argument — that's an observation that bad practice is widespread. Ask the [[virtue ethics:the ethical idea that the right action is what a person of good character would do]] question: what would a company of good character do here? If our answer is 'whatever the competitors do', we've given up on having values.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about the email consent flow? Legal says it's compliant — the consent checkbox is there.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Is the customer making a free and informed choice? The checkbox is pre-ticked and the label is in grey text at the bottom of the form. Technically the [[consent:explicit agreement to be contacted or have data used]] is there. But is it real consent if the design is built to make people miss it?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That sounds like a [[dark pattern:a design choice intentionally created to trick users into doing something unintended]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It is. It might be legally defensible today — but regulators are catching up fast. And more importantly: is this the kind of company we want to be? [[Transparency:being open and honest with customers about what they're agreeing to]] isn't just an ethical choice — customers who trust you stay longer and refer others. The deceptive consent model has a short shelf life.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the retargeting — we're targeting users who looked at depression medication. Is that [[exploitation:taking advantage of someone's vulnerability to influence their behaviour]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That crosses an ethical line regardless of legality. Targeting people in a vulnerable mental state with commercial advertising takes advantage of a moment when they're least able to make good decisions. Whether it's technically allowed is the wrong question. Remove those segments.",
    }
  ],

  matchingExercise: [
    { "word": "utilitarianism", "definition": "the ethical idea that the right action produces the greatest benefit for the greatest number of people" },
    { "word": "virtue ethics", "definition": "the ethical idea that the right action is what a person or company of good character would do" },
    { "word": "manipulation", "definition": "influencing someone's decision through means that bypass their rational thinking" },
    { "word": "autonomy", "definition": "the customer's right to make their own free and informed decisions" },
    { "word": "consent", "definition": "explicit, freely given agreement from a customer to be contacted or have their data used" },
    { "word": "dark pattern", "definition": "a design or interface intentionally created to trick users into doing something they didn't intend" },
    { "word": "exploitation", "definition": "taking advantage of a customer's vulnerability or lack of knowledge to influence their behaviour" },
    { "word": "transparency", "definition": "being open and honest with customers about the product, pricing, and how their data is used" }
  ],

  fillBlankExercise: [
    { "before": "A countdown timer for a product that's always in stock is ", "after": " — it creates false urgency that bypasses the customer's ability to decide rationally.", "answer": "manipulation" },
    { "before": "Pre-ticked consent boxes are not valid ", "after": " under GDPR — it must be freely given, specific, and unambiguous.", "answer": "consent" },
    { "before": "We need to ask the ", "after": " ethics question: what would a company of good character do? Not 'what is our competitor doing?'", "answer": "virtue" },
    { "before": "The checkout design makes it very hard to remove the optional add-on — that's a ", "after": ". It violates customer autonomy by making the default hard to escape.", "answer": "dark pattern" },
    { "before": "Targeting people in financial difficulty with high-interest credit is ", "after": " — it takes advantage of vulnerability rather than serving a genuine need.", "answer": "exploitation" },
    { "before": "Good marketing respects customer ", "after": " — it informs and persuades, but doesn't take away the customer's ability to make a genuine choice.", "answer": "autonomy" }
  ],

  multipleChoiceExercise: [
    {
      "question": "Why does Riley say utilitarianism doesn't justify the false countdown timer?",
      "options": [
        "Because utilitarianism requires that the benefit goes to all users, not just some",
        "Because a benefit achieved through deception is manipulation, not persuasion — even if the outcome seems positive",
        "Because utilitarian ethics only applies to decisions that affect more than 50% of the audience"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why does Riley say the pre-ticked consent checkbox might not be real consent?",
      "options": [
        "Because pre-ticked boxes are illegal in all markets",
        "Because consent that the design is engineered to make customers miss is not truly free and informed",
        "Because the checkbox should be in a different colour to be legally valid"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why does Riley say targeting people who searched for depression medication crosses an ethical line?",
      "options": [
        "Because medical information is protected under GDPR and cannot be used for targeting",
        "Because it targets people in a vulnerable state when they are least able to make good decisions",
        "Because the retargeting pixel doesn't work accurately on medical websites"
      ],
      "correctIndex": 1
    },
    {
      "question": "What virtue ethics question does Riley suggest asking when evaluating a marketing decision?",
      "options": [
        "What produces the greatest benefit for the greatest number of customers?",
        "What would a company of good character do here?",
        "What does the law currently permit in our main markets?"
      ],
      "correctIndex": 1
    }
  ],

  warmUp: {
    "questions": [
      "Have you ever felt that an ad or a website was designed to trick you into doing something? What happened and how did you feel about the brand afterwards?",
      "Where do you personally draw the line between good marketing and manipulation? Is it about honesty? Respect? Something else?",
      "Do you think marketing companies have an ethical responsibility that goes beyond what the law requires? Or is following the law enough?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "The approach would benefit 90% of users significantly. The _____ case for it is strong — the net benefit clearly outweighs the cost.",
        "options": ["utilitarian", "ethical", "strategic"],
        "correctIndex": 0,
        "explanation": "'Utilitarian' is the precise philosophical term for the ethical position that the right action is the one producing the greatest benefit for the greatest number. 'Ethical' is too broad — all three frameworks (utilitarianism, virtue ethics, deontology) are ethical frameworks. 'Strategic' describes business logic, not an ethical position. When making the case that an action is right because of its net benefit across a population, the argument is 'utilitarian'."
      },
      {
        "sentence": "The design makes it nearly impossible to cancel a subscription. That's a _____ — it violates the user's right to choose freely.",
        "options": ["dark pattern", "UX error", "legal risk"],
        "correctIndex": 0,
        "explanation": "'Dark pattern' is the specific term for a design or interface element intentionally engineered to manipulate user behaviour — making it difficult to cancel, hiding important information, or obscuring choices. 'UX error' implies an unintentional design mistake, which is different from a deliberate dark pattern. 'Legal risk' describes a consequence, not the design practice itself. When a design is intentionally built to prevent users from making choices freely, it's a 'dark pattern'."
      },
      {
        "sentence": "Sending emails to people who didn't explicitly agree to receive them violates their _____. They didn't freely choose to hear from us.",
        "options": ["autonomy", "privacy", "rights"],
        "correctIndex": 0,
        "explanation": "'Autonomy' is the specific philosophical term for an individual's right to make their own free and informed choices. In marketing ethics, respecting autonomy means ensuring customers have genuinely chosen to engage — not been pushed or tricked. 'Privacy' refers to the right to control personal information, which is related but different. 'Rights' is too broad. When the issue is whether someone freely chose to be marketed to, the concept is 'autonomy'."
      },
      {
        "sentence": "Forget what is legal. Ask what a company of good character would do. That's the _____ ethics test.",
        "options": ["virtue", "moral", "character"],
        "correctIndex": 0,
        "explanation": "'Virtue ethics' is the specific philosophical tradition that evaluates actions based on the character of the actor — asking what a person or organisation of good values would do, rather than what produces the best outcome or follows a specific rule. 'Moral' is an adjective, not a specific ethical framework. 'Character' describes the concept but is not the name of the framework. When asking 'what kind of company do we want to be?', the framework is 'virtue ethics'."
      },
      {
        "sentence": "The brand is entirely _____: it shows the full price before checkout, explains data usage clearly, and never hides terms in small print.",
        "options": ["transparent", "honest", "compliant"],
        "correctIndex": 0,
        "explanation": "'Transparent' is the precise term for a company or practice that is open and clear about how it operates — prices, terms, data use, and processes. 'Honest' is close but broader and less specific to business practice. 'Compliant' means following the rules — which is not the same as transparency. A company can be compliant but still hide important information in technically accessible but practically invisible ways. 'Transparent' means genuinely open, not just legally compliant."
      },
      {
        "sentence": "Using a 'limited time offer' on a product that is always available is _____ — it creates a false belief to rush the customer's decision.",
        "options": ["manipulation", "persuasion", "advertising"],
        "correctIndex": 0,
        "explanation": "'Manipulation' is the specific ethical term for influencing someone's decision through means that bypass their rational thinking — including creating false urgency, exploiting emotions, or providing misleading information. 'Persuasion' is influence that works through legitimate means — accurate information, compelling stories, emotional connection — without deceiving the customer. 'Advertising' is neutral. The specific wrong done by a false urgency claim is 'manipulation'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "We're targeting users based on their health data to promote our wellness app. Is that acceptable?",
          "options": [
            "If users consented to data use in the terms and conditions, it's probably fine.",
            "That raises serious ethical concerns. Health data is sensitive — people shared it for a health purpose, not to receive advertising. Even if the consent was technically obtained, we need to ask whether users would feel their autonomy was respected if they understood how their data was being used. I'd recommend a clear, specific consent mechanism that explains the exact use — and a review of whether we want to be the kind of company that monetises health data this way.",
            "It depends on the regulations in each market — get legal to check."
          ],
          "correctIndex": 1,
          "explanation": "Option B raises the ethical question clearly, applies the autonomy and virtue ethics tests, and proposes the right action — genuine consent and a company values question. Option A conflates buried terms agreement with real informed consent. Option C refers to legal compliance, which is the minimum standard, not the ethical standard. This question requires an ethical answer, not a legal one."
        },
        {
          "customerLine": "The ad performs better when we create urgency — 'Offer ends tonight!' We've been doing it for years.",
          "options": [
            "If the offer genuinely ends tonight, urgency is legitimate persuasion. If it doesn't, it's manipulation. The test is whether it's true. 'We've been doing it for years' is not a defence — it just means we've been doing it for years.",
            "Urgency is a standard marketing tactic — every brand uses it.",
            "As long as it's disclosed in the terms somewhere, it's legally defensible."
          ],
          "correctIndex": 0,
          "explanation": "Option A draws the correct ethical distinction — the morality of urgency depends on whether it's true. Legitimate scarcity or deadlines are honest persuasion. False urgency is manipulation. The answer is precise and principled. Option B appeals to industry norm, which is not an ethical justification. Option C reduces the question to legality."
        },
        {
          "customerLine": "Our competitor is using dark patterns to keep users subscribed. Should we do the same to stay competitive?",
          "options": [
            "Not necessarily — but we should monitor what they're doing.",
            "No. What would a company of good character do here? Competing on dark patterns means competing on who can manipulate customers most effectively. That's not a business model I'd recommend. There's also a practical argument: regulatory scrutiny on dark patterns is increasing rapidly. We're better off building a cancellation flow that's so good customers feel respected — that creates loyalty, not resentment.",
            "If they're doing it and staying competitive, we probably need to consider it."
          ],
          "correctIndex": 1,
          "explanation": "Option B applies the virtue ethics test explicitly, rejects the competitive norm argument, and adds a practical forward-looking point about regulatory risk. This is a complete ethical and strategic answer. Option A delays rather than answers. Option C uses competitive behaviour as justification, which is circular reasoning — if competitors are behaving badly, that doesn't make it right."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I've added a consent checkbox to the email sign-up form — it's pre-ticked, so users can opt out if they want." },
        { "speaker": "Riley", "text": "Pre-ticked boxes are not valid consent under GDPR — consent must be actively given, not assumed by default." },
        { "speaker": "Marcus", "text": "I'm also using a countdown timer on the sale page — the offer genuinely ends tonight, so that's manipulation." },
        { "speaker": "Riley", "text": "If the offer genuinely ends tonight, a countdown timer is honest persuasion, not manipulation. Manipulation involves creating false urgency or false beliefs." },
        { "speaker": "Marcus", "text": "And the campaign targets people who have recently searched for gambling addiction support. The utilitarian case is strong — we're reaching a very precise audience." },
        { "speaker": "Riley", "text": "Targeting people in vulnerable situations — like those seeking addiction help — crosses an ethical line regardless of how precise the targeting is. The utilitarian calculation doesn't override basic ethical protections for vulnerable people." }
      ],
      "mistakes": [
        {
          "lineIndex": 0,
          "incorrectText": "it's pre-ticked, so users can opt out if they want",
          "correction": "Pre-ticked boxes are not valid consent — users must actively opt in; consent cannot be pre-assumed",
          "explanation": "Under GDPR and broader ethical consent standards, a pre-ticked box assumes consent rather than obtaining it. Real consent must be freely given — meaning the user takes an active step to agree. The ability to opt out after the fact is not the same as genuine informed consent."
        },
        {
          "lineIndex": 2,
          "incorrectText": "the offer genuinely ends tonight, so that's manipulation",
          "correction": "A genuine deadline is honest persuasion, not manipulation — manipulation involves false urgency or deception",
          "explanation": "Marcus has confused persuasion with manipulation. If the offer genuinely ends tonight, telling customers that is accurate information that helps them make an informed decision. That's legitimate persuasion. Manipulation specifically involves creating false impressions — false urgency, fabricated scarcity, or deceiving customers about the actual situation."
        },
        {
          "lineIndex": 4,
          "incorrectText": "The utilitarian case is strong — we're reaching a very precise audience",
          "correction": "Targeting people seeking addiction help crosses an ethical line — utility of precision targeting does not justify exploiting vulnerability",
          "explanation": "Marcus has misapplied utilitarianism. Targeting precision is not a utilitarian benefit that justifies the practice — the harm to vulnerable people cannot simply be offset by the advertiser's precision. Deliberately targeting people seeking help with addiction with commercial advertising is exploitation, which crosses ethical lines that utilitarianism alone cannot override."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "We could increase conversion by 20% if we hid the cancellation option and made it difficult to find. Is it worth it?",
          "salespersonStart": "No. That's a dark pattern — a design choice that tricks users into staying when they've decided to leave. It violates customer autonomy and it's legally risky as regulators across the EU and US are specifically targeting this practice. But beyond the legal question, ask the virtue ethics test: is this...",
          "suggestedCompletion": "the kind of company we want to be? Customers who can't leave easily and feel trapped will churn with hostility — they'll write bad reviews and warn others. The short-term conversion gain becomes a long-term brand and retention problem. The better investment is making the product good enough that people choose to stay. That's the sustainable model."
        },
        {
          "customerLine": "The team is debating whether personalised advertising is ethical. What do you think?",
          "salespersonStart": "It depends on how it's done. There's a meaningful difference between personalisation that shows relevant products based on stated preferences — which respects autonomy and is genuinely useful — and personalisation that exploits behavioural data users didn't knowingly provide, targets emotional vulnerabilities, or manipulates decisions. The ethical test is...",
          "suggestedCompletion": "whether the customer would feel respected or used if they fully understood how the personalisation worked. If the answer is 'used', we have a problem. Personalisation based on explicit preferences and transparent data use can be a genuine service. Personalisation that relies on covert data collection and psychological targeting crosses into manipulation. The distinction matters and we should be on the right side of it."
        },
        {
          "customerLine": "Isn't all marketing manipulation — you're always trying to influence what people buy?",
          "salespersonStart": "There's an important distinction between persuasion and manipulation. Persuasion works through legitimate means — accurate information, genuine emotional connection, compelling demonstrations of value. It respects the customer's rational capacity and gives them what they need to make a good choice. Manipulation bypasses that rational capacity...",
          "suggestedCompletion": "by creating false beliefs, exploiting emotions, hiding information, or using psychological pressure techniques to override rather than inform the decision. Marketing is inevitably persuasion — that's not manipulative by definition. But when we use techniques specifically designed to prevent clear thinking or exploit vulnerability, we've crossed from persuasion into manipulation. The distinction is real, it matters, and it's the line professional marketers should be consciously holding."
        }
      ]
    }
  },
};
