import { describe, expect, it } from 'vitest';
import { parseShortcuts } from './shortcutUtils';

describe('parseShortcuts', () => {
  it('parses valid shortcuts', () => {
    expect(parseShortcuts({ 32: { name: 'Morning clean' }, 33: { name: 'Kitchen' } })).toEqual([
      { id: 32, name: 'Morning clean' },
      { id: 33, name: 'Kitchen' },
    ]);
  });

  it('ignores malformed shortcut entries', () => {
    expect(
      parseShortcuts({
        invalid: { name: 'Bad id' },
        0: { name: 'Bad id' },
        32: { name: '  ' },
        33: null,
        34: { name: ' Valid ' },
      })
    ).toEqual([{ id: 34, name: 'Valid' }]);
  });

  it.each([null, undefined, [], 'invalid'])('returns no shortcuts for %s', (value) => {
    expect(parseShortcuts(value)).toEqual([]);
  });
});
