import { Lesson } from '@/types/lesson';

export const streamingContentCreation: Lesson = {
  slug: 'streaming-content-creation',
  title: 'Streaming & Content Creation',
  subtitle: 'How to talk to your audience like a real streamer',
  level: 'B1-B2',
  description:
    'Learn the words and phrases streamers use to talk to viewers, explain what they are doing and grow a channel.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-hero.png',

  vocabulary: [
    {
      word: 'STREAM',
      partOfSpeech: 'noun / verb',
      definition: 'A live video that people watch online, or to show one.',
      example: 'I stream every Friday night.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-stream.png',
    },
    {
      word: 'VIEWER',
      partOfSpeech: 'noun',
      definition: 'A person who watches a stream or video.',
      example: 'Every new viewer gets a welcome message.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-viewer.png',
    },
    {
      word: 'CHAT',
      partOfSpeech: 'noun',
      definition: 'The place where viewers type messages during a stream.',
      example: 'The chat went crazy after that win.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-chat.png',
    },
    {
      word: 'FOLLOWER',
      partOfSpeech: 'noun',
      definition: 'A person who chooses to see your new streams and posts.',
      example: 'I just got my thousandth follower!',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-follower.png',
    },
    {
      word: 'SUBSCRIBER',
      partOfSpeech: 'noun',
      definition: 'A person who pays or signs up to support a channel.',
      example: 'Every subscriber gets a special emote.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-subscriber.png',
    },
    {
      word: 'CLIP',
      partOfSpeech: 'noun',
      definition: 'A short part of a stream that people can share.',
      example: 'That funny moment became a popular clip.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-clip.png',
    },
    {
      word: 'CONTENT CREATOR',
      partOfSpeech: 'noun',
      definition: 'A person who makes videos or streams for an audience.',
      example: 'She is a full-time content creator.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-content-creator.png',
    },
    {
      word: 'COMMUNITY',
      partOfSpeech: 'noun',
      definition: 'A group of people who share an interest and support each other.',
      example: 'Our community is friendly and helpful.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-community.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'I\'VE BEEN WORKING ON IMPROVING…',
      definition: 'A way to tell viewers what you are getting better at.',
      example: 'I\'ve been working on improving my aim.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-ive-been-working-on-improving.png',
    },
    {
      phrase: 'WHAT I\'M TRYING TO DO IS…',
      definition: 'A way to explain your plan to viewers.',
      example: 'What I\'m trying to do is hide until the end.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-what-im-trying-to-do-is.png',
    },
    {
      phrase: 'I\'VE BEEN STREAMING FOR ABOUT…',
      definition: 'A way to say how long you have been streaming.',
      example: 'I\'ve been streaming for about eight months.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-ive-been-streaming-for-about.png',
    },
    {
      phrase: 'IF YOU\'RE ENJOYING THE STREAM, MAKE SURE TO…',
      definition: 'A friendly way to ask viewers to follow or subscribe.',
      example: 'If you\'re enjoying the stream, make sure to follow.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-if-youre-enjoying-the-stream-make-sure-to.png',
    },
    {
      phrase: 'ONE THING I\'VE NOTICED IS THAT…',
      definition: 'A way to share something you have learned.',
      example: 'One thing I\'ve noticed is that calm players win more.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-one-thing-ive-noticed-is-that.png',
    },
    {
      phrase: 'LET ME QUICKLY EXPLAIN WHAT\'S HAPPENING…',
      definition: 'A way to help new viewers understand the game.',
      example: 'Let me quickly explain what\'s happening: we are in the final circle.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/streaming-content-creation-let-me-quickly-explain-whats-happening.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Hey everyone, welcome to the [[stream:a live video people watch online]]! Hi to every new [[viewer:a person who watches a stream]].',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'Maya, the [[chat:where viewers type messages]] is asking how long you have been doing this.',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'I\'ve been streaming for about a year now. Let me quickly explain what\'s happening: we are in the final four.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'That last play was amazing. It\'s already a [[clip:a short part of a stream people share]]!',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Thanks! What I\'m trying to do is stay hidden until the zone closes.',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'We just got fifty new [[followers:people who choose to see your new streams]]!',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Wow, thank you! If you\'re enjoying the stream, make sure to follow.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'This [[community:a group of people who support each other]] is the best.',
    },
  ],

  matchingExercise: [
    { word: 'VIEWER', definition: 'A person who watches a stream' },
    { word: 'CLIP', definition: 'A short part of a stream people share' },
    { word: 'CHAT', definition: 'Where viewers type messages' },
    { word: 'FOLLOWER', definition: 'A person who sees your new streams' },
    { word: 'SUBSCRIBER', definition: 'A person who supports a channel' },
    { word: 'CONTENT CREATOR', definition: 'A person who makes videos for an audience' },
  ],

  fillBlankExercise: [
    { before: 'I', after: 'every Friday night at eight.', answer: 'stream' },
    { before: 'Welcome to every new', after: 'tonight!', answer: 'viewer' },
    { before: 'That funny moment is now a popular', after: 'online.', answer: 'clip' },
    { before: 'Type your questions in the', after: 'please.', answer: 'chat' },
    { before: 'Our', after: 'is friendly and kind.', answer: 'community' },
    { before: 'She works full-time as a', after: 'making videos.', answer: 'content creator' },
  ],

  multipleChoiceExercise: [
    {
      question: 'How long has Maya been streaming?',
      options: ['About a month', 'About a year', 'About five years', 'Since yesterday'],
      correctIndex: 1,
    },
    {
      question: 'What is Maya trying to do in the game?',
      options: ['Attack everyone', 'Stay hidden until the zone closes', 'Leave the game', 'Find her team'],
      correctIndex: 1,
    },
    {
      question: 'What did Zara say about the last play?',
      options: ['It was boring', 'It was a mistake', 'It is already a clip', 'It was too slow'],
      correctIndex: 2,
    },
    {
      question: 'How many new followers did they get?',
      options: ['Five', 'Fifteen', 'Fifty', 'Five hundred'],
      correctIndex: 2,
    },
    {
      question: 'What does Maya ask viewers to do?',
      options: ['Leave the chat', 'Follow the channel', 'Watch another streamer', 'Buy a game'],
      correctIndex: 1,
    },
  ],
};
