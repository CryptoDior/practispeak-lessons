import { Lesson } from '@/types/lesson';

export const consumerPsychology: Lesson = {
  slug: 'consumer-psychology',
  title: 'Consumer Psychology',
  subtitle: 'How to use the language of behaviour and decision-making to analyse campaigns, brief creatives, and explain why customers do what they do',
  level: 'B1-B2',
  description: "People don't make decisions the way we think they do. They are influenced by cognitive biases, social signals, scarcity, and the way choices are framed — often without knowing it. Understanding consumer psychology gives marketers a powerful advantage: you can design campaigns that work with human behaviour instead of against it. This lesson teaches you the vocabulary and phrases to discuss psychological principles at work, analyse real campaigns, and brief creative teams with precision.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-hero.png',

  vocabulary: [
    {
      word: 'COGNITIVE BIAS',
      partOfSpeech: 'noun',
      definition: 'A mental shortcut that leads people to make illogical choices.',
      example: 'Each cognitive bias changes how customers read our ads.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-cognitive-bias.png',
    },
    {
      word: 'PRIMING',
      partOfSpeech: 'noun',
      definition: 'Showing something first so it shapes how people react next.',
      example: 'Priming with calm images made visitors see our brand as premium.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-priming.png',
    },
    {
      word: 'SOCIAL PROOF',
      partOfSpeech: 'noun',
      definition: 'Evidence that many other people like or choose something.',
      example: 'Social proof from happy buyers helped the new handbag sell quickly.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-social-proof.png',
    },
    {
      word: 'SCARCITY',
      partOfSpeech: 'noun',
      definition: 'A situation where something is rare or there is not enough.',
      example: 'The countdown timer added scarcity to our offer.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-scarcity.png',
    },
    {
      word: 'ANCHORING',
      partOfSpeech: 'noun',
      definition: 'Relying too much on the first number or fact you see.',
      example: 'Anchoring with the high price first makes the basic plan look cheap.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-anchoring.png',
    },
    {
      word: 'LOSS AVERSION',
      partOfSpeech: 'noun',
      definition: 'Feeling more upset about giving up something than happy about getting it.',
      example: 'She felt loss aversion when the app said her bonus would expire.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-loss-aversion.png',
    },
    {
      word: 'FRAMING EFFECT',
      partOfSpeech: 'noun',
      definition: 'How the way information is presented changes people\'s reactions to it.',
      example: 'The framing effect changed how people reacted to the same offer.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-framing-effect.png',
    },
    {
      word: 'RECIPROCITY',
      partOfSpeech: 'noun',
      definition: 'Giving something back to someone because they gave you something.',
      example: 'Reciprocity explains why customers buy after we send a free gift.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-reciprocity.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS CAMPAIGN LEVERAGES THE PRINCIPLE OF...',
      definition: 'Says the campaign is built to use a particular idea about behaviour.',
      example: 'This campaign leverages the principle of reciprocity to build trust.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-this-campaign-leverages-the-principle-of.png',
      inAction: 'This campaign leverages the principle of reciprocity — we give away a genuinely useful guide before asking for anything in return.',
      register: "Formal / Business English — GlowLab Skincare (DTC beauty, Instagram + TikTok): campaign brief opens with this campaign leverages the principle of social proof — every creative shows a verified customer result, no models. | Noor (B2B SaaS, LinkedIn ads): pitch deck slide reads this campaign leverages the principle of loss aversion — the funnel shows teams what gets dropped when work lives in email. | PeakForm (fitness app, paid search + App Store): launch strategy reads this campaign leverages the principle of commitment and consistency — users who complete a free 3-day challenge convert at 4x the rate of cold traffic.",
      visualExamples: [
        { brand: 'GlowLab Skincare', context: 'Beauty / DTC brand — Instagram + TikTok', imageSlug: '/images/visual-examples/glowlab-social-proof.png', caption: 'This campaign leverages the principle of social proof — every creative shows a verified customer result, no models.', aspectRatio: '9/16' },
        { brand: 'Noor', context: 'B2B SaaS — LinkedIn sponsored content', imageSlug: '/images/visual-examples/noor-loss-aversion.png', caption: 'This campaign leverages the principle of loss aversion — the funnel shows teams what gets dropped when work lives in email.', aspectRatio: '1.91/1' },
        { brand: 'PeakForm', context: 'Fitness app — paid search + App Store', imageSlug: '/images/visual-examples/peakform-commitment.png', caption: 'This campaign leverages the principle of commitment and consistency — users who complete a free 3-day challenge convert at 4x.', aspectRatio: '9/19.5' },
      ],
      inContext: "Riley walked the client through the creative rationale. This campaign leverages the principle of social proof, she explained. Every touchpoint shows real customer results and real faces — we're not asking the prospect to trust us; we're showing them that hundreds of people like them already have.",
    },
    {
      phrase: "THE CUSTOMER'S DECISION IS DRIVEN BY...",
      definition: 'Says what main reason makes the customer choose something.',
      example: 'The customer\'s decision is driven by status, not by price.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-the-customers-decision-is-driven-by.png',
      inAction: "In this segment, the customer's decision is driven by fear of making a costly mistake — not by excitement about finding the best product.",
      register: "Neutral — Lumiere (luxury anti-ageing skincare, department store + DTC): brief reads the customer decision is driven by fear, not aspiration — she is buying protection, not hope. Headlines focus on prevention. | Vault (personal finance app, App Store): copy brief reads the customer decision is driven by anxiety — she knows she should save. We reassure, we do not educate. | Archive (secondhand fashion, Instagram + web): the customer decision is driven by identity — buying vintage is a statement, not a bargain. Price is never the message.",
      visualExamples: [
        { brand: 'Lumiere', context: 'Luxury anti-ageing skincare — department store + DTC site', imageSlug: '/images/visual-examples/lumiere-fear-copy.png', caption: 'The customer decision is driven by fear, not aspiration — she is buying protection. Headlines focus on prevention, not glamour.', aspectRatio: '3/2' },
        { brand: 'Vault', context: 'Personal finance app — App Store + Facebook ads', imageSlug: '/images/visual-examples/vault-anxiety-copy.png', caption: 'The customer decision is driven by anxiety — she already knows she should save. We reassure, we do not educate.', aspectRatio: '9/19.5' },
        { brand: 'Archive', context: 'Secondhand fashion marketplace — Instagram + web', imageSlug: '/images/visual-examples/archive-identity-copy.png', caption: 'The customer decision is driven by identity — buying vintage is a statement, not a bargain. Price is never the message.', aspectRatio: '1/1' },
      ],
      inContext: "Marcus had done his audience research before writing the brief. The customer's decision is driven by loss aversion, not aspiration, he told the team. That means our messaging needs to focus on risk reduction and trust signals — not features and innovation.",
    },
    {
      phrase: "WE'RE USING SCARCITY TO CREATE URGENCY",
      definition: 'Says we limit supply or time so customers act quickly.',
      example: 'We\'re using scarcity to create urgency before the offer ends.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-were-using-scarcity-to-create-urgency.png',
      inAction: "We're using scarcity to create urgency — the early-bird rate is only available to the first 100 companies who sign up.",
      register: "Neutral — Maison Brulee (artisan candle brand, Shopify + email list): drop email reads we are using scarcity to create urgency — 200 units, hand-poured, no restock. Sells out in under an hour every time. | Apex Academy (online marketing course, own website): sales page reads we are using scarcity to create urgency — founding member pricing closes Sunday, price doubles Monday. Real deadline, real reason. | Meridian Studio (brand photography, Instagram bookings): DM script reads we are using scarcity to create urgency — 2 Q4 slots left, both go by end of week. No fabrication, just truth told loudly.",
      visualExamples: [
        { brand: 'Maison Brulee', context: 'Artisan candle brand — Shopify store + email list', imageSlug: '/images/visual-examples/maison-brulee-scarcity.png', caption: '200 units, hand-poured, no restock. We are using scarcity to create urgency — sells out in under an hour every time.', aspectRatio: '3/1' },
        { brand: 'Apex Academy', context: 'Online marketing course — own website + email', imageSlug: '/images/visual-examples/apex-academy-deadline.jpg', caption: 'We are using scarcity to create urgency — founding member pricing closes Sunday, price doubles Monday. Real deadline, real reason.', aspectRatio: '16/9' },
        { brand: 'Meridian Studio', context: 'Brand photography service — Instagram bookings', imageSlug: '/images/visual-examples/meridian-slots.jpg', caption: 'We are using scarcity to create urgency — 2 Q4 slots left, both go by end of week. No fabrication, just truth told loudly.', aspectRatio: '1/1' },
      ],
      inContext: "Dana walked through the offer mechanics with the team. We're using scarcity to create urgency in the final week of the campaign, she explained. The scarcity is real — once we hit 100 sign-ups, the price goes up automatically. Customers can tell when it's manufactured, so we never fake it.",
    },
    {
      phrase: 'THE FRAMING IS DOING A LOT OF WORK HERE',
      definition: 'Says the way something is presented has most of the effect.',
      example: 'The framing is doing a lot of work here, not the product.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-the-framing-is-doing-a-lot-of-work-here.png',
      inAction: "The framing is doing a lot of work here — the same £500 saving feels very different as 'Save £500' versus 'Don't lose £500 this month'.",
      register: "Informal / Professional — Ember (meal kit subscription, Facebook + Instagram): A/B test debrief reads the framing is doing a lot of work here — Stop throwing away half your groceries beats Fresh ingredients delivered by 28% CTR. Same product, different frame. | Shield (cybersecurity SaaS, LinkedIn): campaign review reads the framing is doing a lot of work — What happens when you get breached outperforms Enterprise-grade protection on every metric. Fear frame beats feature frame. | Drift (running shoes, Google Shopping + own site): the framing is doing a lot of work — Built for people who run before work outperforms High-performance running shoe. Identity beats specification.",
      visualExamples: [
        { brand: 'Ember', context: 'Meal kit subscription — Facebook + Instagram ads', imageSlug: '/images/visual-examples/ember-framing-test.jpg', caption: 'The framing is doing a lot of work — Stop throwing away half your groceries beats Fresh ingredients delivered by 28% CTR.', aspectRatio: '4/5' },
        { brand: 'Shield', context: 'Cybersecurity SaaS — LinkedIn sponsored posts', imageSlug: '/images/visual-examples/shield-fear-frame.jpg', caption: 'The framing is doing a lot of work — What happens when you get breached outperforms Enterprise-grade protection on every metric.', aspectRatio: '1.91/1' },
        { brand: 'Drift', context: 'Running shoes — Google Shopping + own website', imageSlug: '/images/visual-examples/drift-identity-frame.jpg', caption: 'The framing is doing a lot of work — Built for people who run before work outperforms High-performance running shoe every time.', aspectRatio: '1/1' },
      ],
      inContext: "They were reviewing the A/B test results when Riley pointed at the data. The framing is doing a lot of work here, she said. Both ads have the same offer and the same price — but the one that leads with loss outperformed by 22%. The copy didn't change; only the frame did.",
    },
    {
      phrase: 'WE WANT TO PRIME THE CUSTOMER BEFORE...',
      definition: 'Says we prepare the customer\'s mindset before showing them something.',
      example: 'We want to prime the customer before the offer email arrives.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-we-want-to-prime-the-customer-before.png',
      inAction: 'We want to prime the customer before they see the pricing page — the three touchpoints before the offer must build trust, not sell.',
      register: "Neutral — Noir Maison (luxury home fragrance, own e-commerce + Liberty London): Instagram strategy reads we want to prime the customer before they ever see a price — the first 6 posts are atmosphere only, no product shots, no prices. By the time the product appears, the customer already lives in the world. | Scope (B2B analytics, email + LinkedIn): SDR playbook reads we want to prime the customer before the demo request — the first 3 emails are only about the problem, Scope is not mentioned until email 4. | Ritual Box (wellness subscription, YouTube + own site): influencer brief reads we want to prime the customer before the unboxing ends — the affiliate link goes in after the hero product reveal, not in the first 30 seconds.",
      visualExamples: [
        { brand: 'Noir Maison', context: 'Luxury home fragrance — own e-commerce + Liberty London', imageSlug: '/images/visual-examples/noir-maison-priming.jpg', caption: 'We want to prime the customer before they see the price — first 6 posts are atmosphere only, no products, no prices.', aspectRatio: '4/5' },
        { brand: 'Scope', context: 'B2B analytics platform — email sequences + LinkedIn', imageSlug: '/images/visual-examples/scope-email-priming.jpg', caption: 'We want to prime the customer before the demo request — first 3 emails are only about the problem, Scope is not mentioned until email 4.', aspectRatio: '1.91/1' },
        { brand: 'Ritual Box', context: 'Wellness subscription — YouTube influencer + own site', imageSlug: '/images/visual-examples/ritual-box-priming.jpg', caption: 'We want to prime the customer before the unboxing ends — the affiliate link goes in after the hero product reveal, not the first 30 seconds.', aspectRatio: '16/9' },
      ],
      inContext: "Marcus outlined the email sequence on the whiteboard. We want to prime the customer before we make any ask, he said. That means the first three emails are purely about the problem — we make them feel the pain before we present the solution. By the time the offer lands, they're already in the right mindset.",
    },
    {
      phrase: 'THE PSYCHOLOGICAL INSIGHT BEHIND THIS IS...',
      definition: 'Introduces the idea about human behaviour that explains a decision.',
      example: 'The psychological insight behind this is that people copy others.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/consumer-psychology-the-psychological-insight-behind-this-is.png',
      inAction: 'The psychological insight behind this is anchoring — when customers see the premium plan first, the standard plan instantly feels like better value.',
      register: "Formal — Bloom (DTC vitamins, Meta ads + email): investor pitch reads the psychological insight behind this is the identifiable victim effect — our ads feature one woman's story, not category statistics. One face converts 3x better than a fact. | Forge (project management SaaS, free trial): product team note reads the psychological insight behind this is the endowment effect — once a user has named their first project and invited their team, leaving Forge feels like losing something they built. | Serum No4 (prestige skincare, Sephora + own DTC site): marketing review reads the psychological insight behind this is the mere exposure effect — we run the same creative for 6 weeks on purpose. Familiarity reads as trust in the beauty category.",
      visualExamples: [
        { brand: 'Bloom', context: 'DTC vitamin brand — Meta ads + email campaigns', imageSlug: '/images/visual-examples/bloom-victim-effect.jpg', caption: 'The psychological insight behind this is the identifiable victim effect — one face converts 3x better than category statistics.', aspectRatio: '1/1' },
        { brand: 'Forge', context: 'Project management SaaS — free trial onboarding funnel', imageSlug: '/images/visual-examples/forge-endowment.jpg', caption: 'The psychological insight behind this is the endowment effect — once users build inside the tool, leaving feels like losing something they made.', aspectRatio: '16/9' },
        { brand: 'Serum No4', context: 'Prestige skincare — Sephora + own DTC site', imageSlug: '/images/visual-examples/serum-no4-exposure.jpg', caption: 'The psychological insight behind this is the mere exposure effect — same creative for 6 weeks on purpose. Familiarity reads as trust.', aspectRatio: '4/5' },
      ],
      inContext: "The client had asked why the free trial converted so well. Dana took a moment before answering. The psychological insight behind this is reciprocity, she said. When a customer spends two weeks using your tool and getting real results, they feel a natural obligation to continue. It would feel wrong to stop. That's not an accident — it's how the trial is designed.",
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Let's debrief the Q3 campaign. I want to understand what actually drove the conversion lift — because the results were stronger than we expected and I want to be able to replicate it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I've been looking at the data. I think the biggest single factor was the [[framing effect:when the same information presented in different ways produces different responses]] in the email subject lines. We stopped leading with the benefit and started leading with the loss.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Right — 'You're leaving £200 on the table' versus 'Save £200 this month'. Same offer. The loss frame outperformed by 22% in open rate.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "That's [[loss aversion:the psychological finding that people feel the pain of losing something more strongly than the pleasure of gaining the same thing]] doing exactly what it's supposed to do. People are wired to respond more strongly to loss than to gain. The research on this is extremely consistent.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "There were two other factors I want to flag. The first was the social proof strip on the landing page — we added the '3,800 companies' stat and the G2 badge two weeks into the campaign. Landing page conversion went up 14% almost immediately after.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: '[[Social proof:the psychological principle that people look to the behaviour of others to guide their own decisions]] is particularly powerful in B2B — people are spending company money, not their own. They need to see that others like them have already taken the risk.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: 'The second factor was the pricing page redesign. We moved the Enterprise plan to the top — leading with the highest price. The Pro plan, which is what we actually want most customers to buy, suddenly looked like great value in comparison.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "That's anchoring — and it's one of the most reliable pricing tactics there is. The brain processes value relatively, not absolutely. By anchoring on a high price first, we change the customer's reference point.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: 'So to summarise: the campaign leverages the principle of loss aversion in the emails, [[reciprocity:the social norm that when someone gives us something, we feel an obligation to give something back]] through the free template offer at the top of the funnel, social proof on the landing page, and anchoring on the pricing page. Each one is doing a specific job.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "And the sequencing matters. We're priming the customer at every stage before the next ask. The free template primes them to trust us. The social proof primes them to feel safe. The anchoring primes them to see the price as fair. By the time they hit 'buy now', the decision is mostly made.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "For the client debrief, how do we present this? Some clients get uncomfortable when you name the psychological techniques you're using.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "We present it as customer-first design — we built a journey that reduces anxiety, builds confidence, and gives the customer everything they need to make a good decision. That's all these techniques are doing. We're not tricking anyone; we're removing obstacles to a decision they already want to make.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "Agreed. The psychological insight behind this is genuine customer empathy — we understood what makes our customer hesitate and we designed the journey to address each hesitation point. That's the right framing for the client conversation.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Perfect. Riley — can you build the debrief deck around that framing? Customer hesitation points, what the research says about each one, and how we addressed it in the campaign.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "I'll have a first draft by end of day tomorrow. I'll use the [[cognitive bias:a systematic pattern in human thinking that causes decisions to be less than fully rational]] framework as the backbone — it gives us a vocabulary the client can use in future briefs too.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Great. If they understand why these techniques work, they'll brief us better next time.",
    }
  ],

  matchingExercise: [
    {
        "word": "cognitive bias",
        "definition": "a systematic thinking pattern that causes people to make decisions that are not fully rational"
    },
    {
        "word": "priming",
        "definition": "using an earlier stimulus to influence how a person responds to the next thing they encounter"
    },
    {
        "word": "social proof",
        "definition": "the principle that people look to others' behaviour to guide their own decisions"
    },
    {
        "word": "scarcity",
        "definition": "the principle that people place higher value on things that are rare or running out"
    },
    {
        "word": "anchoring",
        "definition": "relying heavily on the first piece of information seen when making a subsequent decision"
    },
    {
        "word": "loss aversion",
        "definition": "feeling the pain of losing something more strongly than the pleasure of gaining something of equal value"
    },
    {
        "word": "framing effect",
        "definition": "when the same information presented differently produces a different response"
    },
    {
        "word": "reciprocity",
        "definition": "the social norm that when someone gives us something, we feel obligated to give something back"
    }
],
  fillBlankExercise: [
    {
        "before": "The campaign ",
        "after": " the principle of loss aversion — leading with what customers stand to lose rather than gain.",
        "answer": "leverages"
    },
    {
        "before": "The customer's decision is ",
        "after": " by fear of making the wrong choice, not desire for the best product.",
        "answer": "driven"
    },
    {
        "before": "We're using scarcity to create ",
        "after": " — the early-bird price is only available for the first 100 sign-ups.",
        "answer": "urgency"
    },
    {
        "before": "We want to ",
        "after": " the customer before they see the pricing page — show them the problem first.",
        "answer": "prime"
    },
    {
        "before": "The framing is doing a lot of ",
        "after": " here — same offer, completely different response based on how it's presented.",
        "answer": "work"
    },
    {
        "before": "The psychological ",
        "after": " behind the free trial strategy is reciprocity — give first, and customers feel a pull to give back.",
        "answer": "insight"
    }
],
  multipleChoiceExercise: [
    {
        "question": "According to Marcus, what was the biggest single factor behind the conversion lift in Q3?",
        "options": [
            "Adding social proof to the landing page",
            "The framing of the email subject lines — leading with loss instead of gain",
            "Redesigning the pricing page with anchoring"
        ],
        "correctIndex": 1
    },
    {
        "question": "What happened to landing page conversion after the social proof strip was added?",
        "options": [
            "It increased by 22%",
            "It increased by 14%",
            "It doubled"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley suggest framing the psychological techniques for the client debrief?",
        "options": [
            "As clever marketing tactics that competitors haven't discovered yet",
            "As customer-first design that reduces anxiety and removes obstacles to a decision",
            "As scientific research findings that prove the campaign was evidence-based"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley plan to use as the backbone of the debrief deck?",
        "options": [
            "The A/B test results comparing each variant",
            "The cognitive bias framework as a vocabulary the client can use in future briefs",
            "A case study from a competitor campaign"
        ],
        "correctIndex": 1
    }
],
  warmUp: {
    "questions": [
        "Think about the last time you bought something online. Was there anything on the page — a countdown timer, a review, a 'limited stock' message — that made you more likely to buy? Did it work?",
        "Have you ever changed your mind about a price after seeing a more expensive option first? How did that affect your decision?",
        "When you're trying to persuade someone at work — a manager, a client, a colleague — do you tend to focus on the benefits they'll gain or the problems they'll avoid? Which do you think works better?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
        {
            "sentence": "People are wired _____ respond more strongly to loss than to gain.",
            "options": [
                "to",
                "for",
                "at"
            ],
            "correctIndex": 0,
            "explanation": "'Wired to' is the correct phrase — it means naturally designed or programmed to do something. 'Wired to respond' is a fixed collocation used in behavioural science and marketing writing. 'Wired for' exists but changes the meaning: 'wired for connection' means built to need connection, not to perform a specific action. 'Wired at' is not a standard phrase. When describing automatic human responses, use 'wired to + base verb'."
        },
        {
            "sentence": "The framing effect means that _____ you present information affects how people respond to it.",
            "options": [
                "what",
                "how",
                "which"
            ],
            "correctIndex": 1,
            "explanation": "'How' is correct — the sentence is about the manner in which information is presented, not what the information is. 'How you present' = the way / the method. 'What you present' would refer to the content of the information, not the style of presentation. 'Which you present' would need to refer to a specific item ('which report you present'). The framing effect is about manner, not content — so 'how' is the right choice."
        },
        {
            "sentence": "By showing the premium plan first, we _____ the customer's perception of the standard plan price.",
            "options": [
                "affect",
                "are affecting",
                "affected"
            ],
            "correctIndex": 0,
            "explanation": "Present simple ('affect') is used here to describe a general principle or predictable outcome — something that happens reliably in this context. 'By doing X, we affect Y' is a standard structure for describing cause and effect in strategy and analysis writing. 'Are affecting' (present continuous) would describe an ongoing action happening right now. 'Affected' (past tense) would describe something that already happened. When stating how a technique generally works, use present simple."
        },
        {
            "sentence": "Social proof is _____ effective in B2B because customers are spending company money, not their own.",
            "options": [
                "particular",
                "particularly",
                "particularly more"
            ],
            "correctIndex": 1,
            "explanation": "'Particularly' is the correct adverb — it modifies the adjective 'effective'. 'Particularly effective' means 'especially effective in this specific context'. 'Particular' is an adjective and cannot modify another adjective ('particular effective' is ungrammatical). 'Particularly more effective' adds 'more' unnecessarily — the comparative is not needed here since no explicit comparison is being made. When intensifying an adjective, use the adverb form ending in '-ly'."
        },
        {
            "sentence": "The free trial works because of _____ — when customers receive value first, they feel a pull to give something back.",
            "options": [
                "reciprocity",
                "reciprocal",
                "reciprocate"
            ],
            "correctIndex": 0,
            "explanation": "'Reciprocity' is the noun form needed here — it names the principle. After 'because of', you need a noun or noun phrase: 'because of reciprocity', 'because of the free offer', 'because of trust'. 'Reciprocal' is an adjective ('a reciprocal arrangement'). 'Reciprocate' is a verb ('they reciprocate by buying'). When naming a psychological principle after 'because of', always use the noun form."
        },
        {
            "sentence": "We should _____ customers before they see the pricing page by building trust through free content first.",
            "options": [
                "prime",
                "priming",
                "to prime"
            ],
            "correctIndex": 0,
            "explanation": "After 'should', always use the base form of the verb — no '-ing', no 'to'. 'We should prime' is correct. 'We should priming' is incorrect because modal verbs (should, would, could, must, will, shall, may, might) are always followed by the base form. 'We should to prime' adds 'to' unnecessarily — unlike 'want to', 'need to', and 'plan to', modal verbs do NOT take 'to' before the main verb."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Read what the client or colleague says. Choose the best professional response.",
        "items": [
            {
                "customerLine": "Isn't using psychological techniques in marketing a form of manipulation?",
                "options": [
                    "Not at all — psychology is just about understanding people. There's nothing wrong with it and all marketers do it.",
                    "It's a fair question. The difference between persuasion and manipulation is whether the technique helps the customer make a better decision or tricks them into a worse one. Everything we do — social proof, clear framing, reducing friction — is designed to help customers understand and act on a decision they already want to make.",
                    "Manipulation is a strong word. Marketing has always used psychology. It's completely normal and legal."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the right answer — it takes the question seriously, draws a clear and honest distinction between persuasion and manipulation, and explains the ethical basis of the approach. This is the kind of response that builds trust with a thoughtful client. Option A dismisses the concern too quickly ('nothing wrong with it, everyone does it') without actually addressing the ethical question. Option C is defensive and unhelpful — 'it's legal' is not the same as 'it's ethical', and the client deserves better reasoning."
            },
            {
                "customerLine": "We tried scarcity in our last campaign and it didn't work. Why would it work now?",
                "options": [
                    "Scarcity doesn't always work — it depends on the product and the audience. Can you tell me more about how it was implemented last time? Was the scarcity genuine, was it visible at the right moment in the customer journey, and did the rest of the copy support the urgency?",
                    "Scarcity always works when it's implemented correctly. The issue must have been with the execution.",
                    "Maybe scarcity isn't the right tactic for your brand. Let's try something else entirely."
                ],
                "correctIndex": 0,
                "explanation": "Option A is the professional response — it acknowledges that the tactic can fail, asks diagnostic questions to understand what went wrong, and shows that effective use of scarcity depends on multiple factors working together. It also implicitly identifies three common failure modes (fake scarcity, wrong placement, unsupported copy). Option B is overconfident and puts the blame on the client without understanding the situation. Option C gives up on a proven tactic too quickly based on one failed attempt."
            },
            {
                "customerLine": "We want to use loss aversion in the campaign. How do we do it without sounding negative?",
                "options": [
                    "You can't — loss aversion is inherently negative. If you want a positive tone, you should use gain-framing instead.",
                    "Loss aversion framing doesn't have to be dark or alarming. Phrases like 'Don't miss your chance to...', 'Companies like yours are already...', or 'Every week without X costs you...' create a sense of loss without being threatening. The key is to make the loss feel real and relevant, not manufactured or exaggerated.",
                    "The best approach is to split test both loss and gain framing and let the data decide. We shouldn't assume loss aversion will outperform."
                ],
                "correctIndex": 1,
                "explanation": "Option B is the best response — it directly answers the question with specific, usable language examples and explains the principle behind them. It shows expertise and gives the client something they can act on immediately. Option A presents a false choice — loss aversion and positive tone are not opposites, and many high-performing campaigns combine both. Option C avoids answering the question by deferring to a test — which may be good advice eventually, but it doesn't help the client write the brief today."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read the campaign debrief extract. Three lines have a grammar mistake. Can you find them?",
        "dialogue": [
            {
                "speaker": "Riley",
                "text": "The Q3 campaign used three key psychological principles: loss aversion, social proof, and anchoring."
            },
            {
                "speaker": "Marcus",
                "text": "The framing of the subject lines were the biggest single driver of the open rate improvement."
            },
            {
                "speaker": "Dana",
                "text": "Adding the social proof strip to the landing page caused conversion to increased by 14%."
            },
            {
                "speaker": "Riley",
                "text": "The pricing page was redesigned to anchor the customer on the Enterprise plan before they see the other options."
            },
            {
                "speaker": "Marcus",
                "text": "Every of these changes was informed by research into consumer decision-making behaviour."
            },
            {
                "speaker": "Dana",
                "text": "For the next campaign, we should test scarcity messaging in the final email of the sequence."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 1,
                "incorrectText": "The framing of the subject lines were",
                "correction": "The framing of the subject lines was",
                "explanation": "The subject of this sentence is 'the framing' — not 'the subject lines'. The phrase 'of the subject lines' is a prepositional phrase that describes framing, but it does not change what the subject is. 'The framing... was' is correct because 'framing' is singular. This is a very common agreement error: when a singular subject is followed by 'of + plural noun', the verb must still agree with the singular subject. Other examples: 'the quality of the results was excellent', 'the success of the campaigns depends on timing'."
            },
            {
                "lineIndex": 2,
                "incorrectText": "caused conversion to increased",
                "correction": "caused conversion to increase",
                "explanation": "After 'cause + object + to', always use the base form of the verb — the infinitive without '-d' or '-ed'. 'Caused conversion to increase' is correct. 'Caused conversion to increased' adds '-d' incorrectly — the verb after 'to' must always be the base form (bare infinitive). This applies to all causative structures: 'caused it to rise', 'led to an increase', 'resulted in a lift'. The structure is: cause + noun/pronoun + to + base verb."
            },
            {
                "lineIndex": 4,
                "incorrectText": "Every of these changes",
                "correction": "Each of these changes",
                "explanation": "'Every' cannot be followed directly by 'of' — it must be followed by a singular noun: 'every change', 'every decision', 'every campaign'. To refer to items within a defined group using 'of', you must use 'each': 'each of these changes', 'each of the campaigns', 'each of us'. The distinction: 'every' quantifies universally (every single one, without exception) and takes a singular noun directly. 'Each' focuses on individual members of a group and can be followed by 'of + plural noun'."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer starts a sentence in a client meeting. Work with your partner to finish it professionally.",
        "items": [
            {
                "customerLine": "The landing page has a lot of information but our conversion rate is really low. What's going wrong?",
                "salespersonStart": "The issue might not be the information itself — it might be the order and framing. Visitors are making a decision about trust before they even read the features. The psychological insight behind good landing page design is that...",
                "suggestedCompletion": "you need to reduce anxiety before you ask for a commitment. Right now, the pricing is visible before the social proof. We should flip the sequence: lead with who trusts you, then show the value, then show the price. By the time the visitor sees the cost, they already believe you can deliver."
            },
            {
                "customerLine": "We want to do a limited-time offer but our legal team is worried about false scarcity claims.",
                "salespersonStart": "That's a completely legitimate concern — and actually, real scarcity is more effective anyway. Customers have become very good at spotting manufactured urgency. What we recommend is...",
                "suggestedCompletion": "making the scarcity genuinely true — either a real deadline, a real inventory limit, or a cohort-based offer with a fixed number of places. If we say 'only 50 spots', we close at 50. When customers see that the offer actually expired, it builds trust in future campaigns. Fake scarcity works once; real scarcity builds a reputation."
            },
            {
                "customerLine": "Our competitor is offering the same product for less. How do we compete without cutting our price?",
                "salespersonStart": "Price is only one part of the decision — and often not the most important one for B2B buyers. The way to compete without cutting price is to shift the frame. Instead of letting the customer compare on price, we need to...",
                "suggestedCompletion": "anchor them on total value: what does it cost to make the wrong choice? If our product reduces customer churn by 15% and their team wastes six months on a cheaper alternative that doesn't deliver, the 'expensive' option is actually cheaper. We use loss aversion and ROI framing to make price a secondary consideration, not the primary one."
            }
        ]
    }
},
};
