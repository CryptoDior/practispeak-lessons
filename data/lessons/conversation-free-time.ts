import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const ROSIE = R2 + 'rosie-icon.png';
const OLIVER = R2 + 'oliver-icon.png';
const img = (s: string) => `${R2}conversation-free-time-${s}.png`;

export const conversationFreeTime: Lesson = {
  slug: 'conversation-free-time',
  title: 'What Do You Do in Your Free Time?',
  subtitle: 'Everyday Conversation · Lesson 11',
  level: 'A1-A2',
  description:
    'Learn how to talk about hobbies. Say what you like to do in your free time, like reading, cooking, music, movies and games.',
  heroImage: `${img('hero')}?v=3`,

  objectives: [
    'Ask and answer "What do you do in your free time?".',
    'Talk about hobbies with "I like to…" and "I enjoy…".',
    'React with "Me too!" and "That\'s cool!".',
  ],

  vocabulary: [
    { word: 'FREE TIME', partOfSpeech: 'noun', definition: 'Time when you are not working or studying.', example: 'What do you do in your free time?', imageSlug: img('free-time') },
    { word: 'HOBBY', partOfSpeech: 'noun', definition: 'Something you like to do in your free time.', example: 'My hobby is cooking.', imageSlug: img('hobby') },
    { word: 'READ', partOfSpeech: 'verb', definition: 'To look at words in a book and understand them.', example: 'I like to read before bed.', imageSlug: img('read') },
    { word: 'ENJOY', partOfSpeech: 'verb', definition: 'To like doing something very much.', example: 'I enjoy cooking.', imageSlug: img('enjoy') },
    { word: 'MUSIC', partOfSpeech: 'noun', definition: 'Songs and sounds that you listen to.', example: 'I listen to music every day.', imageSlug: img('music') },
    { word: 'GAMES', partOfSpeech: 'noun', definition: 'Video games or board games you play for fun.', example: 'I play games with my friends.', imageSlug: img('games') },
    { word: 'FAMILY', partOfSpeech: 'noun', definition: 'Your parents, brothers, sisters and children.', example: 'I spend time with my family.', imageSlug: img('family') },
  ],

  phrasalVerbs: [
    { phrase: 'What do you do in your free time?', tag: 'phrase', definition: 'Ask someone about their hobbies.', example: '"What do you do in your free time?" → "I like to read."', imageSlug: img('what-do-you-do') },
    { phrase: 'I like to…', tag: 'phrase', definition: 'Talk about things you like doing.', example: '"I like to watch movies."', imageSlug: img('i-like-to') },
    { phrase: 'I enjoy…', tag: 'phrase', definition: 'Another way to talk about hobbies.', example: '"I enjoy cooking."', inAction: 'After "enjoy", use the -ing form: "I enjoy cooking", not "I enjoy to cook".', imageSlug: img('i-enjoy') },
    { phrase: 'I listen to music.', tag: 'phrase', definition: 'A very common free-time activity.', example: '"I listen to music on the bus."', imageSlug: img('listen-to-music') },
    { phrase: 'I spend time with my family.', tag: 'phrase', definition: 'Talk about time with people you love.', example: '"On Sundays I spend time with my family."', imageSlug: img('spend-time') },
    { phrase: 'Me too!', tag: 'phrase', definition: 'You like the same thing.', example: '"I love pizza." → "Me too!"', imageSlug: img('me-too') },
    { phrase: "That's cool!", tag: 'phrase', definition: 'A friendly, positive reaction.', example: '"I play the guitar." → "That\'s cool!"', imageSlug: img('thats-cool') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Oliver, what do you do in your [[free time:time when you don\'t work]]?' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'I like to watch movies. And you?' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'I [[enjoy:like very much]] cooking. I cook on weekends.' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: "That's cool! What do you cook?" },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Pasta and soup. I also like to [[read:look at words in a book]].' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'Really? I don\'t read much. I play [[games:video games for fun]] and listen to [[music:songs you listen to]].' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'Me too! I listen to music every day.' },
    { speaker: 'Oliver', speakerAvatar: OLIVER, speakerColor: 'green', text: 'On Sundays I spend time with my [[family:parents, brothers and sisters]].' },
    { speaker: 'Rosie', speakerAvatar: ROSIE, speakerColor: 'purple', text: 'That sounds nice. So, movies, games and music are your [[hobby:something you like to do]]s!' },
  ],

  practiceTime: {
    instructions: "Teacher and student read the conversation together. The student says the missing words out loud. Use the words from the lesson.",
    lines: [
      { speaker: 'Teacher', text: "What do you do in your free time?" },
      { speaker: 'Student', text: "In my {{free time}}, I like to {{read/listen to music/play games}}." },
      { speaker: 'Teacher', text: "That's cool! Do you have a hobby?" },
      { speaker: 'Student', text: "Yes. My {{hobby}} is {{cooking/reading/music}}. What do you do in your free time?" },
      { speaker: 'Teacher', text: "I {{enjoy}} {{cooking/reading/music}}. I also like to {{read/play games}}." },
      { speaker: 'Student', text: "{{Me too/That's cool}}! I like it too." },
      { speaker: 'Teacher', text: "Do you listen to music?" },
      { speaker: 'Student', text: "Yes, I {{listen to music}} every day." },
      { speaker: 'Teacher', text: "Do you play games?" },
      { speaker: 'Student', text: "Yes, I play {{games}} with my friends." },
      { speaker: 'Teacher', text: "What do you do on Sundays?" },
      { speaker: 'Student', text: "On Sundays, I {{spend time with my family}}." },
    ],
  },

  matchingExercise: [
    { word: 'FREE TIME', definition: 'Time when you are not working' },
    { word: 'HOBBY', definition: 'Something you like to do in your free time' },
    { word: 'ENJOY', definition: 'To like doing something very much' },
    { word: 'READ', definition: 'To look at words in a book' },
    { word: 'ME TOO!', definition: 'You like the same thing' },
    { word: "THAT'S COOL!", definition: 'A friendly, positive reaction' },
  ],

  fillBlankExercise: [
    { before: 'What do you do in your free', after: '?', answer: 'time' },
    { before: 'I like', after: 'read.', answer: 'to' },
    { before: 'I enjoy', after: '. I make pasta on weekends.', answer: 'cooking' },
    { before: 'I listen', after: 'music every day.', answer: 'to' },
    { before: 'I spend time with my', after: 'on Sundays.', answer: 'family' },
    { before: '"I love movies." "Me', after: '!"', answer: 'too' },
  ],

  multipleChoiceExercise: [
    { question: '"What do you do in your free time?" What is a good answer?', options: ['I like to read.', "I'm a teacher.", "It's sunny.", "I'm 20."], correctIndex: 0 },
    { question: 'Which is correct?', options: ['I enjoy to cook.', 'I enjoy cooking.', 'I enjoy cook.', 'I enjoying cook.'], correctIndex: 1 },
    { question: 'Your friend likes pizza. You like pizza too. What do you say?', options: ['Me too!', 'Really?', 'Goodbye!', 'Have fun!'], correctIndex: 0 },
    { question: 'What is a "hobby"?', options: ['Something you like to do in your free time', 'Your job', 'A day of the week', 'A family member'], correctIndex: 0 },
    { question: 'In the dialogue, what does Rosie cook?', options: ['Pizza and salad', 'Pasta and soup', 'Rice and chicken', 'Cakes'], correctIndex: 1 },
    { question: 'What does Oliver do on Sundays?', options: ['He reads', 'He cooks', 'He spends time with his family', 'He works'], correctIndex: 2 },
  ],
};
