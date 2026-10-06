import { Lesson } from '@/types/lesson';

const R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';
const KIRA = R2 + 'kira-professional-portrait.png';
const TIM = R2 + 'tim-professional-portrait.png';
const img = (s: string) => `${R2}everyday-instagram-${s}.png`;

export const everydayInstagram: Lesson = {
  slug: 'everyday-instagram',
  title: 'Talking About Instagram',
  subtitle: 'Everyday Life · Social Media',
  level: 'B1-B2',
  description:
    'Learn the words, phrasal verbs and everyday expressions people use to talk about Instagram — posts, stories, hashtags, captions, followers and more.',
  heroImage: img('hero'),

  objectives: [
    'Use common Instagram vocabulary naturally.',
    'Use phrasal verbs like come up with, follow back and reply to.',
    'Ask and answer everyday questions about posts and stories.',
  ],

  vocabulary: [
    { word: 'USERNAME', partOfSpeech: 'noun', definition: "The unique name that identifies a user's account.", example: 'My username is "TravelLover123."', imageSlug: img('username') },
    { word: 'FOLLOW', partOfSpeech: 'verb', definition: "To subscribe to someone's updates.", example: 'I follow a lot of travel bloggers.', imageSlug: img('follow') },
    { word: 'FOLLOWER', partOfSpeech: 'noun', definition: "A person who subscribes to another user's updates.", example: 'She has thousands of followers.', imageSlug: img('follower') },
    { word: 'LIKE', partOfSpeech: 'noun / verb', definition: 'To show you enjoy a post by tapping a button; the tap itself.', example: 'Her photo got 200 likes.', imageSlug: img('like') },
    { word: 'POST', partOfSpeech: 'noun / verb', definition: 'To share a photo, video or text on your account; the thing you share.', example: "I'm going to post a picture of my lunch.", imageSlug: img('post') },
    { word: 'HASHTAG', partOfSpeech: 'noun', definition: 'A word or phrase after a "#" used to group posts by topic.', example: 'I added #ThrowbackThursday to my holiday photo.', imageSlug: img('hashtag') },
    { word: 'FEED', partOfSpeech: 'noun', definition: 'The stream of posts you see when you open the app.', example: 'My feed is full of cute animals.', imageSlug: img('feed') },
    { word: 'CAPTION', partOfSpeech: 'noun', definition: 'The text you write under a photo.', example: 'I love the caption on your sunset photo.', imageSlug: img('caption') },
    { word: 'STORY', partOfSpeech: 'noun', definition: 'A short post that disappears after 24 hours.', example: 'I posted a funny video on my story.', imageSlug: img('story') },
    { word: 'TAG', partOfSpeech: 'noun / verb', definition: 'To mention someone in a post using "@".', example: 'I tagged my best friend in the beach photo.', imageSlug: img('tag') },
    { word: 'COMMENT', partOfSpeech: 'noun / verb', definition: 'A message someone leaves on a post.', example: 'I got a lovely comment on my latest post.', imageSlug: img('comment') },
  ],

  phrasalVerbs: [
    { phrase: 'COME UP WITH', definition: 'To think of an idea.', example: 'Can you come up with a good caption for this photo?', imageSlug: img('come-up-with') },
    { phrase: 'THINK OF', definition: 'To have an idea or remember something.', example: "I can't think of anyone to tag.", imageSlug: img('think-of') },
    { phrase: 'CLICK ON', definition: 'To select something by pressing or tapping it.', example: 'She clicked on the hashtag to see more posts.', imageSlug: img('click-on') },
    { phrase: 'REPLY TO', definition: 'To answer a message or comment.', example: "I'll reply to her comment later.", imageSlug: img('reply-to') },
    { phrase: 'FOLLOW BACK', definition: 'To follow someone who already follows you.', example: 'I always follow back my friends.', imageSlug: img('follow-back') },
    { phrase: 'TAG (someone) IN', definition: 'To mention someone in a post or photo.', example: 'Can you tag me in that photo?', inAction: 'Separable: "tag ME in the photo", "tag SARAH in it". The person goes between TAG and IN.', imageSlug: img('tag-in') },
    { phrase: "What's your username? I'll follow you.", tag: 'phrase', definition: 'Ask for someone\'s account so you can follow them.', example: '"What\'s your username? I\'ll follow you." → "It\'s @AmberAdventures."', imageSlug: img('whats-your-username') },
    { phrase: "Did you see ___'s latest post / story?", tag: 'phrase', definition: 'Ask if someone saw a recent post or story.', example: '"Did you see Jane\'s latest story? She\'s in Bali!"', imageSlug: img('latest-post') },
    { phrase: 'How many likes did your post get?', tag: 'phrase', definition: 'Ask how popular a post was.', example: '"How many likes did your picture get?" → "Over a hundred!"', imageSlug: img('how-many-likes') },
  ],

  videos: [],

  dialogue: [
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Hey, Kira! Long time no see. How's everything going?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Hi, Tim! Good, thanks. By the way, I've just started using Instagram." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Oh, cool! What's your [[username:the name of your account]]? I'll [[follow:subscribe to your updates]] you." },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "It's @KiraAdventures. And I'll [[follow you back:follow you because you follow me]]." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Great, I'll [[click on:tap]] the follow button right now. Are you going to [[post:share]] pictures from your hiking trip?" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Yes! I'll add [[hashtags:#words that group posts]] like #NatureLovers so more people see them." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'Good idea. Hiking photos always get loads of [[likes:taps to show you enjoy a post]].' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "The hard part is the [[captions:text under a photo]]. I can never [[come up with:think of]] anything catchy." },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: 'I just [[think of:have the idea of]] the mood of the photo. For a sunset, maybe "Chasing moments."' },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Nice! Oh, and I saw Alice's photo from the barbecue in my [[feed:stream of posts]]. Can you [[tag me in:mention me in]] yours too?" },
    { speaker: 'Tim', speakerAvatar: TIM, speakerColor: 'green', text: "Sure. I'll put it on my [[story:post that disappears after 24 hours]] as well. And remember to [[reply to:answer]] your [[comments:messages people leave on a post]]!" },
    { speaker: 'Kira', speakerAvatar: KIRA, speakerColor: 'purple', text: "Will do. Let's plan a hike soon and take some great photos. See you online!" },
  ],

  matchingExercise: [
    { word: 'CAPTION', definition: 'The text under a photo' },
    { word: 'STORY', definition: 'A post that disappears after 24 hours' },
    { word: 'HASHTAG', definition: 'A # word that groups posts' },
    { word: 'FEED', definition: 'The stream of posts you see' },
    { word: 'FOLLOW BACK', definition: 'Follow someone who follows you' },
    { word: 'COME UP WITH', definition: 'Think of an idea' },
  ],

  fillBlankExercise: [
    { before: "I just created a new", after: '. It\'s "TravelDreamer567."', answer: 'username' },
    { before: 'To get more views, Emily added the', after: '#FoodieDelights.', answer: 'hashtag' },
    { before: "Jenna's Instagram", after: 'is full of animal pictures.', answer: 'feed' },
    { before: 'Did you come up', after: 'a new caption?', answer: 'with' },
    { before: 'I try to reply', after: 'all the comments I get.', answer: 'to' },
    { before: "Don't forget to tag me", after: 'the picture!', answer: 'in' },
  ],

  multipleChoiceExercise: [
    { question: 'What is a "story" on Instagram?', options: ['A long blog post', 'A post that disappears after 24 hours', 'A private message', 'A comment'], correctIndex: 1 },
    { question: 'What does "follow back" mean?', options: ['Unfollow someone', 'Follow someone who follows you', 'Go back to the feed', 'Delete a post'], correctIndex: 1 },
    { question: 'Which is correct?', options: ['Tag in me the photo.', 'Tag me in the photo.', 'Tag the photo in me.', 'In tag me the photo.'], correctIndex: 1 },
    { question: 'In the dialogue, what does Kira find difficult?', options: ['Choosing hashtags', 'Writing captions', 'Taking photos', 'Finding followers'], correctIndex: 1 },
    { question: 'What caption idea does Tim give for a sunset?', options: ['"Golden hour"', '"Chasing moments"', '"Sunset vibes"', '"Nature lovers"'], correctIndex: 1 },
  ],
};
