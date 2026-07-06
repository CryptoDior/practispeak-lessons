import { Lesson } from '@/types/lesson';

export const gameOnFirstWords: Lesson = {
  slug: 'game-on-first-words',
  title: 'Game On — First Words',
  subtitle: 'Learn the essential words on every game screen',
  level: 'A1-A2',
  description: 'Learn the essential words on every game screen — menus, HUDs, and more.',
  heroImage: '/images/game-on-first-words-hero.png',

  vocabulary: [
    {
      word: 'PLAYER',
      partOfSpeech: 'noun',
      definition: 'The person who is playing the game.',
      example: 'You are the player. Your character is on the screen.',
      imageSlug: '/images/game-on-first-words-player.png',
    },
    {
      word: 'SCREEN',
      partOfSpeech: 'noun',
      definition: 'The display you look at when you play.',
      example: 'Look at the screen — your health bar is nearly empty!',
      imageSlug: '/images/screen.png',
    },
    {
      word: 'SCORE',
      partOfSpeech: 'noun',
      definition: 'The total number of points you have.',
      example: 'My score is 2,500 points. I am winning!',
      imageSlug: '/images/game-on-first-words-score.png',
    },
    {
      word: 'LEVEL',
      partOfSpeech: 'noun',
      definition: 'A stage or section of the game.',
      example: 'This is level 6. It is very difficult!',
      imageSlug: '/images/game-on-first-words-level.png',
    },
    {
      word: 'LIFE',
      partOfSpeech: 'noun',
      definition: 'How many times you can try again.',
      example: 'I have only two lives left. Be careful!',
      imageSlug: '/images/life.png',
    },
    {
      word: 'HP',
      partOfSpeech: 'abbreviation',
      definition: 'Health Points — how much health your character has.',
      example: 'My HP is 10 out of 100. I need a potion!',
      imageSlug: '/images/hp.png',
    },
    {
      word: 'START',
      partOfSpeech: 'verb',
      definition: 'To begin the game.',
      example: 'Press Start to begin playing.',
      imageSlug: '/images/start.png',
    },
    {
      word: 'PAUSE',
      partOfSpeech: 'verb',
      definition: 'To stop the game for a moment without leaving.',
      example: 'Press P to pause the game. I need a break.',
      imageSlug: '/images/pause.png',
    },
    {
      word: 'QUIT',
      partOfSpeech: 'verb',
      definition: 'To leave or exit the game completely.',
      example: 'I am tired. I will quit now and play tomorrow.',
      imageSlug: '/images/quit.png',
    },
    {
      word: 'SETTINGS',
      partOfSpeech: 'noun',
      definition: 'The menu where you change options like sound.',
      example: 'Go to Settings to turn up the volume.',
      imageSlug: '/images/settings.png',
    },
    {
      word: 'CONTROLLER',
      partOfSpeech: 'noun',
      definition: 'The device you hold in your hands to play.',
      example: 'Use the controller to move your character.',
      imageSlug: '/images/controller.png',
    },
    {
      word: 'MENU',
      partOfSpeech: 'noun',
      definition: 'A list of options that appears on screen.',
      example: 'Choose your character in the menu before the game starts.',
      imageSlug: '/images/menu.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'PRESS START TO BEGIN',
      definition: 'Use this when you want to start the game.',
      example: 'The game is ready — press Start to begin.',
      imageSlug: '/images/press-start-to-begin.png',
    },
    {
      phrase: 'MY SCORE IS',
      definition: 'Tell someone your points total.',
      example: 'My score is 1,800 points. How about you?',
      imageSlug: '/images/my-score-is.png',
    },
    {
      phrase: 'I HAVE LIVES LEFT',
      definition: 'Say how many chances you still have.',
      example: 'I have two lives left. I must be careful.',
      imageSlug: '/images/i-have-lives-left.png',
    },
    {
      phrase: 'GO TO SETTINGS',
      definition: 'Use this when you need to change game options.',
      example: 'The screen is too dark. Go to Settings to fix it.',
      imageSlug: '/images/go-to-settings.png',
    },
    {
      phrase: 'GAME OVER',
      definition: 'Said when the game ends and you lose.',
      example: 'You lost your last life. Game over!',
      imageSlug: '/images/game-over.png',
    },
    {
      phrase: 'YOU ARE ON LEVEL',
      definition: 'Say which stage of the game someone is on.',
      example: 'Well done! You are on level 5 now.',
      imageSlug: '/images/you-are-on-level.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'Hey Sam! Are you ready? Press [[start:to begin the game]] — the game is waiting!',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Wait! I need to go to [[settings:the menu where you change options]] first. The [[screen:the display you look at]] is too dark.',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'OK, no problem. What was your [[score:the total number of points you have]] yesterday? I got 2,500!',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Only 1,800. But I was on [[level:a stage or section of the game]] 6! It is very hard.',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: 'How many [[life:how many times you can try again]] did you have at the end?',
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Only one life! And my [[hp:Health Points — how much health your character has]] was just 10 out of 100. It was terrible!',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "Ha! OK — I have my [[controller:the device you hold in your hands to play]] ready now. Let's go!",
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'I can see the [[menu:a list of options that appears on screen]]. I am [[player:the person who is playing the game]] 1 and you are player 2. Ready?',
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "Yes! But please don't [[quit:to leave or exit the game completely]] this time! And don't [[pause:to stop the game for a moment]] for ten minutes!",
    },
    {
      speaker: 'Sam',
      speakerColor: 'green',
      speakerAvatar: '/images/sam-icon.png',
      text: 'Ha ha, sorry about last time! Pressing Start now. Game on!',
    }
  ],

  matchingExercise: [
    {
        "word": "PLAYER",
        "definition": "The person playing the game"
    },
    {
        "word": "SCORE",
        "definition": "Your total number of points"
    },
    {
        "word": "HP",
        "definition": "Health Points — your character's health"
    },
    {
        "word": "LEVEL",
        "definition": "A stage or section of the game"
    },
    {
        "word": "PAUSE",
        "definition": "To stop the game temporarily"
    },
    {
        "word": "QUIT",
        "definition": "To exit the game completely"
    },
    {
        "word": "CONTROLLER",
        "definition": "The device you hold to play"
    },
    {
        "word": "MENU",
        "definition": "A list of options on screen"
    }
],
  fillBlankExercise: [
    {
        "before": "Look at the",
        "after": "— the game is starting.",
        "answer": "screen"
    },
    {
        "before": "My",
        "after": "is 2,500 points. I am winning!",
        "answer": "score"
    },
    {
        "before": "I have only one",
        "after": "left. Be careful!",
        "answer": "life"
    },
    {
        "before": "Go to",
        "after": "to make the screen brighter.",
        "answer": "settings"
    },
    {
        "before": "Press",
        "after": "to begin the game.",
        "answer": "start"
    },
    {
        "before": "I am",
        "after": "1. You are player 2.",
        "answer": "player"
    },
    {
        "before": "Use the",
        "after": "to move your character.",
        "answer": "controller"
    },
    {
        "before": "This is",
        "after": "10 — the final stage!",
        "answer": "level"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Why does Sam go to Settings first?",
        "options": [
            "To change the controller settings.",
            "To make the screen brighter.",
            "To change the music.",
            "To quit the game."
        ],
        "correctIndex": 1
    },
    {
        "question": "What was Alex's score yesterday?",
        "options": [
            "1,800 points",
            "500 points",
            "2,500 points",
            "10 points"
        ],
        "correctIndex": 2
    },
    {
        "question": "What level was Sam playing on yesterday?",
        "options": [
            "Level 1",
            "Level 6",
            "Level 10",
            "Level 3"
        ],
        "correctIndex": 1
    },
    {
        "question": "How much HP did Sam have at the end of the game?",
        "options": [
            "100 HP",
            "50 HP",
            "80 HP",
            "10 HP"
        ],
        "correctIndex": 3
    },
    {
        "question": "Who is Player 1?",
        "options": [
            "Alex",
            "Both players",
            "Sam",
            "We don't know"
        ],
        "correctIndex": 2
    },
    {
        "question": "What does Alex ask Sam NOT to do during the game?",
        "options": [
            "Change the settings.",
            "Pause the game for a long time.",
            "Play on a high level.",
            "Check the score."
        ],
        "correctIndex": 1
    }
],
};
