import { Lesson } from '@/types/lesson';

export const techTalkLagTroubleshooting: Lesson = {
  slug: 'tech-talk-lag-troubleshooting',
  title: 'Tech Talk: Lag & Troubleshooting',
  subtitle: 'Explain tech problems and what causes them',
  level: 'B1-B2',
  description:
    'Learn the words and phrases gamers use to describe lag, find the cause of a problem and fix it.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tech-talk-lag-troubleshooting-hero.png',

  vocabulary: [
    {
      word: 'LAG',
      partOfSpeech: 'noun / verb',
      definition: 'A delay between what you do and what you see on screen.',
      example: 'The lag was so bad I couldn\'t move.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-lag.png',
    },
    {
      word: 'PING',
      partOfSpeech: 'noun',
      definition: 'How fast data travels to the game server and back.',
      example: 'My ping is 400, so the game is very slow.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-ping.png',
    },
    {
      word: 'PACKET LOSS',
      partOfSpeech: 'noun',
      definition: 'When some game data gets lost on the way.',
      example: 'Packet loss makes my character jump around.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-packet-loss.png',
    },
    {
      word: 'BANDWIDTH',
      partOfSpeech: 'noun',
      definition: 'How much data your internet can carry at once.',
      example: 'My brother\'s video is using all the bandwidth.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-bandwidth.png',
    },
    {
      word: 'LATENCY',
      partOfSpeech: 'noun',
      definition: 'The delay in an internet connection.',
      example: 'High latency makes my shots arrive late.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-latency.png',
    },
    {
      word: 'BOTTLENECK',
      partOfSpeech: 'noun',
      definition: 'One slow part that slows everything down.',
      example: 'My old router is the bottleneck.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-bottleneck.png',
    },
    {
      word: 'THROTTLE',
      partOfSpeech: 'verb',
      definition: 'To slow something down on purpose.',
      example: 'My internet company may throttle my speed at night.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-throttle.png',
    },
    {
      word: 'TROUBLESHOOT',
      partOfSpeech: 'verb',
      definition: 'To find and fix a problem step by step.',
      example: 'I troubleshoot my internet when the game lags.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-troubleshoot.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'MY CONNECTION KEEPS DROPPING BECAUSE…',
      definition: 'A way to give the reason for a problem.',
      example: 'My connection keeps dropping because the WiFi is weak.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-phrase-connection-dropping.png',
    },
    {
      phrase: 'THAT\'S WHAT\'S CAUSING THE LAG.',
      definition: 'A way to name the cause of the lag.',
      example: 'Your download is huge. That\'s what\'s causing the lag.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-phrase-causing-lag.png',
    },
    {
      phrase: 'HIGH PING LEADS TO RUBBER-BANDING.',
      definition: 'A way to say one problem causes another.',
      example: 'High ping leads to rubber-banding in fast games.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-phrase-rubber-banding.png',
    },
    {
      phrase: 'THE LAG SPIKES WHENEVER…',
      definition: 'A way to say when a problem happens.',
      example: 'The lag spikes whenever someone watches a video.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-phrase-lag-spikes.png',
    },
    {
      phrase: 'AS A RESULT,…',
      definition: 'A way to say what happened because of something.',
      example: 'My router is old. As a result, I lag a lot.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-phrase-packet-loss.png',
    },
    {
      phrase: 'IT\'S PROBABLY YOUR BANDWIDTH — TRY CLOSING BACKGROUND APPS.',
      definition: 'A way to guess the problem and suggest a fix.',
      example: 'Your game is slow? It\'s probably your bandwidth — try closing background apps.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tt-phrase-bandwidth.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'Ugh, the [[lag:a delay between what you do and what you see]] is terrible tonight!',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'What\'s your [[ping:how fast data travels to the server and back]]?',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'It\'s over 300. My connection keeps dropping because someone is watching a movie.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'That\'s what\'s causing the lag. The movie is using all your [[bandwidth:how much data your internet can carry]].',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'You might have [[packet loss:when game data gets lost on the way]] too. Your character keeps jumping.',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'How can I [[troubleshoot:find and fix a problem step by step]] it?',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'Try a cable instead of WiFi. Your old router could be the [[bottleneck:one slow part that slows everything down]].',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'Okay, I plugged in a cable. As a result, my ping is 30 now. Thanks!',
    },
  ],

  matchingExercise: [
    { word: 'LAG', definition: 'A delay between action and screen' },
    { word: 'PING', definition: 'How fast data reaches the server and back' },
    { word: 'BANDWIDTH', definition: 'How much data your internet can carry' },
    { word: 'BOTTLENECK', definition: 'One slow part that slows everything' },
    { word: 'THROTTLE', definition: 'Slow something down on purpose' },
    { word: 'TROUBLESHOOT', definition: 'Find and fix a problem step by step' },
  ],

  fillBlankExercise: [
    { before: 'My', after: 'is 400, so the game is slow.', answer: 'ping' },
    { before: 'The', after: 'is so bad I can\'t move.', answer: 'lag' },
    { before: 'My old router is the', after: '.', answer: 'bottleneck' },
    { before: 'The movie is using all our', after: '.', answer: 'bandwidth' },
    { before: 'I need to', after: 'my internet before the match.', answer: 'troubleshoot' },
    { before: 'My internet company', after: 'my speed at night.', answer: 'throttles' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is Jax\'s problem?',
      options: ['His mouse is broken', 'Terrible lag', 'No sound', 'His game won\'t start'],
      correctIndex: 1,
    },
    {
      question: 'How high is Jax\'s ping?',
      options: ['Under 30', 'About 100', 'Over 300', 'Zero'],
      correctIndex: 2,
    },
    {
      question: 'Why does his connection keep dropping?',
      options: ['Someone is watching a movie', 'His computer is new', 'He has no WiFi', 'The server is closed'],
      correctIndex: 0,
    },
    {
      question: 'What does Zara suggest?',
      options: ['Buy a new game', 'Use a cable instead of WiFi', 'Stop playing', 'Restart the server'],
      correctIndex: 1,
    },
    {
      question: 'What is Jax\'s ping at the end?',
      options: ['300', '100', '30', '400'],
      correctIndex: 2,
    },
  ],
};
