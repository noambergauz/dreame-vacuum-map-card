import { useHomeAssistantServices, useVacuumEntityIds } from '../../hooks';
import { useTranslation } from '../../hooks/useTranslation';
import { useHass } from '../../contexts';
import { CLEANING_MODE } from '../../constants';
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
}: CustomModeProps) {
  const hass = useHass();
  const { setSelectOption, setSwitch, setNumber } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);
  const { t } = useTranslation();

  return (
    <div className="cleaning-mode-modal__content">
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.cleaning_mode_title')}</h3>
        <CleaningModeSelector
          cleaningMode={cleaningMode}
          cleaningModeList={cleaningModeList}
          onSelect={setSelectOption}
          entityId={entityIds.cleaningMode}
          t={t}
        />
      </section>

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
        />
      </section>

      {cleaningMode !== CLEANING_MODE.SWEEPING && (
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
          />
        </section>
      )}

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
        />
      </section>

      <section className="cleaning-mode-modal__section">
        <div className="cleaning-mode-modal__section-header">
          <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.route_title')}</h3>
        </div>
        <RouteSelector
          cleaningRoute={cleaningRoute}
          cleaningRouteList={cleaningRouteList}
          onSelect={setSelectOption}
          entityId={entityIds.cleaningRoute}
        />
      </section>
    </div>
  );
}
