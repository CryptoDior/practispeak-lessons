import { Lesson } from '@/types/lesson';

export const c1PressConferenceEnglish: Lesson = {
  slug: 'c1-press-conference-english',
  title: 'Press Conference English',
  subtitle: 'Unit 2 — Coaching & Leadership English',
  level: 'C1-C2',
  description: 'A press conference is one of the most visible moments in football management. The language of press conferences — diplomatic, careful, and often strategic — is a skill in itself. Learn to handle difficult questions, deflect, and communicate effectively in front of the media.',
  heroImage: '/images/press-conference.png',

  warmUp: {
    questions: [
      'Have you ever watched a football manager\'s press conference? What do you notice about how they speak?',
      'Why might a manager say very little even when journalists ask direct questions?',
      'What is the difference between being honest and being diplomatic in a press conference?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Indirect speech and softening language',
    description: 'Press conferences require diplomatic language — saying things in a way that is careful, indirect, and avoids confrontation. Two key tools: (1) Indirect questions: instead of "Did you make a mistake?" → "I\'m wondering whether the decision could have been made differently." (2) Softening language: instead of "The referee was wrong" → "I thought the decision was unfortunate." Instead of "The player played badly" → "He wasn\'t at his best tonight." Learning to soften and deflect is essential for media communication.',
    positiveExamples: [
      { sentence: 'I thought the decision in the second half was unfortunate, but I don\'t want to focus on that.', note: 'softening "wrong" to "unfortunate" + deflecting with "but I don\'t want to focus on"' },
      { sentence: 'We\'re taking each game as it comes and I\'d rather not speculate about what might happen in the future.', note: 'classic deflection — acknowledging the question but refusing to answer it directly' },
      { sentence: 'I\'m proud of how the players responded, though of course there are always things we can improve.', note: 'positive framing first, balanced caveat second — the standard press conference structure' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'DEFLECT',
      partOfSpeech: 'verb',
      definition: 'To avoid answering a question directly — to redirect attention away from a sensitive topic.',
      example: '"He deflected every question about the transfer rumours and kept bringing the conversation back to Saturday\'s match."',
      imageSlug: '/images/c1-press-conference-english-deflect.png',
    },
    {
      word: 'DIPLOMATIC',
      partOfSpeech: 'adjective',
      definition: 'Careful and tactful in what you say — choosing words that avoid offence or conflict, especially in a public setting.',
      example: '"She was very diplomatic when asked about the referee — she said the decision was \'unfortunate\' rather than \'wrong\'."',
      imageSlug: '/images/c1-press-conference-english-diplomatic.png',
    },
    {
      word: 'SPECULATION',
      partOfSpeech: 'noun',
      definition: 'Guessing or making predictions about something uncertain — often about transfers, sackings, or future results.',
      example: '"I won\'t comment on speculation about players who are at other clubs. That\'s not fair to anyone."',
      imageSlug: '/images/c1-press-conference-english-speculation.png',
    },
    {
      word: 'NARRATIVE',
      partOfSpeech: 'noun',
      definition: 'The story or version of events being told — the way something is framed or presented publicly.',
      example: '"The media narrative after the loss focused on the manager, but the real story was the injuries."',
      imageSlug: '/images/c1-press-conference-english-narrative.png',
    },
    {
      word: 'CREDIT',
      partOfSpeech: 'noun / verb',
      definition: 'Recognition for something good — giving credit means acknowledging who deserves the recognition. Managers often give credit to players and staff.',
      example: '"I have to give credit to the players — they worked incredibly hard this week in training."',
      imageSlug: '/images/c1-press-conference-english-credit.png',
    },
    {
      word: 'DISTRACTION',
      partOfSpeech: 'noun',
      definition: 'Something that takes attention away from the important task — often transfer rumours or media stories that a manager must manage.',
      example: '"I won\'t let this become a distraction — the players need to focus on Saturday\'s match."',
      imageSlug: '/images/distraction.png',
    },
    {
      word: 'TRANSPARENT',
      partOfSpeech: 'adjective',
      definition: 'Open and honest — not hiding anything. Being transparent means the public can see clearly what is happening.',
      example: '"I want to be as transparent as I can with you — we had a difficult week and it showed in the first half."',
      imageSlug: '/images/transparent.png',
    },
    {
      word: 'FRAME',
      partOfSpeech: 'verb',
      definition: 'To present something in a particular way — to choose language that shapes how people understand a situation.',
      example: '"He framed the loss as a learning experience rather than a failure."',
      imageSlug: '/images/frame-media.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'MOVE ON',
      definition: 'To go forward and not dwell on the past — to stop thinking about something that has already happened.',
      example: '"We\'ve analysed the defeat, we\'ve learned from it, and now we move on. Saturday is the focus."',
      imageSlug: '/images/c1-press-conference-english-move-on.png',
    },
    {
      phrase: 'PLAY DOWN',
      definition: 'To make something seem less important or serious than it might appear — to reduce the significance of something publicly.',
      example: '"He played down the injury, saying it was minor and the player would be available for the weekend."',
      imageSlug: '/images/c1-press-conference-english-play-down.png',
    },
    {
      phrase: 'DRAW ATTENTION TO',
      definition: 'To highlight or point to something — often used when a manager wants to redirect the conversation to a positive.',
      example: '"I\'d like to draw attention to the performance of our young players tonight — they were outstanding."',
      imageSlug: '/images/draw-attention.png',
    },
    {
      phrase: 'RULE OUT',
      definition: 'To say that something will definitely not happen — to eliminate a possibility.',
      example: '"I won\'t rule anything out at this stage, but our focus is entirely on the next three matches."',
      imageSlug: '/images/c1-press-conference-english-rule-out.png',
    },
    {
      phrase: 'TALK UP',
      definition: 'To speak positively about something or someone — to promote or build up.',
      example: '"I don\'t want to talk up the opposition too much but they\'re a very well-organised team."',
      imageSlug: '/images/c1-press-conference-english-talk-up.png',
    },
    {
      phrase: 'STAND BY',
      definition: 'To continue to support or defend something or someone — to not change your position under pressure.',
      example: '"I stand by the decision to play him from the start — he\'s been our best player in training."',
      imageSlug: '/images/c1-press-conference-english-stand-by.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key press conference scenarios coaches face — learn the language for each.',
    items: [
      {
        cue: 'Handling a question about a controversial refereeing decision',
        meaning: 'Criticising referees publicly can lead to fines and bans. Managers must express frustration without crossing the line — using softening language to make the point without direct accusation.',
        usage: '"I thought the decision was unfortunate, and I\'m sure the referee will look back at it. But I don\'t want to focus on that — we had chances to win this game regardless, and we didn\'t take them." Express the feeling, don\'t attack the person.',
        imageSlug: 'otp-referee-question',
      },
      {
        cue: 'Deflecting a transfer question',
        meaning: 'Transfer questions are almost always asked before the window and rarely get a direct answer. Managers use deflection to avoid fuelling speculation or upsetting the player involved.',
        usage: '"I won\'t comment on players at other clubs — that\'s not respectful to them or their managers. My focus is entirely on the squad I have here, and right now that squad is preparing for Saturday." Classic deflection: decline + redirect.',
        imageSlug: 'otp-transfer-deflect',
      },
      {
        cue: 'Giving credit after a win',
        meaning: 'After a good result, managers traditionally give credit to players and staff — this is expected and genuine. Good managers are specific about what went well.',
        usage: '"I have to give credit to the players tonight — the work rate was exceptional. And I want to mention the backroom staff who prepared us brilliantly this week. That wasn\'t just me — that was a team effort from everyone at this club." Specific and generous.',
        imageSlug: 'otp-give-credit',
      },
      {
        cue: 'Framing a defeat positively',
        meaning: 'After a loss, managers try to frame the performance positively where possible — finding learning points, praising effort, and looking forward. This protects player confidence and maintains trust.',
        usage: '"We\'re disappointed with the result. But I\'m proud of how the team fought, particularly in the second half. We created enough chances to win. The performance gives me confidence for the next game — the result doesn\'t." Performance vs result framing.',
        imageSlug: 'otp-frame-defeat',
      },
      {
        cue: 'Refusing to confirm team news',
        meaning: 'Managers rarely confirm their team selection before a match — this protects tactical information from the opposition. Standard language is used to evade these questions diplomatically.',
        usage: '"I won\'t be giving the opposition any information about our team selection or tactics today — I\'m sure you understand why." Or: "We\'ll make some decisions in the next 24 hours. There are one or two fitness questions to resolve."',
        imageSlug: 'otp-team-news',
      },
      {
        cue: 'Defending a player who had a poor game',
        meaning: 'When a player is criticised in the press, managers are often asked to respond. The answer usually defends the player while acknowledging they can do better.',
        usage: '"He wasn\'t at his best tonight — he\'d be the first to say that. But I stand by the decision to play him. His contribution to this team all season has been exceptional. One difficult game doesn\'t change that." Honest acknowledgement + strong defence of the player.',
        imageSlug: 'otp-defend-player',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'green', text: 'The red card in the 65th minute — do you think it changed the game?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'I thought the decision was unfortunate. But I don\'t want to make that the story. The fact is we had chances before the red card — and we needed to take them.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'There are reports linking you with a new striker in January. Can you confirm any transfer activity?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'I won\'t comment on speculation. My focus is entirely on the players I have here and the next three matches before the window opens.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'Is the striker\'s poor form a concern — three games without a goal?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'He wasn\'t at his best tonight — he\'d be the first to say that. But I stand by him. His work rate, his pressing, his contribution off the ball is outstanding. The goals will come.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'Two defeats in a row — how are the players feeling?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Disappointed, like all of us. But I want to draw attention to the performance tonight — we created 2.1 xG. The chances are there. We move on and we go again on Saturday.' },
  ],

  matchingExercise: [
    { word: 'Deflect', definition: 'To avoid answering a question directly by redirecting the conversation' },
    { word: 'Diplomatic', definition: 'Careful and tactful — choosing words that avoid conflict or offence' },
    { word: 'Speculation', definition: 'Guessing or making predictions about something uncertain, like transfers or firings' },
    { word: 'Narrative', definition: 'The version of events being presented — how a story is framed publicly' },
    { word: 'Credit', definition: 'Recognition given to someone for something positive they have done' },
    { word: 'Distraction', definition: 'Something that takes focus away from the main task — like transfer rumours during a key run of games' },
    { word: 'Transparent', definition: 'Open and honest — not hiding anything from the public or the press' },
    { word: 'Frame', definition: 'To present something in a particular way that shapes how people understand it' },
  ],

  fillBlankExercise: [
    { before: 'I\'ll', answer: 'stand by', after: 'the decision to start him — he\'s been our best player in training.' },
    { before: 'He', answer: 'played down', after: 'the injury, saying it was minor and the player would be available soon.' },
    { before: 'I won\'t', answer: 'rule out', after: 'anything at this stage — but Saturday is the only focus.' },
    { before: 'I\'d like to', answer: 'draw attention to', after: 'the performance of our younger players tonight — they were excellent.' },
    { before: 'We\'ve analysed the defeat, we\'ve learned from it, and now we', answer: 'move on', after: '.' },
    { before: 'I won\'t comment on', answer: 'speculation', after: 'about players at other clubs — that\'s not fair to anyone.' },
    { before: 'He', answer: 'framed', after: 'the defeat as a learning experience and kept his tone positive throughout.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A journalist asks about a transfer rumour. What is the most professional response?',
      options: [
        '"I won\'t comment on speculation about players at other clubs. My focus is entirely on the squad I have here."',
        '"Yes, we\'re very interested in that player and hope to sign him in January."',
        '"I have no idea about transfers — that\'s the CEO\'s department, not mine."',
      ],
      correctIndex: 0,
    },
    {
      question: 'How does a manager "soften" a criticism of the referee without getting fined?',
      options: [
        'By using words like "unfortunate" instead of "wrong" and redirecting focus to their own team',
        'By refusing to answer the question and walking out of the press conference',
        'By naming the specific rule the referee broke and showing the evidence publicly',
      ],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "I\'d like to ___ attention to the performance of our young players tonight."',
      options: ['draw', 'play', 'move'],
      correctIndex: 0,
    },
    {
      question: 'What does "deflect" mean in a press conference context?',
      options: ['To avoid answering a question directly by changing the subject or redirecting the conversation', 'To give a very long answer to confuse the journalist', 'To ask the journalist to repeat their question before answering'],
      correctIndex: 0,
    },
    {
      question: 'A manager says: "He wasn\'t at his best tonight — but I stand by the decision." What is this an example of?',
      options: ['Honest acknowledgement of a poor performance followed by a defence of the decision', 'A criticism of the player that could damage their confidence', 'A lie told to protect the manager\'s own reputation'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the most diplomatic and professional press conference language to complete each sentence.',
    items: [
      {
        sentence: 'I thought the refereeing decision was ___. But I don\'t want to make that the story tonight.',
        options: ['unfortunate', 'wrong', 'terrible'],
        correctIndex: 0,
        explanation: '"Unfortunate" is diplomatic softening language. "Wrong" and "terrible" are too direct and could lead to disciplinary action.',
      },
      {
        sentence: 'We\'ve analysed the defeat, learned from it, and now we ___.',
        options: ['move on', 'play down', 'deflect'],
        correctIndex: 0,
        explanation: '"Move on" is the standard press conference phrase for leaving a past result behind and focusing on the next game.',
      },
      {
        sentence: 'I won\'t comment on ___ about players at other clubs.',
        options: ['speculation', 'narrative', 'distraction'],
        correctIndex: 0,
        explanation: '"I won\'t comment on speculation" is the standard phrase for deflecting transfer questions.',
      },
      {
        sentence: 'I\'d like to ___ the backroom staff who prepared us brilliantly this week.',
        options: ['give credit to', 'draw attention to', 'stand by'],
        correctIndex: 0,
        explanation: '"Give credit to" means to acknowledge and recognise someone\'s contribution.',
      },
      {
        sentence: 'He ___ the injury question, saying only that the player was \'being assessed\'.',
        options: ['deflected', 'framed', 'played down'],
        correctIndex: 0,
        explanation: '"Deflected" means he avoided answering directly by using vague language.',
      },
      {
        sentence: 'I stand ___ the decision to play him — his contribution this season has been outstanding.',
        options: ['by', 'for', 'with'],
        correctIndex: 0,
        explanation: '"Stand by" means to continue to support or defend something under pressure.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'A journalist asks a difficult question. Choose the most effective press conference response.',
      items: [
        {
          customerLine: '"Your team has won only one of the last six games. Is your job under threat?"',
          options: [
            '"My focus right now is entirely on the players and on Saturday\'s match. Results haven\'t been good enough — I\'m the first to say that. But this group has quality and I believe in them. We go again on Saturday."',
            '"That\'s completely unfair. The board supports me and I have no intention of leaving."',
            '"Yes, I\'m worried about my job. The results have been very bad."',
          ],
          correctIndex: 0,
          explanation: 'The best answer acknowledges the problem honestly, deflects the personal question, and refocuses on the team.',
        },
        {
          customerLine: '"A journalist reported that you had a major argument with your star player this week. Is that true?"',
          options: [
            '"I won\'t comment on what happens in the dressing room — that\'s private. What I will say is that the communication between me and the players is always honest and always in the best interests of the team."',
            '"Whoever said that is lying. There was no argument."',
            '"Yes, we had a difficult conversation but it\'s been resolved. I won\'t say anything more."',
          ],
          correctIndex: 0,
          explanation: 'The best answer maintains confidentiality, doesn\'t confirm or deny, and frames the relationship positively.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this press conference transcript.',
      dialogue: [
        { speaker: 'Journalist', speakerColor: 'green', text: 'The referee\'s decision in the 70th minute — was it wrong?' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'I thought it was unfortunate and I will comment more on it once I\'ve seen it again on video.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'But what I\'d draw attention to is that we had three very good chances before that moment and we didn\'t take them.' },
        { speaker: 'Journalist', speakerColor: 'green', text: 'Will you be making signings in January?' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'I won\'t comment on speculation. My focus is on the squad I have and the next three matches before the window opens.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'I thought it was unfortunate and I will comment more on it',
          correction: 'I thought it was unfortunate and I won\'t comment further on it',
          explanation: 'A manager saying they WILL comment more on the referee\'s decision after watching video would create a media story and risk disciplinary action. The correct diplomatic phrase is to say they WON\'T comment further — softening the criticism and deflecting at the same time.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the press conference response in a professional, diplomatic way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'I won\'t comment on speculation about the sacking rumours — what I will say is...',
          suggestedCompletion: 'that my focus is entirely on Saturday\'s match and on preparing this group of players to perform at their best.',
        },
        {
          customerLine: '',
          salespersonStart: 'He wasn\'t at his best tonight — but I stand by him because...',
          suggestedCompletion: 'his contribution to this team all season has been exceptional and one difficult game doesn\'t define a player of his quality.',
        },
        {
          customerLine: '',
          salespersonStart: 'We\'re disappointed with the result. But I\'m proud of how the team performed because...',
          suggestedCompletion: 'we created enough chances to win this game twice — the performance gives me confidence even if the result doesn\'t.',
        },
      ],
    },
  },
};
