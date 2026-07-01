import { Lesson } from '@/types/lesson';

export const b2CapstonePunditPanel: Lesson = {
  slug: 'b2-capstone-pundit-panel',
  title: 'B2 Capstone: Pundit Panel',
  subtitle: 'Unit 4 — Reading & Writing Football',
  level: 'B1-B2',
  description: 'You\'ve reached the final lesson of the B1-B2 Football English series. In this capstone, you step into the role of a football pundit — analysing, debating, writing, and presenting at the highest level you\'ve reached so far. Draw on everything you\'ve learned across all ten lessons to deliver your best football English.',
  heroImage: '/images/pundit-panel.png',

  warmUp: {
    questions: [
      'Looking back across this series, which lesson was most useful for you personally? Which vocabulary item do you use most?',
      'If you had to describe your football English level at the start of this series and now, what would you say has changed?',
      'What is the most impressive thing a football pundit or commentator has ever said that you can remember?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Review: Cohesion and Discourse Markers in Football English',
    description: 'Great pundits and football writers don\'t just say true things — they connect ideas clearly and build arguments that listeners and readers can follow. Discourse markers are the words and phrases that link ideas: contrast (however, that said, on the other hand), addition (furthermore, what\'s more, on top of that), consequence (as a result, consequently, which is why), concession (admittedly, I\'ll grant you that, despite this), and emphasis (above all, crucially, what stands out). At B1-B2, using discourse markers well is what lifts your football English from competent to compelling. The most powerful discourse markers are the ones that show you\'ve considered both sides: "I\'ll grant you that the press was effective — however, the question is whether it\'s sustainable over 90 minutes."',
    positiveExamples: [
      {
        sentence: '"The defensive record has been excellent. That said, they haven\'t been tested by a truly top-quality attack yet."',
        note: '"That said" — concession marker; acknowledges the strength while adding a caveat',
      },
      {
        sentence: '"The tactical shift was obvious in the second half. Crucially, it came too late — the damage had already been done."',
        note: '"Crucially" — emphasis marker; signals the most important point',
      },
      {
        sentence: '"They dominated possession. However, they created very little with it — which is why the result was so frustrating."',
        note: '"However" (contrast) + "which is why" (consequence) — two markers chained together',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'PUNDIT',
      partOfSpeech: 'noun',
      definition: 'An expert commentator — a former player, coach, or journalist who gives analysis and opinions on television, radio, or online.',
      example: '"The panel of pundits disagreed sharply on the red card decision — one calling it an easy decision, the other saying the referee had been too harsh."',
      imageSlug: '/images/pundit.png',
    },
    {
      word: 'CONSENSUS',
      partOfSpeech: 'noun',
      definition: 'Agreement among a group — a shared opinion or conclusion that most people accept.',
      example: '"There was broad consensus among the pundits that the manager had to change formation — the current system simply wasn\'t working."',
      imageSlug: '/images/consensus.png',
    },
    {
      word: 'ASSESSMENT',
      partOfSpeech: 'noun',
      definition: 'A judgement or evaluation — a considered opinion about a player, a team, or a performance.',
      example: '"His assessment of the team\'s defensive problems was clinical — three minutes into the show, he had identified exactly what the data confirmed."',
      imageSlug: '/images/assessment.png',
    },
    {
      word: 'VERDICT',
      partOfSpeech: 'noun',
      definition: 'A final judgement — the conclusion of an analysis or debate.',
      example: '"The panel\'s verdict on the season was mixed — brilliant in Europe, disappointing in the league, and a cup exit that nobody could excuse."',
      imageSlug: '/images/verdict.png',
    },
    {
      word: 'BENCHMARK',
      partOfSpeech: 'noun / verb',
      definition: 'A standard of comparison — the level against which a player or team is measured.',
      example: '"The record signing became the benchmark for the role — every defensive midfielder who followed was compared to his performances."',
      imageSlug: '/images/benchmark.png',
    },
    {
      word: 'TRAJECTORY',
      partOfSpeech: 'noun',
      definition: 'The direction of development — the path a player or team is on, upward or downward.',
      example: '"Her trajectory over the past two seasons has been extraordinary — from bench player to the best midfielder in the women\'s game."',
      imageSlug: '/images/trajectory.png',
    },
    {
      word: 'CREDENTIALS',
      partOfSpeech: 'noun',
      definition: 'Evidence of ability or achievement — what qualifies a player, club, or manager to be taken seriously.',
      example: '"His credentials as a title contender were established by the Champions League semifinal run — no one questions his club\'s ambition now."',
      imageSlug: '/images/credentials.png',
    },
    {
      word: 'LEGACY',
      partOfSpeech: 'noun',
      definition: 'What a player, manager, or era leaves behind — the long-term impact on a club or the sport.',
      example: '"His legacy at this club is secured — three league titles, two European finals, and a generation of players formed in his image."',
      imageSlug: '/images/legacy.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WEIGH UP',
      definition: 'To consider all factors before forming a judgement — to assess the pros and cons.',
      example: '"When you weigh up the performances across the whole season, the title win looks deserved — even if individual results were inconsistent."',
      imageSlug: '/images/weigh-up.png',
    },
    {
      phrase: 'BACK UP',
      definition: 'To support a claim with evidence or reasoning.',
      example: '"I\'ll back that up with the numbers — they\'ve kept eleven clean sheets in fifteen games. That\'s not luck, that\'s organisation."',
      imageSlug: '/images/back-up.png',
    },
    {
      phrase: 'DRAW ON',
      definition: 'To use knowledge, experience, or information as a resource.',
      example: '"She drew on her experience as a former international to analyse the technical difference between the two sides\' pressing structures."',
      imageSlug: '/images/draw-on.png',
    },
    {
      phrase: 'BUILD ON',
      definition: 'To use a success or achievement as a foundation for further progress.',
      example: '"The club must build on this foundation — a top-four finish is excellent, but it should be the floor, not the ceiling."',
      imageSlug: '/images/build-on.png',
    },
    {
      phrase: 'STAND OUT',
      definition: 'To be significantly better or more noticeable than others.',
      example: '"Of all the players on the pitch tonight, one stood out — the left-back, whose reading of the game was a full level above anyone else."',
      imageSlug: '/images/stand-out.png',
    },
    {
      phrase: 'WRAP UP',
      definition: 'To conclude — to bring a discussion, analysis, or debate to a close.',
      example: '"To wrap up — the manager\'s tenure has been transformative. Admittedly, the style hasn\'t always been pretty. That said, the results are undeniable."',
      imageSlug: '/images/wrap-up-pv.png',
    },
  ],

  onThePitch: {
    instructions: 'Pundits analyse what happens on the pitch — these are the live moments, tactical details, and key decisions that become the substance of pundit discussion.',
    items: [
      {
        cue: 'The key tactical battle — what pundits identify first',
        meaning: 'Before analysing anything else, pundits identify the central tactical contest of the match: which two players or units are matched against each other and who wins that battle determines the game.',
        usage: '"The key battle today is central midfield — whoever controls the middle of the pitch controls the game." On the pitch, tactical battles are fought in specific zones: "The press vs the build-up", "The high line vs the striker's run", "Width vs compactness." Pundit analysis language: "The key battle was won in the first twenty minutes", "They lost the midfield battle and never recovered", "The tactical matchup was resolved by the substitution." On the pitch, players are often not aware of the battle they are in — the pundit identifies it from distance and turns it into a story.',
        imageSlug: 'otp-tactical-battle',
      },
      {
        cue: 'The turning point moment — identifying what changed the match',
        meaning: 'The turning point is the single moment that changed the direction of the match. Pundits must identify it precisely and explain why it mattered.',
        usage: '"The match turned on the red card in the 54th minute — everything before that was irrelevant." On the pitch, turning points are often felt before they are seen: a shift in momentum, a change in crowd noise, a substitution that unlocks a pattern. Pundit language for turning points: "That changed the game completely", "Before that moment...", "After that moment...", "Everything hinged on...", "The decisive moment was..." "The real turning point wasn't the goal — it was the substitution five minutes before it. He changed the shape, they changed the game. The goal was a consequence, not the cause."',
        imageSlug: 'otp-turning-point',
      },
      {
        cue: 'Live tactical analysis — saying what you see as it happens',
        meaning: 'The most skilled pundits analyse tactics in real time — identifying patterns, predicting what will happen next, and explaining decisions as they unfold.',
        usage: '"Watch what the full-back does here — yes, he's been pushing forward all game. That's the third time the space has been there. It's only a matter of time." Real-time pundit language: "I've been watching this all half", "Look at the space here", "This is the pattern they keep trying", "They're going to keep doing this until somebody stops it." On the pitch: players feel patterns before they can articulate them. Pundits put language to what players feel. "The reason pundits are useful is they tell you what you already sensed but couldn't name. 'The left-back is dropping too deep' — you knew, now you have the words."',
        imageSlug: 'otp-live-analysis',
      },
      {
        cue: 'The individual performance — assessing a player's contribution',
        meaning: 'Pundits assess individual performances holistically — not just goals and assists but positioning, pressing, decision-making, and influence on the team.',
        usage: '"He didn't score, he didn't assist — but he was the best player on the pitch. Watch how he creates the space for others." Pundit assessment language: "His work rate was exceptional", "She was everywhere — the stats won't show it but the team needed her", "He had a quiet game by his standards", "She was the difference — every time we attacked it was through her." On the pitch: individual performance is often invisible to the player themselves. "I felt like I had a poor game — I touched the ball ten times. The pundit said I was the best player. The press, the positioning, the angles — I didn't know I was doing that consciously."',
        imageSlug: 'otp-individual-performance',
      },
      {
        cue: 'The post-match debate — forming and defending a pundit opinion',
        meaning: 'The pundit panel is a structured debate — pundits must form a clear opinion, defend it with evidence, and challenge other opinions respectfully but directly.',
        usage: '"I completely disagree — and here's why." Pundit debate language: "With respect, I think you're wrong about that", "The evidence shows...", "What you're missing is...", "I take your point, but...", "The stats support my view here." On the pitch, disagreements happen constantly — players argue about positioning, decisions, and tactics. The pundit panel takes those on-pitch debates and makes them public, structured, and analytical. "The best pundit debates feel like they're between people who've played the game — because they understand what it felt like to be in those positions."',
        imageSlug: 'otp-pundit-debate',
      },
      {
        cue: 'Player of the match — the language of superlatives and evidence',
        meaning: 'Choosing a Player of the Match and justifying it requires superlatives, evidence, and comparison — the most intense form of pundit language.',
        usage: '"For me, there's only one choice — and I'll tell you exactly why." Player of the Match justification language: "She was head and shoulders above everyone else", "There's a strong case for the keeper but the striker changed the game more directly", "You can't give it to a player who missed three chances, no matter what else they did." "The toughest player of the match decisions are when the winning team loses and someone on the losing side was brilliant — do you give it to the best player or the most impactful player?" On the pitch, the best performances are often invisible to the players who give them — they feel normal. The pundit's job is to make the invisible visible.',
        imageSlug: 'otp-player-of-match',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Host', speakerColor: 'orange', text: 'Controversial final. Two-one, but was it the right result? Your verdict?' },
    { speaker: 'Pundit 1', speakerColor: 'green', text: 'On balance, yes. They had the better chances, the better shape. That said, the red card changed everything — it\'s hard to weigh up the performance fairly after that.' },
    { speaker: 'Host', speakerColor: 'orange', text: 'Is it harsh to question the manager\'s credentials given they\'ve won the cup?' },
    { speaker: 'Pundit 2', speakerColor: 'blue', text: 'Admittedly, a trophy is a trophy. However, if you look at the trajectory over the season — the league position, the performances — there are genuine questions to ask.' },
    { speaker: 'Host', speakerColor: 'orange', text: 'What about the player of the match? The consensus seems to be the goalkeeper.' },
    { speaker: 'Pundit 1', speakerColor: 'green', text: 'Absolutely. And I\'ll back that up — three world-class saves, stood out in a team that was under huge pressure for long periods.' },
    { speaker: 'Pundit 2', speakerColor: 'blue', text: 'What stands out for me is the legacy question. Will this be remembered as a turning point — the season they built on this foundation — or a one-off?' },
    { speaker: 'Host', speakerColor: 'orange', text: 'To wrap up — your one-word assessment: step forward or holding pattern?' },
  ],

  matchingExercise: [
    { word: 'Pundit', definition: 'An expert analyst who gives opinions on television or radio' },
    { word: 'Consensus', definition: 'Shared agreement among a group of people' },
    { word: 'Assessment', definition: 'A considered judgement about a performance or situation' },
    { word: 'Verdict', definition: 'A final conclusion or judgement' },
    { word: 'Benchmark', definition: 'A standard level against which others are compared' },
    { word: 'Trajectory', definition: 'The direction of a player\'s or team\'s development' },
    { word: 'Credentials', definition: 'Evidence of ability or achievement that justifies being taken seriously' },
    { word: 'Legacy', definition: 'What a player or manager leaves behind after their time at a club' },
  ],

  fillBlankExercise: [
    { before: 'The defensive record has been exceptional this season.', answer: 'That said', after: ', they haven\'t faced a truly elite attack yet.' },
    { before: 'The press was effective in the first half.', answer: 'However', after: ', it broke down completely after the substitution.' },
    { before: '', answer: 'Crucially', after: ', the failure to score from open play is a problem. Every goal came from a set piece.' },
    { before: '', answer: 'Admittedly', after: ', the squad was weakened by injuries all season. A top-six finish is a real achievement.' },
    { before: 'The team lost the league on goal difference.', answer: "What's more", after: ', they reached the cup final — a remarkable achievement for a club of this size.' },
    { before: 'They underperformed in Europe.', answer: 'As a result', after: ', the manager was dismissed before the season ended.' },
    { before: '', answer: 'Above all', after: ', what the fans want is a team they can be proud of — results matter, but so does the way you play.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"Their gegenpressing was relentless." What tactical concept does this describe?',
      options: ['Immediate counter-pressing after losing possession', 'A short-passing possession style', 'An ultra-defensive Italian system', 'A Brazilian flair-based style'],
      correctIndex: 0,
    },
    {
      question: 'In a match report, the past continuous is typically used to:',
      options: ['Set the context before a key event', 'Describe completed goals and incidents', 'Report the final score', 'Quote the manager after the match'],
      correctIndex: 0,
    },
    {
      question: '"She snubbed three contract renewal offers." What does this mean in a transfer context?',
      options: ['She rejected the offers, signalling she wanted to leave', 'She accepted the offers and signed a new deal', 'She asked for the offers to be improved', 'She delayed her decision until the end of the season'],
      correctIndex: 0,
    },
    {
      question: '"The match has entered club folklore." What does "folklore" mean here?',
      options: ['Stories and legends passed down through generations of fans', 'The club\'s official historical records', 'A nickname used by the local media', 'An entry in the football association\'s archive'],
      correctIndex: 0,
    },
    {
      question: '"Between the lines" in tactical analysis refers to:',
      options: ['The space between the opposition\'s midfield and defensive lines', 'The space between the two white touchlines', 'A player who reads the game exceptionally well', 'The writing between statistical tables in an analysis report'],
      correctIndex: 0,
    },
    {
      question: 'Which discourse marker signals the most important point?',
      options: ['Crucially', 'However', 'Admittedly', 'Furthermore'],
      correctIndex: 0,
    },
    {
      question: '"Tiki-taka" is associated with which country\'s football culture?',
      options: ['Spain', 'Germany', 'Brazil', 'Italy'],
      correctIndex: 0,
    },
    {
      question: 'In reported speech, "I will complete the deal" becomes:',
      options: ['He said he would complete the deal.', 'He said he will complete the deal.', 'He said that he completes the deal.', 'He said he has completed the deal.'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence with the correct word or phrase.',
    items: [
      {
        sentence: 'To ___ the season verdict: the title win was deserved.',
        options: ['wrap up', 'wrap down', 'wrap off'],
        correctIndex: 0,
        explanation: '"Wrap up" means to conclude a discussion or analysis. "Wrap down" and "wrap off" are not real phrasal verbs.',
      },
      {
        sentence: 'The ___ for this club has always been the league title.',
        options: ['benchmark', 'verdict', 'trajectory'],
        correctIndex: 0,
        explanation: '"Benchmark" means the standard of comparison — the level they measure themselves against.',
      },
      {
        sentence: 'His ___ over two seasons has been extraordinary — from a questioned newcomer to a world-class performer.',
        options: ['trajectory', 'legacy', 'benchmark'],
        correctIndex: 0,
        explanation: '"Trajectory" describes the arc and direction of development over time.',
      },
      {
        sentence: 'Crucially, the press ___ correctly in the final fifteen minutes.',
        options: ['was triggered', 'triggered', 'has triggered'],
        correctIndex: 0,
        explanation: 'Passive voice ("was triggered") is typical of tactical analysis — it focuses on the action, not who performed it.',
      },
      {
        sentence: 'When you weigh up the performance, the ___ among the panel was that the better side won.',
        options: ['consensus', 'verdict', 'assessment'],
        correctIndex: 0,
        explanation: '"Consensus" specifically means shared agreement among a group — the panel agreed collectively.',
      },
      {
        sentence: 'This club has always ___ more than football — it stands for a community and a way of life.',
        options: ['stood for', 'stood up for', 'standing for'],
        correctIndex: 0,
        explanation: '"Stand for" means to represent or embody values. "Stood up for" means to defend someone against attack.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the best pundit response for each situation.',
      items: [
        {
          customerLine: 'Was the red card harsh?',
          options: [
            '"Admittedly, the challenge was late. That said, a red card requires intent — and I\'m not sure it was there."',
            '"Yes, it was harsh."',
            '"Red cards happen in football. The referee made his decision."',
            '"I think most people would agree with me that it was the wrong decision."',
          ],
          correctIndex: 0,
          explanation: 'Option A uses two discourse markers (Admittedly + That said) to give a nuanced, evidence-based response — the hallmark of strong punditry.',
        },
        {
          customerLine: 'How would you assess tonight\'s performance?',
          options: [
            '"The defensive performance was outstanding. However, the attacking third needs attention — they created very little from open play."',
            '"They played well but the attack was not good."',
            '"It was a good and bad performance in different ways."',
            '"The performance had positives and negatives, some of which were more positive and some more negative."',
          ],
          correctIndex: 0,
          explanation: 'Option A uses "However" to contrast positive and negative — a precise, professional structure that shows clear thinking.',
        },
        {
          customerLine: 'A pundit says: "I\'ll back that up." What are they about to do?',
          options: [
            'Support their claim with evidence or statistics',
            'Disagree with the previous speaker',
            'Agree completely without adding anything',
            'Change their earlier assessment',
          ],
          correctIndex: 0,
          explanation: '"Back up" means to support a claim with evidence. The pundit is signalling they\'re about to provide statistics or reasoning.',
        },
        {
          customerLine: 'Which of these best demonstrates B1-B2 punditry language?',
          options: [
            '"When you weigh up the trajectory over the whole season, the consensus has to be that the credentials are there — this is a title-winning squad."',
            '"They are a very good team with lots of good players who play good football."',
            '"I think they might possibly be able to maybe compete for the title if things go well."',
            '"Looking at the numbers and stuff, they seem pretty good this season."',
          ],
          correctIndex: 0,
          explanation: 'Option A uses "weigh up", "trajectory", "consensus", and "credentials" — all B1-B2 vocabulary used accurately in a punditry context.',
        },
      ],
    },

    spotTheMistake: {
      instructions: 'The punditry extract below has three language errors. Find and correct them.',
      dialogue: [
        { speaker: 'Pundit', text: 'Their trajectory over the season has been outstanding — from a bottom-half side to genuine title credentials.' },
        { speaker: 'Pundit', text: 'That said, the consensus among the panel — that they are the best side in the league — is one I\'m not willing to back down.' },
        { speaker: 'Pundit', text: 'Crucially, they have kept eleven clean sheets. However, the goalkeeper, that has been the key figure in all eleven, deserves enormous credit.' },
        { speaker: 'Pundit', text: 'To wrap up my assessment: a verdict of "title contenders" seems fair. Admittedly, the schedule gets harder from here.' },
        { speaker: 'Pundit', text: 'Furthermore, the manager told reporters yesterday that the squad will continue to build on these foundations into the next campaign.' },
        { speaker: 'Pundit', text: 'Above all, it\'s the legacy of this season that matters — what they do next will define whether this was a stepping stone or the beginning of something bigger.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'is one I\'m not willing to back down',
          correction: 'is one I\'m not willing to back up',
          explanation: '"Back down" means to concede or retreat from a position. "Back up" means to support with evidence. The pundit means they cannot support the claim with evidence — so "back up" is correct.',
        },
        {
          lineIndex: 2,
          incorrectText: 'the goalkeeper, that has been the key figure',
          correction: 'the goalkeeper, who has been the key figure',
          explanation: '"That" cannot be used in non-defining relative clauses (which have commas). The goalkeeper is already identified, so this is non-defining. For people, non-defining relative clauses must use "who".',
        },
        {
          lineIndex: 4,
          incorrectText: 'the manager told reporters yesterday that the squad will continue',
          correction: 'the manager told reporters yesterday that the squad would continue',
          explanation: 'Reported speech requires tense shift. "Will continue" (direct speech) → "would continue" in reported speech after "told" (past tense). This is standard backshift: will → would.',
        },
      ],
    },

    finishTheLine: {
      instructions: 'Complete each punditry statement in the most compelling way you can — drawing on language from across the full B1-B2 series.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'When you weigh up the season as a whole — the highs, the lows, the key moments...',
          suggestedCompletion: 'the verdict has to be: a qualified success. The credentials are there; the trajectory is positive. Crucially, they have built a foundation they can build on.',
        },
        {
          customerLine: '',
          salespersonStart: 'To wrap up the pundit panel — one word each to sum up the season...',
          suggestedCompletion: '"Transformative." The legacy of this manager, whatever happens next, is that he changed the identity of this club — and that is something no one can take away.',
        },
        {
          customerLine: '',
          salespersonStart: 'The folklore around this match will last for generations because...',
          suggestedCompletion: 'it had everything: a comeback, a red card, a last-minute winner, and a goalkeeper whose press resistance was the reason the whole thing was possible.',
        },
        {
          customerLine: '',
          salespersonStart: 'Admittedly, the transfer fee seemed excessive at the time. That said...',
          suggestedCompletion: 'when you look at what she has delivered — 30 goals, two titles, a World Cup — the benchmark she set makes her look like a bargain in retrospect.',
        },
      ],
    },
  },
};
