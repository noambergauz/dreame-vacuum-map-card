import { useHomeAssistantServices, useVacuumEntityIds, getEntityState, useVacuumCapabilities } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useHass } from '@/contexts';
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
  const { setSelectOption, setSwitch, setNumber } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);
  const { t } = useTranslation();
  const capabilities = useVacuumCapabilities();

  // Check capabilities for conditional rendering
  const hasMaxSuctionPower = capabilities.has(CAPABILITY.MAX_SUCTION_POWER);
  const hasWetnessLevel = capabilities.has(CAPABILITY.WETNESS_LEVEL);
  const hasSelfCleanFrequency = capabilities.has(CAPABILITY.SELF_CLEAN_FREQUENCY);
  const hasCleaningRoute = capabilities.has(CAPABILITY.CLEANING_ROUTE);

  // Get entity availability states
  const cleaningModeState = getEntityState(hass, entityIds.cleaningMode);
  const suctionLevelState = getEntityState(hass, entityIds.suctionLevel);
  const maxSuctionPowerState = getEntityState(hass, entityIds.maxSuctionPower);
  const wetnessLevelState = getEntityState(hass, entityIds.wetnessLevel);
  const selfCleanFrequencyState = getEntityState(hass, entityIds.selfCleanFrequency);
  const selfCleanAreaState = getEntityState(hass, entityIds.selfCleanArea);
  const selfCleanTimeState = getEntityState(hass, entityIds.selfCleanTime);
  const cleaningRouteState = getEntityState(hass, entityIds.cleaningRoute);

  // Use custom handler if provided, otherwise use default setSelectOption
  const handleCleaningModeSelect = onCleaningModeSelect || setSelectOption;

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
              onSelectSuctionLevel={setSelectOption}
              onToggleMaxPower={setSwitch}
              suctionLevelEntityId={entityIds.suctionLevel}
              maxSuctionPowerEntityId={entityIds.maxSuctionPower}
              maxPlusDescription={t('custom_mode.max_plus_description')}
              t={t}
              suctionLevelDisabled={isCleaning || suctionLevelState.unavailable}
              maxPowerDisabled={isCleaning || maxSuctionPowerState.unavailable}
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
                disabled={isCleaning || wetnessLevelState.unavailable}
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
                frequencyDisabled={isCleaning || selfCleanFrequencyState.unavailable}
                areaDisabled={isCleaning || selfCleanAreaState.unavailable}
                timeDisabled={isCleaning || selfCleanTimeState.unavailable}
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
                disabled={isCleaning || cleaningRouteState.unavailable}
              />
            </section>
          )}
        </>
      )}
    </div>
  );
}
