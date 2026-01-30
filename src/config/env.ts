/**
 * Development configuration from environment variables
 */
export const devConfig = {
  mockEntityId: import.meta.env.VITE_MOCK_ENTITY_ID || 'vacuum.entity',
  mockEntityTitle: import.meta.env.VITE_MOCK_ENTITY_TITLE || 'Dreame Vacuum',
  mockServerUrl: import.meta.env.VITE_MOCK_SERVER_URL || 'http://localhost:3001',
  mockServerPort: import.meta.env.VITE_MOCK_SERVER_PORT || '3001',
} as const;

export const isDevelopment = import.meta.env.DEV;
