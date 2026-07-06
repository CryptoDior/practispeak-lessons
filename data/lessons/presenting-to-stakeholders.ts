import { Lesson } from '@/types/lesson';

export const presentingToStakeholders: Lesson = {
  slug: 'presenting-to-stakeholders',
  title: 'Presenting to Stakeholders',
  subtitle: 'How to present marketing data and ideas clearly to senior audiences',
  level: 'B1-B2',
  description: "Presenting to stakeholders is one of the most important skills in marketing. Stakeholders — managers, directors, board members, or investors — are often busy people who want the key message quickly. They do not want a full tour of your data. They want to know what happened, what it means, and what you recommend. This lesson teaches you the language and structure you need to deliver a clear, confident five-minute stakeholder presentation in English.",
  heroImage: '/images/presenting-to-stakeholders-hero.png',

  vocabulary: [
    {
      word: 'STAKEHOLDER',
      partOfSpeech: 'noun',
      definition: 'A person who has an interest in the outcome of a project or decision — because it affects them, their team, or their budget. In marketing, stakeholders include your manager, the sales team, the finance director, and sometimes investors or board members.',
      example: "Marcus briefed Riley before her presentation: Remember, you have four stakeholders in the room — the marketing director, the sales director, the finance lead, and the CEO. Each of them cares about something slightly different. The CEO wants the big picture. Finance wants the cost and return. Sales wants to know how many leads it generated.",
      imageSlug: '/images/presenting-to-stakeholders-stakeholder.png',
    },
    {
      word: 'BOARD',
      partOfSpeech: 'noun',
      definition: 'The group of senior people who make the most important decisions in an organisation — usually the directors and sometimes external members. Presenting to the board means presenting to the most senior audience in the company.',
      example: "Riley asked: Who exactly is in this meeting? Marcus replied: It is a board-level review — the managing director, the commercial director, and two non-executive directors. Keep it short, keep it clear, and make sure you can answer questions on the numbers. The board will not want slides full of detail.",
      imageSlug: '/images/board.png',
    },
    {
      word: 'INVESTOR',
      partOfSpeech: 'noun',
      definition: 'A person or organisation that puts money into a business in exchange for a share of future profits or growth. Investors care about return on investment, growth potential, and risk. When presenting to investors, focus on results and future opportunity.',
      example: "Marcus said: Next quarter we have an investor presentation. Riley replied: What do investors want to see? Marcus explained: They want to know three things — how much money you spent, what return it generated, and where you see the biggest growth opportunity. Keep it simple and evidence-based.",
      imageSlug: '/images/investor.png',
    },
    {
      word: 'OBJECTIVE',
      partOfSpeech: 'noun',
      definition: 'The specific goal you were trying to achieve. Always state the objective at the start of a stakeholder presentation so the audience knows what success looked like before you tell them the results.',
      example: "Riley opened her presentation: The objective of this campaign was to generate 500 new leads at a cost of no more than £20 per lead. Marcus nodded: Good start — always tell them what you were trying to do before you tell them what happened. Otherwise the results have no context.",
      imageSlug: '/images/presenting-to-stakeholders-objective.png',
    },
    {
      word: 'ROI',
      partOfSpeech: 'abbreviation',
      definition: 'Return on Investment — how much revenue or value you got back compared to how much you spent. ROI is one of the most important numbers for any stakeholder. It is usually shown as a percentage or a ratio, for example: £3 return for every £1 spent.',
      example: "The finance director asked: What was the ROI on this campaign? Riley answered: We spent £15,000 and generated £52,000 in pipeline value from the leads — that gives us an ROI of approximately 3.5 to 1. The finance director replied: That is a strong return. Good.",
      imageSlug: '/images/presenting-to-stakeholders-roi.png',
    },
    {
      word: 'SLIDE',
      partOfSpeech: 'noun',
      definition: 'A single page of a presentation. Each slide should have one clear point. A common mistake is putting too much information on one slide — if your audience is reading, they are not listening to you.',
      example: "Marcus reviewed Riley's presentation: You have 14 slides for a five-minute presentation. That is too many. Riley asked: How many should I have? Marcus replied: Maximum six. One for the objective, one for the key result, one for the main insight, one for the recommendation, one for next steps, and one summary. One clear point per slide.",
      imageSlug: '/images/presenting-to-stakeholders-slide.png',
    },
    {
      word: 'HEADLINE',
      partOfSpeech: 'noun',
      definition: 'The main message of a slide, written as a short, clear sentence at the top. A good headline tells the audience what the slide says, so even if they only read the headline, they understand the key point. Headlines are not titles — they are conclusions.',
      example: "Marcus looked at Riley's first slide: Your headline just says 'Campaign Results'. That tells me nothing. What is the point of this slide? Riley replied: That the campaign beat its lead target by 30%. Marcus said: Then that is your headline. 'Campaign exceeded lead target by 30%' — now I know the message before you even speak.",
      imageSlug: '/images/presenting-to-stakeholders-headline.png',
    },
    {
      word: 'Q&A',
      partOfSpeech: 'abbreviation',
      definition: "Questions and Answers — the section at the end of a presentation when the audience can ask questions. The Q&A is often where stakeholders reveal what they really care about. Always prepare for the questions you don't want to be asked.",
      example: "Marcus advised Riley: The Q&A is where presentations are won or lost. If you hesitate on a basic question about the budget or the results, you lose credibility immediately. Riley replied: I've prepared answers for the six toughest questions I think they'll ask — including what went wrong and what it would cost to scale it up.",
      imageSlug: '/images/qanda.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "TODAY I'M GOING TO WALK YOU THROUGH...",
      definition: "The standard opening phrase for a stakeholder presentation. 'Walk you through' means to guide the audience step by step. It is confident, clear, and professional. Always follow it with a brief overview of what you will cover.",
      example: "Riley opened her presentation: Today I'm going to walk you through the results of our Q3 email campaign — what we set out to do, what we achieved, and what we recommend next. Marcus said afterwards: Strong opening — it tells the audience exactly what they are about to hear and puts you in control from the first sentence.",
      imageSlug: '/images/walk-you-through.png',
    },
    {
      phrase: 'THE BOTTOM LINE IS...',
      definition: "A phrase used to cut to the key point — the most important fact or conclusion. 'The bottom line' comes from accounting (the final number on a profit and loss statement), but in presentations it means: here is what matters most. Use it when you want to be direct.",
      example: "The managing director interrupted: Can you just tell me — was it worth the money? Riley replied: The bottom line is yes — we spent £15,000, generated £52,000 in pipeline value, and signed three new contracts directly linked to the campaign. Marcus noted later: That was a perfect use of the phrase — direct, confident, and evidence-based.",
      imageSlug: '/images/the-bottom-line-is.png',
    },
    {
      phrase: "I'D LIKE TO DRAW YOUR ATTENTION TO...",
      definition: "A polite, professional phrase for directing the audience to a specific number, chart, or point on a slide. It is a way of saying 'look at this' without being too abrupt. Use it to highlight the most important data point on a slide.",
      example: "Riley presented the results slide: I'd like to draw your attention to the cost per lead figure in the bottom right — £14.80 against a target of £20. That is a 26% improvement on our target and our best result in three campaigns. Marcus said: Good — you highlighted the strongest number instead of making them hunt for it.",
      imageSlug: '/images/draw-your-attention-to.png',
    },
    {
      phrase: 'IN TERMS OF ROI...',
      definition: "A phrase used to introduce the return on investment figure or discussion. It signals that you are about to give the financial summary of the campaign — which is what most stakeholders care about most. Always be ready to explain how you calculated your ROI.",
      example: "Riley said: In terms of ROI, we invested £15,000 and generated £52,000 in attributable pipeline — a 3.5 to 1 return. The finance director asked: How did you attribute the pipeline? Riley replied: We tracked every lead from first contact to opportunity in the CRM, so we can trace each pound of pipeline back to the campaign.",
      imageSlug: '/images/in-terms-of-roi.png',
    },
    {
      phrase: 'ARE THERE ANY QUESTIONS?',
      definition: "The standard phrase to open the Q&A section. Say it with confidence and pause long enough for the audience to respond. Do not rush through it. If no one speaks immediately, that silence is normal — give it five seconds before continuing.",
      example: "Riley finished her presentation: That covers our recommendation. Are there any questions? There was a pause. Marcus noted: She held the silence well — she did not rush to fill it. After five seconds, the sales director raised his hand. Riley handled every question calmly and with specific data.",
      imageSlug: '/images/are-there-any-questions.png',
    },
    {
      phrase: 'THE OBJECTIVE OF THIS CAMPAIGN WAS TO...',
      definition: "The standard opening for explaining what you were trying to achieve. Always state the objective before the results — it gives the audience the context they need to judge whether the campaign was successful.",
      example: "Riley began her results section: The objective of this campaign was to generate 500 new leads at a cost of no more than £20 per lead. We achieved 651 leads at £14.80 per lead — 30% above target on volume and 26% better than target on cost. The room was immediately engaged.",
      imageSlug: '/images/the-objective-of-this-campaign.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, you have five minutes to present the campaign results to the board next Thursday. Let's do a practice run. Imagine I am the managing director. Go.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Today I'm going to walk you through the results of our Q3 email campaign — what we set out to do, what we achieved, and what we are recommending next. I'll keep it to five minutes and leave time for questions.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good start. Continue.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The [[objective:the specific goal you were trying to achieve]] of this campaign was to generate 500 new leads at a cost of no more than £20 per lead. We had a total budget of £15,000 and ran the campaign over eight weeks.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good — you gave the context before the result. Now tell me what happened.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We generated 651 leads — 30% above target. Cost per lead came in at £14.80, which is 26% better than our £20 target. I'd like to draw your attention to the [[ROI:return on investment — what you got back compared to what you spent]] figure: in terms of ROI, we invested £15,000 and generated £52,000 in attributable pipeline — a 3.5 to 1 return.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Strong numbers. But as a [[board:the senior group who make the most important decisions in an organisation]] member, my first question is: what went wrong? Nothing is perfect.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Fair point. Conversion from lead to meeting was lower than we hoped — 12% against a target of 20%. The [[headline:the main message of a slide, written as a short clear sentence]] for that slide is: lead volume strong, but conversion to meeting needs improvement. We know why and we have a fix.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good — you did not hide it. That builds trust. What is the recommendation?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We recommend a dedicated follow-up sequence for new leads — three emails over five days, not the generic newsletter. We tested this on 50 leads in week eight and conversion to meeting jumped to 19%. The bottom line is: if we apply this to all leads, we can close the conversion gap with no additional budget.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is a strong recommendation — evidence-based and cost-neutral. What do you need from the [[stakeholder:a person who has an interest in the outcome]]s in this room to move forward?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I need sign-off from sales to update the follow-up sequence, and approval from finance to maintain the same budget for Q4. Both are on the next steps [[slide:a single page of a presentation]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Now close it out.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "In summary: the campaign exceeded its lead and cost targets, generated a 3.5 to 1 ROI, and identified a clear conversion improvement we can implement immediately. Are there any questions?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That was a strong five minutes. You stated the objective, gave the results with context, addressed the weakness before they asked, and made a clear recommendation. That is exactly what a board presentation should look like.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Thank you. The hardest part was the [[Q&A:questions and answers at the end of a presentation]] preparation — I wrote out answers to the six questions I most feared. Having those ready made me feel much more confident.",
    },
  ],

  matchingExercise: [
    { word: 'stakeholder', definition: 'a person who has an interest in the outcome of a project or decision' },
    { word: 'board', definition: 'the senior group who make the most important decisions in an organisation' },
    { word: 'investor', definition: 'a person or organisation that puts money into a business expecting a return' },
    { word: 'objective', definition: 'the specific goal you were trying to achieve' },
    { word: 'ROI', definition: 'return on investment — what you got back compared to what you spent' },
    { word: 'slide', definition: 'a single page of a presentation, each with one clear point' },
    { word: 'headline', definition: 'the main message of a slide written as a short, clear sentence' },
    { word: 'Q&A', definition: 'the section at the end of a presentation when the audience can ask questions' },
  ],

  fillBlankExercise: [
    { before: "Today I'm going to walk you", after: 'the results of our Q3 email campaign.', answer: 'through' },
    { before: 'The', after: 'of this campaign was to generate 500 leads at under £20 per lead.', answer: 'objective' },
    { before: 'In terms of', answer: 'ROI', after: ', we invested £15,000 and generated £52,000 in pipeline value.' },
    { before: "The bottom", after: 'is that the campaign beat its lead target by 30% with no budget increase.', answer: 'line' },
    { before: "I'd like to draw your attention", after: 'the cost per lead figure — £14.80 against a target of £20.', answer: 'to' },
    { before: 'Are there any', after: '?', answer: 'questions' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What was the objective of the Q3 campaign?',
      options: ['To spend £15,000 on email marketing', 'To generate 500 leads at no more than £20 per lead', 'To improve open rates by 30%'],
      correctIndex: 1,
    },
    {
      question: 'What was the ROI of the campaign?',
      options: ['£14.80 per lead', '3.5 to 1 — £52,000 pipeline from £15,000 investment', '30% above the lead target'],
      correctIndex: 1,
    },
    {
      question: 'What was the main weakness Riley identified?',
      options: ['The campaign was over budget', 'Conversion from lead to meeting was 12% against a target of 20%', 'Open rates fell below benchmark in week three'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say makes a strong board presentation?',
      options: ['Lots of detail and data on every slide', 'Stating the objective, giving results with context, addressing weaknesses, and making a clear recommendation', 'Having more than ten slides and covering all the campaign data'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Have you ever presented to a senior audience — a manager, a director, or a large group? How did you prepare? How did it go?',
      'What makes a presentation easy to follow? Think of one presentation you have seen that was clear and one that was confusing. What was the difference?',
      'What questions do you find most difficult to answer during a Q&A? Why?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: "Today I'm going to walk you _____ the results of our Q3 campaign.",
        options: ['through', 'over', 'across'],
        correctIndex: 0,
        explanation: "'Walk you through' is the fixed phrasal verb for guiding an audience step by step through a presentation or document. It is one of the most common phrases in business English presentations. 'Walk over' and 'walk across' are not used in this way. Other similar phrases: 'take you through', 'run you through'. These all mean to guide someone through something in an organised, step-by-step way.",
      },
      {
        sentence: 'The _____ of this campaign was to generate 500 leads at under £20 per lead.',
        options: ['target', 'objective', 'purpose'],
        correctIndex: 1,
        explanation: "'Objective' is the standard business word for a specific, measurable goal that a project or campaign is designed to achieve. 'Target' is also correct in this context (and very commonly used), but 'objective' is slightly more formal and is the standard term in marketing planning. 'Purpose' suggests a broader reason or mission ('the purpose of marketing is to create demand') rather than a specific measurable goal. In stakeholder presentations, 'objective' signals professionalism.",
      },
      {
        sentence: "I'd like to _____ your attention to the cost per lead figure on this slide.",
        options: ['draw', 'bring', 'call'],
        correctIndex: 0,
        explanation: "'Draw your attention to' is the standard fixed phrase for directing an audience to a specific item on a slide or document. It is polite and professional. 'Bring your attention to' is also used but less common in formal presentations. 'Call your attention to' is used ('may I call your attention to...') but sounds more old-fashioned. In modern business presentations, 'I'd like to draw your attention to' is the most natural and widely used phrase.",
      },
      {
        sentence: 'In terms _____ ROI, we invested £15,000 and generated £52,000 in pipeline.',
        options: ['for', 'of', 'about'],
        correctIndex: 1,
        explanation: "'In terms of' is the fixed phrase — always followed by 'of'. It is used to introduce a specific aspect or measure you want to discuss: 'in terms of cost', 'in terms of reach', 'in terms of ROI'. This phrase signals that you are narrowing your focus to one particular dimension. 'In terms for' and 'in terms about' are not correct. This is one of the most common phrases in business presentations and reports.",
      },
      {
        sentence: 'The bottom _____ is that the campaign generated a 3.5 to 1 return on investment.',
        options: ['point', 'fact', 'line'],
        correctIndex: 2,
        explanation: "'The bottom line' is a fixed phrase meaning the most important point or the final conclusion — especially the financial outcome. It comes from accounting, where the 'bottom line' is the final profit or loss figure. In presentations, 'the bottom line is' signals that you are cutting through the detail and giving the key message directly. 'The bottom point' and 'the bottom fact' are not phrases — only 'the bottom line' is correct.",
      },
      {
        sentence: 'A good _____ tells the audience what the slide says before you speak.',
        options: ['title', 'headline', 'label'],
        correctIndex: 1,
        explanation: "A 'headline' is a conclusion written as a short sentence at the top of a slide — it tells the audience the key message of that slide. A 'title' is just a name or topic ('Campaign Results') — it does not say anything. A 'label' describes a specific item on a chart or diagram. The distinction between a title and a headline is important: 'Campaign Results' is a title; 'Campaign exceeded lead target by 30%' is a headline. Good presentations use headlines, not titles.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the stakeholder says during the presentation. Choose the best response.',
      items: [
        {
          customerLine: "I only have three minutes. Can you just give me the key message?",
          options: [
            "Sure — the campaign covered eight weeks, used a budget of £15,000, targeted existing contacts and lookalike audiences, and ran across email and paid social channels.",
            "The bottom line is: we beat our lead target by 30%, achieved a 3.5 to 1 ROI, and identified a conversion improvement we can implement in Q4 with no additional budget.",
            "There is a lot to cover — results, insights, and recommendations — but I'll try to summarise it as quickly as I can.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. When a stakeholder asks for the key message, give them exactly that — one clear, specific sentence that covers result, return, and next step. Option A gives background information about the campaign, not the key message — a busy stakeholder does not need to know the channels and audience segments in the first sentence. Option C is a weak response — saying 'I'll try to summarise quickly' signals that you have not prepared a summary, which undermines confidence.",
        },
        {
          customerLine: "What went wrong? I want to hear the honest version, not just the good news.",
          options: [
            "Overall the campaign was very positive — the results speak for themselves and we are proud of what the team achieved.",
            "Nothing major went wrong — there were some small issues but nothing worth discussing in this meeting.",
            "Conversion from lead to meeting was lower than we hoped — 12% against a 20% target. We know the cause — the follow-up sequence was too slow — and we have already tested a fix that brings conversion to 19%.",
          ],
          correctIndex: 2,
          explanation: "Option C is correct. When a stakeholder asks for the honest version, give it — and then immediately show you have a solution. This builds far more trust than avoiding the question. Option A deflects the question entirely — it does not answer what went wrong, which will frustrate any experienced stakeholder. Option B dismisses the issue as 'nothing major' — this sounds defensive and evasive. Stakeholders respect presenters who acknowledge problems and come prepared with a fix.",
        },
        {
          customerLine: "How did you calculate the ROI? I want to understand the methodology.",
          options: [
            "We tracked every lead from the campaign through the CRM from first contact to closed deal. We then calculated the pipeline value attributable to campaign leads and compared it to the total campaign spend.",
            "ROI is a standard calculation — revenue divided by cost. We used the same method as last quarter.",
            "We used a formula to calculate the return based on the leads that converted. The number came out at 3.5 to 1.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct. It explains the methodology clearly and specifically — the audience can follow exactly how the number was calculated. This is what 'how did you calculate it' means: show your working. Option B is dismissive — 'standard calculation' and 'same as last quarter' do not actually explain anything. Option C is vague — 'a formula' and 'leads that converted' do not tell the audience how the pipeline value was attributed to the campaign specifically.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the presentation. Three lines have a mistake. Can you find them?',
      dialogue: [
        { speaker: 'Riley', text: "Today I'm going to walk you over the results of our Q3 campaign." },
        { speaker: 'Riley', text: "The objective of this campaign was to generate 500 new leads at a cost of no more than £20 per lead." },
        { speaker: 'Riley', text: "I'd like to draw your attention to the ROI figure — in terms for ROI, we invested £15,000 and generated £52,000 in pipeline." },
        { speaker: 'Stakeholder', text: "What went wrong? I want the honest version." },
        { speaker: 'Riley', text: "Conversion from lead to meeting was lower than we hoped. The bottom point is we have a fix ready to test in Q4." },
        { speaker: 'Riley', text: "That covers our recommendation. Are there any question?" },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'walk you over',
          correction: 'walk you through',
          explanation: "'Walk you through' is the fixed phrasal verb — always 'through', never 'over'. 'Walk over' has a completely different meaning (to physically walk across a space, or informally to defeat someone easily). 'Walk through' means to guide someone step by step. Other verbs that work: 'take you through', 'run you through'. But 'walk over', 'walk across', and 'walk around' do not work in this presentation context.",
        },
        {
          lineIndex: 2,
          incorrectText: 'in terms for ROI',
          correction: 'in terms of ROI',
          explanation: "'In terms of' is a fixed phrase — always 'of', never 'for'. This is one of the most common preposition errors in business English. 'In terms of cost', 'in terms of performance', 'in terms of ROI' — always 'of'. The phrase means 'when we look at this specific aspect'. 'In terms for' has no meaning in English.",
        },
        {
          lineIndex: 4,
          incorrectText: 'The bottom point',
          correction: 'The bottom line',
          explanation: "'The bottom line' is a fixed phrase. It cannot be changed to 'the bottom point', 'the bottom message', or anything else. The phrase comes from accounting — the literal bottom line of a profit and loss statement. In business English, it means the most important fact or the final conclusion. Only 'the bottom line' is correct.",
        },
        {
          lineIndex: 5,
          incorrectText: 'Are there any question?',
          correction: 'Are there any questions?',
          explanation: "'Questions' must be plural after 'any' in this context. 'Any' followed by a countable noun uses the plural form: 'any questions', 'any comments', 'any concerns'. The singular 'any question' is possible in informal speech (e.g., 'do you have any question about this?') but even there, the plural is more natural. In a presentation context, always say 'Are there any questions?' — it is the standard closing phrase.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The presenter starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "You have two minutes. Give me the whole presentation — objective, results, and recommendation.",
          salespersonStart: "The objective of this campaign was to generate 500 leads at under £20 each.",
          suggestedCompletion: "We generated 651 leads at £14.80 per lead — 30% above target on volume and 26% better on cost. In terms of ROI, we invested £15,000 and generated £52,000 in pipeline — a 3.5 to 1 return. The one gap was conversion from lead to meeting at 12% against a 20% target. Based on our findings, we recommend a dedicated follow-up sequence for all new leads, which we tested in week eight and which brought conversion to 19%.",
        },
        {
          customerLine: "I see your slide says 'Campaign Results'. What is the actual message of this slide?",
          salespersonStart: "You are right — that is a title, not a headline. The message of this slide is:",
          suggestedCompletion: "'Campaign exceeded lead target by 30% at 26% below target cost.' That is what the slide should say at the top — so you know the key point before I even speak. I will update it before the board presentation. A headline should tell you the conclusion, not just the topic.",
        },
        {
          customerLine: "The finance director is going to ask about ROI. Walk me through exactly how you calculated it.",
          salespersonStart: "We tracked every lead generated by the campaign through the CRM —",
          suggestedCompletion: "from first contact through to either a closed deal or an active opportunity. For leads that became opportunities, we took the pipeline value logged in the CRM. Total attributable pipeline was £52,000. We divided that by the campaign spend of £15,000, which gives a 3.5 to 1 return. I can show the CRM report if the finance director wants to see the underlying data.",
        },
      ],
    },
  },
};
