import { Lesson } from '@/types/lesson';

export const europeanFootball: Lesson = {
  slug: 'european-football',
  title: 'European Football',
  subtitle: 'Champions League, group stage, knockout rounds, and aggregate scores',
  level: 'B1-B2',
  description: 'European football is the highest level of the club game. In this lesson you will learn the structure of the Champions League and Europa League, the vocabulary of European nights, and how the passive voice is used to describe results and decisions.',
  heroImage: '/images/european-football-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: The passive voice — describing results and decisions in football',
    description: 'The passive voice is used when the action is more important than who does it, or when we do not know who did it. In football reporting and analysis, the passive is very common for describing results, referee decisions, VAR rulings, and tournament outcomes.',
    positivePattern: 'Subject + BE + past participle (+ by + agent). Active: "VAR overturned the decision." Passive: "The decision was overturned by VAR." Active: "They eliminated United." Passive: "United were eliminated."',
    positiveExample: '"The goal was disallowed. Three players were booked in the first half. The tie was decided on penalties. City were eliminated in the quarter-finals by Real Madrid."',
    negativePattern: 'Do NOT use the passive when the subject is clear and important, or when active is more natural. Passive is for formal reporting and when the "doer" is obvious or unimportant.',
    negativeExample: 'UNNATURAL: "The ball was kicked into the net by Ronaldo after it was crossed by Silva." → BETTER: "Ronaldo headed home Silva\'s cross." Only use passive when it adds clarity or formality.',
    positiveExamples: [
      { sentence: '"The match was postponed due to a waterlogged pitch."', note: '(We do not need to say who postponed it — the passive focuses on the result.)' },
      { sentence: '"United were knocked out in the group stage — eliminated by two consecutive defeats."', note: '(Passive focuses on United\'s fate, not on who beat them.)' },
      { sentence: '"The penalty was saved. The red card was later rescinded on appeal."', note: '(Event-focused — keeper and appeal committee are not important here.)' },
    ],
    negativeExamples: [
      { sentence: 'AVOID OVERUSE: "The ball was received by the midfielder, then it was passed by her to the striker, and the shot was taken."', note: 'Too much passive makes writing heavy. Use active for fast on-pitch action.' },
      { sentence: 'NATURAL ACTIVE for on-pitch description: "The midfielder received the ball, played it to the striker, who shot first time."', note: 'Active voice is better for describing flowing play.' },
    ],
  },

  vocabulary: [
    {
      word: 'GROUP STAGE',
      partOfSpeech: 'phrase',
      definition: 'The first phase of a European tournament where teams are placed in groups and play each other — the top teams qualify for the knockout rounds.',
      example: '"They finished second in their group and qualified for the knockout stage of the Champions League."',
      imageSlug: '/images/group-stage.png',
    },
    {
      word: 'KNOCKOUT ROUND',
      partOfSpeech: 'phrase',
      definition: 'The stage of a tournament where teams play head-to-head, and the loser is eliminated — usually played over two legs.',
      example: '"They were drawn against Real Madrid in the knockout round — a very difficult tie."',
      imageSlug: '/images/knockout-round.png',
    },
    {
      word: 'QUALIFY',
      partOfSpeech: 'verb',
      definition: 'To earn a place in a competition or the next round — by finishing high enough in a group or winning a tie.',
      example: '"They qualified for the Champions League by finishing in the top four of the Premier League."',
      imageSlug: '/images/european-football-qualify.png',
    },
    {
      word: 'TIE',
      partOfSpeech: 'noun',
      definition: 'A match or two-legged contest in a knockout competition — not a draw (different meaning). A "tie" is the overall contest, "leg" is each individual match.',
      example: '"The tie was decided in the second leg — they won 3-1 on aggregate after drawing the first leg 1-1."',
      imageSlug: '/images/tie.png',
    },
    {
      word: 'SEEDED / UNSEEDED',
      partOfSpeech: 'adjective',
      definition: 'Seeded teams are protected in draws — placed in better positions to avoid the strongest opponents early. Unseeded teams have no such protection.',
      example: '"As the lowest-ranked seeded team, they avoided the very biggest clubs in the draw — a small advantage."',
      imageSlug: '/images/seeded.png',
    },
    {
      word: 'EUROPEAN NIGHT',
      partOfSpeech: 'phrase',
      definition: 'A home European match — especially at night under floodlights. "European nights" are considered special events in English football culture.',
      example: '"There is nothing like a European night at Anfield — the atmosphere is electric and unlike anything else."',
      imageSlug: '/images/european-night.png',
    },
    {
      word: 'CONTINENTAL',
      partOfSpeech: 'adjective',
      definition: 'Relating to Europe — "continental football" means European club football as opposed to domestic (national) league football.',
      example: '"Their continental form has been excellent even though they have struggled in the domestic league."',
      imageSlug: '/images/continental.png',
    },
    {
      word: 'FIXTURE LIST',
      partOfSpeech: 'phrase',
      definition: 'The official schedule of all matches for a team or competition — when each game is played and against whom.',
      example: '"The fixture list was released today — they have three Champions League group games in October."',
      imageSlug: '/images/fixture-list.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GO THROUGH',
      definition: 'To advance to the next stage of a tournament — to qualify from a group or win a knockout tie.',
      example: '"They went through to the last sixteen after winning their group with five victories from six games."',
      imageSlug: '/images/go-through.png',
    },
    {
      phrase: 'DROP DOWN',
      definition: 'To be moved from one competition to a lower one — teams eliminated from the Champions League group stage often drop down to the Europa League.',
      example: '"They finished third in the group and dropped down to the Europa League — a disappointing outcome."',
      imageSlug: '/images/drop-down.png',
    },
    {
      phrase: 'COME UP AGAINST',
      definition: 'To face a particular opponent in a competition — often a difficult one.',
      example: '"They came up against Real Madrid in the quarter-final — the most difficult possible draw."',
      imageSlug: '/images/come-up-against.png',
    },
    {
      phrase: 'SEE OFF',
      definition: 'To beat and eliminate an opponent — to successfully get rid of them from the competition.',
      example: '"They saw off their Spanish opponents across two legs and reached the semi-final."',
      imageSlug: '/images/see-off.png',
    },
    {
      phrase: 'COME THROUGH',
      definition: 'To survive a difficult situation — to get past a tough opponent or challenge.',
      example: '"They came through a very difficult group that included two former European champions."',
      imageSlug: '/images/european-football-come-through.png',
    },
    {
      phrase: 'TURN AROUND',
      definition: 'To reverse a deficit across two legs — to recover from a first-leg loss and go through.',
      example: '"They turned around a 2-0 first-leg deficit by winning 3-0 at home — a remarkable comeback."',
      imageSlug: '/images/turn-around.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key phrases and concepts used in European football coverage.',
    items: [
      {
        cue: 'The group stage draw',
        meaning: 'The ceremony where teams are randomly placed into groups for the first phase of the tournament.',
        usage: 'Before the tournament begins, teams are placed into groups through a draw — a ceremony with balls in pots. Teams are "seeded" (protected from facing the strongest opponents) based on their UEFA ranking. "Group A," "Group B," etc. Each team plays every other team in their group home and away. "The draw was made last night — they are in Group C with Madrid, Porto, and Dortmund." The draw is always a major news event.',
        imageSlug: 'otp-group-stage-draw',
      },
      {
        cue: 'Qualify for / eliminated from',
        meaning: 'The key language for describing progression through a European tournament.',
        usage: '"Qualify for" = earn a place in a competition or the next round: "qualified for the knockout stage," "qualified for the Champions League." "Eliminated from" = knocked out of a competition: "eliminated in the group stage," "eliminated by Real Madrid." These are passive-friendly phrases: "They were eliminated in the semi-finals" / "They were knocked out on aggregate." Active: "Real Madrid eliminated them." Passive: "They were eliminated by Real Madrid."',
        imageSlug: 'otp-qualify-eliminated',
      },
      {
        cue: 'Last sixteen / quarter-finals / semi-finals / final',
        meaning: 'The stages of a knockout tournament from 16 teams to the two-team final.',
        usage: '"Last sixteen" (or "round of 16") = 16 teams remaining. "Quarter-finals" = 8 teams (four matches). "Semi-finals" = 4 teams (two matches). "Final" = 2 teams. Reaching each stage is an achievement: "reaching the last sixteen," "a quarter-final appearance," "making the semi-finals," "going all the way to the final." In passive: "They were drawn against Bayern in the last sixteen" / "They were beaten in the semi-finals."',
        imageSlug: 'otp-tournament-stages',
      },
      {
        cue: 'On aggregate / over two legs',
        meaning: 'The way two-legged ties are decided — by the combined score across both matches.',
        usage: '"On aggregate" = combined score. If Team A wins 2-0 at home and Team B wins 2-1 away, Team A goes through 3-2 on aggregate. "Over two legs" = the overall context: "They went through over two legs." Passive: "The tie was decided on aggregate." "The second leg was played in front of a packed stadium — United needed two goals to go through." Understanding aggregate scoring is essential for following European football.',
        imageSlug: 'otp-on-aggregate',
      },
      {
        cue: 'UEFA coefficient / ranking',
        meaning: 'The points-based ranking system that determines how European clubs are seeded in draws.',
        usage: 'UEFA coefficients measure clubs\' performance in European competition over five years. A high coefficient = more wins, further progress in Europe = better seeding. "City\'s UEFA coefficient has improved significantly — they will be seeded in the Champions League draw next season." Better seeding means avoiding the strongest clubs in early rounds. This is why consistent European success matters beyond prize money — it improves future draws.',
        imageSlug: 'otp-uefa-coefficient',
      },
      {
        cue: 'The away leg / home advantage',
        meaning: 'In a two-legged tie, the team playing the second leg at home has an advantage — they know what result they need.',
        usage: '"Home advantage" = the benefit of playing at your own stadium in front of your own fans. "The away leg" = the match at the opponent\'s ground. In two-legged ties, it was traditionally considered better to play the away leg first — then know what is needed at home. "They will play the away leg first — arriving home in the second leg knowing exactly what result they need." Now less critical since the away goals rule was abolished.',
        imageSlug: 'otp-home-advantage',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'European football — the highest level of the club game. The [[group stage:the first phase where teams are placed in groups and play each other]] draw has been made. We are in Group D with Real Madrid, Porto, and Dortmund. What is our situation?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'It\'s a tough group. We were [[seeded / unseeded:seeded teams are protected in draws, unseeded are not]] as the lowest-ranked team — we [[come up against:to face a particular opponent in a competition]] Madrid in the first game. That is the hardest possible start. If we qualify from this group, it will be a major achievement.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. Now — passive voice. "Real Madrid beat us 2-0 in the first leg." How do you say this using the passive?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: '"We were beaten 2-0 in the first [[tie:a match or two-legged contest in a knockout competition]] by Real Madrid." Or — "The first leg was lost 2-0." Or — "Two goals were conceded in a difficult first leg in Madrid."',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'All correct. Passive is very natural in football reporting. Now — we lost the first leg 2-0. The second leg is at home — a [[European night:a home European match under floodlights — considered a special event]]. What do we need and what happens if we win 2-0?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'If we win 2-0, the [[tie:same]] is level at 2-2 on [[aggregate:the combined total score across both matches]]. We [[go through:to advance to the next stage]] to extra time. If we win 3-0 or more, we [[see off:to beat and eliminate an opponent]] Madrid and reach the [[knockout round:where losing means immediate elimination]]s.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And if we do not [[qualify:to earn a place in the next round]] from the group stage, but finish third, what happens?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'We [[drop down:to be moved to a lower competition]] to the Europa League. It is [[continental:relating to European club football]] competition — still important — but not the Champions League. Some teams see it as a consolation, but winning the Europa League is also a major achievement.',
    },
  ],

  matchingExercise: [
    { word: 'GROUP STAGE', definition: 'The first phase where teams in groups play each other — top teams qualify' },
    { word: 'KNOCKOUT ROUND', definition: 'Stage where losing means elimination — usually played over two legs' },
    { word: 'QUALIFY', definition: 'To earn a place in a competition or the next round' },
    { word: 'TIE', definition: 'A match or two-legged contest in a knockout competition' },
    { word: 'AGGREGATE', definition: 'The combined total score across both legs of a two-legged tie' },
    { word: 'EUROPEAN NIGHT', definition: 'A home European match — considered a special, atmospheric event' },
    { word: 'SEEDED', definition: 'Protected in draws — placed to avoid the strongest opponents early' },
    { word: 'CONTINENTAL', definition: 'Relating to European club football as opposed to domestic leagues' },
  ],

  fillBlankExercise: [
    { before: 'They finished top of their group and', answer: 'went through', after: 'to the last sixteen of the Champions League.' },
    { before: 'After finishing third in the group, they', answer: 'dropped down', after: 'to the Europa League instead.' },
    { before: 'The goal was', answer: 'disallowed', after: 'by VAR — the striker was marginally offside. (passive voice)' },
    { before: 'Three players were', answer: 'booked', after: 'in the first half — a very ill-disciplined performance. (passive)' },
    { before: 'They lost the first leg 2-0 but', answer: 'turned around', after: 'the deficit with a brilliant 3-0 win at home — through on aggregate.' },
    { before: 'United were', answer: 'eliminated', after: 'in the semi-finals by Bayern Munich — a 4-2 loss on aggregate.' },
    { before: 'The final was', answer: 'played', after: 'at the Estadio Metropolitano in Madrid — 70,000 fans in attendance. (passive)' },
    { before: 'They successfully', answer: 'came through', after: 'the most difficult group — including both Real Madrid and Bayern.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"United were eliminated in the group stage." Which voice is this sentence?',
      options: [
        'Active voice — the subject performs the action.',
        'Passive voice — the subject receives the action.',
        'Neither — it is a present simple statement.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Active: "VAR overturned the decision." Passive version:',
      options: [
        '"The decision is overturned by VAR."',
        '"The decision was overturned by VAR."',
        '"VAR was overturned the decision."',
      ],
      correctIndex: 1,
    },
    {
      question: 'Team A loses the first leg 0-3 away. What do they need in the home second leg to go through on aggregate?',
      options: [
        'Win by exactly 3-0 to level it — then extra time decides it.',
        'Win by any margin — a 1-0 win would be enough on aggregate.',
        'Score 4 goals — 4-0 would take them through.',
      ],
      correctIndex: 2,
    },
    {
      question: '"They dropped down to the Europa League." What does this mean?',
      options: [
        'They were relegated from their domestic league.',
        'They were moved to a lower European competition after finishing third in their Champions League group.',
        'Their ranking dropped and they will be unseeded next season.',
      ],
      correctIndex: 1,
    },
    {
      question: 'When is the passive voice most natural in football?',
      options: [
        'When describing fast, flowing on-pitch action.',
        'When describing results, referee decisions, and tournament outcomes.',
        'When quoting a manager\'s post-match interview.',
      ],
      correctIndex: 1,
    },
    {
      question: '"What is meant by \'a European night\' in English football culture?"',
      options: [
        'Any match played during European competition hours.',
        'A home European match under floodlights — considered a special, atmospheric occasion.',
        'A match where European opponents visit the city for tourism.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The tie was decided on aggregate." What does "the tie" refer to?',
      options: [
        'The scoreline being equal — a draw.',
        'The two-legged contest overall — both legs combined.',
        'The draw ceremony that determined the opponents.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They came up against Real Madrid in the quarter-finals." What does "came up against" mean?',
      options: [
        'They improved their performance against Madrid.',
        'They faced Real Madrid as their opponent in the quarter-finals.',
        'They scored against Real Madrid in a quarter-final.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Rewrite each active sentence in the passive voice, or complete the passive sentence correctly.',
    items: [
      {
        sentence: 'Active: "The referee gave two red cards in the first half." → Passive: "Two red cards _____ in the first half."',
        options: ['were given', 'are given', 'given'],
        correctIndex: 0,
        explanation: '"Were given" is correct — past passive: "were + past participle." "Two red cards were given in the first half" = the action (giving red cards) is described, and the referee (the "doer") becomes less important. "Are given" is present passive — wrong tense. "Given" alone is not a complete passive verb — it needs "were" (past) or "are" (present). In football reporting, past passive is very common: "Three players were booked," "The match was postponed," "Two red cards were shown."',
      },
      {
        sentence: 'Active: "Real Madrid eliminated United in the semi-finals." → Passive: "United _____ by Real Madrid in the semi-finals."',
        options: ['were eliminated', 'are eliminated', 'eliminated'],
        correctIndex: 0,
        explanation: '"Were eliminated" is correct — past passive: subject (United) + were + past participle (eliminated) + by + agent (Real Madrid). This is the classic passive structure in football reporting. "Are eliminated" is present passive — wrong tense for a past event. "Eliminated" alone is not a passive form — it needs the auxiliary verb "were." In sports reporting, the passive is often used to focus on the team that suffered the result (United) rather than the team that caused it (Real Madrid).',
      },
      {
        sentence: '"The _____ was decided on penalties after the aggregate score was level at 3-3."',
        options: ['tie', 'group stage', 'fixture list'],
        correctIndex: 0,
        explanation: '"Tie" is correct — a "tie" is the two-legged contest overall (or a single knockout match). "The tie was decided on penalties" = the overall contest was resolved by a penalty shootout. "Group stage" is wrong — group stages are not decided by penalties; they use points systems. "Fixture list" is the schedule of matches — not a specific match/contest. "Tie" is the precise word for a knockout match (especially two-legged): "the tie," "the two-legged tie," "a difficult tie," "the tie was won on aggregate."',
      },
      {
        sentence: '"They _____ in the group stage despite winning four of their six matches — a cruel points system."',
        options: ['were eliminated', 'were knocked out', 'dropped down'],
        correctIndex: 0,
        explanation: '"Were eliminated" is correct, and "were knocked out" is also acceptable (both are passive constructions). In a group stage with multiple strong teams, a team can win four matches and still not qualify if the results of other games go against them. "Were eliminated in the group stage" = they did not progress, despite good results. "Dropped down" = moved to a lower competition (like Europa League) — this happens when finishing third in a Champions League group, not when eliminated entirely. "Were eliminated" focuses on the failure to progress.',
      },
      {
        sentence: '"The second leg _____ in front of 75,000 fans at the Bernabéu — a breathtaking European night."',
        options: ['was played', 'played', 'is played'],
        correctIndex: 0,
        explanation: '"Was played" is correct — past passive: "was + past participle." "The second leg was played" = the match took place (passive, focusing on the event rather than who organised it). "Played" alone is active — "The Bernabéu played the match" would be wrong; stadiums do not play matches. "Is played" is present passive — wrong tense for a completed event. Passive is natural here because we focus on the event (the second leg) rather than on who arranged or played the match.',
      },
      {
        sentence: 'Which sentence uses the PASSIVE voice CORRECTLY in a European football context?',
        options: [
          '"Real Madrid won the Champions League final by defeating City 2-1 after extra time."',
          '"The Champions League final was won by Real Madrid after City were beaten 2-1 in extra time."',
          '"The Champions League was being won by Real Madrid when City scored in the 89th minute."',
        ],
        correctIndex: 1,
        explanation: 'B is correct. Two passive constructions used naturally: "The final was won by Real Madrid" (passive — focuses on the trophy/result) and "City were beaten 2-1" (passive — focuses on City\'s result). Together these create a match report tone that is formal and event-focused. A is fully active — grammatically correct but not using passive. C uses past continuous passive ("was being won") — this is technically possible but unnatural for a completed result; it implies the process was ongoing when something interrupted it, creating an odd meaning.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use passive voice and European football vocabulary to respond to each situation.',
      items: [
        {
          customerLine: 'Describe this Champions League result: Real Madrid beat United 3-1 in the first leg, United won 2-0 in the second leg.',
          options: [
            '"Real Madrid beat United 3-1. United won 2-0. Real Madrid won on aggregate 3-2."',
            '"United were beaten 3-1 in the first leg in Madrid, but the tie was turned around partially in the second leg at Old Trafford, where a 2-0 victory was secured. However, Real Madrid went through 3-2 on aggregate — United were eliminated despite the comeback."',
            '"The first leg was 3-1. The second leg was 2-0. 3-2 aggregate. Real Madrid go through."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses multiple passive constructions naturally and tells the story with detail. "Were beaten 3-1" (passive, first leg), "the tie was turned around partially" (passive, second leg), "a 2-0 victory was secured" (passive), "were eliminated" (passive). It also uses key vocabulary: "in Madrid," "at Old Trafford," "on aggregate," "despite the comeback." A and C tell the same story but without passive voice and with very little detail — acceptable but not at B1-B2 level.',
        },
        {
          customerLine: 'Explain why European nights are considered so special in English football culture.',
          options: [
            '"European nights are special because they are European and they are at night."',
            '"European nights are considered special because of the unique atmosphere they create — the floodlights, the European opponents, the occasion of competing against the best clubs in the world. Historic clubs like Liverpool, Arsenal, and Manchester United are associated with legendary European nights. The noise of the crowd, the quality of the opposition, and the high stakes make them unlike any domestic match."',
            '"European nights are night games in European competitions. They are played on Tuesday and Wednesday evenings."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — it gives a genuine cultural explanation with detail and vocabulary. Uses passive: "are considered special" (passive). Explains: "unique atmosphere," "floodlights," "competing against the best clubs in the world," "legendary European nights." Names specific clubs with European history. Ends with "unlike any domestic match" — the cultural comparison. A is circular (European nights are special because they are European). C is factually accurate but only describes the logistics — completely missing the cultural significance.',
        },
        {
          customerLine: 'A team is 2-0 down on aggregate going into the second leg at home. Can you describe their situation and what needs to happen?',
          options: [
            '"They are 2-0 down on aggregate. They need to score two goals. If they score two, it goes to extra time."',
            '"Going into the second leg, they trail 2-0 on aggregate — a significant deficit but not an impossible one. To reach extra time, two goals would need to be scored without conceding. If a third goal were conceded, the tie would be effectively over. The crowd will need to be brought into the game early — if a goal can be scored in the opening 20 minutes, the atmosphere will be electric and the pressure on the opposition will increase dramatically."',
            '"They have lost 2-0 in the first leg and now they play the second leg at home. They need two goals to equalize on aggregate and then they can win in extra time or penalties."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses passive voice naturally and tells the story analytically. "Two goals would need to be scored" (passive), "the tie would be effectively over" (passive), "if a goal can be scored in the opening 20 minutes" (passive). Uses vocabulary: "deficit," "aggregate," "the crowd will need to be brought into the game," "atmosphere will be electric." A and C both explain the situation correctly but without passive voice and without the atmospheric, analytical depth expected at B1-B2.',
        },
        {
          customerLine: 'Use passive voice to describe what happens if a team finishes third in a Champions League group.',
          options: [
            '"If a team finishes third, they move to the Europa League. They play in Europa League knockout rounds."',
            '"If a team finishes third in their Champions League group, they are dropped down to the Europa League. They are placed in the knockout phase play-off round, where they must face a team that has also been eliminated from the Champions League group stage. If they go through, they will be included in the last sixteen of the Europa League."',
            '"Third place in the Champions League group means the Europa League. The team is not eliminated — they get a second chance in a different competition."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses passive voice throughout and is precise. "Are dropped down to the Europa League" (passive), "are placed in the knockout phase play-off round" (passive), "they must face a team that has also been eliminated" (passive), "If they go through, they will be included" (passive in the conditional). A and C are accurate but use almost no passive voice. B demonstrates exactly how the passive is used in formal football competition descriptions — official and journalistic language heavily favours the passive for describing tournament structures and administrative decisions.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three passive voice mistakes in this Champions League match report. Find them.',
      dialogue: [
        { speaker: 'Match report', text: 'An enthralling Champions League semi-final first leg was contested at the Etihad Stadium on Tuesday evening.' },
        { speaker: 'Match report', text: 'The opening goal was scored by the hosts in the 23rd minute — a stunning volley that is struck with incredible power by the striker.' },
        { speaker: 'Match report', text: 'Real Madrid were level before half-time, the equaliser being set up by Bellingham and finished coolly from close range.' },
        { speaker: 'Match report', text: 'The decisive second-half goal were scored in the 76th minute, giving the hosts a narrow lead to defend in the second leg.' },
        { speaker: 'Match report', text: 'Three players were booked during a feisty second half, and a penalty was awarded to the visitors in stoppage time — but it was saved by the goalkeeper.' },
        { speaker: 'Match report', text: 'The tie is finely balanced ahead of the return leg in Madrid next week — City will need to defend their lead carefully.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'a stunning volley that is struck with incredible power',
          correction: 'a stunning volley that was struck with incredible power',
          explanation: '"Is struck" is present passive — wrong tense for a past event in a match report. All events in a match report use past tense: "was struck," "was scored," "was saved." The opening sentence establishes the match took place on "Tuesday evening" — everything is in the past. "Is struck with incredible power" = the ball is being struck now (present passive) — wrong. Correct: "a stunning volley that was struck with incredible power by the striker." Consistent past tense is required throughout a match report.',
        },
        {
          lineIndex: 3,
          incorrectText: 'The decisive second-half goal were scored',
          correction: 'The decisive second-half goal was scored',
          explanation: '"Were scored" is wrong — subject-verb agreement error. "The decisive second-half goal" is singular (one goal), so the passive auxiliary must be "was" (singular), not "were" (plural). "The goals were scored" = correct (plural). "The goal was scored" = correct (singular). Subject-verb agreement applies to passive constructions too: singular subject → "was + past participle," plural subject → "were + past participle." "Three goals were scored" (plural) vs "One goal was scored" (singular).',
        },
        {
          lineIndex: 5,
          incorrectText: 'The tie is finely balanced',
          correction: 'The tie was finely balanced / The tie remains finely balanced',
          explanation: 'This is a more nuanced error. "The tie is finely balanced" = present passive, describing the current situation — which is acceptable if we mean "right now, after the match." However, in the context of a match report written about a concluded event, it creates an inconsistency with the past tense used throughout. The preferred form is either "The tie was left finely balanced" (past passive, continuing the report\'s tense) or "The tie remains finely balanced" (present active, acceptable for ongoing situations). Mixing past and present passive without reason is a style error in formal reporting.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each European football commentary using passive voice and the lesson vocabulary.',
      items: [
        {
          customerLine: 'Describe a Champions League final where the first team scores in the 90th minute to win 1-0.',
          salespersonStart: 'The Champions League final was decided in extraordinary fashion —',
          suggestedCompletion: 'The Champions League final was decided in extraordinary fashion — a goal was scored in the 90th minute to win the trophy for the first time in the club\'s history. The match had been dominated by the opponents for large periods, but the decisive moment came when a loose ball was collected on the edge of the box and struck cleanly into the top corner. The goalkeeper was beaten with no chance — the trophy was won in the most dramatic circumstances possible. Players were mobbed by teammates immediately. The final whistle was greeted by scenes of extraordinary celebration. This was a result that will never be forgotten.',
        },
        {
          customerLine: 'Describe a team\'s Champions League group stage — three wins, two draws, one loss, second place finish.',
          salespersonStart: 'It was a successful Champions League group stage campaign —',
          suggestedCompletion: 'It was a successful Champions League group stage campaign — three wins were recorded, two matches were drawn, and only one defeat was suffered across the six group games. Second place was secured on matchday six after a hard-fought draw against the group leaders. The group was considered one of the toughest of the draw — two former European champions were overcome along the way. Twelve points were accumulated, which was considered an excellent return. The knockout round draw will now be awaited — the team hopes to be kept apart from the seeded clubs.',
        },
        {
          customerLine: 'Describe a famous European night at a packed home stadium when the team scores a late equaliser to go through on aggregate.',
          salespersonStart: 'The atmosphere at the stadium was electric —',
          suggestedCompletion: 'The atmosphere at the stadium was electric — one of the finest European nights ever witnessed at this ground. The team had gone into the match trailing 2-1 on aggregate — a goal was needed to level the tie. For 85 minutes, chances were created but not taken. Then, in the 87th minute, a corner was won, the ball was swung in, and a header was powered into the net. The stadium erupted. The tie was level on aggregate — the team had been pushed through on away goals. The crowd was sent into a frenzy that could be heard across the city. Moments like this are what European nights were made for.',
        },
        {
          customerLine: 'Write a formal post-match report using at least five passive voice constructions.',
          salespersonStart: 'Tuesday\'s Champions League quarter-final first leg was settled —',
          suggestedCompletion: 'Tuesday\'s Champions League quarter-final first leg was settled by a late goal that gave the home side a crucial advantage ahead of the second leg in Madrid. The match was played in front of 60,000 supporters at a vibrant Etihad Stadium. Two red cards were shown in a feisty second half — one player on each side was dismissed. A penalty was awarded to the visitors in the 78th minute but was saved brilliantly by the home goalkeeper. The winning goal was scored by the striker in the 89th minute — a header from a well-worked corner. The tie will now be decided in Spain, where a 2-1 deficit will need to be overturned by Real Madrid. The result was described by the home manager as "the best European night in years."',
        },
      ],
    },
  },
};
