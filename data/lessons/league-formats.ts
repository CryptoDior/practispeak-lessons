import { Lesson } from '@/types/lesson';

export const leagueFormats: Lesson = {
  slug: 'league-formats',
  title: 'League Formats',
  subtitle: 'Points, tables, relegation, promotion, and title races',
  level: 'B1-B2',
  description: 'Every football league has its own format and vocabulary. In this lesson you will learn how to talk about league tables, standings, points systems, promotion, relegation, and the drama of a title race — using the prepositions of position that make football table language natural.',
  heroImage: '/images/league-formats-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Prepositions of position — at the top of, bottom of, level on points with',
    description: 'When talking about a football league table, English uses specific preposition phrases. These phrases describe exactly where a team is in the table — their position relative to others. Using the right preposition makes you sound natural and precise when discussing standings.',
    positivePattern: 'AT THE TOP OF (first place) / AT THE BOTTOM OF (last place) / IN [POSITION] (third, fifth, etc.) / LEVEL ON POINTS WITH (same points as another team) / AHEAD OF (above in the table) / BEHIND (below in the table) / ON [NUMBER] POINTS',
    positiveExample: '"City are at the top of the table with 78 points. United are in third, level on points with Liverpool, but ahead of them on goal difference. Arsenal are five points behind City with four games to go."',
    negativePattern: 'Do NOT say "on the top" — say "at the top." Do NOT say "on position three" — say "in third." Do NOT confuse "ahead of" (position/points) with "in front of" (physical space).',
    negativeExample: 'WRONG: "City are on the top of the league." → RIGHT: "City are at the top." WRONG: "They are on position seven." → RIGHT: "They are in seventh." WRONG: "United are in front of Arsenal in the table." → RIGHT: "United are ahead of Arsenal in the table."',
    positiveExamples: [
      { sentence: '"They are at the top of the table with a five-point lead."', note: '"At the top" = first position. Always "at the top," never "on the top."' },
      { sentence: '"They are in third, level on points with the team below them."', note: '"Level on points with" = exactly the same number of points as another team.' },
      { sentence: '"They are three points behind the leaders with six games remaining."', note: '"Behind" + "the leaders" / "first place" / "them." "Remaining" = games still to play.' },
      { sentence: '"On goal difference, they are ahead of their rivals despite having the same points."', note: '"On goal difference" = the tiebreaker when teams are level on points.' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "They are on the top of the table." / "They are on position three."', note: '"At the top" and "in third" — not "on."' },
      { sentence: 'WRONG: "Both teams have thirty points and they are same." → RIGHT: "Both teams are level on thirty points."', note: '"Level on [number] points" is the correct football phrase.' },
    ],
  },

  vocabulary: [
    {
      word: 'STANDINGS',
      partOfSpeech: 'noun',
      definition: 'The official ranking of all teams in a league — also called the "table" or "league table." Shows position, points, wins, losses, and goal difference.',
      example: '"Check the standings — we\'re only three points off the top four." / "The Premier League standings after 30 games were incredibly tight."',
      imageSlug: '/images/standings.png',
    },
    {
      word: 'RELEGATION',
      partOfSpeech: 'noun',
      definition: 'When a team finishes at the bottom of the league and goes down to a lower division the next season.',
      example: '"They were in the relegation zone for the last ten games of the season — it was a very nervous time for the fans."',
      imageSlug: '/images/relegation.png',
    },
    {
      word: 'PROMOTION',
      partOfSpeech: 'noun',
      definition: 'When a team finishes high enough to move up to a better division the next season.',
      example: '"Winning promotion to the Premier League was the biggest achievement in the club\'s history."',
      imageSlug: '/images/league-formats-promotion.png',
    },
    {
      word: 'TITLE RACE',
      partOfSpeech: 'phrase',
      definition: 'The competition between two or more teams to win the league championship — especially exciting when the teams are very close on points.',
      example: '"The title race this season is incredible — three teams within two points at the top with five games left."',
      imageSlug: '/images/title-race.png',
    },
    {
      word: 'GOAL DIFFERENCE',
      partOfSpeech: 'phrase',
      definition: 'Goals scored minus goals conceded. Used as a tiebreaker when two teams have the same number of points.',
      example: '"They finished above their rivals on goal difference — both had 74 points but their goal difference was +32 compared to +27."',
      imageSlug: '/images/goal-difference.png',
    },
    {
      word: 'POINTS DEDUCTION',
      partOfSpeech: 'phrase',
      definition: 'When a team has points removed as a punishment — usually for financial rule violations.',
      example: '"The club received a ten-point deduction for financial irregularities — it effectively ended their promotion hopes."',
      imageSlug: '/images/points-deduction.png',
    },
    {
      word: 'PLAY-OFF',
      partOfSpeech: 'noun',
      definition: 'A set of extra matches to decide which team earns the final promotion or relegation spot — for teams that finish just outside the automatic places.',
      example: '"They finished fourth and entered the play-offs — they won two matches and were promoted at Wembley."',
      imageSlug: '/images/play-off.png',
    },
    {
      word: 'FORM',
      partOfSpeech: 'noun',
      definition: 'A team\'s recent results — their performance over the last few matches. "Good form" = recent wins. "Poor form" = recent losses.',
      example: '"They\'re in brilliant form — five wins in a row. That run has taken them from eighth to third in the table."',
      imageSlug: '/images/form.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PULL AWAY',
      definition: 'To increase the gap at the top of the table — to move further ahead of the teams below.',
      example: '"City pulled away at the top after their rivals drew — now six points clear with seven games left."',
      imageSlug: '/images/league-formats-pull-away.png',
    },
    {
      phrase: 'DROP POINTS',
      definition: 'To draw or lose when you needed to win — to not collect the maximum points available.',
      example: '"They dropped two points at home — a draw when they needed a win. It could cost them the title."',
      imageSlug: '/images/drop-points.png',
    },
    {
      phrase: 'SLIP UP',
      definition: 'To unexpectedly drop points — to lose or draw in a game you were expected to win.',
      example: '"The leaders slipped up against a bottom-half side — drew 1-1 and now the gap at the top is just one point."',
      imageSlug: '/images/slip-up.png',
    },
    {
      phrase: 'CLOSE THE GAP',
      definition: 'To reduce the points difference between your team and the team above you in the table.',
      example: '"They won and the leaders drew — they\'ve closed the gap to three points. The title race is back on."',
      imageSlug: '/images/close-the-gap.png',
    },
    {
      phrase: 'STAY UP',
      definition: 'To avoid relegation — to finish with enough points to remain in the division.',
      example: '"They won on the final day of the season and stayed up — the whole town celebrated."',
      imageSlug: '/images/stay-up.png',
    },
    {
      phrase: 'GO DOWN',
      definition: 'To be relegated — to finish at the bottom and drop to a lower division.',
      example: '"They went down after 15 years in the Premier League — a devastating result for the club."',
      imageSlug: '/images/go-down.png',
    },
  ],

  onThePitch: {
    instructions: 'These are common phrases used when talking about league standings and table positions.',
    items: [
      {
        cue: 'In the relegation zone',
        meaning: 'In one of the bottom three positions in the table — positions that lead to relegation at the end of the season.',
        usage: 'The bottom three teams in most top leagues are relegated at the end of the season. "In the relegation zone" = in positions 18, 19, or 20 (in a 20-team league). It is an extremely stressful place to be — fans use this phrase with dread. "They\'ve been in the relegation zone for six weeks" or "they dropped into the relegation zone after losing tonight." The "danger zone" is an informal alternative.',
        imageSlug: 'otp-in-the-relegation-zone',
      },
      {
        cue: 'On [number] points from [number] games',
        meaning: 'A precise description of a team\'s points total and how many games they have played.',
        usage: '"They are on 57 points from 30 games" = they have 57 points after playing 30 matches. This phrasing is essential for discussing the table precisely. "From 30 games" tells you how many games they have played, which affects the comparison. If one team has 57 points from 28 games and another has 57 from 30, the first team has played fewer games — a key detail in a title race.',
        imageSlug: 'otp-on-points-from-games',
      },
      {
        cue: 'With [number] games to go',
        meaning: 'How many matches remain in the season — usually said alongside a points gap.',
        usage: '"Three points behind with five games to go" = the gap is small and there is still time. "With games to go" is essential in discussing whether a team can win the title or avoid relegation. "With only two games to go" = almost no time left. "With ten games to go" = plenty of time. The phrase always comes after the points situation: "Five points clear with eight games to go — they look comfortable."',
        imageSlug: 'otp-with-games-to-go',
      },
      {
        cue: 'The run-in',
        meaning: 'The final matches of the season — the last few games when the pressure is highest.',
        usage: '"The run-in" = the closing section of the season, usually the final 5-10 games. This is when leagues are decided — who wins, who gets relegated, who qualifies for Europe. "Their run-in looks tough — they play the top three in their last five games." "The run-in will decide everything." This phrase is only used near the end of the season, never in August.',
        imageSlug: 'otp-the-run-in',
      },
      {
        cue: 'Automatic promotion / play-off places',
        meaning: 'Automatic = top teams go up directly. Play-offs = teams just outside the top spots must win extra matches to be promoted.',
        usage: 'In most leagues, the top 2 or 3 teams are automatically promoted — they go up without needing extra matches. Teams in positions 3-6 (or similar) enter play-offs: knockout matches to compete for the final promotion place. "We need automatic — we can\'t afford the lottery of the play-offs." The play-offs are famously unpredictable — lower-placed teams can win them.',
        imageSlug: 'otp-automatic-promotion',
      },
      {
        cue: 'Mathematically safe / mathematically relegated',
        meaning: 'When the mathematics of the table makes a result certain — no other outcomes are possible.',
        usage: '"Mathematically safe" = a team has enough points that they cannot be relegated no matter what the other teams do. "Mathematically relegated" = a team cannot escape the bottom three — even if they win every remaining game, they will still go down. These are definitive moments: "They\'re mathematically safe with three games left — the fans can relax." "Relegated with four games still to play — a painful day."',
        imageSlug: 'otp-mathematically-safe',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right — look at the [[standings:the official ranking of all teams in a league]]. City are at the top on 77 points. United are in third, [[level on points with:exactly the same number of points as]] Liverpool, but ahead of them on [[goal difference:goals scored minus goals conceded, used as a tiebreaker]]. What is the situation?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'City are five points ahead with four games to go — the [[title race:the competition between teams to win the league championship]] is almost over. They can [[pull away:to increase the gap at the top]] further if they win tonight.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. Now look at the bottom. Three teams are in the [[relegation zone:in one of the bottom positions that leads to relegation]] — Rovers, Town, and City B. Town are on 28 points from 34 games, three points above safety. What can they do?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Town need to not [[drop points:to draw or lose when you needed to win]] in the [[run-in:the final matches of the season]]. If the teams around them [[slip up:to unexpectedly drop points]], Town can [[stay up:to avoid relegation — to remain in the division]]. They have four games to go — three wins would probably be enough.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And what about [[promotion:when a team finishes high enough to move up to a better division]] places? The top two go up automatically. The teams in third, fourth, fifth, and sixth — what happens to them?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'They enter the [[play-off:a set of extra matches to decide the final promotion spot]]s. It is like a mini tournament — two semi-finals and a final at Wembley. The winner gets [[promotion:the chance to move up to a better division]]. Good [[form:a team\'s recent results]] matters in the play-offs — momentum is everything.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. Last question — what does "[[mathematically safe]]" mean?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'When a team has so many points that even if they lose all their remaining games, they still cannot [[go down:to be relegated — to drop to a lower division]]. The mathematics make it impossible. The fans stop worrying and enjoy the last few games.',
    },
  ],

  matchingExercise: [
    { word: 'STANDINGS', definition: 'The official ranking of all teams in a league — the table' },
    { word: 'RELEGATION', definition: 'When a team goes down to a lower division at the end of the season' },
    { word: 'PROMOTION', definition: 'When a team moves up to a better division the next season' },
    { word: 'TITLE RACE', definition: 'The competition between teams to win the league championship' },
    { word: 'GOAL DIFFERENCE', definition: 'Goals scored minus goals conceded — a tiebreaker for level points' },
    { word: 'PLAY-OFF', definition: 'Extra matches to decide the final promotion or relegation spot' },
    { word: 'FORM', definition: 'A team\'s recent results — their performance over the last few matches' },
    { word: 'RUN-IN', definition: 'The final matches of the season when the pressure is highest' },
  ],

  fillBlankExercise: [
    { before: 'City are', answer: 'at the top of', after: 'the table with 80 points — five clear of United in second.' },
    { before: 'Both teams are', answer: 'level on', after: 'points, but United are ahead on goal difference.' },
    { before: 'They are three points', answer: 'behind', after: 'the leaders with only three games remaining.' },
    { before: 'The leaders', answer: 'slipped up', after: 'at home — drew 0-0 when they needed a win. Title race is back on.' },
    { before: 'They won and', answer: 'closed the gap', after: 'to two points — this is going to the final day of the season.' },
    { before: 'They are', answer: 'in the relegation zone', after: 'after losing tonight — they need a result on Saturday.' },
    { before: 'After winning their last five,', answer: 'their form', after: 'is excellent — best in the league right now.' },
    { before: 'They finished second and are', answer: 'mathematically safe', after: 'from relegation — three games early.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"City are at the top of the table." Which word is correct here?',
      options: [
        '"City are on the top of the table."',
        '"City are at the top of the table."',
        '"City are in the top of the table."',
      ],
      correctIndex: 1,
    },
    {
      question: '"Both teams are level on 56 points." What does this mean?',
      options: [
        'One team has 56 points and the other has slightly fewer.',
        'Both teams have exactly 56 points each.',
        'The teams are playing each other for 56 points.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They slipped up at home against the bottom side." What happened?',
      options: [
        'They won, but played poorly and almost lost.',
        'They unexpectedly dropped points — drew or lost when expected to win.',
        'They had a player slip and get injured during the match.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They are mathematically relegated." What does this mean?',
      options: [
        'Their mathematicians have calculated that they might go down.',
        'They cannot escape relegation — even winning every game would not save them.',
        'They need mathematics and statistics to understand their situation.',
      ],
      correctIndex: 1,
    },
    {
      question: 'A team finishes fifth in the Championship. What happens?',
      options: [
        'They are automatically promoted to the Premier League.',
        'They are relegated to League One.',
        'They enter the play-offs with a chance of promotion.',
      ],
      correctIndex: 2,
    },
    {
      question: '"They dropped two points at home." What happened?',
      options: [
        'They scored two goals less than they needed.',
        'They drew when they needed to win — not collecting maximum points.',
        'They had two points removed as a punishment.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Five points ahead with four games to go." How would you describe this situation?',
      options: [
        'Very comfortable — barring a collapse, they will win the title.',
        'Very tight — the title race will go to the final day.',
        'Already mathematically certain — they have already won.',
      ],
      correctIndex: 0,
    },
    {
      question: '"They pulled away at the top." What happened?',
      options: [
        'They withdrew from the league due to financial problems.',
        'They increased their lead — moved further ahead of the teams below them.',
        'They recovered from relegation danger and climbed up the table.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence with the correct preposition phrase or vocabulary.',
    items: [
      {
        sentence: '"City are _____ the table with 82 points — eight clear of United in second."',
        options: ['at the top of', 'on the top of', 'in the top of'],
        correctIndex: 0,
        explanation: '"At the top of" is correct. This is the fixed English phrase for being in first place in a table, league, or chart. "At the top of the table" = first position. "On the top of" is wrong — "on the top" is used for physical positions (e.g., a book on top of a table — a real object). "In the top" is wrong — "in the top" is used for ranges like "in the top five" but not for an exact first-place position. Always: "at the top of the table."',
      },
      {
        sentence: '"Both clubs have 71 points — they are _____ 71 points with six games remaining."',
        options: ['level on', 'equal at', 'same with'],
        correctIndex: 0,
        explanation: '"Level on" is correct. "Level on [number] points" is the fixed football English phrase for two teams with identical points totals. "Level on 71 points" — natural, precise, standard. "Equal at" is not standard football English — it sounds like a translation. "Same with" is grammatically wrong in this context — "same" needs "the" and a different structure. "Level on points" is the phrase you will hear in commentary, journalism, and fan discussion.',
      },
      {
        sentence: '"The leaders _____ last weekend — drew 1-1 at home and now the gap is only three points."',
        options: ['slipped up', 'went down', 'pulled away'],
        correctIndex: 0,
        explanation: '"Slipped up" is correct. "Slipped up" = to unexpectedly drop points — to draw or lose when expected to win. A draw at home for the leaders when they needed a win is a classic "slip up." "Went down" = was relegated — wrong meaning (the leaders are not being relegated here). "Pulled away" = increased their lead — the opposite of what happened (the gap got smaller, not bigger). "Slipped up" perfectly describes the unexpected failure to win.',
      },
      {
        sentence: '"They won promotion via the play-_____ after beating rivals in the final at Wembley."',
        options: ['offs', 'ons', 'ups'],
        correctIndex: 0,
        explanation: '"Play-offs" is correct. "Play-off" (plural: "play-offs") = a set of extra matches to decide the final promotion or relegation spot. "Via the play-offs" = through the play-off system. "Play-ons" is not a football term. "Play-ups" is not a standard term. The full phrase is "promotion play-offs" or simply "the play-offs." "Via the play-offs" is a common phrase in English football: "They went up via the play-offs after an incredible final."',
      },
      {
        sentence: '"They are in the relegation zone but their recent _____ is excellent — four wins in five games."',
        options: ['form', 'standings', 'run-in'],
        correctIndex: 0,
        explanation: '"Form" is correct. "Form" = recent results and performances. "Their form is excellent" = they have been performing well recently. "Four wins in five games" is excellent form — it might be enough to escape relegation. "Standings" = the official table/ranking — not about recent form specifically. "Run-in" = the final games of the season — not about performance quality. "Form" is the precise word for recent results: "great form," "poor form," "on a good run of form."',
      },
      {
        sentence: 'Which sentence uses the CORRECT table position language?',
        options: [
          '"United are on position five with 48 points and are same as Arsenal."',
          '"United are in fifth, level on 48 points with Arsenal — ahead of them on goal difference."',
          '"United are at fifth position on same points than Arsenal — they are better on goals."',
        ],
        correctIndex: 1,
        explanation: 'B is correct. "In fifth" (not "at fifth position" or "on position five"), "level on 48 points with Arsenal" (not "same points than"), "ahead of them on goal difference" (not "better on goals"). A has multiple errors: "on position five" (should be "in fifth"), "same as" (should be "level on points with"). C has "at fifth position" (wrong preposition) and "same points than" (wrong grammar — should be "level on points with"). Football English table language requires specific prepositions in specific positions.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use the league table vocabulary to answer each question correctly.',
      items: [
        {
          customerLine: 'A fan asks: "City are five points clear — is the title race over?"',
          options: [
            '"City are five points ahead with four games to go — each game is worth three points, so the gap could close quickly if they slip up. Having said that, the title race is nearly over — they just need to not drop points."',
            '"Yes. Five points means the title race is mathematically over and City have already won."',
            '"The title race is a competition between teams to win the league championship and City are at the top of the table."',
          ],
          correctIndex: 0,
          explanation: 'A is correct — it gives a precise, analytical answer using correct table language. "Five points ahead with four games to go" (correct positioning phrase), "if they slip up" (correct phrasal verb), "drop points" (correct phrase for not winning). B is wrong: five points with four games to go is NOT mathematically decided — the team could still lose four games and their rivals win. C is correct vocabulary but is a definition, not an answer to the question.',
        },
        {
          customerLine: 'A fan asks: "What\'s the difference between automatic promotion and the play-offs?"',
          options: [
            '"Automatic promotion means the club is automatically a good team. Play-offs means the team has to play off against other teams."',
            '"In automatic promotion, the top teams go straight up to the next division without extra matches. In the play-offs, teams just outside the automatic places compete in extra knockout matches for the final promotion spot."',
            '"Automatic promotion and play-offs are both ways of going up. They\'re basically the same — you just need to finish high enough in the table."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — clear, precise, complete. "Top teams go straight up without extra matches" (automatic promotion defined correctly), "just outside the automatic places" (correct table position language), "compete in extra knockout matches for the final promotion spot" (play-offs defined accurately). A is a guess — "automatic means automatically a good team" is wrong. C is wrong: they are not "basically the same" — automatic promotion is guaranteed without extra matches; play-offs are a lottery that even the lower-placed teams can win.',
        },
        {
          customerLine: 'Describe the relegation battle using the standings: Town 28pts, Rovers 27pts, City B 25pts — 4 games left.',
          options: [
            '"Town are three points above the bottom, Rovers one point below Town, City B at the bottom. City B need to pull away but they are behind on points. Town can stay up if they win two of four."',
            '"Town are in 18th on 28 points, Rovers in 19th on 27, City B in 20th on 25 — all three are in the relegation zone. With four games to go, the survival fight is very much alive. Any team that wins two and the others drop points could stay up."',
            '"Town are okay because they have more points than Rovers and City B. Rovers and City B will probably go down."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses precise table language: "in 18th on 28 points" (position + points), "in the relegation zone" (correct phrase), "with four games to go" (remaining games phrase), "drop points" (phrasal verb), "stay up" (phrasal verb for avoiding relegation). A makes errors: "City B need to pull away" — "pull away" is for leaders increasing a gap, not for a relegated team. C is imprecise — it does not use correct football table language and wrongly concludes the situation.',
        },
        {
          customerLine: 'A journalist asks: "After tonight\'s result, what does the table look like at the top?"',
          options: [
            '"The top of the table looks like a list with City at the first position and United at the second position."',
            '"City are at the top on 80 points — eight points ahead of United, who are in second. Liverpool are in third, level on points with United but behind on goal difference. With six games to go, City look set for the title."',
            '"City are winning the league. United and Liverpool are behind them. The table shows this clearly."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses full professional table language: "at the top on 80 points" (position + points), "eight points ahead of United" (gap), "in second" (position), "in third" (position), "level on points with United" (tiebreaker phrase), "behind on goal difference" (tiebreaker phrase), "with six games to go" (remaining games), "look set for the title" (assessment). A is technically grammatical but uses "first position" and "second position" — not natural football English. C is too vague for a journalist\'s question.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three league table language mistakes in this match report. Find them.',
      dialogue: [
        { speaker: 'Match report', text: 'A crucial week in the title race concluded on Wednesday night with two results that have significantly altered the standings.' },
        { speaker: 'Match report', text: 'City, who are on the top of the table, dropped two points with a surprise 1-1 draw at home against mid-table opposition.' },
        { speaker: 'Match report', text: 'Meanwhile, United capitalised immediately — a 3-0 win means they are now level on 74 points with City, ahead of them on goal difference.' },
        { speaker: 'Match report', text: 'Liverpool, in same points than United at 74, are in third on goal difference — six points clear of the fourth-placed Arsenal.' },
        { speaker: 'Match report', text: 'At the bottom, Town remain in the relegation zone after a damaging 2-0 defeat. They are now on position 19, on 26 points — three points from safety.' },
        { speaker: 'Match report', text: 'With five games to go in the run-in, this title race looks set to go down to the final day of the season.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'on the top of the table',
          correction: 'at the top of the table',
          explanation: '"On the top" is wrong — the correct preposition is "at" for table positions: "at the top of the table." "On the top" is used for physical positions — an object resting on a surface. In football table language, the fixed phrase is always "at the top of the table," "at the top of the league," or "at the top of the standings." This is a very common error for non-native English speakers who translate directly from their own language.',
        },
        {
          lineIndex: 3,
          incorrectText: 'in same points than United at 74',
          correction: 'level on 74 points with United',
          explanation: '"In same points than" is not English football language — it is a direct translation error. The correct phrase is "level on [number] points with [team]": "level on 74 points with United." "Same points than" — "than" is used for comparisons (more than, fewer than), not for equal quantities. "Level on points with" is the fixed football expression for teams with identical points totals. This phrase is used constantly in football journalism and commentary.',
        },
        {
          lineIndex: 4,
          incorrectText: 'on position 19',
          correction: 'in 19th',
          explanation: '"On position 19" is not correct English — the correct phrasing is "in 19th" (or "in 19th place"). In English, league table positions use ordinal numbers (first, second, third, 19th) with "in": "in first," "in 19th," "in last place." "On position 19" sounds like a direct translation. "In 19th" is the natural, standard form used in all English football coverage.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each league table description using the correct vocabulary and prepositions.',
      items: [
        {
          customerLine: 'Describe this table situation: City 1st 82pts, United 2nd 74pts, Liverpool 3rd 74pts. 5 games left.',
          salespersonStart: 'City are at the top of the table on 82 points —',
          suggestedCompletion: 'City are at the top of the table on 82 points — eight points ahead of United in second. Liverpool are in third, level on 74 points with United, but behind them on goal difference. City look very comfortable in the title race with five games to go — they would need to slip up dramatically and both United and Liverpool would need to win all five to catch them. Barring a complete collapse, the title is heading to City.',
        },
        {
          customerLine: 'Describe this table situation: Town 18th 28pts, Rovers 19th 27pts, City B 20th 25pts. 3 games left.',
          salespersonStart: 'All three sides are in the relegation zone —',
          suggestedCompletion: 'All three sides are in the relegation zone — Town in 18th on 28 points, Rovers just behind in 19th on 27, and City B rooted to the bottom in 20th on 25 points. With only three games to go, every result is crucial. City B need to win all three and hope both rivals drop points — a big ask. Town are the safest but three points is a very small cushion. If any of these three goes on a winning run and the others slip up, the picture could change completely by the final day.',
        },
        {
          customerLine: 'Describe how a team won the title on the final day of the season.',
          salespersonStart: 'Going into the final day, City were one point behind United —',
          suggestedCompletion: 'Going into the final day, City were one point behind United — they needed to win AND hope United slipped up. City did their part, beating Rovers 3-0 to pull off an incredible result. Simultaneously, United dropped two crucial points — a 1-1 draw at home that left their fans devastated. At the final whistle, City had closed the gap and overtaken United on goal difference — level on points but ahead on goal difference. The title went to City on the most dramatic final day in years. They had been behind in the run-in and nobody had believed they could do it — but the mathematics worked out perfectly.',
        },
        {
          customerLine: 'Explain the play-off system to someone who has never heard of it.',
          salespersonStart: 'In most leagues, the top two or three teams earn automatic promotion —',
          suggestedCompletion: 'In most leagues, the top two or three teams earn automatic promotion — they go straight up to the next division without needing any extra matches. But the teams in the next positions — usually third to sixth — enter what is called the play-offs. It is a knockout competition: two semi-finals followed by a final, usually played at a famous ground like Wembley. The winner of the final earns the last promotion place. The play-offs are incredibly exciting but also nerve-wracking — you can finish third in the table all season and still not go up if you lose a play-off semi-final. It is a lottery that gives lower-placed teams a chance to sneak in.',
        },
      ],
    },
  },
};
