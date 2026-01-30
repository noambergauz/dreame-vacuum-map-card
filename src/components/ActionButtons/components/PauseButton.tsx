import type { SupportedLanguage } from '../../../i18n/locales';
import { useTranslation } from '../../../hooks';
import '../ActionButtons.scss';

interface PauseButtonProps {
  onClick: () => void;
  language?: SupportedLanguage;
}

export function PauseButton({ onClick, language = 'en' }: PauseButtonProps) {
  const { t } = useTranslation(language);
  
  return (
    <button onClick={onClick} className="action-buttons__pause">
      <span className="action-buttons__icon">⏸️</span>
      <span>{t('actions.pause')}</span>
    </button>
  );
}
