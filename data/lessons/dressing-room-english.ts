import { Lesson } from '@/types/lesson';

export const dressingRoomEnglish: Lesson = {
  slug: 'dressing-room-english',
  title: 'Dressing Room English',
  subtitle: 'Informal language, banter, team bonding, and register awareness',
  level: 'B1-B2',
  description: 'The dressing room is one of the most informal environments in professional football — and the language spoken there is very different from interviews, press conferences, and formal conversations. This lesson explores informal English, banter, team bonding language, and — crucially — how to know when to switch register.',
  heroImage: '/images/dressing-room-hero.png',

  warmUp: {
    questions: [
      'Do you think the way you speak changes depending on who you are with? Give an example.',
      'What do you think happens in a football dressing room before and after a big match?',
      'Is "banter" a word that exists in your language? How would you describe it to someone who had never heard the word?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Register — matching language to context',
    description: 'Register is the level of formality in your language — and switching between registers is one of the most important skills in advanced English. A professional footballer must be able to speak formally in a press conference, professionally with a manager, and informally in the dressing room — often within the same hour. The same idea expressed at three different registers sounds completely different.',
    positivePattern: 'FORMAL: "I am disappointed with my recent form and I am working to address the areas the manager has identified." PROFESSIONAL: "I know I haven\'t been at my best — I\'m working on it with the coaching staff." INFORMAL (dressing room): "I\'ve been rubbish lately, to be honest. Need to sort myself out."',
    positiveExample: '"To the press: \'The team performed with great character today and I\'m proud of the response.\' To teammates: \'What a result lads! We dug in, didn\'t we?\' Both say the same thing — completely different register."',
    negativePattern: 'WRONG REGISTER: Using formal language in the dressing room sounds strange and cold. Using informal language in a press conference sounds unprofessional. "The lads were proper quality today" → fine in the dressing room. Never say it in a formal interview.',
    negativeExample: 'PRESS CONFERENCE (wrong): "Yeah, we battered them — the lads were buzzing and we properly smashed it today." DRESSING ROOM (wrong): "I would like to formally acknowledge the collective effort that led to today\'s positive result."',
    positiveExamples: [
      { sentence: 'FORMAL: "I would like to thank my teammates for their support during a difficult period."', note: '(Full sentences, formal vocabulary — appropriate for press conferences or official statements)' },
      { sentence: 'INFORMAL: "The lads have been class — couldn\'t have got through it without them."', note: '("The lads," "class," contractions — dressing room / casual interview register)' },
      { sentence: 'NEUTRAL PROFESSIONAL: "The squad\'s been great — I\'m really grateful for the support."', note: '(Middle register — appropriate for a mixed media setting, not too formal or informal)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG (too formal for dressing room): "I appreciate your considerable efforts in this contest, Ronaldo."', note: 'CORRECT (dressing room): "Mate, you were class today."' },
      { sentence: 'WRONG (too informal for press): "Yeah we absolutely battered them, didn\'t we? Proper buzzing."', note: 'CORRECT (press): "We played with great intensity and I\'m really pleased with the result."' },
    ],
  },

  vocabulary: [
    {
      word: 'BANTER',
      partOfSpeech: 'noun',
      definition: 'Friendly teasing and jokes between people who know each other well — a key part of team culture in British football. Banter is affectionate, not hostile.',
      example: '"The banter in the dressing room is relentless — nobody is safe, not even the manager. But it\'s affectionate. It\'s how we show we like each other."',
      imageSlug: '/images/dressing-room-english-banter.png',
    },
    {
      word: 'LADS',
      partOfSpeech: 'noun',
      definition: 'An informal British English word for male teammates — the group. Also used as "the lads" to refer to the whole squad.',
      example: '"Come on lads — heads up! We can still get something from this game. Don\'t let the heads go down."',
      imageSlug: '/images/lads.png',
    },
    {
      word: 'BUZZING',
      partOfSpeech: 'adjective',
      definition: 'Very excited and energised — feeling the high of a positive moment. Common informal expression in British football culture.',
      example: '"The dressing room was absolutely buzzing after the win — music on, everyone singing, the manager even had a smile."',
      imageSlug: '/images/buzzing.png',
    },
    {
      word: 'GAFFER',
      partOfSpeech: 'noun',
      definition: 'Informal word for the manager — used by players to refer to their manager in a casual context. Very common in British football culture.',
      example: '"The gaffer pulled me aside after training and told me I\'d be starting on Saturday. Made my week."',
      imageSlug: '/images/gaffer.png',
    },
    {
      word: 'WIND UP',
      partOfSpeech: 'noun / verb',
      definition: 'To tease or provoke someone — usually as a joke between friends. "A wind-up" = a joke that tricks or teases someone.',
      example: '"He knew they were winding him up — telling him he\'d been dropped when he hadn\'t. But he still checked the team sheet three times."',
      imageSlug: '/images/dressing-room-english-wind-up.png',
    },
    {
      word: 'DRESSING ROOM CULTURE',
      partOfSpeech: 'phrase',
      definition: 'The overall atmosphere, values, and unwritten rules of how a team behaves together privately — what is acceptable, what is expected, and how players treat each other.',
      example: '"The dressing room culture was toxic — senior players excluding younger ones, cliques forming, trust breaking down. When results started suffering, everyone knew why."',
      imageSlug: '/images/dressing-room-culture.png',
    },
    {
      word: 'TEAM BONDING',
      partOfSpeech: 'phrase',
      definition: 'Activities and interactions designed to strengthen relationships between teammates — building trust and friendship that improves performance.',
      example: '"The team bonding trip to Lisbon was exactly what they needed — three days away from football, just enjoying each other\'s company. The chemistry in the team completely changed."',
      imageSlug: '/images/team-bonding.png',
    },
    {
      word: 'CLIQUE',
      partOfSpeech: 'noun',
      definition: 'A small exclusive group within a larger team — players who socialise only with each other and exclude others. Generally negative in team environments.',
      example: '"There were cliques forming — the foreign players in one group, the domestic players in another. The manager had to step in and break them up."',
      imageSlug: '/images/clique.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TAKE THE MICKEY',
      definition: 'British English: to make fun of someone in a light-hearted way — part of normal banter. Also "taking the mick."',
      example: '"They were taking the mickey out of his haircut all week — but he laughed along with it. If you can\'t take it, you don\'t fit in the dressing room."',
      imageSlug: '/images/take-mickey.png',
    },
    {
      phrase: 'MUCK IN',
      definition: 'To help out together as a team — everyone contributing equally, no one thinking they are above doing the basic work.',
      example: '"Everyone mucks in here — even the senior players help carry the kit. That\'s the culture the manager has built."',
      imageSlug: '/images/muck-in.png',
    },
    {
      phrase: 'PULL TOGETHER',
      definition: 'To unite as a group and work collectively — especially during difficult periods.',
      example: '"When results were bad, the squad pulled together — more video sessions together, more meals together. They came out of the difficult run stronger as a team."',
      imageSlug: '/images/pull-together.png',
    },
    {
      phrase: 'TAKE THE HEAT',
      definition: 'To face criticism or pressure — to be the one who deals with negative attention.',
      example: '"The captain always takes the heat publicly — even when the mistake was someone else\'s. That\'s part of the role. You protect your teammates."',
      imageSlug: '/images/take-heat.png',
    },
    {
      phrase: 'WIND DOWN',
      definition: 'To relax gradually after intense activity — the opposite of warming up or preparation.',
      example: '"After a big win, it takes hours to wind down — the adrenaline stays in your system. Nobody sleeps at 10pm after a Champions League game."',
      imageSlug: '/images/dressing-room-english-wind-down.png',
    },
    {
      phrase: 'FIT IN',
      definition: 'To integrate successfully into a group — to become part of the team culture socially as well as on the pitch.',
      example: '"He fitted in immediately — spoke to everyone, learned the team\'s banter culture, joined in everything. By the second week you\'d have thought he\'d been there for years."',
      imageSlug: '/images/dressing-room-english-fit-in.png',
    },
  ],

  onThePitch: {
    instructions: 'These are key dressing room culture concepts and the language associated with them.',
    items: [
      {
        cue: 'The role of banter in team culture',
        meaning: 'Banter is not just entertainment — it serves a social function in building trust, reducing hierarchy, and creating belonging.',
        usage: 'Banter in a football dressing room creates a specific social environment where teasing is a sign of acceptance. "You take the mickey out of the people you like — if nobody\'s teasing you, that\'s when you should be worried." Banter reduces social distance: senior players and young players can interact as equals through banter when hierarchy prevents them being equals professionally. "The manager used to joke with us about our performances — it showed he trusted us enough to be honest in a funny way." Understanding banter is essential for non-British players integrating into British football culture — what looks like mockery from the outside is often genuine affection from the inside. But there is a line: good banter is about shared jokes and team identity; it never targets personal vulnerabilities or genuine insecurities.',
        imageSlug: 'otp-banter-culture',
      },
      {
        cue: 'The dressing room speech — before and after',
        meaning: 'The pre-match and post-match dressing room speech is one of the most important acts of leadership in football — in a very specific informal register.',
        usage: 'Pre-match speech language: "Come on lads — this is our moment. We\'ve worked for this all week. Let\'s go out there and show them. Together. Let\'s go!" Post-win: "Well done everyone — brilliant result. That\'s what we\'re about. Well done lads — enjoy tonight." Post-loss: "Right. That hurt. It should hurt. But we come in tomorrow and we fix it. Together. Nobody outside this room." Dressing room speech is short, emotional, and in informal register — it would sound wrong in formal English. "I would like to collectively acknowledge our efforts" → completely wrong register for a dressing room.',
        imageSlug: 'otp-dressing-room-speech',
      },
      {
        cue: 'New player integration — fitting in socially',
        meaning: 'Joining a new club involves learning the social language and culture of the dressing room as much as the tactical system.',
        usage: 'New player integration tips: "Learn names immediately — using someone\'s name is the fastest way to show respect. Join the banter — but as a recipient first, not an initiator. Earn the right to take the mickey before you start. Muck in — carry equipment, help set up drills, show you are not above the basics. Learn the team\'s unwritten rules — who sits where at team meals, what music plays before games, which jokes are acceptable and which cross a line. Ask questions about the club\'s history and culture." "He integrated brilliantly — within a month he was fitting in like he\'d been there for years. He learned the culture first and performed second."',
        imageSlug: 'otp-new-player-integration',
      },
      {
        cue: 'Toxic dressing room culture — the warning signs',
        meaning: 'Negative dressing room environments have specific signs — cliques, exclusion, a culture of blame — and they directly affect team performance.',
        usage: 'Warning signs of a toxic dressing room: "Cliques forming — groups who eat together, socialise together, and exclude others. No banter — silence in the changing room before games is a bad sign. Players blaming each other publicly after mistakes. Senior players not talking to younger ones. Poor performers being excluded rather than supported. Players checking phones constantly during team meetings." Research consistently shows that team culture predicts performance better than individual talent: "They had the most expensive squad in the league but the worst dressing room culture — and they finished mid-table." A good dressing room is not a team that always agrees — it is a team that disagrees safely and moves forward together.',
        imageSlug: 'otp-toxic-culture',
      },
      {
        cue: 'Register switching in practice — the footballer\'s language journey',
        meaning: 'A professional footballer must switch between formal and informal register multiple times per day.',
        usage: 'A typical day of register switching: "8am: informal chat with teammates in the dressing room — \'Morning lads, how\'s it going? Did you see the game last night?\' → 10am: tactical meeting with the manager — \'I\'d like to ask about my positioning in the press...\' → 1pm: media interview — \'I think we played with great intensity today...\' → 4pm: back in the dressing room — \'The gaffer was buzzing wasn\'t he? You can tell when he\'s happy.\' → 6pm: phone call with family — \'Yeah it went well, knackered though.\'" Same person, six contexts, six registers — from "Morning lads" to "I think we played with great intensity." This register fluency is what advanced English proficiency looks like in practice.',
        imageSlug: 'otp-register-switching',
      },
      {
        cue: '"What goes on tour stays on tour" — the dressing room code',
        meaning: 'The unwritten rule that what happens inside a dressing room stays private — protecting team culture from external interference.',
        usage: '"What goes on tour stays on tour" is an English idiom — anything said or done privately among the group stays within the group. Football dressing rooms operate on this principle: "What\'s said in this room stays in this room." This code creates the psychological safety necessary for honest communication — players can celebrate, argue, cry, and say things they would never say publicly, knowing it will not appear in tomorrow\'s newspaper. When this code is broken — when a player leaks dressing room information to the press — it is considered one of the most serious betrayals in team sport. "The dressing room leak destroyed the trust. After that, nobody said anything real in meetings — they were performing for an audience they didn\'t know was watching."',
        imageSlug: 'otp-dressing-room-code',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo! The [[gaffer:informal word for the manager]] was buzzing this morning — did you see him? He was smiling. Actually smiling. I didn\'t know his face could do that.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Ha! Yeah, he was in a good mood. The [[lads:informal word for male teammates]] were having a go at me in training about that miss yesterday — they were [[taking the mickey:British English for making fun of someone in a light-hearted way]] all session. "Nice technique, Ronaldo! Next time try kicking it at the goal!"',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'That\'s classic [[banter:friendly teasing between people who know each other well]] — they were definitely [[winding you up:teasing or provoking someone as a joke]]. But honestly? That\'s a good sign. They\'re comfortable enough to joke. When the [[dressing room culture:the atmosphere and unwritten rules of how a team behaves together]] is bad, nobody says anything. The silence is worse than the jokes.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'True. You know what helped me [[fit in:to integrate successfully into a group]]? I just [[mucked in:helped out together as a team — no one above the basics]] from day one. Carried the cones, learned everyone\'s name, laughed at their jokes before I started making my own. Earned the right to banter. Now they give me grief about everything.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'That\'s how it works here. And tonight — [[team bonding:activities that strengthen relationships between teammates]]! The gaffer organised dinner. Everyone\'s coming.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Perfect. By the way — the gaffer asked me to do the press conference tomorrow. I need to remember to switch from... *[gestures around the dressing room]* ...this, to that. No "lads", no "buzzing", no "the gaffer was class". Full professional mode. Different language, same feeling inside.',
    },
  ],

  matchingExercise: [
    { word: 'BANTER', definition: 'Friendly teasing between people who know each other well — a sign of team acceptance' },
    { word: 'GAFFER', definition: 'Informal word for the manager — used by players in casual contexts' },
    { word: 'BUZZING', definition: 'Very excited and energised — feeling the high of a positive moment' },
    { word: 'LADS', definition: 'Informal British English word for male teammates — the group' },
    { word: 'CLIQUE', definition: 'A small exclusive group within a team that excludes others' },
    { word: 'DRESSING ROOM CULTURE', definition: 'The atmosphere, values, and unwritten rules of how a team behaves privately' },
    { word: 'MUCK IN', definition: 'To help out as a team — everyone contributing equally, no one above the basics' },
    { word: 'WIND UP', definition: 'To tease or provoke someone, usually as a joke between friends' },
  ],

  fillBlankExercise: [
    { before: 'The', answer: 'gaffer', after: 'was in a great mood after the win — even came into the dressing room to celebrate with us.' },
    { before: 'The dressing room was absolutely', answer: 'buzzing', after: 'after the result — music on, everyone singing.' },
    { before: 'They were', answer: 'taking the mickey', after: 'out of his new haircut all week — but he gave as good as he got.' },
    { before: 'The', answer: 'banter', after: 'in this dressing room is relentless — but it\'s affectionate. That\'s how we show we trust each other.' },
    { before: 'He', answer: 'fitted in', after: 'immediately — learned everyone\'s name, joined in the jokes, mucked in from day one.' },
    { before: 'When things get difficult, we', answer: 'pull together', after: '— more team meals, more time together. You come out of bad runs stronger.' },
    { before: 'There were', answer: 'cliques', after: 'forming — different nationalities eating separately. The manager stepped in and broke it up.' },
    { before: 'The', answer: 'team bonding', after: 'trip completely changed the atmosphere — three days away from football, just enjoying each other\'s company.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is "register" in language terms?',
      options: [
        'The accent or dialect that a speaker uses — how they pronounce words.',
        'The level of formality — whether language is formal, professional, neutral, or informal.',
        'The speed at which someone speaks — how fast or slow they communicate.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The gaffer was buzzing after the win." Which context is this language appropriate for?',
      options: [
        'A formal post-match press conference — talking to journalists.',
        'An informal conversation in the dressing room with teammates.',
        'A professional meeting with the club\'s director of football.',
      ],
      correctIndex: 1,
    },
    {
      question: '"They were taking the mickey out of his haircut." What does this mean?',
      options: [
        'They were criticising his haircut in a genuinely hostile way — they did not like it.',
        'They were teasing him about his haircut in a light-hearted, friendly way.',
        'They were asking him to get a different haircut — making a serious suggestion.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why is silence in a dressing room described as "worse than the jokes"?',
      options: [
        'Silence means the team cannot communicate tactically — they need noise to coordinate.',
        'Silence suggests a breakdown in trust and comfort — when players do not banter, it signals the culture is negative.',
        'Silence is a tactical sign that the manager is about to give an important speech — players become nervous.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Everyone mucks in here." What does "muck in" mean?',
      options: [
        'Everyone gets dirty during training sessions — playing in the mud.',
        'Everyone contributes equally to the basic tasks — no one thinks they are too important to help.',
        'Everyone makes mistakes sometimes — the team accepts individual errors.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why might cliques forming in a dressing room be damaging to team performance?',
      options: [
        'Cliques mean some players train harder than others — creating fitness imbalances in the squad.',
        'Cliques create internal divisions, reduce trust, and prevent the collective communication needed for team performance.',
        'Cliques mean the manager cannot select the best players — they have to manage social politics instead.',
      ],
      correctIndex: 1,
    },
    {
      question: '"What goes on tour stays on tour" — what principle does this phrase describe in a dressing room context?',
      options: [
        'Players should only speak about positive experiences on away trips — keeping negative moments private.',
        'What happens privately within the group stays private — protecting the psychological safety of open communication.',
        'Any fines or penalties from club tours must be kept confidential from the manager.',
      ],
      correctIndex: 1,
    },
    {
      question: 'A footballer says in a press conference: "The lads were class today — the gaffer was buzzing." Is this appropriate?',
      options: [
        'Yes — it is honest and shows the player\'s personality, which fans appreciate.',
        'It depends — in some informal media contexts this might be acceptable, but in a formal press conference it is too informal and unprofessional.',
        'No — "lads" and "gaffer" and "buzzing" are all inappropriate in any public communication from a professional athlete.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each register or dressing room culture sentence with the correct vocabulary.',
    items: [
      {
        sentence: '"At the press conference: \'I\'m really pleased with the team\'s response today.\' In the dressing room: \'Come on _____ — what a result! That\'s us!\'"',
        options: ['lads', 'colleagues', 'players'],
        correctIndex: 0,
        explanation: '"Lads" is correct — the informal British English term for male teammates, used in dressing room register. "Colleagues" is formal workplace language — completely wrong register for a dressing room celebration. "Players" is neutral/professional — a manager or journalist would refer to "the players," but teammates do not call each other "players" informally. "Lads" is the defining informal term for male group address in British football culture. "Come on lads!" is one of the most natural team motivation phrases — it is warm, inclusive, and immediately informal. The register contrast in the question makes this clear: "pleased with the team\'s response" (formal/neutral) vs. "come on lads — what a result!" (informal/dressing room).',
      },
      {
        sentence: '"They were _____ him all week about missing that penalty — but he laughed along. That\'s good banter."',
        options: ['winding up', 'winding down', 'picking up'],
        correctIndex: 0,
        explanation: '"Winding up" is correct — to wind someone up = to tease or provoke them, usually as a friendly joke. "Winding him up about missing that penalty" = teasing him about the miss in an affectionate way. "He laughed along" confirms it was received positively — good banter rather than genuine hostility. "Winding down" = relaxing gradually after intense activity — the opposite action. "Picking up" = collecting or taking something — not relevant here. "Wind up" is one of the most common informal British English expressions for playful teasing, and it is central to dressing room banter culture.',
      },
      {
        sentence: '"He _____ brilliantly — within two weeks he knew everyone\'s name, joined in the banter, and felt like part of the group."',
        options: ['fitted in', 'fitted out', 'fitted up'],
        correctIndex: 0,
        explanation: '"Fitted in" is correct — to fit in = to integrate successfully into a group or environment. "He fitted in brilliantly" = he became naturally part of the team culture quickly. "Fitted out" = equipped or furnished — "fitted out the dressing room" (gave it equipment), not relevant to social integration. "Fitted up" = a British English informal expression meaning to frame someone for something they did not do (e.g., "he was fitted up by the police") — completely wrong meaning here. "Fitting in" to a new team is a precise social concept: learning the group\'s rules, language, and habits, and being accepted as part of the culture.',
      },
      {
        sentence: '"The captain always _____ publicly — even when the mistake was a teammate\'s. That\'s what leadership looks like."',
        options: ['takes the heat', 'takes the mickey', 'takes the ball'],
        correctIndex: 0,
        explanation: '"Takes the heat" is correct — to take the heat = to face criticism or negative attention, especially for others. "Even when the mistake was a teammate\'s" confirms that the captain is protecting others by accepting public responsibility. This is a classic leadership quality in professional sport — the captain shields younger or more vulnerable teammates from media criticism. "Takes the mickey" = makes fun of someone — clearly wrong in this serious leadership context. "Takes the ball" = receives a pass — a football action, not relevant here. "Take the heat" is a fixed English idiom: "I\'ll take the heat for this decision," "she took the heat from the press to protect the squad."',
      },
      {
        sentence: '"At a press conference, you should say: \'I\'m delighted with the team\'s performance today.\' In the dressing room after the same win, you would say: \'_____.\'"',
        options: [
          'Lads, that was class! Absolutely buzzing right now!',
          'Colleagues, I am delighted with our collective performance.',
          'Players, good effort from the team today overall.',
        ],
        correctIndex: 0,
        explanation: '"Lads, that was class! Absolutely buzzing right now!" is correct — the informal dressing room register version of the same feeling. "Class" = excellent/brilliant (British English slang). "Absolutely buzzing" = extremely excited. "Lads" = the group address. Together these create the informal, high-energy, emotionally immediate language appropriate for a dressing room celebration. Option B uses formal language ("colleagues," "delighted with our collective performance") — wrong register for a private team moment. Option C is neutral professional ("players," "good effort") — what a manager might say in a review meeting, not what a teammate shouts in celebration. The register shift from "I\'m delighted with the team\'s performance" to "Lads, that was class!" is exactly what the grammarFocus lesson is about.',
      },
      {
        sentence: 'Which statement describes a HEALTHY dressing room culture?',
        options: [
          '"The senior players sit separately at team meals — they\'ve earned that. Younger players should wait to be invited into the group."',
          '"Everyone\'s included — banter flows between senior and youth players, there are no cliques, and when someone makes a mistake in training, teammates help them fix it rather than exclude them."',
          '"The group is tight — but you have to earn your place. New signings go through a tough period before they\'re accepted. It\'s tradition."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — describes the characteristics of a healthy, high-performing team culture. "Everyone\'s included — banter flows between senior and youth" (no hierarchy exclusion), "no cliques" (collective rather than divided), "when someone makes a mistake, teammates help them fix it rather than exclude them" (psychological safety — people can make mistakes without fear of social consequence). A describes a hierarchical exclusion culture — senior players maintaining status through separation. This is not healthy team culture; it is the early sign of the clique formation that damages trust. C describes a "hazing" or "initiation" culture — making new arrivals earn acceptance through a difficult period. Research shows this damages integration speed and can permanently damage trust if the "tough period" is excessive.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use register awareness and dressing room vocabulary to give detailed responses.',
      items: [
        {
          customerLine: 'Explain what banter is — and why it matters for team culture.',
          options: [
            '"Banter is when teammates joke and tease each other. It makes the environment fun and relaxed, which is good for team cohesion."',
            '"Banter is more than just jokes — it is a social bonding mechanism that serves multiple functions simultaneously. Functionally, it reduces social distance: a 35-year-old club legend and a 17-year-old academy player can interact as equals through banter in a way that formal professional hierarchy would prevent. It builds trust: when you are comfortable enough to tease someone and receive teasing back, you have established mutual comfort and security. It also manages emotion: a dressing room that can laugh together after a difficult loss recovers psychologically faster than one that sits in silence. But the most important thing about banter is the unwritten line — genuine banter never targets real vulnerabilities or personal pain points. It targets shared team identity, shared experiences, and the things that can be laughed at because they are not genuinely sensitive. A team that understands this line uses banter to strengthen. One that crosses it causes damage."',
            '"Banter is the informal teasing and joking that happens in a team environment. It is particularly important in British football culture. The key is that banter must be affectionate rather than hostile — it is a sign of acceptance within the group."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analyses banter on three functional levels with genuine depth. "Social bonding mechanism" (framework), "reduces social distance between 35-year-old and 17-year-old" (specific example), "builds trust — comfortable enough to tease and receive teasing" (the trust mechanism), "manages emotion — laughing together after a loss" (emotional function), "the unwritten line — never targets real vulnerabilities" (the crucial distinction). A is accurate but shallow. C captures the key points but lacks the analytical depth of B and does not explain the mechanisms behind why banter matters.',
        },
        {
          customerLine: 'How does a new foreign player integrate into a British dressing room culture — what specific steps should they take?',
          options: [
            '"A new foreign player should learn English quickly, be friendly, join in with team activities, and show their personality. It takes time to fit in but if you are a good person and work hard, people will accept you."',
            '"Integrating into a British dressing room as a foreign player requires understanding that the culture itself is unfamiliar — not just the language. The first step is observation: before joining the banter, understand the room\'s specific culture. Who are the main personalities? What are the team\'s in-jokes? What are the unwritten rules? Who sits where at team meals? Observation takes days, not minutes. Next: earn the right to take the mickey before you start giving it. In British dressing room culture, the banter hierarchy exists — you receive it first, prove you can handle it with good humour, then gradually earn the right to give it back. Learn names immediately — using someone\'s name is the fastest social shortcut. Muck in with everything: carry equipment, help set up. Show you are not above the basics. And crucially: do not try to immediately recreate the culture of your previous club in your new one. Each dressing room has its own culture — you join it, not the other way around."',
            '"A new player should be friendly and open from day one. Learning the team\'s banter culture takes time, and you should not try to join in immediately — just observe first. Learn names, be professional in training, and gradually you will be accepted. British banter culture can be intimidating at first but it is genuinely affectionate."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — specific, structured, and genuinely insightful. "Understanding the culture itself is unfamiliar — not just the language" (the key insight), "observation: who are the main personalities, what are the in-jokes, who sits where" (concrete steps), "earn the right to take the mickey before you give it — banter hierarchy" (the specific British cultural insight), "learn names immediately — the fastest social shortcut" (specific advice), "muck in — show you are not above the basics" (the status-equalising behaviour), "do not try to recreate your previous club\'s culture — you join theirs" (the most important cultural insight). A and C are generally correct but lack the specificity and cultural insight of B.',
        },
        {
          customerLine: 'Describe the difference between formal, professional, and informal register — with examples from football.',
          options: [
            '"Formal language uses proper grammar and vocabulary. Professional is slightly less formal but still correct. Informal is casual — contractions, slang, shorter sentences. A footballer uses all three in different situations."',
            '"Register is not simply a sliding scale of correctness — each register has its own specific vocabulary, structures, and contexts, and using the wrong register in the wrong context is a social error as much as a linguistic one. Formal register: \'I would like to extend my gratitude to the club and supporters for their unwavering support during a challenging transitional period.\' — used in official statements, legal documents, public awards. Professional register: \'I\'m really grateful for the support — it\'s been a difficult few weeks.\' — used in media interviews, professional meetings, mixed audiences. Informal register: \'The lads have been class — couldn\'t have got through it without them, to be honest.\' — used in dressing rooms, with close teammates, in genuine personal conversation. The same gratitude. Three completely different social contexts. A footballer who uses only formal language everywhere is cold; one who uses only informal language everywhere is unprofessional. Register fluency — switching accurately and naturally — is what advanced English proficiency actually means in practice."',
            '"Formal language is for official settings — press conferences, interviews, official statements. Professional language is for meetings with coaches and directors. Informal language is for teammates and close friends. All three use the same grammar rules but the vocabulary and tone change significantly between levels."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a sophisticated analysis with parallel examples of the same content in three registers. "Register is not simply a sliding scale — each has its own vocabulary, structures, and contexts" (the key insight), three specific examples of the same gratitude in three registers, "using the wrong register is a social error as much as a linguistic one" (the crucial point — it is not just grammar), "a footballer who uses only formal language is cold; only informal is unprofessional" (the practical stakes), "register fluency — switching accurately and naturally — is what advanced English proficiency actually means" (the culminating insight). A is accurate but only describes the difference, not the function or stakes. C is reasonable but does not give examples or explain why register fluency matters.',
        },
        {
          customerLine: 'What creates a toxic dressing room — and what can a team do to fix it?',
          options: [
            '"A toxic dressing room usually has cliques, poor communication, and players who blame each other. To fix it, the manager needs to step in and change the culture — team bonding activities help."',
            '"Toxic dressing room cultures share a specific set of warning signs, and understanding their root causes is as important as the solutions. The root cause is almost always a breakdown of psychological safety: players no longer feel that it is safe to make mistakes, express honest opinions, or support each other in difficulty. This manifests as cliques (sub-groups who protect each other and exclude others), blame culture (mistakes are immediately attributed to individuals rather than addressed collectively), silence (no banter, no honesty, no connection), and performance theatre (players performing effort for the manager rather than genuinely competing). Fixing it requires more than team dinners. It requires structural changes: the manager must address clique behaviour directly (deliberately mixing groups in training and at meals), create a culture where mistakes are discussed rather than blamed, and model the vulnerability they want from the team — acknowledging their own errors openly. The most powerful tool is the honest team conversation: bringing the room together and naming what is happening. Teams rarely fix themselves in silence."',
            '"Toxic cultures happen when trust breaks down. Warning signs include cliques, lack of communication, senior players not engaging with younger ones, and consistent underperformance relative to talent. The manager needs to break up the cliques, improve communication between all players, and create shared experiences through team bonding. It takes time but the culture can change."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — identifies root causes, names specific manifestations, and gives structural solutions. "Psychological safety — players no longer feel it is safe to make mistakes or express honest opinions" (the root cause), four specific manifestations named and described (cliques, blame, silence, performance theatre), "fixing it requires more than team dinners — structural changes" (the key insight: surface solutions are not enough), "deliberately mixing groups in training and at meals" (specific structural intervention), "manager must model the vulnerability they want — acknowledging their own errors" (the leadership behaviour required), "the honest team conversation — naming what is happening" (the most powerful tool). A and C identify the symptoms and suggest solutions but do not analyse the root cause or provide the depth of structural solution that B offers.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three register errors or dressing room vocabulary mistakes in this passage. Find them.',
      dialogue: [
        { speaker: 'Narrator', text: 'The dressing room before a big match is a fascinating environment — a combination of nervous energy, focused preparation, and intense banter.' },
        { speaker: 'Narrator', text: 'The manager entered the changing room formally, addressing the squad: "Colleagues, I would like to formally acknowledge your collective preparation efforts this week."' },
        { speaker: 'Narrator', text: 'The players exchanged glances. This was not the register they needed sixty seconds before a European final.' },
        { speaker: 'Narrator', text: 'Meanwhile, in the corner, two senior players were taking the heat out of the youngest member of the squad — gentle teasing about his first-ever European appearance.' },
        { speaker: 'Narrator', text: 'He responded with a smile and gave some banter back. The room relaxed. That exchange — more than any tactical speech — told you the team was ready.' },
        { speaker: 'Narrator', text: 'After the win, the dressing room was buzzing. The gaffer, usually so formal in team meetings, was absolutely winding down — celebrating with the players as if he was one of them.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: '"Colleagues, I would like to formally acknowledge your collective preparation efforts this week."',
          correction: 'This is a register error — a pre-match dressing room speech should be informal and emotional: "Come on lads — we\'ve worked for this all week. Let\'s go!"',
          explanation: 'The narrator even confirms this in line 3: "This was not the register they needed sixty seconds before a European final." A formal register pre-match speech is almost always the wrong choice — it creates emotional distance at the moment the team needs emotional connection. "Colleagues" and "formally acknowledge" are words from a board meeting, not a dressing room. Pre-match speeches need short, emotional, informal language: "Come on!" "This is our moment!" "Together!" The register error here is not accidental — it illustrates the central lesson: the wrong register in the wrong context can be just as damaging as saying the wrong thing.',
        },
        {
          lineIndex: 3,
          incorrectText: 'taking the heat out of the youngest member',
          correction: 'taking the mickey out of the youngest member',
          explanation: '"Taking the heat" = facing criticism or pressure — the captain takes the heat from the press, takes the heat for a mistake. "Taking the mickey" = teasing someone in a light-hearted, banter context. The two phrases are completely different in meaning. Senior players gently teasing a younger player = "taking the mickey" (banter). A captain absorbing media criticism = "taking the heat." The context ("gentle teasing about his first-ever European appearance") clearly describes banter, not someone absorbing pressure on behalf of others. This is a vocabulary precision error — both phrases exist, but they describe opposite things.',
        },
        {
          lineIndex: 5,
          incorrectText: 'absolutely winding down',
          correction: 'absolutely buzzing / absolutely ecstatic',
          explanation: '"Winding down" means relaxing gradually after intense activity — the opposite of high energy. After a big win, a manager celebrating with players is excited, energised, and emotional — the opposite of winding down. "Buzzing" = very excited and energised — appropriate for a win celebration. "Wind down" describes the process of coming off the adrenaline high hours later, not the immediate post-match celebration. "He was absolutely winding down" in this context is a contradiction: you wind down when you are calming from excitement — you do not wind down while actively celebrating. The mistake is using the wrong "wind" phrasal verb: "wind up" (tease) and "wind down" (relax) are both different from "winding up" (getting excited/energised), which is what the manager appears to be doing.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each analysis of dressing room language and register.',
      items: [
        {
          customerLine: 'Explain how the same footballer must use completely different language in three different contexts on the same day.',
          salespersonStart: 'A professional footballer\'s day is a masterclass in register switching — the same person, the same feelings, expressed in completely different language across different contexts —',
          suggestedCompletion: 'A professional footballer\'s day is a masterclass in register switching — the same person, the same feelings, expressed in completely different language across different contexts — and doing this fluently is one of the most underrated skills in professional sport. In the morning team meeting with the coaching staff: "I\'d appreciate the chance to discuss my pressing triggers — I think there might be a specific adjustment that could help." Professional, measured, precise. In the dressing room before training: "Gaffer says the press trigger is lagging — I need to sort it out. Anyone else getting grief about theirs?" Informal, shared, banter-adjacent. In the post-training press conference: "The manager and I have been working on some refinements to my pressing role — I feel we\'re making progress and I\'m confident it will translate to match day." Formal professional, carefully considered for a public audience. Same content. Same person. Three completely different registers — and switching between them accurately and naturally is what it means to be genuinely proficient in English.',
        },
        {
          customerLine: 'Describe what a team captain should say in the dressing room at half-time when the team is 2-0 down.',
          salespersonStart: 'The half-time dressing room speech when 2-0 down is one of the most demanding communication moments in football — the captain must balance honesty with motivation, urgency with calm —',
          suggestedCompletion: 'The half-time dressing room speech when 2-0 down is one of the most demanding communication moments in football — the captain must balance honesty with motivation, urgency with calm — and the register choices matter enormously. Too formal and the room will not respond emotionally. Too chaotic and the panic increases. The best half-time speeches at 2-0 down tend to follow a structure: acknowledge the reality without dwelling on it ("We\'ve been off it — let\'s be honest"), identify one clear thing to fix rather than everything ("We\'re not defending the second ball — every time it goes long, we\'re second to it"), and then shift immediately to belief and forward momentum ("But we can do this. We\'ve come back from worse. Forty-five minutes. Together. Let\'s go."). The register is informal — "we\'ve been off it," "let\'s go" — but the content is specific and actionable. The captain does not perform emotion; they direct it towards something useful.',
        },
        {
          customerLine: 'How does a manager build a positive dressing room culture from the very first day in charge?',
          salespersonStart: 'A new manager has a narrow window to establish the culture they want — the first week sets expectations that are very difficult to change later —',
          suggestedCompletion: 'A new manager has a narrow window to establish the culture they want — the first week sets expectations that are very difficult to change later — and the most impactful changes are behavioural, not tactical. The culture communicates itself through actions before words. Arriving before anyone else: "He was there before the kit man. That tells you everything." Addressing everyone — from the first-team captain to the academy keeper doing individual work — by name from day one: "He knew every name. Every one. By Thursday." Creating clear unwritten rules immediately: how the training ground is run, how meetings work, what is expected of senior players towards younger ones, how mistakes are treated. And crucially: the first time someone breaks the culture, how the manager responds. If a senior player is rude to a staff member and nothing is said, the culture is defined by that silence. If the same thing is addressed immediately, calmly, and without drama, the culture is defined by that standard. New managers who wait to establish culture often find the old culture fills the space instead.',
        },
        {
          customerLine: 'Analyse why the "dressing room code" — what happens in the room stays in the room — is so important for team performance.',
          salespersonStart: 'The dressing room code is not just a tradition — it is the structural condition that makes honest team communication possible —',
          suggestedCompletion: 'The dressing room code is not just a tradition — it is the structural condition that makes honest team communication possible — because without the guarantee of privacy, players cannot speak truthfully. Consider what must be said in a high-performing team\'s private space: a captain must be able to tell a teammate their performance is not good enough without it appearing in tomorrow\'s press. A manager must be able to challenge a player without the player\'s reputation being damaged publicly before they have a chance to respond. Players must be able to admit fear, fatigue, or genuine difficulty without those admissions being used against them. All of this requires psychological safety — the knowledge that what is said will not leave the room. When the code is broken — when a journalist receives a dressing room leak — the damage is immediate and often irreversible: players stop saying honest things in team spaces, start managing their public image even in private, and the genuine communication that drives performance disappears. The code is not about protecting secrets for their own sake. It is about protecting the space where truth can exist.',
        },
      ],
    },
  },
};
