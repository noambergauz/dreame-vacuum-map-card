import { en } from './en';
import { de } from './de';

export const locales = {
  en,
  de,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
