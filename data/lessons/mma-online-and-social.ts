import { Lesson } from '@/types/lesson';

export const mmaOnlineAndSocial: Lesson = {
  slug: 'mma-online-and-social',
  title: 'MMA Online and Social Media',
  subtitle: 'Learn the words MMA fans use online',
  level: 'A1-A2',
  description: 'Many MMA fans talk online. They share videos, write comments, and follow fighters. Learn the words to talk about MMA online.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-online-and-social-hero.png',

  warmUp: {
    questions: [
      'Do you follow any sports accounts on social media?',
      'Do you write comments about sport online?',
      'Do you watch fight videos on your phone?',
    ],
  },

  vocabulary: [
    {
      word: 'POST',
      partOfSpeech: 'noun / verb',
      definition: 'A message, photo, or video you put online.',
      example: 'She posted a video of her training and got 50,000 views.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-post.png',
    },
    {
      word: 'CLIP',
      partOfSpeech: 'noun',
      definition: 'A short video of a fight moment.',
      example: 'That knockout clip went viral. It had ten million views in one day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-clip.png',
    },
    {
      word: 'DEBATE',
      partOfSpeech: 'noun / verb',
      definition: 'When people do not agree and talk about who won or who is better.',
      example: 'There is a big debate online. People do not agree with the judges.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-debate.png',
    },
    {
      word: 'REACTION',
      partOfSpeech: 'noun',
      definition: 'A comment or video about something that just happened.',
      example: 'Many people watched my reaction video to the fight.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-reaction.png',
    },
    {
      word: 'VIRAL',
      partOfSpeech: 'adjective',
      definition: 'Very popular online, very fast. Many people share it.',
      example: 'That finish went viral. Everyone was sharing the clip.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-viral.png',
    },
    {
      word: 'COMMENT',
      partOfSpeech: 'noun / verb',
      definition: 'What you write under a post or video online.',
      example: 'In the comments, people did not agree about the decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-comment.png',
    },
    {
      word: 'FAN PAGE',
      partOfSpeech: 'noun',
      definition: 'A page online, made by fans, with news about a fighter.',
      example: 'I follow three fan pages. They post news very fast.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fan-page.png',
    },
    {
      word: 'BREAKDOWN',
      partOfSpeech: 'noun',
      definition: 'A video or article that explains a fight, step by step.',
      example: 'He watched a breakdown of the fight and understood the game plan.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-breakdown.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GO VIRAL',
      definition: 'Become very popular online, very fast.',
      example: 'The knockout clip went viral before the event even ended.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-viral.png',
      tag: 'phrase',
    },
    {
      phrase: 'CALL OUT',
      definition: 'Say "I want to fight you!" to someone, online or in an interview.',
      example: 'She called out the champion online. Thousands of people shared it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-social-call-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'BREAK DOWN',
      definition: 'Explain a fight step by step.',
      example: 'He broke down the fight on YouTube. 500,000 people watched it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-break-down.png',
      tag: 'phrase',
    },
    {
      phrase: 'WEIGH IN ON',
      definition: 'Say what you think about something.',
      example: 'Everyone was weighing in on the decision. Fans and fighters all had an opinion.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-weigh-in-on.png',
      tag: 'phrase',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'Carlos, that knockout [[clip:a short video of a fight moment]] already has five million views.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'I know. It [[went viral:became very popular online]] in minutes. Everyone was sharing it. The [[comment:what people write online]]s are crazy.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I read a big [[debate:people do not agree about who won]] online about the judge\'s [[decision:the judges choose the winner after all rounds]]. People are very angry.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That happens with every [[controversial:many people do not agree]] decision. Everyone [[weighs in on:says what they think]], even other fighters.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I watched a [[breakdown:a video that explains the fight]]. It explained all her mistakes. It was very good.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'People who [[break down:explain step by step]] fights are great for learning. I saw she also [[called out:said "I want to fight you" to]] the champion in her [[post:a message or video shared online]]. She is very confident.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'My [[reaction:a video about something that just happened]] video got 10,000 views. I was so surprised.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is because you know the sport. Keep posting. Your [[fan page:a page with news about a fighter]] will grow.',
    },
  ],

  matchingExercise: [
    { word: 'Clip', definition: 'A short video of a fight moment' },
    { word: 'Debate', definition: 'People do not agree and talk about who won' },
    { word: 'Viral', definition: 'Shared by many people online, very fast' },
    { word: 'Breakdown', definition: 'A video that explains a fight, step by step' },
    { word: 'Reaction', definition: 'A comment or video about something that just happened' },
    { word: 'Fan page', definition: 'A page made by fans with news about a fighter' },
  ],

  fillBlankExercise: [
    { before: 'That knockout', after: 'went viral. It had ten million views in one day.', answer: 'clip' },
    { before: 'The fight', after: 'went viral before the event even ended.', answer: 'clip' },
    { before: 'There is a huge', after: 'online. People do not agree with the judges.', answer: 'debate' },
    { before: 'He', after: 'down the fight on YouTube and explained everything.', answer: 'broke' },
    { before: 'She', after: 'out the champion in a social media post.', answer: 'called' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "go viral" mean?',
      options: [
        'Get sick before a fight',
        'Become very popular online, very fast',
        'Post about a fight after watching it',
        'Get one thousand followers',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "breakdown" online?',
      options: [
        'When a fighter cries after a loss',
        'A list of all the fights on a card',
        'A video or article that explains a fight, step by step',
        'The end of a training session',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "weigh in on" mean?',
      options: [
        'Check your weight at the weigh-in',
        'Step onto the scales before a fight',
        'Say what you think about something',
        'Post a video about the weigh-in',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "reaction" online?',
      options: [
        'How a fighter responds to a punch',
        'A comment or video about something that just happened',
        'The crowd\'s noise during a fight',
        'What a fighter says after the fight',
      ],
      correctIndex: 1,
    },
  ],
};
