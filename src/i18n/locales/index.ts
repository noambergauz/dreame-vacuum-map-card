import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { es } from './es';

export const locales = {
  en,
  de,
  ru,
  es
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
