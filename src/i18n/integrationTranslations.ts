const INTEGRATION = 'dreame_vacuum';

export function vacuumStatusKey(rawState: string): string {
  return `component.${INTEGRATION}.entity.sensor.state.state.${rawState}`;
}

export function entityNameKey(platform: string, key: string): string {
  return `component.${INTEGRATION}.entity.${platform}.${key}.name`;
}

export function formatFallbackStatus(rawState: string): string {
  if (!rawState) return '';
  return rawState.charAt(0).toUpperCase() + rawState.slice(1).replace(/_/g, ' ');
}

function lookup(resources: Record<string, string>, key: string): string | null {
  const value = resources[key];
  return typeof value === 'string' && value.length > 0 ? value : null;
}

export function resolveStatusLabel(resources: Record<string, string>, rawState: string): string {
  return lookup(resources, vacuumStatusKey(rawState)) ?? formatFallbackStatus(rawState);
}

export function resolveEntityLabel({
  resources,
  platform,
  key,
  friendlyName,
  chromeLabel,
}: {
  resources: Record<string, string>;
  platform: string;
  key: string;
  friendlyName?: string;
  chromeLabel: string;
}): string {
  const translated = platform === 'attribute' ? null : lookup(resources, entityNameKey(platform, key));
  const name = friendlyName?.trim() ? friendlyName : null;
  return translated ?? name ?? chromeLabel;
}

interface TranslationResponse {
  resources?: Record<string, string>;
}

export async function fetchIntegrationTranslations(
  callWS: (message: Record<string, unknown>) => Promise<TranslationResponse>,
  language: string
): Promise<Record<string, string>> {
  const response = await callWS({
    type: 'frontend/get_translations',
    language,
    category: 'entity',
    integration: [INTEGRATION],
  });
  return response.resources ?? {};
}
