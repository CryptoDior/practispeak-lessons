import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}conversation-b1-up-to-lately-${s}.png`;

export const conversationB1UpToLately: Lesson = {
  slug: 'conversation-b1-up-to-lately',
  title: 'What Have You Been Up To Lately?',
  subtitle: 'Everyday Conversation · B1-B2 · Lesson 2',
  level: 'B1-B2',
  description:
    'Learn how to ask friends and colleagues what they have been doing recently, and how to answer with natural phrases about work, friends and self-care.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "What have you been up to lately?".',
    'Describe recent weeks with adjectives like eventful, peaceful and overwhelming.',
    'Use frequency adverbs like lately, mostly and rarely.',
  ],

  vocabulary: [
    { word: 'EVENTFUL', partOfSpeech: 'adjective', definition: 'Full of things happening.', example: "It's been an eventful week with lots going on.", imageSlug: img('eventful') },
    { word: 'PEACEFUL', partOfSpeech: 'adjective', definition: 'Calm and quiet, without stress.', example: 'My days have been peaceful lately.', imageSlug: img('peaceful') },
    { word: 'OVERWHELMING', partOfSpeech: 'adjective', definition: 'Too much to handle; making you feel stressed.', example: 'Work has been overwhelming these days.', imageSlug: img('overwhelming') },
    { word: 'CONSISTENT', partOfSpeech: 'adjective', definition: 'Staying the same; following a regular pattern.', example: 'My gym routine has been consistent this month.', imageSlug: img('consistent') },
    { word: 'SOCIAL', partOfSpeech: 'adjective', definition: 'Involving time with other people.', example: "I've had a very social week.", imageSlug: img('social') },
    { word: 'LATELY', partOfSpeech: 'adverb', definition: 'Recently; in the last few days or weeks.', example: "I've been resting a lot lately.", imageSlug: img('lately') },
    { word: 'MOSTLY', partOfSpeech: 'adverb', definition: 'Mainly; for the biggest part.', example: "I've mostly been working.", imageSlug: img('mostly') },
    { word: 'RARELY', partOfSpeech: 'adverb', definition: 'Not often.', example: 'I rarely go out on weeknights.', imageSlug: img('rarely') },
  ],

  phrasalVerbs: [
    { phrase: 'What have you been up to lately?', tag: 'phrase', definition: 'A natural way to ask what someone has been doing recently.', example: '"Long time no see! What have you been up to lately?"', inAction: '"Up to" here means "doing". It\'s informal and friendly — perfect for friends and colleagues.', imageSlug: img('up-to-lately') },
    { phrase: 'Not much, just the usual.', tag: 'phrase', definition: 'Nothing special; your normal routine.', example: '"Not much, just the usual — work, gym, sleep."', imageSlug: img('just-the-usual') },
    { phrase: "I've been really busy with work.", tag: 'phrase', definition: 'Work has taken a lot of your time recently.', example: '"I\'ve been really busy with work. We have a new project."', imageSlug: img('busy-with-work') },
    { phrase: "I've been catching up with friends.", tag: 'phrase', definition: "You've been seeing friends you hadn't seen for a while.", example: '"I\'ve been catching up with old friends from university."', imageSlug: img('catching-up-friends') },
    { phrase: "I've been focusing on myself.", tag: 'phrase', definition: 'You are paying attention to your own needs and wellbeing.', example: '"I\'ve been focusing on myself — more sleep, more walks."', imageSlug: img('focusing-on-myself') },
    { phrase: "It's been a pretty normal week.", tag: 'phrase', definition: 'Nothing special happened.', example: '"Honestly, it\'s been a pretty normal week."', imageSlug: img('normal-week') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Kira! I haven\'t seen you for ages. What have you been up to [[lately:recently]]?' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Maria! It's been really [[eventful:full of things happening]]. I've been really busy with work — we opened a new office." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'Wow, congratulations! That sounds a bit [[overwhelming:too much to handle]] though.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It was at first. Now I've been trying to relax more. I [[rarely:not often]] check emails after 7 p.m. now." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Good for you! I've been focusing on myself too. I've been going to yoga three times a week." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Three times? That\'s very [[consistent:regular, always the same]]!' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "Ha! [[Mostly:mainly]]. Apart from that, it's been a pretty normal, [[peaceful:calm and quiet]] month." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "We should catch up properly. Dinner next week? I want a more [[social:with other people]] month!" },
  ],

  matchingExercise: [
    { word: 'EVENTFUL', definition: 'Full of things happening' },
    { word: 'PEACEFUL', definition: 'Calm and quiet' },
    { word: 'OVERWHELMING', definition: 'Too much to handle' },
    { word: 'CONSISTENT', definition: 'Regular; always the same' },
    { word: 'LATELY', definition: 'Recently' },
    { word: 'RARELY', definition: 'Not often' },
  ],

  fillBlankExercise: [
    { before: 'What have you been up', after: 'lately?', answer: 'to' },
    { before: 'Not much, just the', after: '.', answer: 'usual' },
    { before: "I've been really busy", after: 'work.', answer: 'with' },
    { before: "I've been", after: 'on myself — more sleep, more walks.', answer: 'focusing' },
    { before: "I've", after: 'been working this month.', answer: 'mostly' },
    { before: 'Work has been', after: '. There is too much to do.', answer: 'overwhelming' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "up to" mean in "What have you been up to?"', options: ['Going upstairs', 'Doing', 'Waiting for', 'Thinking about'], correctIndex: 1 },
    { question: 'What does "eventful" mean?', options: ['Boring', 'Full of things happening', 'Very short', 'Very expensive'], correctIndex: 1 },
    { question: 'Which answer means nothing special happened?', options: ['Not much, just the usual.', "It's been overwhelming.", "I've been very social.", "It's been eventful."], correctIndex: 0 },
    { question: 'What does "rarely" mean?', options: ['Always', 'Often', 'Not often', 'Never'], correctIndex: 2 },
    { question: "In the dialogue, why has Kira's month been eventful?", options: ['She moved house', 'Her company opened a new office', 'She got married', 'She started yoga'], correctIndex: 1 },
    { question: 'How often does Maria go to yoga?', options: ['Once a week', 'Twice a week', 'Three times a week', 'Every day'], correctIndex: 2 },
  ],
};
