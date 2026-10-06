import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}conversation-b1-to-relax-${s}.png`;

export const conversationB1ToRelax: Lesson = {
  slug: 'conversation-b1-to-relax',
  title: 'What Do You Do to Relax?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 9',
  level: 'B1-B2',
  description:
    'Learn how to talk about stress and relaxation: switching off, unwinding, meditating, taking a break and clearing your mind.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "What do you do to relax?".',
    'Describe ways to reduce stress with natural verbs and phrases.',
    'Share and compare relaxation habits.',
  ],

  vocabulary: [
    { word: 'UNWIND', partOfSpeech: 'verb', definition: 'To slowly calm down after stress. (past: unwound)', example: 'I unwound by listening to music.', imageSlug: img('unwind') },
    { word: 'DISCONNECT', partOfSpeech: 'verb', definition: 'To take a break from screens or responsibilities.', example: 'I disconnected from social media last weekend.', imageSlug: img('disconnect') },
    { word: 'MEDITATE', partOfSpeech: 'verb', definition: 'To sit quietly and focus on your breathing or thoughts.', example: 'I meditate for ten minutes every morning.', imageSlug: img('meditate') },
    { word: 'BREATHE', partOfSpeech: 'verb', definition: 'To take air in and out — slowly, to reduce stress.', example: 'I breathed deeply to calm down.', imageSlug: img('breathe') },
    { word: 'RECHARGE', partOfSpeech: 'verb', definition: 'To get your energy back.', example: 'I need a quiet weekend to recharge.', imageSlug: img('recharge') },
    { word: 'CALMING', partOfSpeech: 'adjective', definition: 'Making you feel relaxed and peaceful.', example: 'I listen to calming music before bed.', imageSlug: img('calming') },
  ],

  phrasalVerbs: [
    { phrase: 'SWITCH OFF', definition: 'To stop thinking about work or problems.', example: 'I find it hard to switch off after work.', imageSlug: img('switch-off') },
    { phrase: 'What do you do to relax?', tag: 'phrase', definition: 'Ask how someone calms down or reduces stress.', example: '"You always seem so calm. What do you do to relax?"', imageSlug: img('what-to-relax') },
    { phrase: 'I enjoy quiet time alone.', tag: 'phrase', definition: 'You relax with peaceful time by yourself.', example: '"I\'m an introvert, so I enjoy quiet time alone."', imageSlug: img('quiet-time') },
    { phrase: 'I like to take a break from everything.', tag: 'phrase', definition: 'You step away from tasks to recharge.', example: '"Once a month, I like to take a break from everything."', imageSlug: img('take-a-break') },
    { phrase: 'I usually watch something light.', tag: 'phrase', definition: 'You watch easy, comforting shows.', example: '"After a hard day, I usually watch something light, like a comedy."', imageSlug: img('something-light') },
    { phrase: 'I go for a walk to clear my mind.', tag: 'phrase', definition: 'Walking helps reduce stress.', example: '"When I\'m stressed, I go for a walk to clear my mind."', imageSlug: img('clear-my-mind') },
    { phrase: 'I try not to think too much.', tag: 'phrase', definition: 'You avoid overthinking to help you relax.', example: '"At the weekend, I try not to think too much about work."', inAction: 'Use "try (not) to + verb" for an effort you make: "I try to sleep early", "I try not to check emails".', imageSlug: img('think-too-much') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "You always seem so calm, Kira, even on busy days. What do you do to relax?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ha, not always! But I try to [[switch off:stop thinking about work]] when I get home. I [[meditate:sit quietly and focus on breathing]] for ten minutes." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I've tried meditation, but my mind is too busy. I can't sit still!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's normal at first. Just [[breathe:take air in and out]] slowly and count. What helps you [[unwind:calm down after stress]]?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I go for a walk to clear my mind, usually by the river. And I listen to [[calming:relaxing]] music." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That sounds lovely. I also like to [[disconnect:take a break from screens]] on Sundays — no phone, no laptop." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "A whole day? I'd love to try that. I really need to [[recharge:get my energy back]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Start with one evening. Watch something light, and try not to think too much. You'll feel the difference." },
  ],

  matchingExercise: [
    { word: 'SWITCH OFF', definition: 'Stop thinking about work or problems' },
    { word: 'UNWIND', definition: 'Slowly calm down after stress' },
    { word: 'MEDITATE', definition: 'Sit quietly and focus on breathing' },
    { word: 'RECHARGE', definition: 'Get your energy back' },
    { word: 'DISCONNECT', definition: 'Take a break from screens' },
    { word: 'CLEAR MY MIND', definition: 'Stop worrying and think clearly' },
  ],

  fillBlankExercise: [
    { before: 'What do you do to', after: '?', answer: 'relax' },
    { before: 'I find it hard to switch', after: 'after work.', answer: 'off' },
    { before: 'I go for a walk to clear my', after: '.', answer: 'mind' },
    { before: 'I usually watch something', after: ', like a comedy.', answer: 'light' },
    { before: 'I try not to', after: 'too much.', answer: 'think' },
    { before: 'I need a quiet weekend to', after: '.', answer: 'recharge' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "switch off" mean here?', options: ['Turn off the lights', 'Stop thinking about work or problems', 'Leave your job', 'Go to sleep'], correctIndex: 1 },
    { question: 'What does "recharge" mean for a person?', options: ['Buy a new phone', 'Get your energy back', 'Pay a bill', 'Work harder'], correctIndex: 1 },
    { question: 'Which sentence is correct?', options: ['I try not think too much.', 'I try not to think too much.', 'I try to not thinking.', 'I not try to think.'], correctIndex: 1 },
    { question: 'What does "watch something light" mean?', options: ['Watch something easy and comforting', 'Watch with the lights on', 'Watch a short video', 'Watch the news'], correctIndex: 0 },
    { question: 'In the dialogue, how long does Kira meditate?', options: ['Five minutes', 'Ten minutes', 'One hour', 'All day'], correctIndex: 1 },
    { question: 'Where does Maria walk?', options: ['In the park', 'By the river', 'In the mountains', 'At the gym'], correctIndex: 1 },
  ],
};
