import { Lesson } from '@/types/lesson';

export const footballHumour: Lesson = {
  slug: 'football-humour',
  title: 'Football Humour',
  subtitle: 'Unit 3 — Football Idioms & Culture',
  level: 'B1-B2',
  description: 'Football culture is full of wit, wordplay, and banter. From terrace chants to tabloid headlines, humour is woven into the game. This lesson explores the language of football comedy — puns, irony, dry wit, and banter.',
  heroImage: '/images/football-humour.png',

  warmUp: {
    questions: [
      'Have you ever laughed at a football joke, chant, or headline? What made it funny?',
      'How important is humour in football culture — on the terraces, in the media, or among fans?',
      'Can you think of a football pun or a funny headline you have seen or heard?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Wordplay, Puns, and Double Meaning',
    description: 'A pun is a joke that uses a word with two meanings, or two words that sound similar. Football headlines often use puns because they are attention-grabbing and memorable. Understanding puns requires knowledge of both the literal meaning (the actual word) and the implied meaning (the joke). Irony means saying the opposite of what you mean. Dry humour is understatement — making something funny by describing it very calmly when the situation is dramatic. Banter is playful teasing between people who know each other well. Headlines often remove articles and auxiliary verbs for brevity. "CITY SEAL TITLE" means "Manchester City have sealed the title". This compressed style is called "headline English" and is common in British tabloids.',
    positiveExamples: [
      {
        sentence: 'SPURS IN A SPIN — newspaper headline after Tottenham\'s manager is sacked.',
        note: 'pun on "spin" (out of control) and "Spurs" (a spinning motion)',
      },
      {
        sentence: '"He\'s not the quickest, is he?" — said after a striker is outrun by the goalkeeper.',
        note: 'understatement / dry humour',
      },
      {
        sentence: '"Oh, great defending." — said sarcastically when a defender completely fails.',
        note: 'irony / sarcasm',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'BANTER',
      partOfSpeech: 'noun',
      definition: 'Playful, friendly teasing between people who know each other — an important part of dressing-room and fan culture.',
      example: '"The banter between the two strikers was legendary — they teased each other relentlessly but were best friends off the pitch."',
      imageSlug: '/images/banter.png',
    },
    {
      word: 'TERRACE WIT',
      partOfSpeech: 'phrase',
      definition: 'The sharp, funny, sometimes cutting remarks made by fans on the terraces — a celebrated part of British football culture.',
      example: '"The terrace wit at that ground is legendary — they\'ll have a song about you within five minutes of you making a mistake."',
      imageSlug: '/images/terrace-wit.png',
    },
    {
      word: 'PUN',
      partOfSpeech: 'noun',
      definition: 'A joke using a word with two meanings, or two words that sound similar — very common in football headlines.',
      example: '"The back-page headline read: UNITED WE FALL — a pun on United\'s poor form and the phrase \'united we stand\'."',
      imageSlug: '/images/pun.png',
    },
    {
      word: 'WIND UP',
      partOfSpeech: 'noun / verb',
      definition: 'To tease or provoke someone deliberately — or the act of doing so. Common between rival fans and teammates.',
      example: '"He knew exactly what he was doing — winding up the opposition fans with every goal celebration."',
      imageSlug: '/images/wind-up.png',
    },
    {
      word: 'DRY HUMOUR',
      partOfSpeech: 'phrase',
      definition: 'Humour delivered in a calm, deadpan way — understating something dramatic or funny without showing obvious amusement.',
      example: '"After losing seven-nil, the manager said: \'We created some good chances in the first ten minutes.\' Pure dry humour."',
      imageSlug: '/images/dry-humour.png',
    },
    {
      word: 'IRONY',
      partOfSpeech: 'noun',
      definition: 'Saying the opposite of what you mean — often to criticise or mock, with the real meaning being the reverse of what is said.',
      example: '"The irony of the manager who built his career on counter-attacks being beaten by a last-minute counter — the crowd loved it."',
      imageSlug: '/images/irony.png',
    },
    {
      word: 'CHANT',
      partOfSpeech: 'noun / verb',
      definition: 'A song or rhythmic phrase repeated by fans in unison — sometimes funny, sometimes rude, always loud.',
      example: '"The fans started a chant about the opposition manager — it wasn\'t kind, but it was genuinely witty."',
      imageSlug: '/images/chant.png',
    },
    {
      word: 'HEADLINE',
      partOfSpeech: 'noun',
      definition: 'The title of a newspaper article — in British tabloids, football headlines are famous for puns and wordplay.',
      example: '"KEEPER OF THE FAITH — the headline after the goalkeeper saved three penalties in one match."',
      imageSlug: '/images/headline.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIND UP',
      definition: 'To deliberately tease or provoke someone — knowing it will get a reaction.',
      example: '"The away fans were trying to wind up the home goalkeeper every time he took a goal kick."',
      imageSlug: '/images/wind-up-pv.png',
},
    {
      phrase: 'LAUGH OFF',
      definition: 'To respond to criticism or a difficult situation with humour — treating it as unimportant.',
      example: '"He laughed off the missed penalty in the post-match interview — you have to admire the composure."',
      imageSlug: '/images/laugh-off.png',
},
    {
      phrase: 'PLAY UP TO',
      definition: 'To exaggerate a characteristic for comic or dramatic effect — playing a role for an audience.',
      example: '"He completely played up to the villain role after the red card — waving goodbye to the crowd as he left."',
      imageSlug: '/images/play-up-to.png',
},
    {
      phrase: 'TAKE THE MICKEY',
      definition: 'To mock or make fun of someone — British informal expression for teasing.',
      example: '"The commentator was taking the mickey out of the manager\'s tracksuit — not exactly professional, but very funny."',
      imageSlug: '/images/take-the-mickey.png',
},
    {
      phrase: 'CRACK UP',
      definition: 'To suddenly burst out laughing — or to make someone laugh.',
      example: '"The manager\'s deadpan answer to the question completely cracked up the press room."',
      imageSlug: '/images/crack-up.png',
},
    {
      phrase: 'SEND UP',
      definition: 'To mock or satirise something — to make fun of it in an exaggerated way.',
      example: '"The fan video sent up the rival manager\'s famous catchphrase and got two million views overnight."',
      imageSlug: '/images/send-up.png',
},
  ],

  onThePitch: {
    instructions: 'Football humour is live, fast, and merciless — these are the moments when wit and banter happen in real time during matches and training.',
    items: [
      {
        cue: 'The nutmeg laugh — when skill becomes comedy',
        meaning: 'A nutmeg on the training pitch is the funniest and most humiliating moment in football. The reaction — laughter, celebration, immediate teasing — is instant and universal.',
        usage: '"OH! He\'s been done! Get him! Get him!" — the training session stops for three seconds while everyone reacts. The player who was nutmegged has two options: laugh along (shows good character) or react with frustration (gets more teasing). The unwritten rule: if you get nutmegged, you laugh first. "The lads were in pieces — the winger nutmegged the defender and the keeper at the same time. Even the manager was laughing." Shared laughter in training is a sign of a healthy team culture.',
        imageSlug: 'otp-nutmeg-laugh',
      },
      {
        cue: 'The keeper\'s commentary — goalkeepers as match narrators',
        meaning: 'Goalkeepers have a unique view of the whole pitch — and the funniest ones provide a running commentary throughout the match, calling out observations, mistakes, and jokes from behind the play.',
        usage: '"The keeper was chatting all game — giving everyone a score out of ten as they walked past. Funny but also useful — he never stopped talking." Keepers say things like: "That\'s not a chance, that\'s a joke of a chance!", "He\'s not gonna score from there — oh, he did. Fair enough." "The keeper kept calling our striker \'the invisible man\' — to be fair, he barely touched the ball." Good keeper banter relaxes defenders and adds a personality to the back line.',
        imageSlug: 'otp-keeper-commentary',
      },
      {
        cue: 'Own goal reactions — the most awkward moment in football',
        meaning: 'An own goal creates a unique social situation on the pitch — the scorer is immediately mortified. How teammates react in the next five seconds reveals team culture.',
        usage: '"He turned and just put his head in his hands — the whole stadium went silent except the away end." Good teammate response: immediate arm around the shoulder, "Forget it — next one. Not your fault." Bad response: looking away, throwing arms up, pointing. "After the own goal, the captain ran straight to him: \'Don\'t worry, we\'ll get it back — it happens.\' That\'s how you keep a team together." The humorous retelling of an own goal always comes later — never in the moment.',
        imageSlug: 'otp-own-goal-reaction',
      },
      {
        cue: 'The "he\'s never gonna let him forget that" moment',
        meaning: 'A specific mistake or event in a match that becomes permanent team mythology — referenced forever in dressing room banter.',
        usage: '"He missed an open goal from two yards — three years later and they\'re still singing about it in training." These moments become team folklore: "Remember when he missed that penalty at Wembley? Still brings it up every Christmas." In the immediate aftermath: stunned silence, then — when the pressure of the game allows — laughter. The player involved knows: this is going in the team mythology. "You\'ll be dining out on that for years" = the mistake becomes a badge of team identity.',
        imageSlug: 'otp-never-forget',
      },
      {
        cue: 'Terrace wit reaching the pitch — hearing the crowd\'s jokes',
        meaning: 'The best terrace chants are witty, topical, and aimed directly at players on the pitch — who can hear them clearly. Players react to clever chants.',
        usage: '"He could hear them singing his name — you could see him smiling as he ran back to the halfway line." Players notice good chants: "The fans came up with a song about his haircut — even he was trying not to laugh." Visiting fans aiming creative chants at home players can genuinely distract them. "The banter from the away end was brilliant — even our lot were appreciating it." Goalkeepers in front of the home end experience the most direct crowd interaction: "The keeper was getting absolutely roasted by the home end for the whole second half."',
        imageSlug: 'otp-terrace-wit',
      },
      {
        cue: 'Referee puns and protests — the art of the funny complaint',
        meaning: 'Players who argue with referees using wit rather than anger are both more likely to be heard and less likely to receive a card. Football humour includes the art of the funny foul protest.',
        usage: '"He said to the referee \'that\'s never a foul — I barely touched him!\' with such disbelief the ref almost laughed." The golden rule: referees respond better to wit than to anger. "He was booking players for arguing but when one of them said \'surely that\'s not a yellow — my grandmother tackles harder than that,\' even the referee smiled." Classic player-to-referee humour: "Where do you want the ball for the free kick? On my foot?" Managers on the touchline use similar tactics: a raised eyebrow and deadpan expression rather than screaming.',
        imageSlug: 'otp-referee-banter',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Leona', speakerColor: 'purple', text: 'The best terrace wit I ever heard was at a lower league match. The striker missed from three yards and someone just said, very quietly: "Oh well, he tried."' },
    { speaker: 'Jamie', speakerColor: 'green', text: 'That\'s perfect dry humour. I love that. No shouting — just devastatingly calm.' },
    { speaker: 'Leona', speakerColor: 'purple', text: 'The opposition fans had a brilliant chant about our manager. I can\'t repeat it here but it was genuinely witty.' },
    { speaker: 'Jamie', speakerColor: 'green', text: 'That\'s good banter if you can actually appreciate the other side\'s creativity. I respect a well-made chant.' },
    { speaker: 'Leona', speakerColor: 'purple', text: 'The headline after that match was brilliant too — they used his surname as a pun. Tabloids are relentless.' },
    { speaker: 'Jamie', speakerColor: 'green', text: 'They are. But I think the humour is part of what makes football different from other sports.' },
    { speaker: 'Leona', speakerColor: 'purple', text: 'Exactly. Where else do you get 40,000 people doing irony together in perfect unison?' },
    { speaker: 'Jamie', speakerColor: 'green', text: 'Only on the terraces. That\'s a special kind of cultural institution.' },
  ],

  matchingExercise: [
    { word: 'Banter', definition: 'Playful, friendly teasing between people who know each other' },
    { word: 'Terrace wit', definition: 'Sharp, funny remarks made by fans — a celebrated part of football culture' },
    { word: 'Pun', definition: 'A joke using a word with two meanings or two similar-sounding words' },
    { word: 'Wind up', definition: 'To deliberately tease or provoke someone for a reaction' },
    { word: 'Dry humour', definition: 'Humour delivered calmly and without obvious amusement — understatement' },
    { word: 'Irony', definition: 'Saying the opposite of what you mean, often to mock or criticise' },
    { word: 'Chant', definition: 'A song or phrase repeated rhythmically by fans in unison' },
    { word: 'Headline', definition: 'A newspaper title — often uses puns and wordplay in British tabloids' },
  ],

  fillBlankExercise: [
    { before: 'The back-page', answer: 'headline', after: 'read: "CITY SLICKERS" after Manchester City\'s dominant performance.' },
    { before: 'He loves', answer: 'dry humour', after: '— he\'ll tease anyone without ever raising his voice or changing his expression.' },
    { before: 'The fans started a', answer: 'chant', after: 'about the opposing striker\'s recent missed penalties — clever but brutal.' },
    { before: 'The', answer: 'irony', after: 'of a manager who hated long balls losing to a late header — the press had a field day.' },
    { before: 'There\'s a brilliant', answer: 'pun', after: 'in the headline — HAMMER TIME after West Ham\'s win over their rivals.' },
    { before: 'The', answer: 'terrace wit', after: 'at that ground is legendary — they\'ll find something funny about you within minutes.' },
    { before: 'The striker knew exactly how to', answer: 'wind up', after: 'the goalkeeper — pointing at the scoreboard after every goal.' },
    { before: 'The', answer: 'banter', after: 'in the dressing room is important — it keeps the mood light and builds team spirit.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A manager says, after a 5-0 defeat: "I thought we showed some good moments in the first minute." This is an example of:',
      options: ['Dry humour', 'A pun', 'Banter', 'A chant'],
      correctIndex: 0,
    },
    {
      question: 'A fan shouts "Great defending!" sarcastically when a defender fails badly. This is an example of:',
      options: ['Irony', 'A pun', 'Terrace wit', 'Banter'],
      correctIndex: 0,
    },
    {
      question: 'A headline reads: "HAMMERED — West Ham lose to Blackpool". What type of wordplay is this?',
      options: ['A pun', 'Dry humour', 'Banter', 'A chant'],
      correctIndex: 0,
    },
    {
      question: 'Two teammates constantly tease each other about their hairstyles and fashion — always friendly and never mean. What is this?',
      options: ['Banter', 'Winding up', 'Irony', 'A send-up'],
      correctIndex: 0,
    },
    {
      question: 'A player deliberately imitates the opposition manager\'s famous hand gesture in his goal celebration. What is he doing?',
      options: ['Winding them up', 'Laughing it off', 'Playing dry humour', 'Showing terrace wit'],
      correctIndex: 0,
    },
    {
      question: 'Thousands of fans sing the same funny, rhythmic song repeatedly. What is this called?',
      options: ['A chant', 'A pun', 'Banter', 'Dry humour'],
      correctIndex: 0,
    },
    {
      question: 'Which of the following is the best example of a football pun?',
      options: ['"UNITED WE FALL — United lose 4-0"', '"MANCHESTER CITY WIN AGAIN"', '"GREAT MATCH AT WEMBLEY"', '"FANS CELEBRATE TITLE WIN"'],
      correctIndex: 0,
    },
    {
      question: 'After being booed all game, a striker scores a winner and winks at the fans. What is this an example of?',
      options: ['Playing up to the crowd', 'Dry humour', 'Terrace wit', 'Irony'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct form of the word or phrase.',
    items: [
      {
        sentence: 'The opposition fans ___ him all game, but he had the last laugh with a late winner.',
        options: ['wound up', 'wind up', 'winding up'],
        correctIndex: 0,
        explanation: '"Wind up" is an irregular phrasal verb in the past tense: wind → wound. "They wound him up all game" — "wound" rhymes with "found", not "kind".',
      },
      {
        sentence: 'The ___ of the manager who banned long balls losing to a last-minute header was lost on nobody.',
        options: ['irony', 'ironic', 'ironically'],
        correctIndex: 0,
        explanation: '"The irony of..." is a fixed structure — the noun "irony" follows the definite article "the". "Ironically" (adverb) would need a different sentence structure.',
      },
      {
        sentence: 'That headline ___ a brilliant pun — "KEEPER OF THE FAITH" after three penalty saves.',
        options: ['was', 'were', 'is'],
        correctIndex: 0,
        explanation: 'Simple past "was" — describing a headline from a specific past event. The subject "that headline" is singular, so "was" (not "were") is required.',
      },
      {
        sentence: 'She ___ the missed penalty brilliantly — joking in the press conference that it had gone in, technically.',
        options: ['laughed off', 'laughed', 'laughing off'],
        correctIndex: 0,
        explanation: 'Simple past — "laughed off" — describing a completed past action. "Laugh off" is a regular phrasal verb: laugh → laughed.',
      },
      {
        sentence: 'The fans\' ___ about the referee lasted for the entire second half.',
        options: ['chant', 'chanting', 'chanted'],
        correctIndex: 0,
        explanation: '"The fans\' chant" — "chant" is the noun here, used as the subject of the sentence. Possessive apostrophe after "fans" (plural) = "fans\'".',
      },
      {
        sentence: 'The ___ humour of his post-match interview made the whole press room laugh.',
        options: ['dry', 'dried', 'drying'],
        correctIndex: 0,
        explanation: '"Dry humour" is a fixed compound phrase — "dry" is an adjective modifying "humour". It does not change form.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the most effective response using the humour technique mentioned.',
      items: [
        {
          customerLine: 'A journalist asks a manager: "How do you feel after losing 6-0?" The manager wants to use dry humour.',
          options: [
            '"We had some excellent moments in the warm-up."',
            '"It was a nightmare from start to finish."',
            '"We are very disappointed with the result."',
            '"The players gave everything and I\'m proud of them."',
          ],
          correctIndex: 0,
          explanation: 'Dry humour means deadpan understatement. "Excellent moments in the warm-up" is the only response that humorously understates a 6-0 defeat. The others are either honest or professional but not funny.',
        },
        {
          customerLine: 'A striker scores after being booed all game. They want to wind up the crowd with their celebration.',
          options: [
            'Cup their ear to the crowd and point at the scoreboard.',
            'Walk quietly back to the centre circle.',
            'Shake hands with the nearest defender.',
            'Sit on the ground and wait for teammates.',
          ],
          correctIndex: 0,
          explanation: 'Cupping the ear to the crowd is the classic "wind up" celebration — it mockingly asks the crowd to speak up. The other options are neutral or professional and would not provoke a reaction.',
        },
        {
          customerLine: 'A tabloid needs a headline after a goalkeeper called "Fields" makes an error. Which is the best pun?',
          options: [
            '"FIELDS FAILS TO STOP EASY SHOT"',
            '"BAD DAY AT THE OFFICE FOR GOALKEEPER"',
            '"KEEPER ERROR COSTS TEAM THREE POINTS"',
            '"GOALKEEPER MAKES MISTAKE IN DEFEAT"',
          ],
          correctIndex: 0,
          explanation: '"FIELDS FAILS" uses alliteration with the keeper\'s name — a classic tabloid device. The other headlines are factual but have no wordplay or wit. A good pun uses the name as part of the joke.',
        },
        {
          customerLine: 'Your friend says the opposing manager looks ridiculous in his tracksuit. You want to "send him up".',
          options: [
            '"He looks like he\'s managing a Sunday league team from 1987."',
            '"I think his tracksuit is quite professional."',
            '"It\'s important to dress appropriately for your role."',
            '"I hadn\'t noticed what he was wearing."',
          ],
          correctIndex: 0,
          explanation: '"Sending up" means exaggerated mockery. "Sunday league team from 1987" paints a comic image — exactly what a send-up does. The other responses are polite, neutral, or dismissive rather than satirical.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The dialogue below contains three errors — wrong vocabulary, incorrect grammar, or misused humour terms. Find and correct them.',
      dialogue: [
        { speaker: 'Nadia', text: 'Did you see that headline? "CITY SEALANT TITLE" — a brilliant pun on their goalkeeper\'s name.' },
        { speaker: 'Ben', text: 'I loved it. And the manager\'s post-match interview was full of banter — very deadpan and understatement.' },
        { speaker: 'Nadia', text: 'He definitely has dry humour. My favourite line was when he said the 5-0 was a "narrow defeat".' },
        { speaker: 'Ben', text: 'Classic ironic. And the fans\' chant about the referee was legendary — they all sang it in perfect unison.' },
        { speaker: 'Nadia', text: 'The wind up before the match was brilliant too — the away fans were winding the goalkeeper since kick-off.' },
        { speaker: 'Ben', text: 'He handled it well though. He laughed them off in the end.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'full of banter — very deadpan and understatement',
          correction: 'full of dry humour — very deadpan',
          explanation: '"Banter" is playful teasing between people, not a deadpan speaking style. The correct term for calm understatement is "dry humour". "Understatement" should be an adjective: "understated".',
        },
        {
          lineIndex: 3,
          incorrectText: 'Classic ironic',
          correction: 'Classic irony',
          explanation: '"Ironic" is an adjective — "That\'s ironic." When used as a noun phrase ("Classic ___"), the noun form "irony" is required: "Classic irony."',
        },
        {
          lineIndex: 4,
          incorrectText: 'winding the goalkeeper since kick-off',
          correction: 'winding up the goalkeeper since kick-off',
          explanation: '"Wind up" is a phrasal verb — the particle "up" cannot be omitted. "Wind the goalkeeper" has a different meaning. The correct form is "winding up the goalkeeper".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each sentence naturally using vocabulary or concepts from this lesson.',
      items: [
        {
          customerLine: 'Demonstrate dry humour by completing a manager\'s post-match quote.',
          salespersonStart: 'After losing six-nil, the manager stood up at the press conference and said, completely calmly:',
          suggestedCompletion: '"We created one or two nice openings early on — I think the result was a little harsh on the lads."',
        },
        {
          customerLine: 'Write a punny tabloid headline for a sacked manager named Bridges.',
          salespersonStart: 'The tabloid headline after the manager called "Bridges" was sacked read:',
          suggestedCompletion: '"BRIDGES BURNED — manager dismissed after worst run in club history."',
        },
        {
          customerLine: 'Complete this fan chant aimed at the goalkeeper.',
          salespersonStart: 'The away fans had a brilliant chant ready — when the goalkeeper touched the ball, they all sang:',
          suggestedCompletion: '"You\'re not very good, you\'re not very good, you\'re not very, not very, not very good!"',
        },
        {
          customerLine: 'Complete this sentence about winding up a defender after a nutmeg.',
          salespersonStart: 'He knew exactly how to wind up the defender — every time he nutmegged him, he would...',
          suggestedCompletion: 'turn and give him a slow round of applause, smiling the whole time.',
        },
      ],
    },
  },
};
