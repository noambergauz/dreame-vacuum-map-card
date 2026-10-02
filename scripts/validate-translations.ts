/**
 * Translation Validation Script
 *
 * Validates that all translation files have the same keys as the English reference file.
 * Run with: tsx --tsconfig tsconfig.app.json scripts/validate-translations.ts
 */

import { locales, type SupportedLanguage } from '../src/i18n/locales';
import { entityLabelKeys } from '../src/config/entity-ui-mapping';

type NestedObject = { [key: string]: string | NestedObject };

/**
 * Recursively extract all keys from a nested object
 * Returns keys in dot notation (e.g., "settings.title", "vacuum_map.no_map")
 */
function extractKeys(obj: NestedObject, prefix = ''): string[] {
  const keys: string[] = [];

  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      keys.push(...extractKeys(value as NestedObject, fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys.sort();
}

/**
 * Compare two sets of keys and find differences
 */
function compareKeys(referenceKeys: string[], targetKeys: string[]): { missing: string[]; extra: string[] } {
  const referenceSet = new Set(referenceKeys);
  const targetSet = new Set(targetKeys);

  const missing = referenceKeys.filter((key) => !targetSet.has(key));
  const extra = targetKeys.filter((key) => !referenceSet.has(key));

  return { missing, extra };
}

/**
 * Main validation function
 */
function validateTranslations(): boolean {
  const referenceLocale = 'en' as SupportedLanguage;
  const referenceTranslation = locales[referenceLocale];
  const referenceKeys = extractKeys(referenceTranslation as unknown as NestedObject);
  const optionalLabelKeys = entityLabelKeys();
  const requiredKeys = referenceKeys.filter((key) => !optionalLabelKeys.has(key));

  console.log(`\n📋 Reference locale: ${referenceLocale} (${referenceKeys.length} keys)\n`);

  let hasErrors = false;
  const localeNames = Object.keys(locales) as SupportedLanguage[];

  for (const localeName of localeNames) {
    if (localeName === referenceLocale) continue;

    const translation = locales[localeName];
    const translationKeys = extractKeys(translation as unknown as NestedObject);
    const { missing, extra } = compareKeys(referenceKeys, translationKeys);
    const requiredMissing = missing.filter((key) => requiredKeys.includes(key));

    if (requiredMissing.length === 0 && extra.length === 0) {
      console.log(`✅ ${localeName}: All ${translationKeys.length} keys present`);
    } else {
      hasErrors = true;
      console.log(`\n❌ ${localeName}: Found issues`);

      if (requiredMissing.length > 0) {
        console.log(`   Missing keys (${requiredMissing.length}):`);
        for (const key of requiredMissing) {
          console.log(`     - ${key}`);
        }
      }

      if (extra.length > 0) {
        console.log(`   Extra keys (${extra.length}):`);
        for (const key of extra) {
          console.log(`     - ${key}`);
        }
      }
    }
  }

  console.log('');

  if (hasErrors) {
    console.log('❌ Translation validation failed!\n');
    return false;
  } else {
    console.log('✅ All translations are complete!\n');
    return true;
  }
}

// Run validation
const isValid = validateTranslations();
process.exit(isValid ? 0 : 1);
