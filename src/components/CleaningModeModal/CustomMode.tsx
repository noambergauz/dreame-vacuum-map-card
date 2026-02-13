import { Toggle, CircularButton } from '../common';
import type { Hass } from '../../types/homeassistant';
import type { CleaningMode, SuctionLevel, CleaningRoute, SelfCleanFrequency } from '../../types/vacuum';
import { useHomeAssistantServices, useVacuumEntityIds } from '../../hooks';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';
import {
  getCleaningModeIcon,
  getSuctionLevelIcon,
  getCleaningRouteIcon,
  getSelfCleanFrequencyIcon,
  convertCleaningModeToService,
  convertSelfCleanFrequencyToService,
  convertToLowerCase,
  getCleaningModeFriendlyName,
  getSuctionLevelFriendlyName,
} from '../../utils';
import {
  SLIDER_CONFIG,
  CLEANING_MODE,
  MOP_PAD_HUMIDITY,
} from '../../constants';

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
  hass: Hass;
  language?: SupportedLanguage;
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
  hass,
  language,
}: CustomModeProps) {
  const { setSelectOption, setSwitch, setNumber } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);
  const { t } = useTranslation(language);

  const wetnessPercent = ((wetnessLevel - SLIDER_CONFIG.WETNESS.MIN) / (SLIDER_CONFIG.WETNESS.MAX - SLIDER_CONFIG.WETNESS.MIN)) * 100;
  const selfCleanAreaPercent = ((selfCleanArea - selfCleanAreaMin) / (selfCleanAreaMax - selfCleanAreaMin)) * 100;
  const selfCleanTimePercent = ((selfCleanTime - selfCleanTimeMin) / (selfCleanTimeMax - selfCleanTimeMin)) * 100;

  return (
    <div className="cleaning-mode-modal__content">
      {/* Custom Mode - Cleaning Mode */}
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.cleaning_mode_title')}</h3>
        <div className="cleaning-mode-modal__power-grid">
          {cleaningModeList.map((mode, idx) => (
            <div key={idx} className="cleaning-mode-modal__mode-option">
              <CircularButton
                size="small"
                selected={mode === cleaningMode}
                onClick={() => setSelectOption(entityIds.cleaningMode, convertCleaningModeToService(mode as CleaningMode))}
                icon={getCleaningModeIcon(mode as CleaningMode)}
                iconStyle={idx > 1 ? {fontSize: 13, color: "black"} : {}}
              />
              <span className="cleaning-mode-modal__mode-option-label">{getCleaningModeFriendlyName(mode as CleaningMode)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Suction Power */}
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.suction_power_title')}</h3>
        <div className="cleaning-mode-modal__power-grid">
          {suctionLevelList.map((level, idx) => (
            <div key={idx} className="cleaning-mode-modal__power-option">
              <CircularButton
                size="small"
                selected={level === suctionLevel}
                onClick={() => setSelectOption(entityIds.suctionLevel, convertToLowerCase(level))}
                icon={getSuctionLevelIcon(level as SuctionLevel)}
                iconStyle={idx > 2 ? {fontSize: 13, color: "black"} : {}}
              />
              <span className="cleaning-mode-modal__power-label">{getSuctionLevelFriendlyName(level as SuctionLevel)}</span>
            </div>
          ))}
        </div>

        {/* Max+ toggle */}
        <div className="cleaning-mode-modal__max-plus">
          <div className="cleaning-mode-modal__max-plus-header">
            <span className="cleaning-mode-modal__max-plus-title">Max+</span>
            <Toggle 
              checked={maxSuctionPower} 
              onChange={(checked) => setSwitch(entityIds.maxSuctionPower, checked)} 
            />
          </div>
          <p className="cleaning-mode-modal__max-plus-description">
            {t('custom_mode.max_plus_description')}
          </p>
        </div>
      </section>

      {/* Wetness - Only show when mopping is enabled */}
      {cleaningMode !== CLEANING_MODE.SWEEPING && (
        <section className="cleaning-mode-modal__section">
          <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.wetness_title')}</h3>

          {/* Slider */}
          <div className="cleaning-mode-modal__slider-container">
            <input
              type="range"
              min={SLIDER_CONFIG.WETNESS.MIN}
              max={SLIDER_CONFIG.WETNESS.MAX}
              value={wetnessLevel}
              onChange={(e) => setNumber(entityIds.wetnessLevel, parseInt(e.target.value))}
              className="cleaning-mode-modal__slider"
              style={{
                background: `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${wetnessPercent}%, var(--accent-bg-secondary-hover) ${wetnessPercent}%, var(--accent-bg-secondary-hover) 100%)`
              }}
            />
            <div 
              className="cleaning-mode-modal__slider-value"
              style={{
                left: `calc(${wetnessPercent}% + ${8 - wetnessPercent * 0.16}px)`
              }}
            >
              {wetnessLevel}
            </div>
          </div>

          {/* Labels */}
          <div className="cleaning-mode-modal__slider-labels">
            <span className={`cleaning-mode-modal__slider-label ${
              mopPadHumidity === MOP_PAD_HUMIDITY.SLIGHTLY_DRY ? 'cleaning-mode-modal__slider-label--active' : 'cleaning-mode-modal__slider-label--inactive'
            }`}>
              {t('custom_mode.slightly_dry')}
            </span>
            <span className={`cleaning-mode-modal__slider-label ${
              mopPadHumidity === MOP_PAD_HUMIDITY.MOIST ? 'cleaning-mode-modal__slider-label--active' : 'cleaning-mode-modal__slider-label--inactive'
            }`}>
              {t('custom_mode.moist')}
            </span>
            <span className={`cleaning-mode-modal__slider-label ${
              mopPadHumidity === MOP_PAD_HUMIDITY.WET ? 'cleaning-mode-modal__slider-label--active' : 'cleaning-mode-modal__slider-label--inactive'
            }`}>
              {t('custom_mode.wet')}
            </span>
          </div>
        </section>
      )}

      {/* Mop-washing frequency */}
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.mop_washing_frequency_title')}</h3>
        
        {/* Frequency type selector */}
        <div className="cleaning-mode-modal__horizontal-scroll">
          {selfCleanFrequencyList.map((freq, idx) => (
            <div key={idx} className="cleaning-mode-modal__mode-option">
              <CircularButton
                size="small"
                selected={freq === selfCleanFrequency}
                onClick={() => setSelectOption(entityIds.selfCleanFrequency, convertSelfCleanFrequencyToService(freq as SelfCleanFrequency))}
                icon={getSelfCleanFrequencyIcon(freq as SelfCleanFrequency)}
              />
              <span className="cleaning-mode-modal__mode-option-label">{freq}</span>
            </div>
          ))}
        </div>

        {/* Slider for By area or By time */}
        {(selfCleanFrequency === 'By area' || selfCleanFrequency === 'By time') && (
          <div className="cleaning-mode-modal__slider-container" style={{ marginTop: '16px' }}>
            <input
              type="range"
              min={selfCleanFrequency === 'By area' ? selfCleanAreaMin : selfCleanTimeMin}
              max={selfCleanFrequency === 'By area' ? selfCleanAreaMax : selfCleanTimeMax}
              value={selfCleanFrequency === 'By area' ? selfCleanArea : selfCleanTime}
              onChange={(e) => {
                const entity = selfCleanFrequency === 'By area' 
                  ? entityIds.selfCleanArea
                  : entityIds.selfCleanTime;
                setNumber(entity, parseInt(e.target.value));
              }}
              className="cleaning-mode-modal__slider"
              style={{
                background: selfCleanFrequency === 'By area'
                  ? `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${selfCleanAreaPercent}%, var(--accent-bg-secondary-hover) ${selfCleanAreaPercent}%, var(--accent-bg-secondary-hover) 100%)`
                  : `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${selfCleanTimePercent}%, var(--accent-bg-secondary-hover) ${selfCleanTimePercent}%, var(--accent-bg-secondary-hover) 100%)`
              }}
            />
            <div 
              className="cleaning-mode-modal__slider-value"
              style={{
                left: selfCleanFrequency === 'By area'
                  ? `calc(${selfCleanAreaPercent}% + ${8 - selfCleanAreaPercent * 0.16}px)`
                  : `calc(${selfCleanTimePercent}% + ${8 - selfCleanTimePercent * 0.16}px)`
              }}
            >
              {selfCleanFrequency === 'By area' ? `${selfCleanArea}m²` : `${selfCleanTime}m`}
            </div>
          </div>
        )}
      </section>

      {/* Route */}
      <section className="cleaning-mode-modal__section">
        <div className="cleaning-mode-modal__section-header">
          <h3 className="cleaning-mode-modal__section-title">{t('custom_mode.route_title')}</h3>
        </div>

        <div className="cleaning-mode-modal__route-grid">
          {cleaningRouteList.map((route, idx) => (
            <div key={idx} className="cleaning-mode-modal__route-option">
              <CircularButton
                size="small"
                selected={route === cleaningRoute}
                onClick={() => setSelectOption(entityIds.cleaningRoute, convertToLowerCase(route))}
                icon={getCleaningRouteIcon(route as CleaningRoute)}
              />
              <span className="cleaning-mode-modal__route-label">{route}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
