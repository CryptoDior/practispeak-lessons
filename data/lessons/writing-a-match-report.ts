import { Lesson } from '../../types/lesson';

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
    title: 'Past Simple and Past Continuous in Sports Writing',
    explanation: 'Match reports use two past tenses in a specific way. The past simple describes completed actions and key events: "He scored on 67 minutes." The past continuous describes the context, atmosphere, or ongoing situation in which those events occurred: "Both sides were pressing high when the breakthrough came." Together, the two tenses create a narrative rhythm — moving between what was happening (background) and what happened (event). Understanding this rhythm helps you both read and write sports writing at a professional level.',
    examples: [
      {
        sentence: '"Both sides were struggling to create clear chances when Kvaratskhelia cut inside and struck a stunning 25-yard effort."',
        label: 'Past continuous (context) + past simple (event)',
      },
      {
        sentence: '"The visitors were controlling possession comfortably until a defensive lapse on 34 minutes gifted the home side their opener."',
        label: 'Past continuous interrupted by a past simple event',
      },
      {
        sentence: '"It was a match that ebbed and flowed. The home side created the better chances but ultimately paid the price for poor finishing."',
        label: 'Past simple throughout — for clear narrative summary',
      },
    ],
    tip: 'In a match report, the past continuous is often used to set up a key event: "The game was drifting towards a goalless draw when..." This structure signals the reader that something important is about to be described. Learn to recognise and use it.',
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
      inAction: 'Used when the first goal of a match is scored.',
      register: 'formal / journalistic',
      inContext: 'Match reports, football commentary.',
    },
    {
      phrase: 'LEVEL UP / DRAW LEVEL',
      definition: 'To equalise — to score a goal that makes the score even.',
      example: '"The visitors drew level with a superb free kick on 67 minutes — the wall stood still as the ball curled into the top corner."',
      inAction: 'Used for equalising goals.',
      register: 'neutral / journalistic',
      inContext: 'Match reports, commentary.',
    },
    {
      phrase: 'WRAP UP',
      definition: 'To complete a victory — to score the goal that secures the result.',
      example: '"The substitute wrapped up the points with a cool finish three minutes from time — his first touch, his first goal."',
      inAction: 'Used for goals that confirm a victory.',
      register: 'informal / journalistic',
      inContext: 'Match reports, sports commentary.',
    },
    {
      phrase: 'SEND OFF',
      definition: 'To dismiss a player from the match — the referee showing a red card.',
      example: '"The visitors were reduced to ten men when their captain was sent off for a reckless challenge on the hour mark."',
      inAction: 'Used for red card dismissals.',
      register: 'neutral',
      inContext: 'Match reports, disciplinary discussions.',
    },
    {
      phrase: 'RULE OUT',
      definition: 'To disallow — when a goal is not given because of offside, foul play, or VAR.',
      example: '"Their equaliser was ruled out for offside — the striker\'s shoulder was a fraction beyond the last defender when the pass was played."',
      inAction: 'Used for disallowed goals.',
      register: 'neutral',
      inContext: 'Match reports, VAR decisions.',
    },
    {
      phrase: 'HOLD ON',
      definition: 'To maintain a lead under pressure — to survive a period of intense opposition attack.',
      example: '"The home side held on despite a nervy final ten minutes — two goal-line clearances keeping them ahead."',
      inAction: 'Used for teams defending a lead under pressure.',
      register: 'neutral',
      inContext: 'Match reports, commentary.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpWMR1',
      title: 'Match Report Structure',
      image: '/images/ootp-report-structure.png',
      description: 'Students identify the sections of a match report.',
      prompt: 'A standard match report has five sections: (1) opening summary, (2) first half narrative, (3) second half narrative, (4) key moments analysis, (5) post-match reaction. Read the extract provided and identify which section each paragraph belongs to. Discuss: which section is most important for a reader who only has 30 seconds?',
    },
    {
      id: 'ootpWMR2',
      title: 'Opening Line Challenge',
      image: '/images/ootp-opening-line.png',
      description: 'Students write a compelling opening sentence for a match report.',
      prompt: 'A great match report opening does three things: tells you what happened, makes you want to read more, and sets the tone. Write an opening sentence for each of these results: (1) A 5-0 win by the underdog. (2) A 0-0 draw in a cup final. (3) A 3-2 comeback win with a 90th-minute goal. Use vocabulary from this lesson.',
    },
    {
      id: 'ootpWMR3',
      title: 'Tense Swap',
      image: '/images/ootp-tense-swap.png',
      description: 'Students practise switching between past simple and past continuous in sports writing.',
      prompt: 'Rewrite each sentence pair so the first uses past continuous (context) and the second uses past simple (event): (1) "They scored on 23 minutes. They had most of the possession." (2) "He missed a sitter. The crowd was silent." (3) "She clinched it with a header. The opposition was rattling them." Discuss how each rewrite changes the effect.',
    },
    {
      id: 'ootpWMR4',
      title: 'Write 100 Words',
      image: '/images/ootp-write-100-words.png',
      description: 'Students write a 100-word match report extract for a match they know.',
      prompt: 'Write exactly 100 words describing the key moments of a match you watched or know well. Use: (a) at least two phrasal verbs from this lesson; (b) at least three vocabulary items; (c) at least one past continuous + past simple construction. Share with a partner and edit each other\'s work.',
    },
    {
      id: 'ootpWMR5',
      title: 'Headline Writer',
      image: '/images/ootp-headline-writer.png',
      description: 'Students write match report headlines using football language.',
      prompt: 'Write a headline for each scenario: (1) City win 3-0 but barely deserved it. (2) United come back from 2-0 down to win 3-2. (3) The best player gets sent off and the team loses. (4) A 0-0 in a must-win match. Match report headlines are usually short, punchy, and often use wordplay.',
    },
    {
      id: 'ootpWMR6',
      title: 'Report vs Analysis',
      image: '/images/ootp-report-vs-analysis.png',
      description: 'Students compare a match report with a tactical analysis of the same game.',
      prompt: 'Compare these two descriptions of the same event: (A) "Their striker was absolutely rattled after missing that sitter — he barely touched the ball for 20 minutes." (B) "The striker\'s poor press resistance after losing possession indicated a psychological fragility that the away side exploited tactically." Which is a match report voice? Which is a tactical analysis voice? How can you tell?',
    },
  ],

  videos: [],

  dialogue: {
    title: 'Deadline Rush',
    context: 'A sports journalist calls his editor from the press box as the final whistle blows.',
    lines: [
      { speaker: 'Editor', text: 'James — final whistle. What have you got?' },
      { speaker: 'Journalist', text: 'Three-two to the home side. Brilliant comeback. They were two goals down at half-time, then three goals in 25 minutes in the second half.' },
      { speaker: 'Editor', text: 'Who clinched it?' },
      { speaker: 'Journalist', text: 'The substitute — she came on at 65 minutes and wrapped it up with a header in the 89th. Against the run of play, if anything.' },
      { speaker: 'Editor', text: 'Were they rattled after going behind?' },
      { speaker: 'Journalist', text: 'Badly. First half was backs to the wall — they barely got out of their own box. The opener came from a howler by their goalkeeper, which settled the visitors\' nerves.' },
      { speaker: 'Editor', text: 'Any red cards? VAR drama?' },
      { speaker: 'Journalist', text: 'One goal was ruled out for offside — the home side\'s second, which would\'ve made it two-one at the break. That changed everything.' },
    ],
  },

  matchingExercise: {
    title: 'Match Report Vocabulary',
    instructions: 'Match each term to its definition.',
    pairs: [
      { term: 'Opener', definition: 'The first goal of the match' },
      { term: 'Clinch', definition: 'To secure the winning goal or result' },
      { term: 'Comeback', definition: 'A recovery from a losing position' },
      { term: 'Against the run of play', definition: 'A goal that doesn\'t reflect the game\'s flow' },
      { term: 'Sitter', definition: 'An easy chance that should have been scored' },
      { term: 'Rattled', definition: 'Nervous and losing composure' },
      { term: 'Backs to the wall', definition: 'Desperate defending under extreme pressure' },
      { term: 'Flatters to deceive', definition: 'Appears better than it really is' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank',
    instructions: 'Complete each match report sentence with the correct word or phrase.',
    wordBank: ['opener', 'clinched', 'comeback', 'against the run of play', 'sitter', 'rattled', 'backs to the wall', 'broke the deadlock'],
    items: [
      { sentence: 'The ___ came on 22 minutes — a header from a corner that the goalkeeper barely got a hand to.', answer: 'opener' },
      { sentence: 'She ___ the championship title with a brace in the final — the most important goals of her career.', answer: 'clinched' },
      { sentence: 'The ___ was the story of the season — two goals down at half-time, three-two up at full time.', answer: 'comeback' },
      { sentence: 'The first goal came ___ — the visitors had enjoyed 70% possession when a long ball found the striker unmarked.', answer: 'against the run of play' },
      { sentence: 'He missed an absolute ___ with the goal gaping — he\'ll be thinking about that one for a long time.', answer: 'sitter' },
      { sentence: 'The home side were clearly ___ by the early red card — three misplaced passes from the restart alone.', answer: 'rattled' },
      { sentence: 'The final twenty minutes was pure ___ defending — every block, every clearance keeping the lead intact.', answer: 'backs to the wall' },
      { sentence: 'The home side finally ___ on 54 minutes — a low drive from distance that deceived the goalkeeper.', answer: 'broke the deadlock' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Answer',
    instructions: 'Choose the answer that best fits each question.',
    items: [
      {
        question: 'A goal scored "against the run of play" means:',
        options: ['The team that scored had been the weaker side up to that point', 'The goal was very impressive and worth celebrating', 'The goal came very early in the match', 'The goal was scored by a player running directly at goal'],
        answer: 'The team that scored had been the weaker side up to that point',
      },
      {
        question: 'The past continuous tense in match reports is typically used for:',
        options: ['Setting the context before a key event', 'Describing specific goals and incidents', 'Reporting what the manager said', 'Giving the final score'],
        answer: 'Setting the context before a key event',
      },
      {
        question: '"She clinched the result." What does this mean?',
        options: ['She scored the goal that made victory certain', 'She equalised to draw the match', 'She was dismissed for a foul', 'She made a crucial save'],
        answer: 'She scored the goal that made victory certain',
      },
      {
        question: '"The home side were backs to the wall." What does this describe?',
        options: ['They were defending under intense pressure with everything behind the ball', 'They were attacking aggressively from their own half', 'They were physically tired from the effort', 'They had formed a defensive wall for a free kick'],
        answer: 'They were defending under intense pressure with everything behind the ball',
      },
      {
        question: 'A "sitter" in football is:',
        options: ['A very easy chance that was missed', 'A player who sits on the bench all season', 'A goal scored from a sitting position', 'A goalkeeper who sits low on the line'],
        answer: 'A very easy chance that was missed',
      },
      {
        question: '"The result flatters to deceive." What does the writer mean?',
        options: ['The scoreline looks more convincing than the performance actually was', 'The team played better than their result suggests', 'The match was more exciting than people expected', 'The winning team deceived the opposition with clever tactics'],
        answer: 'The scoreline looks more convincing than the performance actually was',
      },
      {
        question: '"Their goal was ruled out for offside." What happened?',
        options: ['The goal was disallowed because a player was in an offside position', 'The goal was awarded after a VAR review', 'The goal was given but the scoreline was amended later', 'The referee stopped the match before the goal was scored'],
        answer: 'The goal was disallowed because a player was in an offside position',
      },
      {
        question: 'Which tense combination is most typical of match report writing?',
        options: ['Past continuous for context + past simple for events', 'Present simple throughout', 'Future perfect for predictions + past simple for results', 'Past perfect only'],
        answer: 'Past continuous for context + past simple for events',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using past simple and past continuous correctly.',
    items: [
      {
        sentence: 'The game ___ (drift) towards a goalless draw when Rodri ___ (strike) a stunning 30-yard effort into the top corner.',
        answer: 'was drifting / struck',
        explanation: 'Past continuous "was drifting" sets the context — the background situation. Past simple "struck" delivers the event. This is the classic match report structure: what was happening when something happened.',
      },
      {
        sentence: 'Both sides ___ (struggle) to create clear chances until a defensive error in the 34th minute ___ (gift) the visitors the opener.',
        answer: 'were struggling / gifted',
        explanation: '"Were struggling" (past continuous) describes the ongoing situation. "Gifted" (past simple) describes the specific, completed action that changed it. This structure signals a turning point — a common device in match report writing.',
      },
      {
        sentence: 'The visitors ___ (control) possession comfortably when a careless back pass ___ (present) the striker with a simple finish.',
        answer: 'were controlling / presented',
        explanation: '"Were controlling" — the comfortable ongoing situation — is interrupted by "presented", a past simple event. The contrast between the team\'s control and their sudden lapse is heightened by the tense switch.',
      },
      {
        sentence: 'With the clock ___ (tick) down and both sides ___ (look) for a winner, the substitute ___ (break) the deadlock with her first touch.',
        answer: 'ticking / looking / broke',
        explanation: '"Ticking" and "looking" are present participles used in a "with + participle" construction to set dramatic context. "Broke" is past simple for the event. "With the clock ticking down" is a very common match report device.',
      },
      {
        sentence: 'They ___ (run) out 3-0 winners, but the scoreline clearly ___ (flatter) to deceive — the hosts barely ___ (create) a chance all evening.',
        answer: 'ran / flattered / created',
        explanation: 'Three past simple constructions in a row for the narrative summary. "Flatter to deceive" takes past simple as the analysis mood — asserting a judgement about the match.',
      },
      {
        sentence: 'It ___ (be) a match of two halves. The home side ___ (dominate) the first 45 minutes, but a tactical reshuffle at half-time completely ___ (change) the game.',
        answer: 'was / dominated / changed',
        explanation: '"Was" — simple past for the opening assessment. "Dominated" and "changed" — past simple for the narrative facts. "A match of two halves" is a cliché in football writing — useful to know and use sparingly.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Report Writing Decisions',
      instructions: 'Make the best decision for each match report writing situation.',
      items: [
        {
          prompt: 'You are writing the opening sentence of a match report for a 0-0 draw. Which opening is most effective?',
          options: [
            '"A goalless draw at the Etihad failed to separate these two sides, though it was not without drama — a ruled-out goal, two penalty appeals, and a red card."',
            '"The match ended 0-0."',
            '"Both teams played well but neither team scored."',
            '"The fans were disappointed as neither side managed to find the net in this 0-0 draw."',
          ],
          answer: '"A goalless draw at the Etihad failed to separate these two sides, though it was not without drama — a ruled-out goal, two penalty appeals, and a red card."',
        },
        {
          prompt: 'The better team lost 1-0 because of one mistake. Which phrase best captures this in a match report?',
          options: [
            '"A result that flatters to deceive — the winning side barely had a touch."',
            '"The winning side played better than the losing side."',
            '"The match ended with an unexpected result."',
            '"Both teams tried hard but only one team scored."',
          ],
          answer: '"A result that flatters to deceive — the winning side barely had a touch."',
        },
        {
          prompt: 'You want to describe a team that was nervous after losing a lead. Which is most vivid?',
          options: [
            '"The home side were clearly rattled — misplacing simple passes and unable to hold the ball under any pressure."',
            '"The home side were not playing well after conceding the goal."',
            '"The home side were nervous and made mistakes in the second half."',
            '"The home side struggled after the equaliser was scored by the away team."',
          ],
          answer: '"The home side were clearly rattled — misplacing simple passes and unable to hold the ball under any pressure."',
        },
        {
          prompt: 'How do you describe a goal that ended a long period without scoring?',
          options: [
            '"They finally broke the deadlock on 72 minutes — a low drive that crept inside the near post."',
            '"They scored their first goal on 72 minutes."',
            '"A goal was scored at 72 minutes."',
            '"The deadlock was broken when a goal was scored after 72 minutes of goalless football."',
          ],
          answer: '"They finally broke the deadlock on 72 minutes — a low drive that crept inside the near post."',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The match report extract below has three errors — tense or vocabulary mistakes. Find and correct them.',
      dialogue: [
        { speaker: 'Report', text: 'Liverpool secured a remarkable comeback at Anfield on Saturday, overturning a two-goal deficit to win 3-2.' },
        { speaker: 'Report', text: 'The visitors were scoring early — the opener came against the run of play when a loose ball fell to their striker on the edge of the area.' },
        { speaker: 'Report', text: 'Liverpool were clearly rattled, and a second goal before the break left them with a mountain to climb.' },
        { speaker: 'Report', text: 'The comeback begins in the 56th minute when Salah broke the deadlock with a powerful header.' },
        { speaker: 'Report', text: 'With ten minutes remaining and the scores level, the substitute clinched the points with an absolute sitter — a composed finish from six yards.' },
        { speaker: 'Report', text: 'It was a result that flattered the visitors — Liverpool dominated every statistical category except the most important one.' },
      ],
      errors: [
        { line: 2, original: 'The visitors were scoring early', correction: 'The visitors scored early', explanation: '"Were scoring" (past continuous) doesn\'t fit a completed, specific event. A goal is a discrete moment — it uses the past simple "scored". Past continuous is for ongoing background situations, not for the goal itself.' },
        { line: 4, original: 'The comeback begins in the 56th minute', correction: 'The comeback began in the 56th minute', explanation: 'Match reports are written in the past tense — "began", not "begins". The present tense "begins" is incorrect here (though some publications use a "historical present" style, this is inconsistent with the rest of the extract which is past tense).' },
        { line: 5, original: 'the substitute clinched the points with an absolute sitter — a composed finish from six yards', correction: 'the substitute clinched the points with a cool finish from six yards', explanation: 'A "sitter" is a chance that is MISSED — the word describes an opportunity that should have been scored but wasn\'t. "He scored with a sitter" is a contradiction. It should be "a cool finish", "a composed finish", or "a straightforward finish".' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each match report sentence in an engaging, professional way.',
      items: [
        {
          prompt: 'Both sides were locked at 2-2 with five minutes remaining when...',
          exampleAnswer: 'the substitute latched onto a loose ball and clinched the points with a thunderous strike into the roof of the net.',
        },
        {
          prompt: 'It was a result that flatters to deceive — the three-nil scoreline suggests...',
          exampleAnswer: 'a dominant performance, but the hosts barely created a chance in open play, relying on two penalties and an own goal.',
        },
        {
          prompt: 'For the final quarter of the game, the home side were backs to the wall — two defenders...',
          exampleAnswer: 'making goal-line clearances, the goalkeeper pulling off three world-class saves to keep the lead intact.',
        },
        {
          prompt: 'The comeback will live long in the memory — two goals down at half-time, they...',
          exampleAnswer: 'drew level within ten minutes of the restart and completed the most extraordinary turnaround with a 90th-minute penalty.',
        },
      ],
    },
  },
};
