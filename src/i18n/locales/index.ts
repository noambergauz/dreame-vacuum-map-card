import { en } from './en';
import { fr } from './fr';
import { de } from './de';
import { ru } from './ru';
import { zh } from './zh';
import { es } from './es';
import { nl } from './nl';
import { it } from './it';
import { pl } from './pl';

export const locales = {
  en,
  fr,
  de,
  ru,
  zh,
  es,
  nl,
  it,
  pl,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
