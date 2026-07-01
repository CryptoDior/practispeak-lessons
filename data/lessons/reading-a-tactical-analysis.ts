import { Lesson } from '@/types/lesson';

export const readingATacticalAnalysis: Lesson = {
  slug: 'reading-a-tactical-analysis',
  title: 'Reading a Tactical Analysis',
  subtitle: 'Unit 4 — Reading & Writing Football',
  level: 'B1-B2',
  description: 'Tactical analysis is one of the most sophisticated forms of sports writing. It uses precise language, visual thinking, and deep football knowledge to explain how and why things happened on the pitch. This lesson teaches you to read — and eventually write — tactical analysis with confidence.',
  heroImage: '/images/tactical-analysis.png',

  warmUp: {
    questions: [
      'Have you ever read a tactical analysis article or watched a tactical breakdown video? What did you learn from it?',
      'What makes a good tactical analysis different from a simple match report?',
      'What vocabulary do you think you need to understand tactical writing?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Passive Voice in Tactical Writing',
    description: 'Tactical analysis uses the passive voice extensively. This is because tactical writing focuses on what happened positionally and structurally — not who did it personally. "The space was exploited", "the press was triggered", "the line was broken" — the passive voice shifts emphasis from the individual to the movement or system. Learning to read passive constructions confidently is essential to understanding tactical analysis at B1-B2 and above. When you read tactical analysis and see passive constructions, ask: "who did this and why does the writer not mention them?" Often the answer is that the action was structural — the result of a system, not a single decision.',
    positiveExamples: [
      {
        sentence: 'Active: "The striker exploited the space between the lines." Passive: "The space between the lines was exploited by the striker."',
        note: 'Passive shifts emphasis from the player to the space/movement',
      },
      {
        sentence: '"The press was triggered by a back pass to the goalkeeper — exactly the cue the away team had been waiting for."',
        note: 'Passive describes a system-level event, not individual decision',
      },
      {
        sentence: '"The defensive block was held at a mid-line until the ball was switched — at which point the shape was stretched and the overlap was created."',
        note: 'Multiple passive constructions describe a structural sequence',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'EXPLOIT',
      partOfSpeech: 'verb',
      definition: 'To take advantage of space, a weakness, or a mistake in the opposition\'s shape.',
      example: '"The winger continuously exploited the space behind the overlapping full-back — it was the defining tactical feature of the first half."',
      imageSlug: '/images/exploit.png',
    },
    {
      word: 'TRIGGER',
      partOfSpeech: 'verb',
      definition: 'To initiate a pressing action — a specific ball event that signals the whole team to press.',
      example: '"Their press was triggered by any pass going backwards — the moment a defender received the ball from a midfielder, the forwards closed down immediately."',
      imageSlug: '/images/trigger.png',
    },
    {
      word: 'OVERLOAD',
      partOfSpeech: 'noun / verb',
      definition: 'A numerical advantage in a specific area of the pitch — to create or have more players than the opposition in a zone.',
      example: '"They created a two-versus-one overload on the left flank every time the full-back pushed forward — the central midfielder tucked in to provide the extra man."',
      imageSlug: '/images/overload.png',
    },
    {
      word: 'BETWEEN THE LINES',
      partOfSpeech: 'phrase',
      definition: 'The space between the opposition\'s midfield line and defensive line — a dangerous area for attackers to receive the ball.',
      example: '"The number ten operated almost exclusively between the lines — finding pockets of space that the opposing defensive midfielder struggled to cover."',
      imageSlug: '/images/between-the-lines.png',
    },
    {
      word: 'COMPACTNESS',
      partOfSpeech: 'noun',
      definition: 'The degree to which a team keeps its defensive shape tight — short distances between lines and players.',
      example: '"Their compactness was exceptional — even without the ball, the distance between the striker and the goalkeeper was never more than 35 metres."',
      imageSlug: '/images/compactness.png',
    },
    {
      word: 'HALF-SPACE',
      partOfSpeech: 'noun',
      definition: 'The zone between the central area and the wide flank — a particularly dangerous position for attackers to receive the ball and face goal.',
      example: '"Their inside forwards occupied the half-spaces brilliantly — cutting inside from wide positions to receive in areas where they could shoot or play through."',
      imageSlug: '/images/half-space.png',
    },
    {
      word: 'PRESS RESISTANCE',
      partOfSpeech: 'noun',
      definition: 'A player\'s or team\'s ability to maintain composure and play out successfully when pressed by the opposition.',
      example: '"The goalkeeper\'s press resistance was tested repeatedly — and she passed every test, playing out calmly under intense pressure."',
      imageSlug: '/images/press-resistance.png',
    },
    {
      word: 'TRANSITION',
      partOfSpeech: 'noun',
      definition: 'The moment and process of moving between phases — from defending to attacking (positive transition) or vice versa (negative transition).',
      example: '"Their positive transitions were devastating — within three passes of winning the ball, they had created a goalscoring opportunity."',
      imageSlug: '/images/transition.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BREAK DOWN',
      definition: 'To analyse in detail — or, for a team, to dismantle the opposition\'s structure.',
      example: '"The analyst broke down the match into five tactical phases — showing how each shaped the final result."',
      imageSlug: '/images/break-down.png',
},
    {
      phrase: 'CUT OUT',
      definition: 'To intercept — to remove the ball from a passing lane before it reaches its intended target.',
      example: '"The defensive midfielder cut out the through ball perfectly — reading the pass a second before it was played."',
      imageSlug: '/images/cut-out.png',
},
    {
      phrase: 'LOCK DOWN',
      definition: 'To restrict an opponent\'s movements or influence completely — to mark or contain them effectively.',
      example: '"The man-marker locked down the opposition\'s best player — she barely had a touch in 90 minutes."',
      imageSlug: '/images/lock-down.png',
},
    {
      phrase: 'OPEN UP',
      definition: 'To create space — when a defence becomes stretched or when opportunities appear.',
      example: '"The pitch opened up after the substitution — the extra forward created space for the midfielders to run into."',
      imageSlug: '/images/open-up.png',
},
    {
      phrase: 'PRESS UP',
      definition: 'To move the defensive line or pressing shape higher up the pitch.',
      example: '"They pressed up to the opposition\'s 18-yard box — an aggressive high line that squeezed all available space."',
      imageSlug: '/images/press-up.png',
},
    {
      phrase: 'FALL INTO',
      definition: 'To adopt a particular shape or system, often without an explicit decision — to naturally move into a position.',
      example: '"Without the ball, the team fell into a 4-5-1 block — the wide forwards dropping to create a compact midfield five."',
      imageSlug: '/images/fall-into.png',
},
  ],

  onThePitch: {
    instructions: 'Tactical analysis starts during the match — these are the live calls and adjustments that later appear in written analysis.',
    items: [
      {
        cue: '"High line! Hold the line!" — the defensive shape instruction',
        meaning: 'The defensive line instruction is one of the most tactically critical calls in football. Too high = risk of balls played in behind. Too deep = too much space in midfield.',
        usage: '"HOLD THE LINE! Don't drop!" — centre-back calling to keep the line from dropping under pressure. "STEP! STEP UP! Play him offside!" — the line moves forward together. In written analysis: "The defensive line was set high — 35 metres from goal — meaning the team compressed the space in midfield but left themselves exposed to long balls behind." On the pitch, holding the line requires trust and communication: if one defender drops while the others push up, an offside trap becomes a gap. "If you don't hold the line together, you don't have a line — you have four individuals."',
        imageSlug: 'otp-high-line',
      },
      {
        cue: '"Press triggers! READ IT! Press now!" — collective pressing moments',
        meaning: 'A press trigger is the specific moment that signals the whole team to press simultaneously — a back pass, a heavy touch, a goalkeeper receiving the ball. Reading the trigger is the skill.',
        usage: '"That's the trigger! Press! Press NOW!" — the signal that the moment to press has arrived. Press triggers must be agreed before the match and recognised simultaneously by every player. "When their centre-back receives with his back to goal — that's our trigger. Everyone goes." In analysis: "The press was triggered by the goalkeeper receiving the ball — the team recognised it simultaneously and closed down in under three seconds, winning possession thirty metres from goal." On the pitch, a missed trigger means the press breaks down and exposes space behind.',
        imageSlug: 'otp-press-triggers',
      },
      {
        cue: '"Stay compact! Close the gap!" — defending the space, not the man',
        meaning: 'Compactness — keeping the team close together horizontally and vertically — is the foundation of structured defending. The call "stay compact" means: don't chase, close the gaps between lines.',
        usage: '"COMPACT! Stay compact! Don't go chasing!" — the defensive instruction when a team wants to protect the space between the lines rather than pressing individually. "Close the gap between midfield and defence — they're playing through that space!" In written analysis: "The team maintained an excellent compact shape — the gap between defensive and midfield lines was never more than 15 metres, denying the opposition space to play forward." On the pitch, the temptation to press individually is strong — the discipline to stay compact is a trained behaviour.',
        imageSlug: 'otp-compact',
      },
      {
        cue: '"Switch! Find the other side!" — exploiting width',
        meaning: 'Switching play — moving the ball quickly from one side of the pitch to the other — is designed to exploit spaces created by the opponent's defensive shift. The call comes the moment an overload is spotted on the far side.',
        usage: '"SWITCH IT! Switch! Find him on the left!" — when the ball has been circulated to one side and the far side is open. The switch must be quick and accurate: a slow switch gives the opponent time to shift. In analysis: "The team consistently switched play through the holding midfielder — moving the ball from right to left before the opposition defensive block could reorganise." On the pitch: "Don't keep it on one side — they're overloading us. Switch it! NOW!" Speed of recognition and execution is everything.',
        imageSlug: 'otp-switch',
      },
      {
        cue: '"Second ball! Get on it! Win the second contact!" — transition moments',
        meaning: 'The "second ball" — the loose ball after an aerial duel, a blocked shot, or a cleared cross — is a critical contest. Winning second balls is a tactical system, not just effort.',
        usage: '"SECOND BALL! Everyone — second ball! Don't stop after the header!" — the call to anticipate where the ball will fall after an aerial contest. Teams that win second balls consistently are tactically positioned: midfielders set their run angles based on where the centre-back will head it. In analysis: "The team dominated second ball situations in the first half — their midfield press positions meant they arrived at loose balls almost simultaneously with the defender clearing." On the pitch: the second ball is where matches are won and lost in tight games.',
        imageSlug: 'otp-second-ball',
      },
      {
        cue: '"Shape! Get in your shape!" — organisational reset',
        meaning: 'After winning or losing the ball, the team must reset into their tactical structure. "Get in your shape" is the call to return to formation and position.',
        usage: '"SHAPE! Get in your shape! 4-3-3! Come on!" — the manager or captain calling for organisational reset, often after a period of disorganised defending or pressing. On the pitch: "They didn't get back into shape quick enough — we could see the gaps before they could fill them." In analysis: "The team's transition from attack to defence was slow — it took an average of eight seconds to recover their defensive shape after losing the ball, creating sustained vulnerability." The spoken call "shape!" is the shorthand for an entire tactical instruction.',
        imageSlug: 'otp-shape',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst', speakerColor: 'blue', text: 'The main issue was compactness — the distance between our midfield and defensive lines was too large. Forty metres in some moments.' },
    { speaker: 'Manager', speakerColor: 'purple', text: 'And that\'s where their number ten operated — between the lines?' },
    { speaker: 'Analyst', speakerColor: 'blue', text: 'Exactly. She received the ball there eight times in the first half alone. Each time, either the defensive midfielder pressed, or the centre-back stepped — but never both at once.' },
    { speaker: 'Manager', speakerColor: 'purple', text: 'So the press wasn\'t being triggered at the right moment.' },
    { speaker: 'Analyst', speakerColor: 'blue', text: 'Right. The trigger should have been the backwards pass — but the strikers weren\'t responding. The press was slow and disconnected.' },
    { speaker: 'Manager', speakerColor: 'purple', text: 'What about the half-spaces on the right? I noticed they exploited that area after the break.' },
    { speaker: 'Analyst', speakerColor: 'blue', text: 'Yes — the left-back was pushing forward, and the half-space was left open. The overload they created there led directly to their goal.' },
    { speaker: 'Manager', speakerColor: 'purple', text: 'And in transition — were we quick enough when we won it back?' },
  ],

  matchingExercise: [
    { word: 'Exploit', definition: 'To take advantage of a weakness or space in the opposition\'s shape' },
    { word: 'Trigger', definition: 'A specific ball event that initiates a coordinated press' },
    { word: 'Overload', definition: 'A numerical advantage in a specific area of the pitch' },
    { word: 'Between the lines', definition: 'Space between the opposition midfield and defensive lines' },
    { word: 'Compactness', definition: 'A tight, short-distance defensive shape' },
    { word: 'Half-space', definition: 'The zone between the central area and the wide flank' },
    { word: 'Press resistance', definition: 'The ability to stay composed and play out under pressure' },
    { word: 'Transition', definition: 'The process of moving between defending and attacking phases' },
  ],

  fillBlankExercise: [
    { before: 'The space', answer: 'between the lines', after: 'was where the danger came from — their number ten drifted there repeatedly in the first half.' },
    { before: 'Their', answer: 'press resistance', after: 'was outstanding — despite intense pressure from the hosts, they played out calmly from the back.' },
    { before: 'The press was', answer: 'triggered', after: 'by a goalkeeper distribution — the moment he played short, both forwards closed down instantly.' },
    { before: 'The right winger created a two-versus-one', answer: 'overload', after: '— the full-back pushed forward and the wide midfielder tucked in to provide cover.' },
    { before: 'Their defensive', answer: 'compactness', after: 'was impressive — the team stayed compact in a low block and conceded very little space centrally.' },
    { before: 'The inside forward operated in the right', answer: 'half-space', after: ', constantly receiving between the full-back and the centre-back.' },
    { before: 'In positive', answer: 'transition', after: ', they were devastating — three passes and they had created a clear chance on goal.' },
    { before: 'The weakness in the full-back\'s positioning was', answer: 'exploited', after: 'repeatedly in the second half — four crosses from that channel alone.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Why does tactical analysis often use the passive voice?',
      options: ['To describe what happened structurally without focusing on individuals', 'To make the writing more difficult to understand', 'Because tactics are always plural events', 'To avoid naming players in published analysis'],
      correctIndex: 0,
    },
    {
      question: '"The press was triggered by a back pass." What does "triggered" mean here?',
      options: ['Initiated — a specific event caused the press to start', 'Stopped — the back pass ended the pressing action', 'Confused — the back pass disrupted the press', 'Created — the back pass built the press shape'],
      correctIndex: 0,
    },
    {
      question: 'A team creates an "overload" on the right flank. What does this mean?',
      options: ['They have more players there than the opposition', 'They have too many players in defence', 'They are pressing too high on the right', 'They have overworked their right-side players'],
      correctIndex: 0,
    },
    {
      question: 'What is the "half-space"?',
      options: ['The space in the centre circle', 'The zone between the central area and the wide flank', 'The space behind the defensive line', 'The space between the goalkeeper and the back four'],
      correctIndex: 1,
    },
    {
      question: '"Their compactness was exceptional." This means:',
      options: ['Their defensive shape was tight with short distances between players', 'Their players were very small and quick', 'Their passing was short and accurate', 'Their team was extremely well organised off the pitch'],
      correctIndex: 0,
    },
    {
      question: 'Which sentence correctly uses "press resistance"?',
      options: ['Her press resistance was outstanding — she kept her composure when pressed and played out cleanly.', 'Their press resistance was poor — they pressed too high and were exploited on the counter.', 'The press resistance triggered the attack by winning the ball high up the pitch.', 'Press resistance means the team pressed for the full 90 minutes without stopping.'],
      correctIndex: 0,
    },
    {
      question: '"Between the lines" refers to the space between which two things?',
      options: ['The opposition\'s midfield and defensive lines', 'The two white touchlines', 'The centre circle and the penalty area', 'The goalkeeper and the back four'],
      correctIndex: 0,
    },
    {
      question: 'What is a "positive transition" in football?',
      options: ['Moving quickly from defending to attacking after winning possession', 'Moving into a defensive shape after losing the ball', 'A positive attitude during difficult moments in a match', 'A quick substitution that changes the game positively'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the passive voice and tactical vocabulary from this lesson.',
    items: [
      {
        sentence: 'The space between the lines ___ six times in the first half — each occasion creating a shooting opportunity.',
        options: ['was exploited', 'exploited', 'has exploited'],
        correctIndex: 0,
        explanation: 'Passive construction: "was exploited" — the focus is on the space being taken advantage of, not on which player did it. This is typical of tactical analysis writing that emphasises the structural problem, not the individual.',
      },
      {
        sentence: 'The press ___ by a back pass to the goalkeeper — exactly the cue both strikers had been waiting for.',
        options: ['was triggered', 'triggered', 'has triggered'],
        correctIndex: 0,
        explanation: '"Was triggered" — passive describing a team system response to a ball event. The trigger is the structural cue; who triggered it is secondary to the fact that it happened.',
      },
      {
        sentence: 'Two overloads ___ in the right half-space during the second half.',
        options: ['were created', 'was created', 'created'],
        correctIndex: 0,
        explanation: 'Plural passive "were created" for the overloads — "two overloads" is the plural subject. Passive voice throughout keeps focus on the tactical events, not the players involved.',
      },
      {
        sentence: 'Their compactness ___ repeatedly by the home side\'s short combinations — but it never broke down.',
        options: ['was tested', 'tested', 'has tested'],
        correctIndex: 0,
        explanation: '"Was tested" — passive, describing how their defensive system held up under pressure. The passive construction here emphasises the structural resilience of the system.',
      },
      {
        sentence: 'In positive transition, three passes ___ before the defensive line was breached.',
        options: ['were played', 'was played', 'played'],
        correctIndex: 0,
        explanation: '"Were played" — plural passive for the three passes. Passive constructions trace causal chains without over-crediting individuals.',
      },
      {
        sentence: 'The high line ___ by the pace of the opposition centre-forward — a risk identified by the analyst before the match.',
        options: ['was exposed', 'exposed', 'has exposed'],
        correctIndex: 0,
        explanation: '"Was exposed" (passive in the main clause) — the high line was the structural vulnerability. The passive focuses on the tactical event rather than individual blame.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Decide whether the active or passive voice is more appropriate for each tactical analysis sentence.',
      items: [
        {
          customerLine: 'You are writing a tactical analysis and want to say a space was repeatedly used by the opposition. Which is better?',
          options: [
            '"The half-space was exploited repeatedly." (Passive — emphasises the structural problem)',
            '"Marcus exploited the half-space repeatedly." (Active — emphasises the individual)',
            'Both are equally good for tactical analysis',
            'Neither — tactical analysis should avoid this kind of language',
          ],
          correctIndex: 0,
          explanation: 'Tactical analysis focuses on structural and positional problems rather than individuals. The passive "was exploited" emphasises the space as the problem — which is more useful for coaching than naming a player.',
        },
        {
          customerLine: 'A coach tells an analyst: "I want to know why we kept losing the ball." What is the best type of analysis?',
          options: [
            'Focus on the structural reasons — press triggers, compactness, transitions',
            'Name the individual players who made errors',
            'Show only the moments the ball was lost, without analysis',
            'Compare the team to other teams who also lose the ball',
          ],
          correctIndex: 0,
          explanation: 'Good tactical analysis identifies structural and systemic causes — press triggers not firing, compactness gaps, slow transitions. Naming individuals without structural context is less useful for improving the system.',
        },
        {
          customerLine: '"Between the lines" describes which space?',
          options: [
            'The zone between the opposition\'s midfield and defensive lines',
            'The space between the touchlines',
            'The space between the two penalty areas',
            'The zone where both players contest a 50-50 ball',
          ],
          correctIndex: 0,
          explanation: '"Between the lines" is a tactical term for the dangerous zone between the opposition\'s midfield and their back four — where a number ten typically operates to receive and turn. It has no literal connection to the pitch\'s white lines.',
        },
        {
          customerLine: 'Which statement best describes "press resistance"?',
          options: [
            'The ability to maintain composure and play out when pressed',
            'The ability to press the opposition for a full 90 minutes',
            'A team\'s willingness to resist the manager\'s pressing instructions',
            'The physical fitness required to press effectively',
          ],
          correctIndex: 0,
          explanation: '"Press resistance" describes the receiving team\'s ability — staying calm and playing out successfully when pressed. It is not about the team doing the pressing.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The tactical analysis extract below contains three errors in vocabulary or passive voice usage. Find and correct them.',
      dialogue: [
        { speaker: 'Analysis Report', text: 'The first half was defined by the home side\'s inability to maintain compactness.' },
        { speaker: 'Analysis Report', text: 'The space between the lines were exploited six times — each occasion created by the opposition\'s number ten.' },
        { speaker: 'Analysis Report', text: 'The press was never triggering correctly — the strikers responded to back passes, but the midfielders did not follow.' },
        { speaker: 'Analysis Report', text: 'In overload situations, the home side failed to exploit the two-versus-one on the right half-space.' },
        { speaker: 'Analysis Report', text: 'Press resistance was their main strength — every time they were pressed, the ball was lost and the transition was negative.' },
        { speaker: 'Analysis Report', text: 'In conclusion, their compactness and press resistance were the two main weaknesses of the match.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The space between the lines were exploited',
          correction: 'The space between the lines was exploited',
          explanation: '"Space" is singular, so the passive must be "was exploited", not "were exploited". Subject-verb agreement applies even with intervening phrases.',
        },
        {
          lineIndex: 2,
          incorrectText: 'The press was never triggering correctly',
          correction: 'The press never triggered correctly',
          explanation: '"Was triggering" (passive progressive) is wrong here. "Never triggered" (simple past, active) or "was never triggered correctly" (passive) are both correct. The progressive passive "was triggering" doesn\'t make sense in this structural context.',
        },
        {
          lineIndex: 4,
          incorrectText: 'Press resistance was their main strength — every time they were pressed, the ball was lost and the transition was negative',
          correction: 'Press resistance was clearly a weakness — every time they were pressed, the ball was lost',
          explanation: 'The original contradicts itself: "main strength" is immediately contradicted by evidence of the ball always being lost under pressure. If the ball was always lost when pressed, press resistance was a weakness, not a strength.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each tactical analysis sentence using appropriate vocabulary.',
      items: [
        {
          customerLine: 'Complete this sentence about a team\'s defensive strength.',
          salespersonStart: 'Their compactness was their greatest defensive asset — even when stretched wide, the central block...',
          suggestedCompletion: 'never opened up enough to allow shots through the middle.',
        },
        {
          customerLine: 'Complete this sentence about a team pressing too early.',
          salespersonStart: 'The press was triggered too early on several occasions, meaning the team...',
          suggestedCompletion: 'were out of position when the opposition played through, leaving the half-spaces exposed.',
        },
        {
          customerLine: 'Complete this sentence about a key tactical battleground in the second half.',
          salespersonStart: 'The half-space on the left was identified as the key tactical battleground — and in the second half...',
          suggestedCompletion: 'the away side exploited it three times, creating their best chances of the match.',
        },
        {
          customerLine: 'Complete this sentence about what makes positive transitions effective.',
          salespersonStart: 'In positive transition, the key is to...',
          suggestedCompletion: 'advance with the ball quickly before the opposition can reorganise into their defensive shape.',
        },
      ],
    },
  },
};
