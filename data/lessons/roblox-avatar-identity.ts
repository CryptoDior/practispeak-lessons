
import { Lesson } from '@/types/lesson';

export const robloxAvatarIdentity: Lesson = {
  slug: 'roblox-avatar-identity',
  title: 'Getting Started — Avatar & Identity',
  subtitle: 'Your name, your look, your character — in Roblox and real life',
  level: 'A1',
  description: 'Learn the words for who you are in Roblox — your avatar, username, and character — and discover that the same words work in real life too.',
  heroImage: '/images/roblox-avatar-identity-hero.png',

  vocabulary: [
    {
      word: 'AVATAR',
      partOfSpeech: 'noun',
      definition: 'The character or image that represents YOU in a game or online.',
      example: 'In Roblox: Your avatar is the figure you dress up and play as. In real life: Many apps let you create an avatar that looks like you.',
      imageSlug: '/images/roblox-avatar-identity-avatar.png',
    },
    {
      word: 'CHARACTER',
      partOfSpeech: 'noun',
      definition: 'The person or figure you control in a game — or a person in a story.',
      example: 'In Roblox: Choose your character before the game starts. In real life: Harry Potter is a famous character in a book.',
      imageSlug: '/images/roblox-avatar-identity-character.png',
    },
    {
      word: 'USERNAME',
      partOfSpeech: 'noun',
      definition: 'The special name you use to log in and be known online.',
      example: 'In Roblox: My username is CoolBuilder99. In real life: You need a username to join any website or app.',
      imageSlug: '/images/roblox-avatar-identity-username.png',
    },
    {
      word: 'DISPLAY NAME',
      partOfSpeech: 'noun',
      definition: 'The name other players see above your character — it can be different from your username.',
      example: 'In Roblox: My display name is "Zara" but my username is ZaraX2024. In real life: On WhatsApp, your display name is what your friends see.',
      imageSlug: '/images/roblox-avatar-identity-display-name.png',
    },
    {
      word: 'PROFILE',
      partOfSpeech: 'noun',
      definition: 'Your personal page that shows who you are and what you have done.',
      example: 'In Roblox: Click my profile to see my badges and friends. In real life: A profile on a school website shows your name and photo.',
      imageSlug: '/images/roblox-avatar-identity-profile.png',
    },
    {
      word: 'OUTFIT',
      partOfSpeech: 'noun',
      definition: 'The clothes and items that your avatar — or you — is wearing.',
      example: 'In Roblox: I saved my avatar outfit as "Space Explorer." In real life: I love my new outfit — red jacket and blue trainers!',
      imageSlug: '/images/roblox-avatar-identity-outfit.png',
    },
    {
      word: 'CUSTOMIZE',
      partOfSpeech: 'verb',
      definition: 'To change the look of something to make it yours.',
      example: 'In Roblox: You can customize your avatar with different hair and clothes. In real life: I customized my school bag with stickers.',
      imageSlug: '/images/roblox-avatar-identity-customize.png',
    },
    {
      word: 'ACCESSORY',
      partOfSpeech: 'noun',
      definition: 'An extra item you add to your avatar or outfit — like a hat or bag.',
      example: 'In Roblox: I bought a cool hat accessory from the shop. In real life: A watch is a popular accessory.',
      imageSlug: '/images/roblox-avatar-identity-accessory.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'MY USERNAME IS',
      definition: 'How you tell someone your name online.',
      example: 'In Roblox: My username is SuperStar77 — add me! In real life: My username is the same on every app so people can find me.',
      imageSlug: '/images/roblox-avatar-identity-my-username-is.png',
    },
    {
      phrase: 'WHAT DOES YOUR AVATAR LOOK LIKE',
      definition: 'How you ask someone to describe their character.',
      example: 'In Roblox: What does your avatar look like? Mine has blue hair and a red jacket. In real life: We use "what do you look like" to describe a real person.',
      imageSlug: '/images/roblox-avatar-identity-what-does-your-avatar-look-like.png',
    },
    {
      phrase: 'I CUSTOMIZED MY',
      definition: 'How you say you changed something to make it personal.',
      example: 'In Roblox: I customized my avatar — new outfit and a dragon hat! In real life: I customized my phone with a cool case.',
      imageSlug: '/images/roblox-avatar-identity-i-customized-my.png',
    },
    {
      phrase: 'NICE OUTFIT',
      definition: 'A compliment for what someone is wearing — in game or in real life.',
      example: 'In Roblox: Nice outfit! Where did you get that helmet? In real life: Nice outfit! You look great today.',
      imageSlug: '/images/roblox-avatar-identity-nice-outfit.png',
    },
    {
      phrase: 'ADD ME AS A FRIEND',
      definition: 'How you ask someone to connect with you online.',
      example: 'In Roblox: Add me as a friend — search my username! In real life: Add me on the app so we can chat.',
      imageSlug: '/images/roblox-avatar-identity-add-me-as-a-friend.png',
    },
    {
      phrase: 'MY PROFILE SHOWS',
      definition: 'How you describe what is on your personal page.',
      example: 'In Roblox: My profile shows all my badges and my favourite games. In real life: My profile shows my name, photo, and school.',
      imageSlug: '/images/roblox-avatar-identity-my-profile-shows.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: 'Hey! Are you on Roblox? What is your [[username:the special name you use to log in and be known online]]?',
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: 'My username is LeoStars08. Search for me! What about you?',
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: 'I am MiaRockets. But my [[display name:the name other players see above your character]] is just "Mia." It is easier!',
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: 'Good idea. Can I see your [[profile:your personal page that shows who you are and what you have done]]? How many badges do you have?',
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: 'Twenty-three badges! And look at my [[avatar:the character or image that represents you in a game or online]] — I just changed my hair!',
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: 'Nice [[outfit:the clothes and items your avatar is wearing]]! Where did you get that jacket? Is it from the shop?',
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: 'Yes! And I added a star [[accessory:an extra item you add to your avatar or outfit]] to the hat too. I [[customize:to change the look of something to make it yours]] everything!',
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: 'I love it! My [[character:the person or figure you control in a game — or a person in a story]] is not as cool. I need to go shopping!',
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "It is just like real life! You [[customize:to change the look of something to make it yours]] your room, your bag, your phone... now your avatar too!",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: 'Ha! True! OK — add me as a friend and let us play. Search for LeoStars08!',
    }
  ],

  matchingExercise: [
    { word: 'AVATAR', definition: 'The character or image that represents you online' },
    { word: 'USERNAME', definition: 'Your special name for logging in online' },
    { word: 'DISPLAY NAME', definition: 'The name other players see above your character' },
    { word: 'PROFILE', definition: 'Your personal page showing your badges and games' },
    { word: 'OUTFIT', definition: 'The clothes your avatar is wearing' },
    { word: 'CUSTOMIZE', definition: 'To change something to make it yours' },
    { word: 'ACCESSORY', definition: 'An extra item like a hat or bag added to your look' },
    { word: 'CHARACTER', definition: 'The figure you control — in a game or a story' },
  ],

  fillBlankExercise: [
    { before: 'My', after: 'is MiaRockets — search for me on Roblox!', answer: 'username' },
    { before: 'I love your', after: '— that jacket looks amazing on your avatar!', answer: 'outfit' },
    { before: 'You can', after: 'your avatar with new hair, clothes, and accessories.', answer: 'customize' },
    { before: 'Click on my', after: 'to see all my badges and favourite games.', answer: 'profile' },
    { before: 'My', after: 'is "Mia" so it is easy for friends to find me in the game.', answer: 'display name' },
    { before: 'I added a cool hat', after: 'to my avatar. It looks great!', answer: 'accessory' },
    { before: 'Your', after: 'has blue hair and a red jacket — I love it!', answer: 'avatar' },
    { before: 'Harry Potter is my favourite book', answer: 'character', after: '— he is brave and funny.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is Mia\'s username?',
      options: ['LeoStars08', 'MiaRockets', 'Mia', 'SuperStar77'],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between a username and a display name?',
      options: [
        'They are exactly the same.',
        'A username is your score. A display name is your level.',
        'A username is for logging in. A display name is what others see.',
        'A display name is longer than a username.',
      ],
      correctIndex: 2,
    },
    {
      question: 'How many badges does Mia have?',
      options: ['Eight', 'Thirty', 'Twenty-three', 'Two'],
      correctIndex: 2,
    },
    {
      question: 'What does Mia say about customizing in real life?',
      options: [
        'You can only customize in Roblox.',
        'You customize your room, bag, phone — and now your avatar too.',
        'Customizing is only for clothes.',
        'Real life and Roblox are completely different.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does Leo want to do after the conversation?',
      options: [
        'Change his username.',
        'Buy a new controller.',
        'Customize his avatar and then play with Mia.',
        'Delete his profile.',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which word means "an extra item added to your avatar\'s look"?',
      options: ['Profile', 'Outfit', 'Accessory', 'Character'],
      correctIndex: 2,
    },
  ],
};
