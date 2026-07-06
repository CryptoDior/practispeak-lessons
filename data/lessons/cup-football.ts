import { Lesson } from '@/types/lesson';

export const cupFootball: Lesson = {
  slug: 'cup-football',
  title: 'Cup Football',
  subtitle: 'Knockout rounds, upsets, away goals, and giant-killings',
  level: 'B1-B2',
  description: 'Cup football is different from the league — one mistake and you are out. In this lesson you will learn the vocabulary of knockout football, upsets, replays, and the second conditional grammar that fans use to imagine what could have happened differently.',
  heroImage: '/images/cup-football-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Second conditional — imagining different outcomes in cup football',
    description: 'The second conditional talks about imaginary or unlikely situations in the present or future. It is very common in football when fans and pundits discuss "what if" scenarios — what would have happened if a penalty had been given, if a player had not been injured, if the draw had been different.',
    positivePattern: 'IF + past simple, WOULD + base verb. (Imaginary situation now or in the future)',
    positiveExample: '"If they had a better striker, they would win more cup games." (They don\'t have a better striker — this is imaginary.)',
    negativePattern: 'Do NOT use "would" in the "if" clause. Do NOT confuse with first conditional (real/likely situations).',
    negativeExample: 'WRONG: "If they would have a better striker, they would win more." → RIGHT: "If they had a better striker, they would win more." WRONG (using first conditional for imaginary): "If they have a good draw, they will go far." (real possibility) → CORRECT second conditional: "If they had a good draw, they would go far." (imaginary)',
    positiveExamples: [
      { sentence: '"If the penalty hadn\'t been missed, they would be in the final."', note: '(It was missed — this is imaginary. Past simple "hadn\'t been missed" + would + base verb "be")' },
      { sentence: '"If they drew a lower-league side in the next round, they would have a good chance."', note: '(The draw hasn\'t happened yet — imagining a favourable scenario.)' },
      { sentence: '"If the away goals rule were still in place, they would be out of the competition."', note: '(It is no longer in place — imagining the old rule applying.)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "If they would play better in cups, they would win one." → RIGHT: "If they played better in cups, they would win one."', note: 'Never use "would" in the if-clause — past simple only.' },
      { sentence: 'WRONG: "If the referee gives a red card, they would be in trouble." (mixed tenses) → RIGHT: "If the referee gave a red card, they would be in serious trouble."', note: 'Both clauses must follow the pattern: past simple + would + base verb.' },
    ],
  },

  vocabulary: [
    {
      word: 'KNOCKOUT',
      partOfSpeech: 'adjective',
      definition: 'A competition format where the loser of each match is immediately eliminated — one defeat and you are out.',
      example: '"The cup uses a knockout format — lose once and you\'re done. There\'s no second chance like in the league."',
      imageSlug: '/images/knockout.png',
    },
    {
      word: 'GIANT-KILLING',
      partOfSpeech: 'phrase',
      definition: 'When a small, lower-league team beats a much bigger, stronger team in a cup match — a major upset.',
      example: '"It was the greatest giant-killing in cup history — a sixth-division team beating the champions of Europe."',
      imageSlug: '/images/giant-killing.png',
    },
    {
      word: 'UPSET',
      partOfSpeech: 'noun',
      definition: 'A surprising result where the weaker team wins — the expected outcome does not happen.',
      example: '"Nobody predicted that result — it was one of the biggest upsets of the cup campaign."',
      imageSlug: '/images/upset.png',
    },
    {
      word: 'REPLAY',
      partOfSpeech: 'noun',
      definition: 'A second match played because the first match ended in a draw — to decide who goes through.',
      example: '"The first match ended 1-1 so there will be a replay at the other team\'s ground next week."',
      imageSlug: '/images/cup-football-replay.png',
    },
    {
      word: 'AGGREGATE',
      partOfSpeech: 'noun',
      definition: 'The combined total score across two matches (home and away legs). Used in two-legged ties.',
      example: '"They lost 2-1 at home but won 3-0 away — they go through 4-2 on aggregate."',
      imageSlug: '/images/cup-football-aggregate.png',
    },
    {
      word: 'EXTRA TIME',
      partOfSpeech: 'phrase',
      definition: 'Two additional 15-minute periods played if a cup match is still level after 90 minutes.',
      example: '"It was still 1-1 after 90 minutes — the match went to extra time and they scored the winner in the 108th minute."',
      imageSlug: '/images/cup-football-extra-time.png',
    },
    {
      word: 'PENALTY SHOOTOUT',
      partOfSpeech: 'phrase',
      definition: 'When teams take turns shooting from the penalty spot to decide a cup tie that is still level after extra time.',
      example: '"The penalty shootout went to sudden death — five perfect penalties each before they finally won it."',
      imageSlug: '/images/cup-football-penalty-shootout.png',
    },
    {
      word: 'THE DRAW',
      partOfSpeech: 'phrase',
      definition: 'The process of randomly selecting which teams will play each other in the next round of a cup competition.',
      example: '"Everyone waits for the draw — a home match against a lower-league side would be the perfect result."',
      imageSlug: '/images/the-draw.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GO OUT',
      definition: 'To be eliminated from a cup competition — to lose a match and exit the tournament.',
      example: '"They went out in the third round — a giant-killing by a non-league side. Absolutely humiliating."',
      imageSlug: '/images/go-out.png',
    },
    {
      phrase: 'KNOCK OUT',
      definition: 'To eliminate another team from the cup — to beat them and send them out of the competition.',
      example: '"They knocked out the holders in the quarter-final — one of the biggest results in their history."',
      imageSlug: '/images/knock-out.png',
    },
    {
      phrase: 'SCRAPE THROUGH',
      definition: 'To barely survive and progress to the next round — to win narrowly or with difficulty.',
      example: '"They scraped through the first round — 1-0 against a part-time side. It should have been much easier."',
      imageSlug: '/images/scrape-through.png',
    },
    {
      phrase: 'HOLD ON',
      definition: 'To defend and protect a lead until the final whistle — to resist pressure and not concede.',
      example: '"They scored in the 89th minute and held on for the last three minutes — the fans were on the edge of their seats."',
      imageSlug: '/images/cup-football-hold-on.png',
    },
    {
      phrase: 'COME FROM BEHIND',
      definition: 'To score after being losing — to recover from a deficit and equalise or win.',
      example: '"They came from behind twice in the same game to win 3-2 — an incredible cup performance."',
      imageSlug: '/images/cup-football-come-from-behind.png',
    },
    {
      phrase: 'PUT THROUGH',
      definition: 'To advance a team to the next round — "put them through" means a goal or performance that secured progression.',
      example: '"A last-minute penalty put them through to the semi-final — the crowd went wild."',
      imageSlug: '/images/put-through.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key phrases and concepts used in cup football analysis.',
    items: [
      {
        cue: 'The magic of the cup',
        meaning: 'The special excitement of cup football — the upsets, drama, and unpredictability that make cups so different from league football.',
        usage: '"The magic of the cup" is almost a cliché in English football — but it is used everywhere. It refers to the romantic idea that anything can happen in a cup match: a non-league team can beat a Premier League club, a last-minute goal can change everything, a penalty shootout can decide a season. It captures everything special about knockout football. When a giant-killing happens, you will always hear: "That\'s the magic of the cup."',
        imageSlug: 'otp-magic-of-the-cup',
      },
      {
        cue: 'Two-legged tie / home and away legs',
        meaning: 'A cup match played over two games — once at each team\'s ground. The team with the better aggregate score goes through.',
        usage: 'Many cup competitions (Champions League, domestic cups) use two-legged ties in later rounds. "First leg" = the first match. "Second leg" = the return match. "Away leg" = the match at the opponent\'s ground. "Aggregate" = combined score across both matches. "Going into the second leg trailing 2-1" = losing after the first match. Key tactical note: scoring an away goal (in the opponent\'s stadium) was historically more valuable, though the away goals rule has been removed from many competitions.',
        imageSlug: 'otp-two-legged-tie',
      },
      {
        cue: 'Minnows / non-league side',
        meaning: 'Very small, low-level football clubs — often part-time or amateur — who play in cup competitions against professional teams.',
        usage: '"Minnows" = a very small team — a small fish compared to the big clubs. "Non-league" = not in the main football league structure. In the FA Cup, non-league sides can enter early rounds and sometimes progress to face Premier League clubs. "Non-league minnows knock out Premier League giants" is the classic giant-killing headline. "Part-time" is also used: "a part-time side from the sixth division."',
        imageSlug: 'otp-minnows',
      },
      {
        cue: 'The holders',
        meaning: 'The team that won the cup last year — they hold the trophy and must defend their title.',
        usage: '"The holders" = last year\'s winners. They enter the competition as favourites or with extra pressure: "The holders were knocked out in the quarter-finals — a huge shock." Also: "the defending champions" in league football. In cup football: "the cup holders" or simply "the holders." Every year, the holders are the team everyone wants to beat.',
        imageSlug: 'otp-the-holders',
      },
      {
        cue: 'Penalty shootout language',
        meaning: 'The dramatic vocabulary used when a cup tie is decided by penalty kicks.',
        usage: '"Step up" = the player walks to the penalty spot to take their kick. "Blazed over" = kicked the ball far too high. "Saved" = the goalkeeper stopped it. "Sudden death" = after the initial five penalties each, each subsequent penalty is immediately decisive — score and the other team must also score, or it is over. "Slotted home" or "converted" = scored the penalty successfully. Penalty shootouts have their own narrative arc — and their own vocabulary.',
        imageSlug: 'otp-penalty-shootout-language',
      },
      {
        cue: 'A favorable / difficult draw',
        meaning: 'When teams react to finding out who they will play in the next round — a "good draw" means an easy opponent.',
        usage: '"The draw" = the random process of pairing teams for the next round. "A favorable draw" = the team got an easier opponent — lower-ranked, away from home for the big team. "A difficult draw" = the team faces a strong opponent. "They were handed a home tie against a Championship side — a very favorable draw." The draw is often a major news event: fans and managers react immediately to who they have been drawn against.',
        imageSlug: 'otp-favourable-draw',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Cup football — pure [[knockout:a competition format where the loser is immediately eliminated]]. If you lose, you go home. No second chances. What would be different if the cup used a league format instead?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'If it used a league format, there would be far fewer [[upset:a surprising result where the weaker team wins]]s. The better team would always win in the end. The [[giant-killing:when a small team beats a much bigger team — a major upset]] moments would almost disappear. That\'s why the [[replay:a second match played because the first ended in a draw]] system creates drama too — an extra game gives the smaller team another chance.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Now — a two-legged tie. First leg: your team is away, loses 2-1. Second leg is at home. What is the situation? What do you need?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'We are losing 2-1 on [[aggregate:the combined score across two matches]]. We need to score at least two goals at home and not concede. If we scored 1-0, we\'d be level on aggregate — then [[extra time:two additional 15-minute periods if still level after 90 minutes]] or a [[penalty shootout:taking turns shooting from the spot to decide the tie]] could decide it.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And if the first leg had been at home — if you had played at home first — how would that change your strategy?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'If we played at home first, we would try to build a good lead before the away leg. Scoring an away goal in the second leg would also be very valuable — if you could [[come from behind:to score after being losing — to recover from a deficit]] and score away, that puts huge pressure on the opponent.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. Now — [[the draw:the random process of selecting which teams will play each other]]. You are the manager of a Premier League team. It\'s the third round. What would be the ideal draw?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'If I could choose, I would want a home match against a [[non-league side:very small, part-time clubs who play in cup competitions against professional teams]] — the [[minnows:very small teams, like small fish compared to big clubs]]. But as a fan, I\'d love a giant-killing! If the minnows won, that would be the magic of the cup — and that\'s what the cup is all about.',
    },
  ],

  matchingExercise: [
    { word: 'KNOCKOUT', definition: 'A competition format where losing one match means elimination' },
    { word: 'GIANT-KILLING', definition: 'When a small team beats a much bigger team — a major cup upset' },
    { word: 'AGGREGATE', definition: 'The combined total score across both legs of a two-legged tie' },
    { word: 'REPLAY', definition: 'A second match played because the first game ended in a draw' },
    { word: 'EXTRA TIME', definition: 'Two additional 15-minute periods if the match is level after 90 minutes' },
    { word: 'PENALTY SHOOTOUT', definition: 'Taking turns shooting from the spot to decide a tie after extra time' },
    { word: 'THE HOLDERS', definition: 'The team that won the cup the previous year' },
    { word: 'MINNOWS', definition: 'Very small, lower-league clubs in a cup competition' },
  ],

  fillBlankExercise: [
    { before: 'If they had a better keeper, they', answer: 'would win', after: 'more penalty shootouts — he saved none this season.' },
    { before: 'They', answer: 'went out', after: 'in the third round — a giant-killing by a non-league side. Humiliating.' },
    { before: 'They lost the first leg 2-0 but won 3-0 away — they went through 3-2 on', answer: 'aggregate', after: '.' },
    { before: 'The', answer: 'draw', after: 'was very kind — a home match against a Championship side in the next round.' },
    { before: 'They', answer: 'scraped through', after: 'the first round — barely won 1-0 against a part-time seventh-division side.' },
    { before: 'If the penalty', answer: 'hadn\'t been missed', after: ', they would have won in normal time — no extra time needed.' },
    { before: 'The non-league minnows', answer: 'knocked out', after: 'the Premier League holders in one of the greatest upsets ever.' },
    { before: 'They were 2-0 down but managed to', answer: 'come from behind', after: 'and win 3-2 — an incredible cup comeback.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"If they had a stronger squad, they would go further in the cup." What type of conditional is this?',
      options: [
        'First conditional — a real, likely future situation.',
        'Second conditional — an imaginary or unlikely situation.',
        'Third conditional — talking about the past that cannot be changed.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They went out in the quarter-final." What does "went out" mean?',
      options: [
        'They left the stadium after the match.',
        'They were eliminated from the cup competition.',
        'They played an away match at the opponent\'s ground.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Team A wins the first leg 3-1. Team B wins the second leg 2-0. Who goes through?',
      options: [
        'Team B — they won the second leg.',
        'Team A — they go through 3-2 on aggregate.',
        'Neither — it goes to extra time.',
      ],
      correctIndex: 1,
    },
    {
      question: '"That\'s the magic of the cup." When would you say this?',
      options: [
        'When the favourites win easily, as expected.',
        'When a small team produces a giant-killing or dramatic upset.',
        'When a match is decided by a penalty shootout.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which second conditional sentence is grammatically CORRECT?',
      options: [
        '"If they would have a better draw, they would go further."',
        '"If they had a better draw, they would go further."',
        '"If they have a better draw, they will go further."',
      ],
      correctIndex: 1,
    },
    {
      question: '"They scraped through the first round." What does this mean?',
      options: [
        'They won the first round very easily — a comfortable victory.',
        'They barely survived and progressed — won narrowly with difficulty.',
        'They exited the cup in the first round after a close defeat.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The holders were knocked out in the third round." Who are "the holders"?',
      options: [
        'The players who hold the ball during a set-piece.',
        'The team that won the cup last year and is defending their title.',
        'The players who hold the opposition during defensive plays.',
      ],
      correctIndex: 1,
    },
    {
      question: '"If the draw gave us a home match, the fans would be delighted." What is the speaker imagining?',
      options: [
        'The draw has already happened and they got a home match.',
        'A favourable draw scenario that has not happened yet.',
        'A past draw that cannot be changed.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each second conditional sentence about cup football.',
    items: [
      {
        sentence: '"If the replay _____ at our ground, we would have a much better chance of going through."',
        options: ['were', 'would be', 'is'],
        correctIndex: 0,
        explanation: '"Were" is correct — second conditional uses past simple in the "if" clause. "If the replay were at our ground" = imagining a situation that hasn\'t been decided yet (or is unlikely to happen as we wish). "Would be" is wrong — never use "would" in the if-clause of a second conditional. "Is" makes it a first conditional ("if the replay is at our ground, we will have a better chance") — which works for real situations but is not the second conditional pattern.',
      },
      {
        sentence: '"If they scored in the first leg away, they _____ in a very strong position for the second leg."',
        options: ['would be', 'will be', 'would have been'],
        correctIndex: 0,
        explanation: '"Would be" is correct — the main clause of a second conditional uses "would + base verb." "Would be" = imagining the result if the away goal were scored (perhaps it has not happened yet). "Will be" makes it first conditional — real/certain future. "Would have been" is third conditional — referring to a past situation that cannot be changed. Since this is an imaginary present/future scenario ("if they scored"), the correct pattern is "would be."',
      },
      {
        sentence: '"If the _____ rule were still in place, United would be out — they only drew 1-1 away."',
        options: ['away goals', 'penalty shootout', 'aggregate'],
        correctIndex: 0,
        explanation: '"Away goals" is correct. The away goals rule gave extra value to goals scored at the opponent\'s ground — if teams were level on aggregate, the team with more away goals went through. Many competitions have abolished this rule. "If the away goals rule were still in place" = second conditional imagining the old rule applying. "Penalty shootout" is not a rule in the same way. "Aggregate" is not a rule — it is the scoring system. The "away goals rule" was the specific regulation being imagined here.',
      },
      {
        sentence: '"What would happen if the match _____ level after extra time?"',
        options: ['were still', 'would still be', 'is still'],
        correctIndex: 0,
        explanation: '"Were still" is correct — second conditional, past simple in the if-clause: "if the match were still level." "Would still be" is wrong — "would" cannot go in the if-clause of a conditional. "Is still" is first conditional — real/certain situation. Since this is a hypothetical question ("what would happen?"), the second conditional is needed: "What would happen if the match were still level? → It would go to a penalty shootout." The imaginary scenario is framed with "were" because the match may not be level — this is speculation.',
      },
      {
        sentence: '"If a non-league side beat us, it _____ the biggest giant-killing in our history."',
        options: ['would be', 'will be', 'would have been'],
        correctIndex: 0,
        explanation: '"Would be" is correct — second conditional main clause for an imaginary future scenario. The non-league side has not beaten them yet — the speaker is imagining a scenario that is considered unlikely. "If a non-league side beat us [if-clause, past simple], it would be [main clause, would + base verb] the biggest giant-killing." "Will be" = first conditional for real/likely situations — not appropriate when imagining an upset that hasn\'t happened. "Would have been" = third conditional, past — not appropriate for a current/future scenario.',
      },
      {
        sentence: 'Which sentence uses the CORRECT second conditional structure for a cup football scenario?',
        options: [
          '"If they would draw the holders in the next round, that would be a tough match."',
          '"If they drew the holders in the next round, that would be a tough match."',
          '"If they draw the holders in the next round, that would be a tough match."',
        ],
        correctIndex: 1,
        explanation: 'B is correct. "If they drew [past simple] the holders in the next round, that would be [would + base verb] a tough match." This is the correct second conditional structure. A is wrong: "would draw" in the if-clause — never use "would" in the if-clause. C mixes first conditional if-clause ("if they draw" = present simple) with second conditional main clause ("would be") — this is a mixed conditional error. In the second conditional, the if-clause must always use past simple: "drew," "scored," "had," "were" — never present simple or would.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use second conditional and cup football vocabulary to respond to each scenario.',
      items: [
        {
          customerLine: 'A fan asks: "What would happen if both teams were still level after extra time in a two-legged tie?"',
          options: [
            '"If both teams were still level on aggregate after extra time, the tie would be decided by a penalty shootout — players take turns from the spot until one team wins."',
            '"If both teams are level, the away goals rule applies and the team with more away goals wins."',
            '"If both teams were still level, they would play another replay at a neutral ground."',
          ],
          correctIndex: 0,
          explanation: 'A is correct — uses the second conditional correctly ("if both teams were still level... the tie would be decided") and accurately describes the penalty shootout as the tiebreaker for two-legged ties after extra time. B is wrong: the away goals rule has been removed from most competitions — and uses "are" (first conditional) instead of "were" (second conditional). C is wrong: replays are for single-leg cup ties, not two-legged ties — and a "neutral ground" extra replay is not standard practice.',
        },
        {
          customerLine: 'Manager says: "We got a terrible draw — we play the league leaders away in the next round."',
          options: [
            '"If we had a home match, we would have a much better chance. But if we played well on the counter-attack, we could still pull off a giant-killing."',
            '"A difficult draw is fine. The cup is about winning every game and the draw doesn\'t matter."',
            '"If we would have gotten a better draw, we would have won the cup easily."',
          ],
          correctIndex: 0,
          explanation: 'A is correct — uses second conditional naturally: "If we had a home match, we would have a much better chance" (imaginary situation), and introduces "giant-killing" (key vocabulary) correctly. "Pull off" a giant-killing = achieve one — natural phrasal verb. B is dismissive and ignores the question about the draw — not a useful response. C has a second conditional error: "If we would have gotten" — "would" cannot go in the if-clause. Correct would be: "If we had gotten a better draw."',
        },
        {
          customerLine: 'Pundit asks: "Is a penalty shootout a fair way to decide a cup match?"',
          options: [
            '"Yes. Penalties are fair because every player has the same opportunity to score from the spot."',
            '"It\'s a fascinating debate. If they removed penalty shootouts, they would need another solution — maybe more extra time or replays. But shootouts create incredible drama. If every cup tie went to penalties, it would lose its special feeling — the fact that it\'s rare makes it special."',
            '"A penalty shootout is when teams take turns shooting from the penalty spot to decide a cup tie that is still level after extra time."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — it engages with the debate and uses second conditional naturally: "If they removed penalty shootouts, they would need another solution" (imaginary policy change) and "If every cup tie went to penalties, it would lose its special feeling" (imaginary scenario). A gives a simple, flat answer with no depth or conditional language. C is a definition, not an opinion — it doesn\'t answer whether it is fair. B demonstrates how to discuss football topics analytically using second conditional "what if" thinking.',
        },
        {
          customerLine: 'Discuss what would be different about cup football if there were no giant-killings.',
          options: [
            '"Giant-killings are exciting but rare. Without them, cup football would still be good because the drama of knockout football remains."',
            '"Without giant-killings, cup football would lose its magic completely. If the big clubs always won, there would be no romance — it would feel like an extension of the league. The minnows provide the most memorable moments. If a non-league side couldn\'t beat a Premier League team, millions of neutral fans would stop watching."',
            '"Giant-killings happen when a small team beats a big team. Without them, only big teams would win the cup every year."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — it uses multiple second conditionals naturally and makes a complete, analytical argument: "Without giant-killings, cup football would lose its magic" (main point), "If the big clubs always won, there would be no romance" (second conditional), "If a non-league side couldn\'t beat a Premier League team, millions of neutral fans would stop watching" (second conditional). It uses key vocabulary: "magic," "romance," "minnows," "non-league side," "Premier League." A is too brief. C is factually correct but uses no conditional language and lacks analytical depth.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three second conditional grammar mistakes in this match report commentary. Find them.',
      dialogue: [
        { speaker: 'Pundit A', text: 'It was a dramatic night of cup football — the holders went out in the quarter-final in a genuine giant-killing.' },
        { speaker: 'Pundit B', text: 'Incredible scenes. If the referee would have given that penalty in the 85th minute, the whole tie would have looked different.' },
        { speaker: 'Pundit A', text: 'Absolutely. And if they draw the final at Wembley, they would lift the trophy in front of 90,000 fans.' },
        { speaker: 'Pundit B', text: 'That\'s a lovely thought. But if they had better away form, the first leg wouldn\'t have been such a disaster.' },
        { speaker: 'Pundit A', text: 'True. And if they would play their best eleven tonight, they would still be in the cup.' },
        { speaker: 'Pundit B', text: 'The magic of the cup — you just never know. That\'s why we watch.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'If the referee would have given that penalty',
          correction: 'If the referee had given that penalty',
          explanation: '"Would have given" in the if-clause is wrong — never use "would" in the if-clause of any conditional. For a past imaginary situation (the penalty was not given, and we are imagining if it had been), use the third conditional: "If the referee had given that penalty, the whole tie would have looked different." Past perfect ("had given") in the if-clause, "would have + past participle" in the main clause. Here it should be: "If the referee had given that penalty, the whole tie would have looked different."',
        },
        {
          lineIndex: 2,
          incorrectText: 'if they draw the final at Wembley, they would lift',
          correction: 'if they drew the final at Wembley, they would lift',
          explanation: '"If they draw" uses present simple — this is a first conditional structure ("if + present, will + base"). But the main clause uses "would lift" — second conditional. This is a mixed conditional error. Since this is clearly imaginary ("if they draw the final" — this hasn\'t happened and may not happen), use the second conditional throughout: "If they drew the final at Wembley [past simple], they would lift [would + base verb] the trophy." Both clauses must follow the same conditional pattern.',
        },
        {
          lineIndex: 4,
          incorrectText: 'if they would play their best eleven tonight',
          correction: 'if they played their best eleven tonight',
          explanation: '"Would play" in the if-clause is wrong — never use "would" in the if-clause of a conditional. This should be past simple: "if they played their best eleven tonight." The full sentence: "If they played their best eleven tonight [past simple], they would still be in the cup [would + base verb]." This is a standard second conditional — imagining an alternative scenario ("what if they had played their best team?"). Always: past simple in the if-clause, would + base verb in the main clause.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each second conditional sentence about cup football.',
      items: [
        {
          customerLine: 'A non-league team has just beaten a Premier League team. Describe what would be different if this happened every season.',
          salespersonStart: 'If giant-killings happened every season,',
          suggestedCompletion: 'If giant-killings happened every season, they would lose their special quality. If every cup round produced a shock, the results would feel normal — and normality kills excitement. The magic of the cup depends on rarity: if a non-league side beat a Premier League team every week, it would just be called Tuesday. The holders would not be afraid of minnows, the minnows would not be celebrated, and millions of neutral fans would not tune in for the romance of it. If the cup were predictable, it would simply be another competition. The uncertainty — the "what if" — is everything.',
        },
        {
          customerLine: 'A manager discusses the draw: "We drew the champions away in the next round. What would you say?"',
          salespersonStart: '"If we had drawn a home tie,',
          suggestedCompletion: '"If we had drawn a home tie, I would be more confident — but we\'re going away and that\'s a tough assignment. If we played our best formation and pressed high from the start, we would make it difficult for them. If we scored first, the whole stadium would be nervous. If we played defensively and hit on the counter, we could still pull off an upset. The draw wasn\'t kind — but if the cup only gave easy draws, nobody would love it. We go there with confidence. If we knocked out the champions, it would be the greatest result in this club\'s history."',
        },
        {
          customerLine: 'Describe a two-legged tie scenario: first leg 2-1 away defeat. What would need to happen in the second leg?',
          salespersonStart: 'Going into the second leg, we trail 2-1 on aggregate.',
          suggestedCompletion: 'Going into the second leg, we trail 2-1 on aggregate. To go through in normal time, we would need to win by at least two goals — a 2-0 or 3-1 win would put us through. If we scored once, it would be level at 2-2 on aggregate — we would need extra time. If we scored twice without conceding, we would go through. The key is the first goal: if we scored early, the tie would be very much alive. If we conceded first, we would need three goals — a very tough ask. If we reached the penalty shootout, it would be a lottery — but that\'s the cup. Anything is possible.',
        },
        {
          customerLine: 'Discuss what the FA Cup final would be like if it were decided by penalty shootout from the start (no extra time).',
          salespersonStart: '"If the final always went straight to penalties,',
          suggestedCompletion: '"If the final always went straight to penalties, the whole spectacle would change — and not for the better. If teams knew they only had 90 minutes before spot-kicks, managers would play for the shootout, not for the win. Football would become even more defensive — nobody would take risks. If both teams played cautiously, the final would be boring. The magic of the final is the possibility of drama in extra time: the golden goal that never was, the winner in the 119th minute. If we removed extra time and went straight to penalties, we would lose those unforgettable moments. The cup final needs that tension — that uncertainty."',
        },
      ],
    },
  },
};
