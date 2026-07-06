import { Lesson } from '@/types/lesson';

export const theHalfSpace: Lesson = {
  slug: 'the-half-space',
  title: 'The Half-Space',
  subtitle: 'Modern positional play terms — pockets of space, channels, and zones',
  level: 'B1-B2',
  description: 'Modern tactical analysis has created a precise vocabulary for describing zones of the pitch. In this lesson you will master the language of positional play — half-spaces, pockets, channels, and the principles behind how elite teams exploit them.',
  heroImage: '/images/the-half-space-hero.png',

  warmUp: {
    questions: [
      'When you watch football, do you notice certain areas of the pitch where the most dangerous attacks come from? Where are they?',
      'What do you think makes the space between the centre-backs and full-backs so dangerous in modern football?',
      'Have you heard tactical analysts or commentators use words like "half-space" or "channel"? What did you think they meant?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Spatial prepositions and location language in tactical analysis',
    description: 'Tactical analysis at B2 level requires precise spatial language — describing exactly where something happens on a pitch. English uses a rich system of prepositions and location phrases that combine with tactical nouns to create very specific meanings.',
    positivePattern: 'IN: "operating in the half-space" / BETWEEN: "between the lines," "between the centre-back and full-back" / BEHIND: "in behind the defensive line" / ACROSS: "switching across from one channel to the other" / THROUGH: "playing through the thirds" / INTO: "running into the channel"',
    positiveExample: '"She operates in the left half-space, finding pockets between the lines. When the defensive line drops, she drives into the channel behind the full-back. The ball is switched across from right to left to find her in that zone."',
    negativePattern: 'Do NOT use "at" for zones — say "in the half-space," not "at the half-space." Do NOT use "on" for zones — say "in the channel," not "on the channel."',
    negativeExample: 'WRONG: "He plays at the half-space." → RIGHT: "He plays in the half-space." WRONG: "The ball is played on the channel." → RIGHT: "The ball is played into the channel."',
    positiveExamples: [
      { sentence: '"Between the lines" = the space between the defensive and midfield lines of the opposition.', note: '("Between" requires two reference points — always "between X and Y")' },
      { sentence: '"Into the channel" = the ball or player moves towards the wide area between the full-back and centre-back.', note: '("Into" = movement towards — use for balls played or runs made)' },
      { sentence: '"In the half-space" = the player is positioned in that zone at this moment.', note: '("In" = static location — the player is there)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "The number ten operates at between the lines."', note: 'CORRECT: "The number ten operates between the lines."' },
      { sentence: 'WRONG: "He runs on the channel behind the full-back."', note: 'CORRECT: "He runs into the channel behind the full-back."' },
    ],
  },

  vocabulary: [
    {
      word: 'HALF-SPACE',
      partOfSpeech: 'noun',
      definition: 'The zone between the central area and the wide area on each side of the pitch — roughly where the inside forward or attacking midfielder operates. One of the most important zones in modern positional play.',
      example: '"Their number ten occupied the left half-space brilliantly — between the right centre-back and the right full-back, causing constant confusion."',
      imageSlug: '/images/the-half-space-half-space.png',
    },
    {
      word: 'CHANNEL',
      partOfSpeech: 'noun',
      definition: 'The wide corridor between the full-back and the centre-back — a target area for runners going in behind the defensive line.',
      example: '"The striker\'s run into the channel between the centre-back and the right back created the space for the cross."',
      imageSlug: '/images/the-half-space-channel.png',
    },
    {
      word: 'POCKET OF SPACE',
      partOfSpeech: 'phrase',
      definition: 'A small gap or area of space that opens up temporarily between defenders — a moment of opportunity.',
      example: '"He found a pocket of space between the lines, turned, and played the through ball before the defence could close him down."',
      imageSlug: '/images/pocket-of-space.png',
    },
    {
      word: 'BETWEEN THE LINES',
      partOfSpeech: 'phrase',
      definition: 'The space between the opposition\'s midfield line and defensive line — where a number ten or attacking midfielder can receive and turn.',
      example: '"Operating between the lines is her greatest strength — she collects the ball in that zone before defenders can engage."',
      imageSlug: '/images/the-half-space-between-the-lines.png',
    },
    {
      word: 'THIRD',
      partOfSpeech: 'noun',
      definition: 'The pitch is divided into three horizontal zones: the defensive third (near your goal), middle third, and attacking third (near the opponent\'s goal).',
      example: '"They dominate the middle third through possession but struggle to create in the attacking third."',
      imageSlug: '/images/thirds.png',
    },
    {
      word: 'POSITIONAL PLAY',
      partOfSpeech: 'phrase',
      definition: 'A tactical system built around occupying specific positions and zones — creating superiorities through strategic positioning rather than individual brilliance.',
      example: '"Their positional play system requires every player to know their exact position at all times — creating numerical and positional superiority in every phase."',
      imageSlug: '/images/positional-play.png',
    },
    {
      word: 'UNDERLAP',
      partOfSpeech: 'noun / verb',
      definition: 'When a full-back runs inside a winger — through the half-space — rather than outside (which is an overlap). Creates a late runner from depth into the half-space.',
      example: '"The right back\'s underlap into the half-space completely confused the left back — he could not track both the winger and the underlapping full-back."',
      imageSlug: '/images/the-half-space-underlap.png',
    },
    {
      word: 'SPATIAL AWARENESS',
      partOfSpeech: 'phrase',
      definition: 'A player\'s ability to understand and exploit space on a pitch — reading where gaps are and moving into them before the ball arrives.',
      example: '"Her spatial awareness is exceptional — she always finds the pocket of space just before the ball arrives, as if she knew it was there."',
      imageSlug: '/images/spatial-awareness.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'DROP INTO',
      definition: 'To move into a deeper position — often into the space between the lines or into the half-space from a forward position.',
      example: '"The number nine dropped into the half-space to collect, leaving the centre-backs unsure whether to follow."',
      imageSlug: '/images/the-half-space-drop-into.png',
    },
    {
      phrase: 'DRIFT INTO',
      definition: 'To move gradually and subtly into a zone — often used for how inside forwards or number tens occupy the half-space.',
      example: '"She drifted into the right half-space as the full-back pushed forward — finding the pocket before anyone noticed."',
      imageSlug: '/images/drift-into.png',
    },
    {
      phrase: 'EXPLOIT',
      definition: 'To use a weakness or space to your advantage — to take advantage of a gap in the opposition\'s shape.',
      example: '"They exploited the channel behind the right back repeatedly — five runs in behind in the first 30 minutes."',
      imageSlug: '/images/the-half-space-exploit.png',
    },
    {
      phrase: 'STRETCH',
      definition: 'To widen a defensive shape by playing wide — forcing the defensive block to become less compact.',
      example: '"By stretching the defensive shape wide, they opened up the half-spaces in the central areas."',
      imageSlug: '/images/the-half-space-stretch.png',
    },
    {
      phrase: 'PULL OUT',
      definition: 'To draw a defender out of their position — creating space behind them for a runner.',
      example: '"The striker\'s movement pulled the centre-back out of position — creating the channel for the winger to run into."',
      imageSlug: '/images/pull-out.png',
    },
    {
      phrase: 'LINK UP',
      definition: 'To combine with a teammate through short passes or movement — often used in tight spaces between the lines.',
      example: '"They linked up brilliantly in the half-space — four one-twos before the final ball was played."',
      imageSlug: '/images/link-up.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key positional play concepts used in modern tactical analysis.',
    items: [
      {
        cue: 'The five zones across the pitch',
        meaning: 'Modern positional play divides the pitch vertically into five zones — left wide, left half-space, centre, right half-space, right wide.',
        usage: 'The five-zone model is foundational in positional play analysis. "Zone 1" (left wide), "Zone 2" (left half-space), "Zone 3" (centre), "Zone 4" (right half-space), "Zone 5" (right wide). The half-spaces (Zones 2 and 4) are considered the most dangerous attacking zones — they give players the angle to shoot, cross, or play through. "Their 4-3-3 was designed around occupying all five zones simultaneously — true width in Zones 1 and 5, the inside forwards in Zones 2 and 4, and the striker in Zone 3."',
        imageSlug: 'otp-five-zones',
      },
      {
        cue: 'The number ten role and the half-space',
        meaning: 'The traditional number ten — the attacking midfielder — is the player most associated with operating in the half-spaces.',
        usage: 'The number ten\'s job in positional play is to find and occupy the half-space between the defensive and midfield lines — collecting the ball, turning, and creating. "She is a classic number ten — she gravitates to the left half-space, between the lines, finding pockets that most players cannot see. Her spatial awareness is extraordinary." In modern football, inside forwards (inverted wingers) have largely taken on this half-space role from wide positions.',
        imageSlug: 'otp-number-ten-halfspace',
      },
      {
        cue: '"Playing through the thirds"',
        meaning: 'Progressing the ball from one zone of the pitch to the next — building up through the defensive, middle, and attacking thirds.',
        usage: '"Playing through the thirds" = a systematic build-up approach. The team does not play long immediately — they build possession through each zone. "They are excellent at playing through the thirds — patient build-up from the goalkeeper through the midfield to the attacking line. The key is the pivot in the middle third: if he is pressed, the ball goes back and around." Being able to "break lines" (play a pass through or between defensive units) is the goal — a line-breaking pass is one that bypasses one of the opposition\'s defensive lines.',
        imageSlug: 'otp-playing-through-thirds',
      },
      {
        cue: 'The "false nine" and pocket occupation',
        meaning: 'A striker who drops deep into pockets of space between the lines — not staying on the last defender as a traditional nine would.',
        usage: '"False nine" = a striker who abandons the central attacking position and drops into midfield pockets. This confuses centre-backs: follow them and leave space in behind, or stay and allow the false nine to operate freely between the lines. Guardiola used this famously. "The false nine dropped into the half-space pocket, pulling both centre-backs with them — the wide forwards exploited the space in behind." The false nine is the ultimate positional play concept because it disrupts opponent structures through intelligent positioning.',
        imageSlug: 'otp-false-nine',
      },
      {
        cue: 'Positional superiority',
        meaning: 'Not just having more players than the opponent in a zone, but having players in better positions — closer to goal, facing forward, with better angles.',
        usage: '"Positional superiority" goes beyond numerical superiority. It means your players are better placed — not just more numerous. "They achieved positional superiority in the attacking third without numerical overloads — their half-space occupation meant every player who received the ball was facing forward, with defenders scrambling to recover." Rondo and possession exercises in training are designed to develop positional superiority — the habit of occupying the best positions instinctively.',
        imageSlug: 'otp-positional-superiority',
      },
      {
        cue: 'Line-breaking passes',
        meaning: 'A pass that goes through or past one of the opposition\'s defensive lines — bypassing a unit of defenders with a single ball.',
        usage: '"Line-breaking pass" = a pass that skips past the midfield line or the defensive line — immediately putting the receiver in a dangerous position. "The key was the line-breaking pass from the pivot — a ball played directly into the half-space behind the midfield line, with the number ten already in that pocket. Three defenders were bypassed with one ball." Line-breaking passes are the goal of positional play — all the positioning is designed to create the moment when a line can be broken.',
        imageSlug: 'otp-line-breaking-pass',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'The [[half-space:the zone between the central area and the wide area]] — the most important zone in modern football. Why? Because from the [[half-space:same]], you can shoot, cross, or play through. From wide, you can only cross. From centre, you have no angle. Sofia — where do you want the ball?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'In the [[half-space:same]], every time. I [[drift into:to move gradually and subtly into a zone]] the left half-space from my wide starting position — the full-back cannot follow me without leaving space in the [[channel:the wide corridor between the full-back and the centre-back]]. I find the [[pocket of space:a small gap between defenders]] [[between the lines:the space between the opposition\'s midfield and defensive lines]], receive, and turn before the centre-back can close me down.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. And Ronaldo — what does the number nine do when Sofia is [[operating in the half-space]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I [[pull out:to draw a defender out of their position]] the centre-back — either run in behind into the [[channel:same]] to keep him honest, or [[drop into:to move into a deeper position]] the [[third:the pitch is divided into defensive, middle, and attacking thirds]] and [[link up:to combine with a teammate]] with Sofia in the half-space. If I stay central, the centre-back stays. If I move, space opens up for Sofia to exploit.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'The [[underlap:when a full-back runs inside a winger, through the half-space]] from the full-back also works here — the right back joins Sofia in the half-space from depth, arriving late as a third option. Three players in one zone. One of them will be free. That is [[positional play:a system built around occupying specific positions to create superiorities]] — creating [[numerical superiority]] through intelligent occupation of the [[half-space:same]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And to create all this, the right side must [[stretch:to widen a defensive shape by playing wide]] the defence first — [[pulling out:same]] the left back wide. That forces the defensive block to expand, opening up the half-space on the left. Everything is connected in [[positional play:same]] — every movement creates a reaction somewhere else on the pitch.',
    },
  ],

  matchingExercise: [
    { word: 'HALF-SPACE', definition: 'The zone between the central area and wide area on each side of the pitch' },
    { word: 'CHANNEL', definition: 'The wide corridor between the full-back and the centre-back' },
    { word: 'POCKET OF SPACE', definition: 'A small gap between defenders that opens up temporarily' },
    { word: 'BETWEEN THE LINES', definition: 'The space between the opposition\'s midfield and defensive lines' },
    { word: 'POSITIONAL PLAY', definition: 'A system built around occupying specific zones to create superiorities' },
    { word: 'UNDERLAP', definition: 'A full-back running inside the winger — through the half-space' },
    { word: 'SPATIAL AWARENESS', definition: 'A player\'s ability to read and exploit space before the ball arrives' },
    { word: 'LINE-BREAKING PASS', definition: 'A pass that bypasses one of the opposition\'s defensive units' },
  ],

  fillBlankExercise: [
    { before: 'She drifted into the left', answer: 'half-space', after: '— finding the pocket between the right centre-back and the right full-back.' },
    { before: 'The striker\'s run into the', answer: 'channel', after: 'behind the right back created the space for the cross.' },
    { before: 'He found a', answer: 'pocket of space', after: 'between the lines, turned, and played the through ball in one movement.' },
    { before: 'Operating', answer: 'between the lines', after: 'is her greatest strength — she collects before the defence can engage.' },
    { before: 'The right back\'s', answer: 'underlap', after: 'into the half-space completely confused the opposing left back.' },
    { before: 'By playing wide, they', answer: 'stretched', after: 'the defensive shape and opened up space in the central half-spaces.' },
    { before: 'Their', answer: 'positional play', after: 'system requires every player to know their exact zone at all times.' },
    { before: 'The pivot played a', answer: 'line-breaking pass', after: 'directly into the half-space — bypassing the entire midfield line.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Where is the "half-space" on a football pitch?',
      options: [
        'The central zone — directly in front of both goals.',
        'The zone between the central area and the wide area on each side.',
        'The area just outside the penalty box — the shooting zone.',
      ],
      correctIndex: 1,
    },
    {
      question: '"She drifted into the half-space." What does "drift" suggest about her movement?',
      options: [
        'She ran at full pace directly towards the half-space.',
        'She moved gradually and subtly into the zone — almost unnoticed.',
        'She was pushed into the half-space by a defensive marking error.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They exploited the channel behind the right back." Where is "the channel"?',
      options: [
        'The central zone between the two centre-backs.',
        'The wide corridor between the full-back and the centre-back.',
        'The area behind the goalkeeper — the space between the posts.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "false nine"?',
      options: [
        'A striker who wears the number nine shirt but plays as a winger.',
        'A striker who drops deep into pockets between the lines instead of staying on the last defender.',
        'A second striker who plays slightly behind the main number nine.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Between the lines." Which two lines does this refer to?',
      options: [
        'The two touchlines on either side of the pitch.',
        'The opposition\'s midfield line and their defensive line.',
        'The lines of the penalty area marking the shooting zone.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Their striker\'s movement pulled the centre-back out of position." What is the effect?',
      options: [
        'The striker drew a foul from the centre-back.',
        'The centre-back followed the striker, creating space for another runner.',
        'The striker ran offside and the line was broken.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "line-breaking pass"?',
      options: [
        'A long pass that travels the full length of the pitch.',
        'A pass that bypasses one of the opposition\'s defensive lines — skipping past a unit of defenders.',
        'A pass played along the touchline from one end to the other.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the main tactical advantage of the half-space over a wide position?',
      options: [
        'There is more space in the half-space because defenders avoid it.',
        'From the half-space you can shoot, cross, or play through — more options than from wide.',
        'The half-space is closer to the goalkeeper, making shots easier.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each tactical sentence with the correct spatial or positional play term.',
    items: [
      {
        sentence: '"She receives the ball _____ the lines — between the midfield and defensive blocks — and turns before anyone can close her."',
        options: ['between', 'in', 'across'],
        correctIndex: 0,
        explanation: '"Between" is correct — "between the lines" is the fixed tactical phrase for the space between the opposition\'s midfield and defensive units. "Between" requires two reference points and places the player in the zone between them. "In" would work for "in the half-space" or "in the pocket" but not for the specific compound noun "the lines." "Across" indicates horizontal movement — wrong for describing a static position.',
      },
      {
        sentence: '"The full-back made an _____ run — not overlapping outside the winger, but running inside through the half-space."',
        options: ['underlap', 'overlap', 'overload'],
        correctIndex: 0,
        explanation: '"Underlap" is correct — specifically the movement of a full-back running inside the winger through the half-space (as opposed to overlapping outside). "Overlap" = running outside the winger along the touchline. "Overload" = creating numerical superiority in a zone — a tactical concept, not a specific run type. The underlap is increasingly common in positional play as full-backs become more involved in attacking combinations through the half-space.',
      },
      {
        sentence: '"The striker dropped _____ the half-space pocket — pulling the centre-back with them and creating the channel in behind."',
        options: ['into', 'in', 'at'],
        correctIndex: 0,
        explanation: '"Into" is correct — describes movement towards a zone (the player moved to the half-space pocket, they are arriving there). "In" describes being in a location already ("she is in the half-space"). "At" is incorrect for zones — never "at the half-space." The key distinction: "into" = movement, arrival; "in" = already there, static location. "Dropped into the half-space pocket" = the striker moved from their starting position towards that zone.',
      },
      {
        sentence: '"Playing wide to _____ the defensive shape is the first step — opening up the central half-spaces for the number ten."',
        options: ['stretch', 'exploit', 'pull out'],
        correctIndex: 0,
        explanation: '"Stretch" is correct — using wide players to force the defensive block to expand horizontally, creating space in the central and half-space zones. "Exploit" = to use a weakness — comes after the space has been created, not the action that creates it. "Pull out" = to draw a defender out of position — a more specific movement, not the broad concept of widening the shape. "Stretch the defensive shape" is the standard tactical phrase for forcing width.',
      },
      {
        sentence: '"Their _____ system required each player to occupy a specific zone — if one player moved, another had to fill the space immediately."',
        options: ['positional play', 'half-space', 'channel'],
        correctIndex: 0,
        explanation: '"Positional play" is correct — a tactical system built around occupying specific positions and zones. "If one player moved, another had to fill the space immediately" is the defining principle of positional play: every space must be occupied, every movement creates a movement elsewhere. "Half-space" is one zone within positional play — not the whole system. "Channel" is a specific zone — not a system.',
      },
      {
        sentence: 'Which sentence uses CORRECT B2 spatial language for tactical analysis?',
        options: [
          '"The number ten operates at the half-space and in between the lines."',
          '"She drifted into the left half-space, finding a pocket between the lines before the defensive block could reorganise."',
          '"He plays on the channel and uses the pocket of spaces to find passes."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — uses all spatial prepositions correctly: "drifted into the left half-space" (movement into a zone = "into"), "finding a pocket between the lines" ("between" with two reference points), "before the defensive block could reorganise" (time reference). A has an error: "at the half-space" — should be "in the half-space." C has "on the channel" (should be "in the channel") and "spaces" (should be singular "pocket of space"). Spatial prepositions in tactical English are fixed: in the half-space, in the channel, between the lines, into the pocket.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use half-space and positional play vocabulary to give precise analytical responses.',
      items: [
        {
          customerLine: 'Explain why the half-space is considered the most dangerous attacking zone in modern football.',
          options: [
            '"The half-space is dangerous because it is between the wide and central areas, giving the player more options."',
            '"The half-space is the most dangerous attacking zone because it combines the advantages of both central and wide positions. A player operating in the half-space can shoot on goal with a diagonal angle, deliver a cross into the box, or play a line-breaking pass between the lines. Wide players can only cross; central players have limited angle. The half-space also creates a positional dilemma for defenders: the full-back cannot afford to follow the attacker into central areas, and the centre-back cannot push wide without leaving the central zone exposed."',
            '"The half-space is dangerous because attackers can run into it from wide positions and find pockets of space to receive the ball."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analytical depth, precise vocabulary, and explains the tactical dilemma created. "Combines the advantages of central and wide positions" (clear logical framework), "shoot on goal with diagonal angle, deliver a cross, play a line-breaking pass" (three specific options), "positional dilemma for defenders" (the defensive problem created), "full-back cannot follow... centre-back cannot push wide" (the dilemma articulated). A is partially correct but shallow. C is accurate but lacks the depth and vocabulary of B.',
        },
        {
          customerLine: 'Describe how inside forwards use the half-space differently from traditional wingers.',
          options: [
            '"Inside forwards play in the half-space while traditional wingers stay on the touchline — they cut inside and shoot."',
            '"Inside forwards and traditional wingers represent fundamentally different positional philosophies. A traditional winger hugs the touchline in Zone 1 or Zone 5 — stretching the defensive shape, delivering crosses from wide positions. An inside forward inverts from a wide starting position into the half-space, operating between the lines rather than on the touchline. This inversion creates the underlap opportunity for the full-back and places the inside forward in the zone with the most options: shooting angle, through-ball angle, or combination play. The half-space occupation also draws defenders out of position more effectively than wide play."',
            '"Inside forwards cut inside into the half-space instead of staying wide. This makes them more dangerous because they can shoot on their stronger foot."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a complete comparative analysis using precise vocabulary. "Zone 1 or Zone 5... half-space" (five-zone reference), "stretching the defensive shape" (traditional winger function), "inverts from a wide starting position" (inverted winger movement), "between the lines rather than on the touchline" (position comparison), "underlap opportunity for the full-back" (tactical consequence), "zone with the most options" (why the half-space matters). A is a basic summary. C captures one benefit (shooting on strong foot) but misses the positional depth entirely.',
        },
        {
          customerLine: 'How does a "line-breaking pass" unlock a defensive block?',
          options: [
            '"A line-breaking pass goes through the opposition\'s defensive line — bypassing their midfield or defence with one pass."',
            '"A line-breaking pass works by bypassing one of the opposition\'s defensive units entirely — placing a receiver beyond that unit before they can reorganise. When a team sits in a mid-block, their strength is that every line of passes has to go through players. A line-breaking pass skips a line entirely — the midfield block is made irrelevant in one moment. The receiver is now between the midfield and defensive lines with time and space. The defensive block has to split or reorganise, creating the pockets and channels that other attackers can exploit."',
            '"A line-breaking pass is a through ball that goes directly to the striker — bypassing all the defenders at once."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — explains the mechanism, the context, and the consequence. "Bypassing one of the opposition\'s defensive units entirely" (precise definition), "every line of passes has to go through players" (why mid-blocks are hard to play through), "skips a line entirely — the midfield block is made irrelevant" (the mechanism), "between the midfield and defensive lines with time and space" (the consequence), "the pockets and channels that other attackers can exploit" (secondary effects). A is a reasonable definition but lacks analytical depth. C confuses line-breaking pass with a through ball — not the same thing.',
        },
        {
          customerLine: 'Analyse how a false nine creates space for others through positional play principles.',
          options: [
            '"A false nine drops deep to confuse the defenders and creates space for the wide players to run into behind the defence."',
            '"The false nine exploits the fundamental dilemma that central defenders face: follow or stay? If the centre-backs follow the false nine into midfield, they leave space in behind for the wide forwards or the late runners. If they stay and do not follow, the false nine operates freely between the lines with time on the ball — a huge advantage. In positional play terms, the false nine occupies Zone 3 in the middle third rather than the attacking third, which pulls both centre-backs out of their optimal positions and creates a spatial superiority for the team in two zones simultaneously: between the lines and in the channels behind the defence."',
            '"The false nine pulls defenders out of position — the wide forwards use the space behind them to run in behind and score."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analytically precise and uses positional play vocabulary throughout. "Follow or stay — the fundamental dilemma" (the tactical problem articulated), "leave space in behind for wide forwards or late runners" (consequence of following), "operates freely between the lines with time" (consequence of not following), "Zone 3 in the middle third rather than the attacking third" (positional play zone reference), "spatial superiority in two zones simultaneously" (positional play principle). A and C are accurate but shallow — B is the only answer that demonstrates B2 tactical analysis depth.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three spatial language or tactical mistakes in this analysis. Find them.',
      dialogue: [
        { speaker: 'Analyst', text: 'City\'s attacking system is built around half-space occupation — specifically in the zones between the central and wide areas.' },
        { speaker: 'Analyst', text: 'Their inside forwards drift at the half-space from wide starting positions — inverting to find the pocket between the lines.' },
        { speaker: 'Analyst', text: 'The full-back provides the underlap run — moving outside the winger to create an overload on the touchline.' },
        { speaker: 'Analyst', text: 'From the half-space, the inside forward can shoot, cross, or play a line-breaking pass into the channel behind the defensive line.' },
        { speaker: 'Analyst', text: 'The false nine drops into the half-space pocket in the middle third — pulling the centre-backs across and creating space in behind.' },
        { speaker: 'Analyst', text: 'This positional superiority in Zone 2 and Zone 4 makes them very difficult to defend against — the block is stretched both horizontally and in the thirds.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'drift at the half-space',
          correction: 'drift into the half-space',
          explanation: '"Drift at the half-space" is wrong — the preposition "at" is incorrect for zones. You drift "into" a zone (movement arriving at a destination) or you operate "in" a zone (static location). "At" is used for points (at the near post, at Wembley) not for zones or areas. "Drift into the half-space" = the inside forward gradually moves into that zone from their starting position. This is one of the most common spatial preposition errors: never "at the half-space," "at the channel," or "at the pocket."',
        },
        {
          lineIndex: 2,
          incorrectText: 'moving outside the winger to create an overload on the touchline',
          correction: 'moving inside the winger — through the half-space — creating an underlap rather than an overlap',
          explanation: '"Underlap" = the full-back runs INSIDE the winger, through the half-space. "Overlap" = the full-back runs OUTSIDE the winger, along the touchline. The sentence says the full-back provides "the underlap run" but then describes an overlap movement ("moving outside the winger... on the touchline"). This is a direct contradiction. An underlap by definition goes inside, through the half-space — that is the entire point of the underlap in positional play. "Creating an overload on the touchline" describes an overlap, not an underlap.',
        },
        {
          lineIndex: 4,
          incorrectText: 'pulling the centre-backs across',
          correction: 'pulling the centre-backs forward / out of position',
          explanation: 'When a false nine drops into the half-space in the middle third, they pull centre-backs "forward" (out of their defensive line, towards the middle third) or "out of position" — not "across." "Across" suggests horizontal movement — moving sideways. Centre-backs follow a dropping false nine by moving forward (vertically) to close them down in midfield. The confusion of direction is a spatial language error. "Pulling the centre-backs forward" = the centre-backs step up to track the deep-dropping striker, which creates the space in behind for wide forwards.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each tactical analysis using precise half-space and positional play vocabulary.',
      items: [
        {
          customerLine: 'Explain how wide players "inverted" into inside forwards changed modern attacking football.',
          salespersonStart: 'The shift from traditional wide players to inverted inside forwards fundamentally changed attacking football —',
          suggestedCompletion: 'The shift from traditional wide players to inverted inside forwards fundamentally changed attacking football — and the half-space is at the centre of that change. Traditional wingers hugged the touchline, stretched defences, and delivered crosses from wide positions. Their value was width. Inverted inside forwards — right-footed on the left, left-footed on the right — drift into the half-space, operating between the lines. Their value is half-space occupation and the dilemma it creates: every central defender and every full-back must simultaneously manage a threat in their immediate zone and the zones around it. This occupation of half-spaces also unlocks the underlap from full-backs, creating three-player combinations in tight zones. The tactical consequence has been enormous: defences that once only needed to manage wide threats now face central threats arriving from wide starting positions.',
        },
        {
          customerLine: 'Describe how a team can use a "switch of play" to create half-space opportunities.',
          salespersonStart: 'A switch of play is one of the most effective tools for creating half-space opportunities —',
          suggestedCompletion: 'A switch of play is one of the most effective tools for creating half-space opportunities — because defensive blocks shift horizontally to track the ball, and a quick switch exploits the moment before they can reorganise. When the ball is on the right side, the entire defensive block shifts across — their left half-space becomes compressed. A switch of play to the left winger creates immediate space in the left half-space because the right-sided defenders have shifted across and cannot instantly recover their original positions. If the left inside forward drifts into that half-space at the exact moment of the switch, they receive with time — a pocket of space that exists for only a few seconds before the block rebalances. The key is the speed of the switch and the intelligence of the half-space runner to be already drifting into position before the ball arrives.',
        },
        {
          customerLine: 'Analyse how positional play creates "positional superiority" rather than just numerical superiority.',
          salespersonStart: 'The distinction between numerical and positional superiority is central to understanding positional play —',
          suggestedCompletion: 'The distinction between numerical and positional superiority is central to understanding positional play — and it is what separates it from simpler overload-based approaches. Numerical superiority means having more players in a zone: 3v2, 2v1. This can be created by simply flooding an area with players. Positional superiority is more refined: it means every player who receives the ball is in an optimal position — facing forward, with options ahead, in a zone where the defender cannot engage without creating worse problems elsewhere. A player who receives in the half-space between the lines has positional superiority even in a 1v1 — because they are facing goal and the defender is scrambling to recover. The goal of positional play training is to create positional superiority instinctively: players move to the best positions before the ball arrives, not because they were told to, but because they have internalised the spatial principles of the system.',
        },
        {
          customerLine: 'How does a team "break lines" systematically — not just with a single pass?',
          salespersonStart: 'Systematic line-breaking is the highest expression of positional play —',
          suggestedCompletion: 'Systematic line-breaking is the highest expression of positional play — it is not a single magic pass but a sequence of positioning and movement designed to create the conditions where a line-breaking pass is possible. The process begins with half-space occupation: players are already positioned between or behind the opposition\'s lines, so the pass already has a receiver in the right place. The ball circulation around the outside of the block forces the defensive shape to shift and reorganise — creating the momentary gap where a line can be broken. The pivot or double pivot in the middle third is often the key: they circulate the ball, draw pressure, and identify the exact moment when a line-breaking pass into the half-space is on. At the highest level, it is not the pass that is the genius — it is the five or six seconds of patient possession that created the window.',
        },
      ],
    },
  },
};
