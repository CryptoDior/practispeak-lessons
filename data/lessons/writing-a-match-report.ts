import { Lesson } from '@/types/lesson';

export const writingAMatchReport: Lesson = {
  slug: 'writing-a-match-report',
  title: 'Writing a Match Report',
  subtitle: 'Unit 4 — Reading & Writing Football',
  level: 'B1-B2',
  description: 'The match report is one of football\'s most important written forms. From newspaper journalism to fan blogs, from club websites to betting analysis, match reports are read by millions every week. This lesson teaches you the structure, vocabulary, and language of a professional match report.',
  heroImage: '/images/match-report.png',

  warmUp: {
    questions: [
      'Have you ever read a match report in English? Which publication was it from?',
      'What is the difference between a match report and a tactical analysis?',
      'What information should a good match report always include?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Past Simple and Past Continuous in Sports Writing',
    description: 'Match reports use two past tenses in a specific way. The past simple describes completed actions and key events: "He scored on 67 minutes." The past continuous describes the context, atmosphere, or ongoing situation in which those events occurred: "Both sides were pressing high when the breakthrough came." Together, the two tenses create a narrative rhythm — moving between what was happening (background) and what happened (event). In a match report, the past continuous is often used to set up a key event: "The game was drifting towards a goalless draw when..." This structure signals the reader that something important is about to be described. Understanding this rhythm helps you both read and write sports writing at a professional level.',
    positiveExamples: [
      {
        sentence: '"Both sides were struggling to create clear chances when Kvaratskhelia cut inside and struck a stunning 25-yard effort."',
        note: 'Past continuous (context) + past simple (event)',
      },
      {
        sentence: '"The visitors were controlling possession comfortably until a defensive lapse on 34 minutes gifted the home side their opener."',
        note: 'Past continuous interrupted by a past simple event',
      },
      {
        sentence: '"It was a match that ebbed and flowed. The home side created the better chances but ultimately paid the price for poor finishing."',
        note: 'Past simple throughout — for clear narrative summary',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'OPENER',
      partOfSpeech: 'noun',
      definition: 'The first goal of a match — the goal that opens the scoring.',
      example: '"The opener came against the run of play — a training-ground routine delivered with precision in the 22nd minute."',
      imageSlug: '/images/opener.png',
    },
    {
      word: 'CLINCH',
      partOfSpeech: 'verb',
      definition: 'To secure a result — to score the goal or take the action that makes victory certain.',
      example: '"She clinched the points with a penalty in the 88th minute — sending the home crowd into raptures."',
      imageSlug: '/images/clinch.png',
    },
    {
      word: 'COMEBACK',
      partOfSpeech: 'noun',
      definition: 'A recovery from a losing position to draw level or win.',
      example: '"The comeback was remarkable — three goals down at half-time, they levelled on 89 minutes and won in extra time."',
      imageSlug: '/images/comeback.png',
    },
    {
      word: 'AGAINST THE RUN OF PLAY',
      partOfSpeech: 'phrase',
      definition: 'Describing a goal or event that doesn\'t reflect which team had been the better side up to that point.',
      example: '"The goal came against the run of play — the visitors had been camped in their own half when the clearance fell to the striker 25 yards out."',
      imageSlug: '/images/against-the-run.png',
    },
    {
      word: 'SITTER',
      partOfSpeech: 'noun',
      definition: 'A very easy chance to score that is missed — a shot the player should have scored.',
      example: '"He missed an absolute sitter on 71 minutes — six yards out, unmarked, with only the goalkeeper to beat."',
      imageSlug: '/images/sitter.png',
    },
    {
      word: 'RATTLED',
      partOfSpeech: 'adjective',
      definition: 'Describing a team or player who is nervous, unsettled, or losing composure.',
      example: '"The home side were clearly rattled by the early goal — misplacing simple passes and failing to keep any composure."',
      imageSlug: '/images/rattled.png',
    },
    {
      word: 'BACKS TO THE WALL',
      partOfSpeech: 'phrase',
      definition: 'Defending desperately under extreme pressure with very little chance of counter-attacking.',
      example: '"For the final twenty minutes it was backs-to-the-wall defending — every player behind the ball, clearing whatever came their way."',
      imageSlug: '/images/backs-to-wall.png',
    },
    {
      word: 'FLATTERS TO DECEIVE',
      partOfSpeech: 'phrase',
      definition: 'To appear better than one really is — a team or player that shows promise but doesn\'t deliver consistently.',
      example: '"It\'s a result that flatters to deceive — they won two-nil but barely created a chance, relying entirely on set pieces."',
      imageSlug: '/images/flatters-to-deceive.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BREAK THE DEADLOCK',
      definition: 'To score the first goal and end a goalless situation.',
      example: '"The hosts finally broke the deadlock on 54 minutes — a header from a corner that the goalkeeper had no chance of stopping."',
      imageSlug: '/images/break-the-deadlock.png',
},
    {
      phrase: 'LEVEL UP / DRAW LEVEL',
      definition: 'To equalise — to score a goal that makes the score even.',
      example: '"The visitors drew level with a superb free kick on 67 minutes — the wall stood still as the ball curled into the top corner."',
      imageSlug: '/images/draw-level.png',
},
    {
      phrase: 'WRAP UP',
      definition: 'To complete a victory — to score the goal that secures the result.',
      example: '"The substitute wrapped up the points with a cool finish three minutes from time — his first touch, his first goal."',
      imageSlug: '/images/wrap-up.png',
},
    {
      phrase: 'SEND OFF',
      definition: 'To dismiss a player from the match — the referee showing a red card.',
      example: '"The visitors were reduced to ten men when their captain was sent off for a reckless challenge on the hour mark."',
      imageSlug: '/images/send-off.png',
},
    {
      phrase: 'RULE OUT',
      definition: 'To disallow — when a goal is not given because of offside, foul play, or VAR.',
      example: '"Their equaliser was ruled out for offside — the striker\'s shoulder was a fraction beyond the last defender when the pass was played."',
      imageSlug: '/images/rule-out.png',
},
    {
      phrase: 'HOLD ON',
      definition: 'To maintain a lead under pressure — to survive a period of intense opposition attack.',
      example: '"The home side held on despite a nervy final ten minutes — two goal-line clearances keeping them ahead."',
      imageSlug: '/images/hold-on.png',
},
  ],

  onThePitch: {
    instructions: 'Every phrase in a match report comes from a real on-pitch moment — these are the events and language that journalists translate into written narrative.',
    items: [
      {
        cue: 'The opening goal — the language of the first breakthrough',
        meaning: 'The opening goal defines the tone of a match report. The language used depends on how the goal was scored: a thunderbolt, a tap-in, a penalty, a moment of individual brilliance or defensive error.',
        usage: 'On the pitch, the goal causes an immediate emotional shift: the scoring team erupts, the conceding team must reset psychologically. Match report language for the opening goal: "broke the deadlock" (neutral), "stunned the home crowd" (visiting team scored), "settled the nerves" (home team scored after early pressure), "capitalised on a defensive error" (opponent\'s mistake led to the goal). "She broke the deadlock on the stroke of half-time — a clinical finish that changed the entire atmosphere in the stadium." What the journalist writes is directly shaped by where, when, and how the goal was scored.',
        imageSlug: 'otp-opening-goal',
      },
      {
        cue: 'The turning point — the moment that changed the match',
        meaning: 'Every match report identifies a turning point: a red card, a missed penalty, a substitution, or a critical goal. Identifying and describing this moment is the core skill of match reporting.',
        usage: 'On the pitch, turning points feel obvious to the players involved: "The moment they went down to ten men, we knew it was ours." Match report language: "The pivotal moment came in the 67th minute", "everything changed when", "the red card proved decisive", "the substitution transformed the game." "The substitution proved decisive — the replacement striker scored within four minutes of coming on, turning a 1-0 deficit into a 2-1 lead that the team never relinquished." Journalists must identify the turning point and build the narrative around it.',
        imageSlug: 'otp-turning-point',
      },
      {
        cue: 'Describing a save — goalkeeper match report language',
        meaning: 'A crucial save is one of the most dramatic moments in football — match reports use specific vocabulary to capture the quality of the save, its timing, and its importance.',
        usage: 'On the pitch, a world-class save produces immediate reactions: teammates rush to the keeper, opponents hold their heads. Match report language for saves: "pulled off a stunning save" (good save), "kept his side in the game with a breathtaking stop" (match-defining save), "was equal to it" (expected save, competently made), "denied" (simple, direct). "The goalkeeper denied the striker with a reflex save that defied explanation — her right hand moved before the ball had left his foot." Match reports calibrate save language to the importance and quality of the stop.',
        imageSlug: 'otp-describing-save',
      },
      {
        cue: 'Injury time — deadline language in journalism',
        meaning: 'Injury time goals and events create the most dramatic match report language — the compressed tension of the final minutes produces specific vocabulary.',
        usage: 'On the pitch in injury time: total urgency, complete chaos, desperate defending, frantic attack. Match report language: "deep into injury time" (later than expected), "in the dying moments" (very late), "at the death" (final seconds), "snatched a draw" (equalised very late), "broken hearts" (conceding in injury time), "snatched victory from the jaws of defeat" (came from behind to win very late). "She headed home in the fifth minute of injury time — snatching a draw that felt like a victory and leaving the home faithful with mixed emotions of relief and disappointment."',
        imageSlug: 'otp-injury-time',
      },
      {
        cue: 'The match as a story — structure and narrative arc',
        meaning: 'A match report is not a list of events — it is a story with an opening, a middle, and a conclusion. The match itself provides the structure; the journalist provides the narrative.',
        usage: 'On the pitch, events happen in a specific order — but their meaning depends on what comes before and after. Match report structure: Opening (the context and what was at stake), First half narrative (build-up, key moments, half-time position), Second half narrative (how it developed, the turning point), Conclusion (the result, what it means). "A first half of calculated pressure gave way to a second half of controlled excellence — a performance that suggested this team has finally learned to close out games as well as they can start them." The journalist imposes narrative shape on the chaos of 90 minutes.',
        imageSlug: 'otp-match-narrative',
      },
      {
        cue: 'Objectivity vs drama — the journalist\'s balancing act',
        meaning: 'Match reports must be accurate (what actually happened) but also engaging (how it felt). This tension between objectivity and drama is the central challenge of sports journalism.',
        usage: 'On the pitch, everything is subjective — players feel every moment emotionally. The journalist must translate emotion into language while remaining accurate. Objective: "The home side scored in the 78th minute through a corner routine." Dramatic: "With twelve minutes remaining and the home faithful beginning to accept their fate, a corner kick changed everything." Both are true. The journalist decides how much emotion to give the reader. "Journalism is not just reporting what happened — it is making the reader feel what being there felt like, while being honest about the facts." The skill is using drama without inventing it.',
        imageSlug: 'otp-objectivity-drama',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Editor', speakerColor: 'orange', text: 'James — final whistle. What have you got?' },
    { speaker: 'Journalist', speakerColor: 'blue', text: 'Three-two to the home side. Brilliant comeback. They were two goals down at half-time, then three goals in 25 minutes in the second half.' },
    { speaker: 'Editor', speakerColor: 'orange', text: 'Who clinched it?' },
    { speaker: 'Journalist', speakerColor: 'blue', text: 'The substitute — she came on at 65 minutes and wrapped it up with a header in the 89th. Against the run of play, if anything.' },
    { speaker: 'Editor', speakerColor: 'orange', text: 'Were they rattled after going behind?' },
    { speaker: 'Journalist', speakerColor: 'blue', text: 'Badly. First half was backs to the wall — they barely got out of their own box. The opener came from a howler by their goalkeeper, which settled the visitors\' nerves.' },
    { speaker: 'Editor', speakerColor: 'orange', text: 'Any red cards? VAR drama?' },
    { speaker: 'Journalist', speakerColor: 'blue', text: 'One goal was ruled out for offside — the home side\'s second, which would\'ve made it two-one at the break. That changed everything.' },
  ],

  matchingExercise: [
    { word: 'Opener', definition: 'The first goal of the match' },
    { word: 'Clinch', definition: 'To secure the winning goal or result' },
    { word: 'Comeback', definition: 'A recovery from a losing position' },
    { word: 'Against the run of play', definition: 'A goal that doesn\'t reflect the game\'s flow' },
    { word: 'Sitter', definition: 'An easy chance that should have been scored' },
    { word: 'Rattled', definition: 'Nervous and losing composure' },
    { word: 'Backs to the wall', definition: 'Desperate defending under extreme pressure' },
    { word: 'Flatters to deceive', definition: 'Appears better than it really is' },
  ],

  fillBlankExercise: [
    { before: 'The', answer: 'opener', after: 'came on 22 minutes — a header from a corner that the goalkeeper barely got a hand to.' },
    { before: 'She', answer: 'clinched', after: 'the championship title with a brace in the final — the most important goals of her career.' },
    { before: 'The', answer: 'comeback', after: 'was the story of the season — two goals down at half-time, three-two up at full time.' },
    { before: 'The first goal came', answer: 'against the run of play', after: '— the visitors had enjoyed 70% possession when a long ball found the striker unmarked.' },
    { before: 'He missed an absolute', answer: 'sitter', after: 'with the goal gaping — he\'ll be thinking about that one for a long time.' },
    { before: 'The home side were clearly', answer: 'rattled', after: 'by the early red card — three misplaced passes from the restart alone.' },
    { before: 'The final twenty minutes was pure', answer: 'backs to the wall', after: 'defending — every block, every clearance keeping the lead intact.' },
    { before: 'The home side finally', answer: 'broke the deadlock', after: 'on 54 minutes — a low drive from distance that deceived the goalkeeper.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A goal scored "against the run of play" means:',
      options: ['The team that scored had been the weaker side up to that point', 'The goal was very impressive and worth celebrating', 'The goal came very early in the match', 'The goal was scored by a player running directly at goal'],
      correctIndex: 0,
    },
    {
      question: 'The past continuous tense in match reports is typically used for:',
      options: ['Setting the context before a key event', 'Describing specific goals and incidents', 'Reporting what the manager said', 'Giving the final score'],
      correctIndex: 0,
    },
    {
      question: '"She clinched the result." What does this mean?',
      options: ['She scored the goal that made victory certain', 'She equalised to draw the match', 'She was dismissed for a foul', 'She made a crucial save'],
      correctIndex: 0,
    },
    {
      question: '"The home side were backs to the wall." What does this describe?',
      options: ['They were defending under intense pressure with everything behind the ball', 'They were attacking aggressively from their own half', 'They were physically tired from the effort', 'They had formed a defensive wall for a free kick'],
      correctIndex: 0,
    },
    {
      question: 'A "sitter" in football is:',
      options: ['A very easy chance that was missed', 'A player who sits on the bench all season', 'A goal scored from a sitting position', 'A goalkeeper who sits low on the line'],
      correctIndex: 0,
    },
    {
      question: '"The result flatters to deceive." What does the writer mean?',
      options: ['The scoreline looks more convincing than the performance actually was', 'The team played better than their result suggests', 'The match was more exciting than people expected', 'The winning team deceived the opposition with clever tactics'],
      correctIndex: 0,
    },
    {
      question: '"Their goal was ruled out for offside." What happened?',
      options: ['The goal was disallowed because a player was in an offside position', 'The goal was awarded after a VAR review', 'The goal was given but the scoreline was amended later', 'The referee stopped the match before the goal was scored'],
      correctIndex: 0,
    },
    {
      question: 'Which tense combination is most typical of match report writing?',
      options: ['Past continuous for context + past simple for events', 'Present simple throughout', 'Future perfect for predictions + past simple for results', 'Past perfect only'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using past simple and past continuous correctly.',
    items: [
      {
        sentence: 'The game ___ towards a goalless draw when Rodri struck a stunning 30-yard effort into the top corner.',
        options: ['was drifting', 'drifted', 'has drifted'],
        correctIndex: 0,
        explanation: 'Past continuous "was drifting" sets the context — the background situation. Past simple "struck" delivers the event. This is the classic match report structure: what was happening when something happened.',
      },
      {
        sentence: 'Both sides ___ to create clear chances until a defensive error gifted the visitors the opener.',
        options: ['were struggling', 'struggled', 'are struggling'],
        correctIndex: 0,
        explanation: '"Were struggling" (past continuous) describes the ongoing situation. "Gifted" (past simple) describes the specific, completed action that changed it. This structure signals a turning point — a common device in match report writing.',
      },
      {
        sentence: 'The visitors ___ possession comfortably when a careless back pass presented the striker with a simple finish.',
        options: ['were controlling', 'controlled', 'have controlled'],
        correctIndex: 0,
        explanation: '"Were controlling" — the comfortable ongoing situation — is interrupted by "presented", a past simple event. The contrast between the team\'s control and their sudden lapse is heightened by the tense switch.',
      },
      {
        sentence: 'With the clock ticking down, the substitute ___ the deadlock with her first touch.',
        options: ['broke', 'was breaking', 'had broken'],
        correctIndex: 0,
        explanation: '"Broke the deadlock" — past simple for the decisive action. The participle phrase "with the clock ticking down" sets the dramatic context, so "broke" (simple past) correctly describes the moment itself.',
      },
      {
        sentence: 'They ran out 3-0 winners, but the scoreline clearly ___ to deceive — the hosts barely created a chance all evening.',
        options: ['flattered', 'flatters', 'flattering'],
        correctIndex: 0,
        explanation: 'Simple past "flattered" — matching the past-tense narrative of the match report. "Flatters to deceive" is the fixed phrase; "flattered to deceive" is its past form.',
      },
      {
        sentence: 'It was a match of two halves. The home side ___ the first 45 minutes, but a tactical reshuffle completely changed the game.',
        options: ['dominated', 'were dominating', 'had dominated'],
        correctIndex: 0,
        explanation: 'Simple past "dominated" — a completed assessment of the first half. "Dominated" is correct for a summary statement. The past continuous "were dominating" would suggest the domination was interrupted mid-flow, which is not the meaning here.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Make the best decision for each match report writing situation.',
      items: [
        {
          customerLine: 'You are writing the opening sentence of a match report for a 0-0 draw. Which opening is most effective?',
          options: [
            '"A goalless draw at the Etihad failed to separate these two sides, though it was not without drama — a ruled-out goal, two penalty appeals, and a red card."',
            '"The match ended 0-0."',
            '"Both teams played well but neither team scored."',
            '"The fans were disappointed as neither side managed to find the net in this 0-0 draw."',
          ],
          correctIndex: 0,
          explanation: 'A strong opening immediately creates intrigue — listing the drama despite the 0-0 score makes the reader want to continue. The other options are flat, passive, or tell the reader how to feel rather than showing what happened.',
        },
        {
          customerLine: 'The better team lost 1-0 because of one mistake. Which phrase best captures this in a match report?',
          options: [
            '"A result that flatters to deceive — the winning side barely had a touch."',
            '"The winning side played better than the losing side."',
            '"The match ended with an unexpected result."',
            '"Both teams tried hard but only one team scored."',
          ],
          correctIndex: 0,
          explanation: '"Flatters to deceive" precisely captures a misleading scoreline. The other options are generic, passive, or informational without any real vividness or analytical insight.',
        },
        {
          customerLine: 'You want to describe a team that was nervous after losing a lead. Which is most vivid?',
          options: [
            '"The home side were clearly rattled — misplacing simple passes and unable to hold the ball under any pressure."',
            '"The home side were not playing well after conceding the goal."',
            '"The home side were nervous and made mistakes in the second half."',
            '"The home side struggled after the equaliser was scored by the away team."',
          ],
          correctIndex: 0,
          explanation: '"Clearly rattled" is specific and evaluative — and the follow-up detail (misplacing passes, unable to hold the ball) makes it concrete. The other options are vague or passive without showing what rattled actually looked like.',
        },
        {
          customerLine: 'How do you describe a goal that ended a long period without scoring?',
          options: [
            '"They finally broke the deadlock on 72 minutes — a low drive that crept inside the near post."',
            '"They scored their first goal on 72 minutes."',
            '"A goal was scored at 72 minutes."',
            '"The deadlock was broken when a goal was scored after 72 minutes of goalless football."',
          ],
          correctIndex: 0,
          explanation: '"Finally broke the deadlock" carries emotional weight — the "finally" reflects the wait. The specific description of the finish makes it vivid. The other options are flat, passive, or redundant.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The match report extract below has three errors — tense or vocabulary mistakes. Find and correct them.',
      dialogue: [
        { speaker: 'Report', text: 'Liverpool secured a remarkable comeback at Anfield on Saturday, overturning a two-goal deficit to win 3-2.' },
        { speaker: 'Report', text: 'The visitors were scoring early — the opener came against the run of play when a loose ball fell to their striker on the edge of the area.' },
        { speaker: 'Report', text: 'Liverpool were clearly rattled, and a second goal before the break left them with a mountain to climb.' },
        { speaker: 'Report', text: 'The comeback begins in the 56th minute when Salah broke the deadlock with a powerful header.' },
        { speaker: 'Report', text: 'With ten minutes remaining and the scores level, the substitute clinched the points with an absolute sitter — a composed finish from six yards.' },
        { speaker: 'Report', text: 'It was a result that flattered the visitors — Liverpool dominated every statistical category except the most important one.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The visitors were scoring early',
          correction: 'The visitors scored early',
          explanation: '"Were scoring" (past continuous) doesn\'t fit a completed, specific event. A goal is a discrete moment — it uses the past simple "scored". Past continuous is for ongoing background situations, not for the goal itself.',
        },
        {
          lineIndex: 3,
          incorrectText: 'The comeback begins in the 56th minute',
          correction: 'The comeback began in the 56th minute',
          explanation: 'Match reports are written in the past tense — "began", not "begins". The present tense is inconsistent with the rest of the extract which is past tense.',
        },
        {
          lineIndex: 4,
          incorrectText: 'the substitute clinched the points with an absolute sitter — a composed finish from six yards',
          correction: 'the substitute clinched the points with a cool finish from six yards',
          explanation: 'A "sitter" is a chance that is MISSED — the word describes an opportunity that should have been scored but wasn\'t. "He scored with a sitter" is a contradiction. The correct phrase is "a cool finish" or "a composed finish".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each match report sentence in an engaging, professional way.',
      items: [
        {
          customerLine: 'Complete this match report sentence about a decisive late goal.',
          salespersonStart: 'Both sides were locked at 2-2 with five minutes remaining when...',
          suggestedCompletion: 'the substitute latched onto a loose ball and clinched the points with a thunderous strike into the roof of the net.',
        },
        {
          customerLine: 'Complete this analysis of a misleading scoreline.',
          salespersonStart: 'It was a result that flatters to deceive — the three-nil scoreline suggests...',
          suggestedCompletion: 'a dominant performance, but the hosts barely created a chance in open play, relying on two penalties and an own goal.',
        },
        {
          customerLine: 'Complete this sentence describing desperate late defending.',
          salespersonStart: 'For the final quarter of the game, the home side were backs to the wall — two defenders...',
          suggestedCompletion: 'making goal-line clearances, the goalkeeper pulling off three world-class saves to keep the lead intact.',
        },
        {
          customerLine: 'Complete this sentence about a memorable comeback.',
          salespersonStart: 'The comeback will live long in the memory — two goals down at half-time, they...',
          suggestedCompletion: 'drew level within ten minutes of the restart and completed the most extraordinary turnaround with a 90th-minute penalty.',
        },
      ],
    },
  },
};
