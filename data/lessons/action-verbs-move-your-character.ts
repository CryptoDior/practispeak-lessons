import { Lesson } from '@/types/lesson';

export const actionVerbsMoveYourCharacter: Lesson = {
  slug: 'action-verbs-move-your-character',
  title: 'Action Verbs — Move Your Character',
  subtitle: 'Master the verbs that control your character in gaming',
  level: 'A1-A2',
  description: 'Master the verbs that control your character using imperatives — the language of gaming commands.',
  heroImage: '/images/action-verbs-move-your-character-hero.png',

  grammarFocus: {
    focusTitle: 'Grammar Focus: Imperatives',
    description: 'An imperative is a command. Use the BASE VERB with no subject.',
    singlePattern: 'VERB + (object)',
    singlePatternExample: '"Jump!"  /  "Shoot the enemy!"',
    arrowStyle: true,
    negativeSubtitle: '(Don\'t + verb)',
    positiveExamples: [
      { sentence: 'Jump!',              note: 'Tell someone to leap.' },
      { sentence: 'Run to the exit!',   note: 'Tell someone to move fast to a place.' },
      { sentence: 'Collect the coins.', note: 'Tell someone to pick up items.' },
    ],
    negativeExamples: [
      { sentence: "Don't stop!",        note: 'Tell someone NOT to stop.' },
      { sentence: "Don't shoot here.",  note: 'Tell someone NOT to fire.' },
    ],
  },

  vocabulary: [
    {
      word: 'JUMP',
      partOfSpeech: 'verb',
      definition: 'To leap upward or over something.',
      example: 'Press A to jump over the wall!',
      imageSlug: '/images/jump.png',
    },
    {
      word: 'RUN',
      partOfSpeech: 'verb',
      definition: 'To move your character quickly.',
      example: 'Run to the exit before the timer ends!',
      imageSlug: '/images/run.png',
    },
    {
      word: 'SHOOT',
      partOfSpeech: 'verb',
      definition: 'To fire a weapon at an enemy or target.',
      example: 'Press R2 to shoot the enemy.',
      imageSlug: '/images/shoot.png',
    },
    {
      word: 'DODGE',
      partOfSpeech: 'verb',
      definition: 'To quickly move out of the way of an attack.',
      example: 'Dodge left! The boss is attacking!',
      imageSlug: '/images/dodge.png',
    },
    {
      word: 'CROUCH',
      partOfSpeech: 'verb',
      definition: "To lower your character's body to hide or avoid hits.",
      example: 'Crouch behind the wall to stay safe.',
      imageSlug: '/images/crouch.png',
    },
    {
      word: 'COLLECT',
      partOfSpeech: 'verb',
      definition: 'To pick up items, coins, or power-ups.',
      example: 'Collect all the gold coins on this level.',
      imageSlug: '/images/collect.png',
    },
    {
      word: 'ATTACK',
      partOfSpeech: 'verb',
      definition: 'To hit, strike, or fight against an enemy.',
      example: 'Attack the boss when his shield is down!',
      imageSlug: '/images/attack.png',
    },
    {
      word: 'DEFEND',
      partOfSpeech: 'verb',
      definition: 'To protect yourself or your team from damage.',
      example: 'Defend the base — enemies are coming!',
      imageSlug: '/images/defend.png',
    },
    {
      word: 'CLIMB',
      partOfSpeech: 'verb',
      definition: 'To move upward on a wall, ladder, or surface.',
      example: 'Climb the ladder to reach the next level.',
      imageSlug: '/images/climb.png',
    },
    {
      word: 'PRESS',
      partOfSpeech: 'verb',
      definition: 'To push a button on the controller or keyboard.',
      example: 'Press X to interact with the NPC.',
      imageSlug: '/images/press.png',
    },
    {
      word: 'MOVE',
      partOfSpeech: 'verb',
      definition: 'To change the position of your character.',
      example: "Move forward — there's a health pack ahead!",
      imageSlug: '/images/move.png',
    },
    {
      word: 'ESCAPE',
      partOfSpeech: 'verb',
      definition: 'To get away from an enemy or dangerous area.',
      example: 'Escape through the back door before it closes!',
      imageSlug: '/images/escape.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'PRESS BUTTON TO ACTION',
      definition: 'The most common game tutorial phrase. Tells you which button to press.',
      example: 'Press A to jump. Press B to attack.',
      imageSlug: '/images/press-button-to-action.png',
    },
    {
      phrase: 'WATCH OUT',
      definition: 'Used to warn someone about danger coming towards them.',
      example: "Watch out! There's an enemy behind you!",
      imageSlug: '/images/watch-out.png',
    },
    {
      phrase: 'DONT STOP MOVING',
      definition: 'A negative imperative — tells someone to keep moving continuously.',
      example: "Don't stop moving or they will catch you!",
      imageSlug: '/images/dont-stop-moving.png',
    },
    {
      phrase: 'ATTACK FROM BEHIND',
      definition: 'Gives a teammate a tactical instruction for how to fight.',
      example: 'Sneak around and attack from behind for extra damage.',
      imageSlug: '/images/attack-from-behind.png',
    },
    {
      phrase: 'FOLLOW ME',
      definition: 'Tells a teammate to move with you in the same direction.',
      example: 'Follow me! I know the way to the boss room.',
      imageSlug: '/images/follow-me.png',
    },
    {
      phrase: 'CLIMB UP TO THE NEXT LEVEL',
      definition: 'Tells the player to move upward to progress in the game.',
      example: 'Climb up to the next level to find the key.',
      imageSlug: '/images/climb-up-to-the-next-level.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Coach',
      speakerColor: 'blue',
      speakerAvatar: '/images/coach-icon.png',
      text: 'OK everyone, tutorial time! [[press:to push a button on the controller]] the A button to start.',
    },
    {
      speaker: 'Player',
      speakerColor: 'orange',
      speakerAvatar: '/images/player-icon.png',
      text: 'Done! Now what do I do?',
    },
    {
      speaker: 'Coach',
      speakerColor: 'blue',
      speakerAvatar: '/images/coach-icon.png',
      text: '[[jump:to leap upward or over something]] over that wall — press and hold A!',
    },
    {
      speaker: 'Player',
      speakerColor: 'orange',
      speakerAvatar: '/images/player-icon.png',
      text: 'I jumped! But now there are enemies everywhere!',
    },
    {
      speaker: 'Coach',
      speakerColor: 'blue',
      speakerAvatar: '/images/coach-icon.png',
      text: '[[dodge:to quickly move out of the way of an attack]] left, then [[crouch:to lower your body to hide or avoid hits]] behind the big rock. Quickly!',
    },
    {
      speaker: 'Player',
      speakerColor: 'orange',
      speakerAvatar: '/images/player-icon.png',
      text: "OK — I dodged! I'm crouching. Now can I [[attack:to hit, strike, or fight against an enemy]]?",
    },
    {
      speaker: 'Coach',
      speakerColor: 'blue',
      speakerAvatar: '/images/coach-icon.png',
      text: 'Not yet! First [[collect:to pick up items, coins, or power-ups]] the power-up on your right. It will make you stronger.',
    },
    {
      speaker: 'Player',
      speakerColor: 'orange',
      speakerAvatar: '/images/player-icon.png',
      text: 'Got it! Power-up collected. My HP is full now!',
    },
    {
      speaker: 'Coach',
      speakerColor: 'blue',
      speakerAvatar: '/images/coach-icon.png',
      text: "Good. Now [[run:to move your character quickly]] forward and [[attack:to hit, strike, or fight against an enemy]] the enemy. Don't stop!",
    },
    {
      speaker: 'Player',
      speakerColor: 'orange',
      speakerAvatar: '/images/player-icon.png',
      text: "I'm running! I attacked — the enemy is down! Do I need to [[escape:to get away from an enemy or dangerous area]] now?",
    },
    {
      speaker: 'Coach',
      speakerColor: 'blue',
      speakerAvatar: '/images/coach-icon.png',
      text: 'No — [[climb:to move upward on a wall, ladder, or surface]] the ladder on the left. The exit is at the top. Move fast!',
    },
    {
      speaker: 'Player',
      speakerColor: 'orange',
      speakerAvatar: '/images/player-icon.png',
      text: "I'm climbing! I can see the exit! Follow me, Coach — I'll [[defend:to protect yourself or your team from damage]] the top!",
    }
  ],

  matchingExercise: [
    {
        "word": "JUMP",
        "definition": "To leap over something"
    },
    {
        "word": "DODGE",
        "definition": "To quickly move away from an attack"
    },
    {
        "word": "CROUCH",
        "definition": "To lower your body to hide"
    },
    {
        "word": "SHOOT",
        "definition": "To fire a weapon"
    },
    {
        "word": "COLLECT",
        "definition": "To pick up items or coins"
    },
    {
        "word": "ESCAPE",
        "definition": "To get away from danger"
    },
    {
        "word": "CLIMB",
        "definition": "To move upward on a surface"
    },
    {
        "word": "DEFEND",
        "definition": "To protect yourself from damage"
    }
],
  fillBlankExercise: [
    {
        "before": "",
        "after": "A to start the game.",
        "answer": "press"
    },
    {
        "before": "",
        "after": "over the wall before the timer runs out!",
        "answer": "jump"
    },
    {
        "before": "",
        "after": "all the gold coins to unlock the next door.",
        "answer": "collect"
    },
    {
        "before": "",
        "after": "behind the crate — the enemy can't see you there!",
        "answer": "crouch"
    },
    {
        "before": "",
        "after": "the ladder to reach the top floor.",
        "answer": "climb"
    },
    {
        "before": "Don't stand still!",
        "after": "to the safe zone now!",
        "answer": "run"
    },
    {
        "before": "",
        "after": "left — there's a rocket coming straight at you!",
        "answer": "dodge"
    },
    {
        "before": "Your team is under attack!",
        "after": "the base immediately!",
        "answer": "defend"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Coach tell the player to do first?",
        "options": [
            "Jump over a wall.",
            "Press the A button to start.",
            "Collect a power-up.",
            "Run to the exit."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Coach tell the player to collect the power-up?",
        "options": [
            "It opens the exit door.",
            "It gives extra coins.",
            "It will make the player stronger.",
            "It unlocks a new weapon."
        ],
        "correctIndex": 2
    },
    {
        "question": "What two things does Coach tell the player to do with the enemy?",
        "options": [
            "Dodge and escape.",
            "Crouch and defend.",
            "Run forward and attack.",
            "Climb and shoot."
        ],
        "correctIndex": 2
    },
    {
        "question": "Where is the exit?",
        "options": [
            "Behind the big rock.",
            "At the top of the ladder.",
            "Through the back door.",
            "Near the power-up."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does the player say they will do at the top?",
        "options": [
            "Collect more coins.",
            "Escape through the door.",
            "Defend the top.",
            "Press a button."
        ],
        "correctIndex": 2
    },
    {
        "question": "Which instruction is a NEGATIVE imperative in the dialogue?",
        "options": [
            "Follow me!",
            "Don't stop!",
            "Climb the ladder.",
            "Press A to start."
        ],
        "correctIndex": 1
    }
],
};
