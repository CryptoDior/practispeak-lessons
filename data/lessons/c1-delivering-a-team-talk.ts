import { Lesson } from '@/types/lesson';

export const c1DeliveringATeamTalk: Lesson = {
  slug: 'c1-delivering-a-team-talk',
  title: 'Delivering a Team Talk',
  subtitle: 'Unit 2 — Coaching & Leadership English',
  level: 'C1-C2',
  description: 'A team talk can change a match. Whether it\'s a pre-match motivator, a half-time reset, or a post-match debrief, the words a coach chooses — and how they say them — have real impact. Learn the language of effective team talks.',
  heroImage: '/images/team-talk.png',

  warmUp: {
    questions: [
      'Have you ever heard a famous football team talk? What do you remember about it?',
      'What do you think the difference is between a pre-match talk, a half-time talk, and a post-match talk?',
      'What makes a team talk effective? Think about tone, content, and timing.',
    ],
  },

  grammarFocus: {
    focusTitle: 'Imperative and collective "we" — language of motivation',
    description: 'Team talks use two powerful grammatical tools. First, the imperative — direct commands that create energy and urgency: "Stay compact!", "Press now!", "Believe in each other!". The imperative is short, clear, and direct. Second, the collective "we" — using "we" to build unity and shared responsibility: "We work for each other", "We go out there and give everything", "We are better than this". The "we" creates a group identity and tells players they are not alone. Both tools together give a team talk its power.',
    positiveExamples: [
      { sentence: 'Stay compact and stay connected — we defend together.', note: 'imperative ("Stay") + collective "we" — combining both tools in one instruction' },
      { sentence: 'We have worked for this moment. Now go out there and show them what we can do.', note: 'collective "we" builds shared history; imperative "go out there" triggers action' },
      { sentence: 'Press high, press hard, and press together — they will make mistakes, and we will punish them.', note: 'three-part imperative creates rhythm and energy; "we" reinforces collective action' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'DEBRIEF',
      partOfSpeech: 'noun / verb',
      definition: 'A structured conversation after a match or training session where the team reviews what happened — what went well and what needs to improve.',
      example: '"The post-match debrief focused on two things: the defensive shape and the set-piece conceded."',
      imageSlug: '/images/debrief.png',
    },
    {
      word: 'COMPOSURE',
      partOfSpeech: 'noun',
      definition: 'Calmness under pressure — the ability to stay focused and not panic when things are difficult.',
      example: '"We need more composure in the final third — we\'re rushing our decisions when we should slow down."',
      imageSlug: '/images/composure.png',
    },
    {
      word: 'INTENT',
      partOfSpeech: 'noun',
      definition: 'Purpose or determination — the clear aim or desire to do something. Coaches talk about playing with "intent" to mean playing with purpose and drive.',
      example: '"I want to see more intent today — attack with confidence, not hesitation."',
      imageSlug: '/images/intent.png',
    },
    {
      word: 'SHAPE',
      partOfSpeech: 'noun',
      definition: 'The tactical organisation of the team — how the players are positioned. Coaches tell players to "maintain their shape" or "get into shape".',
      example: '"When we lose the ball, everyone gets into shape immediately — no exceptions."',
      imageSlug: '/images/shape.png',
    },
    {
      word: 'RESILIENCE',
      partOfSpeech: 'noun',
      definition: 'The ability to recover from setbacks — to keep going after a goal is conceded, an injury, or a bad call.',
      example: '"This team has shown incredible resilience all season — one goal down means nothing."',
      imageSlug: '/images/resilience.png',
    },
    {
      word: 'MOMENTUM',
      partOfSpeech: 'noun',
      definition: 'The feeling that a team is in control and things are going their way — energy and confidence that builds during a match.',
      example: '"We have the momentum now — don\'t let them back into this game."',
      imageSlug: '/images/momentum.png',
    },
    {
      word: 'ACCOUNTABILITY',
      partOfSpeech: 'noun',
      definition: 'Taking responsibility for your own actions — accepting when you made a mistake and owning it.',
      example: '"This team is built on accountability — if you make a mistake, you own it, you learn from it, and you move on."',
      imageSlug: '/images/accountability.png',
    },
    {
      word: 'IDENTITY',
      partOfSpeech: 'noun',
      definition: 'The defining character of a team — what a team stands for, how they play, and what makes them different.',
      example: '"Our identity is a high-pressing, high-energy team. When we don\'t press, we lose who we are."',
      imageSlug: '/images/identity.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STEP UP',
      definition: 'To take more responsibility — to raise your level of effort or performance when it is needed.',
      example: '"Someone needs to step up in the second half. Who wants the ball when it\'s difficult?"',
      imageSlug: '/images/step-up-talk.png',
    },
    {
      phrase: 'DIG IN',
      definition: 'To work harder and fight when things are difficult — to keep going under pressure.',
      example: '"We\'re 1-0 down at half-time — but we\'ve been here before. We dig in and we come back."',
      imageSlug: '/images/dig-in.png',
    },
    {
      phrase: 'PUSH ON',
      definition: 'To continue working hard — especially to keep the pressure on an opponent rather than sitting back.',
      example: '"We\'ve scored. Good. Now push on — don\'t let them settle. Keep the pressure on."',
      imageSlug: '/images/push-on.png',
    },
    {
      phrase: 'SWITCH OFF',
      definition: 'To stop concentrating — to lose focus, often at a critical moment. Coaches warn players not to switch off.',
      example: '"We conceded because we switched off for three seconds. At this level, three seconds costs you a goal."',
      imageSlug: '/images/switch-off.png',
    },
    {
      phrase: 'CARRY (SOMEONE) THROUGH',
      definition: 'To help someone get through a difficult moment — used when the team supports a player who is struggling.',
      example: '"If one of us is struggling today, the team carries them through. We leave no one behind."',
      imageSlug: '/images/carry-through.png',
    },
    {
      phrase: 'RISE TO',
      definition: 'To meet a challenge with the right response — to perform at the level required by a big occasion.',
      example: '"This is a cup semi-final. I know this group — we rise to occasions like this."',
      imageSlug: '/images/rise-to.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key moments where team talk language is used — before, during, and after a match.',
    items: [
      {
        cue: 'The pre-match team talk — setting the tone',
        meaning: 'The pre-match talk sets the emotional and tactical tone for the game. Good coaches combine clear instructions with emotional connection. Too much information overloads the players — the best pre-match talks are short and sharp.',
        usage: '"Three things: press high, stay compact without the ball, and play with intent. We\'ve prepared for this. Now go out and express yourselves." Simple, clear, energising. The players know exactly what to do and how to feel.',
        imageSlug: 'otp-pre-match-talk',
      },
      {
        cue: 'The half-time team talk — reset or reinforce',
        meaning: 'At half-time, the coach either fixes problems (if losing or playing badly) or reinforces what is working (if winning or playing well). A good half-time talk is focused — not too many changes at once.',
        usage: '"We\'re 1-0 up and we\'ve controlled the first half. Don\'t change anything. Stay compact, keep the press on, and we\'ll punish them on the counter. One more goal finishes this." Reinforcing when winning is just as important as correcting when losing.',
        imageSlug: 'otp-half-time-talk',
      },
      {
        cue: 'The recovery talk — coming back from a goal',
        meaning: 'When a team concedes, a coach\'s immediate words are critical. Players often look to the bench or to teammates. The language needs to be calm but energising.',
        usage: '"Head up! Forget it — it\'s gone. We dig in and we get level. Twenty minutes, one goal. We can do this. Everyone in, everyone together. Push on." Short sentences. No blame. Energy forward.',
        imageSlug: 'otp-recovery-talk',
      },
      {
        cue: 'Calling out a player in front of the group',
        meaning: 'Sometimes a coach needs to challenge a player directly in the group setting. This must be done carefully — with specifics, not personal attacks, and always with accountability, not humiliation.',
        usage: '"Marcus — you switched off for that second goal. That can\'t happen. Own it, reset, and make sure it doesn\'t happen again. We trust you — show us." Be specific. Stay on the action, not the person. Finish with trust.',
        imageSlug: 'otp-call-out-player',
      },
      {
        cue: 'The post-match debrief — honest review',
        meaning: 'The post-match debrief can happen immediately after the game or the next day. It reviews both positives and negatives — and sets the direction for the next training session.',
        usage: '"Good result. But before we enjoy it — let\'s be honest about the second half. We dropped the line, we stopped pressing, and we nearly let them back in. Tomorrow we look at the video. Tonight, be proud of the win. Tomorrow we get better."',
        imageSlug: 'otp-post-match-debrief',
      },
      {
        cue: 'Building the team\'s identity in the talk',
        meaning: 'The best coaches use team talks to constantly reinforce the team\'s identity — what they stand for and how they play. This creates consistency and culture over time.',
        usage: '"This is what we do. We press. We run. We fight for each other. That\'s our identity and it doesn\'t change whether we\'re winning or losing. Never stop being who we are." Repeating identity language consistently builds culture.',
        imageSlug: 'otp-team-identity',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Coach', speakerColor: 'blue', text: 'Right. Sit down. Listen carefully. We\'re 1-0 down but there are 45 minutes left. This is not over.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'First — the goal we conceded. We switched off at the corner. Three seconds of lost concentration. That\'s on all of us.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'But here\'s what I also know — we\'ve had five good chances. Five. Their keeper has been the difference.' },
    { speaker: 'Player', speakerColor: 'green', text: 'We keep breaking them down but nothing is going in. It\'s frustrating.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'I understand that. But keep your composure. The chances are coming — that\'s the system working. One goes in and the momentum shifts.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Defensively — we need to step up and hold the line higher. Don\'t let them play in behind us.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'We go out there, we dig in, and we push on. This team has come back before. We rise to this.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Now — on your feet. We play like our identity. We press. We run. We fight. Together.' },
  ],

  matchingExercise: [
    { word: 'Debrief', definition: 'A structured review of what happened after a match or training session' },
    { word: 'Composure', definition: 'Calmness and focus under pressure — not panicking when things get difficult' },
    { word: 'Intent', definition: 'Playing with purpose and determination — not hesitating or being passive' },
    { word: 'Resilience', definition: 'The ability to recover and keep going after a setback or goal conceded' },
    { word: 'Momentum', definition: 'The feeling of energy and control when things are going a team\'s way' },
    { word: 'Accountability', definition: 'Taking personal responsibility for your own mistakes and actions' },
    { word: 'Shape', definition: 'The tactical organisation and positioning of the team' },
    { word: 'Identity', definition: 'The defining character of the team — what they stand for and how they play' },
  ],

  fillBlankExercise: [
    { before: 'Someone needs to', answer: 'step up', after: 'in the second half — who wants the ball when it\'s hard?' },
    { before: 'We\'re 1-0 down but we\'ve been here before. We', answer: 'dig in', after: 'and we come back.' },
    { before: 'We\'ve scored. Now', answer: 'push on', after: '— don\'t let them settle. Keep the pressure on.' },
    { before: 'We conceded because we', answer: 'switched off', after: 'for three seconds — at this level that costs you a goal.' },
    { before: 'This is a cup final. I know this group — we', answer: 'rise to', after: 'occasions like this.' },
    { before: 'Our', answer: 'identity', after: 'is pressing, running, and fighting for each other every minute.' },
    { before: 'I want to see more', answer: 'intent', after: 'today — attack with confidence, not hesitation.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which grammatical feature is most common in team talks?',
      options: ['Imperative verbs and collective "we"', 'Passive voice and hedging language', 'Question forms and hypothetical conditionals'],
      correctIndex: 0,
    },
    {
      question: 'What does "dig in" mean in a team talk context?',
      options: ['To work harder and fight when things are difficult', 'To press higher and closer to the opponent\'s goal', 'To stay in a deep defensive shape and defend'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "We\'ve conceded — head up, forget it, and ___ on."',
      options: ['push', 'step', 'dig'],
      correctIndex: 0,
    },
    {
      question: 'What is the purpose of the "collective we" in team talk language?',
      options: ['To build a sense of shared identity and responsibility among the players', 'To avoid using the imperative which sounds too aggressive', 'To describe what the players are doing during the match'],
      correctIndex: 0,
    },
    {
      question: 'When calling out a player in front of the group, what should a coach focus on?',
      options: ['The specific action that went wrong, not personal attacks — and finish with trust', 'The player\'s overall attitude and quality to make the point strong', 'The team\'s performance as a whole to avoid embarrassing one person'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence from a team talk.',
    items: [
      {
        sentence: 'Stay ___ and stay connected — we defend as a unit, not as individuals.',
        options: ['compact', 'sharp', 'direct'],
        correctIndex: 0,
        explanation: '"Compact" means staying close together as a team to block space. It\'s a core tactical instruction.',
      },
      {
        sentence: 'We ___ to this kind of occasion — I\'ve seen it before with this group.',
        options: ['rise', 'push', 'step'],
        correctIndex: 0,
        explanation: '"Rise to" an occasion means to perform at the level the moment demands.',
      },
      {
        sentence: 'If someone is struggling today, the team ___ them through. We leave no one behind.',
        options: ['carries', 'digs', 'pushes'],
        correctIndex: 0,
        explanation: '"Carry someone through" means to support a struggling teammate until they find their form.',
      },
      {
        sentence: 'This is our ___ — we press, we run, we fight. That never changes.',
        options: ['identity', 'momentum', 'composure'],
        correctIndex: 0,
        explanation: 'A team\'s "identity" is the defining character of how they play and what they stand for.',
      },
      {
        sentence: 'We lost ___ in the second half — we stopped pressing and sat too deep.',
        options: ['momentum', 'shape', 'accountability'],
        correctIndex: 0,
        explanation: '"Momentum" is the feeling of energy and control that can be lost or won during a match.',
      },
      {
        sentence: 'Don\'t ___ off for a second — one moment of lost concentration and they score.',
        options: ['switch', 'step', 'dig'],
        correctIndex: 0,
        explanation: '"Switch off" means to lose focus — coaches warn against this constantly, especially late in games.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'A player says something at half-time. Choose the most effective coaching response.',
      items: [
        {
          customerLine: '"Coach, we\'re playing well but nothing is going in. It\'s demoralising."',
          options: [
            '"I hear you — but keep your composure. The chances are coming because the system is working. One goal changes everything. Trust the process and push on."',
            '"Stop complaining and just score. That\'s your job."',
            '"You\'re right — let\'s change the whole system and try something completely different."',
          ],
          correctIndex: 0,
          explanation: 'Good coaching acknowledges the frustration, gives a rational explanation, and re-motivates with a clear next step.',
        },
        {
          customerLine: '"I lost my runner for the second goal. I\'m sorry."',
          options: [
            '"Own it — that\'s accountability. Reset, learn from it, and make sure it doesn\'t happen in the second half. We trust you. Now go again."',
            '"Yes, that was terrible. Don\'t do it again."',
            '"Don\'t worry about it — it happens to everyone. Just keep going."',
          ],
          correctIndex: 0,
          explanation: 'Good coaching acknowledges the mistake, reinforces accountability, and immediately rebuilds trust.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this coaching team talk.',
      dialogue: [
        { speaker: 'Coach', speakerColor: 'blue', text: 'Right — half-time. We\'re 1-0 down. Listen up.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'We have resilience. We have quality. And we have 45 minutes. This is not finished.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'Jamie — you switched off for that goal. You need to step up yourself and not rely on the team to carry you through.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'For everyone else — push on, press hard, and play with intent in the final third.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'This is who we are. We dig in, we push on, and we take this game. Together.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'not rely on the team to carry you through',
          correction: 'the team will carry you through if you need it — that\'s what we do',
          explanation: 'Good coaching calls out the mistake but then rebuilds trust and reminds the player they have support. Telling a player not to rely on the team damages team unity. The better message is that the team carries each other through.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the coach\'s team talk sentence in a motivating, natural way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'We\'re 1-0 down at half-time — but here\'s what I know about this group...',
          suggestedCompletion: 'we have come back before, we have the quality to create chances, and one goal changes everything. Trust each other and push on.',
        },
        {
          customerLine: '',
          salespersonStart: 'Our identity as a team is very clear — we press, we run, and we...',
          suggestedCompletion: 'fight for every ball together. That doesn\'t change whether we\'re winning by three or losing by one.',
        },
        {
          customerLine: '',
          salespersonStart: 'When someone makes a mistake in this team, we don\'t blame — we...',
          suggestedCompletion: 'own it, learn from it, and move on. That\'s accountability. That\'s what makes this team different.',
        },
      ],
    },
  },
};
