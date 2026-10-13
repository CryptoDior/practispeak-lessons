import { Lesson } from '@/types/lesson';

export const socialMediaAdvertising: Lesson = {
  slug: 'social-media-advertising',
  title: 'Social Media Advertising',
  subtitle: 'How to talk about paid social campaigns, targeting, and ad performance',
  level: 'B1-B2',
  description: "Social media advertising is one of the fastest-growing areas of marketing. Platforms like Meta, LinkedIn, and TikTok allow you to reach specific audiences with paid ads — targeting people by their job title, interests, location, and behaviour. To work confidently in this area, you need to understand the vocabulary that marketing teams use to plan, run, and review paid social campaigns. This lesson teaches you the most important terms and phrases in social media advertising.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-hero.png',

  vocabulary: [
    {
      word: 'AD SET',
      partOfSpeech: 'noun',
      definition: 'A group of ads inside a campaign with its own audience, budget, and dates.',
      example: 'Each ad set has its own audience and budget.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-ad-set.png',
    },
    {
      word: 'TARGETING',
      partOfSpeech: 'noun',
      definition: 'Choosing which groups of people will see your ads.',
      example: 'Our targeting is very specific, with managers in the UK and Germany.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-targeting.png',
    },
    {
      word: 'CPM',
      partOfSpeech: 'abbreviation',
      definition: 'The price you pay each time your ad is shown 1,000 times.',
      example: 'The CPM is £12 on LinkedIn but only £4 on Meta.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-cpm.png',
    },
    {
      word: 'CPC',
      partOfSpeech: 'abbreviation',
      definition: 'The price you pay each time someone clicks on your ad.',
      example: 'The best ad has a CPC of £2.20, so we should add budget.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-cpc.png',
    },
    {
      word: 'LOOKALIKE AUDIENCE',
      partOfSpeech: 'noun',
      definition: 'A group of new people who are similar to your current customers.',
      example: 'Let\'s build a lookalike audience from our top 200 customers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-lookalike-audience.png',
    },
    {
      word: 'CREATIVE',
      partOfSpeech: 'noun',
      definition: 'The image, video, and words that make up an ad.',
      example: 'The creative with the running video got a much higher click rate.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-creative.png',
    },
    {
      word: 'FREQUENCY',
      partOfSpeech: 'noun',
      definition: 'The average number of times one person sees the same ad.',
      example: 'The frequency is now 7.2, and the click rate is falling.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-frequency.png',
    },
    {
      word: 'CONVERSION',
      partOfSpeech: 'noun',
      definition: 'An action you want a person to take after seeing your ad.',
      example: 'Every demo request counts as one conversion.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-conversion-social.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "WE'RE TARGETING [AUDIENCE] ON [PLATFORM]",
      definition: 'A phrase you use to say which people you reach and where.',
      example: 'We\'re targeting marketing directors on LinkedIn and a lookalike audience on Meta.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-targeting-audience-on-platform.png',
    },
    {
      phrase: "THE CPM FOR THIS CAMPAIGN IS...",
      definition: 'A phrase you use to report the price of showing ads to 1,000 people.',
      example: 'The CPM for this campaign is £12 on LinkedIn and £4 on Meta.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-cpm-for-this-campaign.png',
    },
    {
      phrase: "LET'S TEST TWO VERSIONS OF THE CREATIVE",
      definition: 'A way to suggest comparing two ads to see which works better.',
      example: 'Let\'s test two versions of the creative, one photo and one video.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-test-two-versions.png',
    },
    {
      phrase: 'THE FREQUENCY IS TOO HIGH',
      definition: 'A phrase you use when people have seen the same ad too many times.',
      example: 'The frequency is too high, so people are ignoring our shoe ad.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-frequency-too-high.png',
    },
    {
      phrase: 'OUR LOOKALIKE AUDIENCE IS BASED ON...',
      definition: 'A way to say which customers you used to find similar people.',
      example: 'Our lookalike audience is based on our top 200 customers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-lookalike-audience-based-on.png',
    },
    {
      phrase: 'THE CPC ON THIS AD SET IS...',
      definition: 'A way to report the cost of each click for a group of ads.',
      example: 'The CPC on this ad set is £2.20 for marketing managers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/social-media-advertising-cpc-on-this-ad-set.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, let's review the paid social campaign. Start with how it is structured.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "We have one campaign with three [[ad set:a group of ads sharing the same targeting, budget, and schedule]]s. Each ad set targets a different audience — marketing managers on LinkedIn, a [[lookalike audience:an audience of new people similar to your existing customers]] based on our top customers on Meta, and a retargeting set for website visitors.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good structure. Walk me through the [[targeting:the process of choosing which people see your ads]] on LinkedIn.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "We are targeting marketing managers and directors at companies with 50 to 500 employees in the UK and Germany. Estimated audience is 180,000 people. The [[CPM:cost per thousand impressions — how much you pay for every 1,000 times your ad is shown]] for this campaign is £12 on LinkedIn — typical for that platform.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[CPC:cost per click — how much you pay each time someone clicks your ad]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "The CPC on the LinkedIn ad set is £3.40 — within target. But the Meta lookalike ad set is performing much better at £2.20 per click. I want to move more budget there.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What is the lookalike audience based on?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Our lookalike audience is based on our top 200 customers by lifetime value. The platform finds people with similar demographics and behaviour. It is our best-performing audience — 94 [[conversion:the action you wanted — a demo request, a sign-up, a purchase]]s so far at £31 per demo, against a target of £50.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is strong. What about the retargeting set — how is that performing?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "There is a problem with it. The [[frequency:the average number of times each person has seen your ad]] has reached 7.2 — people are seeing the same ad seven times on average. The frequency is too high and the click-through rate has dropped 40% as a result.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Ad fatigue. What is the fix?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Two things. First, let's test two versions of the [[creative:the actual ad content — image, video, headline, and copy]] — I want to try a 15-second video versus the current static image. Second, I will expand the retargeting audience to include people who visited any page in the last 90 days, not just the last 30 — that will reduce frequency significantly.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good plan. What is the overall cost per conversion across all three ad sets?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "94 conversions total at £42 per conversion — 16% better than our £50 target. If I move budget away from the underperforming retargeting set and towards the lookalike set, I think we can get to 120 conversions at under £40 each within the same monthly budget.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is a strong position. What would you do if you had 20% more budget?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "I would scale the lookalike campaign first — it is proving the best return. I would also test a new ad set targeting a second lookalike audience based on our longest-retained customers, not just the highest spenders. Retention-based lookalikes often find the best long-term customers.",
    },
  ],

  matchingExercise: [
    { word: 'ad set', definition: 'a group of ads sharing the same targeting, budget, and schedule' },
    { word: 'targeting', definition: 'choosing which people see your ads based on their characteristics or behaviour' },
    { word: 'CPM', definition: 'cost per mille — what you pay for every 1,000 times your ad is shown' },
    { word: 'CPC', definition: 'cost per click — what you pay each time someone clicks your ad' },
    { word: 'lookalike audience', definition: 'new people found by the platform who are similar to your existing customers' },
    { word: 'creative', definition: 'the actual ad content — the image, video, headline, and copy' },
    { word: 'frequency', definition: 'how many times on average each person has seen your ad' },
    { word: 'conversion', definition: 'when someone takes the specific action you wanted after seeing your ad' },
  ],

  fillBlankExercise: [
    { before: 'We are', after: 'marketing managers and directors at companies with 50–500 employees on LinkedIn.', answer: 'targeting' },
    { before: 'The', after: 'on this ad set has reached 7.2 — people are seeing the same ad too many times.', answer: 'frequency' },
    { before: 'Our lookalike audience is based', after: 'our top 200 customers by lifetime value.', answer: 'on' },
    { before: "Let's test two versions of the", answer: 'creative', after: '— a static image versus a 15-second video.' },
    { before: 'The CPC on the best-performing ad set is £2.20 — significantly below our', after: 'of £4.', answer: 'target' },
    { before: 'We generated 94', after: 's — all demo requests — at £42 each, against a target of £50.', answer: 'conversion' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the problem with the retargeting ad set?',
      options: ['The CPC is too high at £4.80 per click', 'The frequency has reached 7.2 — people are seeing the same ad too many times and performance is declining', 'The lookalike audience is too small and the ads are not reaching enough people'],
      correctIndex: 1,
    },
    {
      question: "What is Riley's lookalike audience based on?",
      options: ['All website visitors from the last 90 days', 'People who watched the company video on social media', 'The top 200 customers by lifetime value'],
      correctIndex: 2,
    },
    {
      question: 'What two solutions does Riley propose for the high frequency problem?',
      options: ['Pause all ads and restart the campaign with a new budget', 'Test two creative versions and expand the retargeting audience to 90 days', 'Increase the daily budget and switch to CPM bidding'],
      correctIndex: 1,
    },
    {
      question: 'What is the overall cost per conversion, and how does it compare to target?',
      options: ['£50 per conversion — exactly on target', '£31 per conversion — 38% below target', '£42 per conversion — 16% better than the £50 target'],
      correctIndex: 2,
    },
  ],

  warmUp: {
    questions: [
      'Have you ever seen an ad on social media so many times that it started to annoy you? What happened — did you eventually click it or did you ignore it?',
      'When you see an ad on social media, what makes you stop scrolling and pay attention? Is it the image, the headline, the offer, or something else?',
      'Do you think social media ads are effective? Why or why not? Have you ever bought something because of a social media ad?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'Within a campaign, each _____ targets a different audience with its own budget.',
        options: ['creative', 'ad set', 'conversion'],
        correctIndex: 1,
        explanation: "An 'ad set' is the level within a campaign that defines the audience, budget, and schedule. A campaign is the top level (the overall goal), an ad set is the middle level (who you reach and how much you spend), and an individual ad is the bottom level (the actual creative content). Running separate ad sets for different audiences lets you compare performance and optimise budget. 'Creative' is the content of the ad. 'Conversion' is the outcome you want.",
      },
      {
        sentence: 'CPM stands for Cost Per _____ — the cost of showing your ad 1,000 times.',
        options: ['Message', 'Mille', 'Marketing'],
        correctIndex: 1,
        explanation: "'Mille' is the Latin word for thousand. CPM = Cost Per Mille = cost per 1,000 impressions. It is the standard pricing model for awareness-focused campaigns on social media platforms. If the CPM is £10 and your budget is £1,000, your ad will be shown approximately 100,000 times. CPM is useful for reach and brand awareness campaigns; CPC (cost per click) is more useful for traffic and conversion campaigns.",
      },
      {
        sentence: 'A lookalike audience finds new people who are _____ to your existing customers.',
        options: ['similar', 'identical', 'opposite'],
        correctIndex: 0,
        explanation: "'Similar' is the correct word. A lookalike audience is built by the platform (Meta, LinkedIn, etc.) by analysing the characteristics of your existing customers and finding new people who share similar attributes — demographics, interests, and online behaviour. 'Identical' would imply exact copies, which is not possible. The whole value of a lookalike audience is in finding people who share patterns and tendencies with your best customers — not exact matches.",
      },
      {
        sentence: 'When the _____ reaches five or six, ad fatigue sets in and performance drops.',
        options: ['CPM', 'frequency', 'CPC'],
        correctIndex: 1,
        explanation: "'Frequency' is the average number of times each person in your audience has seen your ad. At frequency four to six, most audiences start experiencing ad fatigue — they have seen the ad enough times that they stop noticing it, and performance metrics like click-through rate decline. CPM measures cost per thousand impressions (not repetition). CPC measures cost per click. Only frequency measures how many times the same person has seen the same ad.",
      },
      {
        sentence: 'The _____ is the image, video, headline, and copy that people actually see in the ad.',
        options: ['targeting', 'creative', 'ad set'],
        correctIndex: 1,
        explanation: "'Creative' (used as a noun in advertising) refers to the actual content of the ad — everything the audience sees and experiences. It includes the visual (image or video), the headline, the body copy, and the call to action. Great targeting with weak creative will not perform — the creative has to stop people scrolling and make them want to click. 'Targeting' is about who sees the ad. 'Ad set' is the structural level that contains the creative.",
      },
      {
        sentence: 'We moved more budget to the best-performing ad set because its _____ was lowest.',
        options: ['frequency', 'audience', 'CPC'],
        correctIndex: 2,
        explanation: "'CPC' — cost per click. Moving budget towards the ad set with the lowest CPC is the correct optimisation strategy in a click-based campaign — it means you are getting more clicks for the same amount of money. 'Frequency' being lowest would not necessarily mean it is performing best. 'Audience' is not a performance metric. In a conversion campaign, you compare ad sets on CPC and cost per conversion, and shift budget to the most efficient ones.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what Marcus says during the campaign review. Choose the best response.',
      items: [
        {
          customerLine: "The retargeting ad set is underperforming. What is going on and what would you do?",
          options: [
            "The frequency has reached 7.2 — people are seeing the same ad too many times, which is causing ad fatigue. I would refresh the creative with a new image or video and expand the retargeting audience window from 30 to 90 days to reduce frequency.",
            "The retargeting audience is too small and we need to increase the budget to reach more people.",
            "Retargeting campaigns often underperform — it is normal for this type of ad set and we should focus our attention on the other two ad sets instead.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct. It identifies the specific cause (frequency at 7.2 causing ad fatigue), explains the mechanism (people are tired of seeing the same ad), and offers two specific solutions (new creative and expanded audience window). Option B misdiagnoses the problem — a small audience would mean low reach, but the issue here is frequency, not size. Option C is passive and incorrect — retargeting is usually one of the highest-performing ad types; dismissing it without fixing the frequency issue wastes a valuable audience.",
        },
        {
          customerLine: "We have extra budget this month. Where would you invest it first — LinkedIn or Meta?",
          options: [
            "LinkedIn is always better for B2B — we should put all the extra budget there regardless of current performance.",
            "The lookalike audience on Meta is converting at £31 per demo against a target of £50 — it is our most efficient ad set. I would scale that first, then test a second lookalike on Meta before adding to LinkedIn.",
            "We should split it equally between both platforms to get a balanced view of performance.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. It bases the recommendation on actual performance data (£31 per demo vs £50 target) rather than assumptions or rules. The Meta lookalike is the best-performing ad set, so scaling it is the highest-confidence investment. Option A makes a blanket rule ('LinkedIn is always better for B2B') without referencing the actual data from this campaign — which shows Meta performing better. Option C splits budget equally regardless of performance, which is a missed optimisation opportunity.",
        },
        {
          customerLine: "The creative in the main ad set looks very similar to what our competitors are running. What should we do?",
          options: [
            "Let's test two versions of the creative — keep the current ad as a control and test a 15-second product video as the challenger. If the video outperforms the static image, we refresh all ad sets with video creative.",
            "Creative does not matter as much as targeting — if we are reaching the right people, they will click regardless of what the ad looks like.",
            "We should immediately pause all ads and redesign the creative before running any more campaigns.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct. It proposes a structured A/B test — keeping the current ad as a control while testing a new format — which is the right way to make data-driven creative decisions. It also specifies what to change (video vs static) and what the outcome would be. Option B is wrong — creative is one of the most important variables in paid social performance. Even perfect targeting fails with weak creative on social media where people decide in under two seconds whether to stop scrolling. Option C is too drastic — pausing all campaigns immediately loses ongoing performance without first validating whether the new creative is actually better.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the paid social campaign review. Three lines have a mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Walk me through the campaign structure and early results." },
        { speaker: 'Riley', text: "We have one campaign with three ad sets. Each ad set is targeting a different audience — marketing managers on LinkedIn, a lookalike audience on Meta, and a retargeting set." },
        { speaker: 'Marcus', text: "What is the CPM on LinkedIn?" },
        { speaker: 'Riley', text: "The CPM for this campaign is on £12 on LinkedIn and £4 on Meta." },
        { speaker: 'Marcus', text: "And conversions — how many so far?" },
        { speaker: 'Riley', text: "94 conversions total at £42 per conversion — 16% more better than our target of £50." },
        { speaker: 'Marcus', text: "What about frequency on the retargeting set?" },
        { speaker: 'Riley', text: "The frequency has reach 7.2 — that is too high. I will refresh the creative and expand the audience." },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'is on £12',
          correction: 'is £12',
          explanation: "The CPM figure is stated directly after the verb — 'the CPM is £12', not 'the CPM is on £12'. In English, prices and rates are stated directly: 'the cost is £5', 'the rate is 3%', 'the CPM is £12'. The preposition 'on' is not used before a price figure in this context. You might say 'we are spending on LinkedIn' or 'we are bidding on keywords', but you do not say 'the cost is on £12'.",
        },
        {
          lineIndex: 5,
          incorrectText: '16% more better',
          correction: '16% better',
          explanation: "'More better' is a double comparative — a common grammar error. Comparatives in English use either '-er' or 'more', never both. 'Better' is already the comparative form of 'good', so it cannot be combined with 'more'. Correct forms: 'better' (comparative), 'much better' (emphasised comparative), '16% better' (quantified comparative). 'More better', 'more faster', 'more stronger' — all incorrect.",
        },
        {
          lineIndex: 7,
          incorrectText: 'The frequency has reach 7.2',
          correction: 'The frequency has reached 7.2',
          explanation: "In the present perfect tense, the main verb must be in the past participle form: 'has reached', not 'has reach'. The present perfect structure is: have/has + past participle. 'Reach' is the base form; 'reached' is both the simple past and the past participle. 'Has reach' is missing the -ed ending. Other examples: 'the campaign has generated', 'the rate has improved', 'the audience has grown' — all use the past participle after 'has'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Tell me the structure of the campaign and how each ad set is performing.",
          salespersonStart: "We have one campaign with three ad sets targeting different audiences.",
          suggestedCompletion: "The LinkedIn ad set targets marketing managers and directors at mid-size companies — CPC is £3.40, within target. The Meta lookalike ad set is our best performer — it is based on our top 200 customers and is converting at £31 per demo, against a target of £50. The retargeting set has a frequency problem — 7.2 — which is causing ad fatigue and dropping click-through rates. I am refreshing the creative and expanding the audience to fix it.",
        },
        {
          customerLine: "Why is a lookalike audience often better than interest-based targeting?",
          salespersonStart: "Our lookalike audience is based on our top 200 customers by lifetime value —",
          suggestedCompletion: "so the platform is finding new people who share the same characteristics as our best customers. Interest-based targeting is broader — you choose categories and the platform finds people who fit, but there is no guarantee they will behave like buyers. A lookalike starts with proven buyers and works backwards to find more like them. In our campaign, the lookalike is converting at £31 per demo compared to £42 average across all ad sets — that shows the quality difference.",
        },
        {
          customerLine: "The creative looks similar to what competitors are running. How do you fix that?",
          salespersonStart: "Let's test two versions of the creative —",
          suggestedCompletion: "keep the current static image as the control and test a 15-second product video as the challenger. We run both to the same audience with the same budget for two weeks, then compare click-through rate and cost per conversion. If the video wins, we refresh all ad sets with video creative. The key is to change only the creative — keep the targeting and budget identical — so we know the creative is the variable that made the difference.",
        },
      ],
    },
  },
};
