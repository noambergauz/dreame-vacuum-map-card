import { Toggle } from '@/components/common';
import { useHomeAssistantServices, useVacuumEntityIds, getEntityState, readSelectEntity } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useHass, useMachineState } from '@/contexts';
import { getCleanGeniusModeIcon, getCleanGeniusModeFriendlyName, findSelectOption, selectOptionKey } from '@/utils';

interface CleanGeniusModeProps {
  cleangeniusMode: string;
  cleangeniusModeList: string[];
  cleangenius: string;
}

export function CleanGeniusMode({ cleangeniusMode, cleangeniusModeList, cleangenius }: CleanGeniusModeProps) {
  const hass = useHass();
  const { phase } = useMachineState();
  const { setSelectOption } = useHomeAssistantServices(hass);
  const { t } = useTranslation();
  const entityIds = useVacuumEntityIds();

  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';

  const cleangeniusState = getEntityState(hass, entityIds.cleangenius);
  const cleaningRouteState = getEntityState(hass, entityIds.cleaningRoute);
  const cleangeniusModeState = getEntityState(hass, entityIds.cleangeniusMode);
  const cleangeniusOptions = readSelectEntity(cleangeniusState.entity).options;
  const cleaningRouteOptions = readSelectEntity(cleaningRouteState.entity).options;

  const isModeDisabled = isInCleaningSession || cleangeniusModeState.unavailable;
  const isDeepCleaningDisabled = isInCleaningSession || cleangeniusState.unavailable;

  const handleDeepCleaningToggle = (enabled: boolean) => {
    const state = findSelectOption(cleangeniusOptions, enabled ? 'deep_cleaning' : 'routine_cleaning');
    const route = findSelectOption(cleaningRouteOptions, enabled ? 'deep' : 'standard');

    if (entityIds.cleangenius && state) {
      setSelectOption(entityIds.cleangenius, state);
    }

    if (entityIds.cleaningRoute && cleaningRouteState.available && route) {
      setSelectOption(entityIds.cleaningRoute, route);
    }
  };

  return (
    <div className="cleaning-mode-modal__content">
      <section className="cleaning-mode-modal__section">
        <h3 className="cleaning-mode-modal__section-title">{t('cleangenius_mode.cleaning_mode_title')}</h3>
        <div
          className={`cleaning-mode-modal__mode-grid ${isModeDisabled ? 'cleaning-mode-modal__mode-grid--disabled' : ''}`}
        >
          {cleangeniusModeList.map((mode) => {
            const isVacMop = selectOptionKey(mode) === 'vacuum_and_mop';
            return (
              <div
                key={mode}
                className={`cleaning-mode-modal__mode-card ${
                  mode === cleangeniusMode ? 'cleaning-mode-modal__mode-card--selected' : ''
                } ${isModeDisabled ? 'cleaning-mode-modal__mode-card--disabled' : ''}`}
                onClick={() =>
                  !isModeDisabled && entityIds.cleangeniusMode && setSelectOption(entityIds.cleangeniusMode, mode)
                }
                style={{ cursor: isModeDisabled ? 'not-allowed' : 'pointer' }}
              >
                <div
                  className={`cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${isVacMop ? 'vac-mop' : 'mop-after'}`}
                >
                  {getCleanGeniusModeIcon(mode)}
                </div>
                <span className="cleaning-mode-modal__mode-label">{getCleanGeniusModeFriendlyName(mode, t)}</span>
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
          checked={selectOptionKey(cleangenius) === 'deep_cleaning'}
          onChange={handleDeepCleaningToggle}
          disabled={isDeepCleaningDisabled}
        />
      </div>
    </div>
  );
}
