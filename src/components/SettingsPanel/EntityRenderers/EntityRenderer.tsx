import { EntitySwitch } from './EntitySwitch';
import { EntitySelect } from './EntitySelect';
import { EntityNumber } from './EntityNumber';
import { EntityButton } from './EntityButton';
import { getSwitchState, useVacuumCapabilities } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import type { EntityDefinition } from '@/config/entity-ui-mapping';
import type { CapabilityString } from '@/constants';

interface EntityRendererProps {
  definition: EntityDefinition;
  isChild?: boolean;
}

export function EntityRenderer({ definition, isChild = false }: EntityRendererProps) {
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';
  const capabilities = useVacuumCapabilities();

  if (definition.capability && !capabilities.has(definition.capability as CapabilityString)) {
    return null;
  }

  if (definition.parentKey) {
    const parentState = getSwitchState(hass, entityName, definition.parentKey);
    if (!parentState.isOn) {
      return null;
    }
  }

  const isChildItem = isChild || !!definition.parentKey;

  switch (definition.platform) {
    case 'switch':
      return <EntitySwitch definition={definition} isChild={isChildItem} />;
    case 'select':
      return <EntitySelect definition={definition} isChild={isChildItem} />;
    case 'number':
      return <EntityNumber definition={definition} isChild={isChildItem} />;
    case 'button':
      return <EntityButton definition={definition} isChild={isChildItem} />;
    default:
      return null;
  }
}
