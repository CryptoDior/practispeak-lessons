import { Lesson } from '@/types/lesson';

export const shapeAndStructure: Lesson = {
  slug: 'shape-and-structure',
  title: 'Shape and Structure',
  subtitle: 'Hybrid systems, mid-block, high line, back three vs back four',
  level: 'B1-B2',
  description: 'Modern football is built on tactical systems and formations. In this lesson you will learn the advanced vocabulary of shapes, defensive blocks, and the debates that coaches and analysts use when discussing how teams are set up.',
  heroImage: '/images/shape-and-structure-hero.png',

  warmUp: {
    questions: [
      'What formation do you think is the most effective in modern football — and why?',
      'Have you ever watched a match and noticed that one team\'s shape completely dominated the other? What happened?',
      'What do you think the difference is between a team\'s "formation" and their "system"?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Noun phrases and technical compound nouns in tactical language',
    description: 'Tactical football English is built on compound nouns and noun phrases — combinations of words that create precise technical meanings. Understanding how these are formed helps you read, understand, and produce analytical football language at B2 level.',
    positivePattern: 'ADJECTIVE + NOUN: "high line," "compact shape," "wide midfielder" / NOUN + NOUN: "mid-block," "back four," "press trigger" / NOUN + PREPOSITION PHRASE: "pocket of space," "overload on the right," "block in a 4-4-2"',
    positiveExample: '"Their high defensive line was exposed by the striker\'s movement in behind. The mid-block they switched to in the second half gave them more defensive solidity — but they sacrificed the press trigger moments they had been effective with."',
    negativePattern: 'Do NOT use vague language when precise tactical terms exist. Do NOT say "they played defensive" — say "they sat in a low block." Do NOT say "the defenders were high" — say "they played a high line."',
    negativeExample: 'VAGUE: "They were very organised and played well defensively near their box." → PRECISE: "They were compact in a 4-4-2 mid-block, squeezing the space between the lines and denying the opposition time on the ball."',
    positiveExamples: [
      { sentence: '"They operated in a back three that fluidly shifted to a back five in the defensive phase."', note: '(Compound noun "back three/five" describes both the shape and its adaptability)' },
      { sentence: '"The half-spaces either side of the striker were the pockets their number ten operated in most effectively."', note: '("Half-spaces," "pockets" — both are modern positional play compound nouns)' },
      { sentence: '"A high press triggered by the goalkeeper\'s long pass became their main offensive weapon."', note: '("High press," "press trigger," "long pass" — stacked compound nouns, all precise)' },
    ],
    negativeExamples: [
      { sentence: 'VAGUE: "The defenders stood very high up the pitch."', note: 'PRECISE: "They played an aggressive high line, with the last defender 40 metres from goal."' },
      { sentence: 'VAGUE: "They defended in the middle of the pitch."', note: 'PRECISE: "They set up in a mid-block, sitting between the two lines and inviting pressure."' },
    ],
  },

  vocabulary: [
    {
      word: 'FORMATION',
      partOfSpeech: 'noun',
      definition: 'The numerical arrangement of players on a pitch — e.g. 4-3-3, 4-2-3-1, 3-5-2. The first number is defenders, last is forwards.',
      example: '"They lined up in a 4-2-3-1 formation — two defensive midfielders providing cover for a high-pressing attacking midfielder."',
      imageSlug: '/images/shape-and-structure-formation.png',
    },
    {
      word: 'SYSTEM',
      partOfSpeech: 'noun',
      definition: 'How a team actually plays — their movements, roles, and principles. A system is broader than a formation; two teams can use the same formation but completely different systems.',
      example: '"Their 4-3-3 formation houses a positional play system — patient build-up, rotations, and third-man combinations."',
      imageSlug: '/images/system.png',
    },
    {
      word: 'MID-BLOCK',
      partOfSpeech: 'noun',
      definition: 'A defensive structure where the team defends in the middle third of the pitch — not as deep as a low block, not as high as a press. Compact and organised.',
      example: '"They dropped into a mid-block after going ahead — compact, disciplined, and difficult to break down."',
      imageSlug: '/images/mid-block.png',
    },
    {
      word: 'HIGH LINE',
      partOfSpeech: 'phrase',
      definition: 'When the defensive line pushes very high up the pitch — compressing space, playing offside traps, but vulnerable to balls in behind.',
      example: '"Their high line left them exposed — the striker was played through three times in the first half alone."',
      imageSlug: '/images/high-line.png',
    },
    {
      word: 'BACK THREE / BACK FOUR / BACK FIVE',
      partOfSpeech: 'phrase',
      definition: 'The number of central defenders in a team\'s defensive shape. Back four = two centre-backs plus two full-backs. Back three/five = three centre-backs, with wing-backs providing width.',
      example: '"They switched from a back four to a back three at half-time — adding an extra body in central areas to deal with the opposition\'s two strikers."',
      imageSlug: '/images/back-three-four.png',
    },
    {
      word: 'HYBRID SYSTEM',
      partOfSpeech: 'phrase',
      definition: 'A formation or approach that blends two different systems — adapting shape depending on phase of play (attacking vs defending).',
      example: '"Their hybrid system looks like a 4-2-3-1 in attack but shifts to a 4-4-2 mid-block when out of possession — highly adaptable."',
      imageSlug: '/images/hybrid-system.png',
    },
    {
      word: 'COMPACTNESS',
      partOfSpeech: 'noun',
      definition: 'How tight and close together a team\'s defensive shape is — the less space between players, the more compact the team.',
      example: '"Their compactness in the middle third was extraordinary — barely five metres between the defensive line and the midfield."',
      imageSlug: '/images/shape-and-structure-compactness.png',
    },
    {
      word: 'OVERLOAD',
      partOfSpeech: 'noun / verb',
      definition: 'When one team has more players in a particular area of the pitch than the opponent — a numerical advantage in a zone.',
      example: '"They consistently overloaded the right side with the full-back, winger, and overlapping midfielder — three against two every time."',
      imageSlug: '/images/shape-and-structure-overload.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SET UP',
      definition: 'To organise a team in a particular tactical formation or shape before or during a match.',
      example: '"They set up in a 5-3-2 specifically to nullify the threat of the opposition\'s wide forwards."',
      imageSlug: '/images/shape-and-structure-set-up.png',
    },
    {
      phrase: 'DROP INTO',
      definition: 'To move into a deeper defensive position — to retreat from a higher line into a block.',
      example: '"They dropped into a low block in the second half — protecting the lead rather than pressing."',
      imageSlug: '/images/shape-and-structure-drop-into.png',
    },
    {
      phrase: 'PUSH UP',
      definition: 'To move the defensive line or team shape higher up the pitch — to compress space and play more aggressively.',
      example: '"The manager told the back four to push up and play the offside trap — catch them out."',
      imageSlug: '/images/shape-and-structure-push-up.png',
    },
    {
      phrase: 'SHIFT ACROSS',
      definition: 'To move the team\'s defensive block sideways — tracking the ball and maintaining compactness.',
      example: '"When the ball moved to the right, the entire midfield block shifted across to cover and cut off the passing lanes."',
      imageSlug: '/images/shift-across.png',
    },
    {
      phrase: 'OPEN UP',
      definition: 'When a defensive structure begins to break down — gaps appear and the opposition finds space.',
      example: '"Their shape started to open up in the final fifteen minutes — fatigue setting in and the gaps exploited."',
      imageSlug: '/images/shape-and-structure-open-up.png',
    },
    {
      phrase: 'SWITCH TO',
      definition: 'To change formation or system during a match — adapting tactically in response to the game.',
      example: '"After conceding, they switched to a 3-4-3 — throwing on an extra forward and committing to attack."',
      imageSlug: '/images/switch-to.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key tactical concepts used in modern football analysis.',
    items: [
      {
        cue: 'Shape in possession vs out of possession',
        meaning: 'A team\'s formation often looks different when they have the ball versus when they are defending — two shapes within the same system.',
        usage: 'Modern tactical analysis always distinguishes between "in possession" shape and "out of possession" shape. A 4-3-3 in possession might become a 4-5-1 out of possession (wingers drop). A 3-4-3 might become a 5-4-1 defensively (wing-backs track back). "Their in-possession shape is a 3-2-5 — the full-backs push very high. Out of possession, they sit in a 4-4-2 mid-block." Understanding both shapes is essential for B2 tactical analysis.',
        imageSlug: 'otp-shape-in-possession',
      },
      {
        cue: 'The back three vs back four debate',
        meaning: 'Whether to use three or four central defenders — one of the most discussed tactical decisions in modern football.',
        usage: '"Back four" = two centre-backs + two full-backs. Provides width naturally. "Back three" = three centre-backs + two wing-backs for width. More central protection, less natural width. The debate: back three provides extra coverage against two strikers; back four allows more attacking full-backs. "He switched to a back three to cope with their double pivot and two strikers — it gave them the extra body they needed in central areas."',
        imageSlug: 'otp-back-three-vs-four',
      },
      {
        cue: 'Low block / mid-block / high press',
        meaning: 'The three main defensive structures — defined by how high up the pitch a team defends.',
        usage: '"Low block" = defending very deep, near your own goal — inviting the opponent in and defending the box. "Mid-block" = defending in the middle third — compact, disciplined, neither pressing high nor sitting deep. "High press" = pressing very high up, near the opponent\'s goal — trying to win the ball back quickly and high. Most teams use all three at different points. "They alternated between a high press and a mid-block depending on the score — pressing high when level, dropping into a mid-block when ahead."',
        imageSlug: 'otp-defensive-blocks',
      },
      {
        cue: 'The double pivot',
        meaning: 'Two defensive midfielders playing next to each other — providing cover for the defence and control in the midfield.',
        usage: '"Double pivot" = two holding midfielders (often called a "6" in positional terms) sitting in front of the back line. They provide defensive security, ball circulation, and act as a screen. "Their double pivot gave them complete control of the midfield — the opposition\'s number ten had no space to operate between the lines." The opposite is a single pivot (one defensive midfielder).',
        imageSlug: 'otp-double-pivot',
      },
      {
        cue: 'Vertical and horizontal compactness',
        meaning: 'Two dimensions of defensive organisation — how deep and how wide a team\'s shape is.',
        usage: '"Vertical compactness" = the distance between the defensive line and the attacking line is small — the team is short and compact from front to back. "Horizontal compactness" = the team is narrow — players close together across the width of the pitch. "They were both vertically and horizontally compact — virtually impossible to play through. The opposition was forced wide and into crosses, which were well-defended."',
        imageSlug: 'otp-compactness',
      },
      {
        cue: 'Numerical superiority / parity / inferiority',
        meaning: 'Whether a team has more, the same number, or fewer players in a specific area of the pitch.',
        usage: '"Numerical superiority" = more players in a zone (e.g. 3v2 on the right). "Numerical parity" = equal numbers (2v2). "Numerical inferiority" = fewer players in a zone (1v2). "They consistently created numerical superiority in the half-spaces by dragging opponents out of position with the double pivot movements." These terms — borrowed from positional play theory — are standard in modern tactical analysis.',
        imageSlug: 'otp-numerical-superiority',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'B2 level now — we are speaking the language of analysts and coaches. Look at this [[formation:the numerical arrangement of players on a pitch]]: 4-2-3-1. But the [[system:how a team actually plays — movements, roles, and principles]] inside it is positional play. What does that tell you?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The formation is the skeleton — the numbers. The system is the behaviour. The same 4-2-3-1 can house a direct counter-attack system or a possession-based positional play system. The [[double pivot:two defensive midfielders providing cover and control]] in the 4-2-3-1 will behave completely differently depending on the system — either sitting deep or joining the build-up.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent. Now — they go 1-0 up. They [[drop into:to move into a deeper defensive position]] a [[mid-block:a defensive structure in the middle third]]. The [[compactness:how tight and close together the defensive shape is]] is excellent. How do you break it down?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'You need to [[overload:to have more players in an area than the opponent]] wide areas — force them to [[shift across:to move the block sideways]] and create gaps centrally. Or play quick combinations in the half-space to pull players out of the block. If you can achieve [[numerical superiority:more players than the opponent in a zone]] in pockets between the lines, the block starts to [[open up:when gaps appear in a defensive structure]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect analysis. They also use a [[hybrid system:a formation that blends two systems]] — [[back three:three central defenders]] in defence, [[push up:to move the defensive line higher]] to a back four in possession with the left centre-back stepping out. How do you attack that transition moment?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The moment they [[switch to:to change formation during a match]] back four in possession, there is a brief vulnerability — one of the centre-backs is now wide as a full-back, and there is space behind the advancing midfielder. That is the press trigger moment — win the ball high and transition quickly before they [[set up:to organise in a formation]] again.',
    },
  ],

  matchingExercise: [
    { word: 'FORMATION', definition: 'The numerical arrangement of players on a pitch — e.g. 4-3-3' },
    { word: 'SYSTEM', definition: 'How a team actually plays — movements, roles, and principles' },
    { word: 'MID-BLOCK', definition: 'Defending in the middle third — compact, neither pressing nor sitting deep' },
    { word: 'HIGH LINE', definition: 'When the defensive line pushes very high up the pitch' },
    { word: 'HYBRID SYSTEM', definition: 'A formation that blends two systems — adapts shape by phase of play' },
    { word: 'COMPACTNESS', definition: 'How tight and close together a team\'s defensive shape is' },
    { word: 'OVERLOAD', definition: 'A numerical advantage in a specific zone of the pitch' },
    { word: 'DOUBLE PIVOT', definition: 'Two defensive midfielders sitting in front of the back line' },
  ],

  fillBlankExercise: [
    { before: 'They lined up in a', answer: 'back three', after: '— three centre-backs and two wing-backs providing width on either side.' },
    { before: 'After going ahead, they', answer: 'dropped into', after: 'a low block — absorbing pressure and hitting on the counter.' },
    { before: 'Their', answer: 'hybrid system', after: 'looked like a 4-3-3 in possession but shifted to a 4-5-1 when defending.' },
    { before: 'The', answer: 'high line', after: 'was a risk — the striker ran in behind three times in the opening 20 minutes.' },
    { before: 'They created a', answer: 'numerical overload', after: 'on the left — three players against two — and exploited it repeatedly.' },
    { before: 'The entire defensive block', answer: 'shifted across', after: 'when the ball moved wide — maintaining compactness throughout.' },
    { before: 'Their', answer: 'compactness', after: 'in the mid-block was extraordinary — barely five metres between the lines.' },
    { before: 'At 0-0, they', answer: 'pushed up', after: 'and pressed high — triggering the press on every goal kick.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the difference between a "formation" and a "system"?',
      options: [
        'They are the same thing — just different words for how a team sets up.',
        'A formation is the numerical shape; a system is how the team actually plays within that shape.',
        'A formation is used in attack; a system describes defensive organisation.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They set up in a mid-block." Where on the pitch does a mid-block sit?',
      options: [
        'Very deep — near their own goal, around the 18-yard box.',
        'In the middle third of the pitch — compact and disciplined.',
        'Very high — near the opposition\'s goal, pressing aggressively.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Their high line was exposed." What risk does a high defensive line carry?',
      options: [
        'It leaves too many players in attack and not enough to defend crosses.',
        'It is vulnerable to balls played in behind the defensive line — striker runs.',
        'It means the goalkeeper has to come off their line constantly.',
      ],
      correctIndex: 1,
    },
    {
      question: 'A team "switches from a back four to a back three." What does this change?',
      options: [
        'They remove a forward and add a midfielder — becoming more defensive.',
        'They add an extra central defender — usually the full-back becomes a wing-back.',
        'They move their goalkeeper higher up the pitch to act as a sweeper.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They created a numerical overload on the right flank." What does this mean?',
      options: [
        'Their right winger was much better than the opposition\'s left back.',
        'They had more players on the right side than the opposition — a numerical advantage.',
        'They put too many players forward and left the right side exposed.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "hybrid system" in tactical terms?',
      options: [
        'When a team uses two completely different formations in different matches.',
        'A system that blends two approaches — adapting shape based on phase of play.',
        'A system used only by teams with equal numbers of attackers and defenders.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The block opened up in the final fifteen minutes." What happened?',
      options: [
        'The team started pressing higher as the match reached its conclusion.',
        'Gaps appeared in the defensive structure — it began to break down.',
        'The manager opened up the formation by bringing on extra attackers.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does a "double pivot" provide in a 4-2-3-1?',
      options: [
        'Two strikers who pivot around each other to create space in the final third.',
        'Two defensive midfielders who screen the back line and control midfield.',
        'Two full-backs who pivot inward to create an extra central midfielder.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each tactical analysis sentence with the correct term.',
    items: [
      {
        sentence: '"They play a _____ that looks like a 3-4-3 in possession but drops to a 5-4-1 when defending — the wing-backs are crucial."',
        options: ['hybrid system', 'double pivot', 'mid-block'],
        correctIndex: 0,
        explanation: '"Hybrid system" is correct — this describes a setup that changes shape between attacking and defensive phases. "3-4-3 in possession → 5-4-1 out of possession" is the classic hybrid system pattern where wing-backs push high in attack but drop back as extra defenders when defending. A "double pivot" is a specific midfield position, not a system. A "mid-block" is a defensive structure, not a system type.',
      },
      {
        sentence: '"Their _____ left them completely exposed — the striker exploited the space in behind with two clean runs in the first ten minutes."',
        options: ['high line', 'compactness', 'overload'],
        correctIndex: 0,
        explanation: '"High line" is correct — a high defensive line pushes the back four close to the halfway line, which leaves space in behind for strikers to run into. "Compactness" means tightness of the defensive shape — it is a positive quality, not something that leaves teams exposed. "Overload" is a numerical advantage — wrong in this context (the team was exposed, not creating an advantage).',
      },
      {
        sentence: '"When they had the ball, the full-backs _____ and the double pivot dropped between the centre-backs — creating a back three in possession."',
        options: ['pushed up', 'dropped into', 'shifted across'],
        correctIndex: 0,
        explanation: '"Pushed up" is correct — the full-backs move forward and high when in possession, creating width in advanced positions. This is a modern positional play pattern. "Dropped into" means moving into a deeper position — the opposite of what full-backs do when in possession in this system. "Shifted across" means horizontal block movement — correct for defensive compactness but wrong for this attacking possession pattern.',
      },
      {
        sentence: '"They consistently created _____ in the half-spaces by overloading one side and then switching the play quickly."',
        options: ['numerical superiority', 'compactness', 'a mid-block'],
        correctIndex: 0,
        explanation: '"Numerical superiority" is correct — by overloading one side and switching quickly, teams create a numerical advantage (more players than defenders) in the half-spaces before the opposition can reorganise. "Compactness" is a defensive concept — wrong for an attacking tactic. "A mid-block" is a defensive structure — completely wrong here.',
      },
      {
        sentence: '"They play an extremely _____ defensive shape — the distance between the lines is barely five metres, making it almost impossible to play through."',
        options: ['compact', 'hybrid', 'overloaded'],
        correctIndex: 0,
        explanation: '"Compact" is correct — "compactness" means the team is tightly organised with minimal space between units. "Five metres between the lines" is an extremely compact shape — hard to play through. "Hybrid" describes a system that changes shape — not about compactness. "Overloaded" describes a numerical advantage in a zone — not relevant to describing overall defensive shape.',
      },
      {
        sentence: 'Which sentence uses CORRECT B2 tactical language?',
        options: [
          '"They defended very well together and stayed close — it was hard to get through them."',
          '"Their vertical and horizontal compactness in the mid-block was exceptional — the double pivot screened the back four effectively throughout."',
          '"The formation worked very well because all the players were in good positions and they were organised."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — uses precise B2 tactical compound nouns: "vertical and horizontal compactness" (two dimensions of defensive organisation), "mid-block" (specific defensive structure), "double pivot" (specific midfield role), "screened the back four" (precise tactical verb). A is B1 level — correct but vague, using general adjectives ("very well," "close," "hard"). C is also vague — "good positions" and "organised" are imprecise. B2 tactical English requires the compound noun vocabulary of modern analysis.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use B2 tactical vocabulary to give the most precise, analytical response.',
      items: [
        {
          customerLine: 'An analyst asks: "How would you set up against a team that plays a high press and wants to play out from the back?"',
          options: [
            '"I would use a formation where my players are good at defending and can win the ball back quickly after losing it."',
            '"I would set up in a 4-4-2 mid-block — compact, with two strikers ready to press triggers high. I would also instruct my goalkeeper and centre-backs to play long rather than into the press, looking for second balls. This hybrid approach — sitting deep but with press triggers — would deny them the possession they want while creating transition opportunities."',
            '"I would play defensively and wait for chances on the counter-attack — try to catch them when they are high up the pitch."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses precise B2 tactical language: "4-4-2 mid-block" (specific structure), "compact" (tactical quality), "press triggers" (specific moments), "play long rather than into the press" (tactical instruction), "hybrid approach" (system description), "transition opportunities" (attacking concept from defensive shape). A is too vague — "good at defending" is not tactical analysis. C is directionally correct but uses no precise tactical vocabulary.',
        },
        {
          customerLine: 'A journalist asks: "City switched to a back three at half-time — what was the thinking?"',
          options: [
            '"The manager wanted an extra defender because the opposition was very dangerous with two forwards."',
            '"The switch to a back three gave them an extra body in central areas to deal with the opposition\'s two strikers — creating numerical parity in central defence rather than inferiority. The wing-backs provided width, allowing the full-backs to move into more central positions. The hybrid system also gave them an extra midfielder in the transition phase."',
            '"Going to a back three made them more defensive — they sacrificed an attacker for a defender to protect the result."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analytical, precise, and uses B2 tactical vocabulary. "Numerical parity rather than inferiority" (positional play concept), "wing-backs provided width" (role description), "full-backs to move into more central positions" (positional adjustment), "hybrid system" (system type), "transition phase" (specific moment). A is simple and essentially correct but lacks depth and precision. C captures the broad idea but frames it too simply — "sacrificed an attacker" is imprecise; the back three is about reshaping, not just being more defensive.',
        },
        {
          customerLine: 'Debate: "A high line is too risky in modern football — pace up front has made it obsolete." Do you agree?',
          options: [
            '"I agree — fast strikers make a high line very dangerous. Teams should play deeper to be safe."',
            '"It is a compelling argument, and I would partially agree — a high line against a team with extreme pace in behind carries obvious risk. However, I would argue that the high line is a tactical choice that depends entirely on context: the quality of your centre-backs, your defensive line\'s ability to read runs, and the opponent\'s style. City and Arsenal have both used high lines effectively at the elite level. The risk is real, but with the right personnel and pressing triggers to restrict the build-up, it remains a valid system."',
            '"A high line is risky against fast teams but works against slow teams. It depends on the opposition."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a full B2 analytical response with structured argument, tactical vocabulary, and specific examples. Uses: "partially agree" (nuanced position), "tactical choice that depends entirely on context" (critical analysis), "quality of centre-backs," "defensive line\'s ability to read runs" (tactical precision), "pressing triggers to restrict the build-up" (connecting pressing and high line as a system). A is too simplistic — no analysis. C is directionally correct but shallow — "fast/slow teams" is an oversimplification.',
        },
        {
          customerLine: 'Explain what "numerical superiority in the half-spaces" means to someone new to tactical analysis.',
          options: [
            '"It means they have more players in a specific part of the pitch than the opponents, specifically in the half-spaces — the areas between the centre and wide zones."',
            '"Numerical superiority in the half-spaces means the attacking team has more players than the defending team in the half-spaces — the zones between the centre-backs and full-backs. If a team can consistently get three players into those areas against two defenders, the defenders face impossible choices: if they step out to press, they leave space behind; if they stay, the attacker gets time on the ball. This is the foundation of positional play — creating these overloads systematically rather than randomly."',
            '"Having more attackers than defenders in the middle-wide areas — using this to create chances."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — not just defines the term but explains its tactical significance and the dilemma it creates. "Half-spaces — the zones between the centre-backs and full-backs" (precise location), "three players against two defenders" (concrete example of numerical superiority), "if they step out... if they stay" (the dilemma created), "foundation of positional play — overloads systematically rather than randomly" (connecting to broader tactical system). A is a correct but bare definition. C is too brief. B demonstrates B2 analytical depth — knowing not just what a term means but why it matters tactically.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three tactical language mistakes in this analysis. Find them.',
      dialogue: [
        { speaker: 'Analyst', text: 'City set up in a 4-2-3-1 system with a back four in the defensive phase.' },
        { speaker: 'Analyst', text: 'Their high line left them very compact — the striker had no space in behind and was ineffective.' },
        { speaker: 'Analyst', text: 'The double pivot was crucial — they provided numerical superiority in the midfield zone.' },
        { speaker: 'Analyst', text: 'United responded by switching to a back three, which gave them a mid-block hybrid system in the forward areas.' },
        { speaker: 'Analyst', text: 'By overloading the left side with three players, United shifted the entire City block across and created space on the right.' },
        { speaker: 'Analyst', text: 'Ultimately, City\'s compactness and low block held — United created very little despite their numerical overloads.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Their high line left them very compact',
          correction: 'Their high line left them vulnerable / exposed',
          explanation: 'A "high line" and "compactness" are contradictory concepts when used this way. A high defensive line means the back four pushes very high — this creates compactness between the lines vertically (less space between defence and midfield). However, saying the high line "left them compact" in a sentence about the striker having no space is incorrect usage. A high line is specifically a risk because of the space it leaves behind the back line — it does not prevent strikers from getting space behind the defence; it invites it. "The high line left them vulnerable/exposed" is correct.',
        },
        {
          lineIndex: 3,
          incorrectText: 'a mid-block hybrid system in the forward areas',
          correction: 'a back three hybrid system / a hybrid system with a mid-block in the defensive phase',
          explanation: 'A "mid-block" is a defensive structure — it describes defending in the middle third of the pitch. It cannot logically exist "in the forward areas" — the forward areas are where you attack, not where you set up a defensive mid-block. The error mixes a defensive concept (mid-block) with an attacking location (forward areas). The correct description would be: "United switched to a back three, adopting a hybrid system that pressed high in the attacking phase and dropped into a mid-block out of possession."',
        },
        {
          lineIndex: 5,
          incorrectText: 'City\'s compactness and low block held',
          correction: 'City\'s compactness and mid-block held',
          explanation: 'The analysis established in the first line that City were playing a 4-2-3-1 with a back four and high line — and later their "compactness." A "low block" is a specific defensive structure where a team sits very deep near their own goal. This contradicts the "high line" mentioned earlier and the general description of City\'s play. If they had a "high line" they cannot simultaneously have a "low block." This is an internal inconsistency in the analysis. "Mid-block" is the correct term for a compact defensive shape that is not sitting extremely deep.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each tactical analysis using precise B2 football vocabulary.',
      items: [
        {
          customerLine: 'Explain how Pep Guardiola\'s teams use a "back three in possession" built from a back four.',
          salespersonStart: 'Guardiola\'s possession system often involves converting a back four into a back three —',
          suggestedCompletion: 'Guardiola\'s possession system often involves converting a back four into a back three — one full-back, usually on the left, inverts into a central midfield position to join the double pivot, while the opposite full-back pushes high as an advanced winger. The remaining three defenders — two centre-backs and the right back — form the back three in possession. This creates a 3-2-5 structure in possession: three at the back, two pivots, and five across the attacking line. The advantages are clear: numerical superiority across the board, width from the advanced full-back, and the inverted full-back creating overloads in midfield. When the team loses possession, the structure quickly transitions back to a 4-2-3-1 or 4-4-2 mid-block — the hybrid quality is essential to the system\'s success.',
        },
        {
          customerLine: 'Analyse why a mid-block is often more effective than a low block against elite possession-based teams.',
          salespersonStart: 'Against elite possession-based teams, a mid-block often outperforms a low block —',
          suggestedCompletion: 'Against elite possession-based teams, a mid-block often outperforms a low block — and the reason comes down to press triggers and transitional moments. A low block concedes enormous space between the midfield line and the defensive line — elite teams exploit this with their number tens operating freely. A mid-block, by contrast, maintains vertical compactness between the lines, denying that pocket of space. Crucially, a mid-block also allows for press triggers: moments when the shape can shift into a high press — a back pass to the goalkeeper, a centre-back receiving under pressure — before dropping back into the block. This unpredictability makes the defending team harder to play through. The low block is more passive; the mid-block is active and situational.',
        },
        {
          customerLine: 'Describe how overloading one side and switching the play is used to break down a compact defensive block.',
          salespersonStart: 'Overload and switch is one of the most effective tools against a compact mid-block —',
          suggestedCompletion: 'Overload and switch is one of the most effective tools against a compact mid-block — and it works by exploiting the horizontal shift that compactness requires. The attacking team builds numerical superiority on one side: three or four players in a tight zone, dragging the entire defensive block across to cover. As the block shifts across — maintaining horizontal compactness but now shifted left or right — it leaves space on the opposite side. A rapid switch of play to that free side, before the block can reorganise, creates a 1v1 or 2v1 with the wide forward and full-back. The key is the speed of the switch and the timing of the run from the wide player. Teams like Spain and City have weaponised this principle into a complete attacking system.',
        },
        {
          customerLine: 'Compare a 4-4-2 formation to a 4-3-3, discussing the advantages and disadvantages of each.',
          salespersonStart: 'The 4-4-2 and 4-3-3 are two of the most widely used formations in modern football —',
          suggestedCompletion: 'The 4-4-2 and 4-3-3 are two of the most widely used formations in modern football — and their tactical differences are significant. The 4-4-2 provides two strikers who can create numerical parity or superiority against a back four — excellent for direct play, pressing in pairs, and attacking set pieces. Its flat midfield four is extremely compact as a mid-block; shifting across efficiently. The disadvantage is midfield — a flat four against a double pivot can be overrun in central areas. The 4-3-3, by contrast, provides midfield control with three central players — often a double pivot and an advanced midfielder who links attack and defence. The three forwards provide width and press triggers. However, the lone striker can be isolated, and the wider midfielders must track back as a flat four when defending. Most modern teams use hybrid versions — a 4-3-3 that looks like a 4-4-2 without the ball — getting the best of both systems.',
        },
      ],
    },
  },
};
