import { useCallback, useMemo } from 'react';
import { Toggle, SegmentedControl } from '@/components/common';
import { useTranslation, getSwitchState, getSelectState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './CarpetSettingsSection.scss';

interface CarpetToggle {
  key: string;
  labelKey: string;
  descriptionKey: string;
  switchEntitySuffix: string;
}

const CARPET_TOGGLES: CarpetToggle[] = [
  {
    key: 'clean_carpets_first',
    labelKey: 'settings.carpet.clean_carpets_first',
    descriptionKey: 'settings.carpet.clean_carpets_first_desc',
    switchEntitySuffix: 'clean_carpets_first',
  },
  {
    key: 'carpet_boost',
    labelKey: 'settings.carpet.carpet_boost',
    descriptionKey: 'settings.carpet.carpet_boost_desc',
    switchEntitySuffix: 'carpet_boost',
  },
  {
    key: 'intensive_carpet_cleaning',
    labelKey: 'settings.carpet.intensive_cleaning',
    descriptionKey: 'settings.carpet.intensive_cleaning_desc',
    switchEntitySuffix: 'intensive_carpet_cleaning',
  },
  {
    key: 'side_brush_carpet_rotate',
    labelKey: 'settings.carpet.side_brush_rotate',
    descriptionKey: 'settings.carpet.side_brush_rotate_desc',
    switchEntitySuffix: 'side_brush_carpet_rotate',
  },
];

const CARPET_SENSITIVITY_OPTIONS = ['low', 'medium', 'high'] as const;

// Main carpet cleaning modes - these map to UI buttons
type CarpetMainMode = 'vacuum' | 'vacuum_and_mop' | 'avoidance' | 'ignore';

// Sub-options when "vacuum" mode is selected
const VACUUM_SUB_OPTIONS = ['adaptation', 'remove_mop'] as const;

// Map entity state to main mode for UI display
function getMainModeFromState(state: string): CarpetMainMode {
  const lower = state.toLowerCase();
  if (lower === 'adaptation' || lower === 'remove_mop' || lower === 'adaptation_without_route') {
    return 'vacuum';
  }
  if (lower === 'vacuum_and_mop') return 'vacuum_and_mop';
  if (lower === 'avoidance') return 'avoidance';
  return 'ignore';
}

// Map main mode to default entity value
function getDefaultEntityValue(mode: CarpetMainMode): string {
  if (mode === 'vacuum') return 'adaptation';
  return mode;
}

export function CarpetSettingsSection() {
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

  const handleSensitivityChange = useCallback(
    (value: string) => {
      const selectEntityId = `select.${entityName}_carpet_sensitivity`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  const handleCarpetCleaningChange = useCallback(
    (value: string) => {
      const selectEntityId = `select.${entityName}_carpet_cleaning`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  // Get carpet sensitivity select entity state
  const sensitivityState = getSelectState(hass, entityName, 'carpet_sensitivity');
  const currentSensitivity = sensitivityState.state?.toLowerCase() ?? 'medium';

  // Get carpet cleaning mode select entity state
  const carpetCleaningState = getSelectState(hass, entityName, 'carpet_cleaning');
  const currentEntityState = carpetCleaningState.state?.toLowerCase() ?? 'ignore';
  const currentMainMode = getMainModeFromState(currentEntityState);

  // Check if current state is a vacuum sub-option
  const isVacuumMode = currentMainMode === 'vacuum';
  const currentVacuumSubOption = isVacuumMode ? currentEntityState : 'adaptation';

  // Main mode options for segmented control
  const mainModeOptions = useMemo(
    () => [
      { value: 'vacuum', label: t('settings.carpet.mode_vacuum') },
      { value: 'vacuum_and_mop', label: t('settings.carpet.mode_vacuum_and_mop') },
      { value: 'avoidance', label: t('settings.carpet.mode_avoidance') },
      { value: 'ignore', label: t('settings.carpet.mode_ignore') },
    ],
    [t]
  );

  // Handle main mode change
  const handleMainModeChange = useCallback(
    (mode: string) => {
      const entityValue = getDefaultEntityValue(mode as CarpetMainMode);
      handleCarpetCleaningChange(entityValue);
    },
    [handleCarpetCleaningChange]
  );

  // Handle vacuum sub-option change
  const handleVacuumSubOptionChange = useCallback(
    (value: string) => {
      handleCarpetCleaningChange(value);
    },
    [handleCarpetCleaningChange]
  );

  return (
    <div className="carpet-settings-section">
      {/* Carpet cleaning mode selector */}
      {!carpetCleaningState.disabled && (
        <div className="carpet-settings-section__mode-selector">
          <div className="carpet-settings-section__info">
            <span className="carpet-settings-section__label">{t('settings.carpet.cleaning_mode')}</span>
            <span className="carpet-settings-section__description">{t('settings.carpet.cleaning_mode_desc')}</span>
          </div>
          <SegmentedControl
            options={mainModeOptions}
            value={currentMainMode}
            onChange={handleMainModeChange}
            disabled={carpetCleaningState.unavailable}
          />

          {/* Vacuum sub-options - only show when vacuum mode is selected */}
          {isVacuumMode && (
            <div className="carpet-settings-section__sub-options">
              <span className="carpet-settings-section__sub-label">{t('settings.carpet.vacuum_mode')}</span>
              <div className="carpet-settings-section__sub-buttons">
                {VACUUM_SUB_OPTIONS.map((option) => (
                  <button
                    key={option}
                    className={`carpet-settings-section__sub-button ${currentVacuumSubOption === option ? 'carpet-settings-section__sub-button--active' : ''}`}
                    onClick={() => handleVacuumSubOptionChange(option)}
                    disabled={carpetCleaningState.unavailable}
                  >
                    {t(`settings.carpet.vacuum_${option}`)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Toggle switches */}
      {CARPET_TOGGLES.map((setting) => {
        const switchState = getSwitchState(hass, entityName, setting.switchEntitySuffix);
        return (
          <div key={setting.key} className="carpet-settings-section__item">
            <div className="carpet-settings-section__info">
              <span className="carpet-settings-section__label">{t(setting.labelKey)}</span>
              <span className="carpet-settings-section__description">{t(setting.descriptionKey)}</span>
            </div>
            <Toggle
              checked={switchState.isOn}
              disabled={switchState.disabled}
              onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
            />
          </div>
        );
      })}

      {/* Carpet sensitivity select */}
      {!sensitivityState.disabled && (
        <div className="carpet-settings-section__item carpet-settings-section__item--select">
          <div className="carpet-settings-section__info">
            <span className="carpet-settings-section__label">{t('settings.carpet.sensitivity')}</span>
            <span className="carpet-settings-section__description">{t('settings.carpet.sensitivity_desc')}</span>
          </div>
          <select
            className="carpet-settings-section__select"
            value={currentSensitivity}
            disabled={sensitivityState.unavailable}
            onChange={(e) => handleSensitivityChange(e.target.value)}
          >
            {CARPET_SENSITIVITY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {t(`settings.carpet.sensitivity_${option}`)}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
