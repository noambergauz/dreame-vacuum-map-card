import { Toggle, CircularButton } from '../common';
import type { Hass } from '../../types/homeassistant';
import type { CleaningMode, SuctionLevel, CleaningRoute, SelfCleanFrequency } from '../../types/vacuum';
import { useHomeAssistantServices, useVacuumEntityIds } from '../../hooks';
import {
  getCleaningModeIcon,
  getSuctionLevelIcon,
  getCleaningRouteIcon,
  getSelfCleanFrequencyIcon,
  convertCleaningModeToService,
  convertSelfCleanFrequencyToService,
  convertToLowerCase,
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
}: CustomModeProps) {
  // Use service hooks
  const { setSelectOption, setSwitch, setNumber } = useHomeAssistantServices(hass);

  // Get entity IDs
  const entityIds = useVacuumEntityIds(baseEntityId);

  // Calculate slider percentages
  const wetnessPercent = ((wetnessLevel - SLIDER_CONFIG.WETNESS.MIN) / (SLIDER_CONFIG.WETNESS.MAX - SLIDER_CONFIG.WETNESS.MIN)) * 100;
  const selfCleanAreaPercent = ((selfCleanArea - selfCleanAreaMin) / (selfCleanAreaMax - selfCleanAreaMin)) * 100;
  const selfCleanTimePercent = ((selfCleanTime - selfCleanTimeMin) / (selfCleanTimeMax - selfCleanTimeMin)) * 100;

  return (
    <div className="cleaning-mode-modal__content">
      {/* Custom Mode - Cleaning Mode */}
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">Cleaning Mode</h3>
        <div className="cleaning-mode-modal__horizontal-scroll">
          {cleaningModeList.map((mode, idx) => (
            <div key={idx} className="cleaning-mode-modal__mode-option">
              <CircularButton
                size="small"
                selected={mode === cleaningMode}
                onClick={() => setSelectOption(entityIds.cleaningMode, convertCleaningModeToService(mode as CleaningMode))}
                icon={getCleaningModeIcon(mode as CleaningMode)}
              />
              <span className="cleaning-mode-modal__mode-option-label">{mode}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Suction Power */}
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">Suction Power</h3>
        <div className="cleaning-mode-modal__power-grid">
          {suctionLevelList.map((level, idx) => (
            <div key={idx} className="cleaning-mode-modal__power-option">
              <CircularButton
                size="small"
                selected={level === suctionLevel}
                onClick={() => setSelectOption(entityIds.suctionLevel, convertToLowerCase(level))}
                icon={getSuctionLevelIcon(level as SuctionLevel)}
              />
              <span className="cleaning-mode-modal__power-label">{level}</span>
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
            The suction power will be increased to the highest level, which is a single-use mode.
          </p>
        </div>
      </section>

      {/* Wetness - Only show when mopping is enabled */}
      {cleaningMode !== CLEANING_MODE.SWEEPING && (
        <section className="cleaning-mode-modal__section">
          <h3 className="cleaning-mode-modal__section-title">Wetness</h3>

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
                background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${wetnessPercent}%, #e0e0e0 ${wetnessPercent}%, #e0e0e0 100%)`
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
              Slightly dry
            </span>
            <span className={`cleaning-mode-modal__slider-label ${
              mopPadHumidity === MOP_PAD_HUMIDITY.MOIST ? 'cleaning-mode-modal__slider-label--active' : 'cleaning-mode-modal__slider-label--inactive'
            }`}>
              Moist
            </span>
            <span className={`cleaning-mode-modal__slider-label ${
              mopPadHumidity === MOP_PAD_HUMIDITY.WET ? 'cleaning-mode-modal__slider-label--active' : 'cleaning-mode-modal__slider-label--inactive'
            }`}>
              Wet
            </span>
          </div>
        </section>
      )}

      {/* Mop-washing frequency */}
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">Mop-washing frequency</h3>
        
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
                  ? `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${selfCleanAreaPercent}%, #e0e0e0 ${selfCleanAreaPercent}%, #e0e0e0 100%)`
                  : `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${selfCleanTimePercent}%, #e0e0e0 ${selfCleanTimePercent}%, #e0e0e0 100%)`
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
          <h3 className="cleaning-mode-modal__section-title">Route</h3>
          <span className="cleaning-mode-modal__help-icon">?</span>
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
