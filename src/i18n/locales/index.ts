import { en } from './en';
import { de } from './de';
import { ru } from './ru';

export const locales = {
  en,
  de,
  ru,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
