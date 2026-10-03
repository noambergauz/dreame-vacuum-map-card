import { describe, expect, it, vi } from 'vitest';
import { normalizeChromeLanguage, resolveBackendLanguage, resolveChromeLanguage } from '../language';
import { fetchIntegrationTranslations, resolveEntityLabel, resolveStatusLabel } from '../integrationTranslations';
import { validateConfig } from '@/utils/typeGuards';

describe('resolveChromeLanguage', () => {
  it('maps Home Assistant codes onto chrome packs', () => {
    expect(normalizeChromeLanguage('de-DE')).toBe('de');
    expect(normalizeChromeLanguage('zh-Hans')).toBe('zh');
    expect(normalizeChromeLanguage('zh-Hant')).toBe('zh_TW');
    expect(normalizeChromeLanguage('zh_TW')).toBe('zh_TW');
    expect(normalizeChromeLanguage('hu')).toBe('hu_HU');
    expect(normalizeChromeLanguage('uk')).toBe('uk');
    expect(normalizeChromeLanguage('lt')).toBe('lt');
    expect(normalizeChromeLanguage('fr')).toBe('fr_FR');
    expect(normalizeChromeLanguage('xx')).toBe('en');
  });

  it('lets an explicit language override the Home Assistant language', () => {
    expect(resolveChromeLanguage('en', 'de')).toBe('en');
    expect(resolveChromeLanguage(undefined, 'de')).toBe('de');
    expect(resolveChromeLanguage('auto', 'de-DE')).toBe('de');
  });

  it('requests the Home Assistant language until the card overrides it', () => {
    expect(resolveBackendLanguage('auto', 'de-DE')).toBe('de-DE');
    expect(resolveBackendLanguage('fr_FR', 'de')).toBe('fr');
    expect(resolveBackendLanguage('zh_TW', 'en')).toBe('zh-Hant');
    expect(resolveBackendLanguage('cs', 'en')).toBe('cs');
    expect(resolveBackendLanguage('sk', 'en')).toBe('sk');
    expect(resolveBackendLanguage('hu_HU', 'en')).toBe('hu');
  });
});

describe('integration labels', () => {
  it('uses the German vacuum status from the integration', () => {
    expect(
      resolveStatusLabel({ 'component.dreame_vacuum.entity.sensor.state.state.sweeping': 'Saugen' }, 'sweeping')
    ).toBe('Saugen');
  });

  it('title-cases a status the integration does not translate', () => {
    expect(resolveStatusLabel({}, 'charging_completed')).toBe('Charging completed');
  });

  it('requests entity translations for the dreame integration', async () => {
    const callWS = vi
      .fn()
      .mockResolvedValue({ resources: { 'component.dreame_vacuum.entity.switch.child_lock.name': 'Kindersicherung' } });

    await expect(fetchIntegrationTranslations(callWS, 'de')).resolves.toEqual({
      'component.dreame_vacuum.entity.switch.child_lock.name': 'Kindersicherung',
    });
    expect(callWS).toHaveBeenCalledWith({
      type: 'frontend/get_translations',
      language: 'de',
      category: 'entity',
      integration: ['dreame_vacuum'],
    });
  });

  it('falls back to the chrome label when the integration and entity have no name', () => {
    expect(
      resolveEntityLabel({
        resources: {},
        platform: 'switch',
        key: 'child_lock',
        chromeLabel: 'Child Lock',
      })
    ).toBe('Child Lock');
  });
});

describe('validateConfig language', () => {
  it('accepts language auto and keeps unknown theme keys', () => {
    const result = validateConfig({
      type: 'custom:dreame-vacuum-map-card',
      entity: 'vacuum.dima',
      language: 'auto',
      accent_color: '#fff',
    });

    expect(result.valid).toBe(true);
    expect(result.data).toMatchObject({ language: 'auto', accent_color: '#fff' });
  });
});
