import { Lesson } from '@/types/lesson';

export const talkingAboutYourTeam: Lesson = {
  slug: 'talking-about-your-team',
  title: 'Talking About Your Team',
  subtitle: 'Fan identity — "My team is..." / "I support..."',
  level: 'A1-A2',
  description: 'Learn how to talk about which football team you support — using "I support...", "My team is...", "We play in..." — and the vocabulary of fan identity: supporter, colours, badge, kit, rival.',
  heroImage: '/images/talking-about-your-team-hero.png',

  vocabulary: [
    {
      word: 'SUPPORT',
      partOfSpeech: 'verb',
      definition: 'To follow and cheer for a team as a fan.',
      example: 'I support Barcelona — I have done since I was a child.',
      imageSlug: '/images/talking-about-your-team-support.png',
    },
    {
      word: 'SUPPORTER',
      partOfSpeech: 'noun',
      definition: 'A fan who follows and cheers for a team.',
      example: 'Thousands of supporters travelled to the away match.',
      imageSlug: '/images/talking-about-your-team-supporter.png',
    },
    {
      word: 'COLOURS',
      partOfSpeech: 'noun',
      definition: 'The official colours of a football club — shown on the kit and badge.',
      example: 'Our team\'s colours are blue and white.',
      imageSlug: '/images/colours.png',
    },
    {
      word: 'BADGE',
      partOfSpeech: 'noun',
      definition: 'The symbol or crest of a football club, shown on the shirt.',
      example: 'I kissed the badge when I scored — I love this club!',
      imageSlug: '/images/talking-about-your-team-badge.png',
    },
    {
      word: 'RIVAL',
      partOfSpeech: 'noun',
      definition: 'A team that is the main competitor or enemy of another team.',
      example: 'We always want to beat our rivals — the local derby is the biggest game.',
      imageSlug: '/images/talking-about-your-team-rival.png',
    },
    {
      word: 'DERBY',
      partOfSpeech: 'noun',
      definition: 'A match between two rival teams from the same city or area.',
      example: 'The city derby is the most important match of the season.',
      imageSlug: '/images/talking-about-your-team-derby.png',
    },
    {
      word: 'SEASON',
      partOfSpeech: 'noun',
      definition: 'The period of the year when football matches are played.',
      example: 'We are top of the league halfway through the season.',
      imageSlug: '/images/season.png',
    },
    {
      word: 'LOYALTY',
      partOfSpeech: 'noun',
      definition: 'Supporting your team through good times and bad times.',
      example: 'True loyalty means supporting your team even when they lose.',
      imageSlug: '/images/talking-about-your-team-loyalty.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'I SUPPORT...',
      definition: 'The standard way to say which football team you follow.',
      example: 'I support Arsenal — have done for twenty years.',
      imageSlug: '/images/i-support.png',
    },
    {
      phrase: 'MY TEAM IS...',
      definition: 'Another way to say which team you follow.',
      example: 'My team is Liverpool — the greatest club in England!',
      imageSlug: '/images/my-team-is.png',
    },
    {
      phrase: 'WE PLAY IN...',
      definition: 'How fans describe the league or competition their team plays in.',
      example: 'We play in the Premier League — the best league in the world.',
      imageSlug: '/images/we-play-in.png',
    },
    {
      phrase: 'WHO DO YOU SUPPORT?',
      definition: 'The standard question to ask someone which football team they follow.',
      example: 'Who do you support? I didn\'t know you liked football!',
      imageSlug: '/images/who-do-you-support.png',
    },
    {
      phrase: 'LOCAL DERBY',
      definition: 'A match between two nearby rival clubs — often the most passionate match of the season.',
      example: 'It\'s the local derby on Saturday — the whole city stops for this match.',
      imageSlug: '/images/local-derby.png',
    },
    {
      phrase: 'THROUGH AND THROUGH',
      definition: 'Completely and totally — used to express total loyalty to a team.',
      example: 'I\'m a City fan through and through — good times and bad.',
      imageSlug: '/images/through-and-through.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo, which team do you [[support:to follow and cheer for a team as a fan]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I support City — I\'m a City [[supporter:a fan who follows and cheers for a team]] through and through! My team is City.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What are City\'s [[colours:the official colours of a football club]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Blue and white. And look — their [[badge:the symbol or crest of a football club]] is on every shirt. I love that badge.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Which [[season:the period of the year when matches are played]] are you excited about this year?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'This season we could win the league! We play in the Premier League — the best in the world.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Do you have a [[rival:a team that is the main competitor or enemy]]? An arch-enemy?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'United! They are our biggest rivals. The [[derby:a match between two rival teams from the same city]] between City and United is the biggest match of the year.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What if City lose? Do you stop supporting them?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Never! That is what [[loyalty:supporting your team through good and bad times]] means. Good times and bad, I always support my team.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I like that. So — who do you support?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I support City! Always City. Now — who do YOU support, Sofia?',
    },
  ],

  matchingExercise: [
    { word: 'SUPPORT', definition: 'To follow and cheer for a team as a fan' },
    { word: 'SUPPORTER', definition: 'A fan who follows and cheers for a team' },
    { word: 'COLOURS', definition: 'The official colours of a football club' },
    { word: 'BADGE', definition: 'The symbol or crest of a football club, shown on the shirt' },
    { word: 'RIVAL', definition: 'A team that is the main competitor or enemy of another team' },
    { word: 'DERBY', definition: 'A match between two rival teams from the same city or area' },
    { word: 'SEASON', definition: 'The period of the year when football matches are played' },
    { word: 'LOYALTY', definition: 'Supporting your team through good times and bad times' },
  ],

  fillBlankExercise: [
    { before: 'I', answer: 'support', after: 'Barcelona — I have done since I was a child.' },
    { before: 'Thousands of', answer: 'supporters', after: 'travelled to the away match.' },
    { before: 'Our team\'s', answer: 'colours', after: 'are red and white.' },
    { before: 'He kissed the', answer: 'badge', after: 'after scoring the winning goal.' },
    { before: 'United are our biggest', answer: 'rivals', after: '— we always want to beat them.' },
    { before: 'The city', answer: 'derby', after: 'is the most important match of the season.' },
    { before: 'We are top of the league halfway through the', answer: 'season', after: '.' },
    { before: 'True', answer: 'loyalty', after: 'means supporting your team even when they lose.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which team does Ronaldo support?',
      options: ['United', 'City', 'Arsenal'],
      correctIndex: 1,
    },
    {
      question: 'What are City\'s colours?',
      options: ['Red and white', 'Green and gold', 'Blue and white'],
      correctIndex: 2,
    },
    {
      question: 'What is a derby?',
      options: ['A type of boot worn by players', 'A match between two rival teams from the same city', 'The biggest trophy in football'],
      correctIndex: 1,
    },
    {
      question: 'What does Ronaldo mean by "through and through"?',
      options: ['He sometimes supports other teams', 'He is completely and totally loyal to City', 'He watches through the tunnel'],
      correctIndex: 1,
    },
    {
      question: 'Who are City\'s biggest rivals?',
      options: ['Arsenal', 'United', 'Barcelona'],
      correctIndex: 1,
    },
    {
      question: 'What does Ronaldo say loyalty means?',
      options: ['Only supporting the team when they win', 'Supporting the team through good times and bad', 'Buying the most expensive ticket'],
      correctIndex: 1,
    },
    {
      question: 'Which league does City play in?',
      options: ['La Liga', 'Bundesliga', 'The Premier League'],
      correctIndex: 2,
    },
    {
      question: 'What does Ronaldo ask Sofia at the end?',
      options: ['What are City\'s colours?', 'Who do you support?', 'Do you have a season ticket?'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence about supporting a team.',
    items: [
      {
        sentence: '_____ do you support? Tell me your team!',
        options: ['Which', 'Who', 'What'],
        correctIndex: 1,
        explanation: '"Who" is correct. The standard question is "Who do you support?" In English, we say "who" for teams, not "which" or "what." The full phrase is: "Who do you support?" / "I support [team name]."',
      },
      {
        sentence: 'I\'m a United fan _____ and through — I have supported them my whole life.',
        options: ['always', 'through', 'from'],
        correctIndex: 1,
        explanation: '"Through" is correct. The phrase is "through and through" — it means completely and totally. "I\'m a United fan through and through" means there is no doubt about your loyalty to the team.',
      },
      {
        sentence: 'The city _____ is the biggest match of the year.',
        options: ['season', 'derby', 'badge'],
        correctIndex: 1,
        explanation: '"Derby" is correct. A derby is a match between two local rival teams. It is always the most passionate and important match of the season because the result matters so much to both sets of fans.',
      },
      {
        sentence: 'Their _____ are red and white — you can see the colours on every shirt.',
        options: ['badge', 'loyalty', 'colours'],
        correctIndex: 2,
        explanation: '"Colours" is correct. A team\'s colours are the main colours of their kit and badge. When fans talk about their team\'s colours, they mean the colours that represent the club.',
      },
      {
        sentence: 'The player kissed the _____ on his shirt after scoring.',
        options: ['badge', 'season', 'colours'],
        correctIndex: 0,
        explanation: '"Badge" is correct. The badge is the crest of the club printed on the shirt. Players sometimes kiss the badge to show their love for the club — especially after scoring an important goal.',
      },
      {
        sentence: 'True _____ means supporting your team even when they are losing.',
        options: ['derby', 'loyalty', 'rival'],
        correctIndex: 1,
        explanation: '"Loyalty" is correct. Loyalty in football means you support your team through good times and bad — you do not stop supporting them just because they are losing or going through a difficult period.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. One person asks about football teams. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Friend: Who do you support?',
          options: [
            'You: I support City — have done since I was a child.',
            'You: I play in the Premier League.',
            'You: The match is on Saturday at three o\'clock.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Who do you support?" asks which team you are a fan of. The correct response uses "I support [team name]" and you can add extra detail like how long you have supported them.',
        },
        {
          customerLine: 'Friend: What are your team\'s colours?',
          options: [
            'You: We play in the Premier League.',
            'You: Our colours are blue and white.',
            'You: Our rivals are United.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The question is about the team\'s colours — the answer should give the actual colours. A talks about the league and C talks about rivals — neither answers the question about colours.',
        },
        {
          customerLine: 'Friend: What is a derby?',
          options: [
            'You: It\'s a trophy you win at the end of the season.',
            'You: It\'s a match between two rival teams from the same city or area.',
            'You: It\'s the badge on a player\'s shirt.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A derby is a match between two local rival teams. It is usually the most passionate and important match of the season. The word is used worldwide, but it comes from English football.',
        },
        {
          customerLine: 'Friend: Do you support United?',
          options: [
            'You: Never! I\'m a City fan through and through.',
            'You: United play in blue and white.',
            'You: The derby is on Saturday.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. The friend asked if you support United. The right response clearly says no and explains which team you actually support. "Through and through" shows total loyalty and makes the answer more natural and expressive.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong fan identity words in this conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Who do you loyal?' },
        { speaker: 'Ronaldo', text: 'I support City! Always City — through and through.' },
        { speaker: 'Sofia', text: 'What are City\'s rivals?' },
        { speaker: 'Ronaldo', text: 'Blue and white. I love those colours.' },
        { speaker: 'Sofia', text: 'And City\'s biggest supporter is United, right?' },
        { speaker: 'Ronaldo', text: 'Yes! The city badge between City and United is the biggest match of the year.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'Who do you loyal?',
          correction: 'Who do you support?',
          explanation: '"Who do you support?" is the correct question. "Loyal" is an adjective — you cannot say "who do you loyal?" You SUPPORT a team. Loyalty is the noun for the feeling of being a faithful fan.',
        },
        {
          lineIndex: 4,
          incorrectText: 'City\'s biggest supporter is United',
          correction: 'City\'s biggest rival is United',
          explanation: 'United is City\'s biggest RIVAL, not supporter. A supporter is a fan who cheers for the team. A rival is a competitor or enemy. United fans support United — they do not support City!',
        },
        {
          lineIndex: 5,
          incorrectText: 'the city badge',
          correction: 'the city derby',
          explanation: 'The match between two rival city teams is a DERBY, not a badge. A badge is the crest on the shirt. The local DERBY is the most important match between the two rival clubs.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using team identity language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: How do you decide which team to support?',
          salespersonStart: 'Ronaldo: Most people support the team their family follows.',
          suggestedCompletion: 'Your father or older brother might support a team and you start following them too. Sometimes you support the local team — the one from your city or town. Once you choose, loyalty means you stay with that team for life, through good times and bad.',
        },
        {
          customerLine: 'Sofia: Why is the derby so important?',
          salespersonStart: 'Ronaldo: Because it\'s more than just a football match.',
          suggestedCompletion: 'It is a battle between two rival teams from the same city. Every supporter in the city cares about the result — even people who do not usually watch football. The atmosphere is incredible and the result is talked about for weeks afterwards.',
        },
        {
          customerLine: 'Sofia: What does kissing the badge mean?',
          salespersonStart: 'Ronaldo: It means the player loves the club.',
          suggestedCompletion: 'When a player scores an important goal, they sometimes kiss the badge on their shirt. It is a way of saying "I love this club and I\'m proud to play for it." Fans love this gesture because it shows the player cares as much as they do.',
        },
        {
          customerLine: 'Sofia: Is it OK to support two teams?',
          salespersonStart: 'Ronaldo: Most fans say no — loyalty means one team.',
          suggestedCompletion: 'True supporters believe you can only have one team. You support your team through good times and bad — you don\'t change when things go wrong. Some people follow a big international team as well as their local team, but their first love is always their main club.',
        },
      ],
    },
  },
};
