import { Lesson } from '@/types/lesson';

export const readingMatchReports: Lesson = {
  slug: 'reading-match-reports',
  title: 'Reading Match Reports',
  subtitle: 'Newspaper and online report vocabulary — the past passive in match writing',
  level: 'A2',
  description: 'Learn how to read and understand football match reports from newspapers and websites. Practise using the past passive — the grammar structure used most often in sports journalism.',
  heroImage: '/images/reading-match-reports-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Past passive — the grammar of match reports',
    description: 'Match reports often use the past passive instead of the active voice. Instead of saying "The referee sent him off," journalists write "He was sent off." The passive focuses on what HAPPENED rather than who did it.',
    positivePattern: 'Subject + was/were + past participle (+ by + agent)',
    positiveExample: '"The striker was booked in the first half. Two goals were scored in the final ten minutes."',
    negativePattern: 'Subject + was/were + not + past participle',
    negativeExample: '"A penalty was awarded but was not converted — the goalkeeper saved it."',
    positiveExamples: [
      { sentence: 'The match was played in difficult conditions — rain and strong wind throughout.', note: '(was played = passive — focus on the match, not who organised it)' },
      { sentence: 'Both goals were scored by the substitute who came on in the 60th minute.', note: '(were scored by = passive with agent)' },
      { sentence: 'The goalkeeper was named player of the match by the sponsor.', note: '(was named = passive)' },
      { sentence: 'The captain was substituted in the second half due to a muscle injury.', note: '(was substituted = passive)' },
    ],
    negativeExamples: [
      { sentence: 'The penalty was not converted — the shot hit the post.', note: '(was not + past participle)' },
      { sentence: 'No goals were scored in the first half — it was a tight, tactical opening 45 minutes.', note: '(were not scored → no goals were scored)' },
    ],
  },

  vocabulary: [
    {
      word: 'MATCH REPORT',
      partOfSpeech: 'noun',
      definition: 'A written account of a football match — published in a newspaper or online after the game.',
      example: 'The match report described it as the best performance of the season — five goals and complete control.',
      imageSlug: '/images/match-report.png',
    },
    {
      word: 'HEADLINE',
      partOfSpeech: 'noun',
      definition: 'The large title at the top of a newspaper story — designed to attract attention and summarise the key point.',
      example: 'The headline read: "CITY CRUSHED: Five-star display leaves rivals embarrassed."',
      imageSlug: '/images/reading-match-reports-headline.png',
    },
    {
      word: 'JOURNALIST',
      partOfSpeech: 'noun',
      definition: 'The person who writes the match report — a sports writer who covers football.',
      example: 'The journalist praised the striker\'s movement but criticised the defensive organisation.',
      imageSlug: '/images/journalist.png',
    },
    {
      word: 'BOOKING',
      partOfSpeech: 'noun',
      definition: 'When a player receives a yellow card from the referee.',
      example: 'There were three bookings in the match — two for the home team and one for the away captain.',
      imageSlug: '/images/reading-match-reports-booking.png',
    },
    {
      word: 'DISMISSAL',
      partOfSpeech: 'noun',
      definition: 'When a player is sent off — given a red card and required to leave the pitch.',
      example: 'The dismissal in the 55th minute changed everything — the home team had to play with ten men.',
      imageSlug: '/images/reading-match-reports-dismissal.png',
    },
    {
      word: 'ATTENDANCE',
      partOfSpeech: 'noun',
      definition: 'The number of fans who were present at a match.',
      example: 'The attendance was announced as 47,385 — the highest of the season so far.',
      imageSlug: '/images/attendance.png',
    },
    {
      word: 'SUBSTITUTE',
      partOfSpeech: 'noun',
      definition: 'A player who comes on during the match to replace another player.',
      example: 'The substitute scored twice after coming on — transforming a 1-0 deficit into a 2-1 victory.',
      imageSlug: '/images/reading-match-reports-substitute.png',
    },
    {
      word: 'STOPPAGE TIME',
      partOfSpeech: 'noun',
      definition: 'Time added at the end of each half by the referee to make up for delays during the game.',
      example: 'The winner was scored deep into stoppage time — the stadium erupted in the 96th minute.',
      imageSlug: '/images/reading-match-reports-stoppage-time.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WAS BOOKED',
      definition: 'Received a yellow card — the passive form of "the referee booked him".',
      example: 'He was booked in the 33rd minute for a foul on the winger — his second yellow card of the season.',
      imageSlug: '/images/was-booked.png',
    },
    {
      phrase: 'WAS SENT OFF',
      definition: 'Received a red card — was required to leave the pitch. Passive form of "the referee sent him off".',
      example: 'She was sent off for a professional foul — the referee had no hesitation in showing the red card.',
      imageSlug: '/images/reading-match-reports-was-sent-off.png',
    },
    {
      phrase: 'WAS AWARDED',
      definition: 'Was given officially by the referee — used for penalties, free kicks, and corners.',
      example: 'A penalty was awarded after the defender handled the ball in the area — the crowd erupted.',
      imageSlug: '/images/was-awarded.png',
    },
    {
      phrase: 'WAS NAMED [AWARD]',
      definition: 'Was selected and announced as the winner of a specific award — player of the match, etc.',
      example: 'The goalkeeper was named player of the match after saving a penalty and making six key saves.',
      imageSlug: '/images/was-named.png',
    },
    {
      phrase: 'WAS PLAYED BEFORE',
      definition: 'Was attended by a certain crowd — common in match reports when describing the atmosphere.',
      example: 'The match was played before a crowd of 53,000 — the biggest attendance of the season.',
      imageSlug: '/images/was-played-before.png',
    },
    {
      phrase: 'WAS SUBSTITUTED',
      definition: 'Was replaced by another player during the match — came off the pitch.',
      example: 'The captain was substituted at half-time after picking up a knock in the opening 40 minutes.',
      imageSlug: '/images/was-substituted.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases and structures you will often see in match reports.',
    items: [
      {
        cue: 'City were cruised to a 3-0 victory.',
        meaning: 'City won 3-0 easily and comfortably.',
        usage: '"Cruised to victory" = won easily without difficulty. It suggests the winning team was always in control. You will see this in headlines: "City cruise to victory" or in reports: "City cruised to a comfortable win." It implies the margin was well-earned and never in doubt.',
        imageSlug: 'otp-city-cruised-to-a-victory',
      },
      {
        cue: 'A penalty was converted in the 78th minute.',
        meaning: 'The penalty was successfully scored.',
        usage: '"Was converted" = scored. This is the passive form: "The striker converted the penalty" → "The penalty was converted." Sports journalists use "convert" for penalties and chances — it means to turn an opportunity into a goal. "Was not converted" means it was missed.',
        imageSlug: 'otp-a-penalty-was-converted-in-the-78th-minute',
      },
      {
        cue: 'The match was abandoned.',
        meaning: 'The match was stopped before the final whistle and not completed.',
        usage: '"Was abandoned" = the passive past of "they abandoned the match." Matches are abandoned due to bad weather, crowd trouble, or a medical emergency. Rare but dramatic. Often appears in dramatic match report headlines.',
        imageSlug: 'otp-the-match-was-abandoned',
      },
      {
        cue: 'He was denied by a fine save.',
        meaning: 'He almost scored but the goalkeeper made an excellent save to stop it.',
        usage: '"Was denied" = was prevented from scoring. Passive form: "the goalkeeper denied him" → "he was denied by the goalkeeper." "A fine save" = an excellent save. Common in match reports to describe a near-miss that was saved.',
        imageSlug: 'otp-he-was-denied-by-a-fine-save',
      },
      {
        cue: 'A brace was scored by the substitute.',
        meaning: 'Two goals were scored by the substitute.',
        usage: '"A brace" = two goals scored by the same player in one match. "Hat-trick" = three goals. "Was scored by" = passive — focus on the brace, not the substitute. "The substitute scored a brace" is the active version. Match reports use both.',
        imageSlug: 'otp-a-brace-was-scored-by-the-substitute',
      },
      {
        cue: 'The match was settled by a late header.',
        meaning: 'The match result was decided by a goal scored from a header near the end.',
        usage: '"Was settled" = was decided, concluded. A match is "settled" when the winning goal is scored. "A late header" = a headed goal near the end of the match. Passive — focus on the match being decided, not who scored.',
        imageSlug: 'otp-the-match-was-settled-by-a-late-header',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'This morning I read the [[match report:a written account of a football match — published after the game]] in the newspaper. The [[headline:the large title at the top of a newspaper story]] was "Ten-Man United Hold On For Point." Who can tell me what happened?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'United had a player [[sent off:given a red card — required to leave the pitch]] — so they played with ten men for part of the match.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '"Hold on" means they managed to keep the result — probably they were under a lot of pressure. Was a penalty [[awarded:given officially by the referee]]?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes — a penalty was awarded in the 70th minute but it was not [[converted:successfully scored]]. The goalkeeper saved it. There were also three [[bookings:yellow cards]] in the match — two for the home team.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'What was the [[attendance:the number of fans present at the match]]? Was it a big crowd?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'The report said the match was played before 41,000 fans. And the [[journalist:the sports writer who wrote the report]] praised the goalkeeper — she was [[named:selected and announced]] player of the match.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Was the [[dismissal:when a player is sent off — given a red card]] in [[stoppage time:time added at the end by the referee for delays]]? Because the headline says they "held on" — that sounds like it was close at the end.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good reading! The dismissal was in the 55th minute — so they played 35 minutes with ten men. The [[substitute:a player who comes on to replace another]] was [[substituted:replaced by another player]] in the 80th minute after picking up a knock. Dramatic match!',
    },
  ],

  matchingExercise: [
    { word: 'MATCH REPORT', definition: 'A written account of a football match published after the game' },
    { word: 'HEADLINE', definition: 'The large title at the top of a newspaper story' },
    { word: 'BOOKING', definition: 'A yellow card — when a player is cautioned by the referee' },
    { word: 'DISMISSAL', definition: 'A red card — when a player is sent off the pitch' },
    { word: 'ATTENDANCE', definition: 'The number of fans who were present at a match' },
    { word: 'SUBSTITUTE', definition: 'A player who comes on during the match to replace another' },
    { word: 'STOPPAGE TIME', definition: 'Extra time added at the end of each half for delays' },
    { word: 'JOURNALIST', definition: 'The sports writer who writes the match report' },
  ],

  fillBlankExercise: [
    { before: 'A penalty', answer: 'was awarded', after: 'after the defender handled the ball — the crowd erupted.' },
    { before: 'He', answer: 'was booked', after: 'in the 33rd minute for a foul on the winger.' },
    { before: 'She', answer: 'was sent off', after: 'for a professional foul — red card, no doubt.' },
    { before: 'The goalkeeper', answer: 'was named', after: 'player of the match after saving the penalty.' },
    { before: 'The match', answer: 'was played before', after: 'a crowd of 47,000 — the highest this season.' },
    { before: 'The striker', answer: 'was substituted', after: 'at half-time after picking up a knock.' },
    { before: 'Both goals', answer: 'were scored', after: 'by the same substitute — a brilliant brace.' },
    { before: 'The penalty', answer: 'was not converted', after: '— the shot hit the crossbar.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence uses the past passive correctly?',
      options: [
        'The penalty awarded was.',
        'A penalty was awarded by the referee.',
        'A penalty awarded by the referee was.',
      ],
      correctIndex: 1,
    },
    {
      question: '"He was denied by a fine save." What does this mean?',
      options: [
        'He scored a brilliant goal',
        'He almost scored but the goalkeeper stopped it',
        'He was refused permission to play',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "brace" in a match report?',
      options: [
        'A good defensive performance',
        'Two goals scored by the same player in one match',
        'A type of tackle',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is the correct passive form? "The referee _____ him off."',
      options: [
        'He sent the referee off.',
        'He was sent off by the referee.',
        'The referee was sent off by him.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "the match was settled" mean?',
      options: [
        'The match ended in a draw',
        'The result was decided — usually by the winning goal',
        'The match was cancelled',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which past passive sentence is correct?',
      options: [
        'The captain substituted at half-time.',
        'The captain was substituted at half-time.',
        'The captain is substituted at half-time.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "the match was played before 47,000 fans" mean?',
      options: [
        'The match was played before the fans arrived',
        '47,000 fans attended the match',
        'The match happened before 47,000 other matches',
      ],
      correctIndex: 1,
    },
    {
      question: '"A booking was shown in stoppage time." What happened?',
      options: [
        'A ticket booking was made during injury time',
        'A player received a yellow card in the time added after 90 minutes',
        'A player was shown a red card in the final minute',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the past passive correctly.',
    items: [
      {
        sentence: 'The winning goal _____ scored by the substitute in the 89th minute.',
        options: ['is', 'was', 'were'],
        correctIndex: 1,
        explanation: '"Was" is correct. "The winning goal" is singular — so we use "was" (not "were"). Past passive = was/were + past participle. "The winning goal was scored" = someone scored the winning goal, but we focus on the goal, not who scored it.',
      },
      {
        sentence: 'Three players _____ booked during the match — all three for fouls in midfield.',
        options: ['was', 'is', 'were'],
        correctIndex: 2,
        explanation: '"Were" is correct. "Three players" is plural — so we use "were" (not "was"). Past passive: singular noun + was + past participle. Plural noun + were + past participle. "Three players" = plural = "were booked."',
      },
      {
        sentence: 'A penalty was awarded but _____ not converted — the goalkeeper dived to his right.',
        options: ['is', 'was', 'were'],
        correctIndex: 1,
        explanation: '"Was" is correct. Negative past passive: subject + was/were + NOT + past participle. "A penalty" = singular = "was not converted." The penalty existed (was awarded) but the action failed (was not converted = not scored).',
      },
      {
        sentence: 'The match _____ played before a crowd of 52,000 — the biggest attendance of the season.',
        options: ['is', 'was', 'were'],
        correctIndex: 1,
        explanation: '"Was" is correct. "The match" = singular = "was played." This is a standard match report passive construction — "was played before [attendance]" means [attendance] fans were present to watch it.',
      },
      {
        sentence: 'The captain _____ substituted in the second half — the manager did not want to risk her injury.',
        options: ['is', 'were', 'was'],
        correctIndex: 2,
        explanation: '"Was" is correct. "The captain" = singular = "was substituted." The passive emphasises what happened to the captain, not the manager\'s action. "Was substituted" = came off the pitch as a result of the manager\'s decision.',
      },
      {
        sentence: 'The goalkeeper _____ named player of the match for her penalty save in stoppage time.',
        options: ['was', 'were', 'is'],
        correctIndex: 0,
        explanation: '"Was" is correct. "The goalkeeper" = singular = "was named." "Named + award" is the passive form of "they named her player of the match." The passive focuses on the honour received rather than who gave it.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the match report extract and answer the question.',
      items: [
        {
          customerLine: 'A match report says: "A penalty was awarded in the 80th minute but was not converted." What happened?',
          options: [
            '"The referee gave a penalty, the striker scored it, and the team won."',
            '"The referee gave a penalty, but the striker did not score — the goalkeeper or the post stopped it."',
            '"A penalty was given to the wrong team and was reversed by VAR."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Was awarded" = was given by the referee. "Was not converted" = was not scored. The penalty happened but did not result in a goal. The report does not tell us how it was missed — saved, post, or over the bar.',
        },
        {
          customerLine: 'The headline reads: "TEN-MAN CITY HOLD ON FOR DRAW." What can you tell from this?',
          options: [
            '"City had ten players from the start and they drew."',
            '"City had a player sent off and finished the match with ten players, but managed to get a draw despite the disadvantage."',
            '"City scored ten goals and the match ended in a draw."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Ten-man City" means they were reduced to ten players (one was sent off). "Hold on" means they survived under pressure. "For draw" means the result was a draw. Headlines are compressed — every word carries meaning.',
        },
        {
          customerLine: 'A match report says: "The match was settled by a brace from the substitute." What does this mean?',
          options: [
            '"The match ended in a draw after the substitute played."',
            '"The match result was decided by two goals scored by the player who came on as a substitute."',
            '"The substitute was substituted after scoring once."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Was settled" = the result was decided. "A brace" = two goals. "From the substitute" = scored by the substitute. So: two goals from the substitute player decided the match.',
        },
        {
          customerLine: 'You are writing a match report. How do you convert this sentence to passive: "The referee booked the striker in the 20th minute."',
          options: [
            '"The striker booked the referee in the 20th minute."',
            '"The striker was booked by the referee in the 20th minute."',
            '"The referee was booked the striker in the 20th minute."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Active: "The referee (subject) booked (verb) the striker (object)." Passive: "The striker (new subject) was booked (passive verb) by the referee (agent)." In match reports, the agent (the referee) is often left out: "The striker was booked in the 20th minute."',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three past passive mistakes in this match report extract. Find them as a group.',
      dialogue: [
        { speaker: 'Match Report', text: 'Arsenal 2-1 Chelsea — Gunners come from behind to win thrilling London derby.' },
        { speaker: 'Match Report', text: 'Chelsea took the lead in the 12th minute when their striker was scored from close range.' },
        { speaker: 'Match Report', text: 'Arsenal equalised midway through the first half — the goal was celebrated wildly by the home fans.' },
        { speaker: 'Match Report', text: 'In the second half, a penalty was awarded to Arsenal after the Chelsea captain handled in the box.' },
        { speaker: 'Match Report', text: 'The penalty were converted by the Arsenal midfielder — her third goal of the season.' },
        { speaker: 'Match Report', text: 'A Chelsea player was sent off in stoppage time, and the goalkeeper was named player of the match.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'their striker was scored from close range',
          correction: 'their striker scored from close range',
          explanation: '"Was scored" is passive — but the subject of a passive sentence receives the action; it cannot be the one performing it. If the striker is the one who scored, we use the ACTIVE: "the striker scored." Passive would be: "a goal was scored by their striker" — then "a goal" is the subject receiving the action.',
        },
        {
          lineIndex: 4,
          incorrectText: 'The penalty were converted',
          correction: 'The penalty was converted',
          explanation: '"The penalty" is singular — so we use "was" not "were." Past passive: singular subject + was + past participle. Plural subject + were + past participle. "The penalty" = singular = "was converted." "The penalties" = plural = "were converted."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Write the next sentence of the match report using past passive.',
      items: [
        {
          customerLine: 'The match report begins: "Arsenal dominated the first half and created ten chances."',
          salespersonStart: 'Continue the report: "A penalty was awarded in the 38th minute after..."',
          suggestedCompletion: '...the Chelsea left back was judged to have fouled the Arsenal winger inside the box. After a short delay while the decision was checked by VAR, the penalty was confirmed and the spot kick was converted by the Arsenal captain — her twelfth goal of the season. Chelsea protested the decision but the yellow card was shown to their manager for his reaction on the touchline. Arsenal went into half-time 1-0 ahead, and the half-time summary was dominated by debate about the penalty.',
        },
        {
          customerLine: 'The match report says: "A brace was scored by the substitute in the final ten minutes."',
          salespersonStart: 'Continue: "The first was scored from a corner in the 82nd minute, and the second..."',
          suggestedCompletion: '...was converted from the penalty spot six minutes later after a foul was committed on her in the box. The substitute had only been on the pitch for 15 minutes when her first goal was headed in at the far post. The second was struck firmly into the bottom corner — the goalkeeper was given no chance. The match was settled in the most dramatic fashion, and the substitute was named player of the match by the sponsors at full-time.',
        },
        {
          customerLine: 'The headline says: "UNITED HELD GOALLESS IN FRUSTRATING DRAW."',
          salespersonStart: 'Write the opening paragraph of this match report.',
          suggestedCompletion: 'Manchester United were held to a frustrating 0-0 draw at home by a well-organised visiting side that arrived with one plan and executed it perfectly. Fifteen chances were created by the hosts, but none were converted — the woodwork was struck twice and the goalkeeper was barely tested in open play. A penalty was awarded in the second half but was denied by the post. The United manager was visibly frustrated on the touchline, and three substitutions were made in the final 20 minutes in search of a breakthrough that never came. The attendance was announced as 73,000 — a full house who left disappointed.',
        },
        {
          customerLine: 'Write a short match report for a 3-2 win including: two bookings, one dismissal, a penalty, and a late winner.',
          salespersonStart: 'City 3-2 United — Late winner settles dramatic five-goal thriller.',
          suggestedCompletion: 'City came from behind to claim all three points in one of the most dramatic matches of the season. United led 2-1 at half-time after two goals were scored by their striker in the opening 35 minutes. City were awarded a penalty just after the hour mark — it was converted by the captain to level the match at 2-2. The temperature rose significantly when United\'s midfielder was sent off in the 74th minute for a second bookable offence. Two other players were booked during a feisty second half. The match was settled in stoppage time when the substitute headed in a corner — a deserved winner after City dominated the final 30 minutes. The attendance was confirmed as 53,000.',
        },
      ],
    },
  },
};
