import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-interview-weaknesses-challenges-${s}.png`;

export const businessInterviewWeaknessesChallenges: Lesson = {
  slug: 'business-interview-weaknesses-challenges',
  title: 'Job Interviews: Talking About Weaknesses and Challenges',
  subtitle: 'B1-B2 · Job Interviews · Part 3',
  level: 'B1-B2',
  description:
    'Learn how to answer "What are your weaknesses?" honestly but positively: name a real weakness, show you know about it, and explain how you are improving.',
  heroImage: img('hero'),

  objectives: [
    'Describe a real weakness or challenge honestly.',
    'Show what you are doing to improve.',
    'Talk about a difficult situation and how you handled it.',
  ],

  vocabulary: [
    { word: 'CHALLENGE', partOfSpeech: 'noun', definition: 'Something that is hard to do.', example: 'Starting a job in a new city was a big challenge for me.', imageSlug: img('challenge') },
    { word: 'FACE', partOfSpeech: 'verb', definition: 'To deal with something difficult.', example: 'I had to face many problems on my own.', imageSlug: img('face') },
    { word: 'IMPROVE', partOfSpeech: 'verb', definition: 'To get better at something.', example: "I'm taking lessons to improve my writing.", imageSlug: img('improve') },
    { word: 'STRUGGLE', partOfSpeech: 'verb', definition: 'To have a hard time doing something.', example: 'She struggles with speaking in big meetings.', imageSlug: img('struggle') },
    { word: 'PROGRESS', partOfSpeech: 'noun', definition: 'When you get better or move forward.', example: 'He made good progress after two weeks of training.', imageSlug: img('progress') },
    { word: 'FEEDBACK', partOfSpeech: 'noun', definition: 'Comments that help you get better.', example: 'My manager gave me useful feedback.', imageSlug: img('feedback') },
    { word: 'PUBLIC SPEAKING', partOfSpeech: 'noun', definition: 'Talking in front of a group of people.', example: 'I feel nervous about public speaking.', imageSlug: img('public-speaking') },
    { word: 'HANDLE', partOfSpeech: 'verb', definition: 'To deal with something well.', example: 'He knows how to handle difficult situations.', imageSlug: img('handle') },
  ],

  phrasalVerbs: [
    { phrase: 'WORK ON', definition: 'To try to make something better.', example: "I'm working on my time management.", imageSlug: img('work-on') },
    { phrase: 'STAY CALM', tag: 'collocation', definition: 'To not get angry or worried.', example: 'Even when the customer was angry, she stayed calm.', imageSlug: img('stay-calm') },
    { phrase: 'One thing I need to improve is…', tag: 'phrase', definition: 'Start your answer honestly.', example: '"One thing I need to improve is my public speaking."', imageSlug: img('need-to-improve') },
    { phrase: "A weakness I've been working on is…", tag: 'phrase', definition: 'Name a weakness and show you are already improving it.', example: '"A weakness I\'ve been working on is saying no to extra tasks."', inAction: 'Never say "I have no weaknesses" — it sounds dishonest. Choose a real weakness that won\'t stop you from doing this job.', imageSlug: img('been-working-on') },
    { phrase: 'I sometimes find it difficult to…', tag: 'phrase', definition: 'Describe a challenge in a soft way.', example: '"I sometimes find it difficult to delegate tasks."', imageSlug: img('find-it-difficult') },
    { phrase: 'In the past, I struggled with…, but now…', tag: 'phrase', definition: 'Show clear progress from past to present.', example: '"In the past, I struggled with deadlines, but now I plan every week on Monday."', imageSlug: img('struggled-but-now') },
    { phrase: "I'm taking steps to get better at it.", tag: 'phrase', definition: 'Explain that you are actively improving.', example: '"I\'m taking steps to get better at it. I joined a presentation course."', imageSlug: img('taking-steps') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Thanks, Tim. Now, what would you say is your biggest weakness?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "One thing I need to [[improve:get better at]] is [[public speaking:talking in front of a group]]. I sometimes find it difficult to present to large groups." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'I see. What are you doing about it?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I'm taking steps to get better at it. I joined a presentation course, and I ask my manager for [[feedback:comments to help me improve]] after every meeting." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Have you seen any [[progress:getting better]]?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Yes. In the past, I [[struggled:had a hard time]] with presentations, but now I'm much more relaxed. Last month I presented to thirty people." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Good. Tell me about a [[challenge:something hard]] you faced at work." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "A guest was very angry about a booking mistake. I stayed calm, listened, and offered a free upgrade. I learned how to [[handle:deal with well]] difficult situations." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That's a great example. Thank you, Tim." },
  ],

  matchingExercise: [
    { word: 'CHALLENGE', definition: 'Something that is hard to do' },
    { word: 'STRUGGLE', definition: 'To have a hard time doing something' },
    { word: 'PROGRESS', definition: 'Getting better or moving forward' },
    { word: 'FEEDBACK', definition: 'Comments that help you improve' },
    { word: 'HANDLE', definition: 'To deal with something well' },
    { word: 'STAY CALM', definition: 'To not get angry or worried' },
  ],

  fillBlankExercise: [
    { before: 'One thing I need to', after: 'is my writing.', answer: 'improve' },
    { before: "A weakness I've been working", after: 'is time management.', answer: 'on' },
    { before: 'I sometimes find it', after: 'to say no.', answer: 'difficult' },
    { before: 'In the past, I', after: 'with deadlines, but now I plan ahead.', answer: 'struggled' },
    { before: "I'm taking", after: 'to get better at it.', answer: 'steps' },
    { before: 'My manager gave me useful', after: '.', answer: 'feedback' },
  ],

  multipleChoiceExercise: [
    { question: 'What is the best way to answer "What are your weaknesses?"', options: ['"I have no weaknesses."', 'Name a real weakness and show how you are improving', 'Talk about your strengths only', 'Refuse to answer'], correctIndex: 1 },
    { question: 'What does "struggle" mean?', options: ['To have a hard time doing something', 'To win easily', 'To stop working', 'To give feedback'], correctIndex: 0 },
    { question: 'Which phrase shows progress over time?', options: ['In the past, I struggled with…, but now…', 'I have no weaknesses.', "I'm good at…", 'Can you tell me about yourself?'], correctIndex: 0 },
    { question: 'What does "handle" mean?', options: ['Hold a door', 'Deal with something well', 'Give up', 'Make a mistake'], correctIndex: 1 },
    { question: "In the dialogue, what is Tim's weakness?", options: ['Being late', 'Public speaking', 'Using computers', 'Teamwork'], correctIndex: 1 },
    { question: 'How did Tim solve the problem with the angry guest?', options: ['He called the manager', 'He stayed calm and offered a free upgrade', 'He ignored the guest', 'He gave a refund'], correctIndex: 1 },
  ],
};
