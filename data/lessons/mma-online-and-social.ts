import { Lesson } from '@/types/lesson';

export const mmaOnlineAndSocial: Lesson = {
  slug: 'mma-online-and-social',
  title: 'MMA Online and Social Media',
  subtitle: 'Learn the language MMA fans use online — forums, comments, and social media',
  level: 'A1-A2',
  description: 'MMA lives online. Fans debate fights, post predictions, and follow fighters on social media. This lesson teaches you the essential vocabulary for joining the MMA conversation online.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-online-and-social-hero.png',

  warmUp: {
    questions: [
      'Do you follow any sports accounts on social media?',
      'Have you ever commented about a sports event online? What did you say?',
      'Do you think social media has changed how people watch sport?',
    ],
  },

  vocabulary: [
    {
      word: 'POST',
      partOfSpeech: 'noun / verb',
      definition: 'A message or video you share online, or the act of sharing it.',
      example: 'She posted a video of her training and got 50,000 views.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-post.png',
    },
    {
      word: 'CLIP',
      partOfSpeech: 'noun',
      definition: 'A short video — usually a fight highlight shared online.',
      example: 'That knockout clip went viral — ten million views in one day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-clip.png',
    },
    {
      word: 'DEBATE',
      partOfSpeech: 'noun / verb',
      definition: 'A disagreement or argument about who won or who is better.',
      example: 'There is a big debate online — people do not agree on the judge\'s decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-debate.png',
    },
    {
      word: 'REACTION',
      partOfSpeech: 'noun',
      definition: 'A comment, video, or post that responds to something that just happened.',
      example: 'My reaction video to the fight got more views than I expected.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-reaction.png',
    },
    {
      word: 'VIRAL',
      partOfSpeech: 'adjective',
      definition: 'Spreading very fast online — many people sharing a video or post.',
      example: 'That finish went viral — everyone was sharing the clip.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-viral.png',
    },
    {
      word: 'COMMENT',
      partOfSpeech: 'noun / verb',
      definition: 'A written response to a post, video, or article online.',
      example: 'The comments section was full of debate about the decision.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-comment.png',
    },
    {
      word: 'FAN PAGE',
      partOfSpeech: 'noun',
      definition: 'An online page run by fans to share news and updates about a fighter.',
      example: 'I follow three fan pages — they post faster than the official accounts.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-fan-page.png',
    },
    {
      word: 'BREAKDOWN',
      partOfSpeech: 'noun',
      definition: 'A detailed video or article that explains and analyses a fight technique by technique.',
      example: 'He watched a breakdown of the fight and understood the game plan.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-breakdown.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GO VIRAL',
      definition: 'Spread very fast online — many people share the content in a short time.',
      example: 'The knockout clip went viral before the event even ended.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-go-viral.png',
      tag: 'phrase',
    },
    {
      phrase: 'CALL OUT',
      definition: 'Challenge someone publicly — in a post, interview, or video.',
      example: 'She called out the champion on social media and it got thousands of shares.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-social-call-out.png',
      tag: 'phrase',
    },
    {
      phrase: 'BREAK DOWN',
      definition: 'Analyse a fight or technique step by step to explain what happened.',
      example: 'He broke down the fight on YouTube — 500,000 people watched it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/mma-break-down.png',
      tag: 'phrase',
    },
    {
      phrase: 'WEIGH IN ON',
      definition: 'Give your opinion about something being discussed.',
      example: 'Everyone was weighing in on the controversial decision — fans and fighters alike.',
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
      text: 'I know — it [[go viral:spread very fast online]] in minutes. Everyone was sharing it. The [[comment:a written response online]]s section is crazy.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I read a big [[debate:a disagreement about who won or who is better]] online about the judge\'s [[decision:the judges choose the winner after all rounds]]. People are very angry.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That happens with every [[controversial:many people disagree with the result]] decision. Everyone [[weigh in on:give their opinion about the discussion]] — even fighters who were not in the fight.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'I watched a [[breakdown:a detailed video that analyses the fight]] — it explained everything she did wrong. Very good content.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'Those analysts who [[break down:analyse step by step]] fights are great for learning. I saw she also [[call out:challenge someone publicly]] the champion in her [[post:a message or video shared online]] — very confident.',
    },
    {
      speaker: 'Mia',
      speakerColor: 'blue',
      text: 'My [[reaction:a response to something that just happened]] video got 10,000 views — I was so surprised.',
    },
    {
      speaker: 'Carlos',
      speakerColor: 'orange',
      text: 'That is because you know the sport. Keep posting — your [[fan page:an online page for sharing news about a fighter]] will grow.',
    },
  ],

  matchingExercise: [
    { word: 'Clip', definition: 'A short video — usually a fight highlight shared online' },
    { word: 'Debate', definition: 'A disagreement or argument about who won or who is better' },
    { word: 'Viral', definition: 'Spreading very fast online — many people sharing the content' },
    { word: 'Breakdown', definition: 'A detailed video or article that analyses a fight technique by technique' },
    { word: 'Reaction', definition: 'A comment or video that responds to something that just happened' },
    { word: 'Fan page', definition: 'An online page run by fans to share news about a fighter' },
  ],

  fillBlankExercise: [
    { before: 'That knockout', after: 'went viral — ten million views in one day.', answer: 'clip' },
    { before: 'The fight', after: 'went viral before the event even ended.', answer: 'clip' },
    { before: 'There is a huge', after: 'online — people disagree about the decision.', answer: 'debate' },
    { before: 'He', after: 'down the fight on YouTube and explained everything.', answer: 'broke' },
    { before: 'She', after: 'out the champion in a social media post.', answer: 'called' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "go viral" mean?',
      options: [
        'Get sick before a fight',
        'Spread very fast online — many people share the content in a short time',
        'Post about a fight after watching it',
        'Reach one thousand followers on social media',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "breakdown" in MMA media?',
      options: [
        'When a fighter gets emotional after a loss',
        'A list of all the fights on a card',
        'A detailed video or article that explains and analyses a fight technique by technique',
        'The end of a training session',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "weigh in on" mean?',
      options: [
        'Check your weight at the weigh-in',
        'Step onto the scales before a fight',
        'Give your opinion about something being discussed',
        'Post a reaction video about the weigh-in ceremony',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "reaction" in an online MMA context?',
      options: [
        'How a fighter responds to a punch',
        'A comment, video, or post that responds to something that just happened',
        'The crowd\'s noise during a fight',
        'A fighter\'s post-fight interview',
      ],
      correctIndex: 1,
    },
  ],
};
