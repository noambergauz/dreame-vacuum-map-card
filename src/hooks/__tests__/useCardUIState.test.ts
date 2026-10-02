import { describe, expect, it } from 'vitest';
import { parseAreaSelectionMode } from '../useCardUIState';

describe('parseAreaSelectionMode', () => {
  it('restores spot mode', () => {
    expect(parseAreaSelectionMode('spot')).toBe('spot');
  });

  it.each([null, '', 'zone', 'invalid'])('falls back to zone for %s', (value) => {
    expect(parseAreaSelectionMode(value)).toBe('zone');
  });
});
