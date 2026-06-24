import { Lesson } from '@/types/lesson';

export const reviewMasteryLevelCommunication: Lesson = {
  slug: 'review-mastery-level-communication',
  title: 'Review: Mastery-Level Communication',
  subtitle: 'Consolidating your C2 vocabulary across all mastery topics',
  level: 'C1-C2',
  description: 'This review lesson brings together the key vocabulary from all 18 C2 Mastery lessons — from semiotics and board-level reporting to ethics, thought leadership, and cultural intelligence. Use it to check what you know, find the gaps, and practise using advanced vocabulary in context. By the end of this lesson, you should be able to move fluidly between topics and use C2-level language naturally in real professional conversations.',
  heroImage: '/images/review-mastery-level-communication-hero.png',

  vocabulary: [
    {
      word: 'SUBTEXT',
      partOfSpeech: 'noun',
      definition: 'The meaning beneath the surface of what is said — the real message behind the words.',
      example: "When the CEO said 'we value our current partners', the subtext was clear to everyone in the room: we are not looking for new agencies right now.",
      imageSlug: '/images/subtext.png',
    },
    {
      word: 'DISCOURSE',
      partOfSpeech: 'noun',
      definition: 'The language and conversation that surrounds a topic in society — the shared way people talk and think about an issue.',
      example: "The discourse around AI in marketing has shifted from fear about job losses to curiosity about what's possible. Language shapes that shift as much as the technology itself.",
      imageSlug: '/images/discourse.png',
    },
    {
      word: 'FIDUCIARY',
      partOfSpeech: 'adjective',
      definition: 'Related to a legal duty to act in someone else\'s best financial interest — typically used to describe the responsibility of a board to shareholders.',
      example: "The board has a fiduciary duty to shareholders — every major decision, including the rebrand budget, must be justifiable in terms of long-term financial value.",
      imageSlug: '/images/fiduciary.png',
    },
    {
      word: 'TRANSCREATION',
      partOfSpeech: 'noun',
      definition: 'Recreating a message in another language so that it has the same emotional effect — rather than translating it word for word.',
      example: "The campaign line needed transcreation for the Japanese market — the wordplay in English simply doesn't exist in Japanese, so the team wrote a completely new line that created the same feeling.",
      imageSlug: '/images/transcreation.png',
    },
    {
      word: 'MANIPULATION',
      partOfSpeech: 'noun',
      definition: 'Influencing someone\'s decision through means that bypass their rational thinking — such as false urgency, emotional exploitation, or hidden information.',
      example: "A countdown timer on a product that never runs out is manipulation — not persuasion. The distinction matters both ethically and legally.",
      imageSlug: '/images/manipulation-review.png',
    },
    {
      word: 'SIGNIFIER',
      partOfSpeech: 'noun',
      definition: 'The physical thing you see, hear, or read — the image, word, or symbol that carries a meaning.',
      example: "The golden arches are the signifier. The meaning of warmth, reliability, and convenience that they create — that is the signified. Both are part of the brand's semiotic system.",
      imageSlug: '/images/signifier-review.png',
    },
    {
      word: 'SHARE OF VOICE',
      partOfSpeech: 'noun',
      definition: 'Your brand\'s advertising spend as a percentage of all advertising spend in the category.',
      example: "Our share of voice is 18% but our market share is 25%. We are underinvesting relative to our market position — that gap will show in brand metrics within 12 months.",
      imageSlug: '/images/share-of-voice-review.png',
    },
    {
      word: 'AUTONOMY',
      partOfSpeech: 'noun',
      definition: 'The customer\'s right to make their own free and informed decisions without being manipulated or deceived.',
      example: "Dark patterns violate customer autonomy — they use design to override the customer's ability to make a genuine choice. Ethical marketing persuades; it doesn't manipulate.",
      imageSlug: '/images/autonomy-review.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'LET ME REFRAME THAT',
      definition: 'A phrase used to introduce a new perspective on an issue — presenting the same situation in a way that changes how the listener thinks about it.',
      example: "'Let me reframe that. You said the campaign underperformed. I'd say the campaign tested a new channel and gave us data that's worth £50k in avoided future mistakes. That's a different story.'",
      imageSlug: '/images/let-me-reframe-that.png',
    },
    {
      phrase: 'THE REAL QUESTION HERE IS...',
      definition: 'A phrase used to redirect a conversation away from a surface-level issue to the underlying decision or challenge.',
      example: "'The real question here is not whether the campaign was creative. The real question is whether it moved the metrics that matter for the business. Let's look at the data.'",
      imageSlug: '/images/the-real-question-here-is.png',
    },
    {
      phrase: 'LOCALISE, DON\'T JUST TRANSLATE',
      definition: 'A core principle of global marketing — effective market adaptation requires rethinking content culturally, not just converting the language.',
      example: "'Localise, don't just translate. The French market has different cultural values, a different visual register, and a different relationship to authority. A translated version of the English ad is not a local ad — it's an English ad in French.'",
      imageSlug: '/images/localise-dont-just-translate-review.png',
    },
    {
      phrase: 'THIS CROSSES AN ETHICAL LINE BECAUSE...',
      definition: 'A phrase used to explain clearly why a specific practice goes beyond what is acceptable — with a reason.',
      example: "'Targeting users who searched for mental health support with commercial advertising crosses an ethical line because it deliberately exploits vulnerability for commercial gain. That's not persuasion — it's exploitation.'",
      imageSlug: '/images/this-crosses-an-ethical-line-review.png',
    },
    {
      phrase: 'THE CONVENTIONAL WISDOM IS [X], BUT...',
      definition: 'A thought leadership structure — naming the widely held idea and then challenging it with original insight.',
      example: "'The conventional wisdom is that you need a large budget to build a strong brand. But our analysis of challenger brands over ten years shows that consistency of message matters more than size of spend — by a factor of three.'",
      imageSlug: '/images/the-conventional-wisdom-is-but-review.png',
    },
    {
      phrase: 'WHAT THIS MEANS IN PRACTICE IS...',
      definition: 'A phrase used to translate data, analysis, or abstract findings into concrete business impact.',
      example: "'Customer satisfaction has dropped 8 points. What this means in practice is we're losing approximately 200 customers a month to the competitor — that's £1.4m in annual revenue if we don't act now.'",
      imageSlug: '/images/what-this-means-in-practice-is-review.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I've been looking back at all 18 C2 lessons. There's a lot of vocabulary. How do I know which words I've really internalised and which ones I just recognise?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Simple test: can you use the word without thinking about it, in a real conversation? If you have to pause and remember the definition, it's recognition — not mastery. Mastery means it comes out naturally when you need it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Let me try. In semiotics — the [[signifier:the physical thing you see or hear that carries a meaning]] is the image or word itself. The meaning it creates in the viewer's mind is the [[signified:the concept or meaning created by the signifier]]. Have I got that right?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly right. Now connect it to something real — what's the signifier in our current campaign?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The dark blue colour and the geometric logo. The signified is trust, precision, and technology-forward thinking. That's what we want customers to read from it.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good. Now media buying — if our [[share of voice:brand advertising spend as a percentage of total category spend]] is below our market share, what does that mean for the brand long-term?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We'll lose market share — brand awareness will erode because we're not maintaining enough presence relative to our position. We need to reach [[SOV parity:when share of voice equals share of market]] before we can start growing.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good. Ethics — what's the difference between persuasion and [[manipulation:influencing someone through means that bypass rational thinking]]?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Persuasion gives people accurate information and compelling reasons to choose. Manipulation bypasses the customer's rational thinking — through false urgency, emotional exploitation, or hidden information. The test is whether the customer's [[autonomy:the right to make free and informed decisions]] is respected.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And multilingual marketing — the phrase?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Localise, don't just translate. [[Transcreation:recreating a message in another language so it has the same emotional effect]] is not translation — it's recreating the emotional impact in a different language and cultural context.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And the board communication principle?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Lead with the recommendation. Use brevity and precision. Cut the [[noise:words and sections that add length but not meaning]]. Make it a [[decision document:a document written specifically to help someone choose between options]] — not a report. The board doesn't need the full story; they need the decision and the evidence.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's mastery. You're not reciting definitions — you're using the language to think with. That's the real test.",
    }
  ],

  matchingExercise: [
    { "word": "subtext", "definition": "the real meaning beneath the surface of what is said" },
    { "word": "discourse", "definition": "the shared language and conversation that surrounds a topic in society" },
    { "word": "transcreation", "definition": "recreating a message in another language to achieve the same emotional effect" },
    { "word": "fiduciary", "definition": "related to a legal duty to act in someone else's best financial interest" },
    { "word": "signifier", "definition": "the physical image, word, or symbol that carries a meaning" },
    { "word": "share of voice", "definition": "your brand's advertising spend as a percentage of all category advertising spend" },
    { "word": "manipulation", "definition": "influencing someone's decision by bypassing their rational thinking" },
    { "word": "autonomy", "definition": "the customer's right to make free and informed decisions" }
  ],

  fillBlankExercise: [
    { "before": "The ad's logo and colour scheme are the ", "after": ". The feeling of trust they create in the viewer is the signified.", "answer": "signifier" },
    { "before": "Our ", "after": " is 22% but our market share is 30%. We're underinvesting — brand metrics will reflect that in 12 months.", "answer": "share of voice" },
    { "before": "The checkout has a hidden unsubscribe flow — that's ", "after": " of customer autonomy. We need to redesign it.", "answer": "violation" },
    { "before": "The strapline can't be translated word for word. It needs ", "after": " — recreating the emotional impact in French.", "answer": "transcreation" },
    { "before": "The board doesn't need the full background. Give them the ", "after": " — the recommendation, the options, and the trade-offs in one page.", "answer": "decision document" },
    { "before": "What he said was polite. But the ", "after": " was clear — he doesn't want us working on this account.", "answer": "subtext" }
  ],

  multipleChoiceExercise: [
    {
      "question": "What is the difference between recognition and mastery of vocabulary, according to Riley?",
      "options": [
        "Recognition means you've seen the word before; mastery means you can spell it correctly",
        "Recognition means you remember the definition; mastery means you use the word naturally without pausing to think",
        "Recognition is passive; mastery means you can translate the word into your own language"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Marcus say is the test for whether customer autonomy is respected?",
      "options": [
        "Whether the customer has technically been given access to all information",
        "Whether the customer would feel their ability to make a genuine, rational choice was respected",
        "Whether the marketing complies with the relevant regulations in each market"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Marcus say a board communication should look like?",
      "options": [
        "A detailed report with full background context, analysis, and supporting data",
        "A decision document — recommendation first, options and trade-offs, minimal noise",
        "A presentation with at least 20 slides covering every aspect of the topic"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say is the real test of vocabulary mastery?",
      "options": [
        "Being able to define the word correctly when asked",
        "Being able to use the word naturally in a real conversation without thinking about it",
        "Being able to recognise the word in a text and understand what it means"
      ],
      "correctIndex": 1
    }
  ],

  warmUp: {
    "questions": [
      "Looking back at the 18 C2 lessons, which area of vocabulary feels most natural to you now — and which still feels difficult?",
      "Think of a real professional situation where you could use one of the C2 vocabulary words from this lesson. What would you say?",
      "Is there a word or phrase from the C2 lessons that you've already used in a real conversation? How did it go?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "When she said 'the partnership has been very interesting', everyone understood the _____: the results were disappointing and she doesn't want to renew.",
        "options": ["subtext", "implication", "meaning"],
        "correctIndex": 0,
        "explanation": "'Subtext' is the meaning beneath the surface of what is said — the real message that isn't stated directly. It's particularly useful in high-context communication where politeness prevents direct criticism. 'Implication' is close but refers more to a logical conclusion. 'Meaning' is too general. When someone's polite words carry a very different real message, what's underneath is the 'subtext'."
      },
      {
        "sentence": "The campaign line is too creative for word-for-word translation — it needs _____ to work in Japanese.",
        "options": ["transcreation", "translation", "localisation"],
        "correctIndex": 0,
        "explanation": "'Transcreation' is specifically the process of recreating creative copy in another language so it achieves the same emotional effect — even if the words are completely different. 'Translation' is word-for-word or meaning-for-meaning conversion, which won't preserve the creative impact. 'Localisation' is broader and includes non-language adaptation. For creative copy that depends on wordplay, cultural references, or emotional tone, the process is 'transcreation'."
      },
      {
        "sentence": "The design makes it very hard to cancel — it violates customer _____ by overriding their ability to choose freely.",
        "options": ["autonomy", "rights", "freedom"],
        "correctIndex": 0,
        "explanation": "'Autonomy' is the philosophical and marketing ethics term for an individual's right to make their own free and informed decisions. In marketing ethics, respecting autonomy means designing experiences where customers genuinely choose — not where design pressure overrides choice. 'Rights' is broader and more legal. 'Freedom' is informal. When the ethical issue is whether a customer can make a genuine, uncoerced decision, the concept is 'autonomy'."
      },
      {
        "sentence": "The board document needs to be a _____ — not a report. Start with the recommendation, not the background.",
        "options": ["decision document", "brief", "executive report"],
        "correctIndex": 0,
        "explanation": "'Decision document' is the specific term for a business document written to help a reader make a clear choice — it presents options, a recommendation, and trade-offs in a format designed for a busy, senior audience. A 'brief' is typically a project or creative brief. An 'executive report' is informal. When writing for a C-suite or board audience focused on making a decision, the format is a 'decision document'."
      },
      {
        "sentence": "The golden arches are the _____. The feelings of familiarity and comfort they create are the signified.",
        "options": ["signifier", "symbol", "brand mark"],
        "correctIndex": 0,
        "explanation": "'Signifier' is the specific semiotic term for the physical element — the image, word, sound, or object — that carries a meaning. 'Symbol' is commonly used but is a broader term that includes both the signifier and its meaning. 'Brand mark' is a design term, not a semiotic one. In the context of semiotics and visual identity analysis, the physical logo or visual element is the 'signifier'."
      },
      {
        "sentence": "Our _____ is 18% but our market share is 25% — we're underinvesting and we'll see it in brand metrics within a year.",
        "options": ["share of voice", "media presence", "ad spend"],
        "correctIndex": 0,
        "explanation": "'Share of voice' is the standard media and marketing metric for your brand's advertising spend as a proportion of all advertising spend in the category. It's the metric used to compare how much you're investing in market presence relative to the competition. 'Media presence' is informal and unmeasurable. 'Ad spend' is the raw number — not the proportion. When comparing advertising investment against competitors, the metric is 'share of voice'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "I've been using a lot of the C2 vocabulary in meetings but I'm not sure if it sounds natural.",
          "options": [
            "Just keep practising — it will become natural over time.",
            "The test is whether you're using the vocabulary to think with, or just to impress. If you're choosing a word because it's the most precise way to express what you mean, that's natural mastery. If you're choosing it to sound advanced, the audience will feel the difference. What vocabulary are you most unsure about?",
            "Record yourself speaking and listen back — that will tell you if it sounds natural."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives the most useful and precise answer — it distinguishes between vocabulary used for precision versus vocabulary used to perform sophistication. Real mastery is about using the right word for the right reason, not about demonstrating knowledge. Option A is generic encouragement without guidance. Option C is a practical technique but doesn't address the underlying question of what natural use actually looks like."
        },
        {
          "customerLine": "What's the fastest way to consolidate all this C2 vocabulary?",
          "options": [
            "Make flashcards and review them every day until you know all the definitions.",
            "Use the vocabulary in real conversations and documents as quickly as possible — even if imperfectly. Definitions alone don't produce mastery. The words need to be attached to real professional situations where you had to choose them. When you use 'transcreation' in a brief, or 'share of voice' in a budget conversation, the word becomes yours.",
            "Read through all 18 lessons again from the beginning."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives the correct answer — active use in real professional contexts is what converts recognition into mastery. Passive review (flashcards, re-reading) builds familiarity but not fluency. Fluency comes from producing the language in context. Option A reinforces passive learning. Option C is useful for revision but not the fastest path to active mastery."
        },
        {
          "customerLine": "I sometimes forget which word to use — for example, is it 'manipulation' or 'dark pattern'?",
          "options": [
            "Both are acceptable — they mean basically the same thing.",
            "They overlap but they're different. 'Manipulation' is the broader ethical concept — influencing someone by bypassing their rational thinking. A 'dark pattern' is a specific type of manipulation in interface design — a deliberate design choice that tricks users. So dark patterns are a form of manipulation, but manipulation is broader. Use 'manipulation' for the ethical argument; use 'dark pattern' when talking specifically about interface design.",
            "Use whichever one comes to mind first — context will usually make it clear."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives a precise answer that clarifies the relationship between the two concepts. This is how you move from recognition to mastery — by understanding not just what words mean, but how they relate to each other and when each one is more precise. Option A incorrectly suggests they're interchangeable. Option C is not useful guidance for someone trying to use language precisely."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "In semiotics, the signifier is the concept or feeling the image creates in the viewer's mind." },
        { "speaker": "Riley", "text": "The signifier is the physical image itself — the thing you see. The concept or feeling it creates is the signified." },
        { "speaker": "Marcus", "text": "Got it. And in media buying, if our share of voice is higher than our market share, we are below SOV parity." },
        { "speaker": "Riley", "text": "It's the opposite — if your share of voice is higher than your market share, you are above SOV parity. That's where you grow market share. Below parity means your SOV is lower than your market share." },
        { "speaker": "Marcus", "text": "And back-translation means translating the original English document into another language, then checking the copy." },
        { "speaker": "Riley", "text": "Back-translation is the reverse — you take the already-translated version and translate it back into English to check that the meaning was preserved." }
      ],
      "mistakes": [
        {
          "lineIndex": 0,
          "incorrectText": "the signifier is the concept or feeling the image creates in the viewer's mind",
          "correction": "The signifier is the physical image itself — the thing you actually see; the concept or feeling created is the signified",
          "explanation": "Marcus has swapped the definitions. The signifier is always the physical element — the image, word, or symbol you see or hear. The signified is always the concept or meaning it creates in the viewer's mind. This is one of the most fundamental distinctions in semiotics."
        },
        {
          "lineIndex": 2,
          "incorrectText": "if our share of voice is higher than our market share, we are below SOV parity",
          "correction": "SOV higher than market share = above parity (where you grow); SOV lower than market share = below parity (where you lose ground)",
          "explanation": "Marcus has it exactly backwards. SOV parity means share of voice equals market share. Above parity means SOV exceeds market share — this is where brands typically buy market share growth. Below parity means SOV is lower than market share — this is where brands lose ground over time."
        },
        {
          "lineIndex": 4,
          "incorrectText": "back-translation means translating the original English document into another language, then checking the copy",
          "correction": "Back-translation means taking the already-translated version and translating it back into English to verify the meaning was preserved",
          "explanation": "Marcus has described forward translation, not back-translation. Back-translation is specifically the process of reversing a translation — taking the completed translated version and translating it back into the source language to check for meaning drift. It's a quality check tool, not the initial translation process."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "I want to write a thought leadership op-ed but I don't know where to start.",
          "salespersonStart": "Start with a point of view — one thing you believe that most people in your industry either agree or disagree with strongly. That tension is what makes an op-ed worth reading. Then ask: what's the conventional wisdom I'm challenging? Your piece should answer...",
          "suggestedCompletion": "'the conventional wisdom is X, but here's why it's wrong — and here's the evidence.' Keep it under 1,000 words, lead with your strongest argument, and land clearly on your position in the final paragraph. Don't present both sides without a conclusion — that's journalism, not thought leadership. An op-ed takes a position and defends it."
        },
        {
          "customerLine": "The brand is entering six new markets next year. What's the one thing we must not get wrong?",
          "salespersonStart": "Don't treat translation as localisation. Those are two completely different things. Translation converts language. Localisation rethinks the entire communication — values, visuals, cultural references, tone. For each of the six markets, you need a localisation brief before anything goes to a translator. The brief should cover...",
          "suggestedCompletion": "the target audience, the emotional response you're trying to create, the brand tone of voice as it should sound in that language, and a list of what cannot change and what must change. You should also run a back-translation on any creative copy before approving it. Getting this wrong in a major market is not just expensive — it can damage the brand in a way that takes years to recover from."
        },
        {
          "customerLine": "How do I know if what I'm doing is ethical marketing?",
          "salespersonStart": "There are two tests I always use. First: is the customer making a free and informed choice? Do they have the information they need, without false urgency, hidden terms, or manipulative design? Second — the virtue ethics test: what would a company of good character do here?...",
          "suggestedCompletion": "If you can honestly answer both questions positively, you're in good shape. If one of them makes you uncomfortable, that discomfort is telling you something important. Marketing that passes the legal test but fails the character test is where most ethical problems live. Build the habit of asking both questions before you launch anything, and you'll avoid most of the mistakes that create reputational and regulatory problems."
        }
      ]
    }
  },
};
