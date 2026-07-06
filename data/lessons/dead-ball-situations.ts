import { Lesson } from '@/types/lesson';

export const deadBallSituations: Lesson = {
  slug: 'dead-ball-situations',
  title: 'Dead Ball Situations',
  subtitle: 'Corner routines, penalty drama, and late winners — the language of set-piece moments',
  level: 'B1-B2',
  description: 'Some of football\'s most dramatic moments happen from dead ball situations — corners, free kicks, and penalty shootouts. This lesson gives you the specialist vocabulary for set-piece analysis, the emotional language of penalty drama, and the tactical terms for late-game moments that change everything.',
  heroImage: '/images/dead-ball-situations-hero.png',

  warmUp: {
    questions: [
      'Can you remember a famous penalty shootout? What made it so dramatic?',
      'Do you think set pieces — corners, free kicks — are undervalued compared to open play? Why?',
      'How do you think players stay calm when taking a penalty in front of thousands of fans?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Narrative past tenses — telling the story of a dramatic moment',
    description: 'When we describe memorable football moments — a penalty shootout, a last-minute winner, an audacious free kick — we use a combination of past tenses to show the sequence and drama. Past simple tells the main events; past continuous shows background action; past perfect shows what happened before the key moment.',
    positivePattern: 'PAST SIMPLE: main completed events in sequence. "He stepped up. He placed the ball. He sent the goalkeeper the wrong way." PAST CONTINUOUS: background action happening when the main event occurred. "The crowd was holding its breath when she stepped up." PAST PERFECT: what had already happened before the key moment. "He had missed his last three penalties before this shootout began."',
    positiveExample: '"The game had been level for 118 minutes when Diallo stepped up for the final penalty. The goalkeeper was diving left before the ball had even been struck. Diallo sent it right — ice cold."',
    negativePattern: 'Do NOT use past simple for everything — this loses the drama of sequence and background. Do NOT confuse past perfect with past simple for events that had ALREADY happened before the key moment.',
    negativeExample: 'WEAK: "The game was level for 118 minutes. Diallo stepped up. The goalkeeper dived left. Diallo scored." (No drama, no sequence) WRONG: "He missed three penalties before this game began." → RIGHT: "He HAD missed three penalties before this game began." (past perfect for prior events)',
    positiveExamples: [
      { sentence: '"The crowd was holding its breath as she placed the ball on the spot." (past continuous — background action)', note: '("Was holding" = ongoing background action at the moment of the main event)' },
      { sentence: '"He had practised that free kick a thousand times — and it showed." (past perfect — prior preparation)', note: '("Had practised" = completed before the match; "it showed" = past simple main event)' },
      { sentence: '"She stepped up, paused, and sent the goalkeeper the wrong way." (past simple sequence)', note: '(Three completed main events in sequence — "stepped, paused, sent")' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "He missed the penalty three times before the shootout so everyone was nervous."', note: 'CORRECT: "He HAD missed three penalties before the shootout, so everyone was nervous."' },
      { sentence: 'WRONG: "While the goalkeeper was diving, the ball already crossed the line."', note: 'CORRECT: "While the goalkeeper was diving, the ball had already crossed the line."' },
    ],
  },

  vocabulary: [
    {
      word: 'DEAD BALL',
      partOfSpeech: 'noun',
      definition: 'A moment when play has stopped and restarts from a fixed position — corners, free kicks, throw-ins, penalties. The ball is "dead" until it is played.',
      example: '"They are far more dangerous from dead ball situations than from open play — their corner routine has led to six goals this season."',
      imageSlug: '/images/dead-ball.png',
    },
    {
      word: 'PENALTY SPOT',
      partOfSpeech: 'noun',
      definition: 'The small circular mark twelve yards from goal where the penalty is placed — and the dramatic focal point of a penalty shootout.',
      example: '"She walked to the penalty spot slowly, deliberately — head up, eyes fixed on the goal, ignoring the noise of the crowd."',
      imageSlug: '/images/dead-ball-situations-penalty-spot.png',
    },
    {
      word: 'WALL',
      partOfSpeech: 'noun',
      definition: 'The line of defending players standing ten yards from the ball to block a direct free kick.',
      example: '"The wall jumped on cue — but the ball went under them, perfectly placed in the bottom corner."',
      imageSlug: '/images/dead-ball-situations-wall.png',
    },
    {
      word: 'SUDDEN DEATH',
      partOfSpeech: 'noun',
      definition: 'The stage of a penalty shootout where one miss ends the game immediately — both teams have taken five penalties each and the scores are level.',
      example: '"Into sudden death now — every penalty from this point is worth the match. One miss and it\'s over."',
      imageSlug: '/images/dead-ball-situations-sudden-death.png',
    },
    {
      word: 'SPOT KICK',
      partOfSpeech: 'noun',
      definition: 'Another word for a penalty — a kick taken from the penalty spot. Common in match reports and commentary.',
      example: '"She was brought down in the box and the referee pointed to the spot. She stepped up and converted the spot kick herself."',
      imageSlug: '/images/spot-kick.png',
    },
    {
      word: 'AUDACIOUS',
      partOfSpeech: 'adjective',
      definition: 'Bold, inventive, and surprising — used to describe an unexpected and skillful piece of play, like a chip over the goalkeeper or a rabona free kick.',
      example: '"An audacious chip from 30 yards — she had the nerve to try it and the technique to pull it off perfectly."',
      imageSlug: '/images/audacious.png',
    },
    {
      word: 'LAST GASP',
      partOfSpeech: 'adjective',
      definition: 'Happening at the very last moment — often used for goals scored in injury time that change the result.',
      example: '"A last-gasp equaliser in the 97th minute — the crowd erupted. They thought it was over. It was never over."',
      imageSlug: '/images/last-gasp.png',
    },
    {
      word: 'NERVE',
      partOfSpeech: 'noun',
      definition: 'The mental strength to perform under extreme pressure — to take a penalty in a shootout without hesitation.',
      example: '"He showed enormous nerve — stepping up fifth in a shootout, knowing one miss ends the season, and burying it in the top corner."',
      imageSlug: '/images/nerve.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STEP UP',
      definition: 'To walk forward to take a penalty or free kick — and more broadly, to take responsibility in a difficult moment.',
      example: '"She stepped up in the final minute of extra time — the weight of the whole season on her shoulders — and scored."',
      imageSlug: '/images/dead-ball-situations-step-up.png',
    },
    {
      phrase: 'SEND THE WRONG WAY',
      definition: 'To trick the goalkeeper into diving in the wrong direction — beating them with placement rather than power.',
      example: '"He sent the goalkeeper the wrong way — an ice-cold penalty, placed to the left as the keeper dived right."',
      imageSlug: '/images/send-wrong-way.png',
    },
    {
      phrase: 'HOLD YOUR NERVE',
      definition: 'To stay calm and composed under intense pressure — not letting the situation affect your concentration.',
      example: '"She held her nerve brilliantly in sudden death — three penalties, three goals, all under enormous pressure."',
      imageSlug: '/images/hold-nerve.png',
    },
    {
      phrase: 'CURL IN',
      definition: 'To bend the ball into the goal with technique — applying spin so the ball curves around or over a wall into the net.',
      example: '"He curled it in from 25 yards — bending it around the wall and into the far top corner. Unstoppable."',
      imageSlug: '/images/dead-ball-situations-curl-in.png',
    },
    {
      phrase: 'BURY',
      definition: 'To convert a penalty or chance with confidence and power — to score clinically without hesitation.',
      example: '"She buried the spot kick — no hesitation, no stutter run, straight down the middle as the keeper dived away."',
      imageSlug: '/images/bury.png',
    },
    {
      phrase: 'CANCEL OUT',
      definition: 'To equalise — to score a goal that removes the opponent\'s advantage and levels the score.',
      example: '"Their last-gasp free kick cancelled out the early opener — back to 1-1 in the 94th minute."',
      imageSlug: '/images/cancel-out.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key dead ball and set-piece concepts used in match analysis and commentary.',
    items: [
      {
        cue: 'Corner routine design — zones and movement',
        meaning: 'Modern corner routines are carefully designed with specific zones, movement patterns, and signals — nothing is random.',
        usage: 'Elite teams use pre-designed corner routines with coded signals. "The corner taker looked at the near post — that was the signal for the central run. Three players moved towards the near post, pulling three defenders with them. The fourth runner attacked the far post unmarked." Analysts describe corners by their delivery target: "near post corner" (ball delivered to the front of the goal), "far post corner" (ball delivered to the back), "short corner" (ball played short to a nearby teammate to recycle and attack from a different angle). "Their near-post routine was designed to flick the ball on — the far-post runner was always going to be their goal threat."',
        imageSlug: 'otp-corner-routine',
      },
      {
        cue: 'Penalty psychology — the run-up and the stutter',
        meaning: 'The psychological battle between penalty taker and goalkeeper begins before the ball is kicked — in the run-up, eye contact, and body language.',
        usage: 'Penalty psychology is a B2-level discussion topic. "The stutter run" = a deliberate pause or hesitation in the run-up to force the goalkeeper to commit early. "She used a stutter run — a slight pause at three yards to make the keeper commit. He went right. She went left." Eye contact: some takers avoid looking at the goalkeeper; some look deliberately to mislead. "He looked right the whole way through his run-up — then placed it left. Pure deception." The goalkeeper who dives before the ball is struck has committed too early — the taker can simply place it where the keeper was standing.',
        imageSlug: 'otp-penalty-psychology',
      },
      {
        cue: 'The free kick wall — and the crawling player',
        meaning: 'Set-piece tactics around the wall — including a player who lies or crawls on the ground to block balls played under the wall.',
        usage: 'The free kick wall is heavily tactical. A common innovation is the "crawling player" — a player from the attacking team who lies on the ground in front of the wall, so the ball can be played under the jumping wall and through the crawling player\'s position. "They had a player lying in front of the wall — the free kick went under the jump and through the gap. The goalkeeper never saw it." Defenders must now decide whether to watch the ball or watch for the crawling player — another detail of set-piece preparation that separates organised teams.',
        imageSlug: 'otp-free-kick-wall',
      },
      {
        cue: '"Ice cold" — the language of composure under pressure',
        meaning: 'Phrases used to describe a player who performs with exceptional composure in a high-pressure moment.',
        usage: '"Ice cold" = composed, showing no emotion, completely calm. Standard phrases for composure in high-pressure moments: "nerves of steel," "ice in the veins," "ice cold," "unfazed," "composed," "clinical." "He was ice cold — walked up in sudden death, side-footed it into the corner, turned away before it hit the net." In contrast, a player who misses a penalty is often described as "broken," "devastated," "inconsolable." The emotional language of penalty drama is rich and specific in English — and essential for B2 football discussion.',
        imageSlug: 'otp-ice-cold',
      },
      {
        cue: 'The last-minute winner — emotional vocabulary',
        meaning: 'The specific language used in English to describe the drama of a goal scored in the final moments of a match.',
        usage: '"Last-minute winner," "injury-time winner," "last-gasp goal," "stoppage-time winner," "dramatic late winner." Phrases: "snatched it in the dying moments," "stolen the points in the 95th minute," "kept them alive," "sent the crowd into delirium." Match reports use specific structures: "Diallo\'s header in the 93rd minute completed a stunning comeback — they had been 2-0 down with fifteen minutes to play." The vocabulary builds narrative: comeback → stun → disbelief → delirium. "The stadium erupted. They had done the impossible."',
        imageSlug: 'otp-last-minute-winner',
      },
      {
        cue: 'Shootout terminology — a guide for B2 analysis',
        meaning: 'The full vocabulary for discussing and analysing a penalty shootout.',
        usage: 'Penalty shootout vocabulary: "spot kick" = the penalty. "Sudden death" = from the sixth round onwards, one miss ends it. "Saved" / "missed" / "hit the post" / "blazed over" = outcomes. "Converted" = scored. "Stepped up" = walked to the penalty spot. "Sent the keeper the wrong way" = the keeper dived the wrong direction. "Buried it" = scored clinically. Full sentence example: "In sudden death, the captain stepped up — having already seen two teammates miss — and buried it into the top corner, ice cold, sending the keeper the wrong way. They were through."',
        imageSlug: 'otp-shootout-vocabulary',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Penalties are won before the ball is kicked. It is psychology — not technique. Sofia, describe what you had been thinking when you [[stepped up:to walk forward to take responsibility in a difficult moment]] for that [[spot kick:another word for a penalty]] in the 118th minute.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I had decided where I was going to put it before I even left the halfway line. I used a [[stutter run:a deliberate pause in the run-up to make the keeper commit early]] — the keeper dived left. I [[buried:to score clinically without hesitation]] it right. I was completely focused — the crowd was screaming but I was [[ice cold:composed, showing no emotion under pressure]] inside.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'You [[held your nerve:to stay calm under intense pressure]] brilliantly. Ronaldo — what had been happening at the corner routine that created the penalty in the first place?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Our [[corner routine:a pre-designed movement pattern from a corner]] — the three runners to the near post pulled four defenders with them. I was the fourth runner, unmarked at the far post. The defender panicked, grabbed my shirt — [[penalty spot:the mark 12 yards from goal]]. It was a [[dead ball:a moment when play stops and restarts from a fixed position]] situation that we had practised hundreds of times.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'In [[sudden death:the stage where one miss ends the game immediately]], [[nerve:the mental strength to perform under extreme pressure]] matters more than anything else. The crowd was making noise, the game had been level for 118 minutes — but Sofia [[stepped up:same]] and [[sent the goalkeeper the wrong way:to trick the keeper into diving in the wrong direction]]. [[Audacious:bold and surprising]] composure. That is what wins trophies.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The goalkeeper who had been diving before the ball was even struck — they had committed too early. That gave me time to adjust. And the free kick that [[cancelled out:to equalise by scoring]] their opening goal — that took [[nerve:same]] too. I curled it in from 28 yards. The [[wall:the line of defending players blocking the free kick]] jumped and I put it under them. It was a [[last-gasp:happening at the very last moment]] equaliser and it changed the whole match.',
    },
  ],

  matchingExercise: [
    { word: 'DEAD BALL', definition: 'A moment when play has stopped and restarts from a fixed position' },
    { word: 'SUDDEN DEATH', definition: 'The shootout stage where one miss ends the game immediately' },
    { word: 'AUDACIOUS', definition: 'Bold, inventive, and surprising — used for an unexpected skillful piece of play' },
    { word: 'SPOT KICK', definition: 'Another word for a penalty — a kick from the penalty spot' },
    { word: 'LAST GASP', definition: 'Happening at the very last moment — goals in injury time that change the result' },
    { word: 'NERVE', definition: 'The mental strength to perform under extreme pressure without hesitation' },
    { word: 'WALL', definition: 'The line of defenders blocking a direct free kick' },
    { word: 'STUTTER RUN', definition: 'A deliberate pause in the penalty run-up to force the goalkeeper to commit early' },
  ],

  fillBlankExercise: [
    { before: 'She', answer: 'stepped up', after: 'for the spot kick in sudden death — knowing one miss would end the season.' },
    { before: 'He', answer: 'sent the goalkeeper the wrong way', after: '— an ice-cold penalty, placed right as the keeper dived left.' },
    { before: 'An', answer: 'audacious', after: 'chip from 30 yards — she had the nerve to try it and the technique to pull it off.' },
    { before: 'The', answer: 'last-gasp', after: 'equaliser in the 94th minute sent the crowd into delirium.' },
    { before: 'She', answer: 'curled it in', after: 'from 25 yards — bending it around the wall into the far top corner.' },
    { before: 'He', answer: 'held his nerve', after: 'brilliantly in sudden death — stepped up three times and scored three times.' },
    { before: 'Into', answer: 'sudden death', after: 'now — every penalty from this point is worth the match. One miss and it is over.' },
    { before: 'The free kick', answer: 'cancelled out', after: 'their early goal — back to 1-1 with ten minutes still to play.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"He had missed three penalties before this shootout began." What tense is "had missed"?',
      options: [
        'Past simple — describing a completed event in the past.',
        'Past perfect — describing an event that happened before another past event (the shootout).',
        'Past continuous — describing an ongoing action in the past.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The crowd was holding its breath when she stepped up." What does the past continuous express?',
      options: [
        'A completed event — the crowd held its breath and then stopped.',
        'A background action happening at the same time as the main event (stepping up).',
        'A repeated past action — the crowd often held its breath during games.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "stutter run" in penalty taking?',
      options: [
        'Running at full pace towards the ball and stopping suddenly before kicking.',
        'A deliberate pause or hesitation in the run-up to force the goalkeeper to commit early.',
        'Taking an unusually long run-up from outside the penalty area.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Into sudden death now — one miss and it\'s over." When does sudden death begin in a shootout?',
      options: [
        'After the first penalty is saved — whoever misses next loses.',
        'After both teams have taken five penalties and the scores are still level.',
        'After extra time — whenever the first penalty is taken.',
      ],
      correctIndex: 1,
    },
    {
      question: '"She buried the spot kick." What does "bury" mean in this context?',
      options: [
        'She shot the ball into the ground below the goalkeeper.',
        'She scored the penalty with clinical confidence and without hesitation.',
        'She placed the penalty close to the post — hidden in the corner.',
      ],
      correctIndex: 1,
    },
    {
      question: '"A last-gasp equaliser in the 93rd minute." What does "last-gasp" mean?',
      options: [
        'A goal scored after the referee had already blown the final whistle.',
        'A goal scored in the very last moments — in injury time, almost at the end.',
        'A goal scored by a substitute who had just come on moments before.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the tactical purpose of the "crawling player" in front of a free kick wall?',
      options: [
        'To confuse the goalkeeper by moving unpredictably in front of the wall.',
        'To block balls played under the jumping wall — stopping the defenders from seeing the ball.',
        'To prevent defenders from adjusting the wall before the kick is taken.',
      ],
      correctIndex: 1,
    },
    {
      question: '"He was ice cold — stepped up and buried it." What does "ice cold" describe?',
      options: [
        'Physical coldness — the player was not warm enough before the penalty.',
        'Total emotional composure — performing without nerves or hesitation under pressure.',
        'An aggressive, hard penalty — struck powerfully with no emotion.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence about dead ball situations with the correct tense or vocabulary.',
    items: [
      {
        sentence: '"The game _____ level for 118 minutes when the captain stepped up for the decisive penalty." (past perfect or past simple?)',
        options: ['had been', 'was', 'has been'],
        correctIndex: 0,
        explanation: '"Had been" (past perfect) is correct — it describes a state that existed from before the main narrative event (the captain stepping up) and had already been happening for some time. "The game had been level" = level throughout, up to that moment. "Was" (past simple) is technically possible but weaker — it puts the two events on the same level, losing the dramatic weight of 118 minutes of struggle. "Has been" (present perfect) is wrong — we are telling a past story; present perfect connects past to the present, which is not the structure here.',
      },
      {
        sentence: '"The crowd _____ its breath as she placed the ball on the spot." (background action)',
        options: ['was holding', 'held', 'has held'],
        correctIndex: 0,
        explanation: '"Was holding" (past continuous) is correct — describes the crowd\'s action as background atmosphere happening at the same time as the main event (placing the ball on the spot). "Was holding its breath" = ongoing at that moment, creating the drama around the main action. "Held" (past simple) treats it as a completed event in sequence, which loses the atmospheric background quality. "Has held" (present perfect) is wrong — we need a past tense, not a present one. The past continuous + past simple pattern ("was holding... as she placed") is the standard structure for dramatic background description.',
      },
      {
        sentence: '"She _____ three free kicks over the wall this season before finally curling one in." (prior events)',
        options: ['had blazed', 'blazed', 'was blazing'],
        correctIndex: 0,
        explanation: '"Had blazed" (past perfect) is correct — these three misses happened before the successful one. Past perfect = earlier past events that are relevant context for a later past event. "Blazed" (past simple) would work if we were just listing events in sequence, but "before finally" signals that these earlier events are context for the later achievement — past perfect captures this relationship. "Was blazing" (past continuous) = an ongoing action at a specific moment — not correct for describing three separate completed events.',
      },
      {
        sentence: '"He stepped up, _____ the goalkeeper the wrong way, and _____ it into the net." (past simple sequence)',
        options: ['sent / buried', 'was sending / was burying', 'had sent / had buried'],
        correctIndex: 0,
        explanation: '"Sent / buried" (both past simple) is correct — three sequential completed actions: stepped up → sent the keeper the wrong way → buried it. Past simple is the standard tense for narrating a sequence of events in a story. Each action is complete before the next begins. "Was sending / was burying" (past continuous) would suggest these were ongoing background actions, not completed events — wrong here. "Had sent / had buried" (past perfect) would place these events even further back in the past — but we are narrating the main sequence directly, not referring back to earlier events.',
      },
      {
        sentence: '"It was an _____ chip from 30 yards — nobody in the stadium expected her to try it." (describe an unexpected, inventive action)',
        options: ['audacious', 'intense', 'clinical'],
        correctIndex: 0,
        explanation: '"Audacious" is correct — means bold, inventive, and surprising. Chipping the goalkeeper from 30 yards in a decisive moment is audacious: it requires skill and confidence, and is unexpected. "Nobody expected her to try it" = the element of surprise that defines audacity. "Intense" = with great focus or energy — not about surprise or boldness of the choice. "Clinical" = efficient, precise, composed — describes execution quality, not the boldness of the decision. "Audacious" is specifically about the choice being remarkable and unexpected — a different quality from both intensity and clinical finishing.',
      },
      {
        sentence: 'Which sentence uses the narrative past tenses MOST effectively for drama?',
        options: [
          '"She scored the penalty. It was sudden death. The crowd cheered."',
          '"The stadium had been silent for ten seconds — the crowd was holding its breath — when she stepped up and buried it into the top corner. Sudden death. It was over."',
          '"She was scoring the penalty while the crowd was cheering and the sudden death was happening."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — uses three past tenses strategically to build drama. "Had been silent for ten seconds" (past perfect — prior state), "was holding its breath" (past continuous — background atmosphere), "stepped up and buried it" (past simple — the key completed actions). "Sudden death. It was over." — short sentences after the drama, used for impact. A uses only past simple — technically correct but flat; no drama, no contrast between background and main event. C incorrectly uses past continuous for all actions ("was scoring," "was cheering") — these are completed events, not ongoing background actions. Past continuous for the main event misuses the tense.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use dead ball vocabulary and narrative tenses to give detailed responses.',
      items: [
        {
          customerLine: 'Describe the psychology of taking a penalty in sudden death.',
          options: [
            '"It is very difficult to take a penalty in sudden death because you are nervous and the crowd is loud."',
            '"Taking a penalty in sudden death is one of the most psychologically demanding actions in sport. Everything that has happened in the game — 120 minutes of effort — is reduced to one kick. The technical process should be automatic: the taker has practised thousands of penalties, and the mechanics do not change. The challenge is mental — preventing the situation from entering your conscious mind and disrupting your automatic process. Great penalty takers describe the trick as narrowing their focus: they see only the ball and one spot in the goal. The crowd, the goalkeeper\'s movement, the teammates watching — all become background noise. They had already decided where the ball was going before they stepped up. The decision was made in training, weeks ago. The penalty is just execution."',
            '"Sudden death penalties are very stressful. You need to hold your nerve and stay ice cold. Many players fail because they think about missing instead of scoring."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — psychological analysis, precise language, and a genuine insight. "Everything is reduced to one kick" (the pressure articulated), "technical process should be automatic" (why training matters), "narrowing their focus" (the specific psychological technique), "they see only the ball and one spot in the goal" (concrete detail), "the decision was made in training, weeks ago" (the key insight — the decision is not made in the moment). A is too basic. C is accurate but uses clichés ("hold your nerve," "ice cold") without genuine analysis.',
        },
        {
          customerLine: 'Explain how a well-designed corner routine creates a scoring opportunity.',
          options: [
            '"A good corner routine uses movement to create confusion — different players run to different zones to free up someone for a header."',
            '"A well-designed corner routine works by creating problems that the defending team cannot solve simultaneously. The delivery is one variable — in-swinger to the near post, out-swinger to the far post, or a short corner to change the angle. But the movement is the key. Typically, three or four players make decoy runs towards the near post or the six-yard box — pulling defenders with them. The designated goal threat makes a late run to an unpressed zone — usually the back post or the edge of the box — arriving just as the ball does. Defenders cannot mark both the decoy runners AND the late arriving runner. One of them must be free. The best corner teams score not because their delivery is unstoppable — it is because the movement creates a defender\'s dilemma every single time the ball is crossed."',
            '"Corner routines involve players running to specific positions. The ball is delivered to the target area and the unmarked player scores with a header or volley."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — explains the mechanism precisely. "Creating problems the defending team cannot solve simultaneously" (the core tactical principle), "decoy runs pull defenders with them" (the mechanism), "late run to an unpressed zone" (where the goal threat goes), "defenders cannot mark both decoy runners AND the late arriving runner — one must be free" (the defender\'s dilemma, clearly stated), "not because delivery is unstoppable — because the movement creates a dilemma every time" (the real reason it works). A is a reasonable summary but lacks the analytical depth. C is accurate but describes the outcome, not the mechanism.',
        },
        {
          customerLine: 'How does a goalkeeper prepare for a penalty shootout?',
          options: [
            '"The goalkeeper watches videos of the penalty takers to know which side they prefer. They try to guess the right way."',
            '"Modern goalkeeper preparation for a penalty shootout combines data analysis, psychological strategy, and physical preparation. Coaches compile detailed statistics on each likely penalty taker: preferred side, tendencies under pressure, how their run-up changes when fatigued or nervous. But the goalkeeper also uses psychological tactics — standing slightly to one side to invite the taker to aim for the larger area (forcing them to think consciously and disrupt their automatic process), making eye contact to create pressure, or moving along the line to make the taker change their mind at the last moment. Physical preparation matters too: staying warm between kicks, regulating breathing to stay calm, maintaining concentration through 10-15 minutes of intense emotional tension. A goalkeeper who saves one penalty in five has won the shootout statistically."',
            '"Goalkeepers prepare by studying their opponents\' penalty habits. They look at which direction each player prefers and try to dive that way. It is about guessing correctly and staying calm."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — three-layer analysis with precise vocabulary. "Data analysis, psychological strategy, and physical preparation" (clear framework), "preferred side, tendencies under pressure, how their run-up changes when fatigued" (specific data points), "standing slightly to one side to invite the taker to aim for the larger area — forcing conscious thought" (sophisticated psychological tactic), "making eye contact to create pressure" (another specific tactic), "A goalkeeper who saves one penalty in five has won the shootout statistically" (a genuine insight about expectations). A and C both reduce preparation to guessing — an oversimplification that misses the analytical depth expected at B2.',
        },
        {
          customerLine: 'Narrate a last-minute free kick that changed a match, using dramatic past tenses.',
          options: [
            '"She took the free kick from 25 yards and curled it in. The wall jumped but the ball went under. The goalkeeper did not see it. The crowd went crazy."',
            '"The clock had already shown 93 minutes when the referee awarded the free kick — twenty-six yards out, slightly left of centre. The crowd had been preparing for the final whistle; the players behind the wall had relaxed. She placed the ball carefully, took five steps back, and paused. The wall jumped. She had already decided — under the jump, curling into the bottom right corner. The ball was already nestling in the net before the goalkeeper was diving. The stadium erupted. They had done the impossible: from 2-0 down to 2-2 in the final seconds. A last-gasp equaliser that nobody had seen coming — and it changed everything."',
            '"She was taking the free kick in the 93rd minute. The crowd was cheering and the wall was jumping. She was curling the ball into the corner and the goalkeeper was not saving it. The crowd was going crazy."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — expert use of all three past tenses for maximum drama. "Had already shown 93 minutes" and "had been preparing" (past perfect and past continuous — the context and atmosphere before the key moment), "placed, took, paused" (past simple — the sequence of actions), "she had already decided" (past perfect — the decision was made even before the run-up), "was already nestling in the net before the goalkeeper was diving" (the ball was there before the keeper even moved — drama through tense contrast), "had done the impossible" (past perfect — the achievement summarised). A uses only past simple — functional but flat. C uses past continuous for all actions — describes ongoing background instead of completed events.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three past tense or dead ball vocabulary mistakes in this match report. Find them.',
      dialogue: [
        { speaker: 'Reporter', text: 'A night of extraordinary drama at the stadium — and the dead ball situations decided everything.' },
        { speaker: 'Reporter', text: 'City scored from their corner routine in the 34th minute — the near-post decoy runners pulled four defenders away, and Diallo arrived late at the far post, completely unmarked.' },
        { speaker: 'Reporter', text: 'But their opponents cancelled out the lead in the 91st minute with an audacious free kick — curling it in from 28 yards while the wall blazed over it.' },
        { speaker: 'Reporter', text: 'Into sudden death, and Diallo stepped up knowing she missed two penalties already this season before tonight.' },
        { speaker: 'Reporter', text: 'She used a stutter run — the goalkeeper committed right — and she buried it left. Ice cold.' },
        { speaker: 'Reporter', text: 'A last-gasp winner in the shootout, decided by nerve and preparation. City are through to the final.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'while the wall blazed over it',
          correction: 'while the wall jumped / as the ball went under the wall',
          explanation: '"The wall blazed over it" is a vocabulary error: "blaze over" means a player shoots the ball OVER the goal or over a target — the ball goes over. "The wall blazed over the free kick" would mean the wall sent the ball sailing over — impossible, as the wall does not shoot the ball. The free kick went UNDER the wall (the standard phrasing for beating a jumping wall). "Blazed over" is what a player does when they shoot badly and the ball goes high over the bar. The correct description: "while the wall jumped" or "as the ball went under the jumping wall."',
        },
        {
          lineIndex: 3,
          incorrectText: 'knowing she missed two penalties already this season',
          correction: 'knowing she HAD missed two penalties already this season',
          explanation: 'Past perfect is required here — "she had missed two penalties" before this moment (the shootout). "Had missed" = prior event, completed before the current narrative moment. "She missed" (past simple) treats the misses as events in the main sequence of this narration — as if they happened in this match. But the context "already this season before tonight" makes clear these misses happened at earlier times, before this shootout. The past perfect ("had missed") correctly signals: these events occurred earlier in the timeline and are relevant background to what is happening now.',
        },
        {
          lineIndex: 5,
          incorrectText: 'A last-gasp winner in the shootout',
          correction: 'A last-gasp winner / the decisive penalty / the shootout winner',
          explanation: '"Last-gasp" specifically describes a goal scored in the final moments of match time — typically in injury time, when a game seemed to be finishing. A penalty shootout is not the same as the dying seconds of open play — it is a separate phase after 120 minutes have already been played. Using "last-gasp" for a penalty is technically inaccurate. "Decisive penalty" or "the winning penalty" or "the shootout winner" are the correct phrases. "Last-gasp" is a term of time pressure in open play — the clock is nearly out. In a shootout, time is not the pressure; the structure of the shootout itself is. A minor but meaningful vocabulary precision issue at B2 level.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each analysis with precise dead ball vocabulary and narrative tenses.',
      items: [
        {
          customerLine: 'Analyse how a team can use set pieces as a primary source of goals, not just an occasional bonus.',
          salespersonStart: 'For teams that invest seriously in set-piece preparation, dead ball situations become far more than an occasional source of goals —',
          suggestedCompletion: 'For teams that invest seriously in set-piece preparation, dead ball situations become far more than an occasional source of goals — they become a systematic attacking strategy. At the highest level, elite set-piece specialists design routines the same way that open-play systems are designed: with zonal assignments, coded signals, multiple variations off the same corner delivery, and rehearsed movement patterns for every possible scenario. Teams that score 30-40% of their goals from set pieces do so not because they are physically dominant in the air — but because their routines create genuine dilemmas that defending teams cannot solve with standard zonal or man-marking approaches. The key insight is that every dead ball situation is a moment when the opposition has to reorganise from a stopped position — and organised, rehearsed movement exploits that reorganisation window every single time.',
        },
        {
          customerLine: 'Describe the emotional arc of a penalty shootout — what the players experience from beginning to end.',
          salespersonStart: 'A penalty shootout is unlike any other moment in football — the emotional journey from beginning to end is extraordinary —',
          suggestedCompletion: 'A penalty shootout is unlike any other moment in football — the emotional journey from beginning to end is extraordinary — and it shifts dramatically as the shootout progresses. In the first round, before any penalties are taken, there is a strange calm — the team is gathering itself, looking at each other, trying to project composure. The first penalty is taken and scored: a wave of collective relief. The shootout rhythm is established. As it progresses into sudden death, the emotional weight on each penalty taker increases: they had been watching teammates score and miss, feeling the shifting momentum. The walk from the halfway line to the penalty spot — alone, in front of thousands, with the season potentially ending on the next kick — is described by players as one of the loneliest walks in sport. When the decisive penalty is buried, the explosion of collective emotion — the release of tension built over two hours — is overwhelming. Every player who had been holding their breath throughout the shootout breaks at once.',
        },
        {
          customerLine: 'How has data and video analysis changed the way goalkeepers prepare for penalty shootouts?',
          salespersonStart: 'The days of a goalkeeper purely guessing during a penalty shootout are largely over —',
          suggestedCompletion: 'The days of a goalkeeper purely guessing during a penalty shootout are largely over — modern goalkeepers work with data analysts in the weeks before any tournament game that might end in penalties. They had studied not just preferred penalty directions — right foot, dominant side — but patterns across different game states: does this taker change their direction when the team is losing? Has their run-up lengthened or shortened under pressure? Do they look at where they are going to place it? The data gives the goalkeeper a plan — but the psychological preparation is equally important. Standing on the line, they must apply the data without overthinking: committing too late is worse than guessing and being wrong. The best modern goalkeepers combine data with instinct — using the information as a nudge rather than a prescription, staying calm enough to read the run-up in real time. A goalkeeper who saves one in five penalties in a shootout has already beaten the statistical average.',
        },
        {
          customerLine: 'Compare the language English uses to describe a player who scores a last-minute winner versus a player who misses a shootout penalty.',
          salespersonStart: 'English football language is remarkably asymmetric in how it describes the heroic and the heartbreaking —',
          suggestedCompletion: 'English football language is remarkably asymmetric in how it describes the heroic and the heartbreaking — and the contrast between last-minute winner and shootout miss shows this most vividly. The scorer is "ice cold," "nerve of steel," "unfazed," "clinical," "audacious" — they "stepped up," "buried it," "sent the keeper the wrong way," "held their nerve," "delivered." The language is active, decisive, and decisive-feeling: the player acted and succeeded. The player who misses a shootout penalty is described with passive suffering language: "his miss ended their season," "devastated," "inconsolable," "the ball had hit the post and their dream was over." The miss is described in terms of what happened to them, not what they chose. This linguistic asymmetry reflects how sport processes heroism and failure — the hero acts; the villain or victim is acted upon. Even "he blazed it over" uses the vivid verb to distance the player from a controlled action.',
        },
      ],
    },
  },
};
