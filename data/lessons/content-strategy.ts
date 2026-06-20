import { Lesson } from '@/types/lesson';

export const contentStrategy: Lesson = {
  slug: 'content-strategy',
  title: 'Content Strategy',
  subtitle: 'How to plan, organise, and talk about a content strategy that actually serves your audience and your goals',
  level: 'B1-B2',
  description: 'Content marketing is one of the most powerful tools in B2B — but only when it is planned. In this lesson you will learn the vocabulary for building and presenting a content strategy: how to choose topics, organise a content calendar, match your tone to your audience, and repurpose content to get more out of every piece you create.',
  heroImage: '/images/content-strategy-hero.png',

  vocabulary: [
    {
      word: 'CONTENT PILLAR',
      partOfSpeech: 'noun',
      definition: 'A core theme or topic that your brand owns and creates content around consistently — the foundation everything else is built on.',
      example: "TechFlow's three content pillars are: operational efficiency, cost reduction, and manufacturing leadership. Every piece of content we produce connects to at least one of these.",
      imageSlug: '/images/content-pillar.png',
    },
    {
      word: 'TONE OF VOICE',
      partOfSpeech: 'noun',
      definition: 'The personality and style that comes through in all your written and spoken content — how your brand sounds, not just what it says.',
      example: "TechFlow's tone of voice is direct, evidence-led, and peer-to-peer — we talk to operations directors like they are colleagues, not customers.",
      imageSlug: '/images/tone-of-voice.png',
    },
    {
      word: 'EDITORIAL CALENDAR',
      partOfSpeech: 'noun',
      definition: 'A planned schedule of what content will be published, on which channel, and when — keeping the team organised and consistent.',
      example: 'Without an editorial calendar, content becomes reactive — you publish when you have time, not when your audience needs it. With one, every week has a purpose.',
      imageSlug: '/images/editorial-calendar.png',
    },
    {
      word: 'REPURPOSE',
      partOfSpeech: 'verb',
      definition: 'To take one piece of content and adapt it for a different format or channel — getting more value out of the same idea.',
      example: 'We repurpose every case study into three formats: a long-form PDF, a LinkedIn carousel, and a short email. One story, three different ways to reach people who prefer different formats.',
      imageSlug: '/images/repurpose.png',
    },
    {
      word: 'EVERGREEN',
      partOfSpeech: 'adjective',
      definition: 'Content that stays relevant and useful over a long period — not tied to a specific event or trend.',
      example: "'How to reduce operational costs by 20%' is evergreen content — someone will be searching for that in two years and the article will still be relevant. 'Our Q3 trade show recap' is not.",
      imageSlug: '/images/evergreen.png',
    },
    {
      word: 'THOUGHT LEADERSHIP',
      partOfSpeech: 'noun',
      definition: 'Content that positions your brand or its people as trusted experts — sharing genuine insight rather than promoting products.',
      example: 'The best B2B thought leadership does not mention your product at all — it solves a problem your audience has, and the credibility from that is what brings them back.',
      imageSlug: '/images/thought-leadership.png',
    },
    {
      word: 'CONTENT AUDIT',
      partOfSpeech: 'noun',
      definition: 'A review of all the content you have already created — assessing what is performing, what is outdated, and what gaps need to be filled.',
      example: "Before creating new content, we always run a content audit. In TechFlow's case, they had twelve blog posts — three performing well, seven outdated, and two that needed a complete rewrite.",
      imageSlug: '/images/content-audit.png',
    },
    {
      word: 'CALL TO ACTION',
      partOfSpeech: 'noun',
      definition: 'The specific thing you want the reader or viewer to do next — download, book, read, share, or reply.',
      example: 'Every piece of content needs a clear call to action — even thought leadership. If someone reads your article and finds it useful, what do you want them to do next? That answer belongs at the end of every post.',
      imageSlug: '/images/call-to-action.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'ROLL OUT [A CONTENT PLAN]',
      definition: 'To launch and implement a content strategy in a structured, phased way.',
      example: 'We will roll out the content plan in three phases: foundation content in month one, case studies in month two, and thought leadership pieces in month three.',
      imageSlug: '/images/roll-out-a-content-plan.png',
    },
    {
      phrase: 'FILL A GAP [IN THE MARKET]',
      definition: 'To create content that addresses a topic your audience needs but your competitors are not covering well.',
      example: 'There is almost no quality content on operational efficiency for mid-size manufacturers in English. We are going to fill that gap — and own the topic before anyone else does.',
      imageSlug: '/images/fill-a-gap-in-the-market.png',
    },
    {
      phrase: 'BUILD UP [AN AUDIENCE]',
      definition: 'To grow a following or readership over time through consistent, valuable content.',
      example: 'Building up a LinkedIn audience takes at least three to six months of consistent posting — there is no shortcut, but once the audience is there it compounds.',
      imageSlug: '/images/build-up-an-audience.png',
    },
    {
      phrase: 'STAY ON BRAND',
      definition: "To make sure every piece of content is consistent with the brand's tone of voice, values, and positioning.",
      example: "Before anything goes live, ask: does this stay on brand? If TechFlow's tone is direct and evidence-led, a vague inspirational post does not belong in the plan.",
      imageSlug: '/images/stay-on-brand.png',
    },
    {
      phrase: 'HOOK [THE READER] IN',
      definition: "To capture the reader's attention immediately — in the first line, headline, or opening image — so they keep reading.",
      example: "The first line of any piece of content is the most important one. If it does not hook the reader in, they will not read the second line. Every post should open with something that makes your target audience think 'this is written for me'.",
      imageSlug: '/images/hook-the-reader-in.png',
    },
    {
      phrase: 'SIGN OFF ON [CONTENT]',
      definition: 'To formally approve content before it is published — confirming it is accurate, on brand, and ready to go.',
      example: 'No content goes live without the client signing off on it — one approval loop avoids misunderstandings and protects both sides.',
      imageSlug: '/images/sign-off-on-content.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Marcus — I want to walk you through the three-month content plan before we get into the details. The whole strategy is built around three [[content pillar:a core theme your brand owns and creates content around consistently]] areas: operational efficiency, cost reduction, and manufacturing leadership.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Why those three specifically?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Because those are the three things your persona — Claire, the Operations Director — thinks about every day. Every piece of content connects to at least one of those [[content pillar:core themes]]. That focus is what makes content memorable rather than generic.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And what about [[tone of voice:the personality and style that comes through in all your content]]? I have seen agencies produce content that sounds nothing like us.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That is exactly why we documented the [[tone of voice:how your brand sounds, not just what it says]] before writing anything. TechFlow's tone is direct, evidence-led, and peer-to-peer — we talk to operations directors like they are colleagues. No jargon, no vague claims, no corporate language. Every writer on our team has the [[tone of voice:brand personality guidelines]] document before they start.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How do you keep it all organised? The [[editorial calendar:a planned schedule of what content will be published and when]] looked complex when I first saw it.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'It looks complex but it is actually simple to use. The [[editorial calendar:the content schedule]] tells each person on the team: what is being published this week, who is responsible for drafting it, and when the client needs to [[sign off on:formally approve]] it. The rule is: nothing goes live without your approval. One round, within 48 hours.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about [[repurpose:adapt one piece of content for a different format or channel]]ing? You mentioned getting more from each piece.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Yes — it is one of the most efficient things we do. Every case study gets [[repurpose:adapted into different formats]] into three things: a full PDF for download, a LinkedIn carousel with the top three numbers, and a short paragraph for the email newsletter. One story, three formats, three different ways to reach people. We also focus on [[evergreen:content that stays relevant over a long period]] content wherever possible — articles that are as useful in two years as they are today.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And [[thought leadership:content that positions your brand as a trusted expert]]? I want TechFlow to be seen as the authority in our space.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '[[Thought leadership:content that builds expert credibility]] is month three — once we have laid the foundation with case studies and proof. The most important thing about [[thought leadership:expert content]] is that it does not promote the product — it solves a real problem. That is what builds trust. And every piece has a clear [[call to action:what you want the reader to do next]] — usually: read the case study, or book a conversation.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How long until we start to see results from the content?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'We typically see engagement grow within four to six weeks — people [[hooking in:capturing their attention immediately]] to the right content fast. But leads from content take longer — usually month three onwards. The [[editorial calendar:content schedule]] is designed to [[build up:grow a following over time]] the audience steadily so that by the time month three content goes live, the audience is ready to act on it.',
    }
  ],

  matchingExercise: [
    {
        "word": "CONTENT PILLAR",
        "definition": "A core theme your brand owns and creates content around consistently"
    },
    {
        "word": "TONE OF VOICE",
        "definition": "The personality and style that comes through in all your written and spoken content"
    },
    {
        "word": "EDITORIAL CALENDAR",
        "definition": "A planned schedule of what content will be published, on which channel, and when"
    },
    {
        "word": "REPURPOSE",
        "definition": "To take one piece of content and adapt it for a different format or channel"
    },
    {
        "word": "EVERGREEN",
        "definition": "Content that stays relevant and useful over a long period — not tied to a specific event"
    },
    {
        "word": "THOUGHT LEADERSHIP",
        "definition": "Content that positions your brand as a trusted expert by sharing genuine insight"
    },
    {
        "word": "CONTENT AUDIT",
        "definition": "A review of all existing content — assessing what is performing, what is outdated, and what gaps exist"
    },
    {
        "word": "CALL TO ACTION",
        "definition": "The specific thing you want the reader to do next — download, book, read, or share"
    }
],
  fillBlankExercise: [
    {
        "before": "TechFlow's three",
        "after": "are operational efficiency, cost reduction, and manufacturing leadership — every piece of content connects to at least one.",
        "answer": "content pillars"
    },
    {
        "before": "TechFlow's",
        "after": "is direct, evidence-led, and peer-to-peer — we talk to operations directors like colleagues, not customers.",
        "answer": "tone of voice"
    },
    {
        "before": "Without an",
        "after": ", content becomes reactive — you publish when you have time, not when your audience needs it.",
        "answer": "editorial calendar"
    },
    {
        "before": "We",
        "after": "every case study into three formats: a PDF, a LinkedIn carousel, and a short email paragraph.",
        "answer": "repurpose"
    },
    {
        "before": "'How to reduce operational costs by 20%' is",
        "after": "content — someone will be searching for it in two years and it will still be relevant.",
        "answer": "evergreen"
    },
    {
        "before": "The best",
        "after": "does not mention your product at all — it solves a problem and the credibility from that is what brings people back.",
        "answer": "thought leadership"
    },
    {
        "before": "Before creating new content, run a",
        "after": "— in TechFlow's case, twelve blog posts existed but only three were performing well.",
        "answer": "content audit"
    },
    {
        "before": "Every piece of content needs a clear",
        "after": "— even thought leadership. What do you want them to do after reading? That answer belongs at the end of every post.",
        "answer": "call to action"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client says: 'We want to create content about everything — our products, our team, our industry, our clients, and general business tips.' What is the problem?",
        "options": [
            "Too much content will overwhelm the team and lead to quality issues.",
            "Without content pillars, the brand has no focus — the audience cannot form a clear picture of what TechFlow stands for. A brand that talks about everything is remembered for nothing. Three well-chosen content pillars that are connected to the audience's real problems will outperform ten random topics every time.",
            "Different content types require different formats, which is too complex to manage.",
            "General business tips are not appropriate for a B2B brand — the content should always be sector-specific."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'repurpose' a piece of content — and what does it NOT mean?",
        "options": [
            "Repurposing means translating content into different languages for international markets.",
            "Repurposing means taking the core insight or story from one piece of content and adapting it into a different format for a different context — for example, turning a case study into a LinkedIn carousel. It does NOT mean copying and pasting the same text onto different platforms, which creates a poor experience for the audience.",
            "Repurposing means updating old content with new statistics and publishing it again.",
            "Repurposing means creating shorter versions of long-form content for social media use."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is a consistent tone of voice important in content strategy?",
        "options": [
            "It helps the legal team ensure all content meets compliance requirements before publication.",
            "A consistent tone of voice makes every piece of content feel like it comes from the same brand — building recognition and trust over time. Without it, different writers produce inconsistent content that confuses the audience about who the brand is and how it communicates. Over multiple touchpoints, inconsistency erodes credibility.",
            "It makes it easier to train new team members who join the content function.",
            "It reduces the time needed for client approval rounds because the client knows what to expect."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which of the following is evergreen content for a B2B operational efficiency brand?",
        "options": [
            "'Our Q3 2026 product update: what is new this quarter'",
            "'How to reduce operational costs by 25% without cutting headcount' — an article that addresses a persistent business challenge that will still be relevant and searched for in two or three years.",
            "'Why the recent supply chain disruption in Germany affects manufacturing costs'",
            "'TechFlow's highlights from the European Manufacturing Summit 2026'"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the key difference between content marketing and thought leadership?",
        "options": [
            "Content marketing is written. Thought leadership is spoken — through presentations, podcasts, and panels.",
            "Content marketing is any content that serves a marketing goal — awareness, conversion, retention. Thought leadership is a specific type of content that positions your brand as an expert by sharing genuine insight or an original point of view — without promoting a product. All thought leadership is content marketing, but not all content marketing is thought leadership.",
            "Content marketing is paid. Thought leadership is earned.",
            "Content marketing is produced by the marketing team. Thought leadership is produced by the founder or CEO."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client has published 20 blog posts over the past year but sees very little traffic or engagement. What should you recommend first?",
        "options": [
            "Increase the publishing frequency — more content means more chances to be found.",
            "Run a content audit before creating anything new — review what exists, identify which posts are performing and why, find the gaps, and update or remove underperforming content. Publishing more poor content is not the solution. Understanding what is not working and fixing it first will produce better results than volume alone.",
            "Switch the blog to a different format — video performs better than written content in most markets.",
            "Promote the existing posts through LinkedIn ads to drive more traffic to them."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does every piece of content need a clear call to action — even thought leadership?",
        "options": [
            "Without a call to action, the content does not comply with email marketing regulations.",
            "Even the best thought leadership article needs to direct interested readers somewhere next — to a case study, a booking page, or a related article. Without a clear next step, you capture attention but lose the opportunity to deepen the relationship. A reader who found the article valuable is in the best possible mindset to take the next step — the call to action makes that easy.",
            "A call to action improves SEO performance by giving search engines a clearer signal of the page's purpose.",
            "Clients expect a call to action in every piece of content and will not approve content without one."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client wants to know how long it will take for their content strategy to generate leads. What is the honest answer?",
        "options": [
            "Two to four weeks — content starts driving traffic quickly once it is published.",
            "Content typically drives measurable engagement within four to six weeks, but leads generated through organic content usually take three to six months to appear — and compound over time. This is why content strategy needs to run alongside faster lead generation activity like paid campaigns in the early months. Content is a long game, but the returns are sustainable and cost-efficient once the audience is built.",
            "Results depend entirely on the quality of the content — great content can generate leads within days.",
            "Six to twelve months is the minimum for any content strategy to show results in B2B."
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and choose the best response. Discuss why before clicking.",
        "items": [
            {
                "customerLine": "Client: 'We want to produce a piece of content every day — we have heard that consistency is everything.'",
                "options": [
                    "Say: 'Great — daily content is excellent for the algorithm and will build your audience quickly.'",
                    "Say: 'Consistency matters, but quality matters more. Producing content every day is only sustainable if you have the team and the ideas to do it well. In my experience, three high-quality posts per week that genuinely help your audience outperform seven average ones every time. I would rather we do three pieces a week that people save and share than seven pieces that get scrolled past. Let us set a rhythm you can maintain at a high standard for six months — that is what builds an audience.'",
                    "Say: 'Daily content is too much for most B2B brands — it will dilute your message and confuse the algorithm.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It reframes the question around quality and sustainability — which is the real issue — and gives a practical alternative. A agrees with a plan that is likely to be unsustainable. C dismisses the idea too firmly without explaining the reasoning."
            },
            {
                "customerLine": "Client reviewing a draft LinkedIn post: 'This is well written but it sounds too casual — it does not sound like a professional company.'",
                "options": [
                    "Say: 'You are right — let us make it more formal. I will add more technical language and a more corporate structure.'",
                    "Say: 'That is useful feedback — let me ask a question to make sure we get the tone right. Your target audience is operations directors at manufacturing companies. When they are on LinkedIn, do they respond better to formal corporate language or to a peer-to-peer tone that feels like a colleague sharing an insight? The data consistently shows that personal, direct writing outperforms corporate language in B2B LinkedIn content — but your tone of voice also needs to feel right to you. Can we look at three posts together from brands you admire and agree on where you want to sit on that spectrum?'",
                    "Say: 'The tone of voice document specifies direct and peer-to-peer — this post is correct as it is. Let us keep it.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It takes the feedback seriously, asks a diagnostic question, backs it up with evidence, and offers a practical way to align. A agrees without pushback and will likely produce content that underperforms. C insists on the approach without acknowledging the client's concern — tone of voice should serve the audience and feel right to the brand, and that is worth discussing."
            },
            {
                "customerLine": "Client: 'We have a great case study from our biggest client. Can we just post it everywhere — website, LinkedIn, email, newsletter?'",
                "options": [
                    "Say: 'Yes — sharing it everywhere maximises reach and makes the most of the content.'",
                    "Say: 'Absolutely — but let us repurpose it properly for each channel rather than posting the same format everywhere. The full case study goes on the website as a downloadable PDF. LinkedIn gets a carousel with the three most compelling numbers and one quote — formatted for mobile and designed to hook people in without them needing to click. The email gets a short paragraph with a link to the full PDF — and the newsletter gets a two-sentence mention with a link. Same story, four different formats, each optimised for where and how people consume content on that channel.'",
                    "Say: 'Posting the same content on all channels at the same time can hurt your SEO — it is better to stagger the publication over a few weeks.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says yes to the idea but improves the execution — repurposing properly rather than copy-pasting. A says yes but misses the opportunity to explain that the same format on every channel does not work. C raises an SEO concern that is largely irrelevant here — duplicate content concerns apply to websites, not to posting a LinkedIn carousel and an email on the same day."
            },
            {
                "customerLine": "Client at month two of the content plan: 'I am not seeing any leads from the content yet. Should we stop?'",
                "options": [
                    "Say: 'Let us give it one more month and then review — it takes time.'",
                    "Say: 'I want to look at the right metrics before we decide anything. Leads from organic content at month two would be unusually fast — what we should be seeing is growing engagement: post views, followers, profile visits, and link clicks. Those are the signals that the audience is building, which is what generates leads in months three to five. Can you share the analytics with me right now? I want to show you the indicators that are working, and be honest with you if there is something that needs to change. Two months is not enough to evaluate whether content generates leads — but it is enough to see whether the right audience is engaging.'",
                    "Say: 'Content is a long-term investment — you will not see leads for at least a year. Keep going.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It reframes what 'results' should look like at month two, proposes reviewing the data immediately, and gives a realistic but encouraging timeline. A is too vague and passive. C overcorrects in the other direction — a year is too long to wait for any signal, and the client needs to understand what signals to look for right now."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three content challenges. Match each to the content strategy solution that addresses it most directly. Discuss as a group before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "TechFlow",
                "description": "TechFlow produces content irregularly — sometimes three posts in a week, then nothing for three weeks. The content is good quality when it appears, but the audience never knows when to expect it. Follower growth has been flat for six months despite strong engagement on individual posts.",
                "matchKey": "calendar"
            },
            {
                "name": "BrightPath",
                "description": "BrightPath publishes a lot of content — four LinkedIn posts a week, a monthly blog, a bi-weekly newsletter. But the content topics vary wildly: one week it is HR trends, the next it is team culture, the next it is product updates. Engagement is inconsistent and the audience is unclear on what BrightPath stands for.",
                "matchKey": "pillars"
            },
            {
                "name": "NovaSpark",
                "description": "NovaSpark has excellent case studies — detailed, data-rich, and from well-known clients. But they only exist as PDFs on the website. The content team has no capacity to create new content. The case studies are barely seen by anyone.",
                "matchKey": "repurpose"
            }
        ],
        "options": [
            {
                "key": "calendar",
                "label": "Implement an editorial calendar",
                "description": "Build a 12-week content calendar that assigns specific content to specific days — with a responsible person and a client approval deadline for each piece. The goal is not to produce more content, but to publish consistently so the audience knows when to expect it. The algorithm rewards consistency and so does your audience."
            },
            {
                "key": "pillars",
                "label": "Define clear content pillars",
                "description": "Agree on two or three core themes that connect to the audience's real problems — and filter every piece of content against them. Any content idea that does not connect to a content pillar gets shelved or given a lower priority. This gives the audience a reason to follow: they know that when they read BrightPath content, they will get insight on specific topics they care about."
            },
            {
                "key": "repurpose",
                "label": "Build a repurposing system for existing content",
                "description": "Take the three strongest case studies and break each into four formats: a LinkedIn carousel (three slides with the key numbers), a short email (one paragraph + one quote), a LinkedIn text post (from the client's founder perspective), and a blog article (SEO version of the story). No new content is created — the existing work is transformed into twelve pieces that reach the audience in different ways."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The content strategist has started explaining or presenting. Finish the line clearly and practically. Use vocabulary from this lesson.",
        "items": [
            {
                "customerLine": "Client: 'What should our content strategy look like for the next three months?'",
                "salespersonStart": "Before we get into months, let us agree on the foundation — because the three months only work if the foundation is right.",
                "suggestedCompletion": "We need three things agreed before we write the first post. First: your content pillars — the two or three themes you will own and create around consistently. Based on what we know about your audience, I am recommending: operational efficiency, cost reduction, and manufacturing leadership. Second: your tone of voice — how you sound. Direct, evidence-led, and peer-to-peer. No jargon, no corporate language. Third: your editorial calendar — what goes live when, and who approves it. Once those three are fixed, the three-month plan is straightforward. Month one is foundation content and case study repurposing. Month two is proof — new case studies and client stories. Month three is thought leadership — content that makes TechFlow the most trusted voice in your space."
            },
            {
                "customerLine": "Client: 'We have so much existing content — old blog posts, case studies, whitepapers. Is any of it useful?'",
                "salespersonStart": "Definitely — but we need to do a content audit first before we create anything new.",
                "suggestedCompletion": "A content audit means going through everything you have and asking three questions for each piece: Is it still accurate? Is it performing — getting traffic or engagement? And does it connect to the content pillars we have agreed on? What we typically find is that about 20% of existing content is strong and worth repurposing into new formats. Another 30% is outdated and should be updated or removed. And the remaining 50% was probably the wrong topic in the first place. The audit saves us from creating content you already have and stops us from sending people to outdated pages. It usually takes a day — and it is the most efficient thing we do at the start of any content engagement."
            },
            {
                "customerLine": "Client: 'I want to be seen as a thought leader in my industry. What does that actually require?'",
                "salespersonStart": "Thought leadership is one of the most powerful things you can build — but it takes a specific approach.",
                "suggestedCompletion": "The single most important rule is this: thought leadership is not about your brand or your product. It is about a problem your audience has — and your unique, specific perspective on how to solve it. The moment you mention your product in the first three lines, it becomes an ad. But an article that says 'here is exactly why 70% of operational efficiency programmes fail in the first year — and what the 30% that succeed do differently' — that is thought leadership. It builds trust without asking for anything. And the trust it builds is what eventually makes people want to know more about who wrote it. Start with the insight. The brand follows."
            },
            {
                "customerLine": "Client: 'How do we measure whether the content strategy is working?'",
                "salespersonStart": "There are different metrics for different stages — and it is important to look at the right ones at the right time.",
                "suggestedCompletion": "In months one and two, the metrics that matter are reach, follower growth, and engagement rate — are the right people seeing the content and are they responding to it? If those are growing, the foundation is working. In month three, we start looking at traffic to the case study landing page and email list growth — those are the signals that people are moving from consuming content to wanting more. From month four onwards, we track leads attributed to content — usually through UTM parameters on links and asking new leads how they first heard of TechFlow. Content rarely shows in lead data before month three or four, so I always ask clients to measure the right things at the right stage — otherwise you will conclude something is not working when actually it has not had time to work yet."
            }
        ]
    }
},
};
