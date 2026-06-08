import { Lesson } from '@/types/lesson';

export const talkingAboutProducts: Lesson = {
  slug: 'talking-about-products',
  title: 'Talking About Products',
  subtitle: 'Simple nouns and adjectives sales people use to describe what they sell',
  level: 'A1-A2',
  description: 'Learn the simple nouns and adjectives sales professionals use to describe products — like feature, quality, design, cheap, new, popular, and useful — when talking with customers.',
  heroImage: '/images/talking-about-products-hero.png',

  vocabulary: [
    {
      word: 'FEATURE',
      partOfSpeech: 'noun',
      definition: 'A part of a product that makes it useful or special.',
      example: 'One of our best features is the calendar that syncs with your team automatically.',
      imageSlug: '/images/feature.png',
    },
    {
      word: 'QUALITY',
      partOfSpeech: 'noun',
      definition: 'How good or bad something is.',
      example: 'Customers often mention the quality of our support team.',
      imageSlug: '/images/quality.png',
    },
    {
      word: 'DESIGN',
      partOfSpeech: 'noun',
      definition: 'The way something looks and works.',
      example: 'We updated the design last year to make it easier to use.',
      imageSlug: '/images/design.png',
    },
    {
      word: 'BRAND',
      partOfSpeech: 'noun',
      definition: "The name and image of a company's products.",
      example: 'Brightline is a well-known brand in project management software.',
      imageSlug: '/images/brand.png',
    },
    {
      word: 'CHEAP',
      partOfSpeech: 'adjective',
      definition: 'Costing little money.',
      example: 'Our starter plan is cheap enough for small teams just getting started.',
      imageSlug: '/images/cheap.png',
    },
    {
      word: 'NEW',
      partOfSpeech: 'adjective',
      definition: 'Made or introduced recently.',
      example: 'We just launched a new tool for tracking deadlines.',
      imageSlug: '/images/new.png',
    },
    {
      word: 'POPULAR',
      partOfSpeech: 'adjective',
      definition: 'Liked or used by a lot of people.',
      example: 'The mobile app has become really popular with our customers.',
      imageSlug: '/images/popular.png',
    },
    {
      word: 'USEFUL',
      partOfSpeech: 'adjective',
      definition: 'Helpful; does a good job.',
      example: 'The reminder tool is useful for teams that juggle a lot of projects.',
      imageSlug: '/images/useful.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'ONE OF THE BEST FEATURES IS',
      definition: 'Point out a part of a product that you think customers will like most.',
      example: 'One of the best features is the calendar that syncs automatically.',
      imageSlug: '/images/one-of-the-best-features-is.png',
    },
    {
      phrase: 'IT COMES WITH',
      definition: "Tell someone what's included with a product.",
      example: 'It comes with a free trial and full customer support.',
      imageSlug: '/images/it-comes-with.png',
    },
    {
      phrase: 'WHAT MAKES IT DIFFERENT IS',
      definition: 'Explain what sets a product apart from others.',
      example: 'What makes it different is how easy it is for non-technical teams to use.',
      imageSlug: '/images/what-makes-it-different-is.png',
    },
    {
      phrase: 'CUSTOMERS REALLY LIKE',
      definition: 'Share what people enjoy most about a product.',
      example: 'Customers really like how quickly our support team responds.',
      imageSlug: '/images/customers-really-like.png',
    },
    {
      phrase: 'COMPARED TO OTHER OPTIONS',
      definition: 'Use this when explaining how a product is better or different from alternatives.',
      example: 'Compared to other options, our pricing is hard to beat.',
      imageSlug: '/images/compared-to-other-options.png',
    },
    {
      phrase: "I'D RECOMMEND",
      definition: 'Suggest something to someone based on what they need.',
      example: "For a team your size, I'd recommend starting with the basic plan.",
      imageSlug: '/images/id-recommend.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "So, Dana — since you're exploring Brightline for your team, let me walk you through a few [[features:a part of a product that makes it useful or special]] I think you'll like.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Perfect, I'd love that. What would you say is the best one?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Honestly, the [[design:the way something looks and works]] is what most people notice first — it's clean and easy to learn.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That matters a lot for my team — half of them aren't very technical.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's exactly why it's become so [[popular:liked or used by a lot of people]] with small agencies like yours.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And how's the [[quality:how good or bad something is]] of the support, if something ever goes wrong?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Really strong — most questions get answered within the hour. We just released a [[new:made or introduced recently]] live-chat option too.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "That's reassuring. Is it [[cheap:costing little money]] enough for a team our size?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Our starter plan is actually one of the most affordable from any [[brand:the name and image of a company's products]] in this space.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Good to know. And would the reminder tool be [[useful:helpful; does a good job]] for a small team like mine?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Definitely — it's one of the things customers mention most when they tell us why they stay.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Sounds like exactly what we need. Let's set up a trial.",
    }
  ],

  matchingExercise: [
    {
        "word": "FEATURE",
        "definition": "A part of a product that makes it useful or special"
    },
    {
        "word": "QUALITY",
        "definition": "How good or bad something is"
    },
    {
        "word": "DESIGN",
        "definition": "The way something looks and works"
    },
    {
        "word": "BRAND",
        "definition": "The name and image of a company's products"
    },
    {
        "word": "CHEAP",
        "definition": "Costing little money"
    },
    {
        "word": "NEW",
        "definition": "Made or introduced recently"
    },
    {
        "word": "POPULAR",
        "definition": "Liked or used by a lot of people"
    },
    {
        "word": "USEFUL",
        "definition": "Helpful; does a good job"
    }
],
  fillBlankExercise: [
    {
        "before": "One of the best",
        "after": "is the calendar that syncs with your team automatically.",
        "answer": "feature"
    },
    {
        "before": "Customers often mention the",
        "after": "of our support team.",
        "answer": "quality"
    },
    {
        "before": "We updated the",
        "after": "last year to make it easier to use.",
        "answer": "design"
    },
    {
        "before": "Brightline is a well-known",
        "after": "in project management software.",
        "answer": "brand"
    },
    {
        "before": "Our starter plan is",
        "after": "enough for small teams just getting started.",
        "answer": "cheap"
    },
    {
        "before": "We just launched a",
        "after": "tool for tracking deadlines.",
        "answer": "new"
    },
    {
        "before": "The mobile app has become really",
        "after": "with our customers.",
        "answer": "popular"
    },
    {
        "before": "The reminder tool is",
        "after": "for teams that juggle a lot of projects.",
        "answer": "useful"
    }
],
  multipleChoiceExercise: [
    {
        "question": "What does Riley want to show Dana?",
        "options": [
            "The company's pricing history",
            "A few standout features of the product",
            "A list of competitors",
            "The company's office"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana say about her team?",
        "options": [
            "They work remotely",
            "Half of them aren't very technical",
            "They are all new employees",
            "They use a competitor's product"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say people notice first about the product?",
        "options": [
            "The price",
            "The design",
            "The logo",
            "The name"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why has the product become popular with small agencies, according to Riley?",
        "options": [
            "It's the cheapest on the market",
            "It's clean and easy to learn",
            "It has the most features",
            "It was recently redesigned"
        ],
        "correctIndex": 1
    },
    {
        "question": "What new option did Riley mention?",
        "options": [
            "A mobile app",
            "A live-chat support option",
            "A loyalty program",
            "A free upgrade"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana ask about regarding the price?",
        "options": [
            "Whether there's a free version",
            "Whether it's affordable for a team her size",
            "Whether the price will increase",
            "Whether they offer discounts for agencies"
        ],
        "correctIndex": 1
    },
    {
        "question": "How does Riley describe the starter plan?",
        "options": [
            "It's the most popular plan",
            "It's one of the most affordable options around",
            "It's only for large companies",
            "It comes with the fewest features"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Dana decide to do at the end of the conversation?",
        "options": [
            "Ask for a discount",
            "Set up a trial",
            "Talk to her team first",
            "Compare other brands"
        ],
        "correctIndex": 1
    }
],
};
