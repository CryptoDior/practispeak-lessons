import { Lesson } from '@/types/lesson';

export const socialMediaBasics: Lesson = {
  slug: 'social-media-basics',
  title: 'Social Media Basics',
  subtitle: 'Simple words and actions for using social media in marketing',
  level: 'A1-A2',
  description: 'Social media is one of the most important tools in marketing today. This lesson teaches the basic words for platforms and actions — posting, sharing, following, and commenting — so you can talk about social media confidently in English.',
  heroImage: '/images/social-media-basics-hero.png',

  vocabulary: [
    {
      word: 'POST',
      partOfSpeech: 'noun',
      definition: 'A message, photo, or video that you put on social media for people to see.',
      example: 'Riley wrote a post about the new product launch and shared it on LinkedIn.',
      imageSlug: '/images/post.png',
    },
    {
      word: 'SHARE',
      partOfSpeech: 'verb',
      definition: 'To send or show something to other people — or to put something on social media so others can see it.',
      example: "Dana liked the article so much she decided to share it on her company's page.",
      imageSlug: '/images/share.png',
    },
    {
      word: 'LIKE',
      partOfSpeech: 'verb',
      definition: 'To press a button on social media to show that you enjoy or agree with a post.',
      example: 'The post got 200 likes in one hour — it was the most popular thing we have ever shared.',
      imageSlug: '/images/like.png',
    },
    {
      word: 'FOLLOW',
      partOfSpeech: 'verb',
      definition: "To subscribe to someone's account so you see their posts in your feed.",
      example: 'We asked our email subscribers to follow us on LinkedIn so they get our updates every day.',
      imageSlug: '/images/follow.png',
    },
    {
      word: 'COMMENT',
      partOfSpeech: 'noun',
      definition: 'A written message left under a post by someone who has seen it.',
      example: 'We got ten comments on the post — some people asked questions and others shared their own ideas.',
      imageSlug: '/images/comment.png',
    },
    {
      word: 'PROFILE',
      partOfSpeech: 'noun',
      definition: 'A page on social media that shows who you are — your name, photo, job, and information.',
      example: 'Dana updated her company profile with a new logo, description, and contact details.',
      imageSlug: '/images/profile.png',
    },
    {
      word: 'PLATFORM',
      partOfSpeech: 'noun',
      definition: 'A social media website or app where people create and share content. For example: LinkedIn, Instagram, or Facebook.',
      example: 'LinkedIn is the best platform for B2B marketing — the audience is made up of professionals.',
      imageSlug: '/images/platform.png',
    },
    {
      word: 'FEED',
      partOfSpeech: 'noun',
      definition: 'The list of posts you see when you open a social media app — updated all the time with new content.',
      example: "Our goal is to appear in our customers' feed every week so they do not forget about us.",
      imageSlug: '/images/feed.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'POST ON [PLATFORM]',
      definition: 'To put a message, photo, or video on a social media platform.',
      example: 'We post on LinkedIn three times a week — Monday, Wednesday, and Friday.',
      imageSlug: '/images/post-on-platform.png',
    },
    {
      phrase: 'SHARE [X] WITH YOUR AUDIENCE',
      definition: 'To send or show content to the people who follow you.',
      example: 'Share this article with your audience — it is useful and it will make them want to follow you.',
      imageSlug: '/images/share-x-with-your-audience.png',
    },
    {
      phrase: 'FOLLOW [SOMEONE] ON [PLATFORM]',
      definition: "To subscribe to someone's account on social media so you see their posts.",
      example: 'Follow us on LinkedIn to get our weekly marketing tips and industry news.',
      imageSlug: '/images/follow-someone-on-platform.png',
    },
    {
      phrase: 'LEAVE A COMMENT',
      definition: "To write a reply or message under someone's post.",
      example: 'If a client leaves a comment on your post, always reply — it shows you are listening.',
      imageSlug: '/images/leave-a-comment.png',
    },
    {
      phrase: 'BUILD YOUR PRESENCE',
      definition: 'To grow your visibility and reputation on social media over time.',
      example: 'Posting consistently is the best way to build your presence on LinkedIn.',
      imageSlug: '/images/build-your-presence.png',
    },
    {
      phrase: 'ENGAGE WITH [YOUR AUDIENCE]',
      definition: 'To interact with the people who follow you — by replying, liking, or commenting on their posts.',
      example: 'Engage with your audience by asking questions in your posts and replying to every comment.',
      imageSlug: '/images/engage-with-your-audience.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, I want to start using social media more for the agency. Where do I begin?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The first thing is to choose the right [[platform:a social media website or app where people create and share content]]. For a B2B agency, LinkedIn is the best one.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I already have a LinkedIn [[profile:a page on social media that shows who you are]]. But I do not post very often.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is the main thing to change. You need to [[post:to put a message or content on social media]] at least twice a week. Consistency is everything.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What should I write about? I am not sure what my audience wants to see in their [[feed:the list of posts you see when you open a social media app]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Share tips, client results, and things you have learned. Content that helps people gets the most [[like:to press a button to show you enjoy a post]]s and [[comment:a written message left under a post]]s.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Should I ask people to [[follow:to subscribe to someone's account so you see their posts]] the page?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — and also ask your email subscribers to follow you on LinkedIn. Also, engage with your audience by asking a question at the end of each post.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And if someone leaves a comment?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Always reply. When you [[share:to send or show something to other people]] good content and reply to every comment, LinkedIn shows your posts to more people.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'That makes sense. Can I share content from other people too, or should I only post my own things?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Both — share useful articles from others, but always add your own opinion. That is how you build your presence and become someone people want to follow.',
    }
  ],

  matchingExercise: [
    {
        "word": "POST",
        "definition": "A message, photo, or video that you put on social media for people to see"
    },
    {
        "word": "SHARE",
        "definition": "To send or show something to other people, or to put content on social media"
    },
    {
        "word": "LIKE",
        "definition": "To press a button on social media to show you enjoy or agree with a post"
    },
    {
        "word": "FOLLOW",
        "definition": "To subscribe to someone's account so you see their posts in your feed"
    },
    {
        "word": "COMMENT",
        "definition": "A written message left under a post by someone who has seen it"
    },
    {
        "word": "PROFILE",
        "definition": "A page on social media that shows who you are — your name, photo, job, and information"
    },
    {
        "word": "PLATFORM",
        "definition": "A social media website or app where people create and share content"
    },
    {
        "word": "FEED",
        "definition": "The list of posts you see when you open a social media app — updated all the time"
    }
],
  fillBlankExercise: [
    {
        "before": "Riley wrote a",
        "after": "about the new product launch and shared it on LinkedIn.",
        "answer": "post"
    },
    {
        "before": "Dana liked the article so much she decided to",
        "after": "it on her company page.",
        "answer": "share"
    },
    {
        "before": "The post got 200",
        "after": "s in one hour — it was very popular.",
        "answer": "like"
    },
    {
        "before": "We asked our email subscribers to",
        "after": "us on LinkedIn.",
        "answer": "follow"
    },
    {
        "before": "We got ten",
        "after": "s on the post — some people asked questions.",
        "answer": "comment"
    },
    {
        "before": "Dana updated her company",
        "after": "with a new logo and description.",
        "answer": "profile"
    },
    {
        "before": "LinkedIn is the best",
        "after": "for B2B marketing — the audience is made up of professionals.",
        "answer": "platform"
    },
    {
        "before": "Our goal is to appear in our customers'",
        "after": "every week so they do not forget about us.",
        "answer": "feed"
    }
],
  multipleChoiceExercise: [
    {
        "question": "A client wants to start using social media for their B2B company. Which platform do you recommend first?",
        "options": [
            "TikTok — it has the most users.",
            "LinkedIn — the audience is made up of professionals and it is the best platform for B2B marketing.",
            "Instagram — it has the best images.",
            "Facebook — it is the most popular platform overall."
        ],
        "correctIndex": 1
    },
    {
        "question": "How often should a company post on LinkedIn to build their presence?",
        "options": [
            "Once a month is enough.",
            "Every day — you need to be visible all the time.",
            "Two to three times a week — consistency is more important than volume.",
            "Only when you have big news to share."
        ],
        "correctIndex": 2
    },
    {
        "question": "A client gets a comment on their post. What should they do?",
        "options": [
            "Nothing — likes are more important than comments.",
            "Always reply — it shows you are listening and LinkedIn shows your post to more people.",
            "Like the comment but do not reply — it takes too much time.",
            "Delete the comment if it is not positive."
        ],
        "correctIndex": 1
    },
    {
        "question": "What type of content gets the most likes and comments on LinkedIn?",
        "options": [
            "Product ads and promotions",
            "Long articles about industry news",
            "Tips, client results, and useful information that helps people",
            "Personal photos and videos"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is the best way to grow your followers on LinkedIn?",
        "options": [
            "Post every day and use many hashtags.",
            "Post consistently, share useful content, engage with your audience, and ask your email subscribers to follow you.",
            "Buy followers so more people see your posts.",
            "Share content from big companies so they share yours back."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does it mean to 'engage with your audience'?",
        "options": [
            "To buy advertising so more people see your posts.",
            "To interact with your followers — replying to comments, liking their posts, and asking questions.",
            "To post more content so more people follow you.",
            "To invite people to follow your page."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is a 'feed' on social media?",
        "options": [
            "A type of paid advertisement",
            "The list of posts you see when you open a social media app — updated all the time",
            "A message sent directly to one person",
            "A summary of your profile information"
        ],
        "correctIndex": 1
    },
    {
        "question": "Can you share other people's content on your social media page?",
        "options": [
            "No — you should only post your own content.",
            "Yes, but only if you pay them.",
            "Yes — sharing useful articles from others is a good strategy, especially when you add your own opinion.",
            "Only if the content is from your company."
        ],
        "correctIndex": 2
    }
],
  warmUp: {
    "questions": [
        "Which social media platforms do you use most — for work or for personal life? Why those ones?",
        "Have you ever posted something for a company or brand online? What did you write about?",
        "What makes a social media post good? What makes you want to like or share something?"
    ]
},
  completeSentenceExercise: {
    "instructions": "Choose the correct word to complete each sentence. Then read the sentence aloud.",
    "items": [
        {
            "sentence": "We _____ on LinkedIn three times a week — Monday, Wednesday, and Friday.",
            "options": [
                "post",
                "share",
                "follow"
            ],
            "correctIndex": 0,
            "explanation": "Post means to put content on a social media platform. Share means to show content to others or pass it on. Follow means to subscribe to an account. Here, post is correct — you are putting new content on the platform."
        },
        {
            "sentence": "If a client leaves a _____ on your post, always reply — it shows you are listening.",
            "options": [
                "like",
                "comment",
                "share"
            ],
            "correctIndex": 1,
            "explanation": "A comment is a written message left under a post. A like is a button press — not a written message. A share is when someone passes on your content. Here, comment is correct — you reply to a written message."
        },
        {
            "sentence": "Ask your email subscribers to _____ you on LinkedIn so they see your posts every day.",
            "options": [
                "like",
                "comment",
                "follow"
            ],
            "correctIndex": 2,
            "explanation": "Follow means to subscribe to someone's account so their posts appear in your feed. Like means to press a button on a specific post. Comment means to write a reply. Here, follow is correct — you want them to subscribe to your account."
        },
        {
            "sentence": "LinkedIn is the best _____ for B2B marketing — the audience is made up of professionals.",
            "options": [
                "post",
                "profile",
                "platform"
            ],
            "correctIndex": 2,
            "explanation": "Platform is the word for a social media website or app — LinkedIn, Instagram, TikTok are all platforms. Profile is your page on a platform. Post is content you share. Here, platform is correct."
        },
        {
            "sentence": "Our goal is to appear in our customers' _____ every week so they do not forget about us.",
            "options": [
                "feed",
                "profile",
                "comment"
            ],
            "correctIndex": 0,
            "explanation": "Feed is the list of posts you see when you open a social media app. Profile is your own page. Comment is a written message. You want to appear in the feed — the stream of content customers see every day."
        },
        {
            "sentence": "Always _____ with your audience by asking a question at the end of every post.",
            "options": [
                "share",
                "engage",
                "follow"
            ],
            "correctIndex": 1,
            "explanation": "Engage with your audience means to interact with them — asking questions, replying, and connecting. Share means to pass on content. Follow means to subscribe to an account. Engage is the correct word here."
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. Read each customer message and choose the best response. Talk about why before you click.",
        "items": [
            {
                "customerLine": "Client says: We have a LinkedIn profile but we have not posted anything in three months.",
                "options": [
                    "Say: That is fine — you only need to post when you have big news.",
                    "Say: Three months is a long time. Let us start by posting twice a week — I can help you plan the first four posts. Consistency is the most important thing for building your presence.",
                    "Say: You should post every day to make up for the time you missed."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives a clear, practical recommendation — twice a week — and offers to help with the first posts. A says the current situation is fine, which is not true. C suggests daily posting, which is too much and not sustainable."
            },
            {
                "customerLine": "Client says: We get a lot of likes on our posts but very few comments. What are we doing wrong?",
                "options": [
                    "Say: Likes are enough — comments are not important.",
                    "Say: Try asking a question at the end of every post. Questions invite people to comment and engage with your content. That will help you build a real conversation with your audience.",
                    "Say: Share more content so more people see your posts."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives specific, actionable advice — ask a question at the end of each post. A dismisses the problem. C suggests sharing more, but that is not the reason they are not getting comments."
            },
            {
                "customerLine": "Client says: Should I share other people's content, or only post my own?",
                "options": [
                    "Say: Only post your own content — other people's content takes attention away from your brand.",
                    "Say: Both — sharing useful articles from others shows you are informed, but always add your own opinion. Your audience will see you as a valuable source, not just a company promoting itself.",
                    "Say: Share other people's content as much as possible — it is easier than creating your own."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A mix of original and shared content works best. Adding your own opinion is key — that is what makes it valuable. A is too restrictive. C suggests avoiding original content, which is the opposite of good strategy."
            }
        ]
    },
    "spotTheMistake": {
        "instructions": "Read this conversation. There are 3 mistakes. Find them and correct them. Work in pairs.",
        "dialogue": [
            {
                "speaker": "Client",
                "text": "We want to start posting on social media. Where should we begin?"
            },
            {
                "speaker": "Salesperson",
                "text": "Start with your LinkedIn profile. Make sure it has a good photo, a clear description, and your contact details."
            },
            {
                "speaker": "Client",
                "text": "How many times should we post?"
            },
            {
                "speaker": "Salesperson",
                "text": "Post one time in a week minimum. Two or three times is better."
            },
            {
                "speaker": "Client",
                "text": "What if someone leaves a comment?"
            },
            {
                "speaker": "Salesperson",
                "text": "Always reply — it shows you listen. Also, try to share contents that your audience finds useful."
            },
            {
                "speaker": "Client",
                "text": "Should we ask people to follow us?"
            },
            {
                "speaker": "Salesperson",
                "text": "Yes — ask your email subscribers to follow your page on LinkedIn."
            }
        ],
        "mistakes": [
            {
                "lineIndex": 3,
                "incorrectText": "Post one time in a week minimum.",
                "correction": "Post at least once a week minimum, but two or three times is better.",
                "explanation": "The correct phrase is 'at least once a week' or 'at least one time a week'. 'One time in a week' is not natural English. Also, giving only the minimum without the recommendation misses an opportunity to guide the client."
            },
            {
                "lineIndex": 5,
                "incorrectText": "share contents",
                "correction": "share content",
                "explanation": "Content is an uncountable noun in English — it does not have a plural form. Never say 'contents' when talking about social media material. Always say: share content, create content, post content."
            },
            {
                "lineIndex": 5,
                "incorrectText": "it shows you listen",
                "correction": "it shows you are listening",
                "explanation": "The correct phrase is 'it shows you are listening' — this uses the present continuous to describe an active, ongoing behaviour. 'You listen' (simple present) sounds too general and less natural in this context."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Finish the salesperson's line using language from this lesson. Then compare with a partner.",
        "items": [
            {
                "customerLine": "Client: We want to grow our followers on LinkedIn. What is the best way to do that?",
                "salespersonStart": "The best way is to post consistently —",
                "suggestedCompletion": "two to three times a week works well. Share tips, client results, and content your audience finds useful. Ask people to follow you and always reply to comments. Over time, the LinkedIn algorithm shows your posts to more people."
            },
            {
                "customerLine": "Client: We posted something last week and got twenty likes but no comments. How can we get more people to engage?",
                "salespersonStart": "Try asking a question at the end of your next post.",
                "suggestedCompletion": "For example, instead of just sharing a tip, end with: 'What do you think? Let us know in the comments.' Questions invite people to leave a comment and start a conversation with your brand."
            },
            {
                "customerLine": "Client: We are not sure what to post about. We do not have any big news right now.",
                "salespersonStart": "You do not need big news to post.",
                "suggestedCompletion": "Share a tip from something you learned this week. Tell people what your team is working on. Ask your audience a question about their biggest marketing challenge. The best posts are not always the biggest news — they are the ones that help people."
            }
        ]
    }
},
};
