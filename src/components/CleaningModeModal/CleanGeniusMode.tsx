import { Toggle } from '../common';
import type { Hass } from '../../types/homeassistant';
import type { CleanGeniusMode as CleanGeniusModeType, CleanGeniusState } from '../../types/vacuum';
import { useHomeAssistantServices, useVacuumEntityIds } from '../../hooks';
import {
  getCleanGeniusModeIcon,
  getCleanGeniusModeFriendlyName,
  convertCleanGeniusModeToService,
  convertCleanGeniusStateToService,
  convertToLowerCase,
} from '../../utils';
import {
  CLEANGENIUS_STATE,
  CLEANING_ROUTE,
} from '../../constants';

interface CleanGeniusModeProps {
  cleangeniusMode: string;
  cleangeniusModeList: string[];
  cleangenius: string;
  baseEntityId: string;
  hass: Hass;
}

export function CleanGeniusMode({
  cleangeniusMode,
  cleangeniusModeList,
  cleangenius,
  baseEntityId,
  hass,
}: CleanGeniusModeProps) {
  const { setSelectOption } = useHomeAssistantServices(hass);

  const entityIds = useVacuumEntityIds(baseEntityId);

  const handleDeepCleaningToggle = (enabled: boolean) => {
    if (enabled) {
      setSelectOption(
        entityIds.cleangenius,
        convertCleanGeniusStateToService(CLEANGENIUS_STATE.DEEP_CLEANING as CleanGeniusState)
      );
      setSelectOption(
        entityIds.cleaningRoute,
        convertToLowerCase(CLEANING_ROUTE.DEEP)
      );
    } else {
      setSelectOption(
        entityIds.cleangenius,
        convertCleanGeniusStateToService(CLEANGENIUS_STATE.ROUTINE_CLEANING as CleanGeniusState)
      );
      setSelectOption(
        entityIds.cleaningRoute,
        convertToLowerCase(CLEANING_ROUTE.STANDARD)
      );
    }
  };

  return (
    <div className="cleaning-mode-modal__content">
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">Cleaning Mode</h3>
        <div className="cleaning-mode-modal__mode-grid">
          {cleangeniusModeList.map((mode, idx) => {
            const typedMode = mode as CleanGeniusModeType;
            const isVacMop = mode === 'Vacuum and mop';
            return (
              <div
                key={idx}
                className={`cleaning-mode-modal__mode-card ${
                  mode === cleangeniusMode ? 'cleaning-mode-modal__mode-card--selected' : ''
                }`}
                onClick={() => setSelectOption(
                  entityIds.cleangeniusMode,
                  convertCleanGeniusModeToService(typedMode)
                )}
                style={{ cursor: 'pointer' }}
              >
                <div className={`cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${isVacMop ? 'vac-mop' : 'mop-after'}`}>
                  <span style={{fontSize: 13}}>{getCleanGeniusModeIcon(typedMode)}</span>
                </div>
                <span className="cleaning-mode-modal__mode-label">
                  {getCleanGeniusModeFriendlyName(typedMode)}
                </span>
                {mode === cleangeniusMode && (
                  <div className="cleaning-mode-modal__mode-checkmark">
                    <span>✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="cleaning-mode-modal__setting">
        <span className="cleaning-mode-modal__setting-label">Deep Cleaning</span>
        <Toggle 
          checked={cleangenius === CLEANGENIUS_STATE.DEEP_CLEANING} 
          onChange={handleDeepCleaningToggle} 
        />
      </div>
    </div>
  );
}
