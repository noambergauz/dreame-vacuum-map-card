import type { SupportedLanguage } from '../../../i18n/locales';
import { useTranslation } from '../../../hooks';
import '../ActionButtons.scss';
import { PAUSE_CLEANING_ICON_SVG } from '../../../constants/icons';

interface PauseButtonProps {
  onClick: () => void;
  language?: SupportedLanguage;
}

export function PauseButton({ onClick, language = 'en' }: PauseButtonProps) {
  const { t } = useTranslation(language);
  
  return (
    <button onClick={onClick} className="action-buttons__pause">
      <span className="action-buttons__icon">{PAUSE_CLEANING_ICON_SVG}</span>
      <span>{t('actions.pause')}</span>
    </button>
  );
}
