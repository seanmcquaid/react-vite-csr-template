/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_ENVIRONMENT: 'dev' | 'qa' | 'staging' | 'prod' | 'cypress';
  readonly MODE: 'development' | 'test' | 'production';
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_MSW_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
