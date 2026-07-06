import { Lesson } from '@/types/lesson';

export const grassrootsFootball: Lesson = {
  slug: 'grassroots-football',
  title: 'Grassroots Football',
  subtitle: 'Sunday league, five-a-side, futsal, and youth football',
  level: 'B1-B2',
  description: 'Most football is not played in stadiums — it is played on cold Sunday mornings, in sports halls, and on local pitches. In this lesson you will learn the vocabulary of grassroots football and the present perfect continuous grammar used to talk about ongoing involvement in sport.',
  heroImage: '/images/grassroots-football-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present perfect continuous — talking about ongoing involvement in sport',
    description: 'The present perfect continuous (have/has + been + -ing) is used to talk about activities that started in the past and are STILL continuing now — or that recently stopped but have a result we can see now. It emphasises the duration of an activity and shows it is ongoing.',
    positivePattern: 'HAVE/HAS + BEEN + VERB-ING. For duration: "for [time]" or "since [point in time]."',
    positiveExample: '"She has been playing for the Sunday league side for three seasons." (She started three seasons ago and is still playing.) / "He has been coaching youth football since he retired from the professional game." (Started when he retired, still coaching now.)',
    negativePattern: 'Do NOT use with stative verbs (know, believe, love, own). Do NOT confuse with present perfect simple — continuous = ongoing activity with duration; simple = completed action.',
    negativeExample: 'WRONG: "She has been knowing the club for years." (stative verb "know" — use simple: "She has known the club for years.") / WRONG for completed action: "She has been scoring a goal today." → RIGHT: "She has scored a goal today." (completed) → "She has been scoring well all season." (ongoing pattern)',
    positiveExamples: [
      { sentence: '"They have been running the Sunday league for over 20 years."', note: '(Started 20+ years ago — still running it now. Duration focus.)' },
      { sentence: '"The kids have been training twice a week since September."', note: '(Started in September — still training now. "Since" = starting point.)' },
      { sentence: '"He has been playing five-a-side with the same group of friends for fifteen years."', note: '(Long-term ongoing activity — emphasises the commitment and duration.)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "She has been scoring in last week\'s match." → RIGHT: "She scored in last week\'s match." (completed past action — use simple past)', note: 'Present perfect continuous = ongoing, not completed single events.' },
      { sentence: 'WRONG: "The club has been founding in 1987." → RIGHT: "The club was founded in 1987." (completed past event — use simple past passive)', note: '"Founded" is a completed event — past simple, not perfect continuous.' },
    ],
  },

  vocabulary: [
    {
      word: 'SUNDAY LEAGUE',
      partOfSpeech: 'phrase',
      definition: 'Amateur football competitions played on Sunday mornings — open to anyone. The most common form of adult recreational football in England.',
      example: '"He has been playing Sunday league football since he was 18 — every week without fail, rain or shine."',
      imageSlug: '/images/sunday-league.png',
    },
    {
      word: 'FIVE-A-SIDE',
      partOfSpeech: 'phrase',
      definition: 'A small-sided version of football played with five players per team — usually indoors or on small artificial pitches.',
      example: '"We have been playing five-a-side every Thursday evening for the last two years — it\'s a great workout."',
      imageSlug: '/images/five-a-side.png',
    },
    {
      word: 'FUTSAL',
      partOfSpeech: 'noun',
      definition: 'The official small-sided version of football — five players per team, played indoors on a hard court with a smaller, heavier ball. Recognised by FIFA.',
      example: '"The national futsal team has been training intensively for the upcoming European Championships."',
      imageSlug: '/images/futsal.png',
    },
    {
      word: 'GRASSROOTS',
      partOfSpeech: 'adjective',
      definition: 'The foundation level of sport — amateur, community-based football. Not professional. The opposite of elite.',
      example: '"Grassroots football is where most people experience the game — local clubs, youth teams, Sunday leagues."',
      imageSlug: '/images/grassroots-football-grassroots.png',
    },
    {
      word: 'YOUTH TEAM',
      partOfSpeech: 'phrase',
      definition: 'A football team made up of young players — usually under a specific age (under-10s, under-16s, under-21s).',
      example: '"She has been playing for the under-16 youth team since she was thirteen — one of their best players."',
      imageSlug: '/images/youth-team.png',
    },
    {
      word: 'ACADEMY',
      partOfSpeech: 'noun',
      definition: 'A professional club\'s youth development programme — where talented young players are trained from a young age with the hope of turning professional.',
      example: '"He has been at the Chelsea academy since he was eight years old — they believe he has professional potential."',
      imageSlug: '/images/grassroots-football-academy.png',
    },
    {
      word: 'PARK FOOTBALL',
      partOfSpeech: 'phrase',
      definition: 'Informal, recreational football played in public parks — the most basic form of football, with no referee or organised competition.',
      example: '"Growing up, they used to play park football every day after school — jumpers for goalposts."',
      imageSlug: '/images/park-football.png',
    },
    {
      word: 'VOLUNTEER',
      partOfSpeech: 'noun / verb',
      definition: 'Someone who gives their time for free — in grassroots football, volunteers run clubs, coach youth teams, and organise fixtures without payment.',
      example: '"The club has been run entirely by volunteers for decades — without them, hundreds of local children would have nowhere to play."',
      imageSlug: '/images/volunteer.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SIGN UP',
      definition: 'To officially join a team or register for a competition — to put your name down.',
      example: '"Twenty kids have signed up for the summer holiday coaching sessions — more than we expected."',
      imageSlug: '/images/sign-up.png',
    },
    {
      phrase: 'TURN OUT',
      definition: 'To appear for a match — when a player shows up and plays for a team.',
      example: '"He has been turning out for the Sunday league side every week this season, even through injury."',
      imageSlug: '/images/turn-out.png',
    },
    {
      phrase: 'BUILD UP',
      definition: 'To develop or create something gradually over time — grassroots clubs build up their player base and facilities.',
      example: '"They have been building up the youth section of the club for ten years — from two teams to twelve."',
      imageSlug: '/images/grassroots-football-build-up.png',
    },
    {
      phrase: 'GIVE BACK',
      definition: 'To contribute to the community or sport that helped you — a professional player returning to volunteer or coach at a grassroots club.',
      example: '"She has been giving back to the local community by coaching the under-10 girls\' team every Saturday morning."',
      imageSlug: '/images/give-back.png',
    },
    {
      phrase: 'DROP OUT',
      definition: 'To stop participating — when a player or team stops playing before the end of a competition or season.',
      example: '"Two players have dropped out of the five-a-side group this month — we need to find replacements."',
      imageSlug: '/images/grassroots-football-drop-out.png',
    },
    {
      phrase: 'FIT IN',
      definition: 'To find time for something — to include football in a busy schedule. Also: to suit a team\'s style.',
      example: '"He has been struggling to fit in training sessions around his work schedule — he works nights three days a week."',
      imageSlug: '/images/grassroots-football-fit-in.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key experiences and vocabulary from grassroots and community football.',
    items: [
      {
        cue: '"Jumpers for goalposts"',
        meaning: 'Using clothes as informal goal markers — a symbol of children playing football in parks without proper equipment.',
        usage: '"Jumpers for goalposts" is a famous cultural phrase in English football. It represents the pure, simple joy of children playing football anywhere — not needing expensive equipment or facilities. It is used nostalgically: "I learned to love football with jumpers for goalposts in the park." Many professional players use this phrase when talking about their childhood. It captures the grassroots spirit: football does not need a perfect pitch or professional goals — just a ball and enthusiasm.',
        imageSlug: 'otp-jumpers-for-goalposts',
      },
      {
        cue: 'The Sunday league experience',
        meaning: 'The typical elements of amateur Sunday league football: early mornings, cold weather, narrow pitches, competitive spirit, post-match drinks.',
        usage: 'Sunday league football has its own culture: "Rolling up at 9am on a freezing Sunday morning," "Arguing with the referee who is also a part-time plumber," "Celebrating like you\'ve won the World Cup after a 3-2 win against rivals." Sunday league is famous for high passion and low quality — but it is the most played form of football in England. "I\'ve been playing Sunday league for 20 years" is a common way adults talk about ongoing recreational football.',
        imageSlug: 'otp-sunday-league-experience',
      },
      {
        cue: 'Grassroots vs elite football',
        meaning: 'The contrast between community-based amateur football and the professional game — and why both matter.',
        usage: '"Grassroots" = the foundation of the sport — amateur, local, community. "Elite" = professional, highly paid, stadium football. They are connected: all professional players started in grassroots football. Governing bodies like the FA and FIFA invest heavily in grassroots development because it builds participation, health, and the talent pipeline for professional football. "Without grassroots investment, the elite game would eventually have no players."',
        imageSlug: 'otp-grassroots-vs-elite',
      },
      {
        cue: 'The FA Cup — from non-league to Wembley',
        meaning: 'The FA Cup begins at the grassroots level and ends at Wembley — any club can enter, creating a pathway from the bottom to the top.',
        usage: 'The FA Cup is open to all clubs — including tiny non-league sides. This means a team from the ninth tier of English football could, theoretically, reach the final at Wembley. The early rounds are called "qualifying rounds" — played in September and October by small clubs. Each victory brings them closer to the professional game. "They have been playing FA Cup qualifying football for decades — they finally reached the first round proper and faced a Football League side." This is what connects grassroots to elite.',
        imageSlug: 'otp-fa-cup-qualifying',
      },
      {
        cue: 'Coaching licences',
        meaning: 'Official qualifications that allow people to coach football — from basic grassroots certificates to professional badges.',
        usage: 'To coach football officially, you need a coaching licence. In England, the FA offers levels from "FA Level 1" (basic, for grassroots volunteers) to "UEFA Pro Licence" (for professional managers). "She has been studying for her FA Level 2 badge while coaching the youth team." Most Sunday league managers do not have licences — but formal coaching programmes are growing at grassroots level to improve the quality of coaching for young players.',
        imageSlug: 'otp-coaching-licences',
      },
      {
        cue: 'Artificial pitches / 3G / 4G',
        meaning: 'Synthetic grass surfaces used in many grassroots football venues — named for the generation of artificial turf technology.',
        usage: '"3G" and "4G" refer to third and fourth-generation artificial grass — these are high-quality synthetic surfaces that can be used in all weathers. Many grassroots clubs now have 3G pitches instead of grass. "The new 3G pitch has completely changed the club — we can train every day now, even in December." Natural grass can become unplayable in bad weather, especially in winter. 3G pitches allow year-round football at grassroots level.',
        imageSlug: 'otp-artificial-pitches',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today — [[grassroots:the foundation level of sport — amateur, community-based football]] football. Most people who play football are not professionals — they play in [[Sunday league:amateur football competitions played on Sunday mornings]]s, [[five-a-side:small-sided version of football with five players per team]] leagues, or youth teams. How long have you been playing football, Sofia?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I have been playing since I was six years old — eighteen years now. I started at a local [[youth team:a football team made up of young players]] and then joined the [[academy:a professional club\'s youth development programme]] at thirteen. After I left, I started playing for a Sunday league side — I have been [[turn out:to appear for a match — to show up and play]]ing for them for four seasons.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And [[futsal:the official small-sided version of football, played indoors on a hard court with a smaller ball]]? Have you tried it?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I have been playing futsal for two years — it is completely different from outdoor football. The ball is smaller and heavier. The pace is incredibly fast. Many coaches believe futsal develops technical ability better than [[park football:informal, recreational football played in public parks]] because the touches are so frequent.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'That is true. Many of the world\'s greatest players grew up playing futsal. Now — the [[volunteer:someone who gives their time for free]]s. They are the backbone of grassroots football. Has anyone been [[give back:to contribute to the community or sport that helped you]]ing back to grassroots football?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I have been [[sign up:to officially join a team or register]]ping up young children to weekend coaching sessions since the summer. It is only two hours a week but the impact is huge. You can see them [[build up:to develop something gradually]]ing their confidence and love for the game.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'That is the essence of grassroots football. Tell me — has the game been changing at grassroots level over your careers?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Absolutely. The pitches have been getting better — more 3G surfaces. Women\'s football has been growing rapidly at grassroots level. More coaching licences are being taken — clubs have been investing in their coaches. The grassroots game has been [[build up:same]]ing steadily for years and it is finally getting the recognition it deserves.',
    },
  ],

  matchingExercise: [
    { word: 'SUNDAY LEAGUE', definition: 'Amateur football competitions played on Sunday mornings — open to anyone' },
    { word: 'FIVE-A-SIDE', definition: 'Small-sided football with five players per team — usually indoors' },
    { word: 'FUTSAL', definition: 'Official FIFA-recognised indoor football on a hard court with a heavier ball' },
    { word: 'GRASSROOTS', definition: 'The foundation level of sport — amateur, community-based football' },
    { word: 'ACADEMY', definition: 'A professional club\'s youth development programme' },
    { word: 'VOLUNTEER', definition: 'Someone who gives their time for free to run or coach at a club' },
    { word: 'GIVE BACK', definition: 'To contribute to the community or sport that helped you' },
    { word: 'JUMPERS FOR GOALPOSTS', definition: 'Using clothes as goal markers — symbol of children\'s park football' },
  ],

  fillBlankExercise: [
    { before: 'She', answer: 'has been playing', after: 'Sunday league football for five seasons — every week without fail.' },
    { before: 'The club', answer: 'has been run', after: 'entirely by volunteers for over twenty years.' },
    { before: 'They', answer: 'have been building up', after: 'the youth section from two teams to fifteen over a decade.' },
    { before: 'He', answer: 'has been coaching', after: 'the under-12 team since he retired from playing two years ago.' },
    { before: 'Two players', answer: 'have dropped out', after: 'of the five-a-side group — we need replacements urgently.' },
    { before: 'The grassroots game', answer: 'has been growing', after: 'steadily — more participants than ever are playing.' },
    { before: 'I', answer: 'have been struggling', after: 'to fit in training sessions around my new work schedule.' },
    { before: 'Women\'s football at grassroots level', answer: 'has been expanding', after: 'rapidly since the England women\'s Euros win.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"She has been playing grassroots football for ten years." What does this sentence tell us?',
      options: [
        'She played grassroots football ten years ago and has now stopped.',
        'She started playing ten years ago and is still playing now.',
        'She has played exactly ten grassroots matches in her career.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The coach has been training the youth team since 2019." What does "since" indicate?',
      options: [
        'The duration — how long the coaching has been happening.',
        'The starting point — when the coaching activity began.',
        'The reason — why the coaching started in 2019.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses present perfect continuous INCORRECTLY?',
      options: [
        '"He has been volunteering at the club for three years."',
        '"The club has been founded in 1987."',
        '"They have been playing five-a-side every Thursday."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between futsal and five-a-side?',
      options: [
        'Futsal is the official FIFA indoor game with a specific ball and rules; five-a-side is a generic term for small-sided informal football.',
        'Futsal is played outdoors; five-a-side is played indoors.',
        'Futsal has five players; five-a-side has six players per team.',
      ],
      correctIndex: 0,
    },
    {
      question: '"She has been giving back to the community." What does "giving back" mean here?',
      options: [
        'She is returning something that was borrowed from the community.',
        'She is contributing voluntarily to the sport or community that helped her.',
        'She is returning to the grassroots club where she previously played.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is in the PRESENT PERFECT CONTINUOUS?',
      options: [
        '"She played Sunday league football every week."',
        '"She plays Sunday league football every week."',
        '"She has been playing Sunday league football every week."',
      ],
      correctIndex: 2,
    },
    {
      question: '"Two players have dropped out." What does "dropped out" mean?',
      options: [
        'The players fell during training and injured themselves.',
        'The players stopped participating — they left the group.',
        'The players were dropped from the team by the manager.',
      ],
      correctIndex: 1,
    },
    {
      question: '"The youth programme has been running for fifteen years." What does this tell us?',
      options: [
        'The programme started fifteen years ago and is still operating today.',
        'The programme ran for fifteen years but has now ended.',
        'The programme needs fifteen more years before it finishes.',
      ],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct form to complete each present perfect continuous sentence about grassroots football.',
    items: [
      {
        sentence: '"She _____ for the Sunday league side since she moved to the area two years ago."',
        options: ['has been playing', 'has played', 'was playing'],
        correctIndex: 0,
        explanation: '"Has been playing" is correct — present perfect continuous with "since" shows an ongoing activity that started at a specific point in the past (since she moved) and continues now. She is still playing. "Has played" (present perfect simple) = completed action — could suggest she has played but stopped. "Was playing" = past continuous, which describes a temporary activity in the past — wrong for an ongoing situation. "Since + past event" almost always calls for present perfect continuous when the activity is still happening.',
      },
      {
        sentence: '"The club _____ volunteers for the new season for the last six weeks."',
        options: ['has been recruiting', 'recruited', 'recruits'],
        correctIndex: 0,
        explanation: '"Has been recruiting" is correct — present perfect continuous with "for the last six weeks" shows an ongoing process that started six weeks ago and is still happening (they are still looking for volunteers now). "Recruited" = simple past — a completed action at a specific point, not ongoing. "Recruits" = simple present — a habitual action, not specifically about the last six weeks. "For the last [time period]" is a classic signal for present perfect continuous when the activity is still ongoing: "for the last month," "for the past year."',
      },
      {
        sentence: '"How long _____ futsal?"',
        options: ['have you been playing', 'did you play', 'do you play'],
        correctIndex: 0,
        explanation: '"Have you been playing" is correct — present perfect continuous question with "how long?" asking about the duration of an ongoing activity. "How long have you been playing?" = asking when you started and how long it has continued until now. "Did you play?" = simple past question — asking about a completed past event, not about ongoing activity. "Do you play?" = present simple — a general question about habits, not specifically about duration. "How long + have/has + been + -ing?" is the standard question form for asking about the duration of ongoing activities.',
      },
      {
        sentence: '"The grassroots programme _____ continuously since its foundation in 2005."',
        options: ['has been growing', 'grew', 'is growing'],
        correctIndex: 0,
        explanation: '"Has been growing" is correct — present perfect continuous with "since [year]" shows a process that began in 2005 and has continued without interruption until now. The word "continuously" reinforces the unbroken ongoing nature of the growth. "Grew" = simple past — describes growth that is completed and over, not ongoing. "Is growing" = present continuous — describes growth happening right now but doesn\'t link it to the past starting point (2005). "Since + year + has been + -ing" = the complete pattern for ongoing processes since a specific historical point.',
      },
      {
        sentence: '"We _____ our coaching sessions every Saturday morning for three months — the children are improving so much."',
        options: ['have been running', 'ran', 'have run'],
        correctIndex: 0,
        explanation: '"Have been running" is correct — present perfect continuous with "for three months" shows an ongoing activity. The second clause ("the children are improving so much") confirms the activity has been happening and is producing visible current results — a key feature of the present perfect continuous. "Ran" = simple past — suggests the sessions are finished (they are not). "Have run" = present perfect simple — emphasises the result/completion rather than the ongoing process. When we want to emphasise the continuous activity over time and its ongoing nature, we use the continuous form.',
      },
      {
        sentence: 'Which sentence uses present perfect continuous CORRECTLY about grassroots football?',
        options: [
          '"The FA has been founded the grassroots initiative in 2010."',
          '"She has been coaching the under-10 girls\' team every Saturday for the past two years."',
          '"I have been scored three goals last Sunday in the league game."',
        ],
        correctIndex: 1,
        explanation: 'B is correct. "She has been coaching [present perfect continuous] the under-10 girls\' team every Saturday for the past two years [duration with "for"]" — perfect use. The coaching started two years ago and is still happening every Saturday. A is wrong: "has been founded" — "found/founded" is not used in the continuous when referring to the establishment of an organisation (a completed event). "The FA founded the initiative in 2010" (simple past) is correct. C is wrong: "has been scored three goals last Sunday" — specific completed past events ("last Sunday") use simple past: "I scored three goals last Sunday."',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use present perfect continuous and grassroots football vocabulary to respond to each question.',
      items: [
        {
          customerLine: 'A friend asks: "How long have you been involved with the local football club?"',
          options: [
            '"I started at the club. I am there for a long time now."',
            '"I have been volunteering at the club for six years — I started as a helper on matchdays and have been coaching the under-12 team for the last three seasons. It has been one of the most rewarding things I have ever done."',
            '"Six years. I volunteer there. I coach the under-12 team. It is rewarding."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses present perfect continuous naturally and with full detail. "Have been volunteering for six years" (ongoing activity with duration), "have been coaching for the last three seasons" (ongoing activity with duration), "has been one of the most rewarding things" (present perfect to describe ongoing experience). A uses "started" (past simple) and "am there" (present simple) — grammatically possible but doesn\'t show present perfect continuous. C is grammatically incomplete and flat. B demonstrates how to describe long-term ongoing grassroots involvement at B1-B2 level.',
        },
        {
          customerLine: 'A grassroots manager says: "We\'re struggling to get volunteers — what would you say to recruit people?"',
          options: [
            '"Volunteering at a grassroots club has been changing lives for generations — children who have been playing for clubs run by volunteers often say those experiences shaped who they are. If you have been thinking about getting involved, this is the moment. We have been building something special here for years — and we need your help to keep growing it."',
            '"You should volunteer because it is good. The club needs volunteers. It is nice to help children."',
            '"Grassroots football has always needed volunteers. Without volunteers, clubs cannot function. Volunteering is important."',
          ],
          correctIndex: 0,
          explanation: 'A is correct — uses present perfect continuous throughout to describe ongoing impact and involvement. "Has been changing lives for generations" (ongoing impact), "have been playing for clubs run by volunteers" (ongoing participation), "have been thinking about getting involved" (ongoing thought/consideration — common in appeals), "have been building something special here for years" (ongoing effort). B and C are grammatically simple but lack the emotional connection and grammatical sophistication expected at B1-B2. The present perfect continuous in A creates a sense of continuity and momentum.',
        },
        {
          customerLine: 'Discuss how grassroots football has been changing over the last 20 years.',
          options: [
            '"Grassroots football changed a lot. There are more 3G pitches. Women\'s football is bigger. There are more coaching courses."',
            '"Grassroots football has been changing significantly over the last 20 years. Facilities have been improving — more 3G pitches have been installed across the country. Women\'s and girls\' football has been growing rapidly at the community level. More coaches have been completing formal qualifications. Social media has been helping clubs recruit players and volunteers. The game has been getting more inclusive and more organised at grassroots level."',
            '"Grassroots football was changing for 20 years. In the past, there were fewer 3G pitches and fewer women players."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses multiple present perfect continuous constructions to describe ongoing changes over a period: "has been changing significantly," "have been improving," "have been installed," "has been growing rapidly," "have been completing formal qualifications," "has been helping clubs," "has been getting more inclusive." Each describes an ongoing process over the 20-year period. A uses past simple ("changed") — makes it sound finished. C uses "was changing" — past continuous, which implies the changing has stopped. B correctly frames these as changes that started in the past and are still occurring now.',
        },
        {
          customerLine: 'A youth player asks: "What should I do if I want to become a professional footballer?"',
          options: [
            '"You need to train every day. Join an academy if you can. Work hard."',
            '"Keep doing what you have been doing — playing, training, and enjoying the game. Many professionals have spoken about how playing park football and futsal as children developed their technical ability. Look for an academy trial, but also keep playing for your grassroots club — the love of the game has been driving every great player\'s career. And don\'t forget: coaches have been watching local players for years — talent gets noticed."',
            '"Becoming professional is very difficult. Many people try and fail. Statistics show that very few grassroots players make it to professional level."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — encouraging, uses present perfect continuous naturally, and gives genuinely useful advice. "Have been doing" (ongoing activity — keep it up), "has been driving every great player\'s career" (present perfect continuous — ongoing motivating force), "have been watching local players for years" (ongoing scouting — a reassurance that talent is noticed). Uses grassroots vocabulary: "park football," "futsal," "academy trial," "grassroots club." A is short but not wrong — just lacks depth. C is discouraging and not helpful advice at all — even if statistically accurate.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three present perfect continuous mistakes in this conversation. Find them.',
      dialogue: [
        { speaker: 'Interviewer', text: 'You have been coaching at grassroots level for a long time — how has the game changed?' },
        { speaker: 'Coach', text: 'Well, I have been coaching here since 2008 — that\'s fifteen years. The facilities have been improving dramatically in that time.' },
        { speaker: 'Interviewer', text: 'And the players — have they been changing too?' },
        { speaker: 'Coach', text: 'Absolutely. The children have been becoming much more technical — they play futsal and five-a-side constantly. I have been noticed a big improvement in their first touch since we introduced the indoor sessions.' },
        { speaker: 'Interviewer', text: 'What about women\'s football at grassroots level?' },
        { speaker: 'Coach', text: 'It has been grew unbelievably fast — we went from one women\'s team to five in three years. The volunteers have been working incredibly hard to make it happen.' },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'I have been noticed a big improvement',
          correction: 'I have noticed a big improvement',
          explanation: '"Have been noticed" is wrong — this should be present perfect simple ("have noticed"), not present perfect continuous. "Notice" in this context is a perception verb describing a completed observation: "I have noticed [= I observed/perceived] a big improvement." Present perfect continuous is for ongoing activities ("I have been watching them for years"), not single observations or perceptions. "I have been noticed" could also be passive ("I have been noticed by scouts") — a completely different meaning. The correct form is: "I have noticed a big improvement since we introduced the indoor sessions."',
        },
        {
          lineIndex: 5,
          incorrectText: 'It has been grew unbelievably fast',
          correction: 'It has been growing unbelievably fast',
          explanation: '"Has been grew" is grammatically impossible — "been" must be followed by the -ing form of the verb (present participle), not the past tense. "Has been + growing" = correct present perfect continuous. "Grew" = simple past — cannot follow "has been." This is one of the most common mistakes with present perfect continuous: using the past form of the verb instead of -ing. Structure: have/has + been + VERB-ING. "It has been growing," "it has been expanding," "it has been developing" — all correct. "Has been grew/expanded/developed" — all wrong.',
        },
        {
          lineIndex: 3,
          incorrectText: 'The children have been becoming much more technical',
          correction: 'The children have become much more technical / The children have been getting much more technical',
          explanation: '"Have been becoming" is technically possible but very unnatural — "become" rarely appears in the continuous form because it describes a change of state (like stative verbs). In natural English, "become" in the context of change is usually present perfect simple: "The children have become much more technical." Alternatively, use "get" (which is more dynamic and natural in continuous form): "The children have been getting much more technical." "Have been becoming" sounds awkward and over-formal. Prefer: "have become" or "have been getting."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each response using present perfect continuous and grassroots football vocabulary.',
      items: [
        {
          customerLine: 'A journalist asks: "You\'ve been involved with this grassroots club for a long time — tell us about your journey."',
          salespersonStart: '"I have been coming here since I was seven years old —',
          suggestedCompletion: '"I have been coming here since I was seven years old — that\'s over twenty years now. I started as a player with the under-8s, and I have been contributing to the club in different ways ever since. For the last six years, I have been coaching the youth teams every weekend. I have also been helping with fundraising — we have been working hard to raise money for a new 3G pitch, and we are nearly there. The grassroots game has been giving children in this community a chance to develop not just their football skills but their confidence, friendships, and discipline. This club has been changing lives here for decades, and I have been proud to be a small part of that."',
        },
        {
          customerLine: 'Describe how a small grassroots club has grown from 2 teams to 20 teams over 15 years.',
          salespersonStart: 'Fifteen years ago, the club had just two teams —',
          suggestedCompletion: 'Fifteen years ago, the club had just two teams — a Sunday league adult side and one youth team. Since then, the committee has been working tirelessly to grow it. Volunteers have been signing up new children year after year. Coaches have been completing their FA badges and raising the standard of coaching. The facilities have been improving steadily — a new 3G pitch was installed five years ago, which transformed what we could offer. Women\'s football has been growing at the club too — we now have four women\'s teams. The club has been building something truly special, and the community has been embracing it. We now have twenty teams from under-6s to veterans — a journey that has been happening gradually, through dedication, passion, and a lot of Saturday mornings in the rain.',
        },
        {
          customerLine: 'A futsal player explains why futsal has been getting more popular in England.',
          salespersonStart: '"Futsal has been growing rapidly in England for the last decade —',
          suggestedCompletion: '"Futsal has been growing rapidly in England for the last decade — and it is easy to understand why. People have been discovering that futsal develops technical ability faster than almost any other format. The ball is smaller and heavier, which means players have been making more touches per session than in the traditional outdoor game. Skills like close control, quick passing, and decision-making have been developing at a much faster rate. The indoor format also means you can play year-round — no more frozen pitches or cancelled sessions. Youth coaches have been integrating futsal into their development programmes, and results have been impressive. Top English players like those in the Premier League often talk about how playing futsal as children shaped their technical game. The grassroots futsal scene has been expanding steadily, and it is now recognised as a serious pathway for player development."',
        },
        {
          customerLine: 'Compare the grassroots football experience of a child today versus 30 years ago.',
          salespersonStart: '"Grassroots football has been changing enormously —',
          suggestedCompletion: '"Grassroots football has been changing enormously — the experience of a child today is completely different from thirty years ago. Thirty years ago, children were playing on grass pitches that became mud baths in winter, with little or no coaching qualification required from the adults who managed their teams. Jumpers for goalposts in the park was the everyday experience. Today, clubs have been investing in 3G pitches, proper goals, and trained coaches. The FA has been rolling out coaching education programmes across the country. Girls\' football has been developing significantly — thirty years ago, opportunities were extremely limited. Social media has been connecting clubs and players in ways that were impossible before. The quality of the experience has been improving at every level. Children today have access to better facilities, better coaching, and better competition — although some would argue the essential magic of just playing freely has been getting lost in the professionalisation of even the youngest age groups."',
        },
      ],
    },
  },
};
