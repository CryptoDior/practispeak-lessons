import { Lesson } from '@/types/lesson';

export const communityLedMarketing: Lesson = {
  slug: 'community-led-marketing',
  title: 'Community-Led Marketing',
  subtitle: 'How to build, grow, and activate a brand community that drives sustainable growth',
  level: 'C1-C2',
  description: "The most durable brands are not built by advertising — they are built by communities of people who believe in what the brand stands for and tell others about it. Community-led marketing is a growth strategy that turns customers into advocates, advocates into ambassadors, and shared content into compounding brand equity. This lesson teaches the vocabulary, frameworks, and language you need to build and manage a brand community — and to make the case for it internally.",
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-hero.png',

  vocabulary: [
    {
      word: 'Community flywheel',
      partOfSpeech: 'noun',
      definition: 'When a community grows and gets better because members bring new members.',
      example: 'Our community flywheel keeps bringing in new users.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-member-participation-invite-growth-cycle.png',
    },
    {
      word: 'Ambassador',
      partOfSpeech: 'noun',
      definition: 'A customer who happily promotes a brand.',
      example: 'Each ambassador shares our product with friends.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-customer-recommends-product-to-friends.png',
    },
    {
      word: 'Co-creation',
      partOfSpeech: 'noun',
      definition: 'Making products or content together with customers.',
      example: 'The new flavor came from co-creation with our fans.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-fans-help-create-new-flavour.png',
    },
    {
      word: 'Forum',
      partOfSpeech: 'noun',
      definition: 'A website where people discuss topics.',
      example: 'Users help each other on our forum.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-member-to-member-help-thread.png',
    },
    {
      word: 'UGC strategy',
      partOfSpeech: 'noun',
      definition: 'A plan to get customers to make content about your brand.',
      example: 'Our UGC strategy asks fans to share photos with our hashtag.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-invite-fan-photos-with-hashtag.png',
    },
    {
      word: 'Community health',
      partOfSpeech: 'noun',
      definition: 'How active and positive a community is.',
      example: 'Community health is good: people post every day.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-daily-positive-member-participation.png',
    },
    {
      word: 'Advocacy loop',
      partOfSpeech: 'noun',
      definition: 'When happy customers bring new customers, who then do the same.',
      example: 'Reviews and referrals create a strong advocacy loop.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-reviews-referrals-new-customer-repeat.png',
    },
    {
      word: 'Engagement rate',
      partOfSpeech: 'noun',
      definition: 'The percentage of people who like, comment or share.',
      example: 'Our engagement rate is 8% this month.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-eight-percent-member-engagement.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "The community is the product",
      definition: 'A way to say people join for the community, not just the product.',
      example: 'For our app, the community is the product.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-app-value-member-connections.png',
    },
    {
      phrase: "Who are our top contributors?",
      definition: 'A question about the most active members.',
      example: 'Who are our top contributors? Let\'s thank them.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-identify-contributors-before-recognition.png',
    },
    {
      phrase: "We are harvesting the community, not growing it",
      definition: 'A warning that you take from a community but give nothing back.',
      example: 'Too many sales posts. We are harvesting the community, not growing it.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-overpromotion-without-member-value.png',
    },
    {
      phrase: "Build the advocacy loop",
      definition: 'A way to say create a system where happy customers bring others.',
      example: 'Build the advocacy loop with a simple referral reward.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-plan-simple-referral-reward-cycle.png',
    },
    {
      phrase: "What does the community health look like?",
      definition: 'A question about how active and happy members are.',
      example: 'Before the launch, what does the community health look like?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-prelaunch-community-activity-review-question.png',
    },
    {
      phrase: "Give before you ask",
      definition: 'A rule to help people first, then ask for something.',
      example: 'Give before you ask: share free tips before you sell.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/community-led-marketing-free-help-before-promotion.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, the CEO wants us to build a brand community. We have 80,000 forum members but almost nobody posts. How do we turn that into something real?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "First question: what does the [[community health:a measure of how active, engaged, and positive a community is]] look like? 80,000 members means nothing if the [[engagement rate:the percentage of community members who actively participate in a given period]] is 2%. Size is vanity — health is what matters.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Active contributors are about 1,500 people. The rest are silent. And when we do post, it is mostly product announcements.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "We are harvesting the community, not growing it. Give before you ask — ten acts of value for every one promotion. Resources, recognition, early access, conversations. What do members get from being here that they cannot get anywhere else?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Right now, not much. What should we start with?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Find your top contributors — the 1% who are already giving. Who are our top contributors? Invest in them: [[co-creation:involving community members in creating products or content rather than just consuming them]] opportunities, early product access, [[ambassador:a customer who actively promotes the brand through genuine belief and engagement]] status. That 1% will pull in the next 5%.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "We are also thinking about a [[UGC strategy:a plan for encouraging, curating, and amplifying content created by customers and community members]]. Is that worth investing in?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Yes — but only if the community is healthy enough to generate it. UGC is a signal that people are proud to be associated with your brand. You cannot manufacture it — you have to earn it. If the community health is low, focus on that first.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And how does the [[forum:an online space where community members discuss topics, ask questions, and share knowledge]] fit into the growth strategy?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "A well-managed forum is one of the most valuable assets you can build. It generates organic search traffic, reduces support costs, and creates the peer-to-peer connection that keeps members coming back. The community is the product — not a channel for your other products.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And how does community eventually become a growth engine — something that reduces our dependence on paid acquisition?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Through the [[advocacy loop:a cycle in which satisfied customers share their experience, attract new customers, who then become satisfied and share in turn]] and the [[community flywheel:a self-reinforcing growth loop in which a community gets more valuable as more members join, which attracts more members]]. Build the advocacy loop — make it easy to share, reward the best advocates, measure referral. Over time, the flywheel spins itself.",
    }
  ],

  matchingExercise: [
    { word: 'community flywheel', definition: 'a self-reinforcing growth loop where a community becomes more valuable as more members join, attracting even more members' },
    { word: 'ambassador', definition: 'a customer who actively promotes the brand through genuine belief and long-term engagement' },
    { word: 'co-creation', definition: 'involving community members in creating products or content rather than just consuming them' },
    { word: 'forum', definition: 'an online space where community members discuss topics, ask questions, and share knowledge' },
    { word: 'UGC strategy', definition: 'a plan for encouraging, curating, and amplifying content created by customers and community members' },
    { word: 'community health', definition: 'a measure of how active, engaged, and positive a community is' },
    { word: 'advocacy loop', definition: 'a cycle where satisfied customers share their experience, attract new customers, who then share in turn' },
    { word: 'engagement rate', definition: 'the percentage of community members who actively participate in a given period' }
  ],

  fillBlankExercise: [
    { before: "We are harvesting the community, not growing it — we need to give before we ", after: ", not use the community as a broadcast channel.", answer: "ask" },
    { before: "The community is the ", after: " — resource it like a product, not a campaign.", answer: "product" },
    { before: "80,000 members means nothing if the engagement ", after: " is 2% — size is vanity, health is what matters.", answer: "rate" },
    { before: "Find your top contributors and invest in them — that 1% will start the community ", after: " spinning.", answer: "flywheel" },
    { before: "Our UGC ", after: " turns customers into content creators — authentic, trusted, and far cheaper than branded content.", answer: "strategy" },
    { before: "Build the advocacy ", after: " deliberately — make it easy to share, reward the best advocates, and measure referral as a primary acquisition channel.", answer: "loop" }
  ],

  multipleChoiceExercise: [
    {
      question: "What does Riley say is wrong with the current community of 80,000 members?",
      options: ["The forum technology is outdated and needs replacing", "Only 1,500 are active contributors and content is mostly brand announcements — it is being harvested, not grown", "The community is too small to have a meaningful impact on growth"],
      correctIndex: 1
    },
    {
      question: "What does Riley mean by 'the community is the product'?",
      options: ["The brand should sell community memberships instead of products", "Community is not a marketing channel — it is an asset that makes the product stickier, retention stronger, and advocacy cheaper", "The product team should manage community instead of the marketing team"],
      correctIndex: 1
    },
    {
      question: "What does Riley recommend as the first step to improving community health?",
      options: ["Launch a paid ambassador program with significant financial incentives", "Find and invest in the top 1% of contributors — co-creation, early access, ambassador status — to pull in the next 5%", "Run a social media campaign to drive new member sign-ups"],
      correctIndex: 1
    },
    {
      question: "How does Riley describe the advocacy loop?",
      options: ["A referral program that pays cash rewards for every new customer introduced", "A cycle where satisfied customers share their experience, attract new customers who become satisfied and share in turn — reducing dependence on paid acquisition", "A social media strategy that amplifies positive customer reviews"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Think of a brand community you are part of — or one you have heard of — that feels genuinely valuable. What makes it different from a brand's social media page or newsletter?",
      "Has your company ever tried to build a community around its brand or product? What worked, what did not, and what was the biggest challenge?",
      "When you think about your most loyal customers, what makes them different from average customers? Do they share, refer, and advocate — or do they just buy?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "A community with 100,000 members but a 2% _____ rate is not a community — it is a mailing list.",
        options: ["activity", "participation", "engagement"],
        correctIndex: 2,
        explanation: "'Engagement rate' is the specific community measurement term for the percentage of members who actively participate — posting, replying, contributing — in a given period. 'Activity rate' is not the standard term. 'Participation rate' is close but is less commonly used in community management. 'Engagement rate' is the established metric."
      },
      {
        sentence: "The community _____ means that more members create more content, which attracts more members — and the growth becomes self-sustaining.",
        options: ["loop", "cycle", "flywheel"],
        correctIndex: 2,
        explanation: "'Community flywheel' is the specific term for a self-reinforcing growth mechanism in community-led marketing. 'Flywheel' implies that the system builds momentum and becomes harder to stop as it accelerates — unlike a 'loop' or 'cycle' which are more neutral. The flywheel metaphor is particularly associated with community and product-led growth strategies."
      },
      {
        sentence: "Co-creation turns customers into _____ — they helped build it, so they become its biggest advocates at launch.",
        options: ["ambassadors", "stakeholders", "contributors"],
        correctIndex: 1,
        explanation: "'Stakeholders' is the correct word here — co-creation gives community members a sense of ownership in the product or content they helped create, making them invested in its success. 'Ambassadors' are people who actively promote the brand, which may follow from co-creation but is a different role. 'Contributors' is accurate but descriptive rather than the strategic point being made."
      },
      {
        sentence: "We are posting product announcements every week — we are _____ the community, not growing it.",
        options: ["using", "harvesting", "exploiting"],
        correctIndex: 1,
        explanation: "'Harvesting the community' is the specific phrase used in community-led marketing for the behavior of extracting value from a community (promotions, announcements) without giving enough back. 'Using' is too vague. 'Exploiting' is possible but too strong and negative for a professional context. 'Harvesting' is the established term — it implies taking without planting."
      },
      {
        sentence: "Before asking the community to share our campaign, we must _____ before we ask — contribute significant value first.",
        options: ["give", "earn", "invest"],
        correctIndex: 0,
        explanation: "'Give before you ask' is the fixed community-led marketing principle — the phrase is exactly 'give before you ask'. Changing it to 'earn before you ask' or 'invest before you ask' loses the specific meaning: that brands must actively contribute value (give) to a community before they have the right to request something in return (ask)."
      },
      {
        sentence: "A well-managed _____ generates organic search traffic, reduces support costs, and creates peer-to-peer connection that keeps members coming back.",
        options: ["community page", "forum", "group"],
        correctIndex: 1,
        explanation: "'Forum' is the specific term for a structured online discussion space where community members post questions and answers, start threads, and build searchable knowledge. 'Community page' is informal and does not capture the structured, searchable nature of a forum. 'Group' (as in a Facebook Group) is a platform feature, not the strategic concept. 'Forum' is the established community management term."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "We have 80,000 community members. That is a great asset, right?",
          options: [
            "Yes — 80,000 members is a significant audience that we should be activating with regular content.",
            "The size is interesting, but the real question is community health. What is the engagement rate? If 2% are active contributors, you have 1,600 engaged people and 78,400 dormant accounts. Size is the vanity metric — health is what tells you whether you have an asset or a list.",
            "It depends on how the members were acquired — organic community members are worth more than those from paid campaigns."
          ],
          correctIndex: 1,
          explanation: "Option B correctly challenges the vanity metric (size) with the meaningful one (engagement rate). A community of 80,000 with 2% engagement is far less valuable than one of 10,000 with 30% engagement. Option A accepts the size metric and proposes to 'activate' it with content — which is harvesting behavior, not community building. Option C makes a valid distinction but does not address the engagement question."
        },
        {
          customerLine: "We want to use the community to promote our new product launch.",
          options: [
            "Absolutely — the community is the perfect channel for product launches.",
            "Before we ask, we need to give. What have we contributed to this community in the last 30 days — resources, recognition, early access, support? The ratio should be ten to one. If we have been mostly absent or promotional, a launch ask will fall flat — or worse, generate negative sentiment.",
            "We should be careful not to be too promotional — maybe one post about the launch is appropriate."
          ],
          correctIndex: 1,
          explanation: "Option B applies the 'give before you ask' principle — it asks whether the community has been nurtured enough to support a significant ask. Option A treats the community as a broadcast channel, which is the harvesting mistake. Option C is too cautious in the wrong direction — the issue is not the number of posts, it is whether the community has been given enough value to feel invested in the brand's success."
        },
        {
          customerLine: "How do we turn our community into a growth engine that reduces our paid acquisition cost?",
          options: [
            "Run a referral program that pays existing members cash for every new customer they bring in.",
            "Build the advocacy loop. Make it easy for satisfied customers to share — make sharing a natural part of the experience, not an afterthought. Find your top contributors and invest in them as ambassadors. Measure referral as a primary acquisition channel alongside paid. As the community flywheel builds momentum, the cost of each new member drops because existing members are doing the acquisition work.",
            "Focus on growing the community size first — once you have 500,000 members, the network effects will drive growth naturally."
          ],
          correctIndex: 1,
          explanation: "Option B describes a structured approach — the advocacy loop, ambassador investment, and measurement — that treats community as a growth channel rather than a nice-to-have. Option A reduces community to a referral scheme, which can work but misses the compounding nature of genuine community advocacy. Option C defers the problem to scale — but without the advocacy loop and community health investment, more members will be equally disengaged."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "Our community has 100,000 members — that is our most valuable marketing asset." },
        { speaker: "Riley", text: "Member count is a vanity metric. Community health — engagement rate, active contributors, sentiment — is what tells you whether you have an asset." },
        { speaker: "Marcus", text: "Fair point. And our UGC strategy is to ask members to create content every time we have a new product to promote." },
        { speaker: "Riley", text: "That is harvesting — you are only asking, never giving. UGC works when members are proud to be associated with the brand. Build that first." },
        { speaker: "Marcus", text: "Understood. We also want to find our top community members and turn them into paid influencers to reach new audiences." },
        { speaker: "Riley", text: "Paid influencers and community ambassadors are different roles. Ambassadors are motivated by genuine belief and access — turning top contributors into paid influencers can actually undermine their authenticity and damage the community culture." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "100,000 members — that is our most valuable marketing asset",
          correction: "member count is a vanity metric — community health and engagement rate are what determine the real value of the asset",
          explanation: "A large but disengaged community is not an asset — it is a list. The true value of a community is determined by engagement rate, active contributor rate, sentiment, and the advocacy it generates. 100,000 dormant members contribute far less than 10,000 highly engaged ones."
        },
        {
          lineIndex: 2,
          incorrectText: "ask members to create content every time we have a new product to promote",
          correction: "build a UGC strategy around giving members reasons to share — recognition, pride, access — not just asking them to promote products",
          explanation: "A UGC strategy built around promotional asks is harvesting behavior. Authentic UGC is generated when members are proud to be associated with the brand and feel valued by the community. The 'give before you ask' principle applies here — members who feel invested in the community share naturally; members who are only asked to promote will disengage."
        },
        {
          lineIndex: 4,
          incorrectText: "turn them into paid influencers to reach new audiences",
          correction: "invest in top contributors as ambassadors — with recognition, co-creation access, and early product access — not by converting them into paid influencers",
          explanation: "Community ambassadors and paid influencers are different roles with different motivations. Ambassadors are effective because they are genuinely invested in the community and brand. Converting them into paid relationships can undermine their authenticity, damage trust with other community members, and change their relationship with the brand from advocate to contractor."
        }
      ]
    },
    finishTheLine: {
      instructions: "The community leader starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "We want to build a community but we do not have time to manage it.",
          salespersonStart: "That concern is understandable — but the most successful communities are not managed by a large team, they are grown from a small group of deeply engaged members. Start by finding your top contributors — who are the 1% who are already giving? Invest in them with...",
          suggestedCompletion: "co-creation access, early product releases, direct access to the product team, and recognition in the community. That 1% will build the culture, answer the questions, and create the content that pulls in the next 10%. You facilitate — you do not have to create everything."
        },
        {
          customerLine: "Our community engagement is low. We keep posting but nobody responds.",
          salespersonStart: "We are harvesting the community, not growing it. Every post is a promotion or announcement — we are asking without giving. Give before you ask — before the next product announcement, ask yourself: what have we given this community this month? Resources, recognition, early access? The ratio should be ten to one. Start with...",
          suggestedCompletion: "something genuinely useful to members — a guide, a Q&A with an expert, a behind-the-scenes look at the product roadmap. Show them you are invested in their success, not just your own. When you build that trust, the engagement comes back — and the asks land."
        },
        {
          customerLine: "How do we make the case to the board that community is worth investing in?",
          salespersonStart: "Frame it as a growth channel with compounding returns. The community flywheel means that every member you invest in today generates more members tomorrow — at a declining cost. Measure the advocacy loop: what percentage of new customers came through referral or community? And show the support cost reduction from the forum — our members answer each other's questions, which means...",
          suggestedCompletion: "we spend less on customer service and more on growth. Once the board sees community as a CAC reduction and retention driver — not a social media project — the investment becomes obvious. A paid campaign stops the moment you stop paying. A community keeps growing."
        }
      ]
    }
  }
};
