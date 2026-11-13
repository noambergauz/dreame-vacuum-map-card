import { useCallback, useEffect, useState } from 'react';
import type { Hass, HassConfig } from '@/types/homeassistant';
import type { SupportedLanguage } from '@/i18n/locales';
import {
  buildDelayedStartVariables,
  getDelayedStartScript,
  type CleanCommand,
  type DelayedStartRequest,
} from '@/utils/delayedStart';
import { logger } from '@/utils/logger';
import { useTranslation } from './useTranslation';

const LABEL_STORAGE_PREFIX = 'dreame-vacuum-card:delayed-start:';

function readStoredLabel(script: string | null): string | null {
  if (!script) return null;
  try {
    return localStorage.getItem(LABEL_STORAGE_PREFIX + script);
  } catch {
    return null;
  }
}

function writeStoredLabel(script: string, label: string | null): void {
  try {
    if (label === null) localStorage.removeItem(LABEL_STORAGE_PREFIX + script);
    else localStorage.setItem(LABEL_STORAGE_PREFIX + script, label);
  } catch {
    // Storage unavailable: the pending banner falls back to a generic text.
  }
}

interface DelayedStartParams {
  hass: Hass;
  config: HassConfig;
  language?: SupportedLanguage;
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
}

/**
 * "Start after…" support. The waiting happens in a Home Assistant script, so a pending
 * start survives the dashboard being closed; this hook only hands the command over,
 * reads whether the script is still waiting and cancels it.
 */
export function useDelayedStart({ hass, config, language, onSuccess, onError }: DelayedStartParams) {
  const { t } = useTranslation(language);
  const delayedConfig = config.delayed_start;
  const script = delayedConfig ? getDelayedStartScript(delayedConfig) : null;
  const scriptEntity = script ? hass.states[script] : undefined;
  const scriptAvailable = Boolean(scriptEntity) && scriptEntity?.state !== 'unavailable';
  const pending = scriptEntity?.state === 'on';
  const [storedLabel, setStoredLabel] = useState<string | null>(() => readStoredLabel(script));
  const pendingLabel = pending ? storedLabel : null;

  // Forget the stored label once the script stops waiting (started, cancelled or timed out).
  useEffect(() => {
    if (!script || pending || scriptEntity === undefined) return;
    writeStoredLabel(script, null);
  }, [script, pending, scriptEntity]);

  const schedule = useCallback(
    async (command: CleanCommand, request: DelayedStartRequest): Promise<boolean> => {
      if (!delayedConfig || !script) return false;
      if (!scriptAvailable) {
        onError?.(t('delayed_start.script_missing', { script }));
        return false;
      }
      const variables = buildDelayedStartVariables(command, request, delayedConfig);
      logger.debug('Vacuum', 'Schedule delayed start', { script, variables });
      try {
        await hass.callService('script', 'turn_on', { entity_id: script, variables });
      } catch (error) {
        logger.error(`Service call failed: script.turn_on (${script})`, error);
        onError?.(t('errors.service_call_failed'));
        return false;
      }
      writeStoredLabel(script, request.label);
      setStoredLabel(request.label);
      onSuccess?.(t('delayed_start.scheduled', { label: request.label }));
      return true;
    },
    [hass, delayedConfig, script, scriptAvailable, onSuccess, onError, t]
  );

  const cancel = useCallback(
    async (silent = false): Promise<void> => {
      if (!script) return;
      try {
        await hass.callService('script', 'turn_off', { entity_id: script });
      } catch (error) {
        logger.error(`Service call failed: script.turn_off (${script})`, error);
        onError?.(t('errors.service_call_failed'));
        return;
      }
      writeStoredLabel(script, null);
      setStoredLabel(null);
      if (!silent) onSuccess?.(t('delayed_start.cancelled'));
    },
    [hass, script, onSuccess, onError, t]
  );

  return {
    enabled: Boolean(delayedConfig),
    script,
    scriptAvailable,
    pending,
    pendingLabel,
    triggers: delayedConfig?.triggers ?? [],
    allowTime: delayedConfig?.allow_time ?? true,
    schedule,
    cancel,
  };
}

export type DelayedStartState = ReturnType<typeof useDelayedStart>;
