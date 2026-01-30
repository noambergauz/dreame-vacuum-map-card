import type { SupportedLanguage } from '../../../i18n/locales';
import { useTranslation } from '../../../hooks';
import '../ActionButtons.scss';

interface StopButtonProps {
  onClick: () => void;
  language?: SupportedLanguage;
}

export function StopButton({ onClick, language = 'en' }: StopButtonProps) {
  const { t } = useTranslation(language);
  
  return (
    <button onClick={onClick} className="action-buttons__stop">
      <span className="action-buttons__icon">⏹️</span>
      <span>{t('actions.stop')}</span>
    </button>
  );
}
