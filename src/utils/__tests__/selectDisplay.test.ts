import { describe, expect, it } from 'vitest';
import { resolvePublishedOptions, resolveSuctionDisplay } from '../selectDisplay';

const idle = {
  cleaning: false,
  selectOptions: [] as string[],
  attributeList: [] as string[],
  rememberedOptions: [] as string[],
  fanSpeedList: [] as string[],
  fanSpeed: '',
  suctionLevel: '',
  maxSuctionPower: false,
};

describe('resolveSuctionDisplay', () => {
  it('seeds a disabled list from the vacuum attribute when the select is empty', () => {
    const display = resolveSuctionDisplay({
      ...idle,
      attributeList: ['Quiet', 'Standard'],
      suctionLevel: 'Quiet',
    });

    expect(display.options).toEqual(['Quiet', 'Standard']);
    expect(display.clicksEnabled).toBe(false);
    expect(display.rememberedOptions).toEqual(['Quiet', 'Standard']);
    expect(display.sendFanSpeed).toBe(false);
  });

  it('does not invent suction levels when nothing has been published', () => {
    expect(resolvePublishedOptions({ selectOptions: [], rememberedOptions: [] })).toEqual({
      options: [],
      clicksEnabled: false,
      rememberedOptions: [],
    });
  });

  it('shows the remembered list disabled when the select has no usable options', () => {
    expect(
      resolvePublishedOptions({
        selectOptions: ['unavailable'],
        rememberedOptions: ['Quiet', 'Turbo'],
      })
    ).toEqual({
      options: ['Quiet', 'Turbo'],
      clicksEnabled: false,
      rememberedOptions: ['Quiet', 'Turbo'],
    });
  });

  it('shows fan_speed_list unchanged during cleaning', () => {
    const display = resolveSuctionDisplay({
      ...idle,
      cleaning: true,
      rememberedOptions: ['silent'],
      fanSpeedList: ['Quiet', 'Standard', 'Strong', 'Turbo'],
      fanSpeed: 'Quiet',
      suctionLevel: 'silent',
      maxSuctionPower: true,
    });

    expect(display.options).toEqual(['Quiet', 'Standard', 'Strong', 'Turbo']);
    expect(display.highlight).toBe('Quiet');
    expect(display.sendFanSpeed).toBe(true);
    expect(display.clicksEnabled).toBe(true);
  });

  it('keeps a remembered list disabled while Max+ is on and the select is empty', () => {
    const display = resolveSuctionDisplay({
      ...idle,
      selectOptions: ['unavailable'],
      rememberedOptions: ['Quiet'],
      suctionLevel: 'Quiet',
      maxSuctionPower: true,
    });

    expect(display.options).toEqual(['Quiet']);
    expect(display.clicksEnabled).toBe(false);
    expect(display.highlight).toBe('');
    expect(display.sendFanSpeed).toBe(false);
  });
});
