import { locales, type SupportedLanguage } from './locales';

const CHROME_PACKS = new Set<string>(Object.keys(locales));

/** Home Assistant language codes that do not match a chrome pack name directly. */
const CHROME_ALIASES: Record<string, SupportedLanguage> = {
  'zh-hans': 'zh',
  'zh-hant': 'zh_TW',
  'zh-tw': 'zh_TW',
  'zh-hk': 'zh_TW',
  fr: 'fr_FR',
  'fr-fr': 'fr_FR',
  iw: 'he',
  hu: 'hu_HU',
  'hu-hu': 'hu_HU',
};

/** Chrome pack to the language code dreame_vacuum ships. */
const BACKEND_LANGUAGE: Record<SupportedLanguage, string> = {
  en: 'en',
  de: 'de',
  ru: 'ru',
  zh: 'zh-Hans',
  zh_TW: 'zh-Hant',
  es: 'es',
  nl: 'nl',
  it: 'it',
  pl: 'pl',
  fr_FR: 'fr',
  he: 'he',
  ko: 'ko',
  cs: 'cs',
  sk: 'sk',
  hu_HU: 'hu',
  uk: 'uk',
  lt: 'lt',
};

function languageCode(value: string): string {
  return value.trim().toLowerCase().replace(/_/g, '-');
}

export function normalizeChromeLanguage(code: string | undefined | null): SupportedLanguage {
  if (!code) return 'en';
  const normalized = languageCode(code);
  if (CHROME_PACKS.has(normalized)) return normalized as SupportedLanguage;
  const alias = CHROME_ALIASES[normalized];
  if (alias) return alias;
  const primary = normalized.split('-')[0];
  if (CHROME_PACKS.has(primary)) return primary as SupportedLanguage;
  return CHROME_ALIASES[primary] ?? 'en';
}

export function resolveChromeLanguage(
  configLanguage: string | undefined,
  hassLanguage: string | undefined
): SupportedLanguage {
  if (configLanguage && configLanguage !== 'auto') {
    return normalizeChromeLanguage(configLanguage);
  }
  return normalizeChromeLanguage(hassLanguage);
}

export function resolveBackendLanguage(configLanguage: string | undefined, hassLanguage: string | undefined): string {
  if (!configLanguage || configLanguage === 'auto') {
    return hassLanguage?.trim() ? hassLanguage : 'en';
  }
  return BACKEND_LANGUAGE[normalizeChromeLanguage(configLanguage)];
}
