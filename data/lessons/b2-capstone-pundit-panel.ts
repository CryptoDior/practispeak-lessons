import { Lesson } from '../../types/lesson';

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
    title: 'Review: Cohesion and Discourse Markers in Football English',
    explanation: 'Great pundits and football writers don\'t just say true things — they connect ideas clearly and build arguments that listeners and readers can follow. Discourse markers are the words and phrases that link ideas: contrast (however, that said, on the other hand), addition (furthermore, what\'s more, on top of that), consequence (as a result, consequently, which is why), concession (admittedly, I\'ll grant you that, despite this), and emphasis (above all, crucially, what stands out). At B1-B2, using discourse markers well is what lifts your football English from competent to compelling.',
    examples: [
      {
        sentence: '"The defensive record has been excellent. That said, they haven\'t been tested by a truly top-quality attack yet."',
        label: '"That said" — concession marker; acknowledges the strength while adding a caveat',
      },
      {
        sentence: '"The tactical shift was obvious in the second half. Crucially, it came too late — the damage had already been done."',
        label: '"Crucially" — emphasis marker; signals the most important point',
      },
      {
        sentence: '"They dominated possession. However, they created very little with it — which is why the result was so frustrating."',
        label: '"However" (contrast) + "which is why" (consequence) — two markers chained together',
      },
    ],
    tip: 'In punditry, the most powerful discourse markers are the ones that show you\'ve considered both sides: "I\'ll grant you that the press was effective — however, the question is whether it\'s sustainable over 90 minutes." This structure signals sophisticated thinking and is exactly what B1-B2 learners should aim for.',
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
      inAction: 'Used for balanced assessment.',
      register: 'neutral',
      inContext: 'Football analysis, decision-making, debate.',
    },
    {
      phrase: 'BACK UP',
      definition: 'To support a claim with evidence or reasoning.',
      example: '"I\'ll back that up with the numbers — they\'ve kept eleven clean sheets in fifteen games. That\'s not luck, that\'s organisation."',
      inAction: 'Used in debates and arguments to support assertions.',
      register: 'neutral',
      inContext: 'Football punditry, academic argument.',
    },
    {
      phrase: 'DRAW ON',
      definition: 'To use knowledge, experience, or information as a resource.',
      example: '"She drew on her experience as a former international to analyse the technical difference between the two sides\' pressing structures."',
      inAction: 'Used for applying knowledge and experience to analysis.',
      register: 'neutral',
      inContext: 'Analysis, expertise, punditry.',
    },
    {
      phrase: 'BUILD ON',
      definition: 'To use a success or achievement as a foundation for further progress.',
      example: '"The club must build on this foundation — a top-four finish is excellent, but it should be the floor, not the ceiling."',
      inAction: 'Used for progress and development.',
      register: 'neutral',
      inContext: 'Football management, strategy, motivation.',
    },
    {
      phrase: 'STAND OUT',
      definition: 'To be significantly better or more noticeable than others.',
      example: '"Of all the players on the pitch tonight, one stood out — the left-back, whose reading of the game was a full level above anyone else."',
      inAction: 'Used to highlight exceptional individual or team performance.',
      register: 'neutral',
      inContext: 'Football analysis, commentary, review.',
    },
    {
      phrase: 'WRAP UP',
      definition: 'To conclude — to bring a discussion, analysis, or debate to a close.',
      example: '"To wrap up — the manager\'s tenure has been transformative. Admittedly, the style hasn\'t always been pretty. That said, the results are undeniable."',
      inAction: 'Used to signal the conclusion of an analysis or argument.',
      register: 'neutral',
      inContext: 'Punditry, presentations, debate conclusions.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpB2C1',
      title: 'Pundit Panel Live',
      image: '/images/ootp-pundit-panel.png',
      description: 'The full capstone activity — students run a pundit panel in the style of a live TV show.',
      prompt: 'Set up a pundit panel with three or four students. One student is the host; others are pundits. Discuss: (1) The performance of a real or fictional team this season. (2) Who is the player of the season? (3) Which manager has been the most impressive? (4) What is the biggest tactical trend in modern football? Use vocabulary and discourse markers from this lesson — and draw on language from across all ten B1-B2 lessons.',
    },
    {
      id: 'ootpB2C2',
      title: 'Season Verdict',
      image: '/images/ootp-season-verdict.png',
      description: 'Students write a 200-word "season verdict" for a team they follow.',
      prompt: 'Write a 200-word season verdict for a club you know. Cover: (1) The highs — what went well. (2) The lows — what went wrong. (3) The key player. (4) The verdict — what does the future look like? Use at least six vocabulary items from this lesson and three discourse markers. Share with a partner and give feedback on language use.',
    },
    {
      id: 'ootpB2C3',
      title: 'Capstone Debate',
      image: '/images/ootp-capstone-debate.png',
      description: 'Students debate a major football question using language from across the series.',
      prompt: 'Choose one of these debate topics: (A) "Modern football has lost its cultural soul to commercialisation." (B) "Tactical analysis has made football less entertaining." (C) "Transfer fees will only keep rising — and that is good for football." Prepare a 90-second argument for OR against. Use discourse markers, vocabulary from this lesson, and any other language from the B1-B2 series.',
    },
    {
      id: 'ootpB2C4',
      title: 'Player Trajectory Analysis',
      image: '/images/ootp-trajectory.png',
      description: 'Students present a detailed analysis of a player\'s career trajectory.',
      prompt: 'Choose a player whose career has had a clear arc — rising star, peak, decline, comeback, or any combination. Present a 2-minute analysis of their trajectory, covering: their credentials at each stage, their benchmark performances, their legacy so far, and their future direction. Use vocabulary from this lesson and language from earlier in the series.',
    },
    {
      id: 'ootpB2C5',
      title: 'Legacy Statement',
      image: '/images/ootp-legacy-statement.png',
      description: 'Students write a legacy statement for a manager or player leaving a club.',
      prompt: 'Write a 150-word legacy statement for a manager or player who is leaving a club after five years. The statement will be read at their leaving ceremony. Cover: what they achieved, what they stood for, what they leave behind. Use at least four vocabulary items from this final lesson and two discourse markers.',
    },
    {
      id: 'ootpB2C6',
      title: 'Best of the Series',
      image: '/images/ootp-best-of-series.png',
      description: 'Students reflect on and celebrate their football English journey.',
      prompt: 'Share one thing from each area: (1) The vocabulary item from this series that you will definitely use. (2) A grammar point that improved your football writing. (3) A punditry phrase you want to remember. (4) A topic from this series you want to explore further. Then: what is your next step in football English?',
    },
  ],

  videos: [],

  dialogue: {
    title: 'The Pundit Panel',
    context: 'A post-match TV panel discusses a controversial cup final.',
    lines: [
      { speaker: 'Host', text: 'Controversial final. Two-one, but was it the right result? Your verdict?' },
      { speaker: 'Pundit 1', text: 'On balance, yes. They had the better chances, the better shape. That said, the red card changed everything — it\'s hard to weigh up the performance fairly after that.' },
      { speaker: 'Host', text: 'Is it harsh to question the manager\'s credentials given they\'ve won the cup?' },
      { speaker: 'Pundit 2', text: 'Admittedly, a trophy is a trophy. However, if you look at the trajectory over the season — the league position, the performances — there are genuine questions to ask.' },
      { speaker: 'Host', text: 'What about the player of the match? The consensus seems to be the goalkeeper.' },
      { speaker: 'Pundit 1', text: 'Absolutely. And I\'ll back that up — three world-class saves, stood out in a team that was under huge pressure for long periods.' },
      { speaker: 'Pundit 2', text: 'What stands out for me is the legacy question. Will this be remembered as a turning point — the season they built on this foundation — or a one-off?' },
      { speaker: 'Host', text: 'To wrap up — your one-word assessment: step forward or holding pattern?' },
    ],
  },

  matchingExercise: {
    title: 'Capstone Vocabulary Match',
    instructions: 'Match each punditry term to its definition.',
    pairs: [
      { term: 'Pundit', definition: 'An expert analyst who gives opinions on television or radio' },
      { term: 'Consensus', definition: 'Shared agreement among a group of people' },
      { term: 'Assessment', definition: 'A considered judgement about a performance or situation' },
      { term: 'Verdict', definition: 'A final conclusion or judgement' },
      { term: 'Benchmark', definition: 'A standard level against which others are compared' },
      { term: 'Trajectory', definition: 'The direction of a player\'s or team\'s development' },
      { term: 'Credentials', definition: 'Evidence of ability or achievement that justifies being taken seriously' },
      { term: 'Legacy', definition: 'What a player or manager leaves behind after their time at a club' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank — Discourse Markers',
    instructions: 'Complete each sentence with the appropriate discourse marker.',
    wordBank: ['That said', 'Crucially', 'However', 'Admittedly', 'Furthermore', 'As a result', 'Above all', 'What\'s more'],
    items: [
      { sentence: 'The defensive record has been exceptional this season. ___, they haven\'t faced a truly elite attack yet.', answer: 'That said' },
      { sentence: 'The press was effective in the first half. ___, it broke down completely after the substitution.', answer: 'However' },
      { sentence: '___, the failure to score from open play is a problem. Every goal came from a set piece.', answer: 'Crucially' },
      { sentence: '___, the manager had limited funds. ___, the squad was weakened by injuries all season. ___, a top-six finish is a real achievement.', answer: 'Admittedly / Furthermore / That said' },
      { sentence: 'The team lost the league on goal difference. ___, they reached the cup final — a remarkable achievement for a club of this size.', answer: 'What\'s more' },
      { sentence: 'They underperformed in Europe. ___, the manager was dismissed before the season ended.', answer: 'As a result' },
      { sentence: '___, what the fans want is a team they can be proud of — results matter, but so does the way you play.', answer: 'Above all' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Capstone Review — Choose the Correct Answer',
    instructions: 'Review questions across all ten B1-B2 lessons.',
    items: [
      {
        question: '"Their gegenpressing was relentless." What tactical concept does this describe?',
        options: ['Immediate counter-pressing after losing possession', 'A short-passing possession style', 'An ultra-defensive Italian system', 'A Brazilian flair-based style'],
        answer: 'Immediate counter-pressing after losing possession',
      },
      {
        question: 'In a match report, the past continuous is typically used to:',
        options: ['Set the context before a key event', 'Describe completed goals and incidents', 'Report the final score', 'Quote the manager after the match'],
        answer: 'Set the context before a key event',
      },
      {
        question: '"She snubbed three contract renewal offers." What does this mean in a transfer context?',
        options: ['She rejected the offers, signalling she wanted to leave', 'She accepted the offers and signed a new deal', 'She asked for the offers to be improved', 'She delayed her decision until the end of the season'],
        answer: 'She rejected the offers, signalling she wanted to leave',
      },
      {
        question: '"The match has entered club folklore." What does "folklore" mean here?',
        options: ['Stories and legends passed down through generations of fans', 'The club\'s official historical records', 'A nickname used by the local media', 'An entry in the football association\'s archive'],
        answer: 'Stories and legends passed down through generations of fans',
      },
      {
        question: '"Between the lines" in tactical analysis refers to:',
        options: ['The space between the opposition\'s midfield and defensive lines', 'The space between the two white touchlines', 'A player who reads the game exceptionally well', 'The writing between statistical tables in an analysis report'],
        answer: 'The space between the opposition\'s midfield and defensive lines',
      },
      {
        question: 'Which discourse marker signals the most important point?',
        options: ['Crucially', 'However', 'Admittedly', 'Furthermore'],
        answer: 'Crucially',
      },
      {
        question: '"Tiki-taka" is associated with which country\'s football culture?',
        options: ['Spain', 'Germany', 'Brazil', 'Italy'],
        answer: 'Spain',
      },
      {
        question: 'In reported speech, "I will complete the deal" becomes:',
        options: ['He said he would complete the deal.', 'He said he will complete the deal.', 'He said that he completes the deal.', 'He said he has completed the deal.'],
        answer: 'He said he would complete the deal.',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Capstone Complete the Sentence',
    instructions: 'Complete each sentence demonstrating mastery of B1-B2 football English.',
    items: [
      {
        sentence: 'To ___ (wrap) the season verdict: the title win was deserved. ___ (Admittedly), the style was inconsistent. ___ (However), the results were not.',
        answer: 'wrap up / Admittedly / However',
        explanation: '"Wrap up" = to conclude. "Admittedly" = concession marker acknowledging the weakness. "However" = contrast marker pivoting to the counterargument. These three elements form a complete pundit-style assessment.',
      },
      {
        sentence: 'The ___ (benchmark) for this club has always been the league title. The manager\'s ___ (legacy) will be judged by whether she builds on this cup win or falls short of that ultimate target.',
        answer: 'benchmark / legacy',
        explanation: '"Benchmark" = the standard against which the club measures itself. "Legacy" = what the manager leaves behind. Both words are used precisely here — the benchmark is what they aim for; the legacy is what they leave when they eventually go.',
      },
      {
        sentence: 'His ___ (trajectory) over two seasons has been extraordinary — from a player whose ___ (credentials) were questioned to an undisputed world-class performer.',
        answer: 'trajectory / credentials',
        explanation: '"Trajectory" describes the arc of development. "Credentials" = the evidence of ability that others use to judge you. The contrast between questioned credentials and world-class status captures the drama of the development.',
      },
      {
        sentence: '"___ (Crucially), the press ___ (trigger) correctly in the final fifteen minutes — and ___ (as a result), they won possession in areas that led directly to the winning goal."',
        answer: 'Crucially / was triggered / as a result',
        explanation: '"Crucially" = emphasis marker. "Was triggered" = passive voice, typical of tactical analysis. "As a result" = consequence marker linking the tactical event to its outcome. Three key language features of B1-B2 football English in one sentence.',
      },
      {
        sentence: 'When you ___ (weigh up) the performance across the full 90 minutes, the ___ (consensus) among the panel was that the better side ___ (win) the match.',
        answer: 'weigh up / consensus / won / had won',
        explanation: '"Weigh up" = to consider all factors. "Consensus" = shared agreement. "Won" or "had won" — past simple or past perfect, both acceptable. The pundit weighs evidence before delivering a consensus verdict.',
      },
      {
        sentence: '"The club, ___ (found) in 1882 by local dock workers, has always ___ (stand for) more than football — it stands for a community, a ___ (heritage), and a way of life that money cannot buy."',
        answer: 'founded / stood for / heritage',
        explanation: '"Founded" — non-defining relative clause past participle (short form of "which was founded"). "Stood for" — past tense of "stand for" in the main narrative. "Heritage" — the cultural legacy of the club. Three separate structures working together in one complex sentence.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Pundit Panel: Your Verdict',
      instructions: 'Choose the best pundit response for each situation.',
      items: [
        {
          prompt: 'The host says: "Was the red card harsh?" What is the best pundit response?',
          options: [
            '"Admittedly, the challenge was late. That said, a red card requires intent — and I\'m not sure it was there."',
            '"Yes, it was harsh."',
            '"Red cards happen in football. The referee made his decision."',
            '"I think most people would agree with me that it was the wrong decision."',
          ],
          answer: '"Admittedly, the challenge was late. That said, a red card requires intent — and I\'m not sure it was there."',
        },
        {
          prompt: 'You want to give a positive assessment of a performance but be honest about a weakness. Which response best uses discourse markers?',
          options: [
            '"The defensive performance was outstanding. However, the attacking third needs attention — they created very little from open play."',
            '"They played well but the attack was not good."',
            '"It was a good and bad performance in different ways."',
            '"The performance had positives and negatives, some of which were more positive and some more negative."',
          ],
          answer: '"The defensive performance was outstanding. However, the attacking third needs attention — they created very little from open play."',
        },
        {
          prompt: 'A pundit says: "I\'ll back that up." What are they about to do?',
          options: [
            'Support their claim with evidence or statistics',
            'Disagree with the previous speaker',
            'Agree completely without adding anything',
            'Change their earlier assessment',
          ],
          answer: 'Support their claim with evidence or statistics',
        },
        {
          prompt: 'Which sentence best demonstrates B1-B2 punditry language?',
          options: [
            '"When you weigh up the trajectory over the whole season, the consensus has to be that the credentials are there — this is a title-winning squad."',
            '"They are a very good team with lots of good players who play good football."',
            '"I think they might possibly be able to maybe compete for the title if things go well."',
            '"Looking at the numbers and stuff, they seem pretty good this season."',
          ],
          answer: '"When you weigh up the trajectory over the whole season, the consensus has to be that the credentials are there — this is a title-winning squad."',
        },
      ],
    },

    spotTheMistake: {
      title: 'Capstone: Spot the Mistake',
      instructions: 'The punditry extract below has three language errors. Find and correct them.',
      dialogue: [
        { speaker: 'Pundit', text: 'Their trajectory over the season has been outstanding — from a bottom-half side to genuine title credentials.' },
        { speaker: 'Pundit', text: 'That said, the consensus among the panel — that they are the best side in the league — is one I\'m not willing to back down.' },
        { speaker: 'Pundit', text: 'Crucially, they have kept eleven clean sheets. However, the goalkeeper, that has been the key figure in all eleven, deserves enormous credit.' },
        { speaker: 'Pundit', text: 'To wrap up my assessment: a verdict of "title contenders" seems fair. Admittedly, the schedule gets harder from here.' },
        { speaker: 'Pundit', text: 'Furthermore, the manager told reporters yesterday that the squad will continue to build on these foundations into the next campaign.' },
        { speaker: 'Pundit', text: 'Above all, it\'s the legacy of this season that matters — what they do next will define whether this was a stepping stone or the beginning of something bigger.' },
      ],
      errors: [
        { line: 2, original: 'is one I\'m not willing to back down', correction: 'is one I\'m not willing to back up (or: one I\'m not able to back up)', explanation: '"Back down" means to concede or retreat from a position. "Back up" means to support with evidence. The pundit means they cannot support the claim with evidence — so "back up" is correct. "Not willing to back up" = I don\'t have the evidence to support it.' },
        { line: 3, original: 'the goalkeeper, that has been the key figure', correction: 'the goalkeeper, who has been the key figure', explanation: '"That" cannot be used in non-defining relative clauses (which have commas). The goalkeeper is already identified, so this is non-defining. For people, non-defining relative clauses must use "who".' },
        { line: 5, original: 'the manager told reporters yesterday that the squad will continue', correction: 'the manager told reporters yesterday that the squad would continue', explanation: 'Reported speech requires tense shift. "Will continue" (direct speech) → "would continue" in reported speech after "told" (past tense). This is a standard backshift: will → would.' },
      ],
    },

    finishTheLine: {
      title: 'Capstone: Finish the Line',
      instructions: 'Complete each punditry statement in the most compelling way you can — drawing on language from across the full B1-B2 series.',
      items: [
        {
          prompt: 'When you weigh up the season as a whole — the highs, the lows, the key moments...',
          exampleAnswer: 'the verdict has to be: a qualified success. The credentials are there; the trajectory is positive. Crucially, they have built a foundation they can build on.',
        },
        {
          prompt: 'To wrap up the pundit panel — one word each to sum up the season...',
          exampleAnswer: '"Transformative." The legacy of this manager, whatever happens next, is that he changed the identity of this club — and that is something no one can take away.',
        },
        {
          prompt: 'The folklore around this match will last for generations because...',
          exampleAnswer: 'it had everything: a comeback, a red card, a last-minute winner, and a goalkeeper whose press resistance was the reason the whole thing was possible.',
        },
        {
          prompt: 'Admittedly, the transfer fee seemed excessive at the time. That said...',
          exampleAnswer: 'when you look at what she has delivered — 30 goals, two titles, a World Cup — the benchmark she set makes her look like a bargain in retrospect.',
        },
      ],
    },
  },
};
