import { locales, type SupportedLanguage } from './locales';

// Type for nested translation objects
type TranslationValue = string | { [key: string]: TranslationValue };

/**
 * Simple template replacement function
 * Replaces {{key}} patterns with values from params object
 */
function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;

  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
  }, template);
}

/**
 * Gets a nested value from an object using dot notation
 */
function getNestedValue(obj: TranslationValue, path: string): TranslationValue | undefined {
  return path.split('.').reduce<TranslationValue | undefined>((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return current[key];
    }
    return undefined;
  }, obj);
}

/**
 * Translation function creator
 */
export function createTranslator(language: SupportedLanguage = 'en') {
  const translations = locales[language] || locales.en;

  /**
   * Translate a key with optional interpolation parameters
   * @param key - Translation key in dot notation (e.g., 'room_selector.title')
   * @param params - Optional parameters for interpolation
   */
  return function t(key: string, params?: Record<string, string | number>): string {
    const value = getNestedValue(translations, key);

    if (typeof value !== 'string') {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }

    return interpolate(value, params);
  };
}

/**
 * Get the plural form for a count (handles EN, DE, and HE pluralization rules)
 */
export function getPluralKey(baseKey: string, count: number): string {
  // EN, DE, and HE use plural form when count !== 1
  return count === 1 ? baseKey : `${baseKey}_plural`;
}

/**
 * Helper to get room count translation
 */
export function getRoomCountTranslation(t: ReturnType<typeof createTranslator>, count: number): string {
  if (count === 0) {
    return t('actions.select_rooms');
  }

  const key = count === 1 ? 'actions.clean_rooms' : 'actions.clean_rooms_plural';
  return t(key, { count: String(count) });
}
