'use client';
import { GroupActivities } from '@/types/lesson';

export default function GroupActivitiesSection({ activities }: { activities: GroupActivities }) {
  return (
    <div className="space-y-10">

      {/* ── Role-Play ── */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 bg-[#066EF5] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-base">🎭</span>
          </div>
          <h3 className="text-xl font-extrabold text-gray-900">Role-Play</h3>
        </div>
        <p className="text-sm text-gray-400 font-semibold mb-6 ml-12">
          {activities.rolePlay.instructions}
        </p>

        <div className="flex flex-col gap-5">
          {activities.rolePlay.scenarios.map((scenario, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden"
            >
              {/* Scenario header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-50 bg-gradient-to-r from-[#F5F8FF] to-white">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-[#066EF5] text-white tracking-wide">
                  {scenario.label}
                </span>
                <p className="text-sm text-gray-500 font-semibold leading-snug flex-1">
                  {scenario.context}
                </p>
              </div>

              <div className="px-6 py-5 space-y-5">

                {/* Guidance steps */}
                <div>
                  <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                    Conversation guide
                  </p>
                  <ol className="space-y-2">
                    {scenario.guidance.map((step, j) => {
                      // Bold the "Salesperson:" / "Customer:" speaker label
                      const colonIdx = step.indexOf(':');
                      const speaker = colonIdx > -1 ? step.slice(0, colonIdx + 1) : null;
                      const rest = colonIdx > -1 ? step.slice(colonIdx + 1) : step;
                      return (
                        <li key={j} className="flex gap-3 text-sm text-gray-700">
                          <span className="flex-shrink-0 w-5 h-5 bg-[#EEF3FF] text-[#066EF5] rounded-full flex items-center justify-center text-xs font-extrabold mt-0.5">
                            {j + 1}
                          </span>
                          <span>
                            {speaker && (
                              <span className="font-extrabold text-gray-900">{speaker}</span>
                            )}
                            {rest}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                {/* Vocab to use */}
                <div>
                  <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                    Use these words
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {scenario.vocabToUse.map((word) => (
                      <span
                        key={word}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Phrases to use */}
                <div>
                  <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                    Use these phrases
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {scenario.phrasesToUse.map((phrase) => (
                      <span
                        key={phrase}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF3FF] text-[#066EF5] border border-blue-100"
                      >
                        {phrase}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Discussion ── */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 bg-[#066EF5] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-base">💬</span>
          </div>
          <h3 className="text-xl font-extrabold text-gray-900">Discussion</h3>
        </div>
        <p className="text-sm text-gray-400 font-semibold mb-6 ml-12">
          {activities.discussion.instructions}
        </p>

        <div className="flex flex-col gap-4">
          {activities.discussion.questions.map((question, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] px-6 py-5 flex gap-4 items-start"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-[#066EF5] text-white rounded-full flex items-center justify-center text-sm font-extrabold mt-0.5">
                {i + 1}
              </span>
              <p className="text-gray-800 font-semibold text-sm leading-relaxed">{question}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
