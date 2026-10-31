import { Lesson } from '@/types/lesson';

export const globalCampaignManagement: Lesson = {
  slug: 'global-campaign-management',
  title: 'Global Campaign Management',
  subtitle: 'How to manage international campaigns — balancing consistency, cultural relevance, and compliance',
  level: 'C1-C2',
  description: "Running a campaign in one market is hard. Running the same campaign across ten markets is a different challenge entirely. What works in one culture can fall flat — or cause real damage — in another. This lesson teaches the language of global campaign management: how to transcreate rather than just translate, how to build cultural intelligence into your process, and how to manage regional teams without losing brand consistency.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-hero.png',

  vocabulary: [
    {
      word: 'Transcreation',
      partOfSpeech: 'noun',
      definition: 'Changing an advert for a new country so it keeps the same feeling.',
      example: 'The joke needed transcreation, not just translation.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-adapt-joke-keep-humour.png',
    },
    {
      word: 'Cultural intelligence',
      partOfSpeech: 'noun',
      definition: 'Understanding how cultures are different.',
      example: 'Good cultural intelligence stops big mistakes in new markets.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-local-insight-prevents-campaign-error.png',
    },
    {
      word: 'Regional adaptation',
      partOfSpeech: 'noun',
      definition: 'Changing a campaign to suit one region.',
      example: 'The Asian campaign needed some regional adaptation.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-regional-creative-adaptation-japan-example.png',
    },
    {
      word: 'Compliance',
      partOfSpeech: 'noun',
      definition: 'Following the rules and laws.',
      example: 'Every advert must pass a compliance check.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-advert-review-before-publication.png',
    },
    {
      word: 'Localization',
      partOfSpeech: 'noun',
      definition: 'Changing a product or message for a local market.',
      example: 'Localization means local prices, language and photos.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-local-language-price-photography.png',
    },
    {
      word: 'Brand consistency',
      partOfSpeech: 'noun',
      definition: 'Keeping a brand the same in every place.',
      example: 'Brand consistency means the same logo in every country.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-same-brand-mark-across-markets.png',
    },
    {
      word: 'Global brief',
      partOfSpeech: 'noun',
      definition: 'A document with the main plan for all countries.',
      example: 'The global brief sets the colors and the main message.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-master-colours-core-message.png',
    },
    {
      word: 'Heatmap',
      partOfSpeech: 'noun',
      definition: 'A colored chart that shows where results are strong or weak.',
      example: 'The heatmap shows that Spain is our weakest market.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-spain-weakest-colour-matrix.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "We need to transcreate, not just translate",
      definition: 'A way to say the message must feel right, not just be in a new language.',
      example: 'This slogan won\'t work in Japan. We need to transcreate, not just translate.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-japan-slogan-needs-creative-rewrite.png',
    },
    {
      phrase: "Has this been through compliance?",
      definition: 'A question to check that something follows the rules.',
      example: 'Before we post it, has this been through compliance?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-check-review-status-before-post.png',
    },
    {
      phrase: "What is the global brief saying on this?",
      definition: 'A question to check the main plan.',
      example: 'We disagree on colors. What is the global brief saying on this?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-consult-master-brief-colour-disagreement.png',
    },
    {
      phrase: "What does the local team say?",
      definition: 'A question to ask people in that country for advice.',
      example: 'Before we choose the photo, what does the local team say?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-consult-local-team-before-photo-choice.png',
    },
    {
      phrase: "Build in regional flexibility from the start",
      definition: 'A way to say plan for local changes early.',
      example: 'Build in regional flexibility from the start, so each country can adapt.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-fixed-core-flexible-regional-modules.png',
    },
    {
      phrase: "Where are we seeing the biggest performance gap across markets?",
      definition: 'A question about which country is doing worst.',
      example: 'Where are we seeing the biggest performance gap across markets?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/global-campaign-management-investigate-market-performance-gaps.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, we are launching our biggest global campaign next quarter — 12 markets across four regions. The creative is done in English. What do we need to think about before we brief the regional teams?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "First: we need to transcreate, not just translate. [[Transcreation:adapting content for a new market so it has the same emotional impact, not just the same words]] means the Spanish or Japanese version needs to feel right in that culture — not just be technically accurate.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "The tagline uses a wordplay in English that definitely will not translate. How do we handle that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That is exactly the problem. Use a native creative team in each market to build the equivalent — same emotional landing, different execution. [[Cultural intelligence:the ability to understand how cultural differences affect communication and use it effectively]] is what tells you what that equivalent should be.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Should we have a [[global brief:a document that defines the strategy, objectives, and brand guidelines for a campaign across multiple markets]] that the regional teams adapt from?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Absolutely — and it has to be clear about what is fixed and what is flexible. [[Brand consistency:presenting the same core identity and values across all markets]] is non-negotiable. But the imagery, the offer structure, the channel mix — those can vary. Build in regional flexibility from the start.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "What about legal? We are making some strong product claims in the campaign.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "[[Compliance:following the laws and regulations that govern advertising in each market]] is market-by-market. Has this been through compliance in each territory? What you can claim in the UK is not automatically allowed in Germany or France. Legal review before launch — non-negotiable.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And what about things like imagery, spokesperson choice, offer structure? The creative uses very direct, bold visuals.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That is [[regional adaptation:adjusting a campaign's content, format, or messaging for a specific region while keeping brand strategy consistent]]. What does the local team say? In some Asian markets, directness reads as arrogance. We need local sign-off on the creative before we brief the media buy.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And once it is live — how do we track performance across twelve markets without drowning in data?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Use a [[heatmap:a visual tool that shows where performance is strongest and weakest across markets or regions]]. It shows you at a glance where we are green — strong performance — and where we are red. That tells you where to investigate, not where to assume.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And [[localization:adapting a campaign for a local market including language, imagery, currency, and cultural references]] — how far does that go? Are we talking language only or everything?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Everything that needs to change for it to feel native. Language, pricing currency, seasonal timing, imagery. The English campaign with Arabic subtitles is not localization — it is a shortcut that customers see through immediately.",
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
      options: ["The tagline and the hero image", "Brand identity elements like the logo, color palette, and tone of voice", "The offer structure and pricing strategy"],
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
        options: ["adapt it", "translate it", "localize it"],
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
        sentence: "The logo, color palette, and tone of voice are non-negotiable — that is our brand _____.",
        options: ["identity", "consistency", "guidelines"],
        correctIndex: 1,
        explanation: "'Brand consistency' is the specific term for the principle of presenting the same core identity across all markets. 'Brand identity' refers to the elements themselves (logo, palette, tone). 'Brand guidelines' is the document that defines those elements. 'Consistency' is the right word here because the sentence is about maintaining the same elements — not defining them."
      },
      {
        sentence: "Real _____ means changing the language, imagery, currency, and cultural timing — not just adding subtitles.",
        options: ["translation", "localisation", "adaptation"],
        correctIndex: 1,
        explanation: "'Localization' is the comprehensive term for adapting everything — language, imagery, pricing, cultural timing — for a specific market. 'Translation' only covers language. 'Adaptation' is used for regional campaign adjustments but is less specific and less comprehensive than localization. When the sentence lists all these elements together, 'localization' is the right word."
      },
      {
        sentence: "The heatmap shows us at a glance where performance is _____ and where we need to investigate.",
        options: ["strong", "green", "high"],
        correctIndex: 1,
        explanation: "'Green' is the correct answer because a heatmap uses color to signal performance — green means strong, red means weak. Saying 'green' in this context is idiomatic and specific to heatmap language. 'Strong' and 'high' are accurate descriptions but miss the heatmap metaphor that the sentence is using."
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
            "What is the global brief saying on this? The concept may be adaptable — but if it touches brand identity elements like logo, color, or tone of voice, those are fixed. Let's look at what specifically they want to change.",
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
        { speaker: "Marcus", text: "We're going to localize the campaign for the UAE — we'll add Arabic subtitles to the English video and translate the landing page." },
        { speaker: "Riley", text: "That is not real localization — it should include cultural timing like Ramadan, local imagery, and pricing in dirhams, not just language." },
        { speaker: "Marcus", text: "Understood. And for the legal claims, I'll get global compliance sign-off and that should cover us in all markets." },
        { speaker: "Riley", text: "No — compliance is market-by-market. Global sign-off does not cover each territory. You need local legal review for each market." },
        { speaker: "Marcus", text: "Got it. And for the tagline — we'll adapt it from English, not translate it, to make sure it has the same meaning across markets." },
        { speaker: "Riley", text: "Not just the same meaning — the same emotional impact. That is transcreation, not just adaptation. Meaning is not enough if the feeling is lost." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "add Arabic subtitles to the English video and translate the landing page",
          correction: "fully localize — cultural timing, local imagery, dirhams pricing, and native language creative",
          explanation: "Localization is comprehensive — it covers language, imagery, cultural references, pricing in local currency, and timing around cultural events like Ramadan. Adding subtitles and translating text is translation, not localization. Real localization makes the campaign feel native to the market, not just readable."
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
          explanation: "Transcreation is not about preserving meaning — it is about recreating emotional impact. A literal translation can preserve meaning while completely losing the feeling, humor, or cultural resonance that makes a tagline work. Transcreation finds the equivalent emotional effect in the new language and culture, even if the words are entirely different."
        }
      ]
    },
    finishTheLine: {
      instructions: "The global campaign manager starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "Can we use the same creative across all markets to save time and budget?",
          salespersonStart: "We can use the same global brief and brand elements — logo, color, core message. But we need to build in regional flexibility from the start so that local teams can adapt...",
          suggestedCompletion: "the hero image, the tagline, and the offer structure for their market. If we design for flexibility now, the regional adaptation takes days, not months. And we protect brand consistency without forcing something culturally flat on twelve different audiences."
        },
        {
          customerLine: "The Japan team says the campaign feels too aggressive for their market.",
          salespersonStart: "That is valuable cultural intelligence — and we should take it seriously. What does the local team say specifically needs to change? The question is whether we are talking about...",
          suggestedCompletion: "the tone of the copy, the imagery, or the overall concept. Some of those we can adapt. Brand identity elements — logo, color, core message — those are fixed. But if the execution feels wrong culturally, we transcreate. Same brief, different creative."
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
