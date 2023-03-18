import { defineConfig } from 'cypress';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { cloudPlugin } from '@cypress/cloud-plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
    },
  },
});
