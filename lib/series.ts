import { lessons } from '@/data/lessons';
import { Lesson } from '@/types/lesson';
import { LEVEL_MIN, LEVEL_MAX, levelToRange } from '@/lib/levels';

export * from '@/lib/levels';

/* ---------- series classification ---------- */

const FOOTBALL_SLUGS = new Set([
  'the-football-pitch','players-and-positions','the-kit','numbers-in-football',
  'people-at-the-club','kick-pass-shoot','run-sprint-stop','score-a-goal',
  'win-lose-draw','simple-match-commands','the-stadium','buying-a-ticket',
  'getting-there','before-the-match','chants-and-crowd-language','half-time',
  'the-final-whistle','talking-about-your-team','asking-about-the-match','a1-review-match',
  'dribble-tackle-intercept','types-of-pass','shots-and-saves','set-pieces',
  'the-offside-rule','describing-a-match','cards-and-fouls','substitutions',
  'formations','injury-time','describing-a-player','transfer-talk','the-squad',
  'comparing-teams','stadiums-and-grounds','watching-from-the-stands','watching-on-tv',
  'talking-to-other-fans','reading-match-reports','match-of-the-day-a2-review',
  'press-and-pressing','defending-as-a-unit','building-from-the-back','width-and-depth',
  'counter-attack','training-sessions','fitness-and-conditioning','injuries',
  'nutrition-and-recovery','the-managers-team-talk','live-commentary-language',
  'match-highlights','post-match-interviews','social-media-football','football-podcasts',
  'league-formats','cup-football','european-football','grassroots-football',
  'b1-review-the-big-debate',
  'shape-and-structure','set-piece-routines','the-half-space','pressing-triggers',
  'dead-ball-situations','contract-negotiations','speaking-to-your-teammates',
  'talking-to-your-manager','dressing-room-english','media-training',
  'football-idioms-in-everyday-english','slang-and-jargon','football-humour',
  'british-vs-american-football-english','footballs-global-vocabulary',
  'reading-a-tactical-analysis','writing-a-match-report','the-transfer-window',
  'football-and-culture','b2-capstone-pundit-panel',
]);

const SALES_KW = [
  'sales','selling','objection','rapport','crm','-customer','customer-',
  'pitching-to','follow-up-after','payment-vocab','persuasive-recommendations',
  'product-features','talking-about-prices','offering-help','confirming-customer',
  'explaining-packages','b2b-','high-ticket','presenting-proposals',
  'storytelling-in-sales','creating-urgency','handling-difficult',
  'making-simple-recommendations','taking-a-simple-order','simple-product-comparison',
  'talking-about-delivery','thanking-the-customer','simple-sales-role-play',
  'comparing-products','-sales-pitch','negotiating-politely','colors-sizes',
  'giving-simple-answers','consultative-selling','executive-level-sales',
  'advanced-sales','data-driven-sales','cross-cultural-sales','advanced-follow-up',
  'sales-leadership','complex-objection','negotiating-price','advanced-persuasive-language',
  'strategic-questioning','asking-what-the-customer',
];

const MARKETING_KW = [
  'marketing','branding','campaign','brand-architecture','brand-storytelling',
  'brand-values','content-strategy','consumer-psychology','integrated-marketing',
  'digital-marketing','email-marketing','influencer','data-driven-decisions',
  'running-effective-meetings','customer-journey','seo-and-sem',
  'social-media-advertising','crisis-communication','global-vs-local',
  'working-with-agencies','e-commerce','account-based','customer-retention',
  'ethical-marketing','in-emerging-markets','internal-communications',
  'innovation-in','performance-marketing','community-led','ai-and-automation',
  'media-relations','luxury-and-premium','cause-related','marketing-in-a-recession',
  'cross-cultural-negotiation','advanced-presentation-skills','academic-and-trade',
  'mastering-ambiguity','political-communication','advanced-discourse',
  'board-level-reporting','mergers-acquisitions','the-future-of-marketing',
  'crisis-pr','marketing-due-diligence','semiotics','writing-for-the-c-suite',
  'international-media','regulatory-and-legal','thought-leadership',
  'cultural-intelligence','multilingual','advanced-brand-strategy',
  'growth-marketing','complex-data-storytelling','global-campaign',
  'advanced-copywriting','marketing-transformation','negotiating-contracts',
  'writing-a-marketing-white-paper','language-of-business','swot-analysis',
  'market-segmentation','hello-i-work-in','my-company','products-and-services',
  'numbers-and-prices','the-marketing-team','what-does-marketing','our-customers',
  'online-and-offline','a-simple-marketing-plan','colours-logos','our-target-market',
  'the-4-ps','running-a-campaign','writing-better-emails','social-media-strategy',
  'understanding-data','customer-feedback','competitive-landscape','good-better-best',
  'what-do-you-like','social-media-basics','emails-in-marketing','at-a-trade-fair',
  'this-is-our-new-product','how-much-does-it-cost','where-do-you-sell',
  'review-talking-about-my-work','a1-final-project-my-brand','review-the-marketing-mix',
  'a2-final-project-mini','advertising-media','making-an-offer','planning-a-product-launch',
  'in-a-marketing-meeting','content-marketing-basics','your-brand-online',
  'trade-shows-and-events','measuring-success','strategic-marketing-overview',
  'social-listening','programmatic-advertising','marketing-leadership',
  'marketing-ethics','marketing-then-and-now','advanced-data-analytics',
  'persuasive-marketing','negotiating-with-partners',
];

const GAMING_KW = [
  'team-communication',
  'gaming','esports','streaming','action-verbs-move','describing-characters',
  'gaming-jargon','talking-strategy','i-am-a-player','game-genres','inventory',
  'gg-basic','questions-what-who','online-toxicity','narrative-tenses-storytelling',
  'social-gaming','tech-talk-lag','game-design','language-in-gaming',
  'advanced-vocabulary-etymology','game-on-first-words',
];

const slugHasKw = (slug: string, kws: string[]) => kws.some((kw) => slug.includes(kw));

interface SeriesDef {
  id: string;
  name: string;
  shortName: string;
  cardTitle: string;
  description: string;
  /** Stock fallback shown until /images/category-<id>-header.png is added. */
  stockImage: string;
  imageAlt: string;
  match: (l: Lesson) => boolean;
}

const SERIES: SeriesDef[] = [
  {
    id: 'roblox',
    name: 'Roblox English',
    shortName: 'Roblox',
    cardTitle: 'Roblox',
    description: 'Learn real English through Roblox — gaming, chat, quests, and community.',
    stockImage:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=75&auto=format&fit=crop',
    imageAlt: 'Colourful building blocks scattered on a surface',
    match: (l) => l.slug.startsWith('roblox-'),
  },
  {
    id: 'football',
    name: 'Football English',
    shortName: 'Football',
    cardTitle: 'Football',
    description: 'From basic vocabulary to punditry — English for players, fans, and analysts.',
    stockImage:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900&q=75&auto=format&fit=crop',
    imageAlt: 'A floodlit football stadium seen from the stands',
    match: (l) =>
      FOOTBALL_SLUGS.has(l.slug) || l.slug.startsWith('c1-') || l.slug.startsWith('c2-'),
  },
  {
    id: 'sales',
    name: 'Sales English',
    shortName: 'Sales',
    cardTitle: 'Sales',
    description: 'Professional English for sales calls, pitches, objections, and closing deals.',
    stockImage:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=75&auto=format&fit=crop',
    imageAlt: 'Two business people shaking hands over a desk',
    match: (l) => slugHasKw(l.slug, SALES_KW),
  },
  {
    id: 'marketing',
    name: 'Marketing English',
    shortName: 'Marketing',
    cardTitle: 'Marketing',
    description: 'English for marketers — strategy, campaigns, data, branding, and leadership.',
    stockImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75&auto=format&fit=crop',
    imageAlt: 'A laptop showing analytics charts next to a notebook',
    match: (l) => slugHasKw(l.slug, MARKETING_KW),
  },
  {
    id: 'gaming',
    name: 'Gaming English',
    shortName: 'Gaming',
    cardTitle: 'Gaming',
    description: 'English for gamers — streaming, esports, strategy, and gaming culture.',
    stockImage:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=75&auto=format&fit=crop',
    imageAlt: 'A gaming setup with neon-lit keyboard and monitors',
    match: (l) => slugHasKw(l.slug, GAMING_KW),
  },
  {
    id: 'other',
    name: 'Other Lessons',
    shortName: 'Other',
    cardTitle: 'More Topics',
    description: 'More lessons across different topics and contexts.',
    stockImage:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=75&auto=format&fit=crop',
    imageAlt: 'Rows of books on wooden library shelves',
    match: () => true,
  },
];

/* ---------- catalog (serializable — safe to pass server -> client) ---------- */

export interface LessonSummary {
  slug: string;
  title: string;
  description: string;
  level: string;
  externalUrl?: string;
  heroImage?: string;
  words: number;
  phrasals: number;
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  cardTitle: string;
  description: string;
  /** Primary image: /images/category-<id>-header.png (drop-in, auto-detected). */
  image: string;
  /** Stock fallback shown until the primary image file exists. */
  stockImage: string;
  imageAlt: string;
  /** [min, max] on the 1-6 level scale, across all lessons in the category */
  range: [number, number];
  lessons: LessonSummary[];
}

let catalogCache: Category[] | null = null;

/** Every lesson is assigned to exactly one category (first match wins, in SERIES order). */
export function getCatalog(): Category[] {
  if (catalogCache) return catalogCache;
  const assigned = new Set<string>();
  catalogCache = SERIES.map((series) => {
    const sl = lessons.filter((l) => !assigned.has(l.slug) && series.match(l));
    sl.forEach((l) => assigned.add(l.slug));
    let lo = LEVEL_MAX;
    let hi = LEVEL_MIN;
    const summaries: LessonSummary[] = sl.map((l) => {
      const [a, b] = levelToRange(l.level);
      lo = Math.min(lo, a);
      hi = Math.max(hi, b);
      return {
        slug: l.slug,
        title: l.title,
        description: l.description,
        level: l.level,
        externalUrl: l.externalUrl,
        heroImage: l.heroImage,
        words: l.vocabulary.length,
        phrasals: l.phrasalVerbs.length,
      };
    });
    const { match, ...plain } = series;
    return {
      ...plain,
      image: `/images/category-${series.id}-header.png`,
      range: [lo, hi] as [number, number],
      lessons: summaries,
    };
  }).filter((c) => c.lessons.length > 0);
  return catalogCache;
}
