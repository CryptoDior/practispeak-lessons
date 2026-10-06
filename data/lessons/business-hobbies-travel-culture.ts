import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}business-hobbies-travel-culture-${s}.png`;

export const businessHobbiesTravelCulture: Lesson = {
  slug: 'business-hobbies-travel-culture',
  title: 'Asking About Hobbies, Travel and Culture',
  subtitle: 'B1-B2 · Networking & Small Talk · Lesson 3',
  level: 'B1-B2',
  description:
    'Build stronger work relationships with personal small talk. Learn how to ask about hobbies, travel and culture, and respond with real interest.',
  heroImage: img('hero'),

  objectives: [
    'Ask colleagues and clients about hobbies and travel.',
    'Ask about traditions and festivals respectfully.',
    'Respond warmly and show interest in other people\'s stories.',
  ],

  vocabulary: [
    { word: 'HOBBY', partOfSpeech: 'noun', definition: 'An activity you do for pleasure in your free time.', example: 'My main hobby is photography.', imageSlug: img('hobby') },
    { word: 'CULTURE', partOfSpeech: 'noun', definition: 'The ideas, customs and behaviour of a group of people.', example: 'I love learning about different cultures.', imageSlug: img('culture') },
    { word: 'TRADITION', partOfSpeech: 'noun', definition: 'A custom passed down from older generations.', example: "It's a family tradition to have dinner together on Sundays.", imageSlug: img('tradition') },
    { word: 'DESTINATION', partOfSpeech: 'noun', definition: 'The place someone is travelling to.', example: 'Paris is my favourite travel destination.', imageSlug: img('destination') },
    { word: 'FESTIVAL', partOfSpeech: 'noun', definition: 'A day or period of celebration, often cultural or religious.', example: 'The town has a wine festival every summer.', imageSlug: img('festival') },
  ],

  phrasalVerbs: [
    { phrase: 'GET AWAY', definition: 'To go somewhere for a short break or holiday.', example: 'I try to get away every few months.', imageSlug: img('get-away') },
    { phrase: 'LOOK AROUND', definition: 'To explore a place and see what it is like.', example: 'We looked around the old city after the meeting.', imageSlug: img('look-around') },
    { phrase: 'CATCH UP (WITH)', definition: "To talk with someone you haven't seen for a while.", example: 'We caught up over dinner last night.', imageSlug: img('catch-up') },
    { phrase: 'WHEN IN ROME', tag: 'idiom', definition: 'When you are in another place, follow the local customs.', example: 'I always try the local food when I travel. When in Rome!', imageSlug: img('when-in-rome') },
    { phrase: "BROADEN ONE'S HORIZONS", tag: 'idiom', definition: 'To increase your knowledge and experience.', example: 'Travelling abroad really broadened my horizons.', imageSlug: img('broaden-horizons') },
    { phrase: 'Do you travel often for work?', tag: 'phrase', definition: 'Open a polite conversation about work and lifestyle.', example: '"Do you travel often for work, or mostly for fun?"', imageSlug: img('travel-often') },
    { phrase: 'What do people usually do during that festival?', tag: 'phrase', definition: 'Ask about local customs and traditions.', example: '"What do people usually do during Diwali?"', inAction: 'Asking about traditions shows respect and interest. Avoid comparing ("Ours is better!").', imageSlug: img('festival-question') },
    { phrase: 'That must have been an unforgettable experience.', tag: 'phrase', definition: 'Respond warmly when someone shares a travel story.', example: '"You saw the Northern Lights? That must have been an unforgettable experience."', imageSlug: img('unforgettable') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Tim, do you travel often for work?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Not much for work, but I try to [[get away:go somewhere for a short break]] every few months. Last month I went to India." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: 'Wow! What was your favourite [[destination:the place you travel to]] there?' },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Jaipur. We [[looked around:explored]] the old city, and I arrived during Diwali, the festival of lights." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "That must have been an unforgettable experience. What do people usually do during that [[festival:a period of celebration]]?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "They light small lamps, share sweets and visit family. It's a really beautiful [[tradition:a custom from older generations]]." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "I've always wanted to try Indian food there. Did you?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Every day! When in Rome… Honestly, it really broadened my horizons. What's your [[hobby:activity for pleasure]], Kira?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Photography. I think travel and photos help us understand people and [[culture:customs and ideas of a group]] better." },
  ],

  matchingExercise: [
    { word: 'CULTURE', definition: 'The ideas and customs of a group of people' },
    { word: 'TRADITION', definition: 'A custom from older generations' },
    { word: 'DESTINATION', definition: 'The place you travel to' },
    { word: 'FESTIVAL', definition: 'A period of celebration' },
    { word: 'GET AWAY', definition: 'To go somewhere for a short break' },
    { word: 'WHEN IN ROME', definition: 'Follow local customs when you travel' },
  ],

  fillBlankExercise: [
    { before: 'Do you travel', after: 'for work?', answer: 'often' },
    { before: 'I try to get', after: 'every few months.', answer: 'away' },
    { before: 'We looked', after: 'the old city.', answer: 'around' },
    { before: 'What do people usually do during that', after: '?', answer: 'festival' },
    { before: 'That must have been an', after: 'experience.', answer: 'unforgettable' },
    { before: 'Travelling really broadened my', after: '.', answer: 'horizons' },
  ],

  multipleChoiceExercise: [
    { question: 'What does "get away" mean?', options: ['Escape from the police', 'Go somewhere for a short break', 'Leave a meeting early', 'Move house'], correctIndex: 1 },
    { question: 'What does "When in Rome" mean?', options: ['Visit Italy', 'Follow local customs when you travel', 'Eat Italian food', 'Travel alone'], correctIndex: 1 },
    { question: 'Someone tells you an amazing travel story. What do you say?', options: ['That must have been an unforgettable experience.', 'OK.', 'I don\'t like travel.', 'Let\'s wrap up.'], correctIndex: 0 },
    { question: 'Which question asks about traditions respectfully?', options: ['Why do you do that?', 'What do people usually do during that festival?', 'Isn\'t that strange?', 'Is it boring?'], correctIndex: 1 },
    { question: 'In the dialogue, where did Tim travel?', options: ['Japan', 'India', 'Mexico', 'Italy'], correctIndex: 1 },
    { question: 'What is Kira\'s hobby?', options: ['Cooking', 'Photography', 'Travel', 'Painting'], correctIndex: 1 },
  ],
};
