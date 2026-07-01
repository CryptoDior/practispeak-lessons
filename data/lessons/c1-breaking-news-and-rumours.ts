import { Lesson } from '@/types/lesson';

export const c1BreakingNewsAndRumours: Lesson = {
  slug: 'c1-breaking-news-and-rumours',
  title: 'Breaking News and Rumours',
  subtitle: 'Unit 3 — Broadcast & Journalism',
  level: 'C1-C2',
  description: 'Transfer rumours, injury updates, and breaking stories move faster than ever in modern football. Learn the specific vocabulary and hedging strategies journalists use to report stories at different stages of certainty.',
  heroImage: '/images/breaking-news-football.png',

  warmUp: {
    questions: [
      'How do you follow transfer news? Do you use Twitter/X, official club sites, or journalists? Why?',
      'Have you ever been excited by a transfer rumour that turned out to be false? What happened?',
      'What is the difference between a rumour, a report, and a confirmed story in football journalism?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Reported speech and attribution — sourcing claims in journalism',
    description: 'Football journalists must be precise about where information comes from. Confirmed: "The club has confirmed the signing." Attributed: "The club is reported to have agreed a fee." Unverified: "Sources claim the player has asked to leave." The verb you choose signals reliability. "Confirm" = verified. "Report" = credible but unverified. "Claim" = single source or unverified. "Suggest" = indirect evidence. "Emerge" = information has come from unclear sources. Getting attribution wrong in journalism can be costly — or embarrassing.',
    positiveExamples: [
      { sentence: 'The club has confirmed that the player will join on a four-year deal.', note: '"confirm" = official, verified — no qualification needed' },
      { sentence: 'The transfer is reported to be worth £60 million, according to multiple sources.', note: '"reported to be" + "according to sources" = credible but unverified' },
      { sentence: 'It is claimed that the player has submitted a formal transfer request.', note: '"it is claimed" = passive attribution — distancing the journalist from the claim' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'EXCLUSIVE',
      partOfSpeech: 'noun',
      definition: 'A story that one journalist or outlet has reported before anyone else — obtained through a source that did not share it with others.',
      example: '"The journalist broke the exclusive on the manager\'s sacking — she had the story four hours before anyone else."',
      imageSlug: '/images/exclusive.png',
    },
    {
      word: 'SOURCE',
      partOfSpeech: 'noun',
      definition: 'A person who provides a journalist with information — often confidentially and without being named in the story.',
      example: '"A source close to the club has told us that negotiations have broken down completely."',
      imageSlug: '/images/source-journalism.png',
    },
    {
      word: 'CONFIRMATION',
      partOfSpeech: 'noun',
      definition: 'Official verification of a story — when a club, agent, or player formally states that something is true.',
      example: '"We are awaiting confirmation from the club before we can publish the story."',
      imageSlug: '/images/confirmation.png',
    },
    {
      word: 'EMBARGO',
      partOfSpeech: 'noun',
      definition: 'An agreement to not publish information before a specific time — journalists may have the story but must wait to publish.',
      example: '"The press conference was under embargo until midnight — every outlet had the story but none could publish it early."',
      imageSlug: '/images/embargo.png',
    },
    {
      word: 'SPECULATION',
      partOfSpeech: 'noun',
      definition: 'Discussion of what might happen based on limited information — not verified reporting, just possibility.',
      example: '"At this stage, all the transfer talk is pure speculation — nothing has been agreed and no bid has been submitted."',
      imageSlug: '/images/speculation.png',
    },
    {
      word: 'CORROBORATE',
      partOfSpeech: 'verb',
      definition: 'To confirm or support a story with additional independent evidence — to check a story with a second source.',
      example: '"We couldn\'t publish until we had corroborated the story with a second independent source."',
      imageSlug: '/images/corroborate.png',
    },
    {
      word: 'LEAK',
      partOfSpeech: 'noun / verb',
      definition: 'Information that was shared privately being given to a journalist — either accidentally or deliberately.',
      example: '"The document was leaked to the press — it contained details of the player\'s contract that the club had never made public."',
      imageSlug: '/images/leak-journalism.png',
    },
    {
      word: 'RETRACTION',
      partOfSpeech: 'noun',
      definition: 'An official withdrawal of something that was published incorrectly — a public admission that a story was wrong.',
      example: '"The outlet was forced to publish a retraction after the transfer story turned out to be completely false."',
      imageSlug: '/images/retraction.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BREAK A STORY',
      definition: 'To be the first journalist or outlet to report a piece of news — to publish it before anyone else does.',
      example: '"She broke the story on the manager\'s sacking at 10pm — everyone else followed three hours later."',
      imageSlug: '/images/break-story.png',
    },
    {
      phrase: 'STAND UP',
      definition: 'To be verified and confirmed — for a story to hold up under scrutiny and be proven correct.',
      example: '"We need at least two independent sources before we publish — the story has to stand up."',
      imageSlug: '/images/stand-up-journalism.png',
    },
    {
      phrase: 'PLAY DOWN',
      definition: 'To make something seem less significant than it is — clubs often play down transfer rumours or injury concerns.',
      example: '"The club is playing down talk of a takeover — but three of our sources are telling a very different story."',
      imageSlug: '/images/play-down.png',
    },
    {
      phrase: 'EMERGE',
      definition: 'For information to become known — often used when the source is unclear or when details appear gradually.',
      example: '"Details are beginning to emerge about the nature of the injury — it appears more serious than first reported."',
      imageSlug: '/images/emerge.png',
    },
    {
      phrase: 'HOLD BACK',
      definition: 'To not publish information yet — to wait for confirmation, the embargo to expire, or permission to proceed.',
      example: '"We have the full story but we\'re holding back until we hear from the club\'s official spokesperson."',
      imageSlug: '/images/hold-back.png',
    },
    {
      phrase: 'PICK UP',
      definition: 'For a story to be noticed and reported by other outlets — when a story spreads from one journalist to many.',
      example: '"The story broke on a small fan site and was picked up by every major outlet within the hour."',
      imageSlug: '/images/pick-up-story.png',
    },
  ],

  onThePitch: {
    instructions: 'Key phrases and vocabulary for reporting breaking football news at different stages of certainty.',
    items: [
      {
        cue: 'Reporting something confirmed',
        meaning: 'When a story is officially confirmed — by the club, the player, the agent, or a formal announcement — you can state it as fact. No hedging needed.',
        usage: '"The club has confirmed the signing of the striker on a five-year deal. The fee is reported to be £45 million, rising to £55 million with add-ons. The announcement was made via the club\'s official channels at 6pm." Use: confirm, announce, official, agree.',
        imageSlug: 'otp-confirmed',
      },
      {
        cue: 'Reporting an unconfirmed story',
        meaning: 'When you have credible information but no official confirmation, use careful attribution language. The sourcing language protects the journalist and signals reliability to the reader.',
        usage: '"According to sources close to the club, the fee has been agreed in principle. The transfer is reported to be imminent, though neither club has yet confirmed the deal." Use: according to sources / reportedly / is understood to / is reported to.',
        imageSlug: 'otp-unconfirmed',
      },
      {
        cue: 'Separating rumour from reporting',
        meaning: 'Football Twitter is full of rumours that are not journalism. Critical readers learn to separate social media speculation from verified reporting by credible journalists.',
        usage: '"At this stage, it\'s important to separate the speculation from the reporting. The credible outlets are reporting that talks have taken place. The rest — the fees, the wages, the timeline — is speculation and has not been corroborated." Be explicit about the difference.',
        imageSlug: 'otp-rumour-vs-report',
      },
      {
        cue: 'The breaking news flash',
        meaning: 'When a story breaks and information is still coming in, journalists use specific language to signal that the picture is not yet complete.',
        usage: '"Breaking: the manager has left the club by mutual consent. Details are emerging — we will update this story as we get more information. Do not republish until confirmed." Note: "by mutual consent" often means one party was forced out but an agreement was reached to protect both sides.',
        imageSlug: 'otp-breaking',
      },
      {
        cue: 'Describing the transfer window language',
        meaning: 'Transfer window journalism has a specific vocabulary: deal agreed, fee agreed, personal terms, medical, official announcement. Understanding this sequence helps you follow a transfer story.',
        usage: 'The sequence: 1. Club bid submitted. 2. Fee agreed between clubs. 3. Player agrees personal terms. 4. Player travels for medical. 5. Medical passed. 6. Official announcement. Many transfers collapse at stage 3 or 4. "Here We Go" is the phrase used by journalist Fabrizio Romano to signal a deal is officially confirmed.',
        imageSlug: 'otp-transfer-sequence',
      },
      {
        cue: 'The correction and retraction',
        meaning: 'Every journalist gets a story wrong sometimes. How they handle corrections reveals their professionalism and integrity.',
        usage: '"I have to correct an earlier report — my source was wrong about the fee. The figure I reported was not accurate. I apologise for the error and have updated the original article. I will not be publishing from that source again until they demonstrate their information is reliable." Corrections should be clear, prompt, and without excuses.',
        imageSlug: 'otp-retraction',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'purple', text: 'Right — we have something. A source is telling me the manager is being sacked tonight.' },
    { speaker: 'Editor', speakerColor: 'blue', text: 'One source? That\'s not enough. Have you corroborated it?' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'Working on it now. But the story is going to emerge somewhere — I don\'t want to get beaten to it.' },
    { speaker: 'Editor', speakerColor: 'blue', text: 'We don\'t publish until it stands up. Two independent sources minimum. What is the club saying?' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'Playing it down — the standard "no comment on speculation." But they\'re not denying it either.' },
    { speaker: 'Editor', speakerColor: 'blue', text: 'A non-denial is interesting. Keep digging. If we can\'t confirm it, we hold back until we can.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'Second source just came in — they\'re confirming. It\'s happening tonight. Do I break the story?' },
    { speaker: 'Editor', speakerColor: 'blue', text: 'Two credible independent sources. Yes — publish. But get the language right: "is reported to have" until we have the official announcement.' },
  ],

  matchingExercise: [
    { word: 'Exclusive', definition: 'A story one journalist reports before anyone else — obtained through a unique source' },
    { word: 'Source', definition: 'A person who provides a journalist with information, often confidentially' },
    { word: 'Embargo', definition: 'An agreement to not publish information before a specific agreed time' },
    { word: 'Corroborate', definition: 'To confirm a story with an additional independent source or piece of evidence' },
    { word: 'Speculation', definition: 'Discussion of what might happen based on limited, unverified information' },
    { word: 'Leak', definition: 'Private information shared with a journalist, either accidentally or deliberately' },
    { word: 'Retraction', definition: 'An official withdrawal and public apology for a story that was published incorrectly' },
    { word: 'Confirmation', definition: 'Official verification that a story is true — from the club, player, or agent' },
  ],

  fillBlankExercise: [
    { before: 'She', answer: 'broke the story', after: 'on the sacking four hours before any other outlet.' },
    { before: 'We need two independent sources before we publish — the story has to', answer: 'stand up', after: '.' },
    { before: 'The club is', answer: 'playing down', after: 'the takeover talk — but our sources tell a different story.' },
    { before: 'Details are beginning to', answer: 'emerge', after: 'about the injury — it appears more serious than first reported.' },
    { before: 'We have the full story but we\'re', answer: 'holding back', after: 'until we hear from the official spokesperson.' },
    { before: 'The outlet was forced to publish a', answer: 'retraction', after: 'after the transfer story turned out to be false.' },
    { before: 'We couldn\'t publish until we had', answer: 'corroborated', after: 'the story with a second independent source.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "embargo" mean in football journalism?',
      options: ['An agreement to not publish information before a specific agreed time', 'A club\'s refusal to speak to a journalist about a specific topic', 'A legal injunction preventing a story from being published at all'],
      correctIndex: 0,
    },
    {
      question: 'Which verb signals the highest level of certainty in a transfer story?',
      options: ['"Confirm" — it means the information has been officially verified', '"Report" — it means credible sources have told journalists', '"Emerge" — it means information is coming from multiple directions'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "We couldn\'t publish until we had ___ the story with a second source."',
      options: ['corroborated', 'leaked', 'broken'],
      correctIndex: 0,
    },
    {
      question: 'What does it mean when a club "plays down" a transfer rumour?',
      options: ['They make the story seem less significant than it may actually be — often to protect negotiations', 'They officially confirm that the rumour is completely false', 'They ask the journalist not to publish the story out of respect'],
      correctIndex: 0,
    },
    {
      question: 'Why do journalists use phrases like "is reported to be" rather than stating things as fact?',
      options: ['To signal that information is credible but unverified — and to protect against publishing an incorrect story as confirmed', 'Because they are not confident in their information and want to avoid responsibility', 'Because football journalism has different legal standards from other types of journalism'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each journalism sentence.',
    items: [
      {
        sentence: 'She ___ the story on the signing at midnight — three hours before every other outlet.',
        options: ['broke', 'leaked', 'confirmed'],
        correctIndex: 0,
        explanation: '"Break a story" means to be the first to report it — the journalist who publishes first has "broken" the story.',
      },
      {
        sentence: 'The club is ___ down all speculation about a new manager — but three sources say otherwise.',
        options: ['playing', 'holding', 'picking'],
        correctIndex: 0,
        explanation: '"Play down" means to make something seem less significant — a common club strategy during sensitive periods.',
      },
      {
        sentence: 'We\'re ___ back on publishing until we have official confirmation from the club.',
        options: ['holding', 'breaking', 'standing'],
        correctIndex: 0,
        explanation: '"Hold back" means to not publish yet — to wait for confirmation, the embargo to expire, or permission to proceed.',
      },
      {
        sentence: 'Details are beginning to ___ about the severity of the injury — it may be worse than initially thought.',
        options: ['emerge', 'confirm', 'corroborate'],
        correctIndex: 0,
        explanation: '"Emerge" means for information to gradually become known — often used when sources are unclear or incomplete.',
      },
      {
        sentence: 'A ___ close to the club has told us negotiations broke down at the last minute.',
        options: ['source', 'leak', 'retraction'],
        correctIndex: 0,
        explanation: 'A source is the person who provides a journalist with information — often confidentially and without being named.',
      },
      {
        sentence: 'The story has to ___ up — we need at least two independent sources before we can publish.',
        options: ['stand', 'pick', 'break'],
        correctIndex: 0,
        explanation: '"Stand up" means to be verified and confirmed — for a story to hold up under journalistic scrutiny.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are a sports journalist. Choose the most professionally responsible response.',
      items: [
        {
          customerLine: 'Your editor says: "Everyone else is publishing the transfer story — why haven\'t we?"',
          options: [
            '"Because we\'ve only corroborated it with one source, not two. We\'ll be beaten to it — but if the story is wrong, we won\'t be the outlet that published the retraction."',
            '"You\'re right — let me publish it now with a note saying it\'s unconfirmed."',
            '"I\'ll publish it immediately — if it\'s wrong, we can delete it later."',
          ],
          correctIndex: 0,
          explanation: 'Professional journalism prioritises accuracy over speed. One source is not enough — getting beaten to a story is better than publishing a retraction.',
        },
        {
          customerLine: 'A fan on Twitter says: "Fabrizio Romano just tweeted Here We Go — it\'s official!"',
          options: [
            '"Romano\'s confirmation is credible — that\'s a reliable source. But we\'ll wait for the official club announcement before we report it as fully confirmed."',
            '"Social media is not journalism — we can\'t use that as a source at all."',
            '"Twitter moves faster than official channels — let\'s publish immediately and credit him."',
          ],
          correctIndex: 0,
          explanation: 'Good journalism acknowledges credible signals while waiting for official confirmation — neither dismissing credible sources nor treating them as full confirmation.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the journalism error in this breaking news broadcast.',
      dialogue: [
        { speaker: 'Presenter', speakerColor: 'purple', text: 'Breaking news — the club has signed the striker for a fee confirmed to be £80 million.' },
        { speaker: 'Presenter', speakerColor: 'purple', text: 'We have this from a source on Twitter who says they have inside information.' },
        { speaker: 'Presenter', speakerColor: 'purple', text: 'The player has already completed his medical and signed the contract, according to the same source.' },
        { speaker: 'Presenter', speakerColor: 'purple', text: 'We can confirm this is a done deal. The club will make an official announcement tomorrow.' },
        { speaker: 'Presenter', speakerColor: 'purple', text: 'This is a huge piece of breaking news for the club and their supporters.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'We have this from a source on Twitter who says they have inside information.',
          correction: 'A single anonymous Twitter account claiming "inside information" is not a credible source. This story has not been corroborated by any named journalist or verified outlet and should not be reported as confirmed. We are monitoring and will update when credible sources report it.',
          explanation: 'Anonymous social media accounts are not credible journalistic sources. A story from a single unverified Twitter account cannot be reported as confirmed — and using it means the journalist risks publishing a retraction. You need named or verified sources, ideally at least two independent ones.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the journalist\'s statement about a developing story.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'We have credible information about the transfer, but we\'re holding back because...',
          suggestedCompletion: 'we only have one source at this point, and we need to corroborate it before we can publish. Being beaten to the story is better than publishing a retraction.',
        },
        {
          customerLine: '',
          salespersonStart: 'The club is playing down the rumours about a takeover — but I\'d treat that carefully because...',
          suggestedCompletion: 'a non-denial is not the same as a denial. Clubs routinely play down information they don\'t want public until a deal is signed. Our sources are telling a very different story to the official line.',
        },
        {
          customerLine: '',
          salespersonStart: 'When reporting transfer stories, you have to be very clear about what is confirmed and what is speculation — because...',
          suggestedCompletion: 'your audience trusts you to tell them the difference. "Reported" means credible but unverified. "Confirmed" means official. If you blur that line, you lose the audience\'s trust — and that\'s the only thing a journalist really has.',
        },
      ],
    },
  },
};
