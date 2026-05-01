import { useVacuumCapabilities } from '@/hooks';
import { EntityRenderer } from './EntityRenderer';
import type { SectionDefinition } from '@/config/entity-ui-mapping';
import type { CapabilityString } from '@/constants';
import './EntityRenderers.scss';

interface DataDrivenSectionProps {
  section: SectionDefinition;
  className?: string;
}

export function DataDrivenSection({ section, className }: DataDrivenSectionProps) {
  const capabilities = useVacuumCapabilities();

  if (section.capabilities && section.capabilities.length > 0) {
    const hasAnyCapability = section.capabilities.some((cap) => capabilities.has(cap as CapabilityString));
    if (!hasAnyCapability) {
      return null;
    }
  }

  const renderedEntities = section.entities.map((entityDef) => (
    <EntityRenderer key={entityDef.key} definition={entityDef} />
  ));

  const hasVisibleEntities = renderedEntities.some((el) => el !== null);
  if (!hasVisibleEntities) {
    return null;
  }

  return <div className={`data-driven-section ${className ?? ''}`}>{renderedEntities}</div>;
}
