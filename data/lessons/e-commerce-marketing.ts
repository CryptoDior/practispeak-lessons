import { Lesson } from '@/types/lesson';

export const ecommerceMarketing: Lesson = {
  slug: 'e-commerce-marketing',
  title: 'E-commerce Marketing',
  subtitle: 'How to drive online sales, reduce drop-off, and write copy that converts',
  level: 'B1-B2',
  description: "E-commerce has changed how brands reach and sell to customers. Whether you work for a pure-play online retailer or a brand with a digital shop, knowing how to optimise the customer journey — from the first click to the checkout — is one of the most valuable skills in modern marketing. This lesson teaches you the core vocabulary of e-commerce marketing: how to talk about conversion, abandoned baskets, upselling, and the copy that makes customers click.",
  heroImage: '/images/e-commerce-marketing-hero.png',

  vocabulary: [
    {
      word: 'CONVERSION RATE OPTIMISATION',
      partOfSpeech: 'noun',
      definition: 'The process of making changes to a website or page so that more visitors take the action you want — like buying, signing up, or clicking. CRO is about improving what is already there rather than getting more traffic. Small changes can have a big impact on revenue.',
      example: "Dana presented the Q3 roadmap: Our main priority this quarter is conversion rate optimisation — we are getting 80,000 visits a month but only 1.8% of them buy. If we can get that to 2.5%, revenue goes up by 40% without spending anything more on ads. Marcus asked: Where do we start? Dana replied: The product page and the checkout — those are where we lose most people.",
      imageSlug: '/images/conversion-rate-optimisation.png',
    },
    {
      word: 'CART ABANDONMENT',
      partOfSpeech: 'noun',
      definition: 'When a customer adds products to their online shopping cart but leaves the website before completing the purchase. Cart abandonment is one of the biggest revenue leaks in e-commerce — industry average is around 70%. Recovering even a small percentage through email or retargeting can significantly increase sales.',
      example: "Riley flagged the data: Our cart abandonment rate is 74% — that is above industry average and it is costing us a lot. Dana asked: What is causing it? Riley replied: Three things — unexpected shipping costs at checkout, the site requires account creation before purchase, and the checkout has too many steps. We fix those three and abandonment should drop significantly.",
      imageSlug: '/images/cart-abandonment.png',
    },
    {
      word: 'UPSELL',
      partOfSpeech: 'noun / verb',
      definition: 'To encourage a customer to buy a more expensive version of the product they are already buying. An upsell increases the value of the sale by showing the customer why upgrading is worth it. It works best when the upgrade offers a clear, relevant benefit.',
      example: "Marcus explained the product page strategy: We need to upsell on the standard plan page — show the Pro plan with a clear comparison of what they get for the extra £10 a month. Riley suggested: We could add a banner that says Most teams on Standard upgrade within 60 days. That is social proof and an upsell at the same time. Marcus replied: Perfect — test it.",
      imageSlug: '/images/upsell.png',
    },
    {
      word: 'CROSS-SELL',
      partOfSpeech: 'noun / verb',
      definition: 'To suggest related or complementary products to a customer who is already buying something. A cross-sell increases the average order value by showing relevant additions — not random products. The classic example is recommending a phone case when someone buys a phone.',
      example: "Dana reviewed the checkout page: We are missing a huge cross-sell opportunity at the basket stage. Riley agreed: When someone adds the camera to their cart, we should show compatible accessories — memory card, case, tripod. Not all of them, just the top two or three. Marcus added: The cross-sell should feel like helpful advice, not just more products to buy.",
      imageSlug: '/images/cross-sell.png',
    },
    {
      word: 'CHECKOUT',
      partOfSpeech: 'noun',
      definition: 'The final step in the online shopping process where the customer enters payment and delivery details and completes the purchase. The checkout is the most critical page in e-commerce — a complicated or slow checkout is one of the top reasons customers abandon their cart.',
      example: "Riley recommended: We need to simplify the checkout — right now it is four pages long. Best practice is one page, or two at most. Dana added: We should also add guest checkout — making people create an account before they buy is losing us at least 20% of customers at that stage. Marcus agreed: Checkout friction kills conversion. Every unnecessary step is a reason to leave.",
      imageSlug: '/images/checkout.png',
    },
    {
      word: 'PRODUCT PAGE',
      partOfSpeech: 'noun',
      definition: 'The page on an e-commerce website that shows all the information about a specific product — photos, description, price, reviews, and the buy button. A well-designed product page gives the customer everything they need to make a decision without leaving the page.',
      example: "Dana audited the product pages: The copy on most of our product pages is too short and too technical. Marcus agreed: A product page needs to answer three questions in the first few seconds: What is it? Who is it for? Why should I buy it today? Riley added: And the images are critical — customers cannot touch the product, so the photography has to do the work of a shop floor.",
      imageSlug: '/images/product-page.png',
    },
    {
      word: 'CALL TO ACTION',
      partOfSpeech: 'noun',
      definition: "The button, link, or phrase that tells the customer what to do next — 'Buy Now', 'Add to Cart', 'Get Started', 'Claim Your Discount'. A strong CTA is clear, specific, and creates a sense of value or urgency. The wording, colour, and position of a CTA all affect whether people click it.",
      example: "Riley compared two versions of the landing page: Version A has a CTA that says Submit. Version B says Get My Free Guide. Dana replied: Version B will win — Submit tells you what you are doing for the company. Get My Free Guide tells you what you are getting. Marcus added: CTAs should always be written from the customer's perspective — what do they get, not what does the brand want.",
      imageSlug: '/images/call-to-action.png',
    },
    {
      word: 'AVERAGE ORDER VALUE',
      partOfSpeech: 'noun',
      definition: 'The average amount of money a customer spends in a single transaction. Increasing average order value — through upselling, cross-selling, bundles, or free delivery thresholds — is often more cost-efficient than acquiring new customers.',
      example: "Marcus presented the growth options: We have two levers — get more customers, or get existing customers to spend more per order. Riley replied: Growing average order value is cheaper and faster. If we add a free delivery threshold at £50, customers who were spending £35 will add products to reach the threshold. Dana added: We can also test product bundles — bundle the top three accessories at a slight discount and put it on the product page.",
      imageSlug: '/images/average-order-value.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE ARE LOSING CUSTOMERS AT THE...',
      definition: "A phrase for identifying where in the customer journey people are dropping off. Always name the specific page or stage — checkout, product page, basket. It makes the problem concrete and actionable. Used in CRO reviews, analytics discussions, and team briefings.",
      example: "Dana presented the funnel data: We are losing customers at the checkout — 68% of people who reach the payment page do not complete the purchase. Riley asked: What is the main reason? Dana replied: Unexpected shipping costs. They get to the end and see the delivery fee for the first time. We need to show shipping costs earlier in the journey.",
      imageSlug: '/images/we-are-losing-customers-at-the.png',
      inAction: 'We are losing customers at the checkout — the delivery fee appearing for the first time on the payment page is causing 30% of drop-off.',
      register: "Neutral — Bower & Stone (DTC homeware, Shopify + email): analytics review reads we are losing customers at the product page — average time on page is 18 seconds, which means the copy and images are not answering the key questions fast enough. | Finlo (B2B SaaS, own site + Google Ads): funnel review reads we are losing customers at the pricing page — the plan comparison is confusing and nobody is clicking the CTA. | Runn (running gear, own e-commerce): CRO brief reads we are losing customers at the basket — the guest checkout option is below the fold and 40% of mobile users never see it.",
      visualExamples: [
        { brand: 'Bower & Stone', context: 'DTC homeware — Shopify + email campaigns', imageSlug: '/images/visual-examples/bower-stone-product-page-drop.png', caption: 'We are losing customers at the product page — 18 seconds average time means copy and images are not answering key questions.', aspectRatio: '16/9' },
        { brand: 'Finlo', context: 'B2B SaaS — own site + Google Ads', imageSlug: '/images/visual-examples/finlo-pricing-drop.png', caption: 'We are losing customers at the pricing page — the plan comparison is confusing and nobody is clicking the CTA.', aspectRatio: '16/9' },
      ],
      inContext: "Dana pulled up the funnel report in the review meeting. We are losing customers at the checkout, she said, pointing to the 68% drop-off rate at the payment stage. The data shows that the shipping cost appearing for the first time at that point is the main trigger. Riley suggested moving the shipping calculator to the product page instead.",
    },
    {
      phrase: 'THE CTA NEEDS TO BE MORE...',
      definition: "A phrase used in creative and copy reviews to say that the call to action button or phrase is not doing its job well enough. Always follow with a specific quality — more specific, more urgent, more benefit-led, more visible. Used in landing page reviews, email marketing discussions, and CRO briefings.",
      example: "Marcus reviewed the email campaign: The CTA needs to be more specific — 'Learn More' tells the reader nothing. Riley suggested: How about 'See How It Works in 2 Minutes'? That gives them a reason to click and tells them what to expect. Dana added: And the button needs to be more visible — it is the same colour as the background. It should stand out immediately on mobile.",
      imageSlug: '/images/the-cta-needs-to-be-more.png',
      inAction: "The CTA needs to be more benefit-led — 'Get My Free Report' will outperform 'Download' every time.",
      register: "Neutral — Clarion (online course platform, Facebook ads + landing page): copy review reads the CTA needs to be more urgent — Start Learning Today beats Enrol Now because it removes the implicit question of when. | Marble (luxury candle subscription, Instagram + email): creative review reads the CTA needs to be more sensory — Smell What Everyone Is Talking About outperforms Shop Now for this audience. | Gridline (project management SaaS, Google Ads + own site): A/B test notes read the CTA needs to be more specific — See Your Team Dashboard beats Get Started and it needs to stay that way.",
      visualExamples: [
        { brand: 'Clarion', context: 'Online course platform — Facebook ads + landing page', imageSlug: '/images/visual-examples/clarion-cta-urgency.png', caption: 'The CTA needs to be more urgent — Start Learning Today beats Enrol Now because it removes the question of when.', aspectRatio: '1/1' },
        { brand: 'Gridline', context: 'Project management SaaS — Google Ads + own site', imageSlug: '/images/visual-examples/gridline-cta-specific.png', caption: 'The CTA needs to be more specific — See Your Team Dashboard beats Get Started in every A/B test.', aspectRatio: '16/9' },
      ],
      inContext: "Riley had been staring at the landing page for ten minutes. The CTA needs to be more benefit-led, she finally said. Right now it just says Submit — that is the most passive word in the English language. She rewrote it as Get My Free Audit and the click-through rate went up 34% in the first week.",
    },
    {
      phrase: 'WE SHOULD ADD A CROSS-SELL AT THE...',
      definition: "A phrase for recommending where to place a cross-sell recommendation in the customer journey. Always name the specific location — basket, checkout, product page, confirmation email. Used in e-commerce strategy and UX conversations.",
      example: "Dana recommended: We should add a cross-sell at the basket stage — when someone adds the yoga mat to their cart, show them the matching blocks and strap. Riley agreed: And a cross-sell in the order confirmation email too — once they have bought, they are in the right mindset and conversion rate on post-purchase recommendations is much higher than pre-purchase. Marcus added: Keep it to two or three products. Too many choices and they ignore all of them.",
      imageSlug: '/images/we-should-add-a-cross-sell-at-the.png',
      inAction: 'We should add a cross-sell at the checkout — customers who have already committed to buying are the most receptive to relevant suggestions.',
      register: "Neutral — Vessel (premium water bottle brand, own e-commerce): merchandising brief reads we should add a cross-sell at the product page — when someone views the 32oz bottle, show the cleaning kit and the carry sleeve below the fold. | Lens & Light (photography equipment, own site): checkout strategy reads we should add a cross-sell at the basket — when a camera body is in the cart, show the two most-bought lenses alongside it. | Kora (vitamin subscription, Shopify + email): retention strategy reads we should add a cross-sell at the first order confirmation email — buyers of the sleep supplement convert on the magnesium oil at 22%.",
      visualExamples: [
        { brand: 'Vessel', context: 'Premium water bottle — own e-commerce site', imageSlug: '/images/visual-examples/vessel-crosssell-product.png', caption: 'We should add a cross-sell at the product page — the cleaning kit and carry sleeve shown below the fold increase AOV by 18%.', aspectRatio: '16/9' },
        { brand: 'Kora', context: 'Vitamin subscription — Shopify + email', imageSlug: '/images/visual-examples/kora-crosssell-email.png', caption: 'We should add a cross-sell at the first order confirmation email — sleep supplement buyers convert on magnesium oil at 22%.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus was reviewing the post-purchase flow with the team. We should add a cross-sell at the confirmation email, he said — not immediately after purchase, but 48 hours later when the product has arrived. Dana pulled up the data: buyers of the starter kit who receive a targeted accessory recommendation within 72 hours have an average second-order value that is 40% higher.",
    },
    {
      phrase: 'THE ABANDONMENT RATE ON THIS IS...',
      definition: "A phrase for reporting how many customers are dropping out of a specific page or step. Always give the percentage and name the stage. Used in analytics reviews, CRO briefings, and performance meetings.",
      example: "Riley reported: The abandonment rate on the checkout is 71% — which is just above industry average but still represents a significant revenue opportunity. Dana asked: Have we looked at where exactly in the checkout they leave? Riley replied: Most of the drop-off happens on step three — the payment details page. We think it is because we only accept credit card. Adding PayPal and Apple Pay should help.",
      imageSlug: '/images/the-abandonment-rate-on-this-is.png',
      inAction: 'The abandonment rate on this page is 65% — which means two thirds of people who start the form never finish it.',
      register: "Neutral — Tides (travel subscription box, own site + Google Shopping): analytics brief reads the abandonment rate on the checkout is 78% — significantly above category average, traced to a mandatory phone number field that 60% of users refuse to fill in. | Crest & Co (premium stationery, Shopify + Instagram): CRO review reads the abandonment rate on the product page is 88% — heatmap shows users are not scrolling past the first image, which means the price is the first and last thing they see. | Fora (B2B HR platform, own demo request form): growth team brief reads the abandonment rate on this form is 55% — reducing from 9 fields to 4 fields brought it to 28% in 2 weeks.",
      visualExamples: [
        { brand: 'Tides', context: 'Travel subscription box — own site + Google Shopping', imageSlug: '/images/visual-examples/tides-abandonment-checkout.png', caption: 'The abandonment rate on the checkout is 78% — traced to a mandatory phone number field that 60% of users refuse to fill in.', aspectRatio: '16/9' },
        { brand: 'Fora', context: 'B2B HR platform — own demo request form', imageSlug: '/images/visual-examples/fora-form-abandonment.png', caption: 'The abandonment rate on this form was 55% — reducing from 9 fields to 4 brought it to 28% in two weeks.', aspectRatio: '16/9' },
      ],
      inContext: "Dana put the funnel data on screen. The abandonment rate on the checkout is 71%, she said. Riley leaned forward: That means we are converting less than 1 in 3 people who actually reach the payment page. Marcus replied: Three things to fix — guest checkout, visible shipping costs earlier, and a payment method audit. In that order.",
    },
    {
      phrase: 'THIS WILL INCREASE THE AVERAGE ORDER VALUE BY...',
      definition: "A phrase for presenting the commercial impact of a cross-sell, upsell, bundle, or threshold strategy. Always give a number or estimate — either a percentage or a monetary value. It shows that the recommendation is connected to a measurable business outcome.",
      example: "Marcus presented the bundle proposal: Adding a starter kit option — product plus the two most popular accessories at a 10% discount — should increase the average order value by around £15 per transaction. Dana asked: How did you calculate that? Marcus replied: Based on how many customers currently buy the accessories separately within 30 days of the main purchase. We are just moving that spend earlier in the journey and giving them a reason to do it all at once.",
      imageSlug: '/images/this-will-increase-the-average-order-value-by.png',
      inAction: 'This will increase the average order value by £12 per transaction — which across 3,000 monthly orders is £36,000 in additional monthly revenue.',
      register: "Neutral — Grove (plant subscription, own e-commerce + email): growth brief reads this will increase average order value by 22% — adding a pot and soil bundle to the plant product page captures spend that currently happens in a garden centre 3 weeks later. | Slate (premium notebook brand, Shopify + Amazon): trading review reads this will increase average order value by £8 — a free shipping threshold at £40 will push the 28% of customers spending £25 to add one more item. | Pivot (home fitness equipment, own site + influencers): merchandising note reads this will increase average order value by 30% — the resistance band and mat bundle shown at checkout converts at 34% for customers buying the free weights.",
      visualExamples: [
        { brand: 'Grove', context: 'Plant subscription — own e-commerce + email', imageSlug: '/images/visual-examples/grove-aov-bundle.png', caption: 'This will increase average order value by 22% — a pot and soil bundle captures garden centre spend inside the purchase journey.', aspectRatio: '4/5' },
        { brand: 'Slate', context: 'Premium notebook brand — Shopify + Amazon', imageSlug: '/images/visual-examples/slate-free-shipping-threshold.png', caption: 'This will increase average order value by £8 — a free shipping threshold at £40 pushes 28% of customers to add one more item.', aspectRatio: '1/1' },
      ],
      inContext: "Riley walked the team through the model. This will increase the average order value by around £14 per transaction, she said. Dana wanted to verify: What is that based on? Riley: Current customers who buy the main product spend an average of £14 on accessories within the first month. If we surface those accessories at the product page and basket, we move that spend into the first transaction. The discount is 8%. The additional revenue per order is £14.",
    },
    {
      phrase: 'THE PRODUCT PAGE NEEDS TO ANSWER...',
      definition: "A phrase used in e-commerce copy reviews to describe what information the page must communicate clearly and immediately. The three questions a product page must answer are: what is it, who is it for, and why should I buy it now. Used in briefings with designers, copywriters, and UX teams.",
      example: "Marcus briefed the copy team: The product page needs to answer three questions before the customer has to scroll — what is this, who is it for, and why should I buy it today rather than think about it more. Dana added: And on mobile, you have even less space — the hero image and the first sentence of copy have to do all of that. Riley: A/B test the hero copy first. That is the highest-leverage change we can make.",
      imageSlug: '/images/the-product-page-needs-to-answer.png',
      inAction: "The product page needs to answer 'why now' before the customer reaches the CTA — urgency is the last thing many pages address, but it is often the deciding factor.",
      register: "Neutral — Haven (DTC sleep brand, Shopify + Meta ads): creative brief reads the product page needs to answer one question before anything else — will this help me sleep? Every word and image must serve that question. | Arbor (sustainable furniture, own site): copy brief reads the product page needs to answer the trust question — where is this made, by whom, and how long will it last? Customers researching sustainable furniture need proof, not promises. | Dose (health supplement brand, Amazon + own DTC): listing optimisation brief reads the product page needs to answer the comparison question — why this and not the one next to it for half the price? Lead with the ingredient difference.",
      visualExamples: [
        { brand: 'Haven', context: 'DTC sleep brand — Shopify + Meta ads', imageSlug: '/images/visual-examples/haven-product-page-hero.png', caption: "The product page needs to answer one question first — will this help me sleep? Every element is written to answer that before anything else.", aspectRatio: '4/5' },
        { brand: 'Arbor', context: 'Sustainable furniture — own e-commerce site', imageSlug: '/images/visual-examples/arbor-product-trust.png', caption: 'The product page needs to answer the trust question — where is it made, by whom, and how long will it last?', aspectRatio: '16/9' },
      ],
      inContext: "Dana had reviewed ten competitor product pages before the meeting. The product page needs to answer the comparison question before the customer has to search for it themselves, she told the team. Marcus asked what she meant. If someone is already on our page, they have probably seen three others, she said. The copy needs to address the obvious comparison — why ours over the cheaper alternative — before the customer opens a new tab to check.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I have the e-commerce analytics report for Q3. The headline number is good — revenue is up 18%. But when I dig into the funnel, there are some significant inefficiencies that are costing us money.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Let us go through it. Where are the biggest losses?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Three places. The [[product page:the page showing all information about a specific product — photos, description, price, and the buy button]], the basket, and the [[checkout:the final step where the customer completes the purchase]]. Each one has a specific problem.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Starting with the product page — [[conversion rate optimisation:the process of improving a website so more visitors take the desired action]] on that page is our biggest opportunity. The copy is too short and the images do not show the product in use. Average time on page is 22 seconds.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The product page needs to answer the key questions fast. What is it, who is it for, why buy it today. In 22 seconds on mobile, you have maybe 40 words and three images to do that.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Also the [[call to action:the button or phrase that tells the customer what to do next]] on the product page just says Add to Basket. It does not create any urgency or reinforce the value. We should test something more specific.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Agreed. The CTA needs to be more benefit-led. Moving to the basket — the [[cart abandonment:when a customer adds products to their cart but leaves before completing the purchase]] rate is 74%. The main reason is the shipping cost appearing for the first time at that stage.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We need to show shipping costs on the product page. No surprises at the basket. Surprises kill conversion.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And we should add a [[cross-sell:suggesting related or complementary products to someone who is already buying]] at the basket stage. When customers add the main product, show the two or three most-bought accessories. We should add a cross-sell at the basket — data shows it increases [[average order value:the average amount a customer spends in a single transaction]] by around 20%.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And on the product page, we can [[upsell:encourage a customer to buy a more expensive version of what they are already considering]] — show the premium version with a clear value comparison. This will increase the average order value by around £18 per transaction if the test performs as expected.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Now the checkout. The abandonment rate on this is — what exactly?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "68% — and almost all of it is on the payment page. Two fixes: add guest checkout and add PayPal and Apple Pay. Right now we only accept credit card and we require account creation. Both of those are losing us customers who are ready to buy.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "If we fix all three areas — product page, basket, checkout — the model suggests we could lift overall conversion from 1.8% to somewhere between 2.8% and 3.1%. On current traffic that is a 55% revenue increase without spending anything more on acquisition.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is the case for conversion rate optimisation in one number. Let us prioritise the checkout fixes first — they are quickest to implement and the drop-off there is the most urgent. Then product page copy and imagery. Then the cross-sell and upsell mechanics.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Agreed. I will write the CRO brief and have it ready by Friday. One page per issue — problem, evidence, recommended fix, and the metric we are testing against.",
    },
  ],

  matchingExercise: [
    { word: 'conversion rate optimisation', definition: 'improving a website so more visitors take the desired action — without increasing traffic' },
    { word: 'cart abandonment', definition: 'when a customer adds products to their cart but leaves before completing the purchase' },
    { word: 'upsell', definition: 'encouraging a customer to buy a more expensive version of what they are already considering' },
    { word: 'cross-sell', definition: 'suggesting related or complementary products to someone who is already buying' },
    { word: 'checkout', definition: 'the final step in online shopping where the customer completes the purchase' },
    { word: 'product page', definition: 'the page showing all product information — photos, description, price, and the buy button' },
    { word: 'call to action', definition: "the button or phrase that tells the customer what to do next — 'Buy Now', 'Get Started'" },
    { word: 'average order value', definition: 'the average amount of money a customer spends in a single transaction' },
  ],

  fillBlankExercise: [
    { before: 'We are losing customers at the', after: '— unexpected shipping costs are causing 30% of drop-off at the payment stage.', answer: 'checkout' },
    { before: 'The', after: 'rate on the basket is 74% — well above the industry average of 70%.', answer: 'abandonment' },
    { before: 'We should add a', after: 'at the basket stage — show the two most-bought accessories alongside the main product.', answer: 'cross-sell' },
    { before: 'This free delivery threshold will increase the average', answer: 'order', after: 'value by around £12 per transaction.' },
    { before: 'The CTA needs to be more specific — it currently just says', after: 'and that tells the customer nothing about what they will get.', answer: 'Submit' },
    { before: 'The product page needs to', after: 'three questions fast: what is it, who is it for, and why buy it today.', answer: 'answer' },
  ],

  multipleChoiceExercise: [
    {
      question: 'According to Dana, what is causing most of the cart abandonment?',
      options: ['The product page copy is too short and not convincing enough', 'The shipping cost appearing for the first time at the basket stage', 'The checkout requires too many payment details'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say would happen if all three CRO improvements are made?',
      options: ['Traffic would increase by 55% without additional ad spend', 'Conversion could lift from 1.8% to 2.8-3.1%, meaning a 55% revenue increase without more acquisition spend', 'Average order value would double across all product categories'],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between an upsell and a cross-sell in the dialogue?',
      options: ['They are the same thing — both involve recommending products to a customer', 'An upsell encourages a more expensive version of the same product; a cross-sell suggests related or complementary products', 'An upsell happens at checkout; a cross-sell happens on the product page'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say should be prioritised first?',
      options: ['The product page copy and imagery, because it is where the most customers arrive', 'The cross-sell and upsell mechanics, because they directly increase revenue per order', 'The checkout fixes, because they are quickest to implement and the drop-off there is most urgent'],
      correctIndex: 2,
    },
  ],

  warmUp: {
    questions: [
      'Think about the last time you bought something online. Was the process smooth or frustrating? What, if anything, almost stopped you from completing the purchase?',
      'Have you ever added something to an online basket and then not bought it? What made you leave? And did the company follow up with an email or an ad to bring you back?',
      'If you were writing the copy for a product page right now — for a product you know well — what are the three most important things you would put at the top of the page?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'We are losing customers _____ the checkout — shipping costs appearing for the first time is the main cause.',
        options: ['at', 'on', 'in'],
        correctIndex: 0,
        explanation: "'At' is the correct preposition for specific stages or points in a process — 'at the checkout', 'at the payment stage', 'at the basket'. Think of these stages as locations or moments you arrive at. 'On' is used for surfaces or platforms ('on the page', 'on the website'). 'In' refers to larger spaces or containers ('in the funnel', 'in the journey'). Key pattern: 'losing customers at [specific stage]' — 'at the checkout', 'at the product page', 'at the sign-up step'.",
      },
      {
        sentence: 'Adding a free delivery threshold at £50 will _____ the average order value.',
        options: ['increase', 'grow', 'raise'],
        correctIndex: 0,
        explanation: "'Increase' is the standard verb collocating with 'average order value' in e-commerce and business English. 'Increase the AOV', 'increase conversion rate', 'increase revenue' — these are the fixed collocations. 'Grow' is also natural but less precise in this context — 'grow' is more commonly used with revenue or a business as a whole ('grow the business', 'grow revenue'). 'Raise' usually applies to prices or standards ('raise prices', 'raise standards') — not to metrics like AOV.",
      },
      {
        sentence: 'The cart abandonment rate _____ 74% — which means nearly three quarters of customers who add to basket do not buy.',
        options: ['is', 'has', 'stands'],
        correctIndex: 0,
        explanation: "'Is' is the simplest and most natural verb for stating a current metric. 'The rate is 74%' — simple present, stating a current fact. 'Stands at 74%' is also correct and commonly used in formal reporting ('the rate stands at 74%') — 'stands at' implies a current position and is slightly more formal. 'Has 74%' is not correct here — 'has' would require a noun complement ('the campaign has a 74% abandonment rate'). When reporting a metric, use 'is' or 'stands at'.",
      },
      {
        sentence: "The call to action should be _____ from the customer's perspective — what do they get, not what does the brand want.",
        options: ['written', 'wrote', 'writing'],
        correctIndex: 0,
        explanation: "'Written' — past participle used as an adjective here. 'Should be written' is the passive structure: modal (should) + be + past participle. It describes how the CTA ought to be constructed. 'Wrote' is the simple past (active voice) — it would need a subject: 'we wrote the CTA'. 'Writing' in this position would form 'should be writing' — the present continuous passive, which would mean it is being written right now, not how it should be constructed. Passive structures with 'should be + past participle' describe requirements or standards.",
      },
      {
        sentence: 'A cross-sell works best when the suggested products are _____ to what the customer is already buying.',
        options: ['relevant', 'related', 'similar'],
        correctIndex: 0,
        explanation: "'Relevant' is the strongest and most precise word here — it means directly applicable and useful to the specific customer and their purchase. 'Relevant to' implies the suggestion makes sense in the context of what they are buying. 'Related' is also correct and commonly used ('related products') but is slightly more generic — related things share a category. 'Similar' means alike but is actually the opposite of what a cross-sell should be — a cross-sell suggests complementary products, not the same type of product. 'Relevant' captures the idea of usefulness and fit most precisely.",
      },
      {
        sentence: 'Our biggest opportunity is _____ the checkout process — it is currently four steps and should be one or two.',
        options: ['simplifying', 'to simplify', 'simplify'],
        correctIndex: 0,
        explanation: "After the verb 'is' used as a linking verb, you can use either the gerund ('-ing') or the infinitive ('to + verb') — both are grammatically correct here. 'Our biggest opportunity is simplifying' uses the gerund, making the activity itself the subject complement. 'Our biggest opportunity is to simplify' uses the infinitive. Both are standard in business English. 'Simplify' alone (the base form) is not correct here — without 'to', it cannot function as the complement of 'is' in this sentence structure. Either 'simplifying' or 'to simplify' is acceptable; the gerund form is slightly more common in performance and strategy language.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "Our cart abandonment rate is 70% — that is terrible. What do we do?",
          options: [
            "70% is actually very close to the industry average of 69-72%. The question is not how to eliminate abandonment — some of it is unavoidable — but how to reduce it below benchmark and how to recover the customers who do leave. Let us look at three specific causes: unexpected costs, checkout friction, and payment method limitations.",
            "That is a serious problem. We need to completely redesign the checkout experience from scratch before anything else.",
            "The first thing to do is set up a cart abandonment email sequence — that will recover some of the lost customers quickly and it is easy to implement.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it reframes the problem accurately (70% is close to average), shows expertise, and moves to a structured diagnostic approach. It is professional and reassuring without being dismissive. Option B panics unnecessarily — a full redesign is expensive and slow, and the problem may be fixable with small changes. Option C is not wrong, but it jumps to a tactic (recovery emails) before diagnosing what is causing the abandonment. Fix the cause first; use recovery emails as a safety net.",
        },
        {
          customerLine: "We want to add product recommendations to the site. Where should we put them?",
          options: [
            "Everywhere — the more recommendations the customer sees, the more likely they are to add something.",
            "Product recommendations work best in three places: on the product page (to cross-sell related items), at the basket (to capture complementary purchases before checkout), and in the post-purchase email (when the customer is satisfied and open to buying again). Each placement serves a different stage of the journey.",
            "The basket is the best place — that is where the customer's buying intent is highest and they are most likely to add something.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it gives a complete, structured answer that covers the three highest-performing placements and explains the reasoning behind each. It shows strategic thinking, not just tactics. Option A is wrong — too many recommendations everywhere creates visual noise and recommendation fatigue, and customers tend to ignore all of them. Option C is partially correct (the basket is a high-converting placement) but incomplete — post-purchase email is often the highest-converting placement of all and is frequently overlooked.",
        },
        {
          customerLine: "The client says their CTA is 'fine' — it says 'Click Here'. How do you respond?",
          options: [
            "'Click Here' is one of the worst-performing CTAs in A/B testing research — it describes the action (clicking) without communicating any value. The customer needs to know what they get when they click. Even a small change — 'Get My Free Guide' or 'Start Your Trial' — typically improves click-through rates by 30-50% in testing. I would recommend we run a quick A/B test to show the data.",
            "If the client is happy with it, we should leave it. Our job is to implement their vision, not override their decisions.",
            "We should change it immediately to 'Buy Now' — that is the highest-converting CTA in most categories.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it explains the problem with evidence ('one of the worst-performing in A/B testing'), gives specific alternatives, and proposes a test to let the data make the case rather than just asserting the expert view. It respects the client while being honest about the issue. Option B is too passive — a good marketing partner gives honest professional advice even when the client disagrees. Option C is overconfident — 'Buy Now' is not universally the best CTA. The right CTA depends on the context, the product, and the audience.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the e-commerce strategy discussion. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Riley', text: "The cart abandonment rate on our checkout is 74% — well above the industry average." },
        { speaker: 'Marcus', text: "What is the mainly cause? Is it the shipping costs appearing late in the journey?" },
        { speaker: 'Dana', text: "That is part of it. We are also require account creation before checkout, which is losing us customers." },
        { speaker: 'Riley', text: "And the CTA on the product page just says 'Submit' — it is too generic and does not tell the customer what they get." },
        { speaker: 'Marcus', text: "The CTA needs to be more specific. Something benefit-led, like 'Get My Free Guide' or 'Start Your Trial'." },
        { speaker: 'Dana', text: "We should also adding a cross-sell at the basket — showing relevant accessories before checkout increases average order value." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'What is the mainly cause?',
          correction: 'What is the main cause?',
          explanation: "'Main' is an adjective — it modifies the noun 'cause'. 'The main cause' means the primary or most important cause. 'Mainly' is an adverb — it modifies verbs and adjectives, not nouns. 'Mainly' cannot come before a noun in this position. Correct uses: 'the main reason', 'the main problem', 'the main issue' (adjective before noun) vs 'it mainly affects conversion', 'we mainly focus on paid search' (adverb modifying verb).",
        },
        {
          lineIndex: 2,
          incorrectText: 'We are also require',
          correction: 'We also require',
          explanation: "'Are also require' combines two verb forms incorrectly — 'are' (present continuous auxiliary) and 'require' (base form). You cannot use 'are' as an auxiliary with the base form in this way. Two correct options: 'We also require' (simple present — describing a current policy or condition) or 'We are also requiring' (present continuous — describing an ongoing action). Since account creation is a standing requirement (a condition, not a temporary action), simple present 'We also require' is the most natural choice.",
        },
        {
          lineIndex: 5,
          incorrectText: 'We should also adding',
          correction: 'We should also add',
          explanation: "After modal verbs (should, would, could, must, will, shall, may, might), always use the base form of the verb — no '-ing', no 'to'. 'We should add', not 'we should adding'. This is one of the most fundamental rules of English grammar involving modals: modal + base verb. 'Adding' (the gerund or present participle) would need a different structure: 'We suggest adding', 'We recommend adding', or 'Adding a cross-sell would help'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "The CEO asks: 'Why are we spending money on CRO instead of just getting more traffic?'",
          salespersonStart: "Getting more traffic is more expensive and slower than converting the traffic we already have —",
          suggestedCompletion: "we currently get 80,000 visits a month and convert 1.8% of them. If we improve conversion to 3%, revenue goes up 67% without spending anything more on ads. Versus buying 67% more traffic, which would cost significantly more and take longer. CRO works on the existing asset — the website and the visitors who are already arriving. It is typically the highest-ROI marketing investment a brand at our stage can make.",
        },
        {
          customerLine: "Write a brief for the copywriter — the product page needs new hero copy.",
          salespersonStart: "The hero copy on the product page needs to answer three questions in the first 40 words —",
          suggestedCompletion: "what is this product, who is it for, and why should I buy it today rather than come back later. The current copy leads with the product name and a technical specification — which answers none of those questions. The new copy should lead with the outcome for the customer: what does their life look like after they buy this? The tone should be direct and confident. No jargon. No passive sentences. The CTA directly below the hero copy should be benefit-led — 'Get Yours in 48 Hours' rather than 'Add to Basket'. A/B test both the hero copy and the CTA in the first two weeks.",
        },
        {
          customerLine: "What is the most important thing to fix first when you have a high cart abandonment rate?",
          salespersonStart: "Before fixing anything, you need to know why customers are abandoning —",
          suggestedCompletion: "the causes are different for different businesses. The most common reasons are: unexpected shipping costs appearing late in the journey, being forced to create an account before buying, a checkout that is too long or complex, limited payment options, and slow page load speed on mobile. Run a simple exit survey or analyse the heatmap data to identify where exactly in the checkout people are leaving and what they do before they go. Then fix the highest-impact cause first. A cart abandonment email sequence should run in parallel — it will recover 10-15% of abandoners while you work on the structural fixes.",
        },
      ],
    },
  },
};
