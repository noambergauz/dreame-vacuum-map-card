import { useCallback } from 'react';
import { Map, RotateCw } from 'lucide-react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState, getSelectState, getButtonState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './MapSettingsSection.scss';

const MAP_ROTATION_OPTIONS = ['0', '90', '180', '270'] as const;

export function MapSettingsSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  // Get entity states
  const multiFloorMapState = getSwitchState(hass, entityName, 'multi_floor_map');
  const mapRotationState = getSelectState(hass, entityName, 'map_rotation');
  const startMappingState = getButtonState(hass, entityName, 'start_mapping');
  const startFastMappingState = getButtonState(hass, entityName, 'start_fast_mapping');

  const handleToggle = useCallback(
    (switchEntitySuffix: string, newValue: boolean) => {
      const switchEntityId = `switch.${entityName}_${switchEntitySuffix}`;
      hass.callService('switch', newValue ? 'turn_on' : 'turn_off', {
        entity_id: switchEntityId,
      });
    },
    [hass, entityName]
  );

  const handleRotationChange = useCallback(
    (value: string) => {
      const selectEntityId = `select.${entityName}_map_rotation`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  const handleButtonPress = useCallback(
    (buttonEntitySuffix: string) => {
      const buttonEntityId = `button.${entityName}_${buttonEntitySuffix}`;
      hass.callService('button', 'press', {
        entity_id: buttonEntityId,
      });
    },
    [hass, entityName]
  );

  const hasAnyEntity =
    !multiFloorMapState.disabled ||
    !mapRotationState.disabled ||
    !startMappingState.disabled ||
    !startFastMappingState.disabled;

  if (!hasAnyEntity) return null;

  return (
    <div className="map-settings-section">
      {/* Multi-floor map toggle */}
      {!multiFloorMapState.disabled && (
        <div className="map-settings-section__item">
          <div className="map-settings-section__info">
            <span className="map-settings-section__label">{t('settings.map.multi_floor')}</span>
            <span className="map-settings-section__description">{t('settings.map.multi_floor_desc')}</span>
          </div>
          <Toggle
            checked={multiFloorMapState.isOn}
            disabled={multiFloorMapState.unavailable}
            onChange={(checked) => handleToggle('multi_floor_map', checked)}
          />
        </div>
      )}

      {/* Map rotation select */}
      {!mapRotationState.disabled && (
        <div className="map-settings-section__item map-settings-section__item--select">
          <div className="map-settings-section__info">
            <span className="map-settings-section__label">{t('settings.map.rotation')}</span>
            <span className="map-settings-section__description">{t('settings.map.rotation_desc')}</span>
          </div>
          <select
            className="map-settings-section__select"
            value={mapRotationState.state ?? '0'}
            disabled={mapRotationState.unavailable}
            onChange={(e) => handleRotationChange(e.target.value)}
          >
            {MAP_ROTATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}°
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Mapping action buttons */}
      {(!startMappingState.disabled || !startFastMappingState.disabled) && (
        <div className="map-settings-section__actions">
          <span className="map-settings-section__actions-label">{t('settings.map.mapping_actions')}</span>
          <div className="map-settings-section__actions-grid">
            {!startMappingState.disabled && (
              <button
                type="button"
                className="map-settings-section__action-button"
                disabled={startMappingState.unavailable}
                onClick={() => handleButtonPress('start_mapping')}
              >
                <div className="map-settings-section__action-icon">
                  <Map size={20} />
                </div>
                <span className="map-settings-section__action-label">{t('settings.map.start_mapping')}</span>
              </button>
            )}

            {!startFastMappingState.disabled && (
              <button
                type="button"
                className="map-settings-section__action-button"
                disabled={startFastMappingState.unavailable}
                onClick={() => handleButtonPress('start_fast_mapping')}
              >
                <div className="map-settings-section__action-icon">
                  <RotateCw size={20} />
                </div>
                <span className="map-settings-section__action-label">{t('settings.map.start_fast_mapping')}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
