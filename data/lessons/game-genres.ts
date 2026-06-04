import { Lesson } from '@/types/lesson';

export const gameGenres: Lesson = {
  slug: 'game-genres',
  title: 'Game Genres — What Do You Like?',
  subtitle: 'Talk about game types, compare them, and share your preferences',
  level: 'A1-A2',
  description: 'Learn the names of popular game genres and how to compare them — using comparatives and preference phrases to talk about what you like and why.',
  heroImage: '/images/game-genres-hero.png',

  vocabulary: [
    {
      word: 'GENRE',
      partOfSpeech: 'noun',
      definition: 'A category or type of game with its own style and rules.',
      example: 'What genre is this game? It looks like an action RPG.',
      imageSlug: '/images/genre.png',
    },
    {
      word: 'ACTION',
      partOfSpeech: 'noun',
      definition: 'A game type with fast movement, fighting, and quick reactions.',
      example: 'Action games are exciting — you fight and move all the time.',
      imageSlug: '/images/action.png',
    },
    {
      word: 'ADVENTURE',
      partOfSpeech: 'noun',
      definition: 'A game type focused on exploring a world and following a story.',
      example: 'I love adventure games because the stories are amazing.',
      imageSlug: '/images/adventure.png',
    },
    {
      word: 'STRATEGY',
      partOfSpeech: 'noun',
      definition: 'A game type where you plan your moves carefully to beat the enemy.',
      example: 'Strategy games are more difficult than action games — you have to think a lot.',
      imageSlug: '/images/strategy.png',
    },
    {
      word: 'HORROR',
      partOfSpeech: 'noun',
      definition: 'A game type designed to scare you with dark environments and scary enemies.',
      example: "I don't like horror games — they are too scary for me at night!",
      imageSlug: '/images/horror.png',
    },
    {
      word: 'RACING',
      partOfSpeech: 'noun',
      definition: 'A game type where you drive vehicles and compete to finish first.',
      example: 'Racing games are faster than any other genre — the speed is incredible!',
      imageSlug: '/images/racing.png',
    },
    {
      word: 'PUZZLE',
      partOfSpeech: 'noun',
      definition: 'A game type where you solve problems and think creatively to progress.',
      example: 'Puzzle games are harder than they look — this level took me one hour!',
      imageSlug: '/images/puzzle.png',
    },
    {
      word: 'SHOOTER',
      partOfSpeech: 'noun',
      definition: 'A game type where you aim and shoot enemies to win.',
      example: 'Shooter games are more popular than strategy games in my group.',
      imageSlug: '/images/shooter.png',
    },
    {
      word: 'EXCITING',
      partOfSpeech: 'adjective',
      definition: 'Making you feel energetic, happy, and very interested.',
      example: 'Action games are more exciting than puzzle games for me.',
      imageSlug: '/images/exciting.png',
    },
    {
      word: 'DIFFICULT',
      partOfSpeech: 'adjective',
      definition: 'Hard to do — needing a lot of skill and concentration.',
      example: 'This level is more difficult than the last one — I keep losing!',
      imageSlug: '/images/difficult.png',
    },
    {
      word: 'POPULAR',
      partOfSpeech: 'adjective',
      definition: 'Liked and played by many people.',
      example: 'Battle royale is the most popular genre right now — everyone plays it.',
      imageSlug: '/images/popular.png',
    },
    {
      word: 'PREFER',
      partOfSpeech: 'verb',
      definition: 'To like one thing more than another.',
      example: "I prefer adventure games to horror games — I don't like being scared!",
      imageSlug: '/images/prefer.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT KIND OF GAMES DO YOU LIKE',
      definition: 'Ask someone about their favourite game type — a great conversation starter.',
      example: 'What kind of games do you like? I love action and racing games!',
      imageSlug: '/images/what-kind-of-games-do-you-like.png',
    },
    {
      phrase: 'I PREFER TO',
      definition: 'Use this to say you like one thing more than another.',
      example: 'I prefer strategy games to action games — I like thinking carefully.',
      imageSlug: '/images/i-prefer-to.png',
    },
    {
      phrase: 'MORE EXCITING THAN',
      definition: 'Use this comparative phrase to say one thing gives you more energy and interest.',
      example: 'Action games are more exciting than puzzle games — they are so fast!',
      imageSlug: '/images/more-exciting-than.png',
    },
    {
      phrase: 'MY FAVOURITE GENRE IS',
      definition: 'Use this to tell someone which type of game you love the most.',
      example: 'My favourite genre is RPG — I love the long stories and big worlds.',
      imageSlug: '/images/my-favourite-genre-is.png',
    },
    {
      phrase: 'I'M NOT A BIG FAN OF',
      definition: "A polite way to say you don't really enjoy something.",
      example: "I'm not a big fan of horror games — they are too scary for me!",
      imageSlug: '/images/im-not-a-big-fan-of.png',
    },
    {
      phrase: 'HARDER THAN IT LOOKS',
      definition: 'Use this when something is more difficult than you expected.',
      example: 'This puzzle game is harder than it looks — I cannot pass level 3!',
      imageSlug: '/images/harder-than-it-looks.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'Hey Sam! What [[genre:a category of game]] of game are you playing? It looks intense!',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: "It's an [[action:fast games with fighting and movement]] game! Action games are more [[exciting:making you feel energetic and interested]] than puzzle games for me. What do you [[prefer:to like one thing more than another]]?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'I prefer [[strategy:games where you plan carefully to win]] games. They are more [[difficult:hard, needing skill and concentration]] than action games — but I love thinking carefully.',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: "Really? I'm not a big fan of strategy. [[horror:games designed to scare you]] games are more [[popular:liked by many people]] than strategy in our group!",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'Ha! Horror games are scarier than strategy for sure. My favourite [[genre:a category of game]] is actually RPG.',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'RPG? Those games are longer than other genres. Do you prefer solo or multiplayer RPGs?',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'Solo. Multiplayer is faster, but the story in solo games is better than in multiplayer.',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'I understand! [[racing:games where you drive and compete at speed]] games are more fun than anything else for me — I love the speed!',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'Each to their own! What kind of games do you like most right now?',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Racing! It is faster than any other genre and more exciting than watching real racing on TV!',
    }
  ],

  matchingExercise: [
    {
        "word": "ACTION",
        "definition": "Fast games with fighting and movement"
    },
    {
        "word": "ADVENTURE",
        "definition": "Games with story and world exploration"
    },
    {
        "word": "STRATEGY",
        "definition": "Games where you plan carefully to win"
    },
    {
        "word": "HORROR",
        "definition": "Games designed to scare you"
    },
    {
        "word": "RACING",
        "definition": "Games where you drive and compete at speed"
    },
    {
        "word": "PUZZLE",
        "definition": "Games where you solve problems to progress"
    },
    {
        "word": "SHOOTER",
        "definition": "Games where you aim and shoot enemies"
    },
    {
        "word": "GENRE",
        "definition": "A category or type of game"
    }
],
  fillBlankExercise: [
    {
        "before": "My favourite",
        "after": "is RPG — I love building my character.",
        "answer": "genre"
    },
    {
        "before": "",
        "after": "games are fast — you fight and move all the time.",
        "answer": "action"
    },
    {
        "before": "I love",
        "after": "games — the speed is incredible!",
        "answer": "racing"
    },
    {
        "before": "",
        "after": "games are scary — I always close my eyes!",
        "answer": "horror"
    },
    {
        "before": "",
        "after": "games make me think. I plan every single move.",
        "answer": "strategy"
    },
    {
        "before": "Battle royale is the most",
        "after": "genre right now — everyone plays it.",
        "answer": "popular"
    },
    {
        "before": "This",
        "after": "game is harder than it looks — I can't pass level 3!",
        "answer": "puzzle"
    },
    {
        "before": "I",
        "after": "adventure games to horror games.",
        "answer": "prefer"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What genre is Sam playing at the start of the dialogue?",
        "options": [
            "Strategy",
            "Action",
            "Horror",
            "Puzzle"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Alex prefer strategy games?",
        "options": [
            "They are faster than other games.",
            "He likes thinking carefully.",
            "They are scarier than action games.",
            "They are the most popular genre."
        ],
        "correctIndex": 1
    },
    {
        "question": "Which genre does Sam say is most popular in their group?",
        "options": [
            "Action",
            "Racing",
            "Horror",
            "Strategy"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Alex's favourite genre?",
        "options": [
            "Action",
            "Horror",
            "Strategy",
            "RPG"
        ],
        "correctIndex": 3
    },
    {
        "question": "Why does Alex prefer solo RPGs over multiplayer?",
        "options": [
            "Multiplayer games are too difficult.",
            "Solo games are faster than multiplayer.",
            "The story in solo games is better.",
            "Multiplayer games are too scary."
        ],
        "correctIndex": 2
    },
    {
        "question": "Sam says racing games are more exciting than what?",
        "options": [
            "Playing strategy games",
            "Watching real racing on TV",
            "Playing horror games",
            "Solo RPGs"
        ],
        "correctIndex": 1
    }
],
};
