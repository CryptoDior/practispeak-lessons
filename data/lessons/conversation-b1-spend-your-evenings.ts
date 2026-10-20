import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-b1-spend-your-evenings-${s}.png`;

export const conversationB1SpendYourEvenings: Lesson = {
  slug: 'conversation-b1-spend-your-evenings',
  title: 'How Do You Usually Spend Your Evenings?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 3',
  level: 'B1-B2',
  description:
    'Learn how to talk about your evening routine: unwinding after work, catching up on shows, cooking, socialising and switching off screens.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Describe your typical evening routine.',
    'Use verbs and phrasal verbs for relaxing: unwind, wind down, disconnect.',
    'Use frequency adverbs: usually, occasionally, mostly.',
  ],

  vocabulary: [
    { word: 'UNWIND', partOfSpeech: 'verb', definition: 'To relax and let go of the day\'s stress.', example: 'I usually unwind with a book after work.', imageSlug: img('unwind') },
    { word: 'DISCONNECT', partOfSpeech: 'verb', definition: 'To take a break from screens, work or social media.', example: 'I disconnect from my phone after 8 p.m.', imageSlug: img('disconnect') },
    { word: 'STRETCH', partOfSpeech: 'verb', definition: 'To move your muscles to relax them.', example: 'I stretch for ten minutes before bed.', imageSlug: img('stretch') },
    { word: 'SOCIALIZE', partOfSpeech: 'verb', definition: 'To spend time with people and talk.', example: 'I socialize with friends on Fridays.', imageSlug: img('socialize') },
    { word: 'ORGANIZE', partOfSpeech: 'verb', definition: 'To arrange your things or plan your next day.', example: 'I organize my bag for the next day.', imageSlug: img('organize') },
    { word: 'USUALLY', partOfSpeech: 'adverb', definition: 'Most of the time.', example: 'I usually cook dinner around 7.', imageSlug: img('usually') },
    { word: 'OCCASIONALLY', partOfSpeech: 'adverb', definition: 'Sometimes, but not often.', example: 'I occasionally meet friends after work.', imageSlug: img('occasionally') },
  ],

  phrasalVerbs: [
    { phrase: 'WIND DOWN', definition: 'To slowly relax before sleeping.', example: 'I wind down by reading a book.', imageSlug: img('wind-down') },
    { phrase: 'CATCH UP ON', definition: 'To watch, read or do something you missed.', example: 'I catch up on my favourite shows at night.', imageSlug: img('catch-up-on') },
    { phrase: 'How do you usually spend your evenings?', tag: 'phrase', definition: 'Ask about someone\'s typical evening routine.', example: '"So, how do you usually spend your evenings?"', imageSlug: img('how-do-you-spend') },
    { phrase: 'I cook dinner and take it slow.', tag: 'phrase', definition: 'You make food and avoid rushing.', example: '"I cook dinner and take it slow. No rushing at night."', imageSlug: img('take-it-slow') },
    { phrase: 'I go for a walk in the evenings.', tag: 'phrase', definition: 'A walk is part of your routine.', example: '"I go for a walk in the evenings to clear my head."', imageSlug: img('go-for-a-walk') },
    { phrase: 'I try to avoid screens at night.', tag: 'phrase', definition: 'You limit your phone and TV before bed.', example: '"I try to avoid screens at night. I sleep better."', inAction: 'After "avoid", use a noun or -ing: "avoid screens", "avoid checking emails".', imageSlug: img('avoid-screens') },
    { phrase: 'I read or listen to something relaxing.', tag: 'phrase', definition: 'You choose calm activities at night.', example: '"Before bed, I read or listen to something relaxing."', imageSlug: img('something-relaxing') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Rosie, how do you usually spend your evenings?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I [[usually:most of the time]] [[unwind:relax after the day]] with a walk. Then I cook dinner and take it slow." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "That sounds nice. I'm terrible — I usually [[catch up on:watch what I missed]] shows until midnight." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "I used to do that! Now I try to [[disconnect:take a break from screens]] after nine. I read or listen to a podcast to [[wind down:slowly relax before sleep]]." },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Does it help you sleep?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: "Much better. I also [[stretch:move my muscles to relax]] for ten minutes. What else do you do?" },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "I [[occasionally:sometimes]] meet friends — I like to [[socialize:spend time with people]] on Thursdays. And I [[organize:plan and arrange]] my things for the next day." },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Very responsible! Maybe try one evening without screens this week.' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "OK, challenge accepted. Just one!" },
  ],

  practiceTime: {
    instructions: "Read the conversation with your teacher. Fill each blank out loud with a word or phrase from the lesson \u2014 you can give your own answers too.",
    lines: [
      { speaker: 'Teacher', text: "How do you usually spend your evenings?" },
      { speaker: 'Student', text: "I {{usually}} cook dinner and {{take it slow}}." },
      { speaker: 'Teacher', text: "How do you relax after work?" },
      { speaker: 'Student', text: "I {{unwind/wind down}} with a book or a walk. How do you usually spend your evenings?" },
      { speaker: 'Teacher', text: "I {{usually}} {{go for a walk/cook dinner}}, and I {{catch up on}} my favourite shows. Do you use your phone a lot at night?" },
      { speaker: 'Student', text: "No, I try to {{avoid screens at night}}. I {{disconnect}} after 9 p.m." },
      { speaker: 'Teacher', text: "Do you see friends in the evening?" },
      { speaker: 'Student', text: "I {{occasionally}} meet friends. I like to {{socialize}} on Fridays." },
      { speaker: 'Teacher', text: "What do you do before bed?" },
      { speaker: 'Student', text: "I {{stretch}} for ten minutes, then I {{read or listen to something relaxing}}." },
      { speaker: 'Teacher', text: "Do you get ready for the next day?" },
      { speaker: 'Student', text: "Yes, I {{organize}} my bag for the next day." },
    ],
  },

  matchingExercise: [
    { word: 'UNWIND', definition: "To relax after the day's stress" },
    { word: 'WIND DOWN', definition: 'To slowly relax before sleep' },
    { word: 'DISCONNECT', definition: 'To take a break from screens' },
    { word: 'CATCH UP ON', definition: 'To watch or do something you missed' },
    { word: 'SOCIALIZE', definition: 'To spend time with people' },
    { word: 'OCCASIONALLY', definition: 'Sometimes, but not often' },
  ],

  fillBlankExercise: [
    { before: 'How do you usually', after: 'your evenings?', answer: 'spend' },
    { before: 'I wind', after: 'by reading a book.', answer: 'down' },
    { before: 'I catch up', after: 'my favourite shows.', answer: 'on' },
    { before: 'I try to avoid', after: 'at night.', answer: 'screens' },
    { before: 'I', after: 'meet friends, maybe once a month.', answer: 'occasionally' },
    { before: 'I cook dinner and take it', after: '.', answer: 'slow' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "wind down" mean?', options: ['Slowly relax before sleep', 'Open a window', 'Work late', 'Wake up early'], correctIndex: 0 },
    { question: 'What does "occasionally" mean?', options: ['Always', 'Sometimes, but not often', 'Never', 'Every day'], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ['I avoid to check emails.', 'I avoid checking emails.', 'I avoid check emails.', 'I avoiding emails.'], correctIndex: 1 },
    { question: 'What does "disconnect" mean here?', options: ['Break a cable', 'Take a break from screens and work', 'End a friendship', 'Leave a job'], correctIndex: 1 },
    { question: 'In the dialogue, what does Rosie do after nine?', options: ['Watches TV', 'Disconnects from screens and reads or listens to a podcast', 'Goes to the gym', 'Checks emails'], correctIndex: 1 },
    { question: 'What challenge does Oliver accept?', options: ['Cook every night', 'One evening without screens', 'Go to bed at nine', 'Meet friends more'], correctIndex: 1 },
  ],
};
