import { describe, expect, it } from 'vitest';
import { isRobotBusy } from '@/constants';
import { deriveControls, resolveCleaningMode } from '../useVacuumMachineState';

describe('isRobotBusy', () => {
  it('keeps room selection hidden through an active job', () => {
    expect(isRobotBusy('cleaning', 'cleaning')).toBe(true);
    expect(isRobotBusy('paused', 'paused')).toBe(true);
    expect(isRobotBusy('returning', 'returning')).toBe(true);
    expect(isRobotBusy('maintenance', 'cleaning')).toBe(true);
    expect(isRobotBusy('idle', 'cleaning')).toBe(true);
  });

  it('allows room selection when the robot is idle', () => {
    expect(isRobotBusy('idle', 'docked')).toBe(false);
    expect(isRobotBusy('idle', 'idle')).toBe(false);
  });
});

describe('resolveCleaningMode', () => {
  it('uses the select when it has a value', () => {
    expect(resolveCleaningMode('Sweeping', 'Mopping')).toBe('Sweeping');
  });

  it('uses the vacuum attribute only when the select has no value', () => {
    expect(resolveCleaningMode(null, 'Mopping')).toBe('Mopping');
    expect(resolveCleaningMode('', 'Mopping')).toBe('Mopping');
  });

  it('is empty when neither source has a value', () => {
    expect(resolveCleaningMode(null, undefined)).toBe('');
  });
});

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
