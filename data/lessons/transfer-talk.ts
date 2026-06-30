import { Lesson } from '@/types/lesson';

export const transferTalk: Lesson = {
  slug: 'transfer-talk',
  title: 'Transfer Talk',
  subtitle: 'Signing, selling, loan moves, contracts, and release clauses',
  level: 'A2',
  description: 'Learn the language of the transfer window — how clubs buy, sell, and loan players. Practice using the past simple to talk about completed transfers.',
  heroImage: '/images/transfer-talk-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Past simple — completed transfers',
    description: 'We use the past simple to talk about transfers that are already finished. Many common transfer verbs are irregular — you need to know both the present and past forms.',
    positivePattern: 'Subject + past simple verb + object',
    positiveExample: '"The club signed a new striker last January."',
    negativePattern: 'Subject + did not + base verb + object',
    negativeExample: '"They did not sell their best player in the summer."',
    positiveExamples: [
      { sentence: 'Real Madrid signed him for 80 million euros last summer.', note: '(signed = past simple of "sign")' },
      { sentence: 'The club sold their top scorer to a rival team in January.', note: '(sold = past simple of "sell" — irregular)' },
      { sentence: 'He went on loan to a lower league club for the rest of the season.', note: '(went = past simple of "go" — irregular)' },
      { sentence: 'She agreed a new five-year contract last week.', note: '(agreed = past simple of "agree")' },
    ],
    negativeExamples: [
      { sentence: 'The club did not sign anyone in the January window.', note: '(did not + base verb "sign")' },
      { sentence: 'He did not trigger his release clause — the price was too high.', note: '(did not + base verb "trigger")' },
    ],
  },

  vocabulary: [
    {
      word: 'SIGNING',
      partOfSpeech: 'noun',
      definition: 'A player who has just joined a new club — the act of officially joining.',
      example: 'The new signing arrived at the training ground this morning for his medical.',
      imageSlug: '/images/signing.png',
    },
    {
      word: 'TRANSFER FEE',
      partOfSpeech: 'noun',
      definition: 'The amount of money one club pays another to buy a player.',
      example: 'The transfer fee was 60 million euros — a club record for them.',
      imageSlug: '/images/transfer-fee.png',
    },
    {
      word: 'LOAN',
      partOfSpeech: 'noun',
      definition: 'A temporary move — the player goes to a new club for a fixed period and then returns.',
      example: 'He went on loan to a Championship club to get more first-team experience.',
      imageSlug: '/images/loan.png',
    },
    {
      word: 'CONTRACT',
      partOfSpeech: 'noun',
      definition: 'The official agreement between a player and a club — it states the salary, length, and conditions.',
      example: 'She signed a three-year contract with a one-year extension option.',
      imageSlug: '/images/contract.png',
    },
    {
      word: 'RELEASE CLAUSE',
      partOfSpeech: 'noun',
      definition: 'A set amount written into a contract — if another club pays this amount, the player can leave.',
      example: 'His release clause was 100 million euros — and Barcelona paid it in full.',
      imageSlug: '/images/release-clause.png',
    },
    {
      word: 'TRANSFER WINDOW',
      partOfSpeech: 'noun',
      definition: 'The official period when clubs can buy and sell players — usually summer and January.',
      example: 'The summer transfer window closed at midnight — and the deal did not go through in time.',
      imageSlug: '/images/transfer-window.png',
    },
    {
      word: 'DEADLINE DAY',
      partOfSpeech: 'noun',
      definition: 'The last day of the transfer window — the most dramatic day of the window when last-minute deals happen.',
      example: 'The striker completed his move on deadline day — the paperwork arrived with minutes to spare.',
      imageSlug: '/images/deadline-day.png',
    },
    {
      word: 'FREE TRANSFER',
      partOfSpeech: 'noun',
      definition: 'A transfer where no fee is paid — the player joins a new club for free when their contract has ended.',
      example: 'He joined on a free transfer after his contract expired — a fantastic deal for the buying club.',
      imageSlug: '/images/free-transfer.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SIGN FOR [CLUB]',
      definition: 'To officially join a new club by putting your name on a contract.',
      example: 'She signed for Chelsea last Tuesday and held up the shirt for the cameras.',
      imageSlug: '/images/sign-for-club.png',
    },
    {
      phrase: 'SELL [PLAYER] TO [CLUB]',
      definition: 'To transfer a player to another club in exchange for a fee.',
      example: 'United sold him to City for 45 million — a profit of 30 million on what they paid.',
      imageSlug: '/images/sell-player-to-club.png',
    },
    {
      phrase: 'GO ON LOAN TO [CLUB]',
      definition: 'To temporarily move to another club for a fixed period.',
      example: 'He went on loan to Real Betis for the second half of the season to get playing time.',
      imageSlug: '/images/go-on-loan.png',
    },
    {
      phrase: 'TRIGGER A RELEASE CLAUSE',
      definition: 'To pay the exact amount stated in a player\'s contract to force their club to sell.',
      example: 'Barcelona triggered his release clause in July — the selling club had no choice but to let him go.',
      imageSlug: '/images/trigger-a-release-clause.png',
    },
    {
      phrase: 'PASS A MEDICAL',
      definition: 'To successfully complete the health tests a club runs on a player before finalising a transfer.',
      example: 'He passed his medical on Monday morning — the deal was confirmed by lunchtime.',
      imageSlug: '/images/pass-a-medical.png',
    },
    {
      phrase: 'AGREE PERSONAL TERMS',
      definition: 'To reach agreement on salary, contract length, and other personal conditions with a new club.',
      example: 'The two clubs agreed on the fee, and the player then agreed personal terms — a three-year deal.',
      imageSlug: '/images/agree-personal-terms.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases fans and journalists use when talking about transfers.',
    items: [
      {
        cue: "He's done a deal!",
        meaning: 'The transfer is confirmed — the player has officially moved clubs.',
        usage: 'Used when a transfer is finally completed. "Deal" refers to the transfer agreement between the clubs. Fans use this informally to celebrate or react to a confirmed signing.',
        imageSlug: 'otp-hes-done-a-deal',
      },
      {
        cue: 'Where did he sign?',
        meaning: 'Which club did the player move to?',
        usage: 'A simple question fans ask when they hear a player has moved but do not know the destination yet. "Sign" here means sign a contract — to officially join a new club.',
        imageSlug: 'otp-where-did-he-sign',
      },
      {
        cue: 'They sold him too cheap!',
        meaning: 'The selling club accepted too low a transfer fee for that player.',
        usage: 'Said when fans believe the transfer fee did not reflect the player\'s true value. "Cheap" refers to the price, not the player. A common complaint after big sales.',
        imageSlug: 'otp-they-sold-him-too-cheap',
      },
      {
        cue: 'He\'s on loan until January.',
        meaning: 'The player is temporarily at this club — they will return to their parent club in January.',
        usage: 'Standard phrase describing a loan move with a specific end date. "On loan" is the fixed phrase for a temporary transfer. The player does not permanently belong to the loan club.',
        imageSlug: 'otp-hes-on-loan-until-january',
      },
      {
        cue: 'The window slams shut!',
        meaning: 'The transfer window has closed — no more deals can be made until the next window.',
        usage: 'Dramatic phrase used by journalists and commentators at the end of the transfer window. "Slams shut" suggests a door closing very suddenly. It adds excitement and drama to deadline day.',
        imageSlug: 'otp-the-window-slams-shut',
      },
      {
        cue: 'He came through on a free!',
        meaning: 'The club signed the player on a free transfer — they paid no fee.',
        usage: 'Said when a player joins without a transfer fee — usually because their previous contract expired. A free transfer is excellent business for the buying club as they only pay wages.',
        imageSlug: 'otp-he-came-through-on-a-free',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right — big news. Our star midfielder left the club last week. Did you all see the announcement?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Yes! He [[signed for:officially joined by putting his name on a contract]] a Spanish club. What was the [[transfer fee:the amount of money one club pays another to buy a player]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I read it was 55 million euros. But he still had two years on his [[contract:the official agreement between a player and a club]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. The buying club [[triggered his release clause:paid the exact amount written in his contract to force the sale]] — so the club had no choice but to sell.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Did he [[pass his medical:successfully complete the health tests before the transfer was confirmed]]? Sometimes these deals fall apart at the last moment.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes — he passed his medical on Thursday morning and the deal was done before the [[transfer window:the official period when clubs can buy and sell players]] closed.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Will the club sign someone new to replace him? Or will they [[go on loan:temporarily move a player from another club for a fixed period]]?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'They brought in a young midfielder on [[loan:a temporary move — the player returns to their parent club at the end]] from City. No permanent signing this window.',
    },
  ],

  matchingExercise: [
    { word: 'SIGNING', definition: 'A player who has just joined a new club' },
    { word: 'TRANSFER FEE', definition: 'The money one club pays another to buy a player' },
    { word: 'LOAN', definition: 'A temporary move — the player returns at the end of the period' },
    { word: 'CONTRACT', definition: 'The official agreement between a player and a club' },
    { word: 'RELEASE CLAUSE', definition: 'A set amount in a contract — if paid, the player can leave' },
    { word: 'TRANSFER WINDOW', definition: 'The official period when clubs can buy and sell players' },
    { word: 'DEADLINE DAY', definition: 'The last day of the transfer window — last-minute deals happen' },
    { word: 'FREE TRANSFER', definition: 'A move where no fee is paid — the player was out of contract' },
  ],

  fillBlankExercise: [
    { before: 'The buying club paid 70 million euros — a new club record', answer: 'transfer fee', after: '.' },
    { before: 'He joined on a', answer: 'free transfer', after: '— his contract at the old club had expired.' },
    { before: 'She went on', answer: 'loan', after: 'to a lower division club to get more playing time.' },
    { before: 'The deal was confirmed on', answer: 'deadline day', after: '— the paperwork arrived with minutes to spare.' },
    { before: 'Barcelona', answer: 'triggered his release clause', after: 'and the club had no choice but to sell him.' },
    { before: 'He agreed a new five-year', answer: 'contract', after: 'with a significant pay rise.' },
    { before: 'The summer', answer: 'transfer window', after: 'closes at 11pm — no deals can happen after that.' },
    { before: 'The new', answer: 'signing', after: 'arrived at the training ground for his first session this morning.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A player "went on loan to Sevilla." What does this mean?',
      options: [
        'He permanently joined Sevilla after they paid a transfer fee',
        'He temporarily moved to Sevilla — he will return to his parent club later',
        'He played for Sevilla in a friendly match',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which past simple verb is correct? "The club _____ their striker for 40 million euros."',
      options: ['sell', 'sold', 'selling'],
      correctIndex: 1,
    },
    {
      question: 'What is a "release clause"?',
      options: [
        'A penalty for a player who leaves a club without permission',
        'A set amount in a player\'s contract — if another club pays it, the player can leave',
        'A clause that releases a player from a loan deal early',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "he came through on a free" mean?',
      options: [
        'He joined the club without paying — a supporter ticket',
        'The club signed him without paying a transfer fee',
        'He was released from his contract for free',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is correct past simple negative?',
      options: [
        'The club did not signed anyone.',
        'The club did not sign anyone.',
        'The club not signed anyone.',
      ],
      correctIndex: 1,
    },
    {
      question: '"He passed his medical." When does this happen in a transfer?',
      options: [
        'Before the clubs agree on the transfer fee',
        'After clubs agree the fee but before the deal is officially confirmed',
        'After the player signs the contract',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "deadline day"?',
      options: [
        'The first day of the transfer window when deals open',
        'The last day of the transfer window when no more deals can happen after midnight',
        'The day a player signs a new contract extension',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which past simple form is correct? "She _____ a three-year contract with the club."',
      options: ['sign', 'signed', 'signs'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence. Use the past simple correctly.',
    items: [
      {
        sentence: 'Barcelona _____ his release clause and the club had no choice but to let him go.',
        options: ['trigger', 'triggered', 'triggering'],
        correctIndex: 1,
        explanation: '"Triggered" is correct — past simple of "trigger." We use past simple because this is a completed action in the past. "Trigger" is the base form (present). "Triggering" is a gerund/participle — not correct here without an auxiliary verb.',
      },
      {
        sentence: 'She _____ for Arsenal last Tuesday and held up the shirt for the cameras.',
        options: ['sign', 'signing', 'signed'],
        correctIndex: 2,
        explanation: '"Signed" is correct — past simple of "sign." "Last Tuesday" tells us this is finished past action. "Sign" is the base form. "Signing" needs an auxiliary like "is" or "was" — "she is signing" or "she was signing" — neither of those fits here.',
      },
      {
        sentence: 'The club _____ him to a rival for 50 million — a huge profit on what they paid.',
        options: ['sell', 'sold', 'sells'],
        correctIndex: 1,
        explanation: '"Sold" is correct — the irregular past simple of "sell." "Sell" is the base form (present tense). "Sells" is third person present simple — "the club sells" would be present tense, not past. Sold / sell / sold is an irregular verb pattern.',
      },
      {
        sentence: 'He did not _____ his medical — the deal collapsed on deadline day.',
        options: ['pass', 'passed', 'passing'],
        correctIndex: 0,
        explanation: '"Pass" is correct. After "did not", we always use the base form of the verb — not the past simple or -ing form. "Did not pass" = negative past simple. "Did not passed" is a very common mistake — never add -ed after "did not."',
      },
      {
        sentence: 'The summer transfer window _____ at 11pm — and they did not make a single signing.',
        options: ['close', 'closes', 'closed'],
        correctIndex: 2,
        explanation: '"Closed" is correct — past simple of "close." The sentence describes a completed event in the past (the window closing). "Closes" is present simple. "Close" is the base form. The context (the window did or did not make a signing) clearly sets this in the past.',
      },
      {
        sentence: 'She _____ on loan to a Spanish club for six months to get more first-team experience.',
        options: ['goes', 'went', 'go'],
        correctIndex: 1,
        explanation: '"Went" is correct — the irregular past simple of "go." "Go on loan" is the standard phrase. "Goes" is present simple. "Go" is the base form. Went / go / gone is one of the most common irregular verbs in English.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and choose the best response.',
      items: [
        {
          customerLine: 'A friend asks: "What is the difference between a transfer and a loan?" What is the best answer?',
          options: [
            '"A transfer means the player moves permanently — the buying club pays a fee and the player belongs to them. A loan is temporary — the player goes to a new club for a fixed period and then returns to their original club."',
            '"A transfer is when a player signs for free. A loan is when a player is paid to move."',
            '"They are the same — both mean the player moves to a new club."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. A transfer is permanent — the player belongs to the new club. A loan is temporary — the player returns to their parent club. The key distinction is permanent vs. temporary.',
        },
        {
          customerLine: 'Someone says: "Why do release clauses exist? Can\'t clubs just refuse to sell?" What is the best explanation?',
          options: [
            '"Release clauses exist so players can leave for free whenever they want."',
            '"Release clauses are written into contracts as a fixed price — if another club pays that amount, the selling club cannot refuse. It protects players who want to move to a bigger club."',
            '"Release clauses mean the player can cancel their contract without paying anything."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A release clause is a pre-agreed price in the contract — if paid, the club cannot refuse. It gives the player a guaranteed exit route at a known price. Without it, the club controls whether the player can leave.',
        },
        {
          customerLine: 'A teammate says: "He joined on a free transfer — that\'s bad for him, right?" How do you respond?',
          options: [
            '"Yes — it means he is not good enough for anyone to pay a fee for him."',
            '"Not necessarily. A free transfer happens when a player\'s contract has ended. The buying club pays no fee but usually offers the player a strong salary — it can be a great deal for everyone."',
            '"Yes — he will earn much less money on a free transfer."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A free transfer simply means the player\'s contract expired — it says nothing about quality. Many top players have moved on free transfers. The selling club gets nothing but the buying club saves on the fee and often pays the player a good salary as a result.',
        },
        {
          customerLine: 'Someone asks: "Why is deadline day so exciting?" What is the best answer?',
          options: [
            '"Because it is the day clubs announce their new kits and sponsor deals."',
            '"Because it is the last day of the transfer window — clubs and players rush to complete deals before midnight. Last-minute transfers, collapsed deals, and surprise signings all happen on deadline day."',
            '"Because all clubs must spend money on deadline day or lose their transfer budget."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Deadline day is the last chance to complete transfers — the pressure and urgency create drama. Deals that seemed impossible happen, and deals that seemed certain collapse. It is the most unpredictable day in football.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this transfer news update. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Big news — the club sell their striker last night for 40 million.' },
        { speaker: 'Ronaldo', text: 'Really? Did he signed for a Premier League club?' },
        { speaker: 'Sofia', text: 'Yes — he signed for Arsenal. He passed his medical and agreed personal terms yesterday.' },
        { speaker: 'Ronaldo', text: 'That\'s fast. The window closes tomorrow night so they needed to move quickly.' },
        { speaker: 'Sofia', text: 'Exactly. And the club did not bought anyone to replace him yet.' },
        { speaker: 'Ronaldo', text: 'They still have until midnight tomorrow — deadline day is always crazy. Anything can happen.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'the club sell their striker last night',
          correction: 'the club sold their striker last night',
          explanation: '"Last night" tells us this is in the past — we need the past simple. "Sell" is the present/base form. The past simple of "sell" is "sold" (irregular). Always check the time reference — "last night", "yesterday", "in January" all signal past simple.',
        },
        {
          lineIndex: 1,
          incorrectText: 'Did he signed for',
          correction: 'Did he sign for',
          explanation: 'In questions with "did", we use the BASE form of the verb — not the past simple. "Did he signed" is a very common mistake. Correct: "Did he sign?" The "did" already shows past tense — the main verb returns to its base form.',
        },
        {
          lineIndex: 4,
          incorrectText: 'the club did not bought anyone',
          correction: 'the club did not buy anyone',
          explanation: 'After "did not", we always use the BASE form — not the past simple. "Did not bought" is wrong. Correct: "did not buy." The same rule applies to questions: "did he sign" not "did he signed." "Did" carries the past tense — the main verb goes back to base form.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the sentence about transfers. Use vocabulary and grammar from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Why do clubs spend so much money in the transfer window? Is it worth it?',
          salespersonStart: 'Coach Diallo: It depends on the signing.',
          suggestedCompletion: 'A good signing can transform a club — the right player in the right position can win you a title. But transfer fees have become very high, and many big-money signings do not perform as expected. A free transfer who performs well is often better value than an expensive signing who does not settle. The best clubs sign players at the right time and sell players at the right time too — they buy low and sell high.',
        },
        {
          customerLine: 'Sofia: What is the difference between agreeing personal terms and passing a medical?',
          salespersonStart: 'Coach Diallo: They are two separate stages of the transfer process.',
          suggestedCompletion: 'First, the two clubs agree on the transfer fee. Then the player agrees personal terms with the new club — his salary, contract length, bonus structure. Finally, the player completes a medical — doctors check his fitness and injury history. If he passes the medical, the deal is done. If he fails the medical, the buying club can reduce the fee or cancel the deal completely. Medical failures are rare but they do happen.',
        },
        {
          customerLine: 'Ronaldo: Can a club refuse to sell a player even if another club offers a huge fee?',
          salespersonStart: 'Coach Diallo: In most cases, yes — unless there is a release clause in the contract.',
          suggestedCompletion: 'Without a release clause, the selling club controls whether the player leaves. They can reject any offer, no matter how high. With a release clause, the club must sell if another club pays that exact amount. This is why players and their agents try to include release clauses in contracts — it gives the player more control over their future. Some clubs refuse to include release clauses for their best players because they do not want to lose them.',
        },
        {
          customerLine: 'Sofia: What happens if a transfer is not completed before the window closes?',
          salespersonStart: 'Coach Diallo: The player must stay at their current club until the next window opens.',
          suggestedCompletion: 'If the paperwork is not submitted before the deadline, the deal is dead — it does not matter how close it was. The player stays at the current club, which can cause problems if they had agreed to leave. Sometimes deals collapse on deadline day because of delays with paperwork, disagreements over final contract details, or failed medicals. It is very stressful for everyone involved — clubs, players, and fans.',
        },
      ],
    },
  },
};
