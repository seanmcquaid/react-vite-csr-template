/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import loadVersion from 'vite-plugin-package-version';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';

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
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
      coverage: {
        reporter: ['lcov'],
      },
    },
  };
});
