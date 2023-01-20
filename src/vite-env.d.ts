/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_ENVIRONMENT:
    | 'dev'
    | 'qa'
    | 'prod-pilot'
    | 'prod'
    | 'cypress';
  readonly NODE_ENV: 'development' | 'test' | 'production';
  readonly PACKAGE_VERSION: string;

  readonly VITE_APP_MSW_ENABLED: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
