/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import loadVersion from 'vite-plugin-package-version';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const { default: SonarReporter } = await import('vitest-sonar-reporter');
  return {
    plugins: [
      react(),
      loadVersion(),
      svgr(),
      legacy(),
      checker({ typescript: true }),
      splitVendorChunkPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['vite.svg', 'favicon.ico', 'apple-touch-icon.png'],
        manifest: {
          name: 'My Awesome App',
          short_name: 'MyApp',
          description: 'My Awesome App description',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
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
