export interface ShortcutData {
  id: number;
  name: string;
}

export function parseShortcuts(value: unknown): ShortcutData[] {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return [];

  return Object.entries(value).flatMap(([rawId, data]) => {
    const id = Number(rawId);
    if (!Number.isSafeInteger(id) || id <= 0 || !data || typeof data !== 'object') return [];

    const name = 'name' in data && typeof data.name === 'string' ? data.name.trim() : '';
    return name ? [{ id, name }] : [];
  });
}
