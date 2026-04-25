import { useCallback } from 'react';
import { useHomeAssistantServices, useVacuumEntityIds, getEntityState, useVacuumCapabilities } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useHass, useEntity } from '@/contexts';
import { CLEANING_MODE, CAPABILITY } from '@/constants';
import {
  CleaningModeSelector,
  SuctionPowerSelector,
  WetnessSlider,
  MopWashingFrequency,
  RouteSelector,
} from './components';

interface CustomModeProps {
  cleaningMode: string;
  cleaningModeList: string[];
  suctionLevel: string;
  suctionLevelList: string[];
  wetnessLevel: number;
  mopPadHumidity: string;
  cleaningRoute: string;
  cleaningRouteList: string[];
  maxSuctionPower: boolean;
  selfCleanArea: number;
  selfCleanFrequency: string;
  selfCleanFrequencyList: string[];
  selfCleanAreaMin: number;
  selfCleanAreaMax: number;
  selfCleanTime: number;
  selfCleanTimeMin: number;
  selfCleanTimeMax: number;
  baseEntityId: string;
  /** When true, disables settings that cannot be changed while cleaning */
  isCleaning?: boolean;
  /** Custom handler for cleaning mode selection (used for Customize mode) */
  onCleaningModeSelect?: (entityId: string, value: string) => void;
  /** When true, only show the cleaning mode selector (used when Customize is selected) */
  showOnlyCleaningModeSelector?: boolean;
}

export function CustomMode({
  cleaningMode,
  cleaningModeList,
  suctionLevel,
  suctionLevelList,
  wetnessLevel,
  mopPadHumidity,
  cleaningRoute,
  cleaningRouteList,
  maxSuctionPower,
  selfCleanArea,
  selfCleanFrequency,
  selfCleanFrequencyList,
  selfCleanAreaMin,
  selfCleanAreaMax,
  selfCleanTime,
  selfCleanTimeMin,
  selfCleanTimeMax,
  baseEntityId,
  isCleaning = false,
  onCleaningModeSelect,
  showOnlyCleaningModeSelector = false,
}: CustomModeProps) {
  const hass = useHass();
  const entity = useEntity();
  const { setSelectOption, setSwitch, setNumber, setFanSpeed } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);
  const { t } = useTranslation();
  const capabilities = useVacuumCapabilities();

  // Check capabilities for conditional rendering
  const hasMaxSuctionPower = capabilities.has(CAPABILITY.MAX_SUCTION_POWER);
  const hasWetnessLevel = capabilities.has(CAPABILITY.WETNESS_LEVEL);
  const hasSelfCleanFrequency = capabilities.has(CAPABILITY.SELF_CLEAN_FREQUENCY);
  const hasCleaningRoute = capabilities.has(CAPABILITY.CLEANING_ROUTE);

  // Check if customized cleaning is active from vacuum entity attributes
  // The vacuum entity's customized_cleaning attribute is true only when:
  // - customized_cleaning switch is on AND
  // - NOT zone_cleaning AND NOT spot_cleaning
  // This is the correct check for whether fan_speed can be changed during cleaning
  const isCustomizedCleaningActive = entity.attributes.customized_cleaning === true;

  // Get entity availability states
  const cleaningModeState = getEntityState(hass, entityIds.cleaningMode);

  // Check if robot is currently in mopping phase by reading state sensor
  // sensor.{base}_state can be "mopping", "sweeping", "idle", etc.
  const stateSensorState = getEntityState(hass, entityIds.stateSensor);
  const isCurrentlyInDisabledState =
    stateSensorState.state === 'mopping' || stateSensorState.state === 'paused' || stateSensorState.state === 'washing';

  // Use custom handler if provided, otherwise use default setSelectOption
  const handleCleaningModeSelect = onCleaningModeSelect || setSelectOption;

  // Handler for suction level changes
  // During cleaning (without customized cleaning), use vacuum.set_fan_speed service
  // which works when select entity is unavailable.
  // When customized_cleaning is enabled, suction cannot be changed globally - each room has its own settings.
  const handleSuctionLevelSelect = useCallback(
    (_entityId: string, value: string) => {
      if (isCleaning && !isCustomizedCleaningActive) {
        // Map suction level names to fan_speed values
        // The select entity uses "Quiet" but vacuum.set_fan_speed expects "Silent"
        const suctionToFanSpeed: Record<string, string> = {
          quiet: 'silent',
          standard: 'standard',
          strong: 'strong',
          turbo: 'turbo',
        };
        // Use vacuum.set_fan_speed - map suction level to fan speed name
        const fanSpeed = suctionToFanSpeed[value] || value;
        setFanSpeed(entity.entity_id, fanSpeed);
      } else if (!isCleaning) {
        // Use select.select_option when not cleaning
        setSelectOption(entityIds.suctionLevel, value);
      }
      // When isCleaning && isCustomizedCleaningActive, do nothing - can't change suction globally
    },
    [isCleaning, isCustomizedCleaningActive, setFanSpeed, setSelectOption, entity.entity_id, entityIds.suctionLevel]
  );

  // Suction level is disabled when:
  // 1. Cleaning with customized cleaning enabled (per-room settings override global suction)
  // 2. Cleaning mode is "Mopping" (mop-only mode doesn't use suction)
  // 3. Robot is currently in the mopping phase (e.g., mopping phase of "Mopping after sweeping")
  const isMoppingOnly = cleaningMode === CLEANING_MODE.MOPPING;
  const isSuctionLevelDisabled =
    (isCleaning && isCustomizedCleaningActive) || isMoppingOnly || isCurrentlyInDisabledState;

  // In Customize mode, the cleaning_mode entity becomes unavailable (per-room settings override it).
  // Allow mode switching so users can exit Customize mode - clicking another mode turns off
  // customized_cleaning first, which makes the cleaning_mode entity available again.
  const isCleaningModeSelectorDisabled = isCleaning || (!showOnlyCleaningModeSelector && cleaningModeState.unavailable);

  return (
    <div className="cleaning-mode-modal__content">
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.cleaning_mode_title')}</h3>
        <CleaningModeSelector
          cleaningMode={cleaningMode}
          cleaningModeList={cleaningModeList}
          onSelect={handleCleaningModeSelect}
          entityId={entityIds.cleaningMode}
          t={t}
          customizeSelected={showOnlyCleaningModeSelector}
          hideCustomize={isCleaning}
          disabled={isCleaningModeSelectorDisabled}
        />
      </section>

      {/* Only show these sections when not in customize mode */}
      {!showOnlyCleaningModeSelector && (
        <>
          <section className="cleaning-mode-modal__section">
            <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.suction_power_title')}</h3>
            <SuctionPowerSelector
              suctionLevel={suctionLevel}
              suctionLevelList={suctionLevelList}
              maxSuctionPower={maxSuctionPower}
              onSelectSuctionLevel={handleSuctionLevelSelect}
              onToggleMaxPower={setSwitch}
              suctionLevelEntityId={entityIds.suctionLevel}
              maxSuctionPowerEntityId={entityIds.maxSuctionPower}
              maxPlusDescription={t('custom_mode.max_plus_description')}
              t={t}
              suctionLevelDisabled={isSuctionLevelDisabled}
              maxPowerDisabled={isCleaning}
              hideMaxPower={!hasMaxSuctionPower}
            />
          </section>

          {hasWetnessLevel && cleaningMode !== CLEANING_MODE.SWEEPING && (
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.wetness_title')}</h3>
              <WetnessSlider
                wetnessLevel={wetnessLevel}
                mopPadHumidity={mopPadHumidity}
                onChangeWetness={setNumber}
                entityId={entityIds.wetnessLevel}
                slightlyDryLabel={t('custom_mode.slightly_dry')}
                moistLabel={t('custom_mode.moist')}
                wetLabel={t('custom_mode.wet')}
                disabled={isCleaning}
              />
            </section>
          )}

          {hasSelfCleanFrequency && (
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.mop_washing_frequency_title')}</h3>
              <MopWashingFrequency
                selfCleanFrequency={selfCleanFrequency}
                selfCleanFrequencyList={selfCleanFrequencyList}
                selfCleanArea={selfCleanArea}
                selfCleanAreaMin={selfCleanAreaMin}
                selfCleanAreaMax={selfCleanAreaMax}
                selfCleanTime={selfCleanTime}
                selfCleanTimeMin={selfCleanTimeMin}
                selfCleanTimeMax={selfCleanTimeMax}
                onSelectFrequency={setSelectOption}
                onChangeArea={setNumber}
                onChangeTime={setNumber}
                frequencyEntityId={entityIds.selfCleanFrequency}
                areaEntityId={entityIds.selfCleanArea}
                timeEntityId={entityIds.selfCleanTime}
                t={t}
                frequencyDisabled={isCleaning}
                areaDisabled={false}
                timeDisabled={false}
              />
            </section>
          )}

          {hasCleaningRoute && cleaningRouteList.length > 0 && (
            <section className="cleaning-mode-modal__section">
              <div className="cleaning-mode-modal__section-header">
                <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.route_title')}</h3>
              </div>
              <RouteSelector
                cleaningRoute={cleaningRoute}
                cleaningRouteList={cleaningRouteList}
                onSelect={setSelectOption}
                entityId={entityIds.cleaningRoute}
                disabled={isCleaning}
              />
            </section>
          )}
        </>
      )}
    </div>
  );
}
