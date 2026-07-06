import { Lesson } from '@/types/lesson';

export const seoAndSem: Lesson = {
  slug: 'seo-and-sem',
  title: 'SEO and SEM',
  subtitle: 'The language of search marketing — how to talk about organic and paid search',
  level: 'B1-B2',
  description: "Search marketing is one of the most important channels in digital marketing. SEO — Search Engine Optimisation — focuses on getting your website to appear in search results without paying. SEM — Search Engine Marketing — uses paid ads to appear at the top of search results. Both require a specific vocabulary that marketing professionals use every day. This lesson teaches you the core language of search marketing so you can discuss strategy, review results, and work confidently with your team in English.",
  heroImage: '/images/seo-and-sem-hero.png',

  vocabulary: [
    {
      word: 'ORGANIC',
      partOfSpeech: 'adjective',
      definition: 'Organic search results are the ones that appear because the search engine thinks they are relevant — not because someone paid for them. Organic traffic is free in terms of cost per click, but it takes time and effort to achieve through SEO.',
      example: "Marcus asked: Where is most of our traffic coming from? Riley replied: About 60% is organic — people finding us through search without clicking an ad. The rest is paid. Marcus said: Good — organic is more sustainable long-term. We need to keep growing it while the paid campaigns support us in the short term.",
      imageSlug: '/images/seo-and-sem-organic.png',
    },
    {
      word: 'PAID SEARCH',
      partOfSpeech: 'noun',
      definition: 'Advertising that appears in search engine results — you pay each time someone clicks your ad. Also called PPC (pay-per-click) or SEM. Paid search gives you immediate visibility at the top of the results page, but it costs money every time someone clicks.',
      example: "Riley explained: We are running paid search on Google for our top ten keywords. Each click costs between £2 and £8 depending on the keyword. Marcus asked: What is the total monthly spend? Riley replied: Around £4,000 a month — and we are getting about 800 clicks, which gives us a cost per click of £5 on average.",
      imageSlug: '/images/paid-search.png',
    },
    {
      word: 'AD RANK',
      partOfSpeech: 'noun',
      definition: "Your position in the paid search results. Ad rank is determined by two things: how much you bid AND how relevant and high-quality your ad is. A better quality ad can beat a higher bid — so spending more is not the only way to appear at the top.",
      example: "Riley said: Our ad rank dropped this week — we are now in position three for our main keyword instead of position one. Marcus asked: Why? Riley replied: A competitor increased their bid. But we should also check our quality score — a better ad and a more relevant landing page can improve our rank without increasing the bid.",
      imageSlug: '/images/ad-rank.png',
    },
    {
      word: 'BIDDING',
      partOfSpeech: 'noun',
      definition: 'The process of setting how much you are willing to pay per click for a keyword in paid search. You compete against other advertisers who want the same keyword. A higher bid usually means a better position, but quality also matters.',
      example: "Marcus asked: How are we managing our bidding? Riley replied: We are using automated bidding for most keywords — Google adjusts the bids to maximise conversions within our budget. But for the top five keywords, I manage the bids manually so I have more control over cost per click and position.",
      imageSlug: '/images/bidding.png',
    },
    {
      word: 'LONG-TAIL KEYWORD',
      partOfSpeech: 'noun',
      definition: "A search phrase with three or more words that is more specific than a broad keyword. Long-tail keywords have lower search volume but higher intent — people searching for something specific are more likely to be ready to buy. They are also usually cheaper to bid on.",
      example: "Riley recommended: We should focus more on long-tail keywords. Marcus asked: Like what? Riley replied: Instead of bidding on 'marketing software', we bid on 'marketing automation software for small teams'. Fewer searches, but the people searching are much more likely to be our ideal customer — and the cost per click is half the price.",
      imageSlug: '/images/long-tail-keyword.png',
    },
    {
      word: 'IMPRESSION',
      partOfSpeech: 'noun',
      definition: 'The number of times your ad or search result was shown to someone. An impression counts every time your ad appeared on a screen, whether the person clicked or not. Impressions measure reach — how many people saw you.',
      example: "Riley presented the report: We had 45,000 impressions last month. Marcus asked: And how many clicks from those impressions? Riley replied: About 900 — so our click-through rate is 2%. That means 98% of the people who saw our ad did not click it. The headline might need to be stronger.",
      imageSlug: '/images/seo-and-sem-impression.png',
    },
    {
      word: 'CLICK-THROUGH RATE',
      partOfSpeech: 'noun',
      definition: 'The percentage of people who saw your ad or search result and clicked on it. Calculated as clicks divided by impressions. A higher click-through rate means your ad is more relevant and appealing to the people who see it.',
      example: "Marcus reviewed the numbers: Our click-through rate on the main campaign is 2%. Is that good? Riley replied: For paid search in our industry, the average is around 3.5%. So we are below average — the ad copy is probably not compelling enough, or we are targeting the wrong keywords and appearing in front of the wrong people.",
      imageSlug: '/images/seo-and-sem-click-through-rate.png',
    },
    {
      word: 'LANDING PAGE',
      partOfSpeech: 'noun',
      definition: 'The page on your website that someone arrives at after clicking an ad. A good landing page is directly relevant to the ad — it delivers exactly what the ad promised. A mismatch between the ad and the landing page kills conversion.',
      example: "Riley flagged an issue: Our main paid search ad promises a free trial, but clicking it takes people to our homepage — not to a free trial sign-up page. Marcus replied: That is a serious problem. The [[landing page:the page people arrive at after clicking an ad]] must match the ad exactly. Every extra step between the click and the action loses you customers.",
      imageSlug: '/images/seo-and-sem-landing-page.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "WE'RE RANKING ON PAGE ONE FOR...",
      definition: "A phrase for reporting your SEO position for a specific keyword. 'Ranking on page one' means your website appears in the first ten results on Google without paid ads. Page one ranking is the goal — most people never click to page two.",
      example: "Riley reported: We are ranking on page one for six of our target keywords. Marcus asked: Which ones? Riley replied: Our best positions are for 'marketing automation for agencies' — we are in position three — and 'email marketing tools for small business' — position five. Those two bring in about 400 organic visits per month.",
      imageSlug: '/images/ranking-on-page-one.png',
    },
    {
      phrase: 'THE CLICK-THROUGH RATE ON THIS AD IS...',
      definition: "A phrase for reporting or discussing the performance of a specific ad. Always follow it with the percentage and a comparison — to the benchmark, to last period, or to other ads in the same campaign.",
      example: "Riley reviewed the campaign: The click-through rate on this ad is 1.8% — below our target of 3%. Marcus said: What is the issue? Riley replied: I think the headline is too generic. 'Improve your marketing' is not specific enough. I want to test 'Double your leads in 30 days' and see if a more specific promise improves the rate.",
      imageSlug: '/images/ctr-on-this-ad.png',
    },
    {
      phrase: 'WE SHOULD BID ON...',
      definition: "A phrase for recommending a specific keyword or keyword strategy in paid search. Use it when suggesting new keywords to target or when reviewing the current keyword list.",
      example: "Riley recommended: We should bid on more long-tail keywords — specifically around 'email marketing for B2B teams' and 'marketing software for agencies'. Marcus agreed: Those are much more targeted. We will pay less per click and get visitors who are much more likely to convert.",
      imageSlug: '/images/we-should-bid-on.png',
    },
    {
      phrase: 'THE LANDING PAGE NEEDS TO MATCH THE AD',
      definition: "A principle — and a phrase — for ensuring consistency between what your ad promises and what the landing page delivers. This is one of the most common and costly mistakes in paid search. Mismatched ads and landing pages destroy conversion rates.",
      example: "Marcus reviewed the campaign setup: The ad promises a free trial but the landing page is the homepage. That is the problem — the landing page needs to match the ad. Riley replied: I will create a dedicated landing page for this ad that takes people straight to the free trial sign-up with no distractions.",
      imageSlug: '/images/landing-page-needs-to-match.png',
    },
    {
      phrase: 'ORGANIC TRAFFIC IS [GROWING / DECLINING]',
      definition: "A phrase for describing the trend in your unpaid search traffic. Always follow it with a percentage and a time period, and give the reason if you know it. Growing organic traffic usually means your SEO is working; declining traffic means something has changed.",
      example: "Riley reported: Organic traffic is growing — up 18% compared to last quarter. Marcus asked: What drove the increase? Riley replied: Three things: we published eight new blog posts targeting long-tail keywords, we improved the page speed on the main product pages, and one of our articles was picked up and linked to by an industry website.",
      imageSlug: '/images/organic-traffic-is.png',
    },
    {
      phrase: 'THE COST PER CLICK FOR THIS KEYWORD IS...',
      definition: "A phrase for reporting the average amount you pay each time someone clicks your paid search ad for a specific keyword. Always compare it to your target or budget, and say whether it is within an acceptable range.",
      example: "Riley flagged: The cost per click for the keyword 'marketing automation software' is £9.40 — well above our target of £6. Marcus replied: We need to either improve our quality score to reduce the cost, or switch our budget to cheaper long-tail keywords that bring in more qualified traffic at a lower cost.",
      imageSlug: '/images/cost-per-click.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, let's do a review of our search marketing — both [[organic:appearing in search results without paying for them]] and paid. Start with where we stand on SEO.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Organic traffic is growing — up 18% compared to last quarter. We are ranking on page one for six keywords. Our best position is number three for 'marketing automation for agencies', which brings in around 250 organic visits per month.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. How many total [[impression:the number of times your result was shown to someone, whether they clicked or not]]s are we getting from search each month?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "About 85,000 organic impressions — so people are seeing us in search results. But our [[click-through rate:the percentage of people who saw your result and clicked it]] is only 1.4%, which means very few people are actually clicking through.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "1.4% is low. What is causing that? Are we ranking but in position eight or nine where nobody clicks?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Partly — many of our rankings are on page one but in the lower positions. Also, our meta descriptions are weak — they do not give people a reason to click. I want to rewrite them to be more specific and compelling.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Now [[paid search:advertising that appears in search results — you pay each time someone clicks]] — walk me through where we are.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We are spending £4,000 per month across 25 keywords. Our average cost per click is £5 but for our top keyword it is £9.40 — above target. Our [[ad rank:your position in the paid search results]] dropped from one to three last week because a competitor increased their bid.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What can we do about [[bidding:the process of setting how much you are willing to pay per click]] without just increasing our spend?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Two things. First, improve our quality score — a better ad and a more relevant landing page can improve our position without a higher bid. Second, we should bid on more [[long-tail keyword:a specific search phrase with three or more words]]s — less competition, lower cost, and higher intent.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Speaking of landing pages — I clicked our main paid search ad yesterday and it took me to the homepage. That is not good.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I know — that is a priority fix. The landing page needs to match the ad. Our ad promises a free trial, so the landing page should be a dedicated free trial sign-up page with no distractions. I am building it this week.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. The click-through rate on the main paid ad — what is it right now?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The click-through rate on this ad is 1.8% — below our target of 3%. I want to test a new headline that is more specific. 'Improve your marketing' is too vague. I am testing 'Get 30% more leads in 90 days' as an alternative.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good instinct. What is the plan for long-tail keywords?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We should bid on 15 new long-tail keywords — things like 'email marketing software for B2B teams' and 'best marketing automation for agencies'. The cost per click for those keywords is around £2.50 — much cheaper than our current broad terms, and the people searching are much more likely to convert.",
    },
  ],

  matchingExercise: [
    { word: 'organic', definition: 'appearing in search results without paying — earned through SEO' },
    { word: 'paid search', definition: 'advertising in search results where you pay each time someone clicks' },
    { word: 'ad rank', definition: 'your position in the paid search results, determined by bid and quality' },
    { word: 'bidding', definition: 'setting how much you are willing to pay per click for a keyword' },
    { word: 'long-tail keyword', definition: 'a specific three-or-more-word search phrase with high intent and lower competition' },
    { word: 'impression', definition: 'the number of times your ad or result was shown, whether clicked or not' },
    { word: 'click-through rate', definition: 'the percentage of people who saw your ad and clicked it' },
    { word: 'landing page', definition: 'the page on your website that someone arrives at after clicking an ad' },
  ],

  fillBlankExercise: [
    { before: 'Organic traffic is', after: '— up 18% compared to last quarter thanks to new blog content.', answer: 'growing' },
    { before: 'We are ranking on page', after: 'for six of our target keywords.', answer: 'one' },
    { before: 'The cost per', answer: 'click', after: 'for our top keyword is £9.40 — above our target of £6.' },
    { before: 'The landing page needs to', answer: 'match', after: 'the ad — if the ad promises a free trial, the page should deliver exactly that.' },
    { before: 'We should bid on more long-', after: 'keywords — less competition, lower cost, and higher intent.', answer: 'tail' },
    { before: 'The click-through', after: 'on this ad is 1.8% — below our target of 3%.', answer: 'rate' },
  ],

  multipleChoiceExercise: [
    {
      question: "Why did the company's ad rank drop from position one to position three?",
      options: ['The quality score decreased because of a weak landing page', 'A competitor increased their bid', 'The budget for paid search was reduced'],
      correctIndex: 1,
    },
    {
      question: 'What is the problem with the main paid search ad?',
      options: ['The ad promises a free trial but clicking it takes people to the homepage instead of a free trial page', 'The ad is targeting the wrong keywords and reaching the wrong audience', 'The cost per click is too low and the ad does not appear often enough'],
      correctIndex: 0,
    },
    {
      question: 'Why does Riley recommend long-tail keywords?',
      options: ['They have more search volume and a higher click-through rate', 'Less competition, lower cost per click, and higher intent from searchers', 'They are easier to rank for organically without paid ads'],
      correctIndex: 1,
    },
    {
      question: 'What two things does Riley say can improve ad rank without increasing spend?',
      options: ['Better meta descriptions and longer landing pages', 'A better ad and a more relevant landing page — both improve the quality score', 'More keywords and a higher daily budget'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'When you search for something online, do you click on the ads at the top or do you scroll down to the organic results? Why?',
      'Have you ever clicked on an ad and then felt disappointed by the page you landed on? What was the problem?',
      'What do you think makes a search result compelling enough to click on?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'Organic results appear in search because the engine thinks they are relevant — not because someone _____ for them.',
        options: ['pay', 'paid', 'paying'],
        correctIndex: 1,
        explanation: "'Paid' — simple past tense is needed here in a defining clause explaining what organic means. The sentence structure is 'not because someone paid for them' — a complete subordinate clause in the past tense. 'Pay' (present simple) would work if the sentence were 'not because someone pays for them' — but 'paid' is more natural in this explaining-what-organic-means context. 'Paying' would need 'is' before it: 'not because someone is paying'.",
      },
      {
        sentence: 'We are _____ on page one for six of our target keywords.',
        options: ['ranking', 'ranked', 'ranks'],
        correctIndex: 0,
        explanation: "'Ranking' — the present continuous 'are ranking' is used here to describe the current ongoing state of your search position. 'We are ranking on page one' = our current position right now. 'Ranked' would require 'are ranked' (passive: 'we are ranked on page one') — this is also grammatically correct but less commonly used in conversational business English. 'Ranks' is the simple present third person singular — it would need a singular subject: 'our website ranks on page one'.",
      },
      {
        sentence: 'A _____ keyword is a specific three-or-more-word search phrase with high intent.',
        options: ['long-tail', 'broad', 'negative'],
        correctIndex: 0,
        explanation: "'Long-tail' is the specific marketing term for search phrases with three or more words that are more specific than broad keywords. Long-tail keywords have lower search volume but higher purchase intent — the people searching are more ready to buy. 'Broad' keywords are single words or short phrases with high volume and low specificity ('marketing', 'software'). 'Negative' keywords are words you exclude from your campaigns to prevent irrelevant clicks.",
      },
      {
        sentence: 'The click-through rate is calculated as clicks _____ by impressions.',
        options: ['multiplied', 'added', 'divided'],
        correctIndex: 2,
        explanation: "'Divided' — click-through rate (CTR) = clicks ÷ impressions × 100. So CTR is clicks divided by impressions. If you had 900 clicks from 45,000 impressions: 900 ÷ 45,000 = 0.02 = 2% CTR. 'Multiplied' would give you a very large number, not a percentage. 'Added' (clicks + impressions) has no meaning in this context. Understanding the calculation helps you explain CTR confidently in a team meeting.",
      },
      {
        sentence: 'Ad rank is determined by how much you _____ AND how relevant your ad is.',
        options: ['bid', 'spend', 'charge'],
        correctIndex: 0,
        explanation: "'Bid' — in paid search, advertisers set a 'bid' for each keyword — the maximum amount they are willing to pay per click. 'Bidding' is the process; 'a bid' is the specific amount. 'Spend' refers to total budget expenditure — you 'spend' money but you 'bid' on keywords. 'Charge' is used for what you charge customers for your product, not what you pay to a platform for ads. The correct phrase is 'how much you bid', not 'how much you spend or charge'.",
      },
      {
        sentence: 'The landing page must _____ the ad — if the ad promises a free trial, the page should deliver exactly that.',
        options: ['match', 'copy', 'repeat'],
        correctIndex: 0,
        explanation: "'Match' — 'the landing page must match the ad' is the standard phrase in paid search for ensuring consistency between the ad promise and the page experience. 'Copy' (to copy) would mean reproduce the exact content — which is not what is meant. 'Repeat' has a similar problem — you are not repeating the ad, you are delivering on what it promised. 'Match' is the precise word: same offer, same tone, same key message. A mismatch between ad and landing page is one of the most common and costly paid search mistakes.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what Marcus says. Choose the best response.',
      items: [
        {
          customerLine: "Our ad rank dropped from position one to position three this week. What happened and what can we do?",
          options: [
            "A competitor increased their bid, which pushed us down. We have two options without increasing spend: improve our ad quality score with a better headline and more relevant landing page, or shift budget to long-tail keywords with less competition.",
            "We need to increase our bid immediately to get back to position one — position three is not good enough for our main keyword.",
            "Ad rank changes all the time — it is normal to move between positions. We should monitor it for another week before deciding anything.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct. It identifies the cause (competitor bid increase), gives two actionable solutions that do not require increasing spend (quality score and long-tail keywords), and demonstrates understanding of how ad rank works. Option B jumps straight to spending more money — which may be unnecessary and is not analytical. Option C is passive — 'monitor for another week' loses time and revenue while competitors take the top position.",
        },
        {
          customerLine: "Our click-through rate is 1.8% against a target of 3%. What is the most likely cause and what would you test first?",
          options: [
            "A 1.8% click-through rate is reasonable for our industry — some campaigns perform lower than this and it depends on the keywords.",
            "The headline is probably the issue — 'Improve your marketing' is too generic. I would test a more specific headline like 'Get 30% more leads in 90 days' and see if a specific, benefit-led headline improves the rate.",
            "We should increase our budget so the ad shows more often — more impressions will lead to more clicks and a higher click-through rate.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. It identifies the most likely cause (generic headline), explains why it is a problem (not specific enough), and proposes a specific test (a benefit-led alternative). This is a diagnostic and actionable response. Option A is defensive — 1.8% is below the target and the industry average of 3.5%, so normalising it is not helpful. Option C confuses impressions with click-through rate — more impressions with the same low CTR does not fix the problem; it just shows more people a bad ad.",
        },
        {
          customerLine: "Why should we focus on long-tail keywords rather than broad terms?",
          options: [
            "Long-tail keywords have higher search volume, so we will reach more people and generate more traffic.",
            "Long-tail keywords are more specific, so the people searching are more likely to be our ideal customer. They also cost less per click and face less competition from larger advertisers.",
            "Long-tail keywords are easier to rank for organically, so we will not need to spend money on paid search for those terms.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct on all three points: higher intent (more likely to be ideal customer), lower cost per click, and less competition. These are the three main reasons to prioritise long-tail keywords. Option A is wrong — long-tail keywords have lower search volume than broad terms, not higher. The advantage is quality of visitor, not quantity. Option C is partially true (long-tail terms are easier to rank for organically) but the question is about why to bid on them in paid search, not about organic strategy.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the search marketing review. Three lines have a mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Give me an update on our search marketing — both organic and paid." },
        { speaker: 'Riley', text: "Organic traffic is growing — up 18% comparing to last quarter. We're ranking on page one for six keywords." },
        { speaker: 'Marcus', text: "Good. What about paid search?" },
        { speaker: 'Riley', text: "We spend £4,000 per month. Our average cost per click is £5, but for the top keyword it is £9.40 — above target." },
        { speaker: 'Marcus', text: "And the click-through rate?" },
        { speaker: 'Riley', text: "The click-through rate on the main ad is 1.8%. I want to test a more specific head line to improve it." },
        { speaker: 'Marcus', text: "What about the landing page?" },
        { speaker: 'Riley', text: "The ad is promised a free trial but clicking it goes to the homepage. I am building a dedicated landing page this week." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'comparing to last quarter',
          correction: 'compared to last quarter',
          explanation: "'Compared to' is the correct fixed phrase — past participle, not present participle. 'Comparing to' would mean you are currently in the process of comparing something, which is a different meaning. 'Compared to last quarter' means 'when we look at it relative to last quarter'. This is one of the most common errors in reports and presentations. Always use 'compared to' (past participle) when making a comparison between two periods or figures.",
        },
        {
          lineIndex: 5,
          incorrectText: 'head line',
          correction: 'headline',
          explanation: "'Headline' is one word, not two. This is a spelling error. 'Headline' always appears as a single compound word in marketing and advertising contexts: 'a compelling headline', 'write a better headline', 'the ad headline'. 'Head line' written as two words does not exist as a marketing term.",
        },
        {
          lineIndex: 7,
          incorrectText: 'The ad is promised',
          correction: 'The ad promises',
          explanation: "'The ad promises' — simple present active voice. 'The ad is promised' is passive and means someone made a promise to the ad, which makes no sense. An ad is the subject that does the promising: 'the ad promises a free trial'. This is a subject-verb voice error. In English, inanimate objects can be the subject of active sentences: 'the article explains', 'the data shows', 'the ad promises'. Only use passive when the subject is the receiver of an action, not the doer.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Tell me the three biggest issues with our current search marketing and what we should do about each one.",
          salespersonStart: "Three issues. First, our ad landing page does not match the ad —",
          suggestedCompletion: "the ad promises a free trial but takes people to the homepage. I am building a dedicated landing page this week. Second, our click-through rate is 1.8% against a target of 3% — the headline is too generic and I want to test a benefit-led alternative. Third, our cost per click on the top keyword is £9.40 against a target of £6 — I recommend shifting budget to long-tail keywords where we pay £2.50 per click and reach more qualified visitors.",
        },
        {
          customerLine: "What is the difference between SEO and SEM, and which one should we invest in more?",
          salespersonStart: "SEO is organic — we appear in search results because our content is relevant, and we pay nothing per click.",
          suggestedCompletion: "It takes time to build but the traffic is sustainable and free. SEM is paid search — we pay each time someone clicks, but we get immediate visibility at the top of the results page. The right answer is both: SEM gives us visibility now while we build organic rankings. Long-term, organic is cheaper and more credible. I recommend we invest in both — SEM for our top three high-intent keywords, SEO for long-tail terms we can rank for organically.",
        },
        {
          customerLine: "Our ad rank dropped from position one to position three. I do not want to just increase the bid — what else can we do?",
          salespersonStart: "Ad rank depends on two things — the bid and the quality score.",
          suggestedCompletion: "We can improve the quality score without increasing the bid. I will rewrite the ad headline to be more specific and directly relevant to the keyword. I will also update the landing page so it delivers exactly what the ad promises — that improves the relevance score. And I will add 15 long-tail keywords to the campaign where we face less competition and can hold position one at a much lower cost per click.",
        },
      ],
    },
  },
};
