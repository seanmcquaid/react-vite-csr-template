/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import loadVersion from 'vite-plugin-package-version';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      loadVersion(),
      svgr(),
      legacy(),
      checker({ typescript: true }),
      splitVendorChunkPlugin(),
      visualizer(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
      coverage: {
        provider: 'istanbul',
        reporter: ['lcov'],
        all: true,
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        exclude: [
          'src/setupTests.ts',
          'src/testUtils',
          'src/routes/AppRouter.tsx',
          'src/routes/RouteConstants.ts',
          'src/Root.tsx',
          'src/AppConstants.ts',
          'src/i18n',
          'src/main.tsx',
        ],
      },
    },
  };
});
