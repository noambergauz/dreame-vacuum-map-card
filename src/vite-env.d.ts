/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCK_ENTITY_ID: string;
  readonly VITE_MOCK_ENTITY_TITLE: string;
  readonly VITE_MOCK_SERVER_URL: string;
  readonly VITE_MOCK_SERVER_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
