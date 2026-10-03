import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { zh } from './zh';
import { es } from './es';
import { nl } from './nl';
import { it } from './it';
import { pl } from './pl';
import { fr_FR } from './fr_FR';
import { he } from './he';
import { ko } from './ko';
import { cs } from './cs';
import { sk } from './sk';
import { zh_TW } from './zh_TW';
import { hu_HU } from './hu_HU';
import { uk } from './uk';
import { lt } from './lt';

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
  cs,
  sk,
  hu_HU,
  uk,
  lt,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
