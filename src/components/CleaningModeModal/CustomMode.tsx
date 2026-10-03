import { useCallback } from 'react';
import { useHomeAssistantServices, usePublishedSelect, useVacuumEntityIds, getEntityState } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useHass, useEntity, useMachineState } from '@/contexts';
import { publishedOptionList, selectOptionKey } from '@/utils';
import {
  CleaningModeSelector,
  SuctionPowerSelector,
  WetnessSlider,
  WaterVolumeSelector,
  MopPadHumiditySelector,
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
  mopPadHumidityList: string[];
  waterVolume: string;
  waterVolumeList: string[];
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
  mopPadHumidityList,
  waterVolume,
  waterVolumeList,
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
  onCleaningModeSelect,
  showOnlyCleaningModeSelector = false,
}: CustomModeProps) {
  const hass = useHass();
  const entity = useEntity();
  const { controls, phase, isCustomizedCleaning } = useMachineState();
  const { setSelectOption, setSwitch, setNumber, setFanSpeed } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds();
  const { t } = useTranslation();

  const hasWetnessLevel = Boolean(entityIds.wetnessLevel);
  const hasMopPadHumidity = Boolean(entityIds.mopPadHumidity);
  const hasWaterVolume = Boolean(entityIds.waterVolume) && !hasWetnessLevel && !hasMopPadHumidity;
  const hasSelfCleanFrequency = Boolean(entityIds.selfCleanFrequency);
  const hasCleaningRoute = Boolean(entityIds.cleaningRoute);

  const cleaningModeState = getEntityState(hass, entityIds.cleaningMode);
  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';
  const suctionAttributeList = publishedOptionList(entity.attributes.suction_level_list);
  const fanSpeedList = publishedOptionList(entity.attributes.fan_speed_list);
  const fanSpeed = typeof entity.attributes.fan_speed === 'string' ? entity.attributes.fan_speed : '';
  const waterDisplay = usePublishedSelect(waterVolumeList, publishedOptionList(entity.attributes.water_volume_list));
  const humidityDisplay = usePublishedSelect(
    mopPadHumidityList,
    publishedOptionList(entity.attributes.mop_pad_humidity_list)
  );
  const routeDisplay = usePublishedSelect(
    cleaningRouteList,
    publishedOptionList(entity.attributes.cleaning_route_list)
  );
  const frequencyDisplay = usePublishedSelect(
    selfCleanFrequencyList,
    publishedOptionList(entity.attributes.self_clean_frequency_list)
  );

  const handleCleaningModeSelect = onCleaningModeSelect ?? setSelectOption;

  const handleSuctionLevelSelect = useCallback(
    (_entityId: string, value: string) => {
      if (isInCleaningSession && !isCustomizedCleaning) {
        setFanSpeed(entity.entity_id, value);
      } else if (!isInCleaningSession && entityIds.suctionLevel) {
        setSelectOption(entityIds.suctionLevel, value);
      }
    },
    [isInCleaningSession, isCustomizedCleaning, setFanSpeed, setSelectOption, entity.entity_id, entityIds.suctionLevel]
  );

  const isCleaningModeSelectorDisabled =
    isInCleaningSession || (!showOnlyCleaningModeSelector && cleaningModeState.unavailable);
  const isSweeping = selectOptionKey(cleaningMode) === 'sweeping';

  return (
    <div className="cleaning-mode-modal__content">
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.cleaning_mode_title')}</h3>
        {entityIds.cleaningMode && (
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
        )}
      </section>

      {!showOnlyCleaningModeSelector && (
        <>
          {entityIds.suctionLevel && (
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.suction_power_title')}</h3>
              <SuctionPowerSelector
                suctionLevel={suctionLevel}
                suctionLevelList={suctionLevelList}
                attributeList={suctionAttributeList}
                fanSpeedList={fanSpeedList}
                fanSpeed={fanSpeed}
                cleaning={isInCleaningSession}
                maxSuctionPower={maxSuctionPower}
                onSelectSuctionLevel={handleSuctionLevelSelect}
                onToggleMaxPower={setSwitch}
                suctionLevelEntityId={entityIds.suctionLevel}
                maxSuctionPowerEntityId={entityIds.maxSuctionPower ?? entityIds.suctionLevel}
                maxPlusDescription={t('custom_mode.max_plus_description')}
                t={t}
                suctionLevelDisabled={!controls.canChangeSuctionPower}
                maxPowerDisabled={!controls.canToggleMaxPower}
                hideMaxPower={!entityIds.maxSuctionPower}
              />
            </section>
          )}

          {hasWaterVolume && entityIds.waterVolume && !isSweeping && waterDisplay.options.length > 0 && (
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.water_volume_title')}</h3>
              <WaterVolumeSelector
                waterVolume={waterVolume}
                waterVolumeList={waterDisplay.options}
                onSelect={setSelectOption}
                entityId={entityIds.waterVolume}
                t={t}
                disabled={!waterDisplay.clicksEnabled || !controls.canChangeWetness}
              />
            </section>
          )}

          {hasWetnessLevel && entityIds.wetnessLevel && !isSweeping && (
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

          {hasMopPadHumidity && entityIds.mopPadHumidity && !isSweeping && humidityDisplay.options.length > 0 && (
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.mop_pad_humidity_title')}</h3>
              <MopPadHumiditySelector
                mopPadHumidity={mopPadHumidity}
                mopPadHumidityList={humidityDisplay.options}
                onSelect={setSelectOption}
                entityId={entityIds.mopPadHumidity}
                t={t}
                disabled={!humidityDisplay.clicksEnabled || !controls.canChangeWetness}
              />
            </section>
          )}

          {hasSelfCleanFrequency &&
            entityIds.selfCleanFrequency &&
            entityIds.selfCleanArea &&
            entityIds.selfCleanTime && (
              <section className="cleaning-mode-modal__section">
                <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.mop_washing_frequency_title')}</h3>
                <MopWashingFrequency
                  selfCleanFrequency={selfCleanFrequency}
                  selfCleanFrequencyList={frequencyDisplay.options}
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
                  frequencyDisabled={!frequencyDisplay.clicksEnabled || !controls.canChangeMopFrequency}
                  areaDisabled={false}
                  timeDisabled={false}
                />
              </section>
            )}

          {hasCleaningRoute && entityIds.cleaningRoute && routeDisplay.options.length > 0 && (
            <section className="cleaning-mode-modal__section">
              <div className="cleaning-mode-modal__section-header">
                <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.route_title')}</h3>
              </div>
              <RouteSelector
                cleaningRoute={cleaningRoute}
                cleaningRouteList={routeDisplay.options}
                onSelect={setSelectOption}
                entityId={entityIds.cleaningRoute}
                disabled={!routeDisplay.clicksEnabled || !controls.canChangeRoute}
              />
            </section>
          )}
        </>
      )}
    </div>
  );
}
