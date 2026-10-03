import { describe, expect, it } from 'vitest';
import { readSelectEntity } from '@/hooks';
import { findSelectOption, formatSelectOptionLabel, isCleangeniusOff } from '../converters';
import { getSuctionLevelFriendlyName } from '../formatters';
import { getMopPadHumidityFriendlyName } from '../icons';

describe('select entity options', () => {
  it('preserves arbitrary published values and excludes placeholders', () => {
    const result = readSelectEntity({
      state: 'model_specific-value',
      attributes: {
        options: ['slightly_dry', 'model_specific-value', 'unavailable', 'none', 3],
      },
    });

    expect(result).toEqual({
      value: 'model_specific-value',
      options: ['slightly_dry', 'model_specific-value'],
    });
  });

  it('does not synthesize a service value when matching a known semantic key', () => {
    const options = ['Slightly-Dry', 'moist', 'wet'];

    expect(findSelectOption(options, 'slightly_dry')).toBe('Slightly-Dry');
    expect(findSelectOption(options, 'soaked')).toBeUndefined();
  });
});

describe('isCleangeniusOff', () => {
  it.each(['', 'Off', 'unknown', 'unavailable', 'none'])('treats %j as custom mode', (value) => {
    expect(isCleangeniusOff(value)).toBe(true);
  });

  it('treats a published cleaning routine as CleanGenius', () => {
    expect(isCleangeniusOff('routine_cleaning')).toBe(false);
  });
});

describe('select option labels', () => {
  it('uses a translated label for a known humidity option', () => {
    const t = (key: string) => (key === 'custom_mode.slightly_dry' ? 'Slightly dry' : key);

    expect(getMopPadHumidityFriendlyName('slightly_dry', t)).toBe('Slightly dry');
  });

  it('formats an unknown option without changing the underlying value', () => {
    const option = 'model_specific-value';

    expect(formatSelectOptionLabel(option)).toBe('Model Specific Value');
    expect(option).toBe('model_specific-value');
  });

  it('matches a suction label by the whole key', () => {
    expect(getSuctionLevelFriendlyName('standard_plus')).toBe('Standard Plus');
    expect(getSuctionLevelFriendlyName('standard')).toBe('Standard');
  });
});
