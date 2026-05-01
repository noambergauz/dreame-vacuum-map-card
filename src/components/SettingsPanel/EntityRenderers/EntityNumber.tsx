import { useCallback } from 'react';
import { useTranslation, getNumberState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import type { EntityDefinition } from '@/config/entity-ui-mapping';
import './EntityRenderers.scss';

interface EntityNumberProps {
  definition: EntityDefinition;
  isChild?: boolean;
}

export function EntityNumber({ definition, isChild = false }: EntityNumberProps) {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  const numberState = getNumberState(hass, entityName, definition.key);

  const min = definition.min ?? (numberState.attributes.min as number) ?? 0;
  const max = definition.max ?? (numberState.attributes.max as number) ?? 100;
  const step = definition.step ?? (numberState.attributes.step as number) ?? 1;

  const handleChange = useCallback(
    (value: number) => {
      hass.callService('number', 'set_value', {
        entity_id: numberState.entityId,
        value,
      });
    },
    [hass, numberState.entityId]
  );

  if (numberState.disabled) return null;

  const renderHint = definition.renderHint ?? 'slider';
  const sliderClass =
    renderHint === 'volume'
      ? 'entity-item__slider--volume'
      : renderHint === 'brightness'
        ? 'entity-item__slider--brightness'
        : '';

  return (
    <div className={`entity-item entity-item--slider ${isChild ? 'entity-item--child' : ''}`}>
      <div className="entity-item__info">
        <span className="entity-item__label">{t(definition.labelKey)}</span>
        {definition.descriptionKey && <span className="entity-item__description">{t(definition.descriptionKey)}</span>}
      </div>
      <div className={`entity-item__slider-container ${sliderClass}`}>
        <input
          type="range"
          className="entity-item__slider"
          min={min}
          max={max}
          step={step}
          value={numberState.numericValue}
          disabled={numberState.unavailable}
          onChange={(e) => handleChange(Number(e.target.value))}
        />
        <span className="entity-item__slider-value">
          {Math.round(numberState.numericValue)}
          {renderHint === 'volume' || renderHint === 'brightness' ? '%' : ''}
        </span>
      </div>
    </div>
  );
}
