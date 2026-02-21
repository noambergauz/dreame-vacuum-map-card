import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { zh } from './zh';

export const locales = {
  en,
  de,
  ru,
  zh,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
