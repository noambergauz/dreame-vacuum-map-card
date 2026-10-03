import { describe, expect, it } from 'vitest';
import { MOP_PAD_HUMIDITY } from '@/constants';
import { convertMopPadHumidityToService } from '../converters';

describe('convertMopPadHumidityToService', () => {
  it('returns the canonical select option for each humidity level', () => {
    expect(convertMopPadHumidityToService(MOP_PAD_HUMIDITY.SLIGHTLY_DRY)).toBe('slightly_dry');
    expect(convertMopPadHumidityToService(MOP_PAD_HUMIDITY.MOIST)).toBe('moist');
    expect(convertMopPadHumidityToService(MOP_PAD_HUMIDITY.WET)).toBe('wet');
  });
});
