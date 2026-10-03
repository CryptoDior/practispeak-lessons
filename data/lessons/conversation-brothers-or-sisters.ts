import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}conversation-brothers-or-sisters-${s}.png`;

export const conversationBrothersOrSisters: Lesson = {
  slug: 'conversation-brothers-or-sisters',
  title: 'Do You Have Brothers or Sisters?',
  subtitle: 'Everyday Conversation · Lesson 12',
  level: 'A1-A2',
  description:
    'Learn how to talk about your family. Ask "Do you have brothers or sisters?" and talk about older and younger brothers and sisters.',
  heroImage: img('hero'),

  objectives: [
    'Ask and answer "Do you have brothers or sisters?".',
    'Say how many brothers and sisters you have.',
    'Use older, younger and only child.',
  ],

  vocabulary: [
    { word: 'BROTHER', partOfSpeech: 'noun', definition: 'A boy or man who has the same parents as you.', example: 'I have one brother.', imageSlug: img('brother') },
    { word: 'SISTER', partOfSpeech: 'noun', definition: 'A girl or woman who has the same parents as you.', example: 'I have two sisters.', imageSlug: img('sister') },
    { word: 'OLDER', partOfSpeech: 'adjective', definition: 'Born before you. More years old.', example: 'He is my older brother.', imageSlug: img('older') },
    { word: 'YOUNGER', partOfSpeech: 'adjective', definition: 'Born after you. Fewer years old.', example: 'She is my younger sister.', imageSlug: img('younger') },
    { word: 'ONLY CHILD', partOfSpeech: 'noun', definition: 'A person with no brothers or sisters.', example: 'I am an only child.', imageSlug: img('only-child') },
    { word: 'SIBLINGS', partOfSpeech: 'noun', definition: 'Brothers and sisters.', example: "I don't have siblings.", imageSlug: img('siblings') },
    { word: 'PARENTS', partOfSpeech: 'noun', definition: 'Your mother and father.', example: 'My parents live in Durban.', imageSlug: img('parents') },
  ],

  phrasalVerbs: [
    { phrase: 'Do you have brothers or sisters?', tag: 'phrase', definition: 'A question about family.', example: '"Do you have brothers or sisters?" → "Yes, I do."', imageSlug: img('do-you-have') },
    { phrase: "Yes, I do. / No, I don't.", tag: 'phrase', definition: 'Short answers to "Do you have…?".', example: '"Do you have a sister?" → "No, I don\'t."', imageSlug: img('yes-i-do') },
    { phrase: 'I have one brother.', tag: 'phrase', definition: 'Say how many brothers or sisters you have.', example: '"I have one brother and two sisters."', inAction: 'One brother, two brothers. One sister, three sisters. Add -s for more than one.', imageSlug: img('i-have-one-brother') },
    { phrase: 'I am an only child.', tag: 'phrase', definition: 'You have no brothers or sisters.', example: '"I don\'t have siblings. I am an only child."', imageSlug: img('only-child-phrase') },
    { phrase: 'He is my older brother.', tag: 'phrase', definition: 'Say if your brother or sister is older or younger.', example: '"She is my younger sister. She is 15."', imageSlug: img('older-brother') },
    { phrase: "Really? That's nice!", tag: 'phrase', definition: 'A friendly reaction.', example: '"I have a twin sister." → "Really? That\'s nice!"', imageSlug: img('thats-nice') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Tim, do you have [[brother:a boy with the same parents]]s or [[sister:a girl with the same parents]]s?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Yes, I do. I have one [[older:born before me]] sister.' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Really? How old is she?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "She's 30. She lives in London. And you? Do you have [[siblings:brothers and sisters]]?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Yes. I have two brothers. One older brother and one [[younger:born after me]] brother.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "That's nice! Do you see them a lot?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'My younger brother lives with my [[parents:mother and father]], so I see him on Sundays.' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'My friend Leo is an [[only child:a person with no brothers or sisters]]. He says it\'s very quiet at home!' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Ha! My home is never quiet." },
  ],

  matchingExercise: [
    { word: 'BROTHER', definition: 'A boy with the same parents as you' },
    { word: 'SISTER', definition: 'A girl with the same parents as you' },
    { word: 'OLDER', definition: 'Born before you' },
    { word: 'YOUNGER', definition: 'Born after you' },
    { word: 'ONLY CHILD', definition: 'A person with no brothers or sisters' },
    { word: 'SIBLINGS', definition: 'Brothers and sisters' },
  ],

  fillBlankExercise: [
    { before: 'Do you have brothers or', after: '?', answer: 'sisters' },
    { before: 'Yes, I', after: '. I have one brother.', answer: 'do' },
    { before: 'I have two', after: 'and one sister.', answer: 'brothers' },
    { before: 'I don\'t have siblings. I am an only', after: '.', answer: 'child' },
    { before: 'She is 10. She is my', after: 'sister.', answer: 'younger' },
    { before: 'My', after: 'are my mother and father.', answer: 'parents' },
  ],

  multipleChoiceExercise: [
    { question: '"Do you have brothers or sisters?" What is a good answer?', options: ['Yes, I do. I have one sister.', "I'm from Spain.", "It's 3 o'clock.", 'I like music.'], correctIndex: 0 },
    { question: 'What does "only child" mean?', options: ['A very young child', 'A person with no brothers or sisters', 'A person with many siblings', 'A child who lives alone'], correctIndex: 1 },
    { question: 'Your brother is 25. You are 20. He is your…', options: ['younger brother', 'older brother', 'only child', 'parent'], correctIndex: 1 },
    { question: 'Which is correct?', options: ['I have two brother.', 'I have two brothers.', 'I has two brothers.', 'I two brothers have.'], correctIndex: 1 },
    { question: 'In the dialogue, how many brothers does Kira have?', options: ['One', 'Two', 'Three', 'None'], correctIndex: 1 },
    { question: 'Where does Tim\'s sister live?', options: ['Durban', 'London', 'Madrid', 'With his parents'], correctIndex: 1 },
  ],
};
