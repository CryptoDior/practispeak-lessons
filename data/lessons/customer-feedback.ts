import { Lesson } from '@/types/lesson';

export const customerFeedback: Lesson = {
  slug: 'customer-feedback',
  title: 'Customer Feedback',
  subtitle: 'How to talk about what customers think and how to respond to their feedback',
  level: 'A2',
  description: 'Learn the key words for discussing customer feedback — how to collect it, what to do with it, and how to respond professionally.',
  heroImage: '/images/customer-feedback-hero.png',

  vocabulary: [
    {
      word: 'RATING',
      partOfSpeech: 'noun',
      definition: 'A number that a customer gives to show how happy they are — for example, 1 to 5 stars.',
      example: 'Our average rating on G2 is 4.7 out of 5 — one of the highest in our category.',
      imageSlug: '/images/rating.png',
    },
    {
      word: 'REVIEW',
      partOfSpeech: 'noun',
      definition: 'A written comment from a customer about their experience with a product or service.',
      example: 'A new client said they found us through a review on G2 — positive reviews really help.',
      imageSlug: '/images/review.png',
    },
    {
      word: 'COMPLAINT',
      partOfSpeech: 'noun',
      definition: 'A message from a customer saying they are unhappy with something.',
      example: 'We had a complaint about the onboarding process — the client found it confusing.',
      imageSlug: '/images/complaint.png',
    },
    {
      word: 'TESTIMONIAL',
      partOfSpeech: 'noun',
      definition: 'A positive statement from a happy customer, used in marketing to show others the product works.',
      example: 'We use client testimonials on our website — real words from real people are more convincing than ads.',
      imageSlug: '/images/testimonial.png',
    },
    {
      word: 'SATISFACTION',
      partOfSpeech: 'noun',
      definition: 'How happy a customer feels about a product or service.',
      example: 'We measure client satisfaction with a short survey at the end of each campaign.',
      imageSlug: '/images/satisfaction.png',
    },
    {
      word: 'SURVEY',
      partOfSpeech: 'noun',
      definition: 'A set of questions used to collect information or opinions from customers.',
      example: 'We send a short five-question survey to all new clients after their first month.',
      imageSlug: '/images/survey.png',
    },
    {
      word: 'NET PROMOTER SCORE',
      partOfSpeech: 'noun',
      definition: 'A score that shows how likely customers are to recommend your product to someone else. Often called NPS.',
      example: 'Our NPS is 72 — a score above 50 is considered excellent in the B2B sector.',
      imageSlug: '/images/net-promoter-score.png',
    },
    {
      word: 'CHURN',
      partOfSpeech: 'noun',
      definition: 'The number or percentage of customers who stop using a product or service.',
      example: 'We need to reduce churn — too many clients are leaving after six months.',
      imageSlug: '/images/churn.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'FOLLOW UP ON',
      definition: 'Contact a customer again after a complaint or feedback to check if the issue was resolved.',
      example: 'We always follow up on complaints within 24 hours to make sure the client is happy.',
      imageSlug: '/images/follow-up-on.png',
    },
    {
      phrase: 'ACT ON FEEDBACK',
      definition: 'Use what customers tell you to make real changes.',
      example: 'We acted on the feedback about onboarding — we redesigned the first three steps.',
      imageSlug: '/images/act-on-feedback.png',
    },
    {
      phrase: 'TURN [X] INTO',
      definition: 'Change one thing into something else — for example, turn a complaint into an opportunity.',
      example: 'We turned a complaint into a case study — the client had a problem, we fixed it, and they became one of our best advocates.',
      imageSlug: '/images/turn-x-into.png',
    },
    {
      phrase: 'ASK FOR FEEDBACK',
      definition: "Request a customer's opinion about their experience.",
      example: 'We ask for feedback at the end of every project — most clients are happy to share their thoughts.',
      imageSlug: '/images/ask-for-feedback.png',
    },
    {
      phrase: 'HANDLE A COMPLAINT',
      definition: 'Manage and respond to an unhappy customer in a professional way.',
      example: 'The key to handling a complaint well is to listen, acknowledge the problem, and fix it quickly.',
      imageSlug: '/images/handle-a-complaint.png',
    },
    {
      phrase: 'LEAVE A REVIEW',
      definition: 'Write a public comment on a platform about a product or service.',
      example: 'We ask happy clients to leave a review on G2 — it helps new customers decide to sign up.',
      imageSlug: '/images/leave-a-review.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'Riley, how does Brightline handle customer [[feedback:opinions and reactions from customers about their experience]]? Do you have a system for it?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we have a few things in place. First, we send a short [[survey:a set of questions used to collect opinions from customers]] to all new clients after their first month. It asks about their experience with onboarding, the product, and the support team.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And how do you measure overall [[satisfaction:how happy a customer feels about a product or service]]?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We use NPS — [[net promoter score:a score that shows how likely customers are to recommend your product]]. We ask: 'How likely are you to recommend us to a colleague?' Our score is 72, which is very good for B2B software.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about public [[review:a written comment from a customer about their experience]]s? Do you ask for those?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Yes — we ask happy clients to leave a review on G2. Our average [[rating:a number that shows how happy a customer is]] is 4.7 out of 5. We use the best quotes as [[testimonial:a positive statement from a happy customer used in marketing]]s on the website.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'And when there is a [[complaint:a message from a customer saying they are unhappy]]? How do you handle that?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'We take complaints seriously. We respond within 24 hours, listen to the problem, and fix it. Then we follow up to make sure the client is happy. If we handle it well, some of those clients become our biggest supporters.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'What about [[churn:the number of customers who stop using your product]]? Is that a problem for you?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'It is something we watch closely. If a client is not using the product, we reach out before they decide to leave. Good feedback processes help you spot these clients early.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: 'I have never had a formal feedback process. I just hope my clients are happy.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is the problem — you only find out they are unhappy when they leave. Ask for feedback early and often. It is the best way to reduce churn and improve the product.',
    }
  ],

  matchingExercise: [
    {
        "word": "RATING",
        "definition": "A number that a customer gives to show how happy they are — for example, 1 to 5 stars"
    },
    {
        "word": "REVIEW",
        "definition": "A written comment from a customer about their experience with a product or service"
    },
    {
        "word": "COMPLAINT",
        "definition": "A message from a customer saying they are unhappy with something"
    },
    {
        "word": "TESTIMONIAL",
        "definition": "A positive statement from a happy customer, used in marketing to show others the product works"
    },
    {
        "word": "SATISFACTION",
        "definition": "How happy a customer feels about a product or service"
    },
    {
        "word": "SURVEY",
        "definition": "A set of questions used to collect information or opinions from customers"
    },
    {
        "word": "NET PROMOTER SCORE",
        "definition": "A score that shows how likely customers are to recommend your product to someone else"
    },
    {
        "word": "CHURN",
        "definition": "The number or percentage of customers who stop using a product or service"
    }
],
  fillBlankExercise: [
    {
        "before": "Our average",
        "after": "on G2 is 4.7 out of 5 — one of the highest in our category.",
        "answer": "rating"
    },
    {
        "before": "A new client said they found us through a",
        "after": "on G2.",
        "answer": "review"
    },
    {
        "before": "We had a",
        "after": "about the onboarding process — the client found it confusing.",
        "answer": "complaint"
    },
    {
        "before": "We use client",
        "after": "s on our website — real words from real people are convincing.",
        "answer": "testimonial"
    },
    {
        "before": "We measure client",
        "after": "with a short survey at the end of each campaign.",
        "answer": "satisfaction"
    },
    {
        "before": "We send a short",
        "after": "to all new clients after their first month.",
        "answer": "survey"
    },
    {
        "before": "Our",
        "after": "is 72 — a score above 50 is considered excellent.",
        "answer": "net promoter score"
    },
    {
        "before": "We need to reduce",
        "after": "— too many clients are leaving after six months.",
        "answer": "churn"
    }
],
  multipleChoiceExercise: [
    {
        "question": "When does Brightline send a survey to new clients?",
        "options": [
            "Before they start using the product",
            "After their first month",
            "After six months",
            "At the end of every year"
        ],
        "correctIndex": 1
    },
    {
        "question": "What is Brightline's NPS score?",
        "options": [
            "42",
            "58",
            "72",
            "90"
        ],
        "correctIndex": 2
    },
    {
        "question": "Where does Brightline ask clients to leave reviews?",
        "options": [
            "Google",
            "LinkedIn",
            "G2",
            "Their own website"
        ],
        "correctIndex": 2
    },
    {
        "question": "What is Brightline's average rating?",
        "options": [
            "3.9 out of 5",
            "4.2 out of 5",
            "4.7 out of 5",
            "5 out of 5"
        ],
        "correctIndex": 2
    },
    {
        "question": "How does Brightline handle a complaint?",
        "options": [
            "They ignore it if it is only one customer",
            "They respond within 24 hours, fix the problem, and follow up",
            "They offer a discount straight away",
            "They escalate it to the director only"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say about clients who complain but are handled well?",
        "options": [
            "They usually leave anyway",
            "They become some of Brightline's biggest supporters",
            "They ask for a refund",
            "They are unlikely to leave a review"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say about churn?",
        "options": [
            "It is not a problem for Brightline",
            "They watch it closely and reach out to clients who are not using the product",
            "They only deal with it at the end of the year",
            "They use discounts to stop clients from leaving"
        ],
        "correctIndex": 1
    },
    {
        "question": "What does Riley say is the problem with Dana's current approach to feedback?",
        "options": [
            "She asks for feedback too often",
            "She only asks for feedback from new clients",
            "She only finds out clients are unhappy when they have already left",
            "She does not use NPS"
        ],
        "correctIndex": 2
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read the question or comment. Talk about which response (A, B, or C) is best. Choose together, then click to check.",
        "items": [
            {
                "customerLine": "A client just sent us a complaint about the onboarding process. What should we do?",
                "options": [
                    "Reply today, apologise, and explain the next step to fix the issue. Follow up after 48 hours to make sure they are happy. Take the feedback seriously — other clients probably feel the same.",
                    "Send a standard apology email and offer a discount.",
                    "Wait and see if they bring it up again — it might be a one-off."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It says to respond quickly, fix the problem, follow up, and use the feedback to improve. B is too quick to offer a discount without understanding the issue. C is the worst option — ignoring a complaint leads to churn."
            },
            {
                "customerLine": "How do you get clients to leave reviews?",
                "options": [
                    "We ask them directly after a positive interaction — for example, after a successful campaign. We send a short message with a link and explain that their review helps other marketing teams find us.",
                    "We offer a discount in exchange for a review.",
                    "We wait and hope they do it."
                ],
                "correctIndex": 0,
                "explanation": "A is correct. It explains when to ask (after a positive moment), how (direct message with a link), and why (so other people can find you). B risks getting low-quality or dishonest reviews. C gives no control over whether it happens."
            },
            {
                "customerLine": "Our churn rate has increased this quarter. What could be causing it?",
                "options": [
                    "It might be a pricing issue.",
                    "There are a few possibilities — the most common reasons are a poor onboarding experience, low product usage, or clients not seeing enough value in the first three months. I would start by surveying clients who have already left.",
                    "Churn always goes up at the end of the year."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives real, specific reasons for churn and suggests a clear next step — surveying clients who left. A guesses at one possible cause. C is not true and avoids the real question."
            },
            {
                "customerLine": "Why should we measure NPS?",
                "options": [
                    "Because all companies do it.",
                    "NPS tells you how likely clients are to recommend you. A high score means clients love the product and will refer others — that is one of the best ways to grow. A low score is an early warning that something needs to change.",
                    "It is a number we can put in our marketing materials."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains what NPS actually measures and what a high or low score means for the business. A gives no real reason. C is a superficial answer — you should measure NPS to improve, not just to show off the number."
            }
        ]
    },
    "profileMatch": {
        "instructions": "You are Riley. Three B2B companies have a feedback problem. As a group, decide what each company should do first to improve. Click 'Check Matches' when you agree.",
        "profiles": [
            {
                "name": "A company that has many happy clients but no online reviews",
                "description": "A software company has a 4.8/5 rating internally, but almost no public reviews on G2 or Capterra. Potential clients say they cannot find any reviews to help them decide.",
                "matchKey": "reviews"
            },
            {
                "name": "A company with a high churn rate but no idea why clients are leaving",
                "description": "A marketing platform loses around 20% of clients every quarter. They do not survey clients when they leave, so they have no idea what the problem is.",
                "matchKey": "exit"
            },
            {
                "name": "A company that collects feedback but never acts on it",
                "description": "A company sends a survey after every project and gets useful feedback. But nothing changes — the same complaints appear every month. Clients notice and stop responding.",
                "matchKey": "action"
            }
        ],
        "options": [
            {
                "key": "reviews",
                "label": "Ask happy clients to leave public reviews",
                "description": "Send a direct message to your most satisfied clients with a link to G2 or Capterra. Explain that their review helps other companies make a decision. Make it easy — keep it to one click and one step."
            },
            {
                "key": "exit",
                "label": "Send an exit survey to clients who leave",
                "description": "When a client cancels, send a short three-question survey asking why. Even if only 30% respond, you will start to see patterns. That data is more useful than any other feedback you can get."
            },
            {
                "key": "action",
                "label": "Act on the feedback you are already getting",
                "description": "Stop collecting feedback and start using it. Pick the top two or three complaints and fix them this quarter. Then tell clients what you changed — that shows you are listening and builds trust."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The marketer's line is not finished. As a group, discuss how you would finish it. Use vocabulary from this lesson. There is no single correct answer — compare your ideas, then click to see one example.",
        "items": [
            {
                "customerLine": "How do you collect feedback from your clients?",
                "salespersonStart": "We have a few ways. We send a short survey after the first month, and we measure NPS twice a year. We also monitor public",
                "suggestedCompletion": "reviews on G2 and respond to all of them — positive and negative. If someone leaves a complaint, we follow up directly and try to resolve it within 24 hours."
            },
            {
                "customerLine": "What do you do with feedback once you have it?",
                "salespersonStart": "We share it with the product and customer success teams. If we see the same complaint appearing more than once, we treat it as a priority and",
                "suggestedCompletion": "act on it in the next product update. We also tell clients when we have made a change based on their feedback — that builds satisfaction and reduces churn."
            },
            {
                "customerLine": "A client gave us a 3-star review. How should we respond?",
                "salespersonStart": "Thank them for the review first — even a negative one is valuable. Then acknowledge the issue they raised and explain what you are doing to fix it. Keep the response professional and",
                "suggestedCompletion": "brief. Do not be defensive — potential customers are also reading your response, and how you handle a complaint tells them a lot about how you treat clients."
            },
            {
                "customerLine": "How do you use testimonials in your marketing?",
                "salespersonStart": "We ask our best clients to share a short quote about what the product has done for their team. We use those testimonials on our website, in emails,",
                "suggestedCompletion": "and in sales presentations. Real words from real clients are much more convincing than anything we write ourselves. A good testimonial shows potential clients a result they could also get."
            }
        ]
    }
},
};
