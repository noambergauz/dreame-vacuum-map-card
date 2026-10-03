export function selectOptionKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_');
}

export function formatSelectOptionLabel(value: string): string {
  return value
    .trim()
    .split(/[_\s-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function findSelectOption(options: readonly string[], key: string): string | undefined {
  return options.find((option) => selectOptionKey(option) === key);
}

const EMPTY_SELECT_KEYS = new Set(['', 'off', 'unknown', 'unavailable', 'none']);

export function isCleangeniusOff(value: string): boolean {
  return EMPTY_SELECT_KEYS.has(selectOptionKey(value));
}
