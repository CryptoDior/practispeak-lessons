import { Lesson } from '@/types/lesson';

export const c1AgentsAndIntermediaries: Lesson = {
  slug: 'c1-agents-and-intermediaries',
  title: 'Agents and Intermediaries',
  subtitle: 'Unit 4 — Football Business & Politics',
  level: 'C1-C2',
  description: 'Football agents shape careers, broker transfers, and influence the game in ways the public rarely sees. Learn the vocabulary of player representation and the debate around how agents should be regulated.',
  heroImage: '/images/agents-intermediaries.png',

  warmUp: {
    questions: [
      'What do you think a football agent actually does? What is their job?',
      'Should there be limits on how much agents can earn from player transfers? Why or why not?',
      'Have you heard of any famous cases where an agent had a controversial influence on a player\'s career?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Passive constructions with "by" — describing influence and representation',
    description: 'In discussions of football agents, passive constructions are common because the player is often the object of others\' actions. "The player is represented by one of Europe\'s most powerful agencies." "The deal was brokered by the player\'s agent." "The fee was negotiated over three weeks." "The contract was structured to include performance-related bonuses." These constructions keep the focus on the deal, the player, or the outcome — not the agent\'s personal actions. When the agent is the focus, active voice returns: "The agent demanded a 15% commission" or "The agent blocked the move."',
    positiveExamples: [
      { sentence: 'The player is represented by one of the largest agencies in world football.', note: 'passive — focuses on the player\'s situation, not the agent\'s activity' },
      { sentence: 'The transfer was brokered over three months by an intermediary working for both clubs.', note: 'passive + "by" — the intermediary is the agent but the deal is the focus' },
      { sentence: 'The contract was structured to protect the player\'s image rights.', note: 'passive — the structure of the deal is the subject' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'AGENT',
      partOfSpeech: 'noun',
      definition: 'A licensed professional who represents a player and negotiates contracts and transfers on their behalf.',
      example: '"The agent negotiated a new five-year deal that included a release clause and full image rights."',
      imageSlug: '/images/agent.png',
    },
    {
      word: 'INTERMEDIARY',
      partOfSpeech: 'noun',
      definition: 'A person who acts as a go-between in transfer negotiations — not always the player\'s registered agent, sometimes someone who facilitates a deal.',
      example: '"An intermediary introduced the two clubs and received a fee for arranging the initial contact — though they had no formal registration."',
      imageSlug: '/images/intermediary.png',
    },
    {
      word: 'COMMISSION',
      partOfSpeech: 'noun',
      definition: 'A percentage fee paid to an agent for completing a deal — typically a percentage of the transfer fee or the player\'s annual salary.',
      example: '"The agent earned a £3 million commission on the £45 million transfer — approximately 6.5% of the deal value."',
      imageSlug: '/images/commission.png',
    },
    {
      word: 'RELEASE CLAUSE',
      partOfSpeech: 'noun',
      definition: 'A contractual provision that allows a player to leave a club if another club meets a set fee — written into the contract at signing.',
      example: '"His release clause was set at £100 million — the board believed no club would trigger it. Barcelona did."',
      imageSlug: '/images/c1-agents-and-intermediaries-release-clause.png',
    },
    {
      word: 'IMAGE RIGHTS',
      partOfSpeech: 'noun',
      definition: 'The commercial rights to a player\'s name, face, and likeness — often structured separately from the playing contract for tax reasons.',
      example: '"The player\'s image rights deal was worth £2 million annually — separate from but structured alongside his playing contract."',
      imageSlug: '/images/image-rights.png',
    },
    {
      word: 'DUAL REPRESENTATION',
      partOfSpeech: 'noun',
      definition: 'When an agent represents both the player and one of the clubs in the same transfer — creating an obvious conflict of interest.',
      example: '"The agent was accused of dual representation — he was simultaneously negotiating on behalf of the player and receiving a fee from the buying club."',
      imageSlug: '/images/dual-representation.png',
    },
    {
      word: 'TAPPING UP',
      partOfSpeech: 'noun',
      definition: 'When a club or agent makes contact with a player who is still under contract elsewhere — illegal under football regulations.',
      example: '"The club was charged with tapping up after it emerged they had approached the player\'s agent while he was still under contract."',
      imageSlug: '/images/tapping-up.png',
    },
    {
      word: 'SUPER AGENT',
      partOfSpeech: 'noun',
      definition: 'An informally used term for an agent who represents dozens of high-profile players and wields significant power in football negotiations.',
      example: '"The super agent\'s roster included four of the world\'s ten highest-earning players — giving him enormous leverage in any transfer negotiation."',
      imageSlug: '/images/super-agent.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BROKER A DEAL',
      definition: 'To negotiate and arrange a transfer or contract — to bring two parties together and facilitate an agreement.',
      example: '"The agent brokered the deal in just two weeks — a complex three-club arrangement that most thought was impossible."',
      imageSlug: '/images/broker-deal.png',
    },
    {
      phrase: 'TRIGGER A CLAUSE',
      definition: 'To formally activate a clause written into a contract — most commonly a release clause that allows a player to leave if a set fee is paid.',
      example: '"Barcelona triggered the release clause and the player was free to complete his move — the club had no legal right to refuse."',
      imageSlug: '/images/trigger-clause.png',
    },
    {
      phrase: 'HOLD OUT FOR',
      definition: 'To refuse to accept less than a certain amount — to insist on specific terms and not move from that position.',
      example: '"The agent held out for a five-year deal — the club\'s initial offer of three years was rejected immediately."',
      imageSlug: '/images/c1-agents-and-intermediaries-hold-out-for.png',
    },
    {
      phrase: 'WALK AWAY FROM',
      definition: 'To end negotiations and decline to continue — to remove a player from transfer talks.',
      example: '"The player\'s camp walked away from negotiations when the club refused to include a release clause in the new deal."',
      imageSlug: '/images/c1-agents-and-intermediaries-walk-away.png',
    },
    {
      phrase: 'LOCK IN',
      definition: 'To secure someone on a long-term contract — to tie a player down so they cannot leave easily.',
      example: '"The club wanted to lock in the striker for five more years before interest from abroad became a real threat."',
      imageSlug: '/images/lock-in.png',
    },
    {
      phrase: 'CUT OUT',
      definition: 'To exclude someone from a deal — to negotiate directly and bypass an intermediary.',
      example: '"The club attempted to cut out the agent and negotiate directly with the player\'s family — but that created its own legal complications."',
      imageSlug: '/images/c1-agents-and-intermediaries-cut-out.png',
    },
  ],

  onThePitch: {
    instructions: 'Key concepts for discussing agents and transfer negotiations at C1 level.',
    items: [
      {
        cue: 'What an agent actually does',
        meaning: 'An agent\'s core job is to negotiate the best possible terms for their client — including salary, bonuses, image rights, contract length, release clauses, and future options. Good agents also manage relationships with clubs and advise on career timing.',
        usage: '"A good agent does much more than just negotiate a fee. They advise on timing — which move, when, at what stage of the career. They structure the contract to protect the player\'s interests — image rights, performance bonuses, release clauses. They manage relationships with clubs. And they handle the media and public relations around a move." This is the professional picture of representation.',
        imageSlug: 'otp-agent-role',
      },
      {
        cue: 'The conflict of interest problem',
        meaning: 'Dual representation — where an agent works for both the player and the club — creates structural conflicts of interest. The agent\'s financial incentive may not align with the player\'s career interests.',
        usage: '"The problem with dual representation is structural. If an agent receives a fee from the buying club and also represents the player, whose interests are they actually serving? If the buying club is paying them more, there\'s an incentive to pressure the player to sign — even if a better option exists elsewhere." This is the core argument for stricter regulation.',
        imageSlug: 'otp-conflict-interest',
      },
      {
        cue: 'The release clause — who benefits',
        meaning: 'Release clauses are written into contracts to give players an exit route. For players, they provide freedom. For clubs, they can provide unexpected vulnerability if the clause is set too low.',
        usage: '"Release clauses look good at the time of signing — they reassure the player that they are not trapped. But clubs that set the clause too low can find themselves unable to refuse a bid they did not expect to receive. The art of the release clause is in setting it high enough to be realistic protection — and low enough to still attract the player."',
        imageSlug: 'otp-release-clause',
      },
      {
        cue: 'Super agents and their power',
        meaning: 'Agents who represent many top players wield disproportionate power — they can threaten to move players from one club to another, or influence where players choose to go.',
        usage: '"When one agent represents eight first-team players at a club, they have enormous leverage. They can threaten to advise clients to run down contracts, manufacture transfer requests, or simply make things difficult. Clubs that depend on an agent\'s goodwill are in a structurally weak position." This is why football authorities are trying to limit concentration of representation.',
        imageSlug: 'otp-super-agent',
      },
      {
        cue: 'Tapping up — the open secret',
        meaning: 'Tapping up — making contact with a player under contract at another club — is against football regulations. But it is widely understood to happen almost universally.',
        usage: '"Tapping up is officially banned — clubs cannot approach a player who is contracted elsewhere without the permission of that player\'s club. In practice, conversations happen through intermediaries, through common social connections, or at events where contact is plausibly deniable. The rule exists, but enforcement is very difficult." This is one of football\'s worst-kept secrets.',
        imageSlug: 'otp-tapping-up',
      },
      {
        cue: 'The regulation debate',
        meaning: 'FIFA and national football associations have tried repeatedly to regulate agents more strictly. The debate is between those who see agents as essential professionals and those who see them as a source of corruption and excess.',
        usage: '"The case for stricter regulation is clear — billions of pounds pass through the agent system with limited oversight, creating opportunities for abuse, dual representation, and conflicts of interest. The case against stricter regulation is that agents provide genuine value and that overly prescriptive rules will simply drive activity underground or offshore." A classic regulatory tension.',
        imageSlug: 'otp-agent-regulation',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'purple', text: 'The agent is reportedly holding out for £10 million in commission on this deal. Is that typical?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'On a £150 million transfer? That\'s around 6-7% — not unusual for a deal this size, unfortunately.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'And there are rumours of dual representation — the same agent working for both the player and the club.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'If that\'s true, that\'s a serious conflict of interest. Whose interests is he actually serving?' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'The player\'s camp have walked away from talks once already. What does that tell you?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'It\'s a negotiating tactic — they\'re holding out for better personal terms. The deal will probably happen. Watch for the release clause.' },
    { speaker: 'Journalist', speakerColor: 'purple', text: 'Do you think the agent system needs to be reformed?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'Absolutely. The money flowing through intermediaries with almost no oversight is a serious governance problem. But the problem is enforcement.' },
  ],

  matchingExercise: [
    { word: 'Agent', definition: 'A licensed professional who represents a player and negotiates on their behalf' },
    { word: 'Intermediary', definition: 'A go-between in transfer negotiations — not always formally registered' },
    { word: 'Commission', definition: 'A percentage fee paid to an agent for completing a deal' },
    { word: 'Release clause', definition: 'A contractual provision allowing a player to leave if a set fee is paid' },
    { word: 'Image rights', definition: 'Commercial rights to a player\'s name and likeness — often structured separately' },
    { word: 'Dual representation', definition: 'When an agent represents both the player and a club in the same transfer' },
    { word: 'Tapping up', definition: 'Making illegal contact with a player who is still under contract elsewhere' },
    { word: 'Super agent', definition: 'An agent representing many high-profile players with significant market power' },
  ],

  fillBlankExercise: [
    { before: 'The agent', answer: 'brokered', after: 'the deal in two weeks — a complex three-club arrangement.' },
    { before: 'Barcelona', answer: 'triggered', after: 'the release clause and the player was free to complete his move.' },
    { before: 'The agent', answer: 'held out for', after: 'a five-year deal — the initial offer of three years was rejected.' },
    { before: 'The player\'s camp', answer: 'walked away from', after: 'negotiations when the club refused to include a release clause.' },
    { before: 'The club wanted to', answer: 'lock in', after: 'the striker for five more years before interest from abroad grew.' },
    { before: 'The agent was accused of', answer: 'dual representation', after: '— working for both the player and the buying club simultaneously.' },
    { before: 'The club was charged with', answer: 'tapping up', after: 'after approaching the player\'s agent while he was still contracted.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is "dual representation" and why is it a problem?',
      options: ['An agent representing both the player and a club in the same deal — creating a conflict of interest about whose interests they serve', 'An agent managing two players in the same transfer — which speeds up negotiations significantly', 'A player being represented by two separate agents simultaneously during contract negotiations'],
      correctIndex: 0,
    },
    {
      question: 'What does it mean to "trigger a release clause"?',
      options: ['To formally activate the clause by meeting the set fee — giving the player the legal right to move to the buying club', 'To renegotiate a player\'s contract and remove an unwanted release clause provision', 'To report another club to the football authorities for attempting to sign a contracted player'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "The player\'s camp ___ away from negotiations when the wage offer was rejected."',
      options: ['walked', 'locked', 'cut'],
      correctIndex: 0,
    },
    {
      question: 'Why is "tapping up" difficult to enforce even though it is against the rules?',
      options: ['Conversations happen through intermediaries or in plausibly deniable situations — making it very difficult to prove contact occurred', 'The financial penalties for tapping up are so small that clubs simply pay them and carry on regardless', 'Football authorities do not have the legal power to investigate private conversations between individuals'],
      correctIndex: 0,
    },
    {
      question: 'Why do super agents have significant leverage over football clubs?',
      options: ['When they represent many players at a club, they can threaten to advise clients to run down contracts or request transfers — clubs in this situation are structurally vulnerable', 'They have access to insider financial information about other clubs that gives them negotiating advantages', 'They have formal voting rights on club decisions if they represent more than five players at the same club'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about football agents.',
    items: [
      {
        sentence: 'Barcelona ___ the release clause and the player was free to complete his move immediately.',
        options: ['triggered', 'brokered', 'locked'],
        correctIndex: 0,
        explanation: '"Trigger a clause" means to formally activate it by meeting the conditions — in this case, by paying the set release fee.',
      },
      {
        sentence: 'The agent ___ out for a five-year deal with a performance bonus — the club\'s shorter offer was rejected.',
        options: ['held', 'cut', 'walked'],
        correctIndex: 0,
        explanation: '"Hold out for" means to refuse to accept less — to insist on specific terms without backing down.',
      },
      {
        sentence: 'The club wanted to ___ in the player for five more years before interest from rivals grew.',
        options: ['lock', 'cut', 'trigger'],
        correctIndex: 0,
        explanation: '"Lock in" means to secure someone on a long-term contract — to prevent them from leaving easily.',
      },
      {
        sentence: 'The agent was earning 6.5% ___ on the £45 million transfer — approximately £3 million.',
        options: ['commission', 'image rights', 'amortisation'],
        correctIndex: 0,
        explanation: 'Commission is the percentage fee an agent earns for completing a deal — typically 5-10% of the transfer fee or annual salary.',
      },
      {
        sentence: 'The club attempted to ___ out the intermediary and negotiate directly with the player\'s family.',
        options: ['cut', 'walk', 'lock'],
        correctIndex: 0,
        explanation: '"Cut out" means to exclude someone from negotiations — to bypass an intermediary and deal directly.',
      },
      {
        sentence: '___ representation is banned in most football associations because it creates an obvious conflict of interest.',
        options: ['Dual', 'Super', 'Commission'],
        correctIndex: 0,
        explanation: 'Dual representation — an agent working for both the player and a club in the same deal — is a clear conflict of interest.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are discussing a transfer negotiation. Choose the most analytically informed response.',
      items: [
        {
          customerLine: '"The player\'s agent is asking for 10% commission — that\'s outrageous!"',
          options: [
            '"It\'s high — but on a £150 million transfer, 10% would be £15 million, which is significantly above the typical range of 5-7%. Whether that\'s justifiable depends on the complexity of the deal and what the agent actually delivered."',
            '"10% is completely normal — agents always charge that much."',
            '"The agent should not be paid anything — the player should negotiate their own contract."',
          ],
          correctIndex: 0,
          explanation: 'Good analysis contextualises the figure — comparing to norms, considering deal complexity, and avoiding knee-jerk outrage without information.',
        },
        {
          customerLine: '"I heard the club tried to contact the player directly — is that allowed?"',
          options: [
            '"No — approaching a player who is still under contract at another club without permission is called tapping up, and it\'s against football regulations. The difficulty is proving it happened."',
            '"Yes, clubs can always speak directly to players — the agent\'s involvement is optional."',
            '"It depends on the country — tapping up rules vary significantly in different leagues."',
          ],
          correctIndex: 0,
          explanation: 'Accurate knowledge of the rule, combined with nuance about enforcement difficulty — this is the C1-level response.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the factual or analytical mistake in this agent negotiation commentary.',
      dialogue: [
        { speaker: 'Commentator', speakerColor: 'orange', text: 'The agent has a release clause in his own contract — so he can leave the agency at any time.' },
        { speaker: 'Commentator', speakerColor: 'orange', text: 'The player signed a release clause last year, set at £50 million.' },
        { speaker: 'Commentator', speakerColor: 'orange', text: 'Now Barcelona have triggered it — they\'ve paid the £50 million, and the club cannot refuse.' },
        { speaker: 'Commentator', speakerColor: 'orange', text: 'The player\'s agent will now earn 10% commission — that\'s £50 million for the agent.' },
        { speaker: 'Host', speakerColor: 'purple', text: 'Incredible money for a few weeks of work.' },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'The player\'s agent will now earn 10% commission — that\'s £50 million for the agent.',
          correction: 'The player\'s agent will earn 10% commission — that\'s £5 million on a £50 million transfer, not £50 million. Commission is calculated as a percentage of the fee, not equal to the fee.',
          explanation: 'Basic arithmetic error: 10% of £50 million is £5 million, not £50 million. This is the kind of factual mistake that undermines the analyst\'s credibility. Always check percentage calculations carefully when discussing agent commissions.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analysis of the agent system at C1 level.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The fundamental problem with dual representation is not the individual cases — it\'s the structural incentive it creates...',
          suggestedCompletion: 'because an agent who receives more money from the buying club than from the player will always, consciously or not, prioritise that club\'s interests when the player\'s and the club\'s interests diverge.',
        },
        {
          customerLine: '',
          salespersonStart: 'A release clause protects the player, but it can also be a vulnerability for the club because...',
          suggestedCompletion: 'if it is set too low — because it seemed unreachable at the time of signing — the club may find itself legally unable to refuse a bid it never wanted to receive. Setting the right release clause fee is a form of financial forecasting.',
        },
        {
          customerLine: '',
          salespersonStart: 'The reason tapping up is so difficult to regulate is not that the rules are unclear — it\'s that...',
          suggestedCompletion: 'conversations between agents, intermediaries, and players happen in informal settings that are designed to be plausibly deniable. Unless someone records the conversation, proof is almost impossible to obtain.',
        },
      ],
    },
  },
};
