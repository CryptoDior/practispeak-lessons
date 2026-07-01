import { Lesson } from '../../types/lesson';

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
    title: 'Passive Voice in Tactical Writing',
    explanation: 'Tactical analysis uses the passive voice extensively. This is because tactical writing focuses on what happened positionally and structurally — not who did it personally. "The space was exploited", "the press was triggered", "the line was broken" — the passive voice shifts emphasis from the individual to the movement or system. Learning to read passive constructions confidently is essential to understanding tactical analysis at B1-B2 and above. The active voice equivalent is often also used: comparing both helps you understand the difference in emphasis.',
    examples: [
      {
        sentence: 'Active: "The striker exploited the space between the lines." Passive: "The space between the lines was exploited by the striker."',
        label: 'Passive shifts emphasis from the player to the space/movement',
      },
      {
        sentence: '"The press was triggered by a back pass to the goalkeeper — exactly the cue the away team had been waiting for."',
        label: 'Passive describes a system-level event, not individual decision',
      },
      {
        sentence: '"The defensive block was held at a mid-line until the ball was switched — at which point the shape was stretched and the overlap was created."',
        label: 'Multiple passive constructions describe a structural sequence',
      },
    ],
    tip: 'When you read tactical analysis and see passive constructions, ask: "who did this and why does the writer not mention them?" Often the answer is that the action was structural — the result of a system, not a single decision. That\'s exactly what the passive voice communicates.',
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
      inAction: 'Used for analysis and for tactical dismantling.',
      register: 'neutral',
      inContext: 'Football analysis, academic writing, business.',
    },
    {
      phrase: 'CUT OUT',
      definition: 'To intercept — to remove the ball from a passing lane before it reaches its intended target.',
      example: '"The defensive midfielder cut out the through ball perfectly — reading the pass a second before it was played."',
      inAction: 'Used for defensive interceptions.',
      register: 'neutral',
      inContext: 'Football tactics, defensive play.',
    },
    {
      phrase: 'LOCK DOWN',
      definition: 'To restrict an opponent\'s movements or influence completely — to mark or contain them effectively.',
      example: '"The man-marker locked down the opposition\'s best player — she barely had a touch in 90 minutes."',
      inAction: 'Used for effective marking or defensive containment.',
      register: 'informal / tactical',
      inContext: 'Football, defensive tactics.',
    },
    {
      phrase: 'OPEN UP',
      definition: 'To create space — when a defence becomes stretched or when opportunities appear.',
      example: '"The pitch opened up after the substitution — the extra forward created space for the midfielders to run into."',
      inAction: 'Used when space becomes available offensively.',
      register: 'neutral',
      inContext: 'Football tactics, spatial analysis.',
    },
    {
      phrase: 'PRESS UP',
      definition: 'To move the defensive line or pressing shape higher up the pitch.',
      example: '"They pressed up to the opposition\'s 18-yard box — an aggressive high line that squeezed all available space."',
      inAction: 'Used for high-pressing tactical decisions.',
      register: 'neutral',
      inContext: 'Football tactics.',
    },
    {
      phrase: 'FALL INTO',
      definition: 'To adopt a particular shape or system, often without an explicit decision — to naturally move into a position.',
      example: '"Without the ball, the team fell into a 4-5-1 block — the wide forwards dropping to create a compact midfield five."',
      inAction: 'Used for organic positional adjustments.',
      register: 'neutral',
      inContext: 'Tactical analysis, team shape description.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpRATA1',
      title: 'Read the Analysis',
      image: '/images/ootp-read-analysis.png',
      description: 'Students read an extract from a tactical analysis article and identify key language features.',
      prompt: 'Read the following extract: "The home side exploited the space between the lines repeatedly in the first half. Their number ten triggered the press with a simple back-pass, drawing two opponents and creating an overload on the right half-space. The space was immediately opened up by the diagonal run of the striker." Identify: (1) two passive constructions; (2) three tactical terms; (3) what system the team was using.',
    },
    {
      id: 'ootpRATA2',
      title: 'Active to Passive',
      image: '/images/ootp-active-passive.png',
      description: 'Students rewrite active tactical sentences in the passive voice.',
      prompt: 'Rewrite each sentence in the passive voice: (1) "The winger exploited the space behind the full-back." (2) "The striker triggered the press." (3) "The defence created an overload in the final third." Discuss: how does the passive change the emphasis?',
    },
    {
      id: 'ootpRATA3',
      title: 'Spot the Tactic',
      image: '/images/ootp-spot-tactic.png',
      description: 'Students listen to a match commentary extract and identify the tactical concepts being described.',
      prompt: 'Listen to or read the following commentary and identify which tactical concepts from this lesson are being described: "They sat in two very compact banks of four, barely 25 metres from back to front. Every time the hosts switched the ball wide, the block simply shifted — no gaps, no space between the lines. The transition when they won it was quick but controlled."',
    },
    {
      id: 'ootpRATA4',
      title: 'Write a Paragraph',
      image: '/images/ootp-write-paragraph.png',
      description: 'Students write a 3-4 sentence tactical analysis paragraph using vocabulary from the lesson.',
      prompt: 'Write a 3-4 sentence tactical analysis of a team you know — a club, national team, or even a recent game you watched. Use at least four vocabulary items from this lesson. Try to use at least one passive construction.',
    },
    {
      id: 'ootpRATA5',
      title: 'Press Resistance Test',
      image: '/images/ootp-press-resistance.png',
      description: 'Students roleplay a tactical Q&A — one student asks questions, the other analyses.',
      prompt: 'Student A asks: "Why did Team X struggle in the first half?" Student B responds using tactical vocabulary: "The main issue was their press resistance — they didn\'t have a clear trigger, so the whole team responded at different times..." Continue the analysis for two more exchanges.',
    },
    {
      id: 'ootpRATA6',
      title: 'Half-Space Debate',
      image: '/images/ootp-half-space.png',
      description: 'Students debate which tactical concept is most important in modern football.',
      prompt: 'Choose one concept: half-spaces, compactness, press resistance, or transition. Argue that it is the most important tactical concept in modern football. Use evidence from real matches if you can.',
    },
  ],

  videos: [],

  dialogue: {
    title: 'The Analyst\'s Breakdown',
    context: 'A performance analyst presents her findings to the coaching staff after a 1-1 draw.',
    lines: [
      { speaker: 'Analyst', text: 'The main issue was compactness — the distance between our midfield and defensive lines was too large. Forty metres in some moments.' },
      { speaker: 'Manager', text: 'And that\'s where their number ten operated — between the lines?' },
      { speaker: 'Analyst', text: 'Exactly. She received the ball there eight times in the first half alone. Each time, either the defensive midfielder pressed, or the centre-back stepped — but never both at once.' },
      { speaker: 'Manager', text: 'So the press wasn\'t being triggered at the right moment.' },
      { speaker: 'Analyst', text: 'Right. The trigger should have been the backwards pass — but the strikers weren\'t responding. The press was slow and disconnected.' },
      { speaker: 'Manager', text: 'What about the half-spaces on the right? I noticed they exploited that area after the break.' },
      { speaker: 'Analyst', text: 'Yes — the left-back was pushing forward, and the half-space was left open. The overload they created there led directly to their goal.' },
      { speaker: 'Manager', text: 'And in transition — were we quick enough when we won it back?' },
    ],
  },

  matchingExercise: {
    title: 'Match the Term to Its Definition',
    instructions: 'Match each tactical analysis term to the correct definition.',
    pairs: [
      { term: 'Exploit', definition: 'To take advantage of a weakness or space in the opposition\'s shape' },
      { term: 'Trigger', definition: 'A specific ball event that initiates a coordinated press' },
      { term: 'Overload', definition: 'A numerical advantage in a specific area of the pitch' },
      { term: 'Between the lines', definition: 'Space between the opposition midfield and defensive lines' },
      { term: 'Compactness', definition: 'A tight, short-distance defensive shape' },
      { term: 'Half-space', definition: 'The zone between the central area and the wide flank' },
      { term: 'Press resistance', definition: 'The ability to stay composed and play out under pressure' },
      { term: 'Transition', definition: 'The process of moving between defending and attacking phases' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank',
    instructions: 'Complete each tactical analysis sentence with the correct term.',
    wordBank: ['exploited', 'triggered', 'overload', 'between the lines', 'compactness', 'half-space', 'press resistance', 'transition'],
    items: [
      { sentence: 'The space ___ was where the danger came from — their number ten drifted there repeatedly in the first half.', answer: 'between the lines' },
      { sentence: 'Their ___ was outstanding — despite intense pressure from the hosts, they played out calmly from the back.', answer: 'press resistance' },
      { sentence: 'The press was ___ by a goalkeeper distribution — the moment he played short, both forwards closed down instantly.', answer: 'triggered' },
      { sentence: 'The right winger created a two-versus-one ___ — the full-back pushed forward and the wide midfielder tucked in to provide cover.', answer: 'overload' },
      { sentence: 'Their defensive ___ was impressive — the team stayed compact in a low block and conceded very little space centrally.', answer: 'compactness' },
      { sentence: 'The inside forward operated in the right ___, constantly receiving between the full-back and the centre-back.', answer: 'half-space' },
      { sentence: 'In positive ___, they were devastating — three passes and they had created a clear chance on goal.', answer: 'transition' },
      { sentence: 'The weakness in the full-back\'s positioning was ___ repeatedly in the second half — four crosses from that channel alone.', answer: 'exploited' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Answer',
    instructions: 'Choose the answer that best completes or answers each question.',
    items: [
      {
        question: 'Why does tactical analysis often use the passive voice?',
        options: ['To describe what happened structurally without focusing on individuals', 'To make the writing more difficult to understand', 'Because tactics are always plural events', 'To avoid naming players in published analysis'],
        answer: 'To describe what happened structurally without focusing on individuals',
      },
      {
        question: '"The press was triggered by a back pass." What does "triggered" mean here?',
        options: ['Initiated — a specific event caused the press to start', 'Stopped — the back pass ended the pressing action', 'Confused — the back pass disrupted the press', 'Created — the back pass built the press shape'],
        answer: 'Initiated — a specific event caused the press to start',
      },
      {
        question: 'A team creates an "overload" on the right flank. What does this mean?',
        options: ['They have more players there than the opposition', 'They have too many players in defence', 'They are pressing too high on the right', 'They have overworked their right-side players'],
        answer: 'They have more players there than the opposition',
      },
      {
        question: 'What is the "half-space"?',
        options: ['The space in the centre circle', 'The zone between the central area and the wide flank', 'The space behind the defensive line', 'The space between the goalkeeper and the back four'],
        answer: 'The zone between the central area and the wide flank',
      },
      {
        question: '"Their compactness was exceptional." This means:',
        options: ['Their defensive shape was tight with short distances between players', 'Their players were very small and quick', 'Their passing was short and accurate', 'Their team was extremely well organised off the pitch'],
        answer: 'Their defensive shape was tight with short distances between players',
      },
      {
        question: 'Which sentence correctly uses "press resistance"?',
        options: ['Her press resistance was outstanding — she kept her composure when pressed and played out cleanly.', 'Their press resistance was poor — they pressed too high and were exploited on the counter.', 'The press resistance triggered the attack by winning the ball high up the pitch.', 'Press resistance means the team pressed for the full 90 minutes without stopping.'],
        answer: 'Her press resistance was outstanding — she kept her composure when pressed and played out cleanly.',
      },
      {
        question: '"Between the lines" refers to the space between which two things?',
        options: ['The opposition\'s midfield and defensive lines', 'The two white touchlines', 'The centre circle and the penalty area', 'The goalkeeper and the back four'],
        answer: 'The opposition\'s midfield and defensive lines',
      },
      {
        question: 'What is a "positive transition" in football?',
        options: ['Moving quickly from defending to attacking after winning possession', 'Moving into a defensive shape after losing the ball', 'A positive attitude during difficult moments in a match', 'A quick substitution that changes the game positively'],
        answer: 'Moving quickly from defending to attacking after winning possession',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using the passive voice and tactical vocabulary from this lesson.',
    items: [
      {
        sentence: 'The space between the lines ___ (exploit) six times in the first half — each occasion creating a shooting opportunity.',
        answer: 'was exploited',
        explanation: 'Passive construction: "was exploited" — the focus is on the space being taken advantage of, not on which player did it. This is typical of tactical analysis writing that emphasises the structural problem, not the individual.',
      },
      {
        sentence: 'The press ___ (trigger) by a back pass to the goalkeeper — exactly the cue both strikers had been waiting for.',
        answer: 'was triggered',
        explanation: '"Was triggered" — passive describing a team system response to a ball event. The trigger is the structural cue; who triggered it is secondary to the fact that it happened.',
      },
      {
        sentence: 'Two overloads ___ (create) in the right half-space during the second half — neither ___ (defend) effectively.',
        answer: 'were created / was defended',
        explanation: 'Plural passive "were created" for the overloads; singular "was defended" for the abstract concept. Passive voice throughout keeps focus on the tactical events, not the players involved.',
      },
      {
        sentence: 'Their compactness ___ (test) repeatedly by the home side\'s short combinations — but it ___ (never break) down.',
        answer: 'was tested / was never broken',
        explanation: '"Was tested" and "was never broken" — both passive, describing how their defensive system held up under pressure. The passive construction here emphasises the structural resilience of the system.',
      },
      {
        sentence: 'In positive transition, three passes ___ (play) before the defensive line ___ (breach) and the striker found herself in one-on-one.',
        answer: 'were played / was breached',
        explanation: '"Were played" and "was breached" — sequence of passive constructions describing a rapid structural event. This is how analytical writing traces causal chains without over-crediting individuals.',
      },
      {
        sentence: 'The high line ___ (expose) by the pace of the opposition centre-forward — a risk ___ (identify) by the analyst before the match.',
        answer: 'was exposed / identified',
        explanation: '"Was exposed" (passive in the main clause) and "identified" (past participle in relative clause). The ellipsis of "was" in relative passive clauses is very common in formal writing.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Active or Passive?',
      instructions: 'Decide whether the active or passive voice is more appropriate for each tactical analysis sentence.',
      items: [
        {
          prompt: 'You are writing a tactical analysis and want to say a space was repeatedly used by the opposition. Which is better?',
          options: [
            '"The half-space was exploited repeatedly." (Passive — emphasises the structural problem)',
            '"Marcus exploited the half-space repeatedly." (Active — emphasises the individual)',
            'Both are equally good for tactical analysis',
            'Neither — tactical analysis should avoid this kind of language',
          ],
          answer: '"The half-space was exploited repeatedly." (Passive — emphasises the structural problem)',
        },
        {
          prompt: 'A coach tells an analyst: "I want to know why we kept losing the ball." What is the best type of analysis?',
          options: [
            'Focus on the structural reasons — press triggers, compactness, transitions',
            'Name the individual players who made errors',
            'Show only the moments the ball was lost, without analysis',
            'Compare the team to other teams who also lose the ball',
          ],
          answer: 'Focus on the structural reasons — press triggers, compactness, transitions',
        },
        {
          prompt: '"Between the lines" describes which space?',
          options: [
            'The zone between the opposition\'s midfield and defensive lines',
            'The space between the touchlines',
            'The space between the two penalty areas',
            'The zone where both players contest a 50-50 ball',
          ],
          answer: 'The zone between the opposition\'s midfield and defensive lines',
        },
        {
          prompt: 'Which statement best describes "press resistance"?',
          options: [
            'The ability to maintain composure and play out when pressed',
            'The ability to press the opposition for a full 90 minutes',
            'A team\'s willingness to resist the manager\'s pressing instructions',
            'The physical fitness required to press effectively',
          ],
          answer: 'The ability to maintain composure and play out when pressed',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The tactical analysis extract below contains three errors in vocabulary or passive voice usage. Find and correct them.',
      dialogue: [
        { speaker: 'Analysis Report', text: 'The first half was defined by the home side\'s inability to maintain compactness.' },
        { speaker: 'Analysis Report', text: 'The space between the lines were exploited six times — each occasion created by the opposition\'s number ten.' },
        { speaker: 'Analysis Report', text: 'The press was never triggering correctly — the strikers responded to back passes, but the midfielders did not follow.' },
        { speaker: 'Analysis Report', text: 'In overload situations, the home side failed to exploit the two-versus-one on the right half-space.' },
        { speaker: 'Analysis Report', text: 'Press resistance was their main strength — every time they were pressed, the ball was lost and the transition was negative.' },
        { speaker: 'Analysis Report', text: 'In conclusion, their compactness and press resistance were the two main weaknesses of the match.' },
      ],
      errors: [
        { line: 2, original: 'The space between the lines were exploited', correction: 'The space between the lines was exploited', explanation: '"Space" is singular, so the passive must be "was exploited", not "were exploited". Subject-verb agreement applies even with intervening phrases.' },
        { line: 3, original: 'The press was never triggering correctly', correction: 'The press never triggered correctly', explanation: '"Was triggering" (passive progressive) is wrong here. "Never triggered" (simple past, active) or "was never triggered correctly" (passive) are both correct. The progressive passive "was triggering" doesn\'t make sense in this structural context.' },
        { line: 5, original: 'every time they were pressed, the ball was lost and the transition was negative', correction: 'every time they were pressed, the ball was lost — their press resistance was clearly a weakness', explanation: 'The original contradicts the opening of the sentence, which calls press resistance "their main strength". If the ball was always lost when pressed, press resistance was a weakness, not a strength.' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each tactical analysis sentence using appropriate vocabulary.',
      items: [
        {
          prompt: 'Their compactness was their greatest defensive asset — even when stretched wide, the central block...',
          exampleAnswer: 'never opened up enough to allow shots through the middle.',
        },
        {
          prompt: 'The press was triggered too early on several occasions, meaning the team...',
          exampleAnswer: 'were out of position when the opposition played through, leaving the half-spaces exposed.',
        },
        {
          prompt: 'The half-space on the left was identified as the key tactical battleground — and in the second half...',
          exampleAnswer: 'the away side exploited it three times, creating their best chances of the match.',
        },
        {
          prompt: 'In positive transition, the key is to...',
          exampleAnswer: 'advance with the ball quickly before the opposition can reorganise into their defensive shape.',
        },
      ],
    },
  },
};
