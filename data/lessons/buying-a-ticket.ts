import { Lesson } from '@/types/lesson';

export const buyingATicket: Lesson = {
  slug: 'buying-a-ticket',
  title: 'Buying a Ticket',
  subtitle: 'How to buy a match ticket in English',
  level: 'A1-A2',
  description: 'Learn the key words and phrases for buying a football match ticket — price, stand, home end, away end, gate, seat number — and how to ask simple transactional questions at the ticket office.',
  heroImage: '/images/buying-a-ticket-hero.png',

  vocabulary: [
    {
      word: 'TICKET',
      partOfSpeech: 'noun',
      definition: 'The card or paper that lets you into the stadium.',
      example: 'I have a ticket for the match on Saturday.',
      imageSlug: '/images/ticket.png',
    },
    {
      word: 'PRICE',
      partOfSpeech: 'noun',
      definition: 'How much money you pay for the ticket.',
      example: 'How much is the price of a ticket in the north stand?',
      imageSlug: '/images/buying-a-ticket-price.png',
    },
    {
      word: 'HOME END',
      partOfSpeech: 'noun',
      definition: 'The part of the stadium where the home team\'s fans sit.',
      example: 'I want a ticket for the home end, please.',
      imageSlug: '/images/home-end.png',
    },
    {
      word: 'AWAY END',
      partOfSpeech: 'noun',
      definition: 'The part of the stadium where the visiting team\'s fans sit.',
      example: 'The away end was full of noisy supporters.',
      imageSlug: '/images/buying-a-ticket-away-end.png',
    },
    {
      word: 'GATE',
      partOfSpeech: 'noun',
      definition: 'The entrance to the stadium that you go through with your ticket.',
      example: 'Go to Gate B to enter the stadium.',
      imageSlug: '/images/gate.png',
    },
    {
      word: 'ROW',
      partOfSpeech: 'noun',
      definition: 'A line of seats in the stand.',
      example: 'My seat is in row five, very close to the pitch.',
      imageSlug: '/images/row.png',
    },
    {
      word: 'SEAT NUMBER',
      partOfSpeech: 'noun',
      definition: 'The number printed on the ticket that tells you which seat is yours.',
      example: 'My seat number is thirty-seven in the east stand.',
      imageSlug: '/images/seat-number.png',
    },
    {
      word: 'SOLD OUT',
      partOfSpeech: 'adjective',
      definition: 'When all tickets for a match are gone and you cannot buy more.',
      example: 'Sorry, the home end is sold out. Only away end tickets left.',
      imageSlug: '/images/sold-out.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HOW MUCH IS...?',
      definition: 'Used to ask the price of something.',
      example: 'How much is a ticket for the north stand?',
      imageSlug: '/images/how-much-is.png',
    },
    {
      phrase: 'WHICH STAND?',
      definition: 'A question to find out which part of the stadium a ticket is for.',
      example: 'Which stand is this ticket for?',
      imageSlug: '/images/which-stand.png',
    },
    {
      phrase: 'I\'D LIKE...',
      definition: 'A polite way to say what you want to buy.',
      example: 'I\'d like two tickets for the home end, please.',
      imageSlug: '/images/id-like.png',
    },
    {
      phrase: 'DO YOU HAVE...?',
      definition: 'Used to ask if something is available.',
      example: 'Do you have any seats near the front?',
      imageSlug: '/images/do-you-have.png',
    },
    {
      phrase: 'GO THROUGH GATE...',
      definition: 'To enter the stadium at a specific gate.',
      example: 'Go through Gate C on the north side of the stadium.',
      imageSlug: '/images/go-through-gate.png',
    },
    {
      phrase: 'ON THE DAY',
      definition: 'Buying or collecting something on the same day as the match.',
      example: 'You can buy a ticket on the day if the match is not sold out.',
      imageSlug: '/images/on-the-day.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Hello. I\'d like to buy a [[ticket:the card that lets you into the stadium]] for Saturday\'s match, please.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Of course! Which [[stand:a section of the stadium where fans sit]] would you like? Home end or away end?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The [[home end:the part of the stadium for the home team\'s fans]], please. How much is the [[price:how much money you pay]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'A ticket for the home end is thirty pounds. The [[away end:the part of the stadium for the visiting fans]] is twenty-five pounds.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I\'ll take one home end ticket, please. Do you have any seats in [[row:a line of seats in the stand]] five or six?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Let me check. Yes — I have one seat in row six. Your [[seat number:the number on your ticket that tells you which seat is yours]] is forty-two.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Perfect. Which [[gate:the entrance to the stadium]] do I use to get in?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Go through Gate B on the east side. It\'s clearly marked on your ticket.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Thank you. What if my friend wants a ticket? Are they [[sold out:when all tickets are gone and you cannot buy more]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The home end is nearly sold out — only five tickets left. The away end still has plenty.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I\'ll take two home end tickets then — one for me and one for my friend.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Great choice! That\'s sixty pounds in total. Enjoy the match!',
    },
  ],

  matchingExercise: [
    { word: 'TICKET', definition: 'The card that lets you into the stadium' },
    { word: 'PRICE', definition: 'How much money you pay for the ticket' },
    { word: 'HOME END', definition: 'The part of the stadium for the home team\'s fans' },
    { word: 'AWAY END', definition: 'The part of the stadium for the visiting team\'s fans' },
    { word: 'GATE', definition: 'The entrance to the stadium you go through with your ticket' },
    { word: 'ROW', definition: 'A line of seats in the stand' },
    { word: 'SEAT NUMBER', definition: 'The number on your ticket that tells you which seat is yours' },
    { word: 'SOLD OUT', definition: 'When all tickets are gone and you cannot buy more' },
  ],

  fillBlankExercise: [
    { before: 'I\'d like to buy a', after: 'for Saturday\'s match, please.', answer: 'ticket' },
    { before: 'How much is the', after: 'for a home end seat?', answer: 'price' },
    { before: 'I want to sit in the', after: '— I support the home team.', answer: 'home end' },
    { before: 'The', after: 'is full of away supporters singing their team\'s songs.', answer: 'away end' },
    { before: 'Go through', after: 'B on the east side of the stadium.', answer: 'Gate' },
    { before: 'My seat is in', after: 'six — very close to the pitch.', answer: 'row' },
    { before: 'Check your', after: 'on the ticket — mine is number forty-two.', answer: 'seat number' },
    { before: 'Sorry, the north stand is', after: '— no tickets left.', answer: 'sold out' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Sofia want to buy?',
      options: ['A programme', 'A ticket for Saturday\'s match', 'A shirt'],
      correctIndex: 1,
    },
    {
      question: 'How much is a home end ticket?',
      options: ['Twenty-five pounds', 'Thirty pounds', 'Forty pounds'],
      correctIndex: 1,
    },
    {
      question: 'What row does Sofia ask about?',
      options: ['Row three or four', 'Row five or six', 'Row ten or eleven'],
      correctIndex: 1,
    },
    {
      question: 'What is Sofia\'s seat number?',
      options: ['Twenty-two', 'Thirty-two', 'Forty-two'],
      correctIndex: 2,
    },
    {
      question: 'Which gate does Sofia need to use?',
      options: ['Gate A', 'Gate B', 'Gate C'],
      correctIndex: 1,
    },
    {
      question: 'How many home end tickets are left?',
      options: ['None — it is sold out', 'Five', 'Twenty'],
      correctIndex: 1,
    },
    {
      question: 'What is the total Sofia pays for two tickets?',
      options: ['Thirty pounds', 'Fifty pounds', 'Sixty pounds'],
      correctIndex: 2,
    },
    {
      question: 'What does "sold out" mean?',
      options: ['Tickets are on sale', 'All tickets are gone', 'The match is cancelled'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence at the ticket office.',
    items: [
      {
        sentence: '_____ two tickets for the home end, please.',
        options: ['I\'d like', 'I want not', 'Please give'],
        correctIndex: 0,
        explanation: '"I\'d like" is correct. This is the polite way to say what you want when buying something. "I\'d like" = "I would like." It is more polite than just saying "I want."',
      },
      {
        sentence: '_____ is a ticket for the north stand?',
        options: ['Which much', 'How much', 'What price is'],
        correctIndex: 1,
        explanation: '"How much" is correct. "How much is...?" is the standard question for asking about price. You can also say "What is the price of...?" but "How much is...?" is shorter and more natural.',
      },
      {
        sentence: 'Do you have any seats in _____ three?',
        options: ['gate', 'row', 'end'],
        correctIndex: 1,
        explanation: '"Row" is correct. Seats in a stand are organised in rows — horizontal lines of seats. "Row three" means the third line of seats from the front.',
      },
      {
        sentence: 'I\'m sorry, the home end is _____. No tickets left.',
        options: ['full time', 'sold out', 'away end'],
        correctIndex: 1,
        explanation: '"Sold out" is correct. When something is sold out, all the tickets or products have been sold and there are none left. This is very common at popular matches.',
      },
      {
        sentence: 'Go _____ Gate C to enter the stadium.',
        options: ['through', 'inside', 'under'],
        correctIndex: 0,
        explanation: '"Through" is correct. We say "go through the gate" because you pass through the gate as you enter. The gate is like a door — you pass through it.',
      },
      {
        sentence: 'Your _____ is printed clearly on your ticket.',
        options: ['seat number', 'gate price', 'away end'],
        correctIndex: 0,
        explanation: '"Seat number" is correct. Your seat number tells you exactly which seat is yours in the stand. It is always printed on your ticket along with the stand, row, and gate information.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. You are at the ticket office. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Customer: How much is a ticket for the home end?',
          options: [
            'Ticket office: Go through Gate B, please.',
            'Ticket office: A home end ticket is thirty pounds.',
            'Ticket office: Your seat number is forty-two.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The customer asked about the price, so the right answer is to tell them how much the ticket costs. A and C answer different questions — gate and seat number.',
        },
        {
          customerLine: 'Customer: Which gate do I use?',
          options: [
            'Ticket office: The home end is thirty pounds.',
            'Ticket office: Go through Gate B on the east side.',
            'Ticket office: The match is on Saturday at three o\'clock.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The customer asked about which gate to use to enter the stadium. A talks about price and C talks about the match time — neither answers the question.',
        },
        {
          customerLine: 'Customer: Do you have any tickets left for the north stand?',
          options: [
            'Ticket office: Sorry, the north stand is sold out. Only south stand tickets left.',
            'Ticket office: Your seat number is in row six.',
            'Ticket office: The away end is very loud tonight.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. The customer asked if tickets are available. The right response is to say whether tickets exist or are sold out, and to offer an alternative if they are gone.',
        },
        {
          customerLine: 'Customer: I\'d like one ticket for the away end, please.',
          options: [
            'Ticket office: I don\'t understand — please speak louder.',
            'Ticket office: Of course! That\'s twenty-five pounds. Which row would you like?',
            'Ticket office: The home end is much better.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The customer made a polite request to buy a ticket. The right response is to confirm the request, give the price, and ask a follow-up question about their preference.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong ticket office words in this dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Hello. I\'d like to buy a gate for Saturday\'s match, please.' },
        { speaker: 'Ronaldo', text: 'Of course! Home end or away end?' },
        { speaker: 'Sofia', text: 'The home end, please. How much is the row?' },
        { speaker: 'Ronaldo', text: 'A home end ticket is thirty pounds.' },
        { speaker: 'Sofia', text: 'Great. And where do I enter the stadium?' },
        { speaker: 'Ronaldo', text: 'Go through Ticket D on the east side. Your seat price is forty-two.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'buy a gate',
          correction: 'buy a ticket',
          explanation: 'You buy a TICKET, not a gate. A gate is the entrance to the stadium. A ticket is the card or paper that lets you in.',
        },
        {
          lineIndex: 2,
          incorrectText: 'How much is the row?',
          correction: 'How much is the price?',
          explanation: 'You ask about the PRICE, not the row. "How much is the price?" or simply "How much is it?" is the correct way to ask what something costs. A row is a line of seats.',
        },
        {
          lineIndex: 5,
          incorrectText: 'Go through Ticket D',
          correction: 'Go through Gate D',
          explanation: 'You go through a GATE, not a ticket. The gate is the entrance to the stadium. The ticket is the document you show at the gate to get in.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using ticket office language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: What is the difference between the home end and the away end?',
          salespersonStart: 'Ronaldo: The home end is for fans who support the home team.',
          suggestedCompletion: 'The away end is for fans who support the visiting team. They are kept in separate areas of the stadium so that both sets of fans can enjoy the match safely.',
        },
        {
          customerLine: 'Sofia: What does "sold out" mean?',
          salespersonStart: 'Ronaldo: It means there are no more tickets available.',
          suggestedCompletion: 'All the tickets have been sold and you cannot buy any more. For big matches, tickets sell out very quickly — sometimes in just a few minutes! It is best to buy early.',
        },
        {
          customerLine: 'Sofia: I have my ticket. What do I do now?',
          salespersonStart: 'Ronaldo: Look at your ticket for the gate number.',
          suggestedCompletion: 'Go to that gate on the correct side of the stadium. Show your ticket at the entrance and they will let you in. Then find your stand, your row, and your seat number.',
        },
        {
          customerLine: 'Sofia: Can I buy a ticket on the day of the match?',
          salespersonStart: 'Ronaldo: Yes, if the match is not sold out.',
          suggestedCompletion: 'For small matches, you can often buy a ticket at the gate on the day. But for big matches or cup games, all tickets are sold out weeks before. It is always safer to buy your ticket in advance.',
        },
      ],
    },
  },
};
