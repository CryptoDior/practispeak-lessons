import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const MARIA = R2 + 'professional-portrait-latina-woman-terracotta-top.png';
const img = (s: string) => `${R2}business-building-consensus-${s}.png`;

export const businessBuildingConsensus: Lesson = {
  slug: 'business-building-consensus',
  title: 'Building Consensus',
  subtitle: 'C1-C2 · Meetings & Negotiation · Lesson 4',
  level: 'C1-C2',
  description:
    'Learn how to bring a group with different priorities to genuine agreement: find common ground, check alignment, build on others\' ideas and settle on a shared solution.',
  heroImage: img('hero'),

  objectives: [
    'Identify common ground between different positions.',
    'Check alignment and build on others\' ideas.',
    'Guide a group to a decision everyone supports.',
  ],

  vocabulary: [
    { word: 'CONSENSUS', partOfSpeech: 'noun', definition: 'A general agreement reached by a group.', example: 'True consensus requires active listening.', imageSlug: img('consensus') },
    { word: 'ALIGNMENT', partOfSpeech: 'noun', definition: 'Agreement and coordination between people or ideas.', example: 'Let\'s check for alignment before moving forward.', imageSlug: img('alignment') },
    { word: 'COMPROMISE', partOfSpeech: 'noun', definition: 'A middle solution where each side gives up something.', example: 'We reached a compromise on pricing.', imageSlug: img('compromise') },
    { word: 'COLLABORATION', partOfSpeech: 'noun', definition: 'Working together towards a shared goal.', example: 'Strong collaboration leads to faster results.', imageSlug: img('collaboration') },
    { word: 'UNANIMOUS', partOfSpeech: 'adjective', definition: 'Agreed by everyone.', example: "The team's decision was unanimous.", imageSlug: img('unanimous') },
    { word: 'COMMON GROUND', partOfSpeech: 'noun', definition: 'Ideas or interests that different sides share.', example: 'Despite the debate, we found common ground.', imageSlug: img('common-ground') },
  ],

  phrasalVerbs: [
    { phrase: 'BRING TOGETHER', definition: 'To unite people or ideas.', example: 'This workshop brings together all departments.', imageSlug: img('bring-together') },
    { phrase: 'AGREE ON', definition: 'To reach the same decision.', example: 'We agreed on the next steps.', imageSlug: img('agree-on') },
    { phrase: 'WORK TOWARDS', definition: 'To make progress towards a goal.', example: "We're working towards a shared solution.", imageSlug: img('work-towards') },
    { phrase: 'SETTLE ON', definition: 'To choose after considering options.', example: 'We settled on the hybrid model.', imageSlug: img('settle-on') },
    { phrase: 'It sounds like we all agree that…', tag: 'phrase', definition: 'Highlight common ground.', example: '"It sounds like we all agree that customer experience comes first."', imageSlug: img('all-agree') },
    { phrase: "Building on what Maria said…", tag: 'phrase', definition: 'Connect your idea to someone else\'s.', example: '"Building on what Maria said, we could pilot it in one region."', inAction: 'Building on others\' ideas ("building on…", "to add to that…") creates shared ownership — people support decisions they helped shape.', imageSlug: img('building-on') },
    { phrase: 'Is there anything that would stop you from supporting this?', tag: 'phrase', definition: 'Check for hidden objections before deciding.', example: '"Before we finalise — is there anything that would stop you from supporting this?"', imageSlug: img('stop-you-supporting') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Today we need to [[settle on:choose after considering options]] a return-to-office policy. Sales wants three days in, IT wants fully remote." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "My team is twice as productive at home. Commuting wastes two hours a day." },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "But new sales staff learn much faster when they sit next to experienced people." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It sounds like we all agree on two things: productivity matters, and new people need support. That's our [[common ground:shared ideas]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Building on what Maria said — what if office days were team days, focused on [[collaboration:working together]] and mentoring?" },
    { speaker: 'Maria', speakerAvatar: MARIA, speakerColor: 'orange', text: "I like that. Two fixed team days, and new hires come in more during their first three months." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That feels like real [[alignment:agreement and coordination]]. Is there anything that would stop either of you from supporting this?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "No. It's a fair [[compromise:middle solution]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Then it's [[unanimous:agreed by everyone]]. Great work — I'll share the policy draft tomorrow." },
  ],

  matchingExercise: [
    { word: 'CONSENSUS', definition: 'A general agreement' },
    { word: 'ALIGNMENT', definition: 'Agreement and coordination' },
    { word: 'UNANIMOUS', definition: 'Agreed by everyone' },
    { word: 'COMMON GROUND', definition: 'Shared ideas or interests' },
    { word: 'SETTLE ON', definition: 'To choose after considering options' },
    { word: 'BRING TOGETHER', definition: 'To unite people or ideas' },
  ],

  fillBlankExercise: [
    { before: 'It sounds like we all', after: 'that customers come first.', answer: 'agree' },
    { before: '', after: 'on what Maria said, we could pilot it.', answer: 'Building' },
    { before: 'We', after: 'on the hybrid model.', answer: 'settled' },
    { before: 'The decision was', after: '. Everyone agreed.', answer: 'unanimous' },
    { before: 'Despite the debate, we found common', after: '.', answer: 'ground' },
    { before: 'This workshop brings', after: 'all departments.', answer: 'together' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "unanimous" mean?', options: ['Most people agree', 'Everyone agrees', 'Nobody agrees', 'Anonymous'], correctIndex: 1 },
    { question: 'Why build on other people\'s ideas?', options: ['To take credit', 'It creates shared ownership of the decision', 'It is faster', 'It avoids decisions'], correctIndex: 1 },
    { question: 'Which question checks for hidden objections?', options: ['Is there anything that would stop you from supporting this?', 'Shall we start?', 'Who is late?', 'What time is it?'], correctIndex: 0 },
    { question: 'In the dialogue, what is the common ground?', options: ['Everyone wants five office days', 'Productivity matters and new people need support', 'Remote work is bad', 'Commuting is fun'], correctIndex: 1 },
    { question: 'What policy do they agree on?', options: ['Fully remote', 'Three days in', 'Two fixed team days, more for new hires', 'Five days in'], correctIndex: 2 },
  ],
};
