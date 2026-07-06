import { Lesson } from '@/types/lesson';

export const advancedCopywriting: Lesson = {
  slug: 'advanced-copywriting',
  title: 'Advanced Copywriting',
  subtitle: 'How to write copy that persuades — using structure, voice, and rhetorical technique',
  level: 'C1-C2',
  description: "Good copy does not just describe — it persuades. At the advanced level, copywriting is about understanding why people make decisions and writing in a way that moves them to act. This lesson teaches the principles behind high-performing copy: from rhetorical devices and persuasive structure to voice, hierarchy, and the techniques that turn a good idea into copy that converts.",
  heroImage: '/images/advanced-copywriting-hero.png',

  vocabulary: [
    {
      word: 'Rhetorical device',
      partOfSpeech: 'noun',
      definition: "A writing technique used to make communication more persuasive, memorable, or emotionally powerful. Common rhetorical devices include repetition, contrast, and the rule of three.",
      example: "Riley said: 'We came, we saw, we conquered.' That is a rhetorical device — the rule of three. Three short beats, each one building on the last. It is memorable because the brain finds patterns of three satisfying. Use it in headlines, in closing arguments, and in calls to action.",
      imageSlug: '/images/rhetorical-device.png',
    },
    {
      word: 'Ethos',
      partOfSpeech: 'noun',
      definition: "An appeal to credibility or authority. Copy that uses ethos builds trust by demonstrating expertise, experience, or endorsement from someone the reader respects.",
      example: "Riley said: Ethos is why testimonials work, why 'as used by 10,000 businesses' works, why 'recommended by leading dermatologists' works. You are not just claiming to be good — you are borrowing the credibility of someone the reader already trusts.",
      imageSlug: '/images/ethos.png',
    },
    {
      word: 'Pathos',
      partOfSpeech: 'noun',
      definition: "An appeal to emotion. Copy that uses pathos connects with how the reader feels — their fears, desires, frustrations, or aspirations — rather than just presenting facts and features.",
      example: "Marcus showed Riley two headlines. One said: 'Our software saves you 3 hours per week.' The other said: 'Stop losing 3 hours a week you can never get back.' Riley said: The second one uses pathos. It does not describe the benefit — it makes you feel the pain of not having it.",
      imageSlug: '/images/pathos.png',
    },
    {
      word: 'Logos',
      partOfSpeech: 'noun',
      definition: "An appeal to logic and reason. Copy that uses logos persuades through facts, data, evidence, and rational argument — giving the reader a logical reason to act.",
      example: "Riley said: Logos is the rational layer of persuasion. 'Our customers see a 40% increase in qualified leads in 90 days' is logos — it gives the reader a measurable, logical reason to believe the product works. Combine it with pathos and ethos for maximum impact.",
      imageSlug: '/images/logos.png',
    },
    {
      word: 'Copy hierarchy',
      partOfSpeech: 'noun',
      definition: "The order in which copy elements are read — headline, subheadline, body copy, call to action. Strong copy hierarchy ensures that even a reader who spends five seconds on a page gets the key message.",
      example: "Riley reviewed Marcus's landing page: The hierarchy is wrong. The headline is generic, the subheadline explains what you sell, and the benefit is buried in paragraph three. Flip it — headline leads with the benefit, subheadline adds context, body proves it. Readers should not have to hunt for the point.",
      imageSlug: '/images/copy-hierarchy.png',
    },
    {
      word: 'Voice',
      partOfSpeech: 'noun',
      definition: "The distinctive personality and tone that makes a brand's writing recognisable. Voice is consistent across all copy — even when the format, audience, or message changes.",
      example: "Riley said: Voice is the difference between two brands writing about the same product and sounding completely different. Our voice is direct, confident, and a little irreverent — never formal, never corporate. If your copy could have been written by any brand, it has no voice.",
      imageSlug: '/images/voice.png',
    },
    {
      word: 'Conversion copy',
      partOfSpeech: 'noun',
      definition: "Copy specifically written to drive a specific action — a click, a sign-up, a purchase, or a call. Conversion copy is judged by results, not by how well it reads.",
      example: "Riley said: Conversion copy is not about being clever — it is about being clear. The job is to get someone who is already interested to take the next step. Remove friction, answer the last objection, and tell them exactly what to do. Everything else is decoration.",
      imageSlug: '/images/advanced-copywriting-conversion-copy.png',
    },
    {
      word: 'Headline',
      partOfSpeech: 'noun',
      definition: "The most important single line of copy — the one that decides whether the rest gets read. A great headline communicates the core benefit or creates enough curiosity that the reader must read on.",
      example: "Riley said: David Ogilvy said that when you have written the headline, you have spent 80 cents of your pound. He was right. If the headline does not earn attention, nothing else matters. Write twenty before you choose one.",
      imageSlug: '/images/advanced-copywriting-headline.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "Lead with the benefit, not the feature",
      definition: "A core copywriting principle — the headline and opening should tell the reader what they gain, not what the product does. Features describe. Benefits persuade.",
      example: "Riley looked at the ad copy: 'Advanced AI-powered scheduling engine.' She said: That is a feature. Lead with the benefit: 'Save 5 hours a week — automatically.' The reader does not care what the engine does. They care what it does for them.",
      imageSlug: '/images/advanced-copywriting-lead-with-the-benefit-not-the-feature.png',
    },
    {
      phrase: "What is the one thing this copy needs to do?",
      definition: "A clarifying question asked before writing — or reviewing — any piece of copy. Great conversion copy does one thing well. Copy that tries to do everything does nothing well.",
      example: "Before Marcus started writing the landing page, Riley asked: What is the one thing this copy needs to do? Marcus said: Get people to start a free trial. Riley said: Good. Then every element — headline, body, CTA — has to serve that one job. Cut everything that does not.",
      imageSlug: '/images/what-is-the-one-thing-this-copy-needs-to-do.png',
    },
    {
      phrase: "You are talking to one person",
      definition: "A reminder that the best copy is written as if to a single reader — not a segment, not a demographic, not an audience. The more specifically you write for one person, the more universally it resonates.",
      example: "Riley said: When you write this email, you are talking to one person. Not 'our audience' or 'SME decision-makers'. One specific person who has a specific problem. Picture them. Name them if it helps. Write to them. The copy will be sharper for it.",
      imageSlug: '/images/you-are-talking-to-one-person.png',
    },
    {
      phrase: "Answer the last objection before the CTA",
      definition: "A conversion copy technique — identifying the final hesitation a reader has just before they act, and removing it in the copy just before the call to action.",
      example: "Riley said: Right before the sign-up button, what is the reader thinking? Probably: 'Is this going to be hard to cancel?' So we answer it: 'No contract. Cancel any time.' Answer the last objection before the CTA and your conversion rate will go up. Guaranteed.",
      imageSlug: '/images/answer-the-last-objection-before-the-cta.png',
    },
    {
      phrase: "Does this sound like us?",
      definition: "The voice and tone check — asking whether a piece of copy reflects the brand's distinctive personality. If any brand could have written it, the voice is missing.",
      example: "Riley read Marcus's copy aloud and asked: Does this sound like us? It's accurate — but it could be any brand in our category. Our voice is direct and a bit unexpected. Rewrite the opening so it sounds like us specifically, not like a generic tech company.",
      imageSlug: '/images/does-this-sound-like-us.png',
    },
    {
      phrase: "Make the CTA earn its click",
      definition: "A principle for writing calls to action — the button or link text should be specific, active, and connected to the value the reader gets by clicking. Weak CTAs say 'click here'. Strong ones say what clicking achieves.",
      example: "Riley said: 'Submit' is not a call to action — it is a form button. Make the CTA earn its click. Change it to 'Get my free report' or 'Start saving time today'. The reader should feel that clicking is the obvious next step, not a commitment or a risk.",
      imageSlug: '/images/make-the-cta-earn-its-click.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I'm rewriting our homepage. I want the copy to actually convert, not just look nice. Where do I start?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Start with one question: what is the one thing this copy needs to do? For a homepage, it is usually to get someone to take the next step — a trial, a demo, a scroll. Every word should serve that job.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Right now our [[headline:the most important line of copy that decides whether the rest gets read]] says: 'Advanced project management software for modern teams.' What is wrong with that?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It is a feature description, not a benefit. Lead with the benefit, not the feature. What does the software actually do for someone? What do they gain? What pain does it remove?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "It saves teams about 5 hours a week on status updates and meetings.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "There is your headline. Now make it use [[pathos:an appeal to emotion — connecting with how the reader feels rather than just presenting facts]]. Not 'save 5 hours a week' — try: 'Stop losing 5 hours a week to meetings that go nowhere.' That uses emotion. The reader feels the pain before they hear the solution.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I also want to add social proof. We have 10,000 customers and a 4.9 rating.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is [[ethos:an appeal to credibility — building trust through expertise, experience, or endorsement]]. Use it. 'Trusted by 10,000 teams worldwide — rated 4.9 on G2.' That borrows credibility from the people who already trust you. It answers the question the sceptical reader is asking: 'Has this worked for people like me?'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the body copy has data — '40% reduction in meeting time, 30% improvement in on-time delivery.' Is that useful?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — that is [[logos:an appeal to logic and reason — persuading through facts, data, and rational argument]]. Use all three: pathos in the headline, ethos in the social proof, logos in the body. That is the full persuasion stack.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about [[copy hierarchy:the order in which copy elements are read — headline, subheadline, body, call to action]]? My current page has the testimonials before the product description.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Fix the hierarchy. Headline first — benefit. Subheadline — one sentence of context. Then the logical proof. Then testimonials to confirm. CTA last — but make the CTA earn its click. Not 'Get started' — 'Start saving 5 hours a week'.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what about [[voice:the distinctive personality and tone that makes a brand's writing recognisable]]? We want to sound confident but not arrogant.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Define your voice in three words. Write copy, then ask: does this sound like us? If it could be any brand, it has no [[rhetorical device:a writing technique that makes communication more persuasive or memorable]] and no personality. The voice should be consistent from headline to CTA.",
    }
  ],

  matchingExercise: [
    { word: 'rhetorical device', definition: 'a writing technique that makes communication more persuasive or memorable' },
    { word: 'ethos', definition: 'an appeal to credibility — building trust through expertise, experience, or endorsement' },
    { word: 'pathos', definition: 'an appeal to emotion — connecting with how the reader feels rather than just presenting facts' },
    { word: 'logos', definition: 'an appeal to logic and reason — persuading through facts, data, and rational argument' },
    { word: 'copy hierarchy', definition: 'the order in which copy elements are read — headline, subheadline, body, call to action' },
    { word: 'voice', definition: "the distinctive personality and tone that makes a brand's writing recognisable" },
    { word: 'conversion copy', definition: 'copy written specifically to drive a particular action — a click, a sign-up, or a purchase' },
    { word: 'headline', definition: 'the most important line of copy that decides whether the rest gets read' }
  ],

  fillBlankExercise: [
    { before: "Lead with the ", after: ", not the feature — what the reader gains, not what the product does.", answer: "benefit" },
    { before: "Pathos, ethos, and logos together form the full ", after: " stack — emotion, credibility, and logic.", answer: "persuasion" },
    { before: "Does this sound like ", after: "? If any brand could have written it, the voice is missing.", answer: "us" },
    { before: "Answer the last ", after: " before the CTA — remove the final hesitation right before the reader acts.", answer: "objection" },
    { before: "Make the CTA earn its ", after: " — 'Start saving 5 hours a week' is stronger than 'Get started'.", answer: "click" },
    { before: "The rule of three is a common ", after: " device — three beats, each building on the last, memorable and satisfying.", answer: "rhetorical" }
  ],

  multipleChoiceExercise: [
    {
      question: "What does Riley say is wrong with the headline 'Advanced project management software for modern teams'?",
      options: ["It is too long", "It describes a feature, not a benefit — it tells you what the product is, not what it does for you", "It sounds too confident"],
      correctIndex: 1
    },
    {
      question: "How does Riley describe the difference between the two headlines about saving 5 hours?",
      options: ["The second headline is longer and more detailed", "The second headline uses pathos — it makes you feel the pain of not having the benefit", "The first headline is more factual and therefore more credible"],
      correctIndex: 1
    },
    {
      question: "What does Riley say is the correct order for copy hierarchy on a homepage?",
      options: ["Testimonials first, then product description, then headline", "Headline with benefit, subheadline with context, logical proof, testimonials, CTA", "Product features, then social proof, then the call to action"],
      correctIndex: 1
    },
    {
      question: "What does Riley mean by 'make the CTA earn its click'?",
      options: ["The button should be a bright colour that stands out visually", "The CTA text should be specific and tell the reader what clicking actually achieves — not just 'submit' or 'get started'", "There should be multiple CTAs across the page so readers can click whenever they are ready"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Think of an advertisement or piece of copy — online, in a magazine, or on a billboard — that really made you want to buy something or take action. What made it work?",
      "When you write marketing copy at work, do you tend to lead with features (what the product does) or benefits (what the customer gains)? Which approach do you find more effective?",
      "Have you ever changed a button label, email subject line, or headline and seen a significant change in results? What did you learn from it?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "The headline uses pathos — instead of describing the benefit, it makes you feel the _____ of not having it.",
        options: ["pain", "cost", "absence"],
        correctIndex: 0,
        explanation: "'Pain' is the correct word here — pathos in copywriting works by connecting to the reader's emotional experience of a problem. 'Feel the pain' is the idiomatic phrase used to describe this technique. 'Feel the cost' is more financial. 'Feel the absence' is more abstract and less emotionally direct. 'Pain' is the right word in copywriting and marketing contexts."
      },
      {
        sentence: "Testimonials and expert endorsements are examples of _____ — they borrow the credibility of someone the reader trusts.",
        options: ["logos", "pathos", "ethos"],
        correctIndex: 2,
        explanation: "'Ethos' is the appeal to credibility or authority — it works by showing that the product has been trusted or endorsed by someone the reader respects. Testimonials, star ratings, and 'used by X companies' are all ethos-based techniques. 'Logos' is logical argument through data. 'Pathos' is emotional appeal."
      },
      {
        sentence: "Before writing anything, ask: what is the _____ thing this copy needs to do?",
        options: ["single", "main", "one"],
        correctIndex: 2,
        explanation: "'What is the one thing this copy needs to do?' is the fixed phrase used as the clarifying question before writing. 'One' is the specific word in this idiom — it emphasises that great conversion copy has a single job. 'Single thing' and 'main thing' are possible but are not the established phrase."
      },
      {
        sentence: "'We came, we saw, we conquered' is an example of the rule of _____ — a common rhetorical device.",
        options: ["three", "threes", "thirds"],
        correctIndex: 0,
        explanation: "'The rule of three' is the fixed name for this rhetorical device — grouping things in sets of three to create rhythm, satisfaction, and memorability. 'Rule of threes' and 'rule of thirds' are not correct — 'rule of three' is always singular."
      },
      {
        sentence: "If your copy could have been written by any brand, it has no _____.",
        options: ["personality", "voice", "tone"],
        correctIndex: 1,
        explanation: "'Voice' is the technical copywriting term for the distinctive personality and style that makes a brand's writing recognisable. 'Personality' is close but is the underlying quality, not the writing-specific term. 'Tone' is related but describes the emotional register of a specific piece of writing — voice is the consistent brand-level quality across all copy."
      },
      {
        sentence: "Right before the call to action, answer the last _____ — remove the final hesitation before the reader acts.",
        options: ["question", "objection", "concern"],
        correctIndex: 1,
        explanation: "'Answer the last objection before the CTA' is the fixed copywriting phrase for the technique of removing the reader's final hesitation just before they are asked to act. 'Objection' is the precise term for a specific reason the reader might not act — it implies a challenge that needs to be answered, not just a vague worry or question."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the person says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "Our ad says 'AI-powered scheduling technology for enterprise teams'. Is that a good headline?",
          options: [
            "It depends on the audience — enterprise teams will understand what 'AI-powered' means.",
            "It is a feature headline, not a benefit headline. Lead with what the reader gains. Try: 'Eliminate 10 hours of scheduling meetings every month — automatically.' That is the benefit. The AI is the how, not the why.",
            "It is clear and professional — just make sure the design is strong enough to carry it."
          ],
          correctIndex: 1,
          explanation: "Option B applies the correct principle — feature headlines describe the product, benefit headlines persuade the reader. The rewritten example also uses a specific number (10 hours) which adds logos, and 'automatically' which implies ease. Option A defends the original by qualifying the audience, but enterprise teams still respond to benefit-led copy. Option C ignores the content problem entirely."
        },
        {
          customerLine: "Should we use the same brand voice for all markets?",
          options: [
            "Yes — voice is non-negotiable and should be completely consistent across every market and format.",
            "The core voice should be consistent, but the expression can adapt. The tone might shift slightly — more formal in some cultures, more casual in others — while the fundamental personality stays the same. Does this copy still sound like us?",
            "No — each market has its own culture and the voice should be localised completely."
          ],
          correctIndex: 1,
          explanation: "Option B correctly distinguishes between voice (the constant brand personality) and tone (the contextual expression of that personality). Voice stays consistent — tone adapts. Option A is too rigid — applying identical copy across cultural contexts ignores real differences in how formality and directness are received. Option C goes too far — changing the voice in each market destroys brand consistency."
        },
        {
          customerLine: "Our sign-up button says 'Submit'. Is that okay?",
          options: [
            "It is clear and functional — users know what to expect when they click it.",
            "No — 'Submit' is a form button, not a call to action. Make the CTA earn its click. Try 'Start my free trial' or 'Get instant access'. The reader should know what they are getting, not just what they are doing.",
            "It is fine for a secondary CTA — but the primary button should say something more aspirational."
          ],
          correctIndex: 1,
          explanation: "Option B applies the principle correctly — 'Submit' describes the action the reader takes, not the value they receive. A strong CTA tells the reader what clicking achieves. Option A accepts 'Submit' on the grounds of clarity, but clarity alone does not convert — motivation does. Option C introduces a distinction between primary and secondary CTAs that is not the main issue here."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "I've written the headline as a logos appeal — it says: 'Thousands of teams have left their old tools behind and never looked back.'"},
        { speaker: "Riley", text: "That is actually ethos — it borrows the credibility of existing customers. Logos would be specific data: '94% of teams see results in 30 days.'"},
        { speaker: "Marcus", text: "Understood. And the CTA at the bottom says 'Click here'. Is that strong enough?"},
        { speaker: "Riley", text: "No — 'Click here' is too passive. Make the CTA earn its click — try 'Start saving 5 hours a week' or 'Get instant access today'."},
        { speaker: "Marcus", text: "And for the product description, I've put the benefits before the headline and the features after. Is the hierarchy right?"},
        { speaker: "Riley", text: "No — the headline should always come first. Then benefits in the subheadline, then features or proof in the body copy below."}
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "a logos appeal — it says: 'Thousands of teams have left their old tools behind and never looked back.'",
          correction: "an ethos appeal — it uses social proof from existing customers to build credibility",
          explanation: "Logos is the appeal to logic and reason — it uses data, facts, and measurable evidence. 'Thousands of teams have left their old tools' is social proof — it borrows credibility from existing customers, which is ethos. Logos would be something like '94% of teams see results in 30 days' — a specific, measurable claim."
        },
        {
          lineIndex: 2,
          incorrectText: "'Click here'",
          correction: "'Start saving 5 hours a week' or a specific benefit-led CTA",
          explanation: "'Click here' describes the action the reader takes — not the value they receive. A strong CTA should tell the reader what clicking achieves: 'Start my free trial', 'Get instant access', 'Start saving time today'. The CTA should make clicking feel like the obvious next step, not a vague commitment."
        },
        {
          lineIndex: 4,
          incorrectText: "benefits before the headline and features after",
          correction: "headline first with the core benefit, then subheadline with context, then proof in the body",
          explanation: "Copy hierarchy is: headline first (leading with the core benefit), then a subheadline that adds context, then logical proof (data, features, testimonials) in the body copy. Benefits should be in the headline and subheadline — not in a section that comes before the headline. The headline is always the first thing the reader sees."
        }
      ]
    },
    finishTheLine: {
      instructions: "The copywriter starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "Our homepage copy is not converting. Where do we start?",
          salespersonStart: "Start with one question: what is the one thing this copy needs to do? If the answer is 'get people to start a free trial', then every element — headline, body, CTA — has to serve that job. Right now, your headline leads with a feature, not a benefit. Try leading with...",
          suggestedCompletion: "the pain the reader has right now — what are they losing without your product? Then give them the solution, the proof, and a CTA that tells them exactly what they get by clicking. That is the hierarchy. Start there."
        },
        {
          customerLine: "How do we write copy that feels emotional but still credible?",
          salespersonStart: "Use all three appeals. Lead with pathos — connect with the feeling or frustration the reader has. Then add ethos — the credibility of existing customers or expert endorsement. Then close with logos — the data that proves it works. The full persuasion stack looks like this:",
          suggestedCompletion: "'Stop losing 5 hours a week to meetings that go nowhere. Join 10,000 teams who have already made the switch. Our customers see a 40% reduction in meeting time in 30 days.' Emotion first, trust second, proof third. In that order."
        },
        {
          customerLine: "We want to have a distinctive brand voice but we are not sure how to define it.",
          salespersonStart: "Start by choosing three words that describe how you want to sound — not what you sell, but how you say it. Then write a piece of copy and ask: does this sound like us? If it could be any brand in your category...",
          suggestedCompletion: "it has no voice. Read it aloud. If it feels flat or formal, push further. The best brand voices are specific enough to be recognisable and consistent enough that every piece of copy — from a tweet to a homepage headline — sounds like it came from the same person."
        }
      ]
    }
  }
};
