import { Lesson } from '@/types/lesson';

export const socialMediaFootball: Lesson = {
  slug: 'social-media-football',
  title: 'Social Media Football',
  subtitle: 'Twitter/X football language, slang, abbreviations (WC, OG, VAR)',
  level: 'B1-B2',
  description: 'Learn the language of football on social media — the abbreviations, slang, reaction language, and informal English that fans use on Twitter/X, Instagram, and football forums.',
  heroImage: '/images/social-media-football-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Formal vs informal register — when to use which',
    description: 'Register means the level of formality in language. Football English has two very different registers: formal (used in match reports, press conferences, commentary) and informal (used on social media, fan chat, and casual conversation). The same idea can be expressed very differently depending on the register.',
    positivePattern: 'Informal: short, direct, emotional, abbreviations, slang. Formal: complete sentences, full vocabulary, neutral tone.',
    positiveExample: 'Informal (social media): "MOTM 🔥 That VAR call was robbery tbh" / Formal (match report): "The player delivered a man-of-the-match performance. The VAR decision was widely criticised."',
    negativePattern: 'Do NOT mix formal and informal inappropriately — using slang in a formal report sounds unprofessional; using formal language in a fan chat sounds unnatural.',
    negativeExample: 'WRONG in formal report: "He was absolutely balling today, ngl." / WRONG in social media: "The midfielder demonstrated exceptional technical proficiency in the attacking phase." (too formal)',
    positiveExamples: [
      { sentence: 'Informal: "That tackle was a red all day 😤 ref bottled it" — Formal: "The challenge arguably warranted a red card, but the referee chose to show yellow."', note: '(same opinion — different register)' },
      { sentence: 'Informal: "She\'s the GOAT, no debate 🐐" — Formal: "She is widely regarded as the greatest player of her generation."', note: '(same idea — informal vs formal)' },
      { sentence: 'Informal: "OG from their CB 💀 classic" — Formal: "The centre-back unfortunately diverted the ball into his own net."', note: '(abbreviation and slang vs full match report language)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG in a formal match report: "The goalkeeper literally bottled it ngl."', note: '"Bottled it," "literally," "ngl" — all informal, inappropriate for a formal report.' },
      { sentence: 'RIGHT in informal fan chat: "Keeper bottled it ngl 😭" — RIGHT in formal: "The goalkeeper made a costly error in the decisive moment."', note: 'Each version fits its context perfectly.' },
    ],
  },

  vocabulary: [
    {
      word: 'VAR',
      partOfSpeech: 'abbreviation',
      definition: 'Video Assistant Referee — a system where officials review decisions using video. Very controversial. Fans love debating it.',
      example: '"VAR took that goal away — absolutely robbed us 😤" (informal) / "The VAR review overturned the on-field decision." (formal)',
      imageSlug: '/images/social-media-football-var.png',
    },
    {
      word: 'OG',
      partOfSpeech: 'abbreviation',
      definition: 'Own goal — when a player scores in their own net. "OG" is used informally on social media.',
      example: '"Lol it was an OG — the defender had one job 💀" (informal) / "The opening goal was recorded as an own goal." (formal)',
      imageSlug: '/images/og.png',
    },
    {
      word: 'WC',
      partOfSpeech: 'abbreviation',
      definition: 'World Cup — football\'s biggest international tournament. Shortened to WC on social media.',
      example: '"WC 2026 is going to be 🔥 who are you backing?" / "The 2026 World Cup will feature 48 nations for the first time."',
      imageSlug: '/images/wc.png',
    },
    {
      word: 'MOTM',
      partOfSpeech: 'abbreviation',
      definition: 'Man of the Match — the best individual player in a game. Sometimes "POTM" (Player of the Match).',
      example: '"Easy MOTM — she was absolutely everywhere 🔥" / "She was awarded the man-of-the-match honour after an exceptional performance."',
      imageSlug: '/images/motm.png',
    },
    {
      word: 'GOAT',
      partOfSpeech: 'abbreviation',
      definition: 'Greatest of all time — the best player ever. A very common social media argument topic.',
      example: '"The GOAT debate is over — no one touches him 🐐" / "He is widely considered one of the greatest players of all time."',
      imageSlug: '/images/goat.png',
    },
    {
      word: 'BOTTLE',
      partOfSpeech: 'verb',
      definition: 'To fail at a crucial moment because of nerves or pressure — when someone had a chance to win and did not take it.',
      example: '"They completely bottled it — 3-0 up and still lost 😭" / "The team squandered a commanding lead and were eliminated."',
      imageSlug: '/images/bottle.png',
    },
    {
      word: 'PARK THE BUS',
      partOfSpeech: 'phrase',
      definition: 'When a team defends with all their players and does not try to attack — blocking the goal completely.',
      example: '"They just parked the bus for 90 minutes — so boring to watch 😴" / "The visitors employed an extremely defensive strategy."',
      imageSlug: '/images/social-media-football-park-the-bus.png',
    },
    {
      word: 'BANTER',
      partOfSpeech: 'noun',
      definition: 'Friendly, playful teasing between rivals — typically between fans of different teams.',
      example: '"The banter between City and United fans online is peak football Twitter 😂" / "The rivalry between supporters is expressed through good-natured exchanges."',
      imageSlug: '/images/social-media-football-banter.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIND UP',
      definition: 'To deliberately annoy or provoke someone — usually opposing fans — by saying something provocative.',
      example: '"He\'s just winding up the opposition fans — classic 😂" / "He deliberately provoked the visiting supporters."',
      imageSlug: '/images/social-media-football-wind-up.png',
    },
    {
      phrase: 'CALL OUT',
      definition: 'To publicly criticise or challenge someone — pointing out something they did wrong.',
      example: '"Fans calling out the manager for that substitution — he waited way too long tbh" / "Supporters publicly criticised the manager\'s late substitution."',
      imageSlug: '/images/social-media-football-call-out.png',
    },
    {
      phrase: 'BLOW UP',
      definition: 'To become very popular or controversial very quickly on social media.',
      example: '"That VAR clip has blown up on Twitter — everyone is talking about it 🔥" / "The clip went viral on social media platforms."',
      imageSlug: '/images/blow-up.png',
    },
    {
      phrase: 'CLAP BACK',
      definition: 'To respond sharply to a criticism — to give a quick, confident reply.',
      example: '"He clappped back at the critic in the post-match interview — respect 😤" / "He responded confidently to his critics after the match."',
      imageSlug: '/images/clap-back.png',
    },
    {
      phrase: 'WRITE OFF',
      definition: 'To dismiss someone as not good enough — to say a team or player will fail.',
      example: '"Everyone wrote us off before this match — proves them all wrong 💪" / "The team confounded their critics with an impressive victory."',
      imageSlug: '/images/write-off.png',
    },
    {
      phrase: 'GO VIRAL',
      definition: 'When a video, post, or image spreads very quickly and widely online.',
      example: '"That celebration has gone viral — 50k retweets already 🤣" / "The goal celebration attracted widespread attention online."',
      imageSlug: '/images/social-media-football-go-viral.png',
    },
  ],

  onThePitch: {
    instructions: 'These are common social media football phrases — understand the informal language fans use.',
    items: [
      {
        cue: 'Robbery 😤 / We got robbed!',
        meaning: 'An unfair decision went against us — we feel we were cheated.',
        usage: 'One of the most common football social media phrases after a controversial VAR decision or refereeing mistake. "Robbery" = something was taken from you unfairly, like being robbed by a thief. "We got robbed" = the result was unfairly taken from us. Extremely emotional and always slightly exaggerated — but very common.',
        imageSlug: 'otp-robbery',
      },
      {
        cue: 'That\'s a red all day.',
        meaning: 'That foul or challenge should obviously have been a red card.',
        usage: '"All day" = without any doubt, obviously. "A red all day" = definitely a red card, no question about it. This is a fan\'s confident, informal verdict on a refereeing decision. "All day" is used for things the speaker considers completely obvious: "That\'s offside all day," "He dived, all day."',
        imageSlug: 'otp-thats-a-red-all-day',
      },
      {
        cue: 'Not gonna lie (ngl) — that was class.',
        meaning: 'Being honest — that was excellent.',
        usage: '"Not gonna lie" (ngl) = "to be honest" in informal language. It introduces an honest admission, sometimes about something you did not expect to say. "That was class" = informal for "excellent/brilliant." "Ngl that was class" = if I\'m honest, I have to admit it was excellent. Used by fans when praising a goal or performance — even from a rival team.',
        imageSlug: 'otp-not-gonna-lie',
      },
      {
        cue: 'SCENES 🤯',
        meaning: 'Something incredible or unexpected just happened — an expression of shock and excitement.',
        usage: '"Scenes" = dramatic scenes, like something from a film. Used for extraordinary moments: a last-minute goal, a massive upset, a shocking red card. The emoji 🤯 (exploding head) adds to the shock. Very common on Twitter/X immediately after a dramatic moment in a match.',
        imageSlug: 'otp-scenes',
      },
      {
        cue: 'He should have stayed in his lane.',
        meaning: 'He should have stuck to what he is good at and not tried to do more than his role.',
        usage: '"Stay in your lane" = remain in your area of expertise, do not overstep. In football, used when a player tries something outside their usual role and fails: a goalkeeper who tries to build up too much, a defender who dribbles too much. A criticism of overreaching.',
        imageSlug: 'otp-stayed-in-his-lane',
      },
      {
        cue: 'Twitter/X exploded after that decision.',
        meaning: 'There was an enormous reaction on social media after the controversial moment.',
        usage: '"Exploded" = reacted extremely and quickly. Social media "explodes" when a big, controversial football event happens — a shock result, a VAR decision, a red card, a dramatic goal. This is now standard journalism vocabulary: "Twitter exploded after the penalty decision."',
        imageSlug: 'otp-twitter-exploded',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today — social media English. It has its own vocabulary, its own grammar rules, and its own register. Sofia — read me this tweet: "Absolute robbery 😤 VAR bottled it ngl. MOTM clear but ref couldn\'t see it. OG or not it was still deserved." What does it mean?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The fan is very angry. They think the [[VAR:Video Assistant Referee — the video review system]] decision was wrong — "bottled it" means [[bottle:to fail at a crucial moment because of nerves or pressure]]. The [[MOTM:Man of the Match]] was obvious to them. The [[OG:own goal — when a player scores in their own net]] did not matter — the result was still deserved.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. Now — how would a journalist write the same opinion in a formal match report?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: '"The VAR review proved controversial — many felt the decision was incorrect. The player who scored the own goal had contributed effectively throughout and arguably deserved to be recognised as player of the match. Despite the controversial goal, the result was a fair reflection of the performance."',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. Same ideas — completely different register. Now — the [[GOAT:Greatest of All Time — the best player ever]] debate. How would fans debate it on social media? And then — how would it be discussed in a formal article?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Social media: "The [[GOAT:same]] debate is over. No [[banter:friendly, playful teasing between rivals — usually between fans]], just facts 🐐 [[WC:World Cup]], Ballon d\'Or, everything — case closed." Formal: "The debate over the greatest player of all time continues. His World Cup victory and multiple Ballon d\'Or awards strengthen his claim considerably."',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent. The vocabulary is the same — GOAT, World Cup — but the tone, the structure, and the language around it are completely different. That is register.',
    },
  ],

  matchingExercise: [
    { word: 'VAR', definition: 'Video Assistant Referee — the video review system for officials' },
    { word: 'OG', definition: 'Own goal — when a player scores in their own net' },
    { word: 'WC', definition: 'World Cup — football\'s biggest international tournament' },
    { word: 'MOTM', definition: 'Man of the Match — the best individual player in a game' },
    { word: 'GOAT', definition: 'Greatest of all time — the best player ever' },
    { word: 'BOTTLE', definition: 'To fail at a crucial moment because of nerves or pressure' },
    { word: 'PARK THE BUS', definition: 'When a team defends with all players and does not attack' },
    { word: 'BANTER', definition: 'Friendly, playful teasing between rival fans' },
  ],

  fillBlankExercise: [
    { before: 'That tackle was a', answer: 'red', after: 'all day — no question about it. The referee got it completely wrong.' },
    { before: 'That clip has', answer: 'gone viral', after: '— 100k retweets in an hour. Everyone is talking about it.' },
    { before: 'They just', answer: 'parked the bus', after: 'for 90 minutes — ten defenders behind the ball. So boring to watch.' },
    { before: 'The', answer: 'GOAT', after: 'debate is settled — he has the World Cup, the Ballon d\'Or, and the stats 🐐' },
    { before: '', answer: 'Ngl', after: ', that was one of the best goals I have seen this season. Absolute class.' },
    { before: 'Everyone', answer: 'wrote us off', after: 'before the match — proves them all wrong. Nobody believed in us.' },
    { before: 'Absolute', answer: 'robbery', after: '😤 that VAR decision was disgraceful — we deserved the three points.' },
    { before: 'The', answer: 'banter', after: 'between the two sets of fans online after the derby was brilliant 😂' },
  ],

  multipleChoiceExercise: [
    {
      question: '"They bottled it — 3-0 up and still lost." What does "bottled it" mean?',
      options: [
        'They celebrated with champagne bottles after the win',
        'They failed at a crucial moment — squandering a commanding lead',
        'They defended too deep and lost control of the match',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is in a FORMAL register?',
      options: [
        '"That OG was peak comedy 💀 they literally bottled it ngl"',
        '"The own goal, while unfortunate, ultimately did not alter the overall quality of the performance."',
        '"VAR ruined it again 😤 robbery tbh"',
      ],
      correctIndex: 1,
    },
    {
      question: '"That\'s a red all day." What does "all day" mean here?',
      options: [
        'The player was on the pitch for the whole match',
        'Without any doubt — completely obviously',
        'The decision took a very long time',
      ],
      correctIndex: 1,
    },
    {
      question: '"SCENES 🤯" — when would a fan post this on social media?',
      options: [
        'When a match ends without any goals',
        'When something incredible or shocking just happened',
        'When a player parks the bus for 90 minutes',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is the correct informal translation of: "The VAR decision was widely criticised"?',
      options: [
        '"The VAR decision was somewhat controversial among supporters."',
        '"VAR bottled it 😤 absolute robbery tbh"',
        '"VAR: Video Assistant Referee — the decision system."',
      ],
      correctIndex: 1,
    },
    {
      question: '"Not gonna lie (ngl) — that was class." What does this mean?',
      options: [
        'I do not want to tell the truth about what happened.',
        'Honestly — that was excellent/brilliant.',
        'I was not going to say anything but I changed my mind.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "banter" in football culture?',
      options: [
        'Aggressive insults between fans',
        'Friendly, playful teasing between rival supporters',
        'Official commentary during a match',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which social media post uses the CORRECT informal register for a goal reaction?',
      options: [
        '"The striker displayed excellent technical ability in delivering a goal of considerable quality."',
        '"GOAT BEHAVIOUR 🐐🔥 what a finish are you actually joking"',
        '"Ngl the striker was quite good today and the goal was satisfactory."',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Convert each formal sentence into informal social media language — or vice versa.',
    items: [
      {
        sentence: 'FORMAL: "The team\'s inability to maintain their lead was disappointing." → INFORMAL: "They completely _____ it — 2-0 up and still couldn\'t win 😭"',
        options: ['bottled', 'parked', 'clapped back at'],
        correctIndex: 0,
        explanation: '"Bottled" is correct. "Bottled it" = to fail at a crucial moment because of nerves or pressure — to squander a lead. This is the most natural informal translation of "inability to maintain their lead." "Parked" (parked the bus) = defending very deep, not losing a lead. "Clapped back" = responded to a critic. "Bottled it" perfectly captures the idea of having a lead and failing to hold it.',
      },
      {
        sentence: 'INFORMAL: "That was a red all day 😤 ref bottled the decision." → FORMAL: "The challenge arguably _____ a red card — many felt the referee\'s decision was incorrect."',
        options: ['warranted', 'bottled', 'went viral'],
        correctIndex: 0,
        explanation: '"Warranted" is correct — formal vocabulary for "deserved/required." "The challenge warranted a red card" = a formal way of saying "that should have been a red card." "Bottled" is informal slang — wrong in a formal report. "Went viral" describes a social media event — not relevant here. Formal language replaces "red all day" (informal, emphatic) with "warranted" (formal, precise).',
      },
      {
        sentence: 'INFORMAL: "She\'s literally the GOAT 🐐 ngl." → FORMAL: "She is widely _____ as the greatest player of her generation."',
        options: ['regarded', 'bottled', 'wound up'],
        correctIndex: 0,
        explanation: '"Regarded" is correct — "widely regarded as" = formally expressing the opinion of many people. "She is widely regarded as the greatest" = formal version of "she\'s literally the GOAT." "Bottled" is wrong (failure verb). "Wound up" means provoked someone — wrong meaning. In formal language, we use "regarded as," "considered," "recognised as" instead of "literally the GOAT."',
      },
      {
        sentence: 'FORMAL: "The own goal allowed the visiting team to equalise." → INFORMAL: "That _____ let them back in 💀 so unfortunate"',
        options: ['OG', 'VAR', 'MOTM'],
        correctIndex: 0,
        explanation: '"OG" is correct — own goal, abbreviated for social media. "That OG let them back in" = the own goal allowed the opposition to equalise. "VAR" = Video Assistant Referee — not relevant here (no review system involved in this situation). "MOTM" = man of the match — nothing to do with an equaliser. "OG" is the standard informal abbreviation for own goal on social media.',
      },
      {
        sentence: 'INFORMAL: "VAR absolutely killed the game tonight 😤 everyone\'s calling them out on Twitter." → FORMAL: "The VAR decisions _____ the flow of the match and attracted significant criticism on social media."',
        options: ['disrupted', 'bottled', 'wound up'],
        correctIndex: 0,
        explanation: '"Disrupted" is correct — formal vocabulary for "killed the game" (stopped it flowing well). "The VAR decisions disrupted the flow" = formal version of "VAR absolutely killed the game." "Attracted significant criticism" = formal for "everyone\'s calling them out on Twitter." "Bottled" means failing under pressure — wrong meaning. "Wound up" means provoked — slightly closer but not precise enough.',
      },
      {
        sentence: 'Which tweet is in the CORRECT informal football social media register?',
        options: [
          '"The player demonstrated considerable technical ability in the attacking phase, warranting further recognition."',
          '"Ngl that was worldie from him 🔥 MOTM clear — the banter from their fans after that was 💀"',
          '"The VAR system has, on this occasion, delivered a decision that many observers consider contentious."',
        ],
        correctIndex: 1,
        explanation: 'B is correct. "Ngl" (not gonna lie), "worldie" (an exceptional goal), "MOTM clear" (obviously man of the match), "banter" (playful fan exchange), emojis throughout — all correct informal social media register. A is extremely formal — sounds like an academic article, not a tweet. C is formal with hedging language ("many observers consider contentious") — this is proper journalism language, not fan Twitter. Social media language is short, emotional, uses abbreviations and emojis.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — paying attention to formal vs informal register.',
      items: [
        {
          customerLine: 'Write a social media post reacting to a last-minute winner that ended a 0-0 draw.',
          options: [
            '"The match concluded with a late goal in stoppage time, bringing the contest to a dramatic conclusion and providing a much-needed three points for the home side."',
            '"SCENES 🤯🔥 90+4 winner after a 0-0 snooze fest — ngl thought we were settling for a point. What a goal tho 💪"',
            '"It was a very good result and the goal was satisfactory. We are pleased with the three points."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "SCENES 🤯" (shock/excitement), "90+4 winner" (informal time format), "snooze fest" (boring match), "ngl" (not gonna lie), "what a goal tho" (informal reaction), emojis — all perfect social media register. A is formal match report language — wrong for a tweet. C sounds robotic and unnatural for social media — too flat and formal for fan reaction language.',
        },
        {
          customerLine: 'Write a formal journalist\'s description of a VAR controversy.',
          options: [
            '"VAR absolutely bottled it — that was a pen all day and they took it away 😤 ROBBERY tbh"',
            '"The VAR review of the penalty claim proved deeply controversial. After a lengthy check, the on-field decision was overturned — a ruling that attracted considerable criticism from players, managers, and supporters."',
            '"Ngl the VAR was terrible tonight — everyone on Football Twitter is calling it out big time"',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Formal vocabulary: "proved deeply controversial," "lengthy check," "on-field decision was overturned," "attracted considerable criticism," "players, managers, and supporters." No abbreviations, no emojis, complete sentences, neutral but critical tone. A is pure social media slang — completely wrong for a formal article. C starts with "Ngl" and "Football Twitter" — informal, wrong register for journalism.',
        },
        {
          customerLine: 'A fan asks: "What\'s the difference between MOTM and POTM?"',
          options: [
            '"Man of the Match is awarded after each individual game, whereas Player of the Month is awarded for the best performer across all matches in a calendar month."',
            '"MOTM = one game, POTM = whole month ngl. Easy 😂"',
            '"Both MOTM and POTM relate to performance recognition in football and are awarded to players of distinction."',
          ],
          correctIndex: 0,
          explanation: 'A is correct for a clear, informative answer that explains the difference precisely. It uses formal language but is not overly complex — appropriate for an educational context. B is informal and correct but too brief — it does not fully explain the difference for someone learning English. C is vague and does not actually explain the difference between the two awards. In this learning context, A is best — clear, complete, formal but accessible.',
        },
        {
          customerLine: 'Convert this tweet to a formal match report sentence: "They literally parked the bus for 90 mins 😴 so negative 0 attempts on target smh"',
          options: [
            '"They parked the bus for 90 minutes and had 0 shots on target which was very negative football from them."',
            '"The visitors adopted an extremely defensive approach throughout, registering no attempts on target over the full 90 minutes — a deeply pragmatic but ultimately stifling tactical display."',
            '"The team was very defensive tonight and this made many supporters unhappy with the football they witnessed."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Adopted an extremely defensive approach" = formal for "parked the bus." "Registering no attempts on target" = formal for "0 attempts on target." "Deeply pragmatic but ultimately stifling tactical display" = formal critical assessment replacing "so negative 😴 smh." Full sentences, formal vocabulary, neutral tone, no abbreviations. A keeps "parked the bus" (still informal) and "0 shots" (too informal/numerical). C is too vague.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three register mistakes in this article — informal language used in a formal match report. Find them.',
      dialogue: [
        { speaker: 'Match report', text: 'The home team delivered a commanding performance in front of their supporters on Tuesday evening.' },
        { speaker: 'Match report', text: 'The opening goal came from a moment of individual brilliance — the striker literally smashed it into the top corner from 25 yards.' },
        { speaker: 'Match report', text: 'The VAR review of the penalty claim overturned the on-field decision, attracting considerable criticism from the visiting manager.' },
        { speaker: 'Match report', text: 'Tbh, the second half was dominated by the home side, who created several clear-cut chances.' },
        { speaker: 'Match report', text: 'The away team attempted to park the bus in the closing stages but were ultimately unable to preserve their lead.' },
        { speaker: 'Match report', text: 'The home team secured all three points with a composed finish in the 89th minute — a deserved MOTM performance from the striker.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'the striker literally smashed it into the top corner',
          correction: 'the striker struck the ball powerfully into the top corner',
          explanation: '"Literally" and "smashed" are informal/colloquial language — wrong for a formal match report. "Literally" is used informally for emphasis (even when the thing is not literal). "Smashed" is vivid slang — better suited for social media or fan language. Formal alternatives: "struck powerfully," "drove the ball," "unleashed a fierce effort." A match report should use controlled, precise vocabulary, not the dramatic slang of Twitter.',
        },
        {
          lineIndex: 3,
          incorrectText: 'Tbh, the second half was dominated by the home side',
          correction: 'The second half was dominated by the home side',
          explanation: '"Tbh" (to be honest) is a social media abbreviation — completely wrong in a formal match report. Formal writing never uses abbreviations like "tbh," "ngl," "smh," "lol." These belong to informal digital communication. In a formal report, simply remove "tbh" — the sentence is complete without it. If you want to signal a direct opinion in a formal context, use "notably," "indeed," or "clearly."',
        },
        {
          lineIndex: 5,
          incorrectText: 'a deserved MOTM performance from the striker',
          correction: 'a man-of-the-match performance from the striker',
          explanation: '"MOTM" is an abbreviation used informally on social media — in a formal match report, write it in full: "man of the match" or "man-of-the-match." All abbreviations from social media (MOTM, OG, VAR — wait, VAR has entered formal usage) should be written in full in formal writing. Note: "VAR" is now accepted in formal journalism because it is the official name of the system. But "MOTM," "GOAT," "WC" (for World Cup in full), "OG" all need to be written in full in formal contexts.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Write the social media version AND the formal version of each football situation.",
      items: [
        {
          customerLine: 'Situation: A 0-0 draw after a very dull match where one team defended with ten players behind the ball.',
          salespersonStart: 'Social media version: "Absolute snoozefest 😴',
          suggestedCompletion: 'Social media: "Absolute snoozefest 😴 They literally parked the bus for 90 mins — zero shots, zero attempt. Worst match I\'ve seen all season ngl 🥱 Should be illegal tbh. Away fans went home happy but the 90 minutes was robbery of our time 😤"\n\nFormal match report: "The contest failed to produce a goal, with the visiting side adopting a deeply defensive approach throughout. They registered no attempts on target, content to absorb pressure and protect their point. The home team dominated possession but lacked the creativity to break down a well-organised defensive structure. Ultimately, the points were shared in a disappointing encounter that left many supporters frustrated."',
        },
        {
          customerLine: 'Situation: A last-minute VAR decision overturned a goal and the match finished 0-0.',
          salespersonStart: 'Social media version: "VAR 😤',
          suggestedCompletion: 'Social media: "VAR 😤 They took our goal away in the 94th minute for offside by literally a toenail 💀 ROBBERY. Ngl the whole crowd was buzzing and then silence. That was heartbreaking and the VAR system is a joke tbh. SCENES for the wrong reasons 😭 Absolute madness."\n\nFormal match report: "A dramatic finale saw the home side\'s 94th-minute goal overturned following a VAR review for offside — a decision that left supporters and players visibly distraught. The review, which identified a marginal offside position, proved deeply controversial and prompted considerable debate. The match ultimately finished goalless, a result that arguably flattered the visiting side."',
        },
        {
          customerLine: 'Situation: A striker scored a hat-trick including one own goal from the opposition.',
          salespersonStart: 'Social media version: "HAT TRICK 🔥🔥🔥',
          suggestedCompletion: 'Social media: "HAT TRICK 🔥🔥🔥 Two worldies and an OG that was basically his fault anyway lol — MOTM clear ngl, she was absolutely everywhere tonight 🐐 The banter from their fans about the OG is sending me 😂 Peak football."\n\nFormal match report: "The striker produced a stunning hat-trick performance — two goals of considerable individual quality were supplemented by an own goal from the opposing centre-back, who inadvertently diverted her cross into the net. She was an undeniable presence throughout and was rightly recognised as the player of the match. Her contribution was a testament to both her technical ability and her constant attacking threat."',
        },
        {
          customerLine: 'Situation: A famous manager\'s team is eliminated from a cup competition by a lower-league side.',
          salespersonStart: 'Social media version: "GIANT KILLING 🤯',
          suggestedCompletion: 'Social media: "GIANT KILLING 🤯🤯🤯 SCENES — a League Two side just knocked out the WC holders\' manager\'s team in the cup!! Football Twitter has exploded 🔥 They absolutely bottled it — 1-0 up for 80 minutes and somehow lost 2-1 💀 The banter is absolutely unreal rn 😂 Classic cup football ngl."\n\nFormal match report: "In a stunning cup upset, the lower-league side defeated the heavily favoured visitors 2-1, completing one of the most dramatic giant-killings of the season. The hosts overturned a first-half deficit with two goals in the closing stages — a result that sent shockwaves through the competition and attracted widespread attention on social media. The defeat will inevitably raise questions about the visiting side\'s approach in cup competition."',
        },
      ],
    },
  },
};
