import { Lesson } from '@/types/lesson';

export const pressingTriggers: Lesson = {
  slug: 'pressing-triggers',
  title: 'Pressing Triggers',
  subtitle: 'When and why to press — conditional language for high-intensity defending',
  level: 'B1-B2',
  description: 'Elite pressing is not random — it is triggered by specific moments and cues. This lesson teaches you the conditional language of pressing: "If the keeper plays long... when the full-back receives under pressure... as soon as the ball goes backwards..." You will analyse how teams use pressing triggers to win the ball high up the pitch.',
  heroImage: '/images/pressing-triggers-hero.png',

  warmUp: {
    questions: [
      'Which football teams do you think press the hardest? What makes their pressing so effective?',
      'When you watch a team win the ball high up the pitch, what do you think triggered the press at that exact moment?',
      'Do you think pressing is mainly about fitness, tactical intelligence, or both? Why?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: First and zero conditional — trigger language for pressing',
    description: 'Pressing in football is all about conditions and triggers: "IF this happens, THEN we press." This is the language of the first conditional (real possibility) and zero conditional (general truth/rule). These structures are essential for describing tactical systems that respond to specific cues.',
    positivePattern: 'ZERO CONDITIONAL (rule/habit): If + present simple, present simple. "If the goalkeeper receives the ball, the striker presses immediately." FIRST CONDITIONAL (specific possibility): If + present simple, will/can + infinitive. "If the full-back is facing backwards, we can trap them on the touchline." TRIGGER PHRASES: "as soon as," "the moment," "whenever," "once" + present simple. "As soon as the ball goes backwards, the whole line steps up."',
    positiveExample: '"If the centre-back plays a back-pass, the striker triggers the press by closing down the goalkeeper. As soon as the striker moves, the midfield presses the nearest player. Once the press is triggered, every player has a responsibility."',
    negativePattern: 'Do NOT use "if + will" in the conditional clause. "If the goalkeeper WILL receive" is wrong. Do NOT use past tense for real conditions. "If the full-back WAS facing backwards, we pressed" — wrong for describing rules and systems.',
    negativeExample: 'WRONG: "If the full-back will be under pressure, we will press." → RIGHT: "If the full-back is under pressure, we press." WRONG: "As soon as the ball went backwards, the whole line stepped up." (rule) → RIGHT: "As soon as the ball goes backwards, the whole line steps up."',
    positiveExamples: [
      { sentence: '"If the goalkeeper plays a short pass to a centre-back, the striker triggers immediately." (zero conditional — a rule)', note: '(Both clauses in present simple — a general rule/habit of the system)' },
      { sentence: '"If the centre-back receives under pressure, the press can be completed successfully." (first conditional — real scenario)', note: '("Can" suggests strong possibility, not certain outcome)' },
      { sentence: '"As soon as the press is triggered, every player within ten metres must engage." (trigger phrase)', note: '("As soon as" = the exact moment — immediate response required)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "If the keeper will pass short, we will press them."', note: 'CORRECT: "If the keeper passes short, we press them." (zero conditional)' },
      { sentence: 'WRONG: "Whenever they played a back-pass, the whole team stepped up." (describing a system)', note: 'CORRECT: "Whenever they play a back-pass, the whole team steps up." (zero conditional — a system rule)' },
    ],
  },

  vocabulary: [
    {
      word: 'PRESSING TRIGGER',
      partOfSpeech: 'noun',
      definition: 'A specific moment or action that starts an organised team press — the signal for the whole team to begin pressing together.',
      example: '"Their main pressing trigger is the back-pass — the moment the ball goes to the goalkeeper, all ten outfield players press simultaneously."',
      imageSlug: '/images/pressing-trigger.png',
    },
    {
      word: 'GEGENPRESSING',
      partOfSpeech: 'noun',
      definition: 'Counter-pressing — pressing immediately after losing the ball, before the opposition can organise. Developed and popularised by Jürgen Klopp.',
      example: '"Their gegenpressing is relentless — within three seconds of losing the ball, all nearby players press the ball-carrier intensely."',
      imageSlug: '/images/gegenpressing.png',
    },
    {
      word: 'PRESS RESISTANCE',
      partOfSpeech: 'phrase',
      definition: 'A player\'s ability to keep the ball under pressure — using body position, first touch, and awareness to maintain possession when opponents press.',
      example: '"His press resistance is exceptional — even when two players press him, he shields the ball and finds a teammate without losing possession."',
      imageSlug: '/images/press-resistance.png',
    },
    {
      word: 'TRAP',
      partOfSpeech: 'verb',
      definition: 'To force the ball-carrier into a position with no easy pass — usually against the touchline or into a corner — limiting their options.',
      example: '"If the full-back receives with their back to goal, we can trap them on the touchline — force them backwards with no forward pass available."',
      imageSlug: '/images/trap.png',
    },
    {
      word: 'COUNTER-PRESS',
      partOfSpeech: 'verb / noun',
      definition: 'To press immediately after losing possession — trying to win the ball back before the opponent can build an attack.',
      example: '"As soon as we lost the ball, the front three counter-pressed immediately — forcing a mistake before the opposition could play forward."',
      imageSlug: '/images/counter-press.png',
    },
    {
      word: 'HIGH BLOCK',
      partOfSpeech: 'phrase',
      definition: 'A defensive strategy where the whole team presses high up the pitch, close to the opponent\'s goal — designed to win the ball in the opponent\'s half.',
      example: '"Their high block is aggressive — they press from the front, keeping the opposition\'s defenders under constant pressure even when the opposition has possession."',
      imageSlug: '/images/high-block.png',
    },
    {
      word: 'INTENSITY',
      partOfSpeech: 'noun',
      definition: 'The energy and aggression with which a team presses — how hard and fast they work to win the ball back.',
      example: '"Their pressing intensity drops in the final twenty minutes — physically they cannot sustain that level of aggression for the whole game."',
      imageSlug: '/images/intensity.png',
    },
    {
      word: 'PRESS OFF / PRESS ON',
      partOfSpeech: 'phrase',
      definition: 'Commands used by a manager or player to signal when the team should press ("press on") or drop back and hold shape ("press off").',
      example: '"The goalkeeper shouts \'press off\' when the opposition are building confidently in their own half — no point pressing if there is no trigger."',
      imageSlug: '/images/press-off.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CLOSE DOWN',
      definition: 'To press an opponent by moving quickly towards them, reducing their time and space on the ball.',
      example: '"As soon as the centre-back receives, the striker closes them down immediately — giving them no time to look up and play forward."',
      imageSlug: '/images/close-down.png',
    },
    {
      phrase: 'WIN BACK',
      definition: 'To regain possession of the ball after losing it — often through pressing or tackling.',
      example: '"If we can win the ball back within five seconds of losing it, the opposition\'s structure is still disorganised and we can attack quickly."',
      imageSlug: '/images/win-back.png',
    },
    {
      phrase: 'SQUEEZE UP',
      definition: 'For the defensive line to move forward together — reducing space between lines and compressing the pitch vertically.',
      example: '"As soon as the press is triggered, the defensive line must squeeze up — closing the space between the midfield and the defenders."',
      imageSlug: '/images/squeeze-up.png',
    },
    {
      phrase: 'SPRING THE PRESS',
      definition: 'For an opposition player to escape the press by playing a quick pass through or around the pressing players.',
      example: '"If the press is not coordinated, one quick pass can spring the press and leave the team exposed behind the pressing line."',
      imageSlug: '/images/spring-the-press.png',
    },
    {
      phrase: 'HOLD OFF',
      definition: 'To delay pressing — staying close to an opponent without fully committing, waiting for the right moment.',
      example: '"The forward holds off the press when the opposition have numerical superiority in that zone — closing the angle without diving in."',
      imageSlug: '/images/hold-off.png',
    },
    {
      phrase: 'ENGAGE',
      definition: 'To commit to pressing — moving directly at the ball-carrier with intent to win the ball.',
      example: '"Once the pressing trigger occurs, every player within ten metres must engage — hesitation breaks the whole structure of the press."',
      imageSlug: '/images/engage.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key pressing triggers and concepts used in modern tactical analysis.',
    items: [
      {
        cue: 'The back-pass trigger',
        meaning: 'When the ball goes backwards — to a centre-back or goalkeeper — the press is triggered immediately.',
        usage: 'The back-pass is the most common pressing trigger because it represents a moment where the opposition is moving away from goal and, often, under slight pressure. "Their trigger is simple: if the ball goes backwards at any point, press immediately. The goalkeeper and centre-backs receive the ball facing their own goal — they are under spatial pressure. If the keeper plays long in response, that suits us — we win second balls. If they play short under pressure, we can intercept." Managers often drill this with a simple rule: "As soon as the ball goes back, everyone goes forward."',
        imageSlug: 'otp-backpass-trigger',
      },
      {
        cue: '"Three-second rule" — gegenpressing',
        meaning: 'The principle that the three seconds immediately after losing the ball are the best opportunity to win it back — when the opposition is least organised.',
        usage: 'Jürgen Klopp popularised the "three-second rule": "If we can counter-press within three seconds of losing the ball, the opposition cannot set up — we can win it back before they have a chance to build." The principle: when you lose the ball, every nearby player presses immediately, not waiting for the manager\'s signal. "The moment we lose possession, the nearest three or four players press the ball-carrier. As soon as we lose it, we try to win it back." This creates chaos for the opposition — if they cannot progress within three seconds, the press continues.',
        imageSlug: 'otp-three-second-rule',
      },
      {
        cue: 'The body orientation trigger',
        meaning: 'When an opponent receives with their back to goal or body turned away — they cannot play forward easily, making them a good pressing target.',
        usage: '"Body orientation triggers" are sophisticated pressing cues. If a centre-back receives facing sideways or backwards, they have limited forward options — press now. If they receive facing forward, they can play through the press more easily — hold off. "If the full-back receives facing the touchline — back to goal — we trigger immediately. We can trap them on the line. If the centre-back receives already facing forward, we hold off and reorganise." This intelligence separates elite pressing teams from lower-quality pressing: not pressing every touch, but pressing the right touches.',
        imageSlug: 'otp-body-orientation',
      },
      {
        cue: 'Pressing traps — the offside line connection',
        meaning: 'The defensive line stepping up at the moment of the press — turning the press into a potential offside trap.',
        usage: 'Pressing and the defensive line are connected in a high block. "As soon as the press is triggered, the defensive line squeezes up — if the ball goes long, the opposition striker may be offside because the line has stepped up. We either win the ball through the press, or we win it through the offside trap." This coordination requires trust and communication — the line cannot step up if they cannot see the trigger. "Squeeze up! Squeeze!" is a common shout when the press is triggered.',
        imageSlug: 'otp-pressing-trap',
      },
      {
        cue: 'PPDA — passes per defensive action',
        meaning: 'A statistical measure of pressing intensity — how many passes the opposition is allowed before the pressing team makes a defensive action.',
        usage: 'PPDA (passes per defensive action) is the standard statistical measure of pressing intensity. A low PPDA = the team allows fewer passes before pressing = high pressing intensity. A high PPDA = more passive. "Their PPDA was 6.2 last season — one of the highest pressing intensities in the league. For context, a PPDA of 10 is considered average. Below 7 means the team is pressing extremely hard across the game." PPDA is useful for comparing pressing intensity across teams without watching every match — it quantifies the pressing structure.',
        imageSlug: 'otp-ppda',
      },
      {
        cue: '"Pressing shadow" — cutting passing lanes',
        meaning: 'The body position of the pressing player that blocks a specific passing lane — using their shadow to prevent the easy pass.',
        usage: 'A pressing shadow is the area behind the pressing player that is blocked to the ball-carrier. "When the striker closes down the centre-back, they do not just run at the ball — they position their body to cut the pass to the nearest midfielder. The centre-back\'s easiest pass is blocked by the pressing shadow." The pressing shadow means the pressing team does not need to be fastest — they need to be smartest. "Press from the angle that blocks the easy pass, not just in a straight line at the ball. Your shadow does the work."',
        imageSlug: 'otp-pressing-shadow',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'There is no value in pressing randomly. Every press needs a [[pressing trigger:a specific moment that starts an organised team press]]. Ours is the back-pass. If the ball goes backwards — to a centre-back or goalkeeper — we press immediately. Sofia — what do you do the moment the ball goes back?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I [[close down:to press an opponent by moving quickly towards them]] immediately — but from the angle that cuts the pass to their midfielder. I create a [[pressing shadow:body position that blocks a specific passing lane]]. If the keeper [[tries to play short:same]], I have already blocked that option. If they play long, Ronaldo and I win the [[second ball:same]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. And as soon as Sofia moves, the whole midfield [[squeezes up:for the defensive line to move forward, reducing space]]. Ronaldo — what is the second trigger we use?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Body orientation. If the full-back receives facing the touchline — back to goal — we trigger the press and [[trap:to force the ball-carrier into a position with no easy pass]] them on the line. But if they receive already facing forward, we [[hold off:to delay pressing, waiting for the right moment]] and wait for a better [[pressing trigger:same]]. Committing when they face forward just gets us [[spring the press:for an opposition player to escape the press]] — we end up exposed.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And the third trigger — [[gegenpressing:counter-pressing immediately after losing the ball]]. The moment we lose possession, the three nearest players [[counter-press:to press immediately after losing possession]] immediately. Three seconds. Within three seconds, if we can [[win back:to regain possession through pressing]] the ball, they have no time to organise. We attack before their shape is set.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The hardest part is the [[intensity:the energy and aggression with which a team presses]] in the final twenty minutes. If we [[hold a high block:press high up the pitch]] for ninety minutes, by the end our pressing is loose — triggers are missed, we press at wrong moments. Managing pressing [[intensity:same]] across ninety minutes is as important as the triggers themselves.',
    },
  ],

  matchingExercise: [
    { word: 'PRESSING TRIGGER', definition: 'A specific moment or action that starts an organised team press' },
    { word: 'GEGENPRESSING', definition: 'Counter-pressing immediately after losing the ball, before the opposition can organise' },
    { word: 'PRESS RESISTANCE', definition: 'A player\'s ability to keep the ball under pressure from opponents pressing' },
    { word: 'TRAP', definition: 'To force the ball-carrier against the touchline with no easy pass' },
    { word: 'HIGH BLOCK', definition: 'Pressing high up the pitch, close to the opponent\'s goal' },
    { word: 'PRESSING SHADOW', definition: 'Body position that blocks a specific passing lane while pressing' },
    { word: 'PPDA', definition: 'A statistical measure of pressing intensity — passes per defensive action' },
    { word: 'SPRING THE PRESS', definition: 'For an opposition player to escape the press with a quick pass' },
  ],

  fillBlankExercise: [
    { before: 'Their main', answer: 'pressing trigger', after: 'is the back-pass — as soon as the ball goes to the keeper, all ten players press.' },
    { before: 'Within three seconds of losing possession, they', answer: 'counter-press', after: '— winning the ball back before the opposition can play forward.' },
    { before: 'If the full-back receives with their back to goal, we can', answer: 'trap', after: 'them on the touchline with no forward pass available.' },
    { before: 'As soon as the press is triggered, the defensive line must', answer: 'squeeze up', after: '— reducing the space between the lines.' },
    { before: 'He', answer: 'closed down', after: 'the goalkeeper from the angle that blocked the short pass to the centre-back.' },
    { before: 'Their', answer: 'press resistance', after: 'is exceptional — even under two players pressing, they maintain possession.' },
    { before: 'If the press is not coordinated, one quick pass can', answer: 'spring the press', after: 'and leave us exposed behind the line.' },
    { before: 'Their', answer: 'gegenpressing', after: 'is relentless — within three seconds of losing the ball, the nearest players all engage immediately.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "pressing trigger"?',
      options: [
        'Any moment when a player is under pressure and can be pressed.',
        'A specific moment or cue that signals the whole team to begin pressing together.',
        'A manager\'s instruction to press harder in the final minutes of a game.',
      ],
      correctIndex: 1,
    },
    {
      question: '"If the goalkeeper plays short, the striker triggers the press." What type of conditional is this?',
      options: [
        'First conditional — describing one specific possible future event.',
        'Zero conditional — describing a general rule or habit of the system.',
        'Second conditional — describing an unlikely or hypothetical situation.',
      ],
      correctIndex: 1,
    },
    {
      question: '"As soon as the ball goes backwards, the whole line steps up." What does "as soon as" signal?',
      options: [
        'A gradual process — the line steps up slowly after the ball goes back.',
        'An approximate time — the line steps up sometime after the ball goes back.',
        'An immediate trigger — the line steps up at the exact moment the ball goes back.',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "gegenpressing"?',
      options: [
        'A defensive system where the team presses high up the pitch from kick-off.',
        'Counter-pressing immediately after losing the ball — before the opposition can organise.',
        'A pressing system designed specifically for the final fifteen minutes of a game.',
      ],
      correctIndex: 1,
    },
    {
      question: '"If the full-back receives facing the touchline, we trap them." Why is body orientation a pressing trigger?',
      options: [
        'Because a player facing the touchline is always tired — easier to press.',
        'Because a player facing backwards or sideways has limited forward options — more likely to be pressed successfully.',
        'Because the touchline is narrow and there is less space for the full-back to run.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "pressing shadow"?',
      options: [
        'The area directly behind the pressing player where a pass is blocked.',
        'The shadow cast on the pitch when a player presses under floodlights.',
        'The area around the goalkeeper that the pressing player covers.',
      ],
      correctIndex: 0,
    },
    {
      question: '"He held off rather than engaging." What does "hold off" mean?',
      options: [
        'He stopped pressing entirely and retreated to his defensive position.',
        'He pressed the opponent while holding his shirt to slow them down.',
        'He stayed close to the opponent without fully committing — waiting for a better moment.',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does a LOW PPDA figure indicate about a team?',
      options: [
        'The team defends passively — allowing many passes before pressing.',
        'The team presses with high intensity — allowing few passes before making a defensive action.',
        'The team is poor at pressing — they make too many defensive actions without winning the ball.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each pressing analysis sentence with the correct conditional or tactical term.',
    items: [
      {
        sentence: '"_____ the ball goes backwards to the goalkeeper, the striker triggers the press immediately." (zero conditional — a system rule)',
        options: ['If', 'When if', 'In case'],
        correctIndex: 0,
        explanation: '"If" is correct for the zero conditional — describing a rule or general truth of the pressing system. "If + present simple, present simple" = zero conditional. Both "if" and "when" work in zero conditionals (both signal "every time this condition exists"), but "if" is more formal and more commonly used in tactical descriptions. "When if" is grammatically impossible — never use both together. "In case" means "as a precaution" — not for rules or triggers. "If the ball goes backwards, press" = a system rule: every time that condition occurs, this is what happens.',
      },
      {
        sentence: '"As _____ as the pressing trigger is activated, every player within ten metres must engage immediately."',
        options: ['soon', 'fast', 'quick'],
        correctIndex: 0,
        explanation: '"As soon as" is the fixed phrase — it means "at the exact moment" and requires the word "soon." "As fast as" = at the same speed as something else — wrong meaning here. "As quick as" is informal English and means "at the same speed" — not correct. "As soon as" is the standard trigger phrase in tactical English: "as soon as the back-pass is played," "as soon as the ball goes backwards," "as soon as the line is triggered." It signals immediacy — the action must happen right then, not shortly after.',
      },
      {
        sentence: '"If the opposition can _____ our press with one quick pass, we are exposed behind the pressing line."',
        options: ['spring', 'break', 'escape'],
        correctIndex: 0,
        explanation: '"Spring the press" is the fixed tactical phrase — not "break the press" or "escape the press." "Spring" in this context means to release suddenly — one quick pass releases the pressure of the entire press, like a spring releasing. "Break" and "escape" are more general English words that might be understood but are not the correct tactical phrase. "Spring the press" has become standard analytical vocabulary. "If the press can be sprung, we are in trouble" — the consequence is serious: the team is now out of position, pushed forward, with space behind them.',
      },
      {
        sentence: '"Their _____ is 6.2 — one of the highest pressing intensities in the league this season."',
        options: ['PPDA', 'gegenpressing', 'high block'],
        correctIndex: 0,
        explanation: '"PPDA" (passes per defensive action) is the statistical measure of pressing intensity — expressed as a number. A lower PPDA = higher pressing intensity. 6.2 means the team allows an average of 6.2 passes before making a defensive action — very high intensity. "Gegenpressing" is a pressing style, not a number. "High block" is a positional pressing strategy, not a measurable statistic. PPDA allows analysts to compare pressing intensity objectively across teams, formations, and leagues — it is the key pressing metric in modern analytics.',
      },
      {
        sentence: '"She positioned her body at an angle to create a _____ — blocking the pass to the right midfielder while closing down the centre-back."',
        options: ['pressing shadow', 'pressing trigger', 'trap'],
        correctIndex: 0,
        explanation: '"Pressing shadow" is correct — the specific tactical concept of using body angle to block a passing lane while pressing. The player does not run directly at the ball but at the angle that creates a shadow over the easiest pass. "Pressing trigger" is what starts the press, not a body position. "Trap" is forcing an opponent to the touchline — a different concept, not a body angle. The pressing shadow is a sophisticated pressing concept: the player\'s body position is doing tactical work even before they reach the ball-carrier.',
      },
      {
        sentence: 'Which sentence uses CORRECT conditional language for describing a pressing system?',
        options: [
          '"If the full-back will receive under pressure, we will trigger the press immediately."',
          '"Whenever the ball goes backwards, we press immediately — no exceptions, no hesitation."',
          '"As soon as the ball went backwards, the whole line had stepped up and pressed."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — "whenever + present simple, present simple" is a zero conditional variation, perfect for describing a system rule with no exceptions. "No exceptions, no hesitation" reinforces the rule-like quality. A has "will" in the conditional clause — "if the full-back WILL receive" is wrong; never use "will" in an "if" clause in zero or first conditionals. C uses past tense ("went backwards," "had stepped up") — describing a rule or system always uses present simple to show it is ongoing, not a past event. System rules are described with present tense because they are always true.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use pressing trigger and conditional language to give detailed tactical responses.',
      items: [
        {
          customerLine: 'Explain what a pressing trigger is and why pressing must be triggered rather than continuous.',
          options: [
            '"A pressing trigger is the moment you start pressing. Teams cannot press all the time because it is too tiring."',
            '"A pressing trigger is a specific pre-agreed moment or cue — a back-pass, a miscontrol, a specific body orientation — that signals the whole team to press simultaneously. Teams cannot press continuously because the energy cost is enormous, and random pressing without triggers is easily played through: if one player presses while others hold off, the opposition simply passes around the pressing player and gains a numerical advantage. Triggers ensure the entire team presses at the same moment — creating a coordinated overload that is much harder to escape. As soon as the trigger occurs, all nearby players engage; if the trigger is not present, the team holds shape and waits."',
            '"A pressing trigger is when the manager signals the press. Teams need a trigger so players know when to press and when to hold their position."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — defines precisely, explains the mechanism, and gives the tactical rationale. "Pre-agreed moment or cue" (precise definition), "back-pass, miscontrol, body orientation" (concrete examples), "one player presses while others hold off" (what random pressing looks like), "passes around the pressing player and gains a numerical advantage" (the consequence), "entire team presses at the same moment — coordinated overload" (why triggers work). A is too simple. C implies only the manager signals the press — in modern systems, triggers are automatic responses, not individual manager instructions.',
        },
        {
          customerLine: 'Describe how gegenpressing is different from a standard pressing system.',
          options: [
            '"Gegenpressing means pressing immediately after you lose the ball. A normal pressing system means pressing when the opposition has the ball."',
            '"Gegenpressing is fundamentally different from an organised pressing system because it is triggered by ball loss rather than by opposition action. In a standard pressing system, the team has designated triggers — back-passes, body orientation cues, specific zones — and presses in an organised, pre-planned structure. Gegenpressing operates on a different principle: the three seconds immediately after losing the ball are uniquely valuable because the opposition are still disorganised — they just won the ball and have not yet set their shape. The nearest three or four players counter-press immediately, with maximum intensity, trying to win it back in that narrow window. If they succeed, the opposition never had the chance to organise an attack. Jürgen Klopp described his best chance-creator as gegenpressing itself — more valuable than any player."',
            '"Gegenpressing is a German word for pressing hard. Klopp used it at Liverpool and it means pressing with high intensity across the whole match."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — makes the key distinction clear and uses precise language. "Triggered by ball loss rather than opposition action" (the fundamental difference), "three seconds immediately after losing the ball" (the window), "opposition are still disorganised — they just won the ball" (why it works), "nearest three or four players counter-press immediately" (the mechanism), "Klopp described his best chance-creator as gegenpressing" (a famous quote that demonstrates depth of knowledge). A is accurate but superficial. C mistakenly says gegenpressing = pressing hard all game — it is specifically triggered by ball loss, not a general pressing style.',
        },
        {
          customerLine: 'How does pressing shadow body position work — and why is the angle of the press important?',
          options: [
            '"The pressing shadow is about blocking the pass. If you press from an angle, you block the easy pass with your body."',
            '"The pressing shadow is the area behind the pressing player that is blocked to the ball-carrier — and it makes the angle of the approach as important as the speed of it. If a striker closes down a centre-back in a straight line, the centre-back can simply play to either side — the pressing player has created no shadow over either passing lane. But if the striker approaches from a slight angle, they place their body between the centre-back and the nearest midfielder — that passing lane is blocked by their position. The centre-back\'s easiest pass no longer exists. This forces them to play backwards, to the goalkeeper, or to take a first touch away from goal — each of which may trigger a secondary press. A well-angled approach with a good pressing shadow does more work than a faster but poorly-angled run."',
            '"Pressing angle is important because if you press from the wrong angle, the player can just pass the ball past you. The pressing shadow blocks one side of their passing options."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — explains the mechanism clearly and precisely. "Area behind the pressing player that is blocked to the ball-carrier" (definition of pressing shadow), "straight line" vs "approach from angle" (the critical comparison), "places their body between the centre-back and the nearest midfielder" (exactly how it works), "play backwards, to the goalkeeper, or take a first touch away from goal" (the consequences of a good pressing shadow), "well-angled approach does more work than a faster but poorly-angled run" (the key insight). C is partially correct but lacks the detail and precision of B.',
        },
        {
          customerLine: 'What happens tactically when a team\'s press is "sprung" — and how should the team respond?',
          options: [
            '"When the press is sprung, the team is in trouble because there is space behind them. They need to sprint back quickly."',
            '"When the press is sprung — when the opposition plays through or around it — the team is immediately in a dangerous situation. The pressing players are out of their defensive shape, pushed high up the pitch, and the space behind them is exposed. If the opposition can play in behind the pressing line quickly, the defending team is outnumbered. The ideal response is immediate: the nearest player to the ball in the exposed space must track back urgently, the defensive line must communicate and reorganise as quickly as possible, and the rest of the team transitions from pressing mode to defensive shape mode — often called \'recovering the shape.\' The worst response is to continue pressing after the press has been sprung — this commits even more players forward and expands the exposed space. Recognising when the press is sprung and transitioning immediately is a key skill."',
            '"When the press is sprung, the team needs to reorganise defensively. They should get back into shape behind the ball and not press anymore until their structure is re-established."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analyses the problem and the solution with tactical precision. "Pressing players are out of their defensive shape, pushed high up the pitch" (why it\'s dangerous), "space behind them is exposed" (the tactical consequence), "nearest player must track back urgently, defensive line must communicate and reorganise" (the correct response), "transitioning from pressing mode to defensive shape mode — recovering the shape" (tactical vocabulary), "worst response is to continue pressing — expands the exposed space" (what not to do). C is correct but basic — B has the tactical analysis depth of a genuine B2 response.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three conditional language or pressing vocabulary mistakes in this analysis. Find them.',
      dialogue: [
        { speaker: 'Analyst', text: 'City\'s pressing system is built around three clear triggers — the back-pass, body orientation, and the miscontrol.' },
        { speaker: 'Analyst', text: 'If the goalkeeper will receive a back-pass, the striker closes down immediately — from an angle that creates a pressing shadow over the short pass.' },
        { speaker: 'Analyst', text: 'As soon as the press is triggered, the midfield line squeezes up — reducing space between the lines and connecting the press to the defensive block.' },
        { speaker: 'Analyst', text: 'Their gegenpressing is impressive — but it is their press resistance when defending that really stands out. They rarely spring the press with a long ball.' },
        { speaker: 'Analyst', text: 'Their PPDA of 6.1 reflects their pressing intensity — within three seconds of losing the ball, the nearest players engage and try to win back possession.' },
        { speaker: 'Analyst', text: 'If the press is sprung, the whole team continues pressing forward — they believe their intensity will win the ball back even after the first press is beaten.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'If the goalkeeper will receive a back-pass',
          correction: 'If the goalkeeper receives a back-pass',
          explanation: '"If + will" is wrong in the conditional clause — this is the most common conditional mistake in English. In zero and first conditionals, the "if" clause uses present simple, not "will." "Will" goes in the main clause (first conditional) or is absent entirely (zero conditional). "If the goalkeeper receives a back-pass, the striker closes down immediately" = zero conditional (a general rule). "If the goalkeeper receives a back-pass, the striker will close down immediately" = first conditional (a specific future possibility). Both are grammatically correct. "If the goalkeeper WILL receive" is never correct in conditional sentences.',
        },
        {
          lineIndex: 3,
          incorrectText: 'their press resistance when defending',
          correction: 'their press resistance when in possession / when the opposition presses them',
          explanation: '"Press resistance" = a player\'s or team\'s ability to keep the ball when the opposition presses them. It is a quality relevant to the team IN POSSESSION under pressure — not "when defending." If your team is defending, you are the pressing team, not the team that needs press resistance. The analyst is confusing "defending" with "under pressure in possession." Press resistance is the ability to withstand the opponent\'s press — it is a possession/attacking quality, not a defensive one.',
        },
        {
          lineIndex: 5,
          incorrectText: 'the whole team continues pressing forward',
          correction: 'the whole team must immediately recover their shape / transition to a defensive block',
          explanation: 'Continuing to press after the press has been sprung is described as the tactically WRONG response — but the analyst presents it as a deliberate tactical choice ("they believe their intensity will win the ball back"). When a press is sprung, the team is exposed and disorganised. Continuing to press expands that exposure — more players are pushed forward, more space is created behind. The correct tactical response to a sprung press is immediate shape recovery, not continued pressing. This is a tactical analysis error: the analyst has confused high pressing intensity with recklessly continuing to press when the shape is already broken.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each tactical analysis using pressing vocabulary and conditional structures.',
      items: [
        {
          customerLine: 'Explain the relationship between pressing triggers and pressing intensity — why do teams need both?',
          salespersonStart: 'Pressing triggers and pressing intensity solve two different problems —',
          suggestedCompletion: 'Pressing triggers and pressing intensity solve two different problems — and a team needs both to press effectively. Triggers solve the coordination problem: without a pre-agreed signal, players press at different moments and the opposition plays through the gaps between them. A trigger means every player responds to the same cue simultaneously — the press becomes a coordinated overload rather than isolated individual pressing. Intensity solves the execution problem: even with perfect triggers, if players do not press with maximum urgency and aggression within those three seconds, the opposition has time to adjust and escape. If intensity drops, the ball-carrier has time to look up, assess options, and play through the press calmly. The combination — trigger plus intensity — is what makes elite pressing genuinely difficult to play against. Triggers without intensity = coordinated but slow. Intensity without triggers = aggressive but disorganised.',
        },
        {
          customerLine: 'Describe how a team uses the back-pass pressing trigger in a high block.',
          salespersonStart: 'The back-pass is the most reliable pressing trigger because it creates a predictable window of vulnerability —',
          suggestedCompletion: 'The back-pass is the most reliable pressing trigger because it creates a predictable window of vulnerability — the goalkeeper or centre-back receives with their back to goal, their easiest pass is backwards or sideways, and they are under spatial pressure. As soon as the ball goes backwards, the striker closes down from an angle that creates a pressing shadow over the short pass to the nearest centre-back. Simultaneously, the midfield line steps up — squeezing the space between the midfield and defensive blocks. The defensive line steps up too, raising the offside line and trapping the opposition\'s forwards. The press is now coordinated across all three lines: the striker presses the ball-carrier, the midfield blocks secondary pass options, and the defensive line steps up to reduce the recovery space. If the goalkeeper plays long under this pressure, the whole team has already stepped up and is ready to compete for the second ball.',
        },
        {
          customerLine: 'How does gegenpressing change the way a team attacks as well as defends?',
          salespersonStart: 'Gegenpressing does not just change how a team defends — it fundamentally changes the nature of their attack —',
          suggestedCompletion: 'Gegenpressing does not just change how a team defends — it fundamentally changes the nature of their attack — because teams that know they will immediately try to win the ball back can take higher risks in possession. If you know that losing the ball triggers an immediate counter-press, you can afford to play more ambitious passes — through balls, risky switches, progressive carries — knowing that if the ball is lost, the team immediately presses to recover it rather than leaving you exposed. This changes the risk calculus of every attacking decision. Klopp\'s insight was that gegenpressing was effectively the best attacking move: it won the ball in the highest areas of the pitch, when the opposition was most disorganised, creating the most dangerous transition moments. The best chance did not always come from build-up play — it came from the counter-press creating a turnover thirty metres from the opposition goal.',
        },
        {
          customerLine: 'Analyse how a team with low press resistance should adjust against a high-pressing opponent.',
          salespersonStart: 'Against a high-pressing opponent, low press resistance creates a fundamental problem —',
          suggestedCompletion: 'Against a high-pressing opponent, low press resistance creates a fundamental problem — the team is being pressed in areas where they struggle to keep the ball, constantly giving possession away in their own half and triggering further counter-pressing. The adjustments available are structural rather than individual. First: play long. If the team cannot maintain possession under press, playing long deliberately removes the press by skipping over it entirely — accepting the battle is in the air rather than on the ground. Second: use a goalkeeper who is comfortable as an eleventh outfield player, distributing accurately under pressure to break the press with one ball. Third: change the shape to create more passing triangles in the build-up zones — giving every ball-carrier two short options nearby so they are never pressed 1v1 without an option. Teams with poor press resistance that try to play out under pressure simply concede possession in dangerous areas repeatedly — the structure must account for the individual quality available.',
        },
      ],
    },
  },
};
