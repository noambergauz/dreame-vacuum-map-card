import { useEffect, useState } from 'react';
import { useConfig, useDeviceEntities, useHass } from '@/contexts';
import type { EntityDefinition } from '@/config/entity-ui-mapping';
import { resolveBackendLanguage } from '@/i18n/language';
import { fetchIntegrationTranslations, resolveEntityLabel } from '@/i18n/integrationTranslations';
import { useTranslation } from './useTranslation';

const translationCache = new Map<string, Record<string, string>>();
const inflight = new Map<string, Promise<Record<string, string>>>();

export function useIntegrationTranslations(): Record<string, string> {
  const hass = useHass();
  const config = useConfig();
  const backendLanguage = resolveBackendLanguage(config.language, hass.language);
  const cached = translationCache.get(backendLanguage);
  const [resources, setResources] = useState<Record<string, string>>(cached ?? {});
  const [loadedLanguage, setLoadedLanguage] = useState<string | null>(cached ? backendLanguage : null);
  if (cached && loadedLanguage !== backendLanguage) {
    setLoadedLanguage(backendLanguage);
    setResources(cached);
  }

  useEffect(() => {
    if (translationCache.has(backendLanguage)) return;

    let active = true;
    const request =
      inflight.get(backendLanguage) ?? fetchIntegrationTranslations((message) => hass.callWS(message), backendLanguage);
    inflight.set(backendLanguage, request);

    request
      .then((loaded) => {
        translationCache.set(backendLanguage, loaded);
        inflight.delete(backendLanguage);
        if (!active) return;
        setLoadedLanguage(backendLanguage);
        setResources(loaded);
      })
      .catch(() => {
        translationCache.set(backendLanguage, {});
        inflight.delete(backendLanguage);
        if (!active) return;
        setLoadedLanguage(backendLanguage);
        setResources({});
      });

    return () => {
      active = false;
    };
  }, [backendLanguage, hass]);

  return resources;
}

export function useEntityLabel(definition: EntityDefinition, explicitLabel?: string): string {
  const { t } = useTranslation();
  const hass = useHass();
  const { get } = useDeviceEntities();
  const resources = useIntegrationTranslations();
  if (explicitLabel) return explicitLabel;

  const entityId = definition.platform === 'attribute' ? undefined : get(definition.platform, definition.key);
  const friendlyName = entityId ? hass.states[entityId]?.attributes.friendly_name : undefined;
  return resolveEntityLabel({
    resources,
    platform: definition.platform,
    key: definition.key,
    friendlyName,
    chromeLabel: t(definition.labelKey),
  });
}
