/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import loadVersion from 'vite-plugin-package-version';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';
import istanbul from 'vite-plugin-istanbul';

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
      istanbul({
        include: 'src/*',
        exclude: ['node_modules', 'test/'],
        extension: ['.js', '.ts', '.jsx', '.tsx'],
        requireEnv: true,
      }),
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
        exclude: ['src/setupTests.ts', 'src/testUtils'],
      },
    },
  };
});
