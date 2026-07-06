import { Lesson } from '@/types/lesson';

export const speakingToYourTeammates: Lesson = {
  slug: 'speaking-to-your-teammates',
  title: 'Speaking to Your Teammates',
  subtitle: 'On-pitch communication — calls, warnings, organisation, and encouragement',
  level: 'B1-B2',
  description: 'Great footballers communicate constantly during a match — calling for the ball, warning teammates, organising the defensive line, and motivating each other. This lesson teaches you the real language used on the pitch: short, direct, and instantly understood even in a noisy stadium.',
  heroImage: '/images/speaking-to-teammates-hero.png',

  warmUp: {
    questions: [
      'What do you think footballers shout to each other during a match? Give two or three examples.',
      'Have you ever been in a team sport where communication made a big difference? What happened?',
      'Do you think quieter players can be as effective as vocal leaders on the pitch? Why or why not?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Imperative and elliptical language — short, direct on-pitch communication',
    description: 'On a football pitch, there is no time for long sentences. Players use imperatives (commands), elliptical phrases (where words are left out), and one or two word calls. These short forms are grammatically correct — just compressed for speed and clarity in a loud environment.',
    positivePattern: 'IMPERATIVE: verb only, no subject. "Switch!" "Hold!" "Man on!" ELLIPTICAL: missing subject or verb. "Man on!" (= There is a man on you) / "Square!" (= Pass it square) / "Time!" (= You have time). DIRECT INSTRUCTION: "Play it simple." "Stay wide." "Hold the line." "Drop off." Note: imperatives are not rude in this context — they are expected and necessary.',
    positiveExample: '"Man on! Turn! Switch it — no, hold! Play simple. Time, time — you\'ve got time. Hold the line! Keeper\'s! Mine! Leave it! Square! Go — GO!"',
    negativePattern: 'Full sentences are too slow on the pitch. "Excuse me — could you possibly consider switching the ball to the right side?" would never work. On the pitch, economy of language is essential. Every word must earn its place.',
    negativeExample: '"I think there might be someone behind you" → "MAN ON!" / "Would you mind pressing the ball a little higher?" → "PRESS! PRESS NOW!" / "Perhaps you could try a simple pass" → "PLAY SIMPLE!"',
    positiveExamples: [
      { sentence: '"Man on!" — Warning that a defender is close behind the ball-carrier.', note: '(Short for "There is a man on you" — two words, maximum information, instant meaning)' },
      { sentence: '"Time!" — Telling a teammate they are not under pressure — they have space to turn.', note: '(Short for "You have time" — the opposite of "man on!")' },
      { sentence: '"Hold the line!" — Instruction to the defensive line not to step up or retreat — stay where they are.', note: '(An imperative with a direct object: "Hold [the line]!")' },
    ],
    negativeExamples: [
      { sentence: 'TOO SLOW: "I think you should consider passing it square to the left."', note: 'CORRECT ON-PITCH: "Square! Left! Go!" (three one-word calls)' },
      { sentence: 'TOO SLOW: "There is a defensive player positioned immediately behind you."', note: 'CORRECT ON-PITCH: "MAN ON! TURN!" (two calls, one second)' },
    ],
  },

  vocabulary: [
    {
      word: 'MAN ON',
      partOfSpeech: 'exclamation',
      definition: 'A warning call — there is an opponent directly behind or close to the ball-carrier. Used to tell a teammate they are under immediate pressure.',
      example: '"MAN ON! Don\'t turn — play it back to me!"',
      imageSlug: '/images/man-on.png',
    },
    {
      word: 'TIME',
      partOfSpeech: 'exclamation',
      definition: 'A call telling a teammate they are NOT under pressure — they have space and time to turn, look up, or hold the ball.',
      example: '"TIME! TIME! You\'ve got time — turn and look! Nobody\'s on you!"',
      imageSlug: '/images/time.png',
    },
    {
      word: 'SWITCH',
      partOfSpeech: 'verb',
      definition: 'An instruction to move the ball quickly to the other side of the pitch — changing the point of attack.',
      example: '"SWITCH! Switch it now — there\'s space on the left side!"',
      imageSlug: '/images/speaking-to-your-teammates-switch.png',
    },
    {
      word: 'KEEPER\'S',
      partOfSpeech: 'exclamation',
      definition: 'A call from the goalkeeper to teammates — claiming the ball as theirs. Tells all outfield players to leave the ball for the goalkeeper.',
      example: '"KEEPER\'S! Don\'t touch it! Mine!"',
      imageSlug: '/images/keepers.png',
    },
    {
      word: 'HOLD THE LINE',
      partOfSpeech: 'phrase',
      definition: 'An instruction to the defensive line to stay in position — not to step up or retreat, maintaining the offside line.',
      example: '"HOLD THE LINE! Don\'t step up — wait! Hold... hold... NOW squeeze!"',
      imageSlug: '/images/speaking-to-your-teammates-hold-the-line.png',
    },
    {
      word: 'PRESS NOW',
      partOfSpeech: 'phrase',
      definition: 'A command to begin pressing immediately — the trigger has been identified and the team must react right now.',
      example: '"PRESS NOW! Go! Close him down! Don\'t let him turn!"',
      imageSlug: '/images/press-now.png',
    },
    {
      word: 'SQUARE',
      partOfSpeech: 'adjective',
      definition: 'A call for a horizontal pass — passing the ball sideways across the pitch rather than forward.',
      example: '"Square! Square ball! Don\'t go forward — he\'s got it covered. SQUARE!"',
      imageSlug: '/images/square.png',
    },
    {
      word: 'DROP OFF',
      partOfSpeech: 'phrase',
      definition: 'An instruction to move backwards — to create space in front, to receive in a deeper position, or to hold a defensive shape.',
      example: '"Drop off! Drop off the defender — make space behind you for the run!"',
      imageSlug: '/images/speaking-to-your-teammates-drop-off.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CALL FOR IT',
      definition: 'To verbally ask a teammate for the ball — making yourself available as a passing option.',
      example: '"I was calling for it all the way — but he didn\'t hear me above the noise of the crowd."',
      imageSlug: '/images/call-for-it.png',
    },
    {
      phrase: 'SHOW FOR IT',
      definition: 'To move into a position where a teammate can pass to you — to present yourself as a passing option.',
      example: '"Show for it! Drop off the defender and show — I\'ll play it into your feet."',
      imageSlug: '/images/show-for-it.png',
    },
    {
      phrase: 'TRACK BACK',
      definition: 'To run back towards your own goal — often used for forwards and midfielders who need to help defend.',
      example: '"If we lose the ball high up the pitch, track back immediately — don\'t stand and watch."',
      imageSlug: '/images/speaking-to-your-teammates-track-back.png',
    },
    {
      phrase: 'STEP UP',
      definition: 'For the defensive line to move forward together — to play the offside trap or to press the ball higher.',
      example: '"Step up! Step up now! The line is too deep — bring it out! STEP UP!"',
      imageSlug: '/images/step-up-defence.png',
    },
    {
      phrase: 'PICK UP',
      definition: 'To mark a specific opponent — to take responsibility for tracking and staying close to a designated player.',
      example: '"Pick up their number ten! She\'s free — someone pick her up before she turns!"',
      imageSlug: '/images/speaking-to-your-teammates-pick-up.png',
    },
    {
      phrase: 'LEAVE IT',
      definition: 'A call telling a teammate not to play or touch the ball — allowing it to roll past or for another player to collect it.',
      example: '"LEAVE IT! Leave it! It\'s going out of play — don\'t touch it!"',
      imageSlug: '/images/leave-it.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key communication moments and phrases used in live football.',
    items: [
      {
        cue: '"Man on!" vs "Time!" — the most important calls',
        meaning: 'The two most critical information calls on a football pitch — one warns of danger, the other gives freedom.',
        usage: '"Man on!" = immediate danger behind the ball-carrier. They must not turn. Options: pass back, shield the ball, hold it up. "Time!" = the opposite — no pressure, the player can turn, look up, carry, or choose their next action calmly. These two calls are the foundation of on-pitch communication because they give the ball-carrier information they cannot see themselves. "She received the ball with her back to goal — her teammate called \'time!\' and she turned confidently, already knowing there was no defender close enough to tackle." Without these calls, players take unnecessary risks or make bad decisions based on incomplete information.',
        imageSlug: 'otp-man-on-time',
      },
      {
        cue: 'Organising the defensive line — language of the back four',
        meaning: 'Centre-backs constantly communicate to keep the defensive line coordinated and organised.',
        usage: 'The vocal centre-back is essential: "Hold the line! Step up! Drop off! Push out! Get tight! Stay on his shoulder!" These calls coordinate four players who must act as one unit. "Get tight" = close the distance between you and your opponent — don\'t let them turn. "Push out" = move forward to play attackers offside. "Drop off" = move backwards — do not step up. "Stay on his shoulder" = maintain close marking, just behind the attacker. "Squeeze! Squeeze!" = the whole line steps up together in response to a pressing trigger. The centre-back reading the game and communicating constantly is what keeps the defensive line from breaking apart.',
        imageSlug: 'otp-defensive-line-communication',
      },
      {
        cue: 'The goalkeeper\'s voice — organising from behind',
        meaning: 'Goalkeepers are the only players who can see the entire pitch in front of them — making them the most important communicators.',
        usage: 'Goalkeepers have a unique vantage point and must communicate constantly. Calls: "Keeper\'s!" (claiming the ball), "Away!" (clear the ball — don\'t try to be clever), "Hold!" (keep the ball in play — don\'t clear), "Out!" (the whole defensive line step out), "Back post!" (warning of a runner at the back post). "The goalkeeper was shouting \'out!\' — the whole line stepped forward. The attacker was caught offside by six yards." Goalkeepers who communicate well make their whole team better — they give the defence the information they need without time to turn and look.',
        imageSlug: 'otp-goalkeeper-communication',
      },
      {
        cue: 'Encouragement vs. instruction — register on the pitch',
        meaning: 'On-pitch communication is not just instructions — it also includes encouragement, celebration, and motivation.',
        usage: 'Two types of communication on the pitch: instructional ("Man on!" "Switch!" "Drop off!") and motivational ("Come on!" "That\'s it!" "Well played!" "Keep going!" "Stay together!"). Good team cultures mix both. "After losing a goal, the captain immediately gathered the team — \'heads up, heads up! Come on, it\'s not over. Stay together.\'" "That\'s it!" = you did the right thing — positive reinforcement. "Come on!" = general motivation. "Well played!" / "Good ball!" = specific praise for an action. "Next one!" = forget the mistake, focus on the next moment. These motivational calls are as important as tactical ones — a team that stops communicating after setbacks loses confidence.',
        imageSlug: 'otp-encouragement-instruction',
      },
      {
        cue: 'Calling for the ball — making yourself available',
        meaning: 'The verbal signal a player gives to ask for the ball — and the body language that goes with it.',
        usage: '"Show!" = move into a passing position and signal verbally. "I\'m here!" = call to announce your position. "Play it!" = ask for the ball now. Effective calling combines movement and voice: "She showed for it — dropped off the defender, called \'here!\' and received the ball to feet in space." Poor calling: standing still and calling without moving. The call without the movement is ignored — you must earn the ball by creating a passing angle. "Call AND show — don\'t just shout. Move first, then call." A player who calls constantly without creating space becomes background noise — teammates stop responding.',
        imageSlug: 'otp-calling-for-ball',
      },
      {
        cue: 'Language of transition — when the game changes direction',
        meaning: 'The calls players make at the moment of transition — winning or losing the ball — to reorganise immediately.',
        usage: 'Transition language is the fastest on the pitch — the team needs to reorganise in seconds. WINNING THE BALL (positive transition): "Go! Break! Quick! Forward! Release it!" LOSING THE BALL (negative transition / defensive transition): "Back! Track back! Press now! Don\'t let them play! Get back! Recover!" "The moment we lost possession, the captain screamed \'press now! press now!\' — the whole midfield closed down immediately." Good transition communication prevents teams from being caught in two minds — half the team pressing, half tracking back. Clear calls decide the transition instantly.',
        imageSlug: 'otp-transition-language',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Last week\'s game — we lost two goals because of communication errors. Sofia, in the first goal, nobody called [[\'man on\'|man-on:a warning that a defender is close behind the ball-carrier]]. What happened?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I received the ball thinking I had [[time:a call telling a teammate they are not under pressure]]. Nobody called. I turned and walked into the press. If someone had called [[\'man on\'|man-on:same]] — even once — I would not have turned. I would have [[played it simple:to pass the ball simply, avoiding risk]] straight back to the keeper.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Communication is information. Ronaldo — the second goal: the defensive line broke. Someone told the line to [[step up:for the defensive line to move forward together]] but not everyone heard.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I called [[\'hold the line!\'|hold the line:an instruction to the defensive line to stay in position]]. Two players stepped up, two stayed. The attacker was onside by a metre. We need one voice in those moments — the goalkeeper should call it from behind. They can see everything.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. From now — the goalkeeper calls [[\'out!\'|out:command for the defensive line to step up]] or [[\'hold!\'|hold:command to stay in position]] and the line follows that one voice. Outfield players confirm with [[\'step up!\'|step up:for the line to move forward]] or [[\'hold the line!\'|same]] but the goalkeeper\'s call is final. And when we win the ball — call [[\'switch!\'|switch:instruction to move the ball to the other side]] immediately. The other side is always open in transition.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And when I [[call for it:to verbally ask a teammate for the ball]], [[show for it:to move into a passing position]] first — movement creates the angle, the call tells them where I am. [[\'Leave it!\'|leave it:a call telling a teammate not to touch the ball]] when the ball is going out. [[\'Keeper\'s!\'|keepers:a call from the goalkeeper claiming the ball]] when it\'s mine. [[\'Pick up!\'|pick up:to mark a specific opponent]] their number ten — she was free three times yesterday. Simple words. Loud voice. Immediate response.',
    },
  ],

  matchingExercise: [
    { word: 'MAN ON', definition: 'A warning that a defender is close behind or near the ball-carrier' },
    { word: 'TIME', definition: 'A call telling a teammate they have space and are not under pressure' },
    { word: 'KEEPER\'S', definition: 'A goalkeeper\'s call claiming the ball — telling outfield players to leave it' },
    { word: 'HOLD THE LINE', definition: 'Instruction to the defensive line to stay in position — not step up or retreat' },
    { word: 'SWITCH', definition: 'Instruction to move the ball quickly to the other side of the pitch' },
    { word: 'DROP OFF', definition: 'Instruction to move backwards — to create space or receive in a deeper position' },
    { word: 'LEAVE IT', definition: 'A call telling a teammate not to touch or play the ball' },
    { word: 'PRESS NOW', definition: 'A command to begin pressing immediately — the trigger has been identified' },
  ],

  fillBlankExercise: [
    { before: '"', answer: 'Man on', after: '! Don\'t turn — play it back!" (warning call when a defender is right behind)' },
    { before: '"', answer: 'Time', after: '! You\'ve got time — turn and look up!" (telling a teammate they have space)' },
    { before: '"', answer: 'Keeper\'s', after: '! Don\'t touch it — mine!" (goalkeeper claiming the ball)' },
    { before: '"', answer: 'Switch', after: '! Switch it now — space on the left!" (instruction to change the point of attack)' },
    { before: '"', answer: 'Hold the line', after: '! Don\'t step up — wait for my call!" (keeping the defensive line in position)' },
    { before: 'She was always', answer: 'calling for it', after: '— constantly asking for the ball and showing into passing positions.' },
    { before: '"', answer: 'Pick up', after: 'their number ten! She\'s free — someone get on her now!"' },
    { before: '"', answer: 'Leave it', after: '! It\'s going out — don\'t touch it!" (letting the ball go out of play)' },
  ],

  multipleChoiceExercise: [
    {
      question: '"Man on!" — what grammatical structure is this, and what does it tell the ball-carrier?',
      options: [
        'A question — asking if there is a defender nearby. The ball-carrier should look to check.',
        'An elliptical exclamation — short for "There is a man on you." A warning of immediate danger.',
        'A command — telling a nearby defender to mark a specific opponent.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why do players use such short phrases ("Square!" "Go!" "Hold!") during a match rather than full sentences?',
      options: [
        'Because football players are not educated enough to use full sentences in pressured situations.',
        'Because on-pitch language must be immediate, loud, and instantly understood — full sentences are too slow.',
        'Because these are technical terms that only have short forms in football English.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Show for it!" — what should a player do when they hear this?',
      options: [
        'Look to see where the ball is and call louder to be heard by their teammate.',
        'Move into a position where a teammate can pass to them — create a passing angle.',
        'Show the referee they are available — raise their hand to indicate they are on the pitch.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Pick up their number ten!" — what does "pick up" mean in this context?',
      options: [
        'To lift the number ten off the ground if they have fallen.',
        'To take responsibility for marking a specific opponent — staying close to them.',
        'To intercept a pass intended for the number ten.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why is the goalkeeper considered the most important communicator on the pitch?',
      options: [
        'Because the goalkeeper is the captain in most teams and has the authority to organise.',
        'Because the goalkeeper can see the whole pitch in front of them — giving them a unique view of the game.',
        'Because goalkeepers have more time on the ball and can speak without being pressured.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Step up! Step up now!" — when would a defender call this?',
      options: [
        'When they want the team to play more ambitiously — take more risks in possession.',
        'When the defensive line should move forward together — to push the opposition back or play the offside trap.',
        'When an outfield player needs to take responsibility for an aerial ball from a corner.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Come on! Keep going! Stay together!" — what type of communication is this?',
      options: [
        'Instructional communication — giving tactical information about what to do next.',
        'Motivational communication — encouraging teammates after a setback or during a difficult moment.',
        'Warning communication — telling teammates about an immediate danger on the pitch.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Leave it!" — when would you call this?',
      options: [
        'When you want the ball for yourself and your teammate should not touch it.',
        'When the ball is going out of play or a goalkeeper is coming to claim it — the teammate should let it go.',
        'When a teammate is making a bad decision and should stop playing the ball.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each on-pitch communication sentence with the correct call or concept.',
    items: [
      {
        sentence: '"She received the ball with her back to goal and nobody called. She turned — straight into the press. If someone had called \'_____!\', she would have played it back safely."',
        options: ['Man on', 'Time', 'Switch'],
        correctIndex: 0,
        explanation: '"Man on" is correct — the call that warns a ball-carrier a defender is directly behind or close to them. "She received with her back to goal and turned into the press" = she did not know the defender was there. "If someone had called \'man on!\'" = third conditional (imagining what could have been different). "Time" is the opposite — it tells the player they have space, which would have been wrong here. "Switch" instructs a change of side — irrelevant when the player is under immediate personal pressure.',
      },
      {
        sentence: '"The goalkeeper screamed \'_____!\' from her line — the whole defensive block moved forward and the attacker was caught offside."',
        options: ['Out', 'Hold', 'Keeper\'s'],
        correctIndex: 0,
        explanation: '"Out!" is correct — the goalkeeper\'s call for the defensive line to step forward. "The whole block moved forward and the attacker was caught offside" = the offside trap was successfully executed after the goalkeeper called "out." "Hold" = the opposite — stay in position. "Keeper\'s!" = claiming the ball for themselves — not a defensive line instruction. On the pitch, "out!" from the goalkeeper is the clearest signal for a coordinated defensive line step — every defender hears the same call at the same time, enabling the synchronised movement that makes the offside trap work.',
      },
      {
        sentence: '"Stop just calling for it — you need to _____ first. Move into the space before you call, or your teammate can\'t play it to you."',
        options: ['show for it', 'track back', 'leave it'],
        correctIndex: 0,
        explanation: '"Show for it" is correct — moving into a passing position, creating a clear angle, before calling for the ball. The sentence makes the sequence explicit: "move into the space BEFORE you call." Calling without showing is ineffective — the ball-carrier cannot see a teammate who has not moved into a passing position. "Track back" = running back towards your own goal — defensive movement, not asking for the ball. "Leave it" = telling a teammate to leave the ball — the opposite of asking for it. "Show for it" = the complete concept of making yourself available: body movement + vocal call together.',
      },
      {
        sentence: '"After conceding the goal, the captain immediately gathered the team: \'Heads up! Come on! _____ — we\'ve got twenty minutes.\'"',
        options: ['Stay together', 'Man on', 'Switch'],
        correctIndex: 0,
        explanation: '"Stay together" is correct — motivational communication after a setback. The context: "heads up! come on!" + a call to maintain collective spirit. "Stay together" = don\'t fall apart individually, keep the team unity. "Man on" is a warning call — not motivational and not appropriate after conceding when no one is in possession. "Switch" is a tactical instruction for when the ball is in play. The motivational vocabulary sequence after conceding: "heads up" + "come on" + "stay together" + "next one" — each phrase manages the psychological response to setback, preventing the loss of confidence and communication that causes teams to concede again quickly.',
      },
      {
        sentence: '"Two defenders called \'step up!\' and two stayed back. The attacker was onside by a metre. The _____ must call the defensive line — one voice only."',
        options: ['goalkeeper', 'striker', 'midfielder'],
        correctIndex: 0,
        explanation: '"Goalkeeper" is correct — the goalkeeper is the most important defensive line organiser because they are the only player who can see the entire pitch in front of them, including the positions of all attackers and the defensive line simultaneously. "Two players stepped up and two stayed" = the classic consequence of multiple voices giving different calls. One voice prevents this split. The goalkeeper\'s position behind the play gives them the unique vantage point to call the line — outfield players are watching the ball, not the line as a whole. "Striker" = wrong position and wrong direction. "Midfielder" = faces the wrong way and has partial view only.',
      },
      {
        sentence: 'Which sequence of on-pitch calls best describes a DEFENSIVE TRANSITION — the moment a team loses possession?',
        options: [
          '"Go! Break! Release it! Switch!"',
          '"Get back! Press now! Track back! Don\'t let them play!"',
          '"Man on! Time! Hold the line! Square!"',
        ],
        correctIndex: 1,
        explanation: 'B is correct — all four calls are appropriate for a defensive transition (losing possession). "Get back!" = start moving towards your own goal. "Press now!" = the team tries to win back immediately with counter-pressing. "Track back!" = instruction to forward players to run back. "Don\'t let them play!" = general defensive urgency. A is a positive transition sequence (winning the ball and attacking): "Go! Break! Release it! Switch!" — all forward-moving calls. C mixes individual ball-carrier calls with defensive line calls — not a transition sequence. Defensive transitions need calls that switch the entire team\'s direction and mindset simultaneously.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use on-pitch communication vocabulary to give detailed and precise responses.',
      items: [
        {
          customerLine: 'Why is communication so important in football — and what happens when it breaks down?',
          options: [
            '"Communication is important because players need to know what each other are doing. When it breaks down, mistakes happen."',
            '"Communication on a football pitch is essentially an information system — and when that system fails, players make decisions based on incomplete information. The most dangerous information gap is behind the ball-carrier: a player with their back to goal cannot see the defender closing them. Without a \'man on!\' call, they might turn directly into the press. Without a \'time!\' call, they might panic and play the ball backwards when they had space to turn and attack. Defensively, the line breaks down when multiple players give conflicting calls — some step up, some hold. The attacker exploits the gap created by the disagreement. Research into professional teams consistently shows that the most organised defences are not always the most talented — they are the ones with the clearest communication protocols: one voice on the line, clear goalkeeper commands, and fast positive transition calls after winning the ball."',
            '"Communication helps coordination. When players stop talking, they lose awareness of each other\'s positions. \'Man on!\' and \'time!\' are the most important calls because they give the ball-carrier key information about the situation around them."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — frames communication as an information system and analyses specific breakdowns. "Information gap behind the ball-carrier" (the core reason), specific examples of what missing calls cause ("turn directly into the press," "panic and play backwards"), "multiple players give conflicting calls — some step up, some hold" (defensive line breakdown mechanism), "most organised defences are not always the most talented" (the key insight), "clear communication protocols: one voice on the line" (the solution). A is too vague. C is more specific but still misses the systematic analysis of what specifically breaks down and why.',
        },
        {
          customerLine: 'Explain the difference between "man on!" and "time!" — and why having both calls matters.',
          options: [
            '"\'Man on!\' means there is a defender close to you. \'Time!\' means you have space. Both calls give the ball-carrier important information about their situation."',
            '"\'Man on!\' and \'time!\' are opposites, but together they form a complete information system for the ball-carrier. \'Man on!\' tells the player: there is immediate danger — do not turn, do not hold, play it simple or shield the ball. \'Time!\' tells the player: you are safe — you can turn, look up, carry forward, or hold the ball to wait for a better option. Together, these two calls cover every situation: either you are under pressure or you are not. A player who hears neither call is flying blind — they must guess based on incomplete information. A player who hears the right call makes the right decision automatically. The calls also build trust over time: a team where \'man on!\' always means there IS a man on, and \'time!\' always means there IS time, develops a language reliability that allows individual players to play with more confidence."',
            '"The difference is: \'man on\' is a warning, \'time\' is permission. Both are equally important because without one or the other, the ball-carrier doesn\'t have full information. In a noisy stadium, these short clear calls must be heard above the crowd noise."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — explains the binary information system and adds the crucial insight about trust. "Together they form a complete information system" (the key concept), "either you are under pressure or you are not — two calls cover every situation" (the elegance of the system), "a player who hears the right call makes the right decision automatically" (the consequence of good communication), "language reliability that allows individual players to play with more confidence" (the long-term team effect of consistent communication). A captures the basics accurately but without analysis. C is reasonable but stops before the most important point about trust building.',
        },
        {
          customerLine: 'What makes a vocal leader on the pitch different from a player who just shouts a lot?',
          options: [
            '"A vocal leader says the right things at the right moments. A player who just shouts a lot becomes background noise that teammates ignore."',
            '"The distinction between a vocal leader and a loud player is precision, timing, and credibility. A vocal leader gives information that is correct — when they shout \'man on!\', there IS a man on. When they call \'time!\', there IS time. Over games and seasons, their calls become automatic signals that teammates trust instinctively. A player who shouts constantly but without accuracy becomes background noise — teammates stop processing their calls because the signal-to-noise ratio is too low. A vocal leader also reads the emotional temperature of the team: they switch from tactical calls to motivational calls when the team needs lifting, and back to tactical when the situation demands information. They do not shout about everything — they prioritise. And their body language matches their voice: they communicate with authority, not panic. The best captains and leaders are not necessarily the most technically gifted — they are the ones whose communication is trusted."',
            '"Vocal leaders communicate clearly and at the right moment. Too much shouting confuses teammates. A good leader chooses their words carefully — says only what needs to be said, when it needs to be said, with a calm and authoritative voice."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — the "signal-to-noise ratio" concept elevates this to genuine B2 analysis. "Precision, timing, and credibility" (three-part framework), "when they call \'man on!\' there IS a man on — credibility built over time" (why accuracy matters), "background noise — teammates stop processing their calls" (the signal-to-noise problem), "reads the emotional temperature — switches between tactical and motivational" (sophisticated leadership), "body language matches their voice — authority not panic" (non-verbal component), "best captains are not most technically gifted — they are trusted communicators" (the key insight). A and C capture the basic point but lack the depth of analysis.',
        },
        {
          customerLine: 'How should a team communicate differently in attack versus defence?',
          options: [
            '"In attack, players call for the ball and ask for switches. In defence, players warn about danger and organise the line."',
            '"Attacking and defensive communication serve fundamentally different functions and require different styles. In attack, communication is about creating options and exploiting space: \'show for it!\' (create a passing angle), \'switch!\' (the other side is open), \'time!\' (you can turn), \'go!\' (this is the moment to carry or pass forward). The calls are forward-looking and optimistic — creating possibility. In defence, communication is about information, coordination, and organisation: \'man on!\' (warning), \'hold the line!\' (coordination), \'step up!\' (line instruction), \'press now!\' (coordination of pressing). The calls are reactive and precise — responding to danger. The style also differs: defensive calls tend to be louder and shorter (maximum information, minimum time), while attacking calls can be slightly more varied — a player calling for the ball might also indicate what kind of pass they want (\'feet!\', \'into space!\', \'early!\'). The transition moments — winning or losing possession — require both, simultaneously, from different players."',
            '"The communication is different because the objectives are different. In attack you want to create — so calls help the ball-carrier find the best option. In defence you want to prevent — so calls organise the defensive structure and warn about danger."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a precise and comprehensive comparison. "Different functions, different styles" (framework), specific examples in each phase, "forward-looking and optimistic — creating possibility" vs. "reactive and precise — responding to danger" (the tone difference), "defensive calls louder and shorter — maximum information, minimum time" (the style difference), "attacking calls can be more varied — \'feet!\', \'into space!\', \'early!\'" (detail showing depth), "transition moments require both simultaneously from different players" (the most complex moment, identified correctly). A and C are both accurate at a surface level but lack the systematic analysis and the specific vocabulary detail that makes B a genuine B2 response.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three communication or grammar mistakes in this training session analysis. Find them.',
      dialogue: [
        { speaker: 'Coach', text: 'Yesterday\'s session showed three clear communication problems that we need to address before the next match.' },
        { speaker: 'Coach', text: 'First: when the goalkeeper calls \'keeper\'s!\', outfield players must leave the ball immediately. In the first drill, three players touched the ball after the call — causing a collision.' },
        { speaker: 'Coach', text: 'Second: the \'man on!\' call was used incorrectly — players shouted \'man on!\' when the ball-carrier actually had time and space to turn and play forward.' },
        { speaker: 'Coach', text: 'Third: the defensive line is using too many different voices. Yesterday I counted four players calling \'step up!\' and \'hold!\' at different times — causing the line to split.' },
        { speaker: 'Coach', text: 'The rule from tomorrow: the goalkeeper calls the line. They say \'out!\' or \'hold!\' and every defender follows that call, regardless of what other players are shouting.' },
        { speaker: 'Coach', text: 'Finally: when we win possession, the transition calls were too slow. The team must immediately call \'get back! track back!\' so we can press and recover shape at the same time.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: '\'man on!\' call was used incorrectly — players shouted \'man on!\' when the ball-carrier actually had time and space',
          correction: 'The \'man on!\' call was used in the WRONG situation — "time!" should have been called instead',
          explanation: '"Man on!" means there IS a defender close — it is a warning of immediate danger. Using it when the ball-carrier "had time and space" is the opposite of correct: it was a false alarm that would have made the ball-carrier panic unnecessarily, play backwards, and miss an attacking opportunity. The correct call when a player has time and space is "Time!" The communication breakdown described is the misuse of "man on!" in a situation that required "time!" — not just that it was "used incorrectly" (vague) but that the wrong call was made, with the wrong result: the ball-carrier responded to false information.',
        },
        {
          lineIndex: 5,
          incorrectText: '"get back! track back!" so we can press and recover shape at the same time',
          correction: '"Go! Press now!" for immediate counter-pressing, OR "Get back! Track back!" for defensive recovery — not both simultaneously',
          explanation: 'You cannot "press and recover shape at the same time" — these are contradictory instructions. "Press now!" = go forward, close down the ball-carrier, try to win it back. "Get back! Track back!" = move backwards, recover defensive shape, absorb the opposition attack. Both cannot happen simultaneously — the team must choose one response. If the pressing trigger exists (they lost the ball in an area where gegenpressing is viable), call "press now!" If the press is not on, call "get back!" Telling the team to do both at once causes exactly the confusion the coach is trying to solve — half the team presses, half tracks back, creating the same line-splitting problem described earlier.',
        },
        {
          lineIndex: 4,
          incorrectText: 'They say \'out!\' or \'hold!\' and every defender follows that call, regardless of what other players are shouting.',
          correction: 'Correct as stated — BUT "out!" should have been used instead of "step up!" throughout: these are equivalent calls and the difference should be noted for consistency',
          explanation: 'The coach uses "step up!" in line 4 and "out!" in line 5 for the same instruction — the defensive line moving forward. Both mean the same thing, but using both terms interchangeably can itself be a source of confusion. In a real training environment, establishing one consistent term is better than two. "Out!" (goalkeeper\'s call) and "step up!" (outfield player\'s call) serve the same tactical purpose — but when the coach is establishing a clear protocol around the goalkeeper\'s voice being the authority, using "step up!" in one sentence and "out!" in the next undermines the clarity they are trying to create. Communication protocols require consistency — even in the instruction about consistency.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each analysis of on-pitch communication using precise vocabulary.',
      items: [
        {
          customerLine: 'Explain why communication quality often drops in the last 20 minutes of a match — and what can be done about it.',
          salespersonStart: 'Communication fatigue is real — and it is one of the least discussed factors in late-game defensive errors —',
          suggestedCompletion: 'Communication fatigue is real — and it is one of the least discussed factors in late-game defensive errors — because players are focusing all available energy on physical output and tactical execution, with less left for the cognitive load of communicating. Shouting on a football pitch, at the volume required to be heard above crowd noise and physical exertion, takes energy. The "man on!" and "time!" calls that were automatic in the first half become rarer as the game progresses and tiredness sets in. The consequence is that decisions made in the final twenty minutes are based on less information — the ball-carrier is more likely to be surprised, the defensive line is less coordinated, and motivational calls drop off at exactly the moment the team needs them most. The solution is making communication habitual through training: if calling is trained until it becomes automatic, it requires less conscious effort to maintain. Teams that communicate well in the 85th minute have practised communication as a skill, not just a natural behaviour.',
        },
        {
          customerLine: 'How does building a "communication culture" in a team improve performance over a full season?',
          salespersonStart: 'A communication culture is not built in one training session — it develops over months and becomes a competitive advantage —',
          suggestedCompletion: 'A communication culture is not built in one training session — it develops over months and becomes a competitive advantage — because the value of communication compounds over time. In the early weeks, calls like "man on!" or "time!" require conscious decision-making: the player must choose to call, shout loud enough, and time it correctly. Over a season of playing together, these calls become automatic — part of the team\'s shared language that operates below conscious thought. Teammates develop "call recognition": they know who is most reliable when they call "time!" and whose "man on!" is always accurate. This trust increases the speed of their response — they react immediately without questioning the call. By the end of a season, a team with a strong communication culture is effectively extending each player\'s awareness beyond what they can physically see. The cumulative effect — hundreds of correct calls in hundreds of moments — produces fewer defensive errors, better possession decisions, and faster transitions than individual talent alone can explain.',
        },
        {
          customerLine: 'Describe the role of the captain in organising communication on the pitch during a match.',
          salespersonStart: 'The captain\'s communication role is distinct from their motivational role — and the best captains do both simultaneously —',
          suggestedCompletion: 'The captain\'s communication role is distinct from their motivational role — and the best captains do both simultaneously — switching between tactical and emotional registers as the moment demands. Tactically, the captain is the primary organiser: calling the press trigger, managing the defensive line from midfield, deciding whether to step up or hold in transition moments, and calling the switch when possession has been established. These are all informational calls — precise, short, immediate. Emotionally, the captain reads the team\'s confidence and intervenes when it needs restoring: "Come on! Heads up! Stay together!" after conceding, "Next one! Keep going!" after a missed chance. The captain also manages the match\'s psychological narrative: who is on a yellow card, who is tired and making mistakes, whether the team is up or down on the day, and what the team needs to hear — not just see — to maintain performance. The best captains are not necessarily the loudest. They are the most trusted, because every call they make has proven to be reliable.',
        },
        {
          customerLine: 'How should a new player joining a team approach learning the team\'s communication system?',
          salespersonStart: 'Joining an established team means stepping into a communication culture that already exists — and the adjustment process is both linguistic and social —',
          suggestedCompletion: 'Joining an established team means stepping into a communication culture that already exists — and the adjustment process is both linguistic and social — because different teams use slightly different call words, different signals, and different protocols even for the same situations. A new player may call "time!" when the established team uses "man on!" for a different purpose, or may have different habits around who calls the defensive line. The first step is listening — understanding the existing language before imposing their own. In the first training sessions, the new player should focus on hearing what calls are used, by whom, and when — building a map of the team\'s communication system rather than introducing their own. Once they understand the system, they can start contributing to it: calling reliably, using the team\'s terms, and gradually adding their voice to the culture. The player who arrives in a new team and immediately tries to change the communication system — however good their intentions — creates confusion. The player who listens first and speaks second integrates fastest.',
        },
      ],
    },
  },
};
