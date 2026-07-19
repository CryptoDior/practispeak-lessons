'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '@/data/lessons';
import { Lesson, LessonVideo } from '@/types/lesson';
import { getCatalog } from '@/lib/series';
import { bandForLevel } from '@/lib/levels';
import { SiteHeader } from '@/components/SiteChrome';
import VocabCard from '@/components/VocabCard';
import PhrasalVerbCard from '@/components/PhrasalVerbCard';
import DialogueSection from '@/components/DialogueSection';
import MatchingExercise from '@/components/exercises/MatchingExercise';
import FillBlankExercise from '@/components/exercises/FillBlankExercise';
import MultipleChoiceExercise from '@/components/exercises/MultipleChoiceExercise';
import CompletionScreen from '@/components/CompletionScreen';
import GrammarFocusSection from '@/components/GrammarFocusSection';
import RegisterSection from '@/components/RegisterSection';
import ReadingPassageSection from '@/components/ReadingPassageSection';
import GroupActivitiesSection from '@/components/GroupActivitiesSection';
import WarmUpSection from '@/components/WarmUpSection';
import PitchCornerSection from '@/components/exercises/PitchCornerSection';
import CompleteSentenceSection from '@/components/exercises/CompleteSentenceSection';
import DealClinicSection from '@/components/DealClinicSection';
import OnThePitchSection from '@/components/OnThePitchSection';
import CompareTab from '@/components/CompareTab';

const DEFAULT_TABS = ['Vocabulary', 'Phrases', 'Videos', 'Dialogue', 'Exercises'] as const;

interface ExerciseScore { score: number; total: number; }
interface Scores {
  pitchCorner?: ExerciseScore;
  completeSentence?: ExerciseScore;
  matching?: ExerciseScore;
  fillBlank?: ExerciseScore;
  multipleChoice?: ExerciseScore;
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) notFound();
  return <LessonContent lesson={lesson!} />;
}

function LessonContent({ lesson }: { lesson: Lesson }) {
  const rawBase = lesson.tabLabels ?? DEFAULT_TABS;
  const baseTabs = rawBase.map((t) =>
    t === 'Videos' && lesson.registerAwareness ? 'Register' : t
  );
  const withWarmUp = lesson.warmUp ? ['Warm Up', ...baseTabs] : baseTabs;
  const wo = lesson.warmUp ? 1 : 0;
  // Insert 'Positions' tab right before 'Vocabulary'
  const hasPositions = !!lesson.positionsImage;
  const pos = hasPositions ? 1 : 0;
  const withPositions: string[] = hasPositions
    ? (() => { const vi = withWarmUp.indexOf('Vocabulary'); return [...withWarmUp.slice(0, vi), 'Positions', ...withWarmUp.slice(vi)]; })()
    : [...withWarmUp];
  const irl = lesson.irlVocabulary ? 2 : 0;
  const withIrlVocab: string[] = lesson.irlVocabulary
    ? (() => { const vi = withPositions.indexOf('Vocabulary'); return [...withPositions.slice(0, vi + 1), 'IRL Vocab', 'Compare', ...withPositions.slice(vi + 1)]; })()
    : [...withPositions];

  const hasGrammarFocus = !!lesson.grammarFocus;
  const gf = hasGrammarFocus ? 1 : 0;
  const withGrammarFocus: string[] = hasGrammarFocus
    ? (() => { const vi = withIrlVocab.indexOf('Vocabulary'); return [...withIrlVocab.slice(0, vi + 1), 'Grammar Focus', ...withIrlVocab.slice(vi + 1)]; })()
    : [...withIrlVocab];

  const hasPhrasalDetails = lesson.phrasalVerbs.some(
    (v) => v.inAction || v.register || v.inContext
  );
  let withPhrasalTabs: string[];
  if (hasPhrasalDetails) {
    const phrasesIdx = withGrammarFocus.indexOf('Phrases');
    withPhrasalTabs = [
      ...withGrammarFocus.slice(0, phrasesIdx + 1),
      'In Action', 'Register',
      ...withGrammarFocus.slice(phrasesIdx + 1),
    ];
  } else {
    withPhrasalTabs = [...withGrammarFocus];
  }
  const po = hasPhrasalDetails ? 2 : 0;

  const hasOnThePitch = !!lesson.onThePitch;
  let withOnThePitch: string[];
  if (hasOnThePitch) {
    const phrasesIdx2 = withPhrasalTabs.indexOf('Phrases');
    withOnThePitch = [
      ...withPhrasalTabs.slice(0, phrasesIdx2 + 1),
      'On the Pitch',
      ...withPhrasalTabs.slice(phrasesIdx2 + 1),
    ];
  } else {
    withOnThePitch = [...withPhrasalTabs];
  }
  const otp = hasOnThePitch ? 1 : 0;

  const withDealClinic = lesson.dealClinic ? [...withOnThePitch, 'Deal Clinic'] : withOnThePitch;
  const TABS = lesson.groupActivities ? [...withDealClinic, 'Group Activities'] : withDealClinic;

  const [activeTab, setActiveTab] = useState(0);
  const [visitedTabs, setVisitedTabs] = useState<Set<number>>(new Set([0]));
  const [scores, setScores] = useState<Scores>({});
  const hasPitchCorner = !!lesson.pitchCorner;
  const hasCompleteSentence = !!lesson.completeSentenceExercise;
  const [pitchCornerDone, setPitchCornerDone] = useState(false);
  const [completeSentenceDone, setCompleteSentenceDone] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const goToTab = (i: number) => {
    if (i < 0 || i >= TABS.length) return;
    setActiveTab(i);
    setVisitedTabs((prev) => new Set(Array.from(prev).concat(i)));
  };

  const handlePitchCornerComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, pitchCorner: { score, total } }));
    setPitchCornerDone(true);
  }, []);

  const handleCompleteSentenceComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, completeSentence: { score, total } }));
    setCompleteSentenceDone(true);
  }, []);

  const handleMatchingComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, matching: { score, total } }));
  }, []);

  const handleFillBlankComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, fillBlank: { score, total } }));
  }, []);

  const handleMultipleChoiceComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, multipleChoice: { score, total } }));
  }, []);

  const allDone = !!(scores.matching && scores.fillBlank && scores.multipleChoice) &&
    (!hasPitchCorner || !!scores.pitchCorner) &&
    (!hasCompleteSentence || completeSentenceDone);
  const progress = showCompletion
    ? 100
    : Math.round((visitedTabs.size / TABS.length) * 100);

  if (showCompletion && scores.matching && scores.fillBlank && scores.multipleChoice) {
    return (
      <div className="min-h-screen bg-[#F6F8FB]">
        <SiteHeader active="Categories" />
        <CompletionScreen
          lessonTitle={lesson.title}
          scores={[
            ...(scores.pitchCorner ? [{ label: 'Pitch Corner', score: scores.pitchCorner.score, total: scores.pitchCorner.total }] : []),
            ...(scores.completeSentence ? [{ label: 'Complete the Sentence', score: scores.completeSentence.score, total: scores.completeSentence.total }] : []),
            { label: 'Matching Exercise', score: scores.matching.score, total: scores.matching.total },
            { label: 'Fill in the Blank', score: scores.fillBlank.score, total: scores.fillBlank.total },
            { label: 'Multiple Choice', score: scores.multipleChoice.score, total: scores.multipleChoice.total },
          ]}
        />
      </div>
    );
  }

  const catalog = getCatalog();
  const category = catalog.find((c) => c.lessons.some((l) => l.slug === lesson.slug));
  const band = bandForLevel(lesson.level);
  const lessonNo = category
    ? category.lessons
        .filter((l) => bandForLevel(l.level).id === band.id)
        .findIndex((l) => l.slug === lesson.slug) + 1
    : 0;
  const heroSrc = lesson.heroImage ?? category?.image;
  const catWords = (category?.name ?? 'Practispeak Lessons').split(' ');
  const catFirst = catWords[0];
  const catRest = catWords.slice(1).join(' ') || 'lessons';

  const listWords = (items: string[]) =>
    items.length === 1 ? items[0] : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
  const subtitleGoal = (() => {
    const s = lesson.subtitle.trim().replace(/[.!]+$/, '');
    if (!s) return null;
    const lower = s.charAt(0).toLowerCase() + s.slice(1);
    return /^how to /i.test(s) ? `Learn ${lower}` : `Be able to ${lower}`;
  })();
  const objectives =
    lesson.objectives ??
    ([
      subtitleGoal,
      lesson.vocabulary.length > 0 &&
        `Learn and use key words like ${listWords(lesson.vocabulary.slice(0, 3).map((w) => w.word))}`,
      lesson.phrasalVerbs.length > 0 &&
        (() => {
          const short = lesson.phrasalVerbs.filter((v) => v.phrase.length <= 24).slice(0, 2);
          return short.length > 0
            ? `Master phrases like ${listWords(short.map((v) => `“${v.phrase}”`))}`
            : `Master ${lesson.phrasalVerbs.length} useful phrases and expressions`;
        })(),
      lesson.readingPassage
        ? 'Read a passage that uses this lesson’s language in context'
        : lesson.dialogue?.length
          ? 'Follow a real dialogue and hear the words in context'
          : null,
      'Test yourself with interactive exercises and track your score',
    ].filter(Boolean) as string[]);

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <SiteHeader active="Categories" />

      <div className="font-poppins max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        {/* ---------- Lesson hero card ---------- */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div className="flex-1 px-6 sm:px-10 py-8 md:py-10 flex flex-col justify-center">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-2 text-sm flex-wrap">
                  <li>
                    <Link href="/" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      Practispeak
                    </Link>
                  </li>
                  <li className="text-slate-300" aria-hidden="true">/</li>
                  <li>
                    <Link href="/#categories" className="text-slate-500 hover:text-blue-600 transition-colors">
                      Materials
                    </Link>
                  </li>
                  {category && (
                    <>
                      <li className="text-slate-300" aria-hidden="true">/</li>
                      <li>
                        <Link
                          href={`/categories/${category.id}`}
                          className="text-slate-500 hover:text-blue-600 transition-colors"
                        >
                          {category.name}
                        </Link>
                      </li>
                    </>
                  )}
                  {lessonNo > 0 && (
                    <>
                      <li className="text-slate-300" aria-hidden="true">/</li>
                      <li className="text-slate-500">Lesson {lessonNo}</li>
                    </>
                  )}
                </ol>
              </nav>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-slate-900 mb-5 leading-tight">
                {lesson.title}
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center justify-center min-w-[2.5rem] h-10 px-2 rounded-xl border-2 border-blue-600 text-blue-600 font-bold text-sm">
                  {lesson.level}
                </span>
                <span className="text-[17px] font-medium text-slate-800">{band.label}</span>
              </div>
              <div className="flex items-center gap-3 max-w-xs">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-blue-600 w-9 text-right">{progress}%</span>
              </div>
            </div>

            <div className="relative hidden md:block md:w-[45%] min-h-[300px] bg-gradient-to-br from-[#EEF3FF] to-[#DCE7FF]">
              {heroSrc && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={heroSrc}
                  alt={category ? category.imageAlt : ''}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M-2,104 C30,88 68,62 104,22 L104,104 Z" fill="white" />
                <path
                  d="M-2,104 C30,88 68,62 104,22"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="absolute bottom-5 right-7 text-right">
                <span className="block text-[11px] font-bold tracking-[0.22em] text-blue-600 uppercase">
                  {catFirst}
                </span>
                <span className="block text-2xl font-semibold text-slate-900 lowercase leading-tight">
                  {catRest}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Learning objectives ---------- */}
        <section className="relative bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] overflow-hidden mt-6 mb-4">
          <ObjectivesArt className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 h-[75%] w-auto pointer-events-none select-none" />
          <div className="relative flex items-start gap-6 p-6 sm:p-8">
            <div className="flex-shrink-0 self-stretch pr-6 border-r border-slate-100">
              <span className="w-14 h-14 rounded-full border border-blue-200 text-blue-600 flex items-center justify-center">
                <TargetIcon className="w-6 h-6" />
              </span>
            </div>
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-slate-900">
                Learning Objectives
              </h2>
              <span className="block w-10 h-0.5 bg-blue-600 mt-2.5 mb-4" aria-hidden="true" />
              <p className="text-[15px] text-slate-700 mb-3">In this lesson you will:</p>
              <ul className="space-y-2.5">
                {objectives.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-[15px] text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white shadow-sm sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => goToTab(i)}
                className={`flex-shrink-0 px-4 md:px-5 py-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === i
                    ? 'border-[#066EF5] text-gray-900'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {visitedTabs.has(i) && i !== activeTab && (
                  <span className="mr-1.5 text-emerald-500 text-xs">✓</span>
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">

        {/* Warm Up */}
        {lesson.warmUp && (
          <section className={activeTab === 0 ? 'block' : 'hidden'}>
            <WarmUpSection warmUp={lesson.warmUp} heroImage={lesson.heroImage} onStart={() => goToTab(1)} />
          </section>
        )}

        {/* Positions */}
        {lesson.positionsImage && (
          <section className={activeTab === TABS.indexOf('Positions') ? 'block' : 'hidden'}>
            <SectionHeader title="Positions" subtitle="See where every player lines up on the pitch" />
            <div className="w-full rounded-[20px] overflow-hidden shadow-[0_2px_16px_rgba(6,110,245,0.07)]" style={{ aspectRatio: '16/9' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lesson.positionsImage} alt="Football positions diagram" className="w-full h-full object-cover" />
            </div>
            {lesson.positionsImage2 && (
              <div className="w-full rounded-[20px] overflow-hidden shadow-[0_2px_16px_rgba(6,110,245,0.07)] mt-6" style={{ aspectRatio: '16/9' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={lesson.positionsImage2} alt="Football positions diagram 2" className="w-full h-full object-cover" />
              </div>
            )}
          </section>
        )}

        {/* Vocabulary */}
        <section className={activeTab === wo + pos ? 'block' : 'hidden'}>
          <SectionHeader
            title={lesson.irlVocabulary ? 'In Game Vocab' : 'Vocabulary'}
            subtitle={lesson.irlVocabulary ? `${lesson.vocabulary.length} words — what they mean inside the game` : `${lesson.vocabulary.length} key words for this lesson`}
            instruction={lesson.vocabulary.some(w => w.partOfSpeech === 'abbreviation') ? 'Listen to the audio for the full abbreviation' : undefined}
          />
          <div className="flex flex-col gap-6">
            {lesson.vocabulary.map((word, i) => <VocabCard key={word.word} word={word} index={i} />)}
          </div>
          <OrnamentDivider />
        </section>

        {/* IRL Vocab */}
        {lesson.irlVocabulary && (
          <section className={activeTab === wo + pos + gf + 1 ? 'block' : 'hidden'}>
            <SectionHeader
              title="IRL Vocab"
              subtitle={`${lesson.irlVocabulary.length} words — what they mean in real life`}
            />
            <div className="flex flex-col gap-6">
              {lesson.irlVocabulary.map((word, i) => <VocabCard key={`irl-${word.word}`} word={word} index={i} />)}
            </div>
          </section>
        )}

        {/* Compare */}
        {lesson.irlVocabulary && (
          <section className={activeTab === wo + pos + gf + 2 ? 'block' : 'hidden'}>
            <CompareTab vocabulary={lesson.vocabulary} irlVocabulary={lesson.irlVocabulary} />
          </section>
        )}


        {/* Grammar Focus */}
        {lesson.grammarFocus && (
          <section className={activeTab === TABS.indexOf('Grammar Focus') ? 'block' : 'hidden'}>
            <SectionHeader title="Grammar Focus" subtitle="Understand the grammar rule behind this lesson's topic" />
            <GrammarFocusSection grammar={lesson.grammarFocus} />
          </section>
        )}

        {/* Phrases */}
        <section className={activeTab === wo + pos + irl + gf + 1 ? 'block' : 'hidden'}>
          <SectionHeader
            title={TABS[wo + pos + irl + gf + 1]}
            subtitle={`${lesson.phrasalVerbs.length} ${TABS[wo + pos + irl + gf + 1].toLowerCase()} and their meanings`}
          />
          <div className="flex flex-col gap-6">
            {lesson.phrasalVerbs.map((verb, i) => <PhrasalVerbCard key={verb.phrase} verb={verb} index={i} />)}
          </div>
          <OrnamentDivider />
        </section>

        {/* In Action — 3 scenario cards, each covering 2 phrasal verbs */}
        {hasPhrasalDetails && (
          <section className={activeTab === wo + pos + irl + gf + 2 ? 'block' : 'hidden'}>
            <SectionHeader title="In Action" subtitle="Hear how these phrases sound in real B2B situations" subtitleClass="text-gray-700 font-semibold" />
            <div className="flex flex-col gap-6">
              {[0, 1, 2].map((cardIdx) => {
                const verbs = lesson.phrasalVerbs.filter(v => v.inAction).slice(cardIdx * 2, cardIdx * 2 + 2);
                if (verbs.length === 0) return null;
                const CARD_META = [
                  { badge: 'B2B CALL', title: 'Phrases in a live sales call', icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M3 5.5A2.5 2.5 0 015.5 3h1.372c.86 0 1.61.586 1.819 1.42l.492 1.968A2 2 0 018.23 8.37l-.842.421a10.08 10.08 0 005.82 5.82l.421-.841a2 2 0 011.982-.954l1.968.492A2 2 0 0119 15.128V16.5A2.5 2.5 0 0116.5 19C9.044 19 3 12.956 3 5.5z"/></svg>
                  )},
                  { badge: 'STRATEGY DECK', title: 'Phrases in a written pitch context', icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                  )},
                  { badge: 'CLIENT MEETING', title: 'Phrases in a client-facing meeting', icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/></svg>
                  )},
                ];
                const meta = CARD_META[cardIdx];
                return (
                  <div key={cardIdx} className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
                    {/* Dark image header */}
                    <div className="relative bg-[#0f172a] w-full" style={{ aspectRatio: "16/9" }}>
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                      {meta.icon}
                      </div>
                    </div>
                    {/* Badge + title */}
                    <div className="flex items-center gap-3 px-6 pt-5 pb-3">
                      <span className="text-xs font-extrabold tracking-widest text-[#066EF5] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase">{meta.badge}</span>
                      <span className="font-bold text-gray-700 text-sm">{meta.title}</span>
                    </div>
                    {/* Quotes */}
                    <div className="px-6 pb-5 space-y-5">
                      {verbs.map(verb => (
                        <div key={verb.phrase}>
                          <span className="text-xs font-extrabold tracking-widest text-gray-600 uppercase mb-1.5 block">{verb.phrase}</span>
                          <p className="text-gray-600 text-base leading-relaxed italic">&ldquo;{verb.inAction}&rdquo;</p>
                        </div>
                      ))}
                    </div>
                    {/* Audio player */}
                    <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                      <ScenarioAudioPlayer src={`/audio/inaction-scenario-${cardIdx + 1}.mp3`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Register */}
        {hasPhrasalDetails && (
          <section className={activeTab === wo + pos + irl + gf + 3 ? 'block' : 'hidden'}>
            <SectionHeader title="Register" subtitle="Understand when and how to use each phrase — formal, neutral, or informal" subtitleClass="text-gray-600 font-semibold" />
            {/* Visual Examples */}
            {lesson.phrasalVerbs.some(v => v.visualExamples?.length) && (
              <div className="mt-10 space-y-12">
                <h3 className="text-lg font-extrabold tracking-wide text-gray-900">Visual Examples</h3>
                {lesson.phrasalVerbs.filter(v => v.visualExamples?.length).map(verb => (
                  <div key={verb.phrase}>
                    <div className="mb-5 pb-3 border-b border-blue-100">
                      <p className="text-sm font-extrabold tracking-widest text-gray-700 uppercase mb-1">Focus phrase</p>
                      <h4 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">{verb.phrase}</h4>
                    </div>
                    <div className="space-y-6">
                      {verb.visualExamples!.map((ex, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-[0_2px_12px_rgba(6,110,245,0.06)] overflow-hidden">
                          {/* Number + brand header */}
                          <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                            <div className="w-7 h-7 rounded-full bg-[#066EF5] text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">{idx + 1}</div>
                            <div>
                              <span className="font-extrabold text-gray-900 text-sm block">{ex.brand}</span>
                              <span className="text-xs text-gray-400 font-semibold">{ex.context}</span>
                            </div>
                          </div>
                          {/* Caption — above image */}
                          <div className="px-5 pb-3">
                            <p className="text-base font-semibold text-gray-800 leading-relaxed italic">&ldquo;{ex.caption}&rdquo;</p>
                          </div>
                          {/* Image */}
                          <div className="relative bg-gray-100 w-full overflow-hidden mx-auto" style={{ aspectRatio: '3/2', maxHeight: '260px' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ex.imageSlug} alt={ex.brand} className="absolute inset-0 w-full h-full object-contain" onError={e => { const t = e.target as HTMLImageElement; t.style.display='none'; (t.nextElementSibling as HTMLElement).style.display='flex'; }} />
                            <div className="hidden absolute inset-0 items-center justify-center flex-col text-slate-500">
                              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                              <span className="text-xs mt-2 font-semibold text-slate-400">{ex.brand} — Image Placeholder</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </section>
        )}


        {/* On the Pitch */}
        {hasOnThePitch && lesson.onThePitch && (
          <section className={activeTab === TABS.indexOf('On the Pitch') ? 'block' : 'hidden'}>
            <SectionHeader
              title="On the Pitch"
              subtitle="Real phrases used on the pitch and at training — learn them, shout them!"
            />
            <OnThePitchSection section={lesson.onThePitch} />
          </section>
        )}

        {/* Videos / Register (vocab awareness) */}
        <section className={activeTab === wo + pos + irl + po + otp + gf + 2 ? 'block' : 'hidden'}>
          {lesson.registerAwareness ? (
            <>
              <SectionHeader title={TABS[wo + pos + irl + po + otp + gf + 2]} subtitle="How these words change across different contexts" />
              <RegisterSection entries={lesson.registerAwareness} traps={lesson.registerTraps} />
            </>
          ) : (
            <>
              <SectionHeader title="Videos" subtitle="Watch these terms used in context" />
              <div className="grid gap-6 md:grid-cols-2">
                {lesson.videos.map((video, i) => <VideoCard key={i} video={video} />)}
              </div>
            </>
          )}
        </section>

        {/* Dialogue / Reading Passage */}
        <section className={activeTab === wo + pos + irl + po + otp + gf + 3 ? 'block' : 'hidden'}>
          {lesson.readingPassage ? (
            <>
              <SectionHeader title={TABS[wo + pos + irl + po + otp + gf + 3]} subtitle="Read the passage — highlighted words are from this lesson" />
              <ReadingPassageSection passage={lesson.readingPassage} prompts={lesson.productionPrompts} />
            </>
          ) : (
            <>
              <SectionHeader title="Dialogue" subtitle={lesson.dialogueSubtitle || 'Read the dialogue and hover the blue words for definitions'} />
              <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
                <DialogueSection lines={lesson.dialogue} />
              </div>
            </>
          )}
        </section>

        {/* Exercises */}
        <section className={activeTab === wo + pos + irl + po + otp + gf + 4 ? 'block' : 'hidden'}>
          <SectionHeader title="Exercises" subtitle="Complete all three exercises to see your final score" />
          <div className="space-y-6">
            {lesson.pitchCorner && (
              <ExerciseCard number={1} title="Pitch Corner" description="Read the pitch — click or drag words from the bank to fill the gaps.">
                <PitchCornerSection pitchCorner={lesson.pitchCorner} onComplete={handlePitchCornerComplete} />
              </ExerciseCard>
            )}
            {lesson.completeSentenceExercise && (
              <ExerciseCard number={1} title="Complete the Sentence" description="Choose the correct answer to complete each sentence.">
                <CompleteSentenceSection exercise={lesson.completeSentenceExercise} onComplete={handleCompleteSentenceComplete} />
              </ExerciseCard>
            )}
            <ExerciseCard number={hasPitchCorner || hasCompleteSentence ? 2 : 1} title="Matching" description="Click a word, then click its correct definition.">
              <MatchingExercise pairs={lesson.matchingExercise} onComplete={handleMatchingComplete} />
            </ExerciseCard>
            <ExerciseCard number={hasPitchCorner || hasCompleteSentence ? 3 : 2} title="Fill in the Blank" description="Drag the correct words from the word bank to complete each sentence.">
              <FillBlankExercise items={lesson.fillBlankExercise} onComplete={handleFillBlankComplete} />
            </ExerciseCard>
            <ExerciseCard number={hasPitchCorner || hasCompleteSentence ? 4 : 3} title="Multiple Choice" description="Choose the best answer for each question about the dialogue.">
              <MultipleChoiceExercise items={lesson.multipleChoiceExercise} onComplete={handleMultipleChoiceComplete} />
            </ExerciseCard>
            {allDone && (
              <div className="text-center py-4">
                <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-[20px] mb-5">
                  <p className="text-emerald-700 font-extrabold text-lg">All exercises complete! Great work! 🎉</p>
                </div>
                <button
                  onClick={() => setShowCompletion(true)}
                  className="px-10 py-4 bg-[#066EF5] text-white font-extrabold text-lg rounded-2xl hover:bg-blue-600 shadow-[0_4px_16px_rgba(6,110,245,0.3)] hover:shadow-[0_6px_24px_rgba(6,110,245,0.4)] transition-all active:scale-95"
                >
                  View Final Results →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Deal Clinic */}
        {lesson.dealClinic && (
          <section className={activeTab === TABS.indexOf('Deal Clinic') ? 'block' : 'hidden'}>
            <SectionHeader title="Deal Clinic" subtitle="Read the conversation — judge each highlighted move: Good or Weak?" />
            <DealClinicSection dealClinic={lesson.dealClinic} />
          </section>
        )}

        {/* Group Activities */}
        {lesson.groupActivities && (
          <section className={activeTab === TABS.indexOf('Group Activities') ? 'block' : 'hidden'}>
            <SectionHeader title="Group Activities" subtitle="Role-play scenarios and discussion questions for group classes" />
            <GroupActivitiesSection activities={lesson.groupActivities} />
          </section>
        )}

        {/* Prev / Next */}
        <div className="flex justify-between mt-10 pt-6 border-t border-blue-100">
          <button
            onClick={() => goToTab(activeTab - 1)}
            disabled={activeTab === 0}
            className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl hover:border-[#066EF5] hover:text-[#066EF5] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            ← Previous
          </button>
          {activeTab < TABS.length - 1 && (
            <button
              onClick={() => goToTab(activeTab + 1)}
              className="px-5 py-2.5 bg-[#066EF5] text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-sm"
            >
              Next →
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

function TargetIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <path d="M18 6l3-3M18 6h2.5M18 6V3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ObjectivesArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 180" fill="none" className={className} aria-hidden="true">
      <g stroke="#DBEAFE" strokeWidth="3" strokeLinecap="round">
        <path d="M30 160 C55 110 65 60 55 15" fill="none" />
        <path d="M52 40 C38 38 28 28 27 14 41 16 51 26 52 40z" fill="#EFF5FF" />
        <path d="M58 70 C44 68 34 58 33 44 47 46 57 56 58 70z" fill="#EFF5FF" />
        <path d="M60 100 C46 98 36 88 35 74 49 76 59 86 60 100z" fill="#EFF5FF" />
        <path d="M56 130 C42 128 32 118 31 104 45 106 55 116 56 130z" fill="#EFF5FF" />
      </g>
      <g stroke="#DBEAFE" strokeWidth="3.5">
        <circle cx="180" cy="95" r="62" />
        <circle cx="180" cy="95" r="42" />
        <circle cx="180" cy="95" r="22" />
        <circle cx="180" cy="95" r="5" fill="#DBEAFE" stroke="none" />
        <path d="M180 95L232 43M232 43h-20M232 43v20" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function ExerciseCard({ number, title, description, children }: { number: number; title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_20px_rgba(6,110,245,0.08)] border border-gray-100 p-6 md:p-8">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-8 h-8 rounded-full bg-[#066EF5] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">{number}</div>
        <div>
          <h3 className="font-extrabold text-gray-900 text-base">{title}</h3>
          <p className="text-gray-500 text-sm mt-0.5">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function SectionHeader({ title, subtitle, instruction, subtitleClass }: { title: string; subtitle: string; instruction?: string; subtitleClass?: string }) {
  return (
    <div className="mb-6 font-poppins">
      <h2 className="font-playfair text-3xl font-semibold text-slate-900 mb-1.5">{title}</h2>
      <p className={`text-sm ${subtitleClass ?? "text-slate-500"}`}>{subtitle}</p>
      {instruction && <p className="text-blue-600 text-sm font-medium mt-1">{instruction}</p>}
    </div>
  );
}

function OrnamentDivider() {
  return (
    <div className="flex items-center gap-4 mt-10 max-w-2xl mx-auto" aria-hidden="true">
      <span className="flex-1 h-px bg-blue-300" />
      <svg viewBox="0 0 40 24" className="w-10 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4c1.8 3 1.8 7 0 10-1.8-3-1.8-7 0-10z" />
        <path d="M13 8c3 .5 5.3 2.6 6.4 5.6C16.2 14 13.5 12.4 12 9.6L13 8z" />
        <path d="M27 8c-3 .5-5.3 2.6-6.4 5.6 3.2.4 5.9-1.2 7.4-4L27 8z" />
        <path d="M9 13c2.8-.6 5.8.2 8 2.2-2.4 1.6-5.5 1.7-8.2.3L9 13z" />
        <path d="M31 13c-2.8-.6-5.8.2-8 2.2 2.4 1.6 5.5 1.7 8.2.3L31 13z" />
        <path d="M15 19.5c1.6-1.6 3.4-2.3 5-2.3s3.4.7 5 2.3" />
      </svg>
      <span className="flex-1 h-px bg-blue-300" />
    </div>
  );
}

function VideoCard({ video }: { video: LessonVideo }) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-[#F0F4FF] to-blue-50 flex items-center justify-center">
        {video.youtubeId.startsWith('PLACEHOLDER') ? (
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#066EF5]/10 border-2 border-[#066EF5]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-[#066EF5] text-2xl">▶</span>
            </div>
            <p className="text-gray-500 text-sm font-bold">Video Coming Soon</p>
            <p className="text-gray-400 text-xs mt-1 font-semibold">Your teacher will share the link</p>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-extrabold text-gray-900 text-base mb-1">{video.title}</h3>
        {video.description && <p className="text-gray-500 text-sm leading-relaxed">{video.description}</p>}
      </div>
    </div>
  );
}

const SCENARIO_WAVEFORM = [4, 7, 12, 8, 14, 6, 10, 16, 9, 13, 5, 11, 8, 14, 7, 10, 5, 12, 8, 6];

function ScenarioAudioPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const audio = new Audio(src);
    setPlaying(true);
    audio.onended = () => setPlaying(false);
    audio.onerror = () => setPlaying(false);
    audio.play().catch(() => setPlaying(false));
  };
  return (
    <button onClick={toggle} className="flex items-center gap-3 group w-full text-left">
      <div className="w-9 h-9 rounded-full bg-[#066EF5] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-600 group-active:scale-95 transition-all">
        <span className="text-white text-[10px] leading-none" style={{ marginLeft: playing ? 0 : '1px' }}>
          {playing ? '⏸' : '▶'}
        </span>
      </div>
      <div className="flex items-center gap-[2px] flex-shrink-0">
        {SCENARIO_WAVEFORM.map((h, i) => (
          <div key={i} className={`w-[2px] rounded-full transition-colors duration-300 ${playing ? 'bg-[#066EF5]' : 'bg-gray-200'}`} style={{ height: `${h}px` }} />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-400 whitespace-nowrap">Listen to scenario</span>
    </button>
  );
}
