import { Lesson } from '@/types/lesson';

export const inventory: Lesson = {
  slug: 'inventory',
  title: 'Inventory',
  subtitle: 'Talk about what you have, what you need, and how much',
  level: 'A1-A2',
  description: "Learn to talk about items, quantities, and needs in a game — using have/need and quantity words like enough, more, and how many.",
  heroImage: '/images/inventory-hero.png',

  vocabulary: [
    {
      word: 'INVENTORY',
      partOfSpeech: 'noun',
      definition: 'The storage space where you keep all your items in a game.',
      example: 'My inventory is full — I need to drop something before I can pick up more loot.',
      imageSlug: '/images/inventory.png',
    },
    {
      word: 'ITEM',
      partOfSpeech: 'noun',
      definition: 'An object you can collect, use, or carry in a game.',
      example: 'I found a rare item in the chest — it increases my speed by 20 percent.',
      imageSlug: '/images/item.png',
    },
    {
      word: 'WEAPON',
      partOfSpeech: 'noun',
      definition: 'A tool you use to fight or attack enemies.',
      example: 'I have two weapons — a sword for close range and a bow for long range.',
      imageSlug: '/images/weapon.png',
    },
    {
      word: 'ARMOUR',
      partOfSpeech: 'noun',
      definition: 'Equipment that protects you and reduces the damage you take.',
      example: 'My armour is broken — I need to repair it before the next boss fight.',
      imageSlug: '/images/armour.png',
    },
    {
      word: 'POTION',
      partOfSpeech: 'noun',
      definition: 'A drinkable item that restores your health or gives a temporary boost.',
      example: 'I have three potions left. Do you need one? Your health bar is very low.',
      imageSlug: '/images/potion.png',
    },
    {
      word: 'AMMO',
      partOfSpeech: 'noun',
      definition: 'The bullets, arrows, or energy your weapon needs to fire.',
      example: "I've run out of ammo — I need to find more before the next wave starts.",
      imageSlug: '/images/ammo.png',
    },
    {
      word: 'LOOT',
      partOfSpeech: 'noun',
      definition: 'Items dropped by enemies or found in chests and crates.',
      example: 'The boss dropped amazing loot — I got a legendary weapon and 500 gold.',
      imageSlug: '/images/loot.png',
    },
    {
      word: 'SLOT',
      partOfSpeech: 'noun',
      definition: 'A single space in your inventory that holds one item or stack.',
      example: 'I only have one slot free — I have to choose between the shield and the potion.',
      imageSlug: '/images/inventory-slot.png',
    },
    {
      word: 'STACK',
      partOfSpeech: 'noun',
      definition: 'Multiple copies of the same item stored together in one slot.',
      example: 'I have a stack of 64 arrows — that is enough for the whole dungeon.',
      imageSlug: '/images/stack.png',
    },
    {
      word: 'EQUIP',
      partOfSpeech: 'verb',
      definition: 'To put on or activate an item so you can use it in the game.',
      example: 'Equip the new sword — it does much more damage than your old one.',
      imageSlug: '/images/equip.png',
    },
    {
      word: 'CRAFT',
      partOfSpeech: 'verb',
      definition: 'To make a new item by combining materials you have collected.',
      example: 'I can craft a health potion if I have enough herbs and water.',
      imageSlug: '/images/craft.png',
    },
    {
      word: 'UPGRADE',
      partOfSpeech: 'verb',
      definition: 'To improve an item to make it more powerful or effective.',
      example: 'I need 50 iron to upgrade my armour to level three — do you have any?',
      imageSlug: '/images/inventory-upgrade.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'I HAVE ENOUGH',
      definition: 'Use this to say you have the right amount — you do not need more.',
      example: 'I have enough ammo for now. Save your drops for the next room.',
      imageSlug: '/images/i-have-enough.png',
    },
    {
      phrase: 'I NEED MORE',
      definition: 'Use this to say your current amount is not enough — you want more.',
      example: 'I need more potions. Can you craft some before we fight the boss?',
      imageSlug: '/images/i-need-more.png',
    },
    {
      phrase: 'DO YOU HAVE ANY',
      definition: 'Use this to ask if someone has a particular item at all.',
      example: 'Do you have any spare armour? Mine is almost broken.',
      imageSlug: '/images/do-you-have-any.png',
    },
    {
      phrase: "I'VE RUN OUT OF",
      definition: 'Use this to say you have used everything and have none left.',
      example: "I've run out of arrows. I need to switch to my backup weapon.",
      imageSlug: '/images/ive-run-out-of.png',
    },
    {
      phrase: 'HOW MANY DO YOU HAVE',
      definition: 'Use this to ask the exact quantity of a countable item.',
      example: 'How many potions do you have? We need at least five for this dungeon.',
      imageSlug: '/images/how-many-do-you-have.png',
    },
    {
      phrase: 'LET ME CHECK MY INVENTORY',
      definition: 'A natural phrase to say when you are about to look at your items.',
      example: 'Let me check my inventory — I think I have some spare iron somewhere.',
      imageSlug: '/images/let-me-check-my-inventory.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "Zara, quick — do you have any [[potion:a drinkable item that restores health]]s? I'm almost dead.",
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: "I've got three. How many do you have?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "I've run out of potions completely. Can you share one?",
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: "Sure! Check your [[inventory:the storage space for your items]] — I just sent you two. What about [[ammo:bullets or energy your weapon needs]]?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "I have enough ammo for now. But I need more [[armour:equipment that protects you]]. Mine is broken.",
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: "Let me check my inventory... I have a spare piece. Do you have the materials to [[upgrade:improve an item to make it stronger]] it?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "I have some iron, but not enough to [[craft:make a new item from materials]] a full upgrade.",
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: "I've got a lot of iron — I'll send you some. How many [[slot:a space in your inventory]]s do you have free?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "Only two. My inventory is almost full. Too much [[loot:items dropped by enemies or found in chests]]!",
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: "Drop the weaker [[weapon:a tool you use to fight]]s and [[equip:to put on or activate an item]] the new ones. [[stack:multiple copies stored in one slot]] the ammo — that frees up slots.",
    },
  ],

  matchingExercise: [
    { word: 'INVENTORY', definition: 'The storage space for all your items' },
    { word: 'LOOT',      definition: 'Items dropped by enemies or found in chests' },
    { word: 'SLOT',      definition: 'A single space that holds one item' },
    { word: 'STACK',     definition: 'Multiple copies of one item in one slot' },
    { word: 'EQUIP',     definition: 'To put on an item so you can use it' },
    { word: 'CRAFT',     definition: 'To make an item from collected materials' },
    { word: 'AMMO',      definition: 'What your weapon needs to fire' },
    { word: 'UPGRADE',   definition: 'To improve an item to make it stronger' },
  ],

  fillBlankExercise: [
    { before: 'My',        after: 'is full — I need to drop something.',              answer: 'inventory' },
    { before: 'I need to', after: 'this sword — it will do twice the damage.',         answer: 'upgrade' },
    { before: '',          after: 'the new armour before you enter the dungeon.',       answer: 'equip' },
    { before: "I've run out of", after: '— I need to find bullets fast.',              answer: 'ammo' },
    { before: 'The boss dropped amazing', after: '— a legendary weapon and rare gems.', answer: 'loot' },
    { before: 'I can', after: 'a health potion if I have enough herbs.',               answer: 'craft' },
    { before: 'I have a', after: 'of 50 arrows — that is more than enough.',           answer: 'stack' },
    { before: 'I only have one', after: 'free. I need to choose carefully.',           answer: 'slot' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Why does Alex ask Zara for potions?',
      options: ['His inventory is full', "He's almost dead and has none left", 'He wants to sell them', 'He needs them to craft armour'],
      correctIndex: 1,
    },
    {
      question: 'How many potions does Zara send to Alex?',
      options: ['One', 'Three', 'Two', 'Five'],
      correctIndex: 2,
    },
    {
      question: 'What does Alex say about his ammo?',
      options: ["He's run out", 'He has enough for now', 'He needs more', 'He wants to share it'],
      correctIndex: 1,
    },
    {
      question: "What does Alex NOT have enough of to fully upgrade his armour?",
      options: ['Potions', 'Slots', 'Iron', 'Ammo'],
      correctIndex: 2,
    },
    {
      question: 'How many free inventory slots does Alex have?',
      options: ['None', 'One', 'Two', 'Five'],
      correctIndex: 2,
    },
    {
      question: "What is Zara's advice for freeing up inventory space?",
      options: [
        'Drop all loot and start again',
        'Drop weaker weapons, equip new ones, and stack ammo',
        'Sell all potions to the merchant',
        'Craft more slots using iron',
      ],
      correctIndex: 1,
    },
  ],
};
