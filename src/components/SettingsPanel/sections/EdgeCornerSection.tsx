import { DataDrivenSection } from '../EntityRenderers';
import { EDGE_CORNER_SECTION } from '@/config/entity-ui-mapping';
import './EdgeCornerSection.scss';

export function EdgeCornerSection() {
  return <DataDrivenSection section={EDGE_CORNER_SECTION} className="edge-corner-section" />;
}
