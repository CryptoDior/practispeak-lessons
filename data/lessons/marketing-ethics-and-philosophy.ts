import { Lesson } from '@/types/lesson';

export const marketingEthicsAndPhilosophy: Lesson = {
  slug: 'marketing-ethics-and-philosophy',
  title: 'Marketing Ethics and Philosophy',
  subtitle: 'How to think clearly about ethical questions in marketing — and defend your decisions',
  level: 'C1-C2',
  description: 'Marketing is persuasion — and persuasion raises ethical questions. Is it manipulation? Are you exploiting vulnerabilities? Are customers making real choices or just responding to pressure? These questions matter more than ever in an industry dealing with data, targeting, and the vast reach of digital media. This lesson gives you the vocabulary to think clearly about marketing ethics, have informed debates about difficult decisions, and articulate why some marketing practices are acceptable and others are not.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-ethics-and-philosophy-hero.png',

  vocabulary: [
    {
      word: 'UTILITARIANISM',
      partOfSpeech: 'noun',
      definition: 'The idea that the right action helps the most people.',
      example: 'Utilitarianism says the free test helps more people than it harms.',
      imageSlug: '/images/utilitarianism.png',
    },
    {
      word: 'VIRTUE ETHICS',
      partOfSpeech: 'noun',
      definition: 'The idea of doing what a good person would do.',
      example: 'Virtue ethics asks if an honest company would run this advert.',
      imageSlug: '/images/virtue-ethics.png',
    },
    {
      word: 'MANIPULATION',
      partOfSpeech: 'noun',
      definition: 'Influencing people in an unfair or hidden way.',
      example: 'Fake countdown timers are a form of manipulation.',
      imageSlug: '/images/manipulation-ethics.png',
    },
    {
      word: 'AUTONOMY',
      partOfSpeech: 'noun',
      definition: 'A person\'s right to make their own choices.',
      example: 'Clear prices respect customer autonomy.',
      imageSlug: '/images/autonomy-ethics.png',
    },
    {
      word: 'CONSENT',
      partOfSpeech: 'noun',
      definition: 'Clear permission from someone.',
      example: 'We need consent before we send marketing emails.',
      imageSlug: '/images/consent-marketing.png',
    },
    {
      word: 'DARK PATTERN',
      partOfSpeech: 'noun',
      definition: 'A website design that tricks people.',
      example: 'A hidden \'cancel\' button is a dark pattern.',
      imageSlug: '/images/dark-pattern.png',
    },
    {
      word: 'EXPLOITATION',
      partOfSpeech: 'noun',
      definition: 'Taking unfair advantage of people.',
      example: 'Selling loans to people in debt can be exploitation.',
      imageSlug: '/images/exploitation-ethics.png',
    },
    {
      word: 'TRANSPARENCY',
      partOfSpeech: 'noun',
      definition: 'Being open and honest.',
      example: 'Transparency about fees builds trust.',
      imageSlug: '/images/transparency-ethics.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHERE IS THE LINE BETWEEN PERSUASION AND MANIPULATION?',
      definition: 'A question about when marketing becomes unfair.',
      example: 'This advert uses fear. Where is the line between persuasion and manipulation?',
      imageSlug: '/images/where-is-the-line.png',
    },
    {
      phrase: 'THIS RESPECTS / VIOLATES CUSTOMER AUTONOMY',
      definition: 'A way to say if a practice lets people choose freely.',
      example: 'Auto-renewal without warning violates customer autonomy.',
      imageSlug: '/images/this-respects-violates-autonomy.png',
    },
    {
      phrase: 'THE UTILITARIAN CASE FOR THIS IS...',
      definition: 'A way to argue that something helps the most people.',
      example: 'The utilitarian case for this is that thousands save money.',
      imageSlug: '/images/the-utilitarian-case-for.png',
    },
    {
      phrase: 'WHAT WOULD A COMPANY OF GOOD CHARACTER DO HERE?',
      definition: 'A question to check if something is the right thing to do.',
      example: 'Before we decide, what would a company of good character do here?',
      imageSlug: '/images/what-would-a-company-of-good-character-do.png',
    },
    {
      phrase: 'THIS CROSSES AN ETHICAL LINE BECAUSE...',
      definition: 'A way to explain why something is wrong.',
      example: 'This crosses an ethical line because it targets children.',
      imageSlug: '/images/this-crosses-an-ethical-line-because.png',
    },
    {
      phrase: 'IS THE CUSTOMER MAKING A FREE AND INFORMED CHOICE?',
      definition: 'A question to check if customers really understand what they agree to.',
      example: 'With hidden fees, is the customer making a free and informed choice?',
      imageSlug: '/images/is-the-customer-making-a-free-choice.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, the product team wants to add a countdown timer to the checkout page — 'Only 2 left in stock!' But the product never runs out of stock. Is that a problem?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Yes. That's [[manipulation:influencing someone's decision through means that bypass their rational thinking]] — it creates false urgency to rush a decision. The customer can't make a [[autonomy:the customer's right to make their own free and informed decisions]] when they're being pushed by information that isn't true.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "The conversion rate goes up 12% when we use it. Isn't that a utilitarian argument — more sales mean more customers getting the product?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "[[Utilitarianism:the ethical idea that the right action produces the greatest benefit for the greatest number]] doesn't justify deception. A greater benefit achieved by creating false beliefs is manipulation, not persuasion. The 12% lift is real — but some percentage of those purchases are decisions customers would reverse if they knew the urgency was fabricated.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "The competitors all do this. It's standard in our industry.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That's not an ethical argument — that's an observation that bad practice is widespread. Ask the [[virtue ethics:the ethical idea that the right action is what a person of good character would do]] question: what would a company of good character do here? If our answer is 'whatever the competitors do', we've given up on having values.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "What about the email consent flow? Legal says it's compliant — the consent checkbox is there.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Is the customer making a free and informed choice? The checkbox is pre-ticked and the label is in grey text at the bottom of the form. Technically the [[consent:explicit agreement to be contacted or have data used]] is there. But is it real consent if the design is built to make people miss it?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "That sounds like a [[dark pattern:a design choice intentionally created to trick users into doing something unintended]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "It is. It might be legally defensible today — but regulators are catching up fast. And more importantly: is this the kind of company we want to be? [[Transparency:being open and honest with customers about what they're agreeing to]] isn't just an ethical choice — customers who trust you stay longer and refer others. The deceptive consent model has a short shelf life.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And the retargeting — we're targeting users who looked at depression medication. Is that [[exploitation:taking advantage of someone's vulnerability to influence their behaviour]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
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
