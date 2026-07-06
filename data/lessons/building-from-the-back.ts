import { Lesson } from '@/types/lesson';

export const buildingFromTheBack: Lesson = {
  slug: 'building-from-the-back',
  title: 'Building from the Back',
  subtitle: 'Playing out, recycling possession, goalkeeper distribution',
  level: 'B1-B2',
  description: 'Learn the vocabulary for how teams build attacks starting from the goalkeeper — passing out from the back, keeping possession, and how the goalkeeper uses the ball to start play.',
  heroImage: '/images/building-from-the-back-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Infinitive of purpose — explaining why you do something',
    description: 'We use "to + base verb" to explain the purpose of an action — why something is done. In football, this helps describe the reasons behind tactical decisions: why a team plays out from the back, why the goalkeeper distributes quickly, why a player drops deep.',
    positivePattern: 'Action + to + base verb (purpose)',
    positiveExample: '"The goalkeeper plays short to keep possession." (Why does he play short? To keep possession.) / "She drops deep to give the midfielder a passing option."',
    negativePattern: 'We do NOT use "for + verb-ing" to explain purpose in these sentences.',
    negativeExample: 'WRONG: "He plays short for keeping possession." / RIGHT: "He plays short to keep possession."',
    positiveExamples: [
      { sentence: 'The goalkeeper rolls the ball to the centre-back to start the attack from deep.', note: '(Why? — to start the attack from deep)' },
      { sentence: 'The team plays out from the back to avoid the opposition\'s high press.', note: '(Why? — to avoid the press)' },
      { sentence: 'The midfielder drops deeper to give the defenders a passing option.', note: '(Why? — to give a passing option)' },
      { sentence: 'They recycle possession to reorganise and find a better opening.', note: '(Why? — to reorganise and find a better opening)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "The goalkeeper throws long for bypassing the press."', note: 'Do not use "for + verb-ing" to explain purpose.' },
      { sentence: 'RIGHT: "The goalkeeper throws long to bypass the press."', note: 'Use "to + base verb" — the infinitive of purpose.' },
    ],
  },

  vocabulary: [
    {
      word: 'PLAY OUT',
      partOfSpeech: 'phrasal verb',
      definition: 'To build attacks by passing the ball from the back — starting from the goalkeeper or defenders rather than kicking long.',
      example: 'They love to play out from the back — short passes, patient build-up, never just hoofing it forward.',
      imageSlug: '/images/building-from-the-back-play-out.png',
    },
    {
      word: 'DISTRIBUTION',
      partOfSpeech: 'noun',
      definition: 'The way the goalkeeper sends the ball to teammates — by throwing, rolling, or kicking.',
      example: 'The goalkeeper has excellent distribution — she can roll the ball short or play a precise long pass to the striker.',
      imageSlug: '/images/building-from-the-back-distribution.png',
    },
    {
      word: 'RECYCLE',
      partOfSpeech: 'verb',
      definition: 'To pass the ball backwards or sideways to reset — to slow down and find a better position before attacking again.',
      example: 'When they hit a wall of defenders, they recycle the ball — passing it back to start the attack again from a different angle.',
      imageSlug: '/images/recycle.png',
    },
    {
      word: 'BUILD-UP PLAY',
      partOfSpeech: 'noun',
      definition: 'The way a team gradually passes the ball forward — building towards an attack with short, controlled passes.',
      example: 'Their build-up play is very patient and methodical — they use many passes before they shoot.',
      imageSlug: '/images/build-up-play.png',
    },
    {
      word: 'SWEEPER-KEEPER',
      partOfSpeech: 'noun',
      definition: 'A goalkeeper who often comes out of goal to join the play — acting like an extra outfield player.',
      example: 'He is a sweeper-keeper — he regularly comes out to his feet to help with build-up play.',
      imageSlug: '/images/sweeper-keeper.png',
    },
    {
      word: 'OVERLOAD',
      partOfSpeech: 'noun / verb',
      definition: 'When a team creates more players than the opposition in one area of the pitch — giving themselves a numerical advantage.',
      example: 'They overload the right side — three players against two defenders — to create a better chance.',
      imageSlug: '/images/building-from-the-back-overload.png',
    },
    {
      word: 'SWITCH',
      partOfSpeech: 'noun / verb',
      definition: 'A long pass that moves the ball from one side of the pitch to the other — to find space where the opposition is not defending.',
      example: 'He switches the play with a long diagonal pass — moving the ball from the right to the left where there is more space.',
      imageSlug: '/images/building-from-the-back-switch.png',
    },
    {
      word: 'RETAIN',
      partOfSpeech: 'verb',
      definition: 'To keep the ball — not losing possession. A team that retains the ball well does not give it away easily.',
      example: 'They are excellent at retaining the ball — they can keep possession for long periods and tire the opposition out.',
      imageSlug: '/images/retain.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PLAY IT SHORT',
      definition: 'To pass the ball to a nearby player rather than kicking it long.',
      example: 'The goalkeeper plays it short to the defender to start the build-up — rather than launching it forward.',
      imageSlug: '/images/play-it-short.png',
    },
    {
      phrase: 'COME TO FEET',
      definition: 'To receive the ball directly to your feet — played along the ground — rather than in the air.',
      example: 'Come to feet! — shouted by players who want the ball passed on the ground, not in the air.',
      imageSlug: '/images/come-to-feet.png',
    },
    {
      phrase: 'PLAY THROUGH THE LINES',
      definition: 'To pass the ball through or past the opposition\'s defensive lines — finding a teammate between or behind their shape.',
      example: 'He plays through the lines with a clever pass — splitting the defence and finding the striker in behind.',
      imageSlug: '/images/building-from-the-back-play-through-the-lines.png',
    },
    {
      phrase: 'LOOK UP',
      definition: 'To take a moment to check what teammates and opponents are doing before playing the next pass.',
      example: 'Look up before you pass! — the coach shouts. Too many players pass without seeing what is around them.',
      imageSlug: '/images/look-up.png',
    },
    {
      phrase: 'PLAY AROUND',
      definition: 'To pass the ball around the opposition — moving it from side to side to find openings.',
      example: 'They play around the high press — keeping the ball moving quickly so the opposition cannot trap them.',
      imageSlug: '/images/play-around.png',
    },
    {
      phrase: 'FIND SPACE',
      definition: 'To move into a position where there is no opponent — making yourself available to receive a pass.',
      example: 'The midfielder finds space between the lines — she drops into a gap in the opposition shape to receive the ball.',
      imageSlug: '/images/find-space.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used during build-up play and goalkeeper distribution.',
    items: [
      {
        cue: 'Play it out!',
        meaning: 'Build from the back — pass it short, do not kick it long.',
        usage: 'Instruction from the coach or captain to tell the goalkeeper or defenders to build the attack by passing rather than kicking the ball forward. The key principle behind modern football — possession and control starts from the goalkeeper. Very common in teams that like to dominate the ball.',
        imageSlug: 'otp-play-it-out',
      },
      {
        cue: 'Recycle!',
        meaning: 'Pass the ball back — start again from a better position.',
        usage: 'Shouted when the team has run out of options going forward. "Recycle" means pass backwards to a defender or the goalkeeper to reset the attack. It is not giving up — it is a tactical decision to find a better angle of attack. Patient teams recycle many times before scoring.',
        imageSlug: 'otp-recycle',
      },
      {
        cue: 'Show for it!',
        meaning: 'Make yourself available — move to receive the pass.',
        usage: 'A call to a teammate to move into a position where they can receive the ball. "Show for it" = show yourself as a passing option. In build-up play, players must constantly be moving to give the ball carrier a clear option. If no one shows, the team loses possession or is forced to kick long.',
        imageSlug: 'otp-show-for-it',
      },
      {
        cue: 'Switch it!',
        meaning: 'Play the ball to the other side of the pitch — move it from left to right or right to left.',
        usage: 'Used when one side is crowded with opposition players but the other side has space. A switch pass is usually a long diagonal ball across the pitch. The idea is to move the ball quickly to where the opposition is not defending — finding space on the weak side.',
        imageSlug: 'otp-switch-it',
      },
      {
        cue: "We build from the back — it's how we play.",
        meaning: 'Our team style involves passing out from the goalkeeper — it is our tactical identity.',
        usage: 'Said by a coach or player to explain the team\'s philosophy. "Building from the back" means the goalkeeper and defenders start every attack with short passes — they do not kick the ball long. It requires all players to have good technical ability and confidence on the ball.',
        imageSlug: 'otp-we-build-from-the-back',
      },
      {
        cue: 'Quick hands!',
        meaning: 'Goalkeeper — distribute quickly with your hands, do not take too long.',
        usage: 'Instruction to the goalkeeper to throw or roll the ball to a teammate quickly — before the opposition can press. "Quick hands" means the goalkeeper should not waste time after catching the ball. Fast distribution can turn defence into attack in a moment.',
        imageSlug: 'otp-quick-hands',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today we talk about one of the most important ideas in modern football — [[build-up play:the way a team gradually passes the ball forward from deep]]. Why do teams [[play out:build attacks by passing from the back rather than kicking long]] from the back?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'They play out to keep possession — to control the game and not give the ball away by kicking it long randomly.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. They play out to keep possession. Not "for keeping possession." The infinitive of purpose — to + verb. And Ronaldo — what does the [[sweeper-keeper:a goalkeeper who comes out to join the build-up play like an extra outfield player]] do differently from a traditional goalkeeper?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The sweeper-keeper comes out of goal to join the build-up. He acts as an extra player — giving the defenders more [[distribution:the way the goalkeeper sends the ball to teammates]] options when they are pressed.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. So why does the sweeper-keeper come out of goal?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'To give an extra passing option. To help [[recycle:pass the ball back to reset — to slow down and find a better position]] possession. To put the opposition in a difficult situation — pressing one extra player they were not expecting.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Three perfect answers — all using the infinitive of purpose. And when the press is too strong — what do you do?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'You [[switch:a long pass that moves the ball from one side to the other]] the play — a long diagonal ball to the other side to find the space where they are not pressing. Or you go long to [[bypass:to go around or avoid something]] the press entirely.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'You go long to bypass the press — another infinitive of purpose. The key word: TO. Every tactical decision has a reason. Find the reason. Use TO.',
    },
  ],

  matchingExercise: [
    { word: 'PLAY OUT', definition: 'Build attacks by passing from the back — not kicking long' },
    { word: 'DISTRIBUTION', definition: 'How the goalkeeper sends the ball to teammates — throwing, rolling, or kicking' },
    { word: 'RECYCLE', definition: 'Pass the ball back to reset and find a better position' },
    { word: 'BUILD-UP PLAY', definition: 'Gradually passing the ball forward — building towards an attack with controlled passes' },
    { word: 'SWEEPER-KEEPER', definition: 'A goalkeeper who comes out to join the play as an extra outfield player' },
    { word: 'OVERLOAD', definition: 'Creating more players than the opposition in one area — a numerical advantage' },
    { word: 'SWITCH', definition: 'A long pass moving the ball from one side of the pitch to the other' },
    { word: 'RETAIN', definition: 'To keep the ball — not losing possession' },
  ],

  fillBlankExercise: [
    { before: 'The goalkeeper rolls the ball short', answer: 'to keep', after: 'possession — she never kicks it long randomly.' },
    { before: 'They', answer: 'play out', after: 'from the back — building attacks with patient, short passes.' },
    { before: 'The midfielder drops deeper', answer: 'to give', after: 'the defenders a passing option under the press.' },
    { before: 'They', answer: 'recycle', after: 'the ball when there is no opening — passing back to start again.' },
    { before: 'The', answer: 'sweeper-keeper', after: 'comes out of goal to act as an extra outfield player in build-up.' },
    { before: 'He', answer: 'switches', after: 'the play with a long diagonal ball to find space on the other side.' },
    { before: 'She drops into space', answer: 'to receive', after: 'the ball between the lines — showing for the pass.' },
    { before: 'They go long', answer: 'to bypass', after: 'the opposition\'s high press — avoiding it entirely.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"The goalkeeper plays short to keep possession." What does "to keep" explain?',
      options: [
        'When the goalkeeper plays short',
        'Why the goalkeeper plays short — the purpose',
        'How the goalkeeper plays short',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses the infinitive of purpose correctly?',
      options: [
        '"They recycle for finding a better opening."',
        '"They recycle to finding a better opening."',
        '"They recycle to find a better opening."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "recycle the ball" mean?',
      options: [
        'Shoot from long range',
        'Pass backwards or sideways to reset and find a better position',
        'Switch the ball quickly to the other side of the pitch',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does a sweeper-keeper do differently from a traditional goalkeeper?',
      options: [
        'They kick the ball longer and harder',
        'They come out of goal to join the build-up play',
        'They never distribute with their hands',
      ],
      correctIndex: 1,
    },
    {
      question: '"Switch it!" — what does this instruction mean?',
      options: [
        'Change the tempo — slow down the build-up',
        'Move the ball from one side of the pitch to the other',
        'Pass it short to the nearest teammate',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is WRONG?',
      options: [
        '"She drops deep to give an extra passing option."',
        '"She drops deep for giving an extra passing option."',
        '"She drops deep to create an overload on the right."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "build-up play" describe?',
      options: [
        'Long ball football — bypassing midfield entirely',
        'Gradually passing the ball forward with controlled, short passes',
        'Pressing the opposition high up the pitch',
      ],
      correctIndex: 1,
    },
    {
      question: '"They overload the right side." What does this mean?',
      options: [
        'They have too many defenders on the right',
        'They put more players on the right than the opposition has there',
        'They play too long on the right side',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the infinitive of purpose (to + verb).',
    items: [
      {
        sentence: 'The team plays out from the back _____ control the tempo of the game.',
        options: ['for controlling', 'to control', 'to controlling'],
        correctIndex: 1,
        explanation: '"To control" is correct — this is the infinitive of purpose. We use "to + base verb" to explain why an action is done. "For controlling" uses "for + verb-ing" which is the wrong pattern for explaining purpose. "To controlling" incorrectly adds -ing after "to" — "to" here is not the preposition, it is the infinitive marker, so we use the base form.',
      },
      {
        sentence: 'The midfielder drops deeper _____ an extra passing option for the defenders.',
        options: ['to give', 'for giving', 'to giving'],
        correctIndex: 0,
        explanation: '"To give" is correct. We use "to + base verb" to explain the purpose. The reason the midfielder drops deeper is to give the defenders another option. "For giving" is incorrect — this construction (for + verb-ing) cannot be used to express purpose in this way. "To giving" is wrong because after the infinitive marker "to," we always use the base form, never -ing.',
      },
      {
        sentence: 'They go long _____ the opposition\'s high press.',
        options: ['to bypassing', 'for bypass', 'to bypass'],
        correctIndex: 2,
        explanation: '"To bypass" is correct. The purpose of going long is to bypass the press — to avoid it. "To + base verb" = infinitive of purpose. "To bypassing" is wrong (-ing after the infinitive "to"). "For bypass" is wrong — "for" cannot be followed directly by a base verb here. Compare: "for bypassing" would be wrong too. Only "to bypass" correctly expresses purpose.',
      },
      {
        sentence: 'They switch the play _____ space on the other side of the pitch.',
        options: ['to find', 'for finding', 'to found'],
        correctIndex: 0,
        explanation: '"To find" is correct. Purpose: Why do they switch? To find space. "To + base verb" = to find. "For finding" uses the wrong pattern. "To found" uses the past tense after "to" — wrong. The infinitive of purpose always uses the base form (present, uninflected): "to find," "to keep," "to bypass," "to create."',
      },
      {
        sentence: 'The sweeper-keeper comes out of goal _____ as an extra player in the build-up.',
        options: ['to acting', 'to act', 'for to act'],
        correctIndex: 1,
        explanation: '"To act" is correct. The purpose of coming out of goal is to act as an extra player. "To acting" incorrectly adds -ing. "For to act" is completely wrong — we never use "for to" in English. The structure is simply: verb + to + base verb. "He comes out to act." "She drops deep to give." "They switch to find." Simple: action + to + purpose.',
      },
      {
        sentence: 'The team recycles the ball _____ and _____ a better angle of attack.',
        options: ['to reorganise / find', 'to reorganise / to find', 'for reorganising / finding'],
        correctIndex: 0,
        explanation: '"To reorganise / find" is correct. When two purpose verbs are joined by "and," you only need "to" once: "to reorganise and find." You do not need to repeat "to" before the second verb. "To reorganise / to find" is not wrong, but it sounds slightly formal and redundant. "For reorganising / finding" is the wrong pattern. Most natural: "to reorganise and find a better angle."',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — and identify which uses the infinitive of purpose correctly.',
      items: [
        {
          customerLine: 'Why does the team always play out from the back instead of kicking it long?',
          options: [
            '"They play out for keeping possession and for controlling the game."',
            '"They play out to keep possession and to control the tempo — long ball gives the opposition the ball back too easily."',
            '"They play out because keeping possession and controlling the game."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses "to keep" and "to control" — the infinitive of purpose. A uses "for keeping / for controlling" — the wrong pattern. C uses "because" without a subject or verb structure — incomplete grammar. Always use "to + base verb" to explain the purpose of a tactical decision.',
        },
        {
          customerLine: 'When should a team switch the play?',
          options: [
            '"They switch the play to find space on the weak side — when one side is overloaded with defenders."',
            '"They switch the play for finding space on the weak side."',
            '"They switch the play because the other side has more space."',
          ],
          correctIndex: 0,
          explanation: 'A is correct — "to find space" is the infinitive of purpose. B uses "for finding" which is wrong. C is grammatically correct (using "because + clause") but A is stronger because it uses the infinitive of purpose and explains the tactical reason more directly and concisely.',
        },
        {
          customerLine: 'What is the advantage of having a sweeper-keeper?',
          options: [
            '"The sweeper-keeper helps the team for having an extra player in build-up."',
            '"The sweeper-keeper comes out to give an extra option — helping the team to play out from the back even under pressure."',
            '"The sweeper-keeper is good because he comes out of his goal a lot."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "To give an extra option" and "to play out from the back" — both use the infinitive of purpose correctly. A uses "for having" incorrectly. C is vague and does not use the infinitive of purpose. Always follow up a tactical description with "to + purpose."',
        },
        {
          customerLine: 'Why do midfielders "show for the ball" during build-up?',
          options: [
            '"They show for the ball for giving the defenders an option and for helping the team move forward."',
            '"They show for the ball to give the defenders a passing option and to help the team progress up the pitch."',
            '"They show for the ball because it helps."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Two perfect infinitive of purpose structures: "to give" and "to help." A uses "for giving / for helping" — wrong pattern for purpose. C is too vague and does not use the infinitive. The more precise your language, the better you communicate tactical ideas.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with the infinitive of purpose in this tactical discussion. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Today I want to explain why we play out from the back. We do it for keeping the ball and for tiring the opposition.' },
        { speaker: 'Ronaldo', text: 'And we also drop the midfielder deeper to give more options.' },
        { speaker: 'Coach Diallo', text: 'Exactly. The sweeper-keeper comes out of goal to creating an overload — giving us a numbers advantage.' },
        { speaker: 'Sofia', text: 'And when we are pressed, we switch the play to finding space on the weak side.' },
        { speaker: 'Coach Diallo', text: 'Good. We recycle the ball to reorganise and find a better angle — never panic under pressure.' },
        { speaker: 'Ronaldo', text: 'And the full-backs push forward to stretch the opposition and to create more space in the middle.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'We do it for keeping the ball and for tiring the opposition.',
          correction: 'We do it to keep the ball and to tire the opposition.',
          explanation: '"For + verb-ing" cannot be used to express purpose in this way. When we explain why we do something — the purpose — we use "to + base verb" (the infinitive of purpose). "For keeping" → "to keep." "For tiring" → "to tire." Always: action + to + base verb to explain purpose. "For" followed by a gerund is used for other purposes (e.g., "This is good for improving fitness") but not to answer "why do you do this action."',
        },
        {
          lineIndex: 2,
          incorrectText: 'The sweeper-keeper comes out of goal to creating an overload',
          correction: 'The sweeper-keeper comes out of goal to create an overload',
          explanation: '"To creating" is wrong. After the infinitive marker "to" in the infinitive of purpose, we ALWAYS use the BASE FORM — never -ing. "To create" not "to creating." Think of it this way: this "to" is not a preposition, it is the infinitive marker. Prepositions can be followed by -ing (e.g., "good at running"). But the infinitive "to" takes the base verb: "to create," "to give," "to find," "to keep."',
        },
        {
          lineIndex: 3,
          incorrectText: 'we switch the play to finding space on the weak side',
          correction: 'we switch the play to find space on the weak side',
          explanation: '"To finding" is wrong. Same error as the previous mistake — "to" in the infinitive of purpose is followed by the BASE FORM, never -ing. "To find" not "to finding." If you are unsure, replace "to" with "in order to" — that makes the infinitive structure clearer. "We switch in order to find space." "In order to finding" sounds obviously wrong — which tells you "to finding" is also wrong.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the coach's explanation using infinitives of purpose.",
      items: [
        {
          customerLine: 'Ronaldo: Why do some teams prefer to play long rather than build from the back?',
          salespersonStart: 'Coach Diallo: Some teams play long to bypass the opposition\'s midfield entirely.',
          suggestedCompletion: 'They hit the ball forward to find the striker quickly — to take advantage of their pace in behind. It is a valid tactic to exploit the space behind the defensive line. They do not need to build through midfield to be effective — sometimes the simplest route is the best. A long ball can also be used to relieve pressure when the press is very intense. You switch to long ball to change the tempo and to surprise the opposition who expect you to play short.',
        },
        {
          customerLine: 'Sofia: Why do teams recycle possession instead of always going forward?',
          salespersonStart: 'Coach Diallo: Teams recycle the ball to reorganise their positions and to find a better angle of attack.',
          suggestedCompletion: 'When you pass forward and hit a wall of defenders, you recycle to reset — to go back and try from a different direction. It is not negative football. You recycle to give your teammates time to move into better positions. You pass backwards to draw the opposition forward — and then you have more space behind them to attack. The best teams in the world recycle quickly and efficiently to maintain control and to keep the opposition guessing.',
        },
        {
          customerLine: 'Ronaldo: What do coaches tell the goalkeeper to do to improve build-up play?',
          salespersonStart: 'Coach Diallo: Coaches tell the goalkeeper to distribute quickly — to not hold the ball longer than necessary.',
          suggestedCompletion: 'The goalkeeper should roll the ball out to the nearest defender to start the attack immediately. She should come off her line to offer herself as a passing option — to act as an extra player in build-up. Coaches also train goalkeepers to play with both feet to give more options when pressed from the left or right. The goalkeeper\'s job in modern football is not just to save shots — it is to start attacks, to keep possession, and to help the team play out under pressure. A goalkeeper who can do all this gives the team a huge advantage.',
        },
        {
          customerLine: 'Sofia: How do you beat a team that defends very deep?',
          salespersonStart: 'Coach Diallo: To beat a deep defensive block, you need patience and clever movement.',
          suggestedCompletion: 'You switch the play quickly to find space on the weak side — to attack before the opposition can shift their shape. You pull players wide to create gaps in the centre. You use quick combinations to play through the lines — to find a teammate between the defensive and midfield lines. You overload one side to drag defenders across — then switch quickly to the other side to exploit the space they have left. Most importantly, you must be patient. You recycle to keep the opposition on the move and to tire them out — and eventually a gap will appear.',
        },
      ],
    },
  },
};
