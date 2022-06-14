/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import loadVersion from 'vite-plugin-package-version';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const { default: SonarReporter } = await import('vitest-sonar-reporter');
  return {
    plugins: [react(), loadVersion(), svgr(), legacy()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
      reporters: ['default', new SonarReporter()],
      outputFile: 'sonar-report.xml',
      coverage: {
        reporter: ['lcov'],
      },
    },
  };
});
