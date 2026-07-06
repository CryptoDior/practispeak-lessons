import { Lesson } from '@/types/lesson';

export const c1PossessionAndPassingStats: Lesson = {
  slug: 'c1-possession-and-passing-stats',
  title: 'Possession and Passing Stats',
  subtitle: 'Unit 1 — Data & Statistics',
  level: 'C1-C2',
  description: 'A team can have 70% possession and still lose. Understanding what passing and possession numbers actually mean — and what they don\'t — is essential for anyone talking football seriously.',
  heroImage: '/images/possession-passing.png',

  warmUp: {
    questions: [
      'Does a team that has more possession usually win? Can you think of exceptions?',
      'What do you think "pass completion rate" means? Why does it matter where the passes go?',
      'Have you heard of "progressive passes" or "passes into the final third"? What might those mean?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Concessive clauses — "despite", "even though", "although"',
    description: 'In football analysis, results often contradict the statistics. This makes concessive clauses — clauses that introduce a contrast or unexpected result — very common. Use "despite + noun/gerund", "even though + subject + verb", or "although + subject + verb" to contrast what the numbers show with what actually happened. These structures show sophisticated analytical thinking.',
    positiveExamples: [
      { sentence: 'Despite having 68% possession, they failed to create a single big chance.', note: '"despite" + noun phrase — note: no verb directly after "despite"' },
      { sentence: 'Even though their pass completion was 91%, most passes went sideways or backwards.', note: '"even though" + full clause — the contrast is built into the meaning' },
      { sentence: 'Although they dominated possession, United won with a single counter-attack goal.', note: '"although" + full clause — formal and slightly more written in register' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'POSSESSION',
      partOfSpeech: 'noun',
      definition: 'The percentage of time a team has the ball during a match. 60% possession means a team had the ball for 60% of the playing time.',
      example: '"City finished the match with 72% possession — but United\'s direct play earned them the three points."',
      imageSlug: '/images/c1-possession-and-passing-stats-possession.png',
    },
    {
      word: 'PASS COMPLETION RATE',
      partOfSpeech: 'noun',
      definition: 'The percentage of passes that reach a teammate. 90% means 9 out of every 10 passes were successful.',
      example: '"Their pass completion rate was 94% — but most passes were sideways and backward."',
      imageSlug: '/images/pass-completion.png',
    },
    {
      word: 'PROGRESSIVE PASS',
      partOfSpeech: 'noun',
      definition: 'A pass that moves the ball significantly forward towards the opponent\'s goal — usually at least 10 metres forward.',
      example: '"He made 12 progressive passes from midfield — more than anyone else on the pitch."',
      imageSlug: '/images/progressive-pass.png',
    },
    {
      word: 'FINAL THIRD',
      partOfSpeech: 'noun',
      definition: 'The section of the pitch closest to the opponent\'s goal. Passes and actions in the final third are the most dangerous.',
      example: '"They had lots of the ball but struggled to move it into the final third — that\'s why they didn\'t score."',
      imageSlug: '/images/final-third.png',
    },
    {
      word: 'THROUGH BALL',
      partOfSpeech: 'noun',
      definition: 'A pass played into empty space behind the defensive line for a teammate to run onto.',
      example: '"The through ball cut open the defence and gave the striker a clear run on goal."',
      imageSlug: '/images/c1-possession-and-passing-stats-through-ball.png',
    },
    {
      word: 'BALL RETENTION',
      partOfSpeech: 'noun',
      definition: 'A team\'s ability to keep the ball without losing it — how well they hold possession under pressure.',
      example: '"Their ball retention was excellent in the first half — they rarely gave the ball away cheaply."',
      imageSlug: '/images/ball-retention.png',
    },
    {
      word: 'PRESS RESISTANCE',
      partOfSpeech: 'noun',
      definition: 'The ability to keep the ball and play out under pressure from pressing opponents. Good press resistance means you don\'t panic when pressed.',
      example: '"Despite heavy pressing from the opponent, their press resistance was impressive — they kept calm and played through."',
      imageSlug: '/images/c1-possession-and-passing-stats-press-resistance.png',
    },
    {
      word: 'TURNOVER',
      partOfSpeech: 'noun',
      definition: 'When a team loses the ball to the opponents — whether through a bad pass, a tackle, or poor control.',
      example: '"They gave the ball away 22 times — that turnover rate is too high at this level."',
      imageSlug: '/images/turnover.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PLAY OUT',
      definition: 'To pass the ball out from the back — to build play from the goalkeeper and defenders rather than hoofing it long.',
      example: '"They played out well under pressure — the keeper was comfortable with the ball at his feet."',
      imageSlug: '/images/c1-possession-and-passing-stats-play-out.png',
    },
    {
      phrase: 'GIVE AWAY',
      definition: 'To lose the ball carelessly — through a bad pass, poor touch, or not seeing an opponent.',
      example: '"They gave away the ball 18 times in the first half — that\'s why they couldn\'t control the game."',
      imageSlug: '/images/c1-possession-and-passing-stats-give-away.png',
    },
    {
      phrase: 'MOVE UP',
      definition: 'To advance up the pitch as a unit — when a whole line (defence, midfield) pushes forward together.',
      example: '"The midfield moved up quickly after winning the ball, supporting the attack immediately."',
      imageSlug: '/images/move-up.png',
    },
    {
      phrase: 'BREAK DOWN',
      definition: 'To fail or stop working — used when a team\'s build-up play or attacking move fails to produce a chance.',
      example: '"Their passing broke down at the final third — they couldn\'t find a way through the low block."',
      imageSlug: '/images/c1-possession-and-passing-stats-break-down.png',
    },
    {
      phrase: 'SWITCH ON',
      definition: 'To become alert and focused — especially after a period of passive or slow play.',
      example: '"United switched on in the second half and won the ball back much higher up the pitch."',
      imageSlug: '/images/switch-on.png',
    },
    {
      phrase: 'KNOCK IT AROUND',
      definition: 'To pass the ball between teammates in a relaxed, patient way — controlling the tempo without rushing.',
      example: '"They just knocked it around for long periods, waiting for United to press and leave space in behind."',
      imageSlug: '/images/knock-it-around.png',
    },
  ],

  onThePitch: {
    instructions: 'These are real passing and possession moments on the pitch — learn the language used in each situation.',
    items: [
      {
        cue: 'Playing out from the back under pressure',
        meaning: 'When a goalkeeper or defender receives the ball under pressure and plays short passes to build from the back, this is called "playing out". It requires good press resistance and calm decision-making.',
        usage: '"Play out! Don\'t hoof it!" The coach to the goalkeeper. The analyst later: "Their pass completion from the back was 87% — they played out confidently even under pressure." On the pitch: "Keeper — check your shoulder! Two options left! Play out!"',
        imageSlug: 'otp-play-out',
      },
      {
        cue: 'The sideways pass debate',
        meaning: 'A team can have 90% pass completion but still not be dangerous — if all the passes go sideways or backwards. Analysts talk about "forward passing percentage" to separate productive possession from sterile possession.',
        usage: '"They had 87% pass completion but look at the direction — almost all of it was lateral or back." On the pitch: "Forward! Play forward! Don\'t be safe!" The analyst: "Only 23% of their passes were progressive — that\'s a very low number."',
        imageSlug: 'otp-sideways-pass',
      },
      {
        cue: 'The through ball — playing in behind',
        meaning: 'A pass played into the space behind the defensive line. When timed correctly, it splits the defence and creates a one-v-one. The striker has to time their run to stay onside.',
        usage: '"Through! Through ball! Run!" — the attacker calling for the pass. On the pitch: "See the run! Play it now!" The analyst: "He made six attempts at through balls — two completed. At this level, that\'s an important weapon."',
        imageSlug: 'otp-through-ball',
      },
      {
        cue: 'Recycling possession',
        meaning: 'When an attack breaks down, the team plays the ball back and starts again — "recycling" possession to find a different route forward. It can look negative but keeps the ball safe.',
        usage: '"Back! Recycle! Start again!" The coach calls this when the team is stuck. The analyst: "They recycled possession 34 times in the second half — a lot, but it kept pressure on United without giving the ball away."',
        imageSlug: 'otp-recycle-possession',
      },
      {
        cue: 'The turnover in a dangerous area',
        meaning: 'Giving the ball away in your own half — a "dangerous turnover" — is one of the most tracked metrics in modern football. It often leads to goals.',
        usage: '"No! Don\'t lose it there!" A turnover in the defensive third is catastrophic. The analyst: "They had 8 dangerous turnovers in their own half — United pressed aggressively and profited from four of them."',
        imageSlug: 'otp-turnover-dangerous',
      },
      {
        cue: 'Switching the play — changing the point of attack',
        meaning: 'A long pass across the pitch — from left side to right side or vice versa. Switching the play stretches the defence and creates space on the other side.',
        usage: '"Switch! Switch it! Wide right!" On the pitch this is a key instruction when one side is blocked. The analyst: "They made 14 switches of play — each one moved the opponent out of shape before the cross came in."',
        imageSlug: 'otp-switch-play',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'green', text: 'You had 71% possession tonight but only one shot on target. How do you explain that?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Possession without penetration is just moving the ball sideways. We had the ball but we didn\'t use it well in the final third.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'Your pass completion was 93% though. Doesn\'t that show good play?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Not if the passes aren\'t going forward. Our progressive pass percentage was very low tonight — we were too careful, too passive.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'Were you playing for a draw?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'No. We were trying to control the game. But we didn\'t take enough risks in the final third. That\'s something we need to look at.' },
    { speaker: 'Journalist', speakerColor: 'green', text: 'United only had 29% possession but still won 1-0. What does that tell you about the value of possession?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'It tells you possession without purpose means nothing. The result speaks for itself.' },
  ],

  matchingExercise: [
    { word: 'Possession', definition: 'The percentage of time a team has the ball during a match' },
    { word: 'Pass completion rate', definition: 'The percentage of passes that successfully reach a teammate' },
    { word: 'Progressive pass', definition: 'A pass that moves the ball significantly forward towards the opponent\'s goal' },
    { word: 'Final third', definition: 'The section of the pitch closest to the opponent\'s goal' },
    { word: 'Through ball', definition: 'A pass played into space behind the defensive line for a teammate to run onto' },
    { word: 'Ball retention', definition: 'A team\'s ability to keep possession without giving it away under pressure' },
    { word: 'Turnover', definition: 'When a team loses the ball to the opponents through a bad pass or poor control' },
    { word: 'Press resistance', definition: 'The ability to keep the ball and play calmly under opponent pressure' },
  ],

  fillBlankExercise: [
    { before: 'Despite having 70% possession, they only had one shot', answer: 'on target', after: '.' },
    { before: 'Their passing', answer: 'broke down', after: 'at the final third — they couldn\'t find a way through.' },
    { before: 'They', answer: 'gave away', after: 'the ball 22 times — too many at this level.' },
    { before: 'The goalkeeper', answer: 'played out', after: 'confidently despite heavy pressing from the opponent.' },
    { before: 'Only 23% of their passes were', answer: 'progressive', after: '— most went sideways or backwards.' },
    { before: 'He made a perfect', answer: 'through ball', after: 'to the striker, who was one-v-one with the keeper.' },
    { before: 'They', answer: 'knocked it around', after: 'patiently, waiting for United to press and leave space.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A team has 90% pass completion but doesn\'t score. What\'s the likely problem?',
      options: ['Most passes are sideways or backwards — they\'re not progressing the ball forward', 'Their finishing is very bad despite creating good chances', 'The opponent\'s goalkeeper is having an exceptional game'],
      correctIndex: 0,
    },
    {
      question: 'What is a "dangerous turnover"?',
      options: ['Giving the ball away in your own half where the opponent can attack quickly', 'A tackle that results in a yellow card', 'A pass that goes out of bounds near the opponent\'s goal'],
      correctIndex: 0,
    },
    {
      question: 'Why do teams "switch the play"?',
      options: ['To move the ball to the other side of the pitch where there is more space', 'To slow the game down and keep possession safely', 'To play a through ball in behind the defence'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "Their build-up ___ down at the final third every time."',
      options: ['broke', 'gave', 'switched'],
      correctIndex: 0,
    },
    {
      question: 'What does "press resistance" describe?',
      options: ['The ability to keep the ball and stay calm when opponents press aggressively', 'How hard a team presses the opponent\'s defence', 'The physical fitness needed to press for 90 minutes'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about possession and passing.',
    items: [
      {
        sentence: '___ having 68% possession, they failed to create a single big chance.',
        options: ['Despite', 'Although', 'Because'],
        correctIndex: 0,
        explanation: '"Despite" + noun/gerund introduces a contrast. You cannot say "Despite they had" — use "Despite having".',
      },
      {
        sentence: 'They ___ the ball 18 times in the first half — far too many.',
        options: ['gave away', 'knocked around', 'played out'],
        correctIndex: 0,
        explanation: '"Give away" means to lose the ball carelessly — the opposite of good ball retention.',
      },
      {
        sentence: 'The goalkeeper ___ confidently despite heavy pressing.',
        options: ['played out', 'broke down', 'switched on'],
        correctIndex: 0,
        explanation: '"Play out" means to pass the ball out from the back rather than kicking it long.',
      },
      {
        sentence: 'Their passing ___ down every time they reached the final third.',
        options: ['broke', 'gave', 'moved'],
        correctIndex: 0,
        explanation: '"Break down" means to fail or stop working — often used for attacks that don\'t produce a chance.',
      },
      {
        sentence: 'He made 14 ___ passes — more than any other midfielder in the league.',
        options: ['progressive', 'complete', 'final'],
        correctIndex: 0,
        explanation: '"Progressive passes" are passes that move the ball significantly forward towards the opponent\'s goal.',
      },
      {
        sentence: 'They just ___ it around patiently, waiting for space to open up.',
        options: ['knocked', 'broke', 'switched'],
        correctIndex: 0,
        explanation: '"Knock it around" means to pass between teammates patiently without rushing forward.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'A pundit or coach says something about possession statistics. Choose the most analytically sound response.',
      items: [
        {
          customerLine: '"70% possession. That\'s dominant. They clearly controlled the game."',
          options: [
            '"Possession alone doesn\'t tell the whole story. We need to look at how many progressive passes they made and whether they created chances in the final third."',
            '"Absolutely — 70% is an incredible number. They were clearly the better team."',
            '"70% possession is always a sign of a weak opponent who couldn\'t keep the ball."',
          ],
          correctIndex: 0,
          explanation: 'A good analyst questions what possession actually shows, not just the headline number.',
        },
        {
          customerLine: '"Their pass completion was 94% — the best in the league. They must be the most creative team."',
          options: [
            '"Not necessarily. High pass completion can mean a lot of safe, sideways passes. We need to check their progressive pass percentage and final third entries too."',
            '"Absolutely — 94% means every pass is brilliant and dangerous."',
            '"Pass completion doesn\'t matter in football — it\'s all about goals."',
          ],
          correctIndex: 0,
          explanation: 'High pass completion without forward intent is called "sterile possession" — beautiful but not dangerous.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the grammar or language mistake in this analyst\'s report.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'orange', text: 'City dominated possession in last night\'s match — 67% against United\'s 33%.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Despite they had so much of the ball, they only managed two shots on target.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'Their pass completion rate was strong — 91% overall.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'However, most of that was lateral play — their progressive pass percentage was just 19%.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'United played with high press resistance and won the ball back quickly on each turnover.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Despite they had',
          correction: 'Despite having',
          explanation: '"Despite" must be followed by a noun or gerund (-ing form), not a subject + verb. Say "Despite having" or use "Even though they had".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analyst\'s sentence in a natural way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'Although they had 73% possession, the most important statistic was...',
          suggestedCompletion: 'their progressive pass percentage — just 21% — which shows the possession was mostly safe and lateral.',
        },
        {
          customerLine: '',
          salespersonStart: 'A high pass completion rate is not always a good sign, because...',
          suggestedCompletion: 'it can simply mean a team is playing a lot of safe sideways passes and not trying to progress the ball forward.',
        },
        {
          customerLine: '',
          salespersonStart: 'They switched the play well tonight, which means...',
          suggestedCompletion: 'they moved the ball from one side to the other, stretching the defence and creating space to attack.',
        },
      ],
    },
  },
};
