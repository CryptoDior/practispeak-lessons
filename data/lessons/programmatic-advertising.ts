import { Lesson } from '@/types/lesson';

export const programmaticAdvertising: Lesson = {
  slug: 'programmatic-advertising',
  title: 'Programmatic Advertising',
  subtitle: 'How to understand automated digital buying — and read, discuss, and brief a programmatic campaign with confidence',
  level: 'B1-B2',
  description: 'Programmatic advertising has become the dominant method of buying digital media — but the vocabulary around it is dense, technical, and full of acronyms that can make conversations with ad tech partners feel impenetrable. This lesson demystifies the core concepts: DSP, SSP, RTB, cookies, targeting parameters, and the mechanics of how ads are bought and delivered at scale. The goal is to give you enough language to read a programmatic overview brief, ask the right questions, and make informed decisions about your campaigns.',
  heroImage: '/images/programmatic-advertising-hero.png',

  vocabulary: [
    {
      word: 'DSP',
      partOfSpeech: 'noun',
      definition: "Demand-Side Platform — the technology advertisers and agencies use to buy digital ad space automatically. A DSP connects to multiple ad exchanges and SSPs, so buyers can set their targeting, bidding rules, and budgets all in one place. The 'demand side' means the buyer's side of the deal.",
      example: 'Riley explained the tech stack to the client: We use a DSP to manage all your programmatic buys. Instead of going to each publisher individually, the DSP lets us access inventory across thousands of websites and apps simultaneously. We set your targeting parameters, your bid limits, and your daily budget — and the platform optimises the buying automatically throughout the day.',
      imageSlug: '/images/dsp.png',
    },
    {
      word: 'SSP',
      partOfSpeech: 'noun',
      definition: "Supply-Side Platform — the technology publishers use to sell their ad space to multiple buyers at the same time through ad exchanges and DSPs. An SSP helps a publisher get the most revenue possible from their available ad space by opening it up to many buyers at once. The 'supply side' means the publisher's side of the deal.",
      example: "Dana explained both sides of the ecosystem: When a user loads the Financial Times homepage, the FT's SSP sends a signal to multiple ad exchanges simultaneously saying: 'I have an impression available from a 45-year-old finance professional in London. What will you bid?' Our DSP receives that signal and decides within milliseconds whether to bid and how much. The SSP and DSP are the two sides of the same transaction.",
      imageSlug: '/images/ssp.png',
    },
    {
      word: 'RTB',
      partOfSpeech: 'noun',
      definition: 'Real-Time Bidding — the automated auction through which programmatic ad space is bought and sold. When a user loads a web page, an RTB auction happens in milliseconds: multiple DSPs bid for the impression, the highest bid wins, and the ad appears before the page finishes loading. RTB lets advertisers bid on individual impressions, not just fixed placements.',
      example: "Marcus explained the speed to the client: The whole RTB process happens in under 100 milliseconds — faster than a human blink. While the page is loading, the SSP calls an auction, DSPs receive the bid request, evaluate whether the impression matches their targeting criteria, calculate a bid price, submit it, and the winner's ad is served. All of that happens before you've even seen the page.",
      imageSlug: '/images/rtb.png',
    },
    {
      word: 'COOKIE',
      partOfSpeech: 'noun',
      definition: "A small file stored on a user's browser that tracks what they do across websites — pages visited, products viewed, actions taken. Cookies are the backbone of programmatic targeting, letting advertisers reach people based on their online behaviour. Third-party cookies — set by advertisers, not the website itself — are being phased out by major browsers, which is changing how programmatic targeting works.",
      example: "Riley addressed the client's question: Cookies are how we know you're bidding for someone who visited your pricing page three times last week but hasn't converted. The retargeting campaign reads the cookie that was placed when they visited your site and makes sure your ad follows them across the web. The challenge is that third-party cookies are being deprecated — we need to start planning alternative targeting approaches now.",
      imageSlug: '/images/cookie.png',
    },
    {
      word: 'TARGETING PARAMETER',
      partOfSpeech: 'noun',
      definition: 'A specific rule used to decide which users should see an ad. Targeting parameters include demographics (age, gender, location), behaviours (recent website visits, purchase history), context (the content on the page where the ad appears), and audience segments (job title, industry, interest category). The more precise the targeting, the more relevant each impression — but the smaller your available audience.',
      example: "Dana set the targeting parameters for the campaign: For this campaign, I'm using three stacked targeting parameters — job title contains 'Head of Marketing' or 'CMO', company size between 50 and 500 employees, and industry: financial services or legal. That narrows the audience significantly but makes each impression much more valuable. We'd rather reach 8,000 perfect-fit prospects than 800,000 generic ones.",
      imageSlug: '/images/targeting-parameter.png',
    },
    {
      word: 'VIEWABILITY',
      partOfSpeech: 'noun',
      definition: "The percentage of ads that are actually seen by a real person — not hidden below the fold, not covered by another element, not shown to a bot. The industry standard for a 'viewable' display ad is that at least 50% of the ad's pixels must be visible for at least one second. Low viewability means you are paying for ads nobody sees.",
      example: "Marcus reviewed the campaign report: Our viewability rate last month was 41%. The industry benchmark is 70%. That means 59% of our impressions were not technically seen. Either the ad placement is too far down the page, or we're buying from low-quality inventory. We need to set a viewability floor of 70% as a targeting parameter to filter out placements that don't meet that standard.",
      imageSlug: '/images/viewability.png',
    },
    {
      word: 'FREQUENCY CAP',
      partOfSpeech: 'noun',
      definition: 'A limit on how many times a single user sees the same ad within a set time period. Frequency capping stops ad fatigue — when someone sees the same ad too many times, they start ignoring it or even resenting the brand. Common caps are 3–5 impressions per user per week.',
      example: "Riley flagged the issue: Our frequency cap is currently set at 20 impressions per user per week — that's far too high. Some users in the retargeting pool are seeing this ad multiple times a day. Ad fatigue sets in after 5 or 6 exposures and after that point you're wasting spend and potentially damaging brand perception. Drop the frequency cap to 4 per week and watch what happens to CTR.",
      imageSlug: '/images/frequency-cap.png',
    },
    {
      word: 'BRAND SAFETY',
      partOfSpeech: 'noun',
      definition: "Steps taken to make sure ads do not appear next to content that could hurt the brand's reputation — such as fake news, extreme content, violence, or adult material. Brand safety settings in a DSP use keyword blocklists and category exclusions to keep ads out of harmful environments.",
      example: 'Dana briefed the client on the controls: Brand safety is built into our DSP setup for every campaign. We use a category exclusion list that blocks placement next to content flagged as misinformation, adult, violence, or politically inflammatory. We also use a keyword blocklist — if the page contains any of these 200 keywords, the bid is automatically suppressed. Your ad will not appear next to something that damages your reputation.',
      imageSlug: '/images/brand-safety.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THE DSP OPTIMISES THE BUYING AUTOMATICALLY',
      definition: "Use this phrase to explain how the platform handles bidding, targeting, and budget without you having to manage it every minute. 'Optimises automatically' means the system uses data to adjust bids in real time to get the best performance within the limits you set. It's useful when explaining programmatic to clients who are new to ad tech.",
      example: "Marcus explained the value to the client: Once we set the targeting parameters, bid ceiling, and daily budget, the DSP optimises the buying automatically — it will bid more for impressions that match the highest-value audience characteristics and less for lower-value ones. You don't need to monitor it manually; the algorithm is doing that continuously. We review performance weekly and make strategic adjustments, but the day-to-day buying decisions are handled by the platform.",
      imageSlug: '/images/the-dsp-optimises-the-buying-automatically.png',
      inAction: 'Once the targeting parameters are set, the DSP optimises the buying automatically — it adjusts bids in real time based on which placements are converting.',
      register: 'Technical / Professional — used in programmatic advertising discussions and media planning meetings. Appropriate for conversations with digital specialists, media teams, and technically informed clients.',
      inContext: "Dana was explaining the programmatic setup to a client who was new to the channel. You don't need to manage individual placements the way you would in a manual buy, she said. The DSP optimises the buying automatically — it learns which audience segments, times of day, and site placements are delivering the lowest cost per acquisition and shifts spend toward them in real time.",
    },
    {
      phrase: 'WE SET A FLOOR PRICE TO FILTER OUT LOW-QUALITY INVENTORY',
      definition: "Use this phrase to describe using minimum bid prices or viewability floors to cut out low-quality ad placements. A 'floor price' is the lowest CPM (cost per thousand impressions) the DSP will accept — anything cheaper is usually low-quality inventory or bot traffic. Common in campaign setup and quality discussions.",
      example: "Riley explained the quality strategy: We've set a floor price of £3 CPM to filter out low-quality inventory. Anything below that price point is typically remnant inventory with low viewability, high bot traffic, or poor-quality placement. It costs us more per impression, but the quality of the impressions we buy is dramatically higher — and that translates to better CTR and lower cost-per-conversion.",
      imageSlug: '/images/we-set-a-floor-price-to-filter-out-low-quality-inventory.png',
      inAction: 'We set a floor price to filter out low-quality inventory — if a placement costs less than £2 CPM, it is usually not worth the brand risk.',
      register: "Technical / Professional — used in programmatic strategy meetings and media plan discussions. 'Floor price' and 'low-quality inventory' are standard programmatic advertising terms.",
      inContext: "Marcus was reviewing the programmatic setup when he asked about brand safety. The biggest risk in open auction is appearing on sites we would never choose manually, the specialist explained. We set a floor price to filter out low-quality inventory — anything below our minimum CPM threshold gets excluded automatically. It's not a perfect filter, but it removes the lowest tier of risk.",
    },
    {
      phrase: 'THE CAMPAIGN IS TARGETING BASED ON...',
      definition: "Use this phrase to describe how the audience for a programmatic campaign is defined. It belongs in briefings with clients, internal teams, or platform partners — explaining who will see the ads and why. Always follow it with specific targeting criteria, not vague descriptions like 'marketing professionals'.",
      example: "Dana briefed the client on the setup: The campaign is targeting based on three stacked parameters: job title, company size, and recent website behaviour. Layer one — anyone who has visited the pricing page in the last 30 days. Layer two — within that pool, only those whose LinkedIn profile indicates they're a marketing decision-maker. Layer three — company size between 100 and 1,000 employees. That's a precision audience of about 12,000 people.",
      imageSlug: '/images/the-campaign-is-targeting-based-on.png',
      inAction: 'The campaign is targeting based on intent signals — users who have recently searched for terms related to compliance software in the past 30 days.',
      register: 'Neutral — standard phrase in programmatic briefings and campaign reporting. Always follow with the specific audience criteria used so stakeholders understand the targeting logic.',
      inContext: "Riley walked the client through the audience strategy. The campaign is targeting based on a combination of firmographic data and behavioural signals, she explained. We're not just targeting job titles — we're targeting people with those job titles who have recently engaged with content about data security and compliance. That's a much more qualified audience than a demographic filter alone.",
    },
    {
      phrase: 'THE THIRD-PARTY COOKIE IS BEING PHASED OUT',
      definition: 'A phrase for the industry-wide change that is removing the main targeting tool in programmatic advertising. Major browsers — Chrome, Safari, Firefox — are removing third-party cookie support, which means the whole industry has to find new ways to identify and target users. Use it in planning conversations about what comes next.',
      example: "Riley explained the strategic risk: The third-party cookie is being phased out — Google's Chrome is the last major browser to maintain it, and it's going away within the next 12 months. That means the retargeting model we rely on — identifying past website visitors across the web — will no longer work in the same way. We need a first-party data strategy now, not after the cookie disappears.",
      imageSlug: '/images/the-third-party-cookie-is-being-phased-out.png',
      inAction: 'As the third-party cookie is being phased out across major browsers, we are shifting our targeting strategy toward first-party data and contextual signals.',
      register: 'Technical / Industry — used in digital marketing strategy discussions about audience targeting and the future of programmatic. Well-established term that any digital marketer at B2 level should understand.',
      inContext: "The client had asked why they needed to invest in first-party data collection. Dana explained clearly. The third-party cookie is being phased out across most major browsers, she said. That means the way programmatic targeting has worked for the past decade is changing fundamentally. Companies that have built strong first-party data will have a significant competitive advantage over those that haven't.",
    },
    {
      phrase: 'WE NEED TO SET A FREQUENCY CAP TO AVOID AD FATIGUE',
      definition: "Use this phrase when recommending that a campaign limit how many times the same user sees the same ad. 'Ad fatigue' is what happens when someone sees an ad too often — they stop responding to it or start to dislike the brand. A frequency cap puts a limit on how many times the same person can see the ad in a given time period.",
      example: "Dana flagged the creative fatigue risk: We need to set a frequency cap to avoid ad fatigue — the current setup has no cap, which means some users in the retargeting pool are being shown this ad 15 to 20 times a week. After about five exposures, CTR typically drops by 60% and negative sentiment starts to build. I'm setting the cap at five per week and rotating the creative every two weeks.",
      imageSlug: '/images/we-need-to-set-a-frequency-cap-to-avoid-ad-fatigue.png',
      inAction: 'If the same person sees our ad 20 times in a week, we need to set a frequency cap to avoid ad fatigue — overexposure damages brand perception.',
      register: "Technical / Professional — used in programmatic campaign planning and optimisation meetings. 'Frequency cap' and 'ad fatigue' are standard terms in digital media buying and campaign management.",
      inContext: "Marcus noticed the campaign performance dropping in week three. The click-through rate is falling and our sentiment monitoring shows negative comments increasing, he reported. We need to set a frequency cap to avoid ad fatigue. The audience is seeing this too many times — what feels like strong reach to us feels like irritation to them, and they're starting to associate the brand with annoyance rather than relevance.",
    },
    {
      phrase: 'THE BRAND SAFETY SETTINGS EXCLUDE...',
      definition: 'Use this phrase to describe what content or categories you have blocked from your campaign — the inventory you will not bid on. It belongs in campaign setup briefings, reporting, and quality assurance conversations. Always follow it with the specific list of excluded categories or the reason behind the keyword blocklist.',
      example: "Marcus confirmed the brand safety setup to the client: The brand safety settings exclude six content categories: adult content, political advertising, misinformation and disinformation, violence and graphic content, gambling, and competing financial services brands. We've also built a 250-keyword blocklist that suppresses bids on any page containing terms associated with those categories. Your ads will only appear in professionally appropriate, brand-safe environments.",
      imageSlug: '/images/the-brand-safety-settings-exclude.png',
      inAction: 'The brand safety settings exclude news content covering conflict and political controversy — we do not want our ads appearing next to sensitive or divisive material.',
      register: "Technical / Professional — used in programmatic setup discussions and brand safety briefings. 'Brand safety settings' is a standard term in digital media buying that any programmatic practitioner should know.",
      inContext: 'Dana was briefing the new media partner on the account requirements. We have strict brand safety rules, she said. The brand safety settings exclude all content categorised as violence, political news, and adult material — and we have a custom exclusion list built from past campaigns where placements caused concerns. Our clients are in a regulated industry and their audiences are conservative. We cannot afford to appear in the wrong context.',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I want to walk you through the programmatic overview for the Q4 campaign. I'll try to keep this accessible — there's a lot of jargon in this space and I'd rather we focus on the decisions than the technology.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Appreciate that. Can you start by explaining how the buying actually works? I want to understand what we're paying for.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "At a high level: every time a user loads a page with ad space, an automated auction takes place in real time. That's called [[RTB:Real-Time Bidding — the automated auction through which programmatic inventory is bought and sold in milliseconds]]. Our [[DSP:Demand-Side Platform — the technology advertisers use to buy digital inventory automatically across multiple publishers]] receives the auction signal, evaluates whether it matches our targeting criteria, and submits a bid. All of this happens in under 100 milliseconds.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "On the other side, the publisher uses an [[SSP:Supply-Side Platform — the technology publishers use to sell inventory to multiple buyers simultaneously]] to send that auction signal to many DSPs at once. The highest bid wins and the ad is served. That's the whole ecosystem in two sentences.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How do we control who sees the ads?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Through [[targeting parameter:a specific criterion used to define which users should see an ad — demographics, behaviour, context, or audience segment]]s. For this campaign I'm proposing three stacked layers: first, anyone who has visited the pricing page in the last 30 days. Second, job title matching Head of Marketing, VP of Marketing, or CMO. Third, company size between 100 and 1,000 employees. That combination gives us a very precise audience.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The behavioural layer — knowing someone visited the pricing page — is built on [[cookie:a small file stored in a browser that tracks user behaviour across websites]] data. That cookie was placed when they visited your site. It's what enables retargeting.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I've heard that cookies are disappearing. Should we be worried about that for this campaign?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "For Q4 we're fine — the third-party cookie is being phased out by Chrome but not before mid-next year. But it's a strategic issue we need to address in Q1. We should start building a first-party data strategy now so we're not dependent on third-party cookies when they're gone.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Two other things we need to address in the campaign setup. First, [[viewability:the percentage of ads that are actually seen by a human — the industry standard is 50% of pixels visible for at least one second]]. Our Q3 viewability rate was 41%. The benchmark is 70%. We're wasting money on impressions that nobody sees.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I've set a viewability floor of 70% in the DSP — any placement that doesn't meet that standard will be automatically excluded from bidding. It increases cost per impression slightly, but the quality improvement is significant.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What was the second thing?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "[[Frequency cap:a limit on how many times a single user sees the same ad within a given time period, to prevent ad fatigue]]. Our retargeting campaign currently has no cap. Some users in the pool are seeing this ad 15 to 20 times a week — that's ad fatigue territory. I'm setting the cap at five impressions per user per week.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And I want to confirm the [[brand safety:measures taken to ensure ads do not appear next to content that could damage the brand's reputation]] setup is in place before we go live. Six content categories are excluded, and there's a 250-keyword blocklist active in the DSP. Your ads won't appear next to anything inappropriate.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Good. The DSP optimises the buying automatically once all of that is set up?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. We set the targeting parameters, the bid ceiling, the viewability floor, the frequency cap, and the brand safety settings. After that, the DSP handles the bidding decisions in real time. We review performance weekly and make strategic adjustments — but the day-to-day optimisation is automated.',
    }
  ],

  matchingExercise: [
    {
        "word": "DSP",
        "definition": "Demand-Side Platform — the technology advertisers use to buy digital inventory automatically across multiple publishers"
    },
    {
        "word": "SSP",
        "definition": "Supply-Side Platform — the technology publishers use to sell inventory to multiple buyers simultaneously"
    },
    {
        "word": "RTB",
        "definition": "Real-Time Bidding — the automated auction through which programmatic inventory is bought and sold in milliseconds"
    },
    {
        "word": "cookie",
        "definition": "a small file stored in a user's browser that tracks behaviour across websites, enabling retargeting"
    },
    {
        "word": "targeting parameter",
        "definition": "a specific criterion — demographics, behaviour, context — used to define which users see an ad"
    },
    {
        "word": "viewability",
        "definition": "the percentage of ads actually seen by a human — industry standard is 50% of pixels visible for one second"
    },
    {
        "word": "frequency cap",
        "definition": "a limit on how many times a single user sees the same ad in a given period, to prevent ad fatigue"
    },
    {
        "word": "brand safety",
        "definition": "measures taken to prevent ads from appearing next to content that could damage the brand's reputation"
    }
],
  fillBlankExercise: [
    {
        "before": "The DSP ",
        "after": " the buying automatically — once the parameters are set, the algorithm makes bid decisions in real time.",
        "answer": "optimises"
    },
    {
        "before": "We set a viewability ",
        "after": " of 70% to filter out low-quality placements where the ad is unlikely to be seen.",
        "answer": "floor"
    },
    {
        "before": "The campaign is ",
        "after": " based on three stacked parameters: pricing page visitors, job title, and company size.",
        "answer": "targeting"
    },
    {
        "before": "The third-party cookie is being phased ",
        "after": " — we need a first-party data strategy before it disappears completely.",
        "answer": "out"
    },
    {
        "before": "We need to set a frequency ",
        "after": " to avoid ad fatigue — five impressions per user per week is the maximum.",
        "answer": "cap"
    },
    {
        "before": "The brand safety settings ",
        "after": " six content categories and activate a 250-keyword blocklist to prevent harmful placements.",
        "answer": "exclude"
    }
],
  multipleChoiceExercise: [
    {
        "question": "How long does the RTB auction process take from start to finish?",
        "options": [
            "Approximately one second — fast enough that users don't notice it",
            "Under 100 milliseconds — faster than a human blink",
            "Between 500 and 800 milliseconds — about half a second"
        ],
        "correctIndex": 1
    },
    {
        "question": "What was the viewability rate in Q3, and what is the industry benchmark?",
        "options": [
            "Q3 rate: 57% — industry benchmark: 80%",
            "Q3 rate: 41% — industry benchmark: 70%",
            "Q3 rate: 62% — industry benchmark: 70%"
        ],
        "correctIndex": 1
    },
    {
        "question": "How many impressions per user per week does Dana set as the frequency cap?",
        "options": [
            "Three impressions per user per week",
            "Ten impressions per user per week",
            "Five impressions per user per week"
        ],
        "correctIndex": 2
    },
    {
        "question": "When does Riley say the third-party cookie phase-out will affect the Q4 campaign?",
        "options": [
            "It will affect Q4 immediately — action is needed before the campaign goes live",
            "It won't affect Q4 — the Chrome deprecation is not until mid-next year",
            "The impact is uncertain — it depends on which browsers the target audience uses"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Have you ever noticed an ad following you around the internet after you visited a website? Did you find it useful, annoying, or unsettling? What did it make you think about the brand behind it?",
        "When you think about digital advertising, what do you think works? What do you skip or ignore? What would make you actually click on an ad?",
        "Have you ever seen a brand ad appearing next to content that felt wrong — a serious topic, a political piece, or something inappropriate? What was your reaction to the brand in that moment?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "The RTB auction _____ in under 100 milliseconds — before the page has finished loading.",
            "options": [
                "takes place",
                "is taking place",
                "took place"
            ],
            "correctIndex": 0,
            "explanation": "'Takes place' (present simple) is correct for describing how RTB works as a general, repeated process. Present simple is used for facts, habitual actions, and processes that happen regularly. 'Is taking place' (present continuous) describes something happening right now — not appropriate for explaining a general process. 'Took place' (past simple) refers to a specific past event. When explaining how a system or process generally works ('RTB works like this...'), use present simple: 'takes place', 'processes', 'delivers', 'optimises'."
        },
        {
            "sentence": "The DSP evaluates each bid request and _____ whether the impression matches the campaign's targeting parameters.",
            "options": [
                "determines",
                "determining",
                "is determined"
            ],
            "correctIndex": 0,
            "explanation": "'Determines' is the correct present simple form — the DSP is a singular subject, and the verb must take the -s ending in third-person singular present simple. This sentence describes what the DSP does as part of its regular process (present simple for habitual/process descriptions). 'Determining' is a present participle — it could work in a participial clause ('the DSP, determining whether...') but not as the main verb in a list of actions ('evaluates and determines'). 'Is determined' is passive — it would mean the DSP is being determined by something else, which reverses the meaning."
        },
        {
            "sentence": "Third-party cookies are _____ phased out by major browsers — advertisers must prepare alternative targeting strategies.",
            "options": [
                "being",
                "getting",
                "having"
            ],
            "correctIndex": 0,
            "explanation": "'Being' is correct — the passive continuous 'are being phased out' describes a process currently in progress (browsers are in the process of removing third-party cookie support). The structure is: are + being + past participle (phased out). 'Getting phased out' is also possible informally, but in formal business English, the standard passive is 'are being phased out'. 'Having phased out' is a perfect participle and doesn't fit the 'are + ___' pattern in a standard way. For passive processes currently underway, use: is/are + being + past participle."
        },
        {
            "sentence": "A frequency cap _____ the number of times a single user sees the same ad in a given period.",
            "options": [
                "limits",
                "limit",
                "limited"
            ],
            "correctIndex": 0,
            "explanation": "'Limits' is the correct third-person singular present simple form — 'a frequency cap' is a singular subject. This sentence states a general fact about what a frequency cap does (present simple for general truths and definitions). 'Limit' (without -s) is the plural form, used with 'frequency caps' or 'these settings'. 'Limited' is past tense or past participle — it could appear in a sentence like 'the cap limited exposure' (past) or 'exposure was limited by the cap' (passive)."
        },
        {
            "sentence": "Brand safety settings are configured _____ ads do not appear next to inappropriate content.",
            "options": [
                "so that",
                "so as",
                "in order"
            ],
            "correctIndex": 0,
            "explanation": "'So that' is the correct conjunction for expressing purpose with a full clause: 'so that + subject + verb'. 'Configured so that ads do not appear' = configured with the goal that ads will not appear next to harmful content. 'So as' must be followed by an infinitive: 'so as to prevent' (not 'so as ads do not appear'). 'In order' also takes an infinitive: 'in order to prevent'. When the purpose clause has its own subject and verb, use 'so that'. When the purpose is expressed with an infinitive, use 'in order to' or 'so as to'."
        },
        {
            "sentence": "Low viewability means you're paying _____ ads that fewer than half of users actually see.",
            "options": [
                "for",
                "to",
                "on"
            ],
            "correctIndex": 0,
            "explanation": "'For' is the correct preposition — 'paying for something' = spending money on something, purchasing it. 'Paying for ads' = buying ads. 'Paying to ads' is not grammatical — 'pay to' is used before a verb: 'pay to access', 'pay to view'. 'Paying on ads' is not standard — while 'spending money on ads' is correct, 'paying on' is not the right construction. The pattern: pay + for + noun = purchase or spend money on something."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the client or colleague says. Choose the best professional response.",
        "items": [
            {
                "customerLine": "We tried programmatic before and our ads kept showing up on completely irrelevant websites — even some that were embarrassing for our brand. Is that normal?",
                "options": [
                    "Yes — that's a risk with programmatic. You can't control exactly where your ads appear.",
                    "Not if it's set up correctly. What you experienced is a brand safety failure — it means either the content exclusion categories weren't configured properly, or the campaign was running on open exchange inventory without any quality filters. A well-configured programmatic campaign should have a category blocklist, a keyword exclusion list, and a vetted private marketplace deal for premium inventory. Those three safeguards together should prevent almost all inappropriate placements.",
                    "Programmatic is not ideal for brands with strict brand safety requirements. You might be better off buying directly from premium publishers."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the professional response — it doesn't dismiss the concern or abandon programmatic, but explains what went wrong (poor configuration) and what the correct solution looks like (three specific safeguards). This is the kind of answer that builds confidence in a sceptical client. Option A accepts an avoidable problem as inevitable, which is inaccurate — brand safety issues are largely preventable with proper setup. Option C gives up on a powerful channel based on a setup problem rather than a fundamental channel limitation."
            },
            {
                "customerLine": "Why should we use a DSP rather than just buying directly from the publishers we know?",
                "options": [
                    "Direct publisher buying is always more expensive and less efficient. DSPs are always the better choice.",
                    "Both approaches have merit — it depends on your goals. Direct publisher buying gives you guaranteed premium placement, a known brand environment, and often a deeper commercial relationship. A DSP gives you scale, automation, and precision targeting across thousands of publishers simultaneously at typically lower CPMs. For most campaigns, the answer is a combination: use direct buying for your most strategically important publishers and DSP for reach and efficiency across the broader audience.",
                    "DSPs are more cost-effective. You can reach the same audiences at a lower cost through programmatic than through direct deals."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it gives a balanced view that acknowledges the real strengths of both approaches and suggests the most sophisticated answer (a combination strategy). This is how an experienced practitioner thinks. Option A is an overstatement — direct buying is preferred for high-value, premium placements and brand alignment with specific publishers. Option C is partially true on cost, but oversimplifies — DSPs don't always reach exactly the same audiences as direct publisher deals, particularly for premium contexts."
            },
            {
                "customerLine": "With cookies going away, should we stop investing in retargeting?",
                "options": [
                    "Not yet. Third-party cookies aren't fully deprecated in Chrome until next year, so current retargeting campaigns will continue to work. The question is what we build in parallel. First-party data strategies — email capture, CRM-based audience targeting, and contextual targeting — are the alternatives we should be developing now. Retargeting as a concept won't disappear; the mechanism that enables it will change. Start building first-party data assets today so the transition is smooth.",
                    "Yes — retargeting based on third-party cookies is already unreliable in Safari and Firefox. We should focus entirely on contextual targeting instead.",
                    "The cookie deprecation has been delayed so many times that it's not worth planning around. We'll deal with it when it actually happens."
                ],
                "correctIndex": 0,
                "explanation": "Option A is the right answer — it's calibrated, practical, and forward-looking without being alarmist or dismissive. It separates the timeline question (current campaigns are fine) from the strategic question (what do we build now?) and names the specific alternatives. Option B is too reactive — abandoning retargeting entirely would be a significant strategic mistake before the mechanism is actually gone. Option C has been true historically (cookie deprecation has been delayed), but is dangerously complacent — the change is coming and planning takes time."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the programmatic campaign briefing extract. Three lines have a grammar mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "The campaign is targeting based on three stacked parameters: pricing page visitors, decision-maker job titles, and company size between 100 and 1,000 employees."
            },
            {
                "speaker": "Dana",
                "text": "The RTB auction takes place in under 100 milliseconds — the whole process completes before the page have finished loading."
            },
            {
                "speaker": "Marcus",
                "text": "Our Q3 viewability rate was 41%, that is significantly below the industry benchmark of 70%. We need to set a viewability floor immediately."
            },
            {
                "speaker": "Riley",
                "text": "The frequency cap is currently set at five impressions per user per week, which should prevent ad fatigue and protect CTR performance."
            },
            {
                "speaker": "Dana",
                "text": "The brand safety settings exclude six content categories and activate a keyword blocklist that preventing bids on any page associated with those topics."
            },
            {
                "speaker": "Marcus",
                "text": "Once all parameters are configured, the DSP will optimise the buying automatically throughout the campaign period."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "the page have finished loading",
                "correction": "the page has finished loading",
                "explanation": "'The page' is a singular subject, so the present perfect requires 'has' — not 'have'. The present perfect is formed with 'have/has + past participle'. With singular subjects (he/she/it/the page), always use 'has'. 'The page has finished', 'the auction has completed', 'the ad has loaded' — all use 'has' because the subjects are singular. 'Have' is used with plural subjects or with I/you: 'the pages have finished loading', 'we have completed the auction', 'they have finished loading'."
            },
            {
                "lineIndex": 2,
                "incorrectText": "Our Q3 viewability rate was 41%, that is significantly below",
                "correction": "Our Q3 viewability rate was 41%, which is significantly below",
                "explanation": "'Which' is the correct relative pronoun here, not 'that'. 'Which' is used in non-restrictive relative clauses — clauses that add extra information about the whole preceding clause or noun, separated by a comma. 'Our viewability rate was 41%, which is below the benchmark' adds information about the stated rate. 'That' is used in restrictive relative clauses without commas: 'the rate that we targeted was 70%'. When a comma precedes the relative clause, always use 'which' — never 'that' after a comma."
            },
            {
                "lineIndex": 4,
                "incorrectText": "that preventing bids",
                "correction": "that prevents bids",
                "explanation": "'Prevents' is the correct form — in a relative clause, the verb must agree with the subject and be in the correct form. 'A keyword blocklist that prevents bids' — the relative pronoun 'that' refers to 'a keyword blocklist' (singular), so the verb is 'prevents' (third-person singular present simple). 'That preventing' is incorrect because '-ing' forms cannot be the main verb of a clause without an auxiliary: 'that is preventing' would be present continuous. Without the auxiliary 'is', you need the present simple: 'that prevents'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The programmatic specialist starts a sentence in a client meeting. Work with your partner to finish it professionally.",
        "items": [
            {
                "customerLine": "We want to make sure our ads reach the right people and not just anyone. How do we do that?",
                "salespersonStart": "Precision targeting in programmatic comes from stacking multiple targeting parameters together — each layer narrows the audience. For your campaign, I'd recommend three layers...",
                "suggestedCompletion": "First, a behavioural layer: anyone who has visited your pricing page or resources section in the last 60 days — these are warm prospects who've already shown intent. Second, a professional layer: job titles matching Head of Marketing, Marketing Director, or CMO. Third, a firmographic layer: companies between 100 and 500 employees in financial services or legal. Each layer reduces the audience size, but what remains is a very high-quality, high-intent group where every impression has real value."
            },
            {
                "customerLine": "Our CPM is very low but we're not seeing any results. Why isn't low CPM a good thing?",
                "salespersonStart": "Low CPM is only good if the impressions you're buying are actually valuable. The cheapest inventory in the programmatic ecosystem is cheap for a reason...",
                "suggestedCompletion": "It's typically remnant inventory — the placements nobody else wanted. It's often below the fold where nobody scrolls, on low-quality sites with high bot traffic, or with very low viewability. You might be paying £0.80 per thousand impressions, but if only 30% of those ads are actually seen by humans, your real cost per viewable impression is much higher than a higher-CPM campaign with 80% viewability. Set a viewability floor and a quality floor. Better inventory at a higher CPM will almost always outperform cheap inventory on cost-per-conversion."
            },
            {
                "customerLine": "What should we do now to prepare for the third-party cookie deprecation?",
                "salespersonStart": "The most important thing is to start building first-party data assets — because when third-party cookies are gone, the data you own is the only data you'll have. Practically, that means three things...",
                "suggestedCompletion": "First, maximise email capture across all touchpoints now — every download, webinar, and contact form should be feeding a consented first-party audience. Second, implement server-side tagging to capture first-party behavioural data on your own domain. Third, test contextual targeting this quarter — it targets based on page content rather than user history, so it doesn't rely on cookies at all. If you start building these assets now, the transition when Chrome finally deprecates will be a minor adjustment, not a crisis."
            }
        ]
    }
},
};
