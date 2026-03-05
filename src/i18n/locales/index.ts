import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { zh } from './zh';
import { es } from './es';
import { nl } from './nl';
import { it } from './it';
import { pl } from './pl';
import { fr } from './fr';

export const locales = {
  en,
  de,
  ru,
  zh,
  es,
  nl,
  it,
  pl,
  fr,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
