import type { SupportedLanguage } from '../../../i18n/locales';
import { useTranslation } from '../../../hooks';
import '../ActionButtons.scss';

interface ResumeButtonProps {
  onClick: () => void;
  language?: SupportedLanguage;
}

export function ResumeButton({ onClick, language = 'en' }: ResumeButtonProps) {
  const { t } = useTranslation(language);
  
  return (
    <button onClick={onClick} className="action-buttons__resume">
      <span className="action-buttons__icon">▶️</span>
      <span>{t('actions.resume')}</span>
    </button>
  );
}
