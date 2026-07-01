import { Lesson } from '@/types/lesson';

export const theTransferWindow: Lesson = {
  slug: 'the-transfer-window',
  title: 'The Transfer Window',
  subtitle: 'Unit 4 — Reading & Writing Football',
  level: 'B1-B2',
  description: 'The transfer window is one of football\'s most dramatic and language-rich events. For two months a year, the football world obsesses over deals, rumours, bids, and rejections. This lesson builds the vocabulary and grammar you need to read, discuss, and write about transfers with confidence.',
  heroImage: '/images/transfer-window.png',

  warmUp: {
    questions: [
      'Have you ever followed a transfer rumour or "deadline day" closely? What happened?',
      'Why do you think the transfer window creates so much excitement among fans?',
      'What is the most expensive transfer you know about? Was the player worth it?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Reported Speech in Transfer Journalism',
    description: 'Transfer news relies heavily on reported speech — journalists relay what sources, agents, clubs, and managers have said without directly quoting them. Reported speech changes tenses: present becomes past, will becomes would, have becomes had. It also changes pronouns and time references. Understanding how reported speech works in football journalism helps you decode rumours, understand what is confirmed versus speculated, and read transfer articles much more fluently. The reporting verb is crucial. "Confirmed" is the strongest — it means the club or player officially stated something. "Claimed" is weaker — a source said it, but it may not be verified. "Suggested" is even weaker. Learn to read these signal words and calibrate how much you trust the information.',
    positiveExamples: [
      {
        sentence: 'Direct: "I want to stay at this club." Reported: He said he wanted to stay at the club.',
        note: 'Present simple → past simple in reported speech',
      },
      {
        sentence: 'Direct: "The deal will be completed by the weekend." Reported: Sources claimed the deal would be completed by the weekend.',
        note: 'Will → would in reported speech',
      },
      {
        sentence: 'Direct: "We have submitted a formal bid." Reported: The club confirmed they had submitted a formal bid.',
        note: 'Present perfect → past perfect in reported speech',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'BID',
      partOfSpeech: 'noun / verb',
      definition: 'A formal offer of money made by one club to another for a player.',
      example: '"The club submitted a 70-million-pound bid for the midfielder — the third offer rejected by the selling club this summer."',
      imageSlug: '/images/bid.png',
    },
    {
      word: 'SNUB',
      partOfSpeech: 'noun / verb',
      definition: 'To reject — a transfer snub is a refusal of an offer or contract by a club or player.',
      example: '"The striker snubbed three contract renewal offers, making it clear he wanted to leave at the end of the season."',
      imageSlug: '/images/snub.png',
    },
    {
      word: 'DEADLINE DAY',
      partOfSpeech: 'noun',
      definition: 'The final day of the transfer window — when clubs rush to complete last-minute deals before the window closes.',
      example: '"Deadline day delivered the drama fans expected — six signings completed in the final four hours before midnight."',
      imageSlug: '/images/deadline-day.png',
    },
    {
      word: 'VALUATION',
      partOfSpeech: 'noun',
      definition: 'A club\'s assessment of how much a player is worth — the price they want to sell for.',
      example: '"The two clubs were 20 million apart in their valuations — the buying club\'s offer fell well short of what the selling side demanded."',
      imageSlug: '/images/valuation.png',
    },
    {
      word: 'RELEASE CLAUSE',
      partOfSpeech: 'noun',
      definition: 'A contractual clause that allows a player to leave for a fixed fee if a club meets that price.',
      example: '"His release clause was set at 150 million euros — a figure designed to make him untouchable, but one that four clubs were reportedly willing to meet."',
      imageSlug: '/images/release-clause.png',
    },
    {
      word: 'SWOOP',
      partOfSpeech: 'noun / verb',
      definition: 'A quick, often unexpected move to sign a player — typically used in tabloid transfer headlines.',
      example: '"City swooped to sign the winger on deadline day — completing the deal with just 20 minutes to spare before the window closed."',
      imageSlug: '/images/swoop.png',
    },
    {
      word: 'PERSONAL TERMS',
      partOfSpeech: 'noun',
      definition: 'The specific contract details agreed directly between the player and the buying club — salary, contract length, bonuses.',
      example: '"The clubs agreed a fee last week, but the deal was held up by personal terms — the player wanted a higher wage than the club was prepared to offer."',
      imageSlug: '/images/personal-terms.png',
    },
    {
      word: 'UNVEILING',
      partOfSpeech: 'noun',
      definition: 'The official public introduction of a new signing — often involving photographs, a press conference, and a shirt reveal.',
      example: '"The unveiling drew thousands of fans to the stadium — the new striker held up the shirt to roars of excitement from the crowd."',
      imageSlug: '/images/unveiling.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PUSH THROUGH',
      definition: 'To complete a transfer deal despite obstacles or resistance.',
      example: '"The agent pushed the deal through in the final hours of the window — overcoming a last-minute dispute about sell-on clauses."',
      imageSlug: '/images/push-through.png',
},
    {
      phrase: 'PULL OUT OF',
      definition: 'To withdraw from a transfer deal — a club or player deciding not to proceed.',
      example: '"The player pulled out of the deal on medical grounds — a scan revealed a knee issue that altered the financial terms."',
      imageSlug: '/images/pull-out-of.png',
},
    {
      phrase: 'SIGN OFF ON',
      definition: 'To give final approval — often used for the last official step of confirming a transfer.',
      example: '"The chairman flew in from Dubai specifically to sign off on the deal — a signing that took six months to negotiate."',
      imageSlug: '/images/sign-off-on.png',
},
    {
      phrase: 'HOLD OUT FOR',
      definition: 'To wait and refuse lesser offers in the hope of getting a better deal.',
      example: '"He held out for a Champions League club — turning down three Premier League offers while he waited for the right move."',
      imageSlug: '/images/hold-out-for.png',
},
    {
      phrase: 'TRIGGER',
      definition: 'To activate a release clause — to formally meet the set price to unlock a transfer.',
      example: '"The Spanish club triggered his release clause on the first day of the window — paying the full 80-million-euro buyout."',
      imageSlug: '/images/trigger-pv.png',
},
    {
      phrase: 'TALK UP',
      definition: 'To publicly praise a player in a way that hints at or supports a transfer bid.',
      example: '"The manager talked up the striker in his press conference — many saw it as an attempt to persuade the player to choose their club."',
      imageSlug: '/images/talk-up.png',
},
  ],

  onThePitch: {
    instructions: 'The transfer window affects what happens on the pitch — these are the on-pitch language moments created by transfers, rumours, and new signings.',
    items: [
      {
        cue: 'The new signing\'s first training session — integration language',
        meaning: 'A new signing\'s first training session is a critical social and linguistic moment. Players use specific language to welcome, test, and integrate a newcomer.',
        usage: '"Welcome to the club — I\'m the captain, anything you need." "Don\'t worry about the first session, just find your feet." "We call zones — zone one, zone two, three. You\'ll pick it up." A new signing who communicates well in their first session integrates faster: "He was shouting, calling, talking immediately — even when he wasn\'t sure of the patterns. The lads loved that." A signing who stays silent is harder to integrate. "The first training session tells you a lot about a player — not their ability, their character. Do they talk? Do they listen? Do they call?"',
        imageSlug: 'otp-new-signing-training',
      },
      {
        cue: 'Transfer rumour conversations in the dressing room',
        meaning: 'When a player\'s name is linked with a transfer in the media, the dressing room reacts — and the language of that reaction follows specific social rules.',
        usage: '"So... Bayern Munich, yeah?" — teammate teasing a player who has been linked with a big club. The target has two options: laugh it off ("Ha, if only!") or deflect ("Focus on the game, not the papers."). Transfer rumour language in the dressing room: "Don\'t believe what you read", "Stay focused — window closes in a week", "His head\'s not been right since the speculation started." Good team culture: the captain addresses it directly. "The captain said it out loud in training: \'If you\'re going, tell us. If you\'re staying, be here. We need to know which one it is.\'"',
        imageSlug: 'otp-transfer-rumours',
      },
      {
        cue: '"Deadline day" on the pitch — the distraction factor',
        meaning: 'Transfer deadline day is the most distracting day in football — even for players who are not involved in deals. The language of the dressing room shifts to transfers and speculation.',
        usage: '"Everyone\'s on their phones. It\'s impossible to focus." The challenge for managers on deadline day: keeping players who are leaving, players who are arriving, and players who are staying focused on the match. "The gaffer banned phones until after training — deadline day or not, we had a game on Saturday." Players who are the subject of late deadline day bids: "He\'s been distracted all week — you can see it. He\'s mentally already at the other club." On the pitch, the best antidote is a good training session: "Once we started playing, everyone forgot about the window for ninety minutes."',
        imageSlug: 'otp-deadline-day-pitch',
      },
      {
        cue: 'Introducing the new signing to the group — dressing room protocol',
        meaning: 'When a new signing arrives at their first official training session, there is an established social protocol — how they are introduced and how they respond sets the tone.',
        usage: '"Right lads — this is [name]. He\'s joined us from [club]. Make him welcome." The squad applauds. The manager says something brief and positive. The new player says a few words. Key signals: does the new player speak first or wait to be spoken to? Do they use first names immediately? "He walked in, introduced himself to everyone individually, shook hands, looked people in the eye — we knew immediately he\'d fit in." The dressing room tests new signings socially before tactically: "We don\'t care how good you are until we know what kind of person you are."',
        imageSlug: 'otp-signing-introduction',
      },
      {
        cue: 'A sold player\'s last training session — farewell language',
        meaning: 'When a player leaves the club, their final training session involves a specific kind of language — goodbye, good luck, and the particular emotion of a professional departure.',
        usage: '"Last session today, lads — give him a good send-off." The final session often ends with a small ceremony: applause, some words from the captain, a handshake from the manager. Players say things like: "It\'s been a pleasure", "Best of luck — you\'ll smash it there", "Stay in touch — come back and visit." "He was in tears at the end of his last session — twelve years at the club. Even the manager looked emotional." Transfer language at its most human: money and contracts are forgotten; only the relationships remain.',
        imageSlug: 'otp-sold-player-farewell',
      },
      {
        cue: '"Medical! He\'s through his medical!" — transfer confirmation language',
        meaning: 'Passing the medical is the final step before a transfer is confirmed. The language around the medical is tense, specific, and followed closely by players, fans, and media.',
        usage: '"He\'s passed his medical! It\'s done! He signs tomorrow." On the pitch, players follow deadline day transfer news on their phones between sessions. When a new signing passes their medical: immediate reactions in the dressing room. "The new striker passed his medical at 11pm — by training the next morning everyone knew. The buzz was real — we needed a striker and suddenly we had one." Transfer confirmation language: "It\'s done", "It\'s official", "Announced", "Here we go" (Fabrizio Romano\'s famous phrase). On the pitch, the arrival of a quality signing lifts the whole squad: "It sends a message — the club is serious."',
        imageSlug: 'otp-medical',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Fan 1', speakerColor: 'orange', text: 'Did you see — they\'ve submitted another bid for the striker. Third one this summer.' },
    { speaker: 'Fan 2', speakerColor: 'green', text: 'And the selling club will reject it again. Their valuation is at least thirty million more than we\'re offering.' },
    { speaker: 'Fan 1', speakerColor: 'orange', text: 'The agent was on the radio. He said the player wanted to make the move. Personal terms are already agreed apparently.' },
    { speaker: 'Fan 2', speakerColor: 'green', text: 'That\'s always a worry — if personal terms are done, the player might start pushing for the move. Agitate a bit.' },
    { speaker: 'Fan 1', speakerColor: 'orange', text: 'What about the release clause? Doesn\'t he have one?' },
    { speaker: 'Fan 2', speakerColor: 'green', text: 'He does — but it\'s 150 million euros. Nobody\'s triggering that. Not even City.' },
    { speaker: 'Fan 1', speakerColor: 'orange', text: 'Deadline day is going to be insane. They need a striker — they can\'t go into the season with only one.' },
    { speaker: 'Fan 2', speakerColor: 'green', text: 'I just hope they don\'t panic and swoop for someone they don\'t actually want. That\'s how you end up with a mess in January.' },
  ],

  matchingExercise: [
    { word: 'Bid', definition: 'A formal offer of money made by one club for a player' },
    { word: 'Snub', definition: 'To reject an offer from a club or player' },
    { word: 'Deadline day', definition: 'The final day when transfers must be completed' },
    { word: 'Valuation', definition: 'A club\'s assessment of what a player is worth' },
    { word: 'Release clause', definition: 'A contractual fixed price that allows a player to leave' },
    { word: 'Swoop', definition: 'A quick, unexpected move to sign a player' },
    { word: 'Personal terms', definition: 'Direct contract details agreed between player and club' },
    { word: 'Unveiling', definition: 'The official public introduction of a new signing' },
  ],

  fillBlankExercise: [
    { before: 'The club submitted a 90-million-pound', answer: 'bid', after: 'for the winger — their opening offer in what could be a lengthy negotiation.' },
    { before: 'He', answer: 'snubbed', after: 'three contract renewal offers — making clear he had no intention of extending beyond the summer.' },
    { before: '', answer: 'Deadline day', after: 'delivered the drama it always promises — five signings across the league completed in the final two hours.' },
    { before: 'There was a 25-million gap between the clubs\'', answer: 'valuation', after: 'of the player — enough to put the deal in serious doubt.' },
    { before: 'His', answer: 'release clause', after: 'was triggered by the Spanish club — the 100-million-euro fee paid in full on the first day of the window.' },
    { before: 'City', answer: 'swooped', after: 'to sign the Brazilian international on the final day — completing the medical and paperwork in under four hours.' },
    { before: '', answer: 'Personal terms', after: 'were reportedly agreed two weeks ago — the delay was all about the fee between the clubs.' },
    { before: 'The', answer: 'unveiling', after: 'attracted thousands of fans to the stadium — the new signing held up the shirt to enormous cheers.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'In reported speech, "I want to sign for this club" becomes:',
      options: ['He said he wanted to sign for that club.', 'He said he wants to sign for this club.', 'He said that he will sign for this club.', 'He said he is wanting to sign for that club.'],
      correctIndex: 0,
    },
    {
      question: '"A release clause" allows a player to:',
      options: ['Leave a club for a fixed fee set in their contract', 'Extend their contract without negotiation', 'Move clubs for free at the end of their contract', 'Appeal against a transfer decision'],
      correctIndex: 0,
    },
    {
      question: 'Which reporting verb signals the most reliable transfer information?',
      options: ['Confirmed', 'Claimed', 'Suggested', 'Hinted'],
      correctIndex: 0,
    },
    {
      question: '"Personal terms" in a transfer refers to:',
      options: ['The player\'s direct contract details — salary, length, bonuses', 'The fee agreed between the two clubs', 'The player\'s decision to choose one club over another', 'The agent\'s personal commission on the deal'],
      correctIndex: 0,
    },
    {
      question: 'A club "pulls out of" a transfer. What happened?',
      options: ['They withdrew from the deal before it was completed', 'They completed the transfer successfully', 'They submitted a formal bid', 'They triggered a release clause'],
      correctIndex: 0,
    },
    {
      question: '"Sources claimed the deal would be completed by the weekend." What does "claimed" tell you?',
      options: ['This is unverified — a source said it but it isn\'t officially confirmed', 'This is officially confirmed by both clubs', 'The source is very reliable — this will happen', 'The claim was later proved false'],
      correctIndex: 0,
    },
    {
      question: '"The club swooped to sign the forward on deadline day." What does "swooped" imply?',
      options: ['The move was quick, unexpected, and possibly last-minute', 'The club paid above the player\'s market value', 'The club had been negotiating for many months', 'The player asked for the transfer himself'],
      correctIndex: 0,
    },
    {
      question: 'In reported speech, "We will not sell our best player" becomes:',
      options: ['They insisted they would not sell their best player.', 'They insisted they will not sell their best player.', 'They insisted they are not selling their best player.', 'They insisted they have not sold their best player.'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using reported speech correctly.',
    items: [
      {
        sentence: 'Direct: "I have agreed personal terms." → The player\'s agent confirmed that his client ___ personal terms with the club.',
        options: ['had agreed', 'have agreed', 'agreed'],
        correctIndex: 0,
        explanation: '"Have agreed" (present perfect) → "had agreed" (past perfect) in reported speech. The tense shifts back one step when moving from direct to reported speech.',
      },
      {
        sentence: 'Direct: "We want to keep him." → The manager insisted that the club ___ to keep him and had not received any official approach.',
        options: ['wanted', 'wants', 'was wanting'],
        correctIndex: 0,
        explanation: '"Want" (present simple) → "wanted" (past simple) in reported speech. A direct statement of desire in the present shifts to past simple when reported.',
      },
      {
        sentence: 'Direct: "The deal will be done before Friday." → Sources suggested the deal ___ before Friday — though the fee remained in dispute.',
        options: ['would be completed', 'will be completed', 'was completed'],
        correctIndex: 0,
        explanation: '"Will be completed" (future passive) → "would be completed" (conditional passive) in reported speech. "Will" becomes "would" and the passive structure is maintained.',
      },
      {
        sentence: 'Direct: "We haven\'t submitted a bid." → The club denied that they ___ a formal bid, calling the reports "completely false".',
        options: ['had submitted', 'have submitted', 'submitted'],
        correctIndex: 0,
        explanation: '"Haven\'t submitted" (present perfect negative) → "had submitted" (past perfect) in the reported denial. "Denied that they had submitted" is the correct structure for reporting a denial.',
      },
      {
        sentence: 'Direct: "I want to play Champions League football." → The player\'s representatives confirmed he ___ to play in the Champions League.',
        options: ['wanted', 'wants', 'had wanted'],
        correctIndex: 0,
        explanation: 'Present simple "want" → past simple "wanted" in the reported clause. The present want is reported as past because the reporting verb "confirmed" is past tense.',
      },
      {
        sentence: 'Direct: "We have triggered the release clause." → The Spanish club announced they ___ the release clause, ending any prospect of a contract extension.',
        options: ['had triggered', 'have triggered', 'triggered'],
        correctIndex: 0,
        explanation: '"Have triggered" (present perfect) → "had triggered" (past perfect). The announcement is being reported after the fact, so the past perfect correctly places the action before the announcement.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Assess each transfer story based on the language used.',
      items: [
        {
          customerLine: '"The club have confirmed they have submitted a formal bid." How reliable is this story?',
          options: [
            'Very reliable — "confirmed" means officially verified by the club',
            'Uncertain — "confirmed" could mean anything',
            'A rumour — clubs never confirm bids before they are accepted',
            'Unreliable — journalists always exaggerate',
          ],
          correctIndex: 0,
          explanation: '"Confirmed" is the strongest reporting verb — it means the club officially stated the fact. This is as reliable as transfer news gets. The other options misread "confirmed" as ambiguous, which it is not in journalistic usage.',
        },
        {
          customerLine: '"Sources claimed the player wanted to leave this summer." How should you interpret this?',
          options: [
            'Unverified — "claimed" signals an unnamed source that may or may not be reliable',
            'Confirmed — if sources say it, it must be true',
            'False — "claimed" always means the story is incorrect',
            'Neutral — "claimed" and "confirmed" mean the same thing in journalism',
          ],
          correctIndex: 0,
          explanation: '"Claimed" signals an unnamed source — it means the information has not been officially verified. "Claimed" is weaker than "confirmed" and much weaker than a direct club statement.',
        },
        {
          customerLine: 'A player "snubs" a contract renewal. What does this mean for a potential transfer?',
          options: [
            'The player has rejected the offer — making a transfer increasingly likely',
            'The player has accepted the contract renewal on new terms',
            'The club has decided not to offer a renewal',
            'The agent has turned down an approach from another club on the player\'s behalf',
          ],
          correctIndex: 0,
          explanation: '"Snub" means to reject — specifically, to reject an offer in a way that signals the player doesn\'t want to stay. A snubbed renewal is a strong signal that a departure is imminent.',
        },
        {
          customerLine: 'The clubs agree a fee but "personal terms" are not yet agreed. What still needs to happen?',
          options: [
            'The player and buying club must agree salary, contract length, and bonuses',
            'The selling club must approve the physical details of the contract',
            'The football association must ratify the transfer fee',
            'The player\'s agent must confirm they are representing the player in the deal',
          ],
          correctIndex: 0,
          explanation: '"Personal terms" are the direct contract details between the player and the buying club — primarily salary, length, and bonuses. Once the clubs agree a fee, the player must agree their own deal. This is a separate and often difficult stage of a transfer.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The transfer report below has three errors — in reported speech or vocabulary. Find and correct them.',
      dialogue: [
        { speaker: 'Report', text: 'Arsenal have confirmed they have submitted a formal bid for the Barcelona midfielder.' },
        { speaker: 'Report', text: 'The Spanish club have set their valuation at 80 million euros — a fee that Arsenal said they are not willing to pay.' },
        { speaker: 'Report', text: 'The player\'s agent confirmed that his client has agreed personal terms with the London club.' },
        { speaker: 'Report', text: 'Sources claimed the deal would be pushed through before the deadline, but the clubs remained twenty million apart in their valuations.' },
        { speaker: 'Report', text: 'Arsenal swooped to reject the player\'s release clause — the full 100-million-euro buyout paid on Thursday morning.' },
        { speaker: 'Report', text: 'An unveiling is expected at the weekend if the clubs can close the gap on the outstanding fee.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Arsenal said they are not willing to pay',
          correction: 'Arsenal said they were not willing to pay',
          explanation: 'Reported speech requires tense shift. "Are not willing" (present) → "were not willing" (past) after "said". This is a standard backshift in reported speech.',
        },
        {
          lineIndex: 2,
          incorrectText: 'The player\'s agent confirmed that his client has agreed personal terms',
          correction: 'The player\'s agent confirmed that his client had agreed personal terms',
          explanation: '"Has agreed" (present perfect) → "had agreed" (past perfect) in reported speech. After "confirmed" (past tense reporting verb), the subordinate clause shifts back one tense.',
        },
        {
          lineIndex: 4,
          incorrectText: 'Arsenal swooped to reject the player\'s release clause',
          correction: 'Arsenal swooped to trigger the player\'s release clause',
          explanation: 'You "trigger" a release clause — you activate it by paying the set fee. You cannot "reject" your own player\'s release clause. "Reject" means to refuse an offer; "trigger" means to activate a clause.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each transfer report sentence professionally.',
      items: [
        {
          customerLine: 'Complete this sentence about a last-minute transfer compromise.',
          salespersonStart: 'The clubs were twenty million apart in their valuations, but on deadline day...',
          suggestedCompletion: 'a final compromise was reached — the fee set at 75 million with a further 10 million in performance-related add-ons.',
        },
        {
          customerLine: 'Complete this sentence about why a player snubbed renewal offers.',
          salespersonStart: 'His agent confirmed he had snubbed three contract renewal offers because...',
          suggestedCompletion: 'he wanted to test himself at the highest level of European football before his prime years were behind him.',
        },
        {
          customerLine: 'Complete this sentence about a spectacular unveiling.',
          salespersonStart: 'The unveiling was unlike anything the club had seen before — thousands of fans...',
          suggestedCompletion: 'gathered outside the stadium from dawn, chanting his name and holding banners in the club colours.',
        },
        {
          customerLine: 'Complete this sentence about whether a transfer fee was justified.',
          salespersonStart: 'Whether the transfer fee was justified will only become clear when...',
          suggestedCompletion: 'he has played a full season and the club can assess whether 80 million pounds bought them a game-changer or an expensive gamble.',
        },
      ],
    },
  },
};
