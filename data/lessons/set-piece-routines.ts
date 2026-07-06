import { Lesson } from '@/types/lesson';

export const setPieceRoutines: Lesson = {
  slug: 'set-piece-routines',
  title: 'Set-Piece Routines',
  subtitle: 'Designed set pieces, near-post runs, blocking, delivery language',
  level: 'B1-B2',
  description: 'Set pieces — corners, free kicks, and throw-ins — are increasingly decisive in modern football. Elite teams dedicate hours to designing and practicing them. In this lesson you will learn the precise language used to describe, plan, and analyse set-piece routines.',
  heroImage: '/images/set-piece-routines-hero.png',

  warmUp: {
    questions: [
      'Can you think of a famous set-piece goal — a corner, free kick, or throw-in — that you remember? What made it special?',
      'Do you think set pieces are more important than open play in deciding matches? Why or why not?',
      'What do you think coaches focus on most when designing a corner routine — the delivery, the runners, or the blocking?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Imperative and instructional language — giving precise tactical instructions',
    description: 'Set-piece language is built on imperatives — direct commands that coaches use to organise players. At B2 level, this extends to conditional imperatives ("If the wall jumps, shoot under it"), sequenced instructions ("First, block the near post; then peel off to the back post"), and descriptive noun phrases that label specific actions.',
    positivePattern: 'IMPERATIVE: "Attack the near post." "Hold your run." / CONDITIONAL IMPERATIVE: "If the keeper comes, attack the second ball." / SEQUENCED: "First [action], then [action]." / DESCRIPTIVE: "a near-post flick-on," "a blocking run," "a near-post delivery."',
    positiveExample: '"Attack the near post, dummy the ball on — let it run to the back post runner. If the first ball is cleared, press the second ball immediately. First man blocks the near-post defender; second man peels to the far post."',
    negativePattern: 'Do NOT be vague with instructions — every player needs to know exactly where to go and when. Do NOT overload with too many instructions — keep each sequence clear and memorisable.',
    negativeExample: 'VAGUE: "Go to the goal area and try to score." → PRECISE: "Make a near-post run, dummy the delivery, and hold your position for the flick-on."',
    positiveExamples: [
      { sentence: '"Hold your run until the delivery — time it to arrive at the far post as the ball comes in."', note: '(Sequenced imperative with timing instruction)' },
      { sentence: '"If the first ball is won by the header, attack the second ball immediately — anticipate the knock-down."', note: '(Conditional imperative based on first-ball outcome)' },
      { sentence: '"Block the near-post defender first — then peel off and attack the back post."', note: '(Two-part sequential set-piece instruction)' },
    ],
    negativeExamples: [
      { sentence: 'VAGUE: "Go near the goal and see what happens with the corner."', note: 'PRECISE: "Make a near-post run at pace, dummy the delivery, and hold the back post for the flick-on."' },
      { sentence: 'WRONG: "Run to where the ball is going before it gets there maybe."', note: 'Set-piece language must be precise and decisive — "run to the near post on my signal."' },
    ],
  },

  vocabulary: [
    {
      word: 'SET PIECE',
      partOfSpeech: 'phrase',
      definition: 'A pre-designed play from a dead ball — corners, free kicks, throw-ins, penalties. Planned and practised in advance.',
      example: '"Over 30% of goals in elite football now come from set pieces — they are no longer secondary to open play."',
      imageSlug: '/images/set-piece-routines-set-piece.png',
    },
    {
      word: 'DELIVERY',
      partOfSpeech: 'noun',
      definition: 'The cross, pass, or kick that a set-piece taker sends into the box — the quality and type of delivery shapes the whole routine.',
      example: '"His corner delivery was excellent — a whipped, in-swinging ball to the near post at exactly the right height."',
      imageSlug: '/images/set-piece-routines-delivery.png',
    },
    {
      word: 'NEAR POST',
      partOfSpeech: 'phrase',
      definition: 'The goalpost closest to where the ball is being delivered from — a common target for set pieces.',
      example: '"A near-post run from the striker caused confusion — the defender expected the ball to go over the top."',
      imageSlug: '/images/set-piece-routines-near-post.png',
    },
    {
      word: 'FAR POST',
      partOfSpeech: 'phrase',
      definition: 'The goalpost furthest from the delivery point — often targeted by the back-post runner after a near-post flick-on.',
      example: '"The corner was flicked on at the near post and the far-post runner arrived perfectly to head home."',
      imageSlug: '/images/set-piece-routines-far-post.png',
    },
    {
      word: 'FLICK-ON',
      partOfSpeech: 'phrase',
      definition: 'A subtle header that redirects the ball onwards — typically at the near post — to a runner arriving at the far post.',
      example: '"The tall striker provided the near-post flick-on, redirecting the ball across goal for the midfielder to finish."',
      imageSlug: '/images/flick-on.png',
    },
    {
      word: 'BLOCKING RUN',
      partOfSpeech: 'phrase',
      definition: 'A run made specifically to block or screen a defender — not to receive the ball, but to create space for a teammate.',
      example: '"The blocking run from the winger prevented the centre-back from tracking the real runner to the far post."',
      imageSlug: '/images/blocking-run.png',
    },
    {
      word: 'IN-SWINGER / OUT-SWINGER',
      partOfSpeech: 'phrase',
      definition: 'An in-swinger curves towards the goal; an out-swinger curves away. Describes the shape of a corner or free-kick delivery.',
      example: '"An in-swinging corner to the near post is one of the most dangerous deliveries in football — the ball moves away from the goalkeeper."',
      imageSlug: '/images/in-swinger.png',
    },
    {
      word: 'SECOND BALL',
      partOfSpeech: 'phrase',
      definition: 'The ball after the initial delivery is cleared or headed — teams design specific players to attack second balls around the penalty area.',
      example: '"They had a designated second-ball player stationed on the edge of the box — ready to shoot first-time from any clearance."',
      imageSlug: '/images/second-ball.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PEEL OFF',
      definition: 'To break away from a blocking position and make a run — separating from a screen to attack the ball.',
      example: '"He peeled off the blocking run perfectly — the defender lost him for a split second, which was all he needed."',
      imageSlug: '/images/peel-off.png',
    },
    {
      phrase: 'FLICK ON',
      definition: 'To redirect the ball with a glancing header — sending it onwards rather than heading it powerfully at goal.',
      example: '"She flicked it on at the near post and the back-post runner finished with her left foot."',
      imageSlug: '/images/flick-on-verb.png',
    },
    {
      phrase: 'ATTACK THE BALL',
      definition: 'To move aggressively towards the delivery — not waiting for the ball but going to meet it.',
      example: '"Attack the ball — do not stand and wait. Get to the near post before the defender can adjust."',
      imageSlug: '/images/attack-the-ball.png',
    },
    {
      phrase: 'HOLD YOUR RUN',
      definition: 'To delay making a run until the right moment — timing the movement to arrive at the same time as the ball.',
      example: '"Hold your run — wait for the signal, then make your move to the back post. Too early and you run offside."',
      imageSlug: '/images/hold-your-run.png',
    },
    {
      phrase: 'PICK UP',
      definition: 'To mark and track a specific opponent during a set piece — each defender is assigned to "pick up" one attacker.',
      example: '"Pick up the number nine — man-mark him from the moment the corner is taken."',
      imageSlug: '/images/set-piece-routines-pick-up.png',
    },
    {
      phrase: 'CLEAR OUT',
      definition: 'To block a defender aggressively, creating space for a teammate — a specific type of blocking run.',
      example: '"His job was to clear out the centre-back on the near post — creating the space for the far-post run."',
      imageSlug: '/images/clear-out.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key set-piece concepts and language used by coaches and analysts.',
    items: [
      {
        cue: 'Zonal vs man-marking at set pieces',
        meaning: 'Two different defensive systems for corners and free kicks — assigning zones or specific opponents.',
        usage: '"Zonal marking" = defenders cover specific areas of the box — whoever enters their zone is their responsibility. "Man-marking" = each defender is assigned to track a specific attacker. The debate is ongoing: zonal marking is more organised but attackers can time runs to arrive between zones; man-marking is tighter but can be beaten by blocking runs. Most elite teams use a hybrid of both. "They were caught between zonal and man-marking on the corner — nobody claimed the near-post delivery."',
        imageSlug: 'otp-zonal-vs-man-marking',
      },
      {
        cue: 'Short corner',
        meaning: 'When the corner taker passes short to a teammate instead of delivering directly into the box.',
        usage: 'A "short corner" is designed to change the angle of the delivery, pull defenders out of position, or create a 2v1 overload on the edge of the area. It can also be used to reset a routine that has been read. "They played a short corner — the defender was pulled out to press, which opened up the near-post zone for the delivery from a wider angle." Short corners can also be a dummy move: pretend to go short, draw the man, then swing it in.',
        imageSlug: 'otp-short-corner',
      },
      {
        cue: 'The "back-post run" pattern',
        meaning: 'A runner who makes a late, diagonal run to the far post — timed to arrive as a near-post header or flick-on redirects the ball.',
        usage: 'The back-post run is one of the most reliable set-piece patterns. As the ball is delivered to the near post (where a flick-on header redirects it), a runner arrives from deep at the far post — often unmarked because all defenders track the near-post delivery. "His back-post run was perfectly timed — he arrived completely unmarked as the flick-on created the space he needed." The run must be disguised and held until the last moment.',
        imageSlug: 'otp-back-post-run',
      },
      {
        cue: 'Free-kick delivery zones',
        meaning: 'Different areas from which a free kick is taken require different delivery types and target zones.',
        usage: 'From central positions (30 yards out): direct shot over or through the wall, or cutback to a runner. From wide central positions: in-swinging or out-swinging delivery to near/far post. From very wide angles: near-post flick-on, cutback to edge of box for shot. "The free kick was in an ideal position — 25 yards out, central, just outside the wall\'s reach. The delivery curled over the wall into the top corner — unreachable." Position determines strategy.',
        imageSlug: 'otp-free-kick-zones',
      },
      {
        cue: 'The "dummy" run',
        meaning: 'A player making a run as if to receive the ball — but deliberately not touching it, letting it run to a teammate behind them.',
        usage: '"Dummy run" or "dummy" at a set piece = one player runs and pretends to play the ball, leaving it for a second runner or leaving the goalkeeper wrong-footed. "The striker dummied the near-post delivery — let it run through, completely deceiving the goalkeeper and the near-post defender. The midfielder arrived unmarked at the back post." Dummies are high-risk (if the second runner is not there, the ball goes out) but devastatingly effective when executed perfectly.',
        imageSlug: 'otp-dummy-run',
      },
      {
        cue: 'Late runners from deep',
        meaning: 'Players who do not enter the box until the last moment — arriving as the delivery comes in, making them very difficult to track.',
        usage: 'A "late runner" starts outside the box and makes their run just before the delivery — timed to arrive at the penalty spot or back post as the ball comes in. "The midfielders arrived late from outside the box — the defenders were occupied with the initial runners. By the time they tracked the late runner, the header had already been made." Late runners are particularly effective against zonal defences because they arrive after the zones have been assigned.',
        imageSlug: 'otp-late-runners',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Corner routine. Here is the [[set piece:a pre-designed play from a dead ball]]. Sofia — [[near post:the goalpost closest to the delivery point]] runner. Ronaldo — [[blocking run:a run made to screen a defender, not to receive the ball]]. Then [[peel off:to break away from a blocking position and make a run]] to the [[far post:the goalpost furthest from the delivery point]]. The [[delivery:the cross or kick that the taker sends into the box]] is an [[in-swinger / out-swinger:in-swinger curves towards goal; out-swinger curves away]] — in-swinging, near post. Understood?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'So I [[attack the ball:to move aggressively towards the delivery — go to meet it]], make a near-post run, and [[flick on:to redirect with a glancing header]] to Ronaldo who has [[peel off:same]]ed to the back post?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. The [[flick-on:a subtle header that redirects the ball onwards]] creates the opportunity. Ronaldo — [[hold your run:to delay making a run until the right moment]]. Do not move until Sofia makes contact with the ball. And if the [[second ball:the ball after the initial delivery is cleared]] comes out, who attacks it?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The two midfielders on the edge of the box — positioned for the [[second ball:same]]. One on the left, one right of centre. They need to [[pick up:to mark and track a specific opponent]] any attacker trying to clear quickly — and if the ball comes out, shoot first time.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. Now — defensive corner. Do we use [[zonal vs man-marking:zonal = cover areas; man-marking = track specific opponents]] or man-to-man?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Hybrid — two zonal defenders covering the near and far post, three man-markers for their biggest threats. The danger is the [[dummy run:a player runs but deliberately lets the ball go to a teammate]] — if their striker dummies and the ball runs through, someone must cover that second zone. I would assign the short corner runner to [[clear out:to block a defender aggressively]] our own near-post zone if they try the short option.',
    },
  ],

  matchingExercise: [
    { word: 'SET PIECE', definition: 'A pre-designed play from a dead ball — corners, free kicks, penalties' },
    { word: 'DELIVERY', definition: 'The cross or kick sent into the box by the set-piece taker' },
    { word: 'FLICK-ON', definition: 'A glancing header that redirects the ball onwards to a back-post runner' },
    { word: 'BLOCKING RUN', definition: 'A run made to screen a defender — not to receive the ball' },
    { word: 'IN-SWINGER', definition: 'A delivery that curves towards the goal — away from the goalkeeper' },
    { word: 'SECOND BALL', definition: 'The ball after the initial delivery is cleared or headed' },
    { word: 'NEAR POST', definition: 'The goalpost closest to where the set piece is taken from' },
    { word: 'PEEL OFF', definition: 'To break away from a blocking position and make a run to goal' },
  ],

  fillBlankExercise: [
    { before: 'The corner', answer: 'delivery', after: 'was perfect — an in-swinging ball to the near post at exactly the right height.' },
    { before: 'He made a', answer: 'blocking run', after: 'to screen the near-post defender, creating space for the back-post runner.' },
    { before: 'She', answer: 'peeled off', after: 'the screen perfectly and arrived unmarked at the back post as the ball came in.' },
    { before: 'The striker', answer: 'flicked it on', after: 'at the near post, redirecting the ball across goal for the arriving midfielder.' },
    { before: '', answer: 'Hold your run', after: '— wait for the ball to leave my foot before you start your move to the far post.' },
    { before: 'The midfielder stationed on the edge was their designated', answer: 'second ball', after: 'player — any clearance was his to shoot.' },
    { before: 'An', answer: 'in-swinging', after: 'corner to the near post is one of the most dangerous deliveries in modern football.' },
    { before: 'Against their zonal defence, we used', answer: 'late runners', after: 'from deep — arriving after the zones had already been set.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"She made a blocking run." What did she do?',
      options: [
        'She made a run towards the near post to receive the delivery.',
        'She ran to screen a defender — creating space for a teammate, not to receive the ball herself.',
        'She blocked the corner taker\'s delivery with her body.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The striker dummied the near-post delivery." What happened?',
      options: [
        'The striker headed the ball powerfully at the near post.',
        'The striker ran but deliberately let the ball go through to a teammate behind.',
        'The striker ran to the near post as a decoy but the ball went to the far post.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is an "in-swinging" corner?',
      options: [
        'A corner that curves away from the goal — making the goalkeeper come out.',
        'A corner that curves towards the goal — moving away from the goalkeeper.',
        'A corner played short to a teammate instead of into the box.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They attacked the second ball brilliantly." What is the "second ball"?',
      options: [
        'The second corner taken in the same sequence.',
        'The ball after the initial delivery has been cleared or headed away.',
        'A second delivery made from a different angle after the first was cleared.',
      ],
      correctIndex: 1,
    },
    {
      question: 'A coach says: "Hold your run — peel off at the moment of delivery." What should the player do?',
      options: [
        'Start running immediately and arrive before the ball is delivered.',
        'Wait until the ball is delivered, then break away from a screening position.',
        'Stay completely still and wait for the ball to come to them.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the advantage of a "late runner from deep" at a corner?',
      options: [
        'They arrive early and give the delivery more options.',
        'They arrive as the ball comes in — hard to track because the defenders are already occupied.',
        'They stay outside the box and can shoot directly from clearances.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They use zonal marking at set pieces." What does this mean?',
      options: [
        'Each defender is assigned to track a specific attacker throughout the routine.',
        'Defenders cover specific areas of the box — whoever enters their zone is their responsibility.',
        'The goalkeeper calls the zones and decides who attacks the ball.',
      ],
      correctIndex: 1,
    },
    {
      question: '"She flicked it on at the near post." What was the outcome?',
      options: [
        'She headed the ball powerfully into the net from the near post.',
        'She redirected the ball onwards with a glancing header — towards a back-post runner.',
        'She missed the ball entirely at the near post, letting it run through.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each set-piece instruction using precise tactical language.',
    items: [
      {
        sentence: '"Make a near-post run, then _____ the delivery — let it run through to the back-post runner."',
        options: ['dummy', 'flick on', 'peel off'],
        correctIndex: 0,
        explanation: '"Dummy" is correct — the player runs to the near post but deliberately does not play the ball, letting it run through to a teammate. "Flick on" = redirect the ball with a glancing header — the opposite of a dummy (you touch it). "Peel off" = break away from a screen position — this is a movement, not a ball action. A dummy at the near post is one of the most effective set-piece tricks: the goalkeeper and near-post defender both react to the runner, leaving the ball uncontested for the back-post runner.',
      },
      {
        sentence: '"The _____ from the centre-back prevented the opposition\'s striker from attacking the near post — creating the space we needed."',
        options: ['blocking run', 'in-swinger', 'second ball'],
        correctIndex: 0,
        explanation: '"Blocking run" is correct — a run made specifically to screen or impede a defender, not to receive the ball. By blocking the centre-back, the striker cannot get to the near post, creating space for the designated runner. "In-swinger" is a delivery type — not a run. "Second ball" is the ball after a clearance — not a specific movement type. Blocking runs are a crucial part of modern set-piece design — many goals are created by runners who do not even touch the ball.',
      },
      {
        sentence: '"An _____ to the near post is extremely effective against zonal defences — the ball moves towards the goal as it arrives."',
        options: ['in-swinger', 'out-swinger', 'flick-on'],
        correctIndex: 0,
        explanation: '"In-swinger" is correct — an in-swinging delivery curves towards the goal, making it extremely difficult for zonal defenders to clear because the ball is moving towards the net. An "out-swinger" curves away from goal — more suitable for far-post deliveries but less dangerous directly. "Flick-on" is a header, not a delivery type. Against zonal defences, an in-swinger to the near post is especially dangerous because it arrives in the zone between the near-post defender and the goalkeeper — neither can comfortably attack it.',
      },
      {
        sentence: '"_____ — do not start your run early. Wait for the delivery before making your move to the back post."',
        options: ['Hold your run', 'Attack the ball', 'Pick up'],
        correctIndex: 0,
        explanation: '"Hold your run" is correct — the instruction to delay starting a run until the right moment. This prevents the player from going too early (running offside or arriving before the ball) and keeps the defender guessing. "Attack the ball" = move aggressively towards the delivery — the opposite of holding, wrong here. "Pick up" = man-mark a specific opponent — a defensive instruction, not relevant to this attacking player\'s movement. "Hold your run" is one of the most commonly heard instructions in set-piece training.',
      },
      {
        sentence: '"They had two midfielders positioned outside the box as _____ players — any clearance was met with a first-time shot."',
        options: ['second ball', 'near post', 'blocking run'],
        correctIndex: 0,
        explanation: '"Second ball" is correct — a designated second-ball player is stationed outside the penalty area specifically to attack any clearance from the initial set piece. "Any clearance was met with a first-time shot" perfectly describes their role. "Near post" is a location, not a player role. "Blocking run" is a type of movement inside the box — not what these midfielders are doing (they are outside the box, not running to screen defenders).',
      },
      {
        sentence: 'Which sentence uses CORRECT B2 set-piece instructional language?',
        options: [
          '"Go to the front of the goal area and try to score when the corner comes in."',
          '"Attack the near post with pace, dummy the delivery, and peel off immediately to the back post — arrive as the second ball comes in from the flick-on."',
          '"Run to the near post and see if the ball comes to you — if not, try to get to the far post."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — uses precise B2 set-piece vocabulary in a logical sequence: "Attack the near post with pace" (imperative + specific target), "dummy the delivery" (specific action), "peel off immediately to the back post" (second movement), "arrive as the second ball comes in from the flick-on" (timing + expected outcome). A is vague and unprofessional for a set-piece instruction. C is directional but imprecise — "see if the ball comes to you" is passive, not the controlled instruction language needed for a designed set piece.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use set-piece vocabulary to give precise tactical responses.',
      items: [
        {
          customerLine: 'A coach asks: "Design a corner routine for a team with a tall striker and a fast winger."',
          options: [
            '"The tall striker goes to the near post and the fast winger goes to the far post."',
            '"Use the tall striker as the near-post threat — their primary role is to either flick on or attack the delivery directly. The fast winger makes a blocking run from outside the box, clearing out the near-post defender, then peels off at pace to the back post. The delivery should be an in-swinging corner, timed so the winger arrives just after the near-post flick-on. A second-ball midfielder covers the edge of the box for any clearance."',
            '"The corner taker swings the ball in and the striker jumps for it. If the striker wins it, goal. If not, the winger tries."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a complete, designed set-piece routine using precise vocabulary. Uses: "near-post threat" (tactical role), "flick on or attack the delivery" (two options), "blocking run" + "clearing out" (screen terminology), "peels off at pace" (timed movement), "in-swinging corner" (delivery type), "second-ball midfielder" (designated role). A is too simple — just positions, no design. C is passive and reactive — "tries" — not a designed routine. A B2 set-piece description should show design thinking, not just positioning.',
        },
        {
          customerLine: 'Explain the difference between an in-swinger and an out-swinger at a corner, and when you would use each.',
          options: [
            '"An in-swinger goes towards the goal and an out-swinger goes away from it. You use in-swingers when you want to score."',
            '"An in-swinging corner curves towards the goal — it moves away from the goalkeeper and towards the near post, making it very dangerous as a direct attempt or near-post flick-on. Use it when you have a near-post threat or want to target the zone between the keeper and the near post. An out-swinger curves away from goal, dropping towards the far post — better for teams with tall back-post runners who can attack a ball curling into them, and more useful when the zonal defences are overloaded at the near post."',
            '"In-swingers are better than out-swingers because they go towards the goal. Out-swingers are used from the right side."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — explains both delivery types with precise tactical reasoning. In-swinger: "curves towards the goal — moves away from the goalkeeper" (physical description), "dangerous as a direct attempt or near-post flick-on" (tactical use), "zone between the keeper and near post" (specific target). Out-swinger: "drops towards the far post" (movement), "tall back-post runners" (personnel match), "curling into them" (delivery characteristic), "zonal defences overloaded at near post" (tactical trigger). A is accurate but shallow. C is incorrect about handedness and too simplistic.',
        },
        {
          customerLine: 'A journalist asks: "Why do so many goals come from set pieces in modern football?"',
          options: [
            '"Because teams practise set pieces more and they are easier to score from than open play."',
            '"The increase in set-piece goals reflects how analytically clubs now approach them. Teams dedicate significant training time to designing routines — near-post flick-ons, blocking runs, late runners from deep — and hire specialist coaches. The defensive side has not kept pace: zonal marking remains vulnerable to well-timed blocking runs and dummies, and the randomness of second balls creates chaos that defenders struggle to organise against. At the highest level, a well-designed set piece is the football equivalent of a basketball play — precisely choreographed, with every player knowing their role."',
            '"Teams are better at corners and free kicks now because players are taller and stronger, so more headers go in."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a sophisticated analytical answer with tactical vocabulary and broader context. Uses: "designing routines — near-post flick-ons, blocking runs, late runners from deep" (vocabulary list as analysis), "defensive side has not kept pace" (comparative observation), "zonal marking vulnerable to blocking runs and dummies" (specific tactical insight), "randomness of second balls creates chaos" (second ball analysis), "basketball play — precisely choreographed" (analogy that shows conceptual depth). A is superficial. C reduces the phenomenon to physical attributes — misses the tactical evolution entirely.',
        },
        {
          customerLine: 'Describe how a "short corner" can be used to disrupt a zonal defensive setup.',
          options: [
            '"A short corner is when the ball is played short instead of into the box. It can confuse defenders."',
            '"A short corner pulls at least one zonal defender out of their assigned zone — the defender pressing the ball leaves a gap in the zonal structure. If the deep delivery then comes in from a wider angle, the zone they vacated becomes vulnerable. Alternatively, the short corner can be a dummy — the taker pretends to play short, drawing the defender out, then swings the ball in immediately to the vacated near-post zone. The key is exploiting the moment of defensive reorganisation — zonal systems take a fraction of a second to reset when disturbed."',
            '"A short corner creates a 2v1 on the edge of the box and allows the delivery to come from a different angle, which is harder to defend."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a complete tactical analysis of why the short corner works against zonal defences. "Pulls at least one zonal defender out of their assigned zone" (the mechanism), "zone they vacated becomes vulnerable" (consequence), "dummy — the taker pretends to play short... draws the defender out" (the dummy variation), "exploiting the moment of defensive reorganisation" (timing principle), "zonal systems take a fraction of a second to reset" (the vulnerability). A is accurate but surface-level. C is partially correct but lacks the depth and vocabulary that B provides.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three set-piece language or tactical mistakes in this analysis. Find them.',
      dialogue: [
        { speaker: 'Coach', text: 'Right — corner routine. The delivery will be an out-swinging ball to the near post.' },
        { speaker: 'Coach', text: 'Sofia, you make a near-post run and flick it on to Ronaldo at the far post — timing is everything.' },
        { speaker: 'Coach', text: 'Ronaldo, you make a blocking run to the far post first — screen the defender, then attack the ball early before the delivery comes in.' },
        { speaker: 'Coach', text: 'Marcus, you are the second-ball player — position yourself outside the box and attack any clearance first time.' },
        { speaker: 'Coach', text: 'Defensively, we use full man-marking — each player picks up one opponent and stays with them throughout the routine.' },
        { speaker: 'Coach', text: 'The risk with man-marking is blocking runs — if they set screens, our markers must fight through. Remember: attack the ball, not the man.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'an out-swinging ball to the near post',
          correction: 'an in-swinging ball to the near post',
          explanation: 'An out-swinging corner curves AWAY from the goal — it travels towards the far post, not the near post. Delivering an out-swinger to the near post is tactically contradictory: the ball would be curving away from the near post and towards the far post. An in-swinging corner is the correct delivery for a near-post routine — it curves towards the goal and towards the near post, making it dangerous for the goalkeeper and near-post defenders. "Out-swinger to the near post" = tactical error.',
        },
        {
          lineIndex: 2,
          incorrectText: 'attack the ball early before the delivery comes in',
          correction: 'hold your run, then peel off and attack the ball as the delivery comes in',
          explanation: 'The instruction says to "attack the ball early before the delivery comes in" — this is wrong. If you attack the ball before it is delivered, you arrive too early, run offside, or telegraph the routine. The correct set-piece instruction is to "hold your run" and time the movement to arrive as the ball comes in — not before. A blocking run should also screen the defender first (which is mentioned) and then peel off, not attack the ball early.',
        },
        {
          lineIndex: 4,
          incorrectText: 'full man-marking — each player picks up one opponent and stays with them throughout',
          correction: 'hybrid marking — a combination of zonal and man-marking, with specific post players in zones',
          explanation: 'Pure man-marking at set pieces is actually very vulnerable to blocking runs — which the coach correctly identifies in the next line. But having just said they use "full man-marking," recommending awareness of blocking runs is contradictory: if you are man-marking, you should stay with your runner through screens, not "attack the ball." Most modern elite teams use hybrid marking specifically to counter blocking runs. The tactical advice contradicts the system described. "Full man-marking" against a team that uses blocking runs and dummies is the wrong system choice.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each set-piece analysis using precise tactical vocabulary.',
      items: [
        {
          customerLine: 'Design a free-kick routine from 25 yards, central, for a team with a strong shooter and two fast runners.',
          salespersonStart: 'From 25 yards, central, this is an ideal position for a designed routine —',
          suggestedCompletion: 'From 25 yards, central, this is an ideal position for a designed routine — the goalkeeper cannot dominate the delivery zone and the wall provides a physical reference point. The primary option is the direct shot — curled over or around the wall into the top corner. The shooters stance should deceive the wall about whether he will go over or under. The secondary option: one runner peels from the wall and makes a near-post run as a dummy, drawing a defender. The shooter then rolls the ball sideways to a second runner who arrives late from behind the wall. Third option: the dummy shot — take one step and stop, drawing the goalkeeper to one side before delivering into the far corner. The delivery decision should be made based on the wall\'s positioning and the goalkeeper\'s starting position.',
        },
        {
          customerLine: 'Explain why blocking runs have become so important in modern set-piece design.',
          salespersonStart: 'Blocking runs have transformed set-piece design in elite football —',
          suggestedCompletion: 'Blocking runs have transformed set-piece design in elite football — and the reason is simple: they exploit the one vulnerability that all marking systems share. Whether a team uses zonal marking or man-marking, a well-executed blocking run creates either a free runner or a defensive foul. In zonal systems, a blocker occupying the near-post zone forces the zonal defender to either track the blocker (leaving the zone) or stay in the zone (allowing the real runner to attack freely). In man-marking systems, blockers set screens that force defenders to fight through contact — which either delays them or draws a foul. The key principle is that the blocker does not need the ball to be effective — they change the defensive structure simply by existing in the right place at the right time.',
        },
        {
          customerLine: 'Analyse the tactical thinking behind a team using a "dummy" at a corner.',
          salespersonStart: 'The dummy at a corner is one of the most psychologically complex set-piece actions —',
          suggestedCompletion: 'The dummy at a corner is one of the most psychologically complex set-piece actions — it requires a player to run with full commitment towards the delivery but then, at the last moment, deliberately let the ball pass. The power of the dummy is in the deception: the goalkeeper reads the near-post runner and adjusts accordingly — stepping forward, expecting contact. The zonal near-post defender braces for the flick-on header. Both react to the runner, not the ball. When the dummy is executed correctly, the ball continues through the space to a back-post runner who arrives completely unmarked. The risk is significant — if the second runner misses their cue, the ball runs harmlessly past everyone. That is why the dummy must be a designed, practised movement with a clear signal — not improvised.',
        },
        {
          customerLine: 'Compare zonal and man-marking set-piece defence — which is better and why?',
          salespersonStart: 'The zonal versus man-marking debate at set pieces has no definitive answer —',
          suggestedCompletion: 'The zonal versus man-marking debate at set pieces has no definitive answer — both have distinct advantages and vulnerabilities. Zonal marking provides structural integrity: defenders know exactly where their zone is, they are always facing the ball, and they can attack deliveries rather than tracking opponents. Its weakness is the timing run — attackers can time their entry into a zone to arrive just as the ball does, between two zones, catching the zonal defenders in no-man\'s land. Man-marking is tighter on individual threats and follows the attacker wherever they run — blocking runs are more difficult to execute because the defender stays with their runner. Its weakness is that blocking runs can force physical contact and foul situations, and screened defenders arrive at the ball from a worse angle. Most elite teams use a hybrid: zonal post protection for the goalkeeper\'s near-post zone and far-post zone, with man-markers on the most dangerous attackers. The ideal system depends on your personnel and the specific threats you are facing.',
        },
      ],
    },
  },
};
