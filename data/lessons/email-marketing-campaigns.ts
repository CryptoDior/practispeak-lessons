import { Lesson } from '@/types/lesson';

export const emailMarketingCampaigns: Lesson = {
  slug: 'email-marketing-campaigns',
  title: 'Email Marketing Campaigns',
  subtitle: 'How to plan, write, and talk about email campaigns that get opened, read, and acted on',
  level: 'B1-B2',
  description: 'Email is still the highest-ROI channel in B2B marketing — when it is done well. In this lesson you will learn the vocabulary for planning and discussing email campaigns: how to structure a campaign, understand key performance metrics, test and improve results, and write a clear email campaign brief.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-hero.png',

  vocabulary: [
    {
      word: 'OPEN RATE',
      partOfSpeech: 'noun',
      definition: 'The share of people who open an email they receive.',
      example: 'Our open rate went up after we changed the sender name.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-open-rate.png',
    },
    {
      word: 'CLICK-THROUGH RATE',
      partOfSpeech: 'noun',
      definition: 'The share of people who click a link in an email.',
      example: 'The click-through rate was low, so we changed the button.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-click-through-rate.png',
    },
    {
      word: 'A/B TEST',
      partOfSpeech: 'noun',
      definition: 'A test that sends two versions of an email to see which works better.',
      example: 'We ran an A/B test on two different subject lines.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-ab-test.png',
    },
    {
      word: 'DRIP CAMPAIGN',
      partOfSpeech: 'noun',
      definition: 'A set of automatic emails sent one after another over time.',
      example: 'New subscribers get a welcome email from our drip campaign.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-drip-campaign.png',
    },
    {
      word: 'UNSUBSCRIBE RATE',
      partOfSpeech: 'noun',
      definition: 'The share of people who stop getting your emails after a campaign.',
      example: 'Our unsubscribe rate stayed low after last week\'s newsletter.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-unsubscribe-rate.png',
    },
    {
      word: 'DELIVERABILITY',
      partOfSpeech: 'noun',
      definition: 'How well your emails reach people\'s inboxes instead of spam folders.',
      example: 'Poor deliverability meant many of our emails went to spam.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-deliverability.png',
    },
    {
      word: 'SEGMENTATION',
      partOfSpeech: 'noun',
      definition: 'Splitting an email list into smaller groups with shared features.',
      example: 'Segmentation helps us send different offers to different customers.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-segmentation.png',
    },
    {
      word: 'SUBJECT LINE',
      partOfSpeech: 'noun',
      definition: 'The short line of text people see before they open an email.',
      example: 'We tested a shorter subject line to get more people to open it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-subject-line.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'CLEAN [THE LIST]',
      definition: 'To remove old or wrong contacts from an email list.',
      example: 'We clean the list every quarter to remove old email addresses.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-clean-the-list.png',
    },
    {
      phrase: 'WARM UP [A LIST]',
      definition: 'To slowly get an inactive email list interested again before a big send.',
      example: 'We need to warm up the list before the big product launch.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-warm-up-a-list.png',
    },
    {
      phrase: 'SPLIT TEST',
      definition: 'To compare two versions of an email to see which does better.',
      example: 'We split test the headline before we send the campaign to everyone.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-split-test.png',
    },
    {
      phrase: 'FOLLOW UP [ON AN EMAIL]',
      definition: 'To send another email to people who did not answer the first one.',
      example: 'She will follow up on the email tomorrow morning.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-follow-up-on-an-email.png',
    },
    {
      phrase: 'OPT IN / OPT OUT',
      definition: 'To agree to get emails from a brand, or to ask to stop.',
      example: 'Customers can opt in or opt out at any time.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-opt-in--opt-out.png',
    },
    {
      phrase: 'PERSONALIZE [AN EMAIL]',
      definition: 'To change an email so it fits each person who receives it.',
      example: 'We personalize each email with the customer\'s first name.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/email-marketing-campaigns-personalise-an-email.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: 'Marcus — I have the month one email campaign results. Before I walk you through the numbers, I want to give you the context so you know how to read them.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'Go ahead. What was the [[open rate:the percentage of people who opened your email]]?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "31%. The B2B average is 22%, so that is strong. The [[subject line:the text in the inbox before the email is opened]] — 'You asked for proof. Here it is.' — outperformed the A/B test variant by 28%. That subject line is going on the next campaign too.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'And the [[click-through rate:the percentage who clicked a link inside the email]]?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "3.8% — below our target of 6%. So the email was opened, but the call to action did not move enough people to click. That is the only thing I want to fix next month — everything else worked. We are going to [[split test:test two versions of an email element]] the call to action on the next send: 'Read the case study' versus 'Book a 30-minute call'. I expect the softer ask will convert better at this stage of the [[drip campaign:a series of automated emails designed to move prospects closer to action]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'What about [[unsubscribe rate:the percentage of people who opted out after receiving the campaign]]? I am always nervous about that one.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: '0.3% — very healthy. Anything under 0.5% means the content is relevant to the list. The [[segmentation:dividing your list into groups based on shared characteristics]] we did before sending made a real difference — we separated the cold prospects from the warmer leads and sent different emails to each group. The warmer [[segmentation:targeted group]] converted at four times the rate of the cold list.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'And [[deliverability:whether emails actually reach the inbox]]? We had problems with that last quarter.',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: '[[Deliverability:whether emails land in the inbox rather than spam]] was clean this time — 98.7% inbox rate. Before we sent, I cleaned the list — removed 400 contacts who had not opened anything in six months — and re-authenticated the sending domain. Those two steps fixed the problem from last quarter completely.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: 'What is the plan for the rest of the [[drip campaign:email sequence]] this month?',
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/dana-icon.png',
      text: "Emails three, four, and five go out over the next two weeks. Email three handles the most common objection — 'what if it does not work for our size of company?' — and [[personalizes:tailors the content to the individual]] using the recipient's industry in the first line. Email four is the call booking invite. Email five is the [[follow-up:a second email to people who did not respond]] — we always send one. Sixty percent of our bookings come from the fourth or fifth email, not the first.",
    }
  ],

  matchingExercise: [
    {
        "word": "OPEN RATE",
        "definition": "The percentage of people who opened your email out of everyone who received it"
    },
    {
        "word": "CLICK-THROUGH RATE",
        "definition": "The percentage of people who clicked a link inside your email"
    },
    {
        "word": "A/B TEST",
        "definition": "Sending two versions of an email to different groups to find out which performs better"
    },
    {
        "word": "DRIP CAMPAIGN",
        "definition": "A series of automated emails sent over time to move prospects closer to action"
    },
    {
        "word": "UNSUBSCRIBE RATE",
        "definition": "The percentage of people who opted out of your email list after a campaign"
    },
    {
        "word": "DELIVERABILITY",
        "definition": "Whether your emails actually reach the recipient's inbox rather than going to spam"
    },
    {
        "word": "SEGMENTATION",
        "definition": "Dividing your email list into groups based on shared characteristics for more targeted messaging"
    },
    {
        "word": "SUBJECT LINE",
        "definition": "The short text in the inbox before an email is opened — the key factor in whether someone opens it"
    }
],
  fillBlankExercise: [
    {
        "before": "Our",
        "after": "was 34% — well above the B2B average of 22%. The subject line 'You asked for proof — here it is' outperformed everything we have tested.",
        "answer": "open rate"
    },
    {
        "before": "A 34% open rate with a 2%",
        "after": "tells you the email was opened but the content or call to action did not land.",
        "answer": "click-through rate"
    },
    {
        "before": "We ran an",
        "after": "on the subject line — version A versus version B — to find out which one generated more opens.",
        "answer": "A/B test"
    },
    {
        "before": "Our",
        "after": "sends five emails over three weeks — each one moves the prospect one step closer to booking a call.",
        "answer": "drip campaign"
    },
    {
        "before": "An",
        "after": "above 0.5% is a warning sign that the content is not relevant to the list — or you are emailing too frequently.",
        "answer": "unsubscribe rate"
    },
    {
        "before": "Our open rates dropped — not because of the content, but because of",
        "after": ". Three hundred emails had gone to spam.",
        "answer": "deliverability"
    },
    {
        "before": "Once we applied",
        "after": "— separating existing clients from cold prospects — the click-through rate on the prospect list doubled.",
        "answer": "segmentation"
    },
    {
        "before": "A great",
        "after": "does one of three things: addresses a pain point, makes a specific promise, or creates genuine curiosity.",
        "answer": "subject line"
    }
],
  multipleChoiceExercise: [
    {
        "question": "The email open rate dropped from 30% to 18% this month. What should you check first?",
        "options": [
            "Whether the email content was less interesting than last month's.",
            "Whether there is a deliverability problem — emails going to spam — or whether the list was less well-segmented than last time. A sudden drop in open rate is almost always a technical or targeting issue, not a content issue. Check deliverability first, then segmentation.",
            "Whether the send time was wrong — open rates are highly sensitive to the day and time of sending.",
            "Whether the subject line was too long — long subject lines often get cut off on mobile devices."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does a high open rate combined with a very low click-through rate tell you?",
        "options": [
            "The email list is of high quality but the send time was wrong.",
            "The subject line worked — people opened the email — but the content or call to action inside did not give them a compelling reason to click. This is a body copy or CTA problem, not a subject line problem.",
            "The email was too long and people did not finish reading it before closing it.",
            "The email was sent to the wrong segment — the audience was interested in the topic but not in the product."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the purpose of a drip campaign in B2B marketing?",
        "options": [
            "To send the same promotional email repeatedly until the prospect responds.",
            "To move a prospect through the buying journey over time using a sequence of targeted emails — each one building on the last, addressing a different stage of the decision process, and moving them closer to taking action. It is more effective than a single email because it matches the reality of how B2B decisions are made.",
            "To warm up a cold email list before sending a high-value campaign.",
            "To automate the email process so the marketing team does not need to write new emails each month."
        ],
        "correctIndex": 1
    },
    {
        "question": "What is the most effective element to A/B test first in a new email campaign?",
        "options": [
            "The email design and visual layout — that is what most people notice first.",
            "The subject line — because it determines whether the email is opened at all. If the subject line is wrong, none of the rest matters. Once you have a subject line that consistently produces strong open rates, then test the call to action, then the body copy.",
            "The send time — research shows that specific hours on specific days produce significantly higher open rates.",
            "The sender name — emails from a named person often outperform those from a company name."
        ],
        "correctIndex": 1
    },
    {
        "question": "What does a high unsubscribe rate usually indicate?",
        "options": [
            "The email was too long and people did not have time to read it.",
            "The content is not relevant to the people receiving it — they are either the wrong audience, being emailed too frequently, or receiving content that does not match what they expected when they opted in. Before sending the next campaign, review the segmentation and the frequency.",
            "The subject line was misleading — people opened the email expecting something different.",
            "The email list is too old and needs to be replaced with fresh contacts."
        ],
        "correctIndex": 1
    },
    {
        "question": "Why is email segmentation important for campaign performance?",
        "options": [
            "It reduces the total number of emails sent, which lowers the cost of the campaign.",
            "Different groups on your list have different needs, challenges, and buying stages — sending the same email to all of them produces average results for everyone. Segmentation allows you to send a more relevant message to each group, which consistently improves open rates, click-through rates, and conversion.",
            "It is required by GDPR to separate contact lists by consent type before sending.",
            "It helps the marketing platform deliver emails more efficiently and improves deliverability."
        ],
        "correctIndex": 1
    },
    {
        "question": "A subject line reads: 'Important update from TechFlow'. What is the problem?",
        "options": [
            "It is too short — subject lines need to be at least 40 characters to perform well.",
            "It is vague and gives no specific reason to open — 'important update' is one of the most overused and least trusted phrases in email marketing. It does not address a pain point, make a promise, or create genuine curiosity. A prospect who receives this from a brand they do not yet know well will almost always ignore it.",
            "It does not include the recipient's name, which reduces open rates.",
            "It sounds too formal — B2B email subject lines should be conversational to feel authentic."
        ],
        "correctIndex": 1
    },
    {
        "question": "What should you do before sending an email campaign to a list that has not been contacted in eight months?",
        "options": [
            "Send the campaign immediately — the longer you wait, the more people will lose interest.",
            "Warm up the list first — send two or three light-touch, low-ask emails over four to six weeks to re-establish the relationship and identify who is still engaged before sending a conversion-focused campaign. Also clean the list to remove bounces and opt-outs. Sending a heavy campaign to a cold list damages your sender reputation and deliverability.",
            "Segment the list by job title and send a personalized version to each segment simultaneously.",
            "Check the opt-in date and remove anyone who signed up more than twelve months ago."
        ],
        "correctIndex": 1
    }
],
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in groups. Read each situation and choose the best response. Discuss why before clicking.",
        "items": [
            {
                "customerLine": "Client after seeing the monthly email report: 'Our open rate is only 18%. This campaign is failing.'",
                "options": [
                    "Say: 'You are right — let us rewrite the whole email for next month.'",
                    "Say: 'Before we call it a failure, let me check two things. First: did those emails actually reach the inbox? An 18% open rate could mean the subject line did not land — or it could mean 30% of the emails went to spam, which would make 18% an artificially low number. Let me check the deliverability report. Second: what is the benchmark for your sector? The B2B average is 22%, so 18% is slightly below average — but it is also not a crisis. Let us diagnose before we rewrite. I do not want to change the content if the real problem is technical.'",
                    "Say: 'Let us try a different sending time next month — Tuesday morning usually gives better results.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It does not panic and it does not dismiss the concern. It diagnoses before acting — checking deliverability first, then benchmarking the number. A makes a significant change without understanding the cause. C optimizes for send time when that is likely not the issue."
            },
            {
                "customerLine": "Client: 'I want to buy a list of 20,000 contacts and email them all next week.'",
                "options": [
                    "Say: 'Great — a large list will give us much more reach for the campaign.'",
                    "Say: 'I need to be honest about the risks here. A purchased list is almost always a bad investment for three reasons. First: the contacts did not opt in to hear from TechFlow, which creates compliance issues under GDPR and damages your sender reputation. Second: the quality is usually poor — many contacts will be outdated, wrong, or irrelevant to your persona. Third: the deliverability will be terrible — sending to a cold purchased list will likely get your domain flagged as a spam sender, which will hurt all your future email campaigns. A targeted list of 2,000 opted-in, well-segmented contacts will generate more leads than 20,000 poor-quality purchased ones. Let me show you how to build the right list.'",
                    "Say: 'Purchased lists can work if the data quality is high — let us ask the vendor about their verification process first.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It gives three specific, honest reasons why the plan is risky — compliance, quality, and deliverability — and offers an alternative. A accepts a plan that will likely damage the campaign and the brand's sender reputation. C opens the door to the approach when the risks clearly outweigh the benefits."
            },
            {
                "customerLine": "Client: 'Email three in the drip sequence got zero replies. Should we skip emails four and five?'",
                "options": [
                    "Say: 'If they did not respond to three, they probably will not respond to four or five either — let us move on.'",
                    "Say: 'Not yet. Zero replies on email three is not unusual — most B2B buyers need five to seven touchpoints before they are ready to act, and email three is the objection-handling email, not the conversion email. The call to action comes in email four and the follow-up in email five. In our experience, between 50% and 60% of all bookings in a drip sequence come from email four or five — not from the earlier emails. Let us send four and five before drawing any conclusions. If we still have no bookings after five, then we review the whole sequence.'",
                    "Say: 'Let us resend email three with a different subject line before moving to email four.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It explains the purpose of each email in the sequence and backs up the recommendation with data about where conversions typically come from. A stops too early based on one data point. C delays the sequence unnecessarily — the problem is not email three's subject line, it is that the sequence has not reached the conversion stage yet."
            },
            {
                "customerLine": "Client: 'Can we personalize the emails with their first name? I have seen that in campaigns and it looks professional.'",
                "options": [
                    "Say: 'Yes — first name personalization always improves open rates significantly.'",
                    "Say: 'Absolutely — first name is a good start. But the most powerful personalization in B2B goes beyond the name. If we can reference their company, their industry, or something they have already done — like downloading a case study — the email feels genuinely written for them rather than just mail-merged. For example: 'Hi Claire — I noticed TechFlow downloaded our operational efficiency guide last week. Here is the follow-up most operations directors ask for next.' That level of personalization consistently doubles click-through rates compared to first name only. Shall we set up the behavioural triggers to make that possible?'",
                    "Say: 'First name personalization is standard now and the audience expects it — it no longer has the same impact it used to. Let us focus on the subject line instead.'"
                ],
                "correctIndex": 1,
                "explanation": "B is correct. It says yes to the idea, then elevates it — explaining what true personalization looks like in B2B and why it outperforms first-name-only. A agrees with a half-measure without improving it. C dismisses name personalization without explaining what to do instead in a way that is helpful."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Read the three email campaign problems. Match each to the fix that addresses it most directly. Discuss as a group before clicking 'Check Matches'.",
        "profiles": [
            {
                "name": "Campaign A — TechFlow",
                "description": "Open rate: 28%. Click-through rate: 1.2%. The email content is a detailed explanation of TechFlow's product features — three paragraphs of text followed by a 'Book a Call' button. The audience is warm prospects who have already downloaded a case study.",
                "matchKey": "cta"
            },
            {
                "name": "Campaign B — BrightPath",
                "description": "Open rate: 9%. The email content is strong — specific, relevant, well-written. But the subject line reads: 'BrightPath October Newsletter'. The list is well-segmented and opted-in. Deliverability is clean.",
                "matchKey": "subjectline"
            },
            {
                "name": "Campaign C — NovaSpark",
                "description": "Open rate: 25%. Click-through rate: 4%. But the unsubscribe rate is 1.8% — well above the healthy threshold of 0.5%. The campaign is emailing the full 15,000-person list with the same message three times per week.",
                "matchKey": "frequency"
            }
        ],
        "options": [
            {
                "key": "cta",
                "label": "Fix the call to action",
                "description": "Warm prospects who have already read a case study do not need more information about the product — they need the right next step. Replace the feature-heavy body copy with one specific result from the case study and change the CTA from 'Book a Call' to something lower-friction: 'See how we did it' or 'Read the 90-day result'. The audience is warm — meet them where they are, not at the beginning."
            },
            {
                "key": "subjectline",
                "label": "Rewrite the subject line",
                "description": "A 9% open rate with strong content and clean deliverability is almost always a subject line problem. 'BrightPath October Newsletter' gives no reason to open — it is a description of the email, not a reason to read it. A/B test two new subject lines that address a specific pain point or make a specific promise. The content will do its job once people open the email."
            },
            {
                "key": "frequency",
                "label": "Reduce frequency and segment the list",
                "description": "An unsubscribe rate of 1.8% signals that the audience feels over-emailed. Three emails a week to 15,000 people with the same message is too frequent and too broad. Move to once a week maximum, and segment the list — active prospects get a different email from cold contacts. Sending less frequently but to better-targeted segments will reduce unsubscribes and improve all other metrics."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "The email marketer has started explaining or presenting. Finish the line clearly and practically. Use vocabulary from this lesson.",
        "items": [
            {
                "customerLine": "Client: 'How do we write a subject line that gets people to actually open the email?'",
                "salespersonStart": "The best subject lines do one of three things — and you should test all three to find out what your audience responds to most.",
                "suggestedCompletion": "The first approach: address a specific pain point directly. 'Still waiting for your marketing agency to show you the ROI?' stops an operations director mid-scroll because it names exactly what they are frustrated about. The second approach: make a specific promise with a number. 'How TechFlow reduced operational costs by 30% in 90 days' works because it is concrete — not vague like 'improve your operations'. The third approach: create genuine curiosity without being clickbait. 'What 94% client retention actually looks like' makes the reader want to know the answer. I would A/B test one from each approach and let the data tell us which resonates most with this specific audience."
            },
            {
                "customerLine": "Client: 'We have 8,000 contacts but we have never emailed them before. How do we start?'",
                "salespersonStart": "Before we send anything, we need to do two things: clean the list and warm it up.",
                "suggestedCompletion": "Cleaning means removing any contacts who are clearly invalid — email addresses that have bounced before, people who have unsubscribed from other communications, and anyone we cannot verify opted in at some point. That probably brings the list down to 5,000 to 6,000. Then warming means we do not go straight into a conversion campaign — we send two or three light-touch emails over the first three weeks. The first one re-establishes the relationship: who we are, why we are emailing, and something genuinely useful they can take away. The second shares a piece of content — a case study or insight — with no ask. The third is when we make the offer. That sequence builds trust, reduces unsubscribes, and protects our sender reputation so the conversion email actually reaches the inbox."
            },
            {
                "customerLine": "Client: 'What should our drip campaign look like for warm prospects — people who have already downloaded a case study?'",
                "salespersonStart": "Because they are warm, we do not need to start from scratch — we pick up where the case study left off.",
                "suggestedCompletion": "I would structure it as a five-email sequence over three weeks. Email one — sent immediately after the download — thanks them and shares the specific result from the case study they just read: 'You have just read how we delivered a 30% cost reduction. Here is the question most people ask next.' Email two — four days later — addresses the most common objection: 'What if it does not work for a company our size?' with a short answer and a second case study from a similar company. Email three — eight days later — shares a quick insight that is useful even if they never buy from us: this builds goodwill. Email four — fourteen days later — is the direct invitation to book a call, personalized with their company name if possible. Email five — three weeks later — is the follow-up for anyone who did not respond. Short, direct, no pressure. 60% of our bookings come from emails four and five."
            },
            {
                "customerLine": "Client: 'Our unsubscribe rate went up to 1.5% this month. Should we be worried?'",
                "salespersonStart": "Yes — 1.5% is above the healthy threshold of 0.5% and it is telling you something important.",
                "suggestedCompletion": "High unsubscribe rates usually come from one of three things: frequency, relevance, or expectation mismatch. Frequency: are we emailing them too often? If we went from once a week to three times a week, that alone can spike the unsubscribe rate. Relevance: are we sending the right content to the right segment? If a cold prospect is getting the same email as a warm one, the cold prospect will often unsubscribe because the content feels premature. Expectation mismatch: did people opt in expecting one type of content and receive another? Let me look at the segmentation and the frequency of this particular campaign and I will come back to you by end of day with a specific diagnosis and the change I recommend. We should not send another email until we know what is causing it."
            }
        ]
    }
},
};
