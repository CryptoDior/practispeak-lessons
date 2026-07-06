import { Lesson } from '@/types/lesson';

export const c1TheFootballDocumentary: Lesson = {
  slug: 'c1-the-football-documentary',
  title: 'The Football Documentary',
  subtitle: 'Unit 3 — Broadcast & Journalism',
  level: 'C1-C2',
  description: 'Football documentaries have become one of the most powerful storytelling formats in the sport — from dressing room access to tactical deep-dives. Learn to discuss, analyse, and describe documentary filmmaking in English.',
  heroImage: '/images/football-documentary.png',

  warmUp: {
    questions: [
      'Have you watched a football documentary that changed how you thought about a player or club? Which one?',
      'What can a documentary show that a live broadcast cannot? What are the trade-offs?',
      'Do you trust what you see in football documentaries? Why or why not?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Passive voice — describing what is shown, captured, or revealed',
    description: 'Documentaries are discussed with a lot of passive voice because the focus is on what is shown — not on who is doing the showing. "The manager is shown arguing with the board." "The conversation was captured on a hidden microphone." "Tensions are revealed in a scene filmed after the defeat." This construction puts the subject (the manager, the conversation, tensions) first and backgrounds the filmmaker. It also sounds more objective and analytical. In film criticism, passive voice signals that you are describing the film\'s content, not the filmmaker\'s intentions.',
    positiveExamples: [
      { sentence: 'The players are shown arguing in the tunnel after the match.', note: 'passive — focus on what the viewer sees, not on who filmed it' },
      { sentence: 'The manager\'s phone call was recorded without his knowledge.', note: 'passive — emphasises the event, not the filmmaker\'s action' },
      { sentence: 'A different side of the club is revealed in the behind-the-scenes footage.', note: 'passive + "behind-the-scenes" — signals documentary-style content' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'FLY-ON-THE-WALL',
      partOfSpeech: 'adjective',
      definition: 'A style of filming where cameras follow people in real situations without scripting or staging — as if the camera is invisible, like a fly on the wall.',
      example: '"The fly-on-the-wall footage from the training ground was more revealing than any interview."',
      imageSlug: '/images/fly-on-the-wall.png',
    },
    {
      word: 'ACCESS',
      partOfSpeech: 'noun',
      definition: 'The permission granted to a filmmaker to film behind closed doors — inside dressing rooms, training sessions, board meetings.',
      example: '"The club gave the filmmakers unprecedented access — cameras were allowed everywhere except the medical room."',
      imageSlug: '/images/access-documentary.png',
    },
    {
      word: 'NARRATION',
      partOfSpeech: 'noun',
      definition: 'The spoken commentary that guides the viewer through a documentary — explaining context, connecting scenes, providing information.',
      example: '"The narration was deliberately sparse — the filmmakers let the footage speak for itself."',
      imageSlug: '/images/narration.png',
    },
    {
      word: 'CANDID',
      partOfSpeech: 'adjective',
      definition: 'Honest and unguarded — saying or showing something real that was not planned or rehearsed.',
      example: '"The most candid moment in the documentary was the goalkeeper crying alone in the dressing room after the shootout."',
      imageSlug: '/images/c1-the-football-documentary-candid.png',
    },
    {
      word: 'EDITORIAL CONTROL',
      partOfSpeech: 'noun',
      definition: 'The power to decide what is included and excluded from a documentary — who controls the final version and what story it tells.',
      example: '"The club retained full editorial control — which explains why nothing negative about the manager appears in the film."',
      imageSlug: '/images/editorial-control.png',
    },
    {
      word: 'TALKING HEAD',
      partOfSpeech: 'noun',
      definition: 'A filmed interview where a person speaks directly to camera — the most basic documentary format. Named because all you see is a person\'s head and shoulders.',
      example: '"The documentary mixed talking head interviews with archive footage to build a portrait of the club\'s history."',
      imageSlug: '/images/talking-head.png',
    },
    {
      word: 'ARCHIVE FOOTAGE',
      partOfSpeech: 'noun',
      definition: 'Old recorded material from the past — historical clips, old matches, or previous interviews used to provide context.',
      example: '"Archive footage from the 1970s showed how different the stadium and the game itself used to look."',
      imageSlug: '/images/archive-footage.png',
    },
    {
      word: 'BIAS',
      partOfSpeech: 'noun',
      definition: 'A tendency to present information in a way that favours one side — when a documentary is not fully objective.',
      example: '"The documentary was clearly biased toward the club — uncomfortable questions were never raised and critics were never interviewed."',
      imageSlug: '/images/bias.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PULL BACK THE CURTAIN',
      definition: 'To reveal what was previously hidden — to show the reality behind the public image of a club, player, or manager.',
      example: '"The documentary pulls back the curtain on what really happens between the manager and the board."',
      imageSlug: '/images/pull-back-curtain.png',
    },
    {
      phrase: 'LEAVE OUT',
      definition: 'To exclude something deliberately from a documentary — to not include footage or information that was available.',
      example: '"The production team left out all footage from the board meeting — and that decision says something in itself."',
      imageSlug: '/images/leave-out.png',
    },
    {
      phrase: 'COME ACROSS AS',
      definition: 'To appear or seem a certain way to the viewer — the impression someone makes through their filmed behaviour.',
      example: '"The manager comes across as deeply passionate in the documentary — the camera caught moments you cannot fake."',
      imageSlug: '/images/come-across-documentary.png',
    },
    {
      phrase: 'GLOSS OVER',
      definition: 'To treat something sensitive or difficult too quickly and lightly — to avoid examining something properly.',
      example: '"The documentary glosses over the financial mismanagement — one sentence mentions it and then moves on."',
      imageSlug: '/images/gloss-over.png',
    },
    {
      phrase: 'BUILD UP TO',
      definition: 'To create tension or anticipation leading towards a climactic moment — to structure a documentary so everything points to a key event.',
      example: '"The whole first episode builds up to the Champions League draw — every scene adds to the tension."',
      imageSlug: '/images/build-up-to.png',
    },
    {
      phrase: 'OPEN UP',
      definition: 'To become more willing to share personal feelings or information in front of a camera — to speak honestly after initial reserve.',
      example: '"By episode three, the players had forgotten about the cameras and were beginning to open up about the pressures they were under."',
      imageSlug: '/images/c1-the-football-documentary-open-up.png',
    },
  ],

  onThePitch: {
    instructions: 'Key vocabulary and phrases for discussing and critiquing football documentaries.',
    items: [
      {
        cue: 'Describing the access',
        meaning: 'The level of access a club gives to a documentary crew defines what story can be told. Access controls reality — the more restrictions, the more curated the image.',
        usage: '"The access here is unprecedented — cameras in the dressing room at half-time, in the manager\'s office, on the training pitch. You genuinely feel you\'re inside the club." Alternatively: "The access is heavily restricted — every scene feels staged and approved. This isn\'t journalism, it\'s public relations."',
        imageSlug: 'otp-access',
      },
      {
        cue: 'Identifying bias',
        meaning: 'A documentary funded by the club it documents will rarely be objective. Critical viewers ask: who commissioned this? Who had editorial control? What is not shown?',
        usage: '"This is where the bias becomes obvious — the club retained editorial control, and as a result, we never see anything that reflects badly on the ownership. The uncomfortable questions are simply not asked." Look for: what is missing, who is not interviewed, which moments are not filmed.',
        imageSlug: 'otp-bias',
      },
      {
        cue: 'Discussing a candid moment',
        meaning: 'The best documentary moments are unguarded — when someone forgets the camera is there and reveals something real. These moments cannot be scripted.',
        usage: '"This is the most candid moment in the whole series — the captain is arguing with the manager, and neither of them seems to remember the camera is rolling. It reveals a tension that the club clearly didn\'t want shown." Candid moments are what make documentaries worth watching.',
        imageSlug: 'otp-candid',
      },
      {
        cue: 'Analysing the narration',
        meaning: 'Some documentaries use heavy narration to guide viewers; others let footage speak for itself. The choice of narration style affects how the story is interpreted.',
        usage: '"The narration is intrusive here — it tells you what to think instead of letting you form your own impression. I prefer documentaries where the footage is strong enough to carry the story without commentary." Versus: "The sparse narration gives this documentary authority — it respects the viewer\'s intelligence."',
        imageSlug: 'otp-narration',
      },
      {
        cue: 'Discussing what was left out',
        meaning: 'In documentary criticism, absence is as important as presence. What was not filmed? What is never mentioned? What is glossed over?',
        usage: '"What\'s interesting is what\'s left out — there is not a single scene involving the club\'s financial situation, which was the dominant story of that season. The decision to exclude this is itself a choice, and a revealing one." Talking about gaps in a documentary shows sophisticated analytical thinking.',
        imageSlug: 'otp-left-out',
      },
      {
        cue: 'The question of authenticity',
        meaning: 'Are subjects in documentaries behaving naturally, or performing for the camera? The longer the filming, the more subjects forget the camera is there — and the more authentic the footage becomes.',
        usage: '"By episode four, you can tell the players have stopped performing for the camera — the footage feels genuinely authentic. Early episodes are more self-conscious. The interesting question is: does anyone ever fully forget the camera is there?" This nuance is essential for documentary criticism.',
        imageSlug: 'otp-authenticity',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'purple', text: 'So — did you watch the new series? What did you make of it?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'Genuinely impressive access. They were in the dressing room at half-time of the cup final. You couldn\'t fake that.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'But isn\'t that the problem? The club commissioned it. Who had editorial control?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'The club, obviously. And it shows — they gloss over the ownership situation completely. One sentence and it\'s gone.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'That absence is the most revealing thing in the whole documentary for me. What\'s left out matters as much as what\'s included.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'Agreed. But the candid moment in episode three — the goalkeeper crying alone? That can\'t have been planned. You can\'t script that.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'True. And by that point, the players had clearly opened up — they\'d forgotten the cameras were rolling.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'That\'s what makes it watchable. Despite the bias, there are moments that pull back the curtain on something real.' },
  ],

  matchingExercise: [
    { word: 'Fly-on-the-wall', definition: 'A filming style where cameras follow people without staging or scripting — as if invisible' },
    { word: 'Access', definition: 'Permission granted to a filmmaker to film behind the scenes of a club or institution' },
    { word: 'Narration', definition: 'Spoken commentary that guides the viewer through a documentary' },
    { word: 'Candid', definition: 'Honest and unguarded — showing something real that was not planned or rehearsed' },
    { word: 'Editorial control', definition: 'The power to decide what is included or excluded from the final documentary' },
    { word: 'Talking head', definition: 'A filmed interview where a person speaks directly to camera' },
    { word: 'Archive footage', definition: 'Old recorded material from the past used to provide historical context' },
    { word: 'Bias', definition: 'A tendency to present information that favours one side over another' },
  ],

  fillBlankExercise: [
    { before: 'The club gave the filmmakers unprecedented', answer: 'access', after: '— cameras were allowed everywhere.' },
    { before: 'The documentary', answer: 'pulls back the curtain', after: 'on what really happens between the manager and the board.' },
    { before: 'The documentary', answer: 'glosses over', after: 'the financial issues — one sentence and then it moves on.' },
    { before: 'By episode three, the players had started to', answer: 'open up', after: 'about the pressures they were under.' },
    { before: 'The club retained full', answer: 'editorial control', after: '— which explains why nothing negative appears in the film.' },
    { before: 'The most', answer: 'candid', after: 'moment was the goalkeeper crying alone after the shootout.' },
    { before: 'The production team', answer: 'left out', after: 'all footage from the board meeting — deliberately.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "editorial control" mean in a football documentary context?',
      options: ['The club\'s power to decide what is included and excluded from the final film', 'The filmmaker\'s artistic decisions about camera angles and editing style', 'The broadcaster\'s right to decide when the documentary is shown'],
      correctIndex: 0,
    },
    {
      question: 'Why is "what is left out" important in documentary criticism?',
      options: ['Absences reveal deliberate choices — what a club didn\'t want shown is as revealing as what they allowed', 'Long documentaries cut material for time, so absences are usually just editing decisions', 'Left-out material is usually not interesting enough to be worth discussing'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "By episode four, the players had clearly ___ up — the footage felt genuinely authentic."',
      options: ['opened', 'built', 'come'],
      correctIndex: 0,
    },
    {
      question: 'What is a "fly-on-the-wall" documentary?',
      options: ['One where cameras follow real situations without scripting — as if the camera is invisible', 'One where the filmmaker conducts formal interviews with players and staff', 'One that uses archive footage to tell the story of a past season or era'],
      correctIndex: 0,
    },
    {
      question: 'Why might players become more authentic later in a documentary series?',
      options: ['After weeks of filming, they forget the cameras are there and stop performing for them', 'They are paid more money in later episodes and feel more relaxed as a result', 'The director switches to hidden cameras in later episodes without telling the players'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about football documentaries.',
    items: [
      {
        sentence: 'The documentary ___ back the curtain on what really happens in those board meetings.',
        options: ['pulls', 'comes', 'leaves'],
        correctIndex: 0,
        explanation: '"Pull back the curtain" means to reveal what was previously hidden — to show the reality behind the public image.',
      },
      {
        sentence: 'The filmmakers ___ over the financial crisis — one sentence mentions it and then moves on.',
        options: ['gloss', 'leave', 'come'],
        correctIndex: 0,
        explanation: '"Gloss over" means to treat something sensitive too quickly and lightly — avoiding proper examination.',
      },
      {
        sentence: 'The manager ___ across as deeply passionate — the camera caught moments you cannot fake.',
        options: ['comes', 'opens', 'builds'],
        correctIndex: 0,
        explanation: '"Come across as" means to appear or seem a certain way to viewers — the impression someone makes.',
      },
      {
        sentence: 'The whole first episode ___ up to the Champions League draw — every scene adds tension.',
        options: ['builds', 'opens', 'pulls'],
        correctIndex: 0,
        explanation: '"Build up to" means to create tension or anticipation leading towards a key moment in the documentary.',
      },
      {
        sentence: 'The ___ was deliberately sparse — the filmmakers let the footage speak for itself.',
        options: ['narration', 'access', 'bias'],
        correctIndex: 0,
        explanation: 'Narration is the spoken commentary that guides viewers — choosing to limit it signals confidence in the footage.',
      },
      {
        sentence: 'The club\'s decision to retain editorial ___ meant nothing negative about the ownership was ever shown.',
        options: ['control', 'access', 'footage'],
        correctIndex: 0,
        explanation: 'Editorial control is the power to decide what goes into the final film — the most important factor in documentary bias.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are discussing a football documentary with a colleague. Choose the most analytically effective response.',
      items: [
        {
          customerLine: '"This documentary is brilliant — it shows everything that happens inside the club."',
          options: [
            '"It\'s impressive access — but remember the club had editorial control. What\'s left out is as revealing as what\'s included. Did you notice the financial situation was never mentioned?"',
            '"Yes, I completely agree — it\'s the most honest documentary I\'ve ever seen."',
            '"Documentaries are always biased and you should never trust anything in them."',
          ],
          correctIndex: 0,
          explanation: 'Good documentary criticism acknowledges the strengths but identifies the structural bias — who commissioned it, who controlled the edit, and what is absent.',
        },
        {
          customerLine: '"The moment where the manager shouts at the players — do you think that was staged?"',
          options: [
            '"It\'s hard to be certain — but it felt authentic. By episode four, the players had clearly opened up and stopped performing. Those unguarded moments are very difficult to fake."',
            '"Yes, definitely staged — clubs always control what is shown in their documentaries."',
            '"No, it was definitely real — you can tell by the manager\'s face."',
          ],
          correctIndex: 0,
          explanation: 'Nuanced analysis considers authenticity without certainty — acknowledging what suggests reality without making absolute claims.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the analytical mistake in this documentary review.',
      dialogue: [
        { speaker: 'Reviewer', speakerColor: 'orange', text: 'This documentary is completely objective and unbiased — it shows everything exactly as it happened.' },
        { speaker: 'Reviewer', speakerColor: 'orange', text: 'The club gave the filmmakers full access and had no involvement in the final edit.' },
        { speaker: 'Reviewer', speakerColor: 'orange', text: 'The manager comes across as a kind, reasonable person who never loses his temper.' },
        { speaker: 'Reviewer', speakerColor: 'orange', text: 'The fact that the financial crisis is not mentioned is because it simply wasn\'t relevant to the story.' },
        { speaker: 'Reviewer', speakerColor: 'orange', text: 'I recommend this to any football fan who wants to understand what really happens inside a top club.' },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'The fact that the financial crisis is not mentioned is because it simply wasn\'t relevant to the story.',
          correction: 'The absence of any discussion of the financial crisis is itself revealing — it was the dominant news story of that season, and its omission strongly suggests editorial control was used to protect the club\'s image.',
          explanation: 'When something major is completely absent from a documentary, the reviewer should question why — not assume it was irrelevant. The decision to leave something out is always a choice, and in this case a very suspicious one. This is the difference between naive viewing and critical analysis.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the documentary analysis sentence in a critical, analytical way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The most revealing thing about this documentary is not what it shows — it\'s what it leaves out...',
          suggestedCompletion: 'specifically, the entire question of who owns the club and how they have managed its finances. That absence, in a documentary commissioned by the ownership, is not an accident.',
        },
        {
          customerLine: '',
          salespersonStart: 'The fly-on-the-wall format works brilliantly here because...',
          suggestedCompletion: 'by episode three, you genuinely feel the players have forgotten the cameras are rolling. The half-time scenes feel unscripted in a way that formal interviews never could.',
        },
        {
          customerLine: '',
          salespersonStart: 'The critical question any viewer should ask before watching this documentary is...',
          suggestedCompletion: 'who commissioned it and who had editorial control. Because the answer to those two questions determines everything about what you will and won\'t see.',
        },
      ],
    },
  },
};
