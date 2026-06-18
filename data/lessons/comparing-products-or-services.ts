import { Lesson } from '@/types/lesson';

export const comparingProductsOrServices: Lesson = {
  slug: 'comparing-products-or-services',
  title: 'Comparing Products or Services',
  subtitle: 'How to use comparatives and contrast phrases to handle competitor comparisons with confidence',
  level: 'B1-B2',
  description: "In B2B sales, customers rarely talk to just one vendor. When a customer says 'we are also looking at your competitor', how you respond in the next thirty seconds can win or lose the deal. This lesson teaches you the language of professional comparison — how to acknowledge a competitor's strengths, highlight your own advantages, and structure a contrast that makes the choice obvious.",
  heroImage: '/images/comparing-products-or-services-hero.png',

  vocabulary: [
    {
      word: 'CONTRAST',
      partOfSpeech: 'noun',
      definition: 'A clear difference between two things when they are compared directly. In sales, you use contrast to show why your solution is the better fit for this specific customer.',
      example: 'Riley said: The contrast between the two platforms becomes clear when you look at customisation. CompeteX offers fixed templates — we give you full control over every report.',
      imageSlug: '/images/contrast.png',
    },
    {
      word: 'DRAWBACK',
      partOfSpeech: 'noun',
      definition: "A disadvantage or negative aspect of something. Acknowledging a competitor's drawbacks honestly — without exaggerating — builds more trust than simply attacking them.",
      example: 'Marcus asked for an honest assessment. Riley said: The main drawback with CompeteX is their onboarding — it is charged separately and can add several thousand dollars to the first-year cost.',
      imageSlug: '/images/drawback.png',
    },
    {
      word: 'ALTERNATIVE',
      partOfSpeech: 'noun',
      definition: 'A different option that can replace the first choice. When a customer raises a concern, offering an alternative shows flexibility and keeps the conversation moving forward.',
      example: 'Marcus was not sure about the Standard Plan. Riley said: If that is not the right fit, we have a strong alternative — our Essentials Plan has fewer features but a significantly lower price point.',
      imageSlug: '/images/alternative.png',
    },
    {
      word: 'SUPERIOR',
      partOfSpeech: 'adjective',
      definition: "Better than something else in quality, performance, or value. Use 'superior' carefully — always back it up with evidence, or it sounds like an empty claim.",
      example: 'Riley did not just claim superiority — she proved it: Our onboarding satisfaction score is 94%, which is consistently superior to the industry average. I can share the data if you would like.',
      imageSlug: '/images/superior.png',
    },
    {
      word: 'TAILORED',
      partOfSpeech: 'adjective',
      definition: "Made or adjusted to fit a specific person, team, or situation exactly. A tailored solution is more valuable than a generic one because it solves the customer's specific problem.",
      example: 'Riley said: Unlike CompeteX, which serves everyone from small startups to global enterprises, our platform is tailored specifically to mid-size sales teams — which is exactly what you are.',
      imageSlug: '/images/tailored.png',
    },
    {
      word: 'OUTPERFORM',
      partOfSpeech: 'verb',
      definition: "To do better than something or someone in a measurable comparison. 'Outperform' is powerful because it implies evidence — use it when you have data to back it up.",
      example: 'Marcus asked for proof. Riley said: In the last three independent benchmarks, our platform outperformed CompeteX on speed, customisation, and customer satisfaction. I can send you the reports.',
      imageSlug: '/images/outperform.png',
    },
    {
      word: 'EQUIVALENT',
      partOfSpeech: 'adjective',
      definition: "Equal in value, function, or quality. Use 'equivalent' to show a customer that a higher price is justified because the total value — not just the features — is the same or better.",
      example: 'Marcus said CompeteX was cheaper. Riley replied: The upfront cost is lower, but when you add their onboarding fee and the add-ons you would need, the total is roughly equivalent to ours — with fewer features included.',
      imageSlug: '/images/equivalent.png',
    },
    {
      word: 'CRITERIA',
      partOfSpeech: 'noun',
      definition: "The standards or factors used to make a decision or comparison. Understanding a customer's criteria helps you frame your comparison around what actually matters to them.",
      example: 'Riley asked early in the conversation: What are the most important criteria for your team when choosing a platform? Marcus said: Customisation, support, and total cost. Riley said: Perfect — let me address each one.',
      imageSlug: '/images/criteria.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'COMPARED TO [X], OUR SOLUTION...',
      definition: 'The standard opener for a direct comparison. It positions your product alongside the competitor without sounding defensive. Always follow it with a specific, evidence-based claim.',
      example: 'Marcus mentioned CompeteX. Riley said: Compared to CompeteX, our solution is more tailored to mid-size sales teams. They serve the entire market — from startups to global enterprises. We focus on teams like yours.',
      imageSlug: '/images/compared-to-x-our-solution.png',
    },
    {
      phrase: 'WHEREAS [X] FOCUSES ON..., WE...',
      definition: "A formal contrast conjunction. 'Whereas' draws a clean line between two different approaches. It is more precise than 'but' and sounds more professional in a sales context.",
      example: 'Riley explained the key difference: Whereas CompeteX uses fixed reporting templates that cannot be changed, we give your team full control over every report — you can build exactly what your board needs.',
      imageSlug: '/images/whereas-x-focuses-on-we.png',
    },
    {
      phrase: 'ON THE OTHER HAND,...',
      definition: 'Used to introduce a contrasting point after making an initial claim. It shows balance — you acknowledge one side before revealing the other. This makes your comparison feel fair and trustworthy.',
      example: "Riley acknowledged the competitor's price: CompeteX is less expensive upfront — that is true. On the other hand, when you factor in the onboarding fee and the add-ons you would need, the total cost is comparable to ours.",
      imageSlug: '/images/on-the-other-hand.png',
    },
    {
      phrase: 'UNLIKE [X], WE...',
      definition: 'A direct contrast phrase that highlights a key differentiator. Use it to make your advantage stand out clearly. Always pair it with a specific benefit that matters to this customer.',
      example: 'Marcus asked about integration. Riley said: Unlike CompeteX, which requires a third-party tool for CRM integration, we connect directly with your existing systems — no additional configuration, no extra cost.',
      imageSlug: '/images/unlike-x-we.png',
    },
    {
      phrase: 'IN TERMS OF [CATEGORY], [X] IS...',
      definition: 'Use this to structure your comparison by category — price, features, support, integration. It signals that you are being methodical and thorough, which builds confidence in your analysis.',
      example: 'Riley walked Marcus through the comparison systematically: In terms of customisation, we are significantly ahead. In terms of price, we are comparable when you look at the total cost. In terms of support, we are in a different league.',
      imageSlug: '/images/in-terms-of-category-x-is.png',
    },
    {
      phrase: 'THE KEY DIFFERENCE IS...',
      definition: "A phrase that focuses the customer's attention on the single most important distinction. After a long comparison, this cuts through the noise and makes the choice clear.",
      example: 'Marcus was overwhelmed by the details. Riley simplified it: Look — the key difference is this. CompeteX gives you a product. We give you a partnership. That means dedicated support, customised onboarding, and a team that knows your business.',
      imageSlug: '/images/the-key-difference-is.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, I want to be transparent with you — we are also evaluating CompeteX. Can you help me understand the key differences?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'I appreciate your honesty, Marcus — and yes, absolutely. Let me walk you through a direct [[contrast:a clear difference between two things when they are compared]] between the two platforms.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Compared to CompeteX, our platform is more [[tailored:made or adjusted to fit a specific person or situation exactly]] to mid-size sales teams. They serve a much broader market — from small startups to global enterprises.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'CompeteX told us their reporting is industry-leading. That is a strong claim.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Their reporting is solid — I will give them that. However, whereas CompeteX uses fixed templates you cannot modify, our reporting is fully customisable. You can build exactly what your board needs.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That matters a lot for us — our board always asks for reports in a very specific format.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. And in terms of onboarding support, unlike CompeteX — who charge an additional fee — we include dedicated support for the first three months at no extra cost.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about price? CompeteX is less expensive.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Their upfront price is lower — that is true. On the other hand, when you factor in their onboarding fee and the add-ons you would need, the total is [[equivalent:equal in value, function, or quality]] to ours. Sometimes even higher.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I had not thought about the total cost that way. What about the main [[drawback:a disadvantage or negative aspect]] of your platform? Be honest.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Fair question. Our platform has a steeper learning curve in the first two weeks. It is more powerful, so there is more to learn. But that is why we provide three months of dedicated support.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And what about performance? CompeteX claim they [[outperform:to do better than something in a measurable comparison]] everyone.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'In three independent benchmarks this year, we outperformed CompeteX on customisation, integration speed, and customer satisfaction. I can send you the reports this afternoon.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'The key difference seems to be the customisation and the support. Those are our top [[criteria:the standards used to make a decision]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly — and those are where we are strongest. Shall I send you a side-by-side comparison document so you can share it with your team?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Yes please. That would be very helpful for our decision.',
    }
  ],

  matchingExercise: [
    {
        "word": "contrast",
        "definition": "a clear difference between two things when they are compared"
    },
    {
        "word": "drawback",
        "definition": "a disadvantage or negative aspect of something"
    },
    {
        "word": "alternative",
        "definition": "a different option that can replace the first choice"
    },
    {
        "word": "superior",
        "definition": "better than something else in quality or performance"
    },
    {
        "word": "tailored",
        "definition": "made or adjusted to fit a specific person or situation exactly"
    },
    {
        "word": "outperform",
        "definition": "to do better than something in a measurable comparison"
    },
    {
        "word": "equivalent",
        "definition": "equal in value, function, or quality"
    },
    {
        "word": "criteria",
        "definition": "the standards or factors used to make a decision"
    }
],
  fillBlankExercise: [
    {
        "before": "The main ",
        "after": " between the two platforms is how they handle custom reporting.",
        "answer": "contrast"
    },
    {
        "before": "The cheaper option has one significant ",
        "after": " — their onboarding support is charged as an extra fee.",
        "answer": "drawback"
    },
    {
        "before": "If the Standard Plan is not right for you, we have a strong ",
        "after": " that may suit your budget better.",
        "answer": "alternative"
    },
    {
        "before": "Our solution is ",
        "after": " to your team — we adapt it to fit your exact workflow and reporting needs.",
        "answer": "tailored"
    },
    {
        "before": "When you include all the add-ons, the total cost is roughly ",
        "after": " to ours.",
        "answer": "equivalent"
    },
    {
        "before": "In three independent benchmarks, we ",
        "after": " our main competitor on customisation and customer satisfaction.",
        "answer": "outperform"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is one key advantage of Riley's platform over CompeteX?",
        "options": [
            "It is less expensive upfront",
            "The reporting tools are fully customisable",
            "It has a simpler onboarding process"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say about CompeteX's total cost?",
        "options": [
            "It is much more expensive overall",
            "It is exactly the same price",
            "When you include add-ons and onboarding, it is comparable — sometimes higher"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Riley admit is a drawback of her own platform?",
        "options": [
            "The reporting tools are too basic",
            "It has a steeper learning curve in the first two weeks",
            "Integration with existing tools is difficult"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley offer to send Marcus at the end?",
        "options": [
            "A proposal with pricing",
            "The independent benchmark reports",
            "A side-by-side comparison document"
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "When you evaluate software, vendors, or suppliers at work, what criteria do you use to compare them — price, features, support, something else?",
        "Have you ever had to present a comparison of two options to your manager or team? How did you structure it?",
        "Think about a product or service you use at work. What would make you consider switching to a competitor? What would make you stay loyal?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "_____ CompeteX uses fixed templates, our reporting tools are fully customisable.",
            "options": [
                "Although",
                "Whereas",
                "Despite"
            ],
            "correctIndex": 1,
            "explanation": "'Whereas' is used to contrast two different facts or approaches within one sentence — it is more formal and precise than 'but'. 'Although' introduces a concession (something surprising given what came before), not a simple contrast. 'Despite' is followed by a noun or '-ing' verb, not a clause."
        },
        {
            "sentence": "Their upfront price is lower. _____, the total cost including add-ons is comparable to ours.",
            "options": [
                "However",
                "Therefore",
                "Moreover"
            ],
            "correctIndex": 0,
            "explanation": "'However' introduces a contrast or qualification after a previous statement — it is the right word when you are about to challenge or complicate what you just said. 'Therefore' shows a result or conclusion. 'Moreover' adds information that supports the previous point — the opposite of what we need here."
        },
        {
            "sentence": "_____ CompeteX, we include onboarding support at no extra cost.",
            "options": [
                "Compared to",
                "Unlike",
                "In contrast with"
            ],
            "correctIndex": 1,
            "explanation": "'Unlike' directly contrasts you with a named competitor — it is the most direct and punchy option. 'Compared to' works but is softer and implies a broader comparison. 'In contrast with' is grammatically correct but less natural in spoken sales conversations."
        },
        {
            "sentence": "In _____ of customisation, our platform is significantly ahead of the competition.",
            "options": [
                "terms",
                "ways",
                "aspects"
            ],
            "correctIndex": 0,
            "explanation": "'In terms of' is the fixed phrase for structuring a comparison by category — 'in terms of price', 'in terms of features', 'in terms of support'. 'In ways of' and 'in aspects of' are not standard English phrases."
        },
        {
            "sentence": "The _____ difference is the level of customisation we offer versus their fixed templates.",
            "options": [
                "main",
                "key",
                "big"
            ],
            "correctIndex": 1,
            "explanation": "'The key difference' is the professional phrase for highlighting the single most important distinction. Both 'main' and 'key' are commonly used, but 'key difference' is the more polished, standard expression in business English. 'Big difference' is informal and less precise."
        },
        {
            "sentence": "Our platform consistently _____ competitors on customer satisfaction scores.",
            "options": [
                "outperforms",
                "beats",
                "wins"
            ],
            "correctIndex": 0,
            "explanation": "'Outperforms' is the professional, data-driven word for doing better than a competitor — it implies measurable evidence. 'Beats' is informal and better suited to sport than business. 'Wins' does not work grammatically in this sentence structure."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the customer says. Choose the best response from the three options.",
        "items": [
            {
                "customerLine": "We are also evaluating CompeteX. They seem very similar to you.",
                "options": [
                    "We are completely different — CompeteX is a much weaker product.",
                    "I understand — they are a credible competitor. However, let me walk you through a few key differences that are particularly relevant for a team like yours.",
                    "Yes, we are quite similar in many ways. It is a difficult choice."
                ],
                "correctIndex": 1,
                "explanation": "Option B acknowledges the competitor with professionalism, then pivots immediately to a comparison framed around the customer's specific situation. Option A is aggressive and sounds defensive — dismissing a competitor without evidence destroys credibility. Option C concedes the comparison entirely and gives the customer no reason to choose you."
            },
            {
                "customerLine": "CompeteX told us their platform outperforms yours on processing speed.",
                "options": [
                    "That is simply not true — I do not know where they got that information.",
                    "Speed is one metric — and an important one. However, in terms of the metrics that matter most for your team — customisation and reporting — we consistently score higher. I can share the benchmark data with you.",
                    "I would have to look into that claim before I can respond."
                ],
                "correctIndex": 1,
                "explanation": "Option B handles the competitor claim professionally — it does not dismiss it, but redirects the conversation to the metrics that matter most for this specific customer. Option A is dismissive and could destroy trust if the customer believes the competitor. Option C is too weak — it signals a lack of confidence in your own product."
            },
            {
                "customerLine": "Honestly, price is our main concern. The features are secondary.",
                "options": [
                    "In that case, CompeteX might actually be a better fit for you.",
                    "Our product is actually very competitively priced.",
                    "I understand completely. However, when you compare the total cost — including their onboarding fee and the add-ons you would need — the difference is smaller than it appears. Could I show you a full cost breakdown?"
                ],
                "correctIndex": 2,
                "explanation": "Option C respects the customer's priority, then challenges the assumption with a more complete picture — this is how you handle a price objection without dismissing the concern. Option A gives up far too early. Option B is vague and does nothing to address the specific concern the customer just raised."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Alex",
                "text": "I know you are looking at CompeteX too. Let me help you compare the two options."
            },
            {
                "speaker": "Sam",
                "text": "Yes — their reporting tools seem very strong."
            },
            {
                "speaker": "Alex",
                "text": "Their reporting is solid. However, whereas CompeteX uses fixed templates, we give you fully customisable reports. We specialise on mid-size sales teams like yours."
            },
            {
                "speaker": "Sam",
                "text": "What about price? CompeteX looks more cheaper."
            },
            {
                "speaker": "Alex",
                "text": "Their upfront price is lower, yes. But when you factor in the add-ons, the total is roughly equivalent."
            },
            {
                "speaker": "Sam",
                "text": "So the key different is really the customisation and the support?"
            }
        ],
        "mistakes": [
            {
                "lineIndex": 2,
                "incorrectText": "specialise on",
                "correction": "specialise in",
                "explanation": "'Specialise' is always followed by 'in' — not 'on'. We say 'we specialise in sales software', 'they specialise in enterprise clients'. This applies broadly: 'expert in', 'experience in', 'background in'. 'Specialise on' is a direct translation error from many languages — it does not exist in English."
            },
            {
                "lineIndex": 3,
                "incorrectText": "more cheaper",
                "correction": "cheaper",
                "explanation": "'Cheaper' is already the comparative form of 'cheap' — adding 'more' creates a double comparative, which is not correct in standard English. Only use 'more' with adjectives of two or more syllables: 'more expensive', 'more tailored', 'more complex'. One-syllable adjectives always use '-er': 'cheap → cheaper', 'fast → faster'."
            },
            {
                "lineIndex": 5,
                "incorrectText": "different",
                "correction": "difference",
                "explanation": "'Different' is an adjective — it describes something. 'Difference' is the noun — it is the thing that separates two options. The phrase is always 'the key difference' or 'the main difference'. Using 'different' here is a word-form error — a very common mistake when the noun and adjective look similar."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The salesperson starts a sentence. Work with your partner to finish it naturally.",
        "items": [
            {
                "customerLine": "CompeteX is significantly cheaper. Why should we pay more for your platform?",
                "salespersonStart": "I completely understand the concern. On the other hand, when you factor in their onboarding fee and the add-ons you would need...",
                "suggestedCompletion": "the total cost is actually comparable to ours. And unlike CompeteX, we include three months of dedicated support from day one — so the value you get is significantly higher."
            },
            {
                "customerLine": "They told us their reporting tools are the best in the market.",
                "salespersonStart": "Their reporting is strong — I will not dispute that. However, whereas CompeteX uses fixed templates...",
                "suggestedCompletion": "our reports are fully customisable to your exact requirements. For a team that presents to senior stakeholders, that flexibility is not a nice-to-have — it is essential."
            },
            {
                "customerLine": "Can you give me a clear summary of how you are different?",
                "salespersonStart": "Absolutely. Compared to CompeteX, we are more tailored to mid-size sales teams. The key difference is...",
                "suggestedCompletion": "the level of customisation and the support model. They give you a product — we give you a partnership. I can send you a side-by-side document today if that would help your decision."
            }
        ]
    }
},
};
