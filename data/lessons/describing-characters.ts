import { Lesson } from '@/types/lesson';

export const describingCharacters: Lesson = {
  slug: 'describing-characters',
  title: 'Describing Characters',
  subtitle: "Use adjectives and 'is / isn't' to describe game characters",
  level: 'A1-A2',
  description: "Learn 12 adjectives to describe game characters and use is / isn't to talk about them.",
  heroImage: '/images/describing-characters-hero.png',

  vocabulary: [
    {
      word: 'BIG',
      partOfSpeech: 'adjective',
      definition: 'Large in size — takes up a lot of space.',
      example: 'The boss is BIG — he fills the whole screen!',
      imageSlug: '/images/big.png',
    },
    {
      word: 'SMALL',
      partOfSpeech: 'adjective',
      definition: 'Not big — little in size.',
      example: 'The fairy is SMALL — she can hide behind a rock.',
      imageSlug: '/images/small.png',
    },
    {
      word: 'FAST',
      partOfSpeech: 'adjective',
      definition: 'Moves very quickly.',
      example: 'My character is FAST — nobody can catch her!',
      imageSlug: '/images/fast.png',
    },
    {
      word: 'SLOW',
      partOfSpeech: 'adjective',
      definition: 'Does not move quickly — takes a long time.',
      example: 'The stone giant is SLOW but very strong.',
      imageSlug: '/images/slow.png',
    },
    {
      word: 'STRONG',
      partOfSpeech: 'adjective',
      definition: 'Has a lot of physical power.',
      example: 'The warrior is STRONG — one punch destroys the wall!',
      imageSlug: '/images/strong.png',
    },
    {
      word: 'WEAK',
      partOfSpeech: 'adjective',
      definition: 'Does not have much power — easy to defeat.',
      example: 'At level 1, my character is WEAK and has low HP.',
      imageSlug: '/images/weak.png',
    },
    {
      word: 'SCARY',
      partOfSpeech: 'adjective',
      definition: 'Frightening — makes you feel afraid.',
      example: "The final boss is SCARY — I don't want to fight him!",
      imageSlug: '/images/scary.png',
    },
    {
      word: 'FRIENDLY',
      partOfSpeech: 'adjective',
      definition: 'Nice and helpful — not dangerous.',
      example: 'The village merchant is FRIENDLY and gives you quests.',
      imageSlug: '/images/friendly.png',
    },
    {
      word: 'MAGICAL',
      partOfSpeech: 'adjective',
      definition: 'Has special powers or uses magic.',
      example: 'The wizard is MAGICAL — she can fly and throw spells.',
      imageSlug: '/images/magical.png',
    },
    {
      word: 'ARMOURED',
      partOfSpeech: 'adjective',
      definition: 'Wearing protective metal or equipment.',
      example: "The knight is ARMOURED — arrows can't hurt him easily.",
      imageSlug: '/images/armoured.png',
    },
    {
      word: 'TALL',
      partOfSpeech: 'adjective',
      definition: 'High from top to bottom — the opposite of short.',
      example: 'The dragon is TALL — taller than any building in the game.',
      imageSlug: '/images/tall.png',
    },
    {
      word: 'DANGEROUS',
      partOfSpeech: 'adjective',
      definition: 'Can cause a lot of damage or harm.',
      example: "Don't go near that enemy — it is very DANGEROUS!",
      imageSlug: '/images/dangerous.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS CHARACTER IS',
      definition: 'Use this to describe a character with one adjective.',
      example: 'This character is fast and very dangerous.',
      imageSlug: '/images/this-character-is.png',
    },
    {
      phrase: 'HE SHE ISNT',
      definition: "Use isn't to say what a character is NOT like.",
      example: "She isn't slow — she is the fastest in the game!",
      imageSlug: '/images/he-she-isnt.png',
    },
    {
      phrase: 'MY CHARACTER IS VERY',
      definition: 'Add very before an adjective to make it stronger.',
      example: 'My character is very strong — he can beat any enemy.',
      imageSlug: '/images/my-character-is-very.png',
    },
    {
      phrase: 'IS YOUR CHARACTER',
      definition: 'Use this to ask someone about their character.',
      example: 'Is your character magical? Mine is armoured.',
      imageSlug: '/images/is-your-character.png',
    },
    {
      phrase: 'THE BOSS IS AND',
      definition: 'Use and to join two adjectives together.',
      example: 'The boss is big and scary — I need help!',
      imageSlug: '/images/the-boss-is-and.png',
    },
    {
      phrase: 'I THINK HE SHE IS',
      definition: 'Use I think to give your personal opinion.',
      example: 'I think she is the most dangerous character in the game.',
      imageSlug: '/images/i-think-he-she-is.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Maya',
      speakerColor: 'purple',
      speakerAvatar: '/images/maya-icon.png',
      text: 'Have you seen the new boss in World 4? Is it [[scary:Frightening — makes you feel afraid]]?',
    },
    {
      speaker: 'Leo',
      speakerColor: 'blue',
      speakerAvatar: '/images/leo-icon.png',
      text: 'Scary? It is terrifying! The boss is [[big:Large in size]] and very [[dangerous:Can cause a lot of damage or harm]].',
    },
    {
      speaker: 'Maya',
      speakerColor: 'purple',
      speakerAvatar: '/images/maya-icon.png',
      text: "Oh no! Is it [[fast:Moves very quickly]] too? My character isn't very fast.",
    },
    {
      speaker: 'Leo',
      speakerColor: 'blue',
      speakerAvatar: '/images/leo-icon.png',
      text: 'No — the boss is actually [[slow:Does not move quickly]]. But it is extremely [[strong:Has a lot of physical power]].',
    },
    {
      speaker: 'Maya',
      speakerColor: 'purple',
      speakerAvatar: '/images/maya-icon.png',
      text: 'OK so my character is [[small:Not big — little in size]] and [[fast:Moves very quickly]]. Can I dodge its attacks?',
    },
    {
      speaker: 'Leo',
      speakerColor: 'blue',
      speakerAvatar: '/images/leo-icon.png',
      text: 'Yes! Your character is perfect for this boss. She is very [[magical:Has special powers or uses magic]] too, right?',
    },
    {
      speaker: 'Maya',
      speakerColor: 'purple',
      speakerAvatar: '/images/maya-icon.png',
      text: 'She is! She has a fire spell. But the boss — is it [[armoured:Wearing protective metal or equipment]]?',
    },
    {
      speaker: 'Leo',
      speakerColor: 'blue',
      speakerAvatar: '/images/leo-icon.png',
      text: "It is [[armoured:Wearing protective metal or equipment]] on the front. But it isn't armoured on its back!",
    },
    {
      speaker: 'Maya',
      speakerColor: 'purple',
      speakerAvatar: '/images/maya-icon.png',
      text: "Perfect! I'll attack from behind. My character is [[strong:Has a lot of physical power]] enough from behind.",
    },
    {
      speaker: 'Leo',
      speakerColor: 'blue',
      speakerAvatar: '/images/leo-icon.png',
      text: "Exactly! The boss is [[scary:Frightening — makes you feel afraid]] but it isn't impossible. You can beat it!",
    },
    {
      speaker: 'Maya',
      speakerColor: 'purple',
      speakerAvatar: '/images/maya-icon.png',
      text: "OK — I think the boss is [[dangerous:Can cause a lot of damage or harm]] but my character is [[magical:Has special powers or uses magic]] and [[fast:Moves very quickly]]. I'm ready!",
    },
    {
      speaker: 'Leo',
      speakerColor: 'blue',
      speakerAvatar: '/images/leo-icon.png',
      text: "That's the spirit! I think your character is the best for this fight. Good luck!",
    }
  ],

  matchingExercise: [
    {
        "word": "BIG",
        "definition": "Large in size"
    },
    {
        "word": "FAST",
        "definition": "Moves very quickly"
    },
    {
        "word": "STRONG",
        "definition": "Has a lot of physical power"
    },
    {
        "word": "SCARY",
        "definition": "Frightening — makes you feel afraid"
    },
    {
        "word": "WEAK",
        "definition": "Does not have much power"
    },
    {
        "word": "MAGICAL",
        "definition": "Has special powers or uses magic"
    },
    {
        "word": "ARMOURED",
        "definition": "Wearing protective equipment"
    },
    {
        "word": "DANGEROUS",
        "definition": "Can cause a lot of damage"
    }
],
  fillBlankExercise: [
    {
        "before": "The final boss is very",
        "after": ". I was afraid to fight it!",
        "answer": "scary"
    },
    {
        "before": "My character isn't",
        "after": ". She is actually very small.",
        "answer": "big"
    },
    {
        "before": "The wizard is",
        "after": "— she can cast fire and ice spells.",
        "answer": "magical"
    },
    {
        "before": "Run! That enemy is very",
        "after": "— one hit and you lose all your HP!",
        "answer": "dangerous"
    },
    {
        "before": "The village NPC is",
        "after": "and gives you free items.",
        "answer": "friendly"
    },
    {
        "before": "The knight is",
        "after": "— arrows and swords can't hurt him.",
        "answer": "armoured"
    },
    {
        "before": "She is the",
        "after": "character in the game — no one can catch her.",
        "answer": "fast"
    },
    {
        "before": "The baby dragon is",
        "after": "and cute, but don't let that fool you!",
        "answer": "small"
    }
],
  multipleChoiceExercise: [
    {
        "question": "How does Leo describe the World 4 boss at the start?",
        "options": [
            "Small and fast.",
            "Big and dangerous.",
            "Friendly and magical.",
            "Armoured and weak."
        ],
        "correctIndex": 1
    },
    {
        "question": "Is the boss fast?",
        "options": [
            "Yes, it is very fast.",
            "We don't know.",
            "No, it is actually slow.",
            "It is fast sometimes."
        ],
        "correctIndex": 2
    },
    {
        "question": "Why is Maya's character good for fighting this boss?",
        "options": [
            "She is big and armoured.",
            "She is small, fast, and magical.",
            "She is strong and dangerous.",
            "She is tall and friendly."
        ],
        "correctIndex": 1
    },
    {
        "question": "Where is the boss NOT armoured?",
        "options": [
            "On its head.",
            "On its arms.",
            "On its back.",
            "Everywhere."
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Maya's plan to beat the boss?",
        "options": [
            "Run away and get more HP.",
            "Use armour to block its attacks.",
            "Attack from behind using her magic.",
            "Ask Leo to fight it for her."
        ],
        "correctIndex": 2
    },
    {
        "question": "Which sentence uses isn't correctly in the dialogue?",
        "options": [
            "The boss isn't impossible.",
            "The boss isn't fast.",
            "It isn't armoured on its back.",
            "All three are correct."
        ],
        "correctIndex": 3
    }
],
};
