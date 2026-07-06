import { Lesson } from '@/types/lesson';

export const footballPodcasts: Lesson = {
  slug: 'football-podcasts',
  title: 'Football Podcasts',
  subtitle: 'Fast conversational football debate — discourse markers and listener language',
  level: 'B1-B2',
  description: 'Football podcasts are full of fast, informal debate. In this lesson you will learn the discourse markers that speakers use to connect ideas, disagree politely, and change the subject — so you can follow (and join) real football conversations.',
  heroImage: '/images/football-podcasts-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Discourse markers — the words that connect ideas in conversation',
    description: 'Discourse markers are words and phrases that speakers use to connect ideas, signal what is coming next, or manage the conversation. In formal writing we use "however," "therefore," "furthermore." In spoken English — especially podcasts and casual debate — we use a different set of markers that sound natural when speaking.',
    positivePattern: 'Use discourse markers to: introduce your point (Well..., Right..., So...), develop it (I mean..., in terms of...), soften disagreement (To be fair..., Having said that...), and change topic (Moving on..., Anyway...).',
    positiveExample: '"Well, I think the issue is the midfield. I mean, in terms of creativity, they just don\'t have enough. Having said that, the defence has been solid. Actually, you know what — I\'d argue the problem is higher up."',
    negativePattern: 'Do NOT avoid discourse markers in conversation — you will sound unnatural and robotic. Do NOT overuse just one marker — vary them.',
    negativeExample: 'ROBOTIC (no discourse markers): "The midfield is bad. The defence is good. The attack is the problem." / UNNATURAL overuse: "Well, you know, well, I mean, well, to be fair, well..."',
    positiveExamples: [
      { sentence: '"Well, I think we have to talk about the penalty decision first."', note: '"Well" = introducing a topic or starting your turn in conversation — very common in podcasts.' },
      { sentence: '"I mean, in terms of overall quality, they were the better side for 70 minutes."', note: '"I mean" = explaining or clarifying. "In terms of" = focusing on a specific aspect.' },
      { sentence: '"To be fair, he had a really difficult second half — you can\'t blame him entirely."', note: '"To be fair" = acknowledging the other side of an argument — softens a point.' },
      { sentence: '"Actually, you know what — I\'d go further than that. I think he should have been subbed at half-time."', note: '"Actually" = introducing a stronger or different point. "You know what" = emphasising a bold opinion.' },
    ],
    negativeExamples: [
      { sentence: 'WRONG to overuse: "Well, I mean, well, to be fair, well, you know, well, in terms of..."', note: 'Overusing one marker sounds nervous and unnatural. Vary your discourse markers.' },
      { sentence: 'RIGHT in a podcast: "Well, to be fair, I mean, there were positive signs. Having said that, the result is what matters."', note: 'Varied discourse markers — natural flow.' },
    ],
  },

  vocabulary: [
    {
      word: 'HOST',
      partOfSpeech: 'noun',
      definition: 'The person who runs the podcast — they introduce topics, ask questions, and manage the conversation.',
      example: '"The host asked a great question about the manager\'s tactics — really got the debate going."',
      imageSlug: '/images/host.png',
    },
    {
      word: 'GUEST',
      partOfSpeech: 'noun',
      definition: 'A special person who is invited to join a podcast to give their opinion or expertise.',
      example: '"This week\'s guest was a former professional player — her analysis was brilliant."',
      imageSlug: '/images/guest.png',
    },
    {
      word: 'PUNDIT',
      partOfSpeech: 'noun',
      definition: 'An expert who gives their opinion on football — on TV, radio, or a podcast.',
      example: '"The pundit was very critical of the manager\'s team selection — he said it was a mistake."',
      imageSlug: '/images/football-podcasts-pundit.png',
    },
    {
      word: 'DEBATE',
      partOfSpeech: 'noun / verb',
      definition: 'A discussion where people have different opinions and argue their points. In football, fans debate everything — tactics, transfers, the GOAT.',
      example: '"The debate about whether he should be sold went on for the whole episode — they completely disagreed."',
      imageSlug: '/images/football-podcasts-debate.png',
    },
    {
      word: 'ANALYSIS',
      partOfSpeech: 'noun',
      definition: 'A careful, detailed look at something — in football, analysis means studying tactics, performances, or statistics.',
      example: '"Her tactical analysis of the 4-3-3 was excellent — she broke down every movement."',
      imageSlug: '/images/football-podcasts-analysis.png',
    },
    {
      word: 'TAKE',
      partOfSpeech: 'noun',
      definition: 'An opinion or reaction to something. "A hot take" is a very strong, controversial opinion.',
      example: '"What\'s your take on the penalty decision?" / "That\'s a hot take — not many people would agree with you."',
      imageSlug: '/images/take.png',
    },
    {
      word: 'DISAGREE',
      partOfSpeech: 'verb',
      definition: 'To have a different opinion — to not agree with what someone said.',
      example: '"I respectfully disagree — I think the substitution was the right call, actually."',
      imageSlug: '/images/disagree.png',
    },
    {
      word: 'EPISODE',
      partOfSpeech: 'noun',
      definition: 'One individual recording of a podcast. Podcasts are released in episodes — like TV shows.',
      example: '"This week\'s episode was all about the title race — two hours of brilliant debate."',
      imageSlug: '/images/episode.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BREAK DOWN',
      definition: 'To analyse something carefully, splitting it into smaller parts to understand it better.',
      example: '"Let me break down the 4-3-3 for you — the wide forwards are the key to everything."',
      imageSlug: '/images/football-podcasts-break-down.png',
    },
    {
      phrase: 'BACK UP',
      definition: 'To support a claim with evidence — to provide reasons or statistics to prove your point.',
      example: '"You can\'t just say he\'s the worst signing ever — back it up with some numbers."',
      imageSlug: '/images/football-podcasts-back-up.png',
    },
    {
      phrase: 'COME AROUND TO',
      definition: 'To gradually change your opinion and agree with something you did not believe before.',
      example: '"I\'ve come around to the idea that he needs to play from the start — I was wrong before."',
      imageSlug: '/images/come-around-to.png',
    },
    {
      phrase: 'MOVE ON',
      definition: 'To change the topic of conversation — to stop discussing one thing and start another.',
      example: '"Right, let\'s move on to the transfer window — who should they sign this summer?"',
      imageSlug: '/images/football-podcasts-move-on.png',
    },
    {
      phrase: 'PUSH BACK ON',
      definition: 'To challenge or disagree with someone\'s argument — to question what they said.',
      example: '"I\'d push back on that — saying he\'s world class is a stretch given his stats this season."',
      imageSlug: '/images/football-podcasts-push-back-on.png',
    },
    {
      phrase: 'WRAP UP',
      definition: 'To finish or conclude something — at the end of a podcast, the host wraps up the episode.',
      example: '"Right, let\'s wrap up — final scores for the weekend and then we\'ll finish there."',
      imageSlug: '/images/football-podcasts-wrap-up.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key discourse markers used in football podcasts and conversational debate.',
    items: [
      {
        cue: '"Well, I think..."',
        meaning: 'A soft way to start your turn or introduce your opinion — signals you are about to speak.',
        usage: '"Well" at the start of a sentence does not mean "good" here — it is a discourse marker used to begin a turn or introduce a thought. Extremely common in spoken English, especially at the start of podcast answers: "Well, I think the problem is the midfield." It sounds natural and considered — less direct than launching straight into an opinion.',
        imageSlug: 'otp-well-i-think',
      },
      {
        cue: '"I mean..." / "What I mean is..."',
        meaning: 'Used to clarify or explain what you just said — or to add more detail to a point.',
        usage: '"I mean" is one of the most common spoken discourse markers in English. It signals: "let me be clearer" or "let me explain." In football debate: "He was poor. I mean, he had no impact on the game at all — zero key passes, zero shots." It can also soften a strong opinion: "He\'s not good enough. I mean, I don\'t want to be harsh, but the numbers don\'t lie."',
        imageSlug: 'otp-i-mean',
      },
      {
        cue: '"To be fair..." / "Having said that..."',
        meaning: 'Used to acknowledge the other side of an argument — to show you are being balanced.',
        usage: '"To be fair" = I want to give a fair and balanced view. It introduces a point that goes against what you just said: "He was terrible today. To be fair, he\'s been playing injured for three weeks." "Having said that" = connecting a point to its opposite: "The defence was solid. Having said that, they were lucky twice in the first half." Both signal intellectual fairness in debate.',
        imageSlug: 'otp-to-be-fair',
      },
      {
        cue: '"In terms of..."',
        meaning: 'Used to focus on a specific aspect or area — to narrow the conversation to one topic.',
        usage: '"In terms of" is very common in football analysis and podcast discussion. It focuses the listener: "In terms of attacking threat, they were the better team." "In terms of the title race, this result changes everything." It is a formal discourse marker that sounds structured and analytical — good for making a clear, specific point in a debate.',
        imageSlug: 'otp-in-terms-of',
      },
      {
        cue: '"You know what I mean?" / "Right?"',
        meaning: 'Checking that the listener is following — inviting agreement or a response.',
        usage: '"You know what I mean?" and "Right?" are checking devices — the speaker wants to know if the listener is following or agreeing. Very common in fast podcast conversations: "He just doesn\'t have the pace for that position, you know what I mean? The game has moved on." "Right?" is slightly more forceful — it expects agreement: "That was a red card, right?" These keep conversation interactive.',
        imageSlug: 'otp-you-know-what-i-mean',
      },
      {
        cue: '"Actually..." / "To be honest..."',
        meaning: '"Actually" introduces a stronger or different point. "To be honest" signals a direct, frank opinion.',
        usage: '"Actually" often introduces something unexpected or a reversal: "I wasn\'t impressed at first. Actually, thinking about it more, that was one of the best performances I\'ve seen this season." It can also politely correct: "He scored a hat-trick." "Actually, it was two goals — the third was an OG." "To be honest" signals directness: "To be honest, I think he should retire" — used when you are about to say something frank.',
        imageSlug: 'otp-actually-to-be-honest',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right — today we are doing a podcast. I\'m the [[host:the person who runs the podcast — they manage the conversation]] and you two are my [[guest:a special person invited to give their opinion on the podcast]]s. The topic: who is the bigger problem — the defence or the attack? Sofia — your [[take:an opinion or reaction to something]] first.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Well, I think it\'s the attack, honestly. I mean, [[in terms of:used to focus on a specific aspect]] goals scored, they are in the bottom five in the league. [[To be fair:used to acknowledge the other side]], the defence has shipped a few as well — but the attack is the bigger issue.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I\'d actually [[push back on:to challenge or disagree with an argument]] that. [[To be honest:signals a direct, frank opinion]], the defence has conceded in every game this month. [[Having said that:connecting a point to its opposite]], Sofia\'s right that the forwards aren\'t scoring enough. But you can\'t [[back up:to support a claim with evidence]] "attack is the problem" when the defenders are all over the place.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Interesting. So you both actually [[disagree:to have a different opinion]] on the priority. Let me [[break down:to analyse carefully, splitting into smaller parts]] the stats — they concede 2.1 goals per game AND score only 0.8 per game. Both are terrible. [[Actually:introduces a stronger or different point]] — is the real problem the manager\'s tactics?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Oh, I\'ve completely [[come around to:to gradually change your opinion]] that idea since last month. The [[analysis:a careful, detailed look at something]] from the last few episodes convinced me — the shape is wrong, the pressing triggers are wrong, everything starts with the manager.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right — let\'s [[move on:to change the topic of conversation]] to the [[debate:a discussion where people have different opinions]]. The [[pundit:an expert who gives their opinion on football]]s on TV say sell him. Do you agree?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Well, you know what — that\'s a hot take from the pundits. [[To be fair]], he\'s been injured a lot this season. But I mean, in terms of his contract situation, selling now makes sense. Actually, I think keeping him is the bigger risk.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Great [[episode:one individual recording of a podcast]] today. Let\'s [[wrap up:to finish or conclude something]] — one word each: defend, attack, or manager. Your verdict.',
    },
  ],

  matchingExercise: [
    { word: 'HOST', definition: 'The person who runs the podcast and manages the conversation' },
    { word: 'GUEST', definition: 'A special person invited to join the podcast and give their opinion' },
    { word: 'PUNDIT', definition: 'An expert who gives opinions on football on TV, radio, or podcasts' },
    { word: 'DEBATE', definition: 'A discussion where people have different opinions and argue their points' },
    { word: 'ANALYSIS', definition: 'A careful, detailed look at something — studying tactics or statistics' },
    { word: 'TAKE', definition: 'An opinion or reaction to something — a "hot take" is very controversial' },
    { word: 'EPISODE', definition: 'One individual recording of a podcast' },
    { word: 'BREAK DOWN', definition: 'To analyse carefully, splitting into smaller parts to understand better' },
  ],

  fillBlankExercise: [
    { before: 'Well, I\'d', answer: 'push back on', after: 'that — saying he\'s world class is a stretch given his stats.' },
    { before: '', answer: 'To be fair', after: ', he has been playing with an injury for three weeks — you can\'t blame him entirely.' },
    { before: 'I\'ve', answer: 'come around to', after: 'the idea that we need a new striker — I was wrong to defend him before.' },
    { before: '', answer: 'In terms of', after: 'attacking threat, they were clearly the better side for the first hour.' },
    { before: 'Right, let\'s', answer: 'move on', after: 'to the transfer window — who should they sign this summer?' },
    { before: '', answer: 'Having said that', after: ', the defence has also been shaky — it\'s not just the attack that\'s the problem.' },
    { before: 'Can you', answer: 'back up', after: 'that claim? You can\'t just say he\'s the worst player without some evidence.' },
    { before: 'Let\'s', answer: 'wrap up', after: 'the episode — final thoughts on the title race, then we\'re done.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"Well, I think the problem is the midfield." What does "Well" do here?',
      options: [
        'It means the situation is good or satisfactory.',
        'It is a discourse marker that introduces the speaker\'s turn and opinion.',
        'It is a question asking if the listener understands.',
      ],
      correctIndex: 1,
    },
    {
      question: '"I mean, in terms of creativity, they just don\'t have enough." What does "I mean" signal?',
      options: [
        'The speaker is about to contradict themselves.',
        'The speaker is clarifying or developing their point.',
        'The speaker does not believe what they are saying.',
      ],
      correctIndex: 1,
    },
    {
      question: '"To be fair, he\'s been playing injured." What is the speaker doing?',
      options: [
        'Praising the player\'s toughness and dedication.',
        'Acknowledging the other side of the argument — being balanced.',
        'Disagreeing with the previous speaker strongly.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "hot take" in football podcast culture?',
      options: [
        'A very strong or controversial opinion that many people will disagree with.',
        'Analysis based on statistics and evidence from the match.',
        'The first topic discussed in each episode.',
      ],
      correctIndex: 0,
    },
    {
      question: '"Having said that, the defence has been shaky." What does this connect?',
      options: [
        'It introduces a completely new and unrelated topic.',
        'It connects a point to its opposite — adding balance after a previous statement.',
        'It ends the conversation and wraps up the episode.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses "actually" correctly?',
      options: [
        '"Actually, let\'s wrap up — we\'ve covered everything." (ending the episode)',
        '"Actually, thinking about it more, that was a brilliant performance — I changed my mind." (reversing opinion)',
        '"Actually I mean to be honest well you know what I mean actually." (overusing discourse markers)',
      ],
      correctIndex: 1,
    },
    {
      question: 'A podcast host says: "Right, let\'s move on." What happens next?',
      options: [
        'The host ends the episode and says goodbye.',
        'The host changes the topic to something new.',
        'The host asks for a final opinion from the guest.',
      ],
      correctIndex: 1,
    },
    {
      question: '"You know what I mean?" — what is the speaker checking?',
      options: [
        'Whether the listener knows the definition of a football word.',
        'Whether the listener is following and understands the point.',
        'Whether the listener agrees with every detail of the argument.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct discourse marker to complete each podcast-style sentence.',
    items: [
      {
        sentence: '"He\'s been poor all season. _____, he did score a great goal last week."',
        options: ['To be fair', 'In terms of', 'Wrap up'],
        correctIndex: 0,
        explanation: '"To be fair" is correct. It introduces a point that balances the previous criticism — acknowledging something positive despite the general negative judgement. "In terms of" focuses on a specific aspect (wrong here — no specific aspect is introduced). "Wrap up" means to finish (wrong — this is mid-debate, not ending). "To be fair" is the discourse marker that signals: "I want to be balanced — here is the other side."',
      },
      {
        sentence: '"_____ pressing efficiency, they are one of the best teams in the league."',
        options: ['In terms of', 'To be honest', 'Having said that'],
        correctIndex: 0,
        explanation: '"In terms of" is correct — it focuses the listener on the specific aspect being discussed: pressing efficiency. "To be honest" signals a direct opinion (wrong position — this sentence is analytical, not an opinion). "Having said that" connects to an opposite point (wrong — nothing opposite is being introduced here). "In terms of" is the clearest way to introduce a specific area of analysis: "In terms of [X], they are [Y]."',
      },
      {
        sentence: '"_____, I\'d argue he should have been sold two seasons ago."',
        options: ['To be honest', 'Move on', 'Back up'],
        correctIndex: 0,
        explanation: '"To be honest" is correct — it signals a frank, direct opinion that the speaker might feel is controversial or surprising. "I\'d argue" reinforces this: the speaker is making a bold case. "Move on" = change topic (wrong — this is a new point, not a topic change). "Back up" means provide evidence (wrong position — this marker goes at the start of a sentence). "To be honest" = "I will say what I really think, even if it is controversial."',
      },
      {
        sentence: '"The defence has been good. _____, the attack has been terrible — so overall they cancel out."',
        options: ['Having said that', 'Well', 'Break down'],
        correctIndex: 0,
        explanation: '"Having said that" is correct — it connects the positive point (defence good) to its opposite (attack terrible). This is exactly what "having said that" does: "I said X — but having said that, Y is also true." "Well" starts a turn (wrong position — this is mid-sentence). "Break down" is a phrasal verb meaning analyse (wrong — this is not breaking down a topic). "Having said that" creates the logical contrast the sentence needs.',
      },
      {
        sentence: '"Right, let\'s _____ — final thoughts on the title race and then we\'re done for today."',
        options: ['wrap up', 'push back on', 'come around to'],
        correctIndex: 0,
        explanation: '"Wrap up" is correct — the host is ending the episode. "Let\'s wrap up" = let\'s finish/conclude. This is classic podcast closing language, always used near the end of an episode. "Push back on" = challenge an argument (wrong — the host is ending, not challenging). "Come around to" = gradually change your opinion (wrong — opinion change is not being described). "Wrap up" is the standard way English speakers signal: "We are nearly finished."',
      },
      {
        sentence: 'Which sentence shows the CORRECT use of "I mean" as a discourse marker?',
        options: [
          '"I mean the striker. He\'s the one who scored." (identifying someone)',
          '"I mean, to be honest, I\'ve completely changed my view on this — he\'s been brilliant recently." (clarifying and developing a point)',
          '"I mean well, to be fair, having said that, in terms of, you know, actually." (overusing markers)',
        ],
        correctIndex: 1,
        explanation: 'B is correct. "I mean" introduces a clarification or development: "I mean, to be honest, I\'ve completely changed my view" — the speaker is expanding and being frank. A uses "I mean" as a verb with its literal meaning (identifying someone) — that\'s not a discourse marker use. C is a parody of discourse marker overuse — unnatural and comic, but wrong. In podcasts, "I mean" signals: "let me explain more clearly" or "to clarify what I just said."',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are on a football podcast. Choose the best response using a natural discourse marker.',
      items: [
        {
          customerLine: 'Host: "So — who is the GOAT? Messi or Ronaldo? Your take, in 30 seconds."',
          options: [
            '"The GOAT is definitively determined by a statistical analysis of goals per game across all competitions during peak years, adjusted for difficulty of opposition."',
            '"Well, to be honest, I\'ve come around to Messi — I mean, in terms of pure football ability, there\'s no debate for me. Having said that, Ronaldo\'s goal record is insane. You know what I mean?"',
            '"I don\'t have a take on this topic. Both players are good. It\'s a debate."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — it sounds like a real podcast answer. It uses multiple discourse markers naturally: "Well" (starting the turn), "to be honest" (direct opinion), "I mean" (developing the point), "in terms of" (focusing on a specific area), "Having said that" (acknowledging the other side), "You know what I mean?" (checking engagement). A is too formal and robotic — wrong register for a podcast. C is flat and disengaged — bad podcast energy.',
        },
        {
          customerLine: 'Guest 1: "I think the manager should be sacked immediately — no question."',
          options: [
            '"I\'d actually push back on that a bit. To be fair, he\'s only been in the job six months — I mean, it takes time to implement a new system. Having said that, the results have been dreadful."',
            '"I agree. The manager should be sacked immediately — no question, as you said."',
            '"The managerial situation at the club has indeed become untenable given the recent sequence of results and the deterioration in performance metrics."',
          ],
          correctIndex: 0,
          explanation: 'A is correct — it is a real podcast disagreement using discourse markers: "I\'d actually push back on that" (polite but clear disagreement), "To be fair" (balance), "I mean" (developing the point), "Having said that" (conceding the other side\'s point). B simply repeats the opinion — boring podcast, no debate. C is too formal — a match report, not a podcast conversation. Good podcasts have polite disagreement with evidence, not just "yes I agree."',
        },
        {
          customerLine: 'Host: "Okay — we\'ve been on the title race for 40 minutes. Let\'s move on."',
          options: [
            '"No. I want to continue debating the title race. I have more points to make about the table."',
            '"Good point. In terms of the Champions League — actually, you know what, can we talk about the cup draw first? That was a big story this week."',
            '"Moving on is an excellent suggestion given the extensive duration of our title race discussion."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — it accepts the topic change and suggests the next topic with natural discourse markers. "In terms of the Champions League" (introducing a new specific area), "actually, you know what" (pivoting to a different idea), "Can we talk about the cup draw first?" (natural podcast conversation). A refuses the host — bad podcast dynamics. C is overly formal and robotic — sounds like an email, not a podcast guest speaking.',
        },
        {
          customerLine: 'You want to say the goalkeeper\'s mistake cost them the match — but you want to be balanced.',
          options: [
            '"To be honest, that was the goalkeeper\'s fault — I mean, you cannot drop a cross like that at this level. To be fair, she\'d been excellent all season up until now. Having said that, that mistake cost them the game."',
            '"The goalkeeper made a mistake. It cost them the game."',
            '"The goalkeeper\'s error was the decisive factor in a match that, to be fair in terms of overall performance, was actually having said that quite well contested despite the having said that result."',
          ],
          correctIndex: 0,
          explanation: 'A is correct — balanced, clear, and full of natural discourse markers in the right positions. "To be honest" (direct opinion), "I mean" (developing the criticism), "To be fair" (balancing with her season form), "Having said that" (returning to the main verdict). B is accurate but flat — no discourse markers, sounds robotic. C is a comic disaster — discourse markers crammed in wrong positions, making the sentence ungrammatical and incoherent. Natural discourse markers flow at the right moments.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes in this podcast transcript — incorrect or misplaced discourse markers. Find them.',
      dialogue: [
        { speaker: 'Host', text: 'Welcome back to the show. Well, today we\'re discussing the title race — who will win it?' },
        { speaker: 'Guest', text: 'Having said that, I think City are the strongest side right now. Their squad depth is extraordinary.' },
        { speaker: 'Host', text: 'Interesting. And in terms of United — do they have a chance?' },
        { speaker: 'Guest', text: 'To be honest, probably not. I mean, they\'ve been inconsistent. To be fair, they\'ve won their last three, but their away form is terrible.' },
        { speaker: 'Host', text: 'Right. Actually, let\'s wrap up the title debate and move on to the cup.' },
        { speaker: 'Guest', text: 'Wrap up, I would push back on that — I mean, we haven\'t discussed Arsenal yet. To be honest, they\'re the dark horses.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Having said that, I think City are the strongest side right now.',
          correction: 'Well, I think City are the strongest side right now. / Actually, I think City are the strongest side right now.',
          explanation: '"Having said that" is wrong here because it requires a previous statement to connect to and reverse. At the very start of the guest\'s first answer, there is nothing preceding it to connect to. "Having said that" means "despite what I just said" — but the guest has not said anything yet. Use "Well" or "Actually" to start a new answer. "Having said that" only works mid-conversation: "X is true. Having said that, Y is also true."',
        },
        {
          lineIndex: 5,
          incorrectText: 'Wrap up, I would push back on that',
          correction: 'Actually, I\'d push back on that / Well, I\'d push back on that',
          explanation: '"Wrap up" is a phrasal verb meaning to finish or conclude — it is not a discourse marker and cannot start a sentence like this. The guest means "I disagree with moving on" — so they need a discourse marker of disagreement or introduction: "Actually, I\'d push back on that" or "Well, I\'d push back on that." Using "wrap up" here makes no grammatical sense — it would mean "Finish, I would push back on that" which is incoherent.',
        },
        {
          lineIndex: 4,
          incorrectText: 'Actually, let\'s wrap up the title debate',
          correction: 'Right, let\'s wrap up the title debate',
          explanation: '"Actually" signals something new or unexpected — a reversal or stronger point. But the host is not introducing a surprise or reversal here — they are simply managing the conversation by closing one topic. "Right" is the correct marker for a host managing transitions: "Right, let\'s wrap up." "Actually" would make more sense if the host was introducing something surprising: "Actually, before we move on, let me add one more stat." Here, "Right" is the natural podcast transition word.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Finish each podcast exchange using natural discourse markers. Make it sound like a real football podcast.',
      items: [
        {
          customerLine: 'Host: "Right — who is the best player in the Premier League right now? Your take."',
          salespersonStart: 'Guest: "Well, to be honest,',
          suggestedCompletion: 'Guest: "Well, to be honest, I think it has to be Salah — I mean, in terms of consistency and big-game performances, nobody comes close right now. To be fair, there are two or three who\'ll be in the conversation — Haaland\'s numbers are obscene, you know what I mean? Having said that, if I had to pick one player who changes a game, it\'s Salah. Actually, the stats back it up — most goal contributions in the league this season by a mile."',
        },
        {
          customerLine: 'Guest 1: "The manager is a genius — I\'d give him a ten-year contract tomorrow."',
          salespersonStart: 'Guest 2: "I\'d push back on that.',
          suggestedCompletion: 'Guest 2: "I\'d push back on that. I mean, to be fair, the results this month have been brilliant — three wins on the bounce is great. Having said that, the performances have been unconvincing, you know what I mean? In terms of actual football quality, I\'m not sure. To be honest, a ten-year contract is a huge commitment. Actually — can we break down the fixtures? Three of those wins were against bottom-half sides. Well, let\'s see how they do against City on Saturday before we hand him the keys to the club."',
        },
        {
          customerLine: 'Host: "Okay — quick fire round. Should they sign a new striker this summer — yes or no?"',
          salespersonStart: 'Guest: "Well,',
          suggestedCompletion: 'Guest: "Well, yes — but it\'s not that simple, is it? I mean, in terms of the budget, they spent heavily last January. To be fair, the current striker has been injured a lot, so they need cover at minimum. Having said that, a world-class signing would cost 80 million — do they have that? To be honest, I\'d say yes to a new striker, but it depends entirely on who is available. Actually, you know what — sign a striker AND a midfielder. That\'s my take. Two signings minimum."',
        },
        {
          customerLine: 'Host: "We\'ve covered everything — title race, transfers, manager debate. Let\'s wrap up."',
          salespersonStart: 'Guest: "Before we wrap up —',
          suggestedCompletion: 'Guest: "Before we wrap up — actually, I want to make one more point. I mean, we\'ve been debating all episode and I don\'t think we\'ve given enough credit to the goalkeeper. To be honest, she\'s been the best player on the pitch in four of the last five games. Having said that, she did make that mistake against City. Well, to be fair, every keeper has a bad day. In terms of overall season performance — she\'s been incredible. Right, I\'m done. Wrap up away."',
        },
      ],
    },
  },
};
