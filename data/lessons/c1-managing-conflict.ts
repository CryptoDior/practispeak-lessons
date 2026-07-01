import { Lesson } from '@/types/lesson';

export const c1ManagingConflict: Lesson = {
  slug: 'c1-managing-conflict',
  title: 'Managing Conflict',
  subtitle: 'Unit 2 — Coaching & Leadership English',
  level: 'C1-C2',
  description: 'Conflict is part of football — between players, between player and coach, and between coach and board. Managing it professionally, clearly, and with respect is one of the most important leadership skills. Learn the language of conflict resolution in a football environment.',
  heroImage: '/images/managing-conflict.png',

  warmUp: {
    questions: [
      'Have you seen or experienced conflict in a team environment? How was it handled?',
      'What is the difference between a conflict and a disagreement? Is all conflict negative?',
      'If two players had a serious argument in training, what would you do as a coach?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Reporting verbs — describing what was said',
    description: 'When managing conflict, you often need to report what was said — to describe a conversation to someone else or to put a player\'s words on record. English has many reporting verbs that carry different meanings and tones: "He said..." (neutral), "She claimed..." (suggests doubt), "He insisted..." (strong position), "She acknowledged..." (admitted), "He denied..." (refused to accept), "She suggested..." (offered as an option). Choosing the right reporting verb changes how the information is understood — a vital skill in conflict management.',
    positiveExamples: [
      { sentence: 'He acknowledged that his reaction on the pitch was unacceptable.', note: '"acknowledged" = he admitted it — stronger than "said", implies responsibility' },
      { sentence: 'She insisted that the decision to drop her was unfair and unprofessional.', note: '"insisted" = she said it strongly and repeatedly — implies firm disagreement' },
      { sentence: 'He denied using inappropriate language in the dressing room.', note: '"denied" = he said it did not happen — factual refusal' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'MEDIATE',
      partOfSpeech: 'verb',
      definition: 'To help two people or groups resolve a disagreement by acting as a neutral middle person.',
      example: '"The captain stepped in to mediate between the two players before it escalated into a bigger problem."',
      imageSlug: '/images/mediate.png',
    },
    {
      word: 'ESCALATE',
      partOfSpeech: 'verb',
      definition: 'To become more serious or intense — when a small disagreement becomes a larger conflict.',
      example: '"A minor disagreement over a training drill escalated into a physical confrontation — that\'s never acceptable."',
      imageSlug: '/images/escalate.png',
    },
    {
      word: 'DE-ESCALATE',
      partOfSpeech: 'verb',
      definition: 'To calm a situation down — to reduce the intensity of a conflict before it gets worse.',
      example: '"The coach stepped in immediately to de-escalate — he separated the players and gave everyone a moment to breathe."',
      imageSlug: '/images/de-escalate.png',
    },
    {
      word: 'GRIEVANCE',
      partOfSpeech: 'noun',
      definition: 'A formal complaint — an official problem or concern that a player or staff member wants to have addressed.',
      example: '"He raised a formal grievance with the club about his contract situation — the board had to respond within 14 days."',
      imageSlug: '/images/grievance.png',
    },
    {
      word: 'RESOLUTION',
      partOfSpeech: 'noun',
      definition: 'A solution to a conflict — when a disagreement is settled and both sides can move forward.',
      example: '"The meeting ended with a clear resolution — the player agreed to the new role, the coach agreed to keep him informed."',
      imageSlug: '/images/resolution.png',
    },
    {
      word: 'TRANSPARENCY',
      partOfSpeech: 'noun',
      definition: 'Being open and honest about what is happening — keeping people informed so they don\'t feel left out or deceived.',
      example: '"The manager built trust through transparency — he always told players directly when they weren\'t in the starting eleven."',
      imageSlug: '/images/transparency.png',
    },
    {
      word: 'CONFRONTATIONAL',
      partOfSpeech: 'adjective',
      definition: 'Likely to cause or invite conflict — aggressive or provocative in tone or approach.',
      example: '"His confrontational body language during training sessions was creating tension with other players."',
      imageSlug: '/images/confrontational.png',
    },
    {
      word: 'NEUTRAL GROUND',
      partOfSpeech: 'noun',
      definition: 'A setting that doesn\'t favour either party in a conflict — where both sides can speak freely and equally.',
      example: '"They held the meeting on neutral ground — a room away from the training ground where neither player felt it was the other\'s territory."',
      imageSlug: '/images/neutral-ground.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CLEAR THE AIR',
      definition: 'To resolve a tense situation by talking openly — to have a direct conversation that removes tension and misunderstanding.',
      example: '"After the argument on the pitch, the two players sat down privately to clear the air before the next training session."',
      imageSlug: '/images/clear-the-air.png',
    },
    {
      phrase: 'SPEAK UP',
      definition: 'To say what you really think — to express your concern or complaint rather than keeping it inside.',
      example: '"I need players to speak up when something is wrong — I can\'t fix what I don\'t know about."',
      imageSlug: '/images/speak-up.png',
    },
    {
      phrase: 'BACK DOWN',
      definition: 'To stop arguing or pushing for your position — to give up or compromise in a conflict.',
      example: '"Neither player was willing to back down — the coach had to step in and make the final call."',
      imageSlug: '/images/back-down.png',
    },
    {
      phrase: 'IRON OUT',
      definition: 'To sort out or resolve small problems or disagreements — to fix issues that are causing friction.',
      example: '"We need to iron out the tensions in the dressing room before the big match next week."',
      imageSlug: '/images/iron-out-conflict.png',
    },
    {
      phrase: 'BRING TO THE TABLE',
      definition: 'To contribute something to a discussion or negotiation — what each side offers or proposes in a conflict resolution.',
      example: '"Both sides need to bring something to the table — I can\'t reach a solution if only one person is willing to compromise."',
      imageSlug: '/images/bring-to-the-table.png',
    },
    {
      phrase: 'DRAW A LINE',
      definition: 'To set a limit — to make it clear that a certain behaviour or situation will not be accepted.',
      example: '"I have to draw a line at public criticism of teammates — that cannot happen in this team."',
      imageSlug: '/images/draw-a-line.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key conflict scenarios in football — and the language to handle them professionally.',
    items: [
      {
        cue: 'Two players argue during training',
        meaning: 'Arguments in training are common — competitive players clash over errors, positioning, and intensity. The coach\'s job is to de-escalate quickly, separate the players, and address it after the session.',
        usage: '"Stop. Everyone take a breath. That\'s enough — let\'s continue. Jamie, Marcus — see me after. That\'s it, we\'re moving on." Quick, calm, no sides taken in front of the group. The detailed conversation happens privately. "What happened out there? I need to hear from both of you."',
        imageSlug: 'otp-training-argument',
      },
      {
        cue: 'A player is dropped from the squad and reacts badly',
        meaning: 'Being dropped is one of the most emotionally difficult moments for a player. Coaches must communicate selection decisions clearly and honestly — and be prepared for a negative reaction.',
        usage: '"I\'m telling you now before the team sheet goes up — you\'re not in the squad on Saturday. This isn\'t a question of your ability. It\'s a tactical decision. I need you to be professional, and I need you ready because that will change." Direct, honest, with a clear reason. Always end with a forward-looking message.',
        imageSlug: 'otp-player-dropped',
      },
      {
        cue: 'A player raises a grievance about their role',
        meaning: 'When a player formally raises a concern — about playing time, position, contract, or treatment — it must be taken seriously and addressed in a private, professional setting.',
        usage: '"I hear you — and I want to address this properly. Let\'s sit down, just the two of us, and go through everything. I want to be transparent with you about where you fit in my plans, and I want to hear what you feel is not working." Acknowledgement + private meeting + transparency.',
        imageSlug: 'otp-player-grievance',
      },
      {
        cue: 'Managing public conflict — one player criticises another to the press',
        meaning: 'When conflict goes public — a player makes a comment to the media that criticises a teammate or the coach — it must be dealt with quickly and firmly, but calmly.',
        usage: '"I\'ve seen what was said publicly. I\'m drawing a line at this right now — public criticism of teammates or staff is not acceptable in this club. We deal with our problems internally. I need to speak with [player] today, privately. This gets resolved before tomorrow\'s training."',
        imageSlug: 'otp-public-conflict',
      },
      {
        cue: 'Conflict between coach and board over strategy',
        meaning: 'Coaches sometimes disagree with the club\'s board on transfers, targets, or strategy. This conflict must be managed professionally — within the club, not in the press.',
        usage: '"I want to be transparent — I disagreed with this decision. But I\'ve made my view clear to the board privately, and now my job is to work with what we have. I won\'t be discussing internal strategy decisions in public." Never air disagreements with the board publicly.',
        imageSlug: 'otp-coach-board-conflict',
      },
      {
        cue: 'Clearing the air — successful resolution',
        meaning: 'When conflict is resolved properly, it often makes a team stronger. The language of resolution is forward-looking, specific, and respectful to both parties.',
        usage: '"I\'m glad we had this conversation. I hear what you\'re saying — and I want you to know your concerns are valid. Here\'s what I\'ll change on my side, and here\'s what I need from you. Let\'s shake hands and move forward. What happened stays in this room." Concrete commitments + forward direction + confidentiality.',
        imageSlug: 'otp-clear-air',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Coach', speakerColor: 'blue', text: 'Close the door. Sit down. I want to talk to you about what happened in training today.' },
    { speaker: 'Player', speakerColor: 'green', text: 'He makes mistakes and I say something. That\'s just competitive. He can\'t handle honest feedback.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'I understand you\'re competitive. But the way it came out — the tone, the body language — it was confrontational. That creates tension in the group.' },
    { speaker: 'Player', speakerColor: 'green', text: 'I\'m just being honest.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'There\'s a difference between honest and confrontational. I need you to speak up when something is wrong — but privately, to me, not in front of the whole squad.' },
    { speaker: 'Player', speakerColor: 'green', text: 'Okay. But I also feel like I\'m not getting enough game time and no one\'s explaining why.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'That\'s a fair point and I should have been clearer with you. Let me be transparent — here\'s exactly where you fit in my plans for the next six weeks.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Can we agree on this — you bring those frustrations to me, not to the training pitch? And I commit to keeping you informed. Deal?' },
  ],

  matchingExercise: [
    { word: 'Mediate', definition: 'To help two parties resolve a disagreement by acting as a neutral middle person' },
    { word: 'Escalate', definition: 'To become more serious — when a small problem grows into a bigger conflict' },
    { word: 'De-escalate', definition: 'To calm a situation down — to reduce the intensity before it gets worse' },
    { word: 'Grievance', definition: 'A formal complaint or concern raised by a player or staff member' },
    { word: 'Resolution', definition: 'A solution to a conflict — when both sides reach an agreement and can move forward' },
    { word: 'Transparency', definition: 'Being open and honest about what is happening — keeping people fully informed' },
    { word: 'Confrontational', definition: 'Likely to cause conflict — aggressive or provocative in tone or approach' },
    { word: 'Neutral ground', definition: 'A setting that doesn\'t favour either party — where both sides can speak freely' },
  ],

  fillBlankExercise: [
    { before: 'After the argument, the two players sat down privately to', answer: 'clear the air', after: 'before the next session.' },
    { before: 'I need players to', answer: 'speak up', after: 'when something is wrong — I can\'t fix what I don\'t know about.' },
    { before: 'Neither player was willing to', answer: 'back down', after: '— the coach had to step in.' },
    { before: 'I have to', answer: 'draw a line', after: 'at public criticism of teammates — that\'s not acceptable here.' },
    { before: 'We need to', answer: 'iron out', after: 'the tensions in the dressing room before the match.' },
    { before: 'The minor disagreement', answer: 'escalated', after: 'into a physical confrontation — it had to be addressed immediately.' },
    { before: 'He', answer: 'acknowledged', after: 'that his reaction on the pitch was unacceptable.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Two players are having a loud argument during training. What is the first thing a coach should do?',
      options: ['De-escalate — separate them calmly, let the group continue, and address it privately after the session', 'Immediately send both players off the training pitch to set an example', 'Let them continue — competitive conflict is healthy and normal'],
      correctIndex: 0,
    },
    {
      question: 'What does "clear the air" mean?',
      options: ['To have an open, direct conversation that removes tension and misunderstanding', 'To give a formal warning about unacceptable behaviour', 'To ask the captain to address the group about a problem'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "He ___ that his reaction on the pitch was unacceptable — that took courage."',
      options: ['acknowledged', 'insisted', 'denied'],
      correctIndex: 0,
    },
    {
      question: 'Why should a coach avoid discussing internal conflicts with the press?',
      options: ['It makes the problem public and harder to resolve — it damages trust within the club and invites outside pressure', 'Because the press will always support the player, not the coach', 'Because journalists are not qualified to help resolve football conflicts'],
      correctIndex: 0,
    },
    {
      question: 'What is a "grievance" in a professional football context?',
      options: ['A formal complaint raised by a player or staff member about their treatment or contract', 'An informal argument between two players during a training session', 'A disagreement between the coach and the match referee'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each conflict management sentence.',
    items: [
      {
        sentence: 'The coach stepped in immediately to ___ the situation — he separated the players and gave everyone a moment.',
        options: ['de-escalate', 'mediate', 'escalate'],
        correctIndex: 0,
        explanation: '"De-escalate" means to calm a situation down — the first priority in any physical or verbal confrontation.',
      },
      {
        sentence: 'I need to ___ a line at public criticism — that cannot happen in this team, ever.',
        options: ['draw', 'clear', 'iron'],
        correctIndex: 0,
        explanation: '"Draw a line" means to set a firm limit on what behaviour is acceptable.',
      },
      {
        sentence: 'He ___ that the decision to drop him was unfair — and he refused to accept the explanation.',
        options: ['insisted', 'acknowledged', 'denied'],
        correctIndex: 0,
        explanation: '"Insisted" means he said it strongly and repeatedly — implying a firm, persistent disagreement.',
      },
      {
        sentence: 'Both sides need to ___ something to the table before we can reach a resolution.',
        options: ['bring', 'clear', 'speak'],
        correctIndex: 0,
        explanation: '"Bring to the table" means to contribute something — a compromise, a proposal, or a concession — to a discussion.',
      },
      {
        sentence: 'We need to ___ out the tensions in the dressing room before Saturday.',
        options: ['iron', 'clear', 'draw'],
        correctIndex: 0,
        explanation: '"Iron out" means to resolve small problems or tensions that are causing friction.',
      },
      {
        sentence: 'I want to be ___ with you — here is exactly where you fit in my plans for the next six weeks.',
        options: ['transparent', 'confrontational', 'neutral'],
        correctIndex: 0,
        explanation: 'Being transparent means being open and honest — sharing information rather than keeping players in the dark.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the most professional and effective response in each conflict scenario.',
      items: [
        {
          customerLine: 'A player comes to you and says: "I\'m not happy. I\'m not playing enough and no one tells me why."',
          options: [
            '"I hear you — and I\'m sorry I haven\'t been clearer with you. Let\'s sit down, just the two of us, and I\'ll be completely transparent about where you fit in my plans. You deserve that."',
            '"If you\'re not happy, you can ask for a transfer."',
            '"Everyone wants more game time. You\'re not special. Work harder and you\'ll play."',
          ],
          correctIndex: 0,
          explanation: 'The best response acknowledges the player\'s feeling, takes responsibility, and offers a private, transparent conversation — the three steps of good conflict resolution.',
        },
        {
          customerLine: 'Two players had a serious argument yesterday and the group atmosphere is tense. What do you do?',
          options: [
            '"I address it directly with both players privately — first separately, then together to clear the air. Then I address the group without naming names, reminding everyone of the values of this team."',
            '"I ignore it — players always argue and it usually resolves itself."',
            '"I call out both players in front of the group to make an example and restore order."',
          ],
          correctIndex: 0,
          explanation: 'Professional conflict resolution always happens privately first. Addressing it in front of the group risks embarrassment and picking sides.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this conflict management conversation.',
      dialogue: [
        { speaker: 'Coach', speakerColor: 'blue', text: 'I need to address what happened in training today — two players argued and it affected the whole session.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'I spoke to both of them privately. Marcus denied that he was confrontational. Jamie insisted that the argument was Marcus\'s fault.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'To resolve it, I\'ve decided that Marcus is wrong and Jamie should receive a public apology in front of the whole squad tomorrow.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'From now on, I need everyone to bring any frustrations to me directly — not to the training pitch.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'This situation is now resolved and we move forward together as a team.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'Marcus is wrong and Jamie should receive a public apology in front of the whole squad tomorrow',
          correction: 'both players will resolve this privately and the matter will not be discussed publicly in front of the team',
          explanation: 'Forcing a public apology or declaring one player "wrong" in front of the group is bad conflict management. It humiliates one player, creates resentment, and picks sides. Conflict resolution should always be private and forward-looking, not public and judgmental.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the conflict resolution statement in a professional way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'I hear what you\'re saying — and I want to be transparent with you about...',
          suggestedCompletion: 'exactly where you fit in my plans for the rest of the season. You deserve a clear, honest answer, and I\'m going to give you that now.',
        },
        {
          customerLine: '',
          salespersonStart: 'I have to draw a line at public criticism of teammates, because...',
          suggestedCompletion: 'it damages trust, creates division in the dressing room, and makes it much harder for us to perform as a unit. We deal with problems internally — that\'s our standard.',
        },
        {
          customerLine: '',
          salespersonStart: 'I\'m glad we had this conversation. Here\'s what I commit to on my side, and here\'s what I need from you...',
          suggestedCompletion: 'I will keep you informed about your role and give you clear feedback after every match. In return, I need you to bring your frustrations to me directly, not to the training pitch.',
        },
      ],
    },
  },
};
