import { useCallback } from 'react';
import { SegmentedControl } from '@/components/common';
import { useTranslation, getSelectState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import type { EntityDefinition } from '@/config/entity-ui-mapping';
import './EntityRenderers.scss';

interface EntitySelectProps {
  definition: EntityDefinition;
  isChild?: boolean;
}

function formatOptionLabel(option: string): string {
  return option
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function EntitySelect({ definition, isChild = false }: EntitySelectProps) {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';
  const entityId = `select.${entityName}_${definition.key}`;

  const selectState = getSelectState(hass, entityName, definition.key);
  const options = (selectState.attributes.options as string[]) ?? [];

  const handleChange = useCallback(
    (value: string) => {
      hass.callService('select', 'select_option', {
        entity_id: entityId,
        option: value,
      });
    },
    [hass, entityId]
  );

  if (selectState.disabled || options.length === 0) return null;

  const currentValue = selectState.state ?? options[0] ?? '';

  if (definition.useSegmentedControl) {
    const segmentOptions = options.map((option) => ({
      value: option,
      label: formatOptionLabel(option),
    }));

    return (
      <div className={`entity-item entity-item--segmented ${isChild ? 'entity-item--child' : ''}`}>
        <div className="entity-item__info">
          <span className="entity-item__label">{t(definition.labelKey)}</span>
          {definition.descriptionKey && (
            <span className="entity-item__description">{t(definition.descriptionKey)}</span>
          )}
        </div>
        <SegmentedControl
          options={segmentOptions}
          value={currentValue}
          onChange={handleChange}
          disabled={selectState.unavailable}
        />
      </div>
    );
  }

  return (
    <div className={`entity-item entity-item--select ${isChild ? 'entity-item--child' : ''}`}>
      <div className="entity-item__info">
        <span className="entity-item__label">{t(definition.labelKey)}</span>
        {definition.descriptionKey && <span className="entity-item__description">{t(definition.descriptionKey)}</span>}
      </div>
      <select
        className="entity-item__select"
        value={currentValue}
        disabled={selectState.unavailable}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {formatOptionLabel(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
