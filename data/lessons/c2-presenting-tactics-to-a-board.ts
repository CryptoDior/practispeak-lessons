import { Lesson } from '@/types/lesson';

export const c2PresentingTacticsToABoard: Lesson = {
  slug: 'c2-presenting-tactics-to-a-board',
  title: 'Presenting Tactics to a Board',
  subtitle: 'Unit 2 — Career English',
  level: 'C1-C2',
  description: 'Presenting football analysis or tactical proposals to board-level stakeholders — sporting directors, investors, or ownership groups — requires a specific kind of English: clear, confident, and calibrated for people who think in outcomes and decisions, not data details.',
  heroImage: '/images/presenting-board.png',

  warmUp: {
    questions: [
      'Have you ever presented a complex idea to someone who did not share your technical background? What made it difficult?',
      'What do you think board-level stakeholders in a football club most want to hear from an analyst or coach? What are their priorities?',
      'How do you adjust your language when explaining something to a non-expert compared to an expert?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Signposting in formal presentations — controlling what the audience attends to',
    description: 'A high-stakes board presentation needs clear signposting so that non-technical stakeholders always know where they are in the argument. Key structures: Opening: "What I want to argue today is..." / "I have three things to cover..." Moving on: "With that established, I want to turn to..." / "The second point is..." Emphasising: "This is the critical number..." / "The key takeaway here is..." Anticipating questions: "I\'m aware you may be wondering about..." / "The obvious question here is..." Concluding: "If we accept this analysis, the decision is straightforward..." Signposting is not weakness — it is the mark of a presenter who understands their audience.',
    positiveExamples: [
      { sentence: 'I have three things to cover today. First, where we are. Second, what the data tells us. Third, what I recommend we do.', note: 'Clear opening signpost — the board knows exactly what they are about to hear' },
      { sentence: 'This is the critical number — not the possession percentage, but the xG differential across the last eight matches.', note: '"This is the critical number" redirects attention to what actually matters' },
      { sentence: 'I\'m aware you may be wondering about the cost implications — and I want to address that directly before we go further.', note: 'Anticipating and pre-empting the question the board is likely thinking' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'STAKEHOLDER',
      partOfSpeech: 'noun',
      definition: 'A person or group with a significant interest in the outcome of a decision — in a football club, typically ownership, the board, and senior management.',
      example: '"The key stakeholders for this presentation are the Sporting Director and two members of the ownership group — they need headline findings, not technical detail."',
      imageSlug: '/images/c2-presenting-tactics-to-a-board-stakeholder.png',
    },
    {
      word: 'PROPOSITION',
      partOfSpeech: 'noun',
      definition: 'A clear statement of what you are proposing — the recommendation or course of action you are asking the board to approve.',
      example: '"My proposition is straightforward: invest in three specific positional areas this window, and we project a top-six finish is achievable on current xG trends."',
      imageSlug: '/images/c2-presenting-tactics-to-a-board-proposition.png',
    },
    {
      word: 'HEADLINE',
      partOfSpeech: 'noun',
      definition: 'The single most important finding — the number, conclusion, or recommendation that the board will remember.',
      example: '"Lead with the headline: our underlying performance metrics are top-four quality, but we are finishing ninth. That is the problem we are here to solve."',
      imageSlug: '/images/headline-presentation.png',
    },
    {
      word: 'RATIONALE',
      partOfSpeech: 'noun',
      definition: 'The reasoning behind a recommendation — why you are proposing what you are proposing.',
      example: '"The rationale for the investment is clear: without addressing the defensive midfielder position, the underlying vulnerability we\'ve identified will continue to cost us points."',
      imageSlug: '/images/c2-presenting-tactics-to-a-board-rationale.png',
    },
    {
      word: 'OBJECTION',
      partOfSpeech: 'noun',
      definition: 'A concern or challenge raised by the audience — something they disagree with or need more evidence for.',
      example: '"The most likely objection is the cost — and I want to pre-empt that by presenting the revenue model alongside the expenditure proposal."',
      imageSlug: '/images/objection-presentation.png',
    },
    {
      word: 'VISUAL',
      partOfSpeech: 'noun',
      definition: 'Any graphic or chart used to support a point — used carefully to clarify, not to overwhelm.',
      example: '"One strong visual is worth ten slides of data. The heat map tells the defensive story more clearly than any table of numbers."',
      imageSlug: '/images/visual-presentation.png',
    },
    {
      word: 'ROI',
      partOfSpeech: 'abbreviation',
      definition: 'Return on Investment — the financial or performance benefit relative to the cost. Boards think in ROI terms.',
      example: '"Frame your proposal in ROI terms: \'A £15 million investment in this position projects to increase points return by 8-12, which translates to approximately £40 million in additional prize money and commercial value.\'  "',
      imageSlug: '/images/c2-presenting-tactics-to-a-board-roi.png',
    },
    {
      word: 'DECISION-READY',
      partOfSpeech: 'adjective',
      definition: 'Presented in a format that allows a decision to be made immediately — everything the board needs to act, nothing they don\'t.',
      example: '"A board presentation should be decision-ready — the finding, the recommendation, the cost, and the projected outcome. Not a research presentation. A decision brief."',
      imageSlug: '/images/decision-ready.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WALK THROUGH',
      definition: 'To take someone through something step by step — to guide them through data, analysis, or a proposal methodically.',
      example: '"Let me walk you through the three key findings — and I\'ll come back to the methodology at the end if there are questions."',
      imageSlug: '/images/c2-presenting-tactics-to-a-board-walk-through.png',
    },
    {
      phrase: 'WIN OVER',
      definition: 'To persuade someone who was initially sceptical or neutral — to convert them to your position.',
      example: '"The Sporting Director was unconvinced at the start — but the xG data won him over. The underlying numbers were too clear to dismiss."',
      imageSlug: '/images/win-over.png',
    },
    {
      phrase: 'BRING ON BOARD',
      definition: 'To get someone to agree with or support a proposal — to convert a stakeholder from neutral or resistant to supportive.',
      example: '"The ownership group needed to be brought on board before the transfer could be approved — they had concerns about the fee that we needed to address directly."',
      imageSlug: '/images/bring-on-board.png',
    },
    {
      phrase: 'PUT FORWARD',
      definition: 'To formally present a proposal or recommendation for consideration.',
      example: '"I want to put forward three specific recommendations — and I\'ll explain the rationale and the projected ROI for each one."',
      imageSlug: '/images/put-forward.png',
    },
    {
      phrase: 'FIELD QUESTIONS',
      definition: 'To receive and respond to questions from the audience — to handle them professionally and concisely.',
      example: '"I\'ll leave ten minutes at the end to field questions — and I\'d welcome the challenge, because the data is strong enough to hold up under scrutiny."',
      imageSlug: '/images/field-questions.png',
    },
    {
      phrase: 'NAIL DOWN',
      definition: 'To establish something firmly and precisely — to resolve uncertainty in a presentation or negotiation.',
      example: '"Before we close, I want to nail down the three decision points: budget approval, timeline, and which specific positions we prioritise."',
      imageSlug: '/images/nail-down.png',
    },
  ],

  onThePitch: {
    instructions: 'How to structure and deliver a high-stakes board presentation on football performance or strategy.',
    items: [
      {
        cue: 'The board is not a coaching staff — adjust your level',
        meaning: 'A board presentation is not a coaching session. Board members think in decisions, outcomes, and ROI — not in xG models, pressing triggers, or positional data. Your job is to translate technical analysis into the language of business decisions.',
        usage: '"Never say: \'Our xGA over the last twelve matches was 14.3, against an expected range of 11.2–13.5 given our defensive structure.\' Say instead: \'We are conceding more goals than our defensive performance suggests we should — and this visual shows the specific positional weakness that explains why.\' One sentence. One visual. One clear point. That is the board level."',
        imageSlug: 'otp-board-level',
      },
      {
        cue: 'Lead with the headline — then the evidence',
        meaning: 'Board members are time-poor and decision-focused. Lead with your most important finding — the headline — and then support it with evidence. Not the other way around.',
        usage: '"Wrong order: \'We analysed twelve matches, ran a transition analysis, looked at defensive metrics, found an interesting pattern, and our conclusion is that we need to strengthen the defensive midfield position.\' Right order: \'We need to strengthen the defensive midfield position. Here is why: in twelve matches, this specific positional gap has been exploited in 72% of goals we have conceded. Let me walk you through three examples.\' Lead with the conclusion. Support it after."',
        imageSlug: 'otp-headline-first',
      },
      {
        cue: 'Using one strong visual instead of many slides',
        meaning: 'A common mistake in board presentations is using too many slides with too much data. One clear visual that tells the story is worth more than ten complex charts.',
        usage: '"The heat map showing our defensive exposure on the right channel is the entire presentation in one image. I\'ll spend three minutes on this one visual — because everything else I say can be anchored to it. If I had to leave this room in five minutes and the board had to make a decision, this is the image they would use. That is how you know it is the right visual."',
        imageSlug: 'otp-one-visual',
      },
      {
        cue: 'Pre-empting the objections',
        meaning: 'Before the board raises their concerns, raise them yourself — and answer them. This shows you have thought the problem through, and it stops objections feeling like attacks.',
        usage: '"I\'m aware the most likely objection is the cost — £15 million for a defensive midfielder in this window. I want to address that directly. Here is the ROI model: based on our xG projections, addressing this weakness translates to an additional 8-10 points — which means a top-six finish rather than a top-ten. At Premier League prize money rates, the revenue difference is approximately £35 million. The investment is justified on purely financial grounds."',
        imageSlug: 'otp-pre-empt-board',
      },
      {
        cue: 'Being decision-ready — close with the exact ask',
        meaning: 'A board presentation must close with a specific, clear ask. What exactly do you need them to approve? By when? What are the decision points?',
        usage: '"Before I close — I want to be very specific about what I am asking for today. Three decisions: First, budget approval of £15-18 million for the defensive midfield position. Second, agreement that this is the priority over other areas of the squad. Third, confirmation of the timeline — we need to act in the first week of the window or the target will not be available. These are the three things I need to leave this room with."',
        imageSlug: 'otp-decision-ready',
      },
      {
        cue: 'Fielding questions — composure and conciseness',
        meaning: 'Board members will challenge your analysis. The principles: answer directly, be concise, and if you don\'t know something — say so.',
        usage: '"When fielding a challenge: don\'t repeat the question, don\'t apologise, don\'t over-explain. \'You\'re right that the sample size is twelve matches — I would want more data before making a firm prediction. What I can say with confidence is that the pattern is consistent across all twelve, and the variance is low. That\'s enough to act on this window.\' Direct. Specific. Confident about what you know, honest about what you don\'t."',
        imageSlug: 'otp-field-questions',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst', speakerColor: 'green', text: 'I have three things to cover. Where we are. What the data tells us. What I recommend.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'Good. Lead with the recommendation — we have limited time.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'Understood. The recommendation is to prioritise the defensive midfield position in this window. Here is the headline finding.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'This heat map shows the defensive channel that has been exploited in 72% of the goals we have conceded this season. The position directly responsible is unfilled.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'What\'s the cost?' },
    { speaker: 'Analyst', speakerColor: 'green', text: '£15-18 million. I\'m aware that\'s a significant spend. The ROI model projects an additional 8-10 points — which means top six rather than ninth. The prize money difference is approximately £35 million.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'The ownership group will need convincing. How do you plan to bring them on board?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'I\'d walk them through the same three-minute visual presentation — and I\'d put the financial case first. That\'s the language that will win them over.' },
  ],

  matchingExercise: [
    { word: 'Stakeholder', definition: 'A person with a significant interest in the outcome of a decision — ownership, board, senior management' },
    { word: 'Proposition', definition: 'A clear statement of what you are proposing — the recommendation you want the board to approve' },
    { word: 'Headline', definition: 'The single most important finding — the number or conclusion the board will remember' },
    { word: 'Rationale', definition: 'The reasoning behind a recommendation — why you are proposing what you are proposing' },
    { word: 'Objection', definition: 'A concern raised by the audience — something they need more evidence or reasoning to accept' },
    { word: 'ROI', definition: 'Return on Investment — the financial or performance benefit relative to cost' },
    { word: 'Visual', definition: 'A graphic or chart used to support a point — used carefully to clarify, not overwhelm' },
    { word: 'Decision-ready', definition: 'Presented so that a decision can be made immediately — finding, recommendation, cost, and projected outcome' },
  ],

  fillBlankExercise: [
    { before: 'Let me', answer: 'walk you through', after: 'the three key findings — methodology at the end if there are questions.' },
    { before: 'The data', answer: 'won', after: 'the Sporting Director over — the underlying numbers were too clear to dismiss.' },
    { before: 'We need to', answer: 'bring', after: 'the ownership group on board before the transfer can be approved.' },
    { before: 'I want to', answer: 'put forward', after: 'three specific recommendations with rationale and projected ROI for each.' },
    { before: 'I\'ll leave ten minutes to', answer: 'field', after: 'questions — the data is strong enough to hold up under scrutiny.' },
    { before: 'Before we close, I want to', answer: 'nail down', after: 'the three decision points: budget, timeline, and positional priority.' },
    { before: 'A board presentation should be', answer: 'decision-ready', after: '— finding, recommendation, cost, outcome. Not a research presentation.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the right order for a board presentation?',
      options: ['Lead with the headline conclusion, then support it with evidence — boards are time-poor and decision-focused', 'Lead with the methodology and data, then arrive at the conclusion — this shows rigour and builds trust', 'Lead with the background context, then the data, then the analysis, then finally the recommendation'],
      correctIndex: 0,
    },
    {
      question: 'Why should you pre-empt objections in a board presentation?',
      options: ['It shows you have thought the problem through — and it stops objections feeling like attacks on your analysis', 'It saves time by covering potential questions before the Q&A section at the end', 'It prevents the board from asking difficult questions that you might not be able to answer'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "I\'m aware you may be ___ about the cost — and I want to address that directly."',
      options: ['wondering', 'thinking', 'asking'],
      correctIndex: 0,
    },
    {
      question: 'What does "decision-ready" mean in the context of a board presentation?',
      options: ['The presentation contains everything the board needs to make a decision immediately — finding, recommendation, cost, and projected outcome', 'The presentation has been approved by the coaching staff and the analysis department before being presented to the board', 'The presenter is fully prepared to answer any question the board might raise during or after the presentation'],
      correctIndex: 0,
    },
    {
      question: 'When fielding a challenge to your analysis, what is the most professional response?',
      options: ['Answer directly and concisely — be confident about what you know and honest about what you don\'t, without over-explaining or apologising', 'Acknowledge the challenge and ask for more time to investigate before making a firm recommendation', 'Defend your analysis fully and explain in detail why the challenge is incorrect or misguided'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each board presentation sentence.',
    items: [
      {
        sentence: 'I have three things to cover. First, where we are. Second, what the data tells us. Third, what I ___ we do.',
        options: ['recommend', 'propose', 'suggest'],
        correctIndex: 0,
        explanation: '"Recommend" is the most direct and confident verb for a board presentation — it signals conviction and is the appropriate register for a decision-level audience.',
      },
      {
        sentence: 'This is the ___ number — not the possession percentage, but the xG differential over eight matches.',
        options: ['critical', 'important', 'key'],
        correctIndex: 0,
        explanation: '"Critical" is the strongest signpost — it tells the board to pay maximum attention to what follows. "Key" is acceptable but slightly weaker.',
      },
      {
        sentence: 'The ownership group needed to be ___ on board before the transfer could receive final approval.',
        options: ['brought', 'won', 'walked'],
        correctIndex: 0,
        explanation: '"Bring on board" means to convert someone to supporting a proposal — getting them from neutral or resistant to actively supportive.',
      },
      {
        sentence: 'Before we close, I want to ___ down the three specific decisions I need from this meeting.',
        options: ['nail', 'walk', 'put'],
        correctIndex: 0,
        explanation: '"Nail down" means to establish something firmly and precisely — to resolve the key questions before leaving the room.',
      },
      {
        sentence: 'Frame the proposal in ___ terms: a £15 million investment that projects to generate £35 million in additional revenue.',
        options: ['ROI', 'stakeholder', 'headline'],
        correctIndex: 0,
        explanation: 'ROI (Return on Investment) is the language boards understand — expressing the proposal as a financial return makes it immediately comprehensible to non-technical decision-makers.',
      },
      {
        sentence: 'Let me ___ you through the analysis — I\'ll focus on the three findings that are most decision-relevant.',
        options: ['walk', 'talk', 'bring'],
        correctIndex: 0,
        explanation: '"Walk through" means to take someone through something step by step — the standard phrase for guiding an audience through data or a proposal.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are presenting analysis to a board. Choose the most effective approach.',
      items: [
        {
          customerLine: 'The Sporting Director says: "We\'ve heard enough data. What exactly are you recommending we do?"',
          options: [
            '"The recommendation is specific: invest £15-18 million in the defensive midfield position this window. The rationale is this heat map — 72% of conceded goals come through this channel. The ROI projects an additional 8-10 points, worth approximately £35 million in prize money. Those are the three things you need to make this decision."',
            '"I need to first explain the methodology so you understand where the recommendation comes from — it will make more sense in context."',
            '"There are several possible recommendations depending on budget and timing — let me walk through each option in detail."',
          ],
          correctIndex: 0,
          explanation: 'The best response leads directly with the specific recommendation, then provides the three elements a board needs: rationale, visual evidence, and ROI. Never delay the ask when directly asked for it.',
        },
        {
          customerLine: '"Your sample size is only twelve matches — how can you be confident in this recommendation?"',
          options: [
            '"That\'s a fair challenge. Twelve matches is a limited dataset, and I would want more data before making a firm prediction about the season outcome. What I can say with confidence is that the pattern is consistent across all twelve, the variance is low, and it is concentrated in a specific positional area. That is enough to act on in this window."',
            '"Twelve matches is actually statistically significant — I can explain the confidence intervals if you\'d like to go through the methodology."',
            '"You\'re right, the sample is small — I think we should wait until we have more data before making this recommendation."',
          ],
          correctIndex: 0,
          explanation: 'This response acknowledges the legitimate concern honestly, then explains specifically why the available evidence is still actionable — without either dismissing the objection or collapsing under it.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the presentation structure mistake.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'green', text: 'Good morning. I\'d like to start by explaining our methodology for the transition analysis we conducted.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'We used StatsBomb event data combined with Tracab tracking data to isolate transition events across twelve matches.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'I\'ve prepared seventeen slides which walk through each of the key metrics in detail.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'After going through all the data, I think we\'ll arrive at an interesting conclusion about the defensive midfield.' },
        { speaker: 'Director', speakerColor: 'blue', text: 'Could you just tell me what you recommend?' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'Good morning. I\'d like to start by explaining our methodology for the transition analysis we conducted.',
          correction: 'Good morning. The recommendation I want to put forward today is to prioritise the defensive midfield position in this transfer window. Here is the critical finding that drives that recommendation. Everything else I present this morning exists to support that one conclusion.',
          explanation: 'Starting with methodology is the wrong order for a board presentation. Boards are decision-focused and time-poor — they want the recommendation first, then the evidence. Starting with methodology signals that the presenter has not calibrated for the audience. The director\'s interruption is the consequence: they had to ask for what should have been the opening sentence.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the board presentation passage.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'I\'m aware the most likely objection is the cost — £15 million for one position. I want to address that directly...',
          suggestedCompletion: 'by presenting the ROI model alongside the expenditure. Addressing this specific weakness projects to generate an additional 8-10 points — the difference between a top-six and a top-ten finish. At current Premier League prize money rates, that translates to approximately £35 million in additional revenue. The investment is justified on financial grounds alone, before considering the sporting impact.',
        },
        {
          customerLine: '',
          salespersonStart: 'This is the one visual I want you to take from this presentation. It is a heat map showing...',
          suggestedCompletion: 'exactly where our defensive exposure is concentrated — the right channel, between the full-back and the defensive midfielder. In 72% of the goals we have conceded this season, the ball entered that specific zone in the fifteen seconds before the goal was scored. Everything else in this presentation is an elaboration of what this image shows. This is the problem we are here to solve.',
        },
      ],
    },
  },
};
