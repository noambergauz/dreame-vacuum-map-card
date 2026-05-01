import { useCallback } from 'react';
import { useTranslation, getButtonState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import type { EntityDefinition } from '@/config/entity-ui-mapping';
import './EntityRenderers.scss';

interface EntityButtonProps {
  definition: EntityDefinition;
  isChild?: boolean;
  buttonLabel?: string;
}

export function EntityButton({ definition, isChild = false, buttonLabel }: EntityButtonProps) {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  const buttonState = getButtonState(hass, entityName, definition.key);

  const handlePress = useCallback(() => {
    hass.callService('button', 'press', {
      entity_id: buttonState.entityId,
    });
  }, [hass, buttonState.entityId]);

  if (buttonState.disabled) return null;

  return (
    <div className={`entity-item ${isChild ? 'entity-item--child' : ''}`}>
      <div className="entity-item__info">
        <span className="entity-item__label">{t(definition.labelKey)}</span>
        {definition.descriptionKey && <span className="entity-item__description">{t(definition.descriptionKey)}</span>}
      </div>
      <button className="entity-item__button" disabled={buttonState.unavailable} onClick={handlePress}>
        {buttonLabel ?? t('common.run')}
      </button>
    </div>
  );
}
