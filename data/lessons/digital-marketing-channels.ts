import { Lesson } from '@/types/lesson';

export const digitalMarketingChannels: Lesson = {
  slug: 'digital-marketing-channels',
  title: 'Digital Marketing Channels',
  subtitle: 'How to choose the right mix of channels for your campaign — and explain your choices to a client',
  level: 'B1-B2',
  description: 'There are more marketing channels available than ever — and the hardest job is choosing the right ones. In this lesson you will learn the vocabulary for describing and comparing digital marketing channels, understand the difference between paid, earned, and owned media, and practise writing and presenting a channel strategy summary to a client.',
  heroImage: '/images/digital-marketing-channels-hero.png',

  vocabulary: [
    {
      word: 'PAID MEDIA',
      partOfSpeech: 'noun',
      definition: 'Any channel where you pay to place your message in front of an audience — ads, sponsored posts, and paid search.',
      example: 'Paid media gives you speed — you can be in front of 50,000 targeted prospects tomorrow. The trade-off is that the moment you stop paying, the visibility stops too.',
      imageSlug: '/images/paid-media.png',
    },
    {
      word: 'EARNED MEDIA',
      partOfSpeech: 'noun',
      definition: 'Attention and coverage you get for free because someone else chose to share, mention, or feature you — PR, word of mouth, and organic shares.',
      example: 'Getting featured in an industry publication is earned media — you did not pay for it, which is why it carries more credibility than an ad.',
      imageSlug: '/images/earned-media.png',
    },
    {
      word: 'OWNED MEDIA',
      partOfSpeech: 'noun',
      definition: 'Channels you fully control — your website, email list, blog, and social media accounts.',
      example: 'Your email list is your most valuable owned media asset — you own it completely, no algorithm can take it away, and it converts better than almost any paid channel.',
      imageSlug: '/images/owned-media.png',
    },
    {
      word: 'OMNICHANNEL',
      partOfSpeech: 'adjective',
      definition: 'A strategy where all channels work together to give the customer one consistent experience — regardless of where they first encounter the brand.',
      example: 'An omnichannel campaign means someone who sees your LinkedIn ad, then reads your blog, then gets your email all feels like they are having one continuous conversation with your brand — not three separate ones.',
      imageSlug: '/images/omnichannel.png',
    },
    {
      word: 'ATTRIBUTION',
      partOfSpeech: 'noun',
      definition: 'Working out which channel or touchpoint actually deserves credit for a conversion — which part of the journey made the sale happen.',
      example: 'Attribution is one of the hardest problems in marketing — a client might see a LinkedIn ad, read a blog post, open an email, and then book a call. Which one gets the credit?',
      imageSlug: '/images/attribution.png',
    },
    {
      word: 'ORGANIC',
      partOfSpeech: 'adjective',
      definition: 'Content or traffic that reaches people without paid promotion — through search rankings, social algorithms, or genuine sharing.',
      example: 'Organic reach takes longer to build than paid, but once it is working it brings consistent traffic without a media spend behind every piece of content.',
      imageSlug: '/images/organic.png',
    },
    {
      word: 'REACH',
      partOfSpeech: 'noun',
      definition: 'The number of people who see your content or campaign — how wide your message spreads.',
      example: 'The campaign had a reach of 180,000 people — but reach alone tells you nothing about quality. What matters is how many of those 180,000 matched the target persona.',
      imageSlug: '/images/reach.png',
    },
    {
      word: 'TOUCHPOINT',
      partOfSpeech: 'noun',
      definition: 'Any moment when a potential customer comes into contact with your brand — an ad, an email, a blog post, an event, or a sales call.',
      example: 'Research shows B2B buyers need an average of 7 to 10 touchpoints before they are ready to have a serious conversation — which is why a single-channel strategy almost never works.',
      imageSlug: '/images/touchpoint.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'CUT THROUGH [THE NOISE]',
      definition: 'To make your message stand out in a crowded environment where the audience is bombarded with competing content.',
      example: 'The only way to cut through the noise on LinkedIn right now is specificity — a post written for one person always outperforms a post written for everyone.',
      imageSlug: '/images/cut-through-the-noise.png',
    },
    {
      phrase: 'DOUBLE DOWN ON [A CHANNEL]',
      definition: 'To increase your investment in a channel that is already working — rather than spreading budget equally across everything.',
      example: 'LinkedIn is generating 80% of our leads for a quarter of the budget. We should double down on it and pull back from the channels that are underperforming.',
      imageSlug: '/images/double-down-on-a-channel.png',
    },
    {
      phrase: 'DRIVE TRAFFIC TO [A PAGE]',
      definition: 'To use marketing activity to send people to a specific destination — a landing page, a case study, or a booking form.',
      example: 'The LinkedIn campaign will drive traffic to the case study landing page — that is where the conversion happens, not in the ad itself.',
      imageSlug: '/images/drive-traffic-to-a-page.png',
    },
    {
      phrase: 'DROP OFF [IN A FUNNEL]',
      definition: 'To lose a potential customer at a specific point in the journey — when they stop engaging before completing the desired action.',
      example: 'Our analytics show a significant drop-off between the landing page and the booking form — which tells us the page is not doing its job.',
      imageSlug: '/images/drop-off-in-a-funnel.png',
    },
    {
      phrase: 'TEST [A CHANNEL] BEFORE SCALING',
      definition: 'To run a small, controlled campaign on a new channel to validate results before committing the full budget.',
      example: 'Never scale a new channel before you test it — run a 30-day pilot with a limited budget, check the cost per lead, and then decide whether to invest more.',
      imageSlug: '/images/test-a-channel-before-scaling.png',
    },
    {
      phrase: 'MOVE [SOMEONE] ALONG THE FUNNEL',
      definition: 'To use the right content or channel at the right moment to take a prospect from one stage of the buying journey to the next.',
      example: 'The email sequence is designed to move prospects along the funnel — the first email builds awareness, the second shares proof, and the third invites a conversation.',
      imageSlug: '/images/move-someone-along-the-funnel.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley — before we approve the budget, I want to understand why you chose these specific channels. Walk me through the logic.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Of course. The strategy is built around three types of media working together. [[Paid media:channels where you pay to place your message in front of an audience]] gives us speed and precision — we can get in front of your exact [[target market:the specific group you are trying to reach]] from day one. [[Earned media:attention you get for free because someone else chose to share or feature you]] gives us credibility — when someone else says you are good, it means more than when you say it yourself. And [[owned media:channels you fully control, like your email list and website]] gives us control — particularly the email list, which no algorithm can take away from us.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How do you handle [[attribution:working out which channel deserves credit for a conversion]] across all three?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is the honest challenge with [[omnichannel:a strategy where all channels work together for one consistent experience]] marketing. A prospect might see a LinkedIn ad, read a blog post, then open an email and book a call. Each [[touchpoint:any moment when a potential customer comes into contact with your brand]] played a role. We use last-touch [[attribution:working out which channel gets credit]] for reporting — the email gets the conversion credit — but we track the full journey so we know what started it.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about [[organic:content or traffic that reaches people without paid promotion]] — how does that fit in?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: '[[Organic:unpaid content reach]] LinkedIn content runs alongside the paid activity — three posts a week that build credibility and [[reach:the number of people who see your content]] the people who follow you. It takes longer to build, but it reinforces the [[paid media:paid advertising]] so prospects see TechFlow in multiple places. That repetition is what helps us [[cut through:make our message stand out]] in a crowded market.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And the [[reach:how many people see the campaign]] — how many people are we talking about?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The LinkedIn campaign has an estimated reach of 40,000 people in your target persona — operations and supply chain directors in UK and DACH manufacturing. But I want to be honest: [[reach:number of people who see content]] alone is not the goal. We want the right 40,000 people to see it enough times — enough [[touchpoints:moments of contact with the brand]] — to move along the funnel. Seven to ten interactions before a B2B buyer is ready to talk.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What if one channel is not working? How do we adjust?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We review at 30 days. If a channel is [[dropping off:losing prospects at a specific point]] or underperforming on cost per lead, we [[double down on:increase investment in]] what is working and reduce or pause what is not. We [[test:run a small pilot to validate results]] before we commit the full budget — so we are never locked in. The first month is always data-gathering. The real decisions come at week five.',
    }
  ],

  matchingExercise: [
    {
        "word": "PAID MEDIA",
        "definition": "Any channel where you pay to place your message in front of an audience — ads, sponsored posts, paid search"
    },
    {
        "word": "EARNED MEDIA",
        "definition": "Attention or coverage you get for free because someone else chose to share or feature you"
    },
    {
        "word": "OWNED MEDIA",
        "definition": "Channels you fully control — your website, email list, blog, and social accounts"
    },
    {
        "word": "OMNICHANNEL",
        "definition": "A strategy where all channels work together to give the customer one consistent experience"
    },
    {
        "word": "ATTRIBUTION",
        "definition": "Working out which channel or touchpoint deserves credit for a conversion"
    },
    {
        "word": "ORGANIC",
        "definition": "Content or traffic that reaches people without paid promotion"
    },
    {
        "word": "REACH",
        "definition": "The number of people who see your content or campaign"
    },
    {
        "word": "TOUCHPOINT",
        "definition": "Any moment when a potential customer comes into contact with your brand"
    }
],
  fillBlankExercise: [
    {
        "before": "",
        "after": "gives you speed — you can be in front of 50,000 targeted prospects tomorrow, but the moment you stop paying, the visibility stops.",
        "answer": "Paid media"
    },
    {
        "before": "Getting featured in an industry publication is",
        "after": "— you did not pay for it, which is why it carries more credibility than an ad.",
        "answer": "earned media"
    },
    {
        "before": "Your email list is your most valuable",
        "after": "asset — you own it completely and no algorithm can take it away.",
        "answer": "owned media"
    },
    {
        "before": "An",
        "after": "campaign means a prospect who sees your LinkedIn ad, reads your blog, then gets your email all feels like one continuous conversation.",
        "answer": "omnichannel"
    },
    {
        "before": "",
        "after": "is one of the hardest problems in marketing — working out which channel actually deserves credit for the conversion.",
        "answer": "Attribution"
    },
    {
        "before": "",
        "after": "reach takes longer to build than paid, but once it is working it brings consistent traffic without a media spend behind every piece.",
        "answer": "Organic"
    },
    {
        "before": "The campaign had a",
        "after": "of 180,000 — but the number alone tells you nothing about quality without knowing how many matched the target persona.",
        "answer": "reach"
    },
    {
        "before": "B2B buyers need an average of 7–10",
        "after": "before they are ready to have a serious conversation — which is why a single-channel strategy almost never works.",
        "answer": "touchpoints"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client has a limited budget and wants to choose between LinkedIn ads and organic LinkedIn content. What advice should you give?",
        "options": [
            "Always choose paid — organic reach has declined significantly and is not worth the time investment.",
            "The best approach is usually both — paid gives you immediate, targeted reach while organic builds credibility over time. If the budget is very tight, start with organic to build proof that the content resonates, then invest in paid to amplify what is working. Never scale paid spend without knowing what content your audience responds to.",
            "Always start with organic — build an audience first before spending any budget on advertising.",
            "Choose based on your target audience's age — younger buyers respond to organic, older buyers respond to paid."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between earned media and owned media?",
        "options": [
            "Earned media is digital. Owned media can be physical, like a brochure or event stand.",
            "Earned media is attention you get because someone else chose to give it to you — a journalist, a client, a referral partner. Owned media is what you control directly — your website, email list, and social accounts. Earned is harder to get but carries more credibility. Owned is always available but requires the audience to come to you.",
            "Owned media is free. Earned media requires a PR budget to generate.",
            "Earned media is for brand awareness. Owned media is for lead generation."
        ],
        "correctIndex": 1
    },
    {
        "question": "A B2B campaign uses LinkedIn ads, email nurturing, and a webinar. How would you explain attribution to a client asking 'which channel generated the most leads?'",
        "options": [
            "Whichever channel the lead clicked last is the one that generated it — last-touch attribution is the standard.",
            "Attribution in a multi-channel campaign is complex. Most conversions involve multiple touchpoints — a prospect might see the LinkedIn ad first, attend the webinar second, and then convert via email third. You can use last-touch attribution to credit the final step, but be clear with the client that all three channels contributed. What you are really measuring is cost per lead per channel, not a single source of truth.",
            "Divide the leads equally between the three channels — it is impossible to know which was more important.",
            "The channel with the highest spend should receive attribution credit, as it drove the most activity."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'double down on a channel'?",
        "options": [
            "To use the same channel for two different campaigns simultaneously.",
            "To significantly increase your investment in a channel that is already producing strong results — rather than spreading budget evenly across underperforming channels. If LinkedIn is generating 80% of your leads at half the cost of paid search, doubling down means reallocating more budget to LinkedIn.",
            "To publish content twice as frequently on a channel to increase organic reach.",
            "To run identical campaigns on the same channel in two different markets at the same time."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why do B2B buyers typically need 7–10 touchpoints before converting?",
        "options": [
            "Because B2B buyers are more sceptical than B2C buyers and take longer to trust new brands.",
            "Because B2B decisions involve higher stakes, multiple stakeholders, and longer evaluation periods — a buyer needs to encounter your brand enough times and in enough different contexts to build sufficient confidence that you can deliver before they are willing to invest time in a conversation.",
            "Because B2B buyers are busy and often miss marketing messages the first few times they are sent.",
            "Because the sales cycle in B2B is regulated and requires a minimum number of marketing contacts."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the most important thing to check when a channel is underperforming?",
        "options": [
            "Whether the creative assets are strong enough — poor design is almost always the cause of underperformance.",
            "Whether the right audience is being reached, whether the message matches their need-state, and whether the channel itself is appropriate for where they are in the buying journey. Most underperformance comes from one of these three — not from the channel itself being wrong.",
            "Whether the budget is sufficient — underfunded campaigns almost always underperform regardless of quality.",
            "Whether competitors are using the same channel and outspending you."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which of these best describes an omnichannel marketing strategy?",
        "options": [
            "Using every available digital channel to maximise total reach.",
            "Coordinating multiple channels so that a prospect experiences one consistent, connected journey — regardless of where they encounter the brand. A LinkedIn ad, a follow-up email, and a retargeted display ad all feel like part of the same conversation, not three separate campaigns.",
            "Switching between channels depending on which is performing best each month.",
            "Running the same creative asset across all channels simultaneously for consistency."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says: 'We want to be on LinkedIn, Instagram, TikTok, YouTube, paid search, email, and run a podcast.' What is the most useful response?",
        "options": [
            "Say yes — a broad channel mix improves overall brand awareness and covers all audience types.",
            "Explain that this level of activity across seven channels will spread the team and budget too thin to do any of them well. Ask them to identify the two or three channels where their specific target persona actually spends time and where they have the resources to produce quality content consistently. Start there, prove it, then add channels based on data.",
            "Suggest outsourcing each channel to a specialist — that way all seven can be managed simultaneously.",
            "Agree with the plan but prioritise paid search first, since it delivers the fastest measurable results."
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and choose the best response. Discuss why before clicking.",
        "items": [
            {
                "customerLine": "Client: 'We tried LinkedIn ads last year and they did not work. We do not want to use LinkedIn again.'",
                "options": [
                    "Say: 'Understood — we will keep LinkedIn out of the plan and focus on other channels.'",
                    "Say: 'That is really useful to know — can you tell me more about what happened? What were you promoting, who were you targeting, and what did the results look like? In my experience, LinkedIn underperformance usually comes from one of three things: the wrong audience targeting, the wrong message for the stage of the funnel, or not enough budget to build frequency. Before we rule it out completely, I want to understand what was tested — because for your target persona, it is genuinely the strongest B2B channel available.'",
                    "Say: 'LinkedIn has changed a lot in the last year — what did not work before might work now. Let us try again with a fresh approach.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It does not dismiss the client's experience, but it asks diagnostic questions before accepting the conclusion that LinkedIn is wrong. A removes a potentially vital channel based on incomplete information. C makes a promise without understanding why it failed — and the client has heard that kind of optimism before."
            },
            {
                "customerLine": "Client: 'Our competitor is getting a lot of attention on TikTok. Should we be there too?'",
                "options": [
                    "Say: 'If they are getting attention there, we should follow — we do not want to miss out.'",
                    "Say: 'It is worth looking at, but the question is not whether they are on TikTok — it is whether your target persona is on TikTok and whether that attention is converting into actual clients. Operations directors and CFOs at manufacturing companies may well be on TikTok personally, but are they making procurement decisions based on what they see there? Let us check the data before committing budget. If the answer is yes, we test it with a small pilot. If the answer is no, we invest that budget where we know your audience actually is.'",
                    "Say: 'TikTok is primarily a consumer platform — it is not right for B2B. Do not follow the competitor on this one.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It applies the right test — does this channel reach the target persona in a buying context — rather than following a competitor move without evidence. A copies the competitor without any strategic evaluation. C makes a sweeping generalisation — some B2B brands do very well on TikTok, so the answer needs to be data-led, not assumed."
            },
            {
                "customerLine": "Client after month one of the campaign: 'The email open rates are great — 38% — but we are not getting many bookings from it. What is wrong?'",
                "options": [
                    "Say: 'A 38% open rate is excellent — give it more time and the bookings will come.'",
                    "Say: 'A high open rate with low conversion tells us something specific: people are interested enough to open, but the email is not moving them to act. The issue is usually one of three things: the call to action is not clear enough, the offer is not compelling enough for where they are in the journey, or they need one more touchpoint before they are ready to book. Let us look at the email together — specifically the last paragraph and the CTA. I also want to check whether people are dropping off at the booking form itself, which would tell us it is a page problem rather than an email problem.'",
                    "Say: 'Let us try a different subject line — that might improve click-through rates and lead to more bookings.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It diagnoses the right problem — the open rate is not the issue, the CTA or the funnel stage is — and it proposes two specific things to check. A is passive and tells the client to wait. C addresses the subject line, which is irrelevant — a 38% open rate proves the subject line is already working."
            },
            {
                "customerLine": "Client: 'We want to measure which channel is generating the most leads so we know where to invest next quarter.'",
                "options": [
                    "Say: 'We will set up last-touch attribution — whichever channel a lead clicked last gets the credit.'",
                    "Say: 'We can absolutely do that — but let me explain how we will approach attribution so you know what the numbers mean. We will use last-touch attribution as the primary model, which means the channel the lead came from directly before converting gets the credit. But we will also track the full journey — because in an omnichannel campaign, a lead that converts via email might have started from a LinkedIn ad six weeks earlier. I will show you both views in the report: last-touch for decision-making, and the full journey for understanding what is actually driving the pipeline. That way you have the simplicity to make budget decisions and the depth to understand what is really working.'",
                    "Say: 'Attribution across multiple channels is too complex to measure accurately — we track reach and engagement instead.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It commits to a specific model, explains what it means, and adds the multi-touch context that makes the data more useful. A is too simple without any explanation. C avoids the question entirely — engagement metrics are not the same as lead attribution and the client deserves a real answer."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three campaign scenarios. Match each to the channel mix that fits it best. Discuss as a group before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "TechFlow — Q4 Launch",
                "description": "TechFlow needs to generate 75 qualified leads in 90 days. Target persona: Operations Directors at manufacturing companies, 100–500 employees, UK and DACH. The company has good case studies but low brand awareness. Budget: €15,000 for the quarter. The team has capacity to produce 3 pieces of content per week.",
                "matchKey": "linkedin-email"
            },
            {
                "name": "ClearPath — Thought Leadership",
                "description": "ClearPath is a well-known analytics platform. They are not actively selling this quarter — they want to build thought leadership, stay top of mind with existing prospects, and generate inbound interest. Budget: €5,000. They have a founder who is a strong writer and speaker.",
                "matchKey": "organic-podcast"
            },
            {
                "name": "NovaSpark — Product Launch",
                "description": "NovaSpark is launching a new product next month. They need maximum awareness as quickly as possible — they want everyone in the target market to know about it within 30 days. Budget: €30,000. Speed matters more than efficiency at this stage.",
                "matchKey": "paid-pr"
            }
        ],
        "options": [
            {
                "key": "linkedin-email",
                "label": "LinkedIn paid + email nurture",
                "description": "LinkedIn Sponsored Content targets the exact persona with precision. A 5-email nurture sequence moves warm leads — those who engage with the LinkedIn content — towards a booking. This combination gives targeted reach and high conversion at a manageable cost for a €15,000 budget. The case studies go on a landing page that both the ads and emails link to."
            },
            {
                "key": "organic-podcast",
                "label": "Organic content + podcast",
                "description": "The founder writes two thought leadership posts per week on LinkedIn and produces a short-form podcast or audio series on a topic the target audience cares about. This builds earned media and credibility without a large paid spend. For a company that does not need leads this quarter, organic content keeps the brand present and generates inbound interest over time."
            },
            {
                "key": "paid-pr",
                "label": "Heavy paid media + PR campaign",
                "description": "LinkedIn and display retargeting ads run at maximum frequency for 30 days to drive awareness. Simultaneously, a PR campaign targets three to five industry publications with the launch story — earned media that amplifies the paid activity. This combination achieves fast, wide reach and is appropriate when the goal is maximum visibility in a short window rather than efficient cost per lead."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer has started explaining a channel decision. Finish the line clearly and practically. Use vocabulary from this lesson.",
        "items": [
            {
                "customerLine": "Client: 'Why are you recommending LinkedIn over paid search for this campaign?'",
                "salespersonStart": "Both can work, but for your specific goal and audience, LinkedIn is the stronger choice right now.",
                "suggestedCompletion": "Your target persona — Operations Directors at manufacturing companies — is not typically searching for operational efficiency tools on Google. They are not aware enough of the solution category to search for it yet. That is an awareness problem, not a search problem. LinkedIn lets us put the right content in front of exactly the right person based on their job title and company size — before they even know they are looking. Paid search is better for capturing demand that already exists. LinkedIn is better for creating it. Once we have built enough awareness and people start searching for TechFlow by name, that is when we layer in a brand search campaign. But for now, LinkedIn is where the work happens."
            },
            {
                "customerLine": "Client: 'We want to track exactly which channel is driving the most revenue.'",
                "salespersonStart": "We will track as closely as we can — let me explain how attribution works in a multi-channel campaign so you know what the data means.",
                "suggestedCompletion": "In a campaign that uses LinkedIn, email, and a webinar, most conversions are the result of multiple touchpoints over several weeks. Someone sees your LinkedIn ad, attends the webinar three weeks later, and then converts via an email follow-up. Last-touch attribution gives email the credit — but without the LinkedIn ad and the webinar, that email would never have converted. So we will use last-touch attribution for the headline number, but I will also give you a multi-touch view each month so you can see the full journey. That way you have the simplicity you need for budget decisions and the depth to understand what is really driving the pipeline."
            },
            {
                "customerLine": "Client: 'Month one data is in. Email is working well. LinkedIn is expensive and we have not seen direct bookings from it.'",
                "salespersonStart": "That is a really important distinction to explore before we make any budget changes.",
                "suggestedCompletion": "LinkedIn in a B2B campaign is primarily an awareness channel — most prospects who see it will not book a call directly from an ad. What they do is start following you, read your organic posts, and eventually open one of your emails when they feel ready. The question is not 'how many bookings came directly from LinkedIn' — it is 'how many of the people who converted via email first encountered us through LinkedIn?' When we check the full customer journey in the data, I expect we will find that a significant portion of your email converters had a LinkedIn touchpoint earlier in the journey. Let me pull that report before we decide to reduce the LinkedIn budget — I want to make sure we are measuring it correctly."
            },
            {
                "customerLine": "Client: 'We have been doing organic LinkedIn for six months with no real results. Should we give up?'",
                "salespersonStart": "Before we give up on organic, let us look at what 'no results' actually means — because that tells us what to fix.",
                "suggestedCompletion": "Organic LinkedIn has two jobs: build credibility with people who already know you, and attract new followers from your target audience. If neither is happening after six months, it usually comes down to one of three things. First: the content is not specific enough — posts that speak to everyone engage no one. Second: you are not posting consistently enough — LinkedIn's algorithm rewards accounts that post three to five times per week, not once or twice. Third: the content is not being seen by the right people — have you engaged actively in the comments of posts your target persona already reads? That is the fastest way to grow the right audience. Let me look at your last ten posts together and we can diagnose exactly which of these is the issue."
            }
        ]
    }
},
};
