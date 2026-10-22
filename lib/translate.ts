'use client';
/* Translate tool settings, remembered on this device and shared between the menu and the highlighter. */
import { useEffect, useState } from 'react';
import { languageName, type TranslateLangCode } from '@/lib/translateLanguages';

const KEY_ON = 'ps-translate-on';
const KEY_LANG = 'ps-translate-lang';
const EVENT = 'ps-translate-change';

export interface TranslateSettings {
  enabled: boolean;
  lang: TranslateLangCode;
}

function read(): TranslateSettings {
  try {
    const lang = localStorage.getItem(KEY_LANG) ?? 'es';
    return {
      enabled: localStorage.getItem(KEY_ON) === '1',
      lang: (languageName(lang) ? lang : 'es') as TranslateLangCode,
    };
  } catch {
    return { enabled: false, lang: 'es' };
  }
}

export function saveTranslateSettings(next: Partial<TranslateSettings>) {
  try {
    if (next.enabled !== undefined) localStorage.setItem(KEY_ON, next.enabled ? '1' : '0');
    if (next.lang) localStorage.setItem(KEY_LANG, next.lang);
  } catch {
    // storage blocked (private mode) — the setting just won't persist
  }
  window.dispatchEvent(new Event(EVENT));
}

export function useTranslateSettings(): TranslateSettings {
  const [settings, setSettings] = useState<TranslateSettings>({ enabled: false, lang: 'es' });
  useEffect(() => {
    const sync = () => setSettings(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync); // other tabs
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);
  return settings;
}
