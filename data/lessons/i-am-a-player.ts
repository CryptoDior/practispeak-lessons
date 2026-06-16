import { Lesson } from '@/types/lesson';

export const iAmAPlayer: Lesson = {
  slug: 'i-am-a-player',
  title: 'I Am a Player',
  subtitle: 'Simple present and self-introduction for gamers',
  level: 'A1-A2',
  description: 'Learn how to introduce yourself in a game lobby — your username, platform, playstyle, and favourite game — using simple present.',
  heroImage: '/images/i-am-a-player-hero.png',

  vocabulary: [
    {
      word: 'USERNAME',
      partOfSpeech: 'noun',
      definition: 'The name you choose for your account in a game.',
      example: 'My username is DragonSlayer99. What is your username?',
      imageSlug: '/images/username.png',
    },
    {
      word: 'RANK',
      partOfSpeech: 'noun',
      definition: 'A title or number that shows how skilled you are.',
      example: 'I am Silver rank. I want to reach Gold next season.',
      imageSlug: '/images/rank.png',
    },
    {
      word: 'MAIN',
      partOfSpeech: 'noun',
      definition: 'The character you play most often.',
      example: 'My main is the warrior. I play him in every match.',
      imageSlug: '/images/i-am-a-player-main.png',
    },
    {
      word: 'SOLO',
      partOfSpeech: 'adverb',
      definition: 'Playing alone, without a team.',
      example: 'I usually play solo because my friends are offline.',
      imageSlug: '/images/solo.png',
    },
    {
      word: 'SQUAD',
      partOfSpeech: 'noun',
      definition: 'A group of players who play together as a team.',
      example: 'I play with my squad every weekend. We are four players.',
      imageSlug: '/images/squad.png',
    },
    {
      word: 'PLATFORM',
      partOfSpeech: 'noun',
      definition: 'The device you use to play — PC, console, or mobile.',
      example: 'I play on PC. What is your platform?',
      imageSlug: '/images/platform.png',
    },
    {
      word: 'CASUAL',
      partOfSpeech: 'adjective',
      definition: 'Playing for fun, not to compete seriously.',
      example: 'I am a casual player. I play to relax after school.',
      imageSlug: '/images/casual.png',
    },
    {
      word: 'COMPETITIVE',
      partOfSpeech: 'adjective',
      definition: 'Playing seriously to win and improve your rank.',
      example: 'He is a competitive player. He practises for two hours every day.',
      imageSlug: '/images/competitive.png',
    },
    {
      word: 'FAVOURITE',
      partOfSpeech: 'adjective',
      definition: 'The one you like the most.',
      example: 'My favourite game is this one. I play it every day.',
      imageSlug: '/images/favourite.png',
    },
    {
      word: 'HOURS',
      partOfSpeech: 'noun',
      definition: 'The amount of time you have spent playing a game.',
      example: 'I have 500 hours in this game. I know every map.',
      imageSlug: '/images/hours.png',
    },
    {
      word: 'REGION',
      partOfSpeech: 'noun',
      definition: 'The part of the world where your game server is.',
      example: 'I play in the Asia region. My connection is very good.',
      imageSlug: '/images/region.png',
    },
    {
      word: 'LOBBY',
      partOfSpeech: 'noun',
      definition: 'The waiting room where players meet before a match.',
      example: 'I am in the lobby. The match starts in 30 seconds.',
      imageSlug: '/images/lobby.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'MY NAME IS',
      definition: 'Use this to introduce yourself — say your username or real name.',
      example: 'Hi! My name is Kai. Nice to meet you!',
      imageSlug: '/images/my-name-is.png',
    },
    {
      phrase: 'I PLAY ON',
      definition: 'Use this to say which platform or game you play.',
      example: 'I play on PC. Do you play on console or mobile?',
      imageSlug: '/images/i-play-on.png',
    },
    {
      phrase: 'I MAINLY PLAY',
      definition: 'Use this to say which game or character you play most often.',
      example: 'I mainly play battle royale. I love the last-player-standing format.',
      imageSlug: '/images/i-mainly-play.png',
    },
    {
      phrase: 'NICE TO MEET YOU',
      definition: 'A polite phrase to say when you meet someone for the first time.',
      example: 'Nice to meet you! Do you want to play together sometime?',
      imageSlug: '/images/nice-to-meet-you.png',
    },
    {
      phrase: 'I AM A CASUAL PLAYER',
      definition: "Use this to say you play for fun and don't take rank seriously.",
      example: "I am a casual player. I don't worry about my rank — just fun!",
      imageSlug: '/images/i-am-a-casual-player.png',
    },
    {
      phrase: 'HOW LONG HAVE YOU BEEN PLAYING',
      definition: 'Ask this to find out how much experience someone has.',
      example: 'How long have you been playing? I started two months ago.',
      imageSlug: '/images/how-long-have-you-been-playing.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "Hey! Welcome to the [[lobby:the waiting area before a match]]. What's your [[username:the name you choose for your account]]?",
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Hi! My name is Kai — username KaiStorm22. Nice to meet you! Are you [[casual:playing for fun]] or [[competitive:playing seriously to win]]?',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "Mostly casual, but I play ranked sometimes. What's your [[rank:a title showing how skilled you are]]?",
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: "I'm Bronze. I'm new — only 50 [[hours:time spent playing]] so far. What [[platform:the device you play on]] are you on?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'PC. I mainly play in the Asia [[region:the part of the world where your server is]].',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Same! PC, Asia region. Do you play [[solo:alone, without a team]] or with a [[squad:a group who play together]]?',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'Both! Solo in the morning, squad on weekends. Who is your [[main:the character you play most]]?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'The ranger. She is my [[favourite:the one I like the most]] — fast and good from long range. Want to play together?',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'For sure! The match starts in 30 seconds. Good luck, Kai!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: "You too! Let's win this one!",
    }
  ],

  matchingExercise: [
    {
        "word": "USERNAME",
        "definition": "Your chosen name in the game"
    },
    {
        "word": "RANK",
        "definition": "A title showing your skill level"
    },
    {
        "word": "MAIN",
        "definition": "The character you play most"
    },
    {
        "word": "SOLO",
        "definition": "Playing alone, without a team"
    },
    {
        "word": "SQUAD",
        "definition": "A group who play together"
    },
    {
        "word": "PLATFORM",
        "definition": "The device you play on"
    },
    {
        "word": "CASUAL",
        "definition": "Playing for fun, not to compete"
    },
    {
        "word": "LOBBY",
        "definition": "The waiting area before a match"
    }
],
  fillBlankExercise: [
    {
        "before": "My",
        "after": "is KaiStorm22. What is yours?",
        "answer": "username"
    },
    {
        "before": "I play on",
        "after": "— it's my favourite platform.",
        "answer": "pc"
    },
    {
        "before": "I am a",
        "after": "player. I play just for fun.",
        "answer": "casual"
    },
    {
        "before": "My",
        "after": "is the ranger. I play her every match.",
        "answer": "main"
    },
    {
        "before": "I play in the Asia",
        "after": ". My connection is very fast.",
        "answer": "region"
    },
    {
        "before": "I have 500",
        "after": "in this game. I know every map.",
        "answer": "hours"
    },
    {
        "before": "We are a",
        "after": "of four — we play together every weekend.",
        "answer": "squad"
    },
    {
        "before": "Everyone is in the",
        "after": ". The match starts in 10 seconds.",
        "answer": "lobby"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What is Kai's username?",
        "options": [
            "DragonSlayer99",
            "KaiStorm22",
            "Alex22",
            "BronzeKai"
        ],
        "correctIndex": 1
    },
    {
        "question": "What rank is Kai?",
        "options": [
            "Silver",
            "Gold",
            "Bronze",
            "Platinum"
        ],
        "correctIndex": 2
    },
    {
        "question": "What platform does Alex play on?",
        "options": [
            "Console",
            "Mobile",
            "PC",
            "Both PC and console"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Alex usually play — solo or with a squad?",
        "options": [
            "Always solo",
            "Always with a squad",
            "Solo in the morning, squad on weekends",
            "Only in ranked matches"
        ],
        "correctIndex": 2
    },
    {
        "question": "Who is Kai's main character?",
        "options": [
            "The warrior",
            "The mage",
            "The tank",
            "The ranger"
        ],
        "correctIndex": 3
    },
    {
        "question": "How many hours has Kai played so far?",
        "options": [
            "500 hours",
            "200 hours",
            "50 hours",
            "1,000 hours"
        ],
        "correctIndex": 2
    }
],
};
