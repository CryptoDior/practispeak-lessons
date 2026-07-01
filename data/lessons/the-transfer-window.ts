import { Lesson } from '../../types/lesson';

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
    title: 'Reported Speech in Transfer Journalism',
    explanation: 'Transfer news relies heavily on reported speech — journalists relay what sources, agents, clubs, and managers have said without directly quoting them. Reported speech changes tenses: present becomes past, will becomes would, have becomes had. It also changes pronouns and time references. Understanding how reported speech works in football journalism helps you decode rumours, understand what is confirmed versus speculated, and read transfer articles much more fluently.',
    examples: [
      {
        sentence: 'Direct: "I want to stay at this club." Reported: He said he wanted to stay at the club.',
        label: 'Present simple → past simple in reported speech',
      },
      {
        sentence: 'Direct: "The deal will be completed by the weekend." Reported: Sources claimed the deal would be completed by the weekend.',
        label: 'Will → would in reported speech',
      },
      {
        sentence: 'Direct: "We have submitted a formal bid." Reported: The club confirmed they had submitted a formal bid.',
        label: 'Present perfect → past perfect in reported speech',
      },
    ],
    tip: 'In transfer journalism, the reporting verb is crucial. "Confirmed" is the strongest — it means the club or player officially stated something. "Claimed" is weaker — a source said it, but it may not be verified. "Suggested" is even weaker. Learn to read these signal words and calibrate how much you trust the information.',
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
      partOfSpeech: 'verb / noun',
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
      partOfSpeech: 'verb / noun',
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
      inAction: 'Used when a deal is completed despite difficulties.',
      register: 'informal / journalistic',
      inContext: 'Transfer journalism, business negotiations.',
    },
    {
      phrase: 'PULL OUT OF',
      definition: 'To withdraw from a transfer deal — a club or player deciding not to proceed.',
      example: '"The player pulled out of the deal on medical grounds — a scan revealed a knee issue that altered the financial terms."',
      inAction: 'Used when a transfer collapses before completion.',
      register: 'neutral',
      inContext: 'Transfer journalism, contract negotiations.',
    },
    {
      phrase: 'SIGN OFF ON',
      definition: 'To give final approval — often used for the last official step of confirming a transfer.',
      example: '"The chairman flew in from Dubai specifically to sign off on the deal — a signing that took six months to negotiate."',
      inAction: 'Used for final approval of a deal.',
      register: 'neutral / formal',
      inContext: 'Transfers, business, legal agreements.',
    },
    {
      phrase: 'HOLD OUT FOR',
      definition: 'To wait and refuse lesser offers in the hope of getting a better deal.',
      example: '"He held out for a Champions League club — turning down three Premier League offers while he waited for the right move."',
      inAction: 'Used when a player or club waits for a better offer.',
      register: 'neutral',
      inContext: 'Transfer negotiations, salary discussions.',
    },
    {
      phrase: 'TRIGGER',
      definition: 'To activate a release clause — to formally meet the set price to unlock a transfer.',
      example: '"The Spanish club triggered his release clause on the first day of the window — paying the full 80-million-euro buyout."',
      inAction: 'Used for activating a contractual release clause.',
      register: 'neutral / technical',
      inContext: 'Transfer journalism, contract law.',
    },
    {
      phrase: 'TALK UP',
      definition: 'To publicly praise a player in a way that hints at or supports a transfer bid.',
      example: '"The manager talked up the striker in his press conference — many saw it as an attempt to persuade the player to choose their club."',
      inAction: 'Used when praise has an ulterior motive.',
      register: 'informal / journalistic',
      inContext: 'Transfer journalism, media relations.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpTW1',
      title: 'Rumour or Confirmed?',
      image: '/images/ootp-rumour-confirmed.png',
      description: 'Students analyse transfer reporting verbs to assess how reliable each story is.',
      prompt: 'Rate each statement as (1) Confirmed, (2) Likely, or (3) Rumour/Speculation — based on the reporting verb used: (a) "The club confirmed they had submitted a formal bid." (b) "Sources claimed the player would join within 48 hours." (c) "Reports suggested the agent had held informal talks." (d) "The player\'s contract has been officially terminated." Discuss: which words gave it away?',
    },
    {
      id: 'ootpTW2',
      title: 'Convert to Reported Speech',
      image: '/images/ootp-reported-speech.png',
      description: 'Students convert direct quotes to reported speech.',
      prompt: 'Rewrite each direct quote as reported speech: (1) "I have agreed personal terms with the club." (2) "We will not be selling our best players this summer." (3) "The deal is close to being completed." (4) "He wants to stay — we haven\'t received a bid." Use appropriate reporting verbs (said, confirmed, claimed, denied, insisted).',
    },
    {
      id: 'ootpTW3',
      title: 'Transfer Negotiation Roleplay',
      image: '/images/ootp-negotiation.png',
      description: 'Students roleplay a transfer negotiation between two clubs.',
      prompt: 'Club A wants to sign Club B\'s star striker. Club B values him at £80m. Club A opens with a £55m bid. Play out the negotiation: Student A represents Club A\'s sporting director; Student B represents Club B\'s chairman. You have 5 minutes to reach or fail to reach a deal. Use vocabulary from this lesson.',
    },
    {
      id: 'ootpTW4',
      title: 'Deadline Day Drama',
      image: '/images/ootp-deadline-day.png',
      description: 'Students write a 100-word "deadline day" transfer report.',
      prompt: 'Write a 100-word "deadline day" report describing a fictional transfer that was nearly completed, then nearly collapsed, then was finally pushed through with minutes to spare. Use: at least three vocabulary items from this lesson; at least two phrasal verbs; and one piece of reported speech.',
    },
    {
      id: 'ootpTW5',
      title: 'Transfer Value Debate',
      image: '/images/ootp-transfer-debate.png',
      description: 'Students debate whether transfer fees in modern football are justified.',
      prompt: 'Are £100m+ transfer fees a sign of a healthy, wealthy sport — or are they a symptom of financial irresponsibility that threatens football\'s future? Argue your case. Use real transfers as evidence if you can.',
    },
    {
      id: 'ootpTW6',
      title: 'Write the Headline',
      image: '/images/ootp-write-headline.png',
      description: 'Students write tabloid-style transfer headlines using lesson vocabulary.',
      prompt: 'Write a transfer headline for each scenario: (1) A club makes a huge bid for a player who then rejects it. (2) A deal collapses on deadline day. (3) A surprise signing is announced at midnight. (4) A player triggers their own release clause. Transfer headlines tend to be punchy, dramatic, and often use football slang.',
    },
  ],

  videos: [],

  dialogue: {
    title: 'Window Shopping',
    context: 'Two fans discuss the summer transfer window in a café.',
    lines: [
      { speaker: 'Fan 1', text: 'Did you see — they\'ve submitted another bid for the striker. Third one this summer.' },
      { speaker: 'Fan 2', text: 'And the selling club will reject it again. Their valuation is at least thirty million more than we\'re offering.' },
      { speaker: 'Fan 1', text: 'The agent was on the radio. He said the player wanted to make the move. Personal terms are already agreed apparently.' },
      { speaker: 'Fan 2', text: 'That\'s always a worry — if personal terms are done, the player might start pushing for the move. Agitate a bit.' },
      { speaker: 'Fan 1', text: 'What about the release clause? Doesn\'t he have one?' },
      { speaker: 'Fan 2', text: 'He does — but it\'s 150 million euros. Nobody\'s triggering that. Not even City.' },
      { speaker: 'Fan 1', text: 'Deadline day is going to be insane. They need a striker — they can\'t go into the season with only one.' },
      { speaker: 'Fan 2', text: 'I just hope they don\'t panic and swoop for someone they don\'t actually want. That\'s how you end up with a mess in January.' },
    ],
  },

  matchingExercise: {
    title: 'Transfer Vocabulary Match',
    instructions: 'Match each transfer term to its definition.',
    pairs: [
      { term: 'Bid', definition: 'A formal offer of money made by one club for a player' },
      { term: 'Snub', definition: 'To reject an offer from a club or player' },
      { term: 'Deadline day', definition: 'The final day when transfers must be completed' },
      { term: 'Valuation', definition: 'A club\'s assessment of what a player is worth' },
      { term: 'Release clause', definition: 'A contractual fixed price that allows a player to leave' },
      { term: 'Swoop', definition: 'A quick, unexpected move to sign a player' },
      { term: 'Personal terms', definition: 'Direct contract details agreed between player and club' },
      { term: 'Unveiling', definition: 'The official public introduction of a new signing' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank',
    instructions: 'Complete each transfer report sentence with the correct vocabulary.',
    wordBank: ['bid', 'snubbed', 'deadline day', 'valuation', 'release clause', 'swooped', 'personal terms', 'unveiling'],
    items: [
      { sentence: 'The club submitted a 90-million-pound ___ for the winger — their opening offer in what could be a lengthy negotiation.', answer: 'bid' },
      { sentence: 'He ___ three contract renewal offers — making clear he had no intention of extending beyond the summer.', answer: 'snubbed' },
      { sentence: '___ delivered the drama it always promises — five signings across the league completed in the final two hours.', answer: 'Deadline day' },
      { sentence: 'There was a 25-million gap between the clubs\' ___ of the player — enough to put the deal in serious doubt.', answer: 'valuation' },
      { sentence: 'His ___ was triggered by the Spanish club — the 100-million-euro fee paid in full on the first day of the window.', answer: 'release clause' },
      { sentence: 'City ___ to sign the Brazilian international on the final day — completing the medical and paperwork in under four hours.', answer: 'swooped' },
      { sentence: '___ were reportedly agreed two weeks ago — the delay was all about the fee between the clubs.', answer: 'Personal terms' },
      { sentence: 'The ___ attracted thousands of fans to the stadium — the new signing held up the shirt to enormous cheers.', answer: 'unveiling' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Answer',
    instructions: 'Choose the best answer for each question.',
    items: [
      {
        question: 'In reported speech, "I want to sign for this club" becomes:',
        options: ['He said he wanted to sign for that club.', 'He said he wants to sign for this club.', 'He said that he will sign for this club.', 'He said he is wanting to sign for that club.'],
        answer: 'He said he wanted to sign for that club.',
      },
      {
        question: '"A release clause" allows a player to:',
        options: ['Leave a club for a fixed fee set in their contract', 'Extend their contract without negotiation', 'Move clubs for free at the end of their contract', 'Appeal against a transfer decision'],
        answer: 'Leave a club for a fixed fee set in their contract',
      },
      {
        question: 'Which reporting verb signals the most reliable transfer information?',
        options: ['Confirmed', 'Claimed', 'Suggested', 'Hinted'],
        answer: 'Confirmed',
      },
      {
        question: '"Personal terms" in a transfer refers to:',
        options: ['The player\'s direct contract details — salary, length, bonuses', 'The fee agreed between the two clubs', 'The player\'s decision to choose one club over another', 'The agent\'s personal commission on the deal'],
        answer: 'The player\'s direct contract details — salary, length, bonuses',
      },
      {
        question: 'A club "pulls out of" a transfer. What happened?',
        options: ['They withdrew from the deal before it was completed', 'They completed the transfer successfully', 'They submitted a formal bid', 'They triggered a release clause'],
        answer: 'They withdrew from the deal before it was completed',
      },
      {
        question: '"Sources claimed the deal would be completed by the weekend." What does "claimed" tell you?',
        options: ['This is unverified — a source said it but it isn\'t officially confirmed', 'This is officially confirmed by both clubs', 'The source is very reliable — this will happen', 'The claim was later proved false'],
        answer: 'This is unverified — a source said it but it isn\'t officially confirmed',
      },
      {
        question: '"The club swooped to sign the forward on deadline day." What does "swooped" imply?',
        options: ['The move was quick, unexpected, and possibly last-minute', 'The club paid above the player\'s market value', 'The club had been negotiating for many months', 'The player asked for the transfer himself'],
        answer: 'The move was quick, unexpected, and possibly last-minute',
      },
      {
        question: 'In reported speech, "We will not sell our best player" becomes:',
        options: ['They insisted they would not sell their best player.', 'They insisted they will not sell their best player.', 'They insisted they are not selling their best player.', 'They insisted they have not sold their best player.'],
        answer: 'They insisted they would not sell their best player.',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using reported speech correctly.',
    items: [
      {
        sentence: 'Direct: "I have agreed personal terms." → The player\'s agent confirmed that his client ___ (agree) personal terms with the club.',
        answer: 'had agreed',
        explanation: '"Have agreed" (present perfect) → "had agreed" (past perfect) in reported speech. The tense shifts back one step when moving from direct to reported speech.',
      },
      {
        sentence: 'Direct: "We want to keep him." → The manager insisted that the club ___ (want) to keep him and had not received any official approach.',
        answer: 'wanted',
        explanation: '"Want" (present simple) → "wanted" (past simple) in reported speech. A direct statement of desire in the present shifts to past simple when reported.',
      },
      {
        sentence: 'Direct: "The deal will be done before Friday." → Sources suggested the deal ___ (will / complete) before Friday — though the fee remained in dispute.',
        answer: 'would be completed',
        explanation: '"Will be completed" (future passive) → "would be completed" (conditional passive) in reported speech. "Will" becomes "would" and the passive structure is maintained.',
      },
      {
        sentence: 'Direct: "We haven\'t submitted a bid." → The club denied that they ___ (submit) a formal bid, calling the reports "completely false".',
        answer: 'had submitted',
        explanation: '"Haven\'t submitted" (present perfect negative) → "had submitted" (past perfect) in the reported denial. "Denied that they had submitted" is the correct structure for reporting a denial.',
      },
      {
        sentence: 'Direct: "I want to play Champions League football." → The player\'s representatives confirmed he ___ (want) to play in the Champions League — ruling out any move to a lower-ranked club.',
        answer: 'wanted',
        explanation: 'Present simple "want" → past simple "wanted" in the reported clause. The present want is reported as past because the reporting verb "confirmed" is past tense.',
      },
      {
        sentence: 'Direct: "We have triggered the release clause." → The Spanish club announced they ___ (trigger) the release clause, ending any prospect of a contract extension.',
        answer: 'had triggered',
        explanation: '"Have triggered" (present perfect) → "had triggered" (past perfect). The announcement is being reported after the fact, so the past perfect correctly places the action before the announcement.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Confirmed or Rumour?',
      instructions: 'Assess each transfer story based on the language used.',
      items: [
        {
          prompt: '"The club have confirmed they have submitted a formal bid." How reliable is this story?',
          options: [
            'Very reliable — "confirmed" means officially verified by the club',
            'Uncertain — "confirmed" could mean anything',
            'A rumour — clubs never confirm bids before they are accepted',
            'Unreliable — journalists always exaggerate',
          ],
          answer: 'Very reliable — "confirmed" means officially verified by the club',
        },
        {
          prompt: '"Sources claimed the player wanted to leave this summer." How should you interpret this?',
          options: [
            'Unverified — "claimed" signals an unnamed source that may or may not be reliable',
            'Confirmed — if sources say it, it must be true',
            'False — "claimed" always means the story is incorrect',
            'Neutral — "claimed" and "confirmed" mean the same thing in journalism',
          ],
          answer: 'Unverified — "claimed" signals an unnamed source that may or may not be reliable',
        },
        {
          prompt: 'A player "snubs" a contract renewal. What does this mean for a potential transfer?',
          options: [
            'The player has rejected the offer — making a transfer increasingly likely',
            'The player has accepted the contract renewal on new terms',
            'The club has decided not to offer a renewal',
            'The agent has turned down an approach from another club on the player\'s behalf',
          ],
          answer: 'The player has rejected the offer — making a transfer increasingly likely',
        },
        {
          prompt: 'The clubs agree a fee but "personal terms" are not yet agreed. What still needs to happen?',
          options: [
            'The player and buying club must agree salary, contract length, and bonuses',
            'The selling club must approve the physical details of the contract',
            'The football association must ratify the transfer fee',
            'The player\'s agent must confirm they are representing the player in the deal',
          ],
          answer: 'The player and buying club must agree salary, contract length, and bonuses',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The transfer report below has three errors — in reported speech or vocabulary. Find and correct them.',
      dialogue: [
        { speaker: 'Report', text: 'Arsenal have confirmed they have submitted a formal bid for the Barcelona midfielder.' },
        { speaker: 'Report', text: 'The Spanish club have set their valuation at 80 million euros — a fee that Arsenal said they are not willing to pay.' },
        { speaker: 'Report', text: 'The player\'s agent confirmed that his client has agreed personal terms with the London club.' },
        { speaker: 'Report', text: 'Sources claimed the deal would be pushed through before the deadline, but the clubs remained twenty million apart in their valuations.' },
        { speaker: 'Report', text: 'Arsenal swooped to reject the player\'s release clause — the full 100-million-euro buyout paid on Thursday morning.' },
        { speaker: 'Report', text: 'An unveiling is expected at the weekend if the clubs can close the gap on the outstanding fee.' },
      ],
      errors: [
        { line: 2, original: 'Arsenal said they are not willing to pay', correction: 'Arsenal said they were not willing to pay', explanation: 'Reported speech requires tense shift. "Are not willing" (present) → "were not willing" (past) after "said". This is a standard backshift in reported speech.' },
        { line: 3, original: 'The player\'s agent confirmed that his client has agreed personal terms', correction: 'The player\'s agent confirmed that his client had agreed personal terms', explanation: '"Has agreed" (present perfect) → "had agreed" (past perfect) in reported speech. After "confirmed" (past tense reporting verb), the subordinate clause shifts back one tense.' },
        { line: 5, original: 'Arsenal swooped to reject the player\'s release clause', correction: 'Arsenal swooped to trigger the player\'s release clause', explanation: 'You "trigger" a release clause — you activate it by paying the set fee. You cannot "reject" your own player\'s release clause. "Reject" means to refuse an offer; "trigger" means to activate a clause.' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each transfer report sentence professionally.',
      items: [
        {
          prompt: 'The clubs were twenty million apart in their valuations, but on deadline day...',
          exampleAnswer: 'a final compromise was reached — the fee set at 75 million with a further 10 million in performance-related add-ons.',
        },
        {
          prompt: 'His agent confirmed he had snubbed three contract renewal offers because...',
          exampleAnswer: 'he wanted to test himself at the highest level of European football before his prime years were behind him.',
        },
        {
          prompt: 'The unveiling was unlike anything the club had seen before — thousands of fans...',
          exampleAnswer: 'gathered outside the stadium from dawn, chanting his name and holding banners in the club colours.',
        },
        {
          prompt: 'Whether the transfer fee was justified will only become clear when...',
          exampleAnswer: 'he has played a full season and the club can assess whether 80 million pounds bought them a game-changer or an expensive gamble.',
        },
      ],
    },
  },
};
