import { Lesson } from '@/types/lesson';

export const theFutureOfMarketing: Lesson = {
  slug: 'the-future-of-marketing',
  title: 'The Future of Marketing',
  subtitle: 'How to talk about emerging trends, new technologies, and what comes next in marketing',
  level: 'C1-C2',
  description: 'The marketing landscape is changing faster than ever. Web3, AI, spatial computing, and the end of third-party cookies are not distant ideas — they are already reshaping how brands reach customers. Senior marketers need to understand these trends, talk about them confidently, and make strategic decisions in a world that looks very different from five years ago. This lesson gives you the vocabulary and the frameworks to do that.',
  heroImage: '/images/the-future-of-marketing-hero.png',

  vocabulary: [
    {
      word: 'WEB3',
      partOfSpeech: 'noun',
      definition: 'A version of the internet where users own their data and digital assets — built on blockchain technology. Still early stage but growing.',
      example: "Riley said: Web3 is not just about crypto. For brands, it's about new ways to build loyalty — like giving customers real ownership of their relationship with the brand.",
      imageSlug: '/images/web3.png',
    },
    {
      word: 'SPATIAL COMPUTING',
      partOfSpeech: 'noun',
      definition: 'Technology that blends the physical and digital worlds — augmented reality, virtual reality, and mixed reality.',
      example: "Marcus said: Spatial computing is going to change retail. A customer tries on a jacket in AR before buying it online — that's a real use case, happening now.",
      imageSlug: '/images/spatial-computing.png',
    },
    {
      word: 'DECENTRALISED',
      partOfSpeech: 'adjective',
      definition: 'Not controlled by one central organisation or platform. In marketing, it refers to systems where no single company owns the data or the relationship.',
      example: "Riley explained: A decentralised model means customers control their own data. Brands have to earn the relationship — they can't just buy it from a platform.",
      imageSlug: '/images/decentralised.png',
    },
    {
      word: 'AI-NATIVE',
      partOfSpeech: 'adjective',
      definition: 'Built from the start with artificial intelligence at the centre — not AI added on top of something older.',
      example: "Marcus said: Our competitors have added AI to an old platform. We need to build something AI-native — where intelligence is in every part of the product from day one.",
      imageSlug: '/images/ai-native.png',
    },
    {
      word: 'POST-COOKIE',
      partOfSpeech: 'adjective',
      definition: 'The era of digital marketing after third-party cookies are phased out — when brands can no longer track users across the web without their consent.',
      example: "Riley said: The post-cookie world is coming whether we're ready or not. We need a first-party data strategy — we collect data directly from our customers, not through third parties.",
      imageSlug: '/images/post-cookie.png',
    },
    {
      word: 'FIRST-PARTY DATA',
      partOfSpeech: 'noun',
      definition: 'Information collected directly from your own customers — through your website, app, or CRM. You own it and they have consented to share it.',
      example: "Marcus said: Our first-party data is the most valuable thing we own. Riley agreed: And it's going to become even more valuable in the post-cookie world.",
      imageSlug: '/images/first-party-data.png',
    },
    {
      word: 'SIGNAL',
      partOfSpeech: 'noun',
      definition: 'A piece of data that tells you something useful about a customer\'s behaviour, intent, or preferences.',
      example: "Riley said: In the old world, you had hundreds of signals from third-party cookies. In the post-cookie world, you have to be much smarter about how you collect and use the signals you have.",
      imageSlug: '/images/the-future-of-marketing-signal.png',
    },
    {
      word: 'DISRUPTION',
      partOfSpeech: 'noun',
      definition: 'A major change that forces an industry to adapt. Often caused by new technology or a new business model.',
      example: "Marcus said: Every decade, there's a major disruption in marketing — social media, mobile, now AI. The brands that adapt first always win.",
      imageSlug: '/images/disruption.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE SHIFT FROM [OLD] TO [NEW] IS...',
      definition: 'A phrase for describing a major change in direction. It sets up a before-and-after structure that makes the change easy to understand.',
      example: "Riley said: 'The shift from third-party data to first-party data is the most important structural change in digital marketing since the move to mobile.' One sentence. The whole trend.",
      imageSlug: '/images/the-shift-from-old-to-new-is.png',
    },
    {
      phrase: "WE'RE STILL IN THE EARLY STAGES OF...",
      definition: 'A phrase that acknowledges that a trend is real but not yet fully developed — it signals that you are watching it carefully without overstating its impact.',
      example: "Marcus said: We're still in the early stages of Web3 adoption in B2B. Riley said: Right — don't bet the business on it yet, but don't ignore it either.",
      imageSlug: '/images/were-still-in-the-early-stages-of.png',
    },
    {
      phrase: "THE BRANDS THAT WILL WIN ARE THE ONES THAT...",
      definition: 'A predictive phrase used to frame the future in competitive terms — what separates the winners from the losers.',
      example: "Riley said: The brands that will win in the post-cookie world are the ones that build genuine customer relationships — not the ones that just get better at tracking.",
      imageSlug: '/images/the-brands-that-will-win-are-the-ones-that.png',
    },
    {
      phrase: 'THE RISK OF FALLING BEHIND HERE IS...',
      definition: 'A phrase that frames inaction as a competitive threat — it motivates action by making the cost of waiting clear.',
      example: "'The risk of falling behind here is not theoretical. Three of our top competitors have already built AI-native content teams. We are 12 months behind.'",
      imageSlug: '/images/the-risk-of-falling-behind-here-is.png',
    },
    {
      phrase: "I'D ARGUE THAT [TREND] IS NOT A CHOICE — IT'S A...",
      definition: 'A phrase used to elevate a trend from optional to necessary — to argue that ignoring it is not a real option.',
      example: "Riley said: 'I'd argue that building a first-party data strategy is not a choice — it's a survival requirement. When third-party cookies go, brands without their own data will be flying blind.'",
      imageSlug: '/images/id-argue-that-trend-is-not-a-choice.png',
    },
    {
      phrase: "WHAT THIS MEANS FOR OUR BUSINESS IS...",
      definition: 'A phrase that connects a big trend to a specific, practical implication for your company. It makes abstract trends actionable.',
      example: "Riley said: Don't just describe the trend. Always say: 'What this means for our business is...' and follow it with a specific action or decision.",
      imageSlug: '/images/what-this-means-for-our-business-is.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the board has asked me to present on the future of marketing. Where do I even start?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Start with the biggest structural change — the [[post-cookie:the era after third-party cookies are phased out]] world. That is the change affecting every marketer right now, whether they're ready or not.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what's our answer to that? We currently rely heavily on third-party data.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "[[First-party data:information collected directly from your own customers — you own it]]. Start building it now. Every form, every interaction, every survey — that's data you own. The shift from bought data to owned data is the most important change in digital marketing right now.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about [[AI-native:built from the start with artificial intelligence at the centre]] tools? Should I address that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — and be honest. The brands that will win are the ones that build with AI from the start, not the ones that add it to an old process. What [[signal:a piece of data that tells you something useful about a customer]] do you have right now that AI could make more useful?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Purchase behaviour, email engagement, time on site. But we're not using it well.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's the opportunity. What about longer term? [[Web3:a version of the internet where users own their data and digital assets]]? [[Spatial computing:technology that blends physical and digital worlds]]?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We're still in the early stages of both. I don't want to overstate them to the board.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good instinct. Say exactly that: 'We're still in the early stages, but the direction is clear.' Don't oversell trends you can't yet act on. Credibility matters more.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And [[disruption:a major change that forces an industry to adapt]]? How do I frame the urgency without sounding alarmist?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Show the risk of falling behind — concretely. 'Three competitors have already launched AI-native content tools. We are 12 months behind them. Here is what we are doing about it.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[decentralised:not controlled by one central organisation]] web — where does that fit?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Connect it to the same theme: customers are taking back control of their data and their attention. The brands that build direct, trusted relationships will win. The brands that rely on platforms will be increasingly exposed.",
    }
  ],

  matchingExercise: [
    { "word": "Web3", "definition": "a version of the internet where users own their data and digital assets" },
    { "word": "spatial computing", "definition": "technology that blends the physical and digital worlds — AR, VR, mixed reality" },
    { "word": "decentralised", "definition": "not controlled by one central organisation — users own their data and relationships" },
    { "word": "AI-native", "definition": "built from the start with artificial intelligence at the centre" },
    { "word": "post-cookie", "definition": "the era of digital marketing after third-party tracking cookies are phased out" },
    { "word": "first-party data", "definition": "information collected directly from your own customers — you own it" },
    { "word": "signal", "definition": "a piece of data that tells you something useful about a customer's behaviour or intent" },
    { "word": "disruption", "definition": "a major change that forces an industry to adapt" }
  ],

  fillBlankExercise: [
    { "before": "In the ", "after": "-cookie world, brands that don't have their own customer data will be in serious trouble.", "answer": "post" },
    { "before": "We need to move from third-party data to ", "after": "-party data — information we collect directly from our customers.", "answer": "first" },
    { "before": "The platform is ", "after": "-native — AI is built into every part of it, not just added on top.", "answer": "AI" },
    { "before": "In a ", "after": " model, no single company controls the data. Users own their own information.", "answer": "decentralised" },
    { "before": "Don't oversell trends you can't act on yet. You'll lose credibility with the board if you ", "after": " every emerging technology.", "answer": "overstate" },
    { "before": "We are 12 months behind three competitors. The risk of falling ", "after": " here is real and growing.", "answer": "behind" }
  ],

  multipleChoiceExercise: [
    {
      "question": "What does Riley say is the most important structural change in digital marketing right now?",
      "options": [
        "The rise of AI-generated content",
        "The shift from third-party data to first-party data in the post-cookie world",
        "The growth of spatial computing and augmented reality"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why does Riley say Marcus should not oversell Web3 and spatial computing to the board?",
      "options": [
        "Because they are not relevant to B2B marketing",
        "Because the board does not understand technology trends",
        "Because they are still early stage and credibility matters more than trend-chasing"
      ],
      "correctIndex": 2
    },
    {
      "question": "What does Riley say the brands that will win in the post-cookie world have in common?",
      "options": [
        "They will have the best AI tools and the biggest budgets",
        "They build genuine direct relationships with customers rather than relying on platform tracking",
        "They will move first into Web3 and decentralised platforms"
      ],
      "correctIndex": 1
    },
    {
      "question": "How does Riley suggest framing the urgency of AI adoption without sounding alarmist?",
      "options": [
        "Show the financial cost of not adopting AI over the next five years",
        "Tell the board that AI is the only way to compete in the future",
        "Show concretely that competitors have already moved and name the gap in months"
      ],
      "correctIndex": 2
    }
  ],

  warmUp: {
    "questions": [
      "What is the biggest change you have seen in marketing in the last five years? How did you adapt to it?",
      "When you think about AI in marketing, what do you see as the biggest opportunity? And the biggest risk?",
      "Do you think brands should be on the cutting edge of new technology, or wait until it is proven? What is the risk of each approach?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "In the _____ world, brands can no longer track users across the web without their consent.",
        "options": ["post-cookie", "post-digital", "cookieless"],
        "correctIndex": 0,
        "explanation": "'Post-cookie' is the standard industry term for the era after third-party tracking cookies are removed. 'Post-digital' means something different — it refers to a world where digital is so embedded it is no longer distinct from the rest of life. 'Cookieless' is also used, but 'post-cookie' is the more widely used term in professional discussions."
      },
      {
        "sentence": "We need to build our _____ data strategy now — information collected directly from our customers, with their consent.",
        "options": ["first-party", "owned", "direct"],
        "correctIndex": 0,
        "explanation": "'First-party data' is the specific technical term for data collected directly from your own audience — as opposed to second-party data (shared by a partner) or third-party data (bought from external sources). 'Owned data' is informal. 'Direct data' is not a standard term. In digital marketing discussions, always use 'first-party data'."
      },
      {
        "sentence": "The platform is _____ — artificial intelligence is built into every function, not added on top later.",
        "options": ["AI-native", "AI-powered", "AI-enabled"],
        "correctIndex": 0,
        "explanation": "'AI-native' specifically means designed from the ground up with AI at the core. 'AI-powered' and 'AI-enabled' describe systems where AI has been added to something that existed before — they do not imply the same depth of integration. When a product is built around AI from day one, it is AI-native."
      },
      {
        "sentence": "In a _____ model, no single platform owns the customer relationship — users control their own data.",
        "options": ["decentralised", "distributed", "open"],
        "correctIndex": 0,
        "explanation": "'Decentralised' is the specific term from Web3 and blockchain discourse — it means control is spread across many parties rather than held by one central entity. 'Distributed' describes a technical architecture. 'Open' means accessible, but not specifically related to data ownership. When discussing the shift away from platform control, use 'decentralised'."
      },
      {
        "sentence": "Every interaction with a customer produces a _____ — a piece of data that tells you something about their intent or behaviour.",
        "options": ["signal", "data point", "indicator"],
        "correctIndex": 0,
        "explanation": "In the context of modern marketing and data strategy, 'signal' is the specific term for a data point that indicates customer behaviour, intent, or preference. It is particularly used in discussions of first-party data, AI, and post-cookie strategy. 'Data point' is broader. 'Indicator' is used in analytics but not with the same connotation in marketing."
      },
      {
        "sentence": "We're still _____ the early stages of Web3 — it's worth watching, but not worth betting the business on yet.",
        "options": ["in", "at", "within"],
        "correctIndex": 0,
        "explanation": "The fixed phrase is 'in the early stages of' — this is how you describe something that has started but is not yet fully developed. 'At the early stages' is used sometimes but is less natural. 'Within the early stages' is not standard. 'Still in the early stages' is the correct, natural professional expression."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "Should we be investing in Web3 right now?",
          "options": [
            "Absolutely — it's the future of brand loyalty.",
            "We're still in the early stages. I'd suggest a test-and-learn approach — a small pilot rather than a major investment. The direction is promising but the infrastructure isn't mature enough to bet heavily on yet.",
            "No — it's just hype. There's no proven ROI."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives a measured, credible answer — it acknowledges the potential without overstating it. This is how senior strategists talk about emerging technology. Option A overstates readiness and will lose credibility if the trend doesn't deliver. Option C is too dismissive — Web3 is real and growing, even if the timelines are uncertain."
        },
        {
          "customerLine": "Our whole targeting strategy depends on third-party cookies. What do we do when they're gone?",
          "options": [
            "We'll figure it out when it happens — everyone is in the same position.",
            "We need to start now. I'd argue a first-party data strategy is not a choice at this point — it's a survival requirement. Every customer interaction should be generating data we own and can use. The brands that have this in place before the change will have a significant advantage.",
            "We should invest in contextual advertising — that doesn't need cookies at all."
          ],
          "correctIndex": 1,
          "explanation": "Option B is the strongest response — it uses the 'not a choice' frame to create urgency, explains what first-party data means in practice, and frames action as competitive advantage. Option A is complacent. Option C suggests one tactic but doesn't address the broader strategic need."
        },
        {
          "customerLine": "How do I talk about AI trends to the board without sounding like I'm just following hype?",
          "options": [
            "Show them what competitors are already doing and name the gap. 'Three of our main competitors have launched AI-native tools in the last six months. We are 12 months behind. Here is our plan to close that gap.' That is concrete, not hype.",
            "Show them a list of all the AI tools available and explain how each one could be used.",
            "Tell them AI is transforming every industry and we need to be part of it."
          ],
          "correctIndex": 0,
          "explanation": "Option A is excellent — it grounds the AI discussion in competitive reality and offers a clear action. This is how you generate urgency without sounding alarmist. Option B is a feature list, not a strategy. Option C is generic — it says nothing specific and gives the board nothing to act on."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I need to present on the future of marketing. Where do I start?" },
        { "speaker": "Riley", "text": "Start with the post-cookie world. That is the biggest structural change happening right now." },
        { "speaker": "Marcus", "text": "And our answer to that? We should buy more third-party data to replace the cookies we'll lose." },
        { "speaker": "Riley", "text": "No — the answer is first-party data. Build direct relationships with your customers and own the data yourself." },
        { "speaker": "Marcus", "text": "What about Web3? I think we should make it the centrepiece of the presentation." },
        { "speaker": "Riley", "text": "Be careful. We're still in the early stages. Present it as something to watch, not something to bet on heavily yet." }
      ],
      "mistakes": [
        {
          "lineIndex": 2,
          "incorrectText": "We should buy more third-party data to replace the cookies we'll lose",
          "correction": "The answer to losing third-party cookies is building first-party data, not buying more third-party data",
          "explanation": "This is a strategic error. Buying more third-party data does not solve the problem — third-party data is exactly what is being phased out. The correct answer is to build first-party data: collect information directly from your own customers, with their consent, so you are not dependent on external sources."
        },
        {
          "lineIndex": 4,
          "incorrectText": "I think we should make it the centrepiece of the presentation",
          "correction": "Web3 should not be the centrepiece — it is still too early stage and speculative",
          "explanation": "This is a strategic error. Building a board presentation around Web3 risks losing credibility. Riley correctly corrects this — the right approach is to mention it as something to watch, not to build the whole narrative around it."
        },
        {
          "lineIndex": 0,
          "incorrectText": "Where do I start?",
          "correction": "This line is correct",
          "explanation": "This is a perfectly natural and correct question. The real mistakes are in lines 3 and 5."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "What should the core message of our future of marketing presentation be?",
          "salespersonStart": "The shift from rented audiences to owned relationships. In the old world, you could buy reach through platforms and cookies. In the new world...",
          "suggestedCompletion": "you have to earn it. First-party data, AI-native tools, and direct customer relationships are not optional — they are the foundation of every marketing strategy that will work in five years. The brands that start building now will win. The ones that wait will be starting from zero when the change hits."
        },
        {
          "customerLine": "How do I make the AI discussion concrete for the board?",
          "salespersonStart": "Don't talk about AI in the abstract — show them the gap. 'Three of our main competitors have already deployed AI-native content tools. What this means for our business is...'",
          "suggestedCompletion": "we are currently producing content at the speed of a human team. They are producing it at ten times that speed and at lower cost. We have 12 months to close the gap before it becomes a structural disadvantage."
        },
        {
          "customerLine": "What is the one thing every marketer needs to do differently in the next two years?",
          "salespersonStart": "Build a first-party data strategy. I'd argue it's not a choice — it's a survival requirement. Every time a customer interacts with your brand, ask yourself: am I...",
          "suggestedCompletion": "learning something I own? Are they consenting to share this data with me? Because when the third-party infrastructure disappears, the only brands with a future are the ones that already know their customers directly. That's the single most important thing you can do right now."
        }
      ]
    }
  },
};
