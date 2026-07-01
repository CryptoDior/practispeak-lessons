import { Lesson } from '@/types/lesson';

export const c1DefensiveMetrics: Lesson = {
  slug: 'c1-defensive-metrics',
  title: 'Defensive Metrics',
  subtitle: 'Unit 1 — Data & Statistics',
  level: 'C1-C2',
  description: 'Defence is harder to measure than attack — but modern football analytics has developed powerful tools to do it. Learn the key defensive statistics and the language to discuss them.',
  heroImage: '/images/defensive-metrics.png',

  warmUp: {
    questions: [
      'Is it easy to tell if a defender has had a good game just by watching? What would you look for?',
      'What is a "tackle" and what is an "interception"? Are they the same thing?',
      'Have you heard of "pressures" or "defensive actions" as a football statistic? What might they measure?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Passive voice — describing defensive actions',
    description: 'In football analysis, we often use the passive voice when the focus is on what happened to the ball or the action, not who did it. "The ball was recovered in the defensive third" (passive — focus on the ball). "The striker was dispossessed twice" (passive — focus on the striker, not the defender). The passive is also used when the agent (the person doing the action) is unknown or less important. In written match reports and data analysis, passive voice is very common.',
    positiveExamples: [
      { sentence: 'The ball was won back 24 times in the opponent\'s half.', note: 'passive — focus is on what happened to the ball, not who did it' },
      { sentence: 'The striker was pressed into making an error in the 78th minute.', note: 'passive — focus is on the striker and what happened to him' },
      { sentence: 'Three dangerous counterattacks were stopped before they could develop.', note: 'passive — the defensive success is highlighted, not who stopped them' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'TACKLE',
      partOfSpeech: 'noun / verb',
      definition: 'A challenge where a player tries to take the ball from an opponent by physical contact. A successful tackle wins the ball back.',
      example: '"He made 7 tackles in the match — every single one was successful."',
      imageSlug: '/images/tackle.png',
    },
    {
      word: 'INTERCEPTION',
      partOfSpeech: 'noun',
      definition: 'When a defender reads the play and cuts out a pass before it reaches the opponent — without physical contact.',
      example: '"She made three interceptions in the first half — her reading of the game was excellent."',
      imageSlug: '/images/interception.png',
    },
    {
      word: 'CLEARANCE',
      partOfSpeech: 'noun',
      definition: 'When a defender kicks or heads the ball away from danger — usually out of the penalty area or defensive zone.',
      example: '"The centre-back made a crucial clearance off the line to keep the score at 1-0."',
      imageSlug: '/images/clearance.png',
    },
    {
      word: 'PRESSURE',
      partOfSpeech: 'noun',
      definition: 'In analytics, a "pressure" is when a player runs towards an opponent to force them into a mistake. Teams track how many pressures they apply per game.',
      example: '"City applied 78 pressures in the final third — they pressed aggressively all night."',
      imageSlug: '/images/pressure-defensive.png',
    },
    {
      word: 'BLOCK',
      partOfSpeech: 'noun / verb',
      definition: 'When a player puts their body in the way of a shot or cross to stop it reaching the goal.',
      example: '"He blocked four shots in the penalty area — the goalkeeper barely needed to touch the ball."',
      imageSlug: '/images/block.png',
    },
    {
      word: 'xGA (EXPECTED GOALS AGAINST)',
      partOfSpeech: 'noun',
      definition: 'The same concept as xG but for defence — how many goals a team should have conceded based on the quality of chances the opponent created.',
      example: '"Their xGA was 0.6 but they conceded two goals — the goalkeeper had a difficult night."',
      imageSlug: '/images/xga.png',
    },
    {
      word: 'DEFENSIVE LINE',
      partOfSpeech: 'noun',
      definition: 'The line formed by the back four (or three) defenders across the pitch. The defensive line can be high (aggressive) or deep (cautious).',
      example: '"Their defensive line was very high — that\'s why the striker got in behind twice."',
      imageSlug: '/images/defensive-line.png',
    },
    {
      word: 'AERIAL DUEL',
      partOfSpeech: 'noun',
      definition: 'A contest between two players to win the ball in the air — usually from a cross or a long ball.',
      example: '"The centre-back won 8 out of 9 aerial duels — he was dominant in the air all night."',
      imageSlug: '/images/aerial-duel.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HOLD OFF',
      definition: 'To keep an opponent at a distance — to stop them from getting closer to the ball or the goal.',
      example: '"He held off the striker well and forced him wide, away from goal."',
      imageSlug: '/images/hold-off.png',
    },
    {
      phrase: 'TRACK BACK',
      definition: 'To run back towards your own goal to defend — especially when an attacking player follows the opponent after losing the ball.',
      example: '"The winger tracked back brilliantly — she covered 11km in total, the most on the pitch."',
      imageSlug: '/images/track-back.png',
    },
    {
      phrase: 'CUT OUT',
      definition: 'To intercept a pass or cross before it reaches the intended player.',
      example: '"The centre-back cut out three dangerous crosses in the second half."',
      imageSlug: '/images/cut-out.png',
    },
    {
      phrase: 'STEP UP',
      definition: 'For the defensive line to move forward as a unit — to keep the opponent offside or to press higher.',
      example: '"They stepped up together and caught the striker offside four times in the first half."',
      imageSlug: '/images/step-up.png',
    },
    {
      phrase: 'FILL IN',
      definition: 'To cover a space left by a teammate who has moved out of position.',
      example: '"When the right-back pushed forward, the centre-back filled in to cover the space."',
      imageSlug: '/images/fill-in.png',
    },
    {
      phrase: 'CLOSE DOWN',
      definition: 'To run towards an opponent to apply pressure and reduce the time they have on the ball.',
      example: '"They closed down every player as soon as they received the ball — the press was relentless."',
      imageSlug: '/images/close-down.png',
    },
  ],

  onThePitch: {
    instructions: 'These are key defensive moments on the pitch — learn the language used in each situation.',
    items: [
      {
        cue: 'Making a tackle — challenging for the ball',
        meaning: 'A tackle is a physical challenge to win the ball from an opponent. A clean tackle wins possession. A mistimed tackle gives away a free kick or a penalty.',
        usage: '"Tackle! Win the ball!" On the pitch: "Stay on your feet — don\'t dive in!" The analyst later: "He made 6 successful tackles — but also 2 unsuccessful ones that gave away free kicks in dangerous areas."',
        imageSlug: 'otp-tackle',
      },
      {
        cue: 'Making an interception — reading the play',
        meaning: 'An interception happens when a defender reads where the pass is going before it\'s made and steps in to cut it out. Great interceptions come from anticipation, not just speed.',
        usage: '"She\'s read it! Interception!" On the pitch: "Read it! Step! Step!" The analyst: "She made 5 interceptions — the highest number of any defender in the league this week. Her positioning was exceptional."',
        imageSlug: 'otp-interception',
      },
      {
        cue: 'Keeping the defensive line — holding shape',
        meaning: 'The back line needs to move together as a unit. If one defender steps forward and the rest don\'t, a gap opens. Coaches constantly shout to maintain the line.',
        usage: '"Hold the line! Stay together!" On the pitch: "Step up! All of you — together!" The analyst: "Their defensive line was well-organised — they caught the opponent offside 6 times."',
        imageSlug: 'otp-defensive-line',
      },
      {
        cue: 'Closing down — pressing the ball carrier',
        meaning: 'When the opponent has the ball, defenders are coached to close them down quickly — to reduce time and force mistakes. "Pressing" is the organised version of closing down.',
        usage: '"Close him down! Don\'t let him turn!" On the pitch: "Press! Now! No time on the ball!" The analyst: "They applied 82 pressures — 34 of them in the final third. The pressure success rate was 31%."',
        imageSlug: 'otp-close-down',
      },
      {
        cue: 'Tracking the runner — following your opponent',
        meaning: 'Defenders must track runners — follow opponents who make runs into dangerous space. Losing your runner is how goals are conceded from crosses and set pieces.',
        usage: '"Track your runner! Don\'t lose him!" On the pitch: "With you! With you!" The analyst: "He lost his runner at the corner — that\'s how United scored. Tracking from set pieces is an area they need to improve."',
        imageSlug: 'otp-track-runner',
      },
      {
        cue: 'Reading xGA — evaluating defensive performance',
        meaning: 'xGA (expected goals against) tells you how many goals a team should have conceded based on chance quality. If you concede fewer than your xGA, your defence (or goalkeeper) overperformed.',
        usage: '"Their xGA was 1.8 but they kept a clean sheet — the goalkeeper was outstanding." The analyst: "Over the season, their xGA is 38 and they\'ve conceded 22 — that defensive overperformance will likely regress."',
        imageSlug: 'otp-xga',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst', speakerColor: 'orange', text: 'Let me run through the defensive numbers from Saturday.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Go ahead — I want to know why we conceded from that corner.' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'The runner was tracked until the 58th-minute corner. Then he was lost. The centre-back moved to the near post and left him completely unmarked.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'That\'s a communication problem. What about the rest of the defensive data?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: 'Our xGA for the whole match was 0.7 — so they really didn\'t create much. Conceding from a set piece is painful but the open-play defending was excellent.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'How many pressures did we apply?' },
    { speaker: 'Analyst', speakerColor: 'orange', text: '64 pressures total. Pressure success rate was 28% — slightly below our average but not bad. We closed them down well in the first half especially.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Okay. So the only real issue was tracking from set pieces. Let\'s work on that in training.' },
  ],

  matchingExercise: [
    { word: 'Tackle', definition: 'A physical challenge to win the ball from an opponent through direct contact' },
    { word: 'Interception', definition: 'Reading a pass and cutting it out before it reaches the intended player' },
    { word: 'Clearance', definition: 'Kicking or heading the ball away from danger, usually out of the penalty area' },
    { word: 'Pressure', definition: 'Running towards an opponent to reduce their time on the ball and force a mistake' },
    { word: 'xGA', definition: 'The expected goals a team should have conceded based on chance quality allowed' },
    { word: 'Aerial duel', definition: 'A contest between two players to win the ball in the air' },
    { word: 'Defensive line', definition: 'The horizontal row formed by the back four across the pitch' },
    { word: 'Block', definition: 'Putting your body in the way of a shot or cross to stop it reaching the goal' },
  ],

  fillBlankExercise: [
    { before: 'She made five', answer: 'interceptions', after: '— her reading of the game was exceptional.' },
    { before: 'They', answer: 'closed down', after: 'every opponent as soon as they received the ball.' },
    { before: 'The right-back', answer: 'tracked back', after: 'to cover the space after the winger went forward.' },
    { before: 'The defensive line needs to', answer: 'step up', after: 'as a unit to keep the striker offside.' },
    { before: 'Their xGA was 0.7 but they conceded two — the goalkeeper', answer: 'underperformed', after: 'badly.' },
    { before: 'The centre-back', answer: 'cut out', after: 'three dangerous crosses in the second half.' },
    { before: 'When the full-back pushed forward, the centre-back', answer: 'filled in', after: 'to cover the space.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the difference between a tackle and an interception?',
      options: ['A tackle involves physical contact; an interception involves reading and cutting out a pass', 'A tackle is always successful; an interception can fail', 'A tackle wins a free kick; an interception wins a corner'],
      correctIndex: 0,
    },
    {
      question: 'A team has xGA of 2.0 but concedes 0 goals. What happened?',
      options: ['The defence or goalkeeper overperformed — they allowed good chances but didn\'t concede', 'The defence underperformed — they should have kept a cleaner sheet', 'The xGA model made an error'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "They ___ down every opponent quickly — the press was relentless."',
      options: ['closed', 'tracked', 'stepped'],
      correctIndex: 0,
    },
    {
      question: 'Why do defenders "step up" as a unit?',
      options: ['To push the defensive line higher and catch opponents offside or press them higher up the pitch', 'To cover a player who is going forward to attack', 'To mark a specific dangerous player more closely'],
      correctIndex: 0,
    },
    {
      question: 'What does a high "pressure success rate" mean?',
      options: ['When a team presses, they win the ball back a high percentage of the time', 'The team applies a lot of pressure but rarely wins the ball', 'The team defends in a deep block without pressing'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about defensive metrics.',
    items: [
      {
        sentence: 'The ball ___ won back 24 times in the opponent\'s half — an impressive pressing performance.',
        options: ['was', 'is', 'were'],
        correctIndex: 0,
        explanation: 'Passive voice: "The ball was won back" — focus is on what happened to the ball, not who did it.',
      },
      {
        sentence: 'He ___ off the striker well, forcing him wide and away from goal.',
        options: ['held', 'closed', 'stepped'],
        correctIndex: 0,
        explanation: '"Hold off" means to keep an opponent at a distance without making a tackle.',
      },
      {
        sentence: 'The centre-back ___ out three dangerous crosses before they could cause problems.',
        options: ['cut', 'filled', 'tracked'],
        correctIndex: 0,
        explanation: '"Cut out" means to intercept a pass or cross before it reaches its target.',
      },
      {
        sentence: 'She ___ back 11km — the highest distance covered by any defender in the league.',
        options: ['tracked', 'closed', 'held'],
        correctIndex: 0,
        explanation: '"Track back" means to run back towards your own goal to defend.',
      },
      {
        sentence: 'Their xGA was 0.8, but they conceded two goals — the goalkeeper clearly ___.',
        options: ['underperformed', 'overperformed', 'measured up'],
        correctIndex: 0,
        explanation: 'If you concede MORE than your xGA, the defence has underperformed.',
      },
      {
        sentence: 'They ___ up together and caught the striker offside four times.',
        options: ['stepped', 'tracked', 'closed'],
        correctIndex: 0,
        explanation: '"Step up" means for the defensive line to move forward as a unit.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'A pundit is discussing defensive performance. Choose the most analytically accurate response.',
      items: [
        {
          customerLine: '"He made 8 tackles — clearly the best defender on the pitch tonight."',
          options: [
            '"Tackles alone don\'t tell the full story. We also need to look at how many he won, his interceptions, aerial duels, and whether he was in the right position to begin with."',
            '"Absolutely — 8 tackles is an incredible number. He was dominant all night."',
            '"Tackles are irrelevant in modern football — it\'s all about pressing stats now."',
          ],
          correctIndex: 0,
          explanation: 'Good analysis considers multiple metrics together, not just one impressive number.',
        },
        {
          customerLine: '"They kept a clean sheet — their defensive performance must have been excellent."',
          options: [
            '"A clean sheet is a great result, but we should check their xGA. If the opponent created chances worth 2.5 goals and the goalkeeper saved everything, the defence might have been lucky."',
            '"A clean sheet always means the defence was excellent — that\'s all that matters."',
            '"Clean sheets are not important in modern football — xGA is the only thing that counts."',
          ],
          correctIndex: 0,
          explanation: 'A clean sheet combined with high xGA means the defence was lucky. xGA tells the deeper story.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the error in this defensive report.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'orange', text: 'I want to highlight the defensive data from Tuesday\'s match.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'The back four were tracked back excellently whenever United countered.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'The centre-backs made 11 aerial duel wins between them — a very strong number.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Our xGA for the game was 0.5 and we kept a clean sheet — a very solid defensive overperformance.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'The only concern is that we applied only 41 pressures — below our season average of 68.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The back four were tracked back',
          correction: 'The back four tracked back',
          explanation: '"Track back" is an active verb — the defenders do it themselves. "Were tracked back" is passive and would mean someone tracked them backwards, which makes no sense here.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analyst\'s sentence in a natural, professional way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'Although they conceded two goals, the defensive data tells a different story because...',
          suggestedCompletion: 'their xGA was only 0.6 — both goals came from set-piece situations, not open-play defensive failures.',
        },
        {
          customerLine: '',
          salespersonStart: 'When we look at the number of pressures applied in the final third...',
          suggestedCompletion: 'we can see that City pressed aggressively high up the pitch, winning the ball back quickly and close to the opponent\'s goal.',
        },
        {
          customerLine: '',
          salespersonStart: 'The centre-back lost his runner at the corner, which means...',
          suggestedCompletion: 'the opponent had a free header in the penalty area — exactly the kind of aerial duel you must win at this level.',
        },
      ],
    },
  },
};
