import { Lesson } from '@/types/lesson';

export const contractNegotiations: Lesson = {
  slug: 'contract-negotiations',
  title: 'Contract Negotiations',
  subtitle: 'Wages, release clauses, agent language, and what "exploring options" really means',
  level: 'B1-B2',
  description: 'Football is a business, and the language of contracts, transfers, and negotiations is essential for anyone who wants to understand the sport fully. This lesson covers the vocabulary of wages, release clauses, agent speak, and the carefully worded statements players and clubs make when transfer windows open.',
  heroImage: '/images/contract-negotiations-hero.png',

  warmUp: {
    questions: [
      'Do you think footballers are paid too much, the right amount, or too little for what they do? Give a reason.',
      'When a player says they are "exploring their options," what do you think they really mean?',
      'Who do you think has more power in a contract negotiation — the player, the club, or the agent? Why?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Reported speech and diplomatic language — what was said vs. what was meant',
    description: 'In football contract negotiations, what is said publicly is often very different from what is happening privately. English uses reported speech to relay what others have said, and diplomatic hedging language to soften or obscure meaning. Both are essential for understanding football business talk.',
    positivePattern: 'REPORTED SPEECH: verb backshift. "He is happy here" → He said he WAS happy there. "We are in talks" → They confirmed they WERE in talks. "I will sign" → She said she WOULD sign. HEDGING: "reportedly," "is understood to," "sources suggest," "is believed to," "it is thought that." These phrases distance the speaker from the claim.',
    positiveExample: '"The club confirmed that talks were ongoing and that both parties hoped to reach an agreement. It is understood that the player is seeking a significant pay rise. His agent reportedly told the club that other offers had been received."',
    negativePattern: 'Do NOT forget to backshift verbs in reported speech. Do NOT confuse "say" (reporting words) with "tell" (requires an object). "He said he was happy" (correct). "He told he was happy" (wrong — must be "he told THEM he was happy").',
    negativeExample: 'WRONG: "She said she is ready to sign." → RIGHT: "She said she WAS ready to sign." WRONG: "He told he would leave in January." → RIGHT: "He told the club he WOULD leave in January." or "He said he would leave."',
    positiveExamples: [
      { sentence: '"The manager said the player was an important part of the squad." (reported speech — backshift)', note: '("is" → "was": verb backshifts one tense back in reported speech)' },
      { sentence: '"It is understood that the player has entered talks with a rival club." (hedging — distance from the claim)', note: '("It is understood" = the journalist does not confirm — someone else believes this)' },
      { sentence: '"Sources suggest the fee could reach £80 million with add-ons." (hedging)', note: '("Could" = possibility; "suggest" = not confirmed; "add-ons" = bonus payments)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "The agent said the player wants more money."', note: 'CORRECT: "The agent said the player WANTED more money." (backshift)' },
      { sentence: 'WRONG: "She told the contract was unfair."', note: 'CORRECT: "She told the club the contract was unfair." (tell requires an object)' },
    ],
  },

  vocabulary: [
    {
      word: 'RELEASE CLAUSE',
      partOfSpeech: 'noun',
      definition: 'A fixed price written into a contract — if a club pays that exact amount, the player can leave automatically, regardless of what the current club wants.',
      example: '"His release clause is set at £100 million — any club that meets it can sign him immediately, without any negotiation with City."',
      imageSlug: '/images/release-clause.png',
    },
    {
      word: 'WAGES',
      partOfSpeech: 'noun',
      definition: 'A player\'s weekly or annual salary. Football wages are usually discussed per week (especially in England) or per year (in Europe).',
      example: '"She is reportedly earning £120,000 per week — and she is seeking £180,000 per week to extend her contract."',
      imageSlug: '/images/wages.png',
    },
    {
      word: 'ADD-ONS',
      partOfSpeech: 'noun',
      definition: 'Additional payments built into a transfer fee — paid only if certain conditions are met, like the player appearing a set number of times or winning a trophy.',
      example: '"The transfer fee is £45 million upfront, with £20 million in add-ons — performance bonuses based on appearances and Champions League qualification."',
      imageSlug: '/images/add-ons.png',
    },
    {
      word: 'EXPLORING OPTIONS',
      partOfSpeech: 'phrase',
      definition: 'Diplomatic language used when a player or club is looking at other possibilities — almost always means the player wants to leave or the club is considering selling.',
      example: '"The player\'s agent confirmed he is \'exploring his options\' — widely understood as confirmation that he will not renew his contract."',
      imageSlug: '/images/exploring-options.png',
    },
    {
      word: 'BUYOUT CLAUSE',
      partOfSpeech: 'noun',
      definition: 'Similar to a release clause — a fixed price that allows a player to leave. More common in Spanish football (la cláusula de rescisión).',
      example: '"His buyout clause was €1 billion — effectively ensuring the club that he would never leave, as no club could realistically pay that fee."',
      imageSlug: '/images/buyout-clause.png',
    },
    {
      word: 'RUNNING DOWN THEIR CONTRACT',
      partOfSpeech: 'phrase',
      definition: 'When a player gets close to the end of their contract without signing a new one — allowing them to leave for free (as a free agent) when it expires.',
      example: '"He is running down his contract — eighteen months remaining and no new deal agreed. The club may have to sell in January or risk losing him for nothing."',
      imageSlug: '/images/running-down-contract.png',
    },
    {
      word: 'AGENT FEE',
      partOfSpeech: 'noun',
      definition: 'The payment made to a player\'s agent for their work in negotiating a transfer or contract — usually a percentage of the deal value.',
      example: '"The total deal was worth £55 million — but agent fees added another £8 million, making the true cost of the transfer closer to £63 million."',
      imageSlug: '/images/agent-fee.png',
    },
    {
      word: 'HAND IN A TRANSFER REQUEST',
      partOfSpeech: 'phrase',
      definition: 'A formal request by a player to be allowed to leave a club — usually signals a breakdown in the relationship between player and club.',
      example: '"After weeks of failed negotiations, he handed in a transfer request — publicly stating he wanted to leave the club he had been at for eight years."',
      imageSlug: '/images/transfer-request.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HOLD OUT FOR',
      definition: 'To refuse to accept less than a specific amount — to wait for better terms rather than accept what is currently offered.',
      example: '"She is holding out for £200,000 per week — the club have offered £160,000 and the two sides are currently £40,000 apart."',
      imageSlug: '/images/hold-out-for.png',
    },
    {
      phrase: 'SIGN ON',
      definition: 'To formally agree and complete a contract — to put your signature on a deal.',
      example: '"He has agreed terms and is expected to sign on Thursday — the medical was completed yesterday."',
      imageSlug: '/images/sign-on.png',
    },
    {
      phrase: 'PUSH FOR',
      definition: 'To actively try to achieve something specific in a negotiation — to make it a key requirement.',
      example: '"She is pushing for a release clause in her new contract — something the club are reluctant to include."',
      imageSlug: '/images/push-for.png',
    },
    {
      phrase: 'WALK AWAY',
      definition: 'To end negotiations — to leave a deal rather than accept the terms being offered.',
      example: '"After three rounds of talks, the buying club walked away — unable to meet the selling club\'s valuation of the player."',
      imageSlug: '/images/walk-away.png',
    },
    {
      phrase: 'COME TO AN AGREEMENT',
      definition: 'To reach a deal — both sides find terms that are acceptable.',
      example: '"The two clubs have come to an agreement on the fee — the medical is now the final step before the transfer is confirmed."',
      imageSlug: '/images/come-to-agreement.png',
    },
    {
      phrase: 'TIE DOWN',
      definition: 'To secure a player to a long contract — to prevent them from leaving by agreeing a new deal.',
      example: '"The club are desperate to tie down their best player before rivals can approach him — they are offering a five-year contract."',
      imageSlug: '/images/tie-down.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key contract and transfer language concepts used in football business journalism.',
    items: [
      {
        cue: 'Transfer window language — what phrases really mean',
        meaning: 'Football transfer language is full of diplomatic phrases that mean something specific in the business context.',
        usage: '"Exploring options" = looking to leave. "Both parties are in discussions" = talks are happening but nothing agreed. "The player is valued at X" = the club will not sell for less. "He has entered the final year of his contract" = the club may have to sell soon. "Sources close to the player suggest..." = the player\'s agent is briefing journalists. "The club are hopeful of keeping the player" = they know he might leave. Understanding these phrases is essential for reading transfer news critically — nothing is ever as directly stated as it appears in football media.',
        imageSlug: 'otp-transfer-language',
      },
      {
        cue: 'The agent\'s role in contract negotiations',
        meaning: 'A player\'s agent acts as their representative in all contract and transfer discussions — and their language is carefully managed.',
        usage: '"The player\'s agent confirmed interest but denied an approach had been made" = the agent is managing the situation. Agents operate in the space between clubs and players, taking a percentage of deal value (typically 5-10%). "His agent reportedly told the buying club that his client would be open to a move" = the agent is authorised to test the market. Agents also often brief journalists — "sources close to the player" almost always means the agent. Understanding the agent\'s role explains why so much transfer news seems to come from "unnamed sources" — it is the agent managing the transfer narrative.',
        imageSlug: 'otp-agent-role',
      },
      {
        cue: 'Release clauses — when clubs use them and how',
        meaning: 'Release clauses are powerful tools but are used very differently across European football.',
        usage: 'In Spain, release clauses (buyout clauses) are legally required in all contracts — any club can trigger one by paying the set amount. In England, release clauses are optional and less common — clubs prefer to control the sale. "His release clause was set at £150 million — the club included it believing no club would ever pay that figure. They were wrong." The most famous release clause in history: Neymar\'s €222 million buyout clause, triggered by PSG in 2017. When a release clause is triggered, the selling club has no say — the player can leave regardless. This is why English clubs often refuse to include them.',
        imageSlug: 'otp-release-clauses',
      },
      {
        cue: '"Running down the contract" — leverage and risk',
        meaning: 'A player in the final 18 months of a contract holds significant power — and the club faces a dilemma.',
        usage: 'A player running down their contract creates a dilemma: sell now at a reduced price, or risk losing them for free when the contract expires. "He has 12 months remaining — the club must decide: sell for £30 million now, or keep him and lose him on a free transfer next summer." Players use this leverage to demand better wages: "He is in the final year of his contract and is reportedly seeking £40,000 per week more than the club are offering." Some players deliberately refuse to sign extensions — forcing the club\'s hand to sell them at a lower price to a preferred destination.',
        imageSlug: 'otp-running-down-contract',
      },
      {
        cue: 'Add-ons — the true cost of a transfer',
        meaning: 'Add-ons are conditional payments that can significantly increase the true cost of a transfer beyond the headline fee.',
        usage: 'Add-ons are performance-based bonus payments built into transfer agreements. Common add-on triggers: appearances (e.g., £2 million per 20 league appearances), goals (£1 million per 10 goals), trophies won, Champions League qualification, or international caps. "The fee is £40 million upfront, rising to £65 million with add-ons — but analysts suggest most of the add-ons are very achievable based on the player\'s history." Clubs purchasing players prefer to front-load the fee; clubs selling prefer back-loaded add-ons. The headline fee announced ("City sign Diallo for £50 million") rarely tells the full financial story.',
        imageSlug: 'otp-add-ons',
      },
      {
        cue: 'Loyalty vs. ambition — the player\'s dilemma',
        meaning: 'The language players use when deciding between staying at a club they love or leaving for a bigger opportunity.',
        usage: '"I have nothing but respect for this club and the fans — but at this stage of my career, I feel I need a new challenge." This is the standard phrasing: affection for the club + career justification for leaving. The word "loyalty" is central to fan discourse: "Was it loyal to leave?" Players respond with "I gave everything for this club" and frame the departure as professional growth, not betrayal. "A challenge" = a bigger, more prestigious club. "The right time" = they have decided to leave. "Mutual agreement" = the club and player both wanted the relationship to end. Understanding this diplomatic vocabulary is essential for reading football news critically.',
        imageSlug: 'otp-loyalty-ambition',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Ronaldo — your agent told me this morning that you are "[[exploring options:diplomatic language for looking to leave a club]]." What does that mean, exactly?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'It means I have eighteen months remaining on my contract and we have not [[come to an agreement:to reach a deal both sides accept]] on a new one. My agent said the club offered £80,000 per week — I am [[holding out for:to refuse to accept less than a specific amount]] £120,000. We are £40,000 apart on [[wages:a player\'s weekly salary]] and the club are not offering a [[release clause:a fixed price that allows a player to leave automatically]] either.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'So you are [[running down your contract:getting close to the end of a contract without signing a new one]]. The board told me they would rather sell you in January with six months remaining than lose you for free in the summer. They said they were considering accepting an offer.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What kind of offer? Has a club actually [[approached:made a formal expression of interest in signing a player]] about signing Ronaldo?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'There are reportedly two clubs interested. One would trigger his [[buyout clause:a fixed fee written into the contract that allows a player to leave]]. Another wants to negotiate a lower fee with [[add-ons:bonus payments based on performance targets]]. The board said they were hopeful of [[tying him down:to secure a player with a long contract]] — but if talks collapse, they will sell. "Sources close to the player suggest he has already decided to leave." I read that on the website this morning.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Those "sources close to the player" — that is my agent. He told the journalist that. I have nothing but respect for this club — but at this stage of my career I feel I need a new challenge. A bigger stage. My agent [[pushed for:to actively seek something specific in a negotiation]] more money and the club [[walked away:to end negotiations rather than accept terms]]. Sometimes that is how it ends.',
    },
  ],

  matchingExercise: [
    { word: 'RELEASE CLAUSE', definition: 'A fixed price in a contract that allows a player to leave automatically if paid' },
    { word: 'ADD-ONS', definition: 'Additional transfer payments made if certain performance conditions are met' },
    { word: 'EXPLORING OPTIONS', definition: 'Diplomatic language for looking to leave a club' },
    { word: 'RUNNING DOWN THE CONTRACT', definition: 'Getting close to the end of a contract without agreeing a new one' },
    { word: 'AGENT FEE', definition: 'Payment to the player\'s agent for negotiating a deal' },
    { word: 'HAND IN A TRANSFER REQUEST', definition: 'A formal player request to be allowed to leave a club' },
    { word: 'TIE DOWN', definition: 'To secure a player with a long contract to prevent them from leaving' },
    { word: 'HOLD OUT FOR', definition: 'To refuse to accept less than a specific wage or fee' },
  ],

  fillBlankExercise: [
    { before: 'She is', answer: 'exploring her options', after: '— her agent confirmed she would not sign a new contract this season.' },
    { before: 'The fee is £50 million, with a further £15 million in', answer: 'add-ons', after: 'based on trophies and Champions League appearances.' },
    { before: 'He is', answer: 'running down his contract', after: '— only 12 months left and no new deal on the table.' },
    { before: 'She is', answer: 'holding out for', after: '£200,000 per week — the club\'s offer of £160,000 has been rejected.' },
    { before: 'The buying club', answer: 'walked away', after: 'after three rounds of talks — unable to agree the fee with the selling club.' },
    { before: 'His', answer: 'release clause', after: 'was set at €150 million — any club meeting that figure can sign him immediately.' },
    { before: 'The club are desperate to', answer: 'tie down', after: 'their best player with a five-year contract before rivals can approach him.' },
    { before: 'After years of service, he formally', answer: 'handed in a transfer request', after: '— a public statement that the relationship had broken down completely.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"The agent said the player was open to a move." What tense is "was" — and why?',
      options: [
        'Past simple — describing a past state that no longer exists.',
        'Reported speech backshift — "is" becomes "was" when reporting what was said.',
        'Past continuous — describing an ongoing background state when the agent spoke.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The club confirmed they were in talks." What was the original direct speech?',
      options: [
        '"We were in talks."',
        '"We are in talks."',
        '"We have been in talks."',
      ],
      correctIndex: 1,
    },
    {
      question: '"Sources close to the player suggest he has decided to leave." Who are "sources close to the player" likely to be?',
      options: [
        'Club officials who work closely with the player on a daily basis.',
        'The player\'s agent, managing the transfer narrative through the media.',
        'Teammates who have spoken to the player about his plans.',
      ],
      correctIndex: 1,
    },
    {
      question: '"She is running down her contract." What does this mean for the club?',
      options: [
        'She is performing well in her contract year — earning her wages through good performances.',
        'She is getting close to the end of her contract without signing a new one — the club may lose her for free.',
        'She is gradually reducing the terms of her contract in return for guaranteed appearances.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The fee is £40 million rising to £65 million with add-ons." What are add-ons?',
      options: [
        'Extra agent fees added to the base transfer fee at the end of the deal.',
        'Conditional bonus payments — paid only if certain performance conditions are met.',
        'Additional wage payments made on top of the basic salary each week.',
      ],
      correctIndex: 1,
    },
    {
      question: '"He told the board he would leave." Why is "told" correct here instead of "said"?',
      options: [
        '"Told" is stronger — it means he said it firmly. "Said" is weaker and less decisive.',
        '"Tell" requires a person as its object — "he told the board." "Say" does not: "he said he would leave."',
        '"Told" is used in formal contexts; "said" is informal. A board meeting is formal.',
      ],
      correctIndex: 1,
    },
    {
      question: '"It is understood that the player has entered talks with a rival club." What does "it is understood" signal?',
      options: [
        'The journalist has confirmed this fact directly from official club sources.',
        'The journalist is distancing themselves from the claim — it is believed to be true but not confirmed.',
        'The information is so obvious that no source is needed — everyone understands it.',
      ],
      correctIndex: 1,
    },
    {
      question: '"I feel I need a new challenge at this stage of my career." What is the player really saying?',
      options: [
        'They are struggling at their current club and want to go somewhere easier.',
        'They want to leave the club — framing their departure as professional growth rather than disloyalty.',
        'They need a new training approach — their physical development has stagnated.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each contract negotiation sentence with the correct reported speech structure or vocabulary.',
    items: [
      {
        sentence: '"The manager said the player _____ an important part of the club\'s future plans." (reported speech)',
        options: ['was', 'is', 'will be'],
        correctIndex: 0,
        explanation: '"Was" is correct — backshifting in reported speech. The manager\'s original statement was "he IS an important part of the club\'s future plans." When we report this in the past tense, "is" → "was." The backshift rule: present simple → past simple, present continuous → past continuous, will → would, can → could. "Is" would be wrong because we are reporting what was said (in the past) — we use reported speech structure, not the original direct speech tense. "Will be" could appear in reported speech only if the original was "will be" → "would be" — but here it becomes "was."',
      },
      {
        sentence: '"She _____ the board she would not accept a contract without a release clause." (say or tell?)',
        options: ['told', 'said', 'told to'],
        correctIndex: 0,
        explanation: '"Told" is correct — "tell" requires a person as its direct object: "she told THE BOARD." "Said" does not require an object: "she said she would not accept..." Without a person object, use "said"; with a person object, use "told." "She told the board" = correct. "She said the board" = wrong — "say" cannot take a person as direct object. "She told to the board" = wrong — no preposition after "told." This is one of the most common reported speech errors in English: "tell" + person (no preposition) vs. "say" + that clause (no person).',
      },
      {
        sentence: '"It is _____ that the club have received a bid of £80 million from a rival club." (hedging — journalist is not confirming)',
        options: ['understood', 'known', 'confirmed'],
        correctIndex: 0,
        explanation: '"Understood" is correct — "it is understood" is the standard hedging phrase for journalism when the information is believed to be true but not officially confirmed. "It is known" = stated as a fact — too strong for unconfirmed information. "It is confirmed" = officially verified — the opposite of hedging. The hedging vocabulary in transfer journalism: "it is understood," "it is believed," "sources suggest," "reportedly," "is thought to," "is said to." All create distance between the journalist and the claim — protecting them legally and editorially if the information turns out to be wrong.',
      },
      {
        sentence: '"He is _____ his contract — only six months remaining and no renewal agreed. The club must decide whether to sell or lose him for free."',
        options: ['running down', 'walking away from', 'holding out on'],
        correctIndex: 0,
        explanation: '"Running down" is correct — "running down his contract" = getting progressively closer to the end of a contract without signing a new one. "Only six months remaining" confirms the timeline. "Walking away from" = to leave negotiations — describes a negotiation action, not a contract status. "Holding out on" is not a standard football phrase — "holding out for" means refusing to accept less than a specific amount, but "holding out on" means withholding information (not relevant here). "Running down the contract" is the fixed phrase for the specific situation of an expiring contract with no renewal.',
      },
      {
        sentence: '"The transfer fee is £35 million upfront, with £20 million in _____ — appearance bonuses and a Champions League qualification payment."',
        options: ['add-ons', 'agent fees', 'wages'],
        correctIndex: 0,
        explanation: '"Add-ons" is correct — conditional payments built into the transfer fee, triggered by specific performance conditions. The sentence confirms what they are: "appearance bonuses and a Champions League qualification payment" — both typical add-on conditions. "Agent fees" are separate costs — paid to the agent for their work, not to the selling club. "Wages" = the player\'s salary — a separate agreement between the buying club and the player, not part of the transfer fee between clubs. Add-ons are the most financially complex part of transfer deals because they can significantly increase the true cost — and are a common source of disputes if a club feels the conditions were structured unfairly.',
      },
      {
        sentence: 'Which sentence uses reported speech CORRECTLY?',
        options: [
          '"The agent said the club are not offering enough wages and that he will look for other options."',
          '"The agent said the club were not offering enough wages and that his client would look for other options."',
          '"The agent told that the wages were not enough and the player will leave."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — proper backshift throughout and correct verb syntax. "The agent said" (reporting verb, no person object — correct). "Were not offering" (present continuous → past continuous backshift). "Would look for" (will → would backshift). "His client" (correct pronoun shift — "he" becomes "his client" or "he" in reported speech). A fails to backshift: "are not offering" should be "were not offering" and "will look" should be "would look." C fails because "tell" requires a person object — "told that" is wrong; it needs "told the club that" or should use "said that" instead.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use contract negotiation vocabulary and reported speech to give detailed responses.',
      items: [
        {
          customerLine: 'Explain what "exploring options" really means when a player\'s agent uses this phrase.',
          options: [
            '"Exploring options means the player is looking at other clubs — they want to leave."',
            '"\'Exploring options\' is one of football\'s most reliable diplomatic code phrases — and understanding what it actually means requires decoding the language carefully. When an agent says their client is \'exploring options,\' they are simultaneously making three statements: the player is not happy with their current situation (whether wages, ambition, or a personal factor); the player has not yet committed to leaving and wants to maintain goodwill with the current club; and the agent is signalling to interested clubs that an approach will be welcomed. It stops short of a transfer request — which would damage the relationship publicly — but it achieves the same purpose: alerting the market that the player is available. The club receiving this message understands exactly what it means, even if the newspapers report it as \'talks ongoing.\'"',
            '"Exploring options is diplomatic language. It means the player is thinking about leaving but has not made a decision yet. Clubs understand this as a signal that the player might be available."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — decodes the phrase on three levels with precision. "Simultaneously making three statements" (analytical framework), "not happy with current situation," "not yet committed to leaving to maintain goodwill," "signalling to interested clubs" (the three layers of meaning), "stops short of a transfer request — but achieves the same purpose" (the key tactical insight), "the club understands exactly what it means, even if newspapers report it as \'talks ongoing\'" (another layer of diplomatic translation). A is accurate but shallow. C captures some of it but without the analytical depth expected at B2.',
        },
        {
          customerLine: 'Why do clubs sometimes include release clauses — and why do others refuse?',
          options: [
            '"Some clubs include release clauses because they are legally required in some countries. Others don\'t because they want to control if the player leaves."',
            '"The decision to include or refuse a release clause reflects a fundamental tension in contract negotiations — control versus incentive. Clubs that refuse release clauses — particularly English clubs — want to retain the power to decide when, whether, and to whom a player leaves. If a release clause is triggered, the selling club has no say: the player goes, at the agreed price, regardless of the club\'s wishes. Clubs use this control to extract maximum value in bidding wars and to block transfers to direct rivals. Conversely, clubs include release clauses as an incentive in negotiations — offering the player a guaranteed exit route if an elite club comes in, which can make the player accept lower wages in return for security. Some clubs set release clauses at impossibly high values — Neymar\'s €222 million clause being the extreme example — essentially decorative clauses intended to communicate \'untouchable\' rather than set a realistic price."',
            '"Clubs include release clauses to attract players who want security — knowing they can leave if a bigger club comes. They don\'t include them when they want to keep control of any transfer and maximise the fee they get."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — explores both sides with real depth. "Control versus incentive" (clear framework), "selling club has no say — the player goes at the agreed price" (the mechanism of a triggered clause), "extract maximum value in bidding wars and block transfers to rivals" (why clubs refuse), "incentive: offer guaranteed exit route, player may accept lower wages in return" (why clubs include them), "impossibly high values — essentially decorative" (the most sophisticated point, with the Neymar example). A and C both capture the basics but miss the nuance of decorative clauses and the wage trade-off.',
        },
        {
          customerLine: 'How does the "running down the contract" situation give a player power over a club?',
          options: [
            '"When a player is running down their contract, the club has to choose between selling them cheaply or losing them for free. The player knows this and can use it as leverage."',
            '"The final 18 months of a contract fundamentally shift the power balance between player and club — and sophisticated players and agents understand exactly how to use this leverage. Once a player enters the final year, the club faces a narrowing window of options: sell now at a reduced fee (buyers know the club is under time pressure and offer less), offer significantly improved wages to secure a renewal, or risk losing the player on a free transfer when the contract expires. From January of the final year, the player can sign a pre-contract agreement with any foreign club — leaving for free in the summer. This means the club may receive nothing while losing one of their key assets. The threat of this outcome forces the club\'s hand: they either offer the player what they are asking for, or they sell at a discount before the situation deteriorates further."',
            '"Running down the contract gives the player leverage because the club risks losing them for nothing. The player can demand higher wages knowing the club will prefer to pay more than lose them for free. The club must decide: pay up, sell now at a reduced price, or lose them."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a precise analysis of the leverage mechanism. "Narrowing window of options" (the dynamic nature of the situation), "buyers know the club is under time pressure and offer less" (why the fee drops), "from January of the final year, the player can sign a pre-contract with any foreign club" (the specific legal mechanism that creates the ultimate leverage), "leaving for free in the summer" (the consequence), "forces the club\'s hand: pay what they are asking, or sell at a discount" (the forced choice). C is accurate but lacks the detail about pre-contract agreements and the specific legal mechanism that makes this leverage so powerful.',
        },
        {
          customerLine: 'Explain how to read a football transfer story critically — what to believe and what to treat with scepticism.',
          options: [
            '"In transfer stories, \'confirmed\' means the deal is done. \'Sources suggest\' means it might not be true. You should trust official statements more than anonymous sources."',
            '"Reading transfer stories critically requires understanding the ecosystem of interests that produce them. Almost nothing in a transfer story is neutral: agents brief journalists to create interest from other clubs or to pressure their current club; clubs leak information to manage fan expectations or to attract bids; journalists cultivate sources to get stories before rivals. \'Sources close to the player\' almost always means the agent. \'The club are hopeful of keeping the player\' often means they know the player wants to leave. \'Both parties are keen to find a solution\' may mean talks have broken down. The most reliable information comes from official club announcements and direct player statements — and even these are carefully worded for strategic purposes. The critical reader asks: who is saying this, why are they saying it now, and what do they want the reader to believe?"',
            '"To read transfer stories critically, you should look at which sources are being used. If the source is named and official, the information is more reliable. If it says \'reportedly\' or \'sources suggest\', be more sceptical. Official club websites are the most reliable sources."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — provides a genuine framework for media literacy. "Nothing is neutral — agents, clubs, journalists all have interests" (the core insight), "agents brief to create interest or pressure the club," "clubs leak to manage expectations or attract bids," "journalists cultivate sources to get stories first" (three specific motivations), then decodes specific phrases ("sources close to the player" = agent; "hopeful of keeping" = they know he\'s leaving), "official announcements and direct player statements are most reliable — and even these are strategic" (most sophisticated point), "who is saying this, why now, what do they want the reader to believe?" (the three questions for critical reading). A and C are reasonable starting points but lack the depth and insight of B.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three reported speech or contract vocabulary mistakes in this transfer story. Find them.',
      dialogue: [
        { speaker: 'Reporter', text: 'City have confirmed that they are in advanced talks with Diallo\'s club over a potential transfer this January.' },
        { speaker: 'Reporter', text: 'The player\'s agent told yesterday that his client was \'exploring options\' — understood as confirmation that the player wishes to leave.' },
        { speaker: 'Reporter', text: 'Sources suggest the fee could reach £75 million with add-ons — performance bonuses including appearance targets and a Champions League bonus.' },
        { speaker: 'Reporter', text: 'Diallo\'s current club said they are open to selling, but only if their valuation is met. They reportedly said \'the player is too important to lose cheaply.\'' },
        { speaker: 'Reporter', text: 'City are understood to have triggered his release clause — a figure set at £60 million at the time the contract was signed three years ago.' },
        { speaker: 'Reporter', text: 'His agent fees for the deal are reportedly 8% of the total transfer value — adding significant cost to the overall wages of the deal.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The player\'s agent told yesterday that',
          correction: 'The player\'s agent said yesterday that',
          explanation: '"Told" requires a person as its direct object — "told [someone] that." Without naming who was told, you cannot use "told." "The agent told yesterday that" is missing the required person object. It should be "The agent said yesterday that..." (no person object needed with "say") or "The agent told journalists yesterday that..." (person object included). This is the fundamental grammatical difference between "say" and "tell": "say + (that) clause" requires no person object; "tell + person + (that) clause" requires the person.',
        },
        {
          lineIndex: 3,
          incorrectText: 'They reportedly said \'the player is too important to lose cheaply.\'',
          correction: 'They reportedly said the player WAS too important to lose cheaply.',
          explanation: 'Reported speech requires verb backshift — "is" should become "was" when reporting in the past. "They said \'the player IS too important\'" = direct speech (quote) — valid only if using quotation marks showing the exact words. But "reportedly said" signals we are reporting, not quoting exactly — so backshift is required. "Said the player was too important" = correct reported speech. If the journalist wants to quote directly, they would write: "They reportedly said: \'The player is too important to lose cheaply.\'" In that case the present tense is valid as a direct quote. The mixing of "reportedly said" (reporting) with a present tense clause (direct speech) is the error.',
        },
        {
          lineIndex: 5,
          incorrectText: 'adding significant cost to the overall wages of the deal',
          correction: 'adding significant cost to the overall value / total cost of the deal',
          explanation: '"Agent fees" are part of the overall transfer cost — they are paid by the buying club to the agent, in addition to the transfer fee and the player\'s wages. "Wages" = the player\'s weekly salary. Agent fees are not wages — they are a separate transaction. "Adding significant cost to the overall wages" incorrectly conflates agent fees (a one-time transfer cost) with wages (an ongoing salary). The correct phrase: "adding significant cost to the overall value of the deal" or "the total cost of the transfer." This is a vocabulary precision error — using "wages" when "cost" or "deal value" is required.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each contract and transfer analysis using precise vocabulary and reported speech.',
      items: [
        {
          customerLine: 'Explain why the transfer window creates so much media activity even when few deals are actually completed.',
          salespersonStart: 'The transfer window is one of the most intensely covered periods in football — but the ratio of speculation to completed deals is enormous —',
          suggestedCompletion: 'The transfer window is one of the most intensely covered periods in football — but the ratio of speculation to completed deals is enormous — because the window creates a perfect media environment for story generation. Every club has players it might sell, players it wants to buy, and agents actively briefing journalists to create interest and pressure. A single piece of agent briefing — "sources close to the player suggest he is exploring options" — can generate days of coverage across multiple outlets, each adding speculation and linking further players and clubs. The media ecosystem rewards engagement and speed over accuracy: a story about a potential transfer generates more reader interest than confirmation that a deal has not happened. Most transfer window stories are ultimately about what might happen — conditional, hedged, attributed to unnamed sources. The ten or fifteen deals that actually complete are the tip of a very large iceberg of manufactured transfer speculation.',
        },
        {
          customerLine: 'Describe how a player in the final year of their contract should handle negotiations with their current club.',
          salespersonStart: 'Being in the final year of a contract is the most powerful negotiating position a player can be in — if they handle it correctly —',
          suggestedCompletion: 'Being in the final year of a contract is the most powerful negotiating position a player can be in — if they handle it correctly — because the club faces a ticking clock while the player faces no immediate pressure. The key is patience and discretion. The player should not publicly confirm they are exploring options — that damages the relationship with the club and the fans before anything is agreed. Instead, the agent manages the narrative quietly: briefing interested clubs that an approach will be welcomed, while maintaining the appearance of ongoing negotiations with the current club. The player continues performing — their value on the pitch determines their value in the negotiation. If the current club\'s offer is not acceptable by a certain point, the player can sign a pre-contract agreement with a foreign club from January, forcing the current club to either sell in winter at a reduced fee or accept they will receive nothing. Handled well, the final year is leverage; handled badly, it becomes a story of disloyalty.',
        },
        {
          customerLine: 'How do add-ons change the relationship between a buying club and a selling club after a transfer is completed?',
          salespersonStart: 'Add-ons are not simply a financial mechanism — they create an ongoing relationship between buying and selling clubs that can last for years —',
          suggestedCompletion: 'Add-ons are not simply a financial mechanism — they create an ongoing relationship between buying and selling clubs that can last for years — and sometimes become a source of significant tension. Once a transfer is agreed with add-ons attached, the selling club has a financial stake in how the buying club uses the player: if the player never reaches the appearance threshold, the selling club receives less. This creates a conflict of interest — the selling club wants to know if the player is getting enough game time. Some add-ons become contested: "was that a competitive appearance?" "Did that trophy trigger the clause?" "Was relegation a force majeure?" Clubs have gone to independent arbitration over disputed add-ons. The buying club, aware of the add-on structure, may also manage a player differently — being careful around appearance thresholds if the player is underperforming. What starts as a financial tool becomes an ongoing monitoring relationship that the two clubs did not expect when they agreed the deal.',
        },
        {
          customerLine: 'Analyse the "loyalty" discourse in football — do clubs and players use this word equally?',
          salespersonStart: 'The concept of loyalty in football is applied asymmetrically — and that asymmetry reveals something important about power —',
          suggestedCompletion: 'The concept of loyalty in football is applied asymmetrically — and that asymmetry reveals something important about power — because clubs can release players, terminate contracts, sell players without consent, and drop them from squads, all without being described as "disloyal." When a player seeks to leave, they are questioned about loyalty. When a club sells a player against their wishes, it is described as a "business decision." The language of loyalty is used to bind players to clubs while freeing clubs from the same obligation. Players are expected to say: "I gave everything for this club. I have nothing but respect for everyone here." The formula is fixed: affection + career justification + no criticism. Clubs, in return, issue a statement thanking the player for their service and wishing them well — however the departure actually unfolded. The discourse of loyalty in football is partly genuine — players do love their clubs — and partly a management of public perception in which the diplomatic language conceals the commercial reality underneath.',
        },
      ],
    },
  },
};
