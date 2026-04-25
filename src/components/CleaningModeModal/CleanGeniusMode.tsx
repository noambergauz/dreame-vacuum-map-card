import { Toggle } from '@/components/common';
import type { CleanGeniusMode as CleanGeniusModeType, CleanGeniusState } from '@/types/vacuum';
import { useHomeAssistantServices, useVacuumEntityIds, getEntityState } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useHass, useMachineState } from '@/contexts';
import {
  getCleanGeniusModeIcon,
  getCleanGeniusModeFriendlyName,
  convertCleanGeniusModeToService,
  convertCleanGeniusStateToService,
  convertToLowerCase,
} from '@/utils';
import { CLEANGENIUS_STATE, CLEANING_ROUTE } from '@/constants';

interface CleanGeniusModeProps {
  cleangeniusMode: string;
  cleangeniusModeList: string[];
  cleangenius: string;
  baseEntityId: string;
}

export function CleanGeniusMode({
  cleangeniusMode,
  cleangeniusModeList,
  cleangenius,
  baseEntityId,
}: CleanGeniusModeProps) {
  const hass = useHass();
  const { phase } = useMachineState();
  const { setSelectOption } = useHomeAssistantServices(hass);
  const { t } = useTranslation();
  const entityIds = useVacuumEntityIds(baseEntityId);

  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';

  const cleangeniusState = getEntityState(hass, entityIds.cleangenius);
  const cleaningRouteState = getEntityState(hass, entityIds.cleaningRoute);
  const cleangeniusModeState = getEntityState(hass, entityIds.cleangeniusMode);

  const isModeDisabled = isInCleaningSession || cleangeniusModeState.unavailable;
  const isDeepCleaningDisabled = isInCleaningSession || cleangeniusState.unavailable;

  const handleDeepCleaningToggle = (enabled: boolean) => {
    const state = enabled ? CLEANGENIUS_STATE.DEEP_CLEANING : CLEANGENIUS_STATE.ROUTINE_CLEANING;
    const route = enabled ? CLEANING_ROUTE.DEEP : CLEANING_ROUTE.STANDARD;

    setSelectOption(entityIds.cleangenius, convertCleanGeniusStateToService(state as CleanGeniusState));

    if (cleaningRouteState.available) {
      setSelectOption(entityIds.cleaningRoute, convertToLowerCase(route));
    }
  };

  return (
    <div className="cleaning-mode-modal__content">
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('cleangenius_mode.cleaning_mode_title')}</h3>
        <div
          className={`cleaning-mode-modal__mode-grid ${isModeDisabled ? 'cleaning-mode-modal__mode-grid--disabled' : ''}`}
        >
          {cleangeniusModeList.map((mode, idx) => {
            const typedMode = mode as CleanGeniusModeType;
            const isVacMop = mode === 'Vacuum and mop';
            return (
              <div
                key={idx}
                className={`cleaning-mode-modal__mode-card ${
                  mode === cleangeniusMode ? 'cleaning-mode-modal__mode-card--selected' : ''
                } ${isModeDisabled ? 'cleaning-mode-modal__mode-card--disabled' : ''}`}
                onClick={() =>
                  !isModeDisabled &&
                  setSelectOption(entityIds.cleangeniusMode, convertCleanGeniusModeToService(typedMode))
                }
                style={{ cursor: isModeDisabled ? 'not-allowed' : 'pointer' }}
              >
                <div
                  className={`cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${isVacMop ? 'vac-mop' : 'mop-after'}`}
                >
                  {getCleanGeniusModeIcon(typedMode)}
                </div>
                <span className="cleaning-mode-modal__mode-label">{getCleanGeniusModeFriendlyName(typedMode, t)}</span>
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

      <div
        className={`cleaning-mode-modal__setting ${isDeepCleaningDisabled ? 'cleaning-mode-modal__setting--disabled' : ''}`}
      >
        <span className="cleaning-mode-modal__setting-label">{t('cleangenius_mode.deep_cleaning')}</span>
        <Toggle
          checked={cleangenius === CLEANGENIUS_STATE.DEEP_CLEANING}
          onChange={handleDeepCleaningToggle}
          disabled={isDeepCleaningDisabled}
        />
      </div>
    </div>
  );
}
