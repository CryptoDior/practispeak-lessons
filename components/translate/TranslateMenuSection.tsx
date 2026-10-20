'use client';
import { TRANSLATE_LANGUAGES, type TranslateLangCode } from '@/lib/translateLanguages';
import { saveTranslateSettings, type TranslateSettings } from '@/lib/translate';
import { BECOME_STUDENT_URL } from '@/lib/site';
import WandIcon from '@/components/translate/WandIcon';

/** Translate tool controls in the account menu: on/off + language (students), or a locked teaser. */
export default function TranslateMenuSection({
  isStudent,
  settings,
}: {
  isStudent: boolean;
  settings: TranslateSettings;
}) {
  if (!isStudent) {
    return (
      <div className="px-3 py-2.5">
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <WandIcon className="w-4 h-4" />
            Translate tool
          </span>
          <span className="rounded-md bg-slate-100 border border-slate-200 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">
            Students only
          </span>
        </div>
        <a
          href={BECOME_STUDENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-block text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          Become a student
        </a>
      </div>
    );
  }

  const { enabled, lang } = settings;
  return (
    <div className="px-3 py-2.5">
      <div className="flex items-center justify-between gap-3">
        <span id="translate-label" className="flex items-center gap-2 text-sm font-medium text-slate-800">
          <WandIcon className="w-4 h-4 text-blue-600" />
          Translate tool
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-labelledby="translate-label"
          onClick={() => saveTranslateSettings({ enabled: !enabled })}
          className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
            enabled ? 'bg-blue-600' : 'bg-slate-300'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
              enabled ? 'translate-x-5' : ''
            }`}
          />
        </button>
      </div>

      <label className="mt-2 flex items-center gap-2 text-xs text-slate-500">
        Into
        <select
          value={lang}
          onChange={(e) => saveTranslateSettings({ lang: e.target.value as TranslateLangCode })}
          className="flex-1 min-w-0 rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          {TRANSLATE_LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.name}
            </option>
          ))}
        </select>
      </label>

      <p className="mt-1.5 text-xs text-slate-500 leading-snug">
        {enabled ? 'Highlight any word or sentence to translate it.' : 'Turn on, then highlight text to translate it.'}
      </p>
    </div>
  );
}
