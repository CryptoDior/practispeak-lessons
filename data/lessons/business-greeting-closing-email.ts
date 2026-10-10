import { Lesson } from '@/types/lesson';

export const businessGreetingClosingEmail: Lesson = {
  slug: 'business-greeting-closing-email',
  title: 'Greeting and Closing an Email',
  subtitle: 'Series 3 · Emails & Messages · Lesson 1',
  level: 'A1-A2',
  description:
    'Learn how to start and end an email the right way. Use formal words for your boss or a client, and friendly words for a colleague.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-hero.png?v=2',

  objectives: [
    'Start an email with the right greeting.',
    'End an email with the right closing.',
    'Choose a formal or informal tone for different people.',
  ],

  vocabulary: [
    {
      word: 'GREETING',
      partOfSpeech: 'noun',
      definition: 'The first words in an email.',
      example: '"Hi Maria," is a greeting.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-greeting.png',
    },
    {
      word: 'CLOSING',
      partOfSpeech: 'noun',
      definition: 'The last words before your name.',
      example: '"Kind regards," is a closing.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-closing.png',
    },
    {
      word: 'FORMAL',
      partOfSpeech: 'adjective',
      definition: 'Polite and serious. We use it with a boss, a client, or a new person.',
      example: '"Dear Mr. Smith," is formal.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-formal.png',
    },
    {
      word: 'INFORMAL',
      partOfSpeech: 'adjective',
      definition: 'Friendly and relaxed. We use it with friends and colleagues we know well.',
      example: '"Hey John," is informal.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-informal.png',
    },
    {
      word: 'TONE',
      partOfSpeech: 'noun',
      definition: 'The feeling of your words. It can be formal or informal.',
      example: 'The tone of "Dear Mr. Parker" is formal.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-tone.png',
    },
    {
      word: 'POLITE',
      partOfSpeech: 'adjective',
      definition: 'Kind and with good manners.',
      example: '"Could you please…" is a polite way to ask.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-polite.png',
    },
    {
      word: 'SIGNATURE',
      partOfSpeech: 'noun',
      definition: 'Your name and job at the end of an email.',
      example: '"Eric Johnson, Sales Manager" is his signature.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-signature.png',
    },
    {
      word: 'PROFESSIONAL',
      partOfSpeech: 'adjective',
      definition: 'Right for work: clear, polite, and correct.',
      example: '"Best regards," is a professional closing.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-professional.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'Dear Mr. / Ms. [Last name],',
      tag: 'phrase',
      definition: 'A formal greeting. Use it for a boss, a client, or someone you do not know well.',
      example: '"Dear Ms. Brown,"',
      inAction: 'Use the last name, not the first name: "Dear Ms. Brown," not "Dear Ms. Anna,".',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-dear-mr-ms-last-name.png',
    },
    {
      phrase: 'Hello / Hi [First name],',
      tag: 'phrase',
      definition: 'A friendly greeting for colleagues. It is good for most work emails.',
      example: '"Hi Emma,"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-hello-hi-first-name.png',
    },
    {
      phrase: 'Hey [Name],',
      tag: 'phrase',
      definition: 'A very informal greeting. Use it only with friends or close colleagues.',
      example: '"Hey Lisa,"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-hey-name.png',
    },
    {
      phrase: 'Kind regards, / Best regards,',
      tag: 'phrase',
      definition: 'Formal closings. They are safe for almost every work email.',
      example: '"Kind regards, Kira"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-kind-regards-best-regards.png',
    },
    {
      phrase: 'Thanks, / Talk soon,',
      tag: 'phrase',
      definition: 'Informal closings for people you know well.',
      example: '"Thanks, Tim"',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-thanks-talk-soon.png',
    },
    {
      phrase: 'To whom it may concern,',
      tag: 'phrase',
      definition: 'A very formal greeting when you do not know the name of the person.',
      example: '"To whom it may concern, I am writing about my order."',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/business-greeting-closing-email-to-whom-it-may-concern.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Kira, I need to write an email to a new client. How do I start it?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'A new client? Use a [[formal:polite and serious]] [[greeting:the first words in an email]]. Write "Dear Ms. Rivera,".',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'Can I write "Hey there!"?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'No, that is too [[informal:friendly and relaxed]]. Use "Hey" only with friends.',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'OK. And how do I end the email?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'Use a [[professional:right for work]] [[closing:the last words before your name]], like "Kind regards,". Then add your [[signature:your name and job at the end]].',
    },
    {
      speaker: 'Tim',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/tim-professional-portrait.png',
      speakerColor: 'green',
      text: 'And when I write to you?',
    },
    {
      speaker: 'Kira',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/kira-professional-portrait.png',
      speakerColor: 'purple',
      text: 'With me, "Hi Kira," and "Thanks," are fine. The [[tone:the feeling of your words]] can be friendly. But if you are not sure, be [[polite:kind and with good manners]] and formal.',
    },
  ],

  matchingExercise: [
    { word: 'GREETING', definition: 'The first words in an email' },
    { word: 'CLOSING', definition: 'The last words before your name' },
    { word: 'FORMAL', definition: 'Polite and serious, for a boss or client' },
    { word: 'INFORMAL', definition: 'Friendly and relaxed, for friends' },
    { word: 'TONE', definition: 'The feeling of your words' },
    { word: 'SIGNATURE', definition: 'Your name and job at the end of an email' },
  ],

  fillBlankExercise: [
    { before: '"Dear Mr. Smith," is a', after: 'greeting.', answer: 'formal' },
    { before: '"Hey John," is an', after: 'greeting.', answer: 'informal' },
    { before: '"Kind regards," is a', after: 'for the end of an email.', answer: 'closing' },
    { before: 'Write your name and job title in your', after: '.', answer: 'signature' },
    { before: '"Hi Maria," is a friendly', after: '.', answer: 'greeting' },
    { before: 'Always be', after: 'when you write to a client.', answer: 'polite' },
  ],

  multipleChoiceExercise: [
    {
      question: 'You are writing to your manager. Which greeting is best?',
      options: ['Hey bro,', 'Dear Mr. Taylor,', 'Hiya!', 'Yo Taylor,'],
      correctIndex: 1,
    },
    {
      question: 'You are writing to a colleague you know well. Which greeting is best?',
      options: ['To whom it may concern,', 'Dear Ms. Brown,', 'Hi Emma,', 'Dear Sir or Madam,'],
      correctIndex: 2,
    },
    {
      question: 'Which closing is formal?',
      options: ['Talk soon,', 'Thanks,', 'Kind regards,', 'See ya,'],
      correctIndex: 2,
    },
    {
      question: 'What is a "signature" in an email?',
      options: [
        'The first words of the email',
        'Your name and job at the end',
        'The subject of the email',
        'A picture in the email',
      ],
      correctIndex: 1,
    },
    {
      question: 'You do not know the name of the person. Which greeting can you use?',
      options: ['Hey there!', 'Hi friend,', 'To whom it may concern,', 'Hello Ben,'],
      correctIndex: 2,
    },
    {
      question: 'You are not sure which tone to use. What is the safe choice?',
      options: ['Informal', 'Formal', 'No greeting', 'Very short'],
      correctIndex: 1,
    },
  ],
};
