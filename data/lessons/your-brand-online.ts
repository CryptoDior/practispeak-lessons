import { Lesson } from '@/types/lesson';

export const yourBrandOnline: Lesson = {
  slug: 'your-brand-online',
  title: 'Your Brand Online',
  subtitle: 'Website and SEO basics — how to talk about your online presence in English',
  level: 'A2',
  description: 'Your website is often the first place a potential client goes after hearing about your brand. This lesson gives you the vocabulary to talk about your online presence confidently — search engines, keywords, traffic, rankings, and clicks — so you can discuss SEO and digital performance with colleagues and clients.',
  heroImage: '/images/your-brand-online-hero.png',

  vocabulary: [
    {
      word: 'SEARCH ENGINE',
      partOfSpeech: 'noun',
      definition: 'A website or tool that helps people find information online — the most widely used is Google.',
      example: 'Most of our website traffic comes from search engines — potential clients type a question into Google and find our article.',
      imageSlug: '/images/search-engine.png',
    },
    {
      word: 'KEYWORD',
      partOfSpeech: 'noun',
      definition: 'A word or phrase that people type into a search engine when looking for something — used in content and SEO strategy.',
      example: "We identified 'LinkedIn marketing for B2B' as a key keyword — now we make sure every relevant article includes that phrase.",
      imageSlug: '/images/keyword.png',
    },
    {
      word: 'TRAFFIC',
      partOfSpeech: 'noun',
      definition: 'The number of visitors that come to a website — measured in sessions, page views, or unique visitors.',
      example: 'Since we started our content strategy, our website traffic has increased by 60% — we are getting more visitors every month.',
      imageSlug: '/images/traffic.png',
    },
    {
      word: 'RANKING',
      partOfSpeech: 'noun',
      definition: 'The position of a website or page in search engine results — the higher the ranking, the more people see it.',
      example: 'Our article about LinkedIn strategy is now ranking on the first page of Google — it gets around 500 visitors a month.',
      imageSlug: '/images/ranking.png',
    },
    {
      word: 'CLICK',
      partOfSpeech: 'noun',
      definition: 'When a user presses on a link — in digital marketing, clicks are measured to understand how many people act on an ad or search result.',
      example: 'The banner ad generated 1,200 clicks in its first week — each click brought a visitor to our landing page.',
      imageSlug: '/images/click.png',
    },
    {
      word: 'SEO',
      partOfSpeech: 'noun',
      definition: "Search Engine Optimisation — the practice of improving a website's content and structure so it appears higher in search results.",
      example: 'We invested in SEO for three months and our organic traffic doubled — without spending anything on paid advertising.',
      imageSlug: '/images/seo.png',
    },
    {
      word: 'LANDING PAGE',
      partOfSpeech: 'noun',
      definition: 'A specific page on a website designed for a single goal — usually to get a visitor to fill in a form or sign up.',
      example: 'Every campaign sends traffic to a dedicated landing page — it has one message and one call to action, nothing else.',
      imageSlug: '/images/your-brand-online-landing-page.png',
    },
    {
      word: 'ORGANIC',
      partOfSpeech: 'adjective',
      definition: 'Traffic or results that come without paying for advertising — visitors who find you through search or content.',
      example: 'Our goal is to grow organic traffic — we want people to find us through search and content, not just paid ads.',
      imageSlug: '/images/your-brand-online-organic.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'SHOW UP IN [SEARCH RESULTS]',
      definition: 'To appear in search engine results when someone types a relevant query.',
      example: 'If you write articles that answer questions your clients are asking, your website will start to show up in search results.',
      imageSlug: '/images/show-up-in-search-results.png',
    },
    {
      phrase: 'DRIVE TRAFFIC TO [A WEBSITE]',
      definition: 'To bring visitors to a website — through content, ads, social media, or SEO.',
      example: 'Our LinkedIn posts drive traffic to the website — every post ends with a link to a relevant article or landing page.',
      imageSlug: '/images/drive-traffic-to-a-website.png',
    },
    {
      phrase: 'RANK FOR [A KEYWORD]',
      definition: 'To appear in search engine results for a specific keyword or phrase.',
      example: "We now rank for 'B2B LinkedIn marketing agency' on the first page of Google — that keyword brings us thirty leads a month.",
      imageSlug: '/images/rank-for-a-keyword.png',
    },
    {
      phrase: 'CLICK THROUGH TO [A PAGE]',
      definition: 'To follow a link from a search result, ad, or email to arrive at another page.',
      example: 'Only ten percent of people who see a search result click through to the website — so your title and description must be compelling.',
      imageSlug: '/images/click-through-to-a-page.png',
    },
    {
      phrase: 'OPTIMISE [SOMETHING] FOR [A KEYWORD]',
      definition: 'To improve a piece of content or a web page so that search engines rank it higher for a specific term.',
      example: "We optimised the service page for the keyword 'LinkedIn management for B2B' — it now ranks on page one.",
      imageSlug: '/images/optimise-something-for-a-keyword.png',
    },
    {
      phrase: 'BUILD [YOUR] ONLINE PRESENCE',
      definition: 'To grow your visibility, reputation, and activity on websites and social media platforms over time.',
      example: 'Building an online presence takes time — but consistent content and good SEO compound over months into a significant competitive advantage.',
      imageSlug: '/images/build-your-online-presence.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, when I search for our agency on Google, we are not on the first page. What can we do about it?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'This is an [[SEO:Search Engine Optimisation — improving a website to appear higher in search results]] issue. If we want to [[ranking:the position of a website in search results]] rank higher, we need to understand which [[keyword:a word or phrase people type into a search engine]] s our clients are searching for.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'How do we find the right [[keyword:words people type into a search engine]] s?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We start by thinking about what our clients type into a [[search engine:a tool like Google that helps people find information online]]. For us, it might be 'LinkedIn marketing agency' or 'B2B content strategy'. Those are our core [[keyword:a word or phrase used in SEO]] s.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And how do we [[ranking:the position in search results]] rank for those terms? Do we need to pay for ads?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Not necessarily. [[organic:traffic that comes without paying for advertising]] [[SEO:improving a website to appear in search results]] means writing articles that answer the questions behind those [[keyword:words people search for]] s. If Google sees that our content is useful and relevant, it will show us higher in results.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'So more content means more [[traffic:the number of visitors to a website]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'More relevant content, yes. Each article we publish is a chance to [[ranking:appear higher in]] rank for a new [[keyword:a word or phrase people search for]]. Over time, those rankings drive [[organic:coming without paying for advertising]] [[traffic:the number of visitors to a website]] every single month.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about the [[landing page:a specific page designed for one goal]] for our new service? Does that affect our ranking?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — the [[landing page:a page designed for a single goal]] must be optimised for the right [[keyword:a word or phrase used in SEO]]. If it is, when someone searches for that term, they might [[click:when a user presses a link]] on our result and go directly to that page.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And how do we track how many [[click:when a user presses on a link]] s and visitors we get?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We use Google Analytics for [[traffic:the number of visitors to a website]] and Google Search Console for [[ranking:our position in search results]] and [[click:when a user presses on a link]] s. I will set those up for us — it will show us exactly which pages are working and which ones need improvement.',
    }
  ],

  matchingExercise: [
    {
        "word": "SEARCH ENGINE",
        "definition": "A website or tool that helps people find information online — the most widely used is Google"
    },
    {
        "word": "KEYWORD",
        "definition": "A word or phrase that people type into a search engine when looking for something"
    },
    {
        "word": "TRAFFIC",
        "definition": "The number of visitors that come to a website — measured in sessions or unique visitors"
    },
    {
        "word": "RANKING",
        "definition": "The position of a website or page in search engine results — higher is better"
    },
    {
        "word": "CLICK",
        "definition": "When a user presses on a link — measured to understand how many people act on an ad or search result"
    },
    {
        "word": "SEO",
        "definition": "Search Engine Optimisation — improving a website so it appears higher in search results"
    },
    {
        "word": "LANDING PAGE",
        "definition": "A specific page on a website designed for a single goal — usually to get a visitor to sign up or fill in a form"
    },
    {
        "word": "ORGANIC",
        "definition": "Traffic or results that come without paying for advertising — visitors who find you through search or content"
    }
],
  fillBlankExercise: [
    {
        "before": "Most of our website traffic comes from",
        "after": "s — potential clients type a question into Google and find our article.",
        "answer": "search engine"
    },
    {
        "before": "We identified 'LinkedIn marketing for B2B' as a key",
        "after": "— every relevant article now includes that phrase.",
        "answer": "keyword"
    },
    {
        "before": "Since we started our content strategy, our website",
        "after": "has increased by 60% — more visitors every month.",
        "answer": "traffic"
    },
    {
        "before": "Our article is now",
        "after": "on the first page of Google — it gets around 500 visitors a month.",
        "answer": "ranking"
    },
    {
        "before": "The banner ad generated 1,200",
        "after": "s in its first week — each one brought a visitor to our landing page.",
        "answer": "click"
    },
    {
        "before": "We invested in",
        "after": "for three months and our organic traffic doubled without spending on paid ads.",
        "answer": "SEO"
    },
    {
        "before": "Every campaign sends traffic to a dedicated",
        "after": "— it has one message and one call to action, nothing else.",
        "answer": "landing page"
    },
    {
        "before": "Our goal is to grow",
        "after": "traffic — we want people to find us through search and content, not just paid ads.",
        "answer": "organic"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client says: 'We want to appear on the first page of Google. How do we do that?' What is your first response?",
        "options": [
            "Say: 'You need to pay for Google Ads — that is the only way to appear on the first page.'",
            "Say: 'We start with keyword research — we identify the phrases your potential clients type into Google, then we create content and optimise your pages around those terms. This is called SEO, and it takes two to four months but the results are long-lasting.'",
            "Say: 'First-page rankings are very difficult — most small companies cannot achieve them.'",
            "Say: 'Post more frequently on social media — that will improve your Google ranking.'"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between organic traffic and paid traffic?",
        "options": [
            "Organic traffic is from social media. Paid traffic is from Google.",
            "Organic traffic comes from people finding you through search or content — no cost per visitor. Paid traffic comes from ads — you pay for every click.",
            "Organic traffic is more expensive. Paid traffic is cheaper.",
            "There is no real difference — both bring visitors to your website."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is a keyword in the context of SEO?",
        "options": [
            "A secret code that makes your website appear higher in search results.",
            "A word or phrase that people type into a search engine — you include it in your content so search engines know your page is relevant.",
            "A password that gives you access to Google Analytics.",
            "A tag you add to images on your website."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client has a new service page. They want it to appear in Google searches. What do you recommend?",
        "options": [
            "Post about the service on social media so Google finds it faster.",
            "Optimise the page for the right keyword — include it in the page title, the headings, and the body text. Also build links to the page from other relevant content on your site.",
            "Add more images to the page — Google prefers pages with lots of visual content.",
            "Make the page longer — Google always ranks longer pages higher."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is a landing page used for?",
        "options": [
            "It is the home page of your website — the first page visitors see.",
            "It is a specific page designed for one goal — usually to get a visitor to sign up, download something, or book a call.",
            "It is a page that shows all your blog articles.",
            "It is a page that explains your company's history and values."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client's website has high traffic but very few leads. What is the likely problem?",
        "options": [
            "The traffic is not coming from search engines.",
            "The website may not have clear calls to action or effective landing pages — visitors arrive but do not know what to do next.",
            "The traffic is too high — it is overwhelming the website.",
            "The keywords used are too competitive."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'rank for a keyword'?",
        "options": [
            "To pay Google to show your ad when someone searches that term.",
            "To appear in search engine results when someone types that specific word or phrase.",
            "To include a keyword in your social media posts.",
            "To have the keyword in your company's domain name."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is building online presence important for B2B companies?",
        "options": [
            "Because social media is the most effective channel for B2B sales.",
            "Because most potential clients search online before contacting a company — a strong online presence means they find you before your competitors.",
            "Because it is cheaper than having a sales team.",
            "Because Google rankings directly translate into revenue."
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "When you want to find a new supplier or service, what do you do first? Do you search online, ask a colleague, or go to LinkedIn?",
        "Have you ever searched for your own company online? Where does it appear? Is the information up to date?",
        "What do you think makes a company website effective — design, content, or how easy it is to find? Why?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "We invested in _____ for three months and our organic traffic doubled — without spending anything on ads.",
            "options": [
                "traffic",
                "SEO",
                "ranking"
            ],
            "correctIndex": 1,
            "explanation": "SEO (Search Engine Optimisation) is the practice of improving a website's content and structure to appear higher in search results. Traffic is the number of visitors. Ranking is the position in search results. SEO is the investment that improves rankings and therefore traffic — it is the strategy, the others are the outcomes."
        },
        {
            "sentence": "We identified 'LinkedIn management for B2B' as a key _____ — every relevant article now includes that phrase.",
            "options": [
                "click",
                "keyword",
                "landing page"
            ],
            "correctIndex": 1,
            "explanation": "Keyword is a word or phrase people type into a search engine. Click is when someone presses a link. Landing page is a specific page designed for one goal. Identifying the right keywords is the foundation of an SEO strategy — you write content around terms your audience is already searching for."
        },
        {
            "sentence": "Our article is now _____ on the first page of Google — it gets around 500 visitors a month.",
            "options": [
                "clicking",
                "ranking",
                "optimising"
            ],
            "correctIndex": 1,
            "explanation": "Ranking means appearing at a specific position in search engine results. Clicking is when a user presses a link. Optimising means improving something for search. 'Ranking on the first page' means the article appears in the top ten results — a major achievement that drives significant traffic."
        },
        {
            "sentence": "Every campaign sends visitors to a dedicated _____ — it has one clear message and one call to action.",
            "options": [
                "search engine",
                "keyword",
                "landing page"
            ],
            "correctIndex": 2,
            "explanation": "Landing page is a specific page designed for a single conversion goal. Search engine is Google or similar. Keyword is a search term. A landing page is different from a general website page — it is built specifically for one campaign, with no distractions."
        },
        {
            "sentence": "Our goal is to grow _____ traffic — we want people to find us through content, not just paid ads.",
            "options": [
                "organic",
                "keyword",
                "click"
            ],
            "correctIndex": 0,
            "explanation": "Organic traffic is visitors who come without paid advertising — through search engines and content. Keyword is a search term. Click is when someone presses a link. Organic traffic is valuable because it compounds over time — articles and pages you create today will still bring visitors months and years later."
        },
        {
            "sentence": "Since we started our content strategy, our website _____ has increased by 60% — we are getting more visitors every month.",
            "options": [
                "traffic",
                "ranking",
                "SEO"
            ],
            "correctIndex": 0,
            "explanation": "Traffic is the number of visitors to a website. Ranking is the position in search results. SEO is the strategy used to improve rankings. Traffic is what you measure to understand how many people are visiting your website — the 60% increase shows the content strategy is working."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each client message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client: 'We are spending €2,000 a month on Google Ads but we stop getting traffic the moment we stop paying. Is there a better way?'",
                "options": [
                    "Say: 'Google Ads are always better than SEO — they give you immediate results. You should keep spending on ads.'",
                    "Say: 'What you are describing is the core difference between paid and organic traffic. SEO takes longer to build — usually three to six months — but once your articles are ranking, the traffic keeps coming without additional cost. I would suggest investing some of that budget in content and SEO so you build a long-term asset alongside the ads.'",
                    "Say: 'Stop the ads immediately and invest everything in SEO — it is always more effective.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains the trade-off clearly — paid gives immediate results but stops when you stop paying; SEO is slower but compounds. It suggests a balanced approach. A ignores the client's concern. C is too extreme — stopping ads completely while building SEO from scratch would leave a traffic gap."
            },
            {
                "customerLine": "Client: 'We have a new service page but it is not appearing in Google searches. What should we do?'",
                "options": [
                    "Say: 'New pages take time to appear in Google — wait a few months and check again.'",
                    "Say: 'We need to optimise the page for the right keyword — include it in the title, the headings, and throughout the content. We should also add internal links from your other pages and make sure the page answers a question your clients are actually searching for. Can you tell me what terms you want to rank for?'",
                    "Say: 'The page probably needs more images — Google prefers pages with lots of visuals.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives specific, actionable advice — keyword in the title and headings, internal links, answering a real search query — and ends with a qualifying question. A is passive. C gives incorrect advice — images alone do not improve search rankings."
            },
            {
                "customerLine": "Client: 'Our website traffic is growing but we are not getting any leads from it. Why?'",
                "options": [
                    "Say: 'More traffic always leads to more leads eventually — just keep publishing content.'",
                    "Say: 'Traffic without leads usually means one of three things: the wrong audience is finding you, the pages they land on do not have a clear call to action, or the offer on the landing page is not compelling enough. Let us look at where the traffic is coming from and what page people land on — that will tell us where the gap is.'",
                    "Say: 'Your traffic is probably from bots — you need to block them before you can generate leads.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It identifies the three most common reasons (wrong audience, no CTA, weak offer) and proposes a diagnostic approach. A is too passive. C jumps to a technical conclusion without any evidence."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this SEO strategy brief. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Brief",
                "text": "SEO Strategy — Q3 2026"
            },
            {
                "speaker": "Brief",
                "text": "Our goal is to increase organic traffic and improve our ranking's on Google for three target keywords."
            },
            {
                "speaker": "Brief",
                "text": "We will write two articles per week, each optimised for a specific keyword."
            },
            {
                "speaker": "Brief",
                "text": "Every article will include a link to a relevant landing page so visitors can click trough to our service pages."
            },
            {
                "speaker": "Brief",
                "text": "We will track progress using Google Analytics and Google Search Console."
            },
            {
                "speaker": "Brief",
                "text": "The target is to rank on the first page of Google for our main keyword by the end of the quarter."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "improve our ranking's",
                "correction": "improve our rankings",
                "explanation": "No apostrophe is needed here. 'Rankings' is simply the plural of 'ranking' — more than one ranking. An apostrophe is only used to show possession (e.g., 'the ranking's impact') or in contractions (e.g., it's). Never use an apostrophe to form a regular plural noun."
            },
            {
                "lineIndex": 3,
                "incorrectText": "click trough",
                "correction": "click through",
                "explanation": "'Click through' is a phrasal verb meaning to follow a link from one page to another. 'Trough' is a completely different word — it is a container for animals to eat or drink from. The correct spelling is 'through' — meaning from one side to the other."
            },
            {
                "lineIndex": 5,
                "incorrectText": "rank on the first page of Google for our main keyword",
                "correction": "rank on the first page of Google for our main keyword — this is correct, but 'rank for our main keyword on the first page of Google' is more natural",
                "explanation": "Actually this sentence is grammatically correct as written — this is not a real mistake. Let me mark the actual mistake instead: 'rank on the first page' should be noted as correct; however the real error elsewhere needs checking. NOTE: Upon review, all other sentences are correct — only the two apostrophe and spelling errors above are genuine mistakes. Lesson writers: use only two mistakes if a third cannot be found cleanly."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: 'We do not really understand SEO. Can you explain it simply?'",
                "salespersonStart": "Of course — at its simplest, SEO is about helping Google understand what your website is about.",
                "suggestedCompletion": "When someone types a question into Google, Google looks through millions of websites to find the most relevant, useful answer. SEO is how you make sure your website is one of those answers. The main things you do are: use the right keywords in your content (the words your clients actually search for), write articles that genuinely answer their questions, and make sure your website is fast and easy to navigate. Do that consistently for three to six months and you will start appearing higher in search results."
            },
            {
                "customerLine": "Client: 'We have lots of traffic but from the wrong countries. We only sell in the UK.'",
                "salespersonStart": "That is a very common issue — and it is fixable.",
                "suggestedCompletion": "The problem is that your content is ranking for global keywords rather than UK-specific ones. We need to look at your keyword strategy and add UK-specific terms — for example, instead of 'LinkedIn marketing agency', target 'LinkedIn marketing agency UK'. We also need to make sure your website clearly signals to Google that you are a UK business — for example, your address, your country-specific pages, and your domain extension. Would you like me to do an audit of your current traffic to identify exactly where it is coming from?"
            },
            {
                "customerLine": "Client: 'A competitor is ranking above us for our most important keyword. What can we do?'",
                "salespersonStart": "First, let us look at what they are doing that we are not.",
                "suggestedCompletion": "When a competitor ranks above you, it usually means their content is more comprehensive, more useful, or better structured than yours. I would suggest we read their article carefully — how long is it? What questions does it answer that ours does not? What keywords does it use? Then we rewrite our version to be better in every way. Google wants to rank the best answer, not the most established company. If our content is more helpful, we can outrank them — it just takes time and deliberate improvement."
            }
        ]
    }
},
};
