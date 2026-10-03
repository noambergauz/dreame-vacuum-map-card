import { describe, expect, it } from 'vitest';
import { deriveControls } from '../useVacuumMachineState';

describe('deriveControls', () => {
  it.each(['Mopping', 'mopping'])('classifies %s as mopping-only', (cleaningMode) => {
    const controls = deriveControls('idle', cleaningMode, false);

    expect(controls.canChangeSuctionPower).toBe(false);
    expect(controls.canChangeWetness).toBe(true);
  });

  it.each(['Sweeping', 'sweeping'])('classifies %s as sweeping', (cleaningMode) => {
    const controls = deriveControls('idle', cleaningMode, false);

    expect(controls.canChangeWetness).toBe(false);
    expect(controls.canToggleMaxPower).toBe(true);
  });

  it.each(['Mopping after sweeping', 'mopping_after_sweeping', 'mopping-after-sweeping'])(
    'classifies %s as mopping after sweeping',
    (cleaningMode) => {
      const controls = deriveControls('cleaning', cleaningMode, false);

      expect(controls.canChangeCleaningMode).toBe(false);
      expect(controls.canToggleMaxPower).toBe(true);
    }
  );

  it('does not impose restrictions for an unknown model-specific mode', () => {
    const controls = deriveControls('idle', 'model_specific_mode', false);

    expect(controls.canChangeSuctionPower).toBe(true);
    expect(controls.canChangeWetness).toBe(true);
    expect(controls.canToggleMaxPower).toBe(false);
  });
});
