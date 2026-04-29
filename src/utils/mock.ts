import type { Hass, HassEntity } from '@/types/homeassistant';
import mockData from '../../mock-data.json';
import { devConfig } from '@/config/env';

interface MockData {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  context: {
    id: string;
    parent_id: string | null;
    user_id: string | null;
  };
  last_changed: string;
  last_updated: string;
}

const data = mockData as MockData;

export function createMockHass(): Hass {
  // Create a mutable states object that can be updated
  const states: Record<string, HassEntity> = {
    [data.entity_id]: {
      entity_id: data.entity_id,
      state: data.state,
      attributes: data.attributes,
      context: data.context,
      last_changed: data.last_changed,
      last_updated: data.last_updated,
    },
  };

  // Add a mock camera entity for the map
  const mapEntityId = `camera.${data.entity_id.split('.')[1]}_map`;
  states[mapEntityId] = {
    entity_id: mapEntityId,
    state: 'idle',
    attributes: {
      friendly_name: 'Vacuum Map',
      entity_picture: '/api/camera_proxy/camera.vacuum_map',
      // Calibration points for coordinate conversion (maps vacuum coords to image pixels)
      calibration_points: [
        { vacuum: { x: 0, y: 0 }, map: { x: 450, y: 300 } },
        { vacuum: { x: 1000, y: 0 }, map: { x: 530, y: 300 } },
        { vacuum: { x: 0, y: 1000 }, map: { x: 450, y: 220 } },
      ],
      // Charger/dock position (vacuum coordinates)
      charger_position: {
        x: 148,
        y: 412,
        a: 271,
      },
      // Current vacuum position (vacuum coordinates)
      vacuum_position: {
        x: -2500,
        y: 1800,
        a: 45,
      },
      // Room segments data (keyed by room ID)
      rooms: {
        '1': {
          id: 1,
          x0: -6000,
          y0: 3550,
          x1: -4250,
          y1: 5300,
          room_id: 1,
          name: 'Living Room',
          icon: 'mdi:sofa',
        },
        '2': {
          id: 2,
          x0: -4200,
          y0: 2000,
          x1: -2500,
          y1: 3500,
          room_id: 2,
          name: 'Kitchen',
          icon: 'mdi:silverware-fork-knife',
        },
        '3': {
          id: 3,
          x0: -2400,
          y0: 1000,
          x1: -500,
          y1: 2500,
          room_id: 3,
          name: 'Bedroom',
          icon: 'mdi:bed',
        },
      },
      // Currently active/cleaning segments
      active_segments: [],
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

    callService: async (domain: string, service: string, serviceData?: Record<string, unknown>) => {
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
      await new Promise((resolve) => setTimeout(resolve, 100));

      console.log('[Mock Hass] Service completed:', { domain, service });
    },
  };

  return hass;
}

function handleVacuumService(
  service: string,
  serviceData: Record<string, unknown> | undefined,
  states: Record<string, HassEntity>
) {
  const entityId = (serviceData?.entity_id as string | undefined) || data.entity_id;
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
    },
  });
}

export function updateMockEntityState(hass: Hass, entityId: string, updates: Partial<HassEntity>) {
  if (hass.states[entityId]) {
    Object.assign(hass.states[entityId], updates);
    hass.states[entityId].last_updated = new Date().toISOString();
    console.log('[Mock Hass] Entity updated:', entityId, updates);
  }
}

// Development mode detection
export const isDevelopment = import.meta.env.DEV;
