/**
 * Hook for checking vacuum capabilities
 * Uses the capabilities array from vacuum entity attributes
 */
import { useMemo } from 'react';
import { useEntity } from '@/contexts';
import type { CapabilityString } from '@/constants/capabilities';

export interface VacuumCapabilities {
  /** Raw capabilities array from entity */
  raw: string[];
  /** Check if a capability is supported */
  has: (capability: CapabilityString) => boolean;
  /** Check if ANY of the capabilities are supported */
  hasAny: (...capabilities: CapabilityString[]) => boolean;
  /** Check if ALL capabilities are supported */
  hasAll: (...capabilities: CapabilityString[]) => boolean;
}

export function useVacuumCapabilities(): VacuumCapabilities {
  const entity = useEntity();

  return useMemo(() => {
    const capabilities = (entity.attributes.capabilities as string[]) ?? [];
    const capSet = new Set(capabilities);

    return {
      raw: capabilities,
      has: (cap) => capSet.has(cap),
      hasAny: (...caps) => caps.some((c) => capSet.has(c)),
      hasAll: (...caps) => caps.every((c) => capSet.has(c)),
    };
  }, [entity.attributes.capabilities]);
}
