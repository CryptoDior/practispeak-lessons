import { Lesson } from '@/types/lesson';

export const liveCommentaryLanguage: Lesson = {
  slug: 'live-commentary-language',
  title: 'Live Commentary Language',
  subtitle: 'Commentary idioms: "slotted home", "rifles it in", "glances a header"',
  level: 'B1-B2',
  description: 'Learn the colourful, dramatic language commentators use during a live match — from goals and near misses to key moments and emotional reactions.',
  heroImage: '/images/live-commentary-language-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: The dramatic present — present simple for live action',
    description: 'In live football commentary, commentators use the present simple (not present continuous) to describe what is happening RIGHT NOW. This is called the "dramatic present." It sounds more immediate and exciting than "he is shooting" — "he shoots" is faster, more punchy, more vivid.',
    positivePattern: 'Subject + present simple verb (no -ing)',
    positiveExample: '"He shoots — he scores!" (not "he is shooting — he is scoring!") / "She cuts inside, beats one, beats two — and fires it into the top corner!"',
    negativePattern: 'Do NOT use present continuous for live commentary action — it sounds too slow and flat.',
    negativeExample: 'WRONG: "He is shooting — he is scoring!" (too slow for commentary) / RIGHT: "He shoots — he scores!" (faster, more dramatic)',
    positiveExamples: [
      { sentence: 'She cuts inside, looks up — and slots it home! What a goal!', note: '(present simple — dramatic, fast, vivid)' },
      { sentence: 'He receives the ball, turns, rifles it into the top corner — the goalkeeper had no chance!', note: '(three quick present simple verbs — building drama)' },
      { sentence: 'The keeper comes out, the striker lifts it — and it clips the bar!', note: '(dramatic present creates tension)' },
      { sentence: 'He glances a header — just wide! Agonisingly close!', note: '(one sharp present simple verb — very common in commentary)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "He is shooting! He is scoring! The crowd is going wild!"', note: 'Present continuous is too slow and flat for live commentary.' },
      { sentence: 'RIGHT: "He shoots! He scores! The crowd goes wild!"', note: 'Present simple gives every verb its own punch — commentary energy.' },
    ],
  },

  vocabulary: [
    {
      word: 'SLOT HOME',
      partOfSpeech: 'phrasal verb',
      definition: 'To place the ball calmly and precisely into the goal — not blasted, just guided in.',
      example: 'She slots it home from six yards — the goalkeeper was rooted to the spot.',
      imageSlug: '/images/slot-home.png',
    },
    {
      word: 'RIFLE',
      partOfSpeech: 'verb',
      definition: 'To shoot with great power and speed — like a bullet from a rifle.',
      example: 'He rifles it into the bottom corner — the keeper could not get near it.',
      imageSlug: '/images/rifle.png',
    },
    {
      word: 'GLANCE',
      partOfSpeech: 'verb',
      definition: 'To redirect the ball with the head — a light, angled touch that changes its direction.',
      example: 'She glances a header into the far corner from the corner kick — a beautiful piece of technique.',
      imageSlug: '/images/glance.png',
    },
    {
      word: 'CLIP',
      partOfSpeech: 'verb',
      definition: 'To just touch the edge of something — the ball clips the post or bar, meaning it hits the very edge.',
      example: 'He clips the post with a powerful drive — so close to a goal!',
      imageSlug: '/images/clip.png',
    },
    {
      word: 'POUNCE',
      partOfSpeech: 'verb',
      definition: 'To react quickly and score — to be in the right place to score from a rebound or loose ball.',
      example: 'The keeper spills the shot and she pounces — right place, right time!',
      imageSlug: '/images/pounce.png',
    },
    {
      word: 'DISPATCH',
      partOfSpeech: 'verb',
      definition: 'To finish confidently and efficiently — to score without any fuss.',
      example: 'He steps up to the penalty spot and dispatches it calmly into the corner.',
      imageSlug: '/images/dispatch.png',
    },
    {
      word: 'AGONISINGLY',
      partOfSpeech: 'adverb',
      definition: 'In a way that causes great frustration or pain — used when the ball just misses the goal.',
      example: 'The ball clips the bar and goes over — agonisingly close for the striker who had done everything right.',
      imageSlug: '/images/agonisingly.png',
    },
    {
      word: 'ROOTED TO THE SPOT',
      partOfSpeech: 'phrase',
      definition: 'When a goalkeeper or defender cannot move — frozen in place, unable to react to a shot.',
      example: 'He fires it into the far corner and the keeper is rooted to the spot — completely deceived.',
      imageSlug: '/images/rooted-to-the-spot.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CURL IN',
      definition: 'To bend the ball into the goal with the inside or outside of the foot.',
      example: 'She curls it in from 25 yards — a magnificent strike that bends around the wall!',
      imageSlug: '/images/curl-in.png',
    },
    {
      phrase: 'LASH OUT',
      definition: 'To kick the ball hard and with some desperation — usually a powerful clearance or shot under pressure.',
      example: 'The defender lashes it out for a corner — just in time to stop the striker getting a shot in.',
      imageSlug: '/images/lash-out.png',
    },
    {
      phrase: 'BURST THROUGH',
      definition: 'To break past defenders with pace — moving quickly through the defensive line.',
      example: 'She bursts through two challenges and fires it past the keeper — unstoppable!',
      imageSlug: '/images/burst-through.png',
    },
    {
      phrase: 'CHIP OVER',
      definition: 'To lift the ball over a goalkeeper — a delicate shot that goes above them.',
      example: 'The goalkeeper comes out — and he chips it over! A wonderful, cheeky finish!',
      imageSlug: '/images/chip-over.png',
    },
    {
      phrase: 'POWER HOME',
      definition: 'To score with great force — a powerful finish that goes in despite the goalkeeper.',
      example: 'He meets the cross and powers it home with his head — the keeper barely moved.',
      imageSlug: '/images/power-home.png',
    },
    {
      phrase: 'DIG OUT',
      definition: 'To create a shot from a tight or difficult angle — making something from very little.',
      example: 'She digs it out from a tight angle on the right — and somehow finds the far corner!',
      imageSlug: '/images/dig-out.png',
    },
  ],

  onThePitch: {
    instructions: 'These are iconic commentary phrases — used at key moments during a live match.',
    items: [
      {
        cue: "And it's there! IT'S THERE!",
        meaning: 'The ball has gone into the net — a goal has been scored.',
        usage: 'One of the most simple and powerful commentary phrases. Repeated for emphasis and excitement. The repetition and rising tone is what makes it work. Commentators often pause dramatically before saying it — building tension as the ball goes in.',
        imageSlug: 'otp-and-its-there',
      },
      {
        cue: 'What a strike! What a finish!',
        meaning: 'Expressing admiration for the quality of the goal.',
        usage: '"What a + noun!" is a very common exclamatory structure in commentary — used for exceptional moments. "Strike" = a shot at goal. "Finish" = the act of scoring. Note the exclamation — no verb needed in this structure. "What a goal!" / "What a save!" / "What a player!" — all the same dramatic pattern.',
        imageSlug: 'otp-what-a-strike',
      },
      {
        cue: "He's done it again!",
        meaning: 'A player has scored or performed brilliantly — and it is not the first time.',
        usage: 'Commentary phrase using present perfect for immediate past. "He\'s done it again" = he did it before AND he has just done it again now. It implies a player is consistently exceptional. The "again" carries huge weight — it is the word that makes this phrase exciting.',
        imageSlug: 'otp-hes-done-it-again',
      },
      {
        cue: 'Oooooh — just wide! So close!',
        meaning: 'The ball has gone narrowly past the post — a near miss.',
        usage: 'The sound "Ooooh" is the universal sound of a near miss in football. "Just wide" = the ball went a small distance past the post. "So close" = very nearly a goal. Commentators often hold the "Ooooh" for a long time — the length of the sound reflects how close it was.',
        imageSlug: 'otp-just-wide',
      },
      {
        cue: 'The keeper had no chance!',
        meaning: 'The shot was so good that even a good goalkeeper could not have stopped it.',
        usage: 'Said after an exceptional goal — to praise the striker rather than criticise the goalkeeper. "Had no chance" = past simple, because it is describing a moment that just happened. This phrase is a way of saying: the goalkeeper did not fail — the finish was simply too good.',
        imageSlug: 'otp-keeper-had-no-chance',
      },
      {
        cue: "He slips it through — and she's in! One on one with the keeper!",
        meaning: 'A pass has put a striker through on goal — facing only the goalkeeper.',
        usage: '"Slips it through" = a precise pass through the defence. "She\'s in" = she has got behind the defenders. "One on one" = she is alone facing the goalkeeper. This is one of the most exciting moments in football — and this commentary phrase perfectly captures the tension and excitement of that moment.',
        imageSlug: 'otp-slips-it-through',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today we study something different — commentary language. Listen to a commentator describe a goal: "She cuts inside, beats one, beats two — and [[slots it home:places the ball calmly and precisely into the goal]] from the edge of the box! The keeper is [[rooted to the spot:frozen — unable to move or react]]!" What do you notice about the verbs?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'They are all present simple — "cuts," "beats," "slots." Not "is cutting" or "is beating." It is very fast and direct.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. This is the dramatic present — present simple for live action. It sounds more immediate and exciting than present continuous. Now — Ronaldo, how would a commentator describe this: a player receives the ball, turns, and [[rifles:shoots with great power and speed — like a bullet]] it into the top corner?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: '"He receives the ball, turns — and rifles it into the top corner! What a finish! The keeper had no chance!" Is that right?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. Notice "What a finish!" — no verb. "What a + noun" is a commentary pattern for expressing admiration. And what about a near miss — the ball [[clips:just touches the very edge of]] the bar?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '"She fires it — clips the bar — and the crowd groans! [[Agonisingly:in a way that causes great frustration]] close! So unlucky!"',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent. And a penalty scored calmly?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: '"He steps up — and [[dispatches:finishes confidently and efficiently, without fuss]] it into the corner. No hesitation. Goalkeeper went the right way but could not get near it."',
    },
  ],

  matchingExercise: [
    { word: 'SLOT HOME', definition: 'To place the ball calmly and precisely into the goal' },
    { word: 'RIFLE', definition: 'To shoot with great power and speed — like a bullet' },
    { word: 'GLANCE', definition: 'To redirect the ball with the head — a light, angled touch' },
    { word: 'CLIP', definition: 'To just touch the edge of the post or bar' },
    { word: 'POUNCE', definition: 'To react quickly and score from a rebound or loose ball' },
    { word: 'DISPATCH', definition: 'To finish confidently and efficiently — without fuss' },
    { word: 'AGONISINGLY', definition: 'In a way that causes great frustration — used for near misses' },
    { word: 'ROOTED TO THE SPOT', definition: 'Frozen in place — unable to move or react to the shot' },
  ],

  fillBlankExercise: [
    { before: 'She cuts inside and', answer: 'rifles', after: 'it into the top corner — the keeper had absolutely no chance.' },
    { before: 'He', answer: 'glances', after: 'a header into the far corner from the corner kick — perfect technique.' },
    { before: 'The ball', answer: 'clips', after: 'the post — agonisingly close! The striker cannot believe it.' },
    { before: 'The keeper spills it and she', answer: 'pounces', after: '— right place, right time! What a finish!' },
    { before: 'He steps up to the penalty spot and', answer: 'dispatches', after: 'it calmly into the corner. No hesitation.' },
    { before: 'The goalkeeper is', answer: 'rooted to the spot', after: '— completely deceived by the pace of the shot.' },
    { before: 'It clips the bar —', answer: 'agonisingly', after: 'close! So unlucky for the striker who did everything right.' },
    { before: 'She', answer: 'slots it home', after: 'from six yards — calm as you like. A superb finish.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"She cuts inside and slots it home!" What makes this good commentary language?',
      options: [
        'It uses present continuous — "is cutting" and "is slotting" — which sounds exciting',
        'It uses present simple — fast, direct, and dramatic',
        'It uses past simple — because the goal has already happened',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "rifle it in" mean?',
      options: [
        'To chip the ball delicately over the goalkeeper',
        'To head the ball from a corner kick',
        'To shoot with great power and speed',
      ],
      correctIndex: 2,
    },
    {
      question: '"The ball clips the bar!" What happened?',
      options: [
        'The ball hit the middle of the crossbar and went in',
        'The ball just touched the edge of the bar and did not go in',
        'The goalkeeper caught the ball off the bar',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which commentary sentence uses the CORRECT dramatic present form?',
      options: [
        '"She is cutting inside! She is slotting it home!"',
        '"She cuts inside — and slots it home!"',
        '"She has cut inside and has slotted it home!"',
      ],
      correctIndex: 1,
    },
    {
      question: '"What a finish!" — what is the grammar structure of this commentary phrase?',
      options: [
        '"What a + noun" — an exclamatory phrase expressing admiration, no verb needed',
        '"What + adjective" — describing how the finish looked',
        '"What + verb" — asking a question about the action',
      ],
      correctIndex: 0,
    },
    {
      question: '"He pounces on the rebound!" What does this mean?',
      options: [
        'He headed the ball from a corner',
        'He reacted quickly to score from a loose ball after the first shot was saved',
        'He burst through the defensive line with pace',
      ],
      correctIndex: 1,
    },
    {
      question: '"Agonisingly close!" — when is this phrase used?',
      options: [
        'When a goal is scored with exceptional quality',
        'When a shot hits the bar or goes just wide — a frustrating near miss',
        'When a goalkeeper makes an exceptional save',
      ],
      correctIndex: 1,
    },
    {
      question: '"The keeper had no chance!" — what does this phrase communicate?',
      options: [
        'The goalkeeper made a mistake',
        'The goalkeeper was in the wrong position',
        'The shot was so good that even a good goalkeeper could not have stopped it',
      ],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each commentary sentence using the correct dramatic present form.',
    items: [
      {
        sentence: 'She receives the ball on the edge of the box, turns — and _____ it into the top corner! Unstoppable!',
        options: ['rifles', 'is rifling', 'rifled'],
        correctIndex: 0,
        explanation: '"Rifles" is correct — present simple for live dramatic commentary. The dramatic present uses the base form of the verb (present simple) for live action. "Is rifling" (present continuous) is grammatically correct English but sounds flat and slow for commentary. "Rifled" is past simple — used to describe something that has already happened in a highlight, not for live commentary in the present moment.',
      },
      {
        sentence: 'He _____ a header into the far corner from the corner kick — the goalkeeper did not move!',
        options: ['is glancing', 'glances', 'has glanced'],
        correctIndex: 1,
        explanation: '"Glances" is correct — dramatic present. "Glance" as a football verb means to redirect the ball with the head at an angle. "Is glancing" (continuous) would be correct in general English but sounds slow for live commentary. "Has glanced" (present perfect) describes a very recent past action — possible but less natural for the moment of live commentary.',
      },
      {
        sentence: 'The ball _____ the post — agonisingly close! The striker cannot believe it!',
        options: ['clips', 'is clipping', 'clipped'],
        correctIndex: 0,
        explanation: '"Clips" is correct — dramatic present. In live commentary, even a ball hitting the post is described in the present simple: "clips." "Is clipping" sounds unnatural for live commentary. "Clipped" (past simple) could be used in a highlights package: "The ball clipped the post in the 78th minute." But for live commentary in the moment, "clips" is the correct dramatic present form.',
      },
      {
        sentence: 'The goalkeeper spills it — and she _____! Right place, right time!',
        options: ['pounced', 'is pouncing', 'pounces'],
        correctIndex: 2,
        explanation: '"Pounces" is correct — dramatic present. "Pounce" in football means to react immediately and score from a rebound or loose ball. The present simple "pounces" gives the commentary immediacy and excitement. "Pounced" (past simple) would be used in a post-match discussion. "Is pouncing" sounds like a slowly developing action — but pouncing is instantaneous, which is exactly why the sharp present simple works better.',
      },
      {
        sentence: 'He steps up to the penalty spot — and _____ it into the corner. Cool as you like.',
        options: ['dispatches', 'is dispatching', 'to dispatch'],
        correctIndex: 0,
        explanation: '"Dispatches" is correct — dramatic present. "Dispatch" in football means to score confidently and efficiently from a penalty or clear chance. "Cool as you like" is a commentary idiom meaning "very calmly." The combination of "dispatches" (present simple) + "cool as you like" creates the classic image of a composed, experienced penalty taker. "Is dispatching" is slow. "To dispatch" is an infinitive — not a commentary verb form.',
      },
      {
        sentence: 'She _____ the ball from 30 yards — curls it round the wall — and it _____ into the far corner!',
        options: ['hits / goes', 'is hitting / is going', 'hit / went'],
        correctIndex: 0,
        explanation: '"Hits / goes" is correct — both verbs in the present simple for continuous dramatic commentary. This is a key feature of commentary: multiple present simple verbs in quick succession, each one a separate event. "Hits... curls... goes" — three sharp verbs describing three separate moments. "Is hitting / is going" is too slow and heavy. "Hit / went" (past simple) would be used in a highlights analysis, not live commentary.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Write or choose the best live commentary for each moment — using the dramatic present.',
      items: [
        {
          customerLine: 'The striker receives the ball, dribbles past two defenders, and scores with a powerful shot.',
          options: [
            '"She was receiving the ball, was dribbling past two defenders, and was scoring with a powerful shot!"',
            '"She receives the ball, beats one, beats two — and rifles it into the top corner! What a goal! The keeper had no chance!"',
            '"She has received the ball, has dribbled past two defenders, and has scored with a powerful shot."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Present simple verbs — "receives, beats, beats, rifles" — each one punchy and immediate. "What a goal!" = exclamatory commentary phrase. "The keeper had no chance" = past simple for a fact about the moment just passed. A uses past continuous — completely wrong for live commentary. C uses present perfect — better for very recent news but not for the dramatic live commentary style.',
        },
        {
          customerLine: 'The ball hits the post and goes wide — a near miss.',
          options: [
            '"The ball clips the post — and goes just wide! Agonisingly close! The striker is devastated!"',
            '"The ball was clipping the post — and was going just wide! It was agonisingly close!"',
            '"The ball has clipped the post and has gone just wide — it has been agonisingly close!"',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Clips" and "goes" — present simple, dramatic present. "Agonisingly close!" = no verb needed, commentary exclamation. "The striker is devastated!" = present simple for immediate emotional reaction. B uses past continuous — wrong for live commentary. C uses present perfect — possible for very recent events but sounds too formal and slow for this emotional near-miss moment.',
        },
        {
          customerLine: 'A player chips the ball delicately over the goalkeeper to score.',
          options: [
            '"He has chipped it over the goalkeeper and has scored — it was a delicate finish!"',
            '"He chips it — over the goalkeeper — and into the net! Cheeky! Brilliant! What a finish from the young striker!"',
            '"He was chipping it over the goalkeeper — he was scoring with a delicate finish!"',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Chips it — over — into the net!" — fragmented, present simple, very dramatic. The dashes create pauses that build tension. "Cheeky!" and "Brilliant!" = one-word commentary reactions. "What a finish!" = exclamatory phrase. A uses present perfect — too formal. B captures the true energy of live commentary: fast, fragmented, emotional, present simple throughout.',
        },
        {
          customerLine: 'The goalkeeper makes an incredible save to deny the striker.',
          options: [
            '"He was shooting — she was saving — what a save she was making!"',
            '"He shoots — she saves! What a stop! The goalkeeper denies him with a brilliant reflex save! Incredible!"',
            '"He has shot — she has saved — what a save she has made!"',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "He shoots — she saves!" — two short present simple sentences, each capturing one moment. "What a stop!" = exclamatory commentary. "Denies him" = present simple. "Incredible!" = one-word emotional reaction. A uses past continuous throughout — wrong. C uses present perfect — sounds like a post-match analysis, not live commentary. The energy and immediacy of B is what live commentary requires.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with commentary language in this match description. Find them.',
      dialogue: [
        { speaker: 'Commentator 1', text: 'And here we go — she receives the ball on the right, cuts inside — and rifles it into the top corner! What a goal!' },
        { speaker: 'Commentator 2', text: 'She was absolutely magnificent there — the power and precision of that strike. The goalkeeper was rooted to the spot.' },
        { speaker: 'Commentator 1', text: 'Now the home team pressing — he wins the ball, plays it through — and the striker is bursting through! One on one!' },
        { speaker: 'Commentator 2', text: 'She shoots — she is scoring! And the crowd goes absolutely wild in this stadium!' },
        { speaker: 'Commentator 1', text: 'What a match this is — and there is still ten minutes remaining. What a goal she is scoring just then!' },
        { speaker: 'Commentator 2', text: 'Two goals from her today — she dispatches both with incredible composure. She glanced the first and slotted the second. A masterclass.' },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'She shoots — she is scoring!',
          correction: 'She shoots — she scores!',
          explanation: '"She is scoring" is present continuous — wrong for live dramatic commentary. The dramatic present uses present simple: "she scores." This is the most important rule in commentary language: use present simple for the key moments of action. Mixing "she shoots" (correct: present simple) with "she is scoring" (incorrect: present continuous) is inconsistent and breaks the commentary rhythm. "She shoots — she scores!" is the iconic, correct form.',
        },
        {
          lineIndex: 4,
          incorrectText: 'What a goal she is scoring just then!',
          correction: 'What a goal that was! / What a goal she scored just then!',
          explanation: 'This is a double error. First: "just then" indicates the goal has already happened — past simple is now appropriate. "What a goal that was!" is the natural commentary phrase for a goal that has just been scored. Second: "she is scoring" (present continuous) is wrong even before "just then" — after the goal is in, commentary switches to past simple for immediate reflection. "What a goal she is scoring just then" is grammatically confused.',
        },
        {
          lineIndex: 4,
          incorrectText: 'she is scoring just then',
          correction: 'she scored just then',
          explanation: 'Same error noted above — "just then" signals we are now reflecting on a completed action. Once the ball is in the net, the dramatic present switches to past simple for commentary reaction: "What a goal that was! / What a goal she scored just then!" Live commentary = dramatic present for the action. Reflection after the moment = past simple.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the commentary sequence using the dramatic present — present simple throughout.",
      items: [
        {
          customerLine: 'Commentator 2: Set up the commentary for a free kick on the edge of the box.',
          salespersonStart: 'Commentator 1: The referee points to the spot — no, wait — it\'s a free kick, about 22 yards out.',
          suggestedCompletion: 'She steps up. The wall is set. The goalkeeper spreads his hands. She approaches — and curls it! It bends around the wall — clips the inside of the post — and goes in! What a free kick! The goalkeeper dives the right way but cannot stop it — the bend on the ball is simply too much! She turns and runs to the corner flag — the crowd is on its feet! What a moment! What a player!',
        },
        {
          customerLine: 'Commentator 2: Describe a counter-attack that ends in a goal.',
          salespersonStart: 'Commentator 1: The home team win the ball in their own half — and they are off!',
          suggestedCompletion: 'Three players break forward — the midfielder releases the striker with a perfectly weighted pass. The striker bursts through, one on one with the keeper — she looks up, waits — and slots it home! Calm as you like! The goalkeeper goes to ground early and she simply rolls it into the empty net. What composure! What a finish! She dispatches it with ice in her veins — her fifth goal in six matches. Absolutely extraordinary!',
        },
        {
          customerLine: 'Commentator 2: Set up a penalty kick and describe the outcome — a saved penalty.',
          salespersonStart: 'Commentator 1: The referee points to the spot — and there will be a penalty.',
          suggestedCompletion: 'He steps up — the crowd is silent. He places the ball. The goalkeeper bounces on his line. He runs — shoots — and the keeper saves it! He dives to his right and gets a strong hand to it! The ball clips the post and goes out! Agonisingly close! He cannot believe it — he buries his head in his hands. What a save — the goalkeeper absolutely guesses right and denies him! The striker is devastated.',
        },
        {
          customerLine: 'Commentator 2: Describe a dramatic last-minute header to win the match.',
          salespersonStart: 'Commentator 1: We are in the 94th minute — and the home team have a corner.',
          suggestedCompletion: 'The corner comes in — swinging into the near post — and she rises above everyone! She glances a header — it clips the underside of the bar — and goes in! She has done it! In the 94th minute! The crowd goes absolutely wild! She sprints to the corner, arms out, and the whole team piles on top of her! What a moment! What a header! What a player! The goalkeeper is rooted to the spot — he had no chance with that finish. What a way to win a match!',
        },
      ],
    },
  },
};
