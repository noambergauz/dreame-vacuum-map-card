import { useCallback } from 'react';
import { useConfig } from '@/contexts';
import type { StopAction } from '@/types/homeassistant';

/**
 * Hook for getting button action configuration
 * Allows overriding default button actions via YAML config
 */
export function useButtonConfig() {
  const config = useConfig();

  const getStopAction = useCallback((): StopAction => {
    const stopConfig = config.buttons?.find((b) => b.type === 'stop');
    return stopConfig?.action ?? 'stop';
  }, [config.buttons]);

  return { getStopAction };
}
