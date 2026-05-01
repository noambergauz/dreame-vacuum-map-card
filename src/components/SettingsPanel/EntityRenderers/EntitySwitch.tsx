import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import type { EntityDefinition } from '@/config/entity-ui-mapping';
import './EntityRenderers.scss';

interface EntitySwitchProps {
  definition: EntityDefinition;
  isChild?: boolean;
}

export function EntitySwitch({ definition, isChild = false }: EntitySwitchProps) {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  const switchState = getSwitchState(hass, entityName, definition.key);

  const handleToggle = useCallback(
    (newValue: boolean) => {
      hass.callService('switch', newValue ? 'turn_on' : 'turn_off', {
        entity_id: switchState.entityId,
      });
    },
    [hass, switchState.entityId]
  );

  if (switchState.disabled) return null;

  return (
    <div className={`entity-item ${isChild ? 'entity-item--child' : ''}`}>
      <div className="entity-item__info">
        <span className="entity-item__label">{t(definition.labelKey)}</span>
        {definition.descriptionKey && <span className="entity-item__description">{t(definition.descriptionKey)}</span>}
      </div>
      <Toggle checked={switchState.isOn} disabled={switchState.unavailable} onChange={handleToggle} />
    </div>
  );
}
