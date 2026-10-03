import { describe, expect, it } from 'vitest';
import { validateConfig } from '../typeGuards';

const baseConfig = { type: 'custom:dreame-vacuum-map-card', entity: 'vacuum.dima' };

describe('validateConfig', () => {
  it('accepts a config without theme keys and no warnings', () => {
    expect(validateConfig(baseConfig)).toMatchObject({ valid: true, warnings: [] });
  });

  it('keeps legacy theme keys valid and warns that they are ignored', () => {
    const result = validateConfig({ ...baseConfig, theme: 'dark', custom_theme: { base: 'dark' } });

    expect(result.valid).toBe(true);
    expect(result.warnings).toHaveLength(2);
    expect(result.warnings[0]).toContain('theme is ignored');
    expect(result.warnings[1]).toContain('custom_theme is ignored');
  });
});
