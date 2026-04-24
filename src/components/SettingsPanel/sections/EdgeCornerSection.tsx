import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState, getSelectState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './EdgeCornerSection.scss';

export function EdgeCornerSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  const handleToggle = useCallback(
    (switchEntitySuffix: string, newValue: boolean) => {
      const switchEntityId = `switch.${entityName}_${switchEntitySuffix}`;
      hass.callService('switch', newValue ? 'turn_on' : 'turn_off', {
        entity_id: switchEntityId,
      });
    },
    [hass, entityName]
  );

  const handleFrequencyChange = useCallback(
    (value: string) => {
      const selectEntityId = `select.${entityName}_mop_extend_frequency`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  // Get switch states
  const sideReachState = getSwitchState(hass, entityName, 'side_reach');
  const mopExtendState = getSwitchState(hass, entityName, 'mop_extend');
  const gapCleaningState = getSwitchState(hass, entityName, 'gap_cleaning_extension');
  const moppingUnderState = getSwitchState(hass, entityName, 'mopping_under_furnitures');

  // Get mop extend frequency select state
  const frequencyState = getSelectState(hass, entityName, 'mop_extend_frequency');
  const currentFrequency = frequencyState.state?.toLowerCase() ?? 'standard';

  // Get available options from entity, fallback to defaults
  const frequencyOptions = (hass.states[`select.${entityName}_mop_extend_frequency`]?.attributes
    ?.options as string[]) ?? ['standard', 'intelligent', 'high'];

  return (
    <div className="edge-corner-section">
      {/* Side Reach */}
      {!sideReachState.disabled && (
        <div className="edge-corner-section__item">
          <div className="edge-corner-section__info">
            <span className="edge-corner-section__label">{t('settings.edge_corner.side_reach')}</span>
            <span className="edge-corner-section__description">{t('settings.edge_corner.side_reach_desc')}</span>
          </div>
          <Toggle
            checked={sideReachState.isOn}
            disabled={sideReachState.unavailable}
            onChange={(checked) => handleToggle('side_reach', checked)}
          />
        </div>
      )}

      {/* Mop Extend */}
      {!mopExtendState.disabled && (
        <>
          <div className="edge-corner-section__item">
            <div className="edge-corner-section__info">
              <span className="edge-corner-section__label">{t('settings.edge_corner.mop_extend')}</span>
              <span className="edge-corner-section__description">{t('settings.edge_corner.mop_extend_desc')}</span>
            </div>
            <Toggle
              checked={mopExtendState.isOn}
              disabled={mopExtendState.unavailable}
              onChange={(checked) => handleToggle('mop_extend', checked)}
            />
          </div>

          {/* Sub-settings when mop_extend is ON */}
          {mopExtendState.isOn && (
            <div className="edge-corner-section__sub-settings">
              {/* Gap Cleaning Extension */}
              {!gapCleaningState.disabled && (
                <div className="edge-corner-section__item edge-corner-section__item--indented">
                  <div className="edge-corner-section__info">
                    <span className="edge-corner-section__label">{t('settings.edge_corner.gap_cleaning')}</span>
                    <span className="edge-corner-section__description">
                      {t('settings.edge_corner.gap_cleaning_desc')}
                    </span>
                  </div>
                  <Toggle
                    checked={gapCleaningState.isOn}
                    disabled={gapCleaningState.unavailable}
                    onChange={(checked) => handleToggle('gap_cleaning_extension', checked)}
                  />
                </div>
              )}

              {/* Mopping Under Furniture */}
              {!moppingUnderState.disabled && (
                <div className="edge-corner-section__item edge-corner-section__item--indented">
                  <div className="edge-corner-section__info">
                    <span className="edge-corner-section__label">{t('settings.edge_corner.mopping_under')}</span>
                    <span className="edge-corner-section__description">
                      {t('settings.edge_corner.mopping_under_desc')}
                    </span>
                  </div>
                  <Toggle
                    checked={moppingUnderState.isOn}
                    disabled={moppingUnderState.unavailable}
                    onChange={(checked) => handleToggle('mopping_under_furnitures', checked)}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
      {/* Mop Extend Frequency */}
      {!frequencyState.disabled && (
        <div className="edge-corner-section__item edge-corner-section__item--select">
          <div className="edge-corner-section__info">
            <span className="edge-corner-section__label">{t('settings.edge_corner.extend_frequency')}</span>
            <span className="edge-corner-section__description">{t('settings.edge_corner.extend_frequency_desc')}</span>
          </div>
          <select
            className="edge-corner-section__select"
            value={currentFrequency}
            disabled={frequencyState.unavailable}
            onChange={(e) => handleFrequencyChange(e.target.value)}
          >
            {frequencyOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {t(`settings.edge_corner.frequency_${option.toLowerCase()}`)}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
