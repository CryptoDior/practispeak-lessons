import { Lesson } from '@/types/lesson';

export const c1ClubOwnershipAndFinance: Lesson = {
  slug: 'c1-club-ownership-and-finance',
  title: 'Club Ownership and Finance',
  subtitle: 'Unit 4 — Football Business & Politics',
  level: 'C1-C2',
  description: 'Modern football clubs are billion-pound businesses. Understanding how clubs are owned, financed, and regulated is essential for anyone who wants to discuss the game at the highest level. Learn the vocabulary of football economics.',
  heroImage: '/images/club-ownership.png',

  warmUp: {
    questions: [
      'Do you know who owns your favourite football club? Has the ownership changed in recent years?',
      'Should there be limits on how much a wealthy owner can spend on players? Why or why not?',
      'What do you think the relationship should be between a football club and the community around it?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Expressing obligation and regulation — must, have to, be required to',
    description: 'Football finance is governed by rules and regulations. When discussing what clubs must or are not allowed to do, use these precise structures: Strong obligation (rules): "Clubs must submit their accounts to UEFA annually." External requirement: "Clubs are required to break even over a rolling three-year period." Prohibition: "Clubs are not permitted to spend more than a set percentage of revenue on wages." Consequence of breach: "Clubs that breach Financial Fair Play regulations may face transfer bans or points deductions." Using the right modal signals whether a rule is absolute, recommended, or conditional.',
    positiveExamples: [
      { sentence: 'Clubs are required to demonstrate financial sustainability under UEFA\'s new regulations.', note: '"required to" = formal external obligation — regulatory language' },
      { sentence: 'Clubs that breach spending rules may be excluded from European competition.', note: '"may be" = conditional consequence — not certain, but possible under the rules' },
      { sentence: 'Owners must not use club funds for non-football purposes without board approval.', note: '"must not" = strong prohibition — absolute rule' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'TAKEOVER',
      partOfSpeech: 'noun',
      definition: 'When a new person or group buys a controlling interest in a football club — acquiring the power to make major decisions.',
      example: '"The takeover of the club by the consortium was completed after months of negotiations and regulatory approval."',
      imageSlug: '/images/takeover.png',
    },
    {
      word: 'MAJORITY SHAREHOLDER',
      partOfSpeech: 'noun',
      definition: 'A person or organisation that owns more than 50% of a club\'s shares — giving them effective control.',
      example: '"The majority shareholder approved the new stadium project despite significant opposition from minority investors."',
      imageSlug: '/images/majority-shareholder.png',
    },
    {
      word: 'REVENUE',
      partOfSpeech: 'noun',
      definition: 'The total income a club earns — from matchday tickets, broadcasting deals, merchandise, and commercial partnerships.',
      example: '"The club\'s annual revenue exceeded £500 million for the first time — driven primarily by their new shirt sponsorship deal."',
      imageSlug: '/images/revenue.png',
    },
    {
      word: 'FINANCIAL FAIR PLAY',
      partOfSpeech: 'noun',
      definition: 'UEFA\'s regulations requiring clubs to not spend significantly more than they earn — designed to prevent clubs from accumulating unsustainable debt.',
      example: '"The club was found to have breached Financial Fair Play regulations and was banned from European competition for one season."',
      imageSlug: '/images/financial-fair-play.png',
    },
    {
      word: 'AMORTISATION',
      partOfSpeech: 'noun',
      definition: 'The way transfer fees are spread across a player\'s contract in club accounts — a £60m player on a five-year deal costs £12m per year in accounting terms.',
      example: '"Through amortisation, the club was able to spread the cost of the transfer across five seasons rather than recording it all at once."',
      imageSlug: '/images/amortisation.png',
    },
    {
      word: 'CONSORTIUM',
      partOfSpeech: 'noun',
      definition: 'A group of investors or companies acting together to buy or invest in a football club.',
      example: '"The American-led consortium completed their purchase of the club for a reported £2.5 billion."',
      imageSlug: '/images/consortium.png',
    },
    {
      word: 'WAGE BILL',
      partOfSpeech: 'noun',
      definition: 'The total amount a club pays its players and staff in wages — the single largest expense for most professional clubs.',
      example: '"The club\'s wage bill had grown to 92% of revenue — an unsustainable level that required emergency action."',
      imageSlug: '/images/wage-bill.png',
    },
    {
      word: 'SOVEREIGN WEALTH FUND',
      partOfSpeech: 'noun',
      definition: 'A state-owned investment fund — some football club takeovers are backed by sovereign wealth funds from countries like Saudi Arabia, Qatar, or UAE.',
      example: '"The acquisition by the sovereign wealth fund raised questions about the separation between the club and the interests of a foreign government."',
      imageSlug: '/images/sovereign-wealth-fund.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PUMP IN',
      definition: 'To invest large amounts of money into a club — used when an owner provides significant financial backing.',
      example: '"The new owner pumped in £300 million in the first two years — transforming the squad from mid-table to title contenders."',
      imageSlug: '/images/pump-in.png',
    },
    {
      phrase: 'WRITE OFF',
      definition: 'To accept a financial loss and record it in the accounts — when a club decides an asset (e.g. a player) has no remaining value.',
      example: '"The club was forced to write off £25 million after the player\'s career-ending injury — he was still under contract."',
      imageSlug: '/images/write-off-finance.png',
    },
    {
      phrase: 'CASH IN ON',
      definition: 'To sell a player or asset to generate money — often used when a club profits from selling a player at a high valuation.',
      example: '"They cashed in on the striker at the peak of his value — selling him for £80 million three years after buying him for £20 million."',
      imageSlug: '/images/cash-in-on.png',
    },
    {
      phrase: 'RUN INTO',
      definition: 'To encounter financial difficulties — to reach a point of significant financial problems.',
      example: '"The club ran into serious financial difficulties after the collapse of their broadcasting deal."',
      imageSlug: '/images/run-into-finance.png',
    },
    {
      phrase: 'BALANCE THE BOOKS',
      definition: 'To ensure income and expenditure are roughly equal — to manage finances so the club is not spending significantly more than it earns.',
      example: '"The board was under pressure to balance the books after three consecutive seasons of heavy losses."',
      imageSlug: '/images/balance-books.png',
    },
    {
      phrase: 'TAKE ON',
      definition: 'To assume responsibility for debt — when a new owner takes on a club\'s existing financial obligations as part of a takeover.',
      example: '"The new owners agreed to take on the club\'s £200 million debt as part of the acquisition agreement."',
      imageSlug: '/images/take-on-debt.png',
    },
  ],

  onThePitch: {
    instructions: 'Key concepts for discussing football club ownership and finance at C1 level.',
    items: [
      {
        cue: 'The ownership model debate',
        meaning: 'Football clubs operate under several different ownership models — private ownership, fan ownership, state-backed ownership. Each model has different implications for long-term sustainability and for the relationship between the club and its supporters.',
        usage: '"There are essentially three models: private investment — where a wealthy individual or consortium owns the club; fan ownership — where supporters hold a controlling stake, as in the Bundesliga; and state-backed ownership — where a sovereign wealth fund provides essentially unlimited resources. Each model creates different incentives and different problems." Understanding these models is essential for high-level debate.',
        imageSlug: 'otp-ownership-models',
      },
      {
        cue: 'Financial Fair Play and its critics',
        meaning: 'UEFA\'s Financial Fair Play regulations were designed to prevent clubs from spending money they do not have — but critics argue they entrench the advantages of already-wealthy clubs.',
        usage: '"The argument for FFP is straightforward — clubs should not be able to buy success by accumulating unsustainable debt. The argument against is equally clear — FFP protects the established elite and makes it almost impossible for a smaller club to break into the top tier by attracting investment." This is a genuine debate in football governance.',
        imageSlug: 'otp-ffp-debate',
      },
      {
        cue: 'Reading a club\'s financial health',
        meaning: 'Basic financial indicators tell you a lot about a club\'s sustainability: wage-to-revenue ratio, net transfer spend, debt levels, and profit or loss.',
        usage: '"The key indicators are: the wage-to-revenue ratio — anything above 70% is a warning sign; net transfer spend — consistently negative is sustainable, consistently positive requires justification; and the current debt level relative to annual revenue. A club with £500m revenue carrying £200m debt is in a very different position from one with £100m revenue carrying the same debt."',
        imageSlug: 'otp-financial-health',
      },
      {
        cue: 'Discussing a takeover',
        meaning: 'Football club takeovers are complex transactions involving regulatory approval, community consultation, and questions about the new owner\'s intentions and financial standing.',
        usage: '"The key questions in any takeover are: who is the new owner, where does the money come from, what is the long-term plan, and does the acquisition pass the fit and proper person tests required by the football authorities? Historically, some takeovers that looked exciting turned out to be financially catastrophic."',
        imageSlug: 'otp-takeover-debate',
      },
      {
        cue: 'The sportswashing argument',
        meaning: 'Sportswashing is the use of football club ownership to improve a country\'s or individual\'s public image — to distract from negative coverage of human rights records or other issues.',
        usage: '"The sportswashing argument is that states with poor human rights records are using Premier League ownership to improve their international image. The counter-argument is that football\'s global reach necessarily means involvement with imperfect governments, and that engagement is preferable to exclusion. This is a genuinely contested debate with no easy answer."',
        imageSlug: 'otp-sportswashing',
      },
      {
        cue: 'Amortisation explained simply',
        meaning: 'Amortisation is how transfer fees are recorded in club accounts — not all at once, but spread across the player\'s contract. This affects how a club\'s finances appear on paper.',
        usage: '"Amortisation means that a £60 million player bought on a five-year deal costs £12 million per year in accounting terms — not £60 million in year one. This allows clubs to make large transfer investments without recording them as a single catastrophic loss in the year of purchase. It\'s standard accounting practice — but it means transfer spending can be misleading if you only look at the total fee."',
        imageSlug: 'otp-amortisation',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'purple', text: 'The takeover has gone through — how do you see this affecting the club\'s finances?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'The consortium is pumping in £500 million over three years. That\'s transformative — but the key question is the wage bill.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'The wage-to-revenue ratio is already at 85%. Is that sustainable with more investment?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'Not without growing revenue in parallel. They need to balance the books — and that means either selling players or significantly increasing commercial income.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'And UEFA\'s Financial Fair Play regulations?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'That\'s the constraint. They\'re required to demonstrate sustainability over a three-year period. The new owner can pump money in — but not without limit.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'Critics say this is sportswashing by the new ownership group. What\'s your view?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'It\'s a legitimate concern. But football has never been clean on this. The real question is what the authorities are prepared to do about it.' },
  ],

  matchingExercise: [
    { word: 'Takeover', definition: 'When a new person or group buys a controlling interest in a football club' },
    { word: 'Majority shareholder', definition: 'A person or organisation that owns more than 50% of a club\'s shares' },
    { word: 'Revenue', definition: 'The total income a club earns from all its commercial and sporting activities' },
    { word: 'Financial Fair Play', definition: 'UEFA regulations requiring clubs not to spend significantly more than they earn' },
    { word: 'Amortisation', definition: 'The spreading of transfer fees across a player\'s contract in club accounts' },
    { word: 'Consortium', definition: 'A group of investors acting together to buy or invest in a football club' },
    { word: 'Wage bill', definition: 'The total amount a club pays its players and staff in wages' },
    { word: 'Sovereign wealth fund', definition: 'A state-owned investment fund — some use football clubs as investment vehicles' },
  ],

  fillBlankExercise: [
    { before: 'The new owner', answer: 'pumped in', after: '£300 million in the first two years — transforming the squad.' },
    { before: 'They', answer: 'cashed in on', after: 'the striker at peak value — selling him for £80 million.' },
    { before: 'The board was under pressure to', answer: 'balance the books', after: 'after three seasons of heavy losses.' },
    { before: 'The new owners agreed to', answer: 'take on', after: 'the club\'s £200 million debt as part of the acquisition.' },
    { before: 'The club', answer: 'ran into', after: 'serious financial difficulties after the broadcasting deal collapsed.' },
    { before: 'Clubs are', answer: 'required to', after: 'demonstrate financial sustainability under UEFA\'s new regulations.' },
    { before: 'The club was forced to', answer: 'write off', after: '£25 million after the player\'s career-ending injury.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "amortisation" mean in the context of a transfer fee?',
      options: ['Spreading the cost of a transfer across the player\'s contract period in accounting records', 'The percentage of a transfer fee paid to the player\'s agent as commission', 'The process of recouping a transfer fee when a player is sold on to another club'],
      correctIndex: 0,
    },
    {
      question: 'What is the main argument against Financial Fair Play regulations?',
      options: ['They protect already-wealthy clubs and make it almost impossible for smaller clubs to attract investment and compete', 'They do not go far enough and allow clubs to spend far more than they should', 'They only apply to UEFA competitions and therefore have no effect on domestic spending'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "The new owner ___ in £300 million in the first two years."',
      options: ['pumped', 'wrote', 'cashed'],
      correctIndex: 0,
    },
    {
      question: 'What is "sportswashing" in a football context?',
      options: ['Using football club ownership to improve a state\'s or individual\'s public image and distract from human rights issues', 'The process of laundering money through football club transfer transactions', 'A marketing technique that uses sport to promote commercial brands and products'],
      correctIndex: 0,
    },
    {
      question: 'What does a wage-to-revenue ratio above 70% typically indicate?',
      options: ['A potential financial sustainability warning — the club may be spending too much on wages relative to what it earns', 'That a club is performing well commercially and investing appropriately in its squad', 'That the club is in breach of Financial Fair Play and will face automatic sanctions'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each football finance sentence.',
    items: [
      {
        sentence: 'Clubs are ___ to demonstrate financial sustainability over a rolling three-year period.',
        options: ['required', 'expected', 'suggested'],
        correctIndex: 0,
        explanation: '"Required to" is the precise regulatory language — it signals a formal external obligation, not just a recommendation.',
      },
      {
        sentence: 'The club ___ in on the striker at the right moment — selling for £80m after buying for £20m.',
        options: ['cashed', 'pumped', 'wrote'],
        correctIndex: 0,
        explanation: '"Cash in on" means to sell at a high valuation and profit — to take advantage of peak market value.',
      },
      {
        sentence: 'The board needs to ___ the books — revenue and expenditure must come into closer alignment.',
        options: ['balance', 'pump', 'take'],
        correctIndex: 0,
        explanation: '"Balance the books" means to manage finances so income and spending are roughly equal.',
      },
      {
        sentence: 'The new owners agreed to ___ on the existing £200 million debt as part of the deal.',
        options: ['take', 'write', 'run'],
        correctIndex: 0,
        explanation: '"Take on" means to assume responsibility for existing debt — to inherit financial obligations as part of a takeover.',
      },
      {
        sentence: 'The club\'s ___ had grown to 92% of revenue — an unsustainable level requiring urgent action.',
        options: ['wage bill', 'revenue', 'amortisation'],
        correctIndex: 0,
        explanation: 'The wage bill is the total paid in salaries — when it exceeds 70-80% of revenue it signals serious financial risk.',
      },
      {
        sentence: 'Through ___, the £60 million transfer is recorded as £12 million per year over the five-year contract.',
        options: ['amortisation', 'consortium', 'takeover'],
        correctIndex: 0,
        explanation: 'Amortisation spreads the cost of a transfer across the contract period — standard accounting practice in football.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are discussing football club finances. Choose the most analytically informed response.',
      items: [
        {
          customerLine: '"The new owner is amazing — they\'re pumping hundreds of millions into the club!"',
          options: [
            '"It\'s exciting — but the key questions are: where does the money come from, what\'s the long-term plan, and how will they balance the books against Financial Fair Play requirements?"',
            '"Yes, this is brilliant — the more money pumped in, the better the team will become."',
            '"All new owners say that at the start — we\'ll see how long it lasts before they lose interest."',
          ],
          correctIndex: 0,
          explanation: 'Informed analysis asks about sustainability, source of funds, and regulatory compliance — not just the initial excitement of new investment.',
        },
        {
          customerLine: '"Financial Fair Play is great — it stops clubs spending money they don\'t have."',
          options: [
            '"That\'s the argument for it — but critics say it also protects the existing elite and makes it almost impossible for smaller clubs to break through, even with legitimate investment."',
            '"Completely agree — Financial Fair Play is the most important regulation in modern football."',
            '"Financial Fair Play doesn\'t work — clubs always find ways around it."',
          ],
          correctIndex: 0,
          explanation: 'A C1 response acknowledges the argument being made while presenting the counter-argument — showing awareness of the genuine complexity of the debate.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the financial analysis error in this discussion.',
      dialogue: [
        { speaker: 'Pundit', speakerColor: 'orange', text: 'The club spent £60 million on one player — that\'s a massive loss on this season\'s accounts.' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'That\'s £60 million in costs for one player, which will make their losses enormous this year.' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'Financial Fair Play will surely investigate them for this level of spending.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'Actually — amortisation means the £60 million is spread across the player\'s five-year contract.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'So in accounting terms, it costs £12 million per year — not £60 million in year one.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'The club spent £60 million on one player — that\'s a massive loss on this season\'s accounts.',
          correction: 'The club spent £60 million on one player — but through amortisation, that is recorded as £12 million per year in their accounts over the five-year contract, not as a £60 million single-season loss.',
          explanation: 'This is the most common mistake in football finance commentary. Transfer fees are not recorded as a single lump sum in the year of purchase — they are amortised (spread) across the contract period. A £60m player on a 5-year deal costs £12m per accounting year.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the financial analysis sentence at C1 level.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The key question about any new football club takeover is not how much money they\'re planning to spend — it\'s...',
          suggestedCompletion: 'where that money comes from, whether it\'s sustainable over ten years, and whether the new owners pass the fit and proper person tests. Short-term excitement often becomes long-term instability.',
        },
        {
          customerLine: '',
          salespersonStart: 'Financial Fair Play is a genuinely complex regulation because on one hand it promotes sustainability, but on the other hand...',
          suggestedCompletion: 'it effectively protects the established elite clubs and creates an almost insurmountable barrier for smaller clubs trying to compete at the highest level, even when their investment is entirely legitimate.',
        },
        {
          customerLine: '',
          salespersonStart: 'When a club\'s wage bill reaches 90% of revenue, the danger is...',
          suggestedCompletion: 'that any drop in revenue — a failed European campaign, a poor league finish, a commercial deal that does not renew — tips the club into serious financial difficulty very quickly. There is no margin for error.',
        },
      ],
    },
  },
};
