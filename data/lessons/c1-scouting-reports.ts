import { Lesson } from '@/types/lesson';

export const c1ScoutingReports: Lesson = {
  slug: 'c1-scouting-reports',
  title: 'Scouting Reports',
  subtitle: 'Unit 2 — Coaching & Leadership English',
  level: 'C1-C2',
  description: 'A scouting report is a professional document that analyses an opponent or a player for recruitment. Whether you write them or read them, the language is technical, precise, and structured. Learn to scout in English.',
  heroImage: '/images/scouting-reports.png',

  warmUp: {
    questions: [
      'Have you ever thought about what football scouts look for in a player? What qualities matter most?',
      'If you had to describe a player to another coach in one minute, what would you say?',
      'What is the difference between scouting an opponent for a match and scouting a player for recruitment?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Nominalization — turning verbs into nouns for formal writing',
    description: 'Scouting reports are written in a formal register. One of the key features of formal written English is nominalization — turning verbs and adjectives into nouns. This makes writing sound more professional and analytical. Examples: "press" (verb) → "the ability to press" or "pressing output"; "defend" → "defensive capability"; "position" → "positional awareness". Instead of "he presses very hard" (informal) → "his pressing output is exceptional" (formal). Learning to nominalize your language transforms how you write and present analytical information.',
    positiveExamples: [
      { sentence: 'His pressing output is exceptional — the highest in the league this season.', note: 'nominalization: "to press" → "pressing output" — formal and precise' },
      { sentence: 'Her positional awareness in the final third is the strongest aspect of her game.', note: 'nominalization: "aware of position" → "positional awareness" — sounds analytical' },
      { sentence: 'His aerial ability has improved significantly since joining the club.', note: 'nominalization: "able to win headers" → "aerial ability" — cleaner and more formal' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'ATHLETIC PROFILE',
      partOfSpeech: 'noun',
      definition: 'The physical qualities of a player — speed, strength, endurance, jumping ability. The complete picture of a player\'s physical capabilities.',
      example: '"His athletic profile is elite — top-five speed in the league, exceptional endurance, and strong in aerial duels."',
      imageSlug: '/images/athletic-profile.png',
    },
    {
      word: 'TECHNICAL PROFILE',
      partOfSpeech: 'noun',
      definition: 'The technical skills of a player — first touch, passing accuracy, shooting technique, dribbling. What the player can do with the ball.',
      example: '"Her technical profile is excellent — left foot, right foot, both equally strong, and exceptional first touch under pressure."',
      imageSlug: '/images/technical-profile.png',
    },
    {
      word: 'CEILING',
      partOfSpeech: 'noun',
      definition: 'The highest potential level a player could reach — what they could become with the right development.',
      example: '"At 20 years old, his ceiling is enormous — I believe he can play at the highest level within three years."',
      imageSlug: '/images/ceiling.png',
    },
    {
      word: 'FLOOR',
      partOfSpeech: 'noun',
      definition: 'The minimum level a player will reliably perform at — even on a bad day. A high floor means the player is consistent.',
      example: '"Her floor is very high — even in her worst games she makes intelligent runs, wins aerial duels, and leads the press."',
      imageSlug: '/images/floor.png',
    },
    {
      word: 'VERSATILITY',
      partOfSpeech: 'noun',
      definition: 'The ability to play in multiple positions or roles — a versatile player adds flexibility to a squad.',
      example: '"His versatility is a major selling point — he can play as a right-back, right midfielder, or central defender."',
      imageSlug: '/images/versatility.png',
    },
    {
      word: 'PRESSING INTENSITY',
      partOfSpeech: 'noun',
      definition: 'How hard and consistently a player or team presses the opponent to win the ball back quickly.',
      example: '"Their pressing intensity dropped significantly in the final 20 minutes — fitness may be a concern."',
      imageSlug: '/images/pressing-intensity.png',
    },
    {
      word: 'VULNERABILITY',
      partOfSpeech: 'noun',
      definition: 'A weakness that can be exploited — an area of a team\'s or player\'s game that opponents can attack.',
      example: '"Their main vulnerability is in behind the high line — a fast striker would cause them serious problems."',
      imageSlug: '/images/vulnerability.png',
    },
    {
      word: 'SET-PIECE ORGANISATION',
      partOfSpeech: 'noun',
      definition: 'How well a team is prepared and organised for set pieces — corners, free kicks, and throw-ins near goal.',
      example: '"Their set-piece organisation is excellent — they have clear routines and they\'ve scored four times from corners this season."',
      imageSlug: '/images/set-piece-org.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STAND OUT',
      definition: 'To be noticeably better than others — to be clearly above the rest in one specific area.',
      example: '"Her pressing output stands out immediately when you look at the data — the highest in the squad by a significant margin."',
      imageSlug: '/images/stand-out-scout.png',
    },
    {
      phrase: 'FIT INTO',
      definition: 'To suit or match — to work well within a system, squad, or team style.',
      example: '"He would fit into our high-press system very naturally — his movement and workrate are exactly what we need."',
      imageSlug: '/images/fit-into.png',
    },
    {
      phrase: 'FALL OFF',
      definition: 'To decline or drop in performance — to be noticeably worse in a certain situation or time period.',
      example: '"His performance tends to fall off significantly in the second half — fitness is a question mark."',
      imageSlug: '/images/fall-off.png',
    },
    {
      phrase: 'HOLD UP',
      definition: 'To stay strong or maintain quality — to perform well under difficult conditions.',
      example: '"Her aerial ability holds up even against bigger defenders — she uses her technique to compensate for her height."',
      imageSlug: '/images/hold-up-scout.png',
    },
    {
      phrase: 'COME INTO',
      definition: 'To become relevant or important — often used when a quality becomes visible in a specific situation.',
      example: '"His leadership really comes into its own in big matches — he raises his level when the pressure is highest."',
      imageSlug: '/images/come-into.png',
    },
    {
      phrase: 'PRESS HIGH',
      definition: 'To apply pressure to the opponent near their own goal rather than defending in a mid or low block.',
      example: '"They press high in a 4-3-3 shape — the front three lead the press and the midfield covers the spaces left behind."',
      imageSlug: '/images/c1-scouting-reports-press-high.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key scouting scenarios and language — for both opponent analysis and player recruitment.',
    items: [
      {
        cue: 'Opening an opponent scouting report',
        meaning: 'An opponent scouting report starts with the team\'s general identity and system, then moves to strengths, vulnerabilities, and key players. The opening frames the whole report.',
        usage: '"United play a 4-2-3-1 in possession, transitioning to a 4-4-2 medium block out of possession. Their main strength is their pressing intensity — they apply 74 pressures per game (league average: 52). Their main vulnerability is in behind the high line when the ball is played quickly over the top." Structure: system → strength → vulnerability.',
        imageSlug: 'otp-opponent-report',
      },
      {
        cue: 'Describing an opponent\'s key player',
        meaning: 'Reports on key opponents focus on what makes them dangerous and how to stop them. Be specific — mention the actions, positions, and patterns.',
        usage: '"Their number 10 is their most dangerous player. He drops into pockets of space between the lines and turns quickly. His pressing output is the highest on the team. To limit him: show him outside, don\'t let him turn, and close his passing lanes centrally. He is less effective on his left foot."',
        imageSlug: 'otp-key-player-scout',
      },
      {
        cue: 'Writing a recruitment scouting report',
        meaning: 'A player recruitment report evaluates the player against your team\'s specific needs. It includes profile data, strengths, weaknesses, ceiling, floor, and a recommendation.',
        usage: '"Player: [Name]. Age: 22. Position: Centre-back. Athletic profile: top 10% for speed in his league, excellent in aerial duels (wins 72%). Technical profile: strong on the ball, comfortable under pressure. Ceiling: can play in a top-five league. Floor: reliable at this level even in difficult matches. Recommendation: sign in January. Fits our system. Strong value at current price."',
        imageSlug: 'otp-recruitment-report',
      },
      {
        cue: 'Identifying a vulnerability to exploit',
        meaning: 'The most actionable part of an opponent report is identifying how to attack them. Be specific about the type of action and the area of the pitch.',
        usage: '"Their main vulnerability: in behind the high defensive line, especially on the left side where the left-back pushes very high. A direct run from the right winger or a through ball into the channel would create one-v-one situations with the goalkeeper." Specific, actionable, with a tactical solution.',
        imageSlug: 'otp-vulnerability',
      },
      {
        cue: 'Assessing a player\'s ceiling and floor',
        meaning: 'Ceiling and floor assessment is the most important part of a recruitment report — it tells the coach what they are buying and what they should expect.',
        usage: '"Ceiling: he can play in a top-flight league within two seasons if he develops his press resistance. Floor: even now he is a reliable starter at this level — his defensive output and aerial ability are consistent. This is a low-risk, high-ceiling signing."',
        imageSlug: 'otp-ceiling-floor',
      },
      {
        cue: 'Set-piece analysis in a scouting report',
        meaning: 'Set pieces are responsible for a large percentage of goals. Scouting reports always include a section on set-piece routines and vulnerabilities.',
        usage: '"Their set-piece organisation at corners: they use a double runner routine — one player at the near post, one far post. The delivery is almost always to the far post. Weakness: the near-post runner takes two defenders with them, leaving the back post open for a third runner. This is exploitable." Detail and specificity are everything.',
        imageSlug: 'otp-set-piece-scout',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Scout', speakerColor: 'orange', text: 'I\'ve watched them three times now. Let me give you the summary.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Main things — what\'s the system and where can we hurt them?' },
    { speaker: 'Scout', speakerColor: 'orange', text: 'They play a 4-3-3. High line, high press — their pressing intensity is the highest in the division. Their main vulnerability is in behind that line.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Who should we target?' },
    { speaker: 'Scout', speakerColor: 'orange', text: 'The left channel — their left-back pushes very high and the left centre-back doesn\'t step across to cover. A diagonal ball in behind from the right half-space is the best option.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'And their danger player?' },
    { speaker: 'Scout', speakerColor: 'orange', text: 'Their number 8 — he drops between the lines and turns very quickly. Don\'t let him turn. Show him outside. He\'s poor on his left — that\'s the way to push him.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Good. Can you put this in a written report by Friday? Include the set-piece routines.' },
  ],

  matchingExercise: [
    { word: 'Athletic profile', definition: 'The physical qualities of a player — speed, strength, endurance, jumping ability' },
    { word: 'Technical profile', definition: 'The technical skills of a player — first touch, passing, shooting, dribbling' },
    { word: 'Ceiling', definition: 'The highest potential level a player could reach with the right development' },
    { word: 'Floor', definition: 'The minimum reliable performance level — what a player gives even on a bad day' },
    { word: 'Versatility', definition: 'The ability to play effectively in multiple positions or roles' },
    { word: 'Vulnerability', definition: 'A weakness that can be exploited by an opponent' },
    { word: 'Pressing intensity', definition: 'How hard and consistently a team or player presses to win the ball back' },
    { word: 'Set-piece organisation', definition: 'How well a team prepares and executes corners, free kicks, and throw-ins' },
  ],

  fillBlankExercise: [
    { before: 'His pressing output', answer: 'stands out', after: 'immediately — the highest in the squad by far.' },
    { before: 'He would', answer: 'fit into', after: 'our high-press system very naturally.' },
    { before: 'Her performance tends to', answer: 'fall off', after: 'significantly in the second half — fitness is a concern.' },
    { before: 'His leadership really', answer: 'comes into', after: 'its own in big matches — he raises his level when it matters.' },
    { before: 'Their main', answer: 'vulnerability', after: 'is in behind the high line when the ball is played over the top quickly.' },
    { before: 'At 21 years old, his', answer: 'ceiling', after: 'is enormous — I believe he can play at the highest level.' },
    { before: 'His', answer: 'versatility', after: 'is a major asset — he can play right-back, right mid, or centre-back.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the difference between a player\'s "ceiling" and their "floor"?',
      options: ['Ceiling is their maximum potential; floor is their minimum reliable performance level', 'Ceiling is their best game; floor is their worst game last season', 'Ceiling describes their physical profile; floor describes their technical profile'],
      correctIndex: 0,
    },
    {
      question: 'Which is an example of nominalization?',
      options: ['"His pressing output is exceptional."', '"He presses very well."', '"He is an excellent presser."'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "He would ___ into our system very naturally — exactly the profile we need."',
      options: ['fit', 'stand', 'come'],
      correctIndex: 0,
    },
    {
      question: 'What does "versatility" add to a player\'s value?',
      options: ['It allows a squad to be more flexible — one player can cover multiple positions', 'It makes the player more likely to score goals from set pieces', 'It increases the player\'s market value regardless of their quality'],
      correctIndex: 0,
    },
    {
      question: 'In a scouting report, what is the most "actionable" piece of information?',
      options: ['The specific vulnerability to exploit — with a tactical solution for how to attack it', 'The general summary of the opponent\'s playing style and formation', 'The attendance figures and pitch dimensions for the upcoming match'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best formal, analytical language to complete each scouting report sentence.',
    items: [
      {
        sentence: 'Her ___ awareness in the final third is the strongest part of her game.',
        options: ['positional', 'pressing', 'defensive'],
        correctIndex: 0,
        explanation: '"Positional awareness" is the nominalized, formal way to say "she is very aware of her position". It\'s standard scouting language.',
      },
      {
        sentence: 'His ___ profile is elite — top-five speed in the league and excellent endurance.',
        options: ['athletic', 'technical', 'pressing'],
        correctIndex: 0,
        explanation: '"Athletic profile" covers physical qualities — speed, strength, endurance, jumping. "Technical profile" covers ball skills.',
      },
      {
        sentence: 'Their main ___ is in behind the high line — a fast striker would cause serious problems.',
        options: ['vulnerability', 'ceiling', 'intensity'],
        correctIndex: 0,
        explanation: 'A vulnerability is a weakness that can be exploited. Identifying and attacking vulnerabilities is the core of match preparation.',
      },
      {
        sentence: 'His performance tends to ___ off significantly in the second half.',
        options: ['fall', 'stand', 'come'],
        correctIndex: 0,
        explanation: '"Fall off" means to decline or drop in performance — often seen in fitness or endurance data.',
      },
      {
        sentence: 'At only 21, his ___ is enormous — I believe he can play at the highest level.',
        options: ['ceiling', 'floor', 'profile'],
        correctIndex: 0,
        explanation: 'The ceiling is the highest level a player could potentially reach — especially important for young player recruitment.',
      },
      {
        sentence: 'This is a low-risk signing — her ___ is very high even now, at this level of the game.',
        options: ['floor', 'ceiling', 'intensity'],
        correctIndex: 0,
        explanation: 'A high floor means the player reliably performs well even on a bad day — it\'s a measure of consistency and safety.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the most effective scouting language for each situation.',
      items: [
        {
          customerLine: 'You need to describe a player\'s main strength to the head coach in one sentence.',
          options: [
            '"His pressing output is exceptional — the highest in the league this season — and his positional awareness makes him equally strong without the ball."',
            '"He is a very good player who presses a lot and always knows where he is on the pitch."',
            '"I think he\'s excellent — when I watched him, he was doing very well and pressing all the time."',
          ],
          correctIndex: 0,
          explanation: 'The best answer uses nominalized, precise language and backs it up with a comparison to a benchmark (league data).',
        },
        {
          customerLine: 'The director asks about the player\'s suitability for your system.',
          options: [
            '"He would fit into our high-press 4-3-3 system naturally. His pressing intensity, his off-ball movement, and his versatility across the front three make him an ideal profile for what we need."',
            '"I think he\'d be good for us because he\'s a hard worker and he always gives 100%."',
            '"He\'s a very exciting player and the fans would love him."',
          ],
          correctIndex: 0,
          explanation: 'System fit is evaluated using specific football language: formation, pressing intensity, off-ball movement, and role versatility.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this scouting report excerpt.',
      dialogue: [
        { speaker: 'Scout', speakerColor: 'orange', text: 'Player Profile: Marcus Sousa, 23, Centre-Midfielder.' },
        { speaker: 'Scout', speakerColor: 'orange', text: 'Athletic profile: excellent — he runs very fast and he has lots of energy for 90 minutes.' },
        { speaker: 'Scout', speakerColor: 'orange', text: 'Technical profile: strong on the ball. His pressing output is the highest in his league.' },
        { speaker: 'Scout', speakerColor: 'orange', text: 'Ceiling: can play in a top-five European league within two to three seasons.' },
        { speaker: 'Scout', speakerColor: 'orange', text: 'Recommendation: sign in January. Low-risk, high-ceiling. Fits our system naturally.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'he runs very fast and he has lots of energy for 90 minutes',
          correction: 'top-10% sprint speed in his league; exceptional endurance and high distance covered per game',
          explanation: 'Scouting reports use formal, nominalized language — not conversational descriptions. "He runs very fast" should be "top-10% sprint speed". "Lots of energy" should be "exceptional endurance" or measured data.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the scouting report sentence using formal, precise language.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'Their main vulnerability is in behind the high line — specifically...',
          suggestedCompletion: 'in the left channel where the left-back pushes very high and the centre-back doesn\'t step across to cover. A diagonal ball in behind from the right half-space creates a one-v-one situation.',
        },
        {
          customerLine: '',
          salespersonStart: 'At 21 years old, his ceiling is enormous — I believe...',
          suggestedCompletion: 'he can play at the top level of European football within two seasons if his press resistance and final-third decision-making continue to improve.',
        },
        {
          customerLine: '',
          salespersonStart: 'Her floor is very high — even in her worst games she...',
          suggestedCompletion: 'wins aerial duels, leads the pressing line, and makes intelligent runs to create space. Her consistency is exceptional.',
        },
      ],
    },
  },
};
