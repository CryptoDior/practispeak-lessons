import { Lesson } from '@/types/lesson';

export const customerJourneyMapping: Lesson = {
  slug: 'customer-journey-mapping',
  title: 'Customer Journey Mapping',
  subtitle: 'How to describe and analyse the steps a customer takes from first contact to purchase',
  level: 'B1-B2',
  description: "A customer journey map shows every step a customer takes from the moment they first hear about your product to the moment they buy — and beyond. Understanding this journey helps marketers find the gaps, fix the problems, and improve the experience at every stage. In this lesson, you will learn the vocabulary and phrases marketing teams use to discuss, map, and improve the customer journey in English.",
  heroImage: '/images/customer-journey-mapping-hero.png',

  vocabulary: [
    {
      word: 'TOUCHPOINT',
      partOfSpeech: 'noun',
      definition: "Any moment when a customer comes into contact with your brand — an ad, a website visit, an email, or a phone call. Every touchpoint is a chance to make a good impression.",
      example: "The team identified eleven touchpoints in the customer journey from the first ad to the signed contract.",
      imageSlug: '/images/customer-journey-mapping-touchpoint.png',
    },
    {
      word: 'AWARENESS',
      partOfSpeech: 'noun',
      definition: "The first stage of the customer journey — when the customer discovers your brand for the first time. The customer is not ready to buy yet; they are just learning you exist.",
      example: "About 12,000 people reach the awareness stage each month through search and social media ads.",
      imageSlug: '/images/awareness.png',
    },
    {
      word: 'CONSIDERATION',
      partOfSpeech: 'noun',
      definition: "The stage where the customer knows about your brand and is comparing you to other options — reading reviews, watching demos, and asking questions.",
      example: "At the consideration stage, customers want to compare products and read case studies before making a decision.",
      imageSlug: '/images/consideration.png',
    },
    {
      word: 'CONVERSION',
      partOfSpeech: 'noun',
      definition: "The moment a customer takes the action you want — buying, signing up, or becoming a paying customer. The conversion rate is the percentage of people who take that action.",
      example: "The conversion rate from free trial to paid customer is 18%, which is below the industry average.",
      imageSlug: '/images/customer-journey-mapping-conversion.png',
    },
    {
      word: 'RETENTION',
      partOfSpeech: 'noun',
      definition: "Keeping customers after they have bought — making sure they stay and do not leave for a competitor. Retention is often cheaper than finding new customers.",
      example: "The 12-month retention rate is 74%, meaning 26% of customers leave within the first year.",
      imageSlug: '/images/customer-journey-mapping-retention.png',
    },
    {
      word: 'FUNNEL',
      partOfSpeech: 'noun',
      definition: "A model that shows how many people move from one stage of the journey to the next. It is wide at the top (many people) and narrow at the bottom (fewer buyers).",
      example: "The team found that the biggest drop in the funnel happens between the awareness and consideration stages.",
      imageSlug: '/images/customer-journey-mapping-funnel.png',
    },
    {
      word: 'PERSONA',
      partOfSpeech: 'noun',
      definition: "A realistic profile of a typical customer — including their job, goals, and how they make decisions. A persona helps the team create content that speaks to a specific type of customer.",
      example: "The team created three personas to make sure the journey map was relevant to each type of customer.",
      imageSlug: '/images/customer-journey-mapping-persona.png',
    },
    {
      word: 'DROP-OFF',
      partOfSpeech: 'noun',
      definition: "The point in the customer journey where people stop and do not continue to the next stage. A drop-off means something is not working at that point.",
      example: "The biggest drop-off is between the free trial and the paid subscription — 82% of trial users do not convert.",
      imageSlug: '/images/customer-journey-mapping-drop-off.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'AT THE [STAGE] STAGE, THE CUSTOMER...',
      definition: "The standard way to describe what a customer is thinking or doing at each point in the journey. Always name the stage and then describe the customer's behaviour.",
      example: "At the awareness stage, the customer has just discovered the brand and is curious but not ready to buy.",
      imageSlug: '/images/at-the-stage-stage.png',
    },
    {
      phrase: 'THE CUSTOMER FIRST ENCOUNTERS THE BRAND WHEN...',
      definition: "A phrase for describing the very first touchpoint in the journey — the moment a customer first comes into contact with your brand. Always follow it with a specific channel or action.",
      example: "The customer first encounters the brand when they see a LinkedIn ad targeting marketing managers.",
      imageSlug: '/images/customer-first-encounters.png',
    },
    {
      phrase: 'THE DROP-OFF HAPPENS AT...',
      definition: "A phrase for identifying where customers stop progressing in the funnel. Always follow it with a specific stage or moment, then ask why.",
      example: "The biggest drop-off happens at day seven of the free trial, when most inactive users stop engaging.",
      imageSlug: '/images/the-drop-off-happens-at.png',
    },
    {
      phrase: 'WE NEED TO IMPROVE THE EXPERIENCE AT...',
      definition: "A phrase for recommending action on a specific part of the customer journey. Always name the specific stage or touchpoint — not a vague description.",
      example: "The team agreed they need to improve the experience at the post-demo follow-up and the day-seven onboarding check-in.",
      imageSlug: '/images/we-need-to-improve.png',
    },
    {
      phrase: 'EACH TOUCHPOINT SHOULD...',
      definition: "A phrase for setting a clear purpose for every customer interaction. Use it when designing or reviewing a journey map to make sure every touchpoint does something useful.",
      example: "The manager said each touchpoint should either build awareness, move the customer closer to a decision, or strengthen their confidence.",
      imageSlug: '/images/each-touchpoint-should.png',
    },
    {
      phrase: 'THE GOAL AT THIS STAGE IS TO...',
      definition: "A phrase for stating the marketing objective at a specific point in the funnel. The goal is different at each stage — awareness, consideration, conversion, and retention each need a different approach.",
      example: "The goal at the consideration stage is to give customers enough information to choose the product over a competitor.",
      imageSlug: '/images/the-goal-at-this-stage.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I want us to map the full customer journey this week. Start by walking me through what you think the journey looks like right now for our main [[persona:a fictional but realistic profile of a typical customer]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I'll use our primary persona — Alex, a marketing manager at a mid-size company. The customer first encounters the brand when they see one of our LinkedIn ads. They click through to a blog post, read it, and then leave. That is the end of stage one for most people.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So at the [[awareness:the first stage of the journey when the customer discovers your brand]] stage, we are getting people to the blog but not keeping them. What happens to the ones who do stay?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "A small percentage sign up for our newsletter or request a demo. Those are our best [[touchpoint:any moment when a customer comes into contact with your brand]]s — the newsletter gets them into a nurture sequence and the demo request goes straight to sales.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[consideration:the stage where customers compare you to other options]] stage? What content do we have for people who know about us but have not decided yet?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is the gap. We have almost nothing at the consideration stage — no comparison pages, no case studies on the website, no review content. The goal at this stage is to give them enough information to choose us, but we are not doing that.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Where does the main [[drop-off:the point where people stop and do not continue to the next stage]] happen in the [[funnel:the model showing how people move from awareness to purchase]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Two places. First, between awareness and consideration — 90% of blog readers never come back. Second, between free trial and paid subscription — our [[conversion:the moment a customer takes the action you want]] rate from trial to paid is only 18%.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "18% is too low. What is happening during the trial period?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Most trial users activate once on day one and then the drop-off happens at day seven — they never properly set up the product. There is no onboarding call, no check-in email, and no guided setup. They just lose momentum.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what about [[retention:keeping customers after they have bought from you]] — what does that look like once they do convert?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Our 12-month retention is 74% — better than some competitors but below where we want to be. The 26% who leave mostly say the same thing: they felt unsupported after the first month. We need to improve the experience at the 30-day mark specifically.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So we have two priority areas — consideration content and trial onboarding. What do you recommend?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "For consideration: build three case studies and a comparison page. For the trial: add a day-three onboarding call and a day-seven check-in email. Each touchpoint should either move the customer closer to conversion or give them a reason to stay.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good framework. If we fix those two areas, where do you think conversion and retention go?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Based on the data, I think trial-to-paid conversion could reach 28% — from 18% now — and retention could improve to 82% at 12 months. Both are achievable without any increase in acquisition budget.",
    },
  ],

  matchingExercise: [
    { word: 'touchpoint', definition: 'any moment when a customer comes into contact with your brand' },
    { word: 'awareness', definition: 'the first stage of the journey when the customer discovers your brand' },
    { word: 'consideration', definition: 'the stage where customers compare you to other options before deciding' },
    { word: 'conversion', definition: 'the moment a customer takes the action you want — buys, signs up, or subscribes' },
    { word: 'retention', definition: 'keeping customers after they have bought from you' },
    { word: 'funnel', definition: 'a model showing how people move from awareness to purchase, wide at the top and narrow at the bottom' },
    { word: 'persona', definition: 'a fictional but realistic profile of a typical customer' },
    { word: 'drop-off', definition: 'the point in the journey where people stop and do not continue to the next stage' },
  ],

  fillBlankExercise: [
    { before: 'At the', after: 'stage, customers are comparing us to other options — they need case studies and a demo.', answer: 'consideration' },
    { before: 'The biggest', after: 'happens between the free trial and the paid subscription.', answer: 'drop-off' },
    { before: 'Our', after: 'rate from trial to paid is 18% — below the industry average of 25%.', answer: 'conversion' },
    { before: 'The customer first encounters the brand', after: 'they see one of our LinkedIn ads.', answer: 'when' },
    { before: 'We need to improve the experience at the 30-day', after: 'specifically — that is when most customers leave.', answer: 'mark' },
    { before: 'Our 12-month', after: 'rate is 74% — we want to get it to 82%.', answer: 'retention' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the biggest gap in the current customer journey?',
      options: ['There is no awareness content — customers cannot find the brand', 'There is almost nothing at the consideration stage — no case studies or comparison pages', 'The retention rate is too low — most customers leave after one month'],
      correctIndex: 1,
    },
    {
      question: 'What is the current trial-to-paid conversion rate?',
      options: ['25%', '74%', '18%'],
      correctIndex: 2,
    },
    {
      question: 'What does Riley recommend to fix the trial drop-off problem?',
      options: ['Reduce the trial period from 14 days to 7 days', 'Add a day-three onboarding call and a day-seven check-in email', 'Remove the free trial and make customers pay upfront'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say each touchpoint should do?',
      options: ['Generate revenue or reduce cost', 'Build awareness, move the customer closer to a decision, or strengthen their confidence', 'Create social media engagement and increase website traffic'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Think about the last time you bought something online or signed up for a service. How did you first find out about it? What made you decide to buy?',
      'Have you ever started a free trial of something and then not continued to the paid version? Why did you stop?',
      'What do you think makes a customer decide to stay with a company long-term rather than switch to a competitor?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'At the _____ stage, the customer has just discovered your brand and is not ready to buy yet.',
        options: ['conversion', 'awareness', 'retention'],
        correctIndex: 1,
        explanation: "'Awareness' is the first stage of the customer journey — when the customer first discovers the brand. They are not comparing, considering, or buying yet. 'Conversion' is when they take a purchase action. 'Retention' is after they have already bought. The four main funnel stages in order are: awareness → consideration → conversion → retention. At awareness, the only goal is to get noticed and be remembered.",
      },
      {
        sentence: 'The _____ rate tells you what percentage of people took the action you wanted.',
        options: ['retention', 'awareness', 'conversion'],
        correctIndex: 2,
        explanation: "'Conversion rate' is the percentage of people who take a desired action — buying, signing up, or booking a demo. It is one of the most important metrics in marketing because it tells you how effective your funnel is at turning interest into action. 'Retention rate' tells you how many customers stayed after buying. 'Awareness rate' is not a standard term — awareness is usually measured by reach or impressions, not a rate.",
      },
      {
        sentence: 'Each _____ is a chance to make a good impression — or lose the customer.',
        options: ['funnel', 'touchpoint', 'persona'],
        correctIndex: 1,
        explanation: "A 'touchpoint' is any moment of contact between the customer and the brand. Every touchpoint — an ad, a website page, an email, a sales call — is an opportunity to either build the relationship or damage it. A 'funnel' is the overall model, not a single contact moment. A 'persona' is a customer profile, not a moment of contact.",
      },
      {
        sentence: 'The biggest _____ in our funnel happens between the trial and the paid subscription.',
        options: ['drop-off', 'touchpoint', 'persona'],
        correctIndex: 0,
        explanation: "'Drop-off' is the term for the point where people stop progressing in the funnel. It describes the loss of customers at a specific stage. Finding and fixing drop-offs is one of the main purposes of customer journey mapping. 'Touchpoint' is a moment of contact — it does not describe where people leave. 'Persona' is a customer profile.",
      },
      {
        sentence: 'A _____ is a fictional profile of a typical customer, including their goals and challenges.',
        options: ['stakeholder', 'persona', 'benchmark'],
        correctIndex: 1,
        explanation: "A 'persona' is a fictional but realistic customer profile used in marketing to represent a specific type of customer. It typically includes a name, job title, goals, challenges, and decision-making behaviour. Personas help teams create content and campaigns that speak directly to a specific audience. A 'stakeholder' is someone with an interest in the business outcome. A 'benchmark' is a performance standard.",
      },
      {
        sentence: "_____ is keeping customers after they have bought — making sure they don't leave for a competitor.",
        options: ['Conversion', 'Consideration', 'Retention'],
        correctIndex: 2,
        explanation: "'Retention' means keeping existing customers — reducing churn and making sure customers stay, continue using the product, and do not switch to a competitor. It is the final stage of the customer journey and often the most profitable — retained customers buy again, refer others, and cost less to serve than new customers. 'Conversion' is when a customer makes their first purchase. 'Consideration' is when they are comparing options.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what Marcus says. Choose the best response.',
      items: [
        {
          customerLine: "Where is the biggest gap in our customer journey right now? I want one specific answer.",
          options: [
            "There are gaps at several stages — awareness, consideration, and retention all have issues that need addressing before the next campaign.",
            "The biggest gap is at the consideration stage — we have almost no content to help people who know about us decide to choose us. No case studies, no comparison page, no demo content.",
            "The funnel is generally working but could be improved at various touchpoints throughout the customer journey from awareness through to retention.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. It gives one specific, clear answer — which is what Marcus asked for. It names the stage (consideration), explains the problem (no decision-support content), and lists the missing pieces (case studies, comparison page, demo content). Option A identifies multiple gaps, which is accurate but does not answer the question — Marcus asked for the biggest one. Option C is vague — 'generally working' and 'various touchpoints' do not give the team anything to act on.",
        },
        {
          customerLine: "Our trial-to-paid conversion is 18%. The industry average is 25%. What is causing the gap?",
          options: [
            "18% is actually reasonable for our sector — some companies have lower rates and the industry average varies depending on the source.",
            "The drop-off happens at day seven of the trial. Most users activate on day one but never properly set up the product. There is no guided onboarding, no check-in email, and no support call at that critical point.",
            "Conversion is a complex issue that depends on multiple factors — the product, the pricing, the competition, and the quality of the leads coming into the trial.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. It identifies the specific drop-off point (day seven), explains what happens (no proper setup), and names the missing elements (guided onboarding, check-in email, support call). This is a diagnostic answer — it explains the cause, not just the symptom. Option A is defensive — it tries to reframe the problem as acceptable rather than diagnosing it. Option C is true but unhelpful — it lists general factors without identifying the specific cause in this case.",
        },
        {
          customerLine: "What should we do first — fix the consideration stage or fix trial onboarding?",
          options: [
            "Both need fixing at the same time — they are equally important and we should address both in parallel.",
            "Trial onboarding first — it is a faster fix and has a direct impact on revenue. If we improve conversion from 18% to 25%, that is a significant number of additional paying customers from our existing traffic.",
            "Consideration stage first — without better content there, fewer people will reach the trial in the first place.",
          ],
          correctIndex: 1,
          explanation: "Option B is the strongest answer because it prioritises based on impact and speed — both important criteria for stakeholders. It also gives a specific reason: revenue impact from existing traffic. Option A says both are equally important without justification — this is not useful when a manager asks which to do first. Option C makes a valid argument but is weaker in this context because the company already has 12,000 awareness-stage visitors per month — improving consideration would help, but the faster revenue win is fixing the trial drop-off.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the customer journey discussion. Three lines have a mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Walk me through the customer journey from first contact to conversion." },
        { speaker: 'Riley', text: "The customer first encounters the brand when they see a LinkedIn ad. They click through to a blog post at the awareness stage." },
        { speaker: 'Marcus', text: "And at the consideration stage?" },
        { speaker: 'Riley', text: "At the consideration stage, customers is comparing us to competitors — they need case studies and a comparison page." },
        { speaker: 'Marcus', text: "Where does the drop-off happen?" },
        { speaker: 'Riley', text: "The biggest drop-off happens at day seven of the trial — 60% of active users in day three have stopped by day seven." },
        { speaker: 'Marcus', text: "What about retention after conversion?" },
        { speaker: 'Riley', text: "Our retention is 74%. The 26% who leave mostly feel unsupported. We need to improve the experience on the 30-day mark." },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'customers is comparing',
          correction: 'customers are comparing',
          explanation: "'Customers' is a plural noun and requires the plural verb 'are', not the singular 'is'. This is a subject-verb agreement error. 'The customer is comparing' (singular) is correct. 'Customers are comparing' (plural) is correct. Mixing them ('customers is') is a common error for speakers whose first language treats collective nouns differently. In English, always match the verb to the subject: singular noun → singular verb, plural noun → plural verb.",
        },
        {
          lineIndex: 5,
          incorrectText: 'active users in day three',
          correction: 'active users on day three',
          explanation: "The correct preposition for specific days or dates in a sequence is 'on' — 'on day three', 'on day seven', 'on Monday'. 'In day three' is not standard English. Compare: 'on the third day', 'on day three', 'on day seven'. The preposition 'in' is used for periods of time ('in the morning', 'in three weeks', 'in Q3') but not for specific numbered days in a sequence.",
        },
        {
          lineIndex: 7,
          incorrectText: 'improve the experience on the 30-day mark',
          correction: 'improve the experience at the 30-day mark',
          explanation: "The correct preposition is 'at a point' when referring to a specific moment or milestone — 'at the 30-day mark', 'at the conversion stage', 'at the point of purchase'. 'On' is used for surfaces or specific days ('on Monday', 'on the website'). 'At' is used for points in time, stages, or positions: 'at the top of the funnel', 'at the awareness stage', 'at the 30-day mark'. This is a very common preposition error in customer journey discussions.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Describe the full customer journey for your main persona in 60 seconds.",
          salespersonStart: "Alex, our primary persona, first encounters the brand through a LinkedIn ad.",
          suggestedCompletion: "They click through to a blog post at the awareness stage — curious but not ready to engage further. If they sign up for our newsletter or request a demo, they move into the consideration stage where they compare us to competitors. The goal at this stage is to give them case studies and demo content to support the decision. If they convert to a trial, the critical moment is day seven — that is our biggest drop-off point. With proper onboarding, they become a paying customer and our goal shifts to retention — keeping them engaged and supported past the 30-day mark.",
        },
        {
          customerLine: "Tell me the three most important improvements we can make to the journey right now.",
          salespersonStart: "We need to improve the experience at three specific points —",
          suggestedCompletion: "first, the consideration stage: we need case studies and a comparison page to help people choose us over competitors. Second, the trial onboarding: a day-three call and a day-seven check-in email would address our biggest drop-off. Third, the 30-day retention point: a structured check-in and success review would reduce our 26% churn. Each touchpoint should either move the customer closer to a decision or give them a stronger reason to stay.",
        },
        {
          customerLine: "Why is our conversion rate so much lower than the industry average?",
          salespersonStart: "The data points to one specific cause — the drop-off happens at day seven of the trial.",
          suggestedCompletion: "Most users activate on day one but never properly set up the product. There is no guided onboarding, no check-in at the critical moment, and no support available unless they reach out themselves. The goal at the trial stage should be to remove every obstacle between the customer and their first success moment with the product. Right now we are leaving them to figure it out alone — and 82% of them give up.",
        },
      ],
    },
  },
};
