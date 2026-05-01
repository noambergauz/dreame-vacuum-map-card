import { DataDrivenSection } from '../EntityRenderers';
import { AI_DETECTION_SECTION } from '@/config/entity-ui-mapping';
import './AIDetectionSection.scss';

export function AIDetectionSection() {
  return <DataDrivenSection section={AI_DETECTION_SECTION} className="ai-detection-section" />;
}
