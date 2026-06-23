import { Lesson } from '@/types/lesson';

export const globalCampaignManagement: Lesson = {
  slug: 'global-campaign-management',
  title: 'Global Campaign Management',
  subtitle: 'How to manage international campaigns — balancing consistency, cultural relevance, and compliance',
  level: 'C1-C2',
  description: "Running a campaign in one market is hard. Running the same campaign across ten markets is a different challenge entirely. What works in one culture can fall flat — or cause real damage — in another. This lesson teaches the language of global campaign management: how to transcreate rather than just translate, how to build cultural intelligence into your process, and how to manage regional teams without losing brand consistency.",
  heroImage: '/images/global-campaign-management-hero.png',

  vocabulary: [
    {
      word: 'Transcreation',
      partOfSpeech: 'noun',
      definition: "Adapting marketing content for a new market so that it has the same emotional impact — not just the same words. Transcreation goes beyond translation to recreate the feeling, humour, or cultural reference that makes a campaign work.",
      example: "Riley said: Translation gives you the words. Transcreation gives you the effect. If a tagline is funny in English because of a wordplay that does not exist in Portuguese, translation will give you a flat sentence. Transcreation will find a new way to make someone in São Paulo laugh.",
      imageSlug: '/images/transcreation.png',
    },
    {
      word: 'Cultural intelligence',
      partOfSpeech: 'noun',
      definition: "The ability to understand how cultural differences affect communication, behaviour, and decision-making — and to use that understanding to work more effectively across cultures.",
      example: "Marcus said: Why did the campaign perform so differently in Japan versus Germany? Riley said: Cultural intelligence. Direct, bold claims work in some cultures. In others, humility and understatement perform better. Understanding that difference before you shoot the creative saves the budget and the relationship.",
      imageSlug: '/images/cultural-intelligence.png',
    },
    {
      word: 'Regional adaptation',
      partOfSpeech: 'noun',
      definition: "The process of adjusting a campaign's content, format, or messaging for a specific region — while keeping the brand strategy consistent. Regional adaptation is different from transcreation: it covers everything from imagery to channel selection to offer structure.",
      example: "Riley said: Regional adaptation is not just changing the language. It might mean choosing different spokespeople, different visual references, or even a different offer structure. In some markets, a discount drives action. In others, exclusivity works better.",
      imageSlug: '/images/regional-adaptation.png',
    },
    {
      word: 'Compliance',
      partOfSpeech: 'noun',
      definition: "Following the laws, regulations, and standards that govern advertising and marketing in each market. What is legal in one country may be restricted or banned in another — compliance protects the brand and avoids legal risk.",
      example: "Riley warned the team: Before we launch in France, we need compliance sign-off. Comparative advertising is highly regulated there. What we can say about competitors in the UK, we cannot say in France without specific evidence and legal approval.",
      imageSlug: '/images/compliance.png',
    },
    {
      word: 'Localisation',
      partOfSpeech: 'noun',
      definition: "Adapting a product, campaign, or piece of content for a local market — including language, format, currency, date style, imagery, and cultural references. Localisation is broader than translation and deeper than adaptation.",
      example: "Marcus said: We localised the campaign for the UAE — not just the language, but the imagery, the pricing in dirhams, the timing around Ramadan, and the channel mix. That is real localisation, not just running the English campaign with Arabic subtitles.",
      imageSlug: '/images/localisation.png',
    },
    {
      word: 'Brand consistency',
      partOfSpeech: 'noun',
      definition: "Presenting the same core identity, values, and visual language across all markets — even when the execution changes. Without brand consistency, customers in different countries experience different brands.",
      example: "Riley said: We can adapt the message for each market. But the logo, the colour palette, the tone of voice — those do not change. Brand consistency is what makes us recognisable in São Paulo and Singapore. Execution varies. Identity does not.",
      imageSlug: '/images/brand-consistency.png',
    },
    {
      word: 'Global brief',
      partOfSpeech: 'noun',
      definition: "A document that defines the strategy, objectives, and brand guidelines for a campaign that will run across multiple markets. The global brief is the foundation — regional teams adapt from it, not away from it.",
      example: "Riley said: Every global campaign starts with a global brief. It defines what we are trying to say, who we are saying it to, and what the brand experience must feel like — regardless of language or market. Regional teams take that brief and build their version within it.",
      imageSlug: '/images/global-brief.png',
    },
    {
      word: 'Heatmap',
      partOfSpeech: 'noun',
      definition: "A visual tool that shows where performance is strongest and weakest across markets, regions, or audience segments. In global campaign management, a heatmap helps identify where to invest more and where to investigate problems.",
      example: "Riley showed the global performance review: Look at the heatmap — green across Western Europe, red across Southeast Asia, and yellow in Latin America. That tells us exactly where to focus the next 30 days of optimisation effort.",
      imageSlug: '/images/heatmap.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "We need to transcreate, not just translate",
      definition: "A core principle of global campaign management — a direct instruction to adapt for emotional impact rather than just converting words. It is used when a translation would be technically accurate but culturally flat or ineffective.",
      example: "Riley looked at the translated tagline and said: This is technically correct but it lands completely flat in Spanish. We need to transcreate, not just translate. Get a native creative team in Madrid to give us something that works culturally — same feeling, different execution.",
      imageSlug: '/images/we-need-to-transcreate-not-just-translate.png',
    },
    {
      phrase: "Has this been through compliance?",
      definition: "A standard question in global campaign management before any content goes live. It ensures that marketing materials have been reviewed for legal and regulatory requirements in each specific market.",
      example: "Before the team signed off on the campaign for Germany, Riley asked: Has this been through compliance? The claims we make about performance need substantiation under German advertising law. We do not launch until legal has cleared it.",
      imageSlug: '/images/has-this-been-through-compliance.png',
    },
    {
      phrase: "What is the global brief saying on this?",
      definition: "A phrase used to redirect a regional debate back to the agreed global strategy. It reminds teams that the brief is the authority — regional preferences should not override strategic decisions made at the global level.",
      example: "The regional team wanted to use a different brand colour for their market. Riley said: What is the global brief saying on this? The visual identity is fixed — it is one of the non-negotiables. We can adapt the creative concept, but not the brand elements.",
      imageSlug: '/images/what-is-the-global-brief-saying-on-this.png',
    },
    {
      phrase: "What does the local team say?",
      definition: "A prompt to gather on-the-ground cultural intelligence before making a campaign decision for a specific market. It signals that global teams respect local expertise and do not impose decisions without consultation.",
      example: "Riley said before the Southeast Asia launch: What does the local team say about the imagery? The global creative uses direct eye contact, which can read as aggressive in some markets there. I want their sign-off on this before we brief the media buy.",
      imageSlug: '/images/what-does-the-local-team-say.png',
    },
    {
      phrase: "Build in regional flexibility from the start",
      definition: "A design principle for global campaigns — planning from the outset for the campaign to be adapted, not assuming the global version will work everywhere. It saves time, budget, and creative rework later.",
      example: "Riley briefed the creative agency: Build in regional flexibility from the start. Design the campaign so that the hero image, the tagline, and the offer can all be swapped out by regional teams without rebuilding the whole thing. Flexibility is not a weakness — it is a structural requirement.",
      imageSlug: '/images/build-in-regional-flexibility-from-the-start.png',
    },
    {
      phrase: "Where are we seeing the biggest performance gap across markets?",
      definition: "A diagnostic question for global campaign reviews — identifying which markets are underperforming relative to the benchmark and investigating why. It is the first step in global optimisation.",
      example: "Riley opened the quarterly review: Let's look at the heatmap. Where are we seeing the biggest performance gap across markets? Southeast Asia is red — conversion is 40% below the global average. That is our focus for Q3. I want a local team debrief before we make any changes.",
      imageSlug: '/images/where-are-we-seeing-the-biggest-performance-gap-across-markets.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, we are launching our biggest global campaign next quarter — 12 markets across four regions. The creative is done in English. What do we need to think about before we brief the regional teams?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "First: we need to transcreate, not just translate. [[Transcreation:adapting content for a new market so it has the same emotional impact, not just the same words]] means the Spanish or Japanese version needs to feel right in that culture — not just be technically accurate.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The tagline uses a wordplay in English that definitely will not translate. How do we handle that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is exactly the problem. Use a native creative team in each market to build the equivalent — same emotional landing, different execution. [[Cultural intelligence:the ability to understand how cultural differences affect communication and use it effectively]] is what tells you what that equivalent should be.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Should we have a [[global brief:a document that defines the strategy, objectives, and brand guidelines for a campaign across multiple markets]] that the regional teams adapt from?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Absolutely — and it has to be clear about what is fixed and what is flexible. [[Brand consistency:presenting the same core identity and values across all markets]] is non-negotiable. But the imagery, the offer structure, the channel mix — those can vary. Build in regional flexibility from the start.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about legal? We are making some strong product claims in the campaign.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "[[Compliance:following the laws and regulations that govern advertising in each market]] is market-by-market. Has this been through compliance in each territory? What you can claim in the UK is not automatically allowed in Germany or France. Legal review before launch — non-negotiable.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what about things like imagery, spokesperson choice, offer structure? The creative uses very direct, bold visuals.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is [[regional adaptation:adjusting a campaign's content, format, or messaging for a specific region while keeping brand strategy consistent]]. What does the local team say? In some Asian markets, directness reads as arrogance. We need local sign-off on the creative before we brief the media buy.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And once it is live — how do we track performance across twelve markets without drowning in data?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Use a [[heatmap:a visual tool that shows where performance is strongest and weakest across markets or regions]]. It shows you at a glance where we are green — strong performance — and where we are red. That tells you where to investigate, not where to assume.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And [[localisation:adapting a campaign for a local market including language, imagery, currency, and cultural references]] — how far does that go? Are we talking language only or everything?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Everything that needs to change for it to feel native. Language, pricing currency, seasonal timing, imagery. The English campaign with Arabic subtitles is not localisation — it is a shortcut that customers see through immediately.",
    }
  ],

  matchingExercise: [
    { word: 'transcreation', definition: 'adapting content for a new market so it has the same emotional impact, not just the same words' },
    { word: 'cultural intelligence', definition: 'the ability to understand how cultural differences affect communication and use it effectively' },
    { word: 'regional adaptation', definition: 'adjusting a campaign for a specific region while keeping brand strategy consistent' },
    { word: 'compliance', definition: 'following the laws and regulations that govern advertising in each market' },
    { word: 'localisation', definition: 'adapting a campaign for a local market including language, imagery, currency, and cultural references' },
    { word: 'brand consistency', definition: 'presenting the same core identity and values across all markets even when execution changes' },
    { word: 'global brief', definition: 'a document that defines strategy, objectives, and brand guidelines for a campaign across multiple markets' },
    { word: 'heatmap', definition: 'a visual tool that shows where performance is strongest and weakest across markets or regions' }
  ],

  fillBlankExercise: [
    { before: "Translation gives you the words. ", after: " gives you the emotional effect — the same feeling in a different language and culture.", answer: "Transcreation" },
    { before: "What is the global ", after: " saying on this? The visual identity is fixed — that is one of the non-negotiables.", answer: "brief" },
    { before: "Has this been through ", after: "? What we can claim in the UK is not automatically allowed in Germany.", answer: "compliance" },
    { before: "Build in regional ", after: " from the start — design the campaign so regional teams can adapt without rebuilding everything.", answer: "flexibility" },
    { before: "The heatmap shows red across Southeast Asia — that is where the biggest performance ", after: " is.", answer: "gap" },
    { before: "Real ", after: " means changing the language, the imagery, the pricing, and the cultural timing — not just adding subtitles.", answer: "localisation" }
  ],

  multipleChoiceExercise: [
    {
      question: "What is the difference between translation and transcreation?",
      options: ["Translation is faster and transcreation is more expensive", "Translation converts words accurately; transcreation recreates the emotional impact in a new cultural context", "Translation is for text and transcreation is for visual elements"],
      correctIndex: 1
    },
    {
      question: "What does Riley say about compliance when making product claims in a global campaign?",
      options: ["Claims approved in one market are generally acceptable in others", "Compliance is market-by-market — legal review is required before launch in each territory", "Compliance is mainly a concern in highly regulated markets like the US"],
      correctIndex: 1
    },
    {
      question: "What does Riley say is non-negotiable in the global brief?",
      options: ["The tagline and the hero image", "Brand identity elements like the logo, colour palette, and tone of voice", "The offer structure and pricing strategy"],
      correctIndex: 1
    },
    {
      question: "How does Riley recommend tracking performance across 12 markets?",
      options: ["A weekly report from each regional team submitted to head office", "A heatmap that shows at a glance where performance is strong and where it needs investigation", "A single global dashboard with one average metric across all markets"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Have you ever seen a campaign, product name, or slogan that failed badly in another culture — something that made sense in one language but was wrong, confusing, or offensive in another?",
      "When your company runs campaigns in multiple markets, how do you decide what is consistent across all markets and what local teams can adapt?",
      "What does cultural intelligence mean to you in your day-to-day work? Is it something you think about consciously when creating content or communicating with international teams?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "The tagline does not work in Japanese — we need to transcreate it, not just _____.",
        options: ["adapt it", "translate it", "localise it"],
        correctIndex: 1,
        explanation: "'Translate it' is the correct contrast here — the phrase 'transcreate, not just translate' is the standard way to express this principle. 'Adapt' is close but is used more for regional adaptation (changing format, imagery, offer) than for the linguistic and creative process of transcreation. The specific contrast with 'translate' makes the meaning clearest."
      },
      {
        sentence: "Before we launch in France, has the campaign been through _____?",
        options: ["legal approval", "compliance", "regulation review"],
        correctIndex: 1,
        explanation: "'Compliance' is the standard professional term for the process of ensuring marketing content follows the laws and regulations of a specific market. 'Legal approval' and 'regulation review' describe aspects of compliance but are not the single established term. 'Has this been through compliance?' is the fixed question used in global campaign management."
      },
      {
        sentence: "The logo, colour palette, and tone of voice are non-negotiable — that is our brand _____.",
        options: ["identity", "consistency", "guidelines"],
        correctIndex: 1,
        explanation: "'Brand consistency' is the specific term for the principle of presenting the same core identity across all markets. 'Brand identity' refers to the elements themselves (logo, palette, tone). 'Brand guidelines' is the document that defines those elements. 'Consistency' is the right word here because the sentence is about maintaining the same elements — not defining them."
      },
      {
        sentence: "Real _____ means changing the language, imagery, currency, and cultural timing — not just adding subtitles.",
        options: ["translation", "localisation", "adaptation"],
        correctIndex: 1,
        explanation: "'Localisation' is the comprehensive term for adapting everything — language, imagery, pricing, cultural timing — for a specific market. 'Translation' only covers language. 'Adaptation' is used for regional campaign adjustments but is less specific and less comprehensive than localisation. When the sentence lists all these elements together, 'localisation' is the right word."
      },
      {
        sentence: "The heatmap shows us at a glance where performance is _____ and where we need to investigate.",
        options: ["strong", "green", "high"],
        correctIndex: 1,
        explanation: "'Green' is the correct answer because a heatmap uses colour to signal performance — green means strong, red means weak. Saying 'green' in this context is idiomatic and specific to heatmap language. 'Strong' and 'high' are accurate descriptions but miss the heatmap metaphor that the sentence is using."
      },
      {
        sentence: "The global brief is the foundation — regional teams adapt _____ it, not away from it.",
        options: ["from", "within", "around"],
        correctIndex: 0,
        explanation: "'Adapt from it' is the correct phrase — it means using the global brief as the starting point and building regional versions based on it. 'Adapt within it' implies working inside constraints rather than starting from a foundation. 'Adapt around it' suggests bypassing or avoiding it — which is the opposite of the intended meaning."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the team member or stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "Can we just translate the English campaign and launch it across all twelve markets?",
          options: [
            "Yes — translation is fast and cost-efficient, and most customers understand the intent even if the words are not perfect.",
            "Not if we want it to work. We need to transcreate, not just translate — especially for the tagline and the emotional hook. Translation gives you the words. Transcreation gives you the effect. They are very different things.",
            "We could try it and see how it performs — then transcreate the markets where results are weak."
          ],
          correctIndex: 1,
          explanation: "Option B makes the distinction clearly and gives the reason — the emotional hook of a campaign cannot survive literal translation. Option A trades effectiveness for convenience, which will result in campaigns that land flat and budgets that are wasted. Option C is tempting but costly — launching a weak campaign in 12 markets and then fixing it is slower and more expensive than building correctly from the start."
        },
        {
          customerLine: "The regional team in Japan wants to completely change the creative concept. Can they?",
          options: [
            "What is the global brief saying on this? The concept may be adaptable — but if it touches brand identity elements like logo, colour, or tone of voice, those are fixed. Let's look at what specifically they want to change.",
            "Yes — local teams know their market best and we should trust their instinct.",
            "No — if we allow one market to change the concept, every other market will want to do the same."
          ],
          correctIndex: 0,
          explanation: "Option A asks the right clarifying question — not all changes are equal. Creative concept changes can be negotiated; brand identity changes cannot. Option B defers to local teams without protecting brand consistency, which is the role of global campaign management. Option C is too rigid — regional adaptation is a legitimate and necessary part of global campaigns."
        },
        {
          customerLine: "Our Southeast Asia performance is significantly below the global average. What do we do?",
          options: [
            "Reduce the media spend in that region and redirect it to higher-performing markets.",
            "Where are we seeing the biggest performance gap — is it conversion, engagement, or reach? Before we change the creative or the budget, I want a debrief with the local team. The problem could be the message, the channel, the offer, or a market factor we are not seeing from head office.",
            "Launch a different campaign in Southeast Asia with a different brief and creative entirely."],
          correctIndex: 1,
          explanation: "Option B diagnoses before acting — it asks where the gap is and seeks local intelligence before making any change. This is the correct global campaign management process. Option A gives up on the market without understanding why it is underperforming. Option C is a large, expensive decision that should only be made after diagnosis, not as an immediate response to a heatmap signal."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "We're going to localise the campaign for the UAE — we'll add Arabic subtitles to the English video and translate the landing page." },
        { speaker: "Riley", text: "That is not real localisation — it should include cultural timing like Ramadan, local imagery, and pricing in dirhams, not just language." },
        { speaker: "Marcus", text: "Understood. And for the legal claims, I'll get global compliance sign-off and that should cover us in all markets." },
        { speaker: "Riley", text: "No — compliance is market-by-market. Global sign-off does not cover each territory. You need local legal review for each market." },
        { speaker: "Marcus", text: "Got it. And for the tagline — we'll adapt it from English, not translate it, to make sure it has the same meaning across markets." },
        { speaker: "Riley", text: "Not just the same meaning — the same emotional impact. That is transcreation, not just adaptation. Meaning is not enough if the feeling is lost." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "add Arabic subtitles to the English video and translate the landing page",
          correction: "fully localise — cultural timing, local imagery, dirhams pricing, and native language creative",
          explanation: "Localisation is comprehensive — it covers language, imagery, cultural references, pricing in local currency, and timing around cultural events like Ramadan. Adding subtitles and translating text is translation, not localisation. Real localisation makes the campaign feel native to the market, not just readable."
        },
        {
          lineIndex: 2,
          incorrectText: "global compliance sign-off should cover us in all markets",
          correction: "compliance is market-by-market — each territory requires its own legal review",
          explanation: "Compliance is not a single global clearance — advertising laws, claim substantiation requirements, and content restrictions vary by market. What is legally permissible in the UK may be restricted in Germany or France. Each market requires its own compliance review before launch."
        },
        {
          lineIndex: 4,
          incorrectText: "make sure it has the same meaning",
          correction: "make sure it has the same emotional impact",
          explanation: "Transcreation is not about preserving meaning — it is about recreating emotional impact. A literal translation can preserve meaning while completely losing the feeling, humour, or cultural resonance that makes a tagline work. Transcreation finds the equivalent emotional effect in the new language and culture, even if the words are entirely different."
        }
      ]
    },
    finishTheLine: {
      instructions: "The global campaign manager starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "Can we use the same creative across all markets to save time and budget?",
          salespersonStart: "We can use the same global brief and brand elements — logo, colour, core message. But we need to build in regional flexibility from the start so that local teams can adapt...",
          suggestedCompletion: "the hero image, the tagline, and the offer structure for their market. If we design for flexibility now, the regional adaptation takes days, not months. And we protect brand consistency without forcing something culturally flat on twelve different audiences."
        },
        {
          customerLine: "The Japan team says the campaign feels too aggressive for their market.",
          salespersonStart: "That is valuable cultural intelligence — and we should take it seriously. What does the local team say specifically needs to change? The question is whether we are talking about...",
          suggestedCompletion: "the tone of the copy, the imagery, or the overall concept. Some of those we can adapt. Brand identity elements — logo, colour, core message — those are fixed. But if the execution feels wrong culturally, we transcreate. Same brief, different creative."
        },
        {
          customerLine: "Performance is red across three markets in the heatmap. What do we do?",
          salespersonStart: "Before we change anything, I want to understand where the performance gap is — conversion, engagement, or reach? And what does the local team say about why? The heatmap tells us where to look, not what to fix. Once we have the diagnosis...",
          suggestedCompletion: "we make targeted changes — maybe it is the offer structure, maybe it is the channel mix, maybe it is something happening in the market that we cannot see from head office. Investigation first, changes second."
        }
      ]
    }
  }
};
