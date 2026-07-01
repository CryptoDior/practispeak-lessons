import { Lesson } from '@/types/lesson';

export const mediaTraining: Lesson = {
  slug: 'media-training',
  title: 'Media Training',
  subtitle: 'Handling tricky questions, clichés as strategy, and what not to say',
  level: 'B1-B2',
  description: 'Every professional footballer faces a camera and a microphone. What you say — and what you choose not to say — can define your public image, affect your transfer value, and even end careers. This lesson teaches the language strategies of media training: how to handle difficult questions, use clichés strategically, and stay in control of the message.',
  heroImage: '/images/media-training-hero.png',

  warmUp: {
    questions: [
      'Can you think of a footballer who said something in an interview that caused a big controversy? What happened?',
      'Why do you think so many footballers give very similar, boring answers in interviews — is it laziness, or is there a strategy behind it?',
      'If you were a footballer being asked about a transfer rumour you could not confirm, what would you say?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Evasion and redirection — controlling the interview without lying',
    description: 'Media training teaches a specific set of language strategies for deflecting questions, redirecting conversations, and giving answers that say very little while sounding cooperative. These are not dishonest — they are professional communication skills used across business, politics, and sport.',
    positivePattern: 'BRIDGING: answer partially, then redirect. "That\'s an interesting question — what I can tell you is that I\'m fully focused on the next game." DEFLECTION: acknowledge without confirming. "I\'m not going to comment on speculation — what I will say is..." REFRAMING: turn the question into a different question. "I think the real question is how we bounce back as a team." VAGUE POSITIVE: sound cooperative while saying nothing specific. "I\'m really happy here, I love the club, we\'ll see what happens."',
    positiveExample: '"Journalist: Are you leaving in January? Player: Look, there\'s always going to be speculation at this time of year — what I can tell you is that I\'m fully committed to this club for as long as I\'m here. My focus is on Saturday\'s game."',
    negativePattern: 'NEVER confirm a transfer that has not been announced. NEVER criticise a teammate by name in an interview. NEVER give a specific answer to a question about personal salary. NEVER say "no comment" — it implies guilt and creates a bigger story.',
    negativeExample: 'WRONG: "No comment." (implies something to hide) → RIGHT: "That\'s not something I\'m going to discuss — what I will say is..." WRONG: "To be honest, [teammate] has been poor recently." → RIGHT: "We\'re all working hard — it\'s a long season."',
    positiveExamples: [
      { sentence: '"What I can tell you is that I\'m fully focused on Saturday." (bridging — acknowledges the question, pivots to preferred message)', note: '("What I can tell you is" = a bridging phrase that sounds cooperative but controls the content)' },
      { sentence: '"There\'s always going to be speculation at this time of year." (normalising — makes the question seem routine, removes its drama)', note: '(Normalising the question reduces its power — if it\'s "always" happening, it\'s not a story)' },
      { sentence: '"I\'m not going to get into that — what I will say is the team spirit here is excellent." (deflect + redirect)', note: '("Not going to get into that" = polite refusal; "what I will say is" = redirect to preferred message)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "No comment." — sounds guilty, creates a bigger media story.', note: 'CORRECT: "That\'s not something I\'m in a position to comment on right now."' },
      { sentence: 'WRONG: "I\'d love to play for [Rival Club] one day — they\'re a massive club."', note: 'CORRECT: "I\'m only focused on this club. That\'s all I\'ll say on that."' },
    ],
  },

  vocabulary: [
    {
      word: 'MEDIA TRAINING',
      partOfSpeech: 'phrase',
      definition: 'Formal coaching that teaches athletes and public figures how to handle interviews, press conferences, and media appearances professionally.',
      example: '"He clearly hadn\'t had media training — he answered every question directly, including ones he should have deflected. By the next day, three stories had come from that single interview."',
      imageSlug: '/images/media-training.png',
    },
    {
      word: 'CLICHÉ',
      partOfSpeech: 'noun',
      definition: 'An overused phrase that has become predictable — but in football interviews, clichés are often used deliberately as a defensive strategy.',
      example: '"\'We take it one game at a time\' — a pure cliché. But that\'s the point. A cliché gives journalists nothing to work with. It\'s a shield."',
      imageSlug: '/images/cliche.png',
    },
    {
      word: 'DEFLECT',
      partOfSpeech: 'verb',
      definition: 'To avoid answering a question directly — steering the conversation away from a sensitive topic.',
      example: '"She deflected every question about the transfer — acknowledging it had been asked, then redirecting to the team\'s current form."',
      imageSlug: '/images/deflect.png',
    },
    {
      word: 'SPECULATION',
      partOfSpeech: 'noun',
      definition: 'Unconfirmed discussion or reporting about what might happen — transfer rumours, selection decisions, or any unverified story.',
      example: '"I\'m not going to comment on speculation — there\'s always going to be stories at this time of year and I just focus on what I can control."',
      imageSlug: '/images/speculation.png',
    },
    {
      word: 'OFF THE RECORD',
      partOfSpeech: 'phrase',
      definition: 'Information shared with a journalist that is understood to be private and not for publication. Nothing is ever truly off the record.',
      example: '"He thought it was off the record — but there is no such thing as truly off the record in professional football. It appeared in print the next morning."',
      imageSlug: '/images/off-the-record.png',
    },
    {
      word: 'SPIN',
      partOfSpeech: 'noun / verb',
      definition: 'A particular interpretation or framing of events, designed to present them in the most favourable light. A "spin doctor" is a PR professional who does this.',
      example: '"The club put a positive spin on the defeat — \'We controlled large parts of the game and the result doesn\'t reflect the performance level.\'"',
      imageSlug: '/images/spin.png',
    },
    {
      word: 'SOUNDBITE',
      partOfSpeech: 'noun',
      definition: 'A short, memorable phrase designed to be quoted — the part of an interview that journalists will extract and headline.',
      example: '"\'We go again\' — a perfect soundbite. Three words. Optimistic. Quotable. Gives the journalist a headline while saying absolutely nothing controversial."',
      imageSlug: '/images/soundbite.png',
    },
    {
      word: 'BRIDGE',
      partOfSpeech: 'noun / verb',
      definition: 'A media technique — partially acknowledging a question, then redirecting to your preferred message. The bridge is the transition phrase.',
      example: '"\'That\'s a fair question — what I would say is...\' is a classic bridging technique. You acknowledge, then control."',
      imageSlug: '/images/bridge.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STICK TO',
      definition: 'To stay with a specific message or topic — not being drawn away from your prepared talking points.',
      example: '"She stuck to the message all through the press conference — every question got the same answer: \'We\'re focused on the next game.\'"',
      imageSlug: '/images/stick-to.png',
    },
    {
      phrase: 'GET DRAWN INTO',
      definition: 'To be pulled into discussing a topic you did not want to address — losing control of the interview.',
      example: '"Don\'t get drawn into speculation about transfers — as soon as you comment, even to deny it, you\'ve made it a story."',
      imageSlug: '/images/get-drawn-into.png',
    },
    {
      phrase: 'COME ACROSS',
      definition: 'To create a certain impression — the way you appear to others during an interview.',
      example: '"He came across as arrogant — not because of what he said, but because of how he said it. Body language matters as much as words."',
      imageSlug: '/images/come-across.png',
    },
    {
      phrase: 'WALK BACK',
      definition: 'To retract or soften something you previously said — to try to undo the damage of an earlier statement.',
      example: '"He tried to walk back his comments about the manager the next day — but it was too late. The story had already run."',
      imageSlug: '/images/walk-back.png',
    },
    {
      phrase: 'FUEL THE FIRE',
      definition: 'To make a situation worse by saying or doing something that gives it more attention or energy.',
      example: '"Any comment about the referee — even agreeing with a journalist\'s suggestion — just fuels the fire. Say nothing and the story dies."',
      imageSlug: '/images/fuel-fire.png',
    },
    {
      phrase: 'GIVE AWAY',
      definition: 'To accidentally reveal information you did not intend to share — especially through body language or an unguarded moment.',
      example: '"His reaction gave it away — he tried not to smile when asked about the transfer and everyone in the room noticed."',
      imageSlug: '/images/give-away.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key media training techniques and concepts used by professional footballers and their PR teams.',
    items: [
      {
        cue: 'The football interview cliché — a deliberate shield',
        meaning: 'Football clichés are not laziness — they are a communication strategy that gives journalists nothing to create a story from.',
        usage: '"We take it one game at a time." "The lads have been brilliant." "We go again." "The manager has the full backing of the dressing room." These phrases are overused because they are useless to journalists — there is no headline, no controversy, no story in any of them. Media-trained players understand that a cliché is a gift: it allows them to appear cooperative and talkative while revealing absolutely nothing. "He answered every question — fluently, happily, for fifteen minutes — and said nothing that could be published as a story. That\'s media training at its finest." The risk: being perceived as robotic or evasive. The skill: delivering clichés with enough warmth and personality that they do not come across as obviously rehearsed.',
        imageSlug: 'otp-football-cliche',
      },
      {
        cue: 'Bridging technique — the journalist\'s question, your answer',
        meaning: 'Bridging allows you to acknowledge a question before steering to the message you want to deliver.',
        usage: 'The bridge structure: (1) Acknowledge: "That\'s a fair question..." / "Look, I understand why you\'re asking that..." (2) Bridge phrase: "What I can tell you is..." / "What I will say is..." / "What I\'d focus on is..." (3) Your preferred message. "Journalist: Is the manager under pressure? Player: Look, I understand why there\'s a lot of focus on results right now — what I can tell you is that the dressing room is fully behind the manager and we believe in what he\'s doing. We take responsibility for results as players." The journalist got an answer. The player said nothing controversial. The bridge worked.',
        imageSlug: 'otp-bridging-technique',
      },
      {
        cue: 'What never to say — the cardinal rules',
        meaning: 'There are specific categories of statement that create maximum media damage — and media training teaches players to avoid all of them.',
        usage: 'NEVER say: (1) Anything about salary: "I don\'t discuss my wages in public." (2) Anything critical of a named teammate: "We\'re all working hard — it\'s a long season." (3) Anything confirming a transfer: "I\'m flattered by interest but my focus is here." (4) Anything that criticises the referee specifically: "We respect all referees." (5) "No comment" — it implies you have something to hide. (6) Anything in the heat of emotion immediately after a controversial game. Rule of thumb: "If you\'re not sure whether to say it, don\'t say it. If it would make a good headline, don\'t say it."',
        imageSlug: 'otp-what-not-to-say',
      },
      {
        cue: 'Transfer speculation — the professional response',
        meaning: 'Transfer questions are the most dangerous interview moment — and there is a specific language protocol for handling them.',
        usage: 'The transfer question protocol: (1) Never confirm, never deny with specific language. (2) Normalise: "There\'s always going to be speculation at this time of year." (3) Redirect to current focus: "My focus is entirely on what we\'re doing here." (4) Positive about current club: "I love this club and everything about it." (5) Do not say "never" — events change and "never" becomes a broken promise. The formula: "There\'s always going to be stories — I\'ve said it before and I\'ll say it again, I\'m fully committed to this club. That\'s all I\'m going to say on that." Complete. Professional. Quotable. Says nothing.',
        imageSlug: 'otp-transfer-speculation',
      },
      {
        cue: 'Social media and the end of "off the record"',
        meaning: 'Modern media training must address social media — where players have direct access to audiences but also direct exposure to risk.',
        usage: '"There is no such thing as off the record in the modern era — a comment made to five journalists in a private room can be on social media within minutes." Social media rules: Think before posting. Never post in the heat of emotion (after a loss, after criticism). "Reply all" in anger is the social media equivalent of losing a press conference. Liking a post can itself be a story ("Player likes criticism of manager"). Modern players have PR teams who sometimes manage their social media entirely. "Delete" does not mean gone — screenshots exist. "The tweet I deleted three years ago came back to haunt me. The internet never forgets."',
        imageSlug: 'otp-social-media-risk',
      },
      {
        cue: 'The post-match interview — time pressure and emotional control',
        meaning: 'The most dangerous interview moment is immediately after a controversial or emotional match — when the player is least in control of their language.',
        usage: 'Post-match interviews are the highest-risk media moment because: (1) The player is physically exhausted. (2) Emotions are raw — either euphoric or devastated. (3) The journalist is asking about the most sensitive moment (the controversial decision, the missed penalty, the red card). (4) There is no preparation time. "The key is to have your phrases ready before you go into the interview — not to think of answers in the moment. You know what they\'re going to ask. Prepare for it in the tunnel." Standard post-match emotional control phrases: "Look, I won\'t comment on that tonight — I need a bit of time to reflect." "We move on. We learn from it. That\'s football." "Tonight I\'m just proud of the team\'s effort."',
        imageSlug: 'otp-post-match-interview',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right — media training session. Ronaldo, I am the journalist. Ready? "Ronaldo — there are reports linking you with a move to City in January. Can you confirm there is interest?"',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Ha — okay. "Look, there\'s always going to be [[speculation:unconfirmed discussion about what might happen]] at this time of year. What I can tell you is I\'m fully focused on the next game and fully committed to this club. That\'s all I\'ll say on that."',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. You [[deflected:avoided answering directly]] beautifully. You used the [[bridge:a technique of acknowledging a question before redirecting to your preferred message]] — acknowledged the question, then went to your preferred message. Sofia — your turn. "Sofia, there\'s been criticism of your performances over the last three games. How do you respond?"',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '"I understand there\'s always going to be focus on individual performances — what I\'d say is I\'m working hard and the team is what matters. We take it one game at a time." Pure [[cliché:an overused phrase used deliberately as a shield]] — but effective. I gave the journalist nothing to make a [[soundbite:a short memorable phrase designed to be quoted]] out of.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Now the hardest one. "The referee\'s decision in the 89th minute cost you the game. Do you think it was a mistake?"',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: '"Tonight I\'m just proud of the team\'s effort — we gave everything. I\'m not going to [[get drawn into:to be pulled into discussing something you did not want to address]] discussing individual decisions. We [[move on:same]] and focus on Thursday." I am not saying [[\'no comment\'|no comment:a phrase that implies guilt and creates a bigger story]] — I am saying nothing, but saying it nicely. No [[fuel the fire:to make a situation worse by saying something that gives it more attention]]. No [[walk back:to retract something you said]] needed tomorrow.',
    },
  ],

  matchingExercise: [
    { word: 'MEDIA TRAINING', definition: 'Formal coaching that teaches athletes how to handle interviews professionally' },
    { word: 'CLICHÉ', definition: 'An overused phrase — used deliberately in football interviews as a protective shield' },
    { word: 'BRIDGE', definition: 'A media technique — acknowledge a question then redirect to your preferred message' },
    { word: 'DEFLECT', definition: 'To avoid answering a question directly — steering away from sensitive topics' },
    { word: 'SPECULATION', definition: 'Unconfirmed discussion about what might happen — transfer rumours and stories' },
    { word: 'SOUNDBITE', definition: 'A short memorable phrase designed to be quoted by journalists' },
    { word: 'SPIN', definition: 'Framing events in the most favourable light — a particular interpretation of reality' },
    { word: 'OFF THE RECORD', definition: 'Information shared privately with a journalist — understood not to be published' },
  ],

  fillBlankExercise: [
    { before: '"There\'s always going to be', answer: 'speculation', after: 'at this time of year — I\'m focused on the next game."' },
    { before: 'She', answer: 'deflected', after: 'every question about the transfer — acknowledging it, then pivoting to the team\'s form.' },
    { before: 'He tried to', answer: 'walk back', after: 'his comments about the manager the next day — but the story had already run.' },
    { before: '"Don\'t', answer: 'get drawn into', after: 'the referee debate — any comment you make just makes it a bigger story."' },
    { before: 'She', answer: 'stuck to', after: 'the message for the entire press conference — every question got the same calm, focused answer.' },
    { before: '"We go again" — a perfect', answer: 'soundbite', after: '. Three words, positive, quotable, says absolutely nothing controversial.' },
    { before: 'His reaction', answer: 'gave it away', after: '— he tried not to smile when asked about the transfer and everyone noticed.' },
    { before: '"I\'m not going to', answer: 'fuel the fire', after: 'on the referee — we respect all match officials and we move on."' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Why do media-trained footballers use clichés deliberately in interviews?',
      options: [
        'Because they have not prepared well and fall back on familiar phrases under pressure.',
        'Because clichés give journalists nothing to make a story from — they are a protective shield.',
        'Because clichés sound positive and fans appreciate hearing familiar, optimistic phrases.',
      ],
      correctIndex: 1,
    },
    {
      question: '"What I can tell you is that I\'m fully focused on Saturday." What technique is this?',
      options: [
        'Deflection — refusing to answer the question and changing the subject entirely.',
        'Bridging — acknowledging the question, then redirecting to the preferred message.',
        'Normalising — making the question seem routine to remove its dramatic impact.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why should a player never say "no comment" in an interview?',
      options: [
        'Because "no comment" is grammatically incorrect in formal English interviews.',
        'Because "no comment" implies there is something to hide — it creates a bigger story than a deflective answer.',
        'Because "no comment" is considered rude to journalists and damages the player\'s media relationships.',
      ],
      correctIndex: 1,
    },
    {
      question: '"There\'s always going to be speculation at this time of year." What technique is this?',
      options: [
        'Bridging — using the phrase to transition to a preferred message.',
        'Normalising — making the question seem routine, removing its dramatic impact.',
        'Deflecting — refusing to acknowledge the question at all.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why is the immediate post-match interview the most dangerous media moment for a player?',
      options: [
        'Because journalists ask the most difficult questions immediately after matches — they have researched specific incidents.',
        'Because the player is physically exhausted, emotionally raw, and has no preparation time — making unguarded statements more likely.',
        'Because post-match interviews are broadcast live — there is no editing or opportunity to correct mistakes.',
      ],
      correctIndex: 1,
    },
    {
      question: '"He tried to walk back his comments the next day." What does "walk back" mean?',
      options: [
        'To return to a previous position — both physically (back to the pitch) and metaphorically.',
        'To retract or soften something said previously — to try to undo the damage of an earlier statement.',
        'To refuse to answer the same question again — to decline further media interaction.',
      ],
      correctIndex: 1,
    },
    {
      question: 'A player says: "I\'m flattered by interest from other clubs but I\'m only focused on this club." What is this an example of?',
      options: [
        'An honest denial — the player is confirming they are not interested in leaving.',
        'A transfer speculation response — acknowledging the question without confirming or denying specific interest.',
        'A deflection — refusing to acknowledge that any interest exists at all.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Liking a post can itself be a story." What does this reveal about modern media training?',
      options: [
        'Journalists are desperate for content and will report even trivial social media interactions.',
        'Every public action — including social media activity — is media communication and must be managed carefully.',
        'Players should not use social media at all — it is too risky for professional athletes.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each media training sentence with the correct technique or vocabulary.',
    items: [
      {
        sentence: '"I\'m not going to _____ into speculation about transfers — my focus is here and that\'s all I\'ll say."',
        options: ['get drawn', 'get pulled', 'get pushed'],
        correctIndex: 0,
        explanation: '"Get drawn into" is the fixed phrasal verb — to be pulled into discussing something you did not want to address. "I\'m not going to get drawn into speculation" is one of the most standard media-trained responses to transfer questions. "Get drawn into" implies being gradually pulled towards a subject against your will or better judgement — the "drawn" suggests a pull, like being drawn magnetically towards something. "Get pulled into" is understandable but not the standard phrase. "Get pushed into" is not standard for this meaning. "Drawn into" is also used in other professional contexts: "We don\'t want to get drawn into a price war," "Don\'t get drawn into the argument."',
      },
      {
        sentence: '"That\'s a fair question. _____ I can tell you is that I\'m fully committed to this club and fully focused on Saturday."',
        options: ['What', 'Which', 'That'],
        correctIndex: 0,
        explanation: '"What I can tell you is" is the fixed bridging phrase — "what" introduces the content clause, acting as the subject of "can tell you is." "What I can tell you" = the thing I am able to tell you. This structure is a noun clause starting with "what" (used as subject): "What I know is...", "What I want to say is...", "What matters here is..." "Which I can tell you is" is grammatically awkward — "which" would need a clear antecedent noun. "That I can tell you is" reverses the natural English order. The phrase "what I can tell you is" has become a media-training formula precisely because it is grammatically smooth, sounds cooperative, and gives the speaker complete control over what follows the "is."',
      },
      {
        sentence: '"We take it one game at a time." This is a classic football _____ — overused, but that is exactly why it is effective in an interview."',
        options: ['cliché', 'soundbite', 'bridge'],
        correctIndex: 0,
        explanation: '"Cliché" is correct — an overused phrase that has become predictable. "We take it one game at a time" is the archetypal football cliché: every fan, journalist, and player has heard it thousands of times. Its effectiveness in an interview is precisely its overuse — it has been said so many times that it generates no news. A "soundbite" is a short memorable phrase designed to be quoted — and while clichés can be soundbites, the key characteristic here is overuse as a shield, not memorability. A "bridge" is a technique (acknowledge + redirect) — "one game at a time" is the content of the answer, not the structural technique. The distinction matters: clichés are the vocabulary; bridging is the technique.',
      },
      {
        sentence: '"Any comment about the referee\'s decision tonight would just _____ the fire — I\'m not going to go there."',
        options: ['fuel', 'light', 'start'],
        correctIndex: 0,
        explanation: '"Fuel the fire" is the fixed idiom — to add to an already burning controversy, making it bigger. "Any comment would fuel the fire" = saying anything would give the story more energy and attention. "Fuel" is the specific verb in this idiom — fuel is what keeps a fire burning. "Light the fire" = to start the fire — but the fire is already burning (the controversy already exists); you would be adding fuel to it, not starting it. "Start the fire" = the same — the controversy is already there. "Fuel the fire" is sometimes extended to "add fuel to the fire" — the player\'s comment would be the fuel that keeps the existing controversy alive and growing.',
      },
      {
        sentence: '"There is no such thing as truly _____ the record in professional football today — assume everything you say can be published."',
        options: ['off', 'out of', 'beyond'],
        correctIndex: 0,
        explanation: '"Off the record" is the fixed phrase — information shared privately with a journalist understood not to be published. "Off the record" = not for attribution, not for publication. "Out of the record" and "beyond the record" are not standard English phrases. The idiom is specifically "off" — "off the record" vs. "on the record" (officially stated and attributable). The lesson point here is important: "off the record" has become increasingly meaningless in the social media era — a comment made to one journalist can be photographed, shared, or repeated within minutes. Modern media training teaches: "There is no such thing as off the record. If you would not want it published, do not say it, anywhere, to anyone in a media context."',
      },
      {
        sentence: 'Which response to "Are you happy at the club?" best demonstrates media training?',
        options: [
          '"Honestly? I\'ve been a bit frustrated with my role recently — I feel I deserve more game time."',
          '"Look, I love this club — the fans, the staff, everything about it. I\'m focused on giving my best every time I play and we\'ll see what the future brings."',
          '"I\'m happy here. No issues."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — a masterclass in media-trained response. "Look" (natural opener, sounds relaxed and genuine), "I love this club — the fans, the staff, everything about it" (strong positive statement, nothing specific to question), "focused on giving my best every time I play" (work ethic statement — uncontroversial), "we\'ll see what the future brings" (vague about the future without saying "never leaving"). The phrase "we\'ll see what the future brings" is particularly skilled — it is hopeful and open, says absolutely nothing about the transfer situation, and cannot be quoted as either a confirmation or a denial. A is a PR disaster — it confirms unhappiness, mentions game time frustration, and will generate three negative headlines. C is too short and defensive — "no issues" actually implies there might be issues.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use media training vocabulary and techniques to give the most professional responses.',
      items: [
        {
          customerLine: 'Explain why football clichés are actually a sophisticated communication strategy rather than laziness.',
          options: [
            '"Football clichés are used because players don\'t want to say something wrong. By using familiar phrases, they stay safe and avoid controversy."',
            '"Football clichés are one of the most sophisticated defensive communication strategies available, and misunderstanding them as laziness misses the point entirely. A well-chosen cliché is a precision tool: it sounds cooperative and engaged — the player is answering fluently, for as long as the journalist requires — while delivering zero usable content. \'We take it one game at a time\' is not a thought. It is a shield. The journalist has their question answered; the player has said nothing that can be headlined, quoted against them, or turned into a controversy. The skill is in delivery: a cliché delivered with warmth, eye contact, and apparent sincerity sounds like a genuine answer even to an experienced journalist. The player who can do this fluently — answering for five minutes and saying nothing — has mastered one of the most valuable professional communication skills in public life, not just in football."',
            '"Clichés are safe because they\'re familiar. When players say \'one game at a time\' or \'the lads have been brilliant\', journalists know there\'s no story and move on. That\'s the strategy — keep the interview boring so there\'s nothing to report."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — reframes clichés as precision tools with analytical depth. "Sounds cooperative and engaged while delivering zero usable content" (the key insight), "shield" metaphor, "journalist has their question answered; the player has said nothing that can be headlined" (the dual achievement), "delivered with warmth, eye contact, and apparent sincerity sounds like a genuine answer even to an experienced journalist" (the execution skill), "answering for five minutes and saying nothing — one of the most valuable professional communication skills" (the conclusion). A and C both identify the protective function but miss the sophistication of the delivery skill and the precision with which clichés are chosen and executed.',
        },
        {
          customerLine: 'How should a player handle a question about a controversial refereeing decision immediately after the match?',
          options: [
            '"The player should be honest — if the referee made a mistake, say so. Fans and journalists respect players who are direct about what happened."',
            '"The immediate post-match moment is the highest-risk media scenario for refereeing questions, because the player has maximum emotional investment and minimum reflection time. The professional approach: acknowledge the emotion without directing it at the official. \'Look, I\'m obviously disappointed with the result — but tonight I\'m focused on the team\'s effort, which was exceptional.\' This acknowledges the emotional reality without commenting on the decision. If pressed: \'I\'m not going to comment on specific decisions tonight — I\'ll need some time to reflect and watch it back.\' Delay is a legitimate strategy: time genuinely changes perspective, and the comment you do not make in the tunnel cannot create tomorrow\'s headline. The golden rule: any comment that criticises a named referee by name will be escalated by the journalist, published prominently, and potentially result in an FA charge. The cost of that comment is always greater than the satisfaction of making it."',
            '"The player should stay neutral — say something like \'I don\'t want to talk about the referee tonight, my focus is on the team.\' Avoid any specific comment on the decision and move on quickly to something positive."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analyses the specific risk and gives the precise strategy with examples. "Highest-risk media scenario — maximum emotional investment and minimum reflection time" (why this moment is dangerous), "acknowledge emotion without directing it at the official" (the strategy), specific example of what to say with two levels of response (initial + if pressed), "delay is a legitimate strategy" (an insight many people miss), "any comment criticising a named referee will be escalated, published prominently, potentially result in an FA charge" (the specific consequence), "the cost is always greater than the satisfaction" (the key professional calculus). A advocates direct honesty — dangerous advice that ignores the regulatory and reputational consequences. C is correct in direction but lacks the strategic depth and examples of B.',
        },
        {
          customerLine: 'Explain the bridging technique — how does it work and why is it effective?',
          options: [
            '"Bridging means you acknowledge the journalist\'s question and then move to your own message. It allows you to answer without actually answering what was asked."',
            '"Bridging is the central technique of professional media communication — and it works because it satisfies two simultaneous needs that are in conflict: the journalist needs to feel their question has been addressed, and the player needs to control what information they share. The bridge resolves this by acknowledging the question (giving the journalist the respect of a response), using a transition phrase (\'What I can tell you is...\', \'What I\'d say is...\', \'What I would focus on is...\'), then delivering the preferred message. The critical skill is the bridge phrase — it must feel like a natural continuation of engagement with the question, not an obvious change of subject. A clumsy bridge sounds evasive; a smooth one sounds cooperative. \'That\'s a fair question — what I would focus on is how we respond as a team\' is smooth. \'I\'m not talking about that — what I want to say is...\' is clumsy. The journalist knows you bridged, but if it is done well, they cannot call you evasive without seeming aggressive themselves."',
            '"The bridging technique works like this: first, say something about the question to show you heard it. Then use a phrase like \'what I can tell you is\' to move to your message. The journalist gets an acknowledgement and you get to say what you want. It\'s the most important media training skill."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analyses why bridging works by identifying the conflict it resolves. "Satisfies two simultaneous needs in conflict — journalist needs acknowledgement, player needs to control content" (the insight that explains the technique\'s purpose), "the bridge phrase must feel like natural continuation — not an obvious change of subject" (the execution challenge), smooth vs. clumsy bridge examples with specific language, "the journalist knows you bridged, but if done well, they cannot call you evasive without seeming aggressive themselves" (the most sophisticated point). A and C both describe the structure of bridging accurately but neither explains why it is effective — what conflict it resolves and why the execution quality matters so much.',
        },
        {
          customerLine: 'How has social media changed the challenges of media training for professional footballers?',
          options: [
            '"Social media means players now communicate directly with fans — and they can make mistakes publicly very easily. Media training has had to adapt to cover social media as well as traditional press."',
            '"Social media has fundamentally transformed the risk landscape for media training, because it has eliminated the intermediary between the player and their words reaching the public. In traditional media, a journalist receives a comment, decides whether it is a story, writes it up, and an editor decides whether to publish — giving the player hours or days of distance from an unguarded moment. Social media removes all of this: a player\'s post reaches millions in seconds, without any filter, and cannot be fully recalled once published. This changes the risk calculation entirely: the post-match tweet written in raw emotion, the frustrated reply to a critic at midnight, the retweet of a political position — all carry the same immediate, permanent, public consequence. Modern media training must cover: never post in the heat of emotion, understand that \'like\' activity is monitored, deleted posts are not gone, and that a direct message to one person can be screenshotted. The player\'s digital footprint is now their full media presence, not just the press conference camera."',
            '"Social media is now the biggest media training challenge. Players can post directly to millions of followers without any filter. A single tweet written in anger can end a career or create a scandal. Players need to think before posting — and ideally have a social media manager checking content before it goes live."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — identifies the structural change (removal of intermediary) as the central insight. "Eliminated the intermediary between the player and their words reaching the public" (the key structural change), the full traditional media filter chain described (journalist → decision → write → editor → publish = hours of distance), "social media removes all of this — seconds, without filter, cannot be recalled" (the contrast), specific examples of risk (post-match tweet, reply to critic, retweet of political position), specific modern media training rules (never post in heat, likes are monitored, deleted posts exist), "digital footprint is now their full media presence, not just the press conference camera" (the culminating insight). A and C both capture the surface challenge without the structural analysis of why social media is fundamentally different from traditional media risk.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three media training errors in this press conference transcript. Find them.',
      dialogue: [
        { speaker: 'Journalist', text: '"Ronaldo — there are reports you\'ve had a disagreement with the manager. Is that true?"' },
        { speaker: 'Ronaldo', text: '"No comment. That\'s a private matter."' },
        { speaker: 'Journalist', text: '"Sofia — your form has dropped in the last month. What\'s going wrong?"' },
        { speaker: 'Sofia', text: '"That\'s a fair question. I\'ll be honest — I\'ve been struggling with my positioning in the press and I think the manager\'s system hasn\'t been working for me personally. I\'m working on it."' },
        { speaker: 'Journalist', text: '"Ronaldo — there are reports linking you with a summer move. Can you deny it?"' },
        { speaker: 'Ronaldo', text: '"I can absolutely deny it — I\'m never leaving this club. I\'ll be here until my contract ends and I\'ll sign another one after that. I love this place."' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: '"No comment. That\'s a private matter."',
          correction: '"Look, I\'m not going to comment on speculation about internal matters — what I will say is that the dressing room is fully united and we\'re all focused on the next game."',
          explanation: '"No comment" is one of the cardinal rules of media training: NEVER say "no comment." It implies there is something to hide — it confirms that the question has hit a sensitive area and makes it a bigger story. "That\'s a private matter" only adds fuel by confirming sensitivity. The professional alternative: acknowledge the question without confirming the premise ("I\'m not going to comment on speculation"), add a positive counter-narrative ("the dressing room is fully united"), and bridge to a safe message ("focused on the next game"). "No comment" generates the headline "Ronaldo refuses to deny rift with manager" — far worse than a smooth deflection.',
        },
        {
          lineIndex: 3,
          incorrectText: '"I think the manager\'s system hasn\'t been working for me personally."',
          correction: '"I\'m always looking to improve — what I can say is I\'m working hard in training and I\'m confident the performances will follow."',
          explanation: 'Criticising the manager\'s system publicly — even framing it as a personal opinion — is one of the most damaging things a player can do in a press conference. "The manager\'s system hasn\'t been working for me personally" will be headlined as "Sofia criticises manager\'s tactics" and will damage both the player-manager relationship and the player\'s professional reputation. The professional rule: never criticise the manager, the system, or any team structure publicly. "I\'ve been struggling with my positioning" is acceptable (self-critical), but "the manager\'s system hasn\'t been working" crosses into criticism of others — always redirect to personal improvement and forward momentum.',
        },
        {
          lineIndex: 5,
          incorrectText: '"I can absolutely deny it — I\'m never leaving this club. I\'ll be here until my contract ends and I\'ll sign another one after that."',
          correction: '"There\'s always going to be speculation at this time of year — what I can tell you is I\'m fully committed to this club right now and my focus is entirely on our next game."',
          explanation: 'Two media training errors in one answer. First: saying "never" — "I\'m never leaving this club" is a hostage to fortune. Circumstances change: the club may sell you, the relationship may break down, a better opportunity may arise. "Never" becomes a broken promise that journalists will return to repeatedly. Second: over-committing on specific future plans ("I\'ll be here until my contract ends and I\'ll sign another one after that") — this is too specific and too promising. If the contract is not renewed, it becomes a story about a promise broken. The professional approach: acknowledge the question, normalise the speculation, redirect to current commitment — but never use "never" and never make specific promises about the future.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each media training analysis using precise vocabulary and communication strategies.',
      items: [
        {
          customerLine: 'Explain what makes a good football soundbite — and give an example of one.',
          salespersonStart: 'A great football soundbite achieves something that looks impossible — it gives journalists a headline while telling them nothing they can use against the player —',
          suggestedCompletion: 'A great football soundbite achieves something that looks impossible — it gives journalists a headline while telling them nothing they can use against the player — and the best ones have been quoted so many times they have entered football culture as universal phrases. The characteristics of a perfect soundbite: short (three to five words ideally), emotionally resonant (it captures a feeling that everyone can identify with), forward-looking (focused on next rather than dwelling on past), and blank enough that it cannot be interpreted in a damaging way. "We go again" is perhaps the finest modern example: it captures collective resilience after any result, positive or negative; it is optimistic without being arrogant; it says nothing specific about any player, decision, or incident; and it is quotable as a headline ("Ronaldo: \'We go again\' after defeat"). The player who can generate two or three of these in a single press conference has mastered the art of productive meaninglessness — the highest form of media communication.',
        },
        {
          customerLine: 'How should a player prepare for a post-match press conference after a controversial 2-2 draw that included a red card and a disputed penalty?',
          salespersonStart: 'Preparing for a post-match press conference with multiple controversial incidents requires specific preparation — not improvisation —',
          suggestedCompletion: 'Preparing for a post-match press conference with multiple controversial incidents requires specific preparation — not improvisation — because you know exactly what you are about to be asked, and the answers must be ready before you sit down. In the tunnel or dressing room before the conference, the player mentally scripts responses to each likely question. The red card: "I haven\'t seen it back yet — I need to look at it properly before I comment." The disputed penalty: "I\'m not going to comment on individual decisions tonight — we move on." The result: "We\'re disappointed — we believe we deserved more. But we take responsibility as a team." What not to do: answer any controversial question immediately, in detail, with emotion. The phrases "I haven\'t seen it back yet," "I need a bit of time to reflect," and "we\'ll look at it properly" are all legitimate delay strategies — they sound cooperative while protecting the player from saying something in the heat of the moment that creates a worse story than the match itself.',
        },
        {
          customerLine: 'Describe the difference between a player who is "media-trained" and one who is "genuine" — is authenticity still possible?',
          salespersonStart: 'The tension between media training and authenticity is one of the most interesting questions in professional communication —',
          suggestedCompletion: 'The tension between media training and authenticity is one of the most interesting questions in professional communication — and the binary between "media-trained" and "genuine" is less clear than it appears. Media training does not prevent authenticity; it channels it. A player can be genuinely warm, funny, honest about their feelings, proud of their performance, and visibly emotional — while still using bridging techniques, avoiding the cardinal mistakes, and staying in control of what they reveal. The player who cries after a cup win and says "this means everything to me" is authentic. The player who refuses to confirm a transfer with "I\'m not going to comment on speculation — what I will say is I love this club" is also authentic — they are genuinely not commenting, and they do express genuine love for the club. The problem is only when media training produces robotic, identical-sounding answers with no warmth or personality — where every player sounds like they are reading from the same script. The best media-trained players are indistinguishable from genuine ones: they are in control of their message and still entirely themselves. That is the goal.',
        },
        {
          customerLine: 'Analyse why the post-match comments of a losing manager are so much harder to navigate than those of a winning one.',
          salespersonStart: 'The winning manager\'s press conference is almost always straightforward — the challenge is the losing one, and it requires a completely different language strategy —',
          suggestedCompletion: 'The winning manager\'s press conference is almost always straightforward — the challenge is the losing one, and it requires a completely different language strategy — because every question is designed to identify blame, expose weakness, or provoke an emotional reaction. The journalist asks about the red card because they want the manager to criticise the referee or the player. They ask about the dropped points because they want an acknowledgement of crisis. They ask about the team selection because they want the manager to either defend an unpopular decision or admit a mistake. In each case, the manager must navigate between three traps: excessive defensiveness ("everything was fine, nothing needs to change"), excessive criticism ("we were terrible, multiple players let us down"), and dishonesty ("the result doesn\'t reflect the performance" when it clearly does). The most effective losing manager press conferences are characterised by: accepting responsibility collectively ("we didn\'t do enough as a team"), being specific about what needs to improve without naming individuals ("our second-half defensive shape was poor"), and quickly establishing a forward narrative ("we have a chance to respond on Thursday"). The language of controlled accountability — honest enough to be credible, diplomatic enough to protect relationships.',
        },
      ],
    },
  },
};
