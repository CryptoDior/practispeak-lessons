import Link from 'next/link';
import { lessons } from '@/data/lessons';
import { Lesson } from '@/types/lesson';
import LevelBadge from '@/components/LevelBadge';

// Football slug whitelist (A1-B2; c1-* and c2-* matched by prefix)
const FOOTBALL_SLUGS = new Set([
  'team-communication','game-on-first-words',
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
  'gaming','esports','streaming','action-verbs-move','describing-characters',
  'gaming-jargon','talking-strategy','i-am-a-player','game-genres','inventory',
  'gg-basic','questions-what-who','online-toxicity','narrative-tenses-storytelling',
  'social-gaming','tech-talk-lag','game-design','language-in-gaming',
  'advanced-vocabulary-etymology',
];

const slugHasKw = (slug: string, kws: string[]) => kws.some((kw) => slug.includes(kw));

interface SeriesConfig {
  id: string;
  name: string;
  emoji: string;
  description: string;
  match: (l: Lesson) => boolean;
}

const SERIES: SeriesConfig[] = [
  {
    id: 'roblox',
    name: 'Roblox English',
    emoji: '\u{1F3AE}',
    description: 'Learn real English through Roblox — gaming, chat, quests, and community.',
    match: (l) => l.slug.startsWith('roblox-'),
  },
  {
    id: 'football',
    name: 'Football English',
    emoji: '⚽',
    description: 'From basic vocabulary to punditry — English for players, fans, and analysts.',
    match: (l) =>
      FOOTBALL_SLUGS.has(l.slug) || l.slug.startsWith('c1-') || l.slug.startsWith('c2-'),
  },
  {
    id: 'sales',
    name: 'Sales English',
    emoji: '\u{1F4BC}',
    description: 'Professional English for sales calls, pitches, objections, and closing deals.',
    match: (l) => slugHasKw(l.slug, SALES_KW),
  },
  {
    id: 'marketing',
    name: 'Marketing English',
    emoji: '\u{1F4C8}',
    description: 'English for marketers — strategy, campaigns, data, branding, and leadership.',
    match: (l) => slugHasKw(l.slug, MARKETING_KW),
  },
  {
    id: 'gaming',
    name: 'Gaming English',
    emoji: '\u{1F579}️',
    description: 'English for gamers — streaming, esports, strategy, and gaming culture.',
    match: (l) => slugHasKw(l.slug, GAMING_KW),
  },
  {
    id: 'other',
    name: 'Other Lessons',
    emoji: '\u{1F4DA}',
    description: 'More lessons across different topics and contexts.',
    match: () => true,
  },
];

const LEVEL_ORDER = ['A1', 'A1-A2', 'A2', 'B1-B2', 'C1-C2'] as const;

function groupByLevel(lessonList: Lesson[]): { level: string; lessons: Lesson[] }[] {
  const map = new Map<string, Lesson[]>();
  for (const l of lessonList) {
    if (!map.has(l.level)) map.set(l.level, []);
    map.get(l.level)!.push(l);
  }
  return LEVEL_ORDER.filter((lv) => map.has(lv)).map((lv) => ({
    level: lv,
    lessons: map.get(lv)!,
  }));
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={lesson.externalUrl ?? `/lessons/${lesson.slug}`}
      className="group bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.07)] p-6 hover:shadow-[0_6px_28px_rgba(6,110,245,0.14)] hover:-translate-y-0.5 transition-all duration-200 block"
    >
      <div className="mb-3">
        <LevelBadge level={lesson.level} />
      </div>
      <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-[#066EF5] transition-colors leading-snug">
        {lesson.title}
      </h3>
      <p className="text-gray-500 text-sm mb-5 leading-relaxed font-semibold">
        {lesson.description}
      </p>
      <div className="flex gap-3 text-xs text-gray-400 font-semibold mb-5">
        {lesson.externalUrl ? (
          <span>8 phrases &middot; 3 exercises &middot; Speaking</span>
        ) : (
          <>
            <span>{lesson.vocabulary.length} words</span>
            <span>&middot;</span>
            <span>{lesson.phrasalVerbs.length} phrasal verbs</span>
            <span>&middot;</span>
            <span>3 exercises</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-1 text-sm font-extrabold text-[#066EF5]">
        Start Lesson
        <span className="group-hover:translate-x-1 transition-transform">{'→'}</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const assigned = new Set<string>();
  const grouped = SERIES.map((series) => {
    const sl = lessons.filter((l) => !assigned.has(l.slug) && series.match(l));
    sl.forEach((l) => assigned.add(l.slug));
    return { ...series, lessons: sl };
  }).filter((g) => g.lessons.length > 0);

  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#066EF5] rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-extrabold text-lg leading-none">P</span>
          </div>
          <div>
            <p className="text-lg font-extrabold text-[#066EF5] leading-tight">Practispeak</p>
            <p className="text-xs text-gray-400 font-semibold leading-tight">practispeak.com</p>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-br from-[#1245CE] to-[#066EF5] text-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Learn English Through What You Love
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-semibold">
            Master real-world English through gaming, football, and more. Interactive lessons packed
            with vocabulary, phrasal verbs, and dialogue.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 mb-12">
          {grouped.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm text-sm font-extrabold text-gray-700 hover:bg-[#066EF5] hover:text-white hover:border-[#066EF5] transition-all duration-150"
            >
              <span>{g.emoji}</span>
              <span>{g.name}</span>
              <span className="ml-1 text-xs font-semibold opacity-50">{g.lessons.length}</span>
            </a>
          ))}
        </div>

        {grouped.map((series) => {
          const byLevel = groupByLevel(series.lessons);
          const isMultiLevel = byLevel.length > 1;
          return (
            <section key={series.id} id={series.id} className="mb-20 scroll-mt-8">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                    <span>{series.emoji}</span>
                    <span>{series.name}</span>
                  </h2>
                  <p className="text-sm text-gray-400 font-semibold mt-0.5">{series.description}</p>
                </div>
                <span className="text-sm text-gray-400 font-semibold">
                  {series.lessons.length} lesson{series.lessons.length !== 1 ? 's' : ''}
                </span>
              </div>
              {byLevel.map(({ level, lessons: lvLessons }) => (
                <div key={level} className="mb-10">
                  {isMultiLevel && (
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-extrabold text-[#066EF5] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
                        {level}
                      </span>
                      <div className="flex-1 h-px bg-blue-100" />
                      <span className="text-xs text-gray-400 font-semibold">
                        {lvLessons.length} lesson{lvLessons.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  )}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {lvLessons.map((lesson) => (
                      <LessonCard key={lesson.slug} lesson={lesson} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </main>

      <footer className="border-t border-blue-100 mt-16 py-8 text-center text-gray-400 text-sm font-semibold">
        &copy; {new Date().getFullYear()} Practispeak &middot; practispeak.com
      </footer>
    </div>
  );
}
