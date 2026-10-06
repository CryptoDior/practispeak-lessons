import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-sharing-opinions-clearly-${s}.png`;

export const businessSharingOpinionsClearly: Lesson = {
  slug: 'business-sharing-opinions-clearly',
  title: 'Sharing Opinions Clearly',
  subtitle: 'B1-B2 · Leading Meetings · Lesson 2',
  level: 'B1-B2',
  description:
    'Learn how to give your opinion clearly in meetings, support other people\'s ideas, and disagree in a respectful, professional way.',
  heroImage: img('hero'),

  objectives: [
    'Introduce your opinion clearly.',
    'Agree with a colleague and give a reason.',
    'Disagree politely and professionally.',
  ],

  vocabulary: [
    { word: 'OPINION', partOfSpeech: 'noun', definition: 'What you think or believe about something.', example: 'She shared her opinion in the meeting.', imageSlug: img('opinion') },
    { word: 'AGREE', partOfSpeech: 'verb', definition: 'To have the same opinion as someone.', example: 'We all agreed to move forward.', imageSlug: img('agree') },
    { word: 'DISAGREE', partOfSpeech: 'verb', definition: 'To have a different opinion from someone.', example: 'I disagree with Tim about the timing.', imageSlug: img('disagree') },
    { word: 'POINT', partOfSpeech: 'noun', definition: 'An idea or reason that someone gives in a discussion.', example: 'Maria made a very good point.', imageSlug: img('point') },
    { word: 'VIEW', partOfSpeech: 'noun', definition: 'Another word for opinion.', example: 'Tim shared his view on the project.', imageSlug: img('view') },
    { word: 'RESPECTFULLY', partOfSpeech: 'adverb', definition: 'In a polite way that shows respect for others.', example: 'She disagreed respectfully.', imageSlug: img('respectfully') },
  ],

  phrasalVerbs: [
    { phrase: 'In my opinion, …', tag: 'phrase', definition: 'Use this to introduce your idea.', example: '"In my opinion, we should invest more in training."', imageSlug: img('in-my-opinion') },
    { phrase: 'From my point of view, …', tag: 'phrase', definition: 'Another way to give your opinion.', example: '"From my point of view, this is the best option."', imageSlug: img('from-my-point-of-view') },
    { phrase: 'I agree with … because…', tag: 'phrase', definition: 'Use this to support an idea and give a reason.', example: '"I agree with Tim because the deadline is realistic."', inAction: 'Always add "because…". A reason makes your agreement stronger and more useful.', imageSlug: img('i-agree-because') },
    { phrase: 'I see your point, but I think…', tag: 'phrase', definition: 'Use this to disagree politely. First show you understand.', example: '"I see your point, but I think we need more time."', imageSlug: img('i-see-your-point') },
    { phrase: 'I respectfully disagree.', tag: 'phrase', definition: 'A formal, professional way to disagree.', example: '"I respectfully disagree with that suggestion."', imageSlug: img('respectfully-disagree') },
    { phrase: "That's a good point.", tag: 'phrase', definition: "Use this to respond positively to someone's idea.", example: '"That\'s a good point, Maria. I hadn\'t thought of that."', imageSlug: img('good-point') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Next point: training. Should we run it online or in person? I'd like everyone's [[view:opinion]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'In my [[opinion:what I think]], online is better. It\'s cheaper and people can join from any office.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I see your [[point:idea or reason]], Tim, but I think people learn more in person. Online sessions are easy to ignore." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's a good point. People do check emails during online calls." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'From my point of view, a mix could work. Short online sessions plus one in-person day.' },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: 'I [[agree:have the same opinion]] with Kira because it saves money and keeps people engaged.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "I don't fully agree on the timing, but I like the idea. I'd [[respectfully:politely]] suggest we do the in-person day first." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Fair enough. Nobody seems to [[disagree:have a different opinion]] with that. In-person day first, then online sessions." },
  ],

  matchingExercise: [
    { word: 'OPINION', definition: 'What you think about something' },
    { word: 'AGREE', definition: 'To have the same opinion' },
    { word: 'DISAGREE', definition: 'To have a different opinion' },
    { word: 'POINT', definition: 'An idea or reason in a discussion' },
    { word: 'VIEW', definition: 'Another word for opinion' },
    { word: 'RESPECTFULLY', definition: 'In a polite way' },
  ],

  fillBlankExercise: [
    { before: 'In my', after: ', we should hire two more people.', answer: 'opinion' },
    { before: 'I see your', after: ', but I think it\'s too expensive.', answer: 'point' },
    { before: 'I', after: 'with Maria because her plan is realistic.', answer: 'agree' },
    { before: 'I', after: 'disagree with that suggestion.', answer: 'respectfully' },
    { before: 'From my point of', after: ', this is the best option.', answer: 'view' },
    { before: "That's a good", after: ', Tim.', answer: 'point' },
  ],

  multipleChoiceExercise: [
    { question: 'Which phrase disagrees politely?', options: ["You're wrong.", 'I see your point, but I think…', 'No way.', 'That is stupid.'], correctIndex: 1 },
    { question: 'Which phrase gives your opinion?', options: ['From my point of view, …', 'Let\'s move on.', 'Thank you for listening.', 'The deadline is Friday.'], correctIndex: 0 },
    { question: 'Why is it good to add "because…" when you agree?', options: ['It makes the meeting longer', 'It gives a reason and makes your point stronger', 'It is more informal', 'It is a rule of grammar'], correctIndex: 1 },
    { question: 'What does "view" mean here: "Tim shared his view"?', options: ['His window', 'His opinion', 'His photo', 'His report'], correctIndex: 1 },
    { question: 'In the dialogue, why does Maria prefer in-person training?', options: ['It is cheaper', 'People learn more and online sessions are easy to ignore', 'The office is bigger', 'She doesn\'t like computers'], correctIndex: 1 },
    { question: 'What does the team decide?', options: ['Only online', 'Only in person', 'An in-person day first, then online sessions', 'No training'], correctIndex: 2 },
  ],
};
