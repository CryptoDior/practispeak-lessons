'use client';
import { useState } from 'react';
import { GroupActivities } from '@/types/lesson';

const LABELS = ['A', 'B', 'C'];

export default function GroupActivitiesSection({ activities }: { activities: GroupActivities }) {
  return (
    <div className="space-y-12">
      <ChooseResponseActivity data={activities.chooseResponse} />
      {activities.spotTheMistake
        ? <SpotTheMistakeActivity data={activities.spotTheMistake} />
        : activities.profileMatch
        ? <ProfileMatchActivity data={activities.profileMatch} />
        : null}
      <FinishTheLineActivity data={activities.finishTheLine} />
    </div>
  );
}

/* ── 1. Choose the best response ─────────────────────────────────────────── */

function ChooseResponseActivity({
  data,
}: {
  data: GroupActivities['chooseResponse'];
}) {
  return (
    <div>
      <ActivityHeader
        number={1}
        emoji="🎯"
        title="Choose the Best Response"
        instructions={data.instructions}
      />
      <div className="flex flex-col gap-5">
        {data.items.map((item, i) => (
          <ChooseResponseCard key={i} item={item} number={i + 1} />
        ))}
      </div>
    </div>
  );
}

function ChooseResponseCard({
  item,
  number,
}: {
  item: GroupActivities['chooseResponse']['items'][number];
  number: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const revealed = selected !== null;
  const correct = selected === item.correctIndex;

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
      {/* Customer line */}
      <div className="px-6 pt-5 pb-4 border-b border-gray-50">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-[#EEF3FF] text-[#066EF5] rounded-full flex items-center justify-center text-xs font-extrabold mt-0.5">
            {number}
          </span>
          <div>
            <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-1.5">
              Customer says
            </p>
            <p className="text-base font-semibold text-gray-800 leading-relaxed italic">
              &ldquo;{item.customerLine}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="px-6 py-4 space-y-2.5">
        <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
          Salesperson responds…
        </p>
        {item.options.map((option, i) => {
          let style =
            'border border-gray-100 bg-gray-50 text-gray-700 hover:border-[#066EF5] hover:bg-[#F5F8FF]';
          if (revealed) {
            if (i === item.correctIndex) {
              style = 'border border-emerald-200 bg-emerald-50 text-emerald-800';
            } else if (i === selected) {
              style = 'border border-red-200 bg-red-50 text-red-700';
            } else {
              style = 'border border-gray-100 bg-gray-50 text-gray-400';
            }
          }
          return (
            <button
              key={i}
              disabled={revealed}
              onClick={() => setSelected(i)}
              className={`w-full text-left rounded-xl px-4 py-3 text-base font-semibold transition-all flex items-start gap-3 ${style} disabled:cursor-default`}
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-extrabold mt-0.5">
                {LABELS[i]}
              </span>
              <span className="flex-1">{option}</span>
              {revealed && i === item.correctIndex && (
                <span className="flex-shrink-0 text-emerald-500 font-extrabold text-base">✓</span>
              )}
              {revealed && i === selected && i !== item.correctIndex && (
                <span className="flex-shrink-0 text-red-400 font-extrabold text-base">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation — shown after selection */}
      {revealed && (
        <div className={`mx-6 mb-5 px-4 py-3 rounded-xl text-sm font-semibold leading-relaxed ${
          correct
            ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
            : 'bg-amber-50 text-amber-800 border border-amber-100'
        }`}>
          <span className="font-extrabold mr-1">{correct ? '✓ Correct!' : '✗ Not quite.'}</span>
          {item.explanation}
        </div>
      )}

      {/* Reset */}
      {revealed && (
        <div className="px-6 pb-5 text-right">
          <button
            onClick={() => setSelected(null)}
            className="text-xs text-[#066EF5] font-bold hover:underline"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

/* ── 2. Customer profile match ───────────────────────────────────────────── */

function ProfileMatchActivity({
  data,
}: {
  data: GroupActivities['profileMatch'];
}) {
  // selections[i] = index into data.options chosen for profile i, or null
  const [selections, setSelections] = useState<(number | null)[]>(
    () => data?.profiles.map(() => null) ?? []
  );
  const [checked, setChecked] = useState(false);

  const allSelected = selections.every((s) => s !== null);

  const handleSelect = (profileIdx: number, optionIdx: number) => {
    if (checked) return;
    setSelections((prev) => prev.map((s, i) => (i === profileIdx ? optionIdx : s)));
  };

  if (!data) return null;

  const handleReset = () => {
    setSelections(data.profiles.map(() => null));
    setChecked(false);
  };

  return (
    <div>
      <ActivityHeader
        number={2}
        emoji="🔗"
        title="Customer Profile Match"
        instructions={data.instructions}
      />

      {/* Plans reference row */}
      <div className="flex flex-col gap-2 mb-6">
        <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest px-1">
          Plans / Options
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {data.options.map((option, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] shadow-[0_2px_10px_rgba(6,110,245,0.06)] px-4 py-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 bg-[#EEF3FF] text-[#066EF5] rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <p className="font-extrabold text-gray-900 text-xs">{option.label}</p>
              </div>
              <p className="text-xs text-gray-400 font-semibold leading-relaxed pl-8">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Profile cards with A/B/C selectors */}
      <div className="flex flex-col gap-4 mb-5">
        <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest px-1">
          Customers — which plan fits each one?
        </p>
        {data.profiles.map((profile, pi) => {
          const selected = selections[pi];
          const correctOptionIdx = data.options.findIndex((o) => o.key === profile.matchKey);
          const isCorrect = checked && selected === correctOptionIdx;
          const isWrong = checked && selected !== null && selected !== correctOptionIdx;

          return (
            <div
              key={pi}
              className={`bg-white rounded-[16px] shadow-[0_2px_12px_rgba(6,110,245,0.06)] px-5 py-4 border-2 transition-all ${
                isCorrect
                  ? 'border-emerald-200'
                  : isWrong
                  ? 'border-red-200'
                  : 'border-transparent'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 bg-[#066EF5] text-white rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                      {pi + 1}
                    </span>
                    <p className="font-extrabold text-gray-900 text-sm">{profile.name}</p>
                    {isCorrect && <span className="text-emerald-500 font-extrabold text-base">✓</span>}
                    {isWrong && <span className="text-red-400 font-extrabold text-base">✗</span>}
                  </div>
                  <p className="text-xs text-gray-500 font-semibold leading-relaxed pl-9">
                    {profile.description}
                  </p>
                  {isWrong && (
                    <p className="text-xs font-bold text-emerald-600 pl-9 mt-1.5">
                      Correct answer: {String.fromCharCode(65 + correctOptionIdx)} — {data.options[correctOptionIdx].label}
                    </p>
                  )}
                </div>

                {/* A / B / C selector */}
                <div className="flex gap-1.5 flex-shrink-0 mt-1">
                  {data.options.map((_, oi) => {
                    const isSelected = selected === oi;
                    let btnStyle = 'border border-gray-200 bg-gray-50 text-gray-500 hover:border-[#066EF5] hover:text-[#066EF5]';
                    if (isSelected && !checked) btnStyle = 'border border-[#066EF5] bg-[#066EF5] text-white';
                    if (isSelected && isCorrect) btnStyle = 'border border-emerald-400 bg-emerald-50 text-emerald-700';
                    if (isSelected && isWrong) btnStyle = 'border border-red-300 bg-red-50 text-red-600';
                    if (!isSelected && checked && oi === correctOptionIdx) btnStyle = 'border border-emerald-300 bg-emerald-50 text-emerald-600';
                    return (
                      <button
                        key={oi}
                        disabled={checked}
                        onClick={() => handleSelect(pi, oi)}
                        className={`w-8 h-8 rounded-lg text-xs font-extrabold transition-all disabled:cursor-default ${btnStyle}`}
                      >
                        {String.fromCharCode(65 + oi)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        {!checked ? (
          <button
            disabled={!allSelected}
            onClick={() => setChecked(true)}
            className="px-6 py-2.5 bg-[#066EF5] text-white font-extrabold text-sm rounded-xl hover:bg-blue-600 transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check Matches
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="text-xs text-[#066EF5] font-bold hover:underline"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

/* ── 2b. Spot the Mistake ────────────────────────────────────────────────── */

function SpotTheMistakeActivity({
  data,
}: {
  data: NonNullable<GroupActivities['spotTheMistake']>;
}) {
  const [revealed, setRevealed] = useState(false);

  // First speaker = salesperson (left), second unique speaker = customer (right)
  const speakerOrder: string[] = [];
  data.dialogue.forEach((line) => {
    if (!speakerOrder.includes(line.speaker)) speakerOrder.push(line.speaker);
  });
  const salesperson = speakerOrder[0];

  return (
    <div>
      <ActivityHeader
        number={2}
        emoji="🔍"
        title="Spot the Mistake"
        instructions={data.instructions}
      />

      {/* Dialogue */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] px-6 py-5 mb-5">
        <div className="flex flex-col gap-4">
          {data.dialogue.map((line, i) => {
            const mistake = revealed
              ? data.mistakes.find((m) => m.lineIndex === i)
              : undefined;
            const isCustomer = line.speaker !== salesperson;
            return (
              <div key={i} className={`flex items-end gap-3 ${isCustomer ? 'flex-row-reverse' : ''}`}>

                {/* Avatar placeholder */}
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-extrabold text-sm shadow-sm ${
                  isCustomer
                    ? 'bg-[#066EF5] text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {line.speaker[0].toUpperCase()}
                </div>

                {/* Bubble */}
                <div
                  className={`rounded-[14px] px-4 py-3 max-w-[75%] ${
                    isCustomer
                      ? 'bg-[#F0F4FF] rounded-tr-sm'
                      : 'bg-gray-50 border border-gray-100 rounded-tl-sm'
                  }`}
                >
                  <p className={`text-xs font-extrabold mb-1 ${isCustomer ? 'text-[#066EF5]' : 'text-gray-400'}`}>
                    {line.speaker}
                  </p>
                  {mistake ? (
                    <p className="text-base font-semibold text-gray-800">
                      {line.text.replace(
                        mistake.incorrectText,
                        `<mark>${mistake.incorrectText}</mark>`
                      ).split(/(<mark>.*?<\/mark>)/g).map((part, j) =>
                        part.startsWith('<mark>') ? (
                          <span key={j} className="bg-red-100 text-red-700 rounded px-1 line-through">
                            {mistake.incorrectText}
                          </span>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </p>
                  ) : (
                    <p className="text-base font-semibold text-gray-800">{line.text}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reveal / mistakes */}
      {!revealed ? (
        <div className="text-center">
          <button
            onClick={() => setRevealed(true)}
            className="px-6 py-2.5 bg-[#066EF5] text-white font-extrabold text-sm rounded-xl hover:bg-blue-600 transition-all shadow-sm"
          >
            Show the 3 Mistakes
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {data.mistakes.map((m, i) => (
            <div key={i} className="bg-white rounded-[16px] shadow-[0_2px_10px_rgba(6,110,245,0.06)] px-5 py-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-base font-semibold text-red-600 line-through">&ldquo;{m.incorrectText}&rdquo;</span>
                    <span className="text-gray-400 font-bold">→</span>
                    <span className="text-base font-extrabold text-emerald-700">&ldquo;{m.correction}&rdquo;</span>
                  </div>
                  <p className="text-sm text-gray-500 font-semibold leading-relaxed">{m.explanation}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-1">
            <button
              onClick={() => setRevealed(false)}
              className="text-xs text-[#066EF5] font-bold hover:underline"
            >
              Hide mistakes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── 3. Finish the line ──────────────────────────────────────────────────── */

function FinishTheLineActivity({
  data,
}: {
  data: GroupActivities['finishTheLine'];
}) {
  return (
    <div>
      <ActivityHeader
        number={3}
        emoji="✏️"
        title="Finish the Salesperson's Line"
        instructions={data.instructions}
      />
      <div className="flex flex-col gap-5">
        {data.items.map((item, i) => (
          <FinishLineCard key={i} item={item} number={i + 1} />
        ))}
      </div>
    </div>
  );
}

function FinishLineCard({
  item,
  number,
}: {
  item: GroupActivities['finishTheLine']['items'][number];
  number: number;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] px-6 py-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-6 bg-[#EEF3FF] text-[#066EF5] rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0">
          {number}
        </span>
      </div>

      {/* Customer line */}
      <div className="flex justify-end mb-3">
        <div className="bg-[#F0F4FF] rounded-[14px] rounded-tr-sm px-4 py-3 max-w-[85%]">
          <p className="text-xs font-extrabold text-[#066EF5] mb-1">Customer</p>
          <p className="text-base font-semibold text-gray-800">&ldquo;{item.customerLine}&rdquo;</p>
        </div>
      </div>

      {/* Salesperson start */}
      <div className="flex justify-start mb-3">
        <div className="bg-gray-50 border border-gray-100 rounded-[14px] rounded-tl-sm px-4 py-3 max-w-[85%]">
          <p className="text-xs font-extrabold text-gray-400 mb-1">Salesperson</p>
          <p className="text-base font-semibold text-gray-800">
            &ldquo;{item.salespersonStart}{" "}
            <span className="text-gray-600 italic">&hellip;&rdquo;</span>
          </p>
        </div>
      </div>

      {/* Suggested completion */}
      {item.suggestedCompletion && (
        <div className="mt-3 text-right">
          {!revealed ? (
            <button
              onClick={() => setRevealed(true)}
              className="text-xs text-[#066EF5] font-bold hover:underline"
            >
              Show one possible answer →
            </button>
          ) : (
            <div className="text-left bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-base text-amber-800 font-semibold leading-relaxed">
              <span className="font-extrabold">One possible answer: </span>
              &ldquo;&hellip;{item.suggestedCompletion}&rdquo;
              <button
                onClick={() => setRevealed(false)}
                className="block mt-1 text-xs text-amber-600 hover:underline font-bold"
              >
                Hide
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Shared ──────────────────────────────────────────────────────────────── */

function ActivityHeader({
  number,
  emoji,
  title,
  instructions,
}: {
  number: number;
  emoji: string;
  title: string;
  instructions: string;
}) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 bg-[#066EF5] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-extrabold">{number}</span>
        </div>
        <h3 className="text-xl font-extrabold text-gray-900">
          {emoji} {title}
        </h3>
      </div>
      <p className="text-base text-gray-500 font-semibold ml-12 leading-relaxed">
        {instructions}
      </p>
    </div>
  );
}
