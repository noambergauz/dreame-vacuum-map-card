import { Modal } from '../common';
import type { Hass, HassEntity } from '../../types/homeassistant';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';
import './ShortcutsModal.scss';
import { SHORTCUT_START_CLEANING_ICON_SVG } from '../../constants/icons';

interface ShortcutData {
  name: string;
  [key: string]: unknown;
}

interface ShortcutsModalProps {
  opened: boolean;
  onClose: () => void;
  entity: HassEntity;
  hass: Hass;
  language?: SupportedLanguage;
}

export function ShortcutsModal({
  opened,
  onClose,
  entity,
  hass,
  language,
}: ShortcutsModalProps) {
  const { t } = useTranslation(language);
  const shortcutsObj = (entity.attributes.shortcuts || {}) as Record<string, ShortcutData>;
  const shortcuts = Object.entries(shortcutsObj).map(([id, data]) => ({
    id: parseInt(id),
    ...data,
  }));
  
  const handleShortcutClick = (shortcutId: number) => {
    hass.callService('dreame_vacuum', 'vacuum_start_shortcut', {
      entity_id: entity.entity_id,
      shortcut_id: shortcutId,
    });
    
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="shortcuts-modal">
        <h2 className="shortcuts-modal__title">{t('shortcuts.title')}</h2>
        
        {shortcuts.length === 0 ? (
          <div className="shortcuts-modal__empty">
            <p>{t('shortcuts.no_shortcuts')}</p>
            <p className="shortcuts-modal__empty-hint">
              {t('shortcuts.create_hint')}
            </p>
          </div>
        ) : (
          <div className="shortcuts-modal__list">
            {shortcuts.map((shortcut) => (
              <button
                key={shortcut.id}
                className="shortcuts-modal__item"
                onClick={() => handleShortcutClick(shortcut.id)}
              >
                <span className="shortcuts-modal__item-icon">{SHORTCUT_START_CLEANING_ICON_SVG}</span>
                <span className="shortcuts-modal__item-name">{shortcut.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
