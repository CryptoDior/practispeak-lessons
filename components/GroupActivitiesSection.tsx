'use client';
import { useState } from 'react';
import { GroupActivities } from '@/types/lesson';

const LABELS = ['A', 'B', 'C'];

export default function GroupActivitiesSection({ activities }: { activities: GroupActivities }) {
  return (
    <div className="space-y-12">
      <ChooseResponseActivity data={activities.chooseResponse} />
      <ProfileMatchActivity data={activities.profileMatch} />
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
            <p className="text-sm font-semibold text-gray-800 leading-relaxed italic">
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
              className={`w-full text-left rounded-xl px-4 py-3 text-sm font-semibold transition-all flex items-start gap-3 ${style} disabled:cursor-default`}
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
  const [revealed, setRevealed] = useState(false);

  return (
    <div>
      <ActivityHeader
        number={2}
        emoji="🔗"
        title="Customer Profile Match"
        instructions={data.instructions}
      />

      <div className="grid md:grid-cols-2 gap-6 mb-5">
        {/* Profiles */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest px-1">
            Customers
          </p>
          {data.profiles.map((profile, i) => {
            const matchedOption = revealed
              ? data.options.find((o) => o.key === profile.matchKey)
              : null;
            return (
              <div
                key={i}
                className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(6,110,245,0.06)] px-5 py-4"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-7 h-7 bg-[#066EF5] text-white rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="font-extrabold text-gray-900 text-sm">{profile.name}</p>
                </div>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed pl-9">
                  {profile.description}
                </p>
                {matchedOption && (
                  <div className="mt-2 ml-9 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                    <span className="text-emerald-500 text-xs">✓</span>
                    <span className="text-xs font-extrabold text-emerald-700">
                      {matchedOption.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest px-1">
            Plans / Options
          </p>
          {data.options.map((option, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(6,110,245,0.06)] px-5 py-4"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-7 h-7 bg-[#EEF3FF] text-[#066EF5] rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <p className="font-extrabold text-gray-900 text-sm">{option.label}</p>
              </div>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed pl-9">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="px-6 py-2.5 bg-[#066EF5] text-white font-extrabold text-sm rounded-xl hover:bg-blue-600 transition-all shadow-sm"
          >
            Reveal Matches
          </button>
        ) : (
          <button
            onClick={() => setRevealed(false)}
            className="text-xs text-[#066EF5] font-bold hover:underline"
          >
            Hide Matches
          </button>
        )}
      </div>
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
          <p className="text-sm font-semibold text-gray-800">&ldquo;{item.customerLine}&rdquo;</p>
        </div>
      </div>

      {/* Salesperson start */}
      <div className="flex justify-start mb-3">
        <div className="bg-gray-50 border border-gray-100 rounded-[14px] rounded-tl-sm px-4 py-3 max-w-[85%]">
          <p className="text-xs font-extrabold text-gray-400 mb-1">Salesperson</p>
          <p className="text-sm font-semibold text-gray-800">
            &ldquo;{item.salespersonStart}{' '}
            <span className="text-gray-300 italic">&hellip;&rdquo;</span>
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
            <div className="text-left bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-sm text-amber-800 font-semibold leading-relaxed">
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
      <p className="text-sm text-gray-400 font-semibold ml-12 leading-relaxed">
        {instructions}
      </p>
    </div>
  );
}
