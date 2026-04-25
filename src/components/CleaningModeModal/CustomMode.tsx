import { useCallback } from 'react';
import { useHomeAssistantServices, useVacuumEntityIds, getEntityState, useVacuumCapabilities } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useHass, useEntity, useMachineState } from '@/contexts';
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
  onCleaningModeSelect?: (entityId: string, value: string) => void;
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
  onCleaningModeSelect,
  showOnlyCleaningModeSelector = false,
}: CustomModeProps) {
  const hass = useHass();
  const entity = useEntity();
  const { controls, phase, isCustomizedCleaning } = useMachineState();
  const { setSelectOption, setSwitch, setNumber, setFanSpeed } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);
  const { t } = useTranslation();
  const capabilities = useVacuumCapabilities();

  const hasMaxSuctionPower = capabilities.has(CAPABILITY.MAX_SUCTION_POWER);
  const hasWetnessLevel = capabilities.has(CAPABILITY.WETNESS_LEVEL);
  const hasSelfCleanFrequency = capabilities.has(CAPABILITY.SELF_CLEAN_FREQUENCY);
  const hasCleaningRoute = capabilities.has(CAPABILITY.CLEANING_ROUTE);

  const cleaningModeState = getEntityState(hass, entityIds.cleaningMode);
  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';

  const handleCleaningModeSelect = onCleaningModeSelect ?? setSelectOption;

  const handleSuctionLevelSelect = useCallback(
    (_entityId: string, value: string) => {
      if (isInCleaningSession && !isCustomizedCleaning) {
        const suctionToFanSpeed: Record<string, string> = {
          quiet: 'silent',
          standard: 'standard',
          strong: 'strong',
          turbo: 'turbo',
        };
        setFanSpeed(entity.entity_id, suctionToFanSpeed[value] ?? value);
      } else if (!isInCleaningSession) {
        setSelectOption(entityIds.suctionLevel, value);
      }
    },
    [isInCleaningSession, isCustomizedCleaning, setFanSpeed, setSelectOption, entity.entity_id, entityIds.suctionLevel]
  );

  const isCleaningModeSelectorDisabled =
    isInCleaningSession || (!showOnlyCleaningModeSelector && cleaningModeState.unavailable);

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
          hideCustomize={isInCleaningSession}
          disabled={isCleaningModeSelectorDisabled}
        />
      </section>

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
              suctionLevelDisabled={!controls.canChangeSuctionPower}
              maxPowerDisabled={!controls.canToggleMaxPower}
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
                disabled={!controls.canChangeWetness}
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
                frequencyDisabled={!controls.canChangeMopFrequency}
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
                disabled={!controls.canChangeRoute}
              />
            </section>
          )}
        </>
      )}
    </div>
  );
}
