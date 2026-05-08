import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { zh } from './zh';
import { zh_TW } from './zh_TW';
import { es } from './es';
import { nl } from './nl';
import { it } from './it';
import { pl } from './pl';
import { fr_FR } from './fr_FR';
import { he } from './he';
import { ko } from './ko';

export const locales = {
  en,
  de,
  ru,
  zh,
  zh_TW,
  es,
  nl,
  it,
  pl,
  fr_FR,
  he,
  ko,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
