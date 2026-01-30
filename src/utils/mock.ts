import type { Hass, HassEntity } from '../types/homeassistant';
import mockData from '../../mock-data.json';
import { devConfig } from '../config/env';

export function createMockHass(): Hass {
  // Create a mutable states object that can be updated
  const states: Record<string, HassEntity> = {
    [mockData.entity_id]: {
      entity_id: mockData.entity_id,
      state: mockData.state,
      attributes: mockData.attributes as any,
      context: mockData.context,
      last_changed: mockData.last_changed,
      last_updated: mockData.last_updated,
    },
  };

  // Add a mock camera entity for the map
  const mapEntityId = `camera.${mockData.entity_id.split('.')[1]}_map`;
  states[mapEntityId] = {
    entity_id: mapEntityId,
    state: 'idle',
    attributes: {
      friendly_name: 'Vacuum Map',
      entity_picture: '/api/camera_proxy/camera.vacuum_map',
    },
    context: { id: 'mock-camera', parent_id: null, user_id: null },
    last_changed: new Date().toISOString(),
    last_updated: new Date().toISOString(),
  };

  const hass: Hass = {
    states,
    
    hassUrl: (path: string) => {
      console.log('[Mock Hass] hassUrl called:', path);
      return `${devConfig.mockServerUrl}${path}`;
    },
    
    callService: async (domain: string, service: string, serviceData?: any) => {
      console.log('[Mock Hass] Service called:', {
        domain,
        service,
        serviceData,
        timestamp: new Date().toISOString(),
      });

      // Simulate service responses
      if (domain === 'vacuum') {
        handleVacuumService(service, serviceData, states);
      }

      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      console.log('[Mock Hass] Service completed:', { domain, service });
    },
  };

  return hass;
}

function handleVacuumService(
  service: string,
  serviceData: any,
  states: Record<string, HassEntity>
) {
  const entityId = serviceData?.entity_id || mockData.entity_id;
  const entity = states[entityId];
  
  if (!entity) {
    console.warn('[Mock Hass] Entity not found:', entityId);
    return;
  }

  console.log('[Mock Hass] Handling vacuum service:', service);

  switch (service) {
    case 'start':
    case 'turn_on':
      entity.state = 'cleaning';
      entity.attributes.running = true;
      entity.attributes.started = true;
      break;
      
    case 'pause':
      entity.state = 'paused';
      entity.attributes.paused = true;
      entity.attributes.running = false;
      break;
      
    case 'stop':
    case 'turn_off':
      entity.state = 'idle';
      entity.attributes.running = false;
      entity.attributes.started = false;
      entity.attributes.paused = false;
      break;
      
    case 'return_to_base':
      entity.state = 'returning';
      entity.attributes.returning = true;
      entity.attributes.running = false;
      break;
      
    case 'clean_segment':
    case 'clean_spot':
    case 'clean_zone':
      entity.state = 'cleaning';
      entity.attributes.running = true;
      entity.attributes.segment_cleaning = service === 'clean_segment';
      entity.attributes.zone_cleaning = service === 'clean_zone';
      entity.attributes.spot_cleaning = service === 'clean_spot';
      break;
      
    case 'locate':
      console.log('[Mock Hass] Vacuum locate called');
      break;
      
    case 'send_command':
      console.log('[Mock Hass] Custom command:', serviceData?.command);
      break;
      
    default:
      console.log('[Mock Hass] Unhandled vacuum service:', service);
  }

  // Update timestamps
  entity.last_updated = new Date().toISOString();
  
  console.log('[Mock Hass] Updated entity state:', {
    entity_id: entityId,
    state: entity.state,
    key_attributes: {
      running: entity.attributes.running,
      paused: entity.attributes.paused,
      docked: entity.attributes.docked,
    }
  });
}

export function updateMockEntityState(
  hass: Hass,
  entityId: string,
  updates: Partial<HassEntity>
) {
  if (hass.states[entityId]) {
    Object.assign(hass.states[entityId], updates);
    hass.states[entityId].last_updated = new Date().toISOString();
    console.log('[Mock Hass] Entity updated:', entityId, updates);
  }
}

// Development mode detection
export const isDevelopment = import.meta.env.DEV;
