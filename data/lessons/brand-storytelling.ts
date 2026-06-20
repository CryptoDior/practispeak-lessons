import { Lesson } from '@/types/lesson';

export const brandStorytelling: Lesson = {
  slug: 'brand-storytelling',
  title: 'Brand Storytelling',
  subtitle: 'How to use narrative to make your brand memorable — and turn client results into stories people actually want to share',
  level: 'B1-B2',
  description: 'Facts tell, stories sell. In B2B marketing, the brands that win are not always the ones with the best product — they are the ones who can tell the most compelling story about what they do and who they help. In this lesson you will learn how to structure a brand story, use the key language of narrative, and turn a client result into something your audience will remember.',
  heroImage: '/images/brand-storytelling-hero.png',

  vocabulary: [
    {
      word: 'NARRATIVE',
      partOfSpeech: 'noun',
      definition: 'The story that runs through all your marketing — the way you explain who you are, what you do, and why it matters, in a connected and meaningful way.',
      example: "TechFlow's narrative should not be 'we make software for manufacturers' — it should be 'we give operations directors the evidence they need to walk into the board meeting with confidence'.",
      imageSlug: '/images/narrative.png',
    },
    {
      word: 'HERO',
      partOfSpeech: 'noun',
      definition: 'The central character in a marketing story — in B2B, the hero is almost always the client, not the brand.',
      example: 'The biggest mistake in brand storytelling is making the brand the hero. Your client is the hero — they faced a challenge, they made a decision, and they achieved a result. Your brand is the tool that helped them get there.',
      imageSlug: '/images/hero.png',
    },
    {
      word: 'CONFLICT',
      partOfSpeech: 'noun',
      definition: 'The problem or challenge that creates tension in the story — the obstacle the hero has to overcome.',
      example: "The conflict in TechFlow's best case study is simple: the client was told to cut operational costs by 20% or face redundancies — and they had 90 days to do it.",
      imageSlug: '/images/conflict.png',
    },
    {
      word: 'RESOLUTION',
      partOfSpeech: 'noun',
      definition: 'The point in the story where the problem is solved and the outcome becomes clear — how the hero successfully overcame the conflict.',
      example: 'The resolution: in 67 days — 23 days ahead of schedule — the client hit 22% cost reduction with no redundancies and a 98% team satisfaction score. That is a resolution worth reading.',
      imageSlug: '/images/resolution.png',
    },
    {
      word: 'EMOTIONAL APPEAL',
      partOfSpeech: 'noun',
      definition: 'Content that connects with how people feel — not just what they think — making a message more memorable and motivating.',
      example: "The emotional appeal in that case study is not the 22% number — it is the relief of not having to make redundancies. That is what makes the operations director reading it think: 'I need this'.",
      imageSlug: '/images/emotional-appeal.png',
    },
    {
      word: 'TRANSFORMATION',
      partOfSpeech: 'noun',
      definition: 'The change that the hero goes through — from where they were before to where they are after. The before-and-after is the heart of any case study.',
      example: 'The transformation is: from a director under impossible pressure with no clear path, to someone who delivered results ahead of schedule and got promoted six months later. That arc is the story.',
      imageSlug: '/images/transformation.png',
    },
    {
      word: 'PROOF POINT',
      partOfSpeech: 'noun',
      definition: 'A specific, verifiable piece of evidence that supports your story — a number, a quote, a result, or a data point.',
      example: "Every story needs proof points — without them it is just a claim. '22% cost reduction in 67 days' is a proof point. 'Significant operational improvements' is not.",
      imageSlug: '/images/proof-point.png',
    },
    {
      word: 'BRAND STORY',
      partOfSpeech: 'noun',
      definition: 'The overarching narrative that explains why your brand exists, what it stands for, and what it has achieved — told in a way that connects with people emotionally as well as logically.',
      example: "TechFlow's brand story is not about software. It is about operations directors who refuse to accept the false choice between cutting costs and keeping their team — and how TechFlow makes that possible.",
      imageSlug: '/images/brand-story.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'BRING [A STORY] TO LIFE',
      definition: 'To tell a story in a way that feels vivid and real — using specific details, quotes, and human moments rather than abstract claims.',
      example: "Numbers alone do not bring a story to life — the moment that does is when the client says: 'The week before we hit the target, I genuinely did not think we were going to make it.' That one sentence makes the 22% feel real.",
      imageSlug: '/images/bring-a-story-to-life.png',
    },
    {
      phrase: 'LEAD WITH [THE PROBLEM]',
      definition: 'To start a story by describing the challenge or conflict before introducing the solution — because the audience needs to recognise the problem before they care about the answer.',
      example: "Always lead with the problem in a case study — not your product. If the reader does not immediately think 'that is exactly my situation', they will not read far enough to care about the solution.",
      imageSlug: '/images/lead-with-the-problem.png',
    },
    {
      phrase: 'MAKE [SOMEONE] THE HERO',
      definition: 'To position the client or customer as the central character who overcame a challenge — with your brand as the tool or guide that helped them.',
      example: 'Rewrite that case study to make the operations director the hero — her courage, her decision, her result. TechFlow is the platform that made it possible. The moment you make TechFlow the hero, you lose the reader.',
      imageSlug: '/images/make-someone-the-hero.png',
    },
    {
      phrase: 'DRAW [SOMEONE] IN',
      definition: "To capture the audience's attention and make them want to keep reading or listening — usually by creating a sense of tension or relevance.",
      example: "The opening line of the case study needs to draw the reader in immediately — something like 'In October 2025, Claire had 90 days to save 40 jobs. She did not know it yet, but she was going to do it in 67.' That is how you make someone read to the end.",
      imageSlug: '/images/draw-someone-in.png',
    },
    {
      phrase: 'LAND [A MESSAGE]',
      definition: 'For a story or message to connect and stick with the audience — to be understood and remembered in the way you intended.',
      example: 'The story needs one more draft — the resolution does not land yet. The reader gets to the end without feeling the significance of what happened. Add the human moment and the number will land much harder.',
      imageSlug: '/images/land-a-message.png',
    },
    {
      phrase: 'BACK UP [A CLAIM] WITH [EVIDENCE]',
      definition: 'To support what you are saying with specific, verifiable proof — so the audience trusts the story rather than just enjoying it.',
      example: "Every claim in a case study needs to be backed up with a proof point. 'Significantly improved efficiency' means nothing. '22% cost reduction measured over 90 days against the previous financial year' means everything.",
      imageSlug: '/images/back-up-a-claim-with-evidence.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Marcus — I want to be honest about something. TechFlow has extraordinary results — 22% cost reduction, 67 days, zero redundancies. But right now, no one is reading about them. Do you know why?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I assumed it was because we are not promoting them enough.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "It is not a reach problem — it is a [[narrative:the story that runs through all your marketing]] problem. The case study on your website leads with TechFlow's features. The [[hero:the central character the audience connects with]] of the story is TechFlow. But your audience — operations directors under pressure — does not connect with a platform. They connect with a person in a situation they recognise.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'So we need to make the client the [[hero:the central character of the story]]?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Exactly. The story should start with the [[conflict:the problem or challenge the hero has to overcome]] — Claire, 90 days, 20% cost target, 40 jobs at risk. That is the tension that [[draws:captures the audience's attention]] the reader in. Once they recognise that situation, they will read everything.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And the [[resolution:the point where the problem is solved and the outcome becomes clear]]?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: '67 days. 22% cost reduction. Zero redundancies. Those are the [[proof point:specific verifiable evidence that supports the story]] — and they are exceptional. But right now they are buried on page three of a PDF no one is reading. The [[resolution:how the hero overcame the conflict]] needs to be on line one of the LinkedIn post — then people click through to read how it happened.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about the [[emotional appeal:content that connects with how people feel, not just what they think]]? Is that appropriate in B2B?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "It is the most important part. The [[emotional appeal:connection with feelings as well as logic]] in this story is not the 22% — it is the relief of not having to make redundancies. When an operations director reads 'zero redundancies', they feel something — because that is the thing they are most afraid of. That [[emotional appeal:emotional connection]] is what makes the [[transformation:the change the hero goes through from before to after]] feel real.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'So the [[brand story:the overarching narrative of why your brand exists and what it achieves]] is really about Claire — not about TechFlow?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "TechFlow's [[brand story:overarching narrative]] is: 'We exist so that operations directors never have to choose between cutting costs and keeping their team.' Claire's story [[brings that to life:makes the narrative vivid and real]]. The numbers [[back up:support a claim with verifiable proof]] the story. Together, they are the most powerful marketing asset TechFlow has — and right now, almost no one is seeing them.",
    }
  ],

  matchingExercise: [
    {
        "word": "NARRATIVE",
        "definition": "The connected story that runs through all your marketing — explaining who you are, what you do, and why it matters"
    },
    {
        "word": "HERO",
        "definition": "The central character in a marketing story — in B2B, almost always the client, not the brand"
    },
    {
        "word": "CONFLICT",
        "definition": "The problem or challenge that creates tension in the story — the obstacle the hero must overcome"
    },
    {
        "word": "RESOLUTION",
        "definition": "The point where the problem is solved and the outcome becomes clear"
    },
    {
        "word": "EMOTIONAL APPEAL",
        "definition": "Content that connects with how people feel — making a message more memorable and motivating"
    },
    {
        "word": "TRANSFORMATION",
        "definition": "The change the hero goes through — the before-and-after that is the heart of any case study"
    },
    {
        "word": "PROOF POINT",
        "definition": "A specific, verifiable piece of evidence that supports your story — a number, quote, or result"
    },
    {
        "word": "BRAND STORY",
        "definition": "The overarching narrative that explains why your brand exists and what it stands for"
    }
],
  fillBlankExercise: [
    {
        "before": "TechFlow's",
        "after": "should not be 'we make software for manufacturers' — it should be 'we give operations directors the evidence they need to walk into a board meeting with confidence'.",
        "answer": "narrative"
    },
    {
        "before": "The biggest mistake in B2B storytelling is making the brand the",
        "after": "— your client is the hero, not your product.",
        "answer": "hero"
    },
    {
        "before": "The",
        "after": "in TechFlow's best case study: the client was told to cut costs by 20% or face redundancies — and had 90 days to do it.",
        "answer": "conflict"
    },
    {
        "before": "The",
        "after": ": 22% cost reduction in 67 days, zero redundancies, 98% team satisfaction. That is an outcome worth reading about.",
        "answer": "resolution"
    },
    {
        "before": "The",
        "after": "is not the 22% number — it is the relief of not having to make redundancies. That is what makes an operations director think: 'I need this'.",
        "answer": "emotional appeal"
    },
    {
        "before": "The",
        "after": "is: from a director under impossible pressure to someone who delivered results ahead of schedule and got promoted six months later.",
        "answer": "transformation"
    },
    {
        "before": "Every story needs",
        "after": "— '22% cost reduction in 67 days' is one. 'Significant operational improvements' is not.",
        "answer": "proof points"
    },
    {
        "before": "TechFlow's",
        "after": "is not about software — it is about operations directors who refuse to accept the false choice between cutting costs and keeping their team.",
        "answer": "brand story"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A case study opens with: 'TechFlow is an operational efficiency platform designed to help manufacturing companies reduce costs through intelligent workflow automation.' What is the storytelling problem?",
        "options": [
            "It is too short — a case study opening needs more detail about the product and its features.",
            "It makes TechFlow the subject — the reader is told about a product before they have a reason to care. A strong case study opening leads with the client's conflict, making the reader recognise themselves in the situation before they encounter the solution.",
            "It uses too much jargon — 'intelligent workflow automation' is not accessible to all readers.",
            "It does not include a specific result — the opening should always lead with the proof point."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why should the client — not the brand — be the hero of a B2B case study?",
        "options": [
            "Because legal and compliance teams prefer client-led case studies for liability reasons.",
            "Because the reader — who is also a potential client — connects with a person in a situation they recognise, not with a product. When the client is the hero, the reader sees themselves in the story and thinks 'if it worked for them, it could work for me'. When the brand is the hero, the reader feels like they are reading an advertisement.",
            "Because clients are more likely to approve a case study that positions them positively.",
            "Because hero-led narratives are more shareable on social media and generate more organic reach."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the role of conflict in a brand story?",
        "options": [
            "Conflict makes the brand look more relatable — it shows the company has also faced challenges.",
            "Conflict is what creates engagement — without a real problem to solve, there is no story. The reader needs to feel the weight of the challenge before they can appreciate the resolution. A story where everything goes smoothly from the start has no tension and therefore no emotional impact.",
            "Conflict shows the reader that the industry is challenging and builds urgency around buying.",
            "Conflict differentiates a case study from a simple product description or testimonial."
        ],
        "correctIndex": 1
    },
    {
        "question": "What makes an 'emotional appeal' effective in B2B marketing content?",
        "options": [
            "Using inspirational language and aspirational imagery that makes the brand feel exciting.",
            "Describing a situation or challenge so specifically that the reader recognises their own experience in it. The emotional connection in B2B is not sentiment — it is recognition. When an operations director reads 'she had 90 days to save 40 jobs', they feel something because they have been in a similar position or they fear they could be.",
            "Including personal stories about the founder's journey to humanise the brand.",
            "Using positive, optimistic language that makes the reader feel energised about the future."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the difference between a proof point and a claim in a case study?",
        "options": [
            "A proof point is used in formal documents. A claim is used in informal content like social media posts.",
            "A proof point is specific, measurable, and verifiable — '22% cost reduction in 67 days, measured against the previous financial year'. A claim is vague and unverifiable — 'significantly improved operational efficiency'. Readers discount vague claims immediately, but specific numbers make a story credible and memorable.",
            "Proof points are approved by the client. Claims are written by the marketing team without client approval.",
            "A proof point appears at the end of a case study as the summary. Claims are used throughout the body."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which opening line for a LinkedIn case study post is most likely to generate engagement?",
        "options": [
            "'TechFlow is proud to share a case study from one of our long-standing manufacturing clients.'",
            "'Claire had 90 days to cut costs by 20% — or her board was making redundancies. Here is what happened next.'",
            "'We helped a manufacturing company reduce their operational costs significantly using our platform.'",
            "'Operational efficiency is one of the key challenges facing manufacturing companies in 2026.'"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the 'transformation' in a brand story, and why does it matter?",
        "options": [
            "The transformation is the change in the company's product or service over time — showing how the brand has evolved.",
            "The transformation is the before-and-after journey of the client — from the problem they faced to the outcome they achieved. It matters because the reader's question is always 'could this work for me?' and the transformation answers that question by showing where someone like them started and where they ended up.",
            "The transformation is the change in the market that made the brand's product necessary.",
            "The transformation is the pivot from storytelling to a call to action at the end of the case study."
        ],
        "correctIndex": 1
    },
    {
        "question": "A client says: 'Our case study has all the numbers but people are not reading it or sharing it.' What is the most likely reason?",
        "options": [
            "The case study is too long — B2B buyers do not have time to read long-form content.",
            "The numbers are probably buried in a document that does not lead with a story. Without a compelling conflict, a human hero, and a resolution that creates an emotional response, a list of results is just data — interesting to a small number of people who were already looking, but not something that gets shared. The numbers need a story around them to travel.",
            "The case study needs better design — visual presentation affects engagement significantly.",
            "The case study is being promoted on the wrong channels — it should be on the website, not LinkedIn."
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and choose the best response. Discuss why before clicking.",
        "items": [
            {
                "customerLine": "Client reviewing the draft case study: 'This is good but I think we should lead with our product features — buyers need to know what TechFlow does before they read about the client.'",
                "options": [
                    "Say: 'You are right — let us add a product overview section at the beginning.'",
                    "Say: 'I understand the instinct — but here is the problem with leading with the product. A buyer who does not yet recognise a problem does not care what TechFlow does. The moment they read 'Claire had 90 days to cut costs or face redundancies', every operations director in the same position thinks 'that is me' — and now they will read every word. If we lead with the product, we lose them before they even get to the result. The product appears naturally in the story when Claire makes the decision to use TechFlow. By that point, the reader is invested in her outcome and they want to know what tool she used.'",
                    "Say: 'Let us add a short product summary at the bottom as an appendix, so it is there for people who want it but does not interrupt the story.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains the logic clearly — the reader needs a reason to care before they care about the product — and shows how TechFlow's role in the story still comes through naturally. A reverses the story structure in a way that will reduce engagement. C is a reasonable compromise but does not address the core misunderstanding about why product-first fails."
            },
            {
                "customerLine": "Client: 'The client who gave us the best results does not want to be named in the case study. Can we still use the story?'",
                "options": [
                    "Say: 'Without a name we cannot publish it — the story will not be credible.'",
                    "Say: 'Yes — anonymised case studies can still be very effective if they are specific enough. We use language like 'a UK-based manufacturing company with 200 employees' — it gives the reader enough context to recognise the type of company without naming the client. The story and the numbers stay exactly the same. The one thing we lose is the ability to use their logo, which reduces credibility slightly — we can compensate for that with a direct quote from a named contact at a different client who had a similar result. Specificity is what builds trust, not necessarily the name itself.'",
                    "Say: 'Let us ask the client again — most companies agree to being named once they see the final version.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a practical solution with a clear explanation of what works and what the trade-off is, plus a way to compensate. A closes the door on a valuable story unnecessarily. C is worth trying but puts the next step on the client rather than solving the problem right now."
            },
            {
                "customerLine": "Client: 'I want to write our brand story myself — I know TechFlow better than anyone. Can I just write it and give it to you to clean up?'",
                "options": [
                    "Say: 'Of course — you know TechFlow best. Send it over and we will refine it.'",
                    "Say: 'Absolutely — and your involvement is actually the best starting point we could have. I would suggest we start with a 30-minute conversation where I ask you questions rather than you writing from scratch: when did you first know TechFlow was solving a real problem? What is the moment you are most proud of? What do you want operations directors to feel when they read about us? Those answers give me the raw material, and I can shape them into a story that works commercially. What you write from inside the business is almost always too close to the product — my job is to translate that into the story that a stranger will connect with.'",
                    "Say: 'It would be better if we write it — founders tend to write about the product rather than the customer, which creates the wrong narrative.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says yes to the involvement, explains the better process, and frames the professional's role as a translator rather than a replacement. A accepts a process that often produces product-focused content that is hard to work with. C is accurate but dismissive — it shuts down the client's genuine offer to be involved in a way that could make the story more authentic."
            },
            {
                "customerLine": "Client: 'How much emotion is appropriate in a B2B case study? We do not want to seem unprofessional.'",
                "options": [
                    "Say: 'Keep it professional — stick to the numbers and the business impact only.'",
                    "Say: 'The most professional thing you can do in a case study is be honest — and the honest truth is that the decisions Claire made were not just business decisions, they were personal ones. Forty jobs were at risk. She was under pressure from her board and her team at the same time. Acknowledging that is not unprofessional — it is what makes the story real. The emotion we are looking for is not sentiment or drama — it is recognition. When another operations director reads about the pressure Claire was under and thinks 'I know exactly how that feels', that connection is what makes them read to the end and believe the result. Facts without feeling are forgettable. Facts that make you feel something are unforgettable.'",
                    "Say: 'A moderate amount of emotion is fine — try to balance personal moments with business language throughout.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It reframes what 'emotional' means in B2B — it is not drama, it is recognition — and explains why that recognition is what drives engagement and belief. A produces a forgettable document full of numbers with no human connection. C gives vague advice ('moderate amount') without explaining what emotional appeal actually looks like in practice."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three case study drafts. Match each to the storytelling fix it most needs. Discuss as a group before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "Draft A — TechFlow",
                "description": "The case study leads with three paragraphs about TechFlow's platform, its features, and its development history. By paragraph four, the reader finally meets Claire — the operations director who used it. The result (22% cost reduction) appears on the last line. Most people stop reading before they get there.",
                "matchKey": "structure"
            },
            {
                "name": "Draft B — BrightPath Analytics",
                "description": "The case study is well structured — it leads with the client's challenge, describes the decision process, and ends with the result. But the result is described as 'a significant improvement in reporting efficiency and team productivity'. No specific numbers are given. The client approved the story but did not want to share specific data.",
                "matchKey": "proof"
            },
            {
                "name": "Draft C — NovaSpark",
                "description": "The case study has all the right elements: a named client, a specific conflict, clear proof points (18% cost reduction, 45 days), and a resolution. But it reads like a report — formal, passive voice, no human moments. There is no quote from the client, no sense of what it felt like, and no moment of tension or relief.",
                "matchKey": "emotion"
            }
        ],
        "options": [
            {
                "key": "structure",
                "label": "Restructure — lead with the conflict, not the product",
                "description": "Rewrite the opening to start with Claire and her situation: the pressure, the timeline, the risk. Move the product information to where it belongs in the narrative — the moment Claire decided to try TechFlow. End with the result as the resolution, not as an afterthought. The story structure should be: conflict → decision → resolution. The product is part of the decision, not the introduction."
            },
            {
                "key": "proof",
                "label": "Add specific proof points",
                "description": "Go back to the client and negotiate what can be shared — even partial or directional numbers are better than nothing. 'Reporting time reduced by approximately 40%' or 'the team now produces weekly reports in 2 hours instead of 2 days' is specific and verifiable without exposing commercially sensitive data. If no numbers are possible, get a direct quote from the client in their own words that describes the outcome in concrete terms. A story without proof points is a testimonial, not a case study."
            },
            {
                "key": "emotion",
                "label": "Add the human moment",
                "description": "Interview the client about the experience — not the data, the feeling. Ask: what was it like the week before you hit the target? Was there a moment you thought it was not going to work? What did you say to your team when you presented the result? One honest answer to any of those questions will transform the case study from a report into a story. Add a direct quote in the client's own words, and write one paragraph that describes the tension before the resolution landed."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer has started telling or explaining a brand story. Finish the line clearly and practically. Use vocabulary from this lesson.",
        "items": [
            {
                "customerLine": "Client: 'How do we turn our client results into a story people will actually want to read?'",
                "salespersonStart": "It starts with one question: who is the hero of this story — and it is never the brand.",
                "suggestedCompletion": "The hero is your client — the person who faced a real problem, made a decision under pressure, and achieved something that matters. TechFlow's role in the story is the guide or the tool — the thing that made the outcome possible, but not the character the reader connects with. So the structure of the story is: who is Claire, what pressure was she under, what did she decide, and what happened? The conflict — 90 days, 20% target, 40 jobs at risk — is what draws the reader in, because every operations director reading it recognises that situation. The proof point — 22% in 67 days — is what makes them believe it. And the emotional truth — zero redundancies — is what makes them share it. Put all three of those together and you have a story that works."
            },
            {
                "customerLine": "Client: 'I want our brand story to be more than just a list of things we do. But I do not know where to start.'",
                "salespersonStart": "A brand story starts with why you exist — not what you sell.",
                "suggestedCompletion": "Here are three questions that will give you the raw material. First: what problem were you solving when you started TechFlow — not the business problem, the human problem? Were operations directors being given impossible targets with no tools to meet them? Were good people losing their jobs for reasons that should have been preventable? That is your origin. Second: who did you build this for — specifically? Not 'manufacturers', but a person: Claire, or someone like her, who was trying to do something that mattered and needed better tools to do it. Third: what is the world you are working towards — what does success look like not for TechFlow, but for the operations directors who use it? When you can answer those three questions, the brand story is already there. My job is to shape it into language that connects."
            },
            {
                "customerLine": "Client: 'The client in our case study went through a really difficult time before they used TechFlow. Should we include that in the story?'",
                "salespersonStart": "Yes — and that difficulty is actually the most important part of the story.",
                "suggestedCompletion": "The conflict — the difficult time before the resolution — is what creates the tension that makes the reader care. Without it, the 22% cost reduction is just a number. With it, the 22% is the relief of a director who genuinely did not know if she was going to make it. The key is to be honest and specific without being exploitative. You are not using the client's difficult moment for shock value — you are showing that the challenge was real, so the outcome is credible. The reader needs to believe that TechFlow was tested under real pressure before they will trust the result. Ask your client permission to include the difficult moments, explain why they make the story stronger, and let them read the draft before it goes live. In our experience, clients who were initially reluctant to include the struggle end up being proudest of those paragraphs — because it shows what they actually went through and what they actually achieved."
            },
            {
                "customerLine": "Client: 'We have lots of great results but no one is sharing our case studies. What are we doing wrong?'",
                "salespersonStart": "Results alone are not shareable — stories about results are.",
                "suggestedCompletion": "When someone reads a number — 22% cost reduction — their reaction is 'interesting'. When they read about Claire, the 90 days, the 40 jobs, and the moment she walked into the board meeting with results better than anyone expected — their reaction is 'I need to share this with my team'. People share stories because they connect emotionally or because they solve a problem for someone they know. A case study that is structured as a story — conflict, decision, resolution, human moment, proof — is shareable. A case study that is structured as a data report is not. The fix is straightforward: take your best three results, interview the client for 30 minutes about the human experience, and rewrite the case study with a story structure. Start with the person. End with the number. Put the tension in the middle. That is what travels."
            }
        ]
    }
},
};
